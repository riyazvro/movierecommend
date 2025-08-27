"use strict";exports.id=723,exports.ids=[723],exports.modules={63337:(a,b,c)=>{let d,e,f;c.r(b),c.d(b,{MaxResolution:()=>bV,MediaError:()=>bM,MinResolution:()=>bW,RenditionOrder:()=>bX,default:()=>oL,generatePlayerInitTime:()=>cM,playerSoftwareName:()=>oK,playerSoftwareVersion:()=>oJ});var g=c(43210),h=Object.create,i=Object.defineProperty,j=Object.getOwnPropertyDescriptor,k=Object.getOwnPropertyNames,l=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,n=function(a,b){return function(){return a&&(b=a(a=0)),b}},o=function(a,b){return function(){return b||a((b={exports:{}}).exports,b),b.exports}},p=function(a,b,c,d){if(b&&"object"==typeof b||"function"==typeof b)for(var e,f=k(b),g=0,h=f.length;g<h;g++)e=f[g],m.call(a,e)||e===c||i(a,e,{get:(function(a){return b[a]}).bind(null,e),enumerable:!(d=j(b,e))||d.enumerable});return a},q=function(a,b,c){return c=null!=a?h(l(a)):{},p(!b&&a&&a.__esModule?c:i(c,"default",{value:a,enumerable:!0}),a)},r=o(function(a,b){b.exports="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}});function s(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](a):s(a,b)}var t=n(function(){t()});function u(a){return a&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a}var w=n(function(){}),x=o(function(a,b){var c=Array.prototype.slice;b.exports=function(a,b){for(("length"in a)||(a=[a]),a=c.call(a);a.length;){var d=a.shift(),e=b(d);if(e)return e;d.childNodes&&d.childNodes.length&&(a=c.call(d.childNodes).concat(a))}}}),y=o(function(a,b){function c(a,b){if(!s(this,c))return new c(a,b);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=b||null}t(),b.exports=c,c.prototype.nodeType=8,c.prototype.nodeName="#comment",c.prototype.toString=function(){return"[object Comment]"}}),z=o(function(a,b){function c(a,b){if(!s(this,c))return new c(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=b||null}t(),b.exports=c,c.prototype.type="DOMTextNode",c.prototype.nodeType=3,c.prototype.nodeName="#text",c.prototype.toString=function(){return this.data},c.prototype.replaceData=function(a,b,c){var d=this.data,e=d.substring(0,a),f=d.substring(a+b,d.length);this.data=e+c+f,this.length=this.data.length}}),A=o(function(a,b){b.exports=function(a){var b=this,c=a.type;a.target||(a.target=b),b.listeners||(b.listeners={});var d=b.listeners[c];if(d)return d.forEach(function(c){a.currentTarget=b,"function"==typeof c?c(a):c.handleEvent(a)});b.parentNode&&b.parentNode.dispatchEvent(a)}}),B=o(function(a,b){b.exports=function(a,b){this.listeners||(this.listeners={}),this.listeners[a]||(this.listeners[a]=[]),-1===this.listeners[a].indexOf(b)&&this.listeners[a].push(b)}}),C=o(function(a,b){b.exports=function(a,b){if(this.listeners&&this.listeners[a]){var c=this.listeners[a],d=c.indexOf(b);-1!==d&&c.splice(d,1)}}}),D=o(function(a,b){w(),b.exports=function a(b){switch(b.nodeType){case 3:return e(b.data);case 8:return"\x3c!--"+b.data+"--\x3e";default:var f,g,h;return g=[],h=(f=b).tagName,"http://www.w3.org/1999/xhtml"===f.namespaceURI&&(h=h.toLowerCase()),g.push("<"+h+function(a){var b=[];for(var c in a)(function(a,b){var c=u(a[b]);return"style"===b&&Object.keys(a.style).length>0||a.hasOwnProperty(b)&&("string"===c||"boolean"===c||"number"===c)&&"nodeName"!==b&&"className"!==b&&"tagName"!==b&&"textContent"!==b&&"innerText"!==b&&"namespaceURI"!==b&&"innerHTML"!==b})(a,c)&&b.push({name:c,value:a[c]});for(var e in a._attributes)for(var f in a._attributes[e]){var g=a._attributes[e][f],h=(g.prefix?g.prefix+":":"")+f;b.push({name:h,value:g.value})}return a.className&&b.push({name:"class",value:a.className}),b.length?d(b):""}(f)+function(a){var b=a.dataset,c=[];for(var e in b)c.push({name:"data-"+e,value:b[e]});return c.length?d(c):""}(f)),c.indexOf(h)>-1?g.push(" />"):(g.push(">"),f.childNodes.length?g.push.apply(g,f.childNodes.map(a)):f.textContent||f.innerText?g.push(e(f.textContent||f.innerText)):f.innerHTML&&g.push(f.innerHTML),g.push("</"+h+">")),g.join("")}};var c=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function d(a){var b=[];return a.forEach(function(a){var c=a.name,d=a.value;"style"===c&&(d=function(a){if("string"==typeof a)return a;var b="";return Object.keys(a).forEach(function(c){var d=a[c];c=c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),b+=c+":"+d+";"}),b}(d)),b.push(c+'="'+e(d).replace(/"/g,"&quot;")+'"')}),b.length?" "+b.join(" "):""}function e(a){var b="";return"string"==typeof a?b=a:a&&(b=a.toString()),b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),E=o(function(a,b){t();var c=x(),d=A(),e=B(),f=C(),g=D(),h="http://www.w3.org/1999/xhtml";function i(a,b,c){if(!s(this,i))return new i(a);var d=void 0===c?h:c||null;this.tagName=d===h?String(a).toUpperCase():a,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=b||null,this.namespaceURI=d,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}b.exports=i,i.prototype.type="DOMElement",i.prototype.nodeType=1,i.prototype.appendChild=function(a){return a.parentNode&&a.parentNode.removeChild(a),this.childNodes.push(a),a.parentNode=this,a},i.prototype.replaceChild=function(a,b){a.parentNode&&a.parentNode.removeChild(a);var c=this.childNodes.indexOf(b);return b.parentNode=null,this.childNodes[c]=a,a.parentNode=this,b},i.prototype.removeChild=function(a){var b=this.childNodes.indexOf(a);return this.childNodes.splice(b,1),a.parentNode=null,a},i.prototype.insertBefore=function(a,b){a.parentNode&&a.parentNode.removeChild(a);var c=null==b?-1:this.childNodes.indexOf(b);return c>-1?this.childNodes.splice(c,0,a):this.childNodes.push(a),a.parentNode=this,a},i.prototype.setAttributeNS=function(a,b,c){var d=null,e=b,f=b.indexOf(":");(f>-1&&(d=b.substr(0,f),e=b.substr(f+1)),"INPUT"===this.tagName&&"type"===b)?this.type=c:(this._attributes[a]||(this._attributes[a]={}))[e]={value:c,prefix:d}},i.prototype.getAttributeNS=function(a,b){var c=this._attributes[a],d=c&&c[b]&&c[b].value;return"INPUT"===this.tagName&&"type"===b?this.type:"string"!=typeof d?null:d},i.prototype.removeAttributeNS=function(a,b){var c=this._attributes[a];c&&delete c[b]},i.prototype.hasAttributeNS=function(a,b){var c=this._attributes[a];return!!c&&b in c},i.prototype.setAttribute=function(a,b){return this.setAttributeNS(null,a,b)},i.prototype.getAttribute=function(a){return this.getAttributeNS(null,a)},i.prototype.removeAttribute=function(a){return this.removeAttributeNS(null,a)},i.prototype.hasAttribute=function(a){return this.hasAttributeNS(null,a)},i.prototype.removeEventListener=f,i.prototype.addEventListener=e,i.prototype.dispatchEvent=d,i.prototype.focus=function(){},i.prototype.toString=function(){return g(this)},i.prototype.getElementsByClassName=function(a){var b=a.split(" "),d=[];return c(this,function(a){if(1===a.nodeType){var c=(a.className||"").split(" ");b.every(function(a){return -1!==c.indexOf(a)})&&d.push(a)}}),d},i.prototype.getElementsByTagName=function(a){a=a.toLowerCase();var b=[];return c(this.childNodes,function(c){1===c.nodeType&&("*"===a||c.tagName.toLowerCase()===a)&&b.push(c)}),b},i.prototype.contains=function(a){return c(this,function(b){return a===b})||!1}}),F=o(function(a,b){t();var c=E();function d(a){if(!s(this,d))return new d;this.childNodes=[],this.parentNode=null,this.ownerDocument=a||null}b.exports=d,d.prototype.type="DocumentFragment",d.prototype.nodeType=11,d.prototype.nodeName="#document-fragment",d.prototype.appendChild=c.prototype.appendChild,d.prototype.replaceChild=c.prototype.replaceChild,d.prototype.removeChild=c.prototype.removeChild,d.prototype.toString=function(){return this.childNodes.map(function(a){return String(a)}).join("")}}),G=o(function(a,b){function c(a){}b.exports=c,c.prototype.initEvent=function(a,b,c){this.type=a,this.bubbles=b,this.cancelable=c},c.prototype.preventDefault=function(){}}),H=o(function(a,b){t();var c=x(),d=y(),e=z(),f=E(),g=F(),h=G(),i=A(),j=B(),k=C();function l(){if(!s(this,l))return new l;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}b.exports=l;var m=l.prototype;m.createTextNode=function(a){return new e(a,this)},m.createElementNS=function(a,b){return new f(b,this,null===a?null:String(a))},m.createElement=function(a){return new f(a,this)},m.createDocumentFragment=function(){return new g(this)},m.createEvent=function(a){return new h(a)},m.createComment=function(a){return new d(a,this)},m.getElementById=function(a){return a=String(a),c(this.childNodes,function(b){if(String(b.id)===a)return b})||null},m.getElementsByClassName=f.prototype.getElementsByClassName,m.getElementsByTagName=f.prototype.getElementsByTagName,m.contains=f.prototype.contains,m.removeEventListener=k,m.addEventListener=j,m.dispatchEvent=i}),I=o(function(a,b){b.exports=new(H())}),J=o(function(a,b){var c,d="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},e=I();"undefined"!=typeof document?c=document:(c=d["__GLOBAL_DOCUMENT_CACHE@4"])||(c=d["__GLOBAL_DOCUMENT_CACHE@4"]=e),b.exports=c});function K(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function L(a,b){if(a){if("string"==typeof a)return K(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return K(a,b)}}function M(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c.return||c.return()}finally{if(h)throw e}}return f}}(a,b)||L(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=q(r()),O=q(r()),P=q(r()),Q={now:function(){var a=P.default.performance,b=a&&a.timing,c=b&&b.navigationStart;return Math.round("number"==typeof c&&"function"==typeof a.now?c+a.now():Date.now())}},R=function(){if("function"==typeof(null==(a=O.default.crypto)?void 0:a.getRandomValues)){c=new Uint8Array(32),O.default.crypto.getRandomValues(c);for(var a,b,c,d=0;d<32;d++)c[d]=c[d]%16}else{c=[];for(var e=0;e<32;e++)c[e]=16*Math.random()|0}var f=0;b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b="x"===a?c[f]:3&c[f]|8;return f++,b.toString(16)});var g=Q.now(),h=null==g?void 0:g.toString(16).substring(3);return h?b.substring(0,28)+h:b},S=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},T=function(a){var b;if(a&&void 0!==a.nodeName)return a.muxId||(a.muxId=S()),a.muxId;try{b=document.querySelector(a)}catch(a){}return b&&!b.muxId&&(b.muxId=a),(null==b?void 0:b.muxId)||a},U=function(a){a&&void 0!==a.nodeName?a=T(b=a):b=document.querySelector(a);var b,c=b&&b.nodeName?b.nodeName.toLowerCase():"";return[b,a,c]};function V(a){return function(a){if(Array.isArray(a))return K(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||L(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},X=function(a){var b,c,d,e,f,g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,h=a?[console,a]:[console],i=(b=console.trace).bind.apply(b,V(h)),j=(c=console.info).bind.apply(c,V(h)),k=(d=console.debug).bind.apply(d,V(h)),l=(e=console.warn).bind.apply(e,V(h)),m=(f=console.error).bind.apply(f,V(h)),n=g;return{trace:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>W.TRACE))return i.apply(void 0,V(b))},debug:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>W.DEBUG))return k.apply(void 0,V(b))},info:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>W.INFO))return j.apply(void 0,V(b))},warn:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>W.WARN))return l.apply(void 0,V(b))},error:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];if(!(n>W.ERROR))return m.apply(void 0,V(b))},get level(){return n},set level(v){v!==this.level&&(n=null!=v?v:g)}}}("[mux]"),Y=q(r());function Z(){return"1"===(Y.default.doNotTrack||Y.default.navigator&&Y.default.navigator.doNotTrack)}function $(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _(a,b){if(!s(a,b))throw TypeError("Cannot call a class as a function")}function aa(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function ab(a,b,c){return b&&aa(a.prototype,b),c&&aa(a,c),a}function ac(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function ad(a){return(ad=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function ae(a,b,c){return(ae="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=function(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&null!==(a=ad(a)););return a}(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c||a):e.value}})(a,b,c||a)}function af(a,b){return(af=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}t(),w();var ag=function(a){return ah(a)[0]},ah=function(a){if("string"!=typeof a||""===a)return["localhost"];var b,c=(a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return c&&(b=(c.match(/[^\.]+\.[^\.]+$/)||[])[0]),[c,b]},ai=q(r()),aj={exists:function(){var a=ai.default.performance;return void 0!==(a&&a.timing)},domContentLoadedEventEnd:function(){var a=ai.default.performance,b=a&&a.timing;return b&&b.domContentLoadedEventEnd},navigationStart:function(){var a=ai.default.performance,b=a&&a.timing;return b&&b.navigationStart}};function ak(a,b,c){c=void 0===c?1:c,a[b]=a[b]||0,a[b]+=c}function al(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){ac(a,b,c[b])})}return a}function am(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}var an=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ao=["x-cdn","content-type"].concat(an);function ap(a){var b={};return(a=a||"").trim().split(/[\r\n]+/).forEach(function(a){if(a){var c=a.split(": "),d=c.shift();d&&(ao.indexOf(d.toLowerCase())>=0||0===d.toLowerCase().indexOf("x-litix-"))&&(b[d]=c.join(": "))}}),b}function aq(a){if(a){var b=an.find(function(b){return void 0!==a[b]});return b?a[b]:void 0}}var ar=function(a){var b={};for(var c in a){var d=a[c];-1!==d["DATA-ID"].search("io.litix.data.")&&(b[d["DATA-ID"].replace("io.litix.data.","")]=d.VALUE)}return b},as=function(a){if(!a)return{};var b=aj.navigationStart(),c=a.loading,d=c?c.start:a.trequest,e=c?c.first:a.tfirst,f=c?c.end:a.tload;return{bytesLoaded:a.total,requestStart:Math.round(b+d),responseStart:Math.round(b+e),responseEnd:Math.round(b+f)}},at=function(a){if(!(!a||"function"!=typeof a.getAllResponseHeaders))return ap(a.getAllResponseHeaders())},au=function(a,b,c){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var d=arguments.length>4?arguments[4]:void 0,e=a.log,f=a.utils.secondsToMs,g=function(a){var b,c=parseInt(d.version);return 1===c&&null!==a.programDateTime&&(b=a.programDateTime),0===c&&null!==a.pdt&&(b=a.pdt),b};if(!aj.exists())return void e.warn("performance timing not supported. Not tracking HLS.js.");var h=function(c,d){return a.emit(b,c,d)},i=function(a,b){var c=b.levels,d=b.audioTracks,e=b.url,f=b.stats,g=b.networkDetails,i=b.sessionData,j={},k={};c.forEach(function(a,b){j[b]={width:a.width,height:a.height,bitrate:a.bitrate,attrs:a.attrs}}),d.forEach(function(a,b){k[b]={name:a.name,language:a.lang,bitrate:a.bitrate}});var l=as(f),m=l.bytesLoaded,n=l.requestStart,o=l.responseStart,p=l.responseEnd;h("requestcompleted",am(al({},ar(i)),{request_event_type:a,request_bytes_loaded:m,request_start:n,request_response_start:o,request_response_end:p,request_type:"manifest",request_hostname:ag(e),request_response_headers:at(g),request_rendition_lists:{media:j,audio:k,video:{}}}))};c.on(d.Events.MANIFEST_LOADED,i);var j=function(a,b){var c=b.details,d=b.level,e=b.networkDetails,i=as(b.stats),j=i.bytesLoaded,k=i.requestStart,l=i.responseStart,m=i.responseEnd,n=c.fragments[c.fragments.length-1],o=g(n)+f(n.duration);h("requestcompleted",{request_event_type:a,request_bytes_loaded:j,request_start:k,request_response_start:l,request_response_end:m,request_current_level:d,request_type:"manifest",request_hostname:ag(c.url),request_response_headers:at(e),video_holdback:c.holdBack&&f(c.holdBack),video_part_holdback:c.partHoldBack&&f(c.partHoldBack),video_part_target_duration:c.partTarget&&f(c.partTarget),video_target_duration:c.targetduration&&f(c.targetduration),video_source_is_live:c.live,player_manifest_newest_program_time:isNaN(o)?void 0:o})};c.on(d.Events.LEVEL_LOADED,j);var k=function(a,b){var c=b.details,d=b.networkDetails,e=as(b.stats);h("requestcompleted",{request_event_type:a,request_bytes_loaded:e.bytesLoaded,request_start:e.requestStart,request_response_start:e.responseStart,request_response_end:e.responseEnd,request_type:"manifest",request_hostname:ag(c.url),request_response_headers:at(d)})};c.on(d.Events.AUDIO_TRACK_LOADED,k);var l=function(a,b){var d=b.stats,e=b.networkDetails,f=b.frag,g=as(d=d||f.stats),i=g.bytesLoaded,j=g.requestStart,k=g.responseStart,l=g.responseEnd,m=e?at(e):void 0,n={request_event_type:a,request_bytes_loaded:i,request_start:j,request_response_start:k,request_response_end:l,request_hostname:e?ag(e.responseURL):void 0,request_id:m?aq(m):void 0,request_response_headers:m,request_media_duration:f.duration,request_url:null==e?void 0:e.responseURL};"main"===f.type?(n.request_type="media",n.request_current_level=f.level,n.request_video_width=(c.levels[f.level]||{}).width,n.request_video_height=(c.levels[f.level]||{}).height,n.request_labeled_bitrate=(c.levels[f.level]||{}).bitrate):n.request_type=f.type,h("requestcompleted",n)};c.on(d.Events.FRAG_LOADED,l);var m=function(a,b){var c=b.frag,d=c.start;h("fragmentchange",{currentFragmentPDT:g(c),currentFragmentStart:f(d)})};c.on(d.Events.FRAG_CHANGED,m);var n=function(a,b){var c,e=b.type,f=b.details,g=b.response,i=b.fatal,j=b.frag,k=b.networkDetails,l=(null==j?void 0:j.url)||b.url||"",m=k?at(k):void 0;(f===d.ErrorDetails.MANIFEST_LOAD_ERROR||f===d.ErrorDetails.MANIFEST_LOAD_TIMEOUT||f===d.ErrorDetails.FRAG_LOAD_ERROR||f===d.ErrorDetails.FRAG_LOAD_TIMEOUT||f===d.ErrorDetails.LEVEL_LOAD_ERROR||f===d.ErrorDetails.LEVEL_LOAD_TIMEOUT||f===d.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||f===d.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||f===d.ErrorDetails.SUBTITLE_LOAD_ERROR||f===d.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||f===d.ErrorDetails.KEY_LOAD_ERROR||f===d.ErrorDetails.KEY_LOAD_TIMEOUT)&&h("requestfailed",{request_error:f,request_url:l,request_hostname:ag(l),request_id:m?aq(m):void 0,request_type:f===d.ErrorDetails.FRAG_LOAD_ERROR||f===d.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":f===d.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||f===d.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":f===d.ErrorDetails.SUBTITLE_LOAD_ERROR||f===d.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":f===d.ErrorDetails.KEY_LOAD_ERROR||f===d.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==g?void 0:g.code,request_error_text:null==g?void 0:g.text}),i&&h("error",{player_error_code:e,player_error_message:f,player_error_context:"".concat(l?"url: ".concat(l,"\n"):"")+"".concat(g&&(g.code||g.text)?"response: ".concat(g.code,", ").concat(g.text,"\n"):"")+"".concat(b.reason?"failure reason: ".concat(b.reason,"\n"):"")+"".concat(b.level?"level: ".concat(b.level,"\n"):"")+"".concat(b.parent?"parent stream controller: ".concat(b.parent,"\n"):"")+"".concat(b.buffer?"buffer length: ".concat(b.buffer,"\n"):"")+"".concat(b.error?"error: ".concat(b.error,"\n"):"")+"".concat(b.event?"event: ".concat(b.event,"\n"):"")+"".concat(b.err?"error message: ".concat(null==(c=b.err)?void 0:c.message,"\n"):"")})};c.on(d.Events.ERROR,n);var o=function(a,b){var c=b.frag,d=c&&c._url||"";h("requestcanceled",{request_event_type:a,request_url:d,request_type:"media",request_hostname:ag(d)})};c.on(d.Events.FRAG_LOAD_EMERGENCY_ABORTED,o);var p=function(a,b){var d=b.level,f=c.levels[d];if(f&&f.attrs&&f.attrs.BANDWIDTH){var g,i=f.attrs.BANDWIDTH,j=parseFloat(f.attrs["FRAME-RATE"]);isNaN(j)||(g=j),i?h("renditionchange",{video_source_fps:g,video_source_bitrate:i,video_source_width:f.width,video_source_height:f.height,video_source_rendition_name:f.name,video_source_codec:null==f?void 0:f.videoCodec}):e.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};c.on(d.Events.LEVEL_SWITCHED,p),c._stopMuxMonitor=function(){c.off(d.Events.MANIFEST_LOADED,i),c.off(d.Events.LEVEL_LOADED,j),c.off(d.Events.AUDIO_TRACK_LOADED,k),c.off(d.Events.FRAG_LOADED,l),c.off(d.Events.FRAG_CHANGED,m),c.off(d.Events.ERROR,n),c.off(d.Events.FRAG_LOAD_EMERGENCY_ABORTED,o),c.off(d.Events.LEVEL_SWITCHED,p),c.off(d.Events.DESTROYING,c._stopMuxMonitor),delete c._stopMuxMonitor},c.on(d.Events.DESTROYING,c._stopMuxMonitor)},av=function(a){a&&"function"==typeof a._stopMuxMonitor&&a._stopMuxMonitor()},aw=function(a,b){if(!a||!a.requestEndDate)return{};var c,d=ag(a.url),e=a.url,f=a.bytesLoaded,g=new Date(a.requestStartDate).getTime(),h=new Date(a.firstByteDate).getTime(),i=new Date(a.requestEndDate).getTime(),j=isNaN(a.duration)?0:a.duration,k="function"==typeof b.getMetricsFor?b.getMetricsFor(a.mediaType).HttpList:b.getDashMetrics().getHttpRequests(a.mediaType);k.length>0&&(c=ap(k[k.length-1]._responseHeaders||""));var l=c?aq(c):void 0;return{requestStart:g,requestResponseStart:h,requestResponseEnd:i,requestBytesLoaded:f,requestResponseHeaders:c,requestMediaDuration:j,requestHostname:d,requestUrl:e,requestId:l}},ax=function(a,b){var c=b.getQualityFor(a),d=b.getCurrentTrackFor(a).bitrateList;return d?{currentLevel:c,renditionWidth:d[c].width||null,renditionHeight:d[c].height||null,renditionBitrate:d[c].bandwidth}:{}},ay=function(a){var b;return null==(b=a.match(/.*codecs\*?="(.*)"/))?void 0:b[1]},az=function(a){try{var b,c;return null==(c=a.getVersion)||null==(b=c.call(a))?void 0:b.split(".").map(function(a){return parseInt(a)})[0]}catch(a){return!1}},aA=function(a,b,c){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var d=a.log;if(!c||!c.on)return void d.warn("Invalid dash.js player reference. Monitoring blocked.");var e=az(c),f=function(c,d){return a.emit(b,c,d)},g=function(a){var b=a.type,c=(a.data||{}).url;f("requestcompleted",{request_event_type:b,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:ag(c),request_url:c})};c.on("manifestLoaded",g);var h={},i=function(a){if("function"!=typeof a.getRequests)return null;var b=a.getRequests({state:"executed"});return 0===b.length?null:b[b.length-1]},j=function(a){var b=a.type,d=a.chunk,e=a.request,g=(d||{}).mediaInfo||{},i=g.type,j=g.bitrateList,k={};(j=j||[]).forEach(function(a,b){k[b]={},k[b].width=a.width,k[b].height=a.height,k[b].bitrate=a.bandwidth,k[b].attrs={}}),"video"===i?h.video=k:"audio"===i?h.audio=k:h.media=k;var l=aw(e,c),m=l.requestStart,n=l.requestResponseStart,o=l.requestResponseEnd,p=l.requestResponseHeaders,q=l.requestMediaDuration,r=l.requestHostname,s=l.requestUrl;f("requestcompleted",{request_event_type:b,request_start:m,request_response_start:n,request_response_end:o,request_bytes_loaded:-1,request_type:i+"_init",request_response_headers:p,request_hostname:r,request_id:l.requestId,request_url:s,request_media_duration:q,request_rendition_lists:h})};e>=4?c.on("initFragmentLoaded",j):c.on("initFragmentLoaded",function(a){var b=a.type,c=a.fragmentModel,d=a.chunk;j({type:b,request:i(c),chunk:d})});var k=function(a){var b=a.type,d=a.chunk,e=a.request,g=d||{},h=g.mediaInfo,i=g.start,j=(h||{}).type,k=aw(e,c),l=k.requestStart,m=k.requestResponseStart,n=k.requestResponseEnd,o=k.requestBytesLoaded,p=k.requestResponseHeaders,q=k.requestMediaDuration,r=k.requestHostname,s=k.requestUrl,t=k.requestId,u=ax(j,c),w=u.currentLevel,x=u.renditionWidth,y=u.renditionHeight;f("requestcompleted",{request_event_type:b,request_start:l,request_response_start:m,request_response_end:n,request_bytes_loaded:o,request_type:j,request_response_headers:p,request_hostname:r,request_id:t,request_url:s,request_media_start_time:i,request_media_duration:q,request_current_level:w,request_labeled_bitrate:u.renditionBitrate,request_video_width:x,request_video_height:y})};e>=4?c.on("mediaFragmentLoaded",k):c.on("mediaFragmentLoaded",function(a){var b=a.type,c=a.fragmentModel,d=a.chunk;k({type:b,request:i(c),chunk:d})});var l={video:void 0,audio:void 0,totalBitrate:void 0},m=function(){if(l.video&&"number"==typeof l.video.bitrate){if(!(l.video.width&&l.video.height))return void d.warn("have bitrate info for video but missing width/height");var a=l.video.bitrate;if(l.audio&&"number"==typeof l.audio.bitrate&&(a+=l.audio.bitrate),a!==l.totalBitrate)return l.totalBitrate=a,{video_source_bitrate:a,video_source_height:l.video.height,video_source_width:l.video.width,video_source_codec:ay(l.video.codec)}}},n=function(a,b,e){if("number"!=typeof a.newQuality)return void d.warn("missing evt.newQuality in qualityChangeRendered event",a);var g=a.mediaType;if("audio"===g||"video"===g){var h=c.getBitrateInfoListFor(g).find(function(b){return b.qualityIndex===a.newQuality});if(!(h&&"number"==typeof h.bitrate))return void d.warn("missing bitrate info for ".concat(g));l[g]=am(al({},h),{codec:c.getCurrentTrackFor(g).codec});var i=m();i&&f("renditionchange",i)}};c.on("qualityChangeRendered",n);var o=function(a){var b=a.request,c=a.mediaType;f("requestcanceled",{request_event_type:(b=b||{}).type+"_"+b.action,request_url:b.url,request_type:c,request_hostname:ag(b.url)})};c.on("fragmentLoadingAbandoned",o);var p=function(a){var b,c,d=a.error,e=(null==d||null==(b=d.data)?void 0:b.request)||{},g=(null==d||null==(c=d.data)?void 0:c.response)||{};(null==d?void 0:d.code)===27&&f("requestfailed",{request_error:e.type+"_"+e.action,request_url:e.url,request_hostname:ag(e.url),request_type:e.mediaType,request_error_code:g.status,request_error_text:g.statusText});var h="".concat(null!=e&&e.url?"url: ".concat(e.url,"\n"):"")+"".concat(null!=g&&g.status||null!=g&&g.statusText?"response: ".concat(null==g?void 0:g.status,", ").concat(null==g?void 0:g.statusText,"\n"):"");f("error",{player_error_code:null==d?void 0:d.code,player_error_message:null==d?void 0:d.message,player_error_context:h})};c.on("error",p),c._stopMuxMonitor=function(){c.off("manifestLoaded",g),c.off("initFragmentLoaded",j),c.off("mediaFragmentLoaded",k),c.off("qualityChangeRendered",n),c.off("error",p),c.off("fragmentLoadingAbandoned",o),delete c._stopMuxMonitor}},aB=function(a){a&&"function"==typeof a._stopMuxMonitor&&a._stopMuxMonitor()},aC=0,aD=function(){function a(){_(this,a),ac(this,"_listeners",void 0)}return ab(a,[{key:"on",value:function(a,b,c){return b._eventEmitterGuid=b._eventEmitterGuid||++aC,this._listeners=this._listeners||{},this._listeners[a]=this._listeners[a]||[],c&&(b=b.bind(c)),this._listeners[a].push(b),b}},{key:"off",value:function(a,b){var c=this._listeners&&this._listeners[a];c&&c.forEach(function(a,d){a._eventEmitterGuid===b._eventEmitterGuid&&c.splice(d,1)})}},{key:"one",value:function(a,b,c){var d=this;b._eventEmitterGuid=b._eventEmitterGuid||++aC;var e=function(){d.off(a,e),b.apply(c||this,arguments)};e._eventEmitterGuid=b._eventEmitterGuid,this.on(a,e)}},{key:"emit",value:function(a,b){var c=this;if(this._listeners){b=b||{};var d=this._listeners["before*"]||[],e=this._listeners[a]||[],f=this._listeners["after"+a]||[],g=function(b,d){(b=b.slice()).forEach(function(b){b.call(c,{type:a},d)})};g(d,b),g(e,b),g(f,b)}}}]),a}(),aE=q(r()),aF=function(){function a(b){var c=this;_(this,a),ac(this,"_playbackHeartbeatInterval",void 0),ac(this,"_playheadShouldBeProgressing",void 0),ac(this,"pm",void 0),this.pm=b,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,b.on("playing",function(){c._playheadShouldBeProgressing=!0}),b.on("play",this._startPlaybackHeartbeatInterval.bind(this)),b.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),b.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),b.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),b.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),b.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),b.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),b.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),b.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),b.on("seeked",function(){b.data.player_is_paused?c._stopPlaybackHeartbeatInterval():c._startPlaybackHeartbeatInterval()}),b.on("timeupdate",function(){null!==c._playbackHeartbeatInterval&&b.emit("playbackheartbeat")}),b.on("devicesleep",function(a,d){null!==c._playbackHeartbeatInterval&&(aE.default.clearInterval(c._playbackHeartbeatInterval),b.emit("playbackheartbeatend",{viewer_time:d.viewer_time}),c._playbackHeartbeatInterval=null)})}return ab(a,[{key:"_startPlaybackHeartbeatInterval",value:function(){var a=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=aE.default.setInterval(function(){a.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(aE.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),a}(),aG=function a(b){var c=this;_(this,a),ac(this,"viewErrored",void 0),b.on("viewinit",function(){c.viewErrored=!1}),b.on("error",function(a,d){try{var e=b.errorTranslator({player_error_code:d.player_error_code,player_error_message:d.player_error_message,player_error_context:d.player_error_context,player_error_severity:d.player_error_severity,player_error_business_exception:d.player_error_business_exception});e&&(b.data.player_error_code=e.player_error_code||d.player_error_code,b.data.player_error_message=e.player_error_message||d.player_error_message,b.data.player_error_context=e.player_error_context||d.player_error_context,b.data.player_error_severity=e.player_error_severity||d.player_error_severity,b.data.player_error_business_exception=e.player_error_business_exception||d.player_error_business_exception,c.viewErrored=!0)}catch(a){b.mux.log.warn("Exception in error translator callback.",a),c.viewErrored=!0}}),b.on("aftererror",function(){var a,c,d,e,f;null==(a=b.data)||delete a.player_error_code,null==(c=b.data)||delete c.player_error_message,null==(d=b.data)||delete d.player_error_context,null==(e=b.data)||delete e.player_error_severity,null==(f=b.data)||delete f.player_error_business_exception})},aH=function(){function a(b){_(this,a),ac(this,"_watchTimeTrackerLastCheckedTime",void 0),ac(this,"pm",void 0),this.pm=b,this._watchTimeTrackerLastCheckedTime=null,b.on("playbackheartbeat",this._updateWatchTime.bind(this)),b.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return ab(a,[{key:"_updateWatchTime",value:function(a,b){var c=b.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=c),ak(this.pm.data,"view_watch_time",c-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=c}},{key:"_clearWatchTimeState",value:function(a,b){this._updateWatchTime(a,b),this._watchTimeTrackerLastCheckedTime=null}}]),a}(),aI=function(){function a(b){var c=this;_(this,a),ac(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),ac(this,"_lastTime",void 0),ac(this,"_isAdPlaying",void 0),ac(this,"_callbackUpdatePlaybackTime",void 0),ac(this,"pm",void 0),this.pm=b,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Q.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var d=this._startPlaybackTimeTracking.bind(this);b.on("playing",d),b.on("adplaying",d),b.on("seeked",d);var e=this._stopPlaybackTimeTracking.bind(this);b.on("playbackheartbeatend",e),b.on("seeking",e),b.on("adplaying",function(){c._isAdPlaying=!0}),b.on("adended",function(){c._isAdPlaying=!1}),b.on("adpause",function(){c._isAdPlaying=!1}),b.on("adbreakstart",function(){c._isAdPlaying=!1}),b.on("adbreakend",function(){c._isAdPlaying=!1}),b.on("adplay",function(){c._isAdPlaying=!1}),b.on("viewinit",function(){c._playbackTimeTrackerLastPlayheadPosition=-1,c._lastTime=Q.now(),c._isAdPlaying=!1,c._callbackUpdatePlaybackTime=null})}return ab(a,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var a=this.pm.data.player_playhead_time,b=Q.now(),c=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&a>this._playbackTimeTrackerLastPlayheadPosition?c=a-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(c=b-this._lastTime),c>0&&c<=1e3&&ak(this.pm.data,"view_content_playback_time",c),this._playbackTimeTrackerLastPlayheadPosition=a,this._lastTime=b}}]),a}(),aJ=function(){function a(b){_(this,a),ac(this,"pm",void 0),this.pm=b;var c=this._updatePlayheadTime.bind(this);b.on("playbackheartbeat",c),b.on("playbackheartbeatend",c),b.on("timeupdate",c),b.on("destroy",function(){b.off("timeupdate",c)})}return ab(a,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(a,b){var c=this,d=function(){c.pm.currentFragmentPDT&&c.pm.currentFragmentStart&&(c.pm.data.player_program_time=c.pm.currentFragmentPDT+c.pm.data.player_playhead_time-c.pm.currentFragmentStart)};if(b&&b.player_playhead_time)this.pm.data.player_playhead_time=b.player_playhead_time,d(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var e=this.pm.getPlayheadTime();void 0!==e&&(this.pm.data.player_playhead_time=e,d(),this._updateMaxPlayheadPosition())}}}]),a}(),aK=function a(b){if(_(this,a),!b.disableRebufferTracking){var c,d=function(a,b){e(b),c=void 0},e=function(a){if(c){var d=a.viewer_time-c;ak(b.data,"view_rebuffer_duration",d),c=a.viewer_time,b.data.view_rebuffer_duration>3e5&&(b.emit("viewend"),b.send("viewend"),b.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}b.data.view_watch_time>=0&&b.data.view_rebuffer_count>0&&(b.data.view_rebuffer_frequency=b.data.view_rebuffer_count/b.data.view_watch_time,b.data.view_rebuffer_percentage=b.data.view_rebuffer_duration/b.data.view_watch_time)};b.on("playbackheartbeat",function(a,b){return e(b)}),b.on("rebufferstart",function(a,e){c||(ak(b.data,"view_rebuffer_count",1),c=e.viewer_time,b.one("rebufferend",d))}),b.on("viewinit",function(){c=void 0,b.off("rebufferend",d)})}},aL=function(){function a(b){var c=this;_(this,a),ac(this,"_lastCheckedTime",void 0),ac(this,"_lastPlayheadTime",void 0),ac(this,"_lastPlayheadTimeUpdatedTime",void 0),ac(this,"_rebuffering",void 0),ac(this,"pm",void 0),this.pm=b,b.disableRebufferTracking||b.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,b.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),b.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),b.on("seeking",function(){c._cleanupRebufferTracker(null,{viewer_time:Q.now()})}))}return ab(a,[{key:"_checkIfRebuffering",value:function(a,b){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(a,b);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(b.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(a,b,!0);var c=b.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&c>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=b.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(a){this._lastCheckedTime=a,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=a}},{key:"_cleanupRebufferTracker",value:function(a,b){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:b.viewer_time});else{if(null===this._lastCheckedTime)return;var d=this.pm.data.player_playhead_time-this._lastPlayheadTime,e=b.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&d>0&&e-d>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+e-d}))}c?this._prepareRebufferTrackerState(b.viewer_time):this._clearRebufferTrackerState()}}]),a}(),aM=function(){function a(b){var c=this;_(this,a),ac(this,"NAVIGATION_START",void 0),ac(this,"pm",void 0),this.pm=b,b.on("viewinit",function(){var a=b.data,d=a.view_id;if(!a.view_program_changed){var e=function(a,e){var f=e.viewer_time;"playing"===a.type&&void 0===b.data.view_time_to_first_frame?c.calculateTimeToFirstFrame(f||Q.now(),d):"adplaying"===a.type&&(void 0===b.data.view_time_to_first_frame||c._inPrerollPosition())&&c.calculateTimeToFirstFrame(f||Q.now(),d)};b.one("playing",e),b.one("adplaying",e),b.one("viewend",function(){b.off("playing",e),b.off("adplaying",e)})}})}return ab(a,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(a,b){b===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:a}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),a}(),aN=function a(b){var c=this;_(this,a),ac(this,"_lastPlayerHeight",void 0),ac(this,"_lastPlayerWidth",void 0),ac(this,"_lastPlayheadPosition",void 0),ac(this,"_lastSourceHeight",void 0),ac(this,"_lastSourceWidth",void 0),b.on("viewinit",function(){c._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"].forEach(function(a){b.on(a,function(){if(c._lastPlayheadPosition>=0&&b.data.player_playhead_time>=0&&c._lastPlayerWidth>=0&&c._lastSourceWidth>0&&c._lastPlayerHeight>=0&&c._lastSourceHeight>0){var a=b.data.player_playhead_time-c._lastPlayheadPosition;if(a<0){c._lastPlayheadPosition=-1;return}var d=Math.min(c._lastPlayerWidth/c._lastSourceWidth,c._lastPlayerHeight/c._lastSourceHeight),e=Math.max(0,d-1),f=Math.max(0,1-d);b.data.view_max_upscale_percentage=Math.max(b.data.view_max_upscale_percentage||0,e),b.data.view_max_downscale_percentage=Math.max(b.data.view_max_downscale_percentage||0,f),ak(b.data,"view_total_content_playback_time",a),ak(b.data,"view_total_upscaling",e*a),ak(b.data,"view_total_downscaling",f*a)}c._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange"].forEach(function(a){b.on(a,function(){c._lastPlayheadPosition=b.data.player_playhead_time,c._lastPlayerWidth=b.data.player_width,c._lastPlayerHeight=b.data.player_height,c._lastSourceWidth=b.data.video_source_width,c._lastSourceHeight=b.data.video_source_height})})},aO=function a(b){var c=this;_(this,a),ac(this,"isSeeking",void 0),this.isSeeking=!1;var d=-1,e=function(){var a=Q.now(),e=(b.data.viewer_time||a)-(d||a);ak(b.data,"view_seek_duration",e),b.data.view_max_seek_time=Math.max(b.data.view_max_seek_time||0,e),c.isSeeking=!1,d=-1};b.on("seeking",function(a,f){if(Object.assign(b.data,f),c.isSeeking&&f.viewer_time-d<=2e3){d=f.viewer_time;return}c.isSeeking&&e(),c.isSeeking=!0,d=f.viewer_time,ak(b.data,"view_seek_count",1),b.send("seeking")}),b.on("seeked",function(){e()}),b.on("viewend",function(){c.isSeeking&&(e(),b.send("seeked")),c.isSeeking=!1,d=-1})},aP=function(a,b){a.push(b),a.sort(function(a,b){return a.viewer_time-b.viewer_time})},aQ=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],aR=function(){function a(b){var c=this;_(this,a),ac(this,"_adHasPlayed",void 0),ac(this,"_adRequests",void 0),ac(this,"_adResponses",void 0),ac(this,"_currentAdRequestNumber",void 0),ac(this,"_currentAdResponseNumber",void 0),ac(this,"_prerollPlayTime",void 0),ac(this,"_wouldBeNewAdPlay",void 0),ac(this,"isAdBreak",void 0),ac(this,"pm",void 0),this.pm=b,b.on("viewinit",function(){c.isAdBreak=!1,c._currentAdRequestNumber=0,c._currentAdResponseNumber=0,c._adRequests=[],c._adResponses=[],c._adHasPlayed=!1,c._wouldBeNewAdPlay=!0,c._prerollPlayTime=void 0}),aQ.forEach(function(a){return b.on(a,c._updateAdData.bind(c))});var d=function(){c.isAdBreak=!1};b.on("adbreakstart",function(){c.isAdBreak=!0}),b.on("play",d),b.on("playing",d),b.on("viewend",d),b.on("adrequest",function(a,d){d=Object.assign({ad_request_id:"generatedAdRequestId"+c._currentAdRequestNumber++},d),aP(c._adRequests,d),ak(b.data,"view_ad_request_count"),c.inPrerollPosition()&&(b.data.view_preroll_requested=!0,c._adHasPlayed||ak(b.data,"view_preroll_request_count"))}),b.on("adresponse",function(a,d){d=Object.assign({ad_request_id:"generatedAdRequestId"+c._currentAdResponseNumber++},d),aP(c._adResponses,d);var e=c.findAdRequest(d.ad_request_id);e&&ak(b.data,"view_ad_request_time",Math.max(0,d.viewer_time-e.viewer_time))}),b.on("adplay",function(a,d){c._adHasPlayed=!0,c._wouldBeNewAdPlay&&(c._wouldBeNewAdPlay=!1,ak(b.data,"view_ad_played_count")),c.inPrerollPosition()&&!b.data.view_preroll_played&&(b.data.view_preroll_played=!0,c._adRequests.length>0&&(b.data.view_preroll_request_time=Math.max(0,d.viewer_time-c._adRequests[0].viewer_time)),b.data.view_start&&(b.data.view_startup_preroll_request_time=Math.max(0,d.viewer_time-b.data.view_start)),c._prerollPlayTime=d.viewer_time)}),b.on("adplaying",function(a,d){c.inPrerollPosition()&&void 0===b.data.view_preroll_load_time&&void 0!==c._prerollPlayTime&&(b.data.view_preroll_load_time=d.viewer_time-c._prerollPlayTime,b.data.view_startup_preroll_load_time=d.viewer_time-c._prerollPlayTime)}),b.on("adclicked",function(a,d){c._wouldBeNewAdPlay||ak(b.data,"view_ad_clicked_count")}),b.on("adskipped",function(a,d){c._wouldBeNewAdPlay||ak(b.data,"view_ad_skipped_count")}),b.on("adended",function(){c._wouldBeNewAdPlay=!0}),b.on("aderror",function(){c._wouldBeNewAdPlay=!0})}return ab(a,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(a){for(var b=0;b<this._adRequests.length;b++)if(this._adRequests[b].ad_request_id===a)return this._adRequests[b]}},{key:"_updateAdData",value:function(a,b){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&b.ad_tag_url){var c=M(ah(b.ad_tag_url),2),d=c[0],e=c[1];this.pm.data.view_preroll_ad_tag_domain=e,this.pm.data.view_preroll_ad_tag_hostname=d}if(!this.pm.data.view_preroll_ad_asset_hostname&&b.ad_asset_url){var f=M(ah(b.ad_asset_url),2),g=f[0],h=f[1];this.pm.data.view_preroll_ad_asset_domain=h,this.pm.data.view_preroll_ad_asset_hostname=g}}this.pm.data.ad_asset_url=null==b?void 0:b.ad_asset_url,this.pm.data.ad_tag_url=null==b?void 0:b.ad_tag_url,this.pm.data.ad_creative_id=null==b?void 0:b.ad_creative_id,this.pm.data.ad_id=null==b?void 0:b.ad_id,this.pm.data.ad_universal_id=null==b?void 0:b.ad_universal_id}}]),a}(),aS=q(r()),aT=function a(b){_(this,a);var c,d,e=function(){b.disableRebufferTracking||(ak(b.data,"view_waiting_rebuffer_count",1),c=Q.now(),d=aS.default.setInterval(function(){if(c){var a=Q.now();ak(b.data,"view_waiting_rebuffer_duration",a-c),c=a}},250))},f=function(){b.disableRebufferTracking||c&&(ak(b.data,"view_waiting_rebuffer_duration",Q.now()-c),c=!1,aS.default.clearInterval(d))},g=!1,h=function(){g=!0},i=function(){g=!1,f()};b.on("waiting",function(){g&&e()}),b.on("playing",function(){f(),h()}),b.on("pause",i),b.on("seeking",i)},aU=function a(b){var c=this;_(this,a),ac(this,"lastWallClockTime",void 0);var d=function(){c.lastWallClockTime=Q.now(),b.on("before*",e)},e=function(a){var d=Q.now(),e=c.lastWallClockTime;c.lastWallClockTime=d,d-e>3e4&&(b.emit("devicesleep",{viewer_time:e}),Object.assign(b.data,{viewer_time:e}),b.send("devicesleep"),b.emit("devicewake",{viewer_time:d}),Object.assign(b.data,{viewer_time:d}),b.send("devicewake"))};b.one("playbackheartbeat",d),b.on("playbackheartbeatend",function(){b.off("before*",e),b.one("playbackheartbeat",d)})},aV=q(r()),aW=function(){var a=function(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b};return function b(c){function d(b,e,f){var g;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(f=a({path:"/"},d.defaults,f)).expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(a){}return e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=(b=(b=encodeURIComponent(String(b))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=b+"="+e+(f.expires?"; expires="+f.expires.toUTCString():"")+(f.path?"; path="+f.path:"")+(f.domain?"; domain="+f.domain:"")+(f.secure?"; secure":"")}b||(g={});for(var i=document.cookie?document.cookie.split("; "):[],j=/(%[0-9A-Z]{2})+/g,k=0;k<i.length;k++){var l=i[k].split("="),m=l.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{var n=l[0].replace(j,decodeURIComponent);if(m=c.read?c.read(m,n):c(m,n)||m.replace(j,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(b===n){g=m;break}b||(g[n]=m)}catch(a){}}return g}}return d.set=d,d.get=function(a){return d.call(d,a)},d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}(function(){})}(),aX="muxData",aY=function(){var a;try{a=(aW.get(aX)||"").split("&").reduce(function(a,b){var c=M(b.split("="),2),d=c[0],e=c[1],f=+e;return a[d]=e&&f==e?f:e,a},{})}catch(b){a={}}return a},aZ=function(a){try{aW.set(aX,Object.entries(a).map(function(a){var b=M(a,2),c=b[0],d=b[1];return"".concat(c,"=").concat(d)}).join("&"),{expires:365})}catch(a){}},a$=function(){var a=aY();return a.mux_viewer_id=a.mux_viewer_id||R(),a.msn=a.msn||Math.random(),aZ(a),{mux_viewer_id:a.mux_viewer_id,mux_sample_number:a.msn}},a_=function(){var a=aY(),b=Q.now();return a.session_start&&(a.sst=a.session_start,delete a.session_start),a.session_id&&(a.sid=a.session_id,delete a.session_id),a.session_expires&&(a.sex=a.session_expires,delete a.session_expires),(!a.sex||a.sex<b)&&(a.sid=R(),a.sst=b),a.sex=b+15e5,aZ(a),{session_id:a.sid,session_start:a.sst,session_expires:a.sex}},a0=q(r()),a1=function(){var a;switch(a2()){case"cellular":a="cellular";break;case"ethernet":a="wired";break;case"wifi":a="wifi";break;case void 0:break;default:a="other"}return a},a2=function(){var a=a0.default.navigator,b=a&&(a.connection||a.mozConnection||a.webkitConnection);return b&&b.type};a1.getConnectionFromAPI=a2;var a3=a5({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),a4=a5({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function a5(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}function a6(a){var b={},c={};return Object.keys(a).forEach(function(d){var e=!1;if(a.hasOwnProperty(d)&&void 0!==a[d]){var f=d.split("_"),g=f[0],h=a3[g];h||(X.info("Data key word `"+f[0]+"` not expected in "+d),h=g+"_"),f.splice(1).forEach(function(a){"url"===a&&(e=!0),a4[a]?h+=a4[a]:Number.isInteger(Number(a))?h+=a:(X.info("Data key word `"+a+"` not expected in "+d),h+="_"+a+"_")}),e?c[h]=a[d]:b[h]=a[d]}}),Object.assign(b,c)}var a7=q(r()),a8=q(J()),a9={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},ba=["hb","requestcompleted","requestfailed","requestcanceled"],bb=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=a||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},a9,b)};bb.prototype.queueEvent=function(a,b){var c=Object.assign({},b);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===a)&&(this._eventQueue.push(c),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},bb.prototype.flushEvents=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a&&1===this._eventQueue.length)return void this._eventQueue.pop();this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},bb.prototype.destroy=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,a?this._clearBeaconQueue():this.flushEvents(),a7.default.clearTimeout(this._sendTimeout)},bb.prototype._clearBeaconQueue=function(){var a=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,b=this._eventQueue.slice(a);a>0&&Object.assign(b[b.length-1],a6({mux_view_message:"event queue truncated"}));var c=this._createPayload(b);be(this._beaconUrl,c,!0,function(){})},bb.prototype._sendBeaconQueue=function(){var a=this;if(this._postInFlight){this._resendAfterPost=!0;return}var b=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var c=this._createPayload(b),d=Q.now();be(this._beaconUrl,c,!1,function(c,e){e?(a._eventQueue=b.concat(a._eventQueue),a._failureCount+=1,X.info("Error sending beacon: "+e)):a._failureCount=0,a._roundTripTime=Q.now()-d,a._postInFlight=!1,a._resendAfterPost&&(a._resendAfterPost=!1,a._eventQueue.length>0&&a._sendBeaconQueue())})},bb.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var a=Math.pow(2,this._failureCount-1);return(1+(a*=Math.random()))*this._options.baseTimeBetweenBeacons},bb.prototype._startBeaconSending=function(){var a=this;a7.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=a7.default.setTimeout(function(){a._eventQueue.length&&a._sendBeaconQueue(),a._startBeaconSending()},this._getNextBeaconTime()))},bb.prototype._createPayload=function(a){var b=this,c={transmission_timestamp:Math.round(Q.now())};this._roundTripTime&&(c.rtt_ms=Math.round(this._roundTripTime));var d,e,f,g=function(){f=(d=JSON.stringify({metadata:c,events:e||a})).length/1024},h=function(){return f<=b._options.maxPayloadKBSize};return g(),h()||(X.info("Payload size is too big ("+f+" kb). Removing unnecessary events."),e=a.filter(function(a){return -1===ba.indexOf(a.e)}),g()),h()||(X.info("Payload size still too big ("+f+" kb). Cropping fields.."),e.forEach(function(a){for(var b in a){var c=a[b];"string"==typeof c&&c.length>51200&&(a[b]=c.substring(0,51200))}}),g()),d};var bc,bd="function"==typeof a8.default.exitPictureInPicture?function(a){return a.length<=57344}:function(a){return!1},be=function(a,b,c,d){if(c&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(a,b))return void d();if(a7.default.fetch)return void a7.default.fetch(a,{method:"POST",body:b,headers:{"Content-Type":"text/plain"},keepalive:bd(b)}).then(function(a){return d(null,a.ok?null:"Error")}).catch(function(a){return d(null,a)});if(a7.default.XMLHttpRequest){var e=new a7.default.XMLHttpRequest;e.onreadystatechange=function(){if(4===e.readyState)return d(null,200!==e.status?"error":void 0)},e.open("POST",a),e.setRequestHeader("Content-Type","text/plain"),e.send(b);return}d()},bf=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],bg=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],bh=["ad_id","ad_creative_id","ad_universal_id"],bi=["viewstart","error","ended","viewend"],bj=function(){function a(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,w,x=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};_(this,a),ac(this,"mux",void 0),ac(this,"envKey",void 0),ac(this,"options",void 0),ac(this,"eventQueue",void 0),ac(this,"sampleRate",void 0),ac(this,"disableCookies",void 0),ac(this,"respectDoNotTrack",void 0),ac(this,"previousBeaconData",void 0),ac(this,"lastEventTime",void 0),ac(this,"rateLimited",void 0),ac(this,"pageLevelData",void 0),ac(this,"viewerData",void 0),this.mux=b,this.envKey=c,this.options=x,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new bb((d=this.envKey,f=(e=this.options).beaconCollectionDomain,g=e.beaconDomain,f?"https://"+f:(d=d||"inferred").match(/^[a-z0-9]+$/)?"https://"+d+"."+(g||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(t=this.options.sampleRate)?t:1,this.disableCookies=null!=(u=this.options.disableCookies)&&u,this.respectDoNotTrack=null!=(w=this.options.respectDoNotTrack)&&w,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(h=this.options.platform)?void 0:h.name,viewer_application_version:null==(i=this.options.platform)?void 0:i.version,viewer_application_engine:null==(j=this.options.platform)?void 0:j.layout,viewer_device_name:null==(k=this.options.platform)?void 0:k.product,viewer_device_category:"",viewer_device_manufacturer:null==(l=this.options.platform)?void 0:l.manufacturer,viewer_os_family:null==(n=this.options.platform)||null==(m=n.os)?void 0:m.family,viewer_os_architecture:null==(p=this.options.platform)||null==(o=p.os)?void 0:o.architecture,viewer_os_version:null==(r=this.options.platform)||null==(q=r.os)?void 0:q.version,viewer_connection_type:a1(),page_url:null===aV.default||void 0===aV.default||null==(s=aV.default.location)?void 0:s.href},this.viewerData=this.disableCookies?{}:a$()}return ab(a,[{key:"send",value:function(a,b){if(!(!a||!(null!=b&&b.view_id))){if(this.respectDoNotTrack&&Z())return X.info("Not sending `"+a+"` because Do Not Track is enabled");if(!b||"object"!=typeof b)return X.error("A data object was expected in send() but was not provided");var c=this.disableCookies?{}:a_(),d=am(al({},this.pageLevelData,b,c,this.viewerData),{event:a,env_key:this.envKey});d.user_id&&(d.viewer_user_id=d.user_id,delete d.user_id);var e,f=(null!=(e=d.mux_sample_number)?e:0)>=this.sampleRate,g=a6(this._deduplicateBeaconData(a,d));if(this.lastEventTime=this.mux.utils.now(),f)return X.info("Not sending event due to sample rate restriction",a,d,g);if(this.envKey||X.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",a,d,g),!this.rateLimited){if(X.info("Sending event",a,d,g),this.rateLimited=!this.eventQueue.queueEvent(a,g),this.mux.WINDOW_UNLOADING&&"viewend"===a)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===a?this.eventQueue.flushEvents(!0):bi.indexOf(a)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return d.event="eventrateexceeded",g=a6(d),this.eventQueue.queueEvent(d.event,g),X.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(a,b){var c=this,d={},e=b.view_id;if("-1"===e||"viewstart"===a||"viewend"===a||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)d=al({},b),e&&(this.previousBeaconData=d),e&&"viewend"===a&&(this.previousBeaconData=null);else{var f=0===a.indexOf("request");Object.entries(b).forEach(function(b){var e=M(b,2),g=e[0],h=e[1];c.previousBeaconData&&(h!==c.previousBeaconData[g]||bf.indexOf(g)>-1||c.objectHasChanged(f,g,h,c.previousBeaconData[g])||c.eventRequiresKey(a,g))&&(d[g]=h,c.previousBeaconData[g]=h)})}return d}},{key:"objectHasChanged",value:function(a,b,c,d){return!!a&&0===b.indexOf("request_")&&("request_response_headers"===b||"object"!=typeof c||"object"!=typeof d||Object.keys(c||{}).length!==Object.keys(d||{}).length)}},{key:"eventRequiresKey",value:function(a,b){return!!("renditionchange"===a&&0===b.indexOf("video_source_")||bh.includes(b)&&bg.includes(a))}}]),a}(),bk=function a(b){_(this,a);var c=0,d=0,e=0,f=0,g=0,h=0,i=0;b.on("requestcompleted",function(a,h){var i,j,k=h.request_start,l=h.request_response_start,m=h.request_response_end,n=h.request_bytes_loaded;if(f++,l?(i=l-(null!=k?k:0),j=(null!=m?m:0)-l):j=(null!=m?m:0)-(null!=k?k:0),j>0&&n&&n>0){var o=n/j*8e3;g++,d+=n,e+=j,b.data.view_min_request_throughput=Math.min(b.data.view_min_request_throughput||1/0,o),b.data.view_average_request_throughput=d/e*8e3,b.data.view_request_count=f,i>0&&(c+=i,b.data.view_max_request_latency=Math.max(b.data.view_max_request_latency||0,i),b.data.view_average_request_latency=c/g)}}),b.on("requestfailed",function(a,c){f++,h++,b.data.view_request_count=f,b.data.view_request_failed_count=h}),b.on("requestcanceled",function(a,c){f++,i++,b.data.view_request_count=f,b.data.view_request_canceled_count=i})},bl=function a(b){var c=this;_(this,a),ac(this,"_lastEventTime",void 0),b.on("before*",function(a,d){var e=d.viewer_time,f=Q.now(),g=c._lastEventTime;if(c._lastEventTime=f,g&&f-g>36e5){var h=Object.keys(b.data).reduce(function(a,c){return 0===c.indexOf("video_")?Object.assign(a,ac({},c,b.data[c])):a},{});b.mux.log.info("Received event after at least an hour inactivity, creating a new view");var i=b.playbackHeartbeat._playheadShouldBeProgressing;b._resetView(Object.assign({viewer_time:e},h)),b.playbackHeartbeat._playheadShouldBeProgressing=i,b.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==a.type&&"adbreakstart"!==a.type&&(b.emit("play",{viewer_time:e}),"playing"!==a.type&&b.emit("playing",{viewer_time:e}))}})},bm=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],bn=new Set(["requestcompleted","requestfailed","requestcanceled"]),bo=function(a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");d.prototype=Object.create(a&&a.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),a&&af(d,a);var b,c=(b=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,c=ad(d);return a=b?Reflect.construct(c,arguments,ad(this).constructor):c.apply(this,arguments),a&&("object"===u(a)||"function"==typeof a)?a:$(this)});function d(a,b,e){_(this,d),ac($(f=c.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),ac($(f),"NAVIGATION_START",void 0),ac($(f),"_destroyed",void 0),ac($(f),"_heartBeatTimeout",void 0),ac($(f),"adTracker",void 0),ac($(f),"dashjs",void 0),ac($(f),"data",void 0),ac($(f),"disablePlayheadRebufferTracking",void 0),ac($(f),"disableRebufferTracking",void 0),ac($(f),"errorTracker",void 0),ac($(f),"errorTranslator",void 0),ac($(f),"emitTranslator",void 0),ac($(f),"getAdData",void 0),ac($(f),"getPlayheadTime",void 0),ac($(f),"getStateData",void 0),ac($(f),"stateDataTranslator",void 0),ac($(f),"hlsjs",void 0),ac($(f),"id",void 0),ac($(f),"longResumeTracker",void 0),ac($(f),"minimumRebufferDuration",void 0),ac($(f),"mux",void 0),ac($(f),"playbackEventDispatcher",void 0),ac($(f),"playbackHeartbeat",void 0),ac($(f),"playbackHeartbeatTime",void 0),ac($(f),"playheadTime",void 0),ac($(f),"seekingTracker",void 0),ac($(f),"sustainedRebufferThreshold",void 0),ac($(f),"watchTimeTracker",void 0),ac($(f),"currentFragmentPDT",void 0),ac($(f),"currentFragmentStart",void 0),f.DOM_CONTENT_LOADED_EVENT_END=aj.domContentLoadedEventEnd(),f.NAVIGATION_START=aj.navigationStart(),f.mux=a,f.id=b,null!=e&&e.beaconDomain&&f.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(e=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(a){return a},emitTranslator:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return b},stateDataTranslator:function(a){return a}},e)).data=e.data||{},e.data.property_key&&(e.data.env_key=e.data.property_key,delete e.data.property_key),X.level=e.debug?W.DEBUG:W.WARN,f.getPlayheadTime=e.getPlayheadTime,f.getStateData=e.getStateData||function(){return{}},f.getAdData=e.getAdData||function(){},f.minimumRebufferDuration=e.minimumRebufferDuration,f.sustainedRebufferThreshold=e.sustainedRebufferThreshold,f.playbackHeartbeatTime=e.playbackHeartbeatTime,f.disableRebufferTracking=e.disableRebufferTracking,f.disableRebufferTracking&&f.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),f.disablePlayheadRebufferTracking=e.disablePlayheadRebufferTracking,f.errorTranslator=e.errorTranslator,f.emitTranslator=e.emitTranslator,f.stateDataTranslator=e.stateDataTranslator,f.playbackEventDispatcher=new bj(a,e.data.env_key,e),f.data={player_instance_id:R(),mux_sample_rate:e.sampleRate,beacon_domain:e.beaconCollectionDomain||e.beaconDomain},f.data.view_sequence_number=1,f.data.player_sequence_number=1;var f,g=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind($(f));if(f.on("viewinit",function(a,b){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,b),this._initializeViewData(),this.one("play",g),this.one("adbreakstart",g)}),f.on("videochange",function(a,b){this._resetView(b)}),f.on("programchange",function(a,b){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(b,{view_program_changed:!0})),g(),this.emit("play"),this.emit("playing")}),f.on("fragmentchange",function(a,b){this.currentFragmentPDT=b.currentFragmentPDT,this.currentFragmentStart=b.currentFragmentStart}),f.on("destroy",f.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var h=function(){var a=void 0!==f.data.view_start;f.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,a&&f.mux.WINDOW_HIDDEN&&(f.data.player_is_paused||f.emit("hb"))};window.addEventListener("visibilitychange",h,!1);var i=function(a){a.persisted||f.destroy()};window.addEventListener("pagehide",i,!1),f.on("destroy",function(){window.removeEventListener("visibilitychange",h),window.removeEventListener("pagehide",i)})}return f.on("playerready",function(a,b){Object.assign(this.data,b)}),bm.forEach(function(a){f.on(a,function(b,c){0!==a.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,c),this._sanitizeData()}),f.on("after"+a,function(){("error"!==a||this.errorTracker.viewErrored)&&this.send(a)})}),f.on("viewend",function(a,b){Object.assign(f.data,b)}),f.one("playerready",function(a){var b=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=b-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),f.longResumeTracker=new bl($(f)),f.errorTracker=new aG($(f)),new aU($(f)),f.seekingTracker=new aO($(f)),f.playheadTime=new aJ($(f)),f.playbackHeartbeat=new aF($(f)),new aN($(f)),f.watchTimeTracker=new aH($(f)),new aI($(f)),f.adTracker=new aR($(f)),new aL($(f)),new aK($(f)),new aM($(f)),new aT($(f)),new bk($(f)),e.hlsjs&&f.addHLSJS(e),e.dashjs&&f.addDashJS(e),f.emit("viewinit",e.data),f}return ab(d,[{key:"emit",value:function(a,b){var c,e=Object.assign({viewer_time:this.mux.utils.now()},b),f=[a,e];if(this.emitTranslator)try{f=this.emitTranslator(a,e)}catch(a){this.mux.log.warn("Exception in emit translator callback.",a)}null!=f&&f.length&&(c=ae(ad(d.prototype),"emit",this)).call.apply(c,[this].concat(V(f)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var b=Object.assign({},this.data);if(void 0===b.video_source_is_live&&(b.player_source_duration===1/0||b.video_source_duration===1/0?b.video_source_is_live=!0:(b.player_source_duration>0||b.video_source_duration>0)&&(b.video_source_is_live=!1)),b.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(a){b[a]=void 0}),b.video_source_url=b.video_source_url||b.player_source_url,b.video_source_url){var c=M(ah(b.video_source_url),2),d=c[0];b.video_source_domain=c[1],b.video_source_hostname=d}delete b.ad_request_id,this.playbackEventDispatcher.send(a,b),this.data.view_sequence_number++,this.data.player_sequence_number++,bn.has(a)||this._restartHeartBeat(),"viewend"===a&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a=this.getStateData();if("function"==typeof this.stateDataTranslator)try{a=this.stateDataTranslator(a)}catch(a){this.mux.log.warn("Exception in stateDataTranslator translator callback.",a)}Object.assign(this.data,a),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(b){var c=parseInt(a.data[b],10);a.data[b]=isNaN(c)?void 0:c}),["player_source_url","video_source_url"].forEach(function(b){if(a.data[b]){var c=a.data[b].toLowerCase();(0===c.indexOf("data:")||0===c.indexOf("blob:"))&&(a.data[b]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(b){0===b.indexOf("video_")&&delete a.data[b]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(b){0===b.indexOf("view_")&&delete a.data[b]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,b=this.data.view_id=R(),c=function(){b===a.data.view_id&&ak(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",c):c()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){return a.hlsjs?this.hlsjs?void this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):void(this.hlsjs=a.hlsjs,au(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)):void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(av(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){return a.dashjs?this.dashjs?void this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):void(this.dashjs=a.dashjs,aA(this.mux,this.id,a.dashjs)):void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(aB(this.dashjs),this.dashjs=void 0)}}]),d}(aD),bp=q(J()),bq=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],br={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},bs=q(r());bs.default&&bs.default.WeakMap&&(bc=new WeakMap);var bt={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},bu=function(a){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(a),this.manifest};bu.prototype.process=function(a){var b;for(this.buffer+=a,b=this.buffer.indexOf("\n");b>-1;b=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,b)),this.buffer=this.buffer.substring(b+1)},bu.prototype.processLine=function(a){var b=a.indexOf(":"),c=bB(a,b),d=c[0],e=2===c.length?bx(c[1]):void 0;if("#"!==d[0])this.currentUri.uri=d,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(d){case bt.TARGET_DURATION:if(!isFinite(e)||e<0)return;this.manifest.targetDuration=e,this.setHoldBack();break;case bt.PART_INF:bv(this.manifest,c),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case bt.SERVER_CONTROL:bv(this.manifest,c),this.setHoldBack();break;case bt.INF:0===e?this.currentUri.duration=.01:e>0&&(this.currentUri.duration=e);break;case bt.PROGRAM_DATE_TIME:var f=new Date(e);this.manifest.dateTimeString||(this.manifest.dateTimeString=e,this.manifest.dateTimeObject=f),this.currentUri.dateTimeString=e,this.currentUri.dateTimeObject=f;break;case bt.VERSION:bv(this.manifest,c);break;case bt.SESSION_DATA:var g=ar(bC(c[1]));Object.assign(this.manifest.sessionData,g)}},bu.prototype.setHoldBack=function(){var a=this.manifest,b=a.serverControl,c=a.targetDuration,d=a.partTargetDuration;if(b){var e="holdBack",f="partHoldBack",g=c&&3*c,h=d&&2*d;c&&!b.hasOwnProperty(e)&&(b[e]=g),g&&b[e]<g&&(b[e]=g),d&&!b.hasOwnProperty(f)&&(b[f]=3*d),d&&b[f]<h&&(b[f]=h)}};var bv=function(a,b){var c,d=bw(b[0].replace("#EXT-X-",""));bA(b[1])?(c={},c=Object.assign(bz(b[1]),c)):c=bx(b[1]),a[d]=c},bw=function(a){return a.toLowerCase().replace(/-(\w)/g,function(a){return a[1].toUpperCase()})},bx=function(a){if("yes"===a.toLowerCase()||"no"===a.toLowerCase())return"yes"===a.toLowerCase();var b=-1!==a.indexOf(":")?a:parseFloat(a);return isNaN(b)?a:b},by=function(a){var b={},c=a.split("=");return c.length>1&&(b[bw(c[0])]=bx(c[1])),b},bz=function(a){for(var b=a.split(","),c={},d=0;b.length>d;d++)c=Object.assign(by(b[d]),c);return c},bA=function(a){return a.indexOf("=")>-1},bB=function(a,b){return -1===b?[a]:[a.substring(0,b),a.substring(b+1)]},bC=function(a){var b={};if(a){var c=a.search(",");return[a.slice(0,c),a.slice(c+1)].forEach(function(a,c){for(var d=a.replace(/['"]+/g,"").split("="),e=0;e<d.length;e++)"DATA-ID"===d[e]&&(b["DATA-ID"]=d[1-e]),"VALUE"===d[e]&&(b.VALUE=d[1-e])}),{data:b}}},bD={safeCall:function(a,b,c,d){var e=d;if(a&&"function"==typeof a[b])try{e=a[b].apply(a,c)}catch(a){X.info("safeCall error",a)}return e},safeIncrement:ak,getComputedStyle:function(a,b){var c;return a&&b&&bs.default&&"function"==typeof bs.default.getComputedStyle?(bc&&bc.has(a)&&(c=bc.get(a)),c||(c=bs.default.getComputedStyle(a,null),bc&&bc.set(a,c)),c.getPropertyValue(b)):""},secondsToMs:function(a){return Math.floor(1e3*a)},assign:Object.assign,headersStringToObject:ap,cdnHeadersToRequestId:aq,extractHostnameAndDomain:ah,extractHostname:ag,manifestParser:bu,generateShortID:S,generateUUID:R,now:Q.now,findMediaElement:U},bE={},bF=function(a){var b=arguments;"string"==typeof a?bF.hasOwnProperty(a)?N.default.setTimeout(function(){b=Array.prototype.splice.call(b,1),bF[a].apply(null,b)},0):X.warn("`"+a+"` is an unknown task"):"function"==typeof a?N.default.setTimeout(function(){a(bF)},0):X.warn("`"+a+"` is invalid.")},bG={loaded:Q.now(),NAME:"mux-embed",VERSION:"5.9.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(a,b){return function(a,b,c){var d=M(U(b),3),e=d[0],f=d[1],g=d[2],h=a.log,i=a.utils.getComputedStyle,j=a.utils.secondsToMs;if(!e)return h.error("No element was found with the `"+f+"` query selector.");if("video"!==g&&"audio"!==g)return h.error("The element of `"+f+"` was not a media element.");e.mux&&(e.mux.destroy(),delete e.mux,h.warn("Already monitoring this video element, replacing existing event listeners")),(c=Object.assign({automaticErrorTracking:!0},c,{getPlayheadTime:function(){return j(e.currentTime)},getStateData:function(){var a,b,c=(null==(a=this.getPlayheadTime)?void 0:a.call(this))||j(e.currentTime),d=this.hlsjs&&this.hlsjs.url,f=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),g={player_is_paused:e.paused,player_width:parseInt(i(e,"width")),player_height:parseInt(i(e,"height")),player_autoplay_on:e.autoplay,player_preload_on:e.preload,player_language_code:e.lang,player_is_fullscreen:bp.default&&!!(bp.default.fullscreenElement||bp.default.webkitFullscreenElement||bp.default.mozFullScreenElement||bp.default.msFullscreenElement),video_poster_url:e.poster,video_source_url:d||f||e.currentSrc,video_source_duration:j(e.duration),video_source_height:e.videoHeight,video_source_width:e.videoWidth,view_dropped_frame_count:null==e||null==(b=e.getVideoPlaybackQuality)?void 0:b.call(e).droppedVideoFrames};if(e.getStartDate&&c>0){var h=e.getStartDate();if(h&&"function"==typeof h.getTime&&h.getTime()){var k=h.getTime();g.player_program_time=k+c,e.seekable.length>0&&(g.player_live_edge_program_time=k+e.seekable.end(e.seekable.length-1))}}return g}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:a.VERSION},c.data),e.mux=e.mux||{},e.mux.deleted=!1,e.mux.emit=function(b,c){a.emit(f,b,c)},e.mux.updateData=function(a){e.mux.emit("hb",a)};var k=function(){h.error("The monitor for this video element has already been destroyed.")};e.mux.destroy=function(){Object.keys(e.mux.listeners).forEach(function(a){e.removeEventListener(a,e.mux.listeners[a],!1)}),delete e.mux.listeners,e.mux.destroy=k,e.mux.swapElement=k,e.mux.emit=k,e.mux.addHLSJS=k,e.mux.addDashJS=k,e.mux.removeHLSJS=k,e.mux.removeDashJS=k,e.mux.updateData=k,e.mux.setEmitTranslator=k,e.mux.setStateDataTranslator=k,e.mux.setGetPlayheadTime=k,e.mux.deleted=!0,a.emit(f,"destroy")},e.mux.swapElement=function(b){var c=M(U(b),3),d=c[0],f=c[1],g=c[2];return d?"video"!==g&&"audio"!==g?a.log.error("The element of `"+f+"` was not a media element."):void(d.muxId=e.muxId,delete e.muxId,d.mux=d.mux||{},d.mux.listeners=Object.assign({},e.mux.listeners),delete e.mux.listeners,Object.keys(d.mux.listeners).forEach(function(a){e.removeEventListener(a,d.mux.listeners[a],!1),d.addEventListener(a,d.mux.listeners[a],!1)}),d.mux.swapElement=e.mux.swapElement,d.mux.destroy=e.mux.destroy,delete e.mux,e=d):a.log.error("No element was found with the `"+f+"` query selector.")},e.mux.addHLSJS=function(b){a.addHLSJS(f,b)},e.mux.addDashJS=function(b){a.addDashJS(f,b)},e.mux.removeHLSJS=function(){a.removeHLSJS(f)},e.mux.removeDashJS=function(){a.removeDashJS(f)},e.mux.setEmitTranslator=function(b){a.setEmitTranslator(f,b)},e.mux.setStateDataTranslator=function(b){a.setStateDataTranslator(f,b)},e.mux.setGetPlayheadTime=function(b){b||(b=c.getPlayheadTime),a.setGetPlayheadTime(f,b)},a.init(f,c),a.emit(f,"playerready"),e.paused||(a.emit(f,"play"),e.readyState>2&&a.emit(f,"playing")),e.mux.listeners={},bq.forEach(function(b){("error"!==b||c.automaticErrorTracking)&&(e.mux.listeners[b]=function(){var c={};if("error"===b){if(!e.error||1===e.error.code)return;c.player_error_code=e.error.code,c.player_error_message=br[e.error.code]||e.error.message}a.emit(f,b,c)},e.addEventListener(b,e.mux.listeners[b],!1))})}(bF,a,b)},destroyMonitor:function(a){var b=M(U(a),1)[0];b&&b.mux&&"function"==typeof b.mux.destroy?b.mux.destroy():X.error("A video element monitor for `"+a+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(a,b){var c=T(a);bE[c]?bE[c].addHLSJS(b):X.error("A monitor for `"+c+"` has not been initialized.")},addDashJS:function(a,b){var c=T(a);bE[c]?bE[c].addDashJS(b):X.error("A monitor for `"+c+"` has not been initialized.")},removeHLSJS:function(a){var b=T(a);bE[b]?bE[b].removeHLSJS():X.error("A monitor for `"+b+"` has not been initialized.")},removeDashJS:function(a){var b=T(a);bE[b]?bE[b].removeDashJS():X.error("A monitor for `"+b+"` has not been initialized.")},init:function(a,b){Z()&&b&&b.respectDoNotTrack&&X.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var c=T(a);bE[c]=new bo(bF,c,b)},emit:function(a,b,c){var d=T(a);bE[d]?(bE[d].emit(b,c),"destroy"===b&&delete bE[d]):X.error("A monitor for `"+d+"` has not been initialized.")},updateData:function(a,b){var c=T(a);bE[c]?bE[c].emit("hb",b):X.error("A monitor for `"+c+"` has not been initialized.")},setEmitTranslator:function(a,b){var c=T(a);bE[c]?bE[c].emitTranslator=b:X.error("A monitor for `"+c+"` has not been initialized.")},setStateDataTranslator:function(a,b){var c=T(a);bE[c]?bE[c].stateDataTranslator=b:X.error("A monitor for `"+c+"` has not been initialized.")},setGetPlayheadTime:function(a,b){var c=T(a);bE[c]?bE[c].getPlayheadTime=b:X.error("A monitor for `"+c+"` has not been initialized.")},checkDoNotTrack:Z,log:X,utils:bD,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(bF,bG),void 0!==N.default&&"function"==typeof N.default.addEventListener&&N.default.addEventListener("pagehide",function(a){a.persisted||(bF.WINDOW_UNLOADING=!0)},!1);var bH=c(13637).Ay,bI={VIDEO:"video",DRM:"drm"},bJ={NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},bK=a=>a===bI.VIDEO?"playback":a,bL=class a extends Error{constructor(b,c=a.MEDIA_ERR_CUSTOM,d,e){var f;super(b),this.name="MediaError",this.code=c,this.context=e,this.fatal=null!=d?d:c>=a.MEDIA_ERR_NETWORK&&c<=a.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(f=a.defaultMessages[this.code])?f:"")}};bL.MEDIA_ERR_ABORTED=1,bL.MEDIA_ERR_NETWORK=2,bL.MEDIA_ERR_DECODE=3,bL.MEDIA_ERR_SRC_NOT_SUPPORTED=4,bL.MEDIA_ERR_ENCRYPTED=5,bL.MEDIA_ERR_CUSTOM=100,bL.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var bM=bL,bN=(a,b)=>null!=b&&a in b,bO={ANY:"any",MUTED:"muted"},bP={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},bQ={MSE:"mse",NATIVE:"native"},bR={HEADER:"header",QUERY:"query",NONE:"none"},bS=Object.values(bR),bT={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},bU={HLS:bT.M3U8},bV=(Object.keys(bU),[...Object.values(bT)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),bW={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},bX={DESCENDING:"desc"},bY={code:"en"},bZ=(a,b,c,d,e=a)=>{e.addEventListener(b,c,d),a.addEventListener("teardown",()=>{e.removeEventListener(b,c)},{once:!0})},b$=a=>{let b=a.indexOf("?");return b<0?[a]:[a.slice(0,b),a.slice(b)]},b_=a=>{let{type:b}=a;if(b){let a=b.toUpperCase();return bN(a,bU)?bU[a]:b}return b2(a)},b0=a=>"VOD"===a?bP.ON_DEMAND:bP.LIVE,b1=a=>"EVENT"===a?1/0:"VOD"===a?NaN:0,b2=a=>{let{src:b}=a;if(!b)return"";let c="";try{c=new URL(b).pathname}catch{console.error("invalid url")}let d=c.lastIndexOf(".");if(d<0)return b4(a)?bT.M3U8:"";let e=c.slice(d+1).toUpperCase();return bN(e,bT)?bT[e]:""},b3="mux.com",b4=({src:a,customDomain:b=b3})=>{let c;try{c=new URL(`${a}`)}catch{return!1}let d="https:"===c.protocol,e=c.hostname===`stream.${b}`.toLowerCase(),f=c.pathname.split("/"),g=2===f.length,h=!(null!=f&&f[1].includes("."));return d&&e&&g&&h},b5=a=>{let b=(null!=a?a:"").split(".")[1];if(b)try{let a=b.replace(/-/g,"+").replace(/_/g,"/"),c=decodeURIComponent(atob(a).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(c)}catch{return}};function b6(a,b=!0){var c;return new b7(b&&null!=(c=null==bY?void 0:bY[a])?c:a,b?bY.code:"en")}var b7=class{constructor(a,b=(a=>null!=(a=bY)?a:"en")()){this.message=a,this.locale=b}format(a){return this.message.replace(/\{(\w+)\}/g,(b,c)=>{var d;return null!=(d=a[c])?d:""})}toString(){return this.message}},b8=Object.values(bO),b9=a=>"boolean"==typeof a||"string"==typeof a&&b8.includes(a),ca=(a,b)=>{if(!b)return;let c=a.muted,d=()=>a.muted=c;switch(b){case bO.ANY:a.play().catch(()=>{a.muted=!0,a.play().catch(d)});break;case bO.MUTED:a.muted=!0,a.play().catch(d);break;default:a.play().catch(()=>{})}},cb=a=>"time"in a?a.time:a.startTime;function cc(a,b,c,d,e,f){let g=document.createElement("track");return g.kind=b,g.label=c,d&&(g.srclang=d),e&&(g.id=e),f&&(g.default=!0),g.track.mode=["subtitles","captions"].includes(b)?"disabled":"hidden",g.setAttribute("data-removeondestroy",""),a.append(g),g.track}function cd(a,b,c){var d;return null==(d=Array.from(a.querySelectorAll("track")).find(a=>a.track.label===b&&a.track.kind===c))?void 0:d.track}async function ce(a,b,c,d){let e=cd(a,c,d);return e||((e=cc(a,d,c)).mode="hidden",await new Promise(a=>setTimeout(()=>a(void 0),0))),"hidden"!==e.mode&&(e.mode="hidden"),[...b].sort((a,b)=>cb(b)-cb(a)).forEach(b=>{var c,f;let g=b.value,h=cb(b);if("endTime"in b&&null!=b.endTime)null==e||e.addCue(new VTTCue(h,b.endTime,"chapters"===d?g:JSON.stringify(null!=g?g:null)));else{let b=Array.prototype.findIndex.call(null==e?void 0:e.cues,a=>a.startTime>=h),i=null==(c=null==e?void 0:e.cues)?void 0:c[b],j=i?i.startTime:Number.isFinite(a.duration)?a.duration:Number.MAX_SAFE_INTEGER,k=null==(f=null==e?void 0:e.cues)?void 0:f[b-1];k&&(k.endTime=h),null==e||e.addCue(new VTTCue(h,j,"chapters"===d?g:JSON.stringify(null!=g?g:null)))}}),a.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),e}var cf="cuepoints",cg=Object.freeze({label:cf});async function ch(a,b,c=cg){return ce(a,b,c.label,"metadata")}var ci=a=>({time:a.startTime,value:JSON.parse(a.text)});function cj(a,b={label:cf}){var c,d;let e=cd(a,b.label,"metadata");if(!(null!=(c=null==e?void 0:e.activeCues)&&c.length))return;if(1===e.activeCues.length)return ci(e.activeCues[0]);let{currentTime:f}=a;return ci(Array.prototype.find.call(null!=(d=e.activeCues)?d:[],({startTime:a,endTime:b})=>a<=f&&b>f)||e.activeCues[0])}async function ck(a,b=cg){return new Promise(c=>{bZ(a,"loadstart",async()=>{let d=await ch(a,[],b);bZ(a,"cuechange",()=>{let b=cj(a);if(b){let c=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:b});a.dispatchEvent(c)}},{},d),c(d)})})}var cl="chapters",cm=Object.freeze({label:cl}),cn=a=>({startTime:a.startTime,endTime:a.endTime,value:a.text});async function co(a,b,c=cm){return ce(a,b,c.label,"chapters")}function cp(a,b={label:cl}){var c,d;let e=cd(a,b.label,"chapters");if(!(null!=(c=null==e?void 0:e.activeCues)&&c.length))return;if(1===e.activeCues.length)return cn(e.activeCues[0]);let{currentTime:f}=a;return cn(Array.prototype.find.call(null!=(d=e.activeCues)?d:[],({startTime:a,endTime:b})=>a<=f&&b>f)||e.activeCues[0])}async function cq(a,b=cm){return new Promise(c=>{bZ(a,"loadstart",async()=>{let d=await co(a,[],b);bZ(a,"cuechange",()=>{let b=cp(a);if(b){let c=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:b});a.dispatchEvent(c)}},{},d),c(d)})})}var cr={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},cs=(a,b,c,d,e=!1,f=!(a=>null==(a=globalThis.navigator)?void 0:a.onLine)())=>{var g,h;if(f){let c=b6("Your device appears to be offline",e),d=bM.MEDIA_ERR_NETWORK,f=new bM(c,d,!1,void 0);return f.errorCategory=b,f.muxCode=bJ.NETWORK_OFFLINE,f.data=a,f}let i="status"in a?a.status:a.code,j=Date.now(),k=bM.MEDIA_ERR_NETWORK;if(200===i)return;let l=bK(b),m=((a,b)=>{var c,d;let e=bK(a),f=`${e}Token`;return null!=(c=b.tokens)&&c[e]?null==(d=b.tokens)?void 0:d[e]:bN(f,b)?b[f]:void 0})(b,c),n=(a=>a===bI.VIDEO?cr.VIDEO:a===bI.DRM?cr.DRM:void 0)(b),[o]=b$(null!=(g=c.playbackId)?g:"");if(!i||!o)return;let p=b5(m);if(m&&!p){let c=new bM(b6("The {tokenNamePrefix}-token provided is invalid or malformed.",e).format({tokenNamePrefix:l}),k,!0,b6("Compact JWT string: {token}",e).format({token:m}));return c.errorCategory=b,c.muxCode=bJ.NETWORK_TOKEN_MALFORMED,c.data=a,c}if(i>=500){let a=new bM("",k,null==d||d);return a.errorCategory=b,a.muxCode=bJ.NETWORK_UNKNOWN_ERROR,a}if(403===i)if(p){if((({exp:a},b=Date.now())=>!a||1e3*a<b)(p,j)){let c={timeStyle:"medium",dateStyle:"medium"},d=new bM(b6("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:l}),k,!0,b6("Expired at: {expiredDate}. Current time: {currentDate}.",e).format({expiredDate:new Intl.DateTimeFormat("en",c).format(null!=(h=p.exp)?h:0),currentDate:new Intl.DateTimeFormat("en",c).format(j)}));return d.errorCategory=b,d.muxCode=bJ.NETWORK_TOKEN_EXPIRED,d.data=a,d}if((({sub:a},b)=>a!==b)(p,o)){let c=new bM(b6("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:l}),k,!0,b6("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",e).format({tokenNamePrefix:l,playbackId:o,tokenPlaybackId:p.sub}));return c.errorCategory=b,c.muxCode=bJ.NETWORK_TOKEN_SUB_MISMATCH,c.data=a,c}if((({aud:a},b)=>!a)(p,0)){let c=new bM(b6("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:l}),k,!0,b6("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",e).format({tokenNamePrefix:l,expectedAud:n}));return c.errorCategory=b,c.muxCode=bJ.NETWORK_TOKEN_AUD_MISSING,c.data=a,c}if((({aud:a},b)=>a!==b)(p,n)){let c=new bM(b6("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:l}),k,!0,b6("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",e).format({tokenNamePrefix:l,expectedAud:n,aud:p.aud}));return c.errorCategory=b,c.muxCode=bJ.NETWORK_TOKEN_AUD_MISMATCH,c.data=a,c}}else{let c=new bM(b6("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",e).format({tokenNamePrefix:l,category:b}),k,null==d||d,b6("Specified playback ID: {playbackId}",e).format({playbackId:o}));return c.errorCategory=b,c.muxCode=bJ.NETWORK_TOKEN_MISSING,c.data=a,c}if(412===i){let f=new bM(b6("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",e),k,null==d||d,b6("Specified playback ID: {playbackId}",e).format({playbackId:o}));return f.errorCategory=b,f.muxCode=bJ.NETWORK_NOT_READY,f.streamType=c.streamType===bP.LIVE?"live":c.streamType===bP.ON_DEMAND?"on-demand":"unknown",f.data=a,f}if(404===i){let c=new bM(b6("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",e),k,null==d||d,b6("Specified playback ID: {playbackId}",e).format({playbackId:o}));return c.errorCategory=b,c.muxCode=bJ.NETWORK_NOT_FOUND,c.data=a,c}if(400===i){let c=new bM(b6("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),k,null==d||d,b6("Specified playback ID: {playbackId}",e).format({playbackId:o}));return c.errorCategory=b,c.muxCode=bJ.NETWORK_INVALID_URL,c.data=a,c}let q=new bM("",k,null==d||d);return q.errorCategory=b,q.muxCode=bJ.NETWORK_UNKNOWN_ERROR,q.data=a,q},ct=bH.DefaultConfig.capLevelController,cu=class a extends ct{constructor(a){super(a)}get levels(){var a;return null!=(a=this.hls.levels)?a:[]}getValidLevels(a){return this.levels.filter((b,c)=>this.isLevelAllowed(b)&&c<=a)}getMaxLevel(b){let c=super.getMaxLevel(b),d=this.getValidLevels(b);if(!d[c])return c;let e=Math.min(d[c].width,d[c].height),f=a.minMaxResolution;return e>=f?c:ct.getMaxLevelByMediaSize(d,16/9*f,f)}};cu.minMaxResolution=720;var cv,cw,cx,cy,cz,cA,cB={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},cC=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,cD=async(a,b)=>{if(b===bT.MP4)return{streamType:bP.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(b===bT.M3U8){let b=await fetch(a);if(!b.ok)return Promise.reject(b);let c=await b.text(),d=await fetch(c.split(`
`).find((a,b,c)=>b&&c[b-1].startsWith("#EXT-X-STREAM-INF"))).then(a=>200!==a.status?Promise.reject(a):a.text());return{...(a=>{let b=a.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!b.length)return{};let c={};for(let a of b){let b=Object.fromEntries([...a.matchAll(cC)].map(([,a,b])=>[a,b])),d=b["DATA-ID"];d&&(c[d]={...b})}return{sessionData:c}})(c),...(a=>{var b,c,d;let e=a.split(`
`),f=null==(c=(null!=(b=e.find(a=>a.startsWith("#EXT-X-PLAYLIST-TYPE")))?b:"").split(":")[1])?void 0:c.trim(),g=b0(f),h=b1(f),i;if(g===bP.LIVE){let a=e.find(a=>a.startsWith("#EXT-X-PART-INF"));if(a)i=2*a.split(":")[1].split("=")[1];else{let a=e.find(a=>a.startsWith("#EXT-X-TARGETDURATION")),b=null==(d=null==a?void 0:a.split(":"))?void 0:d[1];i=(null!=b?b:6)*3}}return{streamType:g,targetLiveWindow:h,liveEdgeStartOffset:i}})(d)}}return console.error(`Media type ${b} is an unrecognized or unsupported type for src ${a}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},cE=async(a,b,c=b_({src:a}))=>{var d,e,f,g;let{streamType:h,targetLiveWindow:i,liveEdgeStartOffset:j,sessionData:k}=await cD(a,c),l=null==k?void 0:k["com.apple.hls.chapters"];(null!=l&&l.URI||null!=l&&l.VALUE.toLocaleLowerCase().startsWith("http"))&&cF(null!=(d=l.URI)?d:l.VALUE,b),(null!=(e=cJ.get(b))?e:{}).liveEdgeStartOffset=j,(null!=(f=cJ.get(b))?f:{}).targetLiveWindow=i,b.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(g=cJ.get(b))?g:{}).streamType=h,b.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},cF=async(a,b)=>{var c,d;try{let e=await fetch(a);if(!e.ok)throw Error(`Failed to fetch Mux metadata: ${e.status} ${e.statusText}`);let f=await e.json(),g={};if(!(null!=(c=null==f?void 0:f[0])&&c.metadata))return;for(let a of f[0].metadata)a.key&&a.value&&(g[a.key]=a.value);(null!=(d=cJ.get(b))?d:{}).metadata=g;let h=new CustomEvent("muxmetadata");b.dispatchEvent(h)}catch(a){console.error(a)}},cG=null!=(cw=null==(cv=null==globalThis?void 0:globalThis.navigator)?void 0:cv.userAgent)?cw:"",cH=null!=(cz=null==(cy=null==(cx=null==globalThis?void 0:globalThis.navigator)?void 0:cx.userAgentData)?void 0:cy.platform)?cz:"",cI=cG.toLowerCase().includes("android")||["x11","android"].some(a=>cH.toLowerCase().includes(a)),cJ=new WeakMap,cK="mux.com",cL=null==(cA=bH.isSupported)?void 0:cA.call(bH),cM=()=>bF.utils.now(),cN=bF.utils.generateUUID,cO=({playbackId:a,customDomain:b=cK,maxResolution:c,minResolution:d,renditionOrder:e,programStartTime:f,programEndTime:g,assetStartTime:h,assetEndTime:i,playbackToken:j,tokens:{playback:k=j}={},extraSourceParams:l={}}={})=>{if(!a)return;let[m,n=""]=b$(a),o=new URL(`https://stream.${b}/${m}.m3u8${n}`);return k||o.searchParams.has("token")?(o.searchParams.forEach((a,b)=>{"token"!=b&&o.searchParams.delete(b)}),k&&o.searchParams.set("token",k)):(c&&o.searchParams.set("max_resolution",c),d&&(o.searchParams.set("min_resolution",d),c&&+c.slice(0,-1)<+d.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",d,"maxResolution",c)),e&&o.searchParams.set("rendition_order",e),f&&o.searchParams.set("program_start_time",`${f}`),g&&o.searchParams.set("program_end_time",`${g}`),h&&o.searchParams.set("asset_start_time",`${h}`),i&&o.searchParams.set("asset_end_time",`${i}`),Object.entries(l).forEach(([a,b])=>{null!=b&&o.searchParams.set(a,b)})),o.toString()},cP=a=>{if(!a)return;let[b]=a.split("?");return b||void 0},cQ=a=>{if(!a||!a.startsWith("https://stream."))return;let[b]=new URL(a).pathname.slice(1).split(/\.m3u8|\//);return b||void 0},cR=a=>{var b;return null==(b=cJ.get(a))?void 0:b.error},cS=a=>{var b,c;return null!=(c=null==(b=cJ.get(a))?void 0:b.streamType)?c:bP.UNKNOWN},cT=a=>{var b,c;return null!=(c=null==(b=cJ.get(a))?void 0:b.seekable)?c:a.seekable},cU=.034,cV=(a,b,c=cU)=>a>b||((a,b,c=cU)=>Math.abs(a-b)<=c)(a,b,c),cW=(a,b)=>{var c,d,e;if(!b||!a.buffered.length)return;if(a.readyState>2)return!1;let f=b.currentLevel>=0?null==(d=null==(c=b.levels)?void 0:c[b.currentLevel])?void 0:d.details:null==(e=b.levels.find(a=>!!a.details))?void 0:e.details;if(!f||f.live)return;let{fragments:g}=f;if(!(null!=g&&g.length))return;if(a.currentTime<a.duration-(f.targetduration+.5))return!1;let h=g[g.length-1];if(a.currentTime<=h.start)return!1;let i=h.start+h.duration/2,j=a.buffered.start(a.buffered.length-1),k=a.buffered.end(a.buffered.length-1);return i>j&&i<k},cX=(a,b)=>a.ended||a.loop?a.ended:!!(b&&cW(a,b))||((a,b=cU)=>a.paused&&cV(a.currentTime,a.duration,b))(a),cY=(a,b,c)=>{let d=null==b?void 0:b.engine;null!=a&&a.mux&&!a.mux.deleted&&(null!=c&&c.muxDataKeepSession?d&&a.mux.removeHLSJS():(a.mux.destroy(),delete a.mux)),d&&(d.detachMedia(),d.destroy()),a&&(a.hasAttribute("src")&&(a.removeAttribute("src"),a.load()),a.removeEventListener("error",c6),a.removeEventListener("error",c8),a.removeEventListener("durationchange",c5),cJ.delete(a),a.dispatchEvent(new Event("teardown")))};function cZ(a,b){var c;let d=b_(a);if(d!==bT.M3U8)return!0;let e=!d||null==(c=b.canPlayType(d))||c,{preferPlayback:f}=a,g=f===bQ.MSE,h=f===bQ.NATIVE;return e&&(h||!(cL&&(g||cI)))}var c$=a=>a===bP.LIVE?{backBufferLength:8}:{},c_=a=>{let{tokens:{drm:b}={},playbackId:c,drmTypeCb:d}=a,e=cP(c);return b&&e?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:c2(a,"fairplay"),serverCertificateUrl:c3(a,"fairplay")},"com.widevine.alpha":{licenseUrl:c2(a,"widevine")},"com.microsoft.playready":{licenseUrl:c2(a,"playready")}},requestMediaKeySystemAccessFunc:(a,b)=>("com.widevine.alpha"===a&&(b=[...b.map(a=>{var b;let c=null==(b=a.videoCapabilities)?void 0:b.map(a=>({...a,robustness:"HW_SECURE_ALL"}));return{...a,videoCapabilities:c}}),...b]),navigator.requestMediaKeySystemAccess(a,b).then(b=>{let c=(a=>a.includes("fps")?cB.FAIRPLAY:a.includes("playready")?cB.PLAYREADY:a.includes("widevine")?cB.WIDEVINE:void 0)(a);return null==d||d(c),b}))}:{}},c0=async a=>{let b=await fetch(a);return 200!==b.status?Promise.reject(b):await b.arrayBuffer()},c1=async(a,b)=>{let c=await fetch(b,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:a});return 200!==c.status?Promise.reject(c):new Uint8Array(await c.arrayBuffer())},c2=({playbackId:a,tokens:{drm:b}={},customDomain:c=cK},d)=>{let e=cP(a);return`https://license.${c.toLocaleLowerCase().endsWith(cK)?c:cK}/license/${d}/${e}?token=${b}`},c3=({playbackId:a,tokens:{drm:b}={},customDomain:c=cK},d)=>{let e=cP(a);return`https://license.${c.toLocaleLowerCase().endsWith(cK)?c:cK}/appcert/${d}/${e}?token=${b}`},c4=({playbackId:a,src:b,customDomain:c})=>{if(a)return!0;if("string"!=typeof b)return!1;let d=new URL(b,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return d.includes(cK)||!!c&&d.includes(c.toLocaleLowerCase())};function c5(a){var b;let c=a.target,d=null==(b=cJ.get(c))?void 0:b.startTime;if(d&&function(a,b,c){b&&c>b&&(c=b);for(let b=0;b<a.length;b++)if(a.start(b)<=c&&a.end(b)>=c)return!0;return!1}(c.seekable,c.duration,d)){let a="auto"===c.preload;a&&(c.preload="none"),c.currentTime=d,a&&(c.preload="auto")}}async function c6(a){if(!a.isTrusted)return;a.stopImmediatePropagation();let b=a.target;if(!(null!=b&&b.error))return;let{message:c,code:d}=b.error,e=new bM(c,d);if(b.src&&d===bM.MEDIA_ERR_SRC_NOT_SUPPORTED&&b.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var a;let c=null!=(a=cR(b))?a:b.error;(null==c?void 0:c.code)===bM.MEDIA_ERR_SRC_NOT_SUPPORTED&&c7(b,e)},500);if(b.src&&(d!==bM.MEDIA_ERR_DECODE||void 0!==d))try{let{status:a}=await fetch(b.src);e.data={response:{code:a}}}catch{}c7(b,e)}function c7(a,b){var c;b.fatal&&((null!=(c=cJ.get(a))?c:{}).error=b,a.dispatchEvent(new CustomEvent("error",{detail:b})))}function c8(a){var b,c;if(!(a instanceof CustomEvent)||!(a.detail instanceof bM))return;let d=a.target,e=a.detail;e&&e.fatal&&((null!=(b=cJ.get(d))?b:{}).error=e,null==(c=d.mux)||c.emit("error",{player_error_code:e.code,player_error_message:e.message,player_error_context:e.context}))}var c9,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl=(a,b)=>{var c,d,e;console.error("getErrorFromHlsErrorData()",a);let f={[bH.ErrorTypes.NETWORK_ERROR]:bM.MEDIA_ERR_NETWORK,[bH.ErrorTypes.MEDIA_ERROR]:bM.MEDIA_ERR_DECODE,[bH.ErrorTypes.KEY_SYSTEM_ERROR]:bM.MEDIA_ERR_ENCRYPTED},g,h=(a=>[bH.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,bH.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(a.details)?bM.MEDIA_ERR_NETWORK:f[a.type])(a);if(h===bM.MEDIA_ERR_NETWORK&&a.response){let e=null!=(c=(a=>a.type===bH.ErrorTypes.KEY_SYSTEM_ERROR?bI.DRM:a.type===bH.ErrorTypes.NETWORK_ERROR?bI.VIDEO:void 0)(a))?c:bI.VIDEO;g=null!=(d=cs(a.response,e,b,a.fatal))?d:new bM("",h,a.fatal)}else h===bM.MEDIA_ERR_ENCRYPTED?a.details===bH.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((g=new bM(b6("Attempting to play DRM-protected content without providing a DRM token."),bM.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=bI.DRM,g.muxCode=bJ.ENCRYPTED_MISSING_TOKEN):a.details===bH.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((g=new bM(b6("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),bM.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=bI.DRM,g.muxCode=bJ.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):a.details===bH.ErrorDetails.KEY_SYSTEM_NO_SESSION?((g=new bM(b6("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),bM.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=bI.DRM,g.muxCode=bJ.ENCRYPTED_GENERATE_REQUEST_FAILED):a.details===bH.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((g=new bM(b6("Failed to update DRM license. This may be an issue with the player or your protected content."),bM.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=bI.DRM,g.muxCode=bJ.ENCRYPTED_UPDATE_LICENSE_FAILED):a.details===bH.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((g=new bM(b6("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),bM.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=bI.DRM,g.muxCode=bJ.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):a.details===bH.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((g=new bM(b6("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),bM.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=bI.DRM,g.muxCode=bJ.ENCRYPTED_CDM_ERROR):a.details===bH.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((g=new bM(b6("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),bM.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=bI.DRM,g.muxCode=bJ.ENCRYPTED_OUTPUT_RESTRICTED):((g=new bM(a.error.message,bM.MEDIA_ERR_ENCRYPTED,a.fatal)).errorCategory=bI.DRM,g.muxCode=bJ.ENCRYPTED_ERROR):g=new bM("",h,a.fatal);return g.context||(g.context=`${a.url?`url: ${a.url}
`:""}${a.response&&(a.response.code||a.response.text)?`response: ${a.response.code}, ${a.response.text}
`:""}${a.reason?`failure reason: ${a.reason}
`:""}${a.level?`level: ${a.level}
`:""}${a.parent?`parent stream controller: ${a.parent}
`:""}${a.buffer?`buffer length: ${a.buffer}
`:""}${a.error?`error: ${a.error}
`:""}${a.event?`event: ${a.event}
`:""}${a.err?`error message: ${null==(e=a.err)?void 0:e.message}
`:""}`),g.data=a,g},dm=c(42949),dn=a=>{throw TypeError(a)},dp=(a,b,c)=>b.has(a)||dn("Cannot "+c),dq=(a,b,c)=>(dp(a,b,"read from private field"),c?c.call(a):b.get(a)),dr=(a,b,c)=>b.has(a)?dn("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),ds=(a,b,c,d)=>(dp(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),dt=(a,b,c)=>(dp(a,b,"access private method"),c),du=(()=>{try{return"0.26.1"}catch{}return"UNKNOWN"})(),dv=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,dw={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},dx=Object.values(dw),dy="mux-video",dz=class extends dm.lB{constructor(){super(),dr(this,dj),dr(this,c9),dr(this,da),dr(this,db),dr(this,dc,{}),dr(this,dd,{}),dr(this,de),dr(this,df),dr(this,dg),dr(this,dh),dr(this,di,""),ds(this,db,cM()),this.nativeEl.addEventListener("muxmetadata",a=>{var b;let c=(a=>{var b;return null==(b=cJ.get(a))?void 0:b.metadata})(this.nativeEl),d=null!=(b=this.metadata)?b:{};this.metadata={...c,...d},(null==c?void 0:c["com.mux.video.branding"])==="mux-free-plan"&&(ds(this,di,"default"),this.updateLogo())})}static get NAME(){return dy}static get VERSION(){return du}static get observedAttributes(){var a;return[...dx,...null!=(a=dm.lB.observedAttributes)?a:[]]}static getLogoHTML(a){return a&&"false"!==a?"default"===a?dv:`<img part="logo" src="${a}" />`:""}static getTemplateHTML(a={}){var b;return`
      ${dm.lB.getTemplateHTML(a)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(b=a[dw.LOGO])?b:"")}
      </slot>
    `}get preferCmcd(){var a;return null!=(a=this.getAttribute(dw.PREFER_CMCD))?a:void 0}set preferCmcd(a){a!==this.preferCmcd&&(a?bS.includes(a)?this.setAttribute(dw.PREFER_CMCD,a):console.warn(`Invalid value for preferCmcd. Must be one of ${bS.join()}`):this.removeAttribute(dw.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(dw.PLAYER_INIT_TIME)?+this.getAttribute(dw.PLAYER_INIT_TIME):dq(this,db)}set playerInitTime(a){a!=this.playerInitTime&&(null==a?this.removeAttribute(dw.PLAYER_INIT_TIME):this.setAttribute(dw.PLAYER_INIT_TIME,`${+a}`))}get playerSoftwareName(){var a;return null!=(a=dq(this,dg))?a:dy}set playerSoftwareName(a){ds(this,dg,a)}get playerSoftwareVersion(){var a;return null!=(a=dq(this,df))?a:du}set playerSoftwareVersion(a){ds(this,df,a)}get _hls(){var a;return null==(a=dq(this,c9))?void 0:a.engine}get mux(){var a;return null==(a=this.nativeEl)?void 0:a.mux}get error(){var a;return null!=(a=cR(this.nativeEl))?a:null}get errorTranslator(){return dq(this,dh)}set errorTranslator(a){ds(this,dh,a)}get src(){return this.getAttribute("src")}set src(a){a!==this.src&&(null==a?this.removeAttribute("src"):this.setAttribute("src",a))}get type(){var a;return null!=(a=this.getAttribute(dw.TYPE))?a:void 0}set type(a){a!==this.type&&(a?this.setAttribute(dw.TYPE,a):this.removeAttribute(dw.TYPE))}get preload(){let a=this.getAttribute("preload");return""===a?"auto":["none","metadata","auto"].includes(a)?a:super.preload}set preload(a){a!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(a)?this.setAttribute("preload",a):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(dw.DEBUG)}set debug(a){a!==this.debug&&(a?this.setAttribute(dw.DEBUG,""):this.removeAttribute(dw.DEBUG))}get disableTracking(){return this.hasAttribute(dw.DISABLE_TRACKING)}set disableTracking(a){a!==this.disableTracking&&this.toggleAttribute(dw.DISABLE_TRACKING,!!a)}get disableCookies(){return this.hasAttribute(dw.DISABLE_COOKIES)}set disableCookies(a){a!==this.disableCookies&&(a?this.setAttribute(dw.DISABLE_COOKIES,""):this.removeAttribute(dw.DISABLE_COOKIES))}get startTime(){let a=this.getAttribute(dw.START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set startTime(a){a!==this.startTime&&(null==a?this.removeAttribute(dw.START_TIME):this.setAttribute(dw.START_TIME,`${a}`))}get playbackId(){var a;return this.hasAttribute(dw.PLAYBACK_ID)?this.getAttribute(dw.PLAYBACK_ID):null!=(a=cQ(this.src))?a:void 0}set playbackId(a){a!==this.playbackId&&(a?this.setAttribute(dw.PLAYBACK_ID,a):this.removeAttribute(dw.PLAYBACK_ID))}get maxResolution(){var a;return null!=(a=this.getAttribute(dw.MAX_RESOLUTION))?a:void 0}set maxResolution(a){a!==this.maxResolution&&(a?this.setAttribute(dw.MAX_RESOLUTION,a):this.removeAttribute(dw.MAX_RESOLUTION))}get minResolution(){var a;return null!=(a=this.getAttribute(dw.MIN_RESOLUTION))?a:void 0}set minResolution(a){a!==this.minResolution&&(a?this.setAttribute(dw.MIN_RESOLUTION,a):this.removeAttribute(dw.MIN_RESOLUTION))}get renditionOrder(){var a;return null!=(a=this.getAttribute(dw.RENDITION_ORDER))?a:void 0}set renditionOrder(a){a!==this.renditionOrder&&(a?this.setAttribute(dw.RENDITION_ORDER,a):this.removeAttribute(dw.RENDITION_ORDER))}get programStartTime(){let a=this.getAttribute(dw.PROGRAM_START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set programStartTime(a){null==a?this.removeAttribute(dw.PROGRAM_START_TIME):this.setAttribute(dw.PROGRAM_START_TIME,`${a}`)}get programEndTime(){let a=this.getAttribute(dw.PROGRAM_END_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set programEndTime(a){null==a?this.removeAttribute(dw.PROGRAM_END_TIME):this.setAttribute(dw.PROGRAM_END_TIME,`${a}`)}get assetStartTime(){let a=this.getAttribute(dw.ASSET_START_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set assetStartTime(a){null==a?this.removeAttribute(dw.ASSET_START_TIME):this.setAttribute(dw.ASSET_START_TIME,`${a}`)}get assetEndTime(){let a=this.getAttribute(dw.ASSET_END_TIME);if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}set assetEndTime(a){null==a?this.removeAttribute(dw.ASSET_END_TIME):this.setAttribute(dw.ASSET_END_TIME,`${a}`)}get customDomain(){var a;return null!=(a=this.getAttribute(dw.CUSTOM_DOMAIN))?a:void 0}set customDomain(a){a!==this.customDomain&&(a?this.setAttribute(dw.CUSTOM_DOMAIN,a):this.removeAttribute(dw.CUSTOM_DOMAIN))}get drmToken(){var a;return null!=(a=this.getAttribute(dw.DRM_TOKEN))?a:void 0}set drmToken(a){a!==this.drmToken&&(a?this.setAttribute(dw.DRM_TOKEN,a):this.removeAttribute(dw.DRM_TOKEN))}get playbackToken(){var a,b,c,d;if(this.hasAttribute(dw.PLAYBACK_TOKEN))return null!=(a=this.getAttribute(dw.PLAYBACK_TOKEN))?a:void 0;if(this.hasAttribute(dw.PLAYBACK_ID)){let[,a]=b$(null!=(b=this.playbackId)?b:"");return null!=(c=new URLSearchParams(a).get("token"))?c:void 0}if(this.src)return null!=(d=new URLSearchParams(this.src).get("token"))?d:void 0}set playbackToken(a){a!==this.playbackToken&&(a?this.setAttribute(dw.PLAYBACK_TOKEN,a):this.removeAttribute(dw.PLAYBACK_TOKEN))}get tokens(){let a=this.getAttribute(dw.PLAYBACK_TOKEN),b=this.getAttribute(dw.DRM_TOKEN);return{...dq(this,dd),...null!=a?{playback:a}:{},...null!=b?{drm:b}:{}}}set tokens(a){ds(this,dd,null!=a?a:{})}get ended(){return cX(this.nativeEl,this._hls)}get envKey(){var a;return null!=(a=this.getAttribute(dw.ENV_KEY))?a:void 0}set envKey(a){a!==this.envKey&&(a?this.setAttribute(dw.ENV_KEY,a):this.removeAttribute(dw.ENV_KEY))}get beaconCollectionDomain(){var a;return null!=(a=this.getAttribute(dw.BEACON_COLLECTION_DOMAIN))?a:void 0}set beaconCollectionDomain(a){a!==this.beaconCollectionDomain&&(a?this.setAttribute(dw.BEACON_COLLECTION_DOMAIN,a):this.removeAttribute(dw.BEACON_COLLECTION_DOMAIN))}get streamType(){var a;return null!=(a=this.getAttribute(dw.STREAM_TYPE))?a:cS(this.nativeEl)}set streamType(a){a!==this.streamType&&(a?this.setAttribute(dw.STREAM_TYPE,a):this.removeAttribute(dw.STREAM_TYPE))}get targetLiveWindow(){var a,b,c;return this.hasAttribute(dw.TARGET_LIVE_WINDOW)?+this.getAttribute(dw.TARGET_LIVE_WINDOW):(a=this.nativeEl,null!=(c=null==(b=cJ.get(a))?void 0:b.targetLiveWindow)?c:NaN)}set targetLiveWindow(a){a!=this.targetLiveWindow&&(null==a?this.removeAttribute(dw.TARGET_LIVE_WINDOW):this.setAttribute(dw.TARGET_LIVE_WINDOW,`${+a}`))}get liveEdgeStart(){var a,b;if(this.hasAttribute(dw.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:c}=this,d=null!=(a=this.nativeEl.seekable.end(0))?a:0;return Math.max(null!=(b=this.nativeEl.seekable.start(0))?b:0,d-c)}return(a=>{var b;let c=null==(b=cJ.get(a))?void 0:b.liveEdgeStartOffset;if("number"!=typeof c)return NaN;let d=cT(a);return d.length?d.end(d.length-1)-c:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(dw.LIVE_EDGE_OFFSET))return+this.getAttribute(dw.LIVE_EDGE_OFFSET)}set liveEdgeOffset(a){a!=this.liveEdgeOffset&&(null==a?this.removeAttribute(dw.LIVE_EDGE_OFFSET):this.setAttribute(dw.LIVE_EDGE_OFFSET,`${+a}`))}get seekable(){return cT(this.nativeEl)}async addCuePoints(a){return ch(this.nativeEl,a)}get activeCuePoint(){return cj(this.nativeEl)}get cuePoints(){return function(a,b={label:cf}){let c=cd(a,b.label,"metadata");return null!=c&&c.cues?Array.from(c.cues,a=>ci(a)):[]}(this.nativeEl)}async addChapters(a){return co(this.nativeEl,a)}get activeChapter(){return cp(this.nativeEl)}get chapters(){return function(a,b={label:cl}){var c;let d=cd(a,b.label,"chapters");return null!=(c=null==d?void 0:d.cues)&&c.length?Array.from(d.cues,a=>cn(a)):[]}(this.nativeEl)}getStartDate(){return function(a,b){if(b){let c=b.playingDate;if(null!=c)return new Date(c.getTime()-1e3*a.currentTime)}return"function"==typeof a.getStartDate?a.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var a,b;return a=this.nativeEl,(b=this._hls)&&b.playingDate?b.playingDate:new Date("function"==typeof a.getStartDate?a.getStartDate().getTime()+1e3*a.currentTime:NaN)}get preferPlayback(){let a=this.getAttribute(dw.PREFER_PLAYBACK);if(a===bQ.MSE||a===bQ.NATIVE)return a}set preferPlayback(a){a!==this.preferPlayback&&(a===bQ.MSE||a===bQ.NATIVE?this.setAttribute(dw.PREFER_PLAYBACK,a):this.removeAttribute(dw.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(a=>a.startsWith("metadata-")&&![dw.METADATA_URL].includes(a)).reduce((a,b)=>{let c=this.getAttribute(b);return null!=c&&(a[b.replace(/^metadata-/,"").replace(/-/g,"_")]=c),a},{}),...dq(this,dc)}}set metadata(a){ds(this,dc,null!=a?a:{}),this.mux&&this.mux.emit("hb",dq(this,dc))}get _hlsConfig(){return dq(this,de)}set _hlsConfig(a){ds(this,de,a)}get logo(){var a;return null!=(a=this.getAttribute(dw.LOGO))?a:dq(this,di)}set logo(a){a?this.setAttribute(dw.LOGO,a):this.removeAttribute(dw.LOGO)}load(){ds(this,c9,((a,b,c)=>{var d,e,f,g;cY(b,c,a);let{metadata:h={}}=a,{view_session_id:i=cN()}=h,j=null!=(e=null==(d=a)?void 0:d.metadata)&&e.video_id?d.metadata.video_id:c4(d)&&null!=(g=null!=(f=cP(d.playbackId))?f:cQ(d.src))?g:d.src;h.view_session_id=i,h.video_id=j,a.metadata=h,a.drmTypeCb=a=>{var c;null==(c=b.mux)||c.emit("hb",{view_drm_type:a})},cJ.set(b,{retryCount:0});let k=((a,b)=>{let{debug:c,streamType:d,startTime:e=-1,metadata:f,preferCmcd:g,_hlsConfig:h={}}=a,i=b_(a)===bT.M3U8,j=cZ(a,b);if(i&&!j&&cL){let i=c$(d),j=c_(a),k=new bH({debug:c,startPosition:e,cmcd:[bR.QUERY,bR.HEADER].includes(g)?{useHeaders:g===bR.HEADER,sessionId:null==f?void 0:f.view_session_id,contentId:null==f?void 0:f.video_id}:void 0,xhrSetup:(a,b)=>{var c,d;if(g&&g!==bR.QUERY)return;let e=new URL(b);if(!e.searchParams.has("CMCD"))return;let f=(null!=(d=null==(c=e.searchParams.get("CMCD"))?void 0:c.split(","))?d:[]).filter(a=>a.startsWith("sid")||a.startsWith("cid")).join(",");e.searchParams.set("CMCD",f),a.open("GET",e)},capLevelController:cu,...{backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},...i,...j,...h});return k.on(bH.Events.MANIFEST_PARSED,async function(a,c){var d,e;let f=null==(d=c.sessionData)?void 0:d["com.apple.hls.chapters"];(null!=f&&f.URI||null!=f&&f.VALUE.toLocaleLowerCase().startsWith("http"))&&cF(null!=(e=null==f?void 0:f.URI)?e:null==f?void 0:f.VALUE,b)}),k}})(a,b),l=(({preload:a,src:b},c,d)=>{let e=a=>{null!=a&&["","none","metadata","auto"].includes(a)?c.setAttribute("preload",a):c.removeAttribute("preload")};if(!d)return e(a),e;let f=!1,g=!1,h=d.config.maxBufferLength,i=d.config.maxBufferSize,j=a=>{e(a);let b=null!=a?a:c.preload;g||"none"===b||("metadata"===b?(d.config.maxBufferLength=1,d.config.maxBufferSize=1):(d.config.maxBufferLength=h,d.config.maxBufferSize=i),k())},k=()=>{!f&&b&&(f=!0,d.loadSource(b))};return bZ(c,"play",()=>{g=!0,d.config.maxBufferLength=h,d.config.maxBufferSize=i,k()},{once:!0}),j(a),j})(a,b,k);null!=a&&a.muxDataKeepSession&&null!=b&&b.mux&&!b.mux.deleted?k&&b.mux.addHLSJS({hlsjs:k,Hls:k?bH:void 0}):((a,b,c)=>{var d;let{envKey:e,disableTracking:f,muxDataSDK:g=bF,muxDataSDKOptions:h={}}=a,i=c4(a);if(!f&&(e||i)){let{playerInitTime:f,playerSoftwareName:i,playerSoftwareVersion:j,beaconCollectionDomain:k,debug:l,disableCookies:m}=a,n={...a.metadata,video_title:(null==(d=null==a?void 0:a.metadata)?void 0:d.video_title)||void 0};g.monitor(b,{debug:l,beaconCollectionDomain:k,hlsjs:c,Hls:c?bH:void 0,automaticErrorTracking:!1,errorTranslator:b=>"string"!=typeof b.player_error_code&&("function"==typeof a.errorTranslator?a.errorTranslator(b):b),disableCookies:m,...h,data:{...e?{env_key:e}:{},player_software_name:i,player_software:i,player_software_version:j,player_init_time:f,...n}})}})(a,b,k),((a,b,c)=>{var d,e;let f=cZ(a,b),{src:g,customDomain:h=cK}=a,i=()=>{b.ended||!cX(b,c)||(cW(b,c)?b.currentTime=b.buffered.end(b.buffered.length-1):b.dispatchEvent(new Event("ended")))},j,k,l=()=>{let a=cT(b),c,d;a.length>0&&(c=a.start(0),d=a.end(0)),(k!==d||j!==c)&&b.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),j=c,k=d};if(bZ(b,"durationchange",l),b&&f){let c=b_(a);if("string"==typeof g){if(g.endsWith(".mp4")&&g.includes(h)){let a=cQ(g);cF(new URL(`https://stream.${h}/${a}/metadata.json`).toString(),b)}let f=()=>{if(cS(b)!==bP.LIVE||Number.isFinite(b.duration))return;let a=setInterval(l,1e3);b.addEventListener("teardown",()=>{clearInterval(a)},{once:!0}),bZ(b,"durationchange",()=>{Number.isFinite(b.duration)&&clearInterval(a)})},i=async()=>cE(g,b,c).then(f).catch(c=>{if(c instanceof Response){let d=cs(c,bI.VIDEO,a);if(d)return void c7(b,d)}});if("none"===b.preload){let a=()=>{i(),b.removeEventListener("loadedmetadata",c)},c=()=>{i(),b.removeEventListener("play",a)};bZ(b,"play",a,{once:!0}),bZ(b,"loadedmetadata",c,{once:!0})}else i();null!=(d=a.tokens)&&d.drm?((a,b)=>{bZ(b,"encrypted",async c=>{try{let d=c.initDataType;if("skd"!==d)return void console.error(`Received unexpected initialization data type "${d}"`);if(!b.mediaKeys){let c=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[d],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(b=>{var c;return null==(c=a.drmTypeCb)||c.call(a,cB.FAIRPLAY),b}).catch(()=>{let a=b6("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),c=new bM(a,bM.MEDIA_ERR_ENCRYPTED,!0);c.errorCategory=bI.DRM,c.muxCode=bJ.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,c7(b,c)});if(!c)return;let e=await c.createMediaKeys();try{let b=await c0(c3(a,"fairplay")).catch(b=>{if(b instanceof Response){let c=cs(b,bI.DRM,a);return console.error("mediaError",null==c?void 0:c.message,null==c?void 0:c.context),c?Promise.reject(c):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(b)});await e.setServerCertificate(b).catch(()=>{let a=b6("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),b=new bM(a,bM.MEDIA_ERR_ENCRYPTED,!0);return b.errorCategory=bI.DRM,b.muxCode=bJ.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(b)})}catch(a){c7(b,a);return}await b.setMediaKeys(e)}let e=c.initData;if(null==e)return void console.error(`Could not start encrypted playback due to missing initData in ${c.type} event`);let f=b.mediaKeys.createSession();f.addEventListener("keystatuseschange",()=>{f.keyStatuses.forEach(a=>{let c;if("internal-error"===a){let a=b6("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");(c=new bM(a,bM.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=bI.DRM,c.muxCode=bJ.ENCRYPTED_CDM_ERROR}else if("output-restricted"===a||"output-downscaled"===a){let a=b6("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");(c=new bM(a,bM.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=bI.DRM,c.muxCode=bJ.ENCRYPTED_OUTPUT_RESTRICTED}c&&c7(b,c)})});let g=await Promise.all([f.generateRequest(d,e).catch(()=>{let a=b6("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),c=new bM(a,bM.MEDIA_ERR_ENCRYPTED,!0);c.errorCategory=bI.DRM,c.muxCode=bJ.ENCRYPTED_GENERATE_REQUEST_FAILED,c7(b,c)}),new Promise(a=>{f.addEventListener("message",b=>{a(b.message)},{once:!0})})]).then(([,a])=>a),h=await c1(g,c2(a,"fairplay")).catch(b=>{if(b instanceof Response){let c=cs(b,bI.DRM,a);return console.error("mediaError",null==c?void 0:c.message,null==c?void 0:c.context),c?Promise.reject(c):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(b)});await f.update(h).catch(()=>{let a=b6("Failed to update DRM license. This may be an issue with the player or your protected content."),b=new bM(a,bM.MEDIA_ERR_ENCRYPTED,!0);return b.errorCategory=bI.DRM,b.muxCode=bJ.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(b)})}catch(a){c7(b,a);return}})})(a,b):bZ(b,"encrypted",()=>{let a=new bM(b6("Attempting to play DRM-protected content without providing a DRM token."),bM.MEDIA_ERR_ENCRYPTED,!0);a.errorCategory=bI.DRM,a.muxCode=bJ.ENCRYPTED_MISSING_TOKEN,c7(b,a)},{once:!0}),b.setAttribute("src",g),a.startTime&&((null!=(e=cJ.get(b))?e:{}).startTime=a.startTime,b.addEventListener("durationchange",c5,{once:!0}))}else b.removeAttribute("src");b.addEventListener("error",c6),b.addEventListener("error",c8),b.addEventListener("emptied",()=>{b.querySelectorAll("track[data-removeondestroy]").forEach(a=>{a.remove()})},{once:!0}),bZ(b,"pause",i),bZ(b,"seeked",i),bZ(b,"play",()=>{b.ended||cV(b.currentTime,b.duration)&&(b.currentTime=b.seekable.length?b.seekable.start(0):0)})}else c&&g?(c.once(bH.Events.LEVEL_LOADED,(a,d)=>{((a,b,c)=>{var d,e,f,g,h,i,j,k;let{streamType:l,targetLiveWindow:m,liveEdgeStartOffset:n,lowLatency:o}=(a=>{var b;let c=a.type,d=b0(c),e=b1(c),f,g=!!(null!=(b=a.partList)&&b.length);return d===bP.LIVE&&(f=g?2*a.partTarget:3*a.targetduration),{streamType:d,targetLiveWindow:e,liveEdgeStartOffset:f,lowLatency:g}})(a);if(l===bP.LIVE){o?(c.config.backBufferLength=null!=(d=c.userConfig.backBufferLength)?d:4,c.config.maxFragLookUpTolerance=null!=(e=c.userConfig.maxFragLookUpTolerance)?e:.001,c.config.abrBandWidthUpFactor=null!=(f=c.userConfig.abrBandWidthUpFactor)?f:c.config.abrBandWidthFactor):c.config.backBufferLength=null!=(g=c.userConfig.backBufferLength)?g:8;let a=Object.freeze({get length(){return b.seekable.length},start:a=>b.seekable.start(a),end(a){var d;return a>this.length||a<0||Number.isFinite(b.duration)?b.seekable.end(a):null!=(d=c.liveSyncPosition)?d:b.seekable.end(a)}});(null!=(h=cJ.get(b))?h:{}).seekable=a}(null!=(i=cJ.get(b))?i:{}).liveEdgeStartOffset=n,(null!=(j=cJ.get(b))?j:{}).targetLiveWindow=m,b.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(k=cJ.get(b))?k:{}).streamType=l,b.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(d.details,b,c),l(),cS(b)!==bP.LIVE||Number.isFinite(b.duration)||(c.on(bH.Events.LEVEL_UPDATED,l),bZ(b,"durationchange",()=>{Number.isFinite(b.duration)&&c.off(bH.Events.LEVELS_UPDATED,l)}))}),c.on(bH.Events.ERROR,(d,e)=>{var f,g;let h=dl(e,a);if(h.muxCode===bJ.NETWORK_NOT_READY){let a=null!=(f=cJ.get(b))?f:{},d=null!=(g=a.retryCount)?g:0;if(d<6){let f=0===d?5e3:6e4,g=new bM(`Retrying in ${f/1e3} seconds...`,h.code,h.fatal);Object.assign(g,h),c7(b,g),setTimeout(()=>{a.retryCount=d+1,"manifestLoadError"===e.details&&e.url&&c.loadSource(e.url)},f);return}{a.retryCount=0;let c=new bM('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',h.code,h.fatal);Object.assign(c,h),c7(b,c);return}}c7(b,h)}),c.on(bH.Events.MANIFEST_LOADED,()=>{let a=cJ.get(b);a&&a.error&&(a.error=null,a.retryCount=0,b.dispatchEvent(new Event("emptied")),b.dispatchEvent(new Event("loadstart")))}),b.addEventListener("error",c8),bZ(b,"waiting",i),function(a,b){var c;if(!("videoTracks"in a))return;let d=new WeakMap;b.on(bH.Events.MANIFEST_PARSED,function(b,c){f();let e=a.addVideoTrack("main");for(let[a,b]of(e.selected=!0,c.levels.entries())){let c=e.addRendition(b.url[0],b.width,b.height,b.videoCodec,b.bitrate);d.set(b,`${a}`),c.id=`${a}`}}),b.on(bH.Events.AUDIO_TRACKS_UPDATED,function(b,c){for(let b of(e(),c.audioTracks)){let c=b.default?"main":"alternative",d=a.addAudioTrack(c,b.name,b.lang);d.id=`${b.id}`,b.default&&(d.enabled=!0)}}),a.audioTracks.addEventListener("change",()=>{var c;let d=+(null==(c=[...a.audioTracks].find(a=>a.enabled))?void 0:c.id),e=b.audioTracks.map(a=>a.id);d!=b.audioTrack&&e.includes(d)&&(b.audioTrack=d)}),b.on(bH.Events.LEVELS_UPDATED,function(b,c){var e;let f=a.videoTracks[null!=(e=a.videoTracks.selectedIndex)?e:0];if(!f)return;let g=c.levels.map(a=>d.get(a));for(let b of a.videoRenditions)b.id&&!g.includes(b.id)&&f.removeRendition(b)}),null==(c=a.videoRenditions)||c.addEventListener("change",a=>{let c=a.target.selectedIndex;c!=b.nextLevel&&(b.nextLevel=c)});let e=()=>{for(let b of a.audioTracks)a.removeAudioTrack(b)},f=()=>{(()=>{for(let b of a.videoTracks)a.removeVideoTrack(b)})(),e()};b.once(bH.Events.DESTROYING,f)}(a,c),function(a,b){b.on(bH.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(c,{tracks:d})=>{d.forEach(c=>{var d,e;let f=null!=(d=c.subtitleTrack)?d:c.closedCaptions,g=b.subtitleTracks.findIndex(({lang:a,name:b,type:d})=>a==(null==f?void 0:f.lang)&&b===c.label&&d.toLowerCase()===c.kind),h=(null!=(e=c._id)?e:c.default)?"default":`${c.kind}${g}`;cc(a,c.kind,c.label,null==f?void 0:f.lang,h,c.default)})});let c=()=>{if(!b.subtitleTracks.length)return;let c=Array.from(a.textTracks).find(a=>a.id&&"showing"===a.mode&&["subtitles","captions"].includes(a.kind));if(!c)return;let d=b.subtitleTracks[b.subtitleTrack],e=d?d.default?"default":`${b.subtitleTracks[b.subtitleTrack].type.toLowerCase()}${b.subtitleTrack}`:void 0;if(b.subtitleTrack<0||(null==c?void 0:c.id)!==e){let a=b.subtitleTracks.findIndex(({lang:a,name:b,type:d,default:e})=>"default"===c.id&&e||a==c.language&&b===c.label&&d.toLowerCase()===c.kind);b.subtitleTrack=a}(null==c?void 0:c.id)===e&&c.cues&&Array.from(c.cues).forEach(a=>{c.addCue(a)})};a.textTracks.addEventListener("change",c),b.on(bH.Events.CUES_PARSED,(b,{track:c,cues:d})=>{let e=a.textTracks.getTrackById(c);if(!e)return;let f="disabled"===e.mode;f&&(e.mode="hidden"),d.forEach(a=>{var b;null!=(b=e.cues)&&b.getCueById(a.id)||e.addCue(a)}),f&&(e.mode="disabled")}),b.once(bH.Events.DESTROYING,()=>{a.textTracks.removeEventListener("change",c),a.querySelectorAll("track[data-removeondestroy]").forEach(a=>{a.remove()})});let d=()=>{Array.from(a.textTracks).forEach(b=>{var c,d;if(!["subtitles","caption"].includes(b.kind)&&("thumbnails"===b.label||"chapters"===b.kind)){if(!(null!=(c=b.cues)&&c.length)){let c="track";b.kind&&(c+=`[kind="${b.kind}"]`),b.label&&(c+=`[label="${b.label}"]`);let e=a.querySelector(c),f=null!=(d=null==e?void 0:e.getAttribute("src"))?d:"";null==e||e.removeAttribute("src"),setTimeout(()=>{null==e||e.setAttribute("src",f)},0)}"hidden"!==b.mode&&(b.mode="hidden")}})};b.once(bH.Events.MANIFEST_LOADED,d),b.once(bH.Events.MEDIA_ATTACHED,d)}(b,c),c.attachMedia(b)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")})(a,b,k),ck(b),cq(b);let m=((a,b,c)=>{let{autoplay:d}=a,e=!1,f=!1,g=b9(d)?d:!!d,h=()=>{e||bZ(b,"playing",()=>{e=!0},{once:!0})};if(h(),bZ(b,"loadstart",()=>{e=!1,h(),ca(b,g)},{once:!0}),bZ(b,"loadstart",()=>{c||(f=a.streamType&&a.streamType!==bP.UNKNOWN?a.streamType===bP.LIVE:!Number.isFinite(b.duration)),ca(b,g)},{once:!0}),c&&c.once(bH.Events.LEVEL_LOADED,(b,c)=>{var d;f=a.streamType&&a.streamType!==bP.UNKNOWN?a.streamType===bP.LIVE:null!=(d=c.details.live)&&d}),!g){let d=()=>{!f||Number.isFinite(a.startTime)||(null!=c&&c.liveSyncPosition?b.currentTime=c.liveSyncPosition:Number.isFinite(b.seekable.end(0))&&(b.currentTime=b.seekable.end(0)))};c&&bZ(b,"play",()=>{"metadata"===b.preload?c.once(bH.Events.LEVEL_UPDATED,d):d()},{once:!0})}return a=>{e||ca(b,g=b9(a)?a:!!a)}})(a,b,k);return{engine:k,setAutoplay:m,setPreload:l}})(this,this.nativeEl,dq(this,c9)))}unload(){cY(this.nativeEl,dq(this,c9),this),ds(this,c9,void 0)}attributeChangedCallback(a,b,c){var d,e;switch(dm.lB.observedAttributes.includes(a)&&!["src","autoplay","preload"].includes(a)&&super.attributeChangedCallback(a,b,c),a){case dw.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=c?c:void 0;break;case dw.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=c?c:void 0;break;case"src":{let a=!!b,d=!!c;!a&&d?dt(this,dj,dk).call(this):a&&!d?this.unload():a&&d&&(this.unload(),dt(this,dj,dk).call(this));break}case"autoplay":if(c===b)break;null==(d=dq(this,c9))||d.setAutoplay(this.autoplay);break;case"preload":if(c===b)break;null==(e=dq(this,c9))||e.setPreload(c);break;case dw.PLAYBACK_ID:this.src=cO(this);break;case dw.DEBUG:{let a=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=a);break}case dw.METADATA_URL:c&&fetch(c).then(a=>a.json()).then(a=>this.metadata=a).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${c}!`));break;case dw.STREAM_TYPE:(null==c||c!==b)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case dw.TARGET_LIVE_WINDOW:(null==c||c!==b)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case dw.LOGO:(null==c||c!==b)&&this.updateLogo()}}updateLogo(){if(!this.shadowRoot)return;let a=this.shadowRoot.querySelector('slot[name="logo"]');a&&(a.innerHTML=this.constructor.getLogoHTML(dq(this,di)||this.logo))}connectedCallback(){var a;null==(a=super.connectedCallback)||a.call(this),this.nativeEl&&this.src&&!dq(this,c9)&&dt(this,dj,dk).call(this)}disconnectedCallback(){this.unload()}handleEvent(a){a.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(a.type,{composed:!0,detail:a.detail}))}};c9=new WeakMap,da=new WeakMap,db=new WeakMap,dc=new WeakMap,dd=new WeakMap,de=new WeakMap,df=new WeakMap,dg=new WeakMap,dh=new WeakMap,di=new WeakMap,dj=new WeakSet,dk=async function(){dq(this,da)||(await ds(this,da,Promise.resolve()),ds(this,da,null),this.load())};let dA=new WeakMap;class dB extends Error{}class dC extends Error{}let dD=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function dE(){return globalThis.cast?.framework?.CastContext.getInstance()}function dF(){return dE()?.getCurrentSession()}function dG(){return dF()?.getSessionObj().media[0]}function dH(a){return dE().setOptions({...dI(),...a})}function dI(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function dJ(a){try{let b=(await fetch(a,{method:"HEAD"})).headers.get("Content-Type");return dD.some(a=>b===a)}catch(a){return console.error("Error while trying to get the Content-Type of the manifest",a),!1}}async function dK(a){try{let c=await (await fetch(a)).text(),d=c,e=function(a){let b=a.split("\n"),c=[];for(let a=0;a<b.length;a++)if(b[a].trim().startsWith("#EXT-X-STREAM-INF")){let d=b[a+1]?b[a+1].trim():"";d&&!d.startsWith("#")&&c.push(d)}return c}(c);if(e.length>0){let b=new URL(e[0],a).toString();d=await (await fetch(b)).text()}var b=d.split("\n").find(a=>!a.trim().startsWith("#")&&""!==a.trim());if(!b)return;let f=b.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return f?f[1]:null}catch(a){console.error("Error while trying to parse the manifest playlist",a);return}}let dL=new(globalThis.WeakRef?class extends Set{add(a){super.add(new WeakRef(a))}forEach(a){super.forEach(b=>{let c=b.deref();c&&a(c)})}}:Set),dM=new WeakSet;!function(a){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?a():customElements.whenDefined("google-cast-button").then(a):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(a)}}(()=>{if(!globalThis.chrome?.cast?.isAvailable)return void console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);d||(d=cast.framework,dE().addEventListener(d.CastContextEventType.CAST_STATE_CHANGED,a=>{dL.forEach(b=>dA.get(b).onCastStateChanged?.(a))}),dE().addEventListener(d.CastContextEventType.SESSION_STATE_CHANGED,a=>{dL.forEach(b=>dA.get(b).onSessionStateChanged?.(a))}),dL.forEach(a=>dA.get(a).init?.()))});let dN=0;class dO extends EventTarget{#a;#b;#c;#d;#e="disconnected";#f=!1;#g=new Set;#h=new WeakMap;constructor(a){super(),this.#a=a,dL.add(this),dA.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#j(),onSessionStateChanged:()=>this.#k(),getCastPlayer:()=>this.#l}),this.#i()}get #l(){if(dM.has(this.#a))return this.#c}get state(){return this.#e}async watchAvailability(a){if(this.#a.disableRemotePlayback)throw new dB("disableRemotePlayback attribute is present.");return this.#h.set(a,++dN),this.#g.add(a),queueMicrotask(()=>a(this.#m())),dN}async cancelWatchAvailability(a){if(this.#a.disableRemotePlayback)throw new dB("disableRemotePlayback attribute is present.");a?this.#g.delete(a):this.#g.clear()}async prompt(){if(this.#a.disableRemotePlayback)throw new dB("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new dC("The RemotePlayback API is disabled on this platform.");let a=dM.has(this.#a);dM.add(this.#a),dH(this.#a.castOptions),Object.entries(this.#d).forEach(([a,b])=>{this.#c.controller.addEventListener(a,b)});try{await dE().requestSession()}catch(b){if(a||dM.delete(this.#a),"cancel"===b)return;throw Error(b)}dA.get(this.#a)?.loadOnPrompt?.()}#n(){dM.has(this.#a)&&(Object.entries(this.#d).forEach(([a,b])=>{this.#c.controller.removeEventListener(a,b)}),dM.delete(this.#a),this.#a.muted=this.#c.isMuted,this.#a.currentTime=this.#c.savedPlayerState.currentTime,!1===this.#c.savedPlayerState.isPaused&&this.#a.play())}#m(){let a=dE()?.getCastState();return a&&"NO_DEVICES_AVAILABLE"!==a}#j(){let a=dE().getCastState();if(dM.has(this.#a)&&"CONNECTING"===a&&(this.#e="connecting",this.dispatchEvent(new Event("connecting"))),!this.#f&&a?.includes("CONNECT"))for(let a of(this.#f=!0,this.#g))a(!0);else if(this.#f&&(!a||"NO_DEVICES_AVAILABLE"===a))for(let a of(this.#f=!1,this.#g))a(!1)}async #k(){let{SESSION_RESUMED:a}=d.SessionState;if(dE().getSessionState()===a&&this.#a.castSrc===dG()?.media.contentId){dM.add(this.#a),Object.entries(this.#d).forEach(([a,b])=>{this.#c.controller.addEventListener(a,b)});try{var b;await (b=new chrome.cast.media.GetStatusRequest,new Promise((a,c)=>{dG().getStatus(b,a,c)}))}catch(a){console.error(a)}this.#d[d.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#d[d.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){d&&!this.#b&&(this.#b=!0,dH(this.#a.castOptions),this.#a.textTracks.addEventListener("change",()=>this.#o()),this.#j(),this.#c=new d.RemotePlayer,new d.RemotePlayerController(this.#c),this.#d={[d.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:a})=>{!0===a?(this.#e="connected",this.dispatchEvent(new Event("connect"))):(this.#n(),this.#e="disconnected",this.dispatchEvent(new Event("disconnect")))},[d.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#a.dispatchEvent(new Event("durationchange"))},[d.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#a.dispatchEvent(new Event("volumechange"))},[d.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#a.dispatchEvent(new Event("volumechange"))},[d.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#l?.isMediaLoaded&&this.#a.dispatchEvent(new Event("timeupdate"))},[d.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#a.dispatchEvent(new Event("resize"))},[d.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#a.dispatchEvent(new Event(this.paused?"pause":"play"))},[d.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#l?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#a.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#l?.playerState]))},[d.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#l?.isMediaLoaded&&(await Promise.resolve(),this.#p())}})}#p(){this.#o()}async #o(){let a;if(!this.#l)return;let b=(this.#c.mediaInfo?.tracks??[]).filter(({type:a})=>a===chrome.cast.media.TrackType.TEXT),c=[...this.#a.textTracks].filter(({kind:a})=>"subtitles"===a||"captions"===a),d=b.map(({language:a,name:b,trackId:d})=>{let{mode:e}=c.find(c=>c.language===a&&c.label===b)??{};return!!e&&{mode:e,trackId:d}}).filter(Boolean),e=d.filter(({mode:a})=>"showing"!==a).map(({trackId:a})=>a),f=d.find(({mode:a})=>"showing"===a),g=dF()?.getSessionObj().media[0]?.activeTrackIds??[],h=g;if(g.length&&(h=h.filter(a=>!e.includes(a))),f?.trackId&&(h=[...h,f.trackId]),a=h=[...new Set(h)],!(g.length===a.length&&g.every(b=>a.includes(b))))try{let a=new chrome.cast.media.EditTracksInfoRequest(h);await new Promise((b,c)=>{dG().editTracksInfo(a,b,c)})}catch(a){console.error(a)}}}let dP=a=>class extends a{static observedAttributes=[...a.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#q={paused:!1};#r=dI();#s;#t;get remote(){return this.#t?this.#t:globalThis.chrome?(this.disableRemotePlayback||function(){let a="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${a}"]`))return;let b=document.createElement("script");b.src=a,document.head.append(b)}(),dA.set(this,{loadOnPrompt:()=>this.#u()}),this.#t=new dO(this)):super.remote}get #l(){return dA.get(this.remote)?.getCastPlayer?.()}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),"cast-receiver"===a&&c){this.#r.receiverApplicationId=c;return}if(this.#l)switch(a){case"cast-stream-type":case"cast-src":this.load()}}async #u(){this.#q.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(a){console.error(a)}}async load(){if(!this.#l)return super.load();let a=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);a.customData=this.castCustomData;let b=[...this.querySelectorAll("track")].filter(({kind:a,src:b})=>b&&("subtitles"===a||"captions"===a)),c=[],d=0;if(b.length&&(a.tracks=b.map(a=>{let b=++d;0===c.length&&"showing"===a.track.mode&&c.push(b);let e=new chrome.cast.media.Track(b,chrome.cast.media.TrackType.TEXT);return e.trackContentId=a.src,e.trackContentType="text/vtt",e.subtype="captions"===a.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,e.name=a.label,e.language=a.srclang,e})),"live"===this.castStreamType?a.streamType=chrome.cast.media.StreamType.LIVE:a.streamType=chrome.cast.media.StreamType.BUFFERED,a.metadata=new chrome.cast.media.GenericMediaMetadata,a.metadata.title=this.title,a.metadata.images=[{url:this.poster}],dJ(this.castSrc)){let b=await dK(this.castSrc);(b?.includes("m4s")||b?.includes("mp4"))&&(a.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,a.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4)}let e=new chrome.cast.media.LoadRequest(a);e.currentTime=super.currentTime??0,e.autoplay=!this.#q.paused,e.activeTrackIds=c,await dF()?.loadMedia(e),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#l){this.#l.isPaused&&this.#l.controller?.playOrPause();return}return super.play()}pause(){if(this.#l){this.#l.isPaused||this.#l.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#r}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(a){this.castReceiver!=a&&this.setAttribute("cast-receiver",`${a}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(a){this.castSrc!=a&&this.setAttribute("cast-src",`${a}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(a){this.setAttribute("cast-content-type",`${a}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(a){this.setAttribute("cast-stream-type",`${a}`)}get castCustomData(){return this.#s}set castCustomData(a){let b=typeof a;if(!["object","undefined"].includes(b))return void console.error(`castCustomData must be nullish or an object but value was of type ${b}`);this.#s=a}get readyState(){if(this.#l)switch(this.#l.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#l?this.#l.isPaused:super.paused}get muted(){return this.#l?this.#l?.isMuted:super.muted}set muted(a){if(this.#l){(a&&!this.#l.isMuted||!a&&this.#l.isMuted)&&this.#l.controller?.muteOrUnmute();return}super.muted=a}get volume(){return this.#l?this.#l?.volumeLevel??1:super.volume}set volume(a){if(this.#l){this.#l.volumeLevel=+a,this.#l.controller?.setVolumeLevel();return}super.volume=a}get duration(){return this.#l&&this.#l?.isMediaLoaded?this.#l?.duration??NaN:super.duration}get currentTime(){return this.#l&&this.#l?.isMediaLoaded?this.#l?.currentTime??0:super.currentTime}set currentTime(a){if(this.#l){this.#l.currentTime=a,this.#l.controller?.seek();return}super.currentTime=a}};var dQ=c(88952),dR=a=>{throw TypeError(a)},dS=(a,b,c)=>b.has(a)||dR("Cannot "+c),dT=(a,b,c)=>(dS(a,b,"read from private field"),c?c.call(a):b.get(a)),dU=(a,b,c)=>b.has(a)?dR("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),dV=(a,b,c,d)=>(dS(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),dW=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};if("undefined"==typeof DocumentFragment){class a extends dW{}globalThis.DocumentFragment=a}var dX,dY=class extends dW{},dZ=class{constructor(a,b={}){dU(this,dX),dV(this,dX,null==b?void 0:b.detail)}get detail(){return dT(this,dX)}initCustomEvent(){}};dX=new WeakMap;var d$={document:{createElement:function(a,b){return new dY}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(dY)},CustomEvent:dZ,EventTarget:dW,HTMLElement:dY,HTMLVideoElement:class extends dW{}},d_="undefined"==typeof window||void 0===globalThis.customElements,d0=d_?d$:globalThis;d_?d$.document:globalThis.document;var d1,d2=class extends dP((0,dQ.u6)(dz)){constructor(){super(...arguments),dU(this,d1)}get autoplay(){let a=this.getAttribute("autoplay");return null!==a&&(""===a||a)}set autoplay(a){a!==this.autoplay&&(a?this.setAttribute("autoplay","string"==typeof a?a:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var a;return null!=(a=dT(this,d1))?a:this.muxCastCustomData}set castCustomData(a){dV(this,d1,a)}};d1=new WeakMap,d0.customElements.get("mux-video")||(d0.customElements.define("mux-video",d2),d0.MuxVideoElement=d2);let d3={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},d4={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},d5={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},d6=Object.entries(d5),d7=d6.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{}),d8=d6.reduce((a,[b,c])=>(a[b]=c.toLowerCase(),a),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(d8).reduce((a,[b,c])=>{let d=d7[b];return d&&(a[c]=d),a},{userinactivechange:"userinactive"});let d9=Object.entries(d7).reduce((a,[b,c])=>{let d=d8[b];return d&&(a[c]=d),a},{userinactive:"userinactivechange"}),ea={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},eb={DISABLED:"disabled",SHOWING:"showing"},ec={MOUSE:"mouse",TOUCH:"touch"},ed={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ee={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ef={FULLSCREEN:"fullscreen"};function eg(a){if(a){let{id:b,width:c,height:d}=a;return[b,c,d].filter(a=>null!=a).join(":")}}function eh(a){if(a){let[b,c,d]=a.split(":");return{id:b,width:+c,height:+d}}}function ei(a){if(a){let{id:b,kind:c,language:d,label:e}=a;return[b,c,d,e].filter(a=>null!=a).join(":")}}function ej(a){if(a){let[b,c,d,e]=a.split(":");return{id:b,kind:c,language:d,label:e}}}function ek(a){return"number"==typeof a&&!Number.isNaN(a)&&Number.isFinite(a)}function el(a){return"string"==typeof a&&!isNaN(a)&&!isNaN(parseFloat(a))}let em=a=>new Promise(b=>setTimeout(b,a)),en=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],eo=a=>{if(!ek(a))return"";let b=Math.abs(a),c=b!==a,d=new Date(0,0,0,0,0,b,0),e=[d.getHours(),d.getMinutes(),d.getSeconds()].map((a,b)=>a&&((a,b)=>{let c=1===a?en[b].singular:en[b].plural;return`${a} ${c}`})(a,b)).filter(a=>a).join(", ");return`${e}${c?" remaining":""}`};function ep(a,b){let c=!1;a<0&&(c=!0,a=0-a);let d=Math.floor((a=a<0?0:a)%60),e=Math.floor(a/60%60),f=Math.floor(a/3600),g=Math.floor(b/60%60),h=Math.floor(b/3600);return(isNaN(a)||a===1/0)&&(f=e=d="0"),e=(((f=f>0||h>0?f+":":"")||g>=10)&&e<10?"0"+e:e)+":",(c?"-":"")+f+e+(d=d<10?"0"+d:d)}Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let eq={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},er=(null==(jD=globalThis.navigator)?void 0:jD.language)||"en",es=(a,b={})=>(a=>{var b,c,d;let[e]=er.split("-");return(null==(b=eq[er])?void 0:b[a])||(null==(c=eq[e])?void 0:c[a])||(null==(d=eq.en)?void 0:d[a])||a})(a).replace(/\{(\w+)\}/g,(a,c)=>c in b?String(b[c]):`{${c}}`);class et{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class eu extends et{}class ev extends eu{constructor(){super(...arguments),this.role=null}}class ew{observe(){}unobserve(){}disconnect(){}}let ex={createElement:function(){return new ey.HTMLElement},createElementNS:function(){return new ey.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:a=>!1},ey={ResizeObserver:ew,document:ex,Node:eu,Element:ev,HTMLElement:class extends ev{constructor(){super(...arguments),this.innerHTML=""}get content(){return new ey.DocumentFragment}},DocumentFragment:class extends et{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:a=>null,setItem(a,b){},removeItem(a){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:a=>({matches:!1,media:a}),DOMParser:class{parseFromString(a,b){return{body:{textContent:a}}}}},ez="undefined"==typeof window||void 0===window.customElements,eA=Object.keys(ey).every(a=>a in globalThis),eB=ez&&!eA?ey:globalThis,eC=ez&&!eA?ex:globalThis.document,eD=new WeakMap,eE=a=>{let b=eD.get(a);return b||eD.set(a,b=new Set),b},eF=new eB.ResizeObserver(a=>{for(let b of a)for(let a of eE(b.target))a(b)});function eG(a,b){eE(a).add(b),eF.observe(a)}function eH(a,b){let c=eE(a);c.delete(b),c.size||eF.unobserve(a)}function eI(a){let b={};for(let c of a)b[c.name]=c.value;return b}function eJ(a){var b;return null!=(b=eK(a))?b:eO(a,"media-controller")}function eK(a){var b;let{MEDIA_CONTROLLER:c}=d4,d=a.getAttribute(c);if(d)return null==(b=eQ(a))?void 0:b.getElementById(d)}let eL=(a,b,c=".value")=>{let d=a.querySelector(c);d&&(d.textContent=b)},eM=(a,b)=>((a,b)=>{let c=`slot[name="${b}"]`,d=a.shadowRoot.querySelector(c);return d?d.children:[]})(a,b)[0],eN=(a,b)=>!!a&&!!b&&(null!=a&&!!a.contains(b)||eN(a,b.getRootNode().host)),eO=(a,b)=>{if(!a)return null;let c=a.closest(b);return c||eO(a.getRootNode().host,b)};function eP(a=document){var b;let c=null==a?void 0:a.activeElement;return c?null!=(b=eP(c.shadowRoot))?b:c:null}function eQ(a){var b;let c=null==(b=null==a?void 0:a.getRootNode)?void 0:b.call(a);return c instanceof ShadowRoot||c instanceof Document?c:null}function eR(a,{depth:b=3,checkOpacity:c=!0,checkVisibilityCSS:d=!0}={}){if(a.checkVisibility)return a.checkVisibility({checkOpacity:c,checkVisibilityCSS:d});let e=a;for(;e&&b>0;){let a=getComputedStyle(e);if(c&&"0"===a.opacity||d&&"hidden"===a.visibility||"none"===a.display)return!1;e=e.parentElement,b--}return!0}function eS(a,b){let c=function(a,b){var c,d;let e;for(e of null!=(c=a.querySelectorAll("style:not([media])"))?c:[]){let a;try{a=null==(d=e.sheet)?void 0:d.cssRules}catch{continue}for(let c of null!=a?a:[])if(b(c.selectorText))return c}}(a,a=>a===b);return c||eT(a,b)}function eT(a,b){var c,d;let e=null!=(c=a.querySelectorAll("style:not([media])"))?c:[],f=null==e?void 0:e[e.length-1];return(null==f?void 0:f.sheet)?(null==f||f.sheet.insertRule(`${b}{}`,f.sheet.cssRules.length),null==(d=f.sheet.cssRules)?void 0:d[f.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",a),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function eU(a,b,c=NaN){let d=a.getAttribute(b);return null!=d?+d:c}function eV(a,b,c){let d=+c;if(null==c||Number.isNaN(d)){a.hasAttribute(b)&&a.removeAttribute(b);return}eU(a,b,void 0)!==d&&a.setAttribute(b,`${d}`)}function eW(a,b){return a.hasAttribute(b)}function eX(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}eW(a,b)!=c&&a.toggleAttribute(b,c)}function eY(a,b,c=null){var d;return null!=(d=a.getAttribute(b))?d:c}function eZ(a,b,c){if(null==c){a.hasAttribute(b)&&a.removeAttribute(b);return}let d=`${c}`;eY(a,b,void 0)!==d&&a.setAttribute(b,d)}var e$=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},e_=(a,b,c)=>(e$(a,b,"read from private field"),c?c.call(a):b.get(a)),e0=(a,b,c,d)=>(e$(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class e1 extends eB.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,jE,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[d4.MEDIA_CONTROLLER,d7.MEDIA_PAUSED]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===d4.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=e_(this,jE))?void 0:d.unassociateElement)||e.call(d,this),e0(this,jE,null)),c&&this.isConnected&&(e0(this,jE,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=e_(this,jE))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c,d;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),e0(this,jE,function(a){var b;let c=a.getAttribute(d4.MEDIA_CONTROLLER);return c?null==(b=a.getRootNode())?void 0:b.getElementById(c):eO(a,"media-controller")}(this)),this.getAttribute(d4.MEDIA_CONTROLLER)&&(null==(b=null==(a=e_(this,jE))?void 0:a.associateElement)||b.call(a,this)),null==(c=e_(this,jE))||c.addEventListener("pointerdown",this),null==(d=e_(this,jE))||d.addEventListener("click",this)}disconnectedCallback(){var a,b,c,d;this.getAttribute(d4.MEDIA_CONTROLLER)&&(null==(b=null==(a=e_(this,jE))?void 0:a.unassociateElement)||b.call(a,this)),null==(c=e_(this,jE))||c.removeEventListener("pointerdown",this),null==(d=e_(this,jE))||d.removeEventListener("click",this),e0(this,jE,null)}handleEvent(a){var b;let c=null==(b=a.composedPath())?void 0:b[0];if(["video","media-controller"].includes(null==c?void 0:c.localName)){if("pointerdown"===a.type)this._pointerType=a.pointerType;else if("click"===a.type){let{clientX:b,clientY:c}=a,{left:d,top:e,width:f,height:g}=this.getBoundingClientRect(),h=b-d,i=c-e;if(h<0||i<0||h>f||i>g||0===f&&0===g)return;let{pointerType:j=this._pointerType}=a;if(this._pointerType=void 0,j===ec.TOUCH)return void this.handleTap(a);if(j===ec.MOUSE)return void this.handleMouseClick(a)}}}get mediaPaused(){return eW(this,d7.MEDIA_PAUSED)}set mediaPaused(a){eX(this,d7.MEDIA_PAUSED,a)}handleTap(a){}handleMouseClick(a){let b=this.mediaPaused?d3.MEDIA_PLAY_REQUEST:d3.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new eB.CustomEvent(b,{composed:!0,bubbles:!0}))}}jE=new WeakMap,e1.shadowRootOptions={mode:"open"},e1.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},eB.customElements.get("media-gesture-receiver")||eB.customElements.define("media-gesture-receiver",e1);var e2=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},e3=(a,b,c)=>(e2(a,b,"read from private field"),c?c.call(a):b.get(a)),e4=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},e5=(a,b,c,d)=>(e2(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),e6=(a,b,c)=>(e2(a,b,"access private method"),c);let e7={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},e8=Object.values(d7);function e9(a,b){var c,d,e;if(!a.isConnected)return;let f=Object.fromEntries((null!=(c=a.getAttribute(e7.BREAKPOINTS))?c:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(a=>a.split(":"))),g=(d=f,e=b,Object.keys(d).filter(a=>e>=parseInt(d[a]))),h=!1;if(Object.keys(f).forEach(b=>{if(g.includes(b)){a.hasAttribute(`breakpoint${b}`)||(a.setAttribute(`breakpoint${b}`,""),h=!0);return}a.hasAttribute(`breakpoint${b}`)&&(a.removeAttribute(`breakpoint${b}`),h=!0)}),h){let b=new CustomEvent(d8.BREAKPOINTS_CHANGE,{detail:g});a.dispatchEvent(b)}a.breakpointsComputed||(a.breakpointsComputed=!0,a.dispatchEvent(new CustomEvent(d8.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class fa extends eB.HTMLElement{constructor(){if(super(),e4(this,jK),e4(this,jO),e4(this,jQ),e4(this,jS),e4(this,jU),e4(this,jW),e4(this,jF,0),e4(this,jG,null),e4(this,jH,null),e4(this,jI,void 0),this.breakpointsComputed=!1,e4(this,jJ,new MutationObserver(e6(this,jK,jL).bind(this))),e4(this,jM,!1),e4(this,jN,a=>{e3(this,jM)||(setTimeout(()=>{!function(a){e9(a.target,a.contentRect.width)}(a),e5(this,jM,!1)},0),e5(this,jM,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}let a=this.querySelector(":scope > slot[slot=media]");a&&a.addEventListener("slotchange",()=>{if(!a.assignedElements({flatten:!0}).length){e3(this,jG)&&this.mediaUnsetCallback(e3(this,jG));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[e7.AUTOHIDE,e7.GESTURES_DISABLED].concat(e8).filter(a=>![d7.MEDIA_RENDITION_LIST,d7.MEDIA_AUDIO_TRACK_LIST,d7.MEDIA_CHAPTERS_CUES,d7.MEDIA_WIDTH,d7.MEDIA_HEIGHT,d7.MEDIA_ERROR,d7.MEDIA_ERROR_MESSAGE].includes(a))}attributeChangedCallback(a,b,c){a.toLowerCase()==e7.AUTOHIDE&&(this.autohide=c)}get media(){let a=this.querySelector(":scope > [slot=media]");return(null==a?void 0:a.nodeName)=="SLOT"&&(a=a.assignedElements({flatten:!0})[0]),a}async handleMediaUpdated(a){a&&(e5(this,jG,a),a.localName.includes("-")&&await eB.customElements.whenDefined(a.localName),this.mediaSetCallback(a))}connectedCallback(){var a;e3(this,jJ).observe(this,{childList:!0,subtree:!0}),eG(this,e3(this,jN));let b=null!=this.getAttribute(e7.AUDIO)?es("audio player"):es("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",b),this.handleMediaUpdated(this.media),this.setAttribute(e7.USER_INACTIVE,""),e9(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(a=eB.window)||a.addEventListener("mouseup",this)}disconnectedCallback(){var a;e3(this,jJ).disconnect(),eH(this,e3(this,jN)),this.media&&this.mediaUnsetCallback(this.media),null==(a=eB.window)||a.removeEventListener("mouseup",this)}mediaSetCallback(a){}mediaUnsetCallback(a){e5(this,jG,null)}handleEvent(a){switch(a.type){case"pointerdown":e5(this,jF,a.timeStamp);break;case"pointermove":e6(this,jO,jP).call(this,a);break;case"pointerup":e6(this,jQ,jR).call(this,a);break;case"mouseleave":e6(this,jS,jT).call(this);break;case"mouseup":this.removeAttribute(e7.KEYBOARD_CONTROL);break;case"keyup":e6(this,jW,jX).call(this),this.setAttribute(e7.KEYBOARD_CONTROL,"")}}set autohide(a){let b=Number(a);e5(this,jI,isNaN(b)?0:b)}get autohide(){return(void 0===e3(this,jI)?2:e3(this,jI)).toString()}get breakpoints(){return eY(this,e7.BREAKPOINTS)}set breakpoints(a){eZ(this,e7.BREAKPOINTS,a)}get audio(){return eW(this,e7.AUDIO)}set audio(a){eX(this,e7.AUDIO,a)}get gesturesDisabled(){return eW(this,e7.GESTURES_DISABLED)}set gesturesDisabled(a){eX(this,e7.GESTURES_DISABLED,a)}get keyboardControl(){return eW(this,e7.KEYBOARD_CONTROL)}set keyboardControl(a){eX(this,e7.KEYBOARD_CONTROL,a)}get noAutohide(){return eW(this,e7.NO_AUTOHIDE)}set noAutohide(a){eX(this,e7.NO_AUTOHIDE,a)}get autohideOverControls(){return eW(this,e7.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(a){eX(this,e7.AUTOHIDE_OVER_CONTROLS,a)}get userInteractive(){return eW(this,e7.USER_INACTIVE)}set userInteractive(a){eX(this,e7.USER_INACTIVE,a)}}jF=new WeakMap,jG=new WeakMap,jH=new WeakMap,jI=new WeakMap,jJ=new WeakMap,jK=new WeakSet,jL=function(a){let b=this.media;for(let c of a)if("childList"===c.type){for(let a of c.removedNodes){if("media"!=a.slot||c.target!=this)continue;let d=c.previousSibling&&c.previousSibling.previousElementSibling;if(d&&b){let b="media"!==d.slot;for(;null!==(d=d.previousSibling);)"media"==d.slot&&(b=!1);b&&this.mediaUnsetCallback(a)}else this.mediaUnsetCallback(a)}if(b)for(let a of c.addedNodes)a===b&&this.handleMediaUpdated(b)}},jM=new WeakMap,jN=new WeakMap,jO=new WeakSet,jP=function(a){if("mouse"!==a.pointerType&&a.timeStamp-e3(this,jF)<250)return;e6(this,jU,jV).call(this),clearTimeout(e3(this,jH));let b=this.hasAttribute(e7.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(a.target)||b)&&e6(this,jW,jX).call(this)},jQ=new WeakSet,jR=function(a){if("touch"===a.pointerType){let b=!this.hasAttribute(e7.USER_INACTIVE);[this,this.media].includes(a.target)&&b?e6(this,jS,jT).call(this):e6(this,jW,jX).call(this)}else a.composedPath().some(a=>["media-play-button","media-fullscreen-button"].includes(null==a?void 0:a.localName))&&e6(this,jW,jX).call(this)},jS=new WeakSet,jT=function(){if(0>e3(this,jI)||this.hasAttribute(e7.USER_INACTIVE))return;this.setAttribute(e7.USER_INACTIVE,"");let a=new eB.CustomEvent(d8.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(a)},jU=new WeakSet,jV=function(){if(!this.hasAttribute(e7.USER_INACTIVE))return;this.removeAttribute(e7.USER_INACTIVE);let a=new eB.CustomEvent(d8.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(a)},jW=new WeakSet,jX=function(){e6(this,jU,jV).call(this),clearTimeout(e3(this,jH));let a=parseInt(this.autohide);a<0||e5(this,jH,setTimeout(()=>{e6(this,jS,jT).call(this)},1e3*a))},fa.shadowRootOptions={mode:"open"},fa.getTemplateHTML=function(a){return`
    <style>
      
      :host([${d7.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${e7.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${e7.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${e7.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${e7.AUDIO}])[${e7.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${e7.AUDIO}])[${e7.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${e7.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${e7.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${e7.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${e7.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${e7.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${e7.USER_INACTIVE}]:not([${d7.MEDIA_PAUSED}]):not([${d7.MEDIA_IS_AIRPLAYING}]):not([${d7.MEDIA_IS_CASTING}]):not([${e7.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${e7.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${e7.USER_INACTIVE}]:not([${e7.NO_AUTOHIDE}]):not([${d7.MEDIA_PAUSED}]):not([${d7.MEDIA_IS_CASTING}]):not([${e7.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${e7.USER_INACTIVE}][${e7.AUTOHIDE_OVER_CONTROLS}]:not([${e7.NO_AUTOHIDE}]):not([${d7.MEDIA_PAUSED}]):not([${d7.MEDIA_IS_CASTING}]):not([${e7.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${e7.AUDIO}])[${d7.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${e1.shadowRootOptions.mode}">
          ${e1.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},eB.customElements.get("media-container")||eB.customElements.define("media-container",fa);var fb=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fc=(a,b,c)=>(fb(a,b,"read from private field"),c?c.call(a):b.get(a)),fd=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fe=(a,b,c,d)=>(fb(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class ff{constructor(a,b,{defaultValue:c}={defaultValue:void 0}){fd(this,j0),fd(this,jY,void 0),fd(this,jZ,void 0),fd(this,j$,void 0),fd(this,j_,new Set),fe(this,jY,a),fe(this,jZ,b),fe(this,j$,new Set(c))}[Symbol.iterator](){return fc(this,j0,j1).values()}get length(){return fc(this,j0,j1).size}get value(){var a;return null!=(a=[...fc(this,j0,j1)].join(" "))?a:""}set value(a){var b;a!==this.value&&(fe(this,j_,new Set),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return[...fc(this,j0,j1)][a]}values(){return fc(this,j0,j1).values()}forEach(a,b){fc(this,j0,j1).forEach(a,b)}add(...a){var b,c;a.forEach(a=>fc(this,j_).add(a)),(""!==this.value||(null==(b=fc(this,jY))?void 0:b.hasAttribute(`${fc(this,jZ)}`)))&&(null==(c=fc(this,jY))||c.setAttribute(`${fc(this,jZ)}`,`${this.value}`))}remove(...a){var b;a.forEach(a=>fc(this,j_).delete(a)),null==(b=fc(this,jY))||b.setAttribute(`${fc(this,jZ)}`,`${this.value}`)}contains(a){return fc(this,j0,j1).has(a)}toggle(a,b){if(void 0!==b)if(b)return this.add(a),!0;else return this.remove(a),!1;return this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){return this.remove(a),this.add(b),a===b}}jY=new WeakMap,jZ=new WeakMap,j$=new WeakMap,j_=new WeakMap,j0=new WeakSet,j1=function(){return fc(this,j_).size?fc(this,j_):fc(this,j$)};let fg=(a="")=>{let[b,c,d]=a.split(":"),e=d?decodeURIComponent(d):void 0;return{kind:"cc"===b?ea.CAPTIONS:ea.SUBTITLES,language:c,label:e}},fh=(a="",b={})=>((a="")=>a.split(/\s+/))(a).map(a=>{let c=fg(a);return{...b,...c}}),fi=a=>a?Array.isArray(a)?a.map(a=>"string"==typeof a?fg(a):a):"string"==typeof a?fh(a):[a]:[],fj=({kind:a,label:b,language:c}={kind:"subtitles"})=>b?`${"captions"===a?"cc":"sb"}:${c}:${encodeURIComponent(b)}`:c,fk=(a=[])=>Array.prototype.map.call(a,fj).join(" "),fl=a=>{let b=Object.entries(a).map(([a,b])=>c=>c[a]===b);return a=>b.every(b=>b(a))},fm=(a,b=[],c=[])=>{let d=fi(c).map(fl);Array.from(b).filter(a=>d.some(b=>b(a))).forEach(b=>{b.mode=a})},fn=(a,b=()=>!0)=>{if(!(null==a?void 0:a.textTracks))return[];let c="function"==typeof b?b:fl(b);return Array.from(a.textTracks).filter(c)},fo=a=>{var b;return!!(null==(b=a.mediaSubtitlesShowing)?void 0:b.length)||a.hasAttribute(d7.MEDIA_SUBTITLES_SHOWING)},fp="exitFullscreen"in eC?"exitFullscreen":"webkitExitFullscreen"in eC?"webkitExitFullscreen":"webkitCancelFullScreen"in eC?"webkitCancelFullScreen":void 0,fq="fullscreenElement"in eC?"fullscreenElement":"webkitFullscreenElement"in eC?"webkitFullscreenElement":void 0,fr="fullscreenEnabled"in eC?"fullscreenEnabled":"webkitFullscreenEnabled"in eC?"webkitFullscreenEnabled":void 0,fs=()=>{var a;return e||(e=null==(a=null==eC?void 0:eC.createElement)?void 0:a.call(eC,"video"))},ft=async(a=fs())=>{if(!a)return!1;let b=a.volume;a.volume=b/2+.1;let c=new AbortController,d=await Promise.race([fu(a,c.signal),fv(a,b)]);return c.abort(),d},fu=(a,b)=>new Promise(c=>{a.addEventListener("volumechange",()=>c(!0),{signal:b})}),fv=async(a,b)=>{for(let c=0;c<10;c++){if(a.volume===b)return!1;await em(10)}return a.volume!==b},fw=/.*Version\/.*Safari\/.*/.test(eB.navigator.userAgent),fx=(a=fs())=>(!eB.matchMedia("(display-mode: standalone)").matches||!fw)&&"function"==typeof(null==a?void 0:a.requestPictureInPicture),fy=(a=fs())=>(a=>{let{documentElement:b,media:c}=a;return!!(null==b?void 0:b[fr])||c&&"webkitSupportsFullscreen"in c})({documentElement:eC,media:a}),fz=fy(),fA=fx(),fB=!!eB.WebKitPlaybackTargetAvailabilityEvent,fC=!!eB.chrome,fD=a=>fn(a.media,a=>[ea.SUBTITLES,ea.CAPTIONS].includes(a.kind)).sort((a,b)=>a.kind>=b.kind?1:-1),fE=a=>fn(a.media,a=>a.mode===eb.SHOWING&&[ea.SUBTITLES,ea.CAPTIONS].includes(a.kind)),fF=(a,b)=>{let c=fD(a),d=fE(a),e=!!d.length;if(c.length){if(!1===b||e&&!0!==b)fm(eb.DISABLED,c,d);else if(!0===b||!e&&!1!==b){let b=c[0],{options:e}=a;if(!(null==e?void 0:e.noSubtitlesLangPref)){let a=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),d=a?[a,...globalThis.navigator.languages]:globalThis.navigator.languages,e=c.filter(a=>d.some(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))).sort((a,b)=>d.findIndex(b=>a.language.toLowerCase().startsWith(b.split("-")[0]))-d.findIndex(a=>b.language.toLowerCase().startsWith(a.split("-")[0])));e[0]&&(b=e[0])}let{language:f,label:g,kind:h}=b;fm(eb.DISABLED,c,d),fm(eb.SHOWING,c,[{language:f,label:g,kind:h}])}}},fG=(a,b)=>a===b||null!=a&&null!=b&&typeof a==typeof b&&(!!("number"==typeof a&&Number.isNaN(a)&&Number.isNaN(b))||"object"==typeof a&&(Array.isArray(a)?fH(a,b):Object.entries(a).every(([a,c])=>a in b&&fG(c,b[a])))),fH=(a,b)=>{let c=Array.isArray(a),d=Array.isArray(b);return c===d&&(!c&&!d||a.length===b.length&&a.every((a,c)=>fG(a,b[c])))},fI=Object.values(ee),fJ=ft().then(a=>f=a),fK=async(...a)=>{await Promise.all(a.filter(a=>a).map(async a=>{if(!("localName"in a&&a instanceof eB.HTMLElement))return;let b=a.localName;if(!b.includes("-"))return;let c=eB.customElements.get(b);c&&a instanceof c||(await eB.customElements.whenDefined(b),eB.customElements.upgrade(a))}))},fL=new eB.DOMParser,fM={mediaError:{get(a,b){let{media:c}=a;if((null==b?void 0:b.type)!=="playing")return null==c?void 0:c.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(a,b){var c;let{media:d}=a;if((null==b?void 0:b.type)!=="playing")return null==(c=null==d?void 0:d.error)?void 0:c.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(a,b){var c,d;let{media:e}=a;if((null==b?void 0:b.type)!=="playing")return null!=(d=null==(c=null==e?void 0:e.error)?void 0:c.message)?d:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoWidth)?b:0},mediaEvents:["resize"]},mediaHeight:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.videoHeight)?b:0},mediaEvents:["resize"]},mediaPaused:{get(a){var b;let{media:c}=a;return null==(b=null==c?void 0:c.paused)||b},set(a,b){var c;let{media:d}=b;d&&(a?d.pause():null==(c=d.play())||c.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(a,b){let{media:c}=a;return!!c&&(b?"playing"===b.type:!c.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.ended)&&b},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.playbackRate)?b:1},set(a,b){let{media:c}=b;c&&Number.isFinite(+a)&&(c.playbackRate=+a)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.muted)&&b},set(a,b){let{media:c}=b;if(c){try{eB.localStorage.setItem("media-chrome-pref-muted",a?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}c.muted=a}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noMutedPref:c}}=b,{media:d}=b;if(d&&!d.muted&&!c)try{let c="true"===eB.localStorage.getItem("media-chrome-pref-muted");fM.mediaMuted.set(c,b),a(c)}catch(a){console.debug("Error getting muted pref",a)}}]},mediaVolume:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.volume)?b:1},set(a,b){let{media:c}=b;if(c){try{null==a?eB.localStorage.removeItem("media-chrome-pref-volume"):eB.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+a)&&(c.volume=+a)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(a,b)=>{let{options:{noVolumePref:c}}=b;if(!c)try{let{media:c}=b;if(!c)return;let d=eB.localStorage.getItem("media-chrome-pref-volume");if(null==d)return;fM.mediaVolume.set(+d,b),a(+d)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(a){let{media:b}=a;return void 0===(null==b?void 0:b.volume)?"high":b.muted||0===b.volume?"off":b.volume<.5?"low":b.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(a){var b;let{media:c}=a;return null!=(b=null==c?void 0:c.currentTime)?b:0},set(a,b){let{media:c}=b;c&&ek(a)&&(c.currentTime=a)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(a){let{media:b,options:{defaultDuration:c}={}}=a;return c&&(!b||!b.duration||Number.isNaN(b.duration)||!Number.isFinite(b.duration))?c:Number.isFinite(null==b?void 0:b.duration)?b.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(a){let{media:b}=a;return(null==b?void 0:b.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(a){var b;let{media:c}=a;if(!(null==(b=null==c?void 0:c.seekable)?void 0:b.length))return;let d=c.seekable.start(0),e=c.seekable.end(c.seekable.length-1);if(d||e)return[Number(d.toFixed(3)),Number(e.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(a){var b;let{media:c}=a,d=null!=(b=null==c?void 0:c.buffered)?b:[];return Array.from(d).map((a,b)=>[Number(d.start(b).toFixed(3)),Number(d.end(b).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(a){let{media:b,options:{defaultStreamType:c}={}}=a,d=[ee.LIVE,ee.ON_DEMAND].includes(c)?c:void 0;if(!b)return d;let{streamType:e}=b;if(fI.includes(e))return e===ee.UNKNOWN?d:e;let f=b.duration;return f===1/0?ee.LIVE:Number.isFinite(f)?ee.ON_DEMAND:d},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(a){let{media:b}=a;if(!b)return NaN;let{targetLiveWindow:c}=b,d=fM.mediaStreamType.get(a);return(null==c||Number.isNaN(c))&&d===ee.LIVE?0:c},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(a){let{media:b,options:{liveEdgeOffset:c=10}={}}=a;if(!b)return!1;if("number"==typeof b.liveEdgeStart)return!Number.isNaN(b.liveEdgeStart)&&b.currentTime>=b.liveEdgeStart;if(fM.mediaStreamType.get(a)!==ee.LIVE)return!1;let d=b.seekable;if(!d)return!0;if(!d.length)return!1;let e=d.end(d.length-1)-c;return b.currentTime>=e},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:a=>fD(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:a=>fE(a).map(({kind:a,label:b,language:c})=>({kind:a,label:b,language:c})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c,d;let{media:e,options:f}=b;if(!e)return;let g=a=>{var c;f.defaultSubtitles&&(a&&![ea.CAPTIONS,ea.SUBTITLES].includes(null==(c=null==a?void 0:a.track)?void 0:c.kind)||fF(b,!0))};return e.addEventListener("loadstart",g),null==(c=e.textTracks)||c.addEventListener("addtrack",g),null==(d=e.textTracks)||d.addEventListener("removetrack",g),()=>{var a,b;e.removeEventListener("loadstart",g),null==(a=e.textTracks)||a.removeEventListener("addtrack",g),null==(b=e.textTracks)||b.removeEventListener("removetrack",g)}}]},mediaChaptersCues:{get(a){var b;let{media:c}=a;if(!c)return[];let[d]=fn(c,{kind:ea.CHAPTERS});return Array.from(null!=(b=null==d?void 0:d.cues)?b:[]).map(({text:a,startTime:b,endTime:c})=>({text:a&&fL.parseFromString(a,"text/html").body.textContent||a,startTime:b,endTime:c}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(!d)return;let e=d.querySelector('track[kind="chapters"][default][src]'),f=null==(c=d.shadowRoot)?void 0:c.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==e||e.addEventListener("load",a),null==f||f.addEventListener("load",a),()=>{null==e||e.removeEventListener("load",a),null==f||f.removeEventListener("load",a)}}]},mediaIsPip:{get(a){var b,c;let{media:d,documentElement:e}=a;if(!d||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===d)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(b=d.localName)?void 0:b.includes("-"))&&eN(d,e.pictureInPictureElement);if(e.pictureInPictureElement.localName.includes("-")){let a=e.pictureInPictureElement.shadowRoot;for(;null==a?void 0:a.pictureInPictureElement;){if(a.pictureInPictureElement===d)return!0;a=null==(c=a.pictureInPictureElement)?void 0:c.shadowRoot}}return!1},set(a,b){let{media:c}=b;if(c)if(a){if(!eC.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!c.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};c.requestPictureInPicture().catch(b=>{if(11===b.code){if(!c.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===c.readyState&&"none"===c.preload){let b=()=>{c.removeEventListener("loadedmetadata",d),c.preload="none"},d=()=>{c.requestPictureInPicture().catch(a),b()};c.addEventListener("loadedmetadata",d),c.preload="metadata",setTimeout(()=>{0===c.readyState&&a(),b()},1e3)}else throw b}else throw b})}else eC.pictureInPictureElement&&eC.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.videoRenditions)?b:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(a){var b,c,d;let{media:e}=a;return null==(d=null==(c=null==e?void 0:e.videoRenditions)?void 0:c[null==(b=e.videoRenditions)?void 0:b.selectedIndex])?void 0:d.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let d=Array.prototype.findIndex.call(c.videoRenditions,b=>b.id==a);c.videoRenditions.selectedIndex!=d&&(c.videoRenditions.selectedIndex=d)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(a){var b;let{media:c}=a;return[...null!=(b=null==c?void 0:c.audioTracks)?b:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(a){var b,c;let{media:d}=a;return null==(c=[...null!=(b=null==d?void 0:d.audioTracks)?b:[]].find(a=>a.enabled))?void 0:c.id},set(a,b){let{media:c}=b;if(!(null==c?void 0:c.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let b of c.audioTracks)b.enabled=a==b.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:a=>(a=>{var b;let{media:c,documentElement:d,fullscreenElement:e=c}=a;if(!c||!d)return!1;let f=(a=>{let{documentElement:b,media:c}=a,d=null==b?void 0:b[fq];return!d&&"webkitDisplayingFullscreen"in c&&"webkitPresentationMode"in c&&c.webkitDisplayingFullscreen&&c.webkitPresentationMode===ef.FULLSCREEN?c:d})(a);if(!f)return!1;if(f===e||f===c)return!0;if(f.localName.includes("-")){let a=f.shadowRoot;if(!(fq in a))return eN(f,e);for(;null==a?void 0:a[fq];){if(a[fq]===e)return!0;a=null==(b=a[fq])?void 0:b.shadowRoot}}return!1})(a),set(a,b){a?(a=>{var b;let{media:c,fullscreenElement:d}=a;try{let a=d&&"requestFullscreen"in d?"requestFullscreen":d&&"webkitRequestFullScreen"in d?"webkitRequestFullScreen":void 0;if(a){let c=null==(b=d[a])?void 0:b.call(d);if(c instanceof Promise)return c.catch(()=>{})}else(null==c?void 0:c.webkitEnterFullscreen)?c.webkitEnterFullscreen():(null==c?void 0:c.requestFullscreen)&&c.requestFullscreen()}catch(a){console.error(a)}})(b):(a=>{var b;let{documentElement:c}=a;if(fp){let a=null==(b=null==c?void 0:c[fp])?void 0:b.call(c);if(a instanceof Promise)return a.catch(()=>{})}})(b)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(a){var b;let{media:c}=a;return!!(null==c?void 0:c.remote)&&(null==(b=c.remote)?void 0:b.state)!=="disconnected"&&!!c.remote.state},set(a,b){var c,d;let{media:e}=b;if(e&&(!a||(null==(c=e.remote)?void 0:c.state)==="disconnected")&&(a||(null==(d=e.remote)?void 0:d.state)==="connected")){if("function"!=typeof e.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(a,b){let{media:c}=b;if(c){if(!(c.webkitShowPlaybackTargetPicker&&eB.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");c.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(a){let{media:b}=a;if(!fz||!fy(b))return ed.UNSUPPORTED}},mediaPipUnavailable:{get(a){let{media:b}=a;if(!fA||!fx(b))return ed.UNSUPPORTED}},mediaVolumeUnavailable:{get(a){let{media:b}=a;if(!1===f||(null==b?void 0:b.volume)==void 0)return ed.UNSUPPORTED},stateOwnersUpdateHandlers:[a=>{null==f&&fJ.then(b=>a(b?void 0:ed.UNSUPPORTED))}]},mediaCastUnavailable:{get(a,{availability:b="not-available"}={}){var c;let{media:d}=a;return fC&&(null==(c=null==d?void 0:d.remote)?void 0:c.state)?null!=b&&"available"!==b?ed.UNAVAILABLE:void 0:ed.UNSUPPORTED},stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(a,b)=>fB?(null==b?void 0:b.availability)==="not-available"?ed.UNAVAILABLE:void 0:ed.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(a,b)=>{var c;let{media:d}=b;if(d)return d.disableRemotePlayback||d.hasAttribute("disableremoteplayback")||null==(c=null==d?void 0:d.remote)||c.watchAvailability(b=>{a({availability:b?"available":"not-available"})}).catch(b=>{"NotSupportedError"===b.name?a({availability:null}):a({availability:"not-available"})}),()=>{var a;null==(a=null==d?void 0:d.remote)||a.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(a){var b;let{media:c}=a;return(null==c?void 0:c.videoRenditions)?(null==(b=c.videoRenditions)?void 0:b.length)?void 0:ed.UNAVAILABLE:ed.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(a){var b,c;let{media:d}=a;return(null==d?void 0:d.audioTracks)?(null!=(c=null==(b=d.audioTracks)?void 0:b.length)?c:0)<=1?ed.UNAVAILABLE:void 0:ed.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},fN={[d3.MEDIA_PREVIEW_REQUEST](a,b,{detail:c}){var d,e,f;let g,h,{media:i}=b,j=null!=c?c:void 0;if(i&&null!=j){let[a]=fn(i,{kind:ea.METADATA,label:"thumbnails"}),b=Array.prototype.find.call(null!=(d=null==a?void 0:a.cues)?d:[],(a,b,c)=>0===b?a.endTime>j:b===c.length-1?a.startTime<=j:a.startTime<=j&&a.endTime>j);if(b){let a=/'^(?:[a-z]+:)?\/\//i.test(b.text)||null==(e=null==i?void 0:i.querySelector('track[label="thumbnails"]'))?void 0:e.src,c=new URL(b.text,a);h=new URLSearchParams(c.hash).get("#xywh").split(",").map(a=>+a),g=c.href}}let k=a.mediaDuration.get(b),l=null==(f=a.mediaChaptersCues.get(b).find((a,b,c)=>b===c.length-1&&k===a.endTime?a.startTime<=j&&a.endTime>=j:a.startTime<=j&&a.endTime>j))?void 0:f.text;return null!=c&&null==l&&(l=""),{mediaPreviewTime:j,mediaPreviewImage:g,mediaPreviewCoords:h,mediaPreviewChapter:l}},[d3.MEDIA_PAUSE_REQUEST](a,b){a.mediaPaused.set(!0,b)},[d3.MEDIA_PLAY_REQUEST](a,b){var c,d,e,f;let g=a.mediaStreamType.get(b)===ee.LIVE,h=!(null==(c=b.options)?void 0:c.noAutoSeekToLive),i=a.mediaTargetLiveWindow.get(b)>0;if(g&&h&&!i){let c=null==(d=a.mediaSeekable.get(b))?void 0:d[1];if(c){let d=null!=(f=null==(e=b.options)?void 0:e.seekToLiveOffset)?f:0;a.mediaCurrentTime.set(c-d,b)}}a.mediaPaused.set(!1,b)},[d3.MEDIA_PLAYBACK_RATE_REQUEST](a,b,{detail:c}){a.mediaPlaybackRate.set(c,b)},[d3.MEDIA_MUTE_REQUEST](a,b){a.mediaMuted.set(!0,b)},[d3.MEDIA_UNMUTE_REQUEST](a,b){a.mediaVolume.get(b)||a.mediaVolume.set(.25,b),a.mediaMuted.set(!1,b)},[d3.MEDIA_VOLUME_REQUEST](a,b,{detail:c}){c&&a.mediaMuted.get(b)&&a.mediaMuted.set(!1,b),a.mediaVolume.set(c,b)},[d3.MEDIA_SEEK_REQUEST](a,b,{detail:c}){a.mediaCurrentTime.set(c,b)},[d3.MEDIA_SEEK_TO_LIVE_REQUEST](a,b){var c,d,e;let f=null==(c=a.mediaSeekable.get(b))?void 0:c[1];if(Number.isNaN(Number(f)))return;let g=null!=(e=null==(d=b.options)?void 0:d.seekToLiveOffset)?e:0;a.mediaCurrentTime.set(f-g,b)},[d3.MEDIA_SHOW_SUBTITLES_REQUEST](a,b,{detail:c}){var d;let{options:e}=b,f=fD(b),g=fi(c),h=null==(d=g[0])?void 0:d.language;h&&!e.noSubtitlesLangPref&&eB.localStorage.setItem("media-chrome-pref-subtitles-lang",h),fm(eb.SHOWING,f,g)},[d3.MEDIA_DISABLE_SUBTITLES_REQUEST](a,b,{detail:c}){let d=fD(b);fm(eb.DISABLED,d,null!=c?c:[])},[d3.MEDIA_TOGGLE_SUBTITLES_REQUEST](a,b,{detail:c}){fF(b,c)},[d3.MEDIA_RENDITION_REQUEST](a,b,{detail:c}){a.mediaRenditionSelected.set(c,b)},[d3.MEDIA_AUDIO_TRACK_REQUEST](a,b,{detail:c}){a.mediaAudioTrackEnabled.set(c,b)},[d3.MEDIA_ENTER_PIP_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsPip.set(!0,b)},[d3.MEDIA_EXIT_PIP_REQUEST](a,b){a.mediaIsPip.set(!1,b)},[d3.MEDIA_ENTER_FULLSCREEN_REQUEST](a,b){a.mediaIsPip.get(b)&&a.mediaIsPip.set(!1,b),a.mediaIsFullscreen.set(!0,b)},[d3.MEDIA_EXIT_FULLSCREEN_REQUEST](a,b){a.mediaIsFullscreen.set(!1,b)},[d3.MEDIA_ENTER_CAST_REQUEST](a,b){a.mediaIsFullscreen.get(b)&&a.mediaIsFullscreen.set(!1,b),a.mediaIsCasting.set(!0,b)},[d3.MEDIA_EXIT_CAST_REQUEST](a,b){a.mediaIsCasting.set(!1,b)},[d3.MEDIA_AIRPLAY_REQUEST](a,b){a.mediaIsAirplaying.set(!0,b)}};var fO=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},fP=(a,b,c)=>(fO(a,b,"read from private field"),c?c.call(a):b.get(a)),fQ=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},fR=(a,b,c,d)=>(fO(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),fS=(a,b,c)=>(fO(a,b,"access private method"),c);let fT=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],fU={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class fV extends fa{constructor(){super(),fQ(this,j8),fQ(this,ka),fQ(this,kc),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,fQ(this,j2,new ff(this,fU.HOTKEYS)),fQ(this,j3,void 0),fQ(this,j4,void 0),fQ(this,j5,void 0),fQ(this,j6,void 0),fQ(this,j7,a=>{var b;null==(b=fP(this,j4))||b.dispatch(a)}),this.associateElement(this);let a={};fR(this,j5,b=>{Object.entries(b).forEach(([b,c])=>{if(b in a&&a[b]===c)return;this.propagateMediaState(b,c);let d=b.toLowerCase(),e=new eB.CustomEvent(d9[d],{composed:!0,detail:c});this.dispatchEvent(e)}),a=b}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(fU.NO_HOTKEYS,fU.HOTKEYS,fU.DEFAULT_STREAM_TYPE,fU.DEFAULT_SUBTITLES,fU.DEFAULT_DURATION,fU.LANG)}get mediaStore(){return fP(this,j4)}set mediaStore(a){var b,c;if(fP(this,j4)&&(null==(b=fP(this,j6))||b.call(this),fR(this,j6,void 0)),fR(this,j4,a),!fP(this,j4)&&!this.hasAttribute(fU.NO_DEFAULT_STORE))return void fS(this,j8,j9).call(this);fR(this,j6,null==(c=fP(this,j4))?void 0:c.subscribe(fP(this,j5)))}get fullscreenElement(){var a;return null!=(a=fP(this,j3))?a:this}set fullscreenElement(a){var b;this.hasAttribute(fU.FULLSCREEN_ELEMENT)&&this.removeAttribute(fU.FULLSCREEN_ELEMENT),fR(this,j3,a),null==(b=fP(this,j4))||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return eW(this,fU.DEFAULT_SUBTITLES)}set defaultSubtitles(a){eX(this,fU.DEFAULT_SUBTITLES,a)}get defaultStreamType(){return eY(this,fU.DEFAULT_STREAM_TYPE)}set defaultStreamType(a){eZ(this,fU.DEFAULT_STREAM_TYPE,a)}get defaultDuration(){return eU(this,fU.DEFAULT_DURATION)}set defaultDuration(a){eV(this,fU.DEFAULT_DURATION,a)}get noHotkeys(){return eW(this,fU.NO_HOTKEYS)}set noHotkeys(a){eX(this,fU.NO_HOTKEYS,a)}get keysUsed(){return eY(this,fU.KEYS_USED)}set keysUsed(a){eZ(this,fU.KEYS_USED,a)}get liveEdgeOffset(){return eU(this,fU.LIVE_EDGE_OFFSET)}set liveEdgeOffset(a){eV(this,fU.LIVE_EDGE_OFFSET,a)}get noAutoSeekToLive(){return eW(this,fU.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(a){eX(this,fU.NO_AUTO_SEEK_TO_LIVE,a)}get noVolumePref(){return eW(this,fU.NO_VOLUME_PREF)}set noVolumePref(a){eX(this,fU.NO_VOLUME_PREF,a)}get noSubtitlesLangPref(){return eW(this,fU.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(a){eX(this,fU.NO_SUBTITLES_LANG_PREF,a)}get noDefaultStore(){return eW(this,fU.NO_DEFAULT_STORE)}set noDefaultStore(a){eX(this,fU.NO_DEFAULT_STORE,a)}attributeChangedCallback(a,b,c){var d,e,f,g,h,i,j,k;if(super.attributeChangedCallback(a,b,c),a===fU.NO_HOTKEYS)c!==b&&""===c?(this.hasAttribute(fU.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):c!==b&&null===c&&this.enableHotkeys();else if(a===fU.HOTKEYS)fP(this,j2).value=c;else if(a===fU.DEFAULT_SUBTITLES&&c!==b)null==(d=fP(this,j4))||d.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(fU.DEFAULT_SUBTITLES)}});else if(a===fU.DEFAULT_STREAM_TYPE)null==(f=fP(this,j4))||f.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(e=this.getAttribute(fU.DEFAULT_STREAM_TYPE))?e:void 0}});else if(a===fU.LIVE_EDGE_OFFSET)null==(g=fP(this,j4))||g.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(fU.LIVE_EDGE_OFFSET)?+this.getAttribute(fU.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(fU.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(fU.LIVE_EDGE_OFFSET)}});else if(a===fU.SEEK_TO_LIVE_OFFSET)null==(h=fP(this,j4))||h.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(fU.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(fU.SEEK_TO_LIVE_OFFSET):void 0}});else if(a===fU.NO_AUTO_SEEK_TO_LIVE)null==(i=fP(this,j4))||i.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(fU.NO_AUTO_SEEK_TO_LIVE)}});else if(a===fU.FULLSCREEN_ELEMENT){let a=c?null==(j=this.getRootNode())?void 0:j.getElementById(c):void 0;fR(this,j3,a),null==(k=fP(this,j4))||k.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else a===fU.LANG&&c!==b&&(er=c)}connectedCallback(){var a,b;fP(this,j4)||this.hasAttribute(fU.NO_DEFAULT_STORE)||fS(this,j8,j9).call(this),null==(a=fP(this,j4))||a.dispatch({type:"documentelementchangerequest",detail:eC}),super.connectedCallback(),fP(this,j4)&&!fP(this,j6)&&fR(this,j6,null==(b=fP(this,j4))?void 0:b.subscribe(fP(this,j5))),this.enableHotkeys()}disconnectedCallback(){var a,b,c,d;null==(a=super.disconnectedCallback)||a.call(this),fP(this,j4)&&(null==(b=fP(this,j4))||b.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(c=fP(this,j4))||c.dispatch({type:d3.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),fP(this,j6)&&(null==(d=fP(this,j6))||d.call(this),fR(this,j6,void 0))}mediaSetCallback(a){var b;super.mediaSetCallback(a),null==(b=fP(this,j4))||b.dispatch({type:"mediaelementchangerequest",detail:a}),a.hasAttribute("tabindex")||(a.tabIndex=-1)}mediaUnsetCallback(a){var b;super.mediaUnsetCallback(a),null==(b=fP(this,j4))||b.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(a,b){f2(this.mediaStateReceivers,a,b)}associateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;if(b.has(a))return;let c=f3(a,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(d3).forEach(b=>{a.addEventListener(b,fP(this,j7))}),b.set(a,c)}unassociateElement(a){if(!a)return;let{associatedElementSubscriptions:b}=this;b.has(a)&&(b.get(a)(),b.delete(a),Object.values(d3).forEach(b=>{a.removeEventListener(b,fP(this,j7))}))}registerMediaStateReceiver(a){if(!a)return;let b=this.mediaStateReceivers;!(b.indexOf(a)>-1)&&(b.push(a),fP(this,j4)&&Object.entries(fP(this,j4).getState()).forEach(([b,c])=>{f2([a],b,c)}))}unregisterMediaStateReceiver(a){let b=this.mediaStateReceivers,c=b.indexOf(a);c<0||b.splice(c,1)}enableHotkeys(){this.addEventListener("keydown",fS(this,kc,kd))}disableHotkeys(){this.removeEventListener("keydown",fS(this,kc,kd)),this.removeEventListener("keyup",fS(this,ka,kb))}get hotkeys(){return eY(this,fU.HOTKEYS)}set hotkeys(a){eZ(this,fU.HOTKEYS,a)}keyboardShortcutHandler(a){var b,c,d,e,f;let g,h,i,j=a.target;if(!((null!=(d=null!=(c=null==(b=j.getAttribute(fU.KEYS_USED))?void 0:b.split(" "))?c:null==j?void 0:j.keysUsed)?d:[]).map(a=>"Space"===a?" ":a).filter(Boolean).includes(a.key)||fP(this,j2).contains(`no${a.key.toLowerCase()}`))&&!(" "===a.key&&fP(this,j2).contains("nospace")))switch(a.key){case" ":case"k":g=fP(this,j4).getState().mediaPaused?d3.MEDIA_PLAY_REQUEST:d3.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new eB.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"m":g="off"===this.mediaStore.getState().mediaVolumeLevel?d3.MEDIA_UNMUTE_REQUEST:d3.MEDIA_MUTE_REQUEST,this.dispatchEvent(new eB.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"f":g=this.mediaStore.getState().mediaIsFullscreen?d3.MEDIA_EXIT_FULLSCREEN_REQUEST:d3.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new eB.CustomEvent(g,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new eB.CustomEvent(d3.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let a=this.hasAttribute(fU.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(fU.KEYBOARD_BACKWARD_SEEK_OFFSET):10;h=Math.max((null!=(e=this.mediaStore.getState().mediaCurrentTime)?e:0)-a,0),i=new eB.CustomEvent(d3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i);break}case"ArrowRight":{let a=this.hasAttribute(fU.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(fU.KEYBOARD_FORWARD_SEEK_OFFSET):10;h=Math.max((null!=(f=this.mediaStore.getState().mediaCurrentTime)?f:0)+a,0),i=new eB.CustomEvent(d3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(i)}}}}j2=new WeakMap,j3=new WeakMap,j4=new WeakMap,j5=new WeakMap,j6=new WeakMap,j7=new WeakMap,j8=new WeakSet,j9=function(){var a;this.mediaStore=(({media:a,fullscreenElement:b,documentElement:c,stateMediator:d=fM,requestMap:e=fN,options:f={},monitorStateOwnersOnlyWithSubscriptions:g=!0})=>{let h,i=[],j={options:{...f}},k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),l=a=>{void 0!=a&&(fG(a,k)||(k=Object.freeze({...k,...a}),i.forEach(a=>a(k))))},m=()=>{l(Object.entries(d).reduce((a,[b,{get:c}])=>(a[b]=c(j),a),{}))},n={},o=async(a,b)=>{var c,e,f,k,o,p,q,r,s,t,u,w,x,y,z,A;let B=!!h;if(h={...j,...null!=h?h:{},...a},B)return;await fK(...Object.values(a));let C=i.length>0&&0===b&&g,D=j.media!==h.media,E=(null==(c=j.media)?void 0:c.textTracks)!==(null==(e=h.media)?void 0:e.textTracks),F=(null==(f=j.media)?void 0:f.videoRenditions)!==(null==(k=h.media)?void 0:k.videoRenditions),G=(null==(o=j.media)?void 0:o.audioTracks)!==(null==(p=h.media)?void 0:p.audioTracks),H=(null==(q=j.media)?void 0:q.remote)!==(null==(r=h.media)?void 0:r.remote),I=j.documentElement!==h.documentElement,J=!!j.media&&(D||C),K=!!(null==(s=j.media)?void 0:s.textTracks)&&(E||C),L=!!(null==(t=j.media)?void 0:t.videoRenditions)&&(F||C),M=!!(null==(u=j.media)?void 0:u.audioTracks)&&(G||C),N=!!(null==(w=j.media)?void 0:w.remote)&&(H||C),O=!!j.documentElement&&(I||C),P=J||K||L||M||N||O,Q=0===i.length&&1===b&&g,R=!!h.media&&(D||Q),S=!!(null==(x=h.media)?void 0:x.textTracks)&&(E||Q),T=!!(null==(y=h.media)?void 0:y.videoRenditions)&&(F||Q),U=!!(null==(z=h.media)?void 0:z.audioTracks)&&(G||Q),V=!!(null==(A=h.media)?void 0:A.remote)&&(H||Q),W=!!h.documentElement&&(I||Q),X=R||S||T||U||V||W;if(!(P||X)){Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0;return}Object.entries(d).forEach(([a,{get:b,mediaEvents:c=[],textTracksEvents:d=[],videoRenditionsEvents:e=[],audioTracksEvents:f=[],remoteEvents:g=[],rootEvents:i=[],stateOwnersUpdateHandlers:k=[]}])=>{let m;n[a]||(n[a]={});let o=c=>{l({[a]:b(j,c)})};m=n[a].mediaEvents,c.forEach(b=>{m&&J&&(j.media.removeEventListener(b,m),n[a].mediaEvents=void 0),R&&(h.media.addEventListener(b,o),n[a].mediaEvents=o)}),m=n[a].textTracksEvents,d.forEach(b=>{var c,d;m&&K&&(null==(c=j.media.textTracks)||c.removeEventListener(b,m),n[a].textTracksEvents=void 0),S&&(null==(d=h.media.textTracks)||d.addEventListener(b,o),n[a].textTracksEvents=o)}),m=n[a].videoRenditionsEvents,e.forEach(b=>{var c,d;m&&L&&(null==(c=j.media.videoRenditions)||c.removeEventListener(b,m),n[a].videoRenditionsEvents=void 0),T&&(null==(d=h.media.videoRenditions)||d.addEventListener(b,o),n[a].videoRenditionsEvents=o)}),m=n[a].audioTracksEvents,f.forEach(b=>{var c,d;m&&M&&(null==(c=j.media.audioTracks)||c.removeEventListener(b,m),n[a].audioTracksEvents=void 0),U&&(null==(d=h.media.audioTracks)||d.addEventListener(b,o),n[a].audioTracksEvents=o)}),m=n[a].remoteEvents,g.forEach(b=>{var c,d;m&&N&&(null==(c=j.media.remote)||c.removeEventListener(b,m),n[a].remoteEvents=void 0),V&&(null==(d=h.media.remote)||d.addEventListener(b,o),n[a].remoteEvents=o)}),m=n[a].rootEvents,i.forEach(b=>{m&&O&&(j.documentElement.removeEventListener(b,m),n[a].rootEvents=void 0),W&&(h.documentElement.addEventListener(b,o),n[a].rootEvents=o)});let p=n[a].stateOwnersUpdateHandlers;k.forEach(b=>{p&&P&&p(),X&&(n[a].stateOwnersUpdateHandlers=b(o,h))})}),Object.entries(h).forEach(([a,b])=>{j[a]=b}),m(),h=void 0};return o({media:a,fullscreenElement:b,documentElement:c,options:f}),{dispatch(a){let{type:b,detail:c}=a;if(e[b]&&null==k.mediaErrorCode)return void l(e[b](d,j,a));"mediaelementchangerequest"===b?o({media:c}):"fullscreenelementchangerequest"===b?o({fullscreenElement:c}):"documentelementchangerequest"===b?o({documentElement:c}):"optionschangerequest"===b&&Object.entries(null!=c?c:{}).forEach(([a,b])=>{j.options[a]=b})},getState:()=>k,subscribe:a=>(o({},i.length+1),i.push(a),a(k),()=>{let b=i.indexOf(a);b>=0&&(o({},i.length-1),i.splice(b,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(fU.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(fU.DEFAULT_DURATION)?+this.getAttribute(fU.DEFAULT_DURATION):void 0,defaultStreamType:null!=(a=this.getAttribute(fU.DEFAULT_STREAM_TYPE))?a:void 0,liveEdgeOffset:this.hasAttribute(fU.LIVE_EDGE_OFFSET)?+this.getAttribute(fU.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(fU.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(fU.SEEK_TO_LIVE_OFFSET):this.hasAttribute(fU.LIVE_EDGE_OFFSET)?+this.getAttribute(fU.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(fU.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(fU.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(fU.NO_SUBTITLES_LANG_PREF)}})},ka=new WeakSet,kb=function(a){let{key:b}=a;if(!fT.includes(b))return void this.removeEventListener("keyup",fS(this,ka,kb));this.keyboardShortcutHandler(a)},kc=new WeakSet,kd=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!fT.includes(d))return void this.removeEventListener("keyup",fS(this,ka,kb));[" ","ArrowLeft","ArrowRight"].includes(d)&&!(fP(this,j2).contains(`no${d.toLowerCase()}`)||" "===d&&fP(this,j2).contains("nospace"))&&a.preventDefault(),this.addEventListener("keyup",fS(this,ka,kb),{once:!0})};let fW=Object.values(d7),fX=Object.values(d5),fY=a=>{var b,c,d,e;let{observedAttributes:f}=a.constructor;!f&&(null==(b=a.nodeName)?void 0:b.includes("-"))&&(eB.customElements.upgrade(a),{observedAttributes:f}=a.constructor);let g=null==(e=null==(d=null==(c=null==a?void 0:a.getAttribute)?void 0:c.call(a,d4.MEDIA_CHROME_ATTRIBUTES))?void 0:d.split)?void 0:e.call(d,/\s+/);return Array.isArray(f||g)?(f||g).filter(a=>fW.includes(a)):[]},fZ=a=>(a=>{var b,c;return(null==(b=a.nodeName)?void 0:b.includes("-"))&&eB.customElements.get(null==(c=a.nodeName)?void 0:c.toLowerCase())&&!(a instanceof eB.customElements.get(a.nodeName.toLowerCase()))&&eB.customElements.upgrade(a),fX.some(b=>b in a)})(a)||!!fY(a).length,f$=a=>{var b;return null==(b=null==a?void 0:a.join)?void 0:b.call(a,":")},f_={[d7.MEDIA_SUBTITLES_LIST]:fk,[d7.MEDIA_SUBTITLES_SHOWING]:fk,[d7.MEDIA_SEEKABLE]:f$,[d7.MEDIA_BUFFERED]:a=>null==a?void 0:a.map(f$).join(" "),[d7.MEDIA_PREVIEW_COORDS]:a=>null==a?void 0:a.join(" "),[d7.MEDIA_RENDITION_LIST]:function(a){return null==a?void 0:a.map(eg).join(" ")},[d7.MEDIA_AUDIO_TRACK_LIST]:function(a){return null==a?void 0:a.map(ei).join(" ")}},f0=async(a,b,c)=>{var d,e;if(a.isConnected||await em(0),"boolean"==typeof c||null==c)return eX(a,b,c);if("number"==typeof c)return eV(a,b,c);if("string"==typeof c)return eZ(a,b,c);if(Array.isArray(c)&&!c.length)return a.removeAttribute(b);let f=null!=(e=null==(d=f_[b])?void 0:d.call(f_,c))?e:c;return a.setAttribute(b,f)},f1=(a,b)=>{if((a=>{var b;return!!(null==(b=a.closest)?void 0:b.call(a,'*[slot="media"]'))})(a))return;let c=(a,b)=>{var c,d;fZ(a)&&b(a);let{children:e=[]}=null!=a?a:{};[...e,...null!=(d=null==(c=null==a?void 0:a.shadowRoot)?void 0:c.children)?d:[]].forEach(a=>f1(a,b))},d=null==a?void 0:a.nodeName.toLowerCase();if(d.includes("-")&&!fZ(a))return void eB.customElements.whenDefined(d).then(()=>{c(a,b)});c(a,b)},f2=(a,b,c)=>{a.forEach(a=>{if(b in a){a[b]=c;return}let d=fY(a),e=b.toLowerCase();d.includes(e)&&f0(a,e,c)})},f3=(a,b,c)=>{f1(a,b);let d=a=>{var c;b(null!=(c=null==a?void 0:a.composedPath()[0])?c:a.target)},e=a=>{var b;c(null!=(b=null==a?void 0:a.composedPath()[0])?b:a.target)};a.addEventListener(d3.REGISTER_MEDIA_STATE_RECEIVER,d),a.addEventListener(d3.UNREGISTER_MEDIA_STATE_RECEIVER,e);let f=[],g=a=>{let d=a.target;"media"!==d.name&&(f.forEach(a=>f1(a,c)),(f=[...d.assignedElements({flatten:!0})]).forEach(a=>f1(a,b)))};a.addEventListener("slotchange",g);let h=new MutationObserver(a=>{a.forEach(a=>{let{addedNodes:d=[],removedNodes:e=[],type:f,target:g,attributeName:h}=a;"childList"===f?(Array.prototype.forEach.call(d,a=>f1(a,b)),Array.prototype.forEach.call(e,a=>f1(a,c))):"attributes"===f&&h===d4.MEDIA_CHROME_ATTRIBUTES&&(fZ(g)?b(g):c(g))})});return h.observe(a,{childList:!0,attributes:!0,subtree:!0}),()=>{f1(a,c),a.removeEventListener("slotchange",g),h.disconnect(),a.removeEventListener(d3.REGISTER_MEDIA_STATE_RECEIVER,d),a.removeEventListener(d3.UNREGISTER_MEDIA_STATE_RECEIVER,e)}};eB.customElements.get("media-controller")||eB.customElements.define("media-controller",fV);let f4={PLACEMENT:"placement",BOUNDS:"bounds"};class f5 extends eB.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var a;if(!eR(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let b=this.placement;if("left"===b||"right"===b)return void this.style.removeProperty("--media-tooltip-offset-x");let c=getComputedStyle(this),d=null!=(a=eO(this,"#"+this.bounds))?a:eJ(this);if(!d)return;let{x:e,width:f}=d.getBoundingClientRect(),{x:g,width:h}=this.getBoundingClientRect(),i=c.getPropertyValue("--media-tooltip-offset-x"),j=i?parseFloat(i.replace("px","")):0,k=c.getPropertyValue("--media-tooltip-container-margin"),l=k?parseFloat(k.replace("px","")):0,m=g-e+j-l,n=g+h-(e+f)+j+l;return m<0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):n>0?void this.style.setProperty("--media-tooltip-offset-x",`${n}px`):void this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let a=this.placement;delete this.placement,this.placement=a}}static get observedAttributes(){return[f4.PLACEMENT,f4.BOUNDS]}get placement(){return eY(this,f4.PLACEMENT)}set placement(a){eZ(this,f4.PLACEMENT,a)}get bounds(){return eY(this,f4.BOUNDS)}set bounds(a){eZ(this,f4.BOUNDS,a)}}f5.shadowRootOptions={mode:"open"},f5.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},eB.customElements.get("media-tooltip")||eB.customElements.define("media-tooltip",f5);var f6=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},f7=(a,b,c)=>(f6(a,b,"read from private field"),c?c.call(a):b.get(a)),f8=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},f9=(a,b,c,d)=>(f6(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let ga={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class gb extends eB.HTMLElement{constructor(){if(super(),f8(this,kj),f8(this,ke,void 0),this.preventClick=!1,this.tooltipEl=null,f8(this,kf,a=>{this.preventClick||this.handleClick(a),setTimeout(f7(this,kg),0)}),f8(this,kg,()=>{var a,b;null==(b=null==(a=this.tooltipEl)?void 0:a.updateXOffset)||b.call(a)}),f8(this,kh,a=>{let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",f7(this,kh));this.preventClick||this.handleClick(a)}),f8(this,ki,a=>{let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",f7(this,kh));this.addEventListener("keyup",f7(this,kh),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",ga.TOOLTIP_PLACEMENT,d4.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",f7(this,kf)),this.addEventListener("keydown",f7(this,ki)),this.tabIndex=0}disable(){this.removeEventListener("click",f7(this,kf)),this.removeEventListener("keydown",f7(this,ki)),this.removeEventListener("keyup",f7(this,kh)),this.tabIndex=-1}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===d4.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=f7(this,ke))?void 0:d.unassociateElement)||e.call(d,this),f9(this,ke,null)),c&&this.isConnected&&(f9(this,ke,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=f7(this,ke))?void 0:g.associateElement)||h.call(g,this))):"disabled"===a&&c!==b?null==c?this.enable():this.disable():a===ga.TOOLTIP_PLACEMENT&&this.tooltipEl&&c!==b&&(this.tooltipEl.placement=c),f7(this,kg).call(this)}connectedCallback(){var a,b,c;let{style:d}=eS(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let e=this.getAttribute(d4.MEDIA_CONTROLLER);e&&(f9(this,ke,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=f7(this,ke))?void 0:b.associateElement)||c.call(b,this)),eB.customElements.whenDefined("media-tooltip").then(()=>{var a,b;return(a=kj,b=kk,f6(this,a,"access private method"),b).call(this)})}disconnectedCallback(){var a,b;this.disable(),null==(b=null==(a=f7(this,ke))?void 0:a.unassociateElement)||b.call(a,this),f9(this,ke,null),this.removeEventListener("mouseenter",f7(this,kg)),this.removeEventListener("focus",f7(this,kg)),this.removeEventListener("click",f7(this,kf))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return eY(this,ga.TOOLTIP_PLACEMENT)}set tooltipPlacement(a){eZ(this,ga.TOOLTIP_PLACEMENT,a)}get mediaController(){return eY(this,d4.MEDIA_CONTROLLER)}set mediaController(a){eZ(this,d4.MEDIA_CONTROLLER,a)}get disabled(){return eW(this,ga.DISABLED)}set disabled(a){eX(this,ga.DISABLED,a)}get noTooltip(){return eW(this,ga.NO_TOOLTIP)}set noTooltip(a){eX(this,ga.NO_TOOLTIP,a)}handleClick(a){}}ke=new WeakMap,kf=new WeakMap,kg=new WeakMap,kh=new WeakMap,ki=new WeakMap,kj=new WeakSet,kk=function(){this.addEventListener("mouseenter",f7(this,kg)),this.addEventListener("focus",f7(this,kg)),this.addEventListener("click",f7(this,kf));let a=this.tooltipPlacement;a&&this.tooltipEl&&(this.tooltipEl.placement=a)},gb.shadowRootOptions={mode:"open"},gb.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${f5.shadowRootOptions.mode}">
          ${f5.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(a)}
        </slot>
      </media-tooltip>
    </slot>
  `},gb.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},gb.getTooltipContentHTML=function(){return""},eB.customElements.get("media-chrome-button")||eB.customElements.define("media-chrome-button",gb);let gc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,gd=a=>{let b=a.mediaIsAirplaying?es("stop airplay"):es("start airplay");a.setAttribute("aria-label",b)};class ge extends gb{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_IS_AIRPLAYING,d7.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gd(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_IS_AIRPLAYING&&gd(this)}get mediaIsAirplaying(){return eW(this,d7.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(a){eX(this,d7.MEDIA_IS_AIRPLAYING,a)}get mediaAirplayUnavailable(){return eY(this,d7.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(a){eZ(this,d7.MEDIA_AIRPLAY_UNAVAILABLE,a)}handleClick(){let a=new eB.CustomEvent(d3.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(a)}}ge.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${d7.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${d7.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${d7.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${d7.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gc}</slot>
      <slot name="exit">${gc}</slot>
    </slot>
  `},ge.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${es("start airplay")}</slot>
    <slot name="tooltip-exit">${es("stop airplay")}</slot>
  `},eB.customElements.get("media-airplay-button")||eB.customElements.define("media-airplay-button",ge);let gf=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,gg=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,gh=a=>{a.setAttribute("aria-checked",fo(a).toString())};class gi extends gb{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_SUBTITLES_LIST,d7.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",es("closed captions")),gh(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_SUBTITLES_SHOWING&&gh(this)}get mediaSubtitlesList(){return gj(this,d7.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){gk(this,d7.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return gj(this,d7.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){gk(this,d7.MEDIA_SUBTITLES_SHOWING,a)}handleClick(){this.dispatchEvent(new eB.CustomEvent(d3.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}gi.getSlotTemplateHTML=function(a){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${gf}</slot>
      <slot name="off">${gg}</slot>
    </slot>
  `},gi.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${es("Enable captions")}</slot>
    <slot name="tooltip-disable">${es("Disable captions")}</slot>
  `};let gj=(a,b)=>{let c=a.getAttribute(b);return c?fh(c):[]},gk=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=fk(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};eB.customElements.get("media-captions-button")||eB.customElements.define("media-captions-button",gi);let gl=a=>{let b=a.mediaIsCasting?es("stop casting"):es("start casting");a.setAttribute("aria-label",b)};class gm extends gb{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_IS_CASTING,d7.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gl(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_IS_CASTING&&gl(this)}get mediaIsCasting(){return eW(this,d7.MEDIA_IS_CASTING)}set mediaIsCasting(a){eX(this,d7.MEDIA_IS_CASTING,a)}get mediaCastUnavailable(){return eY(this,d7.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(a){eZ(this,d7.MEDIA_CAST_UNAVAILABLE,a)}handleClick(){let a=this.mediaIsCasting?d3.MEDIA_EXIT_CAST_REQUEST:d3.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new eB.CustomEvent(a,{composed:!0,bubbles:!0}))}}gm.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${d7.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${d7.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${d7.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${d7.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},gm.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${es("Start casting")}</slot>
    <slot name="tooltip-exit">${es("Stop casting")}</slot>
  `},eB.customElements.get("media-cast-button")||eB.customElements.define("media-cast-button",gm);var gn=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},go=(a,b,c)=>(gn(a,b,"read from private field"),c?c.call(a):b.get(a)),gp=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gq=(a,b,c,d)=>(gn(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),gr=(a,b,c)=>(gn(a,b,"access private method"),c);let gs={OPEN:"open",ANCHOR:"anchor"};class gt extends eB.HTMLElement{constructor(){super(),gp(this,ko),gp(this,kq),gp(this,ks),gp(this,ku),gp(this,kw),gp(this,ky),gp(this,kl,!1),gp(this,km,null),gp(this,kn,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[gs.OPEN,gs.ANCHOR]}get open(){return eW(this,gs.OPEN)}set open(a){eX(this,gs.OPEN,a)}handleEvent(a){switch(a.type){case"invoke":gr(this,ku,kv).call(this,a);break;case"focusout":gr(this,kw,kx).call(this,a);break;case"keydown":gr(this,ky,kz).call(this,a)}}connectedCallback(){gr(this,ko,kp).call(this),this.role||(this.role="dialog")}attributeChangedCallback(a,b,c){gr(this,ko,kp).call(this),a===gs.OPEN&&c!==b&&(this.open?gr(this,kq,kr).call(this):gr(this,ks,kt).call(this))}focus(){gq(this,km,eP());let a=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),b=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(a||b)return;let c=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==c||c.focus()}get keysUsed(){return["Escape","Tab"]}}kl=new WeakMap,km=new WeakMap,kn=new WeakMap,ko=new WeakSet,kp=function(){if(!go(this,kl)&&(gq(this,kl,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a),queueMicrotask(()=>{let{style:a}=eS(this.shadowRoot,":host");a.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},kq=new WeakSet,kr=function(){var a;null==(a=go(this,kn))||a.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},ks=new WeakSet,kt=function(){var a;null==(a=go(this,kn))||a.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},ku=new WeakSet,kv=function(a){gq(this,kn,a.relatedTarget),eN(this,a.relatedTarget)||(this.open=!this.open)},kw=new WeakSet,kx=function(a){var b;!eN(this,a.relatedTarget)&&(null==(b=go(this,km))||b.focus(),go(this,kn)&&go(this,kn)!==a.relatedTarget&&this.open&&(this.open=!1))},ky=new WeakSet,kz=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;h||i||j||this.keysUsed.includes(g)&&(a.preventDefault(),a.stopPropagation(),"Tab"===g?(a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()):"Escape"===g&&(null==(f=go(this,km))||f.focus(),this.open=!1))},gt.shadowRootOptions={mode:"open"},gt.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(a)}
  `},gt.getSlotTemplateHTML=function(a){return`
    <slot id="content"></slot>
  `},eB.customElements.get("media-chrome-dialog")||eB.customElements.define("media-chrome-dialog",gt);var gu=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gv=(a,b,c)=>(gu(a,b,"read from private field"),c?c.call(a):b.get(a)),gw=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},gx=(a,b,c,d)=>(gu(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),gy=(a,b,c)=>(gu(a,b,"access private method"),c);class gz extends eB.HTMLElement{constructor(){if(super(),gw(this,kJ),gw(this,kL),gw(this,kN),gw(this,kP),gw(this,kR),gw(this,kT),gw(this,kV),gw(this,kX),gw(this,kA,void 0),gw(this,kB,void 0),gw(this,kC,void 0),gw(this,kD,void 0),gw(this,kE,{}),gw(this,kF,[]),gw(this,kG,()=>{if(this.range.matches(":focus-visible")){let{style:a}=eS(this.shadowRoot,":host");a.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),gw(this,kH,()=>{let{style:a}=eS(this.shadowRoot,":host");a.removeProperty("--_focus-visible-box-shadow")}),gw(this,kI,()=>{let a=this.shadowRoot.querySelector("#segments-clipping");a&&a.parentNode.append(a)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes),b=this.constructor.getTemplateHTML(a);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(b):this.shadowRoot.innerHTML=b}this.container=this.shadowRoot.querySelector("#container"),gx(this,kC,this.shadowRoot.querySelector("#startpoint")),gx(this,kD,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",d4.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===d4.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=gv(this,kA))?void 0:d.unassociateElement)||e.call(d,this),gx(this,kA,null)),c&&this.isConnected&&(gx(this,kA,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=gv(this,kA))?void 0:g.associateElement)||h.call(g,this))):("disabled"===a||"aria-disabled"===a&&b!==c)&&(null==c?(this.range.removeAttribute(a),gy(this,kL,kM).call(this)):(this.range.setAttribute(a,c),gy(this,kN,kO).call(this)))}connectedCallback(){var a,b,c;let{style:d}=eS(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),gv(this,kE).pointer=eS(this.shadowRoot,"#pointer"),gv(this,kE).progress=eS(this.shadowRoot,"#progress"),gv(this,kE).thumb=eS(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),gv(this,kE).activeSegment=eS(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let e=this.getAttribute(d4.MEDIA_CONTROLLER);e&&(gx(this,kA,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=gv(this,kA))?void 0:b.associateElement)||c.call(b,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",gv(this,kG)),this.shadowRoot.addEventListener("focusout",gv(this,kH)),gy(this,kL,kM).call(this),eG(this.container,gv(this,kI))}disconnectedCallback(){var a,b;gy(this,kN,kO).call(this),null==(b=null==(a=gv(this,kA))?void 0:a.unassociateElement)||b.call(a,this),gx(this,kA,null),this.shadowRoot.removeEventListener("focusin",gv(this,kG)),this.shadowRoot.removeEventListener("focusout",gv(this,kH)),eH(this.container,gv(this,kI))}updatePointerBar(a){var b;null==(b=gv(this,kE).pointer)||b.style.setProperty("width",`${100*this.getPointerRatio(a)}%`)}updateBar(){var a,b;let c=100*this.range.valueAsNumber;null==(a=gv(this,kE).progress)||a.style.setProperty("width",`${c}%`),null==(b=gv(this,kE).thumb)||b.style.setProperty("left",`${c}%`)}updateSegments(a){let b=this.shadowRoot.querySelector("#segments-clipping");if(b.textContent="",this.container.classList.toggle("segments",!!(null==a?void 0:a.length)),!(null==a?void 0:a.length))return;let c=[...new Set([+this.range.min,...a.flatMap(a=>[a.start,a.end]),+this.range.max])];gx(this,kF,[...c]);let d=c.pop();for(let[a,e]of c.entries()){let[f,g]=[0===a,a===c.length-1],h=f?"calc(var(--segments-gap) / -1)":`${100*e}%`,i=g?d:c[a+1],j=`calc(${(i-e)*100}%${f||g?"":" - var(--segments-gap)"})`,k=eC.createElementNS("http://www.w3.org/2000/svg","rect"),l=eS(this.shadowRoot,`#segments-clipping rect:nth-child(${a+1})`);l.style.setProperty("x",h),l.style.setProperty("width",j),b.append(k)}}getPointerRatio(a){return function(a,b,c,d){let e=d.x-c.x,f=d.y-c.y,g=e*e+f*f;return 0===g?0:Math.max(0,Math.min(1,((a-c.x)*e+(b-c.y)*f)/g))}(a.clientX,a.clientY,gv(this,kC).getBoundingClientRect(),gv(this,kD).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(a){switch(a.type){case"pointermove":gy(this,kX,kY).call(this,a);break;case"input":this.updateBar();break;case"pointerenter":gy(this,kR,kS).call(this,a);break;case"pointerdown":gy(this,kP,kQ).call(this,a);break;case"pointerup":gy(this,kT,kU).call(this);break;case"pointerleave":gy(this,kV,kW).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}kA=new WeakMap,kB=new WeakMap,kC=new WeakMap,kD=new WeakMap,kE=new WeakMap,kF=new WeakMap,kG=new WeakMap,kH=new WeakMap,kI=new WeakMap,kJ=new WeakSet,kK=function(a){let b=gv(this,kE).activeSegment;if(!b)return;let c=this.getPointerRatio(a),d=gv(this,kF).findIndex((a,b,d)=>{let e=d[b+1];return null!=e&&c>=a&&c<=e}),e=`#segments-clipping rect:nth-child(${d+1})`;b.selectorText==e&&b.style.transform||(b.selectorText=e,b.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},kL=new WeakSet,kM=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},kN=new WeakSet,kO=function(){var a,b;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(a=eB.window)||a.removeEventListener("pointerup",this),null==(b=eB.window)||b.removeEventListener("pointermove",this)},kP=new WeakSet,kQ=function(a){var b;gx(this,kB,a.composedPath().includes(this.range)),null==(b=eB.window)||b.addEventListener("pointerup",this)},kR=new WeakSet,kS=function(a){var b;"mouse"!==a.pointerType&&gy(this,kP,kQ).call(this,a),this.addEventListener("pointerleave",this),null==(b=eB.window)||b.addEventListener("pointermove",this)},kT=new WeakSet,kU=function(){var a;null==(a=eB.window)||a.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},kV=new WeakSet,kW=function(){var a,b;this.removeEventListener("pointerleave",this),null==(a=eB.window)||a.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(b=gv(this,kE).activeSegment)||b.style.removeProperty("transform")},kX=new WeakSet,kY=function(a){this.toggleAttribute("dragging",1===a.buttons||"mouse"!==a.pointerType),this.updatePointerBar(a),gy(this,kJ,kK).call(this,a),this.dragging&&("mouse"!==a.pointerType||!gv(this,kB))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(a),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},gz.shadowRootOptions={mode:"open"},gz.getTemplateHTML=function(a){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},eB.customElements.get("media-chrome-range")||eB.customElements.define("media-chrome-range",gz);var gA=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gB=(a,b,c)=>(gA(a,b,"read from private field"),c?c.call(a):b.get(a)),gC=(a,b,c,d)=>(gA(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class gD extends eB.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,kZ,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[d4.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===d4.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=gB(this,kZ))?void 0:d.unassociateElement)||e.call(d,this),gC(this,kZ,null)),c&&this.isConnected&&(gC(this,kZ,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=gB(this,kZ))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(d4.MEDIA_CONTROLLER);d&&(gC(this,kZ,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=gB(this,kZ))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=gB(this,kZ))?void 0:a.unassociateElement)||b.call(a,this),gC(this,kZ,null)}}kZ=new WeakMap,gD.shadowRootOptions={mode:"open"},gD.getTemplateHTML=function(a){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},eB.customElements.get("media-control-bar")||eB.customElements.define("media-control-bar",gD);var gE=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gF=(a,b,c)=>(gE(a,b,"read from private field"),c?c.call(a):b.get(a)),gG=(a,b,c,d)=>(gE(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class gH extends eB.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,k$,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[d4.MEDIA_CONTROLLER]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===d4.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=gF(this,k$))?void 0:d.unassociateElement)||e.call(d,this),gG(this,k$,null)),c&&this.isConnected&&(gG(this,k$,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=gF(this,k$))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let{style:d}=eS(this.shadowRoot,":host");d.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let e=this.getAttribute(d4.MEDIA_CONTROLLER);e&&(gG(this,k$,null==(a=this.getRootNode())?void 0:a.getElementById(e)),null==(c=null==(b=gF(this,k$))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=gF(this,k$))?void 0:a.unassociateElement)||b.call(a,this),gG(this,k$,null)}}k$=new WeakMap,gH.shadowRootOptions={mode:"open"},gH.getTemplateHTML=function(a,b={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(a,b)}
  `},gH.getSlotTemplateHTML=function(a,b){return`
    <slot></slot>
  `},eB.customElements.get("media-text-display")||eB.customElements.define("media-text-display",gH);var gI=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},gJ=(a,b,c)=>(gI(a,b,"read from private field"),c?c.call(a):b.get(a));class gK extends gH{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,k_,void 0),((a,b,c,d)=>(gI(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,k_,this.shadowRoot.querySelector("slot")),gJ(this,k_).textContent=ep(null!=(a=this.mediaDuration)?a:0)}static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_DURATION]}attributeChangedCallback(a,b,c){a===d7.MEDIA_DURATION&&(gJ(this,k_).textContent=ep(+c)),super.attributeChangedCallback(a,b,c)}get mediaDuration(){return eU(this,d7.MEDIA_DURATION)}set mediaDuration(a){eV(this,d7.MEDIA_DURATION,a)}}k_=new WeakMap,gK.getSlotTemplateHTML=function(a,b){return`
    <slot>${ep(b.mediaDuration)}</slot>
  `},eB.customElements.get("media-duration-display")||eB.customElements.define("media-duration-display",gK);let gL={2:es("Network Error"),3:es("Decode Error"),4:es("Source Not Supported"),5:es("Encryption Error")},gM={2:es("A network error caused the media download to fail."),3:es("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:es("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:es("The media is encrypted and there are no keys to decrypt it.")},gN=a=>{var b,c;return 1===a.code?null:{title:null!=(b=gL[a.code])?b:`Error ${a.code}`,message:null!=(c=gM[a.code])?c:a.message}};var gO=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};function gP(a){var b;let{title:c,message:d}=null!=(b=gN(a))?b:{},e="";return c&&(e+=`<slot name="error-${a.code}-title"><h3>${c}</h3></slot>`),d&&(e+=`<slot name="error-${a.code}-message"><p>${d}</p></slot>`),e}let gQ=[d7.MEDIA_ERROR_CODE,d7.MEDIA_ERROR_MESSAGE];class gR extends gt{constructor(){super(...arguments),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,k0,null)}static get observedAttributes(){return[...super.observedAttributes,...gQ]}formatErrorMessage(a){return this.constructor.formatErrorMessage(a)}attributeChangedCallback(a,b,c){var d;if(super.attributeChangedCallback(a,b,c),!gQ.includes(a))return;let e=null!=(d=this.mediaError)?d:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=e.code&&null!==gN(e),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(e))}get mediaError(){var a,b;return gO(this,a=k0,"read from private field"),b?b.call(this):a.get(this)}set mediaError(a){var b,c;gO(this,b=k0,"write to private field"),c?c.call(this,a):b.set(this,a)}get mediaErrorCode(){return eU(this,"mediaerrorcode")}set mediaErrorCode(a){eV(this,"mediaerrorcode",a)}get mediaErrorMessage(){return eY(this,"mediaerrormessage")}set mediaErrorMessage(a){eZ(this,"mediaerrormessage",a)}}k0=new WeakMap,gR.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${a.mediaerrorcode}" id="content">
      ${gP({code:+a.mediaerrorcode,message:a.mediaerrormessage})}
    </slot>
  `},gR.formatErrorMessage=gP,eB.customElements.get("media-error-dialog")||eB.customElements.define("media-error-dialog",gR);let gS=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,gT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,gU=a=>{let b=a.mediaIsFullscreen?es("exit fullscreen mode"):es("enter fullscreen mode");a.setAttribute("aria-label",b)};class gV extends gb{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_IS_FULLSCREEN,d7.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gU(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_IS_FULLSCREEN&&gU(this)}get mediaFullscreenUnavailable(){return eY(this,d7.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(a){eZ(this,d7.MEDIA_FULLSCREEN_UNAVAILABLE,a)}get mediaIsFullscreen(){return eW(this,d7.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(a){eX(this,d7.MEDIA_IS_FULLSCREEN,a)}handleClick(){let a=this.mediaIsFullscreen?d3.MEDIA_EXIT_FULLSCREEN_REQUEST:d3.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new eB.CustomEvent(a,{composed:!0,bubbles:!0}))}}gV.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${d7.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${d7.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${d7.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${d7.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${gS}</slot>
      <slot name="exit">${gT}</slot>
    </slot>
  `},gV.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${es("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${es("Exit fullscreen mode")}</slot>
  `},eB.customElements.get("media-fullscreen-button")||eB.customElements.define("media-fullscreen-button",gV);let{MEDIA_TIME_IS_LIVE:gW,MEDIA_PAUSED:gX}=d7,{MEDIA_SEEK_TO_LIVE_REQUEST:gY,MEDIA_PLAY_REQUEST:gZ}=d3,g$=a=>{let b=a.mediaPaused||!a.mediaTimeIsLive,c=b?es("seek to live"):es("playing live");a.setAttribute("aria-label",c),b?a.removeAttribute("aria-disabled"):a.setAttribute("aria-disabled","true")};class g_ extends gb{static get observedAttributes(){return[...super.observedAttributes,gW,gX]}connectedCallback(){super.connectedCallback(),g$(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),g$(this)}get mediaPaused(){return eW(this,d7.MEDIA_PAUSED)}set mediaPaused(a){eX(this,d7.MEDIA_PAUSED,a)}get mediaTimeIsLive(){return eW(this,d7.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(a){eX(this,d7.MEDIA_TIME_IS_LIVE,a)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new eB.CustomEvent(gY,{composed:!0,bubbles:!0})),this.hasAttribute(gX)&&this.dispatchEvent(new eB.CustomEvent(gZ,{composed:!0,bubbles:!0})))}}g_.getSlotTemplateHTML=function(a){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${gW}]:not([${gX}])) slot[name=indicator] > *,
      :host([${gW}]:not([${gX}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${gW}]:not([${gX}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${es("live")}</slot>
  `},eB.customElements.get("media-live-button")||eB.customElements.define("media-live-button",g_);var g0=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},g1=(a,b,c)=>(g0(a,b,"read from private field"),c?c.call(a):b.get(a)),g2=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},g3=(a,b,c,d)=>(g0(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let g4={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},g5=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class g6 extends eB.HTMLElement{constructor(){if(super(),g2(this,k1,void 0),g2(this,k2,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[d4.MEDIA_CONTROLLER,d7.MEDIA_PAUSED,d7.MEDIA_LOADING,g4.LOADING_DELAY]}attributeChangedCallback(a,b,c){var d,e,f,g,h;a===g4.LOADING_DELAY&&b!==c?this.loadingDelay=Number(c):a===d4.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=g1(this,k1))?void 0:d.unassociateElement)||e.call(d,this),g3(this,k1,null)),c&&this.isConnected&&(g3(this,k1,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=g1(this,k1))?void 0:g.associateElement)||h.call(g,this)))}connectedCallback(){var a,b,c;let d=this.getAttribute(d4.MEDIA_CONTROLLER);d&&(g3(this,k1,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=g1(this,k1))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=g1(this,k1))?void 0:a.unassociateElement)||b.call(a,this),g3(this,k1,null)}get loadingDelay(){return g1(this,k2)}set loadingDelay(a){g3(this,k2,a);let{style:b}=eS(this.shadowRoot,":host");b.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${a}ms)`)}get mediaPaused(){return eW(this,d7.MEDIA_PAUSED)}set mediaPaused(a){eX(this,d7.MEDIA_PAUSED,a)}get mediaLoading(){return eW(this,d7.MEDIA_LOADING)}set mediaLoading(a){eX(this,d7.MEDIA_LOADING,a)}get mediaController(){return eY(this,d4.MEDIA_CONTROLLER)}set mediaController(a){eZ(this,d4.MEDIA_CONTROLLER,a)}get noAutohide(){return eW(this,g4.NO_AUTOHIDE)}set noAutohide(a){eX(this,g4.NO_AUTOHIDE,a)}}k1=new WeakMap,k2=new WeakMap,g6.shadowRootOptions={mode:"open"},g6.getTemplateHTML=function(a){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${d7.MEDIA_LOADING}]:not([${d7.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${d7.MEDIA_LOADING}]:not([${d7.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${d7.MEDIA_LOADING}]:not([${d7.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${g5}</slot>
    <div id="status" role="status" aria-live="polite">${es("media loading")}</div>
  `},eB.customElements.get("media-loading-indicator")||eB.customElements.define("media-loading-indicator",g6);let g7=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,g8=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,g9=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,ha=a=>{let b="off"===a.mediaVolumeLevel?es("unmute"):es("mute");a.setAttribute("aria-label",b)};class hb extends gb{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),ha(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_VOLUME_LEVEL&&ha(this)}get mediaVolumeLevel(){return eY(this,d7.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(a){eZ(this,d7.MEDIA_VOLUME_LEVEL,a)}handleClick(){let a="off"===this.mediaVolumeLevel?d3.MEDIA_UNMUTE_REQUEST:d3.MEDIA_MUTE_REQUEST;this.dispatchEvent(new eB.CustomEvent(a,{composed:!0,bubbles:!0}))}}hb.getSlotTemplateHTML=function(a){return`
    <style>
      :host(:not([${d7.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${d7.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${d7.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${d7.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${d7.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${d7.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${d7.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${g7}</slot>
      <slot name="low">${g8}</slot>
      <slot name="medium">${g8}</slot>
      <slot name="high">${g9}</slot>
    </slot>
  `},hb.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${es("Mute")}</slot>
    <slot name="tooltip-unmute">${es("Unmute")}</slot>
  `},eB.customElements.get("media-mute-button")||eB.customElements.define("media-mute-button",hb);let hc=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,hd=a=>{let b=a.mediaIsPip?es("exit picture in picture mode"):es("enter picture in picture mode");a.setAttribute("aria-label",b)};class he extends gb{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_IS_PIP,d7.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),hd(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_IS_PIP&&hd(this)}get mediaPipUnavailable(){return eY(this,d7.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(a){eZ(this,d7.MEDIA_PIP_UNAVAILABLE,a)}get mediaIsPip(){return eW(this,d7.MEDIA_IS_PIP)}set mediaIsPip(a){eX(this,d7.MEDIA_IS_PIP,a)}handleClick(){let a=this.mediaIsPip?d3.MEDIA_EXIT_PIP_REQUEST:d3.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new eB.CustomEvent(a,{composed:!0,bubbles:!0}))}}he.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${d7.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${d7.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${d7.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${d7.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${hc}</slot>
      <slot name="exit">${hc}</slot>
    </slot>
  `},he.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${es("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${es("Exit picture in picture mode")}</slot>
  `},eB.customElements.get("media-pip-button")||eB.customElements.define("media-pip-button",he);var hf=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot read from private field");return c?c.call(a):b.get(a)};let hg={RATES:"rates"},hh=[1,1.2,1.5,1.7,2];class hi extends gb{constructor(){var a;super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,k3,new ff(this,hg.RATES,{defaultValue:hh})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_PLAYBACK_RATE,hg.RATES]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===hg.RATES&&(hf(this,k3).value=c),a===d7.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",es("Playback rate {playbackRate}",{playbackRate:b}))}}get rates(){return hf(this,k3)}set rates(a){a?Array.isArray(a)?hf(this,k3).value=a.join(" "):"string"==typeof a&&(hf(this,k3).value=a):hf(this,k3).value=""}get mediaPlaybackRate(){return eU(this,d7.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){eV(this,d7.MEDIA_PLAYBACK_RATE,a)}handleClick(){var a,b;let c=Array.from(hf(this,k3).values(),a=>+a).sort((a,b)=>a-b),d=null!=(b=null!=(a=c.find(a=>a>this.mediaPlaybackRate))?a:c[0])?b:1,e=new eB.CustomEvent(d3.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d});this.dispatchEvent(e)}}k3=new WeakMap,hi.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},hi.getTooltipContentHTML=function(){return es("Playback rate")},eB.customElements.get("media-playback-rate-button")||eB.customElements.define("media-playback-rate-button",hi);let hj=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,hk=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,hl=a=>{let b=a.mediaPaused?es("play"):es("pause");a.setAttribute("aria-label",b)};class hm extends gb{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_PAUSED,d7.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),hl(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_PAUSED&&hl(this)}get mediaPaused(){return eW(this,d7.MEDIA_PAUSED)}set mediaPaused(a){eX(this,d7.MEDIA_PAUSED,a)}handleClick(){let a=this.mediaPaused?d3.MEDIA_PLAY_REQUEST:d3.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new eB.CustomEvent(a,{composed:!0,bubbles:!0}))}}hm.getSlotTemplateHTML=function(a){return`
    <style>
      :host([${d7.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${d7.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${d7.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${d7.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${hj}</slot>
      <slot name="pause">${hk}</slot>
    </slot>
  `},hm.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${es("Play")}</slot>
    <slot name="tooltip-pause">${es("Pause")}</slot>
  `},eB.customElements.get("media-play-button")||eB.customElements.define("media-play-button",hm);let hn={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};class ho extends eB.HTMLElement{static get observedAttributes(){return[hn.PLACEHOLDER_SRC,hn.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(a,b,c){if(a===hn.SRC&&(null==c?this.image.removeAttribute(hn.SRC):this.image.setAttribute(hn.SRC,c)),a===hn.PLACEHOLDER_SRC)if(null==c)this.image.style.removeProperty("background-image");else{var d;d=this.image,d.style["background-image"]=`url('${c}')`}}get placeholderSrc(){return eY(this,hn.PLACEHOLDER_SRC)}set placeholderSrc(a){eZ(this,hn.SRC,a)}get src(){return eY(this,hn.SRC)}set src(a){eZ(this,hn.SRC,a)}}ho.shadowRootOptions={mode:"open"},ho.getTemplateHTML=function(a){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},eB.customElements.get("media-poster-image")||eB.customElements.define("media-poster-image",ho);var hp=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};class hq extends gH{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,k4,void 0),((a,b,c,d)=>(hp(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,k4,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===d7.MEDIA_PREVIEW_CHAPTER&&c!==b&&null!=c){var d,e;(hp(this,d=k4,"read from private field"),e?e.call(this):d.get(this)).textContent=c,""!==c?this.setAttribute("aria-valuetext",`chapter: ${c}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return eY(this,d7.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(a){eZ(this,d7.MEDIA_PREVIEW_CHAPTER,a)}}k4=new WeakMap,eB.customElements.get("media-preview-chapter-display")||eB.customElements.define("media-preview-chapter-display",hq);var hr=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hs=(a,b,c)=>(hr(a,b,"read from private field"),c?c.call(a):b.get(a)),ht=(a,b,c,d)=>(hr(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class hu extends eB.HTMLElement{constructor(){if(super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,k5,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}}static get observedAttributes(){return[d4.MEDIA_CONTROLLER,d7.MEDIA_PREVIEW_IMAGE,d7.MEDIA_PREVIEW_COORDS]}connectedCallback(){var a,b,c;let d=this.getAttribute(d4.MEDIA_CONTROLLER);d&&(ht(this,k5,null==(a=this.getRootNode())?void 0:a.getElementById(d)),null==(c=null==(b=hs(this,k5))?void 0:b.associateElement)||c.call(b,this))}disconnectedCallback(){var a,b;null==(b=null==(a=hs(this,k5))?void 0:a.unassociateElement)||b.call(a,this),ht(this,k5,null)}attributeChangedCallback(a,b,c){var d,e,f,g,h;[d7.MEDIA_PREVIEW_IMAGE,d7.MEDIA_PREVIEW_COORDS].includes(a)&&this.update(),a===d4.MEDIA_CONTROLLER&&(b&&(null==(e=null==(d=hs(this,k5))?void 0:d.unassociateElement)||e.call(d,this),ht(this,k5,null)),c&&this.isConnected&&(ht(this,k5,null==(f=this.getRootNode())?void 0:f.getElementById(c)),null==(h=null==(g=hs(this,k5))?void 0:g.associateElement)||h.call(g,this)))}get mediaPreviewImage(){return eY(this,d7.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){eZ(this,d7.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewCoords(){let a=this.getAttribute(d7.MEDIA_PREVIEW_COORDS);if(a)return a.split(/\s+/).map(a=>+a)}set mediaPreviewCoords(a){if(!a)return void this.removeAttribute(d7.MEDIA_PREVIEW_COORDS);this.setAttribute(d7.MEDIA_PREVIEW_COORDS,a.join(" "))}update(){let a=this.mediaPreviewCoords,b=this.mediaPreviewImage;if(!(a&&b))return;let[c,d,e,f]=a,g=b.split("#")[0],{maxWidth:h,maxHeight:i,minWidth:j,minHeight:k}=getComputedStyle(this),l=Math.min(parseInt(h)/e,parseInt(i)/f),m=Math.max(parseInt(j)/e,parseInt(k)/f),n=l<1,o=n?l:m>1?m:1,{style:p}=eS(this.shadowRoot,":host"),q=eS(this.shadowRoot,"img").style,r=this.shadowRoot.querySelector("img"),s=n?"min":"max";p.setProperty(`${s}-width`,"initial","important"),p.setProperty(`${s}-height`,"initial","important"),p.width=`${e*o}px`,p.height=`${f*o}px`;let t=()=>{q.width=`${this.imgWidth*o}px`,q.height=`${this.imgHeight*o}px`,q.display="block"};r.src!==g&&(r.onload=()=>{this.imgWidth=r.naturalWidth,this.imgHeight=r.naturalHeight,t()},r.src=g,t()),t(),q.transform=`translate(-${c*o}px, -${d*o}px)`}}k5=new WeakMap,hu.shadowRootOptions={mode:"open"},hu.getTemplateHTML=function(a){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},eB.customElements.get("media-preview-thumbnail")||eB.customElements.define("media-preview-thumbnail",hu);var hv=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hw=(a,b,c)=>(hv(a,b,"read from private field"),c?c.call(a):b.get(a));class hx extends gH{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,k6,void 0),((a,b,c,d)=>(hv(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,k6,this.shadowRoot.querySelector("slot")),hw(this,k6).textContent=ep(0)}static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_PREVIEW_TIME]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_PREVIEW_TIME&&null!=c&&(hw(this,k6).textContent=ep(parseFloat(c)))}get mediaPreviewTime(){return eU(this,d7.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){eV(this,d7.MEDIA_PREVIEW_TIME,a)}}k6=new WeakMap,eB.customElements.get("media-preview-time-display")||eB.customElements.define("media-preview-time-display",hx);let hy={SEEK_OFFSET:"seekoffset"};class hz extends gb{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_CURRENT_TIME,hy.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=eU(this,hy.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hy.SEEK_OFFSET&&(this.seekOffset=eU(this,hy.SEEK_OFFSET,30))}get seekOffset(){return eU(this,hy.SEEK_OFFSET,30)}set seekOffset(a){eV(this,hy.SEEK_OFFSET,a),this.setAttribute("aria-label",es("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),eL(eM(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return eU(this,d7.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){eV(this,d7.MEDIA_CURRENT_TIME,a)}handleClick(){let a=Math.max(this.mediaCurrentTime-this.seekOffset,0),b=new eB.CustomEvent(d3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}hz.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${c}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},hz.getTooltipContentHTML=function(){return es("Seek backward")},eB.customElements.get("media-seek-backward-button")||eB.customElements.define("media-seek-backward-button",hz);let hA={SEEK_OFFSET:"seekoffset"};class hB extends gb{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_CURRENT_TIME,hA.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=eU(this,hA.SEEK_OFFSET,30)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===hA.SEEK_OFFSET&&(this.seekOffset=eU(this,hA.SEEK_OFFSET,30))}get seekOffset(){return eU(this,hA.SEEK_OFFSET,30)}set seekOffset(a){eV(this,hA.SEEK_OFFSET,a),this.setAttribute("aria-label",es("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),eL(eM(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return eU(this,d7.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(a){eV(this,d7.MEDIA_CURRENT_TIME,a)}handleClick(){let a=this.mediaCurrentTime+this.seekOffset,b=new eB.CustomEvent(d3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)}}hB.getSlotTemplateHTML=function(a,b){let c;return`
    <slot name="icon">${c=b.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${c}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},hB.getTooltipContentHTML=function(){return es("Seek forward")},eB.customElements.get("media-seek-forward-button")||eB.customElements.define("media-seek-forward-button",hB);var hC=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hD=(a,b,c)=>(hC(a,b,"read from private field"),c?c.call(a):b.get(a));let hE={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},hF=[...Object.values(hE),d7.MEDIA_CURRENT_TIME,d7.MEDIA_DURATION,d7.MEDIA_SEEKABLE],hG=["Enter"," "],hH="&nbsp;/&nbsp;",hI=(a,{timesSep:b=hH}={})=>{var c,d;let e=null!=(c=a.mediaCurrentTime)?c:0,[,f]=null!=(d=a.mediaSeekable)?d:[],g=0;Number.isFinite(a.mediaDuration)?g=a.mediaDuration:Number.isFinite(f)&&(g=f);let h=a.remaining?ep(0-(g-e)):ep(e);return a.showDuration?`${h}${b}${ep(g)}`:h};class hJ extends gH{constructor(){super(),((a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)})(this,k7,void 0),((a,b,c,d)=>(hC(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,k7,this.shadowRoot.querySelector("slot")),hD(this,k7).innerHTML=`${hI(this)}`}static get observedAttributes(){return[...super.observedAttributes,...hF,"disabled"]}connectedCallback(){let{style:a}=eS(this.shadowRoot,":host(:hover:not([notoggle]))");a.setProperty("cursor","var(--media-cursor, pointer)"),a.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",es("playback time"));let b=a=>{let{key:c}=a;if(!hG.includes(c))return void this.removeEventListener("keyup",b);this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{let{metaKey:c,altKey:d,key:e}=a;if(c||d||!hG.includes(e))return void this.removeEventListener("keyup",b);this.addEventListener("keyup",b)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(a,b,c){hF.includes(a)?this.update():"disabled"===a&&c!==b&&(null==c?this.enable():this.disable()),super.attributeChangedCallback(a,b,c)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return eW(this,hE.REMAINING)}set remaining(a){eX(this,hE.REMAINING,a)}get showDuration(){return eW(this,hE.SHOW_DURATION)}set showDuration(a){eX(this,hE.SHOW_DURATION,a)}get noToggle(){return eW(this,hE.NO_TOGGLE)}set noToggle(a){eX(this,hE.NO_TOGGLE,a)}get mediaDuration(){return eU(this,d7.MEDIA_DURATION)}set mediaDuration(a){eV(this,d7.MEDIA_DURATION,a)}get mediaCurrentTime(){return eU(this,d7.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){eV(this,d7.MEDIA_CURRENT_TIME,a)}get mediaSeekable(){let a=this.getAttribute(d7.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(d7.MEDIA_SEEKABLE);this.setAttribute(d7.MEDIA_SEEKABLE,a.join(":"))}update(){let a=hI(this);(a=>{var b;let c=a.mediaCurrentTime,[,d]=null!=(b=a.mediaSeekable)?b:[],e=null;if(Number.isFinite(a.mediaDuration)?e=a.mediaDuration:Number.isFinite(d)&&(e=d),null==c||null===e)return a.setAttribute("aria-valuetext","video not loaded, unknown time.");let f=a.remaining?eo(0-(e-c)):eo(c);if(!a.showDuration)return a.setAttribute("aria-valuetext",f);let g=eo(e),h=`${f} of ${g}`;a.setAttribute("aria-valuetext",h)})(this),a!==hD(this,k7).innerHTML&&(hD(this,k7).innerHTML=a)}}k7=new WeakMap,hJ.getSlotTemplateHTML=function(a,b){return`
    <slot>${hI(b)}</slot>
  `},eB.customElements.get("media-time-display")||eB.customElements.define("media-time-display",hJ);var hK=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hL=(a,b,c)=>(hK(a,b,"read from private field"),c?c.call(a):b.get(a)),hM=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hN=(a,b,c,d)=>(hK(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);class hO{constructor(a,b,c){hM(this,k8,void 0),hM(this,k9,void 0),hM(this,la,void 0),hM(this,lb,void 0),hM(this,lc,void 0),hM(this,ld,void 0),hM(this,le,void 0),hM(this,lf,void 0),hM(this,lg,0),hM(this,lh,(a=performance.now())=>{hN(this,lg,requestAnimationFrame(hL(this,lh))),hN(this,lb,performance.now()-hL(this,la));let b=1e3/this.fps;if(hL(this,lb)>b){hN(this,la,a-hL(this,lb)%b);let c=1e3/((a-hL(this,k9))/++((a,b,c,d)=>({set _(value){hN(a,b,value,c)},get _(){return hL(a,b,d)}}))(this,lc)._),d=(a-hL(this,ld))/1e3/this.duration,e=hL(this,le)+d*this.playbackRate;e-hL(this,k8).valueAsNumber>0?hN(this,lf,this.playbackRate/this.duration/c):(hN(this,lf,.995*hL(this,lf)),e=hL(this,k8).valueAsNumber+hL(this,lf)),this.callback(e)}}),hN(this,k8,a),this.callback=b,this.fps=c}start(){0===hL(this,lg)&&(hN(this,la,performance.now()),hN(this,k9,hL(this,la)),hN(this,lc,0),hL(this,lh).call(this))}stop(){0!==hL(this,lg)&&(cancelAnimationFrame(hL(this,lg)),hN(this,lg,0))}update({start:a,duration:b,playbackRate:c}){let d=a-hL(this,k8).valueAsNumber,e=Math.abs(b-this.duration);(d>0||d<-.03||e>=.5)&&this.callback(a),hN(this,le,a),hN(this,ld,performance.now()),this.duration=b,this.playbackRate=c}}k8=new WeakMap,k9=new WeakMap,la=new WeakMap,lb=new WeakMap,lc=new WeakMap,ld=new WeakMap,le=new WeakMap,lf=new WeakMap,lg=new WeakMap,lh=new WeakMap;var hP=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hQ=(a,b,c)=>(hP(a,b,"read from private field"),c?c.call(a):b.get(a)),hR=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},hS=(a,b,c,d)=>(hP(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),hT=(a,b,c)=>(hP(a,b,"access private method"),c);let hU=(a,b=a.mediaCurrentTime)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:Math.max(0,Math.min((b-c)/(d-c),1))},hV=(a,b=a.range.valueAsNumber)=>{let c=Number.isFinite(a.mediaSeekableStart)?a.mediaSeekableStart:0,d=Number.isFinite(a.mediaDuration)?a.mediaDuration:a.mediaSeekableEnd;return Number.isNaN(d)?0:b*(d-c)+c};class hW extends gz{constructor(){super(),hR(this,lr),hR(this,lt),hR(this,lw),hR(this,ly),hR(this,lA),hR(this,lC),hR(this,lE),hR(this,lG),hR(this,li,void 0),hR(this,lj,void 0),hR(this,lk,void 0),hR(this,ll,void 0),hR(this,lm,void 0),hR(this,ln,void 0),hR(this,lo,void 0),hR(this,lp,void 0),hR(this,lq,void 0),hR(this,lv,a=>{this.dragging||(ek(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),hS(this,lk,this.shadowRoot.querySelectorAll('[part~="box"]')),hS(this,lm,this.shadowRoot.querySelector('[part~="preview-box"]')),hS(this,ln,this.shadowRoot.querySelector('[part~="current-box"]'));let a=getComputedStyle(this);hS(this,lo,parseInt(a.getPropertyValue("--media-box-padding-left"))),hS(this,lp,parseInt(a.getPropertyValue("--media-box-padding-right"))),hS(this,lj,new hO(this.range,hQ(this,lv),60))}static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_PAUSED,d7.MEDIA_DURATION,d7.MEDIA_SEEKABLE,d7.MEDIA_CURRENT_TIME,d7.MEDIA_PREVIEW_IMAGE,d7.MEDIA_PREVIEW_TIME,d7.MEDIA_PREVIEW_CHAPTER,d7.MEDIA_BUFFERED,d7.MEDIA_PLAYBACK_RATE,d7.MEDIA_LOADING,d7.MEDIA_ENDED]}connectedCallback(){var a;super.connectedCallback(),this.range.setAttribute("aria-label",es("seek")),hT(this,lr,ls).call(this),hS(this,li,this.getRootNode()),null==(a=hQ(this,li))||a.addEventListener("transitionstart",this)}disconnectedCallback(){var a;super.disconnectedCallback(),hT(this,lr,ls).call(this),null==(a=hQ(this,li))||a.removeEventListener("transitionstart",this),hS(this,li,null)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),b!=c&&(a===d7.MEDIA_CURRENT_TIME||a===d7.MEDIA_PAUSED||a===d7.MEDIA_ENDED||a===d7.MEDIA_LOADING||a===d7.MEDIA_DURATION||a===d7.MEDIA_SEEKABLE?(hQ(this,lj).update({start:hU(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),hT(this,lr,ls).call(this),(a=>{let b=a.range,c=eo(+hV(a)),d=eo(+a.mediaSeekableEnd),e=c&&d?`${c} of ${d}`:"video not loaded, unknown time.";b.setAttribute("aria-valuetext",e)})(this)):a===d7.MEDIA_BUFFERED&&this.updateBufferedBar(),(a===d7.MEDIA_DURATION||a===d7.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=hQ(this,lq),this.updateBar()))}get mediaChaptersCues(){return hQ(this,lq)}set mediaChaptersCues(a){var b;hS(this,lq,a),this.updateSegments(null==(b=hQ(this,lq))?void 0:b.map(a=>({start:hU(this,a.startTime),end:hU(this,a.endTime)})))}get mediaPaused(){return eW(this,d7.MEDIA_PAUSED)}set mediaPaused(a){eX(this,d7.MEDIA_PAUSED,a)}get mediaLoading(){return eW(this,d7.MEDIA_LOADING)}set mediaLoading(a){eX(this,d7.MEDIA_LOADING,a)}get mediaDuration(){return eU(this,d7.MEDIA_DURATION)}set mediaDuration(a){eV(this,d7.MEDIA_DURATION,a)}get mediaCurrentTime(){return eU(this,d7.MEDIA_CURRENT_TIME)}set mediaCurrentTime(a){eV(this,d7.MEDIA_CURRENT_TIME,a)}get mediaPlaybackRate(){return eU(this,d7.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){eV(this,d7.MEDIA_PLAYBACK_RATE,a)}get mediaBuffered(){let a=this.getAttribute(d7.MEDIA_BUFFERED);return a?a.split(" ").map(a=>a.split(":").map(a=>+a)):[]}set mediaBuffered(a){if(!a)return void this.removeAttribute(d7.MEDIA_BUFFERED);let b=a.map(a=>a.join(":")).join(" ");this.setAttribute(d7.MEDIA_BUFFERED,b)}get mediaSeekable(){let a=this.getAttribute(d7.MEDIA_SEEKABLE);if(a)return a.split(":").map(a=>+a)}set mediaSeekable(a){if(null==a)return void this.removeAttribute(d7.MEDIA_SEEKABLE);this.setAttribute(d7.MEDIA_SEEKABLE,a.join(":"))}get mediaSeekableEnd(){var a;let[,b=this.mediaDuration]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaSeekableStart(){var a;let[b=0]=null!=(a=this.mediaSeekable)?a:[];return b}get mediaPreviewImage(){return eY(this,d7.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(a){eZ(this,d7.MEDIA_PREVIEW_IMAGE,a)}get mediaPreviewTime(){return eU(this,d7.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(a){eV(this,d7.MEDIA_PREVIEW_TIME,a)}get mediaEnded(){return eW(this,d7.MEDIA_ENDED)}set mediaEnded(a){eX(this,d7.MEDIA_ENDED,a)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var a;let b,c=this.mediaBuffered;if(!c.length)return;if(this.mediaEnded)b=1;else{let d=this.mediaCurrentTime,[,e=this.mediaSeekableStart]=null!=(a=c.find(([a,b])=>a<=d&&d<=b))?a:[];b=hU(this,e)}let{style:d}=eS(this.shadowRoot,"#buffered");d.setProperty("width",`${100*b}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let a=eS(this.shadowRoot,"#current-rail"),b=eS(this.shadowRoot,'[part~="current-box"]'),c=hT(this,lw,lx).call(this,hQ(this,ln)),d=hT(this,ly,lz).call(this,c,this.range.valueAsNumber),e=hT(this,lA,lB).call(this,c,this.range.valueAsNumber);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${c.range.width}`),b.style.setProperty("--_box-shift",`${e}`),b.style.setProperty("--_box-width",`${c.box.width}px`),b.style.setProperty("visibility","initial")}handleEvent(a){switch(super.handleEvent(a),a.type){case"input":hT(this,lG,lH).call(this);break;case"pointermove":hT(this,lC,lD).call(this,a);break;case"pointerup":case"pointerleave":hT(this,lE,lF).call(this,null);break;case"transitionstart":eN(a.target,this)&&setTimeout(()=>hT(this,lr,ls).call(this),0)}}}li=new WeakMap,lj=new WeakMap,lk=new WeakMap,ll=new WeakMap,lm=new WeakMap,ln=new WeakMap,lo=new WeakMap,lp=new WeakMap,lq=new WeakMap,lr=new WeakSet,ls=function(){hT(this,lt,lu).call(this)?hQ(this,lj).start():hQ(this,lj).stop()},lt=new WeakSet,lu=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&eR(this)},lv=new WeakMap,lw=new WeakSet,lx=function(a){var b;let c=(null!=(b=this.getAttribute("bounds")?eO(this,`#${this.getAttribute("bounds")}`):this.parentElement)?b:this).getBoundingClientRect(),d=this.range.getBoundingClientRect(),e=a.offsetWidth,f=-(d.left-c.left-e/2),g=c.right-d.left-e/2;return{box:{width:e,min:f,max:g},bounds:c,range:d}},ly=new WeakSet,lz=function(a,b){let c=`${100*b}%`,{width:d,min:e,max:f}=a.box;if(!d)return c;if(!Number.isNaN(e)){let a=`calc(1 / var(--_range-width) * 100 * ${e}% + var(--media-box-padding-left))`;c=`max(${a}, ${c})`}if(!Number.isNaN(f)){let a=`calc(1 / var(--_range-width) * 100 * ${f}% - var(--media-box-padding-right))`;c=`min(${c}, ${a})`}return c},lA=new WeakSet,lB=function(a,b){let{width:c,min:d,max:e}=a.box,f=b*a.range.width;if(f<d+hQ(this,lo)){let b=a.range.left-a.bounds.left-hQ(this,lo);return`${f-c/2+b}px`}if(f>e-hQ(this,lp)){let b=a.bounds.right-a.range.right-hQ(this,lp);return`${f+c/2-b-a.range.width}px`}return 0},lC=new WeakSet,lD=function(a){let b=[...hQ(this,lk)].some(b=>a.composedPath().includes(b));if(!this.dragging&&(b||!a.composedPath().includes(this)))return void hT(this,lE,lF).call(this,null);let c=this.mediaSeekableEnd;if(!c)return;let d=eS(this.shadowRoot,"#preview-rail"),e=eS(this.shadowRoot,'[part~="preview-box"]'),f=hT(this,lw,lx).call(this,hQ(this,lm)),g=(a.clientX-f.range.left)/f.range.width;g=Math.max(0,Math.min(1,g));let h=hT(this,ly,lz).call(this,f,g),i=hT(this,lA,lB).call(this,f,g);d.style.transform=`translateX(${h})`,d.style.setProperty("--_range-width",`${f.range.width}`),e.style.setProperty("--_box-shift",`${i}`),e.style.setProperty("--_box-width",`${f.box.width}px`),1>Math.abs(Math.round(hQ(this,ll))-Math.round(g*c))&&g>.01&&g<.99||(hS(this,ll,g*c),hT(this,lE,lF).call(this,hQ(this,ll)))},lE=new WeakSet,lF=function(a){this.dispatchEvent(new eB.CustomEvent(d3.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:a}))},lG=new WeakSet,lH=function(){hQ(this,lj).stop();let a=hV(this);this.dispatchEvent(new eB.CustomEvent(d3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:a}))},hW.shadowRootOptions={mode:"open"},hW.getTemplateHTML=function(a){return`
    ${gz.getTemplateHTML(a)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${d7.MEDIA_PREVIEW_IMAGE}], [${d7.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${d7.MEDIA_PREVIEW_IMAGE}], [${d7.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${d7.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${d7.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${d7.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${d7.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${d7.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${d7.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${d7.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${d7.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${d7.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${d7.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${d7.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${d7.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${hu.shadowRootOptions.mode}">
            ${hu.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},eB.customElements.get("media-time-range")||eB.customElements.define("media-time-range",hW);class hX extends gz{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_VOLUME,d7.MEDIA_MUTED,d7.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let a=this.range.value,b=new eB.CustomEvent(d3.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(b)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",es("volume"))}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===d7.MEDIA_VOLUME||a===d7.MEDIA_MUTED){let a;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(a=this.range.valueAsNumber,`${Math.round(100*a)}%`)),this.updateBar()}}get mediaVolume(){return eU(this,d7.MEDIA_VOLUME,1)}set mediaVolume(a){eV(this,d7.MEDIA_VOLUME,a)}get mediaMuted(){return eW(this,d7.MEDIA_MUTED)}set mediaMuted(a){eX(this,d7.MEDIA_MUTED,a)}get mediaVolumeUnavailable(){return eY(this,d7.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(a){eZ(this,d7.MEDIA_VOLUME_UNAVAILABLE,a)}}eB.customElements.get("media-volume-range")||eB.customElements.define("media-volume-range",hX);var hY=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},hZ=(a,b,c)=>(hY(a,b,"read from private field"),c?c.call(a):b.get(a)),h$=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},h_=(a,b,c,d)=>(hY(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);let h0={processCallback(a,b,c){if(c){for(let[a,d]of b)if(a in c){let b=c[a];"boolean"==typeof b&&d instanceof h8&&"boolean"==typeof d.element[d.attributeName]?d.booleanValue=b:"function"==typeof b&&d instanceof h8?d.element[d.attributeName]=b:d.value=b}}}};class h1 extends eB.DocumentFragment{constructor(a,b,c=h0){var d;super(),h$(this,lI,void 0),h$(this,lJ,void 0),this.append(a.content.cloneNode(!0)),h_(this,lI,h2(this)),h_(this,lJ,c),null==(d=c.createCallback)||d.call(c,this,hZ(this,lI),b),c.processCallback(this,hZ(this,lI),b)}update(a){hZ(this,lJ).processCallback(this,hZ(this,lI),a)}}lI=new WeakMap,lJ=new WeakMap;let h2=(a,b=[])=>{let c,d;for(let e of a.attributes||[])if(e.value.includes("{{")){let f=new h7;for([c,d]of h4(e.value))if(c){let c=new h8(a,e.name,e.namespaceURI);f.append(c),b.push([d,c])}else f.append(d);e.value=f.toString()}for(let e of a.childNodes)if(1!==e.nodeType||e instanceof HTMLTemplateElement){let f=e.data;if(1===e.nodeType||f.includes("{{")){let g=[];if(f)for([c,d]of h4(f))if(c){let c=new h9(a);g.push(c),b.push([d,c])}else g.push(new Text(d));else if(e instanceof HTMLTemplateElement){let c=new ia(a,e);g.push(c),b.push([c.expression,c])}e.replaceWith(...g.flatMap(a=>a.replacementNodes||[a]))}}else h2(e,b);return b},h3={},h4=a=>{let b="",c=0,d=h3[a],e=0,f;if(d)return d;for(d=[];f=a[e];e++)"{"===f&&"{"===a[e+1]&&"\\"!==a[e-1]&&a[e+2]&&1==++c?(b&&d.push([0,b]),b="",e++):"}"!==f||"}"!==a[e+1]||"\\"===a[e-1]||--c?b+=f||"":(d.push([1,b.trim()]),b="",e++);return b&&d.push([0,(c>0?"{{":"")+b]),h3[a]=d};class h5{get value(){return""}set value(a){}toString(){return this.value}}let h6=new WeakMap;class h7{constructor(){h$(this,lK,[])}[Symbol.iterator](){return hZ(this,lK).values()}get length(){return hZ(this,lK).length}item(a){return hZ(this,lK)[a]}append(...a){for(let b of a)b instanceof h8&&h6.set(b,this),hZ(this,lK).push(b)}toString(){return hZ(this,lK).join("")}}lK=new WeakMap;class h8 extends h5{constructor(a,b,c){super(),h$(this,lP),h$(this,lL,""),h$(this,lM,void 0),h$(this,lN,void 0),h$(this,lO,void 0),h_(this,lM,a),h_(this,lN,b),h_(this,lO,c)}get attributeName(){return hZ(this,lN)}get attributeNamespace(){return hZ(this,lO)}get element(){return hZ(this,lM)}get value(){return hZ(this,lL)}set value(a){hZ(this,lL)!==a&&(h_(this,lL,a),hZ(this,lP,lQ)&&1!==hZ(this,lP,lQ).length?hZ(this,lM).setAttributeNS(hZ(this,lO),hZ(this,lN),hZ(this,lP,lQ).toString()):null==a?hZ(this,lM).removeAttributeNS(hZ(this,lO),hZ(this,lN)):hZ(this,lM).setAttributeNS(hZ(this,lO),hZ(this,lN),a))}get booleanValue(){return hZ(this,lM).hasAttributeNS(hZ(this,lO),hZ(this,lN))}set booleanValue(a){if(hZ(this,lP,lQ)&&1!==hZ(this,lP,lQ).length)throw new DOMException("Value is not fully templatized");this.value=a?"":null}}lL=new WeakMap,lM=new WeakMap,lN=new WeakMap,lO=new WeakMap,lP=new WeakSet,lQ=function(){return h6.get(this)};class h9 extends h5{constructor(a,b){super(),h$(this,lR,void 0),h$(this,lS,void 0),h_(this,lR,a),h_(this,lS,b?[...b]:[new Text])}get replacementNodes(){return hZ(this,lS)}get parentNode(){return hZ(this,lR)}get nextSibling(){return hZ(this,lS)[hZ(this,lS).length-1].nextSibling}get previousSibling(){return hZ(this,lS)[0].previousSibling}get value(){return hZ(this,lS).map(a=>a.textContent).join("")}set value(a){this.replace(a)}replace(...a){let b=a.flat().flatMap(a=>null==a?[new Text]:a.forEach?[...a]:11===a.nodeType?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);b.length||b.push(new Text),h_(this,lS,function(a,b,c,d=null){let e=0,f,g,h,i=c.length,j=b.length;for(;e<i&&e<j&&b[e]==c[e];)e++;for(;e<i&&e<j&&c[i-1]==b[j-1];)d=c[--j,--i];if(e==j)for(;e<i;)a.insertBefore(c[e++],d);if(e==i)for(;e<j;)a.removeChild(b[e++]);else{for(f=b[e];e<i;)h=c[e++],g=f?f.nextSibling:d,f==h?f=g:e<i&&c[e]==g?(a.replaceChild(h,f),f=g):a.insertBefore(h,f);for(;f!=d;)g=f.nextSibling,a.removeChild(f),f=g}return c}(hZ(this,lS)[0].parentNode,hZ(this,lS),b,this.nextSibling))}}lR=new WeakMap,lS=new WeakMap;class ia extends h9{constructor(a,b){let c=b.getAttribute("directive")||b.getAttribute("type"),d=b.getAttribute("expression")||b.getAttribute(c)||"";d.startsWith("{{")&&(d=d.trim().slice(2,-2).trim()),super(a),this.expression=d,this.template=b,this.directive=c}}let ib={string:a=>String(a)};class ic{constructor(a){this.template=a,this.state=void 0}}let id=new WeakMap,ie=new WeakMap,ig={partial:(a,b)=>{b[a.expression]=new ic(a.template)},if:(a,b)=>{var c;if(ik(a.expression,b))if(id.get(a)!==a.template){id.set(a,a.template);let c=new h1(a.template,b,ii);a.replace(c),ie.set(a,c)}else null==(c=ie.get(a))||c.update(b);else a.replace(""),id.delete(a),ie.delete(a)}},ih=Object.keys(ig),ii={processCallback(a,b,c){var d,e;if(c)for(let[a,f]of b){if(f instanceof ia){if(!f.directive){let a=ih.find(a=>f.template.hasAttribute(a));a&&(f.directive=a,f.expression=f.template.getAttribute(a))}null==(d=ig[f.directive])||d.call(ig,f,c);continue}let b=ik(a,c);if(b instanceof ic){id.get(f)!==b.template?(id.set(f,b.template),f.value=b=new h1(b.template,b.state,ii),ie.set(f,b)):null==(e=ie.get(f))||e.update(b.state);continue}b?(f instanceof h8&&f.attributeName.startsWith("aria-")&&(b=String(b)),f instanceof h8?"boolean"==typeof b?f.booleanValue=b:"function"==typeof b?f.element[f.attributeName]=b:f.value=b:(f.value=b,id.delete(f),ie.delete(f))):f instanceof h8?f.value=void 0:(f.value=void 0,id.delete(f),ie.delete(f))}}},ij={"!":a=>!a,"!!":a=>!!a,"==":(a,b)=>a==b,"!=":(a,b)=>a!=b,">":(a,b)=>a>b,">=":(a,b)=>a>=b,"<":(a,b)=>a<b,"<=":(a,b)=>a<=b,"??":(a,b)=>null!=a?a:b,"|":(a,b)=>{var c;return null==(c=ib[b])?void 0:c.call(ib,a)}};function ik(a,b={}){var c,d,e,f,g,h,i;let j=(function(a,b){let c,d,e,f=[];for(;a;){for(let f in e=null,c=a.length,b)(d=b[f].exec(a))&&d.index<c&&(e={token:d[0],type:f,matches:d.slice(1)},c=d.index);c&&f.push({token:a.substr(0,c),type:void 0}),e&&f.push(e),a=a.substr(c+(e?e.token.length:0))}return f})(a,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:a})=>"ws"!==a);if(0===j.length||j.some(({type:a})=>!a))return il(a);if((null==(c=j[0])?void 0:c.token)===">"){let c=b[null==(d=j[1])?void 0:d.token];if(!c)return il(a);let h={...b};c.state=h;let i=j.slice(2);for(let a=0;a<i.length;a+=3){let c=null==(e=i[a])?void 0:e.token,d=null==(f=i[a+1])?void 0:f.token,j=null==(g=i[a+2])?void 0:g.token;c&&"="===d&&(h[c]=io(j,b))}return c}if(1===j.length)return im(j[0])?io(j[0].token,b):il(a);if(2===j.length){let c=ij[null==(h=j[0])?void 0:h.token];return c&&im(j[1])?c(io(j[1].token,b)):il(a)}if(3===j.length){let c=null==(i=j[1])?void 0:i.token,d=ij[c];if(!d||!im(j[0])||!im(j[2]))return il(a);let e=io(j[0].token,b);return d(e,"|"===c?j[2].token:io(j[2].token,b))}}function il(a){return console.warn(`Warning: invalid expression \`${a}\``),!1}function im({type:a}){return["number","boolean","string","param"].includes(a)}function io(a,b){let c=a[0],d=a.slice(-1);return"true"===a||"false"===a?"true"===a:c===d&&["'",'"'].includes(c)?a.slice(1,-1):el(a)?parseFloat(a):b[a]}var ip=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iq=(a,b,c)=>(ip(a,b,"read from private field"),c?c.call(a):b.get(a)),ir=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},is=(a,b,c,d)=>(ip(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),it=(a,b,c)=>(ip(a,b,"access private method"),c);let iu={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},iv=eC.createElement("template");iv.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class iw extends eB.HTMLElement{constructor(){super(),ir(this,lW),ir(this,lY),ir(this,lT,void 0),ir(this,lU,void 0),ir(this,lV,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let a=new MutationObserver(a=>{var b;(!this.mediaController||(null==(b=this.mediaController)?void 0:b.breakpointsComputed))&&a.some(a=>{let b=a.target;return b===this||"media-controller"===b.localName&&!!(iu[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});a.observe(this,{attributes:!0}),a.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(d8.BREAKPOINTS_COMPUTED,this.render),it(this,lW,lX).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var a;return null!=(a=iq(this,lT))?a:this.constructor.template}set template(a){is(this,lV,null),is(this,lT,a),this.createRenderer()}get props(){var a,b,c;let d=[...Array.from(null!=(b=null==(a=this.mediaController)?void 0:a.attributes)?b:[]).filter(({name:a})=>iu[a]||a.startsWith("breakpoint")),...Array.from(this.attributes)],e={};for(let a of d){let b=null!=(c=iu[a.name])?c:a.name.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase()),{value:d}=a;null!=d?(el(d)&&(d=parseFloat(d)),e[b]=""===d||d):e[b]=!1}return e}attributeChangedCallback(a,b,c){"template"===a&&b!=c&&it(this,lY,lZ).call(this)}connectedCallback(){it(this,lY,lZ).call(this)}createRenderer(){this.template&&this.template!==iq(this,lU)&&(is(this,lU,this.template),this.renderer=new h1(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(iv.content.cloneNode(!0),this.renderer))}render(){var a;null==(a=this.renderer)||a.update(this.props)}}async function ix(a){let b=await fetch(a);if(200!==b.status)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);return b.text()}function iy(a){return a.split("-")[0]}lT=new WeakMap,lU=new WeakMap,lV=new WeakMap,lW=new WeakSet,lX=function(a){if(Object.prototype.hasOwnProperty.call(this,a)){let b=this[a];delete this[a],this[a]=b}},lY=new WeakSet,lZ=function(){var a;let b=this.getAttribute("template");if(!b||b===iq(this,lV))return;let c=this.getRootNode(),d=null==(a=null==c?void 0:c.getElementById)?void 0:a.call(c,b);if(d){is(this,lV,b),is(this,lT,d),this.createRenderer();return}(function(a){if(!/^(\/|\.\/|https?:\/\/)/.test(a))return!1;let b=/^https?:\/\//.test(a)?void 0:location.origin;try{new URL(a,b)}catch(a){return!1}return!0})(b)&&(is(this,lV,b),ix(b).then(a=>{let b=eC.createElement("template");b.innerHTML=a,is(this,lT,b),this.createRenderer()}).catch(console.error))},iw.observedAttributes=["template"],iw.processor=ii,eB.customElements.get("media-theme")||eB.customElements.define("media-theme",iw);class iz extends Event{constructor({action:a="auto",relatedTarget:b,...c}){super("invoke",c),this.action=a,this.relatedTarget=b}}class iA extends Event{constructor({newState:a,oldState:b,...c}){super("toggle",c),this.newState=a,this.oldState=b}}var iB=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iC=(a,b,c)=>(iB(a,b,"read from private field"),c?c.call(a):b.get(a)),iD=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iE=(a,b,c,d)=>(iB(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),iF=(a,b,c)=>(iB(a,b,"access private method"),c);function iG({type:a,text:b,value:c,checked:d}){let e=eC.createElement("media-chrome-menu-item");e.type=null!=a?a:"",e.part.add("menu-item"),a&&e.part.add(a),e.value=c,e.checked=d;let f=eC.createElement("span");return f.textContent=b,e.append(f),e}function iH(a,b){let c=a.querySelector(`:scope > [slot="${b}"]`);if((null==c?void 0:c.nodeName)=="SLOT"&&(c=c.assignedElements({flatten:!0})[0]),c)return c.cloneNode(!0);let d=a.shadowRoot.querySelector(`[name="${b}"] > svg`);return d?d.cloneNode(!0):""}let iI={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class iJ extends eB.HTMLElement{constructor(){if(super(),iD(this,l5),iD(this,l8),iD(this,ma),iD(this,mc),iD(this,me),iD(this,mi),iD(this,mk),iD(this,mm),iD(this,mo),iD(this,mq),iD(this,ms),iD(this,mu),iD(this,mw),iD(this,my),iD(this,mA),iD(this,mC),iD(this,mE),iD(this,l$,null),iD(this,l_,null),iD(this,l0,null),iD(this,l1,new Set),iD(this,l2,void 0),iD(this,l3,!1),iD(this,l4,null),iD(this,l7,()=>{let a=iC(this,l1),b=new Set(this.items);for(let c of a)b.has(c)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:c}));for(let c of b)a.has(c)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:c}));iE(this,l1,b)}),iD(this,mg,()=>{iF(this,mi,mj).call(this),iF(this,mk,ml).call(this,!1)}),iD(this,mh,()=>{iF(this,mi,mj).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),iE(this,l2,new MutationObserver(iC(this,l7))),iC(this,l2).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[iI.DISABLED,iI.HIDDEN,iI.STYLE,iI.ANCHOR,d4.MEDIA_CONTROLLER]}static formatMenuItemText(a,b){return a}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(a){switch(a.type){case"slotchange":iF(this,l5,l6).call(this,a);break;case"invoke":iF(this,ma,mb).call(this,a);break;case"click":iF(this,mm,mn).call(this,a);break;case"toggle":iF(this,mq,mr).call(this,a);break;case"focusout":iF(this,mu,mv).call(this,a);break;case"keydown":iF(this,mw,mx).call(this,a)}}connectedCallback(){var a,b;iE(this,l4,eT(this.shadowRoot,":host")),iF(this,l8,l9).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),iE(this,l$,eK(this)),null==(b=null==(a=iC(this,l$))?void 0:a.associateElement)||b.call(a,this),this.hidden||(eG(iL(this),iC(this,mg)),eG(this,iC(this,mh)))}disconnectedCallback(){var a,b;eH(iL(this),iC(this,mg)),eH(this,iC(this,mh)),this.disable(),null==(b=null==(a=iC(this,l$))?void 0:a.unassociateElement)||b.call(a,this),iE(this,l$,null)}attributeChangedCallback(a,b,c){var d,e,f,g;a===iI.HIDDEN&&c!==b?(iC(this,l3)||iE(this,l3,!0),this.hidden?iF(this,me,mf).call(this):iF(this,mc,md).call(this),this.dispatchEvent(new iA({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):a===d4.MEDIA_CONTROLLER?(b&&(null==(e=null==(d=iC(this,l$))?void 0:d.unassociateElement)||e.call(d,this),iE(this,l$,null)),c&&this.isConnected&&(iE(this,l$,eK(this)),null==(g=null==(f=iC(this,l$))?void 0:f.associateElement)||g.call(f,this))):a===iI.DISABLED&&c!==b?null==c?this.enable():this.disable():a===iI.STYLE&&c!==b&&iF(this,l8,l9).call(this)}formatMenuItemText(a,b){return this.constructor.formatMenuItemText(a,b)}get anchor(){return this.getAttribute("anchor")}set anchor(a){this.setAttribute("anchor",`${a}`)}get anchorElement(){var a;return this.anchor?null==(a=eQ(this))?void 0:a.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(iK)}get radioGroupItems(){return this.items.filter(a=>"menuitemradio"===a.role)}get checkedItems(){return this.items.filter(a=>a.checked)}get value(){var a,b;return null!=(b=null==(a=this.checkedItems[0])?void 0:a.value)?b:""}set value(a){let b=this.items.find(b=>b.value===a);b&&iF(this,mE,mF).call(this,b)}focus(){if(iE(this,l_,eP()),this.items.length){iF(this,mC,mD).call(this,this.items[0]),this.items[0].focus();return}let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==a||a.focus()}handleSelect(a){var b;let c=iF(this,my,mz).call(this,a);c&&(iF(this,mE,mF).call(this,c,"checkbox"===c.type),iC(this,l0)&&!this.hidden&&(null==(b=iC(this,l_))||b.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(a){var b,c;let{key:d}=a,e=this.items,f=null!=(c=null!=(b=iF(this,my,mz).call(this,a))?b:iF(this,mA,mB).call(this))?c:e[0],g=Math.max(0,e.indexOf(f));"ArrowDown"===d?g++:"ArrowUp"===d?g--:"Home"===a.key?g=0:"End"===a.key&&(g=e.length-1),g<0&&(g=e.length-1),g>e.length-1&&(g=0),iF(this,mC,mD).call(this,e[g]),e[g].focus()}}function iK(a){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==a?void 0:a.role)}function iL(a){var b;return null!=(b=a.getAttribute("bounds")?eO(a,`#${a.getAttribute("bounds")}`):eJ(a)||a.parentElement)?b:a}l$=new WeakMap,l_=new WeakMap,l0=new WeakMap,l1=new WeakMap,l2=new WeakMap,l3=new WeakMap,l4=new WeakMap,l5=new WeakSet,l6=function(a){let b=a.target;for(let a of b.assignedNodes({flatten:!0}))3===a.nodeType&&""===a.textContent.trim()&&a.remove();["header","title"].includes(b.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===b.assignedNodes().length),b.name||iC(this,l7).call(this)},l7=new WeakMap,l8=new WeakSet,l9=function(){var a;let b=this.shadowRoot.querySelector("#layout-row"),c=null==(a=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:a.trim();b.setAttribute("media","row"===c?"":"width:0")},ma=new WeakSet,mb=function(a){iE(this,l0,a.relatedTarget),eN(this,a.relatedTarget)||(this.hidden=!this.hidden)},mc=new WeakSet,md=function(){var a;null==(a=iC(this,l0))||a.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),eG(iL(this),iC(this,mg)),eG(this,iC(this,mh))},me=new WeakSet,mf=function(){var a;null==(a=iC(this,l0))||a.setAttribute("aria-expanded","false"),eH(iL(this),iC(this,mg)),eH(this,iC(this,mh))},mg=new WeakMap,mh=new WeakMap,mi=new WeakSet,mj=function(a){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:b,y:c}=function({anchor:a,floating:b,placement:c}){let{x:d,y:e}=function({anchor:a,floating:b},c){let d,e="x"==(["top","bottom"].includes(iy(c))?"y":"x")?"y":"x",f="y"===e?"height":"width",g=iy(c),h=a.x+a.width/2-b.width/2,i=a.y+a.height/2-b.height/2,j=a[f]/2-b[f]/2;switch(g){case"top":d={x:h,y:a.y-b.height};break;case"bottom":d={x:h,y:a.y+a.height};break;case"right":d={x:a.x+a.width,y:i};break;case"left":d={x:a.x-b.width,y:i};break;default:d={x:a.x,y:a.y}}switch(c.split("-")[1]){case"start":d[e]-=j;break;case"end":d[e]+=j}return d}(function({anchor:a,floating:b}){return{anchor:function(a,b){var c;let d=a.getBoundingClientRect(),e=null!=(c=null==b?void 0:b.getBoundingClientRect())?c:{x:0,y:0};return{x:d.x-e.x,y:d.y-e.y,width:d.width,height:d.height}}(a,b.offsetParent),floating:{x:0,y:0,width:b.offsetWidth,height:b.offsetHeight}}}({anchor:a,floating:b}),c);return{x:d,y:e}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=a||(a=this.offsetWidth);let d=iL(this).getBoundingClientRect(),e=d.width-b-a,f=d.height-c-this.offsetHeight,{style:g}=iC(this,l4);g.setProperty("position","absolute"),g.setProperty("right",`${Math.max(0,e)}px`),g.setProperty("--_menu-bottom",`${f}px`);let h=getComputedStyle(this),i=g.getPropertyValue("--_menu-bottom")===h.bottom?f:parseFloat(h.bottom),j=d.height-i-parseFloat(h.marginBottom);this.style.setProperty("--_menu-max-height",`${j}px`)},mk=new WeakSet,ml=function(a){let b=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),c=null==b?void 0:b.querySelector('[role="menu"]'),{style:d}=iC(this,l4);if(a||d.setProperty("--media-menu-transition-in","none"),c){let a=c.offsetHeight,d=Math.max(c.offsetWidth,b.offsetWidth);this.style.setProperty("min-width",`${d}px`),this.style.setProperty("min-height",`${a}px`),iF(this,mi,mj).call(this,d)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),iF(this,mi,mj).call(this);d.removeProperty("--media-menu-transition-in")},mm=new WeakSet,mn=function(a){var b;if(a.stopPropagation(),a.composedPath().includes(iC(this,mo,mp))){null==(b=iC(this,l_))||b.focus(),this.hidden=!0;return}let c=iF(this,my,mz).call(this,a);!c||c.hasAttribute("disabled")||(iF(this,mC,mD).call(this,c),this.handleSelect(a))},mo=new WeakSet,mp=function(){var a;return null==(a=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:a.find(a=>a.matches('button[part~="back"]'))},mq=new WeakSet,mr=function(a){if(a.target===this)return;iF(this,ms,mt).call(this);let b=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let c of b)c.invokeTargetElement!=a.target&&("open"!=a.newState||"true"!=c.getAttribute("aria-expanded")||c.invokeTargetElement.hidden||c.invokeTargetElement.dispatchEvent(new iz({relatedTarget:c})));for(let a of b)a.setAttribute("aria-expanded",`${!a.submenuElement.hidden}`);iF(this,mk,ml).call(this,!0)},ms=new WeakSet,mt=function(){let a=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!a)},mu=new WeakSet,mv=function(a){var b;eN(this,a.relatedTarget)||(iC(this,l3)&&(null==(b=iC(this,l_))||b.focus()),iC(this,l0)&&iC(this,l0)!==a.relatedTarget&&!this.hidden&&(this.hidden=!0))},mw=new WeakSet,mx=function(a){var b,c,d,e,f;let{key:g,ctrlKey:h,altKey:i,metaKey:j}=a;if(!h&&!i&&!j&&this.keysUsed.includes(g))if(a.preventDefault(),a.stopPropagation(),"Tab"===g){if(iC(this,l3)){this.hidden=!0;return}a.shiftKey?null==(c=null==(b=this.previousElementSibling)?void 0:b.focus)||c.call(b):null==(e=null==(d=this.nextElementSibling)?void 0:d.focus)||e.call(d),this.blur()}else"Escape"===g?(null==(f=iC(this,l_))||f.focus(),iC(this,l3)&&(this.hidden=!0)):"Enter"===g||" "===g?this.handleSelect(a):this.handleMove(a)},my=new WeakSet,mz=function(a){return a.composedPath().find(a=>["menuitemradio","menuitemcheckbox"].includes(a.role))},mA=new WeakSet,mB=function(){return this.items.find(a=>0===a.tabIndex)},mC=new WeakSet,mD=function(a){for(let b of this.items)b.tabIndex=b===a?0:-1},mE=new WeakSet,mF=function(a,b){let c=[...this.checkedItems];"radio"===a.type&&this.radioGroupItems.forEach(a=>a.checked=!1),b?a.checked=!a.checked:a.checked=!0,this.checkedItems.some((a,b)=>a!=c[b])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},iJ.shadowRootOptions={mode:"open"},iJ.getTemplateHTML=function(a){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex);
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},eB.customElements.get("media-chrome-menu")||eB.customElements.define("media-chrome-menu",iJ);var iM=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iN=(a,b,c)=>(iM(a,b,"read from private field"),c?c.call(a):b.get(a)),iO=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},iP=(a,b,c,d)=>(iM(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),iQ=(a,b,c)=>(iM(a,b,"access private method"),c);let iR={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class iS extends eB.HTMLElement{constructor(){if(super(),iO(this,mI),iO(this,mK),iO(this,mM),iO(this,mP),iO(this,mR),iO(this,mT),iO(this,mG,!1),iO(this,mH,void 0),iO(this,mO,()=>{var a,b;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let c=this.shadowRoot.querySelector('slot[name="description"]'),d=null==(a=this.submenuElement.checkedItems)?void 0:a[0],e=null!=(b=null==d?void 0:d.dataset.description)?b:null==d?void 0:d.text,f=eC.createElement("span");f.textContent=null!=e?e:"",c.replaceChildren(f)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let a=eI(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(a)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[iR.TYPE,iR.DISABLED,iR.CHECKED,iR.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),iT(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(a){switch(a.type){case"slotchange":iQ(this,mI,mJ).call(this,a);break;case"click":this.handleClick(a);break;case"keydown":iQ(this,mR,mS).call(this,a);break;case"keyup":iQ(this,mP,mQ).call(this,a)}}attributeChangedCallback(a,b,c){a===iR.CHECKED&&iT(this)&&!iN(this,mG)?this.setAttribute("aria-checked",null!=c?"true":"false"):a===iR.TYPE&&c!==b?this.role="menuitem"+c:a===iR.DISABLED&&c!==b&&(null==c?this.enable():this.disable())}connectedCallback(){this.hasAttribute(iR.DISABLED)||this.enable(),this.role="menuitem"+this.type,iP(this,mH,function a(b,c){if(!b)return null;let{host:d}=b.getRootNode();return!c&&d?a(b,d):(null==c?void 0:c.items)?c:a(c,null==c?void 0:c.parentNode)}(this,this.parentNode)),iQ(this,mT,mU).call(this)}disconnectedCallback(){this.disable(),iQ(this,mT,mU).call(this),iP(this,mH,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=eQ(this))?void 0:a.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var a;return null!=(a=this.getAttribute(iR.TYPE))?a:""}set type(a){this.setAttribute(iR.TYPE,`${a}`)}get value(){var a;return null!=(a=this.getAttribute(iR.VALUE))?a:this.text}set value(a){this.setAttribute(iR.VALUE,a)}get text(){var a;return(null!=(a=this.textContent)?a:"").trim()}get checked(){if(iT(this))return"true"===this.getAttribute("aria-checked")}set checked(a){iT(this)&&(iP(this,mG,!0),this.setAttribute("aria-checked",a?"true":"false"),a?this.part.add("checked"):this.part.remove("checked"))}handleClick(a){!iT(this)&&this.invokeTargetElement&&eN(this,a.target)&&this.invokeTargetElement.dispatchEvent(new iz({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function iT(a){return"radio"===a.type||"checkbox"===a.type}mG=new WeakMap,mH=new WeakMap,mI=new WeakSet,mJ=function(a){let b=a.target;if(!(null==b?void 0:b.name))for(let a of b.assignedNodes({flatten:!0}))a instanceof Text&&""===a.textContent.trim()&&a.remove();"submenu"===b.name&&(this.submenuElement?iQ(this,mK,mL).call(this):iQ(this,mM,mN).call(this))},mK=new WeakSet,mL=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",iN(this,mO)),this.submenuElement.addEventListener("addmenuitem",iN(this,mO)),this.submenuElement.addEventListener("removemenuitem",iN(this,mO)),iN(this,mO).call(this)},mM=new WeakSet,mN=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",iN(this,mO)),this.submenuElement.removeEventListener("addmenuitem",iN(this,mO)),this.submenuElement.removeEventListener("removemenuitem",iN(this,mO)),iN(this,mO).call(this)},mO=new WeakMap,mP=new WeakSet,mQ=function(a){let{key:b}=a;if(!this.keysUsed.includes(b))return void this.removeEventListener("keyup",iQ(this,mP,mQ));this.handleClick(a)},mR=new WeakSet,mS=function(a){let{metaKey:b,altKey:c,key:d}=a;if(b||c||!this.keysUsed.includes(d))return void this.removeEventListener("keyup",iQ(this,mP,mQ));this.addEventListener("keyup",iQ(this,mP,mQ),{once:!0})},mT=new WeakSet,mU=function(){var a;let b=null==(a=iN(this,mH))?void 0:a.radioGroupItems;if(!b)return;let c=b.filter(a=>"true"===a.getAttribute("aria-checked")).pop();for(let a of(c||(c=b[0]),b))a.setAttribute("aria-checked","false");null==c||c.setAttribute("aria-checked","true")},iS.shadowRootOptions={mode:"open"},iS.getTemplateHTML=function(a){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(a)}
    </slot>
    <slot name="submenu"></slot>
  `},iS.getSuffixSlotInnerHTML=function(a){return""},eB.customElements.get("media-chrome-menu-item")||eB.customElements.define("media-chrome-menu-item",iS);class iU extends iJ{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:eJ(this).querySelector("media-settings-menu-button")}}iU.getTemplateHTML=function(a){return`
    ${iJ.getTemplateHTML(a)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},eB.customElements.get("media-settings-menu")||eB.customElements.define("media-settings-menu",iU);class iV extends iS{}iV.shadowRootOptions={mode:"open"},iV.getTemplateHTML=function(a){return`
    ${iS.getTemplateHTML.call(this,a)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},iV.getSuffixSlotInnerHTML=function(a){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},eB.customElements.get("media-settings-menu-item")||eB.customElements.define("media-settings-menu-item",iV);class iW extends gb{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(a){this.setAttribute("invoketarget",`${a}`)}get invokeTargetElement(){var a;return this.invokeTarget?null==(a=eQ(this))?void 0:a.querySelector(`#${this.invokeTarget}`):null}handleClick(){var a;null==(a=this.invokeTargetElement)||a.dispatchEvent(new iz({relatedTarget:this}))}}eB.customElements.get("media-chrome-menu-button")||eB.customElements.define("media-chrome-menu-button",iW);class iX extends iW{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",es("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:eJ(this).querySelector("media-settings-menu")}}iX.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},iX.getTooltipContentHTML=function(){return es("Settings")},eB.customElements.get("media-settings-menu-button")||eB.customElements.define("media-settings-menu-button",iX);var iY=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},iZ=(a,b,c)=>(iY(a,b,"read from private field"),c?c.call(a):b.get(a)),i$=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},i_=(a,b,c,d)=>(iY(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),i0=(a,b,c)=>(iY(a,b,"access private method"),c);class i1 extends iJ{constructor(){super(...arguments),i$(this,mX),i$(this,mZ),i$(this,mV,[]),i$(this,mW,void 0)}static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_AUDIO_TRACK_LIST,d7.MEDIA_AUDIO_TRACK_ENABLED,d7.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===d7.MEDIA_AUDIO_TRACK_ENABLED&&b!==c)this.value=c;else if(a===d7.MEDIA_AUDIO_TRACK_LIST&&b!==c){var d;i_(this,mV,null==(d=null!=c?c:"")?void 0:d.split(/\s+/).map(ej)),i0(this,mX,mY).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",i0(this,mZ,m$))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",i0(this,mZ,m$))}get anchorElement(){var a;return"auto"!==this.anchor?super.anchorElement:null==(a=eJ(this))?void 0:a.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return iZ(this,mV)}set mediaAudioTrackList(a){i_(this,mV,a),i0(this,mX,mY).call(this)}get mediaAudioTrackEnabled(){var a;return null!=(a=eY(this,d7.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){eZ(this,d7.MEDIA_AUDIO_TRACK_ENABLED,a)}}mV=new WeakMap,mW=new WeakMap,mX=new WeakSet,mY=function(){if(iZ(this,mW)===JSON.stringify(this.mediaAudioTrackList))return;i_(this,mW,JSON.stringify(this.mediaAudioTrackList));let a=this.mediaAudioTrackList;for(let b of(this.defaultSlot.textContent="",a)){let a=iG({type:"radio",text:this.formatMenuItemText(b.label,b),value:`${b.id}`,checked:b.enabled});a.prepend(iH(this,"checked-indicator")),this.defaultSlot.append(a)}},mZ=new WeakSet,m$=function(){if(null==this.value)return;let a=new eB.CustomEvent(d3.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},eB.customElements.get("media-audio-track-menu")||eB.customElements.define("media-audio-track-menu",i1);let i2=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class i3 extends iW{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_AUDIO_TRACK_ENABLED,d7.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",es("Audio"))}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=eJ(this))?void 0:a.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var a;return null!=(a=eY(this,d7.MEDIA_AUDIO_TRACK_ENABLED))?a:""}set mediaAudioTrackEnabled(a){eZ(this,d7.MEDIA_AUDIO_TRACK_ENABLED,a)}}i3.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${i2}</slot>
  `},i3.getTooltipContentHTML=function(){return es("Audio")},eB.customElements.get("media-audio-track-menu-button")||eB.customElements.define("media-audio-track-menu-button",i3);var i4=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},i5=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},i6=(a,b,c)=>(i4(a,b,"access private method"),c);let i7=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class i8 extends iJ{constructor(){super(...arguments),i5(this,m0),i5(this,m2),i5(this,m_,void 0)}static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_SUBTITLES_LIST,d7.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_SUBTITLES_LIST&&b!==c?i6(this,m0,m1).call(this):a===d7.MEDIA_SUBTITLES_SHOWING&&b!==c&&(this.value=c)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",i6(this,m2,m3))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",i6(this,m2,m3))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:eJ(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return i9(this,d7.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){ja(this,d7.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return i9(this,d7.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){ja(this,d7.MEDIA_SUBTITLES_SHOWING,a)}}m_=new WeakMap,m0=new WeakSet,m1=function(){var a,b,c,d,e,f;if(i4(this,b=m_,"read from private field"),(c?c.call(this):b.get(this))===JSON.stringify(this.mediaSubtitlesList))return;d=m_,e=JSON.stringify(this.mediaSubtitlesList),i4(this,d,"write to private field"),f?f.call(this,e):d.set(this,e),this.defaultSlot.textContent="";let g=!this.value,h=iG({type:"radio",text:this.formatMenuItemText(es("Off")),value:"off",checked:g});for(let b of(h.prepend(iH(this,"checked-indicator")),this.defaultSlot.append(h),this.mediaSubtitlesList)){let c=iG({type:"radio",text:this.formatMenuItemText(b.label,b),value:fj(b),checked:this.value==fj(b)});c.prepend(iH(this,"checked-indicator")),"captions"===(null!=(a=b.kind)?a:"subs")&&c.append(iH(this,"captions-indicator")),this.defaultSlot.append(c)}},m2=new WeakSet,m3=function(){let a=this.mediaSubtitlesShowing,b=this.getAttribute(d7.MEDIA_SUBTITLES_SHOWING),c=this.value!==b;if((null==a?void 0:a.length)&&c&&this.dispatchEvent(new eB.CustomEvent(d3.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:a})),!this.value||!c)return;let d=new eB.CustomEvent(d3.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(d)},i8.getTemplateHTML=function(a){return`
    ${iJ.getTemplateHTML(a)}
    <slot name="captions-indicator" hidden>${i7}</slot>
  `};let i9=(a,b)=>{let c=a.getAttribute(b);return c?fh(c):[]},ja=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=fk(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};eB.customElements.get("media-captions-menu")||eB.customElements.define("media-captions-menu",i8);let jb=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,jc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,jd=a=>{a.setAttribute("aria-checked",fo(a).toString())};class je extends iW{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_SUBTITLES_LIST,d7.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",es("closed captions")),jd(this)}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_SUBTITLES_SHOWING&&jd(this)}get invokeTargetElement(){var a;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(a=eJ(this))?void 0:a.querySelector("media-captions-menu")}get mediaSubtitlesList(){return jf(this,d7.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(a){jg(this,d7.MEDIA_SUBTITLES_LIST,a)}get mediaSubtitlesShowing(){return jf(this,d7.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(a){jg(this,d7.MEDIA_SUBTITLES_SHOWING,a)}}je.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${jb}</slot>
      <slot name="off">${jc}</slot>
    </slot>
  `},je.getTooltipContentHTML=function(){return es("Captions")};let jf=(a,b)=>{let c=a.getAttribute(b);return c?fh(c):[]},jg=(a,b,c)=>{if(!(null==c?void 0:c.length))return void a.removeAttribute(b);let d=fk(c);a.getAttribute(b)!==d&&a.setAttribute(b,d)};eB.customElements.get("media-captions-menu-button")||eB.customElements.define("media-captions-menu-button",je);var jh=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},ji=(a,b,c)=>(jh(a,b,"read from private field"),c?c.call(a):b.get(a)),jj=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},jk=(a,b,c)=>(jh(a,b,"access private method"),c);let jl={RATES:"rates"};class jm extends iJ{constructor(){super(),jj(this,m5),jj(this,m7),jj(this,m4,new ff(this,jl.RATES,{defaultValue:hh})),jk(this,m5,m6).call(this)}static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_PLAYBACK_RATE,jl.RATES]}attributeChangedCallback(a,b,c){super.attributeChangedCallback(a,b,c),a===d7.MEDIA_PLAYBACK_RATE&&b!=c?this.value=c:a===jl.RATES&&b!=c&&(ji(this,m4).value=c,jk(this,m5,m6).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",jk(this,m7,m8))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",jk(this,m7,m8))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:eJ(this).querySelector("media-playback-rate-menu-button")}get rates(){return ji(this,m4)}set rates(a){a?Array.isArray(a)?ji(this,m4).value=a.join(" "):"string"==typeof a&&(ji(this,m4).value=a):ji(this,m4).value="",jk(this,m5,m6).call(this)}get mediaPlaybackRate(){return eU(this,d7.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){eV(this,d7.MEDIA_PLAYBACK_RATE,a)}}m4=new WeakMap,m5=new WeakSet,m6=function(){for(let a of(this.defaultSlot.textContent="",ji(this,m4))){let b=iG({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a,checked:this.mediaPlaybackRate===Number(a)});b.prepend(iH(this,"checked-indicator")),this.defaultSlot.append(b)}},m7=new WeakSet,m8=function(){if(!this.value)return;let a=new eB.CustomEvent(d3.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},eB.customElements.get("media-playback-rate-menu")||eB.customElements.define("media-playback-rate-menu",jm);class jn extends iW{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_PLAYBACK_RATE]}constructor(){var a;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(a=this.mediaPlaybackRate)?a:1}x`}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===d7.MEDIA_PLAYBACK_RATE){let a=c?+c:NaN,b=Number.isNaN(a)?1:a;this.container.innerHTML=`${b}x`,this.setAttribute("aria-label",es("Playback rate {playbackRate}",{playbackRate:b}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:eJ(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return eU(this,d7.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(a){eV(this,d7.MEDIA_PLAYBACK_RATE,a)}}jn.getSlotTemplateHTML=function(a){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${a.mediaplaybackrate||1}x</slot>
  `},jn.getTooltipContentHTML=function(){return es("Playback rate")},eB.customElements.get("media-playback-rate-menu-button")||eB.customElements.define("media-playback-rate-menu-button",jn);var jo=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)},jp=(a,b,c)=>(jo(a,b,"read from private field"),c?c.call(a):b.get(a)),jq=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},jr=(a,b,c,d)=>(jo(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),js=(a,b,c)=>(jo(a,b,"access private method"),c);class jt extends iJ{constructor(){super(...arguments),jq(this,nb),jq(this,nd),jq(this,m9,[]),jq(this,na,{})}static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_RENDITION_LIST,d7.MEDIA_RENDITION_SELECTED,d7.MEDIA_RENDITION_UNAVAILABLE,d7.MEDIA_HEIGHT]}attributeChangedCallback(a,b,c){if(super.attributeChangedCallback(a,b,c),a===d7.MEDIA_RENDITION_SELECTED&&b!==c)this.value=null!=c?c:"auto",js(this,nb,nc).call(this);else if(a===d7.MEDIA_RENDITION_LIST&&b!==c)jr(this,m9,null==c?void 0:c.split(/\s+/).map(eh)),js(this,nb,nc).call(this);else a===d7.MEDIA_HEIGHT&&b!==c&&js(this,nb,nc).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",js(this,nd,ne))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",js(this,nd,ne))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:eJ(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return jp(this,m9)}set mediaRenditionList(a){jr(this,m9,a),js(this,nb,nc).call(this)}get mediaRenditionSelected(){return eY(this,d7.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){eZ(this,d7.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return eU(this,d7.MEDIA_HEIGHT)}set mediaHeight(a){eV(this,d7.MEDIA_HEIGHT,a)}}m9=new WeakMap,na=new WeakMap,nb=new WeakSet,nc=function(){if(jp(this,na).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&jp(this,na).mediaHeight===this.mediaHeight)return;jp(this,na).mediaRenditionList=JSON.stringify(this.mediaRenditionList),jp(this,na).mediaHeight=this.mediaHeight;let a=this.mediaRenditionList.sort((a,b)=>b.height-a.height);for(let b of a)b.selected=b.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let b=!this.mediaRenditionSelected;for(let c of a){let a=iG({type:"radio",text:this.formatMenuItemText(`${Math.min(c.width,c.height)}p`,c),value:`${c.id}`,checked:c.selected&&!b});a.prepend(iH(this,"checked-indicator")),this.defaultSlot.append(a)}let c=iG({type:"radio",text:b?this.formatMenuItemText(`${es("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(es("Auto")),value:"auto",checked:b}),d=this.mediaHeight>0?`${es("Auto")} (${this.mediaHeight}p)`:es("Auto");c.dataset.description=d,c.prepend(iH(this,"checked-indicator")),this.defaultSlot.append(c)},nd=new WeakSet,ne=function(){if(null==this.value)return;let a=new eB.CustomEvent(d3.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},eB.customElements.get("media-rendition-menu")||eB.customElements.define("media-rendition-menu",jt);let ju=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class jv extends iW{static get observedAttributes(){return[...super.observedAttributes,d7.MEDIA_RENDITION_SELECTED,d7.MEDIA_RENDITION_UNAVAILABLE,d7.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",es("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:eJ(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return eY(this,d7.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(a){eZ(this,d7.MEDIA_RENDITION_SELECTED,a)}get mediaHeight(){return eU(this,d7.MEDIA_HEIGHT)}set mediaHeight(a){eV(this,d7.MEDIA_HEIGHT,a)}}jv.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ju}</slot>
  `},jv.getTooltipContentHTML=function(){return es("Quality")},eB.customElements.get("media-rendition-menu-button")||eB.customElements.define("media-rendition-menu-button",jv);var jw=a=>{throw TypeError(a)},jx=(a,b,c)=>b.has(a)||jw("Cannot "+c),jy=(a,b,c)=>(jx(a,b,"read from private field"),c?c.call(a):b.get(a)),jz=(a,b,c)=>b.has(a)?jw("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),jA=(a,b,c,d)=>(jx(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),jB=(a,b,c)=>(jx(a,b,"access private method"),c),jC=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};if("undefined"==typeof DocumentFragment){class a extends jC{}globalThis.DocumentFragment=a}var jD,jE,jF,jG,jH,jI,jJ,jK,jL,jM,jN,jO,jP,jQ,jR,jS,jT,jU,jV,jW,jX,jY,jZ,j$,j_,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,ka,kb,kc,kd,ke,kf,kg,kh,ki,kj,kk,kl,km,kn,ko,kp,kq,kr,ks,kt,ku,kv,kw,kx,ky,kz,kA,kB,kC,kD,kE,kF,kG,kH,kI,kJ,kK,kL,kM,kN,kO,kP,kQ,kR,kS,kT,kU,kV,kW,kX,kY,kZ,k$,k_,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,la,lb,lc,ld,le,lf,lg,lh,li,lj,lk,ll,lm,ln,lo,lp,lq,lr,ls,lt,lu,lv,lw,lx,ly,lz,lA,lB,lC,lD,lE,lF,lG,lH,lI,lJ,lK,lL,lM,lN,lO,lP,lQ,lR,lS,lT,lU,lV,lW,lX,lY,lZ,l$,l_,l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,ma,mb,mc,md,me,mf,mg,mh,mi,mj,mk,ml,mm,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,mz,mA,mB,mC,mD,mE,mF,mG,mH,mI,mJ,mK,mL,mM,mN,mO,mP,mQ,mR,mS,mT,mU,mV,mW,mX,mY,mZ,m$,m_,m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,na,nb,nc,nd,ne,nf,ng=class extends jC{},nh=class{constructor(a,b={}){jz(this,nf),jA(this,nf,null==b?void 0:b.detail)}get detail(){return jy(this,nf)}initCustomEvent(){}};nf=new WeakMap;var ni={document:{createElement:function(a,b){return new ng}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(ng)},CustomEvent:nh,EventTarget:jC,HTMLElement:ng,HTMLVideoElement:class extends jC{}},nj="undefined"==typeof window||void 0===globalThis.customElements,nk=nj?ni:globalThis,nl=nj?ni.document:globalThis.document;function nm(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function nn(a){return a.replace(/[-_]([a-z])/g,(a,b)=>b.toUpperCase())}function no(a){if(null==a)return;let b=+a;return Number.isNaN(b)?void 0:b}function np(a){let b=(function(a){let b={};for(let c in a)null!=a[c]&&(b[c]=a[c]);return new URLSearchParams(b)})(a).toString();return b?"?"+b:""}var nq,nr,ns,nt=(a,b)=>!!a&&!!b&&(!!a.contains(b)||nt(a,b.getRootNode().host)),nu="mux.com",nv=(()=>{try{return"3.5.3"}catch{}return"UNKNOWN"})(),nw=a=>{if(a){if([bP.LIVE,bP.ON_DEMAND].includes(a))return a;if(null!=a&&a.includes("live"))return bP.LIVE}},nx={crossorigin:"crossOrigin",playsinline:"playsInline"},ny=class{constructor(a,b){jz(this,nq),jz(this,nr),jz(this,ns,[]),jA(this,nq,a),jA(this,nr,b)}[Symbol.iterator](){return jy(this,ns).values()}get length(){return jy(this,ns).length}get value(){var a;return null!=(a=jy(this,ns).join(" "))?a:""}set value(a){var b;a!==this.value&&(jA(this,ns,[]),this.add(...null!=(b=null==a?void 0:a.split(" "))?b:[]))}toString(){return this.value}item(a){return jy(this,ns)[a]}values(){return jy(this,ns).values()}keys(){return jy(this,ns).keys()}forEach(a){jy(this,ns).forEach(a)}add(...a){var b,c;a.forEach(a=>{this.contains(a)||jy(this,ns).push(a)}),(""!==this.value||null!=(b=jy(this,nq))&&b.hasAttribute(`${jy(this,nr)}`))&&null!=(c=jy(this,nq))&&c.setAttribute(`${jy(this,nr)}`,`${this.value}`)}remove(...a){var b;a.forEach(a=>{jy(this,ns).splice(jy(this,ns).indexOf(a),1)}),null==(b=jy(this,nq))||b.setAttribute(`${jy(this,nr)}`,`${this.value}`)}contains(a){return jy(this,ns).includes(a)}toggle(a,b){return void 0!==b?b?(this.add(a),!0):(this.remove(a),!1):this.contains(a)?(this.remove(a),!1):(this.add(a),!0)}replace(a,b){this.remove(a),this.add(b)}};nq=new WeakMap,nr=new WeakMap,ns=new WeakMap;var nz=`[mux-player ${nv}]`;function nA(...a){console.warn(nz,...a)}function nB(...a){console.error(nz,...a)}function nC(a){var b;let c=null!=(b=a.message)?b:"";a.context&&(c+=` ${a.context}`),a.file&&(c+=` ${b6("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${a.file}`),nA(c)}var nD={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},nE={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},nF=Object.freeze({length:0,start(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(a){let b=a>>>0;if(b>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${b}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),nG=[...Object.values(nD).filter(a=>nD.PLAYSINLINE!==a),...Object.values(nE)];function nH(a,b){return a.media?a.media.getAttribute(b):a.getAttribute(b)}var nI=class extends nk.HTMLElement{static get observedAttributes(){return nG}constructor(){super()}attributeChangedCallback(a,b,c){var d,e;switch(a){case nE.MUTED:this.media&&(this.media.muted=null!=c,this.media.defaultMuted=null!=c);return;case nE.VOLUME:{let a=null!=(d=no(c))?d:1;this.media&&(this.media.volume=a);return}case nE.PLAYBACKRATE:{let a=null!=(e=no(c))?e:1;this.media&&(this.media.playbackRate=a,this.media.defaultPlaybackRate=a);return}}}play(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.play())?b:Promise.reject()}pause(){var a;null==(a=this.media)||a.pause()}load(){var a;null==(a=this.media)||a.load()}get media(){var a;return null==(a=this.shadowRoot)?void 0:a.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var a,b;return null==(b=null==(a=this.media)?void 0:a.paused)||b}get duration(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.duration)?b:NaN}get ended(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.ended)&&b}get buffered(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.buffered)?b:nF}get seekable(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.seekable)?b:nF}get readyState(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.readyState)?b:0}get videoWidth(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.videoWidth)?b:0}get videoHeight(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.videoHeight)?b:0}get currentSrc(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.currentSrc)?b:""}get currentTime(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.currentTime)?b:0}set currentTime(a){this.media&&(this.media.currentTime=Number(a))}get volume(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.volume)?b:1}set volume(a){this.media&&(this.media.volume=Number(a))}get playbackRate(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.playbackRate)?b:1}set playbackRate(a){this.media&&(this.media.playbackRate=Number(a))}get defaultPlaybackRate(){var a;return null!=(a=no(this.getAttribute(nE.PLAYBACKRATE)))?a:1}set defaultPlaybackRate(a){null!=a?this.setAttribute(nE.PLAYBACKRATE,`${a}`):this.removeAttribute(nE.PLAYBACKRATE)}get crossOrigin(){return nH(this,nD.CROSSORIGIN)}set crossOrigin(a){this.setAttribute(nD.CROSSORIGIN,`${a}`)}get autoplay(){return null!=nH(this,nD.AUTOPLAY)}set autoplay(a){a?this.setAttribute(nD.AUTOPLAY,"string"==typeof a?a:""):this.removeAttribute(nD.AUTOPLAY)}get loop(){return null!=nH(this,nD.LOOP)}set loop(a){a?this.setAttribute(nD.LOOP,""):this.removeAttribute(nD.LOOP)}get muted(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.muted)&&b}set muted(a){this.media&&(this.media.muted=!!a)}get defaultMuted(){return null!=nH(this,nD.MUTED)}set defaultMuted(a){a?this.setAttribute(nD.MUTED,""):this.removeAttribute(nD.MUTED)}get playsInline(){return null!=nH(this,nD.PLAYSINLINE)}set playsInline(a){nB("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(a){["","none","metadata","auto"].includes(a)?this.setAttribute(nD.PRELOAD,a):this.removeAttribute(nD.PRELOAD)}},nJ=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,nK=new WeakMap,nL=class a{constructor(a,b){this.element=a,this.type=b,this.element.addEventListener(this.type,this);let c=nK.get(this.element);c&&c.set(this.type,this)}set(a){if("function"==typeof a)this.handleEvent=a.bind(this.element);else if("object"==typeof a&&"function"==typeof a.handleEvent)this.handleEvent=a.handleEvent.bind(a);else{this.element.removeEventListener(this.type,this);let a=nK.get(this.element);a&&a.delete(this.type)}}static for(b){nK.has(b.element)||nK.set(b.element,new Map);let c=b.attributeName.slice(2),d=nK.get(b.element);return d&&d.has(c)?d.get(c):new a(b.element,c)}},nM=new Map,nN=new WeakMap,nO=new WeakMap,nP=class{constructor(a,b,c){this.strings=a,this.values=b,this.processor=c,this.stringsKey=this.strings.join("\x01")}get template(){if(nM.has(this.stringsKey))return nM.get(this.stringsKey);{let a=nl.createElement("template"),b=this.strings.length-1;return a.innerHTML=this.strings.reduce((a,c,d)=>a+c+(d<b?`{{ ${d} }}`:""),""),nM.set(this.stringsKey,a),a}}renderInto(a){var b;let c=this.template;if(nN.get(a)!==c){nN.set(a,c);let b=new h1(c,this.values,this.processor);nO.set(a,b),a instanceof h9?a.replace(...b.children):a.appendChild(b);return}let d=nO.get(a);null==(b=null==d?void 0:d.update)||b.call(d,this.values)}},nQ={processCallback(a,b,c){var d;if(c)for(let[a,e]of b)a in c&&function(a,b){(function(a,b){if(a instanceof h8&&b instanceof Element){let c=a.element;return c[a.attributeName]!==b&&(a.element.removeAttributeNS(a.attributeNamespace,a.attributeName),c[a.attributeName]=b),!0}return!1})(a,b)||function(a,b){if("boolean"==typeof b&&a instanceof h8){let c=a.attributeNamespace;return b!==a.element.hasAttributeNS(c,a.attributeName)&&(a.booleanValue=b),!0}return!1}(a,b)||a instanceof h8&&a.attributeName.startsWith("on")&&(nL.for(a).set(b),a.element.removeAttributeNS(a.attributeNamespace,a.attributeName),1)||!1===b&&a instanceof h9&&(a.replace(""),1)||b instanceof nP&&a instanceof h9&&(b.renderInto(a),1)||b instanceof DocumentFragment&&a instanceof h9&&(b.childNodes.length&&a.replace(...b.childNodes),1)||function(a,b){if(a instanceof h8){let c=a.attributeNamespace,d=a.element.getAttributeNS(c,a.attributeName);return String(b)!==d&&(a.value=String(b))}a.value=String(b)}(a,b)}(e,null!=(d=c[a])?d:"")}};function nR(a,...b){return new nP(a,b,nQ)}var nS=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),nT=a=>a.charAt(0).toUpperCase()+a.slice(1),nU=(a,b)=>{let c=(a=>{if(a.muxCode){if(a.muxCode===bJ.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(a.muxCode===bJ.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([bJ.NETWORK_TOKEN_AUD_MISMATCH,bJ.NETWORK_TOKEN_AUD_MISSING].includes(a.muxCode))return"403-incorrect-aud-value.md";if(a.muxCode===bJ.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(a.muxCode===bJ.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(a.muxCode===bJ.NETWORK_NOT_FOUND)return"404-not-found.md";if(a.muxCode===bJ.NETWORK_NOT_READY)return"412-not-playable.md"}if(a.code){if(a.code===bM.MEDIA_ERR_NETWORK)return"";if(a.code===bM.MEDIA_ERR_DECODE)return"media-decode-error.md";if(a.code===bM.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(a);return{message:a.message,context:a.context,file:c}},nV=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-error-dialog slot="dialog" noautohide></media-error-dialog>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,nW=nl.createElement("template");"innerHTML"in nW&&(nW.innerHTML=nV);var nX,nY,nZ=class extends iw{};nZ.template=null==(nY=null==(nX=nW.content)?void 0:nX.children)?void 0:nY[0],nk.customElements.get("media-theme-gerwig")||nk.customElements.define("media-theme-gerwig",nZ);var n$={SRC:"src",POSTER:"poster"},n_={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge"},n0=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","proudlydisplaymuxbadge"],n1=gR.formatErrorMessage;function n2(a){let b=a.videoTitle?{video_title:a.videoTitle}:{};return a.getAttributeNames().filter(a=>a.startsWith("metadata-")).reduce((b,c)=>{let d=a.getAttribute(c);return null!==d&&(b[c.replace(/^metadata-/,"").replace(/-/g,"_")]=d),b},b)}gR.formatErrorMessage=a=>{var b,c;if(a instanceof bM){let d=((a,b=!1)=>({title:((a,b=!1)=>{var c,d;if(a.muxCode){let e=nT(null!=(c=a.errorCategory)?c:"video"),f=bK(null!=(d=a.errorCategory)?d:bI.VIDEO);if(a.muxCode===bJ.NETWORK_OFFLINE)return b6("Your device appears to be offline",b);if(a.muxCode===bJ.NETWORK_TOKEN_EXPIRED)return b6("{category} URL has expired",b).format({category:e});if([bJ.NETWORK_TOKEN_SUB_MISMATCH,bJ.NETWORK_TOKEN_AUD_MISMATCH,bJ.NETWORK_TOKEN_AUD_MISSING,bJ.NETWORK_TOKEN_MALFORMED].includes(a.muxCode))return b6("{category} URL is formatted incorrectly",b).format({category:e});if(a.muxCode===bJ.NETWORK_TOKEN_MISSING)return b6("Invalid {categoryName} URL",b).format({categoryName:f});if(a.muxCode===bJ.NETWORK_NOT_FOUND)return b6("{category} does not exist",b).format({category:e});if(a.muxCode===bJ.NETWORK_NOT_READY){let c="live"===a.streamType?"Live stream":"Video";return b6("{mediaType} is not currently available",b).format({mediaType:c})}}if(a.code){if(a.code===bM.MEDIA_ERR_NETWORK)return b6("Network Error",b);if(a.code===bM.MEDIA_ERR_DECODE)return b6("Media Error",b);if(a.code===bM.MEDIA_ERR_SRC_NOT_SUPPORTED)return b6("Source Not Supported",b)}return b6("Error",b)})(a,b).toString(),message:((a,b=!1)=>{var c,d;if(a.muxCode){let e=nT(null!=(c=a.errorCategory)?c:"video"),f=bK(null!=(d=a.errorCategory)?d:bI.VIDEO);return a.muxCode===bJ.NETWORK_OFFLINE?b6("Check your internet connection and try reloading this video.",b):a.muxCode===bJ.NETWORK_TOKEN_EXPIRED?b6("The video’s secured {tokenNamePrefix}-token has expired.",b).format({tokenNamePrefix:f}):a.muxCode===bJ.NETWORK_TOKEN_SUB_MISMATCH?b6("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",b).format({tokenNamePrefix:f}):a.muxCode===bJ.NETWORK_TOKEN_MALFORMED?b6("{category} URL is formatted incorrectly",b).format({category:e}):[bJ.NETWORK_TOKEN_AUD_MISMATCH,bJ.NETWORK_TOKEN_AUD_MISSING].includes(a.muxCode)?b6("The {tokenNamePrefix}-token is formatted with incorrect information.",b).format({tokenNamePrefix:f}):[bJ.NETWORK_TOKEN_MISSING,bJ.NETWORK_INVALID_URL].includes(a.muxCode)?b6("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",b).format({tokenNamePrefix:f}):a.muxCode===bJ.NETWORK_NOT_FOUND?"":a.message}return a.code&&(a.code===bM.MEDIA_ERR_NETWORK||a.code===bM.MEDIA_ERR_DECODE||a.code===bM.MEDIA_ERR_SRC_NOT_SUPPORTED),a.message})(a,b).toString()}))(a,!1);return`
      ${null!=d&&d.title?`<h3>${d.title}</h3>`:""}
      ${null!=d&&d.message||null!=d&&d.linkUrl?`<p>
        ${null==d?void 0:d.message}
        ${null!=d&&d.linkUrl?`<a
              href="${d.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(b=d.linkText)?b:""} ${b6("(opens in a new window)")}"
              >${null!=(c=d.linkText)?c:d.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return n1(a)};var n3,n4,n5,n6,n7,n8,n9,oa,ob,oc,od,oe,of,og,oh,oi=Object.values(dw),oj=Object.values(n$),ok=Object.values(n_),ol="mux-player",om={isDialogOpen:!1},on={redundant_streams:!0},oo=class extends nI{constructor(){super(),jz(this,n9),jz(this,n3),jz(this,n4,!1),jz(this,n5,{}),jz(this,n6,!0),jz(this,n7,new ny(this,"hotkeys")),jz(this,n8,{...om,onCloseErrorDialog:a=>{var b;(null==(b=a.composedPath()[0])?void 0:b.localName)==="media-error-dialog"&&jB(this,n9,oc).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:a=>{var b;(null==(b=a.composedPath()[0])?void 0:b.localName)==="media-error-dialog"&&(nt(this,nl.activeElement)||a.preventDefault())}}),jA(this,n3,cM()),this.attachShadow({mode:"open"}),jB(this,n9,ob).call(this),this.isConnected&&jB(this,n9,oa).call(this)}static get NAME(){return ol}static get VERSION(){return nv}static get observedAttributes(){var a;return[...null!=(a=nI.observedAttributes)?a:[],...oj,...oi,...ok]}get mediaTheme(){var a;return null==(a=this.shadowRoot)?void 0:a.querySelector("media-theme")}get mediaController(){var a,b;return null==(b=null==(a=this.mediaTheme)?void 0:a.shadowRoot)?void 0:b.querySelector("media-controller")}connectedCallback(){let a=this.media;a&&(a.metadata=n2(this))}attributeChangedCallback(a,b,c){var d;switch(jB(this,n9,oa).call(this),super.attributeChangedCallback(a,b,c),a){case n_.HOTKEYS:jy(this,n7).value=c;break;case n_.THUMBNAIL_TIME:null!=c&&this.tokens.thumbnail&&nA(b6("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case n_.THUMBNAIL_TOKEN:if(c){let a=b5(c);if(a){let{aud:b}=a,c=cr.THUMBNAIL;b!==c&&nA(b6("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:c,tokenNamePrefix:"thumbnail"}))}}break;case n_.STORYBOARD_TOKEN:if(c){let a=b5(c);if(a){let{aud:b}=a,c=cr.STORYBOARD;b!==c&&nA(b6("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:c,tokenNamePrefix:"storyboard"}))}}break;case n_.DRM_TOKEN:if(c){let a=b5(c);if(a){let{aud:b}=a,c=cr.DRM;b!==c&&nA(b6("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:b,expectedAud:c,tokenNamePrefix:"drm"}))}}break;case dw.PLAYBACK_ID:null!=c&&c.includes("?token")&&nB(b6("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:c}));break;case dw.STREAM_TYPE:c&&![bP.LIVE,bP.ON_DEMAND,bP.UNKNOWN].includes(c)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=c.includes("dvr")?1/0:0:nC({file:"invalid-stream-type.md",message:b6("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):c===bP.LIVE?null==this.getAttribute(n_.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN}[dw.PLAYBACK_ID,n$.SRC,n_.PLAYBACK_TOKEN].includes(a)&&b!==c&&jA(this,n8,{...jy(this,n8),...om}),jB(this,n9,od).call(this,{[null!=(d=nx[a])?d:nn(a)]:c})}async requestFullscreen(a){var b;if(!(!this.mediaController||this.mediaController.hasAttribute(d7.MEDIA_IS_FULLSCREEN)))return null==(b=this.mediaController)||b.dispatchEvent(new nk.CustomEvent(d3.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,b)=>{var c;null==(c=this.mediaController)||c.addEventListener(d8.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}async exitFullscreen(){var a;if(!(!this.mediaController||!this.mediaController.hasAttribute(d7.MEDIA_IS_FULLSCREEN)))return null==(a=this.mediaController)||a.dispatchEvent(new nk.CustomEvent(d3.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,b)=>{var c;null==(c=this.mediaController)||c.addEventListener(d8.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}get preferCmcd(){var a;return null!=(a=this.getAttribute(dw.PREFER_CMCD))?a:void 0}set preferCmcd(a){a!==this.preferCmcd&&(a?bS.includes(a)?this.setAttribute(dw.PREFER_CMCD,a):nA(`Invalid value for preferCmcd. Must be one of ${bS.join()}`):this.removeAttribute(dw.PREFER_CMCD))}get hasPlayed(){var a,b;return null!=(b=null==(a=this.mediaController)?void 0:a.hasAttribute(d7.MEDIA_HAS_PLAYED))&&b}get inLiveWindow(){var a;return null==(a=this.mediaController)?void 0:a.hasAttribute(d7.MEDIA_TIME_IS_LIVE)}get _hls(){var a;return null==(a=this.media)?void 0:a._hls}get mux(){var a;return null==(a=this.media)?void 0:a.mux}get theme(){var a;return null!=(a=this.getAttribute(n_.THEME))?a:"gerwig"}set theme(a){this.setAttribute(n_.THEME,`${a}`)}get themeProps(){let a=this.mediaTheme;if(!a)return;let b={};for(let c of a.getAttributeNames()){if(n0.includes(c))continue;let d=a.getAttribute(c);b[nn(c)]=""===d||d}return b}set themeProps(a){var b,c;jB(this,n9,oa).call(this);let d={...this.themeProps,...a};for(let e in d){if(n0.includes(e))continue;let d=null==a?void 0:a[e];"boolean"==typeof d||null==d?null==(b=this.mediaTheme)||b.toggleAttribute(nm(e),!!d):null==(c=this.mediaTheme)||c.setAttribute(nm(e),d)}}get playbackId(){var a;return null!=(a=this.getAttribute(dw.PLAYBACK_ID))?a:void 0}set playbackId(a){a?this.setAttribute(dw.PLAYBACK_ID,a):this.removeAttribute(dw.PLAYBACK_ID)}get src(){var a,b;return this.playbackId?null!=(a=op(this,n$.SRC))?a:void 0:null!=(b=this.getAttribute(n$.SRC))?b:void 0}set src(a){a?this.setAttribute(n$.SRC,a):this.removeAttribute(n$.SRC)}get poster(){var a;let b=this.getAttribute(n$.POSTER);if(null!=b)return b;let{tokens:c}=this;return c.playback&&!c.thumbnail?void nA("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((a,{token:b,customDomain:c=nu,thumbnailTime:d,programTime:e}={})=>{var f;let g=null==b?d:void 0,{aud:h}=null!=(f=b5(b))?f:{};if(!(b&&"t"!==h))return`https://image.${c}/${a}/thumbnail.webp${np({token:b,time:g,program_time:e})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(a=this.thumbnailTime)?a:this.startTime,programTime:this.programStartTime,token:c.thumbnail}):void 0}set poster(a){a||""===a?this.setAttribute(n$.POSTER,a):this.removeAttribute(n$.POSTER)}get storyboardSrc(){var a;return null!=(a=this.getAttribute(n_.STORYBOARD_SRC))?a:void 0}set storyboardSrc(a){a?this.setAttribute(n_.STORYBOARD_SRC,a):this.removeAttribute(n_.STORYBOARD_SRC)}get storyboard(){let{tokens:a}=this;return this.storyboardSrc&&!a.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[bP.LIVE,bP.UNKNOWN].includes(this.streamType)||a.playback&&!a.storyboard?void 0:((a,{token:b,customDomain:c=nu,programStartTime:d,programEndTime:e}={})=>{var f;let{aud:g}=null!=(f=b5(b))?f:{};if(!(b&&"s"!==g))return`https://image.${c}/${a}/storyboard.vtt${np({token:b,format:"webp",program_start_time:d,program_end_time:e})}`})(this.playbackId,{customDomain:this.customDomain,token:a.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(n_.AUDIO)}set audio(a){if(!a)return void this.removeAttribute(n_.AUDIO);this.setAttribute(n_.AUDIO,"")}get hotkeys(){return jy(this,n7)}get nohotkeys(){return this.hasAttribute(n_.NOHOTKEYS)}set nohotkeys(a){if(!a)return void this.removeAttribute(n_.NOHOTKEYS);this.setAttribute(n_.NOHOTKEYS,"")}get thumbnailTime(){return no(this.getAttribute(n_.THUMBNAIL_TIME))}set thumbnailTime(a){this.setAttribute(n_.THUMBNAIL_TIME,`${a}`)}get videoTitle(){var a,b;return null!=(b=null!=(a=this.getAttribute(n_.VIDEO_TITLE))?a:this.getAttribute(n_.TITLE))?b:""}set videoTitle(a){a!==this.videoTitle&&(a?this.setAttribute(n_.VIDEO_TITLE,a):this.removeAttribute(n_.VIDEO_TITLE))}get placeholder(){var a;return null!=(a=op(this,n_.PLACEHOLDER))?a:""}set placeholder(a){this.setAttribute(n_.PLACEHOLDER,`${a}`)}get primaryColor(){var a,b;let c=this.getAttribute(n_.PRIMARY_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=nk.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_primary-color"))?void 0:b.trim()))return c}set primaryColor(a){this.setAttribute(n_.PRIMARY_COLOR,`${a}`)}get secondaryColor(){var a,b;let c=this.getAttribute(n_.SECONDARY_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=nk.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_secondary-color"))?void 0:b.trim()))return c}set secondaryColor(a){this.setAttribute(n_.SECONDARY_COLOR,`${a}`)}get accentColor(){var a,b;let c=this.getAttribute(n_.ACCENT_COLOR);if(null!=c||this.mediaTheme&&(c=null==(b=null==(a=nk.getComputedStyle(this.mediaTheme))?void 0:a.getPropertyValue("--_accent-color"))?void 0:b.trim()))return c}set accentColor(a){this.setAttribute(n_.ACCENT_COLOR,`${a}`)}get defaultShowRemainingTime(){return this.hasAttribute(n_.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(a){a?this.setAttribute(n_.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(n_.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(n_.PLAYBACK_RATES))return this.getAttribute(n_.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(a=>Number(a)).filter(a=>!Number.isNaN(a)).sort((a,b)=>a-b)}set playbackRates(a){if(!a)return void this.removeAttribute(n_.PLAYBACK_RATES);this.setAttribute(n_.PLAYBACK_RATES,a.join(" "))}get forwardSeekOffset(){var a;return null!=(a=no(this.getAttribute(n_.FORWARD_SEEK_OFFSET)))?a:10}set forwardSeekOffset(a){this.setAttribute(n_.FORWARD_SEEK_OFFSET,`${a}`)}get backwardSeekOffset(){var a;return null!=(a=no(this.getAttribute(n_.BACKWARD_SEEK_OFFSET)))?a:10}set backwardSeekOffset(a){this.setAttribute(n_.BACKWARD_SEEK_OFFSET,`${a}`)}get defaultHiddenCaptions(){return this.hasAttribute(n_.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(a){a?this.setAttribute(n_.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(n_.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return no(this.getAttribute(n_.DEFAULT_DURATION))}set defaultDuration(a){null==a?this.removeAttribute(n_.DEFAULT_DURATION):this.setAttribute(n_.DEFAULT_DURATION,`${a}`)}get playerInitTime(){return this.hasAttribute(dw.PLAYER_INIT_TIME)?no(this.getAttribute(dw.PLAYER_INIT_TIME)):jy(this,n3)}set playerInitTime(a){a!=this.playerInitTime&&(null==a?this.removeAttribute(dw.PLAYER_INIT_TIME):this.setAttribute(dw.PLAYER_INIT_TIME,`${+a}`))}get playerSoftwareName(){var a;return null!=(a=this.getAttribute(dw.PLAYER_SOFTWARE_NAME))?a:ol}get playerSoftwareVersion(){var a;return null!=(a=this.getAttribute(dw.PLAYER_SOFTWARE_VERSION))?a:nv}get beaconCollectionDomain(){var a;return null!=(a=this.getAttribute(dw.BEACON_COLLECTION_DOMAIN))?a:void 0}set beaconCollectionDomain(a){a!==this.beaconCollectionDomain&&(a?this.setAttribute(dw.BEACON_COLLECTION_DOMAIN,a):this.removeAttribute(dw.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var a;return null!=(a=this.getAttribute(dw.MAX_RESOLUTION))?a:void 0}set maxResolution(a){a!==this.maxResolution&&(a?this.setAttribute(dw.MAX_RESOLUTION,a):this.removeAttribute(dw.MAX_RESOLUTION))}get minResolution(){var a;return null!=(a=this.getAttribute(dw.MIN_RESOLUTION))?a:void 0}set minResolution(a){a!==this.minResolution&&(a?this.setAttribute(dw.MIN_RESOLUTION,a):this.removeAttribute(dw.MIN_RESOLUTION))}get renditionOrder(){var a;return null!=(a=this.getAttribute(dw.RENDITION_ORDER))?a:void 0}set renditionOrder(a){a!==this.renditionOrder&&(a?this.setAttribute(dw.RENDITION_ORDER,a):this.removeAttribute(dw.RENDITION_ORDER))}get programStartTime(){return no(this.getAttribute(dw.PROGRAM_START_TIME))}set programStartTime(a){null==a?this.removeAttribute(dw.PROGRAM_START_TIME):this.setAttribute(dw.PROGRAM_START_TIME,`${a}`)}get programEndTime(){return no(this.getAttribute(dw.PROGRAM_END_TIME))}set programEndTime(a){null==a?this.removeAttribute(dw.PROGRAM_END_TIME):this.setAttribute(dw.PROGRAM_END_TIME,`${a}`)}get assetStartTime(){return no(this.getAttribute(dw.ASSET_START_TIME))}set assetStartTime(a){null==a?this.removeAttribute(dw.ASSET_START_TIME):this.setAttribute(dw.ASSET_START_TIME,`${a}`)}get assetEndTime(){return no(this.getAttribute(dw.ASSET_END_TIME))}set assetEndTime(a){null==a?this.removeAttribute(dw.ASSET_END_TIME):this.setAttribute(dw.ASSET_END_TIME,`${a}`)}get extraSourceParams(){return this.hasAttribute(n_.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(n_.EXTRA_SOURCE_PARAMS)).entries()].reduce((a,[b,c])=>(a[b]=c,a),{}):on}set extraSourceParams(a){null==a?this.removeAttribute(n_.EXTRA_SOURCE_PARAMS):this.setAttribute(n_.EXTRA_SOURCE_PARAMS,new URLSearchParams(a).toString())}get customDomain(){var a;return null!=(a=this.getAttribute(dw.CUSTOM_DOMAIN))?a:void 0}set customDomain(a){a!==this.customDomain&&(a?this.setAttribute(dw.CUSTOM_DOMAIN,a):this.removeAttribute(dw.CUSTOM_DOMAIN))}get envKey(){var a;return null!=(a=op(this,dw.ENV_KEY))?a:void 0}set envKey(a){this.setAttribute(dw.ENV_KEY,`${a}`)}get noVolumePref(){return this.hasAttribute(n_.NO_VOLUME_PREF)}set noVolumePref(a){a?this.setAttribute(n_.NO_VOLUME_PREF,""):this.removeAttribute(n_.NO_VOLUME_PREF)}get debug(){return null!=op(this,dw.DEBUG)}set debug(a){a?this.setAttribute(dw.DEBUG,""):this.removeAttribute(dw.DEBUG)}get disableTracking(){return null!=op(this,dw.DISABLE_TRACKING)}set disableTracking(a){this.toggleAttribute(dw.DISABLE_TRACKING,!!a)}get disableCookies(){return null!=op(this,dw.DISABLE_COOKIES)}set disableCookies(a){a?this.setAttribute(dw.DISABLE_COOKIES,""):this.removeAttribute(dw.DISABLE_COOKIES)}get streamType(){var a,b,c;return null!=(c=null!=(b=this.getAttribute(dw.STREAM_TYPE))?b:null==(a=this.media)?void 0:a.streamType)?c:bP.UNKNOWN}set streamType(a){this.setAttribute(dw.STREAM_TYPE,`${a}`)}get defaultStreamType(){var a,b,c;return null!=(c=null!=(b=this.getAttribute(n_.DEFAULT_STREAM_TYPE))?b:null==(a=this.mediaController)?void 0:a.getAttribute(n_.DEFAULT_STREAM_TYPE))?c:bP.ON_DEMAND}set defaultStreamType(a){a?this.setAttribute(n_.DEFAULT_STREAM_TYPE,a):this.removeAttribute(n_.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var a,b;return this.hasAttribute(n_.TARGET_LIVE_WINDOW)?+this.getAttribute(n_.TARGET_LIVE_WINDOW):null!=(b=null==(a=this.media)?void 0:a.targetLiveWindow)?b:NaN}set targetLiveWindow(a){a==this.targetLiveWindow||Number.isNaN(a)&&Number.isNaN(this.targetLiveWindow)||(null==a?this.removeAttribute(n_.TARGET_LIVE_WINDOW):this.setAttribute(n_.TARGET_LIVE_WINDOW,`${+a}`))}get liveEdgeStart(){var a;return null==(a=this.media)?void 0:a.liveEdgeStart}get startTime(){return no(op(this,dw.START_TIME))}set startTime(a){this.setAttribute(dw.START_TIME,`${a}`)}get preferPlayback(){let a=this.getAttribute(dw.PREFER_PLAYBACK);if(a===bQ.MSE||a===bQ.NATIVE)return a}set preferPlayback(a){a!==this.preferPlayback&&(a===bQ.MSE||a===bQ.NATIVE?this.setAttribute(dw.PREFER_PLAYBACK,a):this.removeAttribute(dw.PREFER_PLAYBACK))}get metadata(){var a;return null==(a=this.media)?void 0:a.metadata}set metadata(a){if(jB(this,n9,oa).call(this),!this.media)return void nB("underlying media element missing when trying to set metadata. metadata will not be set.");this.media.metadata={...n2(this),...a}}get _hlsConfig(){var a;return null==(a=this.media)?void 0:a._hlsConfig}set _hlsConfig(a){if(jB(this,n9,oa).call(this),!this.media)return void nB("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");this.media._hlsConfig=a}async addCuePoints(a){var b;return(jB(this,n9,oa).call(this),this.media)?null==(b=this.media)?void 0:b.addCuePoints(a):void nB("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var a;return null==(a=this.media)?void 0:a.activeCuePoint}get cuePoints(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.cuePoints)?b:[]}addChapters(a){var b;return(jB(this,n9,oa).call(this),this.media)?null==(b=this.media)?void 0:b.addChapters(a):void nB("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var a;return null==(a=this.media)?void 0:a.activeChapter}get chapters(){var a,b;return null!=(b=null==(a=this.media)?void 0:a.chapters)?b:[]}getStartDate(){var a;return null==(a=this.media)?void 0:a.getStartDate()}get currentPdt(){var a;return null==(a=this.media)?void 0:a.currentPdt}get tokens(){let a=this.getAttribute(n_.PLAYBACK_TOKEN),b=this.getAttribute(n_.DRM_TOKEN),c=this.getAttribute(n_.THUMBNAIL_TOKEN),d=this.getAttribute(n_.STORYBOARD_TOKEN);return{...jy(this,n5),...null!=a?{playback:a}:{},...null!=b?{drm:b}:{},...null!=c?{thumbnail:c}:{},...null!=d?{storyboard:d}:{}}}set tokens(a){jA(this,n5,null!=a?a:{})}get playbackToken(){var a;return null!=(a=this.getAttribute(n_.PLAYBACK_TOKEN))?a:void 0}set playbackToken(a){this.setAttribute(n_.PLAYBACK_TOKEN,`${a}`)}get drmToken(){var a;return null!=(a=this.getAttribute(n_.DRM_TOKEN))?a:void 0}set drmToken(a){this.setAttribute(n_.DRM_TOKEN,`${a}`)}get thumbnailToken(){var a;return null!=(a=this.getAttribute(n_.THUMBNAIL_TOKEN))?a:void 0}set thumbnailToken(a){this.setAttribute(n_.THUMBNAIL_TOKEN,`${a}`)}get storyboardToken(){var a;return null!=(a=this.getAttribute(n_.STORYBOARD_TOKEN))?a:void 0}set storyboardToken(a){this.setAttribute(n_.STORYBOARD_TOKEN,`${a}`)}addTextTrack(a,b,c,d){var e;let f=null==(e=this.media)?void 0:e.nativeEl;if(f)return cc(f,a,b,c,d)}removeTextTrack(a){var b;let c=null==(b=this.media)?void 0:b.nativeEl;if(c){let b;return void(null==(b=Array.prototype.find.call(c.querySelectorAll("track"),b=>b.track===a))||b.remove())}}get textTracks(){var a;return null==(a=this.media)?void 0:a.textTracks}get castReceiver(){var a;return null!=(a=this.getAttribute(n_.CAST_RECEIVER))?a:void 0}set castReceiver(a){a!==this.castReceiver&&(a?this.setAttribute(n_.CAST_RECEIVER,a):this.removeAttribute(n_.CAST_RECEIVER))}get castCustomData(){var a;return null==(a=this.media)?void 0:a.castCustomData}set castCustomData(a){if(!this.media)return void nB("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");this.media.castCustomData=a}get noTooltips(){return this.hasAttribute(n_.NO_TOOLTIPS)}set noTooltips(a){if(!a)return void this.removeAttribute(n_.NO_TOOLTIPS);this.setAttribute(n_.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(n_.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(a){a?this.setAttribute(n_.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(n_.PROUDLY_DISPLAY_MUX_BADGE)}};function op(a,b){return a.media?a.media.getAttribute(b):a.getAttribute(b)}n3=new WeakMap,n4=new WeakMap,n5=new WeakMap,n6=new WeakMap,n7=new WeakMap,n8=new WeakMap,n9=new WeakSet,oa=function(){var a,b,c,d;if(!jy(this,n4)){jA(this,n4,!0),jB(this,n9,od).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof nk.HTMLElement))throw""}catch{nB("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{nB("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof fV))throw""}catch{nB("<media-controller> failed to upgrade!")}jB(this,n9,oe).call(this),jB(this,n9,of).call(this),jB(this,n9,og).call(this),jA(this,n6,null==(b=null==(a=this.mediaController)?void 0:a.hasAttribute(e7.USER_INACTIVE))||b),jB(this,n9,oh).call(this),null==(c=this.media)||c.addEventListener("streamtypechange",()=>jB(this,n9,od).call(this)),null==(d=this.media)||d.addEventListener("loadstart",()=>jB(this,n9,od).call(this))}},ob=function(){var a,b;try{null==(a=null==window?void 0:window.CSS)||a.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(b=null==window?void 0:window.CSS)||b.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},oc=function(a){Object.assign(jy(this,n8),a),jB(this,n9,od).call(this)},od=function(a={}){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;let S,T;b={...jy(this,n8),...a},S={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(n_.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(a){var b,c;let d=a.theme;if(d){let e=null==(c=null==(b=a.getRootNode())?void 0:b.getElementById)?void 0:c.call(b,d);if(e&&e instanceof HTMLTemplateElement)return e;d.startsWith("media-theme-")||(d=`media-theme-${d}`);let f=nk.customElements.get(d);if(null!=f&&f.template)return f.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(n_.NOHOTKEYS),hotKeys:this.getAttribute(n_.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(dw.TARGET_LIVE_WINDOW),streamType:nw(this.getAttribute(dw.STREAM_TYPE)),primaryColor:this.getAttribute(n_.PRIMARY_COLOR),secondaryColor:this.getAttribute(n_.SECONDARY_COLOR),accentColor:this.getAttribute(n_.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(T=null==(e=this.mediaController)?void 0:e.querySelector("media-time-display"))&&"none"===getComputedStyle(T).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(n_.PLAYBACK_RATES),customDomain:null!=(c=this.getAttribute(dw.CUSTOM_DOMAIN))?c:void 0,title:this.getAttribute(n_.TITLE),videoTitle:null!=(d=this.getAttribute(n_.VIDEO_TITLE))?d:this.getAttribute(n_.TITLE),novolumepref:this.hasAttribute(n_.NO_VOLUME_PREF),proudlyDisplayMuxBadge:this.hasAttribute(n_.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,...b,extraSourceParams:this.extraSourceParams},f=nR`
  <style>
    ${(a=>{let{tokens:b}=a;return b.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(S)}
    ${nJ}
  </style>
  ${h=S,nR`
  <media-theme
    template="${h.themeTemplate||!1}"
    defaultstreamtype="${null!=(i=h.defaultStreamType)&&i}"
    hotkeys="${(a=>{let b=a.hotKeys?`${a.hotKeys}`:"";return"live"===nw(a.streamType)&&(b+=" noarrowleft noarrowright"),b})(h)||!1}"
    nohotkeys="${h.noHotKeys||!h.hasSrc||!1}"
    noautoseektolive="${!!(null!=(j=h.streamType)&&j.includes(bP.LIVE))&&0!==h.targetLiveWindow}"
    novolumepref="${h.novolumepref||!1}"
    disabled="${!h.hasSrc||h.isDialogOpen}"
    audio="${null!=(k=h.audio)&&k}"
    style="${null!=(l=function(a){let b="";return Object.entries(a).forEach(([a,c])=>{null!=c&&(b+=`${nm(a)}: ${c}; `)}),b?b.trim():void 0}({"--media-primary-color":h.primaryColor,"--media-secondary-color":h.secondaryColor,"--media-accent-color":h.accentColor}))&&l}"
    defaultsubtitles="${!h.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=h.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(n=h.backwardSeekOffset)&&n}"
    playbackrates="${null!=(o=h.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(p=h.defaultShowRemainingTime)&&p}"
    defaultduration="${null!=(q=h.defaultDuration)&&q}"
    hideduration="${null!=(r=h.hideDuration)&&r}"
    title="${null!=(s=h.title)&&s}"
    videotitle="${null!=(t=h.videoTitle)&&t}"
    proudlydisplaymuxbadge="${null!=(u=h.proudlyDisplayMuxBadge)&&u}"
    exportparts="${nS}"
    onclose="${h.onCloseErrorDialog}"
    onfocusin="${h.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(w=h.targetLiveWindow)&&w}"
      stream-type="${null!=(x=nw(h.streamType))&&x}"
      crossorigin="${null!=(y=h.crossOrigin)?y:""}"
      playsinline
      autoplay="${null!=(z=h.autoplay)&&z}"
      muted="${null!=(A=h.muted)&&A}"
      loop="${null!=(B=h.loop)&&B}"
      preload="${null!=(C=h.preload)&&C}"
      debug="${null!=(D=h.debug)&&D}"
      prefer-cmcd="${null!=(E=h.preferCmcd)&&E}"
      disable-tracking="${null!=(F=h.disableTracking)&&F}"
      disable-cookies="${null!=(G=h.disableCookies)&&G}"
      prefer-playback="${null!=(H=h.preferPlayback)&&H}"
      start-time="${null!=h.startTime&&h.startTime}"
      beacon-collection-domain="${null!=(I=h.beaconCollectionDomain)&&I}"
      player-init-time="${null!=(J=h.playerInitTime)&&J}"
      player-software-name="${null!=(K=h.playerSoftwareName)&&K}"
      player-software-version="${null!=(L=h.playerSoftwareVersion)&&L}"
      env-key="${null!=(M=h.envKey)&&M}"
      custom-domain="${null!=(N=h.customDomain)&&N}"
      src="${h.src?h.src:!!h.playbackId&&cO(h)}"
      cast-src="${h.src?h.src:!!h.playbackId&&cO(h)}"
      cast-receiver="${null!=(O=h.castReceiver)&&O}"
      drm-token="${null!=(Q=null==(P=h.tokens)?void 0:P.drm)&&Q}"
      exportparts="video"
    >
      ${h.storyboard?nR`<track label="thumbnails" default kind="metadata" src="${h.storyboard}" />`:nR``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!h.poster&&h.poster}"
        placeholdersrc="${null!=(R=h.placeholder)&&R}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,g=this.shadowRoot,f.renderInto(g)},oe=function(){let a=a=>{var b,c;if(!(null!=a&&a.startsWith("theme-")))return;let d=a.replace(/^theme-/,"");if(n0.includes(d))return;let e=this.getAttribute(a);null!=e?null==(b=this.mediaTheme)||b.setAttribute(d,e):null==(c=this.mediaTheme)||c.removeAttribute(d)};new MutationObserver(b=>{for(let{attributeName:c}of b)a(c)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(a)},of=function(){let a=a=>{var b;let c=null==(b=this.media)?void 0:b.error;if(!(c instanceof bM)){let{message:a,code:b}=null!=c?c:{};c=new bM(a,b)}if(!(null!=c&&c.fatal)){nA(c),c.data&&nA(`${c.name} data:`,c.data);return}let d=nU(c,!1);d.message&&nC(d),nB(c),c.data&&nB(`${c.name} data:`,c.data),jB(this,n9,oc).call(this,{isDialogOpen:!0})};this.addEventListener("error",a),this.media&&(this.media.errorTranslator=(a={})=>{var b,c,d;if(!((null==(b=this.media)?void 0:b.error)instanceof bM))return a;let e=nU(null==(c=this.media)?void 0:c.error,!1);return{player_error_code:null==(d=this.media)?void 0:d.error.code,player_error_message:e.message?String(e.message):a.player_error_message,player_error_context:e.context?String(e.context):a.player_error_context}})},og=function(){var a,b,c,d;let e=()=>jB(this,n9,od).call(this);null==(b=null==(a=this.media)?void 0:a.textTracks)||b.addEventListener("addtrack",e),null==(d=null==(c=this.media)?void 0:c.textTracks)||d.addEventListener("removetrack",e)},oh=function(){var a,b;if(!/Firefox/i.test(navigator.userAgent))return;let c,d=new WeakMap,e=()=>this.streamType===bP.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,f=(a,b,c=!1)=>{e()||Array.from(a&&a.activeCues||[]).forEach(a=>{if(!(!a.snapToLines||a.line<-5||a.line>=0&&a.line<10))if(!b||this.paused){let b=a.text.split(`
`).length,e=-3;this.streamType===bP.LIVE&&(e=-2);let f=e-b;if(a.line===f&&!c)return;d.has(a)||d.set(a,a.line),a.line=f}else setTimeout(()=>{a.line=d.get(a)||"auto"},500)})},g=()=>{var a,b;f(c,null!=(b=null==(a=this.mediaController)?void 0:a.hasAttribute(e7.USER_INACTIVE))&&b)},h=()=>{var a,b;let d=Array.from((null==(b=null==(a=this.mediaController)?void 0:a.media)?void 0:b.textTracks)||[]).filter(a=>["subtitles","captions"].includes(a.kind)&&"showing"===a.mode)[0];d!==c&&(null==c||c.removeEventListener("cuechange",g)),null==(c=d)||c.addEventListener("cuechange",g),f(c,jy(this,n6))};h(),null==(a=this.textTracks)||a.addEventListener("change",h),null==(b=this.textTracks)||b.addEventListener("addtrack",h),this.addEventListener("userinactivechange",()=>{var a,b;let d=null==(b=null==(a=this.mediaController)?void 0:a.hasAttribute(e7.USER_INACTIVE))||b;jy(this,n6)!==d&&(jA(this,n6,d),f(c,jy(this,n6)))})};var oq=a=>{throw TypeError(a)},or=(a,b,c)=>b.has(a)||oq("Cannot "+c),os=class{addEventListener(){}removeEventListener(){}dispatchEvent(a){return!0}};if("undefined"==typeof DocumentFragment){class a extends os{}globalThis.DocumentFragment=a}var ot,ou=class extends os{},ov=class{constructor(a,b={}){((a,b,c)=>b.has(a)?oq("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c))(this,ot),((a,b,c,d)=>(or(a,b,"write to private field"),d?d.call(a,c):b.set(a,c)))(this,ot,null==b?void 0:b.detail)}get detail(){let a,b;return or(this,a=ot,"read from private field"),b?b.call(this):a.get(this)}initCustomEvent(){}};ot=new WeakMap;var ow={document:{createElement:function(a,b){return new ou}},DocumentFragment,customElements:{get(a){},define(a,b,c){},getName:a=>null,upgrade(a){},whenDefined:a=>Promise.resolve(ou)},CustomEvent:ov,EventTarget:os,HTMLElement:ou,HTMLVideoElement:class extends os{}},ox="undefined"==typeof window||void 0===globalThis.customElements,oy=ox?ow:globalThis;ox?ow.document:globalThis.document,oy.customElements.get("mux-player")||(oy.customElements.define("mux-player",oo),oy.MuxPlayerElement=oo);var oz=parseInt(g.version)>=19,oA={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"};function oB(a,b){if("function"==typeof a)return a(b);null!=a&&(a.current=b)}var oC=Object.prototype.hasOwnProperty,oD=(a,b,c)=>!((a,b)=>{if(Object.is(a,b))return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;if(Array.isArray(a))return!!Array.isArray(b)&&a.length===b.length&&a.some((a,c)=>b[c]===a);let c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(let d=0;d<c.length;d++)if(!oC.call(b,c[d])||!Object.is(a[c[d]],b[c[d]]))return!1;return!0})(b,a[c]),oE=(a,b,c)=>{a[c]=b},oF=(a,b,c,d=oE,e=oD)=>(0,g.useEffect)(()=>{let f=null==c?void 0:c.current;f&&e(f,b,a)&&d(f,b,a)},[null==c?void 0:c.current,b]),oG=(()=>{try{return"3.5.3"}catch{}return"UNKNOWN"})(),oH=(a,b,c)=>(0,g.useEffect)(()=>{let d=null==b?void 0:b.current;if(d&&c)return d.addEventListener(a,c),()=>{d.removeEventListener(a,c)}},[null==b?void 0:b.current,c,a]),oI=g.forwardRef(({children:a,...b},c)=>g.createElement("mux-player",{suppressHydrationWarning:!0,...((a={})=>{let{ref:b,...c}=a;return Object.entries(c).reduce((a,[b,c])=>{let d=((a,b)=>{if(!(!oz&&"boolean"==typeof b&&!b)){if(((a,b)=>null!=b&&a in b)(a,oA))return oA[a];if(void 0!==b)return/[A-Z]/.test(a)?a.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`):a}})(b,c);if(!d)return a;let e=((a,b)=>oz||"boolean"!=typeof a?a:"")(c,0);return a[d]=e,a},{})})(b),ref:c},a)),oJ=oG,oK="mux-player-react",oL=g.forwardRef((a,b)=>{var c;let d=(0,g.useRef)(null),e=function(...a){return g.useCallback(function(...a){return b=>{let c=!1,d=a.map(a=>{let d=oB(a,b);return c||"function"!=typeof d||(c=!0),d});if(c)return()=>{for(let b=0;b<d.length;b++){let c=d[b];"function"==typeof c?c():oB(a[b],null)}}}}(...a),a)}(d,b),[f]=((a,b)=>{let{onAbort:c,onCanPlay:d,onCanPlayThrough:e,onEmptied:f,onLoadStart:g,onLoadedData:h,onLoadedMetadata:i,onProgress:j,onDurationChange:k,onVolumeChange:l,onRateChange:m,onResize:n,onWaiting:o,onPlay:p,onPlaying:q,onTimeUpdate:r,onPause:s,onSeeking:t,onSeeked:u,onStalled:w,onSuspend:x,onEnded:y,onError:z,onCuePointChange:A,onChapterChange:B,metadata:C,tokens:D,paused:E,playbackId:F,playbackRates:G,currentTime:H,themeProps:I,extraSourceParams:J,castCustomData:K,_hlsConfig:L,...M}=b;return oF("tokens",D,a),oF("playbackId",F,a),oF("playbackRates",G,a),oF("metadata",C,a),oF("extraSourceParams",J,a),oF("_hlsConfig",L,a),oF("themeProps",I,a),oF("castCustomData",K,a),oF("paused",E,a,(a,b)=>{null!=b&&(b?a.pause():a.play())},(a,b,c)=>(!a.hasAttribute("autoplay")||!!a.hasPlayed)&&oD(a,b,c)),oF("currentTime",H,a,(a,b)=>{null!=b&&(a.currentTime=b)}),oH("abort",a,c),oH("canplay",a,d),oH("canplaythrough",a,e),oH("emptied",a,f),oH("loadstart",a,g),oH("loadeddata",a,h),oH("loadedmetadata",a,i),oH("progress",a,j),oH("durationchange",a,k),oH("volumechange",a,l),oH("ratechange",a,m),oH("resize",a,n),oH("waiting",a,o),oH("play",a,p),oH("playing",a,q),oH("timeupdate",a,r),oH("pause",a,s),oH("seeking",a,t),oH("seeked",a,u),oH("stalled",a,w),oH("suspend",a,x),oH("ended",a,y),oH("error",a,z),oH("cuepointchange",a,A),oH("chapterchange",a,B),[M]})(d,a),[h]=(0,g.useState)(null!=(c=a.playerInitTime)?c:cM());return g.createElement(oI,{ref:e,defaultHiddenCaptions:a.defaultHiddenCaptions,playerSoftwareName:oK,playerSoftwareVersion:oJ,playerInitTime:h,...f})})}};