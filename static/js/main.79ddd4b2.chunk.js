(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{58:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(13),i=n.n(r),o=(n(58),n(98)),s=n(26),j=n(99),u=n(22),b=n(34),l=n(37),d=n(38),O=n(48),h=n(47),f=n(91),g=n(100),x=n(2),m=Object(f.a)((function(t){return Object(g.a)({header:{padding:t.spacing(5)}})})),p=function(){var t=m();return Object(x.jsx)(s.a,{className:t.header,variant:"h2",component:"h2",gutterBottom:!0,color:"primary",align:"center",children:"Please leave feedback"})},v=n(69),y=n(93),k=Object(f.a)((function(t){return Object(g.a)({root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:t.spacing(1)}},btn:{fontSize:t.spacing(3)}})})),S=function(t){var e=t.buttons,n=t.onChangeStatistics,a=k();return Object(x.jsx)("div",{className:a.root,children:Object(x.jsx)(y.a,{size:"large",color:"primary",variant:"outlined","aria-label":"large outlined primary button group",children:e.map((function(t){return Object(x.jsx)(v.a,{className:a.btn,onClick:function(){return n(t)},children:t},t)}))})})},C=Object(f.a)((function(t){return Object(g.a)({header:{padding:t.spacing(5)}})})),w=function(){var t=C();return Object(x.jsx)(s.a,{className:t.header,variant:"h3",component:"h3",gutterBottom:!0,color:"primary",align:"center",children:"Statistics"})},N=n(94),z=n(95),B=n(97),F=n(96),I=n(101),J=n(44),M=n.n(J),A=n(45),D=n.n(A),E=n(46),H=n.n(E),L=Object(f.a)((function(t){return Object(g.a)({root:{textTransform:"capitalize"}})})),P=function(t){var e=t.value,n=t.variant,a=void 0===n?"span":n,c=t.align,r=void 0===c?"left":c,i=L();return Object(x.jsx)(s.a,{align:r,className:i.root,color:"primary",variant:"h5",component:a,children:e})},R=Object(f.a)((function(t){return Object(g.a)({root:{width:"100%",maxWidth:360,marginLeft:"auto",marginRight:"auto"}})})),T=function(t){var e=t.state,n=R(),a=Object.values(e).reduce((function(t,e){return e+t}),0),c=Math.round(e.good/a*100);return Object(x.jsxs)(N.a,{className:n.root,children:[Object.entries(e).map((function(t){return Object(x.jsxs)(z.a,{children:[Object(x.jsx)(F.a,{children:Object(x.jsxs)(I.a,{children:["good"===t[0]&&Object(x.jsx)(M.a,{color:"primary"}),"neutral"===t[0]&&Object(x.jsx)(D.a,{color:"action"}),"bad"===t[0]&&Object(x.jsx)(H.a,{color:"secondary"})]})}),Object(x.jsx)(B.a,{primary:Object(x.jsx)(P,{value:t[0]}),secondary:Object(x.jsx)(P,{value:t[1]})})]},t[0])})),Object(x.jsx)(P,{value:"total: ".concat(a),variant:"p"}),Object(x.jsx)(P,{value:"positive feedback: ".concat(c,"%"),variant:"p"})]})},W=function(t){var e=t.state;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{}),Object(x.jsx)(T,{state:e})]})},q=function(t){Object(O.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.buttons=Object.keys(t.state),t.onChangeStatistics=function(e){t.setState((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(u.a)({},e,t[e]+=1))}))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p,{}),Object(x.jsx)(S,{buttons:this.buttons,onChangeStatistics:this.onChangeStatistics}),Object.values(this.state).find((function(t){return 0!==t}))?Object(x.jsx)(W,{state:this.state}):Object(x.jsx)(P,{value:"no feedback given",variant:"p",align:"center"})]})}}]),n}(c.a.Component),G=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{}),Object(x.jsx)(j.a,{fixed:!0,children:Object(x.jsx)(s.a,{component:"div",style:{backgroundColor:"#cfe8fc",minHeight:"100vh"},children:Object(x.jsx)(q,{})})})]})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(G,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.79ddd4b2.chunk.js.map