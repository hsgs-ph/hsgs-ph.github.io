import fs from 'node:fs';
import path from 'node:path';

const extensions = new Set(['.astro', '.md', '.yml', '.yaml', '.json', '.css']);
const ignored = new Set(['node_modules', '.git', '.astro', 'dist']);
const root = process.cwd();
const files = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignored.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (extensions.has(path.extname(entry.name))) files.push(fullPath);
  }
}
walk(root);
const invalid = files.filter((file) => {
  const source = fs.readFileSync(file, 'utf8');
  return source !== source.normalize('NFC');
});
if (invalid.length) {
  console.error('Các file chưa ở Unicode NFC:');
  invalid.forEach((file) => console.error(path.relative(root, file)));
  process.exitCode = 1;
} else {
  console.log(`NFC OK: ${files.length} file UTF-8 đã kiểm tra.`);
}
