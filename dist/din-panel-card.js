var Me=globalThis,Se=Me.ShadowRoot&&(Me.ShadyCSS===void 0||Me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ne=Symbol(),mt=new WeakMap,fe=class{constructor(e,n,o){if(this._$cssResult$=!0,o!==Ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(Se&&e===void 0){let o=n!==void 0&&n.length===1;o&&(e=mt.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&mt.set(n,e))}return e}toString(){return this.cssText}},bt=t=>new fe(typeof t=="string"?t:t+"",void 0,Ne),Ee=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((o,r,s)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new fe(n,t,Ne)},xt=(t,e)=>{if(Se)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let o=document.createElement("style"),r=Me.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=n.cssText,t.appendChild(o)}},Ue=Se?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let o of e.cssRules)n+=o.cssText;return bt(n)})(t):t;var{is:bn,defineProperty:xn,getOwnPropertyDescriptor:vn,getOwnPropertyNames:$n,getOwnPropertySymbols:_n,getPrototypeOf:yn}=Object,ze=globalThis,vt=ze.trustedTypes,wn=vt?vt.emptyScript:"",kn=ze.reactiveElementPolyfillSupport,ge=(t,e)=>t,Ie={toAttribute(t,e){switch(e){case Boolean:t=t?wn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},_t=(t,e)=>!bn(t,e),$t={attribute:!0,type:String,converter:Ie,reflect:!1,useDefault:!1,hasChanged:_t};Symbol.metadata??=Symbol("metadata"),ze.litPropertyMetadata??=new WeakMap;var G=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=$t){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,n);r!==void 0&&xn(this.prototype,e,r)}}static getPropertyDescriptor(e,n,o){let{get:r,set:s}=vn(this.prototype,e)??{get(){return this[n]},set(a){this[n]=a}};return{get:r,set(a){let d=r?.call(this);s?.call(this,a),this.requestUpdate(e,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$t}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;let e=yn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){let n=this.properties,o=[...$n(n),..._n(n)];for(let r of o)this.createProperty(r,n[r])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[o,r]of n)this.elementProperties.set(o,r)}this._$Eh=new Map;for(let[n,o]of this.elementProperties){let r=this._$Eu(n,o);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let r of o)n.unshift(Ue(r))}else e!==void 0&&n.push(Ue(e));return n}static _$Eu(e,n){let o=n.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let o of n.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,o){this._$AK(e,o)}_$ET(e,n){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){let s=(o.converter?.toAttribute!==void 0?o.converter:Ie).toAttribute(n,o.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,n){let o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=o.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ie;this._$Em=r;let d=a.fromAttribute(n,s.type);this[r]=d??this._$Ej?.get(r)??d,this._$Em=null}}requestUpdate(e,n,o,r=!1,s){if(e!==void 0){let a=this.constructor;if(r===!1&&(s=this[e]),o??=a.getPropertyOptions(e),!((o.hasChanged??_t)(s,n)||o.useDefault&&o.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,n,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:o,reflect:r,wrapped:s},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??n??this[e]),s!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[r,s]of o){let{wrapped:a}=s,d=this[r];a!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,s,d)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(n)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[ge("elementProperties")]=new Map,G[ge("finalized")]=new Map,kn?.({ReactiveElement:G}),(ze.reactiveElementVersions??=[]).push("2.1.2");var qe=globalThis,yt=t=>t,Le=qe.trustedTypes,wt=Le?Le.createPolicy("lit-html",{createHTML:t=>t}):void 0,Et="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,zt="?"+Y,An=`<${zt}>`,re=document,be=()=>re.createComment(""),xe=t=>t===null||typeof t!="object"&&typeof t!="function",Ve=Array.isArray,Cn=t=>Ve(t)||typeof t?.[Symbol.iterator]=="function",je=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,At=/>/g,ne=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,Mt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Ge=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),h=Ge(1),C=Ge(2),xo=Ge(3),se=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),St=new WeakMap,oe=re.createTreeWalker(re,129);function Pt(t,e){if(!Ve(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return wt!==void 0?wt.createHTML(e):e}var Mn=(t,e)=>{let n=t.length-1,o=[],r,s=e===2?"<svg>":e===3?"<math>":"",a=me;for(let d=0;d<n;d++){let i=t[d],c,v,$=-1,u=0;for(;u<i.length&&(a.lastIndex=u,v=a.exec(i),v!==null);)u=a.lastIndex,a===me?v[1]==="!--"?a=kt:v[1]!==void 0?a=At:v[2]!==void 0?(Lt.test(v[2])&&(r=RegExp("</"+v[2],"g")),a=ne):v[3]!==void 0&&(a=ne):a===ne?v[0]===">"?(a=r??me,$=-1):v[1]===void 0?$=-2:($=a.lastIndex-v[2].length,c=v[1],a=v[3]===void 0?ne:v[3]==='"'?Mt:Ct):a===Mt||a===Ct?a=ne:a===kt||a===At?a=me:(a=ne,r=void 0);let b=a===ne&&t[d+1].startsWith("/>")?" ":"";s+=a===me?i+An:$>=0?(o.push(c),i.slice(0,$)+Et+i.slice($)+Y+b):i+Y+($===-2?d:b)}return[Pt(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},ve=class t{constructor({strings:e,_$litType$:n},o){let r;this.parts=[];let s=0,a=0,d=e.length-1,i=this.parts,[c,v]=Mn(e,n);if(this.el=t.createElement(c,o),oe.currentNode=this.el.content,n===2||n===3){let $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(r=oe.nextNode())!==null&&i.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(let $ of r.getAttributeNames())if($.endsWith(Et)){let u=v[a++],b=r.getAttribute($).split(Y),y=/([.?@])?(.*)/.exec(u);i.push({type:1,index:s,name:y[2],strings:b,ctor:y[1]==="."?We:y[1]==="?"?Fe:y[1]==="@"?Be:de}),r.removeAttribute($)}else $.startsWith(Y)&&(i.push({type:6,index:s}),r.removeAttribute($));if(Lt.test(r.tagName)){let $=r.textContent.split(Y),u=$.length-1;if(u>0){r.textContent=Le?Le.emptyScript:"";for(let b=0;b<u;b++)r.append($[b],be()),oe.nextNode(),i.push({type:2,index:++s});r.append($[u],be())}}}else if(r.nodeType===8)if(r.data===zt)i.push({type:2,index:s});else{let $=-1;for(;($=r.data.indexOf(Y,$+1))!==-1;)i.push({type:7,index:s}),$+=Y.length-1}s++}}static createElement(e,n){let o=re.createElement("template");return o.innerHTML=e,o}};function le(t,e,n=t,o){if(e===se)return e;let r=o!==void 0?n._$Co?.[o]:n._$Cl,s=xe(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,n,o)),o!==void 0?(n._$Co??=[])[o]=r:n._$Cl=r),r!==void 0&&(e=le(t,r._$AS(t,e.values),r,o)),e}var De=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:o}=this._$AD,r=(e?.creationScope??re).importNode(n,!0);oe.currentNode=r;let s=oe.nextNode(),a=0,d=0,i=o[0];for(;i!==void 0;){if(a===i.index){let c;i.type===2?c=new $e(s,s.nextSibling,this,e):i.type===1?c=new i.ctor(s,i.name,i.strings,this,e):i.type===6&&(c=new Ke(s,this,e)),this._$AV.push(c),i=o[++d]}a!==i?.index&&(s=oe.nextNode(),a++)}return oe.currentNode=re,r}p(e){let n=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,n),n+=o.strings.length-2):o._$AI(e[n])),n++}},$e=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,o,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=le(this,e,n),xe(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==se&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Cn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(re.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ve.createElement(Pt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(n);else{let s=new De(r,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(e){let n=St.get(e.strings);return n===void 0&&St.set(e.strings,n=new ve(e)),n}k(e){Ve(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,o,r=0;for(let s of e)r===n.length?n.push(o=new t(this.O(be()),this.O(be()),this,this.options)):o=n[r],o._$AI(s),r++;r<n.length&&(this._$AR(o&&o._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let o=yt(e).nextSibling;yt(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},de=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,o,r,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=f}_$AI(e,n=this,o,r){let s=this.strings,a=!1;if(s===void 0)e=le(this,e,n,0),a=!xe(e)||e!==this._$AH&&e!==se,a&&(this._$AH=e);else{let d=e,i,c;for(e=s[0],i=0;i<s.length-1;i++)c=le(this,d[o+i],n,i),c===se&&(c=this._$AH[i]),a||=!xe(c)||c!==this._$AH[i],c===f?e=f:e!==f&&(e+=(c??"")+s[i+1]),this._$AH[i]=c}a&&!r&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},We=class extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}},Fe=class extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}},Be=class extends de{constructor(e,n,o,r,s){super(e,n,o,r,s),this.type=5}_$AI(e,n=this){if((e=le(this,e,n,0)??f)===se)return;let o=this._$AH,r=e===f&&o!==f||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==f&&(o===f||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ke=class{constructor(e,n,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){le(this,e)}};var Sn=qe.litHtmlPolyfillSupport;Sn?.(ve,$e),(qe.litHtmlVersions??=[]).push("3.3.3");var Rt=(t,e,n)=>{let o=n?.renderBefore??e,r=o._$litPart$;if(r===void 0){let s=n?.renderBefore??null;o._$litPart$=r=new $e(e.insertBefore(be(),s),s,void 0,n??{})}return r._$AI(t),r};var Ze=globalThis,q=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rt(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return se}};q._$litElement$=!0,q.finalized=!0,Ze.litElementHydrateSupport?.({LitElement:q});var En=Ze.litElementPolyfillSupport;En?.({LitElement:q});(Ze.litElementVersions??=[]).push("4.2.2");var Tt=Ee`
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
`,Ot=Ee`
  :host { display: block; }
  .blk { margin: 8px 0; padding: 6px 10px; border: 1px solid var(--divider-color); border-radius: 8px; }
  .blk .blk { background: var(--secondary-background-color); }
  summary { cursor: pointer; display: flex; align-items: center; gap: 6px; padding: 4px 0; font-weight: 600; }
  summary span { flex: 1; }
  button { cursor: pointer; border: 1px solid var(--divider-color); border-radius: 6px; padding: 2px 8px; background: var(--card-background-color); color: var(--primary-text-color); }
  button.add { margin: 6px 0; } button.danger { color: var(--error-color); }
  .banner { padding: 10px; border-radius: 8px; background: var(--warning-color, #f59f00); color: #000; margin-bottom: 10px; }
  .note { font-size: 12px; color: var(--secondary-text-color); margin: 8px 0; }
`;var Ht={differential:{type:"differential"},rcd:{type:"differential"},diff:{type:"differential"},breaker:{type:"breaker"},breaker_1p:{type:"breaker",poles:1},breaker_2p:{type:"breaker",poles:2},breaker_3p:{type:"breaker",poles:3},breaker_4p:{type:"breaker",poles:4},three_phase:{type:"breaker",poles:3},tetrapolar:{type:"breaker",poles:4},contactor_daynight:{type:"contactor_daynight"},daynight:{type:"contactor_daynight"},contactor:{type:"contactor"},power_contactor:{type:"contactor"},impulse:{type:"impulse"},telerupteur:{type:"impulse"},tele:{type:"impulse"},relay:{type:"relay"},relais:{type:"relay"},psu:{type:"psu"},power_supply:{type:"psu"},alimentation:{type:"psu"},surge:{type:"surge"},surge_arrester:{type:"surge"},meter:{type:"meter"},free:{type:"free"},custom:{type:"custom"}},zn={differential:{poles:2},breaker:{poles:1},contactor_daynight:{poles:1,width:2},contactor:{poles:1,width:2},impulse:{poles:2,width:1},relay:{poles:2,width:1},psu:{poles:2,width:2},surge:{poles:2},meter:{poles:2,width:4},free:{poles:1,width:1},custom:{poles:1,width:1}},Nt=(t,e,n)=>Math.min(n,Math.max(e,t)),I=t=>t==null||t===""?void 0:String(t);function Pe(t){let e={};for(let[n,o]of Object.entries(t))o!=null&&o!==""&&(e[n]=o);return e}function Ye(t){return[{id:"tableau_1",label:"Tableau principal",rows:t.map(n=>{let o=(n.phases?.length??0)>=3,r=Pe({id:n.id,type:"differential",label:n.label,poles:n.poles??(o?4:void 0),amp:n.amp,mA:n.mA,class:n.class,sensor:n.sensor,max_w:n.max_w,accent:n.accent}),s=(n.circuits??[]).map(a=>{let{type:d,...i}=a;return Pe({...i,type:"breaker",usage:d,poles:a.poles??(o?3:void 0)})});return Pe({id:String(n.id),label:n.label??String(n.id),phases:n.phases,accent:n.accent,modules:[r,...s]})})}]}function Ln(t){let e={circuits:new Map,groups:new Map};for(let n of t??[]){e.groups.set(String(n.id),n);for(let o of n.circuits??[])e.circuits.has(String(o.id))||e.circuits.set(String(o.id),o)}return e}function Pn(t){return typeof t=="string"?{room:t}:Pe({floor:I(t.floor),room:I(t.room),icon:t.icon,sensor:t.sensor})}function Rn(t,e,n,o){let r={...t};if(t.circuit!==void 0&&o.circuits.has(String(t.circuit))){let b=o.circuits.get(String(t.circuit)),{type:y,...S}=b;r={...S,type:"breaker",usage:y,...t}}if(t.group!==void 0&&o.groups.has(String(t.group))){let{circuits:b,...y}=o.groups.get(String(t.group));r={...y,type:"differential",...t}}let s=Ht[String(r.type??"breaker").toLowerCase()]??Ht.custom,a=s.type,d=(r.phases??e.phases).map(b=>String(b).toUpperCase()),i=zn[a],c=r.poles??s.poles??(a==="breaker"&&d.length>=3?3:void 0),v=Nt(Number(r.width??i.width??c??i.poles)||1,1,12),$=Nt(Number(c??(a==="breaker"&&v===1?2:i.poles))||1,1,4),u=["power","socket","light"].includes(String(r.usage))?r.usage:"other";return{id:I(r.id)??`${e.id}-${n+1}`,type:a,label:I(r.label),poles:$,width:v,amp:r.amp!==void 0?Number(r.amp):void 0,mA:r.mA!==void 0?Number(r.mA):void 0,cls:I(r.class),curve:I(r.curve),usage:u,icon:r.icon,accent:r.accent,phases:d,sensor:r.sensor,current_sensor:r.current_sensor,voltage_sensor:r.voltage_sensor,state_entity:r.state_entity,max_w:r.max_w!==void 0?Number(r.max_w):void 0,zones:(r.zones??[]).map(Pn),note:I(r.note),output:I(r.output),section:I(r.section)}}function Tn(t,e,n){let o=I(t.id)??`row_${e+1}`,r=(t.phases??[]).map(d=>String(d).toUpperCase()),s=(t.modules??[]).map((d,i)=>Rn(d,{phases:r,id:o},i,n)),a;for(let d of s)d.type==="differential"?(a=d,d.children=[]):a&&d.type!=="free"&&d.type!=="meter"&&a.children.push(d);return{id:o,label:I(t.label),phases:r,accent:t.accent,modules:s}}function On(t){let e=Math.floor(Number(t));return Number.isFinite(e)&&e>=1?Math.min(e,60):void 0}function Ut(t){let e=Ln(t.groups),n=t.panels??(t.groups?Ye(t.groups):[]),o=Number(t.nominal_voltage)>0?Number(t.nominal_voltage):void 0,r=n.map((s,a)=>({id:I(s.id)??`panel_${a+1}`,label:I(s.label),capacity:On(s.modules_per_row??t.modules_per_row),rows:(s.rows??[]).map((d,i)=>Tn(d,i,e))}));if(o)for(let s of r)for(let a of s.rows)for(let d of a.modules)d.volts=o;return r}function It(t){if(!t||!t.panels&&!t.groups)throw new Error("Configuration invalide : d\xE9finir 'panels' (nouveau format) ou 'groups' (ancien format).");if(t.max_width!==void 0&&!(typeof t.max_width=="number"&&t.max_width>0))throw new Error("'max_width' doit \xEAtre un nombre positif de pixels (ex. 1100), sans unit\xE9.");let e=n=>n!==void 0&&!(Number.isInteger(n)&&n>=1);if(e(t.modules_per_row)||(t.panels??[]).some(n=>e(n.modules_per_row)))throw new Error("'modules_per_row' doit \xEAtre un entier \u2265 1 (nombre de modules DIN par rang\xE9e).");if(t.panels&&!Array.isArray(t.panels))throw new Error("'panels' doit \xEAtre une liste.");if(t.groups&&!Array.isArray(t.groups))throw new Error("'groups' doit \xEAtre une liste.")}function jt(t,e){let n=new Set,o=r=>{r&&n.add(r)};o(t.sensors?.total?.entity),o(t.sensors?.total?.current_sensor),o(t.sensors?.total?.voltage_sensor);for(let r of Object.values(t.sensors?.phases??{}))o(r?.entity),o(r?.current_sensor),o(r?.voltage_sensor);for(let r of e)for(let s of r.rows)for(let a of s.modules){o(a.sensor),o(a.current_sensor),o(a.voltage_sensor),o(a.state_entity);for(let d of a.zones)o(d.sensor)}return[...n]}var Xe=t=>!t||t==="unavailable"||t==="unknown";function Je(t,e,n="raw"){if(!e)return{status:"none",value:null};let o=t.states[e];if(!o||Xe(o.state))return{status:"unavailable",value:null};let r=parseFloat(o.state);return Number.isFinite(r)?(n==="current"&&o.attributes?.unit_of_measurement==="mA"&&(r/=1e3),{status:"ok",value:r}):{status:"unavailable",value:null}}var Hn={W:["power",1],kW:["power",1e3],MW:["power",1e6],mW:["power",.001],Wh:["energy",1],kWh:["energy",1e3],MWh:["energy",1e6],A:["current",1],mA:["current",.001],V:["voltage",1],mV:["voltage",.001],kV:["voltage",1e3]},Nn={power:["power",1],energy:["energy",1e3],current:["current",1],voltage:["voltage",1]};function Z(t,e,n="power"){if(!e)return{status:"none",value:null,kind:n};let o=t.states[e],r=o?.attributes??{},[s,a]=Hn[r.unit_of_measurement]??Nn[r.device_class]??[n,1];if(!o||Xe(o.state))return{status:"unavailable",value:null,kind:s};let d=parseFloat(o.state);return Number.isFinite(d)?{status:"ok",value:d*a,kind:s}:{status:"unavailable",value:null,kind:s}}function T(t,e){if(!e)return null;let n=t.states[e]?.state?.toLowerCase();if(!n||Xe(n))return null;if(["on","true","closed","active","enabled","home","heat","playing","1"].includes(n))return!0;if(["off","false","open","inactive","disabled","not_home","idle","standby","0"].includes(n))return!1;let o=parseFloat(n);return Number.isFinite(o)?o>0:null}var Dt=["power","energy","current","voltage"],Bt=(t,e)=>Dt.indexOf(t.kind)-Dt.indexOf(e.kind);function Wt(t,e,n=t.length){let o=[...new Set(t.map(a=>a.kind))],r=o.filter(a=>t.some(d=>d.kind===a&&d.value!==null));return(r.length?r:o.slice(0,1)).map(a=>{let d=t.filter(i=>i.kind===a&&i.value!==null);return{kind:a,source:e,value:d.length?d.reduce((i,c)=>i+c.value,0):null,partial:d.length<n||d.some(i=>i.partial)}}).sort(Bt)}var Un=t=>{let e=t[0];return t.length?{configured:!0,value:e.value,kind:e.kind,source:e.source,partial:e.partial,counters:t}:{configured:!1,value:null,kind:"power",source:"none",partial:!1,counters:[]}},Ft=new WeakMap;function j(t,e){let n=Ft.get(e);if(n&&n.h===t)return n.p;let o=In(t,e);return Ft.set(e,{h:t,p:o}),o}function In(t,e){let n=[],o=(d,i)=>{if(!d)return;let c=Z(t,d,i);n.some(v=>v.kind===c.kind)||n.push({kind:c.kind,value:c.value,partial:!1,source:"sensor"})};o(e.sensor,"power"),o(e.current_sensor,"current");let r=[],s=e.zones.filter(d=>d.sensor);if(s.length)r=Wt(s.map(d=>Z(t,d.sensor)),"zones",e.zones.length);else if(e.children?.length){let d=e.children.map(i=>j(t,i));if(d.some(i=>i.configured)){let i=d.flatMap(c=>c.counters.map(v=>({...v,partial:v.partial})));r=Wt(i,"children",d.length),d.some(c=>!c.configured)&&(r=r.map(c=>({...c,partial:!0})))}}let a=[...n,...r.filter(d=>!n.some(i=>i.kind===d.kind))].sort(Bt);return Un(a)}function ce(t,e="power"){if(!(e==="energy"||e==="voltage")){if(e==="current")return t.amp;if(t.max_w)return t.max_w;if(t.amp)return t.amp*(t.volts??230)*(t.poles>=3?3:1)}}function Kt(t,e,n){let o=n.counters.find(a=>a.kind==="current");if(o)return o.value;let r=n.counters.find(a=>a.kind==="power"),s=Je(t,e.voltage_sensor);return s.value&&r&&r.value!==null?r.value/s.value:null}function Qe(t){let e=Math.abs(t);return e>=1e4?`${(t/1e3).toFixed(1)} kW`:e>=1e3?`${(t/1e3).toFixed(2)} kW`:`${Math.round(t)} W`}function jn(t,e=!1){let n=t/1e3,o=Math.abs(n);return`${n.toFixed(e?o>=1e3?0:1:o>=1e3?0:o>=100?1:2)} kWh`}function Dn(t){let e=Math.abs(t);return`${t.toFixed(e>=100?0:e>=10?1:2)} A`}var Wn=t=>`${t.toFixed(t>=100?0:1)} V`,O=(t,e,n=!1)=>t==="energy"?jn(e,n):t==="current"?Dn(e):t==="voltage"?Wn(e):Qe(e);function _e(t,e){let n=[];if(!e)return n;let o;if(e.entity){let s=Z(t,e.entity);(s.kind==="power"||s.kind==="energy")&&(n.push({kind:s.kind,value:s.value,entity:e.entity}),o=s)}let r;if(e.current_sensor&&(r=Z(t,e.current_sensor,"current"),n.push({kind:"current",value:r.value,entity:e.current_sensor})),e.voltage_sensor){let s=Z(t,e.voltage_sensor,"voltage");n.push({kind:"voltage",value:s.value,entity:e.voltage_sensor})}else o?.kind==="power"&&o.value!==null&&r?.value&&r.value>.05&&o.value>0&&n.push({kind:"voltage",value:o.value/r.value,entity:e.current_sensor,approx:!0});return n.sort((s,a)=>["power","energy","current","voltage"].indexOf(s.kind)-["power","energy","current","voltage"].indexOf(a.kind))}function Re(t,e,n){if(!e)return[];let o=Object.entries(e.phases??{}).filter(([,i])=>i&&(i.entity||i.current_sensor||i.voltage_sensor)),r=i=>_e(t,i).find(c=>c.kind==="power")?.value??null,s=Math.max(0,...o.map(([,i])=>r(i)??0)),a=(i,c,v,$)=>{let u=_e(t,v);if(!u.length)return;let b=u.find(S=>S.kind==="power"),y=b&&b.value!==null&&$?Math.max(0,b.value)/$:null;return{key:i,label:c,items:u,pct:y,limit:$,entity:v?.entity??v?.current_sensor??v?.voltage_sensor}},d=i=>i?.max_w??(e.total?.max_w&&o.length?e.total.max_w/o.length:s||void 0);return[a("total",n,e.total,e.total?.max_w),...o.map(([i,c])=>a(i.toUpperCase(),i.toUpperCase(),c,d(c)))].filter(i=>!!i)}var qt={fr:{total:"Total",search:"Champ de recherche",search_ph:"Rechercher (id, libell\xE9, pi\xE8ce, calibre\u2026)",result:"r\xE9sultat",no_result:"aucun r\xE9sultat",clear:"Effacer",incoming:"Arriv\xE9e",nominal_voltage:"Tension nominale (V, d\xE9faut 230)",incoming_title:"Titre du cadre d\u2019arriv\xE9e (vue tableau)",phase:"Phase",power:"Puissance",current:"Intensit\xE9",voltage:"Tension",load:"Charge",zones:"Zones",protects:"Circuits prot\xE9g\xE9s",unavailable:"Indisponible",close:"Fermer",type:"Type",id:"Identifiant",rating:"Calibre",poles:"P\xF4les",sensitivity:"Sensibilit\xE9",cls:"Classe",curve:"Courbe",phases:"Phases",usage:"Usage",sum_zones:"Somme des capteurs de zones",sum_children:"Somme des circuits (partielle si certains sans mesure)",own_sensor:"Capteur du module",no_data:"Aucune mesure",max:"Max",state:"\xC9tat",t_differential:"Interrupteur diff\xE9rentiel",t_breaker:"Disjoncteur",t_contactor_daynight:"Contacteur jour/nuit",t_contactor:"Contacteur de puissance",t_impulse:"T\xE9l\xE9rupteur",t_relay:"Relais",t_psu:"Alimentation",output:"Sortie",section:"Section du c\xE2ble (mm\xB2)",modules_per_row:"Modules DIN par rang\xE9e",t_surge:"Parafoudre",t_meter:"Compteur \xE9lectrique",t_free:"Module libre",t_custom:"Module personnalis\xE9",u_power:"Puissance",u_socket:"Prises",u_light:"\xC9clairage",u_other:"Autre",panel:"Tableau",row:"Rang\xE9e",module:"Module",add_row:"Ajouter une rang\xE9e",add_module:"Ajouter un module",add_panel:"Ajouter un tableau",add_zone:"Ajouter une zone",remove:"Supprimer",legacy:"Ancien format (groups) d\xE9tect\xE9.",convert:"Convertir en panels / rows / modules",general:"G\xE9n\xE9ral",global_sensors:"Capteurs globaux",title:"Titre",language:"Langue",module_width:"Largeur d\u2019un module (px)",total_entity:"Capteur total (W ou kWh)",head_sensor:"Capteur (W ou kWh)",total_max:"Puissance max totale (W)",label:"Libell\xE9",amp:"Calibre (A)",width:"Largeur (modules DIN)",icon:"Ic\xF4ne",sensor:"Capteur (W, kWh ou A)",current_sensor:"Capteur d\u2019intensit\xE9",voltage_sensor:"Capteur de tension",state_entity:"\xC9tat (capteur, switch\u2026 on/off)",floor:"\xC9tage",room:"Pi\xE8ce",mA:"Sensibilit\xE9 (mA)",max_w:"Puissance max (W)",accent:"Couleur d\u2019accent",editor_note:"Les options avanc\xE9es restent \xE9ditables en YAML.",free:"Libre",view_tree:"Sch\xE9ma",collapse_level:"Replier un niveau",collapsed:"Repli initial",max_width:"Largeur max du sch\xE9ma (px)",view_panel:"Tableau",expand_all:"Tout d\xE9plier",collapse_all:"Tout replier",view:"Vue initiale",expand:"D\xE9plier / replier"},en:{total:"Total",search:"Search field",search_ph:"Search (id, label, room, rating\u2026)",result:"result",no_result:"no result",clear:"Clear",incoming:"Incoming",nominal_voltage:"Nominal voltage (V, default 230)",incoming_title:"Incoming frame title (panel view)",phase:"Phase",power:"Power",current:"Current",voltage:"Voltage",load:"Load",zones:"Zones",protects:"Protected circuits",unavailable:"Unavailable",close:"Close",type:"Type",id:"Identifier",rating:"Rating",poles:"Poles",sensitivity:"Sensitivity",cls:"Class",curve:"Curve",phases:"Phases",usage:"Usage",sum_zones:"Sum of zone sensors",sum_children:"Sum of circuits (partial if some have no measurement)",own_sensor:"Module sensor",no_data:"No measurement",max:"Max",state:"State",t_differential:"RCD (differential switch)",t_breaker:"Circuit breaker",t_contactor_daynight:"Day/night contactor",t_contactor:"Power contactor",t_impulse:"Impulse relay (t\xE9l\xE9rupteur)",t_relay:"Relay",t_psu:"Power supply",output:"Output",section:"Cable cross-section (mm\xB2)",modules_per_row:"DIN modules per row",t_surge:"Surge arrester",t_meter:"Energy meter",t_free:"Free module",t_custom:"Custom module",u_power:"Power",u_socket:"Sockets",u_light:"Lighting",u_other:"Other",panel:"Panel",row:"Row",module:"Module",add_row:"Add row",add_module:"Add module",add_panel:"Add panel",add_zone:"Add zone",remove:"Remove",legacy:"Legacy format (groups) detected.",convert:"Convert to panels / rows / modules",general:"General",global_sensors:"Global sensors",title:"Title",language:"Language",module_width:"Module width (px)",total_entity:"Total sensor (W or kWh)",head_sensor:"Sensor (W or kWh)",total_max:"Max total power (W)",label:"Label",amp:"Rating (A)",width:"Width (DIN modules)",icon:"Icon",sensor:"Sensor (W, kWh or A)",current_sensor:"Current sensor",voltage_sensor:"Voltage sensor",state_entity:"State (sensor, switch\u2026 on/off)",floor:"Floor",room:"Room",mA:"Sensitivity (mA)",max_w:"Max power (W)",accent:"Accent colour",editor_note:"Advanced options remain editable in YAML.",free:"Free",view_tree:"Diagram",collapse_level:"Collapse one level",collapsed:"Initial collapse",max_width:"Max diagram width (px)",view_panel:"Panel",expand_all:"Expand all",collapse_all:"Collapse all",view:"Initial view",expand:"Expand / collapse"}},m=(t,e)=>qt[t][e]??qt.fr[e]??e;var K={power:"mdi:flash",socket:"mdi:power-socket-eu",light:"mdi:lightbulb",other:"mdi:electric-switch",differential:"mdi:current-ac",surge:"mdi:flash-alert",meter:"mdi:counter",contactor:"mdi:electric-switch-closed",contactor_daynight:"mdi:theme-light-dark",impulse:"mdi:toggle-switch",relay:"mdi:electric-switch",psu:"mdi:power-plug-outline"};var Fn=t=>t.amp!==void 0?h`<div class="print amp">${t.curve??""}${t.amp}${t.curve?"":"A"}</div>`:f;function Bn(t,e){let n=Math.max(1,Math.min(t.poles,t.width));return h`<div class="levers ${e?"on":"off"}">
    ${Array.from({length:n},()=>h`<div class="cell"><div class="slot"><div class="lever ${e?"on":"off"}"></div></div></div>`)}
    ${n>1?h`<i class="bar"></i>`:f}
  </div>`}var Kn=({mod:t,ctx:e})=>{let n=T(e.hass,t.state_entity);return h`${Bn(t,n!==!1)}${Fn(t)}`},qn=({mod:t,ctx:e})=>{let o=T(e.hass,t.state_entity)!==!1;return h`
    <div class="levers single ${o?"on":"off"}"><div class="slot wide"><div class="lever ${o?"on":"off"}"></div></div></div>
    <div class="dtype"><span>Type ${t.cls??"AC"}</span>${t.mA!==void 0?h`<span>${t.mA}mA</span>`:f}</div>
    ${t.amp!==void 0?h`<div class="print amp">${t.amp}A</div>`:f}
    <div class="dtools"><span class="test">T</span><span class="win ${o?"ok":"trip"}"></span></div>`},X=(t,e)=>h`<div class="zone"><div class="blk ${t}">${e}</div></div>`,J=(t,e)=>{let n=e??(t.amp!==void 0?`${t.curve??""}${t.amp}${t.curve?"":"A"}`:"");return n?h`<div class="print amp ${e?"txt":""}">${n}</div>`:f},et=t=>h`<i class="zlens ${t===!0?"on":t===!1?"off":""}"></i>`,Vn=({mod:t,ctx:e})=>{let n=T(e.hass,t.state_entity),o=n===!0?"on":n===!1?"off":"auto";return h`${X("dn",h`<div class="zsw"><span class=${o==="on"?"act":""}>I</span><span class=${o==="auto"?"act":""}>A</span><span class=${o==="off"?"act":""}>O</span></div>`)}${J(t,t.amp!==void 0?void 0:"J/N")}`},Gn=({mod:t,ctx:e})=>{let n=T(e.hass,t.state_entity);return h`${X("ct",h`<span class="coil2"><b>A1</b><b>A2</b></span><i class="zmi ${n===!0?"on":""}"></i>`)}${J(t,t.amp!==void 0?void 0:"KM")}`},Zn=({mod:t,ctx:e})=>{let n=T(e.hass,t.state_entity);return h`${X("rl",h`<span class="coil2"><b>A1</b><b>A2</b></span>${et(n)}`)}${J(t,t.amp!==void 0?void 0:"REL")}`},Yn=({mod:t,ctx:e})=>{let n=T(e.hass,t.state_entity);return h`${X("tl",h`<i class="zbtn"></i>${et(n)}`)}${J(t,t.amp!==void 0?void 0:"TL")}`},Xn=({mod:t,ctx:e})=>{let n=T(e.hass,t.state_entity);return h`${X("ps",h`<i class="zpot"><b></b></i><span class="dc">${et(n!==!1)}DC OK</span>`)}${J(t,t.output??(t.amp!==void 0?void 0:"AC/DC"))}`},Jn=({mod:t,ctx:e})=>{let n=T(e.hass,t.state_entity);return h`${X("sp",h`<i class="zspd ${n===!1?"bad":"ok"}"></i>`)}${J(t,"SPD")}${t.note?h`<div class="print sm">${t.note}</div>`:f}`},Qn=({mod:t,power:e})=>h`
  ${X("mt",h`<span class="zlcd">${e.value!==null?O(e.kind,e.value):"- - -"}</span>`)}${J(t,t.label??"kWh")}`,eo=()=>h`<div class="blank"></div>`,to=({mod:t})=>h`${X("cu",t.icon?h`<ha-icon icon=${t.icon}></ha-icon>`:f)}${J(t)}`,tt={differential:qn,breaker:Kn,contactor_daynight:Vn,contactor:Gn,relay:Zn,impulse:Yn,psu:Xn,surge:Jn,meter:Qn,free:eo,custom:to};function Te(t,e){return t.label??(t.type==="free"?m(e.lang,"free"):t.id)}function Vt(t,e,n){return h`<div class="term ${e} ${n?"n":""}">${Array.from({length:t},()=>h`<i></i>`)}</div>`}var no="mdi:map-marker-outline";function oo(t,e,n){let o=[t.amp!==void 0?`${t.amp} A`:"",t.id!==e?t.id:""].filter(Boolean).join(" \xB7 "),r=t.zones.map(s=>({icon:s.icon??n??no,text:[s.floor,s.room].filter(Boolean).join(" \xB7 ")})).filter(s=>s.text);return h`<div class="tip" role="tooltip">
    <div class="tip-h">${n?h`<ha-icon icon=${n}></ha-icon>`:f}<b>${e}</b>${o?h`<span class="tip-d">${o}</span>`:f}</div>
    ${r.map(s=>h`<div class="tip-z"><ha-icon icon=${s.icon}></ha-icon><span>${s.text}</span></div>`)}
  </div>`}function Gt(t){let e=t.currentTarget,n=e.querySelector(".tip");if(!n)return;let o=e.getBoundingClientRect();n.style.left=`${Math.max(4,Math.min(o.left,window.innerWidth-270))}px`,o.top>140?(n.style.bottom=`${window.innerHeight-o.top+6}px`,n.style.top="auto"):(n.style.top=`${o.bottom+6}px`,n.style.bottom="auto")}var ro=new Set(["relay","impulse","contactor","contactor_daynight"]);function Zt(t,e,n=""){let o=j(e.hass,t),r=ce(t,o.kind),s=o.value!==null&&r?Math.max(0,o.value)/r:null,a=s===null?"":s>1?"err":s>=.9?"high":s>=.6?"warn":"ok",d=tt[t.type]??tt.custom,i=Math.max(2,t.poles),c=t.poles!==3,v=Te(t,e),$=t.type!=="free"||!!t.label,u=t.icon??(t.type==="breaker"?K[t.usage]:K[t.type]),b=t.type==="differential",y=o.counters.filter(L=>!(b&&L.value===null)),S=o.configured&&t.type!=="meter"&&y.length?h`<div class="readouts">${y.map(L=>h`<div class="readout k-${L.kind} ${L.value===null?"bad":""}" title=${m(e.lang,L.source==="children"?"sum_children":L.source==="zones"?"sum_zones":"own_sensor")}>
        ${L.value===null?"n/d":O(L.kind,L.value,!0)}</div>`)}</div>`:f,k=ro.has(t.type)?T(e.hass,t.state_entity):null,z=t.type!=="differential"&&t.type!=="free",ue=k===null?"":k?"st-on":"st-off",B=`--w:${t.width};${t.accent?`--acc:${t.accent};--cap:${t.accent};`:""}`,Ce=L=>{L instanceof KeyboardEvent&&L.key!=="Enter"&&L.key!==" "||(L.preventDefault(),e.select(t))};return h`<div class="mod t-${t.type} u-${t.usage} p-${t.poles} ${ue} ${n?`s-${n}`:""}" style=${B} role="button" tabindex="0"
      aria-label=${`${v} ${t.id}`} @click=${Ce} @keydown=${Ce} @mouseenter=${Gt} @focus=${Gt}>
    ${oo(t,v,u)}
    <div class="face">
      ${t.type!=="free"?Vt(i,"top",c):f}
      ${a?h`<i class="led ${a}"></i>`:f}
      <div class="body ${z?"ib":""}">${z?h`<div class="pid">${t.id}</div>`:f}${d({mod:t,ctx:e,power:o})}${S}${t.type==="differential"||z?f:h`<div class="pid">${t.id}</div>`}</div>
      ${t.type!=="free"?Vt(i,"bot",c):f}
    </div>
    ${$?h`<div class="plate">
          ${u?h`<span class="pi"><ha-icon icon=${u}></ha-icon></span>`:f}
          <div class="txt" lang=${e.lang}>${v}</div>
          ${t.section?h`<div class="sec">${t.section} mm²</div>`:f}</div>`:f}
  </div>`}function Yt(t,e){if(!e||e<=0)return[t];let n=[[]],o=0;for(let r of t)o+r.width>e&&n[n.length-1].length&&(n.push([]),o=0),n[n.length-1].push(r),o+=r.width;return n}function Xt(t,e,n,o){let r=i=>e.search&&o?e.search(i,t,o)?"hit":"dim":"",s=!e.search||!o||t.modules.some(i=>e.search(i,t,o)),a=t.modules.find(i=>i.type==="differential"),d=a?j(e.hass,a):void 0;return h`<section class="row ${s?"":"nomatch"}" style=${t.accent?`--acc:${t.accent}`:""}>
    ${t.label||t.phases.length||d?.configured?h`<header class="row-head">
          ${t.label?h`<b>${t.label}</b>`:f}
          ${t.phases.map(i=>h`<span class="chip ph-${i.toLowerCase()}">${i}</span>`)}
          ${d?.configured&&d.counters.some(i=>i.value!==null)?h`<span class="grow"></span>${d.counters.filter(i=>i.value!==null).map(i=>h`<span class="dim sum">${i.partial?"\u2265 ":""}${O(i.kind,i.value)}</span>`)}`:f}
        </header>`:f}
    <div class="scroller"><div class="lines">
      ${Yt(t.modules,n).map(i=>h`<div class="rail-wrap ${n?"fixed":""}" style=${n?`--n:${n}`:""}><div class="rail"></div>
        ${i.map(c=>Zt(c,e,r(c)))}<span class="fill"></span>
      </div>`)}
    </div></div>
  </section>`}function Jt(t,e){return h`<div class="panel ${t.capacity?"fixed":""}">
    ${t.label?h`<div class="panel-title">${t.label}</div>`:f}
    ${t.rows.map(n=>Xt(n,e,t.capacity,t))}
  </div>`}var Qt=t=>String(t??"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();function so(t,e,n,o){let r=t.amp!==void 0?[`${t.amp}a`,`${t.amp} a`,`${t.amp}`,`${t.curve??""}${t.amp}`]:[];return Qt([t.id,t.label,t.type,m(o,`t_${t.type}`),...r,t.mA!==void 0?`${t.mA}ma`:"",t.cls,t.section,t.output,t.note,...t.zones.flatMap(s=>[s.floor,s.room]),e.id,e.label,n.id,n.label,t.sensor,t.current_sensor,t.voltage_sensor,t.state_entity,...t.zones.map(s=>s.sensor)].filter(s=>s!==void 0&&s!=="").join(" | "))}function en(t,e){let n=Qt(t).split(/\s+/).filter(Boolean),o=n.filter(s=>!s.startsWith("-")),r=n.filter(s=>s.startsWith("-")&&s.length>1).map(s=>s.slice(1));return!o.length&&!r.length?null:(s,a,d)=>{if(s.type==="free"&&!s.label)return!1;let i=so(s,a,d,e);return o.every(c=>i.includes(c))&&!r.some(c=>i.includes(c))}}function tn(t,e){let n=0;for(let o of t)for(let r of o.rows)for(let s of r.modules)e(s,r,o)&&n++;return n}var W=(t,e)=>e===void 0||e===""?f:h`<div class="kv"><span>${t}</span><b>${e}</b></div>`;function nn(t,e,n){let o=e.lang,r=j(e.hass,t),s=ce(t,r.kind),a=r.value!==null&&s?Math.min(100,Math.max(0,r.value)/s*100):null,d=Kt(e.hass,t,r),i=Je(e.hass,t.voltage_sensor),c=T(e.hass,t.state_entity),v=t.icon??(t.type==="breaker"?K[t.usage]:K[t.type]),$=u=>u?()=>e.moreInfo(u):void 0;return h`<div class="dlg">
    <header><ha-icon icon=${v??"mdi:electric-switch"}></ha-icon>
      <div><h3>${Te(t,e)}</h3><div class="dim">${m(o,`t_${t.type}`)} · ${t.id}</div></div>
      <button class="x" @click=${n} aria-label=${m(o,"close")}>✕</button></header>
    <div class="kvs">
      ${W(m(o,"rating"),t.amp!==void 0?`${t.curve??""}${t.amp} A`:void 0)}
      ${W(m(o,"poles"),t.poles)}
      ${W(m(o,"sensitivity"),t.mA!==void 0?`${t.mA} mA`:void 0)}
      ${W(m(o,"cls"),t.cls)}
      ${W(m(o,"output"),t.output)}
      ${t.type!=="differential"?f:W(m(o,"max"),t.max_w?Qe(t.max_w):void 0)}
      ${W(m(o,"phases"),t.phases.length?t.phases.join(" \xB7 "):void 0)}
      ${t.type==="breaker"&&t.usage!=="other"?W(m(o,"usage"),m(o,`u_${t.usage}`)):f}
      ${c===null?f:W(m(o,"state"),c?"ON":"OFF")}
      ${W("",t.note)}
    </div>
    ${r.configured||d!==null||i.value!==null?h`<div class="values">
          ${r.counters.map(u=>h`<div class="big ${u.value===null?"bad":""}" @click=${$(u.kind==="current"&&t.current_sensor&&t.sensor!==t.current_sensor?t.current_sensor:t.sensor)}>
                ${u.value===null?m(o,"unavailable"):`${u.partial?"\u2265 ":""}${O(u.kind,u.value)}`}
                <small>${m(o,u.source==="zones"?"sum_zones":u.source==="children"?"sum_children":"own_sensor")}</small></div>`)}
          ${d!==null&&!r.counters.some(u=>u.kind==="current")?W(m(o,"current"),`${d.toFixed(1)} A`):f}
          ${i.value!==null?W(m(o,"voltage"),`${i.value.toFixed(0)} V`):f}
          ${a!==null?h`<div class="bar"><i style=${`width:${a}%`} class=${a>=90?"high":a>=60?"warn":"ok"}></i></div>
            <div class="dim">${m(o,"load")} ${a.toFixed(0)} % / ${O(r.kind,s)}</div>`:f}
        </div>`:f}
    ${t.zones.length?h`<h4>${m(o,"zones")}</h4><ul class="zones">
          ${t.zones.map(u=>{let b=Z(e.hass,u.sensor);return h`<li class=${u.sensor?"click":""} @click=${$(u.sensor)}>
              <ha-icon icon=${u.icon??"mdi:map-marker-outline"}></ha-icon>
              <span>${[u.floor,u.room].filter(Boolean).join(" \xB7 ")}</span>
              ${u.sensor?h`<b class=${b.value===null?"bad":""}>${b.value===null?"n/d":O(b.kind,b.value)}</b>`:f}
            </li>`})}</ul>`:f}
    ${t.children?.length?h`<h4>${m(o,"protects")}</h4><ul class="zones">
          ${t.children.map(u=>{let b=j(e.hass,u);return h`<li class="click" @click=${()=>e.select(u)}>
              <span class="id">${u.id}</span><span>${Te(u,e)}</span>
              ${u.amp!==void 0?h`<small>${u.amp} A</small>`:f}
              ${b.counters.map(y=>h`<b class=${y.value===null?"bad":""}>${y.value===null?"n/d":O(y.kind,y.value)}</b>`)}
            </li>`})}</ul>`:f}
  </div>`}var nt=440,R=22,pe=14,ao=54,ye=34,sn=8,we=24,io="#2f9e44",lo="#e03131",on=["L1","L2","L3"],Q=t=>`var(--din-panel-phase-${t.toLowerCase()}-color, ${{L1:"#8b4513",L2:"#1a202c",L3:"#5a6474"}[t]??"#718096"})`,ee=(t,e=sn)=>t.length*e*.56;function rn(t,e,n=sn){if(ee(t,n)<=e)return t;let o=Math.floor(e/(n*.56))-1;return o<2?"":`${t.slice(0,o)}\u2026`}function an(t){return t<=700?nt:Math.max(nt,Math.round(t*nt/700))}function co(t,e){let n=e.floors?.[t];if(n?.bg)return{bg:n.bg,fg:n.fg??"#fff"};let o=0;for(let r of t)o=(o*31+r.charCodeAt(0))%360;return{bg:`hsl(${o} 45% 38%)`,fg:"#fff"}}function ot(t,e){let n=[];for(let o of t){if(e==="panels"){n.push(`p:${o.id}`);continue}for(let r of o.rows)for(let s of r.modules)e==="rows"&&s.type==="differential"&&s.children?.length&&n.push(`r:${o.id}/${r.id}/${s.id}`),e==="zones"&&s.type!=="differential"&&s.zones.length&&n.push(`z:${o.id}/${r.id}/${s.id}`)}return n}function ln(t,e,n){let o=n.width,r=n.config,s=1;for(let l of t)for(let p of l.rows)for(let x of p.modules)s=Math.max(s,j(e.hass,x).counters.length);for(let l of[r.sensors?.total,...Object.values(r.sensors?.phases??{})])s=Math.max(s,_e(e.hass,l).length);let a=o-Math.max(90,s*ao+6),d=[],i=new Set;for(let l of t)for(let p of l.rows)p.phases.forEach(x=>i.add(x)),p.modules.forEach(x=>x.phases.forEach(g=>i.add(g)));Object.keys(r.sensors?.phases??{}).forEach(l=>i.add(l.toUpperCase()));let c=[...on.filter(l=>i.has(l)),...[...i].filter(l=>!on.includes(l))],v=14,$=9,u=l=>v+c.indexOf(l)*$,b=v+Math.max(1,c.length)*$+8,y=new Map,S=new Map,k=8,z=l=>Math.max(20,ee(l,7)+10),ue=(l,p,x,g)=>C`
    <rect class="box" x=${l} y=${p-pe/2} width=${z(x)} height=${pe} rx="3" style=${g?`fill:${g};stroke:${g}`:""}></rect>
    <text class="boxt" x=${l+z(x)/2} y=${p+2.6} text-anchor="middle" style=${g?"fill:#fff":""}>${x}</text>`,B=(l,p,x,g,E="wire",A="")=>C`<line class=${E} x1=${l} y1=${p} x2=${x} y2=${g} style=${A}></line>`,Ce=(l,p,x="")=>({value:l.value,partial:l.partial,kind:l.kind,limit:p,tip:x});function L(l,p){let x=a;return p.map(g=>{let E=g.value===null?"n/d":`${g.partial?"\u2265 ":g.approx?"\u2248 ":""}${O(g.kind,g.value)}`,A=Math.max(36,ee(E,7.5)+10),_=x;x+=A+3;let w=g.value!==null&&g.limit?Math.max(0,g.value)/g.limit:null,M=w===null?"":w>1?"err":w>=.9?"high":w>=.6?"warn":"ok";return C`<g class="bubble k-${g.kind} ${g.value===null?"bad":""}">
        <title>${g.tip??""}</title>
        <rect class="bub" x=${_} y=${l-7} width=${A} height="14" rx="7"></rect>
        <text class="val" x=${_+A/2} y=${l+(w===null?2.6:.8)} text-anchor="middle">${E}</text>
        ${w!==null?C`<rect class="gbg" x=${_+7} y=${l+3.2} width=${A-14} height="1.8" rx=".9"></rect>
          <rect class="gfg ${M}" x=${_+7} y=${l+3.2} width=${(A-14)*Math.min(1,w)} height="1.8" rx=".9"></rect>`:f}
      </g>`})}let st=(l,p,x)=>C`<path class="chev" d=${x?`M${l-3},${p-1.5} L${l},${p+2} L${l+3},${p-1.5}`:`M${l-1.5},${p-3} L${l+2},${p} L${l-1.5},${p+3}`}></path>`,at=(l,p,x)=>C`<rect class="hit chevhit" x=${l-6} y=${p-8} width="12" height="16" tabindex="0" role="button" aria-label=${x} @click=${g=>{g.stopPropagation(),n.toggle(x)}} @keydown=${g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),g.stopPropagation(),n.toggle(x))}}></rect>`,Oe=(l,p,x=!0,g=a-2)=>x&&p+6<g?B(p+3,l,g,l,"conn"):f,ae=l=>l?.entity??l?.current_sensor??l?.voltage_sensor,it=l=>p=>{l&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),l())},he=(l,p,x="",g=!!p)=>g&&p?C`<rect class="hit" x="0" y=${l} width=${o} height=${R} tabindex="0" role="button" aria-label=${x} @click=${p} @keydown=${it(p)}><title>${x}</title></rect>`:C`<rect class="hit" x="0" y=${l} width=${o} height=${R}><title>${x}</title></rect>`,lt=l=>_e(e.hass,l).map(p=>({value:p.value,kind:p.kind,partial:!1,approx:p.approx,limit:p.kind==="power"?l?.max_w:void 0,tip:p.approx?"U \u2248 P / I":p.entity})),He=new Map;for(let l of t)for(let p of l.rows)for(let x of p.modules){He.set(x,{row:p,panel:l});for(let g of x.children??[])He.set(g,{row:p,panel:l})}let dt=l=>{let p=He.get(l);return!!p&&!!e.search&&e.search(l,p.row,p.panel)},ct=(l,p=!1)=>e.search?dt(l)||p&&(l.children??[]).some(dt)?"s-hit":"s-dim":"",cn=new Map(Re(e.hass,r.sensors,"Total").map(l=>[l.key,l])),pt=(l,p,x,g)=>{let E=a-8;if(x===null||E-p<24)return Oe(l,p-3,g);let A=E-p,_=x>1?"err":x>=.9?"high":x>=.6?"warn":"";return C`<rect class="hg-bg" x=${p} y=${l-2.5} width=${A} height="5" rx="2.5"></rect>
      <rect class="hg-fg ${_}" x=${p} y=${l-2.5} width=${Math.max(2.5,A*Math.min(1,x))} height="5" rx="2.5"></rect>`},te=r.sensors?.total;if(te?.entity||te?.current_sensor||te?.voltage_sensor){let l=k+R/2,p=lt(te);d.push(C`<g style="--acc:var(--primary-color)">${ue(b,l,"Total")}
      <text x=${b+z("Total")+6} y=${l+2.8} class="dim">Total</text>
      ${pt(l,b+z("Total")+10+ee("Total"),null,p.length>0)}
      ${L(l,p)}
      ${he(k,()=>e.moreInfo(ae(te)),ae(te),!!ae(te))}</g>`),k+=R}for(let l of c){let p=k+R/2;y.set(l,p),S.set(l,p);let x=Object.entries(r.sensors?.phases??{}).find(([A])=>A.toUpperCase()===l)?.[1],g=lt(x),E=cn.get(l);d.push(C`<g>
      ${B(u(l),p,b,p,"tap",`stroke:${Q(l)}`)}
      <circle cx=${u(l)} cy=${p} r="2.6" style=${`fill:${Q(l)}`}></circle>
      ${ue(b,p,l,Q(l))}
      ${g.length?C`${pt(p,b+z(l)+8,E?.pct??null,!0)}${L(p,g)}
        ${he(k,()=>e.moreInfo(ae(x)),ae(x),!!ae(x))}`:f}</g>`),k+=R}function ut(l,p,x,g,E,A,_=!1,w=x.id){let M=T(e.hass,x.state_entity),H=z(w),N=E?x.icon??(x.type==="breaker"?K[x.usage]:K[x.type]):void 0,U=A?10:0,P=p+H+(N?18:6)+U,D=rn(g??"",a-8-P-(M===null?0:we+4));return C`${ue(p,l,w,M===null?void 0:M?io:lo)}
      ${A?st(p+H+5,l,A==="open"):f}
      ${N?C`<foreignObject width="24" height="24" transform=${`translate(${p+H+4+U} ${l-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${N} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:f}
      ${D?C`<text x=${P} y=${l+2.8}>${D}</text>`:f}
      ${Oe(l,D?P+ee(D):P-2,_||M!==null,_?a-2:a-we-6)}
      ${M===null?f:C`<g class="spill ${M?"on":"off"}"><rect x=${a-we-4} y=${l-6} width=${we} height="12" rx="6"></rect>
        <text class="spillt" x=${a-we/2-4} y=${l+2.4} text-anchor="middle">${M?"ON":"OFF"}</text></g>`}`}let pn=(l,p)=>(p.kind==="current"&&l.current_sensor?l.current_sensor:l.sensor)??"";function ht(l){let p=j(e.hass,l);return L(k+R/2,p.counters.map(x=>Ce(x,ce(l,x.kind),pn(l,x))))}function un(l,p){let x=p+8,g=0,E=k+R/2,A=l.icon??(l.type==="breaker"?K[l.usage]:K[l.type]);for(let _ of l.zones){let w=_.icon??A,M=k+R/2,H=_.sensor?Z(e.hass,_.sensor):void 0,N=_.floor?co(_.floor,r):void 0,U=_.floor?ee(_.floor,6.5)+10:0,P=p+ye+(_.floor?U+4:0),D=P+(w?16:0),ie=rn(_.room??"",a-8-D);d.push(C`<g>
        ${B(x,M,p+ye,M)}
        ${N?C`<rect x=${p+ye} y=${M-6} width=${U} height="12" rx="6" style=${`fill:${N.bg}`}></rect>
          <text class="pillt" x=${p+ye+U/2} y=${M+2.3} text-anchor="middle" style=${`fill:${N.fg}`}>${_.floor}</text>`:f}
        ${w?C`<foreignObject width="24" height="24" transform=${`translate(${P} ${M-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${w} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:f}
        ${ie?C`<text x=${D} y=${M+2.8}>${ie}</text>`:f}
        ${Oe(M,D+ee(ie),!!H)}
        ${H?L(M,[{value:H.value,kind:H.kind,partial:!1,tip:_.sensor}]):f}
        ${he(k,_.sensor?()=>e.moreInfo(_.sensor):void 0,[_.floor,_.room].filter(Boolean).join(" \xB7 "))}</g>`),g=M,k+=R}return{first:E,last:g}}function ft(l,p,x,g,E,A,_=[]){let w=k+R/2;for(let P of _)S.set(P,Math.max(S.get(P)??0,w));let M=`z:${g}/${E}/${l.id}`,H=l.zones.length>0,N=H&&!n.collapsed.has(M),U=p+z(l.id)+5;if(d.push(C`<g class=${ct(l)} style=${`--acc:${l.accent??x}`}>
      ${A!==void 0?B(A,w,p,w):f}
      ${_.length?B(u(_[0]),w,p,w,"tap",`stroke:${Q(_[0])}`):f}
      ${_.map(P=>C`<circle cx=${u(P)} cy=${w} r="2.6" style=${`fill:${Q(P)}`}></circle>`)}
      ${ut(w,p,l,hn(l),!0,H?N?"open":"closed":void 0,j(e.hass,l).configured)}
      ${ht(l)}
      ${he(k,()=>e.select(l),gt(l))}
      ${H?at(U,w,M):f}</g>`),k+=R,N){let P=d.length,D=un(l,p);d.splice(P,0,C`<g>${B(p+8,w+pe/2,p+8,D.last)}</g>`)}return w}let hn=l=>l.label,gt=l=>[l.label,l.id,l.amp!==void 0?`${l.amp} A`:"",l.mA!==void 0?`${l.mA} mA`:""].filter(Boolean).join(" \xB7 ");function fn(l,p,x,g,E=l.id){let A=k+R/2,_=`r:${g}/${p.id}/${l.id}`,w=l.children??[],M=w.length>0&&!n.collapsed.has(_),H=b+z(E)+5,N=l.accent??p.accent??"#3182ce",U=(l.phases.length?l.phases:p.phases).filter(V=>c.includes(V));for(let V of U)S.set(V,Math.max(S.get(V)??0,A));if(d.push(C`<g class=${ct(l,!0)} style=${`--acc:${N}`}>
      ${U.length?B(u(U[0]),A,b,A,"tap",`stroke:${Q(U[0])}`):f}
      ${U.map(V=>C`<circle cx=${u(V)} cy=${A} r="2.6" style=${`fill:${Q(V)}`}></circle>`)}
      ${ut(A,b,l,x,!1,w.length?M?"open":"closed":void 0,j(e.hass,l).configured,E)}
      ${ht(l)}
      ${he(k,()=>e.select(l),gt(l))}
      ${w.length?at(H,A,_):f}</g>`),k+=R,!M)return;let P=b+8,D=d.length,ie=A;for(let V of w)ie=ft(V,b+ye,N,g,p.id,P);w.length&&d.splice(D,0,C`<g style=${`--acc:${N}`}>${B(P,A+pe/2,P,ie)}</g>`)}for(let l of t){let p=`p:${l.id}`,x=!n.collapsed.has(p);if(l.label){let g=k+R/2,E=Math.max(60,ee(l.label,9.8)+28);d.push(C`<g style="--acc:var(--secondary-text-color)">
        <rect class="ptbox" x=${b} y=${g-pe/2-1} width=${E} height=${pe+2} rx="3"></rect>
        ${st(b+8,g,x)}
        <text class="ptitle" x=${b+16} y=${g+3}>${l.label}</text>
        <rect class="hit" x="0" y=${k} width=${o} height=${R} tabindex="0" role="button" aria-label=${l.label} @click=${()=>n.toggle(p)} @keydown=${it(()=>n.toggle(p))}><title>${l.label}</title></rect></g>`),k+=R}if(!(!x&&l.label))for(let g of l.rows){let E=g.modules.filter(_=>_.type==="differential"),A=E.length?g.modules.indexOf(E[0]):g.modules.length;for(let _ of g.modules.slice(0,A))_.type==="free"&&!_.label||ft(_,b,g.accent??"#3182ce",l.id,g.id,void 0,(_.phases.length?_.phases:g.phases).filter(w=>c.includes(w)));for(let _ of E)fn(_,g,[g.label,_.label].filter(Boolean).join(" - ")||void 0,l.id)}}let gn=c.map(l=>B(u(l),y.get(l),u(l),S.get(l),"trunk",`stroke:${Q(l)}`)),mn=k+8;return h`<div class="dia" style=${`max-width:${n.maxWidth}px`}>
    <svg viewBox=${`0 0 ${o} ${mn}`} width="100%" preserveAspectRatio="xMidYMin meet" role="img">${gn}${d}</svg></div>`}var po=["differential","breaker","contactor_daynight","contactor","relay","impulse","psu","surge","meter","free","custom"],uo=["id","type","label","amp","poles","width","mA","class","curve","usage","phases","sensor","current_sensor","voltage_sensor","state_entity","icon","max_w","accent","output","section"],rt=["l1","l2","l3"],F=(t,e)=>({number:{min:t,max:e,mode:"box"}}),ke=class extends q{constructor(){super(...arguments);this._open=new Set(["sec:general"]);this._lbl=n=>{let o=/^(l[123])_(entity|current|volt|max)$/.exec(n.name);return o?`${o[1].toUpperCase()} \xB7 ${m(this.L,o[2]==="entity"?"head_sensor":o[2]==="current"?"current_sensor":o[2]==="volt"?"voltage_sensor":"max_w")}`:m(this.L,n.name==="class"?"cls":n.name==="total_current"?"current_sensor":n.name==="total_volt"?"voltage_sensor":n.name)}}setConfig(n){this._config=n}get L(){return this._config?.language??this._hassLang}get _hassLang(){return this.hass?.language?.startsWith("fr")?"fr":"en"}_emit(n){this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}_panels(){return structuredClone(this._config.panels??[])}_setPanels(n){this._emit({...this._config,panels:n})}_sec(n,o,r,s=f){let a=this._open.has(n);return h`<details class="blk" ?open=${a} @toggle=${d=>{let i=d.currentTarget;d.target!==i||i.open===this._open.has(n)||(i.open?this._open.add(n):this._open.delete(n),this.requestUpdate())}}><summary><span>${o}</span>${s}</summary>${a?r():f}</details>`}_general(){let n=this._config,o={title:n.title,incoming_title:n.incoming_title,nominal_voltage:n.nominal_voltage,language:n.language??this._hassLang,module_width:n.module_width,view:n.view??"panel",modules_per_row:n.modules_per_row,max_width:n.max_width,collapsed:n.collapsed??"none",search:n.search!==!1},r=[{name:"title",selector:{text:{}}},{name:"incoming_title",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"language",selector:{select:{options:["fr","en"]}}},{name:"module_width",selector:F(30,90)}]},{name:"max_width",selector:F(300,3e3)},{name:"nominal_voltage",selector:F(100,480)},{name:"modules_per_row",selector:F(1,60)},{name:"collapsed",selector:{select:{options:[{value:"none",label:"\u2014"},{value:"zones",label:m(this.L,"zones")},{value:"rows",label:m(this.L,"row")},{value:"panels",label:m(this.L,"panel")}]}}},{name:"search",selector:{boolean:{}}},{name:"view",selector:{select:{options:[{value:"panel",label:m(this.L,"view_panel")},{value:"tree",label:m(this.L,"view_tree")}]}}}];return h`<ha-form .hass=${this.hass} .data=${o} .schema=${r} .computeLabel=${this._lbl}
      @value-changed=${s=>{let a=s.detail.value,d={...n,title:a.title||void 0,incoming_title:a.incoming_title||void 0,nominal_voltage:a.nominal_voltage||void 0,language:a.language,module_width:a.module_width||void 0,view:a.view==="tree"?"tree":void 0,max_width:a.max_width||void 0,modules_per_row:a.modules_per_row||void 0,collapsed:a.collapsed&&a.collapsed!=="none"?a.collapsed:void 0,search:a.search===!1?!1:void 0};for(let i of Object.keys(d))d[i]===void 0&&delete d[i];this._emit(d)}}></ha-form>`}_sensors(){let n=this._config,o=n.sensors??{},r=i=>Object.keys(o.phases??{}).find(c=>c.toLowerCase()===i)??i,s={};for(let i of rt){let c=o.phases?.[r(i)];s[`${i}_entity`]=c?.entity,s[`${i}_current`]=c?.current_sensor,s[`${i}_volt`]=c?.voltage_sensor,s[`${i}_max`]=c?.max_w}let a={total_entity:o.total?.entity,total_current:o.total?.current_sensor,total_volt:o.total?.voltage_sensor,total_max:o.total?.max_w,...s},d=[{type:"grid",name:"",schema:[{name:"total_entity",selector:{entity:{domain:"sensor"}}},{name:"total_current",selector:{entity:{domain:"sensor"}}},{name:"total_volt",selector:{entity:{domain:"sensor"}}}]},{name:"total_max",selector:F(0,1e5)},...rt.map(i=>({type:"grid",name:"",schema:[{name:`${i}_entity`,selector:{entity:{domain:"sensor"}}},{name:`${i}_current`,selector:{entity:{domain:"sensor"}}},{name:`${i}_volt`,selector:{entity:{domain:"sensor"}}},{name:`${i}_max`,selector:F(0,1e5)}]}))];return h`<ha-form .hass=${this.hass} .data=${a} .schema=${d} .computeLabel=${this._lbl}
      @value-changed=${i=>{let c=i.detail.value,v={...n},$={...o.total??{},entity:c.total_entity||void 0,current_sensor:c.total_current||void 0,voltage_sensor:c.total_volt||void 0,max_w:c.total_max||void 0};for(let y of Object.keys($))$[y]===void 0&&delete $[y];let u={...o.phases??{}};for(let y of rt){let S=r(y),k={...u[S]??{},entity:c[`${y}_entity`]||void 0,current_sensor:c[`${y}_current`]||void 0,voltage_sensor:c[`${y}_volt`]||void 0,max_w:c[`${y}_max`]||void 0};for(let z of Object.keys(k))k[z]===void 0&&delete k[z];Object.keys(k).length?u[S]=k:delete u[S]}let b={...o,total:Object.keys($).length?$:void 0,phases:Object.keys(u).length?u:void 0};for(let y of Object.keys(b))b[y]===void 0&&delete b[y];Object.keys(b).length?v.sensors=b:delete v.sensors,this._emit(v)}}></ha-form>`}_moduleSchema(n){let o=this.L,r=n==="differential";return[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"type",selector:{select:{mode:"dropdown",options:po.map(s=>({value:s,label:m(o,`t_${s}`)}))}}}]},{name:"label",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"amp",selector:F(1,250)},{name:"poles",selector:F(1,4)},{name:"width",selector:F(1,12)},...r?[{name:"mA",selector:F(1,1e3)},{name:"class",selector:{select:{options:["AC","A","F","B"]}}}]:[{name:"curve",selector:{select:{options:["B","C","D"]}}}]]},...n==="breaker"?[{name:"usage",selector:{select:{options:["power","socket","light","other"].map(s=>({value:s,label:m(o,`u_${s}`)}))}}}]:[],{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}},{name:"sensor",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"current_sensor",selector:{entity:{domain:"sensor"}}},{name:"voltage_sensor",selector:{entity:{domain:"sensor"}}}]},...n==="psu"?[{name:"output",selector:{text:{}}}]:[],{name:"state_entity",selector:{entity:{}}},{name:"section",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"icon",selector:{icon:{}}},{name:"max_w",selector:F(0,1e5)}]}]}_patchModule(n,o,r,s){let a=this._panels(),d=a[n].rows[o].modules[r];for(let i of uo){let c=s[i];c===void 0||c===""||c===null||Array.isArray(c)&&!c.length||typeof c=="number"&&Number.isNaN(c)?delete d[i]:d[i]=c}this._setPanels(a)}_zones(n,o,r,s){let a=this.L,d=[{type:"grid",name:"",schema:[{name:"floor",selector:{text:{}}},{name:"room",selector:{text:{}}}]},{name:"sensor",selector:{entity:{domain:"sensor"}}},{name:"icon",selector:{icon:{}}}],i=(s.zones??[]).map(c=>typeof c=="string"?{room:c}:c);return h`${i.map((c,v)=>h`<div class="blk"><ha-form .hass=${this.hass} .data=${c} .schema=${d} .computeLabel=${this._lbl}
        @value-changed=${$=>{let u=this._panels(),b=u[n].rows[o].modules[r],y=[...b.zones??[]],S={};for(let[k,z]of Object.entries($.detail.value))z!==""&&z!==void 0&&(S[k]=z);y[v]=S,b.zones=y,this._setPanels(u)}}></ha-form>
      <button class="danger" @click=${()=>{let $=this._panels(),u=$[n].rows[o].modules[r];u.zones=(u.zones??[]).filter((b,y)=>y!==v),u.zones.length||delete u.zones,this._setPanels($)}}>${m(a,"remove")}</button></div>`)}
      <button class="add" @click=${()=>{let c=this._panels(),v=c[n].rows[o].modules[r];v.zones=[...v.zones??[],{}],this._setPanels(c)}}>+ ${m(a,"add_zone")}</button>`}_module(n,o,r,s){let a=this.L,d=String(s.type??"breaker"),i=`${n}/${o}/${r}`,c=this._open.has(i),v=u=>b=>{b.preventDefault(),b.stopPropagation(),u()},$=u=>{let b=this._panels(),y=b[n].rows[o].modules,S=r+u;S<0||S>=y.length||([y[r],y[S]]=[y[S],y[r]],this._setPanels(b))};return h`<details class="blk" ?open=${c} @toggle=${u=>{let b=u.currentTarget;u.target!==b||b.open===this._open.has(i)||(b.open?this._open.add(i):this._open.delete(i),this.requestUpdate())}}><summary><span>${m(a,`t_${d}`)} · ${s.id??""} ${s.amp?`${s.amp} A`:""}</span>
        <button @click=${v(()=>$(-1))}>◀</button><button @click=${v(()=>$(1))}>▶</button>
        <button class="danger" @click=${v(()=>{let u=this._panels();u[n].rows[o].modules.splice(r,1),this._setPanels(u)})}>✕</button></summary>
      ${c?h`<ha-form .hass=${this.hass} .data=${s} .schema=${this._moduleSchema(d)} .computeLabel=${this._lbl}
        @value-changed=${u=>this._patchModule(n,o,r,u.detail.value)}></ha-form>
      <div class="note">${m(a,"zones")}</div>${this._zones(n,o,r,s)}`:f}
    </details>`}_row(n,o,r){let s=this.L,a=d=>i=>{i.preventDefault(),i.stopPropagation(),d()};return h`<details class="blk" open><summary><span>${m(s,"row")} · ${r.label??r.id??o+1}</span>
        <button class="danger" @click=${a(()=>{let d=this._panels();d[n].rows.splice(o,1),this._setPanels(d)})}>✕</button></summary>
      <ha-form .hass=${this.hass} .data=${{id:r.id,label:r.label,phases:r.phases}}
        .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}}]}
        .computeLabel=${this._lbl}
        @value-changed=${d=>{let i=this._panels(),c=i[n].rows[o];for(let v of["id","label","phases"]){let $=d.detail.value[v];$===void 0||$===""||Array.isArray($)&&!$.length?delete c[v]:c[v]=$}this._setPanels(i)}}></ha-form>
      ${(r.modules??[]).map((d,i)=>this._module(n,o,i,d))}
      <button class="add" @click=${()=>{let d=this._panels(),i=d[n].rows[o];i.modules=[...i.modules??[],{type:i.modules?.length?"breaker":"differential",id:`${i.id??o+1}-${(i.modules?.length??0)+1}`,amp:i.modules?.length?16:40}],this._setPanels(d)}}>+ ${m(s,"add_module")}</button>
    </details>`}render(){if(!this._config)return f;let n=this.L,o=this._config,r=!!o.groups&&!o.panels;return h`${this._sec("sec:general",m(n,"general"),()=>this._general())}
      ${this._sec("sec:sensors",m(n,"global_sensors"),()=>this._sensors())}
      ${r?h`<div class="banner">${m(n,"legacy")}
            <button @click=${()=>{let s={...o,panels:Ye(o.groups)};delete s.groups,this._emit(s)}}>${m(n,"convert")}</button></div>`:f}
      ${(o.panels??[]).map((s,a)=>this._sec(`p:${a}`,`${m(n,"panel")} \xB7 ${s.label??s.id??a+1}`,()=>h`
        <ha-form .hass=${this.hass} .data=${{id:s.id,label:s.label,modules_per_row:s.modules_per_row}} .computeLabel=${this._lbl}
          .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"modules_per_row",selector:F(1,60)}]}
          @value-changed=${d=>{let i=this._panels();i[a].id=d.detail.value.id||void 0,i[a].label=d.detail.value.label||void 0,i[a].modules_per_row=d.detail.value.modules_per_row||void 0,this._setPanels(i)}}></ha-form>
        ${(s.rows??[]).map((d,i)=>this._row(a,i,d))}
        <button class="add" @click=${()=>{let d=this._panels();d[a].rows=[...d[a].rows??[],{id:`row_${(d[a].rows?.length??0)+1}`,modules:[]}],this._setPanels(d)}}>+ ${m(n,"add_row")}</button>`,h`<button class="danger" @click=${d=>{d.preventDefault(),d.stopPropagation();let i=this._panels();i.splice(a,1),this._open=new Set([...this._open].filter(c=>!c.startsWith("p:")&&!/^\d/.test(c))),this._setPanels(i)}}>✕</button>`))}
      <button class="add" @click=${()=>{let s=this._panels();s.push({id:`tableau_${s.length+1}`,rows:[]}),this._setPanels(s)}}>+ ${m(n,"add_panel")}</button>
      <div class="note">${m(n,"editor_note")}</div>`}};ke.properties={hass:{attribute:!1},_config:{state:!0}},ke.styles=Ot;customElements.get("din-panel-card-editor")||customElements.define("din-panel-card-editor",ke);var dn="din-panel-card:view";function ho(t){let e=`${t.title??""}|${(t.panels??[]).map(o=>o.id??o.label??"").join(",")}|${(t.groups??[]).length}`,n=0;for(let o of e)n=n*31+o.charCodeAt(0)|0;return(n>>>0).toString(36)}var Ae=class extends q{constructor(){super(...arguments);this._viewKey=dn;this._qi=-1;this._panels=[];this._entities=[]}static getConfigElement(){return document.createElement("din-panel-card-editor")}static getStubConfig(){return{type:"custom:din-panel-card",panels:[{id:"tableau_1",label:"Tableau principal",rows:[{id:"row_1",label:"Rang\xE9e 1",phases:["L1"],modules:[{type:"differential",id:"ID1",amp:40,mA:30,poles:2,class:"AC"},{type:"breaker",id:"1-1",amp:16,label:"Prises",usage:"socket"},{type:"breaker",id:"1-2",amp:10,label:"Lumi\xE8res",usage:"light"}]}]}]}}setConfig(n){It(n),this._panels=Ut(n),this._entities=jt(n,this._panels),this._config=n,this._selected=null;let o=n.collapsed;this._collapsed=new Set(o==="zones"||o==="rows"||o==="panels"?ot(this._panels,o):[]),this._cw=0;let r=null;if(this._viewKey=`${dn}:${ho(n)}`,n.view!=="tree"&&n.view!=="panel")try{r=localStorage.getItem(this._viewKey)}catch{}this._view=n.view==="tree"||n.view==="panel"?n.view:r==="tree"?"tree":"panel"}_toggle(n){let o=new Set(this._collapsed);o.has(n)?o.delete(n):o.add(n),this._collapsed=o}_collapseOne(){for(let n of["zones","rows","panels"]){let o=ot(this._panels,n);if(o.some(r=>!this._collapsed.has(r))){this._collapsed=new Set([...this._collapsed,...o]);return}}}_setView(n){if(this._view=n,this._config?.view!=="tree"&&this._config?.view!=="panel")try{localStorage.setItem(this._viewKey,n)}catch{}}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._ro=new ResizeObserver(n=>{let o=Math.round(n[0]?.contentRect.width??0);o>0&&o!==this._cw&&(this._cw=o)}),this._ro.observe(this))}disconnectedCallback(){this._ro?.disconnect(),this._ro=void 0,super.disconnectedCallback()}set hass(n){let o=this._hass;this._hass=n,(!o||o.language!==n.language||o.themes?.darkMode!==n.themes?.darkMode||this._entities.some(r=>o.states[r]!==n.states[r]))&&this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 2+this._panels.reduce((n,o)=>n+o.rows.length*3,0)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}get _lang(){return this._config?.language??(this._hass?.language?.startsWith("fr")?"fr":"en")}_summary(n){if(!this._hass)return f;let o=Re(this._hass,this._config?.sensors,m(n,"total"));if(!o.length)return f;let r=Math.max(0,...this._panels.map(a=>a.capacity??0)),s=a=>a.value===null?m(n,"unavailable"):`${a.approx?"\u2248 ":""}${O(a.kind,a.value)}`;return h`<div class="panel incoming ${r?"fixed":""}" style=${r?`--n:${r}`:""}>
      ${this._config?.incoming_title??m(n,"incoming")?h`<div class="panel-title">${this._config?.incoming_title??m(n,"incoming")}</div>`:f}
      <div class="in-plate">${o.map(a=>{let d=a.key==="total",i=a.pct===null?"":a.pct>1?"err":a.pct>=.9?"high":a.pct>=.6?"warn":"";return h`<div class="in-row ${d?"total":""}" title=${a.entity??""}
            @click=${()=>a.entity&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:a.entity},bubbles:!0,composed:!0}))}>
          ${d?h`<b class="in-label">${a.label}</b>`:h`<span class="chip ph-${a.key.toLowerCase()} in-label">${a.label}</span>`}
          <div class="in-track">${!d&&a.pct!==null?h`<i class=${i} style=${`width:${Math.max(1.5,Math.min(1,a.pct)*100)}%`}></i>`:f}</div>
          <div class="in-vals">${a.items.map(c=>h`<span class="k-${c.kind} ${c.value===null?"bad":""}">${s(c)}</span>`)}</div>
        </div>`})}</div>
    </div>`}_searchKey(n){if(n.key==="Escape"){this._q="",this._qi=-1;return}if(n.key!=="Enter")return;n.preventDefault();let o=[...this.shadowRoot?.querySelectorAll(".mod.s-hit, .dia g.s-hit")??[]];o.length&&(this._qi=(this._qi+1)%o.length,o[this._qi].scrollIntoView?.({block:"center",inline:"center",behavior:"smooth"}))}render(){if(!this._config||!this._hass)return f;let n=this._lang,o={hass:this._hass,lang:n,select:u=>{this._selected=u},moreInfo:u=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:u},bubbles:!0,composed:!0}))},r=this._q??"",s=en(r,n);s&&(o.search=s);let a=s?tn(this._panels,s):0,d=!!this._hass.themes?.darkMode,i=Number(this._config.module_width),c=this._view==="tree",v=Number(this._config.max_width)>0?Number(this._config.max_width):700,$=an(Math.min(this._cw||v,v));return h`<ha-card class=${d?"dark":""} style=${i>0?`--u:${i}px`:""}>
      <div class="toolbar">
        <h2>${this._config.title??""}</h2>
        ${this._config.search===!1?f:h`<div class="search">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input type="text" .value=${r} placeholder=${m(n,"search_ph")} aria-label=${m(n,"search")} enterkeyhint="search"
            @input=${u=>{this._q=u.target.value,this._qi=-1}}
            @keydown=${u=>this._searchKey(u)} />
          ${r?h`<span class="count" aria-live="polite">${a?`${a} ${m(n,"result")}${a>1?"s":""}`:m(n,"no_result")}</span>
            <button class="clr" title=${m(n,"clear")} aria-label=${m(n,"clear")} @click=${()=>{this._q="",this._qi=-1}}><ha-icon icon="mdi:close"></ha-icon></button>`:f}
        </div>`}
        ${c?h`
          <button class="tbtn" @click=${()=>{this._collapsed=new Set}}>
            <ha-icon icon="mdi:unfold-more-horizontal"></ha-icon><span>${m(n,"expand_all")}</span></button>
          <button class="tbtn" @click=${()=>this._collapseOne()}>
            <ha-icon icon="mdi:unfold-less-horizontal"></ha-icon><span>${m(n,"collapse_level")}</span></button>`:f}
        <button class="tbtn" aria-pressed=${c} title=${m(n,c?"view_panel":"view_tree")}
          @click=${()=>this._setView(c?"panel":"tree")}>
          <ha-icon icon=${c?"mdi:view-dashboard-outline":"mdi:file-tree"}></ha-icon>
          <span>${m(n,c?"view_panel":"view_tree")}</span></button>
      </div>
      ${c?f:this._summary(n)}
      ${c?ln(this._panels,o,{config:this._config,width:$,maxWidth:v,collapsed:s?new Set:this._collapsed,toggle:u=>this._toggle(u)}):this._panels.map(u=>Jt(u,o))}
      ${this._selected?h`<dialog @close=${()=>{this._selected=null}}
            @click=${u=>{u.target===u.currentTarget&&u.currentTarget.close()}}>
            ${nn(this._selected,o,()=>this.shadowRoot?.querySelector("dialog")?.close())}</dialog>`:f}
    </ha-card>`}updated(){let n=this.shadowRoot?.querySelector("dialog");n&&this._selected&&!n.open&&n.showModal()}};Ae.properties={_config:{state:!0},_selected:{state:!0},_view:{state:!0},_collapsed:{state:!0},_cw:{state:!0},_q:{state:!0}},Ae.styles=Tt;customElements.get("din-panel-card")||customElements.define("din-panel-card",Ae);console.info("%c DIN-PANEL-CARD %c v1.18.0 ","color:#fff;background:#3182ce;font-weight:700","color:#3182ce;background:#fff");window.customCards=window.customCards||[];window.customCards.push({type:"din-panel-card",name:"DIN Panel Card",description:"Tableau \xE9lectrique modulaire graphique (rang\xE9es, rail DIN, modules) aliment\xE9 par les entit\xE9s Home Assistant.",preview:!1});
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
