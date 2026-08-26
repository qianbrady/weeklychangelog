import { readFileSync } from "fs";
const html = readFileSync("index.html", "utf8");
const fails = [];
if (html.length < 8000) fails.push("index.html suspiciously small: " + html.length);
if (!/<title>.+<\/title>/.test(html)) fails.push("missing <title>");
if (!/name="description"/.test(html)) fails.push("missing meta description");
if (!html.includes("© 2025")) fails.push("missing copyright footer");
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (!scripts.length) fails.push("no inline <script> block found");
for (let i = 0; i < scripts.length; i++) {
  try { new Function(scripts[i]); }
  catch (e) { fails.push(`script #${i + 1} syntax error: ${e.message}`); }
}
if (/\bTODO\b|\bFIXME\b/.test(html)) fails.push("bare TODO/FIXME in shipped page");
if (fails.length) { console.error("SMOKE FAIL:\n" + fails.join("\n")); process.exit(1); }
console.log("smoke OK:", html.length, "bytes,", scripts.length, "script block(s) parsed");