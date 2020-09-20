(function(e){function t(t){for(var l,r,a=t[0],d=t[1],s=t[2],u=0,p=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(e[l]=d[l]);i&&i(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],l=!0,a=1;a<o.length;a++){var d=o[a];0!==n[d]&&(l=!1)}l&&(c.splice(t--,1),e=r(r.s=o[0]))}return e}var l={},n={app:0},c=[];function r(t){if(l[t])return l[t].exports;var o=l[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=l,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(o,l,function(t){return e[t]}.bind(null,l));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var i=d;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var l=o("7a23");const n={id:"app"},c={class:"todoapp"};function r(e,t,o,r,a,d){const s=Object(l["n"])("Header"),i=Object(l["n"])("List"),u=Object(l["n"])("Footer"),p=Object(l["n"])("CopyRight");return Object(l["j"])(),Object(l["d"])("div",n,[Object(l["g"])("section",c,[Object(l["g"])(s),r.todosLength?(Object(l["j"])(),Object(l["d"])(i,{key:0})):Object(l["e"])("",!0),r.todosLength?(Object(l["j"])(),Object(l["d"])(u,{key:1})):Object(l["e"])("",!0)]),Object(l["g"])(p)])}var a=o("5502");const d={class:"header"},s=Object(l["g"])("h1",null,"todos",-1);function i(e,t,o,n,c,r){return Object(l["j"])(),Object(l["d"])("header",d,[s,Object(l["g"])("input",{class:"new-todo",placeholder:"What needs to be done?",value:e.name,onInput:t[1]||(t[1]=(...e)=>n.handleChange(...e)),onKeyup:t[2]||(t[2]=(...e)=>n.handleSubmit(...e))},null,40,["value"])])}const u="Enter";var p={setup(){const e=Object(a["b"])(),t=Object(l["k"])({name:""}),o=e=>t.name=e.target.value,n=o=>{o.key===u&&(e.dispatch("onCreate",t.name),t.name="")};return{...Object(l["p"])(t),handleChange:o,handleSubmit:n}}};p.render=i;var b=p;const m={class:"main"},j={class:"todo-list"};function O(e,t,o,n,c,r){const a=Object(l["n"])("Item");return Object(l["j"])(),Object(l["d"])("section",m,[Object(l["g"])("input",{id:"toggle-all",class:"toggle-all",type:"checkbox",checked:n.areAllCompleted,readonly:""},null,8,["checked"]),Object(l["g"])("label",{htmlFor:"toggle-all",onClick:t[1]||(t[1]=(...e)=>n.onCompleteAll(...e))}),Object(l["g"])("ul",j,[(Object(l["j"])(!0),Object(l["d"])(l["a"],null,Object(l["m"])(n.visibleTodos,e=>(Object(l["j"])(),Object(l["d"])(a,{key:e.id,todo:e,onRemove:n.onRemove,onUpdate:n.onUpdate},null,8,["todo","onRemove","onUpdate"]))),128))])])}const f={class:"view"};function g(e,t,o,n,c,r){return Object(l["j"])(),Object(l["d"])("li",{class:{completed:o.todo.completed,editing:n.editing}},[Object(l["g"])("div",f,[Object(l["g"])("input",{class:"toggle",type:"checkbox",checked:o.todo.completed,onChange:t[1]||(t[1]=(...e)=>n.handleCompleted(...e))},null,40,["checked"]),Object(l["g"])("label",{onDblclick:t[2]||(t[2]=(...e)=>n.handleEdit(...e))},Object(l["o"])(o.todo.name),33),Object(l["g"])("button",{class:"destroy",onClick:t[3]||(t[3]=(...e)=>n.handleRemove(...e))})]),n.editing?(Object(l["j"])(),Object(l["d"])("input",{key:0,class:"edit",value:n.name,onInput:t[4]||(t[4]=(...e)=>n.handleChange(...e)),onBlur:t[5]||(t[5]=(...e)=>n.handleBlur(...e))},null,40,["value"])):Object(l["e"])("",!0)],2)}var h={props:{todo:{type:Object,required:!0}},setup(e,{emit:t}){const o=Object(l["l"])(!1),n=Object(l["l"])(e.todo.name),c=()=>o.value=!0,r=()=>t("update",{id:e.todo.id,completed:!e.todo.completed}),a=()=>t("remove",e.todo.id),d=e=>n.value=e.target.value,s=()=>{t("update",{id:e.todo.id,name:n.value}),o.value=!1};return{name:n,editing:o,handleRemove:a,handleCompleted:r,handleEdit:c,handleChange:d,handleBlur:s}}};h.render=g;var v=h,C={components:{Item:v},setup(){const e=Object(a["b"])(),t=t=>e.dispatch("onRemove",t),o=t=>e.dispatch("onUpdate",t),n=()=>e.dispatch("onCompleteAll");return{visibleTodos:Object(l["b"])(()=>e.getters.visibleTodos),areAllCompleted:Object(l["b"])(()=>e.getters.areAllCompleted),onRemove:t,onUpdate:o,onCompleteAll:n}}};C.render=O;var y=C;const k={class:"footer"},w={class:"todo-count"},T={class:"filters"};function x(e,t,o,n,c,r){return Object(l["j"])(),Object(l["d"])("footer",k,[Object(l["g"])("span",w,[Object(l["g"])("strong",null,Object(l["o"])(n.itemsLeft),1),Object(l["g"])("span",null,Object(l["o"])(n.itemText)+" left",1)]),Object(l["g"])("ul",T,[(Object(l["j"])(!0),Object(l["d"])(l["a"],null,Object(l["m"])(n.filterTitles,e=>(Object(l["j"])(),Object(l["d"])("li",{key:e.key},[Object(l["g"])("a",{href:"./#",class:{selected:e.key===n.filter},onClick:t=>n.onFilterSelect(e.key)},Object(l["o"])(e.value),11,["onClick"])]))),128))]),n.completedCount?(Object(l["j"])(),Object(l["d"])("button",{key:0,class:"clear-completed",onClick:t[1]||(t[1]=(...e)=>n.onClearCompleted(...e))},"Clear completed")):Object(l["e"])("",!0)])}const S={all:"all",active:"active",completed:"completed"};var A={setup(){const e=Object(a["b"])(),t=[{key:S.all,value:"All"},{key:S.active,value:"Active"},{key:S.completed,value:"Completed"}],o=()=>e.dispatch("onClearCompleted"),n=t=>e.dispatch("onFilterSelect",t);return{filterTitles:t,filter:Object(l["b"])(()=>e.state.filter),itemsLeft:Object(l["b"])(()=>e.getters.itemsLeft),completedCount:Object(l["b"])(()=>e.getters.completedCount),itemText:Object(l["b"])(()=>1===e.getters.itemsLeft?" item":" items"),onClearCompleted:o,onFilterSelect:n}}};A.render=x;var L=A;const F={class:"info"},R=Object(l["g"])("p",null,"Double-click to edit a todo",-1),_=Object(l["g"])("p",null,[Object(l["f"])(" Created by "),Object(l["g"])("a",{href:"http://github.com/blacksonic/"},[Object(l["g"])("x-username")])],-1),P=Object(l["g"])("p",null,[Object(l["f"])("Part of "),Object(l["g"])("a",{href:"http://todomvc.com"},"TodoMVC")],-1);function E(e,t,o,n,c,r){return Object(l["j"])(),Object(l["d"])("footer",F,[R,_,P])}const I={};I.render=E;var M=I;const U="todoapp_todos";class J{static loadTodos(){return JSON.parse(window.localStorage.getItem(U)||"[]")}static storeTodos(e){window.localStorage.setItem(U,JSON.stringify(e))}}var B={components:{CopyRight:M,Header:b,List:y,Footer:L},setup(){const e=Object(a["b"])();return Object(l["i"])(()=>{e.dispatch("onLoad",J.loadTodos()),Object(l["r"])(()=>{J.storeTodos(e.state.todos)})}),{todosLength:Object(l["b"])(()=>e.state.todos.length)}}};B.render=r;var H=B;o("1d55");function D(e){return e.filter(e=>e.completed)}function N(e){return e.filter(e=>!e.completed)}function q(e,t){switch(t){case S.all:return[...e];case S.completed:return D(e);case S.active:return N(e);default:return[...e]}}const K={visibleTodos:e=>q(e.todos,e.filter),areAllCompleted:e=>e.todos.length&&e.todos.every(e=>e.completed),itemsLeft:e=>N(e.todos).length,completedCount:e=>D(e.todos).length};var V=o("ec26");const W={load:"load",create:"create",remove:"remove",update:"update",completeAll:"complete_all",clearCompleted:"clear_completed",selectFilter:"select_filter"},z=e=>e.length&&D(e).length===e.length,G={[W.load]:(e,{todos:t})=>e.todos=t,[W.create]:(e,{name:t})=>e.todos=[...e.todos,{id:Object(V["a"])(),name:t,completed:!1}],[W.update]:(e,t)=>e.todos=e.todos.map(e=>e.id===t.id?{...e,...t}:e),[W.remove]:(e,{id:t})=>e.todos=e.todos.filter(e=>e.id!==t),[W.completeAll]:e=>{e.todos=e.todos.map(t=>({...t,completed:!z(e)}))},[W.clearCompleted]:e=>e.todos=N(e.todos)},Q={[W.selectFilter]:(e,{filter:t})=>e.filter=t},X={onLoad:({commit:e},t)=>e(W.load,{todos:t}),onCreate:({commit:e},t)=>e(W.create,{name:t}),onRemove:({commit:e},t)=>e(W.remove,{id:t}),onUpdate:({commit:e},t)=>e(W.update,t),onCompleteAll:({commit:e})=>e(W.completeAll),onClearCompleted:({commit:e})=>e(W.clearCompleted)},Y={onFilterSelect:({commit:e},t)=>e(W.selectFilter,{filter:t})},Z={...G,...Q},$={...X,...Y},ee=(e={todos:[],filter:S.all})=>Object(a["a"])({state:e,actions:$,mutations:Z,getters:K});class te extends HTMLElement{connectedCallback(){this.innerText="blacksonic"}}customElements.define("x-username",te);const oe=Object(l["c"])(H);oe.config.isCustomElement=e=>/^x-/.test(e),oe.use(ee()),oe.mount("app-root")}});
//# sourceMappingURL=app.8f0ab743.js.map