var Ee=globalThis,ze=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),_t=new WeakMap,me=class{constructor(e,n,o){if(this._$cssResult$=!0,o!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(ze&&e===void 0){let o=n!==void 0&&n.length===1;o&&(e=_t.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&_t.set(n,e))}return e}toString(){return this.cssText}},yt=t=>new me(typeof t=="string"?t:t+"",void 0,je),Le=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((o,s,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new me(n,t,je)},wt=(t,e)=>{if(ze)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let o=document.createElement("style"),s=Ee.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=n.cssText,t.appendChild(o)}},De=ze?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let o of e.cssRules)n+=o.cssText;return yt(n)})(t):t;var{is:wn,defineProperty:kn,getOwnPropertyDescriptor:An,getOwnPropertyNames:Cn,getOwnPropertySymbols:Mn,getPrototypeOf:Sn}=Object,Pe=globalThis,kt=Pe.trustedTypes,En=kt?kt.emptyScript:"",zn=Pe.reactiveElementPolyfillSupport,be=(t,e)=>t,We={toAttribute(t,e){switch(e){case Boolean:t=t?En:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ct=(t,e)=>!wn(t,e),At={attribute:!0,type:String,converter:We,reflect:!1,useDefault:!1,hasChanged:Ct};Symbol.metadata??=Symbol("metadata"),Pe.litPropertyMetadata??=new WeakMap;var G=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=At){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let o=Symbol(),s=this.getPropertyDescriptor(e,o,n);s!==void 0&&kn(this.prototype,e,s)}}static getPropertyDescriptor(e,n,o){let{get:s,set:r}=An(this.prototype,e)??{get(){return this[n]},set(a){this[n]=a}};return{get:s,set(a){let d=s?.call(this);r?.call(this,a),this.requestUpdate(e,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??At}static _$Ei(){if(this.hasOwnProperty(be("elementProperties")))return;let e=Sn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(be("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(be("properties"))){let n=this.properties,o=[...Cn(n),...Mn(n)];for(let s of o)this.createProperty(s,n[s])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[o,s]of n)this.elementProperties.set(o,s)}this._$Eh=new Map;for(let[n,o]of this.elementProperties){let s=this._$Eu(n,o);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let s of o)n.unshift(De(s))}else e!==void 0&&n.push(De(e));return n}static _$Eu(e,n){let o=n.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let o of n.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,o){this._$AK(e,o)}_$ET(e,n){let o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){let r=(o.converter?.toAttribute!==void 0?o.converter:We).toAttribute(n,o.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,n){let o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:We;this._$Em=s;let d=a.fromAttribute(n,r.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(e,n,o,s=!1,r){if(e!==void 0){let a=this.constructor;if(s===!1&&(r=this[e]),o??=a.getPropertyOptions(e),!((o.hasChanged??Ct)(r,n)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,n,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:o,reflect:s,wrapped:r},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??n??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(n=void 0),this._$AL.set(e,n)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[s,r]of o){let{wrapped:a}=r,d=this[s];a!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,r,d)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(n)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[be("elementProperties")]=new Map,G[be("finalized")]=new Map,zn?.({ReactiveElement:G}),(Pe.reactiveElementVersions??=[]).push("2.1.2");var Ze=globalThis,Mt=t=>t,Re=Ze.trustedTypes,St=Re?Re.createPolicy("lit-html",{createHTML:t=>t}):void 0,Tt="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,Ot="?"+X,Ln=`<${Ot}>`,ie=document,$e=()=>ie.createComment(""),ve=t=>t===null||typeof t!="object"&&typeof t!="function",Ye=Array.isArray,Pn=t=>Ye(t)||typeof t?.[Symbol.iterator]=="function",Fe=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,zt=/>/g,re=RegExp(`>|${Fe}(?:([^\\s"'>=/]+)(${Fe}*=${Fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Pt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,Xe=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),h=Xe(1),M=Xe(2),Ao=Xe(3),le=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Rt=new WeakMap,ae=ie.createTreeWalker(ie,129);function Nt(t,e){if(!Ye(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(e):e}var Rn=(t,e)=>{let n=t.length-1,o=[],s,r=e===2?"<svg>":e===3?"<math>":"",a=xe;for(let d=0;d<n;d++){let l=t[d],c,x,g=-1,u=0;for(;u<l.length&&(a.lastIndex=u,x=a.exec(l),x!==null);)u=a.lastIndex,a===xe?x[1]==="!--"?a=Et:x[1]!==void 0?a=zt:x[2]!==void 0?(Ht.test(x[2])&&(s=RegExp("</"+x[2],"g")),a=re):x[3]!==void 0&&(a=re):a===re?x[0]===">"?(a=s??xe,g=-1):x[1]===void 0?g=-2:(g=a.lastIndex-x[2].length,c=x[1],a=x[3]===void 0?re:x[3]==='"'?Pt:Lt):a===Pt||a===Lt?a=re:a===Et||a===zt?a=xe:(a=re,s=void 0);let $=a===re&&t[d+1].startsWith("/>")?" ":"";r+=a===xe?l+Ln:g>=0?(o.push(c),l.slice(0,g)+Tt+l.slice(g)+X+$):l+X+(g===-2?d:$)}return[Nt(t,r+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},_e=class t{constructor({strings:e,_$litType$:n},o){let s;this.parts=[];let r=0,a=0,d=e.length-1,l=this.parts,[c,x]=Rn(e,n);if(this.el=t.createElement(c,o),ae.currentNode=this.el.content,n===2||n===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=ae.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let g of s.getAttributeNames())if(g.endsWith(Tt)){let u=x[a++],$=s.getAttribute(g).split(X),y=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:y[2],strings:$,ctor:y[1]==="."?Ke:y[1]==="?"?qe:y[1]==="@"?Ve:pe}),s.removeAttribute(g)}else g.startsWith(X)&&(l.push({type:6,index:r}),s.removeAttribute(g));if(Ht.test(s.tagName)){let g=s.textContent.split(X),u=g.length-1;if(u>0){s.textContent=Re?Re.emptyScript:"";for(let $=0;$<u;$++)s.append(g[$],$e()),ae.nextNode(),l.push({type:2,index:++r});s.append(g[u],$e())}}}else if(s.nodeType===8)if(s.data===Ot)l.push({type:2,index:r});else{let g=-1;for(;(g=s.data.indexOf(X,g+1))!==-1;)l.push({type:7,index:r}),g+=X.length-1}r++}}static createElement(e,n){let o=ie.createElement("template");return o.innerHTML=e,o}};function ce(t,e,n=t,o){if(e===le)return e;let s=o!==void 0?n._$Co?.[o]:n._$Cl,r=ve(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(t),s._$AT(t,n,o)),o!==void 0?(n._$Co??=[])[o]=s:n._$Cl=s),s!==void 0&&(e=ce(t,s._$AS(t,e.values),s,o)),e}var Be=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:o}=this._$AD,s=(e?.creationScope??ie).importNode(n,!0);ae.currentNode=s;let r=ae.nextNode(),a=0,d=0,l=o[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new ye(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new Ge(r,this,e)),this._$AV.push(c),l=o[++d]}a!==l?.index&&(r=ae.nextNode(),a++)}return ae.currentNode=ie,s}p(e){let n=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,n),n+=o.strings.length-2):o._$AI(e[n])),n++}},ye=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,o,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ce(this,e,n),ve(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&ve(this._$AH)?this._$AA.nextSibling.data=e:this.T(ie.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=_e.createElement(Nt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(n);else{let r=new Be(s,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(e){let n=Rt.get(e.strings);return n===void 0&&Rt.set(e.strings,n=new _e(e)),n}k(e){Ye(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,o,s=0;for(let r of e)s===n.length?n.push(o=new t(this.O($e()),this.O($e()),this,this.options)):o=n[s],o._$AI(r),s++;s<n.length&&(this._$AR(o&&o._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let o=Mt(e).nextSibling;Mt(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,o,s,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=f}_$AI(e,n=this,o,s){let r=this.strings,a=!1;if(r===void 0)e=ce(this,e,n,0),a=!ve(e)||e!==this._$AH&&e!==le,a&&(this._$AH=e);else{let d=e,l,c;for(e=r[0],l=0;l<r.length-1;l++)c=ce(this,d[o+l],n,l),c===le&&(c=this._$AH[l]),a||=!ve(c)||c!==this._$AH[l],c===f?e=f:e!==f&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!s&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ke=class extends pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}},qe=class extends pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}},Ve=class extends pe{constructor(e,n,o,s,r){super(e,n,o,s,r),this.type=5}_$AI(e,n=this){if((e=ce(this,e,n,0)??f)===le)return;let o=this._$AH,s=e===f&&o!==f||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==f&&(o===f||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ge=class{constructor(e,n,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ce(this,e)}};var Tn=Ze.litHtmlPolyfillSupport;Tn?.(_e,ye),(Ze.litHtmlVersions??=[]).push("3.3.3");var Ut=(t,e,n)=>{let o=n?.renderBefore??e,s=o._$litPart$;if(s===void 0){let r=n?.renderBefore??null;o._$litPart$=s=new ye(e.insertBefore($e(),r),r,void 0,n??{})}return s._$AI(t),s};var Je=globalThis,V=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ut(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return le}};V._$litElement$=!0,V.finalized=!0,Je.litElementHydrateSupport?.({LitElement:V});var On=Je.litElementPolyfillSupport;On?.({LitElement:V});(Je.litElementVersions??=[]).push("4.2.2");var It=Le`
  :host { display: block; }
  ha-card {
    --u: 46px; --h: calc(var(--u) * 3.2);
    --box: #d3d6da; --box2: #b6bac0; --plate: #f3f0e6; --acc: #2b6cb0;
    padding: 12px; overflow: hidden;
  }
  ha-card.dark { --box: #3a3d43; --box2: #26282c; --plate: #d9d6cc; }
  .dim { color: var(--secondary-text-color); font-size: 12px; }
  .grow { flex: 1; }
  .bad { opacity: .6; font-style: italic; }

  /* ---------- Barre d'outils & vue arborescente ---------- */
  .toolbar { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
  .toolbar h2 { flex: 1; margin: 0; font-size: 20px; font-weight: 400; color: var(--primary-text-color); }
  .tbtn { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid var(--divider-color); border-radius: 18px; cursor: pointer; font: inherit; font-size: 13px; color: var(--primary-text-color); background: var(--card-background-color); }
  .toolbar { flex-wrap: wrap; }
  .search { display: flex; align-items: center; gap: 6px; min-width: 0; flex: 0 1 280px; padding: 2px 6px 2px 10px; border: 1px solid var(--divider-color, #c4c7cc); border-radius: 18px; background: var(--card-background-color, #fff); color: var(--secondary-text-color, #666); }
  .search:focus-within { border-color: var(--primary-color); }
  .search ha-icon { --mdc-icon-size: 18px; flex: none; }
  .search input { flex: 1; min-width: 0; padding: 5px 0; border: 0; outline: 0; background: transparent; font: inherit; font-size: 13px; color: var(--primary-text-color, #222); }
  .search .count { flex: none; font-size: 12px; white-space: nowrap; }
  .search .clr { display: grid; place-items: center; padding: 2px; border: 0; border-radius: 50%; cursor: pointer; background: transparent; color: inherit; }
  .search .clr:hover { background: var(--secondary-background-color); }
  /* recherche : non correspondants estompés, correspondants cerclés ; rangées sans résultat repliées */
  .mod { transition: opacity .2s, filter .2s; }
  .mod.s-dim .face { filter: grayscale(.9); }
  .mod.s-dim .face::before { display: block; content: ''; position: absolute; inset: 0; z-index: 6; background: rgba(244,246,248,.78); }
  ha-card.dark .mod.s-dim .face::before { background: rgba(38,40,44,.78); }
  .mod.s-dim .plate { opacity: .3; }
  .mod.s-hit .face { outline: 2px solid var(--primary-color); outline-offset: 1px; }
  .row.nomatch .scroller { display: none; } .row.nomatch { opacity: .4; }
  .dia .s-dim { opacity: .22; }
  .tbtn:hover { background: var(--secondary-background-color); } .tbtn ha-icon { --mdc-icon-size: 18px; }
  @media (max-width: 480px) { .tbtn span { display: none; } .tbtn { padding: 6px 8px; } }
  .dia { margin: 0 auto; }
  .dia svg { display: block; width: 100%; height: auto; }
  .dia text { font: 8px/1 var(--ha-font-family-body, Roboto, Arial, sans-serif); fill: var(--primary-text-color); }
  .dia .dim { fill: var(--secondary-text-color); }
  .dia .ptitle { font-size: 8.5px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; fill: var(--primary-text-color); }
  .dia .ptbox { fill: var(--secondary-background-color, #eee); stroke: var(--secondary-text-color); stroke-width: 1; }
  .dia .chev { fill: none; stroke: var(--primary-text-color); stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; pointer-events: none; }
  .dia .chevhit { fill: transparent; }
  .dia .box { fill: color-mix(in srgb, var(--acc, #3182ce) 16%, var(--card-background-color, #fff)); stroke: var(--acc, #3182ce); stroke-width: 1; }
  .dia .boxt { font-size: 7px; font-weight: 700; fill: var(--primary-text-color); }
  .dia .wire, .dia .tap { stroke: var(--secondary-text-color, #888); stroke-width: 1; fill: none; opacity: .8; }
  .dia .tap { stroke-width: 1.4; opacity: 1; }
  .dia .trunk { stroke-width: 2.2; stroke-linecap: round; }
  .dia .conn { stroke: var(--divider-color, #bbb); stroke-width: .8; stroke-dasharray: 1.4 2; }
  .dia .bub { fill: var(--secondary-background-color, #eee); stroke: var(--acc, #888); stroke-width: .8; }
  .dia .val { font-size: 7.5px; font-weight: 600; font-variant-numeric: tabular-nums; }
  .dia .bubble.bad .val { opacity: .55; font-style: italic; }
  .dia .gbg { fill: var(--divider-color, #ccc); }
  .dia .gfg { fill: #37b24d; } .dia .gfg.warn { fill: #f59f00; } .dia .gfg.high { fill: #f76707; } .dia .gfg.err { fill: var(--error-color, #e03131); }
  .dia .spill.on rect { fill: #2f9e44; } .dia .spill.off rect { fill: #e03131; }
  .dia .spillt { font-size: 6.5px; font-weight: 700; fill: #fff; }
  .dia .pillt { font-size: 6.5px; font-weight: 600; }
  .dia .hit { fill: transparent; cursor: pointer; } .dia .hit:hover { fill: color-mix(in srgb, var(--primary-color) 9%, transparent); }

  /* ---------- Synthèse ---------- */
  :host { --k-power: #2f9e44; --k-energy: #f08c00; --k-current: #1c7ed6; --k-voltage: #ae3ec9; }
  .panel.incoming { margin: 0 0 10px; }
  .panel.incoming.fixed { width: calc(var(--n) * var(--u) + 40px); max-width: 100%; }
  .in-plate { display: grid; grid-template-columns: 44px 1fr auto; column-gap: 10px; row-gap: 5px; padding: 8px 10px; border-radius: 4px; background: var(--plate); color: #222; box-shadow: 0 1px 2px rgba(0,0,0,.4); }
  .in-row { grid-column: 1 / -1; display: grid; grid-template-columns: subgrid; align-items: center; font-size: 13px; cursor: pointer; font-variant-numeric: tabular-nums; }
  .in-row.total { padding-bottom: 5px; border-bottom: 1px solid rgba(0,0,0,.18); font-weight: 700; }
  .in-label { text-align: center; }
  .in-row.total .in-label { text-align: left; font-size: 12px; letter-spacing: .06em; text-transform: uppercase; }
  .in-track { height: 6px; border-radius: 3px; background: rgba(0,0,0,.14); overflow: hidden; }
  .in-row.total .in-track { background: none; }
  .in-track i { display: block; height: 100%; border-radius: 3px; background: #37b24d; transition: width .4s; }
  .in-track i.warn { background: #f59f00; } .in-track i.high { background: #f76707; } .in-track i.err { background: #e03131; }
  .in-vals { display: flex; gap: 10px; justify-content: flex-end; white-space: nowrap; }
  .in-vals .k-power { color: #2b8a3e; } .in-vals .k-energy { color: #d9480f; } .in-vals .k-current { color: #1864ab; } .in-vals .k-voltage { color: #862e9c; }
  .in-vals .bad { color: #777; font-weight: 400; }
  :host { --k-power: #2f9e44; --k-energy: #f08c00; --k-current: #1c7ed6; --k-voltage: #ae3ec9; }
  .dia .bubble.k-energy .val { fill: #e67700; } .dia .bubble.k-current .val { fill: #1c7ed6; } .dia .bubble.k-voltage .val { fill: #ae3ec9; }
  .dia .bubble.k-energy .bub { stroke: #f08c00; } .dia .bubble.k-current .bub { stroke: #1c7ed6; } .dia .bubble.k-voltage .bub { stroke: #ae3ec9; }
  .dia .hg-bg { fill: var(--divider-color, #ccc); } .dia .hg-fg { fill: #37b24d; } .dia .hg-fg.warn { fill: #f59f00; } .dia .hg-fg.high { fill: #f76707; } .dia .hg-fg.err { fill: var(--error-color, #e03131); }
  .gauge { display: grid; grid-template-columns: 54px 1fr auto; gap: 8px; align-items: center; font-size: 13px; }
  .gauge .track { height: 8px; border-radius: 4px; background: var(--divider-color, #ccc); overflow: hidden; }
  .gauge .track i { display: block; height: 100%; border-radius: 4px; background: var(--primary-color); transition: width .4s; }
  .gauge .track i.warn { background: #f59f00; } .gauge .track i.high { background: #e03131; }
  .gauge b { font-variant-numeric: tabular-nums; }

  /* ---------- Coffret ---------- */
  .panel {
    margin: 10px 0; padding: 12px 12px 14px; border-radius: 10px;
    background: linear-gradient(145deg, var(--box), var(--box2));
    box-shadow: inset 0 0 0 3px rgba(255,255,255,.35), inset 0 0 0 6px rgba(0,0,0,.14),
      inset 0 10px 22px rgba(0,0,0,.16), 0 4px 14px rgba(0,0,0,.25);
  }
  .panel-title {
    display: inline-block; margin: 0 0 4px 4px; padding: 2px 10px; border-radius: 3px;
    font: 700 12px/1.6 Arial, sans-serif; letter-spacing: .08em; text-transform: uppercase;
    color: #222; background: var(--plate); box-shadow: 0 1px 2px rgba(0,0,0,.4);
  }
  .row { margin: 8px 0 2px; }
  .row-head { display: flex; align-items: center; gap: 8px; padding: 0 6px; font-size: 13px; color: #1d1f22; }
  ha-card.dark .row-head { color: #e6e8ea; } ha-card.dark .row-head .dim { color: #aab; }
  .row-head .dim { color: #444; }
  .chip { padding: 0 6px; border-radius: 8px; font: 700 10px/16px Arial; color: #fff; background: #555; }
  .ph-l1 { background: #8a5a2b; } .ph-l2 { background: #222; } .ph-l3 { background: #777; }
  .scroller { overflow-x: auto; overflow-y: hidden; padding: 6px 8px 8px; -webkit-overflow-scrolling: touch; }
  .lines { display: inline-flex; flex-direction: column; gap: 12px; min-width: 100%; box-sizing: border-box; }
  .rail-wrap { position: relative; display: flex; align-items: flex-start; min-width: 100%; box-sizing: border-box; }
  /* Capacité fixée : le rail fait exactement N modules DIN de large (le coffret s'ajuste dessus) */
  .rail-wrap.ph { padding-top: 16px; }
  .phtag { position: absolute; left: 0; right: 0; top: -15px; height: 13px; display: flex; gap: 1px; z-index: 2; pointer-events: none; }
  .phtag i { flex: 1; min-width: 0; border-radius: 3px 3px 0 0; font: 700 9px/13px Arial, sans-serif; font-style: normal; text-align: center; color: #fff; overflow: hidden; }
  .phtag .ph-l1 { background: #8a5a2b; } .phtag .ph-l2 { background: #222; } .phtag .ph-l3 { background: #777; }
  .rail-wrap.fixed { width: calc(var(--n) * var(--u)); min-width: 0; }
  .panel.fixed { width: fit-content; max-width: 100%; box-sizing: border-box; margin-left: auto; margin-right: auto; }
  .pad { flex: 0 0 18px; }
  .rail {
    position: absolute; left: -8px; right: -8px; top: calc(var(--h) / 2 - 17px); height: 35px; border-radius: 2px;
    background: linear-gradient(180deg, #f0f1f2, #b9bcc0 16%, #8d9095 50%, #b9bcc0 84%, #70737a);
    box-shadow: 0 1px 3px rgba(0,0,0,.5);
  }
  .rail::after {
    content: ''; position: absolute; inset: 12px 0; border-radius: 3px;
    background: repeating-linear-gradient(90deg, transparent 0 14px, rgba(0,0,0,.5) 14px 26px, transparent 26px 40px);
  }

  /* ---------- Module (base) ---------- */
  .mod { position: relative; flex: none; width: calc(var(--u) * var(--w)); margin: 0; z-index: 1; cursor: pointer; outline: none; }
  .mod:focus-visible .face { outline: 2px solid var(--primary-color); outline-offset: 1px; }
  .mod:hover .face { filter: brightness(1.06); }
  .tip { display: none; position: fixed; z-index: 1000; min-width: 120px; max-width: 260px; padding: 6px 9px; border-radius: 8px; pointer-events: none;
    background: var(--card-background-color, #fff); color: var(--primary-text-color, #222); border: 1px solid var(--divider-color, #ccc);
    box-shadow: 0 4px 14px rgba(0,0,0,.3); font: 12px/1.35 Arial, sans-serif; text-align: left; white-space: normal; }
  .mod:hover .tip, .mod:focus-visible .tip { display: block; }
  .tip ha-icon { --mdc-icon-size: 16px; flex: none; color: var(--acc, var(--primary-color)); }
  .tip-h, .tip-z { display: flex; align-items: center; gap: 6px; }
  .tip-h { margin-bottom: 2px; } .tip-h b { font-size: 13px; } .tip-d { margin-left: auto; padding-left: 8px; color: var(--secondary-text-color); font-size: 11px; white-space: nowrap; }
  .tip-z { padding: 1px 0; }
  .face {
    --sh: inset 1px 0 0 rgba(255,255,255,.8), inset -1px 0 0 rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.9), inset 0 -3px 4px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.28), 0 4px 6px rgba(0,0,0,.45);
    margin: 0 1px;
    position: relative; height: var(--h); display: flex; flex-direction: column; border-radius: 3px; overflow: hidden;
    background: linear-gradient(180deg, #fdfdfd, #eceef0 55%, #d6d9dd);
    box-shadow: var(--sh);
    color: #222; font-family: Arial, sans-serif;
  }
  ha-card.dark .face { filter: brightness(.93); }
  .term { flex: none; height: 14px; display: flex; justify-content: space-around; align-items: center; background: rgba(0,0,0,.08); }
  .term i {
    position: relative; width: 9px; height: 9px; border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #fafafa, #9a9ea3 60%, #686c71);
  }
  .term i::after { content: ''; position: absolute; left: 10%; right: 10%; top: 44%; height: 12%; background: #34373b; transform: rotate(-30deg); }
  .body { flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 2px 3px; }
  .print { font: 700 10px/1.1 Arial, sans-serif; color: #222; letter-spacing: .02em; }
  .print.amp { font-size: 12px; margin-top: 2px; }
  .print.sm { font-size: 8px; opacity: .75; }
  .pid { margin-top: auto; max-width: 100%; padding: 0 2px; border-radius: 2px; background: rgba(255,255,255,.75); font: 600 9px/1.3 Arial; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .body > .readouts { align-self: stretch; margin: auto 0 0; display: flex; flex-wrap: wrap; gap: 1px; }
  .body > .readouts + .pid { margin-top: 2px; }
  .readouts > .readout { flex: 1 1 auto; min-width: 0; }
  .readout {
    margin: 0; padding: 1px 0; border-radius: 2px; text-align: center; white-space: nowrap; overflow: hidden; letter-spacing: -.3px;
    background: #14231a; color: #7dff9a; font: 600 8px/1.5 ui-monospace, Menlo, monospace; box-shadow: inset 0 1px 2px #000;
  }
  .readout.bad { color: #999; background: #2a2a2a; }
  .readout.k-power { color: #7dff9a; background: #14231a; }
  .readout.k-energy { color: #ffc46b; background: #2a2012; }
  .readout.k-current { color: #74c0fc; background: #121f2b; }
  .readout.k-voltage { color: #e599f7; background: #241629; }
  .readout.bad { color: #999; background: #2a2a2a; }
  .led { position: absolute; top: 17px; right: 4px; width: 5px; height: 5px; border-radius: 50%; background: #777; z-index: 2; }
  .led.ok { background: #37d67a; box-shadow: 0 0 5px #37d67a; } .led.warn { background: #ffb020; box-shadow: 0 0 5px #ffb020; }
  .led.high { background: #ff4d4f; box-shadow: 0 0 6px #ff4d4f; }
  .led.err { background: #ff1f1f; box-shadow: 0 0 8px #ff1f1f; animation: ledblink 1s infinite; }
  @keyframes ledblink { 50% { opacity: .35; } }
  .dia .hit:focus-visible { outline: 1.5px solid var(--primary-color); outline-offset: -1.5px; fill: rgba(var(--rgb-primary-color, 3,169,244), .08); }

  /* Leviers */
  .levers { position: relative; display: flex; width: 100%; margin-top: 2px; }
  .levers .cell { flex: 1; display: flex; justify-content: center; }
  .slot { position: relative; width: calc(var(--u) * .36); height: calc(var(--u) * .95); border-radius: 3px; background: #17191c; box-shadow: inset 0 2px 4px #000; }
  .slot.wide { width: 78%; }
  .lever { position: absolute; left: 12%; right: 12%; height: 55%; border-radius: 2px; background: linear-gradient(90deg, #202226, #53565c 50%, #1d1f22); box-shadow: 0 2px 3px rgba(0,0,0,.6); }
  .lever.on { top: 6%; } .lever.off { bottom: 6%; }
  .levers .bar { position: absolute; left: 14%; right: 14%; height: 6px; border-radius: 3px; background: #2b2d31; box-shadow: 0 1px 2px rgba(0,0,0,.5); top: 4px; }
  .levers.off .bar { top: auto; bottom: 4px; }

  /* Différentiel */
  .t-differential .face { background: linear-gradient(180deg, #f6f7f8, #e0e3e7 60%, #ccd0d6); }
  .band { align-self: stretch; margin: 0 -3px; text-align: center; background: var(--acc); color: #fff; font: 700 9px/13px Arial; letter-spacing: .08em; }
  .mA { padding: 0 4px; border-radius: 3px; background: #ffd43b; color: #222; font: 700 10px/14px Arial; }
  .dtools { display: flex; align-items: center; gap: 6px; }
  .test { width: 12px; height: 12px; border-radius: 50%; display: grid; place-items: center; font: 700 7px Arial; color: #fff; background: radial-gradient(circle at 35% 30%, #ffb27a, #e8590c); }
  .win { width: 14px; height: 7px; border-radius: 2px; background: #2f9e44; box-shadow: inset 0 1px 2px rgba(0,0,0,.5); }
  .win.trip { background: #e03131; } .win.big { width: 60%; height: 10px; }

  /* Contacteurs */
  .t-contactor .face { background: linear-gradient(180deg, #62666d, #3f4247); } .t-contactor .print, .t-contactor .pid { color: #eee; }
  .t-contactor .pid { background: rgba(0,0,0,.35); }
  .coil { display: flex; justify-content: space-around; width: 100%; font: 700 8px Arial; color: #ddd; }
  .ind { width: 16px; height: 10px; border-radius: 2px; background: #555; box-shadow: inset 0 1px 2px #000; } .ind.on { background: #37d67a; box-shadow: 0 0 6px #37d67a, inset 0 1px 2px rgba(0,0,0,.3); }
  .sel { position: relative; width: 70%; height: 38px; margin: 4px 0; display: flex; flex-direction: column; justify-content: space-between; align-items: center; padding: 2px 0; font: 700 9px Arial; border-radius: 4px; background: #d3d6da; box-shadow: inset 0 1px 3px rgba(0,0,0,.4); }
  /* État bien visible : liseré du module + bandeau et sélecteur colorés (vert = enclenché, rouge = déclenché) */
  .mod.st-on .face { box-shadow: inset 0 0 0 2px #2f9e44, 0 2px 3px rgba(0,0,0,.25); }
  .mod.st-off .face { box-shadow: inset 0 0 0 2px #e03131, 0 2px 3px rgba(0,0,0,.25); }
  .band.dn { background: #6b7280; } .band.dn.on { background: #2f9e44; } .band.dn.off { background: #e03131; }
  .sel.s-on { background: #b2f2bb; } .sel.s-off { background: #ffc9c9; }
  .t-contactor_daynight .face { background: linear-gradient(180deg, #f4f5f6, #dde0e4 60%, #c9cdd2); }
  .knob { position: absolute; left: 50%; width: 16px; height: 10px; margin-left: -8px; border-radius: 2px; background: #1d1f22; }
  .knob.on { top: 3px; } .knob.auto { top: 50%; margin-top: -5px; } .knob.off { bottom: 3px; }
  .sel span:nth-child(2) { position: absolute; top: 50%; transform: translateY(-50%); left: 2px; }

  /* Relais / télérupteur / alimentation */
  .t-relay .band { background: #0f766e; } .t-impulse .band { background: #7c3aed; } .t-psu .band { background: #2f855a; }
  .t-relay .face { background: linear-gradient(180deg, #edf3f3, #d3dddd 60%, #c2cfcf); }
  .t-impulse .face { background: linear-gradient(180deg, #f3f0f8, #ddd6ea 60%, #cbc3dc); }
  .coil.dark { color: #333; }
  .led-lens { width: 12px; height: 12px; border-radius: 50%; background: #6b7280; box-shadow: inset 0 1px 2px rgba(0,0,0,.6); }
  .led-lens.on { background: #37d67a; box-shadow: 0 0 6px #37d67a, inset 0 1px 2px rgba(0,0,0,.3); } .led-lens.off { background: #4b5563; }
  .flag { width: 70%; height: 8px; border-radius: 2px; background: #c92a2a; box-shadow: inset 0 1px 2px rgba(0,0,0,.5); } .flag.on { background: #2f9e44; }
  .stt { font: 700 8px/1 Arial; padding: 1px 4px; border-radius: 2px; color: #fff; background: #6b7280; } .stt.on { background: #2f9e44; } .stt.off { background: #868e96; }
  .win.idle { background: #adb5bd; }
  .t-psu .face { background: linear-gradient(180deg, #6b7780, #424d55); } .t-psu .print, .t-psu .out { color: #f1f5f9; } .t-psu .pid { background: rgba(0,0,0,.35); color: #eee; }
  .out { padding: 0 4px; border-radius: 3px; background: #ffd43b; color: #222 !important; font: 700 9px/13px Arial; white-space: nowrap; }
  .pot { width: 18px; height: 18px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #e5e7eb, #9ca3af 65%, #6b7280); box-shadow: 0 1px 3px rgba(0,0,0,.6); position: relative; }
  .pot i { position: absolute; left: 50%; top: 2px; width: 2px; height: 7px; margin-left: -1px; background: #222; transform: rotate(35deg); transform-origin: 50% 7px; }
  .dcok { display: flex; align-items: center; gap: 3px; font: 700 7px Arial; color: #e2e8f0; } .dcok .ind { width: 8px; height: 8px; border-radius: 50%; } .dcok .ind.bad { background: #e03131; }

  /* Télérupteur / parafoudre / compteur / libre */
  .push { width: 14px; height: 14px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fff, #aab 60%, #777); box-shadow: 0 1px 2px rgba(0,0,0,.5); }
  .spd { width: 60%; height: 18px; border-radius: 3px; box-shadow: inset 0 1px 3px rgba(0,0,0,.6); }
  .spd.ok { background: #2f9e44; } .spd.bad { background: #e03131; }
  .t-surge .face { background: linear-gradient(180deg, #eef1f4, #d5dae0 60%, #c3c9d0); }
  .lcd { align-self: stretch; margin: 4px 2px; padding: 6px 4px; border-radius: 3px; text-align: center; font: 700 15px/1 ui-monospace, Menlo, monospace; color: #1b3a1f; background: linear-gradient(180deg, #b9d4a0, #9fc182); box-shadow: inset 0 2px 4px rgba(0,0,0,.45); }
  .btns { display: flex; gap: 6px; } .btns i { width: 14px; height: 6px; border-radius: 2px; background: #9aa0a6; box-shadow: 0 1px 1px rgba(0,0,0,.4); }
  .t-meter .face { background: linear-gradient(180deg, #e9ebee, #cdd1d6); }
  .t-free .face { background: repeating-linear-gradient(0deg, #e4e6e9 0 4px, #d4d7db 4px 6px); height: var(--h); }
  .blank { flex: 1; }

  /* ---------- Plaquette de repérage ---------- */
  .plate {
    position: relative; margin: 6px 1px 0; height: calc(var(--u) * 3); display: flex; flex-direction: column; align-items: center;
    overflow: hidden; border-radius: 2px; background: var(--plate); color: #222; box-shadow: 0 1px 2px rgba(0,0,0,.4);
  }
  .plate .cap { flex: none; width: 100%; height: 5px; background: var(--cap, #868e96); }
  .u-power { --cap: #e8590c; } .u-socket { --cap: #1c7ed6; } .u-light { --cap: #f59f00; }
  .plate ha-icon { --mdc-icon-size: 16px; margin: 3px 0; color: #333; flex: none; }
  .plate .txt { flex: 1; min-height: 0; padding: 7px 2px 2px; overflow: hidden; font: 600 11px/1.15 Arial, sans-serif; writing-mode: vertical-rl; transform: rotate(180deg); }
  .plate.h .txt { padding: 2px; writing-mode: horizontal-tb; transform: none; text-align: center; }


  /* ---------- Style « schéma d'installation » : rail DIN, peigne bleu, modules blancs, légende dessous ---------- */
  :host { --p: 0px; }
  .panel { background: linear-gradient(180deg, #f7f8f9, #eceef0); box-shadow: inset 0 0 0 1px rgba(255,255,255,.8), 0 0 0 1px rgba(0,0,0,.18), 0 2px 8px rgba(0,0,0,.15); border: 0; }
  ha-card.dark .panel { background: linear-gradient(180deg, #3a3d43, #2b2d31); }
  .panel-title { border: 1px solid rgba(0,0,0,.25); background: #fff; box-shadow: none; }
  .rail {
    display: block; left: -8px; right: -8px; top: calc(var(--p) + var(--h) * .34); height: 30px; border-radius: 0;
    background: linear-gradient(180deg, #f1f2f3, #d3d5d8 50%, #bfc2c6); box-shadow: 0 1px 0 rgba(0,0,0,.25), inset 0 1px 0 #fff;
  }
  .rail::after {
    inset: 10px 0; border-radius: 5px; box-shadow: inset 0 1px 2px rgba(0,0,0,.5);
    background: repeating-linear-gradient(90deg, transparent 0 14px, #7b7e84 14px 32px, transparent 32px 46px);
  }
  .fill { flex: 1 1 0; min-width: 0; margin-top: var(--p); height: var(--h); background: none; box-shadow: none; }
  /* module : blanc, liseré noir de 2 px entre appareils (comme sur le schéma d'installation) */
  .face {
    --sh: 0 2px 3px rgba(0,0,0,.25);
    margin: 0; border: 1px solid #151515; box-sizing: border-box; border-radius: 0; background: #fff;
  }
  .mod + .mod .face { margin-left: -1px; }
  .face::before { display: none; }
  .t-differential .face { background: #fff; }
  ha-card.dark .face { filter: brightness(.92); }
  /* borniers : vis rondes à tête fendue, repère N */
  .term { position: relative; height: 22px; background: #fff; box-shadow: none; justify-content: space-around; align-items: flex-end; padding-bottom: 3px; box-sizing: border-box; }
  .term.bot { align-items: flex-start; padding: 3px 0 0; }
  .term i { position: relative; width: 11px; height: 11px; border-radius: 50%; background: radial-gradient(circle at 40% 35%, #f4f4f4, #b9bcc0 65%, #8c8f94); box-shadow: 0 0 0 1px #6d7176; }
  .term i::after { content: ''; position: absolute; left: 12%; right: 12%; top: 45%; height: 10%; background: #4a4d52; transform: rotate(-35deg); display: block; }
  .term.n i:first-child::before { content: 'N'; position: absolute; left: 50%; transform: translateX(-50%); font: 600 7px/1 Arial, sans-serif; color: #333; }
  .term.top.n i:first-child::before { top: -9px; } .term.bot.n i:first-child::before { bottom: -9px; }
  /* disjoncteur / différentiel : bande bleutée (capot), zone manette, calibre encadré */
  .mod:not(.t-free) .body { position: relative; gap: 0; padding: 0; align-items: stretch; }
  .t-breaker .body:not(.ib)::before, .t-differential .body::before { content: ''; flex: none; height: 15px; background: linear-gradient(180deg, #d4e4f7, #c4d8f0); box-shadow: inset 0 1px 0 rgba(0,0,0,.35); }
  .levers { margin-top: 0; width: 100%; height: 42px; flex: none; background: #fff; }
  .levers .cell { align-items: stretch; }
  .slot {
    position: relative; width: 100%; height: 100%; border-radius: 0; box-shadow: none;
    background:
      linear-gradient(#555, #555) 9% 22% / 1px 62% no-repeat,
      linear-gradient(#555, #555) 91% 22% / 1px 62% no-repeat, #fff;
  }
  .slot::before { content: ''; position: absolute; left: 17%; right: 17%; top: 0; bottom: 5px; background: linear-gradient(180deg, #2a2a2a, #0a0a0a 25%, #050505); border-radius: 55% 55% 0 0 / 38% 38% 0 0; }
  .slot::after { content: ''; position: absolute; left: 23%; right: 23%; top: 3px; height: 5px; border-top: 1.5px solid #8a8d92; border-radius: 50% 50% 0 0; }
  .slot.wide { width: 100%; height: 100%; }
  .lever { left: 17%; right: 17%; bottom: 5px; top: auto; height: 11px; border-radius: 0; z-index: 1; display: grid; place-items: center; color: #f3d6d6; font: 600 5.5px/1 Arial, sans-serif; letter-spacing: .02em;
    background: linear-gradient(180deg, #8f2222, #6f1414); box-shadow: inset 0 1px 0 rgba(255,255,255,.18); }
  .lever.on, .lever.off { top: auto; bottom: 5px; }
  .lever.off { background: linear-gradient(180deg, #666a70, #44474c); }
  .lever.on::after { content: 'I On'; } .lever.off::after { content: 'O Off'; }
  .levers .bar { display: none; }
  /* calibre : cadre blanc à filets rouges (gauche et bas) */
  .print.amp { align-self: stretch; margin: 0 2px; padding: 1px 4px 0; border: 0; border-left: 1.5px solid #c1121f; border-bottom: 1.5px solid #c1121f; border-radius: 0; background: #fff;
    font: 400 17px/1.35 Arial, sans-serif; letter-spacing: 0; text-align: left; color: #1d1f22; flex: none; }
  .body > .levers + .print.amp { margin-top: 2px; }
  .t-differential .levers { width: 52%; align-self: flex-start; }
  .t-differential .print.amp { width: 52%; align-self: flex-start; box-sizing: border-box; margin-right: 0; }
  .dtype { position: absolute; right: 3px; top: 20px; display: flex; flex-direction: column; align-items: flex-end; font: 400 9px/1.2 Arial, sans-serif; color: #222; }
  .dtype span + span { }
  .dtype span:first-child { order: 2; font-size: 6px; opacity: .8; } .dtype span:nth-child(2) { order: 1; font-size: 10px; }
  .dtools { position: absolute; right: 3px; top: 63px; gap: 3px; }
  .test { width: 22px; height: 10px; border-radius: 1px; background: #c4c7cb; color: #222; font: 700 7px/10px Arial; box-shadow: inset 0 0 0 1px #8d9096; }
  .win { width: 6px; height: 6px; border-radius: 50%; }
  .body > .readouts { margin: auto 3px 0; }
  .readout { box-shadow: inset 0 1px 3px #000, 0 0 0 1px rgba(0,0,0,.45); }
  .mod:not(.t-free) .pid { margin: 2px 0 3px; background: transparent; box-shadow: none; font-weight: 600; color: #666; font-size: 8px; }
  .body.ib > .pid:first-child { margin: 0; flex: none; height: 15px; padding: 0; border-radius: 0; box-sizing: border-box; text-align: center; font: 700 9px/15px Arial, sans-serif; color: #1d3557; background: linear-gradient(180deg, #d4e4f7, #c4d8f0); box-shadow: inset 0 1px 0 rgba(0,0,0,.35); }
  /* autres appareils : même gabarit (id en bande bleue, bloc noir, cadre blanc), repères propres */
  .mod[class*="t-"] .face { background: #fff; }
  .mod.t-free .face { background: linear-gradient(180deg, #7d8187, #5d6166); }
  .zone { height: 42px; flex: none; display: flex; padding: 4px 13% 5px; background: #fff; box-sizing: border-box; }
  .blk { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; border-radius: 3px; color: #ddd; font: 600 6px/1 Arial, sans-serif;
    background: linear-gradient(180deg, #2c2c2e, #070707); box-shadow: inset 0 1px 0 #555, 0 0 0 1px #111; }
  .coil2 { display: flex; justify-content: space-between; width: 80%; } .coil2 b { font-weight: 700; }
  .zlens { width: 9px; height: 9px; border-radius: 50%; background: #6b7280; box-shadow: inset 0 1px 2px rgba(0,0,0,.6); }
  .zlens.on { background: #37d67a; box-shadow: 0 0 6px #37d67a, inset 0 1px 2px rgba(0,0,0,.3); } .zlens.off { background: #e03131; box-shadow: 0 0 5px #e03131; }
  .zmi { width: 70%; height: 7px; background: #e9ecef; border-radius: 1px; } .zmi.on { background: #c92a2a; }
  .zbtn { width: 15px; height: 15px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #f2f2f2, #9a9ea3 65%, #5c6066); box-shadow: 0 1px 2px #000; }
  .zpot { position: relative; width: 16px; height: 16px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #e5e7eb, #8f949a 65%, #565a60); }
  .zpot b { position: absolute; left: 50%; top: 2px; width: 2px; height: 6px; margin-left: -1px; background: #222; transform: rotate(35deg); transform-origin: 50% 6px; }
  .blk .dc { display: flex; align-items: center; gap: 3px; font-size: 5.5px; }
  .zspd { width: 70%; height: 14px; border-radius: 2px; } .zspd.ok { background: #2f9e44; } .zspd.bad { background: #e03131; }
  .zspds { display: flex; gap: 4px; } .zph { display: flex; flex-direction: column; align-items: center; gap: 2px; } .zph b { font: 700 5.5px/1 Arial, sans-serif; color: #ccc; }
  .zspd.sq { width: 15px; height: 15px; border-radius: 2px; } .zph b { font-size: 6px; }
  .zsw { display: flex; gap: 2px; font: 700 8px/1 Arial; } .zsw span { padding: 2px 3px; border-radius: 1px; color: #888; } .zsw span.act { background: #c92a2a; color: #fff; }
  .blk.mt { background: linear-gradient(180deg, #b5cf9b, #9fbf83); box-shadow: inset 0 2px 3px rgba(0,0,0,.45), 0 0 0 1px #111; color: #1b3a1f; }
  .zlcd { font: 700 11px/1 ui-monospace, Menlo, monospace; color: #1b3a1f; }
  .blk ha-icon { --mdc-icon-size: 22px; color: #eee; }
  .print.amp.txt { font-size: 13px; }
  .print.sm { font: 600 8px/1.1 Arial; color: #555; text-align: center; }
  /* légende sous le module : pictogramme encadré, libellé, section en rouge */
  .plate {
    height: auto; margin: 8px 0 0; padding: 0 1px; overflow: visible; align-items: center; gap: 3px; background: none; box-shadow: none; border-radius: 0; color: #222;
  }
  .plate::after, .plate .cap { display: none; }
  .pi { width: 30px; height: 30px; display: grid; place-items: center; border: 1px solid #444; border-radius: 3px; background: #fff; color: #111; box-sizing: border-box; flex: none; }
  .pi ha-icon { --mdc-icon-size: 22px; display: block; }
  .plate .txt { flex: none; min-height: 0; padding: 0; writing-mode: horizontal-tb; transform: none; text-align: center; width: 100%; overflow: visible; overflow-wrap: anywhere; hyphens: auto; font: 500 8.5px/1.15 Arial, sans-serif; letter-spacing: -.2px; color: #2b2d31; }
  .plate .sec { font: 600 9px/1.1 Arial, sans-serif; color: #c1121f; text-align: center; }
  ha-card.dark .plate .txt { color: #e6e8ea; } ha-card.dark .pi { background: #ddd; }
  .mod:hover .face { filter: brightness(1.03); }

  /* ---------- Dialogue de détails ---------- */
  dialog { padding: 0; border: 0; border-radius: 14px; max-width: min(520px, 94vw); width: 100%; color: var(--primary-text-color); background: var(--card-background-color, #fff); }
  dialog::backdrop { background: rgba(0,0,0,.5); }
  .dlg { padding: 16px; max-height: 80vh; overflow: auto; }
  .dlg header { display: flex; align-items: center; gap: 12px; } .dlg header > div { flex: 1; } .dlg h3 { margin: 0; font-size: 18px; } .dlg h4 { margin: 14px 0 4px; font-size: 13px; text-transform: uppercase; color: var(--secondary-text-color); }
  .x { border: 0; background: none; font-size: 18px; color: var(--primary-text-color); cursor: pointer; }
  .kvs { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 4px 12px; margin: 12px 0; }
  .kv { display: flex; justify-content: space-between; gap: 8px; font-size: 13px; } .kv span { color: var(--secondary-text-color); }
  .values { padding: 10px; border-radius: 10px; background: var(--secondary-background-color, #f3f3f3); }
  .big { font-size: 26px; font-weight: 600; cursor: pointer; } .big small { display: block; font-size: 11px; font-weight: 400; color: var(--secondary-text-color); }
  .values .bar { height: 8px; margin: 8px 0 2px; border-radius: 4px; background: var(--divider-color, #ccc); overflow: hidden; }
  .values .bar i { display: block; height: 100%; background: #37b24d; } .values .bar i.warn { background: #f59f00; } .values .bar i.high { background: #e03131; }
  .zones { list-style: none; margin: 0; padding: 0; } .zones li { display: flex; align-items: center; gap: 8px; padding: 6px 4px; border-bottom: 1px solid var(--divider-color, #ddd); font-size: 14px; }
  .zones li.click { cursor: pointer; } .zones li > span:not(.id) { flex: 1; } .zones ha-icon { --mdc-icon-size: 18px; color: var(--secondary-text-color); }
  .zones .id { min-width: 36px; font: 600 12px ui-monospace, monospace; color: var(--secondary-text-color); } .zones small { color: var(--secondary-text-color); }

  .error { padding: 16px; color: var(--error-color, #c00); }
`,jt=Le`
  :host { display: block; }
  .blk { margin: 8px 0; padding: 6px 10px; border: 1px solid var(--divider-color); border-radius: 8px; }
  .blk .blk { background: var(--secondary-background-color); }
  summary { cursor: pointer; display: flex; align-items: center; gap: 6px; padding: 4px 0; font-weight: 600; }
  summary span { flex: 1; }
  button { cursor: pointer; border: 1px solid var(--divider-color); border-radius: 6px; padding: 2px 8px; background: var(--card-background-color); color: var(--primary-text-color); }
  button.add { margin: 6px 0; } button.danger { color: var(--error-color); }
  .banner { padding: 10px; border-radius: 8px; background: var(--warning-color, #f59f00); color: #000; margin-bottom: 10px; }
  .note { font-size: 12px; color: var(--secondary-text-color); margin: 8px 0; }
`;var Dt={differential:{type:"differential"},rcd:{type:"differential"},diff:{type:"differential"},breaker:{type:"breaker"},breaker_1p:{type:"breaker",poles:1},breaker_2p:{type:"breaker",poles:2},breaker_3p:{type:"breaker",poles:3},breaker_4p:{type:"breaker",poles:4},three_phase:{type:"breaker",poles:3},tetrapolar:{type:"breaker",poles:4},contactor_daynight:{type:"contactor_daynight"},daynight:{type:"contactor_daynight"},contactor:{type:"contactor"},power_contactor:{type:"contactor"},impulse:{type:"impulse"},telerupteur:{type:"impulse"},tele:{type:"impulse"},relay:{type:"relay"},relais:{type:"relay"},psu:{type:"psu"},power_supply:{type:"psu"},alimentation:{type:"psu"},surge:{type:"surge"},surge_arrester:{type:"surge"},meter:{type:"meter"},free:{type:"free"},custom:{type:"custom"}},Hn={differential:{poles:2},breaker:{poles:1},contactor_daynight:{poles:1,width:2},contactor:{poles:1,width:2},impulse:{poles:2,width:1},relay:{poles:2,width:1},psu:{poles:2,width:2},surge:{poles:2},meter:{poles:2,width:4},free:{poles:1,width:1},custom:{poles:1,width:1}},Wt=(t,e,n)=>Math.min(n,Math.max(e,t)),I=t=>t==null||t===""?void 0:String(t);function Te(t){let e={};for(let[n,o]of Object.entries(t))o!=null&&o!==""&&(e[n]=o);return e}function Qe(t){return[{id:"tableau_1",label:"Tableau principal",rows:t.map(n=>{let o=(n.phases?.length??0)>=3,s=Te({id:n.id,type:"differential",label:n.label,poles:n.poles??(o?4:void 0),amp:n.amp,mA:n.mA,class:n.class,sensor:n.sensor,max_w:n.max_w,accent:n.accent}),r=(n.circuits??[]).map(a=>{let{type:d,...l}=a;return Te({...l,type:"breaker",usage:d,poles:a.poles??(o?3:void 0)})});return Te({id:String(n.id),label:n.label??String(n.id),phases:n.phases,accent:n.accent,modules:[s,...r]})})}]}function Nn(t){let e={circuits:new Map,groups:new Map};for(let n of t??[]){e.groups.set(String(n.id),n);for(let o of n.circuits??[])e.circuits.has(String(o.id))||e.circuits.set(String(o.id),o)}return e}function Un(t){return typeof t=="string"?{room:t}:Te({floor:I(t.floor),room:I(t.room),icon:t.icon,sensor:t.sensor})}function In(t,e,n,o){let s={...t};if(t.circuit!==void 0&&o.circuits.has(String(t.circuit))){let $=o.circuits.get(String(t.circuit)),{type:y,...E}=$;s={...E,type:"breaker",usage:y,...t}}if(t.group!==void 0&&o.groups.has(String(t.group))){let{circuits:$,...y}=o.groups.get(String(t.group));s={...y,type:"differential",...t}}let r=Dt[String(s.type??"breaker").toLowerCase()]??Dt.custom,a=r.type,d=(s.phases??e.phases).map($=>String($).toUpperCase()),l=Hn[a],c=s.poles??r.poles??(a==="breaker"&&d.length>=3?3:void 0),x=Wt(Number(s.width??l.width??c??l.poles)||1,1,12),g=Wt(Number(c??(a==="breaker"&&x===1?2:l.poles))||1,1,4),u=["power","socket","light"].includes(String(s.usage))?s.usage:"other";return{id:I(s.id)??`${e.id}-${n+1}`,type:a,label:I(s.label),poles:g,width:x,amp:s.amp!==void 0?Number(s.amp):void 0,mA:s.mA!==void 0?Number(s.mA):void 0,cls:I(s.class),curve:I(s.curve),usage:u,icon:s.icon,accent:s.accent,phases:d,sensor:s.sensor,current_sensor:s.current_sensor,voltage_sensor:s.voltage_sensor,state_entity:s.state_entity,max_w:s.max_w!==void 0?Number(s.max_w):void 0,zones:(s.zones??[]).map(Un),note:I(s.note),output:I(s.output),section:I(s.section)}}function jn(t,e,n){let o=I(t.id)??`row_${e+1}`,s=(t.phases??[]).map(d=>String(d).toUpperCase()),r=(t.modules??[]).map((d,l)=>In(d,{phases:s,id:o},l,n)),a;for(let d of r)d.type==="differential"?(a=d,d.children=[]):a&&d.type!=="free"&&d.type!=="meter"&&a.children.push(d);return{id:o,label:I(t.label),phases:s,accent:t.accent,modules:r}}function Dn(t){let e=Math.floor(Number(t));return Number.isFinite(e)&&e>=1?Math.min(e,60):void 0}function Ft(t){let e=Nn(t.groups),n=t.panels??(t.groups?Qe(t.groups):[]),o=Number(t.nominal_voltage)>0?Number(t.nominal_voltage):void 0,s=n.map((r,a)=>({id:I(r.id)??`panel_${a+1}`,label:I(r.label),capacity:Dn(r.modules_per_row??t.modules_per_row),rows:(r.rows??[]).map((d,l)=>jn(d,l,e))}));if(o)for(let r of s)for(let a of r.rows)for(let d of a.modules)d.volts=o;return s}function Bt(t){if(!t||!t.panels&&!t.groups)throw new Error("Configuration invalide : d\xE9finir 'panels' (nouveau format) ou 'groups' (ancien format).");if(t.max_width!==void 0&&!(typeof t.max_width=="number"&&t.max_width>0))throw new Error("'max_width' doit \xEAtre un nombre positif de pixels (ex. 1100), sans unit\xE9.");let e=n=>n!==void 0&&!(Number.isInteger(n)&&n>=1);if(e(t.modules_per_row)||(t.panels??[]).some(n=>e(n.modules_per_row)))throw new Error("'modules_per_row' doit \xEAtre un entier \u2265 1 (nombre de modules DIN par rang\xE9e).");if(t.panels&&!Array.isArray(t.panels))throw new Error("'panels' doit \xEAtre une liste.");if(t.groups&&!Array.isArray(t.groups))throw new Error("'groups' doit \xEAtre une liste.")}function Kt(t,e){let n=new Set,o=s=>{s&&n.add(s)};o(t.sensors?.total?.entity),o(t.sensors?.total?.current_sensor),o(t.sensors?.total?.voltage_sensor);for(let s of Object.values(t.sensors?.phases??{}))o(s?.entity),o(s?.current_sensor),o(s?.voltage_sensor);for(let s of e)for(let r of s.rows)for(let a of r.modules){o(a.sensor),o(a.current_sensor),o(a.voltage_sensor),o(a.state_entity);for(let d of a.zones)o(d.sensor)}return[...n]}var et=t=>!t||t==="unavailable"||t==="unknown";function tt(t,e,n="raw"){if(!e)return{status:"none",value:null};let o=t.states[e];if(!o||et(o.state))return{status:"unavailable",value:null};let s=parseFloat(o.state);return Number.isFinite(s)?(n==="current"&&o.attributes?.unit_of_measurement==="mA"&&(s/=1e3),{status:"ok",value:s}):{status:"unavailable",value:null}}var Wn={W:["power",1],kW:["power",1e3],MW:["power",1e6],mW:["power",.001],Wh:["energy",1],kWh:["energy",1e3],MWh:["energy",1e6],A:["current",1],mA:["current",.001],V:["voltage",1],mV:["voltage",.001],kV:["voltage",1e3]},Fn={power:["power",1],energy:["energy",1e3],current:["current",1],voltage:["voltage",1]};function Z(t,e,n="power"){if(!e)return{status:"none",value:null,kind:n};let o=t.states[e],s=o?.attributes??{},[r,a]=Wn[s.unit_of_measurement]??Fn[s.device_class]??[n,1];if(!o||et(o.state))return{status:"unavailable",value:null,kind:r};let d=parseFloat(o.state);return Number.isFinite(d)?{status:"ok",value:d*a,kind:r}:{status:"unavailable",value:null,kind:r}}function O(t,e){if(!e)return null;let n=t.states[e]?.state?.toLowerCase();if(!n||et(n))return null;if(["on","true","closed","active","enabled","home","heat","playing","1"].includes(n))return!0;if(["off","false","open","inactive","disabled","not_home","idle","standby","0"].includes(n))return!1;let o=parseFloat(n);return Number.isFinite(o)?o>0:null}var qt=["power","energy","current","voltage"],Zt=(t,e)=>qt.indexOf(t.kind)-qt.indexOf(e.kind);function Vt(t,e,n=t.length){let o=[...new Set(t.map(a=>a.kind))],s=o.filter(a=>t.some(d=>d.kind===a&&d.value!==null));return(s.length?s:o.slice(0,1)).map(a=>{let d=t.filter(l=>l.kind===a&&l.value!==null);return{kind:a,source:e,value:d.length?d.reduce((l,c)=>l+c.value,0):null,partial:d.length<n||d.some(l=>l.partial)}}).sort(Zt)}var Bn=t=>{let e=t[0];return t.length?{configured:!0,value:e.value,kind:e.kind,source:e.source,partial:e.partial,counters:t}:{configured:!1,value:null,kind:"power",source:"none",partial:!1,counters:[]}},Gt=new WeakMap;function j(t,e){let n=Gt.get(e);if(n&&n.h===t)return n.p;let o=Kn(t,e);return Gt.set(e,{h:t,p:o}),o}function Kn(t,e){let n=[],o=(d,l)=>{if(!d)return;let c=Z(t,d,l);n.some(x=>x.kind===c.kind)||n.push({kind:c.kind,value:c.value,partial:!1,source:"sensor"})};o(e.sensor,"power"),o(e.current_sensor,"current");let s=[],r=e.zones.filter(d=>d.sensor);if(r.length)s=Vt(r.map(d=>Z(t,d.sensor)),"zones",e.zones.length);else if(e.children?.length){let d=e.children.map(l=>j(t,l));if(d.some(l=>l.configured)){let l=d.flatMap(c=>c.counters.map(x=>({...x,partial:x.partial})));s=Vt(l,"children",d.length),d.some(c=>!c.configured)&&(s=s.map(c=>({...c,partial:!0})))}}let a=[...n,...s.filter(d=>!n.some(l=>l.kind===d.kind))].sort(Zt);return Bn(a)}function ue(t,e="power"){if(!(e==="energy"||e==="voltage")){if(e==="current")return t.amp;if(t.max_w)return t.max_w;if(t.amp)return t.amp*(t.volts??230)*(t.poles>=3?3:1)}}function Yt(t,e,n){let o=n.counters.find(a=>a.kind==="current");if(o)return o.value;let s=n.counters.find(a=>a.kind==="power"),r=tt(t,e.voltage_sensor);return r.value&&s&&s.value!==null?s.value/r.value:null}function nt(t){let e=Math.abs(t);return e>=1e4?`${(t/1e3).toFixed(1)} kW`:e>=1e3?`${(t/1e3).toFixed(2)} kW`:`${Math.round(t)} W`}function qn(t,e=!1){let n=t/1e3,o=Math.abs(n);return`${n.toFixed(e?o>=1e3?0:1:o>=1e3?0:o>=100?1:2)} kWh`}function Vn(t){let e=Math.abs(t);return`${t.toFixed(e>=100?0:e>=10?1:2)} A`}var Gn=t=>`${t.toFixed(t>=100?0:1)} V`,H=(t,e,n=!1)=>t==="energy"?qn(e,n):t==="current"?Vn(e):t==="voltage"?Gn(e):nt(e);function we(t,e){let n=[];if(!e)return n;let o;if(e.entity){let r=Z(t,e.entity);(r.kind==="power"||r.kind==="energy")&&(n.push({kind:r.kind,value:r.value,entity:e.entity}),o=r)}let s;if(e.current_sensor&&(s=Z(t,e.current_sensor,"current"),n.push({kind:"current",value:s.value,entity:e.current_sensor})),e.voltage_sensor){let r=Z(t,e.voltage_sensor,"voltage");n.push({kind:"voltage",value:r.value,entity:e.voltage_sensor})}else o?.kind==="power"&&o.value!==null&&s?.value&&s.value>.05&&o.value>0&&n.push({kind:"voltage",value:o.value/s.value,entity:e.current_sensor,approx:!0});return n.sort((r,a)=>["power","energy","current","voltage"].indexOf(r.kind)-["power","energy","current","voltage"].indexOf(a.kind))}function Oe(t,e,n){if(!e)return[];let o=Object.entries(e.phases??{}).filter(([,l])=>l&&(l.entity||l.current_sensor||l.voltage_sensor)),s=l=>we(t,l).find(c=>c.kind==="power")?.value??null,r=Math.max(0,...o.map(([,l])=>s(l)??0)),a=(l,c,x,g)=>{let u=we(t,x);if(!u.length)return;let $=u.find(E=>E.kind==="power"),y=$&&$.value!==null&&g?Math.max(0,$.value)/g:null;return{key:l,label:c,items:u,pct:y,limit:g,entity:x?.entity??x?.current_sensor??x?.voltage_sensor}},d=l=>l?.max_w??(e.total?.max_w&&o.length?e.total.max_w/o.length:r||void 0);return[a("total",n,e.total,e.total?.max_w),...o.map(([l,c])=>a(l.toUpperCase(),l.toUpperCase(),c,d(c)))].filter(l=>!!l)}var Xt={fr:{total:"Total",search:"Champ de recherche",search_ph:"Rechercher (id, libell\xE9, pi\xE8ce, calibre\u2026)",result:"r\xE9sultat",no_result:"aucun r\xE9sultat",clear:"Effacer",incoming:"Arriv\xE9e",nominal_voltage:"Tension nominale (V, d\xE9faut 230)",incoming_title:"Titre du cadre d\u2019arriv\xE9e (vue tableau)",phase:"Phase",power:"Puissance",current:"Intensit\xE9",voltage:"Tension",load:"Charge",zones:"Zones",protects:"Circuits prot\xE9g\xE9s",unavailable:"Indisponible",close:"Fermer",type:"Type",id:"Identifiant",rating:"Calibre",poles:"P\xF4les",sensitivity:"Sensibilit\xE9",cls:"Classe",curve:"Courbe",phases:"Phases",usage:"Usage",sum_zones:"Somme des capteurs de zones",sum_children:"Somme des circuits (partielle si certains sans mesure)",own_sensor:"Capteur du module",no_data:"Aucune mesure",max:"Max",state:"\xC9tat",t_differential:"Interrupteur diff\xE9rentiel",t_breaker:"Disjoncteur",t_contactor_daynight:"Contacteur jour/nuit",t_contactor:"Contacteur de puissance",t_impulse:"T\xE9l\xE9rupteur",t_relay:"Relais",t_psu:"Alimentation",output:"Sortie",section:"Section du c\xE2ble (mm\xB2)",modules_per_row:"Modules DIN par rang\xE9e",t_surge:"Parafoudre",t_meter:"Compteur \xE9lectrique",t_free:"Module libre",t_custom:"Module personnalis\xE9",u_power:"Puissance",u_socket:"Prises",u_light:"\xC9clairage",u_other:"Autre",panel:"Tableau",row:"Rang\xE9e",module:"Module",add_row:"Ajouter une rang\xE9e",add_module:"Ajouter un module",add_panel:"Ajouter un tableau",add_zone:"Ajouter une zone",remove:"Supprimer",legacy:"Ancien format (groups) d\xE9tect\xE9.",convert:"Convertir en panels / rows / modules",general:"G\xE9n\xE9ral",global_sensors:"Capteurs globaux",title:"Titre",language:"Langue",module_width:"Largeur d\u2019un module (px)",total_entity:"Capteur total (W ou kWh)",head_sensor:"Capteur (W ou kWh)",total_max:"Puissance max totale (W)",label:"Libell\xE9",amp:"Calibre (A)",width:"Largeur (modules DIN)",icon:"Ic\xF4ne",sensor:"Capteur (W, kWh ou A)",current_sensor:"Capteur d\u2019intensit\xE9",voltage_sensor:"Capteur de tension",state_entity:"\xC9tat (capteur, switch\u2026 on/off)",floor:"\xC9tage",room:"Pi\xE8ce",mA:"Sensibilit\xE9 (mA)",max_w:"Puissance max (W)",accent:"Couleur d\u2019accent",editor_note:"Les options avanc\xE9es restent \xE9ditables en YAML.",free:"Libre",view_tree:"Sch\xE9ma",collapse_level:"Replier un niveau",collapsed:"Repli initial",max_width:"Largeur max du sch\xE9ma (px)",view_panel:"Tableau",expand_all:"Tout d\xE9plier",collapse_all:"Tout replier",view:"Vue initiale",expand:"D\xE9plier / replier"},en:{total:"Total",search:"Search field",search_ph:"Search (id, label, room, rating\u2026)",result:"result",no_result:"no result",clear:"Clear",incoming:"Incoming",nominal_voltage:"Nominal voltage (V, default 230)",incoming_title:"Incoming frame title (panel view)",phase:"Phase",power:"Power",current:"Current",voltage:"Voltage",load:"Load",zones:"Zones",protects:"Protected circuits",unavailable:"Unavailable",close:"Close",type:"Type",id:"Identifier",rating:"Rating",poles:"Poles",sensitivity:"Sensitivity",cls:"Class",curve:"Curve",phases:"Phases",usage:"Usage",sum_zones:"Sum of zone sensors",sum_children:"Sum of circuits (partial if some have no measurement)",own_sensor:"Module sensor",no_data:"No measurement",max:"Max",state:"State",t_differential:"RCD (differential switch)",t_breaker:"Circuit breaker",t_contactor_daynight:"Day/night contactor",t_contactor:"Power contactor",t_impulse:"Impulse relay (t\xE9l\xE9rupteur)",t_relay:"Relay",t_psu:"Power supply",output:"Output",section:"Cable cross-section (mm\xB2)",modules_per_row:"DIN modules per row",t_surge:"Surge arrester",t_meter:"Energy meter",t_free:"Free module",t_custom:"Custom module",u_power:"Power",u_socket:"Sockets",u_light:"Lighting",u_other:"Other",panel:"Panel",row:"Row",module:"Module",add_row:"Add row",add_module:"Add module",add_panel:"Add panel",add_zone:"Add zone",remove:"Remove",legacy:"Legacy format (groups) detected.",convert:"Convert to panels / rows / modules",general:"General",global_sensors:"Global sensors",title:"Title",language:"Language",module_width:"Module width (px)",total_entity:"Total sensor (W or kWh)",head_sensor:"Sensor (W or kWh)",total_max:"Max total power (W)",label:"Label",amp:"Rating (A)",width:"Width (DIN modules)",icon:"Icon",sensor:"Sensor (W, kWh or A)",current_sensor:"Current sensor",voltage_sensor:"Voltage sensor",state_entity:"State (sensor, switch\u2026 on/off)",floor:"Floor",room:"Room",mA:"Sensitivity (mA)",max_w:"Max power (W)",accent:"Accent colour",editor_note:"Advanced options remain editable in YAML.",free:"Free",view_tree:"Diagram",collapse_level:"Collapse one level",collapsed:"Initial collapse",max_width:"Max diagram width (px)",view_panel:"Panel",expand_all:"Expand all",collapse_all:"Collapse all",view:"Initial view",expand:"Expand / collapse"}},v=(t,e)=>Xt[t][e]??Xt.fr[e]??e;var K={power:"mdi:flash",socket:"mdi:power-socket-eu",light:"mdi:lightbulb",other:"mdi:electric-switch",differential:"mdi:current-ac",surge:"mdi:flash-alert",meter:"mdi:counter",contactor:"mdi:electric-switch-closed",contactor_daynight:"mdi:theme-light-dark",impulse:"mdi:toggle-switch",relay:"mdi:electric-switch",psu:"mdi:power-plug-outline"};var Zn=t=>t.amp!==void 0?h`<div class="print amp">${t.curve??""}${t.amp}${t.curve?"":"A"}</div>`:f;function Yn(t,e){let n=Math.max(1,Math.min(t.poles,t.width));return h`<div class="levers ${e?"on":"off"}">
    ${Array.from({length:n},()=>h`<div class="cell"><div class="slot"><div class="lever ${e?"on":"off"}"></div></div></div>`)}
    ${n>1?h`<i class="bar"></i>`:f}
  </div>`}var Xn=({mod:t,ctx:e})=>{let n=O(e.hass,t.state_entity);return h`${Yn(t,n!==!1)}${Zn(t)}`},Jn=({mod:t,ctx:e})=>{let o=O(e.hass,t.state_entity)!==!1;return h`
    <div class="levers single ${o?"on":"off"}"><div class="slot wide"><div class="lever ${o?"on":"off"}"></div></div></div>
    <div class="dtype"><span>Type ${t.cls??"AC"}</span>${t.mA!==void 0?h`<span>${t.mA}mA</span>`:f}</div>
    ${t.amp!==void 0?h`<div class="print amp">${t.amp}A</div>`:f}
    <div class="dtools"><span class="test">T</span><span class="win ${o?"ok":"trip"}"></span></div>`},J=(t,e)=>h`<div class="zone"><div class="blk ${t}">${e}</div></div>`,Q=(t,e)=>{let n=e??(t.amp!==void 0?`${t.curve??""}${t.amp}${t.curve?"":"A"}`:"");return n?h`<div class="print amp ${e?"txt":""}">${n}</div>`:f},ot=t=>h`<i class="zlens ${t===!0?"on":t===!1?"off":""}"></i>`,Qn=({mod:t,ctx:e})=>{let n=O(e.hass,t.state_entity),o=n===!0?"on":n===!1?"off":"auto";return h`${J("dn",h`<div class="zsw"><span class=${o==="on"?"act":""}>I</span><span class=${o==="auto"?"act":""}>A</span><span class=${o==="off"?"act":""}>O</span></div>`)}${Q(t,t.amp!==void 0?void 0:"J/N")}`},eo=({mod:t,ctx:e})=>{let n=O(e.hass,t.state_entity);return h`${J("ct",h`<span class="coil2"><b>A1</b><b>A2</b></span><i class="zmi ${n===!0?"on":""}"></i>`)}${Q(t,t.amp!==void 0?void 0:"KM")}`},to=({mod:t,ctx:e})=>{let n=O(e.hass,t.state_entity);return h`${J("rl",h`<span class="coil2"><b>A1</b><b>A2</b></span>${ot(n)}`)}${Q(t,t.amp!==void 0?void 0:"REL")}`},no=({mod:t,ctx:e})=>{let n=O(e.hass,t.state_entity);return h`${J("tl",h`<i class="zbtn"></i>${ot(n)}`)}${Q(t,t.amp!==void 0?void 0:"TL")}`},oo=({mod:t,ctx:e})=>{let n=O(e.hass,t.state_entity);return h`${J("ps",h`<i class="zpot"><b></b></i><span class="dc">${ot(n!==!1)}DC OK</span>`)}${Q(t,t.output??(t.amp!==void 0?void 0:"AC/DC"))}`},so=({mod:t,ctx:e})=>{let n=O(e.hass,t.state_entity),o=Math.min(3,t.phases.length||(t.poles>=3?3:1)),s=o<2?h`<i class="zspd ${n===!1?"bad":"ok"}"></i>`:h`<span class="zspds">${Array.from({length:o},(r,a)=>h`<span class="zph"><i class="zspd sq ${n===!1?"bad":"ok"}"></i><b>${t.phases[a]??`L${a+1}`}</b></span>`)}</span>`;return h`${J("sp",s)}${Q(t,"SPD")}${t.note?h`<div class="print sm">${t.note}</div>`:f}`},ro=({mod:t,power:e})=>h`
  ${J("mt",h`<span class="zlcd">${e.value!==null?H(e.kind,e.value):"- - -"}</span>`)}${Q(t,t.label??"kWh")}`,ao=()=>h`<div class="blank"></div>`,io=({mod:t})=>h`${J("cu",t.icon?h`<ha-icon icon=${t.icon}></ha-icon>`:f)}${Q(t)}`,st={differential:Jn,breaker:Xn,contactor_daynight:Qn,contactor:eo,relay:to,impulse:no,psu:oo,surge:so,meter:ro,free:ao,custom:io};function He(t,e){return t.label??(t.type==="free"?v(e.lang,"free"):t.id)}function Jt(t,e,n){return h`<div class="term ${e} ${n?"n":""}">${Array.from({length:t},()=>h`<i></i>`)}</div>`}var lo="mdi:map-marker-outline";function co(t,e,n){let o=[t.amp!==void 0?`${t.amp} A`:"",t.id!==e?t.id:""].filter(Boolean).join(" \xB7 "),s=t.zones.map(r=>({icon:r.icon??n??lo,text:[r.floor,r.room].filter(Boolean).join(" \xB7 ")})).filter(r=>r.text);return h`<div class="tip" role="tooltip">
    <div class="tip-h">${n?h`<ha-icon icon=${n}></ha-icon>`:f}<b>${e}</b>${o?h`<span class="tip-d">${o}</span>`:f}</div>
    ${s.map(r=>h`<div class="tip-z"><ha-icon icon=${r.icon}></ha-icon><span>${r.text}</span></div>`)}
  </div>`}function Qt(t){let e=t.currentTarget,n=e.querySelector(".tip");if(!n)return;let o=e.getBoundingClientRect();n.style.left=`${Math.max(4,Math.min(o.left,window.innerWidth-270))}px`,o.top>140?(n.style.bottom=`${window.innerHeight-o.top+6}px`,n.style.top="auto"):(n.style.top=`${o.bottom+6}px`,n.style.bottom="auto")}var po=new Set(["relay","impulse","contactor","contactor_daynight"]);function en(t,e,n="",o=[]){let s=j(e.hass,t),r=ue(t,s.kind),a=s.value!==null&&r?Math.max(0,s.value)/r:null,d=a===null?"":a>1?"err":a>=.9?"high":a>=.6?"warn":"ok",l=st[t.type]??st.custom,c=Math.max(2,t.poles),x=t.poles!==3,g=He(t,e),u=t.type!=="free"||!!t.label,$=t.icon??(t.type==="breaker"?K[t.usage]:K[t.type]),y=t.type==="differential",E=s.counters.filter(L=>!(y&&L.value===null)),A=s.configured&&t.type!=="meter"&&E.length?h`<div class="readouts">${E.map(L=>h`<div class="readout k-${L.kind} ${L.value===null?"bad":""}" title=${v(e.lang,L.source==="children"?"sum_children":L.source==="zones"?"sum_zones":"own_sensor")}>
        ${L.value===null?"n/d":H(L.kind,L.value,!0)}</div>`)}</div>`:f,P=po.has(t.type)?O(e.hass,t.state_entity):null,ne=t.type!=="differential"&&t.type!=="free",B=P===null?"":P?"st-on":"st-off",Ne=`--w:${t.width};${t.accent?`--acc:${t.accent};--cap:${t.accent};`:""}`,oe=L=>{L instanceof KeyboardEvent&&L.key!=="Enter"&&L.key!==" "||(L.preventDefault(),e.select(t))};return h`<div class="mod t-${t.type} u-${t.usage} p-${t.poles} ${B} ${n?`s-${n}`:""}" style=${Ne} role="button" tabindex="0"
      aria-label=${`${g} ${t.id}`} @click=${oe} @keydown=${oe} @mouseenter=${Qt} @focus=${Qt}>
    ${o.length?h`<div class="phtag" title=${o.join(" / ")}>${o.map(L=>h`<i class="ph-${L.toLowerCase()}">${L}</i>`)}</div>`:f}
    ${co(t,g,$)}
    <div class="face">
      ${t.type!=="free"?Jt(c,"top",x):f}
      ${d?h`<i class="led ${d}"></i>`:f}
      <div class="body ${ne?"ib":""}">${ne?h`<div class="pid">${t.id}</div>`:f}${l({mod:t,ctx:e,power:s})}${A}${t.type==="differential"||ne?f:h`<div class="pid">${t.id}</div>`}</div>
      ${t.type!=="free"?Jt(c,"bot",x):f}
    </div>
    ${u?h`<div class="plate">
          ${$?h`<span class="pi"><ha-icon icon=${$}></ha-icon></span>`:f}
          <div class="txt" lang=${e.lang}>${g}</div>
          ${t.section?h`<div class="sec">${t.section} mm²</div>`:f}</div>`:f}
  </div>`}function tn(t,e){if(!e||e<=0)return[t];let n=[[]],o=0;for(let s of t)o+s.width>e&&n[n.length-1].length&&(n.push([]),o=0),n[n.length-1].push(s),o+=s.width;return n}function nn(t,e,n,o){let s=g=>e.search&&o?e.search(g,t,o)?"hit":"dim":"",r=!e.search||!o||t.modules.some(g=>e.search(g,t,o)),a=g=>g.phases.length?g.phases:t.phases,d=t.modules.filter(g=>g.type!=="free"&&g.type!=="meter"),l=new Set(d.map(g=>[...a(g)].sort().join("/"))).size>1,c=t.modules.find(g=>g.children!==void 0),x=c?j(e.hass,c):void 0;return h`<section class="row ${r?"":"nomatch"}" style=${t.accent?`--acc:${t.accent}`:""}>
    ${t.label||t.phases.length||x?.configured?h`<header class="row-head">
          ${t.label?h`<b>${t.label}</b>`:f}
          ${t.phases.map(g=>h`<span class="chip ph-${g.toLowerCase()}">${g}</span>`)}
          ${x?.configured&&x.counters.some(g=>g.value!==null)?h`<span class="grow"></span>${x.counters.filter(g=>g.value!==null).map(g=>h`<span class="dim sum">${g.partial?"\u2265 ":""}${H(g.kind,g.value)}</span>`)}`:f}
        </header>`:f}
    <div class="scroller"><div class="lines">
      ${tn(t.modules,n).map(g=>h`<div class="rail-wrap ${n?"fixed":""} ${l?"ph":""}" style=${n?`--n:${n}`:""}><div class="rail"></div>
        ${g.map(u=>en(u,e,s(u),l&&u.type!=="free"&&u.type!=="meter"?a(u):[]))}<span class="fill"></span>
      </div>`)}
    </div></div>
  </section>`}function on(t,e){return h`<div class="panel ${t.capacity?"fixed":""}">
    ${t.label?h`<div class="panel-title">${t.label}</div>`:f}
    ${t.rows.map(n=>nn(n,e,t.capacity,t))}
  </div>`}var sn=t=>String(t??"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();function uo(t,e,n,o){let s=t.amp!==void 0?[`${t.amp}a`,`${t.amp} a`,`${t.amp}`,`${t.curve??""}${t.amp}`]:[];return sn([t.id,t.label,t.type,v(o,`t_${t.type}`),...s,t.mA!==void 0?`${t.mA}ma`:"",t.cls,t.section,t.output,t.note,...t.zones.flatMap(r=>[r.floor,r.room]),e.id,e.label,n.id,n.label,t.sensor,t.current_sensor,t.voltage_sensor,t.state_entity,...t.zones.map(r=>r.sensor)].filter(r=>r!==void 0&&r!=="").join(" | "))}function rn(t,e){let n=sn(t).split(/\s+/).filter(Boolean),o=n.filter(r=>!r.startsWith("-")),s=n.filter(r=>r.startsWith("-")&&r.length>1).map(r=>r.slice(1));return!o.length&&!s.length?null:(r,a,d)=>{if(r.type==="free"&&!r.label)return!1;let l=uo(r,a,d,e);return o.every(c=>l.includes(c))&&!s.some(c=>l.includes(c))}}function an(t,e){let n=0;for(let o of t)for(let s of o.rows)for(let r of s.modules)e(r,s,o)&&n++;return n}var W=(t,e)=>e===void 0||e===""?f:h`<div class="kv"><span>${t}</span><b>${e}</b></div>`;function ln(t,e,n){let o=e.lang,s=j(e.hass,t),r=ue(t,s.kind),a=s.value!==null&&r?Math.min(100,Math.max(0,s.value)/r*100):null,d=Yt(e.hass,t,s),l=tt(e.hass,t.voltage_sensor),c=O(e.hass,t.state_entity),x=t.icon??(t.type==="breaker"?K[t.usage]:K[t.type]),g=u=>u?()=>e.moreInfo(u):void 0;return h`<div class="dlg">
    <header><ha-icon icon=${x??"mdi:electric-switch"}></ha-icon>
      <div><h3>${He(t,e)}</h3><div class="dim">${v(o,`t_${t.type}`)} · ${t.id}</div></div>
      <button class="x" @click=${n} aria-label=${v(o,"close")}>✕</button></header>
    <div class="kvs">
      ${W(v(o,"rating"),t.amp!==void 0?`${t.curve??""}${t.amp} A`:void 0)}
      ${W(v(o,"poles"),t.poles)}
      ${W(v(o,"sensitivity"),t.mA!==void 0?`${t.mA} mA`:void 0)}
      ${W(v(o,"cls"),t.cls)}
      ${W(v(o,"output"),t.output)}
      ${t.type!=="differential"?f:W(v(o,"max"),t.max_w?nt(t.max_w):void 0)}
      ${W(v(o,"phases"),t.phases.length?t.phases.join(" \xB7 "):void 0)}
      ${t.type==="breaker"&&t.usage!=="other"?W(v(o,"usage"),v(o,`u_${t.usage}`)):f}
      ${c===null?f:W(v(o,"state"),c?"ON":"OFF")}
      ${W("",t.note)}
    </div>
    ${s.configured||d!==null||l.value!==null?h`<div class="values">
          ${s.counters.map(u=>h`<div class="big ${u.value===null?"bad":""}" @click=${g(u.kind==="current"&&t.current_sensor&&t.sensor!==t.current_sensor?t.current_sensor:t.sensor)}>
                ${u.value===null?v(o,"unavailable"):`${u.partial?"\u2265 ":""}${H(u.kind,u.value)}`}
                <small>${v(o,u.source==="zones"?"sum_zones":u.source==="children"?"sum_children":"own_sensor")}</small></div>`)}
          ${d!==null&&!s.counters.some(u=>u.kind==="current")?W(v(o,"current"),`${d.toFixed(1)} A`):f}
          ${l.value!==null?W(v(o,"voltage"),`${l.value.toFixed(0)} V`):f}
          ${a!==null?h`<div class="bar"><i style=${`width:${a}%`} class=${a>=90?"high":a>=60?"warn":"ok"}></i></div>
            <div class="dim">${v(o,"load")} ${a.toFixed(0)} % / ${H(s.kind,r)}</div>`:f}
        </div>`:f}
    ${t.zones.length?h`<h4>${v(o,"zones")}</h4><ul class="zones">
          ${t.zones.map(u=>{let $=Z(e.hass,u.sensor);return h`<li class=${u.sensor?"click":""} @click=${g(u.sensor)}>
              <ha-icon icon=${u.icon??"mdi:map-marker-outline"}></ha-icon>
              <span>${[u.floor,u.room].filter(Boolean).join(" \xB7 ")}</span>
              ${u.sensor?h`<b class=${$.value===null?"bad":""}>${$.value===null?"n/d":H($.kind,$.value)}</b>`:f}
            </li>`})}</ul>`:f}
    ${t.children?.length?h`<h4>${v(o,"protects")}</h4><ul class="zones">
          ${t.children.map(u=>{let $=j(e.hass,u);return h`<li class="click" @click=${()=>e.select(u)}>
              <span class="id">${u.id}</span><span>${He(u,e)}</span>
              ${u.amp!==void 0?h`<small>${u.amp} A</small>`:f}
              ${$.counters.map(y=>h`<b class=${y.value===null?"bad":""}>${y.value===null?"n/d":H(y.kind,y.value)}</b>`)}
            </li>`})}</ul>`:f}
  </div>`}var rt=440,T=22,he=14,ho=54,ke=34,un=8,Ae=24,fo="#2f9e44",go="#e03131",dn=["L1","L2","L3"],ee=t=>`var(--din-panel-phase-${t.toLowerCase()}-color, ${{L1:"#8b4513",L2:"#1a202c",L3:"#5a6474"}[t]??"#718096"})`,te=(t,e=un)=>t.length*e*.56;function cn(t,e,n=un){if(te(t,n)<=e)return t;let o=Math.floor(e/(n*.56))-1;return o<2?"":`${t.slice(0,o)}\u2026`}function hn(t){return t<=700?rt:Math.max(rt,Math.round(t*rt/700))}function mo(t,e){let n=e.floors?.[t];if(n?.bg)return{bg:n.bg,fg:n.fg??"#fff"};let o=0;for(let s of t)o=(o*31+s.charCodeAt(0))%360;return{bg:`hsl(${o} 45% 38%)`,fg:"#fff"}}var bo=t=>{let e=t.modules.findIndex(n=>n.children!==void 0);return t.modules.slice(0,e<0?t.modules.length:e).filter(n=>!(n.type==="free"&&!n.label))},at=new WeakMap;function it(t){if(at.has(t))return at.get(t)??void 0;let e=bo(t),n=null;if(e.length>=2){let o=e.map(d=>d.phases.length?d.phases:t.phases),s=o.filter(d=>d.length>=2),r=s.length?s:o,a=["L1","L2","L3"].filter(d=>r.some(l=>l.includes(d)));n={id:t.id,type:"custom",label:t.label,poles:1,width:1,usage:"other",phases:a,zones:[],children:e}}return at.set(t,n),n??void 0}var pn=t=>[...t].sort().join("/");function lt(t,e){let n=[];for(let o of t){if(e==="panels"){n.push(`p:${o.id}`);continue}for(let s of o.rows)for(let r of s.modules)e==="rows"&&r===s.modules[0]&&it(s)&&n.push(`r:${o.id}/${s.id}/${s.id}`),e==="rows"&&r.children?.length&&n.push(`r:${o.id}/${s.id}/${r.id}`),e==="zones"&&r.type!=="differential"&&r.zones.length&&n.push(`z:${o.id}/${s.id}/${r.id}`)}return n}function fn(t,e,n){let o=n.width,s=n.config,r=1;for(let i of t)for(let p of i.rows)for(let b of p.modules)r=Math.max(r,j(e.hass,b).counters.length);for(let i of[s.sensors?.total,...Object.values(s.sensors?.phases??{})])r=Math.max(r,we(e.hass,i).length);let a=o-Math.max(90,r*ho+6),d=[],l=new Set;for(let i of t)for(let p of i.rows)p.phases.forEach(b=>l.add(b)),p.modules.forEach(b=>b.phases.forEach(m=>l.add(m)));Object.keys(s.sensors?.phases??{}).forEach(i=>l.add(i.toUpperCase()));let c=[...dn.filter(i=>l.has(i)),...[...l].filter(i=>!dn.includes(i))],x=14,g=9,u=i=>x+c.indexOf(i)*g,$=x+Math.max(1,c.length)*g+8,y=new Map,E=new Map,A=8,P=i=>Math.max(20,te(i,7)+10),ne=(i,p,b,m)=>M`
    <rect class="box" x=${i} y=${p-he/2} width=${P(b)} height=${he} rx="3" style=${m?`fill:${m};stroke:${m}`:""}></rect>
    <text class="boxt" x=${i+P(b)/2} y=${p+2.6} text-anchor="middle" style=${m?"fill:#fff":""}>${b}</text>`,B=(i,p,b,m,C="wire",S="")=>M`<line class=${C} x1=${i} y1=${p} x2=${b} y2=${m} style=${S}></line>`,Ne=(i,p,b="")=>({value:i.value,partial:i.partial,kind:i.kind,limit:p,tip:b});function oe(i,p){let b=a;return p.map(m=>{let C=m.value===null?"n/d":`${m.partial?"\u2265 ":m.approx?"\u2248 ":""}${H(m.kind,m.value)}`,S=Math.max(36,te(C,7.5)+10),_=b;b+=S+3;let w=m.value!==null&&m.limit?Math.max(0,m.value)/m.limit:null,k=w===null?"":w>1?"err":w>=.9?"high":w>=.6?"warn":"ok";return M`<g class="bubble k-${m.kind} ${m.value===null?"bad":""}">
        <title>${m.tip??""}</title>
        <rect class="bub" x=${_} y=${i-7} width=${S} height="14" rx="7"></rect>
        <text class="val" x=${_+S/2} y=${i+(w===null?2.6:.8)} text-anchor="middle">${C}</text>
        ${w!==null?M`<rect class="gbg" x=${_+7} y=${i+3.2} width=${S-14} height="1.8" rx=".9"></rect>
          <rect class="gfg ${k}" x=${_+7} y=${i+3.2} width=${(S-14)*Math.min(1,w)} height="1.8" rx=".9"></rect>`:f}
      </g>`})}let L=(i,p,b)=>M`<path class="chev" d=${b?`M${i-3},${p-1.5} L${i},${p+2} L${i+3},${p-1.5}`:`M${i-1.5},${p-3} L${i+2},${p} L${i-1.5},${p+3}`}></path>`,ct=(i,p,b)=>M`<rect class="hit chevhit" x=${i-6} y=${p-8} width="12" height="16" tabindex="0" role="button" aria-label=${b} @click=${m=>{m.stopPropagation(),n.toggle(b)}} @keydown=${m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.stopPropagation(),n.toggle(b))}}></rect>`,Ue=(i,p,b=!0,m=a-2)=>b&&p+6<m?B(p+3,i,m,i,"conn"):f,de=i=>i?.entity??i?.current_sensor??i?.voltage_sensor,pt=i=>p=>{i&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),i())},fe=(i,p,b="",m=!!p)=>m&&p?M`<rect class="hit" x="0" y=${i} width=${o} height=${T} tabindex="0" role="button" aria-label=${b} @click=${p} @keydown=${pt(p)}><title>${b}</title></rect>`:M`<rect class="hit" x="0" y=${i} width=${o} height=${T}><title>${b}</title></rect>`,ut=i=>we(e.hass,i).map(p=>({value:p.value,kind:p.kind,partial:!1,approx:p.approx,limit:p.kind==="power"?i?.max_w:void 0,tip:p.approx?"U \u2248 P / I":p.entity})),Se=new Map;for(let i of t)for(let p of i.rows)for(let b of p.modules){Se.set(b,{row:p,panel:i});for(let m of b.children??[])Se.set(m,{row:p,panel:i})}let Y=i=>{let p=Se.get(i);return!!p&&!!e.search&&e.search(i,p.row,p.panel)},ht=(i,p=!1)=>e.search?Y(i)||p&&(i.children??[]).some(Y)?"s-hit":"s-dim":"",Ie=(()=>{if(!e.search)return n.collapsed;let i=new Set;for(let p of t){p.rows.some(b=>b.modules.some(m=>Y(m)||(m.children??[]).some(Y)))||i.add(`p:${p.id}`);for(let b of p.rows){let m=it(b);m&&!(m.children??[]).some(Y)&&i.add(`r:${p.id}/${b.id}/${m.id}`)}for(let b of p.rows)for(let m of b.modules){m.children&&!(Y(m)||(m.children??[]).some(Y))&&i.add(`r:${p.id}/${b.id}/${m.id}`);for(let C of[m,...m.children??[]])C.zones.length&&!Y(C)&&i.add(`z:${p.id}/${b.id}/${C.id}`)}}return i})(),mn=(i,p)=>{let b=Se.get(i);return!e.search||!!b&&e.search({...i,zones:[p]},b.row,b.panel)},bn=new Map(Oe(e.hass,s.sensors,"Total").map(i=>[i.key,i])),ft=(i,p,b,m)=>{let C=a-8;if(b===null||C-p<24)return Ue(i,p-3,m);let S=C-p,_=b>1?"err":b>=.9?"high":b>=.6?"warn":"";return M`<rect class="hg-bg" x=${p} y=${i-2.5} width=${S} height="5" rx="2.5"></rect>
      <rect class="hg-fg ${_}" x=${p} y=${i-2.5} width=${Math.max(2.5,S*Math.min(1,b))} height="5" rx="2.5"></rect>`},se=s.sensors?.total;if(se?.entity||se?.current_sensor||se?.voltage_sensor){let i=A+T/2,p=ut(se);d.push(M`<g style="--acc:var(--primary-color)">${ne($,i,"Total")}
      <text x=${$+P("Total")+6} y=${i+2.8} class="dim">Total</text>
      ${ft(i,$+P("Total")+10+te("Total"),null,p.length>0)}
      ${oe(i,p)}
      ${fe(A,()=>e.moreInfo(de(se)),de(se),!!de(se))}</g>`),A+=T}for(let i of c){let p=A+T/2;y.set(i,p),E.set(i,p);let b=Object.entries(s.sensors?.phases??{}).find(([S])=>S.toUpperCase()===i)?.[1],m=ut(b),C=bn.get(i);d.push(M`<g>
      ${B(u(i),p,$,p,"tap",`stroke:${ee(i)}`)}
      <circle cx=${u(i)} cy=${p} r="2.6" style=${`fill:${ee(i)}`}></circle>
      ${ne($,p,i,ee(i))}
      ${m.length?M`${ft(p,$+P(i)+8,C?.pct??null,!0)}${oe(p,m)}
        ${fe(A,()=>e.moreInfo(de(b)),de(b),!!de(b))}`:f}</g>`),A+=T}function gt(i,p,b,m,C,S,_=!1,w=b.id){let k=O(e.hass,b.state_entity),R=P(w),N=C?b.icon??(b.type==="breaker"?K[b.usage]:K[b.type]):void 0,D=S?10:0,z=p+R+(N?18:6)+D,U=cn(m??"",a-8-z-(k===null?0:Ae+4));return M`${ne(p,i,w,k===null?void 0:k?fo:go)}
      ${S?L(p+R+5,i,S==="open"):f}
      ${N?M`<foreignObject width="24" height="24" transform=${`translate(${p+R+4+D} ${i-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${N} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:f}
      ${U?M`<text x=${z} y=${i+2.8}>${U}</text>`:f}
      ${Ue(i,U?z+te(U):z-2,_||k!==null,_?a-2:a-Ae-6)}
      ${k===null?f:M`<g class="spill ${k?"on":"off"}"><rect x=${a-Ae-4} y=${i-6} width=${Ae} height="12" rx="6"></rect>
        <text class="spillt" x=${a-Ae/2-4} y=${i+2.4} text-anchor="middle">${k?"ON":"OFF"}</text></g>`}`}let xn=(i,p)=>(p.kind==="current"&&i.current_sensor?i.current_sensor:i.sensor)??"";function mt(i){let p=j(e.hass,i);return oe(A+T/2,p.counters.map(b=>Ne(b,ue(i,b.kind),xn(i,b))))}function $n(i,p){let b=p+8,m=0,C=A+T/2,S=i.icon??(i.type==="breaker"?K[i.usage]:K[i.type]);for(let _ of i.zones){let w=_.icon??S,k=A+T/2,R=_.sensor?Z(e.hass,_.sensor):void 0,N=_.floor?mo(_.floor,s):void 0,D=_.floor?te(_.floor,6.5)+10:0,z=p+ke+(_.floor?D+4:0),U=z+(w?16:0),ge=cn(_.room??"",a-8-U);d.push(M`<g class=${mn(i,_)?"":"s-dim"}>
        ${B(b,k,p+ke,k)}
        ${N?M`<rect x=${p+ke} y=${k-6} width=${D} height="12" rx="6" style=${`fill:${N.bg}`}></rect>
          <text class="pillt" x=${p+ke+D/2} y=${k+2.3} text-anchor="middle" style=${`fill:${N.fg}`}>${_.floor}</text>`:f}
        ${w?M`<foreignObject width="24" height="24" transform=${`translate(${z} ${k-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${w} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:f}
        ${ge?M`<text x=${U} y=${k+2.8}>${ge}</text>`:f}
        ${Ue(k,U+te(ge),!!R)}
        ${R?oe(k,[{value:R.value,kind:R.kind,partial:!1,tip:_.sensor}]):f}
        ${fe(A,_.sensor?()=>e.moreInfo(_.sensor):void 0,[_.floor,_.room].filter(Boolean).join(" \xB7 "))}</g>`),m=k,A+=T}return{first:C,last:m}}function bt(i,p,b,m,C,S,_=[]){let w=A+T/2;for(let z of _)E.set(z,Math.max(E.get(z)??0,w));let k=`z:${m}/${C}/${i.id}`,R=i.zones.length>0,N=R&&!Ie.has(k),D=p+P(i.id)+5;if(d.push(M`<g class=${ht(i)} style=${`--acc:${i.accent??b}`}>
      ${S!==void 0?B(S,w,p,w):f}
      ${_.length?B(u(_[0]),w,p,w,"tap",`stroke:${ee(_[0])}`):f}
      ${_.map(z=>M`<circle cx=${u(z)} cy=${w} r="2.6" style=${`fill:${ee(z)}`}></circle>`)}
      ${gt(w,p,i,vn(i),!0,R?N?"open":"closed":void 0,j(e.hass,i).configured)}
      ${mt(i)}
      ${fe(A,()=>e.select(i),xt(i))}
      ${R?ct(D,w,k):f}</g>`),A+=T,N){let z=d.length,U=$n(i,p);d.splice(z,0,M`<g>${B(p+8,w+he/2,p+8,U.last)}</g>`)}return w}let vn=i=>i.label,xt=i=>[i.label,i.id,i.amp!==void 0?`${i.amp} A`:"",i.mA!==void 0?`${i.mA} mA`:""].filter(Boolean).join(" \xB7 ");function $t(i,p,b,m,C=i.id,S){let _=A+T/2,w=`r:${m}/${p.id}/${i.id}`,k=i.children??[],R=k.length>0&&!Ie.has(w),N=$+P(C)+5,D=i.accent??p.accent??"#3182ce",z=(i.phases.length?i.phases:p.phases).filter(q=>c.includes(q));for(let q of z)E.set(q,Math.max(E.get(q)??0,_));if(d.push(M`<g class=${ht(i,!0)} style=${`--acc:${D}`}>
      ${z.length?B(u(z[0]),_,$,_,"tap",`stroke:${ee(z[0])}`):f}
      ${z.map(q=>M`<circle cx=${u(q)} cy=${_} r="2.6" style=${`fill:${ee(q)}`}></circle>`)}
      ${gt(_,$,i,b,!1,k.length?R?"open":"closed":void 0,j(e.hass,i).configured,C)}
      ${mt(i)}
      ${fe(A,()=>e.select(i),xt(i))}
      ${k.length?ct(N,_,w):f}</g>`),A+=T,!R)return;let U=$+8,ge=d.length,vt=_;for(let q of k)vt=bt(q,$+ke,D,m,p.id,U,S?S(q):[]);k.length&&d.splice(ge,0,M`<g style=${`--acc:${D}`}>${B(U,_+he/2,U,vt)}</g>`)}for(let i of t){let p=`p:${i.id}`,b=!Ie.has(p);if(i.label){let m=A+T/2,C=Math.max(60,te(i.label,9.8)+28);d.push(M`<g style="--acc:var(--secondary-text-color)">
        <rect class="ptbox" x=${$} y=${m-he/2-1} width=${C} height=${he+2} rx="3"></rect>
        ${L($+8,m,b)}
        <text class="ptitle" x=${$+16} y=${m+3}>${i.label}</text>
        <rect class="hit" x="0" y=${A} width=${o} height=${T} tabindex="0" role="button" aria-label=${i.label} @click=${()=>n.toggle(p)} @keydown=${pt(()=>n.toggle(p))}><title>${i.label}</title></rect></g>`),A+=T}if(!(!b&&i.label))for(let m of i.rows){let C=m.modules.filter(w=>w.children!==void 0),S=C.length?m.modules.indexOf(C[0]):m.modules.length,_=it(m);if(_){let w=pn(_.phases);$t(_,m,m.label,i.id,m.id,k=>{let R=k.phases.length?k.phases:m.phases;return pn(R)===w?[]:R.filter(N=>c.includes(N))})}else for(let w of m.modules.slice(0,S))w.type==="free"&&!w.label||bt(w,$,m.accent??"#3182ce",i.id,m.id,void 0,(w.phases.length?w.phases:m.phases).filter(k=>c.includes(k)));for(let w of C)$t(w,m,[m.label,w.label].filter(Boolean).join(" - ")||void 0,i.id)}}let _n=c.map(i=>B(u(i),y.get(i),u(i),E.get(i),"trunk",`stroke:${ee(i)}`)),yn=A+8;return h`<div class="dia" style=${`max-width:${n.maxWidth}px`}>
    <svg viewBox=${`0 0 ${o} ${yn}`} width="100%" preserveAspectRatio="xMidYMin meet" role="img">${_n}${d}</svg></div>`}var xo=["differential","breaker","contactor_daynight","contactor","relay","impulse","psu","surge","meter","free","custom"],$o=["id","type","label","amp","poles","width","mA","class","curve","usage","phases","sensor","current_sensor","voltage_sensor","state_entity","icon","max_w","accent","output","section"],dt=["l1","l2","l3"],F=(t,e)=>({number:{min:t,max:e,mode:"box"}}),Ce=class extends V{constructor(){super(...arguments);this._open=new Set(["sec:general"]);this._lbl=n=>{let o=/^(l[123])_(entity|current|volt|max)$/.exec(n.name);return o?`${o[1].toUpperCase()} \xB7 ${v(this.L,o[2]==="entity"?"head_sensor":o[2]==="current"?"current_sensor":o[2]==="volt"?"voltage_sensor":"max_w")}`:v(this.L,n.name==="class"?"cls":n.name==="total_current"?"current_sensor":n.name==="total_volt"?"voltage_sensor":n.name)}}setConfig(n){this._config=n}get L(){return this._config?.language??this._hassLang}get _hassLang(){return this.hass?.language?.startsWith("fr")?"fr":"en"}_emit(n){this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}_panels(){return structuredClone(this._config.panels??[])}_setPanels(n){this._emit({...this._config,panels:n})}_sec(n,o,s,r=f){let a=this._open.has(n);return h`<details class="blk" ?open=${a} @toggle=${d=>{let l=d.currentTarget;d.target!==l||l.open===this._open.has(n)||(l.open?this._open.add(n):this._open.delete(n),this.requestUpdate())}}><summary><span>${o}</span>${r}</summary>${a?s():f}</details>`}_general(){let n=this._config,o={title:n.title,incoming_title:n.incoming_title,nominal_voltage:n.nominal_voltage,language:n.language??this._hassLang,module_width:n.module_width,view:n.view??"panel",modules_per_row:n.modules_per_row,max_width:n.max_width,collapsed:n.collapsed??"none",search:n.search!==!1},s=[{name:"title",selector:{text:{}}},{name:"incoming_title",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"language",selector:{select:{options:["fr","en"]}}},{name:"module_width",selector:F(30,90)}]},{name:"max_width",selector:F(300,3e3)},{name:"nominal_voltage",selector:F(100,480)},{name:"modules_per_row",selector:F(1,60)},{name:"collapsed",selector:{select:{options:[{value:"none",label:"\u2014"},{value:"zones",label:v(this.L,"zones")},{value:"rows",label:v(this.L,"row")},{value:"panels",label:v(this.L,"panel")}]}}},{name:"search",selector:{boolean:{}}},{name:"view",selector:{select:{options:[{value:"panel",label:v(this.L,"view_panel")},{value:"tree",label:v(this.L,"view_tree")}]}}}];return h`<ha-form .hass=${this.hass} .data=${o} .schema=${s} .computeLabel=${this._lbl}
      @value-changed=${r=>{let a=r.detail.value,d={...n,title:a.title||void 0,incoming_title:a.incoming_title||void 0,nominal_voltage:a.nominal_voltage||void 0,language:a.language,module_width:a.module_width||void 0,view:a.view==="tree"?"tree":void 0,max_width:a.max_width||void 0,modules_per_row:a.modules_per_row||void 0,collapsed:a.collapsed&&a.collapsed!=="none"?a.collapsed:void 0,search:a.search===!1?!1:void 0};for(let l of Object.keys(d))d[l]===void 0&&delete d[l];this._emit(d)}}></ha-form>`}_sensors(){let n=this._config,o=n.sensors??{},s=l=>Object.keys(o.phases??{}).find(c=>c.toLowerCase()===l)??l,r={};for(let l of dt){let c=o.phases?.[s(l)];r[`${l}_entity`]=c?.entity,r[`${l}_current`]=c?.current_sensor,r[`${l}_volt`]=c?.voltage_sensor,r[`${l}_max`]=c?.max_w}let a={total_entity:o.total?.entity,total_current:o.total?.current_sensor,total_volt:o.total?.voltage_sensor,total_max:o.total?.max_w,...r},d=[{type:"grid",name:"",schema:[{name:"total_entity",selector:{entity:{domain:"sensor"}}},{name:"total_current",selector:{entity:{domain:"sensor"}}},{name:"total_volt",selector:{entity:{domain:"sensor"}}}]},{name:"total_max",selector:F(0,1e5)},...dt.map(l=>({type:"grid",name:"",schema:[{name:`${l}_entity`,selector:{entity:{domain:"sensor"}}},{name:`${l}_current`,selector:{entity:{domain:"sensor"}}},{name:`${l}_volt`,selector:{entity:{domain:"sensor"}}},{name:`${l}_max`,selector:F(0,1e5)}]}))];return h`<ha-form .hass=${this.hass} .data=${a} .schema=${d} .computeLabel=${this._lbl}
      @value-changed=${l=>{let c=l.detail.value,x={...n},g={...o.total??{},entity:c.total_entity||void 0,current_sensor:c.total_current||void 0,voltage_sensor:c.total_volt||void 0,max_w:c.total_max||void 0};for(let y of Object.keys(g))g[y]===void 0&&delete g[y];let u={...o.phases??{}};for(let y of dt){let E=s(y),A={...u[E]??{},entity:c[`${y}_entity`]||void 0,current_sensor:c[`${y}_current`]||void 0,voltage_sensor:c[`${y}_volt`]||void 0,max_w:c[`${y}_max`]||void 0};for(let P of Object.keys(A))A[P]===void 0&&delete A[P];Object.keys(A).length?u[E]=A:delete u[E]}let $={...o,total:Object.keys(g).length?g:void 0,phases:Object.keys(u).length?u:void 0};for(let y of Object.keys($))$[y]===void 0&&delete $[y];Object.keys($).length?x.sensors=$:delete x.sensors,this._emit(x)}}></ha-form>`}_moduleSchema(n){let o=this.L,s=n==="differential";return[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"type",selector:{select:{mode:"dropdown",options:xo.map(r=>({value:r,label:v(o,`t_${r}`)}))}}}]},{name:"label",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"amp",selector:F(1,250)},{name:"poles",selector:F(1,4)},{name:"width",selector:F(1,12)},...s?[{name:"mA",selector:F(1,1e3)},{name:"class",selector:{select:{options:["AC","A","F","B"]}}}]:[{name:"curve",selector:{select:{options:["B","C","D"]}}}]]},...n==="breaker"?[{name:"usage",selector:{select:{options:["power","socket","light","other"].map(r=>({value:r,label:v(o,`u_${r}`)}))}}}]:[],{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}},{name:"sensor",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"current_sensor",selector:{entity:{domain:"sensor"}}},{name:"voltage_sensor",selector:{entity:{domain:"sensor"}}}]},...n==="psu"?[{name:"output",selector:{text:{}}}]:[],{name:"state_entity",selector:{entity:{}}},{name:"section",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"icon",selector:{icon:{}}},{name:"max_w",selector:F(0,1e5)}]}]}_patchModule(n,o,s,r){let a=this._panels(),d=a[n].rows[o].modules[s];for(let l of $o){let c=r[l];c===void 0||c===""||c===null||Array.isArray(c)&&!c.length||typeof c=="number"&&Number.isNaN(c)?delete d[l]:d[l]=c}this._setPanels(a)}_zones(n,o,s,r){let a=this.L,d=[{type:"grid",name:"",schema:[{name:"floor",selector:{text:{}}},{name:"room",selector:{text:{}}}]},{name:"sensor",selector:{entity:{domain:"sensor"}}},{name:"icon",selector:{icon:{}}}],l=(r.zones??[]).map(c=>typeof c=="string"?{room:c}:c);return h`${l.map((c,x)=>h`<div class="blk"><ha-form .hass=${this.hass} .data=${c} .schema=${d} .computeLabel=${this._lbl}
        @value-changed=${g=>{let u=this._panels(),$=u[n].rows[o].modules[s],y=[...$.zones??[]],E={};for(let[A,P]of Object.entries(g.detail.value))P!==""&&P!==void 0&&(E[A]=P);y[x]=E,$.zones=y,this._setPanels(u)}}></ha-form>
      <button class="danger" @click=${()=>{let g=this._panels(),u=g[n].rows[o].modules[s];u.zones=(u.zones??[]).filter(($,y)=>y!==x),u.zones.length||delete u.zones,this._setPanels(g)}}>${v(a,"remove")}</button></div>`)}
      <button class="add" @click=${()=>{let c=this._panels(),x=c[n].rows[o].modules[s];x.zones=[...x.zones??[],{}],this._setPanels(c)}}>+ ${v(a,"add_zone")}</button>`}_module(n,o,s,r){let a=this.L,d=String(r.type??"breaker"),l=`${n}/${o}/${s}`,c=this._open.has(l),x=u=>$=>{$.preventDefault(),$.stopPropagation(),u()},g=u=>{let $=this._panels(),y=$[n].rows[o].modules,E=s+u;E<0||E>=y.length||([y[s],y[E]]=[y[E],y[s]],this._setPanels($))};return h`<details class="blk" ?open=${c} @toggle=${u=>{let $=u.currentTarget;u.target!==$||$.open===this._open.has(l)||($.open?this._open.add(l):this._open.delete(l),this.requestUpdate())}}><summary><span>${v(a,`t_${d}`)} · ${r.id??""} ${r.amp?`${r.amp} A`:""}</span>
        <button @click=${x(()=>g(-1))}>◀</button><button @click=${x(()=>g(1))}>▶</button>
        <button class="danger" @click=${x(()=>{let u=this._panels();u[n].rows[o].modules.splice(s,1),this._setPanels(u)})}>✕</button></summary>
      ${c?h`<ha-form .hass=${this.hass} .data=${r} .schema=${this._moduleSchema(d)} .computeLabel=${this._lbl}
        @value-changed=${u=>this._patchModule(n,o,s,u.detail.value)}></ha-form>
      <div class="note">${v(a,"zones")}</div>${this._zones(n,o,s,r)}`:f}
    </details>`}_row(n,o,s){let r=this.L,a=d=>l=>{l.preventDefault(),l.stopPropagation(),d()};return h`<details class="blk" open><summary><span>${v(r,"row")} · ${s.label??s.id??o+1}</span>
        <button class="danger" @click=${a(()=>{let d=this._panels();d[n].rows.splice(o,1),this._setPanels(d)})}>✕</button></summary>
      <ha-form .hass=${this.hass} .data=${{id:s.id,label:s.label,phases:s.phases}}
        .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}}]}
        .computeLabel=${this._lbl}
        @value-changed=${d=>{let l=this._panels(),c=l[n].rows[o];for(let x of["id","label","phases"]){let g=d.detail.value[x];g===void 0||g===""||Array.isArray(g)&&!g.length?delete c[x]:c[x]=g}this._setPanels(l)}}></ha-form>
      ${(s.modules??[]).map((d,l)=>this._module(n,o,l,d))}
      <button class="add" @click=${()=>{let d=this._panels(),l=d[n].rows[o];l.modules=[...l.modules??[],{type:l.modules?.length?"breaker":"differential",id:`${l.id??o+1}-${(l.modules?.length??0)+1}`,amp:l.modules?.length?16:40}],this._setPanels(d)}}>+ ${v(r,"add_module")}</button>
    </details>`}render(){if(!this._config)return f;let n=this.L,o=this._config,s=!!o.groups&&!o.panels;return h`${this._sec("sec:general",v(n,"general"),()=>this._general())}
      ${this._sec("sec:sensors",v(n,"global_sensors"),()=>this._sensors())}
      ${s?h`<div class="banner">${v(n,"legacy")}
            <button @click=${()=>{let r={...o,panels:Qe(o.groups)};delete r.groups,this._emit(r)}}>${v(n,"convert")}</button></div>`:f}
      ${(o.panels??[]).map((r,a)=>this._sec(`p:${a}`,`${v(n,"panel")} \xB7 ${r.label??r.id??a+1}`,()=>h`
        <ha-form .hass=${this.hass} .data=${{id:r.id,label:r.label,modules_per_row:r.modules_per_row}} .computeLabel=${this._lbl}
          .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"modules_per_row",selector:F(1,60)}]}
          @value-changed=${d=>{let l=this._panels();l[a].id=d.detail.value.id||void 0,l[a].label=d.detail.value.label||void 0,l[a].modules_per_row=d.detail.value.modules_per_row||void 0,this._setPanels(l)}}></ha-form>
        ${(r.rows??[]).map((d,l)=>this._row(a,l,d))}
        <button class="add" @click=${()=>{let d=this._panels();d[a].rows=[...d[a].rows??[],{id:`row_${(d[a].rows?.length??0)+1}`,modules:[]}],this._setPanels(d)}}>+ ${v(n,"add_row")}</button>`,h`<button class="danger" @click=${d=>{d.preventDefault(),d.stopPropagation();let l=this._panels();l.splice(a,1),this._open=new Set([...this._open].filter(c=>!c.startsWith("p:")&&!/^\d/.test(c))),this._setPanels(l)}}>✕</button>`))}
      <button class="add" @click=${()=>{let r=this._panels();r.push({id:`tableau_${r.length+1}`,rows:[]}),this._setPanels(r)}}>+ ${v(n,"add_panel")}</button>
      <div class="note">${v(n,"editor_note")}</div>`}};Ce.properties={hass:{attribute:!1},_config:{state:!0}},Ce.styles=jt;customElements.get("din-panel-card-editor")||customElements.define("din-panel-card-editor",Ce);var gn="din-panel-card:view";function vo(t){let e=`${t.title??""}|${(t.panels??[]).map(o=>o.id??o.label??"").join(",")}|${(t.groups??[]).length}`,n=0;for(let o of e)n=n*31+o.charCodeAt(0)|0;return(n>>>0).toString(36)}var Me=class extends V{constructor(){super(...arguments);this._viewKey=gn;this._qi=-1;this._panels=[];this._entities=[]}static getConfigElement(){return document.createElement("din-panel-card-editor")}static getStubConfig(){return{type:"custom:din-panel-card",panels:[{id:"tableau_1",label:"Tableau principal",rows:[{id:"row_1",label:"Rang\xE9e 1",phases:["L1"],modules:[{type:"differential",id:"ID1",amp:40,mA:30,poles:2,class:"AC"},{type:"breaker",id:"1-1",amp:16,label:"Prises",usage:"socket"},{type:"breaker",id:"1-2",amp:10,label:"Lumi\xE8res",usage:"light"}]}]}]}}setConfig(n){Bt(n),this._panels=Ft(n),this._entities=Kt(n,this._panels),this._config=n,this._selected=null;let o=n.collapsed;this._collapsed=new Set(o==="zones"||o==="rows"||o==="panels"?lt(this._panels,o):[]),this._cw=0;let s=null;if(this._viewKey=`${gn}:${vo(n)}`,n.view!=="tree"&&n.view!=="panel")try{s=localStorage.getItem(this._viewKey)}catch{}this._view=n.view==="tree"||n.view==="panel"?n.view:s==="tree"?"tree":"panel"}_toggle(n){let o=new Set(this._collapsed);o.has(n)?o.delete(n):o.add(n),this._collapsed=o}_collapseOne(){for(let n of["zones","rows","panels"]){let o=lt(this._panels,n);if(o.some(s=>!this._collapsed.has(s))){this._collapsed=new Set([...this._collapsed,...o]);return}}}_setView(n){if(this._view=n,this._config?.view!=="tree"&&this._config?.view!=="panel")try{localStorage.setItem(this._viewKey,n)}catch{}}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._ro=new ResizeObserver(n=>{let o=Math.round(n[0]?.contentRect.width??0);o>0&&o!==this._cw&&(this._cw=o)}),this._ro.observe(this))}disconnectedCallback(){this._ro?.disconnect(),this._ro=void 0,super.disconnectedCallback()}set hass(n){let o=this._hass;this._hass=n,(!o||o.language!==n.language||o.themes?.darkMode!==n.themes?.darkMode||this._entities.some(s=>o.states[s]!==n.states[s]))&&this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 2+this._panels.reduce((n,o)=>n+o.rows.length*3,0)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}get _lang(){return this._config?.language??(this._hass?.language?.startsWith("fr")?"fr":"en")}_summary(n){if(!this._hass)return f;let o=Oe(this._hass,this._config?.sensors,v(n,"total"));if(!o.length)return f;let s=Math.max(0,...this._panels.map(a=>a.capacity??0)),r=a=>a.value===null?v(n,"unavailable"):`${a.approx?"\u2248 ":""}${H(a.kind,a.value)}`;return h`<div class="panel incoming ${s?"fixed":""}" style=${s?`--n:${s}`:""}>
      ${this._config?.incoming_title??v(n,"incoming")?h`<div class="panel-title">${this._config?.incoming_title??v(n,"incoming")}</div>`:f}
      <div class="in-plate">${o.map(a=>{let d=a.key==="total",l=a.pct===null?"":a.pct>1?"err":a.pct>=.9?"high":a.pct>=.6?"warn":"";return h`<div class="in-row ${d?"total":""}" title=${a.entity??""}
            @click=${()=>a.entity&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:a.entity},bubbles:!0,composed:!0}))}>
          ${d?h`<b class="in-label">${a.label}</b>`:h`<span class="chip ph-${a.key.toLowerCase()} in-label">${a.label}</span>`}
          <div class="in-track">${!d&&a.pct!==null?h`<i class=${l} style=${`width:${Math.max(1.5,Math.min(1,a.pct)*100)}%`}></i>`:f}</div>
          <div class="in-vals">${a.items.map(c=>h`<span class="k-${c.kind} ${c.value===null?"bad":""}">${r(c)}</span>`)}</div>
        </div>`})}</div>
    </div>`}_searchKey(n){if(n.key==="Escape"){this._q="",this._qi=-1;return}if(n.key!=="Enter")return;n.preventDefault();let o=[...this.shadowRoot?.querySelectorAll(".mod.s-hit, .dia g.s-hit")??[]];o.length&&(this._qi=(this._qi+1)%o.length,o[this._qi].scrollIntoView?.({block:"center",inline:"center",behavior:"smooth"}))}render(){if(!this._config||!this._hass)return f;let n=this._lang,o={hass:this._hass,lang:n,select:u=>{this._selected=u},moreInfo:u=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:u},bubbles:!0,composed:!0}))},s=this._q??"",r=rn(s,n);r&&(o.search=r);let a=r?an(this._panels,r):0,d=!!this._hass.themes?.darkMode,l=Number(this._config.module_width),c=this._view==="tree",x=Number(this._config.max_width)>0?Number(this._config.max_width):700,g=hn(Math.min(this._cw||x,x));return h`<ha-card class=${d?"dark":""} style=${l>0?`--u:${l}px`:""}>
      <div class="toolbar">
        <h2>${this._config.title??""}</h2>
        ${this._config.search===!1?f:h`<div class="search">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input type="text" .value=${s} placeholder=${v(n,"search_ph")} aria-label=${v(n,"search")} enterkeyhint="search"
            @input=${u=>{this._q=u.target.value,this._qi=-1}}
            @keydown=${u=>this._searchKey(u)} />
          ${s?h`<span class="count" aria-live="polite">${a?`${a} ${v(n,"result")}${a>1?"s":""}`:v(n,"no_result")}</span>
            <button class="clr" title=${v(n,"clear")} aria-label=${v(n,"clear")} @click=${()=>{this._q="",this._qi=-1}}><ha-icon icon="mdi:close"></ha-icon></button>`:f}
        </div>`}
        ${c?h`
          <button class="tbtn" @click=${()=>{this._collapsed=new Set}}>
            <ha-icon icon="mdi:unfold-more-horizontal"></ha-icon><span>${v(n,"expand_all")}</span></button>
          <button class="tbtn" @click=${()=>this._collapseOne()}>
            <ha-icon icon="mdi:unfold-less-horizontal"></ha-icon><span>${v(n,"collapse_level")}</span></button>`:f}
        <button class="tbtn" aria-pressed=${c} title=${v(n,c?"view_panel":"view_tree")}
          @click=${()=>this._setView(c?"panel":"tree")}>
          <ha-icon icon=${c?"mdi:view-dashboard-outline":"mdi:file-tree"}></ha-icon>
          <span>${v(n,c?"view_panel":"view_tree")}</span></button>
      </div>
      ${c?f:this._summary(n)}
      ${c?fn(this._panels,o,{config:this._config,width:g,maxWidth:x,collapsed:this._collapsed,toggle:u=>this._toggle(u)}):this._panels.map(u=>on(u,o))}
      ${this._selected?h`<dialog @close=${()=>{this._selected=null}}
            @click=${u=>{u.target===u.currentTarget&&u.currentTarget.close()}}>
            ${ln(this._selected,o,()=>this.shadowRoot?.querySelector("dialog")?.close())}</dialog>`:f}
    </ha-card>`}updated(){let n=this.shadowRoot?.querySelector("dialog");n&&this._selected&&!n.open&&n.showModal()}};Me.properties={_config:{state:!0},_selected:{state:!0},_view:{state:!0},_collapsed:{state:!0},_cw:{state:!0},_q:{state:!0}},Me.styles=It;customElements.get("din-panel-card")||customElements.define("din-panel-card",Me);console.info("%c DIN-PANEL-CARD %c v1.22.0 ","color:#fff;background:#3182ce;font-weight:700","color:#3182ce;background:#fff");window.customCards=window.customCards||[];window.customCards.push({type:"din-panel-card",name:"DIN Panel Card",description:"Tableau \xE9lectrique modulaire graphique (rang\xE9es, rail DIN, modules) aliment\xE9 par les entit\xE9s Home Assistant.",preview:!1});
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
