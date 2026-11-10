// Bundle de production ; la version vient de package.json (seule source de vérité).
import { build } from 'esbuild';
import { readFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
await build({
  entryPoints: ['src/din-panel-card.ts'], bundle: true, minify: true, format: 'esm', target: 'es2021',
  outfile: 'dist/din-panel-card.js', define: { __CARD_VERSION__: JSON.stringify(version) },
});
console.log(`din-panel-card v${version} -> dist/din-panel-card.js`);
