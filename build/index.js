(window.webpackJsonp_wp_block_collapsible_section=window.webpackJsonp_wp_block_collapsible_section||[]).push([[1],{11:function(t,e,n){}}]),function(t){function e(e){for(var r,c,a=e[0],u=e[1],l=e[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(s&&s(e);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={0:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window.webpackJsonp_wp_block_collapsible_section=window.webpackJsonp_wp_block_collapsible_section||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var s=u;i.push([12,1]),n()}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.wp.blockEditor},function(t,e){t.exports=window.wp.i18n},function(t,e){t.exports=window.wp.data},function(t,e){t.exports=window.wp.components},function(t,e){t.exports=window.wp.blocks},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,n){(function(t,n){var r="[object Arguments]",o="[object Map]",i="[object Object]",c="[object Set]",a=/^\[object .+?Constructor\]$/,u=/^(?:0|[1-9]\d*)$/,l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l["[object Function]"]=l[o]=l["[object Number]"]=l[i]=l["[object RegExp]"]=l[c]=l["[object String]"]=l["[object WeakMap]"]=!1;var s="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=s||f||Function("return this")(),b=e&&!e.nodeType&&e,_=b&&"object"==typeof n&&n&&!n.nodeType&&n,d=_&&_.exports===b,h=d&&s.process,y=function(){try{return h&&h.binding&&h.binding("util")}catch(t){}}(),v=y&&y.isTypedArray;function j(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function g(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function w(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var O,m,k,x=Array.prototype,A=Function.prototype,z=Object.prototype,B=p["__core-js_shared__"],P=A.toString,E=z.hasOwnProperty,S=(O=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"",M=z.toString,I=RegExp("^"+P.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=d?p.Buffer:void 0,T=p.Symbol,D=p.Uint8Array,L=z.propertyIsEnumerable,C=x.splice,N=T?T.toStringTag:void 0,U=Object.getOwnPropertySymbols,$=F?F.isBuffer:void 0,V=(m=Object.keys,k=Object,function(t){return m(k(t))}),W=_t(p,"DataView"),J=_t(p,"Map"),R=_t(p,"Promise"),G=_t(p,"Set"),q=_t(p,"WeakMap"),H=_t(Object,"create"),K=vt(W),Q=vt(J),X=vt(R),Y=vt(G),Z=vt(q),tt=T?T.prototype:void 0,et=tt?tt.valueOf:void 0;function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function it(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new ot;++e<n;)this.add(t[e])}function ct(t){var e=this.__data__=new rt(t);this.size=e.size}function at(t,e){for(var n=t.length;n--;)if(jt(t[n][0],e))return n;return-1}function ut(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":N&&N in Object(t)?function(t){var e=E.call(t,N),n=t[N];try{t[N]=void 0;var r=!0}catch(t){}var o=M.call(t);return r&&(e?t[N]=n:delete t[N]),o}(t):function(t){return M.call(t)}(t)}function lt(t){return At(t)&&ut(t)==r}function st(t,e,n,a,u){return t===e||(null==t||null==e||!At(t)&&!At(e)?t!=t&&e!=e:function(t,e,n,a,u,l){var s=wt(t),f=wt(e),p=s?"[object Array]":ht(t),b=f?"[object Array]":ht(e),_=(p=p==r?i:p)==i,d=(b=b==r?i:b)==i,h=p==b;if(h&&Ot(t)){if(!Ot(e))return!1;s=!0,_=!1}if(h&&!_)return l||(l=new ct),s||zt(t)?ft(t,e,n,a,u,l):function(t,e,n,r,i,a,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new D(t),new D(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return jt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case o:var l=g;case c:var s=1&r;if(l||(l=w),t.size!=e.size&&!s)return!1;var f=u.get(t);if(f)return f==e;r|=2,u.set(t,e);var p=ft(l(t),l(e),r,i,a,u);return u.delete(t),p;case"[object Symbol]":if(et)return et.call(t)==et.call(e)}return!1}(t,e,p,n,a,u,l);if(!(1&n)){var y=_&&E.call(t,"__wrapped__"),v=d&&E.call(e,"__wrapped__");if(y||v){var j=y?t.value():t,O=v?e.value():e;return l||(l=new ct),u(j,O,n,a,l)}}return!!h&&(l||(l=new ct),function(t,e,n,r,o,i){var c=1&n,a=pt(t),u=a.length;if(u!=pt(e).length&&!c)return!1;for(var l=u;l--;){var s=a[l];if(!(c?s in e:E.call(e,s)))return!1}var f=i.get(t);if(f&&i.get(e))return f==e;var p=!0;i.set(t,e),i.set(e,t);for(var b=c;++l<u;){var _=t[s=a[l]],d=e[s];if(r)var h=c?r(d,_,s,e,t,i):r(_,d,s,t,e,i);if(!(void 0===h?_===d||o(_,d,n,r,i):h)){p=!1;break}b||(b="constructor"==s)}if(p&&!b){var y=t.constructor,v=e.constructor;y==v||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(p=!1)}return i.delete(t),i.delete(e),p}(t,e,n,a,u,l))}(t,e,n,a,st,u))}function ft(t,e,n,r,o,i){var c=1&n,a=t.length,u=e.length;if(a!=u&&!(c&&u>a))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var s=-1,f=!0,p=2&n?new it:void 0;for(i.set(t,e),i.set(e,t);++s<a;){var b=t[s],_=e[s];if(r)var d=c?r(_,b,s,e,t,i):r(b,_,s,t,e,i);if(void 0!==d){if(d)continue;f=!1;break}if(p){if(!j(e,(function(t,e){if(c=e,!p.has(c)&&(b===t||o(b,t,n,r,i)))return p.push(e);var c}))){f=!1;break}}else if(b!==_&&!o(b,_,n,r,i)){f=!1;break}}return i.delete(t),i.delete(e),f}function pt(t){return function(t,e,n){var r=e(t);return wt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Bt,dt)}function bt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function _t(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!xt(t)||function(t){return!!S&&S in t}(t))&&(mt(t)?I:a).test(vt(t))}(n)?n:void 0}nt.prototype.clear=function(){this.__data__=H?H(null):{},this.size=0},nt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},nt.prototype.get=function(t){var e=this.__data__;if(H){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return E.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return H?void 0!==e[t]:E.call(e,t)},nt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=H&&void 0===e?"__lodash_hash_undefined__":e,this},rt.prototype.clear=function(){this.__data__=[],this.size=0},rt.prototype.delete=function(t){var e=this.__data__,n=at(e,t);return!(n<0||(n==e.length-1?e.pop():C.call(e,n,1),--this.size,0))},rt.prototype.get=function(t){var e=this.__data__,n=at(e,t);return n<0?void 0:e[n][1]},rt.prototype.has=function(t){return at(this.__data__,t)>-1},rt.prototype.set=function(t,e){var n=this.__data__,r=at(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},ot.prototype.clear=function(){this.size=0,this.__data__={hash:new nt,map:new(J||rt),string:new nt}},ot.prototype.delete=function(t){var e=bt(this,t).delete(t);return this.size-=e?1:0,e},ot.prototype.get=function(t){return bt(this,t).get(t)},ot.prototype.has=function(t){return bt(this,t).has(t)},ot.prototype.set=function(t,e){var n=bt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},it.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.clear=function(){this.__data__=new rt,this.size=0},ct.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var n=this.__data__;if(n instanceof rt){var r=n.__data__;if(!J||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new ot(r)}return n.set(t,e),this.size=n.size,this};var dt=U?function(t){return null==t?[]:(t=Object(t),function(e,n){for(var r=-1,o=null==e?0:e.length,i=0,c=[];++r<o;){var a=e[r];u=a,L.call(t,u)&&(c[i++]=a)}var u;return c}(U(t)))}:function(){return[]},ht=ut;function yt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||u.test(t))&&t>-1&&t%1==0&&t<e}function vt(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jt(t,e){return t===e||t!=t&&e!=e}(W&&"[object DataView]"!=ht(new W(new ArrayBuffer(1)))||J&&ht(new J)!=o||R&&"[object Promise]"!=ht(R.resolve())||G&&ht(new G)!=c||q&&"[object WeakMap]"!=ht(new q))&&(ht=function(t){var e=ut(t),n=e==i?t.constructor:void 0,r=n?vt(n):"";if(r)switch(r){case K:return"[object DataView]";case Q:return o;case X:return"[object Promise]";case Y:return c;case Z:return"[object WeakMap]"}return e});var gt=lt(function(){return arguments}())?lt:function(t){return At(t)&&E.call(t,"callee")&&!L.call(t,"callee")},wt=Array.isArray,Ot=$||function(){return!1};function mt(t){if(!xt(t))return!1;var e=ut(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function kt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function xt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function At(t){return null!=t&&"object"==typeof t}var zt=v?function(t){return function(e){return t(e)}}(v):function(t){return At(t)&&kt(t.length)&&!!l[ut(t)]};function Bt(t){return null!=(e=t)&&kt(e.length)&&!mt(e)?function(t,e){var n=wt(t),r=!n&&gt(t),o=!n&&!r&&Ot(t),i=!n&&!r&&!o&&zt(t),c=n||r||o||i,a=c?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],u=a.length;for(var l in t)!e&&!E.call(t,l)||c&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||yt(l,u))||a.push(l);return a}(t):function(t){if(n=(e=t)&&e.constructor,e!==("function"==typeof n&&n.prototype||z))return V(t);var e,n,r=[];for(var o in Object(t))E.call(t,o)&&"constructor"!=o&&r.push(o);return r}(t);var e}n.exports=function(t,e){return st(t,e)}}).call(this,n(8),n(9)(t))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=window.wp.hooks},,function(t,e,n){"use strict";n.r(e);var r=n(5),o=n(6),i=n.n(o),c=n(0),a=n(7),u=n.n(a),l=n(2),s=(n(10),n(1)),f=n(4),p=n(3);const b=["core/paragraph","core/heading","core/separator","core/spacer"];class _ extends c.Component{constructor(...t){super(...t),i()(this,"initialLoad",!0)}componentDidMount(){this.isStillMounted=!0}componentDidUpdate(){const{attributes:t,clientId:e,setAttributes:n}=this.props,r=Object(p.select)("core/block-editor").getBlocks(e);u()(r,t.innerBlocks)||n({innerBlocks:r})}componentWillUnmount(){this.isStillMounted=!1}render(){const{attributes:t,setAttributes:e,clientId:n}=this.props,{title:r,innerBlocks:o}=t,i=Object(p.select)("core/block-editor").getBlocks(n);return this.initialLoad&&!i.length&&o.length&&(Object(p.dispatch)("core/block-editor").replaceInnerBlocks(n,o,!1),this.initialLoad=!this.initialLoad),[Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.InspectorControls,{key:"inspector"},Object(c.createElement)(f.PanelBody,{title:Object(l.__)("Collapsible Section","innocode-block-collapsible-section")},Object(c.createElement)(f.TextControl,{label:Object(l.__)("Title","innocode-block-collapsible-section"),type:"text",value:r,onChange:t=>{e({title:t})}})))),Object(c.createElement)("div",{className:"block-collapsible-section block-collapsible-section--is-opened"},Object(c.createElement)("div",{className:"block-collapsible-section__heading"},r),Object(c.createElement)("div",{className:"block-collapsible-section__content"},Object(c.createElement)(s.InnerBlocks,{allowedBlocks:b})))]}}var d=Object(p.withSelect)((t,e)=>({innerBlocks:t("core/block-editor").getBlocks(e.clientId)}))(t=>Object(c.createElement)("div",Object(s.useBlockProps)({className:"wp-block-innocode-collapsible-section"}),Object(c.createElement)(_,t)));n(11),Object(r.registerBlockType)("innocode/wp-block-collapsible-section",{attributes:{title:{type:"string",default:Object(l.__)("Section title","innocode-block-collapsible-section")},innerBlocks:{type:"array",default:[]}},edit:d,save:function(){return Object(c.createElement)("div",s.useBlockProps.save({className:"wp-block-innocode-text-box"}),Object(c.createElement)(s.InnerBlocks.Content,null))}})}]);