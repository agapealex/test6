(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,a,t){e.exports=t(146)},131:function(e,a,t){},132:function(e,a,t){},146:function(e,a,t){"use strict";t.r(a);var n,r,l=t(0),c=t.n(l),o=t(98),u=t.n(o),i=(t(131),t(8)),m=(t(132),t(30)),p=t(2),s=t(44),d=function(){var e=Object(s.c)(function(e){return e.counterReducer.counter});return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"counter: ",e))},E=t(35),b=t(73),h=b.a.div(n||(n=Object(E.a)(["\n\n"]))),v=function(){var e=Object(s.b)(),a=Object(s.c)(function(e){return e.counterReducer.counter});return c.a.createElement(h,null,c.a.createElement("p",null,"Scopul nostru este de a crea o comunitate ce se ajuta reciproc in a descoperi persoanele ce profita de persoanele naive si le dau teapa"),c.a.createElement("br",null),c.a.createElement("p",null,"Cu ajutorul comunitatii se vor posta diverse rapoarte ce vor dovedi problemele masinilor puse la vanzare"),c.a.createElement("br",null),c.a.createElement("p",null," Cum putem sa luam cat mai putina teapa ?"),c.a.createElement("p",null,"= Sa presupunem ca 10 persoane sunt tentate sa plateasca pentru un raport de pe RAR sau Carvertical. Daca unul din ei posteaza aici raportul ceilalti 9 vor scapa de a mai plati un raportul cu teapa."),c.a.createElement("br",null),c.a.createElement("p",null,"= Imediat ce o persoana adauga masina cu probleme, numarul de telefon al propritarului va intra pe lista neagra."),c.a.createElement("p",null,'Asa, pe viitor, putem verifica un numar de telefon cu antecedente pe site si ne putem feri de noua lui masina cu potentiale probleme "reparate".'),c.a.createElement("p",null,"cunter : ",a),c.a.createElement("button",{onClick:function(){return e({type:"INCREMENT"})}},"cnt"))},g=t(4),f=t(12),j=t(180),w=t(187),O=b.a.div(r||(r=Object(E.a)(["\n"]))),C=Object(f.a)("div")(function(e){var a=e.theme;return Object(g.a)({position:"relative",borderRadius:a.shape.borderRadius,backgroundColor:Object(j.a)(a.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.a)(a.palette.common.white,.25)},marginLeft:0,width:"100%"},a.breakpoints.up("sm"),{marginLeft:a.spacing(1),width:"auto"})}),k=Object(f.a)("div")(function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),R=Object(f.a)(w.a)(function(e){var a=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(g.a)({padding:a.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(a.spacing(4),")"),transition:a.transitions.create("width"),width:"100%"},a.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}),M=t(188),y=t(194),A=t(186),S=t(195),x=t(107),I=t.n(x),N=t(192),L=t(109),P=t.n(L),B=function(){return c.a.createElement(O,null,c.a.createElement(M.a,{position:"relative"},c.a.createElement(y.a,null,c.a.createElement(I.a,null),c.a.createElement(A.a,{value:0,textColor:"inherit"},c.a.createElement(S.a,{label:"Despre noi",to:"/home",component:m.b}),c.a.createElement(S.a,{label:"Comp1",to:"/comp1",component:m.b})),c.a.createElement(C,null,c.a.createElement(k,null,c.a.createElement(P.a,null)),c.a.createElement(R,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})),c.a.createElement(N.a,{sx:{marginLeft:"auto",marginRight:"10px",backgroundColor:"white",color:"black"},variant:"contained",href:"/add"},"Adauga teapa"),c.a.createElement(N.a,{sx:{marginLeft:"right",backgroundColor:"white",color:"black"},variant:"contained",href:"/my-account"},"Contul meu"))))},D=t(90),F=t(184),T=t(190),z=t(113),H=t.n(z),J=t(114),V=t.n(J),W=t(115),_=t.n(W),G=t(116),$=t.n(G);function q(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(B,null))}function K(){var e=Object(l.useState)(0),a=Object(i.a)(e,2),t=a[0],n=a[1];return c.a.createElement(F.a,{value:t,onChange:function(e,a){n(a)},className:"mobile-navigation"},c.a.createElement(T.a,{label:"Home",icon:c.a.createElement(H.a,null),component:m.b,to:"/home"}),c.a.createElement(T.a,{label:"Search",icon:c.a.createElement(V.a,null),component:m.b,to:"/home"}),c.a.createElement(T.a,{label:"Favorites",icon:c.a.createElement(_.a,null),component:m.b,to:"/comp1"}),c.a.createElement(T.a,{label:"Profile",icon:c.a.createElement($.a,null),component:m.b,to:"/comp1"}))}var Q=function(){var e=Object(l.useState)({beMessage:""}),a=Object(i.a)(e,2),t=a[0],n=a[1];return fetch("https://node-test-production-7782.up.railway.app/home").then(function(e){return e.json()}).then(function(e){n({beMessage:e.message})}).catch(function(e){return console.log(e,"erroareee")}),c.a.createElement("div",{className:"App"},c.a.createElement(m.a,{basename:"/test6"},c.a.createElement(D.BrowserView,null,c.a.createElement(q,null)),c.a.createElement(D.MobileView,null,c.a.createElement(K,null)),c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"home",element:c.a.createElement(v,null)}),c.a.createElement(p.a,{path:"comp1",element:c.a.createElement(d,null)}))),c.a.createElement("h1",null,t.beMessage))};var U=t(117),X=t(23),Y={counter:0},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT":return console.log(e,"###"),{counter:e.counter+1};default:return e}},ee=Object(X.b)({counterReducer:Z}),ae=Object(U.a)({reducer:ee});u.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:ae},c.a.createElement(Q,null)))),"serviceWorker"in navigator&&function(){var e="".concat("$%7BREACT_APP_HOMEPAGE%7D","/sw.js");console.log(navigator,"****"),navigator.serviceWorker.register(e).then(function(e){console.log("==="),console.warn("response",e)})}()}},[[124,1,2]]]);
//# sourceMappingURL=main.7dc71679.chunk.js.map