(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Yf={exports:{}},Lo={};var zg;function dS(){if(zg)return Lo;zg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var Bg;function pS(){return Bg||(Bg=1,Yf.exports=dS()),Yf.exports}var Qe=pS(),Zf={exports:{}},tt={};var Ig;function mS(){if(Ig)return tt;Ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function M(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,x={};function v(T,z,ee){this.props=T,this.context=z,this.refs=x,this.updater=ee||R}v.prototype.isReactComponent={},v.prototype.setState=function(T,z){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,z,"setState")},v.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function U(){}U.prototype=v.prototype;function C(T,z,ee){this.props=T,this.context=z,this.refs=x,this.updater=ee||R}var N=C.prototype=new U;N.constructor=C,b(N,v.prototype),N.isPureReactComponent=!0;var B=Array.isArray;function V(){}var D={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function w(T,z,ee){var ue=ee.ref;return{$$typeof:o,type:T,key:z,ref:ue!==void 0?ue:null,props:ee}}function P(T,z){return w(T.type,z,T.props)}function ve(T){return typeof T=="object"&&T!==null&&T.$$typeof===o}function ye(T){var z={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ee){return z[ee]})}var te=/\/+/g;function le(T,z){return typeof T=="object"&&T!==null&&T.key!=null?ye(""+T.key):z.toString(36)}function re(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(V,V):(T.status="pending",T.then(function(z){T.status==="pending"&&(T.status="fulfilled",T.value=z)},function(z){T.status==="pending"&&(T.status="rejected",T.reason=z)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function H(T,z,ee,ue,Se){var we=typeof T;(we==="undefined"||we==="boolean")&&(T=null);var Oe=!1;if(T===null)Oe=!0;else switch(we){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch(T.$$typeof){case o:case e:Oe=!0;break;case g:return Oe=T._init,H(Oe(T._payload),z,ee,ue,Se)}}if(Oe)return Se=Se(T),Oe=ue===""?"."+le(T,0):ue,B(Se)?(ee="",Oe!=null&&(ee=Oe.replace(te,"$&/")+"/"),H(Se,z,ee,"",function(Ht){return Ht})):Se!=null&&(ve(Se)&&(Se=P(Se,ee+(Se.key==null||T&&T.key===Se.key?"":(""+Se.key).replace(te,"$&/")+"/")+Oe)),z.push(Se)),1;Oe=0;var Pe=ue===""?".":ue+":";if(B(T))for(var Ve=0;Ve<T.length;Ve++)ue=T[Ve],we=Pe+le(ue,Ve),Oe+=H(ue,z,ee,we,Se);else if(Ve=M(T),typeof Ve=="function")for(T=Ve.call(T),Ve=0;!(ue=T.next()).done;)ue=ue.value,we=Pe+le(ue,Ve++),Oe+=H(ue,z,ee,we,Se);else if(we==="object"){if(typeof T.then=="function")return H(re(T),z,ee,ue,Se);throw z=String(T),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function X(T,z,ee){if(T==null)return T;var ue=[],Se=0;return H(T,ue,"","",function(we){return z.call(ee,we,Se++)}),ue}function q(T){if(T._status===-1){var z=T._result;z=z(),z.then(function(ee){(T._status===0||T._status===-1)&&(T._status=1,T._result=ee)},function(ee){(T._status===0||T._status===-1)&&(T._status=2,T._result=ee)}),T._status===-1&&(T._status=0,T._result=z)}if(T._status===1)return T._result.default;throw T._result}var me=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},ce={map:X,forEach:function(T,z,ee){X(T,function(){z.apply(this,arguments)},ee)},count:function(T){var z=0;return X(T,function(){z++}),z},toArray:function(T){return X(T,function(z){return z})||[]},only:function(T){if(!ve(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return tt.Activity=y,tt.Children=ce,tt.Component=v,tt.Fragment=i,tt.Profiler=l,tt.PureComponent=C,tt.StrictMode=r,tt.Suspense=p,tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,tt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return D.H.useMemoCache(T)}},tt.cache=function(T){return function(){return T.apply(null,arguments)}},tt.cacheSignal=function(){return null},tt.cloneElement=function(T,z,ee){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ue=b({},T.props),Se=T.key;if(z!=null)for(we in z.key!==void 0&&(Se=""+z.key),z)!oe.call(z,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&z.ref===void 0||(ue[we]=z[we]);var we=arguments.length-2;if(we===1)ue.children=ee;else if(1<we){for(var Oe=Array(we),Pe=0;Pe<we;Pe++)Oe[Pe]=arguments[Pe+2];ue.children=Oe}return w(T.type,Se,ue)},tt.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:u,_context:T},T},tt.createElement=function(T,z,ee){var ue,Se={},we=null;if(z!=null)for(ue in z.key!==void 0&&(we=""+z.key),z)oe.call(z,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(Se[ue]=z[ue]);var Oe=arguments.length-2;if(Oe===1)Se.children=ee;else if(1<Oe){for(var Pe=Array(Oe),Ve=0;Ve<Oe;Ve++)Pe[Ve]=arguments[Ve+2];Se.children=Pe}if(T&&T.defaultProps)for(ue in Oe=T.defaultProps,Oe)Se[ue]===void 0&&(Se[ue]=Oe[ue]);return w(T,we,Se)},tt.createRef=function(){return{current:null}},tt.forwardRef=function(T){return{$$typeof:h,render:T}},tt.isValidElement=ve,tt.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:q}},tt.memo=function(T,z){return{$$typeof:m,type:T,compare:z===void 0?null:z}},tt.startTransition=function(T){var z=D.T,ee={};D.T=ee;try{var ue=T(),Se=D.S;Se!==null&&Se(ee,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(V,me)}catch(we){me(we)}finally{z!==null&&ee.types!==null&&(z.types=ee.types),D.T=z}},tt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},tt.use=function(T){return D.H.use(T)},tt.useActionState=function(T,z,ee){return D.H.useActionState(T,z,ee)},tt.useCallback=function(T,z){return D.H.useCallback(T,z)},tt.useContext=function(T){return D.H.useContext(T)},tt.useDebugValue=function(){},tt.useDeferredValue=function(T,z){return D.H.useDeferredValue(T,z)},tt.useEffect=function(T,z){return D.H.useEffect(T,z)},tt.useEffectEvent=function(T){return D.H.useEffectEvent(T)},tt.useId=function(){return D.H.useId()},tt.useImperativeHandle=function(T,z,ee){return D.H.useImperativeHandle(T,z,ee)},tt.useInsertionEffect=function(T,z){return D.H.useInsertionEffect(T,z)},tt.useLayoutEffect=function(T,z){return D.H.useLayoutEffect(T,z)},tt.useMemo=function(T,z){return D.H.useMemo(T,z)},tt.useOptimistic=function(T,z){return D.H.useOptimistic(T,z)},tt.useReducer=function(T,z,ee){return D.H.useReducer(T,z,ee)},tt.useRef=function(T){return D.H.useRef(T)},tt.useState=function(T){return D.H.useState(T)},tt.useSyncExternalStore=function(T,z,ee){return D.H.useSyncExternalStore(T,z,ee)},tt.useTransition=function(){return D.H.useTransition()},tt.version="19.2.3",tt}var Fg;function Xh(){return Fg||(Fg=1,Zf.exports=mS()),Zf.exports}var un=Xh(),Qf={exports:{}},Do={},Kf={exports:{}},Jf={};var Hg;function gS(){return Hg||(Hg=1,(function(o){function e(H,X){var q=H.length;H.push(X);e:for(;0<q;){var me=q-1>>>1,ce=H[me];if(0<l(ce,X))H[me]=X,H[q]=ce,q=me;else break e}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var X=H[0],q=H.pop();if(q!==X){H[0]=q;e:for(var me=0,ce=H.length,T=ce>>>1;me<T;){var z=2*(me+1)-1,ee=H[z],ue=z+1,Se=H[ue];if(0>l(ee,q))ue<ce&&0>l(Se,ee)?(H[me]=Se,H[ue]=q,me=ue):(H[me]=ee,H[z]=q,me=z);else if(ue<ce&&0>l(Se,q))H[me]=Se,H[ue]=q,me=ue;else break e}}return X}function l(H,X){var q=H.sortIndex-X.sortIndex;return q!==0?q:H.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,y=null,S=3,M=!1,R=!1,b=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function N(H){for(var X=i(m);X!==null;){if(X.callback===null)r(m);else if(X.startTime<=H)r(m),X.sortIndex=X.expirationTime,e(p,X);else break;X=i(m)}}function B(H){if(b=!1,N(H),!R)if(i(p)!==null)R=!0,V||(V=!0,ye());else{var X=i(m);X!==null&&re(B,X.startTime-H)}}var V=!1,D=-1,oe=5,w=-1;function P(){return x?!0:!(o.unstable_now()-w<oe)}function ve(){if(x=!1,V){var H=o.unstable_now();w=H;var X=!0;try{e:{R=!1,b&&(b=!1,U(D),D=-1),M=!0;var q=S;try{t:{for(N(H),y=i(p);y!==null&&!(y.expirationTime>H&&P());){var me=y.callback;if(typeof me=="function"){y.callback=null,S=y.priorityLevel;var ce=me(y.expirationTime<=H);if(H=o.unstable_now(),typeof ce=="function"){y.callback=ce,N(H),X=!0;break t}y===i(p)&&r(p),N(H)}else r(p);y=i(p)}if(y!==null)X=!0;else{var T=i(m);T!==null&&re(B,T.startTime-H),X=!1}}break e}finally{y=null,S=q,M=!1}X=void 0}}finally{X?ye():V=!1}}}var ye;if(typeof C=="function")ye=function(){C(ve)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,le=te.port2;te.port1.onmessage=ve,ye=function(){le.postMessage(null)}}else ye=function(){v(ve,0)};function re(H,X){D=v(function(){H(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(H){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var q=S;S=X;try{return H()}finally{S=q}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var q=S;S=H;try{return X()}finally{S=q}},o.unstable_scheduleCallback=function(H,X,q){var me=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?me+q:me):q=me,H){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=q+ce,H={id:g++,callback:X,priorityLevel:H,startTime:q,expirationTime:ce,sortIndex:-1},q>me?(H.sortIndex=q,e(m,H),i(p)===null&&H===i(m)&&(b?(U(D),D=-1):b=!0,re(B,q-me))):(H.sortIndex=ce,e(p,H),R||M||(R=!0,V||(V=!0,ye()))),H},o.unstable_shouldYield=P,o.unstable_wrapCallback=function(H){var X=S;return function(){var q=S;S=X;try{return H.apply(this,arguments)}finally{S=q}}}})(Jf)),Jf}var Gg;function _S(){return Gg||(Gg=1,Kf.exports=gS()),Kf.exports}var $f={exports:{}},Rn={};var Vg;function vS(){if(Vg)return Rn;Vg=1;var o=Xh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Rn.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:y,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Rn.requestFormReset=function(p){r.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.2.3",Rn}var kg;function yS(){if(kg)return $f.exports;kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=vS(),$f.exports}var Xg;function SS(){if(Xg)return Do;Xg=1;var o=_S(),e=Xh(),i=yS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,s=f;break}if(E===s){_=!0,s=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,s=c;break}if(E===s){_=!0,s=f,a=c;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),C=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ye(t){return t===null||typeof t!="object"?null:(t=ve&&t[ve]||t["@@iterator"],typeof t=="function"?t:null)}var te=Symbol.for("react.client.reference");function le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===te?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case B:return"Suspense";case V:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case C:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return n=t.displayName||null,n!==null?n:le(t.type)||"Memo";case oe:n=t._payload,t=t._init;try{return le(t(n))}catch{}}return null}var re=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},me=[],ce=-1;function T(t){return{current:t}}function z(t){0>ce||(t.current=me[ce],me[ce]=null,ce--)}function ee(t,n){ce++,me[ce]=t.current,t.current=n}var ue=T(null),Se=T(null),we=T(null),Oe=T(null);function Pe(t,n){switch(ee(we,n),ee(Se,t),ee(ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?rg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=rg(n),t=sg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}z(ue),ee(ue,t)}function Ve(){z(ue),z(Se),z(we)}function Ht(t){t.memoizedState!==null&&ee(Oe,t);var n=ue.current,a=sg(n,t.type);n!==a&&(ee(Se,t),ee(ue,a))}function et(t){Se.current===t&&(z(ue),z(Se)),Oe.current===t&&(z(Oe),Ao._currentValue=q)}var K,kt;function Fe(t){if(K===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);K=n&&n[1]||"",kt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+K+t+kt}var Ke=!1;function Ze(t,n){if(!t||Ke)return"";Ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(ae){var J=ae}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(ae){J=ae}t.call(ge.prototype)}}else{try{throw Error()}catch(ae){J=ae}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(ae){if(ae&&J&&typeof ae.stack=="string")return[ae.stack,J.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var I=_.split(`
`),Z=E.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===Z.length)for(s=I.length-1,c=Z.length-1;1<=s&&0<=c&&I[s]!==Z[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==Z[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==Z[c]){var de=`
`+I[s].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=s&&0<=c);break}}}finally{Ke=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Fe(a):""}function Ct(t,n){switch(t.tag){case 26:case 27:case 5:return Fe(t.type);case 16:return Fe("Lazy");case 13:return t.child!==n&&n!==null?Fe("Suspense Fallback"):Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 15:return Ze(t.type,!1);case 11:return Ze(t.type.render,!1);case 1:return Ze(t.type,!0);case 31:return Fe("Activity");default:return""}}function rt(t){try{var n="",a=null;do n+=Ct(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Je=Object.prototype.hasOwnProperty,ct=o.unstable_scheduleCallback,Gt=o.unstable_cancelCallback,Jt=o.unstable_shouldYield,O=o.unstable_requestPaint,A=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,be=o.unstable_ImmediatePriority,xe=o.unstable_UserBlockingPriority,Ee=o.unstable_NormalPriority,He=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,se=o.log,F=o.unstable_setDisableYieldValue,_e=null,Le=null;function Te(t){if(typeof se=="function"&&F(t),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(_e,t)}catch{}}var Re=Math.clz32?Math.clz32:k,$e=Math.log,ft=Math.LN2;function k(t){return t>>>=0,t===0?32:31-($e(t)/ft|0)|0}var De=256,ie=262144,Me=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function it(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Ae(s):(_&=E,_!==0?c=Ae(_):a||(a=E&~t,a!==0&&(c=Ae(a))))):(E=s&~f,E!==0?c=Ae(E):_!==0?c=Ae(_):a||(a=s&~t,a!==0&&(c=Ae(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function gt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Tt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xn(){var t=Me;return Me<<=1,(Me&62914560)===0&&(Me=4194304),t}function Mt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Mn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function mn(t,n,a,s,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,I=t.expirationTimes,Z=t.hiddenUpdates;for(a=_&~a;0<a;){var de=31-Re(a),ge=1<<de;E[de]=0,I[de]=-1;var J=Z[de];if(J!==null)for(Z[de]=null,de=0;de<J.length;de++){var ae=J[de];ae!==null&&(ae.lane&=-536870913)}a&=~ge}s!==0&&Fs(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Fs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Re(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Hs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Re(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Wo(t,n){var a=n&-n;return a=(a&42)!==0?1:ha(a),(a&(t.suspendedLanes|n))!==0?0:a}function ha(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Tr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ja(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Cg(t.type))}function Gs(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var Ti=Math.random().toString(36).slice(2),sn="__reactFiber$"+Ti,En="__reactProps$"+Ti,L="__reactContainer$"+Ti,Q="__reactEvents$"+Ti,he="__reactListeners$"+Ti,$="__reactHandles$"+Ti,fe="__reactResources$"+Ti,Ne="__reactMarker$"+Ti;function Xe(t){delete t[sn],delete t[En],delete t[Q],delete t[he],delete t[$]}function je(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[L]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=dg(t);t!==null;){if(a=t[sn])return a;t=dg(t)}return n}t=a,a=t.parentNode}return null}function qe(t){if(t=t[sn]||t[L]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function nt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function We(t){var n=t[fe];return n||(n=t[fe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ie(t){t[Ne]=!0}var Ot=new Set,zt={};function $t(t,n){bn(t,n),bn(t+"Capture",n)}function bn(t,n){for(zt[t]=n,t=0;t<n.length;t++)Ot.add(n[t])}var Xt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Ar={};function Wt(t){return Je.call(Ar,t)?!0:Je.call(lt,t)?!1:Xt.test(t)?Ar[t]=!0:(lt[t]=!0,!1)}function ti(t,n,a){if(Wt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qa(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Un(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Tn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Oi(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ya(t){if(!t._valueTracker){var n=hn(t)?"checked":"value";t._valueTracker=Oi(t,n,""+t[n])}}function An(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=hn(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function da(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Hu=/[\n"\\]/g;function On(t){return t.replace(Hu,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gu(t,n,a,s,c,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Tn(n)):t.value!==""+Tn(n)&&(t.value=""+Tn(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Vu(t,_,Tn(n)):a!=null?Vu(t,_,Tn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Tn(E):t.removeAttribute("name")}function $h(t,n,a,s,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ya(t);return}a=a!=null?""+Tn(a):"",n=n!=null?""+Tn(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ya(t)}function Vu(t,n,a){n==="number"&&da(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Rr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Tn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function ed(t,n,a){if(n!=null&&(n=""+Tn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Tn(a):""}function td(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(re(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Tn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ya(t)}function wr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var l0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||l0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function id(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&nd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&nd(t,f,n[f])}function ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(t){return c0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ni(){}var Xu=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,Lr=null;function ad(t){var n=qe(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Gu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+On(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[En]||null;if(!c)throw Error(r(90));Gu(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&An(s)}break e;case"textarea":ed(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Rr(t,!!a.multiple,n,!1)}}}var ju=!1;function rd(t,n,a){if(ju)return t(n,a);ju=!0;try{var s=t(n);return s}finally{if(ju=!1,(Cr!==null||Lr!==null)&&(Ol(),Cr&&(n=Cr,t=Lr,Lr=Cr=null,ad(n),t)))for(n=0;n<t.length;n++)ad(t[n])}}function Vs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[En]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(Pi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){qu=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{qu=!1}var pa=null,Yu=null,qo=null;function sd(){if(qo)return qo;var t,n=Yu,a=n.length,s,c="value"in pa?pa.value:pa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return qo=c.slice(t,1<s?1-s:void 0)}function Yo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function od(){return!1}function In(t){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zo:od,this.isPropagationStopped=od,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=In(Za),Xs=y({},Za,{view:0,detail:0}),f0=In(Xs),Zu,Qu,Ws,Ko=y({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Zu=t.screenX-Ws.screenX,Qu=t.screenY-Ws.screenY):Qu=Zu=0,Ws=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),ld=In(Ko),h0=y({},Ko,{dataTransfer:0}),d0=In(h0),p0=y({},Xs,{relatedTarget:0}),Ku=In(p0),m0=y({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=In(m0),_0=y({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v0=In(_0),y0=y({},Za,{data:0}),ud=In(y0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=M0[t])?!!n[t]:!1}function Ju(){return E0}var b0=y({},Xs,{key:function(t){if(t.key){var n=S0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T0=In(b0),A0=y({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cd=In(A0),R0=y({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),w0=In(R0),C0=y({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=In(C0),D0=y({},Ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=In(D0),O0=y({},Za,{newState:0,oldState:0}),N0=In(O0),P0=[9,13,27,32],$u=Pi&&"CompositionEvent"in window,js=null;Pi&&"documentMode"in document&&(js=document.documentMode);var z0=Pi&&"TextEvent"in window&&!js,fd=Pi&&(!$u||js&&8<js&&11>=js),hd=" ",dd=!1;function pd(t,n){switch(t){case"keyup":return P0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function B0(t,n){switch(t){case"compositionend":return md(n);case"keypress":return n.which!==32?null:(dd=!0,hd);case"textInput":return t=n.data,t===hd&&dd?null:t;default:return null}}function I0(t,n){if(Dr)return t==="compositionend"||!$u&&pd(t,n)?(t=sd(),qo=Yu=pa=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fd&&n.locale!=="ko"?null:n.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!F0[t.type]:n==="textarea"}function _d(t,n,a,s){Cr?Lr?Lr.push(s):Lr=[s]:Cr=s,n=Hl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var qs=null,Ys=null;function H0(t){$m(t,0)}function Jo(t){var n=nt(t);if(An(n))return t}function vd(t,n){if(t==="change")return n}var yd=!1;if(Pi){var ec;if(Pi){var tc="oninput"in document;if(!tc){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),tc=typeof Sd.oninput=="function"}ec=tc}else ec=!1;yd=ec&&(!document.documentMode||9<document.documentMode)}function xd(){qs&&(qs.detachEvent("onpropertychange",Md),Ys=qs=null)}function Md(t){if(t.propertyName==="value"&&Jo(Ys)){var n=[];_d(n,Ys,t,Wu(t)),rd(H0,n)}}function G0(t,n,a){t==="focusin"?(xd(),qs=n,Ys=a,qs.attachEvent("onpropertychange",Md)):t==="focusout"&&xd()}function V0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(Ys)}function k0(t,n){if(t==="click")return Jo(n)}function X0(t,n){if(t==="input"||t==="change")return Jo(n)}function W0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:W0;function Zs(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Je.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bd(t,n){var a=Ed(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ed(a)}}function Td(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Td(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ad(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=da(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=da(t.document)}return n}function nc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var j0=Pi&&"documentMode"in document&&11>=document.documentMode,Ur=null,ic=null,Qs=null,ac=!1;function Rd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||Ur==null||Ur!==da(s)||(s=Ur,"selectionStart"in s&&nc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qs&&Zs(Qs,s)||(Qs=s,s=Hl(ic,"onSelect"),0<s.length&&(n=new Qo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ur)))}function Qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Or={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},rc={},wd={};Pi&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Ka(t){if(rc[t])return rc[t];if(!Or[t])return t;var n=Or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wd)return rc[t]=n[a];return t}var Cd=Ka("animationend"),Ld=Ka("animationiteration"),Dd=Ka("animationstart"),q0=Ka("transitionrun"),Y0=Ka("transitionstart"),Z0=Ka("transitioncancel"),Ud=Ka("transitionend"),Od=new Map,sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sc.push("scrollEnd");function gi(t,n){Od.set(t,n),$t(n,[t])}var $o=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Nr=0,oc=0;function el(){for(var t=Nr,n=oc=Nr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&Nd(a,c,f)}}function tl(t,n,a,s){ni[Nr++]=t,ni[Nr++]=n,ni[Nr++]=a,ni[Nr++]=s,oc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function lc(t,n,a,s){return tl(t,n,a,s),nl(t)}function Ja(t,n){return tl(t,null,null,n),nl(t)}function Nd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Re(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function nl(t){if(50<yo)throw yo=0,vf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Pr={};function Q0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new Q0(t,n,a,s)}function uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Pd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function il(t,n,a,s,c,f){var _=0;if(s=t,typeof t=="function")uc(t)&&(_=1);else if(typeof t=="string")_=tS(t,a,ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=jn(31,a,n,c),t.elementType=w,t.lanes=f,t;case b:return $a(a.children,c,f,n);case x:_=8,c|=24;break;case v:return t=jn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case B:return t=jn(13,a,n,c),t.elementType=B,t.lanes=f,t;case V:return t=jn(19,a,n,c),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:_=10;break e;case U:_=9;break e;case N:_=11;break e;case D:_=14;break e;case oe:_=16,s=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(_,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function $a(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function cc(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function zd(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function fc(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bd=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=Bd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:rt(n)},Bd.set(t,n),n)}return{value:t,source:n,stack:rt(n)}}var zr=[],Br=0,al=null,Ks=0,ai=[],ri=0,ma=null,Ai=1,Ri="";function Bi(t,n){zr[Br++]=Ks,zr[Br++]=al,al=t,Ks=n}function Id(t,n,a){ai[ri++]=Ai,ai[ri++]=Ri,ai[ri++]=ma,ma=t;var s=Ai;t=Ri;var c=32-Re(s)-1;s&=~(1<<c),a+=1;var f=32-Re(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Ai=1<<32-Re(n)+c|a<<c|s,Ri=f+t}else Ai=1<<f|a<<c|s,Ri=t}function hc(t){t.return!==null&&(Bi(t,1),Id(t,1,0))}function dc(t){for(;t===al;)al=zr[--Br],zr[Br]=null,Ks=zr[--Br],zr[Br]=null;for(;t===ma;)ma=ai[--ri],ai[ri]=null,Ri=ai[--ri],ai[ri]=null,Ai=ai[--ri],ai[ri]=null}function Fd(t,n){ai[ri++]=Ai,ai[ri++]=Ri,ai[ri++]=ma,Ai=n.id,Ri=n.overflow,ma=t}var gn=null,Nt=null,_t=!1,ga=null,si=!1,pc=Error(r(519));function _a(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Js(ii(n,t)),pc}function Hd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[En]=s,a){case"dialog":dt("cancel",n),dt("close",n);break;case"iframe":case"object":case"embed":dt("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)dt(xo[a],n);break;case"source":dt("error",n);break;case"img":case"image":case"link":dt("error",n),dt("load",n);break;case"details":dt("toggle",n);break;case"input":dt("invalid",n),$h(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":dt("invalid",n);break;case"textarea":dt("invalid",n),td(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||ig(n.textContent,a)?(s.popover!=null&&(dt("beforetoggle",n),dt("toggle",n)),s.onScroll!=null&&dt("scroll",n),s.onScrollEnd!=null&&dt("scrollend",n),s.onClick!=null&&(n.onclick=Ni),n=!0):n=!1,n||_a(t,!0)}function Gd(t){for(gn=t.return;gn;)switch(gn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:gn=gn.return}}function Ir(t){if(t!==gn)return!1;if(!_t)return Gd(t),_t=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Of(t.type,t.memoizedProps)),a=!a),a&&Nt&&_a(t),Gd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Nt=hg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Nt=hg(t)}else n===27?(n=Nt,Da(t.type)?(t=If,If=null,Nt=t):Nt=n):Nt=gn?li(t.stateNode.nextSibling):null;return!0}function er(){Nt=gn=null,_t=!1}function mc(){var t=ga;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),ga=null),t}function Js(t){ga===null?ga=[t]:ga.push(t)}var gc=T(null),tr=null,Ii=null;function va(t,n,a){ee(gc,n._currentValue),n._currentValue=a}function Fi(t){t._currentValue=gc.current,z(gc)}function _c(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function vc(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var I=0;I<n.length;I++)if(E.context===n[I]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),_c(f.return,a,t),s||(_=null);break e}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),_c(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Fr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=c.type;Wn(c.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(c===Oe.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ao):t=[Ao])}c=c.return}t!==null&&vc(n,t,a,s),n.flags|=262144}function rl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function nr(t){tr=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _n(t){return Vd(tr,t)}function sl(t,n){return tr===null&&nr(t),Vd(t,n)}function Vd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(r(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var K0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},J0=o.unstable_scheduleCallback,$0=o.unstable_NormalPriority,en={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yc(){return{controller:new K0,data:new Map,refCount:0}}function $s(t){t.refCount--,t.refCount===0&&J0($0,function(){t.controller.abort()})}var eo=null,Sc=0,Hr=0,Gr=null;function ey(t,n){if(eo===null){var a=eo=[];Sc=0,Hr=bf(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Sc++,n.then(kd,kd),n}function kd(){if(--Sc===0&&eo!==null){Gr!==null&&(Gr.status="fulfilled");var t=eo;eo=null,Hr=0,Gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ty(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Xd=H.S;H.S=function(t,n){Rm=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ey(t,n),Xd!==null&&Xd(t,n)};var ir=T(null);function xc(){var t=ir.current;return t!==null?t:Lt.pooledCache}function ol(t,n){n===null?ee(ir,ir.current):ee(ir,n.pool)}function Wd(){var t=xc();return t===null?null:{parent:en._currentValue,pool:t}}var Vr=Error(r(460)),Mc=Error(r(474)),ll=Error(r(542)),ul={then:function(){}};function jd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ni,Ni),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zd(t),t;default:if(typeof n.status=="string")n.then(Ni,Ni);else{if(t=Lt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zd(t),t}throw rr=n,Vr}}function ar(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rr=a,Vr):a}}var rr=null;function Yd(){if(rr===null)throw Error(r(459));var t=rr;return rr=null,t}function Zd(t){if(t===Vr||t===ll)throw Error(r(483))}var kr=null,to=0;function cl(t){var n=to;return to+=1,kr===null&&(kr=[]),qd(kr,t,n)}function no(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function fl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qd(t){function n(W,G){if(t){var Y=W.deletions;Y===null?(W.deletions=[G],W.flags|=16):Y.push(G)}}function a(W,G){if(!t)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function s(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=zi(W,G),W.index=0,W.sibling=null,W}function f(W,G,Y){return W.index=Y,t?(Y=W.alternate,Y!==null?(Y=Y.index,Y<G?(W.flags|=67108866,G):Y):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function _(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,G,Y,pe){return G===null||G.tag!==6?(G=cc(Y,W.mode,pe),G.return=W,G):(G=c(G,Y),G.return=W,G)}function I(W,G,Y,pe){var ke=Y.type;return ke===b?de(W,G,Y.props.children,pe,Y.key):G!==null&&(G.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===oe&&ar(ke)===G.type)?(G=c(G,Y.props),no(G,Y),G.return=W,G):(G=il(Y.type,Y.key,Y.props,null,W.mode,pe),no(G,Y),G.return=W,G)}function Z(W,G,Y,pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==Y.containerInfo||G.stateNode.implementation!==Y.implementation?(G=fc(Y,W.mode,pe),G.return=W,G):(G=c(G,Y.children||[]),G.return=W,G)}function de(W,G,Y,pe,ke){return G===null||G.tag!==7?(G=$a(Y,W.mode,pe,ke),G.return=W,G):(G=c(G,Y),G.return=W,G)}function ge(W,G,Y){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=cc(""+G,W.mode,Y),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return Y=il(G.type,G.key,G.props,null,W.mode,Y),no(Y,G),Y.return=W,Y;case R:return G=fc(G,W.mode,Y),G.return=W,G;case oe:return G=ar(G),ge(W,G,Y)}if(re(G)||ye(G))return G=$a(G,W.mode,Y,null),G.return=W,G;if(typeof G.then=="function")return ge(W,cl(G),Y);if(G.$$typeof===C)return ge(W,sl(W,G),Y);fl(W,G)}return null}function J(W,G,Y,pe){var ke=G!==null?G.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return ke!==null?null:E(W,G,""+Y,pe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return Y.key===ke?I(W,G,Y,pe):null;case R:return Y.key===ke?Z(W,G,Y,pe):null;case oe:return Y=ar(Y),J(W,G,Y,pe)}if(re(Y)||ye(Y))return ke!==null?null:de(W,G,Y,pe,null);if(typeof Y.then=="function")return J(W,G,cl(Y),pe);if(Y.$$typeof===C)return J(W,G,sl(W,Y),pe);fl(W,Y)}return null}function ae(W,G,Y,pe,ke){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return W=W.get(Y)||null,E(G,W,""+pe,ke);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case M:return W=W.get(pe.key===null?Y:pe.key)||null,I(G,W,pe,ke);case R:return W=W.get(pe.key===null?Y:pe.key)||null,Z(G,W,pe,ke);case oe:return pe=ar(pe),ae(W,G,Y,pe,ke)}if(re(pe)||ye(pe))return W=W.get(Y)||null,de(G,W,pe,ke,null);if(typeof pe.then=="function")return ae(W,G,Y,cl(pe),ke);if(pe.$$typeof===C)return ae(W,G,Y,sl(G,pe),ke);fl(G,pe)}return null}function ze(W,G,Y,pe){for(var ke=null,vt=null,Be=G,st=G=0,mt=null;Be!==null&&st<Y.length;st++){Be.index>st?(mt=Be,Be=null):mt=Be.sibling;var yt=J(W,Be,Y[st],pe);if(yt===null){Be===null&&(Be=mt);break}t&&Be&&yt.alternate===null&&n(W,Be),G=f(yt,G,st),vt===null?ke=yt:vt.sibling=yt,vt=yt,Be=mt}if(st===Y.length)return a(W,Be),_t&&Bi(W,st),ke;if(Be===null){for(;st<Y.length;st++)Be=ge(W,Y[st],pe),Be!==null&&(G=f(Be,G,st),vt===null?ke=Be:vt.sibling=Be,vt=Be);return _t&&Bi(W,st),ke}for(Be=s(Be);st<Y.length;st++)mt=ae(Be,W,st,Y[st],pe),mt!==null&&(t&&mt.alternate!==null&&Be.delete(mt.key===null?st:mt.key),G=f(mt,G,st),vt===null?ke=mt:vt.sibling=mt,vt=mt);return t&&Be.forEach(function(za){return n(W,za)}),_t&&Bi(W,st),ke}function Ye(W,G,Y,pe){if(Y==null)throw Error(r(151));for(var ke=null,vt=null,Be=G,st=G=0,mt=null,yt=Y.next();Be!==null&&!yt.done;st++,yt=Y.next()){Be.index>st?(mt=Be,Be=null):mt=Be.sibling;var za=J(W,Be,yt.value,pe);if(za===null){Be===null&&(Be=mt);break}t&&Be&&za.alternate===null&&n(W,Be),G=f(za,G,st),vt===null?ke=za:vt.sibling=za,vt=za,Be=mt}if(yt.done)return a(W,Be),_t&&Bi(W,st),ke;if(Be===null){for(;!yt.done;st++,yt=Y.next())yt=ge(W,yt.value,pe),yt!==null&&(G=f(yt,G,st),vt===null?ke=yt:vt.sibling=yt,vt=yt);return _t&&Bi(W,st),ke}for(Be=s(Be);!yt.done;st++,yt=Y.next())yt=ae(Be,W,st,yt.value,pe),yt!==null&&(t&&yt.alternate!==null&&Be.delete(yt.key===null?st:yt.key),G=f(yt,G,st),vt===null?ke=yt:vt.sibling=yt,vt=yt);return t&&Be.forEach(function(hS){return n(W,hS)}),_t&&Bi(W,st),ke}function wt(W,G,Y,pe){if(typeof Y=="object"&&Y!==null&&Y.type===b&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:e:{for(var ke=Y.key;G!==null;){if(G.key===ke){if(ke=Y.type,ke===b){if(G.tag===7){a(W,G.sibling),pe=c(G,Y.props.children),pe.return=W,W=pe;break e}}else if(G.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===oe&&ar(ke)===G.type){a(W,G.sibling),pe=c(G,Y.props),no(pe,Y),pe.return=W,W=pe;break e}a(W,G);break}else n(W,G);G=G.sibling}Y.type===b?(pe=$a(Y.props.children,W.mode,pe,Y.key),pe.return=W,W=pe):(pe=il(Y.type,Y.key,Y.props,null,W.mode,pe),no(pe,Y),pe.return=W,W=pe)}return _(W);case R:e:{for(ke=Y.key;G!==null;){if(G.key===ke)if(G.tag===4&&G.stateNode.containerInfo===Y.containerInfo&&G.stateNode.implementation===Y.implementation){a(W,G.sibling),pe=c(G,Y.children||[]),pe.return=W,W=pe;break e}else{a(W,G);break}else n(W,G);G=G.sibling}pe=fc(Y,W.mode,pe),pe.return=W,W=pe}return _(W);case oe:return Y=ar(Y),wt(W,G,Y,pe)}if(re(Y))return ze(W,G,Y,pe);if(ye(Y)){if(ke=ye(Y),typeof ke!="function")throw Error(r(150));return Y=ke.call(Y),Ye(W,G,Y,pe)}if(typeof Y.then=="function")return wt(W,G,cl(Y),pe);if(Y.$$typeof===C)return wt(W,G,sl(W,Y),pe);fl(W,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,G!==null&&G.tag===6?(a(W,G.sibling),pe=c(G,Y),pe.return=W,W=pe):(a(W,G),pe=cc(Y,W.mode,pe),pe.return=W,W=pe),_(W)):a(W,G)}return function(W,G,Y,pe){try{to=0;var ke=wt(W,G,Y,pe);return kr=null,ke}catch(Be){if(Be===Vr||Be===ll)throw Be;var vt=jn(29,Be,null,W.mode);return vt.lanes=pe,vt.return=W,vt}}}var sr=Qd(!0),Kd=Qd(!1),ya=!1;function Ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(xt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=nl(t),Nd(t,null,a),n}return tl(t,s,n,a),nl(t)}function io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Hs(t,a)}}function Tc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ac=!1;function ao(){if(Ac){var t=Gr;if(t!==null)throw t}}function ro(t,n,a,s){Ac=!1;var c=t.updateQueue;ya=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var I=E,Z=I.next;I.next=null,_===null?f=Z:_.next=Z,_=I;var de=t.alternate;de!==null&&(de=de.updateQueue,E=de.lastBaseUpdate,E!==_&&(E===null?de.firstBaseUpdate=Z:E.next=Z,de.lastBaseUpdate=I))}if(f!==null){var ge=c.baseState;_=0,de=Z=I=null,E=f;do{var J=E.lane&-536870913,ae=J!==E.lane;if(ae?(pt&J)===J:(s&J)===J){J!==0&&J===Hr&&(Ac=!0),de!==null&&(de=de.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ze=t,Ye=E;J=n;var wt=a;switch(Ye.tag){case 1:if(ze=Ye.payload,typeof ze=="function"){ge=ze.call(wt,ge,J);break e}ge=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ye.payload,J=typeof ze=="function"?ze.call(wt,ge,J):ze,J==null)break e;ge=y({},ge,J);break e;case 2:ya=!0}}J=E.callback,J!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=c.callbacks,ae===null?c.callbacks=[J]:ae.push(J))}else ae={lane:J,tag:E.tag,payload:E.payload,callback:E.callback,next:null},de===null?(Z=de=ae,I=ge):de=de.next=ae,_|=J;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ae=E,E=ae.next,ae.next=null,c.lastBaseUpdate=ae,c.shared.pending=null}}while(!0);de===null&&(I=ge),c.baseState=I,c.firstBaseUpdate=Z,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Aa|=_,t.lanes=_,t.memoizedState=ge}}function Jd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function $d(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jd(a[t],n)}var Xr=T(null),hl=T(0);function ep(t,n){t=Yi,ee(hl,t),ee(Xr,n),Yi=t|n.baseLanes}function Rc(){ee(hl,Yi),ee(Xr,Xr.current)}function wc(){Yi=hl.current,z(Xr),z(hl)}var qn=T(null),oi=null;function Ma(t){var n=t.alternate;ee(Yt,Yt.current&1),ee(qn,t),oi===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(oi=t)}function Cc(t){ee(Yt,Yt.current),ee(qn,t),oi===null&&(oi=t)}function tp(t){t.tag===22?(ee(Yt,Yt.current),ee(qn,t),oi===null&&(oi=t)):Ea()}function Ea(){ee(Yt,Yt.current),ee(qn,qn.current)}function Yn(t){z(qn),oi===t&&(oi=null),z(Yt)}var Yt=T(0);function dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zf(a)||Bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hi=0,at=null,At=null,tn=null,pl=!1,Wr=!1,or=!1,ml=0,so=0,jr=null,ny=0;function jt(){throw Error(r(321))}function Lc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Dc(t,n,a,s,c,f){return Hi=f,at=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?Ip:jc,or=!1,f=a(s,c),or=!1,Wr&&(f=ip(n,a,s,c)),np(t),f}function np(t){H.H=uo;var n=At!==null&&At.next!==null;if(Hi=0,tn=At=at=null,pl=!1,so=0,jr=null,n)throw Error(r(300));t===null||nn||(t=t.dependencies,t!==null&&rl(t)&&(nn=!0))}function ip(t,n,a,s){at=t;var c=0;do{if(Wr&&(jr=null),so=0,Wr=!1,25<=c)throw Error(r(301));if(c+=1,tn=At=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=Fp,f=n(a,s)}while(Wr);return f}function iy(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(at.flags|=1024),n}function Uc(){var t=ml!==0;return ml=0,t}function Oc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nc(t){if(pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}pl=!1}Hi=0,tn=At=at=null,Wr=!1,so=ml=0,jr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?at.memoizedState=tn=t:tn=tn.next=t,tn}function Zt(){if(At===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var n=tn===null?at.memoizedState:tn.next;if(n!==null)tn=n,At=t;else{if(t===null)throw at.alternate===null?Error(r(467)):Error(r(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},tn===null?at.memoizedState=tn=t:tn=tn.next=t}return tn}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=so;return so+=1,jr===null&&(jr=[]),t=qd(jr,t,n),n=at,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?Ip:jc),t}function _l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===C)return _n(t)}throw Error(r(438,String(t)))}function Pc(t){var n=null,a=at.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=at.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gl(),at.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=P;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function vl(t){var n=Zt();return zc(n,At,t)}function zc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=_=null,I=null,Z=n,de=!1;do{var ge=Z.lane&-536870913;if(ge!==Z.lane?(pt&ge)===ge:(Hi&ge)===ge){var J=Z.revertLane;if(J===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ge===Hr&&(de=!0);else if((Hi&J)===J){Z=Z.next,J===Hr&&(de=!0);continue}else ge={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(E=I=ge,_=f):I=I.next=ge,at.lanes|=J,Aa|=J;ge=Z.action,or&&a(f,ge),f=Z.hasEagerState?Z.eagerState:a(f,ge)}else J={lane:ge,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(E=I=J,_=f):I=I.next=J,at.lanes|=ge,Aa|=ge;Z=Z.next}while(Z!==null&&Z!==n);if(I===null?_=f:I.next=E,!Wn(f,t.memoizedState)&&(nn=!0,de&&(a=Gr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Bc(t){var n=Zt(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Wn(f,n.memoizedState)||(nn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function ap(t,n,a){var s=at,c=Zt(),f=_t;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Wn((At||c).memoizedState,a);if(_&&(c.memoizedState=a,nn=!0),c=c.queue,Hc(op.bind(null,s,c,t),[t]),c.getSnapshot!==n||_||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},sp.bind(null,s,c,a,n),null),Lt===null)throw Error(r(349));f||(Hi&127)!==0||rp(s,n,a)}return a}function rp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=at.updateQueue,n===null?(n=gl(),at.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function sp(t,n,a,s){n.value=a,n.getSnapshot=s,lp(n)&&up(t)}function op(t,n,a){return a(function(){lp(n)&&up(t)})}function lp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function up(t){var n=Ja(t,2);n!==null&&kn(n,t,2)}function Ic(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),or){Te(!0);try{a()}finally{Te(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function cp(t,n,a,s){return t.baseState=a,zc(t,At,typeof s=="function"?s:Gi)}function ay(t,n,a,s,c){if(xl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};H.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,fp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function fp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=H.T,_={};H.T=_;try{var E=a(c,s),I=H.S;I!==null&&I(_,E),hp(t,n,E)}catch(Z){Fc(t,n,Z)}finally{f!==null&&_.types!==null&&(f.types=_.types),H.T=f}}else try{f=a(c,s),hp(t,n,f)}catch(Z){Fc(t,n,Z)}}function hp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){dp(t,n,s)},function(s){return Fc(t,n,s)}):dp(t,n,a)}function dp(t,n,a){n.status="fulfilled",n.value=a,pp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,fp(t,a)))}function Fc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,pp(n),n=n.next;while(n!==s)}t.action=null}function pp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function mp(t,n){return n}function gp(t,n){if(_t){var a=Lt.formState;if(a!==null){e:{var s=at;if(_t){if(Nt){t:{for(var c=Nt,f=si;c.nodeType!==8;){if(!f){c=null;break t}if(c=li(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Nt=li(c.nextSibling),s=c.data==="F!";break e}}_a(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mp,lastRenderedState:n},a.queue=s,a=Pp.bind(null,at,s),s.dispatch=a,s=Ic(!1),f=Wc.bind(null,at,!1,s.queue),s=Nn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=ay.bind(null,at,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function _p(t){var n=Zt();return vp(n,At,t)}function vp(t,n,a){if(n=zc(t,n,mp)[0],t=vl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=oo(n)}catch(_){throw _===Vr?ll:_}else s=n;n=Zt();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(at.flags|=2048,qr(9,{destroy:void 0},ry.bind(null,c,a),null)),[s,f,t]}function ry(t,n){t.action=n}function yp(t){var n=Zt(),a=At;if(a!==null)return vp(n,a,t);Zt(),n=n.memoizedState,a=Zt();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function qr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=at.updateQueue,n===null&&(n=gl(),at.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Sp(){return Zt().memoizedState}function yl(t,n,a,s){var c=Nn();at.flags|=t,c.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function Sl(t,n,a,s){var c=Zt();s=s===void 0?null:s;var f=c.memoizedState.inst;At!==null&&s!==null&&Lc(s,At.memoizedState.deps)?c.memoizedState=qr(n,f,a,s):(at.flags|=t,c.memoizedState=qr(1|n,f,a,s))}function xp(t,n){yl(8390656,8,t,n)}function Hc(t,n){Sl(2048,8,t,n)}function sy(t){at.flags|=4;var n=at.updateQueue;if(n===null)n=gl(),at.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Mp(t){var n=Zt().memoizedState;return sy({ref:n,nextImpl:t}),function(){if((xt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Ep(t,n){return Sl(4,2,t,n)}function bp(t,n){return Sl(4,4,t,n)}function Tp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ap(t,n,a){a=a!=null?a.concat([t]):null,Sl(4,4,Tp.bind(null,n,t),a)}function Gc(){}function Rp(t,n){var a=Zt();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function wp(t,n){var a=Zt();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lc(n,s[1]))return s[0];if(s=t(),or){Te(!0);try{t()}finally{Te(!1)}}return a.memoizedState=[s,n],s}function Vc(t,n,a){return a===void 0||(Hi&1073741824)!==0&&(pt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Cm(),at.lanes|=t,Aa|=t,a)}function Cp(t,n,a,s){return Wn(a,n)?a:Xr.current!==null?(t=Vc(t,a,s),Wn(t,n)||(nn=!0),t):(Hi&42)===0||(Hi&1073741824)!==0&&(pt&261930)===0?(nn=!0,t.memoizedState=a):(t=Cm(),at.lanes|=t,Aa|=t,n)}function Lp(t,n,a,s,c){var f=X.p;X.p=f!==0&&8>f?f:8;var _=H.T,E={};H.T=E,Wc(t,!1,n,a);try{var I=c(),Z=H.S;if(Z!==null&&Z(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=ty(I,s);lo(t,n,de,Kn(t))}else lo(t,n,s,Kn(t))}catch(ge){lo(t,n,{then:function(){},status:"rejected",reason:ge},Kn())}finally{X.p=f,_!==null&&E.types!==null&&(_.types=E.types),H.T=_}}function oy(){}function kc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Dp(t).queue;Lp(t,c,n,q,a===null?oy:function(){return Up(t),a(s)})}function Dp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Up(t){var n=Dp(t);n.next===null&&(n=t.alternate.memoizedState),lo(t,n.next.queue,{},Kn())}function Xc(){return _n(Ao)}function Op(){return Zt().memoizedState}function Np(){return Zt().memoizedState}function ly(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=Sa(a);var s=xa(n,t,a);s!==null&&(kn(s,n,a),io(s,n,a)),n={cache:yc()},t.payload=n;return}n=n.return}}function uy(t,n,a){var s=Kn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xl(t)?zp(n,a):(a=lc(t,n,a,s),a!==null&&(kn(a,t,s),Bp(a,n,s)))}function Pp(t,n,a){var s=Kn();lo(t,n,a,s)}function lo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xl(t))zp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,_))return tl(t,n,c,0),Lt===null&&el(),!1}catch{}if(a=lc(t,n,c,s),a!==null)return kn(a,t,s),Bp(a,n,s),!0}return!1}function Wc(t,n,a,s){if(s={lane:2,revertLane:bf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},xl(t)){if(n)throw Error(r(479))}else n=lc(t,a,s,2),n!==null&&kn(n,t,2)}function xl(t){var n=t.alternate;return t===at||n!==null&&n===at}function zp(t,n){Wr=pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Bp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Hs(t,a)}}var uo={readContext:_n,use:_l,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt};uo.useEffectEvent=jt;var Ip={readContext:_n,use:_l,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:_n,useEffect:xp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,yl(4194308,4,Tp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return yl(4194308,4,t,n)},useInsertionEffect:function(t,n){yl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if(or){Te(!0);try{t()}finally{Te(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var c=a(n);if(or){Te(!0);try{a(n)}finally{Te(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=uy.bind(null,at,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ic(t);var n=t.queue,a=Pp.bind(null,at,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gc,useDeferredValue:function(t,n){var a=Nn();return Vc(a,t,n)},useTransition:function(){var t=Ic(!1);return t=Lp.bind(null,at,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=at,c=Nn();if(_t){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Lt===null)throw Error(r(349));(pt&127)!==0||rp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,xp(op.bind(null,s,f,t),[t]),s.flags|=2048,qr(9,{destroy:void 0},sp.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=Lt.identifierPrefix;if(_t){var a=Ri,s=Ai;a=(s&~(1<<32-Re(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ny++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Xc,useFormState:gp,useActionState:gp,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wc.bind(null,at,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pc,useCacheRefresh:function(){return Nn().memoizedState=ly.bind(null,at)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((xt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},jc={readContext:_n,use:_l,useCallback:Rp,useContext:_n,useEffect:Hc,useImperativeHandle:Ap,useInsertionEffect:Ep,useLayoutEffect:bp,useMemo:wp,useReducer:vl,useRef:Sp,useState:function(){return vl(Gi)},useDebugValue:Gc,useDeferredValue:function(t,n){var a=Zt();return Cp(a,At.memoizedState,t,n)},useTransition:function(){var t=vl(Gi)[0],n=Zt().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:ap,useId:Op,useHostTransitionStatus:Xc,useFormState:_p,useActionState:_p,useOptimistic:function(t,n){var a=Zt();return cp(a,At,t,n)},useMemoCache:Pc,useCacheRefresh:Np};jc.useEffectEvent=Mp;var Fp={readContext:_n,use:_l,useCallback:Rp,useContext:_n,useEffect:Hc,useImperativeHandle:Ap,useInsertionEffect:Ep,useLayoutEffect:bp,useMemo:wp,useReducer:Bc,useRef:Sp,useState:function(){return Bc(Gi)},useDebugValue:Gc,useDeferredValue:function(t,n){var a=Zt();return At===null?Vc(a,t,n):Cp(a,At.memoizedState,t,n)},useTransition:function(){var t=Bc(Gi)[0],n=Zt().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:ap,useId:Op,useHostTransitionStatus:Xc,useFormState:yp,useActionState:yp,useOptimistic:function(t,n){var a=Zt();return At!==null?cp(a,At,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pc,useCacheRefresh:Np};Fp.useEffectEvent=Mp;function qc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Yc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=Sa(s);c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,s),n!==null&&(kn(n,t,s),io(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=Sa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,s),n!==null&&(kn(n,t,s),io(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=Sa(a);s.tag=2,n!=null&&(s.callback=n),n=xa(t,s,a),n!==null&&(kn(n,t,a),io(n,t,a))}};function Hp(t,n,a,s,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,s)||!Zs(c,f):!0}function Gp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Yc.enqueueReplaceState(n,n.state,null)}function lr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Vp(t){$o(t)}function kp(t){console.error(t)}function Xp(t){$o(t)}function Ml(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Wp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zc(t,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ml(t,n)},a}function jp(t){return t=Sa(t),t.tag=3,t}function qp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Wp(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Wp(n,a,s),typeof c!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function cy(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fr(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Nl():a.alternate===null&&qt===0&&(qt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),xf(t,s,c)),!1;case 22:return a.flags|=65536,s===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),xf(t,s,c)),!1}throw Error(r(435,a.tag))}return xf(t,s,c),Nl(),!1}if(_t)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==pc&&(t=Error(r(422),{cause:s}),Js(ii(t,a)))):(s!==pc&&(n=Error(r(423),{cause:s}),Js(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=Zc(t.stateNode,s,c),Tc(t,c),qt!==4&&(qt=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),vo===null?vo=[f]:vo.push(f),qt!==4&&(qt=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Zc(a.stateNode,s,t),Tc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=jp(c),qp(c,t,a,s),Tc(a,c),!1}a=a.return}while(a!==null);return!1}var Qc=Error(r(461)),nn=!1;function vn(t,n,a,s){n.child=t===null?Kd(n,null,a,s):sr(n,t.child,a,s)}function Yp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return nr(n),s=Dc(t,n,a,_,f,c),E=Uc(),t!==null&&!nn?(Oc(t,n,c),Vi(t,n,c)):(_t&&E&&hc(n),n.flags|=1,vn(t,n,s,c),n.child)}function Zp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!uc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Qp(t,n,f,s,c)):(t=il(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!rf(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(_,s)&&t.ref===n.ref)return Vi(t,n,c)}return n.flags|=1,t=zi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Qp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Zs(f,s)&&t.ref===n.ref)if(nn=!1,n.pendingProps=s=f,rf(t,c))(t.flags&131072)!==0&&(nn=!0);else return n.lanes=t.lanes,Vi(t,n,c)}return Kc(t,n,a,s,c)}function Kp(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Jp(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ol(n,f!==null?f.cachePool:null),f!==null?ep(n,f):Rc(),tp(n);else return s=n.lanes=536870912,Jp(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ol(n,f.cachePool),ep(n,f),Ea(),n.memoizedState=null):(t!==null&&ol(n,null),Rc(),Ea());return vn(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jp(t,n,a,s,c){var f=xc();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ol(n,null),Rc(),tp(n),t!==null&&Fr(t,n,s,!0),n.childLanes=c,null}function El(t,n){return n=Tl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $p(t,n,a){return sr(n,t.child,null,a),t=El(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function fy(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_t){if(s.mode==="hidden")return t=El(n,s),n.lanes=536870912,co(null,t);if(Cc(n),(t=Nt)?(t=fg(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ma!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=zd(t),a.return=n,n.child=a,gn=n,Nt=null)):t=null,t===null)throw _a(n);return n.lanes=536870912,null}return El(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Cc(n),c)if(n.flags&256)n.flags&=-257,n=$p(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(nn||Fr(t,n,a,!1),c=(a&t.childLanes)!==0,nn||c){if(s=Lt,s!==null&&(_=Wo(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ja(t,_),kn(s,t,_),Qc;Nl(),n=$p(t,n,a)}else t=f.treeContext,Nt=li(_.nextSibling),gn=n,_t=!0,ga=null,si=!1,t!==null&&Fd(n,t),n=El(n,s),n.flags|=4096;return n}return t=zi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Kc(t,n,a,s,c){return nr(n),a=Dc(t,n,a,s,void 0,c),s=Uc(),t!==null&&!nn?(Oc(t,n,c),Vi(t,n,c)):(_t&&s&&hc(n),n.flags|=1,vn(t,n,a,c),n.child)}function em(t,n,a,s,c,f){return nr(n),n.updateQueue=null,a=ip(n,s,a,c),np(t),s=Uc(),t!==null&&!nn?(Oc(t,n,f),Vi(t,n,f)):(_t&&s&&hc(n),n.flags|=1,vn(t,n,a,f),n.child)}function tm(t,n,a,s,c){if(nr(n),n.stateNode===null){var f=Pr,_=a.contextType;typeof _=="object"&&_!==null&&(f=_n(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Ec(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?_n(_):Pr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(qc(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Yc.enqueueReplaceState(f,f.state,null),ro(n,s,f,c),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,I=lr(a,E);f.props=I;var Z=f.context,de=a.contextType;_=Pr,typeof de=="object"&&de!==null&&(_=_n(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Z!==_)&&Gp(n,f,s,_),ya=!1;var J=n.memoizedState;f.state=J,ro(n,s,f,c),ao(),Z=n.memoizedState,E||J!==Z||ya?(typeof ge=="function"&&(qc(n,a,ge,s),Z=n.memoizedState),(I=ya||Hp(n,a,I,s,J,Z,_))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Z),f.props=s,f.state=Z,f.context=_,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,bc(t,n),_=n.memoizedProps,de=lr(a,_),f.props=de,ge=n.pendingProps,J=f.context,Z=a.contextType,I=Pr,typeof Z=="object"&&Z!==null&&(I=_n(Z)),E=a.getDerivedStateFromProps,(Z=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ge||J!==I)&&Gp(n,f,s,I),ya=!1,J=n.memoizedState,f.state=J,ro(n,s,f,c),ao();var ae=n.memoizedState;_!==ge||J!==ae||ya||t!==null&&t.dependencies!==null&&rl(t.dependencies)?(typeof E=="function"&&(qc(n,a,E,s),ae=n.memoizedState),(de=ya||Hp(n,a,de,s,J,ae,I)||t!==null&&t.dependencies!==null&&rl(t.dependencies))?(Z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ae,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ae,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ae),f.props=s,f.state=ae,f.context=I,s=de):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,bl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=sr(n,t.child,null,c),n.child=sr(n,null,a,c)):vn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Vi(t,n,c),t}function nm(t,n,a,s){return er(),n.flags|=256,vn(t,n,a,s),n.child}var Jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(t){return{baseLanes:t,cachePool:Wd()}}function ef(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function im(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Yt.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_t){if(c?Ma(n):Ea(),(t=Nt)?(t=fg(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ma!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=zd(t),a.return=n,n.child=a,gn=n,Nt=null)):t=null,t===null)throw _a(n);return Bf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ea(),c=n.mode,E=Tl({mode:"hidden",children:E},c),s=$a(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=$c(a),s.childLanes=ef(t,_,a),n.memoizedState=Jc,co(null,s)):(Ma(n),tf(n,E))}var I=t.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=nf(t,n,a)):n.memoizedState!==null?(Ea(),n.child=t.child,n.flags|=128,n=null):(Ea(),E=s.fallback,c=n.mode,s=Tl({mode:"visible",children:s.children},c),E=$a(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,sr(n,t.child,null,a),s=n.child,s.memoizedState=$c(a),s.childLanes=ef(t,_,a),n.memoizedState=Jc,n=co(null,s));else if(Ma(n),Bf(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var Z=_.dgst;_=Z,s=Error(r(419)),s.stack="",s.digest=_,Js({value:s,source:null,stack:null}),n=nf(t,n,a)}else if(nn||Fr(t,n,a,!1),_=(a&t.childLanes)!==0,nn||_){if(_=Lt,_!==null&&(s=Wo(_,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,Ja(t,s),kn(_,t,s),Qc;zf(E)||Nl(),n=nf(t,n,a)}else zf(E)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Nt=li(E.nextSibling),gn=n,_t=!0,ga=null,si=!1,t!==null&&Fd(n,t),n=tf(n,s.children),n.flags|=4096);return n}return c?(Ea(),E=s.fallback,c=n.mode,I=t.child,Z=I.sibling,s=zi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,Z!==null?E=zi(Z,E):(E=$a(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,co(null,s),s=n.child,E=t.child.memoizedState,E===null?E=$c(a):(c=E.cachePool,c!==null?(I=en._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Wd(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=ef(t,_,a),n.memoizedState=Jc,co(t.child,s)):(Ma(n),a=t.child,t=a.sibling,a=zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function tf(t,n){return n=Tl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function nf(t,n,a){return sr(n,t.child,null,a),t=tf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function am(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),_c(t.return,n,a)}function af(t,n,a,s,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function rm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=Yt.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,ee(Yt,_),vn(t,n,s,a),s=_t?Ks:0,!E&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&am(t,a,n);else if(t.tag===19)am(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&dl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),af(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&dl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}af(n,!0,a,null,f,s);break;case"together":af(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Vi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&rl(t)))}function hy(t,n,a){switch(n.tag){case 3:Pe(n,n.stateNode.containerInfo),va(n,en,t.memoizedState.cache),er();break;case 27:case 5:Ht(n);break;case 4:Pe(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?im(t,n,a):(Ma(n),t=Vi(t,n,a),t!==null?t.sibling:null);Ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return rm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ee(Yt,Yt.current),s)break;return null;case 22:return n.lanes=0,Kp(t,n,a,n.pendingProps);case 24:va(n,en,t.memoizedState.cache)}return Vi(t,n,a)}function sm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)nn=!0;else{if(!rf(t,a)&&(n.flags&128)===0)return nn=!1,hy(t,n,a);nn=(t.flags&131072)!==0}else nn=!1,_t&&(n.flags&1048576)!==0&&Id(n,Ks,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=ar(n.elementType),n.type=t,typeof t=="function")uc(t)?(s=lr(t,s),n.tag=1,n=tm(null,n,t,s,a)):(n.tag=0,n=Kc(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Yp(null,n,t,s,a);break e}else if(c===D){n.tag=14,n=Zp(null,n,t,s,a);break e}}throw n=le(t)||t,Error(r(306,n,""))}}return n;case 0:return Kc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=lr(s,n.pendingProps),tm(t,n,s,c,a);case 3:e:{if(Pe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,bc(t,n),ro(n,s,null,a);var _=n.memoizedState;if(s=_.cache,va(n,en,s),s!==f.cache&&vc(n,[en],a,!0),ao(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=nm(t,n,s,a);break e}else if(s!==c){c=ii(Error(r(424)),n),Js(c),n=nm(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Nt=li(t.firstChild),gn=n,_t=!0,ga=null,si=!0,a=Kd(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(er(),s===c){n=Vi(t,n,a);break e}vn(t,n,s,a)}n=n.child}return n;case 26:return bl(t,n),t===null?(a=_g(n.type,null,n.pendingProps,null))?n.memoizedState=a:_t||(a=n.type,t=n.pendingProps,s=Gl(we.current).createElement(a),s[sn]=n,s[En]=t,yn(s,a,t),Ie(s),n.stateNode=s):n.memoizedState=_g(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&_t&&(s=n.stateNode=pg(n.type,n.pendingProps,we.current),gn=n,si=!0,c=Nt,Da(n.type)?(If=c,Nt=li(s.firstChild)):Nt=c),vn(t,n,n.pendingProps.children,a),bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_t&&((c=s=Nt)&&(s=Vy(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,gn=n,Nt=li(s.firstChild),si=!1,c=!0):c=!1),c||_a(n)),Ht(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,Of(c,f)?s=null:_!==null&&Of(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Dc(t,n,iy,null,null,a),Ao._currentValue=c),bl(t,n),vn(t,n,s,a),n.child;case 6:return t===null&&_t&&((t=a=Nt)&&(a=ky(a,n.pendingProps,si),a!==null?(n.stateNode=a,gn=n,Nt=null,t=!0):t=!1),t||_a(n)),null;case 13:return im(t,n,a);case 4:return Pe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=sr(n,null,s,a):vn(t,n,s,a),n.child;case 11:return Yp(t,n,n.type,n.pendingProps,a);case 7:return vn(t,n,n.pendingProps,a),n.child;case 8:return vn(t,n,n.pendingProps.children,a),n.child;case 12:return vn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,va(n,n.type,s.value),vn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,nr(n),c=_n(c),s=s(c),n.flags|=1,vn(t,n,s,a),n.child;case 14:return Zp(t,n,n.type,n.pendingProps,a);case 15:return Qp(t,n,n.type,n.pendingProps,a);case 19:return rm(t,n,a);case 31:return fy(t,n,a);case 22:return Kp(t,n,a,n.pendingProps);case 24:return nr(n),s=_n(en),t===null?(c=xc(),c===null&&(c=Lt,f=yc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Ec(n),va(n,en,c)):((t.lanes&a)!==0&&(bc(t,n),ro(n,null,null,a),ao()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,en,s)):(s=f.cache,va(n,en,s),s!==c.cache&&vc(n,[en],a,!0))),vn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(t){t.flags|=4}function sf(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Om())t.flags|=8192;else throw rr=ul,Mc}else t.flags&=-16777217}function om(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mg(n))if(Om())t.flags|=8192;else throw rr=ul,Mc}function Al(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?xn():536870912,t.lanes|=n,Kr|=n)}function fo(t,n){if(!_t)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Pt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function dy(t,n,a){var s=n.pendingProps;switch(dc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(n),null;case 1:return Pt(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(en),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ir(n)?ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mc())),Pt(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ki(n),f!==null?(Pt(n),om(n,f)):(Pt(n),sf(n,c,null,s,a))):f?f!==t.memoizedState?(ki(n),Pt(n),om(n,f)):(Pt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ki(n),Pt(n),sf(n,c,t,s,a)),null;case 27:if(et(n),a=we.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Pt(n),null}t=ue.current,Ir(n)?Hd(n):(t=pg(c,s,a),n.stateNode=t,ki(n))}return Pt(n),null;case 5:if(et(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Pt(n),null}if(f=ue.current,Ir(n))Hd(n);else{var _=Gl(we.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[sn]=n,f[En]=s;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(yn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ki(n)}}return Pt(n),sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=we.current,Ir(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=gn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ig(t.nodeValue,a)),t||_a(n,!0)}else t=Gl(t).createTextNode(s),t[sn]=n,n.stateNode=t}return Pt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ir(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pt(n),t=!1}else a=mc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Pt(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ir(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pt(n),c=!1}else c=mc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),Pt(n),null);case 4:return Ve(),t===null&&wf(n.stateNode.containerInfo),Pt(n),null;case 10:return Fi(n.type),Pt(n),null;case 19:if(z(Yt),s=n.memoizedState,s===null)return Pt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)fo(s,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=dl(t),f!==null){for(n.flags|=128,fo(s,!1),t=f.updateQueue,n.updateQueue=t,Al(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Pd(a,t),a=a.sibling;return ee(Yt,Yt.current&1|2),_t&&Bi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&A()>Dl&&(n.flags|=128,c=!0,fo(s,!1),n.lanes=4194304)}else{if(!c)if(t=dl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Al(n,t),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!_t)return Pt(n),null}else 2*A()-s.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,c=!0,fo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=A(),t.sibling=null,a=Yt.current,ee(Yt,c?a&1|2:a&1),_t&&Bi(n,s.treeForkCount),t):(Pt(n),null);case 22:case 23:return Yn(n),wc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Pt(n),n.subtreeFlags&6&&(n.flags|=8192)):Pt(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&z(ir),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(en),Pt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function py(t,n){switch(dc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fi(en),Ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return z(Yt),null;case 4:return Ve(),null;case 10:return Fi(n.type),null;case 22:case 23:return Yn(n),wc(),t!==null&&z(ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fi(en),null;case 25:return null;default:return null}}function lm(t,n){switch(dc(n),n.tag){case 3:Fi(en),Ve();break;case 26:case 27:case 5:et(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:z(Yt);break;case 10:Fi(n.type);break;case 22:case 23:Yn(n),wc(),t!==null&&z(ir);break;case 24:Fi(en)}}function ho(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(E){bt(n,n.return,E)}}function ba(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var I=a,Z=E;try{Z()}catch(de){bt(c,I,de)}}}s=s.next}while(s!==f)}}catch(de){bt(n,n.return,de)}}function um(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$d(n,a)}catch(s){bt(t,t.return,s)}}}function cm(t,n,a){a.props=lr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){bt(t,n,s)}}function po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){bt(t,n,c)}}function wi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){bt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){bt(t,n,c)}else a.current=null}function fm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){bt(t,t.return,c)}}function of(t,n,a){try{var s=t.stateNode;zy(s,t.type,a,n),s[En]=n}catch(c){bt(t,t.return,c)}}function hm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Da(t.type)||t.tag===4}function lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Da(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ni));else if(s!==4&&(s===27&&Da(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(uf(t,n,a),t=t.sibling;t!==null;)uf(t,n,a),t=t.sibling}function Rl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Rl(t,n,a),t=t.sibling;t!==null;)Rl(t,n,a),t=t.sibling}function dm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[sn]=t,n[En]=a}catch(f){bt(t,t.return,f)}}var Xi=!1,an=!1,cf=!1,pm=typeof WeakSet=="function"?WeakSet:Set,dn=null;function my(t,n){if(t=t.containerInfo,Df=Yl,t=Ad(t),nc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,E=-1,I=-1,Z=0,de=0,ge=t,J=null;t:for(;;){for(var ae;ge!==a||c!==0&&ge.nodeType!==3||(E=_+c),ge!==f||s!==0&&ge.nodeType!==3||(I=_+s),ge.nodeType===3&&(_+=ge.nodeValue.length),(ae=ge.firstChild)!==null;)J=ge,ge=ae;for(;;){if(ge===t)break t;if(J===a&&++Z===c&&(E=_),J===f&&++de===s&&(I=_),(ae=ge.nextSibling)!==null)break;ge=J,J=ge.parentNode}ge=ae}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uf={focusedElem:t,selectionRange:a},Yl=!1,dn=n;dn!==null;)if(n=dn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,dn=t;else for(;dn!==null;){switch(n=dn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ze=lr(a.type,c);t=s.getSnapshotBeforeUpdate(ze,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Ye){bt(a,a.return,Ye)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,dn=t;break}dn=n.return}}function mm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),s&4&&ho(5,a);break;case 1:if(ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){bt(a,a.return,_)}else{var c=lr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){bt(a,a.return,_)}}s&64&&um(a),s&512&&po(a,a.return);break;case 3:if(ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$d(t,n)}catch(_){bt(a,a.return,_)}}break;case 27:n===null&&s&4&&dm(a);case 26:case 5:ji(t,a),n===null&&s&4&&fm(a),s&512&&po(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),s&4&&vm(t,a);break;case 13:ji(t,a),s&4&&ym(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=by.bind(null,a),Xy(t,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||an,c=Xi;var f=an;Xi=s,(an=n)&&!f?qi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),Xi=c,an=f}break;case 30:break;default:ji(t,a)}}function gm(t){var n=t.alternate;n!==null&&(t.alternate=null,gm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Xe(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Bt=null,Fn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)_m(t,n,a),a=a.sibling}function _m(t,n,a){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(_e,a)}catch{}switch(a.tag){case 26:an||wi(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||wi(a,n);var s=Bt,c=Fn;Da(a.type)&&(Bt=a.stateNode,Fn=!1),Wi(t,n,a),Eo(a.stateNode),Bt=s,Fn=c;break;case 5:an||wi(a,n);case 6:if(s=Bt,c=Fn,Bt=null,Wi(t,n,a),Bt=s,Fn=c,Bt!==null)if(Fn)try{(Bt.nodeType===9?Bt.body:Bt.nodeName==="HTML"?Bt.ownerDocument.body:Bt).removeChild(a.stateNode)}catch(f){bt(a,n,f)}else try{Bt.removeChild(a.stateNode)}catch(f){bt(a,n,f)}break;case 18:Bt!==null&&(Fn?(t=Bt,ug(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),rs(t)):ug(Bt,a.stateNode));break;case 4:s=Bt,c=Fn,Bt=a.stateNode.containerInfo,Fn=!0,Wi(t,n,a),Bt=s,Fn=c;break;case 0:case 11:case 14:case 15:ba(2,a,n),an||ba(4,a,n),Wi(t,n,a);break;case 1:an||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&cm(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:an=(s=an)||a.memoizedState!==null,Wi(t,n,a),an=s;break;default:Wi(t,n,a)}}function vm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{rs(t)}catch(a){bt(n,n.return,a)}}}function ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{rs(t)}catch(a){bt(n,n.return,a)}}function gy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new pm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new pm),n;default:throw Error(r(435,t.tag))}}function wl(t,n){var a=gy(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Ty.bind(null,t,s);s.then(c,c)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,_=n,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(Da(E.type)){Bt=E.stateNode,Fn=!1;break e}break;case 5:Bt=E.stateNode,Fn=!1;break e;case 3:case 4:Bt=E.stateNode.containerInfo,Fn=!0;break e}E=E.return}if(Bt===null)throw Error(r(160));_m(f,_,c),Bt=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Sm(n,t),n=n.sibling}var _i=null;function Sm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),s&4&&(ba(3,t,t.return),ho(3,t),ba(5,t,t.return));break;case 1:Hn(n,t),Gn(t),s&512&&(an||a===null||wi(a,a.return)),s&64&&Xi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(Hn(n,t),Gn(t),s&512&&(an||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ne]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[sn]=t,Ie(f),s=f;break e;case"link":var _=Sg("link","href",c).get(s+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=Sg("meta","content",c).get(s+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,Ie(f),s=f}t.stateNode=s}else xg(c,t.type,t.stateNode);else t.stateNode=yg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?xg(c,t.type,t.stateNode):yg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&of(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),s&512&&(an||a===null||wi(a,a.return)),a!==null&&s&4&&of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),s&512&&(an||a===null||wi(a,a.return)),t.flags&32){c=t.stateNode;try{wr(c,"")}catch(ze){bt(t,t.return,ze)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,of(t,c,a!==null?a.memoizedProps:c)),s&1024&&(cf=!0);break;case 6:if(Hn(n,t),Gn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ze){bt(t,t.return,ze)}}break;case 3:if(Xl=null,c=_i,_i=Vl(n.containerInfo),Hn(n,t),_i=c,Gn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(ze){bt(t,t.return,ze)}cf&&(cf=!1,xm(t));break;case 4:s=_i,_i=Vl(t.stateNode.containerInfo),Hn(n,t),Gn(t),_i=s;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,wl(t,s)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ll=A()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,wl(t,s)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Z=Xi,de=an;if(Xi=Z||c,an=de||I,Hn(n,t),an=de,Xi=Z,Gn(t),s&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Xi||an||ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=I.stateNode;var ge=I.memoizedProps.style,J=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;E.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(ze){bt(I,I.return,ze)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(ze){bt(I,I.return,ze)}}}else if(n.tag===18){if(a===null){I=n;try{var ae=I.stateNode;c?cg(ae,!0):cg(I.stateNode,!1)}catch(ze){bt(I,I.return,ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,wl(t,a))));break;case 19:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,wl(t,s)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(hm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=lf(t);Rl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(wr(_,""),a.flags&=-33);var E=lf(t);Rl(t,E,_);break;case 3:case 4:var I=a.stateNode.containerInfo,Z=lf(t);uf(t,Z,I);break;default:throw Error(r(161))}}catch(de){bt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function xm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mm(t,n.alternate,n),n=n.sibling}function ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),ur(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cm(n,n.return,a),ur(n);break;case 27:Eo(n.stateNode);case 26:case 5:wi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}t=t.sibling}}function qi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:qi(c,f,a),ho(4,f);break;case 1:if(qi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Z){bt(s,s.return,Z)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Jd(I[c],E)}catch(Z){bt(s,s.return,Z)}}a&&_&64&&um(f),po(f,f.return);break;case 27:dm(f);case 26:case 5:qi(c,f,a),a&&s===null&&_&4&&fm(f),po(f,f.return);break;case 12:qi(c,f,a);break;case 31:qi(c,f,a),a&&_&4&&vm(c,f);break;case 13:qi(c,f,a),a&&_&4&&ym(c,f);break;case 22:f.memoizedState===null&&qi(c,f,a),po(f,f.return);break;case 30:break;default:qi(c,f,a)}n=n.sibling}}function ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$s(a))}function hf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t))}function vi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mm(t,n,a,s),n=n.sibling}function Mm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),c&2048&&ho(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t)));break;case 12:if(c&2048){vi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){bt(n,n.return,I)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,s):mo(t,n):f._visibility&2?vi(t,n,a,s):(f._visibility|=2,Yr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ff(_,n);break;case 24:vi(t,n,a,s),c&2048&&hf(n.alternate,n);break;default:vi(t,n,a,s)}}function Yr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,I=s,Z=_.flags;switch(_.tag){case 0:case 11:case 15:Yr(f,_,E,I,c),ho(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?Yr(f,_,E,I,c):mo(f,_):(de._visibility|=2,Yr(f,_,E,I,c)),c&&Z&2048&&ff(_.alternate,_);break;case 24:Yr(f,_,E,I,c),c&&Z&2048&&hf(_.alternate,_);break;default:Yr(f,_,E,I,c)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:mo(a,s),c&2048&&ff(s.alternate,s);break;case 24:mo(a,s),c&2048&&hf(s.alternate,s);break;default:mo(a,s)}n=n.sibling}}var go=8192;function Zr(t,n,a){if(t.subtreeFlags&go)for(t=t.child;t!==null;)Em(t,n,a),t=t.sibling}function Em(t,n,a){switch(t.tag){case 26:Zr(t,n,a),t.flags&go&&t.memoizedState!==null&&nS(a,_i,t.memoizedState,t.memoizedProps);break;case 5:Zr(t,n,a);break;case 3:case 4:var s=_i;_i=Vl(t.stateNode.containerInfo),Zr(t,n,a),_i=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=go,go=16777216,Zr(t,n,a),go=s):Zr(t,n,a));break;default:Zr(t,n,a)}}function bm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Am(s,t)}bm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tm(t),t=t.sibling}function Tm(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&ba(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cl(t)):_o(t);break;default:_o(t)}}function Cl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,Am(s,t)}bm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}t=t.sibling}}function Am(t,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:$s(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,dn=s;else e:for(a=t;dn!==null;){s=dn;var c=s.sibling,f=s.return;if(gm(s),s===a){dn=null;break e}if(c!==null){c.return=f,dn=c;break e}dn=f}}}var _y={getCacheForType:function(t){var n=_n(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return _n(en).controller.signal}},vy=typeof WeakMap=="function"?WeakMap:Map,xt=0,Lt=null,ht=null,pt=0,Et=0,Zn=null,Ta=!1,Qr=!1,df=!1,Yi=0,qt=0,Aa=0,cr=0,pf=0,Qn=0,Kr=0,vo=null,Vn=null,mf=!1,Ll=0,Rm=0,Dl=1/0,Ul=null,Ra=null,on=0,wa=null,Jr=null,Zi=0,gf=0,_f=null,wm=null,yo=0,vf=null;function Kn(){return(xt&2)!==0&&pt!==0?pt&-pt:H.T!==null?bf():ja()}function Cm(){if(Qn===0)if((pt&536870912)===0||_t){var t=ie;ie<<=1,(ie&3932160)===0&&(ie=262144),Qn=t}else Qn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Qn}function kn(t,n,a){(t===Lt&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&($r(t,0),Ca(t,pt,Qn,!1)),Mn(t,a),((xt&2)===0||t!==Lt)&&(t===Lt&&((xt&2)===0&&(cr|=a),qt===4&&Ca(t,pt,Qn,!1)),Ci(t))}function Lm(t,n,a){if((xt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||gt(t,n),c=s?xy(t,n):Sf(t,n,!0),f=s;do{if(c===0){Qr&&!s&&Ca(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!yy(a)){c=Sf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var E=t;c=vo;var I=E.current.memoizedState.isDehydrated;if(I&&($r(E,_).flags|=256),_=Sf(E,_,!1),_!==2){if(df&&!I){E.errorRecoveryDisabledLanes|=f,cr|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){$r(t,0),Ca(t,n,0,!0);break}e:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(s,n,Qn,!Ta);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ll+300-A(),10<c)){if(Ca(s,n,Qn,!Ta),it(s,0,!0)!==0)break e;Zi=n,s.timeoutHandle=og(Dm.bind(null,s,a,Vn,Ul,mf,n,Qn,cr,Kr,Ta,f,"Throttled",-0,0),c);break e}Dm(s,a,Vn,Ul,mf,n,Qn,cr,Kr,Ta,f,null,-0,0)}}break}while(!0);Ci(t)}function Dm(t,n,a,s,c,f,_,E,I,Z,de,ge,J,ae){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ni},Em(n,f,ge);var ze=(f&62914560)===f?Ll-A():(f&4194048)===f?Rm-A():0;if(ze=iS(ge,ze),ze!==null){Zi=f,t.cancelPendingCommit=ze(Fm.bind(null,t,n,f,a,s,c,_,E,I,de,ge,null,J,ae)),Ca(t,f,_,!Z);return}}Fm(t,n,f,a,s,c,_,E,I)}function yy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(t,n,a,s){n&=~pf,n&=~cr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Re(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Fs(t,a,n)}function Ol(){return(xt&6)===0?(So(0),!1):!0}function yf(){if(ht!==null){if(Et===0)var t=ht.return;else t=ht,Ii=tr=null,Nc(t),kr=null,to=0,t=ht;for(;t!==null;)lm(t.alternate,t),t=t.return;ht=null}}function $r(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Fy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Zi=0,yf(),Lt=t,ht=a=zi(t.current,null),pt=n,Et=0,Zn=null,Ta=!1,Qr=gt(t,n),df=!1,Kr=Qn=pf=cr=Aa=qt=0,Vn=vo=null,mf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Re(s),f=1<<c;n|=t[c],s&=~f}return Yi=n,el(),a}function Um(t,n){at=null,H.H=uo,n===Vr||n===ll?(n=Yd(),Et=3):n===Mc?(n=Yd(),Et=4):Et=n===Qc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,ht===null&&(qt=1,Ml(t,ii(n,t.current)))}function Om(){var t=qn.current;return t===null?!0:(pt&4194048)===pt?oi===null:(pt&62914560)===pt||(pt&536870912)!==0?t===oi:!1}function Nm(){var t=H.H;return H.H=uo,t===null?uo:t}function Pm(){var t=H.A;return H.A=_y,t}function Nl(){qt=4,Ta||(pt&4194048)!==pt&&qn.current!==null||(Qr=!0),(Aa&134217727)===0&&(cr&134217727)===0||Lt===null||Ca(Lt,pt,Qn,!1)}function Sf(t,n,a){var s=xt;xt|=2;var c=Nm(),f=Pm();(Lt!==t||pt!==n)&&(Ul=null,$r(t,n)),n=!1;var _=qt;e:do try{if(Et!==0&&ht!==null){var E=ht,I=Zn;switch(Et){case 8:yf(),_=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var Z=Et;if(Et=0,Zn=null,es(t,E,I,Z),a&&Qr){_=0;break e}break;default:Z=Et,Et=0,Zn=null,es(t,E,I,Z)}}Sy(),_=qt;break}catch(de){Um(t,de)}while(!0);return n&&t.shellSuspendCounter++,Ii=tr=null,xt=s,H.H=c,H.A=f,ht===null&&(Lt=null,pt=0,el()),_}function Sy(){for(;ht!==null;)zm(ht)}function xy(t,n){var a=xt;xt|=2;var s=Nm(),c=Pm();Lt!==t||pt!==n?(Ul=null,Dl=A()+500,$r(t,n)):Qr=gt(t,n);e:do try{if(Et!==0&&ht!==null){n=ht;var f=Zn;t:switch(Et){case 1:Et=0,Zn=null,es(t,n,f,1);break;case 2:case 9:if(jd(f)){Et=0,Zn=null,Bm(n);break}n=function(){Et!==2&&Et!==9||Lt!==t||(Et=7),Ci(t)},f.then(n,n);break e;case 3:Et=7;break e;case 4:Et=5;break e;case 7:jd(f)?(Et=0,Zn=null,Bm(n)):(Et=0,Zn=null,es(t,n,f,7));break;case 5:var _=null;switch(ht.tag){case 26:_=ht.memoizedState;case 5:case 27:var E=ht;if(_?Mg(_):E.stateNode.complete){Et=0,Zn=null;var I=E.sibling;if(I!==null)ht=I;else{var Z=E.return;Z!==null?(ht=Z,Pl(Z)):ht=null}break t}}Et=0,Zn=null,es(t,n,f,5);break;case 6:Et=0,Zn=null,es(t,n,f,6);break;case 8:yf(),qt=6;break e;default:throw Error(r(462))}}My();break}catch(de){Um(t,de)}while(!0);return Ii=tr=null,H.H=s,H.A=c,xt=a,ht!==null?0:(Lt=null,pt=0,el(),qt)}function My(){for(;ht!==null&&!Jt();)zm(ht)}function zm(t){var n=sm(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,n===null?Pl(t):ht=n}function Bm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=em(a,n,n.pendingProps,n.type,void 0,pt);break;case 11:n=em(a,n,n.pendingProps,n.type.render,n.ref,pt);break;case 5:Nc(n);default:lm(a,n),n=ht=Pd(n,Yi),n=sm(a,n,Yi)}t.memoizedProps=t.pendingProps,n===null?Pl(t):ht=n}function es(t,n,a,s){Ii=tr=null,Nc(n),kr=null,to=0;var c=n.return;try{if(cy(t,c,n,a,pt)){qt=1,Ml(t,ii(a,t.current)),ht=null;return}}catch(f){if(c!==null)throw ht=c,f;qt=1,Ml(t,ii(a,t.current)),ht=null;return}n.flags&32768?(_t||s===1?t=!0:Qr||(pt&536870912)!==0?t=!1:(Ta=t=!0,(s===2||s===9||s===3||s===6)&&(s=qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Im(n,t)):Pl(n)}function Pl(t){var n=t;do{if((n.flags&32768)!==0){Im(n,Ta);return}t=n.return;var a=dy(n.alternate,n,Yi);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=t}while(n!==null);qt===0&&(qt=5)}function Im(t,n){do{var a=py(t.alternate,t);if(a!==null){a.flags&=32767,ht=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ht=t;return}ht=t=a}while(t!==null);qt=6,ht=null}function Fm(t,n,a,s,c,f,_,E,I){t.cancelPendingCommit=null;do zl();while(on!==0);if((xt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=oc,mn(t,a,f,_,E,I),t===Lt&&(ht=Lt=null,pt=0),Jr=n,wa=t,Zi=a,gf=f,_f=c,wm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ay(Ee,function(){return Xm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=H.T,H.T=null,c=X.p,X.p=2,_=xt,xt|=4;try{my(t,n,a)}finally{xt=_,X.p=c,H.T=s}}on=1,Hm(),Gm(),Vm()}}function Hm(){if(on===1){on=0;var t=wa,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var s=X.p;X.p=2;var c=xt;xt|=4;try{Sm(n,t);var f=Uf,_=Ad(t.containerInfo),E=f.focusedElem,I=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&Td(E.ownerDocument.documentElement,E)){if(I!==null&&nc(E)){var Z=I.start,de=I.end;if(de===void 0&&(de=Z),"selectionStart"in E)E.selectionStart=Z,E.selectionEnd=Math.min(de,E.value.length);else{var ge=E.ownerDocument||document,J=ge&&ge.defaultView||window;if(J.getSelection){var ae=J.getSelection(),ze=E.textContent.length,Ye=Math.min(I.start,ze),wt=I.end===void 0?Ye:Math.min(I.end,ze);!ae.extend&&Ye>wt&&(_=wt,wt=Ye,Ye=_);var W=bd(E,Ye),G=bd(E,wt);if(W&&G&&(ae.rangeCount!==1||ae.anchorNode!==W.node||ae.anchorOffset!==W.offset||ae.focusNode!==G.node||ae.focusOffset!==G.offset)){var Y=ge.createRange();Y.setStart(W.node,W.offset),ae.removeAllRanges(),Ye>wt?(ae.addRange(Y),ae.extend(G.node,G.offset)):(Y.setEnd(G.node,G.offset),ae.addRange(Y))}}}}for(ge=[],ae=E;ae=ae.parentNode;)ae.nodeType===1&&ge.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ge.length;E++){var pe=ge[E];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}Yl=!!Df,Uf=Df=null}finally{xt=c,X.p=s,H.T=a}}t.current=n,on=2}}function Gm(){if(on===2){on=0;var t=wa,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var s=X.p;X.p=2;var c=xt;xt|=4;try{mm(t,n.alternate,n)}finally{xt=c,X.p=s,H.T=a}}on=3}}function Vm(){if(on===4||on===3){on=0,O();var t=wa,n=Jr,a=Zi,s=wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?on=5:(on=0,Jr=wa=null,km(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ra=null),Tr(a),n=n.stateNode,Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(_e,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=H.T,c=X.p,X.p=2,H.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var E=s[_];f(E.value,{componentStack:E.stack})}}finally{H.T=n,X.p=c}}(Zi&3)!==0&&zl(),Ci(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===vf?yo++:(yo=0,vf=t):yo=0,So(0)}}function km(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$s(n)))}function zl(){return Hm(),Gm(),Vm(),Xm()}function Xm(){if(on!==5)return!1;var t=wa,n=gf;gf=0;var a=Tr(Zi),s=H.T,c=X.p;try{X.p=32>a?32:a,H.T=null,a=_f,_f=null;var f=wa,_=Zi;if(on=0,Jr=wa=null,Zi=0,(xt&6)!==0)throw Error(r(331));var E=xt;if(xt|=4,Tm(f.current),Mm(f,f.current,_,a),xt=E,So(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(_e,f)}catch{}return!0}finally{X.p=c,H.T=s,km(t,n)}}function Wm(t,n,a){n=ii(a,n),n=Zc(t.stateNode,n,2),t=xa(t,n,2),t!==null&&(Mn(t,2),Ci(t))}function bt(t,n,a){if(t.tag===3)Wm(t,t,a);else for(;n!==null;){if(n.tag===3){Wm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ra===null||!Ra.has(s))){t=ii(a,t),a=jp(2),s=xa(n,a,2),s!==null&&(qp(a,s,n,t),Mn(s,2),Ci(s));break}}n=n.return}}function xf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new vy;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(df=!0,c.add(a),t=Ey.bind(null,t,n,a),n.then(t,t))}function Ey(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Lt===t&&(pt&a)===a&&(qt===4||qt===3&&(pt&62914560)===pt&&300>A()-Ll?(xt&2)===0&&$r(t,0):pf|=a,Kr===pt&&(Kr=0)),Ci(t)}function jm(t,n){n===0&&(n=xn()),t=Ja(t,n),t!==null&&(Mn(t,n),Ci(t))}function by(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),jm(t,a)}function Ty(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),jm(t,a)}function Ay(t,n){return ct(t,n)}var Bl=null,ts=null,Mf=!1,Il=!1,Ef=!1,La=0;function Ci(t){t!==ts&&t.next===null&&(ts===null?Bl=ts=t:ts=ts.next=t),Il=!0,Mf||(Mf=!0,wy())}function So(t,n){if(!Ef&&Il){Ef=!0;do for(var a=!1,s=Bl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Re(42|t)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Qm(s,f))}else f=pt,f=it(s,s===Lt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||gt(s,f)||(a=!0,Qm(s,f));s=s.next}while(a);Ef=!1}}function Ry(){qm()}function qm(){Il=Mf=!1;var t=0;La!==0&&Iy()&&(t=La);for(var n=A(),a=null,s=Bl;s!==null;){var c=s.next,f=Ym(s,n);f===0?(s.next=null,a===null?Bl=c:a.next=c,c===null&&(ts=a)):(a=s,(t!==0||(f&3)!==0)&&(Il=!0)),s=c}on!==0&&on!==5||So(t),La!==0&&(La=0)}function Ym(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Re(f),E=1<<_,I=c[_];I===-1?((E&a)===0||(E&s)!==0)&&(c[_]=Tt(E,n)):I<=n&&(t.expiredLanes|=E),f&=~E}if(n=Lt,a=pt,a=it(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Gt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||gt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Gt(s),Tr(a)){case 2:case 8:a=xe;break;case 32:a=Ee;break;case 268435456:a=Ce;break;default:a=Ee}return s=Zm.bind(null,t),a=ct(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Gt(s),t.callbackPriority=2,t.callbackNode=null,2}function Zm(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(zl()&&t.callbackNode!==a)return null;var s=pt;return s=it(t,t===Lt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Lm(t,s,n),Ym(t,A()),t.callbackNode!=null&&t.callbackNode===a?Zm.bind(null,t):null)}function Qm(t,n){if(zl())return null;Lm(t,n,!0)}function wy(){Hy(function(){(xt&6)!==0?ct(be,Ry):qm()})}function bf(){if(La===0){var t=Hr;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),La=t}return La}function Km(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jo(""+t)}function Jm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Cy(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Km((c[En]||null).action),_=s.submitter;_&&(n=(n=_[En]||null)?Km(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Qo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(La!==0){var I=_?Jm(c,_):new FormData(c);kc(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(E.preventDefault(),I=_?Jm(c,_):new FormData(c),kc(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Tf=0;Tf<sc.length;Tf++){var Af=sc[Tf],Ly=Af.toLowerCase(),Dy=Af[0].toUpperCase()+Af.slice(1);gi(Ly,"on"+Dy)}gi(Cd,"onAnimationEnd"),gi(Ld,"onAnimationIteration"),gi(Dd,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(q0,"onTransitionRun"),gi(Y0,"onTransitionStart"),gi(Z0,"onTransitionCancel"),gi(Ud,"onTransitionEnd"),bn("onMouseEnter",["mouseout","mouseover"]),bn("onMouseLeave",["mouseout","mouseover"]),bn("onPointerEnter",["pointerout","pointerover"]),bn("onPointerLeave",["pointerout","pointerover"]),$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$t("onBeforeInput",["compositionend","keypress","textInput","paste"]),$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function $m(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],I=E.instance,Z=E.currentTarget;if(E=E.listener,I!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Z;try{f(c)}catch(de){$o(de)}c.currentTarget=null,f=I}else for(_=0;_<s.length;_++){if(E=s[_],I=E.instance,Z=E.currentTarget,E=E.listener,I!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Z;try{f(c)}catch(de){$o(de)}c.currentTarget=null,f=I}}}}function dt(t,n){var a=n[Q];a===void 0&&(a=n[Q]=new Set);var s=t+"__bubble";a.has(s)||(eg(n,t,2,!1),a.add(s))}function Rf(t,n,a){var s=0;n&&(s|=4),eg(a,t,s,n)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function wf(t){if(!t[Fl]){t[Fl]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(Uy.has(a)||Rf(a,!1,t),Rf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Fl]||(n[Fl]=!0,Rf("selectionchange",!1,n))}}function eg(t,n,a,s){switch(Cg(n)){case 2:var c=sS;break;case 8:c=oS;break;default:c=kf}a=c.bind(null,n,a,t),c=void 0,!qu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Cf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=s.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=je(E),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){s=f=_;continue e}E=E.parentNode}}s=s.return}rd(function(){var Z=f,de=Wu(a),ge=[];e:{var J=Od.get(t);if(J!==void 0){var ae=Qo,ze=t;switch(t){case"keypress":if(Yo(a)===0)break e;case"keydown":case"keyup":ae=T0;break;case"focusin":ze="focus",ae=Ku;break;case"focusout":ze="blur",ae=Ku;break;case"beforeblur":case"afterblur":ae=Ku;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=w0;break;case Cd:case Ld:case Dd:ae=g0;break;case Ud:ae=L0;break;case"scroll":case"scrollend":ae=f0;break;case"wheel":ae=U0;break;case"copy":case"cut":case"paste":ae=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=cd;break;case"toggle":case"beforetoggle":ae=N0}var Ye=(n&4)!==0,wt=!Ye&&(t==="scroll"||t==="scrollend"),W=Ye?J!==null?J+"Capture":null:J;Ye=[];for(var G=Z,Y;G!==null;){var pe=G;if(Y=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Y===null||W===null||(pe=Vs(G,W),pe!=null&&Ye.push(Mo(G,pe,Y))),wt)break;G=G.return}0<Ye.length&&(J=new ae(J,ze,null,a,de),ge.push({event:J,listeners:Ye}))}}if((n&7)===0){e:{if(J=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",J&&a!==Xu&&(ze=a.relatedTarget||a.fromElement)&&(je(ze)||ze[L]))break e;if((ae||J)&&(J=de.window===de?de:(J=de.ownerDocument)?J.defaultView||J.parentWindow:window,ae?(ze=a.relatedTarget||a.toElement,ae=Z,ze=ze?je(ze):null,ze!==null&&(wt=u(ze),Ye=ze.tag,ze!==wt||Ye!==5&&Ye!==27&&Ye!==6)&&(ze=null)):(ae=null,ze=Z),ae!==ze)){if(Ye=ld,pe="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=cd,pe="onPointerLeave",W="onPointerEnter",G="pointer"),wt=ae==null?J:nt(ae),Y=ze==null?J:nt(ze),J=new Ye(pe,G+"leave",ae,a,de),J.target=wt,J.relatedTarget=Y,pe=null,je(de)===Z&&(Ye=new Ye(W,G+"enter",ze,a,de),Ye.target=Y,Ye.relatedTarget=wt,pe=Ye),wt=pe,ae&&ze)t:{for(Ye=Oy,W=ae,G=ze,Y=0,pe=W;pe;pe=Ye(pe))Y++;pe=0;for(var ke=G;ke;ke=Ye(ke))pe++;for(;0<Y-pe;)W=Ye(W),Y--;for(;0<pe-Y;)G=Ye(G),pe--;for(;Y--;){if(W===G||G!==null&&W===G.alternate){Ye=W;break t}W=Ye(W),G=Ye(G)}Ye=null}else Ye=null;ae!==null&&tg(ge,J,ae,Ye,!1),ze!==null&&wt!==null&&tg(ge,wt,ze,Ye,!0)}}e:{if(J=Z?nt(Z):window,ae=J.nodeName&&J.nodeName.toLowerCase(),ae==="select"||ae==="input"&&J.type==="file")var vt=vd;else if(gd(J))if(yd)vt=X0;else{vt=V0;var Be=G0}else ae=J.nodeName,!ae||ae.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?Z&&ku(Z.elementType)&&(vt=vd):vt=k0;if(vt&&(vt=vt(t,Z))){_d(ge,vt,a,de);break e}Be&&Be(t,J,Z),t==="focusout"&&Z&&J.type==="number"&&Z.memoizedProps.value!=null&&Vu(J,"number",J.value)}switch(Be=Z?nt(Z):window,t){case"focusin":(gd(Be)||Be.contentEditable==="true")&&(Ur=Be,ic=Z,Qs=null);break;case"focusout":Qs=ic=Ur=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Rd(ge,a,de);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":Rd(ge,a,de)}var st;if($u)e:{switch(t){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Dr?pd(t,a)&&(mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(fd&&a.locale!=="ko"&&(Dr||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Dr&&(st=sd()):(pa=de,Yu="value"in pa?pa.value:pa.textContent,Dr=!0)),Be=Hl(Z,mt),0<Be.length&&(mt=new ud(mt,t,null,a,de),ge.push({event:mt,listeners:Be}),st?mt.data=st:(st=md(a),st!==null&&(mt.data=st)))),(st=z0?B0(t,a):I0(t,a))&&(mt=Hl(Z,"onBeforeInput"),0<mt.length&&(Be=new ud("onBeforeInput","beforeinput",null,a,de),ge.push({event:Be,listeners:mt}),Be.data=st)),Cy(ge,t,Z,a,de)}$m(ge,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Hl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vs(t,a),c!=null&&s.unshift(Mo(t,c,f)),c=Vs(t,n),c!=null&&s.push(Mo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Oy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function tg(t,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var E=a,I=E.alternate,Z=E.stateNode;if(E=E.tag,I!==null&&I===s)break;E!==5&&E!==26&&E!==27||Z===null||(I=Z,c?(Z=Vs(a,f),Z!=null&&_.unshift(Mo(a,Z,I))):c||(Z=Vs(a,f),Z!=null&&_.push(Mo(a,Z,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Ny=/\r\n?/g,Py=/\u0000|\uFFFD/g;function ng(t){return(typeof t=="string"?t:""+t).replace(Ny,`
`).replace(Py,"")}function ig(t,n){return n=ng(n),ng(t)===n}function Rt(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||wr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&wr(t,""+s);break;case"className":qa(t,"class",s);break;case"tabIndex":qa(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":qa(t,a,s);break;case"style":id(t,s,f);break;case"data":if(n!=="object"){qa(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Rt(t,n,"name",c.name,c,null),Rt(t,n,"formEncType",c.formEncType,c,null),Rt(t,n,"formMethod",c.formMethod,c,null),Rt(t,n,"formTarget",c.formTarget,c,null)):(Rt(t,n,"encType",c.encType,c,null),Rt(t,n,"method",c.method,c,null),Rt(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ni);break;case"onScroll":s!=null&&dt("scroll",t);break;case"onScrollEnd":s!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=jo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":dt("beforetoggle",t),dt("toggle",t),ti(t,"popover",s);break;case"xlinkActuate":Un(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Un(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Un(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Un(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Un(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Un(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Un(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Un(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Un(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ti(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=u0.get(a)||a,ti(t,a,s))}}function Lf(t,n,a,s,c,f){switch(a){case"style":id(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?wr(t,s):(typeof s=="number"||typeof s=="bigint")&&wr(t,""+s);break;case"onScroll":s!=null&&dt("scroll",t);break;case"onScrollEnd":s!=null&&dt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ti(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Rt(t,n,f,_,a,null)}}c&&Rt(t,n,"srcSet",a.srcSet,a,null),s&&Rt(t,n,"src",a.src,a,null);return;case"input":dt("invalid",t);var E=f=_=c=null,I=null,Z=null;for(s in a)if(a.hasOwnProperty(s)){var de=a[s];if(de!=null)switch(s){case"name":c=de;break;case"type":_=de;break;case"checked":I=de;break;case"defaultChecked":Z=de;break;case"value":f=de;break;case"defaultValue":E=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Rt(t,n,s,de,a,null)}}$h(t,f,E,I,Z,_,c,!1);return;case"select":dt("invalid",t),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:Rt(t,n,c,E,a,null)}n=f,a=_,t.multiple=!!s,n!=null?Rr(t,!!s,n,!1):a!=null&&Rr(t,!!s,a,!0);return;case"textarea":dt("invalid",t),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Rt(t,n,_,E,a,null)}td(t,s,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Rt(t,n,I,s,a,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(s=0;s<xo.length;s++)dt(xo[s],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(s=a[Z],s!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Rt(t,n,Z,s,a,null)}return;default:if(ku(n)){for(de in a)a.hasOwnProperty(de)&&(s=a[de],s!==void 0&&Lf(t,n,de,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Rt(t,n,E,s,a,null))}function zy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,I=null,Z=null,de=null;for(ae in a){var ge=a[ae];if(a.hasOwnProperty(ae)&&ge!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":I=ge;default:s.hasOwnProperty(ae)||Rt(t,n,ae,null,s,ge)}}for(var J in s){var ae=s[J];if(ge=a[J],s.hasOwnProperty(J)&&(ae!=null||ge!=null))switch(J){case"type":f=ae;break;case"name":c=ae;break;case"checked":Z=ae;break;case"defaultChecked":de=ae;break;case"value":_=ae;break;case"defaultValue":E=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:ae!==ge&&Rt(t,n,J,ae,s,ge)}}Gu(t,_,E,I,Z,de,f,c);return;case"select":ae=_=E=J=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ae=I;default:s.hasOwnProperty(f)||Rt(t,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":J=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==I&&Rt(t,n,c,f,s,I)}n=E,a=_,s=ae,J!=null?Rr(t,!!a,J,!1):!!s!=!!a&&(n!=null?Rr(t,!!a,n,!0):Rr(t,!!a,a?[]:"",!1));return;case"textarea":ae=J=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Rt(t,n,E,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":J=c;break;case"defaultValue":ae=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Rt(t,n,_,c,s,f)}ed(t,J,ae);return;case"option":for(var ze in a)if(J=a[ze],a.hasOwnProperty(ze)&&J!=null&&!s.hasOwnProperty(ze))switch(ze){case"selected":t.selected=!1;break;default:Rt(t,n,ze,null,s,J)}for(I in s)if(J=s[I],ae=a[I],s.hasOwnProperty(I)&&J!==ae&&(J!=null||ae!=null))switch(I){case"selected":t.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Rt(t,n,I,J,s,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ye in a)J=a[Ye],a.hasOwnProperty(Ye)&&J!=null&&!s.hasOwnProperty(Ye)&&Rt(t,n,Ye,null,s,J);for(Z in s)if(J=s[Z],ae=a[Z],s.hasOwnProperty(Z)&&J!==ae&&(J!=null||ae!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,n));break;default:Rt(t,n,Z,J,s,ae)}return;default:if(ku(n)){for(var wt in a)J=a[wt],a.hasOwnProperty(wt)&&J!==void 0&&!s.hasOwnProperty(wt)&&Lf(t,n,wt,void 0,s,J);for(de in s)J=s[de],ae=a[de],!s.hasOwnProperty(de)||J===ae||J===void 0&&ae===void 0||Lf(t,n,de,J,s,ae);return}}for(var W in a)J=a[W],a.hasOwnProperty(W)&&J!=null&&!s.hasOwnProperty(W)&&Rt(t,n,W,null,s,J);for(ge in s)J=s[ge],ae=a[ge],!s.hasOwnProperty(ge)||J===ae||J==null&&ae==null||Rt(t,n,ge,J,s,ae)}function ag(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function By(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&ag(_)){for(_=0,E=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],Z=I.startTime;if(Z>E)break;var de=I.transferSize,ge=I.initiatorType;de&&ag(ge)&&(I=I.responseEnd,_+=de*(I<E?1:(E-Z)/(I-Z)))}if(--s,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Df=null,Uf=null;function Gl(t){return t.nodeType===9?t:t.ownerDocument}function rg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Of(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function Iy(){var t=window.event;return t&&t.type==="popstate"?t===Nf?!1:(Nf=t,!0):(Nf=null,!1)}var og=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(t){return lg.resolve(null).then(t).catch(Gy)}:og;function Gy(t){setTimeout(function(){throw t})}function Da(t){return t==="head"}function ug(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),rs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Eo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[Ne]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Eo(t.ownerDocument.body);a=c}while(a);rs(n)}function cg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Pf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),Xe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Vy(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ne])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function ky(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function fg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function zf(t){return t.data==="$?"||t.data==="$~"}function Bf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Xy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var If=null;function hg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function dg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function pg(t,n,a){switch(n=Gl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Xe(t)}var ui=new Map,mg=new Set;function Vl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=X.d;X.d={f:Wy,r:jy,D:qy,C:Yy,L:Zy,m:Qy,X:Jy,S:Ky,M:$y};function Wy(){var t=Qi.f(),n=Ol();return t||n}function jy(t){var n=qe(t);n!==null&&n.tag===5&&n.type==="form"?Up(n):Qi.r(t)}var ns=typeof document>"u"?null:document;function gg(t,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=On(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),mg.has(c)||(mg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",t),Ie(n),s.head.appendChild(n)))}}function qy(t){Qi.D(t),gg("dns-prefetch",t,null)}function Yy(t,n){Qi.C(t,n),gg("preconnect",t,n)}function Zy(t,n,a){Qi.L(t,n,a);var s=ns;if(s&&t&&n){var c='link[rel="preload"][as="'+On(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+On(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+On(a.imageSizes)+'"]')):c+='[href="'+On(t)+'"]';var f=c;switch(n){case"style":f=is(t);break;case"script":f=as(t)}ui.has(f)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(bo(f))||n==="script"&&s.querySelector(To(f))||(n=s.createElement("link"),yn(n,"link",t),Ie(n),s.head.appendChild(n)))}}function Qy(t,n){Qi.m(t,n);var a=ns;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+On(s)+'"][href="'+On(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(t)}if(!ui.has(f)&&(t=y({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}s=a.createElement("link"),yn(s,"link",t),Ie(s),a.head.appendChild(s)}}}function Ky(t,n,a){Qi.S(t,n,a);var s=ns;if(s&&t){var c=We(s).hoistableStyles,f=is(t);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(bo(f)))E.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Ff(t,a);var I=_=s.createElement("link");Ie(I),yn(I,"link",t),I._p=new Promise(function(Z,de){I.onload=Z,I.onerror=de}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,kl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function Jy(t,n){Qi.X(t,n);var a=ns;if(a&&t){var s=We(a).hoistableScripts,c=as(t),f=s.get(c);f||(f=a.querySelector(To(c)),f||(t=y({src:t,async:!0},n),(n=ui.get(c))&&Hf(t,n),f=a.createElement("script"),Ie(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function $y(t,n){Qi.M(t,n);var a=ns;if(a&&t){var s=We(a).hoistableScripts,c=as(t),f=s.get(c);f||(f=a.querySelector(To(c)),f||(t=y({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Hf(t,n),f=a.createElement("script"),Ie(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function _g(t,n,a,s){var c=(c=we.current)?Vl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=We(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=is(a.href);var f=We(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(bo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||eS(c,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=We(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function is(t){return'href="'+On(t)+'"'}function bo(t){return'link[rel="stylesheet"]['+t+"]"}function vg(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function eS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),Ie(n),t.head.appendChild(n))}function as(t){return'[src="'+On(t)+'"]'}function To(t){return"script[async]"+t}function yg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+On(a.href)+'"]');if(s)return n.instance=s,Ie(s),s;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ie(s),yn(s,"style",c),kl(s,a.precedence,t),n.instance=s;case"stylesheet":c=is(a.href);var f=t.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,Ie(f),f;s=vg(a),(c=ui.get(c))&&Ff(s,c),f=(t.ownerDocument||t).createElement("link"),Ie(f);var _=f;return _._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),yn(f,"link",s),n.state.loading|=4,kl(f,a.precedence,t),n.instance=f;case"script":return f=as(a.src),(c=t.querySelector(To(f)))?(n.instance=c,Ie(c),c):(s=a,(c=ui.get(f))&&(s=y({},a),Hf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ie(c),yn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,kl(s,a.precedence,t));return n.instance}function kl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ff(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xl=null;function Sg(t,n,a){if(Xl===null){var s=new Map,c=Xl=new Map;c.set(a,s)}else c=Xl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ne]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=s.get(_);E?E.push(f):s.set(_,[f])}}return s}function xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function nS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=is(s.href),f=n.querySelector(bo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Wl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ie(f);return}f=n.ownerDocument||n,s=vg(s),(c=ui.get(c))&&Ff(s,c),f=f.createElement("link"),Ie(f);var _=f;_._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),yn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Wl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Gf=0;function iS(t,n){return t.stylesheets&&t.count===0&&ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Gf===0&&(Gf=62500*By());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Gf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var jl=null;function ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,jl=new Map,n.forEach(aS,t),jl=null,Wl.call(t))}function aS(t,n){if(!(n.state.loading&4)){var a=jl.get(t);if(a)var s=a.get(null);else{a=new Map,jl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Wl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ao={$$typeof:C,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function rS(t,n,a,s,c,f,_,E,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.hiddenUpdates=Mt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Eg(t,n,a,s,c,f,_,E,I,Z,de,ge){return t=new rS(t,n,a,_,I,Z,de,ge,E),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=yc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Ec(f),t}function bg(t){return t?(t=Pr,t):Pr}function Tg(t,n,a,s,c,f){c=bg(c),s.context===null?s.context=c:s.pendingContext=c,s=Sa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=xa(t,s,n),a!==null&&(kn(a,t,n),io(a,t,n))}function Ag(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Vf(t,n){Ag(t,n),(t=t.alternate)&&Ag(t,n)}function Rg(t){if(t.tag===13||t.tag===31){var n=Ja(t,67108864);n!==null&&kn(n,t,67108864),Vf(t,67108864)}}function wg(t){if(t.tag===13||t.tag===31){var n=Kn();n=ha(n);var a=Ja(t,n);a!==null&&kn(a,t,n),Vf(t,n)}}var Yl=!0;function sS(t,n,a,s){var c=H.T;H.T=null;var f=X.p;try{X.p=2,kf(t,n,a,s)}finally{X.p=f,H.T=c}}function oS(t,n,a,s){var c=H.T;H.T=null;var f=X.p;try{X.p=8,kf(t,n,a,s)}finally{X.p=f,H.T=c}}function kf(t,n,a,s){if(Yl){var c=Xf(s);if(c===null)Cf(t,n,s,Zl,a),Lg(t,s);else if(uS(c,t,n,a,s))s.stopPropagation();else if(Lg(t,s),n&4&&-1<lS.indexOf(t)){for(;c!==null;){var f=qe(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var I=1<<31-Re(_);E.entanglements[1]|=I,_&=~I}Ci(f),(xt&6)===0&&(Dl=A()+500,So(0))}}break;case 31:case 13:E=Ja(f,2),E!==null&&kn(E,f,2),Ol(),Vf(f,2)}if(f=Xf(s),f===null&&Cf(t,n,s,Zl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Cf(t,n,s,null,a)}}function Xf(t){return t=Wu(t),Wf(t)}var Zl=null;function Wf(t){if(Zl=null,t=je(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Zl=t,null}function Cg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case be:return 2;case xe:return 8;case Ee:case He:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var jf=!1,Ua=null,Oa=null,Na=null,Ro=new Map,wo=new Map,Pa=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lg(t,n){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Co(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=qe(n),n!==null&&Rg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function uS(t,n,a,s,c){switch(n){case"focusin":return Ua=Co(Ua,t,n,a,s,c),!0;case"dragenter":return Oa=Co(Oa,t,n,a,s,c),!0;case"mouseover":return Na=Co(Na,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,Co(Ro.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,wo.set(f,Co(wo.get(f)||null,t,n,a,s,c)),!0}return!1}function Dg(t){var n=je(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Gs(t.priority,function(){wg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Gs(t.priority,function(){wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Xf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Xu=s,a.target.dispatchEvent(s),Xu=null}else return n=qe(a),n!==null&&Rg(n),t.blockedOn=a,!1;n.shift()}return!0}function Ug(t,n,a){Ql(t)&&a.delete(n)}function cS(){jf=!1,Ua!==null&&Ql(Ua)&&(Ua=null),Oa!==null&&Ql(Oa)&&(Oa=null),Na!==null&&Ql(Na)&&(Na=null),Ro.forEach(Ug),wo.forEach(Ug)}function Kl(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,cS)))}var Jl=null;function Og(t){Jl!==t&&(Jl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Jl===t&&(Jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Wf(s||a)===null)continue;break}var f=qe(a);f!==null&&(t.splice(n,3),n-=3,kc(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function rs(t){function n(I){return Kl(I,t)}Ua!==null&&Kl(Ua,t),Oa!==null&&Kl(Oa,t),Na!==null&&Kl(Na,t),Ro.forEach(n),wo.forEach(n);for(var a=0;a<Pa.length;a++){var s=Pa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Dg(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[En]||null;if(typeof f=="function")_||Og(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[En]||null)E=_.formAction;else if(Wf(c)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Og(a)}}}function Ng(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function qf(t){this._internalRoot=t}$l.prototype.render=qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();Tg(a,s,t,n,null,null)},$l.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Tg(t.current,2,null,t,null,null),Ol(),n[L]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var n=ja();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&Dg(t)}};var Pg=e.version;if(Pg!=="19.2.3")throw Error(r(527,Pg,"19.2.3"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var fS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{_e=eu.inject(fS),Le=eu}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Vp,f=kp,_=Xp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Eg(t,1,!1,null,null,a,s,null,c,f,_,Ng),t[L]=n.current,wf(t),new qf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Vp,_=kp,E=Xp,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Eg(t,1,!0,n,a??null,s,c,I,f,_,E,Ng),n.context=bg(null),a=n.current,s=Kn(),s=ha(s),c=Sa(s),c.callback=null,xa(a,c,s),a=s,n.current.lanes=a,Mn(n,a),Ci(n),t[L]=n.current,wf(t),new $l(n)},Do.version="19.2.3",Do}var Wg;function xS(){if(Wg)return Qf.exports;Wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qf.exports=SS(),Qf.exports}var MS=xS();function ES(){return Qe.jsx("div",{className:"header",children:Qe.jsx("h3",{className:"logo",children:"Skin Generator"})})}function fr({className:o="open-menu-icon"}){return Qe.jsx("svg",{className:o,width:"10",height:"18",viewBox:"0 0 5 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Qe.jsx("path",{d:"M0 8.33333V0L4.16667 4.16667L0 8.33333Z",fill:"#49454F"})})}const bS=({setMenu:o,menu:e})=>Qe.jsxs("div",{className:"menu",children:[Qe.jsxs("div",{className:e==="Base"?"active-menu-item":"menu-item",onClick:()=>o("Base"),children:[Qe.jsx("p",{children:"Base"}),Qe.jsx(fr,{})]}),Qe.jsxs("div",{className:e==="Eyes"?"active-menu-item":"menu-item",onClick:()=>o("Eyes"),children:[Qe.jsx("p",{children:"Eyes"}),Qe.jsx(fr,{})]}),Qe.jsxs("div",{className:e==="Hair"?"active-menu-item":"menu-item",onClick:()=>o("Hair"),children:[Qe.jsx("p",{children:"Hair"}),Qe.jsx(fr,{})]}),Qe.jsxs("div",{className:e==="Hat"?"active-menu-item":"menu-item",onClick:()=>o("Hat"),children:[Qe.jsx("p",{children:"Hat"}),Qe.jsx(fr,{})]}),Qe.jsxs("div",{className:e==="Body"?"active-menu-item":"menu-item",onClick:()=>o("Body"),children:[Qe.jsx("p",{children:"Body"}),Qe.jsx(fr,{})]}),Qe.jsxs("div",{className:e==="Pants"?"active-menu-item":"menu-item",onClick:()=>o("Pants"),children:[Qe.jsx("p",{children:"Pants"}),Qe.jsx(fr,{})]}),Qe.jsxs("div",{className:e==="Boots"?"active-menu-item":"menu-item",onClick:()=>o("Boots"),children:[Qe.jsx("p",{children:"Boots"}),Qe.jsx(fr,{})]})]}),TS=({menu:o,setBaseLayer:e,setHairLayer:i,setEyesLayer:r,setHatLayer:l,setBodyLayer:u,setPantsLayer:d,setBootsLayer:h,baseLayer:p,hairLayer:m,eyesLayer:g,hatLayer:y,bodyLayer:S,pantsLayer:M,bootsLayer:R})=>{const b=[{name:"base_1",path:"/skin-generator/base/1.png",preview_path:"/skin-generator/previews/base/1.jpg",category:"Base",id:1},{name:"base_2",path:"/skin-generator/base/2.png",preview_path:"/skin-generator/previews/base/2.jpg",category:"Base",id:2},{name:"base_3",path:"/skin-generator/base/3.png",preview_path:"/skin-generator/previews/base/3.jpg",category:"Base",id:3},{name:"base_4",path:"/skin-generator/base/4.png",preview_path:"/skin-generator/previews/base/4.jpg",category:"Base",id:4},{name:"base_5",path:"/skin-generator/base/5.png",preview_path:"/skin-generator/previews/base/5.jpg",category:"Base",id:5},{name:"base_6",path:"/skin-generator/base/6.png",preview_path:"/skin-generator/previews/base/6.jpg",category:"Base",id:6},{name:"base_7",path:"/skin-generator/base/7.png",preview_path:"/skin-generator/previews/base/7.jpg",category:"Base",id:7},{name:"base_8",path:"/skin-generator/base/8.png",preview_path:"/skin-generator/previews/base/8.jpg",category:"Base",id:8},{name:"base_9",path:"/skin-generator/base/9.png",preview_path:"/skin-generator/previews/base/9.jpg",category:"Base",id:9},{name:"base_10",path:"/skin-generator/base/10.png",preview_path:"/skin-generator/previews/base/10.jpg",category:"Base",id:10},{name:"base_11",path:"/skin-generator/base/11.png",preview_path:"/skin-generator/previews/base/11.jpg",category:"Base",id:11},{name:"base_12",path:"/skin-generator/base/12.png",preview_path:"/skin-generator/previews/base/12.jpg",category:"Base",id:12},{name:"hair_1",path:"/skin-generator/hair/1.png",preview_path:"/skin-generator/previews/hair/1.jpg",category:"Hair",id:13},{name:"hair_2",path:"/skin-generator/hair/2.png",preview_path:"/skin-generator/previews/hair/2.jpg",category:"Hair",id:14},{name:"hair_3",path:"/skin-generator/hair/3.png",preview_path:"/skin-generator/previews/hair/3.jpg",category:"Hair",id:15},{name:"hair_4",path:"/skin-generator/hair/4.png",preview_path:"/skin-generator/previews/hair/4.jpg",category:"Hair",id:16},{name:"hair_5",path:"/skin-generator/hair/5.png",preview_path:"/skin-generator/previews/hair/5.jpg",category:"Hair",id:17},{name:"hair_6",path:"/skin-generator/hair/6.png",preview_path:"/skin-generator/previews/hair/6.jpg",category:"Hair",id:18},{name:"hair_7",path:"/skin-generator/hair/7.png",preview_path:"/skin-generator/previews/hair/7.jpg",category:"Hair",id:19},{name:"hair_8",path:"/skin-generator/hair/8.png",preview_path:"/skin-generator/previews/hair/8.jpg",category:"Hair",id:20},{name:"hair_9",path:"/skin-generator/hair/9.png",preview_path:"/skin-generator/previews/hair/9.jpg",category:"Hair",id:21},{name:"hair_10",path:"/skin-generator/hair/10.png",preview_path:"/skin-generator/previews/hair/10.jpg",category:"Hair",id:22},{name:"hair_11",path:"/skin-generator/hair/11.png",preview_path:"/skin-generator/previews/hair/11.jpg",category:"Hair",id:23},{name:"hair_12",path:"/skin-generator/hair/12.png",preview_path:"/skin-generator/previews/hair/12.jpg",category:"Hair",id:24},{name:"hair_13",path:"/skin-generator/hair/13.png",preview_path:"/skin-generator/previews/hair/13.jpg",category:"Hair",id:25},{name:"eyes_1",path:"/skin-generator/eyes/1.png",preview_path:"/skin-generator/previews/eyes/1.jpg",category:"Eyes",id:26},{name:"eyes_2",path:"/skin-generator/eyes/2.png",preview_path:"/skin-generator/previews/eyes/2.jpg",category:"Eyes",id:27},{name:"eyes_3",path:"/skin-generator/eyes/3.png",preview_path:"/skin-generator/previews/eyes/3.jpg",category:"Eyes",id:28},{name:"eyes_4",path:"/skin-generator/eyes/4.png",preview_path:"/skin-generator/previews/eyes/4.jpg",category:"Eyes",id:29},{name:"eyes_5",path:"/skin-generator/eyes/5.png",preview_path:"/skin-generator/previews/eyes/5.jpg",category:"Eyes",id:30},{name:"eyes_6",path:"/skin-generator/eyes/6.png",preview_path:"/skin-generator/previews/eyes/6.jpg",category:"Eyes",id:31},{name:"eyes_7",path:"/skin-generator/eyes/7.png",preview_path:"/skin-generator/previews/eyes/7.jpg",category:"Eyes",id:32},{name:"eyes_8",path:"/skin-generator/eyes/8.png",preview_path:"/skin-generator/previews/eyes/8.jpg",category:"Eyes",id:33},{name:"eyes_9",path:"/skin-generator/eyes/9.png",preview_path:"/skin-generator/previews/eyes/9.jpg",category:"Eyes",id:34},{name:"eyes_10",path:"/skin-generator/eyes/10.png",preview_path:"/skin-generator/previews/eyes/10.jpg",category:"Eyes",id:35},{name:"eyes_11",path:"/skin-generator/eyes/11.png",preview_path:"/skin-generator/previews/eyes/11.jpg",category:"Eyes",id:36},{name:"eyes_12",path:"/skin-generator/eyes/12.png",preview_path:"/skin-generator/previews/eyes/12.jpg",category:"Eyes",id:37},{name:"hat_1",path:"/skin-generator/hat/1.png",preview_path:"/skin-generator/previews/hat/1.jpg",category:"Hat",id:38},{name:"hat_2",path:"/skin-generator/hat/2.png",preview_path:"/skin-generator/previews/hat/2.jpg",category:"Hat",id:39},{name:"hat_3",path:"/skin-generator/hat/3.png",preview_path:"/skin-generator/previews/hat/3.jpg",category:"Hat",id:40},{name:"hat_4",path:"/skin-generator/hat/4.png",preview_path:"/skin-generator/previews/hat/4.jpg",category:"Hat",id:41},{name:"hat_5",path:"/skin-generator/hat/5.png",preview_path:"/skin-generator/previews/hat/5.jpg",category:"Hat",id:42},{name:"hat_6",path:"/skin-generator/hat/6.png",preview_path:"/skin-generator/previews/hat/6.jpg",category:"Hat",id:43},{name:"hat_7",path:"/skin-generator/hat/7.png",preview_path:"/skin-generator/previews/hat/7.jpg",category:"Hat",id:44},{name:"hat_8",path:"/skin-generator/hat/8.png",preview_path:"/skin-generator/previews/hat/8.jpg",category:"Hat",id:45},{name:"hat_9",path:"/skin-generator/hat/9.png",preview_path:"/skin-generator/previews/hat/9.jpg",category:"Hat",id:46},{name:"hat_10",path:"/skin-generator/hat/10.png",preview_path:"/skin-generator/previews/hat/10.jpg",category:"Hat",id:47},{name:"hat_11",path:"/skin-generator/hat/11.png",preview_path:"/skin-generator/previews/hat/11.jpg",category:"Hat",id:48},{name:"hat_12",path:"/skin-generator/hat/12.png",preview_path:"/skin-generator/previews/hat/12.jpg",category:"Hat",id:49},{name:"hat_13",path:"/skin-generator/hat/13.png",preview_path:"/skin-generator/previews/hat/13.jpg",category:"Hat",id:50},{name:"hat_14",path:"/skin-generator/hat/14.png",preview_path:"/skin-generator/previews/hat/14.jpg",category:"Hat",id:51},{name:"hat_15",path:"/skin-generator/hat/15.png",preview_path:"/skin-generator/previews/hat/15.jpg",category:"Hat",id:52},{name:"body_1",path:"/skin-generator/body/1.png",preview_path:"/skin-generator/previews/body/1.jpg",category:"Body",id:53},{name:"body_2",path:"/skin-generator/body/2.png",preview_path:"/skin-generator/previews/body/2.jpg",category:"Body",id:54},{name:"body_3",path:"/skin-generator/body/3.png",preview_path:"/skin-generator/previews/body/3.jpg",category:"Body",id:55},{name:"body_4",path:"/skin-generator/body/4.png",preview_path:"/skin-generator/previews/body/4.jpg",category:"Body",id:56},{name:"body_5",path:"/skin-generator/body/5.png",preview_path:"/skin-generator/previews/body/5.jpg",category:"Body",id:57},{name:"body_6",path:"/skin-generator/body/6.png",preview_path:"/skin-generator/previews/body/6.jpg",category:"Body",id:58},{name:"body_7",path:"/skin-generator/body/7.png",preview_path:"/skin-generator/previews/body/7.jpg",category:"Body",id:59},{name:"body_8",path:"/skin-generator/body/8.png",preview_path:"/skin-generator/previews/body/8.jpg",category:"Body",id:60},{name:"body_9",path:"/skin-generator/body/9.png",preview_path:"/skin-generator/previews/body/9.jpg",category:"Body",id:61},{name:"body_10",path:"/skin-generator/body/10.png",preview_path:"/skin-generator/previews/body/10.jpg",category:"Body",id:62},{name:"body_11",path:"/skin-generator/body/11.png",preview_path:"/skin-generator/previews/body/11.jpg",category:"Body",id:63},{name:"body_12",path:"/skin-generator/body/12.png",preview_path:"/skin-generator/previews/body/12.jpg",category:"Body",id:64},{name:"body_13",path:"/skin-generator/body/13.png",preview_path:"/skin-generator/previews/body/13.jpg",category:"Body",id:65},{name:"body_14",path:"/skin-generator/body/14.png",preview_path:"/skin-generator/previews/body/14.jpg",category:"Body",id:66},{name:"body_15",path:"/skin-generator/body/15.png",preview_path:"/skin-generator/previews/body/15.jpg",category:"Body",id:67},{name:"body_16",path:"/skin-generator/body/16.png",preview_path:"/skin-generator/previews/body/16.jpg",category:"Body",id:68},{name:"body_17",path:"/skin-generator/body/17.png",preview_path:"/skin-generator/previews/body/17.jpg",category:"Body",id:69},{name:"body_18",path:"/skin-generator/body/18.png",preview_path:"/skin-generator/previews/body/18.jpg",category:"Body",id:70},{name:"body_19",path:"/skin-generator/body/19.png",preview_path:"/skin-generator/previews/body/19.jpg",category:"Body",id:71},{name:"body_20",path:"/skin-generator/body/20.png",preview_path:"/skin-generator/previews/body/20.jpg",category:"Body",id:72},{name:"pants_1",path:"/skin-generator/pants/1.png",preview_path:"/skin-generator/previews/pants/1.jpg",category:"Pants",id:73},{name:"pants_2",path:"/skin-generator/pants/2.png",preview_path:"/skin-generator/previews/pants/2.jpg",category:"Pants",id:74},{name:"pants_3",path:"/skin-generator/pants/3.png",preview_path:"/skin-generator/previews/pants/3.jpg",category:"Pants",id:75},{name:"pants_4",path:"/skin-generator/pants/4.png",preview_path:"/skin-generator/previews/pants/4.jpg",category:"Pants",id:76},{name:"pants_5",path:"/skin-generator/pants/5.png",preview_path:"/skin-generator/previews/pants/5.jpg",category:"Pants",id:77},{name:"pants_6",path:"/skin-generator/pants/6.png",preview_path:"/skin-generator/previews/pants/6.jpg",category:"Pants",id:78},{name:"pants_7",path:"/skin-generator/pants/7.png",preview_path:"/skin-generator/previews/pants/7.jpg",category:"Pants",id:79},{name:"pants_8",path:"/skin-generator/pants/8.png",preview_path:"/skin-generator/previews/pants/8.jpg",category:"Pants",id:80},{name:"pants_9",path:"/skin-generator/pants/9.png",preview_path:"/skin-generator/previews/pants/9.jpg",category:"Pants",id:81},{name:"pants_10",path:"/skin-generator/pants/10.png",preview_path:"/skin-generator/previews/pants/10.jpg",category:"Pants",id:82},{name:"pants_11",path:"/skin-generator/pants/11.png",preview_path:"/skin-generator/previews/pants/11.jpg",category:"Pants",id:83},{name:"pants_12",path:"/skin-generator/pants/12.png",preview_path:"/skin-generator/previews/pants/12.jpg",category:"Pants",id:84},{name:"pants_13",path:"/skin-generator/pants/13.png",preview_path:"/skin-generator/previews/pants/13.jpg",category:"Pants",id:85},{name:"pants_14",path:"/skin-generator/pants/14.png",preview_path:"/skin-generator/previews/pants/14.jpg",category:"Pants",id:86},{name:"boots_1",path:"/skin-generator/boots/1.png",preview_path:"/skin-generator/previews/boots/1.jpg",category:"Boots",id:87},{name:"boots_2",path:"/skin-generator/boots/2.png",preview_path:"/skin-generator/previews/boots/2.jpg",category:"Boots",id:88},{name:"boots_3",path:"/skin-generator/boots/3.png",preview_path:"/skin-generator/previews/boots/3.jpg",category:"Boots",id:89},{name:"boots_4",path:"/skin-generator/boots/4.png",preview_path:"/skin-generator/previews/boots/4.jpg",category:"Boots",id:90},{name:"boots_5",path:"/skin-generator/boots/5.png",preview_path:"/skin-generator/previews/boots/5.jpg",category:"Boots",id:91},{name:"boots_6",path:"/skin-generator/boots/6.png",preview_path:"/skin-generator/previews/boots/6.jpg",category:"Boots",id:92},{name:"boots_7",path:"/skin-generator/boots/7.png",preview_path:"/skin-generator/previews/boots/7.jpg",category:"Boots",id:93},{name:"boots_8",path:"/skin-generator/boots/8.png",preview_path:"/skin-generator/previews/boots/8.jpg",category:"Boots",id:94},{name:"boots_9",path:"/skin-generator/boots/9.png",preview_path:"/skin-generator/previews/boots/9.jpg",category:"Boots",id:95}],x=U=>{switch(o){case"Base":e(U);break;case"Hair":i(U===m?null:U);break;case"Eyes":r(U===g?null:U);break;case"Hat":l(U===y?null:U);break;case"Body":u(U===S?null:U);break;case"Pants":d(U===M?null:U);break;case"Boots":h(U===R?null:U);break}},v=U=>U.path===p||U.path===m||U.path===g||U.path===y||U.path===S||U.path===M||U.path===R?"active-choice-item":"choice-item";return Qe.jsx("div",{className:"choice-menu",children:b.filter(U=>U.category===o).map((U,C)=>Qe.jsx("div",{onClick:()=>x(U.path),className:v(U),children:Qe.jsx("div",{className:"skin-item-preview",children:Qe.jsx("img",{src:U.preview_path,alt:""})})},C))})};const Wh="156",ss={ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AS=0,jg=1,RS=2,Mv=1,wS=2,ia=3,Di=0,Xn=1,mi=2,oa=0,Ls=1,qg=2,Yg=3,Zg=4,CS=5,ws=100,LS=101,DS=102,Qg=103,Kg=104,US=200,OS=201,NS=202,PS=203,Ev=204,bv=205,zS=206,BS=207,IS=208,FS=209,HS=210,GS=0,VS=1,kS=2,Oh=3,XS=4,WS=5,jS=6,qS=7,Tv=0,YS=1,ZS=2,ka=0,QS=1,KS=2,JS=3,$S=4,ex=5,Av=300,Us=301,Os=302,Lu=303,Nh=304,Nu=306,Ph=1e3,Mi=1001,zh=1002,Vt=1003,Jg=1004,eh=1005,di=1006,tx=1007,Vo=1008,Xa=1009,nx=1010,ix=1011,jh=1012,Rv=1013,Va=1014,ra=1015,Ns=1016,wv=1017,Cv=1018,yr=1020,ax=1021,Ei=1023,rx=1024,sx=1025,Sr=1026,Ps=1027,ox=1028,Lv=1029,lx=1030,Dv=1031,Uv=1033,th=33776,nh=33777,ih=33778,ah=33779,$g=35840,e_=35841,t_=35842,n_=35843,ux=36196,i_=37492,a_=37496,r_=37808,s_=37809,o_=37810,l_=37811,u_=37812,c_=37813,f_=37814,h_=37815,d_=37816,p_=37817,m_=37818,g_=37819,__=37820,v_=37821,rh=36492,y_=36494,S_=36495,cx=36283,x_=36284,M_=36285,E_=36286,Ov=3e3,xr=3001,fx=3200,hx=3201,Nv=0,dx=1,Mr="",It="srgb",Ui="srgb-linear",Pu="display-p3",sh=7680,px=519,mx=512,gx=513,_x=514,vx=515,yx=516,Sx=517,xx=518,Mx=519,Bh=35044,b_="300 es",Ih=1035,sa=2e3,Du=2001;class br{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,Fh=180/Math.PI;function Wa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Bn(o,e,i){return Math.max(e,Math.min(i,o))}function Ex(o,e){return(o%e+e)%e}function oh(o,e,i){return(1-i)*o+i*e}function T_(o){return(o&o-1)===0&&o!==0}function Hh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function aa(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Dt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const bx={DEG2RAD:Ru};class Ge{constructor(e=0,i=0){Ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,i,r,l,u,d,h,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],y=r[7],S=r[2],M=r[5],R=r[8],b=l[0],x=l[3],v=l[6],U=l[1],C=l[4],N=l[7],B=l[2],V=l[5],D=l[8];return u[0]=d*b+h*U+p*B,u[3]=d*x+h*C+p*V,u[6]=d*v+h*N+p*D,u[1]=m*b+g*U+y*B,u[4]=m*x+g*C+y*V,u[7]=m*v+g*N+y*D,u[2]=S*b+M*U+R*B,u[5]=S*x+M*C+R*V,u[8]=S*v+M*N+R*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*d*g-i*h*m-r*u*g+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],y=g*d-h*m,S=h*p-g*u,M=m*u-d*p,R=i*y+r*S+l*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=y*b,e[1]=(l*m-g*r)*b,e[2]=(h*r-l*d)*b,e[3]=S*b,e[4]=(g*i-l*p)*b,e[5]=(l*u-h*i)*b,e[6]=M*b,e[7]=(r*p-m*i)*b,e[8]=(d*i-r*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(lh.makeScale(e,i)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,i){return this.premultiply(lh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new ut;function Pv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Tx(){const o=Uu("canvas");return o.style.display="block",o}const A_={};function Go(o){o in A_||(A_[o]=!0,console.warn(o))}function Ds(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function uh(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ax=new ut().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Rx=new ut().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function wx(o){return o.convertSRGBToLinear().applyMatrix3(Rx)}function Cx(o){return o.applyMatrix3(Ax).convertLinearToSRGB()}const Lx={[Ui]:o=>o,[It]:o=>o.convertSRGBToLinear(),[Pu]:wx},Dx={[Ui]:o=>o,[It]:o=>o.convertLinearToSRGB(),[Pu]:Cx},hi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Ui},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Lx[e],l=Dx[i];if(r===void 0||l===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${i}".`);return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let ls;class zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=Uu("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ds(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ds(i[r]/255)*255):i[r]=Ds(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ux=0;class Bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Wa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ch(l[d].image)):u.push(ch(l[d]))}else u=ch(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?zv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ox=0;class Ln extends br{constructor(e=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,r=Mi,l=Mi,u=di,d=Vo,h=Ei,p=Xa,m=Ln.DEFAULT_ANISOTROPY,g=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Wa(),this.name="",this.source=new Bv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===xr?It:Mr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Av)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ph:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ph:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?xr:Ov}set encoding(e){Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?It:Mr}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Av;Ln.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,i=0,r=0,l=1){Ft.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],y=p[8],S=p[1],M=p[5],R=p[9],b=p[2],x=p[6],v=p[10];if(Math.abs(g-S)<.01&&Math.abs(y-b)<.01&&Math.abs(R-x)<.01){if(Math.abs(g+S)<.1&&Math.abs(y+b)<.1&&Math.abs(R+x)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(m+1)/2,N=(M+1)/2,B=(v+1)/2,V=(g+S)/4,D=(y+b)/4,oe=(R+x)/4;return C>N&&C>B?C<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(C),l=V/r,u=D/r):N>B?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=V/l,u=oe/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=D/u,l=oe/u),this.set(r,l,u,i),this}let U=Math.sqrt((x-R)*(x-R)+(y-b)*(y-b)+(S-g)*(S-g));return Math.abs(U)<.001&&(U=1),this.x=(x-R)/U,this.y=(y-b)/U,this.z=(S-g)/U,this.w=Math.acos((m+M+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nx extends br{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ft(0,0,e,i),this.scissorTest=!1,this.viewport=new Ft(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(Go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===xr?It:Mr),this.texture=new Ln(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:di,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Bv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ua extends Nx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Iv extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Px extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],y=r[l+3];const S=u[d+0],M=u[d+1],R=u[d+2],b=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y;return}if(h===1){e[i+0]=S,e[i+1]=M,e[i+2]=R,e[i+3]=b;return}if(y!==b||p!==S||m!==M||g!==R){let x=1-h;const v=p*S+m*M+g*R+y*b,U=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const B=Math.sqrt(C),V=Math.atan2(B,v*U);x=Math.sin(x*V)/B,h=Math.sin(h*V)/B}const N=h*U;if(p=p*x+S*N,m=m*x+M*N,g=g*x+R*N,y=y*x+b*N,x===1-h){const B=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=B,m*=B,g*=B,y*=B}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],y=u[d],S=u[d+1],M=u[d+2],R=u[d+3];return e[i]=h*R+g*y+p*M-m*S,e[i+1]=p*R+g*S+m*y-h*M,e[i+2]=m*R+g*M+h*S-p*y,e[i+3]=g*R-h*y-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),y=h(u/2),S=p(r/2),M=p(l/2),R=p(u/2);switch(d){case"XYZ":this._x=S*g*y+m*M*R,this._y=m*M*y-S*g*R,this._z=m*g*R+S*M*y,this._w=m*g*y-S*M*R;break;case"YXZ":this._x=S*g*y+m*M*R,this._y=m*M*y-S*g*R,this._z=m*g*R-S*M*y,this._w=m*g*y+S*M*R;break;case"ZXY":this._x=S*g*y-m*M*R,this._y=m*M*y+S*g*R,this._z=m*g*R+S*M*y,this._w=m*g*y-S*M*R;break;case"ZYX":this._x=S*g*y-m*M*R,this._y=m*M*y+S*g*R,this._z=m*g*R-S*M*y,this._w=m*g*y+S*M*R;break;case"YZX":this._x=S*g*y+m*M*R,this._y=m*M*y+S*g*R,this._z=m*g*R-S*M*y,this._w=m*g*y-S*M*R;break;case"XZY":this._x=S*g*y-m*M*R,this._y=m*M*y-S*g*R,this._z=m*g*R+S*M*y,this._w=m*g*y+S*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],y=i[10],S=r+h+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(r>h&&r>y){const M=2*Math.sqrt(1+r-h-y);this._w=(g-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>y){const M=2*Math.sqrt(1+h-r-y);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+y-r-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-u*p,this._y=l*g+d*p+u*h-r*m,this._z=u*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),y=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=d*y+this._w*S,this._x=r*y+this._x*S,this._y=l*y+this._y*S,this._z=u*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,i=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(R_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(R_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=p*i+d*l-h*r,g=p*r+h*i-u*l,y=p*l+u*r-d*i,S=-u*i-d*r-h*l;return this.x=m*p+S*-u+g*-h-y*-d,this.y=g*p+S*-d+y*-u-m*-h,this.z=y*p+S*-h+m*-d-g*-u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new j,R_=new Er;class Xo{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ji.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ji.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ji.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox),us.applyMatrix4(e.matrixWorld),this.union(us);else{const l=e.geometry;if(l!==void 0)if(i&&l.attributes!==void 0&&l.attributes.position!==void 0){const u=l.attributes.position;for(let d=0,h=u.count;d<h;d++)Ji.fromBufferAttribute(u,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Ji)}else l.boundingBox===null&&l.computeBoundingBox(),us.copy(l.boundingBox),us.applyMatrix4(e.matrixWorld),this.union(us)}const r=e.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),tu.subVectors(this.max,Uo),cs.subVectors(e.a,Uo),fs.subVectors(e.b,Uo),hs.subVectors(e.c,Uo),Ba.subVectors(fs,cs),Ia.subVectors(hs,fs),hr.subVectors(cs,hs);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-hr.z,hr.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,hr.z,0,-hr.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-hr.y,hr.x,0];return!hh(i,cs,fs,hs,tu)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,cs,fs,hs,tu))?!1:(nu.crossVectors(Ba,Ia),i=[nu.x,nu.y,nu.z],hh(i,cs,fs,hs,tu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new j,new j,new j,new j,new j,new j,new j,new j],Ji=new j,us=new Xo,cs=new j,fs=new j,hs=new j,Ba=new j,Ia=new j,hr=new j,Uo=new j,tu=new j,nu=new j,dr=new j;function hh(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){dr.fromArray(o,u);const h=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),p=e.dot(dr),m=i.dot(dr),g=r.dot(dr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const zx=new Xo,Oo=new j,dh=new j;class qh{constructor(e=new j,i=-1){this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):zx.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Oo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(dh)),this.expandByPoint(Oo.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new j,ph=new j,iu=new j,Fa=new j,mh=new j,au=new j,gh=new j;class Fv{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ph.copy(e).add(i).multiplyScalar(.5),iu.copy(i).sub(e).normalize(),Fa.copy(this.origin).sub(ph);const u=e.distanceTo(i)*.5,d=-this.direction.dot(iu),h=Fa.dot(this.direction),p=-Fa.dot(iu),m=Fa.lengthSq(),g=Math.abs(1-d*d);let y,S,M,R;if(g>0)if(y=d*p-h,S=d*h-p,R=u*g,y>=0)if(S>=-R)if(S<=R){const b=1/g;y*=b,S*=b,M=y*(y+d*S+2*h)+S*(d*y+S+2*p)+m}else S=u,y=Math.max(0,-(d*S+h)),M=-y*y+S*(S+2*p)+m;else S=-u,y=Math.max(0,-(d*S+h)),M=-y*y+S*(S+2*p)+m;else S<=-R?(y=Math.max(0,-(-d*u+h)),S=y>0?-u:Math.min(Math.max(-u,-p),u),M=-y*y+S*(S+2*p)+m):S<=R?(y=0,S=Math.min(Math.max(-u,-p),u),M=S*(S+2*p)+m):(y=Math.max(0,-(d*u+h)),S=y>0?u:Math.min(Math.max(-u,-p),u),M=-y*y+S*(S+2*p)+m);else S=d>0?-u:u,y=Math.max(0,-(d*S+h)),M=-y*y+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(ph).addScaledVector(iu,S),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(u=(e.min.y-S.y)*g,d=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,d=(e.min.y-S.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),y>=0?(h=(e.min.z-S.z)*y,p=(e.max.z-S.z)*y):(h=(e.max.z-S.z)*y,p=(e.min.z-S.z)*y),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,r,l,u){mh.subVectors(i,e),au.subVectors(r,e),gh.crossVectors(mh,au);let d=this.direction.dot(gh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Fa.subVectors(this.origin,e);const p=h*this.direction.dot(au.crossVectors(Fa,au));if(p<0)return null;const m=h*this.direction.dot(mh.cross(Fa));if(m<0||p+m>d)return null;const g=-h*Fa.dot(gh);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,i,r,l,u,d,h,p,m,g,y,S,M,R,b,x){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,g,y,S,M,R,b,x)}set(e,i,r,l,u,d,h,p,m,g,y,S,M,R,b,x){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=y,v[14]=S,v[3]=M,v[7]=R,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ds.setFromMatrixColumn(e,0).length(),u=1/ds.setFromMatrixColumn(e,1).length(),d=1/ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const S=d*g,M=d*y,R=h*g,b=h*y;i[0]=p*g,i[4]=-p*y,i[8]=m,i[1]=M+R*m,i[5]=S-b*m,i[9]=-h*p,i[2]=b-S*m,i[6]=R+M*m,i[10]=d*p}else if(e.order==="YXZ"){const S=p*g,M=p*y,R=m*g,b=m*y;i[0]=S+b*h,i[4]=R*h-M,i[8]=d*m,i[1]=d*y,i[5]=d*g,i[9]=-h,i[2]=M*h-R,i[6]=b+S*h,i[10]=d*p}else if(e.order==="ZXY"){const S=p*g,M=p*y,R=m*g,b=m*y;i[0]=S-b*h,i[4]=-d*y,i[8]=R+M*h,i[1]=M+R*h,i[5]=d*g,i[9]=b-S*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const S=d*g,M=d*y,R=h*g,b=h*y;i[0]=p*g,i[4]=R*m-M,i[8]=S*m+b,i[1]=p*y,i[5]=b*m+S,i[9]=M*m-R,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const S=d*p,M=d*m,R=h*p,b=h*m;i[0]=p*g,i[4]=b-S*y,i[8]=R*y+M,i[1]=y,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=M*y+R,i[10]=S-b*y}else if(e.order==="XZY"){const S=d*p,M=d*m,R=h*p,b=h*m;i[0]=p*g,i[4]=-y,i[8]=m*g,i[1]=S*y+b,i[5]=d*g,i[9]=M*y-R,i[2]=R*y-M,i[6]=h*g,i[10]=b*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bx,e,Ix)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ha.crossVectors(r,Jn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ha.crossVectors(r,Jn)),Ha.normalize(),ru.crossVectors(Jn,Ha),l[0]=Ha.x,l[4]=ru.x,l[8]=Jn.x,l[1]=Ha.y,l[5]=ru.y,l[9]=Jn.y,l[2]=Ha.z,l[6]=ru.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],y=r[5],S=r[9],M=r[13],R=r[2],b=r[6],x=r[10],v=r[14],U=r[3],C=r[7],N=r[11],B=r[15],V=l[0],D=l[4],oe=l[8],w=l[12],P=l[1],ve=l[5],ye=l[9],te=l[13],le=l[2],re=l[6],H=l[10],X=l[14],q=l[3],me=l[7],ce=l[11],T=l[15];return u[0]=d*V+h*P+p*le+m*q,u[4]=d*D+h*ve+p*re+m*me,u[8]=d*oe+h*ye+p*H+m*ce,u[12]=d*w+h*te+p*X+m*T,u[1]=g*V+y*P+S*le+M*q,u[5]=g*D+y*ve+S*re+M*me,u[9]=g*oe+y*ye+S*H+M*ce,u[13]=g*w+y*te+S*X+M*T,u[2]=R*V+b*P+x*le+v*q,u[6]=R*D+b*ve+x*re+v*me,u[10]=R*oe+b*ye+x*H+v*ce,u[14]=R*w+b*te+x*X+v*T,u[3]=U*V+C*P+N*le+B*q,u[7]=U*D+C*ve+N*re+B*me,u[11]=U*oe+C*ye+N*H+B*ce,u[15]=U*w+C*te+N*X+B*T,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],g=e[2],y=e[6],S=e[10],M=e[14],R=e[3],b=e[7],x=e[11],v=e[15];return R*(+u*p*y-l*m*y-u*h*S+r*m*S+l*h*M-r*p*M)+b*(+i*p*M-i*m*S+u*d*S-l*d*M+l*m*g-u*p*g)+x*(+i*m*y-i*h*M-u*d*y+r*d*M+u*h*g-r*m*g)+v*(-l*h*g-i*p*y+i*h*S+l*d*y-r*d*S+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],y=e[9],S=e[10],M=e[11],R=e[12],b=e[13],x=e[14],v=e[15],U=y*x*m-b*S*m+b*p*M-h*x*M-y*p*v+h*S*v,C=R*S*m-g*x*m-R*p*M+d*x*M+g*p*v-d*S*v,N=g*b*m-R*y*m+R*h*M-d*b*M-g*h*v+d*y*v,B=R*y*p-g*b*p-R*h*S+d*b*S+g*h*x-d*y*x,V=i*U+r*C+l*N+u*B;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/V;return e[0]=U*D,e[1]=(b*S*u-y*x*u-b*l*M+r*x*M+y*l*v-r*S*v)*D,e[2]=(h*x*u-b*p*u+b*l*m-r*x*m-h*l*v+r*p*v)*D,e[3]=(y*p*u-h*S*u-y*l*m+r*S*m+h*l*M-r*p*M)*D,e[4]=C*D,e[5]=(g*x*u-R*S*u+R*l*M-i*x*M-g*l*v+i*S*v)*D,e[6]=(R*p*u-d*x*u-R*l*m+i*x*m+d*l*v-i*p*v)*D,e[7]=(d*S*u-g*p*u+g*l*m-i*S*m-d*l*M+i*p*M)*D,e[8]=N*D,e[9]=(R*y*u-g*b*u-R*r*M+i*b*M+g*r*v-i*y*v)*D,e[10]=(d*b*u-R*h*u+R*r*m-i*b*m-d*r*v+i*h*v)*D,e[11]=(g*h*u-d*y*u-g*r*m+i*y*m+d*r*M-i*h*M)*D,e[12]=B*D,e[13]=(g*b*l-R*y*l+R*r*S-i*b*S-g*r*x+i*y*x)*D,e[14]=(R*h*l-d*b*l-R*r*p+i*b*p+d*r*x-i*h*x)*D,e[15]=(d*y*l-g*h*l+g*r*p-i*y*p-d*r*S+i*h*S)*D,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,g=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,g=d+d,y=h+h,S=u*m,M=u*g,R=u*y,b=d*g,x=d*y,v=h*y,U=p*m,C=p*g,N=p*y,B=r.x,V=r.y,D=r.z;return l[0]=(1-(b+v))*B,l[1]=(M+N)*B,l[2]=(R-C)*B,l[3]=0,l[4]=(M-N)*V,l[5]=(1-(S+v))*V,l[6]=(x+U)*V,l[7]=0,l[8]=(R+C)*D,l[9]=(x-U)*D,l[10]=(1-(S+b))*D,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ds.set(l[0],l[1],l[2]).length();const d=ds.set(l[4],l[5],l[6]).length(),h=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],yi.copy(this);const m=1/u,g=1/d,y=1/h;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=y,yi.elements[9]*=y,yi.elements[10]*=y,i.setFromRotationMatrix(yi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=sa){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let M,R;if(h===sa)M=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===Du)M=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=sa){const p=this.elements,m=1/(i-e),g=1/(r-l),y=1/(d-u),S=(i+e)*m,M=(r+l)*g;let R,b;if(h===sa)R=(d+u)*y,b=-2*y;else if(h===Du)R=u*y,b=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=b,p[14]=-R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ds=new j,yi=new Kt,Bx=new j(0,0,0),Ix=new j(1,1,1),Ha=new j,ru=new j,Jn=new j,w_=new Kt,C_=new Er;class zu{constructor(e=0,i=0,r=0,l=zu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],y=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Bn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return w_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return C_.setFromEuler(this),this.setFromQuaternion(C_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zu.DEFAULT_ORDER="XYZ";class Hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fx=0;const L_=new j,ps=new Er,ea=new Kt,su=new j,No=new j,Hx=new j,Gx=new Er,D_=new j(1,0,0),U_=new j(0,1,0),O_=new j(0,0,1),Vx={type:"added"},kx={type:"removed"};class Dn extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new j,i=new zu,r=new Er,l=new j(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ut}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ps.setFromAxisAngle(e,i),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,i){return ps.setFromAxisAngle(e,i),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(D_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(O_,e)}translateOnAxis(e,i){return L_.copy(e).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(D_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(O_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?su.copy(e):su.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(No,su,this.up):ea.lookAt(su,No,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),ps.setFromRotationMatrix(ea),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i){let r=[];this[e]===i&&r.push(this);for(let l=0,u=this.children.length;l<u;l++){const d=this.children[l].getObjectsByProperty(e,i);d.length>0&&(r=r.concat(d))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),y=d(e.shapes),S=d(e.skeletons),M=d(e.animations),R=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new j(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new j,ta=new j,_h=new j,na=new j,ms=new j,gs=new j,N_=new j,vh=new j,yh=new j,Sh=new j;let ou=!1;class pi{constructor(e=new j,i=new j,r=new j){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Si.subVectors(l,i),ta.subVectors(r,i),_h.subVectors(e,i);const d=Si.dot(Si),h=Si.dot(ta),p=Si.dot(_h),m=ta.dot(ta),g=ta.dot(_h),y=d*m-h*h;if(y===0)return u.set(-2,-1,-1);const S=1/y,M=(m*p-h*g)*S,R=(d*g-h*p)*S;return u.set(1-M-R,R,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,na),na.x>=0&&na.y>=0&&na.x+na.y<=1}static getUV(e,i,r,l,u,d,h,p){return ou===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ou=!0),this.getInterpolation(e,i,r,l,u,d,h,p)}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,na),p.setScalar(0),p.addScaledVector(u,na.x),p.addScaledVector(d,na.y),p.addScaledVector(h,na.z),p}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),ta.subVectors(e,i),Si.cross(ta).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),Si.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,r,l,u){return ou===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ou=!0),pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}getInterpolation(e,i,r,l,u){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ms.subVectors(l,r),gs.subVectors(u,r),vh.subVectors(e,r);const p=ms.dot(vh),m=gs.dot(vh);if(p<=0&&m<=0)return i.copy(r);yh.subVectors(e,l);const g=ms.dot(yh),y=gs.dot(yh);if(g>=0&&y<=g)return i.copy(l);const S=p*y-g*m;if(S<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(ms,d);Sh.subVectors(e,u);const M=ms.dot(Sh),R=gs.dot(Sh);if(R>=0&&M<=R)return i.copy(u);const b=M*m-p*R;if(b<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(r).addScaledVector(gs,h);const x=g*R-M*y;if(x<=0&&y-g>=0&&M-R>=0)return N_.subVectors(u,l),h=(y-g)/(y-g+(M-R)),i.copy(l).addScaledVector(N_,h);const v=1/(x+b+S);return d=b*v,h=S*v,i.copy(r).addScaledVector(ms,d).addScaledVector(gs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xx=0;class Bs extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Ls,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ev,this.blendDst=bv,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Oh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sh,this.stencilZFail=sh,this.stencilZPass=sh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(r.blending=this.blending),this.side!==Di&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},lu={h:0,s:0,l:0};function xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class St{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,hi.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=hi.workingColorSpace){return this.r=e,this.g=i,this.b=r,hi.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=hi.workingColorSpace){if(e=Ex(e,1),i=Bn(i,0,1),r=Bn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=xh(d,u,e+1/3),this.g=xh(d,u,e),this.b=xh(d,u,e-1/3)}return hi.toWorkingColorSpace(this,l),this}setStyle(e,i=It){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=It){const r=Gv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=uh(e.r),this.g=uh(e.g),this.b=uh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return hi.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Bn(Cn.r*255,0,255))*65536+Math.round(Bn(Cn.g*255,0,255))*256+Math.round(Bn(Cn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=hi.workingColorSpace){hi.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const y=d-h;switch(m=g<=.5?y/(d+h):y/(2-d-h),d){case r:p=(l-u)/y+(l<u?6:0);break;case l:p=(u-r)/y+2;break;case u:p=(r-l)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=hi.workingColorSpace){return hi.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=It){hi.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==It?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(xi),xi.h+=e,xi.s+=i,xi.l+=r,this.setHSL(xi.h,xi.s,xi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(xi),e.getHSL(lu);const r=oh(xi.h,lu.h,i),l=oh(xi.s,lu.s,i),u=oh(xi.l,lu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new St;St.NAMES=Gv;class Vv extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new j,uu=new Ge;class bi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Bh,this.updateRange={offset:0,count:-1},this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)uu.fromBufferAttribute(this,i),uu.applyMatrix3(e),this.setXY(i,uu.x,uu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=aa(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Dt(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=aa(i,this.array)),i}setX(e,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=aa(i,this.array)),i}setY(e,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=aa(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=aa(i,this.array)),i}setW(e,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Dt(i,this.array),r=Dt(r,this.array),l=Dt(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Dt(i,this.array),r=Dt(r,this.array),l=Dt(l,this.array),u=Dt(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class kv extends bi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Xv extends bi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class la extends bi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Wx=0;const ci=new Kt,Mh=new Dn,_s=new j,$n=new Xo,Po=new Xo,pn=new j;class fa extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pv(e)?Xv:kv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new la(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(pn.addVectors($n.min,Po.min),$n.expandByPoint(pn),pn.addVectors($n.max,Po.max),$n.expandByPoint(pn)):($n.expandByPoint(Po.min),$n.expandByPoint(Po.max))}$n.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)pn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(pn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)pn.fromBufferAttribute(h,m),p&&(_s.fromBufferAttribute(e,m),pn.add(_s)),l=Math.max(l,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let P=0;P<h;P++)m[P]=new j,g[P]=new j;const y=new j,S=new j,M=new j,R=new Ge,b=new Ge,x=new Ge,v=new j,U=new j;function C(P,ve,ye){y.fromArray(l,P*3),S.fromArray(l,ve*3),M.fromArray(l,ye*3),R.fromArray(d,P*2),b.fromArray(d,ve*2),x.fromArray(d,ye*2),S.sub(y),M.sub(y),b.sub(R),x.sub(R);const te=1/(b.x*x.y-x.x*b.y);isFinite(te)&&(v.copy(S).multiplyScalar(x.y).addScaledVector(M,-b.y).multiplyScalar(te),U.copy(M).multiplyScalar(b.x).addScaledVector(S,-x.x).multiplyScalar(te),m[P].add(v),m[ve].add(v),m[ye].add(v),g[P].add(U),g[ve].add(U),g[ye].add(U))}let N=this.groups;N.length===0&&(N=[{start:0,count:r.length}]);for(let P=0,ve=N.length;P<ve;++P){const ye=N[P],te=ye.start,le=ye.count;for(let re=te,H=te+le;re<H;re+=3)C(r[re+0],r[re+1],r[re+2])}const B=new j,V=new j,D=new j,oe=new j;function w(P){D.fromArray(u,P*3),oe.copy(D);const ve=m[P];B.copy(ve),B.sub(D.multiplyScalar(D.dot(ve))).normalize(),V.crossVectors(oe,ve);const te=V.dot(g[P])<0?-1:1;p[P*4]=B.x,p[P*4+1]=B.y,p[P*4+2]=B.z,p[P*4+3]=te}for(let P=0,ve=N.length;P<ve;++P){const ye=N[P],te=ye.start,le=ye.count;for(let re=te,H=te+le;re<H;re+=3)w(r[re+0]),w(r[re+1]),w(r[re+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new j,u=new j,d=new j,h=new j,p=new j,m=new j,g=new j,y=new j;if(e)for(let S=0,M=e.count;S<M;S+=3){const R=e.getX(S+0),b=e.getX(S+1),x=e.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),g.subVectors(d,u),y.subVectors(l,u),g.cross(y),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,x),h.add(g),p.add(g),m.add(g),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),g.subVectors(d,u),y.subVectors(l,u),g.cross(y),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)pn.fromBufferAttribute(e,i),pn.normalize(),e.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,y=h.normalized,S=new m.constructor(p.length*g);let M=0,R=0;for(let b=0,x=p.length;b<x;b++){h.isInterleavedBufferAttribute?M=p[b]*h.data.stride+h.offset:M=p[b]*g;for(let v=0;v<g;v++)S[R++]=m[M++]}return new bi(S,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fa,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,y=m.length;g<y;g++){const S=m[g],M=e(S,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,S=m.length;y<S;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let S=0,M=y.length;S<M;S++)g.push(y[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const P_=new Kt,pr=new Fv,cu=new qh,z_=new j,vs=new j,ys=new j,Ss=new j,Eh=new j,fu=new j,hu=new Ge,du=new Ge,pu=new Ge,B_=new j,I_=new j,F_=new j,mu=new j,gu=new j;class Ut extends Dn{constructor(e=new fa,i=new Vv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){fu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],y=u[p];g!==0&&(Eh.fromBufferAttribute(y,e),d?fu.addScaledVector(Eh,g):fu.addScaledVector(Eh.sub(i),g))}i.add(fu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cu.copy(r.boundingSphere),cu.applyMatrix4(u),pr.copy(e.ray).recast(e.near),!(cu.containsPoint(pr.origin)===!1&&(pr.intersectSphere(cu,z_)===null||pr.origin.distanceToSquared(z_)>(e.far-e.near)**2))&&(P_.copy(u).invert(),pr.copy(e.ray).applyMatrix4(P_),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,pr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,b=S.length;R<b;R++){const x=S[R],v=d[x.materialIndex],U=Math.max(x.start,M.start),C=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let N=U,B=C;N<B;N+=3){const V=h.getX(N),D=h.getX(N+1),oe=h.getX(N+2);l=_u(this,v,e,r,m,g,y,V,D,oe),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let x=R,v=b;x<v;x+=3){const U=h.getX(x),C=h.getX(x+1),N=h.getX(x+2);l=_u(this,d,e,r,m,g,y,U,C,N),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,b=S.length;R<b;R++){const x=S[R],v=d[x.materialIndex],U=Math.max(x.start,M.start),C=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let N=U,B=C;N<B;N+=3){const V=N,D=N+1,oe=N+2;l=_u(this,v,e,r,m,g,y,V,D,oe),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let x=R,v=b;x<v;x+=3){const U=x,C=x+1,N=x+2;l=_u(this,d,e,r,m,g,y,U,C,N),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function jx(o,e,i,r,l,u,d,h){let p;if(e.side===Xn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===Di,h),p===null)return null;gu.copy(h),gu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(gu);return m<i.near||m>i.far?null:{distance:m,point:gu.clone(),object:o}}function _u(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,vs),o.getVertexPosition(p,ys),o.getVertexPosition(m,Ss);const g=jx(o,e,i,r,vs,ys,Ss,mu);if(g){l&&(hu.fromBufferAttribute(l,h),du.fromBufferAttribute(l,p),pu.fromBufferAttribute(l,m),g.uv=pi.getInterpolation(mu,vs,ys,Ss,hu,du,pu,new Ge)),u&&(hu.fromBufferAttribute(u,h),du.fromBufferAttribute(u,p),pu.fromBufferAttribute(u,m),g.uv1=pi.getInterpolation(mu,vs,ys,Ss,hu,du,pu,new Ge),g.uv2=g.uv1),d&&(B_.fromBufferAttribute(d,h),I_.fromBufferAttribute(d,p),F_.fromBufferAttribute(d,m),g.normal=pi.getInterpolation(mu,vs,ys,Ss,B_,I_,F_,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new j,materialIndex:0};pi.getNormal(vs,ys,Ss,y.normal),g.face=y}return g}class Qt extends fa{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],y=[];let S=0,M=0;R("z","y","x",-1,-1,r,i,e,d,u,0),R("z","y","x",1,-1,r,i,-e,d,u,1),R("x","z","y",1,1,e,r,i,l,d,2),R("x","z","y",1,-1,e,r,-i,l,d,3),R("x","y","z",1,-1,e,i,r,l,u,4),R("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new la(m,3)),this.setAttribute("normal",new la(g,3)),this.setAttribute("uv",new la(y,2));function R(b,x,v,U,C,N,B,V,D,oe,w){const P=N/D,ve=B/oe,ye=N/2,te=B/2,le=V/2,re=D+1,H=oe+1;let X=0,q=0;const me=new j;for(let ce=0;ce<H;ce++){const T=ce*ve-te;for(let z=0;z<re;z++){const ee=z*P-ye;me[b]=ee*U,me[x]=T*C,me[v]=le,m.push(me.x,me.y,me.z),me[b]=0,me[x]=0,me[v]=V>0?1:-1,g.push(me.x,me.y,me.z),y.push(z/D),y.push(1-ce/oe),X+=1}}for(let ce=0;ce<oe;ce++)for(let T=0;T<D;T++){const z=S+T+re*ce,ee=S+T+re*(ce+1),ue=S+(T+1)+re*(ce+1),Se=S+(T+1)+re*ce;p.push(z,ee,Se),p.push(ee,ue,Se),q+=6}h.addGroup(M,q,w),M+=q,S+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(o){const e={};for(let i=0;i<o.length;i++){const r=zs(o[i]);for(const l in r)e[l]=r[l]}return e}function qx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Wv(o){return o.getRenderTarget()===null?o.outputColorSpace:Ui}const jv={clone:zs,merge:zn};var Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=Zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class qv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=sa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(-i[8],-i[9],-i[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ei extends qv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ru*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,Ms=1;class Qx extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const l=new ei(xs,Ms,e,i);l.layers=this.layers,this.add(l);const u=new ei(xs,Ms,e,i);u.layers=this.layers,this.add(u);const d=new ei(xs,Ms,e,i);d.layers=this.layers,this.add(d);const h=new ei(xs,Ms,e,i);h.layers=this.layers,this.add(h);const p=new ei(xs,Ms,e,i);p.layers=this.layers,this.add(p);const m=new ei(xs,Ms,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Du)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,m]=this.children,g=e.getRenderTarget(),y=e.xr.enabled;e.xr.enabled=!1;const S=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(i,l),e.setRenderTarget(r,1),e.render(i,u),e.setRenderTarget(r,2),e.render(i,d),e.setRenderTarget(r,3),e.render(i,h),e.setRenderTarget(r,4),e.render(i,p),r.texture.generateMipmaps=S,e.setRenderTarget(r,5),e.render(i,m),e.setRenderTarget(g),e.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class Yv extends Ln{constructor(e,i,r,l,u,d,h,p,m,g){e=e!==void 0?e:[],i=i!==void 0?i:Us,super(e,i,r,l,u,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kx extends ua{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?It:Mr),this.texture=new Yv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:di}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qt(5,5,5),u=new ca({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:oa});u.uniforms.tEquirect.value=i;const d=new Ut(l,u),h=i.minFilter;return i.minFilter===Vo&&(i.minFilter=di),new Qx(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const bh=new j,Jx=new j,$x=new ut;class Ga{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=bh.subVectors(r,i).cross(Jx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$x.getNormalMatrix(e),l=this.coplanarPoint(bh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new qh,vu=new j;class Yh{constructor(e=new Ga,i=new Ga,r=new Ga,l=new Ga,u=new Ga,d=new Ga){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=sa){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],g=l[5],y=l[6],S=l[7],M=l[8],R=l[9],b=l[10],x=l[11],v=l[12],U=l[13],C=l[14],N=l[15];if(r[0].setComponents(p-u,S-m,x-M,N-v).normalize(),r[1].setComponents(p+u,S+m,x+M,N+v).normalize(),r[2].setComponents(p+d,S+g,x+R,N+U).normalize(),r[3].setComponents(p-d,S-g,x-R,N-U).normalize(),r[4].setComponents(p-h,S-y,x-b,N-C).normalize(),i===sa)r[5].setComponents(p+h,S+y,x+b,N+C).normalize();else if(i===Du)r[5].setComponents(h,y,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(vu.x=l.normal.x>0?e.max.x:e.min.x,vu.y=l.normal.y>0?e.max.y:e.min.y,vu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(vu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zv(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function eM(o,e){const i=e.isWebGL2,r=new WeakMap;function l(m,g){const y=m.array,S=m.usage,M=o.createBuffer();o.bindBuffer(g,M),o.bufferData(g,y,S),m.onUploadCallback();let R;if(y instanceof Float32Array)R=o.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)R=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=o.UNSIGNED_SHORT;else if(y instanceof Int16Array)R=o.SHORT;else if(y instanceof Uint32Array)R=o.UNSIGNED_INT;else if(y instanceof Int32Array)R=o.INT;else if(y instanceof Int8Array)R=o.BYTE;else if(y instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:M,type:R,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version}}function u(m,g,y){const S=g.array,M=g.updateRange;o.bindBuffer(y,m),M.count===-1?o.bufferSubData(y,0,S):(i?o.bufferSubData(y,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):o.bufferSubData(y,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function h(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const S=r.get(m);(!S||S.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);y===void 0?r.set(m,l(m,g)):y.version<m.version&&(u(y.buffer,m,g),y.version=m.version)}return{get:d,remove:h,update:p}}class Zh extends fa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,y=e/h,S=i/p,M=[],R=[],b=[],x=[];for(let v=0;v<g;v++){const U=v*S-d;for(let C=0;C<m;C++){const N=C*y-u;R.push(N,-U,0),b.push(0,0,1),x.push(C/h),x.push(1-v/p)}}for(let v=0;v<p;v++)for(let U=0;U<h;U++){const C=U+m*v,N=U+m*(v+1),B=U+1+m*(v+1),V=U+1+m*v;M.push(C,N,V),M.push(N,B,V)}this.setIndex(M),this.setAttribute("position",new la(R,3)),this.setAttribute("normal",new la(b,3)),this.setAttribute("uv",new la(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.width,e.height,e.widthSegments,e.heightSegments)}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
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
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,dM=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,MM=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,bM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HM=`#ifdef USE_GRADIENTMAP
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
}`,GM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,JM=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,$M=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uE=`#if defined( USE_POINTS_UV )
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
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
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
#endif`,mE=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BE=`float getShadowMask() {
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
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,rb=`#if DEPTH_PACKING == 3200
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
}`,sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,ob=`#define DISTANCE
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
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
}`,fb=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,db=`uniform vec3 diffuse;
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
}`,pb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,mb=`#define LAMBERT
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
}`,gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,_b=`#define MATCAP
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
}`,vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,yb=`#define NORMAL
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
}`,Sb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,xb=`#define PHONG
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
}`,Mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,Eb=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,Tb=`#define TOON
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
}`,Ab=`uniform float size;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,Cb=`uniform vec3 color;
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
}`,Lb=`uniform float rotation;
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
}`,Db=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:tM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:aM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:oM,aomap_pars_fragment:lM,begin_vertex:uM,beginnormal_vertex:cM,bsdfs:fM,iridescence_fragment:hM,bumpmap_pars_fragment:dM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:_M,color_fragment:vM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:xM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:bM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:wM,colorspace_fragment:CM,colorspace_pars_fragment:LM,envmap_fragment:DM,envmap_common_pars_fragment:UM,envmap_pars_fragment:OM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:jM,envmap_vertex:PM,fog_vertex:zM,fog_pars_vertex:BM,fog_fragment:IM,fog_pars_fragment:FM,gradientmap_pars_fragment:HM,lightmap_fragment:GM,lightmap_pars_fragment:VM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:XM,lights_pars_begin:WM,lights_toon_fragment:qM,lights_toon_pars_fragment:YM,lights_phong_fragment:ZM,lights_phong_pars_fragment:QM,lights_physical_fragment:KM,lights_physical_pars_fragment:JM,lights_fragment_begin:$M,lights_fragment_maps:eE,lights_fragment_end:tE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:oE,map_particle_fragment:lE,map_particle_pars_fragment:uE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:fE,morphcolor_vertex:hE,morphnormal_vertex:dE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:yE,normal_vertex:SE,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:TE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:wE,project_vertex:CE,dithering_fragment:LE,dithering_pars_fragment:DE,roughnessmap_fragment:UE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:PE,shadowmap_vertex:zE,shadowmask_pars_fragment:BE,skinbase_vertex:IE,skinning_pars_vertex:FE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:VE,specularmap_pars_fragment:kE,tonemapping_fragment:XE,tonemapping_pars_fragment:WE,transmission_fragment:jE,transmission_pars_fragment:qE,uv_pars_fragment:YE,uv_pars_vertex:ZE,uv_vertex:QE,worldpos_vertex:KE,background_vert:JE,background_frag:$E,backgroundCube_vert:eb,backgroundCube_frag:tb,cube_vert:nb,cube_frag:ib,depth_vert:ab,depth_frag:rb,distanceRGBA_vert:sb,distanceRGBA_frag:ob,equirect_vert:lb,equirect_frag:ub,linedashed_vert:cb,linedashed_frag:fb,meshbasic_vert:hb,meshbasic_frag:db,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:vb,meshnormal_frag:yb,meshphong_vert:Sb,meshphong_frag:xb,meshphysical_vert:Mb,meshphysical_frag:Eb,meshtoon_vert:bb,meshtoon_frag:Tb,points_vert:Ab,points_frag:Rb,shadow_vert:wb,shadow_frag:Cb,sprite_vert:Lb,sprite_frag:Db},Ue={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Li={basic:{uniforms:zn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:zn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new St(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:zn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:zn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:zn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new St(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:zn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:zn([Ue.points,Ue.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:zn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:zn([Ue.common,Ue.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:zn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:zn([Ue.sprite,Ue.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:zn([Ue.common,Ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:zn([Ue.lights,Ue.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Li.physical={uniforms:zn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const yu={r:0,b:0,g:0};function Ub(o,e,i,r,l,u,d){const h=new St(0);let p=u===!0?0:1,m,g,y=null,S=0,M=null;function R(x,v){let U=!1,C=v.isScene===!0?v.background:null;C&&C.isTexture&&(C=(v.backgroundBlurriness>0?i:e).get(C)),C===null?b(h,p):C&&C.isColor&&(b(C,1),U=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||U)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Nu)?(g===void 0&&(g=new Ut(new Qt(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:zs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,V,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=C.colorSpace!==It,(y!==C||S!==C.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,y=C,S=C.version,M=o.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ut(new Zh(2,2),new ca({name:"BackgroundMaterial",uniforms:zs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=C.colorSpace!==It,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||S!==C.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,y=C,S=C.version,M=o.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function b(x,v){x.getRGB(yu,Wv(o)),r.buffers.color.setClear(yu.r,yu.g,yu.b,v,d)}return{getClearColor:function(){return h},setClearColor:function(x,v=1){h.set(x),p=v,b(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(x){p=x,b(h,p)},render:R}}function Ob(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,h={},p=x(null);let m=p,g=!1;function y(le,re,H,X,q){let me=!1;if(d){const ce=b(X,H,re);m!==ce&&(m=ce,M(m.object)),me=v(le,X,H,q),me&&U(le,X,H,q)}else{const ce=re.wireframe===!0;(m.geometry!==X.id||m.program!==H.id||m.wireframe!==ce)&&(m.geometry=X.id,m.program=H.id,m.wireframe=ce,me=!0)}q!==null&&i.update(q,o.ELEMENT_ARRAY_BUFFER),(me||g)&&(g=!1,oe(le,re,H,X),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(q).buffer))}function S(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(le){return r.isWebGL2?o.bindVertexArray(le):u.bindVertexArrayOES(le)}function R(le){return r.isWebGL2?o.deleteVertexArray(le):u.deleteVertexArrayOES(le)}function b(le,re,H){const X=H.wireframe===!0;let q=h[le.id];q===void 0&&(q={},h[le.id]=q);let me=q[re.id];me===void 0&&(me={},q[re.id]=me);let ce=me[X];return ce===void 0&&(ce=x(S()),me[X]=ce),ce}function x(le){const re=[],H=[],X=[];for(let q=0;q<l;q++)re[q]=0,H[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:H,attributeDivisors:X,object:le,attributes:{},index:null}}function v(le,re,H,X){const q=m.attributes,me=re.attributes;let ce=0;const T=H.getAttributes();for(const z in T)if(T[z].location>=0){const ue=q[z];let Se=me[z];if(Se===void 0&&(z==="instanceMatrix"&&le.instanceMatrix&&(Se=le.instanceMatrix),z==="instanceColor"&&le.instanceColor&&(Se=le.instanceColor)),ue===void 0||ue.attribute!==Se||Se&&ue.data!==Se.data)return!0;ce++}return m.attributesNum!==ce||m.index!==X}function U(le,re,H,X){const q={},me=re.attributes;let ce=0;const T=H.getAttributes();for(const z in T)if(T[z].location>=0){let ue=me[z];ue===void 0&&(z==="instanceMatrix"&&le.instanceMatrix&&(ue=le.instanceMatrix),z==="instanceColor"&&le.instanceColor&&(ue=le.instanceColor));const Se={};Se.attribute=ue,ue&&ue.data&&(Se.data=ue.data),q[z]=Se,ce++}m.attributes=q,m.attributesNum=ce,m.index=X}function C(){const le=m.newAttributes;for(let re=0,H=le.length;re<H;re++)le[re]=0}function N(le){B(le,0)}function B(le,re){const H=m.newAttributes,X=m.enabledAttributes,q=m.attributeDivisors;H[le]=1,X[le]===0&&(o.enableVertexAttribArray(le),X[le]=1),q[le]!==re&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](le,re),q[le]=re)}function V(){const le=m.newAttributes,re=m.enabledAttributes;for(let H=0,X=re.length;H<X;H++)re[H]!==le[H]&&(o.disableVertexAttribArray(H),re[H]=0)}function D(le,re,H,X,q,me,ce){ce===!0?o.vertexAttribIPointer(le,re,H,q,me):o.vertexAttribPointer(le,re,H,X,q,me)}function oe(le,re,H,X){if(r.isWebGL2===!1&&(le.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const q=X.attributes,me=H.getAttributes(),ce=re.defaultAttributeValues;for(const T in me){const z=me[T];if(z.location>=0){let ee=q[T];if(ee===void 0&&(T==="instanceMatrix"&&le.instanceMatrix&&(ee=le.instanceMatrix),T==="instanceColor"&&le.instanceColor&&(ee=le.instanceColor)),ee!==void 0){const ue=ee.normalized,Se=ee.itemSize,we=i.get(ee);if(we===void 0)continue;const Oe=we.buffer,Pe=we.type,Ve=we.bytesPerElement,Ht=r.isWebGL2===!0&&(Pe===o.INT||Pe===o.UNSIGNED_INT||ee.gpuType===Rv);if(ee.isInterleavedBufferAttribute){const et=ee.data,K=et.stride,kt=ee.offset;if(et.isInstancedInterleavedBuffer){for(let Fe=0;Fe<z.locationSize;Fe++)B(z.location+Fe,et.meshPerAttribute);le.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Fe=0;Fe<z.locationSize;Fe++)N(z.location+Fe);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let Fe=0;Fe<z.locationSize;Fe++)D(z.location+Fe,Se/z.locationSize,Pe,ue,K*Ve,(kt+Se/z.locationSize*Fe)*Ve,Ht)}else{if(ee.isInstancedBufferAttribute){for(let et=0;et<z.locationSize;et++)B(z.location+et,ee.meshPerAttribute);le.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let et=0;et<z.locationSize;et++)N(z.location+et);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let et=0;et<z.locationSize;et++)D(z.location+et,Se/z.locationSize,Pe,ue,Se*Ve,Se/z.locationSize*et*Ve,Ht)}}else if(ce!==void 0){const ue=ce[T];if(ue!==void 0)switch(ue.length){case 2:o.vertexAttrib2fv(z.location,ue);break;case 3:o.vertexAttrib3fv(z.location,ue);break;case 4:o.vertexAttrib4fv(z.location,ue);break;default:o.vertexAttrib1fv(z.location,ue)}}}}V()}function w(){ye();for(const le in h){const re=h[le];for(const H in re){const X=re[H];for(const q in X)R(X[q].object),delete X[q];delete re[H]}delete h[le]}}function P(le){if(h[le.id]===void 0)return;const re=h[le.id];for(const H in re){const X=re[H];for(const q in X)R(X[q].object),delete X[q];delete re[H]}delete h[le.id]}function ve(le){for(const re in h){const H=h[re];if(H[le.id]===void 0)continue;const X=H[le.id];for(const q in X)R(X[q].object),delete X[q];delete H[le.id]}}function ye(){te(),g=!0,m!==p&&(m=p,M(m.object))}function te(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:y,reset:ye,resetDefaultState:te,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:ve,initAttributes:C,enableAttribute:N,disableUnusedAttributes:V}}function Nb(o,e,i,r){const l=r.isWebGL2;let u;function d(m){u=m}function h(m,g){o.drawArrays(u,m,g),i.update(g,u,1)}function p(m,g,y){if(y===0)return;let S,M;if(l)S=o,M="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[M](u,m,g,y),i.update(g,u,y)}this.setMode=d,this.render=h,this.renderInstances=p}function Pb(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const p=u(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),R=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),b=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),C=S>0,N=d||e.has("OES_texture_float"),B=C&&N,V=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:R,maxAttributes:b,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:U,vertexTextures:C,floatFragmentTextures:N,floatVertexTextures:B,maxSamples:V}}function zb(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Ga,h=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||r!==0||l;return l=S,r=y.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,S){i=g(y,S,0)},this.setState=function(y,S,M){const R=y.clippingPlanes,b=y.clipIntersection,x=y.clipShadows,v=o.get(y);if(!l||R===null||R.length===0||u&&!x)u?g(null):m();else{const U=u?0:r,C=U*4;let N=v.clippingState||null;p.value=N,N=g(R,S,C,M);for(let B=0;B!==C;++B)N[B]=i[B];v.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,S,M,R){const b=y!==null?y.length:0;let x=null;if(b!==0){if(x=p.value,R!==!0||x===null){const v=M+b*4,U=S.matrixWorldInverse;h.getNormalMatrix(U),(x===null||x.length<v)&&(x=new Float32Array(v));for(let C=0,N=M;C!==b;++C,N+=4)d.copy(y[C]).applyMatrix4(U,h),d.normal.toArray(x,N),x[N+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function Bb(o){let e=new WeakMap;function i(d,h){return h===Lu?d.mapping=Us:h===Nh&&(d.mapping=Os),d}function r(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const h=d.mapping;if(h===Lu||h===Nh)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new Kx(p.height/2);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Qv extends qv{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cs=4,H_=[.125,.215,.35,.446,.526,.582],vr=20,Th=new Qv,G_=new St;let Ah=null;const _r=(1+Math.sqrt(5))/2,Es=1/_r,V_=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,_r,Es),new j(0,_r,-Es),new j(Es,0,_r),new j(-Es,0,_r),new j(_r,Es,0),new j(-_r,Es,0)];class k_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){Ah=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah),e.scissorTest=!1,Su(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Ns,format:Ei,colorSpace:Ui,depthBuffer:!1},l=X_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ib(u)),this._blurMaterial=Fb(u,e,i)}return l}_compileMaterial(e){const i=new Ut(this._lodPlanes[0],e);this._renderer.compile(i,Th)}_sceneToCubeUV(e,i,r,l){const h=new ei(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(G_),g.toneMapping=ka,g.autoClear=!1;const M=new Vv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),R=new Ut(new Qt,M);let b=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,b=!0):(M.color.copy(G_),b=!0);for(let v=0;v<6;v++){const U=v%3;U===0?(h.up.set(0,p[v],0),h.lookAt(m[v],0,0)):U===1?(h.up.set(0,0,p[v]),h.lookAt(0,m[v],0)):(h.up.set(0,p[v],0),h.lookAt(0,0,m[v]));const C=this._cubeSize;Su(l,U*C,v>2?C:0,C,C),g.setRenderTarget(l),b&&g.render(R,h),g.render(e,h)}R.geometry.dispose(),R.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=x}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Us||e.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ut(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;Su(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Th)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=V_[(l-1)%V_.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Ut(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vr-1),b=u/R,x=isFinite(u)?1+Math.floor(g*b):vr;x>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vr}`);const v=[];let U=0;for(let D=0;D<vr;++D){const oe=D/b,w=Math.exp(-oe*oe/2);v.push(w),D===0?U+=w:D<x&&(U+=2*w)}for(let D=0;D<v.length;D++)v[D]=v[D]/U;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:C}=this;S.dTheta.value=R,S.mipInt.value=C-r;const N=this._sizeLods[l],B=3*N*(l>C-Cs?l-C+Cs:0),V=4*(this._cubeSize-N);Su(i,B,V,3*N,2*N),p.setRenderTarget(i),p.render(y,Th)}}function Ib(o){const e=[],i=[],r=[];let l=o;const u=o-Cs+1+H_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-Cs?p=H_[d-o+Cs-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,y=1+m,S=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,R=6,b=3,x=2,v=1,U=new Float32Array(b*R*M),C=new Float32Array(x*R*M),N=new Float32Array(v*R*M);for(let V=0;V<M;V++){const D=V%3*2/3-1,oe=V>2?0:-1,w=[D,oe,0,D+2/3,oe,0,D+2/3,oe+1,0,D,oe,0,D+2/3,oe+1,0,D,oe+1,0];U.set(w,b*R*V),C.set(S,x*R*V);const P=[V,V,V,V,V,V];N.set(P,v*R*V)}const B=new fa;B.setAttribute("position",new bi(U,b)),B.setAttribute("uv",new bi(C,x)),B.setAttribute("faceIndex",new bi(N,v)),e.push(B),l>Cs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function X_(o,e,i){const r=new ua(o,e,i);return r.texture.mapping=Nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Su(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Fb(o,e,i){const r=new Float32Array(vr),l=new j(0,1,0);return new ca({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:oa,depthTest:!1,depthWrite:!1})}function W_(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:oa,depthTest:!1,depthWrite:!1})}function j_(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oa,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}function Hb(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===Lu||p===Nh,g=p===Us||p===Os;if(m||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let y=e.get(h);return i===null&&(i=new k_(o)),y=m?i.fromEquirectangular(h,y):i.fromCubemap(h,y),e.set(h,y),y.texture}else{if(e.has(h))return e.get(h).texture;{const y=h.image;if(m&&y&&y.height>0||g&&y&&l(y)){i===null&&(i=new k_(o));const S=m?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,S),h.addEventListener("dispose",u),S.texture}else return null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Gb(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Vb(o,e,i,r){const l={},u=new WeakMap;function d(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);for(const R in S.morphAttributes){const b=S.morphAttributes[R];for(let x=0,v=b.length;x<v;x++)e.remove(b[x])}S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(y,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function p(y){const S=y.attributes;for(const R in S)e.update(S[R],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const R in M){const b=M[R];for(let x=0,v=b.length;x<v;x++)e.update(b[x],o.ARRAY_BUFFER)}}function m(y){const S=[],M=y.index,R=y.attributes.position;let b=0;if(M!==null){const U=M.array;b=M.version;for(let C=0,N=U.length;C<N;C+=3){const B=U[C+0],V=U[C+1],D=U[C+2];S.push(B,V,V,D,D,B)}}else if(R!==void 0){const U=R.array;b=R.version;for(let C=0,N=U.length/3-1;C<N;C+=3){const B=C+0,V=C+1,D=C+2;S.push(B,V,V,D,D,B)}}else return;const x=new(Pv(S)?Xv:kv)(S,1);x.version=b;const v=u.get(y);v&&e.remove(v),u.set(y,x)}function g(y){const S=u.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&m(y)}else m(y);return u.get(y)}return{get:h,update:p,getWireframeAttribute:g}}function kb(o,e,i,r){const l=r.isWebGL2;let u;function d(S){u=S}let h,p;function m(S){h=S.type,p=S.bytesPerElement}function g(S,M){o.drawElements(u,M,h,S*p),i.update(M,u,1)}function y(S,M,R){if(R===0)return;let b,x;if(l)b=o,x="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[x](u,M,h,S*p,R),i.update(M,u,R)}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=y}function Xb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Wb(o,e){return o[0]-e[0]}function jb(o,e){return Math.abs(e[1])-Math.abs(o[1])}function qb(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,d=new Ft,h=[];for(let m=0;m<8;m++)h[m]=[m,0];function p(m,g,y){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const R=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,b=R!==void 0?R.length:0;let x=u.get(g);if(x===void 0||x.count!==b){let re=function(){te.dispose(),u.delete(g),g.removeEventListener("dispose",re)};var M=re;x!==void 0&&x.texture.dispose();const C=g.morphAttributes.position!==void 0,N=g.morphAttributes.normal!==void 0,B=g.morphAttributes.color!==void 0,V=g.morphAttributes.position||[],D=g.morphAttributes.normal||[],oe=g.morphAttributes.color||[];let w=0;C===!0&&(w=1),N===!0&&(w=2),B===!0&&(w=3);let P=g.attributes.position.count*w,ve=1;P>e.maxTextureSize&&(ve=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const ye=new Float32Array(P*ve*4*b),te=new Iv(ye,P,ve,b);te.type=ra,te.needsUpdate=!0;const le=w*4;for(let H=0;H<b;H++){const X=V[H],q=D[H],me=oe[H],ce=P*ve*4*H;for(let T=0;T<X.count;T++){const z=T*le;C===!0&&(d.fromBufferAttribute(X,T),ye[ce+z+0]=d.x,ye[ce+z+1]=d.y,ye[ce+z+2]=d.z,ye[ce+z+3]=0),N===!0&&(d.fromBufferAttribute(q,T),ye[ce+z+4]=d.x,ye[ce+z+5]=d.y,ye[ce+z+6]=d.z,ye[ce+z+7]=0),B===!0&&(d.fromBufferAttribute(me,T),ye[ce+z+8]=d.x,ye[ce+z+9]=d.y,ye[ce+z+10]=d.z,ye[ce+z+11]=me.itemSize===4?d.w:1)}}x={count:b,texture:te,size:new Ge(P,ve)},u.set(g,x),g.addEventListener("dispose",re)}let v=0;for(let C=0;C<S.length;C++)v+=S[C];const U=g.morphTargetsRelative?1:1-v;y.getUniforms().setValue(o,"morphTargetBaseInfluence",U),y.getUniforms().setValue(o,"morphTargetInfluences",S),y.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),y.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const R=S===void 0?0:S.length;let b=r[g.id];if(b===void 0||b.length!==R){b=[];for(let N=0;N<R;N++)b[N]=[N,0];r[g.id]=b}for(let N=0;N<R;N++){const B=b[N];B[0]=N,B[1]=S[N]}b.sort(jb);for(let N=0;N<8;N++)N<R&&b[N][1]?(h[N][0]=b[N][0],h[N][1]=b[N][1]):(h[N][0]=Number.MAX_SAFE_INTEGER,h[N][1]=0);h.sort(Wb);const x=g.morphAttributes.position,v=g.morphAttributes.normal;let U=0;for(let N=0;N<8;N++){const B=h[N],V=B[0],D=B[1];V!==Number.MAX_SAFE_INTEGER&&D?(x&&g.getAttribute("morphTarget"+N)!==x[V]&&g.setAttribute("morphTarget"+N,x[V]),v&&g.getAttribute("morphNormal"+N)!==v[V]&&g.setAttribute("morphNormal"+N,v[V]),l[N]=D,U+=D):(x&&g.hasAttribute("morphTarget"+N)===!0&&g.deleteAttribute("morphTarget"+N),v&&g.hasAttribute("morphNormal"+N)===!0&&g.deleteAttribute("morphNormal"+N),l[N]=0)}const C=g.morphTargetsRelative?1:1-U;y.getUniforms().setValue(o,"morphTargetBaseInfluence",C),y.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function Yb(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,y=e.get(p,g);if(l.get(y)!==m&&(e.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return y}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}const Kv=new Ln,Jv=new Iv,$v=new Px,e0=new Yv,q_=[],Y_=[],Z_=new Float32Array(16),Q_=new Float32Array(9),K_=new Float32Array(4);function Is(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=q_[l];if(u===void 0&&(u=new Float32Array(l),q_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function cn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function fn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Bu(o,e){let i=Y_[e];i===void 0&&(i=new Int32Array(e),Y_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function Zb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2fv(this.addr,e),fn(i,e)}}function Kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(cn(i,e))return;o.uniform3fv(this.addr,e),fn(i,e)}}function Jb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4fv(this.addr,e),fn(i,e)}}function $b(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(cn(i,r))return;K_.set(r),o.uniformMatrix2fv(this.addr,!1,K_),fn(i,r)}}function eT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(cn(i,r))return;Q_.set(r),o.uniformMatrix3fv(this.addr,!1,Q_),fn(i,r)}}function tT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(cn(i,r))return;Z_.set(r),o.uniformMatrix4fv(this.addr,!1,Z_),fn(i,r)}}function nT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2iv(this.addr,e),fn(i,e)}}function aT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3iv(this.addr,e),fn(i,e)}}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4iv(this.addr,e),fn(i,e)}}function sT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2uiv(this.addr,e),fn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3uiv(this.addr,e),fn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4uiv(this.addr,e),fn(i,e)}}function cT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2D(e||Kv,l)}function fT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||$v,l)}function hT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||e0,l)}function dT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Jv,l)}function pT(o){switch(o){case 5126:return Zb;case 35664:return Qb;case 35665:return Kb;case 35666:return Jb;case 35674:return $b;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return dT}}function mT(o,e){o.uniform1fv(this.addr,e)}function gT(o,e){const i=Is(e,this.size,2);o.uniform2fv(this.addr,i)}function _T(o,e){const i=Is(e,this.size,3);o.uniform3fv(this.addr,i)}function vT(o,e){const i=Is(e,this.size,4);o.uniform4fv(this.addr,i)}function yT(o,e){const i=Is(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ST(o,e){const i=Is(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function xT(o,e){const i=Is(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function MT(o,e){o.uniform1iv(this.addr,e)}function ET(o,e){o.uniform2iv(this.addr,e)}function bT(o,e){o.uniform3iv(this.addr,e)}function TT(o,e){o.uniform4iv(this.addr,e)}function AT(o,e){o.uniform1uiv(this.addr,e)}function RT(o,e){o.uniform2uiv(this.addr,e)}function wT(o,e){o.uniform3uiv(this.addr,e)}function CT(o,e){o.uniform4uiv(this.addr,e)}function LT(o,e,i){const r=this.cache,l=e.length,u=Bu(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Kv,u[d])}function DT(o,e,i){const r=this.cache,l=e.length,u=Bu(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||$v,u[d])}function UT(o,e,i){const r=this.cache,l=e.length,u=Bu(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||e0,u[d])}function OT(o,e,i){const r=this.cache,l=e.length,u=Bu(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Jv,u[d])}function NT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return yT;case 35675:return ST;case 35676:return xT;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return wT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return OT}}class PT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.setValue=pT(i.type)}}class zT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.size=i.size,this.setValue=NT(i.type)}}class BT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Rh=/(\w+)(\])?(\[|\.)?/g;function J_(o,e){o.seq.push(e),o.map[e.id]=e}function IT(o,e,i){const r=o.name,l=r.length;for(Rh.lastIndex=0;;){const u=Rh.exec(r),d=Rh.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){J_(i,m===void 0?new PT(h,o,e):new zT(h,o,e));break}else{let y=i.map[h];y===void 0&&(y=new BT(h),J_(i,y)),i=y}}}class wu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);IT(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function $_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}let FT=0;function HT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function GT(o){switch(o){case Ui:return["Linear","( value )"];case It:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),["Linear","( value )"]}}function ev(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+HT(o.getShaderSource(e),d)}else return l}function VT(o,e){const i=GT(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function kT(o,e){let i;switch(e){case QS:i="Linear";break;case KS:i="Reinhard";break;case JS:i="OptimizedCineon";break;case $S:i="ACESFilmic";break;case ex:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function XT(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ho).join(`
`)}function WT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function jT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Ho(o){return o!==""}function tv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(o){return o.replace(qT,ZT)}const YT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ZT(o,e){let i=ot[e];if(i===void 0){const r=YT.get(e);if(r!==void 0)i=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gh(i)}const QT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iv(o){return o.replace(QT,KT)}function KT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function av(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Mv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===wS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function $T(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Us:case Os:e="ENVMAP_TYPE_CUBE";break;case Nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function tA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Tv:e="ENVMAP_BLENDING_MULTIPLY";break;case YS:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function nA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function iA(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=JT(i),m=$T(i),g=eA(i),y=tA(i),S=nA(i),M=i.isWebGL2?"":XT(i),R=WT(u),b=l.createProgram();let x,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ho).join(`
`),x.length>0&&(x+=`
`),v=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(x=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[M,av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ot.tonemapping_pars_fragment:"",i.toneMapping!==ka?kT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,VT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),d=Gh(d),d=tv(d,i),d=nv(d,i),h=Gh(h),h=tv(h,i),h=nv(h,i),d=iv(d),h=iv(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=U+x+d,N=U+v+h,B=$_(l,l.VERTEX_SHADER,C),V=$_(l,l.FRAGMENT_SHADER,N);if(l.attachShader(b,B),l.attachShader(b,V),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b),o.debug.checkShaderErrors){const w=l.getProgramInfoLog(b).trim(),P=l.getShaderInfoLog(B).trim(),ve=l.getShaderInfoLog(V).trim();let ye=!0,te=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ye=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,B,V);else{const le=ev(l,B,"vertex"),re=ev(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+le+`
`+re)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||ve==="")&&(te=!1);te&&(this.diagnostics={runnable:ye,programLog:w,vertexShader:{log:P,prefix:x},fragmentShader:{log:ve,prefix:v}})}l.deleteShader(B),l.deleteShader(V);let D;this.getUniforms=function(){return D===void 0&&(D=new wu(l,b)),D};let oe;return this.getAttributes=function(){return oe===void 0&&(oe=jT(l,b)),oe},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=FT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=B,this.fragmentShader=V,this}let aA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new sA(e),i.set(e,r)),r}}class sA{constructor(e){this.id=aA++,this.code=e,this.usedTimes=0}}function oA(o,e,i,r,l,u,d){const h=new Hv,p=new rA,m=[],g=l.isWebGL2,y=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return w===0?"uv":`uv${w}`}function x(w,P,ve,ye,te){const le=ye.fog,re=te.geometry,H=w.isMeshStandardMaterial?ye.environment:null,X=(w.isMeshStandardMaterial?i:e).get(w.envMap||H),q=X&&X.mapping===Nu?X.image.height:null,me=R[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ce=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,T=ce!==void 0?ce.length:0;let z=0;re.morphAttributes.position!==void 0&&(z=1),re.morphAttributes.normal!==void 0&&(z=2),re.morphAttributes.color!==void 0&&(z=3);let ee,ue,Se,we;if(me){const Mt=Li[me];ee=Mt.vertexShader,ue=Mt.fragmentShader}else ee=w.vertexShader,ue=w.fragmentShader,p.update(w),Se=p.getVertexShaderID(w),we=p.getFragmentShaderID(w);const Oe=o.getRenderTarget(),Pe=te.isInstancedMesh===!0,Ve=!!w.map,Ht=!!w.matcap,et=!!X,K=!!w.aoMap,kt=!!w.lightMap,Fe=!!w.bumpMap,Ke=!!w.normalMap,Ze=!!w.displacementMap,Ct=!!w.emissiveMap,rt=!!w.metalnessMap,Je=!!w.roughnessMap,ct=w.anisotropy>0,Gt=w.clearcoat>0,Jt=w.iridescence>0,O=w.sheen>0,A=w.transmission>0,ne=ct&&!!w.anisotropyMap,be=Gt&&!!w.clearcoatMap,xe=Gt&&!!w.clearcoatNormalMap,Ee=Gt&&!!w.clearcoatRoughnessMap,He=Jt&&!!w.iridescenceMap,Ce=Jt&&!!w.iridescenceThicknessMap,se=O&&!!w.sheenColorMap,F=O&&!!w.sheenRoughnessMap,_e=!!w.specularMap,Le=!!w.specularColorMap,Te=!!w.specularIntensityMap,Re=A&&!!w.transmissionMap,$e=A&&!!w.thicknessMap,ft=!!w.gradientMap,k=!!w.alphaMap,De=w.alphaTest>0,ie=!!w.alphaHash,Me=!!w.extensions,Ae=!!re.attributes.uv1,it=!!re.attributes.uv2,gt=!!re.attributes.uv3;let Tt=ka;return w.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Tt=o.toneMapping),{isWebGL2:g,shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:ee,fragmentShader:ue,defines:w.defines,customVertexShaderID:Se,customFragmentShaderID:we,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,instancing:Pe,instancingColor:Pe&&te.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:Oe===null?o.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Ui,map:Ve,matcap:Ht,envMap:et,envMapMode:et&&X.mapping,envMapCubeUVHeight:q,aoMap:K,lightMap:kt,bumpMap:Fe,normalMap:Ke,displacementMap:S&&Ze,emissiveMap:Ct,normalMapObjectSpace:Ke&&w.normalMapType===dx,normalMapTangentSpace:Ke&&w.normalMapType===Nv,metalnessMap:rt,roughnessMap:Je,anisotropy:ct,anisotropyMap:ne,clearcoat:Gt,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ee,iridescence:Jt,iridescenceMap:He,iridescenceThicknessMap:Ce,sheen:O,sheenColorMap:se,sheenRoughnessMap:F,specularMap:_e,specularColorMap:Le,specularIntensityMap:Te,transmission:A,transmissionMap:Re,thicknessMap:$e,gradientMap:ft,opaque:w.transparent===!1&&w.blending===Ls,alphaMap:k,alphaTest:De,alphaHash:ie,combine:w.combine,mapUv:Ve&&b(w.map.channel),aoMapUv:K&&b(w.aoMap.channel),lightMapUv:kt&&b(w.lightMap.channel),bumpMapUv:Fe&&b(w.bumpMap.channel),normalMapUv:Ke&&b(w.normalMap.channel),displacementMapUv:Ze&&b(w.displacementMap.channel),emissiveMapUv:Ct&&b(w.emissiveMap.channel),metalnessMapUv:rt&&b(w.metalnessMap.channel),roughnessMapUv:Je&&b(w.roughnessMap.channel),anisotropyMapUv:ne&&b(w.anisotropyMap.channel),clearcoatMapUv:be&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:xe&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:se&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:F&&b(w.sheenRoughnessMap.channel),specularMapUv:_e&&b(w.specularMap.channel),specularColorMapUv:Le&&b(w.specularColorMap.channel),specularIntensityMapUv:Te&&b(w.specularIntensityMap.channel),transmissionMapUv:Re&&b(w.transmissionMap.channel),thicknessMapUv:$e&&b(w.thicknessMap.channel),alphaMapUv:k&&b(w.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ke||ct),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:it,vertexUv3s:gt,pointsUvs:te.isPoints===!0&&!!re.attributes.uv&&(Ve||k),fog:!!le,useFog:w.fog===!0,fogExp2:le&&le.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:te.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:z,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&ve.length>0,shadowMapType:o.shadowMap.type,toneMapping:Tt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Ve&&w.map.isVideoTexture===!0&&w.map.colorSpace===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===mi,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Me&&w.extensions.derivatives===!0,extensionFragDepth:Me&&w.extensions.fragDepth===!0,extensionDrawBuffers:Me&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function v(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ve in w.defines)P.push(ve),P.push(w.defines[ve]);return w.isRawShaderMaterial===!1&&(U(P,w),C(P,w),P.push(o.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function U(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapCubeUVHeight),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.morphAttributeCount),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function C(w,P){h.disableAll(),P.isWebGL2&&h.enable(0),P.supportsVertexTextures&&h.enable(1),P.instancing&&h.enable(2),P.instancingColor&&h.enable(3),P.matcap&&h.enable(4),P.envMap&&h.enable(5),P.normalMapObjectSpace&&h.enable(6),P.normalMapTangentSpace&&h.enable(7),P.clearcoat&&h.enable(8),P.iridescence&&h.enable(9),P.alphaTest&&h.enable(10),P.vertexColors&&h.enable(11),P.vertexAlphas&&h.enable(12),P.vertexUv1s&&h.enable(13),P.vertexUv2s&&h.enable(14),P.vertexUv3s&&h.enable(15),P.vertexTangents&&h.enable(16),P.anisotropy&&h.enable(17),w.push(h.mask),h.disableAll(),P.fog&&h.enable(0),P.useFog&&h.enable(1),P.flatShading&&h.enable(2),P.logarithmicDepthBuffer&&h.enable(3),P.skinning&&h.enable(4),P.morphTargets&&h.enable(5),P.morphNormals&&h.enable(6),P.morphColors&&h.enable(7),P.premultipliedAlpha&&h.enable(8),P.shadowMapEnabled&&h.enable(9),P.useLegacyLights&&h.enable(10),P.doubleSided&&h.enable(11),P.flipSided&&h.enable(12),P.useDepthPacking&&h.enable(13),P.dithering&&h.enable(14),P.transmission&&h.enable(15),P.sheen&&h.enable(16),P.opaque&&h.enable(17),P.pointsUvs&&h.enable(18),P.decodeVideoTexture&&h.enable(19),w.push(h.mask)}function N(w){const P=R[w.type];let ve;if(P){const ye=Li[P];ve=jv.clone(ye.uniforms)}else ve=w.uniforms;return ve}function B(w,P){let ve;for(let ye=0,te=m.length;ye<te;ye++){const le=m[ye];if(le.cacheKey===P){ve=le,++ve.usedTimes;break}}return ve===void 0&&(ve=new iA(o,P,w,u),m.push(ve)),ve}function V(w){if(--w.usedTimes===0){const P=m.indexOf(w);m[P]=m[m.length-1],m.pop(),w.destroy()}}function D(w){p.remove(w)}function oe(){p.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:N,acquireProgram:B,releaseProgram:V,releaseShaderCache:D,programs:m,dispose:oe}}function lA(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function uA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function rv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function sv(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(y,S,M,R,b,x){let v=o[e];return v===void 0?(v={id:y.id,object:y,geometry:S,material:M,groupOrder:R,renderOrder:y.renderOrder,z:b,group:x},o[e]=v):(v.id=y.id,v.object=y,v.geometry=S,v.material=M,v.groupOrder=R,v.renderOrder=y.renderOrder,v.z=b,v.group=x),e++,v}function h(y,S,M,R,b,x){const v=d(y,S,M,R,b,x);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(y,S,M,R,b,x){const v=d(y,S,M,R,b,x);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(y,S){i.length>1&&i.sort(y||uA),r.length>1&&r.sort(S||rv),l.length>1&&l.sort(S||rv)}function g(){for(let y=e,S=o.length;y<S;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function cA(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new sv,o.set(r,[d])):l>=u.length?(d=new sv,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function fA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new St};break;case"SpotLight":i={position:new j,direction:new j,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new St,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new St,groundColor:new St};break;case"RectAreaLight":i={color:new St,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=i,i}}}function hA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let dA=0;function pA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function mA(o,e){const i=new fA,r=hA(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)l.probe.push(new j);const u=new j,d=new Kt,h=new Kt;function p(g,y){let S=0,M=0,R=0;for(let ve=0;ve<9;ve++)l.probe[ve].set(0,0,0);let b=0,x=0,v=0,U=0,C=0,N=0,B=0,V=0,D=0,oe=0;g.sort(pA);const w=y===!0?Math.PI:1;for(let ve=0,ye=g.length;ve<ye;ve++){const te=g[ve],le=te.color,re=te.intensity,H=te.distance,X=te.shadow&&te.shadow.map?te.shadow.map.texture:null;if(te.isAmbientLight)S+=le.r*re*w,M+=le.g*re*w,R+=le.b*re*w;else if(te.isLightProbe)for(let q=0;q<9;q++)l.probe[q].addScaledVector(te.sh.coefficients[q],re);else if(te.isDirectionalLight){const q=i.get(te);if(q.color.copy(te.color).multiplyScalar(te.intensity*w),te.castShadow){const me=te.shadow,ce=r.get(te);ce.shadowBias=me.bias,ce.shadowNormalBias=me.normalBias,ce.shadowRadius=me.radius,ce.shadowMapSize=me.mapSize,l.directionalShadow[b]=ce,l.directionalShadowMap[b]=X,l.directionalShadowMatrix[b]=te.shadow.matrix,N++}l.directional[b]=q,b++}else if(te.isSpotLight){const q=i.get(te);q.position.setFromMatrixPosition(te.matrixWorld),q.color.copy(le).multiplyScalar(re*w),q.distance=H,q.coneCos=Math.cos(te.angle),q.penumbraCos=Math.cos(te.angle*(1-te.penumbra)),q.decay=te.decay,l.spot[v]=q;const me=te.shadow;if(te.map&&(l.spotLightMap[D]=te.map,D++,me.updateMatrices(te),te.castShadow&&oe++),l.spotLightMatrix[v]=me.matrix,te.castShadow){const ce=r.get(te);ce.shadowBias=me.bias,ce.shadowNormalBias=me.normalBias,ce.shadowRadius=me.radius,ce.shadowMapSize=me.mapSize,l.spotShadow[v]=ce,l.spotShadowMap[v]=X,V++}v++}else if(te.isRectAreaLight){const q=i.get(te);q.color.copy(le).multiplyScalar(re),q.halfWidth.set(te.width*.5,0,0),q.halfHeight.set(0,te.height*.5,0),l.rectArea[U]=q,U++}else if(te.isPointLight){const q=i.get(te);if(q.color.copy(te.color).multiplyScalar(te.intensity*w),q.distance=te.distance,q.decay=te.decay,te.castShadow){const me=te.shadow,ce=r.get(te);ce.shadowBias=me.bias,ce.shadowNormalBias=me.normalBias,ce.shadowRadius=me.radius,ce.shadowMapSize=me.mapSize,ce.shadowCameraNear=me.camera.near,ce.shadowCameraFar=me.camera.far,l.pointShadow[x]=ce,l.pointShadowMap[x]=X,l.pointShadowMatrix[x]=te.shadow.matrix,B++}l.point[x]=q,x++}else if(te.isHemisphereLight){const q=i.get(te);q.skyColor.copy(te.color).multiplyScalar(re*w),q.groundColor.copy(te.groundColor).multiplyScalar(re*w),l.hemi[C]=q,C++}}U>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ue.LTC_FLOAT_1,l.rectAreaLTC2=Ue.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Ue.LTC_HALF_1,l.rectAreaLTC2=Ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=M,l.ambient[2]=R;const P=l.hash;(P.directionalLength!==b||P.pointLength!==x||P.spotLength!==v||P.rectAreaLength!==U||P.hemiLength!==C||P.numDirectionalShadows!==N||P.numPointShadows!==B||P.numSpotShadows!==V||P.numSpotMaps!==D)&&(l.directional.length=b,l.spot.length=v,l.rectArea.length=U,l.point.length=x,l.hemi.length=C,l.directionalShadow.length=N,l.directionalShadowMap.length=N,l.pointShadow.length=B,l.pointShadowMap.length=B,l.spotShadow.length=V,l.spotShadowMap.length=V,l.directionalShadowMatrix.length=N,l.pointShadowMatrix.length=B,l.spotLightMatrix.length=V+D-oe,l.spotLightMap.length=D,l.numSpotLightShadowsWithMaps=oe,P.directionalLength=b,P.pointLength=x,P.spotLength=v,P.rectAreaLength=U,P.hemiLength=C,P.numDirectionalShadows=N,P.numPointShadows=B,P.numSpotShadows=V,P.numSpotMaps=D,l.version=dA++)}function m(g,y){let S=0,M=0,R=0,b=0,x=0;const v=y.matrixWorldInverse;for(let U=0,C=g.length;U<C;U++){const N=g[U];if(N.isDirectionalLight){const B=l.directional[S];B.direction.setFromMatrixPosition(N.matrixWorld),u.setFromMatrixPosition(N.target.matrixWorld),B.direction.sub(u),B.direction.transformDirection(v),S++}else if(N.isSpotLight){const B=l.spot[R];B.position.setFromMatrixPosition(N.matrixWorld),B.position.applyMatrix4(v),B.direction.setFromMatrixPosition(N.matrixWorld),u.setFromMatrixPosition(N.target.matrixWorld),B.direction.sub(u),B.direction.transformDirection(v),R++}else if(N.isRectAreaLight){const B=l.rectArea[b];B.position.setFromMatrixPosition(N.matrixWorld),B.position.applyMatrix4(v),h.identity(),d.copy(N.matrixWorld),d.premultiply(v),h.extractRotation(d),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),B.halfWidth.applyMatrix4(h),B.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const B=l.point[M];B.position.setFromMatrixPosition(N.matrixWorld),B.position.applyMatrix4(v),M++}else if(N.isHemisphereLight){const B=l.hemi[x];B.direction.setFromMatrixPosition(N.matrixWorld),B.direction.transformDirection(v),x++}}}return{setup:p,setupView:m,state:l}}function ov(o,e){const i=new mA(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function d(y){r.push(y)}function h(y){l.push(y)}function p(y){i.setup(r,y)}function m(y){i.setupView(r,y)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:h}}function gA(o,e){let i=new WeakMap;function r(u,d=0){const h=i.get(u);let p;return h===void 0?(p=new ov(o,e),i.set(u,[p])):d>=h.length?(p=new ov(o,e),h.push(p)):p=h[d],p}function l(){i=new WeakMap}return{get:r,dispose:l}}class _A extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vA extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SA=`uniform sampler2D shadow_pass;
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
}`;function xA(o,e,i){let r=new Yh;const l=new Ge,u=new Ge,d=new Ft,h=new _A({depthPacking:hx}),p=new vA,m={},g=i.maxTextureSize,y={[Di]:Xn,[Xn]:Di,[mi]:mi},S=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:yA,fragmentShader:SA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const R=new fa;R.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ut(R,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mv;let v=this.type;this.render=function(B,V,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const oe=o.getRenderTarget(),w=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),ve=o.state;ve.setBlending(oa),ve.buffers.color.setClear(1,1,1,1),ve.buffers.depth.setTest(!0),ve.setScissorTest(!1);const ye=v!==ia&&this.type===ia,te=v===ia&&this.type!==ia;for(let le=0,re=B.length;le<re;le++){const H=B[le],X=H.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const q=X.getFrameExtents();if(l.multiply(q),u.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/q.x),l.x=u.x*q.x,X.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/q.y),l.y=u.y*q.y,X.mapSize.y=u.y)),X.map===null||ye===!0||te===!0){const ce=this.type!==ia?{minFilter:Vt,magFilter:Vt}:{};X.map!==null&&X.map.dispose(),X.map=new ua(l.x,l.y,ce),X.map.texture.name=H.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const me=X.getViewportCount();for(let ce=0;ce<me;ce++){const T=X.getViewport(ce);d.set(u.x*T.x,u.y*T.y,u.x*T.z,u.y*T.w),ve.viewport(d),X.updateMatrices(H,ce),r=X.getFrustum(),N(V,D,X.camera,H,this.type)}X.isPointLightShadow!==!0&&this.type===ia&&U(X,D),X.needsUpdate=!1}v=this.type,x.needsUpdate=!1,o.setRenderTarget(oe,w,P)};function U(B,V){const D=e.update(b);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ua(l.x,l.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(V,null,D,S,b,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(V,null,D,M,b,null)}function C(B,V,D,oe){let w=null;const P=D.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(P!==void 0)w=P;else if(w=D.isPointLight===!0?p:h,o.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){const ve=w.uuid,ye=V.uuid;let te=m[ve];te===void 0&&(te={},m[ve]=te);let le=te[ye];le===void 0&&(le=w.clone(),te[ye]=le),w=le}if(w.visible=V.visible,w.wireframe=V.wireframe,oe===ia?w.side=V.shadowSide!==null?V.shadowSide:V.side:w.side=V.shadowSide!==null?V.shadowSide:y[V.side],w.alphaMap=V.alphaMap,w.alphaTest=V.alphaTest,w.map=V.map,w.clipShadows=V.clipShadows,w.clippingPlanes=V.clippingPlanes,w.clipIntersection=V.clipIntersection,w.displacementMap=V.displacementMap,w.displacementScale=V.displacementScale,w.displacementBias=V.displacementBias,w.wireframeLinewidth=V.wireframeLinewidth,w.linewidth=V.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ve=o.properties.get(w);ve.light=D}return w}function N(B,V,D,oe,w){if(B.visible===!1)return;if(B.layers.test(V.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===ia)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,B.matrixWorld);const ye=e.update(B),te=B.material;if(Array.isArray(te)){const le=ye.groups;for(let re=0,H=le.length;re<H;re++){const X=le[re],q=te[X.materialIndex];if(q&&q.visible){const me=C(B,q,oe,w);o.renderBufferDirect(D,null,ye,me,B,X)}}}else if(te.visible){const le=C(B,te,oe,w);o.renderBufferDirect(D,null,ye,le,B,null)}}const ve=B.children;for(let ye=0,te=ve.length;ye<te;ye++)N(ve[ye],V,D,oe,w)}}function MA(o,e,i){const r=i.isWebGL2;function l(){let k=!1;const De=new Ft;let ie=null;const Me=new Ft(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!k&&(o.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,it,gt,Tt,xn){xn===!0&&(Ae*=Tt,it*=Tt,gt*=Tt),De.set(Ae,it,gt,Tt),Me.equals(De)===!1&&(o.clearColor(Ae,it,gt,Tt),Me.copy(De))},reset:function(){k=!1,ie=null,Me.set(-1,0,0,0)}}}function u(){let k=!1,De=null,ie=null,Me=null;return{setTest:function(Ae){Ae?Oe(o.DEPTH_TEST):Pe(o.DEPTH_TEST)},setMask:function(Ae){De!==Ae&&!k&&(o.depthMask(Ae),De=Ae)},setFunc:function(Ae){if(ie!==Ae){switch(Ae){case GS:o.depthFunc(o.NEVER);break;case VS:o.depthFunc(o.ALWAYS);break;case kS:o.depthFunc(o.LESS);break;case Oh:o.depthFunc(o.LEQUAL);break;case XS:o.depthFunc(o.EQUAL);break;case WS:o.depthFunc(o.GEQUAL);break;case jS:o.depthFunc(o.GREATER);break;case qS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ie=Ae}},setLocked:function(Ae){k=Ae},setClear:function(Ae){Me!==Ae&&(o.clearDepth(Ae),Me=Ae)},reset:function(){k=!1,De=null,ie=null,Me=null}}}function d(){let k=!1,De=null,ie=null,Me=null,Ae=null,it=null,gt=null,Tt=null,xn=null;return{setTest:function(Mt){k||(Mt?Oe(o.STENCIL_TEST):Pe(o.STENCIL_TEST))},setMask:function(Mt){De!==Mt&&!k&&(o.stencilMask(Mt),De=Mt)},setFunc:function(Mt,Mn,mn){(ie!==Mt||Me!==Mn||Ae!==mn)&&(o.stencilFunc(Mt,Mn,mn),ie=Mt,Me=Mn,Ae=mn)},setOp:function(Mt,Mn,mn){(it!==Mt||gt!==Mn||Tt!==mn)&&(o.stencilOp(Mt,Mn,mn),it=Mt,gt=Mn,Tt=mn)},setLocked:function(Mt){k=Mt},setClear:function(Mt){xn!==Mt&&(o.clearStencil(Mt),xn=Mt)},reset:function(){k=!1,De=null,ie=null,Me=null,Ae=null,it=null,gt=null,Tt=null,xn=null}}}const h=new l,p=new u,m=new d,g=new WeakMap,y=new WeakMap;let S={},M={},R=new WeakMap,b=[],x=null,v=!1,U=null,C=null,N=null,B=null,V=null,D=null,oe=null,w=!1,P=null,ve=null,ye=null,te=null,le=null;const re=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=X>=2);let me=null,ce={};const T=o.getParameter(o.SCISSOR_BOX),z=o.getParameter(o.VIEWPORT),ee=new Ft().fromArray(T),ue=new Ft().fromArray(z);function Se(k,De,ie,Me){const Ae=new Uint8Array(4),it=o.createTexture();o.bindTexture(k,it),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let gt=0;gt<ie;gt++)r&&(k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY)?o.texImage3D(De,0,o.RGBA,1,1,Me,0,o.RGBA,o.UNSIGNED_BYTE,Ae):o.texImage2D(De+gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ae);return it}const we={};we[o.TEXTURE_2D]=Se(o.TEXTURE_2D,o.TEXTURE_2D,1),we[o.TEXTURE_CUBE_MAP]=Se(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(we[o.TEXTURE_2D_ARRAY]=Se(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),we[o.TEXTURE_3D]=Se(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Oe(o.DEPTH_TEST),p.setFunc(Oh),Ze(!1),Ct(jg),Oe(o.CULL_FACE),Fe(oa);function Oe(k){S[k]!==!0&&(o.enable(k),S[k]=!0)}function Pe(k){S[k]!==!1&&(o.disable(k),S[k]=!1)}function Ve(k,De){return M[k]!==De?(o.bindFramebuffer(k,De),M[k]=De,r&&(k===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=De),k===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=De)),!0):!1}function Ht(k,De){let ie=b,Me=!1;if(k)if(ie=R.get(De),ie===void 0&&(ie=[],R.set(De,ie)),k.isWebGLMultipleRenderTargets){const Ae=k.texture;if(ie.length!==Ae.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let it=0,gt=Ae.length;it<gt;it++)ie[it]=o.COLOR_ATTACHMENT0+it;ie.length=Ae.length,Me=!0}}else ie[0]!==o.COLOR_ATTACHMENT0&&(ie[0]=o.COLOR_ATTACHMENT0,Me=!0);else ie[0]!==o.BACK&&(ie[0]=o.BACK,Me=!0);Me&&(i.isWebGL2?o.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function et(k){return x!==k?(o.useProgram(k),x=k,!0):!1}const K={[ws]:o.FUNC_ADD,[LS]:o.FUNC_SUBTRACT,[DS]:o.FUNC_REVERSE_SUBTRACT};if(r)K[Qg]=o.MIN,K[Kg]=o.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(K[Qg]=k.MIN_EXT,K[Kg]=k.MAX_EXT)}const kt={[US]:o.ZERO,[OS]:o.ONE,[NS]:o.SRC_COLOR,[Ev]:o.SRC_ALPHA,[HS]:o.SRC_ALPHA_SATURATE,[IS]:o.DST_COLOR,[zS]:o.DST_ALPHA,[PS]:o.ONE_MINUS_SRC_COLOR,[bv]:o.ONE_MINUS_SRC_ALPHA,[FS]:o.ONE_MINUS_DST_COLOR,[BS]:o.ONE_MINUS_DST_ALPHA};function Fe(k,De,ie,Me,Ae,it,gt,Tt){if(k===oa){v===!0&&(Pe(o.BLEND),v=!1);return}if(v===!1&&(Oe(o.BLEND),v=!0),k!==CS){if(k!==U||Tt!==w){if((C!==ws||V!==ws)&&(o.blendEquation(o.FUNC_ADD),C=ws,V=ws),Tt)switch(k){case Ls:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFunc(o.ONE,o.ONE);break;case Yg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ls:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Yg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,B=null,D=null,oe=null,U=k,w=Tt}return}Ae=Ae||De,it=it||ie,gt=gt||Me,(De!==C||Ae!==V)&&(o.blendEquationSeparate(K[De],K[Ae]),C=De,V=Ae),(ie!==N||Me!==B||it!==D||gt!==oe)&&(o.blendFuncSeparate(kt[ie],kt[Me],kt[it],kt[gt]),N=ie,B=Me,D=it,oe=gt),U=k,w=!1}function Ke(k,De){k.side===mi?Pe(o.CULL_FACE):Oe(o.CULL_FACE);let ie=k.side===Xn;De&&(ie=!ie),Ze(ie),k.blending===Ls&&k.transparent===!1?Fe(oa):Fe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),p.setFunc(k.depthFunc),p.setTest(k.depthTest),p.setMask(k.depthWrite),h.setMask(k.colorWrite);const Me=k.stencilWrite;m.setTest(Me),Me&&(m.setMask(k.stencilWriteMask),m.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),m.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Je(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Oe(o.SAMPLE_ALPHA_TO_COVERAGE):Pe(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(k){P!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),P=k)}function Ct(k){k!==AS?(Oe(o.CULL_FACE),k!==ve&&(k===jg?o.cullFace(o.BACK):k===RS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pe(o.CULL_FACE),ve=k}function rt(k){k!==ye&&(H&&o.lineWidth(k),ye=k)}function Je(k,De,ie){k?(Oe(o.POLYGON_OFFSET_FILL),(te!==De||le!==ie)&&(o.polygonOffset(De,ie),te=De,le=ie)):Pe(o.POLYGON_OFFSET_FILL)}function ct(k){k?Oe(o.SCISSOR_TEST):Pe(o.SCISSOR_TEST)}function Gt(k){k===void 0&&(k=o.TEXTURE0+re-1),me!==k&&(o.activeTexture(k),me=k)}function Jt(k,De,ie){ie===void 0&&(me===null?ie=o.TEXTURE0+re-1:ie=me);let Me=ce[ie];Me===void 0&&(Me={type:void 0,texture:void 0},ce[ie]=Me),(Me.type!==k||Me.texture!==De)&&(me!==ie&&(o.activeTexture(ie),me=ie),o.bindTexture(k,De||we[k]),Me.type=k,Me.texture=De)}function O(){const k=ce[me];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function A(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function F(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(k){ee.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),ee.copy(k))}function Te(k){ue.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),ue.copy(k))}function Re(k,De){let ie=y.get(De);ie===void 0&&(ie=new WeakMap,y.set(De,ie));let Me=ie.get(k);Me===void 0&&(Me=o.getUniformBlockIndex(De,k.name),ie.set(k,Me))}function $e(k,De){const Me=y.get(De).get(k);g.get(De)!==Me&&(o.uniformBlockBinding(De,Me,k.__bindingPointIndex),g.set(De,Me))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},me=null,ce={},M={},R=new WeakMap,b=[],x=null,v=!1,U=null,C=null,N=null,B=null,V=null,D=null,oe=null,w=!1,P=null,ve=null,ye=null,te=null,le=null,ee.set(0,0,o.canvas.width,o.canvas.height),ue.set(0,0,o.canvas.width,o.canvas.height),h.reset(),p.reset(),m.reset()}return{buffers:{color:h,depth:p,stencil:m},enable:Oe,disable:Pe,bindFramebuffer:Ve,drawBuffers:Ht,useProgram:et,setBlending:Fe,setMaterial:Ke,setFlipSided:Ze,setCullFace:Ct,setLineWidth:rt,setPolygonOffset:Je,setScissorTest:ct,activeTexture:Gt,bindTexture:Jt,unbindTexture:O,compressedTexImage2D:A,compressedTexImage3D:ne,texImage2D:F,texImage3D:_e,updateUBOMapping:Re,uniformBlockBinding:$e,texStorage2D:Ce,texStorage3D:se,texSubImage2D:be,texSubImage3D:xe,compressedTexSubImage2D:Ee,compressedTexSubImage3D:He,scissor:Le,viewport:Te,reset:ft}}function EA(o,e,i,r,l,u,d){const h=l.isWebGL2,p=l.maxTextures,m=l.maxCubemapSize,g=l.maxTextureSize,y=l.maxSamples,S=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),R=new WeakMap;let b;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(O,A){return v?new OffscreenCanvas(O,A):Uu("canvas")}function C(O,A,ne,be){let xe=1;if((O.width>be||O.height>be)&&(xe=be/Math.max(O.width,O.height)),xe<1||A===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const Ee=A?Hh:Math.floor,He=Ee(xe*O.width),Ce=Ee(xe*O.height);b===void 0&&(b=U(He,Ce));const se=ne?U(He,Ce):b;return se.width=He,se.height=Ce,se.getContext("2d").drawImage(O,0,0,He,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+He+"x"+Ce+")."),se}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function N(O){return T_(O.width)&&T_(O.height)}function B(O){return h?!1:O.wrapS!==Mi||O.wrapT!==Mi||O.minFilter!==Vt&&O.minFilter!==di}function V(O,A){return O.generateMipmaps&&A&&O.minFilter!==Vt&&O.minFilter!==di}function D(O){o.generateMipmap(O)}function oe(O,A,ne,be,xe=!1){if(h===!1)return A;if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ee=A;return A===o.RED&&(ne===o.FLOAT&&(Ee=o.R32F),ne===o.HALF_FLOAT&&(Ee=o.R16F),ne===o.UNSIGNED_BYTE&&(Ee=o.R8)),A===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(Ee=o.R8UI),ne===o.UNSIGNED_SHORT&&(Ee=o.R16UI),ne===o.UNSIGNED_INT&&(Ee=o.R32UI),ne===o.BYTE&&(Ee=o.R8I),ne===o.SHORT&&(Ee=o.R16I),ne===o.INT&&(Ee=o.R32I)),A===o.RG&&(ne===o.FLOAT&&(Ee=o.RG32F),ne===o.HALF_FLOAT&&(Ee=o.RG16F),ne===o.UNSIGNED_BYTE&&(Ee=o.RG8)),A===o.RGBA&&(ne===o.FLOAT&&(Ee=o.RGBA32F),ne===o.HALF_FLOAT&&(Ee=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(Ee=be===It&&xe===!1?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(Ee=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(Ee=o.RGB5_A1)),(Ee===o.R16F||Ee===o.R32F||Ee===o.RG16F||Ee===o.RG32F||Ee===o.RGBA16F||Ee===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function w(O,A,ne){return V(O,ne)===!0||O.isFramebufferTexture&&O.minFilter!==Vt&&O.minFilter!==di?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function P(O){return O===Vt||O===Jg||O===eh?o.NEAREST:o.LINEAR}function ve(O){const A=O.target;A.removeEventListener("dispose",ve),te(A),A.isVideoTexture&&R.delete(A)}function ye(O){const A=O.target;A.removeEventListener("dispose",ye),re(A)}function te(O){const A=r.get(O);if(A.__webglInit===void 0)return;const ne=O.source,be=x.get(ne);if(be){const xe=be[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&le(O),Object.keys(be).length===0&&x.delete(ne)}r.remove(O)}function le(O){const A=r.get(O);o.deleteTexture(A.__webglTexture);const ne=O.source,be=x.get(ne);delete be[A.__cacheKey],d.memory.textures--}function re(O){const A=O.texture,ne=r.get(O),be=r.get(A);if(be.__webglTexture!==void 0&&(o.deleteTexture(be.__webglTexture),d.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(ne.__webglFramebuffer[xe]))for(let Ee=0;Ee<ne.__webglFramebuffer[xe].length;Ee++)o.deleteFramebuffer(ne.__webglFramebuffer[xe][Ee]);else o.deleteFramebuffer(ne.__webglFramebuffer[xe]);ne.__webglDepthbuffer&&o.deleteRenderbuffer(ne.__webglDepthbuffer[xe])}else{if(Array.isArray(ne.__webglFramebuffer))for(let xe=0;xe<ne.__webglFramebuffer.length;xe++)o.deleteFramebuffer(ne.__webglFramebuffer[xe]);else o.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&o.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&o.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let xe=0;xe<ne.__webglColorRenderbuffer.length;xe++)ne.__webglColorRenderbuffer[xe]&&o.deleteRenderbuffer(ne.__webglColorRenderbuffer[xe]);ne.__webglDepthRenderbuffer&&o.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let xe=0,Ee=A.length;xe<Ee;xe++){const He=r.get(A[xe]);He.__webglTexture&&(o.deleteTexture(He.__webglTexture),d.memory.textures--),r.remove(A[xe])}r.remove(A),r.remove(O)}let H=0;function X(){H=0}function q(){const O=H;return O>=p&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+p),H+=1,O}function me(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function ce(O,A){const ne=r.get(O);if(O.isVideoTexture&&Gt(O),O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){const be=O.image;if(be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(ne,O,A);return}}i.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+A)}function T(O,A){const ne=r.get(O);if(O.version>0&&ne.__version!==O.version){Ve(ne,O,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+A)}function z(O,A){const ne=r.get(O);if(O.version>0&&ne.__version!==O.version){Ve(ne,O,A);return}i.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+A)}function ee(O,A){const ne=r.get(O);if(O.version>0&&ne.__version!==O.version){Ht(ne,O,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+A)}const ue={[Ph]:o.REPEAT,[Mi]:o.CLAMP_TO_EDGE,[zh]:o.MIRRORED_REPEAT},Se={[Vt]:o.NEAREST,[Jg]:o.NEAREST_MIPMAP_NEAREST,[eh]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[tx]:o.LINEAR_MIPMAP_NEAREST,[Vo]:o.LINEAR_MIPMAP_LINEAR},we={[mx]:o.NEVER,[Mx]:o.ALWAYS,[gx]:o.LESS,[vx]:o.LEQUAL,[_x]:o.EQUAL,[xx]:o.GEQUAL,[yx]:o.GREATER,[Sx]:o.NOTEQUAL};function Oe(O,A,ne){if(ne?(o.texParameteri(O,o.TEXTURE_WRAP_S,ue[A.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ue[A.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ue[A.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Se[A.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Se[A.minFilter])):(o.texParameteri(O,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(O,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(A.wrapS!==Mi||A.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(O,o.TEXTURE_MAG_FILTER,P(A.magFilter)),o.texParameteri(O,o.TEXTURE_MIN_FILTER,P(A.minFilter)),A.minFilter!==Vt&&A.minFilter!==di&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,we[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const be=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Vt||A.minFilter!==eh&&A.minFilter!==Vo||A.type===ra&&e.has("OES_texture_float_linear")===!1||h===!1&&A.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(o.texParameterf(O,be.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function Pe(O,A){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",ve));const be=A.source;let xe=x.get(be);xe===void 0&&(xe={},x.set(be,xe));const Ee=me(A);if(Ee!==O.__cacheKey){xe[Ee]===void 0&&(xe[Ee]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),xe[Ee].usedTimes++;const He=xe[O.__cacheKey];He!==void 0&&(xe[O.__cacheKey].usedTimes--,He.usedTimes===0&&le(A)),O.__cacheKey=Ee,O.__webglTexture=xe[Ee].texture}return ne}function Ve(O,A,ne){let be=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(be=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(be=o.TEXTURE_3D);const xe=Pe(O,A),Ee=A.source;i.bindTexture(be,O.__webglTexture,o.TEXTURE0+ne);const He=r.get(Ee);if(Ee.version!==He.__version||xe===!0){i.activeTexture(o.TEXTURE0+ne),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const Ce=B(A)&&N(A.image)===!1;let se=C(A.image,Ce,!1,g);se=Jt(A,se);const F=N(se)||h,_e=u.convert(A.format,A.colorSpace);let Le=u.convert(A.type),Te=oe(A.internalFormat,_e,Le,A.colorSpace,A.isVideoTexture);Oe(be,A,F);let Re;const $e=A.mipmaps,ft=h&&A.isVideoTexture!==!0,k=He.__version===void 0||xe===!0,De=w(A,se,F);if(A.isDepthTexture)Te=o.DEPTH_COMPONENT,h?A.type===ra?Te=o.DEPTH_COMPONENT32F:A.type===Va?Te=o.DEPTH_COMPONENT24:A.type===yr?Te=o.DEPTH24_STENCIL8:Te=o.DEPTH_COMPONENT16:A.type===ra&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Sr&&Te===o.DEPTH_COMPONENT&&A.type!==jh&&A.type!==Va&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Va,Le=u.convert(A.type)),A.format===Ps&&Te===o.DEPTH_COMPONENT&&(Te=o.DEPTH_STENCIL,A.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=yr,Le=u.convert(A.type))),k&&(ft?i.texStorage2D(o.TEXTURE_2D,1,Te,se.width,se.height):i.texImage2D(o.TEXTURE_2D,0,Te,se.width,se.height,0,_e,Le,null));else if(A.isDataTexture)if($e.length>0&&F){ft&&k&&i.texStorage2D(o.TEXTURE_2D,De,Te,$e[0].width,$e[0].height);for(let ie=0,Me=$e.length;ie<Me;ie++)Re=$e[ie],ft?i.texSubImage2D(o.TEXTURE_2D,ie,0,0,Re.width,Re.height,_e,Le,Re.data):i.texImage2D(o.TEXTURE_2D,ie,Te,Re.width,Re.height,0,_e,Le,Re.data);A.generateMipmaps=!1}else ft?(k&&i.texStorage2D(o.TEXTURE_2D,De,Te,se.width,se.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,se.width,se.height,_e,Le,se.data)):i.texImage2D(o.TEXTURE_2D,0,Te,se.width,se.height,0,_e,Le,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ft&&k&&i.texStorage3D(o.TEXTURE_2D_ARRAY,De,Te,$e[0].width,$e[0].height,se.depth);for(let ie=0,Me=$e.length;ie<Me;ie++)Re=$e[ie],A.format!==Ei?_e!==null?ft?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Re.width,Re.height,se.depth,_e,Re.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Te,Re.width,Re.height,se.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?i.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Re.width,Re.height,se.depth,_e,Le,Re.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ie,Te,Re.width,Re.height,se.depth,0,_e,Le,Re.data)}else{ft&&k&&i.texStorage2D(o.TEXTURE_2D,De,Te,$e[0].width,$e[0].height);for(let ie=0,Me=$e.length;ie<Me;ie++)Re=$e[ie],A.format!==Ei?_e!==null?ft?i.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,Re.width,Re.height,_e,Re.data):i.compressedTexImage2D(o.TEXTURE_2D,ie,Te,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?i.texSubImage2D(o.TEXTURE_2D,ie,0,0,Re.width,Re.height,_e,Le,Re.data):i.texImage2D(o.TEXTURE_2D,ie,Te,Re.width,Re.height,0,_e,Le,Re.data)}else if(A.isDataArrayTexture)ft?(k&&i.texStorage3D(o.TEXTURE_2D_ARRAY,De,Te,se.width,se.height,se.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Le,se.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,_e,Le,se.data);else if(A.isData3DTexture)ft?(k&&i.texStorage3D(o.TEXTURE_3D,De,Te,se.width,se.height,se.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Le,se.data)):i.texImage3D(o.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,_e,Le,se.data);else if(A.isFramebufferTexture){if(k)if(ft)i.texStorage2D(o.TEXTURE_2D,De,Te,se.width,se.height);else{let ie=se.width,Me=se.height;for(let Ae=0;Ae<De;Ae++)i.texImage2D(o.TEXTURE_2D,Ae,Te,ie,Me,0,_e,Le,null),ie>>=1,Me>>=1}}else if($e.length>0&&F){ft&&k&&i.texStorage2D(o.TEXTURE_2D,De,Te,$e[0].width,$e[0].height);for(let ie=0,Me=$e.length;ie<Me;ie++)Re=$e[ie],ft?i.texSubImage2D(o.TEXTURE_2D,ie,0,0,_e,Le,Re):i.texImage2D(o.TEXTURE_2D,ie,Te,_e,Le,Re);A.generateMipmaps=!1}else ft?(k&&i.texStorage2D(o.TEXTURE_2D,De,Te,se.width,se.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,_e,Le,se)):i.texImage2D(o.TEXTURE_2D,0,Te,_e,Le,se);V(A,F)&&D(be),He.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Ht(O,A,ne){if(A.image.length!==6)return;const be=Pe(O,A),xe=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ne);const Ee=r.get(xe);if(xe.version!==Ee.__version||be===!0){i.activeTexture(o.TEXTURE0+ne),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const He=A.isCompressedTexture||A.image[0].isCompressedTexture,Ce=A.image[0]&&A.image[0].isDataTexture,se=[];for(let ie=0;ie<6;ie++)!He&&!Ce?se[ie]=C(A.image[ie],!1,!0,m):se[ie]=Ce?A.image[ie].image:A.image[ie],se[ie]=Jt(A,se[ie]);const F=se[0],_e=N(F)||h,Le=u.convert(A.format,A.colorSpace),Te=u.convert(A.type),Re=oe(A.internalFormat,Le,Te,A.colorSpace),$e=h&&A.isVideoTexture!==!0,ft=Ee.__version===void 0||be===!0;let k=w(A,F,_e);Oe(o.TEXTURE_CUBE_MAP,A,_e);let De;if(He){$e&&ft&&i.texStorage2D(o.TEXTURE_CUBE_MAP,k,Re,F.width,F.height);for(let ie=0;ie<6;ie++){De=se[ie].mipmaps;for(let Me=0;Me<De.length;Me++){const Ae=De[Me];A.format!==Ei?Le!==null?$e?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,Ae.width,Ae.height,Le,Ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,Re,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,Ae.width,Ae.height,Le,Te,Ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,Re,Ae.width,Ae.height,0,Le,Te,Ae.data)}}}else{De=A.mipmaps,$e&&ft&&(De.length>0&&k++,i.texStorage2D(o.TEXTURE_CUBE_MAP,k,Re,se[0].width,se[0].height));for(let ie=0;ie<6;ie++)if(Ce){$e?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,se[ie].width,se[ie].height,Le,Te,se[ie].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Re,se[ie].width,se[ie].height,0,Le,Te,se[ie].data);for(let Me=0;Me<De.length;Me++){const it=De[Me].image[ie].image;$e?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,it.width,it.height,Le,Te,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,Re,it.width,it.height,0,Le,Te,it.data)}}else{$e?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Te,se[ie]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Re,Le,Te,se[ie]);for(let Me=0;Me<De.length;Me++){const Ae=De[Me];$e?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,Le,Te,Ae.image[ie]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,Re,Le,Te,Ae.image[ie])}}}V(A,_e)&&D(o.TEXTURE_CUBE_MAP),Ee.__version=xe.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function et(O,A,ne,be,xe,Ee){const He=u.convert(ne.format,ne.colorSpace),Ce=u.convert(ne.type),se=oe(ne.internalFormat,He,Ce,ne.colorSpace);if(!r.get(A).__hasExternalTextures){const _e=Math.max(1,A.width>>Ee),Le=Math.max(1,A.height>>Ee);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,Ee,se,_e,Le,A.depth,0,He,Ce,null):i.texImage2D(xe,Ee,se,_e,Le,0,He,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),ct(A)?S.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,be,xe,r.get(ne).__webglTexture,0,Je(A)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,be,xe,r.get(ne).__webglTexture,Ee),i.bindFramebuffer(o.FRAMEBUFFER,null)}function K(O,A,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,O),A.depthBuffer&&!A.stencilBuffer){let be=o.DEPTH_COMPONENT16;if(ne||ct(A)){const xe=A.depthTexture;xe&&xe.isDepthTexture&&(xe.type===ra?be=o.DEPTH_COMPONENT32F:xe.type===Va&&(be=o.DEPTH_COMPONENT24));const Ee=Je(A);ct(A)?S.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ee,be,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Ee,be,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,be,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,O)}else if(A.depthBuffer&&A.stencilBuffer){const be=Je(A);ne&&ct(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,be,o.DEPTH24_STENCIL8,A.width,A.height):ct(A)?S.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,be,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,O)}else{const be=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xe=0;xe<be.length;xe++){const Ee=be[xe],He=u.convert(Ee.format,Ee.colorSpace),Ce=u.convert(Ee.type),se=oe(Ee.internalFormat,He,Ce,Ee.colorSpace),F=Je(A);ne&&ct(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,F,se,A.width,A.height):ct(A)?S.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,F,se,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,se,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function kt(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ce(A.depthTexture,0);const be=r.get(A.depthTexture).__webglTexture,xe=Je(A);if(A.depthTexture.format===Sr)ct(A)?S.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0);else if(A.depthTexture.format===Ps)ct(A)?S.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Fe(O){const A=r.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");kt(A.__webglFramebuffer,O)}else if(ne){A.__webglDepthbuffer=[];for(let be=0;be<6;be++)i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[be]),A.__webglDepthbuffer[be]=o.createRenderbuffer(),K(A.__webglDepthbuffer[be],O,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),K(A.__webglDepthbuffer,O,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(O,A,ne){const be=r.get(O);A!==void 0&&et(be.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&Fe(O)}function Ze(O){const A=O.texture,ne=r.get(O),be=r.get(A);O.addEventListener("dispose",ye),O.isWebGLMultipleRenderTargets!==!0&&(be.__webglTexture===void 0&&(be.__webglTexture=o.createTexture()),be.__version=A.version,d.memory.textures++);const xe=O.isWebGLCubeRenderTarget===!0,Ee=O.isWebGLMultipleRenderTargets===!0,He=N(O)||h;if(xe){ne.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(h&&A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[Ce]=[];for(let se=0;se<A.mipmaps.length;se++)ne.__webglFramebuffer[Ce][se]=o.createFramebuffer()}else ne.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(h&&A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)ne.__webglFramebuffer[Ce]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Ee)if(l.drawBuffers){const Ce=O.texture;for(let se=0,F=Ce.length;se<F;se++){const _e=r.get(Ce[se]);_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&O.samples>0&&ct(O)===!1){const Ce=Ee?A:[A];ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let se=0;se<Ce.length;se++){const F=Ce[se];ne.__webglColorRenderbuffer[se]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[se]);const _e=u.convert(F.format,F.colorSpace),Le=u.convert(F.type),Te=oe(F.internalFormat,_e,Le,F.colorSpace,O.isXRRenderTarget===!0),Re=Je(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,Te,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+se,o.RENDERBUFFER,ne.__webglColorRenderbuffer[se])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),K(ne.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xe){i.bindTexture(o.TEXTURE_CUBE_MAP,be.__webglTexture),Oe(o.TEXTURE_CUBE_MAP,A,He);for(let Ce=0;Ce<6;Ce++)if(h&&A.mipmaps&&A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)et(ne.__webglFramebuffer[Ce][se],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,se);else et(ne.__webglFramebuffer[Ce],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);V(A,He)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ee){const Ce=O.texture;for(let se=0,F=Ce.length;se<F;se++){const _e=Ce[se],Le=r.get(_e);i.bindTexture(o.TEXTURE_2D,Le.__webglTexture),Oe(o.TEXTURE_2D,_e,He),et(ne.__webglFramebuffer,O,_e,o.COLOR_ATTACHMENT0+se,o.TEXTURE_2D,0),V(_e,He)&&D(o.TEXTURE_2D)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(h?Ce=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Ce,be.__webglTexture),Oe(Ce,A,He),h&&A.mipmaps&&A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)et(ne.__webglFramebuffer[se],O,A,o.COLOR_ATTACHMENT0,Ce,se);else et(ne.__webglFramebuffer,O,A,o.COLOR_ATTACHMENT0,Ce,0);V(A,He)&&D(Ce),i.unbindTexture()}O.depthBuffer&&Fe(O)}function Ct(O){const A=N(O)||h,ne=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let be=0,xe=ne.length;be<xe;be++){const Ee=ne[be];if(V(Ee,A)){const He=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ce=r.get(Ee).__webglTexture;i.bindTexture(He,Ce),D(He),i.unbindTexture()}}}function rt(O){if(h&&O.samples>0&&ct(O)===!1){const A=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],ne=O.width,be=O.height;let xe=o.COLOR_BUFFER_BIT;const Ee=[],He=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=r.get(O),se=O.isWebGLMultipleRenderTargets===!0;if(se)for(let F=0;F<A.length;F++)i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+F,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+F,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let F=0;F<A.length;F++){Ee.push(o.COLOR_ATTACHMENT0+F),O.depthBuffer&&Ee.push(He);const _e=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(_e===!1&&(O.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),se&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[F]),_e===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[He]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[He])),se){const Le=r.get(A[F]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Le,0)}o.blitFramebuffer(0,0,ne,be,0,0,ne,be,xe,o.NEAREST),M&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ee)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),se)for(let F=0;F<A.length;F++){i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+F,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[F]);const _e=r.get(A[F]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+F,o.TEXTURE_2D,_e,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function Je(O){return Math.min(y,O.samples)}function ct(O){const A=r.get(O);return h&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Gt(O){const A=d.render.frame;R.get(O)!==A&&(R.set(O,A),O.update())}function Jt(O,A){const ne=O.colorSpace,be=O.format,xe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Ih||ne!==Ui&&ne!==Mr&&(ne===It||ne===Pu?h===!1?e.has("EXT_sRGB")===!0&&be===Ei?(O.format=Ih,O.minFilter=di,O.generateMipmaps=!1):A=zv.sRGBToLinear(A):(be!==Ei||xe!==Xa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),A}this.allocateTextureUnit=q,this.resetTextureUnits=X,this.setTexture2D=ce,this.setTexture2DArray=T,this.setTexture3D=z,this.setTextureCube=ee,this.rebindTextures=Ke,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ct}const bA=0,ln=1;function TA(o,e,i){const r=i.isWebGL2;function l(u,d=Mr){let h;const p=d===It||d===Pu?ln:bA;if(u===Xa)return o.UNSIGNED_BYTE;if(u===wv)return o.UNSIGNED_SHORT_4_4_4_4;if(u===Cv)return o.UNSIGNED_SHORT_5_5_5_1;if(u===nx)return o.BYTE;if(u===ix)return o.SHORT;if(u===jh)return o.UNSIGNED_SHORT;if(u===Rv)return o.INT;if(u===Va)return o.UNSIGNED_INT;if(u===ra)return o.FLOAT;if(u===Ns)return r?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===ax)return o.ALPHA;if(u===Ei)return o.RGBA;if(u===rx)return o.LUMINANCE;if(u===sx)return o.LUMINANCE_ALPHA;if(u===Sr)return o.DEPTH_COMPONENT;if(u===Ps)return o.DEPTH_STENCIL;if(u===Ih)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===ox)return o.RED;if(u===Lv)return o.RED_INTEGER;if(u===lx)return o.RG;if(u===Dv)return o.RG_INTEGER;if(u===Uv)return o.RGBA_INTEGER;if(u===th||u===nh||u===ih||u===ah)if(p===ln)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===th)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===nh)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===ih)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===ah)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===th)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===nh)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===ih)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===ah)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===$g||u===e_||u===t_||u===n_)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===$g)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===e_)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===t_)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===n_)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===ux)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===i_||u===a_)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===i_)return p===ln?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===a_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===r_||u===s_||u===o_||u===l_||u===u_||u===c_||u===f_||u===h_||u===d_||u===p_||u===m_||u===g_||u===__||u===v_)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===r_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===s_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===o_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===l_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===u_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===c_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===f_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===h_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===d_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===p_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===m_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===g_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===__)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===v_)return p===ln?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===rh||u===y_||u===S_)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===rh)return p===ln?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===y_)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===S_)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===cx||u===x_||u===M_||u===E_)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===rh)return h.COMPRESSED_RED_RGTC1_EXT;if(u===x_)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===M_)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===E_)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===yr?r?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class AA extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sn extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RA={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const b of e.hand.values()){const x=i.getJointPose(b,r),v=this._getHandJoint(m,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=g.position.distanceTo(y.position),M=.02,R=.005;m.inputState.pinching&&S>M+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(RA)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Sn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class t0 extends Ln{constructor(e,i,r,l,u,d,h,p,m,g){if(g=g!==void 0?g:Sr,g!==Sr&&g!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Sr&&(r=Va),r===void 0&&g===Ps&&(r=yr),super(null,l,u,d,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Vt,this.minFilter=p!==void 0?p:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wA extends br{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,g=null,y=null,S=null,M=null,R=null;const b=i.getContextAttributes();let x=null,v=null;const U=[],C=[],N=new ei;N.layers.enable(1),N.viewport=new Ft;const B=new ei;B.layers.enable(2),B.viewport=new Ft;const V=[N,B],D=new AA;D.layers.enable(1),D.layers.enable(2);let oe=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let z=U[T];return z===void 0&&(z=new wh,U[T]=z),z.getTargetRaySpace()},this.getControllerGrip=function(T){let z=U[T];return z===void 0&&(z=new wh,U[T]=z),z.getGripSpace()},this.getHand=function(T){let z=U[T];return z===void 0&&(z=new wh,U[T]=z),z.getHandSpace()};function P(T){const z=C.indexOf(T.inputSource);if(z===-1)return;const ee=U[z];ee!==void 0&&(ee.update(T.inputSource,T.frame,m||d),ee.dispatchEvent({type:T.type,data:T.inputSource}))}function ve(){l.removeEventListener("select",P),l.removeEventListener("selectstart",P),l.removeEventListener("selectend",P),l.removeEventListener("squeeze",P),l.removeEventListener("squeezestart",P),l.removeEventListener("squeezeend",P),l.removeEventListener("end",ve),l.removeEventListener("inputsourceschange",ye);for(let T=0;T<U.length;T++){const z=C[T];z!==null&&(C[T]=null,U[T].disconnect(z))}oe=null,w=null,e.setRenderTarget(x),M=null,S=null,y=null,l=null,v=null,ce.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){u=T,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){h=T,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(T){m=T},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(T){if(l=T,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",P),l.addEventListener("selectstart",P),l.addEventListener("selectend",P),l.addEventListener("squeeze",P),l.addEventListener("squeezestart",P),l.addEventListener("squeezeend",P),l.addEventListener("end",ve),l.addEventListener("inputsourceschange",ye),b.xrCompatible!==!0&&await i.makeXRCompatible(),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:l.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,z),l.updateRenderState({baseLayer:M}),v=new ua(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Xa,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let z=null,ee=null,ue=null;b.depth&&(ue=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,z=b.stencil?Ps:Sr,ee=b.stencil?yr:Va);const Se={colorFormat:i.RGBA8,depthFormat:ue,scaleFactor:u};y=new XRWebGLBinding(l,i),S=y.createProjectionLayer(Se),l.updateRenderState({layers:[S]}),v=new ua(S.textureWidth,S.textureHeight,{format:Ei,type:Xa,depthTexture:new t0(S.textureWidth,S.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const we=e.properties.get(v);we.__ignoreDepthValues=S.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),ce.setContext(l),ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ye(T){for(let z=0;z<T.removed.length;z++){const ee=T.removed[z],ue=C.indexOf(ee);ue>=0&&(C[ue]=null,U[ue].disconnect(ee))}for(let z=0;z<T.added.length;z++){const ee=T.added[z];let ue=C.indexOf(ee);if(ue===-1){for(let we=0;we<U.length;we++)if(we>=C.length){C.push(ee),ue=we;break}else if(C[we]===null){C[we]=ee,ue=we;break}if(ue===-1)break}const Se=U[ue];Se&&Se.connect(ee)}}const te=new j,le=new j;function re(T,z,ee){te.setFromMatrixPosition(z.matrixWorld),le.setFromMatrixPosition(ee.matrixWorld);const ue=te.distanceTo(le),Se=z.projectionMatrix.elements,we=ee.projectionMatrix.elements,Oe=Se[14]/(Se[10]-1),Pe=Se[14]/(Se[10]+1),Ve=(Se[9]+1)/Se[5],Ht=(Se[9]-1)/Se[5],et=(Se[8]-1)/Se[0],K=(we[8]+1)/we[0],kt=Oe*et,Fe=Oe*K,Ke=ue/(-et+K),Ze=Ke*-et;z.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Ze),T.translateZ(Ke),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const Ct=Oe+Ke,rt=Pe+Ke,Je=kt-Ze,ct=Fe+(ue-Ze),Gt=Ve*Pe/rt*Ct,Jt=Ht*Pe/rt*Ct;T.projectionMatrix.makePerspective(Je,ct,Gt,Jt,Ct,rt),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function H(T,z){z===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(z.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(l===null)return;D.near=B.near=N.near=T.near,D.far=B.far=N.far=T.far,(oe!==D.near||w!==D.far)&&(l.updateRenderState({depthNear:D.near,depthFar:D.far}),oe=D.near,w=D.far);const z=T.parent,ee=D.cameras;H(D,z);for(let ue=0;ue<ee.length;ue++)H(ee[ue],z);ee.length===2?re(D,N,B):D.projectionMatrix.copy(N.projectionMatrix),X(T,D,z)};function X(T,z,ee){ee===null?T.matrix.copy(z.matrixWorld):(T.matrix.copy(ee.matrixWorld),T.matrix.invert(),T.matrix.multiply(z.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(z.projectionMatrix),T.projectionMatrixInverse.copy(z.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Fh*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(T){p=T,S!==null&&(S.fixedFoveation=T),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=T)};let q=null;function me(T,z){if(g=z.getViewerPose(m||d),R=z,g!==null){const ee=g.views;M!==null&&(e.setRenderTargetFramebuffer(v,M.framebuffer),e.setRenderTarget(v));let ue=!1;ee.length!==D.cameras.length&&(D.cameras.length=0,ue=!0);for(let Se=0;Se<ee.length;Se++){const we=ee[Se];let Oe=null;if(M!==null)Oe=M.getViewport(we);else{const Ve=y.getViewSubImage(S,we);Oe=Ve.viewport,Se===0&&(e.setRenderTargetTextures(v,Ve.colorTexture,S.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(v))}let Pe=V[Se];Pe===void 0&&(Pe=new ei,Pe.layers.enable(Se),Pe.viewport=new Ft,V[Se]=Pe),Pe.matrix.fromArray(we.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(we.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Se===0&&(D.matrix.copy(Pe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ue===!0&&D.cameras.push(Pe)}}for(let ee=0;ee<U.length;ee++){const ue=C[ee],Se=U[ee];ue!==null&&Se!==void 0&&Se.update(ue,z,m||d)}q&&q(T,z),z.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:z}),R=null}const ce=new Zv;ce.setAnimationLoop(me),this.setAnimationLoop=function(T){q=T},this.dispose=function(){}}}function CA(o,e){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Wv(o)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,U,C,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(x,v):v.isMeshToonMaterial?(u(x,v),y(x,v)):v.isMeshPhongMaterial?(u(x,v),g(x,v)):v.isMeshStandardMaterial?(u(x,v),S(x,v),v.isMeshPhysicalMaterial&&M(x,v,N)):v.isMeshMatcapMaterial?(u(x,v),R(x,v)):v.isMeshDepthMaterial?u(x,v):v.isMeshDistanceMaterial?(u(x,v),b(x,v)):v.isMeshNormalMaterial?u(x,v):v.isLineBasicMaterial?(d(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?p(x,v,U,C):v.isSpriteMaterial?m(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Xn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Xn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const U=e.get(v).envMap;if(U&&(x.envMap.value=U,x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const C=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*C,i(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function p(x,v,U,C){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*U,x.scale.value=C*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,U){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function R(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){const U=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function LA(o,e,i,r){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(U,C){const N=C.program;r.uniformBlockBinding(U,N)}function m(U,C){let N=l[U.id];N===void 0&&(R(U),N=g(U),l[U.id]=N,U.addEventListener("dispose",x));const B=C.program;r.updateUBOMapping(U,B);const V=e.render.frame;u[U.id]!==V&&(S(U),u[U.id]=V)}function g(U){const C=y();U.__bindingPointIndex=C;const N=o.createBuffer(),B=U.__size,V=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,B,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,N),N}function y(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const C=l[U.id],N=U.uniforms,B=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let V=0,D=N.length;V<D;V++){const oe=N[V];if(M(oe,V,B)===!0){const w=oe.__offset,P=Array.isArray(oe.value)?oe.value:[oe.value];let ve=0;for(let ye=0;ye<P.length;ye++){const te=P[ye],le=b(te);typeof te=="number"?(oe.__data[0]=te,o.bufferSubData(o.UNIFORM_BUFFER,w+ve,oe.__data)):te.isMatrix3?(oe.__data[0]=te.elements[0],oe.__data[1]=te.elements[1],oe.__data[2]=te.elements[2],oe.__data[3]=te.elements[0],oe.__data[4]=te.elements[3],oe.__data[5]=te.elements[4],oe.__data[6]=te.elements[5],oe.__data[7]=te.elements[0],oe.__data[8]=te.elements[6],oe.__data[9]=te.elements[7],oe.__data[10]=te.elements[8],oe.__data[11]=te.elements[0]):(te.toArray(oe.__data,ve),ve+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,w,oe.__data)}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(U,C,N){const B=U.value;if(N[C]===void 0){if(typeof B=="number")N[C]=B;else{const V=Array.isArray(B)?B:[B],D=[];for(let oe=0;oe<V.length;oe++)D.push(V[oe].clone());N[C]=D}return!0}else if(typeof B=="number"){if(N[C]!==B)return N[C]=B,!0}else{const V=Array.isArray(N[C])?N[C]:[N[C]],D=Array.isArray(B)?B:[B];for(let oe=0;oe<V.length;oe++){const w=V[oe];if(w.equals(D[oe])===!1)return w.copy(D[oe]),!0}}return!1}function R(U){const C=U.uniforms;let N=0;const B=16;let V=0;for(let D=0,oe=C.length;D<oe;D++){const w=C[D],P={boundary:0,storage:0},ve=Array.isArray(w.value)?w.value:[w.value];for(let ye=0,te=ve.length;ye<te;ye++){const le=ve[ye],re=b(le);P.boundary+=re.boundary,P.storage+=re.storage}if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=N,D>0){V=N%B;const ye=B-V;V!==0&&ye-P.boundary<0&&(N+=B-V,w.__offset=N)}N+=P.storage}return V=N%B,V>0&&(N+=B-V),U.__size=N,U.__cache={},this}function b(U){const C={boundary:0,storage:0};return typeof U=="number"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),C}function x(U){const C=U.target;C.removeEventListener("dispose",x);const N=d.indexOf(C.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function v(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},u={}}return{bind:p,update:m,dispose:v}}class n0{constructor(e={}){const{canvas:i=Tx(),context:r=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let S;r!==null?S=r.getContextAttributes().alpha:S=d;const M=new Uint32Array(4),R=new Int32Array(4);let b=null,x=null;const v=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=ka,this.toneMappingExposure=1;const C=this;let N=!1,B=0,V=0,D=null,oe=-1,w=null;const P=new Ft,ve=new Ft;let ye=null;const te=new St(0);let le=0,re=i.width,H=i.height,X=1,q=null,me=null;const ce=new Ft(0,0,re,H),T=new Ft(0,0,re,H);let z=!1;const ee=new Yh;let ue=!1,Se=!1,we=null;const Oe=new Kt,Pe=new Ge,Ve=new j,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return D===null?X:1}let K=r;function kt(L,Q){for(let he=0;he<L.length;he++){const $=L[he],fe=i.getContext($,Q);if(fe!==null)return fe}return null}try{const L={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wh}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",ie,!1),i.addEventListener("webglcontextcreationerror",Me,!1),K===null){const Q=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&Q.shift(),K=kt(Q,L),K===null)throw kt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Fe,Ke,Ze,Ct,rt,Je,ct,Gt,Jt,O,A,ne,be,xe,Ee,He,Ce,se,F,_e,Le,Te,Re,$e;function ft(){Fe=new Gb(K),Ke=new Pb(K,Fe,e),Fe.init(Ke),Te=new TA(K,Fe,Ke),Ze=new MA(K,Fe,Ke),Ct=new Xb(K),rt=new lA,Je=new EA(K,Fe,Ze,rt,Ke,Te,Ct),ct=new Bb(C),Gt=new Hb(C),Jt=new eM(K,Ke),Re=new Ob(K,Fe,Jt,Ke),O=new Vb(K,Jt,Ct,Re),A=new Yb(K,O,Jt,Ct),F=new qb(K,Ke,Je),He=new zb(rt),ne=new oA(C,ct,Gt,Fe,Ke,Re,He),be=new CA(C,rt),xe=new cA,Ee=new gA(Fe,Ke),se=new Ub(C,ct,Gt,Ze,A,S,p),Ce=new xA(C,A,Ke),$e=new LA(K,Ct,Ke,Ze),_e=new Nb(K,Fe,Ct,Ke),Le=new kb(K,Fe,Ct,Ke),Ct.programs=ne.programs,C.capabilities=Ke,C.extensions=Fe,C.properties=rt,C.renderLists=xe,C.shadowMap=Ce,C.state=Ze,C.info=Ct}ft();const k=new wA(C,K);this.xr=k,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const L=Fe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Fe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(L){L!==void 0&&(X=L,this.setSize(re,H,!1))},this.getSize=function(L){return L.set(re,H)},this.setSize=function(L,Q,he=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=L,H=Q,i.width=Math.floor(L*X),i.height=Math.floor(Q*X),he===!0&&(i.style.width=L+"px",i.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(re*X,H*X).floor()},this.setDrawingBufferSize=function(L,Q,he){re=L,H=Q,X=he,i.width=Math.floor(L*he),i.height=Math.floor(Q*he),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(P)},this.getViewport=function(L){return L.copy(ce)},this.setViewport=function(L,Q,he,$){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,Q,he,$),Ze.viewport(P.copy(ce).multiplyScalar(X).floor())},this.getScissor=function(L){return L.copy(T)},this.setScissor=function(L,Q,he,$){L.isVector4?T.set(L.x,L.y,L.z,L.w):T.set(L,Q,he,$),Ze.scissor(ve.copy(T).multiplyScalar(X).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(L){Ze.setScissorTest(z=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){me=L},this.getClearColor=function(L){return L.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(L=!0,Q=!0,he=!0){let $=0;if(L){let fe=!1;if(D!==null){const Ne=D.texture.format;fe=Ne===Uv||Ne===Dv||Ne===Lv}if(fe){const Ne=D.texture.type,Xe=Ne===Xa||Ne===Va||Ne===jh||Ne===yr||Ne===wv||Ne===Cv,je=se.getClearColor(),qe=se.getClearAlpha(),nt=je.r,We=je.g,Ie=je.b;Xe?(M[0]=nt,M[1]=We,M[2]=Ie,M[3]=qe,K.clearBufferuiv(K.COLOR,0,M)):(R[0]=nt,R[1]=We,R[2]=Ie,R[3]=qe,K.clearBufferiv(K.COLOR,0,R))}else $|=K.COLOR_BUFFER_BIT}Q&&($|=K.DEPTH_BUFFER_BIT),he&&($|=K.STENCIL_BUFFER_BIT),K.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",ie,!1),i.removeEventListener("webglcontextcreationerror",Me,!1),xe.dispose(),Ee.dispose(),rt.dispose(),ct.dispose(),Gt.dispose(),A.dispose(),Re.dispose(),$e.dispose(),ne.dispose(),k.dispose(),k.removeEventListener("sessionstart",Mt),k.removeEventListener("sessionend",Mn),we&&(we.dispose(),we=null),mn.stop()};function De(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const L=Ct.autoReset,Q=Ce.enabled,he=Ce.autoUpdate,$=Ce.needsUpdate,fe=Ce.type;ft(),Ct.autoReset=L,Ce.enabled=Q,Ce.autoUpdate=he,Ce.needsUpdate=$,Ce.type=fe}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ae(L){const Q=L.target;Q.removeEventListener("dispose",Ae),it(Q)}function it(L){gt(L),rt.remove(L)}function gt(L){const Q=rt.get(L).programs;Q!==void 0&&(Q.forEach(function(he){ne.releaseProgram(he)}),L.isShaderMaterial&&ne.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,he,$,fe,Ne){Q===null&&(Q=Ht);const Xe=fe.isMesh&&fe.matrixWorld.determinant()<0,je=Ti(L,Q,he,$,fe);Ze.setMaterial($,Xe);let qe=he.index,nt=1;if($.wireframe===!0){if(qe=O.getWireframeAttribute(he),qe===void 0)return;nt=2}const We=he.drawRange,Ie=he.attributes.position;let Ot=We.start*nt,zt=(We.start+We.count)*nt;Ne!==null&&(Ot=Math.max(Ot,Ne.start*nt),zt=Math.min(zt,(Ne.start+Ne.count)*nt)),qe!==null?(Ot=Math.max(Ot,0),zt=Math.min(zt,qe.count)):Ie!=null&&(Ot=Math.max(Ot,0),zt=Math.min(zt,Ie.count));const $t=zt-Ot;if($t<0||$t===1/0)return;Re.setup(fe,$,je,he,qe);let bn,Xt=_e;if(qe!==null&&(bn=Jt.get(qe),Xt=Le,Xt.setIndex(bn)),fe.isMesh)$.wireframe===!0?(Ze.setLineWidth($.wireframeLinewidth*et()),Xt.setMode(K.LINES)):Xt.setMode(K.TRIANGLES);else if(fe.isLine){let lt=$.linewidth;lt===void 0&&(lt=1),Ze.setLineWidth(lt*et()),fe.isLineSegments?Xt.setMode(K.LINES):fe.isLineLoop?Xt.setMode(K.LINE_LOOP):Xt.setMode(K.LINE_STRIP)}else fe.isPoints?Xt.setMode(K.POINTS):fe.isSprite&&Xt.setMode(K.TRIANGLES);if(fe.isInstancedMesh)Xt.renderInstances(Ot,$t,fe.count);else if(he.isInstancedBufferGeometry){const lt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ar=Math.min(he.instanceCount,lt);Xt.renderInstances(Ot,$t,Ar)}else Xt.render(Ot,$t)},this.compile=function(L,Q){function he($,fe,Ne){$.transparent===!0&&$.side===mi&&$.forceSinglePass===!1?($.side=Xn,$.needsUpdate=!0,ja($,fe,Ne),$.side=Di,$.needsUpdate=!0,ja($,fe,Ne),$.side=mi):ja($,fe,Ne)}x=Ee.get(L),x.init(),U.push(x),L.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights(C._useLegacyLights),L.traverse(function($){const fe=$.material;if(fe)if(Array.isArray(fe))for(let Ne=0;Ne<fe.length;Ne++){const Xe=fe[Ne];he(Xe,L,$)}else he(fe,L,$)}),U.pop(),x=null};let Tt=null;function xn(L){Tt&&Tt(L)}function Mt(){mn.stop()}function Mn(){mn.start()}const mn=new Zv;mn.setAnimationLoop(xn),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(L){Tt=L,k.setAnimationLoop(L),L===null?mn.stop():mn.start()},k.addEventListener("sessionstart",Mt),k.addEventListener("sessionend",Mn),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(Q),Q=k.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,Q,D),x=Ee.get(L,U.length),x.init(),U.push(x),Oe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ee.setFromProjectionMatrix(Oe),Se=this.localClippingEnabled,ue=He.init(this.clippingPlanes,Se),b=xe.get(L,v.length),b.init(),v.push(b),Fs(L,Q,0,C.sortObjects),b.finish(),C.sortObjects===!0&&b.sort(q,me),this.info.render.frame++,ue===!0&&He.beginShadows();const he=x.state.shadowsArray;if(Ce.render(he,L,Q),ue===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(b,L),x.setupLights(C._useLegacyLights),Q.isArrayCamera){const $=Q.cameras;for(let fe=0,Ne=$.length;fe<Ne;fe++){const Xe=$[fe];Hs(b,L,Xe,Xe.viewport)}}else Hs(b,L,Q);D!==null&&(Je.updateMultisampleRenderTarget(D),Je.updateRenderTargetMipmap(D)),L.isScene===!0&&L.onAfterRender(C,L,Q),Re.resetDefaultState(),oe=-1,w=null,U.pop(),U.length>0?x=U[U.length-1]:x=null,v.pop(),v.length>0?b=v[v.length-1]:b=null};function Fs(L,Q,he,$){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)he=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ee.intersectsSprite(L)){$&&Ve.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Oe);const Xe=A.update(L),je=L.material;je.visible&&b.push(L,Xe,je,he,Ve.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ee.intersectsObject(L))){const Xe=A.update(L),je=L.material;if($&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ve.copy(L.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Ve.copy(Xe.boundingSphere.center)),Ve.applyMatrix4(L.matrixWorld).applyMatrix4(Oe)),Array.isArray(je)){const qe=Xe.groups;for(let nt=0,We=qe.length;nt<We;nt++){const Ie=qe[nt],Ot=je[Ie.materialIndex];Ot&&Ot.visible&&b.push(L,Xe,Ot,he,Ve.z,Ie)}}else je.visible&&b.push(L,Xe,je,he,Ve.z,null)}}const Ne=L.children;for(let Xe=0,je=Ne.length;Xe<je;Xe++)Fs(Ne[Xe],Q,he,$)}function Hs(L,Q,he,$){const fe=L.opaque,Ne=L.transmissive,Xe=L.transparent;x.setupLightsView(he),ue===!0&&He.setGlobalState(C.clippingPlanes,he),Ne.length>0&&Wo(fe,Ne,Q,he),$&&Ze.viewport(P.copy($)),fe.length>0&&ha(fe,Q,he),Ne.length>0&&ha(Ne,Q,he),Xe.length>0&&ha(Xe,Q,he),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Wo(L,Q,he,$){const fe=Ke.isWebGL2;we===null&&(we=new ua(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?Ns:Xa,minFilter:Vo,samples:fe?4:0})),C.getDrawingBufferSize(Pe),fe?we.setSize(Pe.x,Pe.y):we.setSize(Hh(Pe.x),Hh(Pe.y));const Ne=C.getRenderTarget();C.setRenderTarget(we),C.getClearColor(te),le=C.getClearAlpha(),le<1&&C.setClearColor(16777215,.5),C.clear();const Xe=C.toneMapping;C.toneMapping=ka,ha(L,he,$),Je.updateMultisampleRenderTarget(we),Je.updateRenderTargetMipmap(we);let je=!1;for(let qe=0,nt=Q.length;qe<nt;qe++){const We=Q[qe],Ie=We.object,Ot=We.geometry,zt=We.material,$t=We.group;if(zt.side===mi&&Ie.layers.test($.layers)){const bn=zt.side;zt.side=Xn,zt.needsUpdate=!0,Tr(Ie,he,$,Ot,zt,$t),zt.side=bn,zt.needsUpdate=!0,je=!0}}je===!0&&(Je.updateMultisampleRenderTarget(we),Je.updateRenderTargetMipmap(we)),C.setRenderTarget(Ne),C.setClearColor(te,le),C.toneMapping=Xe}function ha(L,Q,he){const $=Q.isScene===!0?Q.overrideMaterial:null;for(let fe=0,Ne=L.length;fe<Ne;fe++){const Xe=L[fe],je=Xe.object,qe=Xe.geometry,nt=$===null?Xe.material:$,We=Xe.group;je.layers.test(he.layers)&&Tr(je,Q,he,qe,nt,We)}}function Tr(L,Q,he,$,fe,Ne){L.onBeforeRender(C,Q,he,$,fe,Ne),L.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),fe.onBeforeRender(C,Q,he,$,L,Ne),fe.transparent===!0&&fe.side===mi&&fe.forceSinglePass===!1?(fe.side=Xn,fe.needsUpdate=!0,C.renderBufferDirect(he,Q,$,fe,L,Ne),fe.side=Di,fe.needsUpdate=!0,C.renderBufferDirect(he,Q,$,fe,L,Ne),fe.side=mi):C.renderBufferDirect(he,Q,$,fe,L,Ne),L.onAfterRender(C,Q,he,$,fe,Ne)}function ja(L,Q,he){Q.isScene!==!0&&(Q=Ht);const $=rt.get(L),fe=x.state.lights,Ne=x.state.shadowsArray,Xe=fe.state.version,je=ne.getParameters(L,fe.state,Ne,Q,he),qe=ne.getProgramCacheKey(je);let nt=$.programs;$.environment=L.isMeshStandardMaterial?Q.environment:null,$.fog=Q.fog,$.envMap=(L.isMeshStandardMaterial?Gt:ct).get(L.envMap||$.environment),nt===void 0&&(L.addEventListener("dispose",Ae),nt=new Map,$.programs=nt);let We=nt.get(qe);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===Xe)return Gs(L,je),We}else je.uniforms=ne.getUniforms(L),L.onBuild(he,je,C),L.onBeforeCompile(je,C),We=ne.acquireProgram(je,qe),nt.set(qe,We),$.uniforms=je.uniforms;const Ie=$.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ie.clippingPlanes=He.uniform),Gs(L,je),$.needsLights=En(L),$.lightsStateVersion=Xe,$.needsLights&&(Ie.ambientLightColor.value=fe.state.ambient,Ie.lightProbe.value=fe.state.probe,Ie.directionalLights.value=fe.state.directional,Ie.directionalLightShadows.value=fe.state.directionalShadow,Ie.spotLights.value=fe.state.spot,Ie.spotLightShadows.value=fe.state.spotShadow,Ie.rectAreaLights.value=fe.state.rectArea,Ie.ltc_1.value=fe.state.rectAreaLTC1,Ie.ltc_2.value=fe.state.rectAreaLTC2,Ie.pointLights.value=fe.state.point,Ie.pointLightShadows.value=fe.state.pointShadow,Ie.hemisphereLights.value=fe.state.hemi,Ie.directionalShadowMap.value=fe.state.directionalShadowMap,Ie.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,Ie.spotShadowMap.value=fe.state.spotShadowMap,Ie.spotLightMatrix.value=fe.state.spotLightMatrix,Ie.spotLightMap.value=fe.state.spotLightMap,Ie.pointShadowMap.value=fe.state.pointShadowMap,Ie.pointShadowMatrix.value=fe.state.pointShadowMatrix);const Ot=We.getUniforms(),zt=wu.seqWithValue(Ot.seq,Ie);return $.currentProgram=We,$.uniformsList=zt,We}function Gs(L,Q){const he=rt.get(L);he.outputColorSpace=Q.outputColorSpace,he.instancing=Q.instancing,he.instancingColor=Q.instancingColor,he.skinning=Q.skinning,he.morphTargets=Q.morphTargets,he.morphNormals=Q.morphNormals,he.morphColors=Q.morphColors,he.morphTargetsCount=Q.morphTargetsCount,he.numClippingPlanes=Q.numClippingPlanes,he.numIntersection=Q.numClipIntersection,he.vertexAlphas=Q.vertexAlphas,he.vertexTangents=Q.vertexTangents,he.toneMapping=Q.toneMapping}function Ti(L,Q,he,$,fe){Q.isScene!==!0&&(Q=Ht),Je.resetTextureUnits();const Ne=Q.fog,Xe=$.isMeshStandardMaterial?Q.environment:null,je=D===null?C.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ui,qe=($.isMeshStandardMaterial?Gt:ct).get($.envMap||Xe),nt=$.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,We=!!he.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!he.morphAttributes.position,Ot=!!he.morphAttributes.normal,zt=!!he.morphAttributes.color;let $t=ka;$.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&($t=C.toneMapping);const bn=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Xt=bn!==void 0?bn.length:0,lt=rt.get($),Ar=x.state.lights;if(ue===!0&&(Se===!0||L!==w)){const An=L===w&&$.id===oe;He.setState($,L,An)}let Wt=!1;$.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Ar.state.version||lt.outputColorSpace!==je||fe.isInstancedMesh&&lt.instancing===!1||!fe.isInstancedMesh&&lt.instancing===!0||fe.isSkinnedMesh&&lt.skinning===!1||!fe.isSkinnedMesh&&lt.skinning===!0||fe.isInstancedMesh&&lt.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&lt.instancingColor===!1&&fe.instanceColor!==null||lt.envMap!==qe||$.fog===!0&&lt.fog!==Ne||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==He.numPlanes||lt.numIntersection!==He.numIntersection)||lt.vertexAlphas!==nt||lt.vertexTangents!==We||lt.morphTargets!==Ie||lt.morphNormals!==Ot||lt.morphColors!==zt||lt.toneMapping!==$t||Ke.isWebGL2===!0&&lt.morphTargetsCount!==Xt)&&(Wt=!0):(Wt=!0,lt.__version=$.version);let ti=lt.currentProgram;Wt===!0&&(ti=ja($,Q,fe));let qa=!1,Un=!1,Tn=!1;const hn=ti.getUniforms(),Oi=lt.uniforms;if(Ze.useProgram(ti.program)&&(qa=!0,Un=!0,Tn=!0),$.id!==oe&&(oe=$.id,Un=!0),qa||w!==L){hn.setValue(K,"projectionMatrix",L.projectionMatrix),hn.setValue(K,"viewMatrix",L.matrixWorldInverse);const An=hn.map.cameraPosition;An!==void 0&&An.setValue(K,Ve.setFromMatrixPosition(L.matrixWorld)),Ke.logarithmicDepthBuffer&&hn.setValue(K,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&hn.setValue(K,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,Un=!0,Tn=!0)}if(fe.isSkinnedMesh){hn.setOptional(K,fe,"bindMatrix"),hn.setOptional(K,fe,"bindMatrixInverse");const An=fe.skeleton;An&&(Ke.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),hn.setValue(K,"boneTexture",An.boneTexture,Je),hn.setValue(K,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ya=he.morphAttributes;if((Ya.position!==void 0||Ya.normal!==void 0||Ya.color!==void 0&&Ke.isWebGL2===!0)&&F.update(fe,he,ti),(Un||lt.receiveShadow!==fe.receiveShadow)&&(lt.receiveShadow=fe.receiveShadow,hn.setValue(K,"receiveShadow",fe.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Oi.envMap.value=qe,Oi.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Un&&(hn.setValue(K,"toneMappingExposure",C.toneMappingExposure),lt.needsLights&&sn(Oi,Tn),Ne&&$.fog===!0&&be.refreshFogUniforms(Oi,Ne),be.refreshMaterialUniforms(Oi,$,X,H,we),wu.upload(K,lt.uniformsList,Oi,Je)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(wu.upload(K,lt.uniformsList,Oi,Je),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&hn.setValue(K,"center",fe.center),hn.setValue(K,"modelViewMatrix",fe.modelViewMatrix),hn.setValue(K,"normalMatrix",fe.normalMatrix),hn.setValue(K,"modelMatrix",fe.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const An=$.uniformsGroups;for(let da=0,Hu=An.length;da<Hu;da++)if(Ke.isWebGL2){const On=An[da];$e.update(On,ti),$e.bind(On,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function sn(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function En(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(L,Q,he){rt.get(L.texture).__webglTexture=Q,rt.get(L.depthTexture).__webglTexture=he;const $=rt.get(L);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=he===void 0,$.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,Q){const he=rt.get(L);he.__webglFramebuffer=Q,he.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(L,Q=0,he=0){D=L,B=Q,V=he;let $=!0,fe=null,Ne=!1,Xe=!1;if(L){const qe=rt.get(L);qe.__useDefaultFramebuffer!==void 0?(Ze.bindFramebuffer(K.FRAMEBUFFER,null),$=!1):qe.__webglFramebuffer===void 0?Je.setupRenderTarget(L):qe.__hasExternalTextures&&Je.rebindTextures(L,rt.get(L.texture).__webglTexture,rt.get(L.depthTexture).__webglTexture);const nt=L.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Xe=!0);const We=rt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(We[Q])?fe=We[Q][he]:fe=We[Q],Ne=!0):Ke.isWebGL2&&L.samples>0&&Je.useMultisampledRTT(L)===!1?fe=rt.get(L).__webglMultisampledFramebuffer:Array.isArray(We)?fe=We[he]:fe=We,P.copy(L.viewport),ve.copy(L.scissor),ye=L.scissorTest}else P.copy(ce).multiplyScalar(X).floor(),ve.copy(T).multiplyScalar(X).floor(),ye=z;if(Ze.bindFramebuffer(K.FRAMEBUFFER,fe)&&Ke.drawBuffers&&$&&Ze.drawBuffers(L,fe),Ze.viewport(P),Ze.scissor(ve),Ze.setScissorTest(ye),Ne){const qe=rt.get(L.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Q,qe.__webglTexture,he)}else if(Xe){const qe=rt.get(L.texture),nt=Q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,qe.__webglTexture,he||0,nt)}oe=-1},this.readRenderTargetPixels=function(L,Q,he,$,fe,Ne,Xe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=rt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(je=je[Xe]),je){Ze.bindFramebuffer(K.FRAMEBUFFER,je);try{const qe=L.texture,nt=qe.format,We=qe.type;if(nt!==Ei&&Te.convert(nt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=We===Ns&&(Fe.has("EXT_color_buffer_half_float")||Ke.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(We!==Xa&&Te.convert(We)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===ra&&(Ke.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-$&&he>=0&&he<=L.height-fe&&K.readPixels(Q,he,$,fe,Te.convert(nt),Te.convert(We),Ne)}finally{const qe=D!==null?rt.get(D).__webglFramebuffer:null;Ze.bindFramebuffer(K.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(L,Q,he=0){const $=Math.pow(2,-he),fe=Math.floor(Q.image.width*$),Ne=Math.floor(Q.image.height*$);Je.setTexture2D(Q,0),K.copyTexSubImage2D(K.TEXTURE_2D,he,0,0,L.x,L.y,fe,Ne),Ze.unbindTexture()},this.copyTextureToTexture=function(L,Q,he,$=0){const fe=Q.image.width,Ne=Q.image.height,Xe=Te.convert(he.format),je=Te.convert(he.type);Je.setTexture2D(he,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,he.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,he.unpackAlignment),Q.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,$,L.x,L.y,fe,Ne,Xe,je,Q.image.data):Q.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,$,L.x,L.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Xe,Q.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,$,L.x,L.y,Xe,je,Q.image),$===0&&he.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Ze.unbindTexture()},this.copyTextureToTexture3D=function(L,Q,he,$,fe=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=L.max.x-L.min.x+1,Xe=L.max.y-L.min.y+1,je=L.max.z-L.min.z+1,qe=Te.convert($.format),nt=Te.convert($.type);let We;if($.isData3DTexture)Je.setTexture3D($,0),We=K.TEXTURE_3D;else if($.isDataArrayTexture)Je.setTexture2DArray($,0),We=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,$.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,$.unpackAlignment);const Ie=K.getParameter(K.UNPACK_ROW_LENGTH),Ot=K.getParameter(K.UNPACK_IMAGE_HEIGHT),zt=K.getParameter(K.UNPACK_SKIP_PIXELS),$t=K.getParameter(K.UNPACK_SKIP_ROWS),bn=K.getParameter(K.UNPACK_SKIP_IMAGES),Xt=he.isCompressedTexture?he.mipmaps[0]:he.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Xt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Xt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,L.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,L.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,L.min.z),he.isDataTexture||he.isData3DTexture?K.texSubImage3D(We,fe,Q.x,Q.y,Q.z,Ne,Xe,je,qe,nt,Xt.data):he.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(We,fe,Q.x,Q.y,Q.z,Ne,Xe,je,qe,Xt.data)):K.texSubImage3D(We,fe,Q.x,Q.y,Q.z,Ne,Xe,je,qe,nt,Xt),K.pixelStorei(K.UNPACK_ROW_LENGTH,Ie),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ot),K.pixelStorei(K.UNPACK_SKIP_PIXELS,zt),K.pixelStorei(K.UNPACK_SKIP_ROWS,$t),K.pixelStorei(K.UNPACK_SKIP_IMAGES,bn),fe===0&&$.generateMipmaps&&K.generateMipmap(We),Ze.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Je.setTextureCube(L,0):L.isData3DTexture?Je.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Je.setTexture2DArray(L,0):Je.setTexture2D(L,0),Ze.unbindTexture()},this.resetState=function(){B=0,V=0,D=null,Ze.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?xr:Ov}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?It:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class DA extends n0{}DA.prototype.isWebGL1Renderer=!0;class UA extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class OA{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Bh,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Wa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new j;class Ou{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyMatrix4(e),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyNormalMatrix(e),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.transformDirection(e),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}setX(e,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=aa(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=aa(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=aa(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=aa(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Dt(i,this.array),r=Dt(r,this.array),l=Dt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e=e*this.data.stride+this.offset,this.normalized&&(i=Dt(i,this.array),r=Dt(r,this.array),l=Dt(l,this.array),u=Dt(u,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=u,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new bi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ou(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class i0 extends Bs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bs;const zo=new j,Ts=new j,As=new j,Rs=new Ge,Bo=new Ge,a0=new Kt,xu=new j,Io=new j,Mu=new j,lv=new Ge,Ch=new Ge,uv=new Ge;class NA extends Dn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new fa;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new OA(i,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Ou(r,3,0,!1)),bs.setAttribute("uv",new Ou(r,2,3,!1))}this.geometry=bs,this.material=e!==void 0?e:new i0,this.center=new Ge(.5,.5)}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),a0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const d=this.center;Eu(xu.set(-.5,-.5,0),As,d,Ts,l,u),Eu(Io.set(.5,-.5,0),As,d,Ts,l,u),Eu(Mu.set(.5,.5,0),As,d,Ts,l,u),lv.set(0,0),Ch.set(1,0),uv.set(1,1);let h=e.ray.intersectTriangle(xu,Io,Mu,!1,zo);if(h===null&&(Eu(Io.set(-.5,.5,0),As,d,Ts,l,u),Ch.set(0,1),h=e.ray.intersectTriangle(xu,Mu,Io,!1,zo),h===null))return;const p=e.ray.origin.distanceTo(zo);p<e.near||p>e.far||i.push({distance:p,point:zo.clone(),uv:pi.getInterpolation(zo,xu,Io,Mu,lv,Ch,uv,new Ge),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Eu(o,e,i,r,l,u){Rs.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Bo.x=u*Rs.x-l*Rs.y,Bo.y=l*Rs.x+u*Rs.y):Bo.copy(Rs),o.copy(e),o.x+=Bo.x,o.y+=Bo.y,o.applyMatrix4(a0)}class Cu extends Ln{constructor(e,i,r,l,u,d,h,p,m){super(e,i,r,l,u,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ko extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nv,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class r0 extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const Lh=new Kt,cv=new j,fv=new j;class PA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;cv.setFromMatrixPosition(e.matrixWorld),i.position.copy(cv),fv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(fv),i.updateMatrixWorld(),Lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hv=new Kt,Fo=new j,Dh=new j;class zA extends PA{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Fo),Dh.copy(r.position),Dh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Dh),r.updateMatrixWorld(),l.makeTranslation(-Fo.x,-Fo.y,-Fo.z),hv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hv)}}class BA extends r0{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new zA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class IA extends r0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class s0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=dv();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function dv(){return(typeof performance>"u"?Date:performance).now()}class pv{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Bn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);function Kh(o,e,i,r,l,u,d,h){const p=(D,oe,w,P)=>[new Ge(D/d,1-P/h),new Ge(w/d,1-P/h),new Ge(w/d,1-oe/h),new Ge(D/d,1-oe/h)],m=p(e+u,i,e+r+u,i+u),g=p(e+r+u,i,e+r*2+u,i+u),y=p(e,i+u,e+u,i+u+l),S=p(e+u,i+u,e+r+u,i+u+l),M=p(e+r+u,i+u,e+r+u*2,i+l+u),R=p(e+r+u*2,i+u,e+r*2+u*2,i+l+u),b=o.attributes.uv,x=[M[3],M[2],M[0],M[1]],v=[y[3],y[2],y[0],y[1]],U=[m[3],m[2],m[0],m[1]],C=[g[0],g[1],g[3],g[2]],N=[S[3],S[2],S[0],S[1]],B=[R[3],R[2],R[0],R[1]],V=[];for(const D of[x,v,U,C,N,B])for(const oe of D)V.push(oe.x,oe.y);b.set(new Float32Array(V)),b.needsUpdate=!0}function fi(o,e,i,r,l,u){Kh(o,e,i,r,l,u,64,64)}function Vh(o,e,i,r,l,u){Kh(o,e,i,r,l,u,64,32)}class gr extends Sn{constructor(e,i){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:i}),e.name="inner",i.name="outer"}}class FA extends Sn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new ko({side:Di}),this.layer2Material=new ko({side:mi,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new Qt(8,8,8);fi(e,0,0,8,8,8);const i=new Ut(e,this.layer1Material),r=new Qt(9,9,9);fi(r,32,0,8,8,8);const l=new Ut(r,this.layer2Material);this.head=new gr(i,l),this.head.name="head",this.head.add(i,l),i.position.y=4,l.position.y=4,this.add(this.head);const u=new Qt(8,12,4);fi(u,16,16,8,12,4);const d=new Ut(u,this.layer1Material),h=new Qt(8.5,12.5,4.5);fi(h,16,32,8,12,4);const p=new Ut(h,this.layer2Material);this.body=new gr(d,p),this.body.name="body",this.body.add(d,p),this.body.position.y=-6,this.add(this.body);const m=new Qt,g=new Ut(m,this.layer1MaterialBiased);this.modelListeners.push(()=>{g.scale.x=this.slim?3:4,g.scale.y=12,g.scale.z=4,fi(m,40,16,this.slim?3:4,12,4)});const y=new Qt,S=new Ut(y,this.layer2MaterialBiased);this.modelListeners.push(()=>{S.scale.x=this.slim?3.5:4.5,S.scale.y=12.5,S.scale.z=4.5,fi(y,40,32,this.slim?3:4,12,4)});const M=new Sn;M.add(g,S),this.modelListeners.push(()=>{M.position.x=this.slim?-.5:-1}),M.position.y=-4,this.rightArm=new gr(g,S),this.rightArm.name="rightArm",this.rightArm.add(M),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const R=new Qt,b=new Ut(R,this.layer1MaterialBiased);this.modelListeners.push(()=>{b.scale.x=this.slim?3:4,b.scale.y=12,b.scale.z=4,fi(R,32,48,this.slim?3:4,12,4)});const x=new Qt,v=new Ut(x,this.layer2MaterialBiased);this.modelListeners.push(()=>{v.scale.x=this.slim?3.5:4.5,v.scale.y=12.5,v.scale.z=4.5,fi(x,48,48,this.slim?3:4,12,4)});const U=new Sn;U.add(b,v),this.modelListeners.push(()=>{U.position.x=this.slim?.5:1}),U.position.y=-4,this.leftArm=new gr(b,v),this.leftArm.name="leftArm",this.leftArm.add(U),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const C=new Qt(4,12,4);fi(C,0,16,4,12,4);const N=new Ut(C,this.layer1MaterialBiased),B=new Qt(4.5,12.5,4.5);fi(B,0,32,4,12,4);const V=new Ut(B,this.layer2MaterialBiased),D=new Sn;D.add(N,V),D.position.y=-6,this.rightLeg=new gr(N,V),this.rightLeg.name="rightLeg",this.rightLeg.add(D),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const oe=new Qt(4,12,4);fi(oe,16,48,4,12,4);const w=new Ut(oe,this.layer1MaterialBiased),P=new Qt(4.5,12.5,4.5);fi(P,0,48,4,12,4);const ve=new Ut(P,this.layer2MaterialBiased),ye=new Sn;ye.add(w,ve),ye.position.y=-6,this.leftLeg=new gr(w,ve),this.leftLeg.name="leftLeg",this.leftLeg.add(ye),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(i=>i())}getBodyParts(){return this.children.filter(e=>e instanceof gr)}setInnerLayerVisible(e){this.getBodyParts().forEach(i=>i.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(i=>i.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class HA extends Sn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ko({side:mi,transparent:!0,alphaTest:1e-5});const e=new Qt(10,16,1);Vh(e,0,0,10,16,1),this.cape=new Ut(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class GA extends Sn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ko({side:mi,transparent:!0,alphaTest:1e-5});const e=new Qt(12,22,4);Vh(e,22,0,10,20,2);const i=new Ut(e,this.material);i.position.x=-5,i.position.y=-10,i.position.z=-1,this.leftWing=new Sn,this.leftWing.add(i),this.add(this.leftWing);const r=new Qt(12,22,4);Vh(r,22,0,10,20,2);const l=new Ut(r,this.material);l.scale.x=-1,l.position.x=5,l.position.y=-10,l.position.z=-1,this.rightWing=new Sn,this.rightWing.add(l),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class VA extends Sn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ko({side:Di});const e=new Qt(8,8,4/3);Kh(e,0,0,6,6,1,14,7),this.rightEar=new Ut(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Ut(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const mv=10.8*Math.PI/180;class kA extends Sn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new FA,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new HA,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=mv,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new GA,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new VA,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=mv,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function bu(o){return o instanceof HTMLImageElement||o instanceof HTMLVideoElement||o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas}function kh(o,e,i,r,l){const u=o.getImageData(e,i,r,l);for(let d=0;d<r;d++)for(let h=0;h<l;h++){const p=(d+h*r)*4;if(u.data[p+3]!==255)return!0}return!1}function Iu(o){return o/64}function gv(o,e,i){if(i){if(kh(o,0,0,e,e))return}else if(kh(o,0,0,e,e/2))return;const r=Iu(e),l=(u,d,h,p)=>o.clearRect(u*r,d*r,h*r,p*r);l(40,0,8,8),l(48,0,8,8),l(32,8,8,8),l(40,8,8,8),l(48,8,8,8),l(56,8,8,8),i&&(l(4,32,4,4),l(8,32,4,4),l(0,36,4,12),l(4,36,4,12),l(8,36,4,12),l(12,36,4,12),l(20,32,8,4),l(28,32,8,4),l(16,36,4,12),l(20,36,8,12),l(28,36,4,12),l(32,36,8,12),l(44,32,4,4),l(48,32,4,4),l(40,36,4,12),l(44,36,4,12),l(48,36,4,12),l(52,36,12,12),l(4,48,4,4),l(8,48,4,4),l(0,52,4,12),l(4,52,4,12),l(8,52,4,12),l(12,52,4,12),l(52,48,4,4),l(56,48,4,4),l(48,52,4,12),l(52,52,4,12),l(56,52,4,12),l(60,52,4,12))}function XA(o,e){o.save(),o.scale(-1,1);const i=Iu(e),r=(l,u,d,h,p,m)=>o.drawImage(o.canvas,l*i,u*i,d*i,h*i,-p*i,m*i,-d*i,h*i);r(4,16,4,4,20,48),r(8,16,4,4,24,48),r(0,20,4,12,24,52),r(4,20,4,12,20,52),r(8,20,4,12,16,52),r(12,20,4,12,28,52),r(44,16,4,4,36,48),r(48,16,4,4,40,48),r(40,20,4,12,40,52),r(44,20,4,12,36,52),r(48,20,4,12,32,52),r(52,20,4,12,44,52),o.restore()}function WA(o,e){let i=!1;if(e.width!==e.height)if(e.width===2*e.height)i=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const r=o.getContext("2d",{willReadFrequently:!0});if(i){const l=e.width;o.width=l,o.height=l,r.clearRect(0,0,l,l),r.drawImage(e,0,0,l,l/2),XA(r,l),gv(r,o.width,!1)}else o.width=e.width,o.height=e.height,r.clearRect(0,0,e.width,e.height),r.drawImage(e,0,0,o.width,o.height),gv(r,o.width,!0)}function jA(o){if(o.width===2*o.height)return o.width/64;if(o.width*17===o.height*22)return o.width/22;if(o.width*11===o.height*23)return o.width/46;throw new Error(`Bad cape size: ${o.width}x${o.height}`)}function qA(o,e){const i=jA(e);o.width=64*i,o.height=32*i;const r=o.getContext("2d",{willReadFrequently:!0});r.clearRect(0,0,o.width,o.height),r.drawImage(e,0,0,e.width,e.height)}function YA(o,e,i,r,l){const u=o.getImageData(e,i,r,l);for(let d=0;d<r;d++)for(let h=0;h<l;h++){const p=(d+h*r)*4;if(!(u.data[p+0]===0&&u.data[p+1]===0&&u.data[p+2]===0&&u.data[p+3]===255))return!1}return!0}function ZA(o,e,i,r,l){const u=o.getImageData(e,i,r,l);for(let d=0;d<r;d++)for(let h=0;h<l;h++){const p=(d+h*r)*4;if(!(u.data[p+0]===255&&u.data[p+1]===255&&u.data[p+2]===255&&u.data[p+3]===255))return!1}return!0}function QA(o){const e=Iu(o.width),i=o.getContext("2d",{willReadFrequently:!0}),r=(h,p,m,g)=>kh(i,h*e,p*e,m*e,g*e),l=(h,p,m,g)=>YA(i,h*e,p*e,m*e,g*e),u=(h,p,m,g)=>ZA(i,h*e,p*e,m*e,g*e);return r(50,16,2,4)||r(54,20,2,12)||r(42,48,2,4)||r(46,52,2,12)||l(50,16,2,4)&&l(54,20,2,12)&&l(42,48,2,4)&&l(46,52,2,12)||u(50,16,2,4)&&u(54,20,2,12)&&u(42,48,2,4)&&u(46,52,2,12)?"slim":"default"}function KA(o){if(o.width===o.height*2&&o.height%7===0)return o.height/7;throw new Error(`Bad ears size: ${o.width}x${o.height}`)}function JA(o,e){const i=KA(e);o.width=14*i,o.height=7*i;const r=o.getContext("2d",{willReadFrequently:!0});r.clearRect(0,0,o.width,o.height),r.drawImage(e,0,0,e.width,e.height)}function _v(o,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=Iu(e.width),r=14*i,l=7*i;o.width=r,o.height=l;const u=o.getContext("2d",{willReadFrequently:!0});u.clearRect(0,0,r,l),u.drawImage(e,24*i,0,r,l,0,0,r,l)}async function Tu(o){const e=document.createElement("img");return new Promise((i,r)=>{e.onload=()=>i(e),e.onerror=r,e.crossOrigin="anonymous",typeof o=="string"?e.src=o:(o.crossOrigin!==void 0&&(e.crossOrigin=o.crossOrigin),o.referrerPolicy!==void 0&&(e.referrerPolicy=o.referrerPolicy),e.src=o.src)})}const vv={type:"change"},Uh={type:"start"},yv={type:"end"},Au=new Fv,Sv=new Ga,$A=Math.cos(70*bx.DEG2RAD);class e1 extends br{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",A),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(vv),r.update(),u=l.NONE},this.update=(function(){const F=new j,_e=new Er().setFromUnitVectors(e.up,new j(0,1,0)),Le=_e.clone().invert(),Te=new j,Re=new Er,$e=new j,ft=2*Math.PI;return function(De=null){const ie=r.object.position;F.copy(ie).sub(r.target),F.applyQuaternion(_e),h.setFromVector3(F),r.autoRotate&&u===l.NONE&&ve(w(De)),r.enableDamping?(h.theta+=p.theta*r.dampingFactor,h.phi+=p.phi*r.dampingFactor):(h.theta+=p.theta,h.phi+=p.phi);let Me=r.minAzimuthAngle,Ae=r.maxAzimuthAngle;isFinite(Me)&&isFinite(Ae)&&(Me<-Math.PI?Me+=ft:Me>Math.PI&&(Me-=ft),Ae<-Math.PI?Ae+=ft:Ae>Math.PI&&(Ae-=ft),Me<=Ae?h.theta=Math.max(Me,Math.min(Ae,h.theta)):h.theta=h.theta>(Me+Ae)/2?Math.max(Me,h.theta):Math.min(Ae,h.theta)),h.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,h.phi)),h.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.zoomToCursor&&V||r.object.isOrthographicCamera?h.radius=me(h.radius):h.radius=me(h.radius*m),F.setFromSpherical(h),F.applyQuaternion(Le),ie.copy(r.target).add(F),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let it=!1;if(r.zoomToCursor&&V){let gt=null;if(r.object.isPerspectiveCamera){const Tt=F.length();gt=me(Tt*m);const xn=Tt-gt;r.object.position.addScaledVector(N,xn),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Tt=new j(B.x,B.y,0);Tt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),it=!0;const xn=new j(B.x,B.y,0);xn.unproject(r.object),r.object.position.sub(xn).add(Tt),r.object.updateMatrixWorld(),gt=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;gt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(gt).add(r.object.position):(Au.origin.copy(r.object.position),Au.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Au.direction))<$A?e.lookAt(r.target):(Sv.setFromNormalAndCoplanarPoint(r.object.up,r.target),Au.intersectPlane(Sv,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),it=!0);return m=1,V=!1,it||Te.distanceToSquared(r.object.position)>d||8*(1-Re.dot(r.object.quaternion))>d||$e.distanceToSquared(r.target)>0?(r.dispatchEvent(vv),Te.copy(r.object.position),Re.copy(r.object.quaternion),$e.copy(r.target),it=!1,!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",xe),r.domElement.removeEventListener("pointerdown",rt),r.domElement.removeEventListener("pointercancel",ct),r.domElement.removeEventListener("wheel",O),r.domElement.removeEventListener("pointermove",Je),r.domElement.removeEventListener("pointerup",ct),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",A),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new pv,p=new pv;let m=1;const g=new j,y=new Ge,S=new Ge,M=new Ge,R=new Ge,b=new Ge,x=new Ge,v=new Ge,U=new Ge,C=new Ge,N=new j,B=new Ge;let V=!1;const D=[],oe={};function w(F){return F!==null?2*Math.PI/60*r.autoRotateSpeed*F:2*Math.PI/60/60*r.autoRotateSpeed}function P(){return Math.pow(.95,r.zoomSpeed)}function ve(F){p.theta-=F}function ye(F){p.phi-=F}const te=(function(){const F=new j;return function(Le,Te){F.setFromMatrixColumn(Te,0),F.multiplyScalar(-Le),g.add(F)}})(),le=(function(){const F=new j;return function(Le,Te){r.screenSpacePanning===!0?F.setFromMatrixColumn(Te,1):(F.setFromMatrixColumn(Te,0),F.crossVectors(r.object.up,F)),F.multiplyScalar(Le),g.add(F)}})(),re=(function(){const F=new j;return function(Le,Te){const Re=r.domElement;if(r.object.isPerspectiveCamera){const $e=r.object.position;F.copy($e).sub(r.target);let ft=F.length();ft*=Math.tan(r.object.fov/2*Math.PI/180),te(2*Le*ft/Re.clientHeight,r.object.matrix),le(2*Te*ft/Re.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(te(Le*(r.object.right-r.object.left)/r.object.zoom/Re.clientWidth,r.object.matrix),le(Te*(r.object.top-r.object.bottom)/r.object.zoom/Re.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function H(F){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function X(F){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function q(F){if(!r.zoomToCursor)return;V=!0;const _e=r.domElement.getBoundingClientRect(),Le=F.clientX-_e.left,Te=F.clientY-_e.top,Re=_e.width,$e=_e.height;B.x=Le/Re*2-1,B.y=-(Te/$e)*2+1,N.set(B.x,B.y,1).unproject(r.object).sub(r.object.position).normalize()}function me(F){return Math.max(r.minDistance,Math.min(r.maxDistance,F))}function ce(F){y.set(F.clientX,F.clientY)}function T(F){q(F),v.set(F.clientX,F.clientY)}function z(F){R.set(F.clientX,F.clientY)}function ee(F){S.set(F.clientX,F.clientY),M.subVectors(S,y).multiplyScalar(r.rotateSpeed);const _e=r.domElement;ve(2*Math.PI*M.x/_e.clientHeight),ye(2*Math.PI*M.y/_e.clientHeight),y.copy(S),r.update()}function ue(F){U.set(F.clientX,F.clientY),C.subVectors(U,v),C.y>0?H(P()):C.y<0&&X(P()),v.copy(U),r.update()}function Se(F){b.set(F.clientX,F.clientY),x.subVectors(b,R).multiplyScalar(r.panSpeed),re(x.x,x.y),R.copy(b),r.update()}function we(F){q(F),F.deltaY<0?X(P()):F.deltaY>0&&H(P()),r.update()}function Oe(F){let _e=!1;switch(F.code){case r.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?ye(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(0,r.keyPanSpeed),_e=!0;break;case r.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?ye(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(0,-r.keyPanSpeed),_e=!0;break;case r.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?ve(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(r.keyPanSpeed,0),_e=!0;break;case r.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?ve(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(-r.keyPanSpeed,0),_e=!0;break}_e&&(F.preventDefault(),r.update())}function Pe(){if(D.length===1)y.set(D[0].pageX,D[0].pageY);else{const F=.5*(D[0].pageX+D[1].pageX),_e=.5*(D[0].pageY+D[1].pageY);y.set(F,_e)}}function Ve(){if(D.length===1)R.set(D[0].pageX,D[0].pageY);else{const F=.5*(D[0].pageX+D[1].pageX),_e=.5*(D[0].pageY+D[1].pageY);R.set(F,_e)}}function Ht(){const F=D[0].pageX-D[1].pageX,_e=D[0].pageY-D[1].pageY,Le=Math.sqrt(F*F+_e*_e);v.set(0,Le)}function et(){r.enableZoom&&Ht(),r.enablePan&&Ve()}function K(){r.enableZoom&&Ht(),r.enableRotate&&Pe()}function kt(F){if(D.length==1)S.set(F.pageX,F.pageY);else{const Le=se(F),Te=.5*(F.pageX+Le.x),Re=.5*(F.pageY+Le.y);S.set(Te,Re)}M.subVectors(S,y).multiplyScalar(r.rotateSpeed);const _e=r.domElement;ve(2*Math.PI*M.x/_e.clientHeight),ye(2*Math.PI*M.y/_e.clientHeight),y.copy(S)}function Fe(F){if(D.length===1)b.set(F.pageX,F.pageY);else{const _e=se(F),Le=.5*(F.pageX+_e.x),Te=.5*(F.pageY+_e.y);b.set(Le,Te)}x.subVectors(b,R).multiplyScalar(r.panSpeed),re(x.x,x.y),R.copy(b)}function Ke(F){const _e=se(F),Le=F.pageX-_e.x,Te=F.pageY-_e.y,Re=Math.sqrt(Le*Le+Te*Te);U.set(0,Re),C.set(0,Math.pow(U.y/v.y,r.zoomSpeed)),H(C.y),v.copy(U)}function Ze(F){r.enableZoom&&Ke(F),r.enablePan&&Fe(F)}function Ct(F){r.enableZoom&&Ke(F),r.enableRotate&&kt(F)}function rt(F){r.enabled!==!1&&(D.length===0&&(r.domElement.setPointerCapture(F.pointerId),r.domElement.addEventListener("pointermove",Je),r.domElement.addEventListener("pointerup",ct)),Ee(F),F.pointerType==="touch"?ne(F):Gt(F))}function Je(F){r.enabled!==!1&&(F.pointerType==="touch"?be(F):Jt(F))}function ct(F){He(F),D.length===0&&(r.domElement.releasePointerCapture(F.pointerId),r.domElement.removeEventListener("pointermove",Je),r.domElement.removeEventListener("pointerup",ct)),r.dispatchEvent(yv),u=l.NONE}function Gt(F){let _e;switch(F.button){case 0:_e=r.mouseButtons.LEFT;break;case 1:_e=r.mouseButtons.MIDDLE;break;case 2:_e=r.mouseButtons.RIGHT;break;default:_e=-1}switch(_e){case ss.DOLLY:if(r.enableZoom===!1)return;T(F),u=l.DOLLY;break;case ss.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(r.enablePan===!1)return;z(F),u=l.PAN}else{if(r.enableRotate===!1)return;ce(F),u=l.ROTATE}break;case ss.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(r.enableRotate===!1)return;ce(F),u=l.ROTATE}else{if(r.enablePan===!1)return;z(F),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Uh)}function Jt(F){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;ee(F);break;case l.DOLLY:if(r.enableZoom===!1)return;ue(F);break;case l.PAN:if(r.enablePan===!1)return;Se(F);break}}function O(F){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(F.preventDefault(),r.dispatchEvent(Uh),we(F),r.dispatchEvent(yv))}function A(F){r.enabled===!1||r.enablePan===!1||Oe(F)}function ne(F){switch(Ce(F),D.length){case 1:switch(r.touches.ONE){case os.ROTATE:if(r.enableRotate===!1)return;Pe(),u=l.TOUCH_ROTATE;break;case os.PAN:if(r.enablePan===!1)return;Ve(),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case os.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;et(),u=l.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;K(),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Uh)}function be(F){switch(Ce(F),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;kt(F),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;Fe(F),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Ze(F),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Ct(F),r.update();break;default:u=l.NONE}}function xe(F){r.enabled!==!1&&F.preventDefault()}function Ee(F){D.push(F)}function He(F){delete oe[F.pointerId];for(let _e=0;_e<D.length;_e++)if(D[_e].pointerId==F.pointerId){D.splice(_e,1);return}}function Ce(F){let _e=oe[F.pointerId];_e===void 0&&(_e=new Ge,oe[F.pointerId]=_e),_e.set(F.pageX,F.pageY)}function se(F){const _e=F.pointerId===D[0].pointerId?D[1]:D[0];return oe[_e.pointerId]}r.domElement.addEventListener("contextmenu",xe),r.domElement.addEventListener("pointerdown",rt),r.domElement.addEventListener("pointercancel",ct),r.domElement.addEventListener("wheel",O,{passive:!1}),this.update()}}const t1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fu{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const n1=new Qv(-1,1,1,-1,0,1),Jh=new fa;Jh.setAttribute("position",new la([-1,3,0,-1,-1,0,3,-1,0],3));Jh.setAttribute("uv",new la([0,2,0,0,2,0],2));class i1{constructor(e){this._mesh=new Ut(Jh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,n1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class o0 extends Fu{constructor(e,i){super(),this.textureID=i!==void 0?i:"tDiffuse",e instanceof ca?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jv.clone(e.uniforms),this.material=new ca({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new i1(this.material)}render(e,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xv extends Fu{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,r){const l=e.getContext(),u=e.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let d,h;this.inverse?(d=0,h=1):(d=1,h=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,d,4294967295),u.buffers.stencil.setClear(h),u.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class a1 extends Fu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class r1{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const r=e.getSize(new Ge);this._width=r.width,this._height=r.height,i=new ua(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ns}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new o0(t1),this.copyPass.material.blending=oa,this.clock=new s0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,u=this.passes.length;l<u;l++){const d=this.passes[l];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),d.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),d.needsSwap){if(r){const h=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}xv!==void 0&&(d instanceof xv?r=!0:d instanceof a1&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(r,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class s1 extends Fu{constructor(e,i,r=null,l=null,u=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new St}render(e,i,r){const l=e.autoClear;e.autoClear=!1;let u,d;this.overrideMaterial!==null&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(u=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=d),e.autoClear=l}}const o1={uniforms:{tDiffuse:{value:null},resolution:{value:new Ge(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class l1 extends NA{constructor(e="",i={}){const r=new i0({transparent:!0,alphaTest:1e-5});super(r),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=r,this.text=e,this.font=i.font===void 0?"48px Minecraft":i.font,this.margin=i.margin===void 0?[5,10,5,10]:i.margin,this.textStyle=i.textStyle===void 0?"white":i.textStyle,this.backgroundStyle=i.backgroundStyle===void 0?"rgba(0,0,0,.25)":i.backgroundStyle,this.height=i.height===void 0?4:i.height,(i.repaintAfterLoaded===void 0?!0:i.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let i=e.getContext("2d");i.font=this.font;const r=i.measureText(this.text);e.width=this.margin[3]+r.actualBoundingBoxLeft+r.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+r.actualBoundingBoxAscent+r.actualBoundingBoxDescent+this.margin[2],i=e.getContext("2d"),i.font=this.font,i.fillStyle=this.backgroundStyle,i.fillRect(0,0,e.width,e.height),i.fillStyle=this.textStyle,i.fillText(this.text,this.margin[3]+r.actualBoundingBoxLeft,this.margin[0]+r.actualBoundingBoxAscent);const l=new Cu(e);l.magFilter=Vt,l.minFilter=Vt,this.textMaterial.map=l,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class u1{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new IA(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new BA(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new UA,this.camera=new ei,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),hi.enabled=!1,this.renderer=new n0({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let i;this.renderer.capabilities.isWebGL2&&(i=new ua(0,0,{depthTexture:new t0(0,0,ra)})),this.composer=new r1(this.renderer,i),this.renderPass=new s1(this.scene,this.camera),this.fxaaPass=new o0(o1),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new kA,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new Sn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new e1(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new s0,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=r=>{r.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",r=>{r.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Cu(this.skinCanvas),this.skinTexture.magFilter=Vt,this.skinTexture.minFilter=Vt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Cu(this.capeCanvas),this.capeTexture.magFilter=Vt,this.capeTexture.minFilter=Vt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Cu(this.earsCanvas),this.earsTexture.magFilter=Vt,this.earsTexture.minFilter=Vt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,i={}){if(e===null)this.resetSkin();else if(bu(e))WA(this.skinCanvas,e),this.recreateSkinTexture(),i.model===void 0||i.model==="auto-detect"?this.playerObject.skin.modelType=QA(this.skinCanvas):this.playerObject.skin.modelType=i.model,i.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(i.ears===!0||i.ears=="load-only")&&(_v(this.earsCanvas,e),this.recreateEarsTexture(),i.ears===!0&&(this.playerObject.ears.visible=!0));else return Tu(e).then(r=>this.loadSkin(r,i))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,i={}){if(e===null)this.resetCape();else if(bu(e))qA(this.capeCanvas,e),this.recreateCapeTexture(),i.makeVisible!==!1&&(this.playerObject.backEquipment=i.backEquipment===void 0?"cape":i.backEquipment);else return Tu(e).then(r=>this.loadCape(r,i))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,i={}){if(e===null)this.resetEars();else if(bu(e))i.textureType==="skin"?_v(this.earsCanvas,e):JA(this.earsCanvas,e),this.recreateEarsTexture(),i.makeVisible!==!1&&(this.playerObject.ears.visible=!0);else return Tu(e).then(r=>this.loadEars(r,i))}resetEars(){this.playerObject.ears.visible=!1,this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,Lu)}loadBackground(e,i){if(bu(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Ln,this.backgroundTexture.image=e,i!==void 0&&(this.backgroundTexture.mapping=i),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Tu(e).then(r=>this.loadBackground(r,i))}draw(){const e=this.clock.getDelta();this._animation!==null&&this._animation.update(this.playerObject,e),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,i){this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new Ge).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new Ge).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof St||e instanceof Ln?this.scene.background=e:this.scene.background=new St(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Dn||(e=new l1(e)),this.playerWrapper.add(e),e.position.y=20),this._nameTag=e}}const c1=({className:o,width:e,height:i,skinUrl:r,capeUrl:l,onReady:u,options:d})=>{const h=un.useRef(null),p=un.useRef(null);return un.useEffect(()=>{if(p.current)return;const m=new u1({canvas:h.current,width:Number(e),height:Number(i),...d});r&&m.loadSkin(r),l&&m.loadCape(l),p.current=m,u&&u({viewer:p.current,canvasRef:h.current})},[e,i,r,l,u,d]),un.useEffect(()=>{r?p.current.loadSkin(r):p.current.resetSkin()},[r]),un.useEffect(()=>{l?p.current.loadCape(l):p.current.resetCape()},[l]),un.useEffect(()=>{p.current.setSize(Number(e),Number(i))},[e,i]),Qe.jsx("canvas",{className:o,ref:h})},f1=({baseLayer:o,hairLayer:e,eyesLayer:i,hatLayer:r,bodyLayer:l,pantsLayer:u,bootsLayer:d})=>{const[h,p]=un.useState("/skin-generator/base/1.png"),m=un.useRef(null),g=un.useRef(null);un.useEffect(()=>{y()},[o,e,i,r,l,u,d]);const y=async()=>{const b=document.createElement("canvas");b.width=64,b.height=64;const x=b.getContext("2d");if(!x)return;const v=C=>new Promise((N,B)=>{const V=new Image;V.src=C,V.onload=()=>N(V),V.onerror=B});x.clearRect(0,0,b.width,b.height);const U=[o,i,e,r,l,u,d];for(const C of U)if(C){const N=await v(C);x.drawImage(N,0,0)}p(b.toDataURL())},S=()=>{m.current!=null&&m.current.click()},M=b=>{!b.target||!b.target.files||p(URL.createObjectURL(b.target.files[0]))},R=()=>{g.current!=null&&(g.current.href=h,g.current.download="skin.png",g.current?.click())};return Qe.jsxs("div",{className:"skin",children:[Qe.jsx(c1,{skinUrl:h,height:500,width:500}),Qe.jsx("a",{ref:g,className:"download-a"}),Qe.jsxs("button",{className:"upload-but",onClick:S,children:["Upload your skin",Qe.jsx("input",{type:"file",onChange:b=>M(b),ref:m})]}),Qe.jsx("button",{className:"download-but",onClick:R,children:"Download"})]})},h1=()=>Qe.jsxs("div",{className:"footer",children:[Qe.jsx("p",{className:"left-footer-text",children:"© 2025 Skin Generator"}),Qe.jsx("p",{className:"right-footer-text",children:"Made with ❤️ for my portfolio"})]});function d1(){const[o,e]=un.useState("Base"),[i,r]=un.useState("/base/1.png"),[l,u]=un.useState(null),[d,h]=un.useState(null),[p,m]=un.useState(null),[g,y]=un.useState(null),[S,M]=un.useState(null),[R,b]=un.useState(null);return Qe.jsxs("div",{children:[Qe.jsx(ES,{}),Qe.jsxs("div",{className:"center-app",children:[Qe.jsx(bS,{setMenu:e,menu:o}),Qe.jsx(TS,{menu:o,setBaseLayer:r,setHairLayer:u,setEyesLayer:h,setHatLayer:m,setBodyLayer:y,setPantsLayer:M,setBootsLayer:b,baseLayer:i,hairLayer:l,eyesLayer:d,hatLayer:p,bodyLayer:g,pantsLayer:S,bootsLayer:R}),Qe.jsx(f1,{baseLayer:i,hairLayer:l,eyesLayer:d,hatLayer:p,bodyLayer:g,pantsLayer:S,bootsLayer:R})]}),Qe.jsx(h1,{})]})}MS.createRoot(document.getElementById("root")).render(Qe.jsx(un.StrictMode,{children:Qe.jsx(d1,{})}));
