(this["webpackJsonpguidance-task"]=this["webpackJsonpguidance-task"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/photo.244ae70f.svg"},function(e,t,n){e.exports=n.p+"static/media/layout.b6456a37.svg"},function(e,t,n){e.exports=n.p+"static/media/template.f2d778ca.svg"},function(e,t,n){e.exports=n.p+"static/media/font.e408e327.svg"},function(e,t,n){e.exports=n.p+"static/media/video.632332f1.svg"},function(e,t,n){e.exports=n.p+"static/media/grid.d10931b3.svg"},function(e,t,n){e.exports=n.p+"static/media/upload.83bcb1b6.svg"},function(e,t,n){e.exports=n.p+"static/media/folder.6393b4a4.svg"},function(e,t,n){e.exports=n.p+"static/media/dot.e49a11ae.svg"},function(e,t,n){e.exports=n.p+"static/media/search.076b54e3.svg"},function(e,t,n){e.exports=n.p+"static/media/filter.2cdb9416.svg"},,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),s=n.n(l),r=(n(21),n(4)),i=n.n(r),o=n(5),d=n.n(o),u=n(6),m=n.n(u),p=n(7),f=n.n(p),g=n(8),E=n.n(g),h=n(9),v=n.n(h),N=n(10),M=n.n(N),x=n(11),b=n.n(x),k=n(12),O=n.n(k),S="Templates",C="Photos",y="Elements",w="Text",T="Videos",j="Bkground",B="Uploads",D="Folders",L="More",P=["https://img.icons8.com/fluent/96/000000/bar-chart.png","https://img.icons8.com/color/96/000000/doughnut-chart--v1.png"],I=n(15),J=n(1),F=function(e,t){return Object(J.a)(Object(J.a)({},e),t)},U=JSON.parse(localStorage.getItem("state")),V={selectedMenu:"",shouldSlideOpen:!1,droppedElementList:{}},R=c.a.createContext(null);function W(e){var t=Object(a.useReducer)(F,U||V),n=Object(I.a)(t,2),l=n[0],s=n[1];return Object(a.useEffect)((function(){localStorage.setItem("state",JSON.stringify(l))}),[l]),c.a.createElement(R.Provider,{value:{state:l,dispatch:s}},e.children)}var A=function(){var e=a.useContext(R),t=e.state,n=e.dispatch;return a.createElement("div",{className:"side-menu"},a.createElement("ul",{className:"side-menu-list"},a.createElement("li",{onClick:function(){return n({selectedMenu:S,shouldSlideOpen:!0})},className:t.selectedMenu===S?"selected":""},a.createElement("img",{src:m.a,alt:"Templates icon"}),S),a.createElement("li",{onClick:function(){return n({selectedMenu:C,shouldSlideOpen:!0})},className:t.selectedMenu===C?"selected":""},a.createElement("img",{src:i.a,alt:"Photos icon"}),C),a.createElement("li",{onClick:function(){return n({selectedMenu:y,shouldSlideOpen:!0})},className:t.selectedMenu===y?"selected":""},a.createElement("img",{src:d.a,alt:"Elements icon"}),y),a.createElement("li",{onClick:function(){return n({selectedMenu:w,shouldSlideOpen:!0})},className:t.selectedMenu===w?"selected":""},a.createElement("img",{src:f.a,alt:"Text icon"}),"Text"),a.createElement("li",{onClick:function(){return n({selectedMenu:T,shouldSlideOpen:!0})},className:t.selectedMenu===T?"selected":""},a.createElement("img",{src:E.a,alt:"Videos icon"}),"Videos"),a.createElement("li",{onClick:function(){return n({selectedMenu:j,shouldSlideOpen:!0})},className:t.selectedMenu===j?"selected":""},a.createElement("img",{src:v.a,alt:"Bkground icon"}),"Bkground"),a.createElement("li",{onClick:function(){return n({selectedMenu:B,shouldSlideOpen:!0})},className:t.selectedMenu===B?"selected":""},a.createElement("img",{src:M.a,alt:"Uploads icon"}),"Uploads"),a.createElement("li",{onClick:function(){return n({selectedMenu:D,shouldSlideOpen:!0})},className:t.selectedMenu===D?"selected":""},a.createElement("img",{src:b.a,alt:"Folders icon"}),"Folders"),a.createElement("li",{onClick:function(){return n({selectedMenu:L,shouldSlideOpen:!0})},className:t.selectedMenu===L?"selected":""},a.createElement("img",{src:O.a,alt:"More icon"}),"More")))},H=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("nav",{className:"header-menu"},c.a.createElement("ul",null,c.a.createElement("li",null,"Home"))))},X=function(){var e=c.a.useContext(R),t=e.state,n=e.dispatch;return c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{id:"container",className:"container",onDragOver:function(e){e.preventDefault()},onDrop:function(e){var a=document.getElementById("container").getBoundingClientRect(),c=Object(J.a)({},t.droppedElementList),l=e.dataTransfer.getData("text/plain");c[l]={key:l,style:{top:"".concat(e.pageY-a.top,"px"),left:"".concat(e.pageX-a.left,"px"),position:"absolute"},src:l},n({droppedElementList:c}),e.stopPropagation&&e.stopPropagation()}},Object.keys(t.droppedElementList).map((function(e){return c.a.createElement("img",t.droppedElementList[e],null)}))))},Y=n(13),$=n.n(Y),q=n(14),z=n.n(q),G=function(){return c.a.createElement("div",{className:"main-slide-panel-search-form"},c.a.createElement("div",{className:"search-input"},c.a.createElement("img",{className:"search-input-icon",src:$.a,alt:"search icon"}),c.a.createElement("input",{type:"text",placeholder:"Search icons and shapes"}),c.a.createElement("img",{className:"search-input-icon",src:z.a,alt:"filter icon"})))},K=function(){var e=function(e){e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/plain",e.target.src)};return c.a.createElement("div",{className:"chart-widgets"},P.map((function(t){return c.a.createElement("img",{onDragStart:e,className:"chart-image h-pointer",src:t,key:t,alt:"bar chart icon",draggable:!0})})))},Q=function(e){var t=e.selectedMenu;return c.a.createElement("div",{className:"main-slide-panel"},c.a.createElement(G,null),c.a.createElement("div",null,t===y?c.a.createElement(K,null):"No data "))};var Z=function(){var e=c.a.useContext(R).state;return c.a.createElement("div",{className:"main-app"},c.a.createElement(H,null),c.a.createElement("div",{className:"main-body"},c.a.createElement(A,null),e.shouldSlideOpen&&c.a.createElement(Q,{selectedMenu:e.selectedMenu}),c.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null,c.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.cc9ef081.chunk.js.map