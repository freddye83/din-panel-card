var Ee=globalThis,ze=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),wt=new WeakMap,me=class{constructor(t,n,o){if(this._$cssResult$=!0,o!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o,n=this.t;if(ze&&t===void 0){let o=n!==void 0&&n.length===1;o&&(t=wt.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&wt.set(n,t))}return t}toString(){return this.cssText}},kt=e=>new me(typeof e=="string"?e:e+"",void 0,We),Le=(e,...t)=>{let n=e.length===1?e[0]:t.reduce((o,s,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[r+1],e[0]);return new me(n,e,We)},At=(e,t)=>{if(ze)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of t){let o=document.createElement("style"),s=Ee.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=n.cssText,e.appendChild(o)}},Fe=ze?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(let o of t.cssRules)n+=o.cssText;return kt(n)})(e):e;var{is:An,defineProperty:Cn,getOwnPropertyDescriptor:Mn,getOwnPropertyNames:Sn,getOwnPropertySymbols:En,getPrototypeOf:zn}=Object,Pe=globalThis,Ct=Pe.trustedTypes,Ln=Ct?Ct.emptyScript:"",Pn=Pe.reactiveElementPolyfillSupport,be=(e,t)=>e,Be={toAttribute(e,t){switch(t){case Boolean:e=e?Ln:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},St=(e,t)=>!An(e,t),Mt={attribute:!0,type:String,converter:Be,reflect:!1,useDefault:!1,hasChanged:St};Symbol.metadata??=Symbol("metadata"),Pe.litPropertyMetadata??=new WeakMap;var Y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Mt){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){let o=Symbol(),s=this.getPropertyDescriptor(t,o,n);s!==void 0&&Cn(this.prototype,t,s)}}static getPropertyDescriptor(t,n,o){let{get:s,set:r}=Mn(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get:s,set(a){let d=s?.call(this);r?.call(this,a),this.requestUpdate(t,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mt}static _$Ei(){if(this.hasOwnProperty(be("elementProperties")))return;let t=zn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(be("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(be("properties"))){let n=this.properties,o=[...Sn(n),...En(n)];for(let s of o)this.createProperty(s,n[s])}let t=this[Symbol.metadata];if(t!==null){let n=litPropertyMetadata.get(t);if(n!==void 0)for(let[o,s]of n)this.elementProperties.set(o,s)}this._$Eh=new Map;for(let[n,o]of this.elementProperties){let s=this._$Eu(n,o);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let n=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let s of o)n.unshift(Fe(s))}else t!==void 0&&n.push(Fe(t));return n}static _$Eu(t,n){let o=n.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,n=this.constructor.elementProperties;for(let o of n.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,o){this._$AK(t,o)}_$ET(t,n){let o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){let r=(o.converter?.toAttribute!==void 0?o.converter:Be).toAttribute(n,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,n){let o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Be;this._$Em=s;let d=a.fromAttribute(n,r.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(t,n,o,s=!1,r){if(t!==void 0){let a=this.constructor;if(s===!1&&(r=this[t]),o??=a.getPropertyOptions(t),!((o.hasChanged??St)(r,n)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,o))))return;this.C(t,n,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:o,reflect:s,wrapped:r},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??n??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(n=void 0),this._$AL.set(t,n)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[s,r]of o){let{wrapped:a}=r,d=this[s];a!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,r,d)}}let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(n)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[be("elementProperties")]=new Map,Y[be("finalized")]=new Map,Pn?.({ReactiveElement:Y}),(Pe.reactiveElementVersions??=[]).push("2.1.2");var Xe=globalThis,Et=e=>e,Re=Xe.trustedTypes,zt=Re?Re.createPolicy("lit-html",{createHTML:e=>e}):void 0,Nt="$lit$",Q=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+Q,Rn=`<${Ht}>`,ie=document,$e=()=>ie.createComment(""),ve=e=>e===null||typeof e!="object"&&typeof e!="function",Je=Array.isArray,Tn=e=>Je(e)||typeof e?.[Symbol.iterator]=="function",Ke=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Pt=/>/g,re=RegExp(`>|${Ke}(?:([^\\s"'>=/]+)(${Ke}*=${Ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rt=/'/g,Tt=/"/g,It=/^(?:script|style|textarea|title)$/i,Qe=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),u=Qe(1),M=Qe(2),Eo=Qe(3),le=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ot=new WeakMap,ae=ie.createTreeWalker(ie,129);function Ut(e,t){if(!Je(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zt!==void 0?zt.createHTML(t):t}var On=(e,t)=>{let n=e.length-1,o=[],s,r=t===2?"<svg>":t===3?"<math>":"",a=xe;for(let d=0;d<n;d++){let l=e[d],c,x,g=-1,h=0;for(;h<l.length&&(a.lastIndex=h,x=a.exec(l),x!==null);)h=a.lastIndex,a===xe?x[1]==="!--"?a=Lt:x[1]!==void 0?a=Pt:x[2]!==void 0?(It.test(x[2])&&(s=RegExp("</"+x[2],"g")),a=re):x[3]!==void 0&&(a=re):a===re?x[0]===">"?(a=s??xe,g=-1):x[1]===void 0?g=-2:(g=a.lastIndex-x[2].length,c=x[1],a=x[3]===void 0?re:x[3]==='"'?Tt:Rt):a===Tt||a===Rt?a=re:a===Lt||a===Pt?a=xe:(a=re,s=void 0);let $=a===re&&e[d+1].startsWith("/>")?" ":"";r+=a===xe?l+Rn:g>=0?(o.push(c),l.slice(0,g)+Nt+l.slice(g)+Q+$):l+Q+(g===-2?d:$)}return[Ut(e,r+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},_e=class e{constructor({strings:t,_$litType$:n},o){let s;this.parts=[];let r=0,a=0,d=t.length-1,l=this.parts,[c,x]=On(t,n);if(this.el=e.createElement(c,o),ae.currentNode=this.el.content,n===2||n===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=ae.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let g of s.getAttributeNames())if(g.endsWith(Nt)){let h=x[a++],$=s.getAttribute(g).split(Q),y=/([.?@])?(.*)/.exec(h);l.push({type:1,index:r,name:y[2],strings:$,ctor:y[1]==="."?Ve:y[1]==="?"?Ge:y[1]==="@"?Ze:pe}),s.removeAttribute(g)}else g.startsWith(Q)&&(l.push({type:6,index:r}),s.removeAttribute(g));if(It.test(s.tagName)){let g=s.textContent.split(Q),h=g.length-1;if(h>0){s.textContent=Re?Re.emptyScript:"";for(let $=0;$<h;$++)s.append(g[$],$e()),ae.nextNode(),l.push({type:2,index:++r});s.append(g[h],$e())}}}else if(s.nodeType===8)if(s.data===Ht)l.push({type:2,index:r});else{let g=-1;for(;(g=s.data.indexOf(Q,g+1))!==-1;)l.push({type:7,index:r}),g+=Q.length-1}r++}}static createElement(t,n){let o=ie.createElement("template");return o.innerHTML=t,o}};function ce(e,t,n=e,o){if(t===le)return t;let s=o!==void 0?n._$Co?.[o]:n._$Cl,r=ve(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(e),s._$AT(e,n,o)),o!==void 0?(n._$Co??=[])[o]=s:n._$Cl=s),s!==void 0&&(t=ce(e,s._$AS(e,t.values),s,o)),t}var qe=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:n},parts:o}=this._$AD,s=(t?.creationScope??ie).importNode(n,!0);ae.currentNode=s;let r=ae.nextNode(),a=0,d=0,l=o[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new ye(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Ye(r,this,t)),this._$AV.push(c),l=o[++d]}a!==l?.index&&(r=ae.nextNode(),a++)}return ae.currentNode=ie,s}p(t){let n=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,n),n+=o.strings.length-2):o._$AI(t[n])),n++}},ye=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,o,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=ce(this,t,n),ve(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==le&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&ve(this._$AH)?this._$AA.nextSibling.data=t:this.T(ie.createTextNode(t)),this._$AH=t}$(t){let{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=_e.createElement(Ut(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(n);else{let r=new qe(s,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(t){let n=Ot.get(t.strings);return n===void 0&&Ot.set(t.strings,n=new _e(t)),n}k(t){Je(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,o,s=0;for(let r of t)s===n.length?n.push(o=new e(this.O($e()),this.O($e()),this,this.options)):o=n[s],o._$AI(r),s++;s<n.length&&(this._$AR(o&&o._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){let o=Et(t).nextSibling;Et(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,o,s,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=f}_$AI(t,n=this,o,s){let r=this.strings,a=!1;if(r===void 0)t=ce(this,t,n,0),a=!ve(t)||t!==this._$AH&&t!==le,a&&(this._$AH=t);else{let d=t,l,c;for(t=r[0],l=0;l<r.length-1;l++)c=ce(this,d[o+l],n,l),c===le&&(c=this._$AH[l]),a||=!ve(c)||c!==this._$AH[l],c===f?t=f:t!==f&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ve=class extends pe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},Ge=class extends pe{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},Ze=class extends pe{constructor(t,n,o,s,r){super(t,n,o,s,r),this.type=5}_$AI(t,n=this){if((t=ce(this,t,n,0)??f)===le)return;let o=this._$AH,s=t===f&&o!==f||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==f&&(o===f||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ye=class{constructor(t,n,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ce(this,t)}};var Nn=Xe.litHtmlPolyfillSupport;Nn?.(_e,ye),(Xe.litHtmlVersions??=[]).push("3.3.3");var jt=(e,t,n)=>{let o=n?.renderBefore??t,s=o._$litPart$;if(s===void 0){let r=n?.renderBefore??null;o._$litPart$=s=new ye(t.insertBefore($e(),r),r,void 0,n??{})}return s._$AI(e),s};var et=globalThis,V=class extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return le}};V._$litElement$=!0,V.finalized=!0,et.litElementHydrateSupport?.({LitElement:V});var Hn=et.litElementPolyfillSupport;Hn?.({LitElement:V});(et.litElementVersions??=[]).push("4.2.2");var Dt=Le`
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
  .readout.k-power.ld-warn { color: #ffd27a; background: #3a2a0c; } .readout.k-power.ld-high { color: #ffb3b3; background: #4a1414; }
  .readout.k-power.ld-err { color: #fff; background: #b71c1c; animation: ledblink 1s infinite; }
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
  .zsock, .zsd { width: 28px; height: 28px; display: block; } .blk.so, .blk.sd { gap: 6px; } .blk.sd { flex-direction: row; align-items: center; justify-content: center; } .blk.sd .zsd { width: 26px; height: 30px; flex: none; } .zlab { font: 700 8px/1 Arial, sans-serif; color: #cfcfcf; }
  .zspds { display: flex; gap: 4px; } .zph { display: flex; flex-direction: column; align-items: center; gap: 2px; } .zph b { font: 700 5.5px/1 Arial, sans-serif; color: #ccc; }
  .zspd.sq { width: auto; flex: 1; height: 15px; border-radius: 2px; }
  .zspds { width: 100%; gap: 2px; } .zone.z-sp { padding-left: 4px; padding-right: 4px; }
  .term.sp { height: 26px; padding-left: 4px; padding-right: 4px; } .term.sp .tc { flex: 1; display: flex; justify-content: center; position: relative; }
  .term.sp .tc b { position: absolute; top: -9px; left: 0; right: 0; text-align: center; font: 600 7px/1 Arial, sans-serif; color: #333; }
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
`,Wt=Le`
  :host { display: block; }
  .blk { margin: 8px 0; padding: 6px 10px; border: 1px solid var(--divider-color); border-radius: 8px; }
  .blk .blk { background: var(--secondary-background-color); }
  summary { cursor: pointer; display: flex; align-items: center; gap: 6px; padding: 4px 0; font-weight: 600; }
  summary span { flex: 1; }
  button { cursor: pointer; border: 1px solid var(--divider-color); border-radius: 6px; padding: 2px 8px; background: var(--card-background-color); color: var(--primary-text-color); }
  button.add { margin: 6px 0; } button.danger { color: var(--error-color); }
  .banner { padding: 10px; border-radius: 8px; background: var(--warning-color, #f59f00); color: #000; margin-bottom: 10px; }
  .note { font-size: 12px; color: var(--secondary-text-color); margin: 8px 0; }
`;var Ft={differential:{type:"differential"},rcd:{type:"differential"},diff:{type:"differential"},breaker:{type:"breaker"},breaker_1p:{type:"breaker",poles:1},breaker_2p:{type:"breaker",poles:2},breaker_3p:{type:"breaker",poles:3},breaker_4p:{type:"breaker",poles:4},three_phase:{type:"breaker",poles:3},tetrapolar:{type:"breaker",poles:4},contactor_daynight:{type:"contactor_daynight"},daynight:{type:"contactor_daynight"},contactor:{type:"contactor"},power_contactor:{type:"contactor"},impulse:{type:"impulse"},telerupteur:{type:"impulse"},tele:{type:"impulse"},relay:{type:"relay"},relais:{type:"relay"},psu:{type:"psu"},power_supply:{type:"psu"},alimentation:{type:"psu"},surge:{type:"surge"},surge_arrester:{type:"surge"},socket:{type:"socket"},outlet:{type:"socket"},prise:{type:"socket"},socket_2pt:{type:"socket"},switch_disconnector:{type:"switch_disconnector"},disconnector:{type:"switch_disconnector"},isolator:{type:"switch_disconnector"},sectionneur:{type:"switch_disconnector"},meter:{type:"meter"},free:{type:"free"},custom:{type:"custom"}},In={differential:{poles:2},breaker:{poles:1},contactor_daynight:{poles:1,width:2},contactor:{poles:1,width:2},impulse:{poles:2,width:1},relay:{poles:2,width:1},psu:{poles:2,width:2},surge:{poles:2},socket:{poles:2,width:3},switch_disconnector:{poles:2},meter:{poles:2,width:4},free:{poles:1,width:1},custom:{poles:1,width:1}},Bt=(e,t,n)=>Math.min(n,Math.max(t,e)),U=e=>e==null||e===""?void 0:String(e);function Te(e){let t={};for(let[n,o]of Object.entries(e))o!=null&&o!==""&&(t[n]=o);return t}function tt(e){return[{id:"tableau_1",label:"Tableau principal",rows:e.map(n=>{let o=(n.phases?.length??0)>=3,s=Te({id:n.id,type:"differential",label:n.label,poles:n.poles??(o?4:void 0),amp:n.amp,mA:n.mA,class:n.class,sensor:n.sensor,max_w:n.max_w,accent:n.accent}),r=(n.circuits??[]).map(a=>{let{type:d,...l}=a;return Te({...l,type:"breaker",usage:d,poles:a.poles??(o?3:void 0)})});return Te({id:String(n.id),label:n.label??String(n.id),phases:n.phases,accent:n.accent,modules:[s,...r]})})}]}function Un(e){let t={circuits:new Map,groups:new Map};for(let n of e??[]){t.groups.set(String(n.id),n);for(let o of n.circuits??[])t.circuits.has(String(o.id))||t.circuits.set(String(o.id),o)}return t}function jn(e){return typeof e=="string"?{room:e}:Te({floor:U(e.floor),room:U(e.room),icon:e.icon,sensor:e.sensor})}function Dn(e,t,n,o){let s={...e};if(e.circuit!==void 0&&o.circuits.has(String(e.circuit))){let $=o.circuits.get(String(e.circuit)),{type:y,...E}=$;s={...E,type:"breaker",usage:y,...e}}if(e.group!==void 0&&o.groups.has(String(e.group))){let{circuits:$,...y}=o.groups.get(String(e.group));s={...y,type:"differential",...e}}let r=Ft[String(s.type??"breaker").toLowerCase()]??Ft.custom,a=r.type,d=(s.phases??t.phases).map($=>String($).toUpperCase()),l=In[a],c=s.poles??r.poles??(a==="breaker"&&d.length>=3?3:void 0),x=Bt(Number(s.width??l.width??c??l.poles)||1,1,12),g=Bt(Number(c??(a==="breaker"&&x===1?2:l.poles))||1,1,4),h=["power","socket","light"].includes(String(s.usage))?s.usage:"other";return{id:U(s.id)??`${t.id}-${n+1}`,type:a,label:U(s.label),poles:g,width:x,amp:s.amp!==void 0?Number(s.amp):void 0,mA:s.mA!==void 0?Number(s.mA):void 0,cls:U(s.class),curve:U(s.curve),usage:h,icon:s.icon,accent:s.accent,phases:d,sensor:s.sensor,current_sensor:s.current_sensor,voltage_sensor:s.voltage_sensor,state_entity:s.state_entity,max_w:s.max_w!==void 0?Number(s.max_w):void 0,zones:(s.zones??[]).map(jn),note:U(s.note),output:U(s.output),section:U(s.section)}}function Wn(e,t,n){let o=U(e.id)??`row_${t+1}`,s=(e.phases??[]).map(d=>String(d).toUpperCase()),r=(e.modules??[]).map((d,l)=>Dn(d,{phases:s,id:o},l,n)),a;for(let d of r)d.type==="differential"?(a=d,d.children=[]):a&&d.type!=="free"&&d.type!=="meter"&&a.children.push(d);return{id:o,label:U(e.label),phases:s,accent:e.accent,modules:r}}function Fn(e){let t=Math.floor(Number(e));return Number.isFinite(t)&&t>=1?Math.min(t,60):void 0}function Kt(e){let t=Un(e.groups),n=e.panels??(e.groups?tt(e.groups):[]),o=Number(e.nominal_voltage)>0?Number(e.nominal_voltage):void 0,s=n.map((r,a)=>({id:U(r.id)??`panel_${a+1}`,label:U(r.label),capacity:Fn(r.modules_per_row??e.modules_per_row),rows:(r.rows??[]).map((d,l)=>Wn(d,l,t))}));if(o)for(let r of s)for(let a of r.rows)for(let d of a.modules)d.volts=o;return s}function qt(e){if(!e||!e.panels&&!e.groups)throw new Error("Configuration invalide : d\xE9finir 'panels' (nouveau format) ou 'groups' (ancien format).");if(e.max_width!==void 0&&!(typeof e.max_width=="number"&&e.max_width>0))throw new Error("'max_width' doit \xEAtre un nombre positif de pixels (ex. 1100), sans unit\xE9.");let t=n=>n!==void 0&&!(Number.isInteger(n)&&n>=1);if(t(e.modules_per_row)||(e.panels??[]).some(n=>t(n.modules_per_row)))throw new Error("'modules_per_row' doit \xEAtre un entier \u2265 1 (nombre de modules DIN par rang\xE9e).");if(e.panels&&!Array.isArray(e.panels))throw new Error("'panels' doit \xEAtre une liste.");if(e.groups&&!Array.isArray(e.groups))throw new Error("'groups' doit \xEAtre une liste.")}function Vt(e,t){let n=new Set,o=s=>{s&&n.add(s)};o(e.sensors?.total?.entity),o(e.sensors?.total?.current_sensor),o(e.sensors?.total?.voltage_sensor);for(let s of Object.values(e.sensors?.phases??{}))o(s?.entity),o(s?.current_sensor),o(s?.voltage_sensor);for(let s of t)for(let r of s.rows)for(let a of r.modules){o(a.sensor),o(a.current_sensor),o(a.voltage_sensor),o(a.state_entity);for(let d of a.zones)o(d.sensor)}return[...n]}var nt=e=>!e||e==="unavailable"||e==="unknown";function ot(e,t,n="raw"){if(!t)return{status:"none",value:null};let o=e.states[t];if(!o||nt(o.state))return{status:"unavailable",value:null};let s=parseFloat(o.state);return Number.isFinite(s)?(n==="current"&&o.attributes?.unit_of_measurement==="mA"&&(s/=1e3),{status:"ok",value:s}):{status:"unavailable",value:null}}var Bn={W:["power",1],kW:["power",1e3],MW:["power",1e6],mW:["power",.001],Wh:["energy",1],kWh:["energy",1e3],MWh:["energy",1e6],A:["current",1],mA:["current",.001],V:["voltage",1],mV:["voltage",.001],kV:["voltage",1e3]},Kn={power:["power",1],energy:["energy",1e3],current:["current",1],voltage:["voltage",1]};function X(e,t,n="power"){if(!t)return{status:"none",value:null,kind:n};let o=e.states[t],s=o?.attributes??{},[r,a]=Bn[s.unit_of_measurement]??Kn[s.device_class]??[n,1];if(!o||nt(o.state))return{status:"unavailable",value:null,kind:r};let d=parseFloat(o.state);return Number.isFinite(d)?{status:"ok",value:d*a,kind:r}:{status:"unavailable",value:null,kind:r}}function O(e,t){if(!t)return null;let n=e.states[t]?.state?.toLowerCase();if(!n||nt(n))return null;if(["on","true","closed","active","enabled","home","heat","playing","1"].includes(n))return!0;if(["off","false","open","inactive","disabled","not_home","idle","standby","0"].includes(n))return!1;let o=parseFloat(n);return Number.isFinite(o)?o>0:null}var Gt=["power","energy","current","voltage"],Xt=(e,t)=>Gt.indexOf(e.kind)-Gt.indexOf(t.kind);function Zt(e,t,n=e.length){let o=[...new Set(e.map(a=>a.kind))],s=o.filter(a=>e.some(d=>d.kind===a&&d.value!==null));return(s.length?s:o.slice(0,1)).map(a=>{let d=e.filter(l=>l.kind===a&&l.value!==null);return{kind:a,source:t,value:d.length?d.reduce((l,c)=>l+c.value,0):null,partial:d.length<n||d.some(l=>l.partial)}}).sort(Xt)}var qn=e=>{let t=e[0];return e.length?{configured:!0,value:t.value,kind:t.kind,source:t.source,partial:t.partial,counters:e}:{configured:!1,value:null,kind:"power",source:"none",partial:!1,counters:[]}},Yt=new WeakMap;function j(e,t){let n=Yt.get(t);if(n&&n.h===e)return n.p;let o=Vn(e,t);return Yt.set(t,{h:e,p:o}),o}function Vn(e,t){let n=[],o=(d,l)=>{if(!d)return;let c=X(e,d,l);n.some(x=>x.kind===c.kind)||n.push({kind:c.kind,value:c.value,partial:!1,source:"sensor"})};o(t.sensor,"power"),o(t.current_sensor,"current");let s=[],r=t.zones.filter(d=>d.sensor);if(r.length)s=Zt(r.map(d=>X(e,d.sensor)),"zones",t.zones.length);else if(t.children?.length){let d=t.children.map(l=>j(e,l));if(d.some(l=>l.configured)){let l=d.flatMap(c=>c.counters.map(x=>({...x,partial:x.partial})));s=Zt(l,"children",d.length),d.some(c=>!c.configured)&&(s=s.map(c=>({...c,partial:!0})))}}let a=[...n,...s.filter(d=>!n.some(l=>l.kind===d.kind))].sort(Xt);return qn(a)}function ue(e,t="power"){if(!(t==="energy"||t==="voltage")){if(t==="current")return e.amp;if(e.max_w)return e.max_w;if(e.amp)return e.amp*(e.volts??230)*(e.poles>=3?3:1)}}function Jt(e,t,n){let o=n.counters.find(a=>a.kind==="current");if(o)return o.value;let s=n.counters.find(a=>a.kind==="power"),r=ot(e,t.voltage_sensor);return r.value&&s&&s.value!==null?s.value/r.value:null}function st(e){let t=Math.abs(e);return t>=1e4?`${(e/1e3).toFixed(1)} kW`:t>=1e3?`${(e/1e3).toFixed(2)} kW`:`${Math.round(e)} W`}function Gn(e,t=!1){let n=e/1e3,o=Math.abs(n);return`${n.toFixed(t?o>=1e3?0:1:o>=1e3?0:o>=100?1:2)} kWh`}function Zn(e){let t=Math.abs(e);return`${e.toFixed(t>=100?0:t>=10?1:2)} A`}var Yn=e=>`${e.toFixed(e>=100?0:1)} V`,N=(e,t,n=!1)=>e==="energy"?Gn(t,n):e==="current"?Zn(t):e==="voltage"?Yn(t):st(t);function we(e,t){let n=[];if(!t)return n;let o;if(t.entity){let r=X(e,t.entity);(r.kind==="power"||r.kind==="energy")&&(n.push({kind:r.kind,value:r.value,entity:t.entity}),o=r)}let s;if(t.current_sensor&&(s=X(e,t.current_sensor,"current"),n.push({kind:"current",value:s.value,entity:t.current_sensor})),t.voltage_sensor){let r=X(e,t.voltage_sensor,"voltage");n.push({kind:"voltage",value:r.value,entity:t.voltage_sensor})}else o?.kind==="power"&&o.value!==null&&s?.value&&s.value>.05&&o.value>0&&n.push({kind:"voltage",value:o.value/s.value,entity:t.current_sensor,approx:!0});return n.sort((r,a)=>["power","energy","current","voltage"].indexOf(r.kind)-["power","energy","current","voltage"].indexOf(a.kind))}function Oe(e,t,n){if(!t)return[];let o=Object.entries(t.phases??{}).filter(([,l])=>l&&(l.entity||l.current_sensor||l.voltage_sensor)),s=l=>we(e,l).find(c=>c.kind==="power")?.value??null,r=Math.max(0,...o.map(([,l])=>s(l)??0)),a=(l,c,x,g)=>{let h=we(e,x);if(!h.length)return;let $=h.find(E=>E.kind==="power"),y=$&&$.value!==null&&g?Math.max(0,$.value)/g:null;return{key:l,label:c,items:h,pct:y,limit:g,entity:x?.entity??x?.current_sensor??x?.voltage_sensor}},d=l=>l?.max_w??(t.total?.max_w&&o.length?t.total.max_w/o.length:r||void 0);return[a("total",n,t.total,t.total?.max_w),...o.map(([l,c])=>a(l.toUpperCase(),l.toUpperCase(),c,d(c)))].filter(l=>!!l)}var Qt={fr:{total:"Total",search:"Champ de recherche",show_led:"Point de charge (LED)",search_ph:"Rechercher (id, libell\xE9, pi\xE8ce, calibre\u2026)",result:"r\xE9sultat",no_result:"aucun r\xE9sultat",clear:"Effacer",incoming:"Arriv\xE9e",nominal_voltage:"Tension nominale (V, d\xE9faut 230)",incoming_title:"Titre du cadre d\u2019arriv\xE9e (vue tableau)",phase:"Phase",power:"Puissance",current:"Intensit\xE9",voltage:"Tension",load:"Charge",zones:"Zones",protects:"Circuits prot\xE9g\xE9s",unavailable:"Indisponible",close:"Fermer",type:"Type",id:"Identifiant",rating:"Calibre",poles:"P\xF4les",sensitivity:"Sensibilit\xE9",cls:"Classe",curve:"Courbe",phases:"Phases",usage:"Usage",sum_zones:"Somme des capteurs de zones",sum_children:"Somme des circuits (partielle si certains sans mesure)",own_sensor:"Capteur du module",no_data:"Aucune mesure",max:"Max",state:"\xC9tat",t_differential:"Interrupteur diff\xE9rentiel",t_breaker:"Disjoncteur",t_contactor_daynight:"Contacteur jour/nuit",t_contactor:"Contacteur de puissance",t_impulse:"T\xE9l\xE9rupteur",t_relay:"Relais",t_psu:"Alimentation",output:"Sortie",section:"Section du c\xE2ble (mm\xB2)",modules_per_row:"Modules DIN par rang\xE9e",t_surge:"Parafoudre",t_socket:"Prise 2P+T",t_switch_disconnector:"Interrupteur sectionneur",t_meter:"Compteur \xE9lectrique",t_free:"Module libre",t_custom:"Module personnalis\xE9",u_power:"Puissance",u_socket:"Prises",u_light:"\xC9clairage",u_other:"Autre",panel:"Tableau",row:"Rang\xE9e",module:"Module",add_row:"Ajouter une rang\xE9e",add_module:"Ajouter un module",add_panel:"Ajouter un tableau",add_zone:"Ajouter une zone",remove:"Supprimer",legacy:"Ancien format (groups) d\xE9tect\xE9.",convert:"Convertir en panels / rows / modules",general:"G\xE9n\xE9ral",global_sensors:"Capteurs globaux",title:"Titre",language:"Langue",module_width:"Largeur d\u2019un module (px)",total_entity:"Capteur total (W ou kWh)",head_sensor:"Capteur (W ou kWh)",total_max:"Puissance max totale (W)",label:"Libell\xE9",amp:"Calibre (A)",width:"Largeur (modules DIN)",icon:"Ic\xF4ne",sensor:"Capteur (W, kWh ou A)",current_sensor:"Capteur d\u2019intensit\xE9",voltage_sensor:"Capteur de tension",state_entity:"\xC9tat (capteur, switch\u2026 on/off)",floor:"\xC9tage",room:"Pi\xE8ce",mA:"Sensibilit\xE9 (mA)",max_w:"Puissance max (W)",accent:"Couleur d\u2019accent",editor_note:"Les options avanc\xE9es restent \xE9ditables en YAML.",free:"Libre",view_tree:"Sch\xE9ma",collapse_level:"Replier un niveau",collapsed:"Repli initial",max_width:"Largeur max du sch\xE9ma (px)",view_panel:"Tableau",expand_all:"Tout d\xE9plier",collapse_all:"Tout replier",view:"Vue initiale",expand:"D\xE9plier / replier"},en:{total:"Total",search:"Search field",show_led:"Load dot (LED)",search_ph:"Search (id, label, room, rating\u2026)",result:"result",no_result:"no result",clear:"Clear",incoming:"Incoming",nominal_voltage:"Nominal voltage (V, default 230)",incoming_title:"Incoming frame title (panel view)",phase:"Phase",power:"Power",current:"Current",voltage:"Voltage",load:"Load",zones:"Zones",protects:"Protected circuits",unavailable:"Unavailable",close:"Close",type:"Type",id:"Identifier",rating:"Rating",poles:"Poles",sensitivity:"Sensitivity",cls:"Class",curve:"Curve",phases:"Phases",usage:"Usage",sum_zones:"Sum of zone sensors",sum_children:"Sum of circuits (partial if some have no measurement)",own_sensor:"Module sensor",no_data:"No measurement",max:"Max",state:"State",t_differential:"RCD (differential switch)",t_breaker:"Circuit breaker",t_contactor_daynight:"Day/night contactor",t_contactor:"Power contactor",t_impulse:"Impulse relay (t\xE9l\xE9rupteur)",t_relay:"Relay",t_psu:"Power supply",output:"Output",section:"Cable cross-section (mm\xB2)",modules_per_row:"DIN modules per row",t_surge:"Surge arrester",t_socket:"Socket outlet 2P+T",t_switch_disconnector:"Switch disconnector",t_meter:"Energy meter",t_free:"Free module",t_custom:"Custom module",u_power:"Power",u_socket:"Sockets",u_light:"Lighting",u_other:"Other",panel:"Panel",row:"Row",module:"Module",add_row:"Add row",add_module:"Add module",add_panel:"Add panel",add_zone:"Add zone",remove:"Remove",legacy:"Legacy format (groups) detected.",convert:"Convert to panels / rows / modules",general:"General",global_sensors:"Global sensors",title:"Title",language:"Language",module_width:"Module width (px)",total_entity:"Total sensor (W or kWh)",head_sensor:"Sensor (W or kWh)",total_max:"Max total power (W)",label:"Label",amp:"Rating (A)",width:"Width (DIN modules)",icon:"Icon",sensor:"Sensor (W, kWh or A)",current_sensor:"Current sensor",voltage_sensor:"Voltage sensor",state_entity:"State (sensor, switch\u2026 on/off)",floor:"Floor",room:"Room",mA:"Sensitivity (mA)",max_w:"Max power (W)",accent:"Accent colour",editor_note:"Advanced options remain editable in YAML.",free:"Free",view_tree:"Diagram",collapse_level:"Collapse one level",collapsed:"Initial collapse",max_width:"Max diagram width (px)",view_panel:"Panel",expand_all:"Expand all",collapse_all:"Collapse all",view:"Initial view",expand:"Expand / collapse"}},v=(e,t)=>Qt[e][t]??Qt.fr[t]??t;var K={power:"mdi:flash",socket:"mdi:power-socket-eu",light:"mdi:lightbulb",other:"mdi:electric-switch",differential:"mdi:current-ac",surge:"mdi:flash-alert",meter:"mdi:counter",contactor:"mdi:electric-switch-closed",contactor_daynight:"mdi:theme-light-dark",impulse:"mdi:toggle-switch",relay:"mdi:electric-switch",psu:"mdi:power-plug-outline",switch_disconnector:"mdi:electric-switch"};var Xn=e=>e.amp!==void 0?u`<div class="print amp">${e.curve??""}${e.amp}${e.curve?"":"A"}</div>`:f;function Jn(e,t){let n=Math.max(1,Math.min(e.poles,e.width));return u`<div class="levers ${t?"on":"off"}">
    ${Array.from({length:n},()=>u`<div class="cell"><div class="slot"><div class="lever ${t?"on":"off"}"></div></div></div>`)}
    ${n>1?u`<i class="bar"></i>`:f}
  </div>`}var Qn=({mod:e,ctx:t})=>{let n=O(t.hass,e.state_entity);return u`${Jn(e,n!==!1)}${Xn(e)}`},eo=({mod:e,ctx:t})=>{let o=O(t.hass,e.state_entity)!==!1;return u`
    <div class="levers single ${o?"on":"off"}"><div class="slot wide"><div class="lever ${o?"on":"off"}"></div></div></div>
    <div class="dtype"><span>Type ${e.cls??"AC"}</span>${e.mA!==void 0?u`<span>${e.mA}mA</span>`:f}</div>
    ${e.amp!==void 0?u`<div class="print amp">${e.amp}A</div>`:f}
    <div class="dtools"><span class="test">T</span><span class="win ${o?"ok":"trip"}"></span></div>`},G=(e,t)=>u`<div class="zone z-${e}"><div class="blk ${e}">${t}</div></div>`,Z=(e,t)=>{let n=t??(e.amp!==void 0?`${e.curve??""}${e.amp}${e.curve?"":"A"}`:"");return n?u`<div class="print amp ${t?"txt":""}">${n}</div>`:f},Ne=e=>u`<i class="zlens ${e===!0?"on":e===!1?"off":""}"></i>`,to=({mod:e,ctx:t})=>{let n=O(t.hass,e.state_entity),o=n===!0?"on":n===!1?"off":"auto";return u`${G("dn",u`<div class="zsw"><span class=${o==="on"?"act":""}>I</span><span class=${o==="auto"?"act":""}>A</span><span class=${o==="off"?"act":""}>O</span></div>`)}${Z(e,e.amp!==void 0?void 0:"J/N")}`},no=({mod:e,ctx:t})=>{let n=O(t.hass,e.state_entity);return u`${G("ct",u`<span class="coil2"><b>A1</b><b>A2</b></span><i class="zmi ${n===!0?"on":""}"></i>`)}${Z(e,e.amp!==void 0?void 0:"KM")}`},oo=({mod:e,ctx:t})=>{let n=O(t.hass,e.state_entity);return u`${G("rl",u`<span class="coil2"><b>A1</b><b>A2</b></span>${Ne(n)}`)}${Z(e,e.amp!==void 0?void 0:"REL")}`},so=({mod:e,ctx:t})=>{let n=O(t.hass,e.state_entity);return u`${G("tl",u`<i class="zbtn"></i>${Ne(n)}`)}${Z(e,e.amp!==void 0?void 0:"TL")}`},ro=({mod:e,ctx:t})=>{let n=O(t.hass,e.state_entity);return u`${G("ps",u`<i class="zpot"><b></b></i><span class="dc">${Ne(n!==!1)}DC OK</span>`)}${Z(e,e.output??(e.amp!==void 0?void 0:"AC/DC"))}`};function rt(e){let t=n=>Array.from({length:n},(o,s)=>e.phases[s]??`L${s+1}`);return e.poles>=4?["N",...t(3)]:e.poles===3?t(3):["N",e.phases[0]??"L"]}var ao=({mod:e,ctx:t})=>{let n=O(t.hass,e.state_entity),o=u`<span class="zspds">${rt(e).map(()=>u`<i class="zspd sq ${n===!1?"bad":"ok"}"></i>`)}</span>`;return u`${G("sp",o)}${Z(e,"SPD")}${e.note?u`<div class="print sm">${e.note}</div>`:f}`},io=({mod:e})=>u`${G("so",u`<svg class="zsock" viewBox="0 0 30 30" aria-hidden="true"><circle cx="15" cy="15" r="13" fill="#e9ebee"/><circle cx="9.5" cy="16" r="2.2" fill="#222"/><circle cx="20.5" cy="16" r="2.2" fill="#222"/><rect x="13.6" y="3" width="2.8" height="5" rx="1.2" fill="#222"/></svg><b class="zlab">2P+T</b>`)}${Z(e)}`,lo=({mod:e,ctx:t})=>{let n=O(t.hass,e.state_entity);return u`${G("sd",u`<svg class="zsd" viewBox="0 0 30 30" aria-hidden="true"><g stroke="#f1f1f1" stroke-width="2" stroke-linecap="round" fill="none"><path d="M15 2v8"/><path d="${n===!1?"M15 10l9 7":"M15 10l7 11"}"/><path d="${n===!1?"M19 11l5 -4":"M17.4 14.4l6 -3"}"/><path d="M15 21v7"/></g></svg><b class="zlab">I-O</b>${n===null?f:Ne(n)}`)}${Z(e)}`},co=({mod:e,power:t})=>u`
  ${G("mt",u`<span class="zlcd">${t.value!==null?N(t.kind,t.value):"- - -"}</span>`)}${Z(e,e.label??"kWh")}`,po=()=>u`<div class="blank"></div>`,uo=({mod:e})=>u`${G("cu",e.icon?u`<ha-icon icon=${e.icon}></ha-icon>`:f)}${Z(e)}`,at={differential:eo,breaker:Qn,contactor_daynight:to,contactor:no,relay:oo,impulse:so,psu:ro,surge:ao,socket:io,switch_disconnector:lo,meter:co,free:po,custom:uo};function Ie(e,t){return e.label??(e.type==="free"?v(t.lang,"free"):e.id)}function en(e){return u`<div class="term top sp">${e.map(t=>u`<span class="tc"><b>${t}</b><i></i></span>`)}</div>`}function He(e,t,n){return u`<div class="term ${t} ${n?"n":""}">${Array.from({length:e},()=>u`<i></i>`)}</div>`}var ho="mdi:map-marker-outline";function fo(e,t,n){let o=[e.amp!==void 0?`${e.amp} A`:"",e.id!==t?e.id:""].filter(Boolean).join(" \xB7 "),s=e.zones.map(r=>({icon:r.icon??n??ho,text:[r.floor,r.room].filter(Boolean).join(" \xB7 ")})).filter(r=>r.text);return u`<div class="tip" role="tooltip">
    <div class="tip-h">${n?u`<ha-icon icon=${n}></ha-icon>`:f}<b>${t}</b>${o?u`<span class="tip-d">${o}</span>`:f}</div>
    ${s.map(r=>u`<div class="tip-z"><ha-icon icon=${r.icon}></ha-icon><span>${r.text}</span></div>`)}
  </div>`}function tn(e){let t=e.currentTarget,n=t.querySelector(".tip");if(!n)return;let o=t.getBoundingClientRect();n.style.left=`${Math.max(4,Math.min(o.left,window.innerWidth-270))}px`,o.top>140?(n.style.bottom=`${window.innerHeight-o.top+6}px`,n.style.top="auto"):(n.style.top=`${o.bottom+6}px`,n.style.bottom="auto")}var go=new Set(["relay","impulse","contactor","contactor_daynight","switch_disconnector"]);function nn(e,t,n="",o=[]){let s=j(t.hass,e),r=ue(e,s.kind),a=s.value!==null&&r?Math.max(0,s.value)/r:null,d=a===null?"":a>1?"err":a>=.9?"high":a>=.6?"warn":"ok",l=at[e.type]??at.custom,c=Math.max(1,e.poles),x=e.poles===2||e.poles>=4,g=Ie(e,t),h=e.type!=="free"||!!e.label,$=e.icon??(e.type==="breaker"?K[e.usage]:K[e.type]),y=e.type==="differential",E=s.counters.filter(z=>!(y&&z.value===null)),A=s.configured&&e.type!=="meter"&&E.length?u`<div class="readouts">${E.map(z=>u`<div class="readout k-${z.kind} ${z.value===null?"bad":""} ${z.kind==="power"&&!t.showLed&&(d==="warn"||d==="high"||d==="err")?`ld-${d}`:""}" title=${v(t.lang,z.source==="children"?"sum_children":z.source==="zones"?"sum_zones":"own_sensor")}>
        ${z.value===null?"n/d":N(z.kind,z.value,!0)}</div>`)}</div>`:f,P=go.has(e.type)?O(t.hass,e.state_entity):null,ne=e.type!=="differential"&&e.type!=="free",B=P===null?"":P?"st-on":"st-off",Ue=`--w:${e.width};${e.accent?`--acc:${e.accent};--cap:${e.accent};`:""}`,oe=z=>{z instanceof KeyboardEvent&&z.key!=="Enter"&&z.key!==" "||(z.preventDefault(),t.select(e))};return u`<div class="mod t-${e.type} u-${e.usage} p-${e.poles} ${B} ${n?`s-${n}`:""}" style=${Ue} role="button" tabindex="0"
      aria-label=${`${g} ${e.id}`} @click=${oe} @keydown=${oe} @mouseenter=${tn} @focus=${tn}>
    ${o.length?u`<div class="phtag" title=${o.join(" / ")}>${o.map(z=>u`<i class="ph-${z.toLowerCase()}">${z}</i>`)}</div>`:f}
    ${fo(e,g,$)}
    <div class="face">
      ${e.type==="surge"?en(rt(e)):e.type==="socket"?en(["L","N","PE"]):e.type!=="free"?He(c,"top",x):f}
      ${d&&t.showLed?u`<i class="led ${d}"></i>`:f}
      <div class="body ${ne?"ib":""}">${ne?u`<div class="pid">${e.id}</div>`:f}${l({mod:e,ctx:t,power:s})}${A}${e.type==="differential"||ne?f:u`<div class="pid">${e.id}</div>`}</div>
      ${e.type==="surge"?He(1,"bot",!1):e.type==="socket"?He(3,"bot",!1):e.type!=="free"?He(c,"bot",x):f}
    </div>
    ${h?u`<div class="plate">
          ${$?u`<span class="pi"><ha-icon icon=${$}></ha-icon></span>`:f}
          <div class="txt" lang=${t.lang}>${g}</div>
          ${e.section?u`<div class="sec">${e.section} mm²</div>`:f}</div>`:f}
  </div>`}function on(e,t){if(!t||t<=0)return[e];let n=[[]],o=0;for(let s of e)o+s.width>t&&n[n.length-1].length&&(n.push([]),o=0),n[n.length-1].push(s),o+=s.width;return n}function sn(e,t,n,o){let s=g=>t.search&&o?t.search(g,e,o)?"hit":"dim":"",r=!t.search||!o||e.modules.some(g=>t.search(g,e,o)),a=g=>g.phases.length?g.phases:e.phases,d=e.modules.filter(g=>g.type!=="free"&&g.type!=="meter"),l=new Set(d.map(g=>[...a(g)].sort().join("/"))).size>1,c=e.modules.find(g=>g.children!==void 0),x=c?j(t.hass,c):void 0;return u`<section class="row ${r?"":"nomatch"}" style=${e.accent?`--acc:${e.accent}`:""}>
    ${e.label||e.phases.length||x?.configured?u`<header class="row-head">
          ${e.label?u`<b>${e.label}</b>`:f}
          ${e.phases.map(g=>u`<span class="chip ph-${g.toLowerCase()}">${g}</span>`)}
          ${x?.configured&&x.counters.some(g=>g.value!==null)?u`<span class="grow"></span>${x.counters.filter(g=>g.value!==null).map(g=>u`<span class="dim sum">${g.partial?"\u2265 ":""}${N(g.kind,g.value)}</span>`)}`:f}
        </header>`:f}
    <div class="scroller"><div class="lines">
      ${on(e.modules,n).map(g=>u`<div class="rail-wrap ${n?"fixed":""} ${l?"ph":""}" style=${n?`--n:${n}`:""}><div class="rail"></div>
        ${g.map(h=>nn(h,t,s(h),l&&h.type!=="free"&&h.type!=="meter"?a(h):[]))}<span class="fill"></span>
      </div>`)}
    </div></div>
  </section>`}function rn(e,t){return u`<div class="panel ${e.capacity?"fixed":""}">
    ${e.label?u`<div class="panel-title">${e.label}</div>`:f}
    ${e.rows.map(n=>sn(n,t,e.capacity,e))}
  </div>`}var an=e=>String(e??"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();function mo(e,t,n,o){let s=e.amp!==void 0?[`${e.amp}a`,`${e.amp} a`,`${e.amp}`,`${e.curve??""}${e.amp}`]:[];return an([e.id,e.label,e.type,v(o,`t_${e.type}`),...s,e.mA!==void 0?`${e.mA}ma`:"",e.cls,e.section,e.output,e.note,...e.zones.flatMap(r=>[r.floor,r.room]),t.id,t.label,n.id,n.label,e.sensor,e.current_sensor,e.voltage_sensor,e.state_entity,...e.zones.map(r=>r.sensor)].filter(r=>r!==void 0&&r!=="").join(" | "))}function ln(e,t){let n=an(e).split(/\s+/).filter(Boolean),o=n.filter(r=>!r.startsWith("-")),s=n.filter(r=>r.startsWith("-")&&r.length>1).map(r=>r.slice(1));return!o.length&&!s.length?null:(r,a,d)=>{if(r.type==="free"&&!r.label)return!1;let l=mo(r,a,d,t);return o.every(c=>l.includes(c))&&!s.some(c=>l.includes(c))}}function dn(e,t){let n=0;for(let o of e)for(let s of o.rows)for(let r of s.modules)t(r,s,o)&&n++;return n}var W=(e,t)=>t===void 0||t===""?f:u`<div class="kv"><span>${e}</span><b>${t}</b></div>`;function cn(e,t,n){let o=t.lang,s=j(t.hass,e),r=ue(e,s.kind),a=s.value!==null&&r?Math.min(100,Math.max(0,s.value)/r*100):null,d=Jt(t.hass,e,s),l=ot(t.hass,e.voltage_sensor),c=O(t.hass,e.state_entity),x=e.icon??(e.type==="breaker"?K[e.usage]:K[e.type]),g=h=>h?()=>t.moreInfo(h):void 0;return u`<div class="dlg">
    <header><ha-icon icon=${x??"mdi:electric-switch"}></ha-icon>
      <div><h3>${Ie(e,t)}</h3><div class="dim">${v(o,`t_${e.type}`)} · ${e.id}</div></div>
      <button class="x" @click=${n} aria-label=${v(o,"close")}>✕</button></header>
    <div class="kvs">
      ${W(v(o,"rating"),e.amp!==void 0?`${e.curve??""}${e.amp} A`:void 0)}
      ${W(v(o,"poles"),e.poles)}
      ${W(v(o,"sensitivity"),e.mA!==void 0?`${e.mA} mA`:void 0)}
      ${W(v(o,"cls"),e.cls)}
      ${W(v(o,"output"),e.output)}
      ${e.type!=="differential"?f:W(v(o,"max"),e.max_w?st(e.max_w):void 0)}
      ${W(v(o,"phases"),e.phases.length?e.phases.join(" \xB7 "):void 0)}
      ${e.type==="breaker"&&e.usage!=="other"?W(v(o,"usage"),v(o,`u_${e.usage}`)):f}
      ${c===null?f:W(v(o,"state"),c?"ON":"OFF")}
      ${W("",e.note)}
    </div>
    ${s.configured||d!==null||l.value!==null?u`<div class="values">
          ${s.counters.map(h=>u`<div class="big ${h.value===null?"bad":""}" @click=${g(h.kind==="current"&&e.current_sensor&&e.sensor!==e.current_sensor?e.current_sensor:e.sensor)}>
                ${h.value===null?v(o,"unavailable"):`${h.partial?"\u2265 ":""}${N(h.kind,h.value)}`}
                <small>${v(o,h.source==="zones"?"sum_zones":h.source==="children"?"sum_children":"own_sensor")}</small></div>`)}
          ${d!==null&&!s.counters.some(h=>h.kind==="current")?W(v(o,"current"),`${d.toFixed(1)} A`):f}
          ${l.value!==null?W(v(o,"voltage"),`${l.value.toFixed(0)} V`):f}
          ${a!==null?u`<div class="bar"><i style=${`width:${a}%`} class=${a>=90?"high":a>=60?"warn":"ok"}></i></div>
            <div class="dim">${v(o,"load")} ${a.toFixed(0)} % / ${N(s.kind,r)}</div>`:f}
        </div>`:f}
    ${e.zones.length?u`<h4>${v(o,"zones")}</h4><ul class="zones">
          ${e.zones.map(h=>{let $=X(t.hass,h.sensor);return u`<li class=${h.sensor?"click":""} @click=${g(h.sensor)}>
              <ha-icon icon=${h.icon??"mdi:map-marker-outline"}></ha-icon>
              <span>${[h.floor,h.room].filter(Boolean).join(" \xB7 ")}</span>
              ${h.sensor?u`<b class=${$.value===null?"bad":""}>${$.value===null?"n/d":N($.kind,$.value)}</b>`:f}
            </li>`})}</ul>`:f}
    ${e.children?.length?u`<h4>${v(o,"protects")}</h4><ul class="zones">
          ${e.children.map(h=>{let $=j(t.hass,h);return u`<li class="click" @click=${()=>t.select(h)}>
              <span class="id">${h.id}</span><span>${Ie(h,t)}</span>
              ${h.amp!==void 0?u`<small>${h.amp} A</small>`:f}
              ${$.counters.map(y=>u`<b class=${y.value===null?"bad":""}>${y.value===null?"n/d":N(y.kind,y.value)}</b>`)}
            </li>`})}</ul>`:f}
  </div>`}var it=440,T=22,he=14,bo=54,ke=34,fn=8,Ae=24,xo="#2f9e44",$o="#e03131",pn=["L1","L2","L3"],ee=e=>`var(--din-panel-phase-${e.toLowerCase()}-color, ${{L1:"#8b4513",L2:"#1a202c",L3:"#5a6474"}[e]??"#718096"})`,te=(e,t=fn)=>e.length*t*.56;function un(e,t,n=fn){if(te(e,n)<=t)return e;let o=Math.floor(t/(n*.56))-1;return o<2?"":`${e.slice(0,o)}\u2026`}function gn(e){return e<=700?it:Math.max(it,Math.round(e*it/700))}function vo(e,t){let n=t.floors?.[e];if(n?.bg)return{bg:n.bg,fg:n.fg??"#fff"};let o=0;for(let s of e)o=(o*31+s.charCodeAt(0))%360;return{bg:`hsl(${o} 45% 38%)`,fg:"#fff"}}var _o=e=>{let t=e.modules.findIndex(n=>n.children!==void 0);return e.modules.slice(0,t<0?e.modules.length:t).filter(n=>!(n.type==="free"&&!n.label))},lt=new WeakMap;function dt(e){if(lt.has(e))return lt.get(e)??void 0;let t=_o(e),n=null;if(t.length>=2){let o=t.map(d=>d.phases.length?d.phases:e.phases),s=o.filter(d=>d.length>=2),r=s.length?s:o,a=["L1","L2","L3"].filter(d=>r.some(l=>l.includes(d)));n={id:e.id,type:"custom",label:e.label,poles:1,width:1,usage:"other",phases:a,zones:[],children:t}}return lt.set(e,n),n??void 0}var hn=e=>[...e].sort().join("/");function ct(e,t){let n=[];for(let o of e){if(t==="panels"){n.push(`p:${o.id}`);continue}for(let s of o.rows)for(let r of s.modules)t==="rows"&&r===s.modules[0]&&dt(s)&&n.push(`r:${o.id}/${s.id}/${s.id}`),t==="rows"&&r.children?.length&&n.push(`r:${o.id}/${s.id}/${r.id}`),t==="zones"&&r.type!=="differential"&&r.zones.length&&n.push(`z:${o.id}/${s.id}/${r.id}`)}return n}function mn(e,t,n){let o=n.width,s=n.config,r=1;for(let i of e)for(let p of i.rows)for(let b of p.modules)r=Math.max(r,j(t.hass,b).counters.length);for(let i of[s.sensors?.total,...Object.values(s.sensors?.phases??{})])r=Math.max(r,we(t.hass,i).length);let a=o-Math.max(90,r*bo+6),d=[],l=new Set;for(let i of e)for(let p of i.rows)p.phases.forEach(b=>l.add(b)),p.modules.forEach(b=>b.phases.forEach(m=>l.add(m)));Object.keys(s.sensors?.phases??{}).forEach(i=>l.add(i.toUpperCase()));let c=[...pn.filter(i=>l.has(i)),...[...l].filter(i=>!pn.includes(i))],x=14,g=9,h=i=>x+c.indexOf(i)*g,$=x+Math.max(1,c.length)*g+8,y=new Map,E=new Map,A=8,P=i=>Math.max(20,te(i,7)+10),ne=(i,p,b,m)=>M`
    <rect class="box" x=${i} y=${p-he/2} width=${P(b)} height=${he} rx="3" style=${m?`fill:${m};stroke:${m}`:""}></rect>
    <text class="boxt" x=${i+P(b)/2} y=${p+2.6} text-anchor="middle" style=${m?"fill:#fff":""}>${b}</text>`,B=(i,p,b,m,C="wire",S="")=>M`<line class=${C} x1=${i} y1=${p} x2=${b} y2=${m} style=${S}></line>`,Ue=(i,p,b="")=>({value:i.value,partial:i.partial,kind:i.kind,limit:p,tip:b});function oe(i,p){let b=a;return p.map(m=>{let C=m.value===null?"n/d":`${m.partial?"\u2265 ":m.approx?"\u2248 ":""}${N(m.kind,m.value)}`,S=Math.max(36,te(C,7.5)+10),_=b;b+=S+3;let w=m.value!==null&&m.limit?Math.max(0,m.value)/m.limit:null,k=w===null?"":w>1?"err":w>=.9?"high":w>=.6?"warn":"ok";return M`<g class="bubble k-${m.kind} ${m.value===null?"bad":""}">
        <title>${m.tip??""}</title>
        <rect class="bub" x=${_} y=${i-7} width=${S} height="14" rx="7"></rect>
        <text class="val" x=${_+S/2} y=${i+(w===null?2.6:.8)} text-anchor="middle">${C}</text>
        ${w!==null?M`<rect class="gbg" x=${_+7} y=${i+3.2} width=${S-14} height="1.8" rx=".9"></rect>
          <rect class="gfg ${k}" x=${_+7} y=${i+3.2} width=${(S-14)*Math.min(1,w)} height="1.8" rx=".9"></rect>`:f}
      </g>`})}let z=(i,p,b)=>M`<path class="chev" d=${b?`M${i-3},${p-1.5} L${i},${p+2} L${i+3},${p-1.5}`:`M${i-1.5},${p-3} L${i+2},${p} L${i-1.5},${p+3}`}></path>`,ut=(i,p,b)=>M`<rect class="hit chevhit" x=${i-6} y=${p-8} width="12" height="16" tabindex="0" role="button" aria-label=${b} @click=${m=>{m.stopPropagation(),n.toggle(b)}} @keydown=${m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.stopPropagation(),n.toggle(b))}}></rect>`,je=(i,p,b=!0,m=a-2)=>b&&p+6<m?B(p+3,i,m,i,"conn"):f,de=i=>i?.entity??i?.current_sensor??i?.voltage_sensor,ht=i=>p=>{i&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),i())},fe=(i,p,b="",m=!!p)=>m&&p?M`<rect class="hit" x="0" y=${i} width=${o} height=${T} tabindex="0" role="button" aria-label=${b} @click=${p} @keydown=${ht(p)}><title>${b}</title></rect>`:M`<rect class="hit" x="0" y=${i} width=${o} height=${T}><title>${b}</title></rect>`,ft=i=>we(t.hass,i).map(p=>({value:p.value,kind:p.kind,partial:!1,approx:p.approx,limit:p.kind==="power"?i?.max_w:void 0,tip:p.approx?"U \u2248 P / I":p.entity})),Se=new Map;for(let i of e)for(let p of i.rows)for(let b of p.modules){Se.set(b,{row:p,panel:i});for(let m of b.children??[])Se.set(m,{row:p,panel:i})}let J=i=>{let p=Se.get(i);return!!p&&!!t.search&&t.search(i,p.row,p.panel)},gt=(i,p=!1)=>t.search?J(i)||p&&(i.children??[]).some(J)?"s-hit":"s-dim":"",De=(()=>{if(!t.search)return n.collapsed;let i=new Set;for(let p of e){p.rows.some(b=>b.modules.some(m=>J(m)||(m.children??[]).some(J)))||i.add(`p:${p.id}`);for(let b of p.rows){let m=dt(b);m&&!(m.children??[]).some(J)&&i.add(`r:${p.id}/${b.id}/${m.id}`)}for(let b of p.rows)for(let m of b.modules){m.children&&!(J(m)||(m.children??[]).some(J))&&i.add(`r:${p.id}/${b.id}/${m.id}`);for(let C of[m,...m.children??[]])C.zones.length&&!J(C)&&i.add(`z:${p.id}/${b.id}/${C.id}`)}}return i})(),xn=(i,p)=>{let b=Se.get(i);return!t.search||!!b&&t.search({...i,zones:[p]},b.row,b.panel)},$n=new Map(Oe(t.hass,s.sensors,"Total").map(i=>[i.key,i])),mt=(i,p,b,m)=>{let C=a-8;if(b===null||C-p<24)return je(i,p-3,m);let S=C-p,_=b>1?"err":b>=.9?"high":b>=.6?"warn":"";return M`<rect class="hg-bg" x=${p} y=${i-2.5} width=${S} height="5" rx="2.5"></rect>
      <rect class="hg-fg ${_}" x=${p} y=${i-2.5} width=${Math.max(2.5,S*Math.min(1,b))} height="5" rx="2.5"></rect>`},se=s.sensors?.total;if(se?.entity||se?.current_sensor||se?.voltage_sensor){let i=A+T/2,p=ft(se);d.push(M`<g style="--acc:var(--primary-color)">${ne($,i,"Total")}
      <text x=${$+P("Total")+6} y=${i+2.8} class="dim">Total</text>
      ${mt(i,$+P("Total")+10+te("Total"),null,p.length>0)}
      ${oe(i,p)}
      ${fe(A,()=>t.moreInfo(de(se)),de(se),!!de(se))}</g>`),A+=T}for(let i of c){let p=A+T/2;y.set(i,p),E.set(i,p);let b=Object.entries(s.sensors?.phases??{}).find(([S])=>S.toUpperCase()===i)?.[1],m=ft(b),C=$n.get(i);d.push(M`<g>
      ${B(h(i),p,$,p,"tap",`stroke:${ee(i)}`)}
      <circle cx=${h(i)} cy=${p} r="2.6" style=${`fill:${ee(i)}`}></circle>
      ${ne($,p,i,ee(i))}
      ${m.length?M`${mt(p,$+P(i)+8,C?.pct??null,!0)}${oe(p,m)}
        ${fe(A,()=>t.moreInfo(de(b)),de(b),!!de(b))}`:f}</g>`),A+=T}function bt(i,p,b,m,C,S,_=!1,w=b.id){let k=O(t.hass,b.state_entity),R=P(w),H=C?b.icon??(b.type==="breaker"?K[b.usage]:K[b.type]):void 0,D=S?10:0,L=p+R+(H?18:6)+D,I=un(m??"",a-8-L-(k===null?0:Ae+4));return M`${ne(p,i,w,k===null?void 0:k?xo:$o)}
      ${S?z(p+R+5,i,S==="open"):f}
      ${H?M`<foreignObject width="24" height="24" transform=${`translate(${p+R+4+D} ${i-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${H} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:f}
      ${I?M`<text x=${L} y=${i+2.8}>${I}</text>`:f}
      ${je(i,I?L+te(I):L-2,_||k!==null,_?a-2:a-Ae-6)}
      ${k===null?f:M`<g class="spill ${k?"on":"off"}"><rect x=${a-Ae-4} y=${i-6} width=${Ae} height="12" rx="6"></rect>
        <text class="spillt" x=${a-Ae/2-4} y=${i+2.4} text-anchor="middle">${k?"ON":"OFF"}</text></g>`}`}let vn=(i,p)=>(p.kind==="current"&&i.current_sensor?i.current_sensor:i.sensor)??"";function xt(i){let p=j(t.hass,i);return oe(A+T/2,p.counters.map(b=>Ue(b,ue(i,b.kind),vn(i,b))))}function _n(i,p){let b=p+8,m=0,C=A+T/2,S=i.icon??(i.type==="breaker"?K[i.usage]:K[i.type]);for(let _ of i.zones){let w=_.icon??S,k=A+T/2,R=_.sensor?X(t.hass,_.sensor):void 0,H=_.floor?vo(_.floor,s):void 0,D=_.floor?te(_.floor,6.5)+10:0,L=p+ke+(_.floor?D+4:0),I=L+(w?16:0),ge=un(_.room??"",a-8-I);d.push(M`<g class=${xn(i,_)?"":"s-dim"}>
        ${B(b,k,p+ke,k)}
        ${H?M`<rect x=${p+ke} y=${k-6} width=${D} height="12" rx="6" style=${`fill:${H.bg}`}></rect>
          <text class="pillt" x=${p+ke+D/2} y=${k+2.3} text-anchor="middle" style=${`fill:${H.fg}`}>${_.floor}</text>`:f}
        ${w?M`<foreignObject width="24" height="24" transform=${`translate(${L} ${k-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${w} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:f}
        ${ge?M`<text x=${I} y=${k+2.8}>${ge}</text>`:f}
        ${je(k,I+te(ge),!!R)}
        ${R?oe(k,[{value:R.value,kind:R.kind,partial:!1,tip:_.sensor}]):f}
        ${fe(A,_.sensor?()=>t.moreInfo(_.sensor):void 0,[_.floor,_.room].filter(Boolean).join(" \xB7 "))}</g>`),m=k,A+=T}return{first:C,last:m}}function $t(i,p,b,m,C,S,_=[]){let w=A+T/2;for(let L of _)E.set(L,Math.max(E.get(L)??0,w));let k=`z:${m}/${C}/${i.id}`,R=i.zones.length>0,H=R&&!De.has(k),D=p+P(i.id)+5;if(d.push(M`<g class=${gt(i)} style=${`--acc:${i.accent??b}`}>
      ${S!==void 0?B(S,w,p,w):f}
      ${_.length?B(h(_[0]),w,p,w,"tap",`stroke:${ee(_[0])}`):f}
      ${_.map(L=>M`<circle cx=${h(L)} cy=${w} r="2.6" style=${`fill:${ee(L)}`}></circle>`)}
      ${bt(w,p,i,yn(i),!0,R?H?"open":"closed":void 0,j(t.hass,i).configured)}
      ${xt(i)}
      ${fe(A,()=>t.select(i),vt(i))}
      ${R?ut(D,w,k):f}</g>`),A+=T,H){let L=d.length,I=_n(i,p);d.splice(L,0,M`<g>${B(p+8,w+he/2,p+8,I.last)}</g>`)}return w}let yn=i=>i.label,vt=i=>[i.label,i.id,i.amp!==void 0?`${i.amp} A`:"",i.mA!==void 0?`${i.mA} mA`:""].filter(Boolean).join(" \xB7 ");function _t(i,p,b,m,C=i.id,S){let _=A+T/2,w=`r:${m}/${p.id}/${i.id}`,k=i.children??[],R=k.length>0&&!De.has(w),H=$+P(C)+5,D=i.accent??p.accent??"#3182ce",L=(i.phases.length?i.phases:p.phases).filter(q=>c.includes(q));for(let q of L)E.set(q,Math.max(E.get(q)??0,_));if(d.push(M`<g class=${gt(i,!0)} style=${`--acc:${D}`}>
      ${L.length?B(h(L[0]),_,$,_,"tap",`stroke:${ee(L[0])}`):f}
      ${L.map(q=>M`<circle cx=${h(q)} cy=${_} r="2.6" style=${`fill:${ee(q)}`}></circle>`)}
      ${bt(_,$,i,b,!1,k.length?R?"open":"closed":void 0,j(t.hass,i).configured,C)}
      ${xt(i)}
      ${fe(A,()=>t.select(i),vt(i))}
      ${k.length?ut(H,_,w):f}</g>`),A+=T,!R)return;let I=$+8,ge=d.length,yt=_;for(let q of k)yt=$t(q,$+ke,D,m,p.id,I,S?S(q):[]);k.length&&d.splice(ge,0,M`<g style=${`--acc:${D}`}>${B(I,_+he/2,I,yt)}</g>`)}for(let i of e){let p=`p:${i.id}`,b=!De.has(p);if(i.label){let m=A+T/2,C=Math.max(60,te(i.label,9.8)+28);d.push(M`<g style="--acc:var(--secondary-text-color)">
        <rect class="ptbox" x=${$} y=${m-he/2-1} width=${C} height=${he+2} rx="3"></rect>
        ${z($+8,m,b)}
        <text class="ptitle" x=${$+16} y=${m+3}>${i.label}</text>
        <rect class="hit" x="0" y=${A} width=${o} height=${T} tabindex="0" role="button" aria-label=${i.label} @click=${()=>n.toggle(p)} @keydown=${ht(()=>n.toggle(p))}><title>${i.label}</title></rect></g>`),A+=T}if(!(!b&&i.label))for(let m of i.rows){let C=m.modules.filter(w=>w.children!==void 0),S=C.length?m.modules.indexOf(C[0]):m.modules.length,_=dt(m);if(_){let w=hn(_.phases);_t(_,m,m.label,i.id,m.id,k=>{let R=k.phases.length?k.phases:m.phases;return hn(R)===w?[]:R.filter(H=>c.includes(H))})}else for(let w of m.modules.slice(0,S))w.type==="free"&&!w.label||$t(w,$,m.accent??"#3182ce",i.id,m.id,void 0,(w.phases.length?w.phases:m.phases).filter(k=>c.includes(k)));for(let w of C)_t(w,m,[m.label,w.label].filter(Boolean).join(" - ")||void 0,i.id)}}let wn=c.map(i=>B(h(i),y.get(i),h(i),E.get(i),"trunk",`stroke:${ee(i)}`)),kn=A+8;return u`<div class="dia" style=${`max-width:${n.maxWidth}px`}>
    <svg viewBox=${`0 0 ${o} ${kn}`} width="100%" preserveAspectRatio="xMidYMin meet" role="img">${wn}${d}</svg></div>`}var yo=["differential","breaker","contactor_daynight","contactor","relay","impulse","psu","surge","socket","switch_disconnector","meter","free","custom"],wo=["id","type","label","amp","poles","width","mA","class","curve","usage","phases","sensor","current_sensor","voltage_sensor","state_entity","icon","max_w","accent","output","section"],pt=["l1","l2","l3"],F=(e,t)=>({number:{min:e,max:t,mode:"box"}}),Ce=class extends V{constructor(){super(...arguments);this._open=new Set;this._lbl=n=>{let o=/^(l[123])_(entity|current|volt|max)$/.exec(n.name);return o?`${o[1].toUpperCase()} \xB7 ${v(this.L,o[2]==="entity"?"head_sensor":o[2]==="current"?"current_sensor":o[2]==="volt"?"voltage_sensor":"max_w")}`:v(this.L,n.name==="class"?"cls":n.name==="total_current"?"current_sensor":n.name==="total_volt"?"voltage_sensor":n.name)}}setConfig(n){this._config=n}get L(){return this._config?.language??this._hassLang}get _hassLang(){return this.hass?.language?.startsWith("fr")?"fr":"en"}_emit(n){this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}_panels(){return structuredClone(this._config.panels??[])}_setPanels(n){this._emit({...this._config,panels:n})}_sec(n,o,s,r=f){let a=this._open.has(n);return u`<details class="blk" ?open=${a} @toggle=${d=>{let l=d.currentTarget;d.target!==l||l.open===this._open.has(n)||(l.open?this._open.add(n):this._open.delete(n),this.requestUpdate())}}><summary><span>${o}</span>${r}</summary>${a?s():f}</details>`}_general(){let n=this._config,o={title:n.title,incoming_title:n.incoming_title,nominal_voltage:n.nominal_voltage,language:n.language??this._hassLang,module_width:n.module_width,view:n.view??"panel",modules_per_row:n.modules_per_row,max_width:n.max_width,collapsed:n.collapsed??"none",search:n.search!==!1,show_led:!!n.show_led},s=[{name:"title",selector:{text:{}}},{name:"incoming_title",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"language",selector:{select:{options:["fr","en"]}}},{name:"module_width",selector:F(30,90)}]},{name:"max_width",selector:F(300,3e3)},{name:"nominal_voltage",selector:F(100,480)},{name:"modules_per_row",selector:F(1,60)},{name:"collapsed",selector:{select:{options:[{value:"none",label:"\u2014"},{value:"zones",label:v(this.L,"zones")},{value:"rows",label:v(this.L,"row")},{value:"panels",label:v(this.L,"panel")}]}}},{name:"search",selector:{boolean:{}}},{name:"show_led",selector:{boolean:{}}},{name:"view",selector:{select:{options:[{value:"panel",label:v(this.L,"view_panel")},{value:"tree",label:v(this.L,"view_tree")}]}}}];return u`<ha-form .hass=${this.hass} .data=${o} .schema=${s} .computeLabel=${this._lbl}
      @value-changed=${r=>{let a=r.detail.value,d={...n,title:a.title||void 0,incoming_title:a.incoming_title||void 0,nominal_voltage:a.nominal_voltage||void 0,language:a.language,module_width:a.module_width||void 0,view:a.view==="tree"?"tree":void 0,max_width:a.max_width||void 0,modules_per_row:a.modules_per_row||void 0,collapsed:a.collapsed&&a.collapsed!=="none"?a.collapsed:void 0,search:a.search===!1?!1:void 0,show_led:a.show_led?!0:void 0};for(let l of Object.keys(d))d[l]===void 0&&delete d[l];this._emit(d)}}></ha-form>`}_sensors(){let n=this._config,o=n.sensors??{},s=l=>Object.keys(o.phases??{}).find(c=>c.toLowerCase()===l)??l,r={};for(let l of pt){let c=o.phases?.[s(l)];r[`${l}_entity`]=c?.entity,r[`${l}_current`]=c?.current_sensor,r[`${l}_volt`]=c?.voltage_sensor,r[`${l}_max`]=c?.max_w}let a={total_entity:o.total?.entity,total_current:o.total?.current_sensor,total_volt:o.total?.voltage_sensor,total_max:o.total?.max_w,...r},d=[{type:"grid",name:"",schema:[{name:"total_entity",selector:{entity:{domain:"sensor"}}},{name:"total_current",selector:{entity:{domain:"sensor"}}},{name:"total_volt",selector:{entity:{domain:"sensor"}}}]},{name:"total_max",selector:F(0,1e5)},...pt.map(l=>({type:"grid",name:"",schema:[{name:`${l}_entity`,selector:{entity:{domain:"sensor"}}},{name:`${l}_current`,selector:{entity:{domain:"sensor"}}},{name:`${l}_volt`,selector:{entity:{domain:"sensor"}}},{name:`${l}_max`,selector:F(0,1e5)}]}))];return u`<ha-form .hass=${this.hass} .data=${a} .schema=${d} .computeLabel=${this._lbl}
      @value-changed=${l=>{let c=l.detail.value,x={...n},g={...o.total??{},entity:c.total_entity||void 0,current_sensor:c.total_current||void 0,voltage_sensor:c.total_volt||void 0,max_w:c.total_max||void 0};for(let y of Object.keys(g))g[y]===void 0&&delete g[y];let h={...o.phases??{}};for(let y of pt){let E=s(y),A={...h[E]??{},entity:c[`${y}_entity`]||void 0,current_sensor:c[`${y}_current`]||void 0,voltage_sensor:c[`${y}_volt`]||void 0,max_w:c[`${y}_max`]||void 0};for(let P of Object.keys(A))A[P]===void 0&&delete A[P];Object.keys(A).length?h[E]=A:delete h[E]}let $={...o,total:Object.keys(g).length?g:void 0,phases:Object.keys(h).length?h:void 0};for(let y of Object.keys($))$[y]===void 0&&delete $[y];Object.keys($).length?x.sensors=$:delete x.sensors,this._emit(x)}}></ha-form>`}_moduleSchema(n){let o=this.L,s=n==="differential";return[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"type",selector:{select:{mode:"dropdown",options:yo.map(r=>({value:r,label:v(o,`t_${r}`)}))}}}]},{name:"label",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"amp",selector:F(1,250)},{name:"poles",selector:F(1,4)},{name:"width",selector:F(1,12)},...s?[{name:"mA",selector:F(1,1e3)},{name:"class",selector:{select:{options:["AC","A","F","B"]}}}]:[{name:"curve",selector:{select:{options:["B","C","D"]}}}]]},...n==="breaker"?[{name:"usage",selector:{select:{options:["power","socket","light","other"].map(r=>({value:r,label:v(o,`u_${r}`)}))}}}]:[],{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}},{name:"sensor",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"current_sensor",selector:{entity:{domain:"sensor"}}},{name:"voltage_sensor",selector:{entity:{domain:"sensor"}}}]},...n==="psu"?[{name:"output",selector:{text:{}}}]:[],{name:"state_entity",selector:{entity:{}}},{name:"section",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"icon",selector:{icon:{}}},{name:"max_w",selector:F(0,1e5)}]}]}_patchModule(n,o,s,r){let a=this._panels(),d=a[n].rows[o].modules[s];for(let l of wo){let c=r[l];c===void 0||c===""||c===null||Array.isArray(c)&&!c.length||typeof c=="number"&&Number.isNaN(c)?delete d[l]:d[l]=c}this._setPanels(a)}_zones(n,o,s,r){let a=this.L,d=[{type:"grid",name:"",schema:[{name:"floor",selector:{text:{}}},{name:"room",selector:{text:{}}}]},{name:"sensor",selector:{entity:{domain:"sensor"}}},{name:"icon",selector:{icon:{}}}],l=(r.zones??[]).map(c=>typeof c=="string"?{room:c}:c);return u`${l.map((c,x)=>u`<div class="blk"><ha-form .hass=${this.hass} .data=${c} .schema=${d} .computeLabel=${this._lbl}
        @value-changed=${g=>{let h=this._panels(),$=h[n].rows[o].modules[s],y=[...$.zones??[]],E={};for(let[A,P]of Object.entries(g.detail.value))P!==""&&P!==void 0&&(E[A]=P);y[x]=E,$.zones=y,this._setPanels(h)}}></ha-form>
      <button class="danger" @click=${()=>{let g=this._panels(),h=g[n].rows[o].modules[s];h.zones=(h.zones??[]).filter(($,y)=>y!==x),h.zones.length||delete h.zones,this._setPanels(g)}}>${v(a,"remove")}</button></div>`)}
      <button class="add" @click=${()=>{let c=this._panels(),x=c[n].rows[o].modules[s];x.zones=[...x.zones??[],{}],this._setPanels(c)}}>+ ${v(a,"add_zone")}</button>`}_module(n,o,s,r){let a=this.L,d=String(r.type??"breaker"),l=`${n}/${o}/${s}`,c=this._open.has(l),x=h=>$=>{$.preventDefault(),$.stopPropagation(),h()},g=h=>{let $=this._panels(),y=$[n].rows[o].modules,E=s+h;E<0||E>=y.length||([y[s],y[E]]=[y[E],y[s]],this._setPanels($))};return u`<details class="blk" ?open=${c} @toggle=${h=>{let $=h.currentTarget;h.target!==$||$.open===this._open.has(l)||($.open?this._open.add(l):this._open.delete(l),this.requestUpdate())}}><summary><span>${v(a,`t_${d}`)} · ${r.id??""} ${r.amp?`${r.amp} A`:""}</span>
        <button @click=${x(()=>g(-1))}>◀</button><button @click=${x(()=>g(1))}>▶</button>
        <button class="danger" @click=${x(()=>{let h=this._panels();h[n].rows[o].modules.splice(s,1),this._setPanels(h)})}>✕</button></summary>
      ${c?u`<ha-form .hass=${this.hass} .data=${r} .schema=${this._moduleSchema(d)} .computeLabel=${this._lbl}
        @value-changed=${h=>this._patchModule(n,o,s,h.detail.value)}></ha-form>
      <div class="note">${v(a,"zones")}</div>${this._zones(n,o,s,r)}`:f}
    </details>`}_row(n,o,s){let r=this.L,a=d=>l=>{l.preventDefault(),l.stopPropagation(),d()};return this._sec(`r:${n}/${o}`,`${v(r,"row")} \xB7 ${s.label??s.id??o+1}`,()=>u`
      <ha-form .hass=${this.hass} .data=${{id:s.id,label:s.label,phases:s.phases}}
        .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}}]}
        .computeLabel=${this._lbl}
        @value-changed=${d=>{let l=this._panels(),c=l[n].rows[o];for(let x of["id","label","phases"]){let g=d.detail.value[x];g===void 0||g===""||Array.isArray(g)&&!g.length?delete c[x]:c[x]=g}this._setPanels(l)}}></ha-form>
      ${(s.modules??[]).map((d,l)=>this._module(n,o,l,d))}
      <button class="add" @click=${()=>{let d=this._panels(),l=d[n].rows[o];l.modules=[...l.modules??[],{type:l.modules?.length?"breaker":"differential",id:`${l.id??o+1}-${(l.modules?.length??0)+1}`,amp:l.modules?.length?16:40}],this._setPanels(d)}}>+ ${v(r,"add_module")}</button>
    `,u`<button class="danger" @click=${a(()=>{let d=this._panels();d[n].rows.splice(o,1),this._open=new Set([...this._open].filter(l=>!l.startsWith("r:")&&!/^\d/.test(l))),this._setPanels(d)})}>✕</button>`)}render(){if(!this._config)return f;let n=this.L,o=this._config,s=!!o.groups&&!o.panels;return u`${this._sec("sec:general",v(n,"general"),()=>this._general())}
      ${this._sec("sec:sensors",v(n,"global_sensors"),()=>this._sensors())}
      ${s?u`<div class="banner">${v(n,"legacy")}
            <button @click=${()=>{let r={...o,panels:tt(o.groups)};delete r.groups,this._emit(r)}}>${v(n,"convert")}</button></div>`:f}
      ${(o.panels??[]).map((r,a)=>this._sec(`p:${a}`,`${v(n,"panel")} \xB7 ${r.label??r.id??a+1}`,()=>u`
        <ha-form .hass=${this.hass} .data=${{id:r.id,label:r.label,modules_per_row:r.modules_per_row}} .computeLabel=${this._lbl}
          .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"modules_per_row",selector:F(1,60)}]}
          @value-changed=${d=>{let l=this._panels();l[a].id=d.detail.value.id||void 0,l[a].label=d.detail.value.label||void 0,l[a].modules_per_row=d.detail.value.modules_per_row||void 0,this._setPanels(l)}}></ha-form>
        ${(r.rows??[]).map((d,l)=>this._row(a,l,d))}
        <button class="add" @click=${()=>{let d=this._panels();d[a].rows=[...d[a].rows??[],{id:`row_${(d[a].rows?.length??0)+1}`,modules:[]}],this._setPanels(d)}}>+ ${v(n,"add_row")}</button>`,u`<button class="danger" @click=${d=>{d.preventDefault(),d.stopPropagation();let l=this._panels();l.splice(a,1),this._open=new Set([...this._open].filter(c=>!c.startsWith("p:")&&!c.startsWith("r:")&&!/^\d/.test(c))),this._setPanels(l)}}>✕</button>`))}
      <button class="add" @click=${()=>{let r=this._panels();r.push({id:`tableau_${r.length+1}`,rows:[]}),this._setPanels(r)}}>+ ${v(n,"add_panel")}</button>
      <div class="note">${v(n,"editor_note")}</div>`}};Ce.properties={hass:{attribute:!1},_config:{state:!0}},Ce.styles=Wt;customElements.get("din-panel-card-editor")||customElements.define("din-panel-card-editor",Ce);var bn="din-panel-card:view";function ko(e){let t=`${e.title??""}|${(e.panels??[]).map(o=>o.id??o.label??"").join(",")}|${(e.groups??[]).length}`,n=0;for(let o of t)n=n*31+o.charCodeAt(0)|0;return(n>>>0).toString(36)}var Me=class extends V{constructor(){super(...arguments);this._viewKey=bn;this._qi=-1;this._panels=[];this._entities=[]}static getConfigElement(){return document.createElement("din-panel-card-editor")}static getStubConfig(){return{type:"custom:din-panel-card",panels:[{id:"tableau_1",label:"Tableau principal",rows:[{id:"row_1",label:"Rang\xE9e 1",phases:["L1"],modules:[{type:"differential",id:"ID1",amp:40,mA:30,poles:2,class:"AC"},{type:"breaker",id:"1-1",amp:16,label:"Prises",usage:"socket"},{type:"breaker",id:"1-2",amp:10,label:"Lumi\xE8res",usage:"light"}]}]}]}}setConfig(n){qt(n),this._panels=Kt(n),this._entities=Vt(n,this._panels),this._config=n,this._selected=null;let o=n.collapsed;this._collapsed=new Set(o==="zones"||o==="rows"||o==="panels"?ct(this._panels,o):[]),this._cw=0;let s=null;if(this._viewKey=`${bn}:${ko(n)}`,n.view!=="tree"&&n.view!=="panel")try{s=localStorage.getItem(this._viewKey)}catch{}this._view=n.view==="tree"||n.view==="panel"?n.view:s==="tree"?"tree":"panel"}_toggle(n){let o=new Set(this._collapsed);o.has(n)?o.delete(n):o.add(n),this._collapsed=o}_collapseOne(){for(let n of["zones","rows","panels"]){let o=ct(this._panels,n);if(o.some(s=>!this._collapsed.has(s))){this._collapsed=new Set([...this._collapsed,...o]);return}}}_setView(n){if(this._view=n,this._config?.view!=="tree"&&this._config?.view!=="panel")try{localStorage.setItem(this._viewKey,n)}catch{}}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._ro=new ResizeObserver(n=>{let o=Math.round(n[0]?.contentRect.width??0);o>0&&o!==this._cw&&(this._cw=o)}),this._ro.observe(this))}disconnectedCallback(){this._ro?.disconnect(),this._ro=void 0,super.disconnectedCallback()}set hass(n){let o=this._hass;this._hass=n,(!o||o.language!==n.language||o.themes?.darkMode!==n.themes?.darkMode||this._entities.some(s=>o.states[s]!==n.states[s]))&&this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 2+this._panels.reduce((n,o)=>n+o.rows.length*3,0)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}get _lang(){return this._config?.language??(this._hass?.language?.startsWith("fr")?"fr":"en")}_summary(n){if(!this._hass)return f;let o=Oe(this._hass,this._config?.sensors,v(n,"total"));if(!o.length)return f;let s=Math.max(0,...this._panels.map(a=>a.capacity??0)),r=a=>a.value===null?v(n,"unavailable"):`${a.approx?"\u2248 ":""}${N(a.kind,a.value)}`;return u`<div class="panel incoming ${s?"fixed":""}" style=${s?`--n:${s}`:""}>
      ${this._config?.incoming_title??v(n,"incoming")?u`<div class="panel-title">${this._config?.incoming_title??v(n,"incoming")}</div>`:f}
      <div class="in-plate">${o.map(a=>{let d=a.key==="total",l=a.pct===null?"":a.pct>1?"err":a.pct>=.9?"high":a.pct>=.6?"warn":"";return u`<div class="in-row ${d?"total":""}" title=${a.entity??""}
            @click=${()=>a.entity&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:a.entity},bubbles:!0,composed:!0}))}>
          ${d?u`<b class="in-label">${a.label}</b>`:u`<span class="chip ph-${a.key.toLowerCase()} in-label">${a.label}</span>`}
          <div class="in-track">${!d&&a.pct!==null?u`<i class=${l} style=${`width:${Math.max(1.5,Math.min(1,a.pct)*100)}%`}></i>`:f}</div>
          <div class="in-vals">${a.items.map(c=>u`<span class="k-${c.kind} ${c.value===null?"bad":""}">${r(c)}</span>`)}</div>
        </div>`})}</div>
    </div>`}_searchKey(n){if(n.key==="Escape"){this._q="",this._qi=-1;return}if(n.key!=="Enter")return;n.preventDefault();let o=[...this.shadowRoot?.querySelectorAll(".mod.s-hit, .dia g.s-hit")??[]];o.length&&(this._qi=(this._qi+1)%o.length,o[this._qi].scrollIntoView?.({block:"center",inline:"center",behavior:"smooth"}))}render(){if(!this._config||!this._hass)return f;let n=this._lang,o={hass:this._hass,lang:n,select:h=>{this._selected=h},moreInfo:h=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:h},bubbles:!0,composed:!0}))},s=this._q??"",r=ln(s,n);r&&(o.search=r),this._config.show_led&&(o.showLed=!0);let a=r?dn(this._panels,r):0,d=!!this._hass.themes?.darkMode,l=Number(this._config.module_width),c=this._view==="tree",x=Number(this._config.max_width)>0?Number(this._config.max_width):700,g=gn(Math.min(this._cw||x,x));return u`<ha-card class=${d?"dark":""} style=${l>0?`--u:${l}px`:""}>
      <div class="toolbar">
        <h2>${this._config.title??""}</h2>
        ${this._config.search===!1?f:u`<div class="search">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input type="text" .value=${s} placeholder=${v(n,"search_ph")} aria-label=${v(n,"search")} enterkeyhint="search"
            @input=${h=>{this._q=h.target.value,this._qi=-1}}
            @keydown=${h=>this._searchKey(h)} />
          ${s?u`<span class="count" aria-live="polite">${a?`${a} ${v(n,"result")}${a>1?"s":""}`:v(n,"no_result")}</span>
            <button class="clr" title=${v(n,"clear")} aria-label=${v(n,"clear")} @click=${()=>{this._q="",this._qi=-1}}><ha-icon icon="mdi:close"></ha-icon></button>`:f}
        </div>`}
        ${c?u`
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
      ${c?mn(this._panels,o,{config:this._config,width:g,maxWidth:x,collapsed:this._collapsed,toggle:h=>this._toggle(h)}):this._panels.map(h=>rn(h,o))}
      ${this._selected?u`<dialog @close=${()=>{this._selected=null}}
            @click=${h=>{h.target===h.currentTarget&&h.currentTarget.close()}}>
            ${cn(this._selected,o,()=>this.shadowRoot?.querySelector("dialog")?.close())}</dialog>`:f}
    </ha-card>`}updated(){let n=this.shadowRoot?.querySelector("dialog");n&&this._selected&&!n.open&&n.showModal()}};Me.properties={_config:{state:!0},_selected:{state:!0},_view:{state:!0},_collapsed:{state:!0},_cw:{state:!0},_q:{state:!0}},Me.styles=Dt;customElements.get("din-panel-card")||customElements.define("din-panel-card",Me);console.info("%c DIN-PANEL-CARD %c v1.27.0 ","color:#fff;background:#3182ce;font-weight:700","color:#3182ce;background:#fff");window.customCards=window.customCards||[];window.customCards.push({type:"din-panel-card",name:"DIN Panel Card",description:"Tableau \xE9lectrique modulaire graphique (rang\xE9es, rail DIN, modules) aliment\xE9 par les entit\xE9s Home Assistant.",preview:!1});
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
