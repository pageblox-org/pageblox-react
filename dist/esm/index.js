import e,{createContext as t,memo as n,useEffect as r,useLayoutEffect as i,useState as s,useCallback as o,useMemo as a,isValidElement as c,cloneElement as u,useContext as l,useRef as h}from"react";import{createPortal as d}from"react-dom";import{jsx as f}from"react/jsx-runtime";function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function p(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}const m=t({dragDropManager:void 0});function y(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var v="function"==typeof Symbol&&Symbol.observable||"@@observable",w=function(){return Math.random().toString(36).substring(7).split("").join(".")},b={INIT:"@@redux/INIT"+w(),REPLACE:"@@redux/REPLACE"+w(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+w()}};function T(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function E(e){if(void 0===e)return"undefined";if(null===e)return"null";var t=typeof e;switch(t){case"boolean":case"string":case"number":case"symbol":case"function":return t}if(Array.isArray(e))return"array";if(function(e){return e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate}(e))return"date";if(function(e){return e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit}(e))return"error";var n=function(e){return"function"==typeof e.constructor?e.constructor.name:null}(e);switch(n){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return n}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")}function I(e){var t=typeof e;return"production"!==process.env.NODE_ENV&&(t=E(e)),t}function _(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("production"===process.env.NODE_ENV?y(0):"It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("production"===process.env.NODE_ENV?y(1):"Expected the enhancer to be a function. Instead, received: '"+I(n)+"'");return n(_)(e,t)}if("function"!=typeof e)throw new Error("production"===process.env.NODE_ENV?y(2):"Expected the root reducer to be a function. Instead, received: '"+I(e)+"'");var i=e,s=t,o=[],a=o,c=!1;function u(){a===o&&(a=o.slice())}function l(){if(c)throw new Error("production"===process.env.NODE_ENV?y(3):"You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(e){if("function"!=typeof e)throw new Error("production"===process.env.NODE_ENV?y(4):"Expected the listener to be a function. Instead, received: '"+I(e)+"'");if(c)throw new Error("production"===process.env.NODE_ENV?y(5):"You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");var t=!0;return u(),a.push(e),function(){if(t){if(c)throw new Error("production"===process.env.NODE_ENV?y(6):"You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");t=!1,u();var n=a.indexOf(e);a.splice(n,1),o=null}}}function d(e){if(!T(e))throw new Error("production"===process.env.NODE_ENV?y(7):"Actions must be plain objects. Instead, the actual type was: '"+I(e)+"'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");if(void 0===e.type)throw new Error("production"===process.env.NODE_ENV?y(8):'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');if(c)throw new Error("production"===process.env.NODE_ENV?y(9):"Reducers may not dispatch actions.");try{c=!0,s=i(s,e)}finally{c=!1}for(var t=o=a,n=0;n<t.length;n++){(0,t[n])()}return e}function f(e){if("function"!=typeof e)throw new Error("production"===process.env.NODE_ENV?y(10):"Expected the nextReducer to be a function. Instead, received: '"+I(e));i=e,d({type:b.REPLACE})}function g(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error("production"===process.env.NODE_ENV?y(11):"Expected the observer to be an object. Instead, received: '"+I(e)+"'");function n(){e.next&&e.next(l())}return n(),{unsubscribe:t(n)}}})[v]=function(){return this},e}return d({type:b.INIT}),(r={dispatch:d,subscribe:h,getState:l,replaceReducer:f})[v]=g,r}function S(){}function C(e,t,...n){if("undefined"!=typeof process&&"production"===process.env.NODE_ENV&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){let e;if(void 0===t)e=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let r=0;e=new Error(t.replace(/%s/g,(function(){return n[r++]}))),e.name="Invariant Violation"}throw e.framesToPop=1,e}}function D(e){return"object"==typeof e}"production"!==process.env.NODE_ENV&&"string"==typeof S.name&&"isCrushed"!==S.name&&function(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');const k="dnd-core/INIT_COORDS",N="dnd-core/BEGIN_DRAG",O="dnd-core/PUBLISH_DRAG_SOURCE",R="dnd-core/HOVER",A="dnd-core/DROP",x="dnd-core/END_DRAG";function P(e,t){return{type:k,payload:{sourceClientOffset:t||null,clientOffset:e||null}}}const M={type:k,payload:{clientOffset:null,sourceClientOffset:null}};function L(e){return function(t=[],n={publishSource:!0}){const{publishSource:r=!0,clientOffset:i,getSourceClientOffset:s}=n,o=e.getMonitor(),a=e.getRegistry();e.dispatch(P(i)),function(e,t,n){C(!t.isDragging(),"Cannot call beginDrag while dragging."),e.forEach((function(e){C(n.getSource(e),"Expected sourceIds to be registered.")}))}(t,o,a);const c=function(e,t){let n=null;for(let r=e.length-1;r>=0;r--)if(t.canDragSource(e[r])){n=e[r];break}return n}(t,o);if(null==c)return void e.dispatch(M);let u=null;if(i){if(!s)throw new Error("getSourceClientOffset must be defined");!function(e){C("function"==typeof e,"When clientOffset is provided, getSourceClientOffset must be a function.")}(s),u=s(c)}e.dispatch(P(i,u));const l=a.getSource(c).beginDrag(o,c);if(null==l)return;!function(e){C(D(e),"Item must be an object.")}(l),a.pinSource(c);const h=a.getSourceType(c);return{type:N,payload:{itemType:h,item:l,sourceId:c,clientOffset:i||null,sourceClientOffset:u||null,isSourcePublic:!!r}}}}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){U(e,t,n[t])}))}return e}function V(e){return function(t={}){const n=e.getMonitor(),r=e.getRegistry();!function(e){C(e.isDragging(),"Cannot call drop while not dragging."),C(!e.didDrop(),"Cannot call drop twice during one drag operation.")}(n);const i=function(e){const t=e.getTargetIds().filter(e.canDropOnTarget,e);return t.reverse(),t}(n);i.forEach(((i,s)=>{const o=function(e,t,n,r){const i=n.getTarget(e);let s=i?i.drop(r,e):void 0;(function(e){C(void 0===e||D(e),"Drop result must either be an object or undefined.")})(s),void 0===s&&(s=0===t?{}:r.getDropResult());return s}(i,s,r,n),a={type:A,payload:{dropResult:F({},t,o)}};e.dispatch(a)}))}}function j(e){return function(){const t=e.getMonitor(),n=e.getRegistry();!function(e){C(e.isDragging(),"Cannot call endDrag while not dragging.")}(t);const r=t.getSourceId();if(null!=r){n.getSource(r,!0).endDrag(t,r),n.unpinSource()}return{type:x}}}function q(e,t){return null===t?null===e:Array.isArray(e)?e.some((e=>e===t)):e===t}function B(e){return function(t,{clientOffset:n}={}){!function(e){C(Array.isArray(e),"Expected targetIds to be an array.")}(t);const r=t.slice(0),i=e.getMonitor(),s=e.getRegistry();return function(e,t,n){for(let r=e.length-1;r>=0;r--){const i=e[r];q(t.getTargetType(i),n)||e.splice(r,1)}}(r,s,i.getItemType()),function(e,t,n){C(t.isDragging(),"Cannot call hover while not dragging."),C(!t.didDrop(),"Cannot call hover after drop.");for(let t=0;t<e.length;t++){const r=e[t];C(e.lastIndexOf(r)===t,"Expected targetIds to be unique in the passed array.");C(n.getTarget(r),"Expected targetIds to be registered.")}}(r,i,s),function(e,t,n){e.forEach((function(e){n.getTarget(e).hover(t,e)}))}(r,i,s),{type:R,payload:{targetIds:r,clientOffset:n||null}}}}function H(e){return function(){if(e.getMonitor().isDragging())return{type:O}}}class ${receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:t}=this.store;const n=function(e){return{beginDrag:L(e),publishDragSource:H(e),hover:B(e),drop:V(e),endDrag:j(e)}}(this);return Object.keys(n).reduce(((r,i)=>{const s=n[i];var o;return r[i]=(o=s,(...n)=>{const r=o.apply(e,n);void 0!==r&&t(r)}),r}),{})}dispatch(e){this.store.dispatch(e)}constructor(e,t){this.isSetUp=!1,this.handleRefCountChange=()=>{const e=this.store.getState().refCount>0;this.backend&&(e&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!e&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=t,e.subscribe(this.handleRefCountChange)}}function z(e,t){return{x:e.x-t.x,y:e.y-t.y}}const W=[],G=[];W.__IS_NONE__=!0,G.__IS_ALL__=!0;class K{subscribeToStateChange(e,t={}){const{handlerIds:n}=t;C("function"==typeof e,"listener must be a function."),C(void 0===n||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let r=this.store.getState().stateId;return this.store.subscribe((()=>{const t=this.store.getState(),i=t.stateId;try{const s=i===r||i===r+1&&!function(e,t){if(e===W)return!1;if(e===G||void 0===t)return!0;const n=(r=e,t.filter((e=>r.indexOf(e)>-1)));var r;return n.length>0}(t.dirtyHandlerIds,n);s||e()}finally{r=i}}))}subscribeToOffsetChange(e){C("function"==typeof e,"listener must be a function.");let t=this.store.getState().dragOffset;return this.store.subscribe((()=>{const n=this.store.getState().dragOffset;n!==t&&(t=n,e())}))}canDragSource(e){if(!e)return!1;const t=this.registry.getSource(e);return C(t,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()&&t.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const t=this.registry.getTarget(e);if(C(t,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;return q(this.registry.getTargetType(e),this.getItemType())&&t.canDrop(this,e)}isDragging(){return Boolean(this.getItemType())}isDraggingSource(e){if(!e)return!1;const t=this.registry.getSource(e,!0);if(C(t,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;return this.registry.getSourceType(e)===this.getItemType()&&t.isDragging(this,e)}isOverTarget(e,t={shallow:!1}){if(!e)return!1;const{shallow:n}=t;if(!this.isDragging())return!1;const r=this.registry.getTargetType(e),i=this.getItemType();if(i&&!q(r,i))return!1;const s=this.getTargetIds();if(!s.length)return!1;const o=s.indexOf(e);return n?o===s.length-1:o>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return Boolean(this.store.getState().dragOperation.isSourcePublic)}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return function(e){const{clientOffset:t,initialClientOffset:n,initialSourceClientOffset:r}=e;return t&&n&&r?z(function(e,t){return{x:e.x+t.x,y:e.y+t.y}}(t,r),n):null}(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return function(e){const{clientOffset:t,initialClientOffset:n}=e;return t&&n?z(t,n):null}(this.store.getState().dragOffset)}constructor(e,t){this.store=e,this.registry=t}}const Q="undefined"!=typeof global?global:self,Y=Q.MutationObserver||Q.WebKitMutationObserver;function X(e){return function(){const t=setTimeout(r,0),n=setInterval(r,50);function r(){clearTimeout(t),clearInterval(n),e()}}}const J="function"==typeof Y?function(e){let t=1;const n=new Y(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}:X;class Z{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,t){this.onError=e,this.release=t,this.task=null}}const ee=new class{enqueueTask(e){const{queue:t,requestFlush:n}=this;t.length||(n(),this.flushing=!0),t[t.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const t=this.index;if(this.index++,e[t].call(),this.index>this.capacity){for(let t=0,n=e.length-this.index;t<n;t++)e[t]=e[t+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=J(this.flush),this.requestErrorThrow=X((()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()}))}},te=new class{create(e){const t=this.freeTasks,n=t.length?t.pop():new Z(this.onError,(e=>t[t.length]=e));return n.task=e,n}constructor(e){this.onError=e,this.freeTasks=[]}}(ee.registerPendingError);const ne="dnd-core/ADD_SOURCE",re="dnd-core/ADD_TARGET",ie="dnd-core/REMOVE_SOURCE",se="dnd-core/REMOVE_TARGET";function oe(e,t){t&&Array.isArray(e)?e.forEach((e=>oe(e,!1))):C("string"==typeof e||"symbol"==typeof e,t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var ae;!function(e){e.SOURCE="SOURCE",e.TARGET="TARGET"}(ae||(ae={}));let ce=0;function ue(e){const t=(ce++).toString();switch(e){case ae.SOURCE:return`S${t}`;case ae.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${e}`)}}function le(e){switch(e[0]){case"S":return ae.SOURCE;case"T":return ae.TARGET;default:throw new Error(`Cannot parse handler ID: ${e}`)}}function he(e,t){const n=e.entries();let r=!1;do{const{done:e,value:[,i]}=n.next();if(i===t)return!0;r=!!e}while(!r);return!1}class de{addSource(e,t){oe(e),function(e){C("function"==typeof e.canDrag,"Expected canDrag to be a function."),C("function"==typeof e.beginDrag,"Expected beginDrag to be a function."),C("function"==typeof e.endDrag,"Expected endDrag to be a function.")}(t);const n=this.addHandler(ae.SOURCE,e,t);return this.store.dispatch(function(e){return{type:ne,payload:{sourceId:e}}}(n)),n}addTarget(e,t){oe(e,!0),function(e){C("function"==typeof e.canDrop,"Expected canDrop to be a function."),C("function"==typeof e.hover,"Expected hover to be a function."),C("function"==typeof e.drop,"Expected beginDrag to be a function.")}(t);const n=this.addHandler(ae.TARGET,e,t);return this.store.dispatch(function(e){return{type:re,payload:{targetId:e}}}(n)),n}containsHandler(e){return he(this.dragSources,e)||he(this.dropTargets,e)}getSource(e,t=!1){C(this.isSourceId(e),"Expected a valid source ID.");return t&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return C(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return C(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return C(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return le(e)===ae.SOURCE}isTargetId(e){return le(e)===ae.TARGET}removeSource(e){var t;C(this.getSource(e),"Expected an existing source."),this.store.dispatch(function(e){return{type:ie,payload:{sourceId:e}}}(e)),t=()=>{this.dragSources.delete(e),this.types.delete(e)},ee.enqueueTask(te.create(t))}removeTarget(e){C(this.getTarget(e),"Expected an existing target."),this.store.dispatch(function(e){return{type:se,payload:{targetId:e}}}(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const t=this.getSource(e);C(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}unpinSource(){C(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,t,n){const r=ue(e);return this.types.set(r,t),e===ae.SOURCE?this.dragSources.set(r,n):e===ae.TARGET&&this.dropTargets.set(r,n),r}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const fe=(e,t)=>e===t;function ge(e=W,t){switch(t.type){case R:break;case ne:case re:case se:case ie:return W;default:return G}const{targetIds:n=[],prevTargetIds:r=[]}=t.payload,i=function(e,t){const n=new Map,r=e=>{n.set(e,n.has(e)?n.get(e)+1:1)};e.forEach(r),t.forEach(r);const i=[];return n.forEach(((e,t)=>{1===e&&i.push(t)})),i}(n,r),s=i.length>0||!function(e,t,n=fe){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(!n(e[r],t[r]))return!1;return!0}(n,r);if(!s)return W;const o=r[r.length-1],a=n[n.length-1];return o!==a&&(o&&i.push(o),a&&i.push(a)),i}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const me={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function ye(e=me,t){const{payload:n}=t;switch(t.type){case k:case N:return{initialSourceClientOffset:n.sourceClientOffset,initialClientOffset:n.clientOffset,clientOffset:n.clientOffset};case R:return r=e.clientOffset,i=n.clientOffset,!r&&!i||r&&i&&r.x===i.x&&r.y===i.y?e:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){pe(e,t,n[t])}))}return e}({},e,{clientOffset:n.clientOffset});case x:case A:return me;default:return e}var r,i}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ve(e,t,n[t])}))}return e}const be={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Te(e=be,t){const{payload:n}=t;switch(t.type){case N:return we({},e,{itemType:n.itemType,item:n.item,sourceId:n.sourceId,isSourcePublic:n.isSourcePublic,dropResult:null,didDrop:!1});case O:return we({},e,{isSourcePublic:!0});case R:return we({},e,{targetIds:n.targetIds});case se:return-1===e.targetIds.indexOf(n.targetId)?e:we({},e,{targetIds:(r=e.targetIds,i=n.targetId,r.filter((e=>e!==i)))});case A:return we({},e,{dropResult:n.dropResult,didDrop:!0,targetIds:[]});case x:return we({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}var r,i}function Ee(e=0,t){switch(t.type){case ne:case re:return e+1;case ie:case se:return e-1;default:return e}}function Ie(e=0){return e+1}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_e(e,t,n[t])}))}return e}function Ce(e={},t){return{dirtyHandlerIds:ge(e.dirtyHandlerIds,{type:t.type,payload:Se({},t.payload,{prevTargetIds:(n=e,r="dragOperation.targetIds",i=[],r.split(".").reduce(((e,t)=>e&&e[t]?e[t]:i||null),n))})}),dragOffset:ye(e.dragOffset,t),refCount:Ee(e.refCount,t),dragOperation:Te(e.dragOperation,t),stateId:Ie(e.stateId)};var n,r,i}function De(e,t,n={},r=!1){const i=function(e){const t="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__;return _(Ce,e&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}(r),s=new K(i,new de(i)),o=new $(i,s),a=e(o,t,n);return o.receiveBackend(a),o}function ke(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}let Ne=0;const Oe=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var Re=n((function(e){var{children:t}=e,n=ke(e,["children"]);const[i,s]=function(e){if("manager"in e){return[{dragDropManager:e.manager},!1]}const t=function(e,t=Ae(),n,r){const i=t;i[Oe]||(i[Oe]={dragDropManager:De(e,t,n,r)});return i[Oe]}(e.backend,e.context,e.options,e.debugMode),n=!e.context;return[t,n]}(n);return r((()=>{if(s){const e=Ae();return++Ne,()=>{0==--Ne&&(e[Oe]=null)}}}),[]),f(m.Provider,{value:i,children:t})}));function Ae(){return"undefined"!=typeof global?global:window}var xe=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;0!=i--;){var o=s[i];if(!e(t[o],n[o]))return!1}return!0}return t!=t&&n!=n};const Pe="undefined"!=typeof window?i:r;function Me(e,t,n){const[r,i]=s((()=>t(e))),a=o((()=>{const s=t(e);xe(r,s)||(i(s),n&&n())}),[r,e,n]);return Pe(a),[r,a]}function Le(e,t,n){return function(e,t,n){const[r,i]=Me(e,t,n);return Pe((function(){const t=e.getHandlerId();if(null!=t)return e.subscribeToStateChange(i,{handlerIds:[t]})}),[e,i]),r}(t,e||(()=>({})),(()=>n.reconnect()))}function Ue(e,t){const n=[...t||[]];return null==t&&"function"!=typeof e&&n.push(e),a((()=>"function"==typeof e?e():e),n)}function Fe(e){return a((()=>e.hooks.dragSource()),[e])}function Ve(e){return a((()=>e.hooks.dragPreview()),[e])}let je=!1,qe=!1;class Be{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){C(!je,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return je=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{je=!1}}isDragging(){if(!this.sourceId)return!1;C(!qe,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return qe=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{qe=!1}}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,t){return this.internalMonitor.isOverTarget(e,t)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}let He=!1;class $e{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}canDrop(){if(!this.targetId)return!1;C(!He,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return He=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{He=!1}}isOver(e){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}function ze(e,t,n,r){let i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;const s=Object.keys(e),o=Object.keys(t);if(s.length!==o.length)return!1;const a=Object.prototype.hasOwnProperty.bind(t);for(let o=0;o<s.length;o++){const c=s[o];if(!a(c))return!1;const u=e[c],l=t[c];if(i=n?n.call(r,u,l,c):void 0,!1===i||void 0===i&&u!==l)return!1}return!0}function We(e){return null!==e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Ge(e){return(t=null,n=null)=>{if(!c(t)){const r=t;return e(r,n),r}const r=t;!function(e){if("string"==typeof e.type)return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}(r);return function(e,t){const n=e.ref;return C("string"!=typeof n,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),u(e,n?{ref:e=>{Qe(n,e),Qe(t,e)}}:{ref:t})}(r,n?t=>e(t,n):e)}}function Ke(e){const t={};return Object.keys(e).forEach((n=>{const r=e[n];if(n.endsWith("Ref"))t[n]=e[n];else{const e=Ge(r);t[n]=()=>e}})),t}function Qe(e,t){"function"==typeof e?e(t):e.current=t}class Ye{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){const e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){const e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return t&&this.disconnectDragSource(),this.handlerId?e?(t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),t):(this.lastConnectedDragSource=e,t):t}reconnectDragPreview(e=!1){const t=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();n&&this.disconnectDragPreview(),this.handlerId&&(t?n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions)):this.lastConnectedDragPreview=t)}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!ze(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!ze(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=Ke({dragSource:(e,t)=>{this.clearDragSource(),this.dragSourceOptions=t||null,We(e)?this.dragSourceRef=e:this.dragSourceNode=e,this.reconnectDragSource()},dragPreview:(e,t)=>{this.clearDragPreview(),this.dragPreviewOptions=t||null,We(e)?this.dragPreviewRef=e:this.dragPreviewNode=e,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}class Xe{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const t=this.dropTarget;this.handlerId&&(t?e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions)):this.lastConnectedDropTarget=t)}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!ze(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=Ke({dropTarget:(e,t)=>{this.clearDropTarget(),this.dropTargetOptions=t,We(e)?this.dropTargetRef=e:this.dropTargetNode=e,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function Je(){const{dragDropManager:e}=l(m);return C(null!=e,"Expected drag drop context"),e}class Ze{beginDrag(){const e=this.spec,t=this.monitor;let n=null;return n="object"==typeof e.item?e.item:"function"==typeof e.item?e.item(t):{},null!=n?n:null}canDrag(){const e=this.spec,t=this.monitor;return"boolean"==typeof e.canDrag?e.canDrag:"function"!=typeof e.canDrag||e.canDrag(t)}isDragging(e,t){const n=this.spec,r=this.monitor,{isDragging:i}=n;return i?i(r):t===e.getSourceId()}endDrag(){const e=this.spec,t=this.monitor,n=this.connector,{end:r}=e;r&&r(t.getItem(),t),n.reconnect()}constructor(e,t,n){this.spec=e,this.monitor=t,this.connector=n}}function et(e,t,n){const i=Je(),s=function(e,t,n){const i=a((()=>new Ze(e,t,n)),[t,n]);return r((()=>{i.spec=e}),[e]),i}(e,t,n),o=function(e){return a((()=>{const t=e.type;return C(null!=t,"spec.type must be defined"),t}),[e])}(e);Pe((function(){if(null!=o){const[e,r]=function(e,t,n){const r=n.getRegistry(),i=r.addSource(e,t);return[i,()=>r.removeSource(i)]}(o,s,i);return t.receiveHandlerId(e),n.receiveHandlerId(e),r}}),[i,t,n,s,o])}function tt(e,t){const n=Ue(e,t);C(!n.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const r=function(){const e=Je();return a((()=>new Be(e)),[e])}(),i=function(e,t){const n=Je(),r=a((()=>new Ye(n.getBackend())),[n]);return Pe((()=>(r.dragSourceOptions=e||null,r.reconnect(),()=>r.disconnectDragSource())),[r,e]),Pe((()=>(r.dragPreviewOptions=t||null,r.reconnect(),()=>r.disconnectDragPreview())),[r,t]),r}(n.options,n.previewOptions);return et(n,r,i),[Le(n.collect,r,i),Fe(i),Ve(i)]}function nt(e){return a((()=>e.hooks.dropTarget()),[e])}class rt{canDrop(){const e=this.spec,t=this.monitor;return!e.canDrop||e.canDrop(t.getItem(),t)}hover(){const e=this.spec,t=this.monitor;e.hover&&e.hover(t.getItem(),t)}drop(){const e=this.spec,t=this.monitor;if(e.drop)return e.drop(t.getItem(),t)}constructor(e,t){this.spec=e,this.monitor=t}}function it(e,t,n){const i=Je(),s=function(e,t){const n=a((()=>new rt(e,t)),[t]);return r((()=>{n.spec=e}),[e]),n}(e,t),o=function(e){const{accept:t}=e;return a((()=>(C(null!=e.accept,"accept must be defined"),Array.isArray(t)?t:[t])),[t])}(e);Pe((function(){const[e,r]=function(e,t,n){const r=n.getRegistry(),i=r.addTarget(e,t);return[i,()=>r.removeTarget(i)]}(o,s,i);return t.receiveHandlerId(e),n.receiveHandlerId(e),r}),[i,t,s,n,o.map((e=>e.toString())).join("|")])}function st(e,t){const n=Ue(e,t),r=function(){const e=Je();return a((()=>new $e(e)),[e])}(),i=function(e){const t=Je(),n=a((()=>new Xe(t.getBackend())),[t]);return Pe((()=>(n.dropTargetOptions=e||null,n.reconnect(),()=>n.disconnectDropTarget())),[e]),n}(n.options);return it(n,r,i),[Le(n.collect,r,i),nt(i)]}function ot(e){let t=null;return()=>(null==t&&(t=e()),t)}class at{enter(e){const t=this.entered.length;return this.entered=function(e,t){const n=new Set,r=e=>n.add(e);e.forEach(r),t.forEach(r);const i=[];return n.forEach((e=>i.push(e))),i}(this.entered.filter((t=>this.isNodeInDocument(t)&&(!t.contains||t.contains(e)))),[e]),0===t&&this.entered.length>0}leave(e){const t=this.entered.length;var n,r;return this.entered=(n=this.entered.filter(this.isNodeInDocument),r=e,n.filter((e=>e!==r))),t>0&&0===this.entered.length}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class ct{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach((e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get:()=>(console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null)})}))}loadDataTransfer(e){if(e){const t={};Object.keys(this.config.exposeProperties).forEach((n=>{const r=this.config.exposeProperties[n];null!=r&&(t[n]={value:r(e,this.config.matchesTypes),configurable:!0,enumerable:!0})})),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,t){return t===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const ut="__NATIVE_FILE__",lt="__NATIVE_URL__",ht="__NATIVE_TEXT__",dt="__NATIVE_HTML__";var ft=Object.freeze({__proto__:null,FILE:ut,HTML:dt,TEXT:ht,URL:lt});function gt(e,t,n){const r=t.reduce(((t,n)=>t||e.getData(n)),"");return null!=r?r:n}const pt={[ut]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[dt]:{exposeProperties:{html:(e,t)=>gt(e,t,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[lt]:{exposeProperties:{urls:(e,t)=>gt(e,t,"").split("\n"),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[ht]:{exposeProperties:{text:(e,t)=>gt(e,t,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function mt(e){if(!e)return null;const t=Array.prototype.slice.call(e.types||[]);return Object.keys(pt).filter((e=>{const n=pt[e];return!!(null==n?void 0:n.matchesTypes)&&n.matchesTypes.some((e=>t.indexOf(e)>-1))}))[0]||null}const yt=ot((()=>/firefox/i.test(navigator.userAgent))),vt=ot((()=>Boolean(window.safari)));class wt{interpolate(e){const{xs:t,ys:n,c1s:r,c2s:i,c3s:s}=this;let o=t.length-1;if(e===t[o])return n[o];let a,c=0,u=s.length-1;for(;c<=u;){a=Math.floor(.5*(c+u));const r=t[a];if(r<e)c=a+1;else{if(!(r>e))return n[a];u=a-1}}o=Math.max(0,u);const l=e-t[o],h=l*l;return n[o]+r[o]*l+i[o]*h+s[o]*l*h}constructor(e,t){const{length:n}=e,r=[];for(let e=0;e<n;e++)r.push(e);r.sort(((t,n)=>e[t]<e[n]?-1:1));const i=[],s=[];let o,a;for(let r=0;r<n-1;r++)o=e[r+1]-e[r],a=t[r+1]-t[r],i.push(o),s.push(a/o);const c=[s[0]];for(let e=0;e<i.length-1;e++){const t=s[e],n=s[e+1];if(t*n<=0)c.push(0);else{o=i[e];const r=i[e+1],s=o+r;c.push(3*s/((s+r)/t+(s+o)/n))}}c.push(s[s.length-1]);const u=[],l=[];let h;for(let e=0;e<c.length-1;e++){h=s[e];const t=c[e],n=1/i[e],r=t+c[e+1]-h-h;u.push((h-t-r)*n),l.push(r*n*n)}this.xs=e,this.ys=t,this.c1s=c,this.c2s=u,this.c3s=l}}function bt(e){const t=1===e.nodeType?e:e.parentElement;if(!t)return null;const{top:n,left:r}=t.getBoundingClientRect();return{x:r,y:n}}function Tt(e){return{x:e.clientX,y:e.clientY}}function Et(e,t,n,r,i){const s=function(e){var t;return"IMG"===e.nodeName&&(yt()||!(null===(t=document.documentElement)||void 0===t?void 0:t.contains(e)))}(t),o=bt(s?e:t),a={x:n.x-o.x,y:n.y-o.y},{offsetWidth:c,offsetHeight:u}=e,{anchorX:l,anchorY:h}=r,{dragPreviewWidth:d,dragPreviewHeight:f}=function(e,t,n,r){let i=e?t.width:n,s=e?t.height:r;return vt()&&e&&(s/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:s}}(s,t,c,u),{offsetX:g,offsetY:p}=i,m=0===p||p;return{x:0===g||g?g:new wt([0,.5,1],[a.x,a.x/c*d,a.x+d-c]).interpolate(l),y:m?p:(()=>{let e=new wt([0,.5,1],[a.y,a.y/u*f,a.y+f-u]).interpolate(h);return vt()&&s&&(e+=(window.devicePixelRatio-1)*f),e})()}}class It{get window(){return this.globalContext?this.globalContext:"undefined"!=typeof window?window:void 0}get document(){var e;return(null===(e=this.globalContext)||void 0===e?void 0:e.document)?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return(null===(e=this.optionsArgs)||void 0===e?void 0:e.rootElement)||this.window}constructor(e,t){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=t}}function _t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function St(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_t(e,t,n[t])}))}return e}class Ct{profile(){var e,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:(null===(e=this.dragStartSourceIds)||void 0===e?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:(null===(t=this.dragOverTargetIds)||void 0===t?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(void 0!==e){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;var t;void 0!==e&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&(null===(t=this.window)||void 0===t||t.cancelAnimationFrame(this.asyncEndDragFrameId)))}connectDragPreview(e,t,n){return this.sourcePreviewNodeOptions.set(e,n),this.sourcePreviewNodes.set(e,t),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,t,n){this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,n);const r=t=>this.handleDragStart(t,e),i=e=>this.handleSelectStart(e);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",r),t.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",r),t.removeEventListener("selectstart",i),t.setAttribute("draggable","false")}}connectDropTarget(e,t){const n=t=>this.handleDragEnter(t,e),r=t=>this.handleDragOver(t,e),i=t=>this.handleDrop(t,e);return t.addEventListener("dragenter",n),t.addEventListener("dragover",r),t.addEventListener("drop",i),()=>{t.removeEventListener("dragenter",n),t.removeEventListener("dragover",r),t.removeEventListener("drop",i)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return St({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId();return St({anchorX:.5,anchorY:.5,captureDraggingState:!1},this.sourcePreviewNodeOptions.get(e)||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(ft).some((t=>ft[t]===e))}beginDragNativeItem(e,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=function(e,t){const n=pt[e];if(!n)throw new Error(`native type ${e} has no configuration`);const r=new ct(n);return r.loadDataTransfer(t),r}(e,t),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;this.mouseMoveTimeoutTimer=setTimeout((()=>{var e;return null===(e=this.rootElement)||void 0===e?void 0:e.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}),1e3)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){var e;if(this.currentDragSourceNode=null,this.rootElement)null===(e=this.window)||void 0===e||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0);return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(e,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(e,t){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(e,t){this.dropTargetIds.unshift(t)}constructor(e,t,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=e=>{const t=this.sourceNodes.get(e);return t&&bt(t)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=e=>Boolean(e&&this.document&&this.document.body&&this.document.body.contains(e)),this.endDragIfSourceWasRemovedFromDOM=()=>{const e=this.currentDragSourceNode;null==e||this.isNodeInDocument(e)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=e=>{null===this.hoverRafId&&"undefined"!=typeof requestAnimationFrame&&(this.hoverRafId=requestAnimationFrame((()=>{this.monitor.isDragging()&&this.actions.hover(e||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null})))},this.cancelHover=()=>{null!==this.hoverRafId&&"undefined"!=typeof cancelAnimationFrame&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=e=>{if(e.defaultPrevented)return;const{dragStartSourceIds:t}=this;this.dragStartSourceIds=null;const n=Tt(e);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(t||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:n});const{dataTransfer:r}=e,i=mt(r);if(this.monitor.isDragging()){if(r&&"function"==typeof r.setDragImage){const e=this.monitor.getSourceId(),t=this.sourceNodes.get(e),i=this.sourcePreviewNodes.get(e)||t;if(i){const{anchorX:e,anchorY:s,offsetX:o,offsetY:a}=this.getCurrentSourcePreviewNodeOptions(),c=Et(t,i,n,{anchorX:e,anchorY:s},{offsetX:o,offsetY:a});r.setDragImage(i,c.x,c.y)}}try{null==r||r.setData("application/json",{})}catch(e){}this.setCurrentDragSourceNode(e.target);const{captureDraggingState:t}=this.getCurrentSourcePreviewNodeOptions();t?this.actions.publishDragSource():setTimeout((()=>this.actions.publishDragSource()),0)}else if(i)this.beginDragNativeItem(i);else{if(r&&!r.types&&(e.target&&!e.target.hasAttribute||!e.target.hasAttribute("draggable")))return;e.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=e=>{var t;(this.dragEnterTargetIds=[],this.isDraggingNativeItem())&&(null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer));if(!this.enterLeaveCounter.enter(e.target)||this.monitor.isDragging())return;const{dataTransfer:n}=e,r=mt(n);r&&this.beginDragNativeItem(r,n)},this.handleTopDragEnter=e=>{const{dragEnterTargetIds:t}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=e.altKey,t.length>0&&this.actions.hover(t,{clientOffset:Tt(e)});t.some((e=>this.monitor.canDropOnTarget(e)))&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=e=>{var t;(this.dragOverTargetIds=[],this.isDraggingNativeItem())&&(null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer))},this.handleTopDragOver=e=>{const{dragOverTargetIds:t}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer&&(e.dataTransfer.dropEffect="none"));this.altKeyPressed=e.altKey,this.lastClientOffset=Tt(e),this.scheduleHover(t);(t||[]).some((e=>this.monitor.canDropOnTarget(e)))?(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?e.preventDefault():(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=e=>{this.isDraggingNativeItem()&&e.preventDefault();this.enterLeaveCounter.leave(e.target)&&(this.isDraggingNativeItem()&&setTimeout((()=>this.endDragNativeItem()),0),this.cancelHover())},this.handleTopDropCapture=e=>{var t;(this.dropTargetIds=[],this.isDraggingNativeItem())?(e.preventDefault(),null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)):mt(e.dataTransfer)&&e.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=e=>{const{dropTargetIds:t}=this;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:Tt(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=e=>{const t=e.target;"function"==typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))},this.options=new It(t,n),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new at(this.isNodeInDocument)}}const Dt=function(e,t,n){return new Ct(e,t,n)},kt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Nt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(kt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ot=function(e){return function(e){const t=kt(e);return Nt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Rt=function(e){try{return Nt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
/**
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
 */
function At(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
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
 */
const xt=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Pt=()=>{try{return xt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Rt(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Mt=e=>{var t,n;return null===(n=null===(t=Pt())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Lt=e=>{const t=Mt(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ut=e=>{var t;return null===(t=Pt())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class Ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function Vt(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ot(JSON.stringify({alg:"none",type:"JWT"})),Ot(JSON.stringify(s)),""].join(".")}
/**
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
 */class jt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qt.prototype.create)}}class qt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Bt,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new jt(r,o,n)}}const Bt=/\{\$([^}]+)}/g;function Ht(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if($t(n)&&$t(s)){if(!Ht(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function $t(e){return null!==e&&"object"==typeof e}
/**
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
 */function zt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Wt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Gt),void 0===r.error&&(r.error=Gt),void 0===r.complete&&(r.complete=Gt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Gt(){}
/**
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
 */function Kt(e){return e&&e._delegate?e._delegate:e}class Qt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const Yt="[DEFAULT]";
/**
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
 */class Xt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ft;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Yt?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Jt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var Zt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Zt||(Zt={}));const en={debug:Zt.DEBUG,verbose:Zt.VERBOSE,info:Zt.INFO,warn:Zt.WARN,error:Zt.ERROR,silent:Zt.SILENT},tn=Zt.INFO,nn={[Zt.DEBUG]:"log",[Zt.VERBOSE]:"log",[Zt.INFO]:"info",[Zt.WARN]:"warn",[Zt.ERROR]:"error"},rn=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=nn[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class sn{constructor(e){this.name=e,this._logLevel=tn,this._logHandler=rn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Zt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?en[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Zt.DEBUG,...e),this._logHandler(this,Zt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Zt.VERBOSE,...e),this._logHandler(this,Zt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Zt.INFO,...e),this._logHandler(this,Zt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Zt.WARN,...e),this._logHandler(this,Zt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Zt.ERROR,...e),this._logHandler(this,Zt.ERROR,...e)}}let on,an;const cn=new WeakMap,un=new WeakMap,ln=new WeakMap,hn=new WeakMap,dn=new WeakMap;let fn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return un.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ln.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function gn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(an||(an=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(yn(this),t),mn(cn.get(this))}:function(...t){return mn(e.apply(yn(this),t))}:function(t,...n){const r=e.call(yn(this),t,...n);return ln.set(r,t.sort?t.sort():[t]),mn(r)}}function pn(e){return"function"==typeof e?gn(e):(e instanceof IDBTransaction&&function(e){if(un.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));un.set(e,t)}(e),t=e,(on||(on=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,fn):e);var t}function mn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(mn(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&cn.set(t,e)})).catch((()=>{})),dn.set(t,e),t}(e);if(hn.has(e))return hn.get(e);const t=pn(e);return t!==e&&(hn.set(e,t),dn.set(t,e)),t}const yn=e=>dn.get(e);const vn=["get","getKey","getAll","getAllKeys","count"],wn=["put","add","delete","clear"],bn=new Map;function Tn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(bn.get(t))return bn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=wn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!vn.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return bn.set(t,s),s}fn=(e=>({...e,get:(t,n,r)=>Tn(t,n)||e.get(t,n,r),has:(t,n)=>!!Tn(t,n)||e.has(t,n)}))(fn);
/**
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
 */
class En{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const In="@firebase/app",_n="0.9.0",Sn=new sn("@firebase/app"),Cn="[DEFAULT]",Dn={[In]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},kn=new Map,Nn=new Map;function On(e,t){try{e.container.addComponent(t)}catch(n){Sn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Rn(e){const t=e.name;if(Nn.has(t))return Sn.debug(`There were multiple attempts to register component ${t}.`),!1;Nn.set(t,e);for(const t of kn.values())On(t,e);return!0}function An(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */const xn=new qt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class Pn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Qt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}
/**
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
 */const Mn="9.15.0";function Ln(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Cn,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw xn.create("bad-app-name",{appName:String(i)});if(n||(n=(()=>{var e;return null===(e=Pt())||void 0===e?void 0:e.config})()),!n)throw xn.create("no-options");const s=kn.get(i);if(s){if(Ht(n,s.options)&&Ht(r,s.config))return s;throw xn.create("duplicate-app",{appName:i})}const o=new Jt(i);for(const e of Nn.values())o.addComponent(e);const a=new Pn(n,r,o);return kn.set(i,a),a}function Un(e=Cn){const t=kn.get(e);if(!t&&e===Cn)return Ln();if(!t)throw xn.create("no-app",{appName:e});return t}function Fn(e,t,n){var r;let i=null!==(r=Dn[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Sn.warn(e.join(" "))}Rn(new Qt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */const Vn="firebase-heartbeat-store";let jn=null;function qn(){return jn||(jn=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=mn(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(mn(o.result),e.oldVersion,e.newVersion,mn(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Vn)}}).catch((e=>{throw xn.create("idb-open",{originalErrorMessage:e.message})}))),jn}async function Bn(e,t){try{const n=(await qn()).transaction(Vn,"readwrite"),r=n.objectStore(Vn);return await r.put(t,Hn(e)),n.done}catch(e){if(e instanceof jt)Sn.warn(e.message);else{const t=xn.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Sn.warn(t.message)}}}function Hn(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class $n{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=zn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=zn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Gn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ot(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function zn(){return(new Date).toISOString().substring(0,10)}class Wn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await qn()).transaction(Vn).objectStore(Vn).get(Hn(e))}catch(e){if(e instanceof jt)Sn.warn(e.message);else{const t=xn.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Sn.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Bn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Bn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Gn(e){return Ot(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var Kn;Kn="",Rn(new Qt("platform-logger",(e=>new En(e)),"PRIVATE")),Rn(new Qt("heartbeat",(e=>new $n(e)),"PRIVATE")),Fn(In,_n,Kn),Fn(In,_n,"esm2017"),Fn("fire-js","");var Qn,Yn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Xn=Xn||{},Jn=Yn||self;function Zn(){}function er(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function tr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var nr="closure_uid_"+(1e9*Math.random()>>>0),rr=0;function ir(e,t,n){return e.call.apply(e.bind,arguments)}function sr(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function or(e,t,n){return(or=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ir:sr).apply(null,arguments)}function ar(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function cr(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function ur(){this.s=this.s,this.o=this.o}ur.prototype.s=!1,ur.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,nr)&&e[nr]||(e[nr]=++rr))},ur.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function hr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function dr(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(er(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function fr(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}fr.prototype.h=function(){this.defaultPrevented=!0};var gr=function(){if(!Jn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Jn.addEventListener("test",Zn,t),Jn.removeEventListener("test",Zn,t)}catch(e){}return e}();function pr(e){return/^[\s\xa0]*$/.test(e)}var mr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function yr(e,t){return e<t?-1:e>t?1:0}function vr(){var e=Jn.navigator;return e&&(e=e.userAgent)?e:""}function wr(e){return-1!=vr().indexOf(e)}function br(e){return br[" "](e),e}br[" "]=Zn;var Tr,Er,Ir=wr("Opera"),_r=wr("Trident")||wr("MSIE"),Sr=wr("Edge"),Cr=Sr||_r,Dr=wr("Gecko")&&!(-1!=vr().toLowerCase().indexOf("webkit")&&!wr("Edge"))&&!(wr("Trident")||wr("MSIE"))&&!wr("Edge"),kr=-1!=vr().toLowerCase().indexOf("webkit")&&!wr("Edge");function Nr(){var e=Jn.document;return e?e.documentMode:void 0}e:{var Or="",Rr=(Er=vr(),Dr?/rv:([^\);]+)(\)|;)/.exec(Er):Sr?/Edge\/([\d\.]+)/.exec(Er):_r?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Er):kr?/WebKit\/(\S+)/.exec(Er):Ir?/(?:Version)[ \/]?(\S+)/.exec(Er):void 0);if(Rr&&(Or=Rr?Rr[1]:""),_r){var Ar=Nr();if(null!=Ar&&Ar>parseFloat(Or)){Tr=String(Ar);break e}}Tr=Or}var xr,Pr={};function Mr(){return function(e){var t=Pr;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=mr(String(Tr)).split("."),n=mr("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=yr(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||yr(0==i[2].length,0==s[2].length)||yr(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(Jn.document&&_r){var Lr=Nr();xr=Lr||(parseInt(Tr,10)||void 0)}else xr=void 0;var Ur=xr;function Fr(e,t){if(fr.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Dr){e:{try{br(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Vr[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Fr.X.h.call(this)}}cr(Fr,fr);var Vr={2:"touch",3:"pen",4:"mouse"};Fr.prototype.h=function(){Fr.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),qr=0;function Br(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++qr,this.ba=this.ea=!1}function Hr(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function $r(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function zr(e){const t={};for(const n in e)t[n]=e[n];return t}const Wr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gr(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Wr.length;t++)n=Wr[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Kr(e){this.src=e,this.g={},this.h=0}function Qr(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=lr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Hr(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Yr(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}Kr.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Yr(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new Br(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var Xr="closure_lm_"+(1e6*Math.random()|0),Jr={};function Zr(e,t,n,r,i){if(r&&r.once)return ti(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Zr(e,t[s],n,r,i);return null}return n=ci(n),e&&e[jr]?e.N(t,n,tr(r)?!!r.capture:!!r,i):ei(e,t,n,!1,r,i)}function ei(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=tr(i)?!!i.capture:!!i,a=oi(e);if(a||(e[Xr]=a=new Kr(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=si;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)gr||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ii(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ti(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ti(e,t[s],n,r,i);return null}return n=ci(n),e&&e[jr]?e.O(t,n,tr(r)?!!r.capture:!!r,i):ei(e,t,n,!0,r,i)}function ni(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ni(e,t[s],n,r,i);else r=tr(r)?!!r.capture:!!r,n=ci(n),e&&e[jr]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Yr(s=e.g[t],n,r,i))&&(Hr(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=oi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Yr(t,n,r,i)),(n=-1<e?t[e]:null)&&ri(n))}function ri(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[jr])Qr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ii(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=oi(t))?(Qr(n,e),0==n.h&&(n.src=null,t[Xr]=null)):Hr(e)}}}function ii(e){return e in Jr?Jr[e]:Jr[e]="on"+e}function si(e,t){if(e.ba)e=!0;else{t=new Fr(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&ri(e),e=n.call(r,t)}return e}function oi(e){return(e=e[Xr])instanceof Kr?e:null}var ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function ci(e){return"function"==typeof e?e:(e[ai]||(e[ai]=function(t){return e.handleEvent(t)}),e[ai])}function ui(){ur.call(this),this.i=new Kr(this),this.P=this,this.I=null}function li(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new fr(t,e);else if(t instanceof fr)t.target=t.target||e;else{var i=t;Gr(t=new fr(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=hi(o,r,!0,t)&&i}if(i=hi(o=t.g=e,r,!0,t)&&i,i=hi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=hi(o=t.g=n[s],r,!1,t)&&i}function hi(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Qr(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}cr(ui,ur),ui.prototype[jr]=!0,ui.prototype.removeEventListener=function(e,t,n,r){ni(this,e,t,n,r)},ui.prototype.M=function(){if(ui.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Hr(n[r]);delete t.g[e],t.h--}}this.I=null},ui.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ui.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var di=Jn.JSON.stringify;function fi(){var e=bi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var gi,pi=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new mi),(e=>e.reset()));class mi{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function yi(e){Jn.setTimeout((()=>{throw e}),0)}function vi(e,t){gi||function(){var e=Jn.Promise.resolve(void 0);gi=function(){e.then(Ti)}}(),wi||(gi(),wi=!0),bi.add(e,t)}var wi=!1,bi=new class{constructor(){this.h=this.g=null}add(e,t){const n=pi.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ti(){for(var e;e=fi();){try{e.h.call(e.g)}catch(e){yi(e)}var t=pi;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}wi=!1}function Ei(e,t){ui.call(this),this.h=e||1,this.g=t||Jn,this.j=or(this.lb,this),this.l=Date.now()}function Ii(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function _i(e,t,n){if("function"==typeof e)n&&(e=or(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=or(e.handleEvent,e)}return 2147483647<Number(t)?-1:Jn.setTimeout(e,t||0)}function Si(e){e.g=_i((()=>{e.g=null,e.i&&(e.i=!1,Si(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}cr(Ei,ui),(Qn=Ei.prototype).ca=!1,Qn.R=null,Qn.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),li(this,"tick"),this.ca&&(Ii(this),this.start()))}},Qn.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Qn.M=function(){Ei.X.M.call(this),Ii(this),delete this.g};class Ci extends ur{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Si(this)}M(){super.M(),this.g&&(Jn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(e){ur.call(this),this.h=e,this.g={}}cr(Di,ur);var ki=[];function Ni(e,t,n,r){Array.isArray(n)||(n&&(ki[0]=n.toString()),n=ki);for(var i=0;i<n.length;i++){var s=Zr(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Oi(e){$r(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ri(e)}),e),e.g={}}function Ri(){this.g=!0}function Ai(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return di(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Di.prototype.M=function(){Di.X.M.call(this),Oi(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ri.prototype.Aa=function(){this.g=!1},Ri.prototype.info=function(){};var xi={},Pi=null;function Mi(){return Pi=Pi||new ui}function Li(e){fr.call(this,xi.Pa,e)}function Ui(e){const t=Mi();li(t,new Li(t))}function Fi(e,t){fr.call(this,xi.STAT_EVENT,e),this.stat=t}function Vi(e){const t=Mi();li(t,new Fi(t,e))}function ji(e,t){fr.call(this,xi.Qa,e),this.size=t}function qi(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Jn.setTimeout((function(){e()}),t)}xi.Pa="serverreachability",cr(Li,fr),xi.STAT_EVENT="statevent",cr(Fi,fr),xi.Qa="timingevent",cr(ji,fr);var Bi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Hi={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function $i(){}function zi(e){return e.h||(e.h=e.i())}function Wi(){}$i.prototype.h=null;var Gi,Ki={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qi(){fr.call(this,"d")}function Yi(){fr.call(this,"c")}function Xi(){}function Ji(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Di(this),this.O=es,e=Cr?125:void 0,this.T=new Ei(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Zi}function Zi(){this.i=null,this.g="",this.h=!1}cr(Qi,fr),cr(Yi,fr),cr(Xi,$i),Xi.prototype.g=function(){return new XMLHttpRequest},Xi.prototype.i=function(){return{}},Gi=new Xi;var es=45e3,ts={},ns={};function rs(e,t,n){e.K=1,e.v=Es(ys(t)),e.s=n,e.P=!0,is(e,null)}function is(e,t){e.F=Date.now(),cs(e),e.A=ys(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Ms(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Zi,e.g=Mo(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Ci(or(e.La,e,e.g),e.N)),Ni(e.S,e.g,"readystatechange",e.ib),t=e.H?zr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ui(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function ss(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function os(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=as(e,n),r==ns){4==t&&(e.o=4,Vi(14),i=!1),Ai(e.j,e.m,null,"[Incomplete Response]");break}if(r==ts){e.o=4,Vi(15),Ai(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ai(e.j,e.m,r,null),fs(e,r)}ss(e)&&r!=ns&&r!=ts&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Vi(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Do(t),t.K=!0,Vi(11))):(Ai(e.j,e.m,n,"[Invalid Chunked Response]"),ds(e),hs(e))}function as(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ns:(n=Number(t.substring(n,r)),isNaN(n)?ts:(r+=1)+n>t.length?ns:(t=t.substr(r,n),e.C=r+n,t))}function cs(e){e.V=Date.now()+e.O,us(e,e.O)}function us(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=qi(or(e.gb,e),t)}function ls(e){e.B&&(Jn.clearTimeout(e.B),e.B=null)}function hs(e){0==e.l.G||e.I||Oo(e.l,e)}function ds(e){ls(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ii(e.T),Oi(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function fs(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||qs(n.h,e)))if(!e.J&&qs(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;No(n),wo(n)}Co(n),Vi(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=qi(or(n.cb,n),6e3));if(1>=js(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Ao(n,11)}else if((e.J||n.g==e)&&No(n),!pr(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Bs(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Ts(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((r=n).sa=Po(r,r.H?r.ka:null,r.V),o.J){Hs(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(ls(a),cs(a)),r.g=o}else So(r);0<n.i.length&&To(n)}else"stop"!=u[0]&&"close"!=u[0]||Ao(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ao(n,7):vo(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Ui()}catch(e){}}function gs(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(er(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(er(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(er(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(Qn=Ji.prototype).setTimeout=function(e){this.O=e},Qn.ib=function(e){e=e.target;const t=this.L;t&&3==ho(e)?t.l():this.La(e)},Qn.La=function(e){try{if(e==this.g)e:{const l=ho(this.g);var t=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||Cr||this.g&&(this.h.h||this.g.fa()||fo(this.g)))){this.I||4!=l||7==t||Ui(),ls(this);var n=this.g.aa();this.Y=n;t:if(ss(this)){var r=fo(this.g);e="";var i=r.length,s=4==ho(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ds(this),hs(this);var o="";break t}this.h.i=new Jn.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pr(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Vi(12),ds(this),hs(this);break e}Ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fs(this,n)}this.P?(os(this,l,o),Cr&&this.i&&3==l&&(Ni(this.S,this.T,"tick",this.hb),this.T.start())):(Ai(this.j,this.m,o,null),fs(this,o)),4==l&&ds(this),this.i&&!this.I&&(4==l?Oo(this.l,this):(this.i=!1,cs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Vi(12)):(this.o=0,Vi(13)),ds(this),hs(this)}}}catch(e){}},Qn.hb=function(){if(this.g){var e=ho(this.g),t=this.g.fa();this.C<t.length&&(ls(this),os(this,e,t),this.i&&4!=e&&cs(this))}},Qn.cancel=function(){this.I=!0,ds(this)},Qn.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ui(),Vi(17)),ds(this),this.o=2,hs(this)):us(this,this.V-e)};var ps=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ms(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ms){this.h=void 0!==t?t:e.h,vs(this,e.j),this.s=e.s,this.g=e.g,ws(this,e.m),this.l=e.l,t=e.i;var n=new Rs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),bs(this,n),this.o=e.o}else e&&(n=String(e).match(ps))?(this.h=!!t,vs(this,n[1]||"",!0),this.s=Is(n[2]||""),this.g=Is(n[3]||"",!0),ws(this,n[4]),this.l=Is(n[5]||"",!0),bs(this,n[6]||"",!0),this.o=Is(n[7]||"")):(this.h=!!t,this.i=new Rs(null,this.h))}function ys(e){return new ms(e)}function vs(e,t,n){e.j=n?Is(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ws(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function bs(e,t,n){t instanceof Rs?(e.i=t,function(e,t){t&&!e.j&&(As(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(xs(this,t),Ms(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=_s(t,Ns)),e.i=new Rs(t,e.h))}function Ts(e,t,n){e.i.set(t,n)}function Es(e){return Ts(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Is(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function _s(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ss),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ss(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ms.prototype.toString=function(){var e=[],t=this.j;t&&e.push(_s(t,Cs,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(_s(t,Cs,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(_s(n,"/"==n.charAt(0)?ks:Ds,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",_s(n,Os)),e.join("")};var Cs=/[#\/\?@]/g,Ds=/[#\?:]/g,ks=/[#\?]/g,Ns=/[#\?@]/g,Os=/#/g;function Rs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function As(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function xs(e,t){As(e),t=Ls(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ps(e,t){return As(e),t=Ls(e,t),e.g.has(t)}function Ms(e,t,n){xs(e,t),0<n.length&&(e.i=null,e.g.set(Ls(e,t),hr(n)),e.h+=n.length)}function Ls(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Qn=Rs.prototype).add=function(e,t){As(this),this.i=null,e=Ls(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Qn.forEach=function(e,t){As(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},Qn.oa=function(){As(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},Qn.W=function(e){As(this);let t=[];if("string"==typeof e)Ps(this,e)&&(t=t.concat(this.g.get(Ls(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Qn.set=function(e,t){return As(this),this.i=null,Ps(this,e=Ls(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Qn.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},Qn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Us(e){this.l=e||Fs,Jn.PerformanceNavigationTiming?e=0<(e=Jn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Jn.g&&Jn.g.Ga&&Jn.g.Ga()&&Jn.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fs=10;function Vs(e){return!!e.h||!!e.g&&e.g.size>=e.j}function js(e){return e.h?1:e.g?e.g.size:0}function qs(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Bs(e,t){e.g?e.g.add(t):e.h=t}function Hs(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function $s(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return hr(e.i)}function zs(){}function Ws(){this.g=new zs}function Gs(e,t,n){const r=n||"";try{gs(e,(function(e,n){let i=e;tr(e)&&(i=di(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Ks(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Qs(e){this.l=e.ac||null,this.j=e.jb||!1}function Ys(e,t){ui.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Us.prototype.cancel=function(){if(this.i=$s(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},zs.prototype.stringify=function(e){return Jn.JSON.stringify(e,void 0)},zs.prototype.parse=function(e){return Jn.JSON.parse(e,void 0)},cr(Qs,$i),Qs.prototype.g=function(){return new Ys(this.l,this.j)},Qs.prototype.i=function(e){return function(){return e}}({}),cr(Ys,ui);var Xs=0;function Js(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Zs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,eo(e)}function eo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Qn=Ys.prototype).open=function(e,t){if(this.readyState!=Xs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,eo(this)},Qn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Jn).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},Qn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Zs(this)),this.readyState=Xs},Qn.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Jn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Js(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},Qn.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Zs(this):eo(this),3==this.readyState&&Js(this)}},Qn.Va=function(e){this.g&&(this.response=this.responseText=e,Zs(this))},Qn.Ua=function(e){this.g&&(this.response=e,Zs(this))},Qn.ga=function(){this.g&&Zs(this)},Qn.setRequestHeader=function(e,t){this.v.append(e,t)},Qn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Qn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ys.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var to=Jn.JSON.parse;function no(e){ui.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ro,this.K=this.L=!1}cr(no,ui);var ro="",io=/^https?$/i,so=["POST","PUT"];function oo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ao(e),uo(e)}function ao(e){e.D||(e.D=!0,li(e,"complete"),li(e,"error"))}function co(e){if(e.h&&void 0!==Xn&&(!e.C[1]||4!=ho(e)||2!=e.aa()))if(e.v&&4==ho(e))_i(e.Ha,0,e);else if(li(e,"readystatechange"),4==ho(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(ps)[1]||null;if(!i&&Jn.self&&Jn.self.location){var s=Jn.self.location.protocol;i=s.substr(0,s.length-1)}r=!io.test(i?i.toLowerCase():"")}n=r}if(n)li(e,"complete"),li(e,"success");else{e.m=6;try{var o=2<ho(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",ao(e)}}finally{uo(e)}}}function uo(e,t){if(e.g){lo(e);const n=e.g,r=e.C[0]?Zn:null;e.g=null,e.C=null,t||li(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function lo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Jn.clearTimeout(e.A),e.A=null)}function ho(e){return e.g?e.g.readyState:0}function fo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ro:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function go(e){let t="";return $r(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function po(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=go(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ts(e,t,n))}function mo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function yo(e){this.Ca=0,this.i=[],this.j=new Ri,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=mo("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=mo("baseRetryDelayMs",5e3,e),this.bb=mo("retryDelaySeedMs",1e4,e),this.$a=mo("forwardChannelMaxRetries",2,e),this.ta=mo("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Us(e&&e.concurrentRequestLimit),this.Fa=new Ws,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function vo(e){if(bo(e),3==e.G){var t=e.U++,n=ys(e.F);Ts(n,"SID",e.I),Ts(n,"RID",t),Ts(n,"TYPE","terminate"),Io(e,n),(t=new Ji(e,e.j,t,void 0)).K=2,t.v=Es(ys(n)),n=!1,Jn.navigator&&Jn.navigator.sendBeacon&&(n=Jn.navigator.sendBeacon(t.v.toString(),"")),!n&&Jn.Image&&((new Image).src=t.v,n=!0),n||(t.g=Mo(t.l,null),t.g.da(t.v)),t.F=Date.now(),cs(t)}xo(e)}function wo(e){e.g&&(Do(e),e.g.cancel(),e.g=null)}function bo(e){wo(e),e.u&&(Jn.clearTimeout(e.u),e.u=null),No(e),e.h.cancel(),e.m&&("number"==typeof e.m&&Jn.clearTimeout(e.m),e.m=null)}function To(e){Vs(e.h)||e.m||(e.m=!0,vi(e.Ja,e),e.C=0)}function Eo(e,t){var n;n=t?t.m:e.U++;const r=ys(e.F);Ts(r,"SID",e.I),Ts(r,"RID",n),Ts(r,"AID",e.T),Io(e,r),e.o&&e.s&&po(r,e.o,e.s),n=new Ji(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=_o(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Bs(e.h,n),rs(n,r,t)}function Io(e,t){e.ia&&$r(e.ia,(function(e,n){Ts(t,n,e)})),e.l&&gs({},(function(e,n){Ts(t,n,e)}))}function _o(e,t,n){n=Math.min(e.i.length,n);var r=e.l?or(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Gs(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function So(e){e.g||e.u||(e.Z=1,vi(e.Ia,e),e.A=0)}function Co(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=qi(or(e.Ia,e),Ro(e,e.A)),e.A++,!0)}function Do(e){null!=e.B&&(Jn.clearTimeout(e.B),e.B=null)}function ko(e){e.g=new Ji(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=ys(e.sa);Ts(t,"RID","rpc"),Ts(t,"SID",e.I),Ts(t,"CI",e.L?"0":"1"),Ts(t,"AID",e.T),Ts(t,"TYPE","xmlhttp"),Io(e,t),e.o&&e.s&&po(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Es(ys(t)),n.s=null,n.P=!0,is(n,e)}function No(e){null!=e.v&&(Jn.clearTimeout(e.v),e.v=null)}function Oo(e,t){var n=null;if(e.g==t){No(e),Do(e),e.g=null;var r=2}else{if(!qs(e.h,t))return;n=t.D,Hs(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;li(r=Mi(),new ji(r,n)),To(e)}else So(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(js(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=qi(or(e.Ja,e,t),Ro(e,e.C)),e.C++,0)))}(e,t)||2==r&&Co(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Ao(e,5);break;case 4:Ao(e,10);break;case 3:Ao(e,6);break;default:Ao(e,2)}}function Ro(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ao(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=or(e.kb,e);n||(n=new ms("//www.google.com/images/cleardot.gif"),Jn.location&&"http"==Jn.location.protocol||vs(n,"https"),Es(n)),function(e,t){const n=new Ri;if(Jn.Image){const r=new Image;r.onload=ar(Ks,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ar(Ks,n,r,"TestLoadImage: error",!1,t),r.onabort=ar(Ks,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ar(Ks,n,r,"TestLoadImage: timeout",!1,t),Jn.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Vi(2);e.G=0,e.l&&e.l.va(t),xo(e),bo(e)}function xo(e){if(e.G=0,e.la=[],e.l){const t=$s(e.h);0==t.length&&0==e.i.length||(dr(e.la,t),dr(e.la,e.i),e.h.i.length=0,hr(e.i),e.i.length=0),e.l.ua()}}function Po(e,t,n){var r=n instanceof ms?ys(n):new ms(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),ws(r,r.m);else{var i=Jn.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ms(null,void 0);r&&vs(s,r),t&&(s.g=t),i&&ws(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Ts(r,n,t),Ts(r,"VER",e.ma),Io(e,r),r}function Mo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new no(new Qs({jb:!0})):new no(e.ra)).Ka(e.H),t}function Lo(){}function Uo(){if(_r&&!(10<=Number(Ur)))throw Error("Environmental error: no available transport.")}function Fo(e,t){ui.call(this),this.g=new yo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!pr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!pr(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new qo(this)}function Vo(e){Qi.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function jo(){Yi.call(this),this.status=1}function qo(e){this.g=e}(Qn=no.prototype).Ka=function(e){this.L=e},Qn.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gi.g(),this.C=this.u?zi(this.u):zi(Gi),this.g.onreadystatechange=or(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void oo(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=Jn.FormData&&e instanceof Jn.FormData,!(0<=lr(so,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lo(this),0<this.B&&((this.K=function(e){return _r&&Mr()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=or(this.qa,this)):this.A=_i(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){oo(this,e)}},Qn.qa=function(){void 0!==Xn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,li(this,"timeout"),this.abort(8))},Qn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,li(this,"complete"),li(this,"abort"),uo(this))},Qn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),uo(this,!0)),no.X.M.call(this)},Qn.Ha=function(){this.s||(this.F||this.v||this.l?co(this):this.fb())},Qn.fb=function(){co(this)},Qn.aa=function(){try{return 2<ho(this)?this.g.status:-1}catch(e){return-1}},Qn.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Qn.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),to(t)}},Qn.Ea=function(){return this.m},Qn.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Qn=yo.prototype).ma=8,Qn.G=1,Qn.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Ji(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=zr(s),Gr(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=_o(this,i,t),Ts(n=ys(this.F),"RID",e),Ts(n,"CVER",22),this.D&&Ts(n,"X-HTTP-Session-Id",this.D),Io(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(go(s)))+"&"+t:this.o&&po(n,this.o,s)),Bs(this.h,i),this.Ya&&Ts(n,"TYPE","init"),this.O?(Ts(n,"$req",t),Ts(n,"SID","null"),i.Z=!0,rs(i,n,null)):rs(i,n,t),this.G=2}}else 3==this.G&&(e?Eo(this,e):0==this.i.length||Vs(this.h)||Eo(this))},Qn.Ia=function(){if(this.u=null,ko(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=qi(or(this.eb,this),e)}},Qn.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Vi(10),wo(this),ko(this))},Qn.cb=function(){null!=this.v&&(this.v=null,wo(this),Co(this),Vi(19))},Qn.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Vi(2)):(this.j.info("Failed to ping google.com"),Vi(1))},(Qn=Lo.prototype).xa=function(){},Qn.wa=function(){},Qn.va=function(){},Qn.ua=function(){},Qn.Ra=function(){},Uo.prototype.g=function(e,t){return new Fo(e,t)},cr(Fo,ui),Fo.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Vi(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Po(e,null,e.V),To(e)},Fo.prototype.close=function(){vo(this.g)},Fo.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=di(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&To(t)},Fo.prototype.M=function(){this.g.l=null,delete this.j,vo(this.g),delete this.g,Fo.X.M.call(this)},cr(Vo,Qi),cr(jo,Yi),cr(qo,Lo),qo.prototype.xa=function(){li(this.g,"a")},qo.prototype.wa=function(e){li(this.g,new Vo(e))},qo.prototype.va=function(e){li(this.g,new jo)},qo.prototype.ua=function(){li(this.g,"b")},Uo.prototype.createWebChannel=Uo.prototype.g,Fo.prototype.send=Fo.prototype.u,Fo.prototype.open=Fo.prototype.m,Fo.prototype.close=Fo.prototype.close,Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,Hi.COMPLETE="complete",Wi.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",ui.prototype.listen=ui.prototype.N,no.prototype.listenOnce=no.prototype.O,no.prototype.getLastError=no.prototype.Oa,no.prototype.getLastErrorCode=no.prototype.Ea,no.prototype.getStatus=no.prototype.aa,no.prototype.getResponseJson=no.prototype.Sa,no.prototype.getResponseText=no.prototype.fa,no.prototype.send=no.prototype.da,no.prototype.setWithCredentials=no.prototype.Ka;var Bo=Bi,Ho=Hi,$o=xi,zo=10,Wo=11,Go=Qs,Ko=Wi,Qo=no;const Yo="@firebase/firestore";
/**
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
 */class Xo{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xo.UNAUTHENTICATED=new Xo(null),Xo.GOOGLE_CREDENTIALS=new Xo("google-credentials-uid"),Xo.FIRST_PARTY=new Xo("first-party-uid"),Xo.MOCK_USER=new Xo("mock-user");
/**
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
 */
let Jo="9.15.0";
/**
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
 */const Zo=new sn("@firebase/firestore");function ea(){return Zo.logLevel}function ta(e,...t){if(Zo.logLevel<=Zt.DEBUG){const n=t.map(ia);Zo.debug(`Firestore (${Jo}): ${e}`,...n)}}function na(e,...t){if(Zo.logLevel<=Zt.ERROR){const n=t.map(ia);Zo.error(`Firestore (${Jo}): ${e}`,...n)}}function ra(e,...t){if(Zo.logLevel<=Zt.WARN){const n=t.map(ia);Zo.warn(`Firestore (${Jo}): ${e}`,...n)}}function ia(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function sa(e="Unexpected state"){const t=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: `+e;throw na(t),new Error(t)}function oa(e,t){e||sa()}function aa(e,t){return e}
/**
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
 */const ca={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ua extends jt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class la{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class ha{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class da{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Xo.UNAUTHENTICATED)))}shutdown(){}}class fa{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ga{constructor(e){this.t=e,this.currentUser=Xo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new la;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new la,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ta("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ta("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new la)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ta("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(oa("string"==typeof t.accessToken),new ha(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oa(null===e||"string"==typeof e),new Xo(e)}}class pa{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Xo.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(oa(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ma{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new pa(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Xo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ya{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class va{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&ta("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,ta("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ta("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):ta("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(oa("string"==typeof e.token),this.A=e.token,new ya(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */function wa(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
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
 */class ba{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=wa(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ta(e,t){return e<t?-1:e>t?1:0}function Ea(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
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
 */class Ia{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ua(ca.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ua(ca.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ua(ca.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ua(ca.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ia.fromMillis(Date.now())}static fromDate(e){return Ia.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ia(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ta(this.nanoseconds,e.nanoseconds):Ta(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class _a{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _a(e)}static min(){return new _a(new Ia(0,0))}static max(){return new _a(new Ia(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Sa{constructor(e,t,n){void 0===t?t=0:t>e.length&&sa(),void 0===n?n=e.length-t:n>e.length-t&&sa(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Sa.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Sa?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ca extends Sa{construct(e,t,n){return new Ca(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ua(ca.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ca(t)}static emptyPath(){return new Ca([])}}const Da=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ka extends Sa{construct(e,t,n){return new ka(e,t,n)}static isValidIdentifier(e){return Da.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ka.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ka(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ua(ca.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ua(ca.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ua(ca.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ua(ca.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ka(t)}static emptyPath(){return new ka([])}}
/**
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
 */class Na{constructor(e){this.path=e}static fromPath(e){return new Na(Ca.fromString(e))}static fromName(e){return new Na(Ca.fromString(e).popFirst(5))}static empty(){return new Na(Ca.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ca.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ca.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Na(new Ca(e.slice()))}}function Oa(e){return new Ra(e.readTime,e.key,-1)}class Ra{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ra(_a.min(),Na.empty(),-1)}static max(){return new Ra(_a.max(),Na.empty(),-1)}}function Aa(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Na.comparator(e.documentKey,t.documentKey),0!==n?n:Ta(e.largestBatchId,t.largestBatchId))}
/**
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
 */class xa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function Pa(e){if(e.code!==ca.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;ta("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Ma{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&sa(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ma(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ma?t:Ma.resolve(t)}catch(e){return Ma.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ma.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ma.reject(t)}static resolve(e){return new Ma(((t,n)=>{t(e)}))}static reject(e){return new Ma(((t,n)=>{n(e)}))}static waitFor(e){return new Ma(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ma.resolve(!1);for(const n of e)t=t.next((e=>e?Ma.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ma(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ma(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function La(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */class Ua{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ua.at=-1;
/**
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
 */
class Fa{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Va{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Va("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */function ja(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function qa(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ba(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */function Ha(e){return null==e}function $a(e){return 0===e&&1/e==-1/0}
/**
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
 */
class za{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new za(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new za(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ta(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}za.EMPTY_BYTE_STRING=new za("");const Wa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ga(e){if(oa(!!e),"string"==typeof e){let t=0;const n=Wa.exec(e);if(oa(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ka(e.seconds),nanos:Ka(e.nanos)}}function Ka(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Qa(e){return"string"==typeof e?za.fromBase64String(e):za.fromUint8Array(e)}
/**
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
 */function Ya(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Xa(e){const t=e.mapValue.fields.__previous_value__;return Ya(t)?Xa(t):t}function Ja(e){const t=Ga(e.mapValue.fields.__local_write_time__.timestampValue);return new Ia(t.seconds,t.nanos)}
/**
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
 */const Za={fields:{__type__:{stringValue:"__max__"}}};function ec(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ya(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */(e)?9007199254740991:10:sa()}function tc(e,t){if(e===t)return!0;const n=ec(e);if(n!==ec(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ja(e).isEqual(Ja(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ga(e.timestampValue),r=Ga(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Qa(e.bytesValue).isEqual(Qa(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ka(e.geoPointValue.latitude)===Ka(t.geoPointValue.latitude)&&Ka(e.geoPointValue.longitude)===Ka(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ka(e.integerValue)===Ka(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ka(e.doubleValue),r=Ka(t.doubleValue);return n===r?$a(n)===$a(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ea(e.arrayValue.values||[],t.arrayValue.values||[],tc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ja(n)!==ja(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!tc(n[e],r[e])))return!1;return!0}(e,t);default:return sa()}}function nc(e,t){return void 0!==(e.values||[]).find((e=>tc(e,t)))}function rc(e,t){if(e===t)return 0;const n=ec(e),r=ec(t);if(n!==r)return Ta(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ta(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ka(e.integerValue||e.doubleValue),r=Ka(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ic(e.timestampValue,t.timestampValue);case 4:return ic(Ja(e),Ja(t));case 5:return Ta(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Qa(e),r=Qa(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Ta(n[e],r[e]);if(0!==t)return t}return Ta(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ta(Ka(e.latitude),Ka(t.latitude));return 0!==n?n:Ta(Ka(e.longitude),Ka(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=rc(n[e],r[e]);if(t)return t}return Ta(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Za&&t===Za)return 0;if(e===Za)return 1;if(t===Za)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Ta(r[e],s[e]);if(0!==t)return t;const o=rc(n[r[e]],i[s[e]]);if(0!==o)return o}return Ta(r.length,s.length)}(e.mapValue,t.mapValue);default:throw sa()}}function ic(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ta(e,t);const n=Ga(e),r=Ga(t),i=Ta(n.seconds,r.seconds);return 0!==i?i:Ta(n.nanos,r.nanos)}function sc(e){return oc(e)}function oc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ga(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Qa(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Na.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=oc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${oc(e.fields[i])}`;return n+"}"}(e.mapValue):sa();var t,n}function ac(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function cc(e){return!!e&&"integerValue"in e}function uc(e){return!!e&&"arrayValue"in e}function lc(e){return!!e&&"nullValue"in e}function hc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function dc(e){return!!e&&"mapValue"in e}function fc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return qa(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=fc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=fc(e.arrayValue.values[n]);return t}return Object.assign({},e)}class gc{constructor(e,t){this.position=e,this.inclusive=t}}function pc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Na.comparator(Na.fromName(o.referenceValue),n.key):rc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function mc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!tc(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class yc{}class vc extends yc{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Sc(e,t,n):"array-contains"===t?new Nc(e,n):"in"===t?new Oc(e,n):"not-in"===t?new Rc(e,n):"array-contains-any"===t?new Ac(e,n):new vc(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Cc(e,n):new Dc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rc(t,this.value)):null!==t&&ec(this.value)===ec(t)&&this.matchesComparison(rc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return sa()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wc extends yc{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new wc(e,t)}matches(e){return bc(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function bc(e){return"and"===e.op}function Tc(e){return function(e){for(const t of e.filters)if(t instanceof wc)return!1;return!0}(e)&&bc(e)}function Ec(e){if(e instanceof vc)return e.field.canonicalString()+e.op.toString()+sc(e.value);{const t=e.filters.map((e=>Ec(e))).join(",");return`${e.op}(${t})`}}function Ic(e,t){return e instanceof vc?function(e,t){return t instanceof vc&&e.op===t.op&&e.field.isEqual(t.field)&&tc(e.value,t.value)}(e,t):e instanceof wc?function(e,t){return t instanceof wc&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Ic(n,t.filters[r])),!0)}(e,t):void sa()}function _c(e){return e instanceof vc?function(e){return`${e.field.canonicalString()} ${e.op} ${sc(e.value)}`}(e):e instanceof wc?function(e){return e.op.toString()+" {"+e.getFilters().map(_c).join(" ,")+"}"}(e):"Filter"}class Sc extends vc{constructor(e,t,n){super(e,t,n),this.key=Na.fromName(n.referenceValue)}matches(e){const t=Na.comparator(e.key,this.key);return this.matchesComparison(t)}}class Cc extends vc{constructor(e,t){super(e,"in",t),this.keys=kc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Dc extends vc{constructor(e,t){super(e,"not-in",t),this.keys=kc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function kc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Na.fromName(e.referenceValue)))}class Nc extends vc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return uc(t)&&nc(t.arrayValue,this.value)}}class Oc extends vc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&nc(this.value.arrayValue,t)}}class Rc extends vc{constructor(e,t){super(e,"not-in",t)}matches(e){if(nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!nc(this.value.arrayValue,t)}}class Ac extends vc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!uc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>nc(this.value.arrayValue,e)))}}
/**
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
 */class xc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Mc{constructor(e,t){this.comparator=e,this.root=t||Uc.EMPTY}insert(e,t){return new Mc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Uc.BLACK,null,null))}remove(e){return new Mc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Uc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lc(this.root,e,this.comparator,!0)}}class Lc{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Uc{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Uc.RED,this.left=null!=r?r:Uc.EMPTY,this.right=null!=i?i:Uc.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Uc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Uc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Uc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Uc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Uc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw sa();if(this.right.isRed())throw sa();const e=this.left.check();if(e!==this.right.check())throw sa();return e+(this.isRed()?0:1)}}Uc.EMPTY=null,Uc.RED=!0,Uc.BLACK=!1,Uc.EMPTY=new class{constructor(){this.size=0}get key(){throw sa()}get value(){throw sa()}get color(){throw sa()}get left(){throw sa()}get right(){throw sa()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Uc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Fc{constructor(e){this.comparator=e,this.data=new Mc(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vc(this.data.getIterator())}getIteratorFrom(e){return new Vc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Fc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Fc(this.comparator);return t.data=e,t}}class Vc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class jc{constructor(e){this.fields=e,e.sort(ka.comparator)}static empty(){return new jc([])}unionWith(e){let t=new Fc(ka.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new jc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ea(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */class qc{constructor(e){this.value=e}static empty(){return new qc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!dc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fc(t)}setAll(e){let t=ka.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=fc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());dc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];dc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){qa(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new qc(fc(this.value))}}function Bc(e){const t=[];return qa(e.fields,((e,n)=>{const r=new ka([e]);if(dc(n)){const e=Bc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new jc(t)
/**
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
 */}class Hc{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Hc(e,0,_a.min(),_a.min(),_a.min(),qc.empty(),0)}static newFoundDocument(e,t,n,r){return new Hc(e,1,t,_a.min(),n,r,0)}static newNoDocument(e,t){return new Hc(e,2,t,_a.min(),_a.min(),qc.empty(),0)}static newUnknownDocument(e,t){return new Hc(e,3,t,_a.min(),_a.min(),qc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_a.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_a.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Hc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Hc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class $c{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function zc(e,t=null,n=[],r=[],i=null,s=null,o=null){return new $c(e,t,n,r,i,s,o)}function Wc(e){const t=aa(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Ec(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ha(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>sc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>sc(e))).join(",")),t.ft=e}return t.ft}function Gc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Pc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ic(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!mc(e.startAt,t.startAt)&&mc(e.endAt,t.endAt)}function Kc(e){return Na.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */class Qc{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Yc(e){return new Qc(e)}function Xc(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Jc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Zc(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function eu(e){return null!==e.collectionGroup}function tu(e){const t=aa(e);if(null===t.dt){t.dt=[];const e=Zc(t),n=Jc(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new xc(e)),t.dt.push(new xc(ka.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new xc(ka.keyField(),e))}}}return t.dt}function nu(e){const t=aa(e);if(!t._t)if("F"===t.limitType)t._t=zc(t.path,t.collectionGroup,tu(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of tu(t)){const t="desc"===n.dir?"asc":"desc";e.push(new xc(n.field,t))}const n=t.endAt?new gc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gc(t.startAt.position,t.startAt.inclusive):null;t._t=zc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ru(e,t){t.getFirstInequalityField(),Zc(e);const n=e.filters.concat([t]);return new Qc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function iu(e,t,n){return new Qc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function su(e,t){return Gc(nu(e),nu(t))&&e.limitType===t.limitType}function ou(e){return`${Wc(nu(e))}|lt:${e.limitType}`}function au(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>_c(e))).join(", ")}]`),Ha(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>sc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>sc(e))).join(",")),`Target(${t})`}(nu(e))}; limitType=${e.limitType})`}function cu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Na.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of tu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=pc(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tu(e),t))&&!(e.endAt&&!function(e,t,n){const r=pc(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tu(e),t))}(e,t)}function uu(e){return(t,n)=>{let r=!1;for(const i of tu(e)){const e=lu(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function lu(e,t,n){const r=e.field.isKeyField()?Na.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rc(r,i):sa()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return sa()}}
/**
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
 */function hu(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$a(t)?"-0":t}}function du(e){return{integerValue:""+e}}function fu(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!$a(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?du(t):hu(e,t)}
/**
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
 */class gu{constructor(){this._=void 0}}function pu(e,t,n){return e instanceof vu?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof wu?bu(e,t):e instanceof Tu?Eu(e,t):function(e,t){const n=yu(e,t),r=_u(n)+_u(e.gt);return cc(n)&&cc(e.gt)?du(r):hu(e.yt,r)}(e,t)}function mu(e,t,n){return e instanceof wu?bu(e,t):e instanceof Tu?Eu(e,t):n}function yu(e,t){return e instanceof Iu?cc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class vu extends gu{}class wu extends gu{constructor(e){super(),this.elements=e}}function bu(e,t){const n=Su(t);for(const t of e.elements)n.some((e=>tc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Tu extends gu{constructor(e){super(),this.elements=e}}function Eu(e,t){let n=Su(t);for(const t of e.elements)n=n.filter((e=>!tc(e,t)));return{arrayValue:{values:n}}}class Iu extends gu{constructor(e,t){super(),this.yt=e,this.gt=t}}function _u(e){return Ka(e.integerValue||e.doubleValue)}function Su(e){return uc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Cu{constructor(e,t){this.version=e,this.transformResults=t}}class Du{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Du}static exists(e){return new Du(void 0,e)}static updateTime(e){return new Du(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ku(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Nu{}function Ou(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ju(e.key,Du.none()):new Mu(e.key,e.data,Du.none());{const n=e.data,r=qc.empty();let i=new Fc(ka.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Lu(e.key,r,new jc(i.toArray()),Du.none())}}function Ru(e,t,n){e instanceof Mu?function(e,t,n){const r=e.value.clone(),i=Fu(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Lu?function(e,t,n){if(!ku(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Fu(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Uu(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Au(e,t,n,r){return e instanceof Mu?function(e,t,n,r){if(!ku(e.precondition,t))return n;const i=e.value.clone(),s=Vu(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Lu?function(e,t,n,r){if(!ku(e.precondition,t))return n;const i=Vu(e.fieldTransforms,r,t),s=t.data;return s.setAll(Uu(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ku(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function xu(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=yu(r.transform,e||null);null!=i&&(null===n&&(n=qc.empty()),n.set(r.field,i))}return n||null}function Pu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ea(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof wu&&t instanceof wu||e instanceof Tu&&t instanceof Tu?Ea(e.elements,t.elements,tc):e instanceof Iu&&t instanceof Iu?tc(e.gt,t.gt):e instanceof vu&&t instanceof vu}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mu extends Nu{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Lu extends Nu{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uu(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Fu(e,t,n){const r=new Map;oa(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,mu(o,a,n[i]))}return r}function Vu(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,pu(e,s,t))}return r}class ju extends Nu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qu extends Nu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Bu{constructor(e){this.count=e}}
/**
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
 */var Hu,$u;function zu(e){if(void 0===e)return na("GRPC error has no .code"),ca.UNKNOWN;switch(e){case Hu.OK:return ca.OK;case Hu.CANCELLED:return ca.CANCELLED;case Hu.UNKNOWN:return ca.UNKNOWN;case Hu.DEADLINE_EXCEEDED:return ca.DEADLINE_EXCEEDED;case Hu.RESOURCE_EXHAUSTED:return ca.RESOURCE_EXHAUSTED;case Hu.INTERNAL:return ca.INTERNAL;case Hu.UNAVAILABLE:return ca.UNAVAILABLE;case Hu.UNAUTHENTICATED:return ca.UNAUTHENTICATED;case Hu.INVALID_ARGUMENT:return ca.INVALID_ARGUMENT;case Hu.NOT_FOUND:return ca.NOT_FOUND;case Hu.ALREADY_EXISTS:return ca.ALREADY_EXISTS;case Hu.PERMISSION_DENIED:return ca.PERMISSION_DENIED;case Hu.FAILED_PRECONDITION:return ca.FAILED_PRECONDITION;case Hu.ABORTED:return ca.ABORTED;case Hu.OUT_OF_RANGE:return ca.OUT_OF_RANGE;case Hu.UNIMPLEMENTED:return ca.UNIMPLEMENTED;case Hu.DATA_LOSS:return ca.DATA_LOSS;default:return sa()}}($u=Hu||(Hu={}))[$u.OK=0]="OK",$u[$u.CANCELLED=1]="CANCELLED",$u[$u.UNKNOWN=2]="UNKNOWN",$u[$u.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$u[$u.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$u[$u.NOT_FOUND=5]="NOT_FOUND",$u[$u.ALREADY_EXISTS=6]="ALREADY_EXISTS",$u[$u.PERMISSION_DENIED=7]="PERMISSION_DENIED",$u[$u.UNAUTHENTICATED=16]="UNAUTHENTICATED",$u[$u.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$u[$u.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$u[$u.ABORTED=10]="ABORTED",$u[$u.OUT_OF_RANGE=11]="OUT_OF_RANGE",$u[$u.UNIMPLEMENTED=12]="UNIMPLEMENTED",$u[$u.INTERNAL=13]="INTERNAL",$u[$u.UNAVAILABLE=14]="UNAVAILABLE",$u[$u.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Wu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){qa(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Ba(this.inner)}size(){return this.innerSize}}
/**
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
 */const Gu=new Mc(Na.comparator);function Ku(){return Gu}const Qu=new Mc(Na.comparator);function Yu(...e){let t=Qu;for(const n of e)t=t.insert(n.key,n);return t}function Xu(e){let t=Qu;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ju(){return el()}function Zu(){return el()}function el(){return new Wu((e=>e.toString()),((e,t)=>e.isEqual(t)))}const tl=new Mc(Na.comparator),nl=new Fc(Na.comparator);function rl(...e){let t=nl;for(const n of e)t=t.add(n);return t}const il=new Fc(Ta);function sl(){return il}
/**
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
 */class ol{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ol(_a.min(),r,sl(),Ku(),rl())}}class al{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new al(n,t,rl(),rl(),rl())}}
/**
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
 */class cl{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class ul{constructor(e,t){this.targetId=e,this.Et=t}}class ll{constructor(e,t,n=za.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class hl{constructor(){this.At=0,this.Rt=gl(),this.bt=za.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=rl(),t=rl(),n=rl();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:sa()}})),new al(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=gl()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class dl{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Ku(),this.qt=fl(),this.Ut=new Fc(Ta)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:sa()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(Kc(e))if(0===n){const n=new Na(e.path);this.Qt(t,n,Hc.newNoDocument(n,_a.min()))}else oa(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&Kc(i.target)){const t=new Na(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Hc.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=rl();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new ol(e,t,this.Ut,this.Lt,n);return this.Lt=Ku(),this.qt=fl(),this.Ut=new Fc(Ta),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new hl,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Fc(Ta),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||ta("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new hl),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function fl(){return new Mc(Na.comparator)}function gl(){return new Mc(Na.comparator)}
/**
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
 */const pl={asc:"ASCENDING",desc:"DESCENDING"},ml={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yl={and:"AND",or:"OR"};class vl{constructor(e,t){this.databaseId=e,this.wt=t}}function wl(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bl(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Tl(e,t){return wl(e,t.toTimestamp())}function El(e){return oa(!!e),_a.fromTimestamp(function(e){const t=Ga(e);return new Ia(t.seconds,t.nanos)}(e))}function Il(e,t){return function(e){return new Ca(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function _l(e){const t=Ca.fromString(e);return oa(Bl(t)),t}function Sl(e,t){return Il(e.databaseId,t.path)}function Cl(e,t){const n=_l(t);if(n.get(1)!==e.databaseId.projectId)throw new ua(ca.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ua(ca.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Na(Nl(n))}function Dl(e,t){return Il(e.databaseId,t)}function kl(e){return new Ca(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Nl(e){return oa(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ol(e,t,n){return{name:Sl(e,t),fields:n.value.mapValue.fields}}function Rl(e,t){return{documents:[Dl(e,t.path)]}}function Al(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Dl(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Dl(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return jl(wc.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Fl(e.field),direction:Ml(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.wt||Ha(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function xl(e){let t=function(e){const t=_l(e);return 4===t.length?Ca.emptyPath():Nl(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oa(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Pl(e);return t instanceof wc&&Tc(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new xc(Vl(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ha(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new gc(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new gc(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new Qc(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,u)}function Pl(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Vl(e.unaryFilter.field);return vc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Vl(e.unaryFilter.field);return vc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vl(e.unaryFilter.field);return vc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vl(e.unaryFilter.field);return vc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return sa()}}(e):void 0!==e.fieldFilter?function(e){return vc.create(Vl(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return sa()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return wc.create(e.compositeFilter.filters.map((e=>Pl(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return sa()}}(e.compositeFilter.op))}(e):sa()}function Ml(e){return pl[e]}function Ll(e){return ml[e]}function Ul(e){return yl[e]}function Fl(e){return{fieldPath:e.canonicalString()}}function Vl(e){return ka.fromServerFormat(e.fieldPath)}function jl(e){return e instanceof vc?function(e){if("=="===e.op){if(hc(e.value))return{unaryFilter:{field:Fl(e.field),op:"IS_NAN"}};if(lc(e.value))return{unaryFilter:{field:Fl(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(hc(e.value))return{unaryFilter:{field:Fl(e.field),op:"IS_NOT_NAN"}};if(lc(e.value))return{unaryFilter:{field:Fl(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fl(e.field),op:Ll(e.op),value:e.value}}}(e):e instanceof wc?function(e){const t=e.getFilters().map((e=>jl(e)));return 1===t.length?t[0]:{compositeFilter:{op:Ul(e.op),filters:t}}}(e):sa()}function ql(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Bl(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class Hl{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Ru(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Au(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Au(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Zu();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Ou(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(_a.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),rl())}isEqual(e){return this.batchId===e.batchId&&Ea(this.mutations,e.mutations,((e,t)=>Pu(e,t)))&&Ea(this.baseMutations,e.baseMutations,((e,t)=>Pu(e,t)))}}class $l{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){oa(e.mutations.length===n.length);let r=tl;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new $l(e,t,n,r)}}
/**
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
 */class zl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Wl{constructor(e,t,n,r,i=_a.min(),s=_a.min(),o=za.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Wl(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Wl(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
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
 */class Gl{constructor(e){this.ie=e}}function Kl(e){const t=xl({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?iu(t,t.limit,"L"):t}
/**
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
 */class Ql{constructor(){this.Je=new Yl}addToCollectionParentIndex(e,t){return this.Je.add(t),Ma.resolve()}getCollectionParents(e,t){return Ma.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return Ma.resolve()}deleteFieldIndex(e,t){return Ma.resolve()}getDocumentsMatchingTarget(e,t){return Ma.resolve(null)}getIndexType(e,t){return Ma.resolve(0)}getFieldIndexes(e,t){return Ma.resolve([])}getNextCollectionGroupToUpdate(e){return Ma.resolve(null)}getMinOffset(e,t){return Ma.resolve(Ra.min())}getMinOffsetFromCollectionGroup(e,t){return Ma.resolve(Ra.min())}updateCollectionGroup(e,t,n){return Ma.resolve()}updateIndexEntries(e,t){return Ma.resolve()}}class Yl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Fc(Ca.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Fc(Ca.comparator)).toArray()}}
/**
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
 */class Xl{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Xl(0)}static vn(){return new Xl(-1)}}
/**
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
 */class Jl{constructor(){this.changes=new Wu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Hc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ma.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */class Zl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class eh{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Au(n.mutation,e,jc.empty(),Ia.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,rl()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=rl()){const r=Ju();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Yu();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ju();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,rl())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ku();const s=el(),o=el();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Lu)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),Au(o.mutation,t,o.mutation.getFieldMask(),Ia.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Zl(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=el();let r=new Mc(((e,t)=>e-t)),i=rl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||jc.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||rl()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Zu();c.forEach((e=>{if(!i.has(e)){const r=Ou(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ma.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Na.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ma.resolve(Ju());let o=-1,a=i;return s.next((t=>Ma.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ma.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,rl()))).next((e=>({batchId:o,changes:Xu(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Na(t)).next((e=>{let t=Yu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Yu();return this.indexManager.getCollectionParents(e,r).next((s=>Ma.forEach(s,(s=>{const o=function(e,t){return new Qc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Hc.newInvalidDocument(n)))}));let n=Yu();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&Au(s.mutation,i,jc.empty(),Ia.now()),cu(t,i)&&(n=n.insert(r,i))})),n}))}}
/**
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
 */class th{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return Ma.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:El(n.createTime)}),Ma.resolve()}getNamedQuery(e,t){return Ma.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Kl(e.bundledQuery),readTime:El(e.readTime)}}(t)),Ma.resolve()}}
/**
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
 */class nh{constructor(){this.overlays=new Mc(Na.comparator),this.es=new Map}getOverlay(e,t){return Ma.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ju();return Ma.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.oe(e,t,r)})),Ma.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),Ma.resolve()}getOverlaysForCollection(e,t,n){const r=Ju(),i=t.length+1,s=new Na(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ma.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Mc(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ju(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ju(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Ma.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new zl(t,n));let i=this.es.get(t);void 0===i&&(i=rl(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
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
 */class rh{constructor(){this.ns=new Fc(ih.ss),this.rs=new Fc(ih.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new ih(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new ih(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new Na(new Ca([])),n=new ih(t,e),r=new ih(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new Na(new Ca([])),n=new ih(t,e),r=new ih(t,e+1);let i=rl();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new ih(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ih{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return Na.comparator(e.key,t.key)||Ta(e._s,t._s)}static os(e,t){return Ta(e._s,t._s)||Na.comparator(e.key,t.key)}}
/**
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
 */class sh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Fc(ih.ss)}checkEmpty(e){return Ma.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Hl(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.gs=this.gs.add(new ih(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Ma.resolve(s)}lookupMutationBatch(e,t){return Ma.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return Ma.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ma.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Ma.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ih(t,0),r=new ih(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),Ma.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Fc(Ta);return t.forEach((e=>{const t=new ih(e,0),r=new ih(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),Ma.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Na.isDocumentKey(i)||(i=i.child(""));const s=new ih(new Na(i),0);let o=new Fc(Ta);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),Ma.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){oa(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Ma.forEach(t.mutations,(r=>{const i=new ih(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new ih(t,0),r=this.gs.firstAfterOrEqual(n);return Ma.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ma.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class oh{constructor(e){this.Es=e,this.docs=new Mc(Na.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ma.resolve(n?n.document.mutableCopy():Hc.newInvalidDocument(t))}getEntries(e,t){let n=Ku();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Hc.newInvalidDocument(e))})),Ma.resolve(n)}getAllFromCollection(e,t,n){let r=Ku();const i=new Na(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Aa(Oa(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Ma.resolve(r)}getAllFromCollectionGroup(e,t,n,r){sa()}As(e,t){return Ma.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ah(this)}getSize(e){return Ma.resolve(this.size)}}class ah extends Jl{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),Ma.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
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
 */class ch{constructor(e){this.persistence=e,this.Rs=new Wu((e=>Wc(e)),Gc),this.lastRemoteSnapshotVersion=_a.min(),this.highestTargetId=0,this.bs=0,this.Ps=new rh,this.targetCount=0,this.vs=Xl.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),Ma.resolve()}getLastRemoteSnapshotVersion(e){return Ma.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ma.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Ma.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),Ma.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Xl(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,Ma.resolve()}updateTargetData(e,t){return this.Dn(t),Ma.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,Ma.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ma.waitFor(i).next((()=>r))}getTargetCount(e){return Ma.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return Ma.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),Ma.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ma.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),Ma.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return Ma.resolve(n)}containsKey(e,t){return Ma.resolve(this.Ps.containsKey(t))}}
/**
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
 */class uh{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Ua(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ch(this),this.indexManager=new Ql,this.remoteDocumentCache=function(e){return new oh(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new Gl(t),this.Ns=new th(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new sh(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){ta("MemoryPersistence","Starting transaction:",e);const r=new lh(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return Ma.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class lh extends xa{constructor(e){super(),this.currentSequenceNumber=e}}class hh{constructor(e){this.persistence=e,this.Fs=new rh,this.$s=null}static Bs(e){return new hh(e)}get Ls(){if(this.$s)return this.$s;throw sa()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),Ma.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),Ma.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),Ma.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ma.forEach(this.Ls,(n=>{const r=Na.fromPath(n);return this.qs(e,r).next((e=>{e||t.removeEntry(r,_a.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return Ma.or([()=>Ma.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
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
 */class dh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=rl(),r=rl();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new dh(e,t.fromCache,n,r)}}
/**
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
 */class fh{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Xc(t))return Ma.resolve(null);let n=nu(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=iu(t,null,"F"),n=nu(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=rl(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,iu(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return Xc(t)||r.isEqual(_a.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(ea()<=Zt.DEBUG&&ta("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),au(t)),this.Bi(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=_a.fromTimestamp(1e9===r?new Ia(n+1,0):new Ia(n,r));return new Ra(i,Na.empty(),t)}(r,-1)))}))}Fi(e,t){let n=new Fc(uu(e));return t.forEach(((t,r)=>{cu(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return ea()<=Zt.DEBUG&&ta("QueryEngine","Using full collection scan to execute query:",au(t)),this.Ni.getDocumentsMatchingQuery(e,t,Ra.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */class gh{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new Mc(Ta),this.Ui=new Wu((e=>Wc(e)),Gc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eh(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}async function ph(e,t){const n=aa(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=rl();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function mh(e){const t=aa(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function yh(e,t){const n=aa(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(za.EMPTY_BYTE_STRING,_a.min()).withLastLimboFreeSnapshotVersion(_a.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Cs.updateTargetData(e,u))}));let a=Ku(),c=rl();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=rl(),i=rl();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ku();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(_a.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ta("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}(e,s,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!r.isEqual(_a.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ma.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.qi=i,e)))}function vh(e,t){const n=aa(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function wh(e,t,n){const r=aa(e),i=r.qi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!La(e))throw e;ta("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function bh(e,t,n){const r=aa(e);let i=_a.min(),s=rl();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=aa(e),i=r.Ui.get(n);return void 0!==i?Ma.resolve(r.qi.get(i)):r.Cs.getTargetData(t,n)}(r,e,nu(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:_a.min(),n?s:rl()))).next((e=>(function(e,t,n){let r=e.Ki.get(t)||_a.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Hi:s})))))}class Th{constructor(){this.activeTargetIds=sl()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Eh{constructor(){this.Lr=new Th,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Th,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Ih{Ur(e){}shutdown(){}}
/**
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
 */class _h{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){ta("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){ta("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Sh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Ch{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
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
 */class Dh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);ta("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(ta("RestConnection","Received: ",e),e)),(t=>{throw ra("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=Sh[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new Qo;o.setWithCredentials(!0),o.listenOnce(Ho.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Bo.NO_ERROR:const t=o.getResponseJson();ta("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Bo.TIMEOUT:ta("Connection",'RPC "'+e+'" timed out'),s(new ua(ca.DEADLINE_EXCEEDED,"Request time out"));break;case Bo.HTTP_ERROR:const n=o.getStatus();if(ta("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ca).indexOf(t)>=0?t:ca.UNKNOWN}(t.status);s(new ua(e,t.message))}else s(new ua(ca.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ua(ca.UNAVAILABLE,"Connection failed."));break;default:sa()}}finally{ta("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=new Uo,s=Mi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Go({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");ta("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new Ch({Hr:e=>{l?ta("Connection","Not sending because WebChannel is closed:",e):(u||(ta("Connection","Opening WebChannel transport."),c.open(),u=!0),ta("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,Ko.EventType.OPEN,(()=>{l||ta("Connection","WebChannel transport opened.")})),d(c,Ko.EventType.CLOSE,(()=>{l||(l=!0,ta("Connection","WebChannel transport closed"),h.io())})),d(c,Ko.EventType.ERROR,(e=>{l||(l=!0,ra("Connection","WebChannel transport errored:",e),h.io(new ua(ca.UNAVAILABLE,"The operation could not be completed")))})),d(c,Ko.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];oa(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){ta("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Hu[e];if(void 0!==t)return zu(t)}(e),n=i.message;void 0===t&&(t=ca.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,h.io(new ua(t,n)),c.close()}else ta("Connection","WebChannel received:",n),h.ro(n)}})),d(s,$o.STAT_EVENT,(e=>{e.stat===zo?ta("Connection","Detected buffering proxy"):e.stat===Wo&&ta("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}function kh(){return"undefined"!=typeof document?document:null}
/**
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
 */function Nh(e){return new vl(e,!0)}class Oh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&ta("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
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
 */class Rh{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Oh(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===ca.RESOURCE_EXHAUSTED?(na(t.toString()),na("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===ca.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new ua(ca.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return ta("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(ta("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ah extends Rh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:sa()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.wt?(oa(void 0===t||"string"==typeof t),za.fromBase64String(t||"")):(oa(void 0===t||t instanceof Uint8Array),za.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ca.UNKNOWN:zu(e.code);return new ua(t,e.message||"")}(o);n=new ll(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cl(e,r.document.name),s=El(r.document.updateTime),o=r.document.createTime?El(r.document.createTime):_a.min(),a=new qc({mapValue:{fields:r.document.fields}}),c=Hc.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new cl(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Cl(e,r.document),s=r.readTime?El(r.readTime):_a.min(),o=Hc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new cl([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Cl(e,r.document),s=r.removedTargetIds||[];n=new cl([],s,i,null)}else{if(!("filter"in t))return sa();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Bu(r),s=e.targetId;n=new ul(s,i)}}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return _a.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?_a.min():t.readTime?El(t.readTime):_a.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=kl(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=Kc(r)?{documents:Rl(e,r)}:{query:Al(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=bl(e,t.resumeToken):t.snapshotVersion.compareTo(_a.min())>0&&(n.readTime=wl(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return sa()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=kl(this.yt),t.removeTarget=e,this.Bo(t)}}class xh extends Rh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(oa(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=function(e,t){return e&&e.length>0?(oa(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?El(e.updateTime):El(t);return n.isEqual(_a.min())&&(n=El(t)),new Cu(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=El(e.commitTime);return this.listener.Zo(n,t)}return oa(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=kl(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Mu)n={update:Ol(e,t.key,t.value)};else if(t instanceof ju)n={delete:Sl(e,t.key)};else if(t instanceof Lu)n={update:Ol(e,t.key,t.data),updateMask:ql(t.fieldMask)};else{if(!(t instanceof qu))return sa();n={verify:Sl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof vu)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wu)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Tu)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Iu)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw sa()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Tl(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:sa()}(e,t.precondition)),n}(this.yt,e)))};this.Bo(t)}}
/**
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
 */class Ph extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new ua(ca.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ca.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ua(ca.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ca.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ua(ca.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Mh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(na(t),this.ou=!1):ta("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
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
 */class Lh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{zh(this)&&(ta("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=aa(e);t._u.add(4),await Fh(t),t.gu.set("Unknown"),t._u.delete(4),await Uh(t)}(this))}))})),this.gu=new Mh(n,r)}}async function Uh(e){if(zh(e))for(const t of e.wu)await t(!0)}async function Fh(e){for(const t of e.wu)await t(!1)}function Vh(e,t){const n=aa(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),$h(n)?Hh(n):cd(n).ko()&&qh(n,t))}function jh(e,t){const n=aa(e),r=cd(n);n.du.delete(t),r.ko()&&Bh(n,t),0===n.du.size&&(r.ko()?r.Fo():zh(n)&&n.gu.set("Unknown"))}function qh(e,t){e.yu.Ot(t.targetId),cd(e).zo(t)}function Bh(e,t){e.yu.Ot(t),cd(e).Ho(t)}function Hh(e){e.yu=new dl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),cd(e).start(),e.gu.uu()}function $h(e){return zh(e)&&!cd(e).No()&&e.du.size>0}function zh(e){return 0===aa(e)._u.size}function Wh(e){e.yu=void 0}async function Gh(e){e.du.forEach(((t,n)=>{qh(e,t)}))}async function Kh(e,t){Wh(e),$h(e)?(e.gu.hu(t),Hh(e)):e.gu.set("Unknown")}async function Qh(e,t,n){if(e.gu.set("Online"),t instanceof ll&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){ta("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Yh(e,n)}else if(t instanceof cl?e.yu.Kt(t):t instanceof ul?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(_a.min()))try{const t=await mh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(za.EMPTY_BYTE_STRING,n.snapshotVersion)),Bh(e,t);const r=new Wl(n.target,t,1,n.sequenceNumber);qh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ta("RemoteStore","Failed to raise snapshot:",t),await Yh(e,t)}}async function Yh(e,t,n){if(!La(t))throw t;e._u.add(1),await Fh(e),e.gu.set("Offline"),n||(n=()=>mh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ta("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Uh(e)}))}function Xh(e,t){return t().catch((n=>Yh(e,n,t)))}async function Jh(e){const t=aa(e),n=ud(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Zh(t);)try{const e=await vh(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,ed(t,e)}catch(e){await Yh(t,e)}td(t)&&nd(t)}function Zh(e){return zh(e)&&e.fu.length<10}function ed(e,t){e.fu.push(t);const n=ud(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function td(e){return zh(e)&&!ud(e).No()&&e.fu.length>0}function nd(e){ud(e).start()}async function rd(e){ud(e).eu()}async function id(e){const t=ud(e);for(const n of e.fu)t.Xo(n.mutations)}async function sd(e,t,n){const r=e.fu.shift(),i=$l.from(r,t,n);await Xh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Jh(e)}async function od(e,t){t&&ud(e).Yo&&await async function(e,t){if(function(e){switch(e){default:return sa();case ca.CANCELLED:case ca.UNKNOWN:case ca.DEADLINE_EXCEEDED:case ca.RESOURCE_EXHAUSTED:case ca.INTERNAL:case ca.UNAVAILABLE:case ca.UNAUTHENTICATED:return!1;case ca.INVALID_ARGUMENT:case ca.NOT_FOUND:case ca.ALREADY_EXISTS:case ca.PERMISSION_DENIED:case ca.FAILED_PRECONDITION:case ca.ABORTED:case ca.OUT_OF_RANGE:case ca.UNIMPLEMENTED:case ca.DATA_LOSS:return!0}}(n=t.code)&&n!==ca.ABORTED){const n=e.fu.shift();ud(e).Mo(),await Xh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Jh(e)}var n}(e,t),td(e)&&nd(e)}async function ad(e,t){const n=aa(e);n.asyncQueue.verifyOperationInProgress(),ta("RemoteStore","RemoteStore received new credentials");const r=zh(n);n._u.add(3),await Fh(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Uh(n)}function cd(e){return e.pu||(e.pu=function(e,t,n){const r=aa(e);return r.su(),new Ah(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
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
 */}(e.datastore,e.asyncQueue,{Yr:Gh.bind(null,e),Zr:Kh.bind(null,e),Wo:Qh.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),$h(e)?Hh(e):e.gu.set("Unknown")):(await e.pu.stop(),Wh(e))}))),e.pu}function ud(e){return e.Iu||(e.Iu=function(e,t,n){const r=aa(e);return r.su(),new xh(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:rd.bind(null,e),Zr:od.bind(null,e),tu:id.bind(null,e),Zo:sd.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Jh(e)):(await e.Iu.stop(),e.fu.length>0&&(ta("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
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
 */}class ld{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new la,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new ld(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ua(ca.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hd(e,t){if(na("AsyncQueue",`${t}: ${e}`),La(e))return new ua(ca.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class dd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Na.comparator(t.key,n.key):(e,t)=>Na.comparator(e.key,t.key),this.keyedMap=Yu(),this.sortedSet=new Mc(this.comparator)}static emptySet(e){return new dd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new dd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class fd{constructor(){this.Tu=new Mc(Na.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):sa():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class gd{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new gd(e,t,dd.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
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
 */class pd{constructor(){this.Au=void 0,this.listeners=[]}}class md{constructor(){this.queries=new Wu((e=>ou(e)),su),this.onlineState="Unknown",this.Ru=new Set}}async function yd(e,t){const n=aa(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new pd),i)try{s.Au=await n.onListen(r)}catch(e){const n=hd(e,`Initialization of query '${au(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&Td(n)}async function vd(e,t){const n=aa(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function wd(e,t){const n=aa(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.Pu(e)&&(r=!0);i.Au=e}}r&&Td(n)}function bd(e,t,n){const r=aa(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Td(e){e.Ru.forEach((e=>{e.next()}))}class Ed{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new gd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=gd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
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
 */class Id{constructor(e){this.key=e}}class _d{constructor(e){this.key=e}}class Sd{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=rl(),this.mutatedKeys=rl(),this.Gu=uu(e),this.Qu=new dd(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new fd,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=cu(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return sa()}};return n(e)-n(t)}
/**
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
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new gd(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new fd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=rl(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new _d(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Id(n))})),t}tc(e){this.qu=e.Hi,this.Ku=rl();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return gd.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Cd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Dd{constructor(e){this.key=e,this.nc=!1}}class kd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new Wu((e=>ou(e)),su),this.rc=new Map,this.oc=new Set,this.uc=new Mc(Na.comparator),this.cc=new Map,this.ac=new rh,this.hc={},this.lc=new Map,this.fc=Xl.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Nd(e,t){const n=function(e){const t=aa(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ad.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pd.bind(null,t),t.sc.Wo=wd.bind(null,t.eventManager),t.sc.wc=bd.bind(null,t.eventManager),t}(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await function(e,t){const n=aa(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,Ma.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new Wl(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}(n.localStore,nu(t));n.isPrimaryClient&&Vh(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await bh(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return qd(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await bh(e.localStore,t,!0),o=new Sd(t,s.Hi),a=o.Wu(s.documents),c=al.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);qd(e,n,u.Xu);const l=new Cd(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}(n,t,r,"current"===s,e.resumeToken)}return i}async function Od(e,t){const n=aa(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!su(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),jh(n.remoteStore,r.targetId),Vd(n,r.targetId)})).catch(Pa)):(Vd(n,r.targetId),await wh(n.localStore,r.targetId,!0))}async function Rd(e,t,n){const r=function(e){const t=aa(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Md.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ld.bind(null,t),t}(e);try{const e=await function(e,t){const n=aa(e),r=Ia.now(),i=t.reduce(((e,t)=>e.add(t.key)),rl());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ku(),c=rl();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=xu(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Lu(e.key,t,Bc(t.value.mapValue),Du.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Xu(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new Mc(Ta)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await $d(r,e.changes),await Jh(r.remoteStore)}catch(e){const t=hd(e,"Failed to persist write");n.reject(t)}}async function Ad(e,t){const n=aa(e);try{const e=await yh(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(oa(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?oa(r.nc):e.removedDocuments.size>0&&(oa(r.nc),r.nc=!1))})),await $d(n,e,t)}catch(e){await Pa(e)}}function xd(e,t,n){const r=aa(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=aa(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.bu(t)&&(r=!0)})),r&&Td(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pd(e,t,n){const r=aa(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new Mc(Na.comparator);e=e.insert(s,Hc.newNoDocument(s,_a.min()));const n=rl().add(s),i=new ol(_a.min(),new Map,new Fc(Ta),e,n);await Ad(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),Hd(r)}else await wh(r.localStore,t,!1).then((()=>Vd(r,t,n))).catch(Pa)}async function Md(e,t){const n=aa(e),r=t.batch.batchId;try{const e=await function(e,t){const n=aa(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ma.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);oa(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=rl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Fd(n,r,null),Ud(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $d(n,e)}catch(e){await Pa(e)}}async function Ld(e,t,n){const r=aa(e);try{const e=await function(e,t){const n=aa(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(oa(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Fd(r,t,n),Ud(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await $d(r,e)}catch(n){await Pa(n)}}function Ud(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Fd(e,t,n){const r=aa(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Vd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||jd(e,t)}))}function jd(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(jh(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Hd(e))}function qd(e,t,n){for(const r of n)r instanceof Id?(e.ac.addReference(r.key,t),Bd(e,r)):r instanceof _d?(ta("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||jd(e,r.key)):sa()}function Bd(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(ta("SyncEngine","New document in limbo: "+n),e.oc.add(r),Hd(e))}function Hd(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new Na(Ca.fromString(t)),r=e.fc.next();e.cc.set(r,new Dd(n)),e.uc=e.uc.insert(n,r),Vh(e.remoteStore,new Wl(nu(Yc(n.path)),r,2,Ua.at))}}async function $d(e,t,n){const r=aa(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=dh.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=aa(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ma.forEach(t,(t=>Ma.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ma.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!La(e))throw e;ta("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(t,i)}}}(r.localStore,s))}async function zd(e,t){const n=aa(e);if(!n.currentUser.isEqual(t)){ta("SyncEngine","User change. New user:",t.toKey());const e=await ph(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new ua(ca.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.lc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await $d(n,e.ji)}}function Wd(e,t){const n=aa(e),r=n.cc.get(t);if(r&&r.nc)return rl().add(r.key);{let e=rl();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}class Gd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Nh(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return function(e,t,n,r){return new gh(e,t,n,r)}(this.persistence,new fh,e.initialUser,this.yt)}yc(e){return new uh(hh.Bs,this.yt)}gc(e){return new Eh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>xd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=zd.bind(null,this.syncEngine),await async function(e,t){const n=aa(e);t?(n._u.delete(2),await Uh(n)):t||(n._u.add(2),await Fh(n),n.gu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new md}createDatastore(e){const t=Nh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Dh(r));var r;return function(e,t,n,r){return new Ph(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>xd(this.syncEngine,e,0),s=_h.C()?new _h:new Ih,new Lh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new kd(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=aa(e);ta("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Fh(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
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
 */function Qd(e,t,n){if(!n)throw new ua(ca.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Yd(e){if(!Na.isDocumentKey(e))throw new ua(ca.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Xd(e){if(Na.isDocumentKey(e))throw new ua(ca.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Jd(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":sa()}function Zd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ua(ca.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jd(e);throw new ua(ca.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */const ef=new Map;class tf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ua(ca.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ua(ca.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new ua(ca.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
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
 */class nf{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ua(ca.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ua(ca.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new da;switch(e.type){case"gapi":const t=e.client;return new ma(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ua(ca.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ef.get(e);t&&(ta("ComponentProvider","Removing Datastore"),ef.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
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
 */
class rf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new of(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rf(this.firestore,e,this._key)}}class sf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sf(this.firestore,e,this._query)}}class of extends sf{constructor(e,t,n){super(e,t,Yc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rf(this.firestore,null,new Na(e))}withConverter(e){return new of(this.firestore,e,this._path)}}function af(e,t,...n){if(e=Kt(e),Qd("collection","path",t),e instanceof nf){const r=Ca.fromString(t,...n);return Xd(r),new of(e,null,r)}{if(!(e instanceof rf||e instanceof of))throw new ua(ca.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ca.fromString(t,...n));return Xd(r),new of(e.firestore,null,r)}}function cf(e,t,...n){if(e=Kt(e),1===arguments.length&&(t=ba.R()),Qd("doc","path",t),e instanceof nf){const r=Ca.fromString(t,...n);return Yd(r),new rf(e,null,new Na(r))}{if(!(e instanceof rf||e instanceof of))throw new ua(ca.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ca.fromString(t,...n));return Yd(r),new rf(e.firestore,e instanceof of?e.converter:null,new Na(r))}}
/**
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
 */
/**
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
 */class uf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):na("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */class lf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Xo.UNAUTHENTICATED,this.clientId=ba.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ta("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ta("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ua(ca.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new la;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=hd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function hf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(ta("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),ta("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await ph(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new Gd)),e.offlineComponents}(e);ta("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>ad(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>ad(t.remoteStore,n))),e.onlineComponents=t}async function df(e){return e.onlineComponents||(ta("FirestoreClient","Using default OnlineComponentProvider"),await hf(e,new Kd)),e.onlineComponents}async function ff(e){const t=await df(e),n=t.eventManager;return n.onListen=Nd.bind(null,t.syncEngine),n.onUnlisten=Od.bind(null,t.syncEngine),n}class gf{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Oh(this,"async_queue_retry"),this.Wc=()=>{const e=kh();e&&ta("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=kh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=kh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new la;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!La(e))throw e;ta("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw na("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=ld.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(r),r}zc(){this.Kc&&sa()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function pf(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
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
 */(e)}class mf extends nf{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new gf,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vf(this),this._firestoreClient.terminate()}}function yf(e){return e._firestoreClient||vf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Fa(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
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
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new lf(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
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
 */
/**
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
 */class wf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wf(za.fromBase64String(e))}catch(e){throw new ua(ca.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new wf(za.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class bf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ua(ca.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ka(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */class Tf{constructor(e){this._methodName=e}}
/**
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
 */class Ef{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ua(ca.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ua(ca.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ta(this._lat,e._lat)||Ta(this._long,e._long)}}
/**
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
 */const If=/^__.*__$/;class _f{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Lu(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mu(e,this.data,t,this.fieldTransforms)}}class Sf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Lu(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw sa()}}class Df{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Df(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Vf(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Cf(this.sa)&&If.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class kf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Nh(e)}da(e,t,n,r=!1){return new Df({sa:e,methodName:t,fa:n,path:ka.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Nf(e){const t=e._freezeSettings(),n=Nh(e._databaseId);return new kf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Of(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);Mf("Data must be an object, but it was:",o,r);const a=xf(r,o);let c,u;if(s.merge)c=new jc(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Lf(t,r,n);if(!o.contains(i))throw new ua(ca.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);jf(e,i)||e.push(i)}c=new jc(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new _f(new qc(a),c,u)}class Rf extends Tf{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rf}}function Af(e,t){if(Pf(e=Kt(e)))return Mf("Unsupported field value:",t,e),xf(e,t);if(e instanceof Tf)return function(e,t){if(!Cf(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Af(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Kt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return fu(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ia.fromDate(e);return{timestampValue:wl(t.yt,n)}}if(e instanceof Ia){const n=new Ia(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:wl(t.yt,n)}}if(e instanceof Ef)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof wf)return{bytesValue:bl(t.yt,e._byteString)};if(e instanceof rf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Il(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${Jd(e)}`)}(e,t)}function xf(e,t){const n={};return Ba(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qa(e,((e,r)=>{const i=Af(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Pf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ia||e instanceof Ef||e instanceof wf||e instanceof rf||e instanceof Tf)}function Mf(e,t,n){if(!Pf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Jd(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function Lf(e,t,n){if((t=Kt(t))instanceof bf)return t._internalPath;if("string"==typeof t)return Ff(e,t);throw Vf("Field path arguments must be of type string or ",e,!1,void 0,n)}const Uf=new RegExp("[~\\*/\\[\\]]");function Ff(e,t,n){if(t.search(Uf)>=0)throw Vf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bf(...t.split("."))._internalPath}catch(r){throw Vf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Vf(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ua(ca.INVALID_ARGUMENT,a+e+c)}function jf(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class qf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Bf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Bf extends qf{data(){return super.data()}}function Hf(e,t){return"string"==typeof t?Ff(e,t):t instanceof bf?t._internalPath:t._delegate._internalPath}
/**
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
 */function $f(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ua(ca.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zf{}class Wf extends zf{}function Gf(e,t,...n){let r=[];t instanceof zf&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Yf)).length,n=e.filter((e=>e instanceof Kf)).length;if(t>1||t>0&&n>0)throw new ua(ca.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
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
 */(r);for(const t of r)e=t._apply(e);return e}class Kf extends Wf{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Kf(e,t,n)}_apply(e){const t=this._parse(e);return Zf(e._query,t),new sf(e.firestore,e.converter,ru(e._query,t))}_parse(e){const t=Nf(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ua(ca.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Jf(o,s);const t=[];for(const n of o)t.push(Xf(r,e,n));a={arrayValue:{values:t}}}else a=Xf(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Jf(o,s),a=function(e,t,n,r=!1){return Af(n,e.da(r?4:3,t))}(n,"where",o,"in"===s||"not-in"===s);return vc.create(i,s,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Qf(e,t,n){const r=t,i=Hf("where",e);return Kf._create(i,r,n)}class Yf extends zf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yf(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:wc.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)Zf(n,e),n=ru(n,e)}(e._query,t),new sf(e.firestore,e.converter,ru(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Xf(e,t,n){if("string"==typeof(n=Kt(n))){if(""===n)throw new ua(ca.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eu(t)&&-1!==n.indexOf("/"))throw new ua(ca.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ca.fromString(n));if(!Na.isDocumentKey(r))throw new ua(ca.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ac(e,new Na(r))}if(n instanceof rf)return ac(e,n._key);throw new ua(ca.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jd(n)}.`)}function Jf(e,t){if(!Array.isArray(e)||0===e.length)throw new ua(ca.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ua(ca.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Zf(e,t){if(t.isInequality()){const n=Zc(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new ua(ca.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Jc(e);null!==i&&function(e,t,n){if(!n.isEqual(t))throw new ua(ca.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}(0,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ua(ca.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ua(ca.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class eg{convertValue(e,t="none"){switch(ec(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ka(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw sa()}}convertObject(e,t){const n={};return qa(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Ef(Ka(e.latitude),Ka(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Xa(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ja(e));default:return null}}convertTimestamp(e){const t=Ga(e);return new Ia(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ca.fromString(e);oa(Bl(n));const r=new Va(n.get(1),n.get(3)),i=new Na(n.popFirst(5));return r.isEqual(t)||na(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */function tg(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r
/**
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
 */}class ng{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rg extends qf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ig(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Hf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ig extends rg{data(e={}){return super.data(e)}}class sg{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ng(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ig(this._firestore,this._userDataWriter,n.key,n,new ng(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ua(ca.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new ig(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ng(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ig(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ng(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:og(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function og(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return sa()}}class ag extends eg{constructor(e){super(),this.firestore=e}convertBytes(e){return new wf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rf(this.firestore,null,t)}}function cg(e){e=Zd(e,sf);const t=Zd(e.firestore,mf),n=yf(t),r=new ag(t);return $f(e._query),function(e,t,n={}){const r=new la;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new uf({next:n=>{t.enqueueAndForget((()=>vd(e,o))),n.fromCache&&"server"===r.source?i.reject(new ua(ca.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Ed(n,s,{includeMetadataChanges:!0,Nu:!0});return yd(e,o)}(await ff(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new sg(t,r,e,n)))}function ug(e,t,n,...r){e=Zd(e,rf);const i=Zd(e.firestore,mf),s=Nf(i);let o;return o="string"==typeof(t=Kt(t))||t instanceof bf?function(e,t,n,r,i,s){const o=e.da(1,t,n),a=[Lf(t,r,n)],c=[i];if(s.length%2!=0)throw new ua(ca.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(Lf(t,s[e])),c.push(s[e+1]);const u=[],l=qc.empty();for(let e=a.length-1;e>=0;--e)if(!jf(u,a[e])){const t=a[e];let n=c[e];n=Kt(n);const r=o.ca(t);if(n instanceof Rf)u.push(t);else{const e=Af(n,r);null!=e&&(u.push(t),l.set(t,e))}}const h=new jc(u);return new Sf(l,h,o.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.da(1,t,n);Mf("Data must be an object, but it was:",i,r);const s=[],o=qc.empty();qa(r,((e,r)=>{const a=Ff(t,e,n);r=Kt(r);const c=i.ca(a);if(r instanceof Rf)s.push(a);else{const e=Af(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new jc(s);return new Sf(o,a,i.fieldTransforms)}(s,"updateDoc",e._key,t),dg(i,[o.toMutation(e._key,Du.exists(!0))])}function lg(e){return dg(Zd(e.firestore,mf),[new ju(e._key,Du.none())])}function hg(e,...t){var n,r,i;e=Kt(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||pf(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pf(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof rf)u=Zd(e.firestore,mf),l=Yc(e._key.path),c={next:n=>{t[o]&&t[o](function(e,t,n){const r=n.docs.get(t._key),i=new ag(e);return new rg(e,i,t._key,r,new ng(n.hasPendingWrites,n.fromCache),t.converter)}(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Zd(e,sf);u=Zd(n.firestore,mf),l=n._query;const r=new ag(u);c={next:e=>{t[o]&&t[o](new sg(u,r,n,e))},error:t[o+1],complete:t[o+2]},$f(e._query)}return function(e,t,n,r){const i=new uf(r),s=new Ed(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>yd(await ff(e),s))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>vd(await ff(e),s)))}}(yf(u),l,a,c)}function dg(e,t){return function(e,t){const n=new la;return e.asyncQueue.enqueueAndForget((async()=>Rd(await function(e){return df(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(yf(e),t)}!function(e,t=!0){Jo=Mn,Rn(new Qt("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new mf(new ga(e.getProvider("auth-internal")),new va(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ua(ca.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Fn(Yo,"3.8.0",e),Fn(Yo,"3.8.0","esm2017")}();var fg=function(){const e=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];let t=[];for(let n=0;n<36;n++)t[n]=8===n||13===n||18===n||23===n?"-":e[Math.ceil(Math.random()*e.length-1)];return t.join("")};
/**
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
 */
Fn("firebase","9.15.0","app");
/**
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
 */
const gg="firebasestorage.googleapis.com",pg="storageBucket";
/**
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
 */
class mg extends jt{constructor(e,t,n=0){super(yg(e),`Firebase Storage: ${t} (${yg(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mg.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yg(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function yg(e){return"storage/"+e}function vg(){return new mg("unknown","An unknown error occurred, please check the error payload for server response.")}function wg(e){return new mg("invalid-argument",e)}function bg(){return new mg("app-deleted","The Firebase app was deleted.")}function Tg(e,t){return new mg("invalid-format","String does not match format '"+e+"': "+t)}function Eg(e){throw new mg("internal-error","Internal error: "+e)}
/**
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
 */class Ig{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Ig.makeFromUrl(e,t)}catch(t){return new Ig(e,"")}if(""===n.path)return n;throw new mg("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===gg?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<a.length;t++){const r=a[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new Ig(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new mg("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class _g{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
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
 */function Sg(e){return"string"==typeof e||e instanceof String}function Cg(e){return Dg()&&e instanceof Blob}function Dg(){return"undefined"!=typeof Blob&&!function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()}function kg(e,t,n,r){if(r<t)throw wg(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw wg(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
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
 */function Ng(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Og(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
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
 */var Rg;!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(Rg||(Rg={}));
/**
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
 */
class Ag{constructor(e,t,n,r,i,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new xg(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Rg.NO_ERROR,i=n.getStatus();if((!t||
/**
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
 */
function(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}(i,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===Rg.ABORT;return void e(!1,new xg(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new xg(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!
/**
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
 */
function(e){return void 0!==e}(e)?n():n(e)}catch(e){r(e)}else if(null!==i){const e=vg();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?bg():new mg("canceled","User canceled the upload/download."))}else{r(new mg("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new xg(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);if(c()||o)return d(),void l.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let g=!1;function p(e){g||(g=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,p(!0)}),n),p}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&function(e){e(!1)}(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class xg{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
/**
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
 */
function Pg(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Mg(...e){const t=Pg();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Dg())return new Blob(e);throw new mg("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
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
 */
function Lg(e){if("undefined"==typeof atob)throw new mg("unsupported-environment",`${"base-64"} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);return atob(e)}
/**
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
 */const Ug="raw",Fg="base64",Vg="base64url",jg="data_url";class qg{constructor(e,t){this.data=e,this.contentType=t||null}}function Bg(e,t){switch(e){case Ug:return new qg(Hg(t));case Fg:case Vg:return new qg($g(e,t));case jg:return new qg(function(e){const t=new zg(e);return t.base64?$g(Fg,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw Tg(jg,"Malformed data URL.")}return Hg(t)}(t.rest)}(t),new zg(t).contentType)}throw vg()}function Hg(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function $g(e,t){switch(e){case Fg:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw Tg(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Vg:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw Tg(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Lg(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw Tg(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class zg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Tg(jg,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class Wg{constructor(e,t){let n=0,r="";Cg(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Cg(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new Wg(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Wg(n,!0)}}static getBlob(...e){if(Dg()){const t=e.map((e=>e instanceof Wg?e.data_:e));return new Wg(Mg.apply(null,t))}{const t=e.map((e=>Sg(e)?Bg(Ug,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new Wg(r,!0)}}uploadData(){return this.data_}}
/**
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
 */function Gg(e){let t;try{t=JSON.parse(e)}catch(e){return null}return function(e){return"object"==typeof e&&!Array.isArray(e)}(t)?t:null}
/**
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
 */function Kg(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
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
 */function Qg(e,t){return t}class Yg{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Qg}}let Xg=null;function Jg(){if(Xg)return Xg;const e=[];e.push(new Yg("bucket")),e.push(new Yg("generation")),e.push(new Yg("metageneration")),e.push(new Yg("name","fullPath",!0));const t=new Yg("name");t.xform=function(e,t){return function(e){return!Sg(e)||e.length<2?e:Kg(e)}(t)},e.push(t);const n=new Yg("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Yg("timeCreated")),e.push(new Yg("updated")),e.push(new Yg("md5Hash",null,!0)),e.push(new Yg("cacheControl",null,!0)),e.push(new Yg("contentDisposition",null,!0)),e.push(new Yg("contentEncoding",null,!0)),e.push(new Yg("contentLanguage",null,!0)),e.push(new Yg("contentType",null,!0)),e.push(new Yg("metadata","customMetadata",!0)),Xg=e,Xg}function Zg(e,t,n){const r={type:"file"},i=n.length;for(let e=0;e<i;e++){const i=n[e];r[i.local]=i.xform(r,t[i.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new Ig(n,r);return t._makeStorageReference(i)}})}(r,e),r}function ep(e,t,n){const r=Gg(t);if(null===r)return null;return Zg(e,r,n)}class tp{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
 */function np(e){if(!e)throw vg()}function rp(e,t){return function(n,r){const i=ep(e,r,t);return np(null!==i),function(e,t,n,r){const i=Gg(t);if(null===i)return null;if(!Sg(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((t=>{const i=e.bucket,s=e.fullPath;return Ng("/b/"+o(i)+"/o/"+o(s),n,r)+Og({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function ip(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new mg("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new mg("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new mg("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new mg("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function sp(e){const t=ip(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new mg("object-not-found","Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function op(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const c=function(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}(t,r,i),u=function(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}(c,n),l="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",h="\r\n--"+a+"--",d=Wg.getBlob(l,r,h);if(null===d)throw new mg("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");const f={name:c.fullPath},g=Ng(s,e.host,e._protocol),p=e.maxUploadRetryTime,m=new tp(g,"POST",function(e,t){return function(n,r){const i=ep(e,r,t);return np(null!==i),i}}(e,n),p);return m.urlParams=f,m.headers=o,m.body=d.uploadData(),m.errorHandler=ip(t),m}class ap{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rg.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Rg.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Rg.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw Eg("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Eg("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Eg("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Eg("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Eg("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class cp extends ap{initXhr(){this.xhr_.responseType="text"}}function up(){return new cp}
/**
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
 */class lp{constructor(e,t){this._service=e,this._location=t instanceof Ig?t:Ig.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new lp(e,t)}get root(){const e=new Ig(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kg(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new Ig(this._location.bucket,e);return new lp(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new mg("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function hp(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=Ng(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new tp(r,"GET",rp(e,n),i);return s.errorHandler=sp(t),s}(e.storage,e._location,Jg());return e.storage.makeRequestWithTokens(t,up).then((e=>{if(null===e)throw new mg("no-download-url","The given file does not have any download URLs.");return e}))}function dp(e,t){if(e instanceof pp){const n=e;if(null==n._bucket)throw new mg("no-default-bucket","No default bucket found. Did you set the '"+pg+"' property when initializing the app?");const r=new lp(n,n._bucket);return null!=t?dp(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new Ig(e._location.bucket,n);return new lp(e.storage,r)}
/**
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
 */(e,t):e}function fp(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof pp)return new lp(e,t);throw wg("To use ref(service, url), the first argument must be a Storage instance.")}return dp(e,t)}function gp(e,t){const n=null==t?void 0:t[pg];return null==n?null:Ig.makeFromBucketSpec(n,e)}class pp{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=gg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?Ig.makeFromBucketSpec(r,this._host):gp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Ig.makeFromBucketSpec(this._url,e):this._bucket=gp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new lp(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new _g(bg());{const s=function(e,t,n,r,i,s,o=!0){const a=Og(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(u,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new Ag(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const mp="@firebase/storage",yp="0.10.0",vp="storage";function wp(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");const r=op(e.storage,e._location,Jg(),new Wg(t,!0),n);return e.storage.makeRequestWithTokens(r,up).then((t=>({metadata:t,ref:e})))}(e=Kt(e),t,n)}function bp(e,t){return fp(e=Kt(e),t)}function Tp(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new pp(n,r,i,t,Mn)}function Ep(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Rn(new Qt(vp,Tp,"PUBLIC").setMultipleInstances(!0)),Fn(mp,yp,""),Fn(mp,yp,"esm2017");const Ip=Ep,_p=new qt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Sp=new sn("@firebase/auth");function Cp(e,...t){Sp.logLevel<=Zt.ERROR&&Sp.error(`Auth (${Mn}): ${e}`,...t)}
/**
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
 */function Dp(e,...t){throw Op(e,...t)}function kp(e,...t){return Op(e,...t)}function Np(e,t,n){const r=Object.assign(Object.assign({},Ip()),{[t]:n});return new qt("auth","Firebase",r).create(t,{appName:e.name})}function Op(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return _p.create(e,...t)}function Rp(e,t,...n){if(!e)throw Op(t,...n)}function Ap(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Cp(t),new Error(t)}function xp(e,t){e||Ap(t)}
/**
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
 */const Pp=new Map;function Mp(e){xp(e instanceof Function,"Expected a class definition");let t=Pp.get(e);return t?(xp(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Pp.set(e,t),t)}
/**
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
 */
/**
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
 */
function Lp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Up(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function Fp(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Up()&&"https:"!==Up()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
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
 */
class Vp{constructor(e,t){this.shortDelay=e,this.longDelay=t,xp(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Fp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function jp(e,t){xp(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class qp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ap("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ap("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ap("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const Bp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Hp=new Vp(3e4,6e4);
/**
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
 */async function $p(e,t,n,r,i={}){return zp(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=zt(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),qp.fetch()(Wp(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function zp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bp),t);try{const t=new Gp(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Kp(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Kp(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Kp(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Kp(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Np(e,a,o);Dp(e,a)}}catch(t){if(t instanceof jt)throw t;Dp(e,"network-request-failed")}}function Wp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?jp(e.config,i):`${e.config.apiScheme}://${i}`}class Gp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(kp(this.auth,"network-request-failed"))),Hp.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kp(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kp(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function Qp(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Yp(e){return 1e3*Number(e)}function Xp(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Cp("JWT malformed, contained fewer than 3 sections"),null;try{const e=Rt(n);return e?JSON.parse(e):(Cp("Failed to decode base64 JWT payload"),null)}catch(e){return Cp("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
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
 */
async function Jp(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof jt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Zp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class em{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qp(this.lastLoginAt),this.creationTime=Qp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function tm(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Jp(e,async function(e,t){return $p(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Rp(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=g(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new em(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
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
 */
class nm{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Rp(e.idToken,"internal-error"),Rp(void 0!==e.idToken,"internal-error"),Rp(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Xp(e);return Rp(t,"internal-error"),Rp(void 0!==t.exp,"internal-error"),Rp(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Rp(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
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
 */
async function(e,t){const n=await zp(e,{},(async()=>{const n=zt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Wp(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",qp.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new nm;return n&&(Rp("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Rp("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Rp("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nm,this.toJSON())}_performRefresh(){return Ap("not implemented")}}
/**
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
 */function rm(e,t){Rp("string"==typeof e||void 0===e,"internal-error",{appName:t})}class im{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=g(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new em(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Jp(this,this.stsTokenManager.getToken(this.auth,e));return Rp(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Kt(e),r=await n.getIdToken(t),i=Xp(r);Rp(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qp(Yp(i.auth_time)),issuedAtTime:Qp(Yp(i.iat)),expirationTime:Qp(Yp(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Kt(e);await tm(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Rp(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new im(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Rp(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await tm(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jp(this,async function(e,t){return $p(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,g=null!==(o=t.tenantId)&&void 0!==o?o:void 0,p=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:T,stsTokenManager:E}=t;Rp(v&&E,e,"internal-error");const I=nm.fromJSON(this.name,E);Rp("string"==typeof v,e,"internal-error"),rm(l,e.name),rm(h,e.name),Rp("boolean"==typeof w,e,"internal-error"),Rp("boolean"==typeof b,e,"internal-error"),rm(d,e.name),rm(f,e.name),rm(g,e.name),rm(p,e.name),rm(m,e.name),rm(y,e.name);const _=new im({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:g,stsTokenManager:I,createdAt:m,lastLoginAt:y});return T&&Array.isArray(T)&&(_.providerData=T.map((e=>Object.assign({},e)))),p&&(_._redirectEventId=p),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new nm;r.updateFromServerResponse(t);const i=new im({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await tm(i),i}}
/**
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
 */class sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sm.type="NONE";const om=sm;
/**
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
 */function am(e,t,n){return`firebase:${e}:${t}:${n}`}class cm{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=am(this.userKey,r.apiKey,i),this.fullPersistenceKey=am("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?im._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new cm(Mp(om),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Mp(om);const s=am(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=im._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new cm(i,e,n)):new cm(i,e,n)}}
/**
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
 */function um(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pm(t))return"Blackberry";if(mm(t))return"Webos";if(hm(t))return"Safari";if((t.includes("chrome/")||dm(t))&&!t.includes("edge/"))return"Chrome";if(gm(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function lm(e=At()){return/firefox\//i.test(e)}function hm(e=At()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dm(e=At()){return/crios\//i.test(e)}function fm(e=At()){return/iemobile/i.test(e)}function gm(e=At()){return/android/i.test(e)}function pm(e=At()){return/blackberry/i.test(e)}function mm(e=At()){return/webos/i.test(e)}function ym(e=At()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function vm(){return function(){const e=At();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function wm(e=At()){return ym(e)||gm(e)||mm(e)||pm(e)||/windows phone/i.test(e)||fm(e)}
/**
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
 */
function bm(e,t=[]){let n;switch(e){case"Browser":n=um(At());break;case"Worker":n=`${um(At())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mn}/${r}`}
/**
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
 */class Tm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
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
 */class Em{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _m(this),this.idTokenSubscription=new _m(this),this.beforeStateQueue=new Tm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mp(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await cm.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Rp(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tm(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Kt(e):null;return t&&Rp(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Rp(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Mp(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mp(e)||this._popupRedirectResolver;Rp(t,this,"argument-error"),this.redirectPersistenceManager=await cm.create(this,[Mp(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Rp(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Rp(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Im(e){return Kt(e)}class _m{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Wt(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Rp(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Sm(e,t,n){const r=Im(e);Rp(r._canInitEmulator,r,"emulator-config-failed"),Rp(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Cm(t),{host:o,port:a}=function(e){const t=Cm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Dm(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Dm(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function Cm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Dm(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class km{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ap("not implemented")}_getIdTokenResponse(e){return Ap("not implemented")}_linkToIdToken(e,t){return Ap("not implemented")}_getReauthenticationResolver(e){return Ap("not implemented")}}
/**
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
 */async function Nm(e,t){return async function(e,t,n,r,i={}){const s=await $p(e,t,n,r,i);return"mfaPendingCredential"in s&&Dp(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
/**
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
 */class Om extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Om(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dp("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=g(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Om(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Nm(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Nm(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nm(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zt(t)}return e}}
/**
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
 */class Rm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Am extends Rm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */class xm extends Am{constructor(){super("facebook.com")}static credential(e){return Om._fromParams({providerId:xm.PROVIDER_ID,signInMethod:xm.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xm.credentialFromTaggedObject(e)}static credentialFromError(e){return xm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xm.credential(e.oauthAccessToken)}catch(e){return null}}}xm.FACEBOOK_SIGN_IN_METHOD="facebook.com",xm.PROVIDER_ID="facebook.com";
/**
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
 */
class Pm extends Am{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Om._fromParams({providerId:Pm.PROVIDER_ID,signInMethod:Pm.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pm.credentialFromTaggedObject(e)}static credentialFromError(e){return Pm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Pm.credential(t,n)}catch(e){return null}}}Pm.GOOGLE_SIGN_IN_METHOD="google.com",Pm.PROVIDER_ID="google.com";
/**
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
 */
class Mm extends Am{constructor(){super("github.com")}static credential(e){return Om._fromParams({providerId:Mm.PROVIDER_ID,signInMethod:Mm.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mm.credentialFromTaggedObject(e)}static credentialFromError(e){return Mm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Mm.credential(e.oauthAccessToken)}catch(e){return null}}}Mm.GITHUB_SIGN_IN_METHOD="github.com",Mm.PROVIDER_ID="github.com";
/**
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
 */
class Lm extends Am{constructor(){super("twitter.com")}static credential(e,t){return Om._fromParams({providerId:Lm.PROVIDER_ID,signInMethod:Lm.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Lm.credentialFromTaggedObject(e)}static credentialFromError(e){return Lm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Lm.credential(t,n)}catch(e){return null}}}Lm.TWITTER_SIGN_IN_METHOD="twitter.com",Lm.PROVIDER_ID="twitter.com";
/**
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
 */
class Um{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await im._fromIdTokenResponse(e,n,r),s=Fm(n);return new Um({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Fm(n);return new Um({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Fm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */class Vm extends jt{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Vm.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Vm(e,t,n,r)}}function jm(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Vm._fromErrorAndOperation(e,n,t,r);throw n}))}const qm="__sak";
/**
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
 */class Bm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qm,"1"),this.storage.removeItem(qm),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Hm extends Bm{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=At();return hm(e)||ym(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=wm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);vm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hm.type="LOCAL";const $m=Hm;
/**
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
 */class zm extends Bm{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zm.type="SESSION";const Wm=zm;
/**
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
 */
/**
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
 */
class Gm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Gm(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Km(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Gm.receivers=[];class Qm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Km("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function Ym(){return window}
/**
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
 */
function Xm(){return void 0!==Ym().WorkerGlobalScope&&"function"==typeof Ym().importScripts}
/**
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
 */
const Jm="firebaseLocalStorageDb",Zm="firebaseLocalStorage",ey="fbase_key";class ty{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ny(e,t){return e.transaction([Zm],t?"readwrite":"readonly").objectStore(Zm)}function ry(){const e=indexedDB.open(Jm,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Zm,{keyPath:ey})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Zm)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Jm);return new ty(e).toPromise()}(),t(await ry()))}))}))}async function iy(e,t,n){const r=ny(e,!0).put({[ey]:t,value:n});return new ty(r).toPromise()}function sy(e,t){const n=ny(e,!0).delete(t);return new ty(n).toPromise()}class oy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ry()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gm._getInstance(Xm()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Qm(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ry();return await iy(e,qm,"1"),await sy(e,qm),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>iy(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ny(e,!1).get(t),r=await new ty(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>sy(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ny(e,!1).getAll();return new ty(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}oy.type="LOCAL";const ay=oy;
/**
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
 */function cy(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=kp("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}
/**
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
 */
function uy(e,t){return t?Mp(t):(Rp(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */new Vp(3e4,6e4);class ly extends km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nm(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nm(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nm(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hy(e){
/**
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
 */
return async function(e,t,n=!1){const r="signIn",i=await jm(e,r,t),s=await Um._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new ly(e),e.bypassAuthState)}function dy(e){const{auth:t,user:n}=e;return Rp(n,t,"internal-error"),
/**
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
 */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Jp(e,jm(r,i,t,e),n);Rp(s.idToken,r,"internal-error");const o=Xp(s.idToken);Rp(o,r,"internal-error");const{sub:a}=o;return Rp(e.uid===a,r,"user-mismatch"),Um._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Dp(r,"user-mismatch"),e}}(n,new ly(e),e.bypassAuthState)}async function fy(e){const{auth:t,user:n}=e;return Rp(n,t,"internal-error"),async function(e,t,n=!1){const r=await Jp(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Um._forOperation(e,"link",r)}(n,new ly(e),e.bypassAuthState)}
/**
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
 */class gy{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hy;case"linkViaPopup":case"linkViaRedirect":return fy;case"reauthViaPopup":case"reauthViaRedirect":return dy;default:Dp(this.auth,"internal-error")}}resolve(e){xp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const py=new Vp(2e3,1e4);async function my(e,t,n){const r=Im(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Dp(e,"argument-error"),Np(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Rm);const i=uy(r,n);return new yy(r,"signInViaPopup",t,i).executeNotNull()}class yy extends gy{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,yy.currentPopupAction&&yy.currentPopupAction.cancel(),yy.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Rp(e,this.auth,"internal-error"),e}async onExecution(){xp(1===this.filter.length,"Popup operations only handle one event");const e=Km();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(kp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(kp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yy.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(kp(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,py.get())};e()}}yy.currentPopupAction=null;
/**
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
 */
const vy="pendingRedirect",wy=new Map;class by extends gy{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=wy.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return am(vy,e.config.apiKey,e.name)}(t),r=function(e){return Mp(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}wy.set(this.auth._key(),e)}return this.bypassAuthState||wy.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ty(e,t){wy.set(e._key(),t)}async function Ey(e,t,n=!1){const r=Im(e),i=uy(r,t),s=new by(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
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
 */class Iy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sy(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Sy(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(kp(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(_y(e))}saveEventToCache(e){this.cachedEventUids.add(_y(e)),this.lastProcessedEventTime=Date.now()}}function _y(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Sy({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Cy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dy=/^https?/;async function ky(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return $p(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ny(e))return}catch(e){}Dp(e,"unauthorized-domain")}function Ny(e){const t=Lp(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Dy.test(n))return!1;if(Cy.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const Oy=new Vp(3e4,6e4);function Ry(){const e=Ym().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Ay(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ry(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ry(),n(kp(e,"network-request-failed"))},timeout:Oy.get()})}if(null===(i=null===(r=Ym().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ym().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Ym()[t]=()=>{gapi.load?o():n(kp(e,"network-request-failed"))},cy(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw xy=null,e}))}let xy=null;
/**
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
 */
const Py=new Vp(5e3,15e3),My={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ly=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uy(e){const t=e.config;Rp(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?jp(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Mn},i=Ly.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zt(r).slice(1)}`}async function Fy(e){const t=await function(e){return xy=xy||Ay(e),xy}(e),n=Ym().gapi;return Rp(n,e,"internal-error"),t.open({where:document.body,url:Uy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:My,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=kp(e,"network-request-failed"),s=Ym().setTimeout((()=>{r(i)}),Py.get());function o(){Ym().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
 */const Vy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class jy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function qy(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vy),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();n&&(a=dm(u)?"_blank":n),lm(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=At()){var t;return ym(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",a),new jy(null);const h=window.open(t||"",a,l);Rp(h,e,"popup-blocked");try{h.focus()}catch(e){}return new jy(h)}const By="__/auth/handler",Hy="emulator/auth/handler";function $y(e,t,n,r,i,s){Rp(e.config.authDomain,e,"auth-domain-config-required"),Rp(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Mn,eventId:i};if(t instanceof Rm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Am){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${By}`;return jp(e,Hy)}
/**
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
 */(e)}?${zt(a).slice(1)}`}const zy="webStorageSupport";const Wy=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wm,this._completeRedirectFn=Ey,this._overrideRedirectResult=Ty}async _openPopup(e,t,n,r){var i;xp(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return qy(e,$y(e,t,n,Lp(),r),Km())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=$y(e,t,n,Lp(),r),Ym().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(xp(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Fy(e),n=new Iy(e);return t.register("authEvent",(t=>{Rp(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zy,{type:zy},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[zy];void 0!==i&&t(!!i),Dp(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ky(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wm()||hm()||ym()}};var Gy="@firebase/auth",Ky="0.21.0";
/**
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
 */
class Qy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Rp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const Yy=Ut("authIdTokenMaxAge")||300;let Xy=null;var Jy;Jy="Browser",Rn(new Qt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{Rp(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Rp(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:Jy,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bm(Jy)},o=new Em(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mp);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Rn(new Qt("auth-internal",(e=>(e=>new Qy(e))(Im(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(Gy,Ky,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Jy)),Fn(Gy,Ky,"esm2017");const Zy=Ln({apiKey:"AIzaSyAd_Z7ty-pB7bUezEMtDruF_GYWBCfpm7c",authDomain:"pageblox-3637a.firebaseapp.com",projectId:"pageblox-3637a",storageBucket:"pageblox-3637a.appspot.com",messagingSenderId:"708437602502",appId:"1:708437602502:web:8c64a5b759360d267ee7c7",measurementId:"G-BS8MJMCL1B"}),ev=new Pm,tv=(e,t)=>{(function(e){return Kt(e).signOut()})(iv).then((()=>{localStorage.removeItem("pagebloxUserInfo"),e(null),t(!1)})).catch((e=>{alert(e)}))},nv=function(e,t){const n="string"==typeof e?e:t||"(default)",r=An("object"==typeof e?e:Un(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=Lt("firestore");e&&function(e,t,n,r={}){var i;const s=(e=Zd(e,nf))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&ra("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Xo.MOCK_USER;else{t=Vt(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ua(ca.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Xo(s)}e._authCredentials=new fa(new ha(t,n))}}(r,...e)}return r}(Zy),rv=function(e=Un(),t){const n=An(e=Kt(e),vp).getImmediate({identifier:t}),r=Lt("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:Vt(i,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}(Zy),iv=function(e=Un()){const t=An(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=An(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ht(n.getOptions(),null!=t?t:{}))return e;Dp(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Wy,persistence:[ay,$m,Wm]}),r=Ut("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Yy)return;const r=null==t?void 0:t.token;Xy!==r&&(Xy=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Kt(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Kt(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=Mt("auth");return s&&Sm(n,`http://${s}`),n}(Zy),sv="comment";function ov(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function av(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function cv(e){return cv="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cv(e)}function uv(e){av(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===cv(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function lv(e,t){av(2,arguments);var n=uv(e).getTime(),r=ov(t);return new Date(n+r)}var hv={};function dv(){return hv}function fv(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function gv(e){return gv="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gv(e)}function pv(e){return av(1,arguments),e instanceof Date||"object"===gv(e)&&"[object Date]"===Object.prototype.toString.call(e)}function mv(e){if(av(1,arguments),!pv(e)&&"number"!=typeof e)return!1;var t=uv(e);return!isNaN(Number(t))}function yv(e,t){av(2,arguments);var n=ov(t);return lv(e,-n)}var vv=864e5;function wv(e){av(1,arguments);var t=1,n=uv(e),r=n.getUTCDay(),i=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function bv(e){av(1,arguments);var t=uv(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=wv(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=wv(s);return t.getTime()>=i.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function Tv(e){av(1,arguments);var t=bv(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=wv(n);return r}var Ev=6048e5;function Iv(e,t){var n,r,i,s,o,a,c,u;av(1,arguments);var l=dv(),h=ov(null!==(n=null!==(r=null!==(i=null!==(s=null==t?void 0:t.weekStartsOn)&&void 0!==s?s:null==t||null===(o=t.locale)||void 0===o||null===(a=o.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==i?i:l.weekStartsOn)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==n?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=uv(e),f=d.getUTCDay(),g=(f<h?7:0)+f-h;return d.setUTCDate(d.getUTCDate()-g),d.setUTCHours(0,0,0,0),d}function _v(e,t){var n,r,i,s,o,a,c,u;av(1,arguments);var l=uv(e),h=l.getUTCFullYear(),d=dv(),f=ov(null!==(n=null!==(r=null!==(i=null!==(s=null==t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null==t||null===(o=t.locale)||void 0===o||null===(a=o.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==i?i:d.firstWeekContainsDate)&&void 0!==r?r:null===(c=d.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(h+1,0,f),g.setUTCHours(0,0,0,0);var p=Iv(g,t),m=new Date(0);m.setUTCFullYear(h,0,f),m.setUTCHours(0,0,0,0);var y=Iv(m,t);return l.getTime()>=p.getTime()?h+1:l.getTime()>=y.getTime()?h:h-1}function Sv(e,t){var n,r,i,s,o,a,c,u;av(1,arguments);var l=dv(),h=ov(null!==(n=null!==(r=null!==(i=null!==(s=null==t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null==t||null===(o=t.locale)||void 0===o||null===(a=o.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==i?i:l.firstWeekContainsDate)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1),d=_v(e,t),f=new Date(0);f.setUTCFullYear(d,0,h),f.setUTCHours(0,0,0,0);var g=Iv(f,t);return g}var Cv=6048e5;function Dv(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var kv={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return Dv("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):Dv(n+1,2)},d:function(e,t){return Dv(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return Dv(e.getUTCHours()%12||12,t.length)},H:function(e,t){return Dv(e.getUTCHours(),t.length)},m:function(e,t){return Dv(e.getUTCMinutes(),t.length)},s:function(e,t){return Dv(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return Dv(Math.floor(r*Math.pow(10,n-3)),t.length)}},Nv="midnight",Ov="noon",Rv="morning",Av="afternoon",xv="evening",Pv="night",Mv={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return kv.y(e,t)},Y:function(e,t,n,r){var i=_v(e,r),s=i>0?i:1-i;return"YY"===t?Dv(s%100,2):"Yo"===t?n.ordinalNumber(s,{unit:"year"}):Dv(s,t.length)},R:function(e,t){return Dv(bv(e),t.length)},u:function(e,t){return Dv(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Dv(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Dv(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return kv.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return Dv(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var i=function(e,t){av(1,arguments);var n=uv(e),r=Iv(n,t).getTime()-Sv(n,t).getTime();return Math.round(r/Cv)+1}(e,r);return"wo"===t?n.ordinalNumber(i,{unit:"week"}):Dv(i,t.length)},I:function(e,t,n){var r=function(e){av(1,arguments);var t=uv(e),n=wv(t).getTime()-Tv(t).getTime();return Math.round(n/Ev)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):Dv(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):kv.d(e,t)},D:function(e,t,n){var r=function(e){av(1,arguments);var t=uv(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),i=n-r;return Math.floor(i/vv)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):Dv(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var i=e.getUTCDay(),s=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return Dv(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var i=e.getUTCDay(),s=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return Dv(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),i=0===r?7:r;switch(t){case"i":return String(i);case"ii":return Dv(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,i=e.getUTCHours();switch(r=12===i?Ov:0===i?Nv:i/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,i=e.getUTCHours();switch(r=i>=17?xv:i>=12?Av:i>=4?Rv:Pv,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return kv.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):kv.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):Dv(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):Dv(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):kv.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):kv.s(e,t)},S:function(e,t){return kv.S(e,t)},X:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();if(0===i)return"Z";switch(t){case"X":return Uv(i);case"XXXX":case"XX":return Fv(i);default:return Fv(i,":")}},x:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return Uv(i);case"xxxx":case"xx":return Fv(i);default:return Fv(i,":")}},O:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Lv(i,":");default:return"GMT"+Fv(i,":")}},z:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Lv(i,":");default:return"GMT"+Fv(i,":")}},t:function(e,t,n,r){var i=r._originalDate||e;return Dv(Math.floor(i.getTime()/1e3),t.length)},T:function(e,t,n,r){return Dv((r._originalDate||e).getTime(),t.length)}};function Lv(e,t){var n=e>0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),s=r%60;if(0===s)return n+String(i);var o=t||"";return n+String(i)+o+Dv(s,2)}function Uv(e,t){return e%60==0?(e>0?"-":"+")+Dv(Math.abs(e)/60,2):Fv(e,t)}function Fv(e,t){var n=t||"",r=e>0?"-":"+",i=Math.abs(e);return r+Dv(Math.floor(i/60),2)+n+Dv(i%60,2)}var Vv=Mv,jv=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},qv=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},Bv={p:qv,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return jv(e,t);switch(i){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",jv(i,t)).replace("{{time}}",qv(s,t))}},Hv=Bv,$v=["D","DD"],zv=["YY","YYYY"];function Wv(e){return-1!==$v.indexOf(e)}function Gv(e){return-1!==zv.indexOf(e)}function Kv(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Qv={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Yv=function(e,t,n){var r,i=Qv[e];return r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Xv(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var Jv={date:Xv({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Xv({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Xv({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Zv={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ew(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,s=null!=n&&n.width?String(n.width):i;r=e.formattingValues[s]||e.formattingValues[i]}else{var o=e.defaultWidth,a=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[a]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function tw(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(i);if(!s)return null;var o,a=s[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(c)?rw(c,(function(e){return e.test(a)})):nw(c,(function(e){return e.test(a)}));o=e.valueCallback?e.valueCallback(u):u,o=n.valueCallback?n.valueCallback(o):o;var l=t.slice(a.length);return{value:o,rest:l}}}function nw(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function rw(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var iw,sw={code:"en-US",formatDistance:Yv,formatLong:Jv,formatRelative:function(e,t,n,r){return Zv[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:ew({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ew({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:ew({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ew({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ew({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(iw={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(iw.matchPattern);if(!n)return null;var r=n[0],i=e.match(iw.parsePattern);if(!i)return null;var s=iw.valueCallback?iw.valueCallback(i[0]):i[0];s=t.valueCallback?t.valueCallback(s):s;var o=e.slice(r.length);return{value:s,rest:o}}),era:tw({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:tw({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:tw({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:tw({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:tw({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},ow=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,aw=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,cw=/^'([^]*?)'?$/,uw=/''/g,lw=/[a-zA-Z]/;function hw(e,t,n){var r,i,s,o,a,c,u,l,h,d,f,g,p,m,y,v,w,b;av(2,arguments);var T=String(t),E=dv(),I=null!==(r=null!==(i=null==n?void 0:n.locale)&&void 0!==i?i:E.locale)&&void 0!==r?r:sw,_=ov(null!==(s=null!==(o=null!==(a=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(u=n.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==a?a:E.firstWeekContainsDate)&&void 0!==o?o:null===(h=E.locale)||void 0===h||null===(d=h.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==s?s:1);if(!(_>=1&&_<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var S=ov(null!==(f=null!==(g=null!==(p=null!==(m=null==n?void 0:n.weekStartsOn)&&void 0!==m?m:null==n||null===(y=n.locale)||void 0===y||null===(v=y.options)||void 0===v?void 0:v.weekStartsOn)&&void 0!==p?p:E.weekStartsOn)&&void 0!==g?g:null===(w=E.locale)||void 0===w||null===(b=w.options)||void 0===b?void 0:b.weekStartsOn)&&void 0!==f?f:0);if(!(S>=0&&S<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!I.localize)throw new RangeError("locale must contain localize property");if(!I.formatLong)throw new RangeError("locale must contain formatLong property");var C=uv(e);if(!mv(C))throw new RangeError("Invalid time value");var D=fv(C),k=yv(C,D),N={firstWeekContainsDate:_,weekStartsOn:S,locale:I,_originalDate:C},O=T.match(aw).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Hv[t])(e,I.formatLong):e})).join("").match(ow).map((function(r){if("''"===r)return"'";var i=r[0];if("'"===i)return dw(r);var s=Vv[i];if(s)return null!=n&&n.useAdditionalWeekYearTokens||!Gv(r)||Kv(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!Wv(r)||Kv(r,t,String(e)),s(k,r,I.localize,N);if(i.match(lw))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("");return O}function dw(e){var t=e.match(cw);return t?t[1].replace(uw,"'"):e}const fw=(e,t)=>{const n=h();return r((()=>{const r=r=>{var i;r.target instanceof HTMLElement&&n.current&&!n.current.contains(r.target)&&(null===(i=t.current)||void 0===i?void 0:i.contains(r.target))&&e()};return document.addEventListener("click",r,!0),()=>{document.removeEventListener("click",r,!0)}}),[n,t,e]),n},gw=({pageRef:t,showComments:n,setShowComments:r,comments:i,replies:s,navigateToComment:o})=>{const a=fw((()=>{r(!1)}),t),c=i.sort(((e,t)=>e.timestamp>t.timestamp?1:-1));return e.createElement("div",{ref:a,style:{zIndex:1e3},className:"tw-top-0 tw-right-0 tw-w-[25vw] tw-overflow-y-auto tw-bg-gray-900 tw-text-white tw-fixed tw-h-full tw-ease-in-out tw-duration-300 "+(n?"tw-translate-x-0":"tw-translate-x-full")},c.length>0&&e.createElement("ul",{className:"tw-bg-gray-900 tw-mt-16 tw-overflow-y-auto"},c.map((t=>{const n=s.filter((e=>e.parent_comment_id===t.id));return e.createElement("li",{key:t.id,className:"tw-p-5 hover:tw-bg-gray-800",onClick:()=>{return e=t.id,o(e),void r(!1);var e}},e.createElement("div",{className:"tw-flex tw-flex-col tw-text-sm hover:tw-bg-gray-800"},void 0!==t.timestamp.nanoseconds&&e.createElement("span",{className:"text-gray-400 tw-self-end"},hw(t.timestamp.toDate(),"MMM dd hh:mm a")),e.createElement("div",{className:"tw-flex tw-items-center"},e.createElement("span",{className:"tw-h-4 tw-w-4 tw-inline-block",style:{borderRadius:"50%",background:t.profileColor}}),e.createElement("span",{className:"tw-text-white tw-truncate tw-ml-2"},t.profileName),t.resolved&&e.createElement("span",{className:"tw-ml-2"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-check"},e.createElement("polyline",{points:"20 6 9 17 4 12"}))))),e.createElement("p",{className:"tw-mt-2"},t.comment),e.createElement("div",{className:"tw-mt-2 tw-flex tw-justify-end tw-items-center tw-text-sm tw-gap-2"},n.length>0&&e.createElement("p",{className:"tw-text-gray-100"},`${n.length} ${1===n.length?"reply":"replies"}`),t.uploadedFilePath&&e.createElement("span",null,e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#cbd5e1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-image"},e.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.createElement("polyline",{points:"21 15 16 10 5 21"})))))}))))},pw=({selectedComment:t,screenshotUrl:n})=>e.createElement("div",{className:"tw-flex tw-flex-col tw-gap-2 tw-p-5"},e.createElement("div",{className:"tw-flex tw-flex-col tw-w-full"},void 0!==t.timestamp&&e.createElement("span",{className:"tw-text-sm tw-text-gray-400 tw-ml-5 tw-self-end"},hw(t.timestamp.toDate(),"MMM dd hh:mm a")),e.createElement("div",{className:"tw-flex tw-items-center"},e.createElement("span",{className:"tw-h-4 tw-w-4 tw-inline-block",style:{borderRadius:"50%",background:t.profileColor}}),e.createElement("span",{className:"tw-text-white tw-ml-2"},`${t.profileName}`))),e.createElement("p",{className:"tw-text-gray-300 tw-m-3"},t.comment),n&&e.createElement("div",{className:"tw-my-2 tw-py-2"},e.createElement("img",{src:n,alt:"Comment Attachment",className:"tw-h-full tw-object-contain",width:300})),e.createElement("div",{className:"tw-bg-gray-700",style:{height:"1px"}})),mw=({replies:t,inputRef:n,newReply:r,setNewReply:i,handleReply:s})=>{const o=t.sort(((e,t)=>e.timestamp>t.timestamp?1:-1));return e.createElement("div",{className:"tw-w-full tw-flex tw-flex-col tw-items-center tw-text-sm tw-px-3"},e.createElement("div",{className:"tw-overflow-y-auto tw-w-full"},o.length>0&&o.map((t=>e.createElement("div",{className:"tw-flex tw-flex-col tw-gap-2 tw-px-5 tw-py-3 tw-ml-5",key:t.id},e.createElement("div",{className:"tw-flex tw-items-center tw-justify-between"},e.createElement("div",null,e.createElement("span",{className:"tw-h-3 tw-w-3 tw-inline-block",style:{borderRadius:"50%",backgroundColor:t.profileColor}}),e.createElement("span",{className:"tw-text-white tw-ml-2"},`${t.author}`)),void 0!==t.timestamp&&e.createElement("span",{className:"tw-text-gray-400 tw-ml-5"},hw(t.timestamp.toDate(),"MMM dd hh:mm a"))),e.createElement("p",{className:"tw-text-gray-300 tw-m-3"},t.message))))),e.createElement("textarea",{ref:n,value:r,onChange:e=>i(e.target.value),onKeyDown:s,id:"message",rows:2,className:"tw-block tw-p-2.5 tw-w-full tw-text-sm tw-rounded-lg tw-border tw-bg-gray-700 tw-border-gray-600 tw-placeholder-gray-400 tw-text-white",placeholder:"Add a reply"}))},yw=({selectedComment:t,onResolveChange:n,deleteComment:r})=>e.createElement("div",{className:"tw-flex tw-items-center tw-justify-start tw-w-full tw-gap-2 tw-mt-3 tw-p-2 tw-mx-2"},(null==t?void 0:t.resolved)?e.createElement("button",{className:"tw-px-3 tw-py-2 tw-text-sm tw-font-medium  tw-bg-yellow-700 tw-white hover:tw-bg-yellow-800 tw-rounded-lg",onClick:()=>{n(t.id,!1)}},"Unresolve"):e.createElement("button",{className:"tw-px-3 tw-py-2 tw-text-sm tw-font-medium  tw-bg-green-700 tw-white hover:tw-bg-green-800 tw-rounded-lg",onClick:()=>{n(t.id,!0)}},"Resolve"),e.createElement("button",{className:"tw-px-3 tw-py-2 tw-text-sm tw-font-medium  tw-bg-red-700 tw-white hover:tw-bg-red-800 tw-rounded-lg",onClick:e=>{r(t.id)}},"Delete")),vw=({pageRef:t,selectedComment:n,setSelectedComment:i,deleteComment:o,fetchReplies:a,saveReply:c,onResolveChange:u,setShowCommentView:l})=>{const[d,f]=s(""),[g,m]=s(""),y=h(null),v=n?a(null==n?void 0:n.id):[],w=fw((()=>{i(null),l(!1)}),t),b=()=>p(void 0,void 0,void 0,(function*(){if(null==n?void 0:n.uploadedFilePath){const e=bp(rv,n.uploadedFilePath);try{const t=yield function(e){return hp(e=Kt(e))}(e);m(t)}catch(e){console.log("An error occurred fetching screenshots",e)}}}));return r((()=>{b()}),[null==n?void 0:n.uploadedFilePath]),e.createElement(e.Fragment,null,e.createElement("div",{ref:w,style:{zIndex:"1000"},className:"tw-top-0 tw-right-0 tw-w-[25vw] tw-overflow-y-auto tw-bg-gray-900 tw-text-white tw-fixed tw-h-full tw-ease-in-out tw-duration-300 "+(null!==n?"tw-translate-x-0":"tw-translate-x-full")},n&&e.createElement(yw,{selectedComment:n,onResolveChange:u,deleteComment:o}),n&&e.createElement(pw,{selectedComment:n,screenshotUrl:g}),e.createElement(mw,{replies:v,inputRef:y,newReply:d,setNewReply:f,handleReply:e=>{var t;n&&d.length>0&&"Enter"===e.key&&(c(n.id,d),f(""),null===(t=y.current)||void 0===t||t.blur())}})))},ww=({setShowComments:t,comments:n,setDisplayName:r,setReviewMode:i})=>e.createElement("div",{className:"tw-right-7 tw-top-5 tw-z-50 tw-fixed tw-flex tw-items-center tw-gap-2"},e.createElement("button",{className:"tw-border focus:tw-outline-none focus:tw-ring-4 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-tw-mr-2 tw-bg-gray-800 tw-text-white tw-border-gray-600 hover:tw-bg-gray-700 hover:tw-border-gray-600 focus:tw-ring-gray-700",onClick:()=>{tv(r,i)}},"Log out"),e.createElement("button",{type:"button",className:"tw-relative tw-bg-gray-700 hover:tw-bg-gray-600 tw-rounded-full tw-p-2.5 tw-inline-flex tw-items-center",onClick:()=>t(!0)},e.createElement("svg",{className:"feather feather-message-square",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})),n.length>0&&e.createElement("div",{className:"tw-absolute tw-inline-flex tw-items-center tw-justify-center tw-w-6 tw-h-6 tw-text-xs tw-font-bold tw-text-white tw-bg-indigo-700 tw-border-2 tw-rounded-full -tw-top-2 -tw-right-2 tw-border-gray-900"},n.length))),bw=({showCommentView:t,setShowCommentView:n,pageRef:r,comments:i,replies:o,deleteComment:a,fetchReplies:c,saveReply:u,onResolveChange:l,selectedComment:h,setSelectedComment:d,setDisplayName:f,setReviewMode:g})=>{const[p,m]=s(!1);return e.createElement("div",{className:"tw-w-full tw-flex tw-items-center tw-justify-start tw-p-5 tw-fixed tw-h-20 tw-bg-gray-900",style:{zIndex:100}},p||t?e.createElement("button",{type:"button",style:{zIndex:1050},className:"tw-fixed tw-right-7 tw-top-5 tw-py-2 tw-px-3 tw-text-sm tw-font-medium tw-border tw-border-gray-600 tw-bg-gray-800 tw-text-gray-400 hover:tw-text-white hover:tw-bg-gray-700 tw-rounded-lg",onClick:()=>{m(!1),n(!1),d(null)}},"Close"):e.createElement("div",{className:"tw-flex tw-items-end"},e.createElement(ww,{setShowComments:m,comments:i,setDisplayName:f,setReviewMode:g})),e.createElement(gw,{pageRef:r,showComments:p,setShowComments:m,comments:i,replies:o,navigateToComment:e=>{if(e){const t=i.filter((t=>t.id===e))[0];if(d(t),!t.resolved){const t=document.getElementById(e);if(t){const e=(null==t?void 0:t.getBoundingClientRect().top)+window.scrollY-100;window.scrollTo({top:e,behavior:"smooth"})}}n(!0)}}}),t&&e.createElement(vw,{pageRef:r,selectedComment:h,setSelectedComment:d,deleteComment:a,fetchReplies:c,saveReply:u,onResolveChange:l,setShowCommentView:n}))},Tw=({block:t,pageRef:n,setSelectedComment:i,showReplies:o,shouldHideLabel:a=!1,isSelectedComment:c=!1,setShowCommentView:u})=>{const{id:l,profileColor:h,profileName:f,dom:g,x:p,y:m}=t||{},[y,v]=s(null),w=fw((()=>{i(null),u(!1)}),n),[{isDragging:b},T]=tt((()=>({type:sv,item:{id:l,domElement:y,x:p,y:m},collect:e=>({isDragging:e.isDragging()})})),[l,y,p,m]);return r((()=>{const e=document.evaluate(g,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;if(e)return e.classList.add("tw-relative"),v(e),()=>{e.classList.remove("tw-static")}}),[g]),b?e.createElement("div",{ref:T}):y?d(e.createElement("div",{id:l,ref:T,style:{position:"absolute",left:p,top:m,zIndex:250,cursor:"default"},onClick:e=>{e.preventDefault(),e.nativeEvent.stopImmediatePropagation(),o(l)}},e.createElement("div",{ref:w,className:"tw-flex tw-gap-2"},e.createElement("span",{className:`${c?"tw-w-12 tw-h-12":"tw-w-8 tw-h-8"} tw-flex tw-items-center tw-justify-center tw-shadow ${a?"tw-opacity-50":"tw-opacity-100"}`,style:{borderRadius:"50%",backgroundColor:h}},e.createElement("p",{className:"tw-text-white tw-font-semibold tw-uppercase "+(c?"tw-text-2xl":"tw-text-xl")},f.charAt(0))))),y):e.createElement(e.Fragment,null)},Ew=({blocks:t,handleShowComment:n,pageRef:r,selectedComment:i,setSelectedComment:s,setShowCommentView:o})=>{const a=null!==i;return e.createElement("div",null,t.map((t=>{if(!1===t.resolved)return a?e.createElement(Tw,{key:t.id,pageRef:r,setSelectedComment:s,block:t,showReplies:n,shouldHideLabel:(null==i?void 0:i.id)!==t.id,isSelectedComment:i.id===t.id,setShowCommentView:o}):e.createElement(Tw,{key:t.id,block:t,pageRef:r,setSelectedComment:s,showReplies:n,setShowCommentView:o})})))};const Iw=({shouldDisplay:t,reviewMode:n,onWidgetClick:r})=>e.createElement("div",{className:"tw-fixed tw-bottom-5 tw-right-2 "+(t?"tw-block":"tw-hidden")},e.createElement("button",{className:(n?"tw-ring-green-500":"tw-ring-pink-500")+" tw-bg-slate-700 hover:bg-slate-900 tw-rounded-full tw-ring-4 tw-p-2.5 tw-inline-flex tw-items-center tw-mr-2",onClick:r},e.createElement("img",{src:"data:image/svg+xml,%3csvg width='59' height='59' viewBox='0 0 59 59' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M30 26L59 14V44.908L30 59V26Z' fill='url(%23paint0_radial_1_2)'/%3e%3cpath d='M0 46.3544L30 59V26L0 13V46.3544Z' fill='url(%23paint1_radial_1_2)'/%3e%3cpath d='M30 26L59 14L30.102 0L0 13L30 26Z' fill='url(%23paint2_radial_1_2)'/%3e%3cdefs%3e%3cradialGradient id='paint0_radial_1_2' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(59 14) rotate(122.8) scale(53.535 34.3015)'%3e%3cstop stop-color='%23D7DDE8'/%3e%3cstop offset='1' stop-color='%23757F9A'/%3e%3c/radialGradient%3e%3cradialGradient id='paint1_radial_1_2' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(8.9407e-07 13) rotate(56.8887) scale(54.9181 35.8162)'%3e%3cstop stop-color='%23D7DDE8'/%3e%3cstop offset='1' stop-color='%23757F9A'/%3e%3c/radialGradient%3e%3cradialGradient id='paint2_radial_1_2' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(29 26) rotate(-90) scale(26 54.6691)'%3e%3cstop stop-color='%23D7DDE8'/%3e%3cstop offset='1' stop-color='%23757F9A'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e",height:30,width:30,alt:"Pageblox logo"}))),_w=e=>{if(e){const[t,n]=_w(e.parentElement);return[(e.scrollTop||0)+t,(e.scrollLeft||0)+n]}return[0,0]};function Sw(e){var t,n;if(""!==e.id)return'id("'+e.id+'")';if(e===document.body)return e.tagName;var r=0,i=null!==(n=null===(t=e.parentNode)||void 0===t?void 0:t.childNodes)&&void 0!==n?n:[];if(i.length>0)for(var s=0;s<(null==i?void 0:i.length);s++){var o=i[s];if(o===e&&e.parentNode)return Sw(e.parentNode)+"/"+e.tagName+"["+(r+1)+"]";1===o.nodeType&&o.tagName===e.tagName&&r++}return""}const Cw=({showCreateView:t,toggleCreateModal:n,authorName:i,authorColor:o,onSaveComment:a})=>{const c=h(null),u=h(null),[l,d]=s(""),[f,g]=s(!1),[p,m]=s(null),[y,v]=s(null),w=()=>{n(!1)};return r((()=>{null!==c.current&&(()=>{var e;null===(e=c.current)||void 0===e||e.focus()})()}),[c]),r((()=>{let e,t=!1;return p&&(e=new FileReader,e.onload=e=>{var n;const r=null===(n=e.target)||void 0===n?void 0:n.result;r&&!t&&v(r)},e.readAsDataURL(p)),()=>{t=!0,e&&1===e.readyState&&e.abort()}}),[p]),e.createElement("div",{className:(t?"tw-block":"tw-hidden")+" tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-w-full tw-p-4 tw-overflow-x-hidden tw-overflow-y-auto md:tw-inset-0 tw-h-[calc(100%-1rem)] md:tw-h-full",style:{zIndex:200},onClick:w},e.createElement("div",{className:"tw-relative tw-w-full tw-h-full tw-max-w-lg md:tw-h-auto"},e.createElement("div",{className:"tw-relative tw-rounded-lg tw-shadow tw-bg-gray-800 tw-overflow-hidden tw-p-2",onClick:e=>{e.stopPropagation()}},e.createElement("div",{className:"tw-flex tw-items-center tw-gap-2 tw-my-2 tw-ml-2"},e.createElement("span",{className:"tw-h-6 tw-w-6 tw-inline-block",style:{borderRadius:"50%",background:o}}),e.createElement("h3",{className:"tw-font-semibold tw-lowercase"},i)),e.createElement("div",{className:"tw-mt-2 tw-py-2 tw-px-4 tw-rounded-t-lg tw-space-y-2 tw-overflow-y-auto tw-h-40"},e.createElement("textarea",{ref:c,placeholder:"Add Comment",className:"tw-w-full tw-px-0 tw-text-sm tw-resize-none tw-h-28 tw-overflow-hidden tw-text-gray-300 tw-outline-none tw-bg-inherit",value:l,onKeyDown:e=>{"Enter"===e.key&&!e.shiftKey&&l.length>0&&a(l)},onChange:e=>d(e.target.value),onPaste:e=>{const t=e.clipboardData.items[0];if(0===t.type.indexOf("image")){const e=t.getAsFile();if(e){let t=new FileReader;t.onload=e=>{var t;const n=null===(t=e.target)||void 0===t?void 0:t.result;n&&v(n)},m(e),t.readAsDataURL(e)}}}}),y&&e.createElement("div",{className:"tw-relative tw-my-2",style:{width:300},onMouseOver:()=>{g(!0)},onMouseOut:()=>{g(!1)}},e.createElement("button",{className:(f?"tw-block":"tw-hidden")+" tw-absolute tw-top-2 tw-right-2 tw-rounded-lg tw-p-2.5 tw-inline-flex tw-bg-gray-700 hover:tw-bg-gray-900 tw-justify-center tw-items-center",onClick:()=>{m(null),v(null)}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-trash"},e.createElement("polyline",{points:"3 6 5 6 21 6"}),e.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))),e.createElement("img",{src:y,alt:"Comment Attachment",className:"tw-w-full tw-h-full tw-object-contain"}))),e.createElement("div",{className:"tw-flex tw-justify-between tw-items-center tw-gap-2 tw-mt-2"},e.createElement("div",{className:"tw-tooltip tw-tooltip-right","data-tip":"Attach an image or video."},e.createElement("input",{type:"file",ref:u,onChange:e=>{e.target.files&&m(e.target.files[0])},className:"tw-hidden",accept:"image/*"}),e.createElement("button",{className:"tw-rounded-lg tw-p-2.5 tw-inline-flex tw-items-center tw-bg-inherit hover:tw-bg-gray-700",onClick:()=>{var e;return null===(e=u.current)||void 0===e?void 0:e.click()}},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#cbd5e1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-paperclip"},e.createElement("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"})))),e.createElement("div",null,e.createElement("button",{className:"tw-bg-blue-600 hover:tw-bg-blue-700 tw-mr-2 tw-mb-2 tw-py-2.5 tw-px-5 tw-text-sm tw-rounded-lg tw-font-medium tw-text-white",disabled:0===l.length,onClick:()=>{a(l,p)}},"Create"),e.createElement("button",{className:"tw-text-white tw-bg-gray-700 hover:tw-bg-gray-600 tw-mb-2 tw-mr-2 tw-py-2.5 tw-px-5 tw-text-sm tw-rounded-lg tw-font-medium",onClick:w},"Cancel"))))))},Dw="production"===process.env.NODE_ENV?"comments":"comments-dev",kw="production"===process.env.NODE_ENV?"replies":"replies-dev",Nw=`#${Math.floor(16777215*Math.random()).toString(16)}`,Ow=t=>{const[n,i]=s([]),[a,c]=s([]),[u,l]=s(!1),[d,f]=s(null),[g,m]=s(!1),[y,v]=s(!1),[w,b]=s(null),[T,E]=s(!0),[I,_]=s(null),[S,C]=s(!1),D=h(null),k=h(null),N="undefined"!=typeof window?window.location.pathname:"",O=t.projectId;r((()=>{var e,t;const n=new URLSearchParams(window.location.search);n.has("enable_pageblox")&&localStorage.setItem("pagebloxEnabled",null!==(e=n.get("enable_pageblox"))&&void 0!==e?e:"false"),C(null!==(t="true"===localStorage.getItem("pagebloxEnabled"))&&void 0!==t&&t)}),[]),r((()=>{if(R(),t.excludePaths){const e=null==t?void 0:t.excludePaths.includes(N);E(!e)}}),[]),r((()=>{if("undefined"!=typeof window){const e=hg(Gf(af(nv,Dw),Qf("pathname","==",window.location.pathname),Qf("projectId","==",O)),(e=>{const t=[];e.forEach((e=>{t.push(Object.assign({id:e.id},e.data()))})),i(t)}));return()=>{e()}}}),[]),r((()=>{if("undefined"!=typeof window&&n.length>0){const e=hg(Gf(af(nv,kw),Qf("parent_comment_id","in",n.map((e=>e.id.toString())))),(e=>{const t=[];e.forEach((e=>{t.push(e.data())})),c(t)}));return()=>{e()}}}),[n]);const R=()=>{const e=localStorage.getItem("pagebloxUserInfo");_(e?JSON.parse(e).displayName:null)},A=o(((e,t,n,r)=>p(void 0,void 0,void 0,(function*(){yield ug(cf(nv,Dw,e),{dom:Sw(r),x:t,y:n})}))),[n,i]),[,x]=st((()=>({accept:sv,drop(e,t){const n=t.getDifferenceFromInitialOffset(),r=t.getClientOffset(),i=e.domElement,s=r&&document.elementFromPoint(null==r?void 0:r.x,null==r?void 0:r.y);if(s){D.current&&s===D.current&&(D.current.style.backgroundColor="",D.current=null);const t={x:i.getBoundingClientRect().left+e.x,y:i.getBoundingClientRect().top+e.y},r={x:Math.round(t.x+(null==n?void 0:n.x)),y:Math.round(t.y+(null==n?void 0:n.y))},o=r.x-s.getBoundingClientRect().left,a=r.y-s.getBoundingClientRect().top;A(e.id,o,a,s)}},hover(e,t){const n=t.getClientOffset();if(n){const e=document.elementFromPoint(null==n?void 0:n.x,null==n?void 0:n.y);D.current!==e&&(D.current?(D.current.style.backgroundColor="",e.style.backgroundColor="rgb(59 130 246)",D.current=e):(D.current=e,D.current.style.backgroundColor="rgb(59 130 246)"))}}})),[A]),P=(e,t)=>p(void 0,void 0,void 0,(function*(){yield function(e,t){const n=Zd(e.firestore,mf),r=cf(e),i=tg(e.converter,t);return dg(n,[Of(Nf(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Du.exists(!1))]).then((()=>r))}(af(nv,kw),{id:fg(),author:I,profileColor:Nw,message:t,parent_comment_id:e,timestamp:new Date})})),M=(e,t)=>p(void 0,void 0,void 0,(function*(){let n="";if(t){const e=bp(rv,`attachments/${t.name}`);yield wp(e,t),n=`attachments/${t.name}`}if(w&&void 0!==typeof window){v(!1);let t=Object.assign(Object.assign(Object.assign({},w),{comment:e}),n.length>0&&{uploadedFilePath:n});yield function(e,t,n){e=Zd(e,rf);const r=Zd(e.firestore,mf),i=tg(e.converter,t,n);return dg(r,[Of(Nf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Du.none())])}(cf(nv,Dw,t.id),t),b(null)}})),L=e=>p(void 0,void 0,void 0,(function*(){yield lg(cf(nv,Dw,e));const t=Gf(af(nv,kw),Qf("parent_comment_id","==",e));(yield cg(t)).forEach((e=>p(void 0,void 0,void 0,(function*(){yield lg(cf(nv,kw,e.id))})))),f(null)})),U=e=>{const t=e.target.getBoundingClientRect();if(null!==t&&I){const n=e.target,[r,i]=_w(n),s=e.pageX-(t.left+i),o=e.pageY-(t.top+r),a={id:fg(),timestamp:new Date,profileColor:Nw,profileName:I,comment:"",resolved:!1,dom:Sw(n),projectId:O,pathname:window.location.pathname,x:s,y:o};$(!0,a)}},F=e=>{const t=e.target;"mouseover"===e.type?t.style.backgroundColor="rgb(59 130 246)":"mouseout"===e.type&&(t.style.backgroundColor="")},V=e=>{e.preventDefault(),e.nativeEvent.stopImmediatePropagation()},j=e=>a.filter((t=>t.parent_comment_id===e)),q=(e,t)=>p(void 0,void 0,void 0,(function*(){yield ug(cf(nv,Dw,e),{resolved:t}),f(null),m(!1)})),B=e=>{const t=n.filter((t=>t.id===e))[0];f(t),m(!0)},H=()=>{I?l(!u):((e,t)=>{my(iv,ev).then((n=>{localStorage.setItem("pagebloxUserInfo",JSON.stringify({displayName:n.user.displayName,email:n.user.email,photoURL:n.user.photoURL})),n.user.displayName&&e(n.user.displayName),t(!0)})).catch((e=>{alert(e)}))})(_,l)},$=(e,t)=>{e&&t?(v(!0),b(t)):(v(!1),b(null))};return S?e.createElement(e.Fragment,null,u?e.createElement(e.Fragment,null,e.createElement(bw,{showCommentView:g,setShowCommentView:m,pageRef:k,comments:n,replies:a,deleteComment:L,fetchReplies:j,saveReply:P,onResolveChange:q,selectedComment:d,setSelectedComment:f,setDisplayName:_,setReviewMode:l}),e.createElement("div",{ref:k,className:"tw-pt-20"},e.createElement("div",{id:"pageblox-surface",ref:x,style:{position:"relative",cursor:"pointer"}},e.createElement(Ew,{blocks:n,handleShowComment:B,pageRef:k,selectedComment:d,setSelectedComment:f,setShowCommentView:m}),e.createElement("div",{onMouseOver:F,onMouseOut:F,onDoubleClickCapture:U,onClickCapture:V},t.children),w&&e.createElement(Cw,{showCreateView:y,toggleCreateModal:$,authorName:w.profileName,authorColor:w.profileColor,onSaveComment:M}),e.createElement(Iw,{shouldDisplay:T,reviewMode:u,onWidgetClick:H})))):e.createElement(e.Fragment,null,t.children,e.createElement(Iw,{shouldDisplay:T,reviewMode:u,onWidgetClick:H}))):e.createElement(e.Fragment,null,t.children)},Rw=t=>e.createElement(Re,{backend:Dt},e.createElement(Ow,{projectId:t.projectId,excludePaths:t.excludePaths},t.children));export{Rw as PagebloxProvider};
//# sourceMappingURL=index.js.map
