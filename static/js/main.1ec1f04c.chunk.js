(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/shop-bag.eb577b67.png"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/chevron-double-down.f16073bf.svg"},,,function(e,t,a){e.exports=a.p+"static/media/flower-o.dc5a299f.jpg"},function(e,t,a){e.exports=a.p+"static/media/bag-o.430dc142.jpg"},function(e,t,a){e.exports=a.p+"static/media/shoes-o.5f77e987.jpg"},function(e,t,a){e.exports=a.p+"static/media/pad.96e77780.jpg"},function(e,t,a){e.exports=a.p+"static/media/cup.2ec37d0e.jpg"},function(e,t,a){e.exports=a.p+"static/media/glitter.bc2b937e.jpg"},function(e,t,a){e.exports=a.p+"static/media/jewelry.c12a90d1.jpg"},function(e,t,a){e.exports=a.p+"static/media/brilliant.4888f0de.jpg"},function(e,t,a){e.exports=a.p+"static/media/perfum.ad748e7c.jpg"},,function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},,function(e,t){document.addEventListener("DOMContentLoaded",function(e){document.querySelector(".navbar__chevron").addEventListener("click",function(){var e=document.querySelector(".navbar__list"),t=document.querySelector("body"),a=document.querySelector("html");e.classList.toggle("opened"),t.classList.toggle("no-scroll"),a.classList.toggle("no-scroll")})})},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),o=a.n(r),i=(a(38),a(40),a(4)),s=a(5),l=a(7),m=a(6),u=a(8),p=(a(41),a(43),a(45),a(54)),d=a(20),g=a.n(d),f=a(13),b=a.n(f),h=a(9),E=Object(h.b)(function(e){return{number:e.addProductToBag}})(function(e){var t=e.number;return t?c.a.createElement("div",{className:"bag-container show-on-top"},c.a.createElement("span",{className:"bag__number"},t),c.a.createElement("img",{className:"shopping-bag",src:b.a,alt:""})):c.a.createElement("div",{className:"bag-container show-on-top"},c.a.createElement("span",{className:"bag__number"},"0"),c.a.createElement("img",{className:"shopping-bag",src:b.a,alt:""}))}),v="/Shopping-app",y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"generateList",value:function(){return this.props.ulItems.map(function(e){return"Fashion"===e?c.a.createElement("li",{key:e,className:"navbar__list-item"},c.a.createElement(p.a,{to:v+"/fashion"},e)):"Cool Stuff"===e?c.a.createElement("li",{key:e,className:"navbar__list-item"},c.a.createElement(p.a,{to:v+"/cool_stuff"},e)):"Luxury"===e?c.a.createElement("li",{key:e,className:"navbar__list-item"},c.a.createElement(p.a,{to:v+"/luxury"},e)):c.a.createElement("li",{key:e,className:"navbar__list-item"},c.a.createElement(p.a,{to:v+"/test"},e))})}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar"},c.a.createElement(E,null),c.a.createElement(p.a,{to:v+"/",className:"navbar__logo show-on-top"},"Home page"),c.a.createElement("img",{src:g.a,className:"navbar__chevron show-on-top",alt:""}),c.a.createElement("ul",{className:"navbar__list"},this.generateList()))))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{className:"homepage"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"homepage__text"},"What you looking at, choose one of 3 our categories and treat yourself with the best...")))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{className:"homepage"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"homepage__text"},"This is only test page for About/Contact route.")))}}]),t}(n.Component),N=function(e){return{type:"ADD_PRODUCT",payload:e}},O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"generateCards",value:function(){var e=this;return this.props.allProducts.fashion.map(function(t){return c.a.createElement("div",{key:t.name,className:"[ col-md-4 ]"},c.a.createElement("div",{className:"category-item"},c.a.createElement("span",{className:"category-item__name"},t.name),c.a.createElement("img",{src:t.img,alt:"",className:"img-fluid category-item__img"}),c.a.createElement("div",{className:"category-item__price-tag"},t.price),c.a.createElement("button",{onClick:function(){return e.props.addProduct(t)},className:"category-item__button"},"+")))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"category-wrapper"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.generateCards())))}}]),t}(n.Component),w=Object(h.b)(function(e){return{allProducts:e.allProducts,itemsInBag:e.itemsInBag}},{addProduct:N})(O),k=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"generateCards",value:function(){var e=this;return this.props.allProducts.coolStuff.map(function(t){return c.a.createElement("div",{key:t.name,className:"[ col-md-4 ]"},c.a.createElement("div",{className:"category-item"},c.a.createElement("span",{className:"category-item__name"},t.name),c.a.createElement("img",{src:t.img,alt:"",className:"img-fluid category-item__img"}),c.a.createElement("div",{className:"category-item__price-tag"},t.price),c.a.createElement("button",{onClick:function(){return e.props.addProduct(t)},className:"category-item__button"},"+")))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"category-wrapper"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.generateCards())))}}]),t}(n.Component),x=Object(h.b)(function(e){return{allProducts:e.allProducts,itemsInBag:e.itemsInBag}},{addProduct:N})(k),C=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"generateCards",value:function(){var e=this;return this.props.allProducts.luxury.map(function(t){return c.a.createElement("div",{key:t.name,className:"[ col-md-4 ]"},c.a.createElement("div",{className:"category-item"},c.a.createElement("span",{className:"category-item__name"},t.name),c.a.createElement("img",{src:t.img,alt:"",className:"img-fluid category-item__img"}),c.a.createElement("div",{className:"category-item__price-tag"},t.price),c.a.createElement("button",{onClick:function(){return e.props.addProduct(t)},className:"category-item__button"},"+")))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"category-wrapper"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.generateCards())))}}]),t}(n.Component),P=Object(h.b)(function(e){return{allProducts:e.allProducts,itemsInBag:e.itemsInBag}},{addProduct:N})(C),S=a(56),B=a(55),L=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(S.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(y,{ulItems:["About Us","Fashion","Cool Stuff","Luxury","Contact Us"]}),c.a.createElement(B.a,{path:"/Shopping-app/",exact:!0,component:_}),c.a.createElement(B.a,{path:"/Shopping-app/test",exact:!0,component:j}),c.a.createElement(B.a,{path:"/Shopping-app/fashion",exact:!0,component:w}),c.a.createElement(B.a,{path:"/Shopping-app/cool_stuff",exact:!0,component:x}),c.a.createElement(B.a,{path:"/Shopping-app/luxury",exact:!0,component:P})))}}]),t}(n.Component),I=a(11),D=a(23),T=a.n(D),A=a(24),U=a.n(A),q=a(25),R=a.n(q),W=a(26),F=a.n(W),J=a(27),H=a.n(J),M=a(28),$=a.n(M),z=a(29),G=a.n(z),K=a(30),Q=a.n(K),V=a(31),X=a.n(V),Y=[],Z=Object(I.b)({allProducts:function(){return{fashion:[{name:"flower-o",img:T.a,price:"409,99"},{name:"bag-o",img:U.a,price:"329,99"},{name:"o-shoes",img:R.a,price:"279,99"}],coolStuff:[{name:"a-pad",img:F.a,price:"139,99"},{name:"a-cup",img:H.a,price:"89,99"},{name:"a-glitter",img:$.a,price:"109,99"}],luxury:[{name:"jewelry",img:G.a,price:"1379,99"},{name:"brilliant",img:Q.a,price:"8409,99"},{name:"perfum",img:X.a,price:"699,99"}]}},selectedProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SELECT_PRODUCT"===t.type?t.payload:e},itemsInBag:function(){return Y},addProductToBag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"ADD_PRODUCT"===t.type?Y.push(t.payload):e}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h.a,{store:Object(I.c)(Z)},c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[33,2,1]]]);
//# sourceMappingURL=main.1ec1f04c.chunk.js.map