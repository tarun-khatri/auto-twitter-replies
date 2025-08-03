function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r$1=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(a){if(null===a||"object"!==typeof a)return null;a=z$1&&a[z$1]||a["@@iterator"];return "function"===typeof a?a:null}
var B$1={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}E$1.prototype.isReactComponent={};
E$1.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$1.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E$1.prototype;function G$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}var H$1=G$1.prototype=new F;
H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};
function M$1(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L$1.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$1,type:a,key:k,ref:h,props:c,_owner:K$1.current}}
function N$1(a,b){return {$$typeof:l$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$1(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$1}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$1=/\/+/g;function Q$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R$1(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$1:case n$1:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$1(h,0):d,I$1(c)?(e="",null!=a&&(e=a.replace(P$1,"$&/")+"/"),R$1(c,b,e,"",function(a){return a})):null!=c&&(O$1(c)&&(c=N$1(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$1(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q$1(k,g);h+=R$1(k,b,e,f,c);}else if(f=A$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$1(k,g++),h+=R$1(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S$1(a,b,e){if(null==a)return a;var d=[],c=0;R$1(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$1(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};function X$1(){throw Error("act(...) is not supported in production builds of React.");}
react_production_min.Children={map:S$1,forEach:function(a,b,e){S$1(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$1(a,function(){b++;});return b},toArray:function(a){return S$1(a,function(a){return a})||[]},only:function(a){if(!O$1(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r$1;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.act=X$1;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$1({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K$1.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L$1.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$1,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M$1;react_production_min.createFactory=function(a){var b=M$1.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v$1,render:a}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T$1}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V$1.transition;V$1.transition={};try{a();}finally{V$1.transition=b;}};react_production_min.unstable_act=X$1;react_production_min.useCallback=function(a,b){return U$1.current.useCallback(a,b)};react_production_min.useContext=function(a){return U$1.current.useContext(a)};
react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$1.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U$1.current.useEffect(a,b)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U$1.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U$1.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U$1.current.useLayoutEffect(a,b)};
react_production_min.useMemo=function(a,b){return U$1.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U$1.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U$1.current.useRef(a)};react_production_min.useState=function(a){return U$1.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U$1.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.3.1";

{
  react.exports = react_production_min;
}

var reactExports = react.exports;
const React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p$1.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var client = {};

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
	function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
	"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
	function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
	function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
	exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
	exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
	exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
	exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
} (scheduler_production_min));

{
  scheduler.exports = scheduler_production_min;
}

var schedulerExports = scheduler.exports;

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=reactExports,ca=schedulerExports;function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1);});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1);});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0);});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return ""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return !1}return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
function Gg(a){if(a!==xg)return !1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
function Vh(a,b){return "function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return !0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b);};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo);}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1;}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return !1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1;}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

{
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  reactDom.exports = reactDom_production_min;
}

var reactDomExports = reactDom.exports;
const ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
var removedBarSizeVariable = '--removed-body-scroll-bar-size';

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef$1(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef$1(initialValue, callback) {
    var ref = reactExports.useState(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? reactExports.useLayoutEffect : reactExports.useEffect;
var currentValues = new WeakMap();
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs$1(refs, defaultValue) {
    var callbackRef = useCallbackRef$1(defaultValue || null, function (newValue) {
        return refs.forEach(function (ref) { return assignRef$1(ref, newValue); });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function () {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function (ref) {
                if (!nextRefs_1.has(ref)) {
                    assignRef$1(ref, null);
                }
            });
            nextRefs_1.forEach(function (ref) {
                if (!prevRefs_1.has(ref)) {
                    assignRef$1(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
}

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
}

var SideCar$1 = function (_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return reactExports.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar$1;
}

var effectCar = createSidecarMedium();

var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll$1 = reactExports.forwardRef(function (props, parentRef) {
    var ref = reactExports.useRef(null);
    var _a = reactExports.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs$1([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return (reactExports.createElement(reactExports.Fragment, null,
        enabled && (reactExports.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noRelative: noRelative, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode: gapMode })),
        forwardProps ? (reactExports.cloneElement(reactExports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef }))) : (reactExports.createElement(Container, __assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll$1.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll$1.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName,
};

var currentNonce;
var getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};

/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles, isDynamic) {
        reactExports.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};

/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};

var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

var Style = styleSingleton();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function () {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function () {
    reactExports.useEffect(function () {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function () {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            }
            else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = reactExports.useMemo(function () { return getGapWidth(gapMode); }, [gapMode]);
    return reactExports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};

var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== ownerDocument.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = (target.parentNode.host || target.parentNode);
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScroll) < 1) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScrollTop) < 1) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = reactExports.useRef([]);
    var touchStartRef = reactExports.useRef([0, 0]);
    var activeAxis = reactExports.useRef();
    var id = reactExports.useState(idCounter++)[0];
    var Style = reactExports.useState(styleSingleton)[0];
    var lastProps = reactExports.useRef(props);
    reactExports.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    reactExports.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = reactExports.useCallback(function (event, parent) {
        if (('touches' in event && event.touches.length === 2) || (event.type === 'wheel' && event.ctrlKey)) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = reactExports.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = reactExports.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should, shadowParent: getOutermostShadowParent(target) };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = reactExports.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = reactExports.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = reactExports.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    reactExports.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (reactExports.createElement(reactExports.Fragment, null,
        inert ? reactExports.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? reactExports.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null));
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while (node !== null) {
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}

const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = reactExports.forwardRef(function (props, ref) { return (reactExports.createElement(RemoveScroll$1, __assign({}, props, { ref: ref, sideCar: SideCar }))); });
ReactRemoveScroll.classNames = RemoveScroll$1.classNames;
const RemoveScroll = ReactRemoveScroll;

function keys(object) {
  return Object.keys(object);
}

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const result = { ...target };
  const _source = source;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }
  return result;
}

function camelToKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function getTransformedScaledValue(value) {
  if (typeof value !== "string" || !value.includes("var(--mantine-scale)")) {
    return value;
  }
  return value.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim();
}
function px(value) {
  const transformedValue = getTransformedScaledValue(value);
  if (typeof transformedValue === "number") {
    return transformedValue;
  }
  if (typeof transformedValue === "string") {
    if (transformedValue.includes("calc") || transformedValue.includes("var")) {
      return transformedValue;
    }
    if (transformedValue.includes("px")) {
      return Number(transformedValue.replace("px", ""));
    }
    if (transformedValue.includes("rem")) {
      return Number(transformedValue.replace("rem", "")) * 16;
    }
    if (transformedValue.includes("em")) {
      return Number(transformedValue.replace("em", "")) * 16;
    }
    return Number(transformedValue);
  }
  return NaN;
}

function scaleRem(remValue) {
  if (remValue === "0rem") {
    return "0rem";
  }
  return `calc(${remValue} * var(--mantine-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  function converter(value) {
    if (value === 0 || value === "0") {
      return `0${units}`;
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value === "") {
        return value;
      }
      if (value.startsWith("calc(") || value.startsWith("clamp(") || value.includes("rgba(")) {
        return value;
      }
      if (value.includes(",")) {
        return value.split(",").map((val) => converter(val)).join(",");
      }
      if (value.includes(" ")) {
        return value.split(" ").map((val) => converter(val)).join(" ");
      }
      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  }
  return converter;
}
const rem = createConverter("rem", { shouldScale: true });
const em = createConverter("em");

function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}

function isNumberLike(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
      return true;
    }
    const cssUnitsRegex = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    const values = value.trim().split(/\s+/);
    return values.every((val) => cssUnitsRegex.test(val));
  }
  return false;
}

function isElement(value) {
  if (Array.isArray(value) || value === null) {
    return false;
  }
  if (typeof value === "object") {
    if (value.type === reactExports.Fragment) {
      return false;
    }
    return true;
  }
  return false;
}

function createSafeContext(errorMessage) {
  const Context = reactExports.createContext(null);
  const useSafeContext = () => {
    const ctx = reactExports.useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
  return [Provider, useSafeContext];
}

function createOptionalContext(initialValue = null) {
  const Context = reactExports.createContext(initialValue);
  const useOptionalContext = () => reactExports.useContext(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
  return [Provider, useOptionalContext];
}

const elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(level) {
  return elevations[level];
}

function getSize(size, prefix = "size", convertToRem = true) {
  if (size === void 0) {
    return void 0;
  }
  return isNumberLike(size) ? convertToRem ? rem(size) : size : `var(--${prefix}-${size})`;
}
function getSpacing(size) {
  return getSize(size, "mantine-spacing");
}
function getRadius(size) {
  if (size === void 0) {
    return "var(--mantine-radius-default)";
  }
  return getSize(size, "mantine-radius");
}
function getFontSize(size) {
  return getSize(size, "mantine-font-size");
}
function getLineHeight(size) {
  return getSize(size, "mantine-line-height", false);
}
function getShadow(size) {
  if (!size) {
    return void 0;
  }
  return getSize(size, "mantine-shadow", false);
}

function randomId(prefix = "mantine-") {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}

function useCallbackRef(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

function useDebouncedCallback(callback, options) {
  const delay = typeof options === "number" ? options : options.delay;
  const flushOnUnmount = typeof options === "number" ? false : options.flushOnUnmount;
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = reactExports.useRef(0);
  const flushRef = reactExports.useRef(() => {
  });
  const lastCallback = Object.assign(
    reactExports.useCallback(
      (...args) => {
        window.clearTimeout(debounceTimerRef.current);
        const flush = () => {
          if (debounceTimerRef.current !== 0) {
            debounceTimerRef.current = 0;
            handleCallback(...args);
          }
        };
        flushRef.current = flush;
        lastCallback.flush = flush;
        debounceTimerRef.current = window.setTimeout(flush, delay);
      },
      [handleCallback, delay]
    ),
    { flush: flushRef.current }
  );
  reactExports.useEffect(
    () => () => {
      window.clearTimeout(debounceTimerRef.current);
      if (flushOnUnmount) {
        lastCallback.flush();
      }
    },
    [lastCallback, flushOnUnmount]
  );
  return lastCallback;
}

function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches, setMatches] = reactExports.useState(
    getInitialValueInEffect ? initialValue : getInitialValue(query)
  );
  const queryRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches;
}

const useIsomorphicEffect = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;

function useDidUpdate(fn, dependencies) {
  const mounted = reactExports.useRef(false);
  reactExports.useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );
  reactExports.useEffect(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}

function useFocusReturn({ opened, shouldReturnFocus = true }) {
  const lastActiveElement = reactExports.useRef(null);
  const returnFocus = () => {
    if (lastActiveElement.current && "focus" in lastActiveElement.current && typeof lastActiveElement.current.focus === "function") {
      lastActiveElement.current?.focus({ preventScroll: true });
    }
  };
  useDidUpdate(() => {
    let timeout = -1;
    const clearFocusTimeout = (event) => {
      if (event.key === "Tab") {
        window.clearTimeout(timeout);
      }
    };
    document.addEventListener("keydown", clearFocusTimeout);
    if (opened) {
      lastActiveElement.current = document.activeElement;
    } else if (shouldReturnFocus) {
      timeout = window.setTimeout(returnFocus, 10);
    }
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("keydown", clearFocusTimeout);
    };
  }, [opened, shouldReturnFocus]);
  return returnFocus;
}

const TABBABLE_NODES = /input|select|textarea|button|object/;
const FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
function hidden(element) {
  return element.style.display === "none";
}
function visible(element) {
  const isHidden = element.getAttribute("aria-hidden") || element.getAttribute("hidden") || element.getAttribute("type") === "hidden";
  if (isHidden) {
    return false;
  }
  let parentElement = element;
  while (parentElement) {
    if (parentElement === document.body || parentElement.nodeType === 11) {
      break;
    }
    if (hidden(parentElement)) {
      return false;
    }
    parentElement = parentElement.parentNode;
  }
  return true;
}
function getElementTabIndex(element) {
  let tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) {
    tabIndex = void 0;
  }
  return parseInt(tabIndex, 10);
}
function focusable(element) {
  const nodeName = element.nodeName.toLowerCase();
  const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
  const res = (
    // @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition
    TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN)
  );
  return res && visible(element);
}
function tabbable(element) {
  const tabIndex = getElementTabIndex(element);
  const isTabIndexNaN = Number.isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
}
function findTabbableDescendants(element) {
  return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
}

function scopeTab(node, event) {
  const tabbable = findTabbableDescendants(node);
  if (!tabbable.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
  const root = node.getRootNode();
  let leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;
  const activeElement = root.activeElement;
  const activeElementIsRadio = activeElement.tagName === "INPUT" && activeElement.getAttribute("type") === "radio";
  if (activeElementIsRadio) {
    const activeRadioGroup = tabbable.filter(
      (element) => element.getAttribute("type") === "radio" && element.getAttribute("name") === activeElement.getAttribute("name")
    );
    leavingFinalTabbable = activeRadioGroup.includes(finalTabbable);
  }
  if (!leavingFinalTabbable) {
    return;
  }
  event.preventDefault();
  const target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
  if (target) {
    target.focus();
  }
}

function useFocusTrap(active = true) {
  const ref = reactExports.useRef(null);
  const focusNode = (node) => {
    let focusElement = node.querySelector("[data-autofocus]");
    if (!focusElement) {
      const children = Array.from(node.querySelectorAll(FOCUS_SELECTOR));
      focusElement = children.find(tabbable) || children.find(focusable) || null;
      if (!focusElement && focusable(node)) {
        focusElement = node;
      }
    }
    if (focusElement) {
      focusElement.focus({ preventScroll: true });
    }
  };
  const setRef = reactExports.useCallback(
    (node) => {
      if (!active) {
        return;
      }
      if (node === null) {
        return;
      }
      if (ref.current === node) {
        return;
      }
      if (node) {
        setTimeout(() => {
          if (node.getRootNode()) {
            focusNode(node);
          }
        });
        ref.current = node;
      } else {
        ref.current = null;
      }
    },
    [active]
  );
  reactExports.useEffect(() => {
    if (!active) {
      return void 0;
    }
    ref.current && setTimeout(() => focusNode(ref.current));
    const handleKeyDown = (event) => {
      if (event.key === "Tab" && ref.current) {
        scopeTab(ref.current, event);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active]);
  return setRef;
}

const __useId = React["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `mantine-${id.replace(/:/g, "")}` : "";
}

function useId(staticId) {
  const reactId = useReactId();
  const [uuid, setUuid] = reactExports.useState(reactId);
  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);
  if (typeof staticId === "string") {
    return staticId;
  }
  if (typeof window === "undefined") {
    return reactId;
  }
  return uuid;
}

function useWindowEvent(type, listener, options) {
  reactExports.useEffect(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
}

function assignRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}
function mergeRefs(...refs) {
  const cleanupMap = /* @__PURE__ */ new Map();
  return (node) => {
    refs.forEach((ref) => {
      const cleanup = assignRef(ref, node);
      if (cleanup) {
        cleanupMap.set(ref, cleanup);
      }
    });
    if (cleanupMap.size > 0) {
      return () => {
        refs.forEach((ref) => {
          const cleanup = cleanupMap.get(ref);
          if (cleanup) {
            cleanup();
          } else {
            assignRef(ref, null);
          }
        });
        cleanupMap.clear();
      };
    }
  };
}
function useMergedRef(...refs) {
  return reactExports.useCallback(mergeRefs(...refs), refs);
}

function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = reactExports.useState(
    defaultValue !== void 0 ? defaultValue : finalValue
  );
  const handleUncontrolledChange = (val, ...payload) => {
    setUncontrolledValue(val);
    onChange?.(val, ...payload);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}

function useReducedMotion(initialValue, options) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue, options);
}

function useDisclosure(initialState = false, callbacks) {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = reactExports.useState(initialState);
  const open = reactExports.useCallback(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen?.();
        return true;
      }
      return isOpened;
    });
  }, [onOpen]);
  const close = reactExports.useCallback(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose?.();
        return false;
      }
      return isOpened;
    });
  }, [onClose]);
  const toggle = reactExports.useCallback(() => {
    opened ? close() : open();
  }, [close, open, opened]);
  return [opened, { open, close, toggle }];
}

function createVarsResolver(resolver) {
  return resolver;
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
  const merged = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = clsx(merged[key], value);
      } else {
        merged[key] = value;
      }
    });
  });
  return merged;
}
function resolveClassNames({ theme, classNames, props, stylesCtx }) {
  const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
  const resolvedClassNames = arrayClassNames.map(
    (item) => typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES
  );
  return mergeClassNames(resolvedClassNames);
}

function resolveStyles({ theme, styles, props, stylesCtx }) {
  const arrayStyles = Array.isArray(styles) ? styles : [styles];
  return arrayStyles.reduce((acc, style) => {
    if (typeof style === "function") {
      return { ...acc, ...style(theme, props, stylesCtx) };
    }
    return { ...acc, ...style };
  }, {});
}

const MantineContext = reactExports.createContext(null);
function useMantineContext() {
  const ctx = reactExports.useContext(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  return ctx;
}
function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}
function useMantineWithStaticClasses() {
  return useMantineContext().withStaticClasses;
}
function useMantineIsHeadless() {
  return useMantineContext().headless;
}
function useMantineSxTransform() {
  return useMantineContext().stylesTransform?.sx;
}
function useMantineStylesTransform() {
  return useMantineContext().stylesTransform?.styles;
}
function useMantineEnv() {
  return useMantineContext().env || "default";
}

function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  if (hexString.length === 8) {
    const alpha = parseInt(hexString.slice(6, 8), 16) / 255;
    return {
      r: parseInt(hexString.slice(0, 2), 16),
      g: parseInt(hexString.slice(2, 4), 16),
      b: parseInt(hexString.slice(4, 6), 16),
      a: alpha
    };
  }
  const parsed = parseInt(hexString, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r, g, b, a: a || 1 };
}
function hslStringToRgba(hslaString) {
  const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
  const matches = hslaString.match(hslaRegex);
  if (!matches) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  const h = parseInt(matches[1], 10);
  const s = parseInt(matches[2], 10) / 100;
  const l = parseInt(matches[3], 10) / 100;
  const a = matches[5] ? parseFloat(matches[5]) : void 0;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = l - chroma / 2;
  let r;
  let g;
  let b;
  if (huePrime >= 0 && huePrime < 1) {
    r = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r = x;
    g = 0;
    b = chroma;
  } else {
    r = chroma;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1
  };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  if (color.startsWith("hsl")) {
    return hslStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}

function darken(color, alpha) {
  if (color.startsWith("var(")) {
    return `color-mix(in srgb, ${color}, black ${alpha * 100}%)`;
  }
  const { r, g, b, a } = toRgba(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
}

function getPrimaryShade(theme, colorScheme) {
  if (typeof theme.primaryShade === "number") {
    return theme.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme.primaryShade.dark;
  }
  return theme.primaryShade.light;
}

function gammaCorrect(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function getLightnessFromOklch(oklchColor) {
  const match = oklchColor.match(/oklch\((.*?)%\s/);
  return match ? parseFloat(match[1]) : null;
}
function luminance(color) {
  if (color.startsWith("oklch(")) {
    return (getLightnessFromOklch(color) || 0) / 100;
  }
  const { r, g, b } = toRgba(color);
  const sR = r / 255;
  const sG = g / 255;
  const sB = b / 255;
  const rLinear = gammaCorrect(sR);
  const gLinear = gammaCorrect(sG);
  const bLinear = gammaCorrect(sB);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
function isLightColor(color, luminanceThreshold = 0.179) {
  if (color.startsWith("var(")) {
    return false;
  }
  return luminance(color) > luminanceThreshold;
}

function parseThemeColor({
  color,
  theme,
  colorScheme
}) {
  if (typeof color !== "string") {
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof color}`
    );
  }
  if (color === "bright") {
    return {
      color,
      value: colorScheme === "dark" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  }
  if (color === "dimmed") {
    return {
      color,
      value: colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  }
  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        color === "white" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: `--mantine-color-${color}`
    };
  }
  const [_color, shade] = color.split(".");
  const colorShade = shade ? Number(shade) : void 0;
  const isThemeColor = _color in theme.colors;
  if (isThemeColor) {
    const colorValue = colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][getPrimaryShade(theme, colorScheme || "light")];
    return {
      color: _color,
      value: colorValue,
      shade: colorShade,
      isThemeColor,
      isLight: isLightColor(colorValue, theme.luminanceThreshold),
      variable: shade ? `--mantine-color-${_color}-${colorShade}` : `--mantine-color-${_color}-filled`
    };
  }
  return {
    color,
    value: color,
    isThemeColor,
    isLight: isLightColor(color, theme.luminanceThreshold),
    shade: colorShade,
    variable: void 0
  };
}

function getThemeColor(color, theme) {
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}

function getGradient(gradient, theme) {
  const merged = {
    from: gradient?.from || theme.defaultGradient.from,
    to: gradient?.to || theme.defaultGradient.to,
    deg: gradient?.deg ?? theme.defaultGradient.deg ?? 0
  };
  const fromColor = getThemeColor(merged.from, theme);
  const toColor = getThemeColor(merged.to, theme);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}

function rgba(color, alpha2) {
  if (typeof color !== "string" || alpha2 > 1 || alpha2 < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  if (color.startsWith("var(")) {
    const mixPercentage = (1 - alpha2) * 100;
    return `color-mix(in srgb, ${color}, transparent ${mixPercentage}%)`;
  }
  if (color.startsWith("oklch")) {
    if (color.includes("/")) {
      return color.replace(/\/\s*[\d.]+\s*\)/, `/ ${alpha2})`);
    }
    return color.replace(")", ` / ${alpha2})`);
  }
  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha2})`;
}
const alpha = rgba;

const defaultVariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient,
  autoContrast
}) => {
  const parsed = parseThemeColor({ color, theme });
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (variant === "filled") {
    const textColor = _autoContrast ? parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)" : "var(--mantine-color-white)";
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-filled)`,
          hover: `var(--mantine-color-${color}-filled-hover)`,
          color: textColor,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: textColor,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: darken(color, 0.1),
      color: textColor,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-light)`,
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: rgba(parsedColor, 0.1),
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: rgba(color, 0.1),
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-outline-hover)`,
          color: `var(--mantine-color-${color}-outline)`,
          border: `${rem(1)} solid var(--mantine-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.05),
      color,
      border: `${rem(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--mantine-color-white)",
          hover: darken(theme.white, 0.01),
          color: `var(--mantine-color-${color}-filled)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "var(--mantine-color-white)",
        hover: darken(theme.white, 0.01),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "var(--mantine-color-white)",
      hover: darken(theme.white, 0.01),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: getGradient(gradient, theme),
      hover: getGradient(gradient, theme),
      color: "var(--mantine-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--mantine-color-default)",
      hover: "var(--mantine-color-default-hover)",
      color: "var(--mantine-color-default-color)",
      border: `${rem(1)} solid var(--mantine-color-default-border)`
    };
  }
  return {};
};

const DEFAULT_COLORS = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};

const DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
const DEFAULT_THEME = {
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: defaultVariantColorsResolver,
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: false,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: rem(34), lineHeight: "1.3" },
      h2: { fontSize: rem(26), lineHeight: "1.35" },
      h3: { fontSize: rem(22), lineHeight: "1.4" },
      h4: { fontSize: rem(18), lineHeight: "1.45" },
      h5: { fontSize: rem(16), lineHeight: "1.5" },
      h6: { fontSize: rem(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32)
  },
  spacing: {
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(10)} ${rem(
      15
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(7)} ${rem(7)} ${rem(-5)}`,
    md: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(20)} ${rem(
      25
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(10)} ${rem(10)} ${rem(-5)}`,
    lg: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(28)} ${rem(
      23
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(12)} ${rem(12)} ${rem(-7)}`,
    xl: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(36)} ${rem(
      28
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(17)} ${rem(17)} ${rem(-7)}`
  },
  other: {},
  components: {}
};

function isMantineColorScheme(value) {
  return value === "auto" || value === "dark" || value === "light";
}

function localStorageColorSchemeManager({
  key = "mantine-color-scheme-value"
} = {}) {
  let handleStorageEvent;
  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }
      try {
        const storedColorScheme = window.localStorage.getItem(key);
        return isMantineColorScheme(storedColorScheme) ? storedColorScheme : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          error
        );
      }
    },
    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };
      window.addEventListener("storage", handleStorageEvent);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },
    clear: () => {
      window.localStorage.removeItem(key);
    }
  };
}

const INVALID_PRIMARY_COLOR_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color";
const INVALID_PRIMARY_SHADE_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
  if (shade < 0 || shade > 9) {
    return false;
  }
  return parseInt(shade.toString(), 10) === shade;
}
function validateMantineTheme(theme) {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
  if (typeof theme.primaryShade === "object") {
    if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}
function mergeMantineTheme(currentTheme, themeOverride) {
  if (!themeOverride) {
    validateMantineTheme(currentTheme);
    return currentTheme;
  }
  const result = deepMerge(currentTheme, themeOverride);
  if (themeOverride.fontFamily && !themeOverride.headings?.fontFamily) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }
  validateMantineTheme(result);
  return result;
}

const MantineThemeContext = reactExports.createContext(null);
const useSafeMantineTheme = () => reactExports.useContext(MantineThemeContext) || DEFAULT_THEME;
function useMantineTheme() {
  const ctx = reactExports.useContext(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  }
  return ctx;
}
function MantineThemeProvider({
  theme,
  children,
  inherit = true
}) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = reactExports.useMemo(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MantineThemeContext.Provider, { value: mergedTheme, children });
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";

function MantineClasses() {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const classes = keys(theme.breakpoints).reduce((acc, breakpoint) => {
    const isPxBreakpoint = theme.breakpoints[breakpoint].includes("px");
    const pxValue = px(theme.breakpoints[breakpoint]);
    const maxWidthBreakpoint = isPxBreakpoint ? `${pxValue - 0.1}px` : em(pxValue - 0.1);
    const minWidthBreakpoint = isPxBreakpoint ? `${pxValue}px` : em(pxValue);
    return `${acc}@media (max-width: ${maxWidthBreakpoint}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${minWidthBreakpoint}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: classes }
    }
  );
}

function cssVariablesObjectToString(variables) {
  return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
}

function wrapWithSelector(selectors, code) {
  const _selectors = Array.isArray(selectors) ? selectors : [selectors];
  return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
}

function convertCssVariables(input, selector) {
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? wrapWithSelector(selector, sharedVariables) : "";
  const dark = cssVariablesObjectToString(input.dark);
  const light = cssVariablesObjectToString(input.light);
  const darkForced = dark ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="dark"])`, dark) : wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark) : "";
  const lightForced = light ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="light"])`, light) : wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light) : "";
  return `${shared}${darkForced}${lightForced}`;
}

function getContrastColor({ color, theme, autoContrast }) {
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (!_autoContrast) {
    return "var(--mantine-color-white)";
  }
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function getPrimaryContrastColor(theme, colorScheme) {
  return getContrastColor({
    color: theme.colors[theme.primaryColor][getPrimaryShade(theme, colorScheme)],
    theme,
    autoContrast: null
  });
}

function getCSSColorVariables({
  theme,
  color,
  colorScheme,
  name = color,
  withColorValues = true
}) {
  if (!theme.colors[color]) {
    return {};
  }
  if (colorScheme === "light") {
    const primaryShade2 = getPrimaryShade(theme, "light");
    const dynamicVariables2 = {
      [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-filled)`,
      [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade2 === 9 ? 8 : primaryShade2 + 1})`,
      [`--mantine-color-${name}-light`]: alpha(theme.colors[color][primaryShade2], 0.1),
      [`--mantine-color-${name}-light-hover`]: alpha(theme.colors[color][primaryShade2], 0.12),
      [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline-hover`]: alpha(theme.colors[color][primaryShade2], 0.05)
    };
    if (!withColorValues) {
      return dynamicVariables2;
    }
    return {
      [`--mantine-color-${name}-0`]: theme.colors[color][0],
      [`--mantine-color-${name}-1`]: theme.colors[color][1],
      [`--mantine-color-${name}-2`]: theme.colors[color][2],
      [`--mantine-color-${name}-3`]: theme.colors[color][3],
      [`--mantine-color-${name}-4`]: theme.colors[color][4],
      [`--mantine-color-${name}-5`]: theme.colors[color][5],
      [`--mantine-color-${name}-6`]: theme.colors[color][6],
      [`--mantine-color-${name}-7`]: theme.colors[color][7],
      [`--mantine-color-${name}-8`]: theme.colors[color][8],
      [`--mantine-color-${name}-9`]: theme.colors[color][9],
      ...dynamicVariables2
    };
  }
  const primaryShade = getPrimaryShade(theme, "dark");
  const dynamicVariables = {
    [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-4)`,
    [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade})`,
    [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade === 9 ? 8 : primaryShade + 1})`,
    [`--mantine-color-${name}-light`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.15
    ),
    [`--mantine-color-${name}-light-hover`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.2
    ),
    [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 5, 0)})`,
    [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 4, 0)})`,
    [`--mantine-color-${name}-outline-hover`]: alpha(
      theme.colors[color][Math.max(primaryShade - 4, 0)],
      0.05
    )
  };
  if (!withColorValues) {
    return dynamicVariables;
  }
  return {
    [`--mantine-color-${name}-0`]: theme.colors[color][0],
    [`--mantine-color-${name}-1`]: theme.colors[color][1],
    [`--mantine-color-${name}-2`]: theme.colors[color][2],
    [`--mantine-color-${name}-3`]: theme.colors[color][3],
    [`--mantine-color-${name}-4`]: theme.colors[color][4],
    [`--mantine-color-${name}-5`]: theme.colors[color][5],
    [`--mantine-color-${name}-6`]: theme.colors[color][6],
    [`--mantine-color-${name}-7`]: theme.colors[color][7],
    [`--mantine-color-${name}-8`]: theme.colors[color][8],
    [`--mantine-color-${name}-9`]: theme.colors[color][9],
    ...dynamicVariables
  };
}

function isVirtualColor(value) {
  return !!value && typeof value === "object" && "mantine-virtual-color" in value;
}

function assignSizeVariables(variables, sizes, name) {
  keys(sizes).forEach(
    (size) => Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}
const defaultCssVariablesResolver = (theme) => {
  const lightPrimaryShade = getPrimaryShade(theme, "light");
  const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : rem(theme.defaultRadius);
  const result = {
    variables: {
      "--mantine-scale": theme.scale.toString(),
      "--mantine-cursor-type": theme.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": theme.white,
      "--mantine-color-black": theme.black,
      "--mantine-line-height": theme.lineHeights.md,
      "--mantine-font-family": theme.fontFamily,
      "--mantine-font-family-monospace": theme.fontFamilyMonospace,
      "--mantine-font-family-headings": theme.headings.fontFamily,
      "--mantine-heading-font-weight": theme.headings.fontWeight,
      "--mantine-heading-text-wrap": theme.headings.textWrap,
      "--mantine-radius-default": defaultRadius,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${theme.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${theme.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${theme.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": theme.black,
      "--mantine-color-body": theme.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");
  theme.colors[theme.primaryColor].forEach((_, index) => {
    result.variables[`--mantine-primary-color-${index}`] = `var(--mantine-color-${theme.primaryColor}-${index})`;
  });
  keys(theme.colors).forEach((color) => {
    const value = theme.colors[color];
    if (isVirtualColor(value)) {
      Object.assign(
        result.light,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.light,
          colorScheme: "light",
          withColorValues: true
        })
      );
      Object.assign(
        result.dark,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.dark,
          colorScheme: "dark",
          withColorValues: true
        })
      );
      return;
    }
    value.forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
    });
    Object.assign(
      result.light,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: "light",
        withColorValues: false
      })
    );
    Object.assign(
      result.dark,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: "dark",
        withColorValues: false
      })
    );
  });
  const headings = theme.headings.sizes;
  keys(headings).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] = headings[heading].fontWeight || theme.headings.fontWeight;
  });
  return result;
};

function getMergedVariables({ theme, generator }) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGenerator = generator?.(theme);
  return providerGenerator ? deepMerge(defaultResolver, providerGenerator) : defaultResolver;
}

const defaultCssVariables = defaultCssVariablesResolver(DEFAULT_THEME);
function removeDefaultVariables(input) {
  const cleaned = {
    variables: {},
    light: {},
    dark: {}
  };
  keys(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });
  keys(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });
  keys(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });
  return cleaned;
}

function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function MantineCssVariables({
  cssVariablesSelector,
  deduplicateCssVariables
}) {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const mergedVariables = getMergedVariables({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root" && deduplicateCssVariables;
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
  if (css) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "style",
      {
        "data-mantine-styles": true,
        nonce: nonce?.(),
        dangerouslySetInnerHTML: {
          __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";

function suppressNextjsWarning() {
  const originalError = console.error;
  console.error = (...args) => {
    if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-mantine-color-scheme")) ; else {
      originalError(...args);
    }
  };
}

function setColorSchemeAttribute(colorScheme, getRootElement) {
  const hasDarkColorScheme = typeof window !== "undefined" && "matchMedia" in window && window.matchMedia("(prefers-color-scheme: dark)")?.matches;
  const computedColorScheme = colorScheme !== "auto" ? colorScheme : hasDarkColorScheme ? "dark" : "light";
  getRootElement()?.setAttribute("data-mantine-color-scheme", computedColorScheme);
}
function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
  forceColorScheme
}) {
  const media = reactExports.useRef(null);
  const [value, setValue] = reactExports.useState(() => manager.get(defaultColorScheme));
  const colorSchemeValue = forceColorScheme || value;
  const setColorScheme = reactExports.useCallback(
    (colorScheme) => {
      if (!forceColorScheme) {
        setColorSchemeAttribute(colorScheme, getRootElement);
        setValue(colorScheme);
        manager.set(colorScheme);
      }
    },
    [manager.set, colorSchemeValue, forceColorScheme]
  );
  const clearColorScheme = reactExports.useCallback(() => {
    setValue(defaultColorScheme);
    setColorSchemeAttribute(defaultColorScheme, getRootElement);
    manager.clear();
  }, [manager.clear, defaultColorScheme]);
  reactExports.useEffect(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);
  useIsomorphicEffect(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);
  reactExports.useEffect(() => {
    if (forceColorScheme) {
      setColorSchemeAttribute(forceColorScheme, getRootElement);
      return () => {
      };
    }
    if (forceColorScheme === void 0) {
      setColorSchemeAttribute(value, getRootElement);
    }
    if (typeof window !== "undefined" && "matchMedia" in window) {
      media.current = window.matchMedia("(prefers-color-scheme: dark)");
    }
    const listener = (event) => {
      if (value === "auto") {
        setColorSchemeAttribute(event.matches ? "dark" : "light", getRootElement);
      }
    };
    media.current?.addEventListener("change", listener);
    return () => media.current?.removeEventListener("change", listener);
  }, [value, forceColorScheme]);
  return { colorScheme: colorSchemeValue, setColorScheme, clearColorScheme };
}

function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement
}) {
  useIsomorphicEffect(() => {
    if (respectReducedMotion) {
      getRootElement()?.setAttribute("data-respect-reduced-motion", "true");
    }
  }, [respectReducedMotion]);
}

suppressNextjsWarning();
function MantineProvider({
  theme,
  children,
  getStyleNonce,
  withStaticClasses = true,
  withGlobalClasses = true,
  deduplicateCssVariables = true,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "mantine",
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = "light",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme,
  stylesTransform,
  env
}) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement
  });
  useRespectReduceMotion({
    respectReducedMotion: theme?.respectReducedMotion || false,
    getRootElement
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    MantineContext.Provider,
    {
      value: {
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector,
        withStaticClasses,
        stylesTransform,
        env
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MantineThemeProvider, { theme, children: [
        withCssVariables && /* @__PURE__ */ jsxRuntimeExports.jsx(
          MantineCssVariables,
          {
            cssVariablesSelector,
            deduplicateCssVariables
          }
        ),
        withGlobalClasses && /* @__PURE__ */ jsxRuntimeExports.jsx(MantineClasses, {}),
        children
      ] })
    }
  );
}
MantineProvider.displayName = "@mantine/core/MantineProvider";

function useResolvedStylesApi({
  classNames,
  styles,
  props,
  stylesCtx
}) {
  const theme = useMantineTheme();
  return {
    resolvedClassNames: resolveClassNames({
      theme,
      classNames,
      props,
      stylesCtx: stylesCtx || void 0
    }),
    resolvedStyles: resolveStyles({
      theme,
      styles,
      props,
      stylesCtx: stylesCtx || void 0
    })
  };
}

const FOCUS_CLASS_NAMES = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function getGlobalClassNames({ theme, options, unstyled }) {
  return clsx(
    options?.focusable && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    options?.active && !unstyled && theme.activeClassName
  );
}

function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return resolveClassNames({
    theme,
    classNames: options?.classNames,
    props: options?.props || props,
    stylesCtx
  })[selector];
}

function getResolvedClassNames({
  selector,
  stylesCtx,
  theme,
  classNames,
  props
}) {
  return resolveClassNames({ theme, classNames, props, stylesCtx })[selector];
}

function getRootClassName({ rootSelector, selector, className }) {
  return rootSelector === selector ? className : void 0;
}

function getSelectorClassName({ selector, classes, unstyled }) {
  return unstyled ? void 0 : classes[selector];
}

function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector,
  withStaticClass
}) {
  if (withStaticClass === false) {
    return [];
  }
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}

function getThemeClassNames({
  themeName,
  theme,
  selector,
  props,
  stylesCtx
}) {
  return themeName.map(
    (n) => resolveClassNames({
      theme,
      classNames: theme.components[n]?.classNames,
      props,
      stylesCtx
    })?.[selector]
  );
}

function getVariantClassName({
  options,
  classes,
  selector,
  unstyled
}) {
  return options?.variant && !unstyled ? classes[`${selector}--${options.variant}`] : void 0;
}

function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx,
  withStaticClasses,
  headless,
  transformedStyles
}) {
  return clsx(
    getGlobalClassNames({ theme, options, unstyled: unstyled || headless }),
    getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
    getVariantClassName({ options, classes, selector, unstyled }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames: transformedStyles, props }),
    getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
    getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName({ selector, classes, unstyled: unstyled || headless }),
    withStaticClasses && !headless && getStaticClassNames({
      themeName,
      classNamesPrefix,
      selector,
      withStaticClass: options?.withStaticClass
    }),
    options?.className
  );
}

function getThemeStyles({
  theme,
  themeName,
  props,
  stylesCtx,
  selector
}) {
  return themeName.map(
    (n) => resolveStyles({
      theme,
      styles: theme.components[n]?.styles,
      props,
      stylesCtx
    })[selector]
  ).reduce((acc, val) => ({ ...acc, ...val }), {});
}

function resolveStyle({ style, theme }) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme }) }),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme);
  }
  if (style == null) {
    return {};
  }
  return style;
}

function mergeVars(vars) {
  return vars.reduce((acc, current) => {
    if (current) {
      Object.keys(current).forEach((key) => {
        acc[key] = { ...acc[key], ...filterProps(current[key]) };
      });
    }
    return acc;
  }, {});
}

function resolveVars({
  vars,
  varsResolver,
  theme,
  props,
  stylesCtx,
  selector,
  themeName,
  headless
}) {
  return mergeVars([
    headless ? {} : varsResolver?.(theme, props, stylesCtx),
    ...themeName.map((name) => theme.components?.[name]?.vars?.(theme, props, stylesCtx)),
    vars?.(theme, props, stylesCtx)
  ])?.[selector];
}

function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver,
  headless,
  withStylesTransform
}) {
  return {
    ...!withStylesTransform && getThemeStyles({ theme, themeName, props, stylesCtx, selector }),
    ...!withStylesTransform && resolveStyles({ theme, styles, props, stylesCtx })[selector],
    ...!withStylesTransform && resolveStyles({ theme, styles: options?.styles, props: options?.props || props, stylesCtx })[selector],
    ...resolveVars({ theme, props, stylesCtx, vars, varsResolver, selector, themeName, headless }),
    ...rootSelector === selector ? resolveStyle({ style, theme }) : null,
    ...resolveStyle({ style: options?.style, theme })
  };
}

function useStylesTransform({ props, stylesCtx, themeName }) {
  const theme = useMantineTheme();
  const stylesTransform = useMantineStylesTransform()?.();
  const getTransformedStyles = (styles) => {
    if (!stylesTransform) {
      return [];
    }
    const transformedStyles = styles.map(
      (style) => stylesTransform(style, { props, theme, ctx: stylesCtx })
    );
    return [
      ...transformedStyles,
      ...themeName.map(
        (n) => stylesTransform(theme.components[n]?.styles, { props, theme, ctx: stylesCtx })
      )
    ].filter(Boolean);
  };
  return {
    getTransformedStyles,
    withStylesTransform: !!stylesTransform
  };
}

function useStyles({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver
}) {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const withStaticClasses = useMantineWithStaticClasses();
  const headless = useMantineIsHeadless();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
  const { withStylesTransform, getTransformedStyles } = useStylesTransform({
    props,
    stylesCtx,
    themeName
  });
  return (selector, options) => ({
    className: getClassName({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx,
      withStaticClasses,
      headless,
      transformedStyles: getTransformedStyles([options?.styles, styles])
    }),
    style: getStyle({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver,
      headless,
      withStylesTransform
    })
  });
}

function useProps(component, defaultProps, props) {
  const theme = useMantineTheme();
  const contextPropsPayload = theme.components[component]?.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
  return { ...defaultProps, ...contextProps, ...filterProps(props) };
}

function cssObjectToString(css) {
  return keys(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
    ""
  ).trim();
}

function stylesToString({ selector, styles, media, container }) {
  const baseStyles = styles ? cssObjectToString(styles) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);
  const containerStyles = !Array.isArray(container) ? [] : container.map(
    (item) => `@container ${item.query}{${selector}{${cssObjectToString(item.styles)}}}`
  );
  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}${containerStyles.join("")}`.trim();
}

function InlineStyles(props) {
  const nonce = useMantineStyleNonce();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: stylesToString(props) }
    }
  );
}

function extractStyleProps(others) {
  const {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx,
    ...rest
  } = others;
  const styleProps = filterProps({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx
  });
  return { styleProps, rest };
}

const STYlE_PROPS_DATA = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};

function colorResolver(color, theme) {
  const parsedColor = parseThemeColor({ color, theme });
  if (parsedColor.color === "dimmed") {
    return "var(--mantine-color-dimmed)";
  }
  if (parsedColor.color === "bright") {
    return "var(--mantine-color-bright)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
function textColorResolver(color, theme) {
  const parsedColor = parseThemeColor({ color, theme });
  if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
    return `var(--mantine-color-${parsedColor.color}-text)`;
  }
  return colorResolver(color, theme);
}

function borderResolver(value, theme) {
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    const [size, style, ...colorTuple] = value.split(" ").filter((val) => val.trim() !== "");
    let result = `${rem(size)}`;
    style && (result += ` ${style}`);
    colorTuple.length > 0 && (result += ` ${colorResolver(colorTuple.join(" "), theme)}`);
    return result.trim();
  }
  return value;
}

const values = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(fontFamily) {
  if (typeof fontFamily === "string" && fontFamily in values) {
    return values[fontFamily];
  }
  return fontFamily;
}

const headings$2 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function fontSizeResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }
  if (typeof value === "string" && headings$2.includes(value)) {
    return `var(--mantine-${value}-font-size)`;
  }
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    return rem(value);
  }
  return value;
}

function identityResolver(value) {
  return value;
}

const headings$1 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function lineHeightResolver(value, theme) {
  if (typeof value === "string" && value in theme.lineHeights) {
    return `var(--mantine-line-height-${value})`;
  }
  if (typeof value === "string" && headings$1.includes(value)) {
    return `var(--mantine-${value}-line-height)`;
  }
  return value;
}

function sizeResolver(value) {
  if (typeof value === "number") {
    return rem(value);
  }
  return value;
}

function spacingResolver(value, theme) {
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    const mod = value.replace("-", "");
    if (!(mod in theme.spacing)) {
      return rem(value);
    }
    const variable = `--mantine-spacing-${mod}`;
    return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }
  return value;
}

const resolvers = {
  color: colorResolver,
  textColor: textColorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver,
  fontFamily: fontFamilyResolver,
  border: borderResolver
};

function replaceMediaQuery(query) {
  return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries({
  media,
  ...props
}) {
  const breakpoints = Object.keys(media);
  const sortedMedia = breakpoints.sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query) => ({ query, styles: media[query] }));
  return { ...props, media: sortedMedia };
}

function hasResponsiveStyles(styleProp) {
  if (typeof styleProp !== "object" || styleProp === null) {
    return false;
  }
  const breakpoints = Object.keys(styleProp);
  if (breakpoints.length === 1 && breakpoints[0] === "base") {
    return false;
  }
  return true;
}
function getBaseValue(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}
function getBreakpointKeys(value) {
  if (typeof value === "object" && value !== null) {
    return keys(value).filter((key) => key !== "base");
  }
  return [];
}
function getBreakpointValue(value, breakpoint) {
  if (typeof value === "object" && value !== null && breakpoint in value) {
    return value[breakpoint];
  }
  return value;
}
function parseStyleProps({
  styleProps,
  data,
  theme
}) {
  return sortMediaQueries(
    keys(styleProps).reduce(
      (acc, styleProp) => {
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom" || styleProp === "sx") {
          return acc;
        }
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [propertyData.property];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
          properties.forEach((property) => {
            acc.inlineStyles[property] = resolvers[propertyData.type](baseValue, theme);
          });
          return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property) => {
          if (baseValue) {
            acc.styles[property] = resolvers[propertyData.type](baseValue, theme);
          }
          breakpoints.forEach((breakpoint) => {
            const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
            acc.media[bp] = {
              ...acc.media[bp],
              [property]: resolvers[propertyData.type](
                getBreakpointValue(styleProps[styleProp], breakpoint),
                theme
              )
            };
          });
        });
        return acc;
      },
      {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}

function useRandomClassName() {
  const id = reactExports.useId().replace(/:/g, "");
  return `__m__-${id}`;
}

function createPolymorphicComponent(component) {
  return component;
}

function transformModKey(key) {
  return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
  return Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (value === void 0 || value === "" || value === false || value === null) {
      return acc;
    }
    acc[transformModKey(key)] = props[key];
    return acc;
  }, {});
}
function getBoxMod(mod) {
  if (!mod) {
    return null;
  }
  if (typeof mod === "string") {
    return { [transformModKey(mod)]: true };
  }
  if (Array.isArray(mod)) {
    return [...mod].reduce(
      (acc, value) => ({ ...acc, ...getBoxMod(value) }),
      {}
    );
  }
  return getMod(mod);
}

function mergeStyles(styles, theme) {
  if (Array.isArray(styles)) {
    return [...styles].reduce(
      (acc, item) => ({ ...acc, ...mergeStyles(item, theme) }),
      {}
    );
  }
  if (typeof styles === "function") {
    return styles(theme);
  }
  if (styles == null) {
    return {};
  }
  return styles;
}
function getBoxStyle({
  theme,
  style,
  vars,
  styleProps
}) {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return { ..._style, ..._vars, ...styleProps };
}

const _Box = reactExports.forwardRef(
  ({
    component,
    style,
    __vars,
    className,
    variant,
    mod,
    size,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    renderRoot,
    __size,
    ...others
  }, ref) => {
    const theme = useMantineTheme();
    const Element = component || "div";
    const { styleProps, rest } = extractStyleProps(others);
    const useSxTransform = useMantineSxTransform();
    const transformedSx = useSxTransform?.()?.(styleProps.sx);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA
    });
    const props = {
      ref,
      style: getBoxStyle({
        theme,
        style,
        vars: __vars,
        styleProps: parsedStyleProps.inlineStyles
      }),
      className: clsx(className, transformedSx, {
        [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
        "mantine-light-hidden": lightHidden,
        "mantine-dark-hidden": darkHidden,
        [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
        [`mantine-visible-from-${visibleFrom}`]: visibleFrom
      }),
      "data-variant": variant,
      "data-size": isNumberLike(size) ? void 0 : size || void 0,
      size: __size,
      ...getBoxMod(mod),
      ...rest
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ jsxRuntimeExports.jsx(
        InlineStyles,
        {
          selector: `.${responsiveClassName}`,
          styles: parsedStyleProps.styles,
          media: parsedStyleProps.media
        }
      ),
      typeof renderRoot === "function" ? renderRoot(props) : /* @__PURE__ */ jsxRuntimeExports.jsx(Element, { ...props })
    ] });
  }
);
_Box.displayName = "@mantine/core/Box";
const Box = createPolymorphicComponent(_Box);

function identity(value) {
  return value;
}
function factory(ui) {
  const Component = reactExports.forwardRef(ui);
  Component.extend = identity;
  Component.withProps = (fixedProps) => {
    const Extended = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  return Component;
}

function polymorphicFactory(ui) {
  const Component = reactExports.forwardRef(ui);
  Component.withProps = (fixedProps) => {
    const Extended = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  Component.extend = identity;
  return Component;
}

const DirectionContext = reactExports.createContext({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function useDirection() {
  return reactExports.useContext(DirectionContext);
}

/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * @see https://floating-ui.com/docs/react-utils#usemergerefs
 */
function useMergeRefs(refs) {
  return reactExports.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      refs.forEach(ref => {
        if (typeof ref === 'function') {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

const [ScrollAreaProvider, useScrollAreaContext] = createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useIsomorphicEffect(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
    return void 0;
  }, [element, handleResize]);
}

const Corner = reactExports.forwardRef((props, ref) => {
  const { style, ...others } = props;
  const ctx = useScrollAreaContext();
  const [width, setWidth] = reactExports.useState(0);
  const [height, setHeight] = reactExports.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver(ctx.scrollbarX, () => {
    const h = ctx.scrollbarX?.offsetHeight || 0;
    ctx.onCornerHeightChange(h);
    setHeight(h);
  });
  useResizeObserver(ctx.scrollbarY, () => {
    const w = ctx.scrollbarY?.offsetWidth || 0;
    ctx.onCornerWidthChange(w);
    setWidth(w);
  });
  return hasSize ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...others, ref, style: { ...style, width, height } }) : null;
});
const ScrollAreaCorner = reactExports.forwardRef((props, ref) => {
  const ctx = useScrollAreaContext();
  const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
  const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, { ...props, ref }) : null;
});

const defaultProps$F = {
  scrollHideDelay: 1e3,
  type: "hover"
};
const ScrollAreaRoot = reactExports.forwardRef((_props, ref) => {
  const props = useProps("ScrollAreaRoot", defaultProps$F, _props);
  const { type, scrollHideDelay, scrollbars, ...others } = props;
  const [scrollArea, setScrollArea] = reactExports.useState(null);
  const [viewport, setViewport] = reactExports.useState(null);
  const [content, setContent] = reactExports.useState(null);
  const [scrollbarX, setScrollbarX] = reactExports.useState(null);
  const [scrollbarY, setScrollbarY] = reactExports.useState(null);
  const [cornerWidth, setCornerWidth] = reactExports.useState(0);
  const [cornerHeight, setCornerHeight] = reactExports.useState(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = reactExports.useState(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = reactExports.useState(false);
  const rootRef = useMergedRef(ref, (node) => setScrollArea(node));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaProvider,
    {
      value: {
        type,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          ...others,
          ref: rootRef,
          __vars: {
            "--sa-corner-width": scrollbars !== "xy" ? "0px" : `${cornerWidth}px`,
            "--sa-corner-height": scrollbars !== "xy" ? "0px" : `${cornerHeight}px`
          }
        }
      )
    }
  );
});
ScrollAreaRoot.displayName = "@mantine/core/ScrollAreaRoot";

function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}

function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}

function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) {
      return output[0];
    }
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}

function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}

function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}

function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}

function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}

function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return (event) => {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      ourEventHandler?.(event);
    }
  };
}

const [ScrollbarProvider, useScrollbarContext] = createSafeContext(
  "ScrollAreaScrollbar was not found in tree"
);

const Scrollbar = reactExports.forwardRef((props, forwardedRef) => {
  const {
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext();
  const [scrollbar, setScrollbar] = reactExports.useState(null);
  const composeRefs = useMergedRef(forwardedRef, (node) => setScrollbar(node));
  const rectRef = reactExports.useRef(null);
  const prevWebkitUserSelectRef = reactExports.useRef("");
  const { viewport } = context;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebouncedCallback(onResize, 10);
  const handleDragScroll = (event) => {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  };
  reactExports.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel) {
        handleWheelScroll(event, maxScrollPos);
      }
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  reactExports.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollbarProvider,
    {
      value: {
        scrollbar,
        hasThumb,
        onThumbChange: useCallbackRef(onThumbChange),
        onThumbPointerUp: useCallbackRef(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: useCallbackRef(onThumbPointerDown)
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ...scrollbarProps,
          ref: composeRefs,
          "data-mantine-scrollbar": true,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            event.preventDefault();
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              event.preventDefault();
              element.releasePointerCapture(event.pointerId);
            }
          }),
          onLostPointerCapture: () => {
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            rectRef.current = null;
          }
        }
      )
    }
  );
});

const ScrollAreaScrollbarX = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, style, ...others } = props;
    const ctx = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = reactExports.useState();
    const ref = reactExports.useRef(null);
    const composeRefs = useMergedRef(forwardedRef, ref, ctx.onScrollbarXChange);
    reactExports.useEffect(() => {
      if (ref.current) {
        setComputedStyle(getComputedStyle(ref.current));
      }
    }, [ref]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Scrollbar,
      {
        "data-orientation": "horizontal",
        ...others,
        ref: composeRefs,
        sizes,
        style: {
          ...style,
          ["--sa-thumb-width"]: `${getThumbSize(sizes)}px`
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos) => {
          if (ctx.viewport) {
            const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && ctx.viewport && computedStyle) {
            onSizesChange({
              content: ctx.viewport.scrollWidth,
              viewport: ctx.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight)
              }
            });
          }
        }
      }
    );
  }
);
ScrollAreaScrollbarX.displayName = "@mantine/core/ScrollAreaScrollbarX";

const ScrollAreaScrollbarY = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, style, ...others } = props;
    const context = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = reactExports.useState();
    const ref = reactExports.useRef(null);
    const composeRefs = useMergedRef(forwardedRef, ref, context.onScrollbarYChange);
    reactExports.useEffect(() => {
      if (ref.current) {
        setComputedStyle(window.getComputedStyle(ref.current));
      }
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Scrollbar,
      {
        ...others,
        "data-orientation": "vertical",
        ref: composeRefs,
        sizes,
        style: {
          ["--sa-thumb-height"]: `${getThumbSize(sizes)}px`,
          ...style
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollTop + event.deltaY;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollHeight,
              viewport: context.viewport.offsetHeight,
              scrollbar: {
                size: ref.current.clientHeight,
                paddingStart: toInt(computedStyle.paddingTop),
                paddingEnd: toInt(computedStyle.paddingBottom)
              }
            });
          }
        }
      }
    );
  }
);
ScrollAreaScrollbarY.displayName = "@mantine/core/ScrollAreaScrollbarY";

const ScrollAreaScrollbarVisible = reactExports.forwardRef((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const { dir } = useDirection();
  const context = useScrollAreaContext();
  const thumbRef = reactExports.useRef(null);
  const pointerOffsetRef = reactExports.useRef(0);
  const [sizes, setSizes] = reactExports.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => {
      thumbRef.current = thumb;
    },
    onThumbPointerUp: () => {
      pointerOffsetRef.current = 0;
    },
    onThumbPointerDown: (pointerPos) => {
      pointerOffsetRef.current = pointerPos;
    }
  };
  const getScrollPosition = (pointerPos, direction) => getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, direction);
  if (orientation === "horizontal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes, dir);
            thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = scrollPos;
          }
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes);
            if (sizes.scrollbar.size === 0) {
              thumbRef.current.style.setProperty("--thumb-opacity", "0");
            } else {
              thumbRef.current.style.setProperty("--thumb-opacity", "1");
            }
            thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) {
            context.viewport.scrollTop = scrollPos;
          }
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollTop = getScrollPosition(pointerPos);
          }
        }
      }
    );
  }
  return null;
});
ScrollAreaScrollbarVisible.displayName = "@mantine/core/ScrollAreaScrollbarVisible";

const ScrollAreaScrollbarAuto = reactExports.forwardRef(
  (props, ref) => {
    const context = useScrollAreaContext();
    const { forceMount, ...scrollbarProps } = props;
    const [visible, setVisible] = reactExports.useState(false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebouncedCallback(() => {
      if (context.viewport) {
        const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
        const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
        setVisible(isHorizontal ? isOverflowX : isOverflowY);
      }
    }, 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    if (forceMount || visible) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScrollAreaScrollbarVisible,
        {
          "data-state": visible ? "visible" : "hidden",
          ...scrollbarProps,
          ref
        }
      );
    }
    return null;
  }
);
ScrollAreaScrollbarAuto.displayName = "@mantine/core/ScrollAreaScrollbarAuto";

const ScrollAreaScrollbarHover = reactExports.forwardRef(
  (props, ref) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const [visible, setVisible] = reactExports.useState(false);
    reactExports.useEffect(() => {
      const { scrollArea } = context;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener("pointerenter", handlePointerEnter);
        scrollArea.addEventListener("pointerleave", handlePointerLeave);
        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener("pointerenter", handlePointerEnter);
          scrollArea.removeEventListener("pointerleave", handlePointerLeave);
        };
      }
      return void 0;
    }, [context.scrollArea, context.scrollHideDelay]);
    if (forceMount || visible) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScrollAreaScrollbarAuto,
        {
          "data-state": visible ? "visible" : "hidden",
          ...scrollbarProps,
          ref
        }
      );
    }
    return null;
  }
);
ScrollAreaScrollbarHover.displayName = "@mantine/core/ScrollAreaScrollbarHover";

const ScrollAreaScrollbarScroll = reactExports.forwardRef(
  (props, red) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const isHorizontal = props.orientation === "horizontal";
    const [state, setState] = reactExports.useState("hidden");
    const debounceScrollEnd = useDebouncedCallback(() => setState("idle"), 100);
    reactExports.useEffect(() => {
      if (state === "idle") {
        const hideTimer = window.setTimeout(() => setState("hidden"), context.scrollHideDelay);
        return () => window.clearTimeout(hideTimer);
      }
      return void 0;
    }, [state, context.scrollHideDelay]);
    reactExports.useEffect(() => {
      const { viewport } = context;
      const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
      if (viewport) {
        let prevScrollPos = viewport[scrollDirection];
        const handleScroll = () => {
          const scrollPos = viewport[scrollDirection];
          const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
          if (hasScrollInDirectionChanged) {
            setState("scrolling");
            debounceScrollEnd();
          }
          prevScrollPos = scrollPos;
        };
        viewport.addEventListener("scroll", handleScroll);
        return () => viewport.removeEventListener("scroll", handleScroll);
      }
      return void 0;
    }, [context.viewport, isHorizontal, debounceScrollEnd]);
    if (forceMount || state !== "hidden") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScrollAreaScrollbarVisible,
        {
          "data-state": state === "hidden" ? "hidden" : "visible",
          ...scrollbarProps,
          ref: red,
          onPointerEnter: composeEventHandlers(props.onPointerEnter, () => setState("interacting")),
          onPointerLeave: composeEventHandlers(props.onPointerLeave, () => setState("idle"))
        }
      );
    }
    return null;
  }
);

const ScrollAreaScrollbar = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    reactExports.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);
ScrollAreaScrollbar.displayName = "@mantine/core/ScrollAreaScrollbar";

function addUnlinkedScrollListener(node, handler = () => {
}) {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) {
      handler();
    }
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
}

const Thumb = reactExports.forwardRef((props, forwardedRef) => {
  const { style, ...others } = props;
  const scrollAreaContext = useScrollAreaContext();
  const scrollbarContext = useScrollbarContext();
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = useMergedRef(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
  const removeUnlinkedScrollListenerRef = reactExports.useRef(void 0);
  const debounceScrollEnd = useDebouncedCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = void 0;
    }
  }, 100);
  reactExports.useEffect(() => {
    const { viewport } = scrollAreaContext;
    if (viewport) {
      const handleScroll = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
    return void 0;
  }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
      ...others,
      ref: composedRef,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...style
      },
      onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
        const thumb = event.target;
        const thumbRect = thumb.getBoundingClientRect();
        const x = event.clientX - thumbRect.left;
        const y = event.clientY - thumbRect.top;
        scrollbarContext.onThumbPointerDown({ x, y });
      }),
      onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    }
  );
});
Thumb.displayName = "@mantine/core/ScrollAreaThumb";
const ScrollAreaThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext();
    if (forceMount || scrollbarContext.hasThumb) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Thumb, { ref: forwardedRef, ...thumbProps });
    }
    return null;
  }
);
ScrollAreaThumb.displayName = "@mantine/core/ScrollAreaThumb";

const ScrollAreaViewport = reactExports.forwardRef(
  ({ children, style, ...others }, ref) => {
    const ctx = useScrollAreaContext();
    const rootRef = useMergedRef(ref, ctx.onViewportChange);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ...others,
        ref: rootRef,
        style: {
          overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden",
          ...style
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minWidth: "100%" }, ref: ctx.onContentChange, children })
      }
    );
  }
);
ScrollAreaViewport.displayName = "@mantine/core/ScrollAreaViewport";

var classes$l = {"root":"m_d57069b5","viewport":"m_c0783ff9","viewportInner":"m_f8f631dd","scrollbar":"m_c44ba933","thumb":"m_d8b5e363","corner":"m_21657268"};

const defaultProps$E = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
};
const varsResolver$n = createVarsResolver(
  (_, { scrollbarSize, overscrollBehavior }) => ({
    root: {
      "--scrollarea-scrollbar-size": rem(scrollbarSize),
      "--scrollarea-over-scroll-behavior": overscrollBehavior
    }
  })
);
const ScrollArea = factory((_props, ref) => {
  const props = useProps("ScrollArea", defaultProps$E, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    offsetScrollbars,
    scrollbars,
    onBottomReached,
    onTopReached,
    overscrollBehavior,
    ...others
  } = props;
  const [scrollbarHovered, setScrollbarHovered] = reactExports.useState(false);
  const [verticalThumbVisible, setVerticalThumbVisible] = reactExports.useState(false);
  const [horizontalThumbVisible, setHorizontalThumbVisible] = reactExports.useState(false);
  const getStyles = useStyles({
    name: "ScrollArea",
    props,
    classes: classes$l,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$n
  });
  const localViewportRef = reactExports.useRef(null);
  const combinedViewportRef = useMergeRefs([viewportRef, localViewportRef]);
  reactExports.useEffect(() => {
    if (!localViewportRef.current) {
      return;
    }
    if (offsetScrollbars !== "present") {
      return;
    }
    const element = localViewportRef.current;
    const observer = new ResizeObserver(() => {
      const { scrollHeight, clientHeight, scrollWidth, clientWidth } = element;
      setVerticalThumbVisible(scrollHeight > clientHeight);
      setHorizontalThumbVisible(scrollWidth > clientWidth);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [localViewportRef, offsetScrollbars]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ScrollAreaRoot,
    {
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref,
      scrollbars,
      ...getStyles("root"),
      ...others,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScrollAreaViewport,
          {
            ...viewportProps,
            ...getStyles("viewport", { style: viewportProps?.style }),
            ref: combinedViewportRef,
            "data-offset-scrollbars": offsetScrollbars === true ? "xy" : offsetScrollbars || void 0,
            "data-scrollbars": scrollbars || void 0,
            "data-horizontal-hidden": offsetScrollbars === "present" && !horizontalThumbVisible ? "true" : void 0,
            "data-vertical-hidden": offsetScrollbars === "present" && !verticalThumbVisible ? "true" : void 0,
            onScroll: (e) => {
              viewportProps?.onScroll?.(e);
              onScrollPositionChange?.({ x: e.currentTarget.scrollLeft, y: e.currentTarget.scrollTop });
              const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
              if (scrollTop - (scrollHeight - clientHeight) >= 0) {
                onBottomReached?.();
              }
              if (scrollTop === 0) {
                onTopReached?.();
              }
            },
            children
          }
        ),
        (scrollbars === "xy" || scrollbars === "x") && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScrollAreaScrollbar,
          {
            ...getStyles("scrollbar"),
            orientation: "horizontal",
            "data-hidden": type === "never" || offsetScrollbars === "present" && !horizontalThumbVisible ? true : void 0,
            forceMount: true,
            onMouseEnter: () => setScrollbarHovered(true),
            onMouseLeave: () => setScrollbarHovered(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumb, { ...getStyles("thumb") })
          }
        ),
        (scrollbars === "xy" || scrollbars === "y") && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScrollAreaScrollbar,
          {
            ...getStyles("scrollbar"),
            orientation: "vertical",
            "data-hidden": type === "never" || offsetScrollbars === "present" && !verticalThumbVisible ? true : void 0,
            forceMount: true,
            onMouseEnter: () => setScrollbarHovered(true),
            onMouseLeave: () => setScrollbarHovered(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumb, { ...getStyles("thumb") })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ScrollAreaCorner,
          {
            ...getStyles("corner"),
            "data-hovered": scrollbarHovered || void 0,
            "data-hidden": type === "never" || void 0
          }
        )
      ]
    }
  );
});
ScrollArea.displayName = "@mantine/core/ScrollArea";
const ScrollAreaAutosize = factory((props, ref) => {
  const {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    scrollbars,
    style,
    vars,
    onBottomReached,
    onTopReached,
    ...others
  } = useProps("ScrollAreaAutosize", defaultProps$E, props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ...others, ref, style: [{ display: "flex", overflow: "auto" }, style], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollArea,
    {
      classNames,
      styles,
      scrollHideDelay,
      scrollbarSize,
      type,
      dir,
      offsetScrollbars,
      viewportRef,
      onScrollPositionChange,
      unstyled,
      variant,
      viewportProps,
      vars,
      scrollbars,
      onBottomReached,
      onTopReached,
      children
    }
  ) }) });
});
ScrollArea.classes = classes$l;
ScrollAreaAutosize.displayName = "@mantine/core/ScrollAreaAutosize";
ScrollAreaAutosize.classes = classes$l;
ScrollArea.Autosize = ScrollAreaAutosize;

var classes$k = {"root":"m_87cf2631"};

const defaultProps$D = {
  __staticSelector: "UnstyledButton"
};
const UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps$D, _props);
    const {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style,
      ...others
    } = props;
    const getStyles = useStyles({
      name: __staticSelector,
      props,
      classes: classes$k,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ...getStyles("root", { focusable: true }),
        component,
        ref,
        type: component === "button" ? "button" : void 0,
        ...others
      }
    );
  }
);
UnstyledButton.classes = classes$k;
UnstyledButton.displayName = "@mantine/core/UnstyledButton";

var classes$j = {"root":"m_515a97f8"};

const defaultProps$C = {};
const VisuallyHidden = factory((_props, ref) => {
  const props = useProps("VisuallyHidden", defaultProps$C, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;
  const getStyles = useStyles({
    name: "VisuallyHidden",
    classes: classes$j,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", ref, ...getStyles("root"), ...others });
});
VisuallyHidden.classes = classes$j;
VisuallyHidden.displayName = "@mantine/core/VisuallyHidden";

var classes$i = {"root":"m_1b7284a3"};

const defaultProps$B = {};
const varsResolver$m = createVarsResolver((_, { radius, shadow }) => ({
  root: {
    "--paper-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--paper-shadow": getShadow(shadow)
  }
}));
const Paper = polymorphicFactory((_props, ref) => {
  const props = useProps("Paper", defaultProps$B, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant,
    mod,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "Paper",
    props,
    classes: classes$i,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$m
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ref,
      mod: [{ "data-with-border": withBorder }, mod],
      ...getStyles("root"),
      variant,
      ...others
    }
  );
});
Paper.classes = classes$i;
Paper.displayName = "@mantine/core/Paper";

var classes$h = {"root":"m_9814e45f"};

const defaultProps$A = {
  zIndex: getDefaultZIndex("modal")
};
const varsResolver$l = createVarsResolver(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && rgba(color || "#000", backgroundOpacity ?? 0.6) || void 0,
      "--overlay-filter": blur ? `blur(${rem(blur)})` : void 0,
      "--overlay-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--overlay-z-index": zIndex?.toString()
    }
  })
);
const Overlay = polymorphicFactory((_props, ref) => {
  const props = useProps("Overlay", defaultProps$A, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fixed,
    center,
    children,
    radius,
    zIndex,
    gradient,
    blur,
    color,
    backgroundOpacity,
    mod,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "Overlay",
    props,
    classes: classes$h,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$l
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ref, ...getStyles("root"), mod: [{ center, fixed }, mod], ...others, children });
});
Overlay.classes = classes$h;
Overlay.displayName = "@mantine/core/Overlay";

function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" ").filter(Boolean));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
function getTargetNode({
  target,
  reuseTargetNode,
  ...others
}) {
  if (target) {
    if (typeof target === "string") {
      return document.querySelector(target) || createPortalNode(others);
    }
    return target;
  }
  if (reuseTargetNode) {
    const existingNode = document.querySelector("[data-mantine-shared-portal-node]");
    if (existingNode) {
      return existingNode;
    }
    const node = createPortalNode(others);
    node.setAttribute("data-mantine-shared-portal-node", "true");
    document.body.appendChild(node);
    return node;
  }
  return createPortalNode(others);
}
const defaultProps$z = {};
const Portal = factory((props, ref) => {
  const { children, target, reuseTargetNode, ...others } = useProps("Portal", defaultProps$z, props);
  const [mounted, setMounted] = reactExports.useState(false);
  const nodeRef = reactExports.useRef(null);
  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = getTargetNode({ target, reuseTargetNode, ...others });
    assignRef(ref, nodeRef.current);
    if (!target && !reuseTargetNode && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && !reuseTargetNode && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }), nodeRef.current);
});
Portal.displayName = "@mantine/core/Portal";

const OptionalPortal = factory(
  ({ withinPortal = true, children, ...others }, ref) => {
    const env = useMantineEnv();
    if (env === "test" || !withinPortal) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ref, ...others, children });
  }
);
OptionalPortal.displayName = "@mantine/core/OptionalPortal";

const popIn = (from) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${from === "bottom" ? 10 : -10}px)` },
  transitionProperty: "transform, opacity"
});
const transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(30px)" },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-30px)" },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...popIn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...popIn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...popIn("top"),
    common: { transformOrigin: "top right" }
  }
};

const transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    WebkitBackfaceVisibility: "hidden",
    willChange: "transform, opacity",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return {};
    }
    return {
      transitionProperty: transitions[transition].transitionProperty,
      ...shared,
      ...transitions[transition].common,
      ...transitions[transition][transitionStatuses[state]]
    };
  }
  return {
    transitionProperty: transition.transitionProperty,
    ...shared,
    ...transition.common,
    ...transition[transitionStatuses[state]]
  };
}

function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited,
  enterDelay,
  exitDelay
}) {
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = reactExports.useState(reduceMotion ? 0 : duration);
  const [transitionStatus, setStatus] = reactExports.useState(mounted ? "entered" : "exited");
  const transitionTimeoutRef = reactExports.useRef(-1);
  const delayTimeoutRef = reactExports.useRef(-1);
  const rafRef = reactExports.useRef(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    window.clearTimeout(transitionTimeoutRef.current);
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      rafRef.current = requestAnimationFrame(() => {
        ReactDOM.flushSync(() => {
          setStatus(shouldMount ? "pre-entering" : "pre-exiting");
        });
        rafRef.current = requestAnimationFrame(() => {
          typeof preHandler === "function" && preHandler();
          setStatus(shouldMount ? "entering" : "exiting");
          transitionTimeoutRef.current = window.setTimeout(() => {
            typeof handler === "function" && handler();
            setStatus(shouldMount ? "entered" : "exited");
          }, newTransitionDuration);
        });
      });
    }
  };
  const handleTransitionWithDelay = (shouldMount) => {
    window.clearTimeout(delayTimeoutRef.current);
    const delay = shouldMount ? enterDelay : exitDelay;
    if (typeof delay !== "number") {
      handleStateChange(shouldMount);
      return;
    }
    delayTimeoutRef.current = window.setTimeout(
      () => {
        handleStateChange(shouldMount);
      },
      shouldMount ? enterDelay : exitDelay
    );
  };
  useDidUpdate(() => {
    handleTransitionWithDelay(mounted);
  }, [mounted]);
  reactExports.useEffect(
    () => () => {
      window.clearTimeout(transitionTimeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    },
    []
  );
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

function Transition({
  keepMounted,
  transition = "fade",
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited,
  enterDelay,
  exitDelay
}) {
  const env = useMantineEnv();
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
    enterDelay,
    exitDelay
  });
  if (transitionDuration === 0 || env === "test") {
    return mounted ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: children({}) }) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ) });
}
Transition.displayName = "@mantine/core/Transition";

function FocusTrap({
  children,
  active = true,
  refProp = "ref",
  innerRef
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, innerRef);
  if (!isElement(children)) {
    return children;
  }
  return reactExports.cloneElement(children, { [refProp]: ref });
}
function FocusTrapInitialFocus(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHidden, { tabIndex: -1, "data-autofocus": true, ...props });
}
FocusTrap.displayName = "@mantine/core/FocusTrap";
FocusTrapInitialFocus.displayName = "@mantine/core/FocusTrapInitialFocus";
FocusTrap.InitialFocus = FocusTrapInitialFocus;

var classes$g = {"root":"m_5ae2e3c","barsLoader":"m_7a2bd4cd","bar":"m_870bb79","bars-loader-animation":"m_5d2b3b9d","dotsLoader":"m_4e3f22d7","dot":"m_870c4af","loader-dots-animation":"m_aac34a1","ovalLoader":"m_b34414df","oval-loader-animation":"m_f8e89c4b"};

const Bars = reactExports.forwardRef(({ className, ...others }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", className: clsx(classes$g.barsLoader, className), ...others, ref, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$g.bar }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$g.bar }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$g.bar })
] }));
Bars.displayName = "@mantine/core/Bars";

const Dots = reactExports.forwardRef(({ className, ...others }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", className: clsx(classes$g.dotsLoader, className), ...others, ref, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$g.dot }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$g.dot }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$g.dot })
] }));
Dots.displayName = "@mantine/core/Dots";

const Oval = reactExports.forwardRef(({ className, ...others }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", className: clsx(classes$g.ovalLoader, className), ...others, ref }));
Oval.displayName = "@mantine/core/Oval";

const defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
const defaultProps$y = {
  loaders: defaultLoaders,
  type: "oval"
};
const varsResolver$k = createVarsResolver((theme, { size, color }) => ({
  root: {
    "--loader-size": getSize(size, "loader-size"),
    "--loader-color": color ? getThemeColor(color, theme) : void 0
  }
}));
const Loader = factory((_props, ref) => {
  const props = useProps("Loader", defaultProps$y, _props);
  const {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant,
    children,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "Loader",
    props,
    classes: classes$g,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$k
  });
  if (children) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ...getStyles("root"), ref, ...others, children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...getStyles("root"),
      ref,
      component: loaders[type],
      variant,
      size,
      ...others
    }
  );
});
Loader.defaultLoaders = defaultLoaders;
Loader.classes = classes$g;
Loader.displayName = "@mantine/core/Loader";

const CloseIcon = reactExports.forwardRef(
  ({ size = "var(--cb-icon-size, 70%)", style, ...others }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...style, width: size, height: size },
      ref,
      ...others,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  )
);
CloseIcon.displayName = "@mantine/core/CloseIcon";

var classes$f = {"root":"m_86a44da5","root--subtle":"m_220c80f2"};

const defaultProps$x = {
  variant: "subtle"
};
const varsResolver$j = createVarsResolver((_, { size, radius, iconSize }) => ({
  root: {
    "--cb-size": getSize(size, "cb-size"),
    "--cb-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--cb-icon-size": rem(iconSize)
  }
}));
const CloseButton = polymorphicFactory((_props, ref) => {
  const props = useProps("CloseButton", defaultProps$x, _props);
  const {
    iconSize,
    children,
    vars,
    radius,
    className,
    classNames,
    style,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    disabled,
    variant,
    icon,
    mod,
    __staticSelector,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "CloseButton",
    props,
    className,
    style,
    classes: classes$f,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$j
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    UnstyledButton,
    {
      ref,
      ...others,
      unstyled,
      variant,
      disabled,
      mod: [{ disabled: disabled || dataDisabled }, mod],
      ...getStyles("root", { variant, active: !disabled && !dataDisabled }),
      children: [
        icon || /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIcon, {}),
        children
      ]
    }
  );
});
CloseButton.classes = classes$f;
CloseButton.displayName = "@mantine/core/CloseButton";

function filterFalsyChildren(children) {
  return reactExports.Children.toArray(children).filter(Boolean);
}

var classes$e = {"root":"m_4081bf90"};

const defaultProps$w = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
};
const varsResolver$i = createVarsResolver(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": getSpacing(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
const Group = factory((_props, ref) => {
  const props = useProps("Group", defaultProps$w, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    __size,
    mod,
    ...others
  } = props;
  const filteredChildren = filterFalsyChildren(children);
  const childrenCount = filteredChildren.length;
  const resolvedGap = getSpacing(gap ?? "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles = useStyles({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: classes$e,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$i
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...getStyles("root"),
      ref,
      variant,
      mod: [{ grow }, mod],
      size: __size,
      ...others,
      children: filteredChildren
    }
  );
});
Group.classes = classes$e;
Group.displayName = "@mantine/core/Group";

const [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = reactExports.useState(opened);
  const timeout = reactExports.useRef(-1);
  const reduceMotion = useReducedMotion();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  reactExports.useEffect(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (_transitionDuration === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(() => setShouldLockScroll(false), _transitionDuration);
    }
    return () => window.clearTimeout(timeout.current);
  }, [opened, _transitionDuration]);
  return shouldLockScroll;
}

function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape,
  onClose,
  returnFocus
}) {
  const _id = useId(id);
  const [titleMounted, setTitleMounted] = reactExports.useState(false);
  const [bodyMounted, setBodyMounted] = reactExports.useState(false);
  const transitionDuration = typeof transitionProps?.duration === "number" ? transitionProps?.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  useWindowEvent(
    "keydown",
    (event) => {
      if (event.key === "Escape" && closeOnEscape && !event.isComposing && opened) {
        const shouldTrigger = event.target?.getAttribute("data-mantine-stop-propagation") !== "true";
        shouldTrigger && onClose();
      }
    },
    { capture: true }
  );
  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });
  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted
  };
}

const ModalBase = reactExports.forwardRef(
  ({
    keepMounted,
    opened,
    onClose,
    id,
    transitionProps,
    onExitTransitionEnd,
    onEnterTransitionEnd,
    trapFocus,
    closeOnEscape,
    returnFocus,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    lockScroll,
    children,
    zIndex,
    shadow,
    padding,
    __vars,
    unstyled,
    removeScrollProps,
    ...others
  }, ref) => {
    const { _id, titleMounted, bodyMounted, shouldLockScroll, setTitleMounted, setBodyMounted } = useModal({ id, transitionProps, opened, trapFocus, closeOnEscape, onClose, returnFocus });
    const { key: removeScrollKey, ...otherRemoveScrollProps } = removeScrollProps || {};
    return /* @__PURE__ */ jsxRuntimeExports.jsx(OptionalPortal, { ...portalProps, withinPortal, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalBaseProvider,
      {
        value: {
          opened,
          onClose,
          closeOnClickOutside,
          onExitTransitionEnd,
          onEnterTransitionEnd,
          transitionProps: { ...transitionProps, keepMounted },
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape,
          zIndex,
          unstyled
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          RemoveScroll,
          {
            enabled: shouldLockScroll && lockScroll,
            ...otherRemoveScrollProps,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Box,
              {
                ref,
                ...others,
                __vars: {
                  ...__vars,
                  "--mb-z-index": (zIndex || getDefaultZIndex("modal")).toString(),
                  "--mb-shadow": getShadow(shadow),
                  "--mb-padding": getSpacing(padding)
                },
                children
              }
            )
          },
          removeScrollKey
        )
      }
    ) });
  }
);
ModalBase.displayName = "@mantine/core/ModalBase";

function useModalBodyId() {
  const ctx = useModalBaseContext();
  reactExports.useEffect(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

var classes$d = {"title":"m_615af6c9","header":"m_b5489c3c","inner":"m_60c222c7","content":"m_fd1ab0aa","close":"m_606cb269","body":"m_5df29311"};

const ModalBaseBody = reactExports.forwardRef(
  ({ className, ...others }, ref) => {
    const bodyId = useModalBodyId();
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ref,
        ...others,
        id: bodyId,
        className: clsx({ [classes$d.body]: !ctx.unstyled }, className)
      }
    );
  }
);
ModalBaseBody.displayName = "@mantine/core/ModalBaseBody";

const ModalBaseCloseButton = reactExports.forwardRef(
  ({ className, onClick, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CloseButton,
      {
        ref,
        ...others,
        onClick: (event) => {
          ctx.onClose();
          onClick?.(event);
        },
        className: clsx({ [classes$d.close]: !ctx.unstyled }, className),
        unstyled: ctx.unstyled
      }
    );
  }
);
ModalBaseCloseButton.displayName = "@mantine/core/ModalBaseCloseButton";

const ModalBaseContent = reactExports.forwardRef(
  ({ transitionProps, className, innerProps, onKeyDown, style, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Transition,
      {
        mounted: ctx.opened,
        transition: "pop",
        ...ctx.transitionProps,
        onExited: () => {
          ctx.onExitTransitionEnd?.();
          ctx.transitionProps?.onExited?.();
        },
        onEntered: () => {
          ctx.onEnterTransitionEnd?.();
          ctx.transitionProps?.onEntered?.();
        },
        ...transitionProps,
        children: (transitionStyles) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ...innerProps,
            className: clsx({ [classes$d.inner]: !ctx.unstyled }, innerProps.className),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FocusTrap, { active: ctx.opened && ctx.trapFocus, innerRef: ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Paper,
              {
                ...others,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": true,
                "aria-describedby": ctx.bodyMounted ? ctx.getBodyId() : void 0,
                "aria-labelledby": ctx.titleMounted ? ctx.getTitleId() : void 0,
                style: [style, transitionStyles],
                className: clsx({ [classes$d.content]: !ctx.unstyled }, className),
                unstyled: ctx.unstyled,
                children: others.children
              }
            ) })
          }
        )
      }
    );
  }
);
ModalBaseContent.displayName = "@mantine/core/ModalBaseContent";

const ModalBaseHeader = reactExports.forwardRef(
  ({ className, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        component: "header",
        ref,
        className: clsx({ [classes$d.header]: !ctx.unstyled }, className),
        ...others
      }
    );
  }
);
ModalBaseHeader.displayName = "@mantine/core/ModalBaseHeader";

const DEFAULT_TRANSITION = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function useModalTransition(transitionOverride) {
  const ctx = useModalBaseContext();
  return { ...DEFAULT_TRANSITION, ...ctx.transitionProps, ...transitionOverride };
}

const ModalBaseOverlay = reactExports.forwardRef(
  ({ onClick, transitionProps, style, visible, ...others }, ref) => {
    const ctx = useModalBaseContext();
    const transition = useModalTransition(transitionProps);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Transition,
      {
        mounted: visible !== void 0 ? visible : ctx.opened,
        ...transition,
        transition: "fade",
        children: (transitionStyles) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Overlay,
          {
            ref,
            fixed: true,
            style: [style, transitionStyles],
            zIndex: ctx.zIndex,
            unstyled: ctx.unstyled,
            onClick: (event) => {
              onClick?.(event);
              ctx.closeOnClickOutside && ctx.onClose();
            },
            ...others
          }
        )
      }
    );
  }
);
ModalBaseOverlay.displayName = "@mantine/core/ModalBaseOverlay";

function useModalTitle() {
  const ctx = useModalBaseContext();
  reactExports.useEffect(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

const ModalBaseTitle = reactExports.forwardRef(
  ({ className, ...others }, ref) => {
    const id = useModalTitle();
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        component: "h2",
        ref,
        className: clsx({ [classes$d.title]: !ctx.unstyled }, className),
        ...others,
        id
      }
    );
  }
);
ModalBaseTitle.displayName = "@mantine/core/ModalBaseTitle";

function NativeScrollArea({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}

const [InputContext, useInputContext] = createOptionalContext({
  size: "sm"
});

const defaultProps$v = {};
const InputClearButton = factory((_props, ref) => {
  const props = useProps("InputClearButton", defaultProps$v, _props);
  const { size, variant, vars, classNames, styles, ...others } = props;
  const ctx = useInputContext();
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CloseButton,
    {
      variant: variant || "transparent",
      ref,
      size: size || ctx?.size || "sm",
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: "InputClearButton",
      ...others
    }
  );
});
InputClearButton.displayName = "@mantine/core/InputClearButton";

const [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

var classes$c = {"wrapper":"m_6c018570","input":"m_8fb7ebe7","section":"m_82577fc2","placeholder":"m_88bacfd0","root":"m_46b77525","label":"m_8fdc1311","required":"m_78a94662","error":"m_8f816625","description":"m_fe47ce59"};

const defaultProps$u = {};
const varsResolver$h = createVarsResolver((_, { size }) => ({
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${getFontSize(size)} - ${rem(2)})`
  }
}));
const InputDescription = factory((_props, ref) => {
  const props = useProps("InputDescription", defaultProps$u, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = useProps("InputDescription", defaultProps$u, props);
  const ctx = useInputWrapperContext();
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes$c,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "description",
    vars,
    varsResolver: varsResolver$h
  });
  const getStyles = __inheritStyles && ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      component: "p",
      ref,
      variant,
      size,
      ...getStyles("description", ctx?.getStyles ? { className, style } : void 0),
      ...others
    }
  );
});
InputDescription.classes = classes$c;
InputDescription.displayName = "@mantine/core/InputDescription";

const defaultProps$t = {};
const varsResolver$g = createVarsResolver((_, { size }) => ({
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${getFontSize(size)} - ${rem(2)})`
  }
}));
const InputError = factory((_props, ref) => {
  const props = useProps("InputError", defaultProps$t, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = props;
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes$c,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: varsResolver$g
  });
  const ctx = useInputWrapperContext();
  const getStyles = __inheritStyles && ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      component: "p",
      ref,
      variant,
      size,
      ...getStyles("error", ctx?.getStyles ? { className, style } : void 0),
      ...others
    }
  );
});
InputError.classes = classes$c;
InputError.displayName = "@mantine/core/InputError";

const defaultProps$s = {
  labelElement: "label"
};
const varsResolver$f = createVarsResolver((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize(size),
    "--input-asterisk-color": void 0
  }
}));
const InputLabel = factory((_props, ref) => {
  const props = useProps("InputLabel", defaultProps$s, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant,
    mod,
    ...others
  } = useProps("InputLabel", defaultProps$s, props);
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes$c,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver: varsResolver$f
  });
  const ctx = useInputWrapperContext();
  const getStyles = ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      ...getStyles("label", ctx?.getStyles ? { className, style } : void 0),
      component: labelElement,
      variant,
      size,
      ref,
      htmlFor: labelElement === "label" ? htmlFor : void 0,
      mod: [{ required }, mod],
      onMouseDown: (event) => {
        onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      },
      ...others,
      children: [
        children,
        required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getStyles("required"), "aria-hidden": true, children: " *" })
      ]
    }
  );
});
InputLabel.classes = classes$c;
InputLabel.displayName = "@mantine/core/InputLabel";

const defaultProps$r = {};
const InputPlaceholder = factory((_props, ref) => {
  const props = useProps("InputPlaceholder", defaultProps$r, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    variant,
    error,
    mod,
    ...others
  } = useProps("InputPlaceholder", defaultProps$r, props);
  const getStyles = useStyles({
    name: ["InputPlaceholder", __staticSelector],
    props,
    classes: classes$c,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...getStyles("placeholder"),
      mod: [{ error: !!error }, mod],
      component: "span",
      variant,
      ref,
      ...others
    }
  );
});
InputPlaceholder.classes = classes$c;
InputPlaceholder.displayName = "@mantine/core/InputPlaceholder";

function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder.slice(0, inputIndex);
  const belowInput = inputWrapperOrder.slice(inputIndex + 1);
  const offsetTop = hasDescription && aboveInput.includes("description") || hasError && aboveInput.includes("error");
  const offsetBottom = hasDescription && belowInput.includes("description") || hasError && belowInput.includes("error");
  return { offsetBottom, offsetTop };
}

const defaultProps$q = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
const varsResolver$e = createVarsResolver((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize(size),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${getFontSize(size)} - ${rem(2)})`
  },
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${getFontSize(size)} - ${rem(2)})`
  }
}));
const InputWrapper = factory((_props, ref) => {
  const props = useProps("InputWrapper", defaultProps$q, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps,
    mod,
    ...others
  } = props;
  const getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes$c,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$e
  });
  const sharedProps = {
    size,
    variant,
    __staticSelector
  };
  const idBase = useId(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = errorProps?.id || `${idBase}-error`;
  const descriptionId = descriptionProps?.id || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = labelProps?.id || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ jsxRuntimeExports.jsx(
    InputLabel,
    {
      labelElement,
      id: labelId,
      htmlFor: inputId,
      required: isRequired,
      ...sharedProps,
      ...labelProps,
      children: label
    },
    "label"
  );
  const _description = hasDescription && /* @__PURE__ */ jsxRuntimeExports.jsx(
    InputDescription,
    {
      ...descriptionProps,
      ...sharedProps,
      size: descriptionProps?.size || sharedProps.size,
      id: descriptionProps?.id || descriptionId,
      children: description
    },
    "description"
  );
  const _input = /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: inputContainer(children) }, "input");
  const _error = hasError && /* @__PURE__ */ reactExports.createElement(
    InputError,
    {
      ...errorProps,
      ...sharedProps,
      size: errorProps?.size || sharedProps.size,
      key: "error",
      id: errorProps?.id || errorId
    },
    error
  );
  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case "label":
        return _label;
      case "input":
        return _input;
      case "description":
        return _description;
      case "error":
        return _error;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    InputWrapperProvider,
    {
      value: {
        getStyles,
        describedBy,
        inputId,
        labelId,
        ...getInputOffsets(inputWrapperOrder, { hasDescription, hasError })
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          ref,
          variant,
          size,
          mod: [{ error: !!error }, mod],
          ...getStyles("root"),
          ...others,
          children: content
        }
      )
    }
  );
});
InputWrapper.classes = classes$c;
InputWrapper.displayName = "@mantine/core/InputWrapper";

const defaultProps$p = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
const varsResolver$d = createVarsResolver((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": getSize(props.size, "input-height"),
    "--input-fz": getFontSize(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : getRadius(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? rem(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? rem(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? getSize(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
const Input = polymorphicFactory((_props, ref) => {
  const props = useProps("Input", defaultProps$p, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size,
    wrapperProps,
    error,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    id,
    withAria,
    withErrorStyles,
    mod,
    inputSize,
    __clearSection,
    __clearable,
    __defaultRightSection,
    ...others
  } = props;
  const { styleProps, rest } = extractStyleProps(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = { offsetBottom: ctx?.offsetBottom, offsetTop: ctx?.offsetTop };
  const getStyles = useStyles({
    name: ["Input", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes$c,
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver$d
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx?.describedBy,
    id: ctx?.inputId || id
  } : {};
  const _rightSection = rightSection || __clearable && __clearSection || __defaultRightSection;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputContext, { value: { size: size || "sm" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      ...getStyles("wrapper"),
      ...styleProps,
      ...wrapperProps,
      mod: [
        {
          error: !!error && withErrorStyles,
          pointer,
          disabled,
          multiline,
          "data-with-right-section": !!_rightSection,
          "data-with-left-section": !!leftSection
        },
        mod
      ],
      variant,
      size,
      children: [
        leftSection && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ...leftSectionProps,
            "data-position": "left",
            ...getStyles("section", {
              className: leftSectionProps?.className,
              style: leftSectionProps?.style
            }),
            children: leftSection
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            component: "input",
            ...rest,
            ...ariaAttributes,
            ref,
            required,
            mod: { disabled, error: !!error && withErrorStyles },
            variant,
            __size: inputSize,
            ...getStyles("input")
          }
        ),
        _rightSection && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ...rightSectionProps,
            "data-position": "right",
            ...getStyles("section", {
              className: rightSectionProps?.className,
              style: rightSectionProps?.style
            }),
            children: _rightSection
          }
        )
      ]
    }
  ) });
});
Input.classes = classes$c;
Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.ClearButton = InputClearButton;
Input.displayName = "@mantine/core/Input";

function useInputProps(component, defaultProps, _props) {
  const props = useProps(component, defaultProps, _props);
  const {
    label,
    description,
    error,
    required,
    classNames,
    styles,
    className,
    unstyled,
    __staticSelector,
    __stylesApiProps,
    errorProps,
    labelProps,
    descriptionProps,
    wrapperProps: _wrapperProps,
    id,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    vars,
    mod,
    ...others
  } = props;
  const { styleProps, rest } = extractStyleProps(others);
  const wrapperProps = {
    label,
    description,
    error,
    required,
    classNames,
    className,
    __staticSelector,
    __stylesApiProps: __stylesApiProps || props,
    errorProps,
    labelProps,
    descriptionProps,
    unstyled,
    styles,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    id,
    mod,
    ..._wrapperProps
  };
  return {
    ...rest,
    classNames,
    styles,
    unstyled,
    wrapperProps: { ...wrapperProps, ...styleProps },
    inputProps: {
      required,
      classNames,
      styles,
      unstyled,
      size,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      error,
      variant,
      id
    }
  };
}

const defaultProps$o = {
  __staticSelector: "InputBase",
  withAria: true
};
const InputBase = polymorphicFactory((props, ref) => {
  const { inputProps, wrapperProps, ...others } = useInputProps("InputBase", defaultProps$o, props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Input.Wrapper, { ...wrapperProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...inputProps, ...others, ref }) });
});
InputBase.classes = { ...Input.classes, ...Input.Wrapper.classes };
InputBase.displayName = "@mantine/core/InputBase";

var classes$b = {"root":"m_b6d8b162"};

function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
const defaultProps$n = {
  inherit: false
};
const varsResolver$c = createVarsResolver(
  (theme, { variant, lineClamp, gradient, size, color }) => ({
    root: {
      "--text-fz": getFontSize(size),
      "--text-lh": getLineHeight(size),
      "--text-gradient": variant === "gradient" ? getGradient(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--text-color": color ? getThemeColor(color, theme) : void 0
    }
  })
);
const Text = polymorphicFactory((_props, ref) => {
  const props = useProps("Text", defaultProps$n, _props);
  const {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: ["Text", __staticSelector],
    props,
    classes: classes$b,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$c
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...getStyles("root", { focusable: true }),
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit
        },
        mod
      ],
      size,
      ...others
    }
  );
});
Text.classes = classes$b;
Text.displayName = "@mantine/core/Text";

var classes$a = {"root":"m_5f75b09e","body":"m_5f6e695e","labelWrapper":"m_d3ea56bb","label":"m_8ee546b8","description":"m_328f68c0","error":"m_8e8a99cc"};

const InlineInputClasses = classes$a;
const InlineInput = reactExports.forwardRef(
  ({
    __staticSelector,
    __stylesApiProps,
    className,
    classNames,
    styles,
    unstyled,
    children,
    label,
    description,
    id,
    disabled,
    error,
    size,
    labelPosition = "left",
    bodyElement = "div",
    labelElement = "label",
    variant,
    style,
    vars,
    mod,
    ...others
  }, ref) => {
    const getStyles = useStyles({
      name: __staticSelector,
      props: __stylesApiProps,
      className,
      style,
      classes: classes$a,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ...getStyles("root"),
        ref,
        __vars: {
          "--label-fz": getFontSize(size),
          "--label-lh": getSize(size, "label-lh")
        },
        mod: [{ "label-position": labelPosition }, mod],
        variant,
        size,
        ...others,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            component: bodyElement,
            htmlFor: bodyElement === "label" ? id : void 0,
            ...getStyles("body"),
            children: [
              children,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getStyles("labelWrapper"), "data-disabled": disabled || void 0, children: [
                label && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    component: labelElement,
                    htmlFor: labelElement === "label" ? id : void 0,
                    ...getStyles("label"),
                    "data-disabled": disabled || void 0,
                    children: label
                  }
                ),
                description && /* @__PURE__ */ jsxRuntimeExports.jsx(Input.Description, { size, __inheritStyles: false, ...getStyles("description"), children: description }),
                error && typeof error !== "boolean" && /* @__PURE__ */ jsxRuntimeExports.jsx(Input.Error, { size, __inheritStyles: false, ...getStyles("error"), children: error })
              ] })
            ]
          }
        )
      }
    );
  }
);
InlineInput.displayName = "@mantine/core/InlineInput";

function InputsGroupFieldset({ children, role }) {
  const ctx = useInputWrapperContext();
  if (!ctx) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role, "aria-labelledby": ctx.labelId, "aria-describedby": ctx.describedBy, children });
}

var classes$9 = {"root":"m_347db0ec","root--dot":"m_fbd81e3d","label":"m_5add502a","section":"m_91fdda9b"};

const defaultProps$m = {};
const varsResolver$b = createVarsResolver(
  (theme, { radius, color, gradient, variant, size, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--badge-height": getSize(size, "badge-height"),
        "--badge-padding-x": getSize(size, "badge-padding-x"),
        "--badge-fz": getSize(size, "badge-fz"),
        "--badge-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--badge-bg": color || variant ? colors.background : void 0,
        "--badge-color": color || variant ? colors.color : void 0,
        "--badge-bd": color || variant ? colors.border : void 0,
        "--badge-dot-color": variant === "dot" ? getThemeColor(color, theme) : void 0
      }
    };
  }
);
const Badge = polymorphicFactory((_props, ref) => {
  const props = useProps("Badge", defaultProps$m, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    gradient,
    leftSection,
    rightSection,
    children,
    variant,
    fullWidth,
    autoContrast,
    circle,
    mod,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "Badge",
    props,
    classes: classes$9,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$b
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      variant,
      mod: [
        {
          block: fullWidth,
          circle,
          "with-right-section": !!rightSection,
          "with-left-section": !!leftSection
        },
        mod
      ],
      ...getStyles("root", { variant }),
      ref,
      ...others,
      children: [
        leftSection && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getStyles("section"), "data-position": "left", children: leftSection }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getStyles("label"), children }),
        rightSection && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getStyles("section"), "data-position": "right", children: rightSection })
      ]
    }
  );
});
Badge.classes = classes$9;
Badge.displayName = "@mantine/core/Badge";

var classes$8 = {"root":"m_77c9d27d","inner":"m_80f1301b","label":"m_811560b9","section":"m_a74036a","loader":"m_a25b86ee","group":"m_80d6d844","groupSection":"m_70be2a01"};

const defaultProps$l = {
  orientation: "horizontal"
};
const varsResolver$a = createVarsResolver((_, { borderWidth }) => ({
  group: { "--button-border-width": rem(borderWidth) }
}));
const ButtonGroup = factory((_props, ref) => {
  const props = useProps("ButtonGroup", defaultProps$l, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    mod,
    ...others
  } = useProps("ButtonGroup", defaultProps$l, _props);
  const getStyles = useStyles({
    name: "ButtonGroup",
    props,
    classes: classes$8,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$a,
    rootSelector: "group"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...getStyles("group"),
      ref,
      variant,
      mod: [{ "data-orientation": orientation }, mod],
      role: "group",
      ...others
    }
  );
});
ButtonGroup.classes = classes$8;
ButtonGroup.displayName = "@mantine/core/ButtonGroup";

const defaultProps$k = {};
const varsResolver$9 = createVarsResolver(
  (theme, { radius, color, gradient, variant, autoContrast, size }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      groupSection: {
        "--section-height": getSize(size, "section-height"),
        "--section-padding-x": getSize(size, "section-padding-x"),
        "--section-fz": size?.includes("compact") ? getFontSize(size.replace("compact-", "")) : getFontSize(size),
        "--section-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--section-bg": color || variant ? colors.background : void 0,
        "--section-color": colors.color,
        "--section-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
const ButtonGroupSection = factory((_props, ref) => {
  const props = useProps("ButtonGroupSection", defaultProps$k, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    variant,
    gradient,
    radius,
    autoContrast,
    ...others
  } = useProps("ButtonGroupSection", defaultProps$k, _props);
  const getStyles = useStyles({
    name: "ButtonGroupSection",
    props,
    classes: classes$8,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$9,
    rootSelector: "groupSection"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ...getStyles("groupSection"), ref, variant, ...others });
});
ButtonGroupSection.classes = classes$8;
ButtonGroupSection.displayName = "@mantine/core/ButtonGroupSection";

const loaderTransition = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${rem(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
};
const defaultProps$j = {};
const varsResolver$8 = createVarsResolver(
  (theme, { radius, color, gradient, variant, size, justify, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": getSize(size, "button-height"),
        "--button-padding-x": getSize(size, "button-padding-x"),
        "--button-fz": size?.includes("compact") ? getFontSize(size.replace("compact-", "")) : getFontSize(size),
        "--button-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": colors.color,
        "--button-bd": color || variant ? colors.border : void 0,
        "--button-hover-color": color || variant ? colors.hoverColor : void 0
      }
    };
  }
);
const Button = polymorphicFactory((_props, ref) => {
  const props = useProps("Button", defaultProps$j, _props);
  const {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "Button",
    props,
    classes: classes$8,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$8
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    UnstyledButton,
    {
      ref,
      ...getStyles("root", { active: !disabled && !loading && !dataDisabled }),
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: [
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection
        },
        mod
      ],
      ...others,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Transition, { mounted: !!loading, transition: loaderTransition, duration: 150, children: (transitionStyles) => /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", ...getStyles("loader", { style: transitionStyles }), "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Loader,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...loaderProps
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ...getStyles("inner"), children: [
          leftSection && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", ...getStyles("section"), mod: { position: "left" }, children: leftSection }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", mod: { loading }, ...getStyles("label"), children }),
          rightSection && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", ...getStyles("section"), mod: { position: "right" }, children: rightSection })
        ] })
      ]
    }
  );
});
Button.classes = classes$8;
Button.displayName = "@mantine/core/Button";
Button.Group = ButtonGroup;
Button.GroupSection = ButtonGroupSection;

const [CardProvider, useCardContext] = createSafeContext(
  "Card component was not found in tree"
);

var classes$7 = {"root":"m_e615b15f","section":"m_599a2148"};

const defaultProps$i = {};
const CardSection = polymorphicFactory((_props, ref) => {
  const props = useProps("CardSection", defaultProps$i, _props);
  const { classNames, className, style, styles, vars, withBorder, inheritPadding, mod, ...others } = props;
  const ctx = useCardContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ref,
      mod: [{ "with-border": withBorder, "inherit-padding": inheritPadding }, mod],
      ...ctx.getStyles("section", { className, style, styles, classNames }),
      ...others
    }
  );
});
CardSection.classes = classes$7;
CardSection.displayName = "@mantine/core/CardSection";

const defaultProps$h = {};
const varsResolver$7 = createVarsResolver((_, { padding }) => ({
  root: {
    "--card-padding": getSpacing(padding)
  }
}));
const Card = polymorphicFactory((_props, ref) => {
  const props = useProps("Card", defaultProps$h, _props);
  const { classNames, className, style, styles, unstyled, vars, children, padding, ...others } = props;
  const getStyles = useStyles({
    name: "Card",
    props,
    classes: classes$7,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$7
  });
  const _children = reactExports.Children.toArray(children);
  const content = _children.map((child, index) => {
    if (typeof child === "object" && child && "type" in child && child.type === CardSection) {
      return reactExports.cloneElement(child, {
        "data-first-section": index === 0 || void 0,
        "data-last-section": index === _children.length - 1 || void 0
      });
    }
    return child;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardProvider, { value: { getStyles }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paper, { ref, unstyled, ...getStyles("root"), ...others, children: content }) });
});
Card.classes = classes$7;
Card.displayName = "@mantine/core/Card";
Card.Section = CardSection;

var classes$6 = {"root":"m_3eebeb36","label":"m_9e365f20"};

const defaultProps$g = {
  orientation: "horizontal"
};
const varsResolver$6 = createVarsResolver((theme, { color, variant, size }) => ({
  root: {
    "--divider-color": color ? getThemeColor(color, theme) : void 0,
    "--divider-border-style": variant,
    "--divider-size": getSize(size, "divider-size")
  }
}));
const Divider = factory((_props, ref) => {
  const props = useProps("Divider", defaultProps$g, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    orientation,
    label,
    labelPosition,
    mod,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "Divider",
    classes: classes$6,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$6
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ref,
      mod: [{ orientation, "with-label": !!label }, mod],
      ...getStyles("root"),
      ...others,
      role: "separator",
      children: label && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", mod: { position: labelPosition }, ...getStyles("label"), children: label })
    }
  );
});
Divider.classes = classes$6;
Divider.displayName = "@mantine/core/Divider";

const [ListProvider, useListContext] = createSafeContext(
  "List component was not found in tree"
);

var classes$5 = {"root":"m_abbac491","item":"m_abb6bec2","itemWrapper":"m_75cd9f71","itemIcon":"m_60f83e5b"};

const defaultProps$f = {};
const ListItem = factory((_props, ref) => {
  const props = useProps("ListItem", defaultProps$f, _props);
  const { classNames, className, style, styles, vars, icon, children, mod, ...others } = props;
  const ctx = useListContext();
  const _icon = icon || ctx.icon;
  const stylesApiProps = { classNames, styles };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...ctx.getStyles("item", { ...stylesApiProps, className, style }),
      component: "li",
      mod: [{ "with-icon": !!_icon, centered: ctx.center }, mod],
      ref,
      ...others,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...ctx.getStyles("itemWrapper", stylesApiProps), children: [
        _icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...ctx.getStyles("itemIcon", stylesApiProps), children: _icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...ctx.getStyles("itemLabel", stylesApiProps), children })
      ] })
    }
  );
});
ListItem.classes = classes$5;
ListItem.displayName = "@mantine/core/ListItem";

const defaultProps$e = {
  type: "unordered"
};
const varsResolver$5 = createVarsResolver((_, { size, spacing }) => ({
  root: {
    "--list-fz": getFontSize(size),
    "--list-lh": getLineHeight(size),
    "--list-spacing": getSpacing(spacing)
  }
}));
const List = factory((_props, ref) => {
  const props = useProps("List", defaultProps$e, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    type,
    withPadding,
    icon,
    spacing,
    center,
    listStyleType,
    mod,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "List",
    classes: classes$5,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$5
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListProvider, { value: { center, icon, getStyles }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...getStyles("root", { style: { listStyleType } }),
      component: type === "unordered" ? "ul" : "ol",
      mod: [{ "with-padding": withPadding }, mod],
      ref,
      ...others,
      children
    }
  ) });
});
List.classes = classes$5;
List.displayName = "@mantine/core/List";
List.Item = ListItem;

const [ModalProvider, useModalContext] = createSafeContext(
  "Modal component was not found in tree"
);

var classes$4 = {"root":"m_9df02822","content":"m_54c44539","inner":"m_1f958f16","header":"m_d0e2b9cd"};

const defaultProps$d = {};
const ModalBody = factory((_props, ref) => {
  const props = useProps("ModalBody", defaultProps$d, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalBaseBody,
    {
      ref,
      ...ctx.getStyles("body", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalBody.classes = classes$4;
ModalBody.displayName = "@mantine/core/ModalBody";

const defaultProps$c = {};
const ModalCloseButton = factory((_props, ref) => {
  const props = useProps("ModalCloseButton", defaultProps$c, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalBaseCloseButton,
    {
      ref,
      ...ctx.getStyles("close", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalCloseButton.classes = classes$4;
ModalCloseButton.displayName = "@mantine/core/ModalCloseButton";

const defaultProps$b = {};
const ModalContent = factory((_props, ref) => {
  const props = useProps("ModalContent", defaultProps$b, _props);
  const { classNames, className, style, styles, vars, children, __hidden, ...others } = props;
  const ctx = useModalContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalBaseContent,
    {
      ...ctx.getStyles("content", { className, style, styles, classNames }),
      innerProps: ctx.getStyles("inner", { className, style, styles, classNames }),
      "data-full-screen": ctx.fullScreen || void 0,
      "data-modal-content": true,
      "data-hidden": __hidden || void 0,
      ref,
      ...others,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Scroll,
        {
          style: {
            maxHeight: ctx.fullScreen ? "100dvh" : `calc(100dvh - (${rem(ctx.yOffset)} * 2))`
          },
          children
        }
      )
    }
  );
});
ModalContent.classes = classes$4;
ModalContent.displayName = "@mantine/core/ModalContent";

const defaultProps$a = {};
const ModalHeader = factory((_props, ref) => {
  const props = useProps("ModalHeader", defaultProps$a, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalBaseHeader,
    {
      ref,
      ...ctx.getStyles("header", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalHeader.classes = classes$4;
ModalHeader.displayName = "@mantine/core/ModalHeader";

const defaultProps$9 = {};
const ModalOverlay = factory((_props, ref) => {
  const props = useProps("ModalOverlay", defaultProps$9, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalBaseOverlay,
    {
      ref,
      ...ctx.getStyles("overlay", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalOverlay.classes = classes$4;
ModalOverlay.displayName = "@mantine/core/ModalOverlay";

const defaultProps$8 = {
  __staticSelector: "Modal",
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex("modal"),
  transitionProps: { duration: 200, transition: "fade-down" },
  yOffset: "5dvh"
};
const varsResolver$4 = createVarsResolver(
  (_, { radius, size, yOffset, xOffset }) => ({
    root: {
      "--modal-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--modal-size": getSize(size, "modal-size"),
      "--modal-y-offset": rem(yOffset),
      "--modal-x-offset": rem(xOffset)
    }
  })
);
const ModalRoot = factory((_props, ref) => {
  const props = useProps("ModalRoot", defaultProps$8, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    yOffset,
    scrollAreaComponent,
    radius,
    fullScreen,
    centered,
    xOffset,
    __staticSelector,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector,
    classes: classes$4,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$4
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ModalProvider, { value: { yOffset, scrollAreaComponent, getStyles, fullScreen }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalBase,
    {
      ref,
      ...getStyles("root"),
      "data-full-screen": fullScreen || void 0,
      "data-centered": centered || void 0,
      "data-offset-scrollbars": scrollAreaComponent === ScrollArea.Autosize || void 0,
      unstyled,
      ...others
    }
  ) });
});
ModalRoot.classes = classes$4;
ModalRoot.displayName = "@mantine/core/ModalRoot";

const [ModalStackProvider, useModalStackContext] = createOptionalContext();
function ModalStack({ children }) {
  const [stack, setStack] = reactExports.useState([]);
  const [maxZIndex, setMaxZIndex] = reactExports.useState(getDefaultZIndex("modal"));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalStackProvider,
    {
      value: {
        stack,
        addModal: (id, zIndex) => {
          setStack((current) => [.../* @__PURE__ */ new Set([...current, id])]);
          setMaxZIndex(
            (current) => typeof zIndex === "number" && typeof current === "number" ? Math.max(current, zIndex) : current
          );
        },
        removeModal: (id) => setStack((current) => current.filter((currentId) => currentId !== id)),
        getZIndex: (id) => `calc(${maxZIndex} + ${stack.indexOf(id)} + 1)`,
        currentId: stack[stack.length - 1],
        maxZIndex
      },
      children
    }
  );
}
ModalStack.displayName = "@mantine/core/ModalStack";

const defaultProps$7 = {};
const ModalTitle = factory((_props, ref) => {
  const props = useProps("ModalTitle", defaultProps$7, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ModalBaseTitle,
    {
      ref,
      ...ctx.getStyles("title", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalTitle.classes = classes$4;
ModalTitle.displayName = "@mantine/core/ModalTitle";

const defaultProps$6 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex("modal"),
  transitionProps: { duration: 200, transition: "fade-down" },
  withOverlay: true,
  withCloseButton: true
};
const Modal = factory((_props, ref) => {
  const {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    radius,
    opened,
    stackId,
    zIndex,
    ...others
  } = useProps("Modal", defaultProps$6, _props);
  const ctx = useModalStackContext();
  const hasHeader = !!title || withCloseButton;
  const stackProps = ctx && stackId ? {
    closeOnEscape: ctx.currentId === stackId,
    trapFocus: ctx.currentId === stackId,
    zIndex: ctx.getZIndex(stackId)
  } : {};
  const overlayVisible = withOverlay === false ? false : stackId && ctx ? ctx.currentId === stackId : opened;
  reactExports.useEffect(() => {
    if (ctx && stackId) {
      opened ? ctx.addModal(stackId, zIndex || getDefaultZIndex("modal")) : ctx.removeModal(stackId);
    }
  }, [opened, stackId, zIndex]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ModalRoot,
    {
      ref,
      radius,
      opened,
      zIndex: ctx && stackId ? ctx.getZIndex(stackId) : zIndex,
      ...others,
      ...stackProps,
      children: [
        withOverlay && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ModalOverlay,
          {
            visible: overlayVisible,
            transitionProps: ctx && stackId ? { duration: 0 } : void 0,
            ...overlayProps
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ModalContent,
          {
            radius,
            __hidden: ctx && stackId && opened ? stackId !== ctx.currentId : false,
            children: [
              hasHeader && /* @__PURE__ */ jsxRuntimeExports.jsxs(ModalHeader, { children: [
                title && /* @__PURE__ */ jsxRuntimeExports.jsx(ModalTitle, { children: title }),
                withCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsx(ModalCloseButton, { ...closeButtonProps })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ModalBody, { children })
            ]
          }
        )
      ]
    }
  );
});
Modal.classes = classes$4;
Modal.displayName = "@mantine/core/Modal";
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.Stack = ModalStack;

var classes$3 = {"root":"m_a513464","icon":"m_a4ceffb","loader":"m_b0920b15","body":"m_a49ed24","title":"m_3feedf16","description":"m_3d733a3a","closeButton":"m_919a4d88"};

const defaultProps$5 = {
  withCloseButton: true
};
const varsResolver$3 = createVarsResolver((theme, { radius, color }) => ({
  root: {
    "--notification-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--notification-color": color ? getThemeColor(color, theme) : void 0
  }
}));
const Notification = factory((_props, ref) => {
  const props = useProps("Notification", defaultProps$5, _props);
  const {
    className,
    color,
    radius,
    loading,
    withCloseButton,
    withBorder,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    classNames,
    style,
    styles,
    unstyled,
    variant,
    vars,
    mod,
    loaderProps,
    role,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "Notification",
    classes: classes$3,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$3
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      ...getStyles("root"),
      mod: [{ "data-with-icon": !!icon || loading, "data-with-border": withBorder }, mod],
      ref,
      variant,
      role: role || "alert",
      ...others,
      children: [
        icon && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getStyles("icon"), children: icon }),
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: 28, color, ...loaderProps, ...getStyles("loader") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getStyles("body"), children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getStyles("title"), children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ...getStyles("description"), mod: { "data-with-title": !!title }, children })
        ] }),
        withCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
          CloseButton,
          {
            iconSize: 16,
            color: "gray",
            ...closeButtonProps,
            unstyled,
            onClick: onClose,
            ...getStyles("closeButton")
          }
        )
      ]
    }
  );
});
Notification.classes = classes$3;
Notification.displayName = "@mantine/core/Notification";

const SwitchGroupContext = reactExports.createContext(null);
const SwitchGroupProvider = SwitchGroupContext.Provider;
const useSwitchGroupContext = () => reactExports.useContext(SwitchGroupContext);

const defaultProps$4 = {};
const SwitchGroup = factory((props, ref) => {
  const { value, defaultValue, onChange, size, wrapperProps, children, readOnly, ...others } = useProps("SwitchGroup", defaultProps$4, props);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const handleChange = (event) => {
    const itemValue = event.currentTarget.value;
    !readOnly && setValue(
      _value.includes(itemValue) ? _value.filter((item) => item !== itemValue) : [..._value, itemValue]
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchGroupProvider, { value: { value: _value, onChange: handleChange, size }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input.Wrapper,
    {
      size,
      ref,
      ...wrapperProps,
      ...others,
      labelElement: "div",
      __staticSelector: "SwitchGroup",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputsGroupFieldset, { role: "group", children })
    }
  ) });
});
SwitchGroup.classes = Input.Wrapper.classes;
SwitchGroup.displayName = "@mantine/core/SwitchGroup";

var classes$2 = {"root":"m_5f93f3bb","input":"m_926b4011","track":"m_9307d992","thumb":"m_93039a1d","trackLabel":"m_8277e082"};

const defaultProps$3 = {
  labelPosition: "right"
};
const varsResolver$2 = createVarsResolver((theme, { radius, color, size }) => ({
  root: {
    "--switch-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--switch-height": getSize(size, "switch-height"),
    "--switch-width": getSize(size, "switch-width"),
    "--switch-thumb-size": getSize(size, "switch-thumb-size"),
    "--switch-label-font-size": getSize(size, "switch-label-font-size"),
    "--switch-track-label-padding": getSize(size, "switch-track-label-padding"),
    "--switch-color": color ? getThemeColor(color, theme) : void 0
  }
}));
const Switch = factory((_props, ref) => {
  const props = useProps("Switch", defaultProps$3, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    offLabel,
    onLabel,
    id,
    size,
    radius,
    wrapperProps,
    thumbIcon,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    rootRef,
    mod,
    ...others
  } = props;
  const ctx = useSwitchGroupContext();
  const _size = size || ctx?.size;
  const getStyles = useStyles({
    name: "Switch",
    props,
    classes: classes$2,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$2
  });
  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);
  const contextProps = ctx ? {
    checked: ctx.value.includes(rest.value),
    onChange: ctx.onChange
  } : {};
  const [_checked, handleChange] = useUncontrolled({
    value: contextProps.checked ?? checked,
    defaultValue: defaultChecked,
    finalValue: false
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    InlineInput,
    {
      ...getStyles("root"),
      __staticSelector: "Switch",
      __stylesApiProps: props,
      id: uuid,
      size: _size,
      labelPosition,
      label,
      description,
      error,
      disabled,
      bodyElement: "label",
      labelElement: "span",
      classNames,
      styles,
      unstyled,
      "data-checked": contextProps.checked || checked || void 0,
      variant,
      ref: rootRef,
      mod,
      ...styleProps,
      ...wrapperProps,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...rest,
            disabled,
            checked: _checked,
            "data-checked": contextProps.checked || checked || void 0,
            onChange: (event) => {
              ctx ? contextProps.onChange?.(event) : onChange?.(event);
              handleChange(event.currentTarget.checked);
            },
            id: uuid,
            ref,
            type: "checkbox",
            role: "switch",
            ...getStyles("input")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            "aria-hidden": "true",
            mod: { error, "label-position": labelPosition, "without-labels": !onLabel && !offLabel },
            ...getStyles("track"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", mod: "reduce-motion", ...getStyles("thumb"), children: thumbIcon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getStyles("trackLabel"), children: _checked ? onLabel : offLabel })
            ]
          }
        )
      ]
    }
  );
});
Switch.classes = { ...classes$2, ...InlineInputClasses };
Switch.displayName = "@mantine/core/Switch";
Switch.Group = SwitchGroup;

const defaultProps$2 = {};
const TextInput = factory((props, ref) => {
  const _props = useProps("TextInput", defaultProps$2, props);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, { component: "input", ref, ..._props, __staticSelector: "TextInput" });
});
TextInput.classes = InputBase.classes;
TextInput.displayName = "@mantine/core/TextInput";

var classes$1 = {"root":"m_7341320d"};

const defaultProps$1 = {};
const varsResolver$1 = createVarsResolver(
  (theme, { size, radius, variant, gradient, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--ti-size": getSize(size, "ti-size"),
        "--ti-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--ti-bg": color || variant ? colors.background : void 0,
        "--ti-color": color || variant ? colors.color : void 0,
        "--ti-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
const ThemeIcon = factory((_props, ref) => {
  const props = useProps("ThemeIcon", defaultProps$1, _props);
  const { classNames, className, style, styles, unstyled, vars, autoContrast, ...others } = props;
  const getStyles = useStyles({
    name: "ThemeIcon",
    classes: classes$1,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver$1
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ref, ...getStyles("root"), ...others });
});
ThemeIcon.classes = classes$1;
ThemeIcon.displayName = "@mantine/core/ThemeIcon";

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
const sizes = ["xs", "sm", "md", "lg", "xl"];
function getTitleSize(order, size) {
  const titleSize = size !== void 0 ? size : `h${order}`;
  if (headings.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-${titleSize}-font-size)`,
      fontWeight: `var(--mantine-${titleSize}-font-weight)`,
      lineHeight: `var(--mantine-${titleSize}-line-height)`
    };
  } else if (sizes.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-font-size-${titleSize})`,
      fontWeight: `var(--mantine-h${order}-font-weight)`,
      lineHeight: `var(--mantine-h${order}-line-height)`
    };
  }
  return {
    fontSize: rem(titleSize),
    fontWeight: `var(--mantine-h${order}-font-weight)`,
    lineHeight: `var(--mantine-h${order}-line-height)`
  };
}

var classes = {"root":"m_8a5d1357"};

const defaultProps = {
  order: 1
};
const varsResolver = createVarsResolver((_, { order, size, lineClamp, textWrap }) => {
  const sizeVariables = getTitleSize(order, size);
  return {
    root: {
      "--title-fw": sizeVariables.fontWeight,
      "--title-lh": sizeVariables.lineHeight,
      "--title-fz": sizeVariables.fontSize,
      "--title-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--title-text-wrap": textWrap
    }
  };
});
const Title = factory((_props, ref) => {
  const props = useProps("Title", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    order,
    vars,
    size,
    variant,
    lineClamp,
    textWrap,
    mod,
    ...others
  } = props;
  const getStyles = useStyles({
    name: "Title",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ...getStyles("root"),
      component: `h${order}`,
      variant,
      ref,
      mod: [{ order, "data-line-clamp": typeof lineClamp === "number" }, mod],
      size,
      ...others
    }
  );
});
Title.classes = classes;
Title.displayName = "@mantine/core/Title";

var propTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var propTypesExports = propTypes.exports;
const PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

/**
 * @tabler/icons-react v2.47.0 - MIT
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @tabler/icons-react v2.47.0 - MIT
 */


var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var createReactComponent = (iconName, iconNamePascal, iconNode) => {
  const Component = reactExports.forwardRef(
    (_a, ref) => {
      var _b = _a, { color = "currentColor", size = 24, stroke = 2, children } = _b, rest = __objRest(_b, ["color", "size", "stroke", "children"]);
      return reactExports.createElement(
        "svg",
        __spreadValues(__spreadProps(__spreadValues({
          ref
        }, defaultAttributes), {
          width: size,
          height: size,
          stroke: color,
          strokeWidth: stroke,
          className: `tabler-icon tabler-icon-${iconName}`
        }), rest),
        [...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)), ...children || []]
      );
    }
  );
  Component.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  Component.displayName = `${iconNamePascal}`;
  return Component;
};

/**
 * @tabler/icons-react v2.47.0 - MIT
 */


var IconBrandX = createReactComponent("brand-x", "IconBrandX", [
  ["path", { d: "M4 4l11.733 16h4.267l-11.733 -16z", key: "svg-0" }],
  ["path", { d: "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772", key: "svg-1" }]
]);

/**
 * @tabler/icons-react v2.47.0 - MIT
 */


var IconCheck = createReactComponent("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]);

function createStore(initialState) {
  let state = initialState;
  let initialized = false;
  const listeners = /* @__PURE__ */ new Set();
  return {
    getState() {
      return state;
    },
    updateState(value) {
      state = typeof value === "function" ? value(state) : value;
    },
    setState(value) {
      this.updateState(value);
      listeners.forEach((listener) => listener(state));
    },
    initialize(value) {
      if (!initialized) {
        state = value;
        initialized = true;
      }
    },
    subscribe(callback) {
      listeners.add(callback);
      return () => listeners.delete(callback);
    }
  };
}

function getDistributedNotifications(data, defaultPosition, limit) {
  const queue = [];
  const notifications2 = [];
  const count = {};
  for (const item of data) {
    const position = item.position || defaultPosition;
    count[position] = count[position] || 0;
    count[position] += 1;
    if (count[position] <= limit) {
      notifications2.push(item);
    } else {
      queue.push(item);
    }
  }
  return { notifications: notifications2, queue };
}
const createNotificationsStore = () => createStore({
  notifications: [],
  queue: [],
  defaultPosition: "bottom-right",
  limit: 5
});
const notificationsStore = createNotificationsStore();
function updateNotificationsState(store, update) {
  const state = store.getState();
  const notifications2 = update([...state.notifications, ...state.queue]);
  const updated = getDistributedNotifications(notifications2, state.defaultPosition, state.limit);
  store.setState({
    notifications: updated.notifications,
    queue: updated.queue,
    limit: state.limit,
    defaultPosition: state.defaultPosition
  });
}
function showNotification(notification, store = notificationsStore) {
  const id = notification.id || randomId();
  updateNotificationsState(store, (notifications2) => {
    if (notification.id && notifications2.some((n) => n.id === notification.id)) {
      return notifications2;
    }
    return [...notifications2, { ...notification, id }];
  });
  return id;
}

const API_BASE$1 = "http://localhost:8000" ;
const WS_BASE = API_BASE$1.replace(/^http/, "ws");
const MAIN_SITE_URL$2 = "https://getverve.xyz" ;
function fetchUserProfileWithToken(token) {
  return fetch(`${API_BASE$1}/users/me/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then((r) => {
    if (!r.ok)
      throw new Error("Profile fetch failed");
    return r.json();
  });
}
const ORIGINS$1 = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://app.verve.dev",
  MAIN_SITE_URL$2
];
function getClerkTokenFallback() {
  return new Promise((resolve) => {
    chrome.storage?.local.get("clerkToken", ({ clerkToken }) => {
      if (clerkToken) {
        console.log("[Verve] Clerk token (cached):", clerkToken.slice(0, 16) + "…");
        resolve(clerkToken);
        return;
      }
      if (!chrome.cookies) {
        console.warn("[Verve] chrome.cookies API unavailable");
        resolve(null);
        return;
      }
      let found = null;
      let pending = ORIGINS$1.length;
      ORIGINS$1.forEach((origin) => {
        chrome.cookies.get({ url: origin, name: "__session" }, (c) => {
          console.log("[Verve] Cookie lookup", origin, c ? "✅" : "—");
          if (c?.value && !found) {
            found = c.value;
            chrome.storage?.local.set({ clerkToken: found });
            console.log("[Verve] Clerk token (cookie):", found.slice(0, 16) + "…");
            resolve(found);
          }
          if (--pending === 0 && !found) {
            console.warn("[Verve] Clerk token NOT found");
            resolve(null);
          }
        });
      });
    });
  });
}
function TwitterLogin({ onLogin, onHistory, onProfile }) {
  const [user, setUser] = reactExports.useState(null);
  const [msg, setMsg] = reactExports.useState("");
  const [analysisStatus, setStatus] = reactExports.useState("");
  const [progress, setProgress] = reactExports.useState(0);
  const [manualUsername, setManualUsername] = reactExports.useState("");
  const [manualStatus, setManualStatus] = reactExports.useState("");
  const [profile, setProfile] = reactExports.useState(null);
  const [history, setHistory] = reactExports.useState([]);
  const [settings, setSettings] = reactExports.useState({ autoCopy: false, notifications: true });
  const [feedback, setFeedback] = reactExports.useState("");
  const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onClose: onSettingsClose } = useDisclosure();
  const { isOpen: isFeedbackOpen, onOpen: onFeedbackOpen, onClose: onFeedbackClose } = useDisclosure();
  const socketRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    chrome.storage.local.get(["twitterUser", "toneReady"], ({ twitterUser, toneReady }) => {
      if (twitterUser) {
        setUser(twitterUser);
        onLogin?.(twitterUser);
        if (!toneReady) {
          setStatus("Starting profile analysis…");
        }
      }
    });
  }, [onLogin]);
  reactExports.useEffect(() => {
    function handleChange(changes, area) {
      if (area === "local" && changes.recentHistory) {
        setHistory(changes.recentHistory.newValue || []);
      }
    }
    chrome.storage.onChanged.addListener(handleChange);
    return () => chrome.storage.onChanged.removeListener(handleChange);
  }, []);
  reactExports.useEffect(() => {
    if (!user)
      return;
    chrome.storage.local.get("toneReady", ({ toneReady }) => {
      if (toneReady) {
        setStatus("Profile already analyzed.");
        return;
      }
      setStatus("Connecting to analysis service…");
      const ws = new WebSocket(`${WS_BASE}/ws/scrape/${user.username}`);
      socketRef.current = ws;
      ws.onopen = () => {
      };
      ws.onmessage = ({ data }) => {
        const msg2 = JSON.parse(data);
        if (msg2.status === "completed") {
          setProgress(msg2.tweets_found >= 400 ? 100 : 100);
          setStatus(`Fetched ${msg2.tweets_found} tweets. Analysis done!`);
          chrome.storage.local.set({ toneReady: true });
          ws.close();
        }
      };
      ws.onerror = () => setStatus("Error during analysis. Please try again later.");
      ws.onclose = () => {
      };
      return () => {
        if (socketRef.current)
          socketRef.current.close();
      };
    });
  }, [user]);
  const login = () => {
    setMsg("Opening login window…");
    const popup = window.open(
      " http://localhost:5173/X-login?start=true",
      "twitterAuth",
      "width=600,height=700"
    );
    if (!popup)
      setMsg("Popup blocked. Please allow popups for this site.");
  };
  const logout = () => {
    if (socketRef.current)
      socketRef.current.close();
    chrome.storage.local.remove(["twitterUser", "toneReady"], () => {
      setUser(null);
      setMsg("Logged out — you can switch accounts now.");
      setStatus("");
      onLogin?.(null);
    });
  };
  reactExports.useEffect(() => {
    const onMessage = (e) => {
      if (e.data?.type === "AUTH_SUCCESS") {
        const u = e.data.user;
        chrome.storage.local.set({ twitterUser: u, toneReady: false }, () => {
          setUser(u);
          onLogin?.(u);
          setMsg(`Logged in as ${u.username}`);
          getClerkTokenFallback().then((token) => {
            const headers = { "Content-Type": "application/json" };
            if (token)
              headers.Authorization = `Bearer ${token}`;
            fetch(`${API_BASE$1}/users/register`, {
              method: "POST",
              headers,
              body: JSON.stringify({
                twitter_handle: u.username
              })
            }).catch(() => setStatus("Error registering user."));
          });
        });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onLogin]);
  const handleManualSubmit = async (e) => {
    e.preventDefault();
    if (!manualUsername.trim()) {
      setManualStatus("Please enter a valid username.");
      return;
    }
    setManualStatus("Analyzing tweets for @" + manualUsername + "…");
    const pseudoUser = { username: manualUsername.trim(), uid: null };
    chrome.storage.local.set({ twitterUser: pseudoUser, toneReady: false }, async () => {
      setUser(pseudoUser);
      onLogin?.(pseudoUser);
      getClerkTokenFallback().then((token) => {
        const headers = { "Content-Type": "application/json" };
        if (token)
          headers.Authorization = `Bearer ${token}`;
        fetch(`${API_BASE$1}/users/register`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            twitter_handle: manualUsername.trim()
          })
        }).then(() => setManualStatus("Analysis started for @" + manualUsername)).catch(() => setManualStatus("Error starting analysis. Try again."));
      });
    });
  };
  reactExports.useEffect(() => {
    if (!user)
      return;
    getClerkTokenFallback().then((token) => {
      if (!token) {
        console.warn("[Verve] No Clerk token – skipping /users/me/profile fetch");
        return;
      }
      console.log("[Verve] Fetching profile with token", token.slice(0, 16) + "…");
      fetchUserProfileWithToken(token).then((data) => {
        console.log("[Verve] /users/me/profile →", data);
        setProfile(data);
        onProfile?.(data);
        const recent = data.recent_replies || [];
        setHistory(recent);
        chrome.storage.local.set({ recentHistory: recent, lastProfile: data });
      }).catch((err) => {
        console.error("[Verve] Profile fetch error", err);
      });
    });
  }, [user, progress]);
  reactExports.useEffect(() => {
    chrome.storage.local.get("recentHistory", ({ recentHistory }) => {
      if (recentHistory?.length)
        setHistory(recentHistory);
    });
  }, []);
  history.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { my: "sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { weight: 600, size: "sm", mb: 4, children: "Recent AI Replies" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxHeight: 120, overflowY: "auto" }, children: history.slice(-5).reverse().map((h, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "xs", color: "dimmed", style: { whiteSpace: "pre-wrap" }, children: h.tweet }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "xs", children: h.reply }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { my: 4 })
    ] }, idx)) })
  ] }) : null;
  const handleFeedbackSubmit = () => {
    setFeedback("");
    onFeedbackClose();
    showNotification({ title: "Feedback sent! Thank you.", message: "", color: "green", duration: 2e3 });
  };
  reactExports.useEffect(() => {
    onHistory?.(history);
  }, [history]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { fullWidth: true, className: "verve-btn", leftIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBrandX, { size: 18 }), onClick: login, children: "Login with X" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { label: "or", my: "md", labelPosition: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleManualSubmit, style: { display: "flex", flexDirection: "column", gap: 10, marginBottom: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            className: "verve-input",
            label: "Enter X (Twitter) Username",
            placeholder: "e.g. elonmusk",
            value: manualUsername,
            onChange: (e) => setManualUsername(e.currentTarget.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "verve-btn-outline", fullWidth: true, children: "Analyze without login" }),
        manualStatus && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "xs", color: "dimmed", mt: 4, children: manualStatus })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { my: "sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { position: "apart", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "red", onClick: logout, children: "Logout" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { opened: isSettingsOpen, onClose: onSettingsClose, title: "Settings", centered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { label: "Auto-copy replies", checked: settings.autoCopy, onChange: (e) => setSettings((s) => ({ ...s, autoCopy: e.target.checked })), mb: "md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { label: "Enable notifications", checked: settings.notifications, onChange: (e) => setSettings((s) => ({ ...s, notifications: e.target.checked })), mb: "md" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { opened: isFeedbackOpen, onClose: onFeedbackClose, title: "Feedback & Support", centered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { label: "Your email", placeholder: "you@example.com", mb: "md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { label: "Message", placeholder: "How can we help?", mb: "md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { fullWidth: true, color: "blue", onClick: handleFeedbackSubmit, children: "Send" })
    ] }),
    msg && /* @__PURE__ */ jsxRuntimeExports.jsx(Notification, { color: "green", onClose: () => setMsg(""), mt: "md", children: msg })
  ] });
}

function RecentRepliesCard({ history = [] }) {
  const items = history.slice(-3).reverse();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "verve-card", radius: "md", mt: 16, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { order: 2, className: "h-title", mb: 12, children: "Recent AI Replies" }),
    items.map((h, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: idx === items.length - 1 ? 0 : 12 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 12, color: "#6B7280", whiteSpace: "pre-wrap" }, children: h.tweet }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 13, color: "#F3F4F6" }, children: h.reply }),
      idx !== items.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { my: 8 })
    ] }, idx))
  ] });
}

function SummaryCard({ profile }) {
  const { tone_summary = "", tweet_count = 0, last_scraped_at = "", handle = "" } = profile;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "verve-card", radius: "md", mt: 16, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Group, { position: "apart", mb: 8, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Title, { order: 3, className: "h-title", children: [
        "@",
        handle || "username"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { color: "violet", variant: "filled", children: [
        tweet_count,
        " Tweets Analysed"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "xs", color: "dimmed", mb: 4, children: "Profile Summary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "sm", style: { whiteSpace: "pre-wrap", lineHeight: 1.4 }, children: tone_summary || "Analysis pending…" }),
    last_scraped_at && /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { size: "xs", color: "dimmed", mt: 6, children: [
      "Last updated: ",
      new Date(last_scraped_at).toLocaleDateString()
    ] })
  ] });
}

const MAIN_SITE_URL$1 = "https://getverve.xyz" ;
function UpgradeCard() {
  const features = [
    "Unlimited personalized replies",
    "Advanced tone analysis",
    "Image context analysis",
    "Account mimicking",
    "Priority support"
  ];
  const openUpgrade = () => {
    if (chrome?.tabs)
      chrome.tabs.create({ url: `${MAIN_SITE_URL$1}/pricing` });
    else
      window.open(`${MAIN_SITE_URL$1}/pricing`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "verve-card", radius: "md", mt: 16, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { order: 2, className: "h-title", mb: 12, children: "Upgrade to Verve Pro" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(List, { spacing: "xs", size: "sm", mb: 12, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeIcon, { color: "violet", size: 18, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconCheck, { size: 14 }) }), children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(List.Item, { children: f }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { fullWidth: true, variant: "gradient", gradient: { from: "violet", to: "indigo", deg: 45 }, onClick: openUpgrade, children: "Upgrade Now" })
  ] });
}

const API_BASE = "http://localhost:8000" ;
const SITE_URL = "http://localhost:5173" ;
const MAIN_SITE_URL = "https://getverve.xyz" ;
const ORIGINS = [SITE_URL, "http://localhost:5173", "http://127.0.0.1:5173", MAIN_SITE_URL];
async function getClerkToken() {
  return new Promise((resolve) => {
    if (typeof chrome === "undefined" || !chrome.cookies) {
      resolve(null);
      return;
    }
    let found = null;
    let pending = ORIGINS.length;
    ORIGINS.forEach((origin) => {
      chrome.cookies.get({ url: origin, name: "__session" }, (c) => {
        if (c?.value && !found) {
          found = c.value;
          resolve(found);
        }
        if (--pending === 0 && !found)
          resolve(null);
      });
    });
  });
}
function App() {
  const [authChecked, setAuthChecked] = reactExports.useState(false);
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const HeaderCard = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "verve-card", radius: "md", style: { padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { order: 2, className: "h-title", style: { fontSize: 20, margin: 0 }, children: MAIN_SITE_URL.replace("https://", "") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "xs", weight: 600, style: { background: "#10B98120", color: "#10B981", padding: "2px 8px", borderRadius: 6 }, children: plan }),
      typeof remainingQuota === "number" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { color: remainingQuota > 5 ? "green" : "yellow", variant: "light", children: [
        Math.max(0, remainingQuota),
        "/15"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "xs", variant: "gradient", gradient: { from: "violet", to: "indigo", deg: 45 }, style: { animation: "pulse 2s infinite" }, onClick: () => chrome.tabs?.create({ url: `${MAIN_SITE_URL}/pricing` }), children: "Upgrade" })
    ] })
  ] });
  const [loggedInUser, setLoggedInUser] = reactExports.useState(null);
  const [recentHistory, setRecentHistory] = reactExports.useState([]);
  const [profileInfo, setProfileInfo] = reactExports.useState(null);
  const [remainingQuota, setRemainingQuota] = reactExports.useState(void 0);
  const [plan, setPlan] = reactExports.useState("FREE");
  reactExports.useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = `@keyframes pulse {0%{box-shadow:0 0 0 0 rgba(167,139,250,.7);}70%{box-shadow:0 0 0 6px rgba(167,139,250,0);}100%{box-shadow:0 0 0 0 rgba(167,139,250,0);}}`;
    document.head.appendChild(styleEl);
    (async () => {
      const token = await getClerkToken();
      console.log("[Verve][App] getClerkToken →", token ? token.slice(0, 16) + "…" : "null");
      if (token) {
        try {
          const res = await fetch(`${API_BASE}/users/me`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log("[Verve][App] /users/me status", res.status);
          if (res.ok) {
            const data = await res.json();
            setPlan(data.plan || "FREE");
            setIsAuthenticated(true);
            if (chrome?.storage?.local)
              chrome.storage.local.set({ clerkToken: token });
          } else {
            if (chrome?.storage?.local)
              chrome.storage.local.remove("clerkToken");
          }
        } catch (e) {
          console.error("[Verve][App] auth check error", e);
        }
      }
      setAuthChecked(true);
    })();
  }, []);
  reactExports.useEffect(() => {
    console.log("[Verve][App] State", { authChecked, isAuthenticated, loggedInUser, remainingQuota, plan });
  }, [authChecked, isAuthenticated, loggedInUser, remainingQuota, plan]);
  reactExports.useEffect(() => {
    if (!isAuthenticated || !loggedInUser)
      return;
    (async () => {
      const token = await getClerkToken();
      if (!token) {
        console.warn("[Verve][App] Cannot fetch profile – no Clerk token");
        return;
      }
      console.log("[Verve][App] Fetching profile via /users/me/profile");
      try {
        const res = await fetch(`${API_BASE}/users/me/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) {
          console.warn("[Verve][App] /users/me/profile failed", res.status);
          return;
        }
        const data = await res.json();
        console.log("[Verve][App] Profile →", data);
        setProfileInfo(data);
        const recent = data.recent_replies || [];
        setRecentHistory(recent);
        if (typeof data.remaining_quota === "number") {
          setRemainingQuota(data.remaining_quota);
          chrome.storage?.local.set({ quotaRemaining: data.remaining_quota });
        }
        chrome.storage?.local.set({ lastProfile: data, recentHistory: recent });
      } catch (e) {
        console.error("[Verve][App] profile fetch error", e);
      }
    })();
  }, [isAuthenticated, loggedInUser]);
  reactExports.useEffect(() => {
    function syncFromStorage() {
      chrome.storage?.local.get(["recentHistory", "lastProfile", "quotaRemaining"], ({ recentHistory: recentHistory2, lastProfile, quotaRemaining }) => {
        if (recentHistory2)
          setRecentHistory(recentHistory2);
        if (lastProfile)
          setProfileInfo(lastProfile);
        if (typeof quotaRemaining === "number")
          setRemainingQuota(quotaRemaining);
      });
    }
    syncFromStorage();
    const listener = (changes, area) => {
      if (area !== "local")
        return;
      if (changes.recentHistory)
        setRecentHistory(changes.recentHistory.newValue || []);
      if (changes.lastProfile)
        setProfileInfo(changes.lastProfile.newValue || null);
      if (changes.quotaRemaining)
        setRemainingQuota(changes.quotaRemaining.newValue);
    };
    chrome.storage?.onChanged.addListener(listener);
    return () => chrome.storage?.onChanged.removeListener(listener);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { width: 320 }, className: "stack-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderCard, {}),
    !authChecked && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "verve-card", radius: "md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "Loading…" }) }),
    authChecked && (!isAuthenticated || !loggedInUser) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "verve-card", radius: "md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { order: 2, className: "h-title", mb: 12, children: "Connect Your Account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "sm", color: "#E0E0FF", mb: 12, children: "Instantly craft premium, context-aware replies with AI." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TwitterLogin, { onLogin: setLoggedInUser, onHistory: setRecentHistory, onProfile: setProfileInfo })
    ] }),
    loggedInUser && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      plan === "FREE" && remainingQuota <= 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(UpgradeCard, {}),
      profileInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { profile: profileInfo }),
      recentHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(RecentRepliesCard, { history: recentHistory }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { fullWidth: true, color: "red", variant: "outline", mt: 16, onClick: () => {
        chrome.storage?.local.remove(["twitterUser", "toneReady"], () => {
          setLoggedInUser(null);
          setRecentHistory([]);
          setProfileInfo(null);
        });
      }, children: "Logout" })
    ] })
  ] });
}

const theme = '';

function PopupMain() {
  const colorScheme = "dark";
  reactExports.useLayoutEffect(() => {
    const resize = () => {
      const h = Math.min(document.body.scrollHeight, 600);
      const w = 360;
      if (typeof chrome !== "undefined" && chrome?.windows) {
        window.resizeTo(w, h);
      }
    };
    resize();
    const obs = new MutationObserver(resize);
    obs.observe(document.body, { childList: true, subtree: true, attributes: true });
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    MantineProvider,
    {
      withGlobalStyles: true,
      withNormalizeCSS: true,
      theme: {
        colorScheme,
        primaryColor: "violet",
        defaultRadius: "md",
        fontFamily: "Inter, sans-serif",
        headings: {
          fontWeight: 700,
          fontFamily: "Playfair Display, serif",
          sizes: { h2: { fontSize: 24 } }
        },
        components: {
          Card: {
            styles: (theme) => ({
              root: {
                border: "none",
                boxShadow: theme.colorScheme === "dark" ? "0 0 0 1px rgba(255,255,255,0.1)" : "0 4px 20px rgba(0,0,0,0.06)"
              }
            })
          },
          Button: {
            defaultProps: {
              radius: "md",
              size: "md"
            },
            styles: {
              root: {
                fontWeight: 600
              }
            }
          },
          TextInput: {
            defaultProps: {
              radius: "md"
            }
          }
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "var(--navy-bg)", padding: 16 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
    }
  );
}
const container = document.getElementById("root");
const root = client.createRoot(container);
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PopupMain, {}) })
);
//# sourceMappingURL=popup.js.map
