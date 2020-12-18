!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=11)}([function(e,t,n){"use strict";var r=n(5),i=n(19),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function s(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===o.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:i,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,i=arguments.length;r<i;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(t){var r=n(0),i=n(21),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,u={adapter:("undefined"!=typeof XMLHttpRequest?s=n(7):void 0!==t&&(s=n(7)),s),transformRequest:[function(e,t){return i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(o)}),e.exports=u}).call(this,n(6))},function(e,t,n){"use strict";n.r(t),function(e){for(var n="undefined"!=typeof window&&"undefined"!=typeof document,r=["Edge","Trident","Firefox"],i=0,o=0;o<r.length;o+=1)if(n&&navigator.userAgent.indexOf(r[o])>=0){i=1;break}var a=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},i))}};function s(e){return e&&"[object Function]"==={}.toString.call(e)}function u(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function c(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function l(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=u(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/(auto|scroll|overlay)/.test(n+i+r)?e:l(c(e))}var f=n&&!(!window.MSInputMethodContext||!document.documentMode),p=n&&/MSIE 10/.test(navigator.userAgent);function d(e){return 11===e?f:10===e?p:f||p}function h(e){if(!e)return document.documentElement;for(var t=d(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===u(n,"position")?h(n):n:e?e.ownerDocument.documentElement:document.documentElement}function v(e){return null!==e.parentNode?v(e.parentNode):e}function g(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,i=n?t:e,o=document.createRange();o.setStart(r,0),o.setEnd(i,0);var a,s,u=o.commonAncestorContainer;if(e!==u&&t!==u||r.contains(i))return"BODY"===(s=(a=u).nodeName)||"HTML"!==s&&h(a.firstElementChild)!==a?h(u):u;var c=v(e);return c.host?g(c.host,t):g(e,v(t).host)}function m(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var r=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||r)[t]}return e[t]}function y(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function _(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],d(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function b(e){var t=e.body,n=e.documentElement,r=d(10)&&getComputedStyle(n);return{height:_("Height",t,n,r),width:_("Width",t,n,r)}}var w=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},T=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function C(e){return x({},e,{right:e.left+e.width,bottom:e.top+e.height})}function A(e){var t={};try{if(d(10)){t=e.getBoundingClientRect();var n=m(e,"top"),r=m(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(e){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o="HTML"===e.nodeName?b(e.ownerDocument):{},a=o.width||e.clientWidth||i.right-i.left,s=o.height||e.clientHeight||i.bottom-i.top,c=e.offsetWidth-a,l=e.offsetHeight-s;if(c||l){var f=u(e);c-=y(f,"x"),l-=y(f,"y"),i.width-=c,i.height-=l}return C(i)}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=d(10),i="HTML"===t.nodeName,o=A(e),a=A(t),s=l(e),c=u(t),f=parseFloat(c.borderTopWidth,10),p=parseFloat(c.borderLeftWidth,10);n&&i&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var h=C({top:o.top-a.top-f,left:o.left-a.left-p,width:o.width,height:o.height});if(h.marginTop=0,h.marginLeft=0,!r&&i){var v=parseFloat(c.marginTop,10),g=parseFloat(c.marginLeft,10);h.top-=f-v,h.bottom-=f-v,h.left-=p-g,h.right-=p-g,h.marginTop=v,h.marginLeft=g}return(r&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=m(t,"top"),i=m(t,"left"),o=n?-1:1;return e.top+=r*o,e.bottom+=r*o,e.left+=i*o,e.right+=i*o,e}(h,t)),h}function O(e){if(!e||!e.parentElement||d())return document.documentElement;for(var t=e.parentElement;t&&"none"===u(t,"transform");)t=t.parentElement;return t||document.documentElement}function D(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},a=i?O(e):g(e,t);if("viewport"===r)o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=S(e,n),i=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:m(n),s=t?0:m(n,"left");return C({top:a-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:i,height:o})}(a,i);else{var s=void 0;"scrollParent"===r?"BODY"===(s=l(c(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===r?e.ownerDocument.documentElement:r;var f=S(s,a,i);if("HTML"!==s.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===u(t,"position")||e(c(t)))}(a))o=f;else{var p=b(e.ownerDocument),d=p.height,h=p.width;o.top+=f.top-f.marginTop,o.bottom=d+f.top,o.left+=f.left-f.marginLeft,o.right=h+f.left}}var v="number"==typeof(n=n||0);return o.left+=v?n:n.left||0,o.top+=v?n:n.top||0,o.right-=v?n:n.right||0,o.bottom-=v?n:n.bottom||0,o}function I(e,t,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=D(n,r,o,i),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},u=Object.keys(s).map(function(e){return x({key:e},s[e],{area:(t=s[e],t.width*t.height)});var t}).sort(function(e,t){return t.area-e.area}),c=u.filter(function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight}),l=c.length>0?c[0].key:u[0].key,f=e.split("-")[1];return l+(f?"-"+f:"")}function k(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return S(n,r?O(t):g(t,n),r)}function N(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),r=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function L(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function j(e,t,n){n=n.split("-")[0];var r=N(e),i={width:r.width,height:r.height},o=-1!==["right","left"].indexOf(n),a=o?"top":"left",s=o?"left":"top",u=o?"height":"width",c=o?"width":"height";return i[a]=t[a]+t[u]/2-r[u]/2,i[s]=n===s?t[s]-r[c]:t[L(s)],i}function P(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function R(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var r=P(e,function(e){return e[t]===n});return e.indexOf(r)}(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&s(n)&&(t.offsets.popper=C(t.offsets.popper),t.offsets.reference=C(t.offsets.reference),t=n(t,e))}),t}function $(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function H(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var i=t[r],o=i?""+i+n:e;if(void 0!==document.body.style[o])return o}return null}function M(e){var t=e.ownerDocument;return t?t.defaultView:window}function F(e,t,n,r){n.updateBound=r,M(e).addEventListener("resize",n.updateBound,{passive:!0});var i=l(e);return function e(t,n,r,i){var o="BODY"===t.nodeName,a=o?t.ownerDocument.defaultView:t;a.addEventListener(n,r,{passive:!0}),o||e(l(a.parentNode),n,r,i),i.push(a)}(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function W(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,M(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function q(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function B(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&q(t[n])&&(r="px"),e.style[n]=t[n]+r})}var U=n&&/Firefox/i.test(navigator.userAgent);function V(e,t,n){var r=P(e,function(e){return e.name===t}),i=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!i){var o="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}var z=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],K=z.slice(3);function G(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=K.indexOf(e),r=K.slice(n+1).concat(K.slice(0,n));return t?r.reverse():r}var X={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function Q(e,t,n,r){var i=[0,0],o=-1!==["right","left"].indexOf(r),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(P(a,function(e){return-1!==e.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var u=/\s*,\s*|\s+/,c=-1!==s?[a.slice(0,s).concat([a[s].split(u)[0]]),[a[s].split(u)[1]].concat(a.slice(s+1))]:[a];return(c=c.map(function(e,r){var i=(1===r?!o:o)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,r){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],a=i[2];if(!o)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=r}return C(s)[t]/100*o}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(e,i,t,n)})})).forEach(function(e,t){e.forEach(function(n,r){q(n)&&(i[t]+=n*("-"===e[r-1]?-1:1))})}),i}var Y={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var i=e.offsets,o=i.reference,a=i.popper,s=-1!==["bottom","top"].indexOf(n),u=s?"left":"top",c=s?"width":"height",l={start:E({},u,o[u]),end:E({},u,o[u]+o[c]-a[c])};e.offsets.popper=x({},a,l[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,r=e.placement,i=e.offsets,o=i.popper,a=i.reference,s=r.split("-")[0],u=void 0;return u=q(+n)?[+n,0]:Q(n,o,a,s),"left"===s?(o.top+=u[0],o.left-=u[1]):"right"===s?(o.top+=u[0],o.left+=u[1]):"top"===s?(o.left+=u[0],o.top-=u[1]):"bottom"===s&&(o.left+=u[0],o.top+=u[1]),e.popper=o,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||h(e.instance.popper);e.instance.reference===n&&(n=h(n));var r=H("transform"),i=e.instance.popper.style,o=i.top,a=i.left,s=i[r];i.top="",i.left="",i[r]="";var u=D(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);i.top=o,i.left=a,i[r]=s,t.boundaries=u;var c=t.priority,l=e.offsets.popper,f={primary:function(e){var n=l[e];return l[e]<u[e]&&!t.escapeWithReference&&(n=Math.max(l[e],u[e])),E({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=l[n];return l[e]>u[e]&&!t.escapeWithReference&&(r=Math.min(l[n],u[e]-("right"===e?l.width:l.height))),E({},n,r)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=x({},l,f[t](e))}),e.offsets.popper=l,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,i=e.placement.split("-")[0],o=Math.floor,a=-1!==["top","bottom"].indexOf(i),s=a?"right":"bottom",u=a?"left":"top",c=a?"width":"height";return n[s]<o(r[u])&&(e.offsets.popper[u]=o(r[u])-n[c]),n[u]>o(r[s])&&(e.offsets.popper[u]=o(r[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!V(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],o=e.offsets,a=o.popper,s=o.reference,c=-1!==["left","right"].indexOf(i),l=c?"height":"width",f=c?"Top":"Left",p=f.toLowerCase(),d=c?"left":"top",h=c?"bottom":"right",v=N(r)[l];s[h]-v<a[p]&&(e.offsets.popper[p]-=a[p]-(s[h]-v)),s[p]+v>a[h]&&(e.offsets.popper[p]+=s[p]+v-a[h]),e.offsets.popper=C(e.offsets.popper);var g=s[p]+s[l]/2-v/2,m=u(e.instance.popper),y=parseFloat(m["margin"+f],10),_=parseFloat(m["border"+f+"Width"],10),b=g-e.offsets.popper[p]-y-_;return b=Math.max(Math.min(a[l]-v,b),0),e.arrowElement=r,e.offsets.arrow=(E(n={},p,Math.round(b)),E(n,d,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if($(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=D(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],i=L(r),o=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case X.FLIP:a=[r,i];break;case X.CLOCKWISE:a=G(r);break;case X.COUNTERCLOCKWISE:a=G(r,!0);break;default:a=t.behavior}return a.forEach(function(s,u){if(r!==s||a.length===u+1)return e;r=e.placement.split("-")[0],i=L(r);var c=e.offsets.popper,l=e.offsets.reference,f=Math.floor,p="left"===r&&f(c.right)>f(l.left)||"right"===r&&f(c.left)<f(l.right)||"top"===r&&f(c.bottom)>f(l.top)||"bottom"===r&&f(c.top)<f(l.bottom),d=f(c.left)<f(n.left),h=f(c.right)>f(n.right),v=f(c.top)<f(n.top),g=f(c.bottom)>f(n.bottom),m="left"===r&&d||"right"===r&&h||"top"===r&&v||"bottom"===r&&g,y=-1!==["top","bottom"].indexOf(r),_=!!t.flipVariations&&(y&&"start"===o&&d||y&&"end"===o&&h||!y&&"start"===o&&v||!y&&"end"===o&&g);(p||m||_)&&(e.flipped=!0,(p||m)&&(r=a[u+1]),_&&(o=function(e){return"end"===e?"start":"start"===e?"end":e}(o)),e.placement=r+(o?"-"+o:""),e.offsets.popper=x({},e.offsets.popper,j(e.instance.popper,e.offsets.reference,e.placement)),e=R(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,i=r.popper,o=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return i[a?"left":"top"]=o[n]-(s?i[a?"width":"height"]:0),e.placement=L(t),e.offsets.popper=C(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!V(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=P(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,i=e.offsets.popper,o=P(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==o?o:t.gpuAcceleration,s=h(e.instance.popper),u=A(s),c={position:i.position},l=function(e,t){var n=e.offsets,r=n.popper,i=n.reference,o=-1!==["left","right"].indexOf(e.placement),a=-1!==e.placement.indexOf("-"),s=i.width%2==r.width%2,u=i.width%2==1&&r.width%2==1,c=function(e){return e},l=t?o||a||s?Math.round:Math.floor:c,f=t?Math.round:c;return{left:l(u&&!a&&t?r.left-1:r.left),top:f(r.top),bottom:f(r.bottom),right:l(r.right)}}(e,window.devicePixelRatio<2||!U),f="bottom"===n?"top":"bottom",p="right"===r?"left":"right",d=H("transform"),v=void 0,g=void 0;if(g="bottom"===f?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-u.height+l.bottom:l.top,v="right"===p?"HTML"===s.nodeName?-s.clientWidth+l.right:-u.width+l.right:l.left,a&&d)c[d]="translate3d("+v+"px, "+g+"px, 0)",c[f]=0,c[p]=0,c.willChange="transform";else{var m="bottom"===f?-1:1,y="right"===p?-1:1;c[f]=g*m,c[p]=v*y,c.willChange=f+", "+p}var _={"x-placement":e.placement};return e.attributes=x({},_,e.attributes),e.styles=x({},c,e.styles),e.arrowStyles=x({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return B(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&B(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,i){var o=k(i,t,e,n.positionFixed),a=I(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),B(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},J=function(){function e(t,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};w(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=a(this.update.bind(this)),this.options=x({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(x({},e.Defaults.modifiers,i.modifiers)).forEach(function(t){r.options.modifiers[t]=x({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return x({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return T(e,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=k(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=I(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=j(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=R(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,$(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[H("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return W.call(this)}}]),e}();J.Utils=("undefined"!=typeof window?window:e).PopperUtils,J.placements=z,J.Defaults=Y,t.default=J}.call(this,n(1))},function(e,t,n){var r;!function(t,n){"use strict";"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,i){"use strict";var o=[],a=n.document,s=Object.getPrototypeOf,u=o.slice,c=o.concat,l=o.push,f=o.indexOf,p={},d=p.toString,h=p.hasOwnProperty,v=h.toString,g=v.call(Object),m={},y=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},_=function(e){return null!=e&&e===e.window},b={type:!0,src:!0,noModule:!0};function w(e,t,n){var r,i=(t=t||a).createElement("script");if(i.text=e,n)for(r in b)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function T(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?p[d.call(e)]||"object":typeof e}var E=function(e,t){return new E.fn.init(e,t)},x=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function C(e){var t=!!e&&"length"in e&&e.length,n=T(e);return!y(e)&&!_(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}E.fn=E.prototype={jquery:"3.3.1",constructor:E,length:0,toArray:function(){return u.call(this)},get:function(e){return null==e?u.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(e){return this.pushStack(E.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||y(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(c&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&E.isPlainObject(n)?n:{},a[t]=E.extend(c,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==d.call(e))&&(!(t=s(e))||"function"==typeof(n=h.call(t,"constructor")&&t.constructor)&&v.call(n)===g)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){w(e)},each:function(e,t){var n,r=0;if(C(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(x,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?E.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:f.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return c.apply([],a)},guid:1,support:m}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=o[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){p["[object "+t+"]"]=t.toLowerCase()});var A=function(e){var t,n,r,i,o,a,s,u,c,l,f,p,d,h,v,g,m,y,_,b="sizzle"+1*new Date,w=e.document,T=0,E=0,x=ae(),C=ae(),A=ae(),S=function(e,t){return e===t&&(f=!0),0},O={}.hasOwnProperty,D=[],I=D.pop,k=D.push,N=D.push,L=D.slice,j=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",$="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",H="\\["+R+"*("+$+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+$+"))|)"+R+"*\\]",M=":("+$+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+H+")*)|.*)\\)|)",F=new RegExp(R+"+","g"),W=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),q=new RegExp("^"+R+"*,"+R+"*"),B=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=new RegExp("="+R+"*([^\\]'\"]*?)"+R+"*\\]","g"),V=new RegExp(M),z=new RegExp("^"+$+"$"),K={ID:new RegExp("^#("+$+")"),CLASS:new RegExp("^\\.("+$+")"),TAG:new RegExp("^("+$+"|[*])"),ATTR:new RegExp("^"+H),PSEUDO:new RegExp("^"+M),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=ye(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{N.apply(D=L.call(w.childNodes),w.childNodes),D[w.childNodes.length].nodeType}catch(e){N={apply:D.length?function(e,t){k.apply(e,L.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,r,i){var o,s,c,l,f,h,m,y=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,v)){if(11!==T&&(f=Y.exec(e)))if(o=f[1]){if(9===T){if(!(c=t.getElementById(o)))return r;if(c.id===o)return r.push(c),r}else if(y&&(c=y.getElementById(o))&&_(t,c)&&c.id===o)return r.push(c),r}else{if(f[2])return N.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return N.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!A[e+" "]&&(!g||!g.test(e))){if(1!==T)y=t,m=e;else if("object"!==t.nodeName.toLowerCase()){for((l=t.getAttribute("id"))?l=l.replace(te,ne):t.setAttribute("id",l=b),s=(h=a(e)).length;s--;)h[s]="#"+l+" "+me(h[s]);m=h.join(","),y=J.test(e)&&ve(t.parentNode)||t}if(m)try{return N.apply(r,y.querySelectorAll(m)),r}catch(e){}finally{l===b&&t.removeAttribute("id")}}}return u(e.replace(W,"$1"),t,r,i)}function ae(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function le(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(h=(d=a).documentElement,v=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&v){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&v){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&v)return t.getElementsByClassName(e)},m=[],g=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+R+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+R+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=Q.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),m.push("!=",M)}),g=g.length&&new RegExp(g.join("|")),m=m.length&&new RegExp(m.join("|")),t=Q.test(h.compareDocumentPosition),_=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&_(w,e)?-1:t===d||t.ownerDocument===w&&_(w,t)?1:l?j(l,e)-j(l,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:l?j(l,e)-j(l,t):0;if(i===o)return le(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?le(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(U,"='$1']"),n.matchesSelector&&v&&!A[t+" "]&&(!m||!m.test(t))&&(!g||!g.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),_(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&O.call(r.attrHandle,t.toLowerCase())?i(e,t,!v):void 0;return void 0!==o?o:n.attributes||!v?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return l=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return K.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=x[e+" "];return t||(t=new RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&x(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(F," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var c,l,f,p,d,h,v=o!==a?"nextSibling":"previousSibling",g=t.parentNode,m=s&&t.nodeName.toLowerCase(),y=!u&&!s,_=!1;if(g){if(o){for(;v;){for(p=t;p=p[v];)if(s?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=v="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(_=(d=(c=(l=(f=(p=g)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&c[1])&&c[2],p=d&&g.childNodes[d];p=++d&&p&&p[v]||(_=d=0)||h.pop();)if(1===p.nodeType&&++_&&p===t){l[e]=[T,d,_];break}}else if(y&&(_=d=(c=(l=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&c[1]),!1===_)for(;(p=++d&&p&&p[v]||(_=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++_||(y&&((l=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,_]),p!==t)););return(_-=i)===r||_%r==0&&_/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=j(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[b]?se(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return z.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=v?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return X.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ge(){}function me(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ye(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=E++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var c,l,f,p=[T,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(l=(f=t[b]||(t[b]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=l[o])&&c[0]===T&&c[1]===s)return p[2]=c[2];if(l[o]=p,p[2]=e(t,n,u))return!0}return!1}}function _e(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,c=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),c&&t.push(s)));return a}function we(e,t,n,r,i,o){return r&&!r[b]&&(r=we(r)),i&&!i[b]&&(i=we(i,o)),se(function(o,a,s,u){var c,l,f,p=[],d=[],h=a.length,v=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),g=!e||!o&&t?v:be(v,p,e,s,u),m=n?i||(o?e:h||r)?[]:a:g;if(n&&n(g,m,s,u),r)for(c=be(m,d),r(c,[],s,u),l=c.length;l--;)(f=c[l])&&(m[d[l]]=!(g[d[l]]=f));if(o){if(i||e){if(i){for(c=[],l=m.length;l--;)(f=m[l])&&c.push(g[l]=f);i(null,m=[],c,u)}for(l=m.length;l--;)(f=m[l])&&(c=i?j(o,f):p[l])>-1&&(o[c]=!(a[c]=f))}}else m=be(m===a?m.splice(h,m.length):m),i?i(null,a,m,u):N.apply(a,m)})}function Te(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,l=ye(function(e){return e===t},s,!0),f=ye(function(e){return j(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==c)||((t=n).nodeType?l(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[ye(_e(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return we(u>1&&_e(p),u>1&&me(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(W,"$1"),n,u<i&&Te(e.slice(u,i)),i<o&&Te(e=e.slice(i)),i<o&&me(e))}p.push(n)}return _e(p)}return ge.prototype=r.filters=r.pseudos,r.setFilters=new ge,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,c,l=C[e+" "];if(l)return t?0:l.slice(0);for(s=e,u=[],c=r.preFilter;s;){for(a in n&&!(i=q.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=B.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(W," ")}),s=s.slice(n.length)),r.filter)!(i=K[a].exec(s))||c[a]&&!(i=c[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):C(e,u).slice(0)},s=oe.compile=function(e,t){var n,i=[],o=[],s=A[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=Te(t[n]))[b]?i.push(s):o.push(s);(s=A(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,l){var f,h,g,m=0,y="0",_=o&&[],b=[],w=c,E=o||i&&r.find.TAG("*",l),x=T+=null==w?1:Math.random()||.1,C=E.length;for(l&&(c=a===d||a||l);y!==C&&null!=(f=E[y]);y++){if(i&&f){for(h=0,a||f.ownerDocument===d||(p(f),s=!v);g=e[h++];)if(g(f,a||d,s)){u.push(f);break}l&&(T=x)}n&&((f=!g&&f)&&m--,o&&_.push(f))}if(m+=y,n&&y!==m){for(h=0;g=t[h++];)g(_,b,a,s);if(o){if(m>0)for(;y--;)_[y]||b[y]||(b[y]=I.call(u));b=be(b)}N.apply(u,b),l&&!o&&b.length>0&&m+t.length>1&&oe.uniqueSort(u)}return l&&(T=x,c=w),_};return n?se(o):o}(o,i))).selector=e}return s},u=oe.select=function(e,t,n,i){var o,u,c,l,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(c=u[0]).type&&9===t.nodeType&&v&&r.relative[u[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(o=K.needsContext.test(e)?0:u.length;o--&&(c=u[o],!r.relative[l=c.type]);)if((f=r.find[l])&&(i=f(c.matches[0].replace(Z,ee),J.test(u[0].type)&&ve(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&me(u)))return N.apply(n,i),n;break}}return(p||s(e,d))(i,t,!v,n,!t||J.test(e)&&ve(t.parentNode)||t),n},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||ce(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(n);E.find=A,E.expr=A.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=A.uniqueSort,E.text=A.getText,E.isXMLDoc=A.isXML,E.contains=A.contains,E.escapeSelector=A.escape;var S=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},O=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=E.expr.match.needsContext;function I(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var k=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function N(e,t,n){return y(t)?E.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?E.grep(e,function(e){return e===t!==n}):"string"!=typeof t?E.grep(e,function(e){return f.call(t,e)>-1!==n}):E.filter(t,e,n)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return r>1?E.uniqueSort(n):n},filter:function(e){return this.pushStack(N(this,e||[],!1))},not:function(e){return this.pushStack(N(this,e||[],!0))},is:function(e){return!!N(this,"string"==typeof e&&D.test(e)?E(e):e||[],!1).length}});var L,j=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||L,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:j.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:a,!0)),k.test(r[1])&&E.isPlainObject(t))for(r in t)y(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=a.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,L=E(a);var P=/^(?:parents|prev(?:Until|All))/,R={children:!0,contents:!0,next:!0,prev:!0};function $(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?f.call(E(e),this[0]):f.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return S(e,"parentNode")},parentsUntil:function(e,t,n){return S(e,"parentNode",n)},next:function(e){return $(e,"nextSibling")},prev:function(e){return $(e,"previousSibling")},nextAll:function(e){return S(e,"nextSibling")},prevAll:function(e){return S(e,"previousSibling")},nextUntil:function(e,t,n){return S(e,"nextSibling",n)},prevUntil:function(e,t,n){return S(e,"previousSibling",n)},siblings:function(e){return O((e.parentNode||{}).firstChild,e)},children:function(e){return O(e.firstChild)},contents:function(e){return I(e,"iframe")?e.contentDocument:(I(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(e,t){E.fn[e]=function(n,r){var i=E.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=E.filter(r,i)),this.length>1&&(R[e]||E.uniqueSort(i),P.test(e)&&i.reverse()),this.pushStack(i)}});var H=/[^\x20\t\r\n\f]+/g;function M(e){return e}function F(e){throw e}function W(e,t,n,r){var i;try{e&&y(i=e.promise)?i.call(e).done(t).fail(n):e&&y(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return E.each(e.match(H)||[],function(e,n){t[n]=!0}),t}(e):E.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},c={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){E.each(n,function(n,r){y(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==T(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return E.each(arguments,function(e,t){for(var n;(n=E.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?E.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},E.extend({Deferred:function(e){var t=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return E.Deferred(function(n){E.each(t,function(t,r){var i=y(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&y(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(e,r,i){var o=0;function a(e,t,r,i){return function(){var s=this,u=arguments,c=function(){var n,c;if(!(e<o)){if((n=r.apply(s,u))===t.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"==typeof n||"function"==typeof n)&&n.then,y(c)?i?c.call(n,a(o,t,M,i),a(o,t,F,i)):(o++,c.call(n,a(o,t,M,i),a(o,t,F,i),a(o,t,M,t.notifyWith))):(r!==M&&(s=void 0,u=[n]),(i||t.resolveWith)(s,u))}},l=i?c:function(){try{c()}catch(n){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(n,l.stackTrace),e+1>=o&&(r!==F&&(s=void 0,u=[n]),t.rejectWith(s,u))}};e?l():(E.Deferred.getStackHook&&(l.stackTrace=E.Deferred.getStackHook()),n.setTimeout(l))}}return E.Deferred(function(n){t[0][3].add(a(0,n,y(i)?i:M,n.notifyWith)),t[1][3].add(a(0,n,y(e)?e:M)),t[2][3].add(a(0,n,y(r)?r:F))}).promise()},promise:function(e){return null!=e?E.extend(e,i):i}},o={};return E.each(t,function(e,n){var a=n[2],s=n[5];i[n[1]]=a.add,s&&a.add(function(){r=s},t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),a.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=a.fireWith}),i.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=u.call(arguments),o=E.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?u.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(W(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||y(i[n]&&i[n].then)))return o.then();for(;n--;)W(i[n],a(n),o.reject);return o.promise()}});var q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&q.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){n.setTimeout(function(){throw e})};var B=E.Deferred();function U(){a.removeEventListener("DOMContentLoaded",U),n.removeEventListener("load",U),E.ready()}E.fn.ready=function(e){return B.then(e).catch(function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0,!0!==e&&--E.readyWait>0||B.resolveWith(a,[E]))}}),E.ready.then=B.then,"complete"===a.readyState||"loading"!==a.readyState&&!a.documentElement.doScroll?n.setTimeout(E.ready):(a.addEventListener("DOMContentLoaded",U),n.addEventListener("load",U));var V=function(e,t,n,r,i,o,a){var s=0,u=e.length,c=null==n;if("object"===T(n))for(s in i=!0,n)V(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,y(r)||(a=!0),c&&(a?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:c?t.call(e):u?t(e[0],n):o},z=/^-ms-/,K=/-([a-z])/g;function G(e,t){return t.toUpperCase()}function X(e){return e.replace(z,"ms-").replace(K,G)}var Q=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=E.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Q(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(H)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var J=new Y,Z=new Y,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g;function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}Z.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Z.hasData(e)||J.hasData(e)},data:function(e,t,n){return Z.access(e,t,n)},removeData:function(e,t){Z.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),E.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=Z.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=X(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Z.set(this,e)}):V(this,function(t){var n;if(o&&void 0===t)return void 0!==(n=Z.get(o,e))?n:void 0!==(n=ne(o,e))?n:void 0;this.each(function(){Z.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Z.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:E.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?E.queue(this[0],e):void 0===t?this:this.each(function(){var n=E.queue(this,e,t);E._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&E.dequeue(this,e)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&E.contains(e.ownerDocument,e)&&"none"===E.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),c=n&&n[3]||(E.cssNumber[t]?"":"px"),l=(E.cssNumber[t]||"px"!==c&&+u)&&ie.exec(E.css(e,t));if(l&&l[3]!==c){for(u/=2,c=c||l[3],l=+u||1;a--;)E.style(e,t,l+c),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),l/=o;l*=2,E.style(e,t,l+c),n=n||[]}return n&&(l=+l||+u||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),i}var ce={};function le(e){var t,n=e.ownerDocument,r=e.nodeName,i=ce[r];return i||(t=n.body.appendChild(n.createElement(r)),i=E.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ce[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=le(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}E.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ve={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ge(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&I(e,t)?E.merge([e],n):n}function me(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}ve.optgroup=ve.option,ve.tbody=ve.tfoot=ve.colgroup=ve.caption=ve.thead,ve.th=ve.td;var ye,_e,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,c,l,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===T(o))E.merge(p,o.nodeType?[o]:o);else if(be.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ve[s]||ve._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],l=u[0];l--;)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&E.inArray(o,r)>-1)i&&i.push(o);else if(c=E.contains(o.ownerDocument,o),a=ge(f.appendChild(o),"script"),c&&me(a),n)for(l=0;o=a[l++];)he.test(o.type||"")&&n.push(o);return f}ye=a.createDocumentFragment().appendChild(a.createElement("div")),(_e=a.createElement("input")).setAttribute("type","radio"),_e.setAttribute("checked","checked"),_e.setAttribute("name","t"),ye.appendChild(_e),m.checkClone=ye.cloneNode(!0).cloneNode(!0).lastChild.checked,ye.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!ye.cloneNode(!0).lastChild.defaultValue;var Te=a.documentElement,Ee=/^key/,xe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ae(){return!0}function Se(){return!1}function Oe(){try{return a.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}E.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,g=J.get(e);if(g)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(Te,i),n.guid||(n.guid=E.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==E&&E.event.triggered!==t.type?E.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(H)||[""]).length;c--;)d=v=(s=Ce.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},l=E.extend({type:d,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,l):p.push(l),E.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,g=J.hasData(e)&&J.get(e);if(g&&(u=g.events)){for(c=(t=(t||"").match(H)||[""]).length;c--;)if(d=v=(s=Ce.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)l=p[o],!i&&v!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,f.remove&&f.remove.call(e,l));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||E.removeEvent(e,d,g.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[c],n,r,!0);E.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=E.event.fix(e),u=new Array(arguments.length),c=(J.get(this,"events")||{})[s.type]||[],l=E.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,s)){for(a=E.event.handlers.call(this,s,c),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,c=e.target;if(u&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?E(i,this).index(c)>-1:E.find(i,this,null,[c]).length),a[i]&&o.push(r);o.length&&s.push({elem:c,handlers:o})}return c=this,u<t.length&&s.push({elem:c,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(E.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Oe()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Oe()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&I(this,"input"))return this.click(),!1},_default:function(e){return I(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ae:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ae,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ae,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ae,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ee.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&xe.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){E.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||E.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),E.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){E.event.remove(this,e,n,t)})}});var Ie=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ke=/<script|<style|<link/i,Ne=/checked\s*(?:[^=]|=\s*.checked.)/i,Le=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return I(e,"table")&&I(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function $e(e,t){var n,r,i,o,a,s,u,c;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),c=o.events))for(i in delete a.handle,a.events={},c)for(n=0,r=c[i].length;n<r;n++)E.event.add(t,i,c[i][n]);Z.hasData(e)&&(s=Z.access(e),u=E.extend({},s),Z.set(t,u))}}function He(e,t,n,r){t=c.apply([],t);var i,o,a,s,u,l,f=0,p=e.length,d=p-1,h=t[0],v=y(h);if(v||p>1&&"string"==typeof h&&!m.checkClone&&Ne.test(h))return e.each(function(i){var o=e.eq(i);v&&(t[0]=h.call(this,i,o.html())),He(o,t,n,r)});if(p&&(o=(i=we(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=(a=E.map(ge(i,"script"),Pe)).length;f<p;f++)u=i,f!==d&&(u=E.clone(u,!0,!0),s&&E.merge(a,ge(u,"script"))),n.call(e[f],u,f);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,Re),f=0;f<s;f++)u=a[f],he.test(u.type||"")&&!J.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&E._evalUrl(u.src):w(u.textContent.replace(Le,""),l,u))}return e}function Me(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ge(r)),r.parentNode&&(n&&E.contains(r.ownerDocument,r)&&me(ge(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e.replace(Ie,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,c,l=e.cloneNode(!0),f=E.contains(e.ownerDocument,e);if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ge(l),r=0,i=(o=ge(e)).length;r<i;r++)s=o[r],u=a[r],c=void 0,"input"===(c=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==c&&"textarea"!==c||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ge(e),a=a||ge(l),r=0,i=o.length;r<i;r++)$e(o[r],a[r]);else $e(e,l);return(a=ge(l,"script")).length>0&&me(a,!f&&ge(e,"script")),l},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(Q(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[Z.expando]&&(n[Z.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Me(this,e,!0)},remove:function(e){return Me(this,e)},text:function(e){return V(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ge(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return V(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ve[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ge(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return He(this,arguments,function(t){var n=this.parentNode;E.inArray(this,e)<0&&(E.cleanData(ge(this)),n&&n.replaceChild(t,this))},e)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){E.fn[e]=function(e){for(var n,r=[],i=E(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),E(i[a])[t](n),l.apply(r,n.get());return this.pushStack(r)}});var Fe=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),We=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},qe=new RegExp(oe.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||We(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||E.contains(e.ownerDocument,e)||(a=E.style(e,t)),!m.pixelBoxStyles()&&Fe.test(a)&&qe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Ue(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Te.appendChild(c).appendChild(l);var e=n.getComputedStyle(l);r="1%"!==e.top,u=12===t(e.marginLeft),l.style.right="60%",s=36===t(e.right),i=36===t(e.width),l.style.position="absolute",o=36===l.offsetWidth||"absolute",Te.removeChild(c),l=null}}function t(e){return Math.round(parseFloat(e))}var r,i,o,s,u,c=a.createElement("div"),l=a.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(m,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),o}}))}();var Ve=/^(none|table(?!-c[ea]).+)/,ze=/^--/,Ke={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"},Xe=["Webkit","Moz","ms"],Qe=a.createElement("div").style;function Ye(e){var t=E.cssProps[e];return t||(t=E.cssProps[e]=function(e){if(e in Qe)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;n--;)if((e=Xe[n]+t)in Qe)return e}(e)||e),t}function Je(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+oe[a]+"Width",!0,i))):(u+=E.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=E.css(e,"border"+oe[a]+"Width",!0,i):s+=E.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=We(e),i=Be(e,t,r),o="border-box"===E.css(e,"boxSizing",!1,r),a=o;if(Fe.test(i)){if(!n)return i;i="auto"}return a=a&&(m.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===E.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=ze.test(t),c=e.style;if(u||(t=Ye(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:c[t];"string"===(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return ze.test(t)||(t=Ye(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,t){E.cssHooks[t]={get:function(e,n,r){if(n)return!Ve.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ke,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=We(e),a="border-box"===E.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&m.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=E.css(e,t)),Je(0,n,s)}}}),E.cssHooks.marginLeft=Ue(m.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(e,t){E.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(E.cssHooks[e+t].set=Je)}),E.fn.extend({css:function(e,t){return V(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=We(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,arguments.length>1)}}),E.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[E.cssProps[e.prop]]&&!E.cssHooks[e.prop]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=tt.prototype.init,E.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===a.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(at):n.setTimeout(at,E.fx.interval),E.fx.tick())}function st(){return n.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(e,t,n){var r,i,o=0,a=lt.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,c.startTime+c.duration-t),r=1-(n/c.duration||0),o=0,a=c.tweens.length;o<a;o++)c.tweens[o].run(r);return s.notifyWith(e,[c,r,n]),r<1&&a?n:(a||s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:E.extend({},t),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=E.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),l=c.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(l,c.opts.specialEasing);o<a;o++)if(r=lt.prefilters[o].call(c,e,l,c.opts))return y(r.stop)&&(E._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return E.map(l,ct,c),y(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),E.fx.timer(E.extend(u,{elem:e,anim:c,queue:c.opts.queue})),c}E.Animation=E.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){y(e)?(t=e,e=["*"]):e=e.match(H);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,c,l,f="width"in t||"height"in t,p=this,d={},h=e.style,v=e.nodeType&&ae(e),g=J.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(v?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;v=!0}d[r]=g&&g[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=g&&g.display)&&(c=J.get(e,"display")),"none"===(l=E.css(e,"display"))&&(c?l=c:(fe([e],!0),c=e.style.display||c,l=E.css(e,"display"),fe([e]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=c}),null==c&&(l=h.display,c="none"===l?"":l)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(g?"hidden"in g&&(v=g.hidden):g=J.access(e,"fxshow",{display:c}),o&&(g.hidden=!v),v&&fe([e],!0),p.done(function(){for(r in v||fe([e]),J.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(v?g[r]:0,r,p),r in g||(g[r]=u.start,v&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){y(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=E.isEmptyObject(e),o=E.speed(t,n,r),a=function(){var t=lt(this,E.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=E.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||E.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=E.timers,a=r?r.length:0;for(n.finish=!0,E.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),E.each(["toggle","show","hide"],function(e,t){var n=E.fn[t];E.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),E.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){E.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),nt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){rt||(rt=!0,at())},E.fx.stop=function(){rt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(e,t){return e=E.fx&&E.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}})},function(){var e=a.createElement("input"),t=a.createElement("select").appendChild(a.createElement("option"));e.type="checkbox",m.checkOn=""!==e.value,m.optSelected=t.selected,(e=a.createElement("input")).value="t",e.type="radio",m.radioValue="t"===e.value}();var ft,pt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return V(this,E.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?ft:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&I(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(H);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),ft={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var n=pt[t]||E.find.attr;pt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=pt[a],pt[a]=i,i=null!=n(e,t,r)?a:null,pt[a]=o),i}});var dt=/^(?:input|select|textarea|button)$/i,ht=/^(?:a|area)$/i;function vt(e){return(e.match(H)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(H)||[]}E.fn.extend({prop:function(e,t){return V(this,E.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):dt.test(e.nodeName)||ht.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(y(e))return this.each(function(t){E(this).addClass(e.call(this,t,gt(this)))});if((t=mt(e)).length)for(;n=this[u++];)if(i=gt(n),r=1===n.nodeType&&" "+vt(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(y(e))return this.each(function(t){E(this).removeClass(e.call(this,t,gt(this)))});if(!arguments.length)return this.attr("class","");if((t=mt(e)).length)for(;n=this[u++];)if(i=gt(n),r=1===n.nodeType&&" "+vt(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):y(e)?this.each(function(n){E(this).toggleClass(e.call(this,n,gt(this),t),t)}):this.each(function(){var t,i,o,a;if(r)for(i=0,o=E(this),a=mt(e);t=a[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=gt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+vt(gt(n))+" ").indexOf(t)>-1)return!0;return!1}});var yt=/\r/g;E.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=y(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,E(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=E.map(i,function(e){return null==e?"":e+""})),(t=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=E.valHooks[i.type]||E.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(yt,""):null==n?"":n:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:vt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!I(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=E.makeArray(t),a=i.length;a--;)((r=i[a]).selected=E.inArray(E.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=E.inArray(E(e).val(),t)>-1}},m.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),m.focusin="onfocusin"in n;var _t=/^(?:focusinfocus|focusoutblur)$/,bt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,r,i){var o,s,u,c,l,f,p,d,v=[r||a],g=h.call(e,"type")?e.type:e,m=h.call(e,"namespace")?e.namespace.split("."):[];if(s=d=u=r=r||a,3!==r.nodeType&&8!==r.nodeType&&!_t.test(g+E.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),l=g.indexOf(":")<0&&"on"+g,(e=e[E.expando]?e:new E.Event(g,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:E.makeArray(t,[e]),p=E.event.special[g]||{},i||!p.trigger||!1!==p.trigger.apply(r,t))){if(!i&&!p.noBubble&&!_(r)){for(c=p.delegateType||g,_t.test(c+g)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(r.ownerDocument||a)&&v.push(u.defaultView||u.parentWindow||n)}for(o=0;(s=v[o++])&&!e.isPropagationStopped();)d=s,e.type=o>1?c:p.bindType||g,(f=(J.get(s,"events")||{})[e.type]&&J.get(s,"handle"))&&f.apply(s,t),(f=l&&s[l])&&f.apply&&Q(s)&&(e.result=f.apply(s,t),!1===e.result&&e.preventDefault());return e.type=g,i||e.isDefaultPrevented()||p._default&&!1!==p._default.apply(v.pop(),t)||!Q(r)||l&&y(r[g])&&!_(r)&&((u=r[l])&&(r[l]=null),E.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,bt),r[g](),e.isPropagationStopped()&&d.removeEventListener(g,bt),E.event.triggered=void 0,u&&(r[l]=u)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),m.focusin||E.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){E.event.simulate(t,e.target,E.event.fix(e))};E.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var wt=n.location,Tt=Date.now(),Et=/\?/;E.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+e),t};var xt=/\[\]$/,Ct=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;function Ot(e,t,n,r){var i;if(Array.isArray(t))E.each(t,function(t,i){n||xt.test(e)?r(e,i):Ot(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==T(t))r(e,t);else for(i in t)Ot(e+"["+i+"]",t[i],n,r)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=y(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)Ot(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&St.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}}):{name:t.name,value:n.replace(Ct,"\r\n")}}).get()}});var Dt=/%20/g,It=/#.*$/,kt=/([?&])_=[^&]*/,Nt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,jt=/^\/\//,Pt={},Rt={},$t="*/".concat("*"),Ht=a.createElement("a");function Mt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(H)||[];if(y(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Ft(e,t,n,r){var i={},o=e===Rt;function a(s){var u;return i[s]=!0,E.each(e[s]||[],function(e,s){var c=s(t,n,r);return"string"!=typeof c||o||i[c]?o?!(u=c):void 0:(t.dataTypes.unshift(c),a(c),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Wt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Ht.href=wt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:wt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Wt(Wt(e,E.ajaxSettings),t):Wt(E.ajaxSettings,e)},ajaxPrefilter:Mt(Pt),ajaxTransport:Mt(Rt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,u,c,l,f,p,d,h=E.ajaxSetup({},t),v=h.context||h,g=h.context&&(v.nodeType||v.jquery)?E(v):E.event,m=E.Deferred(),y=E.Callbacks("once memory"),_=h.statusCode||{},b={},w={},T="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(l){if(!s)for(s={};t=Nt.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==l&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)x.always(e[x.status]);else for(t in e)_[t]=[_[t],e[t]];return this},abort:function(e){var t=e||T;return r&&r.abort(t),C(0,t),this}};if(m.promise(x),h.url=((e||h.url||wt.href)+"").replace(jt,wt.protocol+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(H)||[""],null==h.crossDomain){c=a.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=Ht.protocol+"//"+Ht.host!=c.protocol+"//"+c.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=E.param(h.data,h.traditional)),Ft(Pt,h,t,x),l)return x;for(p in(f=E.event&&h.global)&&0==E.active++&&E.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Lt.test(h.type),i=h.url.replace(It,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Dt,"+")):(d=h.url.slice(i.length),h.data&&(h.processData||"string"==typeof h.data)&&(i+=(Et.test(i)?"&":"?")+h.data,delete h.data),!1===h.cache&&(i=i.replace(kt,"$1"),d=(Et.test(i)?"&":"?")+"_="+Tt+++d),h.url=i+d),h.ifModified&&(E.lastModified[i]&&x.setRequestHeader("If-Modified-Since",E.lastModified[i]),E.etag[i]&&x.setRequestHeader("If-None-Match",E.etag[i])),(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&x.setRequestHeader("Content-Type",h.contentType),x.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]),h.headers)x.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(v,x,h)||l))return x.abort();if(T="abort",y.add(h.complete),x.done(h.success),x.fail(h.error),r=Ft(Rt,h,t,x)){if(x.readyState=1,f&&g.trigger("ajaxSend",[x,h]),l)return x;h.async&&h.timeout>0&&(u=n.setTimeout(function(){x.abort("timeout")},h.timeout));try{l=!1,r.send(b,C)}catch(e){if(l)throw e;C(-1,e)}}else C(-1,"No Transport");function C(e,t,a,s){var c,p,d,b,w,T=t;l||(l=!0,u&&n.clearTimeout(u),r=void 0,o=s||"",x.readyState=e>0?4:0,c=e>=200&&e<300||304===e,a&&(b=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(h,x,a)),b=function(e,t,n,r){var i,o,a,s,u,c={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=c[u+" "+o]||c["* "+o]))for(i in c)if((s=i.split(" "))[1]===o&&(a=c[u+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[i]:!0!==c[i]&&(o=s[0],l.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(h,b,x,c),c?(h.ifModified&&((w=x.getResponseHeader("Last-Modified"))&&(E.lastModified[i]=w),(w=x.getResponseHeader("etag"))&&(E.etag[i]=w)),204===e||"HEAD"===h.type?T="nocontent":304===e?T="notmodified":(T=b.state,p=b.data,c=!(d=b.error))):(d=T,!e&&T||(T="error",e<0&&(e=0))),x.status=e,x.statusText=(t||T)+"",c?m.resolveWith(v,[p,T,x]):m.rejectWith(v,[x,T,d]),x.statusCode(_),_=void 0,f&&g.trigger(c?"ajaxSuccess":"ajaxError",[x,h,c?p:d]),y.fireWith(v,[x,T]),f&&(g.trigger("ajaxComplete",[x,h]),--E.active||E.event.trigger("ajaxStop")))}return x},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,t){E[t]=function(e,n,r,i){return y(n)&&(i=i||r,r=n,n=void 0),E.ajax(E.extend({url:e,type:t,dataType:i,data:n,success:r},E.isPlainObject(e)&&e))}}),E._evalUrl=function(e){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return y(e)?this.each(function(t){E(this).wrapInner(e.call(this,t))}):this.each(function(){var t=E(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=y(e);return this.each(function(n){E(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var qt={0:200,1223:204},Bt=E.ajaxSettings.xhr();m.cors=!!Bt&&"withCredentials"in Bt,m.ajax=Bt=!!Bt,E.ajaxTransport(function(e){var t,r;if(m.cors||Bt&&!e.crossDomain)return{send:function(i,o){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);t=function(e){return function(){t&&(t=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(qt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),r=s.onerror=s.ontimeout=t("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout(function(){t&&r()})},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(e){var t,n;if(e.crossDomain)return{send:function(r,i){t=E("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),a.head.appendChild(t[0])},abort:function(){n&&n()}}});var Ut,Vt=[],zt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Vt.pop()||E.expando+"_"+Tt++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,r){var i,o,a,s=!1!==e.jsonp&&(zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&zt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(zt,"$1"+i):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return a||E.error(i+" was not called"),a[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always(function(){void 0===o?E(n).removeProp(i):n[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,Vt.push(i)),a&&y(o)&&o(a[0]),a=o=void 0}),"script"}),m.createHTMLDocument=((Ut=a.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((r=(t=a.implementation.createHTMLDocument("")).createElement("base")).href=a.location.href,t.head.appendChild(r)):t=a),o=!n&&[],(i=k.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),y(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.expr.pseudos.animated=function(e){return E.grep(E.timers,function(t){return e===t.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,c=E.css(e,"position"),l=E(e),f={};"static"===c&&(e.style.position="relative"),s=l.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1?(a=(r=l.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),y(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):l.css(f)}},E.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){E.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent;return e||Te})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;E.fn[e]=function(r){return V(this,function(e,r,i){var o;if(_(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),E.each(["top","left"],function(e,t){E.cssHooks[t]=Ue(m.pixelPosition,function(e,n){if(n)return n=Be(e,t),Fe.test(n)?E(e).position()[t]+"px":n})}),E.each({Height:"height",Width:"width"},function(e,t){E.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){E.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return V(this,function(t,n,i){var o;return _(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?E.css(t,n,s):E.style(t,n,i,s)},t,a?i:void 0,a)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){E.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))return r=u.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(u.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=I,E.isFunction=y,E.isWindow=_,E.camelCase=X,E.type=T,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},void 0===(r=function(){return E}.apply(t,[]))||(e.exports=r);var Kt=n.jQuery,Gt=n.$;return E.noConflict=function(e){return n.$===E&&(n.$=Gt),e&&n.jQuery===E&&(n.jQuery=Kt),E},i||(n.jQuery=n.$=E),E})},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=s(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0),i=n(22),o=n(24),a=n(25),s=n(26),u=n(8),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(27);e.exports=function(e){return new Promise(function(t,l){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,h="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var g=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+c(g+":"+m)}if(d.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};i(t,l,r),d=null}},d.onerror=function(){l(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(28),_=(e.withCredentials||s(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;_&&(p[e.xsrfHeaderName]=_)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),l(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(e,t,n){"use strict";var r=n(23);e.exports=function(e,t,n,i,o){var a=new Error(e);return r(a,t,n,i,o)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){n(12),e.exports=n(40)},function(e,t,n){n(13),window.Vue=n(36),Vue.component("example-component",n(39).default);new Vue({el:"#app"})},function(e,t,n){window._=n(14);try{window.Popper=n(3).default,window.$=window.jQuery=n(4),n(16)}catch(e){}window.axios=n(17),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var r=document.head.querySelector('meta[name="csrf-token"]');r?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=r.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token")},function(e,t,n){(function(e,r){var i;(function(){var o,a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="__lodash_hash_undefined__",l=500,f="__lodash_placeholder__",p=1,d=2,h=4,v=1,g=2,m=1,y=2,_=4,b=8,w=16,T=32,E=64,x=128,C=256,A=512,S=30,O="...",D=800,I=16,k=1,N=2,L=1/0,j=9007199254740991,P=1.7976931348623157e308,R=NaN,$=4294967295,H=$-1,M=$>>>1,F=[["ary",x],["bind",m],["bindKey",y],["curry",b],["curryRight",w],["flip",A],["partial",T],["partialRight",E],["rearg",C]],W="[object Arguments]",q="[object Array]",B="[object AsyncFunction]",U="[object Boolean]",V="[object Date]",z="[object DOMException]",K="[object Error]",G="[object Function]",X="[object GeneratorFunction]",Q="[object Map]",Y="[object Number]",J="[object Null]",Z="[object Object]",ee="[object Proxy]",te="[object RegExp]",ne="[object Set]",re="[object String]",ie="[object Symbol]",oe="[object Undefined]",ae="[object WeakMap]",se="[object WeakSet]",ue="[object ArrayBuffer]",ce="[object DataView]",le="[object Float32Array]",fe="[object Float64Array]",pe="[object Int8Array]",de="[object Int16Array]",he="[object Int32Array]",ve="[object Uint8Array]",ge="[object Uint8ClampedArray]",me="[object Uint16Array]",ye="[object Uint32Array]",_e=/\b__p \+= '';/g,be=/\b(__p \+=) '' \+/g,we=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Te=/&(?:amp|lt|gt|quot|#39);/g,Ee=/[&<>"']/g,xe=RegExp(Te.source),Ce=RegExp(Ee.source),Ae=/<%-([\s\S]+?)%>/g,Se=/<%([\s\S]+?)%>/g,Oe=/<%=([\s\S]+?)%>/g,De=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ie=/^\w*$/,ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ne=/[\\^$.*+?()[\]{}|]/g,Le=RegExp(Ne.source),je=/^\s+|\s+$/g,Pe=/^\s+/,Re=/\s+$/,$e=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,He=/\{\n\/\* \[wrapped with (.+)\] \*/,Me=/,? & /,Fe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,We=/\\(\\)?/g,qe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Be=/\w*$/,Ue=/^[-+]0x[0-9a-f]+$/i,Ve=/^0b[01]+$/i,ze=/^\[object .+?Constructor\]$/,Ke=/^0o[0-7]+$/i,Ge=/^(?:0|[1-9]\d*)$/,Xe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qe=/($^)/,Ye=/['\n\r\u2028\u2029\\]/g,Je="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ze="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",et="[\\ud800-\\udfff]",tt="["+Ze+"]",nt="["+Je+"]",rt="\\d+",it="[\\u2700-\\u27bf]",ot="[a-z\\xdf-\\xf6\\xf8-\\xff]",at="[^\\ud800-\\udfff"+Ze+rt+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",st="\\ud83c[\\udffb-\\udfff]",ut="[^\\ud800-\\udfff]",ct="(?:\\ud83c[\\udde6-\\uddff]){2}",lt="[\\ud800-\\udbff][\\udc00-\\udfff]",ft="[A-Z\\xc0-\\xd6\\xd8-\\xde]",pt="(?:"+ot+"|"+at+")",dt="(?:"+ft+"|"+at+")",ht="(?:"+nt+"|"+st+")"+"?",vt="[\\ufe0e\\ufe0f]?"+ht+("(?:\\u200d(?:"+[ut,ct,lt].join("|")+")[\\ufe0e\\ufe0f]?"+ht+")*"),gt="(?:"+[it,ct,lt].join("|")+")"+vt,mt="(?:"+[ut+nt+"?",nt,ct,lt,et].join("|")+")",yt=RegExp("['’]","g"),_t=RegExp(nt,"g"),bt=RegExp(st+"(?="+st+")|"+mt+vt,"g"),wt=RegExp([ft+"?"+ot+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[tt,ft,"$"].join("|")+")",dt+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[tt,ft+pt,"$"].join("|")+")",ft+"?"+pt+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ft+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rt,gt].join("|"),"g"),Tt=RegExp("[\\u200d\\ud800-\\udfff"+Je+"\\ufe0e\\ufe0f]"),Et=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,xt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ct=-1,At={};At[le]=At[fe]=At[pe]=At[de]=At[he]=At[ve]=At[ge]=At[me]=At[ye]=!0,At[W]=At[q]=At[ue]=At[U]=At[ce]=At[V]=At[K]=At[G]=At[Q]=At[Y]=At[Z]=At[te]=At[ne]=At[re]=At[ae]=!1;var St={};St[W]=St[q]=St[ue]=St[ce]=St[U]=St[V]=St[le]=St[fe]=St[pe]=St[de]=St[he]=St[Q]=St[Y]=St[Z]=St[te]=St[ne]=St[re]=St[ie]=St[ve]=St[ge]=St[me]=St[ye]=!0,St[K]=St[G]=St[ae]=!1;var Ot={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dt=parseFloat,It=parseInt,kt="object"==typeof e&&e&&e.Object===Object&&e,Nt="object"==typeof self&&self&&self.Object===Object&&self,Lt=kt||Nt||Function("return this")(),jt=t&&!t.nodeType&&t,Pt=jt&&"object"==typeof r&&r&&!r.nodeType&&r,Rt=Pt&&Pt.exports===jt,$t=Rt&&kt.process,Ht=function(){try{var e=Pt&&Pt.require&&Pt.require("util").types;return e||$t&&$t.binding&&$t.binding("util")}catch(e){}}(),Mt=Ht&&Ht.isArrayBuffer,Ft=Ht&&Ht.isDate,Wt=Ht&&Ht.isMap,qt=Ht&&Ht.isRegExp,Bt=Ht&&Ht.isSet,Ut=Ht&&Ht.isTypedArray;function Vt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function zt(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(r,a,n(a),e)}return r}function Kt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Gt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Xt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Qt(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function Yt(e,t){return!!(null==e?0:e.length)&&un(e,t,0)>-1}function Jt(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Zt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function en(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function tn(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function nn(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function rn(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var on=pn("length");function an(e,t,n){var r;return n(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}function sn(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function un(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):sn(e,ln,n)}function cn(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function ln(e){return e!=e}function fn(e,t){var n=null==e?0:e.length;return n?vn(e,t)/n:R}function pn(e){return function(t){return null==t?o:t[e]}}function dn(e){return function(t){return null==e?o:e[t]}}function hn(e,t,n,r,i){return i(e,function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)}),n}function vn(e,t){for(var n,r=-1,i=e.length;++r<i;){var a=t(e[r]);a!==o&&(n=n===o?a:n+a)}return n}function gn(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function mn(e){return function(t){return e(t)}}function yn(e,t){return Zt(t,function(t){return e[t]})}function _n(e,t){return e.has(t)}function bn(e,t){for(var n=-1,r=e.length;++n<r&&un(t,e[n],0)>-1;);return n}function wn(e,t){for(var n=e.length;n--&&un(t,e[n],0)>-1;);return n}var Tn=dn({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),En=dn({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function xn(e){return"\\"+Ot[e]}function Cn(e){return Tt.test(e)}function An(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function Sn(e,t){return function(n){return e(t(n))}}function On(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n];a!==t&&a!==f||(e[n]=f,o[i++]=n)}return o}function Dn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function In(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function kn(e){return Cn(e)?function(e){var t=bt.lastIndex=0;for(;bt.test(e);)++t;return t}(e):on(e)}function Nn(e){return Cn(e)?function(e){return e.match(bt)||[]}(e):function(e){return e.split("")}(e)}var Ln=dn({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var jn=function e(t){var n,r=(t=null==t?Lt:jn.defaults(Lt.Object(),t,jn.pick(Lt,xt))).Array,i=t.Date,Je=t.Error,Ze=t.Function,et=t.Math,tt=t.Object,nt=t.RegExp,rt=t.String,it=t.TypeError,ot=r.prototype,at=Ze.prototype,st=tt.prototype,ut=t["__core-js_shared__"],ct=at.toString,lt=st.hasOwnProperty,ft=0,pt=(n=/[^.]+$/.exec(ut&&ut.keys&&ut.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",dt=st.toString,ht=ct.call(tt),vt=Lt._,gt=nt("^"+ct.call(lt).replace(Ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mt=Rt?t.Buffer:o,bt=t.Symbol,Tt=t.Uint8Array,Ot=mt?mt.allocUnsafe:o,kt=Sn(tt.getPrototypeOf,tt),Nt=tt.create,jt=st.propertyIsEnumerable,Pt=ot.splice,$t=bt?bt.isConcatSpreadable:o,Ht=bt?bt.iterator:o,on=bt?bt.toStringTag:o,dn=function(){try{var e=Mo(tt,"defineProperty");return e({},"",{}),e}catch(e){}}(),Pn=t.clearTimeout!==Lt.clearTimeout&&t.clearTimeout,Rn=i&&i.now!==Lt.Date.now&&i.now,$n=t.setTimeout!==Lt.setTimeout&&t.setTimeout,Hn=et.ceil,Mn=et.floor,Fn=tt.getOwnPropertySymbols,Wn=mt?mt.isBuffer:o,qn=t.isFinite,Bn=ot.join,Un=Sn(tt.keys,tt),Vn=et.max,zn=et.min,Kn=i.now,Gn=t.parseInt,Xn=et.random,Qn=ot.reverse,Yn=Mo(t,"DataView"),Jn=Mo(t,"Map"),Zn=Mo(t,"Promise"),er=Mo(t,"Set"),tr=Mo(t,"WeakMap"),nr=Mo(tt,"create"),rr=tr&&new tr,ir={},or=fa(Yn),ar=fa(Jn),sr=fa(Zn),ur=fa(er),cr=fa(tr),lr=bt?bt.prototype:o,fr=lr?lr.valueOf:o,pr=lr?lr.toString:o;function dr(e){if(Os(e)&&!ms(e)&&!(e instanceof mr)){if(e instanceof gr)return e;if(lt.call(e,"__wrapped__"))return pa(e)}return new gr(e)}var hr=function(){function e(){}return function(t){if(!Ss(t))return{};if(Nt)return Nt(t);e.prototype=t;var n=new e;return e.prototype=o,n}}();function vr(){}function gr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}function mr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$,this.__views__=[]}function yr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function _r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function br(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function wr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new br;++t<n;)this.add(e[t])}function Tr(e){var t=this.__data__=new _r(e);this.size=t.size}function Er(e,t){var n=ms(e),r=!n&&gs(e),i=!n&&!r&&ws(e),o=!n&&!r&&!i&&Rs(e),a=n||r||i||o,s=a?gn(e.length,rt):[],u=s.length;for(var c in e)!t&&!lt.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||zo(c,u))||s.push(c);return s}function xr(e){var t=e.length;return t?e[wi(0,t-1)]:o}function Cr(e,t){return ua(no(e),jr(t,0,e.length))}function Ar(e){return ua(no(e))}function Sr(e,t,n){(n===o||ds(e[t],n))&&(n!==o||t in e)||Nr(e,t,n)}function Or(e,t,n){var r=e[t];lt.call(e,t)&&ds(r,n)&&(n!==o||t in e)||Nr(e,t,n)}function Dr(e,t){for(var n=e.length;n--;)if(ds(e[n][0],t))return n;return-1}function Ir(e,t,n,r){return Mr(e,function(e,i,o){t(r,e,n(e),o)}),r}function kr(e,t){return e&&ro(t,iu(t),e)}function Nr(e,t,n){"__proto__"==t&&dn?dn(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Lr(e,t){for(var n=-1,i=t.length,a=r(i),s=null==e;++n<i;)a[n]=s?o:Zs(e,t[n]);return a}function jr(e,t,n){return e==e&&(n!==o&&(e=e<=n?e:n),t!==o&&(e=e>=t?e:t)),e}function Pr(e,t,n,r,i,a){var s,u=t&p,c=t&d,l=t&h;if(n&&(s=i?n(e,r,i,a):n(e)),s!==o)return s;if(!Ss(e))return e;var f=ms(e);if(f){if(s=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&lt.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(e),!u)return no(e,s)}else{var v=qo(e),g=v==G||v==X;if(ws(e))return Qi(e,u);if(v==Z||v==W||g&&!i){if(s=c||g?{}:Uo(e),!u)return c?function(e,t){return ro(e,Wo(e),t)}(e,function(e,t){return e&&ro(t,ou(t),e)}(s,e)):function(e,t){return ro(e,Fo(e),t)}(e,kr(s,e))}else{if(!St[v])return i?e:{};s=function(e,t,n){var r,i,o,a=e.constructor;switch(t){case ue:return Yi(e);case U:case V:return new a(+e);case ce:return function(e,t){var n=t?Yi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case le:case fe:case pe:case de:case he:case ve:case ge:case me:case ye:return Ji(e,n);case Q:return new a;case Y:case re:return new a(e);case te:return(o=new(i=e).constructor(i.source,Be.exec(i))).lastIndex=i.lastIndex,o;case ne:return new a;case ie:return r=e,fr?tt(fr.call(r)):{}}}(e,v,u)}}a||(a=new Tr);var m=a.get(e);if(m)return m;if(a.set(e,s),Ls(e))return e.forEach(function(r){s.add(Pr(r,t,n,r,e,a))}),s;if(Ds(e))return e.forEach(function(r,i){s.set(i,Pr(r,t,n,i,e,a))}),s;var y=f?o:(l?c?No:ko:c?ou:iu)(e);return Kt(y||e,function(r,i){y&&(r=e[i=r]),Or(s,i,Pr(r,t,n,i,e,a))}),s}function Rr(e,t,n){var r=n.length;if(null==e)return!r;for(e=tt(e);r--;){var i=n[r],a=t[i],s=e[i];if(s===o&&!(i in e)||!a(s))return!1}return!0}function $r(e,t,n){if("function"!=typeof e)throw new it(u);return ia(function(){e.apply(o,n)},t)}function Hr(e,t,n,r){var i=-1,o=Yt,s=!0,u=e.length,c=[],l=t.length;if(!u)return c;n&&(t=Zt(t,mn(n))),r?(o=Jt,s=!1):t.length>=a&&(o=_n,s=!1,t=new wr(t));e:for(;++i<u;){var f=e[i],p=null==n?f:n(f);if(f=r||0!==f?f:0,s&&p==p){for(var d=l;d--;)if(t[d]===p)continue e;c.push(f)}else o(t,p,r)||c.push(f)}return c}dr.templateSettings={escape:Ae,evaluate:Se,interpolate:Oe,variable:"",imports:{_:dr}},dr.prototype=vr.prototype,dr.prototype.constructor=dr,gr.prototype=hr(vr.prototype),gr.prototype.constructor=gr,mr.prototype=hr(vr.prototype),mr.prototype.constructor=mr,yr.prototype.clear=function(){this.__data__=nr?nr(null):{},this.size=0},yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},yr.prototype.get=function(e){var t=this.__data__;if(nr){var n=t[e];return n===c?o:n}return lt.call(t,e)?t[e]:o},yr.prototype.has=function(e){var t=this.__data__;return nr?t[e]!==o:lt.call(t,e)},yr.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=nr&&t===o?c:t,this},_r.prototype.clear=function(){this.__data__=[],this.size=0},_r.prototype.delete=function(e){var t=this.__data__,n=Dr(t,e);return!(n<0||(n==t.length-1?t.pop():Pt.call(t,n,1),--this.size,0))},_r.prototype.get=function(e){var t=this.__data__,n=Dr(t,e);return n<0?o:t[n][1]},_r.prototype.has=function(e){return Dr(this.__data__,e)>-1},_r.prototype.set=function(e,t){var n=this.__data__,r=Dr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},br.prototype.clear=function(){this.size=0,this.__data__={hash:new yr,map:new(Jn||_r),string:new yr}},br.prototype.delete=function(e){var t=$o(this,e).delete(e);return this.size-=t?1:0,t},br.prototype.get=function(e){return $o(this,e).get(e)},br.prototype.has=function(e){return $o(this,e).has(e)},br.prototype.set=function(e,t){var n=$o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},wr.prototype.add=wr.prototype.push=function(e){return this.__data__.set(e,c),this},wr.prototype.has=function(e){return this.__data__.has(e)},Tr.prototype.clear=function(){this.__data__=new _r,this.size=0},Tr.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Tr.prototype.get=function(e){return this.__data__.get(e)},Tr.prototype.has=function(e){return this.__data__.has(e)},Tr.prototype.set=function(e,t){var n=this.__data__;if(n instanceof _r){var r=n.__data__;if(!Jn||r.length<a-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new br(r)}return n.set(e,t),this.size=n.size,this};var Mr=ao(Kr),Fr=ao(Gr,!0);function Wr(e,t){var n=!0;return Mr(e,function(e,r,i){return n=!!t(e,r,i)}),n}function qr(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],s=t(a);if(null!=s&&(u===o?s==s&&!Ps(s):n(s,u)))var u=s,c=a}return c}function Br(e,t){var n=[];return Mr(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}function Ur(e,t,n,r,i){var o=-1,a=e.length;for(n||(n=Vo),i||(i=[]);++o<a;){var s=e[o];t>0&&n(s)?t>1?Ur(s,t-1,n,r,i):en(i,s):r||(i[i.length]=s)}return i}var Vr=so(),zr=so(!0);function Kr(e,t){return e&&Vr(e,t,iu)}function Gr(e,t){return e&&zr(e,t,iu)}function Xr(e,t){return Qt(t,function(t){return xs(e[t])})}function Qr(e,t){for(var n=0,r=(t=zi(t,e)).length;null!=e&&n<r;)e=e[la(t[n++])];return n&&n==r?e:o}function Yr(e,t,n){var r=t(e);return ms(e)?r:en(r,n(e))}function Jr(e){return null==e?e===o?oe:J:on&&on in tt(e)?function(e){var t=lt.call(e,on),n=e[on];try{e[on]=o;var r=!0}catch(e){}var i=dt.call(e);return r&&(t?e[on]=n:delete e[on]),i}(e):function(e){return dt.call(e)}(e)}function Zr(e,t){return e>t}function ei(e,t){return null!=e&&lt.call(e,t)}function ti(e,t){return null!=e&&t in tt(e)}function ni(e,t,n){for(var i=n?Jt:Yt,a=e[0].length,s=e.length,u=s,c=r(s),l=1/0,f=[];u--;){var p=e[u];u&&t&&(p=Zt(p,mn(t))),l=zn(p.length,l),c[u]=!n&&(t||a>=120&&p.length>=120)?new wr(u&&p):o}p=e[0];var d=-1,h=c[0];e:for(;++d<a&&f.length<l;){var v=p[d],g=t?t(v):v;if(v=n||0!==v?v:0,!(h?_n(h,g):i(f,g,n))){for(u=s;--u;){var m=c[u];if(!(m?_n(m,g):i(e[u],g,n)))continue e}h&&h.push(g),f.push(v)}}return f}function ri(e,t,n){var r=null==(e=ta(e,t=zi(t,e)))?e:e[la(Ea(t))];return null==r?o:Vt(r,e,n)}function ii(e){return Os(e)&&Jr(e)==W}function oi(e,t,n,r,i){return e===t||(null==e||null==t||!Os(e)&&!Os(t)?e!=e&&t!=t:function(e,t,n,r,i,a){var s=ms(e),u=ms(t),c=s?q:qo(e),l=u?q:qo(t),f=(c=c==W?Z:c)==Z,p=(l=l==W?Z:l)==Z,d=c==l;if(d&&ws(e)){if(!ws(t))return!1;s=!0,f=!1}if(d&&!f)return a||(a=new Tr),s||Rs(e)?Do(e,t,n,r,i,a):function(e,t,n,r,i,o,a){switch(n){case ce:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ue:return!(e.byteLength!=t.byteLength||!o(new Tt(e),new Tt(t)));case U:case V:case Y:return ds(+e,+t);case K:return e.name==t.name&&e.message==t.message;case te:case re:return e==t+"";case Q:var s=An;case ne:var u=r&v;if(s||(s=Dn),e.size!=t.size&&!u)return!1;var c=a.get(e);if(c)return c==t;r|=g,a.set(e,t);var l=Do(s(e),s(t),r,i,o,a);return a.delete(e),l;case ie:if(fr)return fr.call(e)==fr.call(t)}return!1}(e,t,c,n,r,i,a);if(!(n&v)){var h=f&&lt.call(e,"__wrapped__"),m=p&&lt.call(t,"__wrapped__");if(h||m){var y=h?e.value():e,_=m?t.value():t;return a||(a=new Tr),i(y,_,n,r,a)}}return!!d&&(a||(a=new Tr),function(e,t,n,r,i,a){var s=n&v,u=ko(e),c=u.length,l=ko(t).length;if(c!=l&&!s)return!1;for(var f=c;f--;){var p=u[f];if(!(s?p in t:lt.call(t,p)))return!1}var d=a.get(e);if(d&&a.get(t))return d==t;var h=!0;a.set(e,t),a.set(t,e);for(var g=s;++f<c;){p=u[f];var m=e[p],y=t[p];if(r)var _=s?r(y,m,p,t,e,a):r(m,y,p,e,t,a);if(!(_===o?m===y||i(m,y,n,r,a):_)){h=!1;break}g||(g="constructor"==p)}if(h&&!g){var b=e.constructor,w=t.constructor;b!=w&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(h=!1)}return a.delete(e),a.delete(t),h}(e,t,n,r,i,a))}(e,t,n,r,oi,i))}function ai(e,t,n,r){var i=n.length,a=i,s=!r;if(null==e)return!a;for(e=tt(e);i--;){var u=n[i];if(s&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++i<a;){var c=(u=n[i])[0],l=e[c],f=u[1];if(s&&u[2]){if(l===o&&!(c in e))return!1}else{var p=new Tr;if(r)var d=r(l,f,c,e,t,p);if(!(d===o?oi(f,l,v|g,r,p):d))return!1}}return!0}function si(e){return!(!Ss(e)||(t=e,pt&&pt in t))&&(xs(e)?gt:ze).test(fa(e));var t}function ui(e){return"function"==typeof e?e:null==e?Iu:"object"==typeof e?ms(e)?hi(e[0],e[1]):di(e):Mu(e)}function ci(e){if(!Yo(e))return Un(e);var t=[];for(var n in tt(e))lt.call(e,n)&&"constructor"!=n&&t.push(n);return t}function li(e){if(!Ss(e))return function(e){var t=[];if(null!=e)for(var n in tt(e))t.push(n);return t}(e);var t=Yo(e),n=[];for(var r in e)("constructor"!=r||!t&&lt.call(e,r))&&n.push(r);return n}function fi(e,t){return e<t}function pi(e,t){var n=-1,i=_s(e)?r(e.length):[];return Mr(e,function(e,r,o){i[++n]=t(e,r,o)}),i}function di(e){var t=Ho(e);return 1==t.length&&t[0][2]?Zo(t[0][0],t[0][1]):function(n){return n===e||ai(n,e,t)}}function hi(e,t){return Go(e)&&Jo(t)?Zo(la(e),t):function(n){var r=Zs(n,e);return r===o&&r===t?eu(n,e):oi(t,r,v|g)}}function vi(e,t,n,r,i){e!==t&&Vr(t,function(a,s){if(Ss(a))i||(i=new Tr),function(e,t,n,r,i,a,s){var u=na(e,n),c=na(t,n),l=s.get(c);if(l)Sr(e,n,l);else{var f=a?a(u,c,n+"",e,t,s):o,p=f===o;if(p){var d=ms(c),h=!d&&ws(c),v=!d&&!h&&Rs(c);f=c,d||h||v?ms(u)?f=u:bs(u)?f=no(u):h?(p=!1,f=Qi(c,!0)):v?(p=!1,f=Ji(c,!0)):f=[]:ks(c)||gs(c)?(f=u,gs(u)?f=Us(u):Ss(u)&&!xs(u)||(f=Uo(c))):p=!1}p&&(s.set(c,f),i(f,c,r,a,s),s.delete(c)),Sr(e,n,f)}}(e,t,s,n,vi,r,i);else{var u=r?r(na(e,s),a,s+"",e,t,i):o;u===o&&(u=a),Sr(e,s,u)}},ou)}function gi(e,t){var n=e.length;if(n)return zo(t+=t<0?n:0,n)?e[t]:o}function mi(e,t,n){var r=-1;return t=Zt(t.length?t:[Iu],mn(Ro())),function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(pi(e,function(e,n,i){return{criteria:Zt(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,a=i.length,s=n.length;++r<a;){var u=Zi(i[r],o[r]);if(u){if(r>=s)return u;var c=n[r];return u*("desc"==c?-1:1)}}return e.index-t.index}(e,t,n)})}function yi(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var a=t[r],s=Qr(e,a);n(s,a)&&Ai(o,zi(a,e),s)}return o}function _i(e,t,n,r){var i=r?cn:un,o=-1,a=t.length,s=e;for(e===t&&(t=no(t)),n&&(s=Zt(e,mn(n)));++o<a;)for(var u=0,c=t[o],l=n?n(c):c;(u=i(s,l,u,r))>-1;)s!==e&&Pt.call(s,u,1),Pt.call(e,u,1);return e}function bi(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;zo(i)?Pt.call(e,i,1):Hi(e,i)}}return e}function wi(e,t){return e+Mn(Xn()*(t-e+1))}function Ti(e,t){var n="";if(!e||t<1||t>j)return n;do{t%2&&(n+=e),(t=Mn(t/2))&&(e+=e)}while(t);return n}function Ei(e,t){return oa(ea(e,t,Iu),e+"")}function xi(e){return xr(du(e))}function Ci(e,t){var n=du(e);return ua(n,jr(t,0,n.length))}function Ai(e,t,n,r){if(!Ss(e))return e;for(var i=-1,a=(t=zi(t,e)).length,s=a-1,u=e;null!=u&&++i<a;){var c=la(t[i]),l=n;if(i!=s){var f=u[c];(l=r?r(f,c,u):o)===o&&(l=Ss(f)?f:zo(t[i+1])?[]:{})}Or(u,c,l),u=u[c]}return e}var Si=rr?function(e,t){return rr.set(e,t),e}:Iu,Oi=dn?function(e,t){return dn(e,"toString",{configurable:!0,enumerable:!1,value:Su(t),writable:!0})}:Iu;function Di(e){return ua(du(e))}function Ii(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=r(o);++i<o;)a[i]=e[i+t];return a}function ki(e,t){var n;return Mr(e,function(e,r,i){return!(n=t(e,r,i))}),!!n}function Ni(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=M){for(;r<i;){var o=r+i>>>1,a=e[o];null!==a&&!Ps(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return Li(e,t,Iu,n)}function Li(e,t,n,r){t=n(t);for(var i=0,a=null==e?0:e.length,s=t!=t,u=null===t,c=Ps(t),l=t===o;i<a;){var f=Mn((i+a)/2),p=n(e[f]),d=p!==o,h=null===p,v=p==p,g=Ps(p);if(s)var m=r||v;else m=l?v&&(r||d):u?v&&d&&(r||!h):c?v&&d&&!h&&(r||!g):!h&&!g&&(r?p<=t:p<t);m?i=f+1:a=f}return zn(a,H)}function ji(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!ds(s,u)){var u=s;o[i++]=0===a?0:a}}return o}function Pi(e){return"number"==typeof e?e:Ps(e)?R:+e}function Ri(e){if("string"==typeof e)return e;if(ms(e))return Zt(e,Ri)+"";if(Ps(e))return pr?pr.call(e):"";var t=e+"";return"0"==t&&1/e==-L?"-0":t}function $i(e,t,n){var r=-1,i=Yt,o=e.length,s=!0,u=[],c=u;if(n)s=!1,i=Jt;else if(o>=a){var l=t?null:Eo(e);if(l)return Dn(l);s=!1,i=_n,c=new wr}else c=t?[]:u;e:for(;++r<o;){var f=e[r],p=t?t(f):f;if(f=n||0!==f?f:0,s&&p==p){for(var d=c.length;d--;)if(c[d]===p)continue e;t&&c.push(p),u.push(f)}else i(c,p,n)||(c!==u&&c.push(p),u.push(f))}return u}function Hi(e,t){return null==(e=ta(e,t=zi(t,e)))||delete e[la(Ea(t))]}function Mi(e,t,n,r){return Ai(e,t,n(Qr(e,t)),r)}function Fi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?Ii(e,r?0:o,r?o+1:i):Ii(e,r?o+1:0,r?i:o)}function Wi(e,t){var n=e;return n instanceof mr&&(n=n.value()),tn(t,function(e,t){return t.func.apply(t.thisArg,en([e],t.args))},n)}function qi(e,t,n){var i=e.length;if(i<2)return i?$i(e[0]):[];for(var o=-1,a=r(i);++o<i;)for(var s=e[o],u=-1;++u<i;)u!=o&&(a[o]=Hr(a[o]||s,e[u],t,n));return $i(Ur(a,1),t,n)}function Bi(e,t,n){for(var r=-1,i=e.length,a=t.length,s={};++r<i;){var u=r<a?t[r]:o;n(s,e[r],u)}return s}function Ui(e){return bs(e)?e:[]}function Vi(e){return"function"==typeof e?e:Iu}function zi(e,t){return ms(e)?e:Go(e,t)?[e]:ca(Vs(e))}var Ki=Ei;function Gi(e,t,n){var r=e.length;return n=n===o?r:n,!t&&n>=r?e:Ii(e,t,n)}var Xi=Pn||function(e){return Lt.clearTimeout(e)};function Qi(e,t){if(t)return e.slice();var n=e.length,r=Ot?Ot(n):new e.constructor(n);return e.copy(r),r}function Yi(e){var t=new e.constructor(e.byteLength);return new Tt(t).set(new Tt(e)),t}function Ji(e,t){var n=t?Yi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Zi(e,t){if(e!==t){var n=e!==o,r=null===e,i=e==e,a=Ps(e),s=t!==o,u=null===t,c=t==t,l=Ps(t);if(!u&&!l&&!a&&e>t||a&&s&&c&&!u&&!l||r&&s&&c||!n&&c||!i)return 1;if(!r&&!a&&!l&&e<t||l&&n&&i&&!r&&!a||u&&n&&i||!s&&i||!c)return-1}return 0}function eo(e,t,n,i){for(var o=-1,a=e.length,s=n.length,u=-1,c=t.length,l=Vn(a-s,0),f=r(c+l),p=!i;++u<c;)f[u]=t[u];for(;++o<s;)(p||o<a)&&(f[n[o]]=e[o]);for(;l--;)f[u++]=e[o++];return f}function to(e,t,n,i){for(var o=-1,a=e.length,s=-1,u=n.length,c=-1,l=t.length,f=Vn(a-u,0),p=r(f+l),d=!i;++o<f;)p[o]=e[o];for(var h=o;++c<l;)p[h+c]=t[c];for(;++s<u;)(d||o<a)&&(p[h+n[s]]=e[o++]);return p}function no(e,t){var n=-1,i=e.length;for(t||(t=r(i));++n<i;)t[n]=e[n];return t}function ro(e,t,n,r){var i=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var u=t[a],c=r?r(n[u],e[u],u,n,e):o;c===o&&(c=e[u]),i?Nr(n,u,c):Or(n,u,c)}return n}function io(e,t){return function(n,r){var i=ms(n)?zt:Ir,o=t?t():{};return i(n,e,Ro(r,2),o)}}function oo(e){return Ei(function(t,n){var r=-1,i=n.length,a=i>1?n[i-1]:o,s=i>2?n[2]:o;for(a=e.length>3&&"function"==typeof a?(i--,a):o,s&&Ko(n[0],n[1],s)&&(a=i<3?o:a,i=1),t=tt(t);++r<i;){var u=n[r];u&&e(t,u,r,a)}return t})}function ao(e,t){return function(n,r){if(null==n)return n;if(!_s(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=tt(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function so(e){return function(t,n,r){for(var i=-1,o=tt(t),a=r(t),s=a.length;s--;){var u=a[e?s:++i];if(!1===n(o[u],u,o))break}return t}}function uo(e){return function(t){var n=Cn(t=Vs(t))?Nn(t):o,r=n?n[0]:t.charAt(0),i=n?Gi(n,1).join(""):t.slice(1);return r[e]()+i}}function co(e){return function(t){return tn(xu(gu(t).replace(yt,"")),e,"")}}function lo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=hr(e.prototype),r=e.apply(n,t);return Ss(r)?r:n}}function fo(e){return function(t,n,r){var i=tt(t);if(!_s(t)){var a=Ro(n,3);t=iu(t),n=function(e){return a(i[e],e,i)}}var s=e(t,n,r);return s>-1?i[a?t[s]:s]:o}}function po(e){return Io(function(t){var n=t.length,r=n,i=gr.prototype.thru;for(e&&t.reverse();r--;){var a=t[r];if("function"!=typeof a)throw new it(u);if(i&&!s&&"wrapper"==jo(a))var s=new gr([],!0)}for(r=s?r:n;++r<n;){var c=jo(a=t[r]),l="wrapper"==c?Lo(a):o;s=l&&Xo(l[0])&&l[1]==(x|b|T|C)&&!l[4].length&&1==l[9]?s[jo(l[0])].apply(s,l[3]):1==a.length&&Xo(a)?s[c]():s.thru(a)}return function(){var e=arguments,r=e[0];if(s&&1==e.length&&ms(r))return s.plant(r).value();for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o);return o}})}function ho(e,t,n,i,a,s,u,c,l,f){var p=t&x,d=t&m,h=t&y,v=t&(b|w),g=t&A,_=h?o:lo(e);return function m(){for(var y=arguments.length,b=r(y),w=y;w--;)b[w]=arguments[w];if(v)var T=Po(m),E=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(b,T);if(i&&(b=eo(b,i,a,v)),s&&(b=to(b,s,u,v)),y-=E,v&&y<f){var x=On(b,T);return wo(e,t,ho,m.placeholder,n,b,x,c,l,f-y)}var C=d?n:this,A=h?C[e]:e;return y=b.length,c?b=function(e,t){for(var n=e.length,r=zn(t.length,n),i=no(e);r--;){var a=t[r];e[r]=zo(a,n)?i[a]:o}return e}(b,c):g&&y>1&&b.reverse(),p&&l<y&&(b.length=l),this&&this!==Lt&&this instanceof m&&(A=_||lo(A)),A.apply(C,b)}}function vo(e,t){return function(n,r){return function(e,t,n,r){return Kr(e,function(e,i,o){t(r,n(e),i,o)}),r}(n,e,t(r),{})}}function go(e,t){return function(n,r){var i;if(n===o&&r===o)return t;if(n!==o&&(i=n),r!==o){if(i===o)return r;"string"==typeof n||"string"==typeof r?(n=Ri(n),r=Ri(r)):(n=Pi(n),r=Pi(r)),i=e(n,r)}return i}}function mo(e){return Io(function(t){return t=Zt(t,mn(Ro())),Ei(function(n){var r=this;return e(t,function(e){return Vt(e,r,n)})})})}function yo(e,t){var n=(t=t===o?" ":Ri(t)).length;if(n<2)return n?Ti(t,e):t;var r=Ti(t,Hn(e/kn(t)));return Cn(t)?Gi(Nn(r),0,e).join(""):r.slice(0,e)}function _o(e){return function(t,n,i){return i&&"number"!=typeof i&&Ko(t,n,i)&&(n=i=o),t=Fs(t),n===o?(n=t,t=0):n=Fs(n),function(e,t,n,i){for(var o=-1,a=Vn(Hn((t-e)/(n||1)),0),s=r(a);a--;)s[i?a:++o]=e,e+=n;return s}(t,n,i=i===o?t<n?1:-1:Fs(i),e)}}function bo(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=Bs(t),n=Bs(n)),e(t,n)}}function wo(e,t,n,r,i,a,s,u,c,l){var f=t&b;t|=f?T:E,(t&=~(f?E:T))&_||(t&=~(m|y));var p=[e,t,i,f?a:o,f?s:o,f?o:a,f?o:s,u,c,l],d=n.apply(o,p);return Xo(e)&&ra(d,p),d.placeholder=r,aa(d,e,t)}function To(e){var t=et[e];return function(e,n){if(e=Bs(e),n=null==n?0:zn(Ws(n),292)){var r=(Vs(e)+"e").split("e");return+((r=(Vs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Eo=er&&1/Dn(new er([,-0]))[1]==L?function(e){return new er(e)}:Pu;function xo(e){return function(t){var n=qo(t);return n==Q?An(t):n==ne?In(t):function(e,t){return Zt(t,function(t){return[t,e[t]]})}(t,e(t))}}function Co(e,t,n,i,a,s,c,l){var p=t&y;if(!p&&"function"!=typeof e)throw new it(u);var d=i?i.length:0;if(d||(t&=~(T|E),i=a=o),c=c===o?c:Vn(Ws(c),0),l=l===o?l:Ws(l),d-=a?a.length:0,t&E){var h=i,v=a;i=a=o}var g=p?o:Lo(e),A=[e,t,n,i,a,h,v,s,c,l];if(g&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<(m|y|x),a=r==x&&n==b||r==x&&n==C&&e[7].length<=t[8]||r==(x|C)&&t[7].length<=t[8]&&n==b;if(!o&&!a)return e;r&m&&(e[2]=t[2],i|=n&m?0:_);var s=t[3];if(s){var u=e[3];e[3]=u?eo(u,s,t[4]):s,e[4]=u?On(e[3],f):t[4]}(s=t[5])&&(u=e[5],e[5]=u?to(u,s,t[6]):s,e[6]=u?On(e[5],f):t[6]),(s=t[7])&&(e[7]=s),r&x&&(e[8]=null==e[8]?t[8]:zn(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(A,g),e=A[0],t=A[1],n=A[2],i=A[3],a=A[4],!(l=A[9]=A[9]===o?p?0:e.length:Vn(A[9]-d,0))&&t&(b|w)&&(t&=~(b|w)),t&&t!=m)S=t==b||t==w?function(e,t,n){var i=lo(e);return function a(){for(var s=arguments.length,u=r(s),c=s,l=Po(a);c--;)u[c]=arguments[c];var f=s<3&&u[0]!==l&&u[s-1]!==l?[]:On(u,l);return(s-=f.length)<n?wo(e,t,ho,a.placeholder,o,u,f,o,o,n-s):Vt(this&&this!==Lt&&this instanceof a?i:e,this,u)}}(e,t,l):t!=T&&t!=(m|T)||a.length?ho.apply(o,A):function(e,t,n,i){var o=t&m,a=lo(e);return function t(){for(var s=-1,u=arguments.length,c=-1,l=i.length,f=r(l+u),p=this&&this!==Lt&&this instanceof t?a:e;++c<l;)f[c]=i[c];for(;u--;)f[c++]=arguments[++s];return Vt(p,o?n:this,f)}}(e,t,n,i);else var S=function(e,t,n){var r=t&m,i=lo(e);return function t(){return(this&&this!==Lt&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,n);return aa((g?Si:ra)(S,A),e,t)}function Ao(e,t,n,r){return e===o||ds(e,st[n])&&!lt.call(r,n)?t:e}function So(e,t,n,r,i,a){return Ss(e)&&Ss(t)&&(a.set(t,e),vi(e,t,o,So,a),a.delete(t)),e}function Oo(e){return ks(e)?o:e}function Do(e,t,n,r,i,a){var s=n&v,u=e.length,c=t.length;if(u!=c&&!(s&&c>u))return!1;var l=a.get(e);if(l&&a.get(t))return l==t;var f=-1,p=!0,d=n&g?new wr:o;for(a.set(e,t),a.set(t,e);++f<u;){var h=e[f],m=t[f];if(r)var y=s?r(m,h,f,t,e,a):r(h,m,f,e,t,a);if(y!==o){if(y)continue;p=!1;break}if(d){if(!rn(t,function(e,t){if(!_n(d,t)&&(h===e||i(h,e,n,r,a)))return d.push(t)})){p=!1;break}}else if(h!==m&&!i(h,m,n,r,a)){p=!1;break}}return a.delete(e),a.delete(t),p}function Io(e){return oa(ea(e,o,ya),e+"")}function ko(e){return Yr(e,iu,Fo)}function No(e){return Yr(e,ou,Wo)}var Lo=rr?function(e){return rr.get(e)}:Pu;function jo(e){for(var t=e.name+"",n=ir[t],r=lt.call(ir,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function Po(e){return(lt.call(dr,"placeholder")?dr:e).placeholder}function Ro(){var e=dr.iteratee||ku;return e=e===ku?ui:e,arguments.length?e(arguments[0],arguments[1]):e}function $o(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function Ho(e){for(var t=iu(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Jo(i)]}return t}function Mo(e,t){var n=function(e,t){return null==e?o:e[t]}(e,t);return si(n)?n:o}var Fo=Fn?function(e){return null==e?[]:(e=tt(e),Qt(Fn(e),function(t){return jt.call(e,t)}))}:qu,Wo=Fn?function(e){for(var t=[];e;)en(t,Fo(e)),e=kt(e);return t}:qu,qo=Jr;function Bo(e,t,n){for(var r=-1,i=(t=zi(t,e)).length,o=!1;++r<i;){var a=la(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&As(i)&&zo(a,i)&&(ms(e)||gs(e))}function Uo(e){return"function"!=typeof e.constructor||Yo(e)?{}:hr(kt(e))}function Vo(e){return ms(e)||gs(e)||!!($t&&e&&e[$t])}function zo(e,t){var n=typeof e;return!!(t=null==t?j:t)&&("number"==n||"symbol"!=n&&Ge.test(e))&&e>-1&&e%1==0&&e<t}function Ko(e,t,n){if(!Ss(n))return!1;var r=typeof t;return!!("number"==r?_s(n)&&zo(t,n.length):"string"==r&&t in n)&&ds(n[t],e)}function Go(e,t){if(ms(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ps(e))||Ie.test(e)||!De.test(e)||null!=t&&e in tt(t)}function Xo(e){var t=jo(e),n=dr[t];if("function"!=typeof n||!(t in mr.prototype))return!1;if(e===n)return!0;var r=Lo(n);return!!r&&e===r[0]}(Yn&&qo(new Yn(new ArrayBuffer(1)))!=ce||Jn&&qo(new Jn)!=Q||Zn&&"[object Promise]"!=qo(Zn.resolve())||er&&qo(new er)!=ne||tr&&qo(new tr)!=ae)&&(qo=function(e){var t=Jr(e),n=t==Z?e.constructor:o,r=n?fa(n):"";if(r)switch(r){case or:return ce;case ar:return Q;case sr:return"[object Promise]";case ur:return ne;case cr:return ae}return t});var Qo=ut?xs:Bu;function Yo(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||st)}function Jo(e){return e==e&&!Ss(e)}function Zo(e,t){return function(n){return null!=n&&n[e]===t&&(t!==o||e in tt(n))}}function ea(e,t,n){return t=Vn(t===o?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=Vn(i.length-t,0),s=r(a);++o<a;)s[o]=i[t+o];o=-1;for(var u=r(t+1);++o<t;)u[o]=i[o];return u[t]=n(s),Vt(e,this,u)}}function ta(e,t){return t.length<2?e:Qr(e,Ii(t,0,-1))}function na(e,t){if("__proto__"!=t)return e[t]}var ra=sa(Si),ia=$n||function(e,t){return Lt.setTimeout(e,t)},oa=sa(Oi);function aa(e,t,n){var r=t+"";return oa(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace($e,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Kt(F,function(n){var r="_."+n[0];t&n[1]&&!Yt(e,r)&&e.push(r)}),e.sort()}(function(e){var t=e.match(He);return t?t[1].split(Me):[]}(r),n)))}function sa(e){var t=0,n=0;return function(){var r=Kn(),i=I-(r-n);if(n=r,i>0){if(++t>=D)return arguments[0]}else t=0;return e.apply(o,arguments)}}function ua(e,t){var n=-1,r=e.length,i=r-1;for(t=t===o?r:t;++n<t;){var a=wi(n,i),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}var ca=function(e){var t=ss(e,function(e){return n.size===l&&n.clear(),e}),n=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ke,function(e,n,r,i){t.push(r?i.replace(We,"$1"):n||e)}),t});function la(e){if("string"==typeof e||Ps(e))return e;var t=e+"";return"0"==t&&1/e==-L?"-0":t}function fa(e){if(null!=e){try{return ct.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function pa(e){if(e instanceof mr)return e.clone();var t=new gr(e.__wrapped__,e.__chain__);return t.__actions__=no(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var da=Ei(function(e,t){return bs(e)?Hr(e,Ur(t,1,bs,!0)):[]}),ha=Ei(function(e,t){var n=Ea(t);return bs(n)&&(n=o),bs(e)?Hr(e,Ur(t,1,bs,!0),Ro(n,2)):[]}),va=Ei(function(e,t){var n=Ea(t);return bs(n)&&(n=o),bs(e)?Hr(e,Ur(t,1,bs,!0),o,n):[]});function ga(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Ws(n);return i<0&&(i=Vn(r+i,0)),sn(e,Ro(t,3),i)}function ma(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=r-1;return n!==o&&(i=Ws(n),i=n<0?Vn(r+i,0):zn(i,r-1)),sn(e,Ro(t,3),i,!0)}function ya(e){return null!=e&&e.length?Ur(e,1):[]}function _a(e){return e&&e.length?e[0]:o}var ba=Ei(function(e){var t=Zt(e,Ui);return t.length&&t[0]===e[0]?ni(t):[]}),wa=Ei(function(e){var t=Ea(e),n=Zt(e,Ui);return t===Ea(n)?t=o:n.pop(),n.length&&n[0]===e[0]?ni(n,Ro(t,2)):[]}),Ta=Ei(function(e){var t=Ea(e),n=Zt(e,Ui);return(t="function"==typeof t?t:o)&&n.pop(),n.length&&n[0]===e[0]?ni(n,o,t):[]});function Ea(e){var t=null==e?0:e.length;return t?e[t-1]:o}var xa=Ei(Ca);function Ca(e,t){return e&&e.length&&t&&t.length?_i(e,t):e}var Aa=Io(function(e,t){var n=null==e?0:e.length,r=Lr(e,t);return bi(e,Zt(t,function(e){return zo(e,n)?+e:e}).sort(Zi)),r});function Sa(e){return null==e?e:Qn.call(e)}var Oa=Ei(function(e){return $i(Ur(e,1,bs,!0))}),Da=Ei(function(e){var t=Ea(e);return bs(t)&&(t=o),$i(Ur(e,1,bs,!0),Ro(t,2))}),Ia=Ei(function(e){var t=Ea(e);return t="function"==typeof t?t:o,$i(Ur(e,1,bs,!0),o,t)});function ka(e){if(!e||!e.length)return[];var t=0;return e=Qt(e,function(e){if(bs(e))return t=Vn(e.length,t),!0}),gn(t,function(t){return Zt(e,pn(t))})}function Na(e,t){if(!e||!e.length)return[];var n=ka(e);return null==t?n:Zt(n,function(e){return Vt(t,o,e)})}var La=Ei(function(e,t){return bs(e)?Hr(e,t):[]}),ja=Ei(function(e){return qi(Qt(e,bs))}),Pa=Ei(function(e){var t=Ea(e);return bs(t)&&(t=o),qi(Qt(e,bs),Ro(t,2))}),Ra=Ei(function(e){var t=Ea(e);return t="function"==typeof t?t:o,qi(Qt(e,bs),o,t)}),$a=Ei(ka);var Ha=Ei(function(e){var t=e.length,n=t>1?e[t-1]:o;return n="function"==typeof n?(e.pop(),n):o,Na(e,n)});function Ma(e){var t=dr(e);return t.__chain__=!0,t}function Fa(e,t){return t(e)}var Wa=Io(function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,i=function(t){return Lr(t,e)};return!(t>1||this.__actions__.length)&&r instanceof mr&&zo(n)?((r=r.slice(n,+n+(t?1:0))).__actions__.push({func:Fa,args:[i],thisArg:o}),new gr(r,this.__chain__).thru(function(e){return t&&!e.length&&e.push(o),e})):this.thru(i)});var qa=io(function(e,t,n){lt.call(e,n)?++e[n]:Nr(e,n,1)});var Ba=fo(ga),Ua=fo(ma);function Va(e,t){return(ms(e)?Kt:Mr)(e,Ro(t,3))}function za(e,t){return(ms(e)?Gt:Fr)(e,Ro(t,3))}var Ka=io(function(e,t,n){lt.call(e,n)?e[n].push(t):Nr(e,n,[t])});var Ga=Ei(function(e,t,n){var i=-1,o="function"==typeof t,a=_s(e)?r(e.length):[];return Mr(e,function(e){a[++i]=o?Vt(t,e,n):ri(e,t,n)}),a}),Xa=io(function(e,t,n){Nr(e,n,t)});function Qa(e,t){return(ms(e)?Zt:pi)(e,Ro(t,3))}var Ya=io(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});var Ja=Ei(function(e,t){if(null==e)return[];var n=t.length;return n>1&&Ko(e,t[0],t[1])?t=[]:n>2&&Ko(t[0],t[1],t[2])&&(t=[t[0]]),mi(e,Ur(t,1),[])}),Za=Rn||function(){return Lt.Date.now()};function es(e,t,n){return t=n?o:t,t=e&&null==t?e.length:t,Co(e,x,o,o,o,o,t)}function ts(e,t){var n;if("function"!=typeof t)throw new it(u);return e=Ws(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=o),n}}var ns=Ei(function(e,t,n){var r=m;if(n.length){var i=On(n,Po(ns));r|=T}return Co(e,r,t,n,i)}),rs=Ei(function(e,t,n){var r=m|y;if(n.length){var i=On(n,Po(rs));r|=T}return Co(t,r,e,n,i)});function is(e,t,n){var r,i,a,s,c,l,f=0,p=!1,d=!1,h=!0;if("function"!=typeof e)throw new it(u);function v(t){var n=r,a=i;return r=i=o,f=t,s=e.apply(a,n)}function g(e){var n=e-l;return l===o||n>=t||n<0||d&&e-f>=a}function m(){var e=Za();if(g(e))return y(e);c=ia(m,function(e){var n=t-(e-l);return d?zn(n,a-(e-f)):n}(e))}function y(e){return c=o,h&&r?v(e):(r=i=o,s)}function _(){var e=Za(),n=g(e);if(r=arguments,i=this,l=e,n){if(c===o)return function(e){return f=e,c=ia(m,t),p?v(e):s}(l);if(d)return c=ia(m,t),v(l)}return c===o&&(c=ia(m,t)),s}return t=Bs(t)||0,Ss(n)&&(p=!!n.leading,a=(d="maxWait"in n)?Vn(Bs(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),_.cancel=function(){c!==o&&Xi(c),f=0,r=l=i=c=o},_.flush=function(){return c===o?s:y(Za())},_}var os=Ei(function(e,t){return $r(e,1,t)}),as=Ei(function(e,t,n){return $r(e,Bs(t)||0,n)});function ss(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new it(u);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ss.Cache||br),n}function us(e){if("function"!=typeof e)throw new it(u);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}ss.Cache=br;var cs=Ki(function(e,t){var n=(t=1==t.length&&ms(t[0])?Zt(t[0],mn(Ro())):Zt(Ur(t,1),mn(Ro()))).length;return Ei(function(r){for(var i=-1,o=zn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return Vt(e,this,r)})}),ls=Ei(function(e,t){var n=On(t,Po(ls));return Co(e,T,o,t,n)}),fs=Ei(function(e,t){var n=On(t,Po(fs));return Co(e,E,o,t,n)}),ps=Io(function(e,t){return Co(e,C,o,o,o,t)});function ds(e,t){return e===t||e!=e&&t!=t}var hs=bo(Zr),vs=bo(function(e,t){return e>=t}),gs=ii(function(){return arguments}())?ii:function(e){return Os(e)&&lt.call(e,"callee")&&!jt.call(e,"callee")},ms=r.isArray,ys=Mt?mn(Mt):function(e){return Os(e)&&Jr(e)==ue};function _s(e){return null!=e&&As(e.length)&&!xs(e)}function bs(e){return Os(e)&&_s(e)}var ws=Wn||Bu,Ts=Ft?mn(Ft):function(e){return Os(e)&&Jr(e)==V};function Es(e){if(!Os(e))return!1;var t=Jr(e);return t==K||t==z||"string"==typeof e.message&&"string"==typeof e.name&&!ks(e)}function xs(e){if(!Ss(e))return!1;var t=Jr(e);return t==G||t==X||t==B||t==ee}function Cs(e){return"number"==typeof e&&e==Ws(e)}function As(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=j}function Ss(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Os(e){return null!=e&&"object"==typeof e}var Ds=Wt?mn(Wt):function(e){return Os(e)&&qo(e)==Q};function Is(e){return"number"==typeof e||Os(e)&&Jr(e)==Y}function ks(e){if(!Os(e)||Jr(e)!=Z)return!1;var t=kt(e);if(null===t)return!0;var n=lt.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&ct.call(n)==ht}var Ns=qt?mn(qt):function(e){return Os(e)&&Jr(e)==te};var Ls=Bt?mn(Bt):function(e){return Os(e)&&qo(e)==ne};function js(e){return"string"==typeof e||!ms(e)&&Os(e)&&Jr(e)==re}function Ps(e){return"symbol"==typeof e||Os(e)&&Jr(e)==ie}var Rs=Ut?mn(Ut):function(e){return Os(e)&&As(e.length)&&!!At[Jr(e)]};var $s=bo(fi),Hs=bo(function(e,t){return e<=t});function Ms(e){if(!e)return[];if(_s(e))return js(e)?Nn(e):no(e);if(Ht&&e[Ht])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Ht]());var t=qo(e);return(t==Q?An:t==ne?Dn:du)(e)}function Fs(e){return e?(e=Bs(e))===L||e===-L?(e<0?-1:1)*P:e==e?e:0:0===e?e:0}function Ws(e){var t=Fs(e),n=t%1;return t==t?n?t-n:t:0}function qs(e){return e?jr(Ws(e),0,$):0}function Bs(e){if("number"==typeof e)return e;if(Ps(e))return R;if(Ss(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ss(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(je,"");var n=Ve.test(e);return n||Ke.test(e)?It(e.slice(2),n?2:8):Ue.test(e)?R:+e}function Us(e){return ro(e,ou(e))}function Vs(e){return null==e?"":Ri(e)}var zs=oo(function(e,t){if(Yo(t)||_s(t))ro(t,iu(t),e);else for(var n in t)lt.call(t,n)&&Or(e,n,t[n])}),Ks=oo(function(e,t){ro(t,ou(t),e)}),Gs=oo(function(e,t,n,r){ro(t,ou(t),e,r)}),Xs=oo(function(e,t,n,r){ro(t,iu(t),e,r)}),Qs=Io(Lr);var Ys=Ei(function(e,t){e=tt(e);var n=-1,r=t.length,i=r>2?t[2]:o;for(i&&Ko(t[0],t[1],i)&&(r=1);++n<r;)for(var a=t[n],s=ou(a),u=-1,c=s.length;++u<c;){var l=s[u],f=e[l];(f===o||ds(f,st[l])&&!lt.call(e,l))&&(e[l]=a[l])}return e}),Js=Ei(function(e){return e.push(o,So),Vt(su,o,e)});function Zs(e,t,n){var r=null==e?o:Qr(e,t);return r===o?n:r}function eu(e,t){return null!=e&&Bo(e,t,ti)}var tu=vo(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=dt.call(t)),e[t]=n},Su(Iu)),nu=vo(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=dt.call(t)),lt.call(e,t)?e[t].push(n):e[t]=[n]},Ro),ru=Ei(ri);function iu(e){return _s(e)?Er(e):ci(e)}function ou(e){return _s(e)?Er(e,!0):li(e)}var au=oo(function(e,t,n){vi(e,t,n)}),su=oo(function(e,t,n,r){vi(e,t,n,r)}),uu=Io(function(e,t){var n={};if(null==e)return n;var r=!1;t=Zt(t,function(t){return t=zi(t,e),r||(r=t.length>1),t}),ro(e,No(e),n),r&&(n=Pr(n,p|d|h,Oo));for(var i=t.length;i--;)Hi(n,t[i]);return n});var cu=Io(function(e,t){return null==e?{}:function(e,t){return yi(e,t,function(t,n){return eu(e,n)})}(e,t)});function lu(e,t){if(null==e)return{};var n=Zt(No(e),function(e){return[e]});return t=Ro(t),yi(e,n,function(e,n){return t(e,n[0])})}var fu=xo(iu),pu=xo(ou);function du(e){return null==e?[]:yn(e,iu(e))}var hu=co(function(e,t,n){return t=t.toLowerCase(),e+(n?vu(t):t)});function vu(e){return Eu(Vs(e).toLowerCase())}function gu(e){return(e=Vs(e))&&e.replace(Xe,Tn).replace(_t,"")}var mu=co(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),yu=co(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),_u=uo("toLowerCase");var bu=co(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()});var wu=co(function(e,t,n){return e+(n?" ":"")+Eu(t)});var Tu=co(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),Eu=uo("toUpperCase");function xu(e,t,n){return e=Vs(e),(t=n?o:t)===o?function(e){return Et.test(e)}(e)?function(e){return e.match(wt)||[]}(e):function(e){return e.match(Fe)||[]}(e):e.match(t)||[]}var Cu=Ei(function(e,t){try{return Vt(e,o,t)}catch(e){return Es(e)?e:new Je(e)}}),Au=Io(function(e,t){return Kt(t,function(t){t=la(t),Nr(e,t,ns(e[t],e))}),e});function Su(e){return function(){return e}}var Ou=po(),Du=po(!0);function Iu(e){return e}function ku(e){return ui("function"==typeof e?e:Pr(e,p))}var Nu=Ei(function(e,t){return function(n){return ri(n,e,t)}}),Lu=Ei(function(e,t){return function(n){return ri(e,n,t)}});function ju(e,t,n){var r=iu(t),i=Xr(t,r);null!=n||Ss(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=Xr(t,iu(t)));var o=!(Ss(n)&&"chain"in n&&!n.chain),a=xs(e);return Kt(i,function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__);return(n.__actions__=no(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,en([this.value()],arguments))})}),e}function Pu(){}var Ru=mo(Zt),$u=mo(Xt),Hu=mo(rn);function Mu(e){return Go(e)?pn(la(e)):function(e){return function(t){return Qr(t,e)}}(e)}var Fu=_o(),Wu=_o(!0);function qu(){return[]}function Bu(){return!1}var Uu=go(function(e,t){return e+t},0),Vu=To("ceil"),zu=go(function(e,t){return e/t},1),Ku=To("floor");var Gu,Xu=go(function(e,t){return e*t},1),Qu=To("round"),Yu=go(function(e,t){return e-t},0);return dr.after=function(e,t){if("function"!=typeof t)throw new it(u);return e=Ws(e),function(){if(--e<1)return t.apply(this,arguments)}},dr.ary=es,dr.assign=zs,dr.assignIn=Ks,dr.assignInWith=Gs,dr.assignWith=Xs,dr.at=Qs,dr.before=ts,dr.bind=ns,dr.bindAll=Au,dr.bindKey=rs,dr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return ms(e)?e:[e]},dr.chain=Ma,dr.chunk=function(e,t,n){t=(n?Ko(e,t,n):t===o)?1:Vn(Ws(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var a=0,s=0,u=r(Hn(i/t));a<i;)u[s++]=Ii(e,a,a+=t);return u},dr.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},dr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=r(e-1),n=arguments[0],i=e;i--;)t[i-1]=arguments[i];return en(ms(n)?no(n):[n],Ur(t,1))},dr.cond=function(e){var t=null==e?0:e.length,n=Ro();return e=t?Zt(e,function(e){if("function"!=typeof e[1])throw new it(u);return[n(e[0]),e[1]]}):[],Ei(function(n){for(var r=-1;++r<t;){var i=e[r];if(Vt(i[0],this,n))return Vt(i[1],this,n)}})},dr.conforms=function(e){return function(e){var t=iu(e);return function(n){return Rr(n,e,t)}}(Pr(e,p))},dr.constant=Su,dr.countBy=qa,dr.create=function(e,t){var n=hr(e);return null==t?n:kr(n,t)},dr.curry=function e(t,n,r){var i=Co(t,b,o,o,o,o,o,n=r?o:n);return i.placeholder=e.placeholder,i},dr.curryRight=function e(t,n,r){var i=Co(t,w,o,o,o,o,o,n=r?o:n);return i.placeholder=e.placeholder,i},dr.debounce=is,dr.defaults=Ys,dr.defaultsDeep=Js,dr.defer=os,dr.delay=as,dr.difference=da,dr.differenceBy=ha,dr.differenceWith=va,dr.drop=function(e,t,n){var r=null==e?0:e.length;return r?Ii(e,(t=n||t===o?1:Ws(t))<0?0:t,r):[]},dr.dropRight=function(e,t,n){var r=null==e?0:e.length;return r?Ii(e,0,(t=r-(t=n||t===o?1:Ws(t)))<0?0:t):[]},dr.dropRightWhile=function(e,t){return e&&e.length?Fi(e,Ro(t,3),!0,!0):[]},dr.dropWhile=function(e,t){return e&&e.length?Fi(e,Ro(t,3),!0):[]},dr.fill=function(e,t,n,r){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&Ko(e,t,n)&&(n=0,r=i),function(e,t,n,r){var i=e.length;for((n=Ws(n))<0&&(n=-n>i?0:i+n),(r=r===o||r>i?i:Ws(r))<0&&(r+=i),r=n>r?0:qs(r);n<r;)e[n++]=t;return e}(e,t,n,r)):[]},dr.filter=function(e,t){return(ms(e)?Qt:Br)(e,Ro(t,3))},dr.flatMap=function(e,t){return Ur(Qa(e,t),1)},dr.flatMapDeep=function(e,t){return Ur(Qa(e,t),L)},dr.flatMapDepth=function(e,t,n){return n=n===o?1:Ws(n),Ur(Qa(e,t),n)},dr.flatten=ya,dr.flattenDeep=function(e){return null!=e&&e.length?Ur(e,L):[]},dr.flattenDepth=function(e,t){return null!=e&&e.length?Ur(e,t=t===o?1:Ws(t)):[]},dr.flip=function(e){return Co(e,A)},dr.flow=Ou,dr.flowRight=Du,dr.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},dr.functions=function(e){return null==e?[]:Xr(e,iu(e))},dr.functionsIn=function(e){return null==e?[]:Xr(e,ou(e))},dr.groupBy=Ka,dr.initial=function(e){return null!=e&&e.length?Ii(e,0,-1):[]},dr.intersection=ba,dr.intersectionBy=wa,dr.intersectionWith=Ta,dr.invert=tu,dr.invertBy=nu,dr.invokeMap=Ga,dr.iteratee=ku,dr.keyBy=Xa,dr.keys=iu,dr.keysIn=ou,dr.map=Qa,dr.mapKeys=function(e,t){var n={};return t=Ro(t,3),Kr(e,function(e,r,i){Nr(n,t(e,r,i),e)}),n},dr.mapValues=function(e,t){var n={};return t=Ro(t,3),Kr(e,function(e,r,i){Nr(n,r,t(e,r,i))}),n},dr.matches=function(e){return di(Pr(e,p))},dr.matchesProperty=function(e,t){return hi(e,Pr(t,p))},dr.memoize=ss,dr.merge=au,dr.mergeWith=su,dr.method=Nu,dr.methodOf=Lu,dr.mixin=ju,dr.negate=us,dr.nthArg=function(e){return e=Ws(e),Ei(function(t){return gi(t,e)})},dr.omit=uu,dr.omitBy=function(e,t){return lu(e,us(Ro(t)))},dr.once=function(e){return ts(2,e)},dr.orderBy=function(e,t,n,r){return null==e?[]:(ms(t)||(t=null==t?[]:[t]),ms(n=r?o:n)||(n=null==n?[]:[n]),mi(e,t,n))},dr.over=Ru,dr.overArgs=cs,dr.overEvery=$u,dr.overSome=Hu,dr.partial=ls,dr.partialRight=fs,dr.partition=Ya,dr.pick=cu,dr.pickBy=lu,dr.property=Mu,dr.propertyOf=function(e){return function(t){return null==e?o:Qr(e,t)}},dr.pull=xa,dr.pullAll=Ca,dr.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?_i(e,t,Ro(n,2)):e},dr.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?_i(e,t,o,n):e},dr.pullAt=Aa,dr.range=Fu,dr.rangeRight=Wu,dr.rearg=ps,dr.reject=function(e,t){return(ms(e)?Qt:Br)(e,us(Ro(t,3)))},dr.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=Ro(t,3);++r<o;){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return bi(e,i),n},dr.rest=function(e,t){if("function"!=typeof e)throw new it(u);return Ei(e,t=t===o?t:Ws(t))},dr.reverse=Sa,dr.sampleSize=function(e,t,n){return t=(n?Ko(e,t,n):t===o)?1:Ws(t),(ms(e)?Cr:Ci)(e,t)},dr.set=function(e,t,n){return null==e?e:Ai(e,t,n)},dr.setWith=function(e,t,n,r){return r="function"==typeof r?r:o,null==e?e:Ai(e,t,n,r)},dr.shuffle=function(e){return(ms(e)?Ar:Di)(e)},dr.slice=function(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&Ko(e,t,n)?(t=0,n=r):(t=null==t?0:Ws(t),n=n===o?r:Ws(n)),Ii(e,t,n)):[]},dr.sortBy=Ja,dr.sortedUniq=function(e){return e&&e.length?ji(e):[]},dr.sortedUniqBy=function(e,t){return e&&e.length?ji(e,Ro(t,2)):[]},dr.split=function(e,t,n){return n&&"number"!=typeof n&&Ko(e,t,n)&&(t=n=o),(n=n===o?$:n>>>0)?(e=Vs(e))&&("string"==typeof t||null!=t&&!Ns(t))&&!(t=Ri(t))&&Cn(e)?Gi(Nn(e),0,n):e.split(t,n):[]},dr.spread=function(e,t){if("function"!=typeof e)throw new it(u);return t=null==t?0:Vn(Ws(t),0),Ei(function(n){var r=n[t],i=Gi(n,0,t);return r&&en(i,r),Vt(e,this,i)})},dr.tail=function(e){var t=null==e?0:e.length;return t?Ii(e,1,t):[]},dr.take=function(e,t,n){return e&&e.length?Ii(e,0,(t=n||t===o?1:Ws(t))<0?0:t):[]},dr.takeRight=function(e,t,n){var r=null==e?0:e.length;return r?Ii(e,(t=r-(t=n||t===o?1:Ws(t)))<0?0:t,r):[]},dr.takeRightWhile=function(e,t){return e&&e.length?Fi(e,Ro(t,3),!1,!0):[]},dr.takeWhile=function(e,t){return e&&e.length?Fi(e,Ro(t,3)):[]},dr.tap=function(e,t){return t(e),e},dr.throttle=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new it(u);return Ss(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),is(e,t,{leading:r,maxWait:t,trailing:i})},dr.thru=Fa,dr.toArray=Ms,dr.toPairs=fu,dr.toPairsIn=pu,dr.toPath=function(e){return ms(e)?Zt(e,la):Ps(e)?[e]:no(ca(Vs(e)))},dr.toPlainObject=Us,dr.transform=function(e,t,n){var r=ms(e),i=r||ws(e)||Rs(e);if(t=Ro(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:Ss(e)&&xs(o)?hr(kt(e)):{}}return(i?Kt:Kr)(e,function(e,r,i){return t(n,e,r,i)}),n},dr.unary=function(e){return es(e,1)},dr.union=Oa,dr.unionBy=Da,dr.unionWith=Ia,dr.uniq=function(e){return e&&e.length?$i(e):[]},dr.uniqBy=function(e,t){return e&&e.length?$i(e,Ro(t,2)):[]},dr.uniqWith=function(e,t){return t="function"==typeof t?t:o,e&&e.length?$i(e,o,t):[]},dr.unset=function(e,t){return null==e||Hi(e,t)},dr.unzip=ka,dr.unzipWith=Na,dr.update=function(e,t,n){return null==e?e:Mi(e,t,Vi(n))},dr.updateWith=function(e,t,n,r){return r="function"==typeof r?r:o,null==e?e:Mi(e,t,Vi(n),r)},dr.values=du,dr.valuesIn=function(e){return null==e?[]:yn(e,ou(e))},dr.without=La,dr.words=xu,dr.wrap=function(e,t){return ls(Vi(t),e)},dr.xor=ja,dr.xorBy=Pa,dr.xorWith=Ra,dr.zip=$a,dr.zipObject=function(e,t){return Bi(e||[],t||[],Or)},dr.zipObjectDeep=function(e,t){return Bi(e||[],t||[],Ai)},dr.zipWith=Ha,dr.entries=fu,dr.entriesIn=pu,dr.extend=Ks,dr.extendWith=Gs,ju(dr,dr),dr.add=Uu,dr.attempt=Cu,dr.camelCase=hu,dr.capitalize=vu,dr.ceil=Vu,dr.clamp=function(e,t,n){return n===o&&(n=t,t=o),n!==o&&(n=(n=Bs(n))==n?n:0),t!==o&&(t=(t=Bs(t))==t?t:0),jr(Bs(e),t,n)},dr.clone=function(e){return Pr(e,h)},dr.cloneDeep=function(e){return Pr(e,p|h)},dr.cloneDeepWith=function(e,t){return Pr(e,p|h,t="function"==typeof t?t:o)},dr.cloneWith=function(e,t){return Pr(e,h,t="function"==typeof t?t:o)},dr.conformsTo=function(e,t){return null==t||Rr(e,t,iu(t))},dr.deburr=gu,dr.defaultTo=function(e,t){return null==e||e!=e?t:e},dr.divide=zu,dr.endsWith=function(e,t,n){e=Vs(e),t=Ri(t);var r=e.length,i=n=n===o?r:jr(Ws(n),0,r);return(n-=t.length)>=0&&e.slice(n,i)==t},dr.eq=ds,dr.escape=function(e){return(e=Vs(e))&&Ce.test(e)?e.replace(Ee,En):e},dr.escapeRegExp=function(e){return(e=Vs(e))&&Le.test(e)?e.replace(Ne,"\\$&"):e},dr.every=function(e,t,n){var r=ms(e)?Xt:Wr;return n&&Ko(e,t,n)&&(t=o),r(e,Ro(t,3))},dr.find=Ba,dr.findIndex=ga,dr.findKey=function(e,t){return an(e,Ro(t,3),Kr)},dr.findLast=Ua,dr.findLastIndex=ma,dr.findLastKey=function(e,t){return an(e,Ro(t,3),Gr)},dr.floor=Ku,dr.forEach=Va,dr.forEachRight=za,dr.forIn=function(e,t){return null==e?e:Vr(e,Ro(t,3),ou)},dr.forInRight=function(e,t){return null==e?e:zr(e,Ro(t,3),ou)},dr.forOwn=function(e,t){return e&&Kr(e,Ro(t,3))},dr.forOwnRight=function(e,t){return e&&Gr(e,Ro(t,3))},dr.get=Zs,dr.gt=hs,dr.gte=vs,dr.has=function(e,t){return null!=e&&Bo(e,t,ei)},dr.hasIn=eu,dr.head=_a,dr.identity=Iu,dr.includes=function(e,t,n,r){e=_s(e)?e:du(e),n=n&&!r?Ws(n):0;var i=e.length;return n<0&&(n=Vn(i+n,0)),js(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&un(e,t,n)>-1},dr.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Ws(n);return i<0&&(i=Vn(r+i,0)),un(e,t,i)},dr.inRange=function(e,t,n){return t=Fs(t),n===o?(n=t,t=0):n=Fs(n),function(e,t,n){return e>=zn(t,n)&&e<Vn(t,n)}(e=Bs(e),t,n)},dr.invoke=ru,dr.isArguments=gs,dr.isArray=ms,dr.isArrayBuffer=ys,dr.isArrayLike=_s,dr.isArrayLikeObject=bs,dr.isBoolean=function(e){return!0===e||!1===e||Os(e)&&Jr(e)==U},dr.isBuffer=ws,dr.isDate=Ts,dr.isElement=function(e){return Os(e)&&1===e.nodeType&&!ks(e)},dr.isEmpty=function(e){if(null==e)return!0;if(_s(e)&&(ms(e)||"string"==typeof e||"function"==typeof e.splice||ws(e)||Rs(e)||gs(e)))return!e.length;var t=qo(e);if(t==Q||t==ne)return!e.size;if(Yo(e))return!ci(e).length;for(var n in e)if(lt.call(e,n))return!1;return!0},dr.isEqual=function(e,t){return oi(e,t)},dr.isEqualWith=function(e,t,n){var r=(n="function"==typeof n?n:o)?n(e,t):o;return r===o?oi(e,t,o,n):!!r},dr.isError=Es,dr.isFinite=function(e){return"number"==typeof e&&qn(e)},dr.isFunction=xs,dr.isInteger=Cs,dr.isLength=As,dr.isMap=Ds,dr.isMatch=function(e,t){return e===t||ai(e,t,Ho(t))},dr.isMatchWith=function(e,t,n){return n="function"==typeof n?n:o,ai(e,t,Ho(t),n)},dr.isNaN=function(e){return Is(e)&&e!=+e},dr.isNative=function(e){if(Qo(e))throw new Je(s);return si(e)},dr.isNil=function(e){return null==e},dr.isNull=function(e){return null===e},dr.isNumber=Is,dr.isObject=Ss,dr.isObjectLike=Os,dr.isPlainObject=ks,dr.isRegExp=Ns,dr.isSafeInteger=function(e){return Cs(e)&&e>=-j&&e<=j},dr.isSet=Ls,dr.isString=js,dr.isSymbol=Ps,dr.isTypedArray=Rs,dr.isUndefined=function(e){return e===o},dr.isWeakMap=function(e){return Os(e)&&qo(e)==ae},dr.isWeakSet=function(e){return Os(e)&&Jr(e)==se},dr.join=function(e,t){return null==e?"":Bn.call(e,t)},dr.kebabCase=mu,dr.last=Ea,dr.lastIndexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=r;return n!==o&&(i=(i=Ws(n))<0?Vn(r+i,0):zn(i,r-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,i):sn(e,ln,i,!0)},dr.lowerCase=yu,dr.lowerFirst=_u,dr.lt=$s,dr.lte=Hs,dr.max=function(e){return e&&e.length?qr(e,Iu,Zr):o},dr.maxBy=function(e,t){return e&&e.length?qr(e,Ro(t,2),Zr):o},dr.mean=function(e){return fn(e,Iu)},dr.meanBy=function(e,t){return fn(e,Ro(t,2))},dr.min=function(e){return e&&e.length?qr(e,Iu,fi):o},dr.minBy=function(e,t){return e&&e.length?qr(e,Ro(t,2),fi):o},dr.stubArray=qu,dr.stubFalse=Bu,dr.stubObject=function(){return{}},dr.stubString=function(){return""},dr.stubTrue=function(){return!0},dr.multiply=Xu,dr.nth=function(e,t){return e&&e.length?gi(e,Ws(t)):o},dr.noConflict=function(){return Lt._===this&&(Lt._=vt),this},dr.noop=Pu,dr.now=Za,dr.pad=function(e,t,n){e=Vs(e);var r=(t=Ws(t))?kn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return yo(Mn(i),n)+e+yo(Hn(i),n)},dr.padEnd=function(e,t,n){e=Vs(e);var r=(t=Ws(t))?kn(e):0;return t&&r<t?e+yo(t-r,n):e},dr.padStart=function(e,t,n){e=Vs(e);var r=(t=Ws(t))?kn(e):0;return t&&r<t?yo(t-r,n)+e:e},dr.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),Gn(Vs(e).replace(Pe,""),t||0)},dr.random=function(e,t,n){if(n&&"boolean"!=typeof n&&Ko(e,t,n)&&(t=n=o),n===o&&("boolean"==typeof t?(n=t,t=o):"boolean"==typeof e&&(n=e,e=o)),e===o&&t===o?(e=0,t=1):(e=Fs(e),t===o?(t=e,e=0):t=Fs(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var i=Xn();return zn(e+i*(t-e+Dt("1e-"+((i+"").length-1))),t)}return wi(e,t)},dr.reduce=function(e,t,n){var r=ms(e)?tn:hn,i=arguments.length<3;return r(e,Ro(t,4),n,i,Mr)},dr.reduceRight=function(e,t,n){var r=ms(e)?nn:hn,i=arguments.length<3;return r(e,Ro(t,4),n,i,Fr)},dr.repeat=function(e,t,n){return t=(n?Ko(e,t,n):t===o)?1:Ws(t),Ti(Vs(e),t)},dr.replace=function(){var e=arguments,t=Vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},dr.result=function(e,t,n){var r=-1,i=(t=zi(t,e)).length;for(i||(i=1,e=o);++r<i;){var a=null==e?o:e[la(t[r])];a===o&&(r=i,a=n),e=xs(a)?a.call(e):a}return e},dr.round=Qu,dr.runInContext=e,dr.sample=function(e){return(ms(e)?xr:xi)(e)},dr.size=function(e){if(null==e)return 0;if(_s(e))return js(e)?kn(e):e.length;var t=qo(e);return t==Q||t==ne?e.size:ci(e).length},dr.snakeCase=bu,dr.some=function(e,t,n){var r=ms(e)?rn:ki;return n&&Ko(e,t,n)&&(t=o),r(e,Ro(t,3))},dr.sortedIndex=function(e,t){return Ni(e,t)},dr.sortedIndexBy=function(e,t,n){return Li(e,t,Ro(n,2))},dr.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=Ni(e,t);if(r<n&&ds(e[r],t))return r}return-1},dr.sortedLastIndex=function(e,t){return Ni(e,t,!0)},dr.sortedLastIndexBy=function(e,t,n){return Li(e,t,Ro(n,2),!0)},dr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var n=Ni(e,t,!0)-1;if(ds(e[n],t))return n}return-1},dr.startCase=wu,dr.startsWith=function(e,t,n){return e=Vs(e),n=null==n?0:jr(Ws(n),0,e.length),t=Ri(t),e.slice(n,n+t.length)==t},dr.subtract=Yu,dr.sum=function(e){return e&&e.length?vn(e,Iu):0},dr.sumBy=function(e,t){return e&&e.length?vn(e,Ro(t,2)):0},dr.template=function(e,t,n){var r=dr.templateSettings;n&&Ko(e,t,n)&&(t=o),e=Vs(e),t=Gs({},t,r,Ao);var i,a,s=Gs({},t.imports,r.imports,Ao),u=iu(s),c=yn(s,u),l=0,f=t.interpolate||Qe,p="__p += '",d=nt((t.escape||Qe).source+"|"+f.source+"|"+(f===Oe?qe:Qe).source+"|"+(t.evaluate||Qe).source+"|$","g"),h="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++Ct+"]")+"\n";e.replace(d,function(t,n,r,o,s,u){return r||(r=o),p+=e.slice(l,u).replace(Ye,xn),n&&(i=!0,p+="' +\n__e("+n+") +\n'"),s&&(a=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=u+t.length,t}),p+="';\n";var v=t.variable;v||(p="with (obj) {\n"+p+"\n}\n"),p=(a?p.replace(_e,""):p).replace(be,"$1").replace(we,"$1;"),p="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=Cu(function(){return Ze(u,h+"return "+p).apply(o,c)});if(g.source=p,Es(g))throw g;return g},dr.times=function(e,t){if((e=Ws(e))<1||e>j)return[];var n=$,r=zn(e,$);t=Ro(t),e-=$;for(var i=gn(r,t);++n<e;)t(n);return i},dr.toFinite=Fs,dr.toInteger=Ws,dr.toLength=qs,dr.toLower=function(e){return Vs(e).toLowerCase()},dr.toNumber=Bs,dr.toSafeInteger=function(e){return e?jr(Ws(e),-j,j):0===e?e:0},dr.toString=Vs,dr.toUpper=function(e){return Vs(e).toUpperCase()},dr.trim=function(e,t,n){if((e=Vs(e))&&(n||t===o))return e.replace(je,"");if(!e||!(t=Ri(t)))return e;var r=Nn(e),i=Nn(t);return Gi(r,bn(r,i),wn(r,i)+1).join("")},dr.trimEnd=function(e,t,n){if((e=Vs(e))&&(n||t===o))return e.replace(Re,"");if(!e||!(t=Ri(t)))return e;var r=Nn(e);return Gi(r,0,wn(r,Nn(t))+1).join("")},dr.trimStart=function(e,t,n){if((e=Vs(e))&&(n||t===o))return e.replace(Pe,"");if(!e||!(t=Ri(t)))return e;var r=Nn(e);return Gi(r,bn(r,Nn(t))).join("")},dr.truncate=function(e,t){var n=S,r=O;if(Ss(t)){var i="separator"in t?t.separator:i;n="length"in t?Ws(t.length):n,r="omission"in t?Ri(t.omission):r}var a=(e=Vs(e)).length;if(Cn(e)){var s=Nn(e);a=s.length}if(n>=a)return e;var u=n-kn(r);if(u<1)return r;var c=s?Gi(s,0,u).join(""):e.slice(0,u);if(i===o)return c+r;if(s&&(u+=c.length-u),Ns(i)){if(e.slice(u).search(i)){var l,f=c;for(i.global||(i=nt(i.source,Vs(Be.exec(i))+"g")),i.lastIndex=0;l=i.exec(f);)var p=l.index;c=c.slice(0,p===o?u:p)}}else if(e.indexOf(Ri(i),u)!=u){var d=c.lastIndexOf(i);d>-1&&(c=c.slice(0,d))}return c+r},dr.unescape=function(e){return(e=Vs(e))&&xe.test(e)?e.replace(Te,Ln):e},dr.uniqueId=function(e){var t=++ft;return Vs(e)+t},dr.upperCase=Tu,dr.upperFirst=Eu,dr.each=Va,dr.eachRight=za,dr.first=_a,ju(dr,(Gu={},Kr(dr,function(e,t){lt.call(dr.prototype,t)||(Gu[t]=e)}),Gu),{chain:!1}),dr.VERSION="4.17.11",Kt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){dr[e].placeholder=dr}),Kt(["drop","take"],function(e,t){mr.prototype[e]=function(n){n=n===o?1:Vn(Ws(n),0);var r=this.__filtered__&&!t?new mr(this):this.clone();return r.__filtered__?r.__takeCount__=zn(n,r.__takeCount__):r.__views__.push({size:zn(n,$),type:e+(r.__dir__<0?"Right":"")}),r},mr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),Kt(["filter","map","takeWhile"],function(e,t){var n=t+1,r=n==k||3==n;mr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:Ro(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),Kt(["head","last"],function(e,t){var n="take"+(t?"Right":"");mr.prototype[e]=function(){return this[n](1).value()[0]}}),Kt(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");mr.prototype[e]=function(){return this.__filtered__?new mr(this):this[n](1)}}),mr.prototype.compact=function(){return this.filter(Iu)},mr.prototype.find=function(e){return this.filter(e).head()},mr.prototype.findLast=function(e){return this.reverse().find(e)},mr.prototype.invokeMap=Ei(function(e,t){return"function"==typeof e?new mr(this):this.map(function(n){return ri(n,e,t)})}),mr.prototype.reject=function(e){return this.filter(us(Ro(e)))},mr.prototype.slice=function(e,t){e=Ws(e);var n=this;return n.__filtered__&&(e>0||t<0)?new mr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==o&&(n=(t=Ws(t))<0?n.dropRight(-t):n.take(t-e)),n)},mr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},mr.prototype.toArray=function(){return this.take($)},Kr(mr.prototype,function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),i=dr[r?"take"+("last"==t?"Right":""):t],a=r||/^find/.test(t);i&&(dr.prototype[t]=function(){var t=this.__wrapped__,s=r?[1]:arguments,u=t instanceof mr,c=s[0],l=u||ms(t),f=function(e){var t=i.apply(dr,en([e],s));return r&&p?t[0]:t};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var p=this.__chain__,d=!!this.__actions__.length,h=a&&!p,v=u&&!d;if(!a&&l){t=v?t:new mr(this);var g=e.apply(t,s);return g.__actions__.push({func:Fa,args:[f],thisArg:o}),new gr(g,p)}return h&&v?e.apply(this,s):(g=this.thru(f),h?r?g.value()[0]:g.value():g)})}),Kt(["pop","push","shift","sort","splice","unshift"],function(e){var t=ot[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);dr.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(ms(i)?i:[],e)}return this[n](function(n){return t.apply(ms(n)?n:[],e)})}}),Kr(mr.prototype,function(e,t){var n=dr[t];if(n){var r=n.name+"";(ir[r]||(ir[r]=[])).push({name:t,func:n})}}),ir[ho(o,y).name]=[{name:"wrapper",func:o}],mr.prototype.clone=function(){var e=new mr(this.__wrapped__);return e.__actions__=no(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=no(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=no(this.__views__),e},mr.prototype.reverse=function(){if(this.__filtered__){var e=new mr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},mr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=ms(e),r=t<0,i=n?e.length:0,o=function(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=zn(t,e+a);break;case"takeRight":e=Vn(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,u=s-a,c=r?s:a-1,l=this.__iteratees__,f=l.length,p=0,d=zn(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return Wi(e,this.__actions__);var h=[];e:for(;u--&&p<d;){for(var v=-1,g=e[c+=t];++v<f;){var m=l[v],y=m.iteratee,_=m.type,b=y(g);if(_==N)g=b;else if(!b){if(_==k)continue e;break e}}h[p++]=g}return h},dr.prototype.at=Wa,dr.prototype.chain=function(){return Ma(this)},dr.prototype.commit=function(){return new gr(this.value(),this.__chain__)},dr.prototype.next=function(){this.__values__===o&&(this.__values__=Ms(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?o:this.__values__[this.__index__++]}},dr.prototype.plant=function(e){for(var t,n=this;n instanceof vr;){var r=pa(n);r.__index__=0,r.__values__=o,t?i.__wrapped__=r:t=r;var i=r;n=n.__wrapped__}return i.__wrapped__=e,t},dr.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof mr){var t=e;return this.__actions__.length&&(t=new mr(this)),(t=t.reverse()).__actions__.push({func:Fa,args:[Sa],thisArg:o}),new gr(t,this.__chain__)}return this.thru(Sa)},dr.prototype.toJSON=dr.prototype.valueOf=dr.prototype.value=function(){return Wi(this.__wrapped__,this.__actions__)},dr.prototype.first=dr.prototype.head,Ht&&(dr.prototype[Ht]=function(){return this}),dr}();Lt._=jn,(i=function(){return jn}.call(t,n,t,r))===o||(r.exports=i)}).call(this)}).call(this,n(1),n(15)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){!function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var s=function(e){var t="transitionend";function n(t){var n=this,i=!1;return e(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},t),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");t&&"#"!==t||(t=e.getAttribute("href")||"");try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),r=parseFloat(n);return r?(n=n.split(",")[0],1e3*parseFloat(n)):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(n){e(n).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],a=t[i],s=a&&r.isElement(a)?"element":(u=a,{}.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var u}};return e.fn.emulateTransitionEnd=n,e.event.special[r.TRANSITION_END]={bindType:t,delegateType:t,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},r}(t),u=function(e){var t=e.fn.alert,n={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},r={ALERT:"alert",FADE:"fade",SHOW:"show"},o=function(){function t(e){this._element=e}var o=t.prototype;return o.close=function(e){var t=this._element;e&&(t=this._getRootElement(e));var n=this._triggerCloseEvent(t);n.isDefaultPrevented()||this._removeElement(t)},o.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},o._getRootElement=function(t){var n=s.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest("."+r.ALERT)[0]),i},o._triggerCloseEvent=function(t){var r=e.Event(n.CLOSE);return e(t).trigger(r),r},o._removeElement=function(t){var n=this;if(e(t).removeClass(r.SHOW),e(t).hasClass(r.FADE)){var i=s.getTransitionDurationFromElement(t);e(t).one(s.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(i)}else this._destroyElement(t)},o._destroyElement=function(t){e(t).detach().trigger(n.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.alert");i||(i=new t(this),r.data("bs.alert",i)),"close"===n&&i[n](this)})},t._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),t}();return e(document).on(n.CLICK_DATA_API,'[data-dismiss="alert"]',o._handleDismiss(new o)),e.fn.alert=o._jQueryInterface,e.fn.alert.Constructor=o,e.fn.alert.noConflict=function(){return e.fn.alert=t,o._jQueryInterface},o}(t),c=function(e){var t="button",n=e.fn[t],r={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},o={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},a={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},s=function(){function t(e){this._element=e}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest(o.DATA_TOGGLE)[0];if(i){var a=this._element.querySelector(o.INPUT);if(a){if("radio"===a.type)if(a.checked&&this._element.classList.contains(r.ACTIVE))t=!1;else{var s=i.querySelector(o.ACTIVE);s&&e(s).removeClass(r.ACTIVE)}if(t){if(a.hasAttribute("disabled")||i.hasAttribute("disabled")||a.classList.contains("disabled")||i.classList.contains("disabled"))return;a.checked=!this._element.classList.contains(r.ACTIVE),e(a).trigger("change")}a.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(r.ACTIVE)),t&&e(this._element).toggleClass(r.ACTIVE)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var r=e(this).data("bs.button");r||(r=new t(this),e(this).data("bs.button",r)),"toggle"===n&&r[n]()})},i(t,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),t}();return e(document).on(a.CLICK_DATA_API,o.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var n=t.target;e(n).hasClass(r.BUTTON)||(n=e(n).closest(o.BUTTON)),s._jQueryInterface.call(e(n),"toggle")}).on(a.FOCUS_BLUR_DATA_API,o.DATA_TOGGLE_CARROT,function(t){var n=e(t.target).closest(o.BUTTON)[0];e(n).toggleClass(r.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[t]=s._jQueryInterface,e.fn[t].Constructor=s,e.fn[t].noConflict=function(){return e.fn[t]=n,s._jQueryInterface},s}(t),l=function(e){var t="carousel",n="bs.carousel",r="."+n,o=e.fn[t],u={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},c={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},l={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},f={SLIDE:"slide"+r,SLID:"slid"+r,KEYDOWN:"keydown"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r,TOUCHEND:"touchend"+r,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},p={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},d={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},h=function(){function o(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=this._element.querySelector(d.INDICATORS),this._addEventListeners()}var h=o.prototype;return h.next=function(){this._isSliding||this._slide(l.NEXT)},h.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},h.prev=function(){this._isSliding||this._slide(l.PREV)},h.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(d.NEXT_PREV)&&(s.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},h.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},h.to=function(t){var n=this;this._activeElement=this._element.querySelector(d.ACTIVE_ITEM);var r=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(f.SLID,function(){return n.to(t)});else{if(r===t)return this.pause(),void this.cycle();var i=t>r?l.NEXT:l.PREV;this._slide(i,this._items[t])}},h.dispose=function(){e(this._element).off(r),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},h._getConfig=function(e){return e=a({},u,e),s.typeCheckConfig(t,e,c),e},h._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(f.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(f.MOUSEENTER,function(e){return t.pause(e)}).on(f.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(f.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},h._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},h._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(d.ITEM)):[],this._items.indexOf(e)},h._getItemByDirection=function(e,t){var n=e===l.NEXT,r=e===l.PREV,i=this._getItemIndex(t),o=this._items.length-1,a=r&&0===i||n&&i===o;if(a&&!this._config.wrap)return t;var s=e===l.PREV?-1:1,u=(i+s)%this._items.length;return-1===u?this._items[this._items.length-1]:this._items[u]},h._triggerSlideEvent=function(t,n){var r=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(d.ACTIVE_ITEM)),o=e.Event(f.SLIDE,{relatedTarget:t,direction:n,from:i,to:r});return e(this._element).trigger(o),o},h._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(d.ACTIVE));e(n).removeClass(p.ACTIVE);var r=this._indicatorsElement.children[this._getItemIndex(t)];r&&e(r).addClass(p.ACTIVE)}},h._slide=function(t,n){var r,i,o,a=this,u=this._element.querySelector(d.ACTIVE_ITEM),c=this._getItemIndex(u),h=n||u&&this._getItemByDirection(t,u),v=this._getItemIndex(h),g=Boolean(this._interval);if(t===l.NEXT?(r=p.LEFT,i=p.NEXT,o=l.LEFT):(r=p.RIGHT,i=p.PREV,o=l.RIGHT),h&&e(h).hasClass(p.ACTIVE))this._isSliding=!1;else{var m=this._triggerSlideEvent(h,o);if(!m.isDefaultPrevented()&&u&&h){this._isSliding=!0,g&&this.pause(),this._setActiveIndicatorElement(h);var y=e.Event(f.SLID,{relatedTarget:h,direction:o,from:c,to:v});if(e(this._element).hasClass(p.SLIDE)){e(h).addClass(i),s.reflow(h),e(u).addClass(r),e(h).addClass(r);var _=s.getTransitionDurationFromElement(u);e(u).one(s.TRANSITION_END,function(){e(h).removeClass(r+" "+i).addClass(p.ACTIVE),e(u).removeClass(p.ACTIVE+" "+i+" "+r),a._isSliding=!1,setTimeout(function(){return e(a._element).trigger(y)},0)}).emulateTransitionEnd(_)}else e(u).removeClass(p.ACTIVE),e(h).addClass(p.ACTIVE),this._isSliding=!1,e(this._element).trigger(y);g&&this.cycle()}}},o._jQueryInterface=function(t){return this.each(function(){var r=e(this).data(n),i=a({},u,e(this).data());"object"==typeof t&&(i=a({},i,t));var s="string"==typeof t?t:i.slide;if(r||(r=new o(this,i),e(this).data(n,r)),"number"==typeof t)r.to(t);else if("string"==typeof s){if(void 0===r[s])throw new TypeError('No method named "'+s+'"');r[s]()}else i.interval&&(r.pause(),r.cycle())})},o._dataApiClickHandler=function(t){var r=s.getSelectorFromElement(this);if(r){var i=e(r)[0];if(i&&e(i).hasClass(p.CAROUSEL)){var u=a({},e(i).data(),e(this).data()),c=this.getAttribute("data-slide-to");c&&(u.interval=!1),o._jQueryInterface.call(e(i),u),c&&e(i).data(n).to(c),t.preventDefault()}}},i(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return u}}]),o}();return e(document).on(f.CLICK_DATA_API,d.DATA_SLIDE,h._dataApiClickHandler),e(window).on(f.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(d.DATA_RIDE)),n=0,r=t.length;n<r;n++){var i=e(t[n]);h._jQueryInterface.call(i,i.data())}}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=o,h._jQueryInterface},h}(t),f=function(e){var t="collapse",n="bs.collapse",r=e.fn[t],o={toggle:!0,parent:""},u={toggle:"boolean",parent:"(string|element)"},c={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},l={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},f={WIDTH:"width",HEIGHT:"height"},p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},d=function(){function r(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var r=[].slice.call(document.querySelectorAll(p.DATA_TOGGLE)),i=0,o=r.length;i<o;i++){var a=r[i],u=s.getSelectorFromElement(a),c=[].slice.call(document.querySelectorAll(u)).filter(function(e){return e===t});null!==u&&c.length>0&&(this._selector=u,this._triggerArray.push(a))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var d=r.prototype;return d.toggle=function(){e(this._element).hasClass(l.SHOW)?this.hide():this.show()},d.show=function(){var t,i,o=this;if(!(this._isTransitioning||e(this._element).hasClass(l.SHOW)||(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(p.ACTIVES)).filter(function(e){return e.getAttribute("data-parent")===o._config.parent})).length&&(t=null),t&&(i=e(t).not(this._selector).data(n))&&i._isTransitioning))){var a=e.Event(c.SHOW);if(e(this._element).trigger(a),!a.isDefaultPrevented()){t&&(r._jQueryInterface.call(e(t).not(this._selector),"hide"),i||e(t).data(n,null));var u=this._getDimension();e(this._element).removeClass(l.COLLAPSE).addClass(l.COLLAPSING),this._element.style[u]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(l.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var f=u[0].toUpperCase()+u.slice(1),d="scroll"+f,h=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,function(){e(o._element).removeClass(l.COLLAPSING).addClass(l.COLLAPSE).addClass(l.SHOW),o._element.style[u]="",o.setTransitioning(!1),e(o._element).trigger(c.SHOWN)}).emulateTransitionEnd(h),this._element.style[u]=this._element[d]+"px"}}},d.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(l.SHOW)){var n=e.Event(c.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var r=this._getDimension();this._element.style[r]=this._element.getBoundingClientRect()[r]+"px",s.reflow(this._element),e(this._element).addClass(l.COLLAPSING).removeClass(l.COLLAPSE).removeClass(l.SHOW);var i=this._triggerArray.length;if(i>0)for(var o=0;o<i;o++){var a=this._triggerArray[o],u=s.getSelectorFromElement(a);if(null!==u){var f=e([].slice.call(document.querySelectorAll(u)));f.hasClass(l.SHOW)||e(a).addClass(l.COLLAPSED).attr("aria-expanded",!1)}}this.setTransitioning(!0),this._element.style[r]="";var p=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,function(){t.setTransitioning(!1),e(t._element).removeClass(l.COLLAPSING).addClass(l.COLLAPSE).trigger(c.HIDDEN)}).emulateTransitionEnd(p)}}},d.setTransitioning=function(e){this._isTransitioning=e},d.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},d._getConfig=function(e){return(e=a({},o,e)).toggle=Boolean(e.toggle),s.typeCheckConfig(t,e,u),e},d._getDimension=function(){var t=e(this._element).hasClass(f.WIDTH);return t?f.WIDTH:f.HEIGHT},d._getParent=function(){var t=this,n=null;s.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(n.querySelectorAll(i));return e(o).each(function(e,n){t._addAriaAndCollapsedClass(r._getTargetFromElement(n),[n])}),n},d._addAriaAndCollapsedClass=function(t,n){if(t){var r=e(t).hasClass(l.SHOW);n.length&&e(n).toggleClass(l.COLLAPSED,!r).attr("aria-expanded",r)}},r._getTargetFromElement=function(e){var t=s.getSelectorFromElement(e);return t?document.querySelector(t):null},r._jQueryInterface=function(t){return this.each(function(){var i=e(this),s=i.data(n),u=a({},o,i.data(),"object"==typeof t&&t?t:{});if(!s&&u.toggle&&/show|hide/.test(t)&&(u.toggle=!1),s||(s=new r(this,u),i.data(n,s)),"string"==typeof t){if(void 0===s[t])throw new TypeError('No method named "'+t+'"');s[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return o}}]),r}();return e(document).on(c.CLICK_DATA_API,p.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var r=e(this),i=s.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each(function(){var t=e(this),i=t.data(n),o=i?"toggle":r.data();d._jQueryInterface.call(t,o)})}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=r,d._jQueryInterface},d}(t),p=function(e){var t="dropdown",r="bs.dropdown",o="."+r,u=e.fn[t],c=new RegExp("38|40|27"),l={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},f={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"},p={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"},d={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},h={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},v={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},g=function(){function u(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var g=u.prototype;return g.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(f.DISABLED)){var t=u._getParentFromElement(this._element),r=e(this._menu).hasClass(f.SHOW);if(u._clearMenus(),!r){var i={relatedTarget:this._element},o=e.Event(l.SHOW,i);if(e(t).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if(void 0===n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var a=this._element;"parent"===this._config.reference?a=t:s.isElement(this._config.reference)&&(a=this._config.reference,void 0!==this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(t).addClass(f.POSITION_STATIC),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(t).closest(p.NAVBAR_NAV).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(f.SHOW),e(t).toggleClass(f.SHOW).trigger(e.Event(l.SHOWN,i))}}}},g.dispose=function(){e.removeData(this._element,r),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},g.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},g._addEventListeners=function(){var t=this;e(this._element).on(l.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},g._getConfig=function(n){return n=a({},this.constructor.Default,e(this._element).data(),n),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},g._getMenuElement=function(){if(!this._menu){var e=u._getParentFromElement(this._element);e&&(this._menu=e.querySelector(p.MENU))}return this._menu},g._getPlacement=function(){var t=e(this._element.parentNode),n=d.BOTTOM;return t.hasClass(f.DROPUP)?(n=d.TOP,e(this._menu).hasClass(f.MENURIGHT)&&(n=d.TOPEND)):t.hasClass(f.DROPRIGHT)?n=d.RIGHT:t.hasClass(f.DROPLEFT)?n=d.LEFT:e(this._menu).hasClass(f.MENURIGHT)&&(n=d.BOTTOMEND),n},g._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},g._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=a({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},u._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(r),i="object"==typeof t?t:null;if(n||(n=new u(this,i),e(this).data(r,n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},u._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=[].slice.call(document.querySelectorAll(p.DATA_TOGGLE)),i=0,o=n.length;i<o;i++){var a=u._getParentFromElement(n[i]),s=e(n[i]).data(r),c={relatedTarget:n[i]};if(t&&"click"===t.type&&(c.clickEvent=t),s){var d=s._menu;if(e(a).hasClass(f.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(a,t.target))){var h=e.Event(l.HIDE,c);e(a).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),n[i].setAttribute("aria-expanded","false"),e(d).removeClass(f.SHOW),e(a).removeClass(f.SHOW).trigger(e.Event(l.HIDDEN,c)))}}}},u._getParentFromElement=function(e){var t,n=s.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},u._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||e(t.target).closest(p.MENU).length)):c.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(f.DISABLED))){var n=u._getParentFromElement(this),r=e(n).hasClass(f.SHOW);if((r||27===t.which&&32===t.which)&&(!r||27!==t.which&&32!==t.which)){var i=[].slice.call(n.querySelectorAll(p.VISIBLE_ITEMS));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&o>0&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var a=n.querySelector(p.DATA_TOGGLE);e(a).trigger("focus")}e(this).trigger("click")}}},i(u,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return h}},{key:"DefaultType",get:function(){return v}}]),u}();return e(document).on(l.KEYDOWN_DATA_API,p.DATA_TOGGLE,g._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API,p.MENU,g._dataApiKeydownHandler).on(l.CLICK_DATA_API+" "+l.KEYUP_DATA_API,g._clearMenus).on(l.CLICK_DATA_API,p.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),g._jQueryInterface.call(e(this),"toggle")}).on(l.CLICK_DATA_API,p.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[t]=g._jQueryInterface,e.fn[t].Constructor=g,e.fn[t].noConflict=function(){return e.fn[t]=u,g._jQueryInterface},g}(t),d=function(e){var t="modal",n=".bs.modal",r=e.fn.modal,o={backdrop:!0,keyboard:!0,focus:!0,show:!0},u={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},l={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},f={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top"},p=function(){function r(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(f.DIALOG),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var p=r.prototype;return p.toggle=function(e){return this._isShown?this.hide():this.show(e)},p.show=function(t){var n=this;if(!this._isTransitioning&&!this._isShown){e(this._element).hasClass(l.FADE)&&(this._isTransitioning=!0);var r=e.Event(c.SHOW,{relatedTarget:t});e(this._element).trigger(r),this._isShown||r.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(l.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(c.CLICK_DISMISS,f.DATA_DISMISS,function(e){return n.hide(e)}),e(this._dialog).on(c.MOUSEDOWN_DISMISS,function(){e(n._element).one(c.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},p.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var r=e.Event(c.HIDE);if(e(this._element).trigger(r),this._isShown&&!r.isDefaultPrevented()){this._isShown=!1;var i=e(this._element).hasClass(l.FADE);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(c.FOCUSIN),e(this._element).removeClass(l.SHOW),e(this._element).off(c.CLICK_DISMISS),e(this._dialog).off(c.MOUSEDOWN_DISMISS),i){var o=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},p.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(e){return e=a({},o,e),s.typeCheckConfig(t,e,u),e},p._showElement=function(t){var n=this,r=e(this._element).hasClass(l.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,r&&s.reflow(this._element),e(this._element).addClass(l.SHOW),this._config.focus&&this._enforceFocus();var i=e.Event(c.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(i)};if(r){var a=s.getTransitionDurationFromElement(this._element);e(this._dialog).one(s.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},p._enforceFocus=function(){var t=this;e(document).off(c.FOCUSIN).on(c.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},p._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(c.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(c.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var t=this;this._isShown?e(window).on(c.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(c.RESIZE)},p._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(l.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(c.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(t){var n=this,r=e(this._element).hasClass(l.FADE)?l.FADE:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=l.BACKDROP,r&&this._backdrop.classList.add(r),e(this._backdrop).appendTo(document.body),e(this._element).on(c.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),r&&s.reflow(this._backdrop),e(this._backdrop).addClass(l.SHOW),!t)return;if(!r)return void t();var i=s.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(s.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(l.SHOW);var o=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass(l.FADE)){var a=s.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(s.TRANSITION_END,o).emulateTransitionEnd(a)}else o()}else t&&t()},p._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(f.FIXED_CONTENT)),r=[].slice.call(document.querySelectorAll(f.STICKY_CONTENT));e(n).each(function(n,r){var i=r.style.paddingRight,o=e(r).css("padding-right");e(r).data("padding-right",i).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(r).each(function(n,r){var i=r.style.marginRight,o=e(r).css("margin-right");e(r).data("margin-right",i).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")});var i=document.body.style.paddingRight,o=e(document.body).css("padding-right");e(document.body).data("padding-right",i).css("padding-right",parseFloat(o)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(f.FIXED_CONTENT));e(t).each(function(t,n){var r=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=r||""});var n=[].slice.call(document.querySelectorAll(""+f.STICKY_CONTENT));e(n).each(function(t,n){var r=e(n).data("margin-right");void 0!==r&&e(n).css("margin-right",r).removeData("margin-right")});var r=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=r||""},p._getScrollbarWidth=function(){var e=document.createElement("div");e.className=l.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},r._jQueryInterface=function(t,n){return this.each(function(){var i=e(this).data("bs.modal"),s=a({},o,e(this).data(),"object"==typeof t&&t?t:{});if(i||(i=new r(this,s),e(this).data("bs.modal",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t](n)}else s.show&&i.show(n)})},i(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return o}}]),r}();return e(document).on(c.CLICK_DATA_API,f.DATA_TOGGLE,function(t){var n,r=this,i=s.getSelectorFromElement(this);i&&(n=document.querySelector(i));var o=e(n).data("bs.modal")?"toggle":a({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var u=e(n).one(c.SHOW,function(t){t.isDefaultPrevented()||u.one(c.HIDDEN,function(){e(r).is(":visible")&&r.focus()})});p._jQueryInterface.call(e(n),o,this)}),e.fn.modal=p._jQueryInterface,e.fn.modal.Constructor=p,e.fn.modal.noConflict=function(){return e.fn.modal=r,p._jQueryInterface},p}(t),h=function(e){var t="tooltip",r=".bs.tooltip",o=e.fn[t],u=new RegExp("(^|\\s)bs-tooltip\\S+","g"),c={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},l={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},p={SHOW:"show",OUT:"out"},d={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,INSERTED:"inserted"+r,CLICK:"click"+r,FOCUSIN:"focusin"+r,FOCUSOUT:"focusout"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r},h={FADE:"fade",SHOW:"show"},v={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},g={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},m=function(){function o(e,t){if(void 0===n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var m=o.prototype;return m.enable=function(){this._isEnabled=!0},m.disable=function(){this._isEnabled=!1},m.toggleEnabled=function(){this._isEnabled=!this._isEnabled},m.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,r=e(t.currentTarget).data(n);r||(r=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,r)),r._activeTrigger.click=!r._activeTrigger.click,r._isWithActiveTrigger()?r._enter(null,r):r._leave(null,r)}else{if(e(this.getTipElement()).hasClass(h.SHOW))return void this._leave(null,this);this._enter(null,this)}},m.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},m.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var r=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(r);var i=e.contains(this.element.ownerDocument.documentElement,this.element);if(r.isDefaultPrevented()||!i)return;var o=this.getTipElement(),a=s.getUID(this.constructor.NAME);o.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(o).addClass(h.FADE);var u="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,c=this._getAttachment(u);this.addAttachmentClass(c);var l=!1===this.config.container?document.body:e(document).find(this.config.container);e(o).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(o).appendTo(l),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,o,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(o).addClass(h.SHOW),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var f=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===p.OUT&&t._leave(null,t)};if(e(this.tip).hasClass(h.FADE)){var d=s.getTransitionDurationFromElement(this.tip);e(this.tip).one(s.TRANSITION_END,f).emulateTransitionEnd(d)}else f()}},m.hide=function(t){var n=this,r=this.getTipElement(),i=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==p.SHOW&&r.parentNode&&r.parentNode.removeChild(r),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(i),!i.isDefaultPrevented()){if(e(r).removeClass(h.SHOW),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger[g.CLICK]=!1,this._activeTrigger[g.FOCUS]=!1,this._activeTrigger[g.HOVER]=!1,e(this.tip).hasClass(h.FADE)){var a=s.getTransitionDurationFromElement(r);e(r).one(s.TRANSITION_END,o).emulateTransitionEnd(a)}else o();this._hoverState=""}},m.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},m.isWithContent=function(){return Boolean(this.getTitle())},m.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},m.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},m.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(v.TOOLTIP_INNER)),this.getTitle()),e(t).removeClass(h.FADE+" "+h.SHOW)},m.setElementContent=function(t,n){var r=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?r?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[r?"html":"text"](n)},m.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},m._getAttachment=function(e){return l[e.toUpperCase()]},m._setListeners=function(){var t=this,n=this.config.trigger.split(" ");n.forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(n!==g.MANUAL){var r=n===g.HOVER?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,i=n===g.HOVER?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(r,t.config.selector,function(e){return t._enter(e)}).on(i,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},m._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},m._enter=function(t,n){var r=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(r))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(r,n)),t&&(n._activeTrigger["focusin"===t.type?g.FOCUS:g.HOVER]=!0),e(n.getTipElement()).hasClass(h.SHOW)||n._hoverState===p.SHOW?n._hoverState=p.SHOW:(clearTimeout(n._timeout),n._hoverState=p.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===p.SHOW&&n.show()},n.config.delay.show):n.show())},m._leave=function(t,n){var r=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(r))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(r,n)),t&&(n._activeTrigger["focusout"===t.type?g.FOCUS:g.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=p.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===p.OUT&&n.hide()},n.config.delay.hide):n.hide())},m._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},m._getConfig=function(n){return"number"==typeof(n=a({},this.constructor.Default,e(this.element).data(),"object"==typeof n&&n?n:{})).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},m._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},m._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(u);null!==n&&n.length&&t.removeClass(n.join(""))},m._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},m._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(h.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),r="object"==typeof t&&t;if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,r),e(this).data("bs.tooltip",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},i(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return f}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return r}},{key:"DefaultType",get:function(){return c}}]),o}();return e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=o,m._jQueryInterface},m}(t),v=function(e){var t="popover",n=".bs.popover",r=e.fn[t],o=new RegExp("(^|\\s)bs-popover\\S+","g"),s=a({},h.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),u=a({},h.DefaultType,{content:"(string|element|function)"}),c={FADE:"fade",SHOW:"show"},l={TITLE:".popover-header",CONTENT:".popover-body"},f={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},p=function(r){var a,p;function d(){return r.apply(this,arguments)||this}p=r,(a=d).prototype=Object.create(p.prototype),a.prototype.constructor=a,a.__proto__=p;var h=d.prototype;return h.isWithContent=function(){return this.getTitle()||this._getContent()},h.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},h.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},h.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(l.TITLE),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(l.CONTENT),n),t.removeClass(c.FADE+" "+c.SHOW)},h._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},h._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(o);null!==n&&n.length>0&&t.removeClass(n.join(""))},d._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),r="object"==typeof t?t:null;if((n||!/destroy|hide/.test(t))&&(n||(n=new d(this,r),e(this).data("bs.popover",n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},i(d,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return s}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return f}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return u}}]),d}(h);return e.fn[t]=p._jQueryInterface,e.fn[t].Constructor=p,e.fn[t].noConflict=function(){return e.fn[t]=r,p._jQueryInterface},p}(t),g=function(e){var t="scrollspy",n=e.fn[t],r={offset:10,method:"auto",target:""},o={offset:"number",method:"string",target:"(string|element)"},u={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},c={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},l={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},f={OFFSET:"offset",POSITION:"position"},p=function(){function n(t,n){var r=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+l.NAV_LINKS+","+this._config.target+" "+l.LIST_ITEMS+","+this._config.target+" "+l.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(u.SCROLL,function(e){return r._process(e)}),this.refresh(),this._process()}var p=n.prototype;return p.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?f.OFFSET:f.POSITION,r="auto"===this._config.method?n:this._config.method,i=r===f.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var o=[].slice.call(document.querySelectorAll(this._selector));o.map(function(t){var n,o=s.getSelectorFromElement(t);if(o&&(n=document.querySelector(o)),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[e(n)[r]().top+i,o]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},p.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},p._getConfig=function(n){if("string"!=typeof(n=a({},r,"object"==typeof n&&n?n:{})).target){var i=e(n.target).attr("id");i||(i=s.getUID(t),e(n.target).attr("id",i)),n.target="#"+i}return s.typeCheckConfig(t,n,o),n},p._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},p._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},p._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},p._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var r=this._targets[this._targets.length-1];this._activeTarget!==r&&this._activate(r)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var i=this._offsets.length,o=i;o--;){var a=this._activeTarget!==this._targets[o]&&e>=this._offsets[o]&&(void 0===this._offsets[o+1]||e<this._offsets[o+1]);a&&this._activate(this._targets[o])}}},p._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",");n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var r=e([].slice.call(document.querySelectorAll(n.join(","))));r.hasClass(c.DROPDOWN_ITEM)?(r.closest(l.DROPDOWN).find(l.DROPDOWN_TOGGLE).addClass(c.ACTIVE),r.addClass(c.ACTIVE)):(r.addClass(c.ACTIVE),r.parents(l.NAV_LIST_GROUP).prev(l.NAV_LINKS+", "+l.LIST_ITEMS).addClass(c.ACTIVE),r.parents(l.NAV_LIST_GROUP).prev(l.NAV_ITEMS).children(l.NAV_LINKS).addClass(c.ACTIVE)),e(this._scrollElement).trigger(u.ACTIVATE,{relatedTarget:t})},p._clear=function(){var t=[].slice.call(document.querySelectorAll(this._selector));e(t).filter(l.ACTIVE).removeClass(c.ACTIVE)},n._jQueryInterface=function(t){return this.each(function(){var r=e(this).data("bs.scrollspy"),i="object"==typeof t&&t;if(r||(r=new n(this,i),e(this).data("bs.scrollspy",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"');r[t]()}})},i(n,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return r}}]),n}();return e(window).on(u.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(l.DATA_SPY)),n=t.length,r=n;r--;){var i=e(t[r]);p._jQueryInterface.call(i,i.data())}}),e.fn[t]=p._jQueryInterface,e.fn[t].Constructor=p,e.fn[t].noConflict=function(){return e.fn[t]=n,p._jQueryInterface},p}(t),m=function(e){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},r={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},o={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},a=function(){function t(e){this._element=e}var a=t.prototype;return a.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(r.ACTIVE)||e(this._element).hasClass(r.DISABLED))){var i,a,u=e(this._element).closest(o.NAV_LIST_GROUP)[0],c=s.getSelectorFromElement(this._element);if(u){var l="UL"===u.nodeName?o.ACTIVE_UL:o.ACTIVE;a=(a=e.makeArray(e(u).find(l)))[a.length-1]}var f=e.Event(n.HIDE,{relatedTarget:this._element}),p=e.Event(n.SHOW,{relatedTarget:a});if(a&&e(a).trigger(f),e(this._element).trigger(p),!p.isDefaultPrevented()&&!f.isDefaultPrevented()){c&&(i=document.querySelector(c)),this._activate(this._element,u);var d=function(){var r=e.Event(n.HIDDEN,{relatedTarget:t._element}),i=e.Event(n.SHOWN,{relatedTarget:a});e(a).trigger(r),e(t._element).trigger(i)};i?this._activate(i,i.parentNode,d):d()}}},a.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},a._activate=function(t,n,i){var a=this,u=("UL"===n.nodeName?e(n).find(o.ACTIVE_UL):e(n).children(o.ACTIVE))[0],c=i&&u&&e(u).hasClass(r.FADE),l=function(){return a._transitionComplete(t,u,i)};if(u&&c){var f=s.getTransitionDurationFromElement(u);e(u).one(s.TRANSITION_END,l).emulateTransitionEnd(f)}else l()},a._transitionComplete=function(t,n,i){if(n){e(n).removeClass(r.SHOW+" "+r.ACTIVE);var a=e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];a&&e(a).removeClass(r.ACTIVE),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(r.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),s.reflow(t),e(t).addClass(r.SHOW),t.parentNode&&e(t.parentNode).hasClass(r.DROPDOWN_MENU)){var u=e(t).closest(o.DROPDOWN)[0];if(u){var c=[].slice.call(u.querySelectorAll(o.DROPDOWN_TOGGLE));e(c).addClass(r.ACTIVE)}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.tab");if(i||(i=new t(this),r.data("bs.tab",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),t}();return e(document).on(n.CLICK_DATA_API,o.DATA_TOGGLE,function(t){t.preventDefault(),a._jQueryInterface.call(e(this),"show")}),e.fn.tab=a._jQueryInterface,e.fn.tab.Constructor=a,e.fn.tab.noConflict=function(){return e.fn.tab=t,a._jQueryInterface},a}(t);(function(e){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")})(t),e.Util=s,e.Alert=u,e.Button=c,e.Carousel=l,e.Collapse=f,e.Dropdown=p,e.Modal=d,e.Popover=v,e.Scrollspy=g,e.Tab=m,e.Tooltip=h,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(4),n(3))},function(e,t,n){e.exports=n(18)},function(e,t,n){"use strict";var r=n(0),i=n(5),o=n(20),a=n(2);function s(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var u=s(a);u.Axios=o,u.create=function(e){return s(r.merge(a,e))},u.Cancel=n(10),u.CancelToken=n(34),u.isCancel=n(9),u.all=function(e){return Promise.all(e)},u.spread=n(35),e.exports=u,e.exports.default=u},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(2),i=n(0),o=n(29),a=n(30);function s(e){this.defaults=e,this.interceptors={request:new o,response:new o}}s.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),(e=i.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=s},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(8);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e}},function(e,t,n){"use strict";var r=n(0);function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))}))}),o=a.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},function(e,t,n){"use strict";var r=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i(){this.message="String contains an invalid character"}i.prototype=new Error,i.prototype.code=5,i.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,o=String(e),a="",s=0,u=r;o.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new i;t=t<<8|n}return a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(0);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(31),o=n(9),a=n(2),s=n(32),u=n(33);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!s(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return c(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(10);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i(function(t){e=t}),cancel:e}},e.exports=i},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";(function(t,n){var r=Object.freeze({});function i(e){return null==e}function o(e){return null!=e}function a(e){return!0===e}function s(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function u(e){return null!==e&&"object"==typeof e}var c=Object.prototype.toString;function l(e){return"[object Object]"===c.call(e)}function f(e){return"[object RegExp]"===c.call(e)}function p(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function d(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function h(e){var t=parseFloat(e);return isNaN(t)?e:t}function v(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var g=v("slot,component",!0),m=v("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(e,t){return _.call(e,t)}function w(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var T=/-(\w)/g,E=w(function(e){return e.replace(T,function(e,t){return t?t.toUpperCase():""})}),x=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),C=/\B([A-Z])/g,A=w(function(e){return e.replace(C,"-$1").toLowerCase()});var S=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function O(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function D(e,t){for(var n in t)e[n]=t[n];return e}function I(e){for(var t={},n=0;n<e.length;n++)e[n]&&D(t,e[n]);return t}function k(e,t,n){}var N=function(e,t,n){return!1},L=function(e){return e};function j(e,t){if(e===t)return!0;var n=u(e),r=u(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every(function(e,n){return j(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var a=Object.keys(e),s=Object.keys(t);return a.length===s.length&&a.every(function(n){return j(e[n],t[n])})}catch(e){return!1}}function P(e,t){for(var n=0;n<e.length;n++)if(j(e[n],t))return n;return-1}function R(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var $="data-server-rendered",H=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:k,parsePlatformTagName:L,mustUseProp:N,async:!0,_lifecycleHooks:M};function W(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var q=/[^\w.$]/;var B,U="__proto__"in{},V="undefined"!=typeof window,z="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=z&&WXEnvironment.platform.toLowerCase(),G=V&&window.navigator.userAgent.toLowerCase(),X=G&&/msie|trident/.test(G),Q=G&&G.indexOf("msie 9.0")>0,Y=G&&G.indexOf("edge/")>0,J=(G&&G.indexOf("android"),G&&/iphone|ipad|ipod|ios/.test(G)||"ios"===K),Z=(G&&/chrome\/\d+/.test(G),{}.watch),ee=!1;if(V)try{var te={};Object.defineProperty(te,"passive",{get:function(){ee=!0}}),window.addEventListener("test-passive",null,te)}catch(e){}var ne=function(){return void 0===B&&(B=!V&&!z&&void 0!==t&&(t.process&&"server"===t.process.env.VUE_ENV)),B},re=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ie(e){return"function"==typeof e&&/native code/.test(e.toString())}var oe,ae="undefined"!=typeof Symbol&&ie(Symbol)&&"undefined"!=typeof Reflect&&ie(Reflect.ownKeys);oe="undefined"!=typeof Set&&ie(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var se=k,ue=0,ce=function(){this.id=ue++,this.subs=[]};ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){y(this.subs,e)},ce.prototype.depend=function(){ce.target&&ce.target.addDep(this)},ce.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},ce.target=null;var le=[];function fe(e){le.push(e),ce.target=e}function pe(){le.pop(),ce.target=le[le.length-1]}var de=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(de.prototype,he);var ve=function(e){void 0===e&&(e="");var t=new de;return t.text=e,t.isComment=!0,t};function ge(e){return new de(void 0,void 0,void 0,String(e))}function me(e){var t=new de(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ye=Array.prototype,_e=Object.create(ye);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ye[e];W(_e,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var be=Object.getOwnPropertyNames(_e),we=!0;function Te(e){we=e}var Ee=function(e){var t;this.value=e,this.dep=new ce,this.vmCount=0,W(e,"__ob__",this),Array.isArray(e)?(U?(t=_e,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(e,o,t[o])}}(e,_e,be),this.observeArray(e)):this.walk(e)};function xe(e,t){var n;if(u(e)&&!(e instanceof de))return b(e,"__ob__")&&e.__ob__ instanceof Ee?n=e.__ob__:we&&!ne()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Ee(e)),t&&n&&n.vmCount++,n}function Ce(e,t,n,r,i){var o=new ce,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=e[t]);var c=!i&&xe(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return ce.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!u||(u?u.call(e,t):n=t,c=!i&&xe(t),o.notify())}})}}function Ae(e,t,n){if(Array.isArray(e)&&p(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Ce(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Se(e,t){if(Array.isArray(e)&&p(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||b(e,t)&&(delete e[t],n&&n.dep.notify())}}Ee.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Ce(e,t[n])},Ee.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)xe(e[t])};var Oe=F.optionMergeStrategies;function De(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),a=0;a<o.length;a++)r=e[n=o[a]],i=t[n],b(e,n)?r!==i&&l(r)&&l(i)&&De(r,i):Ae(e,n,i);return e}function Ie(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?De(r,i):i}:t?e?function(){return De("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function ke(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function Ne(e,t,n,r){var i=Object.create(e||null);return t?D(i,t):i}Oe.data=function(e,t,n){return n?Ie(e,t,n):t&&"function"!=typeof t?e:Ie(e,t)},M.forEach(function(e){Oe[e]=ke}),H.forEach(function(e){Oe[e+"s"]=Ne}),Oe.watch=function(e,t,n,r){if(e===Z&&(e=void 0),t===Z&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in D(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Oe.props=Oe.methods=Oe.inject=Oe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return D(i,e),t&&D(i,t),i},Oe.provide=Ie;var Le=function(e,t){return void 0===t?e:t};function je(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[E(i)]={type:null});else if(l(n))for(var a in n)i=n[a],o[E(a)]=l(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?D({from:o},a):{from:a}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=je(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=je(e,t.mixins[r],n);var o,a={};for(o in e)s(o);for(o in t)b(e,o)||s(o);function s(r){var i=Oe[r]||Le;a[r]=i(e[r],t[r],n,r)}return a}function Pe(e,t,n,r){if("string"==typeof n){var i=e[t];if(b(i,n))return i[n];var o=E(n);if(b(i,o))return i[o];var a=x(o);return b(i,a)?i[a]:i[n]||i[o]||i[a]}}function Re(e,t,n,r){var i=t[e],o=!b(n,e),a=n[e],s=Me(Boolean,i.type);if(s>-1)if(o&&!b(i,"default"))a=!1;else if(""===a||a===A(e)){var u=Me(String,i.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!b(t,"default"))return;var r=t.default;0;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==$e(t.type)?r.call(e):r}(r,i,e);var c=we;Te(!0),xe(a),Te(c)}return a}function $e(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function He(e,t){return $e(e)===$e(t)}function Me(e,t){if(!Array.isArray(t))return He(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(He(t[n],e))return n;return-1}function Fe(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){We(e,r,"errorCaptured hook")}}We(e,t,n)}function We(e,t,n){if(F.errorHandler)try{return F.errorHandler.call(null,e,t,n)}catch(e){qe(e,null,"config.errorHandler")}qe(e,t,n)}function qe(e,t,n){if(!V&&!z||"undefined"==typeof console)throw e;console.error(e)}var Be,Ue,Ve=[],ze=!1;function Ke(){ze=!1;var e=Ve.slice(0);Ve.length=0;for(var t=0;t<e.length;t++)e[t]()}var Ge=!1;if(void 0!==n&&ie(n))Ue=function(){n(Ke)};else if("undefined"==typeof MessageChannel||!ie(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())Ue=function(){setTimeout(Ke,0)};else{var Xe=new MessageChannel,Qe=Xe.port2;Xe.port1.onmessage=Ke,Ue=function(){Qe.postMessage(1)}}if("undefined"!=typeof Promise&&ie(Promise)){var Ye=Promise.resolve();Be=function(){Ye.then(Ke),J&&setTimeout(k)}}else Be=Ue;function Je(e,t){var n;if(Ve.push(function(){if(e)try{e.call(t)}catch(e){Fe(e,t,"nextTick")}else n&&n(t)}),ze||(ze=!0,Ge?Ue():Be()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var Ze=new oe;function et(e){!function e(t,n){var r,i;var o=Array.isArray(t);if(!o&&!u(t)||Object.isFrozen(t)||t instanceof de)return;if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,Ze),Ze.clear()}var tt,nt=w(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function rt(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,e)}return t.fns=e,t}function it(e,t,n,r,o,s){var u,c,l,f;for(u in e)c=e[u],l=t[u],f=nt(u),i(c)||(i(l)?(i(c.fns)&&(c=e[u]=rt(c)),a(f.once)&&(c=e[u]=o(f.name,c,f.capture)),n(f.name,c,f.capture,f.passive,f.params)):c!==l&&(l.fns=c,e[u]=l));for(u in t)i(e[u])&&r((f=nt(u)).name,t[u],f.capture)}function ot(e,t,n){var r;e instanceof de&&(e=e.data.hook||(e.data.hook={}));var s=e[t];function u(){n.apply(this,arguments),y(r.fns,u)}i(s)?r=rt([u]):o(s.fns)&&a(s.merged)?(r=s).fns.push(u):r=rt([s,u]),r.merged=!0,e[t]=r}function at(e,t,n,r,i){if(o(t)){if(b(t,n))return e[n]=t[n],i||delete t[n],!0;if(b(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function st(e){return s(e)?[ge(e)]:Array.isArray(e)?function e(t,n){var r=[];var u,c,l,f;for(u=0;u<t.length;u++)i(c=t[u])||"boolean"==typeof c||(l=r.length-1,f=r[l],Array.isArray(c)?c.length>0&&(ut((c=e(c,(n||"")+"_"+u))[0])&&ut(f)&&(r[l]=ge(f.text+c[0].text),c.shift()),r.push.apply(r,c)):s(c)?ut(f)?r[l]=ge(f.text+c):""!==c&&r.push(ge(c)):ut(c)&&ut(f)?r[l]=ge(f.text+c.text):(a(t._isVList)&&o(c.tag)&&i(c.key)&&o(n)&&(c.key="__vlist"+n+"_"+u+"__"),r.push(c)));return r}(e):void 0}function ut(e){return o(e)&&o(e.text)&&!1===e.isComment}function ct(e,t){return(e.__esModule||ae&&"Module"===e[Symbol.toStringTag])&&(e=e.default),u(e)?t.extend(e):e}function lt(e){return e.isComment&&e.asyncFactory}function ft(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||lt(n)))return n}}function pt(e,t){tt.$on(e,t)}function dt(e,t){tt.$off(e,t)}function ht(e,t){var n=tt;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function vt(e,t,n){tt=e,it(t,n||{},pt,dt,ht),tt=void 0}function gt(e,t){var n={};if(!e)return n;for(var r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===o.tag?u.push.apply(u,o.children||[]):u.push(o)}}for(var c in n)n[c].every(mt)&&delete n[c];return n}function mt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function yt(e,t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?yt(e[n],t):t[e[n].key]=e[n].fn;return t}var _t=null;function bt(e){var t=_t;return _t=e,function(){_t=t}}function wt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Tt(e,t){if(t){if(e._directInactive=!1,wt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Tt(e.$children[n]);Et(e,"activated")}}function Et(e,t){fe();var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){Fe(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t),pe()}var xt=[],Ct=[],At={},St=!1,Ot=!1,Dt=0;function It(){var e,t;for(Ot=!0,xt.sort(function(e,t){return e.id-t.id}),Dt=0;Dt<xt.length;Dt++)(e=xt[Dt]).before&&e.before(),t=e.id,At[t]=null,e.run();var n=Ct.slice(),r=xt.slice();Dt=xt.length=Ct.length=0,At={},St=Ot=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Tt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Et(r,"updated")}}(r),re&&F.devtools&&re.emit("flush")}var kt=0,Nt=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++kt,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!q.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=k)),this.value=this.lazy?void 0:this.get()};Nt.prototype.get=function(){var e;fe(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Fe(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&et(e),pe(),this.cleanupDeps()}return e},Nt.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Nt.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Nt.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==At[t]){if(At[t]=!0,Ot){for(var n=xt.length-1;n>Dt&&xt[n].id>e.id;)n--;xt.splice(n+1,0,e)}else xt.push(e);St||(St=!0,Je(It))}}(this)},Nt.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Fe(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Nt.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Nt.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},Nt.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var Lt={enumerable:!0,configurable:!0,get:k,set:k};function jt(e,t,n){Lt.get=function(){return this[t][n]},Lt.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Lt)}function Pt(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&Te(!1);var o=function(o){i.push(o);var a=Re(o,t,n,e);Ce(r,o,a),o in e||jt(e,"_props",o)};for(var a in t)o(a);Te(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?k:S(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;l(t=e._data="function"==typeof t?function(e,t){fe();try{return e.call(t,t)}catch(e){return Fe(e,t,"data()"),{}}finally{pe()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];0,r&&b(r,o)||(a=void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&jt(e,"_data",o))}var a;xe(t,!0)}(e):xe(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=ne();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;0,r||(n[i]=new Nt(e,a||k,k,Rt)),i in e||$t(e,i,o)}}(e,t.computed),t.watch&&t.watch!==Z&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Ft(e,n,r[i]);else Ft(e,n,r)}}(e,t.watch)}var Rt={lazy:!0};function $t(e,t,n){var r=!ne();"function"==typeof n?(Lt.get=r?Ht(t):Mt(n),Lt.set=k):(Lt.get=n.get?r&&!1!==n.cache?Ht(t):Mt(n.get):k,Lt.set=n.set||k),Object.defineProperty(e,t,Lt)}function Ht(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ce.target&&t.depend(),t.value}}function Mt(e){return function(){return e.call(this,this)}}function Ft(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Wt(e,t){if(e){for(var n=Object.create(null),r=ae?Reflect.ownKeys(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}):Object.keys(e),i=0;i<r.length;i++){for(var o=r[i],a=e[o].from,s=t;s;){if(s._provided&&b(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in e[o]){var u=e[o].default;n[o]="function"==typeof u?u.call(t):u}else 0}return n}}function qt(e,t){var n,r,i,a,s;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))for(a=Object.keys(e),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=t(e[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function Bt(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=D(D({},r),n)),i=o(n)||t):i=this.$slots[e]||t;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Ut(e){return Pe(this.$options,"filters",e)||L}function Vt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function zt(e,t,n,r,i){var o=F.keyCodes[t]||n;return i&&r&&!F.keyCodes[t]?Vt(i,r):o?Vt(o,e):r?A(r)!==t:void 0}function Kt(e,t,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=I(n));var a=function(a){if("class"===a||"style"===a||m(a))o=e;else{var s=e.attrs&&e.attrs.type;o=r||F.mustUseProp(t,s,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var u=E(a);a in o||u in o||(o[a]=n[a],i&&((e.on||(e.on={}))["update:"+u]=function(e){n[a]=e}))};for(var s in n)a(s)}else;return e}function Gt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(Qt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r)}function Xt(e,t,n){return Qt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Qt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Yt(e[r],t+"_"+r,n);else Yt(e,t,n)}function Yt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Jt(e,t){if(t)if(l(t)){var n=e.on=e.on?D({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Zt(e){e._o=Xt,e._n=h,e._s=d,e._l=qt,e._t=Bt,e._q=j,e._i=P,e._m=Gt,e._f=Ut,e._k=zt,e._b=Kt,e._v=ge,e._e=ve,e._u=yt,e._g=Jt}function en(e,t,n,i,o){var s,u=o.options;b(i,"_uid")?(s=Object.create(i))._original=i:(s=i,i=i._original);var c=a(u._compiled),l=!c;this.data=e,this.props=t,this.children=n,this.parent=i,this.listeners=e.on||r,this.injections=Wt(u.inject,i),this.slots=function(){return gt(n,i)},c&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||r),u._scopeId?this._c=function(e,t,n,r){var o=ln(s,e,t,n,r,l);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return ln(s,e,t,n,r,l)}}function tn(e,t,n,r,i){var o=me(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nn(e,t){for(var n in t)e[E(n)]=t[n]}Zt(en.prototype);var rn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;rn.prepatch(n,n)}else{(e.componentInstance=function(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new e.componentOptions.Ctor(n)}(e,_t)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,i,o){var a=!!(o||e.$options._renderChildren||i.data.scopedSlots||e.$scopedSlots!==r);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o,e.$attrs=i.data.attrs||r,e.$listeners=n||r,t&&e.$options.props){Te(!1);for(var s=e._props,u=e.$options._propKeys||[],c=0;c<u.length;c++){var l=u[c],f=e.$options.props;s[l]=Re(l,f,t,e)}Te(!0),e.$options.propsData=t}n=n||r;var p=e.$options._parentListeners;e.$options._parentListeners=n,vt(e,n,p),a&&(e.$slots=gt(o,i.context),e.$forceUpdate())}(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Et(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,Ct.push(t)):Tt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(!(n&&(t._directInactive=!0,wt(t))||t._inactive)){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Et(t,"deactivated")}}(t,!0):t.$destroy())}},on=Object.keys(rn);function an(e,t,n,s,c){if(!i(e)){var l=n.$options._base;if(u(e)&&(e=l.extend(e)),"function"==typeof e){var f;if(i(e.cid)&&void 0===(e=function(e,t,n){if(a(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;if(a(e.loading)&&o(e.loadingComp))return e.loadingComp;if(!o(e.contexts)){var r=e.contexts=[n],s=!0,c=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0)},l=R(function(n){e.resolved=ct(n,t),s||c(!0)}),f=R(function(t){o(e.errorComp)&&(e.error=!0,c(!0))}),p=e(l,f);return u(p)&&("function"==typeof p.then?i(e.resolved)&&p.then(l,f):o(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),o(p.error)&&(e.errorComp=ct(p.error,t)),o(p.loading)&&(e.loadingComp=ct(p.loading,t),0===p.delay?e.loading=!0:setTimeout(function(){i(e.resolved)&&i(e.error)&&(e.loading=!0,c(!1))},p.delay||200)),o(p.timeout)&&setTimeout(function(){i(e.resolved)&&f(null)},p.timeout))),s=!1,e.loading?e.loadingComp:e.resolved}e.contexts.push(n)}(f=e,l,n)))return function(e,t,n,r,i){var o=ve();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(f,t,n,s,c);t=t||{},pn(e),o(t.model)&&function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={}),a=i[r],s=t.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}(e.options,t);var p=function(e,t,n){var r=t.options.props;if(!i(r)){var a={},s=e.attrs,u=e.props;if(o(s)||o(u))for(var c in r){var l=A(c);at(a,u,c,l,!0)||at(a,s,c,l,!1)}return a}}(t,e);if(a(e.options.functional))return function(e,t,n,i,a){var s=e.options,u={},c=s.props;if(o(c))for(var l in c)u[l]=Re(l,c,t||r);else o(n.attrs)&&nn(u,n.attrs),o(n.props)&&nn(u,n.props);var f=new en(n,u,a,i,e),p=s.render.call(null,f._c,f);if(p instanceof de)return tn(p,n,f.parent,s);if(Array.isArray(p)){for(var d=st(p)||[],h=new Array(d.length),v=0;v<d.length;v++)h[v]=tn(d[v],n,f.parent,s);return h}}(e,p,t,n,s);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var h=t.slot;t={},h&&(t.slot=h)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<on.length;n++){var r=on[n],i=t[r],o=rn[r];i===o||i&&i._merged||(t[r]=i?sn(o,i):o)}}(t);var v=e.options.name||c;return new de("vue-component-"+e.cid+(v?"-"+v:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:p,listeners:d,tag:c,children:s},f)}}}function sn(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}var un=1,cn=2;function ln(e,t,n,r,c,l){return(Array.isArray(n)||s(n))&&(c=r,r=n,n=void 0),a(l)&&(c=cn),function(e,t,n,r,s){if(o(n)&&o(n.__ob__))return ve();o(n)&&o(n.is)&&(t=n.is);if(!t)return ve();0;Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);s===cn?r=st(r):s===un&&(r=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(r));var c,l;if("string"==typeof t){var f;l=e.$vnode&&e.$vnode.ns||F.getTagNamespace(t),c=F.isReservedTag(t)?new de(F.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(f=Pe(e.$options,"components",t))?new de(t,n,r,void 0,void 0,e):an(f,n,e,r,t)}else c=an(t,n,e,r);return Array.isArray(c)?c:o(c)?(o(l)&&function e(t,n,r){t.ns=n;"foreignObject"===t.tag&&(n=void 0,r=!0);if(o(t.children))for(var s=0,u=t.children.length;s<u;s++){var c=t.children[s];o(c.tag)&&(i(c.ns)||a(r)&&"svg"!==c.tag)&&e(c,n,r)}}(c,l),o(n)&&function(e){u(e.style)&&et(e.style);u(e.class)&&et(e.class)}(n),c):ve()}(e,t,n,r,c)}var fn=0;function pn(e){var t=e.options;if(e.super){var n=pn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=dn(n[o],r[o],i[o]));return t}(e);r&&D(e.extendOptions,r),(t=e.options=je(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function dn(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(t.indexOf(e[i])>=0||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function hn(e){this._init(e)}function vn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name;var a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=je(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)jt(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)$t(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,H.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=D({},a.options),i[r]=a,a}}function gn(e){return e&&(e.Ctor.options.name||e.tag)}function mn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!f(e)&&e.test(t)}function yn(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=gn(a.componentOptions);s&&!t(s)&&_n(n,o,r,i)}}}function _n(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,y(n,t)}!function(e){e.prototype._init=function(e){var t=this;t._uid=fn++,t._isVue=!0,e&&e._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(t,e):t.$options=je(pn(t.constructor),e||{},t),t._renderProxy=t,t._self=t,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(t),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&vt(e,t)}(t),function(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=gt(t._renderChildren,i),e.$scopedSlots=r,e._c=function(t,n,r,i){return ln(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return ln(e,t,n,r,i,!0)};var o=n&&n.data;Ce(e,"$attrs",o&&o.attrs||r,null,!0),Ce(e,"$listeners",t._parentListeners||r,null,!0)}(t),Et(t,"beforeCreate"),function(e){var t=Wt(e.$options.inject,e);t&&(Te(!1),Object.keys(t).forEach(function(n){Ce(e,n,t[n])}),Te(!0))}(t),Pt(t),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(t),Et(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(hn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Ae,e.prototype.$delete=Se,e.prototype.$watch=function(e,t,n){if(l(t))return Ft(this,e,t,n);(n=n||{}).user=!0;var r=new Nt(this,e,t,n);if(n.immediate)try{t.call(this,r.value)}catch(e){Fe(e,this,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}(hn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;if(t)for(var a,s=o.length;s--;)if((a=o[s])===t||a.fn===t){o.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this._events[e];if(t){t=t.length>1?O(t):t;for(var n=O(arguments,1),r=0,i=t.length;r<i;r++)try{t[r].apply(this,n)}catch(t){Fe(t,this,'event handler for "'+e+'"')}}return this}}(hn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=bt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Et(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Et(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(hn),function(e){Zt(e.prototype),e.prototype.$nextTick=function(e){return Je(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,i=n.render,o=n._parentVnode;o&&(t.$scopedSlots=o.data.scopedSlots||r),t.$vnode=o;try{e=i.call(t._renderProxy,t.$createElement)}catch(n){Fe(n,t,"render"),e=t._vnode}return e instanceof de||(e=ve()),e.parent=o,e}}(hn);var bn=[String,RegExp,Array],wn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:bn,exclude:bn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)_n(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){yn(e,function(e){return mn(t,e)})}),this.$watch("exclude",function(t){yn(e,function(e){return!mn(t,e)})})},render:function(){var e=this.$slots.default,t=ft(e),n=t&&t.componentOptions;if(n){var r=gn(n),i=this.include,o=this.exclude;if(i&&(!r||!mn(i,r))||o&&r&&mn(o,r))return t;var a=this.cache,s=this.keys,u=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[u]?(t.componentInstance=a[u].componentInstance,y(s,u),s.push(u)):(a[u]=t,s.push(u),this.max&&s.length>parseInt(this.max)&&_n(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return F}};Object.defineProperty(e,"config",t),e.util={warn:se,extend:D,mergeOptions:je,defineReactive:Ce},e.set=Ae,e.delete=Se,e.nextTick=Je,e.options=Object.create(null),H.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,D(e.options.components,wn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=je(this.options,e),this}}(e),vn(e),function(e){H.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}(e)}(hn),Object.defineProperty(hn.prototype,"$isServer",{get:ne}),Object.defineProperty(hn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(hn,"FunctionalRenderContext",{value:en}),hn.version="2.5.21";var Tn=v("style,class"),En=v("input,textarea,option,select,progress"),xn=function(e,t,n){return"value"===n&&En(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Cn=v("contenteditable,draggable,spellcheck"),An=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Sn="http://www.w3.org/1999/xlink",On=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Dn=function(e){return On(e)?e.slice(6,e.length):""},In=function(e){return null==e||!1===e};function kn(e){for(var t=e.data,n=e,r=e;o(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=Nn(r.data,t));for(;o(n=n.parent);)n&&n.data&&(t=Nn(t,n.data));return function(e,t){if(o(e)||o(t))return Ln(e,jn(t));return""}(t.staticClass,t.class)}function Nn(e,t){return{staticClass:Ln(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function Ln(e,t){return e?t?e+" "+t:e:t||""}function jn(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=jn(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):u(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Pn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Rn=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),$n=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Hn=function(e){return Rn(e)||$n(e)};function Mn(e){return $n(e)?"svg":"math"===e?"math":void 0}var Fn=Object.create(null);var Wn=v("text,number,password,search,email,tel,url");function qn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var Bn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(Pn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),Un={create:function(e,t){Vn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Vn(e,!0),Vn(t))},destroy:function(e){Vn(e,!0)}};function Vn(e,t){var n=e.data.ref;if(o(n)){var r=e.context,i=e.componentInstance||e.elm,a=r.$refs;t?Array.isArray(a[n])?y(a[n],i):a[n]===i&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])?a[n].indexOf(i)<0&&a[n].push(i):a[n]=[i]:a[n]=i}}var zn=new de("",{},[]),Kn=["create","activate","update","remove","destroy"];function Gn(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=o(n=e.data)&&o(n=n.attrs)&&n.type,i=o(n=t.data)&&o(n=n.attrs)&&n.type;return r===i||Wn(r)&&Wn(i)}(e,t)||a(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&i(t.asyncFactory.error))}function Xn(e,t,n){var r,i,a={};for(r=t;r<=n;++r)o(i=e[r].key)&&(a[i]=r);return a}var Qn={create:Yn,update:Yn,destroy:function(e){Yn(e,zn)}};function Yn(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===zn,a=t===zn,s=Zn(e.data.directives,e.context),u=Zn(t.data.directives,t.context),c=[],l=[];for(n in u)r=s[n],i=u[n],r?(i.oldValue=r.value,tr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(tr(i,"bind",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var f=function(){for(var n=0;n<c.length;n++)tr(c[n],"inserted",t,e)};o?ot(t,"insert",f):f()}l.length&&ot(t,"postpatch",function(){for(var n=0;n<l.length;n++)tr(l[n],"componentUpdated",t,e)});if(!o)for(n in s)u[n]||tr(s[n],"unbind",e,e,a)}(e,t)}var Jn=Object.create(null);function Zn(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=Jn),i[er(r)]=r,r.def=Pe(t.$options,"directives",r.name);return i}function er(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function tr(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Fe(r,n.context,"directive "+e.name+" "+t+" hook")}}var nr=[Un,Qn];function rr(e,t){var n=t.componentOptions;if(!(o(n)&&!1===n.Ctor.options.inheritAttrs||i(e.data.attrs)&&i(t.data.attrs))){var r,a,s=t.elm,u=e.data.attrs||{},c=t.data.attrs||{};for(r in o(c.__ob__)&&(c=t.data.attrs=D({},c)),c)a=c[r],u[r]!==a&&ir(s,r,a);for(r in(X||Y)&&c.value!==u.value&&ir(s,"value",c.value),u)i(c[r])&&(On(r)?s.removeAttributeNS(Sn,Dn(r)):Cn(r)||s.removeAttribute(r))}}function ir(e,t,n){e.tagName.indexOf("-")>-1?or(e,t,n):An(t)?In(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Cn(t)?e.setAttribute(t,In(n)||"false"===n?"false":"true"):On(t)?In(n)?e.removeAttributeNS(Sn,Dn(t)):e.setAttributeNS(Sn,t,n):or(e,t,n)}function or(e,t,n){if(In(n))e.removeAttribute(t);else{if(X&&!Q&&("TEXTAREA"===e.tagName||"INPUT"===e.tagName)&&"placeholder"===t&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var ar={create:rr,update:rr};function sr(e,t){var n=t.elm,r=t.data,a=e.data;if(!(i(r.staticClass)&&i(r.class)&&(i(a)||i(a.staticClass)&&i(a.class)))){var s=kn(t),u=n._transitionClasses;o(u)&&(s=Ln(s,jn(u))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var ur,cr,lr,fr,pr,dr,hr={create:sr,update:sr},vr=/[\w).+\-_$\]]/;function gr(e){var t,n,r,i,o,a=!1,s=!1,u=!1,c=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(u)96===t&&92!==n&&(u=!1);else if(c)47===t&&92!==n&&(c=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var h=r-1,v=void 0;h>=0&&" "===(v=e.charAt(h));h--);v&&vr.test(v)||(c=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):g();function g(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&g(),o)for(r=0;r<o.length;r++)i=mr(i,o[r]);return i}function mr(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function yr(e){console.error("[Vue compiler]: "+e)}function _r(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function br(e,t,n){(e.props||(e.props=[])).push({name:t,value:n}),e.plain=!1}function wr(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n}),e.plain=!1}function Tr(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function Er(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o}),e.plain=!1}function xr(e,t,n,i,o,a){var s;i=i||r,"click"===t&&(i.right?(t="contextmenu",delete i.right):i.middle&&(t="mouseup")),i.capture&&(delete i.capture,t="!"+t),i.once&&(delete i.once,t="~"+t),i.passive&&(delete i.passive,t="&"+t),i.native?(delete i.native,s=e.nativeEvents||(e.nativeEvents={})):s=e.events||(e.events={});var u={value:n.trim()};i!==r&&(u.modifiers=i);var c=s[t];Array.isArray(c)?o?c.unshift(u):c.push(u):s[t]=c?o?[u,c]:[c,u]:u,e.plain=!1}function Cr(e,t,n){var r=Ar(e,":"+t)||Ar(e,"v-bind:"+t);if(null!=r)return gr(r);if(!1!==n){var i=Ar(e,t);if(null!=i)return JSON.stringify(i)}}function Ar(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Sr(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Or(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+a+"}"}}function Or(e,t){var n=function(e){if(e=e.trim(),ur=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<ur-1)return(fr=e.lastIndexOf("."))>-1?{exp:e.slice(0,fr),key:'"'+e.slice(fr+1)+'"'}:{exp:e,key:null};cr=e,fr=pr=dr=0;for(;!Ir();)kr(lr=Dr())?Lr(lr):91===lr&&Nr(lr);return{exp:e.slice(0,pr),key:e.slice(pr+1,dr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Dr(){return cr.charCodeAt(++fr)}function Ir(){return fr>=ur}function kr(e){return 34===e||39===e}function Nr(e){var t=1;for(pr=fr;!Ir();)if(kr(e=Dr()))Lr(e);else if(91===e&&t++,93===e&&t--,0===t){dr=fr;break}}function Lr(e){for(var t=e;!Ir()&&(e=Dr())!==t;);}var jr,Pr="__r",Rr="__c";function $r(e,t,n){var r=jr;return function i(){null!==t.apply(null,arguments)&&Mr(e,i,n,r)}}function Hr(e,t,n,r){var i;t=(i=t)._withTask||(i._withTask=function(){Ge=!0;try{return i.apply(null,arguments)}finally{Ge=!1}}),jr.addEventListener(e,t,ee?{capture:n,passive:r}:n)}function Mr(e,t,n,r){(r||jr).removeEventListener(e,t._withTask||t,n)}function Fr(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};jr=t.elm,function(e){if(o(e[Pr])){var t=X?"change":"input";e[t]=[].concat(e[Pr],e[t]||[]),delete e[Pr]}o(e[Rr])&&(e.change=[].concat(e[Rr],e.change||[]),delete e[Rr])}(n),it(n,r,Hr,Mr,$r,t.context),jr=void 0}}var Wr={create:Fr,update:Fr};function qr(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,r,a=t.elm,s=e.data.domProps||{},u=t.data.domProps||{};for(n in o(u.__ob__)&&(u=t.data.domProps=D({},u)),s)i(u[n])&&(a[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n){a._value=r;var c=i(r)?"":String(r);Br(a,c)&&(a.value=c)}else a[n]=r}}}function Br(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var n=e.value,r=e._vModifiers;if(o(r)){if(r.lazy)return!1;if(r.number)return h(n)!==h(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(e,t))}var Ur={create:qr,update:qr},Vr=w(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function zr(e){var t=Kr(e.style);return e.staticStyle?D(e.staticStyle,t):t}function Kr(e){return Array.isArray(e)?I(e):"string"==typeof e?Vr(e):e}var Gr,Xr=/^--/,Qr=/\s*!important$/,Yr=function(e,t,n){if(Xr.test(t))e.style.setProperty(t,n);else if(Qr.test(n))e.style.setProperty(t,n.replace(Qr,""),"important");else{var r=Zr(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Jr=["Webkit","Moz","ms"],Zr=w(function(e){if(Gr=Gr||document.createElement("div").style,"filter"!==(e=E(e))&&e in Gr)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Jr.length;n++){var r=Jr[n]+t;if(r in Gr)return r}});function ei(e,t){var n=t.data,r=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var a,s,u=t.elm,c=r.staticStyle,l=r.normalizedStyle||r.style||{},f=c||l,p=Kr(t.data.style)||{};t.data.normalizedStyle=o(p.__ob__)?D({},p):p;var d=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=zr(i.data))&&D(r,n);(n=zr(e.data))&&D(r,n);for(var o=e;o=o.parent;)o.data&&(n=zr(o.data))&&D(r,n);return r}(t,!0);for(s in f)i(d[s])&&Yr(u,s,"");for(s in d)(a=d[s])!==f[s]&&Yr(u,s,null==a?"":a)}}var ti={create:ei,update:ei},ni=/\s+/;function ri(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(ni).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function ii(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(ni).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function oi(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&D(t,ai(e.name||"v")),D(t,e),t}return"string"==typeof e?ai(e):void 0}}var ai=w(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),si=V&&!Q,ui="transition",ci="animation",li="transition",fi="transitionend",pi="animation",di="animationend";si&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(li="WebkitTransition",fi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(pi="WebkitAnimation",di="webkitAnimationEnd"));var hi=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function vi(e){hi(function(){hi(e)})}function gi(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),ri(e,t))}function mi(e,t){e._transitionClasses&&y(e._transitionClasses,t),ii(e,t)}function yi(e,t,n){var r=bi(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===ui?fi:di,u=0,c=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++u>=a&&c()};setTimeout(function(){u<a&&c()},o+1),e.addEventListener(s,l)}var _i=/\b(transform|all)(,|$)/;function bi(e,t){var n,r=window.getComputedStyle(e),i=(r[li+"Delay"]||"").split(", "),o=(r[li+"Duration"]||"").split(", "),a=wi(i,o),s=(r[pi+"Delay"]||"").split(", "),u=(r[pi+"Duration"]||"").split(", "),c=wi(s,u),l=0,f=0;return t===ui?a>0&&(n=ui,l=a,f=o.length):t===ci?c>0&&(n=ci,l=c,f=u.length):f=(n=(l=Math.max(a,c))>0?a>c?ui:ci:null)?n===ui?o.length:u.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===ui&&_i.test(r[li+"Property"])}}function wi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Ti(t)+Ti(e[n])}))}function Ti(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ei(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=oi(e.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){for(var a=r.css,s=r.type,c=r.enterClass,l=r.enterToClass,f=r.enterActiveClass,p=r.appearClass,d=r.appearToClass,v=r.appearActiveClass,g=r.beforeEnter,m=r.enter,y=r.afterEnter,_=r.enterCancelled,b=r.beforeAppear,w=r.appear,T=r.afterAppear,E=r.appearCancelled,x=r.duration,C=_t,A=_t.$vnode;A&&A.parent;)C=(A=A.parent).context;var S=!C._isMounted||!e.isRootInsert;if(!S||w||""===w){var O=S&&p?p:c,D=S&&v?v:f,I=S&&d?d:l,k=S&&b||g,N=S&&"function"==typeof w?w:m,L=S&&T||y,j=S&&E||_,P=h(u(x)?x.enter:x);0;var $=!1!==a&&!Q,H=Ai(N),M=n._enterCb=R(function(){$&&(mi(n,I),mi(n,D)),M.cancelled?($&&mi(n,O),j&&j(n)):L&&L(n),n._enterCb=null});e.data.show||ot(e,"insert",function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,M)}),k&&k(n),$&&(gi(n,O),gi(n,D),vi(function(){mi(n,O),M.cancelled||(gi(n,I),H||(Ci(P)?setTimeout(M,P):yi(n,s,M)))})),e.data.show&&(t&&t(),N&&N(n,M)),$||H||M()}}}function xi(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=oi(e.data.transition);if(i(r)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var a=r.css,s=r.type,c=r.leaveClass,l=r.leaveToClass,f=r.leaveActiveClass,p=r.beforeLeave,d=r.leave,v=r.afterLeave,g=r.leaveCancelled,m=r.delayLeave,y=r.duration,_=!1!==a&&!Q,b=Ai(d),w=h(u(y)?y.leave:y);0;var T=n._leaveCb=R(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),_&&(mi(n,l),mi(n,f)),T.cancelled?(_&&mi(n,c),g&&g(n)):(t(),v&&v(n)),n._leaveCb=null});m?m(E):E()}function E(){T.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),p&&p(n),_&&(gi(n,c),gi(n,f),vi(function(){mi(n,c),T.cancelled||(gi(n,l),b||(Ci(w)?setTimeout(T,w):yi(n,s,T)))})),d&&d(n,T),_||b||T())}}function Ci(e){return"number"==typeof e&&!isNaN(e)}function Ai(e){if(i(e))return!1;var t=e.fns;return o(t)?Ai(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Si(e,t){!0!==t.data.show&&Ei(t)}var Oi=function(e){var t,n,r={},u=e.modules,c=e.nodeOps;for(t=0;t<Kn.length;++t)for(r[Kn[t]]=[],n=0;n<u.length;++n)o(u[n][Kn[t]])&&r[Kn[t]].push(u[n][Kn[t]]);function l(e){var t=c.parentNode(e);o(t)&&c.removeChild(t,e)}function f(e,t,n,i,s,u,l){if(o(e.elm)&&o(u)&&(e=u[l]=me(e)),e.isRootInsert=!s,!function(e,t,n,i){var s=e.data;if(o(s)){var u=o(e.componentInstance)&&s.keepAlive;if(o(s=s.hook)&&o(s=s.init)&&s(e,!1),o(e.componentInstance))return p(e,t),d(n,e.elm,i),a(u)&&function(e,t,n,i){for(var a,s=e;s.componentInstance;)if(s=s.componentInstance._vnode,o(a=s.data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](zn,s);t.push(s);break}d(n,e.elm,i)}(e,t,n,i),!0}}(e,t,n,i)){var f=e.data,v=e.children,g=e.tag;o(g)?(e.elm=e.ns?c.createElementNS(e.ns,g):c.createElement(g,e),y(e),h(e,v,t),o(f)&&m(e,t),d(n,e.elm,i)):a(e.isComment)?(e.elm=c.createComment(e.text),d(n,e.elm,i)):(e.elm=c.createTextNode(e.text),d(n,e.elm,i))}}function p(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,g(e)?(m(e,t),y(e)):(Vn(e),t.push(e))}function d(e,t,n){o(e)&&(o(n)?c.parentNode(n)===e&&c.insertBefore(e,t,n):c.appendChild(e,t))}function h(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r);else s(e.text)&&c.appendChild(e.elm,c.createTextNode(String(e.text)))}function g(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return o(e.tag)}function m(e,n){for(var i=0;i<r.create.length;++i)r.create[i](zn,e);o(t=e.data.hook)&&(o(t.create)&&t.create(zn,e),o(t.insert)&&n.push(e))}function y(e){var t;if(o(t=e.fnScopeId))c.setStyleScope(e.elm,t);else for(var n=e;n;)o(t=n.context)&&o(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t),n=n.parent;o(t=_t)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t)}function _(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function b(e){var t,n,i=e.data;if(o(i))for(o(t=i.hook)&&o(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)b(e.children[n])}function w(e,t,n,r){for(;n<=r;++n){var i=t[n];o(i)&&(o(i.tag)?(T(i),b(i)):l(i.elm))}}function T(e,t){if(o(t)||o(e.data)){var n,i=r.remove.length+1;for(o(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&T(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else l(e.elm)}function E(e,t,n,r){for(var i=n;i<r;i++){var a=t[i];if(o(a)&&Gn(e,a))return i}}function x(e,t,n,s,u,l){if(e!==t){o(t.elm)&&o(s)&&(t=s[u]=me(t));var p=t.elm=e.elm;if(a(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?S(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,h=t.data;o(h)&&o(d=h.hook)&&o(d=d.prepatch)&&d(e,t);var v=e.children,m=t.children;if(o(h)&&g(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);o(d=h.hook)&&o(d=d.update)&&d(e,t)}i(t.text)?o(v)&&o(m)?v!==m&&function(e,t,n,r,a){for(var s,u,l,p=0,d=0,h=t.length-1,v=t[0],g=t[h],m=n.length-1,y=n[0],b=n[m],T=!a;p<=h&&d<=m;)i(v)?v=t[++p]:i(g)?g=t[--h]:Gn(v,y)?(x(v,y,r,n,d),v=t[++p],y=n[++d]):Gn(g,b)?(x(g,b,r,n,m),g=t[--h],b=n[--m]):Gn(v,b)?(x(v,b,r,n,m),T&&c.insertBefore(e,v.elm,c.nextSibling(g.elm)),v=t[++p],b=n[--m]):Gn(g,y)?(x(g,y,r,n,d),T&&c.insertBefore(e,g.elm,v.elm),g=t[--h],y=n[++d]):(i(s)&&(s=Xn(t,p,h)),i(u=o(y.key)?s[y.key]:E(y,t,p,h))?f(y,r,e,v.elm,!1,n,d):Gn(l=t[u],y)?(x(l,y,r,n,d),t[u]=void 0,T&&c.insertBefore(e,l.elm,v.elm)):f(y,r,e,v.elm,!1,n,d),y=n[++d]);p>h?_(e,i(n[m+1])?null:n[m+1].elm,n,d,m,r):d>m&&w(0,t,p,h)}(p,v,m,n,l):o(m)?(o(e.text)&&c.setTextContent(p,""),_(p,null,m,0,m.length-1,n)):o(v)?w(0,v,0,v.length-1):o(e.text)&&c.setTextContent(p,""):e.text!==t.text&&c.setTextContent(p,t.text),o(h)&&o(d=h.hook)&&o(d=d.postpatch)&&d(e,t)}}}function C(e,t,n){if(a(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var A=v("attrs,class,staticClass,staticStyle,key");function S(e,t,n,r){var i,s=t.tag,u=t.data,c=t.children;if(r=r||u&&u.pre,t.elm=e,a(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(u)&&(o(i=u.hook)&&o(i=i.init)&&i(t,!0),o(i=t.componentInstance)))return p(t,n),!0;if(o(s)){if(o(c))if(e.hasChildNodes())if(o(i=u)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,d=0;d<c.length;d++){if(!f||!S(f,c[d],n,r)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(t,c,n);if(o(u)){var v=!1;for(var g in u)if(!A(g)){v=!0,m(t,n);break}!v&&u.class&&et(u.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,s){if(!i(t)){var u,l=!1,p=[];if(i(e))l=!0,f(t,p);else{var d=o(e.nodeType);if(!d&&Gn(e,t))x(e,t,p,null,null,s);else{if(d){if(1===e.nodeType&&e.hasAttribute($)&&(e.removeAttribute($),n=!0),a(n)&&S(e,t,p))return C(t,p,!0),e;u=e,e=new de(c.tagName(u).toLowerCase(),{},[],void 0,u)}var h=e.elm,v=c.parentNode(h);if(f(t,p,h._leaveCb?null:v,c.nextSibling(h)),o(t.parent))for(var m=t.parent,y=g(t);m;){for(var _=0;_<r.destroy.length;++_)r.destroy[_](m);if(m.elm=t.elm,y){for(var T=0;T<r.create.length;++T)r.create[T](zn,m);var E=m.data.hook.insert;if(E.merged)for(var A=1;A<E.fns.length;A++)E.fns[A]()}else Vn(m);m=m.parent}o(v)?w(0,[e],0,0):o(e.tag)&&b(e)}}return C(t,p,l),t.elm}o(e)&&b(e)}}({nodeOps:Bn,modules:[ar,hr,Wr,Ur,ti,V?{create:Si,activate:Si,remove:function(e,t){!0!==e.data.show?xi(e,t):t()}}:{}].concat(nr)});Q&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Ri(e,"input")});var Di={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ot(n,"postpatch",function(){Di.componentUpdated(e,t,n)}):Ii(e,t,n.context),e._vOptions=[].map.call(e.options,Li)):("textarea"===n.tag||Wn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",ji),e.addEventListener("compositionend",Pi),e.addEventListener("change",Pi),Q&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ii(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Li);if(i.some(function(e,t){return!j(e,r[t])}))(e.multiple?t.value.some(function(e){return Ni(e,i)}):t.value!==t.oldValue&&Ni(t.value,i))&&Ri(e,"change")}}};function Ii(e,t,n){ki(e,t,n),(X||Y)&&setTimeout(function(){ki(e,t,n)},0)}function ki(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,u=e.options.length;s<u;s++)if(a=e.options[s],i)o=P(r,Li(a))>-1,a.selected!==o&&(a.selected=o);else if(j(Li(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Ni(e,t){return t.every(function(t){return!j(t,e)})}function Li(e){return"_value"in e?e._value:e.value}function ji(e){e.target.composing=!0}function Pi(e){e.target.composing&&(e.target.composing=!1,Ri(e.target,"input"))}function Ri(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function $i(e){return!e.componentInstance||e.data&&e.data.transition?e:$i(e.componentInstance._vnode)}var Hi={model:Di,show:{bind:function(e,t,n){var r=t.value,i=(n=$i(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ei(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=$i(n)).data&&n.data.transition?(n.data.show=!0,r?Ei(n,function(){e.style.display=e.__vOriginalDisplay}):xi(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},Mi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Fi(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Fi(ft(t.children)):e}function Wi(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[E(o)]=i[o];return t}function qi(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var Bi=function(e){return e.tag||lt(e)},Ui=function(e){return"show"===e.name},Vi={name:"transition",props:Mi,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Bi)).length){0;var r=this.mode;0;var i=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;var o=Fi(i);if(!o)return i;if(this._leaving)return qi(e,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:s(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var u=(o.data||(o.data={})).transition=Wi(this),c=this._vnode,l=Fi(c);if(o.data.directives&&o.data.directives.some(Ui)&&(o.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(o,l)&&!lt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=D({},u);if("out-in"===r)return this._leaving=!0,ot(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),qi(e,i);if("in-out"===r){if(lt(o))return c;var p,d=function(){p()};ot(u,"afterEnter",d),ot(u,"enterCancelled",d),ot(f,"delayLeave",function(e){p=e})}}return i}}},zi=D({tag:String,moveClass:String},Mi);function Ki(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Gi(e){e.data.newPos=e.elm.getBoundingClientRect()}function Xi(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete zi.mode;var Qi={Transition:Vi,TransitionGroup:{props:zi,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=bt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Wi(this),s=0;s<i.length;s++){var u=i[s];if(u.tag)if(null!=u.key&&0!==String(u.key).indexOf("__vlist"))o.push(u),n[u.key]=u,(u.data||(u.data={})).transition=a;else;}if(r){for(var c=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?c.push(p):l.push(p)}this.kept=e(t,null,c),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Ki),e.forEach(Gi),e.forEach(Xi),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;gi(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(fi,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(fi,e),n._moveCb=null,mi(n,t))})}}))},methods:{hasMove:function(e,t){if(!si)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){ii(n,e)}),ri(n,t),n.style.display="none",this.$el.appendChild(n);var r=bi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};hn.config.mustUseProp=xn,hn.config.isReservedTag=Hn,hn.config.isReservedAttr=Tn,hn.config.getTagNamespace=Mn,hn.config.isUnknownElement=function(e){if(!V)return!0;if(Hn(e))return!1;if(e=e.toLowerCase(),null!=Fn[e])return Fn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Fn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Fn[e]=/HTMLUnknownElement/.test(t.toString())},D(hn.options.directives,Hi),D(hn.options.components,Qi),hn.prototype.__patch__=V?Oi:k,hn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ve),Et(e,"beforeMount"),r=function(){e._update(e._render(),n)},new Nt(e,r,k,{before:function(){e._isMounted&&!e._isDestroyed&&Et(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Et(e,"mounted")),e}(this,e=e&&V?qn(e):void 0,t)},V&&setTimeout(function(){F.devtools&&re&&re.emit("init",hn)},0);var Yi=/\{\{((?:.|\r?\n)+?)\}\}/g,Ji=/[-.*+?^${}()|[\]\/\\]/g,Zi=w(function(e){var t=e[0].replace(Ji,"\\$&"),n=e[1].replace(Ji,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var eo={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Ar(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Cr(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var to,no={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Ar(e,"style");n&&(e.staticStyle=JSON.stringify(Vr(n)));var r=Cr(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},ro=function(e){return(to=to||document.createElement("div")).innerHTML=e,to.textContent},io=v("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),oo=v("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),ao=v("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),so=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,uo="[a-zA-Z_][\\w\\-\\.]*",co="((?:"+uo+"\\:)?"+uo+")",lo=new RegExp("^<"+co),fo=/^\s*(\/?)>/,po=new RegExp("^<\\/"+co+"[^>]*>"),ho=/^<!DOCTYPE [^>]+>/i,vo=/^<!\--/,go=/^<!\[/,mo=v("script,style,textarea",!0),yo={},_o={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},bo=/&(?:lt|gt|quot|amp);/g,wo=/&(?:lt|gt|quot|amp|#10|#9);/g,To=v("pre,textarea",!0),Eo=function(e,t){return e&&To(e)&&"\n"===t[0]};function xo(e,t){var n=t?wo:bo;return e.replace(n,function(e){return _o[e]})}var Co,Ao,So,Oo,Do,Io,ko,No,Lo=/^@|^v-on:/,jo=/^v-|^@|^:/,Po=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Ro=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,$o=/^\(|\)$/g,Ho=/:(.*)$/,Mo=/^:|^v-bind:/,Fo=/\.[^.]+/g,Wo=w(ro);function qo(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:Go(t),parent:n,children:[]}}function Bo(e,t){Co=t.warn||yr,Io=t.isPreTag||N,ko=t.mustUseProp||N,No=t.getTagNamespace||N,So=_r(t.modules,"transformNode"),Oo=_r(t.modules,"preTransformNode"),Do=_r(t.modules,"postTransformNode"),Ao=t.delimiters;var n,r,i=[],o=!1!==t.preserveWhitespace,a=!1,s=!1;function u(e){e.pre&&(a=!1),Io(e.tag)&&(s=!1);for(var n=0;n<Do.length;n++)Do[n](e,t)}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||N,s=t.canBeLeftOpenTag||N,u=0;e;){if(n=e,r&&mo(r)){var c=0,l=r.toLowerCase(),f=yo[l]||(yo[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=e.replace(f,function(e,n,r){return c=r.length,mo(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Eo(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});u+=e.length-p.length,e=p,A(l,u-c,u)}else{var d=e.indexOf("<");if(0===d){if(vo.test(e)){var h=e.indexOf("--\x3e");if(h>=0){t.shouldKeepComment&&t.comment(e.substring(4,h)),E(h+3);continue}}if(go.test(e)){var v=e.indexOf("]>");if(v>=0){E(v+2);continue}}var g=e.match(ho);if(g){E(g[0].length);continue}var m=e.match(po);if(m){var y=u;E(m[0].length),A(m[1],y,u);continue}var _=x();if(_){C(_),Eo(_.tagName,e)&&E(1);continue}}var b=void 0,w=void 0,T=void 0;if(d>=0){for(w=e.slice(d);!(po.test(w)||lo.test(w)||vo.test(w)||go.test(w)||(T=w.indexOf("<",1))<0);)d+=T,w=e.slice(d);b=e.substring(0,d),E(d)}d<0&&(b=e,e=""),t.chars&&b&&t.chars(b)}if(e===n){t.chars&&t.chars(e);break}}function E(t){u+=t,e=e.substring(t)}function x(){var t=e.match(lo);if(t){var n,r,i={tagName:t[1],attrs:[],start:u};for(E(t[0].length);!(n=e.match(fo))&&(r=e.match(so));)E(r[0].length),i.attrs.push(r);if(n)return i.unarySlash=n[1],E(n[0].length),i.end=u,i}}function C(e){var n=e.tagName,u=e.unarySlash;o&&("p"===r&&ao(n)&&A(r),s(n)&&r===n&&A(n));for(var c=a(n)||!!u,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],h=d[3]||d[4]||d[5]||"",v="a"===n&&"href"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:xo(h,v)}}c||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f}),r=n),t.start&&t.start(n,f,c,e.start,e.end)}function A(e,n,o){var a,s;if(null==n&&(n=u),null==o&&(o=u),e)for(s=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var c=i.length-1;c>=a;c--)t.end&&t.end(i[c].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,o):"p"===s&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}A()}(e,{warn:Co,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,start:function(e,o,c){var l=r&&r.ns||No(e);X&&"svg"===l&&(o=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Xo.test(r.name)||(r.name=r.name.replace(Qo,""),t.push(r))}return t}(o));var f,p=qo(e,o,r);l&&(p.ns=l),"style"!==(f=p).tag&&("script"!==f.tag||f.attrsMap.type&&"text/javascript"!==f.attrsMap.type)||ne()||(p.forbidden=!0);for(var d=0;d<Oo.length;d++)p=Oo[d](p,t)||p;function h(e){0}if(a||(!function(e){null!=Ar(e,"v-pre")&&(e.pre=!0)}(p),p.pre&&(a=!0)),Io(p.tag)&&(s=!0),a?function(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}(p):p.processed||(Vo(p),function(e){var t=Ar(e,"v-if");if(t)e.if=t,zo(e,{exp:t,block:e});else{null!=Ar(e,"v-else")&&(e.else=!0);var n=Ar(e,"v-else-if");n&&(e.elseif=n)}}(p),function(e){null!=Ar(e,"v-once")&&(e.once=!0)}(p),Uo(p,t)),n?i.length||n.if&&(p.elseif||p.else)&&(h(),zo(n,{exp:p.elseif,block:p})):(n=p,h()),r&&!p.forbidden)if(p.elseif||p.else)!function(e,t){var n=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(t.children);n&&n.if&&zo(n,{exp:e.elseif,block:e})}(p,r);else if(p.slotScope){r.plain=!1;var v=p.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[v]=p}else r.children.push(p),p.parent=r;c?u(p):(r=p,i.push(p))},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!s&&e.children.pop(),i.length-=1,r=i[i.length-1],u(e)},chars:function(e){if(r&&(!X||"textarea"!==r.tag||r.attrsMap.placeholder!==e)){var t,n,i=r.children;if(e=s||e.trim()?"script"===(t=r).tag||"style"===t.tag?e:Wo(e):o&&i.length?" ":"")!a&&" "!==e&&(n=function(e,t){var n=t?Zi(t):Yi;if(n.test(e)){for(var r,i,o,a=[],s=[],u=n.lastIndex=0;r=n.exec(e);){(i=r.index)>u&&(s.push(o=e.slice(u,i)),a.push(JSON.stringify(o)));var c=gr(r[1].trim());a.push("_s("+c+")"),s.push({"@binding":c}),u=i+r[0].length}return u<e.length&&(s.push(o=e.slice(u)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,Ao))?i.push({type:2,expression:n.expression,tokens:n.tokens,text:e}):" "===e&&i.length&&" "===i[i.length-1].text||i.push({type:3,text:e})}},comment:function(e){r.children.push({type:3,text:e,isComment:!0})}}),n}function Uo(e,t){var n,r;!function(e){var t=Cr(e,"key");if(t){e.key=t}}(e),e.plain=!e.key&&!e.attrsList.length,(r=Cr(n=e,"ref"))&&(n.ref=r,n.refInFor=function(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(n)),function(e){if("slot"===e.tag)e.slotName=Cr(e,"name");else{var t;"template"===e.tag?(t=Ar(e,"scope"),e.slotScope=t||Ar(e,"slot-scope")):(t=Ar(e,"slot-scope"))&&(e.slotScope=t);var n=Cr(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,"template"===e.tag||e.slotScope||wr(e,"slot",n))}}(e),function(e){var t;(t=Cr(e,"is"))&&(e.component=t);null!=Ar(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<So.length;i++)e=So[i](e,t)||e;!function(e){var t,n,r,i,o,a,s,u=e.attrsList;for(t=0,n=u.length;t<n;t++){if(r=i=u[t].name,o=u[t].value,jo.test(r))if(e.hasBindings=!0,(a=Ko(r))&&(r=r.replace(Fo,"")),Mo.test(r))r=r.replace(Mo,""),o=gr(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=E(r))&&(r="innerHTML")),a.camel&&(r=E(r)),a.sync&&xr(e,"update:"+E(r),Or(o,"$event"))),s||!e.component&&ko(e.tag,e.attrsMap.type,r)?br(e,r,o):wr(e,r,o);else if(Lo.test(r))r=r.replace(Lo,""),xr(e,r,o,a,!1);else{var c=(r=r.replace(jo,"")).match(Ho),l=c&&c[1];l&&(r=r.slice(0,-(l.length+1))),Er(e,r,i,o,l,a)}else wr(e,r,JSON.stringify(o)),!e.component&&"muted"===r&&ko(e.tag,e.attrsMap.type,r)&&br(e,r,"true")}}(e)}function Vo(e){var t;if(t=Ar(e,"v-for")){var n=function(e){var t=e.match(Po);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace($o,""),i=r.match(Ro);i?(n.alias=r.replace(Ro,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&D(e,n)}}function zo(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Ko(e){var t=e.match(Fo);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Go(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var Xo=/^xmlns:NS\d+/,Qo=/^NS\d+:/;function Yo(e){return qo(e.tag,e.attrsList.slice(),e.parent)}var Jo=[eo,no,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Cr(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Ar(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Ar(e,"v-else",!0),s=Ar(e,"v-else-if",!0),u=Yo(e);Vo(u),Tr(u,"type","checkbox"),Uo(u,t),u.processed=!0,u.if="("+n+")==='checkbox'"+o,zo(u,{exp:u.if,block:u});var c=Yo(e);Ar(c,"v-for",!0),Tr(c,"type","radio"),Uo(c,t),zo(u,{exp:"("+n+")==='radio'"+o,block:c});var l=Yo(e);return Ar(l,"v-for",!0),Tr(l,":type",n),Uo(l,t),zo(u,{exp:i,block:l}),a?u.else=!0:s&&(u.elseif=s),u}}}}];var Zo,ea,ta={expectHTML:!0,modules:Jo,directives:{model:function(e,t,n){n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Sr(e,r,i),!1;if("select"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+Or(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),xr(e,"change",r,null,!0)}(e,r,i);else if("input"===o&&"checkbox"===a)!function(e,t,n){var r=n&&n.number,i=Cr(e,"value")||"null",o=Cr(e,"true-value")||"true",a=Cr(e,"false-value")||"false";br(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),xr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Or(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Or(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Or(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===o&&"radio"===a)!function(e,t,n){var r=n&&n.number,i=Cr(e,"value")||"null";br(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),xr(e,"change",Or(t,i),null,!0)}(e,r,i);else if("input"===o||"textarea"===o)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,u=!o&&"range"!==r,c=o?"change":"range"===r?Pr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Or(t,l);u&&(f="if($event.target.composing)return;"+f),br(e,"value","("+t+")"),xr(e,c,f,null,!0),(s||a)&&xr(e,"blur","$forceUpdate()")}(e,r,i);else if(!F.isReservedTag(o))return Sr(e,r,i),!1;return!0},text:function(e,t){t.value&&br(e,"textContent","_s("+t.value+")")},html:function(e,t){t.value&&br(e,"innerHTML","_s("+t.value+")")}},isPreTag:function(e){return"pre"===e},isUnaryTag:io,mustUseProp:xn,canBeLeftOpenTag:oo,isReservedTag:Hn,getTagNamespace:Mn,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(Jo)},na=w(function(e){return v("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))});function ra(e,t){e&&(Zo=na(t.staticKeys||""),ea=t.isReservedTag||N,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||g(e.tag)||!ea(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(Zo)))}(t);if(1===t.type){if(!ea(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var ia=/^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,oa=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,aa={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},sa={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},ua=function(e){return"if("+e+")return null;"},ca={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ua("$event.target !== $event.currentTarget"),ctrl:ua("!$event.ctrlKey"),shift:ua("!$event.shiftKey"),alt:ua("!$event.altKey"),meta:ua("!$event.metaKey"),left:ua("'button' in $event && $event.button !== 0"),middle:ua("'button' in $event && $event.button !== 1"),right:ua("'button' in $event && $event.button !== 2")};function la(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+fa(r,e[r])+",";return n.slice(0,-1)+"}"}function fa(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return fa(e,t)}).join(",")+"]";var n=oa.test(t.value),r=ia.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)if(ca[s])o+=ca[s],aa[s]&&a.push(s);else if("exact"===s){var u=t.modifiers;o+=ua(["ctrl","shift","alt","meta"].filter(function(e){return!u[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=function(e){return"if(!('button' in $event)&&"+e.map(pa).join("&&")+")return null;"}(a)),o&&(i+=o),"function($event){"+i+(n?"return "+t.value+"($event)":r?"return ("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function pa(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=aa[e],r=sa[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var da={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:k},ha=function(e){this.options=e,this.warn=e.warn||yr,this.transforms=_r(e.modules,"transformCode"),this.dataGenFns=_r(e.modules,"genData"),this.directives=D(D({},da),e.directives);var t=e.isReservedTag||N;this.maybeComponent=function(e){return!(t(e.tag)&&!e.component)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function va(e,t){var n=new ha(t);return{render:"with(this){return "+(e?ga(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function ga(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return ma(e,t);if(e.once&&!e.onceProcessed)return ya(e,t);if(e.for&&!e.forProcessed)return function(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";0;return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||ga)(e,t)+"})"}(e,t);if(e.if&&!e.ifProcessed)return _a(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=Ta(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return E(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:Ta(t,n,!0);return"_c("+e+","+ba(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=ba(e,t));var i=e.inlineTemplate?null:Ta(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return Ta(e,t)||"void 0"}function ma(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+ga(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function ya(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return _a(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+ga(e,t)+","+t.onceId+++","+n+")":ga(e,t)}return ma(e,t)}function _a(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?ya(e,n):ga(e,n)}}(e.ifConditions.slice(),t,n,r)}function ba(e,t){var n="{",r=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",u=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var c=t.directives[o.name];c&&(a=!!c(e,o,t.warn)),a&&(u=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(u)return s.slice(0,-1)+"]"}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:{"+Ca(e.attrs)+"},"),e.props&&(n+="domProps:{"+Ca(e.props)+"},"),e.events&&(n+=la(e.events,!1)+","),e.nativeEvents&&(n+=la(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t){return"scopedSlots:_u(["+Object.keys(e).map(function(n){return wa(n,e[n],t)}).join(",")+"])"}(e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];0;if(1===n.type){var r=va(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function wa(e,t,n){return t.for&&!t.forProcessed?function(e,t,n){var r=t.for,i=t.alias,o=t.iterator1?","+t.iterator1:"",a=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+wa(e,t,n)+"})"}(e,t,n):"{key:"+e+",fn:"+("function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?"("+t.if+")?"+(Ta(t,n)||"undefined")+":undefined":Ta(t,n)||"undefined":ga(t,n))+"}")+"}"}function Ta(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var s=n?t.maybeComponent(a)?",1":",0":"";return""+(r||ga)(a,t)+s}var u=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Ea(i)||i.ifConditions&&i.ifConditions.some(function(e){return Ea(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,c=i||xa;return"["+o.map(function(e){return c(e,t)}).join(",")+"]"+(u?","+u:"")}}function Ea(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function xa(e,t){return 1===e.type?ga(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Aa(JSON.stringify(n.text)))+")";var n,r}function Ca(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Aa(r.value)+","}return t.slice(0,-1)}function Aa(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function Sa(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),k}}function Oa(e){var t=Object.create(null);return function(n,r,i){(r=D({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r);var s={},u=[];return s.render=Sa(a.render,u),s.staticRenderFns=a.staticRenderFns.map(function(e){return Sa(e,u)}),t[o]=s}}var Da,Ia,ka=(Da=function(e,t){var n=Bo(e.trim(),t);!1!==t.optimize&&ra(n,t);var r=va(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(r.warn=function(e,t){(t?o:i).push(e)},n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=D(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);var s=Da(t,r);return s.errors=i,s.tips=o,s}return{compile:t,compileToFunctions:Oa(t)}})(ta),Na=(ka.compile,ka.compileToFunctions);function La(e){return(Ia=Ia||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',Ia.innerHTML.indexOf("&#10;")>0}var ja=!!V&&La(!1),Pa=!!V&&La(!0),Ra=w(function(e){var t=qn(e);return t&&t.innerHTML}),$a=hn.prototype.$mount;hn.prototype.$mount=function(e,t){if((e=e&&qn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Ra(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){0;var i=Na(r,{shouldDecodeNewlines:ja,shouldDecodeNewlinesForHref:Pa,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return $a.call(this,e,t)},hn.compile=Na,e.exports=hn}).call(this,n(1),n(37).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(38),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,a,s,u=1,c={},l=!1,f=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){h(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){o.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return c[u]=i,r(u),u++},p.clearImmediate=d}function d(e){delete c[e]}function h(e){if(l)setTimeout(h,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{d(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(1),n(6))},function(e,t,n){"use strict";n.r(t);var r=function(e,t,n,r,i,o,a,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:c}}({mounted:function(){console.log("Component mounted.")}},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-8"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[this._v("Example Component")]),this._v(" "),t("div",{staticClass:"card-body"},[this._v("\n                    I'm an example component.\n                ")])])])])])}],!1,null,null,null);r.options.__file="ExampleComponent.vue";t.default=r.exports},function(e,t){}]);

(function(window, document, $, undefined) {

    $(function() {
        var apexChart = jQuery(".apexchart-wrapper");
    if (apexChart.length > 0) {
        var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

            // analytics1
            var apexdemo1 = jQuery('#apexdemo1')
                if (apexdemo1.length > 0) {
                  var options = {
                    chart: {
                        height: 350,
                        type: 'line',
                        shadow: {
                            enabled: true,
                            color: '#000',
                            top: 18,
                            left: 7,
                            blur: 10,
                            opacity: 1
                        },
                        toolbar: {
                            show: false
                        }
                    },
                    colors: ['#8E54E9', '#2bcbba'],
                    dataLabels: {
                        enabled: true,
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    series: [{
                            name: "High - 2013",
                            data: [28, 29, 33, 36, 32, 32, 33]
                        },
                        {
                            name: "Low - 2013",
                            data: [12, 11, 14, 18, 17, 13, 13]
                        }
                    ],
                    grid: {
                        borderColor: '#e7e7e7',
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    markers: {
                        
                        size: 6
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        title: {
                            text: 'Month'
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Temperature'
                        },
                        min: 5,
                        max: 40
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'right',
                        floating: true,
                        offsetY: -25,
                        offsetX: -5
                    }
                }
        
                var chart = new ApexCharts(
                    document.querySelector("#apexdemo1"),
                    options
                );
        
                chart.render();
                }

                var apexdemo2 = jQuery('#apexdemo2')
                if (apexdemo2.length > 0) {
                  var options = {
                    chart: {
                        height: 350,
                        type: 'line',
                        shadow: {
                            enabled: false,
                            color: '#bbb',
                            top: 3,
                            left: 2,
                            blur: 3,
                            opacity: 1
                        },
                    },
                    stroke: {
                        width: 7,   
                        curve: 'smooth'
                    },
                    series: [{
                        name: 'Likes',
                        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                    }],
                    xaxis: {
                        type: 'datetime',
                        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                    },
                    title: {
                        text: 'Social Media',
                        align: 'left',
                        style: {
                            fontSize: "16px",
                            color: '#666'
                        }
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            gradientToColors: [ '#8E54E9'],
                            shadeIntensity: 1,
                            type: 'horizontal',
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100, 100, 100]
                        },
                    },
                    markers: {
                        size: 4,
                        opacity: 0.9,
                        colors: ["#2bcbba"],
                        strokeColor: "#fff",
                        strokeWidth: 2,
                         
                        hover: {
                            size: 7,
                        }
                    },
                    yaxis: {
                        min: -10,
                        max: 40,
                        title: {
                            text: 'Engagement',
                        },                
                    }
                }
        
               var chart = new ApexCharts(
                    document.querySelector("#apexdemo2"),
                    options
                );
                
                chart.render();
                }

                var apexdemo3 = jQuery('#apexdemo3')
                if (apexdemo3.length > 0) {
                  var options = {
                    chart: {
                        height: 350,
                        type: 'area',
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    series: [{
                        name: 'series1',
                        data: [31, 40, 28, 51, 42, 109, 100]
                    }, {
                        name: 'series2',
                        data: [11, 32, 45, 32, 34, 52, 41]
                    }],
                    colors: ['#8E54E9', '#2bcbba'],
                    xaxis: {
                        type: 'datetime',
                        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],                
                    },
                    tooltip: {
                        x: {
                            format: 'dd/MM/yy HH:mm'
                        },
                    }
                }
        
                var chart = new ApexCharts(
                    document.querySelector("#apexdemo3"),
                    options
                );
        
                chart.render();
                }

                var apexdemo4 = jQuery('#apexdemo4')
                if (apexdemo4.length > 0) {
                  var options = {
                    chart: {
                      height: 350,
                      type: 'area',
                      stacked: true,
                      events: {
                        selection: function(chart, e) {
                          console.log(new Date(e.xaxis.min) )
                        }
                      },
              
                    },
                    colors: ['#8E54E9', '#2bcbba', '#eceef3'],
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                      curve: 'smooth'
                    },
              
                    series: [{
                        name: 'South',
                        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                          min: 10,
                          max: 60
                        })
                      },
                      {
                        name: 'North',
                        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                          min: 10,
                          max: 20
                        })
                      },
                      
                      {
                        name: 'Central',
                        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                          min: 10,
                          max: 15
                        })
                      }
                    ],
                    fill: {
                      type: 'gradient',
                      gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                      }
                    },
                    legend: {
                      position: 'top',
                      horizontalAlign: 'left'
                    },
                    xaxis: {
                      type: 'datetime'
                    },
                  }
              
                  var chart = new ApexCharts(
                    document.querySelector("#apexdemo4"),
                    options
                  );
              
                  chart.render();
              
                  function generateDayWiseTimeSeries(baseval, count, yrange) {
                    var i = 0;
                    var series = [];
                    while (i < count) {
                      var x = baseval;
                      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
              
                      series.push([x, y]);
                      baseval += 86400000;
                      i++;
                    }
                    return series;
                  }
                          
                }

                var apexdemo5 = jQuery('#apexdemo5')
                if (apexdemo5.length > 0) {
                  var options = {
                    chart: {
                        height:420,
                        type: 'bar',
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        }
                    },
                    colors: ['#8E54E9'],
                    dataLabels: {
                        enabled: false
                    },
                    series: [{
                        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                    }],
                    xaxis: {
                        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                    }
                }
        
               var chart = new ApexCharts(
                    document.querySelector("#apexdemo5"),
                    options
                );
                
                chart.render();

                }

                var apexdemo6 = jQuery('#apexdemo6')
                if (apexdemo6.length > 0) {
                  var options = {
                    chart: {
                        height: 420,
                        type: 'bar',
                        stacked: true
                    },
                    colors: ['#8E54E9','#2bcbba'],
                    plotOptions: {
                        bar: {
                            horizontal: true,
                            barHeight: '80%',
                            
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        width: 1,
                        colors: ["#fff"]
                    },
                    series: [{
                        name: 'Males',
                        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
                    },
                    {
                        name: 'Females',
                        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
                    }],
                    grid: {
                        xaxis: {
                            showLines: false
                        }
                    },
                    yaxis: {
                        min: -5,
                        max: 5,
                        title: {
                           // text: 'Age',
                        },
                    },
                    tooltip: {
                        shared: false,
                        x: {
                            formatter: function(val) {
                                return val
                            }
                        },
                        y: {
                            formatter: function(val) {
                                return Math.abs(val) + "%"
                            }
                        }
                    },

                    xaxis: {
                      categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
                      title: {
                          text: 'Percent'
                      },
                      labels: {
                        formatter: function(val) {
                          return Math.abs(Math.round(val)) + "%"
                        }
                      }
                    },
                }
        
               var chart = new ApexCharts(
                    document.querySelector("#apexdemo6"),
                    options
                );
                
                chart.render();
            
                }

                var apexdemo7 = jQuery('#apexdemo7')
                if (apexdemo7.length > 0) {
                  var optionDonut = {
                    chart: {

                        type: 'donut',
                        height: '350'
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    plotOptions: {
                      pie: {
                        donut: {
                          size: '75%',
                        },
                        offsetY: 0,
                      },
                      stroke: {
                        colors: undefined
                      }
                    },
                    colors: ['#8E54E9','#2bcbba','#f7b731','#45aaf2','#e3324c'],

                    series: [21, 23, 19, 14, 6],
                    labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
                  }
                  
                  var donut = new ApexCharts(
                    document.querySelector("#apexdemo7"),
                    optionDonut
                  )
                  donut.render();

                }

                var apexdemo8 = jQuery('#apexdemo8')
                if (apexdemo8.length > 0) {
                  var optionDonut = {
                    chart: {

                        type: 'pie',
                        height: '350'
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    plotOptions: {
                      pie: {
                        donut: {
                          size: '75%',
                        },
                        offsetY: 0,
                      },
                      stroke: {
                        colors: undefined
                      }
                    },
                    colors: ['#8E54E9','#2bcbba','#f7b731','#45aaf2','#e3324c'],

                    series: [21, 23, 19, 14, 6],
                    labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
                  }
                  
                  var donut = new ApexCharts(
                    document.querySelector("#apexdemo8"),
                    optionDonut
                  )
                  donut.render();

                }
                
            // analytics1
            var analytics1 = jQuery('#analytics1')
                if (analytics1.length > 0) {
                    var dataSeries = [
                          [{
                              "date": "2014-01-01",
                              "value": 20000000
                            },
                            {
                              "date": "2014-01-02",
                              "value": 10379978
                            },
                            {
                              "date": "2014-01-03",
                              "value": 30493749
                            },
                            {
                              "date": "2014-01-04",
                              "value": 10785250
                            },
                            {
                              "date": "2014-01-05",
                              "value": 33901904
                            },
                            {
                              "date": "2014-01-06",
                              "value": 11576838
                            },
                            {
                              "date": "2014-01-07",
                              "value": 14413854
                            },
                            {
                              "date": "2014-01-08",
                              "value": 15177211
                            },
                            {
                              "date": "2014-01-09",
                              "value": 16622100
                            },
                            {
                              "date": "2014-01-10",
                              "value": 17381072
                            },
                            {
                              "date": "2014-01-11",
                              "value": 18802310
                            },
                            {
                              "date": "2014-01-12",
                              "value": 15531790
                            },
                            {
                              "date": "2014-01-13",
                              "value": 15748881
                            },
                            {
                              "date": "2014-01-14",
                              "value": 18706437
                            },
                            {
                              "date": "2014-01-15",
                              "value": 19752685
                            },
                            {
                              "date": "2014-01-16",
                              "value": 21016418
                            },
                            {
                              "date": "2014-01-17",
                              "value": 25622924
                            },
                            {
                              "date": "2014-01-18",
                              "value": 25337480
                            },
                            {
                              "date": "2014-01-19",
                              "value": 22258882
                            },
                            {
                              "date": "2014-01-20",
                              "value": 23829538
                            },
                            {
                              "date": "2014-01-21",
                              "value": 24245689
                            },
                            {
                              "date": "2014-01-22",
                              "value": 26429711
                            },
                            {
                              "date": "2014-01-23",
                              "value": 26259017
                            },
                            {
                              "date": "2014-01-24",
                              "value": 25396183
                            },
                            {
                              "date": "2014-01-25",
                              "value": 23107346
                            },
                            {
                              "date": "2014-01-26",
                              "value": 28659852
                            },
                            {
                              "date": "2014-01-27",
                              "value": 25270783
                            },
                            {
                              "date": "2014-01-28",
                              "value": 26270783
                            },
                            {
                              "date": "2014-01-29",
                              "value": 27270783
                            },
                            {
                              "date": "2014-01-30",
                              "value": 28270783
                            },
                            {
                              "date": "2014-01-31",
                              "value": 29270783
                            },
                            {
                              "date": "2014-02-01",
                              "value": 30270783
                            },
                            {
                              "date": "2014-02-02",
                              "value": 31270783
                            },
                            {
                              "date": "2014-02-03",
                              "value": 32270783
                            },
                            {
                              "date": "2014-02-04",
                              "value": 33270783
                            },
                            {
                              "date": "2014-02-05",
                              "value": 28270783
                            },
                            {
                              "date": "2014-02-06",
                              "value": 27270783
                            },
                            {
                              "date": "2014-02-07",
                              "value": 35270783
                            },
                            {
                              "date": "2014-02-08",
                              "value": 34270783
                            },
                            {
                              "date": "2014-02-09",
                              "value": 28270783
                            },
                            {
                              "date": "2014-02-10",
                              "value": 35270783
                            },
                            {
                              "date": "2014-02-11",
                              "value": 36270783
                            },
                            {
                              "date": "2014-02-12",
                              "value": 34127078
                            },
                            {
                              "date": "2014-02-13",
                              "value": 33124078
                            },
                            {
                              "date": "2014-02-14",
                              "value": 36227078
                            },
                            {
                              "date": "2014-02-15",
                              "value": 37827078
                            },
                            {
                              "date": "2014-02-16",
                              "value": 36427073
                            },
                            {
                              "date": "2014-02-17",
                              "value": 37570783
                            },
                            {
                              "date": "2014-02-18",
                              "value": 38627073
                            },
                            {
                              "date": "2014-02-19",
                              "value": 37727078
                            },
                            {
                              "date": "2014-02-20",
                              "value": 38827073
                            },
                            {
                              "date": "2014-02-21",
                              "value": 40927078
                            },
                            {
                              "date": "2014-02-22",
                              "value": 41027078
                            },
                            {
                              "date": "2014-02-23",
                              "value": 42127073
                            },
                            {
                              "date": "2014-02-24",
                              "value": 43220783
                            },
                            {
                              "date": "2014-02-25",
                              "value": 44327078
                            },
                            {
                              "date": "2014-02-26",
                              "value": 40427078
                            },
                            {
                              "date": "2014-02-27",
                              "value": 41027078
                            },
                            {
                              "date": "2014-02-28",
                              "value": 45627078
                            },
                            {
                              "date": "2014-03-01",
                              "value": 44727078
                            },
                            {
                              "date": "2014-03-02",
                              "value": 44227078
                            },
                            {
                              "date": "2014-03-03",
                              "value": 45227078
                            },
                            {
                              "date": "2014-03-04",
                              "value": 46027078
                            },
                            {
                              "date": "2014-03-05",
                              "value": 46927078
                            },
                            {
                              "date": "2014-03-06",
                              "value": 47027078
                            },
                            {
                              "date": "2014-03-07",
                              "value": 46227078
                            },
                            {
                              "date": "2014-03-08",
                              "value": 47027078
                            },
                            {
                              "date": "2014-03-09",
                              "value": 48027078
                            },
                            {
                              "date": "2014-03-10",
                              "value": 47027078
                            },
                            {
                              "date": "2014-03-11",
                              "value": 47027078
                            },
                            {
                              "date": "2014-03-12",
                              "value": 48017078
                            },
                            {
                              "date": "2014-03-13",
                              "value": 48077078
                            },
                            {
                              "date": "2014-03-14",
                              "value": 48087078
                            },
                            {
                              "date": "2014-03-15",
                              "value": 48017078
                            },
                            {
                              "date": "2014-03-16",
                              "value": 48047078
                            },
                            {
                              "date": "2014-03-17",
                              "value": 48067078
                            },
                            {
                              "date": "2014-03-18",
                              "value": 48077078
                            },
                            {
                              "date": "2014-03-19",
                              "value": 48027074
                            },
                            {
                              "date": "2014-03-20",
                              "value": 48927079
                            },
                            {
                              "date": "2014-03-21",
                              "value": 48727071
                            },
                            {
                              "date": "2014-03-22",
                              "value": 48127072
                            },
                            {
                              "date": "2014-03-23",
                              "value": 48527072
                            },
                            {
                              "date": "2014-03-24",
                              "value": 48627027
                            },
                            {
                              "date": "2014-03-25",
                              "value": 48027040
                            },
                            {
                              "date": "2014-03-26",
                              "value": 48027043
                            },
                            {
                              "date": "2014-03-27",
                              "value": 48057022
                            },
                            {
                              "date": "2014-03-28",
                              "value": 49057022
                            },
                            {
                              "date": "2014-03-29",
                              "value": 50057022
                            },
                            {
                              "date": "2014-03-30",
                              "value": 51057022
                            },
                            {
                              "date": "2014-03-31",
                              "value": 52057022
                            },
                            {
                              "date": "2014-04-01",
                              "value": 53057022
                            },
                            {
                              "date": "2014-04-02",
                              "value": 54057022
                            },
                            {
                              "date": "2014-04-03",
                              "value": 52057022
                            },
                            {
                              "date": "2014-04-04",
                              "value": 55057022
                            },
                            {
                              "date": "2014-04-05",
                              "value": 58270783
                            },
                            {
                              "date": "2014-04-06",
                              "value": 56270783
                            },
                            {
                              "date": "2014-04-07",
                              "value": 55270783
                            },
                            {
                              "date": "2014-04-08",
                              "value": 58270783
                            },
                            {
                              "date": "2014-04-09",
                              "value": 59270783
                            },
                            {
                              "date": "2014-04-10",
                              "value": 60270783
                            },
                            {
                              "date": "2014-04-11",
                              "value": 61270783
                            },
                            {
                              "date": "2014-04-12",
                              "value": 62270783
                            },
                            {
                              "date": "2014-04-13",
                              "value": 63270783
                            },
                            {
                              "date": "2014-04-14",
                              "value": 64270783
                            },
                            {
                              "date": "2014-04-15",
                              "value": 65270783
                            },
                            {
                              "date": "2014-04-16",
                              "value": 66270783
                            },
                            {
                              "date": "2014-04-17",
                              "value": 67270783
                            },
                            {
                              "date": "2014-04-18",
                              "value": 68270783
                            },
                            {
                              "date": "2014-04-19",
                              "value": 69270783
                            },
                            {
                              "date": "2014-04-20",
                              "value": 70270783
                            },
                            {
                              "date": "2014-04-21",
                              "value": 71270783
                            },
                            {
                              "date": "2014-04-22",
                              "value": 72270783
                            },
                            {
                              "date": "2014-04-23",
                              "value": 73270783
                            },
                            {
                              "date": "2014-04-24",
                              "value": 74270783
                            },
                            {
                              "date": "2014-04-25",
                              "value": 75270783
                            },
                            {
                              "date": "2014-04-26",
                              "value": 76660783
                            },
                            {
                              "date": "2014-04-27",
                              "value": 77270783
                            },
                            {
                              "date": "2014-04-28",
                              "value": 78370783
                            },
                            {
                              "date": "2014-04-29",
                              "value": 79470783
                            },
                            {
                              "date": "2014-04-30",
                              "value": 80170783
                            }
                          ],
                          [{
                              "date": "2014-01-01",
                              "value": 150000000
                            },
                            {
                              "date": "2014-01-02",
                              "value": 160379978
                            },
                            {
                              "date": "2014-01-03",
                              "value": 170493749
                            },
                            {
                              "date": "2014-01-04",
                              "value": 160785250
                            },
                            {
                              "date": "2014-01-05",
                              "value": 167391904
                            },
                            {
                              "date": "2014-01-06",
                              "value": 161576838
                            },
                            {
                              "date": "2014-01-07",
                              "value": 161413854
                            },
                            {
                              "date": "2014-01-08",
                              "value": 152177211
                            },
                            {
                              "date": "2014-01-09",
                              "value": 143762210
                            },
                            {
                              "date": "2014-01-10",
                              "value": 144381072
                            },
                            {
                              "date": "2014-01-11",
                              "value": 154352310
                            },
                            {
                              "date": "2014-01-12",
                              "value": 165531790
                            },
                            {
                              "date": "2014-01-13",
                              "value": 175748881
                            },
                            {
                              "date": "2014-01-14",
                              "value": 187064037
                            },
                            {
                              "date": "2014-01-15",
                              "value": 197520685
                            },
                            {
                              "date": "2014-01-16",
                              "value": 210176418
                            },
                            {
                              "date": "2014-01-17",
                              "value": 196122924
                            },
                            {
                              "date": "2014-01-18",
                              "value": 207337480
                            },
                            {
                              "date": "2014-01-19",
                              "value": 200258882
                            },
                            {
                              "date": "2014-01-20",
                              "value": 186829538
                            },
                            {
                              "date": "2014-01-21",
                              "value": 192456897
                            },
                            {
                              "date": "2014-01-22",
                              "value": 204299711
                            },
                            {
                              "date": "2014-01-23",
                              "value": 192759017
                            },
                            {
                              "date": "2014-01-24",
                              "value": 203596183
                            },
                            {
                              "date": "2014-01-25",
                              "value": 208107346
                            },
                            {
                              "date": "2014-01-26",
                              "value": 196359852
                            },
                            {
                              "date": "2014-01-27",
                              "value": 192570783
                            },
                            {
                              "date": "2014-01-28",
                              "value": 177967768
                            },
                            {
                              "date": "2014-01-29",
                              "value": 190632803
                            },
                            {
                              "date": "2014-01-30",
                              "value": 203725316
                            },
                            {
                              "date": "2014-01-31",
                              "value": 218226177
                            },
                            {
                              "date": "2014-02-01",
                              "value": 210698669
                            },
                            {
                              "date": "2014-02-02",
                              "value": 217640656
                            },
                            {
                              "date": "2014-02-03",
                              "value": 216142362
                            },
                            {
                              "date": "2014-02-04",
                              "value": 201410971
                            },
                            {
                              "date": "2014-02-05",
                              "value": 196704289
                            },
                            {
                              "date": "2014-02-06",
                              "value": 190436945
                            },
                            {
                              "date": "2014-02-07",
                              "value": 178891686
                            },
                            {
                              "date": "2014-02-08",
                              "value": 171613962
                            },
                            {
                              "date": "2014-02-09",
                              "value": 157579773
                            },
                            {
                              "date": "2014-02-10",
                              "value": 158677098
                            },
                            {
                              "date": "2014-02-11",
                              "value": 147129977
                            },
                            {
                              "date": "2014-02-12",
                              "value": 151561876
                            },
                            {
                              "date": "2014-02-13",
                              "value": 151627421
                            },
                            {
                              "date": "2014-02-14",
                              "value": 143543872
                            },
                            {
                              "date": "2014-02-15",
                              "value": 136581057
                            },
                            {
                              "date": "2014-02-16",
                              "value": 135560715
                            },
                            {
                              "date": "2014-02-17",
                              "value": 122625263
                            },
                            {
                              "date": "2014-02-18",
                              "value": 112091484
                            },
                            {
                              "date": "2014-02-19",
                              "value": 98810329
                            },
                            {
                              "date": "2014-02-20",
                              "value": 99882912
                            },
                            {
                              "date": "2014-02-21",
                              "value": 94943095
                            },
                            {
                              "date": "2014-02-22",
                              "value": 104875743
                            },
                            {
                              "date": "2014-02-23",
                              "value": 116383678
                            },
                            {
                              "date": "2014-02-24",
                              "value": 125028841
                            },
                            {
                              "date": "2014-02-25",
                              "value": 123967310
                            },
                            {
                              "date": "2014-02-26",
                              "value": 133167029
                            },
                            {
                              "date": "2014-02-27",
                              "value": 128577263
                            },
                            {
                              "date": "2014-02-28",
                              "value": 115836969
                            },
                            {
                              "date": "2014-03-01",
                              "value": 119264529
                            },
                            {
                              "date": "2014-03-02",
                              "value": 109363374
                            },
                            {
                              "date": "2014-03-03",
                              "value": 113985628
                            },
                            {
                              "date": "2014-03-04",
                              "value": 114650999
                            },
                            {
                              "date": "2014-03-05",
                              "value": 110866108
                            },
                            {
                              "date": "2014-03-06",
                              "value": 96473454
                            },
                            {
                              "date": "2014-03-07",
                              "value": 104075886
                            },
                            {
                              "date": "2014-03-08",
                              "value": 103568384
                            },
                            {
                              "date": "2014-03-09",
                              "value": 101534883
                            },
                            {
                              "date": "2014-03-10",
                              "value": 115825447
                            },
                            {
                              "date": "2014-03-11",
                              "value": 126133916
                            },
                            {
                              "date": "2014-03-12",
                              "value": 116502109
                            },
                            {
                              "date": "2014-03-13",
                              "value": 130169411
                            },
                            {
                              "date": "2014-03-14",
                              "value": 124296886
                            },
                            {
                              "date": "2014-03-15",
                              "value": 126347399
                            },
                            {
                              "date": "2014-03-16",
                              "value": 131483669
                            },
                            {
                              "date": "2014-03-17",
                              "value": 142811333
                            },
                            {
                              "date": "2014-03-18",
                              "value": 129675396
                            },
                            {
                              "date": "2014-03-19",
                              "value": 115514483
                            },
                            {
                              "date": "2014-03-20",
                              "value": 117630630
                            },
                            {
                              "date": "2014-03-21",
                              "value": 122340239
                            },
                            {
                              "date": "2014-03-22",
                              "value": 132349091
                            },
                            {
                              "date": "2014-03-23",
                              "value": 125613305
                            },
                            {
                              "date": "2014-03-24",
                              "value": 135592466
                            },
                            {
                              "date": "2014-03-25",
                              "value": 123408762
                            },
                            {
                              "date": "2014-03-26",
                              "value": 111991454
                            },
                            {
                              "date": "2014-03-27",
                              "value": 116123955
                            },
                            {
                              "date": "2014-03-28",
                              "value": 112817214
                            },
                            {
                              "date": "2014-03-29",
                              "value": 113029590
                            },
                            {
                              "date": "2014-03-30",
                              "value": 108753398
                            },
                            {
                              "date": "2014-03-31",
                              "value": 99383763
                            },
                            {
                              "date": "2014-04-01",
                              "value": 100151737
                            },
                            {
                              "date": "2014-04-02",
                              "value": 94985209
                            },
                            {
                              "date": "2014-04-03",
                              "value": 82913669
                            },
                            {
                              "date": "2014-04-04",
                              "value": 78748268
                            },
                            {
                              "date": "2014-04-05",
                              "value": 63829135
                            },
                            {
                              "date": "2014-04-06",
                              "value": 78694727
                            },
                            {
                              "date": "2014-04-07",
                              "value": 80868994
                            },
                            {
                              "date": "2014-04-08",
                              "value": 93799013
                            },
                            {
                              "date": "2014-04-09",
                              "value": 99042416
                            },
                            {
                              "date": "2014-04-10",
                              "value": 97298692
                            },
                            {
                              "date": "2014-04-11",
                              "value": 83353499
                            },
                            {
                              "date": "2014-04-12",
                              "value": 71248129
                            },
                            {
                              "date": "2014-04-13",
                              "value": 75253744
                            },
                            {
                              "date": "2014-04-14",
                              "value": 68976648
                            },
                            {
                              "date": "2014-04-15",
                              "value": 71002284
                            },
                            {
                              "date": "2014-04-16",
                              "value": 75052401
                            },
                            {
                              "date": "2014-04-17",
                              "value": 83894030
                            },
                            {
                              "date": "2014-04-18",
                              "value": 90236528
                            },
                            {
                              "date": "2014-04-19",
                              "value": 99739114
                            },
                            {
                              "date": "2014-04-20",
                              "value": 96407136
                            },
                            {
                              "date": "2014-04-21",
                              "value": 108323177
                            },
                            {
                              "date": "2014-04-22",
                              "value": 101578914
                            },
                            {
                              "date": "2014-04-23",
                              "value": 115877608
                            },
                            {
                              "date": "2014-04-24",
                              "value": 112088857
                            },
                            {
                              "date": "2014-04-25",
                              "value": 112071353
                            },
                            {
                              "date": "2014-04-26",
                              "value": 101790062
                            },
                            {
                              "date": "2014-04-27",
                              "value": 115003761
                            },
                            {
                              "date": "2014-04-28",
                              "value": 120457727
                            },
                            {
                              "date": "2014-04-29",
                              "value": 118253926
                            },
                            {
                              "date": "2014-04-30",
                              "value": 117956992
                            }
                          ],
                          [{
                              "date": "2014-01-01",
                              "value": 50000000
                            },
                            {
                              "date": "2014-01-02",
                              "value": 60379978
                            },
                            {
                              "date": "2014-01-03",
                              "value": 40493749
                            },
                            {
                              "date": "2014-01-04",
                              "value": 60785250
                            },
                            {
                              "date": "2014-01-05",
                              "value": 67391904
                            },
                            {
                              "date": "2014-01-06",
                              "value": 61576838
                            },
                            {
                              "date": "2014-01-07",
                              "value": 61413854
                            },
                            {
                              "date": "2014-01-08",
                              "value": 82177211
                            },
                            {
                              "date": "2014-01-09",
                              "value": 103762210
                            },
                            {
                              "date": "2014-01-10",
                              "value": 84381072
                            },
                            {
                              "date": "2014-01-11",
                              "value": 54352310
                            },
                            {
                              "date": "2014-01-12",
                              "value": 65531790
                            },
                            {
                              "date": "2014-01-13",
                              "value": 75748881
                            },
                            {
                              "date": "2014-01-14",
                              "value": 47064037
                            },
                            {
                              "date": "2014-01-15",
                              "value": 67520685
                            },
                            {
                              "date": "2014-01-16",
                              "value": 60176418
                            },
                            {
                              "date": "2014-01-17",
                              "value": 66122924
                            },
                            {
                              "date": "2014-01-18",
                              "value": 57337480
                            },
                            {
                              "date": "2014-01-19",
                              "value": 100258882
                            },
                            {
                              "date": "2014-01-20",
                              "value": 46829538
                            },
                            {
                              "date": "2014-01-21",
                              "value": 92456897
                            },
                            {
                              "date": "2014-01-22",
                              "value": 94299711
                            },
                            {
                              "date": "2014-01-23",
                              "value": 62759017
                            },
                            {
                              "date": "2014-01-24",
                              "value": 103596183
                            },
                            {
                              "date": "2014-01-25",
                              "value": 108107346
                            },
                            {
                              "date": "2014-01-26",
                              "value": 66359852
                            },
                            {
                              "date": "2014-01-27",
                              "value": 62570783
                            },
                            {
                              "date": "2014-01-28",
                              "value": 77967768
                            },
                            {
                              "date": "2014-01-29",
                              "value": 60632803
                            },
                            {
                              "date": "2014-01-30",
                              "value": 103725316
                            },
                            {
                              "date": "2014-01-31",
                              "value": 98226177
                            },
                            {
                              "date": "2014-02-01",
                              "value": 60698669
                            },
                            {
                              "date": "2014-02-02",
                              "value": 67640656
                            },
                            {
                              "date": "2014-02-03",
                              "value": 66142362
                            },
                            {
                              "date": "2014-02-04",
                              "value": 101410971
                            },
                            {
                              "date": "2014-02-05",
                              "value": 66704289
                            },
                            {
                              "date": "2014-02-06",
                              "value": 60436945
                            },
                            {
                              "date": "2014-02-07",
                              "value": 78891686
                            },
                            {
                              "date": "2014-02-08",
                              "value": 71613962
                            },
                            {
                              "date": "2014-02-09",
                              "value": 107579773
                            },
                            {
                              "date": "2014-02-10",
                              "value": 58677098
                            },
                            {
                              "date": "2014-02-11",
                              "value": 87129977
                            },
                            {
                              "date": "2014-02-12",
                              "value": 51561876
                            },
                            {
                              "date": "2014-02-13",
                              "value": 51627421
                            },
                            {
                              "date": "2014-02-14",
                              "value": 83543872
                            },
                            {
                              "date": "2014-02-15",
                              "value": 66581057
                            },
                            {
                              "date": "2014-02-16",
                              "value": 65560715
                            },
                            {
                              "date": "2014-02-17",
                              "value": 62625263
                            },
                            {
                              "date": "2014-02-18",
                              "value": 92091484
                            },
                            {
                              "date": "2014-02-19",
                              "value": 48810329
                            },
                            {
                              "date": "2014-02-20",
                              "value": 49882912
                            },
                            {
                              "date": "2014-02-21",
                              "value": 44943095
                            },
                            {
                              "date": "2014-02-22",
                              "value": 104875743
                            },
                            {
                              "date": "2014-02-23",
                              "value": 96383678
                            },
                            {
                              "date": "2014-02-24",
                              "value": 105028841
                            },
                            {
                              "date": "2014-02-25",
                              "value": 63967310
                            },
                            {
                              "date": "2014-02-26",
                              "value": 63167029
                            },
                            {
                              "date": "2014-02-27",
                              "value": 68577263
                            },
                            {
                              "date": "2014-02-28",
                              "value": 95836969
                            },
                            {
                              "date": "2014-03-01",
                              "value": 99264529
                            },
                            {
                              "date": "2014-03-02",
                              "value": 109363374
                            },
                            {
                              "date": "2014-03-03",
                              "value": 93985628
                            },
                            {
                              "date": "2014-03-04",
                              "value": 94650999
                            },
                            {
                              "date": "2014-03-05",
                              "value": 90866108
                            },
                            {
                              "date": "2014-03-06",
                              "value": 46473454
                            },
                            {
                              "date": "2014-03-07",
                              "value": 84075886
                            },
                            {
                              "date": "2014-03-08",
                              "value": 103568384
                            },
                            {
                              "date": "2014-03-09",
                              "value": 101534883
                            },
                            {
                              "date": "2014-03-10",
                              "value": 95825447
                            },
                            {
                              "date": "2014-03-11",
                              "value": 66133916
                            },
                            {
                              "date": "2014-03-12",
                              "value": 96502109
                            },
                            {
                              "date": "2014-03-13",
                              "value": 80169411
                            },
                            {
                              "date": "2014-03-14",
                              "value": 84296886
                            },
                            {
                              "date": "2014-03-15",
                              "value": 86347399
                            },
                            {
                              "date": "2014-03-16",
                              "value": 31483669
                            },
                            {
                              "date": "2014-03-17",
                              "value": 82811333
                            },
                            {
                              "date": "2014-03-18",
                              "value": 89675396
                            },
                            {
                              "date": "2014-03-19",
                              "value": 95514483
                            },
                            {
                              "date": "2014-03-20",
                              "value": 97630630
                            },
                            {
                              "date": "2014-03-21",
                              "value": 62340239
                            },
                            {
                              "date": "2014-03-22",
                              "value": 62349091
                            },
                            {
                              "date": "2014-03-23",
                              "value": 65613305
                            },
                            {
                              "date": "2014-03-24",
                              "value": 65592466
                            },
                            {
                              "date": "2014-03-25",
                              "value": 63408762
                            },
                            {
                              "date": "2014-03-26",
                              "value": 91991454
                            },
                            {
                              "date": "2014-03-27",
                              "value": 96123955
                            },
                            {
                              "date": "2014-03-28",
                              "value": 92817214
                            },
                            {
                              "date": "2014-03-29",
                              "value": 93029590
                            },
                            {
                              "date": "2014-03-30",
                              "value": 108753398
                            },
                            {
                              "date": "2014-03-31",
                              "value": 49383763
                            },
                            {
                              "date": "2014-04-01",
                              "value": 100151737
                            },
                            {
                              "date": "2014-04-02",
                              "value": 44985209
                            },
                            {
                              "date": "2014-04-03",
                              "value": 52913669
                            },
                            {
                              "date": "2014-04-04",
                              "value": 48748268
                            },
                            {
                              "date": "2014-04-05",
                              "value": 23829135
                            },
                            {
                              "date": "2014-04-06",
                              "value": 58694727
                            },
                            {
                              "date": "2014-04-07",
                              "value": 50868994
                            },
                            {
                              "date": "2014-04-08",
                              "value": 43799013
                            },
                            {
                              "date": "2014-04-09",
                              "value": 4042416
                            },
                            {
                              "date": "2014-04-10",
                              "value": 47298692
                            },
                            {
                              "date": "2014-04-11",
                              "value": 53353499
                            },
                            {
                              "date": "2014-04-12",
                              "value": 71248129
                            },
                            {
                              "date": "2014-04-13",
                              "value": 75253744
                            },
                            {
                              "date": "2014-04-14",
                              "value": 68976648
                            },
                            {
                              "date": "2014-04-15",
                              "value": 71002284
                            },
                            {
                              "date": "2014-04-16",
                              "value": 75052401
                            },
                            {
                              "date": "2014-04-17",
                              "value": 83894030
                            },
                            {
                              "date": "2014-04-18",
                              "value": 50236528
                            },
                            {
                              "date": "2014-04-19",
                              "value": 59739114
                            },
                            {
                              "date": "2014-04-20",
                              "value": 56407136
                            },
                            {
                              "date": "2014-04-21",
                              "value": 108323177
                            },
                            {
                              "date": "2014-04-22",
                              "value": 101578914
                            },
                            {
                              "date": "2014-04-23",
                              "value": 95877608
                            },
                            {
                              "date": "2014-04-24",
                              "value": 62088857
                            },
                            {
                              "date": "2014-04-25",
                              "value": 92071353
                            },
                            {
                              "date": "2014-04-26",
                              "value": 81790062
                            },
                            {
                              "date": "2014-04-27",
                              "value": 105003761
                            },
                            {
                              "date": "2014-04-28",
                              "value": 100457727
                            },
                            {
                              "date": "2014-04-29",
                              "value": 98253926
                            },
                            {
                              "date": "2014-04-30",
                              "value": 67956992
                            }
                          ]
                        ]
                    var ts2 = 1484418600000;
                    var dates = [];
                    for (var i = 0; i < 120; i++) {
                    ts2 = ts2 + 86400000;
                    var innerArr = [ts2, dataSeries[1][i].value];
                    dates.push(innerArr)
                    }
                    var options = {
                    chart: {
                        type: 'area',
                        stacked: false,
                        height: 300,
                        zoom: {
                        type: 'x',
                        padding: {
                            left: 30,
                            right: 20
                          }
                        },
                        toolbar: {
                            show: true,
                            autoSelected: 'zoom'
                        }
                    },
                    plotOptions: {
                        line: {
                        curve: 'smooth',
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    series: [{
                        name: 'Nifty 50',
                        data: dates
                    }],
                    colors: ['#8E54E9'],
                    fill: {
                        gradient: {
                        enabled: true,
                        shadeIntensity: 0,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 0
                        },
                    },
                    grid: {
                        show: true,
                        borderColor: '#fff',
                    },
                    yaxis: {
                        min: 20000000,
                        max: 250000000,
                        labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                        },
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                            offsetX: -25
                        },
                        
                        axisBorder: {
                            show: false
                        },
                    },
                    tooltip: {
                        shared: false,
                        y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0)
                        }
                        }
                    }
                    }

                    var chart = new ApexCharts(
                    document.querySelector("#analytics1"),
                    options
                    );

                    chart.render();
    
            }
            // anaylytics 2
            var analytics2 = jQuery('#analytics2')
            if (analytics2.length > 0) {
                var optionsBar = {
                  chart: {
                    type: 'bar',
                    height: 250,
                    width: '100%',
                    stacked: true,
                    foreColor: '#999',
                    toolbar: {
                        show: false
                        },
                  },
                  plotOptions: {
                    bar: {
                      dataLabels: {
                        enabled: false
                      },
                      columnWidth: '60%',
                      endingShape: 'rounded'
                    }
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  colors: ["#4776E6", '#eceef3'],
                  series: [{
                    name: "Sessions",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }, {
                    name: "Views",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }],
                  xaxis: {
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false
                    },
                    crosshairs: {
                      show: false
                    },
                    labels: {
                      show: false,
                      style: {
                        fontSize: '14px'
                      }
                    },
                  },
                  grid: {
                    xaxis: {
                      lines: {
                        show: false
                      },
                    },
                    yaxis: {
                      lines: {
                        show: false
                      },
                    }
                  },
                  yaxis: {
                    axisBorder: {
                      show: false
                    },
                    labels: {
                      show: false
                    },
                  },
                  legend: {
                    floating: false,
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -36
                  },
                  title: {
                    text: '10 days left',
                    align: 'left',
                  },
                  tooltip: {
                    shared: true
                  }
                }
                var chartBar = new ApexCharts(document.querySelector('#analytics2'), optionsBar);
                chartBar.render();
             }
            var analytics3 = jQuery('#analytics3')
            if (analytics3.length > 0) {

                    var options = {
                          chart: {
                            height: 200,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [5, 4],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ["#8E54E9", '#2bcbba'],
                          series: [{
                              name: "Total revenue",
                              data: [45, 52, 38, 24, 33, 26, 21, 20]
                            },
                            {
                              name: "Total cost",
                              data: [35, 41, 62, 42, 13, 18, 29, 37]
                            }
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: true,
                                  offsetX: 10,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'],
                   
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " per click"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per click"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          },
                          responsive: [{
                            breakpoint: 480,
                            options: {
                              xaxis: {
                                labels: {
                                  rotate: -45,
                                  hideOverlappingLabels: true,
                                }
                              }
                            },
                          }]
                        }

            var chart = new ApexCharts(
                document.querySelector("#analytics3"),
                options
            );

            chart.render();

        }

        // analytics4
                var analytics4 = jQuery('#analytics4')
                if (analytics4.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#analytics4"),
                    options
                );

                chart.render();
                }

                // analytics5
                var analytics5 = jQuery('#analytics5')
                if (analytics5.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#fb0792'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#analytics5"),
                    options
                );

                chart.render();
                }

                // analytics6
                  var analytics6 = jQuery('#analytics6')
                if (analytics6.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#32b432'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#analytics6"),
                    options
                );

                chart.render();
                }

        // analytics7
        var analytics7 = jQuery('#analytics7')
            if (analytics7.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#8E54E9'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#analytics7"),
                        options
                    );
                    chart.render();
               }

               // analytics8
                var analytics8 = jQuery('#analytics8')
            if (analytics8.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#2bcbba'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#analytics8"),
                        options
                    );
                    chart.render();
               }
               // analytics9
                var analytics9 = jQuery('#analytics9')
            if (analytics9.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#fb0792'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#analytics9"),
                        options
                    );
                    chart.render();
               }

            // analytics10
                var analytics10 = jQuery('#analytics10')
            if (analytics10.length > 0) {

               var optionsDonutTop = {
                      chart: {
                        height: 115,
                        width: 140,
                        type: 'donut',
                      },
                      colors: ['#8E54E9', '#f7b731', '#45aaf2'],
                      labels: ['Redirect Visists', 'New Visits', 'Direct Visits'],
                      series: [456, 256, 128],
                      legend: {
                        show: false
                      },
                      dataLabels: {
                        enabled: false
                      },
                      plotOptions: {
                        pie: {
                          size: 35,
                          donut: {
                            size: '72%',
                          },
                          offsetX: 10,
                          offsetY: -10,
                          dataLabels: {
                            enabled: false
                          },
                        }
                      },
                      responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:250,
                                height:250
                            },
                            plotOptions: {
                                pie: {
                                  size: 70,
                                  donut: {
                                    size: '72%',
                                  },
                                  offsetX: 0,
                                  offsetY: -20,
                                  dataLabels: {
                                    enabled: false
                                  },
                                }
                              },
                        },
                      }]
                    }
                    var chartDonut2 = new ApexCharts(document.querySelector('#analytics10'), optionsDonutTop);
                    chartDonut2.render().then(function () {
                    });
                    }

                // ecommerce
                var ecommerce5 = jQuery('#ecommerce5')
                if (ecommerce5.length > 0) {
                var options = {
                    chart: {
                        height: 340,
                        type: 'bar',
                        toolbar: {
                          show: false,
                        },
                    },
                    colors:['#8E54E9', '#eceef3'],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            endingShape: 'rounded',
                            columnWidth: '40%',
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    series: [{
                        name: 'Annual Sales',
                        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                    }, {
                        name: 'Annual Revenue',
                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                    }],
                    xaxis: {
                        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                        axisBorder: {
                             show: false,
                        },
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                            offsetX: 0,
                        }
                    },
                       yaxis: {
                            labels: {
                                show: false,
                                style: {
                                    colors: ['#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-yaxis-label',
                                }
                            }
                    },
                    fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0.6,
                        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 100]
                    }
                    },
                    legend: {
                        fontFamily: 'Roboto',
                        labels: {
                            colors: ['#949494', '#949494','#949494'],
                            useSeriesColors: false
                        },
                        itemMargin: {
                            horizontal: 20
                        },
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return "$ " + val + " thousands"
                            }
                        }
                    },
                    grid: {
                        show: true,
                        borderColor: '#fff',
                    },
                    responsive: [{
                        breakpoint: 400,
                        options: {
                          plotOptions: {
                            bar: {
                                horizontal: false,
                                endingShape: 'rounded',
                                columnWidth: '70%',
                            },
                        },
                        },
                    }]

                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommerce5"),
                    options
                );

                chart.render();
                }



                var ecommercedemo1 = jQuery('#ecommercedemo1')
                if (ecommercedemo1.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo1"),
                    options
                );

                chart.render();
                }

                var ecommercedemo2 = jQuery('#ecommercedemo2')
                if (ecommercedemo2.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#fbaf54'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo2"),
                    options
                );

                chart.render();
                }

                var ecommercedemo3 = jQuery('#ecommercedemo3')
                if (ecommercedemo3.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#e3324c'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo3"),
                    options
                );

                chart.render();
                }

                var ecommercedemo4 = jQuery('#ecommercedemo4')
                if (ecommercedemo4.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 100,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#32b432'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo4"),
                    options
                );

                chart.render();
                }

                var ecommercedemo5 = jQuery('#ecommercedemo5')
            if (ecommercedemo5.length > 0) {
                var options = {
                    chart: {
                        width: 260,
                        height: 230,
                        type: 'pie',
                    },
                    colors:['#8E54E9','#fbaf54','#4776E6','#e3324c','#444444'],
                    labels: ['Direct', 'Referral', 'Organic Search','Social Network', 'Other Advertising'],
                    series: [44, 55, 13,53,35],
                    legend: {
                        show: false
                    },
                    dataLabels: {
                      enabled: false
                    },
                    responsive: [{
                        breakpoint: 400,
                        options: {
                            chart: {
                                offsetY:0,
                                offsetX:0,
                                width: 250,
                            }
                        },
                    },
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                offsetY:0,
                                offsetX:0,
                                width: 300,
                            }
                        },
                    }]
                }

                var chart = new ApexCharts(
                    document.querySelector("#ecommercedemo5"),
                    options
                );

                chart.render();
              }


                var cardealerdemo1 = jQuery('#cardealerdemo1')
                if (cardealerdemo1.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true
                        }
                      },
                      stroke: {
                        width: '1',
                        curve: 'smooth'
                      },
                      fill: {
                        gradient: {
                            shade: 'light',
                            type: "vertical",
                            shadeIntensity: 0.2,
                            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                            inverseColors: true,
                            opacityFrom: 0.4,
                            opacityTo: .4,
                            stops: [0, 50, 100]
                          }
                      },
                      markers: {
                        style: 'inverted',
                        size: 2
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#ffffff'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#cardealerdemo1"),
                    options
                );

                chart.render();
                }

                var pageview = jQuery('#pageview')
                if (pageview.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [0, 2, 7, 5, 10, 9, 13, 15];

                var options = {
                    chart: {
                        type: 'area',
                        height: 355,
                        width: 600,
                        sparkline: {
                          enabled: true
                        }
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.6,
                          opacityTo: 0.2,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      markers: {
                        strokeColor: '#8E54E9',
                        size: 3
                      },
                      series: [{
                        data: sparklineData
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8E54E9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#pageview"),
                    options
                );

                chart.render();
                }

                 // cardealerdemo2
                var cardealerdemo2 = jQuery('#cardealerdemo2')
                if (cardealerdemo2.length > 0) {
                var options = {
                    chart: {
                        height: 260,
                        type: 'bar',
                        toolbar: {
                          show: false,
                        },
                    },
                    colors:['#8E54E9'],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '16%',
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    series: [{
                        name: 'Annual Revenue',
                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                    }],
                    xaxis: {
                        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                        axisBorder: {
                             show: false,
                        },
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                            offsetX: 0,
                        }
                    },
                       yaxis: {
                            labels: {
                                show: false,
                                style: {
                                    colors: ['#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-yaxis-label',
                                }
                            }
                    },
                    fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0,
                        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 100]
                    }
                    },
                    legend: {
                        fontFamily: 'Roboto',
                        labels: {
                            colors: ['#949494', '#949494','#949494'],
                            useSeriesColors: false
                        }
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return "$ " + val + " thousands"
                            }
                        }
                    },
                    grid: {
                        show: true,
                        borderColor: '#f5f5f5',
                    },
                    responsive: [{
                        breakpoint: 400,
                        options: {
                            yaxis: {
                                show: false
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            plotOptions: {
                                bar: {
                                    horizontal: false,
                                    endingShape: 'rounded',
                                    columnWidth: '90%',
                                },
                            },
                            yaxis: {
                                show: false
                            }
                        },
                    }]

                }

                var chart = new ApexCharts(
                    document.querySelector("#cardealerdemo2"),
                    options
                );

                chart.render();
                }




                // cardealerdemo3
                var cardealerdemo3 = jQuery('#cardealerdemo3')
                if (cardealerdemo3.length > 0) {
                    var options = {
                            chart: {
                                height: 350,
                                type: 'line',
                                shadow: {
                                    enabled: true,
                                    color: '#000',
                                    top: 18,
                                    left: 7,
                                    blur: 10,
                                    opacity: 1
                                },
                                toolbar: {
                                    show: false
                                }
                            },
                            colors: ['#8E54E9', '#4776E6'],
                            dataLabels: {
                                enabled: true,
                            },
                            stroke: {
                                curve: 'smooth'
                            },
                            series: [{
                                    name: "User - 208",
                                    data: [28, 29, 33, 36, 32, 32, 33]
                                },
                                {
                                    name: "Page View - 208",
                                    data: [12, 11, 14, 18, 17, 13, 13]
                                }
                            ],
                            grid: {
                                borderColor: '#dee0ea',
                                row: {
                                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                    opacity: 0.5
                                },
                            },
                            markers: {
                                size: 6
                            },
                            xaxis: {
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
                            },
                            yaxis: {
                                min: 5,
                                max: 40
                            },
                            legend: {
                                show: false,
                                position: 'top',
                                horizontalAlign: 'right',
                                floating: true,
                                offsetY: -25,
                                offsetX: -5
                            }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#cardealerdemo3"),
                        options
                    );

                    chart.render();
                }


                // cardealerdemo4
                var cardealerdemo4 = jQuery('#cardealerdemo4')
                if (cardealerdemo4.length > 0) {
                    var options = {
                        chart: {
                            width: 260,
                            type: 'donut',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        series:[60, 40, 25, 15],
                        labels: ['Direct', 'Referral', 'Organic', 'Social'],
                        colors:['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shade: 'dark',
                                type: "vertical",
                                shadeIntensity: 1,
                                opacityFrom: 1,
                                opacityTo: 1,
                                gradientToColors: ['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                                stops: [0, 90, 100]
                              }
                        },
                        legend: {
                            show: false,
                            position: 'left',
                            horizontalAlign: 'center',
                             fontSize: '14px',
                             itemMargin: {
                                horizontal: 20,
                                vertical: 5
                            },
                        },
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]

                    }

                    var chart = new ApexCharts(
                        document.querySelector("#cardealerdemo4"),
                        options
                    );

                    chart.render();

                    var paper = chart.paper()

            }


             var cardealerdemo5 = jQuery('#cardealerdemo5')
                if (cardealerdemo5.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.9,
                          opacityTo: 0.1,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#d270f9'],
                }
                var chart = new ApexCharts(
                    document.querySelector("#cardealerdemo5"),
                    options
                );

                chart.render();
                }

                // Stock Market
                var stockmarket5 = jQuery('#stockmarket5')
                if (stockmarket5.length > 0) {
                    var ts2 = 1484418600000;
                    var dates = [];
                    var spikes = [5, -5, 3, -3, 8, -8]
                    for (var i = 0; i < 120; i++) {
                    ts2 = ts2 + 86400000;
                    var innerArr = [ts2, dataSeries[1][i].value];
                    dates.push(innerArr)
                    }

                    var options = {
                    chart: {
                        type: 'area',
                        stacked: false,
                        height: 350,
                        zoom: {
                        type: 'x',
                        enabled: true
                        },
                        toolbar: {
                        autoSelected: 'zoom'
                        }
                    },
                    plotOptions: {
                        line: {
                        curve: 'smooth',
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    series: [{
                        name: 'Nifty 50',
                        data: dates
                    }],
                    markers: {
                        size: 0,
                        style: 'full',
                    },
                    colors: ['#8E54E9'],
                    fill: {
                        gradient: {
                        enabled: true,
                        shadeIntensity: 0,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 0
                        },
                    },
                    grid: {
                        show: true,
                        borderColor: '#fff',
                    },
                    yaxis: {
                        min: 20000000,
                        max: 250000000,
                        labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                        },
                        title: {
                        text: 'Price'
                        },
                    },
                    xaxis: {
                        type: 'datetime',
                        labels: {
                            style: {
                                colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                fontSize: '12px',
                                fontFamily: 'Roboto',
                                cssClass: 'apexcharts-xaxis-label',
                            },
                        },
                        axisBorder: {
                            show: false
                        },
                    },
                    tooltip: {
                        shared: false,
                        y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0)
                        }
                        }
                    }
                    }

                    var chart = new ApexCharts(
                    document.querySelector("#stockmarket5"),
                    options
                    );

                    chart.render();
            }
            var stockmarket6 = jQuery('#stockmarket6')
                if (stockmarket6.length > 0) {
                    var options = {
                        chart: {
                            height: 300,
                            type: 'bar',
                            toolbar: {
                            show: false,
                         }
                        },
                        legend: {
                            show: true,
                            position: "top",
                            containerMargin: {
                              top: -20
                            }
                          },
                         plotOptions: {
                            bar: {
                                horizontal: true,
                                barHeight: '20%',

                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        colors: ['#8E54E9'],
                        fill: {
                            gradient: {
                                enabled: true,
                                shade: 'light',
                                type: "vertical",
                                shadeIntensity: 0.1,
                                gradientToColors: undefined,
                                inverseColors: true,
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [50, 0, 100, 100]
                            },
                        },
                        series: [{
                            data: [400, 430, 448, 470, 540, 430, 448]
                        }],
                        grid: {
                            show: true,
                            borderColor: '#fff',
                        },
                        xaxis: {
                            categories: ['Tata', 'Reliance', 'ONGC', 'GAIL', 'Tata Motors', 'ACC', 'Mind Tree'],
                            labels: {
                                style: {
                                    colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-xaxis-label',
                                },
                            },
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                        }
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#stockmarket6"),
                        options
                    );

                    chart.render();
             }

                // stockmarket7
                function generateData(baseval, count, yrange) {
                  var i = 0;
                  var series = [];
                  while (i < count) {
                      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
                      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
                      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

                      series.push([x, y, z]);
                      baseval += 86400000;
                      i++;
                  }
                  return series;
              }
                var stockmarket7 = jQuery('#stockmarket7')
                      if (stockmarket7.length > 0) {
                      
                    var options = {
                        chart: {
                            height: 390,
                            type: 'bubble',
                            toolbar: {
                        show: false
                        },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        legend: {
                            show: false,
                            position: "top",
                            containerMargin: {
                              top: -20
                            }
                          },
                        series: [{
                                name: 'Actual',
                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 12, {
                                    min: 10,
                                    max: 60
                                })
                            },
                            {
                                name: 'Budget',
                                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 12, {
                                    min: 10,
                                    max: 60
                                })
                            }
                        ],
                         colors: ['#8E54E9', '#45aaf2'],
                        fill: {
                            opacity: 0.8,

                            gradient: {
                                enabled: false
                            }
                        },
                        xaxis: {
                            tickAmount: 12,
                            type: 'category',
                            axisBorder: {
                              show: false
                            },
                            label: {
                              offsetX: 10
                            }
                        },
                        yaxis: {
                            max: 70
                        }
                    }

                    var chart = new ApexCharts(
                        document.querySelector("#stockmarket7"),
                        options
                    );

                    chart.render();

                }


            // stockmarketdemo1
             var stockmarketdemo1 = jQuery('#stockmarketdemo1')
            if (stockmarketdemo1.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fb0792'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 1, 2, 3, 2, 1, 3, 8, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo1"),
                options
            );

            chart.render();

        }

             var stockmarketdemo2 = jQuery('#stockmarketdemo2')
            if (stockmarketdemo2.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#8E54E9'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3, 2, 1, 3, 2, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo2"),
                options
            );

            chart.render();

        }
         var stockmarketdemo3 = jQuery('#stockmarketdemo3')
            if (stockmarketdemo3.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fd9644'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 1, 2, 8, 2, 1, 3, 1, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo3"),
                options
            );

            chart.render();

        }
         var stockmarketdemo4 = jQuery('#stockmarketdemo4')
            if (stockmarketdemo4.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [2],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#2bcbba'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 8, 1, 3, 1, 2, 3, 2, 1, 3, 4, 2, 3, 1,]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#stockmarketdemo4"),
                options
            );

            chart.render();

        }

            var stockmarketdemo5 = jQuery('#stockmarketdemo5')
                if (stockmarketdemo5.length > 0) {
                    var options = {
                        chart: {
                            type: 'bar',
                            height: 100,
                            sparkline: {
                              enabled: true
                            }
                          },
                          plotOptions: {
                            bar: {
                              columnWidth: '80%'
                            }
                          },
                          colors:['#8E54E9'],
                          series: [{
                            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54,44, 12, 36, 9, 54, 66, 41, 89, 63, 25,25, 44, 12, 36, 9, 54,44, 12, 36, 9]
                          }],
                          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                          xaxis: {
                            crosshairs: {
                              width: 1
                            },
                          },
                          tooltip: {
                            fixed: {
                              enabled: false
                            },
                            x: {
                              show: false
                            },
                            y: {
                              title: {
                                formatter: function (seriesName) {
                                  return ''
                                }
                              }
                            },
                            marker: {
                              show: false
                            }
                          }
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#stockmarketdemo5"),
                        options
                    );

                    chart.render();
            }


            // stockmarketdemo6
             var stockmarketdemo6 = jQuery('#stockmarketdemo6')
                if (stockmarketdemo6.length > 0) {
                    var options = {
                            chart: {
                                height: 100,
                                width: 150,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                zoom: {
                                    enabled: false
                                }
                            },
                             colors: ['#ffffff'],
                             markers: {
                                style: 'inverted',
                                size: 1
                              },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            series: [{
                                show: false,
                                name: "Desktops",
                                data: [5, 20, 10, 20, 10, 20, 10]
                            }],
                            title: {
                                align: 'left'
                            },
                            xaxis: {
                                show: false,
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                labels: {
                                    show: false,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            grid: {
                            show: false
                            },
                        }

                var chart = new ApexCharts(
                    document.querySelector("#stockmarketdemo6"),
                    options
                );

                chart.render();
                }
                // stockmarketdemo7
             var stockmarketdemo7 = jQuery('#stockmarketdemo7')
                if (stockmarketdemo7.length > 0) {
                    var options = {
                            chart: {
                                height: 100,
                                width: 150,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                zoom: {
                                    enabled: false
                                }
                            },
                             colors: ['#ffffff'],
                             markers: {
                                style: 'inverted',
                                size: 1
                              },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            series: [{
                                show: false,
                                name: "Desktops",
                                data: [5, 20, 10, 20, 10, 20, 10]
                            }],
                            title: {
                                align: 'left'
                            },
                            xaxis: {
                                show: false,
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                labels: {
                                    show: false,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            grid: {
                            show: false
                            },
                        }

                var chart = new ApexCharts(
                    document.querySelector("#stockmarketdemo7"),
                    options
                );

                chart.render();
                }

                // stockmarketdemo8

                 var stockmarketdemo8 = jQuery('#stockmarketdemo8')
                 if (stockmarketdemo8.length > 0) {
                  var data = generateDayWiseTimeSeries(new Date('10 Feb 2018').getTime(), 185, {
                    min: 30,
                    max: 90
                  })
                  var optionsline2 = {
                    chart: {
                      id: 'stockmarketdemo8',
                      type: 'line',
                      height: 230,
                      toolbar: {
                        autoSelected: 'pan',
                        show: false
                      }
                    },
                    colors: ['#8E54E9'],
                    stroke: {
                      width: 2,
                      curve: 'smooth'
                    },
                    dataLabels: {
                      enabled: false
                    },
                    fill: {
                      opacity: 1,
                    },
                    markers: {
                      size: 0
                    },
                    series: [{
                      data: data
                    }],
                    xaxis: {
                      type: 'datetime'
                    }
                  }

                  var chartline2 = new ApexCharts(
                    document.querySelector("#stockmarketdemo8"),
                    optionsline2
                  );

                  chartline2.render();
              }


            // stockmarketdemo8bottom
             var stockmarketdemo8bottom = jQuery('#stockmarketdemo8bottom')
                if (stockmarketdemo8bottom.length > 0) {
                var options = {
                      chart: {
                        id: 'stockmarketdemo8bottom',
                        height: 130,
                        type: 'area',
                        brush:{
                          target: 'stockmarketdemo8',
                          enabled: true
                        },
                        selection: {
                          enabled: true,
                          xaxis: {
                            min: new Date('19 Jun 2018').getTime(),
                            max: new Date('14 Aug 2018').getTime()
                          }
                        },
                      },
                      colors: ['#8E54E9'],
                      series: [{
                        data: data
                      }],
                      fill: {
                        gradient: {
                          enabled: true,
                          opacityFrom: 0.91,
                          opacityTo: 0.1,
                        }
                      },
                      xaxis: {
                        type: 'datetime',
                        offsetX: 10,
                        tooltip: {
                          enabled: false
                        }
                      },
                      yaxis: {
                        tickAmount: 2
                      }
                    }

                    var chart = new ApexCharts(
                      document.querySelector("#stockmarketdemo8bottom"),
                      options
                    );

                    chart.render();
                }

                function generateDayWiseTimeSeries(baseval, count, yrange) {
                  var i = 0;
                  var series = [];
                  while (i < count) {
                    var x = baseval;
                    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                    series.push([x, y]);
                    baseval += 86400000;
                    i++;
                  }
                  return series;
                }


                 // stockmarketdemo9
             var stockmarketdemo9 = jQuery('#stockmarketdemo9')
                if (stockmarketdemo9.length > 0) {

                    var options = {
                          chart: {
                            height: 354,
                            type: 'line',
                            toolbar: {
                                  show: false,
                                },
                            zoom: {
                              enabled: false
                            },
                            animations: {
                              enabled: false
                            }
                          },
                          colors: ['#45aaf2', '#32b432', '#fd9644'],
                          legend: {
                            show: true,
                            showForSingleSeries: true,
                            showForZeroSeries: true,
                            position: 'top',
                            horizontalAlign: 'right'
                          },
                          stroke: {
                            width: [5,5,4],
                            curve: 'straight'
                          },
                          series: [{
                            name: 'Peter',
                            data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
                          }, {
                            name: 'Johnny',
                            data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
                          }, {
                            name: 'David',
                            data: [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null]
                          }],
                          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                          xaxis: {
                          },
                        }
                        var chart = new ApexCharts(
                          document.querySelector("#stockmarketdemo9"),
                          options
                        );

                        chart.render();
                      }

             // datingdemo1
             var datingdemo1 = jQuery('#datingdemo1')
                    if (datingdemo1.length > 0) {

                       var options = {
                            chart: {
                                height: 440,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                shadow: {
                                    enabled: false,
                                    color: '#bbb',
                                    top: 3,
                                    left: 2,
                                    blur: 3,
                                    opacity: 1
                                },
                            },
                            stroke: {
                                width: 4,
                                curve: 'smooth'
                            },
                            series: [{
                                name: 'Likes',
                                data: [1, 35, 10, 30, 8, 25, 6, 40, 10, 34, 8, 30]
                            }],
                            xaxis: {
                                type: 'datetime',
                                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000'],
                                 labels: {
                                    show: true,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            title: {
                                 align: 'left',
                                style: {
                                    fontSize: "16px",
                                    color: '#666'
                                }
                            },
                            grid: {
                            show: true,
                           borderColor: '#eceef3',
                             },
                            fill: {
                                type: 'gradient',
                                gradient: {
                                    shade: 'dark',
                                    gradientToColors: [ '#ff0792'],
                                    shadeIntensity: 1,
                                    type: 'horizontal',
                                    opacityFrom: 1,
                                    opacityTo: 1,
                                    stops: [0, 100, 100, 100]
                                },
                            },
                            markers: {
                                size: 5,
                                opacity: 0.9,
                                colors: ["#ffffff"],
                                strokeColor: "#ff0792",
                                strokeWidth: 2,

                                hover: {
                                    size: 7,
                                }
                            },
                            yaxis: {
                                min: -10,
                                max: 40,
                                title: {
                                    show: false,
                                },
                                labels: {
                                    show: false,
                                },
                                axisBorder: {
                                     show: false,
                                 },

                            }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#datingdemo1"),
                        options
                    );

                    chart.render();
            }

            // datingdemo2
             var datingdemo2 = jQuery('#datingdemo2')
                if (datingdemo2.length > 0) {
                    var options = {
                        chart: {
                            height: 350,
                            type: 'radialBar',
                        },
                        plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        fontSize: '22px',
                                    },
                                    value: {
                                        fontSize: '16px',
                                    },
                                    total: {
                                        show: true,
                                        label: 'Total',
                                        formatter: function (w) {
                                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                            return 249
                                        }
                                    }
                                }
                            }
                        },
                        fill: {
                            type: 'gradient',
                                gradient: {
                                  shade: 'dark',
                                  type: "vertical",
                                  shadeIntensity: 1,
                                  opacityFrom: 1,
                                  opacityTo:1,
                                  gradientToColors: ['#8E54E9', '#45aaf2' , '#2bcbba'],
                                  stops: [0, 90, 100]
                                }
                          },
                        colors:['#8E54E9','#45aaf2', '#2bcbba'],
                        series: [45, 55, 80],
                        labels: ['Desktop', 'Tablet', 'Mobile'],
                        responsive: [{
                            breakpoint: 400,
                            options: {
                                chart: {
                                    offsetY:0,
                                    offsetX:0,
                                    height: 300,
                                }
                            },
                        }]

                    }

                   var chart = new ApexCharts(
                        document.querySelector("#datingdemo2"),
                        options
                    );

                    chart.render();
            }

            // datingdemo3
            function generateDayWiseTimeSeries(baseval, count, yrange) {
              var i = 0;
              var series = [];
              while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
              }
              return series;
            }

             var datingdemo3 = jQuery('#datingdemo3')
                if (datingdemo3.length > 0) {
                     var options = {
                      chart: {
                        height: 320,
                        type: 'area',
                        stacked: true,
                        toolbar: {
                              show: false,
                            },
                        events: {
                          selection: function(chart, e) {
                            console.log(new Date(e.xaxis.min) )
                          }
                        },

                      },
                      colors: ['#8c66e8', '#8ea4e8', '#efecf1'],
                      dataLabels: {
                          enabled: false
                      },
                      stroke: {
                        curve: 'smooth',
                        width: '4'
                      },
                      series: [{
                          name: 'Male',
                          data: generateDayWiseTimeSeries(new Date('11 Dec 2018 GMT').getTime(), 20, {
                            min: 10,
                            max: 60
                          })
                        },
                        {
                          name: 'Female',
                          data: generateDayWiseTimeSeries(new Date('11 Dec 2018 GMT').getTime(), 20, {
                            min: 10,
                            max: 20
                          })
                        },

                        {
                          name: 'Non Registered',
                          data: generateDayWiseTimeSeries(new Date('11 Dec 2018 GMT').getTime(), 20, {
                            min: 10,
                            max: 15
                          })
                        }
                      ],
                      fill: {
                        gradient: {
                          enabled: true,
                          opacityFrom: 0.9,
                          opacityTo: 0.4,
                        }
                      },
                      legend: {
                        show: false,
                        showForSingleSeries: false,
                        showForZeroSeries: false,
                        position: 'top',
                        horizontalAlign: 'right'
                      },
                      xaxis: {
                        type: 'datetime'
                      },
                       yaxis: {
                        labels: {
                            show: false,
                        },
                        },
                    }

                    /*
                      // this function will generate output in this format
                      // data = [
                          [timestamp, 23],
                          [timestamp, 33],
                          [timestamp, 12]
                          ...
                      ]
                      */
                    
                   var chart = new ApexCharts(
                            document.querySelector("#datingdemo3"),
                            options
                        );

                        chart.render();
                    }

             // datingdemo4
                var datingdemo4 = jQuery('#datingdemo4')
                    if (datingdemo4.length > 0) {
                  var optionsArea = {
                      chart: {
                        height: 340,
                        type: 'area',
                        toolbar: {
                          show: false,
                        },
                        zoom: {
                          enabled: false
                        },
                      },
                      stroke: {
                        curve: 'straight'
                      },
                      colors:['#8E54E9', '#45aaf2'],
                      series: [
                        {
                          name: "Blog",
                          data: [{
                            x: 0,
                            y: 0
                          }, {
                            x: 4,
                            y: 5
                          }, {
                            x: 5,
                            y: 3
                          }, {
                            x: 9,
                            y: 8
                          }, {
                            x: 14,
                            y: 4
                          }, {
                            x: 18,
                            y: 5
                          }, {
                            x: 25,
                            y: 0
                          }]
                        },
                        {
                          name: "External",
                          data: [{
                            x: 0,
                            y: 0
                          }, {
                            x: 2,
                            y: 5
                          }, {
                            x: 5,
                            y: 4
                          }, {
                            x: 10,
                            y: 11
                          }, {
                            x: 14,
                            y: 4
                          }, {
                            x: 18,
                            y: 8
                          }, {
                            x: 25,
                            y: 0
                          }]
                        }
                      ],
                      fill: {
                        opacity: 1,
                        gradient: {
                          enabled: false,
                        }
                      },
                      markers: {
                        size: 0,
                        style: 'hollow',
                        hover: {
                          opacity: 5,
                        }
                      },
                      grid: {
                        show: true,
                       borderColor: '#eceef3',
                         },
                      tooltip: {
                        intersect: true,
                        shared: false,
                      },
                      xaxis: {
                        tooltip: {
                          enabled: false
                        },
                        labels: {
                          show: false
                        },
                        axisBorder: {
                          show: false
                        },
                        axisTicks: {
                          show: false
                        }
                      },
                      yaxis: {
                        tickAmount: 4,
                        max: 12,
                        axisBorder: {
                          show: false
                        },
                        axisTicks: {
                          show: false
                        },
                        labels: {
                          style: {
                            color: '#78909c'
                          }
                        }
                      },
                      legend: {
                        show: false
                      }
                    }

                    var chartArea = new ApexCharts(document.querySelector('#datingdemo4'), optionsArea);
                    chartArea.render();
                   }


              // datingdemo5
                var datingdemo5 = jQuery('#datingdemo5')
                    if (datingdemo5.length > 0) {
                        var options = {
                            chart: {
                                type: 'bar',
                                width: 120,
                                height: 50,
                                sparkline: {
                                  enabled: true
                                }
                              },
                              colors:['#8E54E9'],
                              plotOptions: {
                                bar: {
                                  columnWidth: '20%',
                                   endingShape: 'rounded',
                                }
                              },
                              series: [{
                                data: [15, 55, 60, 69, 53, 35, 54]
                              }],
                              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                              xaxis: {
                                crosshairs: {
                                  width: 1
                                },
                              },
                              tooltip: {
                                fixed: {
                                  enabled: false
                                },
                                x: {
                                  show: false
                                },
                                y: {
                                  title: {
                                    formatter: function (seriesName) {
                                      return ''
                                    }
                                  }
                                },
                                marker: {
                                  show: false
                                }
                              },
                              responsive: [{
                                breakpoint: 360,
                                options: {
                                    chart: {
                                        width:60,
                                        height:60
                                    }
                                },
                            },{
                                breakpoint: 480,
                                options: {
                                    chart: {
                                        width:100,
                                        height:80
                                    }
                                },
                            }]
                        }

                      var chart = new ApexCharts(
                                document.querySelector("#datingdemo5"),
                                options
                            );
                            chart.render();
                       }

               // datingdemo6
                var datingdemo6 = jQuery('#datingdemo6')
            if (datingdemo6.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#2bcbba'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#datingdemo6"),
                        options
                    );
                    chart.render();
               }
               // datingdemo7
                var datingdemo7 = jQuery('#datingdemo7')
            if (datingdemo7.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#fb0792'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#datingdemo7"),
                        options
                    );
                    chart.render();
               }

               // datingdemo8
                var datingdemo8 = jQuery('#datingdemo8')
            if (datingdemo8.length > 0) {
                var options = {
                    chart: {
                        type: 'bar',
                        width: 120,
                        height: 50,
                        sparkline: {
                          enabled: true
                        }
                      },
                      colors:['#32b432'],
                      plotOptions: {
                        bar: {
                          columnWidth: '20%',
                           endingShape: 'rounded',
                        }
                      },
                      series: [{
                        data: [15, 55, 60, 69, 53, 35, 54]
                      }],
                      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                      xaxis: {
                        crosshairs: {
                          width: 1
                        },
                      },
                      tooltip: {
                        fixed: {
                          enabled: false
                        },
                        x: {
                          show: false
                        },
                        y: {
                          title: {
                            formatter: function (seriesName) {
                              return ''
                            }
                          }
                        },
                        marker: {
                          show: false
                        }
                      },
                      responsive: [{
                        breakpoint: 360,
                        options: {
                            chart: {
                                width:60,
                                height:60
                            }
                        },
                    },{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width:100,
                                height:80
                            }
                        },
                    }]
                }

              var chart = new ApexCharts(
                        document.querySelector("#datingdemo8"),
                        options
                    );
                    chart.render();
               }

            // Job Portal
            var jobportaldemo1 = jQuery('#jobportaldemo1')
                if (jobportaldemo1.length > 0) {

                    var options = {
                        chart: {
                            height: 350,
                            type: 'bar'
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        colors:['#4776E6'],
                        fill: {
                            type: 'gradient',
                                gradient: {
                                  type: "vertical",
                                  shadeIntensity: 0,
                                  opacityFrom: 1,
                                  opacityTo: 0,
                                  gradientToColors: ['#8E54E9'],
                                  stops: [0, 90, 100]
                                }
                          },
                        series: [{
                            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                        }],
                        grid: {
                            show: true,
                            borderColor: '#fff',
                        },
                        xaxis: {
                            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                            labels: {
                                style: {
                                    colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494', '#949494', '#949494','#949494','#949494'],
                                    fontSize: '12px',
                                    fontFamily: 'Roboto',
                                    cssClass: 'apexcharts-xaxis-label',
                                },
                            },
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                        }
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#jobportaldemo1"),
                        options
                    );

                    chart.render();

            }
            var jobportaldemo2 = jQuery('#jobportaldemo2')
                if (jobportaldemo2.length > 0) {
                    var options = {
                        chart: {
                            width: 260,
                            type: 'donut',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        series:[60, 40, 25, 15],
                        labels: ['Direct', 'Referral', 'Organic', 'Social'],
                        colors:['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shade: 'dark',
                                type: "vertical",
                                shadeIntensity: 1,
                                opacityFrom: 1,
                                opacityTo: 1,
                                gradientToColors: ['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                                stops: [0, 90, 100]
                              }
                        },
                        legend: {
                            show: false,
                            position: 'left',
                            horizontalAlign: 'center',
                             fontSize: '14px',
                             itemMargin: {
                                horizontal: 20,
                                vertical: 5
                            },
                        },
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]

                    }

                    var chart = new ApexCharts(
                        document.querySelector("#jobportaldemo2"),
                        options
                    );

                    chart.render();

                    var paper = chart.paper()

            }

            // jobportaldemo3
             var jobportaldemo3 = jQuery('#jobportaldemo3')
                if (jobportaldemo3.length > 0) {
                    var options = {
                        chart: {
                            height: 280,
                            type: 'radialBar',
                        },
                        plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        fontSize: '18px',
                                    },
                                    value: {
                                        fontSize: '16px',
                                    },
                                    total: {
                                        show: true,
                                        label: 'Total',
                                        formatter: function (w) {
                                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                            return 100 + '%'
                                        }
                                    }
                                }
                            }
                        },
                        fill: {
                            type: 'gradient',
                                gradient: {
                                  shade: 'dark',
                                  type: "vertical",
                                  shadeIntensity: 1,
                                  opacityFrom: 1,
                                  opacityTo:0.5,
                                  gradientToColors: ['#8E54E9', '#4776E6'],
                                  stops: [0, 90, 100]
                                }
                          },
                        colors:['#8E54E9','#4776E6'],
                        series: [45, 55],
                        labels: ['Job Seekers', 'Job Providers'],
                        responsive: [{
                            breakpoint: 400,
                            options: {
                                chart: {
                                    offsetY:0,
                                    offsetX:0,
                                    height: 300,
                                }
                            },
                        }]

                    }

                   var chart = new ApexCharts(
                        document.querySelector("#jobportaldemo3"),
                        options
                    );

                    chart.render();
            }
            // jobportaldemo4
            function generateDayWiseTimeSeries(baseval, count, yrange) {
              var i = 0;
              var series = [];
              while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
              }
              return series;
            }
             var jobportaldemo4 = jQuery('#jobportaldemo4')
                if (jobportaldemo4.length > 0) {
                     var options = {
                          chart: {
                            height: 300,
                            type: 'area',
                            stacked: true,
                            toolbar: {
                                  show: false,
                                },
                            events: {
                              selection: function(chart, e) {
                                console.log(new Date(e.xaxis.min) )
                              }
                            },
                          },
                          colors: ['#e231ad', '#9e06e7', '#efecf1'],
                          dataLabels: {
                              enabled: false
                          },
                          stroke: {
                            curve: 'smooth',
                            width: '4'
                          },
                          series: [{
                              name: 'Applicants',
                              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                min: 10,
                                max: 60
                              })
                            },
                            {
                              name: 'Interviews',
                              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                min: 10,
                                max: 20
                              })
                            },

                            {
                              name: 'Forwards',
                              data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                                min: 10,
                                max: 15
                              })
                            }
                          ],
                          fill: {
                            gradient: {
                              enabled: true,
                              opacityFrom: 0.9,
                              opacityTo: 0.4,
                            }
                          },
                          legend: {
                            show: false,
                            showForSingleSeries: false,
                            showForZeroSeries: false,
                            position: 'top',
                            horizontalAlign: 'right'
                          },
                          xaxis: {
                            type: 'datetime',
                            labels: {
                                offsetX: -5,
                            }
                          },
                           yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            responsive: [{
                              breakpoint: 480,
                              options: {
                                xaxis: {
                                  type: 'datetime',
                                  labels: {
                                      offsetX: 0,
                                  }
                                },
                              },
                          }]
                        }

                        /*
                          // this function will generate output in this format
                          // data = [
                              [timestamp, 23],
                              [timestamp, 33],
                              [timestamp, 12]
                              ...
                          ]
                          */
                       

                       var chart = new ApexCharts(
                                document.querySelector("#jobportaldemo4"),
                                options
                            );

                            chart.render();
                        }

                var jobportaldemo5 = jQuery('#jobportaldemo5')
                if (jobportaldemo5.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

                var options = {
                    chart: {
                        type: 'area',
                        height: 160,
                        sparkline: {
                          enabled: true,
                          offsetY:25,
                          offsetX:25,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 3
                      },
                     fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 0.9,
                          opacityTo: 0.1,
                          stops: [20, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#d270f9'],
                }

                var chart = new ApexCharts(
                    document.querySelector("#jobportaldemo5"),
                    options
                );

                chart.render();
                }


                // jobportaldemo6
             var jobportaldemo6 = jQuery('#jobportaldemo6')
                if (jobportaldemo6.length > 0) {
                    var options = {
                            chart: {
                                height: 200,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                zoom: {
                                    enabled: false
                                }
                            },
                             colors: ['#ffffff'],
                             markers: {
                                style: 'inverted',
                                size: 3
                              },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                curve: 'straight',
                                width: 2
                            },
                            series: [{
                                show: false,
                                name: "Desktops",
                                data: [5, 20, 10, 20, 10, 20, 10]
                            }],
                            title: {
                                align: 'left'
                            },
                            xaxis: {
                                show: false,
                                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                labels: {
                                    show: false,
                                },
                                 axisBorder: {
                                     show: false,
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: false,
                            },
                            },
                            grid: {
                            show: false
                            },
                        }

                var chart = new ApexCharts(
                    document.querySelector("#jobportaldemo6"),
                    options
                );

                chart.render();
                }

                // CRM
                var crmdemo1 = jQuery('#crmdemo1')
                    if (crmdemo1.length > 0) {

                       var options = {
                            chart: {
                                height: 390,
                                type: 'line',
                                toolbar: {
                                  show: false,
                                },
                                shadow: {
                                    enabled: false,
                                    color: '#bbb',
                                    top: 3,
                                    left: 2,
                                    blur: 3,
                                    opacity: 1
                                },
                            },
                            stroke: {
                                width: 4,
                                curve: 'smooth'
                            },
                            series: [{
                                name: 'Likes',
                                data: [1, 35, 10, 30, 8, 25, 6, 40, 10, 34, 8, 30]
                            }],
                            xaxis: {
                                type: 'datetime',
                                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000'],
                                axisBorder: {
                                 show: false,
                             },
                            },
                            title: {
                                 align: 'left',
                                style: {
                                    fontSize: "16px",
                                    color: '#666'
                                }
                            },
                            fill: {
                                type: 'gradient',
                                gradient: {
                                    shade: 'dark',
                                    gradientToColors: [ '#ff0792'],
                                    shadeIntensity: 1,
                                    type: 'horizontal',
                                    opacityFrom: 1,
                                    opacityTo: 1,
                                    stops: [0, 100, 100, 100]
                                },
                            },
                            markers: {
                                size: 5,
                                opacity: 0.9,
                                colors: ["#ffffff"],
                                strokeColor: "#ff0792",
                                strokeWidth: 2,

                                hover: {
                                    size: 7,
                                }
                            },
                            yaxis: {
                                min: -10,
                                max: 40,
                                title: {
                                    show: false,
                                },

                            }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#crmdemo1"),
                        options
                    );

                    chart.render();
            }

            var crmdemo2 = jQuery('#crmdemo2')
                if (crmdemo2.length > 0) {

                    var options = {
                        chart: {
                            height: 400,
                            type: 'bar',
                            toolbar: {
                                  show: false,
                                },
                        },
                        plotOptions: {
                            bar: {
                                 barHeight: '20%',
                                horizontal: true,
                            }
                        },
                        legend: {
                            show: true,
                            position: "top",
                            containerMargin: {
                              top: -10
                            }
                          },
                        grid: {
                        show: true,
                        borderColor: '#ebedf2',
                        },
                        colors:['#8E54E9'],
                        dataLabels: {
                            enabled: false
                        },
                        series: [{
                            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200]
                        }],
                        xaxis: {
                            categories: ['Deal lost', 'Lead', 'Negotiating', 'Qualified', 'Proposal submitted', 'Sale agreed', 'Running projects', 'Closed projects', 'Payment received'],
                            axisBorder: {
                                 show: false,
                             },
                        },
                        
                        responsive: [{
                          breakpoint: 400,
                          options: {
                            chart: {
                              height: 400,
                              type: 'bar',
                              toolbar: {
                                    show: false,
                                  },
                          },
                            plotOptions: {
                              bar: {
                                  horizontal: true,
                              }
                          },
                          
                          },
                      }]
                    }

                   var chart = new ApexCharts(
                        document.querySelector("#crmdemo2"),
                        options
                    );

                    chart.render();
                }


            // Real Estate
            var realestatedemo1 = jQuery('#realestatedemo1')
                if (realestatedemo1.length > 0) {
                       var options = {
                            chart: {
                                height: 340,
                                type: 'area',
                                toolbar: {
                                show: false
                                },
                            },
                            dataLabels: {
                                enabled: false
                            },
                            legend: {
                                offsetY: -10,
                            },
                            colors:['#fb0792', '#8E54E9'],
                            fill: {
                            type: 'gradient',
                                gradient: {
                                  type: "vertical",
                                  shadeIntensity: 0,
                                  opacityFrom: 0.3,
                                  opacityTo: 0.2,
                                  gradientToColors: ['#fbacd9'],
                                  stops: [0, 90, 100]
                                }
                          },
                            stroke: {
                                curve: 'smooth',
                                width: 2
                            },
                            series: [{
                                name: 'Sale income',
                                data: [30, 50, 32, 33, 42, 30, 50, 42, 33, 42, 30, 50, 34]
                            },
                            {
                                name: 'Rent income',
                                data: [20, 30, 22, 23, 32, 20, 30, 22, 23, 32, 20, 30, 24]
                            }],
                            tooltip: {
                                x: {
                                    format: 'dd/MM/yy HH:mm'
                                },
                            },
                            xaxis: {
                                show: true,
                                labels: {
                                    show: true,
                                },
                                 axisBorder: {
                                     color: '#fafbfb',
                                     show: true,
                                 },
                                 axisTicks: {
                                 color: '#fafbfb',
                                 },
                            },
                            yaxis: {
                            labels: {
                                show: true,
                            },
                            axisBorder: {
                                 color: '#fff',
                                 show: true,
                             },
                            },
                            grid: {
                            show: true,
                            borderColor: '#fafbfb',
                            },
                        }
                    var chart = new ApexCharts(
                        document.querySelector("#realestatedemo1"),
                        options
                    );
                    chart.render();
                 }

            var realestatedemo3 = jQuery('#realestatedemo3')
            if (realestatedemo3.length > 0) {
                var optionsBar = {
                  chart: {
                    type: 'bar',
                    height: 250,
                    width: '100%',
                    stacked: true,
                    foreColor: '#999',
                    toolbar: {
                        show: false
                        },
                  },
                  plotOptions: {
                    bar: {
                      dataLabels: {
                        enabled: false
                      },
                      columnWidth: '60%',
                      endingShape: 'rounded'
                    }
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  colors: ["#8E54E9", '#eceef3'],
                  series: [{
                    name: "Sessions",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }, {
                    name: "Views",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19],
                  }],
                  xaxis: {
                    axisBorder: {
                      show: false
                    },
                    axisTicks: {
                      show: false
                    },
                    crosshairs: {
                      show: false
                    },
                    labels: {
                      show: false,
                      style: {
                        fontSize: '14px'
                      }
                    },
                  },
                  grid: {
                    xaxis: {
                      lines: {
                        show: false
                      },
                    },
                    yaxis: {
                      lines: {
                        show: false
                      },
                    }
                  },
                  yaxis: {
                    axisBorder: {
                      show: false
                    },
                    labels: {
                      show: false
                    },
                  },
                  legend: {
                    floating: false,
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -36
                  },
                  title: {
                    text: '10 days left',
                    align: 'left',
                  },
                  tooltip: {
                    shared: true
                  }

                }


                var chartBar = new ApexCharts(document.querySelector('#realestatedemo3'), optionsBar);
                chartBar.render();


                }

            // Crypto Currency
            var cryptodemo1 = jQuery('#crypto-demo1-candlestick')
                if (cryptodemo1.length > 0) {
                    var seriesData = [{
                            x: new Date(2016, 01, 01),
                            y: [51.98, 56.29, 51.59, 53.85]
                          },
                          {
                            x: new Date(2016, 02, 01),
                            y: [53.66, 54.99, 51.35, 52.95]
                          },
                          {
                            x: new Date(2016, 03, 01),
                            y: [52.96, 53.78, 51.54, 52.48]
                          },
                          {
                            x: new Date(2016, 04, 01),
                            y: [52.54, 52.79, 47.88, 49.24]
                          },
                          {
                            x: new Date(2016, 05, 01),
                            y: [49.10, 52.86, 47.70, 52.78]
                          },
                          {
                            x: new Date(2016, 06, 01),
                            y: [52.83, 53.48, 50.32, 52.29]
                          },
                          {
                            x: new Date(2016, 07, 01),
                            y: [52.20, 54.48, 51.64, 52.58]
                          },
                          {
                            x: new Date(2016, 08, 01),
                            y: [52.76, 57.35, 52.15, 57.03]
                          },
                          {
                            x: new Date(2016, 09, 01),
                            y: [57.04, 58.15, 48.88, 56.19]
                          },
                          {
                            x: new Date(2016, 10, 01),
                            y: [56.09, 58.85, 55.48, 58.79]
                          },
                          {
                            x: new Date(2016, 11, 01),
                            y: [58.78, 59.65, 58.23, 59.05]
                          },
                          {
                            x: new Date(2017, 00, 01),
                            y: [59.37, 61.11, 59.35, 60.34]
                          },
                          {
                            x: new Date(2017, 01, 01),
                            y: [60.40, 60.52, 56.71, 56.93]
                          },
                          {
                            x: new Date(2017, 02, 01),
                            y: [57.02, 59.71, 56.04, 56.82]
                          },
                          {
                            x: new Date(2017, 03, 01),
                            y: [56.97, 59.62, 54.77, 59.30]
                          },
                          {
                            x: new Date(2017, 04, 01),
                            y: [59.11, 62.29, 59.10, 59.85]
                          },
                          {
                            x: new Date(2017, 05, 01),
                            y: [59.97, 60.11, 55.66, 58.42]
                          },
                          {
                            x: new Date(2017, 06, 01),
                            y: [58.34, 60.93, 56.75, 57.42]
                          },
                          {
                            x: new Date(2017, 07, 01),
                            y: [57.76, 58.08, 51.18, 54.71]
                          },
                          {
                            x: new Date(2017, 08, 01),
                            y: [54.80, 61.42, 53.18, 57.35]
                          },
                          {
                            x: new Date(2017, 09, 01),
                            y: [57.56, 63.09, 57.00, 62.99]
                          },
                          {
                            x: new Date(2017, 10, 01),
                            y: [62.89, 63.42, 59.72, 61.76]
                          },
                          {
                            x: new Date(2017, 11, 01),
                            y: [61.71, 64.15, 61.29, 63.04]
                          }
                        ]

                        var seriesDataLinear = [{
                            x: new Date(2016, 01, 01),
                            y: 3.85
                          },
                          {
                            x: new Date(2016, 02, 01),
                            y: 2.95
                          },
                          {
                            x: new Date(2016, 03, 01),
                            y: -12.48
                          },
                          {
                            x: new Date(2016, 04, 01),
                            y: 19.24
                          },
                          {
                            x: new Date(2016, 05, 01),
                            y: 12.78
                          },
                          {
                            x: new Date(2016, 06, 01),
                            y: 22.29
                          },
                          {
                            x: new Date(2016, 07, 01),
                            y: -12.58
                          },
                          {
                            x: new Date(2016, 08, 01),
                            y: -17.03
                          },
                          {
                            x: new Date(2016, 09, 01),
                            y: -19.19
                          },
                          {
                            x: new Date(2016, 10, 01),
                            y: -28.79
                          },
                          {
                            x: new Date(2016, 11, 01),
                            y: -39.05
                          },
                          {
                            x: new Date(2017, 00, 01),
                            y: 20.34
                          },
                          {
                            x: new Date(2017, 01, 01),
                            y: 36.93
                          },
                          {
                            x: new Date(2017, 02, 01),
                            y: 36.82
                          },
                          {
                            x: new Date(2017, 03, 01),
                            y: 29.30
                          },
                          {
                            x: new Date(2017, 04, 01),
                            y: 39.85
                          },
                          {
                            x: new Date(2017, 05, 01),
                            y: 28.42
                          },
                          {
                            x: new Date(2017, 06, 01),
                            y: 37.42
                          },
                          {
                            x: new Date(2017, 07, 01),
                            y: 24.71
                          },
                          {
                            x: new Date(2017, 08, 01),
                            y: 37.35
                          },
                          {
                            x: new Date(2017, 09, 01),
                            y: 32.99
                          },
                          {
                            x: new Date(2017, 10, 01),
                            y: 31.76
                          },
                          {
                            x: new Date(2017, 11, 01),
                            y: 43.04
                          }
                        ]

                        var seriesData7 = [{
                            x: new Date(2016, 01, 01),
                            y: [1151.98, 1156.29, 1151.59, 1153.85]
                          },
                          {
                            x: new Date(2016, 02, 01),
                            y: [1153.66, 1154.99, 1151.35, 1152.95]
                          },
                          {
                            x: new Date(2016, 03, 01),
                            y: [1152.96, 1153.78, 1151.54, 1152.48]
                          },
                          {
                            x: new Date(2016, 04, 01),
                            y: [1152.54, 1152.79, 1147.88, 1149.24]
                          },
                          {
                            x: new Date(2016, 05, 01),
                            y: [1149.10, 1152.86, 1147.70, 1152.78]
                          },
                          {
                            x: new Date(2016, 06, 01),
                            y: [1152.83, 1153.48, 1150.32, 1152.29]
                          },
                          {
                            x: new Date(2016, 07, 01),
                            y: [1152.20, 1154.48, 1151.64, 1152.58]
                          },
                          {
                            x: new Date(2016, 08, 01),
                            y: [1152.76, 1157.35, 1152.15, 1157.03]
                          },
                          {
                            x: new Date(2016, 09, 01),
                            y: [1157.04, 1158.15, 1148.88, 1156.19]
                          },
                          {
                            x: new Date(2016, 10, 01),
                            y: [1156.09, 1158.85, 1155.48, 1158.79]
                          },
                          {
                            x: new Date(2016, 11, 01),
                            y: [1158.78, 1159.65, 1158.23, 1159.05]
                          },
                          {
                            x: new Date(2017, 00, 01),
                            y: [1159.37, 1161.11, 1159.35, 1160.34]
                          },
                          {
                            x: new Date(2017, 01, 01),
                            y: [1160.40, 1160.52, 1156.71, 1156.93]
                          },
                          {
                            x: new Date(2017, 02, 01),
                            y: [1157.02, 1159.71, 1156.04, 1156.82]
                          },
                          {
                            x: new Date(2017, 03, 01),
                            y: [1156.97, 1159.62, 1154.77, 1159.30]
                          },
                          {
                            x: new Date(2017, 04, 01),
                            y: [1159.11, 1162.29, 1159.10, 1159.85]
                          },
                          {
                            x: new Date(2017, 05, 01),
                            y: [1159.97, 1160.11, 1155.66, 1158.42]
                          },
                          {
                            x: new Date(2017, 06, 01),
                            y: [1158.34, 1160.93, 1156.75, 1157.42]
                          },
                          {
                            x: new Date(2017, 07, 01),
                            y: [1157.76, 1158.08, 1151.18, 1154.71]
                          },
                          {
                            x: new Date(2017, 08, 01),
                            y: [1154.80, 1161.42, 1153.18, 1157.35]
                          },
                          {
                            x: new Date(2017, 09, 01),
                            y: [1157.56, 1163.09, 1157.00, 1162.99]
                          },
                          {
                            x: new Date(2017, 10, 01),
                            y: [1162.89, 1163.42, 1159.72, 1161.76]
                          },
                          {
                            x: new Date(2017, 11, 01),
                            y: [1161.71, 1164.15, 1161.29, 1163.04]
                          }
                        ]

                        var seriesData2 = [{
                            x: new Date(1538778600000),
                            y: [6629.81, 6650.5, 6623.04, 6633.33]
                          },
                          {
                            x: new Date(1538780400000),
                            y: [6632.01, 6643.59, 6620, 6630.11]
                          },
                          {
                            x: new Date(1538782200000),
                            y: [6630.71, 6648.95, 6623.34, 6635.65]
                          },
                          {
                            x: new Date(1538784000000),
                            y: [6635.65, 6651, 6629.67, 6638.24]
                          },
                          {
                            x: new Date(1538785800000),
                            y: [6638.24, 6640, 6620, 6624.47]
                          },
                          {
                            x: new Date(1538787600000),
                            y: [6624.53, 6636.03, 6621.68, 6624.31]
                          },
                          {
                            x: new Date(1538789400000),
                            y: [6624.61, 6632.2, 6617, 6626.02]
                          },
                          {
                            x: new Date(1538791200000),
                            y: [6627, 6627.62, 6584.22, 6603.02]
                          },
                          {
                            x: new Date(1538793000000),
                            y: [6605, 6608.03, 6598.95, 6604.01]
                          },
                          {
                            x: new Date(1538794800000),
                            y: [6604.5, 6614.4, 6602.26, 6608.02]
                          },
                          {
                            x: new Date(1538796600000),
                            y: [6608.02, 6610.68, 6601.99, 6608.91]
                          },
                          {
                            x: new Date(1538798400000),
                            y: [6608.91, 6618.99, 6608.01, 6612]
                          },
                          {
                            x: new Date(1538800200000),
                            y: [6612, 6615.13, 6605.09, 6612]
                          },
                          {
                            x: new Date(1538802000000),
                            y: [6612, 6624.12, 6608.43, 6622.95]
                          },
                          {
                            x: new Date(1538803800000),
                            y: [6623.91, 6623.91, 6615, 6615.67]
                          },
                          {
                            x: new Date(1538805600000),
                            y: [6618.69, 6618.74, 6610, 6610.4]
                          },
                          {
                            x: new Date(1538807400000),
                            y: [6611, 6622.78, 6610.4, 6614.9]
                          },
                          {
                            x: new Date(1538809200000),
                            y: [6614.9, 6626.2, 6613.33, 6623.45]
                          },
                          {
                            x: new Date(1538811000000),
                            y: [6623.48, 6627, 6618.38, 6620.35]
                          },
                          {
                            x: new Date(1538812800000),
                            y: [6619.43, 6620.35, 6610.05, 6615.53]
                          },
                          {
                            x: new Date(1538814600000),
                            y: [6615.53, 6617.93, 6610, 6615.19]
                          },
                          {
                            x: new Date(1538816400000),
                            y: [6615.19, 6621.6, 6608.2, 6620]
                          },
                          {
                            x: new Date(1538818200000),
                            y: [6619.54, 6625.17, 6614.15, 6620]
                          },
                          {
                            x: new Date(1538820000000),
                            y: [6620.33, 6634.15, 6617.24, 6624.61]
                          },
                          {
                            x: new Date(1538821800000),
                            y: [6625.95, 6626, 6611.66, 6617.58]
                          },
                          {
                            x: new Date(1538823600000),
                            y: [6619, 6625.97, 6595.27, 6598.86]
                          },
                          {
                            x: new Date(1538825400000),
                            y: [6598.86, 6598.88, 6570, 6587.16]
                          },
                          {
                            x: new Date(1538827200000),
                            y: [6588.86, 6600, 6580, 6593.4]
                          },
                          {
                            x: new Date(1538829000000),
                            y: [6593.99, 6598.89, 6585, 6587.81]
                          },
                          {
                            x: new Date(1538830800000),
                            y: [6587.81, 6592.73, 6567.14, 6578]
                          },
                          {
                            x: new Date(1538832600000),
                            y: [6578.35, 6581.72, 6567.39, 6579]
                          },
                          {
                            x: new Date(1538834400000),
                            y: [6579.38, 6580.92, 6566.77, 6575.96]
                          },
                          {
                            x: new Date(1538836200000),
                            y: [6575.96, 6589, 6571.77, 6588.92]
                          },
                          {
                            x: new Date(1538838000000),
                            y: [6588.92, 6594, 6577.55, 6589.22]
                          },
                          {
                            x: new Date(1538839800000),
                            y: [6589.3, 6598.89, 6589.1, 6596.08]
                          },
                          {
                            x: new Date(1538841600000),
                            y: [6597.5, 6600, 6588.39, 6596.25]
                          },
                          {
                            x: new Date(1538843400000),
                            y: [6598.03, 6600, 6588.73, 6595.97]
                          },
                          {
                            x: new Date(1538845200000),
                            y: [6595.97, 6602.01, 6588.17, 6602]
                          },
                          {
                            x: new Date(1538847000000),
                            y: [6602, 6607, 6596.51, 6599.95]
                          },
                          {
                            x: new Date(1538848800000),
                            y: [6600.63, 6601.21, 6590.39, 6591.02]
                          },
                          {
                            x: new Date(1538850600000),
                            y: [6591.02, 6603.08, 6591, 6591]
                          },
                          {
                            x: new Date(1538852400000),
                            y: [6591, 6601.32, 6585, 6592]
                          },
                          {
                            x: new Date(1538854200000),
                            y: [6593.13, 6596.01, 6590, 6593.34]
                          },
                          {
                            x: new Date(1538856000000),
                            y: [6593.34, 6604.76, 6582.63, 6593.86]
                          },
                          {
                            x: new Date(1538857800000),
                            y: [6593.86, 6604.28, 6586.57, 6600.01]
                          },
                          {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6592.78, 6596.25]
                          },
                          {
                            x: new Date(1538861400000),
                            y: [6596.25, 6604.2, 6590, 6602.99]
                          },
                          {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6584.99, 6587.81]
                          },
                          {
                            x: new Date(1538865000000),
                            y: [6587.81, 6595, 6583.27, 6591.96]
                          },
                          {
                            x: new Date(1538866800000),
                            y: [6591.97, 6596.07, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6598.21, 6587.6, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6601, 6590, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6605, 6596.61, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6589.14, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6599.09, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.99, 6597.5, 6603.86]
                          },
                          {
                            x: new Date(1538883000000),
                            y: [6603.85, 6605, 6600, 6604.07]
                          },
                          {
                            x: new Date(1538884800000),
                            y: [6604.98, 6606, 6604.07, 6606]
                          },
                        ]

                        var seriesData3 = [{
                            x: new Date(1538867400000),
                            y: [6591.08, 6592.22, 6588.9, 6592]
                          },
                          {
                            x: new Date(1538867700000),
                            y: [6592.01, 6596.07, 6592, 6593.51]
                          },
                          {
                            x: new Date(1538868000000),
                            y: [6593.51, 6596.03, 6588.04, 6588.04]
                          },
                          {
                            x: new Date(1538868300000),
                            y: [6588.26, 6592.78, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6593.99, 6587.6, 6593.99]
                          },
                          {
                            x: new Date(1538868900000),
                            y: [6594, 6596.76, 6593.02, 6594.01]
                          },
                          {
                            x: new Date(1538869200000),
                            y: [6596, 6597, 6593.05, 6595.65]
                          },
                          {
                            x: new Date(1538869500000),
                            y: [6595.66, 6596.3, 6590.04, 6591.68]
                          },
                          {
                            x: new Date(1538869800000),
                            y: [6593.26, 6597.97, 6590.37, 6595.43]
                          },
                          {
                            x: new Date(1538870100000),
                            y: [6595.43, 6598.21, 6593.49, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6600, 6594.15, 6594.8]
                          },
                          {
                            x: new Date(1538870700000),
                            y: [6595.01, 6599.8, 6594, 6598.78]
                          },
                          {
                            x: new Date(1538871000000),
                            y: [6598.77, 6598.79, 6594, 6594.28]
                          },
                          {
                            x: new Date(1538871300000),
                            y: [6594.28, 6596.2, 6591.92, 6594.01]
                          },
                          {
                            x: new Date(1538871600000),
                            y: [6594.51, 6601, 6590, 6599.59]
                          },
                          {
                            x: new Date(1538871900000),
                            y: [6593.6, 6599.58, 6593.6, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6602.05, 6596.61, 6601.65]
                          },
                          {
                            x: new Date(1538872500000),
                            y: [6602.05, 6602.94, 6597.5, 6600.05]
                          },
                          {
                            x: new Date(1538872800000),
                            y: [6602.96, 6603, 6600.37, 6601.4]
                          },
                          {
                            x: new Date(1538873100000),
                            y: [6601.39, 6601.43, 6600.5, 6601.4]
                          },
                          {
                            x: new Date(1538873400000),
                            y: [6601.42, 6605, 6600.5, 6600.64]
                          },
                          {
                            x: new Date(1538873700000),
                            y: [6600.64, 6603.84, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6598.28, 6600.48]
                          },
                          {
                            x: new Date(1538874300000),
                            y: [6601.73, 6605, 6600.59, 6601.54]
                          },
                          {
                            x: new Date(1538874600000),
                            y: [6602.8, 6605, 6600, 6600.01]
                          },
                          {
                            x: new Date(1538874900000),
                            y: [6600, 6600.22, 6589.19, 6590.64]
                          },
                          {
                            x: new Date(1538875200000),
                            y: [6593.95, 6598, 6589.14, 6591.44]
                          },
                          {
                            x: new Date(1538875500000),
                            y: [6591.48, 6593.45, 6589.15, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6598, 6592, 6595.85]
                          },
                          {
                            x: new Date(1538876100000),
                            y: [6595.85, 6601.76, 6595.83, 6601.72]
                          },
                          {
                            x: new Date(1538876400000),
                            y: [6601.69, 6605, 6598.52, 6602.01]
                          },
                          {
                            x: new Date(1538876700000),
                            y: [6602.02, 6604.4, 6601.51, 6601.62]
                          },
                          {
                            x: new Date(1538877000000),
                            y: [6601.74, 6602.88, 6599.09, 6600]
                          },
                          {
                            x: new Date(1538877300000),
                            y: [6599.35, 6605, 6599.09, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6600.79, 6604.13]
                          },
                          {
                            x: new Date(1538877900000),
                            y: [6603.06, 6604.45, 6601.25, 6602.06]
                          },
                          {
                            x: new Date(1538878200000),
                            y: [6602.06, 6604, 6600.93, 6602.11]
                          },
                          {
                            x: new Date(1538878500000),
                            y: [6602.25, 6602.41, 6599.09, 6602.41]
                          },
                          {
                            x: new Date(1538878800000),
                            y: [6602.41, 6603.95, 6600.02, 6603.89]
                          },
                          {
                            x: new Date(1538879100000),
                            y: [6603.89, 6604.44, 6602.52, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538879700000),
                            y: [6600.02, 6602.99, 6600, 6600.23]
                          },
                          {
                            x: new Date(1538880000000),
                            y: [6600.85, 6604.43, 6600.2, 6602.1]
                          },
                          {
                            x: new Date(1538880300000),
                            y: [6602.19, 6604.42, 6601.7, 6603.97]
                          },
                          {
                            x: new Date(1538880600000),
                            y: [6602.49, 6603.99, 6600.07, 6600.32]
                          },
                          {
                            x: new Date(1538880900000),
                            y: [6600.32, 6603.5, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.61, 6600.31, 6602.62]
                          },
                          {
                            x: new Date(1538881500000),
                            y: [6601.57, 6603.9, 6597.5, 6601.74]
                          },
                          {
                            x: new Date(1538881800000),
                            y: [6600, 6601.73, 6598.01, 6598.62]
                          },
                          {
                            x: new Date(1538882100000),
                            y: [6598.61, 6603.9, 6598.61, 6600.09]
                          },
                          {
                            x: new Date(1538882400000),
                            y: [6600.09, 6603.99, 6600, 6602.08]
                          },
                          {
                            x: new Date(1538882700000),
                            y: [6602.07, 6603.99, 6602.07, 6603.86]
                          },
                          {
                            x: new Date(1538883000000),
                            y: [6603.85, 6604.41, 6602.09, 6602.26]
                          },
                          {
                            x: new Date(1538883300000),
                            y: [6602.6, 6605, 6602.24, 6603.02]
                          },
                          {
                            x: new Date(1538883600000),
                            y: [6603.01, 6604.98, 6600, 6601.03]
                          },
                          {
                            x: new Date(1538883900000),
                            y: [6601.81, 6602.6, 6601.02, 6602.3]
                          },
                          {
                            x: new Date(1538884200000),
                            y: [6601.72, 6604.98, 6601.1, 6604.03]
                          },
                          {
                            x: new Date(1538884500000),
                            y: [6604.17, 6604.98, 6604.02, 6604.07]
                          },
                          {
                            x: new Date(1538884800000),
                            y: [6604.98, 6606, 6604.07, 6605.01]
                          },
                          {
                            x: new Date(1538885100000),
                            y: [6605, 6607.52, 6605, 6607.28]
                          },
                        ]



                        var seriesData4 = [{
                            x: new Date(1538858700000),
                            y: [6603.08, 6604.28, 6596.01, 6600.01]
                          },
                          {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6597, 6599.76]
                          },
                          {
                            x: new Date(1538860500000),
                            y: [6597.53, 6599.75, 6592.78, 6596.25]
                          },
                          {
                            x: new Date(1538861400000),
                            y: [6596.25, 6603, 6590, 6603]
                          },
                          {
                            x: new Date(1538862300000),
                            y: [6602.73, 6604.2, 6596.72, 6602.99]
                          },
                          {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6591.06, 6591.06]
                          },
                          {
                            x: new Date(1538864100000),
                            y: [6591.06, 6598.4, 6584.99, 6587.81]
                          },
                          {
                            x: new Date(1538865000000),
                            y: [6587.81, 6594.99, 6583.27, 6592.43]
                          },
                          {
                            x: new Date(1538865900000),
                            y: [6592.46, 6595, 6587.07, 6591.96]
                          },
                          {
                            x: new Date(1538866800000),
                            y: [6591.97, 6592.22, 6588.62, 6592]
                          },
                          {
                            x: new Date(1538867700000),
                            y: [6592.01, 6596.07, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6597, 6587.6, 6595.65]
                          },
                          {
                            x: new Date(1538869500000),
                            y: [6595.66, 6598.21, 6590.04, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6600, 6594, 6594.28]
                          },
                          {
                            x: new Date(1538871300000),
                            y: [6594.28, 6601, 6590, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6603, 6596.61, 6601.4]
                          },
                          {
                            x: new Date(1538873100000),
                            y: [6601.39, 6605, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6598.28, 6600.01]
                          },
                          {
                            x: new Date(1538874900000),
                            y: [6600, 6600.22, 6589.14, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6602.01]
                          },
                          {
                            x: new Date(1538876700000),
                            y: [6602.02, 6605, 6599.09, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6600.79, 6602.11]
                          },
                          {
                            x: new Date(1538878500000),
                            y: [6602.25, 6604.44, 6599.09, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6602.1]
                          },
                          {
                            x: new Date(1538880300000),
                            y: [6602.19, 6604.42, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.9, 6597.5, 6598.62]
                          },
                          {
                            x: new Date(1538882100000),
                            y: [6598.61, 6603.99, 6598.61, 6603.86]
                          },
                          {
                            x: new Date(1538883000000),
                            y: [6603.85, 6605, 6600, 6601.03]
                          },
                          {
                            x: new Date(1538883900000),
                            y: [6601.81, 6604.98, 6601.02, 6604.07]
                          },
                          {
                            x: new Date(1538884800000),
                            y: [6604.98, 6605.24, 6604.07, 6605.24]
                          },
                        ]


                        var seriesData5 = [{
                          x: 1538876100000,
                          y: [6595.85, 6601.76, 6595.83, 6601.72]
                        },
                        {
                          x: 1538876400000,
                          y: [6601.69, 6605, 6598.52, 6602.01]
                        },
                        {
                          x: 1538876700000,
                          y: [6602.02, 6604.4, 6601.51, 6601.62]
                        },
                        {
                          x: 1538877000000,
                          y: [6601.74, 6602.88, 6599.09, 6600]
                        },
                        {
                          x: 1538877300000,
                          y: [6599.35, 6605, 6599.09, 6603.06]
                        },
                        {
                          x: 1538877600000,
                          y: [6603.07, 6604.5, 6600.79, 6604.13]
                        },
                        {
                          x: 1538877900000,
                          y: [6603.06, 6604.45, 6601.25, 6602.06]
                        },
                        {
                          x: 1538878200000,
                          y: [6602.06, 6604, 6600.93, 6602.11]
                        },
                        {
                          x: 1538878500000,
                          y: [6602.25, 6602.41, 6599.09, 6602.41]
                        },
                        {
                          x: 1538878800000,
                          y: [6602.41, 6603.95, 6600.02, 6603.89]
                        },
                        {
                          x: 1538879100000,
                          y: [6603.89, 6604.44, 6602.52, 6603.89]
                        },
                        {
                          x: 1538879400000,
                          y: [6604.44, 6604.44, 6600, 6600.02]
                        },
                        {
                          x: 1538879700000,
                          y: [6600.02, 6602.99, 6600, 6600.23]
                        },
                        {
                          x: 1538880000000,
                          y: [6600.85, 6604.43, 6600.2, 6602.1]
                        },
                        {
                          x: 1538880300000,
                          y: [6602.19, 6604.42, 6601.7, 6603.97]
                        },
                        {
                          x: 1538880600000,
                          y: [6602.49, 6603.99, 6600.07, 6600.32]
                        },
                        {
                          x: 1538880900000,
                          y: [6600.32, 6603.5, 6600, 6603.5]
                        },
                        {
                          x: 1538881200000,
                          y: [6603.5, 6603.61, 6600.31, 6602.62]
                        },
                        {
                          x: 1538881500000,
                          y: [6601.57, 6603.9, 6597.5, 6601.74]
                        },
                        {
                          x: 1538881800000,
                          y: [6600, 6601.73, 6598.01, 6598.62]
                        },
                        {
                          x: 1538882100000,
                          y: [6598.61, 6603.9, 6598.61, 6600.09]
                        },
                        {
                          x: 1538882400000,
                          y: [6600.09, 6603.99, 6600, 6602.08]
                        },
                        {
                          x: 1538882700000,
                          y: [6602.07, 6603.99, 6602.07, 6603.86]
                        },
                        {
                          x: 1538883000000,
                          y: [6603.85, 6604.41, 6602.09, 6602.26]
                        },
                        {
                          x: 1538883300000,
                          y: [6602.6, 6605, 6602.24, 6603.02]
                        },
                        {
                          x: 1538883600000,
                          y: [6603.01, 6604.98, 6600, 6601.03]
                        },
                        {
                          x: 1538883900000,
                          y: [6601.81, 6602.6, 6601.02, 6602.3]
                        },
                        {
                          x: 1538884200000,
                          y: [6601.72, 6604.98, 6601.1, 6604.03]
                        },
                        {
                          x: 1538884500000,
                          y: [6604.17, 6604.98, 6604.02, 6604.07]
                        },
                        {
                          x: 1538884800000,
                          y: [6604.98, 6605.7, 6604.07, 6604.28]
                        },
                        ]



                        // var seriesData5 = [[1538856000000, [6593.34, 6600, 6582.63, 6600]], [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]]

                        var seriesData6 = [{
                            x: new Date(1538856000000),
                            y: [6593.34, 6600, 6582.63, 6600]
                          },
                          {
                            x: new Date(1538856900000),
                            y: [6595.16, 6604.76, 6590.73, 6593.86]
                          },
                          {
                            x: new Date(1538857800000),
                            y: [6593.86, 6604.28, 6586.57, 6601.17]
                          },
                          {
                            x: new Date(1538858700000),
                            y: [6603.08, 6604.28, 6596.01, 6600.01]
                          },
                          {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6597, 6599.76]
                          },
                          {
                            x: new Date(1538860500000),
                            y: [6597.53, 6599.75, 6592.78, 6596.25]
                          },
                          {
                            x: new Date(1538861400000),
                            y: [6596.25, 6603, 6590, 6603]
                          },
                          {
                            x: new Date(1538862300000),
                            y: [6602.73, 6604.2, 6596.72, 6602.99]
                          },
                          {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6591.06, 6591.06]
                          },
                          {
                            x: new Date(1538864100000),
                            y: [6591.06, 6598.4, 6584.99, 6587.81]
                          },
                          {
                            x: new Date(1538865000000),
                            y: [6587.81, 6594.99, 6583.27, 6592.43]
                          },
                          {
                            x: new Date(1538865900000),
                            y: [6592.46, 6595, 6587.07, 6591.96]
                          },
                          {
                            x: new Date(1538866800000),
                            y: [6591.97, 6592.22, 6588.62, 6592]
                          },
                          {
                            x: new Date(1538867700000),
                            y: [6592.01, 6596.07, 6585, 6588.39]
                          },
                          {
                            x: new Date(1538868600000),
                            y: [6587.6, 6597, 6587.6, 6595.65]
                          },
                          {
                            x: new Date(1538869500000),
                            y: [6595.66, 6598.21, 6590.04, 6594.27]
                          },
                          {
                            x: new Date(1538870400000),
                            y: [6596.44, 6600, 6594, 6594.28]
                          },
                          {
                            x: new Date(1538871300000),
                            y: [6594.28, 6601, 6590, 6596.55]
                          },
                          {
                            x: new Date(1538872200000),
                            y: [6598.91, 6603, 6596.61, 6601.4]
                          },
                          {
                            x: new Date(1538873100000),
                            y: [6601.39, 6605, 6600, 6600.02]
                          },
                          {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6598.28, 6600.01]
                          },
                          {
                            x: new Date(1538874900000),
                            y: [6600, 6600.22, 6589.14, 6593.01]
                          },
                          {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6602.01]
                          },
                          {
                            x: new Date(1538876700000),
                            y: [6602.02, 6605, 6599.09, 6603.06]
                          },
                          {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6600.79, 6602.11]
                          },
                          {
                            x: new Date(1538878500000),
                            y: [6602.25, 6604.44, 6599.09, 6603.89]
                          },
                          {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6602.1]
                          },
                          {
                            x: new Date(1538880300000),
                            y: [6602.19, 6604.42, 6600, 6603.5]
                          },
                          {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.9, 6597.5, 6598.62]
                          },
                          {
                            x: new Date(1538882100000),
                            y: [6598.61, 6603.9, 6598.61, 6600.09]
                          },
                        ]

                    var optionsCandlestick = {
                        chart: {
                            id: 'candles',
                            height: 360,
                            type: 'candlestick',
                            toolbar: {
                                autoSelected: 'pan',
                                show: false
                            },
                            zoom: {
                                enabled: false
                            },
                        },
                        plotOptions: {
                            candlestick: {
                                colors: {
                                upward: '#32b432',
                                downward: '#e3324c'
                                }
                            }
                        },
                        series: [{
                            data: seriesData
                        }],
                        xaxis: {
                            type: 'datetime'
                        }
                    }
            
                    var chartCandlestick = new ApexCharts(
                        document.querySelector("#crypto-demo1-candlestick"),
                        optionsCandlestick
                    );
            
                    chartCandlestick.render();
            
                    var options = {
                        chart: {
                            height: 160,
                            type: 'bar',
                            brush: {
                                enabled: true,
                                target: 'candles'
                            },
                            selection: {
                                enabled: true,
                                xaxis: {
                                    min: new Date('20 Jan 2017').getTime(),
                                    max: new Date('10 Dec 2017').getTime()
                                },
                                fill: {
                                    color: '#ccc',
                                    opacity: 0.4
                                },
                                stroke: {
                                    color: '#0D47A1',
                                }
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        plotOptions: {
                            bar: {
                                columnWidth: '80%',
                                colors: {
                                    ranges: [
                                        {
                                            from: -1000,
                                            to: 0,
                                            color: '#F15B46'
                                        }, {
                                            from: 1,
                                            to: 10000,
                                            color: '#FEB019'
                                        }
                                    ],
                                   
                                },
                            }        
                        },
                        stroke: {
                            width: 0
                        },
                        series: [{
                            name: 'volume',
                            data: seriesDataLinear
                        }],
                        xaxis: {
                            type: 'datetime',
                            axisBorder: {
                                offsetX: 13
                            }
                        },
                        yaxis: {
                            labels: {
                                show: false
                            }
                        }
                    }
            
                    var chart = new ApexCharts(
                        document.querySelector("#crypto-demo1-bar"),
                        options
                    );
            
                    chart.render();
                }
            // cryptodemo2
             var cryptodemo2 = jQuery('#cryptodemo2')
            if (cryptodemo2.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fb0792'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#cryptodemo2"),
                options
            );

            chart.render();

        }
        // cryptodemo3
             var cryptodemo3 = jQuery('#cryptodemo3')
            if (cryptodemo3.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#2bcbba'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#cryptodemo3"),
                options
            );

            chart.render();

        }
        // cryptodemo4
             var cryptodemo4 = jQuery('#cryptodemo4')
            if (cryptodemo4.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#45aaf2'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

            var chart = new ApexCharts(
                document.querySelector("#cryptodemo4"),
                options
            );

            chart.render();

        }
        // cryptodemo5
             var cryptodemo5 = jQuery('#cryptodemo5')
            if (cryptodemo5.length > 0) {

                    var options = {
                          chart: {
                            height: 110,
                            width: 160,
                            type: 'line',
                            toolbar: {
                                show: false
                                },
                            zoom: {
                              enabled: false
                            },
                          },
                          dataLabels: {
                            enabled: false
                          },
                          stroke: {
                            width: [3],
                            curve: 'smooth',
                            dashArray: [0, 4]
                          },
                          colors: ['#fd9644'],
                          series: [{
                              name: "Session Duration",
                              data: [2, 1, 2, 1, 3, 8, 2, 3]
                            },
                          ],
                          markers: {
                            size: 0,

                            hover: {
                              sizeOffset: 6
                            }
                          },
                          xaxis: {
                            lines: {
                                show: false
                              },
                              axisBorder: {
                                  show: false
                                },
                                 crosshairs: {
                                  show: false
                                },
                                axisTicks: {
                                  show: false
                                },
                                labels: {
                                  show: false,
                              },
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan'
                            ],
                          },
                          tooltip: {
                            y: [{
                              title: {
                                formatter: function (val) {
                                  return val + " (mins)"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val + " per session"
                                }
                              }
                            }, {
                              title: {
                                formatter: function (val) {
                                  return val;
                                }
                              }
                            }]
                          },
                          legend: {
                                show: false,
                              },
                          grid: {
                            show: false,
                            borderColor: '#f1f1f1',
                          }
                        }

                    var chart = new ApexCharts(
                        document.querySelector("#cryptodemo5"),
                        options
                    );

                    chart.render();
                  }

            // cryptodemo6
              var cryptodemo6 = jQuery('#cryptodemo6')
                if (cryptodemo6.length > 0) {

                    var randomizeArray = function (arg) {
                        var array = arg.slice();
                        var currentIndex = array.length,
                          temporaryValue, randomIndex;

                        while (0 !== currentIndex) {

                          randomIndex = Math.floor(Math.random() * currentIndex);
                          currentIndex -= 1;

                          temporaryValue = array[currentIndex];
                          array[currentIndex] = array[randomIndex];
                          array[randomIndex] = temporaryValue;
                        }

                        return array;
                      }

                      // data for the sparklines that appear below header area
                      var sparklineData = [47, 45, 54, 38, 56, 45, 30, 31, 37, 39, 62, 30, 35, 41];

                var options = {
                    chart: {
                        type: 'area',
                        height: 266,
                        width : 410,
                        sparkline: {
                          enabled: true,
                        },
                      },
                      stroke: {
                        curve: 'smooth',
                        width: 5,
                        colors: ['#ce83f2']
                      },
                      fill: {
                        opacity: 0.3,
                        gradient: {
                          enabled: true,
                          shadeIntensity: 0.1,
                          inverseColors: false,
                          opacityFrom: 1,
                          opacityTo: 0.6,
                          stops: [100, 100, 100, 100]
                        },
                      },
                      series: [{
                        data: randomizeArray(sparklineData)
                      }],
                      yaxis: {
                        min: 0
                      },
                      colors: ['#8300c2'],
                      responsive: [{
                        breakpoint: 1440,
                        options: {
                          chart: {
                            type: 'area',
                            width : 900,
                            sparkline: {
                              enabled: true,
                            },
                          },
                        
                        },
                    }]
                }

                var chart = new ApexCharts(
                    document.querySelector("#cryptodemo6"),
                    options
                );

                chart.render();
                }

                var cryptodemo7 = jQuery('#cryptodemo7');
                    if (cryptodemo7.length > 0) {
        
                       var optionsDonutTop = {
                              chart: {
                                height: 140,
                                width: 300,
                                type: 'donut',
                              },
                              colors: ['#2bcbba', '#eceef3'],
                              labels: ['Active Deal', 'Unconfirmed Deals'],
                              series: [456, 128],
                              legend: {
                                show: false
                              },
                              dataLabels: {
                                enabled: false
                              },
                              plotOptions: {
                                pie: {
                                  size: 60,
                                  donut: {
                                    size: '72%',
                                  },
                                  offsetX: 10,
                                  offsetY: 0,
                                  dataLabels: {
                                    enabled: false
                                  },
                                }
                              },
                              responsive: [{
                                breakpoint: 400,
                                options: {
                                 plotOptions: {
                                  pie: {
                                    offsetX: -35,
                                  }
                                },
                                
                                },
                            }]
                            }
                            var cryptodemo7 = new ApexCharts(document.querySelector('#cryptodemo7'), optionsDonutTop);
                            cryptodemo7.render();
                            }
               
             // irregular
             var irregular = jQuery('#irregular')
                if (irregular.length > 0) {

                    var dataSeries = [
                        [{
                            "date": "2014-01-01",
                            "value": 20000000
                          },
                          {
                            "date": "2014-01-02",
                            "value": 10379978
                          },
                          {
                            "date": "2014-01-03",
                            "value": 30493749
                          },
                          {
                            "date": "2014-01-04",
                            "value": 10785250
                          },
                          {
                            "date": "2014-01-05",
                            "value": 33901904
                          },
                          {
                            "date": "2014-01-06",
                            "value": 11576838
                          },
                          {
                            "date": "2014-01-07",
                            "value": 14413854
                          },
                          {
                            "date": "2014-01-08",
                            "value": 15177211
                          },
                          {
                            "date": "2014-01-09",
                            "value": 16622100
                          },
                          {
                            "date": "2014-01-10",
                            "value": 17381072
                          },
                          {
                            "date": "2014-01-11",
                            "value": 18802310
                          },
                          {
                            "date": "2014-01-12",
                            "value": 15531790
                          },
                          {
                            "date": "2014-01-13",
                            "value": 15748881
                          },
                          {
                            "date": "2014-01-14",
                            "value": 18706437
                          },
                          {
                            "date": "2014-01-15",
                            "value": 19752685
                          },
                          {
                            "date": "2014-01-16",
                            "value": 21016418
                          },
                          {
                            "date": "2014-01-17",
                            "value": 25622924
                          },
                          {
                            "date": "2014-01-18",
                            "value": 25337480
                          },
                          {
                            "date": "2014-01-19",
                            "value": 22258882
                          },
                          {
                            "date": "2014-01-20",
                            "value": 23829538
                          },
                          {
                            "date": "2014-01-21",
                            "value": 24245689
                          },
                          {
                            "date": "2014-01-22",
                            "value": 26429711
                          },
                          {
                            "date": "2014-01-23",
                            "value": 26259017
                          },
                          {
                            "date": "2014-01-24",
                            "value": 25396183
                          },
                          {
                            "date": "2014-01-25",
                            "value": 23107346
                          },
                          {
                            "date": "2014-01-26",
                            "value": 28659852
                          },
                          {
                            "date": "2014-01-27",
                            "value": 25270783
                          },
                          {
                            "date": "2014-01-28",
                            "value": 26270783
                          },
                          {
                            "date": "2014-01-29",
                            "value": 27270783
                          },
                          {
                            "date": "2014-01-30",
                            "value": 28270783
                          },
                          {
                            "date": "2014-01-31",
                            "value": 29270783
                          },
                          {
                            "date": "2014-02-01",
                            "value": 30270783
                          },
                          {
                            "date": "2014-02-02",
                            "value": 31270783
                          },
                          {
                            "date": "2014-02-03",
                            "value": 32270783
                          },
                          {
                            "date": "2014-02-04",
                            "value": 33270783
                          },
                          {
                            "date": "2014-02-05",
                            "value": 28270783
                          },
                          {
                            "date": "2014-02-06",
                            "value": 27270783
                          },
                          {
                            "date": "2014-02-07",
                            "value": 35270783
                          },
                          {
                            "date": "2014-02-08",
                            "value": 34270783
                          },
                          {
                            "date": "2014-02-09",
                            "value": 28270783
                          },
                          {
                            "date": "2014-02-10",
                            "value": 35270783
                          },
                          {
                            "date": "2014-02-11",
                            "value": 36270783
                          },
                          {
                            "date": "2014-02-12",
                            "value": 34127078
                          },
                          {
                            "date": "2014-02-13",
                            "value": 33124078
                          },
                          {
                            "date": "2014-02-14",
                            "value": 36227078
                          },
                          {
                            "date": "2014-02-15",
                            "value": 37827078
                          },
                          {
                            "date": "2014-02-16",
                            "value": 36427073
                          },
                          {
                            "date": "2014-02-17",
                            "value": 37570783
                          },
                          {
                            "date": "2014-02-18",
                            "value": 38627073
                          },
                          {
                            "date": "2014-02-19",
                            "value": 37727078
                          },
                          {
                            "date": "2014-02-20",
                            "value": 38827073
                          },
                          {
                            "date": "2014-02-21",
                            "value": 40927078
                          },
                          {
                            "date": "2014-02-22",
                            "value": 41027078
                          },
                          {
                            "date": "2014-02-23",
                            "value": 42127073
                          },
                          {
                            "date": "2014-02-24",
                            "value": 43220783
                          },
                          {
                            "date": "2014-02-25",
                            "value": 44327078
                          },
                          {
                            "date": "2014-02-26",
                            "value": 40427078
                          },
                          {
                            "date": "2014-02-27",
                            "value": 41027078
                          },
                          {
                            "date": "2014-02-28",
                            "value": 45627078
                          },
                          {
                            "date": "2014-03-01",
                            "value": 44727078
                          },
                          {
                            "date": "2014-03-02",
                            "value": 44227078
                          },
                          {
                            "date": "2014-03-03",
                            "value": 45227078
                          },
                          {
                            "date": "2014-03-04",
                            "value": 46027078
                          },
                          {
                            "date": "2014-03-05",
                            "value": 46927078
                          },
                          {
                            "date": "2014-03-06",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-07",
                            "value": 46227078
                          },
                          {
                            "date": "2014-03-08",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-09",
                            "value": 48027078
                          },
                          {
                            "date": "2014-03-10",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-11",
                            "value": 47027078
                          },
                          {
                            "date": "2014-03-12",
                            "value": 48017078
                          },
                          {
                            "date": "2014-03-13",
                            "value": 48077078
                          },
                          {
                            "date": "2014-03-14",
                            "value": 48087078
                          },
                          {
                            "date": "2014-03-15",
                            "value": 48017078
                          },
                          {
                            "date": "2014-03-16",
                            "value": 48047078
                          },
                          {
                            "date": "2014-03-17",
                            "value": 48067078
                          },
                          {
                            "date": "2014-03-18",
                            "value": 48077078
                          },
                          {
                            "date": "2014-03-19",
                            "value": 48027074
                          },
                          {
                            "date": "2014-03-20",
                            "value": 48927079
                          },
                          {
                            "date": "2014-03-21",
                            "value": 48727071
                          },
                          {
                            "date": "2014-03-22",
                            "value": 48127072
                          },
                          {
                            "date": "2014-03-23",
                            "value": 48527072
                          },
                          {
                            "date": "2014-03-24",
                            "value": 48627027
                          },
                          {
                            "date": "2014-03-25",
                            "value": 48027040
                          },
                          {
                            "date": "2014-03-26",
                            "value": 48027043
                          },
                          {
                            "date": "2014-03-27",
                            "value": 48057022
                          },
                          {
                            "date": "2014-03-28",
                            "value": 49057022
                          },
                          {
                            "date": "2014-03-29",
                            "value": 50057022
                          },
                          {
                            "date": "2014-03-30",
                            "value": 51057022
                          },
                          {
                            "date": "2014-03-31",
                            "value": 52057022
                          },
                          {
                            "date": "2014-04-01",
                            "value": 53057022
                          },
                          {
                            "date": "2014-04-02",
                            "value": 54057022
                          },
                          {
                            "date": "2014-04-03",
                            "value": 52057022
                          },
                          {
                            "date": "2014-04-04",
                            "value": 55057022
                          },
                          {
                            "date": "2014-04-05",
                            "value": 58270783
                          },
                          {
                            "date": "2014-04-06",
                            "value": 56270783
                          },
                          {
                            "date": "2014-04-07",
                            "value": 55270783
                          },
                          {
                            "date": "2014-04-08",
                            "value": 58270783
                          },
                          {
                            "date": "2014-04-09",
                            "value": 59270783
                          },
                          {
                            "date": "2014-04-10",
                            "value": 60270783
                          },
                          {
                            "date": "2014-04-11",
                            "value": 61270783
                          },
                          {
                            "date": "2014-04-12",
                            "value": 62270783
                          },
                          {
                            "date": "2014-04-13",
                            "value": 63270783
                          },
                          {
                            "date": "2014-04-14",
                            "value": 64270783
                          },
                          {
                            "date": "2014-04-15",
                            "value": 65270783
                          },
                          {
                            "date": "2014-04-16",
                            "value": 66270783
                          },
                          {
                            "date": "2014-04-17",
                            "value": 67270783
                          },
                          {
                            "date": "2014-04-18",
                            "value": 68270783
                          },
                          {
                            "date": "2014-04-19",
                            "value": 69270783
                          },
                          {
                            "date": "2014-04-20",
                            "value": 70270783
                          },
                          {
                            "date": "2014-04-21",
                            "value": 71270783
                          },
                          {
                            "date": "2014-04-22",
                            "value": 72270783
                          },
                          {
                            "date": "2014-04-23",
                            "value": 73270783
                          },
                          {
                            "date": "2014-04-24",
                            "value": 74270783
                          },
                          {
                            "date": "2014-04-25",
                            "value": 75270783
                          },
                          {
                            "date": "2014-04-26",
                            "value": 76660783
                          },
                          {
                            "date": "2014-04-27",
                            "value": 77270783
                          },
                          {
                            "date": "2014-04-28",
                            "value": 78370783
                          },
                          {
                            "date": "2014-04-29",
                            "value": 79470783
                          },
                          {
                            "date": "2014-04-30",
                            "value": 80170783
                          }
                        ],
                        [{
                            "date": "2014-01-01",
                            "value": 150000000
                          },
                          {
                            "date": "2014-01-02",
                            "value": 160379978
                          },
                          {
                            "date": "2014-01-03",
                            "value": 170493749
                          },
                          {
                            "date": "2014-01-04",
                            "value": 160785250
                          },
                          {
                            "date": "2014-01-05",
                            "value": 167391904
                          },
                          {
                            "date": "2014-01-06",
                            "value": 161576838
                          },
                          {
                            "date": "2014-01-07",
                            "value": 161413854
                          },
                          {
                            "date": "2014-01-08",
                            "value": 152177211
                          },
                          {
                            "date": "2014-01-09",
                            "value": 143762210
                          },
                          {
                            "date": "2014-01-10",
                            "value": 144381072
                          },
                          {
                            "date": "2014-01-11",
                            "value": 154352310
                          },
                          {
                            "date": "2014-01-12",
                            "value": 165531790
                          },
                          {
                            "date": "2014-01-13",
                            "value": 175748881
                          },
                          {
                            "date": "2014-01-14",
                            "value": 187064037
                          },
                          {
                            "date": "2014-01-15",
                            "value": 197520685
                          },
                          {
                            "date": "2014-01-16",
                            "value": 210176418
                          },
                          {
                            "date": "2014-01-17",
                            "value": 196122924
                          },
                          {
                            "date": "2014-01-18",
                            "value": 207337480
                          },
                          {
                            "date": "2014-01-19",
                            "value": 200258882
                          },
                          {
                            "date": "2014-01-20",
                            "value": 186829538
                          },
                          {
                            "date": "2014-01-21",
                            "value": 192456897
                          },
                          {
                            "date": "2014-01-22",
                            "value": 204299711
                          },
                          {
                            "date": "2014-01-23",
                            "value": 192759017
                          },
                          {
                            "date": "2014-01-24",
                            "value": 203596183
                          },
                          {
                            "date": "2014-01-25",
                            "value": 208107346
                          },
                          {
                            "date": "2014-01-26",
                            "value": 196359852
                          },
                          {
                            "date": "2014-01-27",
                            "value": 192570783
                          },
                          {
                            "date": "2014-01-28",
                            "value": 177967768
                          },
                          {
                            "date": "2014-01-29",
                            "value": 190632803
                          },
                          {
                            "date": "2014-01-30",
                            "value": 203725316
                          },
                          {
                            "date": "2014-01-31",
                            "value": 218226177
                          },
                          {
                            "date": "2014-02-01",
                            "value": 210698669
                          },
                          {
                            "date": "2014-02-02",
                            "value": 217640656
                          },
                          {
                            "date": "2014-02-03",
                            "value": 216142362
                          },
                          {
                            "date": "2014-02-04",
                            "value": 201410971
                          },
                          {
                            "date": "2014-02-05",
                            "value": 196704289
                          },
                          {
                            "date": "2014-02-06",
                            "value": 190436945
                          },
                          {
                            "date": "2014-02-07",
                            "value": 178891686
                          },
                          {
                            "date": "2014-02-08",
                            "value": 171613962
                          },
                          {
                            "date": "2014-02-09",
                            "value": 157579773
                          },
                          {
                            "date": "2014-02-10",
                            "value": 158677098
                          },
                          {
                            "date": "2014-02-11",
                            "value": 147129977
                          },
                          {
                            "date": "2014-02-12",
                            "value": 151561876
                          },
                          {
                            "date": "2014-02-13",
                            "value": 151627421
                          },
                          {
                            "date": "2014-02-14",
                            "value": 143543872
                          },
                          {
                            "date": "2014-02-15",
                            "value": 136581057
                          },
                          {
                            "date": "2014-02-16",
                            "value": 135560715
                          },
                          {
                            "date": "2014-02-17",
                            "value": 122625263
                          },
                          {
                            "date": "2014-02-18",
                            "value": 112091484
                          },
                          {
                            "date": "2014-02-19",
                            "value": 98810329
                          },
                          {
                            "date": "2014-02-20",
                            "value": 99882912
                          },
                          {
                            "date": "2014-02-21",
                            "value": 94943095
                          },
                          {
                            "date": "2014-02-22",
                            "value": 104875743
                          },
                          {
                            "date": "2014-02-23",
                            "value": 116383678
                          },
                          {
                            "date": "2014-02-24",
                            "value": 125028841
                          },
                          {
                            "date": "2014-02-25",
                            "value": 123967310
                          },
                          {
                            "date": "2014-02-26",
                            "value": 133167029
                          },
                          {
                            "date": "2014-02-27",
                            "value": 128577263
                          },
                          {
                            "date": "2014-02-28",
                            "value": 115836969
                          },
                          {
                            "date": "2014-03-01",
                            "value": 119264529
                          },
                          {
                            "date": "2014-03-02",
                            "value": 109363374
                          },
                          {
                            "date": "2014-03-03",
                            "value": 113985628
                          },
                          {
                            "date": "2014-03-04",
                            "value": 114650999
                          },
                          {
                            "date": "2014-03-05",
                            "value": 110866108
                          },
                          {
                            "date": "2014-03-06",
                            "value": 96473454
                          },
                          {
                            "date": "2014-03-07",
                            "value": 104075886
                          },
                          {
                            "date": "2014-03-08",
                            "value": 103568384
                          },
                          {
                            "date": "2014-03-09",
                            "value": 101534883
                          },
                          {
                            "date": "2014-03-10",
                            "value": 115825447
                          },
                          {
                            "date": "2014-03-11",
                            "value": 126133916
                          },
                          {
                            "date": "2014-03-12",
                            "value": 116502109
                          },
                          {
                            "date": "2014-03-13",
                            "value": 130169411
                          },
                          {
                            "date": "2014-03-14",
                            "value": 124296886
                          },
                          {
                            "date": "2014-03-15",
                            "value": 126347399
                          },
                          {
                            "date": "2014-03-16",
                            "value": 131483669
                          },
                          {
                            "date": "2014-03-17",
                            "value": 142811333
                          },
                          {
                            "date": "2014-03-18",
                            "value": 129675396
                          },
                          {
                            "date": "2014-03-19",
                            "value": 115514483
                          },
                          {
                            "date": "2014-03-20",
                            "value": 117630630
                          },
                          {
                            "date": "2014-03-21",
                            "value": 122340239
                          },
                          {
                            "date": "2014-03-22",
                            "value": 132349091
                          },
                          {
                            "date": "2014-03-23",
                            "value": 125613305
                          },
                          {
                            "date": "2014-03-24",
                            "value": 135592466
                          },
                          {
                            "date": "2014-03-25",
                            "value": 123408762
                          },
                          {
                            "date": "2014-03-26",
                            "value": 111991454
                          },
                          {
                            "date": "2014-03-27",
                            "value": 116123955
                          },
                          {
                            "date": "2014-03-28",
                            "value": 112817214
                          },
                          {
                            "date": "2014-03-29",
                            "value": 113029590
                          },
                          {
                            "date": "2014-03-30",
                            "value": 108753398
                          },
                          {
                            "date": "2014-03-31",
                            "value": 99383763
                          },
                          {
                            "date": "2014-04-01",
                            "value": 100151737
                          },
                          {
                            "date": "2014-04-02",
                            "value": 94985209
                          },
                          {
                            "date": "2014-04-03",
                            "value": 82913669
                          },
                          {
                            "date": "2014-04-04",
                            "value": 78748268
                          },
                          {
                            "date": "2014-04-05",
                            "value": 63829135
                          },
                          {
                            "date": "2014-04-06",
                            "value": 78694727
                          },
                          {
                            "date": "2014-04-07",
                            "value": 80868994
                          },
                          {
                            "date": "2014-04-08",
                            "value": 93799013
                          },
                          {
                            "date": "2014-04-09",
                            "value": 99042416
                          },
                          {
                            "date": "2014-04-10",
                            "value": 97298692
                          },
                          {
                            "date": "2014-04-11",
                            "value": 83353499
                          },
                          {
                            "date": "2014-04-12",
                            "value": 71248129
                          },
                          {
                            "date": "2014-04-13",
                            "value": 75253744
                          },
                          {
                            "date": "2014-04-14",
                            "value": 68976648
                          },
                          {
                            "date": "2014-04-15",
                            "value": 71002284
                          },
                          {
                            "date": "2014-04-16",
                            "value": 75052401
                          },
                          {
                            "date": "2014-04-17",
                            "value": 83894030
                          },
                          {
                            "date": "2014-04-18",
                            "value": 90236528
                          },
                          {
                            "date": "2014-04-19",
                            "value": 99739114
                          },
                          {
                            "date": "2014-04-20",
                            "value": 96407136
                          },
                          {
                            "date": "2014-04-21",
                            "value": 108323177
                          },
                          {
                            "date": "2014-04-22",
                            "value": 101578914
                          },
                          {
                            "date": "2014-04-23",
                            "value": 115877608
                          },
                          {
                            "date": "2014-04-24",
                            "value": 112088857
                          },
                          {
                            "date": "2014-04-25",
                            "value": 112071353
                          },
                          {
                            "date": "2014-04-26",
                            "value": 101790062
                          },
                          {
                            "date": "2014-04-27",
                            "value": 115003761
                          },
                          {
                            "date": "2014-04-28",
                            "value": 120457727
                          },
                          {
                            "date": "2014-04-29",
                            "value": 118253926
                          },
                          {
                            "date": "2014-04-30",
                            "value": 117956992
                          }
                        ],
                        [{
                            "date": "2014-01-01",
                            "value": 50000000
                          },
                          {
                            "date": "2014-01-02",
                            "value": 60379978
                          },
                          {
                            "date": "2014-01-03",
                            "value": 40493749
                          },
                          {
                            "date": "2014-01-04",
                            "value": 60785250
                          },
                          {
                            "date": "2014-01-05",
                            "value": 67391904
                          },
                          {
                            "date": "2014-01-06",
                            "value": 61576838
                          },
                          {
                            "date": "2014-01-07",
                            "value": 61413854
                          },
                          {
                            "date": "2014-01-08",
                            "value": 82177211
                          },
                          {
                            "date": "2014-01-09",
                            "value": 103762210
                          },
                          {
                            "date": "2014-01-10",
                            "value": 84381072
                          },
                          {
                            "date": "2014-01-11",
                            "value": 54352310
                          },
                          {
                            "date": "2014-01-12",
                            "value": 65531790
                          },
                          {
                            "date": "2014-01-13",
                            "value": 75748881
                          },
                          {
                            "date": "2014-01-14",
                            "value": 47064037
                          },
                          {
                            "date": "2014-01-15",
                            "value": 67520685
                          },
                          {
                            "date": "2014-01-16",
                            "value": 60176418
                          },
                          {
                            "date": "2014-01-17",
                            "value": 66122924
                          },
                          {
                            "date": "2014-01-18",
                            "value": 57337480
                          },
                          {
                            "date": "2014-01-19",
                            "value": 100258882
                          },
                          {
                            "date": "2014-01-20",
                            "value": 46829538
                          },
                          {
                            "date": "2014-01-21",
                            "value": 92456897
                          },
                          {
                            "date": "2014-01-22",
                            "value": 94299711
                          },
                          {
                            "date": "2014-01-23",
                            "value": 62759017
                          },
                          {
                            "date": "2014-01-24",
                            "value": 103596183
                          },
                          {
                            "date": "2014-01-25",
                            "value": 108107346
                          },
                          {
                            "date": "2014-01-26",
                            "value": 66359852
                          },
                          {
                            "date": "2014-01-27",
                            "value": 62570783
                          },
                          {
                            "date": "2014-01-28",
                            "value": 77967768
                          },
                          {
                            "date": "2014-01-29",
                            "value": 60632803
                          },
                          {
                            "date": "2014-01-30",
                            "value": 103725316
                          },
                          {
                            "date": "2014-01-31",
                            "value": 98226177
                          },
                          {
                            "date": "2014-02-01",
                            "value": 60698669
                          },
                          {
                            "date": "2014-02-02",
                            "value": 67640656
                          },
                          {
                            "date": "2014-02-03",
                            "value": 66142362
                          },
                          {
                            "date": "2014-02-04",
                            "value": 101410971
                          },
                          {
                            "date": "2014-02-05",
                            "value": 66704289
                          },
                          {
                            "date": "2014-02-06",
                            "value": 60436945
                          },
                          {
                            "date": "2014-02-07",
                            "value": 78891686
                          },
                          {
                            "date": "2014-02-08",
                            "value": 71613962
                          },
                          {
                            "date": "2014-02-09",
                            "value": 107579773
                          },
                          {
                            "date": "2014-02-10",
                            "value": 58677098
                          },
                          {
                            "date": "2014-02-11",
                            "value": 87129977
                          },
                          {
                            "date": "2014-02-12",
                            "value": 51561876
                          },
                          {
                            "date": "2014-02-13",
                            "value": 51627421
                          },
                          {
                            "date": "2014-02-14",
                            "value": 83543872
                          },
                          {
                            "date": "2014-02-15",
                            "value": 66581057
                          },
                          {
                            "date": "2014-02-16",
                            "value": 65560715
                          },
                          {
                            "date": "2014-02-17",
                            "value": 62625263
                          },
                          {
                            "date": "2014-02-18",
                            "value": 92091484
                          },
                          {
                            "date": "2014-02-19",
                            "value": 48810329
                          },
                          {
                            "date": "2014-02-20",
                            "value": 49882912
                          },
                          {
                            "date": "2014-02-21",
                            "value": 44943095
                          },
                          {
                            "date": "2014-02-22",
                            "value": 104875743
                          },
                          {
                            "date": "2014-02-23",
                            "value": 96383678
                          },
                          {
                            "date": "2014-02-24",
                            "value": 105028841
                          },
                          {
                            "date": "2014-02-25",
                            "value": 63967310
                          },
                          {
                            "date": "2014-02-26",
                            "value": 63167029
                          },
                          {
                            "date": "2014-02-27",
                            "value": 68577263
                          },
                          {
                            "date": "2014-02-28",
                            "value": 95836969
                          },
                          {
                            "date": "2014-03-01",
                            "value": 99264529
                          },
                          {
                            "date": "2014-03-02",
                            "value": 109363374
                          },
                          {
                            "date": "2014-03-03",
                            "value": 93985628
                          },
                          {
                            "date": "2014-03-04",
                            "value": 94650999
                          },
                          {
                            "date": "2014-03-05",
                            "value": 90866108
                          },
                          {
                            "date": "2014-03-06",
                            "value": 46473454
                          },
                          {
                            "date": "2014-03-07",
                            "value": 84075886
                          },
                          {
                            "date": "2014-03-08",
                            "value": 103568384
                          },
                          {
                            "date": "2014-03-09",
                            "value": 101534883
                          },
                          {
                            "date": "2014-03-10",
                            "value": 95825447
                          },
                          {
                            "date": "2014-03-11",
                            "value": 66133916
                          },
                          {
                            "date": "2014-03-12",
                            "value": 96502109
                          },
                          {
                            "date": "2014-03-13",
                            "value": 80169411
                          },
                          {
                            "date": "2014-03-14",
                            "value": 84296886
                          },
                          {
                            "date": "2014-03-15",
                            "value": 86347399
                          },
                          {
                            "date": "2014-03-16",
                            "value": 31483669
                          },
                          {
                            "date": "2014-03-17",
                            "value": 82811333
                          },
                          {
                            "date": "2014-03-18",
                            "value": 89675396
                          },
                          {
                            "date": "2014-03-19",
                            "value": 95514483
                          },
                          {
                            "date": "2014-03-20",
                            "value": 97630630
                          },
                          {
                            "date": "2014-03-21",
                            "value": 62340239
                          },
                          {
                            "date": "2014-03-22",
                            "value": 62349091
                          },
                          {
                            "date": "2014-03-23",
                            "value": 65613305
                          },
                          {
                            "date": "2014-03-24",
                            "value": 65592466
                          },
                          {
                            "date": "2014-03-25",
                            "value": 63408762
                          },
                          {
                            "date": "2014-03-26",
                            "value": 91991454
                          },
                          {
                            "date": "2014-03-27",
                            "value": 96123955
                          },
                          {
                            "date": "2014-03-28",
                            "value": 92817214
                          },
                          {
                            "date": "2014-03-29",
                            "value": 93029590
                          },
                          {
                            "date": "2014-03-30",
                            "value": 108753398
                          },
                          {
                            "date": "2014-03-31",
                            "value": 49383763
                          },
                          {
                            "date": "2014-04-01",
                            "value": 100151737
                          },
                          {
                            "date": "2014-04-02",
                            "value": 44985209
                          },
                          {
                            "date": "2014-04-03",
                            "value": 52913669
                          },
                          {
                            "date": "2014-04-04",
                            "value": 48748268
                          },
                          {
                            "date": "2014-04-05",
                            "value": 23829135
                          },
                          {
                            "date": "2014-04-06",
                            "value": 58694727
                          },
                          {
                            "date": "2014-04-07",
                            "value": 50868994
                          },
                          {
                            "date": "2014-04-08",
                            "value": 43799013
                          },
                          {
                            "date": "2014-04-09",
                            "value": 4042416
                          },
                          {
                            "date": "2014-04-10",
                            "value": 47298692
                          },
                          {
                            "date": "2014-04-11",
                            "value": 53353499
                          },
                          {
                            "date": "2014-04-12",
                            "value": 71248129
                          },
                          {
                            "date": "2014-04-13",
                            "value": 75253744
                          },
                          {
                            "date": "2014-04-14",
                            "value": 68976648
                          },
                          {
                            "date": "2014-04-15",
                            "value": 71002284
                          },
                          {
                            "date": "2014-04-16",
                            "value": 75052401
                          },
                          {
                            "date": "2014-04-17",
                            "value": 83894030
                          },
                          {
                            "date": "2014-04-18",
                            "value": 50236528
                          },
                          {
                            "date": "2014-04-19",
                            "value": 59739114
                          },
                          {
                            "date": "2014-04-20",
                            "value": 56407136
                          },
                          {
                            "date": "2014-04-21",
                            "value": 108323177
                          },
                          {
                            "date": "2014-04-22",
                            "value": 101578914
                          },
                          {
                            "date": "2014-04-23",
                            "value": 95877608
                          },
                          {
                            "date": "2014-04-24",
                            "value": 62088857
                          },
                          {
                            "date": "2014-04-25",
                            "value": 92071353
                          },
                          {
                            "date": "2014-04-26",
                            "value": 81790062
                          },
                          {
                            "date": "2014-04-27",
                            "value": 105003761
                          },
                          {
                            "date": "2014-04-28",
                            "value": 100457727
                          },
                          {
                            "date": "2014-04-29",
                            "value": 98253926
                          },
                          {
                            "date": "2014-04-30",
                            "value": 67956992
                          }
                        ]
                      ]
                    var ts1 = 1388534400000;
                var ts2 = 1388620800000;
                var ts3 = 1389052800000;

                var dataSet = [[],[],[]];

                for(var i=0; i<12; i++) {
                    ts1 = ts1 + 86400000;
                    var innerArr = [ts1, dataSeries[2][i].value];
                    dataSet[0].push(innerArr)
                }
                for(var i=0; i<18; i++) {
                    ts2 = ts2 + 86400000;
                    var innerArr = [ts2, dataSeries[1][i].value];
                    dataSet[1].push(innerArr)
                }
                for(var i=0; i<12; i++) {
                    ts3 = ts3 + 86400000;
                    var innerArr = [ts3, dataSeries[0][i].value];
                    dataSet[2].push(innerArr)
                }

                var options = {
                    chart: {
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        enabled: false
                    },
                    },
                    plotOptions: {
                    line: {
                        curve: 'smooth',
                    }
                    },
                    dataLabels: {
                    enabled: false
                    },
                    series: [{
                    name: 'PRODUCT A',
                    data: dataSet[0]
                    }, {
                    name: 'PRODUCT B',
                    data: dataSet[1]
                    }, {
                    name: 'PRODUCT C',
                    data: dataSet[2]
                    }],
                    markers: {
                    size: 0,
                    style: 'full',
                    },
                    fill: {
                    gradient: {
                        enabled: true,
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100]
                        },
                },
                    yaxis: {
                    labels: {
                        style: {
                            color: '#8e8da4',
                        },
                        offsetX: 0,
                        formatter: function(val) {
                            return (val / 1000000).toFixed(2);
                        },
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    }
                    },
                    xaxis: {
                    type: 'datetime',
                    tickAmount: 8,
                    min: new Date("01/01/2014").getTime(),
                    max: new Date("01/20/2014").getTime(),
                    labels: {
                        rotate: -15,
                        rotateAlways: true,
                        formatter: function(val, timestamp) {
                            return moment(new Date(timestamp)).format("DD MMM YYYY")
                        }
                    }
                    },
                    title: {
                    text: 'Irregular Data in Time Series',
                    align: 'left',
                    offsetX: 14
                    },
                    tooltip: {
                    shared: true
                    },
                    legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetX: -10
                    }
                }

                var chart = new ApexCharts(
                        document.querySelector("#irregular"),
                        options
                    );

                    chart.render();

                            }
                  
                    
        
    }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){
    $(function(){
        var autonumeric = jQuery(".autonumber");
        if (autonumeric.length > 0) {
             /****** Spanish-numeric ******/
                new AutoNumeric('#Spanish', 'Spanish');
                /****** NorthAmerican-numeric ******/
                new AutoNumeric('#NorthAmerican', 'NorthAmerican');
                /****** British-numeric ******/
                new AutoNumeric('#British', 'British');
                /****** Swiss-numeric ******/
                new AutoNumeric('#Swiss', 'Swiss');
                /****** Japanese-numeric ******/
                new AutoNumeric('#Japanese', 'Japanese');
                /****** Chinese-numeric ******/
                new AutoNumeric('#Chinese', 'Chinese');
                /****** Brazilian-numeric ******/
                new AutoNumeric('#Brazilian', 'Brazilian');
                /****** Turkish-numeric ******/
                new AutoNumeric('#Turkish', 'Turkish');
                /****** DecimalCharCommaSeparator-numeric ******/
                new AutoNumeric('#DecimalCharCommaSeparator', 'dotDecimalCharCommaSeparator');
                /****** commaDecimalCharDotSeparator-numeric ******/
                new AutoNumeric('#commaDecimalCharDotSeparator', 'commaDecimalCharDotSeparator');
                /****** integer-numeric ******/
                new AutoNumeric('#integer', 'integer');
                /****** integerPos-numeric ******/
                new AutoNumeric('#integerPos', 'integerPos');
                /****** integerNeg-numeric ******/
                new AutoNumeric('#integerNeg', 'integerNeg');
                /****** float-numeric ******/
                new AutoNumeric('#float', 'float');
                /****** floatPos-numeric ******/
                new AutoNumeric('#floatPos', 'floatPos');
                /****** floatNeg-numeric ******/
                new AutoNumeric('#floatNeg', 'floatNeg');
                /****** numeric-numeric ******/
                new AutoNumeric('#numeric', 'numeric');
                /****** numericPos-numeric ******/
                new AutoNumeric('#numericPos', 'numericPos');
                /****** numericNeg-numeric ******/
                new AutoNumeric('#numericNeg', 'numericNeg');
                /****** euro-numeric ******/
                new AutoNumeric('#euro', 'euro');
                /****** euroPos-numeric ******/
                new AutoNumeric('#euroPos', 'euroPos');
                /****** euroNeg-numeric ******/
                new AutoNumeric('#euroNeg', 'euroNeg');
                /****** euroSpace-numeric ******/
                new AutoNumeric('#euroSpace', 'euroSpace');
                /****** euroSpacePos-numeric ******/
                new AutoNumeric('#euroSpacePos', 'euroSpacePos');
                /****** euroSpaceNeg-numeric ******/
                new AutoNumeric('#euroSpaceNeg', 'euroSpaceNeg');
                /****** dollar-numeric ******/
                new AutoNumeric('#dollar', 'dollar');
                /****** dollarPos-numeric ******/
                new AutoNumeric('#dollarPos', 'dollarPos');
                /****** dollarNeg-numeric ******/
                new AutoNumeric('#dollarNeg', 'dollarNeg');
                /****** french-numeric ******/
                new AutoNumeric('#percentageEU2dec', 'percentageEU2dec');
                /****** percentageEU2decPos-numeric ******/
                new AutoNumeric('#percentageEU2decPos', 'percentageEU2decPos');
                /****** percentageEU2decNeg-numeric ******/
                new AutoNumeric('#percentageEU2decNeg', 'percentageEU2decNeg');
                /****** percentageUS2dec-numeric ******/
                new AutoNumeric('#percentageUS2dec', 'percentageUS2dec');
                /****** percentageUS3decPos-numeric ******/
                new AutoNumeric('#percentageUS3decPos', 'percentageUS3decPos');
                /****** percentageUS3decNeg-numeric ******/
                new AutoNumeric('#percentageUS3decNeg', 'percentageUS3decNeg');
        }

    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var customfile = jQuery(".custom-file-input");
        if (customfile.length > 0) {
                bsCustomFileInput.init();
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var c3Chart = jQuery(".c3chart-wrapper");
        if (c3Chart.length > 0) {
                    var c3demo1 = jQuery("#c3demo1");
                    if (c3demo1.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo1',
                            data: {
                                columns: [
                                    ['data1', 30, 200, 100, 400, 150, 250],
                                    ['data2', 50, 20, 10, 40, 15, 25]
                                ],
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6'
                                },
                            }
                        });
                    }
                    var c3demo2 = jQuery("#c3demo2");
                    if (c3demo2.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo2',
                            data: {
                                columns: [
                                    ['data1', 300, 350, 300, 0, 0, 0],
                                    ['data2', 130, 100, 140, 200, 150, 50]
                                ],
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6'
                                },
                                types: {
                                    data1: 'area',
                                    data2: 'area-spline'
                                }
                            }
                        });
                    }
                    var c3demo3 = jQuery("#c3demo3");
                    if (c3demo3.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo3',
                            data: {
                                columns: [
                                    ['data1', 30, 200, 100, 400, 150, 250],
                                    ['data2', 130, 100, 140, 200, 150, 50],
                                    ['data3', 130, 150, 200, 300, 200, 100]
                                ],
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6',
                                    data3: '#ffbc1d'
                                },
                                type: 'bar'
                            },
                            bar: {
                                width: {
                                    ratio: 0.5 // this makes bar width 50% of length between ticks
                                }
                            }
                        });
                    }
                    var c3demo4 = jQuery("#c3demo4");
                    if (c3demo4.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo4',
                            data: {
                                columns: [
                                    ['data1', -30, 200, 200, 400, -150, 250],
                                    ['data2', 130, 100, -100, 200, -150, 50],
                                    ['data3', -230, 200, 200, -300, 250, 250],
                                    ['data4', 100, -50, 150, 200, -300, -100]
                                ],
                                type: 'bar',
                                colors: {
                                    data1: '#8E54E9',
                                    data2: '#4776E6',
                                    data3: '#ffbc1d',
                                    data4: '#25d09a'
                                },
                                groups: [
                                    ['data1', 'data2', 'data3', 'data4']
                                ]
                            },
                            grid: {
                                y: {
                                    lines: [{ value: 0 }]
                                }
                            }
                        });
                    }
                    var c3demo5 = jQuery("#c3demo5");
                    if (c3demo5.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo5',
                            data: {
                                columns: [
                                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                                    ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                                ],
                                colors: {
                                    setosa: '#8E54E9',
                                    versicolor: '#4776E6',
                                    virginica: '#ffbc1d'
                                },
                                type: 'pie'
                            }
                        });
                    }
                    var c3demo6 = jQuery("#c3demo6");
                    if (c3demo6.length > 0) {
                        var chart = c3.generate({
                            bindto: '#c3demo6',
                            data: {
                                columns: [
                                    ["desktop", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                                    ["tablet", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                                    ["mobile", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                                ],
                                colors: {
                                    desktop: '#8E54E9',
                                    tablet: '#4776E6',
                                    mobile: '#ffbc1d'
                                },
                                type: 'donut',
                            },
                            donut: {
                                title: "Browser Statistic"
                            }
                        });
                    }
        }
    });

})(window, document, window.jQuery, document.ready);
(function(window, document, $, undefined){

    $(function(){
        var chartistChart = jQuery(".chartist-wrapper");
        if (chartistChart.length > 0) {

                //simple line chart
                var chartistdemo1 = jQuery("#chartistdemo1");
                if (chartistdemo1.length > 0) {
                    new Chartist.Line('.ct-chart-line', {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        series: [
                            [12, 9, 7, 8, 5],
                            [2, 1, 3.5, 7, 3],
                            [1, 3, 4, 5, 6]
                        ]
                    }, {
                        fullWidth: true,
                        chartPadding: {
                            right: 30,
                            left:0
                          },
                          axisY: {
                            offset: 30
                        },
                    });

                }
                var chartistdemo2 = jQuery("#chartistdemo2");
                if (chartistdemo2.length > 0) {
                    new Chartist.Line('.ct-chart-area', {
                        labels: [1, 2, 3, 4, 5, 6, 7, 8],
                        series: [
                            [5, 9, 7, 8, 5, 3, 5, 4]
                        ]
                    }, {
                        low: 0,
                        showArea: true,
                        fullWidth: true,
                        axisY: {
                            offset: 20
                        },
                        chartPadding: {
                            right: 10,
                            left:0
                          }
                    });
                }
                var chartistdemo3 = jQuery("#chartistdemo3");
                if (chartistdemo3.length > 0) {
                    var data = {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        series: [
                            [6, 4, 8, 7, 6, 4, 8, 7, 6, 4, 8, 7],
                            [4, 3, 7, 6.5, 4, 3, 7, 6.5, 4, 3, 7, 6.5],
                            [8, 3, 1, 6, 8, 3, 1, 6, 8, 3, 1, 6]
                        ]
                    };

                    var options = {
                        seriesBarDistance: 20,
                        axisY: {
                            offset: 20,
                            scaleMinSpace: 15
                        },
                    };



                    var responsiveOptions = [
                        ['screen and (max-width: 640px)', {
                            seriesBarDistance: 0,
                            axisX: {
                                labelInterpolationFnc: function(value) {
                                    return value[0];
                                }
                            }
                        }]
                    ];

                    new Chartist.Bar('.ct-chart-bar', data, options, responsiveOptions);
                }
                var chartistdemo4 = jQuery("#chartistdemo4");
                if (chartistdemo4.length > 0) {
                    new Chartist.Bar('.ct-chart-stacked', {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        series: [
                            [800000, 1200000, 1400000, 1300000],
                            [200000, 400000, 500000, 300000],
                            [100000, 200000, 400000, 600000]
                        ]
                    }, {
                        stackBars: true,
                        axisY: {
                            labelInterpolationFnc: function(value) {
                                return (value / 1000) + 'k';
                            }
                        }
                    }).on('draw', function(data) {
                        if (data.type === 'bar') {
                            data.element.attr({
                                style: 'stroke-width: 30px'
                            });
                        }
                    });
                }
                var chartistdemo5 = jQuery("#chartistdemo5");
                if (chartistdemo5.length > 0) {
                    new Chartist.Bar('.ct-chart-horizontalbar', {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        series: [
                            [5, 4, 3, 7, 5, 10, 3],
                            [3, 2, 9, 5, 4, 6, 4]
                        ]
                    }, {
                        seriesBarDistance: 10,
                        reverseData: true,
                        horizontalBars: true,
                        axisY: {
                            offset: 50
                        },
                        chartPadding: {
                            right: 20,
                            left:0
                          }
                    });
                }
                var chartistdemo6 = jQuery("#chartistdemo6");
                if (chartistdemo6.length > 0) {
                    var data = {
                        series: [4, 3, 4, 3, 2]
                    };

                    var sum = function(a, b) { return a + b };

                    new Chartist.Pie('.ct-chart-pie', data, {
                        labelInterpolationFnc: function(value) {
                            return Math.round(value / data.series.reduce(sum) * 100) + '%';
                        }
                    });
                }
                var chartistdemo7 = jQuery("#chartistdemo7");
                if (chartistdemo7.length > 0) {
                    new Chartist.Pie('.ct-chart-donut', {
                        series: [20, 10, 30, 40]
                    }, {
                        donut: true,
                        donutWidth: 60,
                        donutSolid: true,
                        startAngle: 270,
                        showLabel: true
                    });
                }
                var chartistdemo8 = jQuery("#chartistdemo8");
                if (chartistdemo8.length > 0) {
                    new Chartist.Pie('.ct-chart-gauge', {
                        series: [20, 10, 30, 40]
                    }, {
                        donut: true,
                        donutWidth: 60,
                        donutSolid: true,
                        startAngle: 270,
                        total: 200,
                        showLabel: true
                    });
                }
                //analytical dashboard chart
                var analytical1 = jQuery("#analytical1");
                if (analytical1.length > 0) {
                    var data = {
                        series: [
                            [6, -5, 7, -6, 4, -3]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical1', data, options);
                }
                //analytical dashboard chart
                var analytical2 = jQuery("#analytical2");
                if (analytical2.length > 0) {
                    var data = {
                        series: [
                            [4, -7, 6, -3, 5, -2]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical2', data, options);
                }
                //analytical dashboard chart
                var analytical3 = jQuery("#analytical3");
                if (analytical3.length > 0) {
                    var data = {
                        series: [
                            [6, -3, 5, -7, 2, -4]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical3', data, options);
                }
                //analytical dashboard chart
                var analytical4 = jQuery("#analytical4");
                if (analytical4.length > 0) {
                    var data = {
                        series: [
                            [5, -3, 6, -8, 3, -5]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical4', data, options);
                }
                //analytical dashboard chart
                var analytical5 = jQuery("#analytical5");
                if (analytical5.length > 0) {
                    var data = {
                        series: [
                            [3, -5, 2, -6, 7, -3]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical5', data, options);
                }
                //analytical dashboard chart
                var analytical6 = jQuery("#analytical6");
                if (analytical6.length > 0) {
                    var data = {
                        series: [
                            [7, -4, 6, -3, 8, -2]
                        ]
                    };

                    var options = {
                        high: 10,
                        low: -10,
                        seriesBarDistance: 10,
                        fullWidth: true,
                        showLabel: false,
                        chartPadding: 0,
                        axisX: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        },
                        axisY: {
                            showGrid: false,
                            showLabel: false,
                            offset: 0
                        }
                    };

                    new Chartist.Bar('#analytical6', data, options);
                }
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var chartJS = jQuery(".chartjs-wrapper");
        if (chartJS.length > 0) {
                    /* Utils */
                    window.chartColors = {
                        red: 'rgb(233, 84, 84)',
                        orange: 'rgb(253, 153, 68)',
                        yellow: 'rgb(255, 188, 29)',
                        green: 'rgb(37, 208, 154)',
                        blue: 'rgb(71, 118, 230)',
                        purple: 'rgb(142, 84, 233)',
                        grey: 'rgb(148, 148, 148)'
                    };

                    (function(global) {
                        var Months = [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December'
                        ];

                        var COLORS = [
                            '#4dc9f6',
                            '#f67019',
                            '#f53794',
                            '#537bc4',
                            '#acc236',
                            '#166a8f',
                            '#00a950',
                            '#58595b',
                            '#8549ba'
                        ];

                        var Samples = global.Samples || (global.Samples = {});
                        var Color = global.Color;

                        Samples.utils = {
                            // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
                            srand: function(seed) {
                                this._seed = seed;
                            },

                            rand: function(min, max) {
                                var seed = this._seed;
                                min = min === undefined ? 0 : min;
                                max = max === undefined ? 1 : max;
                                this._seed = (seed * 9301 + 49297) % 233280;
                                return min + (this._seed / 233280) * (max - min);
                            },

                            numbers: function(config) {
                                var cfg = config || {};
                                var min = cfg.min || 0;
                                var max = cfg.max || 1;
                                var from = cfg.from || [];
                                var count = cfg.count || 8;
                                var decimals = cfg.decimals || 8;
                                var continuity = cfg.continuity || 1;
                                var dfactor = Math.pow(10, decimals) || 0;
                                var data = [];
                                var i, value;

                                for (i = 0; i < count; ++i) {
                                    value = (from[i] || 0) + this.rand(min, max);
                                    if (this.rand() <= continuity) {
                                        data.push(Math.round(dfactor * value) / dfactor);
                                    } else {
                                        data.push(null);
                                    }
                                }

                                return data;
                            },

                            labels: function(config) {
                                var cfg = config || {};
                                var min = cfg.min || 0;
                                var max = cfg.max || 100;
                                var count = cfg.count || 8;
                                var step = (max - min) / count;
                                var decimals = cfg.decimals || 8;
                                var dfactor = Math.pow(10, decimals) || 0;
                                var prefix = cfg.prefix || '';
                                var values = [];
                                var i;

                                for (i = min; i < max; i += step) {
                                    values.push(prefix + Math.round(dfactor * i) / dfactor);
                                }

                                return values;
                            },

                            months: function(config) {
                                var cfg = config || {};
                                var count = cfg.count || 12;
                                var section = cfg.section;
                                var values = [];
                                var i, value;

                                for (i = 0; i < count; ++i) {
                                    value = Months[Math.ceil(i) % 12];
                                    values.push(value.substring(0, section));
                                }

                                return values;
                            },

                            color: function(index) {
                                return COLORS[index % COLORS.length];
                            },

                            transparentize: function(color, opacity) {
                                var alpha = opacity === undefined ? 0.5 : 1 - opacity;
                                return Color(color).alpha(alpha).rgbString();
                            }
                        };

                        // DEPRECATED
                        window.randomScalingFactor = function() {
                            return Math.round(Samples.utils.rand(-100, 100));
                        };

                        // INITIALIZATION

                        Samples.utils.srand(Date.now());

                    }(this));
                    /*Custom Points*/
                    var customTooltips = function(tooltip) {
                        $(this._chart.canvas).css("cursor", "pointer");
                        var positionY = this._chart.canvas.offsetTop;
                        var positionX = this._chart.canvas.offsetLeft;
                        $(".chartjs-tooltip").css({
                            opacity: 0,
                        });
                        if (!tooltip || !tooltip.opacity) {
                            return;
                        }
                        if (tooltip.dataPoints.length > 0) {
                            tooltip.dataPoints.forEach(function(dataPoint) {
                                var content = [dataPoint.xLabel, dataPoint.yLabel].join(": ");
                                var $tooltip = $("#tooltip-" + dataPoint.datasetIndex);

                                $tooltip.html(content);
                                $tooltip.css({
                                    opacity: 1,
                                    top: positionY + dataPoint.y + "px",
                                    left: positionX + dataPoint.x + "px",
                                });
                            });
                        }
                    };
                    var color = Chart.helpers.color;
                    var lineChartData = {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [{
                            label: "My First dataset",
                            backgroundColor: color(window.chartColors.purple).alpha(0.2).rgbString(),
                            borderColor: window.chartColors.purple,
                            pointBackgroundColor: window.chartColors.purple,
                            data: [
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor()
                            ]
                        }, {
                            label: "My Second dataset",
                            backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                            borderColor: window.chartColors.blue,
                            pointBackgroundColor: window.chartColors.blue,
                            data: [
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor(),
                                randomScalingFactor()
                            ]
                        }]
                    };
                    //simple line chart
                    var chartjsdemo1 = jQuery("#chartjsdemo1");
                    if (chartjsdemo1.length > 0) {
                        var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var config = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "Facebook",
                                    borderColor: window.chartColors.blue,
                                    backgroundColor: window.chartColors.blue,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Twitter",
                                    borderColor: window.chartColors.green,
                                    backgroundColor: window.chartColors.green,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "LinkedIn",
                                    borderColor: window.chartColors.purple,
                                    backgroundColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Google+",
                                    borderColor: window.chartColors.yellow,
                                    backgroundColor: window.chartColors.yellow,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: false,
                                    text: "Line Chart - Stacked Area"
                                },
                                tooltips: {
                                    mode: 'index',
                                },
                                hover: {
                                    mode: 'index'
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12,
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12,
                                            stepSize: 1,
                                            beginAtZero: true
                                        }
                                    }],
                                    yAxes: [{
                                        stacked: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Price',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        };
                        var ctx1 = document.getElementById("chartjsdemo1").getContext("2d");
                        window.myLine1 = new Chart(ctx1, config);
                    }
                    var chartjsdemo2 = jQuery("#chartjsdemo2");
                    if (chartjsdemo2.length > 0) {
                        // Line chart
                        var config2 = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "Unfilled",
                                    fill: false,
                                    backgroundColor: window.chartColors.yellow,
                                    borderColor: window.chartColors.yellow,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Dashed",
                                    fill: false,
                                    backgroundColor: window.chartColors.blue,
                                    borderColor: window.chartColors.blue,
                                    borderDash: [5, 5],
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    label: "Filled",
                                    backgroundColor: window.chartColors.purple,
                                    borderColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    fill: true,
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: false,
                                    text: 'Line Chart - Line styles'
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false,
                                },
                                hover: {
                                    mode: 'nearest',
                                    intersect: true
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12,
                                            stepSize: 1,
                                            beginAtZero: true
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Value',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        };
                        var ctx2 = document.getElementById("chartjsdemo2").getContext("2d");
                        window.myLine2 = new Chart(ctx2, config2);
                    }
                    var chartjsdemo3 = jQuery("#chartjsdemo3");
                    if (chartjsdemo3.length > 0) {
                        // Donut chart
                        var config3 = {
                            type: 'doughnut',
                            data: {
                                datasets: [{
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                    ],
                                    backgroundColor: [
                                        window.chartColors.red,
                                        window.chartColors.purple,
                                        window.chartColors.yellow,
                                        window.chartColors.green,
                                        window.chartColors.blue,
                                    ],
                                    label: 'Dataset 1'
                                }],
                                labels: [
                                    "Red",
                                    "Purple",
                                    "Yellow",
                                    "Green",
                                    "Blue"
                                ]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                legend: {
                                    position: 'bottom',
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                title: {
                                    display: false,
                                    text: 'Doughnut Chart'
                                },
                                animation: {
                                    animateScale: true,
                                    animateRotate: true
                                }
                            }
                        };
                        var ctx3 = document.getElementById("chartjsdemo3").getContext("2d");
                        window.myLine3 = new Chart(ctx3, config3);
                    }
                    var chartjsdemo4 = jQuery("#chartjsdemo4");
                    if (chartjsdemo4.length > 0) {
                        // Combo
                        var timeFormat = 'MM/DD/YYYY HH:mm';

                        function newDateString(days) {
                            return moment().add(days, 'd').format(timeFormat);
                        }
                        var color = Chart.helpers.color;
                        var config4 = {
                            type: 'bar',
                            data: {
                                labels: [
                                    newDateString(0),
                                    newDateString(1),
                                    newDateString(2),
                                    newDateString(3),
                                    newDateString(4),
                                    newDateString(5),
                                    newDateString(6)
                                ],
                                datasets: [{
                                    type: 'bar',
                                    label: 'Dataset 1',
                                    backgroundColor: color(window.chartColors.purple).alpha(1).rgbString(),
                                    borderColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    type: 'bar',
                                    label: 'Dataset 2',
                                    backgroundColor: color(window.chartColors.blue).alpha(1).rgbString(),
                                    borderColor: window.chartColors.blue,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, {
                                    type: 'line',
                                    label: 'Dataset 3',
                                    backgroundColor: color(window.chartColors.yellow).alpha(1).rgbString(),
                                    borderColor: window.chartColors.yellow,
                                    fill: false,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }, ]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Combo Time Scale"
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        type: "time",
                                        display: true,
                                        time: {
                                            format: timeFormat
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                },
                            }
                        };
                        var ctx4 = document.getElementById("chartjsdemo4").getContext("2d");
                        window.myLine4 = new Chart(ctx4, config4);
                    }
                    var chartjsdemo5 = jQuery("#chartjsdemo5");
                    if (chartjsdemo5.length > 0) {
                        var chartEl = document.getElementById("chartjsdemo5");
                        var chart = new Chart(chartEl, {
                            type: "line",
                            data: lineChartData,
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Custom Tooltips using Data Points"
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                tooltips: {
                                    enabled: false,
                                    mode: 'index',
                                    intersect: false,
                                    custom: customTooltips
                                },
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                },
                            }
                        });
                    }
                    var chartjsdemo6 = jQuery("#chartjsdemo6");
                    if (chartjsdemo6.length > 0) {
                        // chart basic
                        var config6 = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "My First dataset",
                                    backgroundColor: window.chartColors.purple,
                                    borderColor: window.chartColors.purple,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    fill: false,
                                }, {
                                    label: "My Second dataset",
                                    fill: false,
                                    backgroundColor: window.chartColors.blue,
                                    borderColor: window.chartColors.blue,
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                }]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: 'Line Chart - Basic'
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false,
                                },
                                hover: {
                                    mode: 'nearest',
                                    intersect: true
                                },
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Value',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        };
                        var ctx6 = document.getElementById("chartjsdemo6").getContext("2d");
                        window.myLine6 = new Chart(ctx6, config6);
                    }
                    var chartjsdemo7 = jQuery("#chartjsdemo7");
                    if (chartjsdemo7.length > 0) {
                        var config7 = {
                            type: 'line',
                            data: {
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [{
                                    label: "dataset - big points",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.purple,
                                    borderColor: window.chartColors.purple,
                                    fill: false,
                                    borderDash: [5, 5],
                                    pointRadius: 15,
                                    pointHoverRadius: 10,
                                }, {
                                    label: "dataset - individual point sizes",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.blue,
                                    borderColor: window.chartColors.blue,
                                    fill: false,
                                    borderDash: [5, 5],
                                    pointRadius: [2, 4, 6, 18, 0, 12, 20],
                                }, {
                                    label: "dataset - large pointHoverRadius",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.green,
                                    borderColor: window.chartColors.green,
                                    fill: false,
                                    pointHoverRadius: 30,
                                }, {
                                    label: "dataset - large pointHitRadius",
                                    data: [
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor(),
                                        randomScalingFactor()
                                    ],
                                    backgroundColor: window.chartColors.yellow,
                                    borderColor: window.chartColors.yellow,
                                    fill: false,
                                    pointHitRadius: 20,
                                }]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                      
                                hover: {
                                    mode: 'index'
                                },
                                legend: {
                                    position: 'bottom',
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Month',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Value',
                                            fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 14
                                        },
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                },
                                title: {
                                    display: false,
                                    text: 'Line Chart - Different point sizes'
                                }
                            }
                        };
                        var ctx7 = document.getElementById("chartjsdemo7").getContext("2d");
                        window.myLine7 = new Chart(ctx7, config7);
                    }
                    var chartjsdemo8 = jQuery("#chartjsdemo8");
                    if (chartjsdemo8.length > 0) {
                        // Stacked bar chart
                        var barChartData = {
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                            datasets: [{
                                label: 'Dataset 1',
                                backgroundColor: window.chartColors.purple,
                                data: [
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor()
                                ]
                            }, {
                                label: 'Dataset 2',
                                backgroundColor: window.chartColors.blue,
                                data: [
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor()
                                ]
                            }, {
                                label: 'Dataset 3',
                                backgroundColor: window.chartColors.yellow,
                                data: [
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor(),
                                    randomScalingFactor()
                                ]
                            }]
                        };
                        var ctx8 = document.getElementById("chartjsdemo8").getContext("2d");
                        window.myBar = new Chart(ctx8, {
                            type: 'bar',
                            data: barChartData,
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Bar Chart - Stacked"
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false
                                },
                                
                                legend: {
                                    labels: {
                                        fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                        fontFamily: 'Roboto',
                                        fontSize: 12
                                    }
                                },
                                scales: {
                                    xAxes: [{
                                        stacked: true,
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }],
                                    yAxes: [{
                                        stacked: true,
                                        ticks: {
                                            fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                            fontFamily: 'Roboto',
                                            fontSize: 12
                                        }
                                    }]
                                }
                            }
                        });
                    }
                    
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

$(function(){
    var comingsoon = $('.comingsoon')
    if (comingsoon.length > 0) {
        var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        let countDown = new Date('dec 30, 2019 00:00:00').getTime(),
        x = setInterval(function() {
        let now = new Date().getTime(),
        distance = countDown - now;
        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second)
}
});

})(window, document, window.jQuery);

(function(window, document, $, undefined){

    $(function(){
        var dataTable = jQuery(".datatable-wrapper");
        if (dataTable.length > 0) {
            $('#datatable').DataTable({
                "bLengthChange": false,
                "searching": false,
                "bPaginate":true,
                "bSortable": true
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
$('.date-picker-default').datepicker({
        format: 'mm-dd-yyyy',
        autoclose: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });


    $('.display-years').datepicker({
        autoclose: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

    $('.display-months').datepicker({
        format: 'mm-dd',
        autoclose: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });
    

    $('#datepicker-inline').datepicker({
        todayHighlight: true,
        autoclose: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });


    $('#datepicker-action').datepicker({
        todayBtn: "linked",
        clearBtn: true,
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });


    $('#datepicker-top-left').datepicker({
        orientation: "top left",
        todayHighlight: true,
        autoclose: true,
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

    $('#datepicker-top-right').datepicker({
        orientation: "top right",
        todayHighlight: true,
        autoclose: true,
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

    $('#datepicker-bottom-left').datepicker({
        orientation: "bottom left",
        todayHighlight: true,
        autoclose: true,
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

    $('#datepicker-bottom-right').datepicker({
        orientation: "bottom right",
        todayHighlight: true,
        autoclose: true,
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    });

var checkin = $('.range-from').datepicker({
        onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();

        $('.range-to')[0].focus();
    }).data('datepicker');
    var checkout = $('.range-to').datepicker({
        onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        checkout.hide();
    }).data('datepicker');

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var dualListBox = jQuery(".duallistbox");
        if (dualListBox.length > 0) {
            $('#duallistbox').bootstrapDualListbox({
                nonSelectedListLabel: 'Non-selected',
                selectedListLabel: 'Selected',
                preserveSelectionOnMove: 'moved',
                moveOnSelect: false
            });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var dualListBox = jQuery("#tableedit");
        if (dualListBox.length > 0) {
        $('#tableedit').Tabledit({
            deleteButton: false,
            saveButton: false,
            autoFocus: false,
            buttons: {
                edit: {
                    class: 'btn btn-sm btn-primary',
                    html: '<span class="fa fa-pencil"></span> &nbsp EDIT',
                    action: 'edit'
                }
            },
            columns: {
                identifier: [0, 'id'],
                editable: [[1, 'car'], [2, 'color']]
            }
        });
    }
});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var eventCalendar = jQuery(".event-calendar");
        if (eventCalendar.length > 0) {
            $('#external-events .fc-event').each(function() {

                // store data so the calendar knows to render an event upon drop
                $(this).data('event', {
                    title: $.trim($(this).text()), // use the element's text as the event title
                    stick: true, // maintain when user navigates (see docs on the renderEvent method)
                    className: $(this).data('color')
                });

                // make the event draggable using jQuery UI
                $(this).draggable({
                    zIndex: 999,
                    revert: true,      // will cause the event to go back to its
                    revertDuration: 0  //  original position after the drag
                });

            });

            $('#event-calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: true,
                droppable: true,
                drop: function() {
                    // is the "remove after drop" checkbox checked?
                    if ($('#drop-remove').is(':checked')) {
                      // if so, remove the element from the "Draggable Events" list
                      $(this).remove();
                    }
                  },
                events: [{
                        title: 'Simple Event',
                        start: '2019-02-22',
                        end: '2019-02-25',
                        className: 'fc-event-danger'
                    },
                    {
                        title: 'Google',
                        url: 'https://www.google.com/',
                        start: '2019-02-18',
                        className: 'fc-event-success'
                    },
                    {
                        title: 'Family Vacation',
                        start: '2019-02-14',
                        end: '2019-02-18',
                        className: 'fc-event-primary'
                    }
                ]
            });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var eventListCalendar = jQuery(".event-list-calendar");
        if (eventListCalendar.length > 0) {
            $('#event-list-calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'listDay,listWeek,month'
                },
                views: {
                    listDay: { buttonText: 'list day' },
                    listWeek: { buttonText: 'list week' }
                },
                height: 650,
                defaultView: 'listWeek',
                defaultDate: '2018-09-12',
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                events: [{
                        title: 'All Day Event',
                        start: '2018-09-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2018-09-07',
                        end: '2018-09-10'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2018-09-09T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2018-09-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: '2018-09-11',
                        end: '2018-09-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2018-09-12T10:30:00',
                        end: '2018-09-12T12:30:00'
                    },
                    {
                        title: 'Lunch',
                        start: '2018-09-12T12:00:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2018-09-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        start: '2018-09-12T17:30:00'
                    },
                    {
                        title: 'Dinner',
                        start: '2018-09-12T20:00:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2018-09-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2018-09-28'
                    }
                ]
            });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var exportTable = jQuery(".export-table-wrapper");
        if (exportTable.length > 0) {
            $("#export-table").tableExport({
                headers: true,
                footers: true,
                formats: ["xlsx", "csv", "txt"],
                bootstrap: true,
                exportButtons: true,
                position: "top"                
            });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var flotChart = jQuery(".flot-chart-wrapper");
        if (flotChart.length > 0) {
                        var d1 = [];
                        for (var i = 0; i <= 10; i += 1) {
                            d1.push([i, parseInt(Math.random() * 30)]);
                        }

                        var d2 = [];
                        for (var i = 0; i <= 10; i += 1) {
                            d2.push([i, parseInt(Math.random() * 30)]);
                        }

                        var d3 = [];
                        for (var i = 0; i <= 10; i += 1) {
                            d3.push([i, parseInt(Math.random() * 30)]);
                        }

                        var stack = 0,
                            bars = true,
                            lines = false,
                            steps = false;

                        function plotWithOptions() {
                            $.plot("#flot-stacked", [d1, d2, d3], {
                                grid: { borderWidth: 0, labelMargin: 5, axisMargin: 0, minBorderMargin: 0 },
                                series: {
                                    stack: stack,
                                    lines: {
                                        show: lines,
                                        fill: true,
                                        steps: steps
                                    },
                                    bars: {
                                        show: bars,
                                        barWidth: 0.6,
                                        align: "center"
                                    }
                                },
                                colors: ["#4776E6", "#8E54E9", "#fbaf54"]
                            });
                        }

                        plotWithOptions();


                        // flot-real-time

                        var data = [],
                            totalPoints = 300;

                        function getRandomData() {

                            if (data.length > 0)
                                data = data.slice(1);

                            // Do a random walk

                            while (data.length < totalPoints) {

                                var prev = data.length > 0 ? data[data.length - 1] : 50,
                                    y = prev + Math.random() * 10 - 5;

                                if (y < 0) {
                                    y = 0;
                                } else if (y > 100) {
                                    y = 100;
                                }

                                data.push(y);
                            }

                            // Zip the generated y values with the x values

                            var res = [];
                            for (var i = 0; i < data.length; ++i) {
                                res.push([i, data[i]])
                            }

                            return res;
                        }

                        // Set up the control widget

                        var updateInterval = 100;
                        $("#flot-real-time").val(updateInterval).change(function() {
                            var v = $(this).val();
                            if (v && !isNaN(+v)) {
                                updateInterval = +v;
                                if (updateInterval < 1) {
                                    updateInterval = 1;
                                } else if (updateInterval > 2000) {
                                    updateInterval = 2000;
                                }
                                $(this).val("" + updateInterval);
                            }
                        });

                        var plot = $.plot("#flot-real-time", [getRandomData()], {
                            grid: { borderWidth: 0, labelMargin: 0, axisMargin: 0, minBorderMargin: 0 },
                            series: {
                                shadowSize: 0 // Drawing is faster without shadows
                            },
                            colors: [" #8E54E9"],
                            yaxis: {
                                min: 0,
                                max: 100
                            },
                            xaxis: {
                                show: false
                            }
                        });

                        function update() {

                            plot.setData([getRandomData()]);

                            // Since the axes don't change, we don't need to call plot.setupGrid()

                            plot.draw();
                            setTimeout(update, updateInterval);
                        }

                        update();

                        // Add the Flot version string to the footer

                        $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");


                        //flot-series-toggle

                        var datasets = {
                            "usa": {
                                label: "USA",
                                data: [
                                    [1988, 483994],
                                    [1989, 479060],
                                    [1990, 457648],
                                    [1991, 401949],
                                    [1992, 424705],
                                    [1993, 402375],
                                    [1994, 377867],
                                    [1995, 357382],
                                    [1996, 337946],
                                    [1997, 336185],
                                    [1998, 328611],
                                    [1999, 329421],
                                    [2000, 342172],
                                    [2001, 344932],
                                    [2002, 387303],
                                    [2003, 440813],
                                    [2004, 480451],
                                    [2005, 504638],
                                    [2006, 528692]
                                ]
                            },
                            "russia": {
                                label: "Russia",
                                data: [
                                    [1988, 218000],
                                    [1989, 203000],
                                    [1990, 171000],
                                    [1992, 42500],
                                    [1993, 37600],
                                    [1994, 36600],
                                    [1995, 21700],
                                    [1996, 19200],
                                    [1997, 21300],
                                    [1998, 13600],
                                    [1999, 14000],
                                    [2000, 19100],
                                    [2001, 21300],
                                    [2002, 23600],
                                    [2003, 25100],
                                    [2004, 26100],
                                    [2005, 31100],
                                    [2006, 34700]
                                ]
                            },
                            "uk": {
                                label: "UK",
                                data: [
                                    [1988, 62982],
                                    [1989, 62027],
                                    [1990, 60696],
                                    [1991, 62348],
                                    [1992, 58560],
                                    [1993, 56393],
                                    [1994, 54579],
                                    [1995, 50818],
                                    [1996, 50554],
                                    [1997, 48276],
                                    [1998, 47691],
                                    [1999, 47529],
                                    [2000, 47778],
                                    [2001, 48760],
                                    [2002, 50949],
                                    [2003, 57452],
                                    [2004, 60234],
                                    [2005, 60076],
                                    [2006, 59213]
                                ]
                            },
                            "germany": {
                                label: "Germany",
                                data: [
                                    [1988, 55627],
                                    [1989, 55475],
                                    [1990, 58464],
                                    [1991, 55134],
                                    [1992, 52436],
                                    [1993, 47139],
                                    [1994, 43962],
                                    [1995, 43238],
                                    [1996, 42395],
                                    [1997, 40854],
                                    [1998, 40993],
                                    [1999, 41822],
                                    [2000, 41147],
                                    [2001, 40474],
                                    [2002, 40604],
                                    [2003, 40044],
                                    [2004, 38816],
                                    [2005, 38060],
                                    [2006, 36984]
                                ]
                            },
                            "denmark": {
                                label: "Denmark",
                                data: [
                                    [1988, 3813],
                                    [1989, 3719],
                                    [1990, 3722],
                                    [1991, 3789],
                                    [1992, 3720],
                                    [1993, 3730],
                                    [1994, 3636],
                                    [1995, 3598],
                                    [1996, 3610],
                                    [1997, 3655],
                                    [1998, 3695],
                                    [1999, 3673],
                                    [2000, 3553],
                                    [2001, 3774],
                                    [2002, 3728],
                                    [2003, 3618],
                                    [2004, 3638],
                                    [2005, 3467],
                                    [2006, 3770]
                                ]
                            },
                            "sweden": {
                                label: "Sweden",
                                data: [
                                    [1988, 6402],
                                    [1989, 6474],
                                    [1990, 6605],
                                    [1991, 6209],
                                    [1992, 6035],
                                    [1993, 6020],
                                    [1994, 6000],
                                    [1995, 6018],
                                    [1996, 3958],
                                    [1997, 5780],
                                    [1998, 5954],
                                    [1999, 6178],
                                    [2000, 6411],
                                    [2001, 5993],
                                    [2002, 5833],
                                    [2003, 5791],
                                    [2004, 5450],
                                    [2005, 5521],
                                    [2006, 5271]
                                ]
                            },
                            "norway": {
                                label: "Norway",
                                data: [
                                    [1988, 4382],
                                    [1989, 4498],
                                    [1990, 4535],
                                    [1991, 4398],
                                    [1992, 4766],
                                    [1993, 4441],
                                    [1994, 4670],
                                    [1995, 4217],
                                    [1996, 4275],
                                    [1997, 4203],
                                    [1998, 4482],
                                    [1999, 4506],
                                    [2000, 4358],
                                    [2001, 4385],
                                    [2002, 5269],
                                    [2003, 5066],
                                    [2004, 5194],
                                    [2005, 4887],
                                    [2006, 4891]
                                ]
                            }
                        };

                        // hard-code color indices to prevent them from shifting as
                        // countries are turned on/off

                        var i = 0;
                        $.each(datasets, function(key, val) {
                            val.color = i;
                            ++i;
                        });

                        // insert checkboxes
                        var choiceContainer = $("#flot-series-toggle");
                        $.each(datasets, function(key, val) {
                            choiceContainer.append("<br/><input type='checkbox' name='" + key +
                                "' checked='checked' id='id" + key + "'></input>" +
                                "<label for='id" + key + "'>" +
                                val.label + "</label>");
                        });

                        choiceContainer.find("input").click(plotAccordingToChoices);

                        function plotAccordingToChoices() {

                            var data = [];

                            choiceContainer.find("input:checked").each(function() {
                                var key = $(this).attr("name");
                                if (key && datasets[key]) {
                                    data.push(datasets[key]);
                                }
                            });

                            if (data.length > 0) {
                                $.plot("#flot-series-toggle", data, {
                                    grid: { borderWidth: 0, labelMargin: 10, axisMargin: 0, minBorderMargin: 0 },
                                    colors: ["#f7b731", "#fd9644", "#32b432", "#8E54E9", "#4776E6", "#e3324c", "#fb0792"],
                                    yaxis: {
                                        min: 0
                                    },
                                    xaxis: {
                                        tickDecimals: 0
                                    }
                                });
                            }
                        }

                        plotAccordingToChoices();

                        // Add the Flot version string to the footer

                        $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");

                        var oilprices = [
                            [1167692400000, 61.05],
                            [1167778800000, 58.32],
                            [1167865200000, 57.35],
                            [1167951600000, 56.31],
                            [1168210800000, 55.55],
                            [1168297200000, 55.64],
                            [1168383600000, 54.02],
                            [1168470000000, 51.88],
                            [1168556400000, 52.99],
                            [1168815600000, 52.99],
                            [1168902000000, 51.21],
                            [1168988400000, 52.24],
                            [1169074800000, 50.48],
                            [1169161200000, 51.99],
                            [1169420400000, 51.13],
                            [1169506800000, 55.04],
                            [1169593200000, 55.37],
                            [1169679600000, 54.23],
                            [1169766000000, 55.42],
                            [1170025200000, 54.01],
                            [1170111600000, 56.97],
                            [1170198000000, 58.14],
                            [1170284400000, 58.14],
                            [1170370800000, 59.02],
                            [1170630000000, 58.74],
                            [1170716400000, 58.88],
                            [1170802800000, 57.71],
                            [1170889200000, 59.71],
                            [1170975600000, 59.89],
                            [1171234800000, 57.81],
                            [1171321200000, 59.06],
                            [1171407600000, 58.00],
                            [1171494000000, 57.99],
                            [1171580400000, 59.39],
                            [1171839600000, 59.39],
                            [1171926000000, 58.07],
                            [1172012400000, 60.07],
                            [1172098800000, 61.14],
                            [1172444400000, 61.39],
                            [1172530800000, 61.46],
                            [1172617200000, 61.79],
                            [1172703600000, 62.00],
                            [1172790000000, 60.07],
                            [1173135600000, 60.69],
                            [1173222000000, 61.82],
                            [1173308400000, 60.05],
                            [1173654000000, 58.91],
                            [1173740400000, 57.93],
                            [1173826800000, 58.16],
                            [1173913200000, 57.55],
                            [1173999600000, 57.11],
                            [1174258800000, 56.59],
                            [1174345200000, 59.61],
                            [1174518000000, 61.69],
                            [1174604400000, 62.28],
                            [1174860000000, 62.91],
                            [1174946400000, 62.93],
                            [1175032800000, 64.03],
                            [1175119200000, 66.03],
                            [1175205600000, 65.87],
                            [1175464800000, 64.64],
                            [1175637600000, 64.38],
                            [1175724000000, 64.28],
                            [1175810400000, 64.28],
                            [1176069600000, 61.51],
                            [1176156000000, 61.89],
                            [1176242400000, 62.01],
                            [1176328800000, 63.85],
                            [1176415200000, 63.63],
                            [1176674400000, 63.61],
                            [1176760800000, 63.10],
                            [1176847200000, 63.13],
                            [1176933600000, 61.83],
                            [1177020000000, 63.38],
                            [1177279200000, 64.58],
                            [1177452000000, 65.84],
                            [1177538400000, 65.06],
                            [1177624800000, 66.46],
                            [1177884000000, 64.40],
                            [1178056800000, 63.68],
                            [1178143200000, 63.19],
                            [1178229600000, 61.93],
                            [1178488800000, 61.47],
                            [1178575200000, 61.55],
                            [1178748000000, 61.81],
                            [1178834400000, 62.37],
                            [1179093600000, 62.46],
                            [1179180000000, 63.17],
                            [1179266400000, 62.55],
                            [1179352800000, 64.94],
                            [1179698400000, 66.27],
                            [1179784800000, 65.50],
                            [1179871200000, 65.77],
                            [1179957600000, 64.18],
                            [1180044000000, 65.20],
                            [1180389600000, 63.15],
                            [1180476000000, 63.49],
                            [1180562400000, 65.08],
                            [1180908000000, 66.30],
                            [1180994400000, 65.96],
                            [1181167200000, 66.93],
                            [1181253600000, 65.98],
                            [1181599200000, 65.35],
                            [1181685600000, 66.26],
                            [1181858400000, 68.00],
                            [1182117600000, 69.09],
                            [1182204000000, 69.10],
                            [1182290400000, 68.19],
                            [1182376800000, 68.19],
                            [1182463200000, 69.14],
                            [1182722400000, 68.19],
                            [1182808800000, 67.77],
                            [1182895200000, 68.97],
                            [1182981600000, 69.57],
                            [1183068000000, 70.68],
                            [1183327200000, 71.09],
                            [1183413600000, 70.92],
                            [1183586400000, 71.81],
                            [1183672800000, 72.81],
                            [1183932000000, 72.19],
                            [1184018400000, 72.56],
                            [1184191200000, 72.50],
                            [1184277600000, 74.15],
                            [1184623200000, 75.05],
                            [1184796000000, 75.92],
                            [1184882400000, 75.57],
                            [1185141600000, 74.89],
                            [1185228000000, 73.56],
                            [1185314400000, 75.57],
                            [1185400800000, 74.95],
                            [1185487200000, 76.83],
                            [1185832800000, 78.21],
                            [1185919200000, 76.53],
                            [1186005600000, 76.86],
                            [1186092000000, 76.00],
                            [1186437600000, 71.59],
                            [1186696800000, 71.47],
                            [1186956000000, 71.62],
                            [1187042400000, 71.00],
                            [1187301600000, 71.98],
                            [1187560800000, 71.12],
                            [1187647200000, 69.47],
                            [1187733600000, 69.26],
                            [1187820000000, 69.83],
                            [1187906400000, 71.09],
                            [1188165600000, 71.73],
                            [1188338400000, 73.36],
                            [1188511200000, 74.04],
                            [1188856800000, 76.30],
                            [1189116000000, 77.49],
                            [1189461600000, 78.23],
                            [1189548000000, 79.91],
                            [1189634400000, 80.09],
                            [1189720800000, 79.10],
                            [1189980000000, 80.57],
                            [1190066400000, 81.93],
                            [1190239200000, 83.32],
                            [1190325600000, 81.62],
                            [1190584800000, 80.95],
                            [1190671200000, 79.53],
                            [1190757600000, 80.30],
                            [1190844000000, 82.88],
                            [1190930400000, 81.66],
                            [1191189600000, 80.24],
                            [1191276000000, 80.05],
                            [1191362400000, 79.94],
                            [1191448800000, 81.44],
                            [1191535200000, 81.22],
                            [1191794400000, 79.02],
                            [1191880800000, 80.26],
                            [1191967200000, 80.30],
                            [1192053600000, 83.08],
                            [1192140000000, 83.69],
                            [1192399200000, 86.13],
                            [1192485600000, 87.61],
                            [1192572000000, 87.40],
                            [1192658400000, 89.47],
                            [1192744800000, 88.60],
                            [1193004000000, 87.56],
                            [1193090400000, 87.56],
                            [1193176800000, 87.10],
                            [1193263200000, 91.86],
                            [1193612400000, 93.53],
                            [1193698800000, 94.53],
                            [1193871600000, 95.93],
                            [1194217200000, 93.98],
                            [1194303600000, 96.37],
                            [1194476400000, 95.46],
                            [1194562800000, 96.32],
                            [1195081200000, 93.43],
                            [1195167600000, 95.10],
                            [1195426800000, 94.64],
                            [1195513200000, 95.10],
                            [1196031600000, 97.70],
                            [1196118000000, 94.42],
                            [1196204400000, 90.62],
                            [1196290800000, 91.01],
                            [1196377200000, 88.71],
                            [1196636400000, 88.32],
                            [1196809200000, 90.23],
                            [1196982000000, 88.28],
                            [1197241200000, 87.86],
                            [1197327600000, 90.02],
                            [1197414000000, 92.25],
                            [1197586800000, 90.63],
                            [1197846000000, 90.63],
                            [1197932400000, 90.49],
                            [1198018800000, 91.24],
                            [1198105200000, 91.06],
                            [1198191600000, 90.49],
                            [1198710000000, 96.62],
                            [1198796400000, 96.00],
                            [1199142000000, 99.62],
                            [1199314800000, 99.18],
                            [1199401200000, 95.09],
                            [1199660400000, 96.33],
                            [1199833200000, 95.67],
                            [1200351600000, 91.90],
                            [1200438000000, 90.84],
                            [1200524400000, 90.13],
                            [1200610800000, 90.57],
                            [1200956400000, 89.21],
                            [1201042800000, 86.99],
                            [1201129200000, 89.85],
                            [1201474800000, 90.99],
                            [1201561200000, 91.64],
                            [1201647600000, 92.33],
                            [1201734000000, 91.75],
                            [1202079600000, 90.02],
                            [1202166000000, 88.41],
                            [1202252400000, 87.14],
                            [1202338800000, 88.11],
                            [1202425200000, 91.77],
                            [1202770800000, 92.78],
                            [1202857200000, 93.27],
                            [1202943600000, 95.46],
                            [1203030000000, 95.46],
                            [1203289200000, 101.74],
                            [1203462000000, 98.81],
                            [1203894000000, 100.88],
                            [1204066800000, 99.64],
                            [1204153200000, 102.59],
                            [1204239600000, 101.84],
                            [1204498800000, 99.52],
                            [1204585200000, 99.52],
                            [1204671600000, 104.52],
                            [1204758000000, 105.47],
                            [1204844400000, 105.15],
                            [1205103600000, 108.75],
                            [1205276400000, 109.92],
                            [1205362800000, 110.33],
                            [1205449200000, 110.21],
                            [1205708400000, 105.68],
                            [1205967600000, 101.84],
                            [1206313200000, 100.86],
                            [1206399600000, 101.22],
                            [1206486000000, 105.90],
                            [1206572400000, 107.58],
                            [1206658800000, 105.62],
                            [1206914400000, 101.58],
                            [1207000800000, 100.98],
                            [1207173600000, 103.83],
                            [1207260000000, 106.23],
                            [1207605600000, 108.50],
                            [1207778400000, 110.11],
                            [1207864800000, 110.14],
                            [1208210400000, 113.79],
                            [1208296800000, 114.93],
                            [1208383200000, 114.86],
                            [1208728800000, 117.48],
                            [1208815200000, 118.30],
                            [1208988000000, 116.06],
                            [1209074400000, 118.52],
                            [1209333600000, 118.75],
                            [1209420000000, 113.46],
                            [1209592800000, 112.52],
                            [1210024800000, 121.84],
                            [1210111200000, 123.53],
                            [1210197600000, 123.69],
                            [1210543200000, 124.23],
                            [1210629600000, 125.80],
                            [1210716000000, 126.29],
                            [1211148000000, 127.05],
                            [1211320800000, 129.07],
                            [1211493600000, 132.19],
                            [1211839200000, 128.85],
                            [1212357600000, 127.76],
                            [1212703200000, 138.54],
                            [1212962400000, 136.80],
                            [1213135200000, 136.38],
                            [1213308000000, 134.86],
                            [1213653600000, 134.01],
                            [1213740000000, 136.68],
                            [1213912800000, 135.65],
                            [1214172000000, 134.62],
                            [1214258400000, 134.62],
                            [1214344800000, 134.62],
                            [1214431200000, 139.64],
                            [1214517600000, 140.21],
                            [1214776800000, 140.00],
                            [1214863200000, 140.97],
                            [1214949600000, 143.57],
                            [1215036000000, 145.29],
                            [1215381600000, 141.37],
                            [1215468000000, 136.04],
                            [1215727200000, 146.40],
                            [1215986400000, 145.18],
                            [1216072800000, 138.74],
                            [1216159200000, 134.60],
                            [1216245600000, 129.29],
                            [1216332000000, 130.65],
                            [1216677600000, 127.95],
                            [1216850400000, 127.95],
                            [1217282400000, 122.19],
                            [1217455200000, 124.08],
                            [1217541600000, 125.10],
                            [1217800800000, 121.41],
                            [1217887200000, 119.17],
                            [1217973600000, 118.58],
                            [1218060000000, 120.02],
                            [1218405600000, 114.45],
                            [1218492000000, 113.01],
                            [1218578400000, 116.00],
                            [1218751200000, 113.77],
                            [1219010400000, 112.87],
                            [1219096800000, 114.53],
                            [1219269600000, 114.98],
                            [1219356000000, 114.98],
                            [1219701600000, 116.27],
                            [1219788000000, 118.15],
                            [1219874400000, 115.59],
                            [1219960800000, 115.46],
                            [1220306400000, 109.71],
                            [1220392800000, 109.35],
                            [1220565600000, 106.23],
                            [1220824800000, 106.34]
                        ];

                        var exchangerates = [
                            [1167606000000, 0.7580],
                            [1167692400000, 0.7580],
                            [1167778800000, 0.75470],
                            [1167865200000, 0.75490],
                            [1167951600000, 0.76130],
                            [1168038000000, 0.76550],
                            [1168124400000, 0.76930],
                            [1168210800000, 0.76940],
                            [1168297200000, 0.76880],
                            [1168383600000, 0.76780],
                            [1168470000000, 0.77080],
                            [1168556400000, 0.77270],
                            [1168642800000, 0.77490],
                            [1168729200000, 0.77410],
                            [1168815600000, 0.77410],
                            [1168902000000, 0.77320],
                            [1168988400000, 0.77270],
                            [1169074800000, 0.77370],
                            [1169161200000, 0.77240],
                            [1169247600000, 0.77120],
                            [1169334000000, 0.7720],
                            [1169420400000, 0.77210],
                            [1169506800000, 0.77170],
                            [1169593200000, 0.77040],
                            [1169679600000, 0.7690],
                            [1169766000000, 0.77110],
                            [1169852400000, 0.7740],
                            [1169938800000, 0.77450],
                            [1170025200000, 0.77450],
                            [1170111600000, 0.7740],
                            [1170198000000, 0.77160],
                            [1170284400000, 0.77130],
                            [1170370800000, 0.76780],
                            [1170457200000, 0.76880],
                            [1170543600000, 0.77180],
                            [1170630000000, 0.77180],
                            [1170716400000, 0.77280],
                            [1170802800000, 0.77290],
                            [1170889200000, 0.76980],
                            [1170975600000, 0.76850],
                            [1171062000000, 0.76810],
                            [1171148400000, 0.7690],
                            [1171234800000, 0.7690],
                            [1171321200000, 0.76980],
                            [1171407600000, 0.76990],
                            [1171494000000, 0.76510],
                            [1171580400000, 0.76130],
                            [1171666800000, 0.76160],
                            [1171753200000, 0.76140],
                            [1171839600000, 0.76140],
                            [1171926000000, 0.76070],
                            [1172012400000, 0.76020],
                            [1172098800000, 0.76110],
                            [1172185200000, 0.76220],
                            [1172271600000, 0.76150],
                            [1172358000000, 0.75980],
                            [1172444400000, 0.75980],
                            [1172530800000, 0.75920],
                            [1172617200000, 0.75730],
                            [1172703600000, 0.75660],
                            [1172790000000, 0.75670],
                            [1172876400000, 0.75910],
                            [1172962800000, 0.75820],
                            [1173049200000, 0.75850],
                            [1173135600000, 0.76130],
                            [1173222000000, 0.76310],
                            [1173308400000, 0.76150],
                            [1173394800000, 0.760],
                            [1173481200000, 0.76130],
                            [1173567600000, 0.76270],
                            [1173654000000, 0.76270],
                            [1173740400000, 0.76080],
                            [1173826800000, 0.75830],
                            [1173913200000, 0.75750],
                            [1173999600000, 0.75620],
                            [1174086000000, 0.7520],
                            [1174172400000, 0.75120],
                            [1174258800000, 0.75120],
                            [1174345200000, 0.75170],
                            [1174431600000, 0.7520],
                            [1174518000000, 0.75110],
                            [1174604400000, 0.7480],
                            [1174690800000, 0.75090],
                            [1174777200000, 0.75310],
                            [1174860000000, 0.75310],
                            [1174946400000, 0.75270],
                            [1175032800000, 0.74980],
                            [1175119200000, 0.74930],
                            [1175205600000, 0.75040],
                            [1175292000000, 0.750],
                            [1175378400000, 0.74910],
                            [1175464800000, 0.74910],
                            [1175551200000, 0.74850],
                            [1175637600000, 0.74840],
                            [1175724000000, 0.74920],
                            [1175810400000, 0.74710],
                            [1175896800000, 0.74590],
                            [1175983200000, 0.74770],
                            [1176069600000, 0.74770],
                            [1176156000000, 0.74830],
                            [1176242400000, 0.74580],
                            [1176328800000, 0.74480],
                            [1176415200000, 0.7430],
                            [1176501600000, 0.73990],
                            [1176588000000, 0.73950],
                            [1176674400000, 0.73950],
                            [1176760800000, 0.73780],
                            [1176847200000, 0.73820],
                            [1176933600000, 0.73620],
                            [1177020000000, 0.73550],
                            [1177106400000, 0.73480],
                            [1177192800000, 0.73610],
                            [1177279200000, 0.73610],
                            [1177365600000, 0.73650],
                            [1177452000000, 0.73620],
                            [1177538400000, 0.73310],
                            [1177624800000, 0.73390],
                            [1177711200000, 0.73440],
                            [1177797600000, 0.73270],
                            [1177884000000, 0.73270],
                            [1177970400000, 0.73360],
                            [1178056800000, 0.73330],
                            [1178143200000, 0.73590],
                            [1178229600000, 0.73590],
                            [1178316000000, 0.73720],
                            [1178402400000, 0.7360],
                            [1178488800000, 0.7360],
                            [1178575200000, 0.7350],
                            [1178661600000, 0.73650],
                            [1178748000000, 0.73840],
                            [1178834400000, 0.73950],
                            [1178920800000, 0.74130],
                            [1179007200000, 0.73970],
                            [1179093600000, 0.73960],
                            [1179180000000, 0.73850],
                            [1179266400000, 0.73780],
                            [1179352800000, 0.73660],
                            [1179439200000, 0.740],
                            [1179525600000, 0.74110],
                            [1179612000000, 0.74060],
                            [1179698400000, 0.74050],
                            [1179784800000, 0.74140],
                            [1179871200000, 0.74310],
                            [1179957600000, 0.74310],
                            [1180044000000, 0.74380],
                            [1180130400000, 0.74430],
                            [1180216800000, 0.74430],
                            [1180303200000, 0.74430],
                            [1180389600000, 0.74340],
                            [1180476000000, 0.74290],
                            [1180562400000, 0.74420],
                            [1180648800000, 0.7440],
                            [1180735200000, 0.74390],
                            [1180821600000, 0.74370],
                            [1180908000000, 0.74370],
                            [1180994400000, 0.74290],
                            [1181080800000, 0.74030],
                            [1181167200000, 0.73990],
                            [1181253600000, 0.74180],
                            [1181340000000, 0.74680],
                            [1181426400000, 0.7480],
                            [1181512800000, 0.7480],
                            [1181599200000, 0.7490],
                            [1181685600000, 0.74940],
                            [1181772000000, 0.75220],
                            [1181858400000, 0.75150],
                            [1181944800000, 0.75020],
                            [1182031200000, 0.74720],
                            [1182117600000, 0.74720],
                            [1182204000000, 0.74620],
                            [1182290400000, 0.74550],
                            [1182376800000, 0.74490],
                            [1182463200000, 0.74670],
                            [1182549600000, 0.74580],
                            [1182636000000, 0.74270],
                            [1182722400000, 0.74270],
                            [1182808800000, 0.7430],
                            [1182895200000, 0.74290],
                            [1182981600000, 0.7440],
                            [1183068000000, 0.7430],
                            [1183154400000, 0.74220],
                            [1183240800000, 0.73880],
                            [1183327200000, 0.73880],
                            [1183413600000, 0.73690],
                            [1183500000000, 0.73450],
                            [1183586400000, 0.73450],
                            [1183672800000, 0.73450],
                            [1183759200000, 0.73520],
                            [1183845600000, 0.73410],
                            [1183932000000, 0.73410],
                            [1184018400000, 0.7340],
                            [1184104800000, 0.73240],
                            [1184191200000, 0.72720],
                            [1184277600000, 0.72640],
                            [1184364000000, 0.72550],
                            [1184450400000, 0.72580],
                            [1184536800000, 0.72580],
                            [1184623200000, 0.72560],
                            [1184709600000, 0.72570],
                            [1184796000000, 0.72470],
                            [1184882400000, 0.72430],
                            [1184968800000, 0.72440],
                            [1185055200000, 0.72350],
                            [1185141600000, 0.72350],
                            [1185228000000, 0.72350],
                            [1185314400000, 0.72350],
                            [1185400800000, 0.72620],
                            [1185487200000, 0.72880],
                            [1185573600000, 0.73010],
                            [1185660000000, 0.73370],
                            [1185746400000, 0.73370],
                            [1185832800000, 0.73240],
                            [1185919200000, 0.72970],
                            [1186005600000, 0.73170],
                            [1186092000000, 0.73150],
                            [1186178400000, 0.72880],
                            [1186264800000, 0.72630],
                            [1186351200000, 0.72630],
                            [1186437600000, 0.72420],
                            [1186524000000, 0.72530],
                            [1186610400000, 0.72640],
                            [1186696800000, 0.7270],
                            [1186783200000, 0.73120],
                            [1186869600000, 0.73050],
                            [1186956000000, 0.73050],
                            [1187042400000, 0.73180],
                            [1187128800000, 0.73580],
                            [1187215200000, 0.74090],
                            [1187301600000, 0.74540],
                            [1187388000000, 0.74370],
                            [1187474400000, 0.74240],
                            [1187560800000, 0.74240],
                            [1187647200000, 0.74150],
                            [1187733600000, 0.74190],
                            [1187820000000, 0.74140],
                            [1187906400000, 0.73770],
                            [1187992800000, 0.73550],
                            [1188079200000, 0.73150],
                            [1188165600000, 0.73150],
                            [1188252000000, 0.7320],
                            [1188338400000, 0.73320],
                            [1188424800000, 0.73460],
                            [1188511200000, 0.73280],
                            [1188597600000, 0.73230],
                            [1188684000000, 0.7340],
                            [1188770400000, 0.7340],
                            [1188856800000, 0.73360],
                            [1188943200000, 0.73510],
                            [1189029600000, 0.73460],
                            [1189116000000, 0.73210],
                            [1189202400000, 0.72940],
                            [1189288800000, 0.72660],
                            [1189375200000, 0.72660],
                            [1189461600000, 0.72540],
                            [1189548000000, 0.72420],
                            [1189634400000, 0.72130],
                            [1189720800000, 0.71970],
                            [1189807200000, 0.72090],
                            [1189893600000, 0.7210],
                            [1189980000000, 0.7210],
                            [1190066400000, 0.7210],
                            [1190152800000, 0.72090],
                            [1190239200000, 0.71590],
                            [1190325600000, 0.71330],
                            [1190412000000, 0.71050],
                            [1190498400000, 0.70990],
                            [1190584800000, 0.70990],
                            [1190671200000, 0.70930],
                            [1190757600000, 0.70930],
                            [1190844000000, 0.70760],
                            [1190930400000, 0.7070],
                            [1191016800000, 0.70490],
                            [1191103200000, 0.70120],
                            [1191189600000, 0.70110],
                            [1191276000000, 0.70190],
                            [1191362400000, 0.70460],
                            [1191448800000, 0.70630],
                            [1191535200000, 0.70890],
                            [1191621600000, 0.70770],
                            [1191708000000, 0.70770],
                            [1191794400000, 0.70770],
                            [1191880800000, 0.70910],
                            [1191967200000, 0.71180],
                            [1192053600000, 0.70790],
                            [1192140000000, 0.70530],
                            [1192226400000, 0.7050],
                            [1192312800000, 0.70550],
                            [1192399200000, 0.70550],
                            [1192485600000, 0.70450],
                            [1192572000000, 0.70510],
                            [1192658400000, 0.70510],
                            [1192744800000, 0.70170],
                            [1192831200000, 0.70],
                            [1192917600000, 0.69950],
                            [1193004000000, 0.69940],
                            [1193090400000, 0.70140],
                            [1193176800000, 0.70360],
                            [1193263200000, 0.70210],
                            [1193349600000, 0.70020],
                            [1193436000000, 0.69670],
                            [1193522400000, 0.6950],
                            [1193612400000, 0.6950],
                            [1193698800000, 0.69390],
                            [1193785200000, 0.6940],
                            [1193871600000, 0.69220],
                            [1193958000000, 0.69190],
                            [1194044400000, 0.69140],
                            [1194130800000, 0.68940],
                            [1194217200000, 0.68910],
                            [1194303600000, 0.69040],
                            [1194390000000, 0.6890],
                            [1194476400000, 0.68340],
                            [1194562800000, 0.68230],
                            [1194649200000, 0.68070],
                            [1194735600000, 0.68150],
                            [1194822000000, 0.68150],
                            [1194908400000, 0.68470],
                            [1194994800000, 0.68590],
                            [1195081200000, 0.68220],
                            [1195167600000, 0.68270],
                            [1195254000000, 0.68370],
                            [1195340400000, 0.68230],
                            [1195426800000, 0.68220],
                            [1195513200000, 0.68220],
                            [1195599600000, 0.67920],
                            [1195686000000, 0.67460],
                            [1195772400000, 0.67350],
                            [1195858800000, 0.67310],
                            [1195945200000, 0.67420],
                            [1196031600000, 0.67440],
                            [1196118000000, 0.67390],
                            [1196204400000, 0.67310],
                            [1196290800000, 0.67610],
                            [1196377200000, 0.67610],
                            [1196463600000, 0.67850],
                            [1196550000000, 0.68180],
                            [1196636400000, 0.68360],
                            [1196722800000, 0.68230],
                            [1196809200000, 0.68050],
                            [1196895600000, 0.67930],
                            [1196982000000, 0.68490],
                            [1197068400000, 0.68330],
                            [1197154800000, 0.68250],
                            [1197241200000, 0.68250],
                            [1197327600000, 0.68160],
                            [1197414000000, 0.67990],
                            [1197500400000, 0.68130],
                            [1197586800000, 0.68090],
                            [1197673200000, 0.68680],
                            [1197759600000, 0.69330],
                            [1197846000000, 0.69330],
                            [1197932400000, 0.69450],
                            [1198018800000, 0.69440],
                            [1198105200000, 0.69460],
                            [1198191600000, 0.69640],
                            [1198278000000, 0.69650],
                            [1198364400000, 0.69560],
                            [1198450800000, 0.69560],
                            [1198537200000, 0.6950],
                            [1198623600000, 0.69480],
                            [1198710000000, 0.69280],
                            [1198796400000, 0.68870],
                            [1198882800000, 0.68240],
                            [1198969200000, 0.67940],
                            [1199055600000, 0.67940],
                            [1199142000000, 0.68030],
                            [1199228400000, 0.68550],
                            [1199314800000, 0.68240],
                            [1199401200000, 0.67910],
                            [1199487600000, 0.67830],
                            [1199574000000, 0.67850],
                            [1199660400000, 0.67850],
                            [1199746800000, 0.67970],
                            [1199833200000, 0.680],
                            [1199919600000, 0.68030],
                            [1200006000000, 0.68050],
                            [1200092400000, 0.6760],
                            [1200178800000, 0.6770],
                            [1200265200000, 0.6770],
                            [1200351600000, 0.67360],
                            [1200438000000, 0.67260],
                            [1200524400000, 0.67640],
                            [1200610800000, 0.68210],
                            [1200697200000, 0.68310],
                            [1200783600000, 0.68420],
                            [1200870000000, 0.68420],
                            [1200956400000, 0.68870],
                            [1201042800000, 0.69030],
                            [1201129200000, 0.68480],
                            [1201215600000, 0.68240],
                            [1201302000000, 0.67880],
                            [1201388400000, 0.68140],
                            [1201474800000, 0.68140],
                            [1201561200000, 0.67970],
                            [1201647600000, 0.67690],
                            [1201734000000, 0.67650],
                            [1201820400000, 0.67330],
                            [1201906800000, 0.67290],
                            [1201993200000, 0.67580],
                            [1202079600000, 0.67580],
                            [1202166000000, 0.6750],
                            [1202252400000, 0.6780],
                            [1202338800000, 0.68330],
                            [1202425200000, 0.68560],
                            [1202511600000, 0.69030],
                            [1202598000000, 0.68960],
                            [1202684400000, 0.68960],
                            [1202770800000, 0.68820],
                            [1202857200000, 0.68790],
                            [1202943600000, 0.68620],
                            [1203030000000, 0.68520],
                            [1203116400000, 0.68230],
                            [1203202800000, 0.68130],
                            [1203289200000, 0.68130],
                            [1203375600000, 0.68220],
                            [1203462000000, 0.68020],
                            [1203548400000, 0.68020],
                            [1203634800000, 0.67840],
                            [1203721200000, 0.67480],
                            [1203807600000, 0.67470],
                            [1203894000000, 0.67470],
                            [1203980400000, 0.67480],
                            [1204066800000, 0.67330],
                            [1204153200000, 0.6650],
                            [1204239600000, 0.66110],
                            [1204326000000, 0.65830],
                            [1204412400000, 0.6590],
                            [1204498800000, 0.6590],
                            [1204585200000, 0.65810],
                            [1204671600000, 0.65780],
                            [1204758000000, 0.65740],
                            [1204844400000, 0.65320],
                            [1204930800000, 0.65020],
                            [1205017200000, 0.65140],
                            [1205103600000, 0.65140],
                            [1205190000000, 0.65070],
                            [1205276400000, 0.6510],
                            [1205362800000, 0.64890],
                            [1205449200000, 0.64240],
                            [1205535600000, 0.64060],
                            [1205622000000, 0.63820],
                            [1205708400000, 0.63820],
                            [1205794800000, 0.63410],
                            [1205881200000, 0.63440],
                            [1205967600000, 0.63780],
                            [1206054000000, 0.64390],
                            [1206140400000, 0.64780],
                            [1206226800000, 0.64810],
                            [1206313200000, 0.64810],
                            [1206399600000, 0.64940],
                            [1206486000000, 0.64380],
                            [1206572400000, 0.63770],
                            [1206658800000, 0.63290],
                            [1206745200000, 0.63360],
                            [1206831600000, 0.63330],
                            [1206914400000, 0.63330],
                            [1207000800000, 0.6330],
                            [1207087200000, 0.63710],
                            [1207173600000, 0.64030],
                            [1207260000000, 0.63960],
                            [1207346400000, 0.63640],
                            [1207432800000, 0.63560],
                            [1207519200000, 0.63560],
                            [1207605600000, 0.63680],
                            [1207692000000, 0.63570],
                            [1207778400000, 0.63540],
                            [1207864800000, 0.6320],
                            [1207951200000, 0.63320],
                            [1208037600000, 0.63280],
                            [1208124000000, 0.63310],
                            [1208210400000, 0.63420],
                            [1208296800000, 0.63210],
                            [1208383200000, 0.63020],
                            [1208469600000, 0.62780],
                            [1208556000000, 0.63080],
                            [1208642400000, 0.63240],
                            [1208728800000, 0.63240],
                            [1208815200000, 0.63070],
                            [1208901600000, 0.62770],
                            [1208988000000, 0.62690],
                            [1209074400000, 0.63350],
                            [1209160800000, 0.63920],
                            [1209247200000, 0.640],
                            [1209333600000, 0.64010],
                            [1209420000000, 0.63960],
                            [1209506400000, 0.64070],
                            [1209592800000, 0.64230],
                            [1209679200000, 0.64290],
                            [1209765600000, 0.64720],
                            [1209852000000, 0.64850],
                            [1209938400000, 0.64860],
                            [1210024800000, 0.64670],
                            [1210111200000, 0.64440],
                            [1210197600000, 0.64670],
                            [1210284000000, 0.65090],
                            [1210370400000, 0.64780],
                            [1210456800000, 0.64610],
                            [1210543200000, 0.64610],
                            [1210629600000, 0.64680],
                            [1210716000000, 0.64490],
                            [1210802400000, 0.6470],
                            [1210888800000, 0.64610],
                            [1210975200000, 0.64520],
                            [1211061600000, 0.64220],
                            [1211148000000, 0.64220],
                            [1211234400000, 0.64250],
                            [1211320800000, 0.64140],
                            [1211407200000, 0.63660],
                            [1211493600000, 0.63460],
                            [1211580000000, 0.6350],
                            [1211666400000, 0.63460],
                            [1211752800000, 0.63460],
                            [1211839200000, 0.63430],
                            [1211925600000, 0.63460],
                            [1212012000000, 0.63790],
                            [1212098400000, 0.64160],
                            [1212184800000, 0.64420],
                            [1212271200000, 0.64310],
                            [1212357600000, 0.64310],
                            [1212444000000, 0.64350],
                            [1212530400000, 0.6440],
                            [1212616800000, 0.64730],
                            [1212703200000, 0.64690],
                            [1212789600000, 0.63860],
                            [1212876000000, 0.63560],
                            [1212962400000, 0.6340],
                            [1213048800000, 0.63460],
                            [1213135200000, 0.6430],
                            [1213221600000, 0.64520],
                            [1213308000000, 0.64670],
                            [1213394400000, 0.65060],
                            [1213480800000, 0.65040],
                            [1213567200000, 0.65030],
                            [1213653600000, 0.64810],
                            [1213740000000, 0.64510],
                            [1213826400000, 0.6450],
                            [1213912800000, 0.64410],
                            [1213999200000, 0.64140],
                            [1214085600000, 0.64090],
                            [1214172000000, 0.64090],
                            [1214258400000, 0.64280],
                            [1214344800000, 0.64310],
                            [1214431200000, 0.64180],
                            [1214517600000, 0.63710],
                            [1214604000000, 0.63490],
                            [1214690400000, 0.63330],
                            [1214776800000, 0.63340],
                            [1214863200000, 0.63380],
                            [1214949600000, 0.63420],
                            [1215036000000, 0.6320],
                            [1215122400000, 0.63180],
                            [1215208800000, 0.6370],
                            [1215295200000, 0.63680],
                            [1215381600000, 0.63680],
                            [1215468000000, 0.63830],
                            [1215554400000, 0.63710],
                            [1215640800000, 0.63710],
                            [1215727200000, 0.63550],
                            [1215813600000, 0.6320],
                            [1215900000000, 0.62770],
                            [1215986400000, 0.62760],
                            [1216072800000, 0.62910],
                            [1216159200000, 0.62740],
                            [1216245600000, 0.62930],
                            [1216332000000, 0.63110],
                            [1216418400000, 0.6310],
                            [1216504800000, 0.63120],
                            [1216591200000, 0.63120],
                            [1216677600000, 0.63040],
                            [1216764000000, 0.62940],
                            [1216850400000, 0.63480],
                            [1216936800000, 0.63780],
                            [1217023200000, 0.63680],
                            [1217109600000, 0.63680],
                            [1217196000000, 0.63680],
                            [1217282400000, 0.6360],
                            [1217368800000, 0.6370],
                            [1217455200000, 0.64180],
                            [1217541600000, 0.64110],
                            [1217628000000, 0.64350],
                            [1217714400000, 0.64270],
                            [1217800800000, 0.64270],
                            [1217887200000, 0.64190],
                            [1217973600000, 0.64460],
                            [1218060000000, 0.64680],
                            [1218146400000, 0.64870],
                            [1218232800000, 0.65940],
                            [1218319200000, 0.66660],
                            [1218405600000, 0.66660],
                            [1218492000000, 0.66780],
                            [1218578400000, 0.67120],
                            [1218664800000, 0.67050],
                            [1218751200000, 0.67180],
                            [1218837600000, 0.67840],
                            [1218924000000, 0.68110],
                            [1219010400000, 0.68110],
                            [1219096800000, 0.67940],
                            [1219183200000, 0.68040],
                            [1219269600000, 0.67810],
                            [1219356000000, 0.67560],
                            [1219442400000, 0.67350],
                            [1219528800000, 0.67630],
                            [1219615200000, 0.67620],
                            [1219701600000, 0.67770],
                            [1219788000000, 0.68150],
                            [1219874400000, 0.68020],
                            [1219960800000, 0.6780],
                            [1220047200000, 0.67960],
                            [1220133600000, 0.68170],
                            [1220220000000, 0.68170],
                            [1220306400000, 0.68320],
                            [1220392800000, 0.68770],
                            [1220479200000, 0.69120],
                            [1220565600000, 0.69140],
                            [1220652000000, 0.70090],
                            [1220738400000, 0.70120],
                            [1220824800000, 0.7010],
                            [1220911200000, 0.70050]
                        ];

                        function euroFormatter(v, axis) {
                            return v.toFixed(axis.tickDecimals) + "€";
                        }

                        function doPlot(position) {
                            $.plot("#flot-axes", [
                                { data: oilprices, label: "Oil price ($)" },
                                { data: exchangerates, label: "USD/EUR exchange rate", yaxis: 2 }
                            ], {
                                grid: { borderWidth: 0, labelMargin: 10, axisMargin: 0, minBorderMargin: 0 },
                                colors: ["#8E54E9", "#32b432"],
                                xaxes: [{ mode: "time" }],
                                yaxes: [{ min: 0 }, {
                                    // align if we are to the right
                                    alignTicksWithAxis: position == "right" ? 1 : null,
                                    position: position,
                                    tickFormatter: euroFormatter
                                }],
                                legend: { position: "sw" }
                            });
                        }

                        doPlot("right");

                        $("button").click(function() {
                            doPlot($(this).text());
                        });

                        // Add the Flot version string to the footer

                        $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var gmap = jQuery(".gmap");
        if (gmap.length > 0) {
             // Address Marker
                var addressLocation = $('#address');
                if (addressLocation.length > 0) {
                $(addressLocation)
                  new GMaps({
                    div: '#address',
                    lat: -12.043333,
                    lng: -77.028333
                  });
                }
                // Satellite view
                var satelliteView = $('#events');
                if (satelliteView.length > 0) {
                $(satelliteView)
                  var map = new GMaps({
                    div: '#events',
                    zoom: 16,
                    lat: -12.043333,
                    lng: -77.028333,
                    click: function(e) {
                      alert('click');
                    },
                    dragend: function(e) {
                      alert('dragend');
                    }
                  });
                }
                // Satellite view
                var marker = $('#marker');
                if (marker.length > 0) {
                $(marker)
                  var markerevents = new GMaps({
                    div: '#marker',
                    zoom: 16,
                    lat: -12.043333,
                    lng: -77.028333
                  
                  });

                  markerevents.addMarker({
                    lat: -12.043333,
                    lng: -77.03,
                    title: 'Lima',
                    details: {
                      database_id: 42,
                      author: 'HPNeo'
                    },
                    click: function(e){
                      if(console.log)
                        console.log(e);
                      alert('You clicked in this marker');
                    }
                  });
                  markerevents.addMarker({
                    lat: -12.042,
                    lng: -77.028333,
                    title: 'Marker with InfoWindow',
                    infoWindow: {
                      content: '<p>HTML Content</p>'
                    }
                })
              }
              var marker = $('#polygon');
                if (marker.length > 0) {
                $(marker)
                  var polygon = new GMaps({
                    div: '#polygon',
                    zoom: 16,
                    lat: -12.043333,
                    lng: -77.028333

                  });

                  var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511],	[-12.044804866577001,-77.02154422636042]];

                  polygon1 = polygon.drawPolygon({
                    paths: path, // pre-defined polygon shape
                    strokeColor: '#BBD8E9',
                    strokeOpacity: 1,
                    strokeWeight: 3,
                    fillColor: '#BBD8E9',
                    fillOpacity: 0.6
                  });
              }
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var jqueryKnob = jQuery(".jqueryknob-wrapper");
        if (jqueryKnob.length > 0) {
                $(".knob").knob({
                    change: function(value) {
                        //console.log("change : " + value);
                    },
                    release: function(value) {
                        //console.log(this.$.attr('value'));
                        console.log("release : " + value);
                    },
                    cancel: function() {
                        console.log("cancel : ", this);
                    },
                    /*format : function (value) {
                     return value + '%';
                     },*/
                    draw: function() {

                        // "tron" case
                        if (this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv) // Arc
                                ,
                                pa // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var jQVMap = jQuery(".vectormap-wrapper");
        if (jQVMap.length > 0) {

                //Analytics map
                var world = jQuery('#world')
                if (world.length > 0) {

                        function escapeXml(string) {
                            return string.replace(/[<>]/g, function (c) {
                              switch (c) {
                                case '<': return '\u003c';
                                case '>': return '\u003e';
                              }
                            });
                          }

                        var pins = {
                            mo: escapeXml('<div class="map-pin red"><span>MO</span></div>'),
                            fl: escapeXml('<div class="map-pin blue"><span>FL</span></div>'),
                            or: escapeXml('<div class="map-pin purple"><span>OR</span></div>')
                          };

                        jQuery(world).vectorMap({
                            map: 'world_en',
                            backgroundColor: '#ffff',
                            pins: pins,
                            pinMode: 'content',
                            showTooltip: true,
                            hoverColor: '#8E54E9',
                            borderColor: '#fff',
                            selectedColor: ['#8E54E9'],
                            color: '#eceef3',
                            selectedRegions: ['US', 'AU', 'IN', 'GR'],
                            onRegionClick: function(event){
                                event.preventDefault();
                            }
                        });
                }
                // Australia
                var australia = jQuery('#australia')
                if (australia.length > 0) {
                        jQuery(australia).vectorMap({
                            map: 'australia_en',
                            backgroundColor: '#fff',
                            selectedColor: '#fbaf54',
                            borderColor: '#fff',
                            hoverColor: '#fbaf54',
                            color: '#e8edf1'
                        });
                }
                // Africa
                var africa = jQuery('#africa')
                if (africa.length > 0) {
                        jQuery(africa).vectorMap({
                            map: 'africa_en',
                            backgroundColor: '#fff',
                            selectedColor: '#32b432',
                            borderColor: '#fff',
                            hoverColor: '#32b432',
                            color: '#e8edf1'
                        });
                }
                // USA
                var usa = jQuery('#usa')
                if (usa.length > 0) {
                        jQuery(usa).vectorMap({
                            map: 'usa_en',
                            backgroundColor: '#fff',
                            selectedColor: '#8E54E9',
                            hoverColor: '#8E54E9',
                            borderColor: '#fff',
                            color: '#e8edf1'
                        });
                }
                // Canada
                var canada = jQuery('#canada')
                if (canada.length > 0) {
                        jQuery(canada).vectorMap({
                            map: 'canada_en',
                            backgroundColor: '#fff',
                            selectedColor: '#fd9644',
                            hoverColor: '#fd9644',
                            borderColor: '#fff',
                            color: '#e8edf1'
                        });
                }
                // Europe
                var russia = jQuery('#russia')
                if (russia.length > 0) {
                        jQuery(russia).vectorMap({
                            map: 'russia_en',
                            backgroundColor: '#fff',
                            selectedColor: '#e3324c',
                            hoverColor: '#e3324c',
                            borderColor: '#fff',
                            color: '#e8edf1',
                            zoom: 5
                        });
                }
                // Brazil
                var brazil = jQuery('#brazil')
                if (brazil.length > 0) {
                        jQuery(brazil).vectorMap({
                            map: 'brazil_br',
                            backgroundColor: '#fff',
                            selectedColor: '#20bf6b',
                            hoverColor: '#20bf6b',
                            borderColor: '#fff',
                            color: '#e8edf1'
                        });
                }
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var magnific = jQuery(".magnific-wrapper");
        if (magnific.length > 0) {
                $('.view').magnificPopup({
                    type: 'image'
                    // other options
                });
                $(document).ready(function() {
                    $('.view2').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                });
                $('.view1').magnificPopup({
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var mapaelMap = jQuery(".mapaelmap-wrapper");
        if (mapaelMap.length > 0) {
                        // World Map
                        $(mapaelMap).mapael({
                            map: {
                                name: "world_countries"
                            }
                        });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var morrisJS = jQuery(".morris-wrapper");
        if (morrisJS.length > 0) {
                    // morris line chart
                    var morrisdemo1 = jQuery("#morrisdemo1");
                    if (morrisdemo1.length > 0) {
                        Morris.Line({
                            element: morrisdemo1,
                            data: [
                                { y: '2006', a: 40, b: 30 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 60, b: 50 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            lineColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            padding: 20,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10
                        });
                    }
                    // morris line chart
                    var morrisdemo2 = jQuery("#morrisdemo2");
                    if (morrisdemo2.length > 0) {
                        Morris.Area({
                            element: morrisdemo2,
                            data: [
                                { y: '2006', a: 40, b: 30 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 60, b: 50 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            lineColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            fillOpacity: 0.4,
                            padding: 20,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10
                        });
                    }
                    // morris bar chart
                    var morrisdemo3 = jQuery("#morrisdemo3");
                    if (morrisdemo3.length > 0) {
                        Morris.Bar({
                            element: morrisdemo3,
                            data: [
                                { y: '2006', a: 100, b: 90 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 100, b: 90 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            barColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            fillOpacity: 0.4,
                            padding: 15,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10
                        });
                    }
                    // morris donut chart
                    var morrisdemo4 = jQuery("#morrisdemo4");
                    if (morrisdemo4.length > 0) {
                        Morris.Donut({
                            element: morrisdemo4,
                            data: [
                                { label: "Direct Visits", value: 12 },
                                { label: "Redirect Visits", value: 30 },
                                { label: "Referral Visits", value: 20 }
                            ],
                            colors: ['#45aaf2', '#e3324c', '#fbaf54']
                        });
                    }
                    // morris stacked bar chart
                    var morrisdemo5 = jQuery("#morrisdemo5");
                    if (morrisdemo5.length > 0) {
                        Morris.Bar({
                            element: morrisdemo5,
                            data: [
                                { y: '2006', a: 100, b: 90 },
                                { y: '2007', a: 75, b: 65 },
                                { y: '2008', a: 50, b: 40 },
                                { y: '2009', a: 75, b: 65 },
                                { y: '2010', a: 50, b: 40 },
                                { y: '2011', a: 75, b: 65 },
                                { y: '2012', a: 100, b: 90 }
                            ],
                            xkey: 'y',
                            ykeys: ['a', 'b'],
                            labels: ['Series A', 'Series B'],
                            barColors: ['#4776E6', '#8E54E9'],
                            resize: true,
                            fillOpacity: 0.4,
                            padding: 15,
                            grid: false,
                            gridTextFamily: 'Roboto',
                            gridTextSize: 10,
                            stacked: true
                        });
                    }
                    // morris donut chart
                    var morrisecommerce1 = jQuery("#morrisecommerce1");
                    if (morrisecommerce1.length > 0) {
                        Morris.Donut({
                            element: morrisecommerce1,
                            data: [
                                { label: "Total sales", value: 680 },
                                { label: "Open campaign", value: 800 },
                                { label: "Daily sales", value: 500 }
                            ],
                            colors: ['#45aaf2', '#8E54E9', '#eceef3']
                        });
                    }
                    
                    // morris cardealer1
                    var cardealer1 = jQuery("#cardealer1");
                    if (cardealer1.length > 0) {
                        Morris.Donut({
                            element: cardealer1,
                            data: [
                                { label: "New cars", value: 680 },
                                { label: "Used cars", value: 800 }
                            ],
                            colors: ['#f7b731', '#2bcbba']
                        });
                    }
                    
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var nestable = jQuery(".nestable-wrapper");
        if (nestable.length > 0) {
                var updateOutput = function(e) {
                    var list = e.length ? e : $(e.target),
                        output = list.data('output');
                    if (window.JSON) {
                        output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
                    } else {
                        output.val('JSON browser support required for this demo.');
                    }
                };

                // activate Nestable for list 1
                $('#nestable').nestable({
                        group: 1
                    })
                    .on('change', updateOutput);

                // activate Nestable for list 2
                $('#nestable2').nestable({
                        group: 1
                    })
                    .on('change', updateOutput);

                // output initial serialised data
                updateOutput($('#nestable').data('output', $('#nestable-output')));
                updateOutput($('#nestable2').data('output', $('#nestable2-output')));

                $('#nestable-menu').on('click', function(e) {
                    var target = $(e.target),
                        action = target.data('action');
                    if (action === 'expand-all') {
                        $('.dd').nestable('expandAll');
                    }
                    if (action === 'collapse-all') {
                        $('.dd').nestable('collapseAll');
                    }
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var owlCarousel = jQuery(".owl-wrapper");
        if (owlCarousel.length > 0) {
                var owlslider = $('.owl-carousel');
                owlslider.each(function () {
                    var $this = $(this),
                        $items = ($this.data('items')) ? $this.data('items') : 1,
                        $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                        $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                        $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                        $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                        $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                        $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                        $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                        $space = ($this.attr('data-space')) ? $this.data('space') : 30;
        
                        $(this).owlCarousel({
                            loop: $loop,
                            items: $items,
                            responsive: {
                              0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                              480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                              768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                              980:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                              1200:{items: $this.data('lg-items') ? $this.data('lg-items') : 4},
                              1400:{items: $this.data('xl-items') ? $this.data('lg-items') : 5},
                            },
                            dots: $navdots,
                            autoplayTimeout:$autospeed,
                            smartSpeed: $smartspeed,
                            autoHeight:$autohgt,
                            margin:$space,
                            nav: $navarrow,
                            navText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],
                            autoplay: $autoplay,
                            autoplayHoverPause: true
                        });
                   });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var popOvers = jQuery(".popover-wrapper");
        if (popOvers.length > 0) {
            $('[data-toggle="popover"]').popover()
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        jQuery(".loader").fadeOut('slow');
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var quillEditor = jQuery(".quill-editor");
        if (quillEditor.length > 0) {
                var toolbarOptions = [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],

                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                ];
                var editor = new Quill('#editor', {
                    modules: {
                        toolbar: toolbarOptions
                    },
                    theme: 'snow'
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var rangeslider = jQuery(".rangeslider-wrapper");
        if (rangeslider.length > 0) {
                //slider-1
                $("#slider-1").ionRangeSlider();
                //slider-2
                $("#slider-2").ionRangeSlider({
                    min: 100,
                    max: 1000,
                    from: 550
                });
                //slider-3
                $("#slider-3").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: 0,
                    max: 1000,
                    from: 200,
                    to: 800,
                    prefix: "$"
                });
                //slider-4
                $("#slider-4").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: -1000,
                    max: 1000,
                    from: -500,
                    to: 500
                });
                //slider-5
                $("#slider-5").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: -1000,
                    max: 1000,
                    from: -500,
                    to: 500,
                    step: 250
                });
                //slider-6
                $("#slider-6").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: -12.8,
                    max: 12.8,
                    from: -3.2,
                    to: 3.2,
                    step: 0.1
                });
                //slider-7
                $("#slider-7").ionRangeSlider({
                    type: "double",
                    grid: true,
                    from: 1,
                    to: 5,
                    values: [0, 10, 100, 1000, 10000, 100000, 1000000]
                });
                //slider-8
                $("#slider-8").ionRangeSlider({
                    grid: true,
                    from: 5,
                    values: [
                        "zero", "one",
                        "two", "three",
                        "four", "five",
                        "six", "seven",
                        "eight", "nine",
                        "ten"
                    ]
                });
                //slider-9
                $("#slider-9").ionRangeSlider({
                    grid: true,
                    from: 3,
                    values: [
                        "January", "February", "March",
                        "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"
                    ]
                });
                //slider-10
                $("#slider-10").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 100000,
                    step: 1000,
                    prettify_enabled: false
                });
                //slider-11
                $("#slider-11").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 200000,
                    step: 1000,
                    prettify_enabled: true
                });
                //slider-12
                $("#slider-12").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 300000,
                    step: 1000,
                    prettify_enabled: true,
                    prettify_separator: "."
                });
                //slider-13
                $("#slider-13").ionRangeSlider({
                    grid: true,
                    min: 1000,
                    max: 1000000,
                    from: 400000,
                    step: 1000,
                    prettify_enabled: true,
                    prettify: function(num) {
                        return (Math.random() * num).toFixed(0);
                    }
                });
                //slider-14
                $("#slider-14").ionRangeSlider({
                    type: "double",
                    grid: true,
                    min: 0,
                    max: 10000,
                    from: 1000,
                    step: 9000,
                    prefix: "$"
                });
                //slider-15
                $("#slider-15").ionRangeSlider({
                    type: "single",
                    grid: true,
                    min: -90,
                    max: 90,
                    from: 0,
                    postfix: "°"
                });
                //slider-16
                $("#slider-16").ionRangeSlider({
                    grid: true,
                    min: 18,
                    max: 70,
                    from: 30,
                    prefix: "Age ",
                    max_postfix: "+"
                });
                //slider-17
                $("#slider-17").ionRangeSlider({
                    type: "double",
                    min: 100,
                    max: 200,
                    from: 145,
                    to: 155,
                    prefix: "Weight: ",
                    postfix: " million pounds",
                    decorate_both: true
                });
                //Slider-inter-1
                var $update = $(".js-update-43");
                $("#slider-inter_1").ionRangeSlider({
                    type: "single",
                    min: 0,
                    max: 100,
                    from: 50,
                    keyboard: true,
                    onStart: function(data) {
                        console.log("onStart");
                    },
                    onChange: function(data) {
                        console.log("onChange");
                    },
                    onFinish: function(data) {
                        console.log("onFinish");
                    },
                    onUpdate: function(data) {
                        console.log("onUpdate");
                    }
                });
                var slider = $("#slider-inter_1").data("ionRangeSlider");
                $update.on("click", function() {
                    slider.update({
                        from: 10
                    });
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var scrollbar = jQuery(".scrollbar");
        if (scrollbar.length > 0) {
                $('.scroll_dark').mCustomScrollbar({
                  theme:"minimal-dark",
                  setHeight: false,
                  mouseWheel: {
                    normalizeDelta: true,
                    scrollAmount: '200px',
                    contentTouchScroll: true,
                    deltaFactor: '200px'
                  },
                  advanced: {
                    autoScrollOnFocus: 'a[tabindex]'
                  }
                });
                $('.scroll_light').mCustomScrollbar({
                  theme:"minimal",
                  setHeight: false,
                  mouseWheel: {
                    normalizeDelta: true,
                    scrollAmount: '200px',
                    contentTouchScroll: true,
                    eltaFactor: '200px'
                  },
                  advanced: {
                    autoScrollOnFocus: 'a[tabindex]'
                  }
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var select = jQuery(".select-wrapper");
        if (select.length > 0) {
                    $('.js-basic-single').select2();
                    $('.js-basic-multiple').select2();
                    $(".bs-select-1").val()
                    $(".bs-input").tagsinput('items')
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var sidebarNav = jQuery(".sidebar-nav");
        if (sidebarNav.length > 0) {
                $('#sidebarNav').metisMenu();
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var sparkline = jQuery(".sparkline-wrapper");
        if (sparkline.length > 0) {
                function Sparkline() {
                    var sparklinedemo1 = jQuery("#sparklinedemo1");
                    if (sparklinedemo1.length > 0) {
                        $(sparklinedemo1).sparkline([20, 30, 25, 40, 40, 50, 56, 37, 50], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineWidth: 2,
                            spotRadius: 0,
                            chartRangeMax: 50,
                            lineColor: 'rgba(71, 118, 230, 0.5)',
                            fillColor: 'rgba(71, 118, 230, 0.3)',
                            highlightLineColor: 'rgba(0,0,0,.1)',
                            highlightSpotColor: 'rgba(0,0,0,.2)',
                        });
                        $(sparklinedemo1).sparkline([10, 35, 30, 60, 50, 45, 30, 24, 30], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineWidth: 2,
                            spotRadius: 0,
                            chartRangeMax: 40,
                            lineColor: 'rgba(142, 84, 233, 0.5)',
                            fillColor: 'rgba(142, 84, 233, 0.3)',
                            composite: true,
                            highlightLineColor: 'rgba(0,0,0,.1)',
                            highlightSpotColor: 'rgba(0,0,0,.2)',
                        });
                    }
                    var sparklinedemo2 = jQuery("#sparklinedemo2");
                    if (sparklinedemo2.length > 0) {
                        $(sparklinedemo2).sparkline([20, 30, 25, 40, 40, 50, 56, 37, 50], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineWidth: 2,
                            spotRadius: 0,
                            chartRangeMax: 50,
                            lineColor: 'rgba(71, 118, 230, 1)',
                            fillColor: 'transparent',
                            highlightLineColor: 'rgba(0,0,0,.1)',
                            highlightSpotColor: 'rgba(0,0,0,.2)'
                        });
                        $(sparklinedemo2).sparkline([10, 35, 30, 60, 50, 45, 30, 24, 30], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineWidth: 2,
                            spotRadius: 0,
                            chartRangeMax: 40,
                            lineColor: 'rgba(142, 84, 233, 1)',
                            fillColor: 'transparent',
                            composite: true,
                            highlightLineColor: 'rgba(0,0,0,1)',
                            highlightSpotColor: 'rgba(0,0,0,1)'
                        });
                    }
                    var sparklinedemo3 = jQuery("#sparklinedemo3");
                    if (sparklinedemo3.length > 0) {
                        $(sparklinedemo3).sparkline([5, 8, 6, 7, 3, 5, 6, 8, 2, 8, 5, 10, 11, 10, 1, 6, 5, 7, 8, 10, 8, 12, 7, 9, 5, 6, 10, 7, 8, 5, 6, 8, 5, 9, 3, 7, 1, 6, 4, 8, 4, 9, 10, 13, 7, 8, 6, 4, 11, 5, 6, 4, 7, 10, 4, 7, 4, 9], {
                            type: 'bar',
                            height: '200',
                            barWidth: '10',
                            barSpacing: '3',
                            barColor: '#4776E6'
                        });
                    }
                    
                    //chart widget end

                    var sparklinedemo4 = jQuery("#sparklinedemo4");
                    if (sparklinedemo4.length > 0) {
                        $(sparklinedemo4).sparkline([5, 8, 6, 7, 3, 5, 6, 8, 4, 8, 5, 10, 11, 10, 5, 6, 5, 7, 8, 10], {
                            type: 'line',
                            width: '100%',
                            height: '200',
                            lineColor: 'rgba(142, 84, 233, 0.5)',
                            fillColor: 'rgba(142, 84, 233, 0.3)',
                            highlightLineColor: 'rgba(0,0,0,.1)',
                            highlightSpotColor: 'rgba(0,0,0,.2)'
                        });
                        $(sparklinedemo4).sparkline([5, 8, 6, 7, 3, 5, 6, 8, 2, 8, 5, 10, 11, 10, 5, 6, 5, 7, 8, 10], {
                            type: 'bar',
                            height: '200',
                            barWidth: '10',
                            barSpacing: '5',
                            composite: true,
                            barColor: '#4776E6'
                        });
                    }
                    var sparklinedemo5 = jQuery("#sparklinedemo5");
                    if (sparklinedemo5.length > 0) {
                        $(sparklinedemo5).sparkline([40, 30, 20, 10], {
                            type: 'pie',
                            width: '200',
                            height: '165',
                            sliceColors: ['#4776E6', '#8E54E9', '#ffbc1d', '#25d09a']
                        });
                    }

                };

                Sparkline();

                var resize;
                $window.resize(function(e) {
                    clearTimeout(resize);
                    resize = setTimeout(function() {
                        Sparkline();

                    }, 300);
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var summernote = jQuery(".summernote");
        if (summernote.length > 0) {
                $('#summernote').summernote({
                    tabsize: 2,
                    height: 250
                });
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
$('#sweetalert-01').click(function(e) {
    swal({
        text: 'Any fool can use a computer',
        showCloseButton: false,
        showCancelButton: true,
    })
});


$('#sweetalert-02').click(function(e) {
    swal(
        'The Internet?',
        'That thing is still around?',
        'question'
    )
});

$('#sweetalert-03').click(function(e) {
    swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>',
    })
});

$('#sweetalert-04').click(function(e) {
    swal({
        imageUrl: 'assets/img/widget/06.jpg',
        imageHeight: 596,
        imageAlt: 'A tall image'
    })
});

$('#sweetalert-05').click(function(e) {
    swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html: 'You can use <b>bold text</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger'
    })
});

$('#sweetalert-06').click(function(e) {
    swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
});

$('#sweetalert-07').click(function(e) {
    swal({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: 'animated tada'
    })
});

$('#sweetalert-08').click(function(e) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
    }).then((result) => {
        if (result.value) {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
});

$('#sweetalert-09').click(function(e) {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true,
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } else if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.cancel
        ) {
            swal(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })
});

$('#sweetalert-10').click(function(e) {
    swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
    })
});

$('#sweetalert-11').click(function(e) {
    swal({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: 100,
        background: '#fff url(../images/trees.png)',
        backdrop: `
  rgba(0,0,123,0.4)
  url("/images/nyan-cat.gif")
  center left
  no-repeat
`
    })
});

$('#sweetalert-12').click(function(e) {
    swal({
        title: 'Auto close alert!',
        text: 'I will close in 5 seconds.',
        timer: 5000,
        onOpen: () => {
            swal.showLoading()
        }
    }).then((result) => {
        if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.timer
        ) {
            console.log('I was closed by the timer')
        }
    })
});


$('#sweetalert-13').click(function(e) {
    swal({
        title: 'Ù‡Ù„ ØªØ±ÙŠØ¯ Ø§Ù„Ø§Ø³ØªÙ…Ø±Ø§Ø±ØŸ',
        confirmButtonText: 'Ù†Ø¹Ù…',
        cancelButtonText: 'Ù„Ø§',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        target: document.getElementById('rtl-container')
    })
});

$('#sweetalert-14').click(function(e) {
    swal({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: (email) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (email === 'taken@example.com') {
                        swal.showValidationError(
                            'This email is already taken.'
                        )
                    }
                    resolve()
                }, 2000)
            })
        },
        allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
        if (result.value) {
            swal({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + result.value
            })
        }
    })
});

$('#sweetalert-15').click(function(e) {
    swal.setDefaults({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        progressSteps: ['1', '2', '3']
    })

    var steps = [{
            title: 'Question 1',
            text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
    ]

    swal.queue(steps).then((result) => {
        swal.resetDefaults()

        if (result.value) {
            swal({
                title: 'All done!',
                html: 'Your answers: <pre>' +
                    JSON.stringify(result.value) +
                    '</pre>',
                confirmButtonText: 'Lovely!'
            })
        }
    })
});

$('#sweetalert-16').click(function(e) {
    const ipAPI = 'https://api.ipify.org?format=json'
    swal.queue([{
        title: 'Your public IP',
        confirmButtonText: 'Show my public IP',
        text: 'Your public IP will be received ' +
            'via AJAX request',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            return fetch(ipAPI)
                .then(response => response.json())
                .then(data => swal.insertQueueStep(data.ip))
                .catch(() => {
                    swal.insertQueueStep({
                        type: 'error',
                        title: 'Unable to get your public IP'
                    })
                })
        }
    }])
});

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        $("#checkAll").click(function () {
            $('input:checkbox').not(this).prop('checked', this.checked);
        });
});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
$(function () {
    var i = -1;
    var toastCount = 0;
    var $toastlast;

    var getMessage = function () {
        var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
            '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
            'Are you the six fingered man?',
            'Inconceivable!',
            'I do not think that means what you think it means.',
            'Have fun storming the castle!'
        ];
        i++;
        if (i === msgs.length) {
            i = 0;
        }

        return msgs[i];
    };

    var getMessageWithClearButton = function (msg) {
        msg = msg ? msg : 'Clear itself?';
        msg += '<br /><br /><button type="button" class="btn clear">Yes</button>';
        return msg;
    };

    $('#closeButton').on("click", function () {
        if($(this).is(':checked')) {
            $('#addBehaviorOnToastCloseClick').prop('disabled', false);
        } else {
            $('#addBehaviorOnToastCloseClick').prop('disabled', true);
            $('#addBehaviorOnToastCloseClick').prop('checked', false);
        }
    });

    $('#showtoast').on("click", function () {
        var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
        var msg = $('#message').val();
        var title = $('#title').val() || '';
        var $showDuration = $('#showDuration');
        var $hideDuration = $('#hideDuration');
        var $timeOut = $('#timeOut');
        var $extendedTimeOut = $('#extendedTimeOut');
        var $showEasing = $('#showEasing');
        var $hideEasing = $('#hideEasing');
        var $showMethod = $('#showMethod');
        var $hideMethod = $('#hideMethod');
        var toastIndex = toastCount++;
        var addClear = $('#addClear').prop('checked');

        toastr.options = {
            closeButton: $('#closeButton').prop('checked'),
            debug: $('#debugInfo').prop('checked'),
            newestOnTop: $('#newestOnTop').prop('checked'),
            progressBar: $('#progressBar').prop('checked'),
            rtl: $('#rtl').prop('checked'),
            positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
            preventDuplicates: $('#preventDuplicates').prop('checked'),
            onclick: null
        };

        if ($('#addBehaviorOnToastClick').prop('checked')) {
            toastr.options.onclick = function () {
                alert('You can perform some custom action after a toast goes away');
            };
        }

        if ($('#addBehaviorOnToastCloseClick').prop('checked')) {
            toastr.options.onCloseClick = function () {
                alert('You can perform some custom action when the close button is clicked');
            };
        }

        if ($showDuration.val().length) {
            toastr.options.showDuration = parseInt($showDuration.val());
        }

        if ($hideDuration.val().length) {
            toastr.options.hideDuration = parseInt($hideDuration.val());
        }

        if ($timeOut.val().length) {
            toastr.options.timeOut = addClear ? 0 : parseInt($timeOut.val());
        }

        if ($extendedTimeOut.val().length) {
            toastr.options.extendedTimeOut = addClear ? 0 : parseInt($extendedTimeOut.val());
        }

        if ($showEasing.val().length) {
            toastr.options.showEasing = $showEasing.val();
        }

        if ($hideEasing.val().length) {
            toastr.options.hideEasing = $hideEasing.val();
        }

        if ($showMethod.val().length) {
            toastr.options.showMethod = $showMethod.val();
        }

        if ($hideMethod.val().length) {
            toastr.options.hideMethod = $hideMethod.val();
        }

        if (addClear) {
            msg = getMessageWithClearButton(msg);
            toastr.options.tapToDismiss = false;
        }
        if (!msg) {
            msg = getMessage();
        }

        $('#toastrOptions').text('Command: toastr["'
                + shortCutFunction
                + '"]("'
                + msg
                + (title ? '", "' + title : '')
                + '")\n\ntoastr.options = '
                + JSON.stringify(toastr.options, null, 2)
        );

        var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
        $toastlast = $toast;

        if(typeof $toast === 'undefined'){
            return;
        }

        if ($toast.find('#okBtn').length) {
            $toast.delegate('#okBtn', 'click', function () {
                alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                $toast.remove();
            });
        }
        if ($toast.find('#surpriseBtn').length) {
            $toast.delegate('#surpriseBtn', 'click', function () {
                alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
            });
        }
        if ($toast.find('.clear').length) {
            $toast.delegate('.clear', 'click', function () {
                toastr.clear($toast, { force: true });
            });
        }
    });

    function getLastToast(){
        return $toastlast;
    }
    $('#clearlasttoast').on("click", function () {
        toastr.clear(getLastToast());
    });
    $('#cleartoasts').on("click", function () {
        toastr.clear();
    });
})

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        var tootlTips = jQuery(".tooltip-wrapper");
        if (tootlTips.length > 0) {
            $('[data-toggle="tooltip"]').tooltip();
        }
    });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
});

$(document).ready(function() {
    $("#signupForm").validate({
        rules: {
            fname: "required",
            lname: "required",
            uname: {
                required: true,
                minlength: 2
            },
            upassword: {
                required: true,
                minlength: 5
            },
            uconfirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            uemail: {
                required: true,
                email: true
            },
            uagree: "required"
        },
        messages: {
            fname: "Please enter your firstname",
            lname: "Please enter your lastname",
            uname: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            upassword: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            uconfirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            uemail: "Please enter a valid email address",
            uagree: "Please accept our policy"
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
        }
    });

    $("#signupForm1").validate({
        rules: {
            firstname1: "required",
            lastname1: "required",
            username1: {
                required: true,
                minlength: 2
            },
            password1: {
                required: true,
                minlength: 5
            },
            confirm_password1: {
                required: true,
                minlength: 5,
                equalTo: "#password1"
            },
            email1: {
                required: true,
                email: true
            },
            agree1: "required"
        },
        messages: {
            firstname1: "Please enter your firstname",
            lastname1: "Please enter your lastname",
            username1: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password1: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password1: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email1: "Please enter a valid email address",
            agree1: "Please accept our policy"
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            // Add `has-feedback` class to the parent div.form-group
            // in order to add icons to inputs
            element.parents(".col-sm-5").addClass("has-feedback");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }

            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if (!element.next("span")[0]) {
                $("<span class='fa fa-times form-control-feedback pr-2'></span>").insertAfter(element);
            }
        },
       
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
            $(element).next("span").addClass("fa fa-times").removeClass("fa fa-check");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
            ($(element)).next("span").addClass("fa fa-check").removeClass("fa fa-times");
        }
    });

    $("#signupForm3").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        },
        errorPlacement: function(error, element) {
            error.addClass("ui red pointing label transition");
            error.insertAfter(element.parent());
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".row").addClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".row").removeClass(errorClass);
        }
    });

});

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

    $(function(){
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false);

          getSelectorFromElement: function getSelectorFromElement(element) {
            var selector = element.getAttribute('data-target');
        
            if (!selector || selector === '#') {
              selector = element.getAttribute('href') || '';
            }
        
            try {
              return document.querySelector(selector) ? selector : null;
            } catch (err) {
              return null;
            }
        }
    });


    $('.mobile-toggle').on('click', function() {
        $('body').toggleClass('sidebar-toggled');
      });

      $(document).on('click', '.mega-menu.dropdown-menu', function (e) {
        e.stopPropagation();
      });

      $('.sidebar-toggle').on('click', function() {
        $('body').toggleClass('sidebar-mini');
        $('.app-navbar').toggleClass('expand');
      });

      $('.app-navbar').hover(function() {
        if($('body').hasClass('sidebar-mini')) {
          $('.navbar-header').toggleClass('expand');
        }
      });

      $('.search').on('click', function() {
        $('.search-wrapper').fadeIn(200);
      });

       //Search Box Close 
       $('.close-btn').on('click', function() {
        $('.search-wrapper').fadeOut(200);
      });

      $('.mobile-toggle').on('click', function() {
        $('body').toggleClass('sidebar-toggled');
      });

})(window, document, window.jQuery);