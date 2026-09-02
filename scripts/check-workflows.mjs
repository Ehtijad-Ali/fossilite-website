// Renders every workflow figure to static markup and checks the result.
//
// There is no browser in this toolchain, so this stands in for opening one. It
// will not catch a layout problem, but it does catch the two things that would
// otherwise reach a reader: a component that throws on some shape of authored
// data, and content that silently never renders because a field was ignored.
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tmp = join(root, "node_modules", ".wfcheck");

await build({
  root,
  logLevel: "error",
  configFile: false,
  esbuild: { jsx: "automatic" },
  // MUI ships directory imports that node will not resolve as ESM, so the
  // whole tree gets bundled rather than left external.
  ssr: { noExternal: true },
  build: {
    ssr: join(root, "scripts", "check-workflows-entry.tsx"),
    outDir: tmp,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: "entry.mjs" } },
  },
});

const { GUIDES, renderWorkflow } = await import(pathToFileURL(join(tmp, "entry.mjs")).href);

const strip = (h) => h.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const problems = [];
let rendered = 0;

for (const g of GUIDES) {
  for (const d of g.diagrams ?? []) {
    if (d.kind !== "workflow") continue;
    rendered++;
    let html;
    try {
      html = renderWorkflow(d);
    } catch (e) {
      problems.push([g.slug, "THREW " + e.message]);
      continue;
    }
    const text = strip(html);

    // Every authored string has to actually appear.
    const must = [d.title, d.trigger, d.outcome];
    if (d.caption) must.push(d.caption);
    if (d.runtime) must.push(d.runtime);
    if (d.loop) must.push(d.loop);
    for (const s of d.stages) {
      must.push(s.label);
      if (s.detail) must.push(s.detail);
      if (s.output) must.push(s.output);
      if (s.exception) must.push(s.exception);
    }
    for (const m of must) {
      if (!text.includes(m.replace(/\s+/g, " "))) {
        problems.push([g.slug, "not rendered: " + m.slice(0, 62)]);
      }
    }

    // The actor word has to be on every card, since colour alone is not enough.
    for (const w of ["automatic", "the model", "your rule", "a person"]) {
      const used = d.stages.some(
        (s) =>
          ({ system: "automatic", model: "the model", rule: "your rule", person: "a person" })[s.actor] === w,
      );
      if (used && !text.toLowerCase().includes(w)) problems.push([g.slug, "actor word missing: " + w]);
    }

    // The controls and the two framing plates.
    for (const chrome of ["Runs when", "What changes", "Restart"]) {
      if (!text.includes(chrome)) problems.push([g.slug, "chrome missing: " + chrome]);
    }
    if (d.stages.some((s) => s.exception) && !text.includes("If unsure")) {
      problems.push([g.slug, "exception branch label missing"]);
    }

    // Nothing should leak an unresolved value into the markup.
    if (/undefined|NaN|\[object Object\]/.test(text)) {
      problems.push([g.slug, "unresolved value in markup"]);
    }
  }
}

console.log(`workflows rendered: ${rendered}`);
console.log(`problems: ${problems.length}`);
for (const [slug, msg] of problems.slice(0, 40)) console.log("  !!", slug, "|", msg);
process.exit(problems.length ? 1 : 0);
