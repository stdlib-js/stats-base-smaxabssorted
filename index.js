// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,c=o.__lookupSetter__;function f(e){return e!=e}function _(e){return Math.abs(e)}function p(e,t,r){var n,o;return e<=0?NaN:1===e||0===r?t[0]:(r<0?(n=t[(1-e)*r],o=t[0]):(n=t[0],o=t[(e-1)*r]),f(n)||f(o)?NaN:(n=_(n))>(o=_(o))?n:o)}function d(e,t,r,n){var o,a;return e<=0?NaN:1===e||0===r?t[0]:(o=t[n],a=t[n+(e-1)*r],f(o)||f(a)?NaN:(o=_(o))>(a=_(a))?o:a)}t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&l&&l.call(e,t,r.set),e},t(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:d}),e.default=p,e.ndarray=d,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).smaxabssorted={});
//# sourceMappingURL=index.js.map
