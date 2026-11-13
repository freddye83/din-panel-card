import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { chunkByWidth } from '../src/utils/layout';
import { normalizeConfig, legacyToPanels, collectEntities, validateConfig } from '../src/config';
import { loadLimit } from '../src/utils/state';

const cfg = parse(readFileSync('examples/legacy.yaml', 'utf8'));

test('ancienne config : aucune donnée perdue', () => {
  validateConfig(cfg);
  const panels = normalizeConfig(cfg);
  assert.equal(panels.length, 1);
  assert.equal(panels[0].rows.length, cfg.groups.length);
  cfg.groups.forEach((g: any, i: number) => {
    const row = panels[0].rows[i];
    const [diff, ...mods] = row.modules;
    assert.equal(diff.type, 'differential');
    assert.equal(diff.amp, g.amp); assert.equal(diff.mA, g.mA); assert.equal(diff.cls, g.class);
    assert.equal(diff.sensor, g.sensor); assert.equal(diff.max_w, g.max_w);
    assert.deepEqual(row.phases, g.phases);
    assert.equal(mods.length, g.circuits.length);
    g.circuits.forEach((c: any, j: number) => {
      const m = mods[j];
      assert.equal(m.id, String(c.id)); assert.equal(m.amp, c.amp); assert.equal(m.label, c.label);
      assert.equal(m.sensor, c.sensor); assert.equal(m.icon, c.icon);
      assert.equal(m.usage, c.type ?? 'other');
      assert.equal(m.zones.length, (c.zones ?? []).length);
      (c.zones ?? []).forEach((z: any, k: number) => {
        assert.equal(m.zones[k].floor, z.floor); assert.equal(m.zones[k].room, z.room);
        assert.equal(m.zones[k].sensor, z.sensor); assert.equal(m.zones[k].icon, z.icon);
      });
    });
    assert.equal(diff.children!.length, g.circuits.length);
  });
});

test('capteurs : tous les sensor: du YAML sont suivis', () => {
  const found = new Set(JSON.stringify(cfg).match(/sensor\.[a-z0-9_]+/g));
  const tracked = new Set(collectEntities(cfg, normalizeConfig(cfg)));
  for (const e of found) assert.ok(tracked.has(e), `capteur non suivi : ${e}`);
});

test('groupe 3 phases : disjoncteurs tripolaires par défaut, différentiel 4P', () => {
  const rows = normalizeConfig(cfg)[0].rows;
  assert.equal(rows[0].modules[0].poles, 4);
  assert.equal(rows[0].modules[1].poles, 3);
  assert.equal(rows[1].modules[1].poles, 2); // 1 DIN sans poles : phase + neutre
  assert.equal(rows[1].modules[1].width, 1);
});

test('migration puis normalisation = normalisation directe', () => {
  const direct = normalizeConfig(cfg);
  const migrated = normalizeConfig({ type: cfg.type, panels: legacyToPanels(cfg.groups) });
  assert.deepEqual(migrated, direct);
});

test('références circuit/group depuis panels', () => {
  const p = normalizeConfig({ type: 'x', groups: cfg.groups, panels: [{ rows: [{ modules: [{ group: 'R1' }, { circuit: '1-3' }] }] }] });
  const [d, c] = p[0].rows[0].modules;
  assert.equal(d.type, 'differential'); assert.equal(d.amp, 63);
  assert.equal(c.label, 'Clim'); assert.equal(c.zones.length, 3);
});

test('types, alias et largeurs', () => {
  const p = normalizeConfig({ type: 'x', panels: [{ rows: [{ modules: [
    { type: 'breaker_4p', amp: 25 }, { type: 'contactor_daynight' }, { type: 'meter' }, { type: 'inconnu' }, {},
  ] }] }] });
  const m = p[0].rows[0].modules;
  assert.deepEqual(m.map((x) => [x.type, x.poles, x.width]), [['breaker', 4, 4], ['contactor_daynight', 1, 2], ['meter', 2, 4], ['custom', 1, 1], ['breaker', 2, 1]]);
});

test('pôles : 1 DIN simple = 2 pôles, largeur inchangée ; explicites respectés', () => {
  const p = normalizeConfig({ type: 'x', panels: [{ rows: [{ modules: [
    { type: 'breaker', amp: 16 }, { type: 'breaker', poles: 1 }, { type: 'breaker', poles: 2 }, { type: 'breaker', width: 2 },
  ] }] }] });
  assert.deepEqual(p[0].rows[0].modules.map((x) => [x.poles, x.width]), [[2, 1], [1, 1], [2, 2], [1, 2]]);
});

test('relais, télérupteur, alimentation : types, alias, largeurs', () => {
  const p = normalizeConfig({ type: 'x', panels: [{ rows: [{ modules: [
    { type: 'relay' }, { type: 'relais' }, { type: 'impulse' }, { type: 'telerupteur' }, { type: 'psu', output: '24 V DC' }, { type: 'alimentation', width: 3 },
  ] }] }] });
  assert.deepEqual(p[0].rows[0].modules.map((x) => [x.type, x.poles, x.width]),
    [['relay', 2, 1], ['relay', 2, 1], ['impulse', 2, 1], ['impulse', 2, 1], ['psu', 2, 2], ['psu', 2, 3]]);
  assert.equal(p[0].rows[0].modules[4].output, '24 V DC');
});

test('modules_per_row : capacité par tableau, répartition sur rails', () => {
  const p = normalizeConfig({ type: 'x', modules_per_row: 6, panels: [
    { id: 'a', rows: [{ modules: [{ width: 2 }, { width: 2 }, { width: 2 }, { width: 1 }, { width: 4 }, { width: 8 }] }] },
    { id: 'b', modules_per_row: 12, rows: [] }, ] });
  assert.deepEqual(p.map((x) => x.capacity), [6, 12]);
  const lines = chunkByWidth(p[0].rows[0].modules, 6).map((l) => l.map((m) => m.width));
  assert.deepEqual(lines, [[2, 2, 2], [1, 4], [8]]);
  assert.equal(chunkByWidth(p[0].rows[0].modules).length, 1);
  assert.equal(normalizeConfig({ type: 'x', panels: [{ rows: [] }] })[0].capacity, undefined);
  assert.throws(() => validateConfig({ type: 'x', panels: [], modules_per_row: 0 as any }));
  assert.throws(() => validateConfig({ type: 'x', panels: [{ modules_per_row: 'abc' as any }] }));
});

test('config invalide rejetée', () => { assert.throws(() => validateConfig({ type: 'x' })); });

test('current_sensor des têtes (total / phases) suivi', () => {
  const e = collectEntities({ type: 'x', panels: [], sensors: { total: { entity: 'a', current_sensor: 'b' }, phases: { l1: { entity: 'c', current_sensor: 'd' } } } }, []);
  assert.deepEqual(e.sort(), ['a', 'b', 'c', 'd']);
});

test('migration : différentiel de groupe triphasé = 4 pôles ; tension nominale configurable', () => {
  const [p] = normalizeConfig({ type: 'x', nominal_voltage: 240, groups: [{ id: 'g', phases: ['L1', 'L2', 'L3'], amp: 40, circuits: [{ id: 'c', amp: 16 }] }, { id: 'h', phases: ['L1'], circuits: [] }] } as never);
  assert.equal(p.rows[0].modules[0].poles, 4);
  assert.equal(p.rows[1].modules[0].poles, 2);
  assert.equal(loadLimit(p.rows[0].modules[1], 'power'), 16 * 240 * 3);
});

test('rangée commençant par un disjoncteur : il devient tête de groupe (enfants jusqu\'au prochain différentiel)', () => {
  const [p] = normalizeConfig({ type: 'x', panels: [{ id: 'p', rows: [
    { id: 'a', modules: [{ id: 'h' }, { id: 'c1' }, { id: 'c2' }, { type: 'differential', id: 'D' }, { id: 'c3' }] },
    { id: 'b', modules: [{ id: 'solo' }] },
    { id: 'c', modules: [{ id: 'z', zones: [{ room: 'Salon' }] }, { id: 'y' }] }] }] } as any);
  const a = p.rows[0].modules;
  assert.deepEqual(a[0].children?.map((m) => m.id), ['c1', 'c2']);
  assert.deepEqual(a[3].children?.map((m) => m.id), ['c3']);
  assert.equal(p.rows[1].modules[0].children, undefined, 'seul : pas de groupe');
  assert.equal(p.rows[2].modules[0].children, undefined, 'avec zones : reste un circuit');
});
