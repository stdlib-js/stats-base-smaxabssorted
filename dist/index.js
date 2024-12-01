"use strict";var n=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=n(function(h,f){
var s=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-special-abs/dist');function d(a,r,t){var u,e;return a<=0?NaN:a===1||t===0?r[0]:(t<0?(u=r[(1-a)*t],e=r[0]):(u=r[0],e=r[(a-1)*t]),s(u)||s(e)?NaN:(u=v(u),e=v(e),u>e?u:e))}f.exports=d
});var m=n(function(j,b){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-special-abs/dist');function l(a,r,t,u){var e,i;return a<=0?NaN:a===1||t===0?r[0]:(e=r[u],i=r[u+(a-1)*t],q(e)||q(i)?NaN:(e=c(e),i=c(i),e>i?e:i))}b.exports=l
});var N=n(function(k,y){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),O=m();x(p,"ndarray",O);y.exports=p
});var R=N();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
