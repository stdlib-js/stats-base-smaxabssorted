"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=u(function(h,f){
var v=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-special-absf/dist');function m(e,r,t,n){var a,s;return e<=0?NaN:e===1||t===0?r[0]:(a=r[n],s=r[n+(e-1)*t],v(a)||v(s)?NaN:(a=o(a),s=o(s),a>s?a:s))}f.exports=m
});var c=u(function(j,q){
var p=require('@stdlib/strided-base-stride2offset/dist'),y=i();function l(e,r,t){return y(e,r,t,p(e,t))}q.exports=l
});var b=u(function(k,x){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),O=i();N(d,"ndarray",O);x.exports=d
});var R=b();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
