(window.webpackJsonp_wp_block_collapsible_section=window.webpackJsonp_wp_block_collapsible_section||[]).push([[2],{11:function(t,e,n){}}]),function(t){function e(e){for(var r,c,a=e[0],l=e[1],s=e[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={0:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window.webpackJsonp_wp_block_collapsible_section=window.webpackJsonp_wp_block_collapsible_section||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=l;i.push([12,2]),n()}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.wp.blockEditor},function(t,e){t.exports=window.wp.data},function(t,e){t.exports=window.wp.i18n},function(t,e){t.exports=window.wp.blocks},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,n){(function(t,n){var r="[object Arguments]",o="[object Map]",i="[object Object]",c="[object Set]",a=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s[r]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s[o]=s["[object Number]"]=s[i]=s["[object RegExp]"]=s[c]=s["[object String]"]=s["[object WeakMap]"]=!1;var u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=u||f||Function("return this")(),b=e&&!e.nodeType&&e,h=b&&"object"==typeof n&&n&&!n.nodeType&&n,d=h&&h.exports===b,_=d&&u.process,v=function(){try{return _&&_.binding&&_.binding("util")}catch(t){}}(),y=v&&v.isTypedArray;function j(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function g(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function w(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var m,O,k,x=Array.prototype,A=Function.prototype,z=Object.prototype,E=p["__core-js_shared__"],B=A.toString,P=z.hasOwnProperty,S=(m=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"",M=z.toString,N=RegExp("^"+B.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=d?p.Buffer:void 0,I=p.Symbol,T=p.Uint8Array,D=z.propertyIsEnumerable,L=x.splice,U=I?I.toStringTag:void 0,$=Object.getOwnPropertySymbols,C=F?F.isBuffer:void 0,R=(O=Object.keys,k=Object,function(t){return O(k(t))}),V=ht(p,"DataView"),W=ht(p,"Map"),J=ht(p,"Promise"),G=ht(p,"Set"),H=ht(p,"WeakMap"),q=ht(Object,"create"),K=yt(V),Q=yt(W),X=yt(J),Y=yt(G),Z=yt(H),tt=I?I.prototype:void 0,et=tt?tt.valueOf:void 0;function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function it(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new ot;++e<n;)this.add(t[e])}function ct(t){var e=this.__data__=new rt(t);this.size=e.size}function at(t,e){for(var n=t.length;n--;)if(jt(t[n][0],e))return n;return-1}function lt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":U&&U in Object(t)?function(t){var e=P.call(t,U),n=t[U];try{t[U]=void 0;var r=!0}catch(t){}var o=M.call(t);return r&&(e?t[U]=n:delete t[U]),o}(t):function(t){return M.call(t)}(t)}function st(t){return At(t)&&lt(t)==r}function ut(t,e,n,a,l){return t===e||(null==t||null==e||!At(t)&&!At(e)?t!=t&&e!=e:function(t,e,n,a,l,s){var u=wt(t),f=wt(e),p=u?"[object Array]":_t(t),b=f?"[object Array]":_t(e),h=(p=p==r?i:p)==i,d=(b=b==r?i:b)==i,_=p==b;if(_&&mt(t)){if(!mt(e))return!1;u=!0,h=!1}if(_&&!h)return s||(s=new ct),u||zt(t)?ft(t,e,n,a,l,s):function(t,e,n,r,i,a,l){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new T(t),new T(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return jt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case o:var s=g;case c:var u=1&r;if(s||(s=w),t.size!=e.size&&!u)return!1;var f=l.get(t);if(f)return f==e;r|=2,l.set(t,e);var p=ft(s(t),s(e),r,i,a,l);return l.delete(t),p;case"[object Symbol]":if(et)return et.call(t)==et.call(e)}return!1}(t,e,p,n,a,l,s);if(!(1&n)){var v=h&&P.call(t,"__wrapped__"),y=d&&P.call(e,"__wrapped__");if(v||y){var j=v?t.value():t,m=y?e.value():e;return s||(s=new ct),l(j,m,n,a,s)}}return!!_&&(s||(s=new ct),function(t,e,n,r,o,i){var c=1&n,a=pt(t),l=a.length;if(l!=pt(e).length&&!c)return!1;for(var s=l;s--;){var u=a[s];if(!(c?u in e:P.call(e,u)))return!1}var f=i.get(t);if(f&&i.get(e))return f==e;var p=!0;i.set(t,e),i.set(e,t);for(var b=c;++s<l;){var h=t[u=a[s]],d=e[u];if(r)var _=c?r(d,h,u,e,t,i):r(h,d,u,t,e,i);if(!(void 0===_?h===d||o(h,d,n,r,i):_)){p=!1;break}b||(b="constructor"==u)}if(p&&!b){var v=t.constructor,y=e.constructor;v==y||!("constructor"in t)||!("constructor"in e)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(p=!1)}return i.delete(t),i.delete(e),p}(t,e,n,a,l,s))}(t,e,n,a,ut,l))}function ft(t,e,n,r,o,i){var c=1&n,a=t.length,l=e.length;if(a!=l&&!(c&&l>a))return!1;var s=i.get(t);if(s&&i.get(e))return s==e;var u=-1,f=!0,p=2&n?new it:void 0;for(i.set(t,e),i.set(e,t);++u<a;){var b=t[u],h=e[u];if(r)var d=c?r(h,b,u,e,t,i):r(b,h,u,t,e,i);if(void 0!==d){if(d)continue;f=!1;break}if(p){if(!j(e,(function(t,e){if(c=e,!p.has(c)&&(b===t||o(b,t,n,r,i)))return p.push(e);var c}))){f=!1;break}}else if(b!==h&&!o(b,h,n,r,i)){f=!1;break}}return i.delete(t),i.delete(e),f}function pt(t){return function(t,e,n){var r=e(t);return wt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Et,dt)}function bt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function ht(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!xt(t)||function(t){return!!S&&S in t}(t))&&(Ot(t)?N:a).test(yt(t))}(n)?n:void 0}nt.prototype.clear=function(){this.__data__=q?q(null):{},this.size=0},nt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},nt.prototype.get=function(t){var e=this.__data__;if(q){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return P.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return q?void 0!==e[t]:P.call(e,t)},nt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=q&&void 0===e?"__lodash_hash_undefined__":e,this},rt.prototype.clear=function(){this.__data__=[],this.size=0},rt.prototype.delete=function(t){var e=this.__data__,n=at(e,t);return!(n<0||(n==e.length-1?e.pop():L.call(e,n,1),--this.size,0))},rt.prototype.get=function(t){var e=this.__data__,n=at(e,t);return n<0?void 0:e[n][1]},rt.prototype.has=function(t){return at(this.__data__,t)>-1},rt.prototype.set=function(t,e){var n=this.__data__,r=at(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},ot.prototype.clear=function(){this.size=0,this.__data__={hash:new nt,map:new(W||rt),string:new nt}},ot.prototype.delete=function(t){var e=bt(this,t).delete(t);return this.size-=e?1:0,e},ot.prototype.get=function(t){return bt(this,t).get(t)},ot.prototype.has=function(t){return bt(this,t).has(t)},ot.prototype.set=function(t,e){var n=bt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},it.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.clear=function(){this.__data__=new rt,this.size=0},ct.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var n=this.__data__;if(n instanceof rt){var r=n.__data__;if(!W||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new ot(r)}return n.set(t,e),this.size=n.size,this};var dt=$?function(t){return null==t?[]:(t=Object(t),function(e,n){for(var r=-1,o=null==e?0:e.length,i=0,c=[];++r<o;){var a=e[r];l=a,D.call(t,l)&&(c[i++]=a)}var l;return c}($(t)))}:function(){return[]},_t=lt;function vt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function yt(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jt(t,e){return t===e||t!=t&&e!=e}(V&&"[object DataView]"!=_t(new V(new ArrayBuffer(1)))||W&&_t(new W)!=o||J&&"[object Promise]"!=_t(J.resolve())||G&&_t(new G)!=c||H&&"[object WeakMap]"!=_t(new H))&&(_t=function(t){var e=lt(t),n=e==i?t.constructor:void 0,r=n?yt(n):"";if(r)switch(r){case K:return"[object DataView]";case Q:return o;case X:return"[object Promise]";case Y:return c;case Z:return"[object WeakMap]"}return e});var gt=st(function(){return arguments}())?st:function(t){return At(t)&&P.call(t,"callee")&&!D.call(t,"callee")},wt=Array.isArray,mt=C||function(){return!1};function Ot(t){if(!xt(t))return!1;var e=lt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function kt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function xt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function At(t){return null!=t&&"object"==typeof t}var zt=y?function(t){return function(e){return t(e)}}(y):function(t){return At(t)&&kt(t.length)&&!!s[lt(t)]};function Et(t){return null!=(e=t)&&kt(e.length)&&!Ot(e)?function(t,e){var n=wt(t),r=!n&&gt(t),o=!n&&!r&&mt(t),i=!n&&!r&&!o&&zt(t),c=n||r||o||i,a=c?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],l=a.length;for(var s in t)!e&&!P.call(t,s)||c&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||vt(s,l))||a.push(s);return a}(t):function(t){if(n=(e=t)&&e.constructor,e!==("function"==typeof n&&n.prototype||z))return R(t);var e,n,r=[];for(var o in Object(t))P.call(t,o)&&"constructor"!=o&&r.push(o);return r}(t);var e}n.exports=function(t,e){return ut(t,e)}}).call(this,n(8),n(9)(t))},function(t,e){t.exports=window.wp.hooks},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=window.wp.components},,function(t,e,n){"use strict";n.r(e);var r=n(4),o=n(5),i=n.n(o),c=n(0),a=n(6),l=n.n(a),s=n(3),u=n(7),f=n(1),p=(n(10),n(2));const b=Object(u.applyFilters)("innocode.block-collapsible-section.allowed-blocks",["core/paragraph","core/heading","core/separator","core/spacer"]);class h extends c.Component{constructor(...t){super(...t),i()(this,"initialLoad",!0)}componentDidMount(){this.isStillMounted=!0}componentDidUpdate(){const{attributes:t,clientId:e,setAttributes:n}=this.props,r=Object(p.select)("core/block-editor").getBlocks(e);l()(r,t.innerBlocks)||n({innerBlocks:r})}componentWillUnmount(){this.isStillMounted=!1}render(){const{attributes:t,setAttributes:e,clientId:n}=this.props,{title:r,innerBlocks:o}=t,i=Object(p.select)("core/block-editor").getBlocks(n);return this.initialLoad&&!i.length&&o.length&&(Object(p.dispatch)("core/block-editor").replaceInnerBlocks(n,o,!1),this.initialLoad=!this.initialLoad),[Object(c.createElement)("div",{className:"block-collapsible-section block-collapsible-section--is-opened"},Object(c.createElement)("div",{className:"block-collapsible-section__heading"},Object(c.createElement)(f.RichText,{tagName:"h5",value:r,allowedFormats:["core/italic"],onChange:t=>e({title:t}),placeholder:Object(s.__)("Heading...")})),Object(c.createElement)("div",{className:"block-collapsible-section__content"},Object(c.createElement)(f.InnerBlocks,{allowedBlocks:b})))]}}var d=Object(p.withSelect)((t,e)=>({innerBlocks:t("core/block-editor").getBlocks(e.clientId)}))(t=>Object(c.createElement)("div",{className:"wp-block-innocode-collapsible-section"},Object(c.createElement)(h,t)));n(11),Object(r.registerBlockType)("innocode/wp-block-collapsible-section",{attributes:{title:{type:"string",default:""},innerBlocks:{type:"array",default:[]}},edit:d,save:function({attributes:t}){return Object(c.createElement)("div",f.useBlockProps.save({className:"wp-block-innocode-collapsible-section"}),Object(c.createElement)("div",{className:"block-collapsible-section__heading"},Object(c.createElement)(f.RichText.Content,{tagName:"h5",value:t.title})),Object(c.createElement)("div",{className:"block-collapsible-section__content"},Object(c.createElement)(f.InnerBlocks.Content,null)))}})}]);