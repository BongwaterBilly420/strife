(function(C,u,p,o,s,S,V,G,c){"use strict";const y=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(n){return typeof n=="object"&&!Array.isArray(n)};return[e,t(e[e.length-1])?e.pop():{}]},l=function(e,t){return t.all?o.findAll(e):o.find(e)},H=function(e){return l(e,{all:!0})},f={byProps:function(e){return function(t){return e.every(function(n){return t[n]!==void 0})}},byDisplayName:function(e,t){return t?function(n){return n?.displayName===e}:function(n){return n?.default?.displayName===e}},byTypeName:function(e,t){return t?function(n){return n?.type?.name===e}:function(n){return n?.default?.type?.name===e}},byName:function(e,t){return t?function(n){return n?.name===e}:function(n){return n?.default?.name===e}}};var K=Object.freeze({__proto__:null,filters:f,getByDisplayName:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const[r,a]=y(t);return l(f.byDisplayName(r[0],a.default),a)},getByName:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const[r,a]=y(t);return l(f.byName(r[0],a.default),a)},getByProps:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const[r,a]=y(t);return l(f.byProps(r),a)},getByTypeName:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const[r,a]=y(t);return l(f.byTypeName(r[0],a.default),a)},getModule:l,getModules:H});const A=o.common.constants,q=o.common.clipboard,J=o.findByProps("registerAsset"),I=o.findByProps("receiveMessage","sendMessage"),M=o.findByProps("createBotMessage"),D=o.findByProps("BOT_AVATARS"),Q=o.common.ReactNative.NativeModules,W=o.common.React,X=o.common.FluxDispatcher,Y=o.findByProps("getItem"),Z=o.common.toasts,ee=o.findByProps("show","openLazy","close"),ne=o.findByProps("getToken"),te=o.findByProps("getAPIBaseURL"),re=o.findByProps("watchKeys"),ae=o.findByProps("getCurrentUser"),oe=o.findByProps("getUser","fetchProfile"),se=o.common.navigation,ie=o.common.NavigationNative,ue=o.common.navigationStack,ce=o.findByProps("theme"),le=o.common.ReactNative.Linking,R=o.common.stylesheet,ge={ThemeColorMap:s.semanticColors,Colors:s.rawColors},fe=s.semanticColors,de=s.rawColors,me={Forms:p.Forms,General:p.General},pe=o.findByProps("Messages"),ye=o.findByProps("showUserProfile"),he=o.findByProps("debounce","throttle"),ve=o.findByName("Logger"),be=o.common.Flux,Pe=o.findByProps("Svg"),Be=o.findByName("getScreens",!1),Ne=o.common.moment;A.ThemeColorMap=s.semanticColors,R.ThemeColorMap=s.semanticColors;var _e=Object.freeze({__proto__:null,Assets:J,AsyncUsers:oe,Avatars:D,Clipboard:q,Clyde:M,ColorMap:ge,Colors:de,Components:me,Constants:A,Dialog:ee,Dispatcher:X,Flux:be,Linking:le,Locale:pe,Lodash:he,Logger:ve,Messages:I,Moment:Ne,Native:Q,Navigation:se,NavigationNative:ie,NavigationStack:ue,Profiles:ye,REST:te,React:W,SVG:Pe,Scenes:Be,Settings:re,Storage:Y,StyleSheet:R,Theme:ce,ThemeColorMap:fe,Toasts:Z,Token:ne,Users:ae});const g={};function h(e,t,n){return g[e]||(g[e]={before:[],instead:[],after:[]}),g[e][t].push(n),{unpatch:n}}function v(e,t){switch(e){case"before":return function(n,r){return t(this,n,r),r(...n)};case"instead":return function(n,r){return t(this,n,r)};case"after":return function(n,r){return t(this,n,r)}}}const z=function(e,t,n,r,a){return h(e,"before",u.patcher.instead(n,t,v("before",r),a))},k=function(e,t,n,r,a){return h(e,"instead",u.patcher.instead(n,t,v("instead",r),a))},$=function(e,t,n,r,a){return h(e,"after",u.patcher.after(n,t,v("after",r),a))},b=function(e){return[...g[e].before,...g[e].instead,...g[e].after]},j=function(e){return b(e).forEach(function(t){return t()})};var Te=Object.freeze({__proto__:null,after:$,before:z,create:function(e){return{getPatchesByCaller:function(){return b(e)},before:function(t,n,r,a){return z(e,t,n,r,a)},instead:function(t,n,r,a){return k(e,t,n,r,a)},after:function(t,n,r,a){return $(e,t,n,r,a)},unpatchAll:function(){return j(e)}}},getPatchesByCaller:b,instead:k,unpatchAll:j});function P(e,t){return u.logger.warn(`Tried to call ${e}, not implemented!`),t}const O={};function B(e,t){O[e]??=[];for(const n of t)O[e].push(G.registerCommand({name:n.name,displayName:n.name,description:n.description,displayDescription:n.description,type:1,inputType:1,applicationId:"-1",options:n.options,execute:n.execute}))}const x=function(e){return B[e]?.forEach(function(t){return t()})};var we=Object.freeze({__proto__:null,registerCommands:B,unregisterCommands:x});S.storage.plugins??={};let N={},i=S.storage.plugins;function L(e){if(typeof e!="object")return;const t=Object.entries(i).find(function(n){let[,r]=n;return r.name===e.name})[0];N[t]={onStart:e.onStart,onStop:e.onStop,onEnable:function(){try{e.onStart(),e.commands&&B(e.name,e.commands)}catch(n){console.error(`${e.name} errored while enabling`,n.message)}},onDisable:function(){try{e.patches&&e.patches.forEach(function(n){return n.unpatchAll()}),e.commands&&x(e.name),e.onStop()}catch(n){console.error(`${e.name} errored while disabling`,n.message)}}}}const U=function(e,t){return V.without({...e,...t},"script","enabled")},_=function(e){return(e?Object.entries(i).filter(e):Object.entries(i)).map(function(t){let[n,r]=t;return U(r,N[n])})};function Ce(e){const[t,n]=Object.entries(i).find(function(r){let[,a]=r;return a.name===e});return U(n,N[t])}const Se=function(){return _()},Ae=function(){return _(function(e){let[,t]=e;return t.enabled})},Ie=function(){return _(function(e){let[,t]=e;return!t.enabled})},Me=function(e){return new Proxy(globalThis.enmity.plugins,{get(t,n){return n!=="registerPlugin"?Reflect.get(t,n):function(r){return i[e]??={name:r.name,description:r.description,version:r.version,authors:r.authors},L(r)}}})};async function E(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=i[e]?.script??await(await fetch(e)).text(),r={...globalThis.enmity,plugins:Me(e)},a=new Proxy(window,{get(m,w){if(w==="window")return a;switch(w){case"vendetta":case"__vendetta_theme":case"__vendetta_loader":case"__vendetta_rdc":return;case"enmity":return r;default:return m[w]}}});try{await(0,eval)(`((window, enmity) => { ${n} })`)(a,r)}catch(m){console.error(m.stack)}return i[e].script=n,i[e].enabled=t,i[e].name}function De(e,t){E(e,!0)}var Re=Object.freeze({__proto__:null,evalPlugin:E,getDisabledPlugins:Ie,getEnabledPlugins:Ae,getPlugin:Ce,getPlugins:Se,installPlugin:De,registerPlugin:L,uninstallPlugin:async function(){return P("uninstallPlugin")}});function ze(e,t,n,r){const a=M.createBotMessage({channelId:e,content:""});a.author.username=n??"Fellowship",a.author.avatar=r?n:"clyde",r&&D.BOT_AVATARS[n],typeof t=="string"?a.content=t:Object.assign(a,t),I.receiveMessage(e,a)}var ke=Object.freeze({__proto__:null,sendReply:ze});const{uuid4:$e}=o.findByProps("uuid4"),je=function(e){return c.lodash.memoize(e)},Oe=function(e,t){return c.lodash.debounce(e,t)},xe=function(){return P("createStore",{})},Le=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(r){return r},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return u.utils.findInTree(e,t,{walkable:["props","children"],...n})},Ue=c.ReactNative.PixelRatio.getPixelSizeForLayoutSize;var Ee=Object.freeze({__proto__:null,createStore:xe,debounce:Oe,findInReactTree:Le,findInTree:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(m){return m},{ignore:n=[],walkable:r=[],maxProperties:a=100}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return u.utils.findInTree(e,t,{ignore:n,walkable:r,maxDepth:a})},memoize:je,normalizeSize:Ue,sleep:function(e){return new Promise(function(t){return setTimeout(t,e)})},uuid:$e,wrapInHooks:function(){return P("wrapInHooks",c.React.createElement(c.ReactNative.Text,{},"Stubbed wrapInHooks"))}});const{NativeModules:d}=c.ReactNative,T=d.InfoDictionaryManager??d.RTNClientInfoManager,F=d.DCDDeviceManager??d.RTNDeviceManager,Fe=d.BundleUpdaterManager,Ve=T.Identifier,Ge=Fe.reload,He=T.Version,Ke=F.systemVersion,qe=T.Build,Je=F.device;var Qe=Object.freeze({__proto__:null,build:qe,bundle:Ve,device:Je,os:Ke,reload:Ge,version:He});const We=s.assets.all,Xe=s.assets.find,Ye=function(e){return s.assets.getAssetByName(e)},Ze=function(e){return s.assets.getAssetByID(e)},en=function(e){return s.assets.getAssetIDByName(e)},nn=new Proxy({},{get:function(e,t){return s.assets.getAssetIDByName(t)}});var tn=Object.freeze({__proto__:null,Icons:nn,assets:We,find:Xe,getByID:Ze,getByName:Ye,getIDByName:en});function rn(){return globalThis.enmity={modules:{...K,common:_e},patcher:Te,version:`Fellowship ${u.plugin.manifest.hash.slice(7)}`,plugins:Re,clyde:ke,commands:we,utilities:Ee,components:new Proxy({},{get:function(e,t){return p.General[t]??p.Forms[t]}}),native:Qe,assets:tn},function(){return delete globalThis.enmity}}const an=[rn()],on=function(){return an.forEach(function(e){return e()})};return C.onUnload=on,C})({},vendetta,vendetta.ui.components,vendetta.metro,vendetta.ui,vendetta.plugin,vendetta.utils,vendetta.commands,vendetta.metro.common);
