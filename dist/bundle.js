!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!A[e]||!v[e])return;for(var t in v[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--g&&0===m&&R()}(e,t),n&&n(e,t)};var t,a=!0,r="5da91de964b293717a3f",i=1e4,o={},s=[],c=[];function u(e){var n=w[e];if(!n)return O;var a=function(a){return n.hot.active?(w[a]?-1===w[a].parents.indexOf(e)&&w[a].parents.push(e):(s=[e],t=a),-1===n.children.indexOf(a)&&n.children.push(a)):(console.warn("[HMR] unexpected require("+a+") from disposed module "+e),s=[]),O(a)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return O[e]},set:function(n){O[e]=n}}};for(var i in O)Object.prototype.hasOwnProperty.call(O,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(a,i,r(i));return a.e=function(e){return"ready"===p&&l("prepare"),m++,O.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===p&&(D[e]||b(e),0===m&&0===g&&R())}},a.t=function(e,n){return 1&n&&(e=a(e)),O.t(e,-2&n)},a}var d=[],p="idle";function l(e){p=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var f,h,y,g=0,m=0,D={},v={},A={};function C(e){return+e+""===e?+e:e}function T(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,l("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var a=new XMLHttpRequest,i=O.p+""+r+".hot-update.json";a.open("GET",i,!0),a.timeout=e,a.send(null)}catch(e){return t(e)}a.onreadystatechange=function(){if(4===a.readyState)if(0===a.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===a.status)n();else if(200!==a.status&&304!==a.status)t(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(a.responseText)}catch(e){return void t(e)}n(e)}}})}(i).then(function(e){if(!e)return l("idle"),null;v={},D={},A=e.c,y=e.h,l("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return b(0),"prepare"===p&&0===m&&0===g&&R(),n})}function b(e){A[e]?(v[e]=!0,g++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=O.p+""+e+"."+r+".hot-update.js",n.appendChild(t)}(e)):D[e]=!0}function R(){l("ready");var e=f;if(f=null,e)if(a)Promise.resolve().then(function(){return G(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(C(t));e.resolve(n)}}function G(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,a,i,c,u;function d(e){for(var n=[e],t={},a=n.slice().map(function(e){return{chain:[e],id:e}});a.length>0;){var r=a.pop(),i=r.id,o=r.chain;if((c=w[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var s=0;s<c.parents.length;s++){var u=c.parents[s],d=w[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([u]),moduleId:i,parentId:u};-1===n.indexOf(u)&&(d.hot._acceptedDependencies[i]?(t[u]||(t[u]=[]),f(t[u],[i])):(delete t[u],n.push(u),a.push({chain:o.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function f(e,n){for(var t=0;t<n.length;t++){var a=n[t];-1===e.indexOf(a)&&e.push(a)}}n=n||{};var g={},m=[],D={},v=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var T in h)if(Object.prototype.hasOwnProperty.call(h,T)){var b;u=C(T);var R=!1,G=!1,_=!1,j="";switch((b=h[T]?d(u):{type:"disposed",moduleId:T}).chain&&(j="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(R=new Error("Aborted because of self decline: "+b.moduleId+j));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(R=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+j));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(R=new Error("Aborted because "+u+" is not accepted"+j));break;case"accepted":n.onAccepted&&n.onAccepted(b),G=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),_=!0;break;default:throw new Error("Unexception type "+b.type)}if(R)return l("abort"),Promise.reject(R);if(G)for(u in D[u]=h[u],f(m,b.outdatedModules),b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,u)&&(g[u]||(g[u]=[]),f(g[u],b.outdatedDependencies[u]));_&&(f(m,[b.moduleId]),D[u]=v)}var E,P=[];for(a=0;a<m.length;a++)u=m[a],w[u]&&w[u].hot._selfAccepted&&P.push({module:u,errorHandler:w[u].hot._selfAccepted});l("dispose"),Object.keys(A).forEach(function(e){!1===A[e]&&function(e){delete installedChunks[e]}(e)});for(var x,I,M=m.slice();M.length>0;)if(u=M.pop(),c=w[u]){var Y={},H=c.hot._disposeHandlers;for(i=0;i<H.length;i++)(t=H[i])(Y);for(o[u]=Y,c.hot.active=!1,delete w[u],delete g[u],i=0;i<c.children.length;i++){var k=w[c.children[i]];k&&((E=k.parents.indexOf(u))>=0&&k.parents.splice(E,1))}}for(u in g)if(Object.prototype.hasOwnProperty.call(g,u)&&(c=w[u]))for(I=g[u],i=0;i<I.length;i++)x=I[i],(E=c.children.indexOf(x))>=0&&c.children.splice(E,1);for(u in l("apply"),r=y,D)Object.prototype.hasOwnProperty.call(D,u)&&(e[u]=D[u]);var S=null;for(u in g)if(Object.prototype.hasOwnProperty.call(g,u)&&(c=w[u])){I=g[u];var N=[];for(a=0;a<I.length;a++)if(x=I[a],t=c.hot._acceptedDependencies[x]){if(-1!==N.indexOf(t))continue;N.push(t)}for(a=0;a<N.length;a++){t=N[a];try{t(I)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:I[a],error:e}),n.ignoreErrored||S||(S=e)}}}for(a=0;a<P.length;a++){var B=P[a];u=B.module,s=[u];try{O(u)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,originalError:e}),n.ignoreErrored||S||(S=t),S||(S=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||S||(S=e)}}return S?(l("fail"),Promise.reject(S)):(l("idle"),new Promise(function(e){e(m)}))}var w={};function O(n){if(w[n])return w[n].exports;var a=w[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var a=0;a<e.length;a++)n._acceptedDependencies[e[a]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:T,apply:G,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:o[e]};return t=void 0,n}(n),parents:(c=s,s=[],c),children:[]};return e[n].call(a.exports,a,a.exports,u(n)),a.l=!0,a.exports}O.m=e,O.c=w,O.d=function(e,n,t){O.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},O.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},O.t=function(e,n){if(1&n&&(e=O(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(O.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)O.d(t,a,function(n){return e[n]}.bind(null,a));return t},O.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return O.d(n,"a",n),n},O.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},O.p="",O.h=function(){return r},u(0)(O.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2),t(4);e.hot.accept(),console.log("in index.js (main)")},function(e,n){console.log("IN TEST");let t=document.getElementById("sample"),a="we inserting this dynamically!aldsk";console.log(a),t.innerHTML=a},function(e,n,t){console.log("in main.js!!!?"),function(e){let n=document.getElementById("js_json-content"),t=document.createDocumentFragment();e.forEach(function(e){let n=e.Restaurant,a=e.Date,r=document.createElement("h2"),i=document.createElement("p"),o=document.createTextNode(n);dateTxt=document.createTextNode(a),r.appendChild(o),i.appendChild(dateTxt),t.appendChild(r),t.appendChild(i)}),n.appendChild(t)}(t(3))},function(e){e.exports=[{Date:"7/27/2017",Restaurant:"Paratha Alley","Cuisine Type":"Indian ","Go Again?":"No"},{Date:"8/30/2017",Restaurant:"Gaia","Cuisine Type":"Italian","Go Again?":"Yes"},{Date:"9/6/2017",Restaurant:"Souvlaki GR","Cuisine Type":"Greek","Go Again?":"Yes"},{Date:"9/13/2017",Restaurant:"Kati Roll","Cuisine Type":"Indian","Go Again?":"Yes"},{Date:"9/27/2017",Restaurant:"The MasalaWala","Cuisine Type":"Indian","Go Again?":"Yes"},{Date:"10/3/2017",Restaurant:"Patacon Pisao","Cuisine Type":"Venezuelan","Go Again?":"Yes"},{Date:"10/18/2017",Restaurant:"Cafe Himalaya","Cuisine Type":"Himalayan","Go Again?":"Yes"},{Date:"10/25/2017",Restaurant:"Nom Wah","Cuisine Type":"Chinese","Go Again?":"Yes"},{Date:"11/01/2017",Restaurant:"Fry Guys","Cuisine Type":"American","Go Again?":"No"},{Date:"11/08/2017",Restaurant:"Ramen Ishida","Cuisine Type":"Japanese","Go Again?":"Yes"},{Date:"11/15/2017",Restaurant:"Bar Primi","Cuisine Type":"Italian","Go Again?":"Maybe"},{Date:"11/30/2017",Restaurant:"Pokéspot","Cuisine Type":"Hawaiian","Go Again?":"Maybe"},{Date:"12/06/2017",Restaurant:"Trapizzino","Cuisine Type":"Italian","Go Again?":"Yes"},{Date:"12/27/2017",Restaurant:"Pho Vietnam","Cuisine Type":"Vietnamese","Go Again?":"Maybe"},{Date:"01/17/2018",Restaurant:"Cocoron","Cuisine Type":"Japanese","Go Again?":"Yes"},{Date:"01/24/2018",Restaurant:"Veselka","Cuisine Type":"Polish","Go Again?":"Yes"},{Date:"01/31/2018",Restaurant:"Molcajete","Cuisine Type":"Mexican","Go Again?":"Yes"},{Date:"02/07/2018",Restaurant:"Cocoron","Cuisine Type":"Japanese","Go Again?":"Yes"},{Date:"02/15/2018",Restaurant:"The Bao","Cuisine Type":"Chinese","Go Again?":"Yes"},{Date:"02/21/2018",Restaurant:"Rosie's","Cuisine Type":"Mexican","Go Again?":"Yes"},{Date:"02/28/2018",Restaurant:"Ginger & Lemongrass","Cuisine Type":"Vietnamese","Go Again?":"Yes"},{Date:"3/7/2018",Restaurant:"Wild Ginger","Cuisine Type":"Pan-Asian","Go Again?":"Maybe"},{Date:"3/14/2018",Restaurant:"Banh Mi Saigon","Cuisine Type":"Vietnamese","Go Again?":"Yes"},{Date:"3/21/2018",Restaurant:"Zest Ramen","Cuisine Type":"Japanese","Go Again?":"Yes"},{Date:"3/28/2018",Restaurant:"Slainte","Cuisine Type":"Irish","Go Again?":"Yes"},{Date:"04/04/2018",Restaurant:"Shopsins","Cuisine Type":"Diner","Go Again?":"Yes"},{Date:"05/02/2018",Restaurant:"BoCaphe","Cuisine Type":"Vietnamese","Go Again?":"No"},{Date:"05/09/2018",Restaurant:"Veselka","Cuisine Type":"Polish","Go Again?":"Yes"},{Date:"06/13/2018",Restaurant:"The Bao","Cuisine Type":"Chinese","Go Again?":"Yes"},{Date:"06/20/2018",Restaurant:"Boka","Cuisine Type":"Korean","Go Again?":"Yes"},{Date:"07/25/2018",Restaurant:"Szechuan Mountain House","Cuisine Type":"Chinese","Go Again?":"Yes"},{Date:"08/08/2018",Restaurant:"Neopolitan Express","Cuisine Type":"Italian","Go Again?":"Maybe"},{Date:"08/29/2018",Restaurant:"Broken Coconut","Cuisine Type":"Asian/American","Go Again?":"Maybe"},{Date:"09/05/2018",Restaurant:"K'OOK","Cuisine Type":"Korean","Go Again?":"Yes"}]},function(e,n,t){}]);
//# sourceMappingURL=bundle.js.map