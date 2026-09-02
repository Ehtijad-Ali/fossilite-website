import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tmp = join(root, "node_modules", ".calccheck");

await build({
  root, logLevel: "error", configFile: false,
  build: { ssr: join(root, "scripts", "check-calculators-entry.ts"), outDir: tmp,
    emptyOutDir: true, rollupOptions: { output: { entryFileNames: "entry.mjs" } } },
});

const { GUIDES } = await import(pathToFileURL(join(tmp, "entry.mjs")).href);
const withCalc = GUIDES.filter((g) => g.calculator);
let checks = 0; const problems = [];

const bad = (n) => typeof n === "string"
  ? /NaN|Infinity|undefined|null/.test(n)
  : !Number.isFinite(n);

for (const g of withCalc) {
  const c = g.calculator;
  // Every corner of the input space, plus the midpoint, plus the defaults.
  const combos = [];
  const corners = c.inputs.map((i) => [i.min, i.value, i.max, i.min + i.step, i.max - i.step]);
  const idx = c.inputs.map(() => 0);
  const total = Math.min(3000, corners.reduce((a, b) => a * b.length, 1));
  for (let n = 0; n < total; n++) {
    const v = {}; let carry = 1;
    c.inputs.forEach((inp, k) => { v[inp.id] = corners[k][idx[k]]; });
    combos.push({ ...v });
    for (let k = c.inputs.length - 1; k >= 0 && carry; k--) {
      idx[k] += carry; carry = 0;
      if (idx[k] >= corners[k].length) { idx[k] = 0; carry = 1; }
    }
  }
  for (const v of combos) {
    checks++;
    let r;
    try { r = c.compute(v); }
    catch (e) { problems.push([g.slug, "THREW " + e.message, JSON.stringify(v)]); continue; }
    for (const o of r.outputs) {
      if (bad(o.value)) problems.push([g.slug, "bad output " + o.label + ": " + o.value, JSON.stringify(v)]);
      if (o.note && bad(o.note)) problems.push([g.slug, "bad note: " + o.note, JSON.stringify(v)]);
    }
    if (r.plot) {
      for (const p of r.plot.points) {
        if (bad(p[0]) || bad(p[1])) { problems.push([g.slug, "bad plot point " + JSON.stringify(p), JSON.stringify(v)]); break; }
        if (p[0] < -0.01 || p[0] > 100.01 || p[1] < -0.01 || p[1] > 100.01) {
          problems.push([g.slug, "plot point outside 0-100: " + JSON.stringify(p), JSON.stringify(v)]); break;
        }
      }
      if (r.plot.marker && (bad(r.plot.marker[0]) || bad(r.plot.marker[1])))
        problems.push([g.slug, "bad marker", JSON.stringify(v)]);
    }
  }
}
console.log(`calculators: ${withCalc.length}   input combinations exercised: ${checks}`);
console.log(`problems: ${problems.length}`);
for (const p of problems.slice(0, 12)) console.log("   ", p[0], "->", p[1], "  inputs:", p[2]);
