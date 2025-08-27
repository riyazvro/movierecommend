"use strict";exports.id=395,exports.ids=[395],exports.modules={42949:(a,b,c)=>{c.d(b,{lB:()=>j});let d=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],e=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function f(a){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${i(a)}></audio>
    </slot>
    <slot></slot>
  `}function g(a){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${i(a)}></video>
    </slot>
    <slot></slot>
  `}function h(a,{tag:b,is:c}){let h=globalThis.document?.createElement?.(b,{is:c}),i=h?function(a){let b=[];for(let c=Object.getPrototypeOf(a);c&&c!==HTMLElement.prototype;c=Object.getPrototypeOf(c)){let a=Object.getOwnPropertyNames(c);b.push(...a)}return b}(h):[];return class j extends a{static getTemplateHTML=b.endsWith("audio")?f:g;static shadowRootOptions={mode:"open"};static Events=d;static #a=!1;static get observedAttributes(){return j.#b(),[...h?.constructor?.observedAttributes??[],...e]}static #b(){if(this.#a)return;this.#a=!0;let a=new Set(this.observedAttributes);for(let b of(a.delete("muted"),i))if(!(b in this.prototype))if("function"==typeof h[b])this.prototype[b]=function(...a){return this.#c(),(()=>{if(this.call)return this.call(b,...a);let c=this.nativeEl?.[b];return c?.apply(this.nativeEl,a)})()};else{let c={get(){this.#c();let c=b.toLowerCase();if(a.has(c)){let a=this.getAttribute(c);return null!==a&&(""===a||a)}return this.get?.(b)??this.nativeEl?.[b]}};b!==b.toUpperCase()&&(c.set=function(c){this.#c();let d=b.toLowerCase();return a.has(d)?void(!0===c||!1===c||null==c?this.toggleAttribute(d,!!c):this.setAttribute(d,c)):this.set?void this.set(b,c):void(this.nativeEl&&(this.nativeEl[b]=c))}),Object.defineProperty(this.prototype,b,c)}}#d=!1;#e=null;#f=new Map;#g;get;set;call;get nativeEl(){return this.#c(),this.#e??this.querySelector(":scope > [slot=media]")??this.querySelector(b)??this.shadowRoot?.querySelector(b)??null}set nativeEl(a){this.#e=a}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(a){this.toggleAttribute("muted",a)}get src(){return this.getAttribute("src")}set src(a){this.setAttribute("src",`${a}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(a){this.setAttribute("preload",`${a}`)}#c(){this.#d||(this.#d=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let a=function(a){let b={};for(let c of a)b[c.name]=c.value;return b}(this.attributes);c&&(a.is=c),b&&(a.part=b),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}for(let a of(this.nativeEl.muted=this.hasAttribute("muted"),i))this.#h(a);for(let a of(this.#g=new MutationObserver(this.#i.bind(this)),this.shadowRoot.addEventListener("slotchange",()=>this.#j()),this.#j(),this.constructor.Events))this.shadowRoot.addEventListener(a,this,!0)}handleEvent(a){a.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(a.type,{detail:a.detail}))}#j(){let a=new Map(this.#f),b=this.shadowRoot?.querySelector("slot:not([name])");(b?.assignedElements({flatten:!0}).filter(a=>["track","source"].includes(a.localName))).forEach(b=>{a.delete(b);let c=this.#f.get(b);c||(c=b.cloneNode(),this.#f.set(b,c),this.#g?.observe(b,{attributes:!0})),this.nativeEl?.append(c),this.#k(c)}),a.forEach((a,b)=>{a.remove(),this.#f.delete(b)})}#i(a){for(let b of a)if("attributes"===b.type){let{target:a,attributeName:c}=b,d=this.#f.get(a);d&&c&&(d.setAttribute(c,a.getAttribute(c)??""),this.#k(d))}}#k(a){a&&"track"===a.localName&&a.default&&("chapters"===a.kind||"metadata"===a.kind)&&"disabled"===a.track.mode&&(a.track.mode="hidden")}#h(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}}attributeChangedCallback(a,b,c){this.#c(),this.#l(a,b,c)}#l(a,b,c){!["id","class"].includes(a)&&(!j.observedAttributes.includes(a)&&this.constructor.observedAttributes.includes(a)||(null===c?this.nativeEl?.removeAttribute(a):this.nativeEl?.getAttribute(a)!==c&&this.nativeEl?.setAttribute(a,c)))}connectedCallback(){this.#c()}}}function i(a){let b="";for(let c in a){if(!e.includes(c))continue;let d=a[c];""===d?b+=` ${c}`:b+=` ${c}="${d}"`}return b}let j=h(globalThis.HTMLElement??class{},{tag:"video"});h(globalThis.HTMLElement??class{},{tag:"audio"})},58691:(a,b,c)=>{c.r(b),c.d(b,{default:()=>k});var d=c(43210),e=c(42949);class f extends e.lB{static shadowRootOptions={...e.lB.shadowRootOptions};static getTemplateHTML=a=>{let{src:b,...c}=a;return e.lB.getTemplateHTML(c)};#m;attributeChangedCallback(a,b,c){"src"!==a&&super.attributeChangedCallback(a,b,c),"src"===a&&b!=c&&this.load()}async load(){if(this.#m)this.api.attachSource(this.src);else{this.#m=!0;let a=await c.e(447).then(c.bind(c,25447));this.api=a.MediaPlayer().create(),this.api.initialize(this.nativeEl,this.src,this.autoplay)}}}globalThis.customElements&&!globalThis.customElements.get("dash-video")&&globalThis.customElements.define("dash-video",f);var g=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),h={className:"class",htmlFor:"for"};function i(a){return a.toLowerCase()}function j(a){return"boolean"==typeof a?a?"":void 0:"function"==typeof a?void 0:"object"!=typeof a||null===a?a:void 0}var k=function({react:a,tagName:b,elementClass:c,events:d,displayName:e,defaultProps:f,toAttributeName:k=i,toAttributeValue:l=j}){let m=Number.parseInt(a.version)>=19,n=a.forwardRef((d,e)=>{var i,n;let o=a.useRef(null);a.useRef(new Map);let p={},q={},r={},s={};for(let[a,b]of Object.entries(d)){if(g.has(a)){r[a]=b;continue}let d=k(h[a]??a);if(a in c.prototype&&!(a in((null==(i=globalThis.HTMLElement)?void 0:i.prototype)??{}))&&!(null==(n=c.observedAttributes)?void 0:n.some(a=>a===d))){s[a]=b;continue}if(a.startsWith("on")){p[a]=b;continue}let e=l(b);d&&null!=e&&(q[d]=String(e),m||(r[d]=e)),d&&m&&(e!==j(b)?r[d]=e:r[d]=b)}if((null==c?void 0:c.getTemplateHTML)&&(null==c?void 0:c.shadowRootOptions)){let{mode:b,delegatesFocus:e}=c.shadowRootOptions;r.children=[a.createElement("template",{shadowrootmode:b,shadowrootdelegatesfocus:e,dangerouslySetInnerHTML:{__html:c.getTemplateHTML(q,d)}}),r.children]}return a.createElement(b,{...f,...r,ref:a.useCallback(a=>{o.current=a,"function"==typeof e?e(a):null!==e&&(e.current=a)},[e])})});return n.displayName=e??c.name,n}({react:d,tagName:"dash-video",elementClass:f,toAttributeName:a=>"muted"===a?"":"defaultMuted"===a?"muted":i(a)})}};