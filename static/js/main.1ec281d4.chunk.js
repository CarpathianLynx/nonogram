(this["webpackJsonpnonogram-ui"]=this["webpackJsonpnonogram-ui"]||[]).push([[0],{21:function(n,t,r){},22:function(n,t,r){},23:function(n,t,r){},30:function(n,t,r){},32:function(n,t,r){},33:function(n,t,r){},34:function(n,t,r){},35:function(n,t,r){},37:function(n,t,r){"use strict";r.r(t);var o=r(0),e=r.n(o),c=r(8),i=r.n(c),a=(r(21),r(22),r(23),r(2)),u="EMPTY",l={value:u,completed:!1},s=(r(30),r(1)),f=function(n){var t=n.size,r=void 0===t?32:t,o=n.padding,e=void 0===o?10:o;return Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(r," ").concat(r),stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",children:[Object(s.jsx)("line",{x1:"".concat(e),y1:"".concat(r-e),x2:"".concat(r-e),y2:"".concat(e)}),Object(s.jsx)("line",{x1:"".concat(r-e),y1:"".concat(r-e),x2:"".concat(e),y2:"".concat(e)})]})},v=function(n){var t=n.size,r=void 0===t?32:t,o=n.padding,e=void 0===o?9:o;return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(r," ").concat(r),children:Object(s.jsx)("circle",{cx:r/2,cy:r/2,r:r/2-e,fill:"currentColor"})})},d=r(4),j=r(12);function p(){for(var n=[],t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];for(var e=0,c=r;e<c.length;e++){var i=c[e];if(void 0!==i)if("string"===typeof i)n.push(i);else{var a=Object.entries(i).filter((function(n){var t=Object(j.a)(n,2);t[0];return t[1]})).map((function(n){var t=Object(j.a)(n,2),r=t[0];t[1];return r}));n.push.apply(n,Object(d.a)(a))}}return n.join(" ")}var O=function(n){var t=n.option,r=n.active,o=n.onClick,e=t.value,c=t.completed;return Object(s.jsx)("div",{className:"color-button",onClick:o,children:Object(s.jsx)("div",{className:p("color-fill",{"color-fill-active":r,completed:c}),style:{color:"var(--".concat(e,")")},children:e===u?Object(s.jsx)(f,{padding:5}):Object(s.jsx)(v,{padding:5})})})},b=function(n){var t=n.options,r=n.currentOption,o=n.onClickOption;return Object(s.jsx)("div",{className:"color-picker",children:t.map((function(n){var t=n.value===r.value;return Object(s.jsx)(O,{option:n,active:t,onClick:function(){return o(n)}},n.value)}))})},g="SET_FILL_OPTION",m=function(n){return{type:g,option:n}},h="SET_GAME",x="SET_CELL_COLOR",w=function(n,t,r){return{type:x,row:n,col:t,color:r}},y="SET_FILLING",C=function(n){return{type:y,isFilling:n}},N="SET_CONSTRAINT_COMPLETE",k=function(n,t){return{type:N,id:n,completed:t}},M=Object(a.b)((function(n){var t=n.currentGame;return{currentOption:t.currentOption,options:t.options}}),(function(n){return{onClickOption:function(t){return n(m(t))}}}))(b),E=(r(32),r(33),function(n){var t=n.constraints,r=n.extraClasses;return Object(s.jsx)("div",{className:null===r||void 0===r?void 0:r.container,children:t.map((function(n,t){return Object(s.jsx)("div",{className:null===r||void 0===r?void 0:r.group,children:n.map((function(n,o){var e=n.color,c=n.count,i=n.completed;return Object(s.jsx)("div",{className:p(null===r||void 0===r?void 0:r.constraint,e,{completed:i}),children:c},"constraint-".concat(t,"-").concat(o))}))},"constraint-group-".concat(t))}))})}),G=r(14);function L(n){return function(t){function r(r){return Object(s.jsx)(t,Object(G.a)({extraClasses:n},r))}return r.Widget=t,r}}var T=Object(a.b)((function(n){return{constraints:n.currentGame.game.rowsConstraints}}),(function(n){return{}}))(L({container:"row-constraints",group:"row-constraint-group",constraint:"row-constraint"})(E)),F=(r(34),Object(a.b)((function(n){return{constraints:n.currentGame.game.colsConstraints}}),(function(n){return{}}))(L({container:"col-constraints",group:"col-constraint-group",constraint:"col-constraint"})(E))),S=(r(35),function(n){var t=n.grid,r=n.onMouseDown,o=n.onMouseUp,e=n.onMouseEnter,c=n.onMouseLeave;return Object(s.jsx)("div",{className:"grid",onMouseLeave:c,children:t.cells.map((function(n,t){return Object(s.jsx)("div",{className:"row",children:n.map((function(n){var t=n.row,c=n.col,i=n.color;return Object(s.jsx)("div",{className:p("cell",i),onMouseDown:function(){return r(n)},onMouseUp:function(){return o()},onMouseEnter:function(){return e(n)},children:i===u?Object(s.jsx)(f,{}):null},"cell-".concat(t,"-").concat(c))}))},"row-".concat(t))}))})}),_=r(3),I=0;function B(n){return function(t){return{id:I++,color:n,count:t,completed:!1}}}function P(n,t){for(var r=[],o=0;o<n;o++)r.push(t(o));return r}function D(n,t){return{row:n,col:t,color:void 0}}function J(n,t){var r=function(n,t,r){return P(n,(function(n){return P(t,(function(t){return r(n,t)}))}))}(n,t,D);return{cells:r}}function A(n,t){return n.cells[t]}function U(n,t){return n.cells.map((function(n){return n[t]}))}function z(){return function(n,t){for(var r=t().currentGame.game,o=r.grid,e=r.rowsConstraints,c=r.colsConstraints,i=0;i<e.length;i++)R(e[i],A(o,i),n),R(Y(e[i]),Y(A(o,i)),n);for(var a=0;a<c.length;a++)R(c[a],U(o,a),n),R(Y(c[a]),Y(U(o,a)),n)}}function R(n,t,r){for(var o=0,e=0,c=0;c<n.length;c++){for(;o<t.length&&t[o].color===u;)o++;for(;o<t.length&&t[o].color===n[c].color;)o++,e++;if(e!==n[c].count){r(k(n[c].id,!1));break}r(k(n[c].id,!0)),e=0}}function W(n,t){return function(r,o){var e=o().currentGame.game,c=e.grid,i=e.rowsConstraints,a=e.colsConstraints;if(i[n].every((function(n){return n.completed}))){var l,s=Object(_.a)(A(c,n));try{for(s.s();!(l=s.n()).done;){var f=l.value;void 0===f.color&&r(w(f.row,f.col,u))}}catch(G){s.e(G)}finally{s.f()}}if(a[t].every((function(n){return n.completed}))){var v,d=Object(_.a)(U(c,t));try{for(d.s();!(v=d.n()).done;){var j=v.value;void 0===j.color&&r(w(j.row,j.col,u))}}catch(G){d.e(G)}finally{d.f()}}if(A(c,n).filter((function(n){var t=n.color;return void 0!==t&&t!==u})).length===i[n].map((function(n){return n.count})).reduce((function(n,t){return n+t}),0)){var p,O=Object(_.a)(A(c,n));try{for(O.s();!(p=O.n()).done;){var b=p.value;void 0===b.color&&r(w(b.row,b.col,u))}}catch(G){O.e(G)}finally{O.f()}var g,m=Object(_.a)(i[n]);try{for(m.s();!(g=m.n()).done;){var h=g.value;r(k(h.id,!0))}}catch(G){m.e(G)}finally{m.f()}}if(U(c,t).filter((function(n){var t=n.color;return void 0!==t&&t!==u})).length===a[t].map((function(n){return n.count})).reduce((function(n,t){return n+t}),0)){var x,y=Object(_.a)(U(c,t));try{for(y.s();!(x=y.n()).done;){var C=x.value;void 0===C.color&&r(w(C.row,C.col,u))}}catch(G){y.e(G)}finally{y.f()}var N,M=Object(_.a)(a[t]);try{for(M.s();!(N=M.n()).done;){var E=N.value;r(k(E.id,!0))}}catch(G){M.e(G)}finally{M.f()}}}}function Y(n){return Object(d.a)(n).reverse()}var q,H=Object(a.b)((function(n){return{grid:n.currentGame.game.grid}}),(function(n){return{onMouseDown:function(t){var r=t.row,o=t.col;n(C(!0)),n(function(n,t){return function(r,o){var e=o().currentGame.currentOption.value;r(w(n,t,e)),r(z()),r(W(n,t))}}(r,o))},onMouseUp:function(){n(C(!1))},onMouseEnter:function(t){var r=t.row,o=t.col;n(function(n,t){return function(r,o){var e=o().currentGame.isFilling,c=o().currentGame.currentOption.value;e&&(r(w(n,t,c)),r(z()),r(W(n,t)))}}(r,o))},onMouseLeave:function(){n(C(!1))}}}))(S),K=function(){return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsxs)("div",{className:"board",children:[Object(s.jsxs)("div",{className:"spacer-row-constraints",children:[Object(s.jsx)("div",{className:"spacer"}),Object(s.jsx)(T,{})]}),Object(s.jsxs)("div",{className:"col-constraints-grid",children:[Object(s.jsx)(F,{}),Object(s.jsx)(H,{})]})]}),Object(s.jsx)(M,{})]})},Q=r(9),V=r(15),X=r.n(V),Z=r(16),$=r(5);function nn(n,t){n.completed=t}var tn=(q={},Object($.a)(q,y,(function(n,t){var r=t.isFilling;n.isFilling=r})),Object($.a)(q,h,(function(n,t){var r=t.game;n.game=r,n.options=[l].concat(Object(d.a)(r.colors.map((function(n){return{value:n,completed:!1}}))))})),Object($.a)(q,g,(function(n,t){var r=t.option;n.currentOption=r})),Object($.a)(q,x,(function(n,t){var r=n.game,o=(n.currentOption,t.row),e=t.col,c=t.color;!function(n,t){n.color=t}(r.grid.cells[o][e],c)})),Object($.a)(q,N,(function(n,t){for(var r=n.game,o=t.id,e=t.completed,c=r,i=c.rowsConstraints,a=c.colsConstraints,u=0,l=[].concat(Object(d.a)(i),Object(d.a)(a));u<l.length;u++){var s,f=l[u],v=Object(_.a)(f);try{for(v.s();!(s=v.n()).done;){var j=s.value;j.id===o&&nn(j,e)}}catch(p){v.e(p)}finally{v.f()}}})),q);function rn(n){return JSON.parse(JSON.stringify(n))}var on,en,cn,an=Object(Q.c)(Object(Q.b)({currentGame:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFilling:!1},t=arguments.length>1?arguments[1]:void 0;return t.type in tn?(tn[t.type](n,t),rn(n)):n}}),Object(Q.a)(X.a,Z.a)),un=an,ln=(B("orange"),B("yellow"),B("blue"),B("lightBlue"),B("darkBlue"),B("burgundy"),B("grey"),B("brown"),B("green"),B("mustard"),B("cherry"),B("pink"),B("gold")),sn=B("black"),fn=B("lightGrey"),vn=[[fn(2),fn(2)],[ln(1),fn(2),fn(2),ln(1)],[ln(2),fn(2),fn(2),ln(2)],[ln(1),fn(6),ln(1)],[ln(1),fn(4),ln(1)],[ln(1),sn(1),fn(2),sn(1),ln(1)],[ln(2),fn(2),ln(2)],[ln(2),fn(2),ln(2)],[ln(1),sn(2),ln(1)],[fn(2),ln(1),sn(2),ln(1),fn(2)]],dn=[[fn(1),ln(2)],[fn(2),ln(2),fn(1)],[fn(3),ln(4),fn(1)],[fn(3),sn(1),ln(4)],[fn(5),sn(2)],[fn(5),sn(2)],[fn(3),sn(1),ln(4)],[fn(3),ln(4),fn(1)],[fn(2),ln(2),fn(1)],[fn(1),ln(2)]],jn=(cn=["lightGrey","gold","black"],{grid:J((on=vn).length,(en=dn).length),rowsConstraints:on,colsConstraints:en,colors:cn});un.dispatch({type:h,game:jn}),un.dispatch(m(l));var pn=function(){return Object(s.jsx)(a.a,{store:un,children:Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsx)(K,{})})})},On=function(n){n&&n instanceof Function&&r.e(3).then(r.bind(null,38)).then((function(t){var r=t.getCLS,o=t.getFID,e=t.getFCP,c=t.getLCP,i=t.getTTFB;r(n),o(n),e(n),c(n),i(n)}))};i.a.render(Object(s.jsx)(e.a.StrictMode,{children:Object(s.jsx)(pn,{})}),document.getElementById("root")),On()}},[[37,1,2]]]);
//# sourceMappingURL=main.1ec281d4.chunk.js.map