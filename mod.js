// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return t!=t}function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=r();var o=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol:void 0,i="function"==typeof e?e.toStringTag:"";var c=n&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,c,l;if(null==t)return o.call(t);n=t[i],l=i,r=null!=(c=t)&&a.call(c,l);try{t[i]=void 0}catch(r){return o.call(t)}return e=o.call(t),r?t[i]=n:delete t[i],e}:function(t){return o.call(t)},l="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var f,y="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var t,r,n;if("function"!=typeof u)return!1;try{r=new u(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(l&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?y:function(){throw new Error("not implemented")};var p=f,v=r();var A=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var m="function"==typeof e?e.toStringTag:"";var w=v&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,a,e;if(null==t)return A.call(t);n=t[m],e=m,r=null!=(a=t)&&b.call(a,e);try{t[m]=void 0}catch(r){return A.call(t)}return o=A.call(t),r?t[m]=n:delete t[m],o}:function(t){return A.call(t)},g="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var d,U="function"==typeof Float64Array?Float64Array:void 0;d=function(){var t,r,n;if("function"!=typeof S)return!1;try{r=new S([1,3.14,-3.14,NaN]),n=r,t=(g&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?U:function(){throw new Error("not implemented")};var h=d,s=r();var j=Object.prototype.toString;var F=Object.prototype.hasOwnProperty;var O="function"==typeof e?e.toStringTag:"";var N=s&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,a,e;if(null==t)return j.call(t);n=t[O],e=O,r=null!=(a=t)&&F.call(a,e);try{t[O]=void 0}catch(r){return j.call(t)}return o=j.call(t),r?t[O]=n:delete t[O],o}:function(t){return j.call(t)},T="function"==typeof Uint8Array;var E="function"==typeof Uint8Array?Uint8Array:null;var P,I="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var t,r,n;if("function"!=typeof E)return!1;try{r=new E(r=[1,3.14,-3.14,256,257]),n=r,t=(T&&n instanceof Uint8Array||"[object Uint8Array]"===N(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?I:function(){throw new Error("not implemented")};var x=P,G=r();var V=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var _="function"==typeof e?e.toStringTag:"";var k=G&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,a,e;if(null==t)return V.call(t);n=t[_],e=_,r=null!=(a=t)&&Y.call(a,e);try{t[_]=void 0}catch(r){return V.call(t)}return o=V.call(t),r?t[_]=n:delete t[_],o}:function(t){return V.call(t)},q="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null;var B,C="function"==typeof Uint16Array?Uint16Array:void 0;B=function(){var t,r,n;if("function"!=typeof z)return!1;try{r=new z(r=[1,3.14,-3.14,65536,65537]),n=r,t=(q&&n instanceof Uint16Array||"[object Uint16Array]"===k(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?C:function(){throw new Error("not implemented")};var D,H={uint16:B,uint8:x};(D=new H.uint16(1))[0]=4660;var J=52===new H.uint8(D.buffer)[0],K=!0===J?1:0,L=new h(1),M=new p(L.buffer);function Q(t){return L[0]=t,M[K]}var R=r();var W=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Z="function"==typeof e?e.toStringTag:"";var $=R&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,a,e;if(null==t)return W.call(t);n=t[Z],e=Z,r=null!=(a=t)&&X.call(a,e);try{t[Z]=void 0}catch(r){return W.call(t)}return o=W.call(t),r?t[Z]=n:delete t[Z],o}:function(t){return W.call(t)},tt="function"==typeof Float64Array;var rt="function"==typeof Float64Array?Float64Array:null;var nt,ot="function"==typeof Float64Array?Float64Array:void 0;nt=function(){var t,r,n;if("function"!=typeof rt)return!1;try{r=new rt([1,3.14,-3.14,NaN]),n=r,t=(tt&&n instanceof Float64Array||"[object Float64Array]"===$(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ot:function(){throw new Error("not implemented")};var at=!0===J?1:0,et=new nt(1),it=new p(et.buffer);var ct=Number.NEGATIVE_INFINITY;var lt=.6931471803691238,ut=1.9082149292705877e-10;function ft(r){var n,o,a,e,i,c,l,u,f,y,p,v;return 0===r?ct:t(r)||r<0?NaN:(i=0,(o=Q(r))<1048576&&(i-=54,o=Q(r*=0x40000000000000)),o>=2146435072?r+r:(i+=(o>>20)-1023|0,i+=(u=(o&=1048575)+614244&1048576|0)>>20|0,l=(r=function(t,r){return et[0]=t,it[at]=r>>>0,et[0]}(r,o|1072693248^u))-1,(1048575&2+o)<3?0===l?0===i?0:i*lt+i*ut:(c=l*l*(.5-.3333333333333333*l),0===i?l-c:i*lt-(c-i*ut-l)):(u=o-398458|0,f=440401-o|0,e=(p=(v=(y=l/(2+l))*y)*v)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),a=v*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),c=a+e,(u|=f)>0?(n=.5*l*l,0===i?l-(n-y*(n+c)):i*lt-(n-(y*(n+c)+i*ut)-l)):0===i?l-y*(l-c):i*lt-(y*(l-c)-i*ut-l))))}function yt(r,n){return t(r)||t(n)||n<=0?NaN:.5*ft(17.079468445347132*n*n)}export{yt as default};
//# sourceMappingURL=mod.js.map
