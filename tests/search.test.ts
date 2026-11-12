import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeMatcher, countMatches, norm } from '../src/utils/search';
import { normalizeConfig } from '../src/config';

const cfg = normalizeConfig({ type: 'x', panels: [{ id: 'p', label: 'Tableau 2', rows: [{ id: 'S0', label: 'Étage', modules: [
  { type: 'differential', id: 'R1', amp: 40, mA: 30 },
  { id: '2-4', label: 'Four', amp: 20, usage: 'power', sensor: 'sensor.four_w', zones: [{ floor: 'RDC', room: 'Cuisine' }] },
  { id: '2-5', label: 'Prises chambres', amp: 16, usage: 'socket' },
  { type: 'impulse', id: '2-8', label: 'Télérupteur couloir' }, { type: 'free', id: 'x' }] }] }] } as any);
const panels = cfg as any;
const count = (q: string) => countMatches(panels, makeMatcher(q, 'fr')!);

test('recherche : accents, casse, multi-champs', () => {
  assert.equal(norm('Étage'), 'etage');
  assert.equal(count('etage'), 4, 'nom de rangée -> tous les modules de la rangée (hors libre)');
  assert.equal(count('CUISINE'), 1);
  assert.equal(count('sensor.four'), 1);
  assert.equal(count('telerupteur'), 1);
  assert.equal(count('differentiel'), 1, 'type traduit');
  assert.equal(count('20a'), 1); assert.equal(count('16'), 1);
});
test('recherche : ET entre termes, exclusion, requête vide', () => {
  assert.equal(count('cuisine 20'), 1); assert.equal(count('cuisine 16'), 0);
  assert.equal(count('etage -prises'), 3);
  assert.equal(makeMatcher('   ', 'fr'), null);
  assert.equal(count('-four'), 3, 'exclusion seule');
});
