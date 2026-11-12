import { LitElement, html, nothing } from 'lit';
import { editorStyles } from './styles';
import { legacyToPanels } from './config';
import type { CardConfig, Lang, ModuleConfig, PanelConfig, RowConfig, ZoneConfig } from './types';
import { t } from './utils/i18n';

const TYPES = ['differential', 'breaker', 'contactor_daynight', 'contactor', 'relay', 'impulse', 'psu', 'surge', 'meter', 'free', 'custom'];
const MOD_KEYS = ['id', 'type', 'label', 'amp', 'poles', 'width', 'mA', 'class', 'curve', 'usage', 'phases', 'sensor', 'current_sensor', 'voltage_sensor', 'state_entity', 'icon', 'max_w', 'accent', 'output', 'section'];
const PH = ['l1', 'l2', 'l3'];
const num = (min: number, max: number) => ({ number: { min, max, mode: 'box' } });

class DinPanelCardEditor extends LitElement {
  static properties = { hass: { attribute: false }, _config: { state: true } };
  static styles = editorStyles;
  declare hass: unknown;
  declare _config: CardConfig;
  /** Modules dépliés : leurs formulaires (lourds : sélecteurs d'entités) ne sont créés qu'à l'ouverture. */
  private _open = new Set<string>(['sec:general']);

  setConfig(c: CardConfig) { this._config = c; }
  private get L(): Lang { return (this._config?.language ?? this._hassLang) as Lang; }
  private get _hassLang(): Lang { return (this.hass as { language?: string } | undefined)?.language?.startsWith('fr') ? 'fr' : 'en'; }
  private _emit(cfg: CardConfig) {
    this._config = cfg;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: cfg }, bubbles: true, composed: true }));
  }
  private _panels(): PanelConfig[] { return structuredClone(this._config.panels ?? []); }
  private _setPanels(p: PanelConfig[]) { this._emit({ ...this._config, panels: p }); }
  private _lbl = (s: { name: string }) => {
    const m = /^(l[123])_(entity|current|volt|max)$/.exec(s.name);
    if (m) return `${m[1].toUpperCase()} · ${t(this.L, m[2] === 'entity' ? 'head_sensor' : m[2] === 'current' ? 'current_sensor' : m[2] === 'volt' ? 'voltage_sensor' : 'max_w')}`;
    return t(this.L, s.name === 'class' ? 'cls' : s.name === 'total_current' ? 'current_sensor' : s.name === 'total_volt' ? 'voltage_sensor' : s.name);
  };

  /** Section repliable ; le contenu (formulaires lourds) n'est créé qu'à l'ouverture. */
  private _sec(key: string, title: unknown, body: () => unknown, extra: unknown = nothing) {
    const open = this._open.has(key);
    return html`<details class="blk" ?open=${open} @toggle=${(e: Event) => {
        const d = e.currentTarget as HTMLDetailsElement;
        if (e.target !== d || d.open === this._open.has(key)) return;
        if (d.open) this._open.add(key); else this._open.delete(key);
        this.requestUpdate();
      }}><summary><span>${title}</span>${extra}</summary>${open ? body() : nothing}</details>`;
  }

  private _general() {
    const c = this._config;
    const data = { title: c.title, incoming_title: c.incoming_title, nominal_voltage: c.nominal_voltage, language: c.language ?? this._hassLang, module_width: c.module_width, view: c.view ?? 'panel', modules_per_row: c.modules_per_row, max_width: c.max_width, collapsed: c.collapsed ?? 'none' };
    const schema = [
      { name: 'title', selector: { text: {} } },
      { name: 'incoming_title', selector: { text: {} } },
      { type: 'grid', name: '', schema: [
        { name: 'language', selector: { select: { options: ['fr', 'en'] } } },
        { name: 'module_width', selector: num(30, 90) } ] },
      { name: 'max_width', selector: num(300, 3000) },
      { name: 'nominal_voltage', selector: num(100, 480) },
      { name: 'modules_per_row', selector: num(1, 60) },
      { name: 'collapsed', selector: { select: { options: [{ value: 'none', label: '—' }, { value: 'zones', label: t(this.L, 'zones') }, { value: 'rows', label: t(this.L, 'row') }, { value: 'panels', label: t(this.L, 'panel') }] } } },
      { name: 'view', selector: { select: { options: [{ value: 'panel', label: t(this.L, 'view_panel') }, { value: 'tree', label: t(this.L, 'view_tree') }] } } },
    ];
    return html`<ha-form .hass=${this.hass} .data=${data} .schema=${schema} .computeLabel=${this._lbl}
      @value-changed=${(e: CustomEvent) => {
        const v = e.detail.value, cfg: CardConfig = { ...c, title: v.title || undefined, incoming_title: v.incoming_title || undefined, nominal_voltage: v.nominal_voltage || undefined, language: v.language, module_width: v.module_width || undefined, view: v.view === 'tree' ? 'tree' : undefined, max_width: v.max_width || undefined, modules_per_row: v.modules_per_row || undefined, collapsed: v.collapsed && v.collapsed !== 'none' ? v.collapsed : undefined };
        for (const k of Object.keys(cfg)) if (cfg[k] === undefined) delete cfg[k];
        this._emit(cfg);
      }}></ha-form>`;
  }

  /** Capteurs globaux : total + phases L1/L2/L3 (puissance/énergie, intensité, tension, max). */
  private _sensors() {
    const c = this._config, s = c.sensors ?? {};
    const pkey = (n: string) => Object.keys(s.phases ?? {}).find((k) => k.toLowerCase() === n) ?? n;
    const phaseData: Record<string, unknown> = {};
    for (const n of PH) { const r = s.phases?.[pkey(n)]; phaseData[`${n}_entity`] = r?.entity; phaseData[`${n}_current`] = r?.current_sensor; phaseData[`${n}_volt`] = r?.voltage_sensor; phaseData[`${n}_max`] = r?.max_w; }
    const data = { total_entity: s.total?.entity, total_current: s.total?.current_sensor, total_volt: s.total?.voltage_sensor, total_max: s.total?.max_w, ...phaseData };
    const schema = [
      { type: 'grid', name: '', schema: [
        { name: 'total_entity', selector: { entity: { domain: 'sensor' } } },
        { name: 'total_current', selector: { entity: { domain: 'sensor' } } },
        { name: 'total_volt', selector: { entity: { domain: 'sensor' } } } ] },
      { name: 'total_max', selector: num(0, 100000) },
      ...PH.map((n) => ({ type: 'grid', name: '', schema: [
        { name: `${n}_entity`, selector: { entity: { domain: 'sensor' } } },
        { name: `${n}_current`, selector: { entity: { domain: 'sensor' } } },
        { name: `${n}_volt`, selector: { entity: { domain: 'sensor' } } },
        { name: `${n}_max`, selector: num(0, 100000) } ] })),
    ];
    return html`<ha-form .hass=${this.hass} .data=${data} .schema=${schema} .computeLabel=${this._lbl}
      @value-changed=${(e: CustomEvent) => {
        const v = e.detail.value, cfg: CardConfig = { ...c };
        const total = { ...(s.total ?? {}), entity: v.total_entity || undefined, current_sensor: v.total_current || undefined, voltage_sensor: v.total_volt || undefined, max_w: v.total_max || undefined };
        for (const k of Object.keys(total) as (keyof typeof total)[]) if (total[k] === undefined) delete total[k];
        const phases = { ...(s.phases ?? {}) };
        for (const n of PH) {
          const key = pkey(n), r = { ...(phases[key] ?? {}), entity: v[`${n}_entity`] || undefined, current_sensor: v[`${n}_current`] || undefined, voltage_sensor: v[`${n}_volt`] || undefined, max_w: v[`${n}_max`] || undefined };
          for (const k of Object.keys(r) as (keyof typeof r)[]) if (r[k] === undefined) delete r[k];
          if (Object.keys(r).length) phases[key] = r; else delete phases[key];
        }
        const sens = { ...s, total: Object.keys(total).length ? total : undefined, phases: Object.keys(phases).length ? phases : undefined };
        for (const k of Object.keys(sens) as (keyof typeof sens)[]) if (sens[k] === undefined) delete sens[k];
        if (Object.keys(sens).length) cfg.sensors = sens; else delete cfg.sensors;
        this._emit(cfg);
      }}></ha-form>`;
  }

  private _moduleSchema(type: string) {
    const L = this.L;
    const diff = type === 'differential';
    return [
      { type: 'grid', name: '', schema: [
        { name: 'id', selector: { text: {} } },
        { name: 'type', selector: { select: { mode: 'dropdown', options: TYPES.map((v) => ({ value: v, label: t(L, `t_${v}`) })) } } } ] },
      { name: 'label', selector: { text: {} } },
      { type: 'grid', name: '', schema: [
        { name: 'amp', selector: num(1, 250) }, { name: 'poles', selector: num(1, 4) }, { name: 'width', selector: num(1, 12) },
        ...(diff ? [{ name: 'mA', selector: num(1, 1000) }, { name: 'class', selector: { select: { options: ['AC', 'A', 'F', 'B'] } } }]
                 : [{ name: 'curve', selector: { select: { options: ['B', 'C', 'D'] } } }] ) ] },
      ...(type === 'breaker' ? [{ name: 'usage', selector: { select: { options: ['power', 'socket', 'light', 'other'].map((v) => ({ value: v, label: t(L, `u_${v}`) })) } } }] : []),
      { name: 'phases', selector: { select: { multiple: true, options: ['L1', 'L2', 'L3'] } } },
      { name: 'sensor', selector: { entity: { domain: 'sensor' } } },
      { type: 'grid', name: '', schema: [
        { name: 'current_sensor', selector: { entity: { domain: 'sensor' } } },
        { name: 'voltage_sensor', selector: { entity: { domain: 'sensor' } } } ] },
      ...(type === 'psu' ? [{ name: 'output', selector: { text: {} } }] : []),
      { name: 'state_entity', selector: { entity: {} } },
      { name: 'section', selector: { text: {} } },
      { type: 'grid', name: '', schema: [ { name: 'icon', selector: { icon: {} } }, { name: 'max_w', selector: num(0, 100000) } ] },
    ];
  }

  private _patchModule(pi: number, ri: number, mi: number, v: Record<string, unknown>) {
    const p = this._panels(), m = p[pi].rows![ri].modules![mi] as Record<string, unknown>;
    for (const k of MOD_KEYS) {
      const x = v[k];
      if (x === undefined || x === '' || x === null || (Array.isArray(x) && !x.length) || (typeof x === 'number' && Number.isNaN(x))) delete m[k]; else m[k] = x;
    }
    this._setPanels(p);
  }

  private _zones(pi: number, ri: number, mi: number, m: ModuleConfig) {
    const L = this.L;
    const schema = [
      { type: 'grid', name: '', schema: [ { name: 'floor', selector: { text: {} } }, { name: 'room', selector: { text: {} } } ] },
      { name: 'sensor', selector: { entity: { domain: 'sensor' } } },
      { name: 'icon', selector: { icon: {} } },
    ];
    const zones = (m.zones ?? []).map((z) => (typeof z === 'string' ? { room: z } : z)) as ZoneConfig[];
    return html`${zones.map((z, zi) => html`<div class="blk"><ha-form .hass=${this.hass} .data=${z} .schema=${schema} .computeLabel=${this._lbl}
        @value-changed=${(e: CustomEvent) => { const p = this._panels(); const mm = p[pi].rows![ri].modules![mi]; const arr = [...(mm.zones ?? [])] as ZoneConfig[];
          const clean: Record<string, unknown> = {}; for (const [k, x] of Object.entries(e.detail.value)) if (x !== '' && x !== undefined) clean[k] = x; arr[zi] = clean; mm.zones = arr; this._setPanels(p); }}></ha-form>
      <button class="danger" @click=${() => { const p = this._panels(); const mm = p[pi].rows![ri].modules![mi]; mm.zones = (mm.zones ?? []).filter((_, i) => i !== zi); if (!mm.zones.length) delete mm.zones; this._setPanels(p); }}>${t(L, 'remove')}</button></div>`)}
      <button class="add" @click=${() => { const p = this._panels(); const mm = p[pi].rows![ri].modules![mi]; mm.zones = [...(mm.zones ?? []), {}]; this._setPanels(p); }}>+ ${t(L, 'add_zone')}</button>`;
  }

  private _module(pi: number, ri: number, mi: number, m: ModuleConfig) {
    const L = this.L, type = String(m.type ?? 'breaker');
    const key = `${pi}/${ri}/${mi}`, open = this._open.has(key);
    const stop = (fn: () => void) => (e: Event) => { e.preventDefault(); e.stopPropagation(); fn(); };
    const move = (d: number) => { const p = this._panels(); const a = p[pi].rows![ri].modules!; const j = mi + d; if (j < 0 || j >= a.length) return; [a[mi], a[j]] = [a[j], a[mi]]; this._setPanels(p); };
    return html`<details class="blk" ?open=${open} @toggle=${(e: Event) => {
        const d = e.currentTarget as HTMLDetailsElement;
        if (e.target !== d || d.open === this._open.has(key)) return;
        if (d.open) this._open.add(key); else this._open.delete(key);
        this.requestUpdate();
      }}><summary><span>${t(L, `t_${type}`)} · ${m.id ?? ''} ${m.amp ? `${m.amp} A` : ''}</span>
        <button @click=${stop(() => move(-1))}>◀</button><button @click=${stop(() => move(1))}>▶</button>
        <button class="danger" @click=${stop(() => { const p = this._panels(); p[pi].rows![ri].modules!.splice(mi, 1); this._setPanels(p); })}>✕</button></summary>
      ${open ? html`<ha-form .hass=${this.hass} .data=${m} .schema=${this._moduleSchema(type)} .computeLabel=${this._lbl}
        @value-changed=${(e: CustomEvent) => this._patchModule(pi, ri, mi, e.detail.value)}></ha-form>
      <div class="note">${t(L, 'zones')}</div>${this._zones(pi, ri, mi, m)}` : nothing}
    </details>`;
  }

  private _row(pi: number, ri: number, r: RowConfig) {
    const L = this.L;
    const stop = (fn: () => void) => (e: Event) => { e.preventDefault(); e.stopPropagation(); fn(); };
    return html`<details class="blk" open><summary><span>${t(L, 'row')} · ${r.label ?? r.id ?? ri + 1}</span>
        <button class="danger" @click=${stop(() => { const p = this._panels(); p[pi].rows!.splice(ri, 1); this._setPanels(p); })}>✕</button></summary>
      <ha-form .hass=${this.hass} .data=${{ id: r.id, label: r.label, phases: r.phases }}
        .schema=${[{ type: 'grid', name: '', schema: [{ name: 'id', selector: { text: {} } }, { name: 'label', selector: { text: {} } }] }, { name: 'phases', selector: { select: { multiple: true, options: ['L1', 'L2', 'L3'] } } }]}
        .computeLabel=${this._lbl}
        @value-changed=${(e: CustomEvent) => { const p = this._panels(); const row = p[pi].rows![ri] as Record<string, unknown>;
          for (const k of ['id', 'label', 'phases']) { const x = e.detail.value[k]; if (x === undefined || x === '' || (Array.isArray(x) && !x.length)) delete row[k]; else row[k] = x; } this._setPanels(p); }}></ha-form>
      ${(r.modules ?? []).map((m, mi) => this._module(pi, ri, mi, m))}
      <button class="add" @click=${() => { const p = this._panels(); const row = p[pi].rows![ri]; row.modules = [...(row.modules ?? []), { type: row.modules?.length ? 'breaker' : 'differential', id: `${row.id ?? ri + 1}-${(row.modules?.length ?? 0) + 1}`, amp: row.modules?.length ? 16 : 40 }]; this._setPanels(p); }}>+ ${t(L, 'add_module')}</button>
    </details>`;
  }

  render() {
    if (!this._config) return nothing;
    const L = this.L, c = this._config;
    const legacyOnly = !!c.groups && !c.panels;
    return html`${this._sec('sec:general', t(L, 'general'), () => this._general())}
      ${this._sec('sec:sensors', t(L, 'global_sensors'), () => this._sensors())}
      ${legacyOnly
        ? html`<div class="banner">${t(L, 'legacy')}
            <button @click=${() => { const cfg = { ...c, panels: legacyToPanels(c.groups!) } as CardConfig; delete cfg.groups; this._emit(cfg); }}>${t(L, 'convert')}</button></div>`
        : nothing}
      ${(c.panels ?? []).map((p, pi) => this._sec(`p:${pi}`, `${t(L, 'panel')} · ${p.label ?? p.id ?? pi + 1}`, () => html`
        <ha-form .hass=${this.hass} .data=${{ id: p.id, label: p.label, modules_per_row: p.modules_per_row }} .computeLabel=${this._lbl}
          .schema=${[{ type: 'grid', name: '', schema: [{ name: 'id', selector: { text: {} } }, { name: 'label', selector: { text: {} } }] }, { name: 'modules_per_row', selector: num(1, 60) }]}
          @value-changed=${(e: CustomEvent) => { const x = this._panels(); x[pi].id = e.detail.value.id || undefined; x[pi].label = e.detail.value.label || undefined; x[pi].modules_per_row = e.detail.value.modules_per_row || undefined; this._setPanels(x); }}></ha-form>
        ${(p.rows ?? []).map((r, ri) => this._row(pi, ri, r))}
        <button class="add" @click=${() => { const x = this._panels(); x[pi].rows = [...(x[pi].rows ?? []), { id: `row_${(x[pi].rows?.length ?? 0) + 1}`, modules: [] }]; this._setPanels(x); }}>+ ${t(L, 'add_row')}</button>`,
        html`<button class="danger" @click=${(e: Event) => { e.preventDefault(); e.stopPropagation(); const x = this._panels(); x.splice(pi, 1); this._open = new Set([...this._open].filter((k) => !k.startsWith('p:') && !/^\d/.test(k))); this._setPanels(x); }}>✕</button>`))}
      <button class="add" @click=${() => { const x = this._panels(); x.push({ id: `tableau_${x.length + 1}`, rows: [] }); this._setPanels(x); }}>+ ${t(L, 'add_panel')}</button>
      <div class="note">${t(L, 'editor_note')}</div>`;
  }
}

if (!customElements.get('din-panel-card-editor')) customElements.define('din-panel-card-editor', DinPanelCardEditor);
