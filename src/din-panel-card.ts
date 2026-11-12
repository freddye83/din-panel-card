import { LitElement, html, nothing } from 'lit';
import { cardStyles } from './styles';
import { collectEntities, normalizeConfig, validateConfig } from './config';
import { renderPanel } from './components/panel';
import { countMatches, makeMatcher } from './utils/search';
import { renderDetails } from './components/circuit-details';
import { boardWidth, collapseKeys, renderDiagram } from './components/diagram';
import type { Level } from './components/diagram';
import type { Ctx } from './components/ctx';
import type { CardConfig, HomeAssistant, Lang, Module, Panel } from './types';
import { fmtMeasure, headGauges } from './utils/state';
import type { Kind } from './utils/state';
import { t } from './utils/i18n';
import './editor';

const VIEW_KEY = 'din-panel-card:view';
/** Empreinte courte et stable d'une carte (titre + identifiants de tableaux) pour mémoriser sa vue. */
function cardHash(c: CardConfig): string {
  const src = `${c.title ?? ''}|${(c.panels ?? []).map((p) => p.id ?? p.label ?? '').join(',')}|${(c.groups ?? []).length}`;
  let h = 0;
  for (const ch of src) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return (h >>> 0).toString(36);
}

class DinPanelCard extends LitElement {
  static properties = { _config: { state: true }, _selected: { state: true }, _view: { state: true }, _collapsed: { state: true }, _cw: { state: true }, _q: { state: true } };
  static styles = cardStyles;

  declare _config?: CardConfig;
  declare _selected?: Module | null;
  declare _view: 'panel' | 'tree';
  private _viewKey = VIEW_KEY;
  declare _collapsed: Set<string>;
  declare _q: string;
  private _qi = -1;
  declare _cw: number;
  private _ro?: ResizeObserver;
  private _hass?: HomeAssistant;
  private _panels: Panel[] = [];
  private _entities: string[] = [];

  static getConfigElement() { return document.createElement('din-panel-card-editor'); }
  static getStubConfig() {
    return {
      type: 'custom:din-panel-card',
      panels: [{ id: 'tableau_1', label: 'Tableau principal', rows: [{ id: 'row_1', label: 'Rangée 1', phases: ['L1'], modules: [
        { type: 'differential', id: 'ID1', amp: 40, mA: 30, poles: 2, class: 'AC' },
        { type: 'breaker', id: '1-1', amp: 16, label: 'Prises', usage: 'socket' },
        { type: 'breaker', id: '1-2', amp: 10, label: 'Lumières', usage: 'light' },
      ] }] }],
    };
  }

  setConfig(config: CardConfig) {
    validateConfig(config);
    this._panels = normalizeConfig(config);
    this._entities = collectEntities(config, this._panels);
    this._config = config;
    this._selected = null;
    const lvl = config.collapsed;
    this._collapsed = new Set(lvl === 'zones' || lvl === 'rows' || lvl === 'panels' ? collapseKeys(this._panels, lvl) : []);
    this._cw = 0;
    let stored: string | null = null;
    // `view:` explicite dans le YAML = prioritaire. Sinon, mémoire par carte (clé propre à la config).
    this._viewKey = `${VIEW_KEY}:${cardHash(config)}`;
    if (config.view !== 'tree' && config.view !== 'panel') {
      try { stored = localStorage.getItem(this._viewKey); } catch { /* stockage indisponible */ }
    }
    this._view = config.view === 'tree' || config.view === 'panel' ? config.view : stored === 'tree' ? 'tree' : 'panel';
  }

  private _toggle(k: string) {
    const n = new Set(this._collapsed);
    if (n.has(k)) n.delete(k); else n.add(k);
    this._collapsed = n;
  }

  /** Replie le niveau ouvert le plus profond : zones, puis lignes, puis tableaux. */
  private _collapseOne() {
    for (const lvl of ['zones', 'rows', 'panels'] as Level[]) {
      const keys = collapseKeys(this._panels, lvl);
      if (keys.some((k) => !this._collapsed.has(k))) { this._collapsed = new Set([...this._collapsed, ...keys]); return; }
    }
  }

  private _setView(v: 'panel' | 'tree') {
    this._view = v;
    if (this._config?.view !== 'tree' && this._config?.view !== 'panel') {
      try { localStorage.setItem(this._viewKey, v); } catch { /* ignoré */ }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (typeof ResizeObserver !== 'undefined') {
      this._ro = new ResizeObserver((es) => {
        const w = Math.round(es[0]?.contentRect.width ?? 0);
        if (w > 0 && w !== this._cw) this._cw = w; // largeur nulle (onglet masqué) ignorée
      });
      this._ro.observe(this);
    }
  }
  disconnectedCallback() { this._ro?.disconnect(); this._ro = undefined; super.disconnectedCallback(); }

  set hass(h: HomeAssistant) {
    const old = this._hass;
    this._hass = h;
    // Re-rendu uniquement si une entité suivie (ou le thème) a changé : pas d'abonnement à nettoyer.
    if (!old || old.language !== h.language || old.themes?.darkMode !== h.themes?.darkMode || this._entities.some((e) => old.states[e] !== h.states[e])) {
      this.requestUpdate();
    }
  }
  get hass() { return this._hass as HomeAssistant; }

  getCardSize() { return 2 + this._panels.reduce((n, p) => n + p.rows.length * 3, 0); }
  getGridOptions() { return { columns: 12, min_columns: 6, rows: 'auto' }; }

  private get _lang(): Lang {
    return (this._config?.language ?? (this._hass?.language?.startsWith('fr') ? 'fr' : 'en')) as Lang;
  }

  /** Cadre « arrivée » dans le style des tableaux, même largeur : Total en ligne (sans jauge), puis L1 / L2 / L3 avec jauge. */
  private _summary(lang: Lang) {
    if (!this._hass) return nothing;
    const gs = headGauges(this._hass, this._config?.sensors, t(lang, 'total'));
    if (!gs.length) return nothing;
    const cap = Math.max(0, ...this._panels.map((p) => p.capacity ?? 0));
    const fmt = (i: { kind: Kind; value: number | null; approx?: boolean }) =>
      i.value === null ? t(lang, 'unavailable') : `${i.approx ? '≈ ' : ''}${fmtMeasure(i.kind, i.value)}`;
    return html`<div class="panel incoming ${cap ? 'fixed' : ''}" style=${cap ? `--n:${cap}` : ''}>
      ${(this._config?.incoming_title ?? t(lang, 'incoming')) ? html`<div class="panel-title">${this._config?.incoming_title ?? t(lang, 'incoming')}</div>` : nothing}
      <div class="in-plate">${gs.map((g) => {
        const isTotal = g.key === 'total';
        const cls = g.pct === null ? '' : g.pct > 1 ? 'err' : g.pct >= 0.9 ? 'high' : g.pct >= 0.6 ? 'warn' : '';
        return html`<div class="in-row ${isTotal ? 'total' : ''}" title=${g.entity ?? ''}
            @click=${() => g.entity && this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: g.entity }, bubbles: true, composed: true }))}>
          ${isTotal ? html`<b class="in-label">${g.label}</b>` : html`<span class="chip ph-${g.key.toLowerCase()} in-label">${g.label}</span>`}
          <div class="in-track">${!isTotal && g.pct !== null ? html`<i class=${cls} style=${`width:${Math.max(1.5, Math.min(1, g.pct) * 100)}%`}></i>` : nothing}</div>
          <div class="in-vals">${g.items.map((i) => html`<span class="k-${i.kind} ${i.value === null ? 'bad' : ''}">${fmt(i)}</span>`)}</div>
        </div>`;
      })}</div>
    </div>`;
  }

  /** Entrée : saute au résultat suivant ; Échap : efface la recherche. */
  private _searchKey(e: KeyboardEvent) {
    if (e.key === 'Escape') { this._q = ''; this._qi = -1; return; }
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const hits = [...(this.shadowRoot?.querySelectorAll('.mod.s-hit, .dia g.s-hit') ?? [])] as Element[];
    if (!hits.length) return;
    this._qi = (this._qi + 1) % hits.length;
    hits[this._qi].scrollIntoView?.({ block: 'center', inline: 'center', behavior: 'smooth' });
  }

  render() {
    if (!this._config || !this._hass) return nothing;
    const lang = this._lang;
    const ctx: Ctx = {
      hass: this._hass, lang,
      select: (m) => { this._selected = m; },
      moreInfo: (entityId) => this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId }, bubbles: true, composed: true })),
    };
    const q = this._q ?? '';
    const test = makeMatcher(q, lang);
    if (test) ctx.search = test;
    const found = test ? countMatches(this._panels, test) : 0;
    const dark = !!this._hass.themes?.darkMode;
    const u = Number(this._config.module_width);
    const tree = this._view === 'tree';
    const maxW = Number(this._config.max_width) > 0 ? Number(this._config.max_width) : 700;
    const boardW = boardWidth(Math.min(this._cw || maxW, maxW));
    return html`<ha-card class=${dark ? 'dark' : ''} style=${u > 0 ? `--u:${u}px` : ''}>
      <div class="toolbar">
        <h2>${this._config.title ?? ''}</h2>
        ${this._config.search === false ? nothing : html`<div class="search">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input type="text" .value=${q} placeholder=${t(lang, 'search_ph')} aria-label=${t(lang, 'search')} enterkeyhint="search"
            @input=${(e: Event) => { this._q = (e.target as HTMLInputElement).value; this._qi = -1; }}
            @keydown=${(e: KeyboardEvent) => this._searchKey(e)} />
          ${q ? html`<span class="count" aria-live="polite">${found ? `${found} ${t(lang, 'result')}${found > 1 ? 's' : ''}` : t(lang, 'no_result')}</span>
            <button class="clr" title=${t(lang, 'clear')} aria-label=${t(lang, 'clear')} @click=${() => { this._q = ''; this._qi = -1; }}><ha-icon icon="mdi:close"></ha-icon></button>` : nothing}
        </div>`}
        ${tree ? html`
          <button class="tbtn" @click=${() => { this._collapsed = new Set(); }}>
            <ha-icon icon="mdi:unfold-more-horizontal"></ha-icon><span>${t(lang, 'expand_all')}</span></button>
          <button class="tbtn" @click=${() => this._collapseOne()}>
            <ha-icon icon="mdi:unfold-less-horizontal"></ha-icon><span>${t(lang, 'collapse_level')}</span></button>` : nothing}
        <button class="tbtn" aria-pressed=${tree} title=${t(lang, tree ? 'view_panel' : 'view_tree')}
          @click=${() => this._setView(tree ? 'panel' : 'tree')}>
          <ha-icon icon=${tree ? 'mdi:view-dashboard-outline' : 'mdi:file-tree'}></ha-icon>
          <span>${t(lang, tree ? 'view_panel' : 'view_tree')}</span></button>
      </div>
      ${tree ? nothing : this._summary(lang)}
      ${tree ? renderDiagram(this._panels, ctx, { config: this._config, width: boardW, maxWidth: maxW, collapsed: test ? new Set<string>() : this._collapsed, toggle: (k: string) => this._toggle(k) }) : this._panels.map((p) => renderPanel(p, ctx))}
      ${this._selected
        ? html`<dialog @close=${() => { this._selected = null; }}
            @click=${(e: Event) => { if (e.target === e.currentTarget) (e.currentTarget as HTMLDialogElement).close(); }}>
            ${renderDetails(this._selected, ctx, () => this.shadowRoot?.querySelector('dialog')?.close())}</dialog>`
        : nothing}
    </ha-card>`;
  }

  updated() {
    const d = this.shadowRoot?.querySelector('dialog');
    if (d && this._selected && !d.open) d.showModal();
  }
}

if (!customElements.get('din-panel-card')) customElements.define('din-panel-card', DinPanelCard);

console.info(`%c DIN-PANEL-CARD %c v${__CARD_VERSION__} `, 'color:#fff;background:#3182ce;font-weight:700', 'color:#3182ce;background:#fff');

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'din-panel-card',
  name: 'DIN Panel Card',
  description: 'Tableau électrique modulaire graphique (rangées, rail DIN, modules) alimenté par les entités Home Assistant.',
  preview: false,
});
