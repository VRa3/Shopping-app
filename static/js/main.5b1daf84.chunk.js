(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/shop-bag.0d7814df.png"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/chevron-double-down.f16073bf.svg"},,,function(e,t,a){e.exports=a.p+"static/media/flower-o.dc5a299f.jpg"},function(e,t,a){e.exports=a.p+"static/media/bag-o.430dc142.jpg"},function(e,t,a){e.exports=a.p+"static/media/shoes-o.5f77e987.jpg"},function(e,t,a){e.exports=a.p+"static/media/pad.96e77780.jpg"},function(e,t,a){e.exports=a.p+"static/media/cup.2ec37d0e.jpg"},function(e,t,a){e.exports=a.p+"static/media/glitter.bc2b937e.jpg"},function(e,t,a){e.exports=a.p+"static/media/jewelry.c12a90d1.jpg"},function(e,t,a){e.exports=a.p+"static/media/brilliant.4888f0de.jpg"},function(e,t,a){e.exports=a.p+"static/media/perfum.ad748e7c.jpg"},,,function(e,t,a){e.exports=a(49)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=a(2),s=a(3),l=a(5),m=a(4),u=a(6),p=(a(39),a(41),a(50)),d=a(20),g=a.n(d),b=a(13),f=a.n(b),h=a(9),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={quantity:a.props.quantity},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"increaseQuantity",value:function(){this.setState({quantity:this.state.quantity+1})}},{key:"decreaseQuantity",value:function(){this.setState({quantity:this.state.quantity-1})}},{key:"animateNumber",value:function(){var e=this.props.amountNumberRef.current;console.log(e),e.classList.add("shrink"),setTimeout(function(){e.classList.remove("shrink")},200)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bag-item"},r.a.createElement("div",{className:"[ col-5 col-sm-3 col-lg-2 ] bag-item__thumb"},r.a.createElement("span",{className:"bag-item__price-tag"},this.props.name),r.a.createElement("img",{className:"img-fluid bag-item__img",src:"".concat(this.props.img),alt:""}),r.a.createElement("span",null," ",this.props.price,"$")),r.a.createElement("div",{className:"[ col-7 col-sm-9 col-lg-10 ] bag-item__utilities-wrapper"},r.a.createElement("div",{className:"row bag-item__utilities"},r.a.createElement("div",{className:"[ col-sm-4 col-md-4 ] quantity-input__wrapper"},r.a.createElement("button",{className:"big-plus-sign",onClick:function(){return e.increaseQuantity()}},"+"),r.a.createElement("span",{className:"quantity-input__number"},this.state.quantity),r.a.createElement("button",{className:"big-minus-sign",onClick:function(){return e.decreaseQuantity()}},"-")),r.a.createElement("div",{className:"[ col-sm-12 col-md-5 ] bag-item__price-total"},"total for this product: ",(this.props.price*this.state.quantity).toFixed(2),"$"),r.a.createElement("div",{className:"[ col-sm-4 col-md-3 ] bag-item__delete-product",onClick:function(){e.props.removeProduct(e.props.name),e.animateNumber()}},"x"))))}}]),t}(n.Component),E=Object(h.b)(function(e){return{productsInBag:e.productsInBag}},{removeProduct:function(e){return{type:"REMOVE_PRODUCT",payload:e}}})(v),y=function(){var e=document.querySelector("#cart-wrapper"),t=document.querySelector("body"),a=document.querySelector(".navbar__list");if(e.classList.contains("show"))return e.classList.remove("show"),void t.classList.remove("no-scroll");e.classList.add("show"),t.classList.add("no-scroll"),a.classList.remove("opened")},N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidUpdate=function(){var e=a.amountNumber.current;e.classList.add("blink"),setTimeout(function(){e.classList.remove("blink")},200)},a.amountNumber=r.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"generateBagItems",value:function(){var e=this;return this.props.productsInBag.map(function(t){return r.a.createElement(E,{key:t.props.name,name:t.props.name,img:t.props.img,quantity:1,price:t.props.price,amountNumberRef:e.amountNumber})})}},{key:"render",value:function(){var e=this.props.productsInBag.length;return 0===e?r.a.createElement("div",{className:"bag-container"},r.a.createElement("div",{className:"container position-relative"},r.a.createElement("span",{ref:this.amountNumber,className:"bag-items-counter"},"0"),r.a.createElement("img",{onClick:function(){y()},className:"shopping-bag-image",src:f.a,alt:""})),r.a.createElement("div",{id:"cart-wrapper",className:"bag-wrapper"},r.a.createElement("p",{className:"bag-wrapper__text"},"Your shopping bag is empty"))):r.a.createElement("div",{className:"bag-container"},r.a.createElement("div",{className:"container position-relative"},r.a.createElement("span",{ref:this.amountNumber,className:"bag-items-counter"},e),r.a.createElement("img",{onClick:function(){y()},className:"shopping-bag-image",src:f.a,alt:""})),r.a.createElement("div",{id:"cart-wrapper",className:"bag-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"bag-item__wrapper"},this.generateBagItems()))))}}]),t}(n.Component),j=Object(h.b)(function(e){return{productsInBag:e.productsInBag}})(N),O="/Shopping-app",_=function(){var e=document.querySelector(".navbar__list"),t=document.querySelector("body"),a=document.documentElement.clientWidth;e&&a<992&&setTimeout(function(){e.classList.remove("opened"),t.classList.remove("no-scroll")},500)},C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"generateList",value:function(){return this.props.ulItems.map(function(e){return"About Us"===e?r.a.createElement("li",{key:e,className:"navbar__list-item"},r.a.createElement(p.a,{to:O+"/Contact"},e)):"Fashion"===e?r.a.createElement("li",{key:e,className:"navbar__list-item"},r.a.createElement(p.a,{to:O+"/fashion"},e)):"Cool Stuff"===e?r.a.createElement("li",{key:e,className:"navbar__list-item"},r.a.createElement(p.a,{to:O+"/cool_stuff"},e)):"Luxury"===e?r.a.createElement("li",{key:e,className:"navbar__list-item"},r.a.createElement(p.a,{to:O+"/luxury"},e)):r.a.createElement("li",{key:e,className:"navbar__list-item"},r.a.createElement(p.a,{to:O+"/contact"},e))})}},{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar"},r.a.createElement(p.a,{onClick:_(),to:O+"/",className:"navbar__brand-name show-on-top"},"Home page"),r.a.createElement("img",{onClick:function(){return function(){var e=document.querySelector(".navbar__list"),t=document.querySelector("body"),a=document.querySelector("#cart-wrapper");if(e.classList.contains("opened"))return e.classList.remove("opened"),void t.classList.remove("no-scroll");e.classList.add("opened"),t.classList.add("no-scroll"),a.classList.remove("show")}()},src:g.a,className:"navbar__chevron show-on-top",alt:""}),r.a.createElement("ul",{className:"navbar__list"},this.generateList())),r.a.createElement(j,null)))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={cardNumber:a.props.id,animating:!1},a.onCardChange=function(){a.props.onCardChange(a.state.cardNumber);var e=a.props.textHolderRef;!1===a.state.animating&&(a.setState({animating:!0}),e.classList.add("animate"),setTimeout(function(){e.innerHTML=a.props.bannerText},500),setTimeout(function(){e.classList.remove("animate")},1500),setTimeout(function(){a.setState({animating:!1})},1500))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.heading,c=t.caption;return r.a.createElement("div",{className:this.props.class,onClick:function(){e.onCardChange()}},r.a.createElement("div",{className:"banner-card__ordinal-number"},"0".concat(a)),r.a.createElement("div",{className:"banner-card__content"},r.a.createElement("h4",{className:"banner-card__heading"},n),r.a.createElement("p",{className:"banner-card__caption"},c)))}}]),t}(r.a.Component);k.defaultProps={ordinalNumber:"00.",heading:"Heading",caption:"Usually CAPTION is longer than heading."};var x=k,w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selectedCard:null},a.onCardChange=function(e){a.setState({selectedCard:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"banner-card__wrapper"},r.a.createElement("div",{className:"container"},[{id:0,heading:"Heading One",caption:"Lorem ipsum dolor sit amet",bannerText:"This text is coming from first card"},{id:1,heading:"Heading Two",caption:"Caption text",bannerText:"This text is coming from second card"},{id:2,heading:"Heading Three",bannerText:"This text is coming from third card"}].map(function(t){return e.state.selectedCard===t.id?r.a.createElement(x,{onCardChange:e.onCardChange,textHolderRef:e.props.textHolder,class:"banner-card selected",key:t.id,id:t.id,heading:t.heading,caption:t.caption,bannerText:t.bannerText}):r.a.createElement(x,{onCardChange:e.onCardChange,textHolderRef:e.props.textHolder,class:"banner-card",key:t.id,id:t.id,heading:t.heading,caption:t.caption,bannerText:t.bannerText})})))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.setState({image:a.imageRef.current})},a.imageRef=r.a.createRef(),a.textHolder=r.a.createRef(),a.state={image:a.imageRef.current},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{ref:this.imageRef,className:"main-banner"},r.a.createElement("div",{className:"container main-banner__container"},r.a.createElement("div",{ref:this.textHolder,className:"main-banner__text-holder"},"Check out cool features in our shop"))),r.a.createElement(w,{textHolder:this.textHolder.current}),r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"heading heading--large"},"What you looking at, choose one of 3 our categories and treat yourself with the best...")))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"animateElement",value:function(e){e.classList.add("added"),setTimeout(function(){e.classList.remove("added")},2400)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"[ col-md-4 ]"},r.a.createElement("div",{className:"category-item"},r.a.createElement("span",{className:"category-item__name"},this.props.name),r.a.createElement("img",{src:this.props.img,alt:"",className:"img-fluid category-item__img"}),r.a.createElement("div",{className:"category-item__description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error est harum iste magnam quis repellat sunt tempore vitae voluptate!"),r.a.createElement("div",{className:"category-item__price-tag"},this.props.price),r.a.createElement("button",{onClick:function(t){e.props.addProduct(e),e.animateElement(t.target)},className:"category-item__button"},"+")))}}]),t}(n.Component),S=Object(h.b)(function(e){return{productsInBag:e.productsInBag}},{addProduct:function(e){return{type:"ADD_PRODUCT",payload:e}}})(T),q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"generateCards",value:function(){return this.props.allProducts.fashion.map(function(e){return r.a.createElement(S,{key:e.name,name:e.name,img:e.img,price:e.price})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"category-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.generateCards())))}}]),t}(n.Component),R=Object(h.b)(function(e){return e})(q),H=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"generateCards",value:function(){return this.props.allProducts.coolStuff.map(function(e){return r.a.createElement(S,{key:e.name,name:e.name,img:e.img,price:e.price})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"category-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.generateCards())))}}]),t}(n.Component),I=Object(h.b)(function(e){return e})(H),P=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"generateCards",value:function(){return this.props.allProducts.luxury.map(function(e){return r.a.createElement(S,{key:e.name,name:e.name,img:e.img,price:e.price})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"category-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.generateCards())))}}]),t}(n.Component),B=Object(h.b)(function(e){return e})(P),D=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"heading heading--large"},"This is only test page for About/Contact route.")))}}]),t}(n.Component),A=function(){return r.a.createElement("footer",{className:"footer"},"t h i s\xa0\xa0\xa0i s\xa0\xa0\xa0f o o t e r")},U=a(52),M=a(51),Q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,{ulItems:["About Us","Fashion","Cool Stuff","Luxury","Contact"]}),r.a.createElement("div",{className:"content"},r.a.createElement(M.a,{path:"/Shopping-app/",exact:!0,component:L}),r.a.createElement(M.a,{path:"/Shopping-app/fashion",exact:!0,component:R}),r.a.createElement(M.a,{path:"/Shopping-app/cool_stuff",exact:!0,component:I}),r.a.createElement(M.a,{path:"/Shopping-app/luxury",exact:!0,component:B}),r.a.createElement(M.a,{path:"/Shopping-app/contact",exact:!0,component:D})),r.a.createElement(A,null)))}}]),t}(n.Component),W=a(11),F=a(32),$=a(23),J=a.n($),V=a(24),Y=a.n(V),z=a(25),G=a.n(z),K=a(26),X=a.n(K),Z=a(27),ee=a.n(Z),te=a(28),ae=a.n(te),ne=a(29),re=a.n(ne),ce=a(30),ie=a.n(ce),oe=a(31),se=a.n(oe),le=Object(W.b)({allProducts:function(){return{fashion:[{name:"flower-o",img:J.a,price:409.99},{name:"bag-o",img:Y.a,price:329.99},{name:"o-shoes",img:G.a,price:279.99}],coolStuff:[{name:"a-pad",img:X.a,price:139.99},{name:"a-cup",img:ee.a,price:89.99},{name:"a-glitter",img:ae.a,price:109.99}],luxury:[{name:"jewelry",img:re.a,price:1379.99},{name:"brilliant",img:ie.a,price:8409.99},{name:"perfum",img:se.a,price:699.99}]}},productsInBag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"ADD_PRODUCT"===t.type?[].concat(Object(F.a)(e),[t.payload]):"REMOVE_PRODUCT"===t.type?e.filter(function(e){return e.props.name!==t.payload}):e}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h.a,{store:Object(W.c)(le)},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[34,2,1]]]);
//# sourceMappingURL=main.5b1daf84.chunk.js.map