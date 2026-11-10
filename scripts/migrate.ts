// Usage : npx tsx scripts/migrate.ts ancien.yaml > nouveau.yaml
import { readFileSync } from 'node:fs';
import { parse, stringify } from 'yaml';
import { legacyToPanels } from '../src/config';

const file = process.argv[2] ?? 'examples/legacy.yaml';
const cfg = parse(readFileSync(file, 'utf8'));
if (!cfg.groups) throw new Error("Pas de clé 'groups' dans " + file);
const { groups, ...rest } = cfg;
process.stdout.write(stringify({ ...rest, panels: legacyToPanels(groups) }, { lineWidth: 0 }));
