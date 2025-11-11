(function(vn,Fe){typeof exports=="object"&&typeof module<"u"?Fe(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],Fe):(vn=typeof globalThis<"u"?globalThis:vn||self,Fe(vn.RestaurantFloorPlanner={},vn.React))})(this,function(vn,Fe){"use strict";var Ls={exports:{}},yi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kr;function xl(){if(kr)return yi;kr=1;var i=Fe,e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function o(a,l,c){var d,u={},f=null,g=null;c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(g=l.ref);for(d in l)n.call(l,d)&&!r.hasOwnProperty(d)&&(u[d]=l[d]);if(a&&a.defaultProps)for(d in l=a.defaultProps,l)u[d]===void 0&&(u[d]=l[d]);return{$$typeof:e,type:a,key:f,ref:g,props:u,_owner:s.current}}return yi.Fragment=t,yi.jsx=o,yi.jsxs=o,yi}var Mi={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr;function _l(){return Gr||(Gr=1,process.env.NODE_ENV!=="production"&&function(){var i=Fe,e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen"),_=Symbol.iterator,v="@@iterator";function p(L){if(L===null||typeof L!="object")return null;var ue=_&&L[_]||L[v];return typeof ue=="function"?ue:null}var h=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(L){{for(var ue=arguments.length,Le=new Array(ue>1?ue-1:0),Xe=1;Xe<ue;Xe++)Le[Xe-1]=arguments[Xe];x("error",L,Le)}}function x(L,ue,Le){{var Xe=h.ReactDebugCurrentFrame,lt=Xe.getStackAddendum();lt!==""&&(ue+="%s",Le=Le.concat([lt]));var b=Le.map(function(I){return String(I)});b.unshift("Warning: "+ue),Function.prototype.apply.call(console[L],console,b)}}var R=!1,U=!1,P=!1,C=!1,ee=!1,E;E=Symbol.for("react.module.reference");function A(L){return!!(typeof L=="string"||typeof L=="function"||L===n||L===r||ee||L===s||L===c||L===d||C||L===g||R||U||P||typeof L=="object"&&L!==null&&(L.$$typeof===f||L.$$typeof===u||L.$$typeof===o||L.$$typeof===a||L.$$typeof===l||L.$$typeof===E||L.getModuleId!==void 0))}function O(L,ue,Le){var Xe=L.displayName;if(Xe)return Xe;var lt=ue.displayName||ue.name||"";return lt!==""?Le+"("+lt+")":Le}function te(L){return L.displayName||"Context"}function ae(L){if(L==null)return null;if(typeof L.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof L=="function")return L.displayName||L.name||null;if(typeof L=="string")return L;switch(L){case n:return"Fragment";case t:return"Portal";case r:return"Profiler";case s:return"StrictMode";case c:return"Suspense";case d:return"SuspenseList"}if(typeof L=="object")switch(L.$$typeof){case a:var ue=L;return te(ue)+".Consumer";case o:var Le=L;return te(Le._context)+".Provider";case l:return O(L,L.render,"ForwardRef");case u:var Xe=L.displayName||null;return Xe!==null?Xe:ae(L.type)||"Memo";case f:{var lt=L,b=lt._payload,I=lt._init;try{return ae(I(b))}catch{return null}}}return null}var N=Object.assign,Y=0,M,ne,K,j,B,J,Z;function W(){}W.__reactDisabledLog=!0;function ie(){{if(Y===0){M=console.log,ne=console.info,K=console.warn,j=console.error,B=console.group,J=console.groupCollapsed,Z=console.groupEnd;var L={configurable:!0,enumerable:!0,value:W,writable:!0};Object.defineProperties(console,{info:L,log:L,warn:L,error:L,group:L,groupCollapsed:L,groupEnd:L})}Y++}}function le(){{if(Y--,Y===0){var L={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},L,{value:M}),info:N({},L,{value:ne}),warn:N({},L,{value:K}),error:N({},L,{value:j}),group:N({},L,{value:B}),groupCollapsed:N({},L,{value:J}),groupEnd:N({},L,{value:Z})})}Y<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Me=h.ReactCurrentDispatcher,me;function Ue(L,ue,Le){{if(me===void 0)try{throw Error()}catch(lt){var Xe=lt.stack.trim().match(/\n( *(at )?)/);me=Xe&&Xe[1]||""}return`
`+me+L}}var De=!1,pe;{var xe=typeof WeakMap=="function"?WeakMap:Map;pe=new xe}function z(L,ue){if(!L||De)return"";{var Le=pe.get(L);if(Le!==void 0)return Le}var Xe;De=!0;var lt=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var b;b=Me.current,Me.current=null,ie();try{if(ue){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(We){Xe=We}Reflect.construct(L,[],I)}else{try{I.call()}catch(We){Xe=We}L.call(I.prototype)}}else{try{throw Error()}catch(We){Xe=We}L()}}catch(We){if(We&&Xe&&typeof We.stack=="string"){for(var H=We.stack.split(`
`),$=Xe.stack.split(`
`),X=H.length-1,ve=$.length-1;X>=1&&ve>=0&&H[X]!==$[ve];)ve--;for(;X>=1&&ve>=0;X--,ve--)if(H[X]!==$[ve]){if(X!==1||ve!==1)do if(X--,ve--,ve<0||H[X]!==$[ve]){var Ie=`
`+H[X].replace(" at new "," at ");return L.displayName&&Ie.includes("<anonymous>")&&(Ie=Ie.replace("<anonymous>",L.displayName)),typeof L=="function"&&pe.set(L,Ie),Ie}while(X>=1&&ve>=0);break}}}finally{De=!1,Me.current=b,le(),Error.prepareStackTrace=lt}var Ve=L?L.displayName||L.name:"",je=Ve?Ue(Ve):"";return typeof L=="function"&&pe.set(L,je),je}function Ae(L,ue,Le){return z(L,!1)}function Re(L){var ue=L.prototype;return!!(ue&&ue.isReactComponent)}function Ce(L,ue,Le){if(L==null)return"";if(typeof L=="function")return z(L,Re(L));if(typeof L=="string")return Ue(L);switch(L){case c:return Ue("Suspense");case d:return Ue("SuspenseList")}if(typeof L=="object")switch(L.$$typeof){case l:return Ae(L.render);case u:return Ce(L.type,ue,Le);case f:{var Xe=L,lt=Xe._payload,b=Xe._init;try{return Ce(b(lt),ue,Le)}catch{}}}return""}var we=Object.prototype.hasOwnProperty,Be={},fe=h.ReactDebugCurrentFrame;function y(L){if(L){var ue=L._owner,Le=Ce(L.type,L._source,ue?ue.type:null);fe.setExtraStackFrame(Le)}else fe.setExtraStackFrame(null)}function S(L,ue,Le,Xe,lt){{var b=Function.call.bind(we);for(var I in L)if(b(L,I)){var H=void 0;try{if(typeof L[I]!="function"){var $=Error((Xe||"React class")+": "+Le+" type `"+I+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof L[I]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw $.name="Invariant Violation",$}H=L[I](ue,I,Xe,Le,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(X){H=X}H&&!(H instanceof Error)&&(y(lt),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",Xe||"React class",Le,I,typeof H),y(null)),H instanceof Error&&!(H.message in Be)&&(Be[H.message]=!0,y(lt),T("Failed %s type: %s",Le,H.message),y(null))}}}var D=Array.isArray;function q(L){return D(L)}function ce(L){{var ue=typeof Symbol=="function"&&Symbol.toStringTag,Le=ue&&L[Symbol.toStringTag]||L.constructor.name||"Object";return Le}}function re(L){try{return oe(L),!1}catch{return!0}}function oe(L){return""+L}function ge(L){if(re(L))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ce(L)),oe(L)}var ye=h.ReactCurrentOwner,Ne={key:!0,ref:!0,__self:!0,__source:!0},Oe,de,he;he={};function ke(L){if(we.call(L,"ref")){var ue=Object.getOwnPropertyDescriptor(L,"ref").get;if(ue&&ue.isReactWarning)return!1}return L.ref!==void 0}function He(L){if(we.call(L,"key")){var ue=Object.getOwnPropertyDescriptor(L,"key").get;if(ue&&ue.isReactWarning)return!1}return L.key!==void 0}function Pe(L,ue){if(typeof L.ref=="string"&&ye.current&&ue&&ye.current.stateNode!==ue){var Le=ae(ye.current.type);he[Le]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',ae(ye.current.type),L.ref),he[Le]=!0)}}function Se(L,ue){{var Le=function(){Oe||(Oe=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",ue))};Le.isReactWarning=!0,Object.defineProperty(L,"key",{get:Le,configurable:!0})}}function ze(L,ue){{var Le=function(){de||(de=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",ue))};Le.isReactWarning=!0,Object.defineProperty(L,"ref",{get:Le,configurable:!0})}}var Ke=function(L,ue,Le,Xe,lt,b,I){var H={$$typeof:e,type:L,key:ue,ref:Le,props:I,_owner:b};return H._store={},Object.defineProperty(H._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(H,"_self",{configurable:!1,enumerable:!1,writable:!1,value:Xe}),Object.defineProperty(H,"_source",{configurable:!1,enumerable:!1,writable:!1,value:lt}),Object.freeze&&(Object.freeze(H.props),Object.freeze(H)),H};function k(L,ue,Le,Xe,lt){{var b,I={},H=null,$=null;Le!==void 0&&(ge(Le),H=""+Le),He(ue)&&(ge(ue.key),H=""+ue.key),ke(ue)&&($=ue.ref,Pe(ue,lt));for(b in ue)we.call(ue,b)&&!Ne.hasOwnProperty(b)&&(I[b]=ue[b]);if(L&&L.defaultProps){var X=L.defaultProps;for(b in X)I[b]===void 0&&(I[b]=X[b])}if(H||$){var ve=typeof L=="function"?L.displayName||L.name||"Unknown":L;H&&Se(I,ve),$&&ze(I,ve)}return Ke(L,H,$,lt,Xe,ye.current,I)}}var V=h.ReactCurrentOwner,F=h.ReactDebugCurrentFrame;function w(L){if(L){var ue=L._owner,Le=Ce(L.type,L._source,ue?ue.type:null);F.setExtraStackFrame(Le)}else F.setExtraStackFrame(null)}var Q;Q=!1;function se(L){return typeof L=="object"&&L!==null&&L.$$typeof===e}function _e(){{if(V.current){var L=ae(V.current.type);if(L)return`

Check the render method of \``+L+"`."}return""}}function be(L){{if(L!==void 0){var ue=L.fileName.replace(/^.*[\\\/]/,""),Le=L.lineNumber;return`

Check your code at `+ue+":"+Le+"."}return""}}var Ge={};function $e(L){{var ue=_e();if(!ue){var Le=typeof L=="string"?L:L.displayName||L.name;Le&&(ue=`

Check the top-level render call using <`+Le+">.")}return ue}}function st(L,ue){{if(!L._store||L._store.validated||L.key!=null)return;L._store.validated=!0;var Le=$e(ue);if(Ge[Le])return;Ge[Le]=!0;var Xe="";L&&L._owner&&L._owner!==V.current&&(Xe=" It was passed a child from "+ae(L._owner.type)+"."),w(L),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',Le,Xe),w(null)}}function ct(L,ue){{if(typeof L!="object")return;if(q(L))for(var Le=0;Le<L.length;Le++){var Xe=L[Le];se(Xe)&&st(Xe,ue)}else if(se(L))L._store&&(L._store.validated=!0);else if(L){var lt=p(L);if(typeof lt=="function"&&lt!==L.entries)for(var b=lt.call(L),I;!(I=b.next()).done;)se(I.value)&&st(I.value,ue)}}}function Je(L){{var ue=L.type;if(ue==null||typeof ue=="string")return;var Le;if(typeof ue=="function")Le=ue.propTypes;else if(typeof ue=="object"&&(ue.$$typeof===l||ue.$$typeof===u))Le=ue.propTypes;else return;if(Le){var Xe=ae(ue);S(Le,L.props,"prop",Xe,L)}else if(ue.PropTypes!==void 0&&!Q){Q=!0;var lt=ae(ue);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",lt||"Unknown")}typeof ue.getDefaultProps=="function"&&!ue.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ht(L){{for(var ue=Object.keys(L.props),Le=0;Le<ue.length;Le++){var Xe=ue[Le];if(Xe!=="children"&&Xe!=="key"){w(L),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",Xe),w(null);break}}L.ref!==null&&(w(L),T("Invalid attribute `ref` supplied to `React.Fragment`."),w(null))}}var ut={};function Ot(L,ue,Le,Xe,lt,b){{var I=A(L);if(!I){var H="";(L===void 0||typeof L=="object"&&L!==null&&Object.keys(L).length===0)&&(H+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var $=be(lt);$?H+=$:H+=_e();var X;L===null?X="null":q(L)?X="array":L!==void 0&&L.$$typeof===e?(X="<"+(ae(L.type)||"Unknown")+" />",H=" Did you accidentally export a JSX literal instead of a component?"):X=typeof L,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",X,H)}var ve=k(L,ue,Le,lt,b);if(ve==null)return ve;if(I){var Ie=ue.children;if(Ie!==void 0)if(Xe)if(q(Ie)){for(var Ve=0;Ve<Ie.length;Ve++)ct(Ie[Ve],L);Object.freeze&&Object.freeze(Ie)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ct(Ie,L)}if(we.call(ue,"key")){var je=ae(L),We=Object.keys(ue).filter(function(xt){return xt!=="key"}),qe=We.length>0?"{key: someKey, "+We.join(": ..., ")+": ...}":"{key: someKey}";if(!ut[je+qe]){var Ze=We.length>0?"{"+We.join(": ..., ")+": ...}":"{}";T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,qe,je,Ze,je),ut[je+qe]=!0}}return L===n?ht(ve):Je(ve),ve}}function pt(L,ue,Le){return Ot(L,ue,Le,!0)}function ot(L,ue,Le){return Ot(L,ue,Le,!1)}var Tt=ot,xn=pt;Mi.Fragment=n,Mi.jsx=Tt,Mi.jsxs=xn}()),Mi}process.env.NODE_ENV==="production"?Ls.exports=xl():Ls.exports=_l();var m=Ls.exports,vl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const yl=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var dt=(i,e)=>{const t=Fe.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:o,children:a,...l},c)=>Fe.createElement("svg",{ref:c,...vl,width:s,height:s,stroke:n,strokeWidth:o?Number(r)*24/Number(s):r,className:`lucide lucide-${yl(i)}`,...l},[...e.map(([d,u])=>Fe.createElement(d,u)),...(Array.isArray(a)?a:[a])||[]]));return t.displayName=`${i}`,t};const Ns=dt("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1ed1m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]),Ml=dt("Bath",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]),Sl=dt("Box",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),bl=dt("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]),El=dt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),wl=dt("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),Hr=dt("Columns",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}]]),Tl=dt("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]),Al=dt("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Rl=dt("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Cl=dt("Grid",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"3",y2:"21",key:"13tij5"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21",key:"1hpv9i"}]]),Pl=dt("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),Vr=dt("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Ll=dt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]),Nl=dt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),Wr=dt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),Ds=dt("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]),Dl=dt("Package",[["path",{d:"M16.5 9.4 7.55 4.24",key:"10qotr"}],["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),Us=dt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),jr=dt("RectangleVertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]),Is=dt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),Ul=dt("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]),Il=dt("Rows",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}]]),Fl=dt("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),Si=dt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),zi=dt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Ol=dt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Bl=dt("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]),zl=dt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xr=dt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),kl=dt("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Gl=`
  .hexagon-shape {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`,rt=20,Hl={small:{width:50,height:50},medium:{width:90,height:90},large:{width:130,height:130}},Vl={square:Si,circle:wl,rectangle:Si,hexagon:Si},Yr={small:"Small",medium:"Medium",large:"Big"},Fs={bar:Bl,kitchen:bl,toilet:Ml},ki={bar:"Bar",kitchen:"Kitchen",toilet:"Toilet"},qr={bar:{bg:"bg-gradient-to-br from-purple-500 to-purple-700",border:"border-purple-600",text:"text-purple-100"},kitchen:{bg:"bg-gradient-to-br from-orange-500 to-orange-700",border:"border-orange-600",text:"text-orange-100"},toilet:{bg:"bg-gradient-to-br from-cyan-500 to-cyan-700",border:"border-cyan-600",text:"text-cyan-100"}},Gi={wall:"Wall",door:"Door",window:"Window"},Wl={wall:jr,door:Tl,window:jr},$r={pillar:"Pillar",column:"Column",stairs:"Stairs"},jl={pillar:Hr,column:Hr,stairs:Il},Xl={pillar:{bg:"bg-gradient-to-br from-gray-600 to-gray-800",border:"border-gray-700",text:"text-gray-100"},column:{bg:"bg-gradient-to-br from-slate-600 to-slate-800",border:"border-slate-700",text:"text-slate-100"},stairs:{bg:"bg-gradient-to-br from-stone-600 to-stone-800",border:"border-stone-700",text:"text-stone-100"}},yn=()=>Math.random().toString(36).slice(2,11),Yl=i=>{const e=i.shape==="rectangle"?i.width*1.5:i.width,t=Math.min(e,i.height),n=Math.round(t*.35);return Math.max(18,Math.min(48,n))},Kr=i=>i.shape==="rectangle"?i.width*1.5:i.width,Zr=(i,e)=>{const{width:t,height:n}=Hl[e];return{width:i==="rectangle"?t*1.5:t,height:n}},Hi=(i,e)=>{const t=Math.abs(e.x-i.x),n=Math.abs(e.y-i.y);return t>n?{x:e.x,y:i.y}:{x:i.x,y:e.y}},ql=({chair:i,table:e,isSelected:t,onSelect:n,onDrag:s,onDragEnd:r,totalChairsOnSide:o})=>{const a=Yl(e),l=i.size??Math.round(a*1.3),c=Math.max(10,Math.round(l*.25)),d=Math.min(l-4,Math.max(20,Math.round(l*.65))),u=Kr(e),f=(e.rotation||0)*(Math.PI/180),g=(()=>{const p=(i.position==="top"||i.position==="bottom"?u:e.height)-l*o,h=o>1?p/(o+1):p/2,T=h+i.index*(l+h)+l/2;let x=0,R=0;switch(i.position){case"top":x=T-u/2,R=-(e.height/2+c+l/2);break;case"bottom":x=T-u/2,R=e.height/2+c+l/2;break;case"left":x=-(u/2+c+l/2),R=T-e.height/2;break;case"right":x=u/2+c+l/2,R=T-e.height/2;break}const U=x*Math.cos(f)-R*Math.sin(f),P=x*Math.sin(f)+R*Math.cos(f),C=e.x+u/2,ee=e.y+e.height/2;return{x:C+U-l/2,y:ee+P-l/2}})(),_=()=>{let v=0;switch(i.position){case"top":v=0;break;case"right":v=90;break;case"bottom":v=180;break;case"left":v=270;break}return v+(e.rotation||0)};return m.jsx("div",{className:`absolute cursor-move transition-all duration-150 ${t?"ring-4 ring-amber-400 ring-offset-2":""}`,style:{left:g.x,top:g.y,width:l,height:l,transform:`rotate(${_()}deg)`,zIndex:t?100:50,filter:"drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))"},onMouseDown:v=>{v.stopPropagation(),n(),s(v,i.id)},onMouseUp:r,children:m.jsx("div",{className:"w-full h-full bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg border-4 border-amber-800 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all",children:m.jsx(Ns,{size:d,strokeWidth:3.5,className:"text-amber-50"})})})},$l=({table:i,chairs:e,isSelected:t,onSelect:n,onDrag:s,onDragEnd:r})=>{const o={left:i.x,top:i.y,width:Kr(i),height:i.height,zIndex:t?100:50,transform:`rotate(${i.rotation||0}deg)`},a="w-full h-full flex items-center justify-center relative",l=i.shape==="circle"?`${a} rounded-full`:i.shape==="hexagon"?`${a} hexagon-shape`:a,d=e.filter(g=>g.tableId===i.id).length,u=i.name.match(/\d+/),f=u?u[0]:i.name;return m.jsx("div",{className:`absolute cursor-move transition-all duration-150 ${t?"ring-2 ring-emerald-500 ring-offset-2":""}`,style:o,onMouseDown:g=>{g.stopPropagation(),n(),s(g,i.id)},onClick:g=>{g.stopPropagation(),n()},onMouseUp:r,children:m.jsxs("div",{className:l,children:[m.jsx("div",{className:"absolute inset-0 rounded-[inherit]",style:{background:"linear-gradient(145deg, #059669 0%, #047857 50%, #065f46 100%)",boxShadow:`
              0 8px 16px rgba(0, 0, 0, 0.3),
              0 4px 8px rgba(0, 0, 0, 0.2),
              inset 0 2px 4px rgba(255, 255, 255, 0.2),
              inset 0 -2px 4px rgba(0, 0, 0, 0.2)
            `}}),m.jsx("div",{className:"absolute inset-0 rounded-[inherit] opacity-20",style:{background:`
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0, 0, 0, 0.1) 2px,
                rgba(0, 0, 0, 0.1) 4px
              )
            `}}),m.jsx("div",{className:"absolute inset-0 rounded-[inherit]",style:{border:"3px solid transparent",borderImage:"linear-gradient(145deg, rgba(255,255,255,0.4), rgba(0,0,0,0.2)) 1",pointerEvents:"none"}}),m.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center gap-1 text-white drop-shadow-lg",children:[m.jsxs("span",{className:"text-xs font-bold uppercase tracking-wide",children:["N: ",f]}),m.jsxs("span",{className:"text-xs font-bold uppercase tracking-wide",children:["S: ",d]})]})]})})},Kl=({object:i,isSelected:e,onSelect:t,onDragStart:n})=>{const s=Fs[i.type],r=qr[i.type],[o,a]=Fe.useState(!1),l=c=>{a(!0),n(c);const d=()=>{a(!1),document.removeEventListener("mouseup",d)};document.addEventListener("mouseup",d)};return m.jsxs("div",{className:`absolute cursor-move select-none ${o?"":"transition-all duration-75"} ${r.bg} ${r.border} border-2 rounded-lg shadow-lg flex items-center justify-center ${e?"ring-4 ring-blue-400 ring-opacity-50 scale-105":"hover:scale-102"}`,style:{left:`${i.x}px`,top:`${i.y}px`,width:`${i.width}px`,height:`${i.height}px`,transform:`rotate(${i.rotation}deg)`,transformOrigin:"center",willChange:o?"transform":"auto"},onClick:c=>{c.stopPropagation(),t()},onMouseDown:l,children:[m.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 pointer-events-none",children:[m.jsx(s,{className:`w-8 h-8 ${r.text}`,strokeWidth:2}),m.jsx("span",{className:`text-sm font-bold ${r.text} uppercase tracking-wide`,children:i.name})]}),e&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-nw-resize"}),m.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-ne-resize"}),m.jsx("div",{className:"absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-sw-resize"}),m.jsx("div",{className:"absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white cursor-se-resize"})]})]})},Jr=({wall:i,isSelected:e,onSelect:t,onDragHandle:n,onDragStart:s})=>{const r=Math.sqrt(Math.pow(i.endX-i.startX,2)+Math.pow(i.endY-i.startY,2)),o=Math.atan2(i.endY-i.startY,i.endX-i.startX)*(180/Math.PI),a=()=>{if(!e)return"pointer";const u=Math.abs(i.endX-i.startX),f=Math.abs(i.endY-i.startY);return u>f?"ew-resize":"ns-resize"},l=()=>{switch(i.type){case"wall":return"bg-gray-800";case"door":return"bg-amber-600";case"window":return"bg-blue-500"}},c=()=>i.type==="window"?"bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400":i.type==="door"?"":l(),d=()=>{const u=r*.1,f=(r-u)/2;return m.jsxs("div",{className:"w-full h-full relative",children:[m.jsx("div",{className:"absolute left-0 bg-gradient-to-r from-amber-600 to-amber-700 shadow-md rounded-sm",style:{width:`${f}px`,height:`${i.thickness}px`,borderTop:"1px solid #fbbf24",borderBottom:"1px solid #78350f",borderRight:"2px solid #92400e"},children:m.jsx("div",{className:"absolute right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-sm"})}),m.jsx("div",{className:"absolute bg-transparent",style:{left:`${f}px`,width:`${u}px`,height:`${i.thickness}px`}}),m.jsx("div",{className:"absolute right-0 bg-gradient-to-r from-amber-700 to-amber-600 shadow-md rounded-sm",style:{width:`${f}px`,height:`${i.thickness}px`,borderTop:"1px solid #fbbf24",borderBottom:"1px solid #78350f",borderLeft:"2px solid #92400e"},children:m.jsx("div",{className:"absolute left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-sm"})})]})};return m.jsxs("div",{onClick:u=>{u.stopPropagation(),t()},onMouseDown:u=>{e&&s&&(u.stopPropagation(),s(u))},className:`absolute transition-all ${e?"ring-4 ring-blue-400 ring-opacity-50 hover:ring-6 hover:ring-blue-300":""}`,style:{left:`${i.startX}px`,top:`${i.startY}px`,width:`${r}px`,height:`${i.thickness}px`,transform:`rotate(${o}deg)`,transformOrigin:"top left",zIndex:10,cursor:e?"move":"pointer",pointerEvents:"auto"},children:[i.type==="door"?d():m.jsx("div",{className:`w-full h-full ${c()} shadow-lg hover:opacity-90 transition-opacity rounded-sm`,children:e&&m.jsxs("div",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30",children:[Gi[i.type]," - ",Math.round(r),"px"]})}),i.type==="door"&&e&&m.jsxs("div",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30",children:[Gi[i.type]," - ",Math.round(r),"px"]}),e&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"absolute -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white hover:bg-blue-600 hover:scale-125 transition-all shadow-xl z-30",style:{cursor:a()},onMouseDown:u=>{u.stopPropagation(),n==null||n(u,"start")},title:"Drag to resize"}),m.jsx("div",{className:"absolute -right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white hover:bg-blue-600 hover:scale-125 transition-all shadow-xl z-30",style:{cursor:a()},onMouseDown:u=>{u.stopPropagation(),n==null||n(u,"end")},title:"Drag to resize"})]})]})},Zl=({element:i,isSelected:e,onSelect:t,onDragStart:n})=>{const[s,r]=Fe.useState(!1),o=l=>{r(!0),n(l);const c=()=>{r(!1),document.removeEventListener("mouseup",c)};document.addEventListener("mouseup",c)},a=()=>i.type==="pillar"?m.jsxs("div",{className:"w-full h-full relative",children:[m.jsxs("div",{className:"absolute inset-2 bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 rounded-full shadow-2xl",children:[m.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20"}),m.jsx("div",{className:"absolute inset-0 rounded-full shadow-inner",style:{boxShadow:"inset -4px -4px 12px rgba(0,0,0,0.5), inset 4px 4px 12px rgba(255,255,255,0.2)"}})]}),m.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:m.jsx("div",{className:"w-1/3 h-1/3 bg-white/10 rounded-full blur-sm"})})]}):i.type==="column"?m.jsxs("div",{className:"w-full h-full relative",children:[m.jsxs("div",{className:"absolute inset-2 bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 rounded-lg shadow-2xl",children:[m.jsx("div",{className:"absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-black/30"}),m.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-lg"}),m.jsx("div",{className:"absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-l-lg"}),m.jsx("div",{className:"absolute inset-0 rounded-lg",style:{boxShadow:"inset 0 0 20px rgba(0,0,0,0.5)"}})]}),m.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:m.jsx("div",{className:"w-0.5 h-2/3 bg-white/20"})})]}):i.type==="stairs"?m.jsxs("div",{className:"w-full h-full relative bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rounded-lg shadow-xl overflow-hidden",children:[[0,1,2,3,4,5].map(l=>m.jsxs("div",{className:"absolute left-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 border-t border-amber-600",style:{top:`${l*16.66}%`,height:"16.66%",boxShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2"}),m.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px bg-black/30"})]},l)),m.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:m.jsx("div",{className:"bg-white/80 rounded-full p-2 shadow-lg",children:m.jsx("svg",{className:"w-6 h-6 text-amber-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 15l7-7 7 7"})})})})]}):null;return m.jsxs("div",{className:`absolute cursor-move select-none ${s?"":"transition-all duration-75"} rounded-lg ${e?"ring-4 ring-blue-400 ring-opacity-50 scale-105":"hover:scale-102"}`,style:{left:`${i.x}px`,top:`${i.y}px`,width:`${i.width}px`,height:`${i.height}px`,transform:`rotate(${i.rotation}deg)`,transformOrigin:"center",willChange:s?"transform":"auto",zIndex:20},onClick:l=>{l.stopPropagation(),t()},onMouseDown:o,children:[a(),e&&m.jsx("div",{className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg z-30",children:i.name}),e&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"}),m.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"}),m.jsx("div",{className:"absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"}),m.jsx("div",{className:"absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"})]})]})},Jl=Yr,Ql=({floors:i,currentFloor:e,onAddFloor:t,onRemoveFloor:n,onSwitchFloor:s,onRenameFloor:r,onAddTable:o,onAddObject:a,onStartWallDrawing:l,onAddFixedElement:c,onRotateTable:d,onDuplicateTable:u,onRemoveTable:f,onSave:g,onLoad:_,selectedTable:v,selectedTableChairs:p})=>{const[h,T]=Fe.useState(null),[x,R]=Fe.useState(""),[U,P]=Fe.useState("tables"),C=Fe.useRef(null);Fe.useEffect(()=>{h&&C.current&&(C.current.focus(),C.current.select())},[h]);const ee=O=>{T(O.id),R(O.name)},E=()=>{h&&x.trim()&&r(h,x.trim()),T(null),R("")},A=O=>{O.key==="Enter"?E():O.key==="Escape"&&(T(null),R(""))};return m.jsxs("div",{className:"w-80 bg-white shadow-lg border-r border-gray-200 flex flex-col",children:[m.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white",children:[m.jsx("h1",{className:"text-xl font-bold",children:"Restaurant Designer"}),m.jsx("p",{className:"text-blue-100 text-sm",children:"Professional Floor Planner"})]}),m.jsxs("div",{className:"p-4 border-b border-gray-200",children:[m.jsxs("div",{className:"flex items-center justify-between mb-4",children:[m.jsxs("h2",{className:"text-lg font-semibold text-gray-800 flex items-center gap-2",children:[m.jsx(Vr,{className:"w-5 h-5"}),"Floor Plans (",i.length,")"]}),m.jsxs("div",{className:"flex gap-1",children:[m.jsx("button",{onClick:t,className:"p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors",title:"Add New Floor",children:m.jsx(Us,{className:"w-4 h-4"})}),m.jsx("button",{onClick:n,disabled:i.length<=1,className:"p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Remove Current Floor",children:m.jsx(Wr,{className:"w-4 h-4"})})]})]}),m.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto",children:i.map(O=>m.jsxs("div",{className:`w-full p-3 rounded-lg transition-all flex items-center justify-between ${O.isActive?"bg-blue-100 text-blue-800 border border-blue-200 shadow-sm":"text-gray-600 hover:bg-gray-100 border border-transparent"}`,onClick:()=>{h!==O.id&&s(O.id)},onDoubleClick:()=>ee(O),children:[m.jsxs("div",{className:"flex-1",children:[h===O.id?m.jsx("input",{ref:C,type:"text",value:x,onChange:te=>R(te.target.value),onBlur:E,onKeyDown:A,className:"w-full px-2 py-1 text-sm font-medium bg-white border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:te=>te.stopPropagation()}):m.jsx("div",{className:"font-medium cursor-pointer",children:O.name}),m.jsxs("div",{className:"text-xs text-gray-500 mt-0.5",children:[O.tables.length," tables, ",O.chairs.length," chairs"]})]}),O.isActive&&m.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]},O.id))})]}),m.jsx("div",{className:"border-b border-gray-200",children:m.jsxs("div",{className:"flex",children:[m.jsxs("button",{onClick:()=>P("tables"),className:`flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${U==="tables"?"bg-white text-emerald-600 border-b-2 border-emerald-600":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[m.jsx(Ll,{className:"w-4 h-4"}),"Tables"]}),m.jsxs("button",{onClick:()=>P("objects"),className:`flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${U==="objects"?"bg-white text-purple-600 border-b-2 border-purple-600":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[m.jsx(Dl,{className:"w-4 h-4"}),"Objects"]}),m.jsxs("button",{onClick:()=>P("roomLayout"),className:`flex-1 py-3 px-4 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${U==="roomLayout"?"bg-white text-gray-700 border-b-2 border-gray-700":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[m.jsx(Pl,{className:"w-4 h-4"}),"Room"]})]})}),U==="tables"&&m.jsxs("div",{className:"p-4 border-b border-gray-200",children:[m.jsx("h3",{className:"text-md font-semibold text-gray-800 mb-3",children:"Add Tables"}),m.jsx("div",{className:"grid grid-cols-2 gap-3",children:Object.entries(Vl).map(([O,te])=>m.jsxs("button",{onClick:()=>o(O),className:"p-3 border-2 border-gray-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all flex flex-col items-center gap-2 hover:shadow-md",children:[m.jsx(te,{className:"w-6 h-6 text-emerald-600"}),m.jsx("span",{className:"text-xs text-gray-700 capitalize font-medium",children:O})]},O))})]}),U==="objects"&&m.jsxs("div",{className:"p-4 border-b border-gray-200",children:[m.jsx("h3",{className:"text-md font-semibold text-gray-800 mb-3",children:"Add Objects"}),m.jsx("div",{className:"space-y-3",children:Object.keys(ki).map(O=>{const te=Fs[O],ae=qr[O],N=ki[O];return m.jsxs("button",{onClick:()=>a(O),className:`w-full p-4 ${ae.bg} border-2 ${ae.border} rounded-xl hover:scale-105 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl`,children:[m.jsx("div",{className:"bg-white/20 p-2 rounded-lg",children:m.jsx(te,{className:`w-6 h-6 ${ae.text}`,strokeWidth:2.5})}),m.jsxs("div",{className:"flex-1 text-left",children:[m.jsx("span",{className:`text-base font-bold ${ae.text}`,children:N}),m.jsx("div",{className:"text-xs text-white/80 mt-0.5",children:"Click to add to floor"})]})]},O)})})]}),U==="roomLayout"&&m.jsxs("div",{className:"p-4 border-b border-gray-200",children:[m.jsxs("div",{className:"mb-6",children:[m.jsx("h3",{className:"text-md font-semibold text-gray-800 mb-3",children:"Draw Walls"}),m.jsx("div",{className:"space-y-2",children:["wall","door","window"].map(O=>{const te=Wl[O],ae=Gi[O],N={wall:"bg-gradient-to-br from-gray-600 to-gray-800 border-gray-700 text-white hover:from-gray-700 hover:to-gray-900",door:"bg-gradient-to-br from-amber-500 to-amber-700 border-amber-600 text-white hover:from-amber-600 hover:to-amber-800",window:"bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600 text-white hover:from-blue-600 hover:to-blue-800"};return m.jsxs("button",{onClick:()=>l(O),className:`w-full p-3 border-2 rounded-lg transition-all flex items-center gap-3 shadow-md hover:shadow-lg ${N[O]}`,children:[m.jsx(te,{className:"w-5 h-5",strokeWidth:2.5}),m.jsx("span",{className:"text-sm font-semibold",children:ae})]},O)})})]}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-md font-semibold text-gray-800 mb-3",children:"Add Elements"}),m.jsx("div",{className:"space-y-2",children:["pillar","column","stairs"].map(O=>{const te=jl[O],ae=Xl[O],N=$r[O];return m.jsxs("button",{onClick:()=>c(O),className:`w-full p-3 ${ae.bg} border-2 ${ae.border} rounded-lg hover:scale-105 transition-all flex items-center gap-3 shadow-md hover:shadow-lg`,children:[m.jsx("div",{className:"bg-white/10 p-1.5 rounded",children:m.jsx(te,{className:`w-5 h-5 ${ae.text}`,strokeWidth:2.5})}),m.jsx("span",{className:`text-sm font-semibold ${ae.text}`,children:N})]},O)})})]})]}),v&&m.jsxs("div",{className:"p-4 border-b border-gray-200",children:[m.jsxs("div",{className:"flex items-center justify-between mb-3",children:[m.jsx("h3",{className:"text-md font-semibold text-gray-800",children:"Table Properties"}),m.jsxs("div",{className:"flex gap-1",children:[m.jsx("button",{onClick:d,className:"p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors",title:"Rotate Table",children:m.jsx(Ul,{className:"w-4 h-4"})}),m.jsx("button",{onClick:u,className:"p-1 text-green-600 hover:bg-green-100 rounded transition-colors",title:"Duplicate Table",children:m.jsx(Us,{className:"w-4 h-4"})}),m.jsx("button",{onClick:f,className:"p-1 text-red-600 hover:bg-red-100 rounded transition-colors",title:"Delete Table",children:m.jsx(zi,{className:"w-4 h-4"})})]})]}),m.jsxs("div",{className:"space-y-3 text-sm text-gray-600",children:[m.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-xs uppercase tracking-wide text-gray-400",children:"Name"}),m.jsx("div",{className:"font-semibold text-gray-800",children:v.name})]}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs uppercase tracking-wide text-gray-400",children:"Shape"}),m.jsx("div",{className:"font-semibold text-gray-800 capitalize",children:v.shape})]}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs uppercase tracking-wide text-gray-400",children:"Size"}),m.jsx("div",{className:"font-semibold text-gray-800",children:Jl[v.size]})]}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs uppercase tracking-wide text-gray-400",children:"Seats"}),m.jsx("div",{className:"font-semibold text-gray-800",children:p.length})]})]}),m.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-md p-3",children:m.jsxs("p",{className:"text-xs text-blue-700",children:["💡 ",m.jsx("span",{className:"font-semibold",children:"Tip:"})," Use the ",m.jsx("span",{className:"font-semibold",children:"Manage Chairs"})," button in the toolbar above to add or remove chairs from each side of the table."]})})]})]}),m.jsxs("div",{className:"p-4 mt-auto space-y-3",children:[m.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg",children:[m.jsx("h4",{className:"text-sm font-semibold text-gray-700 mb-2",children:"Current Floor Stats"}),m.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-gray-600",children:"Tables"}),m.jsx("div",{className:"font-bold text-lg text-emerald-600",children:(e==null?void 0:e.tables.length)??0})]}),m.jsxs("div",{children:[m.jsx("div",{className:"text-gray-600",children:"Total Seats"}),m.jsx("div",{className:"font-bold text-lg text-amber-600",children:(e==null?void 0:e.chairs.length)??0})]})]})]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsxs("button",{onClick:g,className:"flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium",children:[m.jsx(Fl,{className:"w-4 h-4"}),"Save"]}),m.jsxs("button",{onClick:_,className:"flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium",children:[m.jsx(Ol,{className:"w-4 h-4"}),"Load"]})]})]})]})},Qr=Yr,ec=["top","right","bottom","left"],tc=["small","medium","large"],nc=({showGrid:i,selectedTable:e,selectedObject:t,selectedWall:n,selectedFixedElement:s,selectedTableChairs:r,onToggleGrid:o,onAddChair:a,onRemoveChair:l,onChangeTableSize:c,onTableNameChange:d,onCustomTableSize:u,onObjectNameChange:f,onObjectResize:g,onRemoveObject:_,onRemoveWall:v,onRemoveFixedElement:p,onChangeWallThickness:h,onConvertWallType:T,onFixedElementNameChange:x,onFixedElementResize:R,onChairSizeChange:U,onResetChairSizes:P,on3DPreview:C,onObjectRotate:ee,tableCount:E,chairCount:A,objectCount:O,wallCount:te,fixedElementCount:ae,selectedElementType:N})=>{const Y=Fe.useRef(null),M=Fe.useRef(null),ne=Fe.useRef(null),K=Fe.useRef(null),[j,B]=Fe.useState(!1),[J,Z]=Fe.useState(!1),[W,ie]=Fe.useState(!1),[le,Me]=Fe.useState(!1),[me,Ue]=Fe.useState(!1),[De,pe]=Fe.useState(90),[xe,z]=Fe.useState(90),[Ae,Re]=Fe.useState(120),[Ce,we]=Fe.useState(80),[Be,fe]=Fe.useState(60),[y,S]=Fe.useState(60);return Fe.useEffect(()=>{const D=q=>{Y.current&&!Y.current.contains(q.target)&&B(!1),M.current&&!M.current.contains(q.target)&&Z(!1),ne.current&&!ne.current.contains(q.target)&&ie(!1),K.current&&!K.current.contains(q.target)&&Me(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[]),Fe.useEffect(()=>{e?(pe(e.width),z(e.height)):(B(!1),Z(!1),Ue(!1)),t?(Re(t.width),we(t.height)):ie(!1),s?(fe(s.width),S(s.height)):Me(!1)},[e,t,s]),m.jsx("div",{className:"bg-white border-b border-gray-200 shadow-sm min-h-[72px]",children:m.jsxs("div",{className:"px-4 py-3 flex items-center justify-between min-h-[72px]",children:[m.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[m.jsxs("button",{onClick:o,className:`px-3 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium ${i?"bg-blue-500 text-white shadow-md hover:bg-blue-600":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,title:i?"Hide Grid":"Show Grid",children:[i?m.jsx(Rl,{className:"w-4 h-4"}):m.jsx(Al,{className:"w-4 h-4"}),m.jsx("span",{children:"Grid"})]}),e&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"w-px h-8 bg-gray-300"}),m.jsxs("div",{ref:Y,className:"relative",children:[m.jsxs("button",{onClick:()=>{B(!j),Z(!1)},className:"px-3 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",children:[m.jsx(Ns,{className:"w-4 h-4"}),m.jsx("span",{children:"Manage Chairs"}),m.jsx("span",{className:"ml-1 px-1.5 py-0.5 bg-white/20 rounded text-xs",children:r.length})]}),j&&m.jsxs("div",{className:"absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden",children:[m.jsx("div",{className:"bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-white",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Ns,{className:"w-4 h-4"}),m.jsx("span",{className:"font-semibold text-sm",children:"Chair Positions"})]}),m.jsxs("span",{className:"text-xs bg-white/20 px-2 py-1 rounded",children:["Total: ",r.length]})]})}),m.jsxs("div",{className:"p-3 space-y-2",children:[ec.map(D=>{const q=r.filter(oe=>oe.position===D).length,ce=r.find(oe=>oe.position===D),re=(ce==null?void 0:ce.size)||40;return m.jsxs("div",{className:"bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:border-amber-300 transition-all space-y-2",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-md flex items-center justify-center text-white text-xs font-bold uppercase",children:D[0]}),m.jsxs("div",{children:[m.jsx("div",{className:"text-sm font-medium text-gray-800 capitalize",children:D}),m.jsxs("div",{className:"text-xs text-gray-500",children:[q," chair",q!==1?"s":""]})]})]}),m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx("button",{onClick:()=>l(D),disabled:q===0,className:"w-7 h-7 rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center",title:"Remove chair",children:m.jsx(Wr,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>a(D),className:"w-7 h-7 rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-all flex items-center justify-center",title:"Add chair",children:m.jsx(Us,{className:"w-4 h-4"})})]})]}),q>0&&m.jsxs("div",{className:"pt-2 border-t border-gray-200",children:[m.jsxs("div",{className:"flex items-center justify-between mb-1",children:[m.jsx("span",{className:"text-xs font-medium text-gray-600",children:"Chair Size"}),m.jsxs("span",{className:"text-xs font-bold text-amber-600",children:[re,"px"]})]}),m.jsx("input",{type:"range",min:"20",max:"60",value:re,onChange:oe=>U==null?void 0:U(D,parseInt(oe.target.value)),className:"w-full h-2 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full appearance-none cursor-pointer slider-thumb",style:{background:`linear-gradient(to right, rgb(251, 191, 36) 0%, rgb(251, 191, 36) ${(re-20)/40*100}%, rgb(253, 230, 138) ${(re-20)/40*100}%, rgb(253, 230, 138) 100%)`}})]})]},D)}),m.jsxs("button",{onClick:()=>P==null?void 0:P(),className:"w-full mt-3 px-3 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2 text-sm font-medium",children:[m.jsx(Is,{className:"w-4 h-4"}),m.jsx("span",{children:"Reset All Sizes"})]})]})]})]}),m.jsxs("div",{ref:M,className:"relative",children:[m.jsxs("button",{onClick:()=>{Z(!J),B(!1)},className:"px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",children:[m.jsx(Si,{className:"w-4 h-4"}),m.jsxs("span",{children:["Size: ",Qr[e.size]]})]}),J&&m.jsxs("div",{className:"absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden",children:[m.jsx("div",{className:"bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-white",children:m.jsx("span",{className:"font-semibold text-sm",children:"Table Size"})}),m.jsxs("div",{className:"p-3 space-y-2",children:[m.jsx("div",{className:"flex gap-2",children:tc.map(D=>{const q=e.size===D;return m.jsx("button",{onClick:()=>{c(D),Ue(!1)},className:`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${q&&!me?"bg-emerald-500 text-white shadow-sm":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:Qr[D]},D)})}),m.jsxs("button",{onClick:()=>Ue(!me),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${me?"bg-purple-500 text-white shadow-sm":"bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 hover:from-purple-200 hover:to-purple-100"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"text-sm font-semibold",children:"Pro Mode"}),m.jsx("span",{className:"text-xs bg-white/20 px-1.5 py-0.5 rounded",children:"Custom"})]}),m.jsx(El,{className:`w-4 h-4 transition-transform ${me?"rotate-90":""}`})]}),m.jsx("div",{className:`overflow-hidden transition-all duration-300 ease-in-out ${me?"max-h-48 opacity-100":"max-h-0 opacity-0"}`,children:m.jsxs("div",{className:"pt-2 space-y-3 border-t border-gray-200",children:[m.jsxs("div",{className:"space-y-1",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("label",{className:"text-xs font-semibold text-gray-600 uppercase tracking-wide",children:"Width"}),m.jsxs("span",{className:"text-xs font-mono bg-purple-100 text-purple-700 px-2 py-0.5 rounded",children:[De,"px"]})]}),m.jsx("input",{type:"range",min:"40",max:"200",step:"5",value:De,onChange:D=>{const q=parseInt(D.target.value);pe(q),u(q,xe)},className:"w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb",style:{background:`linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(De-40)/160*100}%, rgb(233, 213, 255) ${(De-40)/160*100}%, rgb(233, 213, 255) 100%)`}})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("label",{className:"text-xs font-semibold text-gray-600 uppercase tracking-wide",children:"Height"}),m.jsxs("span",{className:"text-xs font-mono bg-purple-100 text-purple-700 px-2 py-0.5 rounded",children:[xe,"px"]})]}),m.jsx("input",{type:"range",min:"40",max:"200",step:"5",value:xe,onChange:D=>{const q=parseInt(D.target.value);z(q),u(De,q)},className:"w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb",style:{background:`linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${(xe-40)/160*100}%, rgb(233, 213, 255) ${(xe-40)/160*100}%, rgb(233, 213, 255) 100%)`}})]}),m.jsx("p",{className:"text-xs text-gray-500 italic pt-1",children:"Drag sliders for precise sizing"})]})})]})]})]}),m.jsxs("div",{className:"flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2",children:[m.jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-gray-500",children:"Name:"}),m.jsx("input",{type:"text",value:e.name,onChange:D=>d(D.target.value),className:"bg-transparent text-sm text-gray-800 font-medium focus:outline-none w-32",placeholder:"Table name"})]})]}),t&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"w-px h-8 bg-gray-300"}),m.jsxs("div",{ref:ne,className:"relative",children:[m.jsxs("button",{onClick:()=>ie(!W),className:`px-3 py-2 rounded-lg ${t.type==="bar"?"bg-gradient-to-r from-purple-500 to-purple-600":t.type==="kitchen"?"bg-gradient-to-r from-orange-500 to-orange-600":"bg-gradient-to-r from-cyan-500 to-cyan-600"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,children:[(()=>{const D=Fs[t.type];return m.jsx(D,{className:"w-4 h-4"})})(),m.jsxs("span",{children:["Resize ",ki[t.type]]})]}),W&&m.jsxs("div",{className:"absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden",children:[m.jsx("div",{className:`${t.type==="bar"?"bg-gradient-to-r from-purple-500 to-purple-600":t.type==="kitchen"?"bg-gradient-to-r from-orange-500 to-orange-600":"bg-gradient-to-r from-cyan-500 to-cyan-600"} px-4 py-2 text-white`,children:m.jsx("span",{className:"font-semibold text-sm",children:"Custom Size"})}),m.jsxs("div",{className:"p-3 space-y-3",children:[m.jsxs("div",{className:"space-y-1",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("label",{className:"text-xs font-semibold text-gray-600 uppercase tracking-wide",children:"Width"}),m.jsxs("span",{className:`text-xs font-mono px-2 py-0.5 rounded ${t.type==="bar"?"bg-purple-100 text-purple-700":t.type==="kitchen"?"bg-orange-100 text-orange-700":"bg-cyan-100 text-cyan-700"}`,children:[Ae,"px"]})]}),m.jsx("input",{type:"range",min:"60",max:"1000",step:"10",value:Ae,onChange:D=>{const q=parseInt(D.target.value);Re(q),g(q,Ce)},className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb",style:{background:`linear-gradient(to right, ${t.type==="bar"?"rgb(168, 85, 247)":t.type==="kitchen"?"rgb(249, 115, 22)":"rgb(6, 182, 212)"} 0%, ${t.type==="bar"?"rgb(168, 85, 247)":t.type==="kitchen"?"rgb(249, 115, 22)":"rgb(6, 182, 212)"} ${(Ae-60)/940*100}%, rgb(229, 231, 235) ${(Ae-60)/940*100}%, rgb(229, 231, 235) 100%)`}})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("label",{className:"text-xs font-semibold text-gray-600 uppercase tracking-wide",children:"Height"}),m.jsxs("span",{className:`text-xs font-mono px-2 py-0.5 rounded ${t.type==="bar"?"bg-purple-100 text-purple-700":t.type==="kitchen"?"bg-orange-100 text-orange-700":"bg-cyan-100 text-cyan-700"}`,children:[Ce,"px"]})]}),m.jsx("input",{type:"range",min:"60",max:"1000",step:"10",value:Ce,onChange:D=>{const q=parseInt(D.target.value);we(q),g(Ae,q)},className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb",style:{background:`linear-gradient(to right, ${t.type==="bar"?"rgb(168, 85, 247)":t.type==="kitchen"?"rgb(249, 115, 22)":"rgb(6, 182, 212)"} 0%, ${t.type==="bar"?"rgb(168, 85, 247)":t.type==="kitchen"?"rgb(249, 115, 22)":"rgb(6, 182, 212)"} ${(Ce-60)/940*100}%, rgb(229, 231, 235) ${(Ce-60)/940*100}%, rgb(229, 231, 235) 100%)`}})]}),m.jsx("p",{className:"text-xs text-gray-500 italic pt-1",children:"Drag sliders to resize the object"})]})]})]}),m.jsxs("button",{onClick:()=>{const D=((t.rotation||0)+90)%360;ee==null||ee(D)},className:`px-3 py-2 rounded-lg ${t.type==="bar"?"bg-gradient-to-r from-purple-600 to-purple-700":t.type==="kitchen"?"bg-gradient-to-r from-orange-600 to-orange-700":"bg-gradient-to-r from-cyan-600 to-cyan-700"} text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold`,title:"Rotate 90°",children:[m.jsx(Is,{className:"w-4 h-4"}),m.jsx("span",{children:"Rotate"})]}),m.jsxs("button",{onClick:_,className:"px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",title:"Delete Object",children:[m.jsx(zi,{className:"w-4 h-4"}),m.jsx("span",{children:"Delete"})]}),m.jsxs("div",{className:"flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2",children:[m.jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-gray-500",children:"Name:"}),m.jsx("input",{type:"text",value:t.name,onChange:D=>f(D.target.value),className:"bg-transparent text-sm text-gray-800 font-medium focus:outline-none w-32",placeholder:"Object name"})]})]}),n&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"w-px h-8 bg-gray-300"}),T&&m.jsxs("div",{className:"flex items-center gap-1 bg-gray-50 border border-gray-300 rounded-lg p-1",children:[m.jsx("button",{onClick:()=>T("wall"),className:`px-3 py-1.5 rounded text-xs font-semibold transition-all ${n.type==="wall"?"bg-gray-600 text-white shadow-md":"text-gray-600 hover:bg-gray-200"}`,title:"Convert to Wall",children:"Wall"}),m.jsx("button",{onClick:()=>T("door"),className:`px-3 py-1.5 rounded text-xs font-semibold transition-all ${n.type==="door"?"bg-amber-600 text-white shadow-md":"text-gray-600 hover:bg-gray-200"}`,title:"Convert to Door",children:"Door"}),m.jsx("button",{onClick:()=>T("window"),className:`px-3 py-1.5 rounded text-xs font-semibold transition-all ${n.type==="window"?"bg-blue-600 text-white shadow-md":"text-gray-600 hover:bg-gray-200"}`,title:"Convert to Window",children:"Window"})]}),h&&m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"text-xs font-semibold text-gray-600",children:"Thickness:"}),m.jsxs("select",{value:n.thickness,onChange:D=>h(Number(D.target.value)),className:"px-2 py-1 text-sm border border-gray-300 rounded bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",children:[m.jsx("option",{value:4,children:"Thin (4px)"}),m.jsx("option",{value:8,children:"Normal (8px)"}),m.jsx("option",{value:12,children:"Thick (12px)"}),m.jsx("option",{value:16,children:"Very Thick (16px)"})]})]}),m.jsxs("div",{className:"flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2",children:[m.jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-gray-500",children:Gi[n.type]}),m.jsxs("span",{className:"text-sm text-gray-600",children:[Math.round(Math.sqrt(Math.pow(n.endX-n.startX,2)+Math.pow(n.endY-n.startY,2))),"px"]})]}),m.jsxs("button",{onClick:v,className:"px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",title:"Delete Wall",children:[m.jsx(zi,{className:"w-4 h-4"}),m.jsx("span",{children:"Delete"})]})]}),s&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"w-px h-8 bg-gray-300"}),m.jsx("div",{className:"flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2",children:m.jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-gray-500",children:$r[s.type]})}),R&&m.jsxs("div",{ref:K,className:"relative",children:[m.jsxs("button",{onClick:()=>Me(!le),className:"px-3 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",children:[m.jsx(Si,{className:"w-4 h-4"}),m.jsx("span",{children:"Resize"})]}),le&&m.jsx("div",{className:"absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50 min-w-[320px]",children:m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex justify-between items-center mb-2",children:[m.jsx("label",{className:"text-sm font-semibold text-gray-700",children:"Width"}),m.jsxs("span",{className:"text-sm font-bold text-blue-600",children:[Be,"px"]})]}),m.jsx("input",{type:"range",min:"30",max:"200",value:Be,onChange:D=>{const q=parseInt(D.target.value);fe(q),R(q,y)},className:"w-full h-2 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg appearance-none cursor-pointer slider"}),m.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[m.jsx("span",{children:"30px"}),m.jsx("span",{children:"200px"})]})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex justify-between items-center mb-2",children:[m.jsx("label",{className:"text-sm font-semibold text-gray-700",children:"Height"}),m.jsxs("span",{className:"text-sm font-bold text-blue-600",children:[y,"px"]})]}),m.jsx("input",{type:"range",min:"30",max:"200",value:y,onChange:D=>{const q=parseInt(D.target.value);S(q),R(Be,q)},className:"w-full h-2 bg-gradient-to-r from-green-200 to-green-500 rounded-lg appearance-none cursor-pointer slider"}),m.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[m.jsx("span",{children:"30px"}),m.jsx("span",{children:"200px"})]})]}),m.jsx("div",{className:"pt-3 border-t border-gray-200",children:m.jsxs("div",{className:"text-center",children:[m.jsx("span",{className:"text-xs text-gray-600",children:"Current Size: "}),m.jsxs("span",{className:"text-sm font-bold text-gray-800",children:[Be," × ",y,"px"]})]})})]})})]}),m.jsxs("button",{onClick:p,className:"px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-semibold",title:"Delete Element",children:[m.jsx(zi,{className:"w-4 h-4"}),m.jsx("span",{children:"Delete"})]})]})]}),m.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[m.jsxs("button",{onClick:C,className:"px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-semibold text-sm",children:[m.jsx(Sl,{className:"w-4 h-4"}),"3D"]}),m.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded text-xs",children:[m.jsx("div",{className:"w-2 h-2 bg-emerald-600 rounded-full"}),m.jsxs("span",{className:"font-medium text-emerald-800",children:["Tables: ",E]})]}),m.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1 bg-amber-50 rounded text-xs",children:[m.jsx("div",{className:"w-2 h-2 bg-amber-600 rounded-full"}),m.jsxs("span",{className:"font-medium text-amber-800",children:["Chairs: ",A]})]}),m.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1 bg-purple-50 rounded text-xs",children:[m.jsx("div",{className:"w-2 h-2 bg-purple-600 rounded-full"}),m.jsxs("span",{className:"font-medium text-purple-800",children:["Objects: ",O]})]}),N&&m.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1 bg-blue-50 rounded text-xs",children:[m.jsx("div",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"}),m.jsxs("span",{className:"font-medium text-blue-800 capitalize",children:["Selected: ",N]})]})]})]})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Os="160",ic=0,ea=1,sc=2,ta=1,na=2,ln=3,Mn=0,Bt=1,cn=2,Sn=0,Yn=1,ia=2,sa=3,ra=4,rc=5,Nn=100,ac=101,oc=102,aa=103,oa=104,lc=200,cc=201,dc=202,hc=203,Bs=204,zs=205,uc=206,fc=207,pc=208,mc=209,gc=210,xc=211,_c=212,vc=213,yc=214,Mc=0,Sc=1,bc=2,Vi=3,Ec=4,wc=5,Tc=6,Ac=7,la=0,Rc=1,Cc=2,bn=0,Pc=1,Lc=2,Nc=3,ca=4,Dc=5,Uc=6,da=300,qn=301,$n=302,ks=303,Gs=304,Wi=306,Hs=1e3,Qt=1001,Vs=1002,Ut=1003,ha=1004,Ws=1005,Yt=1006,Ic=1007,bi=1008,En=1009,Fc=1010,Oc=1011,js=1012,ua=1013,wn=1014,Tn=1015,Ei=1016,fa=1017,pa=1018,Dn=1020,Bc=1021,en=1023,zc=1024,kc=1025,Un=1026,Kn=1027,Gc=1028,ma=1029,Hc=1030,ga=1031,xa=1033,Xs=33776,Ys=33777,qs=33778,$s=33779,_a=35840,va=35841,ya=35842,Ma=35843,Sa=36196,ba=37492,Ea=37496,wa=37808,Ta=37809,Aa=37810,Ra=37811,Ca=37812,Pa=37813,La=37814,Na=37815,Da=37816,Ua=37817,Ia=37818,Fa=37819,Oa=37820,Ba=37821,Ks=36492,za=36494,ka=36495,Vc=36283,Ga=36284,Ha=36285,Va=36286,Wa=3e3,In=3001,Wc=3200,jc=3201,ja=0,Xc=1,qt="",Ct="srgb",dn="srgb-linear",Zs="display-p3",ji="display-p3-linear",Xi="linear",mt="srgb",Yi="rec709",qi="p3",Zn=7680,Xa=519,Yc=512,qc=513,$c=514,Ya=515,Kc=516,Zc=517,Jc=518,Qc=519,qa=35044,$a="300 es",Js=1035,hn=2e3,$i=2001;class Jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ki=Math.PI/180,Qs=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function ed(i,e){return(i%e+e)%e}function er(i,e,t){return(1-t)*i+t*e}function Ka(i){return(i&i-1)===0&&i!==0}function tr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,s,r,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],g=n[5],_=n[8],v=s[0],p=s[3],h=s[6],T=s[1],x=s[4],R=s[7],U=s[2],P=s[5],C=s[8];return r[0]=o*v+a*T+l*U,r[3]=o*p+a*x+l*P,r[6]=o*h+a*R+l*C,r[1]=c*v+d*T+u*U,r[4]=c*p+d*x+u*P,r[7]=c*h+d*R+u*C,r[2]=f*v+g*T+_*U,r[5]=f*p+g*x+_*P,r[8]=f*h+g*R+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*r,g=c*r-o*l,_=t*u+n*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(s*c-d*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=g*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nr.makeScale(e,t)),this}rotate(e){return this.premultiply(nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new nt;function Za(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){const i=Zi("canvas");return i.style.display="block",i}const Ja={};function Ai(i){i in Ja||(Ja[i]=!0,console.warn(i))}const Qa=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eo=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ji={[dn]:{transfer:Xi,primaries:Yi,toReference:i=>i,fromReference:i=>i},[Ct]:{transfer:mt,primaries:Yi,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ji]:{transfer:Xi,primaries:qi,toReference:i=>i.applyMatrix3(eo),fromReference:i=>i.applyMatrix3(Qa)},[Zs]:{transfer:mt,primaries:qi,toReference:i=>i.convertSRGBToLinear().applyMatrix3(eo),fromReference:i=>i.applyMatrix3(Qa).convertLinearToSRGB()}},nd=new Set([dn,ji]),ft={enabled:!0,_workingColorSpace:dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ji[e].toReference,s=Ji[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ji[i].primaries},getTransfer:function(i){return i===qt?Xi:Ji[i].transfer}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class to{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=Zi("canvas")),ei.width=e.width,ei.height=e.height;const n=ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let id=0;class no{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sr(s[o].image)):r.push(sr(s[o]))}else r=sr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?to.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sd=0;class kt extends Jn{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Qt,s=Qt,r=Yt,o=bi,a=en,l=En,c=kt.DEFAULT_ANISOTROPY,d=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=wi(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===In?Ct:qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==da)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ct?In:Wa}set encoding(e){Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===In?Ct:qt}}kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=da,kt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],g=l[5],_=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,R=(g+1)/2,U=(h+1)/2,P=(d+f)/4,C=(u+v)/4,ee=(_+p)/4;return x>R&&x>U?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=P/n,r=C/n):R>U?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=P/s,r=ee/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=C/r,s=ee/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(u-v)/T,this.z=(f-d)/T,this.w=Math.acos((c+g+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rd extends Jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ai("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===In?Ct:qt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new no(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends rd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class io extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ad extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const f=r[o+0],g=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==f||c!==g||d!==_){let p=1-a;const h=l*f+c*g+d*_+u*v,T=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const U=Math.sqrt(x),P=Math.atan2(U,h*T);p=Math.sin(p*P)/U,a=Math.sin(a*P)/U}const R=a*T;if(l=l*p+f*R,c=c*p+g*R,d=d*p+_*R,u=u*p+v*R,p===1-a){const U=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=U,c*=U,d*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return e[t]=a*_+d*u+l*g-c*f,e[t+1]=l*_+d*f+c*u-a*g,e[t+2]=c*_+d*g+a*f-l*u,e[t+3]=d*_-a*u-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),u=a(r/2),f=l(n/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*g*_,this._y=c*g*u-f*d*_,this._z=c*d*_+f*g*u,this._w=c*d*u-f*g*_;break;case"YXZ":this._x=f*d*u+c*g*_,this._y=c*g*u-f*d*_,this._z=c*d*_-f*g*u,this._w=c*d*u+f*g*_;break;case"ZXY":this._x=f*d*u-c*g*_,this._y=c*g*u+f*d*_,this._z=c*d*_+f*g*u,this._w=c*d*u-f*g*_;break;case"ZYX":this._x=f*d*u-c*g*_,this._y=c*g*u+f*d*_,this._z=c*d*_-f*g*u,this._w=c*d*u+f*g*_;break;case"YZX":this._x=f*d*u+c*g*_,this._y=c*g*u+f*d*_,this._z=c*d*_-f*g*u,this._w=c*d*u-f*g*_;break;case"XZY":this._x=f*d*u-c*g*_,this._y=c*g*u-f*d*_,this._z=c*d*_+f*g*u,this._w=c*d*u+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+a+u;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>u){const g=2*Math.sqrt(1+n-a-u);this._w=(d-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>u){const g=2*Math.sqrt(1+a-n-u);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+u-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(so.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(so.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new G,so=new Ri;class Ci{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),es.subVectors(this.max,Pi),ti.subVectors(e.a,Pi),ni.subVectors(e.b,Pi),ii.subVectors(e.c,Pi),An.subVectors(ni,ti),Rn.subVectors(ii,ni),On.subVectors(ti,ii);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-On.z,On.y,An.z,0,-An.x,Rn.z,0,-Rn.x,On.z,0,-On.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-On.y,On.x,0];return!ar(t,ti,ni,ii,es)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,ti,ni,ii,es))?!1:(ts.crossVectors(An,Rn),t=[ts.x,ts.y,ts.z],ar(t,ti,ni,ii,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new G,new G,new G,new G,new G,new G,new G,new G],tn=new G,Qi=new Ci,ti=new G,ni=new G,ii=new G,An=new G,Rn=new G,On=new G,Pi=new G,es=new G,ts=new G,Bn=new G;function ar(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bn.fromArray(i,r);const a=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),d=n.dot(Bn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const od=new Ci,Li=new G,or=new G;class ns{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):od.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(or)),this.expandByPoint(Li.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new G,lr=new G,is=new G,Cn=new G,cr=new G,ss=new G,dr=new G;class ro{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lr.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(lr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(is),a=Cn.dot(this.direction),l=-Cn.dot(is),c=Cn.lengthSq(),d=Math.abs(1-o*o);let u,f,g,_;if(d>0)if(u=o*l-a,f=o*a-l,_=r*d,u>=0)if(f>=-_)if(f<=_){const v=1/d;u*=v,f*=v,g=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lr).addScaledVector(is,f),g}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,r){cr.subVectors(t,e),ss.subVectors(n,e),dr.crossVectors(cr,ss);let o=this.direction.dot(dr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const l=a*this.direction.dot(ss.crossVectors(Cn,ss));if(l<0)return null;const c=a*this.direction.dot(cr.cross(Cn));if(c<0||l+c>o)return null;const d=-a*Cn.dot(dr);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,s,r,o,a,l,c,d,u,f,g,_,v,p){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,u,f,g,_,v,p)}set(e,t,n,s,r,o,a,l,c,d,u,f,g,_,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=g,h[7]=_,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/si.setFromMatrixColumn(e,0).length(),r=1/si.setFromMatrixColumn(e,1).length(),o=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*d,g=o*u,_=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=g+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+g*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,g=l*u,_=c*d,v=c*u;t[0]=f+v*a,t[4]=_*a-g,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=g*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,g=l*u,_=c*d,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*d,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,g=o*u,_=a*d,v=a*u;t[0]=l*d,t[4]=_*c-g,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=g*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,_=a*l,v=a*c;t[0]=l*d,t[4]=v-f*u,t[8]=_*u+g,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=g*u+_,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,g=o*c,_=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+v,t[5]=o*d,t[9]=g*u-_,t[2]=_*u-g,t[6]=a*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ld,e,cd)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Pn.crossVectors(n,Gt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Pn.crossVectors(n,Gt)),Pn.normalize(),rs.crossVectors(Gt,Pn),s[0]=Pn.x,s[4]=rs.x,s[8]=Gt.x,s[1]=Pn.y,s[5]=rs.y,s[9]=Gt.y,s[2]=Pn.z,s[6]=rs.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],g=n[13],_=n[2],v=n[6],p=n[10],h=n[14],T=n[3],x=n[7],R=n[11],U=n[15],P=s[0],C=s[4],ee=s[8],E=s[12],A=s[1],O=s[5],te=s[9],ae=s[13],N=s[2],Y=s[6],M=s[10],ne=s[14],K=s[3],j=s[7],B=s[11],J=s[15];return r[0]=o*P+a*A+l*N+c*K,r[4]=o*C+a*O+l*Y+c*j,r[8]=o*ee+a*te+l*M+c*B,r[12]=o*E+a*ae+l*ne+c*J,r[1]=d*P+u*A+f*N+g*K,r[5]=d*C+u*O+f*Y+g*j,r[9]=d*ee+u*te+f*M+g*B,r[13]=d*E+u*ae+f*ne+g*J,r[2]=_*P+v*A+p*N+h*K,r[6]=_*C+v*O+p*Y+h*j,r[10]=_*ee+v*te+p*M+h*B,r[14]=_*E+v*ae+p*ne+h*J,r[3]=T*P+x*A+R*N+U*K,r[7]=T*C+x*O+R*Y+U*j,r[11]=T*ee+x*te+R*M+U*B,r[15]=T*E+x*ae+R*ne+U*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],g=e[14],_=e[3],v=e[7],p=e[11],h=e[15];return _*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*g-n*l*g)+v*(+t*l*g-t*c*f+r*o*f-s*o*g+s*c*d-r*l*d)+p*(+t*c*u-t*a*g-r*o*u+n*o*g+r*a*d-n*c*d)+h*(-s*a*d-t*l*u+t*a*f+s*o*u-n*o*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],g=e[11],_=e[12],v=e[13],p=e[14],h=e[15],T=u*p*c-v*f*c+v*l*g-a*p*g-u*l*h+a*f*h,x=_*f*c-d*p*c-_*l*g+o*p*g+d*l*h-o*f*h,R=d*v*c-_*u*c+_*a*g-o*v*g-d*a*h+o*u*h,U=_*u*l-d*v*l-_*a*f+o*v*f+d*a*p-o*u*p,P=t*T+n*x+s*R+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=T*C,e[1]=(v*f*r-u*p*r-v*s*g+n*p*g+u*s*h-n*f*h)*C,e[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*h+n*l*h)*C,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*g-n*l*g)*C,e[4]=x*C,e[5]=(d*p*r-_*f*r+_*s*g-t*p*g-d*s*h+t*f*h)*C,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*h-t*l*h)*C,e[7]=(o*f*r-d*l*r+d*s*c-t*f*c-o*s*g+t*l*g)*C,e[8]=R*C,e[9]=(_*u*r-d*v*r-_*n*g+t*v*g+d*n*h-t*u*h)*C,e[10]=(o*v*r-_*a*r+_*n*c-t*v*c-o*n*h+t*a*h)*C,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*g-t*a*g)*C,e[12]=U*C,e[13]=(d*v*s-_*u*s+_*n*f-t*v*f-d*n*p+t*u*p)*C,e[14]=(_*a*s-o*v*s-_*n*l+t*v*l+o*n*p-t*a*p)*C,e[15]=(o*u*s-d*a*s+d*n*l-t*u*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,f=r*c,g=r*d,_=r*u,v=o*d,p=o*u,h=a*u,T=l*c,x=l*d,R=l*u,U=n.x,P=n.y,C=n.z;return s[0]=(1-(v+h))*U,s[1]=(g+R)*U,s[2]=(_-x)*U,s[3]=0,s[4]=(g-R)*P,s[5]=(1-(f+h))*P,s[6]=(p+T)*P,s[7]=0,s[8]=(_+x)*C,s[9]=(p-T)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=si.set(s[0],s[1],s[2]).length();const o=si.set(s[4],s[5],s[6]).length(),a=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],nn.copy(this);const c=1/r,d=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=d,nn.elements[5]*=d,nn.elements[6]*=d,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(a===hn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$i)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hn){const l=this.elements,c=1/(t-e),d=1/(n-s),u=1/(o-r),f=(t+e)*c,g=(n+s)*d;let _,v;if(a===hn)_=(o+r)*u,v=-2*u;else if(a===$i)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new G,nn=new yt,ld=new G(0,0,0),cd=new G(1,1,1),Pn=new G,rs=new G,Gt=new G,ao=new yt,oo=new Ri;class as{constructor(e=0,t=0,n=0,s=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oo.setFromEuler(this),this.setFromQuaternion(oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class lo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dd=0;const co=new G,ri=new Ri,pn=new yt,os=new G,Ni=new G,hd=new G,ud=new Ri,ho=new G(1,0,0),uo=new G(0,1,0),fo=new G(0,0,1),fd={type:"added"},pd={type:"removed"};class Pt extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new G,t=new as,n=new Ri,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new nt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(ho,e)}rotateY(e){return this.rotateOnAxis(uo,e)}rotateZ(e){return this.rotateOnAxis(fo,e)}translateOnAxis(e,t){return co.copy(e).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ho,e)}translateY(e){return this.translateOnAxis(uo,e)}translateZ(e){return this.translateOnAxis(fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ni,os,this.up):pn.lookAt(os,Ni,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(pn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new G(0,1,0),Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new G,mn=new G,hr=new G,gn=new G,ai=new G,oi=new G,po=new G,ur=new G,fr=new G,pr=new G;let ls=!1;class $t{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),mn.subVectors(n,t),hr.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(mn),l=sn.dot(hr),c=mn.dot(mn),d=mn.dot(hr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,g=(c*l-a*d)*f,_=(o*d-a*l)*f;return r.set(1-g-_,_,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,s,r,o,a,l){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),mn.subVectors(e,t),sn.cross(mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),sn.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ai.subVectors(s,n),oi.subVectors(r,n),ur.subVectors(e,n);const l=ai.dot(ur),c=oi.dot(ur);if(l<=0&&c<=0)return t.copy(n);fr.subVectors(e,s);const d=ai.dot(fr),u=oi.dot(fr);if(d>=0&&u<=d)return t.copy(s);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(ai,o);pr.subVectors(e,r);const g=ai.dot(pr),_=oi.dot(pr);if(_>=0&&g<=_)return t.copy(r);const v=g*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(oi,a);const p=d*_-g*u;if(p<=0&&u-d>=0&&g-_>=0)return po.subVectors(r,s),a=(u-d)/(u-d+(g-_)),t.copy(s).addScaledVector(po,a);const h=1/(p+v+f);return o=v*h,a=f*h,t.copy(n).addScaledVector(ai,o).addScaledVector(oi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},cs={h:0,s:0,l:0};function mr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=ed(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mr(o,r,e+1/3),this.g=mr(o,r,e),this.b=mr(o,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=mo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return ft.fromWorkingColorSpace(Nt.copy(this),e),Math.round(It(Nt.r*255,0,255))*65536+Math.round(It(Nt.g*255,0,255))*256+Math.round(It(Nt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Ct){ft.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,s=Nt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(cs);const n=er(Ln.h,cs.h,t),s=er(Ln.s,cs.s,t),r=er(Ln.l,cs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new et;et.NAMES=mo;let md=0;class li extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Yn,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=zs,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bs&&(n.blendSrc=this.blendSrc),this.blendDst!==zs&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class go extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new G,ds=new at;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class xo extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _o extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gd=0;const Kt=new yt,gr=new Pt,ci=new G,Ht=new Ci,Di=new Ci,At=new G;class Vt extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Za(e)?_o:xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return gr.lookAt(e),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Ht.min,Di.min),Ht.expandByPoint(At),At.addVectors(Ht.max,Di.max),Ht.expandByPoint(At)):(Ht.expandByPoint(Di.min),Ht.expandByPoint(Di.max))}Ht.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)At.fromBufferAttribute(a,c),l&&(ci.fromBufferAttribute(e,c),At.add(ci)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let A=0;A<a;A++)c[A]=new G,d[A]=new G;const u=new G,f=new G,g=new G,_=new at,v=new at,p=new at,h=new G,T=new G;function x(A,O,te){u.fromArray(s,A*3),f.fromArray(s,O*3),g.fromArray(s,te*3),_.fromArray(o,A*2),v.fromArray(o,O*2),p.fromArray(o,te*2),f.sub(u),g.sub(u),v.sub(_),p.sub(_);const ae=1/(v.x*p.y-p.x*v.y);isFinite(ae)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(g,-v.y).multiplyScalar(ae),T.copy(g).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(ae),c[A].add(h),c[O].add(h),c[te].add(h),d[A].add(T),d[O].add(T),d[te].add(T))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let A=0,O=R.length;A<O;++A){const te=R[A],ae=te.start,N=te.count;for(let Y=ae,M=ae+N;Y<M;Y+=3)x(n[Y+0],n[Y+1],n[Y+2])}const U=new G,P=new G,C=new G,ee=new G;function E(A){C.fromArray(r,A*3),ee.copy(C);const O=c[A];U.copy(O),U.sub(C.multiplyScalar(C.dot(O))).normalize(),P.crossVectors(ee,O);const ae=P.dot(d[A])<0?-1:1;l[A*4]=U.x,l[A*4+1]=U.y,l[A*4+2]=U.z,l[A*4+3]=ae}for(let A=0,O=R.length;A<O;++A){const te=R[A],ae=te.start,N=te.count;for(let Y=ae,M=ae+N;Y<M;Y+=3)E(n[Y+0]),E(n[Y+1]),E(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,d=new G,u=new G;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let g=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*d;for(let h=0;h<d;h++)f[_++]=c[g++]}return new rn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],g=e(f,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const g=c[u];d.push(g.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,g=u.length;f<g;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vo=new yt,zn=new ro,hs=new ns,yo=new G,di=new G,hi=new G,ui=new G,xr=new G,us=new G,fs=new at,ps=new at,ms=new at,Mo=new G,So=new G,bo=new G,gs=new G,xs=new G;class Ee extends Pt{constructor(e=new Vt,t=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(xr.fromBufferAttribute(u,e),o?us.addScaledVector(xr,d):us.addScaledVector(xr.sub(t),d))}t.add(us)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(hs.containsPoint(zn.origin)===!1&&(zn.intersectSphere(hs,yo)===null||zn.origin.distanceToSquared(yo)>(e.far-e.near)**2))&&(vo.copy(r).invert(),zn.copy(e.ray).applyMatrix4(vo),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],h=o[p.materialIndex],T=Math.max(p.start,g.start),x=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let R=T,U=x;R<U;R+=3){const P=a.getX(R),C=a.getX(R+1),ee=a.getX(R+2);s=_s(this,h,e,n,c,d,u,P,C,ee),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let p=_,h=v;p<h;p+=3){const T=a.getX(p),x=a.getX(p+1),R=a.getX(p+2);s=_s(this,o,e,n,c,d,u,T,x,R),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],h=o[p.materialIndex],T=Math.max(p.start,g.start),x=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let R=T,U=x;R<U;R+=3){const P=R,C=R+1,ee=R+2;s=_s(this,h,e,n,c,d,u,P,C,ee),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=_,h=v;p<h;p+=3){const T=p,x=p+1,R=p+2;s=_s(this,o,e,n,c,d,u,T,x,R),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function xd(i,e,t,n,s,r,o,a){let l;if(e.side===Bt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Mn,a),l===null)return null;xs.copy(a),xs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:i}}function _s(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,di),i.getVertexPosition(l,hi),i.getVertexPosition(c,ui);const d=xd(i,e,t,n,di,hi,ui,gs);if(d){s&&(fs.fromBufferAttribute(s,a),ps.fromBufferAttribute(s,l),ms.fromBufferAttribute(s,c),d.uv=$t.getInterpolation(gs,di,hi,ui,fs,ps,ms,new at)),r&&(fs.fromBufferAttribute(r,a),ps.fromBufferAttribute(r,l),ms.fromBufferAttribute(r,c),d.uv1=$t.getInterpolation(gs,di,hi,ui,fs,ps,ms,new at),d.uv2=d.uv1),o&&(Mo.fromBufferAttribute(o,a),So.fromBufferAttribute(o,l),bo.fromBufferAttribute(o,c),d.normal=$t.getInterpolation(gs,di,hi,ui,Mo,So,bo,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new G,materialIndex:0};$t.getNormal(di,hi,ui,u.normal),d.face=u}return d}class Ye extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,g=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(u,2));function _(v,p,h,T,x,R,U,P,C,ee,E){const A=R/C,O=U/ee,te=R/2,ae=U/2,N=P/2,Y=C+1,M=ee+1;let ne=0,K=0;const j=new G;for(let B=0;B<M;B++){const J=B*O-ae;for(let Z=0;Z<Y;Z++){const W=Z*A-te;j[v]=W*T,j[p]=J*x,j[h]=N,c.push(j.x,j.y,j.z),j[v]=0,j[p]=0,j[h]=P>0?1:-1,d.push(j.x,j.y,j.z),u.push(Z/C),u.push(1-B/ee),ne+=1}}for(let B=0;B<ee;B++)for(let J=0;J<C;J++){const Z=f+J+Y*B,W=f+J+Y*(B+1),ie=f+(J+1)+Y*(B+1),le=f+(J+1)+Y*B;l.push(Z,W,le),l.push(W,ie,le),K+=6}a.addGroup(g,K,E),g+=K,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=fi(i[t]);for(const s in n)e[s]=n[s]}return e}function _d(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eo(i){return i.getRenderTarget()===null?i.outputColorSpace:ft.workingColorSpace}const vd={clone:fi,merge:Ft};var yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fi(e.uniforms),this.uniformsGroups=_d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wo extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends wo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class Sd extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(pi,mi,e,t);s.layers=this.layers,this.add(s);const r=new Wt(pi,mi,e,t);r.layers=this.layers,this.add(r);const o=new Wt(pi,mi,e,t);o.layers=this.layers,this.add(o);const a=new Wt(pi,mi,e,t);a.layers=this.layers,this.add(a);const l=new Wt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$i)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,f,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class To extends kt{constructor(e,t,n,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:qn,super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bd extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ai("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===In?Ct:qt),this.texture=new To(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ye(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Sn});r.uniforms.tEquirect.value=t;const o=new Ee(s,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Yt),new Sd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const _r=new G,Ed=new G,wd=new nt;class Gn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_r.subVectors(n,t).cross(Ed.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_r),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wd.getNormalMatrix(e),s=this.coplanarPoint(_r).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ns,vs=new G;class vr{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],v=s[10],p=s[11],h=s[12],T=s[13],x=s[14],R=s[15];if(n[0].setComponents(l-r,f-c,p-g,R-h).normalize(),n[1].setComponents(l+r,f+c,p+g,R+h).normalize(),n[2].setComponents(l+o,f+d,p+_,R+T).normalize(),n[3].setComponents(l-o,f-d,p-_,R-T).normalize(),n[4].setComponents(l-a,f-u,p-v,R-x).normalize(),t===hn)n[5].setComponents(l+a,f+u,p+v,R+x).normalize();else if(t===$i)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(vs.x=s.normal.x>0?e.max.x:e.min.x,vs.y=s.normal.y>0?e.max.y:e.min.y,vs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ao(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Td(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,d){const u=c.array,f=c.usage,g=u.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,u){const f=d.array,g=d._updateRange,_=d.updateRanges;if(i.bindBuffer(u,c),g.count===-1&&_.length===0&&i.bufferSubData(u,0,f),_.length!==0){for(let v=0,p=_.length;v<p;v++){const h=_[v];t?i.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):i.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(u,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):i.bufferSubData(u,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,d),u.version=c.version}}return{get:o,remove:a,update:l}}class Zt extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,u=e/a,f=t/l,g=[],_=[],v=[],p=[];for(let h=0;h<d;h++){const T=h*f-o;for(let x=0;x<c;x++){const R=x*u-r;_.push(R,-T,0),v.push(0,0,1),p.push(x/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<a;T++){const x=T+c*h,R=T+c*(h+1),U=T+1+c*(h+1),P=T+1+c*h;g.push(x,R,P),g.push(R,U,P)}this.setIndex(g),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",sh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ph=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Th=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ah=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$h=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,su=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ru=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ou=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,du=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_u=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tt={alphahash_fragment:Ad,alphahash_pars_fragment:Rd,alphamap_fragment:Cd,alphamap_pars_fragment:Pd,alphatest_fragment:Ld,alphatest_pars_fragment:Nd,aomap_fragment:Dd,aomap_pars_fragment:Ud,batching_pars_vertex:Id,batching_vertex:Fd,begin_vertex:Od,beginnormal_vertex:Bd,bsdfs:zd,iridescence_fragment:kd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:jd,color_fragment:Xd,color_pars_fragment:Yd,color_pars_vertex:qd,color_vertex:$d,common:Kd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:Jd,displacementmap_pars_vertex:Qd,displacementmap_vertex:eh,emissivemap_fragment:th,emissivemap_pars_fragment:nh,colorspace_fragment:ih,colorspace_pars_fragment:sh,envmap_fragment:rh,envmap_common_pars_fragment:ah,envmap_pars_fragment:oh,envmap_pars_vertex:lh,envmap_physical_pars_fragment:yh,envmap_vertex:ch,fog_vertex:dh,fog_pars_vertex:hh,fog_fragment:uh,fog_pars_fragment:fh,gradientmap_pars_fragment:ph,lightmap_fragment:mh,lightmap_pars_fragment:gh,lights_lambert_fragment:xh,lights_lambert_pars_fragment:_h,lights_pars_begin:vh,lights_toon_fragment:Mh,lights_toon_pars_fragment:Sh,lights_phong_fragment:bh,lights_phong_pars_fragment:Eh,lights_physical_fragment:wh,lights_physical_pars_fragment:Th,lights_fragment_begin:Ah,lights_fragment_maps:Rh,lights_fragment_end:Ch,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Lh,logdepthbuf_pars_vertex:Nh,logdepthbuf_vertex:Dh,map_fragment:Uh,map_pars_fragment:Ih,map_particle_fragment:Fh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Bh,metalnessmap_pars_fragment:zh,morphcolor_vertex:kh,morphnormal_vertex:Gh,morphtarget_pars_vertex:Hh,morphtarget_vertex:Vh,normal_fragment_begin:Wh,normal_fragment_maps:jh,normal_pars_fragment:Xh,normal_pars_vertex:Yh,normal_vertex:qh,normalmap_pars_fragment:$h,clearcoat_normal_fragment_begin:Kh,clearcoat_normal_fragment_maps:Zh,clearcoat_pars_fragment:Jh,iridescence_pars_fragment:Qh,opaque_fragment:eu,packing:tu,premultiplied_alpha_fragment:nu,project_vertex:iu,dithering_fragment:su,dithering_pars_fragment:ru,roughnessmap_fragment:au,roughnessmap_pars_fragment:ou,shadowmap_pars_fragment:lu,shadowmap_pars_vertex:cu,shadowmap_vertex:du,shadowmask_pars_fragment:hu,skinbase_vertex:uu,skinning_pars_vertex:fu,skinning_vertex:pu,skinnormal_vertex:mu,specularmap_fragment:gu,specularmap_pars_fragment:xu,tonemapping_fragment:_u,tonemapping_pars_fragment:vu,transmission_fragment:yu,transmission_pars_fragment:Mu,uv_pars_fragment:Su,uv_pars_vertex:bu,uv_vertex:Eu,worldpos_vertex:wu,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Te={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},an={basic:{uniforms:Ft([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Ft([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Ft([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Ft([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Ft([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Ft([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Ft([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Ft([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Ft([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Ft([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Ft([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Ft([Te.common,Te.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Ft([Te.lights,Te.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};an.physical={uniforms:Ft([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ys={r:0,b:0,g:0};function Tu(i,e,t,n,s,r,o){const a=new et(0);let l=r===!0?0:1,c,d,u=null,f=0,g=null;function _(p,h){let T=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Wi)?(d===void 0&&(d=new Ee(new Ye(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:fi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=ft.getTransfer(x.colorSpace)!==mt,(u!==x||f!==x.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,u=x,f=x.version,g=i.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ee(new Zt(2,2),new kn({name:"BackgroundMaterial",uniforms:fi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=ft.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,g=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,h){p.getRGB(ys,Eo(i)),n.buffers.color.setClear(ys.r,ys.g,ys.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:_}}function Au(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,d=!1;function u(N,Y,M,ne,K){let j=!1;if(o){const B=v(ne,M,Y);c!==B&&(c=B,g(c.object)),j=h(N,ne,M,K),j&&T(N,ne,M,K)}else{const B=Y.wireframe===!0;(c.geometry!==ne.id||c.program!==M.id||c.wireframe!==B)&&(c.geometry=ne.id,c.program=M.id,c.wireframe=B,j=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(j||d)&&(d=!1,ee(N,Y,M,ne),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function v(N,Y,M){const ne=M.wireframe===!0;let K=a[N.id];K===void 0&&(K={},a[N.id]=K);let j=K[Y.id];j===void 0&&(j={},K[Y.id]=j);let B=j[ne];return B===void 0&&(B=p(f()),j[ne]=B),B}function p(N){const Y=[],M=[],ne=[];for(let K=0;K<s;K++)Y[K]=0,M[K]=0,ne[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:M,attributeDivisors:ne,object:N,attributes:{},index:null}}function h(N,Y,M,ne){const K=c.attributes,j=Y.attributes;let B=0;const J=M.getAttributes();for(const Z in J)if(J[Z].location>=0){const ie=K[Z];let le=j[Z];if(le===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;B++}return c.attributesNum!==B||c.index!==ne}function T(N,Y,M,ne){const K={},j=Y.attributes;let B=0;const J=M.getAttributes();for(const Z in J)if(J[Z].location>=0){let ie=j[Z];ie===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));const le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),K[Z]=le,B++}c.attributes=K,c.attributesNum=B,c.index=ne}function x(){const N=c.newAttributes;for(let Y=0,M=N.length;Y<M;Y++)N[Y]=0}function R(N){U(N,0)}function U(N,Y){const M=c.newAttributes,ne=c.enabledAttributes,K=c.attributeDivisors;M[N]=1,ne[N]===0&&(i.enableVertexAttribArray(N),ne[N]=1),K[N]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,Y),K[N]=Y)}function P(){const N=c.newAttributes,Y=c.enabledAttributes;for(let M=0,ne=Y.length;M<ne;M++)Y[M]!==N[M]&&(i.disableVertexAttribArray(M),Y[M]=0)}function C(N,Y,M,ne,K,j,B){B===!0?i.vertexAttribIPointer(N,Y,M,K,j):i.vertexAttribPointer(N,Y,M,ne,K,j)}function ee(N,Y,M,ne){if(n.isWebGL2===!1&&(N.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=ne.attributes,j=M.getAttributes(),B=Y.defaultAttributeValues;for(const J in j){const Z=j[J];if(Z.location>=0){let W=K[J];if(W===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),W!==void 0){const ie=W.normalized,le=W.itemSize,Me=t.get(W);if(Me===void 0)continue;const me=Me.buffer,Ue=Me.type,De=Me.bytesPerElement,pe=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||W.gpuType===ua);if(W.isInterleavedBufferAttribute){const xe=W.data,z=xe.stride,Ae=W.offset;if(xe.isInstancedInterleavedBuffer){for(let Re=0;Re<Z.locationSize;Re++)U(Z.location+Re,xe.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Re=0;Re<Z.locationSize;Re++)R(Z.location+Re);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Re=0;Re<Z.locationSize;Re++)C(Z.location+Re,le/Z.locationSize,Ue,ie,z*De,(Ae+le/Z.locationSize*Re)*De,pe)}else{if(W.isInstancedBufferAttribute){for(let xe=0;xe<Z.locationSize;xe++)U(Z.location+xe,W.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let xe=0;xe<Z.locationSize;xe++)R(Z.location+xe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let xe=0;xe<Z.locationSize;xe++)C(Z.location+xe,le/Z.locationSize,Ue,ie,le*De,le/Z.locationSize*xe*De,pe)}}else if(B!==void 0){const ie=B[J];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(Z.location,ie);break;case 3:i.vertexAttrib3fv(Z.location,ie);break;case 4:i.vertexAttrib4fv(Z.location,ie);break;default:i.vertexAttrib1fv(Z.location,ie)}}}}P()}function E(){te();for(const N in a){const Y=a[N];for(const M in Y){const ne=Y[M];for(const K in ne)_(ne[K].object),delete ne[K];delete Y[M]}delete a[N]}}function A(N){if(a[N.id]===void 0)return;const Y=a[N.id];for(const M in Y){const ne=Y[M];for(const K in ne)_(ne[K].object),delete ne[K];delete Y[M]}delete a[N.id]}function O(N){for(const Y in a){const M=a[Y];if(M[N.id]===void 0)continue;const ne=M[N.id];for(const K in ne)_(ne[K].object),delete ne[K];delete M[N.id]}}function te(){ae(),d=!0,c!==l&&(c=l,g(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:te,resetDefaultState:ae,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:R,disableUnusedAttributes:P}}function Ru(i,e,t,n){const s=n.isWebGL2;let r;function o(d){r=d}function a(d,u){i.drawArrays(r,d,u),t.update(u,r,1)}function l(d,u,f){if(f===0)return;let g,_;if(s)g=i,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](r,d,u,f),t.update(u,r,f)}function c(d,u,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f;_++)this.render(d[_],u[_]);else{g.multiDrawArraysWEBGL(r,d,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Cu(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,R=o||e.has("OES_texture_float"),U=x&&R,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:T,vertexTextures:x,floatFragmentTextures:R,floatVertexTextures:U,maxSamples:P}}function Pu(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Gn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const g=u.length!==0||f||n!==0||s;return s=f,n=u.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,g){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,h=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?d(null):c();else{const T=r?0:n,x=T*4;let R=h.clippingState||null;l.value=R,R=d(_,f,x,g);for(let U=0;U!==x;++U)R[U]=t[U];h.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,g,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const h=g+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,R=g;x!==v;++x,R+=4)o.copy(u[x]).applyMatrix4(T,a),o.normal.toArray(p,R),p[R+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Lu(i){let e=new WeakMap;function t(o,a){return a===ks?o.mapping=qn:a===Gs&&(o.mapping=$n),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ks||a===Gs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bd(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ro extends wo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,Co=[.125,.215,.35,.446,.526,.582],Vn=20,yr=new Ro,Po=new et;let Mr=null,Sr=0,br=0;const Wn=(1+Math.sqrt(5))/2,xi=1/Wn,Lo=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Wn,xi),new G(0,Wn,-xi),new G(xi,0,Wn),new G(-xi,0,Wn),new G(Wn,xi,0),new G(-Wn,xi,0)];class Er{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mr,Sr,br),e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ei,format:en,colorSpace:dn,depthBuffer:!1},s=No(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nu(r)),this._blurMaterial=Du(r,e,t)}return s}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,s){const a=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Po),d.toneMapping=bn,d.autoClear=!1;const g=new go({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),_=new Ee(new Ye,g);let v=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,v=!0):(g.color.copy(Po),v=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):T===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;Ms(s,T*x,h>2?x:0,x,x),d.setRenderTarget(s),v&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===qn||e.mapping===$n;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ms(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lo[(s-1)%Lo.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ee(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Vn-1),v=r/_,p=isFinite(r)?1+Math.floor(d*v):Vn;p>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);const h=[];let T=0;for(let C=0;C<Vn;++C){const ee=C/v,E=Math.exp(-ee*ee/2);h.push(E),C===0?T+=E:C<p&&(T+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const R=this._sizeLods[s],U=3*R*(s>x-gi?s-x+gi:0),P=4*(this._cubeSize-R);Ms(t,U,P,3*R,2*R),l.setRenderTarget(t),l.render(u,yr)}}function Nu(i){const e=[],t=[],n=[];let s=i;const r=i-gi+1+Co.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-gi?l=Co[o-i+gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],g=6,_=6,v=3,p=2,h=1,T=new Float32Array(v*_*g),x=new Float32Array(p*_*g),R=new Float32Array(h*_*g);for(let P=0;P<g;P++){const C=P%3*2/3-1,ee=P>2?0:-1,E=[C,ee,0,C+2/3,ee,0,C+2/3,ee+1,0,C,ee,0,C+2/3,ee+1,0,C,ee+1,0];T.set(E,v*_*P),x.set(f,p*_*P);const A=[P,P,P,P,P,P];R.set(A,h*_*P)}const U=new Vt;U.setAttribute("position",new rn(T,v)),U.setAttribute("uv",new rn(x,p)),U.setAttribute("faceIndex",new rn(R,h)),e.push(U),s>gi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function No(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=Wi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Du(i,e,t){const n=new Float32Array(Vn),s=new G(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Do(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Uo(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function wr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ks||l===Gs,d=l===qn||l===$n;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Er(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||d&&u&&s(u)){t===null&&(t=new Er(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Iu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fu(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];const g=r.get(f);g&&(e.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const g=u.morphAttributes;for(const _ in g){const v=g[_];for(let p=0,h=v.length;p<h;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){const f=[],g=u.index,_=u.attributes.position;let v=0;if(g!==null){const T=g.array;v=g.version;for(let x=0,R=T.length;x<R;x+=3){const U=T[x+0],P=T[x+1],C=T[x+2];f.push(U,P,P,C,C,U)}}else if(_!==void 0){const T=_.array;v=_.version;for(let x=0,R=T.length/3-1;x<R;x+=3){const U=x+0,P=x+1,C=x+2;f.push(U,P,P,C,C,U)}}else return;const p=new(Za(f)?_o:xo)(f,1);p.version=v;const h=r.get(u);h&&e.remove(h),r.set(u,p)}function d(u){const f=r.get(u);if(f){const g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Ou(i,e,t,n){const s=n.isWebGL2;let r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,_){i.drawElements(r,_,a,g*l),t.update(_,r,1)}function u(g,_,v){if(v===0)return;let p,h;if(s)p=i,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,_,a,g*l,v),t.update(_,r,v)}function f(g,_,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<v;h++)this.render(g[h]/l,_[h]);else{p.multiDrawElementsWEBGL(r,_,0,a,g,0,v);let h=0;for(let T=0;T<v;T++)h+=_[T];t.update(h,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=f}function Bu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zu(i,e){return i[0]-e[0]}function ku(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Gu(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let N=function(){te.dispose(),r.delete(d),d.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,U=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let ee=0;T===!0&&(ee=1),x===!0&&(ee=2),R===!0&&(ee=3);let E=d.attributes.position.count*ee,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const O=new Float32Array(E*A*4*_),te=new io(O,E,A,_);te.type=Tn,te.needsUpdate=!0;const ae=ee*4;for(let Y=0;Y<_;Y++){const M=U[Y],ne=P[Y],K=C[Y],j=E*A*4*Y;for(let B=0;B<M.count;B++){const J=B*ae;T===!0&&(o.fromBufferAttribute(M,B),O[j+J+0]=o.x,O[j+J+1]=o.y,O[j+J+2]=o.z,O[j+J+3]=0),x===!0&&(o.fromBufferAttribute(ne,B),O[j+J+4]=o.x,O[j+J+5]=o.y,O[j+J+6]=o.z,O[j+J+7]=0),R===!0&&(o.fromBufferAttribute(K,B),O[j+J+8]=o.x,O[j+J+9]=o.y,O[j+J+10]=o.z,O[j+J+11]=K.itemSize===4?o.w:1)}}v={count:_,texture:te,size:new at(E,A)},r.set(d,v),d.addEventListener("dispose",N)}let p=0;for(let T=0;T<f.length;T++)p+=f[T];const h=d.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",h),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const g=f===void 0?0:f.length;let _=n[d.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[d.id]=_}for(let x=0;x<g;x++){const R=_[x];R[0]=x,R[1]=f[x]}_.sort(ku);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(zu);const v=d.morphAttributes.position,p=d.morphAttributes.normal;let h=0;for(let x=0;x<8;x++){const R=a[x],U=R[0],P=R[1];U!==Number.MAX_SAFE_INTEGER&&P?(v&&d.getAttribute("morphTarget"+x)!==v[U]&&d.setAttribute("morphTarget"+x,v[U]),p&&d.getAttribute("morphNormal"+x)!==p[U]&&d.setAttribute("morphNormal"+x,p[U]),s[x]=P,h+=P):(v&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),p&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),s[x]=0)}const T=d.morphTargetsRelative?1:1-h;u.getUniforms().setValue(i,"morphTargetBaseInfluence",T),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Hu(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Io extends kt{constructor(e,t,n,s,r,o,a,l,c,d){if(d=d!==void 0?d:Un,d!==Un&&d!==Kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Un&&(n=wn),n===void 0&&d===Kn&&(n=Dn),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fo=new kt,Oo=new Io(1,1);Oo.compareFunction=Ya;const Bo=new io,zo=new ad,ko=new To,Go=[],Ho=[],Vo=new Float32Array(16),Wo=new Float32Array(9),jo=new Float32Array(4);function _i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Go[s];if(r===void 0&&(r=new Float32Array(s),Go[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ss(i,e){let t=Ho[e];t===void 0&&(t=new Int32Array(e),Ho[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function ju(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function Xu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Yu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;jo.set(n),i.uniformMatrix2fv(this.addr,!1,jo),Et(t,n)}}function qu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;Wo.set(n),i.uniformMatrix3fv(this.addr,!1,Wo),Et(t,n)}}function $u(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;Vo.set(n),i.uniformMatrix4fv(this.addr,!1,Vo),Et(t,n)}}function Ku(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Ju(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function Qu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function rf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Oo:Fo;t.setTexture2D(e||r,s)}function af(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zo,s)}function of(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ko,s)}function lf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bo,s)}function cf(i){switch(i){case 5126:return Vu;case 35664:return Wu;case 35665:return ju;case 35666:return Xu;case 35674:return Yu;case 35675:return qu;case 35676:return $u;case 5124:case 35670:return Ku;case 35667:case 35671:return Zu;case 35668:case 35672:return Ju;case 35669:case 35673:return Qu;case 5125:return ef;case 36294:return tf;case 36295:return nf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return lf}}function df(i,e){i.uniform1fv(this.addr,e)}function hf(i,e){const t=_i(e,this.size,2);i.uniform2fv(this.addr,t)}function uf(i,e){const t=_i(e,this.size,3);i.uniform3fv(this.addr,t)}function ff(i,e){const t=_i(e,this.size,4);i.uniform4fv(this.addr,t)}function pf(i,e){const t=_i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mf(i,e){const t=_i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gf(i,e){const t=_i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xf(i,e){i.uniform1iv(this.addr,e)}function _f(i,e){i.uniform2iv(this.addr,e)}function vf(i,e){i.uniform3iv(this.addr,e)}function yf(i,e){i.uniform4iv(this.addr,e)}function Mf(i,e){i.uniform1uiv(this.addr,e)}function Sf(i,e){i.uniform2uiv(this.addr,e)}function bf(i,e){i.uniform3uiv(this.addr,e)}function Ef(i,e){i.uniform4uiv(this.addr,e)}function wf(i,e,t){const n=this.cache,s=e.length,r=Ss(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fo,r[o])}function Tf(i,e,t){const n=this.cache,s=e.length,r=Ss(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zo,r[o])}function Af(i,e,t){const n=this.cache,s=e.length,r=Ss(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ko,r[o])}function Rf(i,e,t){const n=this.cache,s=e.length,r=Ss(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bo,r[o])}function Cf(i){switch(i){case 5126:return df;case 35664:return hf;case 35665:return uf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return xf;case 35667:case 35671:return _f;case 35668:case 35672:return vf;case 35669:case 35673:return yf;case 5125:return Mf;case 36294:return Sf;case 36295:return bf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Rf}}class Pf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cf(t.type)}}class Lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cf(t.type)}}class Nf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function Xo(i,e){i.seq.push(e),i.map[e.id]=e}function Df(i,e,t){const n=i.name,s=n.length;for(Tr.lastIndex=0;;){const r=Tr.exec(n),o=Tr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xo(t,c===void 0?new Pf(a,i,e):new Lf(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Nf(a),Xo(t,u)),t=u}}}class bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Df(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Yo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Uf=37297;let If=0;function Ff(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Of(i){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i);let n;switch(e===t?n="":e===qi&&t===Yi?n="LinearDisplayP3ToLinearSRGB":e===Yi&&t===qi&&(n="LinearSRGBToLinearDisplayP3"),i){case dn:case ji:return[n,"LinearTransferOETF"];case Ct:case Zs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function qo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ff(i.getShaderSource(e),o)}else return s}function Bf(i,e){const t=Of(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zf(i,e){let t;switch(e){case Pc:t="Linear";break;case Lc:t="Reinhard";break;case Nc:t="OptimizedCineon";break;case ca:t="ACESFilmic";break;case Uc:t="AgX";break;case Dc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function Gf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vi).join(`
`)}function Hf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function vi(i){return i!==""}function $o(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ko(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(i){return i.replace(Wf,Xf)}const jf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xf(i,e){let t=tt[e];if(t===void 0){const n=jf.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ar(t)}const Yf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zo(i){return i.replace(Yf,qf)}function qf(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jo(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $f(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ta?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===na?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Kf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qn:case $n:e="ENVMAP_TYPE_CUBE";break;case Wi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function Jf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:e="ENVMAP_BLENDING_MULTIPLY";break;case Rc:e="ENVMAP_BLENDING_MIX";break;case Cc:e="ENVMAP_BLENDING_ADD";break}return e}function Qf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ep(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$f(t),c=Kf(t),d=Zf(t),u=Jf(t),f=Qf(t),g=t.isWebGL2?"":kf(t),_=Gf(t),v=Hf(r),p=s.createProgram();let h,T,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vi).join(`
`),h.length>0&&(h+=`
`),T=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vi).join(`
`),T.length>0&&(T+=`
`)):(h=[Jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),T=[g,Jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?tt.tonemapping_pars_fragment:"",t.toneMapping!==bn?zf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Bf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),o=Ar(o),o=$o(o,t),o=Ko(o,t),a=Ar(a),a=$o(a,t),a=Ko(a,t),o=Zo(o),a=Zo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const R=x+h+o,U=x+T+a,P=Yo(s,s.VERTEX_SHADER,R),C=Yo(s,s.FRAGMENT_SHADER,U);s.attachShader(p,P),s.attachShader(p,C),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function ee(te){if(i.debug.checkShaderErrors){const ae=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(P).trim(),Y=s.getShaderInfoLog(C).trim();let M=!0,ne=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(M=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,P,C);else{const K=qo(s,P,"vertex"),j=qo(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+K+`
`+j)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(N===""||Y==="")&&(ne=!1);ne&&(te.diagnostics={runnable:M,programLog:ae,vertexShader:{log:N,prefix:h},fragmentShader:{log:Y,prefix:T}})}s.deleteShader(P),s.deleteShader(C),E=new bs(s,p),A=Vf(s,p)}let E;this.getUniforms=function(){return E===void 0&&ee(this),E};let A;this.getAttributes=function(){return A===void 0&&ee(this),A};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(p,Uf)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=If++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=C,this}let tp=0;class np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ip(e),t.set(e,n)),n}}class ip{constructor(e){this.id=tp++,this.code=e,this.usedTimes=0}}function sp(i,e,t,n,s,r,o){const a=new lo,l=new np,c=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,A,O,te,ae){const N=te.fog,Y=ae.geometry,M=E.isMeshStandardMaterial?te.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||M),K=ne&&ne.mapping===Wi?ne.image.height:null,j=_[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const B=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=B!==void 0?B.length:0;let Z=0;Y.morphAttributes.position!==void 0&&(Z=1),Y.morphAttributes.normal!==void 0&&(Z=2),Y.morphAttributes.color!==void 0&&(Z=3);let W,ie,le,Me;if(j){const ct=an[j];W=ct.vertexShader,ie=ct.fragmentShader}else W=E.vertexShader,ie=E.fragmentShader,l.update(E),le=l.getVertexShaderID(E),Me=l.getFragmentShaderID(E);const me=i.getRenderTarget(),Ue=ae.isInstancedMesh===!0,De=ae.isBatchedMesh===!0,pe=!!E.map,xe=!!E.matcap,z=!!ne,Ae=!!E.aoMap,Re=!!E.lightMap,Ce=!!E.bumpMap,we=!!E.normalMap,Be=!!E.displacementMap,fe=!!E.emissiveMap,y=!!E.metalnessMap,S=!!E.roughnessMap,D=E.anisotropy>0,q=E.clearcoat>0,ce=E.iridescence>0,re=E.sheen>0,oe=E.transmission>0,ge=D&&!!E.anisotropyMap,ye=q&&!!E.clearcoatMap,Ne=q&&!!E.clearcoatNormalMap,Oe=q&&!!E.clearcoatRoughnessMap,de=ce&&!!E.iridescenceMap,he=ce&&!!E.iridescenceThicknessMap,ke=re&&!!E.sheenColorMap,He=re&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Se=!!E.specularColorMap,ze=!!E.specularIntensityMap,Ke=oe&&!!E.transmissionMap,k=oe&&!!E.thicknessMap,V=!!E.gradientMap,F=!!E.alphaMap,w=E.alphaTest>0,Q=!!E.alphaHash,se=!!E.extensions,_e=!!Y.attributes.uv1,be=!!Y.attributes.uv2,Ge=!!Y.attributes.uv3;let $e=bn;return E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&($e=i.toneMapping),{isWebGL2:d,shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:ie,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:De,instancing:Ue,instancingColor:Ue&&ae.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:dn,map:pe,matcap:xe,envMap:z,envMapMode:z&&ne.mapping,envMapCubeUVHeight:K,aoMap:Ae,lightMap:Re,bumpMap:Ce,normalMap:we,displacementMap:f&&Be,emissiveMap:fe,normalMapObjectSpace:we&&E.normalMapType===Xc,normalMapTangentSpace:we&&E.normalMapType===ja,metalnessMap:y,roughnessMap:S,anisotropy:D,anisotropyMap:ge,clearcoat:q,clearcoatMap:ye,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Oe,iridescence:ce,iridescenceMap:de,iridescenceThicknessMap:he,sheen:re,sheenColorMap:ke,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:Se,specularIntensityMap:ze,transmission:oe,transmissionMap:Ke,thicknessMap:k,gradientMap:V,opaque:E.transparent===!1&&E.blending===Yn,alphaMap:F,alphaTest:w,alphaHash:Q,combine:E.combine,mapUv:pe&&v(E.map.channel),aoMapUv:Ae&&v(E.aoMap.channel),lightMapUv:Re&&v(E.lightMap.channel),bumpMapUv:Ce&&v(E.bumpMap.channel),normalMapUv:we&&v(E.normalMap.channel),displacementMapUv:Be&&v(E.displacementMap.channel),emissiveMapUv:fe&&v(E.emissiveMap.channel),metalnessMapUv:y&&v(E.metalnessMap.channel),roughnessMapUv:S&&v(E.roughnessMap.channel),anisotropyMapUv:ge&&v(E.anisotropyMap.channel),clearcoatMapUv:ye&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&v(E.sheenRoughnessMap.channel),specularMapUv:Pe&&v(E.specularMap.channel),specularColorMapUv:Se&&v(E.specularColorMap.channel),specularIntensityMapUv:ze&&v(E.specularIntensityMap.channel),transmissionMapUv:Ke&&v(E.transmissionMap.channel),thicknessMapUv:k&&v(E.thicknessMap.channel),alphaMapUv:F&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(we||D),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:be,vertexUv3s:Ge,pointsUvs:ae.isPoints===!0&&!!Y.attributes.uv&&(pe||F),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ae.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===cn,flipSided:E.side===Bt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:se&&E.extensions.derivatives===!0,extensionFragDepth:se&&E.extensions.fragDepth===!0,extensionDrawBuffers:se&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)A.push(O),A.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(T(A,E),x(A,E),A.push(i.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function T(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function x(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function R(E){const A=_[E.type];let O;if(A){const te=an[A];O=vd.clone(te.uniforms)}else O=E.uniforms;return O}function U(E,A){let O;for(let te=0,ae=c.length;te<ae;te++){const N=c[te];if(N.cacheKey===A){O=N,++O.usedTimes;break}}return O===void 0&&(O=new ep(i,A,E,r),c.push(O)),O}function P(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function ee(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:R,acquireProgram:U,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:ee}}function rp(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function el(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,g,_,v,p){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:g,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=g,h.groupOrder=_,h.renderOrder=u.renderOrder,h.z=v,h.group=p),e++,h}function a(u,f,g,_,v,p){const h=o(u,f,g,_,v,p);g.transmission>0?n.push(h):g.transparent===!0?s.push(h):t.push(h)}function l(u,f,g,_,v,p){const h=o(u,f,g,_,v,p);g.transmission>0?n.unshift(h):g.transparent===!0?s.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||ap),n.length>1&&n.sort(f||Qo),s.length>1&&s.sort(f||Qo)}function d(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function op(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new el,i.set(n,[o])):s>=r.length?(o=new el,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new et};break;case"SpotLight":t={position:new G,direction:new G,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function cp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dp=0;function hp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function up(i,e){const t=new lp,n=cp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new G);const r=new G,o=new yt,a=new yt;function l(d,u){let f=0,g=0,_=0;for(let te=0;te<9;te++)s.probe[te].set(0,0,0);let v=0,p=0,h=0,T=0,x=0,R=0,U=0,P=0,C=0,ee=0,E=0;d.sort(hp);const A=u===!0?Math.PI:1;for(let te=0,ae=d.length;te<ae;te++){const N=d[te],Y=N.color,M=N.intensity,ne=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=Y.r*M*A,g+=Y.g*M*A,_+=Y.b*M*A;else if(N.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(N.sh.coefficients[j],M);E++}else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const B=N.shadow,J=n.get(N);J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,s.directionalShadow[v]=J,s.directionalShadowMap[v]=K,s.directionalShadowMatrix[v]=N.shadow.matrix,R++}s.directional[v]=j,v++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(Y).multiplyScalar(M*A),j.distance=ne,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,s.spot[h]=j;const B=N.shadow;if(N.map&&(s.spotLightMap[C]=N.map,C++,B.updateMatrices(N),N.castShadow&&ee++),s.spotLightMatrix[h]=B.matrix,N.castShadow){const J=n.get(N);J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,s.spotShadow[h]=J,s.spotShadowMap[h]=K,P++}h++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(Y).multiplyScalar(M),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),s.rectArea[T]=j,T++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*A),j.distance=N.distance,j.decay=N.decay,N.castShadow){const B=N.shadow,J=n.get(N);J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,s.pointShadow[p]=J,s.pointShadowMap[p]=K,s.pointShadowMatrix[p]=N.shadow.matrix,U++}s.point[p]=j,p++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(M*A),j.groundColor.copy(N.groundColor).multiplyScalar(M*A),s.hemi[x]=j,x++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=g,s.ambient[2]=_;const O=s.hash;(O.directionalLength!==v||O.pointLength!==p||O.spotLength!==h||O.rectAreaLength!==T||O.hemiLength!==x||O.numDirectionalShadows!==R||O.numPointShadows!==U||O.numSpotShadows!==P||O.numSpotMaps!==C||O.numLightProbes!==E)&&(s.directional.length=v,s.spot.length=h,s.rectArea.length=T,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=P+C-ee,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=ee,s.numLightProbes=E,O.directionalLength=v,O.pointLength=p,O.spotLength=h,O.rectAreaLength=T,O.hemiLength=x,O.numDirectionalShadows=R,O.numPointShadows=U,O.numSpotShadows=P,O.numSpotMaps=C,O.numLightProbes=E,s.version=dp++)}function c(d,u){let f=0,g=0,_=0,v=0,p=0;const h=u.matrixWorldInverse;for(let T=0,x=d.length;T<x;T++){const R=d[T];if(R.isDirectionalLight){const U=s.directional[f];U.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(h),f++}else if(R.isSpotLight){const U=s.spot[_];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(h),U.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(h),_++}else if(R.isRectAreaLight){const U=s.rectArea[v];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(h),a.identity(),o.copy(R.matrixWorld),o.premultiply(h),a.extractRotation(o),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(h),g++}else if(R.isHemisphereLight){const U=s.hemi[p];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:s}}function tl(i,e){const t=new up(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fp(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new tl(i,e),t.set(r,[l])):o>=a.length?(l=new tl(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class pp extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mp extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _p(i,e,t){let n=new vr;const s=new at,r=new at,o=new gt,a=new pp({depthPacking:jc}),l=new mp,c={},d=t.maxTextureSize,u={[Mn]:Bt,[Bt]:Mn,[cn]:cn},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:gp,fragmentShader:xp}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ee(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let h=this.type;this.render=function(P,C,ee){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const E=i.getRenderTarget(),A=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),te=i.state;te.setBlending(Sn),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ae=h!==ln&&this.type===ln,N=h===ln&&this.type!==ln;for(let Y=0,M=P.length;Y<M;Y++){const ne=P[Y],K=ne.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const j=K.getFrameExtents();if(s.multiply(j),r.copy(K.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,K.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,K.mapSize.y=r.y)),K.map===null||ae===!0||N===!0){const J=this.type!==ln?{minFilter:Ut,magFilter:Ut}:{};K.map!==null&&K.map.dispose(),K.map=new Fn(s.x,s.y,J),K.map.texture.name=ne.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const B=K.getViewportCount();for(let J=0;J<B;J++){const Z=K.getViewport(J);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),te.viewport(o),K.updateMatrices(ne,J),n=K.getFrustum(),R(C,ee,K.camera,ne,this.type)}K.isPointLightShadow!==!0&&this.type===ln&&T(K,ee),K.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(E,A,O)};function T(P,C){const ee=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Fn(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(C,null,ee,f,v,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(C,null,ee,g,v,null)}function x(P,C,ee,E){let A=null;const O=ee.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)A=O;else if(A=ee.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const te=A.uuid,ae=C.uuid;let N=c[te];N===void 0&&(N={},c[te]=N);let Y=N[ae];Y===void 0&&(Y=A.clone(),N[ae]=Y,C.addEventListener("dispose",U)),A=Y}if(A.visible=C.visible,A.wireframe=C.wireframe,E===ln?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:u[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,ee.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const te=i.properties.get(A);te.light=ee}return A}function R(P,C,ee,E,A){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===ln)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,P.matrixWorld);const ae=e.update(P),N=P.material;if(Array.isArray(N)){const Y=ae.groups;for(let M=0,ne=Y.length;M<ne;M++){const K=Y[M],j=N[K.materialIndex];if(j&&j.visible){const B=x(P,j,E,A);P.onBeforeShadow(i,P,C,ee,ae,B,K),i.renderBufferDirect(ee,null,ae,B,P,K),P.onAfterShadow(i,P,C,ee,ae,B,K)}}}else if(N.visible){const Y=x(P,N,E,A);P.onBeforeShadow(i,P,C,ee,ae,Y,null),i.renderBufferDirect(ee,null,ae,Y,P,null),P.onAfterShadow(i,P,C,ee,ae,Y,null)}}const te=P.children;for(let ae=0,N=te.length;ae<N;ae++)R(te[ae],C,ee,E,A)}function U(P){P.target.removeEventListener("dispose",U);for(const ee in c){const E=c[ee],A=P.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function vp(i,e,t){const n=t.isWebGL2;function s(){let w=!1;const Q=new gt;let se=null;const _e=new gt(0,0,0,0);return{setMask:function(be){se!==be&&!w&&(i.colorMask(be,be,be,be),se=be)},setLocked:function(be){w=be},setClear:function(be,Ge,$e,st,ct){ct===!0&&(be*=st,Ge*=st,$e*=st),Q.set(be,Ge,$e,st),_e.equals(Q)===!1&&(i.clearColor(be,Ge,$e,st),_e.copy(Q))},reset:function(){w=!1,se=null,_e.set(-1,0,0,0)}}}function r(){let w=!1,Q=null,se=null,_e=null;return{setTest:function(be){be?De(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(be){Q!==be&&!w&&(i.depthMask(be),Q=be)},setFunc:function(be){if(se!==be){switch(be){case Mc:i.depthFunc(i.NEVER);break;case Sc:i.depthFunc(i.ALWAYS);break;case bc:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case wc:i.depthFunc(i.GEQUAL);break;case Tc:i.depthFunc(i.GREATER);break;case Ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=be}},setLocked:function(be){w=be},setClear:function(be){_e!==be&&(i.clearDepth(be),_e=be)},reset:function(){w=!1,Q=null,se=null,_e=null}}}function o(){let w=!1,Q=null,se=null,_e=null,be=null,Ge=null,$e=null,st=null,ct=null;return{setTest:function(Je){w||(Je?De(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Je){Q!==Je&&!w&&(i.stencilMask(Je),Q=Je)},setFunc:function(Je,ht,ut){(se!==Je||_e!==ht||be!==ut)&&(i.stencilFunc(Je,ht,ut),se=Je,_e=ht,be=ut)},setOp:function(Je,ht,ut){(Ge!==Je||$e!==ht||st!==ut)&&(i.stencilOp(Je,ht,ut),Ge=Je,$e=ht,st=ut)},setLocked:function(Je){w=Je},setClear:function(Je){ct!==Je&&(i.clearStencil(Je),ct=Je)},reset:function(){w=!1,Q=null,se=null,_e=null,be=null,Ge=null,$e=null,st=null,ct=null}}}const a=new s,l=new r,c=new o,d=new WeakMap,u=new WeakMap;let f={},g={},_=new WeakMap,v=[],p=null,h=!1,T=null,x=null,R=null,U=null,P=null,C=null,ee=null,E=new et(0,0,0),A=0,O=!1,te=null,ae=null,N=null,Y=null,M=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=j>=2);let J=null,Z={};const W=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),le=new gt().fromArray(W),Me=new gt().fromArray(ie);function me(w,Q,se,_e){const be=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(w,Ge),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<se;$e++)n&&(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)?i.texImage3D(Q,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(Q+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Ge}const Ue={};Ue[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(i.DEPTH_TEST),l.setFunc(Vi),fe(!1),y(ea),De(i.CULL_FACE),we(Sn);function De(w){f[w]!==!0&&(i.enable(w),f[w]=!0)}function pe(w){f[w]!==!1&&(i.disable(w),f[w]=!1)}function xe(w,Q){return g[w]!==Q?(i.bindFramebuffer(w,Q),g[w]=Q,n&&(w===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Q),w===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Q)),!0):!1}function z(w,Q){let se=v,_e=!1;if(w)if(se=_.get(Q),se===void 0&&(se=[],_.set(Q,se)),w.isWebGLMultipleRenderTargets){const be=w.texture;if(se.length!==be.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Ge=0,$e=be.length;Ge<$e;Ge++)se[Ge]=i.COLOR_ATTACHMENT0+Ge;se.length=be.length,_e=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,_e=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,_e=!0);_e&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Ae(w){return p!==w?(i.useProgram(w),p=w,!0):!1}const Re={[Nn]:i.FUNC_ADD,[ac]:i.FUNC_SUBTRACT,[oc]:i.FUNC_REVERSE_SUBTRACT};if(n)Re[aa]=i.MIN,Re[oa]=i.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(Re[aa]=w.MIN_EXT,Re[oa]=w.MAX_EXT)}const Ce={[lc]:i.ZERO,[cc]:i.ONE,[dc]:i.SRC_COLOR,[Bs]:i.SRC_ALPHA,[gc]:i.SRC_ALPHA_SATURATE,[pc]:i.DST_COLOR,[uc]:i.DST_ALPHA,[hc]:i.ONE_MINUS_SRC_COLOR,[zs]:i.ONE_MINUS_SRC_ALPHA,[mc]:i.ONE_MINUS_DST_COLOR,[fc]:i.ONE_MINUS_DST_ALPHA,[xc]:i.CONSTANT_COLOR,[_c]:i.ONE_MINUS_CONSTANT_COLOR,[vc]:i.CONSTANT_ALPHA,[yc]:i.ONE_MINUS_CONSTANT_ALPHA};function we(w,Q,se,_e,be,Ge,$e,st,ct,Je){if(w===Sn){h===!0&&(pe(i.BLEND),h=!1);return}if(h===!1&&(De(i.BLEND),h=!0),w!==rc){if(w!==T||Je!==O){if((x!==Nn||P!==Nn)&&(i.blendEquation(i.FUNC_ADD),x=Nn,P=Nn),Je)switch(w){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.ONE,i.ONE);break;case sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ra:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}R=null,U=null,C=null,ee=null,E.set(0,0,0),A=0,T=w,O=Je}return}be=be||Q,Ge=Ge||se,$e=$e||_e,(Q!==x||be!==P)&&(i.blendEquationSeparate(Re[Q],Re[be]),x=Q,P=be),(se!==R||_e!==U||Ge!==C||$e!==ee)&&(i.blendFuncSeparate(Ce[se],Ce[_e],Ce[Ge],Ce[$e]),R=se,U=_e,C=Ge,ee=$e),(st.equals(E)===!1||ct!==A)&&(i.blendColor(st.r,st.g,st.b,ct),E.copy(st),A=ct),T=w,O=!1}function Be(w,Q){w.side===cn?pe(i.CULL_FACE):De(i.CULL_FACE);let se=w.side===Bt;Q&&(se=!se),fe(se),w.blending===Yn&&w.transparent===!1?we(Sn):we(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const _e=w.stencilWrite;c.setTest(_e),_e&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),D(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(w){te!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),te=w)}function y(w){w!==ic?(De(i.CULL_FACE),w!==ae&&(w===ea?i.cullFace(i.BACK):w===sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),ae=w}function S(w){w!==N&&(K&&i.lineWidth(w),N=w)}function D(w,Q,se){w?(De(i.POLYGON_OFFSET_FILL),(Y!==Q||M!==se)&&(i.polygonOffset(Q,se),Y=Q,M=se)):pe(i.POLYGON_OFFSET_FILL)}function q(w){w?De(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function ce(w){w===void 0&&(w=i.TEXTURE0+ne-1),J!==w&&(i.activeTexture(w),J=w)}function re(w,Q,se){se===void 0&&(J===null?se=i.TEXTURE0+ne-1:se=J);let _e=Z[se];_e===void 0&&(_e={type:void 0,texture:void 0},Z[se]=_e),(_e.type!==w||_e.texture!==Q)&&(J!==se&&(i.activeTexture(se),J=se),i.bindTexture(w,Q||Ue[w]),_e.type=w,_e.texture=Q)}function oe(){const w=Z[J];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ne(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ke(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function He(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ze(w){le.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),le.copy(w))}function Ke(w){Me.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),Me.copy(w))}function k(w,Q){let se=u.get(Q);se===void 0&&(se=new WeakMap,u.set(Q,se));let _e=se.get(w);_e===void 0&&(_e=i.getUniformBlockIndex(Q,w.name),se.set(w,_e))}function V(w,Q){const _e=u.get(Q).get(w);d.get(Q)!==_e&&(i.uniformBlockBinding(Q,_e,w.__bindingPointIndex),d.set(Q,_e))}function F(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},J=null,Z={},g={},_=new WeakMap,v=[],p=null,h=!1,T=null,x=null,R=null,U=null,P=null,C=null,ee=null,E=new et(0,0,0),A=0,O=!1,te=null,ae=null,N=null,Y=null,M=null,le.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:pe,bindFramebuffer:xe,drawBuffers:z,useProgram:Ae,setBlending:we,setMaterial:Be,setFlipSided:fe,setCullFace:y,setLineWidth:S,setPolygonOffset:D,setScissorTest:q,activeTexture:ce,bindTexture:re,unbindTexture:oe,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:Pe,texImage3D:Se,updateUBOMapping:k,uniformBlockBinding:V,texStorage2D:ke,texStorage3D:He,texSubImage2D:Ne,texSubImage3D:Oe,compressedTexSubImage2D:de,compressedTexSubImage3D:he,scissor:ze,viewport:Ke,reset:F}}function yp(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,S){return g?new OffscreenCanvas(y,S):Zi("canvas")}function v(y,S,D,q){let ce=1;if((y.width>q||y.height>q)&&(ce=q/Math.max(y.width,y.height)),ce<1||S===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const re=S?tr:Math.floor,oe=re(ce*y.width),ge=re(ce*y.height);u===void 0&&(u=_(oe,ge));const ye=D?_(oe,ge):u;return ye.width=oe,ye.height=ge,ye.getContext("2d").drawImage(y,0,0,oe,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+oe+"x"+ge+")."),ye}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Ka(y.width)&&Ka(y.height)}function h(y){return a?!1:y.wrapS!==Qt||y.wrapT!==Qt||y.minFilter!==Ut&&y.minFilter!==Yt}function T(y,S){return y.generateMipmaps&&S&&y.minFilter!==Ut&&y.minFilter!==Yt}function x(y){i.generateMipmap(y)}function R(y,S,D,q,ce=!1){if(a===!1)return S;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let re=S;if(S===i.RED&&(D===i.FLOAT&&(re=i.R32F),D===i.HALF_FLOAT&&(re=i.R16F),D===i.UNSIGNED_BYTE&&(re=i.R8)),S===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(re=i.R8UI),D===i.UNSIGNED_SHORT&&(re=i.R16UI),D===i.UNSIGNED_INT&&(re=i.R32UI),D===i.BYTE&&(re=i.R8I),D===i.SHORT&&(re=i.R16I),D===i.INT&&(re=i.R32I)),S===i.RG&&(D===i.FLOAT&&(re=i.RG32F),D===i.HALF_FLOAT&&(re=i.RG16F),D===i.UNSIGNED_BYTE&&(re=i.RG8)),S===i.RGBA){const oe=ce?Xi:ft.getTransfer(q);D===i.FLOAT&&(re=i.RGBA32F),D===i.HALF_FLOAT&&(re=i.RGBA16F),D===i.UNSIGNED_BYTE&&(re=oe===mt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function U(y,S,D){return T(y,D)===!0||y.isFramebufferTexture&&y.minFilter!==Ut&&y.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?S.mipmaps.length:1}function P(y){return y===Ut||y===ha||y===Ws?i.NEAREST:i.LINEAR}function C(y){const S=y.target;S.removeEventListener("dispose",C),E(S),S.isVideoTexture&&d.delete(S)}function ee(y){const S=y.target;S.removeEventListener("dispose",ee),O(S)}function E(y){const S=n.get(y);if(S.__webglInit===void 0)return;const D=y.source,q=f.get(D);if(q){const ce=q[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&A(y),Object.keys(q).length===0&&f.delete(D)}n.remove(y)}function A(y){const S=n.get(y);i.deleteTexture(S.__webglTexture);const D=y.source,q=f.get(D);delete q[S.__cacheKey],o.memory.textures--}function O(y){const S=y.texture,D=n.get(y),q=n.get(S);if(q.__webglTexture!==void 0&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(D.__webglFramebuffer[ce]))for(let re=0;re<D.__webglFramebuffer[ce].length;re++)i.deleteFramebuffer(D.__webglFramebuffer[ce][re]);else i.deleteFramebuffer(D.__webglFramebuffer[ce]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[ce])}else{if(Array.isArray(D.__webglFramebuffer))for(let ce=0;ce<D.__webglFramebuffer.length;ce++)i.deleteFramebuffer(D.__webglFramebuffer[ce]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ce=0;ce<D.__webglColorRenderbuffer.length;ce++)D.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[ce]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ce=0,re=S.length;ce<re;ce++){const oe=n.get(S[ce]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(S[ce])}n.remove(S),n.remove(y)}let te=0;function ae(){te=0}function N(){const y=te;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),te+=1,y}function Y(y){const S=[];return S.push(y.wrapS),S.push(y.wrapT),S.push(y.wrapR||0),S.push(y.magFilter),S.push(y.minFilter),S.push(y.anisotropy),S.push(y.internalFormat),S.push(y.format),S.push(y.type),S.push(y.generateMipmaps),S.push(y.premultiplyAlpha),S.push(y.flipY),S.push(y.unpackAlignment),S.push(y.colorSpace),S.join()}function M(y,S){const D=n.get(y);if(y.isVideoTexture&&Be(y),y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(D,y,S);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+S)}function ne(y,S){const D=n.get(y);if(y.version>0&&D.__version!==y.version){le(D,y,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+S)}function K(y,S){const D=n.get(y);if(y.version>0&&D.__version!==y.version){le(D,y,S);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+S)}function j(y,S){const D=n.get(y);if(y.version>0&&D.__version!==y.version){Me(D,y,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+S)}const B={[Hs]:i.REPEAT,[Qt]:i.CLAMP_TO_EDGE,[Vs]:i.MIRRORED_REPEAT},J={[Ut]:i.NEAREST,[ha]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[Ic]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Z={[Yc]:i.NEVER,[Qc]:i.ALWAYS,[qc]:i.LESS,[Ya]:i.LEQUAL,[$c]:i.EQUAL,[Jc]:i.GEQUAL,[Kc]:i.GREATER,[Zc]:i.NOTEQUAL};function W(y,S,D){if(D?(i.texParameteri(y,i.TEXTURE_WRAP_S,B[S.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,B[S.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,B[S.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,J[S.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,J[S.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Qt||S.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,P(S.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,P(S.minFilter)),S.minFilter!==Ut&&S.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ut||S.minFilter!==Ws&&S.minFilter!==bi||S.type===Tn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ei&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(y,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ie(y,S){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,S.addEventListener("dispose",C));const q=S.source;let ce=f.get(q);ce===void 0&&(ce={},f.set(q,ce));const re=Y(S);if(re!==y.__cacheKey){ce[re]===void 0&&(ce[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),ce[re].usedTimes++;const oe=ce[y.__cacheKey];oe!==void 0&&(ce[y.__cacheKey].usedTimes--,oe.usedTimes===0&&A(S)),y.__cacheKey=re,y.__webglTexture=ce[re].texture}return D}function le(y,S,D){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const ce=ie(y,S),re=S.source;t.bindTexture(q,y.__webglTexture,i.TEXTURE0+D);const oe=n.get(re);if(re.version!==oe.__version||ce===!0){t.activeTexture(i.TEXTURE0+D);const ge=ft.getPrimaries(ft.workingColorSpace),ye=S.colorSpace===qt?null:ft.getPrimaries(S.colorSpace),Ne=S.colorSpace===qt||ge===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Oe=h(S)&&p(S.image)===!1;let de=v(S.image,Oe,!1,s.maxTextureSize);de=fe(S,de);const he=p(de)||a,ke=r.convert(S.format,S.colorSpace);let He=r.convert(S.type),Pe=R(S.internalFormat,ke,He,S.colorSpace,S.isVideoTexture);W(q,S,he);let Se;const ze=S.mipmaps,Ke=a&&S.isVideoTexture!==!0&&Pe!==Sa,k=oe.__version===void 0||ce===!0,V=U(S,de,he);if(S.isDepthTexture)Pe=i.DEPTH_COMPONENT,a?S.type===Tn?Pe=i.DEPTH_COMPONENT32F:S.type===wn?Pe=i.DEPTH_COMPONENT24:S.type===Dn?Pe=i.DEPTH24_STENCIL8:Pe=i.DEPTH_COMPONENT16:S.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Un&&Pe===i.DEPTH_COMPONENT&&S.type!==js&&S.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=wn,He=r.convert(S.type)),S.format===Kn&&Pe===i.DEPTH_COMPONENT&&(Pe=i.DEPTH_STENCIL,S.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Dn,He=r.convert(S.type))),k&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Pe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Pe,de.width,de.height,0,ke,He,null));else if(S.isDataTexture)if(ze.length>0&&he){Ke&&k&&t.texStorage2D(i.TEXTURE_2D,V,Pe,ze[0].width,ze[0].height);for(let F=0,w=ze.length;F<w;F++)Se=ze[F],Ke?t.texSubImage2D(i.TEXTURE_2D,F,0,0,Se.width,Se.height,ke,He,Se.data):t.texImage2D(i.TEXTURE_2D,F,Pe,Se.width,Se.height,0,ke,He,Se.data);S.generateMipmaps=!1}else Ke?(k&&t.texStorage2D(i.TEXTURE_2D,V,Pe,de.width,de.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,ke,He,de.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,de.width,de.height,0,ke,He,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ke&&k&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Pe,ze[0].width,ze[0].height,de.depth);for(let F=0,w=ze.length;F<w;F++)Se=ze[F],S.format!==en?ke!==null?Ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Se.width,Se.height,de.depth,ke,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,Pe,Se.width,Se.height,de.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Se.width,Se.height,de.depth,ke,He,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,Pe,Se.width,Se.height,de.depth,0,ke,He,Se.data)}else{Ke&&k&&t.texStorage2D(i.TEXTURE_2D,V,Pe,ze[0].width,ze[0].height);for(let F=0,w=ze.length;F<w;F++)Se=ze[F],S.format!==en?ke!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,Se.width,Se.height,ke,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,F,Pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(i.TEXTURE_2D,F,0,0,Se.width,Se.height,ke,He,Se.data):t.texImage2D(i.TEXTURE_2D,F,Pe,Se.width,Se.height,0,ke,He,Se.data)}else if(S.isDataArrayTexture)Ke?(k&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Pe,de.width,de.height,de.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ke,He,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,de.width,de.height,de.depth,0,ke,He,de.data);else if(S.isData3DTexture)Ke?(k&&t.texStorage3D(i.TEXTURE_3D,V,Pe,de.width,de.height,de.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ke,He,de.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,de.width,de.height,de.depth,0,ke,He,de.data);else if(S.isFramebufferTexture){if(k)if(Ke)t.texStorage2D(i.TEXTURE_2D,V,Pe,de.width,de.height);else{let F=de.width,w=de.height;for(let Q=0;Q<V;Q++)t.texImage2D(i.TEXTURE_2D,Q,Pe,F,w,0,ke,He,null),F>>=1,w>>=1}}else if(ze.length>0&&he){Ke&&k&&t.texStorage2D(i.TEXTURE_2D,V,Pe,ze[0].width,ze[0].height);for(let F=0,w=ze.length;F<w;F++)Se=ze[F],Ke?t.texSubImage2D(i.TEXTURE_2D,F,0,0,ke,He,Se):t.texImage2D(i.TEXTURE_2D,F,Pe,ke,He,Se);S.generateMipmaps=!1}else Ke?(k&&t.texStorage2D(i.TEXTURE_2D,V,Pe,de.width,de.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,He,de)):t.texImage2D(i.TEXTURE_2D,0,Pe,ke,He,de);T(S,he)&&x(q),oe.__version=re.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function Me(y,S,D){if(S.image.length!==6)return;const q=ie(y,S),ce=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+D);const re=n.get(ce);if(ce.version!==re.__version||q===!0){t.activeTexture(i.TEXTURE0+D);const oe=ft.getPrimaries(ft.workingColorSpace),ge=S.colorSpace===qt?null:ft.getPrimaries(S.colorSpace),ye=S.colorSpace===qt||oe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,de=[];for(let F=0;F<6;F++)!Ne&&!Oe?de[F]=v(S.image[F],!1,!0,s.maxCubemapSize):de[F]=Oe?S.image[F].image:S.image[F],de[F]=fe(S,de[F]);const he=de[0],ke=p(he)||a,He=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),Se=R(S.internalFormat,He,Pe,S.colorSpace),ze=a&&S.isVideoTexture!==!0,Ke=re.__version===void 0||q===!0;let k=U(S,he,ke);W(i.TEXTURE_CUBE_MAP,S,ke);let V;if(Ne){ze&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,k,Se,he.width,he.height);for(let F=0;F<6;F++){V=de[F].mipmaps;for(let w=0;w<V.length;w++){const Q=V[w];S.format!==en?He!==null?ze?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,w,0,0,Q.width,Q.height,He,Q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,w,Se,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,w,0,0,Q.width,Q.height,He,Pe,Q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,w,Se,Q.width,Q.height,0,He,Pe,Q.data)}}}else{V=S.mipmaps,ze&&Ke&&(V.length>0&&k++,t.texStorage2D(i.TEXTURE_CUBE_MAP,k,Se,de[0].width,de[0].height));for(let F=0;F<6;F++)if(Oe){ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,de[F].width,de[F].height,He,Pe,de[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Se,de[F].width,de[F].height,0,He,Pe,de[F].data);for(let w=0;w<V.length;w++){const se=V[w].image[F].image;ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,w+1,0,0,se.width,se.height,He,Pe,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,w+1,Se,se.width,se.height,0,He,Pe,se.data)}}else{ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,He,Pe,de[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Se,He,Pe,de[F]);for(let w=0;w<V.length;w++){const Q=V[w];ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,w+1,0,0,He,Pe,Q.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,w+1,Se,He,Pe,Q.image[F])}}}T(S,ke)&&x(i.TEXTURE_CUBE_MAP),re.__version=ce.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function me(y,S,D,q,ce,re){const oe=r.convert(D.format,D.colorSpace),ge=r.convert(D.type),ye=R(D.internalFormat,oe,ge,D.colorSpace);if(!n.get(S).__hasExternalTextures){const Oe=Math.max(1,S.width>>re),de=Math.max(1,S.height>>re);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,re,ye,Oe,de,S.depth,0,oe,ge,null):t.texImage2D(ce,re,ye,Oe,de,0,oe,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),we(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ce,n.get(D).__webglTexture,0,Ce(S)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ce,n.get(D).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(y,S,D){if(i.bindRenderbuffer(i.RENDERBUFFER,y),S.depthBuffer&&!S.stencilBuffer){let q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(D||we(S)){const ce=S.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Tn?q=i.DEPTH_COMPONENT32F:ce.type===wn&&(q=i.DEPTH_COMPONENT24));const re=Ce(S);we(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,q,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,q,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,q,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(S.depthBuffer&&S.stencilBuffer){const q=Ce(S);D&&we(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,S.width,S.height):we(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ce=0;ce<q.length;ce++){const re=q[ce],oe=r.convert(re.format,re.colorSpace),ge=r.convert(re.type),ye=R(re.internalFormat,oe,ge,re.colorSpace),Ne=Ce(S);D&&we(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ye,S.width,S.height):we(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,ye,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ye,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(y,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),M(S.depthTexture,0);const q=n.get(S.depthTexture).__webglTexture,ce=Ce(S);if(S.depthTexture.format===Un)we(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(S.depthTexture.format===Kn)we(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function pe(y){const S=n.get(y),D=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!S.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");De(S.__webglFramebuffer,y)}else if(D){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=i.createRenderbuffer(),Ue(S.__webglDepthbuffer[q],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ue(S.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(y,S,D){const q=n.get(y);S!==void 0&&me(q.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&pe(y)}function z(y){const S=y.texture,D=n.get(y),q=n.get(S);y.addEventListener("dispose",ee),y.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++);const ce=y.isWebGLCubeRenderTarget===!0,re=y.isWebGLMultipleRenderTargets===!0,oe=p(y)||a;if(ce){D.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[ge]=[];for(let ye=0;ye<S.mipmaps.length;ye++)D.__webglFramebuffer[ge][ye]=i.createFramebuffer()}else D.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)D.__webglFramebuffer[ge]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(re)if(s.drawBuffers){const ge=y.texture;for(let ye=0,Ne=ge.length;ye<Ne;ye++){const Oe=n.get(ge[ye]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&we(y)===!1){const ge=re?S:[S];D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ye=0;ye<ge.length;ye++){const Ne=ge[ye];D.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[ye]);const Oe=r.convert(Ne.format,Ne.colorSpace),de=r.convert(Ne.type),he=R(Ne.internalFormat,Oe,de,Ne.colorSpace,y.isXRRenderTarget===!0),ke=Ce(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,he,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,D.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),W(i.TEXTURE_CUBE_MAP,S,oe);for(let ge=0;ge<6;ge++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)me(D.__webglFramebuffer[ge][ye],y,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else me(D.__webglFramebuffer[ge],y,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);T(S,oe)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const ge=y.texture;for(let ye=0,Ne=ge.length;ye<Ne;ye++){const Oe=ge[ye],de=n.get(Oe);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),W(i.TEXTURE_2D,Oe,oe),me(D.__webglFramebuffer,y,Oe,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),T(Oe,oe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?ge=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,q.__webglTexture),W(ge,S,oe),a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)me(D.__webglFramebuffer[ye],y,S,i.COLOR_ATTACHMENT0,ge,ye);else me(D.__webglFramebuffer,y,S,i.COLOR_ATTACHMENT0,ge,0);T(S,oe)&&x(ge),t.unbindTexture()}y.depthBuffer&&pe(y)}function Ae(y){const S=p(y)||a,D=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let q=0,ce=D.length;q<ce;q++){const re=D[q];if(T(re,S)){const oe=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ge=n.get(re).__webglTexture;t.bindTexture(oe,ge),x(oe),t.unbindTexture()}}}function Re(y){if(a&&y.samples>0&&we(y)===!1){const S=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],D=y.width,q=y.height;let ce=i.COLOR_BUFFER_BIT;const re=[],oe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(y),ye=y.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ne=0;Ne<S.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){re.push(i.COLOR_ATTACHMENT0+Ne),y.depthBuffer&&re.push(oe);const Oe=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Oe===!1&&(y.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ne]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[oe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[oe])),ye){const de=n.get(S[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,D,q,0,0,D,q,ce,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Ne=0;Ne<S.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ne]);const Oe=n.get(S[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Ce(y){return Math.min(s.maxSamples,y.samples)}function we(y){const S=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(y){const S=o.render.frame;d.get(y)!==S&&(d.set(y,S),y.update())}function fe(y,S){const D=y.colorSpace,q=y.format,ce=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Js||D!==dn&&D!==qt&&(ft.getTransfer(D)===mt?a===!1?e.has("EXT_sRGB")===!0&&q===en?(y.format=Js,y.minFilter=Yt,y.generateMipmaps=!1):S=to.sRGBToLinear(S):(q!==en||ce!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),S}this.allocateTextureUnit=N,this.resetTextureUnits=ae,this.setTexture2D=M,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=xe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=we}function Mp(i,e,t){const n=t.isWebGL2;function s(r,o=qt){let a;const l=ft.getTransfer(o);if(r===En)return i.UNSIGNED_BYTE;if(r===fa)return i.UNSIGNED_SHORT_4_4_4_4;if(r===pa)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Fc)return i.BYTE;if(r===Oc)return i.SHORT;if(r===js)return i.UNSIGNED_SHORT;if(r===ua)return i.INT;if(r===wn)return i.UNSIGNED_INT;if(r===Tn)return i.FLOAT;if(r===Ei)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Bc)return i.ALPHA;if(r===en)return i.RGBA;if(r===zc)return i.LUMINANCE;if(r===kc)return i.LUMINANCE_ALPHA;if(r===Un)return i.DEPTH_COMPONENT;if(r===Kn)return i.DEPTH_STENCIL;if(r===Js)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Gc)return i.RED;if(r===ma)return i.RED_INTEGER;if(r===Hc)return i.RG;if(r===ga)return i.RG_INTEGER;if(r===xa)return i.RGBA_INTEGER;if(r===Xs||r===Ys||r===qs||r===$s)if(l===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$s)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_a||r===va||r===ya||r===Ma)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===_a)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===va)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ya)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ma)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sa)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ba||r===Ea)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ba)return l===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ea)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wa||r===Ta||r===Aa||r===Ra||r===Ca||r===Pa||r===La||r===Na||r===Da||r===Ua||r===Ia||r===Fa||r===Oa||r===Ba)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===wa)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ta)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Aa)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ra)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ca)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pa)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===La)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Na)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Da)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ua)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ia)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fa)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oa)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ba)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ks||r===za||r===ka)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ks)return l===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===za)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ka)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vc||r===Ga||r===Ha||r===Va)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ks)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ga)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ha)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Va)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Dn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Sp extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class on extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bp={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ep extends Jn{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,g=null,_=null;const v=t.getContextAttributes();let p=null,h=null;const T=[],x=[],R=new at;let U=null;const P=new Wt;P.layers.enable(1),P.viewport=new gt;const C=new Wt;C.layers.enable(2),C.viewport=new gt;const ee=[P,C],E=new Sp;E.layers.enable(1),E.layers.enable(2);let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=T[W];return ie===void 0&&(ie=new Rr,T[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=T[W];return ie===void 0&&(ie=new Rr,T[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=T[W];return ie===void 0&&(ie=new Rr,T[W]=ie),ie.getHandSpace()};function te(W){const ie=x.indexOf(W.inputSource);if(ie===-1)return;const le=T[ie];le!==void 0&&(le.update(W.inputSource,W.frame,c||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function ae(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",N);for(let W=0;W<T.length;W++){const ie=x[W];ie!==null&&(x[W]=null,T[W].disconnect(ie))}A=null,O=null,e.setRenderTarget(p),g=null,f=null,u=null,s=null,h=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),h=new Fn(g.framebufferWidth,g.framebufferHeight,{format:en,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ie=null,le=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?Kn:Un,le=v.stencil?Dn:wn);const me={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Fn(f.textureWidth,f.textureHeight,{format:en,type:En,depthTexture:new Io(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ue=e.properties.get(h);Ue.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(W){for(let ie=0;ie<W.removed.length;ie++){const le=W.removed[ie],Me=x.indexOf(le);Me>=0&&(x[Me]=null,T[Me].disconnect(le))}for(let ie=0;ie<W.added.length;ie++){const le=W.added[ie];let Me=x.indexOf(le);if(Me===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=x.length){x.push(le),Me=Ue;break}else if(x[Ue]===null){x[Ue]=le,Me=Ue;break}if(Me===-1)break}const me=T[Me];me&&me.connect(le)}}const Y=new G,M=new G;function ne(W,ie,le){Y.setFromMatrixPosition(ie.matrixWorld),M.setFromMatrixPosition(le.matrixWorld);const Me=Y.distanceTo(M),me=ie.projectionMatrix.elements,Ue=le.projectionMatrix.elements,De=me[14]/(me[10]-1),pe=me[14]/(me[10]+1),xe=(me[9]+1)/me[5],z=(me[9]-1)/me[5],Ae=(me[8]-1)/me[0],Re=(Ue[8]+1)/Ue[0],Ce=De*Ae,we=De*Re,Be=Me/(-Ae+Re),fe=Be*-Ae;ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(fe),W.translateZ(Be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const y=De+Be,S=pe+Be,D=Ce-fe,q=we+(Me-fe),ce=xe*pe/S*y,re=z*pe/S*y;W.projectionMatrix.makePerspective(D,q,ce,re,y,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function K(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;E.near=C.near=P.near=W.near,E.far=C.far=P.far=W.far,(A!==E.near||O!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,O=E.far);const ie=W.parent,le=E.cameras;K(E,ie);for(let Me=0;Me<le.length;Me++)K(le[Me],ie);le.length===2?ne(E,P,C):E.projectionMatrix.copy(P.projectionMatrix),j(W,E,ie)};function j(W,ie,le){le===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Qs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)};let B=null;function J(W,ie){if(d=ie.getViewerPose(c||o),_=ie,d!==null){const le=d.views;g!==null&&(e.setRenderTargetFramebuffer(h,g.framebuffer),e.setRenderTarget(h));let Me=!1;le.length!==E.cameras.length&&(E.cameras.length=0,Me=!0);for(let me=0;me<le.length;me++){const Ue=le[me];let De=null;if(g!==null)De=g.getViewport(Ue);else{const xe=u.getViewSubImage(f,Ue);De=xe.viewport,me===0&&(e.setRenderTargetTextures(h,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(h))}let pe=ee[me];pe===void 0&&(pe=new Wt,pe.layers.enable(me),pe.viewport=new gt,ee[me]=pe),pe.matrix.fromArray(Ue.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ue.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(De.x,De.y,De.width,De.height),me===0&&(E.matrix.copy(pe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Me===!0&&E.cameras.push(pe)}}for(let le=0;le<T.length;le++){const Me=x[le],me=T[le];Me!==null&&me!==void 0&&me.update(Me,ie,c||o)}B&&B(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Z=new Ao;Z.setAnimationLoop(J),this.setAnimationLoop=function(W){B=W},this.dispose=function(){}}}function wp(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Eo(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,T,x,R){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),u(p,h)):h.isMeshPhongMaterial?(r(p,h),d(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&g(p,h,R)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),v(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,T,x):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Bt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Bt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=x*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function g(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tp(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,x){const R=x.program;n.uniformBlockBinding(T,R)}function c(T,x){let R=s[T.id];R===void 0&&(_(T),R=d(T),s[T.id]=R,T.addEventListener("dispose",p));const U=x.program;n.updateUBOMapping(T,U);const P=e.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function d(T){const x=u();T.__bindingPointIndex=x;const R=i.createBuffer(),U=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,U,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,R),R}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const x=s[T.id],R=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let P=0,C=R.length;P<C;P++){const ee=Array.isArray(R[P])?R[P]:[R[P]];for(let E=0,A=ee.length;E<A;E++){const O=ee[E];if(g(O,P,E,U)===!0){const te=O.__offset,ae=Array.isArray(O.value)?O.value:[O.value];let N=0;for(let Y=0;Y<ae.length;Y++){const M=ae[Y],ne=v(M);typeof M=="number"||typeof M=="boolean"?(O.__data[0]=M,i.bufferSubData(i.UNIFORM_BUFFER,te+N,O.__data)):M.isMatrix3?(O.__data[0]=M.elements[0],O.__data[1]=M.elements[1],O.__data[2]=M.elements[2],O.__data[3]=0,O.__data[4]=M.elements[3],O.__data[5]=M.elements[4],O.__data[6]=M.elements[5],O.__data[7]=0,O.__data[8]=M.elements[6],O.__data[9]=M.elements[7],O.__data[10]=M.elements[8],O.__data[11]=0):(M.toArray(O.__data,N),N+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(T,x,R,U){const P=T.value,C=x+"_"+R;if(U[C]===void 0)return typeof P=="number"||typeof P=="boolean"?U[C]=P:U[C]=P.clone(),!0;{const ee=U[C];if(typeof P=="number"||typeof P=="boolean"){if(ee!==P)return U[C]=P,!0}else if(ee.equals(P)===!1)return ee.copy(P),!0}return!1}function _(T){const x=T.uniforms;let R=0;const U=16;for(let C=0,ee=x.length;C<ee;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let A=0,O=E.length;A<O;A++){const te=E[A],ae=Array.isArray(te.value)?te.value:[te.value];for(let N=0,Y=ae.length;N<Y;N++){const M=ae[N],ne=v(M),K=R%U;K!==0&&U-K<ne.boundary&&(R+=U-K),te.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=R,R+=ne.storage}}}const P=R%U;return P>0&&(R+=U-P),T.__size=R,T.__cache={},this}function v(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function p(T){const x=T.target;x.removeEventListener("dispose",p);const R=o.indexOf(x.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function h(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class nl{constructor(e={}){const{canvas:t=td(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const h=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const x=this;let R=!1,U=0,P=0,C=null,ee=-1,E=null;const A=new gt,O=new gt;let te=null;const ae=new et(0);let N=0,Y=t.width,M=t.height,ne=1,K=null,j=null;const B=new gt(0,0,Y,M),J=new gt(0,0,Y,M);let Z=!1;const W=new vr;let ie=!1,le=!1,Me=null;const me=new yt,Ue=new at,De=new G,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return C===null?ne:1}let z=n;function Ae(b,I){for(let H=0;H<b.length;H++){const $=b[H],X=t.getContext($,I);if(X!==null)return X}return null}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Os}`),t.addEventListener("webglcontextlost",F,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",Q,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),z=Ae(I,b),z===null)throw Ae(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Re,Ce,we,Be,fe,y,S,D,q,ce,re,oe,ge,ye,Ne,Oe,de,he,ke,He,Pe,Se,ze,Ke;function k(){Re=new Iu(z),Ce=new Cu(z,Re,e),Re.init(Ce),Se=new Mp(z,Re,Ce),we=new vp(z,Re,Ce),Be=new Bu(z),fe=new rp,y=new yp(z,Re,we,fe,Ce,Se,Be),S=new Lu(x),D=new Uu(x),q=new Td(z,Ce),ze=new Au(z,Re,q,Ce),ce=new Fu(z,q,Be,ze),re=new Hu(z,ce,q,Be),ke=new Gu(z,Ce,y),Oe=new Pu(fe),oe=new sp(x,S,D,Re,Ce,ze,Oe),ge=new wp(x,fe),ye=new op,Ne=new fp(Re,Ce),he=new Tu(x,S,D,we,re,f,l),de=new _p(x,re,Ce),Ke=new Tp(z,Be,Ce,we),He=new Ru(z,Re,Be,Ce),Pe=new Ou(z,Re,Be,Ce),Be.programs=oe.programs,x.capabilities=Ce,x.extensions=Re,x.properties=fe,x.renderLists=ye,x.shadowMap=de,x.state=we,x.info=Be}k();const V=new Ep(x,z);this.xr=V,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=Re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(Y,M,!1))},this.getSize=function(b){return b.set(Y,M)},this.setSize=function(b,I,H=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,M=I,t.width=Math.floor(b*ne),t.height=Math.floor(I*ne),H===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(Y*ne,M*ne).floor()},this.setDrawingBufferSize=function(b,I,H){Y=b,M=I,ne=H,t.width=Math.floor(b*H),t.height=Math.floor(I*H),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(B)},this.setViewport=function(b,I,H,$){b.isVector4?B.set(b.x,b.y,b.z,b.w):B.set(b,I,H,$),we.viewport(A.copy(B).multiplyScalar(ne).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,I,H,$){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,I,H,$),we.scissor(O.copy(J).multiplyScalar(ne).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(b){we.setScissorTest(Z=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(b=!0,I=!0,H=!0){let $=0;if(b){let X=!1;if(C!==null){const ve=C.texture.format;X=ve===xa||ve===ga||ve===ma}if(X){const ve=C.texture.type,Ie=ve===En||ve===wn||ve===js||ve===Dn||ve===fa||ve===pa,Ve=he.getClearColor(),je=he.getClearAlpha(),We=Ve.r,qe=Ve.g,Ze=Ve.b;Ie?(g[0]=We,g[1]=qe,g[2]=Ze,g[3]=je,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=We,_[1]=qe,_[2]=Ze,_[3]=je,z.clearBufferiv(z.COLOR,0,_))}else $|=z.COLOR_BUFFER_BIT}I&&($|=z.DEPTH_BUFFER_BIT),H&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",F,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),ye.dispose(),Ne.dispose(),fe.dispose(),S.dispose(),D.dispose(),re.dispose(),ze.dispose(),Ke.dispose(),oe.dispose(),V.dispose(),V.removeEventListener("sessionstart",ct),V.removeEventListener("sessionend",Je),Me&&(Me.dispose(),Me=null),ht.stop()};function F(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=Be.autoReset,I=de.enabled,H=de.autoUpdate,$=de.needsUpdate,X=de.type;k(),Be.autoReset=b,de.enabled=I,de.autoUpdate=H,de.needsUpdate=$,de.type=X}function Q(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){const I=b.target;I.removeEventListener("dispose",se),_e(I)}function _e(b){be(b),fe.remove(b)}function be(b){const I=fe.get(b).programs;I!==void 0&&(I.forEach(function(H){oe.releaseProgram(H)}),b.isShaderMaterial&&oe.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,H,$,X,ve){I===null&&(I=pe);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,Ve=Le(b,I,H,$,X);we.setMaterial($,Ie);let je=H.index,We=1;if($.wireframe===!0){if(je=ce.getWireframeAttribute(H),je===void 0)return;We=2}const qe=H.drawRange,Ze=H.attributes.position;let xt=qe.start*We,Xt=(qe.start+qe.count)*We;ve!==null&&(xt=Math.max(xt,ve.start*We),Xt=Math.min(Xt,(ve.start+ve.count)*We)),je!==null?(xt=Math.max(xt,0),Xt=Math.min(Xt,je.count)):Ze!=null&&(xt=Math.max(xt,0),Xt=Math.min(Xt,Ze.count));const Rt=Xt-xt;if(Rt<0||Rt===1/0)return;ze.setup(X,$,Ve,H,je);let _n,_t=He;if(je!==null&&(_n=q.get(je),_t=Pe,_t.setIndex(_n)),X.isMesh)$.wireframe===!0?(we.setLineWidth($.wireframeLinewidth*xe()),_t.setMode(z.LINES)):_t.setMode(z.TRIANGLES);else if(X.isLine){let it=$.linewidth;it===void 0&&(it=1),we.setLineWidth(it*xe()),X.isLineSegments?_t.setMode(z.LINES):X.isLineLoop?_t.setMode(z.LINE_LOOP):_t.setMode(z.LINE_STRIP)}else X.isPoints?_t.setMode(z.POINTS):X.isSprite&&_t.setMode(z.TRIANGLES);if(X.isBatchedMesh)_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)_t.renderInstances(xt,Rt,X.count);else if(H.isInstancedBufferGeometry){const it=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Fr=Math.min(H.instanceCount,it);_t.renderInstances(xt,Rt,Fr)}else _t.render(xt,Rt)};function Ge(b,I,H){b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=Bt,b.needsUpdate=!0,xn(b,I,H),b.side=Mn,b.needsUpdate=!0,xn(b,I,H),b.side=cn):xn(b,I,H)}this.compile=function(b,I,H=null){H===null&&(H=b),p=Ne.get(H),p.init(),T.push(p),H.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),b!==H&&b.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(x._useLegacyLights);const $=new Set;return b.traverse(function(X){const ve=X.material;if(ve)if(Array.isArray(ve))for(let Ie=0;Ie<ve.length;Ie++){const Ve=ve[Ie];Ge(Ve,H,X),$.add(Ve)}else Ge(ve,H,X),$.add(ve)}),T.pop(),p=null,$},this.compileAsync=function(b,I,H=null){const $=this.compile(b,I,H);return new Promise(X=>{function ve(){if($.forEach(function(Ie){fe.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){X(b);return}setTimeout(ve,10)}Re.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let $e=null;function st(b){$e&&$e(b)}function ct(){ht.stop()}function Je(){ht.start()}const ht=new Ao;ht.setAnimationLoop(st),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(b){$e=b,V.setAnimationLoop(b),b===null?ht.stop():ht.start()},V.addEventListener("sessionstart",ct),V.addEventListener("sessionend",Je),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,C),p=Ne.get(b,T.length),p.init(),T.push(p),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(me),le=this.localClippingEnabled,ie=Oe.init(this.clippingPlanes,le),v=ye.get(b,h.length),v.init(),h.push(v),ut(b,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(K,j),this.info.render.frame++,ie===!0&&Oe.beginShadows();const H=p.state.shadowsArray;if(de.render(H,b,I),ie===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(v,b),p.setupLights(x._useLegacyLights),I.isArrayCamera){const $=I.cameras;for(let X=0,ve=$.length;X<ve;X++){const Ie=$[X];Ot(v,b,Ie,Ie.viewport)}}else Ot(v,b,I);C!==null&&(y.updateMultisampleRenderTarget(C),y.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,I),ze.resetDefaultState(),ee=-1,E=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function ut(b,I,H,$){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){$&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Ie=re.update(b),Ve=b.material;Ve.visible&&v.push(b,Ie,Ve,H,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const Ie=re.update(b),Ve=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),De.copy(Ie.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(Ve)){const je=Ie.groups;for(let We=0,qe=je.length;We<qe;We++){const Ze=je[We],xt=Ve[Ze.materialIndex];xt&&xt.visible&&v.push(b,Ie,xt,H,De.z,Ze)}}else Ve.visible&&v.push(b,Ie,Ve,H,De.z,null)}}const ve=b.children;for(let Ie=0,Ve=ve.length;Ie<Ve;Ie++)ut(ve[Ie],I,H,$)}function Ot(b,I,H,$){const X=b.opaque,ve=b.transmissive,Ie=b.transparent;p.setupLightsView(H),ie===!0&&Oe.setGlobalState(x.clippingPlanes,H),ve.length>0&&pt(X,ve,I,H),$&&we.viewport(A.copy($)),X.length>0&&ot(X,I,H),ve.length>0&&ot(ve,I,H),Ie.length>0&&ot(Ie,I,H),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function pt(b,I,H,$){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const ve=Ce.isWebGL2;Me===null&&(Me=new Fn(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Ei:En,minFilter:bi,samples:ve?4:0})),x.getDrawingBufferSize(Ue),ve?Me.setSize(Ue.x,Ue.y):Me.setSize(tr(Ue.x),tr(Ue.y));const Ie=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(ae),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Ve=x.toneMapping;x.toneMapping=bn,ot(b,H,$),y.updateMultisampleRenderTarget(Me),y.updateRenderTargetMipmap(Me);let je=!1;for(let We=0,qe=I.length;We<qe;We++){const Ze=I[We],xt=Ze.object,Xt=Ze.geometry,Rt=Ze.material,_n=Ze.group;if(Rt.side===cn&&xt.layers.test($.layers)){const _t=Rt.side;Rt.side=Bt,Rt.needsUpdate=!0,Tt(xt,H,$,Xt,Rt,_n),Rt.side=_t,Rt.needsUpdate=!0,je=!0}}je===!0&&(y.updateMultisampleRenderTarget(Me),y.updateRenderTargetMipmap(Me)),x.setRenderTarget(Ie),x.setClearColor(ae,N),x.toneMapping=Ve}function ot(b,I,H){const $=I.isScene===!0?I.overrideMaterial:null;for(let X=0,ve=b.length;X<ve;X++){const Ie=b[X],Ve=Ie.object,je=Ie.geometry,We=$===null?Ie.material:$,qe=Ie.group;Ve.layers.test(H.layers)&&Tt(Ve,I,H,je,We,qe)}}function Tt(b,I,H,$,X,ve){b.onBeforeRender(x,I,H,$,X,ve),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(x,I,H,$,b,ve),X.transparent===!0&&X.side===cn&&X.forceSinglePass===!1?(X.side=Bt,X.needsUpdate=!0,x.renderBufferDirect(H,I,$,X,b,ve),X.side=Mn,X.needsUpdate=!0,x.renderBufferDirect(H,I,$,X,b,ve),X.side=cn):x.renderBufferDirect(H,I,$,X,b,ve),b.onAfterRender(x,I,H,$,X,ve)}function xn(b,I,H){I.isScene!==!0&&(I=pe);const $=fe.get(b),X=p.state.lights,ve=p.state.shadowsArray,Ie=X.state.version,Ve=oe.getParameters(b,X.state,ve,I,H),je=oe.getProgramCacheKey(Ve);let We=$.programs;$.environment=b.isMeshStandardMaterial?I.environment:null,$.fog=I.fog,$.envMap=(b.isMeshStandardMaterial?D:S).get(b.envMap||$.environment),We===void 0&&(b.addEventListener("dispose",se),We=new Map,$.programs=We);let qe=We.get(je);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===Ie)return ue(b,Ve),qe}else Ve.uniforms=oe.getUniforms(b),b.onBuild(H,Ve,x),b.onBeforeCompile(Ve,x),qe=oe.acquireProgram(Ve,je),We.set(je,qe),$.uniforms=Ve.uniforms;const Ze=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=Oe.uniform),ue(b,Ve),$.needsLights=lt(b),$.lightsStateVersion=Ie,$.needsLights&&(Ze.ambientLightColor.value=X.state.ambient,Ze.lightProbe.value=X.state.probe,Ze.directionalLights.value=X.state.directional,Ze.directionalLightShadows.value=X.state.directionalShadow,Ze.spotLights.value=X.state.spot,Ze.spotLightShadows.value=X.state.spotShadow,Ze.rectAreaLights.value=X.state.rectArea,Ze.ltc_1.value=X.state.rectAreaLTC1,Ze.ltc_2.value=X.state.rectAreaLTC2,Ze.pointLights.value=X.state.point,Ze.pointLightShadows.value=X.state.pointShadow,Ze.hemisphereLights.value=X.state.hemi,Ze.directionalShadowMap.value=X.state.directionalShadowMap,Ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ze.spotShadowMap.value=X.state.spotShadowMap,Ze.spotLightMatrix.value=X.state.spotLightMatrix,Ze.spotLightMap.value=X.state.spotLightMap,Ze.pointShadowMap.value=X.state.pointShadowMap,Ze.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=qe,$.uniformsList=null,qe}function L(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=bs.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function ue(b,I){const H=fe.get(b);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Le(b,I,H,$,X){I.isScene!==!0&&(I=pe),y.resetTextureUnits();const ve=I.fog,Ie=$.isMeshStandardMaterial?I.environment:null,Ve=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:dn,je=($.isMeshStandardMaterial?D:S).get($.envMap||Ie),We=$.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qe=!!H.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ze=!!H.morphAttributes.position,xt=!!H.morphAttributes.normal,Xt=!!H.morphAttributes.color;let Rt=bn;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Rt=x.toneMapping);const _n=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=_n!==void 0?_n.length:0,it=fe.get($),Fr=p.state.lights;if(ie===!0&&(le===!0||b!==E)){const Jt=b===E&&$.id===ee;Oe.setState($,b,Jt)}let vt=!1;$.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Fr.state.version||it.outputColorSpace!==Ve||X.isBatchedMesh&&it.batching===!1||!X.isBatchedMesh&&it.batching===!0||X.isInstancedMesh&&it.instancing===!1||!X.isInstancedMesh&&it.instancing===!0||X.isSkinnedMesh&&it.skinning===!1||!X.isSkinnedMesh&&it.skinning===!0||X.isInstancedMesh&&it.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&it.instancingColor===!1&&X.instanceColor!==null||it.envMap!==je||$.fog===!0&&it.fog!==ve||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Oe.numPlanes||it.numIntersection!==Oe.numIntersection)||it.vertexAlphas!==We||it.vertexTangents!==qe||it.morphTargets!==Ze||it.morphNormals!==xt||it.morphColors!==Xt||it.toneMapping!==Rt||Ce.isWebGL2===!0&&it.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,it.__version=$.version);let jn=it.currentProgram;vt===!0&&(jn=xn($,I,X));let ml=!1,Bi=!1,Or=!1;const Dt=jn.getUniforms(),Xn=it.uniforms;if(we.useProgram(jn.program)&&(ml=!0,Bi=!0,Or=!0),$.id!==ee&&(ee=$.id,Bi=!0),ml||E!==b){Dt.setValue(z,"projectionMatrix",b.projectionMatrix),Dt.setValue(z,"viewMatrix",b.matrixWorldInverse);const Jt=Dt.map.cameraPosition;Jt!==void 0&&Jt.setValue(z,De.setFromMatrixPosition(b.matrixWorld)),Ce.logarithmicDepthBuffer&&Dt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Dt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Bi=!0,Or=!0)}if(X.isSkinnedMesh){Dt.setOptional(z,X,"bindMatrix"),Dt.setOptional(z,X,"bindMatrixInverse");const Jt=X.skeleton;Jt&&(Ce.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Dt.setValue(z,"boneTexture",Jt.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Dt.setOptional(z,X,"batchingTexture"),Dt.setValue(z,"batchingTexture",X._matricesTexture,y));const Br=H.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0&&Ce.isWebGL2===!0)&&ke.update(X,H,jn),(Bi||it.receiveShadow!==X.receiveShadow)&&(it.receiveShadow=X.receiveShadow,Dt.setValue(z,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Xn.envMap.value=je,Xn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Bi&&(Dt.setValue(z,"toneMappingExposure",x.toneMappingExposure),it.needsLights&&Xe(Xn,Or),ve&&$.fog===!0&&ge.refreshFogUniforms(Xn,ve),ge.refreshMaterialUniforms(Xn,$,ne,M,Me),bs.upload(z,L(it),Xn,y)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(bs.upload(z,L(it),Xn,y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Dt.setValue(z,"center",X.center),Dt.setValue(z,"modelViewMatrix",X.modelViewMatrix),Dt.setValue(z,"normalMatrix",X.normalMatrix),Dt.setValue(z,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Jt=$.uniformsGroups;for(let zr=0,Up=Jt.length;zr<Up;zr++)if(Ce.isWebGL2){const gl=Jt[zr];Ke.update(gl,jn),Ke.bind(gl,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function Xe(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function lt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,I,H){fe.get(b.texture).__webglTexture=I,fe.get(b.depthTexture).__webglTexture=H;const $=fe.get(b);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=H===void 0,$.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){const H=fe.get(b);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,H=0){C=b,U=I,P=H;let $=!0,X=null,ve=!1,Ie=!1;if(b){const je=fe.get(b);je.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(z.FRAMEBUFFER,null),$=!1):je.__webglFramebuffer===void 0?y.setupRenderTarget(b):je.__hasExternalTextures&&y.rebindTextures(b,fe.get(b.texture).__webglTexture,fe.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const qe=fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qe[I])?X=qe[I][H]:X=qe[I],ve=!0):Ce.isWebGL2&&b.samples>0&&y.useMultisampledRTT(b)===!1?X=fe.get(b).__webglMultisampledFramebuffer:Array.isArray(qe)?X=qe[H]:X=qe,A.copy(b.viewport),O.copy(b.scissor),te=b.scissorTest}else A.copy(B).multiplyScalar(ne).floor(),O.copy(J).multiplyScalar(ne).floor(),te=Z;if(we.bindFramebuffer(z.FRAMEBUFFER,X)&&Ce.drawBuffers&&$&&we.drawBuffers(b,X),we.viewport(A),we.scissor(O),we.setScissorTest(te),ve){const je=fe.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,je.__webglTexture,H)}else if(Ie){const je=fe.get(b.texture),We=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.__webglTexture,H||0,We)}ee=-1},this.readRenderTargetPixels=function(b,I,H,$,X,ve,Ie){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve){we.bindFramebuffer(z.FRAMEBUFFER,Ve);try{const je=b.texture,We=je.format,qe=je.type;if(We!==en&&Se.convert(We)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=qe===Ei&&(Re.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Re.has("EXT_color_buffer_float"));if(qe!==En&&Se.convert(qe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===Tn&&(Ce.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-$&&H>=0&&H<=b.height-X&&z.readPixels(I,H,$,X,Se.convert(We),Se.convert(qe),ve)}finally{const je=C!==null?fe.get(C).__webglFramebuffer:null;we.bindFramebuffer(z.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(b,I,H=0){const $=Math.pow(2,-H),X=Math.floor(I.image.width*$),ve=Math.floor(I.image.height*$);y.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,b.x,b.y,X,ve),we.unbindTexture()},this.copyTextureToTexture=function(b,I,H,$=0){const X=I.image.width,ve=I.image.height,Ie=Se.convert(H.format),Ve=Se.convert(H.type);y.setTexture2D(H,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$,b.x,b.y,X,ve,Ie,Ve,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,Ie,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,$,b.x,b.y,Ie,Ve,I.image),$===0&&H.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(b,I,H,$,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=b.max.x-b.min.x+1,Ie=b.max.y-b.min.y+1,Ve=b.max.z-b.min.z+1,je=Se.convert($.format),We=Se.convert($.type);let qe;if($.isData3DTexture)y.setTexture3D($,0),qe=z.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)y.setTexture2DArray($,0),qe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);const Ze=z.getParameter(z.UNPACK_ROW_LENGTH),xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Xt=z.getParameter(z.UNPACK_SKIP_PIXELS),Rt=z.getParameter(z.UNPACK_SKIP_ROWS),_n=z.getParameter(z.UNPACK_SKIP_IMAGES),_t=H.isCompressedTexture?H.mipmaps[X]:H.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?z.texSubImage3D(qe,X,I.x,I.y,I.z,ve,Ie,Ve,je,We,_t.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(qe,X,I.x,I.y,I.z,ve,Ie,Ve,je,_t.data)):z.texSubImage3D(qe,X,I.x,I.y,I.z,ve,Ie,Ve,je,We,_t),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ze),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Xt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,_n),X===0&&$.generateMipmaps&&z.generateMipmap(qe),we.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){U=0,P=0,C=null,we.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zs?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===ji?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ct?In:Wa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===In?Ct:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ap extends nl{}Ap.prototype.isWebGL1Renderer=!0;class il extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ui extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sl=new G,rl=new G,al=new yt,Cr=new ro,Es=new ns;class Rp extends Pt{constructor(e=new Vt,t=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sl.fromBufferAttribute(t,s-1),rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sl.distanceTo(rl);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;al.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(al);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new G,d=new G,u=new G,f=new G,g=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const h=Math.max(0,o.start),T=Math.min(_.count,o.start+o.count);for(let x=h,R=T-1;x<R;x+=g){const U=_.getX(x),P=_.getX(x+1);if(c.fromBufferAttribute(p,U),d.fromBufferAttribute(p,P),Cr.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const ee=e.ray.origin.distanceTo(f);ee<e.near||ee>e.far||t.push({distance:ee,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),T=Math.min(p.count,o.start+o.count);for(let x=h,R=T-1;x<R;x+=g){if(c.fromBufferAttribute(p,x),d.fromBufferAttribute(p,x+1),Cr.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ol=new G,ll=new G;class ws extends Rp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ol.fromBufferAttribute(t,s),ll.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ol.distanceTo(ll);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ii extends kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wt extends Vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],f=[],g=[];let _=0;const v=[],p=n/2;let h=0;T(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(g,2));function T(){const R=new G,U=new G;let P=0;const C=(t-e)/n;for(let ee=0;ee<=r;ee++){const E=[],A=ee/r,O=A*(t-e)+e;for(let te=0;te<=s;te++){const ae=te/s,N=ae*l+a,Y=Math.sin(N),M=Math.cos(N);U.x=O*Y,U.y=-A*n+p,U.z=O*M,u.push(U.x,U.y,U.z),R.set(Y,C,M).normalize(),f.push(R.x,R.y,R.z),g.push(ae,1-A),E.push(_++)}v.push(E)}for(let ee=0;ee<s;ee++)for(let E=0;E<r;E++){const A=v[E][ee],O=v[E+1][ee],te=v[E+1][ee+1],ae=v[E][ee+1];d.push(A,O,ae),d.push(O,te,ae),P+=6}c.addGroup(h,P,0),h+=P}function x(R){const U=_,P=new at,C=new G;let ee=0;const E=R===!0?e:t,A=R===!0?1:-1;for(let te=1;te<=s;te++)u.push(0,p*A,0),f.push(0,A,0),g.push(.5,.5),_++;const O=_;for(let te=0;te<=s;te++){const N=te/s*l+a,Y=Math.cos(N),M=Math.sin(N);C.x=E*M,C.y=p*A,C.z=E*Y,u.push(C.x,C.y,C.z),f.push(0,A,0),P.x=Y*.5+.5,P.y=M*.5*A+.5,g.push(P.x,P.y),_++}for(let te=0;te<s;te++){const ae=U+te,N=O+te;R===!0?d.push(N,N+1,ae):d.push(N+1,N,ae),ee+=3}c.addGroup(h,ee,R===!0?1:2),h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ts=new G,As=new G,Pr=new G,Rs=new $t;class Lr extends Vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ki*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),f={},g=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:p,c:h}=Rs;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),Rs.getNormal(Pr),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){const x=(T+1)%3,R=u[T],U=u[x],P=Rs[d[T]],C=Rs[d[x]],ee=`${R}_${U}`,E=`${U}_${R}`;E in f&&f[E]?(Pr.dot(f[E].normal)<=r&&(g.push(P.x,P.y,P.z),g.push(C.x,C.y,C.z)),f[E]=null):ee in f||(f[ee]={index0:c[T],index1:c[x],normal:Pr.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:p}=f[_];Ts.fromBufferAttribute(a,v),As.fromBufferAttribute(a,p),g.push(Ts.x,Ts.y,Ts.z),g.push(As.x,As.y,As.z)}this.setAttribute("position",new Mt(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Cs extends Vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new G,f=new G,g=[],_=[],v=[],p=[];for(let h=0;h<=n;h++){const T=[],x=h/n;let R=0;h===0&&o===0?R=.5/t:h===n&&l===Math.PI&&(R=-.5/t);for(let U=0;U<=t;U++){const P=U/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(P+R,1-x),T.push(c++)}d.push(T)}for(let h=0;h<n;h++)for(let T=0;T<t;T++){const x=d[h][T+1],R=d[h][T],U=d[h+1][T],P=d[h+1][T+1];(h!==0||o>0)&&g.push(x,R,P),(h!==n-1||l<Math.PI)&&g.push(R,U,P)}this.setIndex(g),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fi extends Vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],d=new G,u=new G,f=new G;for(let g=0;g<=n;g++)for(let _=0;_<=s;_++){const v=_/s*r,p=g/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=s;_++){const v=(s+1)*g+_-1,p=(s+1)*(g-1)+_-1,h=(s+1)*(g-1)+_,T=(s+1)*g+_;o.push(v,p,T),o.push(p,h,T)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qe extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jt extends Qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nr extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Dr=new yt,cl=new G,dl=new G;class hl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(cl),dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dl),t.updateMatrixWorld(),Dr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ul=new yt,Oi=new G,Ur=new G;class Cp extends hl{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oi),Ur.copy(n.position),Ur.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ur),n.updateMatrixWorld(),s.makeTranslation(-Oi.x,-Oi.y,-Oi.z),ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul)}}class Ps extends Nr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pp extends hl{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ir extends Nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Pp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lp extends Nr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Np extends ws{constructor(e=10,t=10,n=4473924,s=8947848){n=new et(n),s=new et(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,g=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=f===r?n:s;v.toArray(c,g),g+=3,v.toArray(c,g),g+=3,v.toArray(c,g),g+=3,v.toArray(c,g),g+=3}const d=new Vt;d.setAttribute("position",new Mt(l,3)),d.setAttribute("color",new Mt(c,3));const u=new Ui({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Os}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Os);const fl={default:{position:{x:1050,y:800,z:1050},target:{x:0,y:100,z:0},name:"Default",icon:"🏠"},top:{position:{x:0,y:1200,z:1},target:{x:0,y:0,z:0},name:"Top View",icon:"⬇"},front:{position:{x:0,y:300,z:1e3},target:{x:0,y:100,z:0},name:"Front",icon:"⬆"},side:{position:{x:1e3,y:300,z:0},target:{x:0,y:100,z:0},name:"Side",icon:"➡"},corner:{position:{x:-900,y:700,z:-900},target:{x:0,y:100,z:0},name:"Corner",icon:"↖"}},pl=({floor:i,isOpen:e,onClose:t})=>{const n=Fe.useRef(null),s=Fe.useRef(null),r=Fe.useRef(null),o=Fe.useRef(null),a=Fe.useRef(null),[l,c]=Fe.useState(!1),[d,u]=Fe.useState("default"),[f,g]=Fe.useState(!1),_=Fe.useRef(.003),v=Fe.useRef(null),p=x=>{if(!r.current||f)return;const R=fl[x],U=r.current;v.current={startPos:U.position.clone(),endPos:new G(R.position.x,R.position.y,R.position.z),startTarget:new G(0,100,0),endTarget:new G(R.target.x,R.target.y,R.target.z),progress:0},g(!0),u(x),c(!1)},h=x=>{if(!r.current||f)return;const R=r.current,U=Math.sqrt(R.position.x**2+R.position.z**2),P=Math.atan2(R.position.z,R.position.x);switch(x){case"left":const C=P+.2;R.position.x=U*Math.cos(C),R.position.z=U*Math.sin(C);break;case"right":const ee=P-.2;R.position.x=U*Math.cos(ee),R.position.z=U*Math.sin(ee);break;case"up":R.position.y=Math.min(R.position.y+50,900);break;case"down":R.position.y=Math.max(R.position.y-50,100);break}R.lookAt(0,100,0)},T=x=>{!r.current||f||(r.current.position.multiplyScalar(x),r.current.lookAt(0,100,0))};return Fe.useEffect(()=>{if(!e||!n.current)return;const x=new il;x.background=new et(14608111),s.current=x;const R=new Wt(45,n.current.clientWidth/n.current.clientHeight,.1,1e4);R.position.set(1050,800,1050),R.lookAt(0,100,0),r.current=R;const U=new nl({antialias:!0,alpha:!0});U.setSize(n.current.clientWidth,n.current.clientHeight),U.shadowMap.enabled=!0,U.shadowMap.type=na,U.toneMapping=ca,U.toneMappingExposure=1.2,n.current.appendChild(U.domElement),o.current=U;const P=new Er(U),C=new il;C.background=new et(16777215);const ee=P.fromScene(C).texture;x.environment=ee,P.dispose(),x.add(new Lp(16777215,.6));const E=new Ir(16777215,.8);E.position.set(400,600,300),E.castShadow=!0,E.shadow.mapSize.width=4096,E.shadow.mapSize.height=4096,E.shadow.camera.left=E.shadow.camera.bottom=-700,E.shadow.camera.right=E.shadow.camera.top=700,E.shadow.bias=-1e-4,x.add(E);const A=new Ir(16777215,.3);A.position.set(-400,400,-300),x.add(A);const O=new Ir(16777215,.2);O.position.set(0,300,-500),x.add(O);const te=new Ee(new Zt(1200,1200),new Qe({color:13684949,roughness:.8,metalness:.2}));te.rotation.x=-Math.PI/2,te.receiveShadow=!0,x.add(te);const ae=new Np(3e3,150,10526888,12105920);ae.position.y=1,x.add(ae),i.walls.forEach(M=>{const ne=Math.sqrt(Math.pow(M.endX-M.startX,2)+Math.pow(M.endY-M.startY,2)),K=Math.atan2(M.endY-M.startY,M.endX-M.startX),j=M.type==="window"?80:120,B=M.startX+(M.endX-M.startX)/2-400,J=-(M.startY+(M.endY-M.startY)/2-400);if(M.type==="door"){const Z=new on,W=ne,ie=j,le=M.thickness*.8,Me=new Qe({color:3812901,roughness:.9,metalness:0}),me=8,Ue=new Ee(new Ye(W,me,M.thickness+4),Me);Ue.position.y=ie/2-me/2,Z.add(Ue);const De=new Ee(new Ye(W,me,M.thickness+4),Me);De.position.y=-ie/2+me/2,Z.add(De);const pe=new Ee(new Ye(me,ie,M.thickness+4),Me);pe.position.x=-W/2+me/2,Z.add(pe);const xe=pe.clone();xe.position.x=W/2-me/2,Z.add(xe);const z=new Qe({color:5125166,roughness:.85,metalness:0}),Ae=new Qe({color:10400693,transparent:!0,opacity:.5,roughness:.95,metalness:0}),Re=(W-me*2-4)/2,Ce=ie-me*2-4,we=ge=>{const ye=new on,Ne=new Ee(new Ye(Re,Ce,le),z);ye.add(Ne);const Oe=new Ee(new Zt(Re*.8,Ce*.85),Ae);Oe.position.set(0,0,le/2+.1),ye.add(Oe);const de=new Qe({color:8947848,metalness:.4,roughness:.7}),he=new Ee(new wt(.6,.6,12,12),de);return he.rotation.z=Math.PI/2,he.position.set(ge>0?-Re*.35:Re*.35,0,le/2+1.5),ye.add(he),ye.position.x=ge,ye},Be=we(-Re/2),fe=we(Re/2);Z.add(Be),Z.add(fe);const y=14,S=new Zt(W*.9,y),D=document.createElement("canvas");D.width=512,D.height=128;const q=D.getContext("2d");q&&(q.fillStyle="#3a2e25",q.fillRect(0,0,D.width,D.height),q.font="bold 60px Arial",q.fillStyle="#f5d590",q.textAlign="center",q.textBaseline="middle",q.fillText("WELCOME",D.width/2,D.height/2));const ce=new Ii(D),re=new Qe({map:ce,roughness:.8,metalness:.1}),oe=new Ee(S,re);oe.position.set(0,ie/2-me-y/2-4,M.thickness/2+2),Z.add(oe),Z.position.set(B,ie/2,J),Z.rotation.y=-K,Z.castShadow=!0,Z.receiveShadow=!0,x.add(Z)}else if(M.type==="window"){const Z=ne>20?ne:120,W=j,ie=W*.45,le=W*.65,Me=W*.1,me=W*.3,Ue=new Qe({color:13158608,roughness:.85,metalness:.05}),De=new jt({color:2763306,metalness:.95,roughness:.2,clearcoat:.8,clearcoatRoughness:.1}),pe=new jt({color:15135487,transparent:!0,opacity:.4,transmission:.85,thickness:1.5,roughness:.05,metalness:.05,ior:1.52,envMapIntensity:1,clearcoat:.8,clearcoatRoughness:.1,reflectivity:.5}),xe=new Ee(new Ye(Z,ie,M.thickness),Ue);xe.position.set(B,ie/2,J),xe.rotation.y=-K,xe.receiveShadow=!0,xe.castShadow=!0,x.add(xe);const z=ie+le/2,Ae=4,Re=Math.max(2,Math.floor(Z/80)),Ce=(Z-Ae*(Re+1))/Re;for(let D=0;D<Re;D++){const q=-Z/2+Ae+Ce/2+D*(Ce+Ae),ce=B+q*Math.cos(-K),re=J+q*Math.sin(-K),oe=new Ee(new Ye(Ce-2,le-Ae*2,1),pe);if(oe.position.set(ce,z,re),oe.rotation.y=-K,oe.castShadow=!1,oe.receiveShadow=!1,x.add(oe),D<Re-1){const ge=-Z/2+Ae+(D+1)*Ce+(D+.5)*Ae,ye=B+ge*Math.cos(-K),Ne=J+ge*Math.sin(-K),Oe=new Ee(new Ye(Ae,le,M.thickness+3),De);Oe.position.set(ye,z,Ne),Oe.rotation.y=-K,Oe.castShadow=!0,x.add(Oe)}}const we=ie+le+Me/2,Be=new Ee(new Ye(Z-Ae*2,Me-Ae,1),pe);Be.position.set(B,we,J),Be.rotation.y=-K,Be.castShadow=!1,x.add(Be);const fe=new Ee(new Ye(Z,Ae,M.thickness+2),De);fe.position.set(B,ie+le+Ae/2,J),fe.rotation.y=-K,fe.castShadow=!0,x.add(fe);const y=new Ee(new Ye(Z,Ae,M.thickness+2),De);y.position.set(B,ie+le+Me+Ae/2,J),y.rotation.y=-K,y.castShadow=!0,x.add(y);const S=new Ee(new Ye(Z,me,M.thickness),Ue);S.position.set(B,ie+le+Me+me/2,J),S.rotation.y=-K,S.castShadow=!0,S.receiveShadow=!0,x.add(S)}else{const Z=new Ee(new Ye(ne,j,M.thickness),new Qe({color:12105920,roughness:.9,metalness:.05}));Z.position.set(B,j/2,J),Z.rotation.y=-K,Z.castShadow=!0,Z.receiveShadow=!0,x.add(Z)}}),i.fixedElements.forEach(M=>{const ne=M.x-400+M.width/2,K=-(M.y-400+M.height/2);if(M.type==="pillar"){const j=Math.min(M.width,M.height)/2,B=new Ee(new wt(j,j*1.1,140,32),new Qe({color:4868698,roughness:.6,metalness:.4}));B.position.set(ne,70,K),B.castShadow=!0,x.add(B);const J=new Ee(new wt(j*1.3,j*1.1,10,32),new Qe({color:5921386,roughness:.5,metalness:.5}));J.position.set(ne,135,K),J.castShadow=!0,x.add(J);const Z=new Ee(new wt(j*1.2,j*1.3,10,32),new Qe({color:5921386,roughness:.5,metalness:.5}));Z.position.set(ne,5,K),Z.castShadow=!0,x.add(Z)}else if(M.type==="column"){const j=new Ee(new Ye(M.width,140,M.height),new Qe({color:3816010,roughness:.7,metalness:.3}));j.position.set(ne,70,K),j.castShadow=!0,x.add(j);const B=new ws(new Lr(j.geometry),new Ui({color:6974074}));B.position.copy(j.position),x.add(B)}else{const J=M.height/8;for(let Z=0;Z<8;Z++){const W=new Ee(new Ye(M.width,6.25,J*(8-Z)),new Qe({color:6636321,roughness:.8}));W.position.set(ne,6.25/2+Z*6.25,K+Z*J/2),W.castShadow=!0,x.add(W);const ie=new ws(new Lr(W.geometry),new Ui({color:3810320}));ie.position.copy(W.position),x.add(ie)}}}),i.objects.forEach(M=>{const ne=M.x-400+M.width/2,K=-(M.y-400+M.height/2),j=-(M.rotation*Math.PI/180);if(M.type==="bar"){const B=M.x-400+M.width/2,J=-(M.y-400+M.height/2),Z=-(M.rotation*Math.PI/180),W=50,ie=new jt({color:1710618,roughness:.5,metalness:.8,clearcoat:.2,clearcoatRoughness:.4}),le=new Ee(new Ye(M.width,W,M.height),ie);le.position.set(B,W/2,J),le.rotation.y=Z,le.castShadow=!0,le.receiveShadow=!0,x.add(le);const Me=[8323072,10770944,6691328,9109504,8930304],me=Me[Math.floor(Math.random()*Me.length)],Ue=new jt({color:me,metalness:.1,roughness:.05,transmission:.9,thickness:2,ior:1.5,reflectivity:.9,clearcoat:1,clearcoatRoughness:.05}),De=new Ee(new Ye(M.width+6,6,M.height+6),Ue);De.position.set(B,W+3,J),De.rotation.y=Z,De.castShadow=!0,x.add(De);const pe=new Qe({emissive:16711799,emissiveIntensity:.6,color:0}),xe=new Ee(new Ye(M.width+6,.5,M.height+6),pe);xe.position.set(B,W+1,J),xe.rotation.y=Z,x.add(xe);const z=me===8323072?13938487:11579568,Ae=new Ee(new Ye(M.width+8,.6,M.height+8),new Qe({color:z,metalness:1,roughness:.2}));Ae.position.set(B,W+6.5,J),Ae.rotation.y=Z,x.add(Ae);const Re=new Qe({color:13421772,metalness:1,roughness:.1}),Ce=new wt(2,2,W,16);[[M.width/2-6,M.height/2-6],[-M.width/2+6,M.height/2-6],[M.width/2-6,-M.height/2+6],[-M.width/2+6,-M.height/2+6]].forEach(([Pe,Se])=>{const ze=new Ee(Ce,Re);ze.position.set(B+Pe*Math.cos(Z)-Se*Math.sin(Z),W/2,J+Pe*Math.sin(Z)+Se*Math.cos(Z)),ze.castShadow=!0,x.add(ze)});const Be=new Ps(me,.4,600);Be.position.set(B,W+70,J),x.add(Be);const fe=120,y=new on,S=new jt({color:2105376,metalness:1,roughness:.25,clearcoat:.6,clearcoatRoughness:.1}),D=new Ee(new Ye(M.width+40,10,M.height+40),S);D.castShadow=!0,D.receiveShadow=!0,y.add(D);const q=new jt({color:10770944,metalness:0,roughness:.05,transmission:.95,thickness:1.5,ior:1.45,clearcoat:1,clearcoatRoughness:.05}),ce=new Ee(new Zt(M.width+32,M.height+32),q);ce.rotation.x=-Math.PI/2,ce.position.y=-3,y.add(ce);const re=new Qe({emissive:16764040,emissiveIntensity:1.6,color:0}),oe=new Ye(4,2,M.height+36),ge=new Ee(oe,re),ye=ge.clone();ge.position.set(-(M.width+36)/2,-2,0),ye.position.set((M.width+36)/2,-2,0),y.add(ge,ye);const Ne=new on,Oe=[11674146,14919767,9127187,27028,7810842];for(let Pe=-3;Pe<=3;Pe++){const Se=Oe[Math.floor(Math.random()*Oe.length)],ze=new jt({color:Se,roughness:.1,transmission:.95,thickness:.6,ior:1.5,clearcoat:.3,clearcoatRoughness:.2}),Ke=new Ee(new wt(3,3,20,32),ze);Ke.position.set(Pe*12,-12,0),Ne.add(Ke);const k=new Ee(new wt(1.2,1.2,6,16),ze);k.position.set(Pe*12,-3,0),Ne.add(k)}Ne.position.y=-15,y.add(Ne);const de=new jt({color:16777215,roughness:.1,transmission:.9,thickness:.4,ior:1.45});for(let Pe=-2;Pe<=2;Pe++){const Se=new Ee(new Cs(2.5,16,16,0,Math.PI),de);Se.position.set(Pe*10,-25,0),Se.scale.y=.6,y.add(Se)}const he=new Qe({color:11184810,metalness:1,roughness:.2}),ke=new wt(1.5,1.5,fe-60,16);[[M.width/2-10,M.height/2-10],[-M.width/2+10,M.height/2-10],[M.width/2-10,-M.height/2+10],[-M.width/2+10,-M.height/2+10]].forEach(([Pe,Se])=>{const ze=new Ee(ke,he);ze.position.set(Pe,-(fe-80)/2,Se),ze.rotation.x=Math.PI/2,y.add(ze)}),y.position.set(B,fe,J),y.rotation.y=Z,x.add(y);const He=new Ps(16755285,.8,600);He.position.set(B,fe-20,J),x.add(He)}else if(M.type==="kitchen"){const B=new on,J=new jt({color:11579568,metalness:1,roughness:.25,envMapIntensity:1,clearcoat:1,clearcoatRoughness:.05}),Z=new jt({color:10079487,roughness:.05,transmission:.9,thickness:.5,metalness:.1,envMapIntensity:1.2}),W=new Ee(new Ye(M.width,50,M.height),J);W.position.set(0,25,0),W.castShadow=!0,W.receiveShadow=!0,B.add(W);const ie=new Ee(new Ye(M.width,4,M.height),Z);ie.position.set(0,52,0),B.add(ie);const le=new Ee(new Ye(M.width*.4,10,M.height*.6),new Qe({color:2236962,roughness:.4}));le.position.set(-M.width*.2,55,0),B.add(le);const Me=new Qe({color:3355443,metalness:.8,roughness:.2});[[-M.width*.25,M.height*.15],[-M.width*.15,M.height*.15],[-M.width*.25,-M.height*.15],[-M.width*.15,-M.height*.15]].forEach(([Be,fe])=>{const y=new Ee(new wt(6,6,2,32),Me);y.rotation.x=Math.PI/2,y.position.set(Be,61,fe),B.add(y)});const Ue=new Ee(new Ye(M.width*.5,35,M.height*.65),new jt({color:12632256,metalness:1,roughness:.2,envMapIntensity:1.1}));Ue.position.set(-M.width*.2,95,0),Ue.castShadow=!0,B.add(Ue);const De=new jt({color:14540253,roughness:.3,metalness:.5});for(let Be=0;Be<3;Be++){const fe=new Ee(new Ye(M.width*.7,4,M.height*.2),De);fe.position.set(M.width*.15,75+Be*22,M.height*.35),fe.castShadow=!0,B.add(fe)}const pe=new Qe({color:8947848,metalness:.9,roughness:.2});for(let Be=-1;Be<=1;Be++){const fe=new Ee(new wt(1.5,1.5,15,16),pe);fe.rotation.z=Math.PI/2,fe.position.set(Be*M.width*.2,35,M.height*.45),B.add(fe)}const xe=new Ps(16777215,1.5,400);xe.position.set(0,140,0),xe.castShadow=!0,B.add(xe);const z=document.createElement("canvas");z.width=1024,z.height=768;const Ae=z.getContext("2d");Ae&&(Ae.fillStyle="#dc2626",Ae.fillRect(0,0,z.width,z.height),Ae.strokeStyle="#ffffff",Ae.lineWidth=25,Ae.strokeRect(30,30,z.width-60,z.height-60),Ae.strokeStyle="#000000",Ae.lineWidth=15,Ae.strokeRect(50,50,z.width-100,z.height-100),Ae.shadowColor="rgba(0, 0, 0, 0.8)",Ae.shadowBlur=20,Ae.shadowOffsetX=8,Ae.shadowOffsetY=8,Ae.font="bold 180px Arial",Ae.textAlign="center",Ae.textBaseline="middle",Ae.fillStyle="#ffffff",Ae.fillText("👨‍🍳",z.width/2,z.height/2-150),Ae.fillStyle="#ffffff",Ae.font="bold 220px Impact, Arial Black, sans-serif",Ae.fillText("CHEF",z.width/2,z.height/2+120),Ae.strokeStyle="#000000",Ae.lineWidth=12,Ae.strokeText("CHEF",z.width/2,z.height/2+120),Ae.strokeStyle="#fbbf24",Ae.lineWidth=6,Ae.strokeText("CHEF",z.width/2,z.height/2+120));const Re=new Ii(z),Ce=new Ee(new Zt(M.height*.6,M.height*.45),new Qe({map:Re,roughness:.4,metalness:.1,emissive:14427686,emissiveIntensity:.3}));Ce.position.set(-M.width/2+3,50,0),Ce.rotation.y=Math.PI/2,B.add(Ce);const we=new Ee(new Zt(M.height*.6,M.height*.45),new Qe({map:Re,roughness:.4,metalness:.1,emissive:14427686,emissiveIntensity:.3}));we.position.set(M.width/2-3,50,0),we.rotation.y=-Math.PI/2,B.add(we),B.position.set(ne,0,K),B.rotation.y=j,x.add(B)}else if(M.type==="toilet"){const B=new on,J=new Qe({color:14013914,roughness:.7,metalness:.05}),Z=new Qe({color:3900150,roughness:.6,metalness:.1}),W=new Qe({color:15680580,roughness:.6,metalness:.1}),ie=new Qe({color:14277081,roughness:.7,metalness:.05}),le=120,Me=new Ee(new Ye(M.width,4,M.height),ie);Me.position.y=2,Me.receiveShadow=!0,B.add(Me);const me=new Ee(new Ye(M.width,le,6),J);me.position.set(0,le/2,-M.height/2),me.castShadow=!0,B.add(me);const Ue=new Ee(new Ye(6,le,M.height),J);Ue.position.set(-M.width/2,le/2,0),Ue.castShadow=!0,B.add(Ue);const De=new Ee(new Ye(6,le,M.height),J);De.position.set(M.width/2,le/2,0),De.castShadow=!0,B.add(De);const pe=new Ee(new Ye(M.width*.24,le,6),J);pe.position.set(0,le/2,M.height/2),pe.castShadow=!0,B.add(pe);const xe=new Ee(new Ye(M.width*.055,le,6),J);xe.position.set(-M.width*.4725,le/2,M.height/2),xe.castShadow=!0,B.add(xe);const z=new Ee(new Ye(M.width*.055,le,6),J);z.position.set(M.width*.4725,le/2,M.height/2),z.castShadow=!0,B.add(z);const Ae=new Ee(new Ye(M.width*.33,le-95,6),J);Ae.position.set(M.width*.285,95+(le-95)/2,M.height/2),Ae.castShadow=!0,B.add(Ae);const Re=new Ee(new Ye(M.width*.33,le-95,6),J);Re.position.set(-M.width*.285,95+(le-95)/2,M.height/2),Re.castShadow=!0,B.add(Re);const Ce=new Ee(new Ye(M.width*.33,95,4),Z);Ce.position.set(M.width*.285,47.5,M.height/2-2),Ce.castShadow=!0,B.add(Ce);const we=new Qe({color:13938487,metalness:.1,roughness:.8}),Be=new Ee(new wt(1.5,1.5,12,16),we);Be.rotation.z=Math.PI/2,Be.position.set(M.width*.285-M.width*.132,47.5,M.height/2+1),B.add(Be);const fe=document.createElement("canvas");fe.width=512,fe.height=768;const y=fe.getContext("2d");if(y){const Ge=y.createLinearGradient(0,0,0,fe.height);Ge.addColorStop(0,"#3b82f6"),Ge.addColorStop(1,"#1e40af"),y.fillStyle=Ge,y.fillRect(0,0,fe.width,fe.height),y.strokeStyle="#ffffff",y.lineWidth=12,y.strokeRect(20,20,fe.width-40,fe.height-40),y.strokeStyle="rgba(255, 255, 255, 0.3)",y.lineWidth=6,y.strokeRect(30,30,fe.width-60,fe.height-60),y.shadowColor="rgba(0, 0, 0, 0.5)",y.shadowBlur=15,y.shadowOffsetX=4,y.shadowOffsetY=4,y.fillStyle="#ffffff",y.font="bold 120px Georgia, serif",y.textAlign="center",y.textBaseline="middle",y.fillText("W.C.",fe.width/2,fe.height/2-100),y.strokeStyle="#ffffff",y.lineWidth=4,y.beginPath(),y.moveTo(100,fe.height/2),y.lineTo(fe.width-100,fe.height/2),y.stroke();const $e=y.createLinearGradient(0,fe.height/2,0,fe.height/2+150);$e.addColorStop(0,"#ffd700"),$e.addColorStop(.5,"#ffed4e"),$e.addColorStop(1,"#ffd700"),y.fillStyle=$e,y.font="bold 140px Georgia, serif",y.fillText("MALE",fe.width/2,fe.height/2+120),y.strokeStyle="#b8860b",y.lineWidth=3,y.strokeText("MALE",fe.width/2,fe.height/2+120)}const S=new Ii(fe),D=new Ee(new Zt(M.width*.25,M.width*.375),new Qe({map:S,roughness:.3,metalness:.15,emissive:1982639,emissiveIntensity:.1}));D.position.set(M.width*.285,47.5,M.height/2+2.5),B.add(D);const q=new Ee(new Ye(M.width*.33,95,4),W);q.position.set(-M.width*.285,47.5,M.height/2-2),q.castShadow=!0,B.add(q);const ce=Be.clone();ce.position.set(-M.width*.285+M.width*.132,47.5,M.height/2+1),B.add(ce);const re=document.createElement("canvas");re.width=512,re.height=768;const oe=re.getContext("2d");if(oe){const Ge=oe.createLinearGradient(0,0,0,re.height);Ge.addColorStop(0,"#ef4444"),Ge.addColorStop(1,"#b91c1c"),oe.fillStyle=Ge,oe.fillRect(0,0,re.width,re.height),oe.strokeStyle="#ffffff",oe.lineWidth=12,oe.strokeRect(20,20,re.width-40,re.height-40),oe.strokeStyle="rgba(255, 255, 255, 0.3)",oe.lineWidth=6,oe.strokeRect(30,30,re.width-60,re.height-60),oe.shadowColor="rgba(0, 0, 0, 0.5)",oe.shadowBlur=15,oe.shadowOffsetX=4,oe.shadowOffsetY=4,oe.fillStyle="#ffffff",oe.font="bold 120px Georgia, serif",oe.textAlign="center",oe.textBaseline="middle",oe.fillText("W.C.",re.width/2,re.height/2-100),oe.strokeStyle="#ffffff",oe.lineWidth=4,oe.beginPath(),oe.moveTo(100,re.height/2),oe.lineTo(re.width-100,re.height/2),oe.stroke();const $e=oe.createLinearGradient(0,re.height/2,0,re.height/2+150);$e.addColorStop(0,"#ffb6c1"),$e.addColorStop(.5,"#ffd1dc"),$e.addColorStop(1,"#ffb6c1"),oe.fillStyle=$e,oe.font="bold 120px Georgia, serif",oe.fillText("FEMALE",re.width/2,re.height/2+120),oe.strokeStyle="#dc143c",oe.lineWidth=3,oe.strokeText("FEMALE",re.width/2,re.height/2+120)}const ge=new Ii(re),ye=new Ee(new Zt(M.width*.25,M.width*.375),new Qe({map:ge,roughness:.3,metalness:.15,emissive:12131356,emissiveIntensity:.1}));ye.position.set(-M.width*.285,47.5,M.height/2+2.5),B.add(ye);const Ne=document.createElement("canvas");Ne.width=512,Ne.height=256;const Oe=Ne.getContext("2d");Oe&&(Oe.fillStyle="#d5d5da",Oe.fillRect(0,0,Ne.width,Ne.height),Oe.fillStyle="#2a2a2a",Oe.font="bold 140px Arial",Oe.textAlign="center",Oe.textBaseline="middle",Oe.fillText("W.C.",Ne.width/2,Ne.height/2));const de=new Ii(Ne),he=new Ee(new Zt(M.width*.4,M.width*.2),new Qe({map:de,roughness:.5,metalness:.05}));he.position.set(0,100,-M.height/2+3.5),B.add(he);const ke=new Qe({color:16119285,metalness:.1,roughness:.5}),He=new Ee(new Ye(M.width*.5,12,M.height*.25),ke);He.position.set(0,32,-M.height*.3),He.castShadow=!0,B.add(He);const Pe=new Qe({color:16777215,roughness:.3,metalness:.05}),Se=new Ee(new wt(12,12,6,32),Pe);Se.position.set(0,40,-M.height*.3),B.add(Se);const ze=new Qe({color:12632256,metalness:.1,roughness:.8}),Ke=new Ee(new Fi(4,1,8,24,Math.PI),ze);Ke.rotation.z=Math.PI/2,Ke.position.set(0,48,-M.height*.35),B.add(Ke);const k=new Qe({color:16777215,roughness:.25,metalness:.05}),V=new Ee(new wt(10,8,12,32),k);V.position.set(-M.width*.25,6,M.height*.25),B.add(V);const F=new Ee(new Fi(9,2,16,32),k);F.rotation.x=Math.PI/2,F.position.set(-M.width*.25,13,M.height*.25),B.add(F);const w=new Ee(new Ye(14,20,8),k);w.position.set(-M.width*.25,22,M.height*.25-10),B.add(w);const Q=new Ee(new Ye(2,6,1),ze);Q.position.set(-M.width*.25+8,25,M.height*.25-10),B.add(Q);const se=new Ee(new Cs(7,32,32,0,Math.PI*2,0,Math.PI/1.5),k);se.position.set(M.width*.25,25,M.height*.25),se.rotation.x=Math.PI/6,B.add(se);const _e=new Ee(new wt(1.5,1.5,8,16),ze);_e.position.set(M.width*.25,35,M.height*.25-5),B.add(_e);const be=new Ps(16777215,.5,280);be.position.set(0,le-15,0),be.castShadow=!1,B.add(be),B.position.set(ne,0,K),B.rotation.y=j,x.add(B)}}),i.tables.forEach(M=>{const j=M.shape==="rectangle"?M.width*1.5:M.width,B=M.x-400+j/2,J=-(M.y-400+M.height/2),Z=-(M.rotation*Math.PI/180),W=new jt({color:7294519,roughness:.35,metalness:.1,clearcoat:.4,clearcoatRoughness:.2,sheen:.5,sheenColor:new et(10251068)}),ie=M.shape==="circle"?new wt(j/2,j/2,4,64):new Ye(j,4,M.height),le=new Ee(ie,W);if(le.position.set(B,33+4/2,J),le.rotation.y=Z,le.castShadow=!0,le.receiveShadow=!0,x.add(le),M.shape==="circle"){const pe=new Ee(new Fi(j/2+1,1.2,16,64),new Qe({color:13938487,metalness:1,roughness:.3}));pe.position.set(B,33+4/2+.5,J),pe.rotation.x=Math.PI/2,x.add(pe)}else{const pe=new ws(new Lr(ie),new Ui({color:13938487,linewidth:2}));pe.position.copy(le.position),pe.rotation.y=Z,x.add(pe)}const Me=new Qe({color:2236962,metalness:.9,roughness:.2}),me=3.2;(M.shape==="circle"?[[j*.3,j*.3],[-j*.3,j*.3],[j*.3,-j*.3],[-j*.3,-j*.3]]:[[j/2-10,M.height/2-10],[-j/2+10,M.height/2-10],[j/2-10,-M.height/2+10],[-j/2+10,-M.height/2+10]]).forEach(([pe,xe])=>{const z=new Ee(new wt(me,me,33,16),Me);z.position.set(B+pe*Math.cos(Z)-xe*Math.sin(Z),33/2,J+pe*Math.sin(Z)+xe*Math.cos(Z)),z.castShadow=!0,x.add(z)});const De=i.chairs.filter(pe=>pe.tableId===M.id);De.forEach(pe=>{const xe=pe.size||40,z=38,Ae=new Qe({color:9127187,roughness:.5,metalness:.1}),Re=new Qe({color:12092939,roughness:.7,metalness:.05}),Ce=De.filter(Pe=>Pe.position===pe.position).length,Be=(["top","bottom"].includes(pe.position)?j:M.height)-xe*Ce,fe=Ce>1?Be/(Ce+1):Be/2,y=fe+pe.index*(xe+fe)+xe/2,S=xe*.4;let D=0,q=0;pe.position==="top"?(D=y-j/2,q=M.height/2+S+xe/2):pe.position==="bottom"?(D=y-j/2,q=-(M.height/2+S+xe/2)):pe.position==="left"?(D=-(j/2+S+xe/2),q=y-M.height/2):(D=j/2+S+xe/2,q=y-M.height/2);const ce=D*Math.cos(Z)-q*Math.sin(Z),re=D*Math.sin(Z)+q*Math.cos(Z),oe=new Ee(new Ye(xe*.75,4,xe*.75),Re),ge=z*.4;oe.position.set(B+ce,ge,J-re);const ye={top:0,bottom:Math.PI,left:Math.PI/2,right:-Math.PI/2}[pe.position]||0;oe.rotation.y=ye+Z,oe.castShadow=!0,x.add(oe);const Ne=new Ee(new Ye(xe*.75,z*.55,3),Ae),Oe=xe*.75/2+1.5;Ne.position.set(oe.position.x-Math.sin(oe.rotation.y)*Oe,z*.65,oe.position.z-Math.cos(oe.rotation.y)*Oe),Ne.rotation.y=oe.rotation.y,Ne.castShadow=!0,x.add(Ne);const he=ge-4/2,ke=new wt(2,2,he,8),He=new Qe({color:6636321,roughness:.6,metalness:.2});[[xe*.3,xe*.3],[xe*.3,-xe*.3],[-xe*.3,xe*.3],[-xe*.3,-xe*.3]].forEach(([Pe,Se])=>{const ze=new Ee(ke,He),Ke=Math.cos(oe.rotation.y),k=Math.sin(oe.rotation.y);ze.position.set(oe.position.x+Pe*Ke-Se*k,he/2,oe.position.z+Pe*k+Se*Ke),ze.castShadow=!0,x.add(ze)})})});const N=()=>{var M;if(a.current=requestAnimationFrame(N),v.current&&v.current.progress<1){const ne=v.current;ne.progress+=.05,ne.progress>=1&&(ne.progress=1,g(!1),v.current=null);const j=(B=>B<.5?4*B*B*B:1-Math.pow(-2*B+2,3)/2)(ne.progress);if(r.current){r.current.position.lerpVectors(ne.startPos,ne.endPos,j);const B=new G;B.lerpVectors(ne.startTarget,ne.endTarget,j),r.current.lookAt(B)}}if(l&&r.current&&!f){const ne=Math.sqrt(r.current.position.x**2+r.current.position.z**2),K=Math.atan2(r.current.position.z,r.current.position.x)+_.current;r.current.position.x=ne*Math.cos(K),r.current.position.z=ne*Math.sin(K),r.current.lookAt(0,100,0)}(M=o.current)==null||M.render(x,R)};N();const Y=()=>{n.current&&r.current&&o.current&&(r.current.aspect=n.current.clientWidth/n.current.clientHeight,r.current.updateProjectionMatrix(),o.current.setSize(n.current.clientWidth,n.current.clientHeight))};return window.addEventListener("resize",Y),()=>{window.removeEventListener("resize",Y),a.current&&cancelAnimationFrame(a.current),o.current&&n.current&&(n.current.removeChild(o.current.domElement),o.current.dispose())}},[e,i,l,f]),e?m.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-2",children:m.jsxs("div",{className:"bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-3xl shadow-2xl w-full h-full max-w-[98vw] max-h-[98vh] flex flex-col overflow-hidden border border-gray-800",children:[m.jsx("div",{className:"bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1",children:m.jsxs("div",{className:"bg-gray-900 px-6 py-4 flex items-center justify-between",children:[m.jsxs("div",{children:[m.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-3",children:[m.jsx("div",{className:"p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg",children:m.jsx(Ds,{className:"w-5 h-5"})}),"3D Floor Plan Visualization"]}),m.jsxs("p",{className:"text-gray-400 text-sm mt-1",children:["Professional Camera Controls • ",i.name]})]}),m.jsx("button",{onClick:t,className:"p-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all hover:scale-110",children:m.jsx(zl,{className:"w-5 h-5"})})]})}),m.jsxs("div",{className:"flex-1 flex gap-3 p-3 min-h-0",children:[m.jsxs("div",{className:"w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 p-5 flex flex-col gap-5 overflow-y-auto flex-shrink-0",children:[m.jsx("button",{onClick:()=>p("default"),className:"px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2",children:"🏠 Default View"}),m.jsxs("div",{className:"flex flex-col gap-3",children:[m.jsxs("div",{className:"text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-700",children:[m.jsx(Ds,{className:"w-5 h-5 text-purple-400"}),"Manual Control"]}),m.jsx("div",{className:"flex justify-center",children:m.jsxs("div",{className:"flex flex-col gap-1",children:[m.jsx("button",{onClick:()=>h("up"),className:"w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30 mx-auto",disabled:f,title:"Rotate Up",children:m.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})})}),m.jsxs("div",{className:"flex gap-1 justify-center",children:[m.jsx("button",{onClick:()=>h("left"),className:"w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30",disabled:f,title:"Rotate Left",children:m.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),m.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center",children:m.jsx(Ds,{className:"w-6 h-6 text-white"})}),m.jsx("button",{onClick:()=>h("right"),className:"w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30",disabled:f,title:"Rotate Right",children:m.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),m.jsx("button",{onClick:()=>h("down"),className:"w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-110 flex items-center justify-center disabled:opacity-30 mx-auto",disabled:f,title:"Rotate Down",children:m.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]})})]}),m.jsxs("div",{className:"flex flex-col gap-3",children:[m.jsxs("div",{className:"text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-gray-700",children:[m.jsx(Xr,{className:"w-5 h-5 text-green-400"}),"Zoom & Rotation"]}),m.jsxs("div",{className:"flex flex-col gap-2",children:[m.jsxs("button",{onClick:()=>T(.85),className:"px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-30",disabled:f,children:[m.jsx(Xr,{className:"w-5 h-5"}),"Zoom In"]}),m.jsxs("button",{onClick:()=>T(1.15),className:"px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-30",disabled:f,children:[m.jsx(kl,{className:"w-5 h-5"}),"Zoom Out"]}),m.jsxs("button",{onClick:()=>c(!l),className:`px-4 py-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold ${l?"bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg":"bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"}`,children:[m.jsx(Is,{className:`w-5 h-5 ${l?"animate-spin":""}`}),l?"Auto-Rotating":"Auto-Rotate"]})]})]}),m.jsxs("div",{className:"flex flex-col gap-3 mt-auto",children:[m.jsxs("button",{onClick:()=>p("default"),className:"px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 font-bold",children:[m.jsx(Nl,{className:"w-5 h-5"}),"Reset View"]}),m.jsxs("div",{className:"bg-gray-800/50 rounded-xl p-4 border border-gray-700",children:[m.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-3",children:[m.jsx(Cl,{className:"w-4 h-4"}),m.jsx("span",{className:"font-medium text-sm",children:"Scene Statistics"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-pulse"}),m.jsxs("span",{className:"text-gray-300",children:[i.tables.length," Tables"]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("div",{className:"w-2 h-2 bg-amber-500 rounded-full animate-pulse"}),m.jsxs("span",{className:"text-gray-300",children:[i.chairs.length," Chairs"]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full animate-pulse"}),m.jsxs("span",{className:"text-gray-300",children:[i.objects.length," Objects"]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-pulse"}),m.jsxs("span",{className:"text-gray-300",children:[i.walls.length," Walls"]})]})]})]})]})]}),m.jsxs("div",{className:"flex-1 relative bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-gray-300",children:[m.jsx("div",{ref:n,className:"w-full h-full"}),f&&m.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:m.jsx("div",{className:"bg-black/80 backdrop-blur-xl rounded-xl px-6 py-3 shadow-2xl border border-gray-700",children:m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-2 border-gray-500 border-t-white"}),m.jsx("span",{className:"text-white text-sm font-medium",children:"Transitioning Camera..."})]})})})]})]}),m.jsx("div",{className:"bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 px-6 py-3 border-t border-gray-800",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Vr,{className:"w-4 h-4 text-gray-400"}),m.jsxs("span",{className:"text-sm text-gray-400",children:["Viewing: ",m.jsx("span",{className:"text-white font-semibold",children:i.name})]})]}),m.jsxs("div",{className:"text-sm text-gray-400",children:["Camera: ",m.jsx("span",{className:"text-white font-semibold",children:fl[d].name})]})]}),m.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500",children:[m.jsx("span",{children:"High Performance Mode"}),m.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"})]})]})})]})}):null},Dp=()=>{const[i,e]=Fe.useState([{id:"floor-1",name:"Ground Floor",isActive:!0,tables:[],chairs:[],objects:[],walls:[],fixedElements:[]}]),[t,n]=Fe.useState("floor-1"),[s,r]=Fe.useState(null),[o,a]=Fe.useState(!1),[l,c]=Fe.useState({x:0,y:0}),d=1,[u,f]=Fe.useState(!0),[g,_]=Fe.useState(!1),[v,p]=Fe.useState(!1),[h,T]=Fe.useState(null),[x,R]=Fe.useState(null),[U,P]=Fe.useState(null),[C,ee]=Fe.useState(!1),[E,A]=Fe.useState(null),[O,te]=Fe.useState(null),ae=Fe.useRef(null),N=Fe.useRef(null),Y=Fe.useRef(null);Fe.useEffect(()=>{if((s==null?void 0:s.type)==="table"){const k=M();if(!k)return;const V=k.chairs.filter(w=>w.tableId===s.id);if(V.filter(w=>w.size===void 0).length>0){const w={};V.forEach(Q=>{Q.size!==void 0&&!w[Q.position]&&(w[Q.position]=Q.size)}),e(Q=>Q.map(se=>se.id===t?{...se,chairs:se.chairs.map(_e=>{if(_e.tableId===s.id&&_e.size===void 0){const be=w[_e.position]??40;return{..._e,size:be}}return _e})}:se))}}},[s]);const M=()=>i.find(k=>k.id===t),ne=(k,V="medium")=>{const F=M();if(!F)return;const{width:w,height:Q}=Zr(k,V),se={id:yn(),name:`Table ${F.tables.length+1}`,shape:k,size:V,x:200+F.tables.length*20,y:200+F.tables.length*20,width:w,height:Q,rotation:0};e(_e=>_e.map(be=>be.id===t?{...be,tables:[...be.tables,se]}:be)),r({type:"table",id:se.id})},K=k=>{const V=M();if(!V)return;const F={id:yn(),name:`${ki[k]} ${V.objects.length+1}`,type:k,x:300+V.objects.length*30,y:300+V.objects.length*30,width:120,height:80,rotation:0};e(w=>w.map(Q=>Q.id===t?{...Q,objects:[...Q.objects,F]}:Q)),r({type:"object",id:F.id})},j=k=>{if(!s||s.type!=="table")return;const V=M();if(!V)return;const F=V.chairs.filter(be=>be.tableId===s.id&&be.position===k),w=F.length,Q=F.find(be=>be.size!==void 0),se=(Q==null?void 0:Q.size)??40,_e={id:yn(),tableId:s.id,position:k,index:w,x:0,y:0,size:se};e(be=>be.map(Ge=>Ge.id===t?{...Ge,chairs:[...Ge.chairs,_e]}:Ge))},B=k=>{if(!s||s.type!=="table")return;const V=M();if(!V)return;const F=V.chairs.filter(Q=>Q.tableId===s.id&&Q.position===k);if(F.length===0)return;const w=F.reduce((Q,se)=>se.index>Q.index?se:Q);e(Q=>Q.map(se=>se.id===t?{...se,chairs:se.chairs.filter(_e=>_e.id!==w.id)}:se))},J=(k,V)=>{!s||s.type!=="table"||!M()||e(w=>w.map(Q=>Q.id===t?{...Q,chairs:Q.chairs.map(se=>se.tableId===s.id&&se.position===k?{...se,size:V}:se)}:Q))},Z=()=>{!s||s.type!=="table"||!M()||e(V=>V.map(F=>F.id===t?{...F,chairs:F.chairs.map(w=>{if(w.tableId===s.id){const{size:Q,...se}=w;return se}return w})}:F))},W=()=>{s&&(s.type==="table"?e(k=>k.map(V=>V.id===t?{...V,tables:V.tables.filter(F=>F.id!==s.id),chairs:V.chairs.filter(F=>F.tableId!==s.id)}:V)):s.type==="object"?e(k=>k.map(V=>V.id===t?{...V,objects:V.objects.filter(F=>F.id!==s.id)}:V)):s.type==="wall"?e(k=>k.map(V=>V.id===t?{...V,walls:V.walls.filter(F=>F.id!==s.id)}:V)):s.type==="fixedElement"&&e(k=>k.map(V=>V.id===t?{...V,fixedElements:V.fixedElements.filter(F=>F.id!==s.id)}:V)),r(null))},ie=k=>{!s||s.type!=="wall"||e(V=>V.map(F=>F.id===t?{...F,walls:F.walls.map(w=>w.id===s.id?{...w,thickness:k}:w)}:F))},le=k=>{!s||s.type!=="wall"||e(V=>V.map(F=>F.id===t?{...F,walls:F.walls.map(w=>w.id===s.id?{...w,type:k}:w)}:F))},Me=()=>{!s||s.type!=="table"||e(k=>k.map(V=>V.id===t?{...V,tables:V.tables.map(F=>F.id===s.id?{...F,rotation:(F.rotation||0)+45}:F)}:V))},me=()=>{if(!s||s.type!=="table")return;const k=M();if(!k)return;const V=k.tables.find(se=>se.id===s.id);if(!V)return;const F={...V,id:yn(),name:`${V.name} Copy`,x:V.x+50,y:V.y+50},Q=k.chairs.filter(se=>se.tableId===V.id).map(se=>({...se,id:yn(),tableId:F.id}));e(se=>se.map(_e=>_e.id===t?{..._e,tables:[..._e.tables,F],chairs:[..._e.chairs,...Q]}:_e)),r({type:"table",id:F.id})},Ue=Fe.useCallback(k=>{!s||s.type!=="table"||e(V=>V.map(F=>F.id===t?{...F,tables:F.tables.map(w=>w.id===s.id?k(w):w)}:F))},[s,t]),De=k=>{Ue(V=>{const{width:F,height:w}=Zr(V.shape,k);return{...V,size:k,width:F,height:w}})},pe=(k,V)=>{Ue(F=>({...F,width:k,height:V,size:"medium"}))},xe=k=>{!s||s.type!=="object"||e(V=>V.map(F=>F.id===t?{...F,objects:F.objects.map(w=>w.id===s.id?{...w,name:k}:w)}:F))},z=(k,V)=>{!s||s.type!=="object"||e(F=>F.map(w=>w.id===t?{...w,objects:w.objects.map(Q=>Q.id===s.id?{...Q,width:k,height:V}:Q)}:w))},Ae=k=>{!s||s.type!=="object"||e(V=>V.map(F=>F.id===t?{...F,objects:F.objects.map(w=>w.id===s.id?{...w,rotation:k}:w)}:F))},Re=(k,V)=>{!s||s.type!=="fixedElement"||e(F=>F.map(w=>w.id===t?{...w,fixedElements:w.fixedElements.map(Q=>Q.id===s.id?{...Q,width:k,height:V}:Q)}:w))},Ce=k=>{Ue(V=>({...V,name:k}))},we=k=>{if(ae.current&&!C){if(v&&h){const V=ae.current.getBoundingClientRect(),F=Math.round((k.clientX-V.left)/d/rt)*rt,w=Math.round((k.clientY-V.top)/d/rt)*rt;if(!x)R({x:F,y:w});else{if(!M())return;const se=Hi(x,{x:F,y:w}),_e={id:yn(),type:h,startX:x.x,startY:x.y,endX:se.x,endY:se.y,thickness:8};e(be=>be.map(Ge=>Ge.id===t?{...Ge,walls:[...Ge.walls,_e]}:Ge)),R(null),P(null),p(!1),T(null)}return}r(null)}},Be=(k,V)=>{r({type:k,id:V})},fe=(k,V)=>{if(!ae.current)return;k.preventDefault(),k.stopPropagation();const F=ae.current.getBoundingClientRect(),w=(k.clientX-F.left)/d,Q=(k.clientY-F.top)/d,se=M();if(!se)return;const _e=se.tables.find(st=>st.id===V),be=se.objects.find(st=>st.id===V),Ge=se.fixedElements.find(st=>st.id===V),$e=se.walls.find(st=>st.id===V);if($e)c({x:w-$e.startX,y:Q-$e.startY}),N.current={id:V,type:"wall"};else{const st=_e||be||Ge;st&&c({x:w-st.x,y:Q-st.y});const ct=_e?"table":be?"object":Ge?"fixedElement":"table";N.current={id:V,type:ct}}a(!0)},y=Fe.useCallback(k=>{!o&&!C||!N.current||!ae.current||(Y.current&&cancelAnimationFrame(Y.current),Y.current=requestAnimationFrame(()=>{var _e,be,Ge,$e,st;if(!ae.current)return;const V=ae.current.getBoundingClientRect(),F=(k.clientX-V.left)/d,w=(k.clientY-V.top)/d,Q=Math.round(F/rt)*rt,se=Math.round(w/rt)*rt;if(C&&((_e=N.current)==null?void 0:_e.type)==="wall"){const ct=i.find(ht=>ht.id===t),Je=ct==null?void 0:ct.walls.find(ht=>{var ut;return ht.id===((ut=N.current)==null?void 0:ut.id)});if(Je){const ht=E==="start"?{x:Je.endX,y:Je.endY}:{x:Je.startX,y:Je.startY},ut=Hi(ht,{x:Q,y:se});e(Ot=>Ot.map(pt=>pt.id===t?{...pt,walls:pt.walls.map(ot=>{var Tt;return ot.id===((Tt=N.current)==null?void 0:Tt.id)?E==="start"?{...ot,startX:ut.x,startY:ut.y}:{...ot,endX:ut.x,endY:ut.y}:ot})}:pt))}}else if(((be=N.current)==null?void 0:be.type)==="table"){const ct=F-l.x,Je=w-l.y,ht=Math.round(ct/rt)*rt,ut=Math.round(Je/rt)*rt;e(Ot=>Ot.map(pt=>pt.id===t?{...pt,tables:pt.tables.map(ot=>{var Tt;return ot.id===((Tt=N.current)==null?void 0:Tt.id)?{...ot,x:ht,y:ut}:ot})}:pt))}else if(((Ge=N.current)==null?void 0:Ge.type)==="object"){const ct=F-l.x,Je=w-l.y,ht=Math.round(ct/rt)*rt,ut=Math.round(Je/rt)*rt;e(Ot=>Ot.map(pt=>pt.id===t?{...pt,objects:pt.objects.map(ot=>{var Tt;return ot.id===((Tt=N.current)==null?void 0:Tt.id)?{...ot,x:ht,y:ut}:ot})}:pt))}else if((($e=N.current)==null?void 0:$e.type)==="fixedElement"){const ct=F-l.x,Je=w-l.y,ht=Math.round(ct/rt)*rt,ut=Math.round(Je/rt)*rt;e(Ot=>Ot.map(pt=>pt.id===t?{...pt,fixedElements:pt.fixedElements.map(ot=>{var Tt;return ot.id===((Tt=N.current)==null?void 0:Tt.id)?{...ot,x:ht,y:ut}:ot})}:pt))}else if(((st=N.current)==null?void 0:st.type)==="wall"&&!C){const ct=F-l.x,Je=w-l.y,ht=Math.round(ct/rt)*rt,ut=Math.round(Je/rt)*rt;e(Ot=>Ot.map(pt=>pt.id===t?{...pt,walls:pt.walls.map(ot=>{var L;if(ot.id!==((L=N.current)==null?void 0:L.id))return ot;const Tt=ht-ot.startX,xn=ut-ot.startY;return{...ot,startX:ot.startX+Tt,startY:ot.startY+xn,endX:ot.endX+Tt,endY:ot.endY+xn}})}:pt))}}))},[o,C,E,l,t,d,i]),S=()=>{Y.current&&(cancelAnimationFrame(Y.current),Y.current=null),a(!1),N.current=null,ee(!1),A(null),te(null)},D=(k,V,F)=>{k.preventDefault(),k.stopPropagation(),ee(!0),A(F),N.current={id:V,type:"wall"}},q=()=>{const k={id:yn(),name:`Floor ${i.length+1}`,isActive:!1,tables:[],chairs:[],objects:[],walls:[],fixedElements:[]};e(V=>[...V,k]),re(k.id)},ce=()=>{if(i.length<=1)return;const k=i.filter(V=>V.id!==t);e(k),n(k[0].id)},re=k=>{e(V=>V.map(F=>({...F,isActive:F.id===k}))),n(k),r(null)},oe=(k,V)=>{e(F=>F.map(w=>w.id===k?{...w,name:V}:w))},ge=k=>{p(!0),T(k),R(null),P(null),r(null)},ye=k=>{const V=M();if(!V)return;const F={id:yn(),name:`${k.charAt(0).toUpperCase()+k.slice(1)} ${V.fixedElements.length+1}`,type:k,x:400+V.fixedElements.length*30,y:400+V.fixedElements.length*30,width:60,height:60,rotation:0};e(w=>w.map(Q=>Q.id===t?{...Q,fixedElements:[...Q.fixedElements,F]}:Q)),r({type:"fixedElement",id:F.id})},Ne=()=>{const k={floors:i,timestamp:new Date().toISOString()};console.log("Saving floor plan:",k),alert("Floor plan saved! (Check console for data)")},Oe=()=>{e([{id:"floor-sample",name:"Sample Floor",isActive:!0,tables:[{id:"table-1",name:"Table 1",shape:"circle",size:"medium",x:200,y:200,width:120,height:120,rotation:0}],chairs:[{id:"chair-1",tableId:"table-1",position:"top",index:0,x:0,y:0}],objects:[],walls:[],fixedElements:[]}]),n("floor-sample"),r(null),alert("Sample floor plan loaded!")};Fe.useEffect(()=>{const k=F=>y(F),V=()=>S();return(o||C)&&(document.addEventListener("mousemove",k),document.addEventListener("mouseup",V)),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",V)}},[o,C,y]);const de=k=>{var V;if(v&&x&&ae.current){const F=ae.current.getBoundingClientRect(),w=Math.round((k.clientX-F.left)/d/rt)*rt,Q=Math.round((k.clientY-F.top)/d/rt)*rt,se=Hi(x,{x:w,y:Q});P(se)}else if(C&&((V=N.current)==null?void 0:V.type)==="wall"&&ae.current){const F=ae.current.getBoundingClientRect(),w=Math.round((k.clientX-F.left)/d/rt)*rt,Q=Math.round((k.clientY-F.top)/d/rt)*rt,se=M(),_e=se==null?void 0:se.walls.find(be=>{var Ge;return be.id===((Ge=N.current)==null?void 0:Ge.id)});if(_e){const be=E==="start"?{x:_e.endX,y:_e.endY}:{x:_e.startX,y:_e.startY},Ge=Hi(be,{x:w,y:Q});te(E==="start"?{startX:Ge.x,startY:Ge.y,endX:_e.endX,endY:_e.endY}:{startX:_e.startX,startY:_e.startY,endX:Ge.x,endY:Ge.y})}}};Fe.useEffect(()=>{const k=V=>{V.key==="Escape"&&v&&(p(!1),T(null),R(null),P(null))};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[v]);const he=M(),ke=he==null?void 0:he.tables.find(k=>(s==null?void 0:s.type)==="table"&&k.id===s.id),He=he==null?void 0:he.objects.find(k=>(s==null?void 0:s.type)==="object"&&k.id===s.id),Pe=he==null?void 0:he.walls.find(k=>(s==null?void 0:s.type)==="wall"&&k.id===s.id),Se=he==null?void 0:he.fixedElements.find(k=>(s==null?void 0:s.type)==="fixedElement"&&k.id===s.id),ze=ke?(he==null?void 0:he.chairs.filter(k=>k.tableId===ke.id))??[]:[],Ke=Fe.useCallback(()=>f(k=>!k),[]);return m.jsxs("div",{className:"flex h-screen bg-gray-50",children:[m.jsx("style",{dangerouslySetInnerHTML:{__html:Gl}}),m.jsx(Ql,{floors:i,currentFloor:he,onAddFloor:q,onRemoveFloor:ce,onSwitchFloor:re,onRenameFloor:oe,onAddTable:ne,onAddObject:K,onStartWallDrawing:ge,onAddFixedElement:ye,onRotateTable:Me,onDuplicateTable:me,onRemoveTable:W,onSave:Ne,onLoad:Oe,selectedTable:ke??null,selectedTableChairs:ze}),m.jsxs("div",{className:"flex-1 flex flex-col",children:[m.jsx(nc,{showGrid:u,selectedTable:ke??null,selectedObject:He??null,selectedWall:Pe??null,selectedFixedElement:Se??null,selectedTableChairs:ze,tableCount:(he==null?void 0:he.tables.length)??0,chairCount:(he==null?void 0:he.chairs.length)??0,objectCount:(he==null?void 0:he.objects.length)??0,wallCount:(he==null?void 0:he.walls.length)??0,fixedElementCount:(he==null?void 0:he.fixedElements.length)??0,selectedElementType:(s==null?void 0:s.type)??null,onToggleGrid:Ke,onAddChair:j,onRemoveChair:B,onChangeTableSize:De,onCustomTableSize:pe,onTableNameChange:Ce,onObjectNameChange:xe,onObjectResize:z,onObjectRotate:Ae,onRemoveObject:W,onRemoveWall:W,onRemoveFixedElement:W,onChangeWallThickness:ie,onConvertWallType:le,onFixedElementResize:Re,onChairSizeChange:J,onResetChairSizes:Z,on3DPreview:()=>_(!0)}),m.jsxs("div",{className:"flex-1 overflow-hidden bg-gray-100 relative",children:[m.jsxs("div",{ref:ae,className:`w-full h-full relative ${v?"cursor-crosshair":C?"cursor-grabbing":"cursor-default"}`,style:{transform:`scale(${d})`,transformOrigin:"top left",background:u?"radial-gradient(circle, #d1d5db 1px, transparent 1px)":"white",backgroundSize:`${rt*d}px ${rt*d}px`},onClick:we,onMouseMove:de,children:[(he==null?void 0:he.tables.length)===0&&m.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:m.jsxs("div",{className:"text-center text-gray-400",children:[m.jsx("div",{className:"text-6xl mb-4",children:"🏪"}),m.jsx("div",{className:"text-xl font-medium mb-2",children:"Welcome to Your Restaurant Designer"}),m.jsx("div",{className:"text-lg",children:'Click "Add Tables" in the sidebar to start designing your floor plan'}),m.jsxs("div",{className:"mt-4 space-y-1 text-sm",children:[m.jsx("div",{children:"• Drag tables to move them around"}),m.jsx("div",{children:"• Click tables to select and edit properties"}),m.jsx("div",{children:"• Add chairs from the top toolbar or the table properties panel"}),m.jsx("div",{children:"• Use multiple floors for complex layouts"})]})]})}),he==null?void 0:he.tables.map(k=>m.jsx($l,{table:k,isSelected:(s==null?void 0:s.type)==="table"&&s.id===k.id,chairs:he.chairs.filter(V=>V.tableId===k.id),onSelect:()=>Be("table",k.id),onDrag:fe,onDragEnd:S},k.id)),he==null?void 0:he.objects.map(k=>m.jsx(Kl,{object:k,isSelected:(s==null?void 0:s.type)==="object"&&s.id===k.id,onSelect:()=>Be("object",k.id),onDragStart:V=>fe(V,k.id)},k.id)),he==null?void 0:he.walls.map(k=>m.jsx(Jr,{wall:k,isSelected:(s==null?void 0:s.type)==="wall"&&s.id===k.id,onSelect:()=>Be("wall",k.id),onDragHandle:(V,F)=>D(V,k.id,F),onDragStart:V=>fe(V,k.id)},k.id)),v&&x&&U&&h&&m.jsx(Jr,{wall:{id:"temp-wall",type:h,startX:x.x,startY:x.y,endX:U.x,endY:U.y,thickness:8},isSelected:!1,onSelect:()=>{}}),O&&m.jsx("div",{className:"absolute pointer-events-none",style:{left:`${O.startX}px`,top:`${O.startY}px`,width:`${Math.sqrt(Math.pow(O.endX-O.startX,2)+Math.pow(O.endY-O.startY,2))}px`,height:"4px",transform:`rotate(${Math.atan2(O.endY-O.startY,O.endX-O.startX)*(180/Math.PI)}deg)`,transformOrigin:"top left",zIndex:15},children:m.jsx("div",{className:"w-full h-full border-2 border-blue-400 border-dashed opacity-70 bg-blue-100 rounded-sm"})}),he==null?void 0:he.fixedElements.map(k=>m.jsx(Zl,{element:k,isSelected:(s==null?void 0:s.type)==="fixedElement"&&s.id===k.id,onSelect:()=>Be("fixedElement",k.id),onDragStart:V=>fe(V,k.id)},k.id)),he==null?void 0:he.chairs.map(k=>{const V=he.tables.find(w=>w.id===k.tableId);if(!V)return null;const F=he.chairs.filter(w=>w.tableId===k.tableId&&w.position===k.position).length;return m.jsx(ql,{chair:k,table:V,totalChairsOnSide:F,isSelected:!1,onSelect:()=>{},onDrag:()=>{},onDragEnd:()=>{}},k.id)}),s&&s.type==="table"&&ke&&m.jsx("div",{className:"absolute border-2 border-blue-500 border-dashed rounded pointer-events-none",style:{left:ke.x-10,top:ke.y-10,width:(ke.shape==="rectangle"?ke.width*1.5:ke.width)+20,height:ke.height+20,transform:`rotate(${ke.rotation||0}deg)`}})]}),m.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 border-t border-gray-200 p-3",children:m.jsxs("div",{className:"flex items-center justify-between text-sm",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[m.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),m.jsxs("span",{children:["Floor: ",he==null?void 0:he.name]})]}),o&&m.jsxs("div",{className:"flex items-center gap-2 text-blue-600",children:[m.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-pulse"}),m.jsx("span",{children:"Dragging..."})]})]}),m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsxs("div",{className:"text-gray-500",children:["Zoom: ",Math.round(d*100),"% | Grid: ",u?"On":"Off"]}),s&&m.jsx("div",{className:"text-blue-600 font-medium",children:s.type==="table"&&ke?`${ke.name} (${ke.shape})`:"Element Selected"})]})]})})]})]}),he&&m.jsx(pl,{floor:he,isOpen:g,onClose:()=>_(!1)})]})};vn.Preview3DModal=pl,vn.RestaurantFloorPlanner=Dp,Object.defineProperty(vn,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=restaurant-floor-planner.umd.js.map
