(this["webpackJsonpuse-web-socket-example"]=this["webpackJsonpuse-web-socket-example"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);n(5),n(6);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=n(3);function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t,n){return(i=s()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var r=new(Function.bind.apply(e,a));return n&&u(r,n.prototype),r}).apply(null,arguments)}var m=function(e){var t=e.socketUrl,n=e.token,r=e.retry,c=void 0===r?3:r,o=e.retryInterval,l=void 0===o?1500:o,u=Object(a.useState)(),s=u[0],m=u[1],f=Object(a.useState)((function(){return function(){}})),d=f[0],p=f[1],v=Object(a.useState)(c),E=v[0],b=v[1],h=Object(a.useState)(!1),y=h[0],k=h[1];return Object(a.useEffect)((function(){var e=[t];n&&e.push(n);var a=i(WebSocket,e);return a.onopen=function(){console.log("Connected to socket"),k(!0),p((function(){return function(e){try{var t=JSON.stringify(e);return a.send(t),!0}catch(n){return!1}}})),a.onmessage=function(e){var t=function(e){try{return JSON.parse(e)}catch(t){return e}}(e.data);m({message:t,timestamp:(new Date).getTime()})}},a.onclose=function(){k(!1),E>0&&setTimeout((function(){b((function(e){return e-1}))}),l)},function(){a.close()}}),[E]),{send:d,data:s,readyState:y}};var f=function(){var e=Object(a.useState)([r.a.createElement("span",null,"Messages will be displayed here")]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useRef)(),u=m({socketUrl:"wss://echo.websocket.org"});Object(a.useEffect)((function(){if(u.data){var e=u.data.message;c((function(t){return[].concat(function(e){return r.a.createElement("span",null,"\u2b07: ",e)}(e),t)}))}}),[u.data]);var s=u.readyState?"Open":"Closed";return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h6",null,r.a.createElement("div",null,"Socket Url: wss://echo.websocket.org"),r.a.createElement("div",null,"Connection State:"," ",r.a.createElement("span",{className:"connection "+s.toLowerCase()},s))),r.a.createElement("form",null,r.a.createElement("label",null,"Message (string or json)"),r.a.createElement("textarea",{name:"message",rows:4,ref:o}),r.a.createElement("input",{type:"button",onClick:function(){var e=o.current.value||"";e&&(c((function(t){return[].concat(function(e){return r.a.createElement("span",null,"\u2b06: ",e)}(e),t)})),u.send(e))},value:"Send"}))),r.a.createElement("div",{style:{height:300,overflowY:"scroll"}},n.map((function(e,t){return r.a.createElement("div",{key:t},e)}))))};function d(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-80 column-offset-10 ta-center"},r.a.createElement("h3",{style:{marginBottom:"0.5rem"}},"use-web-socket"),r.a.createElement("h5",null,"A clean and minimal react hook around client WebSocket"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-80 column-offset-10 app"},r.a.createElement(f,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-100"},r.a.createElement("div",{className:"footer ta-center"},r.a.createElement("a",{href:"https://github.com/Kailash-Sankar/use-web-socket"},"Kailash Sankar, April 2020"))))))}o.a.render(r.a.createElement(d,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.ceed4cb7.chunk.js.map