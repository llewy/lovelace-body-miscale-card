/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${i}--\x3e`,s=new RegExp(`${i}|${a}`);class o{constructor(e,t){this.parts=[],this.element=t;const a=[],o=[],r=document.createTreeWalker(t.content,133,null,!1);let d=0,h=-1,u=0;const{strings:b,values:{length:p}}=e;for(;u<p;){const e=r.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let a=0;for(let e=0;e<i;e++)n(t[e].name,"$lit$")&&a++;for(;a-- >0;){const t=b[u],i=c.exec(t)[2],a=i.toLowerCase()+"$lit$",o=e.getAttribute(a);e.removeAttribute(a);const n=o.split(s);this.parts.push({type:"attribute",index:h,name:i,strings:n}),u+=n.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,o=t.split(s),r=o.length-1;for(let t=0;t<r;t++){let a,s=o[t];if(""===s)a=l();else{const e=c.exec(s);null!==e&&n(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),a=document.createTextNode(s)}i.insertBefore(a,e),this.parts.push({type:"node",index:++h})}""===o[r]?(i.insertBefore(l(),e),a.push(e)):e.data=o[r],u+=r}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&h!==d||(h++,t.insertBefore(l(),e)),d=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(a.push(e),h--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=o.pop()}for(const e of a)e.parentNode.removeChild(e)}}const n=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},r=e=>-1!==e.index,l=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(e,t){const{element:{content:i},parts:a}=e,s=document.createTreeWalker(i,133,null,!1);let o=u(a),n=a[o],r=-1,l=0;const c=[];let d=null;for(;s.nextNode();){r++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==n&&n.index===r;)n.index=null!==d?-1:n.index-l,o=u(a,o),n=a[o]}c.forEach((e=>e.parentNode.removeChild(e)))}const h=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},u=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(r(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=new WeakMap,p=e=>"function"==typeof e&&b.has(e),_={},m={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],a=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let o,n=0,l=0,c=s.nextNode();for(;n<a.length;)if(o=a[n],r(o)){for(;l<o.index;)l++,"TEMPLATE"===c.nodeName&&(i.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=i.pop(),c=s.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));n++}else this.__parts.push(void 0),n++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${i} `;class f{constructor(e,t,i,a){this.strings=e,this.values=t,this.type=i,this.processor=a}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let o=0;o<e;o++){const e=this.strings[o],n=e.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===e.indexOf("--\x3e",n+1);const r=c.exec(e);t+=null===r?e+(s?y:a):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),v=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let a=0;a<t;a++){i+=e[a];const t=this.parts[a];if(void 0!==t){const e=t.value;if(w(e)||!v(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===_||w(e)&&e===this.value||(this.value=e,p(e)||(this.committer.dirty=!0))}commit(){for(;p(this.value);){const e=this.value;this.value=_,e(this)}this.value!==_&&this.committer.commit()}}class x{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;p(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}const e=this.__pendingValue;e!==_&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof f?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):v(e)?this.__commitIterable(e):e===m?(this.value=m,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const i=new g(t,e.processor,this.options),a=i._clone();i.update(e.values),this.__commitNode(a),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,a=0;for(const s of e)i=t[a],void 0===i&&(i=new x(this.options),t.push(i),0===a?i.appendIntoPart(this):i.insertAfterPart(t[a-1])),i.setValue(s),i.commit(),a++;a<t.length&&(t.length=a,this.clear(i&&i.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class M{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;p(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue===_)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=_}}class P extends S{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends k{}let O=!1;(()=>{try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class A{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;p(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue===_)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),a=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),a&&(this.__options=C(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=_}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const C=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function $(e){let t=T.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},T.set(e.type,t));let a=t.stringsArray.get(e.strings);if(void 0!==a)return a;const s=e.strings.join(i);return a=t.keyString.get(s),void 0===a&&(a=new o(e,e.getTemplateElement()),t.keyString.set(s,a)),t.stringsArray.set(e.strings,a),a}const T=new Map,E=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const B=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,a){const s=t[0];if("."===s){return new P(e,t.slice(1),i).parts}if("@"===s)return[new A(e,t.slice(1),a.eventContext)];if("?"===s)return[new M(e,t.slice(1),i)];return new S(e,t,i).parts}handleTextExpression(e){return new x(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const j=(e,...t)=>new f(e,t,"html",B)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,I=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const D=e=>t=>{const a=I(t.type,e);let s=T.get(a);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},T.set(a,s));let n=s.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(i);if(n=s.keyString.get(r),void 0===n){const i=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(i,e),n=new o(t,i),s.keyString.set(r,n)}return s.stringsArray.set(t.strings,n),n},z=["html","svg"],U=new Set,H=(e,t,i)=>{U.add(e);const a=i?i.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(a,e);const n=document.createElement("style");for(let e=0;e<o;e++){const t=s[e];t.parentNode.removeChild(t),n.textContent+=t.textContent}(e=>{z.forEach((t=>{const i=T.get(I(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),d(e,i)}))}))})(e);const r=a.content;i?function(e,t,i=null){const{element:{content:a},parts:s}=e;if(null==i)return void a.appendChild(t);const o=document.createTreeWalker(a,133,null,!1);let n=u(s),r=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(r=h(t),i.parentNode.insertBefore(t,i));-1!==n&&s[n].index===l;){if(r>0){for(;-1!==n;)s[n].index+=r,n=u(s,n);return}n=u(s,n)}}(i,n,r.firstChild):r.insertBefore(n,r.firstChild),window.ShadyCSS.prepareTemplateStyles(a,e);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){r.insertBefore(n,r.firstChild);const e=new Set;e.add(n),d(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Y={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},L=(e,t)=>t!==e&&(t==t||e==e),q={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:L};class R extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const a=this._attributeNameForProperty(i,t);void 0!==a&&(this._attributeToPropertyMap.set(a,i),e.push(a))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const a=this[e];this[t]=i,this._requestUpdate(e,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||q}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=L){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,a=t.converter||Y,s="function"==typeof a?a:a.fromAttribute;return s?s(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,a=t.converter;return(a&&a.toAttribute||Y.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=q){const a=this.constructor,s=a._attributeNameForProperty(e,i);if(void 0!==s){const e=a._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,a=i._attributeToPropertyMap.get(e);if(void 0!==a){const e=i.getPropertyOptions(a);this._updateState=16|this._updateState,this[a]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const a=this.constructor,s=a.getPropertyOptions(e);a._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}R.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const F="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol();class K{constructor(e,t){if(t!==W)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(F?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=(e,...t)=>{const i=t.reduce(((t,i,a)=>t+(e=>{if(e instanceof K)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[a+1]),e[0]);return new K(i,W)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const J={};class Z extends R{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),a=[];i.forEach((e=>a.unshift(e))),this._styles=a}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?F?this.renderRoot.adoptedStyleSheets=e.map((e=>e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==J&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return J}}Z.finalized=!0,Z.render=(e,i,a)=>{if(!a||"object"!=typeof a||!a.scopeName)throw new Error("The `scopeName` option is required.");const s=a.scopeName,o=E.has(i),n=V&&11===i.nodeType&&!!i.host,r=n&&!U.has(s),l=r?document.createDocumentFragment():i;if(((e,i,a)=>{let s=E.get(i);void 0===s&&(t(i,i.firstChild),E.set(i,s=new x(Object.assign({templateFactory:$},a))),s.appendInto(i)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:D(s)},a)),r){const e=E.get(l);E.delete(l);const a=e.value instanceof g?e.value.template:void 0;H(s,l,a),t(i,i.firstChild),i.appendChild(l),E.set(i,e)}!o&&n&&window.ShadyCSS.styleElement(i.host)};var Q=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,X="[^\\s]+",ee=/\[([^]*?)\]/gm;function te(e,t){for(var i=[],a=0,s=e.length;a<s;a++)i.push(e[a].substr(0,t));return i}var ie=function(e){return function(t,i){var a=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return a>-1?a:null}};function ae(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var a=0,s=t;a<s.length;a++){var o=s[a];for(var n in o)e[n]=o[n]}return e}var se=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],oe=["January","February","March","April","May","June","July","August","September","October","November","December"],ne=te(oe,3),re={dayNamesShort:te(se,3),dayNames:se,monthNamesShort:ne,monthNames:oe,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},le=ae({},re),ce=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},de={D:function(e){return String(e.getDate())},DD:function(e){return ce(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ce(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ce(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ce(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ce(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ce(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ce(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ce(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ce(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ce(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ce(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ce(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ce(Math.floor(Math.abs(t)/60),2)+":"+ce(Math.abs(t)%60,2)}},he=function(e){return+e-1},ue=[null,"[1-9]\\d?"],be=[null,X],pe=["isPm",X,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],_e=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],me=(ie("monthNamesShort"),ie("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var ge=function(e,t,i){if(void 0===t&&(t=me.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var a=[];t=(t=me[t]||t).replace(ee,(function(e,t){return a.push(t),"@@@"}));var s=ae(ae({},le),i);return(t=t.replace(Q,(function(t){return de[t](e,s)}))).replace(/@@@/g,(function(){return a.shift()}))},ye=(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(e,t,i,a){a=a||{},i=null==i?{}:i;var s=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return s.detail=i,e.dispatchEvent(s),s}),fe={name:"Bodymiscale Card",description:"Mit der bodymiscal-Karte können Sie Ihren Körperwert anzeigen.",not_available:"Bodymiscale ist nicht verfügbar",toggle_power:"Punktzahl anzeigen / Punktzahl ausblenden"},we={ok:"OK",problem:"Problem",none:"Nein","weight unavailable":"Nicht verfügbares Gewicht","impedance unavailable":"Impedanz nicht verfügbar","weight unavailable, impedance unavailable":"Gewicht nicht verfügbar, Impedanz nicht verfügbar"},ve={"weight: ":"Gewicht: ","impedance: ":"Impedanz: ","height: ":"Schnitt: ","age: ":"Alter: ","gender: ":"Nett: "},Se={male:"Mann",female:"Frauen","unavailable kg":"nicht verfügbar","unavailable ohm":"nicht verfügbar"},ke={water:"Wasser",visceral_fat:"Bauchfett",body_fat:"Körperfett",bmi:"BMI",bmi_label:"BMI-Label",muscle_mass:"Muskelmasse",protein:"Protein",basal_metabolism:"Grundumsatz",bone_mass:"Knochenmasse",metabolic_age:"Körperalter",ideal:"Ideal",body_type:"Körpertyp"},xe={Skinny:"Dünn","Balanced-skinny":"Balanced-dünn","Skinny-muscular":"Skinny-muskulös",Balanced:"Ausgeglichen","Balanced-muscular":"Ausgewogen-muskulös","Lack-exerscise":"Bewegungsmangel","Thick-set":"Stämmig",Obese:"Fettleibig",Overweight:"Übergewicht",Underweight:"Untergewicht","Normal or Healthy Weight":"Normal","Slight overweight":"Leichtes Übergewicht","Moderate obesity":"Moderate Fettleibigkeit","Severe obesity":"Schwere Fettleibigkeit","Massive obesity":"Massive Fettleibigkeit"},Me={" years":" jahre"},Pe={missing_entity:"Bitte definieren Sie eine Entity.",missing_enttity_bodymiscale:"Bitte definieren Sie eine bodymiscale Entity.",missing_model:"Bitte definieren Sie ein gültiges Maßstabsmodell."},Ne={entity:"Entity (erforderlich)",show_name:"Name anzeigen",show_name_aria_label_on:"Namen anzeigen anschalten",show_name_aria_label_off:"Namen anzeigen ausschalten",show_state:"Status anzeigen",show_state_aria_label_on:"Status anzeigen anschalten",show_state_aria_label_off:"Status anzeigen ausschalten",show_attributes:"Attribute anzeigen anschalten",show_attributes_aria_label_on:"Attribute anzeigen anschalten",show_attributes_aria_label_off:"Attribute anzeigen ausschalten",show_body:"Körperwert anzeigen",show_body_aria_label_on:"Körperwert anzeigen anschalten",show_body_aria_label_off:"Körperwert anzeigen ausschalten",show_buttons:"Taste anzeigen anschalten",show_buttons_aria_label_on:"Taste anzeigen anschalten",show_buttons_aria_label_off:"Taste anzeigen ausschalten",show_toolbar:"Symbolleiste anzeigen",show_toolbar_aria_label_on:"Symbolleiste anzeigen anschalten",show_toolbar_aria_label_off:"Symbolleiste anzeigen ausschalten",code_only_note:"Bitte beachten: Aktionen und Status Optionen sind nur im Code Editor verfügbar."},Oe={common:fe,state:we,attributes:ve,attributes_value:Se,body:ke,body_value:xe,unit:Me,error:Pe,editor:Ne},Ae={name:"Bodymiscale Card",description:"The bodymiscale card allows you to display your body score.",not_available:"Bodymiscale is not avaialable",toggle_power:"Show score/Hide score"},Ce={ok:"OK",problem:"Problem",none:"None","weight unavailable":"Weight unavailable","impedance unavailable":"Impedance unavailable","weight unavailable, impedance unavailable":"Weight unavailable, impedance unavailable"},$e={"weight: ":"Weight: ","impedance: ":"Impedance: ","height: ":"Height: ","age: ":"Age: ","gender: ":"Gender: "},Te={male:"male",female:"female","unavailable kg":"unavailable","unavailable ohm":"unavailable"},Ee={water:"Water",visceral_fat:"Visceral fat",body_fat:"Body fat",bmi:"BMI",bmi_label:"BMI label",muscle_mass:"Muscle mass",protein:"Protein",basal_metabolism:"Basal metabolism",bone_mass:"Bone mass",metabolic_age:"Metabolic age",ideal:"Ideal",body_type:"Body type"},Be={Skinny:"Skinny","Balanced-skinny":"Balanced-skinny","Skinny-muscular":"Skinny-muscular",Balanced:"Balanced","Balanced-muscular":"Balanced-muscular","Lack-exerscise":"Lack-exerscise","Thick-set":"Thick-set",Obese:"Obese",Overweight:"Overweight",Underweight:"Underweight","Normal or Healthy Weight":"Normal or Healthy Weight","Slight overweight":"Slight overweight","Moderate obesity":"Moderate obesity","Severe obesity":"Severe obesity","Massive obesity":"Massive obesity"},je={" years":" years"},Ie={missing_entity:"Please define an entity.",missing_enttity_bodymiscale:"Please define a bodymiscale entity.",missing_model:"Please define a valid scale model."},Ve={entity:"Entity (Required)",show_name:"Show Name",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_state:"Show State",show_state_aria_label_on:"Toggle display state on",show_state_aria_label_off:"Toggle display state off",show_attributes:"Show Attributes",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_body:"Show Body Score",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Show Buttons",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",show_toolbar:"Show Toolbar",show_toolbar_aria_label_on:"Toggle display toolbar on",show_toolbar_aria_label_off:"Toggle display toolbar off",code_only_note:"Note: Setting actions and stats options are available exclusively using Code Editor."},De={common:Ae,state:Ce,attributes:$e,attributes_value:Te,body:Ee,body_value:Be,unit:je,error:Ie,editor:Ve},ze={name:"Carte Bodymiscale",description:"La carte bodymiscale vous permet d'afficher votre score de corps.",not_available:"Bodymiscale n'est pas disponible",toggle_power:"Afficher le score/Cacher le score"},Ue={ok:"OK",problem:"Problème",none:"Aucun","weight unavailable":"Poids indisponible","impedance unavailable":"Impédance indisponible","weight unavailable, impedance unavailable":"Poids indisponible, impédance indisponible"},He={"weight: ":"Poids: ","impedance: ":"Impédance: ","height: ":"Taille: ","age: ":"Age: ","gender: ":"Genre: "},Ye={male:"homme",female:"femme","unavailable kg":"indisponible","unavailable ohm":"indisponible"},Le={water:"Eau",visceral_fat:"Graisse viscérale",body_fat:"Graisse corporelle",bmi:"IMC",bmi_label:"Étiquette IMC",muscle_mass:"Muscle",protein:"Protéine",basal_metabolism:"Métabolisme de base",bone_mass:"Masse osseuse",metabolic_age:"Age corporel",ideal:"Poids idéal",body_type:"Corpulence"},qe={Skinny:"Maigre","Balanced-skinny":"Équilibré maigre","Skinny-muscular":"Maigre musclé",Balanced:"Équilibré","Balanced-muscular":"Musclé équilibré","Lack-exerscise":"Manque d'exercice","Thick-set":"Trapu",Obese:"Obèse",Overweight:"Surpoids",Underweight:"Insuffisance pondérale","Normal or Healthy Weight":"Normal","Slight overweight":"Léger surpoids","Moderate obesity":"Obésité modérée","Severe obesity":"Obésité sévère","Massive obesity":"Obésité massive"},Re={" years":" ans"},Fe={missing_entity:"Veuillez définir une entité.",missing_enttity_bodymiscale:"Veuillez définir une entité Bodymiscale.",missing_model:"Veuillez définir un modèle de balance valide."},We={entity:"Entité (obligatoire)",show_name:"Afficher le nom",show_name_aria_label_on:"Activer affichage du nom",show_name_aria_label_off:"Désactiver affichage du nom",show_state:"Afficher l'état",show_state_aria_label_on:"Activer l'affichage de l'état",show_state_aria_label_off:"Désactiver l'affichage de l'état",show_attributes:"Afficher les attributs",show_attributes_aria_label_on:"Activer l'affichage des attributs",show_attributes_aria_label_off:"Désactiver l'affichage des attributs",show_body:"Afficher le score du corps",show_body_aria_label_on:"Activer l'affichage du score du corps",show_body_aria_label_off:"Désactiver l'affichage du score du corps",show_buttons:"Afficher les bouttons",show_buttons_aria_label_on:"Activer l'affichage des bouttons",show_buttons_aria_label_off:"Désactiver l'affichage des bouttons",show_toolbar:"Afficher la barre d'outils",show_toolbar_aria_label_on:"Activer l'affichage de la barre d'outils",show_toolbar_aria_label_off:"Désactiver l'affichage de la barre d'outils",code_only_note:"Remarque: Les options de réglage des actions et statistiques sont disponibles exclusivement en utilisant l'éditeur de code."},Ke={common:ze,state:Ue,attributes:He,attributes_value:Ye,body:Le,body_value:qe,unit:Re,error:Fe,editor:We},Ge={name:"Bodymiscale Card",description:"O cartão bodymiscale permite que você exiba a pontuação do seu corpo.",not_available:"Bodymiscale não é avaialável",toggle_power:"Pontuação do show/Ocultar pontuação"},Je={ok:"OK",problem:"Problema",none:"Nenhum","weight unavailable":"Peso indisponível","impedance unavailable":"Impedance indisponível","weight unavailable, impedance unavailable":"Peso indisponível, impedance indisponível"},Ze={"weight: ":"Peso: ","impedance: ":"Impedance: ","height: ":"Cintura: ","age: ":"Idade: ","gender: ":"Gênero: "},Qe={male:"macho",female:"fêmea","unavailable kg":"indisponível","unavailable ohm":"indisponível"},Xe={water:"Água",visceral_fat:"Gordura visceral",body_fat:"Gordura corporal",bmi:"IMC",bmi_label:"Etiqueta IMC",muscle_mass:"Massa muscular",protein:"Proteína",basal_metabolism:"Metabolismo basal",bone_mass:"Massa óssea",metabolic_age:"Idade metabólica",ideal:"Ideal",body_type:"Tipo de corpo"},et={Skinny:"Magro","Balanced-skinny":"Magro equilibrado","Skinny-muscular":"Magro musculoso",Balanced:"Equilibrado","Balanced-muscular":"Musculoso equilibrado","Lack-exerscise":"Falta de exercício","Thick-set":"Grosso-conjunto",Obese:"Obeso",Overweight:"Sobrepeso",Underweight:"Underweight","Normal or Healthy Weight":"Normal","Slight overweight":"Ligeiro acima do peso","Moderate obesity":"Obesidade moderada","Severe obesity":"Obesidade severa","Massive obesity":"Obesidade maciça"},tt={" years":" Anos"},it={missing_entity:"Por favor, defina uma entidade.",missing_enttity_bodymiscale:"Por favor, defina uma entidade bodymiscale.",missing_model:"Por favor, defina um modelo de escala válido."},at={entity:"Entidade (Obrigatório)",show_name:"Nome do show",show_name_aria_label_on:"Alternar o nome da exibição",show_name_aria_label_off:"Alternar o nome da exibição",show_state:"Mostrar Estado",show_state_aria_label_on:"Alternar estado de exibição ligado",show_state_aria_label_off:"Alternar estado de exibição fora",show_attributes:"Atributos do show",show_attributes_aria_label_on:"Alternar atributos de exibição em",show_attributes_aria_label_off:"Alternar atributos de exibição fora",show_body:"Mostrar pontuação corporal",show_body_aria_label_on:"Alternar a pontuação do corpo do display em",show_body_aria_label_off:"Alternar a pontuação do corpo do display fora",show_buttons:"Mostrar botões",show_buttons_aria_label_on:"Alternar botões de exibição",show_buttons_aria_label_off:"Alternar botões de exibição desligados",show_toolbar:"Mostrar barra de ferramentas",show_toolbar_aria_label_on:"Alternar a barra de ferramentas do display em",show_toolbar_aria_label_off:"Alternar barra de ferramentas de exibição fora",code_only_note:"Nota: As opções de configuração de ações e estatísticas estão disponíveis exclusivamente usando o Editor de Código."},st={common:Ge,state:Je,attributes:Ze,attributes_value:Qe,body:Xe,body_value:et,unit:tt,error:it,editor:at},ot={de:Object.freeze({__proto__:null,common:fe,state:we,attributes:ve,attributes_value:Se,body:ke,body_value:xe,unit:Me,error:Pe,editor:Ne,default:Oe}),en:Object.freeze({__proto__:null,common:Ae,state:Ce,attributes:$e,attributes_value:Te,body:Ee,body_value:Be,unit:je,error:Ie,editor:Ve,default:De}),fr:Object.freeze({__proto__:null,common:ze,state:Ue,attributes:He,attributes_value:Ye,body:Le,body_value:qe,unit:Re,error:Fe,editor:We,default:Ke}),pt_BR:Object.freeze({__proto__:null,common:Ge,state:Je,attributes:Ze,attributes_value:Qe,body:Xe,body_value:et,unit:tt,error:it,editor:at,default:st})};function nt(e,t,i){const[a,s]=e.split(".");let o;try{o=JSON.parse(localStorage.getItem("selectedLanguage"))}catch(e){o=localStorage.getItem("selectedLanguage")}const n=(o||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=ot[n][a][s]}catch(e){}if(void 0===r)try{r=ot.en[a][s]}catch(e){}if(void 0!==r)return""!==t&&""!==i&&(r=r.replace(t,i)),r}customElements.define("body-miscale-card-editor",class extends Z{static get properties(){return{hass:Object,_config:Object,_toggle:Boolean}}setConfig(e){this._config=e,this._config.entity||(this._config.entity=this.getEntitiesByType("bodymiscale")[0]||"",ye(this,"config-changed",{config:this._config}))}get _entity(){return this._config&&this._config.entity||""}get _show_name(){return this._config&&this._config.show_name||!1}get _show_state(){return this._config&&this._config.show_state||!1}get _show_attributes(){return this._config&&this._config.show_attributes||!1}get _show_body(){return this._config&&this._config.show_body||!1}get _show_buttons(){return this._config&&this._config.show_buttons||!1}get _show_toolbar(){return this._config&&this._config.show_toolbar||!1}getEntitiesByType(e){return Object.keys(this.hass.states).filter((t=>t.substr(0,t.indexOf("."))===e))}render(){if(!this.hass)return j``;const e=this.getEntitiesByType("bodymiscale");return j`
      <div class="card-config">
        <paper-dropdown-menu
          label="${nt("editor.entity")}"
          @value-changed=${this._valueChanged}
          .configValue=${"entity"}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${e.indexOf(this._entity)}
          >
            ${e.map((e=>j` <paper-item>${e}</paper-item> `))}
          </paper-listbox>
        </paper-dropdown-menu>

        <p class="option">
          <ha-switch
            aria-label=${nt(this._show_name?"editor.show_name_aria_label_off":"editor.show_name_aria_label_on")}
            .checked=${!1!==this._show_name}
            .configValue=${"show_name"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${nt("editor.show_name")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${nt(this._show_state?"editor.show_state_aria_label_off":"editor.show_state_aria_label_on")}
            .checked=${!1!==this._show_state}
            .configValue=${"show_state"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${nt("editor.show_state")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${nt(this._show_attributes?"editor.show_attributes_aria_label_off":"editor.show_attributes_aria_label_on")}
            .checked=${!1!==this._show_attributes}
            .configValue=${"show_attributes"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${nt("editor.show_attributes")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${nt(this._show_body?"editor.show_body_aria_label_off":"editor.show_body_aria_label_on")}
            .checked=${!1!==this._show_body}
            .configValue=${"show_body"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${nt("editor.show_body")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${nt(this._show_buttons?"editor.show_buttons_aria_label_off":"editor.show_buttons_aria_label_on")}
            .checked=${!1!==this._show_buttons}
            .configValue=${"show_buttons"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${nt("editor.show_buttons")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${nt(this._show_toolbar?"editor.show_toolbar_aria_label_off":"editor.show_toolbar_aria_label_on")}
            .checked=${!1!==this._show_toolbar}
            .configValue=${"show_toolbar"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${nt("editor.show_toolbar")}
        </p>

        <strong>
          ${nt("editor.code_only_note")}
        </strong>
      </div>
    `}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this["_"+t.configValue]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config={...this._config,[t.configValue]:void 0!==t.checked?t.checked:t.value}),ye(this,"config-changed",{config:this._config}))}static get styles(){return G`
      .card-config paper-dropdown-menu {
        width: 100%;
      }

      .option {
        display: flex;
        align-items: center;
      }

      .option ha-switch {
        margin-right: 10px;
      }
    `}});var rt=G`
ha-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.background {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 220px;
}
.preview {
  background-color: var(--primary-color);
  cursor: pointer;
  overflow: hidden;
  position: relative;
}
.preview.not-available {
  filter: grayscale(1);
}
.not-available {
  text-align: center;
  color: var(--text-primary-color);
  font-size: 16px;
}
.metadata {
  margin: 10px auto;
}
.title {
  font-size: 20px;
  padding: 12px 16px 8px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, auto);
  cursor: pointer;
}
.grid-content {
  display: grid;
  align-content: flex-start;
  grid-row-gap: 6px;
}
.grid-left {
  text-align: left;
  font-size: 110%;
  padding-left: 10px;
  border-left: 2px solid var(--primary-color);
}
.grid-right {
  text-align: right;
  padding-right: 10px;
  border-right: 2px solid var(--primary-color);
}
.score {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-bottom: 10px;
}
.score-div {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.score-icon {
  margin-left: 24px;
  flex-basis: 40px;
  flex-shrink: 0;
  flex-grow: 0;
}
.score-label {
  flex-basis: 30%;
  flex-shrink: 1;
  flex-grow: 1;
  margin-right: 8px;
}
.score-value {
  margin-right: 24px;
  flex-direction: row;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.fill-gap {
  flex-grow: 1;
}
ha-icon {
  color: #fff;
}
.toolbar {
  min-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.toolbar ha-icon-button:first-child {
  margin-left: 5px;
}
.toolbar ha-icon-button:last-child {
  margin-right: 5px;
}
label.divcheck {
  color: var(--primary-color);
}
input.divcheck { 
  display:none;
}
input.divcheck~div { 
  display:none;
}
input.divcheck:checked~div {
  display:block;
}
input.divcheck:checked~label.divcheck {
  color: green;
}`;customElements.get("ha-icon-button")||customElements.define("ha-icon-button",class extends(customElements.get("paper-icon-button")){});const lt={status:{key:"status",icon:"mdi:scale-bathroom"},problem:{key:"problem",icon:"mdi:alert"}},ct={weight:{key:"weight",label:nt("attributes.weight: "),unit:" kg"},impedance:{key:"impedance",label:nt("attributes.impedance: "),unit:" ohm"},height:{key:"height",label:nt("attributes.height: "),unit:" cm"},age:{key:"age",label:nt("attributes.age: "),unit:nt("unit. years")},gender:{key:"gender",label:nt("attributes.gender: ")}},dt={water:{key:"water",label:nt("body.water"),icon:"/local/images/bodyscoreIcon/water.webp",unit:" %"},visceral_fat:{key:"visceral_fat",label:nt("body.visceral_fat"),icon:"/local/images/bodyscoreIcon/visceral_fat.webp"},body_fat:{key:"body_fat",label:nt("body.body_fat"),icon:"/local/images/bodyscoreIcon/body_fat.webp",unit:" %"},bmi:{key:"bmi",label:nt("body.bmi"),icon:"/local/images/bodyscoreIcon/bmi.webp"},bmi_label:{key:"bmi_label",label:nt("body.bmi_label"),icon:"/local/images/bodyscoreIcon/body_type.webp"},muscle_mass:{key:"muscle_mass",label:nt("body.muscle_mass"),icon:"/local/images/bodyscoreIcon/muscle_mass.webp",unit:" kg"},protein:{key:"protein",label:nt("body.protein"),icon:"/local/images/bodyscoreIcon/protein.webp",unit:" %"},basal_metabolism:{key:"basal_metabolism",label:nt("body.basal_metabolism"),icon:"/local/images/bodyscoreIcon/basal_metabolism.webp",unit:" kcal"},bone_mass:{key:"bone_mass",label:nt("body.bone_mass"),icon:"/local/images/bodyscoreIcon/bone_mass.webp",unit:" kg"},metabolic_age:{key:"metabolic_age",label:nt("body.metabolic_age"),icon:"/local/images/bodyscoreIcon/metabolic_age.webp",unit:nt("unit. years")},ideal:{key:"ideal",label:nt("body.ideal"),icon:"/local/images/bodyscoreIcon/ideal.webp",unit:" kg"},body_type:{key:"body_type",label:nt("body.body_type"),icon:"/local/images/bodyscoreIcon/body_type.webp"}},ht={user1:{label:"User1",icon:"mdi:alpha-u-circle"},user2:{show:!1,label:"User2",icon:"mdi:alpha-u-circle"},user3:{show:!1,label:"User3",icon:"mdi:alpha-u-circle"},user4:{show:!1,label:"User4",icon:"mdi:alpha-u-circle"},user5:{show:!1,label:"User5",icon:"mdi:alpha-u-circle"}},ut={miscale:{buttons:{user1:{show:!1}},attributes:{weight:{key:"weight"},impedance:!1,height:{key:"height"},age:{key:"age"},gender:{key:"gender"}}},"181D":{state:{status:{key:"state"}},attributes:{weight:{key:"weight"},impedance:!1,height:{key:"height"},age:{key:"age"},gender:{key:"gender"}},body:{water:!1,visceral_fat:{key:"visceral_fat"},body_fat:!1,bmi:{key:"bmi"},bmi_label:{key:"bmi_label"},muscle_mass:!1,protein:!1,basal_metabolism:{key:"Basal_metabolism"},bone_mass:!1,metabolic_age:!1,ideal:{key:"ideal"},body_type:{key:"body_type"}}},"181B":{state:{status:{key:"state"}},attributes:{weight:{key:"weight"},impedance:{key:"impedance"},height:{key:"height"},age:{key:"age"},gender:{key:"gender"}},body:{water:{key:"water"},visceral_fat:{key:"visceral_fat"},body_fat:{key:"body_fat"},bmi:{key:"bmi"},bmi_label:{key:"bmi_label"},muscle_mass:{key:"muscle_mass"},protein:{key:"protein"},basal_metabolism:{key:"basal_metabolism"},bone_mass:{key:"bone_mass"},metabolic_age:{key:"metabolic_age"},ideal:{key:"ideal"},body_type:{key:"body_type"}}}};customElements.define("body-miscale-card",class extends Z{static get properties(){return{_hass:{},config:{},stateObj:{}}}static get styles(){return rt}static async getConfigElement(){return document.createElement("body-miscale-card-editor")}static getStubConfig(e,t){const[i]=t.filter((e=>"bodymiscale"===e.substr(0,e.indexOf("."))));return{entity:i||""}}get entity(){return this.hass.states[this.config.entity]}get showName(){return void 0===this.config.show.name||this.config.show.name}get showState(){return void 0===this.config.show.state||this.config.show.state}get showAttributes(){return void 0===this.config.show.attributes||this.config.show.attributes}get showBody(){return void 0===this.config.show.body||this.config.show.body}get showButtons(){return void 0===this.config.show.buttons||this.config.show.buttons}get showToolbar(){return void 0===this.config.show.toolbar||this.config.show.toolbar}setConfig(e){if(!e.entity)throw new Error(nt("error.missing_entity"));if("bodymiscale"!==e.entity.split(".")[0])throw new Error(nt("error.missing_entity_bodymiscale"));if(e.model&&!(e.model in ut))throw new Error(nt("error.missing_model"));const t=ut[e.model]||ut.miscale;this.config={name:e.name,entity:e.entity,show:{name:!1!==e.show_name,state:!1!==e.show_state,body:!1!==e.show_body,attributes:!1!==e.show_attributes,buttons:!1!==e.show_buttons,toolbar:!1!==e.show_toolbar},buttons:this.deepMerge(ht,t.buttons,e.buttons),state:this.deepMerge(lt,t.state,e.state),body:this.deepMerge(dt,t.body,e.body),attributes:this.deepMerge(ct,t.attributes,e.attributes),styles:{background:e.image?`background-image: url('${e.image}'); color: white; text-shadow: 0 0 10px black;`:"",icon:`color: ${e.image?"white":"var(--paper-item-icon-color)"};`,iconbody:"background-color: white;",content:`padding: ${!1!==e.name?"8px":"16px"} 16px ${!1!==e.buttons?"8px":"16px"};`}}}set hass(e){e&&this.config&&(this.stateObj=this.config.entity in e.states?e.states[this.config.entity]:null),this._hass=e}getCardSize(){return this.config.show.name&&this.config.show.buttons?4:this.config.show.name||this.config.show.buttons?3:2}shouldUpdate(e){return e.has("stateObj")}handleChange(e,t){const i=e.target.getAttribute("value");this.callService("bodymiscale.set_"+t,{entity_id:this.stateObj.entity_id,[t]:i})}callService(e,t={entity_id:this.stateObj.entity_id}){const[i,a]=e.split(".");this._hass.callService(i,a,t)}fireEvent(e,t={}){const i=new Event(e,{bubbles:t.bubbles||!0,cancelable:t.cancelable||!0,composed:t.composed||!0});i.detail={entityId:this.stateObj.entity_id},this.dispatchEvent(i)}deepMerge(...e){const t=e=>e&&"object"==typeof e,i={};return e.filter((e=>t(e))).forEach((e=>{Object.keys(e).forEach((a=>{const s=i[a],o=e[a];Array.isArray(s)&&Array.isArray(o)?i[a]=s.concat(o):t(s)&&t(o)?i[a]=this.deepMerge(Object.assign({},s),o):i[a]=o}))})),i}renderName(){return this.showName?j` <div class="title">${this.config.name||this.stateObj.attributes.friendly_name}</div> `:j``}renderState(e){if(!this.showState)return j``;const t=e.compute||(e=>e),i=e&&e.key in this.stateObj.attributes,a=e&&e.key in this.stateObj,s=i?t(this.stateObj.attributes[e.key])+(e.unit||""):a?t(this.stateObj[e.key])+(e.unit||""):this._hass.localize("state.default.unavailable"),o=j`<div>${e.icon&&this.renderIcon(e)}${e.label||""}${nt("state."+s)||s}</div>`;return e.key+"_list"in this.stateObj.attributes&&(i||a)?this.renderDropdown(o,e.key):o}renderAttribute(e){if(!this.showAttributes)return j``;const t=e.compute||(e=>e),i=e&&e.key in this.stateObj.attributes,a=e&&e.key in this.stateObj,s=i?t(this.stateObj.attributes[e.key])+(e.unit||""):a?t(this.stateObj[e.key])+(e.unit||""):this._hass.localize("state.default.unavailable"),o=j`<div>${e.icon&&this.renderIcon(e)}${e.label||""}${nt("attributes_value."+s)||s}</div>`;return e.key+"_list"in this.stateObj.attributes&&(i||a)?this.renderDropdown(o,e.key):o}renderBody(e){if(!this.showBody)return j``;const t=e.compute||(e=>e),i=e&&e.key in this.stateObj.attributes,a=e&&e.key in this.stateObj,s=i?t(this.stateObj.attributes[e.key])+(e.unit||""):a?t(this.stateObj[e.key])+(e.unit||""):this._hass.localize("state.default.unavailable"),o=j`<div class="score-div">
                               <div class="score-icon">
                                   ${e.icon&&this.renderIconbody(e)}
                               </div>
                               <div class="score-label">
                                   ${e.label||""}
                               </div>
                               <div class="score-value">
                               ${nt("body_value."+s)||s}
                               </div>
                             </div>`;return e.key+"_list"in this.stateObj.attributes&&(i||a)?this.renderDropdown(o,e.key):o}renderIcon(e){const t="water"===e.key&&"water_icon"in this.stateObj.attributes?this.stateObj.attributes.water_icon:e.icon;return j`<ha-icon icon="${t}" style="margin-right: 10px; ${this.config.styles.icon}"></ha-icon>`}renderIconbody(e){const t="Water"===e.key&&"water_icon"in this.stateObj.attributes?this.stateObj.attributes.water_icon:e.icon;return j`<div style="width: 24px; height: 24px; -webkit-mask-box-image: url('${t}'); margin-right: 10px; ${this.config.styles.iconbody}"></div>`}renderButton(e){return this.showButtons?e&&!1!==e.show?j`<ha-icon-button
        @click="${()=>this.callService(e.service,e.service_data)}"
        icon="${e.icon}"
        title="${e.label||""}"
        style="${this.config.styles.icon}"></ha-icon-button>`:null:j``}renderToolbar(){return this.showToolbar?j`
      <div class="toolbar">
        <label class="divcheck" for="hiddenscore">
        <ha-icon-button
          icon="hass:power"
          title="${nt("common.toggle_power")}"
        >
        </ha-icon-button>
        </label>
        <div class="fill-gap"></div>
        ${Object.values(this.config.buttons).filter((e=>e)).map(this.renderButton.bind(this))}
      </div>
    `:j``}renderDropdown(e,t){const i=this.stateObj.attributes[t],a=this.stateObj.attributes[t+"_list"];return j`
      <paper-menu-button slot="dropdown-trigger" @click="${e=>e.stopPropagation()}" style="padding: 0">
        <paper-button slot="dropdown-trigger">${e}</paper-button>
        <paper-listbox slot="dropdown-content" selected="${a.indexOf(i)}" @click="${e=>this.handleChange(e,t)}">
          ${a.map((e=>j`<paper-item value="${e}" style="text-shadow: none;">${e}</paper-item>`))}
        </paper-listbox>
      </paper-menu-button>
    `}render(){return this.stateObj?j`
      <ha-card>
        <ha-scale class="background" style="${this.config.styles.background}">
          <div>${this.renderName()}</div>
          <div class="grid" style="${this.config.styles.content}" @click="${()=>this.fireEvent("hass-more-info")}">
            <div class="grid-content grid-left">
              ${Object.values(this.config.state).filter((e=>e)).map(this.renderState.bind(this))}
            </div>
            <div class="grid-content grid-right">
              ${Object.values(this.config.attributes).filter((e=>e)).map(this.renderAttribute.bind(this))}
            </div>
          </div>
        </ha-scale>
        ${this.renderToolbar()}
        <input type="checkbox" class="divcheck" id="hiddenscore"/>       
        <div>
          <div class="score">
            ${Object.values(this.config.body).filter((e=>e)).map(this.renderBody.bind(this))}
          </div>
        </div>
      </ha-card>`:j`
      <ha-card>
        <div class="preview not-available">
          <div class="metadata">
            <div class="not-available">
              ${nt("common.not_available")}
            </div>
          </div>
        </div>
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({preview:!0,type:"body-miscale-card",name:nt("common.name"),description:nt("common.description")});
