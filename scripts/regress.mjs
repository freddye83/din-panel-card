// Non-régression (jsdom) : vue schéma, vue mémorisée, langue, LED. Échoue (code 1) si une assertion est fausse.
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const w = new JSDOM('<!doctype html><body></body>', { runScripts: 'outside-only', pretendToBeVisual: true, url: 'http://localhost/' }).window;
w.eval(readFileSync('dist/din-panel-card.js', 'utf8').replace(/export\s*\{[^}]*\};?/g, ''));
const S = (v, u) => ({ state: v, attributes: { unit_of_measurement: u } });
const mk = async (cfg, states = {}, language = 'fr') => {
  const el = w.document.createElement('din-panel-card'); w.document.body.appendChild(el);
  el.setConfig(cfg); el.hass = { states, language }; await el.updateComplete; return el;
};
const q = (el, s) => [...el.shadowRoot.querySelectorAll(s)];

// 5. circuits avant le premier différentiel / rangée sans différentiel : reliés aux troncs
let el = await mk({ type: 'x', view: 'tree', panels: [{ id: 'a', rows: [{ id: 'r', phases: ['L1'], modules: [{ id: 'c1', label: 'Libre' }, { id: 'c2', label: 'Libre 2' }] }] }] });
assert.equal(q(el, '.tap').length, 1 + 2, 'tronc L1 + 2 piquages de circuits');
assert.ok(q(el, '.trunk').length === 1);

// 6. clic sur total avec voltage_sensor seul
const clicks = [];
el = await mk({ type: 'x', view: 'tree', sensors: { total: { voltage_sensor: 'sensor.v' } }, panels: [{ id: 'a', rows: [{ id: 'r', phases: ['L1'], modules: [{ id: 'c1' }] }] }] }, { 'sensor.v': S('231', 'V') });
el.addEventListener('hass-more-info', (e) => clicks.push(e.detail.entityId));
q(el, 'rect.hit[role=button]')[0].dispatchEvent(new w.Event('click'));
assert.deepEqual(clicks, ['sensor.v']);

// 7. vue : `view:` du YAML prioritaire ; mémoire par carte sinon
const A = { type: 'x', title: 'A', panels: [{ id: 'a', rows: [] }] }, B = { type: 'x', title: 'B', panels: [{ id: 'b', rows: [] }] };
const a = await mk(A), b = await mk(B);
a._setView('tree'); await a.updateComplete;
const b2 = await mk(B); assert.equal(b2._view, 'panel', 'la vue de A ne contamine pas B');
const a2 = await mk(A); assert.equal(a2._view, 'tree', 'la vue de A est mémorisée');
const f = await mk({ ...A, view: 'panel' }); assert.equal(f._view, 'panel', 'view: explicite prioritaire');

// 8. changement de langue => re-rendu
el = await mk({ type: 'x', panels: [{ id: 'a', rows: [] }], sensors: { total: { entity: 'sensor.t' } } }, { 'sensor.t': S('1', 'W') }, 'fr');
const before = el.shadowRoot.querySelector('.panel-title').textContent;
el.hass = { ...el.hass, language: 'en' }; await el.updateComplete;
assert.notEqual(el.shadowRoot.querySelector('.panel-title').textContent, before);

// 10. LED : rouge clignotante > 100 %, négatif borné
el = await mk({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'c', amp: 10, sensor: 's' }] }] }] }, { s: S('3000', 'W') });
assert.equal(q(el, '.led.err').length, 1);
el = await mk({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'c', amp: 10, sensor: 's' }] }] }] }, { s: S('-500', 'W') });
assert.equal(q(el, '.led.ok').length, 1);

// accessibilité : zones focusables
el = await mk({ type: 'x', view: 'tree', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'c1' }] }] }] });
assert.ok(q(el, 'rect.hit[tabindex="0"]').length >= 1);
// groupe (schéma) : [id diff] libellé rangée - libellé diff, parties vides omises, pour tous les différentiels
el = await mk({ type: 'x', view: 'tree', panels: [{ id: 'a', rows: [
  { id: 'Std', phases: ['L1'], modules: [{ type: 'differential', id: 'S0' }, { id: 'S1', label: 'Chambre' }] },
  { id: 'r1', label: 'Cuisine', modules: [{ type: 'differential', id: 'D1', label: 'Prises' }, { id: 'x' }, { type: 'differential', id: 'D2' }] }] }] });
const txt = q(el, 'text').map((t) => t.textContent);
assert.deepEqual(txt.filter((t) => /^(S0|D1|D2|Cuisine.*|Prises)$/.test(t) || t === 'Std'), ['S0', 'D1', 'Cuisine - Prises', 'D2', 'Cuisine'], txt.join('|'));
// éditeur : les formulaires des modules ne sont créés qu'à l'ouverture (sinon des centaines de sélecteurs d'entités)
const ed = w.document.createElement('din-panel-card-editor'); w.document.body.appendChild(ed);
ed.hass = { states: {}, language: 'fr' };
ed.setConfig({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', modules: Array.from({ length: 40 }, (_, i) => ({ id: 'c' + i, zones: [{ room: 'a' }] })) }] }] });
await ed.updateComplete;
const forms = () => ed.shadowRoot.querySelectorAll('ha-form').length;
const toggle = async (d) => { d.open = true; d.dispatchEvent(new w.Event('toggle')); await ed.updateComplete; };
const secs = () => [...ed.shadowRoot.querySelectorAll('details')].filter((x) => x.parentNode === ed.shadowRoot);
assert.equal(secs().length, 3, 'sections : général, capteurs globaux, 1 tableau');
assert.equal(forms(), 1, 'seul « Général » est ouvert au départ');
assert.ok(secs()[0].hasAttribute('open') && !secs()[1].hasAttribute('open') && !secs()[2].hasAttribute('open'));
await toggle(secs()[1]); assert.equal(forms(), 2, 'capteurs globaux créés à l\'ouverture');
await toggle(secs()[2]); assert.equal(forms(), 4, 'tableau + rangée créés à l\'ouverture du tableau');
const mod = [...secs()[2].querySelectorAll('details')].find((x) => !x.hasAttribute('open'));
await toggle(mod); assert.ok(forms() >= 6, 'formulaire de module créé à l\'ouverture du module');
// schéma : zone sans icône -> icône du disjoncteur ; vue tableau : infobulle riche avec icônes
el = await mk({ type: 'x', view: 'tree', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'p1', usage: 'socket', zones: [{ room: 'Salon' }, { room: 'Bureau', icon: 'mdi:desk' }] }] }] }] });
const zi = q(el, 'foreignObject ha-icon').map((e) => e.getAttribute('icon'));
assert.deepEqual(zi.slice(-2), ['mdi:power-socket-eu', 'mdi:desk'], zi.join(','));
el = await mk({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'p1', usage: 'socket', zones: [{ floor: 'RDC', room: 'Salon' }, { room: 'Bureau', icon: 'mdi:desk' }] }] }] }] });
const tz = q(el, '.tip .tip-z ha-icon').map((e) => e.getAttribute('icon'));
assert.deepEqual(tz, ['mdi:power-socket-eu', 'mdi:desk']);
assert.ok(!el.shadowRoot.querySelector('.mod[title]'), 'plus d\'infobulle native');
console.log('regress OK');
