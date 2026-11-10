import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
const dom = new JSDOM('<!doctype html><body></body>', { runScripts: 'outside-only', pretendToBeVisual: true });
const w = dom.window;
w.HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
w.eval(readFileSync('dist/din-panel-card.js', 'utf8').replace(/export\s*\{[^}]*\};?/g, ''));
const cfg = parse(readFileSync('examples/legacy.yaml', 'utf8'));
const el = w.document.createElement('din-panel-card');
w.document.body.appendChild(el);
el.setConfig(cfg);
const states = (v) => ({ 'sensor.zlinky_papp': { state: v, attributes: { unit_of_measurement: 'W' } },
  'sensor.refrigerateur_puissance': { state: '95', attributes: { unit_of_measurement: 'W' } },
  'sensor.prise_canape_1_power': { state: 'unavailable', attributes: {} } });
el.hass = { states: states('4200'), themes: { darkMode: false }, language: 'fr' };
await el.updateComplete;
const q = (s) => el.shadowRoot.querySelectorAll(s).length;
console.log('rows', q('.row'), 'modules', q('.mod'), 'plates', q('.plate'), 'readouts', q('.readout'), 'unavailable readouts', q('.readout.bad'));
console.log('gauge total:', el.shadowRoot.querySelector('.in-row .in-vals span').textContent);
el.hass = { states: states('9000'), themes: { darkMode: true }, language: 'fr' };
await el.updateComplete;
console.log('after update:', el.shadowRoot.querySelector('.in-row .in-vals span').textContent, 'dark:', el.shadowRoot.querySelector('ha-card').className);
el.shadowRoot.querySelectorAll('.mod')[8].click();
await el.updateComplete;
console.log('dialog open:', !!el.shadowRoot.querySelector('dialog[open]'), '|', el.shadowRoot.querySelector('.dlg h3').textContent);
// config avec tous les types
const el2 = w.document.createElement('din-panel-card'); w.document.body.appendChild(el2);
el2.setConfig(parse(readFileSync('examples/full-example.yaml', 'utf8')));
el2.hass = { states: {}, language: 'en' };
await el2.updateComplete;
console.log('full example modules:', el2.shadowRoot.querySelectorAll('.mod').length);

// ---- vue schéma unifilaire ----
const sr = el.shadowRoot;
const c = (q) => el.shadowRoot.querySelectorAll(q).length;
const toggle = [...sr.querySelectorAll('.tbtn')].find((b) => b.getAttribute('aria-pressed') !== null);
toggle.click(); await el.updateComplete;
console.log('schéma: svg', c('.dia svg'), '| boîtes', c('.dia .box'), '| pastilles puissance', c('.dia .bubble'), '| pills étage', c('.dia .pillt'), '| rows panel', c('.row'));
const vb = el.shadowRoot.querySelector('.dia svg').getAttribute('viewBox');
console.log('viewBox', vb);
const btns = () => [...el.shadowRoot.querySelectorAll('.tbtn')];
const nZ = () => c('.dia .pillt');
console.log('zones ouvertes:', nZ());
btns().find((b) => b.textContent.includes('Replier')).click(); await el.updateComplete;
console.log('après 1er repli (zones): pills', nZ(), '| boîtes', c('.dia .box'));
btns().find((b) => b.textContent.includes('Replier')).click(); await el.updateComplete;
console.log('après 2e repli (lignes): boîtes', c('.dia .box'));
btns().find((b) => b.textContent.includes('Replier')).click(); await el.updateComplete;
console.log('après 3e repli (tableau): boîtes', c('.dia .box'), '| ptbox', c('.dia .ptbox'));
btns().find((b) => b.textContent.includes('déplier')).click(); await el.updateComplete;
console.log('tout déplié: boîtes', c('.dia .box'), '| pills', nZ());
el.shadowRoot.querySelector('.dia .chevhit').dispatchEvent(new w.MouseEvent('click', { bubbles: true })); await el.updateComplete;
console.log('clic chevron 1er nœud: boîtes', c('.dia .box'));
el.shadowRoot.querySelectorAll('.dia .hit')[8].dispatchEvent(new w.MouseEvent('click', { bubbles: true })); await el.updateComplete;
console.log('dialog depuis schéma:', !!el.shadowRoot.querySelector('dialog[open]'));
