(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(4),c=t.n(l),i=(t(17),t(2)),u=t(1);t(18),t(19);function o(e){return r.a.createElement("button",{className:"dice"+(e.isHeld?" held":""),onClick:e.holdDice},e.value)}var s=t(6),d=t(5),f=t.n(d);function m(){var e=r.a.useState(E),n=Object(u.a)(e,2),t=n[0],a=n[1],l=r.a.useState(!1),c=Object(u.a)(l,2),d=c[0],m=c[1];function v(){return Math.floor(6*Math.random())+1}function E(){for(var e=[],n=0;n<10;n++)e[n]=[],e[n].value=v(),e[n].isHeld=!1,e[n].id=Object(s.a)();return e}r.a.useEffect(function(){var e=t.every(function(e){return e.isHeld}),n=t.every(function(e){return e.value===t[0].value});e&&n&&m(!0)});var p=t.map(function(e){return r.a.createElement(o,{value:e.value,isHeld:e.isHeld,key:e.id,holdDice:function(){return n=e.id,void a(function(e){return e.map(function(e){return e.id===n?Object(i.a)({},e,{isHeld:!e.isHeld}):e})});var n}})});return r.a.createElement("div",{className:"main_container"},r.a.createElement("main",null,r.a.createElement("article",{className:"game_container"},r.a.createElement("h1",null,"Tenzies"),r.a.createElement("p",{className:"explanation"},"Roll until all dice are the same. Click each die to freeze it at its current value between rolls."),p,r.a.createElement("button",{className:"roll_dice",onClick:function(){d?(a(E()),m(!1)):a(function(e){return e.map(function(e){return e.isHeld?e:Object(i.a)({},e,{value:v()})})})}},d?"New Game":"Roll"))),function(){if(d)return r.a.createElement(f.a,null)}())}c.a.createRoot(document.getElementById("root")).render(r.a.createElement(m,null))},8:function(e,n,t){e.exports=t(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.d6219f3d.chunk.js.map