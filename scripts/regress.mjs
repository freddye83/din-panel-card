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
assert.equal(q(el, '.tap').length, 1 + 1, 'rangée commençant par un disjoncteur : tête de groupe sur le tronc L1, les autres modules groupés dessous');
{
  const e1 = await mk({ type: 'x', view: 'tree', panels: [{ id: 'a', rows: [{ id: 'r', phases: ['L1'], modules: [{ id: 'c1' }] }] }] });
  assert.equal(q(e1, '.tap').length, 1 + 1, 'disjoncteur seul : un piquage direct');
  const e3 = await mk({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', phases: ['L1', 'L2', 'L3'], modules: [{ id: 'a', phases: ['L1'] }, { id: 'b', phases: ['L2'] }, { type: 'contactor', id: 'c', poles: 3, phases: ['L1', 'L2', 'L3'] }] }, { id: 'r2', phases: ['L1'], modules: [{ id: 'd' }, { id: 'e' }] }] }] });
  assert.equal(q(e3, '.phtag').length, 3, 'rangée mixte tri/mono : repère de phase au-dessus de chaque module');
  assert.equal(q(e3, '.phtag')[2].querySelectorAll('i').length, 3, 'module tri : L1 L2 L3');
  assert.equal(q(e3, '.rail-wrap.ph').length, 1, 'rangée homogène : pas de repère');
  const e2 = await mk({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', phases: ['L1', 'L2', 'L3'], modules: [{ type: 'surge', id: 'S1', poles: 4 }, { type: 'surge', id: 'S2', poles: 3 }, { type: 'surge', id: 'S3', poles: 1 }] }] }] });
  const sp = q(e2, '.t-surge');
  assert.equal(sp[0].querySelectorAll('.zspd.sq').length, 4, 'parafoudre 4 pôles : 4 carrés');
  assert.deepEqual([...sp[0].querySelectorAll('.term.top b')].map((b) => b.textContent), ['N', 'L1', 'L2', 'L3'], '4 pôles : N L1 L2 L3');
  assert.deepEqual([...sp[1].querySelectorAll('.term.top b')].map((b) => b.textContent), ['L1', 'L2', 'L3'], '3 pôles : L1 L2 L3');
  assert.equal(sp[2].querySelectorAll('.term.top i').length, 2, '1 pôle : 2 vis, la première = N');
  assert.equal(sp[2].querySelector('.term.top b').textContent, 'N');
  for (const m of sp) assert.equal(m.querySelectorAll('.term.bot i').length, 1, 'une seule vis en bas (terre)');
}
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
assert.equal(q(el, '.led').length, 0, 'point de charge masqué par défaut');
assert.equal(q(el, '.readout.ld-err').length, 1, 'surcharge : mesure en rouge clignotant');
el = await mk({ type: 'x', show_led: true, panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'c', amp: 10, sensor: 's' }] }] }] }, { s: S('3000', 'W') });
assert.equal(q(el, '.led.err').length, 1, 'show_led : point rétabli');
el = await mk({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'c', amp: 10, sensor: 's' }] }] }] }, { s: S('-500', 'W') });
assert.equal(q(el, '.led').length, 0);
assert.equal(q(el, '.readout[class*="ld-"]').length, 0, 'charge normale : mesure inchangée');

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
assert.equal(forms(), 0, 'tout est replié au départ (même « Général »)');
assert.ok(secs().every((x) => !x.hasAttribute('open')));
await toggle(secs()[0]); assert.equal(forms(), 1, 'général créé à l\'ouverture');
await toggle(secs()[1]); assert.equal(forms(), 2, 'capteurs globaux créés à l\'ouverture');
await toggle(secs()[2]); assert.equal(forms(), 3, 'ouverture du tableau : seul son formulaire est créé, rangées repliées');
const rowD = [...secs()[2].querySelectorAll('details')][0];
assert.ok(!rowD.hasAttribute('open'), 'rangée repliée');
await toggle(rowD); assert.equal(forms(), 4, 'rangée créée à l\'ouverture');
const mod = [...rowD.querySelectorAll('details')].find((x) => !x.hasAttribute('open'));
await toggle(mod); assert.ok(forms() >= 5, 'formulaire de module créé à l\'ouverture du module');
// schéma : zone sans icône -> icône du disjoncteur ; vue tableau : infobulle riche avec icônes
el = await mk({ type: 'x', view: 'tree', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'p1', usage: 'socket', zones: [{ room: 'Salon' }, { room: 'Bureau', icon: 'mdi:desk' }] }] }] }] });
const zi = q(el, 'foreignObject ha-icon').map((e) => e.getAttribute('icon'));
assert.deepEqual(zi.slice(-2), ['mdi:power-socket-eu', 'mdi:desk'], zi.join(','));
el = await mk({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'p1', usage: 'socket', zones: [{ floor: 'RDC', room: 'Salon' }, { room: 'Bureau', icon: 'mdi:desk' }] }] }] }] });
const tz = q(el, '.tip .tip-z ha-icon').map((e) => e.getAttribute('icon'));
assert.deepEqual(tz, ['mdi:power-socket-eu', 'mdi:desk']);
assert.ok(!el.shadowRoot.querySelector('.mod[title]'), 'plus d\'infobulle native');

// 12. recherche multi-champ : estompe, compte, Entrée/Échap, vue schéma, désactivable
{
  const cfgS = { type: 'x', panels: [{ id: 'p', label: 'T', rows: [
    { id: 'r1', label: 'RDC', modules: [{ type: 'differential', id: 'R1' }, { id: '1-1', label: 'Four', amp: 20, zones: [{ floor: 'RDC', room: 'Cuisine' }] }, { id: '1-2', label: 'Lumières salon', amp: 10 }] },
    { id: 'r2', label: 'Étage', modules: [{ type: 'differential', id: 'R2' }, { id: '2-1', label: 'Chauffage', amp: 16 }] }] }] };
  const e = await mk(cfgS);
  const input = e.shadowRoot.querySelector('.search input');
  assert.ok(input, 'champ de recherche présent');
  input.value = 'cuisine 20'; input.dispatchEvent(new w.Event('input')); await e.updateComplete;
  assert.equal(q(e, '.mod.s-hit').length, 1, 'un seul module correspond (ET)');
  assert.ok(q(e, '.mod.s-dim').length >= 3, 'les autres sont estompés');
  assert.equal(q(e, '.row.nomatch').length, 1, 'la rangée sans résultat est repliée');
  assert.match(e.shadowRoot.querySelector('.search .count').textContent, /1 résultat/);
  input.value = 'zzz'; input.dispatchEvent(new w.Event('input')); await e.updateComplete;
  assert.match(e.shadowRoot.querySelector('.search .count').textContent, /aucun/);
  input.value = 'etage'; input.dispatchEvent(new w.Event('input')); await e.updateComplete;
  e._setView('tree'); await e.updateComplete;
  assert.ok(q(e, '.dia g.s-hit').length >= 1 && q(e, '.dia g.s-dim').length >= 1, 'schéma : lignes estompées / nettes');
  const input2 = e.shadowRoot.querySelector('.search input');
  input2.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape' })); await e.updateComplete;
  assert.equal(q(e, '.s-dim').length, 0, 'Échap efface la recherche');
  const off = await mk({ ...cfgS, search: false });
  assert.equal(off.shadowRoot.querySelector('.search'), null, 'search: false masque le champ');
}

// 13. schéma + recherche : seuls les trouvés sont dépliés ; zones non concernées estompées
{
  const e = await mk({ type: 'x', view: 'tree', panels: [{ id: 'p', label: 'T', rows: [
    { id: 'r1', label: 'RDC', modules: [{ type: 'differential', id: 'R1' }, { id: '1-1', label: 'Four', amp: 20, zones: [{ floor: 'RDC', room: 'Cuisine' }, { floor: 'RDC', room: 'Salon' }] }, { id: '1-2', label: 'Lumières', amp: 10, zones: [{ floor: 'RDC', room: 'Garage' }] }] },
    { id: 'r2', label: 'Etage', modules: [{ type: 'differential', id: 'R2' }, { id: '2-1', label: 'Chauffage', amp: 16, zones: [{ floor: 'R+1', room: 'Chambre' }] }] }] }] });
  const before = q(e, '.dia g').length;
  const input = e.shadowRoot.querySelector('.search input');
  input.value = 'cuisine'; input.dispatchEvent(new w.Event('input')); await e.updateComplete;
  const zones = q(e, '.dia g').filter((g) => /Cuisine|Salon|Garage|Chambre/.test(g.textContent));
  assert.equal(zones.length, 2, 'seul le circuit trouvé est déplié (ses 2 zones), pas Garage ni Chambre');
  assert.ok(zones.some((g) => !g.classList.contains('s-dim') && /Cuisine/.test(g.textContent)), 'zone concernée nette');
  assert.ok(zones.some((g) => g.classList.contains('s-dim') && /Salon/.test(g.textContent)), 'zone non concernée estompée');
  assert.ok(q(e, '.dia g').length < before + 5);
}

// 14. rangée sans différentiel ni disjoncteur de tête : une ligne [id rangée] ; rattachement des mono visible au dépliement
{
  const cfgP = (collapsed) => ({ type: 'x', view: 'tree', collapsed, sensors: { phases: { l1: { entity: 'sensor.a' }, l2: { entity: 'sensor.b' }, l3: { entity: 'sensor.c' } } }, panels: [{ id: 'P', rows: [{ id: 'L1', phases: ['L1', 'L2', 'L3'], modules: [
    { type: 'contactor', id: '5-1', poles: 3, width: 3, label: 'Pompe', phases: ['L1', 'L2', 'L3'] },
    { id: '5-4', phases: ['L1'], label: 'PAC' }, { id: '5-5', phases: ['L2'], label: 'Traitement' }, { id: '5-6', phases: ['L3'], label: 'Local' }] }] }] });
  const open = await mk(cfgP(undefined)), closed = await mk(cfgP('rows'));
  const boxes = (e) => q(e, '.dia text').map((t) => t.textContent);
  assert.ok(boxes(open).includes('L1') && boxes(open).includes('5-4'), 'ligne [L1] + modules dessous');
  assert.ok(!boxes(closed).includes('5-4'), 'replié : modules masqués');
  assert.equal(q(open, '.tap').length - q(closed, '.tap').length, 3, 'les 3 mono : rattachement visible seulement déplié ; la contacteur tri (mêmes phases que la ligne) n\'a pas de piquage');
}
// 15. bornes : 1 pôle = 1 vis en haut et en bas, sans N ; 2 pôles = 2 vis + N ; 3 pôles sans N
{
  const e = await mk({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ id: 'a', poles: 1 }, { id: 'b', poles: 2 }, { id: 'c', poles: 3 }, { id: 'd', poles: 4 }] }] }] });
  const m = q(e, '.mod');
  const n = (i, pos) => m[i].querySelectorAll(`.term.${pos} i`).length;
  assert.deepEqual([0, 1, 2, 3].map((i) => n(i, 'top')), [1, 2, 3, 4], 'une vis par pôle en haut');
  assert.deepEqual([0, 1, 2, 3].map((i) => n(i, 'bot')), [1, 2, 3, 4], 'une vis par pôle en bas');
  assert.deepEqual([0, 1, 2, 3].map((i) => m[i].querySelectorAll('.term.n').length > 0), [false, true, false, true], 'repère N : 2 et 4 pôles seulement');
}
// 16. prise 2P+T et interrupteur sectionneur
{
  const e = await mk({ type: 'x', panels: [{ id: 'a', rows: [{ id: 'r', modules: [{ type: 'socket', id: 'P1', amp: 16 }, { type: 'prise', id: 'P2' }, { type: 'switch_disconnector', id: 'S1', amp: 63, poles: 4, state_entity: 'sensor.s' }, { type: 'sectionneur', id: 'S2' }] }] }] }, { 'sensor.s': { state: 'on', attributes: {} } });
  assert.equal(q(e, '.t-socket').length, 2, 'prise 2P+T (alias prise)');
  assert.equal(q(e, '.t-switch_disconnector').length, 2, 'interrupteur sectionneur (alias sectionneur)');
  assert.deepEqual([...q(e, '.t-socket')[0].querySelectorAll('.term.top b')].map((b) => b.textContent), ['N', 'L'], 'prise : 2 pôles, neutre à gauche puis phase');
  assert.equal(q(e, '.t-socket')[0].querySelectorAll('.zsock').length, 1);
  assert.equal(q(e, '.t-socket')[0].querySelectorAll('.blk').length, 0, 'prise : pas de bloc noir');
  assert.equal(q(e, '.t-socket')[0].querySelectorAll('.term.bot i').length, 1, 'prise : une seule vis en bas');
  assert.equal(q(e, '.t-socket')[0].querySelectorAll('.term.bot .earth').length, 1, 'prise : symbole de terre');
  assert.equal(q(e, '.t-socket')[0].style.getPropertyValue('--w'), '2', 'prise : 2 modules');
  assert.equal(q(e, '.t-switch_disconnector')[0].querySelectorAll('.zsd').length, 4, 'sectionneur 4 pôles : 4 symboles');
  assert.equal(q(e, '.t-switch_disconnector')[0].querySelectorAll('.zlens').length, 0, 'sectionneur : pas de voyant');
    assert.ok(q(e, '.t-switch_disconnector')[0].classList.contains('st-on'), 'sectionneur : liseré d\'état');
}
console.log('regress OK');
