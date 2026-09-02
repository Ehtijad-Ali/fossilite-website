// Probe: renders every workflow figure to static markup so a node script can
// prove the component does not throw on any of the authored data, and that the
// words actually reach the page. There is no browser in this toolchain, so this
// is the closest thing to opening one.
import { renderToStaticMarkup } from "react-dom/server";
import ThemeProvider from "../src/theme/theme";
import { GuideWorkflow } from "../src/views/Resources/GuideWorkflow";
import { GUIDES } from "../src/content";
import type { WorkflowDiagram } from "../src/content/types";

export { GUIDES };

export const renderWorkflow = (d: WorkflowDiagram) =>
  renderToStaticMarkup(
    <ThemeProvider>
      <GuideWorkflow d={d} />
    </ThemeProvider>,
  );
