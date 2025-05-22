function TT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function i_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hd={exports:{}},Da={},dd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function IT(){if(fg)return Ae;fg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function P(x){return x===null||typeof x!="object"?null:(x=T&&x[T]||x["@@iterator"],typeof x=="function"?x:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,$={};function M(x,W,he){this.props=x,this.context=W,this.refs=$,this.updater=he||F}M.prototype.isReactComponent={},M.prototype.setState=function(x,W){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,W,"setState")},M.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function re(){}re.prototype=M.prototype;function ie(x,W,he){this.props=x,this.context=W,this.refs=$,this.updater=he||F}var ee=ie.prototype=new re;ee.constructor=ie,z(ee,M.prototype),ee.isPureReactComponent=!0;var ae=Array.isArray,Ce=Object.prototype.hasOwnProperty,Ie={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(x,W,he){var Se,Re={},De=null,Me=null;if(W!=null)for(Se in W.ref!==void 0&&(Me=W.ref),W.key!==void 0&&(De=""+W.key),W)Ce.call(W,Se)&&!D.hasOwnProperty(Se)&&(Re[Se]=W[Se]);var Ue=arguments.length-2;if(Ue===1)Re.children=he;else if(1<Ue){for(var $e=Array(Ue),vt=0;vt<Ue;vt++)$e[vt]=arguments[vt+2];Re.children=$e}if(x&&x.defaultProps)for(Se in Ue=x.defaultProps,Ue)Re[Se]===void 0&&(Re[Se]=Ue[Se]);return{$$typeof:n,type:x,key:De,ref:Me,props:Re,_owner:Ie.current}}function A(x,W){return{$$typeof:n,type:x.type,key:W,ref:x.ref,props:x.props,_owner:x._owner}}function k(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function O(x){var W={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(he){return W[he]})}var L=/\/+/g;function R(x,W){return typeof x=="object"&&x!==null&&x.key!=null?O(""+x.key):W.toString(36)}function rt(x,W,he,Se,Re){var De=typeof x;(De==="undefined"||De==="boolean")&&(x=null);var Me=!1;if(x===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(x.$$typeof){case n:case e:Me=!0}}if(Me)return Me=x,Re=Re(Me),x=Se===""?"."+R(Me,0):Se,ae(Re)?(he="",x!=null&&(he=x.replace(L,"$&/")+"/"),rt(Re,W,he,"",function(vt){return vt})):Re!=null&&(k(Re)&&(Re=A(Re,he+(!Re.key||Me&&Me.key===Re.key?"":(""+Re.key).replace(L,"$&/")+"/")+x)),W.push(Re)),1;if(Me=0,Se=Se===""?".":Se+":",ae(x))for(var Ue=0;Ue<x.length;Ue++){De=x[Ue];var $e=Se+R(De,Ue);Me+=rt(De,W,he,$e,Re)}else if($e=P(x),typeof $e=="function")for(x=$e.call(x),Ue=0;!(De=x.next()).done;)De=De.value,$e=Se+R(De,Ue++),Me+=rt(De,W,he,$e,Re);else if(De==="object")throw W=String(x),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Me}function xt(x,W,he){if(x==null)return x;var Se=[],Re=0;return rt(x,Se,"","",function(De){return W.call(he,De,Re++)}),Se}function Lt(x){if(x._status===-1){var W=x._result;W=W(),W.then(function(he){(x._status===0||x._status===-1)&&(x._status=1,x._result=he)},function(he){(x._status===0||x._status===-1)&&(x._status=2,x._result=he)}),x._status===-1&&(x._status=0,x._result=W)}if(x._status===1)return x._result.default;throw x._result}var Be={current:null},J={transition:null},fe={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ie};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:xt,forEach:function(x,W,he){xt(x,function(){W.apply(this,arguments)},he)},count:function(x){var W=0;return xt(x,function(){W++}),W},toArray:function(x){return xt(x,function(W){return W})||[]},only:function(x){if(!k(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ae.Component=M,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ie,Ae.StrictMode=i,Ae.Suspense=p,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Ae.act=ne,Ae.cloneElement=function(x,W,he){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Se=z({},x.props),Re=x.key,De=x.ref,Me=x._owner;if(W!=null){if(W.ref!==void 0&&(De=W.ref,Me=Ie.current),W.key!==void 0&&(Re=""+W.key),x.type&&x.type.defaultProps)var Ue=x.type.defaultProps;for($e in W)Ce.call(W,$e)&&!D.hasOwnProperty($e)&&(Se[$e]=W[$e]===void 0&&Ue!==void 0?Ue[$e]:W[$e])}var $e=arguments.length-2;if($e===1)Se.children=he;else if(1<$e){Ue=Array($e);for(var vt=0;vt<$e;vt++)Ue[vt]=arguments[vt+2];Se.children=Ue}return{$$typeof:n,type:x.type,key:Re,ref:De,props:Se,_owner:Me}},Ae.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:l,_context:x},x.Consumer=x},Ae.createElement=S,Ae.createFactory=function(x){var W=S.bind(null,x);return W.type=x,W},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(x){return{$$typeof:f,render:x}},Ae.isValidElement=k,Ae.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:Lt}},Ae.memo=function(x,W){return{$$typeof:_,type:x,compare:W===void 0?null:W}},Ae.startTransition=function(x){var W=J.transition;J.transition={};try{x()}finally{J.transition=W}},Ae.unstable_act=ne,Ae.useCallback=function(x,W){return Be.current.useCallback(x,W)},Ae.useContext=function(x){return Be.current.useContext(x)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(x){return Be.current.useDeferredValue(x)},Ae.useEffect=function(x,W){return Be.current.useEffect(x,W)},Ae.useId=function(){return Be.current.useId()},Ae.useImperativeHandle=function(x,W,he){return Be.current.useImperativeHandle(x,W,he)},Ae.useInsertionEffect=function(x,W){return Be.current.useInsertionEffect(x,W)},Ae.useLayoutEffect=function(x,W){return Be.current.useLayoutEffect(x,W)},Ae.useMemo=function(x,W){return Be.current.useMemo(x,W)},Ae.useReducer=function(x,W,he){return Be.current.useReducer(x,W,he)},Ae.useRef=function(x){return Be.current.useRef(x)},Ae.useState=function(x){return Be.current.useState(x)},Ae.useSyncExternalStore=function(x,W,he){return Be.current.useSyncExternalStore(x,W,he)},Ae.useTransition=function(){return Be.current.useTransition()},Ae.version="18.3.1",Ae}var pg;function lf(){return pg||(pg=1,dd.exports=IT()),dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function ST(){if(mg)return Da;mg=1;var n=lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,_){var w,T={},P=null,F=null;_!==void 0&&(P=""+_),p.key!==void 0&&(P=""+p.key),p.ref!==void 0&&(F=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:f,key:P,ref:F,props:T,_owner:o.current}}return Da.Fragment=t,Da.jsx=h,Da.jsxs=h,Da}var gg;function RT(){return gg||(gg=1,hd.exports=ST()),hd.exports}var ge=RT(),Z=lf();const AT=i_(Z),CT=TT({__proto__:null,default:AT},[Z]);var Du={},fd={exports:{}},tn={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function PT(){return yg||(yg=1,function(n){function e(J,fe){var ne=J.length;J.push(fe);e:for(;0<ne;){var x=ne-1>>>1,W=J[x];if(0<o(W,fe))J[x]=fe,J[ne]=W,ne=x;else break e}}function t(J){return J.length===0?null:J[0]}function i(J){if(J.length===0)return null;var fe=J[0],ne=J.pop();if(ne!==fe){J[0]=ne;e:for(var x=0,W=J.length,he=W>>>1;x<he;){var Se=2*(x+1)-1,Re=J[Se],De=Se+1,Me=J[De];if(0>o(Re,ne))De<W&&0>o(Me,Re)?(J[x]=Me,J[De]=ne,x=De):(J[x]=Re,J[Se]=ne,x=Se);else if(De<W&&0>o(Me,ne))J[x]=Me,J[De]=ne,x=De;else break e}}return fe}function o(J,fe){var ne=J.sortIndex-fe.sortIndex;return ne!==0?ne:J.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var p=[],_=[],w=1,T=null,P=3,F=!1,z=!1,$=!1,M=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(J){for(var fe=t(_);fe!==null;){if(fe.callback===null)i(_);else if(fe.startTime<=J)i(_),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=t(_)}}function ae(J){if($=!1,ee(J),!z)if(t(p)!==null)z=!0,Lt(Ce);else{var fe=t(_);fe!==null&&Be(ae,fe.startTime-J)}}function Ce(J,fe){z=!1,$&&($=!1,re(S),S=-1),F=!0;var ne=P;try{for(ee(fe),T=t(p);T!==null&&(!(T.expirationTime>fe)||J&&!O());){var x=T.callback;if(typeof x=="function"){T.callback=null,P=T.priorityLevel;var W=x(T.expirationTime<=fe);fe=n.unstable_now(),typeof W=="function"?T.callback=W:T===t(p)&&i(p),ee(fe)}else i(p);T=t(p)}if(T!==null)var he=!0;else{var Se=t(_);Se!==null&&Be(ae,Se.startTime-fe),he=!1}return he}finally{T=null,P=ne,F=!1}}var Ie=!1,D=null,S=-1,A=5,k=-1;function O(){return!(n.unstable_now()-k<A)}function L(){if(D!==null){var J=n.unstable_now();k=J;var fe=!0;try{fe=D(!0,J)}finally{fe?R():(Ie=!1,D=null)}}else Ie=!1}var R;if(typeof ie=="function")R=function(){ie(L)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,xt=rt.port2;rt.port1.onmessage=L,R=function(){xt.postMessage(null)}}else R=function(){M(L,0)};function Lt(J){D=J,Ie||(Ie=!0,R())}function Be(J,fe){S=M(function(){J(n.unstable_now())},fe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_continueExecution=function(){z||F||(z=!0,Lt(Ce))},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return P},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(J){switch(P){case 1:case 2:case 3:var fe=3;break;default:fe=P}var ne=P;P=fe;try{return J()}finally{P=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(J,fe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ne=P;P=J;try{return fe()}finally{P=ne}},n.unstable_scheduleCallback=function(J,fe,ne){var x=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?x+ne:x):ne=x,J){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ne+W,J={id:w++,callback:fe,priorityLevel:J,startTime:ne,expirationTime:W,sortIndex:-1},ne>x?(J.sortIndex=ne,e(_,J),t(p)===null&&J===t(_)&&($?(re(S),S=-1):$=!0,Be(ae,ne-x))):(J.sortIndex=W,e(p,J),z||F||(z=!0,Lt(Ce))),J},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(J){var fe=P;return function(){var ne=P;P=fe;try{return J.apply(this,arguments)}finally{P=ne}}}}(md)),md}var _g;function kT(){return _g||(_g=1,pd.exports=PT()),pd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function NT(){if(vg)return tn;vg=1;var n=lf(),e=kT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function P(r){return p.call(T,r)?!0:p.call(w,r)?!1:_.test(r)?T[r]=!0:(w[r]=!0,!1)}function F(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function z(r,s,a,c){if(s===null||typeof s>"u"||F(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,c,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){M[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];M[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){M[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){M[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){M[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){M[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){M[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){M[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){M[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function ie(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(re,ie);M[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(re,ie);M[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(re,ie);M[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){M[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),M.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){M[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,c){var d=M.hasOwnProperty(s)?M[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(z(s,a,d,c)&&(a=null),c||d===null?P(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ae=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),J=Symbol.iterator;function fe(r){return r===null||typeof r!="object"?null:(r=J&&r[J]||r["@@iterator"],typeof r=="function"?r:null)}var ne=Object.assign,x;function W(r){if(x===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);x=s&&s[1]||""}return`
`+x+r}var he=!1;function Se(r,s){if(!r||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var c=j}Reflect.construct(r,[],s)}else{try{s.call()}catch(j){c=j}r.call(s.prototype)}else{try{throw Error()}catch(j){c=j}r()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,I=g.length-1;1<=v&&0<=I&&d[v]!==g[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==g[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==g[I]){var C=`
`+d[v].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=v&&0<=I);break}}}finally{he=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?W(r):""}function Re(r){switch(r.tag){case 5:return W(r.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case Ie:return"Portal";case A:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case rt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case L:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case xt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Lt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function hr(r){r._valueTracker||(r._valueTracker=vt(r))}function Ts(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Ur(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ni(r,s){var a=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Is(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Mo(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function Uo(r,s){Mo(r,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ss(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ss(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function gl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ss(r,s,a){(s!=="number"||Ur(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var dr=Array.isArray;function fr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Fo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Rs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(dr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function As(r,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function jo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var pr,Bo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=pr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Fr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oi=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(r){Oi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Di[s]=Di[r]})});function zo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Di.hasOwnProperty(r)&&Di[r]?(""+s).trim():s+"px"}function $o(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=zo(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var Wo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qo(r,s){if(s){if(Wo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ho(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function Cs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ps=null,pn=null,Hn=null;function ks(r){if(r=ga(r)){if(typeof Ps!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Hl(s),Ps(r.stateNode,r.type,s))}}function Kn(r){pn?Hn?Hn.push(r):Hn=[r]:pn=r}function Ko(){if(pn){var r=pn,s=Hn;if(Hn=pn=null,ks(r),s)for(r=0;r<s.length;r++)ks(s[r])}}function Li(r,s){return r(s)}function Go(){}var mr=!1;function Qo(r,s,a){if(mr)return r(s,a);mr=!0;try{return Li(r,s,a)}finally{mr=!1,(pn!==null||Hn!==null)&&(Go(),Ko())}}function it(r,s){var a=r.stateNode;if(a===null)return null;var c=Hl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ns=!1;if(f)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Ns=!1}function Vi(r,s,a,c,d,g,v,I,C){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(H){this.onError(H)}}var bi=!1,Ds=null,Pn=!1,Yo=null,Fc={onError:function(r){bi=!0,Ds=r}};function Os(r,s,a,c,d,g,v,I,C){bi=!1,Ds=null,Vi.apply(Fc,arguments)}function yl(r,s,a,c,d,g,v,I,C){if(Os.apply(this,arguments),bi){if(bi){var j=Ds;bi=!1,Ds=null}else throw Error(t(198));Pn||(Pn=!0,Yo=j)}}function kn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Mi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Nn(r){if(kn(r)!==r)throw Error(t(188))}function _l(r){var s=r.alternate;if(!s){if(s=kn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Nn(d),r;if(g===c)return Nn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=g;break}if(I===c){v=!0,c=d,a=g;break}I=I.sibling}if(!v){for(I=g.child;I;){if(I===a){v=!0,a=g,c=d;break}if(I===c){v=!0,c=g,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Xo(r){return r=_l(r),r!==null?xs(r):null}function xs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=xs(r);if(s!==null)return s;r=r.sibling}return null}var Ls=e.unstable_scheduleCallback,Jo=e.unstable_cancelCallback,vl=e.unstable_shouldYield,jc=e.unstable_requestPaint,We=e.unstable_now,wl=e.unstable_getCurrentPriorityLevel,Ui=e.unstable_ImmediatePriority,jr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,Zo=e.unstable_LowPriority,El=e.unstable_IdlePriority,Fi=null,sn=null;function Tl(r){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Fi,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Sl,ea=Math.log,Il=Math.LN2;function Sl(r){return r>>>=0,r===0?32:31-(ea(r)/Il|0)|0}var Vs=64,bs=4194304;function Br(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ji(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Br(I):(g&=v,g!==0&&(c=Br(g)))}else v=a&~d,v!==0?c=Br(v):g!==0&&(c=Br(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-$t(s),d=1<<a,c|=r[a],s&=~d;return c}function Bc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-$t(g),I=1<<v,C=d[v];C===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Bc(I,s)):C<=s&&(r.expiredLanes|=I),g&=~I}}function on(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Bi(){var r=Vs;return Vs<<=1,(Vs&4194240)===0&&(Vs=64),r}function zr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function $r(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-$t(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function Wr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-$t(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var ke=0;function qr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Rl,Ms,Al,Cl,Pl,ta=!1,Gn=[],Rt=null,Dn=null,On=null,Hr=new Map,gn=new Map,Qn=[],zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Hr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Gt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=ga(s),s!==null&&Ms(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function $c(r,s,a,c,d){switch(s){case"focusin":return Rt=Gt(Rt,r,s,a,c,d),!0;case"dragenter":return Dn=Gt(Dn,r,s,a,c,d),!0;case"mouseover":return On=Gt(On,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return Hr.set(g,Gt(Hr.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,gn.set(g,Gt(gn.get(g)||null,r,s,a,c,d)),!0}return!1}function Nl(r){var s=Hi(r.target);if(s!==null){var a=kn(s);if(a!==null){if(s=a.tag,s===13){if(s=Mi(a),s!==null){r.blockedOn=s,Pl(r.priority,function(){Al(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Us(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);xi=c,a.target.dispatchEvent(c),xi=null}else return s=ga(a),s!==null&&Ms(s),r.blockedOn=a,!1;s.shift()}return!0}function zi(r,s,a){yr(r)&&a.delete(s)}function Dl(){ta=!1,Rt!==null&&yr(Rt)&&(Rt=null),Dn!==null&&yr(Dn)&&(Dn=null),On!==null&&yr(On)&&(On=null),Hr.forEach(zi),gn.forEach(zi)}function xn(r,s){r.blockedOn===s&&(r.blockedOn=null,ta||(ta=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dl)))}function Ln(r){function s(d){return xn(d,r)}if(0<Gn.length){xn(Gn[0],r);for(var a=1;a<Gn.length;a++){var c=Gn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Rt!==null&&xn(Rt,r),Dn!==null&&xn(Dn,r),On!==null&&xn(On,r),Hr.forEach(s),gn.forEach(s),a=0;a<Qn.length;a++)c=Qn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Qn.length&&(a=Qn[0],a.blockedOn===null);)Nl(a),a.blockedOn===null&&Qn.shift()}var _r=ae.ReactCurrentBatchConfig,Kr=!0;function Ge(r,s,a,c){var d=ke,g=_r.transition;_r.transition=null;try{ke=1,na(r,s,a,c)}finally{ke=d,_r.transition=g}}function Wc(r,s,a,c){var d=ke,g=_r.transition;_r.transition=null;try{ke=4,na(r,s,a,c)}finally{ke=d,_r.transition=g}}function na(r,s,a,c){if(Kr){var d=Us(r,s,a,c);if(d===null)th(r,s,c,$i,a),kl(r,c);else if($c(d,r,s,a,c))c.stopPropagation();else if(kl(r,c),s&4&&-1<zc.indexOf(r)){for(;d!==null;){var g=ga(d);if(g!==null&&Rl(g),g=Us(r,s,a,c),g===null&&th(r,s,c,$i,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else th(r,s,c,null,a)}}var $i=null;function Us(r,s,a,c){if($i=null,r=Cs(c),r=Hi(r),r!==null)if(s=kn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Mi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return $i=r,null}function ra(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wl()){case Ui:return 1;case jr:return 4;case mn:case Zo:return 16;case El:return 536870912;default:return 16}default:return 16}}var an=null,Fs=null,Qt=null;function ia(){if(Qt)return Qt;var r,s=Fs,a=s.length,c,d="value"in an?an.value:an.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[g-c];c++);return Qt=d.slice(r,1<c?1-c:void 0)}function js(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Yn(){return!0}function sa(){return!1}function At(r){function s(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var I in r)r.hasOwnProperty(I)&&(a=r[I],this[I]=a?a(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Yn:sa,this.isPropagationStopped=sa,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),s}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bs=At(Vn),Xn=ne({},Vn,{view:0,detail:0}),qc=At(Xn),zs,vr,Gr,Wi=ne({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Gr&&(Gr&&r.type==="mousemove"?(zs=r.screenX-Gr.screenX,vr=r.screenY-Gr.screenY):vr=zs=0,Gr=r),zs)},movementY:function(r){return"movementY"in r?r.movementY:vr}}),$s=At(Wi),oa=ne({},Wi,{dataTransfer:0}),Ol=At(oa),Ws=ne({},Xn,{relatedTarget:0}),qs=At(Ws),xl=ne({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),wr=At(xl),Ll=ne({},Vn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Vl=At(Ll),bl=ne({},Vn,{data:0}),aa=At(bl),Hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ml={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ul(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Ml[r])?!!s[r]:!1}function Jn(){return Ul}var u=ne({},Xn,{key:function(r){if(r.key){var s=Hs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=js(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(r){return r.type==="keypress"?js(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?js(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),y=ne({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=At(y),V=ne({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn}),B=At(V),X=ne({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=At(X),pt=ne({},Wi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(pt),wt=[9,13,27,32],lt=f&&"CompositionEvent"in window,yn=null;f&&"documentMode"in document&&(yn=document.documentMode);var ln=f&&"TextEvent"in window&&!yn,qi=f&&(!lt||yn&&8<yn&&11>=yn),Ks=" ",ap=!1;function lp(r,s){switch(r){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Gs=!1;function vE(r,s){switch(r){case"compositionend":return up(s);case"keypress":return s.which!==32?null:(ap=!0,Ks);case"textInput":return r=s.data,r===Ks&&ap?null:r;default:return null}}function wE(r,s){if(Gs)return r==="compositionend"||!lt&&lp(r,s)?(r=ia(),Qt=Fs=an=null,Gs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return qi&&s.locale!=="ko"?null:s.data;default:return null}}var EE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!EE[r.type]:s==="textarea"}function hp(r,s,a,c){Kn(c),s=$l(s,"onChange"),0<s.length&&(a=new Bs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var la=null,ua=null;function TE(r){kp(r,0)}function Fl(r){var s=Zs(r);if(Ts(s))return r}function IE(r,s){if(r==="change")return s}var dp=!1;if(f){var Hc;if(f){var Kc="oninput"in document;if(!Kc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Kc=typeof fp.oninput=="function"}Hc=Kc}else Hc=!1;dp=Hc&&(!document.documentMode||9<document.documentMode)}function pp(){la&&(la.detachEvent("onpropertychange",mp),ua=la=null)}function mp(r){if(r.propertyName==="value"&&Fl(ua)){var s=[];hp(s,ua,r,Cs(r)),Qo(TE,s)}}function SE(r,s,a){r==="focusin"?(pp(),la=s,ua=a,la.attachEvent("onpropertychange",mp)):r==="focusout"&&pp()}function RE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Fl(ua)}function AE(r,s){if(r==="click")return Fl(s)}function CE(r,s){if(r==="input"||r==="change")return Fl(s)}function PE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var bn=typeof Object.is=="function"?Object.is:PE;function ca(r,s){if(bn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(s,d)||!bn(r[d],s[d]))return!1}return!0}function gp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function yp(r,s){var a=gp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gp(a)}}function _p(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?_p(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function vp(){for(var r=window,s=Ur();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Ur(r.document)}return s}function Gc(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function kE(r){var s=vp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&_p(a.ownerDocument.documentElement,a)){if(c!==null&&Gc(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=yp(a,g);var v=yp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var NE=f&&"documentMode"in document&&11>=document.documentMode,Qs=null,Qc=null,ha=null,Yc=!1;function wp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||Qs==null||Qs!==Ur(c)||(c=Qs,"selectionStart"in c&&Gc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ha&&ca(ha,c)||(ha=c,c=$l(Qc,"onSelect"),0<c.length&&(s=new Bs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Qs)))}function jl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Ys={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Xc={},Ep={};f&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Bl(r){if(Xc[r])return Xc[r];if(!Ys[r])return r;var s=Ys[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Ep)return Xc[r]=s[a];return r}var Tp=Bl("animationend"),Ip=Bl("animationiteration"),Sp=Bl("animationstart"),Rp=Bl("transitionend"),Ap=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(r,s){Ap.set(r,s),l(s,[r])}for(var Jc=0;Jc<Cp.length;Jc++){var Zc=Cp[Jc],DE=Zc.toLowerCase(),OE=Zc[0].toUpperCase()+Zc.slice(1);Qr(DE,"on"+OE)}Qr(Tp,"onAnimationEnd"),Qr(Ip,"onAnimationIteration"),Qr(Sp,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(Rp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xE=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Pp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,yl(c,s,void 0,r),r.currentTarget=null}function kp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var I=c[v],C=I.instance,j=I.currentTarget;if(I=I.listener,C!==g&&d.isPropagationStopped())break e;Pp(d,I,j),g=C}else for(v=0;v<c.length;v++){if(I=c[v],C=I.instance,j=I.currentTarget,I=I.listener,C!==g&&d.isPropagationStopped())break e;Pp(d,I,j),g=C}}}if(Pn)throw r=Yo,Pn=!1,Yo=null,r}function He(r,s){var a=s[ah];a===void 0&&(a=s[ah]=new Set);var c=r+"__bubble";a.has(c)||(Np(s,r,2,!1),a.add(c))}function eh(r,s,a){var c=0;s&&(c|=4),Np(a,r,c,s)}var zl="_reactListening"+Math.random().toString(36).slice(2);function fa(r){if(!r[zl]){r[zl]=!0,i.forEach(function(a){a!=="selectionchange"&&(xE.has(a)||eh(a,!1,r),eh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[zl]||(s[zl]=!0,eh("selectionchange",!1,s))}}function Np(r,s,a,c){switch(ra(s)){case 1:var d=Ge;break;case 4:d=Wc;break;default:d=na}a=d.bind(null,s,a,r),d=void 0,!Ns||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function th(r,s,a,c,d){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;I!==null;){if(v=Hi(I),v===null)return;if(C=v.tag,C===5||C===6){c=g=v;continue e}I=I.parentNode}}c=c.return}Qo(function(){var j=g,H=Cs(a),Q=[];e:{var q=Ap.get(r);if(q!==void 0){var te=Bs,oe=r;switch(r){case"keypress":if(js(a)===0)break e;case"keydown":case"keyup":te=m;break;case"focusin":oe="focus",te=qs;break;case"focusout":oe="blur",te=qs;break;case"beforeblur":case"afterblur":te=qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=B;break;case Tp:case Ip:case Sp:te=wr;break;case Rp:te=Fe;break;case"scroll":te=qc;break;case"wheel":te=Oe;break;case"copy":case"cut":case"paste":te=Vl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var le=(s&4)!==0,st=!le&&r==="scroll",b=le?q!==null?q+"Capture":null:q;le=[];for(var N=j,U;N!==null;){U=N;var Y=U.stateNode;if(U.tag===5&&Y!==null&&(U=Y,b!==null&&(Y=it(N,b),Y!=null&&le.push(pa(N,Y,U)))),st)break;N=N.return}0<le.length&&(q=new te(q,oe,null,a,H),Q.push({event:q,listeners:le}))}}if((s&7)===0){e:{if(q=r==="mouseover"||r==="pointerover",te=r==="mouseout"||r==="pointerout",q&&a!==xi&&(oe=a.relatedTarget||a.fromElement)&&(Hi(oe)||oe[Er]))break e;if((te||q)&&(q=H.window===H?H:(q=H.ownerDocument)?q.defaultView||q.parentWindow:window,te?(oe=a.relatedTarget||a.toElement,te=j,oe=oe?Hi(oe):null,oe!==null&&(st=kn(oe),oe!==st||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(te=null,oe=j),te!==oe)){if(le=$s,Y="onMouseLeave",b="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(le=E,Y="onPointerLeave",b="onPointerEnter",N="pointer"),st=te==null?q:Zs(te),U=oe==null?q:Zs(oe),q=new le(Y,N+"leave",te,a,H),q.target=st,q.relatedTarget=U,Y=null,Hi(H)===j&&(le=new le(b,N+"enter",oe,a,H),le.target=U,le.relatedTarget=st,Y=le),st=Y,te&&oe)t:{for(le=te,b=oe,N=0,U=le;U;U=Xs(U))N++;for(U=0,Y=b;Y;Y=Xs(Y))U++;for(;0<N-U;)le=Xs(le),N--;for(;0<U-N;)b=Xs(b),U--;for(;N--;){if(le===b||b!==null&&le===b.alternate)break t;le=Xs(le),b=Xs(b)}le=null}else le=null;te!==null&&Dp(Q,q,te,le,!1),oe!==null&&st!==null&&Dp(Q,st,oe,le,!0)}}e:{if(q=j?Zs(j):window,te=q.nodeName&&q.nodeName.toLowerCase(),te==="select"||te==="input"&&q.type==="file")var ce=IE;else if(cp(q))if(dp)ce=CE;else{ce=RE;var pe=SE}else(te=q.nodeName)&&te.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ce=AE);if(ce&&(ce=ce(r,j))){hp(Q,ce,a,H);break e}pe&&pe(r,q,j),r==="focusout"&&(pe=q._wrapperState)&&pe.controlled&&q.type==="number"&&Ss(q,"number",q.value)}switch(pe=j?Zs(j):window,r){case"focusin":(cp(pe)||pe.contentEditable==="true")&&(Qs=pe,Qc=j,ha=null);break;case"focusout":ha=Qc=Qs=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,wp(Q,a,H);break;case"selectionchange":if(NE)break;case"keydown":case"keyup":wp(Q,a,H)}var me;if(lt)e:{switch(r){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Gs?lp(r,a)&&(ve="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(qi&&a.locale!=="ko"&&(Gs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Gs&&(me=ia()):(an=H,Fs="value"in an?an.value:an.textContent,Gs=!0)),pe=$l(j,ve),0<pe.length&&(ve=new aa(ve,r,null,a,H),Q.push({event:ve,listeners:pe}),me?ve.data=me:(me=up(a),me!==null&&(ve.data=me)))),(me=ln?vE(r,a):wE(r,a))&&(j=$l(j,"onBeforeInput"),0<j.length&&(H=new aa("onBeforeInput","beforeinput",null,a,H),Q.push({event:H,listeners:j}),H.data=me))}kp(Q,s)})}function pa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function $l(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=it(r,a),g!=null&&c.unshift(pa(r,g,d)),g=it(r,s),g!=null&&c.push(pa(r,g,d))),r=r.return}return c}function Xs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Dp(r,s,a,c,d){for(var g=s._reactName,v=[];a!==null&&a!==c;){var I=a,C=I.alternate,j=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&j!==null&&(I=j,d?(C=it(a,g),C!=null&&v.unshift(pa(a,C,I))):d||(C=it(a,g),C!=null&&v.push(pa(a,C,I)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var LE=/\r\n?/g,VE=/\u0000|\uFFFD/g;function Op(r){return(typeof r=="string"?r:""+r).replace(LE,`
`).replace(VE,"")}function Wl(r,s,a){if(s=Op(s),Op(r)!==s&&a)throw Error(t(425))}function ql(){}var nh=null,rh=null;function ih(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var sh=typeof setTimeout=="function"?setTimeout:void 0,bE=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,ME=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(r){return xp.resolve(null).then(r).catch(UE)}:sh;function UE(r){setTimeout(function(){throw r})}function oh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Ln(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ln(s)}function Yr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Lp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Js,ma="__reactProps$"+Js,Er="__reactContainer$"+Js,ah="__reactEvents$"+Js,FE="__reactListeners$"+Js,jE="__reactHandles$"+Js;function Hi(r){var s=r[Zn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Er]||a[Zn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Lp(r);r!==null;){if(a=r[Zn])return a;r=Lp(r)}return s}r=a,a=r.parentNode}return null}function ga(r){return r=r[Zn]||r[Er],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Zs(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Hl(r){return r[ma]||null}var lh=[],eo=-1;function Xr(r){return{current:r}}function Ke(r){0>eo||(r.current=lh[eo],lh[eo]=null,eo--)}function qe(r,s){eo++,lh[eo]=r.current,r.current=s}var Jr={},Vt=Xr(Jr),Yt=Xr(!1),Ki=Jr;function to(r,s){var a=r.type.contextTypes;if(!a)return Jr;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(r){return r=r.childContextTypes,r!=null}function Kl(){Ke(Yt),Ke(Vt)}function Vp(r,s,a){if(Vt.current!==Jr)throw Error(t(168));qe(Vt,s),qe(Yt,a)}function bp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return ne({},a,c)}function Gl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Jr,Ki=Vt.current,qe(Vt,r),qe(Yt,Yt.current),!0}function Mp(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=bp(r,s,Ki),c.__reactInternalMemoizedMergedChildContext=r,Ke(Yt),Ke(Vt),qe(Vt,r)):Ke(Yt),qe(Yt,a)}var Tr=null,Ql=!1,uh=!1;function Up(r){Tr===null?Tr=[r]:Tr.push(r)}function BE(r){Ql=!0,Up(r)}function Zr(){if(!uh&&Tr!==null){uh=!0;var r=0,s=ke;try{var a=Tr;for(ke=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Tr=null,Ql=!1}catch(d){throw Tr!==null&&(Tr=Tr.slice(r+1)),Ls(Ui,Zr),d}finally{ke=s,uh=!1}}return null}var no=[],ro=0,Yl=null,Xl=0,_n=[],vn=0,Gi=null,Ir=1,Sr="";function Qi(r,s){no[ro++]=Xl,no[ro++]=Yl,Yl=r,Xl=s}function Fp(r,s,a){_n[vn++]=Ir,_n[vn++]=Sr,_n[vn++]=Gi,Gi=r;var c=Ir;r=Sr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var g=32-$t(s)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Ir=1<<32-$t(s)+d|a<<d|c,Sr=g+r}else Ir=1<<g|a<<d|c,Sr=r}function ch(r){r.return!==null&&(Qi(r,1),Fp(r,1,0))}function hh(r){for(;r===Yl;)Yl=no[--ro],no[ro]=null,Xl=no[--ro],no[ro]=null;for(;r===Gi;)Gi=_n[--vn],_n[vn]=null,Sr=_n[--vn],_n[vn]=null,Ir=_n[--vn],_n[vn]=null}var un=null,cn=null,Qe=!1,Mn=null;function jp(r,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Bp(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,un=r,cn=Yr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,un=r,cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Gi!==null?{id:Ir,overflow:Sr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,un=r,cn=null,!0):!1;default:return!1}}function dh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function fh(r){if(Qe){var s=cn;if(s){var a=s;if(!Bp(r,s)){if(dh(r))throw Error(t(418));s=Yr(a.nextSibling);var c=un;s&&Bp(r,s)?jp(c,a):(r.flags=r.flags&-4097|2,Qe=!1,un=r)}}else{if(dh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Qe=!1,un=r}}}function zp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;un=r}function Jl(r){if(r!==un)return!1;if(!Qe)return zp(r),Qe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!ih(r.type,r.memoizedProps)),s&&(s=cn)){if(dh(r))throw $p(),Error(t(418));for(;s;)jp(r,s),s=Yr(s.nextSibling)}if(zp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){cn=Yr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}cn=null}}else cn=un?Yr(r.stateNode.nextSibling):null;return!0}function $p(){for(var r=cn;r;)r=Yr(r.nextSibling)}function io(){cn=un=null,Qe=!1}function ph(r){Mn===null?Mn=[r]:Mn.push(r)}var zE=ae.ReactCurrentBatchConfig;function ya(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var I=d.refs;v===null?delete I[g]:I[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Zl(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Wp(r){var s=r._init;return s(r._payload)}function qp(r){function s(b,N){if(r){var U=b.deletions;U===null?(b.deletions=[N],b.flags|=16):U.push(N)}}function a(b,N){if(!r)return null;for(;N!==null;)s(b,N),N=N.sibling;return null}function c(b,N){for(b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(b,N){return b=ai(b,N),b.index=0,b.sibling=null,b}function g(b,N,U){return b.index=U,r?(U=b.alternate,U!==null?(U=U.index,U<N?(b.flags|=2,N):U):(b.flags|=2,N)):(b.flags|=1048576,N)}function v(b){return r&&b.alternate===null&&(b.flags|=2),b}function I(b,N,U,Y){return N===null||N.tag!==6?(N=sd(U,b.mode,Y),N.return=b,N):(N=d(N,U),N.return=b,N)}function C(b,N,U,Y){var ce=U.type;return ce===D?H(b,N,U.props.children,Y,U.key):N!==null&&(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Lt&&Wp(ce)===N.type)?(Y=d(N,U.props),Y.ref=ya(b,N,U),Y.return=b,Y):(Y=Iu(U.type,U.key,U.props,null,b.mode,Y),Y.ref=ya(b,N,U),Y.return=b,Y)}function j(b,N,U,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=od(U,b.mode,Y),N.return=b,N):(N=d(N,U.children||[]),N.return=b,N)}function H(b,N,U,Y,ce){return N===null||N.tag!==7?(N=rs(U,b.mode,Y,ce),N.return=b,N):(N=d(N,U),N.return=b,N)}function Q(b,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return N=sd(""+N,b.mode,U),N.return=b,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ce:return U=Iu(N.type,N.key,N.props,null,b.mode,U),U.ref=ya(b,null,N),U.return=b,U;case Ie:return N=od(N,b.mode,U),N.return=b,N;case Lt:var Y=N._init;return Q(b,Y(N._payload),U)}if(dr(N)||fe(N))return N=rs(N,b.mode,U,null),N.return=b,N;Zl(b,N)}return null}function q(b,N,U,Y){var ce=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ce!==null?null:I(b,N,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ce:return U.key===ce?C(b,N,U,Y):null;case Ie:return U.key===ce?j(b,N,U,Y):null;case Lt:return ce=U._init,q(b,N,ce(U._payload),Y)}if(dr(U)||fe(U))return ce!==null?null:H(b,N,U,Y,null);Zl(b,U)}return null}function te(b,N,U,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return b=b.get(U)||null,I(N,b,""+Y,ce);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Ce:return b=b.get(Y.key===null?U:Y.key)||null,C(N,b,Y,ce);case Ie:return b=b.get(Y.key===null?U:Y.key)||null,j(N,b,Y,ce);case Lt:var pe=Y._init;return te(b,N,U,pe(Y._payload),ce)}if(dr(Y)||fe(Y))return b=b.get(U)||null,H(N,b,Y,ce,null);Zl(N,Y)}return null}function oe(b,N,U,Y){for(var ce=null,pe=null,me=N,ve=N=0,It=null;me!==null&&ve<U.length;ve++){me.index>ve?(It=me,me=null):It=me.sibling;var Ve=q(b,me,U[ve],Y);if(Ve===null){me===null&&(me=It);break}r&&me&&Ve.alternate===null&&s(b,me),N=g(Ve,N,ve),pe===null?ce=Ve:pe.sibling=Ve,pe=Ve,me=It}if(ve===U.length)return a(b,me),Qe&&Qi(b,ve),ce;if(me===null){for(;ve<U.length;ve++)me=Q(b,U[ve],Y),me!==null&&(N=g(me,N,ve),pe===null?ce=me:pe.sibling=me,pe=me);return Qe&&Qi(b,ve),ce}for(me=c(b,me);ve<U.length;ve++)It=te(me,b,ve,U[ve],Y),It!==null&&(r&&It.alternate!==null&&me.delete(It.key===null?ve:It.key),N=g(It,N,ve),pe===null?ce=It:pe.sibling=It,pe=It);return r&&me.forEach(function(li){return s(b,li)}),Qe&&Qi(b,ve),ce}function le(b,N,U,Y){var ce=fe(U);if(typeof ce!="function")throw Error(t(150));if(U=ce.call(U),U==null)throw Error(t(151));for(var pe=ce=null,me=N,ve=N=0,It=null,Ve=U.next();me!==null&&!Ve.done;ve++,Ve=U.next()){me.index>ve?(It=me,me=null):It=me.sibling;var li=q(b,me,Ve.value,Y);if(li===null){me===null&&(me=It);break}r&&me&&li.alternate===null&&s(b,me),N=g(li,N,ve),pe===null?ce=li:pe.sibling=li,pe=li,me=It}if(Ve.done)return a(b,me),Qe&&Qi(b,ve),ce;if(me===null){for(;!Ve.done;ve++,Ve=U.next())Ve=Q(b,Ve.value,Y),Ve!==null&&(N=g(Ve,N,ve),pe===null?ce=Ve:pe.sibling=Ve,pe=Ve);return Qe&&Qi(b,ve),ce}for(me=c(b,me);!Ve.done;ve++,Ve=U.next())Ve=te(me,b,ve,Ve.value,Y),Ve!==null&&(r&&Ve.alternate!==null&&me.delete(Ve.key===null?ve:Ve.key),N=g(Ve,N,ve),pe===null?ce=Ve:pe.sibling=Ve,pe=Ve);return r&&me.forEach(function(ET){return s(b,ET)}),Qe&&Qi(b,ve),ce}function st(b,N,U,Y){if(typeof U=="object"&&U!==null&&U.type===D&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ce:e:{for(var ce=U.key,pe=N;pe!==null;){if(pe.key===ce){if(ce=U.type,ce===D){if(pe.tag===7){a(b,pe.sibling),N=d(pe,U.props.children),N.return=b,b=N;break e}}else if(pe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Lt&&Wp(ce)===pe.type){a(b,pe.sibling),N=d(pe,U.props),N.ref=ya(b,pe,U),N.return=b,b=N;break e}a(b,pe);break}else s(b,pe);pe=pe.sibling}U.type===D?(N=rs(U.props.children,b.mode,Y,U.key),N.return=b,b=N):(Y=Iu(U.type,U.key,U.props,null,b.mode,Y),Y.ref=ya(b,N,U),Y.return=b,b=Y)}return v(b);case Ie:e:{for(pe=U.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(b,N.sibling),N=d(N,U.children||[]),N.return=b,b=N;break e}else{a(b,N);break}else s(b,N);N=N.sibling}N=od(U,b.mode,Y),N.return=b,b=N}return v(b);case Lt:return pe=U._init,st(b,N,pe(U._payload),Y)}if(dr(U))return oe(b,N,U,Y);if(fe(U))return le(b,N,U,Y);Zl(b,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,N!==null&&N.tag===6?(a(b,N.sibling),N=d(N,U),N.return=b,b=N):(a(b,N),N=sd(U,b.mode,Y),N.return=b,b=N),v(b)):a(b,N)}return st}var so=qp(!0),Hp=qp(!1),eu=Xr(null),tu=null,oo=null,mh=null;function gh(){mh=oo=tu=null}function yh(r){var s=eu.current;Ke(eu),r._currentValue=s}function _h(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function ao(r,s){tu=r,mh=oo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Jt=!0),r.firstContext=null)}function wn(r){var s=r._currentValue;if(mh!==r)if(r={context:r,memoizedValue:s,next:null},oo===null){if(tu===null)throw Error(t(308));oo=r,tu.dependencies={lanes:0,firstContext:r}}else oo=oo.next=r;return s}var Yi=null;function vh(r){Yi===null?Yi=[r]:Yi.push(r)}function Kp(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,vh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Rr(r,c)}function Rr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ei=!1;function wh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ar(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ti(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Rr(r,a)}return d=c.interleaved,d===null?(s.next=s,vh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Rr(r,a)}function nu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Wr(r,a)}}function Qp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function ru(r,s,a,c){var d=r.updateQueue;ei=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,j=C.next;C.next=null,v===null?g=j:v.next=j,v=C;var H=r.alternate;H!==null&&(H=H.updateQueue,I=H.lastBaseUpdate,I!==v&&(I===null?H.firstBaseUpdate=j:I.next=j,H.lastBaseUpdate=C))}if(g!==null){var Q=d.baseState;v=0,H=j=C=null,I=g;do{var q=I.lane,te=I.eventTime;if((c&q)===q){H!==null&&(H=H.next={eventTime:te,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var oe=r,le=I;switch(q=s,te=a,le.tag){case 1:if(oe=le.payload,typeof oe=="function"){Q=oe.call(te,Q,q);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=le.payload,q=typeof oe=="function"?oe.call(te,Q,q):oe,q==null)break e;Q=ne({},Q,q);break e;case 2:ei=!0}}I.callback!==null&&I.lane!==0&&(r.flags|=64,q=d.effects,q===null?d.effects=[I]:q.push(I))}else te={eventTime:te,lane:q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},H===null?(j=H=te,C=Q):H=H.next=te,v|=q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;q=I,I=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(H===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=j,d.lastBaseUpdate=H,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);Zi|=v,r.lanes=v,r.memoizedState=Q}}function Yp(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var _a={},er=Xr(_a),va=Xr(_a),wa=Xr(_a);function Xi(r){if(r===_a)throw Error(t(174));return r}function Eh(r,s){switch(qe(wa,s),qe(va,r),qe(er,_a),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ft(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ft(s,r)}Ke(er),qe(er,s)}function lo(){Ke(er),Ke(va),Ke(wa)}function Xp(r){Xi(wa.current);var s=Xi(er.current),a=ft(s,r.type);s!==a&&(qe(va,r),qe(er,a))}function Th(r){va.current===r&&(Ke(er),Ke(va))}var Xe=Xr(0);function iu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ih=[];function Sh(){for(var r=0;r<Ih.length;r++)Ih[r]._workInProgressVersionPrimary=null;Ih.length=0}var su=ae.ReactCurrentDispatcher,Rh=ae.ReactCurrentBatchConfig,Ji=0,Je=null,mt=null,Et=null,ou=!1,Ea=!1,Ta=0,$E=0;function bt(){throw Error(t(321))}function Ah(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!bn(r[a],s[a]))return!1;return!0}function Ch(r,s,a,c,d,g){if(Ji=g,Je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,su.current=r===null||r.memoizedState===null?KE:GE,r=a(c,d),Ea){g=0;do{if(Ea=!1,Ta=0,25<=g)throw Error(t(301));g+=1,Et=mt=null,s.updateQueue=null,su.current=QE,r=a(c,d)}while(Ea)}if(su.current=uu,s=mt!==null&&mt.next!==null,Ji=0,Et=mt=Je=null,ou=!1,s)throw Error(t(300));return r}function Ph(){var r=Ta!==0;return Ta=0,r}function tr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Je.memoizedState=Et=r:Et=Et.next=r,Et}function En(){if(mt===null){var r=Je.alternate;r=r!==null?r.memoizedState:null}else r=mt.next;var s=Et===null?Je.memoizedState:Et.next;if(s!==null)Et=s,mt=r;else{if(r===null)throw Error(t(310));mt=r,r={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?Je.memoizedState=Et=r:Et=Et.next=r}return Et}function Ia(r,s){return typeof s=="function"?s(r):s}function kh(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=mt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var I=v=null,C=null,j=g;do{var H=j.lane;if((Ji&H)===H)C!==null&&(C=C.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:r(c,j.action);else{var Q={lane:H,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};C===null?(I=C=Q,v=c):C=C.next=Q,Je.lanes|=H,Zi|=H}j=j.next}while(j!==null&&j!==g);C===null?v=c:C.next=I,bn(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=C,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,Je.lanes|=g,Zi|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Nh(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);bn(g,s.memoizedState)||(Jt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function Jp(){}function Zp(r,s){var a=Je,c=En(),d=s(),g=!bn(c.memoizedState,d);if(g&&(c.memoizedState=d,Jt=!0),c=c.queue,Dh(nm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Sa(9,tm.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));(Ji&30)!==0||em(a,s,d)}return d}function em(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function tm(r,s,a,c){s.value=a,s.getSnapshot=c,rm(s)&&im(r)}function nm(r,s,a){return a(function(){rm(s)&&im(r)})}function rm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!bn(r,a)}catch{return!0}}function im(r){var s=Rr(r,1);s!==null&&Bn(s,r,1,-1)}function sm(r){var s=tr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:r},s.queue=r,r=r.dispatch=HE.bind(null,Je,r),[s.memoizedState,r]}function Sa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function om(){return En().memoizedState}function au(r,s,a,c){var d=tr();Je.flags|=r,d.memoizedState=Sa(1|s,a,void 0,c===void 0?null:c)}function lu(r,s,a,c){var d=En();c=c===void 0?null:c;var g=void 0;if(mt!==null){var v=mt.memoizedState;if(g=v.destroy,c!==null&&Ah(c,v.deps)){d.memoizedState=Sa(s,a,g,c);return}}Je.flags|=r,d.memoizedState=Sa(1|s,a,g,c)}function am(r,s){return au(8390656,8,r,s)}function Dh(r,s){return lu(2048,8,r,s)}function lm(r,s){return lu(4,2,r,s)}function um(r,s){return lu(4,4,r,s)}function cm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function hm(r,s,a){return a=a!=null?a.concat([r]):null,lu(4,4,cm.bind(null,s,r),a)}function Oh(){}function dm(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Ah(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function fm(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Ah(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function pm(r,s,a){return(Ji&21)===0?(r.baseState&&(r.baseState=!1,Jt=!0),r.memoizedState=a):(bn(a,s)||(a=Bi(),Je.lanes|=a,Zi|=a,r.baseState=!0),s)}function WE(r,s){var a=ke;ke=a!==0&&4>a?a:4,r(!0);var c=Rh.transition;Rh.transition={};try{r(!1),s()}finally{ke=a,Rh.transition=c}}function mm(){return En().memoizedState}function qE(r,s,a){var c=si(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},gm(r))ym(s,a);else if(a=Kp(r,s,a,c),a!==null){var d=Ht();Bn(a,r,c,d),_m(a,s,c)}}function HE(r,s,a){var c=si(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(gm(r))ym(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,I=g(v,a);if(d.hasEagerState=!0,d.eagerState=I,bn(I,v)){var C=s.interleaved;C===null?(d.next=d,vh(s)):(d.next=C.next,C.next=d),s.interleaved=d;return}}catch{}finally{}a=Kp(r,s,d,c),a!==null&&(d=Ht(),Bn(a,r,c,d),_m(a,s,c))}}function gm(r){var s=r.alternate;return r===Je||s!==null&&s===Je}function ym(r,s){Ea=ou=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function _m(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Wr(r,a)}}var uu={readContext:wn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},KE={readContext:wn,useCallback:function(r,s){return tr().memoizedState=[r,s===void 0?null:s],r},useContext:wn,useEffect:am,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,au(4194308,4,cm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return au(4194308,4,r,s)},useInsertionEffect:function(r,s){return au(4,2,r,s)},useMemo:function(r,s){var a=tr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=tr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=qE.bind(null,Je,r),[c.memoizedState,r]},useRef:function(r){var s=tr();return r={current:r},s.memoizedState=r},useState:sm,useDebugValue:Oh,useDeferredValue:function(r){return tr().memoizedState=r},useTransition:function(){var r=sm(!1),s=r[0];return r=WE.bind(null,r[1]),tr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Je,d=tr();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(Ji&30)!==0||em(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,am(nm.bind(null,c,g,r),[r]),c.flags|=2048,Sa(9,tm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=tr(),s=Tt.identifierPrefix;if(Qe){var a=Sr,c=Ir;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ta++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=$E++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},GE={readContext:wn,useCallback:dm,useContext:wn,useEffect:Dh,useImperativeHandle:hm,useInsertionEffect:lm,useLayoutEffect:um,useMemo:fm,useReducer:kh,useRef:om,useState:function(){return kh(Ia)},useDebugValue:Oh,useDeferredValue:function(r){var s=En();return pm(s,mt.memoizedState,r)},useTransition:function(){var r=kh(Ia)[0],s=En().memoizedState;return[r,s]},useMutableSource:Jp,useSyncExternalStore:Zp,useId:mm,unstable_isNewReconciler:!1},QE={readContext:wn,useCallback:dm,useContext:wn,useEffect:Dh,useImperativeHandle:hm,useInsertionEffect:lm,useLayoutEffect:um,useMemo:fm,useReducer:Nh,useRef:om,useState:function(){return Nh(Ia)},useDebugValue:Oh,useDeferredValue:function(r){var s=En();return mt===null?s.memoizedState=r:pm(s,mt.memoizedState,r)},useTransition:function(){var r=Nh(Ia)[0],s=En().memoizedState;return[r,s]},useMutableSource:Jp,useSyncExternalStore:Zp,useId:mm,unstable_isNewReconciler:!1};function Un(r,s){if(r&&r.defaultProps){s=ne({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function xh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:ne({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var cu={isMounted:function(r){return(r=r._reactInternals)?kn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Ht(),d=si(r),g=Ar(c,d);g.payload=s,a!=null&&(g.callback=a),s=ti(r,g,d),s!==null&&(Bn(s,r,d,c),nu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Ht(),d=si(r),g=Ar(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ti(r,g,d),s!==null&&(Bn(s,r,d,c),nu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Ht(),c=si(r),d=Ar(a,c);d.tag=2,s!=null&&(d.callback=s),s=ti(r,d,c),s!==null&&(Bn(s,r,c,a),nu(s,r,c))}};function vm(r,s,a,c,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!ca(a,c)||!ca(d,g):!0}function wm(r,s,a){var c=!1,d=Jr,g=s.contextType;return typeof g=="object"&&g!==null?g=wn(g):(d=Xt(s)?Ki:Vt.current,c=s.contextTypes,g=(c=c!=null)?to(r,d):Jr),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=cu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function Em(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&cu.enqueueReplaceState(s,s.state,null)}function Lh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},wh(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=wn(g):(g=Xt(s)?Ki:Vt.current,d.context=to(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(xh(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&cu.enqueueReplaceState(d,d.state,null),ru(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function uo(r,s){try{var a="",c=s;do a+=Re(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function Vh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function bh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var YE=typeof WeakMap=="function"?WeakMap:Map;function Tm(r,s,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){yu||(yu=!0,Xh=c),bh(r,s)},a}function Im(r,s,a){a=Ar(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){bh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){bh(r,s),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Sm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new YE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=cT.bind(null,r,s,a),s.then(r,r))}function Rm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Am(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ar(-1,1),s.tag=2,ti(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var XE=ae.ReactCurrentOwner,Jt=!1;function qt(r,s,a,c){s.child=r===null?Hp(s,null,a,c):so(s,r.child,a,c)}function Cm(r,s,a,c,d){a=a.render;var g=s.ref;return ao(s,d),c=Ch(r,s,a,c,g,d),a=Ph(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Cr(r,s,d)):(Qe&&a&&ch(s),s.flags|=1,qt(r,s,c,d),s.child)}function Pm(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!id(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,km(r,s,g,c,d)):(r=Iu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:ca,a(v,c)&&r.ref===s.ref)return Cr(r,s,d)}return s.flags|=1,r=ai(g,c),r.ref=s.ref,r.return=s,s.child=r}function km(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(ca(g,c)&&r.ref===s.ref)if(Jt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Jt=!0);else return s.lanes=r.lanes,Cr(r,s,d)}return Mh(r,s,a,c,d)}function Nm(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(ho,hn),hn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,qe(ho,hn),hn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,qe(ho,hn),hn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,qe(ho,hn),hn|=c;return qt(r,s,d,a),s.child}function Dm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Mh(r,s,a,c,d){var g=Xt(a)?Ki:Vt.current;return g=to(s,g),ao(s,d),a=Ch(r,s,a,c,g,d),c=Ph(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Cr(r,s,d)):(Qe&&c&&ch(s),s.flags|=1,qt(r,s,a,d),s.child)}function Om(r,s,a,c,d){if(Xt(a)){var g=!0;Gl(s)}else g=!1;if(ao(s,d),s.stateNode===null)du(r,s),wm(s,a,c),Lh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,I=s.memoizedProps;v.props=I;var C=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=wn(j):(j=Xt(a)?Ki:Vt.current,j=to(s,j));var H=a.getDerivedStateFromProps,Q=typeof H=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||C!==j)&&Em(s,v,c,j),ei=!1;var q=s.memoizedState;v.state=q,ru(s,c,v,d),C=s.memoizedState,I!==c||q!==C||Yt.current||ei?(typeof H=="function"&&(xh(s,a,H,c),C=s.memoizedState),(I=ei||vm(s,a,I,c,q,C,j))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=C),v.props=c,v.state=C,v.context=j,c=I):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Gp(r,s),I=s.memoizedProps,j=s.type===s.elementType?I:Un(s.type,I),v.props=j,Q=s.pendingProps,q=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=wn(C):(C=Xt(a)?Ki:Vt.current,C=to(s,C));var te=a.getDerivedStateFromProps;(H=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||q!==C)&&Em(s,v,c,C),ei=!1,q=s.memoizedState,v.state=q,ru(s,c,v,d);var oe=s.memoizedState;I!==Q||q!==oe||Yt.current||ei?(typeof te=="function"&&(xh(s,a,te,c),oe=s.memoizedState),(j=ei||vm(s,a,j,c,q,oe,C)||!1)?(H||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,C)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===r.memoizedProps&&q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===r.memoizedProps&&q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=oe),v.props=c,v.state=oe,v.context=C,c=j):(typeof v.componentDidUpdate!="function"||I===r.memoizedProps&&q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===r.memoizedProps&&q===r.memoizedState||(s.flags|=1024),c=!1)}return Uh(r,s,a,c,g,d)}function Uh(r,s,a,c,d,g){Dm(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Mp(s,a,!1),Cr(r,s,g);c=s.stateNode,XE.current=s;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=so(s,r.child,null,g),s.child=so(s,null,I,g)):qt(r,s,I,g),s.memoizedState=c.state,d&&Mp(s,a,!0),s.child}function xm(r){var s=r.stateNode;s.pendingContext?Vp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Vp(r,s.context,!1),Eh(r,s.containerInfo)}function Lm(r,s,a,c,d){return io(),ph(d),s.flags|=256,qt(r,s,a,c),s.child}var Fh={dehydrated:null,treeContext:null,retryLane:0};function jh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Vm(r,s,a){var c=s.pendingProps,d=Xe.current,g=!1,v=(s.flags&128)!==0,I;if((I=v)||(I=r!==null&&r.memoizedState===null?!1:(d&2)!==0),I?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),qe(Xe,d&1),r===null)return fh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=v):g=Su(v,c,0,null),r=rs(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=jh(a),s.memoizedState=Fh,r):Bh(s,v));if(d=r.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return JE(r,s,v,c,I,d,a);if(g){g=c.fallback,v=s.mode,d=r.child,I=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=C,s.deletions=null):(c=ai(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?g=ai(I,g):(g=rs(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?jh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Fh,c}return g=r.child,r=g.sibling,c=ai(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Bh(r,s){return s=Su({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function hu(r,s,a,c){return c!==null&&ph(c),so(s,r.child,null,a),r=Bh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function JE(r,s,a,c,d,g,v){if(a)return s.flags&256?(s.flags&=-257,c=Vh(Error(t(422))),hu(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=Su({mode:"visible",children:c.children},d,0,null),g=rs(g,d,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&so(s,r.child,null,v),s.child.memoizedState=jh(v),s.memoizedState=Fh,g);if((s.mode&1)===0)return hu(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=Vh(g,c,void 0),hu(r,s,v,c)}if(I=(v&r.childLanes)!==0,Jt||I){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Rr(r,d),Bn(c,r,d,-1))}return rd(),c=Vh(Error(t(421))),hu(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=hT.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,cn=Yr(d.nextSibling),un=s,Qe=!0,Mn=null,r!==null&&(_n[vn++]=Ir,_n[vn++]=Sr,_n[vn++]=Gi,Ir=r.id,Sr=r.overflow,Gi=s),s=Bh(s,c.children),s.flags|=4096,s)}function bm(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),_h(r.return,s,a)}function zh(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Mm(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(qt(r,s,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&bm(r,a,s);else if(r.tag===19)bm(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(qe(Xe,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&iu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),zh(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&iu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}zh(s,!0,a,null,g);break;case"together":zh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function du(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Cr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Zi|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=ai(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=ai(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function ZE(r,s,a){switch(s.tag){case 3:xm(s),io();break;case 5:Xp(s);break;case 1:Xt(s.type)&&Gl(s);break;case 4:Eh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;qe(eu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(qe(Xe,Xe.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Vm(r,s,a):(qe(Xe,Xe.current&1),r=Cr(r,s,a),r!==null?r.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return Mm(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Xe,Xe.current),c)break;return null;case 22:case 23:return s.lanes=0,Nm(r,s,a)}return Cr(r,s,a)}var Um,$h,Fm,jm;Um=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},$h=function(){},Fm=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,Xi(er.current);var g=null;switch(a){case"input":d=Ni(r,d),c=Ni(r,c),g=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),g=[];break;case"textarea":d=Fo(r,d),c=Fo(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=ql)}qo(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var I=d[j];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in c){var C=c[j];if(I=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&C!==I&&(C!=null||I!=null))if(j==="style")if(I){for(v in I)!I.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&I[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(g||(g=[]),g.push(j,a)),a=C;else j==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(g=g||[]).push(j,C)):j==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push(j,""+C):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(C!=null&&j==="onScroll"&&He("scroll",r),g||I===C||(g=[])):(g=g||[]).push(j,C))}a&&(g=g||[]).push("style",a);var j=g;(s.updateQueue=j)&&(s.flags|=4)}},jm=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ra(r,s){if(!Qe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function eT(r,s,a){var c=s.pendingProps;switch(hh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Xt(s.type)&&Kl(),Mt(s),null;case 3:return c=s.stateNode,lo(),Ke(Yt),Ke(Vt),Sh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(Jl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Mn!==null&&(ed(Mn),Mn=null))),$h(r,s),Mt(s),null;case 5:Th(s);var d=Xi(wa.current);if(a=s.type,r!==null&&s.stateNode!=null)Fm(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=Xi(er.current),Jl(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Zn]=s,c[ma]=g,r=(s.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<da.length;d++)He(da[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":Is(c,g),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},He("invalid",c);break;case"textarea":Rs(c,g),He("invalid",c)}qo(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var I=g[v];v==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&Wl(c.textContent,I,r),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&Wl(c.textContent,I,r),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&He("scroll",c)}switch(a){case"input":hr(c),gl(c,g,!0);break;case"textarea":hr(c),jo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ql)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[Zn]=s,r[ma]=c,Um(r,s,!1,!1),s.stateNode=r;e:{switch(v=Ho(a,c),a){case"dialog":He("cancel",r),He("close",r),d=c;break;case"iframe":case"object":case"embed":He("load",r),d=c;break;case"video":case"audio":for(d=0;d<da.length;d++)He(da[d],r);d=c;break;case"source":He("error",r),d=c;break;case"img":case"image":case"link":He("error",r),He("load",r),d=c;break;case"details":He("toggle",r),d=c;break;case"input":Is(r,c),d=Ni(r,c),He("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),He("invalid",r);break;case"textarea":Rs(r,c),d=Fo(r,c),He("invalid",r);break;default:d=c}qo(a,d),I=d;for(g in I)if(I.hasOwnProperty(g)){var C=I[g];g==="style"?$o(r,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Bo(r,C)):g==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Fr(r,C):typeof C=="number"&&Fr(r,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?C!=null&&g==="onScroll"&&He("scroll",r):C!=null&&ee(r,g,C,v))}switch(a){case"input":hr(r),gl(r,c,!1);break;case"textarea":hr(r),jo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?fr(r,!!c.multiple,g,!1):c.defaultValue!=null&&fr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ql)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)jm(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Xi(wa.current),Xi(er.current),Jl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Zn]=s,(g=c.nodeValue!==a)&&(r=un,r!==null))switch(r.tag){case 3:Wl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Wl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Zn]=s,s.stateNode=c}return Mt(s),null;case 13:if(Ke(Xe),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qe&&cn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)$p(),io(),s.flags|=98560,g=!1;else if(g=Jl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Zn]=s}else io(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),g=!1}else Mn!==null&&(ed(Mn),Mn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Xe.current&1)!==0?gt===0&&(gt=3):rd())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return lo(),$h(r,s),r===null&&fa(s.stateNode.containerInfo),Mt(s),null;case 10:return yh(s.type._context),Mt(s),null;case 17:return Xt(s.type)&&Kl(),Mt(s),null;case 19:if(Ke(Xe),g=s.memoizedState,g===null)return Mt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)Ra(g,!1);else{if(gt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=iu(r),v!==null){for(s.flags|=128,Ra(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),s.child}r=r.sibling}g.tail!==null&&We()>fo&&(s.flags|=128,c=!0,Ra(g,!1),s.lanes=4194304)}else{if(!c)if(r=iu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ra(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Qe)return Mt(s),null}else 2*We()-g.renderingStartTime>fo&&a!==1073741824&&(s.flags|=128,c=!0,Ra(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=We(),s.sibling=null,a=Xe.current,qe(Xe,c?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return nd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(hn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function tT(r,s){switch(hh(s),s.tag){case 1:return Xt(s.type)&&Kl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return lo(),Ke(Yt),Ke(Vt),Sh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Th(s),null;case 13:if(Ke(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));io()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Xe),null;case 4:return lo(),null;case 10:return yh(s.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var fu=!1,Ut=!1,nT=typeof WeakSet=="function"?WeakSet:Set,se=null;function co(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(r,s,c)}else a.current=null}function Wh(r,s,a){try{a()}catch(c){et(r,s,c)}}var Bm=!1;function rT(r,s){if(nh=Kr,r=vp(),Gc(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,I=-1,C=-1,j=0,H=0,Q=r,q=null;t:for(;;){for(var te;Q!==a||d!==0&&Q.nodeType!==3||(I=v+d),Q!==g||c!==0&&Q.nodeType!==3||(C=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(te=Q.firstChild)!==null;)q=Q,Q=te;for(;;){if(Q===r)break t;if(q===a&&++j===d&&(I=v),q===g&&++H===c&&(C=v),(te=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=te}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(rh={focusedElem:r,selectionRange:a},Kr=!1,se=s;se!==null;)if(s=se,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,se=r;else for(;se!==null;){s=se;try{var oe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var le=oe.memoizedProps,st=oe.memoizedState,b=s.stateNode,N=b.getSnapshotBeforeUpdate(s.elementType===s.type?le:Un(s.type,le),st);b.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){et(s,s.return,Y)}if(r=s.sibling,r!==null){r.return=s.return,se=r;break}se=s.return}return oe=Bm,Bm=!1,oe}function Aa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&Wh(s,a,g)}d=d.next}while(d!==c)}}function pu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function qh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function zm(r){var s=r.alternate;s!==null&&(r.alternate=null,zm(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Zn],delete s[ma],delete s[ah],delete s[FE],delete s[jE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function $m(r){return r.tag===5||r.tag===3||r.tag===4}function Wm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||$m(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Hh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ql));else if(c!==4&&(r=r.child,r!==null))for(Hh(r,s,a),r=r.sibling;r!==null;)Hh(r,s,a),r=r.sibling}function Kh(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Kh(r,s,a),r=r.sibling;r!==null;)Kh(r,s,a),r=r.sibling}var Ct=null,Fn=!1;function ni(r,s,a){for(a=a.child;a!==null;)qm(r,s,a),a=a.sibling}function qm(r,s,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Fi,a)}catch{}switch(a.tag){case 5:Ut||co(a,s);case 6:var c=Ct,d=Fn;Ct=null,ni(r,s,a),Ct=c,Fn=d,Ct!==null&&(Fn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Fn?(r=Ct,a=a.stateNode,r.nodeType===8?oh(r.parentNode,a):r.nodeType===1&&oh(r,a),Ln(r)):oh(Ct,a.stateNode));break;case 4:c=Ct,d=Fn,Ct=a.stateNode.containerInfo,Fn=!0,ni(r,s,a),Ct=c,Fn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&((g&2)!==0||(g&4)!==0)&&Wh(a,s,v),d=d.next}while(d!==c)}ni(r,s,a);break;case 1:if(!Ut&&(co(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){et(a,s,I)}ni(r,s,a);break;case 21:ni(r,s,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ni(r,s,a),Ut=c):ni(r,s,a);break;default:ni(r,s,a)}}function Hm(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new nT),s.forEach(function(c){var d=dT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function jn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,v=s,I=v;e:for(;I!==null;){switch(I.tag){case 5:Ct=I.stateNode,Fn=!1;break e;case 3:Ct=I.stateNode.containerInfo,Fn=!0;break e;case 4:Ct=I.stateNode.containerInfo,Fn=!0;break e}I=I.return}if(Ct===null)throw Error(t(160));qm(g,v,d),Ct=null,Fn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(j){et(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Km(s,r),s=s.sibling}function Km(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(jn(s,r),nr(r),c&4){try{Aa(3,r,r.return),pu(3,r)}catch(le){et(r,r.return,le)}try{Aa(5,r,r.return)}catch(le){et(r,r.return,le)}}break;case 1:jn(s,r),nr(r),c&512&&a!==null&&co(a,a.return);break;case 5:if(jn(s,r),nr(r),c&512&&a!==null&&co(a,a.return),r.flags&32){var d=r.stateNode;try{Fr(d,"")}catch(le){et(r,r.return,le)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,I=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&Mo(d,g),Ho(I,v);var j=Ho(I,g);for(v=0;v<C.length;v+=2){var H=C[v],Q=C[v+1];H==="style"?$o(d,Q):H==="dangerouslySetInnerHTML"?Bo(d,Q):H==="children"?Fr(d,Q):ee(d,H,Q,j)}switch(I){case"input":Uo(d,g);break;case"textarea":As(d,g);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var te=g.value;te!=null?fr(d,!!g.multiple,te,!1):q!==!!g.multiple&&(g.defaultValue!=null?fr(d,!!g.multiple,g.defaultValue,!0):fr(d,!!g.multiple,g.multiple?[]:"",!1))}d[ma]=g}catch(le){et(r,r.return,le)}}break;case 6:if(jn(s,r),nr(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(le){et(r,r.return,le)}}break;case 3:if(jn(s,r),nr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(le){et(r,r.return,le)}break;case 4:jn(s,r),nr(r);break;case 13:jn(s,r),nr(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Yh=We())),c&4&&Hm(r);break;case 22:if(H=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(j=Ut)||H,jn(s,r),Ut=j):jn(s,r),nr(r),c&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!H&&(r.mode&1)!==0)for(se=r,H=r.child;H!==null;){for(Q=se=H;se!==null;){switch(q=se,te=q.child,q.tag){case 0:case 11:case 14:case 15:Aa(4,q,q.return);break;case 1:co(q,q.return);var oe=q.stateNode;if(typeof oe.componentWillUnmount=="function"){c=q,a=q.return;try{s=c,oe.props=s.memoizedProps,oe.state=s.memoizedState,oe.componentWillUnmount()}catch(le){et(c,a,le)}}break;case 5:co(q,q.return);break;case 22:if(q.memoizedState!==null){Ym(Q);continue}}te!==null?(te.return=q,se=te):Ym(Q)}H=H.sibling}e:for(H=null,Q=r;;){if(Q.tag===5){if(H===null){H=Q;try{d=Q.stateNode,j?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=Q.stateNode,C=Q.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=zo("display",v))}catch(le){et(r,r.return,le)}}}else if(Q.tag===6){if(H===null)try{Q.stateNode.nodeValue=j?"":Q.memoizedProps}catch(le){et(r,r.return,le)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===r)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===r)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===r)break e;H===Q&&(H=null),Q=Q.return}H===Q&&(H=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:jn(s,r),nr(r),c&4&&Hm(r);break;case 21:break;default:jn(s,r),nr(r)}}function nr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if($m(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Fr(d,""),c.flags&=-33);var g=Wm(r);Kh(r,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Wm(r);Hh(r,I,v);break;default:throw Error(t(161))}}catch(C){et(r,r.return,C)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function iT(r,s,a){se=r,Gm(r)}function Gm(r,s,a){for(var c=(r.mode&1)!==0;se!==null;){var d=se,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||fu;if(!v){var I=d.alternate,C=I!==null&&I.memoizedState!==null||Ut;I=fu;var j=Ut;if(fu=v,(Ut=C)&&!j)for(se=d;se!==null;)v=se,C=v.child,v.tag===22&&v.memoizedState!==null?Xm(d):C!==null?(C.return=v,se=C):Xm(d);for(;g!==null;)se=g,Gm(g),g=g.sibling;se=d,fu=I,Ut=j}Qm(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,se=g):Qm(r)}}function Qm(r){for(;se!==null;){var s=se;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||pu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Un(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Yp(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Yp(s,v,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var C=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var H=j.memoizedState;if(H!==null){var Q=H.dehydrated;Q!==null&&Ln(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&qh(s)}catch(q){et(s,s.return,q)}}if(s===r){se=null;break}if(a=s.sibling,a!==null){a.return=s.return,se=a;break}se=s.return}}function Ym(r){for(;se!==null;){var s=se;if(s===r){se=null;break}var a=s.sibling;if(a!==null){a.return=s.return,se=a;break}se=s.return}}function Xm(r){for(;se!==null;){var s=se;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{pu(4,s)}catch(C){et(s,a,C)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(C){et(s,d,C)}}var g=s.return;try{qh(s)}catch(C){et(s,g,C)}break;case 5:var v=s.return;try{qh(s)}catch(C){et(s,v,C)}}}catch(C){et(s,s.return,C)}if(s===r){se=null;break}var I=s.sibling;if(I!==null){I.return=s.return,se=I;break}se=s.return}}var sT=Math.ceil,mu=ae.ReactCurrentDispatcher,Gh=ae.ReactCurrentOwner,Tn=ae.ReactCurrentBatchConfig,Le=0,Tt=null,ut=null,Pt=0,hn=0,ho=Xr(0),gt=0,Ca=null,Zi=0,gu=0,Qh=0,Pa=null,Zt=null,Yh=0,fo=1/0,Pr=null,yu=!1,Xh=null,ri=null,_u=!1,ii=null,vu=0,ka=0,Jh=null,wu=-1,Eu=0;function Ht(){return(Le&6)!==0?We():wu!==-1?wu:wu=We()}function si(r){return(r.mode&1)===0?1:(Le&2)!==0&&Pt!==0?Pt&-Pt:zE.transition!==null?(Eu===0&&(Eu=Bi()),Eu):(r=ke,r!==0||(r=window.event,r=r===void 0?16:ra(r.type)),r)}function Bn(r,s,a,c){if(50<ka)throw ka=0,Jh=null,Error(t(185));$r(r,a,c),((Le&2)===0||r!==Tt)&&(r===Tt&&((Le&2)===0&&(gu|=a),gt===4&&oi(r,Pt)),en(r,c),a===1&&Le===0&&(s.mode&1)===0&&(fo=We()+500,Ql&&Zr()))}function en(r,s){var a=r.callbackNode;gr(r,s);var c=ji(r,r===Tt?Pt:0);if(c===0)a!==null&&Jo(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&Jo(a),s===1)r.tag===0?BE(Zm.bind(null,r)):Up(Zm.bind(null,r)),ME(function(){(Le&6)===0&&Zr()}),a=null;else{switch(qr(c)){case 1:a=Ui;break;case 4:a=jr;break;case 16:a=mn;break;case 536870912:a=El;break;default:a=mn}a=ag(a,Jm.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Jm(r,s){if(wu=-1,Eu=0,(Le&6)!==0)throw Error(t(327));var a=r.callbackNode;if(po()&&r.callbackNode!==a)return null;var c=ji(r,r===Tt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Tu(r,c);else{s=c;var d=Le;Le|=2;var g=tg();(Tt!==r||Pt!==s)&&(Pr=null,fo=We()+500,ts(r,s));do try{lT();break}catch(I){eg(r,I)}while(!0);gh(),mu.current=g,Le=d,ut!==null?s=0:(Tt=null,Pt=0,s=gt)}if(s!==0){if(s===2&&(d=on(r),d!==0&&(c=d,s=Zh(r,d))),s===1)throw a=Ca,ts(r,0),oi(r,c),en(r,We()),a;if(s===6)oi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!oT(d)&&(s=Tu(r,c),s===2&&(g=on(r),g!==0&&(c=g,s=Zh(r,g))),s===1))throw a=Ca,ts(r,0),oi(r,c),en(r,We()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ns(r,Zt,Pr);break;case 3:if(oi(r,c),(c&130023424)===c&&(s=Yh+500-We(),10<s)){if(ji(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Ht(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=sh(ns.bind(null,r,Zt,Pr),s);break}ns(r,Zt,Pr);break;case 4:if(oi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-$t(c);g=1<<v,v=s[v],v>d&&(d=v),c&=~g}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*sT(c/1960))-c,10<c){r.timeoutHandle=sh(ns.bind(null,r,Zt,Pr),c);break}ns(r,Zt,Pr);break;case 5:ns(r,Zt,Pr);break;default:throw Error(t(329))}}}return en(r,We()),r.callbackNode===a?Jm.bind(null,r):null}function Zh(r,s){var a=Pa;return r.current.memoizedState.isDehydrated&&(ts(r,s).flags|=256),r=Tu(r,s),r!==2&&(s=Zt,Zt=a,s!==null&&ed(s)),r}function ed(r){Zt===null?Zt=r:Zt.push.apply(Zt,r)}function oT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!bn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function oi(r,s){for(s&=~Qh,s&=~gu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-$t(s),c=1<<a;r[a]=-1,s&=~c}}function Zm(r){if((Le&6)!==0)throw Error(t(327));po();var s=ji(r,0);if((s&1)===0)return en(r,We()),null;var a=Tu(r,s);if(r.tag!==0&&a===2){var c=on(r);c!==0&&(s=c,a=Zh(r,c))}if(a===1)throw a=Ca,ts(r,0),oi(r,s),en(r,We()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ns(r,Zt,Pr),en(r,We()),null}function td(r,s){var a=Le;Le|=1;try{return r(s)}finally{Le=a,Le===0&&(fo=We()+500,Ql&&Zr())}}function es(r){ii!==null&&ii.tag===0&&(Le&6)===0&&po();var s=Le;Le|=1;var a=Tn.transition,c=ke;try{if(Tn.transition=null,ke=1,r)return r()}finally{ke=c,Tn.transition=a,Le=s,(Le&6)===0&&Zr()}}function nd(){hn=ho.current,Ke(ho)}function ts(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,bE(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(hh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Kl();break;case 3:lo(),Ke(Yt),Ke(Vt),Sh();break;case 5:Th(c);break;case 4:lo();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:yh(c.type._context);break;case 22:case 23:nd()}a=a.return}if(Tt=r,ut=r=ai(r.current,null),Pt=hn=s,gt=0,Ca=null,Qh=gu=Zi=0,Zt=Pa=null,Yi!==null){for(s=0;s<Yi.length;s++)if(a=Yi[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}Yi=null}return r}function eg(r,s){do{var a=ut;try{if(gh(),su.current=uu,ou){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ou=!1}if(Ji=0,Et=mt=Je=null,Ea=!1,Ta=0,Gh.current=null,a===null||a.return===null){gt=1,Ca=s,ut=null;break}e:{var g=r,v=a.return,I=a,C=s;if(s=Pt,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var j=C,H=I,Q=H.tag;if((H.mode&1)===0&&(Q===0||Q===11||Q===15)){var q=H.alternate;q?(H.updateQueue=q.updateQueue,H.memoizedState=q.memoizedState,H.lanes=q.lanes):(H.updateQueue=null,H.memoizedState=null)}var te=Rm(v);if(te!==null){te.flags&=-257,Am(te,v,I,g,s),te.mode&1&&Sm(g,j,s),s=te,C=j;var oe=s.updateQueue;if(oe===null){var le=new Set;le.add(C),s.updateQueue=le}else oe.add(C);break e}else{if((s&1)===0){Sm(g,j,s),rd();break e}C=Error(t(426))}}else if(Qe&&I.mode&1){var st=Rm(v);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Am(st,v,I,g,s),ph(uo(C,I));break e}}g=C=uo(C,I),gt!==4&&(gt=2),Pa===null?Pa=[g]:Pa.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var b=Tm(g,C,s);Qp(g,b);break e;case 1:I=C;var N=g.type,U=g.stateNode;if((g.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ri===null||!ri.has(U)))){g.flags|=65536,s&=-s,g.lanes|=s;var Y=Im(g,I,s);Qp(g,Y);break e}}g=g.return}while(g!==null)}rg(a)}catch(ce){s=ce,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function tg(){var r=mu.current;return mu.current=uu,r===null?uu:r}function rd(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||(Zi&268435455)===0&&(gu&268435455)===0||oi(Tt,Pt)}function Tu(r,s){var a=Le;Le|=2;var c=tg();(Tt!==r||Pt!==s)&&(Pr=null,ts(r,s));do try{aT();break}catch(d){eg(r,d)}while(!0);if(gh(),Le=a,mu.current=c,ut!==null)throw Error(t(261));return Tt=null,Pt=0,gt}function aT(){for(;ut!==null;)ng(ut)}function lT(){for(;ut!==null&&!vl();)ng(ut)}function ng(r){var s=og(r.alternate,r,hn);r.memoizedProps=r.pendingProps,s===null?rg(r):ut=s,Gh.current=null}function rg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=eT(a,s,hn),a!==null){ut=a;return}}else{if(a=tT(a,s),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{gt=6,ut=null;return}}if(s=s.sibling,s!==null){ut=s;return}ut=s=r}while(s!==null);gt===0&&(gt=5)}function ns(r,s,a){var c=ke,d=Tn.transition;try{Tn.transition=null,ke=1,uT(r,s,a,c)}finally{Tn.transition=d,ke=c}return null}function uT(r,s,a,c){do po();while(ii!==null);if((Le&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===Tt&&(ut=Tt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||_u||(_u=!0,ag(mn,function(){return po(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Tn.transition,Tn.transition=null;var v=ke;ke=1;var I=Le;Le|=4,Gh.current=null,rT(r,a),Km(a,r),kE(rh),Kr=!!nh,rh=nh=null,r.current=a,iT(a),jc(),Le=I,ke=v,Tn.transition=g}else r.current=a;if(_u&&(_u=!1,ii=r,vu=d),g=r.pendingLanes,g===0&&(ri=null),Tl(a.stateNode),en(r,We()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(yu)throw yu=!1,r=Xh,Xh=null,r;return(vu&1)!==0&&r.tag!==0&&po(),g=r.pendingLanes,(g&1)!==0?r===Jh?ka++:(ka=0,Jh=r):ka=0,Zr(),null}function po(){if(ii!==null){var r=qr(vu),s=Tn.transition,a=ke;try{if(Tn.transition=null,ke=16>r?16:r,ii===null)var c=!1;else{if(r=ii,ii=null,vu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,se=r.current;se!==null;){var g=se,v=g.child;if((se.flags&16)!==0){var I=g.deletions;if(I!==null){for(var C=0;C<I.length;C++){var j=I[C];for(se=j;se!==null;){var H=se;switch(H.tag){case 0:case 11:case 15:Aa(8,H,g)}var Q=H.child;if(Q!==null)Q.return=H,se=Q;else for(;se!==null;){H=se;var q=H.sibling,te=H.return;if(zm(H),H===j){se=null;break}if(q!==null){q.return=te,se=q;break}se=te}}}var oe=g.alternate;if(oe!==null){var le=oe.child;if(le!==null){oe.child=null;do{var st=le.sibling;le.sibling=null,le=st}while(le!==null)}}se=g}}if((g.subtreeFlags&2064)!==0&&v!==null)v.return=g,se=v;else e:for(;se!==null;){if(g=se,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Aa(9,g,g.return)}var b=g.sibling;if(b!==null){b.return=g.return,se=b;break e}se=g.return}}var N=r.current;for(se=N;se!==null;){v=se;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,se=U;else e:for(v=N;se!==null;){if(I=se,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:pu(9,I)}}catch(ce){et(I,I.return,ce)}if(I===v){se=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,se=Y;break e}se=I.return}}if(Le=d,Zr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Fi,r)}catch{}c=!0}return c}finally{ke=a,Tn.transition=s}}return!1}function ig(r,s,a){s=uo(a,s),s=Tm(r,s,1),r=ti(r,s,1),s=Ht(),r!==null&&($r(r,1,s),en(r,s))}function et(r,s,a){if(r.tag===3)ig(r,r,a);else for(;s!==null;){if(s.tag===3){ig(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){r=uo(a,r),r=Im(s,r,1),s=ti(s,r,1),r=Ht(),s!==null&&($r(s,1,r),en(s,r));break}}s=s.return}}function cT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Ht(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(Pt&a)===a&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>We()-Yh?ts(r,0):Qh|=a),en(r,s)}function sg(r,s){s===0&&((r.mode&1)===0?s=1:(s=bs,bs<<=1,(bs&130023424)===0&&(bs=4194304)));var a=Ht();r=Rr(r,s),r!==null&&($r(r,s,a),en(r,a))}function hT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),sg(r,a)}function dT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),sg(r,a)}var og;og=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)Jt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Jt=!1,ZE(r,s,a);Jt=(r.flags&131072)!==0}else Jt=!1,Qe&&(s.flags&1048576)!==0&&Fp(s,Xl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;du(r,s),r=s.pendingProps;var d=to(s,Vt.current);ao(s,a),d=Ch(null,s,c,r,d,a);var g=Ph();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xt(c)?(g=!0,Gl(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,wh(s),d.updater=cu,s.stateNode=d,d._reactInternals=s,Lh(s,c,r,a),s=Uh(null,s,c,!0,g,a)):(s.tag=0,Qe&&g&&ch(s),qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(du(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=pT(c),r=Un(c,r),d){case 0:s=Mh(null,s,c,r,a);break e;case 1:s=Om(null,s,c,r,a);break e;case 11:s=Cm(null,s,c,r,a);break e;case 14:s=Pm(null,s,c,Un(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),Mh(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),Om(r,s,c,d,a);case 3:e:{if(xm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,Gp(r,s),ru(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=uo(Error(t(423)),s),s=Lm(r,s,c,a,d);break e}else if(c!==d){d=uo(Error(t(424)),s),s=Lm(r,s,c,a,d);break e}else for(cn=Yr(s.stateNode.containerInfo.firstChild),un=s,Qe=!0,Mn=null,a=Hp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(io(),c===d){s=Cr(r,s,a);break e}qt(r,s,c,a)}s=s.child}return s;case 5:return Xp(s),r===null&&fh(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,ih(c,d)?v=null:g!==null&&ih(c,g)&&(s.flags|=32),Dm(r,s),qt(r,s,v,a),s.child;case 6:return r===null&&fh(s),null;case 13:return Vm(r,s,a);case 4:return Eh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=so(s,null,c,a):qt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),Cm(r,s,c,d,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,qe(eu,c._currentValue),c._currentValue=v,g!==null)if(bn(g.value,v)){if(g.children===d.children&&!Yt.current){s=Cr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var I=g.dependencies;if(I!==null){v=g.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(g.tag===1){C=Ar(-1,a&-a),C.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var H=j.pending;H===null?C.next=C:(C.next=H.next,H.next=C),j.pending=C}}g.lanes|=a,C=g.alternate,C!==null&&(C.lanes|=a),_h(g.return,a,s),I.lanes|=a;break}C=C.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),_h(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}qt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,ao(s,a),d=wn(d),c=c(d),s.flags|=1,qt(r,s,c,a),s.child;case 14:return c=s.type,d=Un(c,s.pendingProps),d=Un(c.type,d),Pm(r,s,c,d,a);case 15:return km(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),du(r,s),s.tag=1,Xt(c)?(r=!0,Gl(s)):r=!1,ao(s,a),wm(s,c,d),Lh(s,c,d,a),Uh(null,s,c,!0,r,a);case 19:return Mm(r,s,a);case 22:return Nm(r,s,a)}throw Error(t(156,s.tag))};function ag(r,s){return Ls(r,s)}function fT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,s,a,c){return new fT(r,s,a,c)}function id(r){return r=r.prototype,!(!r||!r.isReactComponent)}function pT(r){if(typeof r=="function")return id(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===xt)return 14}return 2}function ai(r,s){var a=r.alternate;return a===null?(a=In(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Iu(r,s,a,c,d,g){var v=2;if(c=r,typeof r=="function")id(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case D:return rs(a.children,d,g,s);case S:v=8,d|=8;break;case A:return r=In(12,a,s,d|2),r.elementType=A,r.lanes=g,r;case R:return r=In(13,a,s,d),r.elementType=R,r.lanes=g,r;case rt:return r=In(19,a,s,d),r.elementType=rt,r.lanes=g,r;case Be:return Su(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:v=10;break e;case O:v=9;break e;case L:v=11;break e;case xt:v=14;break e;case Lt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=In(v,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function rs(r,s,a,c){return r=In(7,r,c,s),r.lanes=a,r}function Su(r,s,a,c){return r=In(22,r,c,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function sd(r,s,a){return r=In(6,r,null,s),r.lanes=a,r}function od(r,s,a){return s=In(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function mT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zr(0),this.expirationTimes=zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ad(r,s,a,c,d,g,v,I,C){return r=new mT(r,s,a,I,C),s===1?(s=1,g===!0&&(s|=8)):s=0,g=In(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(g),r}function gT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function lg(r){if(!r)return Jr;r=r._reactInternals;e:{if(kn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Xt(a))return bp(r,a,s)}return s}function ug(r,s,a,c,d,g,v,I,C){return r=ad(a,c,!0,r,d,g,v,I,C),r.context=lg(null),a=r.current,c=Ht(),d=si(a),g=Ar(c,d),g.callback=s??null,ti(a,g,d),r.current.lanes=d,$r(r,d,c),en(r,c),r}function Ru(r,s,a,c){var d=s.current,g=Ht(),v=si(d);return a=lg(a),s.context===null?s.context=a:s.pendingContext=a,s=Ar(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ti(d,s,v),r!==null&&(Bn(r,d,v,g),nu(r,d,v)),v}function Au(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function cg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function ld(r,s){cg(r,s),(r=r.alternate)&&cg(r,s)}function yT(){return null}var hg=typeof reportError=="function"?reportError:function(r){console.error(r)};function ud(r){this._internalRoot=r}Cu.prototype.render=ud.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Ru(r,s,null,null)},Cu.prototype.unmount=ud.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;es(function(){Ru(null,r,null,null)}),s[Er]=null}};function Cu(r){this._internalRoot=r}Cu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Cl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Qn.length&&s!==0&&s<Qn[a].priority;a++);Qn.splice(a,0,r),a===0&&Nl(r)}};function cd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Pu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function dg(){}function _T(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var j=Au(v);g.call(j)}}var v=ug(s,c,r,0,null,!1,!1,"",dg);return r._reactRootContainer=v,r[Er]=v.current,fa(r.nodeType===8?r.parentNode:r),es(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var j=Au(C);I.call(j)}}var C=ad(r,0,!1,null,null,!1,!1,"",dg);return r._reactRootContainer=C,r[Er]=C.current,fa(r.nodeType===8?r.parentNode:r),es(function(){Ru(s,C,a,c)}),C}function ku(r,s,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var I=d;d=function(){var C=Au(v);I.call(C)}}Ru(s,v,r,d)}else v=_T(a,s,r,d,c);return Au(v)}Rl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Br(s.pendingLanes);a!==0&&(Wr(s,a|1),en(s,We()),(Le&6)===0&&(fo=We()+500,Zr()))}break;case 13:es(function(){var c=Rr(r,1);if(c!==null){var d=Ht();Bn(c,r,1,d)}}),ld(r,1)}},Ms=function(r){if(r.tag===13){var s=Rr(r,134217728);if(s!==null){var a=Ht();Bn(s,r,134217728,a)}ld(r,134217728)}},Al=function(r){if(r.tag===13){var s=si(r),a=Rr(r,s);if(a!==null){var c=Ht();Bn(a,r,s,c)}ld(r,s)}},Cl=function(){return ke},Pl=function(r,s){var a=ke;try{return ke=r,s()}finally{ke=a}},Ps=function(r,s,a){switch(s){case"input":if(Uo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=Hl(c);if(!d)throw Error(t(90));Ts(c),Uo(c,d)}}}break;case"textarea":As(r,a);break;case"select":s=a.value,s!=null&&fr(r,!!a.multiple,s,!1)}},Li=td,Go=es;var vT={usingClientEntryPoint:!1,Events:[ga,Zs,Hl,Kn,Ko,td]},Na={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wT={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Xo(r),r===null?null:r.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||yT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{Fi=Nu.inject(wT),sn=Nu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vT,tn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(s))throw Error(t(200));return gT(r,s,null,a)},tn.createRoot=function(r,s){if(!cd(r))throw Error(t(299));var a=!1,c="",d=hg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=ad(r,1,!1,null,null,a,!1,c,d),r[Er]=s.current,fa(r.nodeType===8?r.parentNode:r),new ud(s)},tn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Xo(s),r=r===null?null:r.stateNode,r},tn.flushSync=function(r){return es(r)},tn.hydrate=function(r,s,a){if(!Pu(s))throw Error(t(200));return ku(null,r,s,!0,a)},tn.hydrateRoot=function(r,s,a){if(!cd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=hg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=ug(s,null,r,1,a??null,d,!1,g,v),r[Er]=s.current,fa(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Cu(s)},tn.render=function(r,s,a){if(!Pu(s))throw Error(t(200));return ku(null,r,s,!1,a)},tn.unmountComponentAtNode=function(r){if(!Pu(r))throw Error(t(40));return r._reactRootContainer?(es(function(){ku(null,null,r,!1,function(){r._reactRootContainer=null,r[Er]=null})}),!0):!1},tn.unstable_batchedUpdates=td,tn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Pu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ku(r,s,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var wg;function s_(){if(wg)return fd.exports;wg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),fd.exports=NT(),fd.exports}var Eg;function DT(){if(Eg)return Du;Eg=1;var n=s_();return Du.createRoot=n.createRoot,Du.hydrateRoot=n.hydrateRoot,Du}var OT=DT();const xT=i_(OT);s_();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ha.apply(this,arguments)}var mi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(mi||(mi={}));const Tg="popstate";function LT(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return xd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Yu(o)}return bT(e,t,null,n)}function at(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function o_(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VT(){return Math.random().toString(36).substr(2,8)}function Ig(n,e){return{usr:n.state,key:n.key,idx:e}}function xd(n,e,t,i){return t===void 0&&(t=null),Ha({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?No(e):e,{state:t,key:e&&e.key||i||VT()})}function Yu(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function No(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function bT(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=mi.Pop,p=null,_=w();_==null&&(_=0,h.replaceState(Ha({},h.state,{idx:_}),""));function w(){return(h.state||{idx:null}).idx}function T(){f=mi.Pop;let M=w(),re=M==null?null:M-_;_=M,p&&p({action:f,location:$.location,delta:re})}function P(M,re){f=mi.Push;let ie=xd($.location,M,re);_=w()+1;let ee=Ig(ie,_),ae=$.createHref(ie);try{h.pushState(ee,"",ae)}catch(Ce){if(Ce instanceof DOMException&&Ce.name==="DataCloneError")throw Ce;o.location.assign(ae)}l&&p&&p({action:f,location:$.location,delta:1})}function F(M,re){f=mi.Replace;let ie=xd($.location,M,re);_=w();let ee=Ig(ie,_),ae=$.createHref(ie);h.replaceState(ee,"",ae),l&&p&&p({action:f,location:$.location,delta:0})}function z(M){let re=o.location.origin!=="null"?o.location.origin:o.location.href,ie=typeof M=="string"?M:Yu(M);return ie=ie.replace(/ $/,"%20"),at(re,"No window.location.(origin|href) available to create URL for href: "+ie),new URL(ie,re)}let $={get action(){return f},get location(){return n(o,h)},listen(M){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Tg,T),p=M,()=>{o.removeEventListener(Tg,T),p=null}},createHref(M){return e(o,M)},createURL:z,encodeLocation(M){let re=z(M);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:P,replace:F,go(M){return h.go(M)}};return $}var Sg;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Sg||(Sg={}));function MT(n,e,t){return t===void 0&&(t="/"),UT(n,e,t)}function UT(n,e,t,i){let o=typeof e=="string"?No(e):e,l=uf(o.pathname||"/",t);if(l==null)return null;let h=a_(n);FT(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let _=XT(l);f=GT(h[p],_)}return f}function a_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(at(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let _=yi([i,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(at(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),a_(l.children,e,w,_)),!(l.path==null&&!l.index)&&e.push({path:_,score:HT(_,l.index),routesMeta:w})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of l_(l.path))o(l,h,p)}),e}function l_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=l_(i.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function FT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:KT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const jT=/^:[\w-]+$/,BT=3,zT=2,$T=1,WT=10,qT=-2,Rg=n=>n==="*";function HT(n,e){let t=n.split("/"),i=t.length;return t.some(Rg)&&(i+=qT),e&&(i+=zT),t.filter(o=>!Rg(o)).reduce((o,l)=>o+(jT.test(l)?BT:l===""?$T:WT),i)}function KT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function GT(n,e,t){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let p=i[f],_=f===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=QT({path:p.relativePath,caseSensitive:p.caseSensitive,end:_},w),P=p.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:yi([l,T.pathname]),pathnameBase:t0(yi([l,T.pathnameBase])),route:P}),T.pathnameBase!=="/"&&(l=yi([l,T.pathnameBase]))}return h}function QT(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=YT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((_,w,T)=>{let{paramName:P,isOptional:F}=w;if(P==="*"){let $=f[T]||"";h=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const z=f[T];return F&&!z?_[P]=void 0:_[P]=(z||"").replace(/%2F/g,"/"),_},{}),pathname:l,pathnameBase:h,pattern:n}}function YT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),o_(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function XT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return o_(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function uf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function JT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?No(n):n;return{pathname:t?t.startsWith("/")?t:ZT(t,e):e,search:n0(i),hash:r0(o)}}function ZT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function gd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e0(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function cf(n,e){let t=e0(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function hf(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=No(n):(o=Ha({},n),at(!o.pathname||!o.pathname.includes("?"),gd("?","pathname","search",o)),at(!o.pathname||!o.pathname.includes("#"),gd("#","pathname","hash",o)),at(!o.search||!o.search.includes("#"),gd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let P=h.split("/");for(;P[0]==="..";)P.shift(),T-=1;o.pathname=P.join("/")}f=T>=0?e[T]:"/"}let p=JT(o,f),_=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(_||w)&&(p.pathname+="/"),p}const yi=n=>n.join("/").replace(/\/\/+/g,"/"),t0=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),n0=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,r0=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function i0(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const u_=["post","put","patch","delete"];new Set(u_);const s0=["get",...u_];new Set(s0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ka.apply(this,arguments)}const df=Z.createContext(null),o0=Z.createContext(null),Ri=Z.createContext(null),yc=Z.createContext(null),Ai=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),c_=Z.createContext(null);function a0(n,e){let{relative:t}=e===void 0?{}:e;Do()||at(!1);let{basename:i,navigator:o}=Z.useContext(Ri),{hash:l,pathname:h,search:f}=f_(n,{relative:t}),p=h;return i!=="/"&&(p=h==="/"?i:yi([i,h])),o.createHref({pathname:p,search:f,hash:l})}function Do(){return Z.useContext(yc)!=null}function il(){return Do()||at(!1),Z.useContext(yc).location}function h_(n){Z.useContext(Ri).static||Z.useLayoutEffect(n)}function d_(){let{isDataRoute:n}=Z.useContext(Ai);return n?w0():l0()}function l0(){Do()||at(!1);let n=Z.useContext(df),{basename:e,future:t,navigator:i}=Z.useContext(Ri),{matches:o}=Z.useContext(Ai),{pathname:l}=il(),h=JSON.stringify(cf(o,t.v7_relativeSplatPath)),f=Z.useRef(!1);return h_(()=>{f.current=!0}),Z.useCallback(function(_,w){if(w===void 0&&(w={}),!f.current)return;if(typeof _=="number"){i.go(_);return}let T=hf(_,JSON.parse(h),l,w.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:yi([e,T.pathname])),(w.replace?i.replace:i.push)(T,w.state,w)},[e,i,h,l,n])}function f_(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=Z.useContext(Ri),{matches:o}=Z.useContext(Ai),{pathname:l}=il(),h=JSON.stringify(cf(o,i.v7_relativeSplatPath));return Z.useMemo(()=>hf(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function u0(n,e){return c0(n,e)}function c0(n,e,t,i){Do()||at(!1);let{navigator:o}=Z.useContext(Ri),{matches:l}=Z.useContext(Ai),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let p=h?h.pathnameBase:"/";h&&h.route;let _=il(),w;if(e){var T;let M=typeof e=="string"?No(e):e;p==="/"||(T=M.pathname)!=null&&T.startsWith(p)||at(!1),w=M}else w=_;let P=w.pathname||"/",F=P;if(p!=="/"){let M=p.replace(/^\//,"").split("/");F="/"+P.replace(/^\//,"").split("/").slice(M.length).join("/")}let z=MT(n,{pathname:F}),$=m0(z&&z.map(M=>Object.assign({},M,{params:Object.assign({},f,M.params),pathname:yi([p,o.encodeLocation?o.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?p:yi([p,o.encodeLocation?o.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),l,t,i);return e&&$?Z.createElement(yc.Provider,{value:{location:Ka({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:mi.Pop}},$):$}function h0(){let n=v0(),e=i0(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),t?Z.createElement("pre",{style:o},t):null,null)}const d0=Z.createElement(h0,null);class f0 extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Z.createElement(Ai.Provider,{value:this.props.routeContext},Z.createElement(c_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p0(n){let{routeContext:e,match:t,children:i}=n,o=Z.useContext(df);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Z.createElement(Ai.Provider,{value:e},i)}function m0(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let w=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);w>=0||at(!1),h=h.slice(0,Math.min(h.length,w+1))}let p=!1,_=-1;if(t&&i&&i.v7_partialHydration)for(let w=0;w<h.length;w++){let T=h[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(_=w),T.route.id){let{loaderData:P,errors:F}=t,z=T.route.loader&&P[T.route.id]===void 0&&(!F||F[T.route.id]===void 0);if(T.route.lazy||z){p=!0,_>=0?h=h.slice(0,_+1):h=[h[0]];break}}}return h.reduceRight((w,T,P)=>{let F,z=!1,$=null,M=null;t&&(F=f&&T.route.id?f[T.route.id]:void 0,$=T.route.errorElement||d0,p&&(_<0&&P===0?(E0("route-fallback"),z=!0,M=null):_===P&&(z=!0,M=T.route.hydrateFallbackElement||null)));let re=e.concat(h.slice(0,P+1)),ie=()=>{let ee;return F?ee=$:z?ee=M:T.route.Component?ee=Z.createElement(T.route.Component,null):T.route.element?ee=T.route.element:ee=w,Z.createElement(p0,{match:T,routeContext:{outlet:w,matches:re,isDataRoute:t!=null},children:ee})};return t&&(T.route.ErrorBoundary||T.route.errorElement||P===0)?Z.createElement(f0,{location:t.location,revalidation:t.revalidation,component:$,error:F,children:ie(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):ie()},null)}var p_=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(p_||{}),m_=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(m_||{});function g0(n){let e=Z.useContext(df);return e||at(!1),e}function y0(n){let e=Z.useContext(o0);return e||at(!1),e}function _0(n){let e=Z.useContext(Ai);return e||at(!1),e}function g_(n){let e=_0(),t=e.matches[e.matches.length-1];return t.route.id||at(!1),t.route.id}function v0(){var n;let e=Z.useContext(c_),t=y0(),i=g_();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function w0(){let{router:n}=g0(p_.UseNavigateStable),e=g_(m_.UseNavigateStable),t=Z.useRef(!1);return h_(()=>{t.current=!0}),Z.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,Ka({fromRouteId:e},l)))},[n,e])}const Ag={};function E0(n,e,t){Ag[n]||(Ag[n]=!0)}function T0(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Cg(n){let{to:e,replace:t,state:i,relative:o}=n;Do()||at(!1);let{future:l,static:h}=Z.useContext(Ri),{matches:f}=Z.useContext(Ai),{pathname:p}=il(),_=d_(),w=hf(e,cf(f,l.v7_relativeSplatPath),p,o==="path"),T=JSON.stringify(w);return Z.useEffect(()=>_(JSON.parse(T),{replace:t,state:i,relative:o}),[_,T,o,t,i]),null}function ju(n){at(!1)}function I0(n){let{basename:e="/",children:t=null,location:i,navigationType:o=mi.Pop,navigator:l,static:h=!1,future:f}=n;Do()&&at(!1);let p=e.replace(/^\/*/,"/"),_=Z.useMemo(()=>({basename:p,navigator:l,static:h,future:Ka({v7_relativeSplatPath:!1},f)}),[p,f,l,h]);typeof i=="string"&&(i=No(i));let{pathname:w="/",search:T="",hash:P="",state:F=null,key:z="default"}=i,$=Z.useMemo(()=>{let M=uf(w,p);return M==null?null:{location:{pathname:M,search:T,hash:P,state:F,key:z},navigationType:o}},[p,w,T,P,F,z,o]);return $==null?null:Z.createElement(Ri.Provider,{value:_},Z.createElement(yc.Provider,{children:t,value:$}))}function S0(n){let{children:e,location:t}=n;return u0(Ld(e),t)}new Promise(()=>{});function Ld(n,e){e===void 0&&(e=[]);let t=[];return Z.Children.forEach(n,(i,o)=>{if(!Z.isValidElement(i))return;let l=[...e,o];if(i.type===Z.Fragment){t.push.apply(t,Ld(i.props.children,l));return}i.type!==ju&&at(!1),!i.props.index||!i.props.children||at(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Ld(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vd(){return Vd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Vd.apply(this,arguments)}function R0(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function A0(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function C0(n,e){return n.button===0&&(!e||e==="_self")&&!A0(n)}const P0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],k0="6";try{window.__reactRouterVersion=k0}catch{}const N0="startTransition",Pg=CT[N0];function D0(n){let{basename:e,children:t,future:i,window:o}=n,l=Z.useRef();l.current==null&&(l.current=LT({window:o,v5Compat:!0}));let h=l.current,[f,p]=Z.useState({action:h.action,location:h.location}),{v7_startTransition:_}=i||{},w=Z.useCallback(T=>{_&&Pg?Pg(()=>p(T)):p(T)},[p,_]);return Z.useLayoutEffect(()=>h.listen(w),[h,w]),Z.useEffect(()=>T0(i),[i]),Z.createElement(I0,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}const O0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kg=Z.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:p,to:_,preventScrollReset:w,viewTransition:T}=e,P=R0(e,P0),{basename:F}=Z.useContext(Ri),z,$=!1;if(typeof _=="string"&&x0.test(_)&&(z=_,O0))try{let ee=new URL(window.location.href),ae=_.startsWith("//")?new URL(ee.protocol+_):new URL(_),Ce=uf(ae.pathname,F);ae.origin===ee.origin&&Ce!=null?_=Ce+ae.search+ae.hash:$=!0}catch{}let M=a0(_,{relative:o}),re=L0(_,{replace:h,state:f,target:p,preventScrollReset:w,relative:o,viewTransition:T});function ie(ee){i&&i(ee),ee.defaultPrevented||re(ee)}return Z.createElement("a",Vd({},P,{href:z||M,onClick:$||l?i:ie,ref:t,target:p}))});var Ng;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ng||(Ng={}));var Dg;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));function L0(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,p=d_(),_=il(),w=f_(n,{relative:h});return Z.useCallback(T=>{if(C0(T,t)){T.preventDefault();let P=i!==void 0?i:Yu(_)===Yu(w);p(n,{replace:P,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[_,p,w,i,o,t,n,l,h,f])}var Og={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},V0=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},__={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,p=o+2<n.length,_=p?n[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let P=(f&15)<<2|_>>6,F=_&63;p||(F=64,h||(P=64)),i.push(t[w],t[T],t[P],t[F])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(y_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):V0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new b0;const P=l<<2|f>>4;if(i.push(P),_!==64){const F=f<<4&240|_>>2;if(i.push(F),T!==64){const z=_<<6&192|T;i.push(z)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class b0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M0=function(n){const e=y_(n);return __.encodeByteArray(e,!0)},Xu=function(n){return M0(n).replace(/\./g,"")},v_=function(n){try{return __.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=()=>U0().__FIREBASE_DEFAULTS__,j0=()=>{if(typeof process>"u"||typeof Og>"u")return;const n=Og.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},B0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&v_(n[1]);return e&&JSON.parse(e)},_c=()=>{try{return F0()||j0()||B0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},w_=n=>{var e,t;return(t=(e=_c())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},E_=n=>{const e=w_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},T_=()=>{var n;return(n=_c())===null||n===void 0?void 0:n.config},I_=n=>{var e;return(e=_c())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xu(JSON.stringify(t)),Xu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function W0(){var n;const e=(n=_c())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function q0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function R_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function H0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K0(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function G0(){return!W0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A_(){try{return typeof indexedDB=="object"}catch{return!1}}function C_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function Q0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="FirebaseError";class An extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Y0,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?X0(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new An(o,f,i)}}function X0(n,e){return n.replace(J0,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const J0=/\{\$([^}]+)}/g;function Z0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ga(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(xg(l)&&xg(h)){if(!Ga(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function xg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function La(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Va(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function eI(n,e){const t=new tI(n,e);return t.subscribe.bind(t)}class tI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");nI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=yd),o.error===void 0&&(o.error=yd),o.complete===void 0&&(o.complete=yd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=1e3,iI=2,sI=4*60*60*1e3,oI=.5;function Lg(n,e=rI,t=iI){const i=e*Math.pow(t,n),o=Math.round(oI*i*(Math.random()-.5)*2);return Math.min(sI,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n){return n&&n._delegate?n._delegate:n}class Rn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new z0;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uI(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:lI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lI(n){return n===is?void 0:n}function uI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const hI={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},dI=Ne.INFO,fI={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},pI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=fI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=dI,this._logHandler=pI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const mI=(n,e)=>e.some(t=>n instanceof t);let Vg,bg;function gI(){return Vg||(Vg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yI(){return bg||(bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P_=new WeakMap,bd=new WeakMap,k_=new WeakMap,_d=new WeakMap,ff=new WeakMap;function _I(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(_i(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&P_.set(t,n)}).catch(()=>{}),ff.set(e,n),e}function vI(n){if(bd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});bd.set(n,e)}let Md={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||k_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wI(n){Md=n(Md)}function EI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(vd(this),e,...t);return k_.set(i,e.sort?e.sort():[e]),_i(i)}:yI().includes(n)?function(...e){return n.apply(vd(this),e),_i(P_.get(this))}:function(...e){return _i(n.apply(vd(this),e))}}function TI(n){return typeof n=="function"?EI(n):(n instanceof IDBTransaction&&vI(n),mI(n,gI())?new Proxy(n,Md):n)}function _i(n){if(n instanceof IDBRequest)return _I(n);if(_d.has(n))return _d.get(n);const e=TI(n);return e!==n&&(_d.set(n,e),ff.set(e,n)),e}const vd=n=>ff.get(n);function N_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=_i(h);return i&&h.addEventListener("upgradeneeded",p=>{i(_i(h.result),p.oldVersion,p.newVersion,_i(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const II=["get","getKey","getAll","getAllKeys","count"],SI=["put","add","delete","clear"],wd=new Map;function Mg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wd.get(e))return wd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=SI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||II.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let _=p.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&p.done]))[0]};return wd.set(e,l),l}wI(n=>({...n,get:(e,t,i)=>Mg(e,t)||n.get(e,t,i),has:(e,t)=>!!Mg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function AI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ud="@firebase/app",Ug="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new vc("@firebase/app"),CI="@firebase/app-compat",PI="@firebase/analytics-compat",kI="@firebase/analytics",NI="@firebase/app-check-compat",DI="@firebase/app-check",OI="@firebase/auth",xI="@firebase/auth-compat",LI="@firebase/database",VI="@firebase/data-connect",bI="@firebase/database-compat",MI="@firebase/functions",UI="@firebase/functions-compat",FI="@firebase/installations",jI="@firebase/installations-compat",BI="@firebase/messaging",zI="@firebase/messaging-compat",$I="@firebase/performance",WI="@firebase/performance-compat",qI="@firebase/remote-config",HI="@firebase/remote-config-compat",KI="@firebase/storage",GI="@firebase/storage-compat",QI="@firebase/firestore",YI="@firebase/vertexai-preview",XI="@firebase/firestore-compat",JI="firebase",ZI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="[DEFAULT]",eS={[Ud]:"fire-core",[CI]:"fire-core-compat",[kI]:"fire-analytics",[PI]:"fire-analytics-compat",[DI]:"fire-app-check",[NI]:"fire-app-check-compat",[OI]:"fire-auth",[xI]:"fire-auth-compat",[LI]:"fire-rtdb",[VI]:"fire-data-connect",[bI]:"fire-rtdb-compat",[MI]:"fire-fn",[UI]:"fire-fn-compat",[FI]:"fire-iid",[jI]:"fire-iid-compat",[BI]:"fire-fcm",[zI]:"fire-fcm-compat",[$I]:"fire-perf",[WI]:"fire-perf-compat",[qI]:"fire-rc",[HI]:"fire-rc-compat",[KI]:"fire-gcs",[GI]:"fire-gcs-compat",[QI]:"fire-fst",[XI]:"fire-fst-compat",[YI]:"fire-vertex","fire-js":"fire-js",[JI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Map,tS=new Map,jd=new Map;function Fg(n,e){try{n.container.addComponent(e)}catch(t){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wn(n){const e=n.name;if(jd.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;jd.set(e,n);for(const t of Ju.values())Fg(t,n);for(const t of tS.values())Fg(t,n);return!0}function Ci(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new ys("app","Firebase",nS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=ZI;function D_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Fd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw vi.create("bad-app-name",{appName:String(o)});if(t||(t=T_()),!t)throw vi.create("no-options");const l=Ju.get(o);if(l){if(Ga(t,l.options)&&Ga(i,l.config))return l;throw vi.create("duplicate-app",{appName:o})}const h=new cI(o);for(const p of jd.values())h.addComponent(p);const f=new rS(t,i,h);return Ju.set(o,f),f}function wc(n=Fd){const e=Ju.get(n);if(!e&&n===Fd&&T_())return D_();if(!e)throw vi.create("no-app",{appName:n});return e}function nn(n,e,t){var i;let o=(i=eS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(f.join(" "));return}Wn(new Rn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="firebase-heartbeat-database",sS=1,Qa="firebase-heartbeat-store";let Ed=null;function O_(){return Ed||(Ed=N_(iS,sS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qa)}catch(t){console.warn(t)}}}}).catch(n=>{throw vi.create("idb-open",{originalErrorMessage:n.message})})),Ed}async function oS(n){try{const t=(await O_()).transaction(Qa),i=await t.objectStore(Qa).get(x_(n));return await t.done,i}catch(e){if(e instanceof An)Lr.warn(e.message);else{const t=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(t.message)}}}async function jg(n,e){try{const i=(await O_()).transaction(Qa,"readwrite");await i.objectStore(Qa).put(e,x_(n)),await i.done}catch(t){if(t instanceof An)Lr.warn(t.message);else{const i=vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Lr.warn(i.message)}}}function x_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=1024,lS=30*24*60*60*1e3;class uS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Bg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=lS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Lr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bg(),{heartbeatsToSend:i,unsentEntries:o}=cS(this._heartbeatsCache.heartbeats),l=Xu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Lr.warn(t),""}}}function Bg(){return new Date().toISOString().substring(0,10)}function cS(n,e=aS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),zg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),zg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class hS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A_()?C_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function zg(n){return Xu(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(n){Wn(new Rn("platform-logger",e=>new RI(e),"PRIVATE")),Wn(new Rn("heartbeat",e=>new uS(e),"PRIVATE")),nn(Ud,Ug,n),nn(Ud,Ug,"esm2017"),nn("fire-js","")}dS("");var fS="firebase",pS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(fS,pS,"app");function pf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function L_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mS=L_,V_=new ys("auth","Firebase",L_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new vc("@firebase/auth");function gS(n,...e){Zu.logLevel<=Ne.WARN&&Zu.warn(`Auth (${_s}): ${n}`,...e)}function Bu(n,...e){Zu.logLevel<=Ne.ERROR&&Zu.error(`Auth (${_s}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,...e){throw mf(n,...e)}function sr(n,...e){return mf(n,...e)}function b_(n,e,t){const i=Object.assign(Object.assign({},mS()),{[e]:t});return new ys("auth","Firebase",i).create(e,{appName:n.name})}function Or(n){return b_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return V_.create(n,...e)}function _e(n,e,...t){if(!n)throw mf(e,...t)}function kr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bu(e),new Error(e)}function Vr(n,e){n||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function yS(){return $g()==="http:"||$g()==="https:"}function $g(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yS()||R_()||"connection"in navigator)?navigator.onLine:!0}function vS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=$0()||H0()}get(){return _S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n,e){Vr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=new ol(3e4,6e4);function Pi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ki(n,e,t,i,o={}){return U_(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=sl(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:p},l);return q0()||(_.referrerPolicy="no-referrer"),M_.fetch()(F_(n,n.config.apiHost,t,f),_)})}async function U_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},wS),e);try{const o=new IS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Ou(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,_]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ou(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Ou(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Ou(n,"user-disabled",h);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw b_(n,w,_);qn(n,w)}}catch(o){if(o instanceof An)throw o;qn(n,"network-request-failed",{message:String(o)})}}async function al(n,e,t,i,o={}){const l=await ki(n,e,t,i,o);return"mfaPendingCredential"in l&&qn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function F_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?gf(n.config,o):`${n.config.apiScheme}://${o}`}function TS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(sr(this.auth,"network-request-failed")),ES.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ou(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=sr(n,e,i);return o.customData._tokenResponse=t,o}function Wg(n){return n!==void 0&&n.enterprise!==void 0}class SS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return TS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RS(n,e){return ki(n,"GET","/v2/recaptchaConfig",Pi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(n,e){return ki(n,"POST","/v1/accounts:delete",e)}async function j_(n,e){return ki(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CS(n,e=!1){const t=ht(n),i=await t.getIdToken(e),o=yf(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Fa(Td(o.auth_time)),issuedAtTime:Fa(Td(o.iat)),expirationTime:Fa(Td(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Td(n){return Number(n)*1e3}function yf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Bu("JWT malformed, contained fewer than 3 sections"),null;try{const o=v_(t);return o?JSON.parse(o):(Bu("Failed to decode base64 JWT payload"),null)}catch(o){return Bu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function qg(n){const e=yf(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof An&&PS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function PS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Ya(n,j_(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?B_(l.providerUserInfo):[],f=DS(n.providerData,h),p=n.isAnonymous,_=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),w=p?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new zd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function NS(n){const e=ht(n);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function B_(n){return n.map(e=>{var{providerId:t}=e,i=pf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(n,e){const t=await U_(n,{},async()=>{const i=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=F_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",M_.fetch()(h,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xS(n,e){return ki(n,"POST","/v2/accounts:revokeToken",Pi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=qg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await OS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new vo;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new zd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ya(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CS(this,e)}reload(){return NS(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ec(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rr(this.auth.app))return Promise.reject(Or(this.auth));const e=await this.getIdToken();return await Ya(this,AS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,p,_,w;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,P=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,M=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,re=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ie=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ee,emailVerified:ae,isAnonymous:Ce,providerData:Ie,stsTokenManager:D}=t;_e(ee&&D,e,"internal-error");const S=vo.fromJSON(this.name,D);_e(typeof ee=="string",e,"internal-error"),ui(T,e.name),ui(P,e.name),_e(typeof ae=="boolean",e,"internal-error"),_e(typeof Ce=="boolean",e,"internal-error"),ui(F,e.name),ui(z,e.name),ui($,e.name),ui(M,e.name),ui(re,e.name),ui(ie,e.name);const A=new Nr({uid:ee,auth:e,email:P,emailVerified:ae,displayName:T,isAnonymous:Ce,photoURL:z,phoneNumber:F,tenantId:$,stsTokenManager:S,createdAt:re,lastLoginAt:ie});return Ie&&Array.isArray(Ie)&&(A.providerData=Ie.map(k=>Object.assign({},k))),M&&(A._redirectEventId=M),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new vo;o.updateFromServerResponse(t);const l=new Nr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await ec(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?B_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new vo;f.updateFromIdToken(i);const p=new Nr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new zd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,_),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Map;function Dr(n){Vr(n instanceof Function,"Expected a class definition");let e=Hg.get(n);return e?(Vr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hg.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}z_.type="NONE";const Kg=z_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n,e,t){return`firebase:${n}:${e}:${t}`}class wo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=zu(this.userKey,o.apiKey,l),this.fullPersistenceKey=zu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new wo(Dr(Kg),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Dr(Kg);const h=zu(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){const T=Nr._fromJSON(e,w);_!==l&&(f=T),l=_;break}}catch{}const p=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new wo(l,e,i):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new wo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(G_(e))return"Blackberry";if(Q_(e))return"Webos";if(W_(e))return"Safari";if((e.includes("chrome/")||q_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function $_(n=zt()){return/firefox\//i.test(n)}function W_(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q_(n=zt()){return/crios\//i.test(n)}function H_(n=zt()){return/iemobile/i.test(n)}function K_(n=zt()){return/android/i.test(n)}function G_(n=zt()){return/blackberry/i.test(n)}function Q_(n=zt()){return/webos/i.test(n)}function _f(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function LS(n=zt()){var e;return _f(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VS(){return K0()&&document.documentMode===10}function Y_(n=zt()){return _f(n)||K_(n)||Q_(n)||G_(n)||/windows phone/i.test(n)||H_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n,e=[]){let t;switch(n){case"Browser":t=Gg(zt());break;case"Worker":t=`${Gg(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_s}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(n,e={}){return ki(n,"GET","/v2/passwordPolicy",Pi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=6;class FS{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:US,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qg(this),this.idTokenSubscription=new Qg(this),this.beforeStateQueue=new bS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await j_(this,{idToken:e}),i=await Nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rr(this.app))return Promise.reject(Or(this));const t=e?ht(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rr(this.app)?Promise.reject(Or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rr(this.app)?Promise.reject(Or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MS(this),t=new FS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await xS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function vs(n){return ht(n)}class Qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=eI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BS(n){Ec=n}function J_(n){return Ec.loadJS(n)}function zS(){return Ec.recaptchaEnterpriseScript}function $S(){return Ec.gapiScript}function WS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const qS="recaptcha-enterprise",HS="NO_RECAPTCHA";class KS{constructor(e){this.type=qS,this.auth=vs(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{RS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new SS(p);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(p=>{f(p)})})}function o(l,h,f){const p=window.grecaptcha;Wg(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(HS)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Wg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=zS();p.length!==0&&(p+=f),J_(p).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function Yg(n,e,t,i=!1){const o=new KS(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const h=Object.assign({},e);return i?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function $d(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Yg(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Yg(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(n,e){const t=Ci(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ga(l,e??{}))return o;qn(o,"already-initialized")}return t.initialize({options:e})}function QS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function YS(n,e,t){const i=vs(n);_e(i._canInitEmulator,i,"emulator-config-failed"),_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Z_(e),{host:h,port:f}=XS(e),p=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),JS()}function Z_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function XS(n){const e=Z_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Xg(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Xg(h)}}}function Xg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function JS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function ZS(n,e){return ki(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(n,e){return al(n,"POST","/v1/accounts:signInWithPassword",Pi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(n,e){return al(n,"POST","/v1/accounts:signInWithEmailLink",Pi(n,e))}async function nR(n,e){return al(n,"POST","/v1/accounts:signInWithEmailLink",Pi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends vf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Xa(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Xa(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $d(e,t,"signInWithPassword",eR);case"emailLink":return tR(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $d(e,i,"signUpPassword",ZS);case"emailLink":return nR(e,{idToken:t,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(n,e){return al(n,"POST","/v1/accounts:signInWithIdp",Pi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="http://localhost";class us extends vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=pf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new us(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Eo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Eo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Eo(e,t)}buildRequest(){const e={requestUri:rR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sR(n){const e=La(Va(n)).link,t=e?La(Va(e)).deep_link_id:null,i=La(Va(n)).deep_link_id;return(i?La(Va(i)).link:null)||i||t||e||n}class wf{constructor(e){var t,i,o,l,h,f;const p=La(Va(e)),_=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(i=p.oobCode)!==null&&i!==void 0?i:null,T=iR((o=p.mode)!==null&&o!==void 0?o:null);_e(_&&w&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=sR(e);try{return new wf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,t){return Xa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=wf.parseLink(t);return _e(i,"argument-error"),Xa._fromEmailAndCode(e,i.code,i.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends ll{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return hi.credential(t,i)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ll{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends ll{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return fi.credential(t,i)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(n,e){return al(n,"POST","/v1/accounts:signUp",Pi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Nr._fromIdTokenResponse(e,i,o),h=Jg(i);return new cs({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Jg(i);return new cs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Jg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends An{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new tc(e,t,i,o)}}function tv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(n,l,e,i):l})}async function aR(n,e,t=!1){const i=await Ya(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return cs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(n,e,t=!1){const{auth:i}=n;if(rr(i.app))return Promise.reject(Or(i));const o="reauthenticate";try{const l=await Ya(n,tv(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=yf(l.idToken);_e(h,i,"internal-error");const{sub:f}=h;return _e(n.uid===f,i,"user-mismatch"),cs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&qn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(n,e,t=!1){if(rr(n.app))return Promise.reject(Or(n));const i="signIn",o=await tv(n,i,e),l=await cs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function uR(n,e){return nv(vs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(n){const e=vs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cR(n,e,t){if(rr(n.app))return Promise.reject(Or(n));const i=vs(n),h=await $d(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oR).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&rv(n),p}),f=await cs._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function hR(n,e,t){return rr(n.app)?Promise.reject(Or(n)):uR(ht(n),Oo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&rv(n),i})}function dR(n,e,t,i){return ht(n).onIdTokenChanged(e,t,i)}function fR(n,e,t){return ht(n).beforeAuthStateChanged(e,t)}function pR(n,e,t,i){return ht(n).onAuthStateChanged(e,t,i)}function mR(n){return ht(n).signOut()}const nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=1e3,yR=10;class sv extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Y_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);VS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,yR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sv.type="LOCAL";const _R=sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ov.type="SESSION";const av=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Tc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),p=await vR(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const _=Ef("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const P=T;if(P.data.eventId===_)switch(P.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(P.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return window}function ER(n){or().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function TR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function SR(){return lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="firebaseLocalStorageDb",RR=1,rc="firebaseLocalStorage",cv="fbase_key";class ul{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ic(n,e){return n.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function AR(){const n=indexedDB.deleteDatabase(uv);return new ul(n).toPromise()}function Wd(){const n=indexedDB.open(uv,RR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(rc,{keyPath:cv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(rc)?e(i):(i.close(),await AR(),e(await Wd()))})})}async function Zg(n,e,t){const i=Ic(n,!0).put({[cv]:e,value:t});return new ul(i).toPromise()}async function CR(n,e){const t=Ic(n,!1).get(e),i=await new ul(t).toPromise();return i===void 0?null:i.value}function ey(n,e){const t=Ic(n,!0).delete(e);return new ul(t).toPromise()}const PR=800,kR=3;class hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>kR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tc._getInstance(SR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TR(),!this.activeServiceWorker)return;this.sender=new wR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wd();return await Zg(e,nc,"1"),await ey(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Zg(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>CR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ey(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Ic(o,!1).getAll();return new ul(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hv.type="LOCAL";const NR=hv;new ol(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(n,e){return e?Dr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OR(n){return nv(n.auth,new Tf(n),n.bypassAuthState)}function xR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),lR(t,new Tf(n),n.bypassAuthState)}async function LR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),aR(t,new Tf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OR;case"linkViaPopup":case"linkViaRedirect":return LR;case"reauthViaPopup":case"reauthViaRedirect":return xR;default:qn(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=new ol(2e3,1e4);class _o extends dv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,_o.currentPopupAction&&_o.currentPopupAction.cancel(),_o.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=Ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_o.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VR.get())};e()}}_o.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="pendingRedirect",$u=new Map;class MR extends dv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=$u.get(this.auth._key());if(!e){try{const i=await UR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}$u.set(this.auth._key(),e)}return this.bypassAuthState||$u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UR(n,e){const t=BR(e),i=jR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function FR(n,e){$u.set(n._key(),e)}function jR(n){return Dr(n._redirectPersistence)}function BR(n){return zu(bR,n.config.apiKey,n.name)}async function zR(n,e,t=!1){if(rr(n.app))return Promise.reject(Or(n));const i=vs(n),o=DR(i,e),h=await new MR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=10*60*1e3;class WR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!fv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(sr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$R&&this.cachedEventUids.clear(),this.cachedEventUids.has(ty(e))}saveEventToCache(e){this.cachedEventUids.add(ty(e)),this.lastProcessedEventTime=Date.now()}}function ty(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(n,e={}){return ki(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GR=/^https?/;async function QR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await HR(n);for(const t of e)try{if(YR(t))return}catch{}qn(n,"unauthorized-domain")}function YR(n){const e=Bd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!GR.test(t))return!1;if(KR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=new ol(3e4,6e4);function ny(){const n=or().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function JR(n){return new Promise((e,t)=>{var i,o,l;function h(){ny(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ny(),t(sr(n,"network-request-failed"))},timeout:XR.get()})}if(!((o=(i=or().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=or().gapi)===null||l===void 0)&&l.load)h();else{const f=WS("iframefcb");return or()[f]=()=>{gapi.load?h():t(sr(n,"network-request-failed"))},J_(`${$S()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Wu=null,e})}let Wu=null;function ZR(n){return Wu=Wu||JR(n),Wu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=new ol(5e3,15e3),tA="__/auth/iframe",nA="emulator/auth/iframe",rA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sA(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gf(e,nA):`https://${n.config.authDomain}/${tA}`,i={apiKey:e.apiKey,appName:n.name,v:_s},o=iA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${sl(i).slice(1)}`}async function oA(n){const e=await ZR(n),t=or().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:sA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=sr(n,"network-request-failed"),f=or().setTimeout(()=>{l(h)},eA.get());function p(){or().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lA=500,uA=600,cA="_blank",hA="http://localhost";class ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dA(n,e,t,i=lA,o=uA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},aA),{width:i.toString(),height:o.toString(),top:l,left:h}),_=zt().toLowerCase();t&&(f=q_(_)?cA:t),$_(_)&&(e=e||hA,p.scrollbars="yes");const w=Object.entries(p).reduce((P,[F,z])=>`${P}${F}=${z},`,"");if(LS(_)&&f!=="_self")return fA(e||"",f),new ry(null);const T=window.open(e||"",f,w);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new ry(T)}function fA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="__/auth/handler",mA="emulator/auth/handler",gA=encodeURIComponent("fac");async function iy(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:_s,eventId:o};if(e instanceof ev){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",Z0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof ll){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await n._getAppCheckToken(),_=p?`#${gA}=${encodeURIComponent(p)}`:"";return`${yA(n)}?${sl(f).slice(1)}${_}`}function yA({config:n}){return n.emulator?gf(n,mA):`https://${n.authDomain}/${pA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="webStorageSupport";class _A{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=av,this._completeRedirectFn=zR,this._overrideRedirectResult=FR}async _openPopup(e,t,i,o){var l;Vr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await iy(e,t,i,Bd(),o);return dA(e,h,Ef())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await iy(e,t,i,Bd(),o);return ER(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Vr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await oA(e),i=new WR(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Id,{type:Id},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Id];h!==void 0&&t(!!h),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Y_()||W_()||_f()}}const vA=_A;var sy="@firebase/auth",oy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TA(n){Wn(new Rn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X_(n)},_=new jS(i,o,l,p);return QS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Wn(new Rn("auth-internal",e=>{const t=vs(e.getProvider("auth").getImmediate());return(i=>new wA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(sy,oy,EA(n)),nn(sy,oy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=5*60,SA=I_("authIdTokenMaxAge")||IA;let ay=null;const RA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>SA)return;const o=t==null?void 0:t.token;ay!==o&&(ay=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function AA(n=wc()){const e=Ci(n,"auth");if(e.isInitialized())return e.getImmediate();const t=GS(n,{popupRedirectResolver:vA,persistence:[NR,_R,av]}),i=I_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=RA(l.toString());fR(t,h,()=>h(t.currentUser)),dR(t,f=>h(f))}}const o=w_("auth");return o&&YS(t,`http://${o}`),t}function CA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}BS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=sr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",CA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TA("Browser");var ly=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,pv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function A(){}A.prototype=S.prototype,D.D=S.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(k,O,L){for(var R=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)R[rt-2]=arguments[rt];return S.prototype[O].apply(k,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,A){A||(A=0);var k=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)k[O]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(O=0;16>O;++O)k[O]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=D.g[0],A=D.g[1],O=D.g[2];var L=D.g[3],R=S+(L^A&(O^L))+k[0]+3614090360&4294967295;S=A+(R<<7&4294967295|R>>>25),R=L+(O^S&(A^O))+k[1]+3905402710&4294967295,L=S+(R<<12&4294967295|R>>>20),R=O+(A^L&(S^A))+k[2]+606105819&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(S^O&(L^S))+k[3]+3250441966&4294967295,A=O+(R<<22&4294967295|R>>>10),R=S+(L^A&(O^L))+k[4]+4118548399&4294967295,S=A+(R<<7&4294967295|R>>>25),R=L+(O^S&(A^O))+k[5]+1200080426&4294967295,L=S+(R<<12&4294967295|R>>>20),R=O+(A^L&(S^A))+k[6]+2821735955&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(S^O&(L^S))+k[7]+4249261313&4294967295,A=O+(R<<22&4294967295|R>>>10),R=S+(L^A&(O^L))+k[8]+1770035416&4294967295,S=A+(R<<7&4294967295|R>>>25),R=L+(O^S&(A^O))+k[9]+2336552879&4294967295,L=S+(R<<12&4294967295|R>>>20),R=O+(A^L&(S^A))+k[10]+4294925233&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(S^O&(L^S))+k[11]+2304563134&4294967295,A=O+(R<<22&4294967295|R>>>10),R=S+(L^A&(O^L))+k[12]+1804603682&4294967295,S=A+(R<<7&4294967295|R>>>25),R=L+(O^S&(A^O))+k[13]+4254626195&4294967295,L=S+(R<<12&4294967295|R>>>20),R=O+(A^L&(S^A))+k[14]+2792965006&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(S^O&(L^S))+k[15]+1236535329&4294967295,A=O+(R<<22&4294967295|R>>>10),R=S+(O^L&(A^O))+k[1]+4129170786&4294967295,S=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(S^A))+k[6]+3225465664&4294967295,L=S+(R<<9&4294967295|R>>>23),R=O+(S^A&(L^S))+k[11]+643717713&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^S&(O^L))+k[0]+3921069994&4294967295,A=O+(R<<20&4294967295|R>>>12),R=S+(O^L&(A^O))+k[5]+3593408605&4294967295,S=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(S^A))+k[10]+38016083&4294967295,L=S+(R<<9&4294967295|R>>>23),R=O+(S^A&(L^S))+k[15]+3634488961&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^S&(O^L))+k[4]+3889429448&4294967295,A=O+(R<<20&4294967295|R>>>12),R=S+(O^L&(A^O))+k[9]+568446438&4294967295,S=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(S^A))+k[14]+3275163606&4294967295,L=S+(R<<9&4294967295|R>>>23),R=O+(S^A&(L^S))+k[3]+4107603335&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^S&(O^L))+k[8]+1163531501&4294967295,A=O+(R<<20&4294967295|R>>>12),R=S+(O^L&(A^O))+k[13]+2850285829&4294967295,S=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(S^A))+k[2]+4243563512&4294967295,L=S+(R<<9&4294967295|R>>>23),R=O+(S^A&(L^S))+k[7]+1735328473&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^S&(O^L))+k[12]+2368359562&4294967295,A=O+(R<<20&4294967295|R>>>12),R=S+(A^O^L)+k[5]+4294588738&4294967295,S=A+(R<<4&4294967295|R>>>28),R=L+(S^A^O)+k[8]+2272392833&4294967295,L=S+(R<<11&4294967295|R>>>21),R=O+(L^S^A)+k[11]+1839030562&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^S)+k[14]+4259657740&4294967295,A=O+(R<<23&4294967295|R>>>9),R=S+(A^O^L)+k[1]+2763975236&4294967295,S=A+(R<<4&4294967295|R>>>28),R=L+(S^A^O)+k[4]+1272893353&4294967295,L=S+(R<<11&4294967295|R>>>21),R=O+(L^S^A)+k[7]+4139469664&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^S)+k[10]+3200236656&4294967295,A=O+(R<<23&4294967295|R>>>9),R=S+(A^O^L)+k[13]+681279174&4294967295,S=A+(R<<4&4294967295|R>>>28),R=L+(S^A^O)+k[0]+3936430074&4294967295,L=S+(R<<11&4294967295|R>>>21),R=O+(L^S^A)+k[3]+3572445317&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^S)+k[6]+76029189&4294967295,A=O+(R<<23&4294967295|R>>>9),R=S+(A^O^L)+k[9]+3654602809&4294967295,S=A+(R<<4&4294967295|R>>>28),R=L+(S^A^O)+k[12]+3873151461&4294967295,L=S+(R<<11&4294967295|R>>>21),R=O+(L^S^A)+k[15]+530742520&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^S)+k[2]+3299628645&4294967295,A=O+(R<<23&4294967295|R>>>9),R=S+(O^(A|~L))+k[0]+4096336452&4294967295,S=A+(R<<6&4294967295|R>>>26),R=L+(A^(S|~O))+k[7]+1126891415&4294967295,L=S+(R<<10&4294967295|R>>>22),R=O+(S^(L|~A))+k[14]+2878612391&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~S))+k[5]+4237533241&4294967295,A=O+(R<<21&4294967295|R>>>11),R=S+(O^(A|~L))+k[12]+1700485571&4294967295,S=A+(R<<6&4294967295|R>>>26),R=L+(A^(S|~O))+k[3]+2399980690&4294967295,L=S+(R<<10&4294967295|R>>>22),R=O+(S^(L|~A))+k[10]+4293915773&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~S))+k[1]+2240044497&4294967295,A=O+(R<<21&4294967295|R>>>11),R=S+(O^(A|~L))+k[8]+1873313359&4294967295,S=A+(R<<6&4294967295|R>>>26),R=L+(A^(S|~O))+k[15]+4264355552&4294967295,L=S+(R<<10&4294967295|R>>>22),R=O+(S^(L|~A))+k[6]+2734768916&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~S))+k[13]+1309151649&4294967295,A=O+(R<<21&4294967295|R>>>11),R=S+(O^(A|~L))+k[4]+4149444226&4294967295,S=A+(R<<6&4294967295|R>>>26),R=L+(A^(S|~O))+k[11]+3174756917&4294967295,L=S+(R<<10&4294967295|R>>>22),R=O+(S^(L|~A))+k[2]+718787259&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~S))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,D.g[2]=D.g[2]+O&4294967295,D.g[3]=D.g[3]+L&4294967295}i.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var A=S-this.blockSize,k=this.B,O=this.h,L=0;L<S;){if(O==0)for(;L<=A;)o(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<S;)if(k[O++]=D.charCodeAt(L++),O==this.blockSize){o(this,k),O=0;break}}else for(;L<S;)if(k[O++]=D[L++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var A=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=A&255,A/=256;for(this.u(D),D=Array(16),S=A=0;4>S;++S)for(var k=0;32>k;k+=8)D[A++]=this.g[S]>>>k&255;return D};function l(D,S){var A=f;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=S(D)}function h(D,S){this.h=S;for(var A=[],k=!0,O=D.length-1;0<=O;O--){var L=D[O]|0;k&&L==S||(A[O]=L,k=!1)}this.g=A}var f={};function p(D){return-128<=D&&128>D?l(D,function(S){return new h([S|0],0>S?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return M(_(-D));for(var S=[],A=1,k=0;D>=A;k++)S[k]=D/A|0,A*=4294967296;return new h(S,0)}function w(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return M(w(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(S,8)),k=T,O=0;O<D.length;O+=8){var L=Math.min(8,D.length-O),R=parseInt(D.substring(O,O+L),S);8>L?(L=_(Math.pow(S,L)),k=k.j(L).add(_(R))):(k=k.j(A),k=k.add(_(R)))}return k}var T=p(0),P=p(1),F=p(16777216);n=h.prototype,n.m=function(){if($(this))return-M(this).m();for(var D=0,S=1,A=0;A<this.g.length;A++){var k=this.i(A);D+=(0<=k?k:4294967296+k)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(z(this))return"0";if($(this))return"-"+M(this).toString(D);for(var S=_(Math.pow(D,6)),A=this,k="";;){var O=ae(A,S).g;A=re(A,O.j(S));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=O,z(A))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function z(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function $(D){return D.h==-1}n.l=function(D){return D=re(this,D),$(D)?-1:z(D)?0:1};function M(D){for(var S=D.g.length,A=[],k=0;k<S;k++)A[k]=~D.g[k];return new h(A,~D.h).add(P)}n.abs=function(){return $(this)?M(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],k=0,O=0;O<=S;O++){var L=k+(this.i(O)&65535)+(D.i(O)&65535),R=(L>>>16)+(this.i(O)>>>16)+(D.i(O)>>>16);k=R>>>16,L&=65535,R&=65535,A[O]=R<<16|L}return new h(A,A[A.length-1]&-2147483648?-1:0)};function re(D,S){return D.add(M(S))}n.j=function(D){if(z(this)||z(D))return T;if($(this))return $(D)?M(this).j(M(D)):M(M(this).j(D));if($(D))return M(this.j(M(D)));if(0>this.l(F)&&0>D.l(F))return _(this.m()*D.m());for(var S=this.g.length+D.g.length,A=[],k=0;k<2*S;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<D.g.length;O++){var L=this.i(k)>>>16,R=this.i(k)&65535,rt=D.i(O)>>>16,xt=D.i(O)&65535;A[2*k+2*O]+=R*xt,ie(A,2*k+2*O),A[2*k+2*O+1]+=L*xt,ie(A,2*k+2*O+1),A[2*k+2*O+1]+=R*rt,ie(A,2*k+2*O+1),A[2*k+2*O+2]+=L*rt,ie(A,2*k+2*O+2)}for(k=0;k<S;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=S;k<2*S;k++)A[k]=0;return new h(A,0)};function ie(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function ee(D,S){this.g=D,this.h=S}function ae(D,S){if(z(S))throw Error("division by zero");if(z(D))return new ee(T,T);if($(D))return S=ae(M(D),S),new ee(M(S.g),M(S.h));if($(S))return S=ae(D,M(S)),new ee(M(S.g),S.h);if(30<D.g.length){if($(D)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var A=P,k=S;0>=k.l(D);)A=Ce(A),k=Ce(k);var O=Ie(A,1),L=Ie(k,1);for(k=Ie(k,2),A=Ie(A,2);!z(k);){var R=L.add(k);0>=R.l(D)&&(O=O.add(A),L=R),k=Ie(k,1),A=Ie(A,1)}return S=re(D,O.j(S)),new ee(O,S)}for(O=T;0<=D.l(S);){for(A=Math.max(1,Math.floor(D.m()/S.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=_(A),R=L.j(S);$(R)||0<R.l(D);)A-=k,L=_(A),R=L.j(S);z(L)&&(L=P),O=O.add(L),D=re(D,R)}return new ee(O,D)}n.A=function(D){return ae(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)&D.i(k);return new h(A,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)|D.i(k);return new h(A,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)^D.i(k);return new h(A,this.h^D.h)};function Ce(D){for(var S=D.g.length+1,A=[],k=0;k<S;k++)A[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(A,D.h)}function Ie(D,S){var A=S>>5;S%=32;for(var k=D.g.length-A,O=[],L=0;L<k;L++)O[L]=0<S?D.i(L+A)>>>S|D.i(L+A+1)<<32-S:D.i(L+A);return new h(O,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,pv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,as=h}).apply(typeof ly<"u"?ly:typeof self<"u"?self:typeof window<"u"?window:{});var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mv,ba,gv,qu,qd,yv,_v,vv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,y){return u==Array.prototype||u==Object.prototype||(u[m]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof xu=="object"&&xu];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var y=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var V=u[E];if(!(V in y))break e;y=y[V]}u=u[u.length-1],E=y[u],m=m(E),m!=E&&m!=null&&e(y,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var y=0,E=!1,V={next:function(){if(!E&&y<u.length){var B=y++;return{value:m(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function _(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,y){return u.call.apply(u.bind,arguments)}function T(u,m,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,E),u.apply(m,V)}}return function(){return u.apply(m,arguments)}}function P(u,m,y){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,P.apply(null,arguments)}function F(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function z(u,m){function y(){}y.prototype=m.prototype,u.aa=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,V,B){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return m.prototype[V].apply(E,X)}}function $(u){const m=u.length;if(0<m){const y=Array(m);for(let E=0;E<m;E++)y[E]=u[E];return y}return[]}function M(u,m){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(p(E)){const V=u.length||0,B=E.length||0;u.length=V+B;for(let X=0;X<B;X++)u[V+X]=E[X]}else u.push(E)}}class re{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ie(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ae(u){return ae[" "](u),u}ae[" "]=function(){};var Ce=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function Ie(u,m,y){for(const E in u)m.call(y,u[E],E,u)}function D(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function S(u){const m={};for(const y in u)m[y]=u[y];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let y,E;for(let V=1;V<arguments.length;V++){E=arguments[V];for(y in E)u[y]=E[y];for(let B=0;B<A.length;B++)y=A[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function O(u){var m=1;u=u.split(":");const y=[];for(;0<m&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function L(u){f.setTimeout(()=>{throw u},0)}function R(){var u=fe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class rt{constructor(){this.h=this.g=null}add(m,y){const E=xt.get();E.set(m,y),this.h?this.h.next=E:this.g=E,this.h=E}}var xt=new re(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,J=!1,fe=new rt,ne=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(x)}};var x=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){L(y)}var m=xt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}J=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,m),f.removeEventListener("test",y,m)}catch{}return u}();function Re(u,m){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ce){e:{try{ae(m.nodeName);var V=!0;break e}catch{}V=!1}V||(m=null)}}else y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}z(Re,he);var De={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,m,y,E,V){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!E,this.ha=V,this.key=++Ue,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function hr(u){this.src=u,this.g={},this.h=0}hr.prototype.add=function(u,m,y,E,V){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var X=Ur(u,m,E,V);return-1<X?(m=u[X],y||(m.fa=!1)):(m=new $e(m,this.src,B,!!E,V),m.fa=y,u.push(m)),m};function Ts(u,m){var y=m.type;if(y in u.g){var E=u.g[y],V=Array.prototype.indexOf.call(E,m,void 0),B;(B=0<=V)&&Array.prototype.splice.call(E,V,1),B&&(vt(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Ur(u,m,y,E){for(var V=0;V<u.length;++V){var B=u[V];if(!B.da&&B.listener==m&&B.capture==!!y&&B.ha==E)return V}return-1}var Ni="closure_lm_"+(1e6*Math.random()|0),Is={};function Mo(u,m,y,E,V){if(Array.isArray(m)){for(var B=0;B<m.length;B++)Mo(u,m[B],y,E,V);return null}return y=jo(y),u&&u[Me]?u.K(m,y,_(E)?!!E.capture:!1,V):Uo(u,m,y,!1,E,V)}function Uo(u,m,y,E,V,B){if(!m)throw Error("Invalid event type");var X=_(V)?!!V.capture:!!V,Fe=Rs(u);if(Fe||(u[Ni]=Fe=new hr(u)),y=Fe.add(m,y,E,X,B),y.proxy)return y;if(E=gl(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Se||(V=X),V===void 0&&(V=!1),u.addEventListener(m.toString(),E,V);else if(u.attachEvent)u.attachEvent(fr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function gl(){function u(y){return m.call(u.src,u.listener,y)}const m=Fo;return u}function Ss(u,m,y,E,V){if(Array.isArray(m))for(var B=0;B<m.length;B++)Ss(u,m[B],y,E,V);else E=_(E)?!!E.capture:!!E,y=jo(y),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(B=u.g[m],y=Ur(B,y,E,V),-1<y&&(vt(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[m],u.h--)))):u&&(u=Rs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Ur(m,y,E,V)),(y=-1<u?m[u]:null)&&dr(y))}function dr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Ts(m.i,u);else{var y=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(y,E,u.capture):m.detachEvent?m.detachEvent(fr(y),E):m.addListener&&m.removeListener&&m.removeListener(E),(y=Rs(m))?(Ts(y,u),y.h==0&&(y.src=null,m[Ni]=null)):vt(u)}}}function fr(u){return u in Is?Is[u]:Is[u]="on"+u}function Fo(u,m){if(u.da)u=!0;else{m=new Re(m,this);var y=u.listener,E=u.ha||u.src;u.fa&&dr(u),u=y.call(E,m)}return u}function Rs(u){return u=u[Ni],u instanceof hr?u:null}var As="__closure_events_fn_"+(1e9*Math.random()>>>0);function jo(u){return typeof u=="function"?u:(u[As]||(u[As]=function(m){return u.handleEvent(m)}),u[As])}function dt(){W.call(this),this.i=new hr(this),this.M=this,this.F=null}z(dt,W),dt.prototype[Me]=!0,dt.prototype.removeEventListener=function(u,m,y,E){Ss(this,u,m,y,E)};function ft(u,m){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new he(m,u);else if(m instanceof he)m.target=m.target||u;else{var V=m;m=new he(E,u),k(m,V)}if(V=!0,y)for(var B=y.length-1;0<=B;B--){var X=m.g=y[B];V=pr(X,E,!0,m)&&V}if(X=m.g=u,V=pr(X,E,!0,m)&&V,V=pr(X,E,!1,m)&&V,y)for(B=0;B<y.length;B++)X=m.g=y[B],V=pr(X,E,!1,m)&&V}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var y=u.g[m],E=0;E<y.length;E++)vt(y[E]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,y,E){return this.i.add(String(u),m,!1,y,E)},dt.prototype.L=function(u,m,y,E){return this.i.add(String(u),m,!0,y,E)};function pr(u,m,y,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var V=!0,B=0;B<m.length;++B){var X=m[B];if(X&&!X.da&&X.capture==y){var Fe=X.listener,pt=X.ha||X.src;X.fa&&Ts(u.i,X),V=Fe.call(pt,E)!==!1&&V}}return V&&!E.defaultPrevented}function Bo(u,m,y){if(typeof u=="function")y&&(u=P(u,y));else if(u&&typeof u.handleEvent=="function")u=P(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Fr(u){u.g=Bo(()=>{u.g=null,u.i&&(u.i=!1,Fr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Di extends W{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Fr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(u){W.call(this),this.h=u,this.g={}}z(Oi,W);var zo=[];function $o(u){Ie(u.g,function(m,y){this.g.hasOwnProperty(y)&&dr(m)},u),u.g={}}Oi.prototype.N=function(){Oi.aa.N.call(this),$o(this)},Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wo=f.JSON.stringify,qo=f.JSON.parse,Ho=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function xi(){}xi.prototype.h=null;function Cs(u){return u.h||(u.h=u.i())}function Ps(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){he.call(this,"d")}z(Hn,he);function ks(){he.call(this,"c")}z(ks,he);var Kn={},Ko=null;function Li(){return Ko=Ko||new dt}Kn.La="serverreachability";function Go(u){he.call(this,Kn.La,u)}z(Go,he);function mr(u){const m=Li();ft(m,new Go(m))}Kn.STAT_EVENT="statevent";function Qo(u,m){he.call(this,Kn.STAT_EVENT,u),this.stat=m}z(Qo,he);function it(u){const m=Li();ft(m,new Qo(m,u))}Kn.Ma="timingevent";function Ns(u,m){he.call(this,Kn.Ma,u),this.size=m}z(Ns,he);function Cn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function bi(u,m,y,E,V,B){u.info(function(){if(u.g)if(B)for(var X="",Fe=B.split("&"),pt=0;pt<Fe.length;pt++){var Oe=Fe[pt].split("=");if(1<Oe.length){var wt=Oe[0];Oe=Oe[1];var lt=wt.split("_");X=2<=lt.length&&lt[1]=="type"?X+(wt+"="+Oe+"&"):X+(wt+"=redacted&")}}else X=null;else X=B;return"XMLHTTP REQ ("+E+") [attempt "+V+"]: "+m+`
`+y+`
`+X})}function Ds(u,m,y,E,V,B,X){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+V+"]: "+m+`
`+y+`
`+B+" "+X})}function Pn(u,m,y,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Fc(u,y)+(E?" "+E:"")})}function Yo(u,m){u.info(function(){return"TIMEOUT: "+m})}Vi.prototype.info=function(){};function Fc(u,m){if(!u.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var V=E[1];if(Array.isArray(V)&&!(1>V.length)){var B=V[0];if(B!="noop"&&B!="stop"&&B!="close")for(var X=1;X<V.length;X++)V[X]=""}}}}return Wo(y)}catch{return m}}var Os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kn;function Mi(){}z(Mi,xi),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},kn=new Mi;function Nn(u,m,y,E){this.j=u,this.i=m,this.l=y,this.R=E||1,this.U=new Oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _l}function _l(){this.i=null,this.g="",this.h=!1}var Xo={},xs={};function Ls(u,m,y){u.L=1,u.v=Wr(on(m)),u.m=y,u.P=!0,Jo(u,null)}function Jo(u,m){u.F=Date.now(),We(u),u.A=on(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Hr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new _l,u.g=bl(u.j,y?m:null,!u.m),0<u.O&&(u.M=new Di(P(u.Y,u,u.g),u.O)),m=u.U,y=u.g,E=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(zo[0]=V.toString()),V=zo);for(var B=0;B<V.length;B++){var X=Mo(y,V[B],E||m.handleEvent,!1,m.h||m);if(!X)break;m.g[X.key]=X}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),mr(),bi(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Qt(u)==3?m.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Qt(this.g);var m=this.g.Ba();const yn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ia(this.g)))){this.J||lt!=4||m==7||(m==8||0>=yn?mr(3):mr(2)),Ui(this);var y=this.g.Z();this.X=y;t:if(vl(this)){var E=ia(this.g);u="";var V=E.length,B=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),jr(this);var X="";break t}this.h.i=new f.TextDecoder}for(m=0;m<V;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(B&&m==V-1)});E.length=0,this.h.g+=u,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,Ds(this.i,this.u,this.A,this.l,this.R,lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,pt=this.g;if((Fe=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Fe)){var Oe=Fe;break t}}Oe=null}if(y=Oe)Pn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zo(this,y);else{this.o=!1,this.s=3,it(12),mn(this),jr(this);break e}}if(this.P){y=!0;let ln;for(;!this.J&&this.C<X.length;)if(ln=jc(this,X),ln==xs){lt==4&&(this.s=4,it(14),y=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Xo){this.s=4,it(15),Pn(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else Pn(this.i,this.l,ln,null),Zo(this,ln);if(vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||X.length!=0||this.h.h||(this.s=1,it(16),y=!1),this.o=this.o&&y,!y)Pn(this.i,this.l,X,"[Invalid Chunked Response]"),mn(this),jr(this);else if(0<X.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),oa(wt),wt.M=!0,it(11))}}else Pn(this.i,this.l,X,null),Zo(this,X);lt==4&&mn(this),this.o&&!this.J&&(lt==4?qs(this.j,this):(this.o=!1,We(this)))}else js(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),mn(this),jr(this)}}}catch{}finally{}};function vl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jc(u,m){var y=u.C,E=m.indexOf(`
`,y);return E==-1?xs:(y=Number(m.substring(y,E)),isNaN(y)?Xo:(E+=1,E+y>m.length?xs:(m=m.slice(E,E+y),u.C=E+y,m)))}Nn.prototype.cancel=function(){this.J=!0,mn(this)};function We(u){u.S=Date.now()+u.I,wl(u,u.I)}function wl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(P(u.ba,u),m)}function Ui(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Yo(this.i,this.A),this.L!=2&&(mr(),it(17)),mn(this),this.s=2,jr(this)):wl(this,this.S-u)};function jr(u){u.j.G==0||u.J||qs(u.j,u)}function mn(u){Ui(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,$o(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Zo(u,m){try{var y=u.j;if(y.G!=0&&(y.g==u||$t(y.h,u))){if(!u.K&&$t(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var V=E;if(V[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ws(y),Vn(y);else break e;$s(y),it(18)}}else y.za=V[1],0<y.za-y.T&&37500>V[2]&&y.F&&y.v==0&&!y.C&&(y.C=Cn(P(y.Za,y),6e3));if(1>=Tl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else wr(y,11)}else if((u.K||y.g==u)&&Ws(y),!ie(m))for(V=y.Da.g.parse(m),m=0;m<V.length;m++){let Oe=V[m];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const wt=Oe[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const lt=Oe[4];lt!=null&&(y.Aa=lt,y.j.info("SVER="+y.Aa));const yn=Oe[5];yn!=null&&typeof yn=="number"&&0<yn&&(E=1.5*yn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const ln=u.g;if(ln){const qi=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var B=E.h;B.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(ea(B,B.h),B.h=null))}if(E.D){const Ks=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Ks&&(E.ya=Ks,ze(E.I,E.D,Ks))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var X=u;if(E.qa=Vl(E,E.J?E.ia:null,E.W),X.K){Il(E.h,X);var Fe=X,pt=E.L;pt&&(Fe.I=pt),Fe.B&&(Ui(Fe),We(Fe)),E.g=X}else Wi(E);0<y.i.length&&Xn(y)}else Oe[0]!="stop"&&Oe[0]!="close"||wr(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?wr(y,7):At(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}mr(4)}catch{}}var El=class{constructor(u,m){this.g=u,this.map=m}};function Fi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Tl(u){return u.h?1:u.g?u.g.size:0}function $t(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ea(u,m){u.g?u.g.add(m):u.h=m}function Il(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Fi.prototype.cancel=function(){if(this.i=Sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Sl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.D);return m}return $(u.i)}function Vs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],y=u.length,E=0;E<y;E++)m.push(u[E]);return m}m=[],y=0;for(E in u)m[y++]=u[E];return m}function bs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var y=0;y<u;y++)m.push(y);return m}m=[],y=0;for(const E in u)m[y++]=E;return m}}}function Br(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var y=bs(u),E=Vs(u),V=E.length,B=0;B<V;B++)m.call(void 0,E[B],y&&y[B],u)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bc(u,m){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),V=null;if(0<=E){var B=u[y].substring(0,E);V=u[y].substring(E+1)}else B=u[y];m(B,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function gr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof gr){this.h=u.h,Bi(this,u.j),this.o=u.o,this.g=u.g,zr(this,u.s),this.l=u.l;var m=u.i,y=new Gn;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),$r(this,y),this.m=u.m}else u&&(m=String(u).match(ji))?(this.h=!1,Bi(this,m[1]||"",!0),this.o=ke(m[2]||""),this.g=ke(m[3]||"",!0),zr(this,m[4]),this.l=ke(m[5]||"",!0),$r(this,m[6]||"",!0),this.m=ke(m[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}gr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(qr(m,Ms,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(qr(m,Ms,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(qr(y,y.charAt(0)=="/"?Cl:Al,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",qr(y,ta)),u.join("")};function on(u){return new gr(u)}function Bi(u,m,y){u.j=y?ke(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function zr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function $r(u,m,y){m instanceof Gn?(u.i=m,Qn(u.i,u.h)):(y||(m=qr(m,Pl)),u.i=new Gn(m,u.h))}function ze(u,m,y){u.i.set(m,y)}function Wr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function qr(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,Rl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Rl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ms=/[#\/\?@]/g,Al=/[#\?:]/g,Cl=/[#\?]/g,Pl=/[#\?@]/g,ta=/#/g;function Gn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&Bc(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}n=Gn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=gn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function Dn(u,m){Rt(u),m=gn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function On(u,m){return Rt(u),m=gn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(y,E){y.forEach(function(V){u.call(m,V,E,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let E=0;E<m.length;E++){const V=u[E];for(let B=0;B<V.length;B++)y.push(m[E])}return y},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")On(this,u)&&(m=m.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)m=m.concat(u[y])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=gn(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Hr(u,m,y){Dn(u,m),0<y.length&&(u.i=null,u.g.set(gn(u,m),$(y)),u.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var E=m[y];const B=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var V=B;X[E]!==""&&(V+="="+encodeURIComponent(String(X[E]))),u.push(V)}}return this.i=u.join("&")};function gn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Qn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(y,E){var V=E.toLowerCase();E!=V&&(Dn(this,E),Hr(this,V,y))},u)),u.j=m}function zc(u,m){const y=new Vi;if(f.Image){const E=new Image;E.onload=F(Gt,y,"TestLoadImage: loaded",!0,m,E),E.onerror=F(Gt,y,"TestLoadImage: error",!1,m,E),E.onabort=F(Gt,y,"TestLoadImage: abort",!1,m,E),E.ontimeout=F(Gt,y,"TestLoadImage: timeout",!1,m,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function kl(u,m){const y=new Vi,E=new AbortController,V=setTimeout(()=>{E.abort(),Gt(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(V),B.ok?Gt(y,"TestPingServer: ok",!0,m):Gt(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(V),Gt(y,"TestPingServer: error",!1,m)})}function Gt(u,m,y,E,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),E(y)}catch{}}function $c(){this.g=new Ho}function Nl(u,m,y){const E=y||"";try{Br(u,function(V,B){let X=V;_(V)&&(X=Wo(V)),m.push(E+B+"="+encodeURIComponent(X))})}catch(V){throw m.push(E+"type="+encodeURIComponent("_badmap")),V}}function yr(u){this.l=u.Ub||null,this.j=u.eb||!1}z(yr,xi),yr.prototype.g=function(){return new zi(this.l,this.j)},yr.prototype.i=function(u){return function(){return u}}({});function zi(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(zi,dt),n=zi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?xn(this):Ln(this),this.readyState==3&&Dl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,xn(this))},n.Qa=function(u){this.g&&(this.response=u,xn(this))},n.ga=function(){this.g&&xn(this)};function xn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function _r(u){let m="";return Ie(u,function(y,E){m+=E,m+=":",m+=y,m+=`\r
`}),m}function Kr(u,m,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=_r(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,m,y))}function Ge(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Ge,dt);var Wc=/^https?$/i,na=["POST","PUT"];n=Ge.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?Cs(this.o):Cs(kn),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){$i(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var V in E)y.set(V,E[V]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),V=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(na,m,void 0))||E||V||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,X]of y)this.g.setRequestHeader(B,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){$i(this,B)}};function $i(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Us(u),an(u)}function Us(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),an(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ra(this):this.bb())},n.bb=function(){ra(this)};function ra(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Qt(u)!=4||u.Z()!=2)){if(u.u&&Qt(u)==4)Bo(u.Ea,0,u);else if(ft(u,"readystatechange"),Qt(u)==4){u.h=!1;try{const X=u.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var E;if(E=X===0){var V=String(u.D).match(ji)[1]||null;!V&&f.self&&f.self.location&&(V=f.self.location.protocol.slice(0,-1)),E=!Wc.test(V?V.toLowerCase():"")}y=E}if(y)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var B=2<Qt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Us(u)}}finally{an(u)}}}}function an(u,m){if(u.g){Fs(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ft(u,"ready");try{y.onreadystatechange=E}catch{}}}function Fs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Qt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),qo(m)}};function ia(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function js(u){const m={};u=(u.g&&2<=Qt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ie(u[E]))continue;var y=O(u[E]);const V=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=m[V]||[];m[V]=B,B.push(y)}D(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function sa(u){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,u),this.cb=Yn("retryDelaySeedMs",1e4,u),this.Wa=Yn("forwardChannelMaxRetries",2,u),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Fi(u&&u.concurrentRequestLimit),this.Da=new $c,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=sa.prototype,n.la=8,n.G=1,n.connect=function(u,m,y,E){it(0),this.W=u,this.H=m||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Vl(this,null,this.W),Xn(this)};function At(u){if(Bs(u),u.G==3){var m=u.U++,y=on(u.I);if(ze(y,"SID",u.K),ze(y,"RID",m),ze(y,"TYPE","terminate"),vr(u,y),m=new Nn(u,u.j,m),m.L=2,m.v=Wr(on(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=m.v,y=!0),y||(m.g=bl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),We(m)}Ll(u)}function Vn(u){u.g&&(oa(u),u.g.cancel(),u.g=null)}function Bs(u){Vn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ws(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Xn(u){if(!sn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||ne(),J||(Be(),J=!0),fe.add(m,u),u.B=0}}function qc(u,m){return Tl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(P(u.Ga,u,m),xl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new Nn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(V.H=B,B=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=Gr(this,V,m),y=on(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),vr(this,y),B&&(this.O?m="headers="+encodeURIComponent(String(_r(B)))+"&"+m:this.m&&Kr(y,this.m,B)),ea(this.h,V),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",m),ze(y,"SID","null"),V.T=!0,Ls(V,y,null)):Ls(V,y,m),this.G=2}}else this.G==3&&(u?zs(this,u):this.i.length==0||sn(this.h)||zs(this))};function zs(u,m){var y;m?y=m.l:y=u.U++;const E=on(u.I);ze(E,"SID",u.K),ze(E,"RID",y),ze(E,"AID",u.T),vr(u,E),u.m&&u.o&&Kr(E,u.m,u.o),y=new Nn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Gr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ea(u.h,y),Ls(y,E,m)}function vr(u,m){u.H&&Ie(u.H,function(y,E){ze(m,E,y)}),u.l&&Br({},function(y,E){ze(m,E,y)})}function Gr(u,m,y){y=Math.min(u.i.length,y);var E=u.l?P(u.l.Na,u.l,u):null;e:{var V=u.i;let B=-1;for(;;){const X=["count="+y];B==-1?0<y?(B=V[0].g,X.push("ofs="+B)):B=0:X.push("ofs="+B);let Fe=!0;for(let pt=0;pt<y;pt++){let Oe=V[pt].g;const wt=V[pt].map;if(Oe-=B,0>Oe)B=Math.max(0,V[pt].g-100),Fe=!1;else try{Nl(wt,X,"req"+Oe+"_")}catch{E&&E(wt)}}if(Fe){E=X.join("&");break e}}}return u=u.i.splice(0,y),m.D=u,E}function Wi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||ne(),J||(Be(),J=!0),fe.add(m,u),u.v=0}}function $s(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(P(u.Fa,u),xl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ol(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(P(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Vn(this),Ol(this))};function oa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ol(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=on(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),vr(u,m),u.m&&u.o&&Kr(m,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Wr(on(m)),y.m=null,y.P=!0,Jo(y,u)}n.Za=function(){this.C!=null&&(this.C=null,Vn(this),$s(this),it(19))};function Ws(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function qs(u,m){var y=null;if(u.g==m){Ws(u),oa(u),u.g=null;var E=2}else if($t(u.h,m))y=m.D,Il(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var V=u.B;E=Li(),ft(E,new Ns(E,y)),Xn(u)}else Wi(u);else if(V=m.s,V==3||V==0&&0<m.X||!(E==1&&qc(u,m)||E==2&&$s(u)))switch(y&&0<y.length&&(m=u.h,m.i=m.i.concat(y)),V){case 1:wr(u,5);break;case 4:wr(u,10);break;case 3:wr(u,6);break;default:wr(u,2)}}}function xl(u,m){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*m}function wr(u,m){if(u.j.info("Error code "+m),m==2){var y=P(u.fb,u),E=u.Xa;const V=!E;E=new gr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Bi(E,"https"),Wr(E),V?zc(E.toString(),y):kl(E.toString(),y)}else it(2);u.G=0,u.l&&u.l.sa(m),Ll(u),Bs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Ll(u){if(u.G=0,u.ka=[],u.l){const m=Sl(u.h);(m.length!=0||u.i.length!=0)&&(M(u.ka,m),M(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Vl(u,m,y){var E=y instanceof gr?on(y):new gr(y);if(E.g!="")m&&(E.g=m+"."+E.g),zr(E,E.s);else{var V=f.location;E=V.protocol,m=m?m+"."+V.hostname:V.hostname,V=+V.port;var B=new gr(null);E&&Bi(B,E),m&&(B.g=m),V&&zr(B,V),y&&(B.l=y),E=B}return y=u.D,m=u.ya,y&&m&&ze(E,y,m),ze(E,"VER",u.la),vr(u,E),E}function bl(u,m,y){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new yr({eb:y})):new Ge(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function aa(){}n=aa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hs(){}Hs.prototype.g=function(u,m){return new Wt(u,m)};function Wt(u,m){dt.call(this),this.g=new sa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ie(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ie(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Jn(this)}z(Wt,dt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){At(this.g)},Wt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Wo(u),u=y);m.i.push(new El(m.Ya++,u)),m.G==3&&Xn(m)},Wt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,Wt.aa.N.call(this)};function Ml(u){Hn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const y in m){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}z(Ml,Hn);function Ul(){ks.call(this),this.status=1}z(Ul,ks);function Jn(u){this.g=u}z(Jn,aa),Jn.prototype.ua=function(){ft(this.g,"a")},Jn.prototype.ta=function(u){ft(this.g,new Ml(u))},Jn.prototype.sa=function(u){ft(this.g,new Ul)},Jn.prototype.ra=function(){ft(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,vv=function(){return new Hs},_v=function(){return Li()},yv=Kn,qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Os.NO_ERROR=0,Os.TIMEOUT=8,Os.HTTP_ERROR=6,qu=Os,yl.COMPLETE="complete",gv=yl,Ps.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,ba=Ps,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,mv=Ge}).apply(typeof xu<"u"?xu:typeof self<"u"?self:typeof window<"u"?window:{});const uy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new vc("@firebase/firestore");function Oa(){return hs.logLevel}function ue(n,...e){if(hs.logLevel<=Ne.DEBUG){const t=e.map(If);hs.debug(`Firestore (${xo}): ${n}`,...t)}}function br(n,...e){if(hs.logLevel<=Ne.ERROR){const t=e.map(If);hs.error(`Firestore (${xo}): ${n}`,...t)}}function Io(n,...e){if(hs.logLevel<=Ne.WARN){const t=e.map(If);hs.warn(`Firestore (${xo}): ${n}`,...t)}}function If(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n="Unexpected state"){const e=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: `+n;throw br(e),new Error(e)}function je(n,e){n||we()}function Te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends An{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(jt.UNAUTHENTICATED))}shutdown(){}}class kA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class NA{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new wi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new wi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string"),new wv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new jt(e)}}class DA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OA{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new DA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){je(this.o===void 0);const i=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string"),this.R=t.token,new xA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=VA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function be(n,e){return n<e?-1:n>e?1:0}function So(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new de(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _t(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new _t(0,0))}static max(){return new Ee(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ja.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ja?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends Ja{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new de(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const bA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends Ja{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return bA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new de(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new de(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new de(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new de(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Ye.fromString(e))}static fromName(e){return new ye(Ye.fromString(e).popFirst(5))}static empty(){return new ye(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Ye(e.slice()))}}function MA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new Ti(o,ye.empty(),e)}function UA(n){return new Ti(n.readTime,n.key,-1)}class Ti{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ti(Ee.min(),ye.empty(),-1)}static max(){return new Ti(Ee.max(),ye.empty(),-1)}}function FA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==jA)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(o=>o?K.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new K((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const _=p;t(e[_]).next(w=>{h[_]=w,++f,f===l&&i(h)},w=>o(w))}})}static doWhile(e,t){return new K((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function zA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sf.oe=-1;function Sc(n){return n==null}function ic(n){return n===0&&1/n==-1/0}function $A(n){return typeof n=="number"&&Number.isInteger(n)&&!ic(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Lo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Tv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lu(this.root,e,this.comparator,!0)}}class Lu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new kt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,o,l){return this}insert(e,t,i){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hy(this.data.getIterator())}getIteratorFrom(e){return new hy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Dt(this.comparator);return t.data=e,t}}class hy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new Dt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return So(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Iv("Invalid base64 string: "+l):l}}(e);return new Ot(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const WA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(n){if(je(!!n),typeof n=="string"){let e=0;const t=WA.exec(n);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ds(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Af(n){const e=n.mapValue.fields.__previous_value__;return Rf(e)?Af(e):e}function Za(n){const e=Ii(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,t,i,o,l,h,f,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=_}}class el{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new el("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof el&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu={mapValue:{}};function fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Rf(n)?4:KA(n)?9007199254740991:HA(n)?10:11:we()}function ur(n,e){if(n===e)return!0;const t=fs(n);if(t!==fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Za(n).isEqual(Za(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ii(o.timestampValue),f=Ii(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return ds(o.bytesValue).isEqual(ds(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return ot(o.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ot(o.integerValue)===ot(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ot(o.doubleValue),f=ot(l.doubleValue);return h===f?ic(h)===ic(f):isNaN(h)&&isNaN(f)}return!1}(n,e);case 9:return So(n.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(cy(h)!==cy(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!ur(h[p],f[p])))return!1;return!0}(n,e);default:return we()}}function tl(n,e){return(n.values||[]).find(t=>ur(t,e))!==void 0}function Ro(n,e){if(n===e)return 0;const t=fs(n),i=fs(e);if(t!==i)return be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return function(l,h){const f=ot(l.integerValue||l.doubleValue),p=ot(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(n,e);case 3:return dy(n.timestampValue,e.timestampValue);case 4:return dy(Za(n),Za(e));case 5:return be(n.stringValue,e.stringValue);case 6:return function(l,h){const f=ds(l),p=ds(h);return f.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),p=h.split("/");for(let _=0;_<f.length&&_<p.length;_++){const w=be(f[_],p[_]);if(w!==0)return w}return be(f.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const f=be(ot(l.latitude),ot(h.latitude));return f!==0?f:be(ot(l.longitude),ot(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return fy(n.arrayValue,e.arrayValue);case 10:return function(l,h){var f,p,_,w;const T=l.fields||{},P=h.fields||{},F=(f=T.value)===null||f===void 0?void 0:f.arrayValue,z=(p=P.value)===null||p===void 0?void 0:p.arrayValue,$=be(((_=F==null?void 0:F.values)===null||_===void 0?void 0:_.length)||0,((w=z==null?void 0:z.values)===null||w===void 0?void 0:w.length)||0);return $!==0?$:fy(F,z)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===Vu.mapValue&&h===Vu.mapValue)return 0;if(l===Vu.mapValue)return 1;if(h===Vu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),_=h.fields||{},w=Object.keys(_);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const P=be(p[T],w[T]);if(P!==0)return P;const F=Ro(f[p[T]],_[w[T]]);if(F!==0)return F}return be(p.length,w.length)}(n.mapValue,e.mapValue);default:throw we()}}function dy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=Ii(n),i=Ii(e),o=be(t.seconds,i.seconds);return o!==0?o:be(t.nanos,i.nanos)}function fy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Ro(t[o],i[o]);if(l)return l}return be(t.length,i.length)}function Ao(n){return Hd(n)}function Hd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ii(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ds(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Hd(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Hd(t.fields[h])}`;return o+"}"}(n.mapValue):we()}function Kd(n){return!!n&&"integerValue"in n}function Cf(n){return!!n&&"arrayValue"in n}function py(n){return!!n&&"nullValue"in n}function my(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hu(n){return!!n&&"mapValue"in n}function HA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ja(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Lo(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ja(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ja(n.arrayValue.values[t]);return e}return Object.assign({},n)}function KA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Hu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ja(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=ja(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Hu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Hu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Lo(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Sn(ja(this.value))}}function Sv(n){const e=[];return Lo(n.fields,(t,i)=>{const o=new Nt([t]);if(Hu(i)){const l=Sv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Ee.min(),Ee.min(),Ee.min(),Sn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ee.min(),Ee.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ee.min(),Ee.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.position=e,this.inclusive=t}}function gy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(h.referenceValue),t.key):i=Ro(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function yy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ur(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t="asc"){this.field=e,this.dir=t}}function GA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{}class yt extends Rv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new YA(e,t,i):t==="array-contains"?new ZA(e,i):t==="in"?new eC(e,i):t==="not-in"?new tC(e,i):t==="array-contains-any"?new nC(e,i):new yt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new XA(e,i):new JA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ro(t,this.value)):t!==null&&fs(this.value)===fs(t)&&this.matchesComparison(Ro(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends Rv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new cr(e,t)}matches(e){return Av(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Av(n){return n.op==="and"}function Cv(n){return QA(n)&&Av(n)}function QA(n){for(const e of n.filters)if(e instanceof cr)return!1;return!0}function Gd(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+Ao(n.value);if(Cv(n))return n.filters.map(e=>Gd(e)).join(",");{const e=n.filters.map(t=>Gd(t)).join(",");return`${n.op}(${e})`}}function Pv(n,e){return n instanceof yt?function(i,o){return o instanceof yt&&i.op===o.op&&i.field.isEqual(o.field)&&ur(i.value,o.value)}(n,e):n instanceof cr?function(i,o){return o instanceof cr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,f)=>l&&Pv(h,o.filters[f]),!0):!1}(n,e):void we()}function kv(n){return n instanceof yt?function(t){return`${t.field.canonicalString()} ${t.op} ${Ao(t.value)}`}(n):n instanceof cr?function(t){return t.op.toString()+" {"+t.getFilters().map(kv).join(" ,")+"}"}(n):"Filter"}class YA extends yt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class XA extends yt{constructor(e,t){super(e,"in",t),this.keys=Nv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class JA extends yt{constructor(e,t){super(e,"not-in",t),this.keys=Nv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Nv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class ZA extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cf(t)&&tl(t.arrayValue,this.value)}}class eC extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tl(this.value.arrayValue,t)}}class tC extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!tl(this.value.arrayValue,t)}}class nC extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>tl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function _y(n,e=null,t=[],i=[],o=null,l=null,h=null){return new rC(n,e,t,i,o,l,h)}function Pf(n){const e=Te(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Gd(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Sc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Ao(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Ao(i)).join(",")),e.ue=t}return e.ue}function kf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!GA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yy(n.startAt,e.startAt)&&yy(n.endAt,e.endAt)}function Qd(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iC(n,e,t,i,o,l,h,f){return new Rc(n,e,t,i,o,l,h,f)}function Dv(n){return new Rc(n)}function vy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sC(n){return n.collectionGroup!==null}function Ba(n){const e=Te(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Dt(Nt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(_=>{_.isInequality()&&(f=f.add(_.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new oc(l,i))}),t.has(Nt.keyField().canonicalString())||e.ce.push(new oc(Nt.keyField(),i))}return e.ce}function ar(n){const e=Te(n);return e.le||(e.le=oC(e,Ba(n))),e.le}function oC(n,e){if(n.limitType==="F")return _y(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new oc(o.field,l)});const t=n.endAt?new sc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new sc(n.startAt.position,n.startAt.inclusive):null;return _y(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Yd(n,e,t){return new Rc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ac(n,e){return kf(ar(n),ar(e))&&n.limitType===e.limitType}function Ov(n){return`${Pf(ar(n))}|lt:${n.limitType}`}function mo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>kv(o)).join(", ")}]`),Sc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Ao(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Ao(o)).join(",")),`Target(${i})`}(ar(n))}; limitType=${n.limitType})`}function Cc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Ba(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,f,p){const _=gy(h,f,p);return h.inclusive?_<=0:_<0}(i.startAt,Ba(i),o)||i.endAt&&!function(h,f,p){const _=gy(h,f,p);return h.inclusive?_>=0:_>0}(i.endAt,Ba(i),o))}(n,e)}function aC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xv(n){return(e,t)=>{let i=!1;for(const o of Ba(n)){const l=lC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function lC(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,h,f){const p=h.data.field(l),_=f.data.field(l);return p!==null&&_!==null?Ro(p,_):we()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Lo(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Tv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=new Ze(ye.comparator);function Mr(){return uC}const Lv=new Ze(ye.comparator);function Ma(...n){let e=Lv;for(const t of n)e=e.insert(t.key,t);return e}function Vv(n){let e=Lv;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ss(){return za()}function bv(){return za()}function za(){return new Vo(n=>n.toString(),(n,e)=>n.isEqual(e))}const cC=new Ze(ye.comparator),hC=new Dt(ye.comparator);function Pe(...n){let e=hC;for(const t of n)e=e.add(t);return e}const dC=new Dt(be);function fC(){return dC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function Mv(n){return{integerValue:""+n}}function pC(n,e){return $A(e)?Mv(e):Nf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this._=void 0}}function mC(n,e,t){return n instanceof ac?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Rf(l)&&(l=Af(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof nl?Fv(n,e):n instanceof rl?jv(n,e):function(o,l){const h=Uv(o,l),f=wy(h)+wy(o.Pe);return Kd(h)&&Kd(o.Pe)?Mv(f):Nf(o.serializer,f)}(n,e)}function gC(n,e,t){return n instanceof nl?Fv(n,e):n instanceof rl?jv(n,e):t}function Uv(n,e){return n instanceof lc?function(i){return Kd(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class ac extends Pc{}class nl extends Pc{constructor(e){super(),this.elements=e}}function Fv(n,e){const t=Bv(e);for(const i of n.elements)t.some(o=>ur(o,i))||t.push(i);return{arrayValue:{values:t}}}class rl extends Pc{constructor(e){super(),this.elements=e}}function jv(n,e){let t=Bv(e);for(const i of n.elements)t=t.filter(o=>!ur(o,i));return{arrayValue:{values:t}}}class lc extends Pc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function wy(n){return ot(n.integerValue||n.doubleValue)}function Bv(n){return Cf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function yC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof nl&&o instanceof nl||i instanceof rl&&o instanceof rl?So(i.elements,o.elements,ur):i instanceof lc&&o instanceof lc?ur(i.Pe,o.Pe):i instanceof ac&&o instanceof ac}(n.transform,e.transform)}class _C{constructor(e,t){this.version=e,this.transformResults=t}}class xr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xr}static exists(e){return new xr(void 0,e)}static updateTime(e){return new xr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ku(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class kc{}function zv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wv(n.key,xr.none()):new dl(n.key,n.data,xr.none());{const t=n.data,i=Sn.empty();let o=new Dt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new ws(n.key,i,new zn(o.toArray()),xr.none())}}function vC(n,e,t){n instanceof dl?function(o,l,h){const f=o.value.clone(),p=Ty(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(n,e,t):n instanceof ws?function(o,l,h){if(!Ku(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Ty(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll($v(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function $a(n,e,t,i){return n instanceof dl?function(l,h,f,p){if(!Ku(l.precondition,h))return f;const _=l.value.clone(),w=Iy(l.fieldTransforms,p,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(n,e,t,i):n instanceof ws?function(l,h,f,p){if(!Ku(l.precondition,h))return f;const _=Iy(l.fieldTransforms,p,h),w=h.data;return w.setAll($v(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,f){return Ku(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(n,e,t)}function wC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Uv(i.transform,o||null);l!=null&&(t===null&&(t=Sn.empty()),t.set(i.field,l))}return t||null}function Ey(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&So(i,o,(l,h)=>yC(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dl extends kc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ws extends kc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function $v(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Ty(n,e,t){const i=new Map;je(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,gC(h,f,t[o]))}return i}function Iy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,mC(l,h,e))}return i}class Wv extends kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EC extends kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&vC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=$a(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=$a(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=bv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=zv(h,f);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&So(this.mutations,e.mutations,(t,i)=>Ey(t,i))&&So(this.baseMutations,e.baseMutations,(t,i)=>Ey(t,i))}}class Df{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length);let o=function(){return cC}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Df(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,xe;function RC(n){switch(n){default:return we();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function qv(n){if(n===void 0)return br("GRPC error has no .code"),G.UNKNOWN;switch(n){case ct.OK:return G.OK;case ct.CANCELLED:return G.CANCELLED;case ct.UNKNOWN:return G.UNKNOWN;case ct.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ct.INTERNAL:return G.INTERNAL;case ct.UNAVAILABLE:return G.UNAVAILABLE;case ct.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ct.NOT_FOUND:return G.NOT_FOUND;case ct.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ct.ABORTED:return G.ABORTED;case ct.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ct.DATA_LOSS:return G.DATA_LOSS;default:return we()}}(xe=ct||(ct={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=new as([4294967295,4294967295],0);function Sy(n){const e=AC().encode(n),t=new pv;return t.update(e),new Uint8Array(t.digest())}function Ry(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new as([t,i],0),new as([o,l],0)]}class Of{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ua(`Invalid padding: ${t}`);if(i<0)throw new Ua(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=as.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(as.fromNumber(i)));return o.compare(CC)===1&&(o=new as([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Sy(e),[i,o]=Ry(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Of(l,o,t);return i.forEach(f=>h.insert(f)),h}insert(e){if(this.Ie===0)return;const t=Sy(e),[i,o]=Ry(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Nc(Ee.min(),o,new Ze(be),Mr(),Pe())}}class fl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new fl(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Hv{constructor(e,t){this.targetId=e,this.me=t}}class Kv{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Ay{constructor(){this.fe=0,this.ge=Py(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we()}}),new fl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Py()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mr(),this.qe=Cy(),this.Qe=new Ze(be)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const l=o.target;if(Qd(l))if(i===0){const h=new ye(l.path);this.Ue(t,h,Bt.newNoDocument(h,Ee.min()))}else je(i===1);else{const h=this.Ye(t);if(h!==i){const f=this.Ze(e),p=f?this.Xe(f,e,h):1;if(p!==0){this.je(t);const _=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,_)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=ds(i).toUint8Array()}catch(p){if(p instanceof Iv)return Io("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Of(h,o,l)}catch(p){return Io(p instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Ie===0?null:f}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.tt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Ue(t,l,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Je(h);if(f){if(l.current&&Qd(f.target)){const p=new ye(f.target.path);this.ke.get(p)!==null||this.it(h,p)||this.Ue(h,p,Bt.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=Pe();this.qe.forEach((l,h)=>{let f=!0;h.forEachWhile(p=>{const _=this.Je(p);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Nc(e,t,this.Qe,this.ke,i);return this.ke=Mr(),this.qe=Cy(),this.Qe=new Ze(be),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ay,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Dt(be),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ay),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Cy(){return new Ze(ye.comparator)}function Py(){return new Ze(ye.comparator)}const kC={asc:"ASCENDING",desc:"DESCENDING"},NC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DC={and:"AND",or:"OR"};class OC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xd(n,e){return n.useProto3Json||Sc(e)?e:{value:e}}function uc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xC(n,e){return uc(n,e.toTimestamp())}function lr(n){return je(!!n),Ee.fromTimestamp(function(t){const i=Ii(t);return new _t(i.seconds,i.nanos)}(n))}function xf(n,e){return Jd(n,e).canonicalString()}function Jd(n,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Qv(n){const e=Ye.fromString(n);return je(ew(e)),e}function Zd(n,e){return xf(n.databaseId,e.path)}function Sd(n,e){const t=Qv(e);if(t.get(1)!==n.databaseId.projectId)throw new de(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new de(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(Xv(t))}function Yv(n,e){return xf(n.databaseId,e)}function LC(n){const e=Qv(n);return e.length===4?Ye.emptyPath():Xv(e)}function ef(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xv(n){return je(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ky(n,e,t){return{name:Zd(n,e),fields:t.value.mapValue.fields}}function VC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(_,w){return _.useProto3Json?(je(w===void 0||typeof w=="string"),Ot.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Ot.fromUint8Array(w||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(_){const w=_.code===void 0?G.UNKNOWN:qv(_.code);return new de(w,_.message||"")}(h);t=new Kv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Sd(n,i.document.name),l=lr(i.document.updateTime),h=i.document.createTime?lr(i.document.createTime):Ee.min(),f=new Sn({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,l,h,f),_=i.targetIds||[],w=i.removedTargetIds||[];t=new Gu(_,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Sd(n,i.document),l=i.readTime?lr(i.readTime):Ee.min(),h=Bt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new Gu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Sd(n,i.document),l=i.removedTargetIds||[];t=new Gu([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new SC(o,l),f=i.targetId;t=new Hv(f,h)}}return t}function bC(n,e){let t;if(e instanceof dl)t={update:ky(n,e.key,e.value)};else if(e instanceof Wv)t={delete:Zd(n,e.key)};else if(e instanceof ws)t={update:ky(n,e.key,e.data),updateMask:qC(e.fieldMask)};else{if(!(e instanceof EC))return we();t={verify:Zd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const f=h.transform;if(f instanceof ac)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof nl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof rl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof lc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:xC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()}(n,e.precondition)),t}function MC(n,e){return n&&n.length>0?(je(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?lr(o.updateTime):lr(l);return h.isEqual(Ee.min())&&(h=lr(l)),new _C(h,o.transformResults||[])}(t,e))):[]}function UC(n,e){return{documents:[Yv(n,e.path)]}}function FC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Yv(n,o);const l=function(_){if(_.length!==0)return Zv(cr.create(_,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(_){if(_.length!==0)return _.map(w=>function(P){return{field:go(P.field),direction:zC(P.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Xd(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{_t:t,parent:o}}function jC(n){let e=LC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(T){const P=Jv(T);return P instanceof cr&&Cv(P)?P.getFilters():[P]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(P=>function(z){return new oc(yo(z.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(P))}(t.orderBy));let f=null;t.limit&&(f=function(T){let P;return P=typeof T=="object"?T.value:T,Sc(P)?null:P}(t.limit));let p=null;t.startAt&&(p=function(T){const P=!!T.before,F=T.values||[];return new sc(F,P)}(t.startAt));let _=null;return t.endAt&&(_=function(T){const P=!T.before,F=T.values||[];return new sc(F,P)}(t.endAt)),iC(e,o,h,l,f,"F",p,_)}function BC(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jv(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=yo(t.unaryFilter.field);return yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=yo(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=yo(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=yo(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(n):n.fieldFilter!==void 0?function(t){return yt.create(yo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return cr.create(t.compositeFilter.filters.map(i=>Jv(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(n):we()}function zC(n){return kC[n]}function $C(n){return NC[n]}function WC(n){return DC[n]}function go(n){return{fieldPath:n.canonicalString()}}function yo(n){return Nt.fromServerFormat(n.fieldPath)}function Zv(n){return n instanceof yt?function(t){if(t.op==="=="){if(my(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NAN"}};if(py(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(my(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NAN"}};if(py(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(t.field),op:$C(t.op),value:t.value}}}(n):n instanceof cr?function(t){const i=t.getFilters().map(o=>Zv(o));return i.length===1?i[0]:{compositeFilter:{op:WC(t.op),filters:i}}}(n):we()}function qC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ew(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),f=Ot.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.ct=e}}function KC(n){const e=jC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.un=new QC}addToCollectionParentIndex(e,t){return this.un.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Ti.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class QC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Dt(Ye.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Dt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Co(0)}static kn(){return new Co(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.changes=new Vo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&$a(i.mutation,o,zn.empty(),_t.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const o=ss();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=Ma();return l.forEach((f,p)=>{h=h.insert(f,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ss();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,i,o){let l=Mr();const h=za(),f=function(){return za()}();return t.forEach((p,_)=>{const w=i.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof ws)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),$a(w.mutation,_,w.mutation.getFieldMask(),_t.now())):h.set(_.key,zn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((_,w)=>h.set(_,w)),t.forEach((_,w)=>{var T;return f.set(_,new XC(w,(T=h.get(_))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const i=za();let o=new Ze((h,f)=>h-f),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(p=>{const _=t.get(p);if(_===null)return;let w=i.get(p)||zn.empty();w=f.applyToLocalView(_,w),i.set(p,w);const T=(o.get(f.batchId)||Pe()).add(p);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),_=p.key,w=p.value,T=bv();w.forEach(P=>{if(!l.has(P)){const F=zv(t.get(P),i.get(P));F!==null&&T.set(P,F),l=l.add(P)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return K.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(ss());let f=-1,p=l;return h.next(_=>K.forEach(_,(w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?K.resolve():this.remoteDocumentCache.getEntry(e,w).next(P=>{p=p.insert(w,P)}))).next(()=>this.populateOverlays(e,_,l)).next(()=>this.computeViews(e,p,_,Pe())).next(w=>({batchId:f,changes:Vv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=Ma();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ma();return this.indexManager.getCollectionParents(e,l).next(f=>K.forEach(f,p=>{const _=function(T,P){return new Rc(P,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next(w=>{w.forEach((T,P)=>{h=h.insert(T,P)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Bt.newInvalidDocument(w)))});let f=Ma();return h.forEach((p,_)=>{const w=l.get(p);w!==void 0&&$a(w.mutation,_,zn.empty(),_t.now()),Cc(t,_)&&(f=f.insert(p,_))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return K.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:KC(o.bundledQuery),readTime:lr(o.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.overlays=new Ze(ye.comparator),this.Ir=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ss();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.ht(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=ss(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,_=p.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new Ze((_,w)=>_-w);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let w=l.get(_.largestBatchId);w===null&&(w=ss(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=ss(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((_,w)=>f.set(_,w)),!(f.size()>=o)););return K.resolve(f)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new IC(t,i));let l=this.Ir.get(t);l===void 0&&(l=Pe(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Tr=new Dt(St.Er),this.dr=new Dt(St.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new St(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new St(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new ye(new Ye([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.dr.forEachInRange([i,o],h=>{this.Vr(h),l.push(h.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ye(new Ye([])),i=new St(t,e),o=new St(t,e+1);let l=Pe();return this.dr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new St(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ye.comparator(e.key,t.key)||be(e.wr,t.wr)}static Ar(e,t){return be(e.wr,t.wr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Dt(St.Er)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new TC(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.br=this.br.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,o],h=>{const f=this.Dr(h.wr);l.push(f)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Dt(be);return t.forEach(o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,h],f=>{i=i.add(f.wr)})}),K.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const h=new St(new ye(l),0);let f=new Dt(be);return this.br.forEachWhile(p=>{const _=p.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(p.wr)),!0)},h),K.resolve(this.Cr(f))}Cr(e){const t=[];return e.forEach(i=>{const o=this.Dr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return K.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new St(t,0),o=this.br.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.Mr=e,this.docs=function(){return new Ze(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Mr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Mr();const h=t.path,f=new ye(h.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:_,value:{document:w}}=p.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||FA(UA(w),i)<=0||(o.has(w.key)||Cc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we()}Or(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new iP(this)}getSize(e){return K.resolve(this.size)}}class iP extends YC{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.persistence=e,this.Nr=new Vo(t=>Pf(t),kf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lf,this.targetCount=0,this.kr=Co.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),K.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Co(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Kn(t),K.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Nr.forEach((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Nr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Sf(0),this.Kr=!1,this.Kr=!0,this.$r=new tP,this.referenceDelegate=e(this),this.Ur=new sP(this),this.indexManager=new GC,this.remoteDocumentCache=function(o){return new rP(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new HC(t),this.Gr=new ZC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new nP(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){ue("MemoryPersistence","Starting transaction:",e);const o=new aP(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return K.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class aP extends BA{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.Jr=new Lf,this.Yr=null}static Zr(e){return new Vf(e)}get Xr(){if(this.Yr)return this.Yr;throw we()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),K.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Xr,i=>{const o=ye.fromPath(i);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Ee.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return K.or([()=>K.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new bf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return G0()?8:zA(zt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Yi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.Zi(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new lP;return this.Xi(e,t,h).next(f=>{if(l.result=f,this.zi)return this.es(e,t,h,f.size)})}).next(()=>l.result)}es(e,t,i,o){return i.documentReadCount<this.ji?(Oa()<=Ne.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",mo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),K.resolve()):(Oa()<=Ne.DEBUG&&ue("QueryEngine","Query:",mo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(Oa()<=Ne.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",mo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):K.resolve())}Yi(e,t){if(vy(t))return K.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Yd(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=Pe(...l);return this.Ji.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,i).next(p=>{const _=this.ts(t,f);return this.ns(t,_,h,p.readTime)?this.Yi(e,Yd(t,null,"F")):this.rs(e,_,t,p)}))})))}Zi(e,t,i,o){return vy(t)||o.isEqual(Ee.min())?K.resolve(null):this.Ji.getDocuments(e,i).next(l=>{const h=this.ts(t,l);return this.ns(t,h,i,o)?K.resolve(null):(Oa()<=Ne.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),mo(t)),this.rs(e,h,t,MA(o,-1)).next(f=>f))})}ts(e,t){let i=new Dt(xv(e));return t.forEach((o,l)=>{Cc(e,l)&&(i=i.add(l))}),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,i){return Oa()<=Ne.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",mo(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ti.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new Ze(be),this._s=new Vo(l=>Pf(l),kf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function hP(n,e,t,i){return new cP(n,e,t,i)}async function tw(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],f=[];let p=Pe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)p=p.add(w.key)}for(const _ of l){f.push(_.batchId);for(const w of _.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next(_=>({hs:_,removedBatchIds:h,addedBatchIds:f}))})})}function dP(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(f,p,_,w){const T=_.batch,P=T.keys();let F=K.resolve();return P.forEach(z=>{F=F.next(()=>w.getEntry(p,z)).next($=>{const M=_.docVersions.get(z);je(M!==null),$.version.compareTo(M)<0&&(T.applyToRemoteDocument($,_),$.isValidDocument()&&($.setReadTime(_.commitVersion),w.addEntry($)))})}),F.next(()=>f.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let p=Pe();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(p=p.add(f.batch.mutations[_].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function nw(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function fP(n,e){const t=Te(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const f=[];e.targetChanges.forEach((w,T)=>{const P=o.get(T);if(!P)return;f.push(t.Ur.removeMatchingKeys(l,w.removedDocuments,T).next(()=>t.Ur.addMatchingKeys(l,w.addedDocuments,T)));let F=P.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(Ot.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(w.resumeToken,i)),o=o.insert(T,F),function($,M,re){return $.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0}(P,F,w)&&f.push(t.Ur.updateTargetData(l,F))});let p=Mr(),_=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),f.push(pP(l,h,e.documentUpdates).next(w=>{p=w.Ps,_=w.Is})),!i.isEqual(Ee.min())){const w=t.Ur.getLastRemoteSnapshotVersion(l).next(T=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(w)}return K.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,_)).next(()=>p)}).then(l=>(t.os=o,l))}function pP(n,e,t){let i=Pe(),o=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Mr();return t.forEach((f,p)=>{const _=l.get(f);p.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!_.isValidDocument()||p.version.compareTo(_.version)>0||p.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):ue("LocalStore","Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",p.version)}),{Ps:h,Is:o}})}function mP(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function gP(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Ur.getTargetData(i,e).next(l=>l?(o=l,K.resolve(o)):t.Ur.allocateTargetId(i).next(h=>(o=new gi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function tf(n,e,t){const i=Te(n),o=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!hl(h))throw h;ue("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function Ny(n,e,t){const i=Te(n);let o=Ee.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,_,w){const T=Te(p),P=T._s.get(w);return P!==void 0?K.resolve(T.os.get(P)):T.Ur.getTargetData(_,w)}(i,h,ar(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(h,f.targetId).next(p=>{l=p})}).next(()=>i.ss.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:Pe())).next(f=>(yP(i,aC(e),f),{documents:f,Ts:l})))}function yP(n,e,t){let i=n.us.get(e)||Ee.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.us.set(e,i)}class Dy{constructor(){this.activeTargetIds=fC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _P{constructor(){this.so=new Dy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Dy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ue("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ue("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu=null;function Rd(){return bu===null?bu=function(){return 268435456+Math.round(2147483648*Math.random())}():bu++,"0x"+bu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class TP extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,i,o,l,h){const f=Rd(),p=this.xo(t,i.toUriEncodedString());ue("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const _={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(_,l,h),this.No(t,p,_,o).then(w=>(ue("RestConnection",`Received RPC '${t}' ${f}: `,w),w),w=>{throw Io("RestConnection",`RPC '${t}' ${f} failed with error: `,w,"url: ",p,"request:",o),w})}Lo(t,i,o,l,h,f){return this.Mo(t,i,o,l,h)}Oo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}xo(t,i){const o=wP[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const l=Rd();return new Promise((h,f)=>{const p=new mv;p.setWithCredentials(!0),p.listenOnce(gv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case qu.NO_ERROR:const w=p.getResponseJson();ue(Ft,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case qu.TIMEOUT:ue(Ft,`RPC '${e}' ${l} timed out`),f(new de(G.DEADLINE_EXCEEDED,"Request time out"));break;case qu.HTTP_ERROR:const T=p.getStatus();if(ue(Ft,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let P=p.getResponseJson();Array.isArray(P)&&(P=P[0]);const F=P==null?void 0:P.error;if(F&&F.status&&F.message){const z=function(M){const re=M.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(re)>=0?re:G.UNKNOWN}(F.status);f(new de(z,F.message))}else f(new de(G.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new de(G.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ue(Ft,`RPC '${e}' ${l} completed.`)}});const _=JSON.stringify(o);ue(Ft,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",_,i,15)})}Bo(e,t,i){const o=Rd(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=vv(),f=_v(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(p.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const w=l.join("");ue(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=h.createWebChannel(w,p);let P=!1,F=!1;const z=new EP({Io:M=>{F?ue(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(P||(ue(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),P=!0),ue(Ft,`RPC '${e}' stream ${o} sending:`,M),T.send(M))},To:()=>T.close()}),$=(M,re,ie)=>{M.listen(re,ee=>{try{ie(ee)}catch(ae){setTimeout(()=>{throw ae},0)}})};return $(T,ba.EventType.OPEN,()=>{F||(ue(Ft,`RPC '${e}' stream ${o} transport opened.`),z.yo())}),$(T,ba.EventType.CLOSE,()=>{F||(F=!0,ue(Ft,`RPC '${e}' stream ${o} transport closed`),z.So())}),$(T,ba.EventType.ERROR,M=>{F||(F=!0,Io(Ft,`RPC '${e}' stream ${o} transport errored:`,M),z.So(new de(G.UNAVAILABLE,"The operation could not be completed")))}),$(T,ba.EventType.MESSAGE,M=>{var re;if(!F){const ie=M.data[0];je(!!ie);const ee=ie,ae=ee.error||((re=ee[0])===null||re===void 0?void 0:re.error);if(ae){ue(Ft,`RPC '${e}' stream ${o} received error:`,ae);const Ce=ae.status;let Ie=function(A){const k=ct[A];if(k!==void 0)return qv(k)}(Ce),D=ae.message;Ie===void 0&&(Ie=G.INTERNAL,D="Unknown error status: "+Ce+" with message "+ae.message),F=!0,z.So(new de(Ie,D)),T.close()}else ue(Ft,`RPC '${e}' stream ${o} received:`,ie),z.bo(ie)}}),$(f,yv.STAT_EVENT,M=>{M.stat===qd.PROXY?ue(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===qd.NOPROXY&&ue(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.wo()},0),z}}function Ad(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n){return new OC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t,i,o,l,h,f,p){this.ui=e,this.Ho=i,this.Jo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rw(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(br(t.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===t&&this.P_(i,o)},i=>{e(()=>{const o=new de(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ue("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(ue("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IP extends iw{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=VC(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?lr(h.readTime):Ee.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=ef(this.serializer),t.addTarget=function(l,h){let f;const p=h.target;if(f=Qd(p)?{documents:UC(l,p)}:{query:FC(l,p)._t},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Gv(l,h.resumeToken);const _=Xd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=uc(l,h.snapshotVersion.toTimestamp());const _=Xd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f}(this.serializer,e);const i=BC(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=ef(this.serializer),t.removeTarget=e,this.a_(t)}}class SP extends iw{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=MC(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=ef(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>bC(this.serializer,i))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new de(G.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Mo(e,Jd(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new de(G.UNKNOWN,l.toString())})}Lo(e,t,i,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.Lo(e,Jd(t,i),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new de(G.UNKNOWN,h.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class AP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(br(t),this.D_=!1):ue("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(h=>{i.enqueueAndForget(async()=>{Es(this)&&(ue("RemoteStore","Restarting streams for network reachability change."),await async function(p){const _=Te(p);_.L_.add(4),await pl(_),_.q_.set("Unknown"),_.L_.delete(4),await Oc(_)}(this))})}),this.q_=new AP(i,o)}}async function Oc(n){if(Es(n))for(const e of n.B_)await e(!0)}async function pl(n){for(const e of n.B_)await e(!1)}function sw(n,e){const t=Te(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),jf(t)?Ff(t):bo(t).r_()&&Uf(t,e))}function Mf(n,e){const t=Te(n),i=bo(t);t.N_.delete(e),i.r_()&&ow(t,e),t.N_.size===0&&(i.r_()?i.o_():Es(t)&&t.q_.set("Unknown"))}function Uf(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bo(n).A_(e)}function ow(n,e){n.Q_.xe(e),bo(n).R_(e)}function Ff(n){n.Q_=new PC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),bo(n).start(),n.q_.v_()}function jf(n){return Es(n)&&!bo(n).n_()&&n.N_.size>0}function Es(n){return Te(n).L_.size===0}function aw(n){n.Q_=void 0}async function PP(n){n.q_.set("Online")}async function kP(n){n.N_.forEach((e,t)=>{Uf(n,e)})}async function NP(n,e){aw(n),jf(n)?(n.q_.M_(e),Ff(n)):n.q_.set("Unknown")}async function DP(n,e,t){if(n.q_.set("Online"),e instanceof Kv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.N_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.N_.delete(f),o.Q_.removeTarget(f))}(n,e)}catch(i){ue("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await cc(n,i)}else if(e instanceof Gu?n.Q_.Ke(e):e instanceof Hv?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ee.min()))try{const i=await nw(n.localStore);t.compareTo(i)>=0&&await function(l,h){const f=l.Q_.rt(h);return f.targetChanges.forEach((p,_)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.N_.get(_);w&&l.N_.set(_,w.withResumeToken(p.resumeToken,h))}}),f.targetMismatches.forEach((p,_)=>{const w=l.N_.get(p);if(!w)return;l.N_.set(p,w.withResumeToken(Ot.EMPTY_BYTE_STRING,w.snapshotVersion)),ow(l,p);const T=new gi(w.target,p,_,w.sequenceNumber);Uf(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(i){ue("RemoteStore","Failed to raise snapshot:",i),await cc(n,i)}}async function cc(n,e,t){if(!hl(e))throw e;n.L_.add(1),await pl(n),n.q_.set("Offline"),t||(t=()=>nw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ue("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Oc(n)})}function lw(n,e){return e().catch(t=>cc(n,t,e))}async function xc(n){const e=Te(n),t=Si(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OP(e);)try{const o=await mP(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,xP(e,o)}catch(o){await cc(e,o)}uw(e)&&cw(e)}function OP(n){return Es(n)&&n.O_.length<10}function xP(n,e){n.O_.push(e);const t=Si(n);t.r_()&&t.V_&&t.m_(e.mutations)}function uw(n){return Es(n)&&!Si(n).n_()&&n.O_.length>0}function cw(n){Si(n).start()}async function LP(n){Si(n).p_()}async function VP(n){const e=Si(n);for(const t of n.O_)e.m_(t.mutations)}async function bP(n,e,t){const i=n.O_.shift(),o=Df.from(i,e,t);await lw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await xc(n)}async function MP(n,e){e&&Si(n).V_&&await async function(i,o){if(function(h){return RC(h)&&h!==G.ABORTED}(o.code)){const l=i.O_.shift();Si(i).s_(),await lw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await xc(i)}}(n,e),uw(n)&&cw(n)}async function xy(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),ue("RemoteStore","RemoteStore received new credentials");const i=Es(t);t.L_.add(3),await pl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Oc(t)}async function UP(n,e){const t=Te(n);e?(t.L_.delete(2),await Oc(t)):e||(t.L_.add(2),await pl(t),t.q_.set("Unknown"))}function bo(n){return n.K_||(n.K_=function(t,i,o){const l=Te(t);return l.w_(),new IP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:PP.bind(null,n),Ro:kP.bind(null,n),mo:NP.bind(null,n),d_:DP.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),jf(n)?Ff(n):n.q_.set("Unknown")):(await n.K_.stop(),aw(n))})),n.K_}function Si(n){return n.U_||(n.U_=function(t,i,o){const l=Te(t);return l.w_(),new SP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LP.bind(null,n),mo:MP.bind(null,n),f_:VP.bind(null,n),g_:bP.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await xc(n)):(await n.U_.stop(),n.O_.length>0&&(ue("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Bf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zf(n,e){if(br("AsyncQueue",`${e}: ${n}`),hl(n))return new de(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=Ma(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new To(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof To)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new To;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.W_=new Ze(ye.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):we():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Po{constructor(e,t,i,o,l,h,f,p,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Po(e,t,To.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class jP{constructor(){this.queries=Vy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=Vy(),l.forEach((h,f)=>{for(const p of f.j_)p.onError(i)})})(this,new de(G.ABORTED,"Firestore shutting down"))}}function Vy(){return new Vo(n=>Ov(n),Ac)}async function BP(n,e){const t=Te(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(i=2):(l=new FP,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=zf(h,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&$f(t)}async function zP(n,e){const t=Te(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.j_.indexOf(e);h>=0&&(l.j_.splice(h,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function $P(n,e){const t=Te(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.j_)f.X_(o)&&(i=!0);h.z_=o}}i&&$f(t)}function WP(n,e,t){const i=Te(n),o=i.queries.get(e);if(o)for(const l of o.j_)l.onError(t);i.queries.delete(e)}function $f(n){n.Y_.forEach(e=>{e.next()})}var nf,by;(by=nf||(nf={})).ea="default",by.Cache="cache";class qP{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Po(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.key=e}}class dw{constructor(e){this.key=e}}class HP{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Pe(),this.mutatedKeys=Pe(),this.Aa=xv(e),this.Ra=new To(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Ly,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const P=o.get(w),F=Cc(this.query,T)?T:null,z=!!P&&this.mutatedKeys.has(P.key),$=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let M=!1;P&&F?P.data.isEqual(F.data)?z!==$&&(i.track({type:3,doc:F}),M=!0):this.ga(P,F)||(i.track({type:2,doc:F}),M=!0,(p&&this.Aa(F,p)>0||_&&this.Aa(F,_)<0)&&(f=!0)):!P&&F?(i.track({type:0,doc:F}),M=!0):P&&!F&&(i.track({type:1,doc:P}),M=!0,(p||_)&&(f=!0)),M&&(F?(h=h.add(F),l=$?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{Ra:h,fa:i,ns:f,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort((w,T)=>function(F,z){const $=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return $(F)-$(z)}(w.type,T.type)||this.Aa(w.doc,T.doc)),this.pa(i),o=o!=null&&o;const f=t&&!o?this.ya():[],p=this.da.size===0&&this.current&&!o?1:0,_=p!==this.Ea;return this.Ea=p,h.length!==0||_?{snapshot:new Po(this.query,e.Ra,l,h,e.mutatedKeys,p===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:f}:{wa:f}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ly,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Pe(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new dw(i))}),this.da.forEach(i=>{e.has(i)||t.push(new hw(i))}),t}ba(e){this.Ta=e.Ts,this.da=Pe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Po.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class KP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class GP{constructor(e){this.key=e,this.va=!1}}class QP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new Vo(f=>Ov(f),Ac),this.Ma=new Map,this.xa=new Set,this.Oa=new Ze(ye.comparator),this.Na=new Map,this.La=new Lf,this.Ba={},this.ka=new Map,this.qa=Co.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function YP(n,e,t=!0){const i=_w(n);let o;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await fw(i,e,t,!0),o}async function XP(n,e){const t=_w(n);await fw(t,e,!0,!1)}async function fw(n,e,t,i){const o=await gP(n.localStore,ar(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await JP(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&sw(n.remoteStore,o),f}async function JP(n,e,t,i,o){n.Ka=(T,P,F)=>async function($,M,re,ie){let ee=M.view.ma(re);ee.ns&&(ee=await Ny($.localStore,M.query,!1).then(({documents:D})=>M.view.ma(D,ee)));const ae=ie&&ie.targetChanges.get(M.targetId),Ce=ie&&ie.targetMismatches.get(M.targetId)!=null,Ie=M.view.applyChanges(ee,$.isPrimaryClient,ae,Ce);return Uy($,M.targetId,Ie.wa),Ie.snapshot}(n,T,P,F);const l=await Ny(n.localStore,e,!0),h=new HP(e,l.Ts),f=h.ma(l.documents),p=fl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),_=h.applyChanges(f,n.isPrimaryClient,p);Uy(n,t,_.wa);const w=new KP(e,t,h);return n.Fa.set(e,w),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),_.snapshot}async function ZP(n,e,t){const i=Te(n),o=i.Fa.get(e),l=i.Ma.get(o.targetId);if(l.length>1)return i.Ma.set(o.targetId,l.filter(h=>!Ac(h,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await tf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Mf(i.remoteStore,o.targetId),rf(i,o.targetId)}).catch(cl)):(rf(i,o.targetId),await tf(i.localStore,o.targetId,!0))}async function ek(n,e){const t=Te(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Mf(t.remoteStore,i.targetId))}async function tk(n,e,t){const i=lk(n);try{const o=await function(h,f){const p=Te(h),_=_t.now(),w=f.reduce((F,z)=>F.add(z.key),Pe());let T,P;return p.persistence.runTransaction("Locally write mutations","readwrite",F=>{let z=Mr(),$=Pe();return p.cs.getEntries(F,w).next(M=>{z=M,z.forEach((re,ie)=>{ie.isValidDocument()||($=$.add(re))})}).next(()=>p.localDocuments.getOverlayedDocuments(F,z)).next(M=>{T=M;const re=[];for(const ie of f){const ee=wC(ie,T.get(ie.key).overlayedDocument);ee!=null&&re.push(new ws(ie.key,ee,Sv(ee.value.mapValue),xr.exists(!0)))}return p.mutationQueue.addMutationBatch(F,_,re,f)}).next(M=>{P=M;const re=M.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(F,M.batchId,re)})}).then(()=>({batchId:P.batchId,changes:Vv(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,f,p){let _=h.Ba[h.currentUser.toKey()];_||(_=new Ze(be)),_=_.insert(f,p),h.Ba[h.currentUser.toKey()]=_}(i,o.batchId,t),await ml(i,o.changes),await xc(i.remoteStore)}catch(o){const l=zf(o,"Failed to persist write");t.reject(l)}}async function pw(n,e){const t=Te(n);try{const i=await fP(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Na.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?je(h.va):o.removedDocuments.size>0&&(je(h.va),h.va=!1))}),await ml(t,i,e)}catch(i){await cl(i)}}function My(n,e,t){const i=Te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach((l,h)=>{const f=h.view.Z_(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const p=Te(h);p.onlineState=f;let _=!1;p.queries.forEach((w,T)=>{for(const P of T.j_)P.Z_(f)&&(_=!0)}),_&&$f(p)}(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nk(n,e,t){const i=Te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),l=o&&o.key;if(l){let h=new Ze(ye.comparator);h=h.insert(l,Bt.newNoDocument(l,Ee.min()));const f=Pe().add(l),p=new Nc(Ee.min(),new Map,new Ze(be),h,f);await pw(i,p),i.Oa=i.Oa.remove(l),i.Na.delete(e),Wf(i)}else await tf(i.localStore,e,!1).then(()=>rf(i,e,t)).catch(cl)}async function rk(n,e){const t=Te(n),i=e.batch.batchId;try{const o=await dP(t.localStore,e);gw(t,i,null),mw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ml(t,o)}catch(o){await cl(o)}}async function ik(n,e,t){const i=Te(n);try{const o=await function(h,f){const p=Te(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let w;return p.mutationQueue.lookupMutationBatch(_,f).next(T=>(je(T!==null),w=T.keys(),p.mutationQueue.removeMutationBatch(_,T))).next(()=>p.mutationQueue.performConsistencyCheck(_)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(_,w,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w)).next(()=>p.localDocuments.getDocuments(_,w))})}(i.localStore,e);gw(i,e,t),mw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ml(i,o)}catch(o){await cl(o)}}function mw(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function gw(n,e,t){const i=Te(n);let o=i.Ba[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function rf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||yw(n,i)})}function yw(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Mf(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Wf(n))}function Uy(n,e,t){for(const i of t)i instanceof hw?(n.La.addReference(i.key,e),sk(n,i)):i instanceof dw?(ue("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||yw(n,i.key)):we()}function sk(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(ue("SyncEngine","New document in limbo: "+t),n.xa.add(i),Wf(n))}function Wf(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ye(Ye.fromString(e)),i=n.qa.next();n.Na.set(i,new GP(t)),n.Oa=n.Oa.insert(t,i),sw(n.remoteStore,new gi(ar(Dv(t.path)),i,"TargetPurposeLimboResolution",Sf.oe))}}async function ml(n,e,t){const i=Te(n),o=[],l=[],h=[];i.Fa.isEmpty()||(i.Fa.forEach((f,p)=>{h.push(i.Ka(p,e,t).then(_=>{var w;if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(_){o.push(_);const T=bf.Wi(p.targetId,_);l.push(T)}}))}),await Promise.all(h),i.Ca.d_(o),await async function(p,_){const w=Te(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>K.forEach(_,P=>K.forEach(P.$i,F=>w.persistence.referenceDelegate.addReference(T,P.targetId,F)).next(()=>K.forEach(P.Ui,F=>w.persistence.referenceDelegate.removeReference(T,P.targetId,F)))))}catch(T){if(!hl(T))throw T;ue("LocalStore","Failed to update sequence numbers: "+T)}for(const T of _){const P=T.targetId;if(!T.fromCache){const F=w.os.get(P),z=F.snapshotVersion,$=F.withLastLimboFreeSnapshotVersion(z);w.os=w.os.insert(P,$)}}}(i.localStore,l))}async function ok(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){ue("SyncEngine","User change. New user:",e.toKey());const i=await tw(t.localStore,e);t.currentUser=e,function(l,h){l.ka.forEach(f=>{f.forEach(p=>{p.reject(new de(G.CANCELLED,h))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ml(t,i.hs)}}function ak(n,e){const t=Te(n),i=t.Na.get(e);if(i&&i.va)return Pe().add(i.key);{let o=Pe();const l=t.Ma.get(e);if(!l)return o;for(const h of l){const f=t.Fa.get(h);o=o.unionWith(f.view.Va)}return o}}function _w(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ak.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nk.bind(null,e),e.Ca.d_=$P.bind(null,e.eventManager),e.Ca.$a=WP.bind(null,e.eventManager),e}function lk(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ik.bind(null,e),e}class hc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Dc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return hP(this.persistence,new uP,e.initialUser,this.serializer)}Ga(e){return new oP(Vf.Zr,this.serializer)}Wa(e){return new _P}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hc.provider={build:()=>new hc};class sf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>My(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ok.bind(null,this.syncEngine),await UP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jP}()}createDatastore(e){const t=Dc(e.databaseInfo.databaseId),i=function(l){return new TP(l)}(e.databaseInfo);return function(l,h,f,p){return new RP(l,h,f,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,f){return new CP(i,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>My(this.syncEngine,t,0),function(){return Oy.D()?new Oy:new vP}())}createSyncEngine(e,t){return function(o,l,h,f,p,_,w){const T=new QP(o,l,h,f,p,_);return w&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Te(o);ue("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await pl(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}sf.provider={build:()=>new sf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Ev.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{ue("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(ue("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=zf(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Cd(n,e){n.asyncQueue.verifyOperationInProgress(),ue("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await tw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Fy(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hk(n);ue("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>xy(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>xy(e.remoteStore,o)),n._onlineComponents=e}async function hk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Io("Error using user provided cache. Falling back to memory cache: "+t),await Cd(n,new hc)}}else ue("FirestoreClient","Using default OfflineComponentProvider"),await Cd(n,new hc);return n._offlineComponents}async function vw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue("FirestoreClient","Using user provided OnlineComponentProvider"),await Fy(n,n._uninitializedComponentsProvider._online)):(ue("FirestoreClient","Using default OnlineComponentProvider"),await Fy(n,new sf))),n._onlineComponents}function dk(n){return vw(n).then(e=>e.syncEngine)}async function fk(n){const e=await vw(n),t=e.eventManager;return t.onListen=YP.bind(null,e.syncEngine),t.onUnlisten=ZP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=XP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ek.bind(null,e.syncEngine),t}function pk(n,e,t={}){const i=new wi;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,_){const w=new uk({next:P=>{w.Za(),h.enqueueAndForget(()=>zP(l,T)),P.fromCache&&p.source==="server"?_.reject(new de(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(P)},error:P=>_.reject(P)}),T=new qP(f,w,{includeMetadataChanges:!0,_a:!0});return BP(l,T)}(await fk(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(n,e,t){if(!t)throw new de(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mk(n,e,t,i){if(e===!0&&i===!0)throw new de(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function By(n){if(!ye.isDocumentKey(n))throw new de(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zy(n){if(ye.isDocumentKey(n))throw new de(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function dc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new de(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qf(n);throw new de(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new de(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new de(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ww((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new de(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new de(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new de(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $y({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $y(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new PA;switch(i.type){case"firstParty":return new OA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new de(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=jy.get(t);i&&(ue("ComponentProvider","Removing Datastore"),jy.delete(t),i.terminate())}(this),Promise.resolve()}}function gk(n,e,t,i={}){var o;const l=(n=dc(n,Lc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=jt.MOCK_USER;else{f=S_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const _=i.mockUserToken.sub||i.mockUserToken.user_id;if(!_)throw new de(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new jt(_)}n._authCredentials=new kA(new wv(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Vc(this.firestore,e,this._query)}}class $n{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $n(this.firestore,e,this._key)}}class Ei extends Vc{constructor(e,t,i){super(e,t,Dv(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $n(this.firestore,null,new ye(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function Tw(n,e,...t){if(n=ht(n),Ew("collection","path",e),n instanceof Lc){const i=Ye.fromString(e,...t);return zy(i),new Ei(n,null,i)}{if(!(n instanceof $n||n instanceof Ei))throw new de(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return zy(i),new Ei(n.firestore,null,i)}}function yk(n,e,...t){if(n=ht(n),arguments.length===1&&(e=Ev.newId()),Ew("doc","path",e),n instanceof Lc){const i=Ye.fromString(e,...t);return By(i),new $n(n,null,new ye(i))}{if(!(n instanceof $n||n instanceof Ei))throw new de(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return By(i),new $n(n.firestore,n instanceof Ei?n.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rw(this,"async_queue_retry"),this.Vu=()=>{const i=Ad();i&&ue("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Ad();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ad();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new wi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!hl(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(i);throw br("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Bf.createAndSchedule(this,e,t,i,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&we()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Hf extends Lc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Wy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wy(e),this._firestoreClient=void 0,await e}}}function _k(n,e){const t=typeof n=="object"?n:wc(),i=typeof n=="string"?n:"(default)",o=Ci(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=E_("firestore");l&&gk(o,...l)}return o}function Iw(n){if(n._terminated)throw new de(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vk(n),n._firestoreClient}function vk(n){var e,t,i;const o=n._freezeSettings(),l=function(f,p,_,w){return new qA(f,p,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,ww(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new ck(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ko(Ot.fromBase64String(e))}catch(t){throw new de(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ko(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=/^__.*__$/;class Ek{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,t,this.fieldTransforms):new dl(e,this.data,t,this.fieldTransforms)}}function Rw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class Yf{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.Ou(e),o}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Rw(this.Cu)&&wk.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Tk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Dc(e)}Qu(e,t,i,o=!1){return new Yf({Cu:e,methodName:t,qu:i,path:Nt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ik(n){const e=n._freezeSettings(),t=Dc(n._databaseId);return new Tk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Sk(n,e,t,i,o,l={}){const h=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);kw("Data must be an object, but it was:",h,i);const f=Cw(i,h);let p,_;if(l.merge)p=new zn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const P=Rk(e,T,t);if(!h.contains(P))throw new de(G.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);Ck(w,P)||w.push(P)}p=new zn(w),_=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,_=h.fieldTransforms;return new Ek(new Sn(f),p,_)}function Aw(n,e){if(Pw(n=ht(n)))return kw("Unsupported field value:",e,n),Cw(n,e);if(n instanceof Sw)return function(i,o){if(!Rw(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const f of i){let p=Aw(f,o.Lu(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=ht(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return pC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:uc(o.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:uc(o.serializer,l)}}if(i instanceof Gf)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ko)return{bytesValue:Gv(o.serializer,i._byteString)};if(i instanceof $n){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:xf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Qf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw f.Bu("VectorValues must only contain numeric values.");return Nf(f.serializer,p)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${qf(i)}`)}(n,e)}function Cw(n,e){const t={};return Tv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lo(n,(i,o)=>{const l=Aw(o,e.Mu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function Pw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Gf||n instanceof ko||n instanceof $n||n instanceof Sw||n instanceof Qf)}function kw(n,e,t){if(!Pw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=qf(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function Rk(n,e,t){if((e=ht(e))instanceof Kf)return e._internalPath;if(typeof e=="string")return Nw(n,e);throw fc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ak=new RegExp("[~\\*/\\[\\]]");function Nw(n,e,t){if(e.search(Ak)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kf(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new de(G.INVALID_ARGUMENT,f+n+p)}function Ck(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new $n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Pk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ow("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Pk extends Dw{data(){return super.data()}}function Ow(n,e){return typeof e=="string"?Nw(n,e):e instanceof Kf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new de(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nk{convertValue(e,t="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Lo(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>ot(h.doubleValue));return new Qf(l)}convertGeoPoint(e){return new Gf(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Af(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Za(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);je(ew(i));const o=new el(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ok extends Dw{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Ow("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Qu extends Ok{data(e={}){return super.data(e)}}class xk{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Mu(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Qu(this._firestore,this._userDataWriter,i.key,i,new Mu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const p=new Qu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Mu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new Qu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Mu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:Lk(f.type),doc:p,oldIndex:_,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Lk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}class Vk extends Nk{constructor(e){super(),this.firestore=e}convertBytes(e){return new ko(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $n(this.firestore,null,t)}}function bk(n){n=dc(n,Vc);const e=dc(n.firestore,Hf),t=Iw(e),i=new Vk(e);return kk(n._query),pk(t,n._query).then(o=>new xk(e,i,n,o))}function Mk(n,e){const t=dc(n.firestore,Hf),i=yk(n),o=Dk(n.converter,e);return Uk(t,[Sk(Ik(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,xr.exists(!1))]).then(()=>i)}function Uk(n,e){return function(i,o){const l=new wi;return i.asyncQueue.enqueueAndForget(async()=>tk(await dk(i),o,l)),l.promise}(Iw(n),e)}(function(e,t=!0){(function(o){xo=o})(_s),Wn(new Rn("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Hf(new NA(i.getProvider("auth-internal")),new LA(i.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new de(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new el(_.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),nn(uy,"4.7.3",e),nn(uy,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="firebasestorage.googleapis.com",Lw="storageBucket",Fk=2*60*1e3,jk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends An{constructor(e,t,i=0){super(Pd(e),`Firebase Storage: ${t} (${Pd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tt||(tt={}));function Pd(n){return"storage/"+n}function Xf(){const n="An unknown error occurred, please check the error payload for server response.";return new nt(tt.UNKNOWN,n)}function Bk(n){return new nt(tt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function zk(n){return new nt(tt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $k(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt(tt.UNAUTHENTICATED,n)}function Wk(){return new nt(tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qk(n){return new nt(tt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Hk(){return new nt(tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Kk(){return new nt(tt.CANCELED,"User canceled the upload/download.")}function Gk(n){return new nt(tt.INVALID_URL,"Invalid URL '"+n+"'.")}function Qk(n){return new nt(tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Yk(){return new nt(tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Lw+"' property when initializing the app?")}function Xk(){return new nt(tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Jk(){return new nt(tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Zk(n){return new nt(tt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function of(n){return new nt(tt.INVALID_ARGUMENT,n)}function Vw(){return new nt(tt.APP_DELETED,"The Firebase app was deleted.")}function e1(n){return new nt(tt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Wa(n,e){return new nt(tt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function xa(n){throw new nt(tt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=dn.makeFromUrl(e,t)}catch{return new dn(e,"")}if(i.path==="")return i;throw Qk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ae){ae.path.charAt(ae.path.length-1)==="/"&&(ae.path_=ae.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function _(ae){ae.path_=decodeURIComponent(ae.path)}const w="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),P="(/([^?#]*).*)?$",F=new RegExp(`^https?://${T}/${w}/b/${o}/o${P}`,"i"),z={bucket:1,path:3},$=t===xw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",re=new RegExp(`^https?://${$}/${o}/${M}`,"i"),ee=[{regex:f,indices:p,postModify:l},{regex:F,indices:z,postModify:_},{regex:re,indices:{bucket:1,path:2},postModify:_}];for(let ae=0;ae<ee.length;ae++){const Ce=ee[ae],Ie=Ce.regex.exec(e);if(Ie){const D=Ie[Ce.indices.bucket];let S=Ie[Ce.indices.path];S||(S=""),i=new dn(D,S),Ce.postModify(i);break}}if(i==null)throw Gk(e);return i}}class t1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function p(){return f===2}let _=!1;function w(...M){_||(_=!0,e.apply(null,M))}function T(M){o=setTimeout(()=>{o=null,n(F,p())},M)}function P(){l&&clearTimeout(l)}function F(M,...re){if(_){P();return}if(M){P(),w.call(null,M,...re);return}if(p()||h){P(),w.call(null,M,...re);return}i<64&&(i*=2);let ee;f===1?(f=2,ee=0):ee=(i+Math.random())*1e3,T(ee)}let z=!1;function $(M){z||(z=!0,P(),!_&&(o!==null?(M||(f=2),clearTimeout(o),T(0)):M||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,$(!0)},t),$}function r1(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(n){return n!==void 0}function s1(n){return typeof n=="object"&&!Array.isArray(n)}function Jf(n){return typeof n=="string"||n instanceof String}function qy(n){return Zf()&&n instanceof Blob}function Zf(){return typeof Blob<"u"}function Hy(n,e,t,i){if(i<e)throw of(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw of(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function bw(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ls;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ls||(ls={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,t,i,o,l,h,f,p,_,w,T,P=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=p,this.timeout_=_,this.progressCallback_=w,this.connectionFactory_=T,this.retry=P,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((F,z)=>{this.resolve_=F,this.reject_=z,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Uu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const p=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===ls.NO_ERROR,p=l.getStatus();if(!f||o1(p,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===ls.ABORT;i(!1,new Uu(!1,null,w));return}const _=this.successCodes_.indexOf(p)!==-1;i(!0,new Uu(_,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());i1(p)?l(p):l()}catch(p){h(p)}else if(f!==null){const p=Xf();p.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,p)):h(p)}else if(o.canceled){const p=this.appDelete_?Vw():Kk();h(p)}else{const p=Hk();h(p)}};this.canceled_?t(!1,new Uu(!1,null,!0)):this.backoffId_=n1(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&r1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function l1(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function u1(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function c1(n,e){e&&(n["X-Firebase-GMPID"]=e)}function h1(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function d1(n,e,t,i,o,l,h=!0){const f=bw(n.urlParams),p=n.url+f,_=Object.assign({},n.headers);return c1(_,e),l1(_,t),u1(_,l),h1(_,i),new a1(p,n.method,_,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function p1(...n){const e=f1();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Zf())return new Blob(n);throw new nt(tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function m1(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(n){if(typeof atob>"u")throw Zk("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class kd{constructor(e,t){this.data=e,this.contentType=t||null}}function y1(n,e){switch(n){case ir.RAW:return new kd(Mw(e));case ir.BASE64:case ir.BASE64URL:return new kd(Uw(n,e));case ir.DATA_URL:return new kd(v1(e),w1(e))}throw Xf()}function Mw(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=n.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function _1(n){let e;try{e=decodeURIComponent(n)}catch{throw Wa(ir.DATA_URL,"Malformed data URL.")}return Mw(e)}function Uw(n,e){switch(n){case ir.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Wa(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ir.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Wa(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=g1(e)}catch(o){throw o.message.includes("polyfill")?o:Wa(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class Fw{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Wa(ir.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=E1(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function v1(n){const e=new Fw(n);return e.base64?Uw(ir.BASE64,e.rest):_1(e.rest)}function w1(n){return new Fw(n).contentType}function E1(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){let i=0,o="";qy(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(qy(this.data_)){const i=this.data_,o=m1(i,e,t);return o===null?null:new pi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new pi(i,!0)}}static getBlob(...e){if(Zf()){const t=e.map(i=>i instanceof pi?i.data_:i);return new pi(p1.apply(null,t))}else{const t=e.map(h=>Jf(h)?y1(ir.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new pi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n){let e;try{e=JSON.parse(n)}catch{return null}return s1(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function I1(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Bw(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(n,e){return e}class Kt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||S1}}let Fu=null;function R1(n){return!Jf(n)||n.length<2?n:Bw(n)}function zw(){if(Fu)return Fu;const n=[];n.push(new Kt("bucket")),n.push(new Kt("generation")),n.push(new Kt("metageneration")),n.push(new Kt("name","fullPath",!0));function e(l,h){return R1(h)}const t=new Kt("name");t.xform=e,n.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Kt("size");return o.xform=i,n.push(o),n.push(new Kt("timeCreated")),n.push(new Kt("updated")),n.push(new Kt("md5Hash",null,!0)),n.push(new Kt("cacheControl",null,!0)),n.push(new Kt("contentDisposition",null,!0)),n.push(new Kt("contentEncoding",null,!0)),n.push(new Kt("contentLanguage",null,!0)),n.push(new Kt("contentType",null,!0)),n.push(new Kt("metadata","customMetadata",!0)),Fu=n,Fu}function A1(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new dn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function C1(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return A1(i,n),i}function $w(n,e,t){const i=jw(e);return i===null?null:C1(n,i,t)}function P1(n,e,t,i){const o=jw(e);if(o===null||!Jf(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(_=>{const w=n.bucket,T=n.fullPath,P="/b/"+h(w)+"/o/"+h(T),F=ep(P,t,i),z=bw({alt:"media",token:_});return F+z})[0]}function k1(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class Ww{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(n){if(!n)throw Xf()}function N1(n,e){function t(i,o){const l=$w(n,o,e);return qw(l!==null),l}return t}function D1(n,e){function t(i,o){const l=$w(n,o,e);return qw(l!==null),P1(l,o,n.host,n._protocol)}return t}function Hw(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Wk():o=$k():t.getStatus()===402?o=zk(n.bucket):t.getStatus()===403?o=qk(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function O1(n){const e=Hw(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=Bk(n.path)),l.serverResponse=o.serverResponse,l}return t}function x1(n,e,t){const i=e.fullServerUrl(),o=ep(i,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,f=new Ww(o,l,D1(n,t),h);return f.errorHandler=O1(e),f}function L1(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function V1(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=L1(null,e)),i}function b1(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let ee="";for(let ae=0;ae<2;ae++)ee=ee+Math.random().toString().slice(2);return ee}const p=f();h["Content-Type"]="multipart/related; boundary="+p;const _=V1(e,i,o),w=k1(_,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+w+`\r
--`+p+`\r
Content-Type: `+_.contentType+`\r
\r
`,P=`\r
--`+p+"--",F=pi.getBlob(T,i,P);if(F===null)throw Xk();const z={name:_.fullPath},$=ep(l,n.host,n._protocol),M="POST",re=n.maxUploadRetryTime,ie=new Ww($,M,N1(n,t),re);return ie.urlParams=z,ie.headers=h,ie.body=F.uploadData(),ie.errorHandler=Hw(e),ie}class M1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ls.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ls.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ls.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw xa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class U1 extends M1{initXhr(){this.xhr_.responseType="text"}}function Kw(){return new U1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this._service=e,t instanceof dn?this._location=t:this._location=dn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ps(e,t)}get root(){const e=new dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bw(this._location.path)}get storage(){return this._service}get parent(){const e=T1(this._location.path);if(e===null)return null;const t=new dn(this._location.bucket,e);return new ps(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw e1(e)}}function F1(n,e,t){n._throwIfRoot("uploadBytes");const i=b1(n.storage,n._location,zw(),new pi(e,!0),t);return n.storage.makeRequestWithTokens(i,Kw).then(o=>({metadata:o,ref:n}))}function j1(n){n._throwIfRoot("getDownloadURL");const e=x1(n.storage,n._location,zw());return n.storage.makeRequestWithTokens(e,Kw).then(t=>{if(t===null)throw Jk();return t})}function B1(n,e){const t=I1(n._location.path,e),i=new dn(n._location.bucket,t);return new ps(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(n){return/^[A-Za-z]+:\/\//.test(n)}function $1(n,e){return new ps(n,e)}function Gw(n,e){if(n instanceof tp){const t=n;if(t._bucket==null)throw Yk();const i=new ps(t,t._bucket);return e!=null?Gw(i,e):i}else return e!==void 0?B1(n,e):n}function W1(n,e){if(e&&z1(e)){if(n instanceof tp)return $1(n,e);throw of("To use ref(service, url), the first argument must be a Storage instance.")}else return Gw(n,e)}function Ky(n,e){const t=e==null?void 0:e[Lw];return t==null?null:dn.makeFromBucketSpec(t,n)}function q1(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:S_(o,n.app.options.projectId))}class tp{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=xw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Fk,this._maxUploadRetryTime=jk,this._requests=new Set,o!=null?this._bucket=dn.makeFromBucketSpec(o,this._host):this._bucket=Ky(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dn.makeFromBucketSpec(this._url,e):this._bucket=Ky(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ps(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new t1(Vw());{const h=d1(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Gy="@firebase/storage",Qy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="storage";function H1(n,e,t){return n=ht(n),F1(n,e,t)}function K1(n){return n=ht(n),j1(n)}function G1(n,e){return n=ht(n),W1(n,e)}function Q1(n=wc(),e){n=ht(n);const i=Ci(n,Qw).getImmediate({identifier:e}),o=E_("storage");return o&&Y1(i,...o),i}function Y1(n,e,t,i={}){q1(n,e,t,i)}function X1(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new tp(t,i,o,e,_s)}function J1(){Wn(new Rn(Qw,X1,"PUBLIC").setMultipleInstances(!0)),nn(Gy,Qy,""),nn(Gy,Qy,"esm2017")}J1();const Yw="@firebase/installations",np="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=1e4,Jw=`w:${np}`,Zw="FIS_v2",Z1="https://firebaseinstallations.googleapis.com/v1",eN=60*60*1e3,tN="installations",nN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ms=new ys(tN,nN,rN);function eE(n){return n instanceof An&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE({projectId:n}){return`${Z1}/projects/${n}/installations`}function nE(n){return{token:n.token,requestStatus:2,expiresIn:sN(n.expiresIn),creationTime:Date.now()}}async function rE(n,e){const i=(await e.json()).error;return ms.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function iE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function iN(n,{refreshToken:e}){const t=iE(n);return t.append("Authorization",oN(e)),t}async function sE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function sN(n){return Number(n.replace("s","000"))}function oN(n){return`${Zw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=tE(n),o=iE(n),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:Zw,appId:n.appId,sdkVersion:Jw},f={method:"POST",headers:o,body:JSON.stringify(h)},p=await sE(()=>fetch(i,f));if(p.ok){const _=await p.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:nE(_.authToken)}}else throw await rE("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=/^[cdef][\w-]{21}$/,af="";function cN(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=hN(n);return uN.test(t)?t:af}catch{return af}}function hN(n){return lN(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=new Map;function lE(n,e){const t=bc(n);uE(t,e),dN(t,e)}function uE(n,e){const t=aE.get(n);if(t)for(const i of t)i(e)}function dN(n,e){const t=fN();t&&t.postMessage({key:n,fid:e}),pN()}let os=null;function fN(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=n=>{uE(n.data.key,n.data.fid)}),os}function pN(){aE.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN="firebase-installations-database",gN=1,gs="firebase-installations-store";let Nd=null;function rp(){return Nd||(Nd=N_(mN,gN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(gs)}}})),Nd}async function pc(n,e){const t=bc(n),o=(await rp()).transaction(gs,"readwrite"),l=o.objectStore(gs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&lE(n,e.fid),e}async function cE(n){const e=bc(n),i=(await rp()).transaction(gs,"readwrite");await i.objectStore(gs).delete(e),await i.done}async function Mc(n,e){const t=bc(n),o=(await rp()).transaction(gs,"readwrite"),l=o.objectStore(gs),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&lE(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(n){let e;const t=await Mc(n.appConfig,i=>{const o=yN(i),l=_N(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===af?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function yN(n){const e=n||{fid:cN(),registrationStatus:0};return hE(e)}function _N(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ms.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=vN(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wN(n)}:{installationEntry:e}}async function vN(n,e){try{const t=await aN(n,e);return pc(n.appConfig,t)}catch(t){throw eE(t)&&t.customData.serverCode===409?await cE(n.appConfig):await pc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function wN(n){let e=await Yy(n.appConfig);for(;e.registrationStatus===1;)await oE(100),e=await Yy(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await ip(n);return i||t}return e}function Yy(n){return Mc(n,e=>{if(!e)throw ms.create("installation-not-found");return hE(e)})}function hE(n){return EN(n)?{fid:n.fid,registrationStatus:0}:n}function EN(n){return n.registrationStatus===1&&n.registrationTime+Xw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN({appConfig:n,heartbeatServiceProvider:e},t){const i=IN(n,t),o=iN(n,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:Jw,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},p=await sE(()=>fetch(i,f));if(p.ok){const _=await p.json();return nE(_)}else throw await rE("Generate Auth Token",p)}function IN(n,{fid:e}){return`${tE(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(n,e=!1){let t;const i=await Mc(n.appConfig,l=>{if(!dE(l))throw ms.create("not-registered");const h=l.authToken;if(!e&&AN(h))return l;if(h.requestStatus===1)return t=SN(n,e),l;{if(!navigator.onLine)throw ms.create("app-offline");const f=PN(l);return t=RN(n,f),f}});return t?await t:i.authToken}async function SN(n,e){let t=await Xy(n.appConfig);for(;t.authToken.requestStatus===1;)await oE(100),t=await Xy(n.appConfig);const i=t.authToken;return i.requestStatus===0?sp(n,e):i}function Xy(n){return Mc(n,e=>{if(!dE(e))throw ms.create("not-registered");const t=e.authToken;return kN(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function RN(n,e){try{const t=await TN(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await pc(n.appConfig,i),t}catch(t){if(eE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await cE(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pc(n.appConfig,i)}throw t}}function dE(n){return n!==void 0&&n.registrationStatus===2}function AN(n){return n.requestStatus===2&&!CN(n)}function CN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+eN}function PN(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function kN(n){return n.requestStatus===1&&n.requestTime+Xw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(n){const e=n,{installationEntry:t,registrationPromise:i}=await ip(e);return i?i.catch(console.error):sp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(n,e=!1){const t=n;return await ON(t),(await sp(t,e)).token}async function ON(n){const{registrationPromise:e}=await ip(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(n){if(!n||!n.options)throw Dd("App Configuration");if(!n.name)throw Dd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Dd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Dd(n){return ms.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="installations",LN="installations-internal",VN=n=>{const e=n.getProvider("app").getImmediate(),t=xN(e),i=Ci(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},bN=n=>{const e=n.getProvider("app").getImmediate(),t=Ci(e,fE).getImmediate();return{getId:()=>NN(t),getToken:o=>DN(t,o)}};function MN(){Wn(new Rn(fE,VN,"PUBLIC")),Wn(new Rn(LN,bN,"PRIVATE"))}MN();nn(Yw,np);nn(Yw,np,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="analytics",UN="firebase_id",FN="origin",jN=60*1e3,BN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",op="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new vc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new ys("analytics","Analytics",zN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(n){if(!n.startsWith(op)){const e=fn.create("invalid-gtag-resource",{gtagURL:n});return rn.warn(e.message),""}return n}function pE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function WN(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function qN(n,e){const t=WN("firebase-js-sdk-policy",{createScriptURL:$N}),i=document.createElement("script"),o=`${op}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function HN(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function KN(n,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const p=(await pE(t)).find(_=>_.measurementId===o);p&&await e[p.appId]}}catch(f){rn.error(f)}n("config",o,l)}async function GN(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await pE(t);for(const p of h){const _=f.find(T=>T.measurementId===p),w=_&&e[_.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){rn.error(l)}}function QN(n,e,t,i){async function o(l,...h){try{if(l==="event"){const[f,p]=h;await GN(n,e,t,f,p)}else if(l==="config"){const[f,p]=h;await KN(n,e,t,i,f,p)}else if(l==="consent"){const[f,p]=h;n("consent",f,p)}else if(l==="get"){const[f,p,_]=h;n("get",f,p,_)}else if(l==="set"){const[f]=h;n("set",f)}else n(l,...h)}catch(f){rn.error(f)}}return o}function YN(n,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=QN(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function XN(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(op)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=30,ZN=1e3;class eD{constructor(e={},t=ZN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mE=new eD;function tD(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function nD(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:tD(i)},l=BN.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let f="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function rD(n,e=mE,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw fn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw fn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new oD;return setTimeout(async()=>{f.abort()},jN),gE({appId:i,apiKey:o,measurementId:l},h,f,e)}async function gE(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=mE){var l;const{appId:h,measurementId:f}=n;try{await iD(i,e)}catch(p){if(f)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:f};throw p}try{const p=await nD(n);return o.deleteThrottleMetadata(h),p}catch(p){const _=p;if(!sD(_)){if(o.deleteThrottleMetadata(h),f)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:f};throw p}const w=Number((l=_==null?void 0:_.customData)===null||l===void 0?void 0:l.httpStatus)===503?Lg(t,o.intervalMillis,JN):Lg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(h,T),rn.debug(`Calling attemptFetch again in ${w} millis`),gE(n,T,i,o)}}function iD(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sD(n){if(!(n instanceof An)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class oD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function aD(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,h=Object.assign(Object.assign({},i),{send_to:l});n("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lD(){if(A_())try{await C_()}catch(n){return rn.warn(fn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return rn.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uD(n,e,t,i,o,l,h){var f;const p=rD(n);p.then(F=>{t[F.measurementId]=F.appId,n.options.measurementId&&F.measurementId!==n.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${F.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(F=>rn.error(F)),e.push(p);const _=lD().then(F=>{if(F)return i.getId()}),[w,T]=await Promise.all([p,_]);XN(l)||qN(l,w.measurementId),o("js",new Date);const P=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return P[FN]="firebase",P.update=!0,T!=null&&(P[UN]=T),o("config",w.measurementId,P),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.app=e}_delete(){return delete qa[this.app.options.appId],Promise.resolve()}}let qa={},Jy=[];const Zy={};let Od="dataLayer",hD="gtag",e_,yE,t_=!1;function dD(){const n=[];if(R_()&&n.push("This is a browser extension environment."),Q0()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=fn.create("invalid-analytics-context",{errorInfo:e});rn.warn(t.message)}}function fD(n,e,t){dD();const i=n.options.appId;if(!i)throw fn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(qa[i]!=null)throw fn.create("already-exists",{id:i});if(!t_){HN(Od);const{wrappedGtag:l,gtagCore:h}=YN(qa,Jy,Zy,Od,hD);yE=l,e_=h,t_=!0}return qa[i]=uD(n,Jy,Zy,e,e_,Od,t),new cD(n)}function pD(n=wc()){n=ht(n);const e=Ci(n,mc);return e.isInitialized()?e.getImmediate():mD(n)}function mD(n,e={}){const t=Ci(n,mc);if(t.isInitialized()){const o=t.getImmediate();if(Ga(e,t.getOptions()))return o;throw fn.create("already-initialized")}return t.initialize({options:e})}function gD(n,e,t,i){n=ht(n),aD(yE,qa[n.app.options.appId],e,t,i).catch(o=>rn.error(o))}const n_="@firebase/analytics",r_="0.10.8";function yD(){Wn(new Rn(mc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return fD(i,o,t)},"PUBLIC")),Wn(new Rn("analytics-internal",n,"PRIVATE")),nn(n_,r_),nn(n_,r_,"esm2017");function n(e){try{const t=e.getProvider(mc).getImmediate();return{logEvent:(i,o,l)=>gD(t,i,o,l)}}catch(t){throw fn.create("interop-component-reg-failed",{reason:t})}}}yD();const _D={apiKey:"AIzaSyBCBq55yevKueyI2GMrbmgS4i_au5DC7yw",authDomain:"spacebnb-62b15.firebaseapp.com",projectId:"spacebnb-62b15",storageBucket:"spacebnb-62b15.firebasestorage.app",messagingSenderId:"914985828104",appId:"1:914985828104:web:6e545e341eff1ec712b6bd",measurementId:"G-GYDESJD1SZ"},Uc=D_(_D),gc=AA(Uc),_E=_k(Uc),vD=Q1(Uc);pD(Uc);const wD=()=>{const[n,e]=Z.useState([]);return Z.useEffect(()=>{(async()=>{const i=await bk(Tw(_E,"spaces"));e(i.docs.map(o=>({id:o.id,...o.data()})))})()},[]),ge.jsxs("div",{style:{padding:"1rem"},children:[ge.jsx("h2",{children:"Espaces disponibles"}),n.map(t=>ge.jsxs("div",{style:{marginBottom:"1rem",border:"1px solid #ccc",padding:"1rem"},children:[ge.jsx("h3",{children:t.title}),ge.jsx("p",{children:t.description}),ge.jsxs("p",{children:[ge.jsx("strong",{children:t.category})," - ",t.price,"€/h"]}),t.imageUrl&&ge.jsx("img",{src:t.imageUrl,alt:t.title,style:{width:"200px"}})]},t.id))]})},ED=()=>{const[n,e]=Z.useState(""),[t,i]=Z.useState(""),[o,l]=Z.useState(""),[h,f]=Z.useState("Salle de sport"),[p,_]=Z.useState(null),w=async T=>{T.preventDefault();let P="";if(p){const F=G1(vD,"spaces/"+p.name);await H1(F,p),P=await K1(F)}await Mk(Tw(_E,"spaces"),{title:n,description:t,price:o,category:h,imageUrl:P}),alert("Espace publié !"),e(""),i(""),l(""),f("Salle de sport"),_(null)};return ge.jsxs("form",{onSubmit:w,style:{padding:"1rem"},children:[ge.jsx("h2",{children:"Publier un espace"}),ge.jsx("input",{value:n,onChange:T=>e(T.target.value),placeholder:"Titre",required:!0}),ge.jsx("br",{}),ge.jsx("textarea",{value:t,onChange:T=>i(T.target.value),placeholder:"Description",required:!0}),ge.jsx("br",{}),ge.jsx("input",{type:"number",value:o,onChange:T=>l(T.target.value),placeholder:"Prix/heure (€)",required:!0}),ge.jsx("br",{}),ge.jsxs("select",{value:h,onChange:T=>f(T.target.value),children:[ge.jsx("option",{children:"Salle de sport"}),ge.jsx("option",{children:"Jardin"}),ge.jsx("option",{children:"Cuisine"}),ge.jsx("option",{children:"Piscine"})]}),ge.jsx("br",{}),ge.jsx("input",{type:"file",onChange:T=>_(T.target.files[0])}),ge.jsx("br",{}),ge.jsx("button",{type:"submit",children:"Publier"})]})},TD=()=>{const[n,e]=Z.useState(""),[t,i]=Z.useState(""),o=()=>hR(gc,n,t).catch(alert),l=()=>cR(gc,n,t).catch(alert);return ge.jsxs("div",{style:{padding:"1rem"},children:[ge.jsx("h2",{children:"Connexion / Inscription"}),ge.jsx("input",{value:n,onChange:h=>e(h.target.value),placeholder:"Email"}),ge.jsx("br",{}),ge.jsx("input",{value:t,onChange:h=>i(h.target.value),placeholder:"Mot de passe",type:"password"}),ge.jsx("br",{}),ge.jsx("button",{onClick:o,children:"Connexion"}),ge.jsx("button",{onClick:l,style:{marginLeft:"1rem"},children:"Créer un compte"})]})},ID=({isHost:n,toggleRole:e})=>{const t=async()=>{await mR(gc)};return ge.jsxs("header",{style:{padding:"1rem",background:"#eee"},children:[ge.jsx("h2",{children:"SpaceBnB"}),ge.jsxs("nav",{children:[ge.jsx(kg,{to:"/",children:"Accueil"}),n&&ge.jsx(kg,{to:"/host",style:{marginLeft:"1rem"},children:"Hôte"}),ge.jsxs("button",{onClick:e,style:{marginLeft:"1rem"},children:["Mode ",n?"Client":"Hôte"]}),ge.jsx("button",{onClick:t,style:{marginLeft:"1rem"},children:"Déconnexion"})]})]})},SD=()=>{const[n,e]=Z.useState(null),[t,i]=Z.useState(!1);return Z.useEffect(()=>{const o=pR(gc,e);return()=>o()},[]),ge.jsxs(D0,{children:[n&&ge.jsx(ID,{isHost:t,toggleRole:()=>i(!t)}),ge.jsxs(S0,{children:[ge.jsx(ju,{path:"/",element:n?ge.jsx(wD,{}):ge.jsx(Cg,{to:"/login"})}),ge.jsx(ju,{path:"/host",element:n&&t?ge.jsx(ED,{}):ge.jsx(Cg,{to:"/"})}),ge.jsx(ju,{path:"/login",element:ge.jsx(TD,{})})]})]})};xT.createRoot(document.getElementById("root")).render(ge.jsx(SD,{}));
