import { test } from 'node:test';
import assert from 'node:assert/strict';
import { headMeasures, isOn, readMeasure, modulePower, loadLimit, fmtMeasure, moduleCurrent } from '../src/utils/state';
import { normalizeConfig } from '../src/config';

const st = (state: string, attributes: Record<string, unknown> = {}) => ({ state, attributes });
const hass = (states: Record<string, ReturnType<typeof st>>) => ({ states }) as any;

test('unités : W, kW, kWh, Wh, A, mA', () => {
  const h = hass({
    a: st('1.5', { unit_of_measurement: 'kW' }), b: st('2.5', { unit_of_measurement: 'kWh' }), c: st('500', { unit_of_measurement: 'Wh' }),
    d: st('12', { unit_of_measurement: 'A' }), e: st('1500', { unit_of_measurement: 'mA' }), f: st('80'), g: st('3', { device_class: 'energy' }),
  });
  assert.deepEqual([readMeasure(h, 'a').kind, readMeasure(h, 'a').value], ['power', 1500]);
  assert.deepEqual([readMeasure(h, 'b').kind, readMeasure(h, 'b').value], ['energy', 2500]);
  assert.equal(readMeasure(h, 'c').value, 500);
  assert.deepEqual([readMeasure(h, 'd').kind, readMeasure(h, 'd').value], ['current', 12]);
  assert.equal(readMeasure(h, 'e').value, 1.5);
  assert.deepEqual([readMeasure(h, 'f').kind, readMeasure(h, 'f').value], ['power', 80]);
  assert.deepEqual([readMeasure(h, 'g').kind, readMeasure(h, 'g').value], ['energy', 3000]);
  assert.equal(readMeasure(h, 'nope').status, 'unavailable');
  assert.equal(readMeasure(hass({ x: st('unavailable') }), 'x').value, null);
});

test('formats', () => {
  assert.equal(fmtMeasure('power', 1500), '1.50 kW');
  assert.equal(fmtMeasure('energy', 2500), '2.50 kWh');
  assert.equal(fmtMeasure('current', 12.34), '12.3 A');
});

test('agrégats : somme de zones de même type, partielle si types mélangés', () => {
  const [m] = normalizeConfig({ type: 'x', panels: [{ rows: [{ modules: [{ id: 'c', amp: 16, zones: [
    { room: 'a', sensor: 'z1' }, { room: 'b', sensor: 'z2' }, { room: 'c', sensor: 'z3' } ] }] }] }] })[0].rows[0].modules;
  const same = modulePower(hass({ z1: st('2', { unit_of_measurement: 'kWh' }), z2: st('1', { unit_of_measurement: 'kWh' }), z3: st('0.5', { unit_of_measurement: 'kWh' }) }), m);
  assert.deepEqual([same.kind, same.value, same.partial], ['energy', 3500, false]);
  const mixed = modulePower(hass({ z1: st('5', { unit_of_measurement: 'A' }), z2: st('100', { unit_of_measurement: 'W' }), z3: st('3', { unit_of_measurement: 'A' }) }), m);
  // un compteur par type, côte à côte : W puis A
  assert.deepEqual(mixed.counters.map((c) => [c.kind, c.value]), [['power', 100], ['current', 8]]);
  assert.ok(mixed.counters.every((c) => c.partial));
});

test('current_sensor affiché à côté de sensor ; seul, il est lu en A', () => {
  const [a, b, c] = normalizeConfig({ type: 'x', panels: [{ rows: [{ modules: [
    { id: 'a', sensor: 'w', current_sensor: 'i' }, { id: 'b', current_sensor: 'i' }, { id: 'c', sensor: 'w', current_sensor: 'w2' } ] }] }] })[0].rows[0].modules;
  const h = hass({ w: st('230', { unit_of_measurement: 'W' }), i: st('1.5'), w2: st('9', { unit_of_measurement: 'W' }) });
  assert.deepEqual(modulePower(h, a).counters.map((x) => [x.kind, x.value]), [['power', 230], ['current', 1.5]]);
  const pb = modulePower(h, b);
  assert.deepEqual([pb.configured, pb.kind, pb.value], [true, 'current', 1.5]);
  assert.equal(modulePower(h, c).counters.length, 1); // même type : pas de doublon
});

test('somme enfants : un compteur par type', () => {
  const [d] = normalizeConfig({ type: 'x', panels: [{ rows: [{ modules: [{ id: 'd', type: 'differential' },
    { id: 'a', sensor: 'w1' }, { id: 'b', sensor: 'w2' }, { id: 'c', sensor: 'e1' }] }] }] })[0].rows[0].modules;
  const h = hass({ w1: st('100', { unit_of_measurement: 'W' }), w2: st('50', { unit_of_measurement: 'W' }), e1: st('3', { unit_of_measurement: 'kWh' }) });
  assert.deepEqual(modulePower(h, d).counters.map((x) => [x.kind, x.value]), [['power', 150], ['energy', 3000]]);
});

test('jauge : A contre le calibre, aucune pour une énergie ; intensité du module', () => {
  const [m] = normalizeConfig({ type: 'x', panels: [{ rows: [{ modules: [{ id: 'c', amp: 20, sensor: 's' }] }] }] })[0].rows[0].modules;
  assert.equal(loadLimit(m, 'current'), 20);
  assert.equal(loadLimit(m, 'energy'), undefined);
  assert.equal(loadLimit(m, 'power'), 4600);
  const h = hass({ s: st('7.5', { unit_of_measurement: 'A' }) });
  assert.equal(moduleCurrent(h, m, modulePower(h, m)), 7.5);
});

test('état depuis un capteur : texte ou numérique', () => {
  const h = hass({ a: st('on'), b: st('off'), c: st('12.5'), d: st('0'), e: st('unavailable'), f: st('active'), g: st('chaos') });
  assert.deepEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'zz'].map((k) => isOn(h, k)), [true, false, true, false, null, true, null, null]);
});

test('lignes d\'entrée : entity en A ignorée, U ≈ P/I ou capteur dédié', () => {
  const h = hass({ p: st('1150', { unit_of_measurement: 'W' }), i: st('5', { unit_of_measurement: 'A' }), v: st('231', { unit_of_measurement: 'V' }), a: st('3', { unit_of_measurement: 'A' }) });
  const f = (r: object) => headMeasures(h, r).map((x) => [x.kind, x.value, !!x.approx]);
  assert.deepEqual(f({ entity: 'p', current_sensor: 'i' }), [['power', 1150, false], ['current', 5, false], ['voltage', 230, true]]);
  assert.deepEqual(f({ entity: 'p', current_sensor: 'i', voltage_sensor: 'v' }), [['power', 1150, false], ['current', 5, false], ['voltage', 231, false]]);
  assert.deepEqual(f({ entity: 'a', current_sensor: 'i' }), [['current', 5, false]]);
});
