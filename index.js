var pt=Object.defineProperty,Ht=Object.defineProperties,Nt=Object.getOwnPropertyDescriptor,Lt=Object.getOwnPropertyDescriptors;var ht=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable;var ct=(r,t,e)=>t in r?pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,V=(r,t)=>{for(var e in t||(t={}))kt.call(t,e)&&ct(r,e,t[e]);if(ht)for(var e of ht(t))jt.call(t,e)&&ct(r,e,t[e]);return r},W=(r,t)=>Ht(r,Lt(t));var K=(r,t,e,s)=>{for(var i=s>1?void 0:s?Nt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&pt(t,e,i),i};var g=(r,t,e)=>new Promise((s,i)=>{var n=a=>{try{l(e.next(a))}catch(c){i(c)}},o=a=>{try{l(e.throw(a))}catch(c){i(c)}},l=a=>a.done?s(a.value):Promise.resolve(a.value).then(n,o);l((e=e.apply(r,t)).next())});var k=globalThis,j=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),dt=new WeakMap,P=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(j&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&dt.set(e,t))}return t}toString(){return this.cssText}},ut=r=>new P(typeof r=="string"?r:r+"",void 0,Z),J=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new P(e,r,Z)},G=(r,t)=>{if(j)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=k.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},q=j?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ut(e)})(r):r;var{is:qt,defineProperty:Dt,getOwnPropertyDescriptor:It,getOwnPropertyNames:zt,getOwnPropertySymbols:Bt,getPrototypeOf:Ft}=Object,$=globalThis,ft=$.trustedTypes,Vt=ft?ft.emptyScript:"",Q=$.reactiveElementPolyfillSupport,w=(r,t)=>r,U={toAttribute(r,t){switch(t){case Boolean:r=r?Vt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(s){e=null}}return e}},D=(r,t)=>!qt(r,t),mt={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:D},$t,yt;($t=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(yt=$.litPropertyMetadata)!=null||($.litPropertyMetadata=new WeakMap);var f=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Dt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){var o;let{get:i,set:n}=(o=It(this.prototype,t))!=null?o:{get(){return this[e]},set(l){this[e]=l}};return{get(){return i==null?void 0:i.call(this)},set(l){let a=i==null?void 0:i.call(this);n.call(this,l),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:mt}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;let t=Ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){let e=this.properties,s=[...zt(e),...Bt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(q(i))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return G(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:U).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n;let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:U;this._$Em=i,this[i]=l.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((i=s.hasChanged)!=null?i:D)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){var i;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((i=this._$Ej)!=null?i:this._$Ej=new Set).add(t)}_$ET(){return g(this,null,function*(){this.isUpdatePending=!0;try{yield this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,l]of this._$Ep)this[o]=l;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,l]of n)l.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],l)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}},_t;f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[w("elementProperties")]=new Map,f[w("finalized")]=new Map,Q==null||Q({ReactiveElement:f}),((_t=$.reactiveElementVersions)!=null?_t:$.reactiveElementVersions=[]).push("2.0.4");var R=globalThis,I=R.trustedTypes,gt=I?I.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ct="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Pt="?"+y,Wt=`<${Pt}>`,b=document,M=()=>b.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,Kt=r=>ot(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",X=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,vt=/>/g,A=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bt=/'/g,St=/"/g,wt=/^(?:script|style|textarea|title)$/i,nt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),z=nt(1),oe=nt(2),ne=nt(3),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Et=new WeakMap,v=b.createTreeWalker(b,129);function Ut(r,t){if(!ot(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}var Zt=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",o=O;for(let l=0;l<e;l++){let a=r[l],c,p,h=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===O?p[1]==="!--"?o=At:p[1]!==void 0?o=vt:p[2]!==void 0?(wt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=A):p[3]!==void 0&&(o=A):o===A?p[0]===">"?(o=i!=null?i:O,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?A:p[3]==='"'?St:bt):o===St||o===bt?o=A:o===At||o===vt?o=O:(o=A,i=void 0);let m=o===A&&r[l+1].startsWith("/>")?" ":"";n+=o===O?a+Wt:h>=0?(s.push(c),a.slice(0,h)+Ct+a.slice(h)+y+m):a+y+(h===-2?l:m)}return[Ut(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},H=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,l=t.length-1,a=this.parts,[c,p]=Zt(t,e);if(this.el=r.createElement(c,s),v.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Ct)){let u=p[o++],m=i.getAttribute(h).split(y),L=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:L[2],strings:m,ctor:L[1]==="."?et:L[1]==="?"?st:L[1]==="@"?it:x}),i.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(wt.test(i.tagName)){let h=i.textContent.split(y),u=h.length-1;if(u>0){i.textContent=I?I.emptyScript:"";for(let m=0;m<u;m++)i.append(h[m],M()),v.nextNode(),a.push({type:2,index:++n});i.append(h[u],M())}}}else if(i.nodeType===8)if(i.data===Pt)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:n}),h+=y.length-1}n++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function E(r,t,e=r,s){var o,l,a;if(t===S)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,n=T(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?((a=e._$Co)!=null?a:e._$Co=[])[s]=i:e._$Cl=i),i!==void 0&&(t=E(r,i._$AS(r,t.values),i,s)),t}var tt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,i=((c=t==null?void 0:t.creationScope)!=null?c:b).importNode(e,!0);v.currentNode=i;let n=v.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let p;a.type===2?p=new N(n,n.nextSibling,this,t):a.type===1?p=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(p=new rt(n,this,t)),this._$AV.push(p),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=v.nextNode(),o++)}return v.currentNode=b,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},N=class r{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,i){var n;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(n=i==null?void 0:i.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),T(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var n;let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(Ut(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{let o=new tt(i,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=Et.get(t.strings);return e===void 0&&Et.set(t.strings,e=new H(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new r(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},x=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=E(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{let l=t,a,c;for(t=n[0],a=0;a<n.length-1;a++)c=E(this,l[s+a],e,a),c===S&&(c=this._$AH[a]),o||(o=!T(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},et=class extends x{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},st=class extends x{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},it=class extends x{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var o;if((t=(o=E(this,t,e,0))!=null?o:d)===S)return;let s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},rt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var Y=R.litHtmlPolyfillSupport,xt;Y==null||Y(H,N),((xt=R.litHtmlVersions)!=null?xt:R.litHtmlVersions=[]).push("3.2.1");var B=(r,t,e)=>{var n,o;let s=(n=e==null?void 0:e.renderBefore)!=null?n:t,i=s._$litPart$;if(i===void 0){let l=(o=e==null?void 0:e.renderBefore)!=null?o:null;s._$litPart$=i=new N(t.insertBefore(M(),l),l,void 0,e!=null?e:{})}return i._$AI(r),i};var _=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}},Ot;_._$litElement$=!0,_.finalized=!0,(Ot=globalThis.litElementHydrateSupport)==null||Ot.call(globalThis,{LitElement:_});var at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:_});var Rt;((Rt=globalThis.litElementVersions)!=null?Rt:globalThis.litElementVersions=[]).push("4.1.1");var Mt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Jt={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:D},Gt=(r=Jt,t,e)=>{let{kind:s,metadata:i}=e,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(e.name,r),s==="accessor"){let{name:o}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.P(o,void 0,r),l}}}if(s==="setter"){let{name:o}=e;return function(l){let a=this[o];t.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function lt(r){return(t,e)=>typeof e=="object"?Gt(r,t,e):((s,i,n)=>{let o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?W(V({},s),{wrapped:!0}):s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}import{allComponents as Qt,provideFluentDesignSystem as Xt}from"@fluentui/web-components";Xt().register(Qt);var C=class extends _{constructor(){super(...arguments);this.activeTabId="persoon"}render(){return z`
      <div class="tablist-container">
        <fluent-tabs activeid="persoon">
          <fluent-tab id="persoon">Persoon</fluent-tab>
          <!-- <fluent-tab id="instantie">Instantie</fluent-tab> -->
          <fluent-tab-panel class="tab-panel" id="persoonPanel">
            <div style="display: flex; flex-direction: row; gap: .5em">
              <fluent-text-field>Persoonsnummer</fluent-text-field>
              
              <div style="display: flex; flex-direction: column;">
                <label part="label" class="label">Instantie</label>
                <fluent-select title="Selecteer">
                  <fluent-option value="1">124</fluent-option>
                  <fluent-option value="2">123</fluent-option>
                  <fluent-option value="3">122</fluent-option>
                </fluent-select>
              </div>
              <fluent-text-field>Tijdvak</fluent-text-field>
              
              <div style="display: flex; flex-direction: column;align-self: end">
                
                <fluent-button>Weergeven</fluent-button>
                </div>
              
            </div>
          </fluent-tab-panel>

          <!-- <fluent-tab-panel id="instantiesPanel"> </fluent-tab-panel> -->
        </fluent-tabs>
      </div>
    `}};C.styles=J`
    :host {
      display: block;
    }
    .tab-panel {
      margin-top: 1em;
    }
    .label {
      display: block;
      color: var(--neutral-foreground-rest);
      cursor: pointer;
      font-family: var(--body-font);
      font-size: var(--type-ramp-base-font-size);
      line-height: var(--type-ramp-base-line-height);
      font-weight: initial;
      font-variation-settings: var(--type-ramp-base-font-variations);
      margin-bottom: 4px;
    }
  `,K([lt({type:String})],C.prototype,"activeTabId",2),C=K([Mt("test-app")],C);function Tt(r){return document.getElementById(`single-spa-application:${r}`)}var ss=r=>Promise.resolve(),is=r=>g(void 0,null,function*(){let t=Tt(r.name);t&&B(z`<test-app></test-app>`,t)}),rs=r=>g(void 0,null,function*(){let t=Tt(r.name);t&&t.replaceChildren()}),os=r=>g(void 0,null,function*(){console.log("Update test-app",r)});export{ss as bootstrap,is as mount,rs as unmount,os as update};
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

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
