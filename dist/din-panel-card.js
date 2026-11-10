var Ae=globalThis,Ce=Ae.ShadowRoot&&(Ae.ShadyCSS===void 0||Ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),pt=new WeakMap,ue=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ce&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=pt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&pt.set(t,e))}return e}toString(){return this.cssText}},ut=n=>new ue(typeof n=="string"?n:n+"",void 0,ze),Me=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((o,s,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new ue(t,n,ze)},ht=(n,e)=>{if(Ce)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),s=Ae.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,n.appendChild(o)}},Oe=Ce?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return ut(t)})(n):n;var{is:cn,defineProperty:pn,getOwnPropertyDescriptor:un,getOwnPropertyNames:hn,getOwnPropertySymbols:fn,getPrototypeOf:gn}=Object,Se=globalThis,ft=Se.trustedTypes,mn=ft?ft.emptyScript:"",bn=Se.reactiveElementPolyfillSupport,he=(n,e)=>n,He={toAttribute(n,e){switch(e){case Boolean:n=n?mn:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},mt=(n,e)=>!cn(n,e),gt={attribute:!0,type:String,converter:He,reflect:!1,useDefault:!1,hasChanged:mt};Symbol.metadata??=Symbol("metadata"),Se.litPropertyMetadata??=new WeakMap;var G=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=gt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&pn(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){let{get:s,set:r}=un(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){let d=s?.call(this);r?.call(this,a),this.requestUpdate(e,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??gt}static _$Ei(){if(this.hasOwnProperty(he("elementProperties")))return;let e=gn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(he("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he("properties"))){let t=this.properties,o=[...hn(t),...fn(t)];for(let s of o)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let s of o)t.unshift(Oe(s))}else e!==void 0&&t.push(Oe(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){let r=(o.converter?.toAttribute!==void 0?o.converter:He).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){let o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:He;this._$Em=s;let d=a.fromAttribute(t,r.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(e,t,o,s=!1,r){if(e!==void 0){let a=this.constructor;if(s===!1&&(r=this[e]),o??=a.getPropertyOptions(e),!((o.hasChanged??mt)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:s,wrapped:r},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[s,r]of o){let{wrapped:a}=r,d=this[s];a!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,r,d)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[he("elementProperties")]=new Map,G[he("finalized")]=new Map,bn?.({ReactiveElement:G}),(Se.reactiveElementVersions??=[]).push("2.1.2");var We=globalThis,bt=n=>n,Ee=We.trustedTypes,xt=Ee?Ee.createPolicy("lit-html",{createHTML:n=>n}):void 0,kt="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+Y,xn=`<${At}>`,ne=document,ge=()=>ne.createComment(""),me=n=>n===null||typeof n!="object"&&typeof n!="function",Be=Array.isArray,vn=n=>Be(n)||typeof n?.[Symbol.iterator]=="function",Ne=`[ 	
\f\r]`,fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,$t=/>/g,ee=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,yt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,Ke=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),h=Ke(1),C=Ke(2),lo=Ke(3),oe=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),wt=new WeakMap,te=ne.createTreeWalker(ne,129);function Mt(n,e){if(!Be(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(e):e}var $n=(n,e)=>{let t=n.length-1,o=[],s,r=e===2?"<svg>":e===3?"<math>":"",a=fe;for(let d=0;d<t;d++){let i=n[d],c,v,x=-1,f=0;for(;f<i.length&&(a.lastIndex=f,v=a.exec(i),v!==null);)f=a.lastIndex,a===fe?v[1]==="!--"?a=vt:v[1]!==void 0?a=$t:v[2]!==void 0?(Ct.test(v[2])&&(s=RegExp("</"+v[2],"g")),a=ee):v[3]!==void 0&&(a=ee):a===ee?v[0]===">"?(a=s??fe,x=-1):v[1]===void 0?x=-2:(x=a.lastIndex-v[2].length,c=v[1],a=v[3]===void 0?ee:v[3]==='"'?yt:_t):a===yt||a===_t?a=ee:a===vt||a===$t?a=fe:(a=ee,s=void 0);let g=a===ee&&n[d+1].startsWith("/>")?" ":"";r+=a===fe?i+xn:x>=0?(o.push(c),i.slice(0,x)+kt+i.slice(x)+Y+g):i+Y+(x===-2?d:g)}return[Mt(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},be=class n{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let r=0,a=0,d=e.length-1,i=this.parts,[c,v]=$n(e,t);if(this.el=n.createElement(c,o),te.currentNode=this.el.content,t===2||t===3){let x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(s=te.nextNode())!==null&&i.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let x of s.getAttributeNames())if(x.endsWith(kt)){let f=v[a++],g=s.getAttribute(x).split(Y),y=/([.?@])?(.*)/.exec(f);i.push({type:1,index:r,name:y[2],strings:g,ctor:y[1]==="."?Ie:y[1]==="?"?De:y[1]==="@"?Fe:le}),s.removeAttribute(x)}else x.startsWith(Y)&&(i.push({type:6,index:r}),s.removeAttribute(x));if(Ct.test(s.tagName)){let x=s.textContent.split(Y),f=x.length-1;if(f>0){s.textContent=Ee?Ee.emptyScript:"";for(let g=0;g<f;g++)s.append(x[g],ge()),te.nextNode(),i.push({type:2,index:++r});s.append(x[f],ge())}}}else if(s.nodeType===8)if(s.data===At)i.push({type:2,index:r});else{let x=-1;for(;(x=s.data.indexOf(Y,x+1))!==-1;)i.push({type:7,index:r}),x+=Y.length-1}r++}}static createElement(e,t){let o=ne.createElement("template");return o.innerHTML=e,o}};function ie(n,e,t=n,o){if(e===oe)return e;let s=o!==void 0?t._$Co?.[o]:t._$Cl,r=me(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,t,o)),o!==void 0?(t._$Co??=[])[o]=s:t._$Cl=s),s!==void 0&&(e=ie(n,s._$AS(n,e.values),s,o)),e}var Ue=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??ne).importNode(t,!0);te.currentNode=s;let r=te.nextNode(),a=0,d=0,i=o[0];for(;i!==void 0;){if(a===i.index){let c;i.type===2?c=new xe(r,r.nextSibling,this,e):i.type===1?c=new i.ctor(r,i.name,i.strings,this,e):i.type===6&&(c=new je(r,this,e)),this._$AV.push(c),i=o[++d]}a!==i?.index&&(r=te.nextNode(),a++)}return te.currentNode=ne,s}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},xe=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),me(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==oe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&me(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=be.createElement(Mt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{let r=new Ue(s,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=wt.get(e.strings);return t===void 0&&wt.set(e.strings,t=new be(e)),t}k(e){Be(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,s=0;for(let r of e)s===t.length?t.push(o=new n(this.O(ge()),this.O(ge()),this,this.options)):o=t[s],o._$AI(r),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let o=bt(e).nextSibling;bt(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},le=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=u}_$AI(e,t=this,o,s){let r=this.strings,a=!1;if(r===void 0)e=ie(this,e,t,0),a=!me(e)||e!==this._$AH&&e!==oe,a&&(this._$AH=e);else{let d=e,i,c;for(e=r[0],i=0;i<r.length-1;i++)c=ie(this,d[o+i],t,i),c===oe&&(c=this._$AH[i]),a||=!me(c)||c!==this._$AH[i],c===u?e=u:e!==u&&(e+=(c??"")+r[i+1]),this._$AH[i]=c}a&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ie=class extends le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},De=class extends le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},Fe=class extends le{constructor(e,t,o,s,r){super(e,t,o,s,r),this.type=5}_$AI(e,t=this){if((e=ie(this,e,t,0)??u)===oe)return;let o=this._$AH,s=e===u&&o!==u||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==u&&(o===u||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},je=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}};var _n=We.litHtmlPolyfillSupport;_n?.(be,xe),(We.litHtmlVersions??=[]).push("3.3.3");var St=(n,e,t)=>{let o=t?.renderBefore??e,s=o._$litPart$;if(s===void 0){let r=t?.renderBefore??null;o._$litPart$=s=new xe(e.insertBefore(ge(),r),r,void 0,t??{})}return s._$AI(n),s};var Ve=globalThis,K=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=St(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return oe}};K._$litElement$=!0,K.finalized=!0,Ve.litElementHydrateSupport?.({LitElement:K});var yn=Ve.litElementPolyfillSupport;yn?.({LitElement:K});(Ve.litElementVersions??=[]).push("4.2.2");var Et=Me`
  :host { display: block; }
  ha-card {
    --u: 46px; --h: calc(var(--u) * 2.8);
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
    margin: 0 1px;
    position: relative; height: var(--h); display: flex; flex-direction: column; border-radius: 3px; overflow: hidden;
    background: linear-gradient(180deg, #fdfdfd, #eceef0 55%, #d6d9dd);
    box-shadow: inset 1px 0 0 rgba(255,255,255,.7), inset -1px 0 0 rgba(0,0,0,.14), inset 0 -3px 4px rgba(0,0,0,.1), 0 3px 5px rgba(0,0,0,.4);
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
  .mod.st-on .face { box-shadow: inset 0 0 0 2px #2f9e44, 0 0 8px rgba(47,158,68,.55), 0 3px 5px rgba(0,0,0,.4); }
  .mod.st-off .face { box-shadow: inset 0 0 0 2px #e03131, 0 0 8px rgba(224,49,49,.5), 0 3px 5px rgba(0,0,0,.4); }
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
`,Lt=Me`
  :host { display: block; }
  .blk { margin: 8px 0; padding: 6px 10px; border: 1px solid var(--divider-color); border-radius: 8px; }
  .blk .blk { background: var(--secondary-background-color); }
  summary { cursor: pointer; display: flex; align-items: center; gap: 6px; padding: 4px 0; font-weight: 600; }
  summary span { flex: 1; }
  button { cursor: pointer; border: 1px solid var(--divider-color); border-radius: 6px; padding: 2px 8px; background: var(--card-background-color); color: var(--primary-text-color); }
  button.add { margin: 6px 0; } button.danger { color: var(--error-color); }
  .banner { padding: 10px; border-radius: 8px; background: var(--warning-color, #f59f00); color: #000; margin-bottom: 10px; }
  .note { font-size: 12px; color: var(--secondary-text-color); margin: 8px 0; }
`;var Pt={differential:{type:"differential"},rcd:{type:"differential"},diff:{type:"differential"},breaker:{type:"breaker"},breaker_1p:{type:"breaker",poles:1},breaker_2p:{type:"breaker",poles:2},breaker_3p:{type:"breaker",poles:3},breaker_4p:{type:"breaker",poles:4},three_phase:{type:"breaker",poles:3},tetrapolar:{type:"breaker",poles:4},contactor_daynight:{type:"contactor_daynight"},daynight:{type:"contactor_daynight"},contactor:{type:"contactor"},power_contactor:{type:"contactor"},impulse:{type:"impulse"},telerupteur:{type:"impulse"},tele:{type:"impulse"},relay:{type:"relay"},relais:{type:"relay"},psu:{type:"psu"},power_supply:{type:"psu"},alimentation:{type:"psu"},surge:{type:"surge"},surge_arrester:{type:"surge"},meter:{type:"meter"},free:{type:"free"},custom:{type:"custom"}},wn={differential:{poles:2},breaker:{poles:1},contactor_daynight:{poles:1,width:2},contactor:{poles:1,width:2},impulse:{poles:2,width:1},relay:{poles:2,width:1},psu:{poles:2,width:2},surge:{poles:2},meter:{poles:2,width:4},free:{poles:1,width:1},custom:{poles:1,width:1}},Rt=(n,e,t)=>Math.min(t,Math.max(e,n)),F=n=>n==null||n===""?void 0:String(n);function Le(n){let e={};for(let[t,o]of Object.entries(n))o!=null&&o!==""&&(e[t]=o);return e}function qe(n){return[{id:"tableau_1",label:"Tableau principal",rows:n.map(t=>{let o=(t.phases?.length??0)>=3,s=Le({id:t.id,type:"differential",label:t.label,poles:t.poles??(o?4:void 0),amp:t.amp,mA:t.mA,class:t.class,sensor:t.sensor,max_w:t.max_w,accent:t.accent}),r=(t.circuits??[]).map(a=>{let{type:d,...i}=a;return Le({...i,type:"breaker",usage:d,poles:a.poles??(o?3:void 0)})});return Le({id:String(t.id),label:t.label??String(t.id),phases:t.phases,accent:t.accent,modules:[s,...r]})})}]}function kn(n){let e={circuits:new Map,groups:new Map};for(let t of n??[]){e.groups.set(String(t.id),t);for(let o of t.circuits??[])e.circuits.has(String(o.id))||e.circuits.set(String(o.id),o)}return e}function An(n){return typeof n=="string"?{room:n}:Le({floor:F(n.floor),room:F(n.room),icon:n.icon,sensor:n.sensor})}function Cn(n,e,t,o){let s={...n};if(n.circuit!==void 0&&o.circuits.has(String(n.circuit))){let g=o.circuits.get(String(n.circuit)),{type:y,...S}=g;s={...S,type:"breaker",usage:y,...n}}if(n.group!==void 0&&o.groups.has(String(n.group))){let{circuits:g,...y}=o.groups.get(String(n.group));s={...y,type:"differential",...n}}let r=Pt[String(s.type??"breaker").toLowerCase()]??Pt.custom,a=r.type,d=(s.phases??e.phases).map(g=>String(g).toUpperCase()),i=wn[a],c=s.poles??r.poles??(a==="breaker"&&d.length>=3?3:void 0),v=Rt(Number(s.width??i.width??c??i.poles)||1,1,12),x=Rt(Number(c??(a==="breaker"&&v===1?2:i.poles))||1,1,4),f=["power","socket","light"].includes(String(s.usage))?s.usage:"other";return{id:F(s.id)??`${e.id}-${t+1}`,type:a,label:F(s.label),poles:x,width:v,amp:s.amp!==void 0?Number(s.amp):void 0,mA:s.mA!==void 0?Number(s.mA):void 0,cls:F(s.class),curve:F(s.curve),usage:f,icon:s.icon,accent:s.accent,phases:d,sensor:s.sensor,current_sensor:s.current_sensor,voltage_sensor:s.voltage_sensor,state_entity:s.state_entity,max_w:s.max_w!==void 0?Number(s.max_w):void 0,zones:(s.zones??[]).map(An),note:F(s.note),output:F(s.output)}}function Mn(n,e,t){let o=F(n.id)??`row_${e+1}`,s=(n.phases??[]).map(d=>String(d).toUpperCase()),r=(n.modules??[]).map((d,i)=>Cn(d,{phases:s,id:o},i,t)),a;for(let d of r)d.type==="differential"?(a=d,d.children=[]):a&&d.type!=="free"&&d.type!=="meter"&&a.children.push(d);return{id:o,label:F(n.label),phases:s,accent:n.accent,modules:r}}function Sn(n){let e=Math.floor(Number(n));return Number.isFinite(e)&&e>=1?Math.min(e,60):void 0}function Tt(n){let e=kn(n.groups),t=n.panels??(n.groups?qe(n.groups):[]),o=Number(n.nominal_voltage)>0?Number(n.nominal_voltage):void 0,s=t.map((r,a)=>({id:F(r.id)??`panel_${a+1}`,label:F(r.label),capacity:Sn(r.modules_per_row??n.modules_per_row),rows:(r.rows??[]).map((d,i)=>Mn(d,i,e))}));if(o)for(let r of s)for(let a of r.rows)for(let d of a.modules)d.volts=o;return s}function zt(n){if(!n||!n.panels&&!n.groups)throw new Error("Configuration invalide : d\xE9finir 'panels' (nouveau format) ou 'groups' (ancien format).");if(n.max_width!==void 0&&!(typeof n.max_width=="number"&&n.max_width>0))throw new Error("'max_width' doit \xEAtre un nombre positif de pixels (ex. 1100), sans unit\xE9.");let e=t=>t!==void 0&&!(Number.isInteger(t)&&t>=1);if(e(n.modules_per_row)||(n.panels??[]).some(t=>e(t.modules_per_row)))throw new Error("'modules_per_row' doit \xEAtre un entier \u2265 1 (nombre de modules DIN par rang\xE9e).");if(n.panels&&!Array.isArray(n.panels))throw new Error("'panels' doit \xEAtre une liste.");if(n.groups&&!Array.isArray(n.groups))throw new Error("'groups' doit \xEAtre une liste.")}function Ot(n,e){let t=new Set,o=s=>{s&&t.add(s)};o(n.sensors?.total?.entity),o(n.sensors?.total?.current_sensor),o(n.sensors?.total?.voltage_sensor);for(let s of Object.values(n.sensors?.phases??{}))o(s?.entity),o(s?.current_sensor),o(s?.voltage_sensor);for(let s of e)for(let r of s.rows)for(let a of r.modules){o(a.sensor),o(a.current_sensor),o(a.voltage_sensor),o(a.state_entity);for(let d of a.zones)o(d.sensor)}return[...t]}var Ge=n=>!n||n==="unavailable"||n==="unknown";function Ze(n,e,t="raw"){if(!e)return{status:"none",value:null};let o=n.states[e];if(!o||Ge(o.state))return{status:"unavailable",value:null};let s=parseFloat(o.state);return Number.isFinite(s)?(t==="current"&&o.attributes?.unit_of_measurement==="mA"&&(s/=1e3),{status:"ok",value:s}):{status:"unavailable",value:null}}var En={W:["power",1],kW:["power",1e3],MW:["power",1e6],mW:["power",.001],Wh:["energy",1],kWh:["energy",1e3],MWh:["energy",1e6],A:["current",1],mA:["current",.001],V:["voltage",1],mV:["voltage",.001],kV:["voltage",1e3]},Ln={power:["power",1],energy:["energy",1e3],current:["current",1],voltage:["voltage",1]};function Z(n,e,t="power"){if(!e)return{status:"none",value:null,kind:t};let o=n.states[e],s=o?.attributes??{},[r,a]=En[s.unit_of_measurement]??Ln[s.device_class]??[t,1];if(!o||Ge(o.state))return{status:"unavailable",value:null,kind:r};let d=parseFloat(o.state);return Number.isFinite(d)?{status:"ok",value:d*a,kind:r}:{status:"unavailable",value:null,kind:r}}function z(n,e){if(!e)return null;let t=n.states[e]?.state?.toLowerCase();if(!t||Ge(t))return null;if(["on","true","closed","active","enabled","home","heat","playing","1"].includes(t))return!0;if(["off","false","open","inactive","disabled","not_home","idle","standby","0"].includes(t))return!1;let o=parseFloat(t);return Number.isFinite(o)?o>0:null}var Ht=["power","energy","current","voltage"],It=(n,e)=>Ht.indexOf(n.kind)-Ht.indexOf(e.kind);function Nt(n,e,t=n.length){let o=[...new Set(n.map(a=>a.kind))],s=o.filter(a=>n.some(d=>d.kind===a&&d.value!==null));return(s.length?s:o.slice(0,1)).map(a=>{let d=n.filter(i=>i.kind===a&&i.value!==null);return{kind:a,source:e,value:d.length?d.reduce((i,c)=>i+c.value,0):null,partial:d.length<t||d.some(i=>i.partial)}}).sort(It)}var Pn=n=>{let e=n[0];return n.length?{configured:!0,value:e.value,kind:e.kind,source:e.source,partial:e.partial,counters:n}:{configured:!1,value:null,kind:"power",source:"none",partial:!1,counters:[]}},Ut=new WeakMap;function I(n,e){let t=Ut.get(e);if(t&&t.h===n)return t.p;let o=Rn(n,e);return Ut.set(e,{h:n,p:o}),o}function Rn(n,e){let t=[],o=(d,i)=>{if(!d)return;let c=Z(n,d,i);t.some(v=>v.kind===c.kind)||t.push({kind:c.kind,value:c.value,partial:!1,source:"sensor"})};o(e.sensor,"power"),o(e.current_sensor,"current");let s=[],r=e.zones.filter(d=>d.sensor);if(r.length)s=Nt(r.map(d=>Z(n,d.sensor)),"zones",e.zones.length);else if(e.children?.length){let d=e.children.map(i=>I(n,i));if(d.some(i=>i.configured)){let i=d.flatMap(c=>c.counters.map(v=>({...v,partial:v.partial})));s=Nt(i,"children",d.length),d.some(c=>!c.configured)&&(s=s.map(c=>({...c,partial:!0})))}}let a=[...t,...s.filter(d=>!t.some(i=>i.kind===d.kind))].sort(It);return Pn(a)}function de(n,e="power"){if(!(e==="energy"||e==="voltage")){if(e==="current")return n.amp;if(n.max_w)return n.max_w;if(n.amp)return n.amp*(n.volts??230)*(n.poles>=3?3:1)}}function Dt(n,e,t){let o=t.counters.find(a=>a.kind==="current");if(o)return o.value;let s=t.counters.find(a=>a.kind==="power"),r=Ze(n,e.voltage_sensor);return r.value&&s&&s.value!==null?s.value/r.value:null}function Ye(n){let e=Math.abs(n);return e>=1e4?`${(n/1e3).toFixed(1)} kW`:e>=1e3?`${(n/1e3).toFixed(2)} kW`:`${Math.round(n)} W`}function Tn(n,e=!1){let t=n/1e3,o=Math.abs(t);return`${t.toFixed(e?o>=1e3?0:1:o>=1e3?0:o>=100?1:2)} kWh`}function zn(n){let e=Math.abs(n);return`${n.toFixed(e>=100?0:e>=10?1:2)} A`}var On=n=>`${n.toFixed(n>=100?0:1)} V`,O=(n,e,t=!1)=>n==="energy"?Tn(e,t):n==="current"?zn(e):n==="voltage"?On(e):Ye(e);function ve(n,e){let t=[];if(!e)return t;let o;if(e.entity){let r=Z(n,e.entity);(r.kind==="power"||r.kind==="energy")&&(t.push({kind:r.kind,value:r.value,entity:e.entity}),o=r)}let s;if(e.current_sensor&&(s=Z(n,e.current_sensor,"current"),t.push({kind:"current",value:s.value,entity:e.current_sensor})),e.voltage_sensor){let r=Z(n,e.voltage_sensor,"voltage");t.push({kind:"voltage",value:r.value,entity:e.voltage_sensor})}else o?.kind==="power"&&o.value!==null&&s?.value&&s.value>.05&&o.value>0&&t.push({kind:"voltage",value:o.value/s.value,entity:e.current_sensor,approx:!0});return t.sort((r,a)=>["power","energy","current","voltage"].indexOf(r.kind)-["power","energy","current","voltage"].indexOf(a.kind))}function Pe(n,e,t){if(!e)return[];let o=Object.entries(e.phases??{}).filter(([,i])=>i&&(i.entity||i.current_sensor||i.voltage_sensor)),s=i=>ve(n,i).find(c=>c.kind==="power")?.value??null,r=Math.max(0,...o.map(([,i])=>s(i)??0)),a=(i,c,v,x)=>{let f=ve(n,v);if(!f.length)return;let g=f.find(S=>S.kind==="power"),y=g&&g.value!==null&&x?Math.max(0,g.value)/x:null;return{key:i,label:c,items:f,pct:y,limit:x,entity:v?.entity??v?.current_sensor??v?.voltage_sensor}},d=i=>i?.max_w??(e.total?.max_w&&o.length?e.total.max_w/o.length:r||void 0);return[a("total",t,e.total,e.total?.max_w),...o.map(([i,c])=>a(i.toUpperCase(),i.toUpperCase(),c,d(c)))].filter(i=>!!i)}var Ft={fr:{total:"Total",incoming:"Arriv\xE9e",nominal_voltage:"Tension nominale (V, d\xE9faut 230)",incoming_title:"Titre du cadre d\u2019arriv\xE9e (vue tableau)",phase:"Phase",power:"Puissance",current:"Intensit\xE9",voltage:"Tension",load:"Charge",zones:"Zones",protects:"Circuits prot\xE9g\xE9s",unavailable:"Indisponible",close:"Fermer",type:"Type",id:"Identifiant",rating:"Calibre",poles:"P\xF4les",sensitivity:"Sensibilit\xE9",cls:"Classe",curve:"Courbe",phases:"Phases",usage:"Usage",sum_zones:"Somme des capteurs de zones",sum_children:"Somme des circuits (partielle si certains sans mesure)",own_sensor:"Capteur du module",no_data:"Aucune mesure",max:"Max",state:"\xC9tat",t_differential:"Interrupteur diff\xE9rentiel",t_breaker:"Disjoncteur",t_contactor_daynight:"Contacteur jour/nuit",t_contactor:"Contacteur de puissance",t_impulse:"T\xE9l\xE9rupteur",t_relay:"Relais",t_psu:"Alimentation",output:"Sortie",modules_per_row:"Modules DIN par rang\xE9e",t_surge:"Parafoudre",t_meter:"Compteur \xE9lectrique",t_free:"Module libre",t_custom:"Module personnalis\xE9",u_power:"Puissance",u_socket:"Prises",u_light:"\xC9clairage",u_other:"Autre",panel:"Tableau",row:"Rang\xE9e",module:"Module",add_row:"Ajouter une rang\xE9e",add_module:"Ajouter un module",add_panel:"Ajouter un tableau",add_zone:"Ajouter une zone",remove:"Supprimer",legacy:"Ancien format (groups) d\xE9tect\xE9.",convert:"Convertir en panels / rows / modules",general:"G\xE9n\xE9ral",global_sensors:"Capteurs globaux",title:"Titre",language:"Langue",module_width:"Largeur d\u2019un module (px)",total_entity:"Capteur total (W ou kWh)",head_sensor:"Capteur (W ou kWh)",total_max:"Puissance max totale (W)",label:"Libell\xE9",amp:"Calibre (A)",width:"Largeur (modules DIN)",icon:"Ic\xF4ne",sensor:"Capteur (W, kWh ou A)",current_sensor:"Capteur d\u2019intensit\xE9",voltage_sensor:"Capteur de tension",state_entity:"\xC9tat (capteur, switch\u2026 on/off)",floor:"\xC9tage",room:"Pi\xE8ce",mA:"Sensibilit\xE9 (mA)",max_w:"Puissance max (W)",accent:"Couleur d\u2019accent",editor_note:"Les options avanc\xE9es restent \xE9ditables en YAML.",free:"Libre",view_tree:"Sch\xE9ma",collapse_level:"Replier un niveau",collapsed:"Repli initial",max_width:"Largeur max du sch\xE9ma (px)",view_panel:"Tableau",expand_all:"Tout d\xE9plier",collapse_all:"Tout replier",view:"Vue initiale",expand:"D\xE9plier / replier"},en:{total:"Total",incoming:"Incoming",nominal_voltage:"Nominal voltage (V, default 230)",incoming_title:"Incoming frame title (panel view)",phase:"Phase",power:"Power",current:"Current",voltage:"Voltage",load:"Load",zones:"Zones",protects:"Protected circuits",unavailable:"Unavailable",close:"Close",type:"Type",id:"Identifier",rating:"Rating",poles:"Poles",sensitivity:"Sensitivity",cls:"Class",curve:"Curve",phases:"Phases",usage:"Usage",sum_zones:"Sum of zone sensors",sum_children:"Sum of circuits (partial if some have no measurement)",own_sensor:"Module sensor",no_data:"No measurement",max:"Max",state:"State",t_differential:"RCD (differential switch)",t_breaker:"Circuit breaker",t_contactor_daynight:"Day/night contactor",t_contactor:"Power contactor",t_impulse:"Impulse relay (t\xE9l\xE9rupteur)",t_relay:"Relay",t_psu:"Power supply",output:"Output",modules_per_row:"DIN modules per row",t_surge:"Surge arrester",t_meter:"Energy meter",t_free:"Free module",t_custom:"Custom module",u_power:"Power",u_socket:"Sockets",u_light:"Lighting",u_other:"Other",panel:"Panel",row:"Row",module:"Module",add_row:"Add row",add_module:"Add module",add_panel:"Add panel",add_zone:"Add zone",remove:"Remove",legacy:"Legacy format (groups) detected.",convert:"Convert to panels / rows / modules",general:"General",global_sensors:"Global sensors",title:"Title",language:"Language",module_width:"Module width (px)",total_entity:"Total sensor (W or kWh)",head_sensor:"Sensor (W or kWh)",total_max:"Max total power (W)",label:"Label",amp:"Rating (A)",width:"Width (DIN modules)",icon:"Icon",sensor:"Sensor (W, kWh or A)",current_sensor:"Current sensor",voltage_sensor:"Voltage sensor",state_entity:"State (sensor, switch\u2026 on/off)",floor:"Floor",room:"Room",mA:"Sensitivity (mA)",max_w:"Max power (W)",accent:"Accent colour",editor_note:"Advanced options remain editable in YAML.",free:"Free",view_tree:"Diagram",collapse_level:"Collapse one level",collapsed:"Initial collapse",max_width:"Max diagram width (px)",view_panel:"Panel",expand_all:"Expand all",collapse_all:"Collapse all",view:"Initial view",expand:"Expand / collapse"}},$=(n,e)=>Ft[n][e]??Ft.fr[e]??e;var B={power:"mdi:flash",socket:"mdi:power-socket-eu",light:"mdi:lightbulb",other:"mdi:electric-switch",differential:"mdi:current-ac",surge:"mdi:flash-alert",meter:"mdi:counter",contactor:"mdi:electric-switch-closed",contactor_daynight:"mdi:theme-light-dark",impulse:"mdi:toggle-switch",relay:"mdi:relay",psu:"mdi:power-plug-outline"};var se=n=>n.amp!==void 0?h`<div class="print amp">${n.curve??""}${n.amp}${n.curve?"":"A"}</div>`:u,Je=n=>n===null?u:h`<div class="stt ${n?"on":"off"}">${n?"ON":"OFF"}</div>`;function Hn(n,e){let t=Math.max(1,Math.min(n.poles,n.width));return h`<div class="levers ${e?"on":"off"}">
    ${Array.from({length:t},()=>h`<div class="cell"><div class="slot"><div class="lever ${e?"on":"off"}"></div></div></div>`)}
    ${t>1?h`<i class="bar"></i>`:u}
  </div>`}var Nn=({mod:n,ctx:e})=>{let t=z(e.hass,n.state_entity);return h`${se(n)}${Hn(n,t!==!1)}`},Un=({mod:n,ctx:e})=>{let o=z(e.hass,n.state_entity)!==!1;return h`
    <div class="band">${n.cls??"DIFF"}</div>
    ${n.amp!==void 0?h`<div class="print amp">${n.amp}A</div>`:u}
    ${n.mA!==void 0?h`<div class="mA">${n.mA} mA</div>`:u}
    <div class="levers single ${o?"on":"off"}"><div class="slot wide"><div class="lever ${o?"on":"off"}"></div></div></div>
    <div class="dtools"><span class="test">T</span><span class="win ${o?"ok":"trip"}"></span></div>`},In=({mod:n,ctx:e})=>{let t=z(e.hass,n.state_entity),o=t===!0?"on":t===!1?"off":"auto";return h`${se(n)}
    <div class="band dn ${o}">${t===!0?"ON":t===!1?"OFF":"J / N"}</div>
    <div class="sel s-${o}"><span>I</span><span>A</span><span>O</span><i class="knob ${o}"></i></div>
    <div class="print sm">J/N</div>`},Dn=({mod:n,ctx:e})=>{let t=z(e.hass,n.state_entity);return h`<div class="coil"><span>A1</span><span>A2</span></div>
    ${se(n)}<div class="print">KM</div>
    <div class="ind ${t===!0?"on":""}"></div>${Je(t)}`},Fn=({mod:n,ctx:e})=>{let t=z(e.hass,n.state_entity);return h`<div class="band">REL</div>
    <div class="coil dark"><span>A1</span><span>A2</span></div>
    ${se(n)}
    <div class="led-lens ${t===!0?"on":t===!1?"off":""}"></div>
    <div class="flag ${t===!0?"on":"off"}"></div>
    ${Je(t)}`},jn=({mod:n,ctx:e})=>{let t=z(e.hass,n.state_entity);return h`<div class="band">TL</div>
    ${se(n)}
    <div class="win ${t===!1?"trip":t===!0?"ok":"idle"} big"></div>
    <div class="push"></div>
    ${Je(t)}`},Wn=({mod:n,ctx:e})=>{let t=z(e.hass,n.state_entity);return h`<div class="band">AC / DC</div>
    ${n.output?h`<div class="out">${n.output}</div>`:u}
    ${se(n)}
    <div class="pot"><i></i></div>
    <div class="dcok"><span class="ind ${t===!1?"bad":"on"}"></span><small>DC OK</small></div>`},Bn=({mod:n,ctx:e})=>{let t=z(e.hass,n.state_entity);return h`<div class="print">SPD</div>
    <div class="spd ${t===!1?"bad":"ok"}"></div>
    ${n.note?h`<div class="print sm">${n.note}</div>`:u}`},Kn=({mod:n,power:e})=>h`
  <div class="print">${n.label??""}</div>
  <div class="lcd">${e.value!==null?O(e.kind,e.value):"- - -"}</div>
  <div class="btns"><i></i><i></i></div>`,Vn=()=>h`<div class="blank"></div>`,qn=({mod:n})=>h`
  ${n.icon?h`<ha-icon icon=${n.icon}></ha-icon>`:u}${se(n)}`,Xe={differential:Un,breaker:Nn,contactor_daynight:In,contactor:Dn,relay:Fn,impulse:jn,psu:Wn,surge:Bn,meter:Kn,free:Vn,custom:qn};function Re(n,e){return n.label??(n.type==="free"?$(e.lang,"free"):n.id)}function jt(n,e){return h`<div class="term ${e}">${Array.from({length:n},()=>h`<i></i>`)}</div>`}var Gn="mdi:map-marker-outline";function Zn(n,e,t){let o=[n.amp!==void 0?`${n.amp} A`:"",n.id!==e?n.id:""].filter(Boolean).join(" \xB7 "),s=n.zones.map(r=>({icon:r.icon??t??Gn,text:[r.floor,r.room].filter(Boolean).join(" \xB7 ")})).filter(r=>r.text);return h`<div class="tip" role="tooltip">
    <div class="tip-h">${t?h`<ha-icon icon=${t}></ha-icon>`:u}<b>${e}</b>${o?h`<span class="tip-d">${o}</span>`:u}</div>
    ${s.map(r=>h`<div class="tip-z"><ha-icon icon=${r.icon}></ha-icon><span>${r.text}</span></div>`)}
  </div>`}function Wt(n){let e=n.currentTarget,t=e.querySelector(".tip");if(!t)return;let o=e.getBoundingClientRect();t.style.left=`${Math.max(4,Math.min(o.left,window.innerWidth-270))}px`,o.top>140?(t.style.bottom=`${window.innerHeight-o.top+6}px`,t.style.top="auto"):(t.style.top=`${o.bottom+6}px`,t.style.bottom="auto")}var Yn=new Set(["relay","impulse","contactor","contactor_daynight"]);function Bt(n,e){let t=I(e.hass,n),o=de(n,t.kind),s=t.value!==null&&o?Math.max(0,t.value)/o:null,r=s===null?"":s>1?"err":s>=.9?"high":s>=.6?"warn":"ok",a=Xe[n.type]??Xe.custom,d=Math.max(1,Math.min(n.poles,Math.max(n.width,2))),i=Re(n,e),c=n.type!=="free"||!!n.label,v=n.icon??(n.type==="breaker"?B[n.usage]:B[n.type]),x=n.type==="differential",f=t.counters.filter(R=>!(x&&R.value===null)),g=t.configured&&n.type!=="meter"&&f.length?h`<div class="readouts">${f.map(R=>h`<div class="readout k-${R.kind} ${R.value===null?"bad":""}" title=${$(e.lang,R.source==="children"?"sum_children":R.source==="zones"?"sum_zones":"own_sensor")}>
        ${R.value===null?"n/d":O(R.kind,R.value,!0)}</div>`)}</div>`:u,y=Yn.has(n.type)?z(e.hass,n.state_entity):null,S=y===null?"":y?"st-on":"st-off",A=`--w:${n.width};${n.accent?`--acc:${n.accent};--cap:${n.accent};`:""}`,P=R=>{R instanceof KeyboardEvent&&R.key!=="Enter"&&R.key!==" "||(R.preventDefault(),e.select(n))};return h`<div class="mod t-${n.type} u-${n.usage} p-${n.poles} ${S}" style=${A} role="button" tabindex="0"
      aria-label=${`${i} ${n.id}`} @click=${P} @keydown=${P} @mouseenter=${Wt} @focus=${Wt}>
    ${Zn(n,i,v)}
    <div class="face">
      ${n.type!=="free"?jt(d,"top"):u}
      ${r?h`<i class="led ${r}"></i>`:u}
      <div class="body">${a({mod:n,ctx:e,power:t})}${g}${n.type==="differential"?u:h`<div class="pid">${n.id}</div>`}</div>
      ${n.type!=="free"?jt(d,"bot"):u}
    </div>
    ${c?h`<div class="plate ${n.width>=2?"h":""}"><i class="cap"></i>
          ${v?h`<ha-icon icon=${v}></ha-icon>`:u}
          <div class="txt">${i}</div></div>`:u}
  </div>`}function Kt(n,e){if(!e||e<=0)return[n];let t=[[]],o=0;for(let s of n)o+s.width>e&&t[t.length-1].length&&(t.push([]),o=0),t[t.length-1].push(s),o+=s.width;return t}function Vt(n,e,t){let o=n.modules.find(r=>r.type==="differential"),s=o?I(e.hass,o):void 0;return h`<section class="row" style=${n.accent?`--acc:${n.accent}`:""}>
    ${n.label||n.phases.length||s?.configured?h`<header class="row-head">
          ${n.label?h`<b>${n.label}</b>`:u}
          ${n.phases.map(r=>h`<span class="chip ph-${r.toLowerCase()}">${r}</span>`)}
          ${s?.configured&&s.counters.some(r=>r.value!==null)?h`<span class="grow"></span>${s.counters.filter(r=>r.value!==null).map(r=>h`<span class="dim sum">${r.partial?"\u2265 ":""}${O(r.kind,r.value)}</span>`)}`:u}
        </header>`:u}
    <div class="scroller"><div class="lines">
      ${Kt(n.modules,t).map(r=>h`<div class="rail-wrap ${t?"fixed":""}" style=${t?`--n:${t}`:""}><div class="rail"></div>
        ${r.map(a=>Bt(a,e))}${t?u:h`<span class="pad"></span>`}
      </div>`)}
    </div></div>
  </section>`}function qt(n,e){return h`<div class="panel ${n.capacity?"fixed":""}">
    ${n.label?h`<div class="panel-title">${n.label}</div>`:u}
    ${n.rows.map(t=>Vt(t,e,n.capacity))}
  </div>`}var j=(n,e)=>e===void 0||e===""?u:h`<div class="kv"><span>${n}</span><b>${e}</b></div>`;function Gt(n,e,t){let o=e.lang,s=I(e.hass,n),r=de(n,s.kind),a=s.value!==null&&r?Math.min(100,Math.max(0,s.value)/r*100):null,d=Dt(e.hass,n,s),i=Ze(e.hass,n.voltage_sensor),c=z(e.hass,n.state_entity),v=n.icon??(n.type==="breaker"?B[n.usage]:B[n.type]),x=f=>f?()=>e.moreInfo(f):void 0;return h`<div class="dlg">
    <header><ha-icon icon=${v??"mdi:electric-switch"}></ha-icon>
      <div><h3>${Re(n,e)}</h3><div class="dim">${$(o,`t_${n.type}`)} · ${n.id}</div></div>
      <button class="x" @click=${t} aria-label=${$(o,"close")}>✕</button></header>
    <div class="kvs">
      ${j($(o,"rating"),n.amp!==void 0?`${n.curve??""}${n.amp} A`:void 0)}
      ${j($(o,"poles"),n.poles)}
      ${j($(o,"sensitivity"),n.mA!==void 0?`${n.mA} mA`:void 0)}
      ${j($(o,"cls"),n.cls)}
      ${j($(o,"output"),n.output)}
      ${n.type!=="differential"?u:j($(o,"max"),n.max_w?Ye(n.max_w):void 0)}
      ${j($(o,"phases"),n.phases.length?n.phases.join(" \xB7 "):void 0)}
      ${n.type==="breaker"&&n.usage!=="other"?j($(o,"usage"),$(o,`u_${n.usage}`)):u}
      ${c===null?u:j($(o,"state"),c?"ON":"OFF")}
      ${j("",n.note)}
    </div>
    ${s.configured||d!==null||i.value!==null?h`<div class="values">
          ${s.counters.map(f=>h`<div class="big ${f.value===null?"bad":""}" @click=${x(f.kind==="current"&&n.current_sensor&&n.sensor!==n.current_sensor?n.current_sensor:n.sensor)}>
                ${f.value===null?$(o,"unavailable"):`${f.partial?"\u2265 ":""}${O(f.kind,f.value)}`}
                <small>${$(o,f.source==="zones"?"sum_zones":f.source==="children"?"sum_children":"own_sensor")}</small></div>`)}
          ${d!==null&&!s.counters.some(f=>f.kind==="current")?j($(o,"current"),`${d.toFixed(1)} A`):u}
          ${i.value!==null?j($(o,"voltage"),`${i.value.toFixed(0)} V`):u}
          ${a!==null?h`<div class="bar"><i style=${`width:${a}%`} class=${a>=90?"high":a>=60?"warn":"ok"}></i></div>
            <div class="dim">${$(o,"load")} ${a.toFixed(0)} % / ${O(s.kind,r)}</div>`:u}
        </div>`:u}
    ${n.zones.length?h`<h4>${$(o,"zones")}</h4><ul class="zones">
          ${n.zones.map(f=>{let g=Z(e.hass,f.sensor);return h`<li class=${f.sensor?"click":""} @click=${x(f.sensor)}>
              <ha-icon icon=${f.icon??"mdi:map-marker-outline"}></ha-icon>
              <span>${[f.floor,f.room].filter(Boolean).join(" \xB7 ")}</span>
              ${f.sensor?h`<b class=${g.value===null?"bad":""}>${g.value===null?"n/d":O(g.kind,g.value)}</b>`:u}
            </li>`})}</ul>`:u}
    ${n.children?.length?h`<h4>${$(o,"protects")}</h4><ul class="zones">
          ${n.children.map(f=>{let g=I(e.hass,f);return h`<li class="click" @click=${()=>e.select(f)}>
              <span class="id">${f.id}</span><span>${Re(f,e)}</span>
              ${f.amp!==void 0?h`<small>${f.amp} A</small>`:u}
              ${g.counters.map(y=>h`<b class=${y.value===null?"bad":""}>${y.value===null?"n/d":O(y.kind,y.value)}</b>`)}
            </li>`})}</ul>`:u}
  </div>`}var Qe=440,T=22,ce=14,Jn=54,$e=34,Jt=8,_e=24,Xn="#2f9e44",Qn="#e03131",Zt=["L1","L2","L3"],J=n=>`var(--din-panel-phase-${n.toLowerCase()}-color, ${{L1:"#8b4513",L2:"#1a202c",L3:"#5a6474"}[n]??"#718096"})`,X=(n,e=Jt)=>n.length*e*.56;function Yt(n,e,t=Jt){if(X(n,t)<=e)return n;let o=Math.floor(e/(t*.56))-1;return o<2?"":`${n.slice(0,o)}\u2026`}function Xt(n){return n<=700?Qe:Math.max(Qe,Math.round(n*Qe/700))}function eo(n,e){let t=e.floors?.[n];if(t?.bg)return{bg:t.bg,fg:t.fg??"#fff"};let o=0;for(let s of n)o=(o*31+s.charCodeAt(0))%360;return{bg:`hsl(${o} 45% 38%)`,fg:"#fff"}}function et(n,e){let t=[];for(let o of n){if(e==="panels"){t.push(`p:${o.id}`);continue}for(let s of o.rows)for(let r of s.modules)e==="rows"&&r.type==="differential"&&r.children?.length&&t.push(`r:${o.id}/${s.id}/${r.id}`),e==="zones"&&r.type!=="differential"&&r.zones.length&&t.push(`z:${o.id}/${s.id}/${r.id}`)}return t}function Qt(n,e,t){let o=t.width,s=t.config,r=1;for(let l of n)for(let p of l.rows)for(let b of p.modules)r=Math.max(r,I(e.hass,b).counters.length);for(let l of[s.sensors?.total,...Object.values(s.sensors?.phases??{})])r=Math.max(r,ve(e.hass,l).length);let a=o-Math.max(90,r*Jn+6),d=[],i=new Set;for(let l of n)for(let p of l.rows)p.phases.forEach(b=>i.add(b)),p.modules.forEach(b=>b.phases.forEach(m=>i.add(m)));Object.keys(s.sensors?.phases??{}).forEach(l=>i.add(l.toUpperCase()));let c=[...Zt.filter(l=>i.has(l)),...[...i].filter(l=>!Zt.includes(l))],v=14,x=9,f=l=>v+c.indexOf(l)*x,g=v+Math.max(1,c.length)*x+8,y=new Map,S=new Map,A=8,P=l=>Math.max(20,X(l,7)+10),R=(l,p,b,m)=>C`
    <rect class="box" x=${l} y=${p-ce/2} width=${P(b)} height=${ce} rx="3" style=${m?`fill:${m};stroke:${m}`:""}></rect>
    <text class="boxt" x=${l+P(b)/2} y=${p+2.6} text-anchor="middle" style=${m?"fill:#fff":""}>${b}</text>`,V=(l,p,b,m,E="wire",k="")=>C`<line class=${E} x1=${l} y1=${p} x2=${b} y2=${m} style=${k}></line>`,tn=(l,p,b="")=>({value:l.value,partial:l.partial,kind:l.kind,limit:p,tip:b});function ke(l,p){let b=a;return p.map(m=>{let E=m.value===null?"n/d":`${m.partial?"\u2265 ":m.approx?"\u2248 ":""}${O(m.kind,m.value)}`,k=Math.max(36,X(E,7.5)+10),_=b;b+=k+3;let w=m.value!==null&&m.limit?Math.max(0,m.value)/m.limit:null,M=w===null?"":w>1?"err":w>=.9?"high":w>=.6?"warn":"ok";return C`<g class="bubble k-${m.kind} ${m.value===null?"bad":""}">
        <title>${m.tip??""}</title>
        <rect class="bub" x=${_} y=${l-7} width=${k} height="14" rx="7"></rect>
        <text class="val" x=${_+k/2} y=${l+(w===null?2.6:.8)} text-anchor="middle">${E}</text>
        ${w!==null?C`<rect class="gbg" x=${_+7} y=${l+3.2} width=${k-14} height="1.8" rx=".9"></rect>
          <rect class="gfg ${M}" x=${_+7} y=${l+3.2} width=${(k-14)*Math.min(1,w)} height="1.8" rx=".9"></rect>`:u}
      </g>`})}let nt=(l,p,b)=>C`<path class="chev" d=${b?`M${l-3},${p-1.5} L${l},${p+2} L${l+3},${p-1.5}`:`M${l-1.5},${p-3} L${l+2},${p} L${l-1.5},${p+3}`}></path>`,ot=(l,p,b)=>C`<rect class="hit chevhit" x=${l-6} y=${p-8} width="12" height="16" tabindex="0" role="button" aria-label=${b} @click=${m=>{m.stopPropagation(),t.toggle(b)}} @keydown=${m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.stopPropagation(),t.toggle(b))}}></rect>`,Te=(l,p,b=!0,m=a-2)=>b&&p+6<m?V(p+3,l,m,l,"conn"):u,re=l=>l?.entity??l?.current_sensor??l?.voltage_sensor,st=l=>p=>{l&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),l())},pe=(l,p,b="",m=!!p)=>m&&p?C`<rect class="hit" x="0" y=${l} width=${o} height=${T} tabindex="0" role="button" aria-label=${b} @click=${p} @keydown=${st(p)}><title>${b}</title></rect>`:C`<rect class="hit" x="0" y=${l} width=${o} height=${T}><title>${b}</title></rect>`,rt=l=>ve(e.hass,l).map(p=>({value:p.value,kind:p.kind,partial:!1,approx:p.approx,limit:p.kind==="power"?l?.max_w:void 0,tip:p.approx?"U \u2248 P / I":p.entity})),nn=new Map(Pe(e.hass,s.sensors,"Total").map(l=>[l.key,l])),at=(l,p,b,m)=>{let E=a-8;if(b===null||E-p<24)return Te(l,p-3,m);let k=E-p,_=b>1?"err":b>=.9?"high":b>=.6?"warn":"";return C`<rect class="hg-bg" x=${p} y=${l-2.5} width=${k} height="5" rx="2.5"></rect>
      <rect class="hg-fg ${_}" x=${p} y=${l-2.5} width=${Math.max(2.5,k*Math.min(1,b))} height="5" rx="2.5"></rect>`},Q=s.sensors?.total;if(Q?.entity||Q?.current_sensor||Q?.voltage_sensor){let l=A+T/2,p=rt(Q);d.push(C`<g style="--acc:var(--primary-color)">${R(g,l,"Total")}
      <text x=${g+P("Total")+6} y=${l+2.8} class="dim">Total</text>
      ${at(l,g+P("Total")+10+X("Total"),null,p.length>0)}
      ${ke(l,p)}
      ${pe(A,()=>e.moreInfo(re(Q)),re(Q),!!re(Q))}</g>`),A+=T}for(let l of c){let p=A+T/2;y.set(l,p),S.set(l,p);let b=Object.entries(s.sensors?.phases??{}).find(([k])=>k.toUpperCase()===l)?.[1],m=rt(b),E=nn.get(l);d.push(C`<g>
      ${V(f(l),p,g,p,"tap",`stroke:${J(l)}`)}
      <circle cx=${f(l)} cy=${p} r="2.6" style=${`fill:${J(l)}`}></circle>
      ${R(g,p,l,J(l))}
      ${m.length?C`${at(p,g+P(l)+8,E?.pct??null,!0)}${ke(p,m)}
        ${pe(A,()=>e.moreInfo(re(b)),re(b),!!re(b))}`:u}</g>`),A+=T}function it(l,p,b,m,E,k,_=!1,w=b.id){let M=z(e.hass,b.state_entity),H=P(w),N=E?b.icon??(b.type==="breaker"?B[b.usage]:B[b.type]):void 0,U=k?10:0,L=p+H+(N?18:6)+U,D=Yt(m??"",a-8-L-(M===null?0:_e+4));return C`${R(p,l,w,M===null?void 0:M?Xn:Qn)}
      ${k?nt(p+H+5,l,k==="open"):u}
      ${N?C`<foreignObject width="24" height="24" transform=${`translate(${p+H+4+U} ${l-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${N} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:u}
      ${D?C`<text x=${L} y=${l+2.8}>${D}</text>`:u}
      ${Te(l,D?L+X(D):L-2,_||M!==null,_?a-2:a-_e-6)}
      ${M===null?u:C`<g class="spill ${M?"on":"off"}"><rect x=${a-_e-4} y=${l-6} width=${_e} height="12" rx="6"></rect>
        <text class="spillt" x=${a-_e/2-4} y=${l+2.4} text-anchor="middle">${M?"ON":"OFF"}</text></g>`}`}let on=(l,p)=>(p.kind==="current"&&l.current_sensor?l.current_sensor:l.sensor)??"";function lt(l){let p=I(e.hass,l);return ke(A+T/2,p.counters.map(b=>tn(b,de(l,b.kind),on(l,b))))}function sn(l,p){let b=p+8,m=0,E=A+T/2,k=l.icon??(l.type==="breaker"?B[l.usage]:B[l.type]);for(let _ of l.zones){let w=_.icon??k,M=A+T/2,H=_.sensor?Z(e.hass,_.sensor):void 0,N=_.floor?eo(_.floor,s):void 0,U=_.floor?X(_.floor,6.5)+10:0,L=p+$e+(_.floor?U+4:0),D=L+(w?16:0),ae=Yt(_.room??"",a-8-D);d.push(C`<g>
        ${V(b,M,p+$e,M)}
        ${N?C`<rect x=${p+$e} y=${M-6} width=${U} height="12" rx="6" style=${`fill:${N.bg}`}></rect>
          <text class="pillt" x=${p+$e+U/2} y=${M+2.3} text-anchor="middle" style=${`fill:${N.fg}`}>${_.floor}</text>`:u}
        ${w?C`<foreignObject width="24" height="24" transform=${`translate(${L} ${M-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${w} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:u}
        ${ae?C`<text x=${D} y=${M+2.8}>${ae}</text>`:u}
        ${Te(M,D+X(ae),!!H)}
        ${H?ke(M,[{value:H.value,kind:H.kind,partial:!1,tip:_.sensor}]):u}
        ${pe(A,_.sensor?()=>e.moreInfo(_.sensor):void 0,[_.floor,_.room].filter(Boolean).join(" \xB7 "))}</g>`),m=M,A+=T}return{first:E,last:m}}function dt(l,p,b,m,E,k,_=[]){let w=A+T/2;for(let L of _)S.set(L,Math.max(S.get(L)??0,w));let M=`z:${m}/${E}/${l.id}`,H=l.zones.length>0,N=H&&!t.collapsed.has(M),U=p+P(l.id)+5;if(d.push(C`<g style=${`--acc:${l.accent??b}`}>
      ${k!==void 0?V(k,w,p,w):u}
      ${_.length?V(f(_[0]),w,p,w,"tap",`stroke:${J(_[0])}`):u}
      ${_.map(L=>C`<circle cx=${f(L)} cy=${w} r="2.6" style=${`fill:${J(L)}`}></circle>`)}
      ${it(w,p,l,rn(l),!0,H?N?"open":"closed":void 0,I(e.hass,l).configured)}
      ${lt(l)}
      ${pe(A,()=>e.select(l),ct(l))}
      ${H?ot(U,w,M):u}</g>`),A+=T,N){let L=d.length,D=sn(l,p);d.splice(L,0,C`<g>${V(p+8,w+ce/2,p+8,D.last)}</g>`)}return w}let rn=l=>l.label,ct=l=>[l.label,l.id,l.amp!==void 0?`${l.amp} A`:"",l.mA!==void 0?`${l.mA} mA`:""].filter(Boolean).join(" \xB7 ");function an(l,p,b,m,E=l.id){let k=A+T/2,_=`r:${m}/${p.id}/${l.id}`,w=l.children??[],M=w.length>0&&!t.collapsed.has(_),H=g+P(E)+5,N=l.accent??p.accent??"#3182ce",U=(l.phases.length?l.phases:p.phases).filter(q=>c.includes(q));for(let q of U)S.set(q,Math.max(S.get(q)??0,k));if(d.push(C`<g style=${`--acc:${N}`}>
      ${U.length?V(f(U[0]),k,g,k,"tap",`stroke:${J(U[0])}`):u}
      ${U.map(q=>C`<circle cx=${f(q)} cy=${k} r="2.6" style=${`fill:${J(q)}`}></circle>`)}
      ${it(k,g,l,b,!1,w.length?M?"open":"closed":void 0,I(e.hass,l).configured,E)}
      ${lt(l)}
      ${pe(A,()=>e.select(l),ct(l))}
      ${w.length?ot(H,k,_):u}</g>`),A+=T,!M)return;let L=g+8,D=d.length,ae=k;for(let q of w)ae=dt(q,g+$e,N,m,p.id,L);w.length&&d.splice(D,0,C`<g style=${`--acc:${N}`}>${V(L,k+ce/2,L,ae)}</g>`)}for(let l of n){let p=`p:${l.id}`,b=!t.collapsed.has(p);if(l.label){let m=A+T/2,E=Math.max(60,X(l.label,8.5)+28);d.push(C`<g style="--acc:var(--secondary-text-color)">
        <rect class="ptbox" x=${g} y=${m-ce/2-1} width=${E} height=${ce+2} rx="3"></rect>
        ${nt(g+8,m,b)}
        <text class="ptitle" x=${g+16} y=${m+3}>${l.label}</text>
        <rect class="hit" x="0" y=${A} width=${o} height=${T} tabindex="0" role="button" aria-label=${l.label} @click=${()=>t.toggle(p)} @keydown=${st(()=>t.toggle(p))}><title>${l.label}</title></rect></g>`),A+=T}if(!(!b&&l.label))for(let m of l.rows){let E=m.modules.filter(_=>_.type==="differential"),k=E.length?m.modules.indexOf(E[0]):m.modules.length;for(let _ of m.modules.slice(0,k))_.type==="free"&&!_.label||dt(_,g,m.accent??"#3182ce",l.id,m.id,void 0,(_.phases.length?_.phases:m.phases).filter(w=>c.includes(w)));for(let _ of E)an(_,m,[m.label,_.label].filter(Boolean).join(" - ")||void 0,l.id)}}let ln=c.map(l=>V(f(l),y.get(l),f(l),S.get(l),"trunk",`stroke:${J(l)}`)),dn=A+8;return h`<div class="dia" style=${`max-width:${t.maxWidth}px`}>
    <svg viewBox=${`0 0 ${o} ${dn}`} width="100%" preserveAspectRatio="xMidYMin meet" role="img">${ln}${d}</svg></div>`}var to=["differential","breaker","contactor_daynight","contactor","relay","impulse","psu","surge","meter","free","custom"],no=["id","type","label","amp","poles","width","mA","class","curve","usage","phases","sensor","current_sensor","voltage_sensor","state_entity","icon","max_w","accent","output"],tt=["l1","l2","l3"],W=(n,e)=>({number:{min:n,max:e,mode:"box"}}),ye=class extends K{constructor(){super(...arguments);this._open=new Set(["sec:general"]);this._lbl=t=>{let o=/^(l[123])_(entity|current|volt|max)$/.exec(t.name);return o?`${o[1].toUpperCase()} \xB7 ${$(this.L,o[2]==="entity"?"head_sensor":o[2]==="current"?"current_sensor":o[2]==="volt"?"voltage_sensor":"max_w")}`:$(this.L,t.name==="class"?"cls":t.name==="total_current"?"current_sensor":t.name==="total_volt"?"voltage_sensor":t.name)}}setConfig(t){this._config=t}get L(){return this._config?.language??this._hassLang}get _hassLang(){return this.hass?.language?.startsWith("fr")?"fr":"en"}_emit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_panels(){return structuredClone(this._config.panels??[])}_setPanels(t){this._emit({...this._config,panels:t})}_sec(t,o,s,r=u){let a=this._open.has(t);return h`<details class="blk" ?open=${a} @toggle=${d=>{let i=d.currentTarget;d.target!==i||i.open===this._open.has(t)||(i.open?this._open.add(t):this._open.delete(t),this.requestUpdate())}}><summary><span>${o}</span>${r}</summary>${a?s():u}</details>`}_general(){let t=this._config,o={title:t.title,incoming_title:t.incoming_title,nominal_voltage:t.nominal_voltage,language:t.language??this._hassLang,module_width:t.module_width,view:t.view??"panel",modules_per_row:t.modules_per_row,max_width:t.max_width,collapsed:t.collapsed??"none"},s=[{name:"title",selector:{text:{}}},{name:"incoming_title",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"language",selector:{select:{options:["fr","en"]}}},{name:"module_width",selector:W(30,90)}]},{name:"max_width",selector:W(300,3e3)},{name:"nominal_voltage",selector:W(100,480)},{name:"modules_per_row",selector:W(1,60)},{name:"collapsed",selector:{select:{options:[{value:"none",label:"\u2014"},{value:"zones",label:$(this.L,"zones")},{value:"rows",label:$(this.L,"row")},{value:"panels",label:$(this.L,"panel")}]}}},{name:"view",selector:{select:{options:[{value:"panel",label:$(this.L,"view_panel")},{value:"tree",label:$(this.L,"view_tree")}]}}}];return h`<ha-form .hass=${this.hass} .data=${o} .schema=${s} .computeLabel=${this._lbl}
      @value-changed=${r=>{let a=r.detail.value,d={...t,title:a.title||void 0,incoming_title:a.incoming_title||void 0,nominal_voltage:a.nominal_voltage||void 0,language:a.language,module_width:a.module_width||void 0,view:a.view==="tree"?"tree":void 0,max_width:a.max_width||void 0,modules_per_row:a.modules_per_row||void 0,collapsed:a.collapsed&&a.collapsed!=="none"?a.collapsed:void 0};for(let i of Object.keys(d))d[i]===void 0&&delete d[i];this._emit(d)}}></ha-form>`}_sensors(){let t=this._config,o=t.sensors??{},s=i=>Object.keys(o.phases??{}).find(c=>c.toLowerCase()===i)??i,r={};for(let i of tt){let c=o.phases?.[s(i)];r[`${i}_entity`]=c?.entity,r[`${i}_current`]=c?.current_sensor,r[`${i}_volt`]=c?.voltage_sensor,r[`${i}_max`]=c?.max_w}let a={total_entity:o.total?.entity,total_current:o.total?.current_sensor,total_volt:o.total?.voltage_sensor,total_max:o.total?.max_w,...r},d=[{type:"grid",name:"",schema:[{name:"total_entity",selector:{entity:{domain:"sensor"}}},{name:"total_current",selector:{entity:{domain:"sensor"}}},{name:"total_volt",selector:{entity:{domain:"sensor"}}}]},{name:"total_max",selector:W(0,1e5)},...tt.map(i=>({type:"grid",name:"",schema:[{name:`${i}_entity`,selector:{entity:{domain:"sensor"}}},{name:`${i}_current`,selector:{entity:{domain:"sensor"}}},{name:`${i}_volt`,selector:{entity:{domain:"sensor"}}},{name:`${i}_max`,selector:W(0,1e5)}]}))];return h`<ha-form .hass=${this.hass} .data=${a} .schema=${d} .computeLabel=${this._lbl}
      @value-changed=${i=>{let c=i.detail.value,v={...t},x={...o.total??{},entity:c.total_entity||void 0,current_sensor:c.total_current||void 0,voltage_sensor:c.total_volt||void 0,max_w:c.total_max||void 0};for(let y of Object.keys(x))x[y]===void 0&&delete x[y];let f={...o.phases??{}};for(let y of tt){let S=s(y),A={...f[S]??{},entity:c[`${y}_entity`]||void 0,current_sensor:c[`${y}_current`]||void 0,voltage_sensor:c[`${y}_volt`]||void 0,max_w:c[`${y}_max`]||void 0};for(let P of Object.keys(A))A[P]===void 0&&delete A[P];Object.keys(A).length?f[S]=A:delete f[S]}let g={...o,total:Object.keys(x).length?x:void 0,phases:Object.keys(f).length?f:void 0};for(let y of Object.keys(g))g[y]===void 0&&delete g[y];Object.keys(g).length?v.sensors=g:delete v.sensors,this._emit(v)}}></ha-form>`}_moduleSchema(t){let o=this.L,s=t==="differential";return[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"type",selector:{select:{mode:"dropdown",options:to.map(r=>({value:r,label:$(o,`t_${r}`)}))}}}]},{name:"label",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"amp",selector:W(1,250)},{name:"poles",selector:W(1,4)},{name:"width",selector:W(1,12)},...s?[{name:"mA",selector:W(1,1e3)},{name:"class",selector:{select:{options:["AC","A","F","B"]}}}]:[{name:"curve",selector:{select:{options:["B","C","D"]}}}]]},...t==="breaker"?[{name:"usage",selector:{select:{options:["power","socket","light","other"].map(r=>({value:r,label:$(o,`u_${r}`)}))}}}]:[],{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}},{name:"sensor",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"current_sensor",selector:{entity:{domain:"sensor"}}},{name:"voltage_sensor",selector:{entity:{domain:"sensor"}}}]},...t==="psu"?[{name:"output",selector:{text:{}}}]:[],{name:"state_entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"icon",selector:{icon:{}}},{name:"max_w",selector:W(0,1e5)}]}]}_patchModule(t,o,s,r){let a=this._panels(),d=a[t].rows[o].modules[s];for(let i of no){let c=r[i];c===void 0||c===""||c===null||Array.isArray(c)&&!c.length||typeof c=="number"&&Number.isNaN(c)?delete d[i]:d[i]=c}this._setPanels(a)}_zones(t,o,s,r){let a=this.L,d=[{type:"grid",name:"",schema:[{name:"floor",selector:{text:{}}},{name:"room",selector:{text:{}}}]},{name:"sensor",selector:{entity:{domain:"sensor"}}},{name:"icon",selector:{icon:{}}}],i=(r.zones??[]).map(c=>typeof c=="string"?{room:c}:c);return h`${i.map((c,v)=>h`<div class="blk"><ha-form .hass=${this.hass} .data=${c} .schema=${d} .computeLabel=${this._lbl}
        @value-changed=${x=>{let f=this._panels(),g=f[t].rows[o].modules[s],y=[...g.zones??[]],S={};for(let[A,P]of Object.entries(x.detail.value))P!==""&&P!==void 0&&(S[A]=P);y[v]=S,g.zones=y,this._setPanels(f)}}></ha-form>
      <button class="danger" @click=${()=>{let x=this._panels(),f=x[t].rows[o].modules[s];f.zones=(f.zones??[]).filter((g,y)=>y!==v),f.zones.length||delete f.zones,this._setPanels(x)}}>${$(a,"remove")}</button></div>`)}
      <button class="add" @click=${()=>{let c=this._panels(),v=c[t].rows[o].modules[s];v.zones=[...v.zones??[],{}],this._setPanels(c)}}>+ ${$(a,"add_zone")}</button>`}_module(t,o,s,r){let a=this.L,d=String(r.type??"breaker"),i=`${t}/${o}/${s}`,c=this._open.has(i),v=f=>g=>{g.preventDefault(),g.stopPropagation(),f()},x=f=>{let g=this._panels(),y=g[t].rows[o].modules,S=s+f;S<0||S>=y.length||([y[s],y[S]]=[y[S],y[s]],this._setPanels(g))};return h`<details class="blk" ?open=${c} @toggle=${f=>{let g=f.currentTarget;f.target!==g||g.open===this._open.has(i)||(g.open?this._open.add(i):this._open.delete(i),this.requestUpdate())}}><summary><span>${$(a,`t_${d}`)} · ${r.id??""} ${r.amp?`${r.amp} A`:""}</span>
        <button @click=${v(()=>x(-1))}>◀</button><button @click=${v(()=>x(1))}>▶</button>
        <button class="danger" @click=${v(()=>{let f=this._panels();f[t].rows[o].modules.splice(s,1),this._setPanels(f)})}>✕</button></summary>
      ${c?h`<ha-form .hass=${this.hass} .data=${r} .schema=${this._moduleSchema(d)} .computeLabel=${this._lbl}
        @value-changed=${f=>this._patchModule(t,o,s,f.detail.value)}></ha-form>
      <div class="note">${$(a,"zones")}</div>${this._zones(t,o,s,r)}`:u}
    </details>`}_row(t,o,s){let r=this.L,a=d=>i=>{i.preventDefault(),i.stopPropagation(),d()};return h`<details class="blk" open><summary><span>${$(r,"row")} · ${s.label??s.id??o+1}</span>
        <button class="danger" @click=${a(()=>{let d=this._panels();d[t].rows.splice(o,1),this._setPanels(d)})}>✕</button></summary>
      <ha-form .hass=${this.hass} .data=${{id:s.id,label:s.label,phases:s.phases}}
        .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}}]}
        .computeLabel=${this._lbl}
        @value-changed=${d=>{let i=this._panels(),c=i[t].rows[o];for(let v of["id","label","phases"]){let x=d.detail.value[v];x===void 0||x===""||Array.isArray(x)&&!x.length?delete c[v]:c[v]=x}this._setPanels(i)}}></ha-form>
      ${(s.modules??[]).map((d,i)=>this._module(t,o,i,d))}
      <button class="add" @click=${()=>{let d=this._panels(),i=d[t].rows[o];i.modules=[...i.modules??[],{type:i.modules?.length?"breaker":"differential",id:`${i.id??o+1}-${(i.modules?.length??0)+1}`,amp:i.modules?.length?16:40}],this._setPanels(d)}}>+ ${$(r,"add_module")}</button>
    </details>`}render(){if(!this._config)return u;let t=this.L,o=this._config,s=!!o.groups&&!o.panels;return h`${this._sec("sec:general",$(t,"general"),()=>this._general())}
      ${this._sec("sec:sensors",$(t,"global_sensors"),()=>this._sensors())}
      ${s?h`<div class="banner">${$(t,"legacy")}
            <button @click=${()=>{let r={...o,panels:qe(o.groups)};delete r.groups,this._emit(r)}}>${$(t,"convert")}</button></div>`:u}
      ${(o.panels??[]).map((r,a)=>this._sec(`p:${a}`,`${$(t,"panel")} \xB7 ${r.label??r.id??a+1}`,()=>h`
        <ha-form .hass=${this.hass} .data=${{id:r.id,label:r.label,modules_per_row:r.modules_per_row}} .computeLabel=${this._lbl}
          .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"modules_per_row",selector:W(1,60)}]}
          @value-changed=${d=>{let i=this._panels();i[a].id=d.detail.value.id||void 0,i[a].label=d.detail.value.label||void 0,i[a].modules_per_row=d.detail.value.modules_per_row||void 0,this._setPanels(i)}}></ha-form>
        ${(r.rows??[]).map((d,i)=>this._row(a,i,d))}
        <button class="add" @click=${()=>{let d=this._panels();d[a].rows=[...d[a].rows??[],{id:`row_${(d[a].rows?.length??0)+1}`,modules:[]}],this._setPanels(d)}}>+ ${$(t,"add_row")}</button>`,h`<button class="danger" @click=${d=>{d.preventDefault(),d.stopPropagation();let i=this._panels();i.splice(a,1),this._open=new Set([...this._open].filter(c=>!c.startsWith("p:")&&!/^\d/.test(c))),this._setPanels(i)}}>✕</button>`))}
      <button class="add" @click=${()=>{let r=this._panels();r.push({id:`tableau_${r.length+1}`,rows:[]}),this._setPanels(r)}}>+ ${$(t,"add_panel")}</button>
      <div class="note">${$(t,"editor_note")}</div>`}};ye.properties={hass:{attribute:!1},_config:{state:!0}},ye.styles=Lt;customElements.get("din-panel-card-editor")||customElements.define("din-panel-card-editor",ye);var en="din-panel-card:view";function oo(n){let e=`${n.title??""}|${(n.panels??[]).map(o=>o.id??o.label??"").join(",")}|${(n.groups??[]).length}`,t=0;for(let o of e)t=t*31+o.charCodeAt(0)|0;return(t>>>0).toString(36)}var we=class extends K{constructor(){super(...arguments);this._viewKey=en;this._panels=[];this._entities=[]}static getConfigElement(){return document.createElement("din-panel-card-editor")}static getStubConfig(){return{type:"custom:din-panel-card",panels:[{id:"tableau_1",label:"Tableau principal",rows:[{id:"row_1",label:"Rang\xE9e 1",phases:["L1"],modules:[{type:"differential",id:"ID1",amp:40,mA:30,poles:2,class:"AC"},{type:"breaker",id:"1-1",amp:16,label:"Prises",usage:"socket"},{type:"breaker",id:"1-2",amp:10,label:"Lumi\xE8res",usage:"light"}]}]}]}}setConfig(t){zt(t),this._panels=Tt(t),this._entities=Ot(t,this._panels),this._config=t,this._selected=null;let o=t.collapsed;this._collapsed=new Set(o==="zones"||o==="rows"||o==="panels"?et(this._panels,o):[]),this._cw=0;let s=null;if(this._viewKey=`${en}:${oo(t)}`,t.view!=="tree"&&t.view!=="panel")try{s=localStorage.getItem(this._viewKey)}catch{}this._view=t.view==="tree"||t.view==="panel"?t.view:s==="tree"?"tree":"panel"}_toggle(t){let o=new Set(this._collapsed);o.has(t)?o.delete(t):o.add(t),this._collapsed=o}_collapseOne(){for(let t of["zones","rows","panels"]){let o=et(this._panels,t);if(o.some(s=>!this._collapsed.has(s))){this._collapsed=new Set([...this._collapsed,...o]);return}}}_setView(t){if(this._view=t,this._config?.view!=="tree"&&this._config?.view!=="panel")try{localStorage.setItem(this._viewKey,t)}catch{}}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._ro=new ResizeObserver(t=>{let o=Math.round(t[0]?.contentRect.width??0);o>0&&o!==this._cw&&(this._cw=o)}),this._ro.observe(this))}disconnectedCallback(){this._ro?.disconnect(),this._ro=void 0,super.disconnectedCallback()}set hass(t){let o=this._hass;this._hass=t,(!o||o.language!==t.language||o.themes?.darkMode!==t.themes?.darkMode||this._entities.some(s=>o.states[s]!==t.states[s]))&&this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 2+this._panels.reduce((t,o)=>t+o.rows.length*3,0)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}get _lang(){return this._config?.language??(this._hass?.language?.startsWith("fr")?"fr":"en")}_summary(t){if(!this._hass)return u;let o=Pe(this._hass,this._config?.sensors,$(t,"total"));if(!o.length)return u;let s=Math.max(0,...this._panels.map(a=>a.capacity??0)),r=a=>a.value===null?$(t,"unavailable"):`${a.approx?"\u2248 ":""}${O(a.kind,a.value)}`;return h`<div class="panel incoming ${s?"fixed":""}" style=${s?`--n:${s}`:""}>
      ${this._config?.incoming_title??$(t,"incoming")?h`<div class="panel-title">${this._config?.incoming_title??$(t,"incoming")}</div>`:u}
      <div class="in-plate">${o.map(a=>{let d=a.key==="total",i=a.pct===null?"":a.pct>1?"err":a.pct>=.9?"high":a.pct>=.6?"warn":"";return h`<div class="in-row ${d?"total":""}" title=${a.entity??""}
            @click=${()=>a.entity&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:a.entity},bubbles:!0,composed:!0}))}>
          ${d?h`<b class="in-label">${a.label}</b>`:h`<span class="chip ph-${a.key.toLowerCase()} in-label">${a.label}</span>`}
          <div class="in-track">${!d&&a.pct!==null?h`<i class=${i} style=${`width:${Math.max(1.5,Math.min(1,a.pct)*100)}%`}></i>`:u}</div>
          <div class="in-vals">${a.items.map(c=>h`<span class="k-${c.kind} ${c.value===null?"bad":""}">${r(c)}</span>`)}</div>
        </div>`})}</div>
    </div>`}render(){if(!this._config||!this._hass)return u;let t=this._lang,o={hass:this._hass,lang:t,select:c=>{this._selected=c},moreInfo:c=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:c},bubbles:!0,composed:!0}))},s=!!this._hass.themes?.darkMode,r=Number(this._config.module_width),a=this._view==="tree",d=Number(this._config.max_width)>0?Number(this._config.max_width):700,i=Xt(Math.min(this._cw||d,d));return h`<ha-card class=${s?"dark":""} style=${r>0?`--u:${r}px`:""}>
      <div class="toolbar">
        <h2>${this._config.title??""}</h2>
        ${a?h`
          <button class="tbtn" @click=${()=>{this._collapsed=new Set}}>
            <ha-icon icon="mdi:unfold-more-horizontal"></ha-icon><span>${$(t,"expand_all")}</span></button>
          <button class="tbtn" @click=${()=>this._collapseOne()}>
            <ha-icon icon="mdi:unfold-less-horizontal"></ha-icon><span>${$(t,"collapse_level")}</span></button>`:u}
        <button class="tbtn" aria-pressed=${a} title=${$(t,a?"view_panel":"view_tree")}
          @click=${()=>this._setView(a?"panel":"tree")}>
          <ha-icon icon=${a?"mdi:view-dashboard-outline":"mdi:file-tree"}></ha-icon>
          <span>${$(t,a?"view_panel":"view_tree")}</span></button>
      </div>
      ${a?u:this._summary(t)}
      ${a?Qt(this._panels,o,{config:this._config,width:i,maxWidth:d,collapsed:this._collapsed,toggle:c=>this._toggle(c)}):this._panels.map(c=>qt(c,o))}
      ${this._selected?h`<dialog @close=${()=>{this._selected=null}}
            @click=${c=>{c.target===c.currentTarget&&c.currentTarget.close()}}>
            ${Gt(this._selected,o,()=>this.shadowRoot?.querySelector("dialog")?.close())}</dialog>`:u}
    </ha-card>`}updated(){let t=this.shadowRoot?.querySelector("dialog");t&&this._selected&&!t.open&&t.showModal()}};we.properties={_config:{state:!0},_selected:{state:!0},_view:{state:!0},_collapsed:{state:!0},_cw:{state:!0}},we.styles=Et;customElements.get("din-panel-card")||customElements.define("din-panel-card",we);console.info("%c DIN-PANEL-CARD %c v1.16.0 ","color:#fff;background:#3182ce;font-weight:700","color:#3182ce;background:#fff");window.customCards=window.customCards||[];window.customCards.push({type:"din-panel-card",name:"DIN Panel Card",description:"Tableau \xE9lectrique modulaire graphique (rang\xE9es, rail DIN, modules) aliment\xE9 par les entit\xE9s Home Assistant.",preview:!1});
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
