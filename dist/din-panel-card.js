var Me=globalThis,Se=Me.ShadowRoot&&(Me.ShadyCSS===void 0||Me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,He=Symbol(),ht=new WeakMap,fe=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==He)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Se&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=ht.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ht.set(t,e))}return e}toString(){return this.cssText}},ft=n=>new fe(typeof n=="string"?n:n+"",void 0,He),Ee=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((o,s,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new fe(t,n,He)},gt=(n,e)=>{if(Se)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),s=Me.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,n.appendChild(o)}},Ne=Se?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return ft(t)})(n):n;var{is:pn,defineProperty:un,getOwnPropertyDescriptor:hn,getOwnPropertyNames:fn,getOwnPropertySymbols:gn,getPrototypeOf:mn}=Object,ze=globalThis,mt=ze.trustedTypes,bn=mt?mt.emptyScript:"",xn=ze.reactiveElementPolyfillSupport,ge=(n,e)=>n,Ue={toAttribute(n,e){switch(e){case Boolean:n=n?bn:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},xt=(n,e)=>!pn(n,e),bt={attribute:!0,type:String,converter:Ue,reflect:!1,useDefault:!1,hasChanged:xt};Symbol.metadata??=Symbol("metadata"),ze.litPropertyMetadata??=new WeakMap;var G=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=bt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&un(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){let{get:s,set:r}=hn(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){let d=s?.call(this);r?.call(this,a),this.requestUpdate(e,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bt}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;let e=mn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){let t=this.properties,o=[...fn(t),...gn(t)];for(let s of o)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let s of o)t.unshift(Ne(s))}else e!==void 0&&t.push(Ne(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){let r=(o.converter?.toAttribute!==void 0?o.converter:Ue).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){let o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Ue;this._$Em=s;let d=a.fromAttribute(t,r.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(e,t,o,s=!1,r){if(e!==void 0){let a=this.constructor;if(s===!1&&(r=this[e]),o??=a.getPropertyOptions(e),!((o.hasChanged??xt)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:s,wrapped:r},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[s,r]of o){let{wrapped:a}=r,d=this[s];a!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,r,d)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[ge("elementProperties")]=new Map,G[ge("finalized")]=new Map,xn?.({ReactiveElement:G}),(ze.reactiveElementVersions??=[]).push("2.1.2");var Ke=globalThis,vt=n=>n,Le=Ke.trustedTypes,$t=Le?Le.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ct="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+Y,vn=`<${Mt}>`,se=document,be=()=>se.createComment(""),xe=n=>n===null||typeof n!="object"&&typeof n!="function",Ve=Array.isArray,$n=n=>Ve(n)||typeof n?.[Symbol.iterator]=="function",Ie=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,yt=/>/g,ne=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,kt=/"/g,St=/^(?:script|style|textarea|title)$/i,qe=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),p=qe(1),C=qe(2),po=qe(3),re=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),At=new WeakMap,oe=se.createTreeWalker(se,129);function Et(n,e){if(!Ve(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(e):e}var _n=(n,e)=>{let t=n.length-1,o=[],s,r=e===2?"<svg>":e===3?"<math>":"",a=me;for(let d=0;d<t;d++){let i=n[d],c,$,b=-1,f=0;for(;f<i.length&&(a.lastIndex=f,$=a.exec(i),$!==null);)f=a.lastIndex,a===me?$[1]==="!--"?a=_t:$[1]!==void 0?a=yt:$[2]!==void 0?(St.test($[2])&&(s=RegExp("</"+$[2],"g")),a=ne):$[3]!==void 0&&(a=ne):a===ne?$[0]===">"?(a=s??me,b=-1):$[1]===void 0?b=-2:(b=a.lastIndex-$[2].length,c=$[1],a=$[3]===void 0?ne:$[3]==='"'?kt:wt):a===kt||a===wt?a=ne:a===_t||a===yt?a=me:(a=ne,s=void 0);let g=a===ne&&n[d+1].startsWith("/>")?" ":"";r+=a===me?i+vn:b>=0?(o.push(c),i.slice(0,b)+Ct+i.slice(b)+Y+g):i+Y+(b===-2?d:g)}return[Et(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},ve=class n{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let r=0,a=0,d=e.length-1,i=this.parts,[c,$]=_n(e,t);if(this.el=n.createElement(c,o),oe.currentNode=this.el.content,t===2||t===3){let b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(s=oe.nextNode())!==null&&i.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let b of s.getAttributeNames())if(b.endsWith(Ct)){let f=$[a++],g=s.getAttribute(b).split(Y),y=/([.?@])?(.*)/.exec(f);i.push({type:1,index:r,name:y[2],strings:g,ctor:y[1]==="."?De:y[1]==="?"?We:y[1]==="@"?Fe:de}),s.removeAttribute(b)}else b.startsWith(Y)&&(i.push({type:6,index:r}),s.removeAttribute(b));if(St.test(s.tagName)){let b=s.textContent.split(Y),f=b.length-1;if(f>0){s.textContent=Le?Le.emptyScript:"";for(let g=0;g<f;g++)s.append(b[g],be()),oe.nextNode(),i.push({type:2,index:++r});s.append(b[f],be())}}}else if(s.nodeType===8)if(s.data===Mt)i.push({type:2,index:r});else{let b=-1;for(;(b=s.data.indexOf(Y,b+1))!==-1;)i.push({type:7,index:r}),b+=Y.length-1}r++}}static createElement(e,t){let o=se.createElement("template");return o.innerHTML=e,o}};function le(n,e,t=n,o){if(e===re)return e;let s=o!==void 0?t._$Co?.[o]:t._$Cl,r=xe(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,t,o)),o!==void 0?(t._$Co??=[])[o]=s:t._$Cl=s),s!==void 0&&(e=le(n,s._$AS(n,e.values),s,o)),e}var je=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??se).importNode(t,!0);oe.currentNode=s;let r=oe.nextNode(),a=0,d=0,i=o[0];for(;i!==void 0;){if(a===i.index){let c;i.type===2?c=new $e(r,r.nextSibling,this,e):i.type===1?c=new i.ctor(r,i.name,i.strings,this,e):i.type===6&&(c=new Be(r,this,e)),this._$AV.push(c),i=o[++d]}a!==i?.index&&(r=oe.nextNode(),a++)}return oe.currentNode=se,s}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},$e=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=le(this,e,t),xe(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==re&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$n(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ve.createElement(Et(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{let r=new je(s,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=At.get(e.strings);return t===void 0&&At.set(e.strings,t=new ve(e)),t}k(e){Ve(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,s=0;for(let r of e)s===t.length?t.push(o=new n(this.O(be()),this.O(be()),this,this.options)):o=t[s],o._$AI(r),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let o=vt(e).nextSibling;vt(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},de=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(e,t=this,o,s){let r=this.strings,a=!1;if(r===void 0)e=le(this,e,t,0),a=!xe(e)||e!==this._$AH&&e!==re,a&&(this._$AH=e);else{let d=e,i,c;for(e=r[0],i=0;i<r.length-1;i++)c=le(this,d[o+i],t,i),c===re&&(c=this._$AH[i]),a||=!xe(c)||c!==this._$AH[i],c===h?e=h:e!==h&&(e+=(c??"")+r[i+1]),this._$AH[i]=c}a&&!s&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},De=class extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},We=class extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Fe=class extends de{constructor(e,t,o,s,r){super(e,t,o,s,r),this.type=5}_$AI(e,t=this){if((e=le(this,e,t,0)??h)===re)return;let o=this._$AH,s=e===h&&o!==h||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==h&&(o===h||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Be=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){le(this,e)}};var yn=Ke.litHtmlPolyfillSupport;yn?.(ve,$e),(Ke.litHtmlVersions??=[]).push("3.3.3");var zt=(n,e,t)=>{let o=t?.renderBefore??e,s=o._$litPart$;if(s===void 0){let r=t?.renderBefore??null;o._$litPart$=s=new $e(e.insertBefore(be(),r),r,void 0,t??{})}return s._$AI(n),s};var Ge=globalThis,V=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return re}};V._$litElement$=!0,V.finalized=!0,Ge.litElementHydrateSupport?.({LitElement:V});var wn=Ge.litElementPolyfillSupport;wn?.({LitElement:V});(Ge.litElementVersions??=[]).push("4.2.2");var Lt=Ee`
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
  .scroller { padding-top: 16px; }
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
  /* peigne d'alimentation bleu au-dessus des borniers */
  .rail-wrap::before {
    content: ''; position: absolute; left: 4px; right: 6px; top: -11px; height: 8px; z-index: 2; border-radius: 2px;
    background: linear-gradient(180deg, #7fc0ff, #2a7fd6 60%, #1c62ad); box-shadow: 0 1px 2px rgba(0,0,0,.4);
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
`,Pt=Ee`
  :host { display: block; }
  .blk { margin: 8px 0; padding: 6px 10px; border: 1px solid var(--divider-color); border-radius: 8px; }
  .blk .blk { background: var(--secondary-background-color); }
  summary { cursor: pointer; display: flex; align-items: center; gap: 6px; padding: 4px 0; font-weight: 600; }
  summary span { flex: 1; }
  button { cursor: pointer; border: 1px solid var(--divider-color); border-radius: 6px; padding: 2px 8px; background: var(--card-background-color); color: var(--primary-text-color); }
  button.add { margin: 6px 0; } button.danger { color: var(--error-color); }
  .banner { padding: 10px; border-radius: 8px; background: var(--warning-color, #f59f00); color: #000; margin-bottom: 10px; }
  .note { font-size: 12px; color: var(--secondary-text-color); margin: 8px 0; }
`;var Rt={differential:{type:"differential"},rcd:{type:"differential"},diff:{type:"differential"},breaker:{type:"breaker"},breaker_1p:{type:"breaker",poles:1},breaker_2p:{type:"breaker",poles:2},breaker_3p:{type:"breaker",poles:3},breaker_4p:{type:"breaker",poles:4},three_phase:{type:"breaker",poles:3},tetrapolar:{type:"breaker",poles:4},contactor_daynight:{type:"contactor_daynight"},daynight:{type:"contactor_daynight"},contactor:{type:"contactor"},power_contactor:{type:"contactor"},impulse:{type:"impulse"},telerupteur:{type:"impulse"},tele:{type:"impulse"},relay:{type:"relay"},relais:{type:"relay"},psu:{type:"psu"},power_supply:{type:"psu"},alimentation:{type:"psu"},surge:{type:"surge"},surge_arrester:{type:"surge"},meter:{type:"meter"},free:{type:"free"},custom:{type:"custom"}},kn={differential:{poles:2},breaker:{poles:1},contactor_daynight:{poles:1,width:2},contactor:{poles:1,width:2},impulse:{poles:2,width:1},relay:{poles:2,width:1},psu:{poles:2,width:2},surge:{poles:2},meter:{poles:2,width:4},free:{poles:1,width:1},custom:{poles:1,width:1}},Tt=(n,e,t)=>Math.min(t,Math.max(e,n)),I=n=>n==null||n===""?void 0:String(n);function Pe(n){let e={};for(let[t,o]of Object.entries(n))o!=null&&o!==""&&(e[t]=o);return e}function Ze(n){return[{id:"tableau_1",label:"Tableau principal",rows:n.map(t=>{let o=(t.phases?.length??0)>=3,s=Pe({id:t.id,type:"differential",label:t.label,poles:t.poles??(o?4:void 0),amp:t.amp,mA:t.mA,class:t.class,sensor:t.sensor,max_w:t.max_w,accent:t.accent}),r=(t.circuits??[]).map(a=>{let{type:d,...i}=a;return Pe({...i,type:"breaker",usage:d,poles:a.poles??(o?3:void 0)})});return Pe({id:String(t.id),label:t.label??String(t.id),phases:t.phases,accent:t.accent,modules:[s,...r]})})}]}function An(n){let e={circuits:new Map,groups:new Map};for(let t of n??[]){e.groups.set(String(t.id),t);for(let o of t.circuits??[])e.circuits.has(String(o.id))||e.circuits.set(String(o.id),o)}return e}function Cn(n){return typeof n=="string"?{room:n}:Pe({floor:I(n.floor),room:I(n.room),icon:n.icon,sensor:n.sensor})}function Mn(n,e,t,o){let s={...n};if(n.circuit!==void 0&&o.circuits.has(String(n.circuit))){let g=o.circuits.get(String(n.circuit)),{type:y,...M}=g;s={...M,type:"breaker",usage:y,...n}}if(n.group!==void 0&&o.groups.has(String(n.group))){let{circuits:g,...y}=o.groups.get(String(n.group));s={...y,type:"differential",...n}}let r=Rt[String(s.type??"breaker").toLowerCase()]??Rt.custom,a=r.type,d=(s.phases??e.phases).map(g=>String(g).toUpperCase()),i=kn[a],c=s.poles??r.poles??(a==="breaker"&&d.length>=3?3:void 0),$=Tt(Number(s.width??i.width??c??i.poles)||1,1,12),b=Tt(Number(c??(a==="breaker"&&$===1?2:i.poles))||1,1,4),f=["power","socket","light"].includes(String(s.usage))?s.usage:"other";return{id:I(s.id)??`${e.id}-${t+1}`,type:a,label:I(s.label),poles:b,width:$,amp:s.amp!==void 0?Number(s.amp):void 0,mA:s.mA!==void 0?Number(s.mA):void 0,cls:I(s.class),curve:I(s.curve),usage:f,icon:s.icon,accent:s.accent,phases:d,sensor:s.sensor,current_sensor:s.current_sensor,voltage_sensor:s.voltage_sensor,state_entity:s.state_entity,max_w:s.max_w!==void 0?Number(s.max_w):void 0,zones:(s.zones??[]).map(Cn),note:I(s.note),output:I(s.output),section:I(s.section)}}function Sn(n,e,t){let o=I(n.id)??`row_${e+1}`,s=(n.phases??[]).map(d=>String(d).toUpperCase()),r=(n.modules??[]).map((d,i)=>Mn(d,{phases:s,id:o},i,t)),a;for(let d of r)d.type==="differential"?(a=d,d.children=[]):a&&d.type!=="free"&&d.type!=="meter"&&a.children.push(d);return{id:o,label:I(n.label),phases:s,accent:n.accent,modules:r}}function En(n){let e=Math.floor(Number(n));return Number.isFinite(e)&&e>=1?Math.min(e,60):void 0}function Ot(n){let e=An(n.groups),t=n.panels??(n.groups?Ze(n.groups):[]),o=Number(n.nominal_voltage)>0?Number(n.nominal_voltage):void 0,s=t.map((r,a)=>({id:I(r.id)??`panel_${a+1}`,label:I(r.label),capacity:En(r.modules_per_row??n.modules_per_row),rows:(r.rows??[]).map((d,i)=>Sn(d,i,e))}));if(o)for(let r of s)for(let a of r.rows)for(let d of a.modules)d.volts=o;return s}function Ht(n){if(!n||!n.panels&&!n.groups)throw new Error("Configuration invalide : d\xE9finir 'panels' (nouveau format) ou 'groups' (ancien format).");if(n.max_width!==void 0&&!(typeof n.max_width=="number"&&n.max_width>0))throw new Error("'max_width' doit \xEAtre un nombre positif de pixels (ex. 1100), sans unit\xE9.");let e=t=>t!==void 0&&!(Number.isInteger(t)&&t>=1);if(e(n.modules_per_row)||(n.panels??[]).some(t=>e(t.modules_per_row)))throw new Error("'modules_per_row' doit \xEAtre un entier \u2265 1 (nombre de modules DIN par rang\xE9e).");if(n.panels&&!Array.isArray(n.panels))throw new Error("'panels' doit \xEAtre une liste.");if(n.groups&&!Array.isArray(n.groups))throw new Error("'groups' doit \xEAtre une liste.")}function Nt(n,e){let t=new Set,o=s=>{s&&t.add(s)};o(n.sensors?.total?.entity),o(n.sensors?.total?.current_sensor),o(n.sensors?.total?.voltage_sensor);for(let s of Object.values(n.sensors?.phases??{}))o(s?.entity),o(s?.current_sensor),o(s?.voltage_sensor);for(let s of e)for(let r of s.rows)for(let a of r.modules){o(a.sensor),o(a.current_sensor),o(a.voltage_sensor),o(a.state_entity);for(let d of a.zones)o(d.sensor)}return[...t]}var Ye=n=>!n||n==="unavailable"||n==="unknown";function Xe(n,e,t="raw"){if(!e)return{status:"none",value:null};let o=n.states[e];if(!o||Ye(o.state))return{status:"unavailable",value:null};let s=parseFloat(o.state);return Number.isFinite(s)?(t==="current"&&o.attributes?.unit_of_measurement==="mA"&&(s/=1e3),{status:"ok",value:s}):{status:"unavailable",value:null}}var zn={W:["power",1],kW:["power",1e3],MW:["power",1e6],mW:["power",.001],Wh:["energy",1],kWh:["energy",1e3],MWh:["energy",1e6],A:["current",1],mA:["current",.001],V:["voltage",1],mV:["voltage",.001],kV:["voltage",1e3]},Ln={power:["power",1],energy:["energy",1e3],current:["current",1],voltage:["voltage",1]};function Z(n,e,t="power"){if(!e)return{status:"none",value:null,kind:t};let o=n.states[e],s=o?.attributes??{},[r,a]=zn[s.unit_of_measurement]??Ln[s.device_class]??[t,1];if(!o||Ye(o.state))return{status:"unavailable",value:null,kind:r};let d=parseFloat(o.state);return Number.isFinite(d)?{status:"ok",value:d*a,kind:r}:{status:"unavailable",value:null,kind:r}}function T(n,e){if(!e)return null;let t=n.states[e]?.state?.toLowerCase();if(!t||Ye(t))return null;if(["on","true","closed","active","enabled","home","heat","playing","1"].includes(t))return!0;if(["off","false","open","inactive","disabled","not_home","idle","standby","0"].includes(t))return!1;let o=parseFloat(t);return Number.isFinite(o)?o>0:null}var Ut=["power","energy","current","voltage"],Dt=(n,e)=>Ut.indexOf(n.kind)-Ut.indexOf(e.kind);function It(n,e,t=n.length){let o=[...new Set(n.map(a=>a.kind))],s=o.filter(a=>n.some(d=>d.kind===a&&d.value!==null));return(s.length?s:o.slice(0,1)).map(a=>{let d=n.filter(i=>i.kind===a&&i.value!==null);return{kind:a,source:e,value:d.length?d.reduce((i,c)=>i+c.value,0):null,partial:d.length<t||d.some(i=>i.partial)}}).sort(Dt)}var Pn=n=>{let e=n[0];return n.length?{configured:!0,value:e.value,kind:e.kind,source:e.source,partial:e.partial,counters:n}:{configured:!1,value:null,kind:"power",source:"none",partial:!1,counters:[]}},jt=new WeakMap;function j(n,e){let t=jt.get(e);if(t&&t.h===n)return t.p;let o=Rn(n,e);return jt.set(e,{h:n,p:o}),o}function Rn(n,e){let t=[],o=(d,i)=>{if(!d)return;let c=Z(n,d,i);t.some($=>$.kind===c.kind)||t.push({kind:c.kind,value:c.value,partial:!1,source:"sensor"})};o(e.sensor,"power"),o(e.current_sensor,"current");let s=[],r=e.zones.filter(d=>d.sensor);if(r.length)s=It(r.map(d=>Z(n,d.sensor)),"zones",e.zones.length);else if(e.children?.length){let d=e.children.map(i=>j(n,i));if(d.some(i=>i.configured)){let i=d.flatMap(c=>c.counters.map($=>({...$,partial:$.partial})));s=It(i,"children",d.length),d.some(c=>!c.configured)&&(s=s.map(c=>({...c,partial:!0})))}}let a=[...t,...s.filter(d=>!t.some(i=>i.kind===d.kind))].sort(Dt);return Pn(a)}function ce(n,e="power"){if(!(e==="energy"||e==="voltage")){if(e==="current")return n.amp;if(n.max_w)return n.max_w;if(n.amp)return n.amp*(n.volts??230)*(n.poles>=3?3:1)}}function Wt(n,e,t){let o=t.counters.find(a=>a.kind==="current");if(o)return o.value;let s=t.counters.find(a=>a.kind==="power"),r=Xe(n,e.voltage_sensor);return r.value&&s&&s.value!==null?s.value/r.value:null}function Je(n){let e=Math.abs(n);return e>=1e4?`${(n/1e3).toFixed(1)} kW`:e>=1e3?`${(n/1e3).toFixed(2)} kW`:`${Math.round(n)} W`}function Tn(n,e=!1){let t=n/1e3,o=Math.abs(t);return`${t.toFixed(e?o>=1e3?0:1:o>=1e3?0:o>=100?1:2)} kWh`}function On(n){let e=Math.abs(n);return`${n.toFixed(e>=100?0:e>=10?1:2)} A`}var Hn=n=>`${n.toFixed(n>=100?0:1)} V`,O=(n,e,t=!1)=>n==="energy"?Tn(e,t):n==="current"?On(e):n==="voltage"?Hn(e):Je(e);function _e(n,e){let t=[];if(!e)return t;let o;if(e.entity){let r=Z(n,e.entity);(r.kind==="power"||r.kind==="energy")&&(t.push({kind:r.kind,value:r.value,entity:e.entity}),o=r)}let s;if(e.current_sensor&&(s=Z(n,e.current_sensor,"current"),t.push({kind:"current",value:s.value,entity:e.current_sensor})),e.voltage_sensor){let r=Z(n,e.voltage_sensor,"voltage");t.push({kind:"voltage",value:r.value,entity:e.voltage_sensor})}else o?.kind==="power"&&o.value!==null&&s?.value&&s.value>.05&&o.value>0&&t.push({kind:"voltage",value:o.value/s.value,entity:e.current_sensor,approx:!0});return t.sort((r,a)=>["power","energy","current","voltage"].indexOf(r.kind)-["power","energy","current","voltage"].indexOf(a.kind))}function Re(n,e,t){if(!e)return[];let o=Object.entries(e.phases??{}).filter(([,i])=>i&&(i.entity||i.current_sensor||i.voltage_sensor)),s=i=>_e(n,i).find(c=>c.kind==="power")?.value??null,r=Math.max(0,...o.map(([,i])=>s(i)??0)),a=(i,c,$,b)=>{let f=_e(n,$);if(!f.length)return;let g=f.find(M=>M.kind==="power"),y=g&&g.value!==null&&b?Math.max(0,g.value)/b:null;return{key:i,label:c,items:f,pct:y,limit:b,entity:$?.entity??$?.current_sensor??$?.voltage_sensor}},d=i=>i?.max_w??(e.total?.max_w&&o.length?e.total.max_w/o.length:r||void 0);return[a("total",t,e.total,e.total?.max_w),...o.map(([i,c])=>a(i.toUpperCase(),i.toUpperCase(),c,d(c)))].filter(i=>!!i)}var Ft={fr:{total:"Total",incoming:"Arriv\xE9e",nominal_voltage:"Tension nominale (V, d\xE9faut 230)",incoming_title:"Titre du cadre d\u2019arriv\xE9e (vue tableau)",phase:"Phase",power:"Puissance",current:"Intensit\xE9",voltage:"Tension",load:"Charge",zones:"Zones",protects:"Circuits prot\xE9g\xE9s",unavailable:"Indisponible",close:"Fermer",type:"Type",id:"Identifiant",rating:"Calibre",poles:"P\xF4les",sensitivity:"Sensibilit\xE9",cls:"Classe",curve:"Courbe",phases:"Phases",usage:"Usage",sum_zones:"Somme des capteurs de zones",sum_children:"Somme des circuits (partielle si certains sans mesure)",own_sensor:"Capteur du module",no_data:"Aucune mesure",max:"Max",state:"\xC9tat",t_differential:"Interrupteur diff\xE9rentiel",t_breaker:"Disjoncteur",t_contactor_daynight:"Contacteur jour/nuit",t_contactor:"Contacteur de puissance",t_impulse:"T\xE9l\xE9rupteur",t_relay:"Relais",t_psu:"Alimentation",output:"Sortie",section:"Section du c\xE2ble (mm\xB2)",modules_per_row:"Modules DIN par rang\xE9e",t_surge:"Parafoudre",t_meter:"Compteur \xE9lectrique",t_free:"Module libre",t_custom:"Module personnalis\xE9",u_power:"Puissance",u_socket:"Prises",u_light:"\xC9clairage",u_other:"Autre",panel:"Tableau",row:"Rang\xE9e",module:"Module",add_row:"Ajouter une rang\xE9e",add_module:"Ajouter un module",add_panel:"Ajouter un tableau",add_zone:"Ajouter une zone",remove:"Supprimer",legacy:"Ancien format (groups) d\xE9tect\xE9.",convert:"Convertir en panels / rows / modules",general:"G\xE9n\xE9ral",global_sensors:"Capteurs globaux",title:"Titre",language:"Langue",module_width:"Largeur d\u2019un module (px)",total_entity:"Capteur total (W ou kWh)",head_sensor:"Capteur (W ou kWh)",total_max:"Puissance max totale (W)",label:"Libell\xE9",amp:"Calibre (A)",width:"Largeur (modules DIN)",icon:"Ic\xF4ne",sensor:"Capteur (W, kWh ou A)",current_sensor:"Capteur d\u2019intensit\xE9",voltage_sensor:"Capteur de tension",state_entity:"\xC9tat (capteur, switch\u2026 on/off)",floor:"\xC9tage",room:"Pi\xE8ce",mA:"Sensibilit\xE9 (mA)",max_w:"Puissance max (W)",accent:"Couleur d\u2019accent",editor_note:"Les options avanc\xE9es restent \xE9ditables en YAML.",free:"Libre",view_tree:"Sch\xE9ma",collapse_level:"Replier un niveau",collapsed:"Repli initial",max_width:"Largeur max du sch\xE9ma (px)",view_panel:"Tableau",expand_all:"Tout d\xE9plier",collapse_all:"Tout replier",view:"Vue initiale",expand:"D\xE9plier / replier"},en:{total:"Total",incoming:"Incoming",nominal_voltage:"Nominal voltage (V, default 230)",incoming_title:"Incoming frame title (panel view)",phase:"Phase",power:"Power",current:"Current",voltage:"Voltage",load:"Load",zones:"Zones",protects:"Protected circuits",unavailable:"Unavailable",close:"Close",type:"Type",id:"Identifier",rating:"Rating",poles:"Poles",sensitivity:"Sensitivity",cls:"Class",curve:"Curve",phases:"Phases",usage:"Usage",sum_zones:"Sum of zone sensors",sum_children:"Sum of circuits (partial if some have no measurement)",own_sensor:"Module sensor",no_data:"No measurement",max:"Max",state:"State",t_differential:"RCD (differential switch)",t_breaker:"Circuit breaker",t_contactor_daynight:"Day/night contactor",t_contactor:"Power contactor",t_impulse:"Impulse relay (t\xE9l\xE9rupteur)",t_relay:"Relay",t_psu:"Power supply",output:"Output",section:"Cable cross-section (mm\xB2)",modules_per_row:"DIN modules per row",t_surge:"Surge arrester",t_meter:"Energy meter",t_free:"Free module",t_custom:"Custom module",u_power:"Power",u_socket:"Sockets",u_light:"Lighting",u_other:"Other",panel:"Panel",row:"Row",module:"Module",add_row:"Add row",add_module:"Add module",add_panel:"Add panel",add_zone:"Add zone",remove:"Remove",legacy:"Legacy format (groups) detected.",convert:"Convert to panels / rows / modules",general:"General",global_sensors:"Global sensors",title:"Title",language:"Language",module_width:"Module width (px)",total_entity:"Total sensor (W or kWh)",head_sensor:"Sensor (W or kWh)",total_max:"Max total power (W)",label:"Label",amp:"Rating (A)",width:"Width (DIN modules)",icon:"Icon",sensor:"Sensor (W, kWh or A)",current_sensor:"Current sensor",voltage_sensor:"Voltage sensor",state_entity:"State (sensor, switch\u2026 on/off)",floor:"Floor",room:"Room",mA:"Sensitivity (mA)",max_w:"Max power (W)",accent:"Accent colour",editor_note:"Advanced options remain editable in YAML.",free:"Free",view_tree:"Diagram",collapse_level:"Collapse one level",collapsed:"Initial collapse",max_width:"Max diagram width (px)",view_panel:"Panel",expand_all:"Expand all",collapse_all:"Collapse all",view:"Initial view",expand:"Expand / collapse"}},v=(n,e)=>Ft[n][e]??Ft.fr[e]??e;var K={power:"mdi:flash",socket:"mdi:power-socket-eu",light:"mdi:lightbulb",other:"mdi:electric-switch",differential:"mdi:current-ac",surge:"mdi:flash-alert",meter:"mdi:counter",contactor:"mdi:electric-switch-closed",contactor_daynight:"mdi:theme-light-dark",impulse:"mdi:toggle-switch",relay:"mdi:electric-switch",psu:"mdi:power-plug-outline"};var Nn=n=>n.amp!==void 0?p`<div class="print amp">${n.curve??""}${n.amp}${n.curve?"":"A"}</div>`:h;function Un(n,e){let t=Math.max(1,Math.min(n.poles,n.width));return p`<div class="levers ${e?"on":"off"}">
    ${Array.from({length:t},()=>p`<div class="cell"><div class="slot"><div class="lever ${e?"on":"off"}"></div></div></div>`)}
    ${t>1?p`<i class="bar"></i>`:h}
  </div>`}var In=({mod:n,ctx:e})=>{let t=T(e.hass,n.state_entity);return p`${Un(n,t!==!1)}${Nn(n)}`},jn=({mod:n,ctx:e})=>{let o=T(e.hass,n.state_entity)!==!1;return p`
    <div class="levers single ${o?"on":"off"}"><div class="slot wide"><div class="lever ${o?"on":"off"}"></div></div></div>
    <div class="dtype"><span>Type ${n.cls??"AC"}</span>${n.mA!==void 0?p`<span>${n.mA}mA</span>`:h}</div>
    ${n.amp!==void 0?p`<div class="print amp">${n.amp}A</div>`:h}
    <div class="dtools"><span class="test">T</span><span class="win ${o?"ok":"trip"}"></span></div>`},X=(n,e)=>p`<div class="zone"><div class="blk ${n}">${e}</div></div>`,J=(n,e)=>{let t=e??(n.amp!==void 0?`${n.curve??""}${n.amp}${n.curve?"":"A"}`:"");return t?p`<div class="print amp ${e?"txt":""}">${t}</div>`:h},Qe=n=>p`<i class="zlens ${n===!0?"on":n===!1?"off":""}"></i>`,Dn=({mod:n,ctx:e})=>{let t=T(e.hass,n.state_entity),o=t===!0?"on":t===!1?"off":"auto";return p`${X("dn",p`<div class="zsw"><span class=${o==="on"?"act":""}>I</span><span class=${o==="auto"?"act":""}>A</span><span class=${o==="off"?"act":""}>O</span></div>`)}${J(n,n.amp!==void 0?void 0:"J/N")}`},Wn=({mod:n,ctx:e})=>{let t=T(e.hass,n.state_entity);return p`${X("ct",p`<span class="coil2"><b>A1</b><b>A2</b></span><i class="zmi ${t===!0?"on":""}"></i>`)}${J(n,n.amp!==void 0?void 0:"KM")}`},Fn=({mod:n,ctx:e})=>{let t=T(e.hass,n.state_entity);return p`${X("rl",p`<span class="coil2"><b>A1</b><b>A2</b></span>${Qe(t)}`)}${J(n,n.amp!==void 0?void 0:"REL")}`},Bn=({mod:n,ctx:e})=>{let t=T(e.hass,n.state_entity);return p`${X("tl",p`<i class="zbtn"></i>${Qe(t)}`)}${J(n,n.amp!==void 0?void 0:"TL")}`},Kn=({mod:n,ctx:e})=>{let t=T(e.hass,n.state_entity);return p`${X("ps",p`<i class="zpot"><b></b></i><span class="dc">${Qe(t!==!1)}DC OK</span>`)}${J(n,n.output??(n.amp!==void 0?void 0:"AC/DC"))}`},Vn=({mod:n,ctx:e})=>{let t=T(e.hass,n.state_entity);return p`${X("sp",p`<i class="zspd ${t===!1?"bad":"ok"}"></i>`)}${J(n,"SPD")}${n.note?p`<div class="print sm">${n.note}</div>`:h}`},qn=({mod:n,power:e})=>p`
  ${X("mt",p`<span class="zlcd">${e.value!==null?O(e.kind,e.value):"- - -"}</span>`)}${J(n,n.label??"kWh")}`,Gn=()=>p`<div class="blank"></div>`,Zn=({mod:n})=>p`${X("cu",n.icon?p`<ha-icon icon=${n.icon}></ha-icon>`:h)}${J(n)}`,et={differential:jn,breaker:In,contactor_daynight:Dn,contactor:Wn,relay:Fn,impulse:Bn,psu:Kn,surge:Vn,meter:qn,free:Gn,custom:Zn};function Te(n,e){return n.label??(n.type==="free"?v(e.lang,"free"):n.id)}function Bt(n,e,t){return p`<div class="term ${e} ${t?"n":""}">${Array.from({length:n},()=>p`<i></i>`)}</div>`}var Yn="mdi:map-marker-outline";function Xn(n,e,t){let o=[n.amp!==void 0?`${n.amp} A`:"",n.id!==e?n.id:""].filter(Boolean).join(" \xB7 "),s=n.zones.map(r=>({icon:r.icon??t??Yn,text:[r.floor,r.room].filter(Boolean).join(" \xB7 ")})).filter(r=>r.text);return p`<div class="tip" role="tooltip">
    <div class="tip-h">${t?p`<ha-icon icon=${t}></ha-icon>`:h}<b>${e}</b>${o?p`<span class="tip-d">${o}</span>`:h}</div>
    ${s.map(r=>p`<div class="tip-z"><ha-icon icon=${r.icon}></ha-icon><span>${r.text}</span></div>`)}
  </div>`}function Kt(n){let e=n.currentTarget,t=e.querySelector(".tip");if(!t)return;let o=e.getBoundingClientRect();t.style.left=`${Math.max(4,Math.min(o.left,window.innerWidth-270))}px`,o.top>140?(t.style.bottom=`${window.innerHeight-o.top+6}px`,t.style.top="auto"):(t.style.top=`${o.bottom+6}px`,t.style.bottom="auto")}var Jn=new Set(["relay","impulse","contactor","contactor_daynight"]);function Vt(n,e){let t=j(e.hass,n),o=ce(n,t.kind),s=t.value!==null&&o?Math.max(0,t.value)/o:null,r=s===null?"":s>1?"err":s>=.9?"high":s>=.6?"warn":"ok",a=et[n.type]??et.custom,d=Math.max(2,n.poles),i=n.poles!==3,c=Te(n,e),$=n.type!=="free"||!!n.label,b=n.icon??(n.type==="breaker"?K[n.usage]:K[n.type]),f=n.type==="differential",g=t.counters.filter(R=>!(f&&R.value===null)),y=t.configured&&n.type!=="meter"&&g.length?p`<div class="readouts">${g.map(R=>p`<div class="readout k-${R.kind} ${R.value===null?"bad":""}" title=${v(e.lang,R.source==="children"?"sum_children":R.source==="zones"?"sum_zones":"own_sensor")}>
        ${R.value===null?"n/d":O(R.kind,R.value,!0)}</div>`)}</div>`:h,M=Jn.has(n.type)?T(e.hass,n.state_entity):null,w=n.type!=="differential"&&n.type!=="free",L=M===null?"":M?"st-on":"st-off",ue=`--w:${n.width};${n.accent?`--acc:${n.accent};--cap:${n.accent};`:""}`,D=R=>{R instanceof KeyboardEvent&&R.key!=="Enter"&&R.key!==" "||(R.preventDefault(),e.select(n))};return p`<div class="mod t-${n.type} u-${n.usage} p-${n.poles} ${L}" style=${ue} role="button" tabindex="0"
      aria-label=${`${c} ${n.id}`} @click=${D} @keydown=${D} @mouseenter=${Kt} @focus=${Kt}>
    ${Xn(n,c,b)}
    <div class="face">
      ${n.type!=="free"?Bt(d,"top",i):h}
      ${r?p`<i class="led ${r}"></i>`:h}
      <div class="body ${w?"ib":""}">${w?p`<div class="pid">${n.id}</div>`:h}${a({mod:n,ctx:e,power:t})}${y}${n.type==="differential"||w?h:p`<div class="pid">${n.id}</div>`}</div>
      ${n.type!=="free"?Bt(d,"bot",i):h}
    </div>
    ${$?p`<div class="plate">
          ${b?p`<span class="pi"><ha-icon icon=${b}></ha-icon></span>`:h}
          <div class="txt" lang=${e.lang}>${c}</div>
          ${n.section?p`<div class="sec">${n.section} mm²</div>`:h}</div>`:h}
  </div>`}function qt(n,e){if(!e||e<=0)return[n];let t=[[]],o=0;for(let s of n)o+s.width>e&&t[t.length-1].length&&(t.push([]),o=0),t[t.length-1].push(s),o+=s.width;return t}function Gt(n,e,t){let o=n.modules.find(r=>r.type==="differential"),s=o?j(e.hass,o):void 0;return p`<section class="row" style=${n.accent?`--acc:${n.accent}`:""}>
    ${n.label||n.phases.length||s?.configured?p`<header class="row-head">
          ${n.label?p`<b>${n.label}</b>`:h}
          ${n.phases.map(r=>p`<span class="chip ph-${r.toLowerCase()}">${r}</span>`)}
          ${s?.configured&&s.counters.some(r=>r.value!==null)?p`<span class="grow"></span>${s.counters.filter(r=>r.value!==null).map(r=>p`<span class="dim sum">${r.partial?"\u2265 ":""}${O(r.kind,r.value)}</span>`)}`:h}
        </header>`:h}
    <div class="scroller"><div class="lines">
      ${qt(n.modules,t).map(r=>p`<div class="rail-wrap ${t?"fixed":""}" style=${t?`--n:${t}`:""}><div class="rail"></div>
        ${r.map(a=>Vt(a,e))}<span class="fill"></span>
      </div>`)}
    </div></div>
  </section>`}function Zt(n,e){return p`<div class="panel ${n.capacity?"fixed":""}">
    ${n.label?p`<div class="panel-title">${n.label}</div>`:h}
    ${n.rows.map(t=>Gt(t,e,n.capacity))}
  </div>`}var F=(n,e)=>e===void 0||e===""?h:p`<div class="kv"><span>${n}</span><b>${e}</b></div>`;function Yt(n,e,t){let o=e.lang,s=j(e.hass,n),r=ce(n,s.kind),a=s.value!==null&&r?Math.min(100,Math.max(0,s.value)/r*100):null,d=Wt(e.hass,n,s),i=Xe(e.hass,n.voltage_sensor),c=T(e.hass,n.state_entity),$=n.icon??(n.type==="breaker"?K[n.usage]:K[n.type]),b=f=>f?()=>e.moreInfo(f):void 0;return p`<div class="dlg">
    <header><ha-icon icon=${$??"mdi:electric-switch"}></ha-icon>
      <div><h3>${Te(n,e)}</h3><div class="dim">${v(o,`t_${n.type}`)} · ${n.id}</div></div>
      <button class="x" @click=${t} aria-label=${v(o,"close")}>✕</button></header>
    <div class="kvs">
      ${F(v(o,"rating"),n.amp!==void 0?`${n.curve??""}${n.amp} A`:void 0)}
      ${F(v(o,"poles"),n.poles)}
      ${F(v(o,"sensitivity"),n.mA!==void 0?`${n.mA} mA`:void 0)}
      ${F(v(o,"cls"),n.cls)}
      ${F(v(o,"output"),n.output)}
      ${n.type!=="differential"?h:F(v(o,"max"),n.max_w?Je(n.max_w):void 0)}
      ${F(v(o,"phases"),n.phases.length?n.phases.join(" \xB7 "):void 0)}
      ${n.type==="breaker"&&n.usage!=="other"?F(v(o,"usage"),v(o,`u_${n.usage}`)):h}
      ${c===null?h:F(v(o,"state"),c?"ON":"OFF")}
      ${F("",n.note)}
    </div>
    ${s.configured||d!==null||i.value!==null?p`<div class="values">
          ${s.counters.map(f=>p`<div class="big ${f.value===null?"bad":""}" @click=${b(f.kind==="current"&&n.current_sensor&&n.sensor!==n.current_sensor?n.current_sensor:n.sensor)}>
                ${f.value===null?v(o,"unavailable"):`${f.partial?"\u2265 ":""}${O(f.kind,f.value)}`}
                <small>${v(o,f.source==="zones"?"sum_zones":f.source==="children"?"sum_children":"own_sensor")}</small></div>`)}
          ${d!==null&&!s.counters.some(f=>f.kind==="current")?F(v(o,"current"),`${d.toFixed(1)} A`):h}
          ${i.value!==null?F(v(o,"voltage"),`${i.value.toFixed(0)} V`):h}
          ${a!==null?p`<div class="bar"><i style=${`width:${a}%`} class=${a>=90?"high":a>=60?"warn":"ok"}></i></div>
            <div class="dim">${v(o,"load")} ${a.toFixed(0)} % / ${O(s.kind,r)}</div>`:h}
        </div>`:h}
    ${n.zones.length?p`<h4>${v(o,"zones")}</h4><ul class="zones">
          ${n.zones.map(f=>{let g=Z(e.hass,f.sensor);return p`<li class=${f.sensor?"click":""} @click=${b(f.sensor)}>
              <ha-icon icon=${f.icon??"mdi:map-marker-outline"}></ha-icon>
              <span>${[f.floor,f.room].filter(Boolean).join(" \xB7 ")}</span>
              ${f.sensor?p`<b class=${g.value===null?"bad":""}>${g.value===null?"n/d":O(g.kind,g.value)}</b>`:h}
            </li>`})}</ul>`:h}
    ${n.children?.length?p`<h4>${v(o,"protects")}</h4><ul class="zones">
          ${n.children.map(f=>{let g=j(e.hass,f);return p`<li class="click" @click=${()=>e.select(f)}>
              <span class="id">${f.id}</span><span>${Te(f,e)}</span>
              ${f.amp!==void 0?p`<small>${f.amp} A</small>`:h}
              ${g.counters.map(y=>p`<b class=${y.value===null?"bad":""}>${y.value===null?"n/d":O(y.kind,y.value)}</b>`)}
            </li>`})}</ul>`:h}
  </div>`}var tt=440,P=22,pe=14,Qn=54,ye=34,Qt=8,we=24,eo="#2f9e44",to="#e03131",Xt=["L1","L2","L3"],Q=n=>`var(--din-panel-phase-${n.toLowerCase()}-color, ${{L1:"#8b4513",L2:"#1a202c",L3:"#5a6474"}[n]??"#718096"})`,ee=(n,e=Qt)=>n.length*e*.56;function Jt(n,e,t=Qt){if(ee(n,t)<=e)return n;let o=Math.floor(e/(t*.56))-1;return o<2?"":`${n.slice(0,o)}\u2026`}function en(n){return n<=700?tt:Math.max(tt,Math.round(n*tt/700))}function no(n,e){let t=e.floors?.[n];if(t?.bg)return{bg:t.bg,fg:t.fg??"#fff"};let o=0;for(let s of n)o=(o*31+s.charCodeAt(0))%360;return{bg:`hsl(${o} 45% 38%)`,fg:"#fff"}}function nt(n,e){let t=[];for(let o of n){if(e==="panels"){t.push(`p:${o.id}`);continue}for(let s of o.rows)for(let r of s.modules)e==="rows"&&r.type==="differential"&&r.children?.length&&t.push(`r:${o.id}/${s.id}/${r.id}`),e==="zones"&&r.type!=="differential"&&r.zones.length&&t.push(`z:${o.id}/${s.id}/${r.id}`)}return t}function tn(n,e,t){let o=t.width,s=t.config,r=1;for(let l of n)for(let u of l.rows)for(let x of u.modules)r=Math.max(r,j(e.hass,x).counters.length);for(let l of[s.sensors?.total,...Object.values(s.sensors?.phases??{})])r=Math.max(r,_e(e.hass,l).length);let a=o-Math.max(90,r*Qn+6),d=[],i=new Set;for(let l of n)for(let u of l.rows)u.phases.forEach(x=>i.add(x)),u.modules.forEach(x=>x.phases.forEach(m=>i.add(m)));Object.keys(s.sensors?.phases??{}).forEach(l=>i.add(l.toUpperCase()));let c=[...Xt.filter(l=>i.has(l)),...[...i].filter(l=>!Xt.includes(l))],$=14,b=9,f=l=>$+c.indexOf(l)*b,g=$+Math.max(1,c.length)*b+8,y=new Map,M=new Map,w=8,L=l=>Math.max(20,ee(l,7)+10),ue=(l,u,x,m)=>C`
    <rect class="box" x=${l} y=${u-pe/2} width=${L(x)} height=${pe} rx="3" style=${m?`fill:${m};stroke:${m}`:""}></rect>
    <text class="boxt" x=${l+L(x)/2} y=${u+2.6} text-anchor="middle" style=${m?"fill:#fff":""}>${x}</text>`,D=(l,u,x,m,E="wire",A="")=>C`<line class=${E} x1=${l} y1=${u} x2=${x} y2=${m} style=${A}></line>`,R=(l,u,x="")=>({value:l.value,partial:l.partial,kind:l.kind,limit:u,tip:x});function Ce(l,u){let x=a;return u.map(m=>{let E=m.value===null?"n/d":`${m.partial?"\u2265 ":m.approx?"\u2248 ":""}${O(m.kind,m.value)}`,A=Math.max(36,ee(E,7.5)+10),_=x;x+=A+3;let k=m.value!==null&&m.limit?Math.max(0,m.value)/m.limit:null,S=k===null?"":k>1?"err":k>=.9?"high":k>=.6?"warn":"ok";return C`<g class="bubble k-${m.kind} ${m.value===null?"bad":""}">
        <title>${m.tip??""}</title>
        <rect class="bub" x=${_} y=${l-7} width=${A} height="14" rx="7"></rect>
        <text class="val" x=${_+A/2} y=${l+(k===null?2.6:.8)} text-anchor="middle">${E}</text>
        ${k!==null?C`<rect class="gbg" x=${_+7} y=${l+3.2} width=${A-14} height="1.8" rx=".9"></rect>
          <rect class="gfg ${S}" x=${_+7} y=${l+3.2} width=${(A-14)*Math.min(1,k)} height="1.8" rx=".9"></rect>`:h}
      </g>`})}let st=(l,u,x)=>C`<path class="chev" d=${x?`M${l-3},${u-1.5} L${l},${u+2} L${l+3},${u-1.5}`:`M${l-1.5},${u-3} L${l+2},${u} L${l-1.5},${u+3}`}></path>`,rt=(l,u,x)=>C`<rect class="hit chevhit" x=${l-6} y=${u-8} width="12" height="16" tabindex="0" role="button" aria-label=${x} @click=${m=>{m.stopPropagation(),t.toggle(x)}} @keydown=${m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.stopPropagation(),t.toggle(x))}}></rect>`,Oe=(l,u,x=!0,m=a-2)=>x&&u+6<m?D(u+3,l,m,l,"conn"):h,ae=l=>l?.entity??l?.current_sensor??l?.voltage_sensor,at=l=>u=>{l&&(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),l())},he=(l,u,x="",m=!!u)=>m&&u?C`<rect class="hit" x="0" y=${l} width=${o} height=${P} tabindex="0" role="button" aria-label=${x} @click=${u} @keydown=${at(u)}><title>${x}</title></rect>`:C`<rect class="hit" x="0" y=${l} width=${o} height=${P}><title>${x}</title></rect>`,it=l=>_e(e.hass,l).map(u=>({value:u.value,kind:u.kind,partial:!1,approx:u.approx,limit:u.kind==="power"?l?.max_w:void 0,tip:u.approx?"U \u2248 P / I":u.entity})),on=new Map(Re(e.hass,s.sensors,"Total").map(l=>[l.key,l])),lt=(l,u,x,m)=>{let E=a-8;if(x===null||E-u<24)return Oe(l,u-3,m);let A=E-u,_=x>1?"err":x>=.9?"high":x>=.6?"warn":"";return C`<rect class="hg-bg" x=${u} y=${l-2.5} width=${A} height="5" rx="2.5"></rect>
      <rect class="hg-fg ${_}" x=${u} y=${l-2.5} width=${Math.max(2.5,A*Math.min(1,x))} height="5" rx="2.5"></rect>`},te=s.sensors?.total;if(te?.entity||te?.current_sensor||te?.voltage_sensor){let l=w+P/2,u=it(te);d.push(C`<g style="--acc:var(--primary-color)">${ue(g,l,"Total")}
      <text x=${g+L("Total")+6} y=${l+2.8} class="dim">Total</text>
      ${lt(l,g+L("Total")+10+ee("Total"),null,u.length>0)}
      ${Ce(l,u)}
      ${he(w,()=>e.moreInfo(ae(te)),ae(te),!!ae(te))}</g>`),w+=P}for(let l of c){let u=w+P/2;y.set(l,u),M.set(l,u);let x=Object.entries(s.sensors?.phases??{}).find(([A])=>A.toUpperCase()===l)?.[1],m=it(x),E=on.get(l);d.push(C`<g>
      ${D(f(l),u,g,u,"tap",`stroke:${Q(l)}`)}
      <circle cx=${f(l)} cy=${u} r="2.6" style=${`fill:${Q(l)}`}></circle>
      ${ue(g,u,l,Q(l))}
      ${m.length?C`${lt(u,g+L(l)+8,E?.pct??null,!0)}${Ce(u,m)}
        ${he(w,()=>e.moreInfo(ae(x)),ae(x),!!ae(x))}`:h}</g>`),w+=P}function dt(l,u,x,m,E,A,_=!1,k=x.id){let S=T(e.hass,x.state_entity),H=L(k),N=E?x.icon??(x.type==="breaker"?K[x.usage]:K[x.type]):void 0,U=A?10:0,z=u+H+(N?18:6)+U,W=Jt(m??"",a-8-z-(S===null?0:we+4));return C`${ue(u,l,k,S===null?void 0:S?eo:to)}
      ${A?st(u+H+5,l,A==="open"):h}
      ${N?C`<foreignObject width="24" height="24" transform=${`translate(${u+H+4+U} ${l-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${N} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:h}
      ${W?C`<text x=${z} y=${l+2.8}>${W}</text>`:h}
      ${Oe(l,W?z+ee(W):z-2,_||S!==null,_?a-2:a-we-6)}
      ${S===null?h:C`<g class="spill ${S?"on":"off"}"><rect x=${a-we-4} y=${l-6} width=${we} height="12" rx="6"></rect>
        <text class="spillt" x=${a-we/2-4} y=${l+2.4} text-anchor="middle">${S?"ON":"OFF"}</text></g>`}`}let sn=(l,u)=>(u.kind==="current"&&l.current_sensor?l.current_sensor:l.sensor)??"";function ct(l){let u=j(e.hass,l);return Ce(w+P/2,u.counters.map(x=>R(x,ce(l,x.kind),sn(l,x))))}function rn(l,u){let x=u+8,m=0,E=w+P/2,A=l.icon??(l.type==="breaker"?K[l.usage]:K[l.type]);for(let _ of l.zones){let k=_.icon??A,S=w+P/2,H=_.sensor?Z(e.hass,_.sensor):void 0,N=_.floor?no(_.floor,s):void 0,U=_.floor?ee(_.floor,6.5)+10:0,z=u+ye+(_.floor?U+4:0),W=z+(k?16:0),ie=Jt(_.room??"",a-8-W);d.push(C`<g>
        ${D(x,S,u+ye,S)}
        ${N?C`<rect x=${u+ye} y=${S-6} width=${U} height="12" rx="6" style=${`fill:${N.bg}`}></rect>
          <text class="pillt" x=${u+ye+U/2} y=${S+2.3} text-anchor="middle" style=${`fill:${N.fg}`}>${_.floor}</text>`:h}
        ${k?C`<foreignObject width="24" height="24" transform=${`translate(${z} ${S-5.5}) scale(0.46)`} style="overflow:visible"><ha-icon icon=${k} style="--mdc-icon-size:24px;display:block;width:24px;height:24px;color:var(--acc)"></ha-icon></foreignObject>`:h}
        ${ie?C`<text x=${W} y=${S+2.8}>${ie}</text>`:h}
        ${Oe(S,W+ee(ie),!!H)}
        ${H?Ce(S,[{value:H.value,kind:H.kind,partial:!1,tip:_.sensor}]):h}
        ${he(w,_.sensor?()=>e.moreInfo(_.sensor):void 0,[_.floor,_.room].filter(Boolean).join(" \xB7 "))}</g>`),m=S,w+=P}return{first:E,last:m}}function pt(l,u,x,m,E,A,_=[]){let k=w+P/2;for(let z of _)M.set(z,Math.max(M.get(z)??0,k));let S=`z:${m}/${E}/${l.id}`,H=l.zones.length>0,N=H&&!t.collapsed.has(S),U=u+L(l.id)+5;if(d.push(C`<g style=${`--acc:${l.accent??x}`}>
      ${A!==void 0?D(A,k,u,k):h}
      ${_.length?D(f(_[0]),k,u,k,"tap",`stroke:${Q(_[0])}`):h}
      ${_.map(z=>C`<circle cx=${f(z)} cy=${k} r="2.6" style=${`fill:${Q(z)}`}></circle>`)}
      ${dt(k,u,l,an(l),!0,H?N?"open":"closed":void 0,j(e.hass,l).configured)}
      ${ct(l)}
      ${he(w,()=>e.select(l),ut(l))}
      ${H?rt(U,k,S):h}</g>`),w+=P,N){let z=d.length,W=rn(l,u);d.splice(z,0,C`<g>${D(u+8,k+pe/2,u+8,W.last)}</g>`)}return k}let an=l=>l.label,ut=l=>[l.label,l.id,l.amp!==void 0?`${l.amp} A`:"",l.mA!==void 0?`${l.mA} mA`:""].filter(Boolean).join(" \xB7 ");function ln(l,u,x,m,E=l.id){let A=w+P/2,_=`r:${m}/${u.id}/${l.id}`,k=l.children??[],S=k.length>0&&!t.collapsed.has(_),H=g+L(E)+5,N=l.accent??u.accent??"#3182ce",U=(l.phases.length?l.phases:u.phases).filter(q=>c.includes(q));for(let q of U)M.set(q,Math.max(M.get(q)??0,A));if(d.push(C`<g style=${`--acc:${N}`}>
      ${U.length?D(f(U[0]),A,g,A,"tap",`stroke:${Q(U[0])}`):h}
      ${U.map(q=>C`<circle cx=${f(q)} cy=${A} r="2.6" style=${`fill:${Q(q)}`}></circle>`)}
      ${dt(A,g,l,x,!1,k.length?S?"open":"closed":void 0,j(e.hass,l).configured,E)}
      ${ct(l)}
      ${he(w,()=>e.select(l),ut(l))}
      ${k.length?rt(H,A,_):h}</g>`),w+=P,!S)return;let z=g+8,W=d.length,ie=A;for(let q of k)ie=pt(q,g+ye,N,m,u.id,z);k.length&&d.splice(W,0,C`<g style=${`--acc:${N}`}>${D(z,A+pe/2,z,ie)}</g>`)}for(let l of n){let u=`p:${l.id}`,x=!t.collapsed.has(u);if(l.label){let m=w+P/2,E=Math.max(60,ee(l.label,9.8)+28);d.push(C`<g style="--acc:var(--secondary-text-color)">
        <rect class="ptbox" x=${g} y=${m-pe/2-1} width=${E} height=${pe+2} rx="3"></rect>
        ${st(g+8,m,x)}
        <text class="ptitle" x=${g+16} y=${m+3}>${l.label}</text>
        <rect class="hit" x="0" y=${w} width=${o} height=${P} tabindex="0" role="button" aria-label=${l.label} @click=${()=>t.toggle(u)} @keydown=${at(()=>t.toggle(u))}><title>${l.label}</title></rect></g>`),w+=P}if(!(!x&&l.label))for(let m of l.rows){let E=m.modules.filter(_=>_.type==="differential"),A=E.length?m.modules.indexOf(E[0]):m.modules.length;for(let _ of m.modules.slice(0,A))_.type==="free"&&!_.label||pt(_,g,m.accent??"#3182ce",l.id,m.id,void 0,(_.phases.length?_.phases:m.phases).filter(k=>c.includes(k)));for(let _ of E)ln(_,m,[m.label,_.label].filter(Boolean).join(" - ")||void 0,l.id)}}let dn=c.map(l=>D(f(l),y.get(l),f(l),M.get(l),"trunk",`stroke:${Q(l)}`)),cn=w+8;return p`<div class="dia" style=${`max-width:${t.maxWidth}px`}>
    <svg viewBox=${`0 0 ${o} ${cn}`} width="100%" preserveAspectRatio="xMidYMin meet" role="img">${dn}${d}</svg></div>`}var oo=["differential","breaker","contactor_daynight","contactor","relay","impulse","psu","surge","meter","free","custom"],so=["id","type","label","amp","poles","width","mA","class","curve","usage","phases","sensor","current_sensor","voltage_sensor","state_entity","icon","max_w","accent","output","section"],ot=["l1","l2","l3"],B=(n,e)=>({number:{min:n,max:e,mode:"box"}}),ke=class extends V{constructor(){super(...arguments);this._open=new Set(["sec:general"]);this._lbl=t=>{let o=/^(l[123])_(entity|current|volt|max)$/.exec(t.name);return o?`${o[1].toUpperCase()} \xB7 ${v(this.L,o[2]==="entity"?"head_sensor":o[2]==="current"?"current_sensor":o[2]==="volt"?"voltage_sensor":"max_w")}`:v(this.L,t.name==="class"?"cls":t.name==="total_current"?"current_sensor":t.name==="total_volt"?"voltage_sensor":t.name)}}setConfig(t){this._config=t}get L(){return this._config?.language??this._hassLang}get _hassLang(){return this.hass?.language?.startsWith("fr")?"fr":"en"}_emit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_panels(){return structuredClone(this._config.panels??[])}_setPanels(t){this._emit({...this._config,panels:t})}_sec(t,o,s,r=h){let a=this._open.has(t);return p`<details class="blk" ?open=${a} @toggle=${d=>{let i=d.currentTarget;d.target!==i||i.open===this._open.has(t)||(i.open?this._open.add(t):this._open.delete(t),this.requestUpdate())}}><summary><span>${o}</span>${r}</summary>${a?s():h}</details>`}_general(){let t=this._config,o={title:t.title,incoming_title:t.incoming_title,nominal_voltage:t.nominal_voltage,language:t.language??this._hassLang,module_width:t.module_width,view:t.view??"panel",modules_per_row:t.modules_per_row,max_width:t.max_width,collapsed:t.collapsed??"none"},s=[{name:"title",selector:{text:{}}},{name:"incoming_title",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"language",selector:{select:{options:["fr","en"]}}},{name:"module_width",selector:B(30,90)}]},{name:"max_width",selector:B(300,3e3)},{name:"nominal_voltage",selector:B(100,480)},{name:"modules_per_row",selector:B(1,60)},{name:"collapsed",selector:{select:{options:[{value:"none",label:"\u2014"},{value:"zones",label:v(this.L,"zones")},{value:"rows",label:v(this.L,"row")},{value:"panels",label:v(this.L,"panel")}]}}},{name:"view",selector:{select:{options:[{value:"panel",label:v(this.L,"view_panel")},{value:"tree",label:v(this.L,"view_tree")}]}}}];return p`<ha-form .hass=${this.hass} .data=${o} .schema=${s} .computeLabel=${this._lbl}
      @value-changed=${r=>{let a=r.detail.value,d={...t,title:a.title||void 0,incoming_title:a.incoming_title||void 0,nominal_voltage:a.nominal_voltage||void 0,language:a.language,module_width:a.module_width||void 0,view:a.view==="tree"?"tree":void 0,max_width:a.max_width||void 0,modules_per_row:a.modules_per_row||void 0,collapsed:a.collapsed&&a.collapsed!=="none"?a.collapsed:void 0};for(let i of Object.keys(d))d[i]===void 0&&delete d[i];this._emit(d)}}></ha-form>`}_sensors(){let t=this._config,o=t.sensors??{},s=i=>Object.keys(o.phases??{}).find(c=>c.toLowerCase()===i)??i,r={};for(let i of ot){let c=o.phases?.[s(i)];r[`${i}_entity`]=c?.entity,r[`${i}_current`]=c?.current_sensor,r[`${i}_volt`]=c?.voltage_sensor,r[`${i}_max`]=c?.max_w}let a={total_entity:o.total?.entity,total_current:o.total?.current_sensor,total_volt:o.total?.voltage_sensor,total_max:o.total?.max_w,...r},d=[{type:"grid",name:"",schema:[{name:"total_entity",selector:{entity:{domain:"sensor"}}},{name:"total_current",selector:{entity:{domain:"sensor"}}},{name:"total_volt",selector:{entity:{domain:"sensor"}}}]},{name:"total_max",selector:B(0,1e5)},...ot.map(i=>({type:"grid",name:"",schema:[{name:`${i}_entity`,selector:{entity:{domain:"sensor"}}},{name:`${i}_current`,selector:{entity:{domain:"sensor"}}},{name:`${i}_volt`,selector:{entity:{domain:"sensor"}}},{name:`${i}_max`,selector:B(0,1e5)}]}))];return p`<ha-form .hass=${this.hass} .data=${a} .schema=${d} .computeLabel=${this._lbl}
      @value-changed=${i=>{let c=i.detail.value,$={...t},b={...o.total??{},entity:c.total_entity||void 0,current_sensor:c.total_current||void 0,voltage_sensor:c.total_volt||void 0,max_w:c.total_max||void 0};for(let y of Object.keys(b))b[y]===void 0&&delete b[y];let f={...o.phases??{}};for(let y of ot){let M=s(y),w={...f[M]??{},entity:c[`${y}_entity`]||void 0,current_sensor:c[`${y}_current`]||void 0,voltage_sensor:c[`${y}_volt`]||void 0,max_w:c[`${y}_max`]||void 0};for(let L of Object.keys(w))w[L]===void 0&&delete w[L];Object.keys(w).length?f[M]=w:delete f[M]}let g={...o,total:Object.keys(b).length?b:void 0,phases:Object.keys(f).length?f:void 0};for(let y of Object.keys(g))g[y]===void 0&&delete g[y];Object.keys(g).length?$.sensors=g:delete $.sensors,this._emit($)}}></ha-form>`}_moduleSchema(t){let o=this.L,s=t==="differential";return[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"type",selector:{select:{mode:"dropdown",options:oo.map(r=>({value:r,label:v(o,`t_${r}`)}))}}}]},{name:"label",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"amp",selector:B(1,250)},{name:"poles",selector:B(1,4)},{name:"width",selector:B(1,12)},...s?[{name:"mA",selector:B(1,1e3)},{name:"class",selector:{select:{options:["AC","A","F","B"]}}}]:[{name:"curve",selector:{select:{options:["B","C","D"]}}}]]},...t==="breaker"?[{name:"usage",selector:{select:{options:["power","socket","light","other"].map(r=>({value:r,label:v(o,`u_${r}`)}))}}}]:[],{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}},{name:"sensor",selector:{entity:{domain:"sensor"}}},{type:"grid",name:"",schema:[{name:"current_sensor",selector:{entity:{domain:"sensor"}}},{name:"voltage_sensor",selector:{entity:{domain:"sensor"}}}]},...t==="psu"?[{name:"output",selector:{text:{}}}]:[],{name:"state_entity",selector:{entity:{}}},{name:"section",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"icon",selector:{icon:{}}},{name:"max_w",selector:B(0,1e5)}]}]}_patchModule(t,o,s,r){let a=this._panels(),d=a[t].rows[o].modules[s];for(let i of so){let c=r[i];c===void 0||c===""||c===null||Array.isArray(c)&&!c.length||typeof c=="number"&&Number.isNaN(c)?delete d[i]:d[i]=c}this._setPanels(a)}_zones(t,o,s,r){let a=this.L,d=[{type:"grid",name:"",schema:[{name:"floor",selector:{text:{}}},{name:"room",selector:{text:{}}}]},{name:"sensor",selector:{entity:{domain:"sensor"}}},{name:"icon",selector:{icon:{}}}],i=(r.zones??[]).map(c=>typeof c=="string"?{room:c}:c);return p`${i.map((c,$)=>p`<div class="blk"><ha-form .hass=${this.hass} .data=${c} .schema=${d} .computeLabel=${this._lbl}
        @value-changed=${b=>{let f=this._panels(),g=f[t].rows[o].modules[s],y=[...g.zones??[]],M={};for(let[w,L]of Object.entries(b.detail.value))L!==""&&L!==void 0&&(M[w]=L);y[$]=M,g.zones=y,this._setPanels(f)}}></ha-form>
      <button class="danger" @click=${()=>{let b=this._panels(),f=b[t].rows[o].modules[s];f.zones=(f.zones??[]).filter((g,y)=>y!==$),f.zones.length||delete f.zones,this._setPanels(b)}}>${v(a,"remove")}</button></div>`)}
      <button class="add" @click=${()=>{let c=this._panels(),$=c[t].rows[o].modules[s];$.zones=[...$.zones??[],{}],this._setPanels(c)}}>+ ${v(a,"add_zone")}</button>`}_module(t,o,s,r){let a=this.L,d=String(r.type??"breaker"),i=`${t}/${o}/${s}`,c=this._open.has(i),$=f=>g=>{g.preventDefault(),g.stopPropagation(),f()},b=f=>{let g=this._panels(),y=g[t].rows[o].modules,M=s+f;M<0||M>=y.length||([y[s],y[M]]=[y[M],y[s]],this._setPanels(g))};return p`<details class="blk" ?open=${c} @toggle=${f=>{let g=f.currentTarget;f.target!==g||g.open===this._open.has(i)||(g.open?this._open.add(i):this._open.delete(i),this.requestUpdate())}}><summary><span>${v(a,`t_${d}`)} · ${r.id??""} ${r.amp?`${r.amp} A`:""}</span>
        <button @click=${$(()=>b(-1))}>◀</button><button @click=${$(()=>b(1))}>▶</button>
        <button class="danger" @click=${$(()=>{let f=this._panels();f[t].rows[o].modules.splice(s,1),this._setPanels(f)})}>✕</button></summary>
      ${c?p`<ha-form .hass=${this.hass} .data=${r} .schema=${this._moduleSchema(d)} .computeLabel=${this._lbl}
        @value-changed=${f=>this._patchModule(t,o,s,f.detail.value)}></ha-form>
      <div class="note">${v(a,"zones")}</div>${this._zones(t,o,s,r)}`:h}
    </details>`}_row(t,o,s){let r=this.L,a=d=>i=>{i.preventDefault(),i.stopPropagation(),d()};return p`<details class="blk" open><summary><span>${v(r,"row")} · ${s.label??s.id??o+1}</span>
        <button class="danger" @click=${a(()=>{let d=this._panels();d[t].rows.splice(o,1),this._setPanels(d)})}>✕</button></summary>
      <ha-form .hass=${this.hass} .data=${{id:s.id,label:s.label,phases:s.phases}}
        .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"phases",selector:{select:{multiple:!0,options:["L1","L2","L3"]}}}]}
        .computeLabel=${this._lbl}
        @value-changed=${d=>{let i=this._panels(),c=i[t].rows[o];for(let $ of["id","label","phases"]){let b=d.detail.value[$];b===void 0||b===""||Array.isArray(b)&&!b.length?delete c[$]:c[$]=b}this._setPanels(i)}}></ha-form>
      ${(s.modules??[]).map((d,i)=>this._module(t,o,i,d))}
      <button class="add" @click=${()=>{let d=this._panels(),i=d[t].rows[o];i.modules=[...i.modules??[],{type:i.modules?.length?"breaker":"differential",id:`${i.id??o+1}-${(i.modules?.length??0)+1}`,amp:i.modules?.length?16:40}],this._setPanels(d)}}>+ ${v(r,"add_module")}</button>
    </details>`}render(){if(!this._config)return h;let t=this.L,o=this._config,s=!!o.groups&&!o.panels;return p`${this._sec("sec:general",v(t,"general"),()=>this._general())}
      ${this._sec("sec:sensors",v(t,"global_sensors"),()=>this._sensors())}
      ${s?p`<div class="banner">${v(t,"legacy")}
            <button @click=${()=>{let r={...o,panels:Ze(o.groups)};delete r.groups,this._emit(r)}}>${v(t,"convert")}</button></div>`:h}
      ${(o.panels??[]).map((r,a)=>this._sec(`p:${a}`,`${v(t,"panel")} \xB7 ${r.label??r.id??a+1}`,()=>p`
        <ha-form .hass=${this.hass} .data=${{id:r.id,label:r.label,modules_per_row:r.modules_per_row}} .computeLabel=${this._lbl}
          .schema=${[{type:"grid",name:"",schema:[{name:"id",selector:{text:{}}},{name:"label",selector:{text:{}}}]},{name:"modules_per_row",selector:B(1,60)}]}
          @value-changed=${d=>{let i=this._panels();i[a].id=d.detail.value.id||void 0,i[a].label=d.detail.value.label||void 0,i[a].modules_per_row=d.detail.value.modules_per_row||void 0,this._setPanels(i)}}></ha-form>
        ${(r.rows??[]).map((d,i)=>this._row(a,i,d))}
        <button class="add" @click=${()=>{let d=this._panels();d[a].rows=[...d[a].rows??[],{id:`row_${(d[a].rows?.length??0)+1}`,modules:[]}],this._setPanels(d)}}>+ ${v(t,"add_row")}</button>`,p`<button class="danger" @click=${d=>{d.preventDefault(),d.stopPropagation();let i=this._panels();i.splice(a,1),this._open=new Set([...this._open].filter(c=>!c.startsWith("p:")&&!/^\d/.test(c))),this._setPanels(i)}}>✕</button>`))}
      <button class="add" @click=${()=>{let r=this._panels();r.push({id:`tableau_${r.length+1}`,rows:[]}),this._setPanels(r)}}>+ ${v(t,"add_panel")}</button>
      <div class="note">${v(t,"editor_note")}</div>`}};ke.properties={hass:{attribute:!1},_config:{state:!0}},ke.styles=Pt;customElements.get("din-panel-card-editor")||customElements.define("din-panel-card-editor",ke);var nn="din-panel-card:view";function ro(n){let e=`${n.title??""}|${(n.panels??[]).map(o=>o.id??o.label??"").join(",")}|${(n.groups??[]).length}`,t=0;for(let o of e)t=t*31+o.charCodeAt(0)|0;return(t>>>0).toString(36)}var Ae=class extends V{constructor(){super(...arguments);this._viewKey=nn;this._panels=[];this._entities=[]}static getConfigElement(){return document.createElement("din-panel-card-editor")}static getStubConfig(){return{type:"custom:din-panel-card",panels:[{id:"tableau_1",label:"Tableau principal",rows:[{id:"row_1",label:"Rang\xE9e 1",phases:["L1"],modules:[{type:"differential",id:"ID1",amp:40,mA:30,poles:2,class:"AC"},{type:"breaker",id:"1-1",amp:16,label:"Prises",usage:"socket"},{type:"breaker",id:"1-2",amp:10,label:"Lumi\xE8res",usage:"light"}]}]}]}}setConfig(t){Ht(t),this._panels=Ot(t),this._entities=Nt(t,this._panels),this._config=t,this._selected=null;let o=t.collapsed;this._collapsed=new Set(o==="zones"||o==="rows"||o==="panels"?nt(this._panels,o):[]),this._cw=0;let s=null;if(this._viewKey=`${nn}:${ro(t)}`,t.view!=="tree"&&t.view!=="panel")try{s=localStorage.getItem(this._viewKey)}catch{}this._view=t.view==="tree"||t.view==="panel"?t.view:s==="tree"?"tree":"panel"}_toggle(t){let o=new Set(this._collapsed);o.has(t)?o.delete(t):o.add(t),this._collapsed=o}_collapseOne(){for(let t of["zones","rows","panels"]){let o=nt(this._panels,t);if(o.some(s=>!this._collapsed.has(s))){this._collapsed=new Set([...this._collapsed,...o]);return}}}_setView(t){if(this._view=t,this._config?.view!=="tree"&&this._config?.view!=="panel")try{localStorage.setItem(this._viewKey,t)}catch{}}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<"u"&&(this._ro=new ResizeObserver(t=>{let o=Math.round(t[0]?.contentRect.width??0);o>0&&o!==this._cw&&(this._cw=o)}),this._ro.observe(this))}disconnectedCallback(){this._ro?.disconnect(),this._ro=void 0,super.disconnectedCallback()}set hass(t){let o=this._hass;this._hass=t,(!o||o.language!==t.language||o.themes?.darkMode!==t.themes?.darkMode||this._entities.some(s=>o.states[s]!==t.states[s]))&&this.requestUpdate()}get hass(){return this._hass}getCardSize(){return 2+this._panels.reduce((t,o)=>t+o.rows.length*3,0)}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}get _lang(){return this._config?.language??(this._hass?.language?.startsWith("fr")?"fr":"en")}_summary(t){if(!this._hass)return h;let o=Re(this._hass,this._config?.sensors,v(t,"total"));if(!o.length)return h;let s=Math.max(0,...this._panels.map(a=>a.capacity??0)),r=a=>a.value===null?v(t,"unavailable"):`${a.approx?"\u2248 ":""}${O(a.kind,a.value)}`;return p`<div class="panel incoming ${s?"fixed":""}" style=${s?`--n:${s}`:""}>
      ${this._config?.incoming_title??v(t,"incoming")?p`<div class="panel-title">${this._config?.incoming_title??v(t,"incoming")}</div>`:h}
      <div class="in-plate">${o.map(a=>{let d=a.key==="total",i=a.pct===null?"":a.pct>1?"err":a.pct>=.9?"high":a.pct>=.6?"warn":"";return p`<div class="in-row ${d?"total":""}" title=${a.entity??""}
            @click=${()=>a.entity&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:a.entity},bubbles:!0,composed:!0}))}>
          ${d?p`<b class="in-label">${a.label}</b>`:p`<span class="chip ph-${a.key.toLowerCase()} in-label">${a.label}</span>`}
          <div class="in-track">${!d&&a.pct!==null?p`<i class=${i} style=${`width:${Math.max(1.5,Math.min(1,a.pct)*100)}%`}></i>`:h}</div>
          <div class="in-vals">${a.items.map(c=>p`<span class="k-${c.kind} ${c.value===null?"bad":""}">${r(c)}</span>`)}</div>
        </div>`})}</div>
    </div>`}render(){if(!this._config||!this._hass)return h;let t=this._lang,o={hass:this._hass,lang:t,select:c=>{this._selected=c},moreInfo:c=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:c},bubbles:!0,composed:!0}))},s=!!this._hass.themes?.darkMode,r=Number(this._config.module_width),a=this._view==="tree",d=Number(this._config.max_width)>0?Number(this._config.max_width):700,i=en(Math.min(this._cw||d,d));return p`<ha-card class=${s?"dark":""} style=${r>0?`--u:${r}px`:""}>
      <div class="toolbar">
        <h2>${this._config.title??""}</h2>
        ${a?p`
          <button class="tbtn" @click=${()=>{this._collapsed=new Set}}>
            <ha-icon icon="mdi:unfold-more-horizontal"></ha-icon><span>${v(t,"expand_all")}</span></button>
          <button class="tbtn" @click=${()=>this._collapseOne()}>
            <ha-icon icon="mdi:unfold-less-horizontal"></ha-icon><span>${v(t,"collapse_level")}</span></button>`:h}
        <button class="tbtn" aria-pressed=${a} title=${v(t,a?"view_panel":"view_tree")}
          @click=${()=>this._setView(a?"panel":"tree")}>
          <ha-icon icon=${a?"mdi:view-dashboard-outline":"mdi:file-tree"}></ha-icon>
          <span>${v(t,a?"view_panel":"view_tree")}</span></button>
      </div>
      ${a?h:this._summary(t)}
      ${a?tn(this._panels,o,{config:this._config,width:i,maxWidth:d,collapsed:this._collapsed,toggle:c=>this._toggle(c)}):this._panels.map(c=>Zt(c,o))}
      ${this._selected?p`<dialog @close=${()=>{this._selected=null}}
            @click=${c=>{c.target===c.currentTarget&&c.currentTarget.close()}}>
            ${Yt(this._selected,o,()=>this.shadowRoot?.querySelector("dialog")?.close())}</dialog>`:h}
    </ha-card>`}updated(){let t=this.shadowRoot?.querySelector("dialog");t&&this._selected&&!t.open&&t.showModal()}};Ae.properties={_config:{state:!0},_selected:{state:!0},_view:{state:!0},_collapsed:{state:!0},_cw:{state:!0}},Ae.styles=Lt;customElements.get("din-panel-card")||customElements.define("din-panel-card",Ae);console.info("%c DIN-PANEL-CARD %c v1.17.5 ","color:#fff;background:#3182ce;font-weight:700","color:#3182ce;background:#fff");window.customCards=window.customCards||[];window.customCards.push({type:"din-panel-card",name:"DIN Panel Card",description:"Tableau \xE9lectrique modulaire graphique (rang\xE9es, rail DIN, modules) aliment\xE9 par les entit\xE9s Home Assistant.",preview:!1});
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
