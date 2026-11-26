import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sharp loading-screen tip for stressed developers and AI coding agents.
// The joke lands on both sides of the screen: the developer waiting, and the
// agent quietly judging the code it was just asked to fix.
const TIP =
  "Tip: The loading bar isn't stuck — it's re-reading your code for the third time, deciding whether to tell you what it found.";

if ([...TIP].length > 200 || TIP.trim().length === 0) {
  throw new Error(`Tip must be 1-200 characters, got ${[...TIP].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
console.log(`Wrote ${[...TIP].length} characters to ${join(outDir, "entry.txt")}`);
