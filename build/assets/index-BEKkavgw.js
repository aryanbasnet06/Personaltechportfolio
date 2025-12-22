(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))W(O);new MutationObserver(O=>{for(const F of O)if(F.type==="childList")for(const ue of F.addedNodes)ue.tagName==="LINK"&&ue.rel==="modulepreload"&&W(ue)}).observe(document,{childList:!0,subtree:!0});function h(O){const F={};return O.integrity&&(F.integrity=O.integrity),O.referrerPolicy&&(F.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?F.credentials="include":O.crossOrigin==="anonymous"?F.credentials="omit":F.credentials="same-origin",F}function W(O){if(O.ep)return;O.ep=!0;const F=h(O);fetch(O.href,F)}})();var So={exports:{}},yr={},Eo={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu;function Od(){if(Eu)return M;Eu=1;var C=Symbol.for("react.element"),R=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),ue=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ye=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ne=Symbol.iterator;function q(d){return d===null||typeof d!="object"?null:(d=ne&&d[ne]||d["@@iterator"],typeof d=="function"?d:null)}var We={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qe=Object.assign,b={};function $(d,v,D){this.props=d,this.context=v,this.refs=b,this.updater=D||We}$.prototype.isReactComponent={},$.prototype.setState=function(d,v){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,v,"setState")},$.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function gt(){}gt.prototype=$.prototype;function at(d,v,D){this.props=d,this.context=v,this.refs=b,this.updater=D||We}var qe=at.prototype=new gt;qe.constructor=at,Qe(qe,$.prototype),qe.isPureReactComponent=!0;var ke=Array.isArray,be=Object.prototype.hasOwnProperty,Ce={current:null},Te={key:!0,ref:!0,__self:!0,__source:!0};function Ge(d,v,D){var A,B={},H=null,K=null;if(v!=null)for(A in v.ref!==void 0&&(K=v.ref),v.key!==void 0&&(H=""+v.key),v)be.call(v,A)&&!Te.hasOwnProperty(A)&&(B[A]=v[A]);var G=arguments.length-2;if(G===1)B.children=D;else if(1<G){for(var ee=Array(G),Fe=0;Fe<G;Fe++)ee[Fe]=arguments[Fe+2];B.children=ee}if(d&&d.defaultProps)for(A in G=d.defaultProps,G)B[A]===void 0&&(B[A]=G[A]);return{$$typeof:C,type:d,key:H,ref:K,props:B,_owner:Ce.current}}function Ct(d,v){return{$$typeof:C,type:d.type,key:v,ref:d.ref,props:d.props,_owner:d._owner}}function vt(d){return typeof d=="object"&&d!==null&&d.$$typeof===C}function Yt(d){var v={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(D){return v[D]})}var ut=/\/+/g;function Ae(d,v){return typeof d=="object"&&d!==null&&d.key!=null?Yt(""+d.key):v.toString(36)}function et(d,v,D,A,B){var H=typeof d;(H==="undefined"||H==="boolean")&&(d=null);var K=!1;if(d===null)K=!0;else switch(H){case"string":case"number":K=!0;break;case"object":switch(d.$$typeof){case C:case R:K=!0}}if(K)return K=d,B=B(K),d=A===""?"."+Ae(K,0):A,ke(B)?(D="",d!=null&&(D=d.replace(ut,"$&/")+"/"),et(B,v,D,"",function(Fe){return Fe})):B!=null&&(vt(B)&&(B=Ct(B,D+(!B.key||K&&K.key===B.key?"":(""+B.key).replace(ut,"$&/")+"/")+d)),v.push(B)),1;if(K=0,A=A===""?".":A+":",ke(d))for(var G=0;G<d.length;G++){H=d[G];var ee=A+Ae(H,G);K+=et(H,v,D,ee,B)}else if(ee=q(d),typeof ee=="function")for(d=ee.call(d),G=0;!(H=d.next()).done;)H=H.value,ee=A+Ae(H,G++),K+=et(H,v,D,ee,B);else if(H==="object")throw v=String(d),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return K}function ct(d,v,D){if(d==null)return d;var A=[],B=0;return et(d,A,"","",function(H){return v.call(D,H,B++)}),A}function Pe(d){if(d._status===-1){var v=d._result;v=v(),v.then(function(D){(d._status===0||d._status===-1)&&(d._status=1,d._result=D)},function(D){(d._status===0||d._status===-1)&&(d._status=2,d._result=D)}),d._status===-1&&(d._status=0,d._result=v)}if(d._status===1)return d._result.default;throw d._result}var le={current:null},k={transition:null},I={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:k,ReactCurrentOwner:Ce};function S(){throw Error("act(...) is not supported in production builds of React.")}return M.Children={map:ct,forEach:function(d,v,D){ct(d,function(){v.apply(this,arguments)},D)},count:function(d){var v=0;return ct(d,function(){v++}),v},toArray:function(d){return ct(d,function(v){return v})||[]},only:function(d){if(!vt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},M.Component=$,M.Fragment=h,M.Profiler=O,M.PureComponent=at,M.StrictMode=W,M.Suspense=Q,M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,M.act=S,M.cloneElement=function(d,v,D){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var A=Qe({},d.props),B=d.key,H=d.ref,K=d._owner;if(v!=null){if(v.ref!==void 0&&(H=v.ref,K=Ce.current),v.key!==void 0&&(B=""+v.key),d.type&&d.type.defaultProps)var G=d.type.defaultProps;for(ee in v)be.call(v,ee)&&!Te.hasOwnProperty(ee)&&(A[ee]=v[ee]===void 0&&G!==void 0?G[ee]:v[ee])}var ee=arguments.length-2;if(ee===1)A.children=D;else if(1<ee){G=Array(ee);for(var Fe=0;Fe<ee;Fe++)G[Fe]=arguments[Fe+2];A.children=G}return{$$typeof:C,type:d.type,key:B,ref:H,props:A,_owner:K}},M.createContext=function(d){return d={$$typeof:ue,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:F,_context:d},d.Consumer=d},M.createElement=Ge,M.createFactory=function(d){var v=Ge.bind(null,d);return v.type=d,v},M.createRef=function(){return{current:null}},M.forwardRef=function(d){return{$$typeof:ce,render:d}},M.isValidElement=vt,M.lazy=function(d){return{$$typeof:me,_payload:{_status:-1,_result:d},_init:Pe}},M.memo=function(d,v){return{$$typeof:ye,type:d,compare:v===void 0?null:v}},M.startTransition=function(d){var v=k.transition;k.transition={};try{d()}finally{k.transition=v}},M.unstable_act=S,M.useCallback=function(d,v){return le.current.useCallback(d,v)},M.useContext=function(d){return le.current.useContext(d)},M.useDebugValue=function(){},M.useDeferredValue=function(d){return le.current.useDeferredValue(d)},M.useEffect=function(d,v){return le.current.useEffect(d,v)},M.useId=function(){return le.current.useId()},M.useImperativeHandle=function(d,v,D){return le.current.useImperativeHandle(d,v,D)},M.useInsertionEffect=function(d,v){return le.current.useInsertionEffect(d,v)},M.useLayoutEffect=function(d,v){return le.current.useLayoutEffect(d,v)},M.useMemo=function(d,v){return le.current.useMemo(d,v)},M.useReducer=function(d,v,D){return le.current.useReducer(d,v,D)},M.useRef=function(d){return le.current.useRef(d)},M.useState=function(d){return le.current.useState(d)},M.useSyncExternalStore=function(d,v,D){return le.current.useSyncExternalStore(d,v,D)},M.useTransition=function(){return le.current.useTransition()},M.version="18.3.1",M}var Cu;function To(){return Cu||(Cu=1,Eo.exports=Od()),Eo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function Dd(){if(_u)return yr;_u=1;var C=To(),R=Symbol.for("react.element"),h=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,O=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F={key:!0,ref:!0,__self:!0,__source:!0};function ue(ce,Q,ye){var me,ne={},q=null,We=null;ye!==void 0&&(q=""+ye),Q.key!==void 0&&(q=""+Q.key),Q.ref!==void 0&&(We=Q.ref);for(me in Q)W.call(Q,me)&&!F.hasOwnProperty(me)&&(ne[me]=Q[me]);if(ce&&ce.defaultProps)for(me in Q=ce.defaultProps,Q)ne[me]===void 0&&(ne[me]=Q[me]);return{$$typeof:R,type:ce,key:q,ref:We,props:ne,_owner:O.current}}return yr.Fragment=h,yr.jsx=ue,yr.jsxs=ue,yr}var zu;function Md(){return zu||(zu=1,So.exports=Dd()),So.exports}var o=Md(),Ti={},Co={exports:{}},Me={},_o={exports:{}},zo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Ad(){return Tu||(Tu=1,(function(C){function R(k,I){var S=k.length;k.push(I);e:for(;0<S;){var d=S-1>>>1,v=k[d];if(0<O(v,I))k[d]=I,k[S]=v,S=d;else break e}}function h(k){return k.length===0?null:k[0]}function W(k){if(k.length===0)return null;var I=k[0],S=k.pop();if(S!==I){k[0]=S;e:for(var d=0,v=k.length,D=v>>>1;d<D;){var A=2*(d+1)-1,B=k[A],H=A+1,K=k[H];if(0>O(B,S))H<v&&0>O(K,B)?(k[d]=K,k[H]=S,d=H):(k[d]=B,k[A]=S,d=A);else if(H<v&&0>O(K,S))k[d]=K,k[H]=S,d=H;else break e}}return I}function O(k,I){var S=k.sortIndex-I.sortIndex;return S!==0?S:k.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var F=performance;C.unstable_now=function(){return F.now()}}else{var ue=Date,ce=ue.now();C.unstable_now=function(){return ue.now()-ce}}var Q=[],ye=[],me=1,ne=null,q=3,We=!1,Qe=!1,b=!1,$=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,at=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function qe(k){for(var I=h(ye);I!==null;){if(I.callback===null)W(ye);else if(I.startTime<=k)W(ye),I.sortIndex=I.expirationTime,R(Q,I);else break;I=h(ye)}}function ke(k){if(b=!1,qe(k),!Qe)if(h(Q)!==null)Qe=!0,Pe(be);else{var I=h(ye);I!==null&&le(ke,I.startTime-k)}}function be(k,I){Qe=!1,b&&(b=!1,gt(Ge),Ge=-1),We=!0;var S=q;try{for(qe(I),ne=h(Q);ne!==null&&(!(ne.expirationTime>I)||k&&!Yt());){var d=ne.callback;if(typeof d=="function"){ne.callback=null,q=ne.priorityLevel;var v=d(ne.expirationTime<=I);I=C.unstable_now(),typeof v=="function"?ne.callback=v:ne===h(Q)&&W(Q),qe(I)}else W(Q);ne=h(Q)}if(ne!==null)var D=!0;else{var A=h(ye);A!==null&&le(ke,A.startTime-I),D=!1}return D}finally{ne=null,q=S,We=!1}}var Ce=!1,Te=null,Ge=-1,Ct=5,vt=-1;function Yt(){return!(C.unstable_now()-vt<Ct)}function ut(){if(Te!==null){var k=C.unstable_now();vt=k;var I=!0;try{I=Te(!0,k)}finally{I?Ae():(Ce=!1,Te=null)}}else Ce=!1}var Ae;if(typeof at=="function")Ae=function(){at(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,Ae=function(){ct.postMessage(null)}}else Ae=function(){$(ut,0)};function Pe(k){Te=k,Ce||(Ce=!0,Ae())}function le(k,I){Ge=$(function(){k(C.unstable_now())},I)}C.unstable_IdlePriority=5,C.unstable_ImmediatePriority=1,C.unstable_LowPriority=4,C.unstable_NormalPriority=3,C.unstable_Profiling=null,C.unstable_UserBlockingPriority=2,C.unstable_cancelCallback=function(k){k.callback=null},C.unstable_continueExecution=function(){Qe||We||(Qe=!0,Pe(be))},C.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ct=0<k?Math.floor(1e3/k):5},C.unstable_getCurrentPriorityLevel=function(){return q},C.unstable_getFirstCallbackNode=function(){return h(Q)},C.unstable_next=function(k){switch(q){case 1:case 2:case 3:var I=3;break;default:I=q}var S=q;q=I;try{return k()}finally{q=S}},C.unstable_pauseExecution=function(){},C.unstable_requestPaint=function(){},C.unstable_runWithPriority=function(k,I){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var S=q;q=k;try{return I()}finally{q=S}},C.unstable_scheduleCallback=function(k,I,S){var d=C.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?d+S:d):S=d,k){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=S+v,k={id:me++,callback:I,priorityLevel:k,startTime:S,expirationTime:v,sortIndex:-1},S>d?(k.sortIndex=S,R(ye,k),h(Q)===null&&k===h(ye)&&(b?(gt(Ge),Ge=-1):b=!0,le(ke,S-d))):(k.sortIndex=v,R(Q,k),Qe||We||(Qe=!0,Pe(be))),k},C.unstable_shouldYield=Yt,C.unstable_wrapCallback=function(k){var I=q;return function(){var S=q;q=I;try{return k.apply(this,arguments)}finally{q=S}}}})(zo)),zo}var Pu;function Fd(){return Pu||(Pu=1,_o.exports=Ad()),_o.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Ud(){if(Iu)return Me;Iu=1;var C=To(),R=Fd();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W=new Set,O={};function F(e,t){ue(e,t),ue(e+"Capture",t)}function ue(e,t){for(O[e]=t,e=0;e<t.length;e++)W.add(t[e])}var ce=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Q=Object.prototype.hasOwnProperty,ye=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,me={},ne={};function q(e){return Q.call(ne,e)?!0:Q.call(me,e)?!1:ye.test(e)?ne[e]=!0:(me[e]=!0,!1)}function We(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qe(e,t,n,r){if(t===null||typeof t>"u"||We(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){$[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){$[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){$[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){$[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){$[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var gt=/[\-:]([a-z])/g;function at(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gt,at);$[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gt,at);$[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gt,at);$[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){$[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),$.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){$[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function qe(e,t,n,r){var i=$.hasOwnProperty(t)?$[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qe(t,n,i,r)&&(n=null),r||i===null?q(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ke=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Ct=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),k=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var S=Object.assign,d;function v(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var D=!1;function A(e,t){if(!e||D)return"";D=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var i=m.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{D=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function B(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=A(e.type,!1),e;case 11:return e=A(e.type.render,!1),e;case 1:return e=A(e.type,!0),e;default:return""}}function H(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case Ce:return"Portal";case Ct:return"Profiler";case Ge:return"StrictMode";case Ae:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yt:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:H(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return H(e(t))}catch{}}return null}function K(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function G(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fe(e){var t=ee(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=Fe(e))}function Io(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ee(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pi(e,t){var n=t.checked;return S({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ro(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=G(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lo(e,t){t=t.checked,t!=null&&qe(e,"checked",t,!1)}function Ii(e,t){Lo(e,t);var n=G(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ri(e,t.type,G(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ri(e,t,n){(t!=="number"||wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+G(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return S({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Do(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Ln(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:G(n)}}function Mo(e,t){var n=G(t.value),r=G(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ao(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Uo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fu=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Fu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Bo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Ho(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Uu=S({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Di(e,t){if(t){if(Uu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function Fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ui=null,an=null,un=null;function Vo(e){if(e=rr(e)){if(typeof Ui!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Qr(t),Ui(e.stateNode,e.type,t))}}function Wo(e){an?un?un.push(e):un=[e]:an=e}function Qo(){if(an){var e=an,t=un;if(un=an=null,Vo(e),t)for(e=0;e<t.length;e++)Vo(t[e])}}function Go(e,t){return e(t)}function Yo(){}var Bi=!1;function $o(e,t,n){if(Bi)return e(t,n);Bi=!0;try{return Go(e,t,n)}finally{Bi=!1,(an!==null||un!==null)&&(Yo(),Qo())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=Qr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Hi=!1;if(ce)try{var An={};Object.defineProperty(An,"passive",{get:function(){Hi=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Hi=!1}function Bu(e,t,n,r,i,l,s,a,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(y){this.onError(y)}}var Fn=!1,jr=null,Nr=!1,Vi=null,Hu={onError:function(e){Fn=!0,jr=e}};function Vu(e,t,n,r,i,l,s,a,u){Fn=!1,jr=null,Bu.apply(Hu,arguments)}function Wu(e,t,n,r,i,l,s,a,u){if(Vu.apply(this,arguments),Fn){if(Fn){var m=jr;Fn=!1,jr=null}else throw Error(h(198));Nr||(Nr=!0,Vi=m)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ko(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xo(e){if($t(e)!==e)throw Error(h(188))}function Qu(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Xo(i),e;if(l===r)return Xo(i),t;l=l.sibling}throw Error(h(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Zo(e){return e=Qu(e),e!==null?Jo(e):null}function Jo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jo(e);if(t!==null)return t;e=e.sibling}return null}var qo=R.unstable_scheduleCallback,bo=R.unstable_cancelCallback,Gu=R.unstable_shouldYield,Yu=R.unstable_requestPaint,se=R.unstable_now,$u=R.unstable_getCurrentPriorityLevel,Wi=R.unstable_ImmediatePriority,es=R.unstable_UserBlockingPriority,Sr=R.unstable_NormalPriority,Ku=R.unstable_LowPriority,ts=R.unstable_IdlePriority,Er=null,dt=null;function Xu(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Er,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:qu,Zu=Math.log,Ju=Math.LN2;function qu(e){return e>>>=0,e===0?32:31-(Zu(e)/Ju|0)|0}var Cr=64,_r=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Un(a):(l&=s,l!==0&&(r=Un(l)))}else s=n&~i,s!==0?r=Un(s):l!==0&&(r=Un(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function bu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-tt(l),a=1<<s,u=i[s];u===-1?((a&n)===0||(a&r)!==0)&&(i[s]=bu(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ns(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function Gi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function tc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Yi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function rs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var is,$i,ls,os,ss,Ki=!1,Tr=[],_t=null,zt=null,Tt=null,Hn=new Map,Vn=new Map,Pt=[],nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function as(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Wn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=rr(t),t!==null&&$i(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rc(e,t,n,r,i){switch(t){case"focusin":return _t=Wn(_t,e,t,n,r,i),!0;case"dragenter":return zt=Wn(zt,e,t,n,r,i),!0;case"mouseover":return Tt=Wn(Tt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Hn.set(l,Wn(Hn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Vn.set(l,Wn(Vn.get(l)||null,e,t,n,r,i)),!0}return!1}function us(e){var t=Kt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Ko(n),t!==null){e.blockedOn=t,ss(e.priority,function(){ls(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ai=r,n.target.dispatchEvent(r),Ai=null}else return t=rr(n),t!==null&&$i(t),e.blockedOn=n,!1;t.shift()}return!0}function cs(e,t,n){Pr(e)&&n.delete(t)}function ic(){Ki=!1,_t!==null&&Pr(_t)&&(_t=null),zt!==null&&Pr(zt)&&(zt=null),Tt!==null&&Pr(Tt)&&(Tt=null),Hn.forEach(cs),Vn.forEach(cs)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ki||(Ki=!0,R.unstable_scheduleCallback(R.unstable_NormalPriority,ic)))}function Gn(e){function t(i){return Qn(i,e)}if(0<Tr.length){Qn(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Qn(_t,e),zt!==null&&Qn(zt,e),Tt!==null&&Qn(Tt,e),Hn.forEach(t),Vn.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)us(n),n.blockedOn===null&&Pt.shift()}var cn=ke.ReactCurrentBatchConfig,Ir=!0;function lc(e,t,n,r){var i=Y,l=cn.transition;cn.transition=null;try{Y=1,Xi(e,t,n,r)}finally{Y=i,cn.transition=l}}function oc(e,t,n,r){var i=Y,l=cn.transition;cn.transition=null;try{Y=4,Xi(e,t,n,r)}finally{Y=i,cn.transition=l}}function Xi(e,t,n,r){if(Ir){var i=Zi(e,t,n,r);if(i===null)pl(e,t,r,Rr,n),as(e,r);else if(rc(i,e,t,n,r))r.stopPropagation();else if(as(e,r),t&4&&-1<nc.indexOf(e)){for(;i!==null;){var l=rr(i);if(l!==null&&is(l),l=Zi(e,t,n,r),l===null&&pl(e,t,r,Rr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var Rr=null;function Zi(e,t,n,r){if(Rr=null,e=Fi(r),e=Kt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ko(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rr=e,null}function ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($u()){case Wi:return 1;case es:return 4;case Sr:case Ku:return 16;case ts:return 536870912;default:return 16}default:return 16}}var It=null,Ji=null,Lr=null;function fs(){if(Lr)return Lr;var e,t=Ji,n=t.length,r,i="value"in It?It.value:It.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return Lr=i.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function ps(){return!1}function Ue(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Dr:ps,this.isPropagationStopped=ps,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=Ue(dn),Yn=S({},dn,{view:0,detail:0}),sc=Ue(Yn),bi,el,$n,Mr=S({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(bi=e.screenX-$n.screenX,el=e.screenY-$n.screenY):el=bi=0,$n=e),bi)},movementY:function(e){return"movementY"in e?e.movementY:el}}),ms=Ue(Mr),ac=S({},Mr,{dataTransfer:0}),uc=Ue(ac),cc=S({},Yn,{relatedTarget:0}),tl=Ue(cc),dc=S({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),fc=Ue(dc),pc=S({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mc=Ue(pc),hc=S({},dn,{data:0}),hs=Ue(hc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yc[e])?!!t[e]:!1}function nl(){return xc}var wc=S({},Yn,{key:function(e){if(e.key){var t=gc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kc=Ue(wc),jc=S({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gs=Ue(jc),Nc=S({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),Sc=Ue(Nc),Ec=S({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cc=Ue(Ec),_c=S({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zc=Ue(_c),Tc=[9,13,27,32],rl=ce&&"CompositionEvent"in window,Kn=null;ce&&"documentMode"in document&&(Kn=document.documentMode);var Pc=ce&&"TextEvent"in window&&!Kn,vs=ce&&(!rl||Kn&&8<Kn&&11>=Kn),ys=" ",xs=!1;function ws(e,t){switch(e){case"keyup":return Tc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Ic(e,t){switch(e){case"compositionend":return ks(t);case"keypress":return t.which!==32?null:(xs=!0,ys);case"textInput":return e=t.data,e===ys&&xs?null:e;default:return null}}function Rc(e,t){if(fn)return e==="compositionend"||!rl&&ws(e,t)?(e=fs(),Lr=Ji=It=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vs&&t.locale!=="ko"?null:t.data;default:return null}}var Lc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lc[e.type]:t==="textarea"}function Ns(e,t,n,r){Wo(r),t=Hr(t,"onChange"),0<t.length&&(n=new qi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,Zn=null;function Oc(e){Hs(e,0)}function Ar(e){var t=vn(e);if(Io(t))return e}function Dc(e,t){if(e==="change")return t}var Ss=!1;if(ce){var il;if(ce){var ll="oninput"in document;if(!ll){var Es=document.createElement("div");Es.setAttribute("oninput","return;"),ll=typeof Es.oninput=="function"}il=ll}else il=!1;Ss=il&&(!document.documentMode||9<document.documentMode)}function Cs(){Xn&&(Xn.detachEvent("onpropertychange",_s),Zn=Xn=null)}function _s(e){if(e.propertyName==="value"&&Ar(Zn)){var t=[];Ns(t,Zn,e,Fi(e)),$o(Oc,t)}}function Mc(e,t,n){e==="focusin"?(Cs(),Xn=t,Zn=n,Xn.attachEvent("onpropertychange",_s)):e==="focusout"&&Cs()}function Ac(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ar(Zn)}function Fc(e,t){if(e==="click")return Ar(t)}function Uc(e,t){if(e==="input"||e==="change")return Ar(t)}function Bc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Bc;function Jn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Q.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ts(e,t){var n=zs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zs(n)}}function Ps(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ps(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Is(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wr(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hc(e){var t=Is(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ps(n.ownerDocument.documentElement,n)){if(r!==null&&ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ts(n,l);var s=Ts(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vc=ce&&"documentMode"in document&&11>=document.documentMode,pn=null,sl=null,qn=null,al=!1;function Rs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||pn==null||pn!==wr(r)||(r=pn,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qn&&Jn(qn,r)||(qn=r,r=Hr(sl,"onSelect"),0<r.length&&(t=new qi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},ul={},Ls={};ce&&(Ls=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Ur(e){if(ul[e])return ul[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ls)return ul[e]=t[n];return e}var Os=Ur("animationend"),Ds=Ur("animationiteration"),Ms=Ur("animationstart"),As=Ur("transitionend"),Fs=new Map,Us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Fs.set(e,t),F(t,[e])}for(var cl=0;cl<Us.length;cl++){var dl=Us[cl],Wc=dl.toLowerCase(),Qc=dl[0].toUpperCase()+dl.slice(1);Rt(Wc,"on"+Qc)}Rt(Os,"onAnimationEnd"),Rt(Ds,"onAnimationIteration"),Rt(Ms,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(As,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),F("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),F("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),F("onBeforeInput",["compositionend","keypress","textInput","paste"]),F("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gc=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function Bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wu(r,t,void 0,e),e.currentTarget=null}function Hs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,m=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;Bs(i,a,m),l=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,m=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;Bs(i,a,m),l=u}}}if(Nr)throw e=Vi,Nr=!1,Vi=null,e}function Z(e,t){var n=t[xl];n===void 0&&(n=t[xl]=new Set);var r=e+"__bubble";n.has(r)||(Vs(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),Vs(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Br]){e[Br]=!0,W.forEach(function(n){n!=="selectionchange"&&(Gc.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,fl("selectionchange",!1,t))}}function Vs(e,t,n,r){switch(ds(t)){case 1:var i=lc;break;case 4:i=oc;break;default:i=Xi}n=i.bind(null,t,n,e),i=void 0,!Hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Kt(a),s===null)return;if(u=s.tag,u===5||u===6){r=l=s;continue e}a=a.parentNode}}r=r.return}$o(function(){var m=l,y=Fi(n),x=[];e:{var g=Fs.get(e);if(g!==void 0){var j=qi,E=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":j=kc;break;case"focusin":E="focus",j=tl;break;case"focusout":E="blur",j=tl;break;case"beforeblur":case"afterblur":j=tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Sc;break;case Os:case Ds:case Ms:j=fc;break;case As:j=Cc;break;case"scroll":j=sc;break;case"wheel":j=zc;break;case"copy":case"cut":case"paste":j=mc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=gs}var _=(t&4)!==0,ae=!_&&e==="scroll",f=_?g!==null?g+"Capture":null:g;_=[];for(var c=m,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Mn(c,f),w!=null&&_.push(tr(c,w,p)))),ae)break;c=c.return}0<_.length&&(g=new j(g,E,null,n,y),x.push({event:g,listeners:_}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",g&&n!==Ai&&(E=n.relatedTarget||n.fromElement)&&(Kt(E)||E[yt]))break e;if((j||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,j?(E=n.relatedTarget||n.toElement,j=m,E=E?Kt(E):null,E!==null&&(ae=$t(E),E!==ae||E.tag!==5&&E.tag!==6)&&(E=null)):(j=null,E=m),j!==E)){if(_=ms,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=gs,w="onPointerLeave",f="onPointerEnter",c="pointer"),ae=j==null?g:vn(j),p=E==null?g:vn(E),g=new _(w,c+"leave",j,n,y),g.target=ae,g.relatedTarget=p,w=null,Kt(y)===m&&(_=new _(f,c+"enter",E,n,y),_.target=p,_.relatedTarget=ae,w=_),ae=w,j&&E)t:{for(_=j,f=E,c=0,p=_;p;p=hn(p))c++;for(p=0,w=f;w;w=hn(w))p++;for(;0<c-p;)_=hn(_),c--;for(;0<p-c;)f=hn(f),p--;for(;c--;){if(_===f||f!==null&&_===f.alternate)break t;_=hn(_),f=hn(f)}_=null}else _=null;j!==null&&Ws(x,g,j,_,!1),E!==null&&ae!==null&&Ws(x,ae,E,_,!0)}}e:{if(g=m?vn(m):window,j=g.nodeName&&g.nodeName.toLowerCase(),j==="select"||j==="input"&&g.type==="file")var z=Dc;else if(js(g))if(Ss)z=Uc;else{z=Ac;var T=Mc}else(j=g.nodeName)&&j.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=Fc);if(z&&(z=z(e,m))){Ns(x,z,n,y);break e}T&&T(e,g,m),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Ri(g,"number",g.value)}switch(T=m?vn(m):window,e){case"focusin":(js(T)||T.contentEditable==="true")&&(pn=T,sl=m,qn=null);break;case"focusout":qn=sl=pn=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,Rs(x,n,y);break;case"selectionchange":if(Vc)break;case"keydown":case"keyup":Rs(x,n,y)}var P;if(rl)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else fn?ws(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(vs&&n.locale!=="ko"&&(fn||L!=="onCompositionStart"?L==="onCompositionEnd"&&fn&&(P=fs()):(It=y,Ji="value"in It?It.value:It.textContent,fn=!0)),T=Hr(m,L),0<T.length&&(L=new hs(L,e,null,n,y),x.push({event:L,listeners:T}),P?L.data=P:(P=ks(n),P!==null&&(L.data=P)))),(P=Pc?Ic(e,n):Rc(e,n))&&(m=Hr(m,"onBeforeInput"),0<m.length&&(y=new hs("onBeforeInput","beforeinput",null,n,y),x.push({event:y,listeners:m}),y.data=P))}Hs(x,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Mn(e,n),l!=null&&r.unshift(tr(e,l,i)),l=Mn(e,t),l!=null&&r.push(tr(e,l,i))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ws(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,m=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&m!==null&&(a=m,i?(u=Mn(n,l),u!=null&&s.unshift(tr(n,u,a))):i||(u=Mn(n,l),u!=null&&s.push(tr(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Yc=/\r\n?/g,$c=/\u0000|\uFFFD/g;function Qs(e){return(typeof e=="string"?e:""+e).replace(Yc,`
`).replace($c,"")}function Vr(e,t,n){if(t=Qs(t),Qs(e)!==t&&n)throw Error(h(425))}function Wr(){}var ml=null,hl=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,Kc=typeof clearTimeout=="function"?clearTimeout:void 0,Gs=typeof Promise=="function"?Promise:void 0,Xc=typeof queueMicrotask=="function"?queueMicrotask:typeof Gs<"u"?function(e){return Gs.resolve(null).then(e).catch(Zc)}:vl;function Zc(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gn(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ys(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),ft="__reactFiber$"+gn,nr="__reactProps$"+gn,yt="__reactContainer$"+gn,xl="__reactEvents$"+gn,Jc="__reactListeners$"+gn,qc="__reactHandles$"+gn;function Kt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ys(e);e!==null;){if(n=e[ft])return n;e=Ys(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[ft]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Qr(e){return e[nr]||null}var wl=[],yn=-1;function Ot(e){return{current:e}}function J(e){0>yn||(e.current=wl[yn],wl[yn]=null,yn--)}function X(e,t){yn++,wl[yn]=e.current,e.current=t}var Dt={},je=Ot(Dt),Ie=Ot(!1),Xt=Dt;function xn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function Gr(){J(Ie),J(je)}function $s(e,t,n){if(je.current!==Dt)throw Error(h(168));X(je,t),X(Ie,n)}function Ks(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(h(108,K(e)||"Unknown",i));return S({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Xt=je.current,X(je,e),X(Ie,Ie.current),!0}function Xs(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Ks(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,J(Ie),J(je),X(je,e)):J(Ie),X(Ie,n)}var xt=null,$r=!1,kl=!1;function Zs(e){xt===null?xt=[e]:xt.push(e)}function bc(e){$r=!0,Zs(e)}function Mt(){if(!kl&&xt!==null){kl=!0;var e=0,t=Y;try{var n=xt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,$r=!1}catch(i){throw xt!==null&&(xt=xt.slice(e+1)),qo(Wi,Mt),i}finally{Y=t,kl=!1}}return null}var wn=[],kn=0,Kr=null,Xr=0,Ye=[],$e=0,Zt=null,wt=1,kt="";function Jt(e,t){wn[kn++]=Xr,wn[kn++]=Kr,Kr=e,Xr=t}function Js(e,t,n){Ye[$e++]=wt,Ye[$e++]=kt,Ye[$e++]=Zt,Zt=e;var r=wt;e=kt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var l=32-tt(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,wt=1<<32-tt(t)+i|n<<i|r,kt=l+e}else wt=1<<l|n<<i|r,kt=e}function jl(e){e.return!==null&&(Jt(e,1),Js(e,1,0))}function Nl(e){for(;e===Kr;)Kr=wn[--kn],wn[kn]=null,Xr=wn[--kn],wn[kn]=null;for(;e===Zt;)Zt=Ye[--$e],Ye[$e]=null,kt=Ye[--$e],Ye[$e]=null,wt=Ye[--$e],Ye[$e]=null}var Be=null,He=null,te=!1,rt=null;function qs(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,He=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:wt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,He=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function El(e){if(te){var t=He;if(t){var n=t;if(!bs(e,t)){if(Sl(e))throw Error(h(418));t=Lt(n.nextSibling);var r=Be;t&&bs(e,t)?qs(r,n):(e.flags=e.flags&-4097|2,te=!1,Be=e)}}else{if(Sl(e))throw Error(h(418));e.flags=e.flags&-4097|2,te=!1,Be=e}}}function ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Zr(e){if(e!==Be)return!1;if(!te)return ea(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=He)){if(Sl(e))throw ta(),Error(h(418));for(;t;)qs(e,t),t=Lt(t.nextSibling)}if(ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Be?Lt(e.stateNode.nextSibling):null;return!0}function ta(){for(var e=He;e;)e=Lt(e.nextSibling)}function jn(){He=Be=null,te=!1}function Cl(e){rt===null?rt=[e]:rt.push(e)}var ed=ke.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=i.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Jr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function na(e){var t=e._init;return t(e._payload)}function ra(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Qt(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,w){return c===null||c.tag!==6?(c=yo(p,f.mode,w),c.return=f,c):(c=i(c,p),c.return=f,c)}function u(f,c,p,w){var z=p.type;return z===Te?y(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Pe&&na(z)===c.type)?(w=i(c,p.props),w.ref=ir(f,c,p),w.return=f,w):(w=ki(p.type,p.key,p.props,null,f.mode,w),w.ref=ir(f,c,p),w.return=f,w)}function m(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=xo(p,f.mode,w),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function y(f,c,p,w,z){return c===null||c.tag!==7?(c=on(p,f.mode,w,z),c.return=f,c):(c=i(c,p),c.return=f,c)}function x(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=yo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case be:return p=ki(c.type,c.key,c.props,null,f.mode,p),p.ref=ir(f,null,c),p.return=f,p;case Ce:return c=xo(c,f.mode,p),c.return=f,c;case Pe:var w=c._init;return x(f,w(c._payload),p)}if(Ln(c)||I(c))return c=on(c,f.mode,p,null),c.return=f,c;Jr(f,c)}return null}function g(f,c,p,w){var z=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:a(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case be:return p.key===z?u(f,c,p,w):null;case Ce:return p.key===z?m(f,c,p,w):null;case Pe:return z=p._init,g(f,c,z(p._payload),w)}if(Ln(p)||I(p))return z!==null?null:y(f,c,p,w,null);Jr(f,p)}return null}function j(f,c,p,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(c,f,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case be:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,z);case Ce:return f=f.get(w.key===null?p:w.key)||null,m(c,f,w,z);case Pe:var T=w._init;return j(f,c,p,T(w._payload),z)}if(Ln(w)||I(w))return f=f.get(p)||null,y(c,f,w,z,null);Jr(c,w)}return null}function E(f,c,p,w){for(var z=null,T=null,P=c,L=c=0,ve=null;P!==null&&L<p.length;L++){P.index>L?(ve=P,P=null):ve=P.sibling;var V=g(f,P,p[L],w);if(V===null){P===null&&(P=ve);break}e&&P&&V.alternate===null&&t(f,P),c=l(V,c,L),T===null?z=V:T.sibling=V,T=V,P=ve}if(L===p.length)return n(f,P),te&&Jt(f,L),z;if(P===null){for(;L<p.length;L++)P=x(f,p[L],w),P!==null&&(c=l(P,c,L),T===null?z=P:T.sibling=P,T=P);return te&&Jt(f,L),z}for(P=r(f,P);L<p.length;L++)ve=j(P,f,L,p[L],w),ve!==null&&(e&&ve.alternate!==null&&P.delete(ve.key===null?L:ve.key),c=l(ve,c,L),T===null?z=ve:T.sibling=ve,T=ve);return e&&P.forEach(function(Gt){return t(f,Gt)}),te&&Jt(f,L),z}function _(f,c,p,w){var z=I(p);if(typeof z!="function")throw Error(h(150));if(p=z.call(p),p==null)throw Error(h(151));for(var T=z=null,P=c,L=c=0,ve=null,V=p.next();P!==null&&!V.done;L++,V=p.next()){P.index>L?(ve=P,P=null):ve=P.sibling;var Gt=g(f,P,V.value,w);if(Gt===null){P===null&&(P=ve);break}e&&P&&Gt.alternate===null&&t(f,P),c=l(Gt,c,L),T===null?z=Gt:T.sibling=Gt,T=Gt,P=ve}if(V.done)return n(f,P),te&&Jt(f,L),z;if(P===null){for(;!V.done;L++,V=p.next())V=x(f,V.value,w),V!==null&&(c=l(V,c,L),T===null?z=V:T.sibling=V,T=V);return te&&Jt(f,L),z}for(P=r(f,P);!V.done;L++,V=p.next())V=j(P,f,L,V.value,w),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?L:V.key),c=l(V,c,L),T===null?z=V:T.sibling=V,T=V);return e&&P.forEach(function(Ld){return t(f,Ld)}),te&&Jt(f,L),z}function ae(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Te&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case be:e:{for(var z=p.key,T=c;T!==null;){if(T.key===z){if(z=p.type,z===Te){if(T.tag===7){n(f,T.sibling),c=i(T,p.props.children),c.return=f,f=c;break e}}else if(T.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Pe&&na(z)===T.type){n(f,T.sibling),c=i(T,p.props),c.ref=ir(f,T,p),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===Te?(c=on(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=ki(p.type,p.key,p.props,null,f.mode,w),w.ref=ir(f,c,p),w.return=f,f=w)}return s(f);case Ce:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=xo(p,f.mode,w),c.return=f,f=c}return s(f);case Pe:return T=p._init,ae(f,c,T(p._payload),w)}if(Ln(p))return E(f,c,p,w);if(I(p))return _(f,c,p,w);Jr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=yo(p,f.mode,w),c.return=f,f=c),s(f)):n(f,c)}return ae}var Nn=ra(!0),ia=ra(!1),qr=Ot(null),br=null,Sn=null,_l=null;function zl(){_l=Sn=br=null}function Tl(e){var t=qr.current;J(qr),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function En(e,t){br=e,_l=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Le=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(_l!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(br===null)throw Error(h(308));Sn=e,br.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var qt=null;function Il(e){qt===null?qt=[e]:qt.push(e)}function la(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Il(t)):(n.next=i.next,i.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(U&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Il(r)):(t.next=i.next,i.next=t),r.interleaved=t,jt(e,n)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}function sa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ti(e,t,n,r){var i=e.updateQueue;At=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,m=u.next;u.next=null,s===null?l=m:s.next=m,s=u;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==s&&(a===null?y.firstBaseUpdate=m:a.next=m,y.lastBaseUpdate=u))}if(l!==null){var x=i.baseState;s=0,y=m=u=null,a=l;do{var g=a.lane,j=a.eventTime;if((r&g)===g){y!==null&&(y=y.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=e,_=a;switch(g=t,j=n,_.tag){case 1:if(E=_.payload,typeof E=="function"){x=E.call(j,x,g);break e}x=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=_.payload,g=typeof E=="function"?E.call(j,x,g):E,g==null)break e;x=S({},x,g);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else j={eventTime:j,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(m=y=j,u=x):y=y.next=j,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(y===null&&(u=x),i.baseState=u,i.firstBaseUpdate=m,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);tn|=s,e.lanes=s,e.memoizedState=x}}function aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(h(191,i));i.call(r)}}}var lr={},pt=Ot(lr),or=Ot(lr),sr=Ot(lr);function bt(e){if(e===lr)throw Error(h(174));return e}function Ll(e,t){switch(X(sr,t),X(or,e),X(pt,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}J(pt),X(pt,t)}function Cn(){J(pt),J(or),J(sr)}function ua(e){bt(sr.current);var t=bt(pt.current),n=Oi(t,e.type);t!==n&&(X(or,e),X(pt,n))}function Ol(e){or.current===e&&(J(pt),J(or))}var re=Ot(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function Ml(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var ri=ke.ReactCurrentDispatcher,Al=ke.ReactCurrentBatchConfig,en=0,ie=null,fe=null,he=null,ii=!1,ar=!1,ur=0,td=0;function Ne(){throw Error(h(321))}function Fl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Ul(e,t,n,r,i,l){if(en=l,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ri.current=e===null||e.memoizedState===null?ld:od,e=n(r,i),ar){l=0;do{if(ar=!1,ur=0,25<=l)throw Error(h(301));l+=1,he=fe=null,t.updateQueue=null,ri.current=sd,e=n(r,i)}while(ar)}if(ri.current=si,t=fe!==null&&fe.next!==null,en=0,he=fe=ie=null,ii=!1,t)throw Error(h(300));return e}function Bl(){var e=ur!==0;return ur=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ie.memoizedState=he=e:he=he.next=e,he}function Xe(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=he===null?ie.memoizedState:he.next;if(t!==null)he=t,fe=e;else{if(e===null)throw Error(h(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},he===null?ie.memoizedState=he=e:he=he.next=e}return he}function cr(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=s=null,u=null,m=l;do{var y=m.lane;if((en&y)===y)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var x={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(a=u=x,s=r):u=u.next=x,ie.lanes|=y,tn|=y}m=m.next}while(m!==null&&m!==l);u===null?s=r:u.next=a,nt(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ie.lanes|=l,tn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);nt(l,t.memoizedState)||(Le=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ca(){}function da(e,t){var n=ie,r=Xe(),i=t(),l=!nt(r.memoizedState,i);if(l&&(r.memoizedState=i,Le=!0),r=r.queue,Wl(ma.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,dr(9,pa.bind(null,n,r,i,t),void 0,null),ge===null)throw Error(h(349));(en&30)!==0||fa(n,t,i)}return i}function fa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pa(e,t,n,r){t.value=n,t.getSnapshot=r,ha(t)&&ga(e)}function ma(e,t,n){return n(function(){ha(t)&&ga(e)})}function ha(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function ga(e){var t=jt(e,1);t!==null&&st(t,e,1,-1)}function va(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=id.bind(null,ie,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ya(){return Xe().memoizedState}function li(e,t,n,r){var i=mt();ie.flags|=e,i.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var i=Xe();r=r===void 0?null:r;var l=void 0;if(fe!==null){var s=fe.memoizedState;if(l=s.destroy,r!==null&&Fl(r,s.deps)){i.memoizedState=dr(t,n,l,r);return}}ie.flags|=e,i.memoizedState=dr(1|t,n,l,r)}function xa(e,t){return li(8390656,8,e,t)}function Wl(e,t){return oi(2048,8,e,t)}function wa(e,t){return oi(4,2,e,t)}function ka(e,t){return oi(4,4,e,t)}function ja(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Na(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,4,ja.bind(null,t,e),n)}function Ql(){}function Sa(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ea(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ca(e,t,n){return(en&21)===0?(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n):(nt(n,t)||(n=ns(),ie.lanes|=n,tn|=n,e.baseState=!0),t)}function nd(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{Y=n,Al.transition=r}}function _a(){return Xe().memoizedState}function rd(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},za(e))Ta(t,n);else if(n=la(e,t,n,r),n!==null){var i=ze();st(n,e,r,i),Pa(n,t,r)}}function id(e,t,n){var r=Vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(za(e))Ta(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,s)){var u=t.interleaved;u===null?(i.next=i,Il(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=la(e,t,i,r),n!==null&&(i=ze(),st(n,e,r,i),Pa(n,t,r))}}function za(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ta(e,t){ar=ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pa(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}var si={readContext:Ke,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},ld={readContext:Ke,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,li(4194308,4,ja.bind(null,t,e),n)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rd.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:va,useDebugValue:Ql,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=va(!1),t=e[0];return e=nd.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=mt();if(te){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ge===null)throw Error(h(349));(en&30)!==0||fa(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,xa(ma.bind(null,r,l,e),[e]),r.flags|=2048,dr(9,pa.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=mt(),t=ge.identifierPrefix;if(te){var n=kt,r=wt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=td++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},od={readContext:Ke,useCallback:Sa,useContext:Ke,useEffect:Wl,useImperativeHandle:Na,useInsertionEffect:wa,useLayoutEffect:ka,useMemo:Ea,useReducer:Hl,useRef:ya,useState:function(){return Hl(cr)},useDebugValue:Ql,useDeferredValue:function(e){var t=Xe();return Ca(t,fe.memoizedState,e)},useTransition:function(){var e=Hl(cr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:_a,unstable_isNewReconciler:!1},sd={readContext:Ke,useCallback:Sa,useContext:Ke,useEffect:Wl,useImperativeHandle:Na,useInsertionEffect:wa,useLayoutEffect:ka,useMemo:Ea,useReducer:Vl,useRef:ya,useState:function(){return Vl(cr)},useDebugValue:Ql,useDeferredValue:function(e){var t=Xe();return fe===null?t.memoizedState=e:Ca(t,fe.memoizedState,e)},useTransition:function(){var e=Vl(cr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:da,useId:_a,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=S({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ai={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),i=Vt(e),l=Nt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,i),t!==null&&(st(t,e,i,r),ei(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),i=Vt(e),l=Nt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,i),t!==null&&(st(t,e,i,r),ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=Vt(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(st(t,e,r,n),ei(t,e,r))}};function Ia(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(i,l):!0}function Ra(e,t,n){var r=!1,i=Dt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ke(l):(i=Re(t)?Xt:je.current,r=t.contextTypes,l=(r=r!=null)?xn(e,i):Dt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function La(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ai.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Rl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ke(l):(l=Re(t)?Xt:je.current,i.context=xn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Gl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ai.enqueueReplaceState(i,i.state,null),ti(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _n(e,t){try{var n="",r=t;do n+=B(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Kl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Oa(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hi||(hi=!0,uo=r),Kl(e,t)},n}function Da(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Kl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Kl(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ma(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jd.bind(null,e,t,n),t.then(e,e))}function Aa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fa(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ud=ke.ReactCurrentOwner,Le=!1;function _e(e,t,n,r){t.child=e===null?ia(t,null,n,r):Nn(t,e.child,n,r)}function Ua(e,t,n,r,i){n=n.render;var l=t.ref;return En(t,i),r=Ul(e,t,n,r,l,i),n=Bl(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(te&&n&&jl(t),t.flags|=1,_e(e,t,r,i),t.child)}function Ba(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!vo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ha(e,t,l,r,i)):(e=ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(s,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Qt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ha(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Jn(l,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,St(e,t,i)}return Xl(e,t,n,r,i)}function Va(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Tn,Ve),Ve|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Tn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,X(Tn,Ve),Ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,X(Tn,Ve),Ve|=r;return _e(e,t,i,n),t.child}function Wa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xl(e,t,n,r,i){var l=Re(n)?Xt:je.current;return l=xn(t,l),En(t,i),n=Ul(e,t,n,r,l,i),r=Bl(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(te&&r&&jl(t),t.flags|=1,_e(e,t,n,i),t.child)}function Qa(e,t,n,r,i){if(Re(n)){var l=!0;Yr(t)}else l=!1;if(En(t,i),t.stateNode===null)ci(e,t),Ra(t,n,r),Yl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,m=n.contextType;typeof m=="object"&&m!==null?m=Ke(m):(m=Re(n)?Xt:je.current,m=xn(t,m));var y=n.getDerivedStateFromProps,x=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function";x||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==m)&&La(t,s,r,m),At=!1;var g=t.memoizedState;s.state=g,ti(t,r,s,i),u=t.memoizedState,a!==r||g!==u||Ie.current||At?(typeof y=="function"&&(Gl(t,n,y,r),u=t.memoizedState),(a=At||Ia(t,n,a,r,g,u,m))?(x||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=m,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,oa(e,t),a=t.memoizedProps,m=t.type===t.elementType?a:it(t.type,a),s.props=m,x=t.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ke(u):(u=Re(n)?Xt:je.current,u=xn(t,u));var j=n.getDerivedStateFromProps;(y=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==x||g!==u)&&La(t,s,r,u),At=!1,g=t.memoizedState,s.state=g,ti(t,r,s,i);var E=t.memoizedState;a!==x||g!==E||Ie.current||At?(typeof j=="function"&&(Gl(t,n,j,r),E=t.memoizedState),(m=At||Ia(t,n,m,r,g,E,u)||!1)?(y||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,E,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,E,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),s.props=r,s.state=E,s.context=u,r=m):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,l,i)}function Zl(e,t,n,r,i,l){Wa(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Xs(t,n,!1),St(e,t,l);r=t.stateNode,ud.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Nn(t,e.child,null,l),t.child=Nn(t,null,a,l)):_e(e,t,a,l),t.memoizedState=r.state,i&&Xs(t,n,!0),t.child}function Ga(e){var t=e.stateNode;t.pendingContext?$s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$s(e,t.context,!1),Ll(e,t.containerInfo)}function Ya(e,t,n,r,i){return jn(),Cl(i),t.flags|=256,_e(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function $a(e,t,n){var r=t.pendingProps,i=re.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(re,i&1),e===null)return El(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=s):l=ji(s,r,0,null),e=on(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ql(n),t.memoizedState=Jl,e):bl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cd(e,t,s,r,a,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Qt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Qt(a,l):(l=on(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?ql(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return l=e.child,e=l.sibling,r=Qt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bl(e,t){return t=ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ui(e,t,n,r){return r!==null&&Cl(r),Nn(t,e.child,null,n),e=bl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(h(422))),ui(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=ji({mode:"visible",children:r.children},i,0,null),l=on(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Nn(t,e.child,null,s),t.child.memoizedState=ql(s),t.memoizedState=Jl,l);if((t.mode&1)===0)return ui(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(h(419)),r=$l(l,r,void 0),ui(e,t,s,r)}if(a=(s&e.childLanes)!==0,Le||a){if(r=ge,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,jt(e,i),st(r,e,i,-1))}return go(),r=$l(Error(h(421))),ui(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Nd.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,He=Lt(i.nextSibling),Be=t,te=!0,rt=null,e!==null&&(Ye[$e++]=wt,Ye[$e++]=kt,Ye[$e++]=Zt,wt=e.id,kt=e.overflow,Zt=t),t=bl(t,r.children),t.flags|=4096,t)}function Ka(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function eo(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Xa(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(_e(e,t,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ka(e,n,t);else if(e.tag===19)Ka(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ni(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),eo(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ni(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}eo(t,!0,n,null,l);break;case"together":eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ci(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dd(e,t,n){switch(t.tag){case 3:Ga(t),jn();break;case 5:ua(t);break;case 1:Re(t.type)&&Yr(t);break;case 4:Ll(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(qr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?$a(e,t,n):(X(re,re.current&1),e=St(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Xa(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Va(e,t,n)}return St(e,t,n)}var Za,to,Ja,qa;Za=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},to=function(){},Ja=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bt(pt.current);var l=null;switch(n){case"input":i=Pi(e,i),r=Pi(e,r),l=[];break;case"select":i=S({},i,{value:void 0}),r=S({},r,{value:void 0}),l=[];break;case"textarea":i=Li(e,i),r=Li(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}Di(n,r);var s;n=null;for(m in i)if(!r.hasOwnProperty(m)&&i.hasOwnProperty(m)&&i[m]!=null)if(m==="style"){var a=i[m];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(O.hasOwnProperty(m)?l||(l=[]):(l=l||[]).push(m,null));for(m in r){var u=r[m];if(a=i?.[m],r.hasOwnProperty(m)&&u!==a&&(u!=null||a!=null))if(m==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(l||(l=[]),l.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(O.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&Z("scroll",e),l||a===u||(l=[])):(l=l||[]).push(m,u))}n&&(l=l||[]).push("style",n);var m=l;(t.updateQueue=m)&&(t.flags|=4)}},qa=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fd(e,t,n){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Re(t.type)&&Gr(),Se(t),null;case 3:return r=t.stateNode,Cn(),J(Ie),J(je),Ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(po(rt),rt=null))),to(e,t),Se(t),null;case 5:Ol(t);var i=bt(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ja(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Se(t),null}if(e=bt(pt.current),Zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ft]=t,r[nr]=l,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<bn.length;i++)Z(bn[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Ro(r,l),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Z("invalid",r);break;case"textarea":Do(r,l),Z("invalid",r)}Di(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),i=["children",""+a]):O.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",r)}switch(n){case"input":xr(r),Oo(r,l,!0);break;case"textarea":xr(r),Ao(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Wr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ft]=t,e[nr]=r,Za(e,t,!1,!1),t.stateNode=e;e:{switch(s=Mi(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<bn.length;i++)Z(bn[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":Ro(e,r),i=Pi(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=S({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Do(e,r),i=Li(e,r),Z("invalid",e);break;default:i=r}Di(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?Ho(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uo(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&On(e,u):typeof u=="number"&&On(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(O.hasOwnProperty(l)?u!=null&&l==="onScroll"&&Z("scroll",e):u!=null&&qe(e,l,u,s))}switch(n){case"input":xr(e),Oo(e,r,!1);break;case"textarea":xr(e),Ao(e);break;case"option":r.value!=null&&e.setAttribute("value",""+G(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)qa(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=bt(sr.current),bt(pt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(l=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return Se(t),null;case 13:if(J(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&He!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ta(),jn(),t.flags|=98560,l=!1;else if(l=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[ft]=t}else jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),l=!1}else rt!==null&&(po(rt),rt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(re.current&1)!==0?pe===0&&(pe=3):go())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return Cn(),to(e,t),e===null&&er(t.stateNode.containerInfo),Se(t),null;case 10:return Tl(t.type._context),Se(t),null;case 17:return Re(t.type)&&Gr(),Se(t),null;case 19:if(J(re),l=t.memoizedState,l===null)return Se(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)fr(l,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ni(e),s!==null){for(t.flags|=128,fr(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}l.tail!==null&&se()>Pn&&(t.flags|=128,r=!0,fr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ni(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!te)return Se(t),null}else 2*se()-l.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,fr(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=se(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return ho(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ve&1073741824)!==0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function pd(e,t){switch(Nl(t),t.tag){case 1:return Re(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cn(),J(Ie),J(je),Ml(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ol(t),null;case 13:if(J(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(re),null;case 4:return Cn(),null;case 10:return Tl(t.type._context),null;case 22:case 23:return ho(),null;case 24:return null;default:return null}}var di=!1,Ee=!1,md=typeof WeakSet=="function"?WeakSet:Set,N=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function no(e,t,n){try{n()}catch(r){oe(e,t,r)}}var ba=!1;function hd(e,t){if(ml=Ir,e=Is(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,m=0,y=0,x=e,g=null;t:for(;;){for(var j;x!==n||i!==0&&x.nodeType!==3||(a=s+i),x!==l||r!==0&&x.nodeType!==3||(u=s+r),x.nodeType===3&&(s+=x.nodeValue.length),(j=x.firstChild)!==null;)g=x,x=j;for(;;){if(x===e)break t;if(g===n&&++m===i&&(a=s),g===l&&++y===r&&(u=s),(j=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=j}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hl={focusedElem:e,selectionRange:n},Ir=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var _=E.memoizedProps,ae=E.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?_:it(t.type,_),ae);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){oe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return E=ba,ba=!1,E}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&no(t,n,l)}i=i.next}while(i!==r)}}function fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[nr],delete t[xl],delete t[Jc],delete t[qc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}var xe=null,lt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Er,n)}catch{}switch(n.tag){case 5:Ee||zn(n,t);case 6:var r=xe,i=lt;xe=null,Ut(e,t,n),xe=r,lt=i,xe!==null&&(lt?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(lt?(e=xe,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),Gn(e)):yl(xe,n.stateNode));break;case 4:r=xe,i=lt,xe=n.stateNode.containerInfo,lt=!0,Ut(e,t,n),xe=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&((l&2)!==0||(l&4)!==0)&&no(n,t,s),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!Ee&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ut(e,t,n),Ee=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new md),t.forEach(function(r){var i=Sd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,lt=!1;break e;case 3:xe=a.stateNode.containerInfo,lt=!0;break e;case 4:xe=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(xe===null)throw Error(h(160));ru(l,s,i),xe=null,lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(m){oe(i,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lu(t,e),t=t.sibling}function lu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),ht(e),r&4){try{pr(3,e,e.return),fi(3,e)}catch(_){oe(e,e.return,_)}try{pr(5,e,e.return)}catch(_){oe(e,e.return,_)}}break;case 1:ot(t,e),ht(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(ot(t,e),ht(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{On(i,"")}catch(_){oe(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Lo(i,l),Mi(a,s);var m=Mi(a,l);for(s=0;s<u.length;s+=2){var y=u[s],x=u[s+1];y==="style"?Ho(i,x):y==="dangerouslySetInnerHTML"?Uo(i,x):y==="children"?On(i,x):qe(i,y,x,m)}switch(a){case"input":Ii(i,l);break;case"textarea":Mo(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?sn(i,!!l.multiple,j,!1):g!==!!l.multiple&&(l.defaultValue!=null?sn(i,!!l.multiple,l.defaultValue,!0):sn(i,!!l.multiple,l.multiple?[]:"",!1))}i[nr]=l}catch(_){oe(e,e.return,_)}}break;case 6:if(ot(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(_){oe(e,e.return,_)}}break;case 3:if(ot(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(_){oe(e,e.return,_)}break;case 4:ot(t,e),ht(e);break;case 13:ot(t,e),ht(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ao=se())),r&4&&iu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(m=Ee)||y,ot(t,e),Ee=m):ot(t,e),ht(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&(e.mode&1)!==0)for(N=e,y=e.child;y!==null;){for(x=N=y;N!==null;){switch(g=N,j=g.child,g.tag){case 0:case 11:case 14:case 15:pr(4,g,g.return);break;case 1:zn(g,g.return);var E=g.stateNode;if(typeof E.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(_){oe(r,n,_)}}break;case 5:zn(g,g.return);break;case 22:if(g.memoizedState!==null){au(x);continue}}j!==null?(j.return=g,N=j):au(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{i=x.stateNode,m?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=x.stateNode,u=x.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Bo("display",s))}catch(_){oe(e,e.return,_)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(_){oe(e,e.return,_)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:ot(t,e),ht(e),r&4&&iu(e);break;case 21:break;default:ot(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(On(i,""),r.flags&=-33);var l=nu(e);lo(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=nu(e);io(e,a,s);break;default:throw Error(h(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gd(e,t,n){N=e,ou(e)}function ou(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||di;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ee;a=di;var m=Ee;if(di=s,(Ee=u)&&!m)for(N=i;N!==null;)s=N,u=s.child,s.tag===22&&s.memoizedState!==null?uu(i):u!==null?(u.return=s,N=u):uu(i);for(;l!==null;)N=l,ou(l),l=l.sibling;N=i,di=a,Ee=m}su(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,N=l):su(e)}}function su(e){for(;N!==null;){var t=N;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ee||fi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&aa(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}aa(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&Gn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Ee||t.flags&512&&ro(t)}catch(g){oe(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function au(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function uu(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fi(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){oe(t,i,u)}}var l=t.return;try{ro(t)}catch(u){oe(t,l,u)}break;case 5:var s=t.return;try{ro(t)}catch(u){oe(t,s,u)}}}catch(u){oe(t,t.return,u)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var vd=Math.ceil,pi=ke.ReactCurrentDispatcher,oo=ke.ReactCurrentOwner,Ze=ke.ReactCurrentBatchConfig,U=0,ge=null,de=null,we=0,Ve=0,Tn=Ot(0),pe=0,mr=null,tn=0,mi=0,so=0,hr=null,Oe=null,ao=0,Pn=1/0,Et=null,hi=!1,uo=null,Bt=null,gi=!1,Ht=null,vi=0,gr=0,co=null,yi=-1,xi=0;function ze(){return(U&6)!==0?se():yi!==-1?yi:yi=se()}function Vt(e){return(e.mode&1)===0?1:(U&2)!==0&&we!==0?we&-we:ed.transition!==null?(xi===0&&(xi=ns()),xi):(e=Y,e!==0||(e=window.event,e=e===void 0?16:ds(e.type)),e)}function st(e,t,n,r){if(50<gr)throw gr=0,co=null,Error(h(185));Bn(e,n,r),((U&2)===0||e!==ge)&&(e===ge&&((U&2)===0&&(mi|=n),pe===4&&Wt(e,we)),De(e,r),n===1&&U===0&&(t.mode&1)===0&&(Pn=se()+500,$r&&Mt()))}function De(e,t){var n=e.callbackNode;ec(e,t);var r=zr(e,e===ge?we:0);if(r===0)n!==null&&bo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bo(n),t===1)e.tag===0?bc(du.bind(null,e)):Zs(du.bind(null,e)),Xc(function(){(U&6)===0&&Mt()}),n=null;else{switch(rs(r)){case 1:n=Wi;break;case 4:n=es;break;case 16:n=Sr;break;case 536870912:n=ts;break;default:n=Sr}n=xu(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(yi=-1,xi=0,(U&6)!==0)throw Error(h(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=zr(e,e===ge?we:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wi(e,r);else{t=r;var i=U;U|=2;var l=pu();(ge!==e||we!==t)&&(Et=null,Pn=se()+500,rn(e,t));do try{wd();break}catch(a){fu(e,a)}while(!0);zl(),pi.current=l,U=i,de!==null?t=0:(ge=null,we=0,t=pe)}if(t!==0){if(t===2&&(i=Qi(e),i!==0&&(r=i,t=fo(e,i))),t===1)throw n=mr,rn(e,0),Wt(e,r),De(e,se()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!yd(i)&&(t=wi(e,r),t===2&&(l=Qi(e),l!==0&&(r=l,t=fo(e,l))),t===1))throw n=mr,rn(e,0),Wt(e,r),De(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:ln(e,Oe,Et);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=ao+500-se(),10<t)){if(zr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vl(ln.bind(null,e,Oe,Et),t);break}ln(e,Oe,Et);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-tt(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vd(r/1960))-r,10<r){e.timeoutHandle=vl(ln.bind(null,e,Oe,Et),r);break}ln(e,Oe,Et);break;case 5:ln(e,Oe,Et);break;default:throw Error(h(329))}}}return De(e,se()),e.callbackNode===n?cu.bind(null,e):null}function fo(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=wi(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&po(t)),e}function po(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function yd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!nt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~so,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if((U&6)!==0)throw Error(h(327));In();var t=zr(e,0);if((t&1)===0)return De(e,se()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=Qi(e);r!==0&&(t=r,n=fo(e,r))}if(n===1)throw n=mr,rn(e,0),Wt(e,t),De(e,se()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Oe,Et),De(e,se()),null}function mo(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Pn=se()+500,$r&&Mt())}}function nn(e){Ht!==null&&Ht.tag===0&&(U&6)===0&&In();var t=U;U|=1;var n=Ze.transition,r=Y;try{if(Ze.transition=null,Y=1,e)return e()}finally{Y=r,Ze.transition=n,U=t,(U&6)===0&&Mt()}}function ho(){Ve=Tn.current,J(Tn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kc(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:Cn(),J(Ie),J(je),Ml();break;case 5:Ol(r);break;case 4:Cn();break;case 13:J(re);break;case 19:J(re);break;case 10:Tl(r.type._context);break;case 22:case 23:ho()}n=n.return}if(ge=e,de=e=Qt(e.current,null),we=Ve=t,pe=0,mr=null,so=mi=tn=0,Oe=hr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}qt=null}return e}function fu(e,t){do{var n=de;try{if(zl(),ri.current=si,ii){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ii=!1}if(en=0,he=fe=ie=null,ar=!1,ur=0,oo.current=null,n===null||n.return===null){pe=1,mr=t,de=null;break}e:{var l=e,s=n.return,a=n,u=t;if(t=we,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,y=a,x=y.tag;if((y.mode&1)===0&&(x===0||x===11||x===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var j=Aa(s);if(j!==null){j.flags&=-257,Fa(j,s,a,l,t),j.mode&1&&Ma(l,m,t),t=j,u=m;var E=t.updateQueue;if(E===null){var _=new Set;_.add(u),t.updateQueue=_}else E.add(u);break e}else{if((t&1)===0){Ma(l,m,t),go();break e}u=Error(h(426))}}else if(te&&a.mode&1){var ae=Aa(s);if(ae!==null){(ae.flags&65536)===0&&(ae.flags|=256),Fa(ae,s,a,l,t),Cl(_n(u,a));break e}}l=u=_n(u,a),pe!==4&&(pe=2),hr===null?hr=[l]:hr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Oa(l,u,t);sa(l,f);break e;case 1:a=u;var c=l.type,p=l.stateNode;if((l.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Bt===null||!Bt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Da(l,a,t);sa(l,w);break e}}l=l.return}while(l!==null)}hu(n)}catch(z){t=z,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function pu(){var e=pi.current;return pi.current=si,e===null?si:e}function go(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||(tn&268435455)===0&&(mi&268435455)===0||Wt(ge,we)}function wi(e,t){var n=U;U|=2;var r=pu();(ge!==e||we!==t)&&(Et=null,rn(e,t));do try{xd();break}catch(i){fu(e,i)}while(!0);if(zl(),U=n,pi.current=r,de!==null)throw Error(h(261));return ge=null,we=0,pe}function xd(){for(;de!==null;)mu(de)}function wd(){for(;de!==null&&!Gu();)mu(de)}function mu(e){var t=yu(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?hu(e):de=t,oo.current=null}function hu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=fd(n,t,Ve),n!==null){de=n;return}}else{if(n=pd(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);pe===0&&(pe=5)}function ln(e,t,n){var r=Y,i=Ze.transition;try{Ze.transition=null,Y=1,kd(e,t,n,r)}finally{Ze.transition=i,Y=r}return null}function kd(e,t,n,r){do In();while(Ht!==null);if((U&6)!==0)throw Error(h(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(tc(e,l),e===ge&&(de=ge=null,we=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||gi||(gi=!0,xu(Sr,function(){return In(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Ze.transition,Ze.transition=null;var s=Y;Y=1;var a=U;U|=4,oo.current=null,hd(e,n),lu(n,e),Hc(hl),Ir=!!ml,hl=ml=null,e.current=n,gd(n),Yu(),U=a,Y=s,Ze.transition=l}else e.current=n;if(gi&&(gi=!1,Ht=e,vi=i),l=e.pendingLanes,l===0&&(Bt=null),Xu(n.stateNode),De(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=uo,uo=null,e;return(vi&1)!==0&&e.tag!==0&&In(),l=e.pendingLanes,(l&1)!==0?e===co?gr++:(gr=0,co=e):gr=0,Mt(),null}function In(){if(Ht!==null){var e=rs(vi),t=Ze.transition,n=Y;try{if(Ze.transition=null,Y=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,vi=0,(U&6)!==0)throw Error(h(331));var i=U;for(U|=4,N=e.current;N!==null;){var l=N,s=l.child;if((N.flags&16)!==0){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var m=a[u];for(N=m;N!==null;){var y=N;switch(y.tag){case 0:case 11:case 15:pr(8,y,l)}var x=y.child;if(x!==null)x.return=y,N=x;else for(;N!==null;){y=N;var g=y.sibling,j=y.return;if(eu(y),y===m){N=null;break}if(g!==null){g.return=j,N=g;break}N=j}}}var E=l.alternate;if(E!==null){var _=E.child;if(_!==null){E.child=null;do{var ae=_.sibling;_.sibling=null,_=ae}while(_!==null)}}N=l}}if((l.subtreeFlags&2064)!==0&&s!==null)s.return=l,N=s;else e:for(;N!==null;){if(l=N,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:pr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,N=f;break e}N=l.return}}var c=e.current;for(N=c;N!==null;){s=N;var p=s.child;if((s.subtreeFlags&2064)!==0&&p!==null)p.return=s,N=p;else e:for(s=c;N!==null;){if(a=N,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:fi(9,a)}}catch(z){oe(a,a.return,z)}if(a===s){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(U=i,Mt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Er,e)}catch{}r=!0}return r}finally{Y=n,Ze.transition=t}}return!1}function gu(e,t,n){t=_n(n,t),t=Oa(e,t,1),e=Ft(e,t,1),t=ze(),e!==null&&(Bn(e,1,t),De(e,t))}function oe(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=_n(n,e),e=Da(t,e,1),t=Ft(t,e,1),e=ze(),t!==null&&(Bn(t,1,e),De(t,e));break}}t=t.return}}function jd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(we&n)===n&&(pe===4||pe===3&&(we&130023424)===we&&500>se()-ao?rn(e,0):so|=n),De(e,t)}function vu(e,t){t===0&&((e.mode&1)===0?t=1:(t=_r,_r<<=1,(_r&130023424)===0&&(_r=4194304)));var n=ze();e=jt(e,t),e!==null&&(Bn(e,t,n),De(e,n))}function Nd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vu(e,n)}function Sd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),vu(e,n)}var yu;yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Le=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Le=!1,dd(e,t,n);Le=(e.flags&131072)!==0}else Le=!1,te&&(t.flags&1048576)!==0&&Js(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ci(e,t),e=t.pendingProps;var i=xn(t,je.current);En(t,n),i=Ul(null,t,r,e,i,n);var l=Bl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(l=!0,Yr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rl(t),i.updater=ai,t.stateNode=i,i._reactInternals=t,Yl(t,r,e,n),t=Zl(null,t,r,!0,l,n)):(t.tag=0,te&&l&&jl(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ci(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cd(r),e=it(r,e),i){case 0:t=Xl(null,t,r,e,n);break e;case 1:t=Qa(null,t,r,e,n);break e;case 11:t=Ua(null,t,r,e,n);break e;case 14:t=Ba(null,t,r,it(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Xl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Qa(e,t,r,i,n);case 3:e:{if(Ga(t),e===null)throw Error(h(387));r=t.pendingProps,l=t.memoizedState,i=l.element,oa(e,t),ti(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=_n(Error(h(423)),t),t=Ya(e,t,r,n,i);break e}else if(r!==i){i=_n(Error(h(424)),t),t=Ya(e,t,r,n,i);break e}else for(He=Lt(t.stateNode.containerInfo.firstChild),Be=t,te=!0,rt=null,n=ia(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===i){t=St(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return ua(t),e===null&&El(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,gl(r,i)?s=null:l!==null&&gl(r,l)&&(t.flags|=32),Wa(e,t),_e(e,t,s,n),t.child;case 6:return e===null&&El(t),null;case 13:return $a(e,t,n);case 4:return Ll(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Ua(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,X(qr,r._currentValue),r._currentValue=s,l!==null)if(nt(l.value,s)){if(l.children===i.children&&!Ie.current){t=St(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Nt(-1,n&-n),u.tag=2;var m=l.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?u.next=u:(u.next=y.next,y.next=u),m.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Pl(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(h(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Pl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,En(t,n),i=Ke(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),Ba(e,t,r,i,n);case 15:return Ha(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),ci(e,t),t.tag=1,Re(r)?(e=!0,Yr(t)):e=!1,En(t,n),Ra(t,r,i),Yl(t,r,i,n),Zl(null,t,r,!0,e,n);case 19:return Xa(e,t,n);case 22:return Va(e,t,n)}throw Error(h(156,t.tag))};function xu(e,t){return qo(e,t)}function Ed(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new Ed(e,t,n,r)}function vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cd(e){if(typeof e=="function")return vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ki(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")vo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Te:return on(n.children,i,l,t);case Ge:s=8,i|=8;break;case Ct:return e=Je(12,n,t,i|2),e.elementType=Ct,e.lanes=l,e;case Ae:return e=Je(13,n,t,i),e.elementType=Ae,e.lanes=l,e;case et:return e=Je(19,n,t,i),e.elementType=et,e.lanes=l,e;case le:return ji(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:s=10;break e;case Yt:s=9;break e;case ut:s=11;break e;case ct:s=14;break e;case Pe:s=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Je(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function on(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function ji(e,t,n,r){return e=Je(22,e,r,t),e.elementType=le,e.lanes=n,e.stateNode={isHidden:!1},e}function yo(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function xo(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _d(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wo(e,t,n,r,i,l,s,a,u){return e=new _d(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Je(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(l),e}function zd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wu(e){if(!e)return Dt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Re(n))return Ks(e,n,t)}return t}function ku(e,t,n,r,i,l,s,a,u){return e=wo(n,r,!0,e,i,l,s,a,u),e.context=wu(null),n=e.current,r=ze(),i=Vt(n),l=Nt(r,i),l.callback=t??null,Ft(n,l,i),e.current.lanes=i,Bn(e,i,r),De(e,r),e}function Ni(e,t,n,r){var i=t.current,l=ze(),s=Vt(i);return n=wu(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,s),e!==null&&(st(e,i,s,l),ei(e,i,s)),s}function Si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ko(e,t){ju(e,t),(e=e.alternate)&&ju(e,t)}function Td(){return null}var Nu=typeof reportError=="function"?reportError:function(e){console.error(e)};function jo(e){this._internalRoot=e}Ei.prototype.render=jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Ni(e,t,null,null)},Ei.prototype.unmount=jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){Ni(null,e,null,null)}),t[yt]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=os();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&us(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function Pd(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var m=Si(s);l.call(m)}}var s=ku(t,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=s,e[yt]=s.current,er(e.nodeType===8?e.parentNode:e),nn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var m=Si(u);a.call(m)}}var u=wo(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=u,e[yt]=u.current,er(e.nodeType===8?e.parentNode:e),nn(function(){Ni(t,u,n,r)}),u}function _i(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var u=Si(s);a.call(u)}}Ni(t,s,e,i)}else s=Pd(n,t,e,i,r);return Si(s)}is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Yi(t,n|1),De(t,se()),(U&6)===0&&(Pn=se()+500,Mt()))}break;case 13:nn(function(){var r=jt(e,1);if(r!==null){var i=ze();st(r,e,1,i)}}),ko(e,1)}},$i=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=ze();st(t,e,134217728,n)}ko(e,134217728)}},ls=function(e){if(e.tag===13){var t=Vt(e),n=jt(e,t);if(n!==null){var r=ze();st(n,e,t,r)}ko(e,t)}},os=function(){return Y},ss=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}},Ui=function(e,t,n){switch(t){case"input":if(Ii(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qr(r);if(!i)throw Error(h(90));Io(r),Ii(r,i)}}}break;case"textarea":Mo(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},Go=mo,Yo=nn;var Id={usingClientEntryPoint:!1,Events:[rr,vn,Qr,Wo,Qo,mo]},vr={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zo(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||Td,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zi.isDisabled&&zi.supportsFiber)try{Er=zi.inject(Rd),dt=zi}catch{}}return Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Id,Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(t))throw Error(h(200));return zd(e,t,null,n)},Me.createRoot=function(e,t){if(!No(e))throw Error(h(299));var n=!1,r="",i=Nu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wo(e,1,!1,null,null,n,!1,r,i),e[yt]=t.current,er(e.nodeType===8?e.parentNode:e),new jo(t)},Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Zo(t),e=e===null?null:e.stateNode,e},Me.flushSync=function(e){return nn(e)},Me.hydrate=function(e,t,n){if(!Ci(t))throw Error(h(200));return _i(null,e,t,!0,n)},Me.hydrateRoot=function(e,t,n){if(!No(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=Nu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ku(t,null,e,1,n??null,i,!1,l,s),e[yt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ei(t)},Me.render=function(e,t,n){if(!Ci(t))throw Error(h(200));return _i(null,e,t,!1,n)},Me.unmountComponentAtNode=function(e){if(!Ci(e))throw Error(h(40));return e._reactRootContainer?(nn(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1},Me.unstable_batchedUpdates=mo,Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ci(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return _i(e,t,n,!1,r)},Me.version="18.3.1-next-f1338f8080-20240426",Me}var Ru;function Bd(){if(Ru)return Co.exports;Ru=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(R){console.error(R)}}return C(),Co.exports=Ud(),Co.exports}var Lu;function Hd(){if(Lu)return Ti;Lu=1;var C=Bd();return Ti.createRoot=C.createRoot,Ti.hydrateRoot=C.hydrateRoot,Ti}var Vd=Hd(),Rn=To();function Wd({currentPage:C,setCurrentPage:R}){const h=O=>{R(O),window.scrollTo(0,0)},W=[["home","Home"],["community","Community Involvement"],["art","Art & Culture"],["projects","Projects"],["leadership","Leadership"],["work","Work Experience"],["contact","Contact"]];return o.jsxs("nav",{className:"fixed top-0 w-full bg-neutral-50/80 backdrop-blur-sm border-b border-neutral-200 z-50 nav-root",children:[o.jsx("style",{children:`
        /* FORCE pointer cursor for all navigation items */
        .nav-root button,
        .nav-root button * {
          cursor: pointer !important;
        }

        /* LOGO + NAV TEXT SIZE */
        .nav-root .nav-logo {
          font-size: 22px; /* increased */
        }

        .nav-root .nav-link {
          font-size: 15.5px;
        }

        @media (min-width: 1024px) {
          .nav-root .nav-logo {
            font-size: 24px; /* increased */
          }

          .nav-root .nav-link {
            font-size: 16.5px;
          }
        }
      `}),o.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:o.jsxs("div",{className:"flex justify-between items-center h-20",children:[o.jsx("button",{onClick:()=>h("home"),className:"nav-logo text-neutral-900 tracking-wide font-medium",children:"AB"}),o.jsx("div",{className:"flex gap-8",children:W.map(([O,F])=>o.jsx("button",{onClick:()=>h(O),className:`nav-link tracking-wide transition-colors ${C===O?"text-neutral-900 font-medium":"text-neutral-600 hover:text-neutral-900"}`,children:F},O))})]})})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=C=>C.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gd=C=>C.replace(/^([A-Z])|[\s-_]+(\w)/g,(R,h,W)=>W?W.toUpperCase():h.toLowerCase()),Ou=C=>{const R=Gd(C);return R.charAt(0).toUpperCase()+R.slice(1)},Mu=(...C)=>C.filter((R,h,W)=>!!R&&R.trim()!==""&&W.indexOf(R)===h).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=Rn.forwardRef(({color:C="currentColor",size:R=24,strokeWidth:h=2,absoluteStrokeWidth:W,className:O="",children:F,iconNode:ue,...ce},Q)=>Rn.createElement("svg",{ref:Q,...Yd,width:R,height:R,stroke:C,strokeWidth:W?Number(h)*24/Number(R):h,className:Mu("lucide",O),...ce},[...ue.map(([ye,me])=>Rn.createElement(ye,me)),...Array.isArray(F)?F:[F]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=(C,R)=>{const h=Rn.forwardRef(({className:W,...O},F)=>Rn.createElement($d,{ref:F,iconNode:R,className:Mu(`lucide-${Qd(Ou(C))}`,`lucide-${C}`,W),...O}));return h.displayName=Ou(C),h};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Xd=Po("instagram",Kd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Au=Po("mail",Zd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],qd=Po("youtube",Jd);function bd({setCurrentPage:C}){const R=W=>{C(W),window.scrollTo({top:0,behavior:"smooth"})},h=[["home","Home"],["community","Community Involvement"],["art","Art & Culture"],["projects","Projects"],["leadership","Leadership"],["work","Work Experience"],["contact","Contact"]];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .footer-root {
          background-color: #6b0000;
          width: 100%;
          position: relative;
          z-index: 99999;
          isolation: isolate;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 40px;
          text-align: center;
          color: #ffffff;
        }

        .footer-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 42px;
          font-weight: 400;
          margin-bottom: 40px;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 36px;
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 48px;
        }

        .footer-nav span {
          cursor: pointer;
          opacity: 0.95;
          transition: color 0.25s ease, opacity 0.25s ease;
        }

        .footer-nav span:hover {
          color: #ffd6d6;
          opacity: 1;
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          gap: 22px;
          margin-bottom: 40px;
        }

        .footer-icon {
          width: 48px;
          height: 48px;
          background: #ffffff;
          color: #6b0000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .footer-icon:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .footer-icon a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: inherit;
        }

        .footer-top {
          display: flex;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          opacity: 0.85;
        }
      `}),o.jsx("footer",{className:"footer-root",children:o.jsxs("div",{className:"footer-container",children:[o.jsx("h2",{className:"footer-title",children:"Aryan Basnet"}),o.jsx("nav",{className:"footer-nav",children:h.map(([W,O])=>o.jsx("span",{onClick:()=>R(W),children:O},W))}),o.jsxs("div",{className:"footer-socials",children:[o.jsx("div",{className:"footer-icon",children:o.jsx("a",{href:"https://www.instagram.com/__aryanbasnet__/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:o.jsx(Xd,{size:20,strokeWidth:1.75})})}),o.jsx("div",{className:"footer-icon",children:o.jsx("a",{href:"mailto:basnetaryan05@gmail.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Email",children:o.jsx(Au,{size:20,strokeWidth:1.75})})}),o.jsx("div",{className:"footer-icon",children:o.jsx("a",{href:"https://www.youtube.com/@techwitharyan05/featured",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:o.jsx(qd,{size:20,strokeWidth:1.75})})})]}),o.jsx("div",{className:"footer-top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"↑"})]})})]})}function Du(){return o.jsxs("div",{className:"fade-in site-root",children:[o.jsx("style",{children:`
        /* ==============================
           PAGE LOAD ANIMATION
        ============================== */
        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeInUp 1.15s ease-out forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ==============================
           RESET & BASE
        ============================== */
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background: #ffffff;
        }

        /* ==============================
           GLOBAL TYPOGRAPHY
        ============================== */
        .site-root {
          font-family: Georgia, "Times New Roman", serif;
          color: #111;
          text-align: center;
        }

        /* ==============================
           HERO SECTION (MOVED UP)
        ============================== */
        .hero {
          padding: 110px 24px 48px; /* reduced top padding */
        }

        .name {
          font-size: 72px;
          font-weight: 700;
          color: #7a0c0c;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        .pronouns {
          font-size: 15px;
          letter-spacing: 2px;
          margin-bottom: 40px;
          opacity: 0.85;
        }

        .hero-img-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }

        .hero-img {
          width: 320px;
          height: auto;
          // border: 12px solid #7a0c0c;

        }

        .tagline {
          font-size: 18px;
          font-style: italic;
          letter-spacing: 1.6px;
          opacity: 0.9;
        }

        /* ==============================
           DIVIDER
        ============================== */
        .divider {
          height: 16px;
          background: #f2f2f2;
        }

        /* ==============================
           ABOUT – FULL WIDTH SECTION
        ============================== */
        .about-wrapper {
          background: #f2f2f2;
          width: 100%;
          margin-top: -44px;
        }

        .about {
          max-width: 1200px;
          margin: 0 auto;
          padding: 110px 48px 160px;
          display: grid;
          grid-template-columns: 460px 1fr;
          gap: 80px;
          align-items: start;
          text-align: left;
        }

        .about-img {
          width: 100%;
          border-radius: 2px;
        }

        .about h2 {
          font-size: 52px;
          color: #7a0c0c;
          margin: -10px 0 32px;
          letter-spacing: 0.6px;
        }

        .about p {
          font-size: 20px;
          line-height: 1.85;
          margin-bottom: 26px;
        }

        /* ==============================
           BUTTON
        ============================== */
        .resume-btn {
          margin-top: 32px;
          padding: 18px 40px;
          background: #000;
          color: #fff;
          border: none;
          font-size: 18px;
          cursor: pointer;
          transition: opacity 0.25s ease;
        }

        .resume-btn:hover {
          opacity: 0.85;
        }
      `}),o.jsxs("section",{className:"hero",children:[o.jsx("div",{className:"hero-img-wrapper",children:o.jsx("img",{src:"images/aryanbasnet_main.jpeg",alt:"Vidhi Miglani speaking",className:"hero-img"})}),o.jsx("div",{className:"name",children:"Aryan Basnet"}),o.jsx("div",{className:"pronouns",children:"PRONOUNS: HE / HIM"}),o.jsx("div",{className:"tagline",children:"COMPUTERPHILE | SOCIAL ENTREPRENEUR | ARTIST"})]}),o.jsx("div",{className:"divider"}),o.jsx("section",{className:"about-wrapper",children:o.jsxs("div",{className:"about",children:[o.jsx("img",{src:"/images/aryanbasnet_main.jpeg",alt:"Vidhi Miglani portrait",className:"about-img"}),o.jsxs("div",{children:[o.jsx("h2",{children:"ABOUT ME"}),o.jsx("p",{children:"Hi! I’m Aryan Basnet, graduate of Rato Bangala School. As a social entrepreneur, I'm the founder of a non-profit aiding in providing holistic education to disadvantaged students called ‘Vidhata’."}),o.jsx("p",{children:"With key expertise in social design, human-centric design, design thinking, and organizational leadership, I hope to spearhead change in my community through being an inventor. Using technology and design thinking as my foothold for innovation, I approach every problem with a unique 360-degree view that keeps the user at the centre of solution building."}),o.jsx("p",{children:"I describe myself as an Artist at heart. I'm a semi-professional artist with 12 years of experience in Fine Art. I hope to build every venture on this foundation of left and right brain abilities."}),o.jsx("button",{className:"resume-btn",children:o.jsx("a",{href:"https://docs.google.com/document/d/1cQZ2WPyHhvMtswRcPlpzA0tDWr26PqCdDeZoNvEQnes/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer",style:{color:"#fff",textDecoration:"none"},children:"Check out my resume"})})]})]})})]})}function ef(){return o.jsxs("section",{className:"community-page fade-in",children:[o.jsx("style",{children:`
        /* ================= PAGE-LOAD ANIMATION ================= */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.2s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .community-page {
          padding: 140px 32px 180px;
          background: #ffffff;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .page-title {
          font-family: "Georgia", "Times New Roman", serif;
          font-size: 3.2rem;
          font-weight: 500;
          color: #7a0f0f;
          text-align: center;
          margin-bottom: 120px;
        }

        /* ================= INITIATIVE SECTION ================= */
        .initiative-section {
          background: #f7f7f7;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          padding: 96px 80px;
        }

        .initiative-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 96px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .heading-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 28px;
        }

        .logo {
          width: 44px;
          height: 44px;
        }

        .initiative-heading {
          font-family: "Georgia", serif;
          font-size: 1.6rem;
          color: #7a0f0f;
        }

        .initiative-text {
          font-size: 1rem;
          line-height: 1.9;
          color: #2f2f2f;
          margin-bottom: 26px;
        }

        .image-column img {
          width: 100%;
          margin-top: 28px;
        }

        /* ================= IMPACT SECTION ================= */
        .impact-section {
          padding: 140px 0 70px;
          text-align: center;
        }

        .impact-title {
          font-family: "Georgia", serif;
          font-size: 3rem;
          color: #7a0f0f;
          margin-bottom: 96px;
        }

        .impact-grid {
          display: grid;
          gap: 48px;
          margin: 0 auto 96px;
        }

        .impact-grid.top {
          grid-template-columns: repeat(2, 1fr);
          max-width: 700px;
          margin-bottom: 64px;
        }

        .impact-grid.bottom {
          grid-template-columns: repeat(3, 1fr);
          max-width: 960px;
        }

        .impact-card {
          padding: 36px 24px;
          color: white;
          font-family: "Georgia", serif;
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s ease,
            filter 0.45s ease;
          cursor: default;
        }

        .impact-card:hover {
          transform: translateY(-10px) scale(1.035);
          box-shadow: 0 28px 50px rgba(0, 0, 0, 0.25);
          filter: brightness(1.08);
        }

        .pink { background: #c29b9b; }
        .maroon { background: #7a3333; }
        .dark-maroon { background: #6d0000; }
        .grey { background: #6b645c; }

        .impact-number {
          font-size: 3rem;
        }

        .impact-label {
          font-size: 1.1rem;
        }

        /* ================= RECOGNITION SECTION ================= */
        .recognition-section {
          background: #f7f7f7;
          padding: 140px 80px;
          margin-top: 40px;
        }

        .recognition-intro {
          max-width: 1000px;
          margin: 0 auto 120px;
          text-align: center;
          font-family: "Georgia", serif;
          font-size: 1.15rem;
          line-height: 1.9;
        }

        .recognition-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .recognition-frame {
          width: 420px;
          height: 300px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .recognition-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .recognition-link {
          margin-top: 18px;
          font-family: "Georgia", serif;
          font-size: 1rem;
          color: #7a0f0f;
          text-decoration: underline;
          cursor: pointer;
        }

        .recognition-link:hover {
          opacity: 0.75;
        }

        /* ================= SUCCESS STORIES ================= */
        .stories-section {
          padding: 160px 0 0;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
        }

        .stories-title {
          font-family: "Georgia", serif;
          font-size: 2.4rem;
          color: #7a0f0f;
          text-align: center;
          margin-bottom: 24px;
        }

        .stories-subtitle {
          text-align: center;
          font-family: "Georgia", serif;
          font-style: italic;
          margin-bottom: 48px;
        }

        .image-grid-2x2,
        .image-grid-cohort {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .image-grid-2x2 img,
        .image-grid-cohort img {
          width: 100%;
          display: block;
          transition: transform 0.45s ease, box-shadow 0.45s ease;
          cursor: pointer;
        }

        .image-grid-2x2 img:hover,
        .image-grid-cohort img:hover {
          transform: scale(1.04) translateY(-6px);
          box-shadow: 0 22px 40px rgba(0, 0, 0, 0.18);
        }

        @media (max-width: 900px) {
          .initiative-grid,
          .recognition-grid,
          .stories-grid {
            grid-template-columns: 1fr;
          }

          .recognition-frame {
            width: 100%;
            height: auto;
          }
        }
      `}),o.jsx("div",{className:"container",children:o.jsx("h1",{className:"page-title",children:"Social Impact Initiatives"})}),o.jsx("div",{className:"initiative-section",children:o.jsxs("div",{className:"initiative-grid",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"heading-row",children:[o.jsx("img",{src:"/images/vidhata-logo.png",className:"logo"}),o.jsx("h2",{className:"initiative-heading",children:"Vidhata, my Non-Profit Organisation"})]}),o.jsx("p",{className:"initiative-text",children:"I started Vidhata in January 2023 to address gaps in holistic, non-academic learning for underserved students in Nepal. Growing up, I saw how limited access to skill-based education constrained students’ confidence, exposure, and future opportunities, especially in public school systems. I wanted to create an initiative that complemented formal education by fostering life skills and personal development."}),o.jsx("p",{className:"initiative-text",children:"Today, Vidhata operates through a structured, volunteer-driven model focused on skill-building and mentorship. By connecting trained volunteers with schools and communities, we deliver accessible and well-designed learning interventions beyond traditional curricula. Since its inception, Vidhata has impacted thousands of students across Nepal through scalable, community-centered programs."})]}),o.jsx("div",{className:"image-column",children:o.jsx("img",{src:"/images/vidhata.jpeg"})})]})}),o.jsxs("div",{className:"impact-section",children:[o.jsx("h2",{className:"impact-title",children:"Vidhata’s Impact in Numbers"}),o.jsxs("div",{className:"impact-grid top",children:[o.jsxs("div",{className:"impact-card pink",children:[o.jsx("div",{className:"impact-number",children:"120+"}),o.jsx("div",{className:"impact-label",children:"Volunteers Conducted"})]}),o.jsxs("div",{className:"impact-card maroon",children:[o.jsx("div",{className:"impact-number",children:"5600+"}),o.jsx("div",{className:"impact-label",children:"Students Impacted"})]})]}),o.jsxs("div",{className:"impact-grid bottom",children:[o.jsxs("div",{className:"impact-card grey",children:[o.jsx("div",{className:"impact-number",children:"18"}),o.jsx("div",{className:"impact-label",children:"Partner Organizations"})]}),o.jsxs("div",{className:"impact-card dark-maroon",children:[o.jsx("div",{className:"impact-number",children:"450+"}),o.jsx("div",{className:"impact-label",children:"Lecture Hours"})]}),o.jsxs("div",{className:"impact-card grey",children:[o.jsx("div",{className:"impact-number",children:"18"}),o.jsx("div",{className:"impact-label",children:"Districts Reached"})]})]})]}),o.jsx("div",{className:"recognition-section",children:o.jsxs("div",{className:"container",children:[o.jsxs("p",{className:"recognition-intro",children:["My work also earned me an ",o.jsx("strong",{children:"official nomination"})," as one of the ",o.jsx("strong",{children:"Glocal Teen Hero Nepal 2024"})," an honor awarded to 20 exceptional teenagers across Nepal for outstanding leadership, social impact, and community-driven innovation."]}),o.jsxs("div",{className:"recognition-grid",children:[o.jsx("div",{className:"recognition-frame",children:o.jsx("img",{src:"/images/glocal-award.png"})}),o.jsxs("div",{className:"recognition-frame",children:[o.jsx("img",{src:"/images/Glocal_logo.png"}),o.jsx("a",{href:"https://glocalteenhero.com/aryan-basnet/",target:"_blank",rel:"noopener noreferrer",className:"recognition-link",children:"Read my feature"})]})]})]})}),o.jsx("div",{className:"container stories-section",children:o.jsxs("div",{className:"stories-grid",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"stories-title",children:"Our Success Stories"}),o.jsx("p",{className:"stories-subtitle",children:"Outcomes shaped by consistent effort, applied learning, and progress"}),o.jsxs("div",{className:"image-grid-2x2",children:[o.jsx("img",{src:"/images/story1.jpg"}),o.jsx("img",{src:"/images/story2.jpg"}),o.jsx("img",{src:"/images/story3.jpg"}),o.jsx("img",{src:"/images/story4.jpg"})]})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"stories-title",children:"Our Training Cohorts"}),o.jsx("p",{className:"stories-subtitle",children:"In Collaboration With Rural Self Employment Training Institutes"}),o.jsxs("div",{className:"image-grid-cohort",children:[o.jsx("img",{src:"/images/training1.webp"}),o.jsx("img",{src:"/images/training2.webp"}),o.jsx("img",{src:"/images/training3.jpg"}),o.jsx("img",{src:"/images/training4.jpg"})]})]})]})})]})}function tf(){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
  * { box-sizing: border-box; }
  body { margin: 0; }

  /* ===== PAGE-LOAD FADE-IN ANIMATION ===== */
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1.2s ease-out forwards;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .page {
    font-family: Georgia, "Times New Roman", serif;
    background: #f6f6f6;
    color: #2e2e2e;
  }

  h1, h2, h3 {
    color: #6b0000;
    font-weight: 600;
  }

  .bg-white { background: #ffffff; }
  .bg-grey { background: #f2f2f2; }

  /* HERO */
  .hero {
    text-align: center;
    padding: 140px 24px 160px;
  }

  .hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }

  .hero .subtitle {
    font-style: italic;
    font-size: 1.3rem;
    margin-bottom: 30px;
  }

  .photo-title {
    text-align: center;
    font-size: 2.2rem;
    color: #6b0000;
    margin-bottom: 40px;
    font-weight: 600;
  }

  .hero .intro {
    max-width: 580px;
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
  }

  /* SECTION */
  .section {
    padding: 120px 24px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
  }

  /* IMAGE HOVER */
  .images img {
    width: 100%;
    margin-bottom: 28px;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.6s ease, box-shadow 0.6s ease;
  }

  .images img:hover {
    transform: scale(1.05);
    box-shadow: 0 24px 55px rgba(0,0,0,0.22);
  }

  .text h2 {
    font-size: 2.6rem;
    margin-bottom: 36px;
  }

  .text p {
    font-size: 1.05rem;
    line-height: 1.85;
    color: #444;
    margin-bottom: 26px;
  }

  /* PROCESS */
  .process {
    padding: 120px 24px;
  }

  .process-title {
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 80px;
  }

  .process-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .process-card {
    background: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
  }

  .process-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 22px 50px rgba(107,0,0,0.18);
  }

  /* PHOTO GRID */
  .photo-section {
    padding: 120px 24px;
  }

  .photo-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  .photo-grid img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.6s ease, box-shadow 0.6s ease;
  }

  .photo-grid img:hover {
    transform: scale(1.06);
    box-shadow: 0 28px 60px rgba(0,0,0,0.25);
  }

  /* ===== MY ART SECTION ===== */
  .my-art-section {
    padding: 140px 24px;
    background: #ffffff;
  }

  .my-art-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 90px;
  }

  .my-art-header h2 {
    font-size: 3rem;
    color: #6b0000;
    margin-bottom: 18px;
  }

  .my-art-header p {
    font-size: 1.15rem;
    line-height: 1.9;
    color: #555;
    font-style: italic;
  }

  .my-art-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
  }

  .my-art-card {
    background: #f9f9f9;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 14px 40px rgba(0,0,0,0.12);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
  }

  .my-art-card:hover {
    transform: translateY(-14px);
    box-shadow: 0 30px 65px rgba(107,0,0,0.28);
  }

  .my-art-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .my-art-content {
    padding: 26px 24px 32px;
  }

  .my-art-content h3 {
    font-size: 1.35rem;
    margin-bottom: 12px;
    color: #6b0000;
  }

  .my-art-content p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .container,
    .process-grid,
    .photo-grid,
    .my-art-grid {
      grid-template-columns: 1fr;
    }

    .hero h1 {
      font-size: 3rem;
    }

    .my-art-card img {
      height: 260px;
    }
  }
`}),o.jsxs("section",{className:"page fade-in",children:[o.jsxs("div",{className:"hero bg-white",children:[o.jsx("h1",{children:"Dashain"}),o.jsx("div",{className:"subtitle",children:"My Culture & Inspiration"}),o.jsx("p",{className:"intro",children:"Dashain is Nepal’s most significant Hindu festival, symbolizing the victory of good over evil and the strength of family bonds."})]}),o.jsx("div",{className:"section bg-grey",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"images",children:o.jsx("img",{src:"images/Dashain1.jpg"})}),o.jsxs("div",{className:"text",children:[o.jsx("h2",{children:"About Dashain"}),o.jsx("p",{children:"Dashain is the longest and most significant festival in Nepal, celebrated by people across the country with great devotion and joy. It symbolizes the victory of good over evil and is rooted in the worship of Goddess Durga, who represents strength, protection, and righteousness. The festival also commemorates the triumph of the goddess over the demon Mahishasura, reinforcing the belief that truth and virtue ultimately prevail."}),o.jsx("p",{children:"Observed over fifteen days, Dashain brings families together from near and far. Homes are cleaned and decorated, elders bless younger members with tika and jamara, and people seek blessings for health, prosperity, and success. Traditional rituals, prayers, and offerings are performed, especially during the most important days such as Maha Ashtami, Maha Navami, and Vijaya Dashami."}),o.jsx("p",{children:"Beyond its religious significance, Dashain holds deep cultural and social importance. It is a time of reunion, forgiveness, and renewal of relationships. New clothes are worn, traditional foods are shared, and swings (ping) are set up in villages, adding to the festive spirit. Dashain strengthens family bonds, preserves cultural traditions, and fosters a sense of unity and gratitude among people across generations."})]})]})}),o.jsxs("div",{className:"process bg-white",children:[o.jsx("h2",{className:"process-title",children:"The Essence of Dashain"}),o.jsxs("div",{className:"process-grid",children:[o.jsx("div",{className:"process-card",children:o.jsx("h3",{children:"Victory & Renewal"})}),o.jsx("div",{className:"process-card",children:o.jsx("h3",{children:"Family Reunion"})}),o.jsx("div",{className:"process-card",children:o.jsx("h3",{children:"Tradition & Faith"})}),o.jsx("div",{className:"process-card",children:o.jsx("h3",{children:"Gratitude & Blessings"})})]})]}),o.jsxs("div",{className:"photo-section bg-grey",children:[o.jsx("h2",{className:"photo-title",children:"Photos of Dashain"}),o.jsxs("div",{className:"photo-grid",children:[o.jsx("img",{src:"images/dashain_2.jpg"}),o.jsx("img",{src:"images/dashain_3.jpg"})]})]}),o.jsxs("div",{className:"hero bg-white",children:[o.jsx("h1",{children:"Tihar"}),o.jsx("div",{className:"subtitle",children:"Festival of Light & Love"}),o.jsx("p",{className:"intro",children:"A celebration of compassion, devotion, and the sacred bond between brother and sister."})]}),o.jsx("div",{className:"section bg-grey",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"text",children:[o.jsx("h2",{children:"The Bond of Bhai Tika"}),o.jsx("p",{children:"Tihar, also known as Deepawali, is one of Nepal’s most important festivals, celebrated over five days. It symbolizes the victory of light over darkness and knowledge over ignorance, and highlights values of gratitude, harmony, and respect for all living beings."}),o.jsx("p",{children:"Each day of Tihar is dedicated to honoring different beings. Crows, dogs, and cows are worshipped for their symbolic and practical importance, while Goddess Laxmi, the deity of wealth and prosperity, is worshipped with homes illuminated by oil lamps and candles. The final day, Bhai Tika, celebrates the sacred bond between brothers and sisters through prayers for protection, long life, and well-being."}),o.jsx("p",{children:"Beyond its religious meaning, Tihar is a festival of togetherness and joy. People decorate their homes with flowers and rangoli, sing Deusi-Bhailo, and exchange sweets and gifts. Tihar strengthens family bonds, promotes compassion, and brings communities together in a warm and festive spirit."})]}),o.jsx("div",{className:"images",children:o.jsx("img",{src:"images/Tihar1.jpg"})})]})}),o.jsxs("div",{className:"process bg-white",children:[o.jsx("h2",{className:"process-title",children:"The Essence of Bhai Tika"}),o.jsxs("div",{className:"process-grid",children:[o.jsx("div",{className:"process-card",children:o.jsx("h3",{children:"Protection"})}),o.jsx("div",{className:"process-card",children:o.jsx("h3",{children:"Reciprocity"})}),o.jsx("div",{className:"process-card",children:o.jsx("h3",{children:"Trust"})}),o.jsx("div",{className:"process-card",children:o.jsx("h3",{children:"Cultural Continuity"})})]})]}),o.jsxs("div",{className:"photo-section bg-grey",children:[o.jsx("div",{className:"photo-title",children:"Photos of Tihar"}),o.jsxs("div",{className:"photo-grid",children:[o.jsx("img",{src:"images/Tihar2.jpg"}),o.jsx("img",{src:"images/Tihar3.jpg"})]})]})]}),o.jsxs("div",{className:"my-art-section",children:[o.jsxs("div",{className:"my-art-header",children:[o.jsx("h2",{children:"My Arts"}),o.jsx("p",{children:"Art is where my culture, curiosity, and emotions quietly meet. These pieces reflect moments of observation, identity, and self-expression."})]}),o.jsxs("div",{className:"my-art-grid",children:[o.jsxs("div",{className:"my-art-card",children:[o.jsx("img",{src:"images/krishna_art.png"}),o.jsxs("div",{className:"my-art-content",children:[o.jsx("h3",{children:"Bal Krishna"}),o.jsx("p",{children:"A soft, expressive art of Lord Krishna as a child, rendered in gentle hues, capturing innocence, divinity, and serene grace."})]})]}),o.jsxs("div",{className:"my-art-card",children:[o.jsx("img",{src:"images/kumari_art.png"}),o.jsxs("div",{className:"my-art-content",children:[o.jsx("h3",{children:"Kumari"}),o.jsx("p",{children:"An artwork portraying the Kumari—the living goddess—adorned in ceremonial attire, symbolizing divinity, purity, and Nepal’s sacred tradition."})]})]}),o.jsxs("div",{className:"my-art-card",children:[o.jsx("img",{src:"images/shiva_art.png"}),o.jsxs("div",{className:"my-art-content",children:[o.jsx("h3",{children:"Mahadev in Solitude"}),o.jsx("p",{children:"A dramatic art of Lord Shiva standing in contemplation amid mountains and mist, symbolizing cosmic power, detachment, and eternal stillness."})]})]}),o.jsxs("div",{className:"my-art-card",children:[o.jsx("img",{src:"images/mountain_art.png"}),o.jsxs("div",{className:"my-art-content",children:[o.jsx("h3",{children:"Crossing the Heights"}),o.jsx("p",{children:"A miniature landscape art depicting travelers on a suspension bridge amid towering mountains, symbolizing journey, resilience, and quiet adventure."})]})]}),o.jsxs("div",{className:"my-art-card",children:[o.jsx("img",{src:"images/eye_art.png"}),o.jsxs("div",{className:"my-art-content",children:[o.jsx("h3",{children:"Within the Gaze"}),o.jsx("p",{children:"A monochrome conceptual art of an eye reflecting an unborn child, symbolizing creation, vulnerability, and the profound bond between life and consciousness."})]})]}),o.jsxs("div",{className:"my-art-card",children:[o.jsx("img",{src:"images/marriage_art.png"}),o.jsxs("div",{className:"my-art-content",children:[o.jsx("h3",{children:"Bidaai"}),o.jsx("p",{children:"A poignant art capturing a bride’s quiet farewell, reflecting tradition, transition, and the emotional weight of leaving home."})]})]})]})]})]})}function nf(){return o.jsxs("section",{className:"titan3023 page-transition",children:[o.jsx("style",{children:`
        /* PAGE TRANSITION */
        .page-transition {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1.1s ease-out forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* GLOBAL THEME */
        .titan3023 {
          font-family: Georgia, "Times New Roman", serif;
          color: #2b2b2b;
        }

        .section-white {
          background: #ffffff;
          padding: 160px 24px;
        }

        .section-grey {
          background: #f4f4f4;
          padding: 160px 24px;
        }

        .titan-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* HERO / SPLIT LAYOUT */
        .hero,
        .book-project,
        .youtube-project {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        .hero-tag,
        .book-tag,
        .youtube-tag {
          display: inline-block;
          padding: 6px 16px;
          border: 1px solid #7a0c0c;
          color: #7a0c0c;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero h1,
        .book-project h1,
        .youtube-project h1 {
          font-size: 3.2rem;
          color: #7a0c0c;
          margin-bottom: 28px;
        }

        .hero p,
        .book-project p,
        .youtube-project p {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #444;
          max-width: 560px;
        }

        /* IMAGE BASE */
        .hero-image img,
        .youtube-image img,
        .book-cover img {
          width: 100%;
          display: block;
          border-radius: 14px;
          box-shadow: 0 26px 52px rgba(0,0,0,0.16);
          transition:
            transform 0.6s cubic-bezier(.22,.61,.36,1),
            box-shadow 0.6s cubic-bezier(.22,.61,.36,1);
        }

        /* IMAGE HOVER EFFECT */
        .hero-image img:hover,
        .youtube-image img:hover,
        .book-cover img:hover {
          transform: translateY(-10px) scale(1.045);
          box-shadow: 0 46px 92px rgba(0,0,0,0.28);
        }

        /* BUTTONS */
        .hero-cta {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 42px;
        }

        .btn-primary,
        .btn-outline {
          padding: 14px 32px;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(.22,.61,.36,1);
        }

        .btn-primary {
          background: #7a0c0c;
          color: #ffffff;
          border: 1px solid #7a0c0c;
        }

        .btn-primary:hover {
          background: transparent;
          color: #7a0c0c;
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(122,12,12,0.25);
        }

        .btn-outline {
          border: 1px solid #7a0c0c;
          color: #7a0c0c;
          background: transparent;
        }

        .btn-outline:hover {
          background: #7a0c0c;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(122,12,12,0.25);
        }

        /* FEATURES */
        .features-title {
          text-align: center;
          margin-bottom: 72px;
        }

        .features-title h1 {
          font-size: 2.8rem;
          color: #7a0c0c;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .feature {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          padding: 40px 36px;
          transition: all 0.45s cubic-bezier(.22,.61,.36,1);
        }

        .feature h4 {
          color: #7a0c0c;
          margin-bottom: 12px;
        }

        .feature:hover {
          transform: translateY(-10px);
          border-color: #7a0c0c;
          box-shadow: 0 22px 40px rgba(122,12,12,0.18);
        }

        /* DEMO */
        .demo {
          text-align: center;
        }

        .demo h2 {
          font-size: 2.4rem;
          color: #7a0c0c;
          margin-bottom: 42px;
        }

        .demo-frame {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
        }

        .demo-frame iframe {
          width: 100%;
          height: 500px;
          border: none;
        }

        /* BOOK */
        .book-cover {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero,
          .book-project,
          .youtube-project {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero p,
          .book-project p,
          .youtube-project p {
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .features {
            grid-template-columns: 1fr;
          }

          .hero h1,
          .book-project h1,
          .youtube-project h1 {
            font-size: 2.4rem;
          }
        }
      `}),o.jsx("div",{className:"section-white",children:o.jsxs("div",{className:"titan-container hero",children:[o.jsxs("div",{children:[o.jsx("span",{className:"hero-tag",children:"Educational Game Project"}),o.jsx("h1",{children:"Titan 3023"}),o.jsx("p",{children:"Titan 3023 is a narrative-driven educational space game that teaches children facts about the solar system through interactive missions. It blends astronomy with engaging gameplay, allowing players to explore planets, learn key concepts, and apply their knowledge through fun challenges."}),o.jsxs("div",{className:"hero-cta",children:[o.jsx("a",{href:"https://play.unity.com/en/games/754fe501-9767-4a01-a6da-91f46dceb2e5/titan-3023",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:"Play the Game"}),o.jsx("a",{href:"https://www.youtube.com/watch?v=zHpVenMTf3k",target:"_blank",rel:"noopener noreferrer",className:"btn-outline",children:"Watch Demonstration"})]})]}),o.jsx("div",{className:"hero-image",children:o.jsx("img",{src:"/images/game-logo.png",alt:"Titan 3023 game visual"})})]})}),o.jsx("div",{className:"section-grey",children:o.jsxs("div",{className:"titan-container",children:[o.jsx("div",{className:"features-title",children:o.jsx("h1",{children:"Features of the Game"})}),o.jsxs("div",{className:"features",children:[o.jsxs("div",{className:"feature",children:[o.jsx("h4",{children:"Embedded Scientific Concepts"}),o.jsx("p",{children:"Learning emerges naturally from gameplay mechanics."})]}),o.jsxs("div",{className:"feature",children:[o.jsx("h4",{children:"Mission-Oriented Progression"}),o.jsx("p",{children:"Each level mirrors real-world space exploration challenges."})]}),o.jsxs("div",{className:"feature",children:[o.jsx("h4",{children:"Accessible & Thoughtful Design"}),o.jsx("p",{children:"Simple visuals and intuitive controls ensure ease of use."})]})]})]})}),o.jsx("div",{className:"section-white",children:o.jsxs("div",{className:"titan-container demo",children:[o.jsx("h2",{children:"Game Demonstration"}),o.jsx("div",{className:"demo-frame",children:o.jsx("iframe",{src:"https://www.youtube.com/embed/zHpVenMTf3k",title:"Titan 3023 Gameplay Demonstration",allowFullScreen:!0})})]})}),o.jsx("div",{className:"section-grey",children:o.jsxs("div",{className:"titan-container book-project",children:[o.jsxs("div",{className:"book-cover",children:[o.jsx("img",{src:"images/book_cover.png",alt:"Machine Learning Book Cover"}),o.jsx("a",{href:"https://www.amazon.com/dp/B0DRPQRGC9/",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:"Read the Book"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"book-tag",children:"Book Project"}),o.jsx("h1",{children:"Machine Learning for High Schoolers"}),o.jsx("p",{children:"This book provides a practical introduction to machine learning, specifically designed for high school students. It combines foundational concepts in mathematics, computer science, and data-analysis with step-by-step guidance to create and evaluate machine learning models. With accessible explanations and real-world examples, the book bridges the gap between beginner-friendly resources and overly technical material."})]})]})}),o.jsx("div",{className:"section-white",children:o.jsxs("div",{className:"titan-container",children:[o.jsx("div",{className:"features-title",children:o.jsx("h1",{children:"Features of the Book"})}),o.jsxs("div",{className:"features",children:[o.jsxs("div",{className:"feature",children:[o.jsx("h4",{children:"Concept-First Explanations"}),o.jsx("p",{children:"Ideas are introduced intuitively before technical depth."})]}),o.jsxs("div",{className:"feature",children:[o.jsx("h4",{children:"Real-World Examples"}),o.jsx("p",{children:"Machine learning connected to everyday experiences."})]}),o.jsxs("div",{className:"feature",children:[o.jsx("h4",{children:"Student-Centered Structure"}),o.jsx("p",{children:"Designed for clarity, flow, and young learners."})]})]})]})}),o.jsx("div",{className:"section-grey",children:o.jsxs("div",{className:"titan-container youtube-project",children:[o.jsxs("div",{children:[o.jsx("span",{className:"youtube-tag",children:"YouTube Channel"}),o.jsx("h1",{children:"Tech With Aryan"}),o.jsx("p",{children:"I realized that many people in Nepal wanted to learn coding, but most online resources were only available in English. To bridge this gap, I started a YouTube channel where I teach coding in Nepali, making tech education accessible and empowering the Nepali tech community."}),o.jsx("div",{className:"hero-cta",children:o.jsx("a",{href:"https://www.youtube.com/@techwitharyan05/featured",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:"Visit Channel"})})]}),o.jsx("div",{children:o.jsx("img",{src:"/images/youtube_channel.png",alt:"Tech With Aryan Channel"})})]})}),o.jsx("div",{className:"section-white",children:o.jsxs("div",{className:"titan-container",children:[o.jsx("div",{className:"features-title",children:o.jsx("h1",{children:"Features of the Channel"})}),o.jsxs("div",{className:"features",children:[o.jsxs("div",{className:"feature",children:[o.jsx("h4",{children:"Nepali Language Tutorials"}),o.jsx("p",{children:"Coding concepts explained clearly in Nepali."})]}),o.jsxs("div",{className:"feature",children:[o.jsx("h4",{children:"Beginner-Friendly Content"}),o.jsx("p",{children:"Designed for students with little or no prior experience."})]}),o.jsxs("div",{className:"feature",children:[o.jsx("h4",{children:"Community-Focused Learning"}),o.jsx("p",{children:"Encouraging and supporting Nepal’s growing tech community."})]})]})]})}),o.jsx("div",{className:"section-grey",children:o.jsxs("div",{className:"titan-container demo",children:[o.jsx("h2",{children:"Video Demonstration"}),o.jsx("div",{className:"demo-frame",children:o.jsx("iframe",{src:"https://www.youtube.com/embed/C-jafqSxrks",title:"YouTube Video Demonstration",allowFullScreen:!0})})]})})]})}function rf(){return o.jsxs("section",{className:"leadership-root page-transition",children:[o.jsx("style",{children:`
        /* PAGE TRANSITION */
        .page-transition {
          opacity: 0;
          transform: translateY(32px);
          animation: fadeUp 1.2s cubic-bezier(.22,.61,.36,1) forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ROOT */
        .leadership-root {
          font-family: Georgia, "Times New Roman", serif;
          color: #2b2b2b;
          background: #ffffff;
        }

        /* SECTION SPACING (REDUCED) */
        .section-white {
          background: #ffffff;
          padding: 110px 28px;
        }

        .section-grey {
          background: linear-gradient(to bottom, #f7f7f7, #f2f2f2);
          padding: 110px 28px;
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
        }

        /* SECTION HEADER */
        .section-header {
          max-width: 700px;
        }

        .tag {
          display: inline-block;
          padding: 7px 20px;
          border: 1px solid #7a0c0c;
          color: #7a0c0c;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          margin-bottom: 22px;
          text-transform: uppercase;
        }

        .section-header h1,
        .section-header h2 {
          font-size: 3rem;
          color: #7a0c0c;
          line-height: 1.22;
          margin-bottom: 22px;
        }

        .section-header p {
          font-size: 1.12rem;
          line-height: 1.95;
          color: #444;
        }

        /* HERO SPLIT */
        .hero-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        .hero-image {
          width: 100%;
          height: 340px;
          object-fit: cover;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.18);
          transition: transform 0.6s ease, box-shadow 0.6s ease;
        }

        .hero-image:hover {
          transform: scale(1.035) translateY(-6px);
          box-shadow: 0 42px 86px rgba(0,0,0,0.28);
        }

        /* HIGHLIGHT BOXES */
        .highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .highlight {
          background: #ffffff;
          padding: 48px 36px;
          border-radius: 30px;
          box-shadow: 0 26px 60px rgba(0,0,0,0.08);
          text-align: center;
          position: relative;
          border: 2px solid transparent;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border 0.35s ease;
        }

        .highlight::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 72px;
          height: 4px;
          background: #7a0c0c;
          border-radius: 4px;
        }

        .highlight:hover {
          transform: translateY(-10px) scale(1.015);
          box-shadow: 0 40px 80px rgba(0,0,0,0.14);
          border: 2px solid #7a0c0c;
        }

        .highlight h4 {
          font-size: 1.3rem;
          color: #7a0c0c;
          margin-top: 22px;
          margin-bottom: 14px;
          letter-spacing: 0.05em;
        }

        .highlight p {
          font-size: 1.04rem;
          line-height: 1.85;
          color: #444;
          max-width: 280px;
          margin: 0 auto;
        }

        /* BOXES TITLE (REDUCED GAP) */
        .boxes-title {
          text-align: center;
          font-size: 2.1rem;
          color: #7a0c0c;
          margin-bottom: 42px;
        }

        /* GALLERY */
        .gallery h2 {
          text-align: center;
          font-size: 2.6rem;
          color: #7a0c0c;
          margin-bottom: 60px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
        }

        .gallery-grid img {
          width: 120%;
          height: 240px;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 26px 52px rgba(0,0,0,0.16);
          transition: transform 0.55s ease, box-shadow 0.55s ease;
        }

        .gallery-grid img:hover {
          transform: scale(1.06) translateY(-8px);
          box-shadow: 0 44px 88px rgba(0,0,0,0.28);
        }

        /* CLUB FEATURE */
        .club-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: start;
        }

        .club-visual img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 34px;
          box-shadow: 0 36px 70px rgba(0,0,0,0.22);
          transition: transform 0.6s ease, box-shadow 0.6s ease;
        }

        .club-visual img:hover {
          transform: scale(1.04) translateY(-10px);
          box-shadow: 0 54px 104px rgba(0,0,0,0.34);
        }

        .club-text h2 {
          font-size: 2.9rem;
          color: #7a0c0c;
          margin-bottom: 22px;
          line-height: 1.25;
        }

        .club-text p {
          font-size: 1.12rem;
          line-height: 1.95;
          color: #444;
          max-width: 680px;
        }

        /* PROGRAMMING BOX GRID */
        .club-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        @media (max-width: 1100px) {
          .club-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .hero-split,
          .highlights,
          .gallery-grid,
          .club-layout,
          .club-cards {
            grid-template-columns: 1fr;
          }

          .section-header h1,
          .section-header h2,
          .club-text h2 {
            font-size: 2.3rem;
          }

          .hero-image,
          .club-visual img {
            height: 300px;
          }
        }
      `}),o.jsx("div",{className:"section-white",children:o.jsxs("div",{className:"container hero-split",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"tag",children:"Student Leadership"}),o.jsxs("h1",{children:["Founder & Captain",o.jsx("br",{}),"Rato Bangala School Quiz Team"]}),o.jsx("p",{children:"I founded and led my school’s quiz team at the national level competitions, building a committed group of students united by a genuine interest in learning. As captain, I coordinated regular practice sessions, guided team strategy, and fostered a culture of preparation, teamwork, and intellectual curiosity."})]}),o.jsx("img",{src:"/images/rbs_quiz_team.jpg",alt:"Quiz Team",className:"hero-image"})]})}),o.jsx("div",{className:"section-grey",children:o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"boxes-title",children:"Roles & Responsibilities"}),o.jsxs("div",{className:"highlights",children:[o.jsxs("div",{className:"highlight",children:[o.jsx("h4",{children:"Founder"}),o.jsx("p",{children:"Conceptualized the team and its academic vision."})]}),o.jsxs("div",{className:"highlight",children:[o.jsx("h4",{children:"Captain"}),o.jsx("p",{children:"Led the school team in national-level competitions."})]}),o.jsxs("div",{className:"highlight",children:[o.jsx("h4",{children:"Mentor"}),o.jsx("p",{children:"Trained juniors to ensure continuity and excellence."})]})]})]})}),o.jsx("div",{className:"section-white",children:o.jsxs("div",{className:"container gallery",children:[o.jsx("h2",{children:"Competitions & Recognition"}),o.jsxs("div",{className:"gallery-grid",children:[o.jsx("img",{src:"/images/rbs_quiz.jpg",alt:"Quiz competition"}),o.jsx("img",{src:"/images/rbs_quiz_certificate_team.jpg",alt:"Certificate"}),o.jsx("img",{src:"/images/rbs_quiz_certificate.jpg",alt:"Award"})]})]})}),o.jsx("div",{className:"section-grey",children:o.jsxs("div",{className:"container club-layout",children:[o.jsx("div",{className:"club-visual",children:o.jsx("img",{src:"/images/gloves.jpg",alt:"Assistive Glove Project"})}),o.jsxs("div",{className:"club-text",children:[o.jsx("span",{className:"tag",children:"Innovation & Impact"}),o.jsxs("h2",{children:["Vice President",o.jsx("br",{}),"Rato Bangala School Programming & Robotics Club"]}),o.jsx("p",{children:"As the Vice President, I managed the club’s academic and technical activities, organizing regular coding sessions and introductory workshops for junior students. I focused on building strong fundamentals, encouraging peer learning, and guiding members through practical exercises and small projects to develop confidence in programming and robotics."}),o.jsx("br",{}),o.jsx("p",{children:"Building on this foundation, I led the team in developing a glove that translates sign language into text, integrating hardware and software components. I also led club teams in national and regional hackathons, coordinating project development and supporting focused, collaborative work under competitive conditions."})]})]})}),o.jsx("div",{className:"section-white",children:o.jsxs("div",{className:"container",children:[o.jsx("h2",{className:"boxes-title",children:"Roles & Responsibilities"}),o.jsxs("div",{className:"club-cards",children:[o.jsxs("div",{className:"highlight",children:[o.jsx("h4",{children:"Assistive Glove"}),o.jsx("p",{children:"Wearable technology translating sign language into text."})]}),o.jsxs("div",{className:"highlight",children:[o.jsx("h4",{children:"National Hackathon"}),o.jsx("p",{children:"First-prize winner representing RBS."})]}),o.jsxs("div",{className:"highlight",children:[o.jsx("h4",{children:"Civic-Tech Platform"}),o.jsx("p",{children:"Web app built for a garbage-cleaning agency."})]}),o.jsxs("div",{className:"highlight",children:[o.jsx("h4",{children:"Best Project Award"}),o.jsx("p",{children:"Winner at RBS Science Expo 2023."})]})]})]})}),o.jsx("div",{className:"section-grey",children:o.jsxs("div",{className:"container gallery",children:[o.jsx("h2",{children:"Robotics, Hackathons & Innovation"}),o.jsxs("div",{className:"gallery-grid",children:[o.jsx("img",{src:"/images/hackathon.png",alt:"Hackathon"}),o.jsx("img",{src:"/images/prize.png",alt:"Prize"}),o.jsx("img",{src:"/images/hackathon3.jpg",alt:"Expo"})]})]})})]})}function lf(){return o.jsxs("div",{className:"work-root",children:[o.jsx("style",{children:`
        /* ------------------ PAGE-LOAD ANIMATION ------------------ */
        .work-root {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.2s ease-out forwards;
          font-family: Georgia, "Times New Roman", serif;
          color: #2b2b2b;
          line-height: 1.6;
        }

        .title-main-entrepreneurial {
          margin-top: 40px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ------------------ TITLES ------------------ */
        .title-main {
          font-size: 56px;
          text-align: center;
          font-weight: 700;
          letter-spacing: 1px;
          color: #6b0f0f;
          margin-bottom: 50px;
        }

        .title-sub {
          font-size: 28px;
          color: #6b0f0f;
          font-weight: 700;
          margin-bottom: 25px;
          text-align: center;
          letter-spacing: 0.5px;
        }

        /* ------------------ SECTIONS ------------------ */
        .section {
          padding: 90px 40px;
        }

        .section-white {
          background: #ffffff;
        }

        .section-grey {
          background: #f4f4f4;
        }

        /* ------------------ FLEX LAYOUT ------------------ */
        .content-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: 50px;
        }

        .text-block {
          flex: 1;
          min-width: 340px;
          max-width: 700px;
        }

        .text-block p {
          font-size: 20px;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .text-block ul {
          font-size: 18px;
          padding-left: 22px;
          margin-top: 10px;
          list-style-type: disc;
        }

        .text-block li {
          margin-bottom: 12px;
        }

        /* ------------------ IMAGE BLOCK ------------------ */
        .single-image-block {
          flex: 0 0 360px;
          text-align: center;
          transform: translateY(10px);
        }

        .single-image-block img {
          width: 100%;
          border-radius: 18px;
          height: 320px;
          object-fit: cover;
          box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.15);
          transition: transform 0.35s ease;
        }

        .single-image-block img:hover {
          transform: scale(1.04);
        }

        /* ------------------ PHOTO GRID ------------------ */
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .photo-grid img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0px 6px 20px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .photo-grid img:hover {
          transform: scale(1.03);
        }

        @media (max-width: 900px) {
          .content-flex { flex-direction: column; }
        }
      `}),o.jsxs("div",{className:"section section-white",children:[o.jsx("h1",{className:"title-main title-main-entrepreneurial",children:"Entrepreneurial Experience"}),o.jsx("h2",{className:"title-sub",children:"Nabil School of Social Entrepreneurship Fellowship Program"}),o.jsxs("div",{className:"content-flex",children:[o.jsxs("div",{className:"text-block",children:[o.jsx("p",{children:"I was selected to join the Nabil School of Social Entrepreneurship, where I participated in weekly sessions exploring socially driven, scalable ventures. The program strengthened my leadership approach and deepened my understanding of sustainable innovation."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Gained practical experience in identifying community needs through structured field interviews and root-cause analysis methods."}),o.jsx("li",{children:"Learned to design a clear and sustainable business model supported by realistic budgeting and resource planning."}),o.jsx("li",{children:"Developed a strong understanding of how to measure and evaluate the social impact of community-focused projects."}),o.jsx("li",{children:"Built skills in crafting and delivering confident, polished pitches for social enterprise and startup ideas."})]})]}),o.jsx("div",{className:"single-image-block",children:o.jsx("img",{src:"/images/nabil_fellowship.jpeg",alt:"Nabil School"})})]}),o.jsxs("div",{className:"photo-grid",children:[o.jsx("img",{src:"/images/presentation.jpeg",alt:"Nabil Event 1"}),o.jsx("img",{src:"/images/session1.jpeg",alt:"Nabil Event 2"}),o.jsx("img",{src:"/images/session2.jpeg",alt:"Nabil Event 3"}),o.jsx("img",{src:"/images/nabil4.jpeg",alt:"Nabil Event 4"})]})]}),o.jsxs("div",{className:"section section-grey",children:[o.jsx("h1",{className:"title-main",children:"Work Experience"}),o.jsx("h2",{className:"title-sub",children:"Project Coordinator: Urban TB Control Initiative, Japan-Nepal Health and Tuberculosis Research Association"}),o.jsxs("div",{className:"content-flex",children:[o.jsx("div",{className:"single-image-block",children:o.jsx("img",{src:"/images/jantra-logo.png",alt:"JANTRA"})}),o.jsxs("div",{className:"text-block",children:[o.jsx("p",{children:"During my role as Project Coordinator for the Urban TB Control Initiative at JANTRA, I worked on strengthening diagnostic access and community-level TB surveillance in high-density urban areas."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Collaborated with medical officers and field teams to oversee AI-assisted X-ray screening and TB-LAMP testing."}),o.jsx("li",{children:"Led screening operations reaching over 2,500 individuals and ensured effective linkage to treatment."}),o.jsx("li",{children:"Trained 52 healthcare staff on diagnostic protocols and reporting systems."}),o.jsx("li",{children:"Organized and facilitated 12 structured review meetings to refine strategies and track progress."})]})]})]})]}),o.jsxs("div",{className:"section section-white",children:[o.jsx("h2",{className:"title-sub",children:"AI Engineer, Hello World IT Solutions"}),o.jsxs("div",{className:"content-flex",children:[o.jsxs("div",{className:"text-block",children:[o.jsx("p",{children:"As an AI Engineer, I worked on the following:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Developed an AI model diagnosing Pneumonia and Tuberculosis using 7,132 chest X-ray images."}),o.jsx("li",{children:"Built a lightweight architecture with 3.7 million parameters."}),o.jsx("li",{children:"Achieved 94% overall diagnostic accuracy."}),o.jsx("li",{children:"Received validation from medical experts for clinical applicability."})]})]}),o.jsx("div",{className:"single-image-block",children:o.jsx("img",{src:"/images/hello-world-it-solutions-logo.png",alt:"Hello World IT Solutions"})})]})]}),o.jsxs("div",{className:"section section-grey",children:[o.jsx("h1",{className:"title-main",children:"Internship"}),o.jsx("h2",{className:"title-sub",children:"Product Design Intern, Billion Bricks"}),o.jsxs("div",{className:"content-flex",children:[o.jsx("div",{className:"single-image-block",children:o.jsx("img",{src:"/images/billion-bricks-logo.png",alt:"Billion Bricks"})}),o.jsxs("div",{className:"text-block",children:[o.jsx("p",{children:"At Billion Bricks, I worked on practical design tasks tied to real projects, collaborating closely with the team and contributing to early sustainable housing concepts."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Designed digital tokens with the CEO for the World Trade Conference."}),o.jsx("li",{children:"Conducted user research on sustainable housing challenges."}),o.jsx("li",{children:"Translated research insights into early design concepts."}),o.jsx("li",{children:"Created and refined prototypes using Blender and Sketch."})]})]})]})]})]})}function of(){return o.jsxs("section",{className:"contact-root fade-in",children:[o.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        /* ===== PAGE LOAD TRANSITION ===== */
        .fade-in {
          opacity: 0;
          transform: translateY(32px);
          animation: fadeInUp 1.1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-root {
          padding: 140px 24px 120px;
          font-family: "Georgia", "Times New Roman", serif;
          background: #ffffff;
        }

        .contact-title {
          text-align: center;
          font-size: 56px;
          color: #6b0f0f;
          margin-bottom: 80px;
          font-weight: 500;
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
        }

        .contact-card {
          background: #fafafa;
          padding: 48px;
        }

        .contact-card h3 {
          font-size: 26px;
          color: #6b0f0f;
          margin-bottom: 28px;
          font-weight: 500;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #c5c5c5;
          font-size: 16px;
          outline: none;
          font-family: inherit;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #6f6f6f;
        }

        .contact-textarea {
          min-height: 140px;
          resize: none;
          margin-top: 16px;
        }

        .contact-label {
          margin: 22px 0 12px;
          font-size: 16px;
          color: #000;
        }

        .submit-btn {
          margin-top: 28px;
          background: #000;
          color: #fff;
          padding: 12px 28px;
          border: none;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.15s ease;
        }

        .submit-btn:hover {
          background: #222;
          transform: translateY(-1px);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .mail-box {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 18px;
        }

        .mail-box a {
          color: #000;
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .contact-title {
            font-size: 42px;
          }
        }
      `}),o.jsx("h1",{className:"contact-title",children:"Contact Me"}),o.jsxs("div",{className:"contact-container",children:[o.jsxs("div",{className:"contact-card",children:[o.jsx("h3",{children:"Request a Call"}),o.jsxs("div",{className:"form-row",children:[o.jsx("input",{className:"contact-input",placeholder:"First Name"}),o.jsx("input",{className:"contact-input",placeholder:"Last Name"})]}),o.jsx("input",{className:"contact-input",placeholder:"Email Address",style:{marginBottom:"20px"}}),o.jsx("input",{className:"contact-input",placeholder:"Contact Number"}),o.jsx("p",{className:"contact-label",children:"I'm looking forward to connect with you! Is there anything specific you want to discuss with me?"}),o.jsx("textarea",{className:"contact-textarea"}),o.jsx("button",{className:"submit-btn",children:"Submit"})]}),o.jsxs("div",{className:"contact-card",children:[o.jsx("h3",{children:"Give me Mail."}),o.jsxs("div",{className:"mail-box",children:[o.jsx(Au,{size:22,color:"#6b0f0f"}),o.jsx("a",{href:"mailto:basnetaryan05@gmail.com",children:"basnetaryan05@gmail.com"})]})]})]})]})}function sf(){const[C,R]=Rn.useState("home"),h=()=>{switch(C){case"home":return o.jsx(Du,{});case"community":return o.jsx(ef,{});case"art":return o.jsx(tf,{});case"projects":return o.jsx(nf,{});case"leadership":return o.jsx(rf,{});case"work":return o.jsx(lf,{});case"contact":return o.jsx(of,{});default:return o.jsx(Du,{})}};return o.jsxs("div",{className:"bg-neutral-50",children:[o.jsx(Wd,{currentPage:C,setCurrentPage:R}),h(),o.jsx(bd,{setCurrentPage:R})]})}Vd.createRoot(document.getElementById("root")).render(o.jsx(sf,{}));
