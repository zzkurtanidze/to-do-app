(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=(n(24),n(4)),l=n(17),d=n(8);var j=n(7);function b(e){var t=e.name,n=e.index,a=e.type;return Object(s.jsx)(j.b,{draggableId:"".concat(t,"-").concat(n),index:n,children:function(e,n){return"trash"===n.draggingOver&&console.log(n),Object(s.jsx)("div",Object(o.a)(Object(o.a)(Object(o.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,style:Object(o.a)({backgroundColor:n.isDragging?"#ebebeb":"done"===a?"#888888":"#ffffff",color:"done"===a&&!n.isDragging&&"white",animation:".2s all"},e.draggableProps.style),className:"list-item",children:Object(s.jsx)("span",{className:"item-title",children:t})}))}},n)}function u(e){var t=e.tasks,n=e.listName,a=e.listTitle;return Object(s.jsx)(j.c,{droppableId:n,children:function(e,r){return Object(s.jsxs)("div",{className:"block ".concat(n),style:{backgroundColor:r.isDraggingOver?"#e2e2e2":"#F2EFEF"},children:[Object(s.jsx)("h3",{className:"title",children:a}),Object(s.jsxs)("div",Object(o.a)(Object(o.a)({ref:e.innerRef},e.droppableProps),{},{className:"list",children:[t.map((function(e,t){var a=e.name,r=e.type;return r===n&&Object(s.jsx)(b,{type:r,name:a,index:t},t)})),e.placeholder]}))]})}})}var O=n(32);function p(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(d.a)(c,2),b=i[0],p=i[1];Object(a.useEffect)((function(){var e=function(){var e=localStorage.getItem("tasks");return"string"===typeof e?JSON.parse(e):[]}();r(e)}),[]);return Object(s.jsx)("div",{className:"content",children:Object(s.jsxs)(j.a,{onDragEnd:function(e){if(console.log(e.destination),e.destination){var t=Object(l.a)(n);if("trash"===e.destination.droppableId)t.splice(e.source.index,1);else{if(e.source.droppableId!==e.destination.droppableId)t[e.source.index].type=e.destination.droppableId;var s=t.splice(e.source.index,1),a=Object(d.a)(s,1)[0];t.splice(e.destination.index,0,a)}!function(e){localStorage.setItem("tasks",JSON.stringify(e))}(t),r(t)}},children:[Object(s.jsx)(u,{tasks:n,listName:"to-do",listTitle:"To Do"}),Object(s.jsx)(u,{tasks:n,listName:"in-progress",listTitle:"In Progress"}),Object(s.jsx)(u,{tasks:n,listName:"done",listTitle:"Done"}),Object(s.jsx)(j.c,{droppableId:"trash",children:function(e,t){return Object(s.jsx)("div",Object(o.a)(Object(o.a)({className:"trash"},e.droppableProps),{},{ref:e.innerRef,children:Object(s.jsxs)("div",{className:"trash-inner",children:[Object(s.jsx)(O.a,{in:b,timeout:300,classNames:"trash",unmountOnExit:!0,children:Object(s.jsx)("div",{className:"trash-popover",children:Object(s.jsx)("p",{children:"Drag Any item here to remove them. \ud83d\uddd1"})})}),Object(s.jsx)("h3",{onClick:function(){return p(!b)},children:"\ud83d\uddd1"})]})}))}})]})})}function f(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(d.a)(c,2),o=i[0],l=i[1];return Object(s.jsx)("div",{children:Object(s.jsxs)("nav",{children:[Object(s.jsx)("button",{onClick:function(){r(!n)},className:"add-new-task",children:"Add Task"}),n&&Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(!1),o.length<1||function(e){var t=localStorage.getItem("tasks");if("string"===typeof t){var n=JSON.parse(t);n[n.length]=e,localStorage.setItem("tasks",JSON.stringify(n))}else{var s=[];s.push(e),localStorage.setItem("tasks",JSON.stringify(s))}}({type:"to-do",name:o})},className:"new-task-form",children:[Object(s.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",name:"name",placeholder:"Enter To Do..."}),Object(s.jsx)("button",{type:"submit",className:"submit-form",children:"\u2714\ufe0f"})]})]})})}var m=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(f,{}),Object(s.jsx)(p,{})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.debd57f7.chunk.js.map