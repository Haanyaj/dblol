(this.webpackJsonpdblol=this.webpackJsonpdblol||[]).push([[0],{108:function(e,t,a){e.exports=a(126)},116:function(e,t,a){},117:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(116),a(12)),i=(a(117),a(4)),m=a(87),s=a(48),u=a(193),p=a(192),d=a(61),E=a(86),b=a(199),h=a(178),g=a(132),f=a(181),v=a(90),y=a.n(v),k=a(182),x=a(34),j=a(180),w=Object(m.a)((function(e){return{list:{width:250,fontWeight:"bold"},listtext:{color:e.palette.primary.contrastText,textTransform:"uppercase"},fullList:{width:"auto"},menuButton:{marginRight:e.spacing(2)},paper:{background:e.palette.primary.main},listitem:{height:70}}}));function O(e){var t=w(),a=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(o.a)(a,2),c=n[0],l=n[1],m=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(E.a)({},c,Object(i.a)({},e,t)))}},s=function(a){return r.a.createElement("div",{className:t.list,role:"presentation",onClick:m(a,!1),onKeyDown:m(a,!1)},r.a.createElement(h.a,{component:"nav"},e.menu.map((function(a){return(e.auth&&!a.public||a.public)&&r.a.createElement(j.a,{style:{textDecoration:"none"}},r.a.createElement(g.a,{button:!0,component:x.b,to:a.route,className:t.listitem},r.a.createElement(f.a,{primary:a.title,className:t.listtext})))}))))},u=function(a){return r.a.createElement("div",{className:t.fullList,role:"presentation",onClick:m(a,!1),onKeyDown:m(a,!1)},r.a.createElement(h.a,null,e.menu.map((function(t){return(e.auth&&!t.public||t.public)&&r.a.createElement(j.a,{style:{textDecoration:"none"}},r.a.createElement(g.a,{button:!0,component:x.b,to:t.route},r.a.createElement(f.a,{primary:t.title})))}))))};return r.a.createElement("div",null,r.a.createElement(k.a,{onClick:m(e.side,!0),edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(y.a,null)),r.a.createElement(b.a,{open:c.left,onClose:m("left",!1),classes:{paper:t.paper}},s("left")),r.a.createElement(b.a,{anchor:"top",open:c.top,onClose:m("top",!1),classes:{paper:t.paper}},u("top")),r.a.createElement(b.a,{anchor:"bottom",open:c.bottom,onClose:m("bottom",!1),classes:{paper:t.paper}},u("bottom")),r.a.createElement(b.a,{anchor:"right",open:c.right,onClose:m("right",!1),classes:{paper:t.paper}},s("right")))}var S=a(198),C=a(191),N=a(196),R=a(9),I=a.n(R),A=a(183),B=a(184),L=a(60),D=a.n(L),T=a(91),z=a.n(T),P=Object(m.a)((function(e){return{mainCenter:{display:"flex",paddingTop:e.spacing(4),paddingBottom:e.spacing(8),flexGrow:1},main:{paddingTop:e.spacing(4),paddingBottom:e.spacing(8)},title:{textAlign:"center",color:e.palette.secondary.main,marginBottom:e.spacing(3),textTransform:"uppercase"},backgroundContainer:{position:"fixed",zIndex:-1,top:0,left:0,width:"100vw",height:"100vh",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundBlendMode:"darken",backgroundPosition:"center center"}}}));function F(e){var t=P();return r.a.createElement("div",{className:t.backgroundContainer,style:{backgroundColor:"rgba(255,255,255,"+(1-e.opacity)+")",backgroundImage:"url("+e.src+")",filter:"blur("+e.blur+")"}})}function M(e){var t=P();return r.a.createElement(A.a,{className:e.center?t.mainCenter:t.main},e.background&&r.a.createElement(F,e),e.center?r.a.createElement(N.a,{display:"flex",flexDirection:"column",flex:"1"},(e.back||e.title)&&r.a.createElement(N.a,{flex:1,justifyContent:"flex-start"},e.back&&r.a.createElement(N.a,{style:{position:"absolute"}},r.a.createElement(k.a,{color:"secondary",component:x.b,to:e.back},r.a.createElement(D.a,{fontSize:"large"}))),e.title&&r.a.createElement(N.a,null,r.a.createElement("h1",{className:t.title},e.title))),r.a.createElement(N.a,{display:"flex",flex:1,alignItems:"center",alignSelf:"center"},r.a.createElement(B.a,{item:!0},e.children)),(e.back||e.title)&&r.a.createElement(N.a,{display:"flex",flex:1})):r.a.createElement("div",null,(e.back||e.title)&&r.a.createElement(N.a,null,e.back&&r.a.createElement(N.a,{style:{position:"absolute"}},r.a.createElement(k.a,{color:"secondary",component:x.b,to:e.back},r.a.createElement(D.a,{fontSize:"large"}))),e.title&&r.a.createElement(B.a,{container:!0,justify:"center"},r.a.createElement("h1",{className:t.title},e.title))),e.children))}F.defaultProps={opacity:1,src:z.a,blur:"0px"};var W=a(206),K=a(208),G=a(202),J=a(204),_=a(207),q=a(203),H=a(205),Q="?api_key=RGAPI-ccd4963a-e95a-4bd4-aba6-5603121c34c8",V=function(e){var t=e.joueur,a=e.name,c=e.region,l=Object(n.useState)({}),i=Object(o.a)(l,2),m=i[0],s=i[1];Object(n.useEffect)((function(){!function(){var e,t,n;I.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,I.a.awrap(fetch("https://".concat(c,".api.riotgames.com/lol/summoner/v4/summoners/by-name/").concat(a).concat(Q)));case 3:return e=r.sent,r.next=6,I.a.awrap(e.json());case 6:t=r.sent,n=t.id,function(){var e,t;return I.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,I.a.awrap(fetch("https://".concat(c,".api.riotgames.com/lol/league/v4/entries/by-summoner/").concat(n).concat(Q)));case 3:return e=a.sent,a.next=6,I.a.awrap(e.json());case 6:"RANKED_FLEX_SR"==(t=a.sent)[0].queueType?s(t[1]):s(t[0]),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.error(a.t0);case 13:case"end":return a.stop()}}),null,null,[[0,10]])}(),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),console.error(r.t0);case 15:case"end":return r.stop()}}),null,null,[[0,12]])}()}),[a]);var u="/dblol/img/".concat(m.tier,".png");return r.a.createElement(q.a,{sx:{"td, th":{border:0,color:"white"}}},r.a.createElement(G.a,{component:"th",scope:"row"},t),r.a.createElement(G.a,{align:"right"},a),r.a.createElement(G.a,{align:"right"}," ",r.a.createElement("img",{src:u,style:{height:"1.5rem",marginRight:"0.5rem"}}),null===m||void 0===m?void 0:m.tier," ",null===m||void 0===m?void 0:m.rank),r.a.createElement(G.a,{align:"right"},null===m||void 0===m?void 0:m.wins),r.a.createElement(G.a,{align:"right"},null===m||void 0===m?void 0:m.losses),r.a.createElement(G.a,{align:"right"},null===m||void 0===m?void 0:m.leaguePoints))},X=function(){return r.a.createElement(M,{title:"DB Ranking"},r.a.createElement(A.a,null,r.a.createElement(J.a,{component:H.a},r.a.createElement(W.a,{sx:{minWidth:650,bgcolor:"#2F4F4F"},"aria-label":"simple table"},r.a.createElement(_.a,null,r.a.createElement(q.a,null,r.a.createElement(G.a,{sx:{color:"white"}},"Player"),r.a.createElement(G.a,{sx:{color:"white"},align:"right"},"Summoner Name"),r.a.createElement(G.a,{sx:{color:"white"},align:"right"},"Rank"),r.a.createElement(G.a,{sx:{color:"white"},align:"right"},"W"),r.a.createElement(G.a,{sx:{color:"white"},align:"right"},"L"),r.a.createElement(G.a,{sx:{color:"white"},align:"right"},"LP"))),r.a.createElement(K.a,null,[{joueur:"Alvyn",name:"IvanJBCK",region:"euw1"},{joueur:"Victor",name:"Treqz",region:"na1"},{joueur:"Remi",name:"",region:"euw1"}].map((function(e){return r.a.createElement(V,{key:e.name,name:e.name,joueur:e.joueur,region:e.region})})))))))},Y=[{title:"Home",route:"/home/",component:X,public:!0}],U=a(32),Z=a(81),$=a.n(Z),ee=a(7),te=a(200),ae=a(189),ne=a(190),re=a(95),ce=a.n(re),le=a(94),oe=a.n(le),ie=a(93),me=a.n(ie),se=a(188),ue=a(92),pe=a.n(ue),de=Object(ee.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(te.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}));function Ee(){var e=r.a.useState(null),t=Object(o.a)(e,2),a=t[0],n=t[1],c=function(){n(null)};return r.a.createElement("div",null,r.a.createElement(k.a,{"aria-label":"show 17 new notifications",color:"inherit",onClick:function(e){n(e.currentTarget)}},r.a.createElement(se.a,{badgeContent:2,color:"error"},r.a.createElement(pe.a,null))),r.a.createElement(de,{id:"customized-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:c},r.a.createElement(ae.a,{onClick:c},r.a.createElement(ne.a,null,r.a.createElement(me.a,{fontSize:"small"})),r.a.createElement(f.a,{primary:"Sent mail"})),r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,r.a.createElement(oe.a,{fontSize:"small"})),r.a.createElement(f.a,{primary:"Drafts"})),r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,r.a.createElement(ce.a,{fontSize:"small"})),r.a.createElement(f.a,{primary:"Inbox"}))))}var be=a(96),he=Object(m.a)((function(e){return{grow:{flexGrow:1},title:Object(i.a)({display:"none",margin:e.spacing(1)},e.breakpoints.up("sm"),{display:"block"}),iconContainer:{display:"flex"},menuBar:{marginRight:"50px"},signInButton:{margin:e.spacing(1)},sectionDesktop:Object(i.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(i.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),searchField:{width:"100%"},backButton:{margin:e.spacing(1)},search:Object(i.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(s.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(s.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("md"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(i.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:120,"&:focus":{width:200}})}}));function ge(){var e=Object(be.a)().handleSubmit,t=he();return r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement($.a,null)),r.a.createElement("form",{onSubmit:e((function(e){}))},r.a.createElement(S.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})))}function fe(e){var t=he();return r.a.createElement(C.a,{onClickAway:function(){e.setSearchActive(!1)}},r.a.createElement(p.a,null,r.a.createElement(k.a,{color:"inherit",onClick:function(){return e.setSearchActive(!1)},className:t.backButton},r.a.createElement(D.a,null)),r.a.createElement(ge,null)))}function ve(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(Ee,null))}function ye(){he();return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",null,"LoL Ranking"))}function ke(e){var t=he(),a=Object(U.b)("authStore"),n=Object(o.a)(a,2),c=n[0],l=n[1];return r.a.createElement(p.a,null,r.a.createElement("div",{className:t.sectionMobile},r.a.createElement(O,{side:"left",menu:Y,auth:c})),r.a.createElement(d.a,{className:t.title,variant:"h6",noWrap:!0},"LOL Rush SOLO Q"),r.a.createElement("div",{className:t.sectionDesktop}),e.search&&r.a.createElement("div",{className:t.sectionDesktop},r.a.createElement(ge,null)),r.a.createElement("div",{className:t.grow}),e.search&&r.a.createElement(k.a,{color:"inherit",className:t.sectionMobile,onClick:function(){return e.setSearchActive(!0)}},r.a.createElement($.a,null)),r.a.createElement("div",{className:t.iconContainer},c?r.a.createElement(ve,{setAuth:l}):r.a.createElement(ye,null)))}function xe(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(u.a,{position:e.sticky?"fixed":"static"},c?r.a.createElement(fe,{setSearchActive:l}):r.a.createElement(ke,Object.assign({},e,{setSearchActive:l}))),e.sticky&&r.a.createElement(N.a,{height:"64px"}))}function je(){return r.a.createElement(d.a,{variant:"body2",color:"textSecondary"},"Copyright \xa9 ",r.a.createElement(j.a,{color:"inherit",href:""},"Haan")," ",(new Date).getFullYear(),".")}var we=Object(m.a)((function(e){return{footer:{textAlign:"center",padding:e.spacing(3,2),marginTop:"auto",background:e.palette.secondary.main}}}));function Oe(){var e=we();return r.a.createElement("footer",{className:e.footer},r.a.createElement(A.a,{maxWidth:"sm"},r.a.createElement(d.a,{variant:"body1"}),r.a.createElement(je,null)))}var Se=a(194),Ce=a(195),Ne=a(97),Re=Object(Ne.a)({palette:{primary:{main:"#0f0430",contrastText:"#fff"},secondary:{main:"#fff",contrastText:"#0f0430"},background:{default:"#0f0430"}}}),Ie=a(47);function Ae(){return r.a.createElement(M,{center:!0},r.a.createElement(d.a,{component:"h1",variant:"h1",color:"secondary"},"404 Page not Found"))}function Be(){return r.a.createElement(Ie.c,null,r.a.createElement(Ie.a,{path:"/dblol",exact:!0,component:X}),Y.map((function(e){return r.a.createElement(Ie.a,{path:e.route,exact:!0,component:e.component})})),r.a.createElement(Ie.a,{component:Ae}))}Object(U.a)("themeStore",Re),Object(U.a)("pageStore",Y),Object(U.a)("stickyStore",!0),Object(U.a)("searchStore",!1),Object(U.a)("authStore",localStorage.getItem("isLoggedIn"));var Le=function(){var e=Object(U.b)("themeStore"),t=Object(o.a)(e,2),a=t[0],n=(t[1],Object(U.b)("stickyStore")),c=Object(o.a)(n,2),l=c[0],i=(c[1],Object(U.b)("searchStore")),m=Object(o.a)(i,2),s=m[0];return m[1],r.a.createElement(Se.a,{theme:a},r.a.createElement(Ce.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(xe,{search:s,sticky:l}),r.a.createElement(Be,null),r.a.createElement(Oe,null)))};l.a.render(r.a.createElement(x.a,null,r.a.createElement(Le,null)),document.getElementById("root"))},91:function(e,t,a){e.exports=a.p+"static/media/landscape.a1471115.png"}},[[108,1,2]]]);
//# sourceMappingURL=main.75a63efd.chunk.js.map