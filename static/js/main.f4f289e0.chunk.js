(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/flower-o.dc5a299f.jpg"},function(e,t,a){e.exports=a.p+"static/media/shoes-o.5f77e987.jpg"},function(e,t,a){e.exports=a.p+"static/media/bag-o.430dc142.jpg"},function(e,t,a){e.exports=a.p+"static/media/glitter.bc2b937e.jpg"},function(e,t,a){e.exports=a.p+"static/media/cup.2ec37d0e.jpg"},function(e,t,a){e.exports=a.p+"static/media/pad.96e77780.jpg"},function(e,t,a){e.exports=a.p+"static/media/brilliant.4888f0de.jpg"},function(e,t,a){e.exports=a.p+"static/media/jewelry.c12a90d1.jpg"},function(e,t,a){e.exports=a.p+"static/media/perfum.ad748e7c.jpg"},,,function(e,t,a){e.exports=a(42)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),i=a.n(r),o=(a(30),a(3)),m=a(4),s=a(6),l=a(5),p=a(7),u=(a(32),a(34),a(36),a(43)),f="/Shopping-app",h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"generateList",value:function(){return this.props.ulItems.map(function(e){return"Fashion"===e?c.a.createElement("li",{key:e,className:"navbar__list-item"},c.a.createElement(u.a,{to:f+"/fashion"},e)):"Cool Stuff"===e?c.a.createElement("li",{key:e,className:"navbar__list-item"},c.a.createElement(u.a,{to:f+"/cool_stuff"},e)):"Luxury"===e?c.a.createElement("li",{key:e,className:"navbar__list-item"},c.a.createElement(u.a,{to:f+"/luxury"},e)):c.a.createElement("li",{key:e,className:"navbar__list-item"},c.a.createElement(u.a,{to:f+"/test"},e))})}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",null,c.a.createElement(u.a,{to:f+"/",className:"navbar__logo"},"Home page"),c.a.createElement("ul",{className:"navbar__list"},this.generateList())))))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{className:"homepage"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"homepage__text"},"What you looking at, choose one of 3 our categories and treat yourself with the best...")))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{className:"homepage"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"homepage__text"},"This is only test page for About/Contact route.")))}}]),t}(n.Component),d=a(13),j=a.n(d),E=a(14),v=a.n(E),y=a(15),O=a.n(y),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{onClick:function(){return console.log(e.props.price)},className:"[ col-md-4 ]"},c.a.createElement("div",{className:"category-item"},c.a.createElement("span",{className:"category-item__name"},this.props.name),c.a.createElement("img",{src:this.props.img,alt:"",className:"img-fluid category-item__img"})))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[{name:"flower-o",img:j.a,price:"409,99"},{name:"bag-o",img:O.a,price:"329,99"},{name:"o-shoes",img:v.a,price:"279,99"}];return c.a.createElement("div",{className:"category-wrapper"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},e.map(function(e){return c.a.createElement(N,{key:e.name,img:e.img,name:e.name,price:e.price})}))))}}]),t}(n.Component),k=a(16),_=a.n(k),x=a(17),C=a.n(x),S=a(18),L=a.n(S),A=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[{name:"a-pad",img:L.a,price:"139,99"},{name:"a-cup",img:C.a,price:"89,99"},{name:"a-glitter",img:_.a,price:"109,99"}];return c.a.createElement("div",{className:"category-wrapper"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},e.map(function(e){return c.a.createElement(N,{key:e.name,img:e.img,name:e.name,price:e.price})}))))}}]),t}(n.Component),I=a(19),W=a.n(I),B=a(20),F=a.n(B),J=a(21),U=a.n(J),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[{name:"jewelry",img:F.a,price:"1379,99"},{name:"brilliant",img:W.a,price:"8409,99"},{name:"perfum",img:U.a,price:"699,99"}];return c.a.createElement("div",{className:"category-wrapper"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},e.map(function(e){return c.a.createElement(N,{key:e.name,img:e.img,name:e.name,price:e.price})}))))}}]),t}(n.Component),T=a(45),$=a(44),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(T.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(h,{ulItems:["About Us","Fashion","Cool Stuff","Luxury","Contact Us"]}),c.a.createElement($.a,{path:"/Shopping-app/",exact:!0,component:g}),c.a.createElement($.a,{path:"/Shopping-app/test",exact:!0,component:b}),c.a.createElement($.a,{path:"/Shopping-app/fashion",exact:!0,component:w}),c.a.createElement($.a,{path:"/Shopping-app/cool_stuff",exact:!0,component:A}),c.a.createElement($.a,{path:"/Shopping-app/luxury",exact:!0,component:H})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[24,2,1]]]);
//# sourceMappingURL=main.f4f289e0.chunk.js.map