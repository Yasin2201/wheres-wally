(this["webpackJsonpwheres-wally"]=this["webpackJsonpwheres-wally"]||[]).push([[0],{39:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(30),i=n.n(a),s=n(16),o=n(4),l=n(15),j=n.n(l),u=n(31),d=n(19),b=n(8),h=n(24);n(50),n(49);h.a.initializeApp({apiKey:"AIzaSyDIK7_x9OvvcJKsmodofUhwhs5vq5PZR40",authDomain:"wheres-wally-63813.firebaseapp.com",projectId:"wheres-wally-63813",storageBucket:"wheres-wally-63813.appspot.com",messagingSenderId:"284119324952",appId:"1:284119324952:web:2313b2e3a199c51dd4e66d"});var O=h.a,f=(n(39),n(3)),p=function(e){var t=e.clientPos,n=e.getChoice,c=e.characters,r=t[0]+t[2].left-20,a=t[1]+t[2].top-20;return Object(f.jsx)("div",{id:"targetBox",style:{top:"".concat(a,"px"),left:"".concat(r,"px")},children:Object(f.jsx)("div",{style:{display:"grid",position:"fixed",top:"".concat(a+47,"px"),left:"".concat(r-10,"px")},children:c.map((function(e){return Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:"choice-button",onClick:n,children:e.name})},e.name)}))})})},x=function(e){var t=e.gameOver,n=e.runTimer,r=e.time;return Object(c.useEffect)((function(){if(!t){var e=setInterval((function(){n()}),1e3);return function(){clearInterval(e)}}})),Object(f.jsxs)("h1",{id:"timer",children:[r," secs"]})},v=function(e){var t=e.submitToLeaderboard,n=e.getPlayerName,c=e.time;return Object(f.jsx)("div",{id:"modal",children:Object(f.jsxs)("div",{id:"submitBox",children:[Object(f.jsxs)("h3",{children:["Your Time: ",c," secs"]}),Object(f.jsx)("input",{type:"text",onChange:n,placeholder:"Player Name",required:!0}),Object(f.jsx)(s.b,{to:"/Leaderboard",children:Object(f.jsx)("button",{onClick:t,children:"Submit"})})]})})};n(45);var m=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(b.a)(a,2),s=i[0],o=i[1],l=Object(c.useState)([void 0]),h=Object(b.a)(l,2),m=h[0],g=h[1],w=Object(c.useState)(""),y=Object(b.a)(w,2),S=y[0],k=y[1],C=Object(c.useState)([0]),I=Object(b.a)(C,2),E=I[0],L=I[1],P=Object(c.useState)(null),T=Object(b.a)(P,2),B=T[0],A=T[1],Y=Object(c.useState)(0),D=Object(b.a)(Y,2),N=D[0],J=D[1],K=Object(c.useState)(!1),R=Object(b.a)(K,2),W=R[0],X=R[1],q=Object(c.useState)(void 0),z=Object(b.a)(q,2),F=z[0],U=z[1],M=Object(c.useState)("Anon"),Z=Object(b.a)(M,2),_=Z[0],G=Z[1];Object(c.useEffect)((function(){var e=O.firestore(),t=O.storage(),n=function(){var t=Object(d.a)(j.a.mark((function t(){var n,c,r,a,i,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=[],c=e.collection("characters"),t.next=5,c.get();case 5:r=t.sent,a=Object(u.a)(r.docs);try{for(a.s();!(i=a.n()).done;)s=i.value,n.push(s.data())}catch(o){a.e(o)}finally{a.f()}L(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),c=function(){var e=Object(d.a)(j.a.mark((function e(){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.ref().child("Easy.jpeg"),e.next=4,n.getDownloadURL();case 4:c=e.sent,k(c),o(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();n(),c(),A(!1)}),[]),Object(c.useEffect)((function(){if(!B)return 0===E.length?A(!0):B}),[B,E.length]);var H=function(e){X(!0),U(e),setTimeout((function(){X(!1)}),1500)};return Object(f.jsxs)("div",{id:"container",children:[B&&Object(f.jsx)(v,{submitToLeaderboard:function(){O.firestore().collection("leaderboard").add({player:_,time:N})},getPlayerName:function(e){""===e.target.value?G("Anon"):G(e.target.value)},time:N}),Object(f.jsxs)("div",{id:"gameScreen",children:[W&&Object(f.jsx)("h3",{id:"checkChoice",children:F}),s&&Object(f.jsx)("img",{src:S,alt:"wally",width:"1400px",onClick:function(e){var t=e.target.getBoundingClientRect(),n=parseInt(e.clientX-t.left),c=parseInt(e.clientY-t.top);g([n,c,t]),r(!0)}}),n&&Object(f.jsx)(p,{clientPos:m,getChoice:function(e){var t=E.find((function(t){return t.name===e.target.textContent}));if(m[0]>t.posX-20&&m[0]<t.posX+20&&m[1]>t.posY-20&&m[1]<t.posY+20){var n=E.filter((function(e){return e!==t}));L(n),r(!1),H("You Found ".concat(t.name,"!"))}else r(!1),H("Wrong! Try Again")},characters:E})]}),s&&Object(f.jsx)(x,{gameOver:B,runTimer:function(){J(N+1)},time:N})]})},g=n(33),w=n.n(g),y=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],n=O.firestore(),c=n.collection("leaderboard").orderBy("time","asc"),e.next=6,c.get();case 6:e.sent.docs.map((function(e){return t.push(e.data())})),r(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(f.jsxs)("div",{id:"leaderboard",children:[Object(f.jsx)("h2",{style:{margin:"0"},children:"Leaderboard"}),Object(f.jsx)("hr",{}),n.length>0?n.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:e.player}),Object(f.jsxs)("h3",{children:[e.time," secs"]}),Object(f.jsx)("hr",{})]},w()())})):Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Empty"})})]})},S=(n(46),function(){var e=Object(c.useState)(window.location.pathname),t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(f.jsxs)("div",{id:"navbar",children:[Object(f.jsx)("h1",{id:"title",children:"Where's Wally & Friends"}),Object(f.jsx)("h2",{onClick:function(){r(window.location.pathname)},children:"/wheres-wally"===n||"/wheres-wally/"===n?Object(f.jsx)(s.b,{id:"links",to:"/Leaderboard",children:"Leaderboard"}):Object(f.jsx)(s.b,{id:"links",to:"/wheres-wally",children:"Play"})})]})}),k=function(){return Object(f.jsx)("div",{id:"mainDiv",children:Object(f.jsxs)(s.a,{children:[Object(f.jsx)(S,{}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/wheres-wally",children:Object(f.jsx)(m,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/leaderboard",children:Object(f.jsx)(y,{})})]})]})})};n(47);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.76f3f700.chunk.js.map