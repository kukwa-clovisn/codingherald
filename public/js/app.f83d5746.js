(function(e){function t(t){for(var n,c,o=t[0],s=t[1],l=t[2],u=0,b=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},c={app:0},i={app:0},r=[];function o(e){return s.p+"js/"+({ChatLogic:"ChatLogic",Dashboard:"Dashboard",Exchange:"Exchange",Login:"Login",Register:"Register",Todo:"Todo",Weather:"Weather",imageCompressor:"imageCompressor"}[e]||e)+"."+{ChatLogic:"9125112e",Dashboard:"df4d5974",Exchange:"0e9c2d7b",Login:"15114c8f",Register:"e276894e",Todo:"205855ca",Weather:"3f550a61","chunk-440be6f0":"6f7ed7ca","chunk-576bdf98":"4f3c4f19","chunk-c49b33e6":"651603bf",imageCompressor:"7a367e19"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={ChatLogic:1,Dashboard:1,Exchange:1,Login:1,Register:1,Todo:1,Weather:1,"chunk-440be6f0":1,"chunk-576bdf98":1,"chunk-c49b33e6":1,imageCompressor:1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({ChatLogic:"ChatLogic",Dashboard:"Dashboard",Exchange:"Exchange",Login:"Login",Register:"Register",Todo:"Todo",Weather:"Weather",imageCompressor:"imageCompressor"}[e]||e)+"."+{ChatLogic:"3379158b",Dashboard:"daebe4fd",Exchange:"078d4849",Login:"764f963b",Register:"0f3ea1fa",Todo:"1e699169",Weather:"a80cce9d","chunk-440be6f0":"ce7a02e9","chunk-576bdf98":"fe1fd6ae","chunk-c49b33e6":"9d3dfcd4",imageCompressor:"891b3d3b"}[e]+".css",i=s.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return t()}var b=document.getElementsByTagName("style");for(o=0;o<b.length;o++){l=b[o],u=l.getAttribute("data-href");if(u===n||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete c[e],d.parentNode.removeChild(d),a(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){c[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var b=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",b.name="ChunkLoadError",b.type=n,b.request=c,a[1](b)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0418":function(e,t,a){"use strict";var n=a("7a23"),c=function(e){return Object(n["z"])("data-v-d36eaf24"),e=e(),Object(n["x"])(),e},i={class:"large-screens"},r={class:"logo"},o=Object(n["k"])("CH"),s=c((function(){return Object(n["i"])("span",{class:"route-to"},"services",-1)})),l=[s],u={key:0,id:"app-list"},b=c((function(){return Object(n["i"])("h1",null,"our courses and services",-1)})),d=c((function(){return Object(n["i"])("ul",null,[Object(n["i"])("li",null,[Object(n["i"])("a",{href:"https://advancedtechacademy.herokuapp.com"},[Object(n["i"])("i",{class:"fa-solid fa-graduation-cap"}),Object(n["k"])("academy")])]),Object(n["i"])("li",null,[Object(n["i"])("a",{href:"/overview/Todo"},[Object(n["i"])("i",{class:"fa-solid fa-calendar-check"}),Object(n["k"])("dairy")])]),Object(n["i"])("li",null,[Object(n["i"])("a",{href:"/overview/currency"},[Object(n["i"])("i",{class:"fa-brands fa-bitcoin"}),Object(n["k"])("cryptoswap")])]),Object(n["i"])("li",null,[Object(n["i"])("a",{href:"https://advancedtechacademy.herokuapp.com"},[Object(n["i"])("i",{class:"fa-solid fa-music"}),Object(n["k"])("piano lessons")])])],-1)})),f=[b,d],j=Object(n["k"])("sign up"),O=Object(n["k"])("sign in"),p={class:"logo",title:"In Christ alone#TeamJesus4Life"},m=Object(n["k"])("Codingherald"),v=c((function(){return Object(n["i"])("i",{class:"fa-solid fa-bars",id:"menu-bars"},null,-1)})),h=[v],g={key:0,id:"app-list"},w=c((function(){return Object(n["i"])("h1",null,"our courses and services",-1)})),y=c((function(){return Object(n["i"])("ul",null,[Object(n["i"])("li",null,[Object(n["i"])("a",{href:"https://advancedtechacademy.herokuapp.com"},[Object(n["i"])("i",{class:"fa-solid fa-graduation-cap"}),Object(n["k"])("academy")])]),Object(n["i"])("li",null,[Object(n["i"])("a",{href:"/overview/Todo"},[Object(n["i"])("i",{class:"fa-solid fa-calendar-check"}),Object(n["k"])("dairy")])]),Object(n["i"])("li",null,[Object(n["i"])("a",{href:"/overview/currency"},[Object(n["i"])("i",{class:"fa-brands fa-bitcoin"}),Object(n["k"])("cryptoswap")])]),Object(n["i"])("li",null,[Object(n["i"])("a",{href:"/https://advancedtechacademy.herokuapp.com"},[Object(n["i"])("i",{class:"fa-solid fa-music"}),Object(n["k"])("piano lessons")])])],-1)})),k=[w,y];function x(e,t,a,c,s,b){var d=Object(n["D"])("router-link");return Object(n["w"])(),Object(n["h"])("main",null,[Object(n["i"])("header",i,[Object(n["i"])("nav",r,[Object(n["l"])(d,{to:"/",class:"logoName",title:"go to home"},{default:Object(n["M"])((function(){return[o]})),_:1})]),Object(n["i"])("nav",{onClick:t[0]||(t[0]=function(e){return c.dropDownApps()})},l),Object(n["l"])(n["b"],{name:"fade"},{default:Object(n["M"])((function(){return[c.showApps?(Object(n["w"])(),Object(n["h"])("div",u,f)):Object(n["g"])("",!0)]})),_:1}),Object(n["i"])("nav",null,[Object(n["l"])(d,{to:"/Register",class:"route-to"},{default:Object(n["M"])((function(){return[j]})),_:1}),Object(n["l"])(d,{to:"/login",class:"route-to"},{default:Object(n["M"])((function(){return[O]})),_:1})])]),Object(n["i"])("header",{class:Object(n["r"])(["small-screens",{whiteBg:c.showApps}])},[Object(n["i"])("nav",p,[Object(n["l"])(d,{to:"/",class:"logoName"},{default:Object(n["M"])((function(){return[m]})),_:1})]),Object(n["i"])("nav",{id:"bars",onClick:t[1]||(t[1]=function(e){return c.toggleMenu()})},h),Object(n["l"])(n["b"],{name:"fade"},{default:Object(n["M"])((function(){return[c.showApps?(Object(n["w"])(),Object(n["h"])("div",g,k)):Object(n["g"])("",!0)]})),_:1})],2)])}var C={name:"Header",setup:function(){var e=Object(n["B"])(!1),t=Object(n["B"])(!0),a=Object(n["B"])(!1);function c(){e.value=!e.value,a.value=!a.value}function i(){a.value=!a.value}return{showApps:a,clicked:t,toggled:e,toggleMenu:c,dropDownApps:i}}},T=(a("611b"),a("6b0d")),M=a.n(T);const _=M()(C,[["render",x],["__scopeId","data-v-d36eaf24"]]);t["a"]=_},"048e":function(e,t,a){},"0e01":function(e,t,a){e.exports=a.p+"img/desk.28ee7e92.svg"},"1a97":function(e,t,a){},"426c":function(e,t,a){"use strict";a("a1a7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={id:"main"},i=Object(n["i"])("span",{class:"to-landing-page reach beamerTrigger"},[Object(n["i"])("a",{class:"a"},[Object(n["i"])("i",{class:"fa-solid fa-bell"})])],-1);function r(e,t){var a=Object(n["D"])("router-view");return Object(n["w"])(),Object(n["h"])("main",c,[Object(n["l"])(a),i])}a("426c");var o=a("6b0d"),s=a.n(o);const l={},u=s()(l,[["render",r]]);var b=u,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),f=a("0e01"),j=a.n(f),O=function(e){return Object(n["z"])("data-v-5fcb1c0c"),e=e(),Object(n["x"])(),e},p={class:"home d-flex justify-content-between align-items-center"},m=O((function(){return Object(n["i"])("img",{src:j.a,alt:"",id:"desk",class:"d-none d-lg-block d-md-block d-sm-none"},null,-1)})),v=O((function(){return Object(n["i"])("div",{class:"code d-none d-lg-flex d-md-flex d-sm-none align-items-center justify-content-evenly flex-column"},[Object(n["i"])("li",null,"code all-night"),Object(n["i"])("li",null,"work hard"),Object(n["i"])("li",null,"Jesus first")],-1)})),h={class:"bn d-flex justify-content-evenly align-items-center"},g={class:"start",title:"sign up to use our apps and products"},w=Object(n["k"])("get started"),y={class:"demo",title:"Get to know more about ACTA..."},k=Object(n["k"])("contact"),x=O((function(){return Object(n["i"])("br",null,null,-1)}));function C(e,t,a,c,i,r){var o=Object(n["D"])("Header"),s=Object(n["D"])("Logo"),l=Object(n["D"])("Block"),u=Object(n["D"])("router-link"),b=Object(n["D"])("Projects"),d=Object(n["D"])("Footer");return Object(n["w"])(),Object(n["h"])("main",null,[Object(n["l"])(o),Object(n["l"])(s),Object(n["i"])("div",p,[Object(n["l"])(l),m,v]),Object(n["i"])("div",h,[Object(n["i"])("button",g,[Object(n["l"])(u,{to:"/login",class:"route"},{default:Object(n["M"])((function(){return[w]})),_:1})]),Object(n["i"])("button",y,[Object(n["l"])(u,{to:"/contact",id:"demo"},{default:Object(n["M"])((function(){return[k]})),_:1})])]),x,Object(n["l"])(b),Object(n["l"])(d)])}var T={class:"wrapper d-flex justify-content-center flex-column align-items-center"},M=Object(n["j"])('<div class="media d-flex justify-content-evenly align-items-center"><div class="logo d-flex justify-content-center flex-column align-items-center"><li>k</li><li>c</li><li>n</li></div><div class="text-uppercase" title="KCN EMPIRE">media</div></div><div class="list"><li>kukwa clovis ngong</li><li>fullstack web developer</li><li>keyboardist</li><li>herald</li><li>christocentric</li></div>',2),_=[M];function E(e,t,a,c,i,r){return Object(n["w"])(),Object(n["h"])("div",T,_)}var L={name:"Logo"};a("9df5");const B=s()(L,[["render",E]]);var D=B,z={class:"d-flex flex-row justify-content-between align-items-start p-5"},A=Object(n["j"])('<div data-v-6e37baea><h3 data-v-6e37baea>ABOUT</h3><li class="text-left text-capitalize text-white" data-v-6e37baea>Contact</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Blog</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Community</li><li class="text-left text-capitalize text-white" data-v-6e37baea>CAKE Token</li></div><div data-v-6e37baea><h3 data-v-6e37baea>HELP</h3><li class="text-left text-capitalize text-white" data-v-6e37baea>Customer Support</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Troubleshooting</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Guides</li></div><div data-v-6e37baea><h3 data-v-6e37baea>DEVELOPERS</h3><li class="text-left text-capitalize text-white" data-v-6e37baea><a href="https://github.com/kukwa-clovisn" data-v-6e37baea>Github</a></li><li class="text-left text-capitalize text-white" data-v-6e37baea>Documentation</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Bug Bounty</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Audits</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Careers</li></div><div class="text-white" data-v-6e37baea><i class="fa fa-user-circle" data-v-6e37baea></i><span class="mx-2" data-v-6e37baea>CodingHerald</span></div><div class="text-white" data-v-6e37baea><h2 data-v-6e37baea>online</h2><div class="d-flex justify-content-evenly align-items-center" data-v-6e37baea><i class="fab fa-twitter icon" data-v-6e37baea></i><i class="fab fa-telegram icon" data-v-6e37baea></i><i class="fab fa-whatsapp icon" data-v-6e37baea></i><i class="fab fa-instagram icon" data-v-6e37baea></i><i class="fab fa-youtube icon" data-v-6e37baea></i></div></div><hr data-v-6e37baea><div class="text-white kcn" data-v-6e37baea> ©<i style="color:brown;" data-v-6e37baea>codingherald</i><span class="text-uppercase" style="color:gold;" data-v-6e37baea>kcn</span>2021 </div>',7),S=[A];function P(e,t,a,c,i,r){return Object(n["w"])(),Object(n["h"])("footer",z,S)}var N={name:"Footer"};a("c29d");const G=s()(N,[["render",P],["__scopeId","data-v-6e37baea"]]);var q=G,I=a("0418"),R=function(e){return Object(n["z"])("data-v-00e19d72"),e=e(),Object(n["x"])(),e},K={class:"jombotron text-center d-md-none d-sm-block d-lg-block"},W=R((function(){return Object(n["i"])("li",null,"welcome to your world of creativity",-1)})),F=R((function(){return Object(n["i"])("li",null,"KCN empire",-1)})),H=R((function(){return Object(n["i"])("li",null,"in Christ alone",-1)})),U=[W,F,H];function V(e,t,a,c,i,r){return Object(n["w"])(),Object(n["h"])("div",K,U)}var J={name:"Block"};a("7e65");const X=s()(J,[["render",V],["__scopeId","data-v-00e19d72"]]);var Y=X,Q=a("e7e9"),Z=a.n(Q),$=a("57d5"),ee=a.n($),te=function(e){return Object(n["z"])("data-v-f2b6c930"),e=e(),Object(n["x"])(),e},ae=te((function(){return Object(n["i"])("header",{class:"header"},[Object(n["i"])("h1",null,"being in a world of creativity"),Object(n["i"])("h3",null,"Go through our various applications")],-1)})),ne={class:"projects"},ce=te((function(){return Object(n["i"])("span",{class:"fas fa-sun c1"},null,-1)})),ie=te((function(){return Object(n["i"])("i",{class:"fas fa-star c2"},null,-1)})),re={class:"project todo"},oe=te((function(){return Object(n["i"])("h1",null,"dayGoal",-1)})),se=te((function(){return Object(n["i"])("span",null,"Write out your todos' and follow up to achieve them",-1)})),le=te((function(){return Object(n["i"])("div",{class:"img"},[Object(n["i"])("div",{class:"img-desc"},[Object(n["i"])("h4",null,"my-Todo-app"),Object(n["i"])("p",null,[Object(n["k"])(" write down ur Goals... "),Object(n["i"])("ul",null,[Object(n["i"])("li",null,"daily target"),Object(n["i"])("li",null,"monthly target"),Object(n["i"])("li",null,"yearly target"),Object(n["i"])("li",null,"and more....")])])]),Object(n["i"])("img",{src:Z.a,alt:""})],-1)})),ue={class:"explore"},be=Object(n["k"])("explore"),de={class:"project currency"},fe=te((function(){return Object(n["i"])("h1",null,"cryptoSwap",-1)})),je=te((function(){return Object(n["i"])("span",null,"Swap coins and connect to wallet.",-1)})),Oe=te((function(){return Object(n["i"])("div",{class:"desc"},[Object(n["i"])("p",null,[Object(n["k"])("looking for a way to swap crypto currecies with ease? "),Object(n["i"])("br"),Object(n["k"])(),Object(n["i"])("span",null,"cryptoSwap"),Object(n["k"])(" Best crypto site....")]),Object(n["i"])("img",{src:ee.a,alt:""}),Object(n["i"])("p",null,"try our app and get current crypto news of BTC,Eth,and many other crytocurrencies you know")],-1)})),pe={class:"explore"},me=Object(n["k"])("explore"),ve={class:"project exchange"},he=te((function(){return Object(n["i"])("h1",null,"currencySwap",-1)})),ge=te((function(){return Object(n["i"])("span",null,"swap currencies in seconds....",-1)})),we=te((function(){return Object(n["i"])("p",null,"current exchange rates of currencies.",-1)})),ye=te((function(){return Object(n["i"])("img",{src:ee.a,alt:""},null,-1)})),ke=te((function(){return Object(n["i"])("p",null,"explore to find all the currencies you want",-1)})),xe=te((function(){return Object(n["i"])("p",null,"BTC, USD,NGN, XAF and many more currencies",-1)})),Ce={class:"explore"},Te=Object(n["k"])("explore"),Me=te((function(){return Object(n["i"])("span",{class:"hover"},[Object(n["k"])("currencySwap"),Object(n["i"])("p",{class:"hide"},"explore")],-1)}));function _e(e,t,a,c,i,r){var o=Object(n["D"])("router-link");return Object(n["w"])(),Object(n["h"])("main",null,[ae,Object(n["i"])("div",ne,[ce,ie,Object(n["i"])("div",re,[oe,se,le,Object(n["i"])("button",ue,[Object(n["l"])(o,{to:"/overview/Todo",class:"route"},{default:Object(n["M"])((function(){return[be]})),_:1})])]),Object(n["i"])("div",de,[fe,je,Oe,Object(n["i"])("button",pe,[Object(n["l"])(o,{to:"/overview/Currency",class:"route"},{default:Object(n["M"])((function(){return[me]})),_:1})])]),Object(n["i"])("div",ve,[Object(n["i"])("section",null,[he,ge,we,ye,ke,xe,Object(n["i"])("button",Ce,[Object(n["l"])(o,{to:"/overview/Exchange",class:"route"},{default:Object(n["M"])((function(){return[Te]})),_:1})])]),Me])])])}var Ee={name:"Projects"};a("f5c9");const Le=s()(Ee,[["render",_e],["__scopeId","data-v-f2b6c930"]]);var Be=Le,De={name:"Home",components:{Block:Y,Logo:D,Footer:q,Header:I["a"],Projects:Be},data:function(){return{desk:"",next:!0,back:!1,remove:!0}},updated:function(){this.myFunction()},methods:{myFunction:function(){document.body.scrollTop>50||document.documentElement.scrollTop},change:function(){this.next=!1,this.back=!0},return_back:function(){this.next=!0,this.back=!1},close:function(){this.remove=!1},view:function(){this.remove=!0}}};a("70b7");const ze=s()(De,[["render",C],["__scopeId","data-v-5fcb1c0c"]]);var Ae=ze,Se=function(e){return Object(n["z"])("data-v-25b6c246"),e=e(),Object(n["x"])(),e},Pe=Se((function(){return Object(n["i"])("a",{href:"/",class:"home"},"Home",-1)})),Ne={class:"form"},Ge={class:"contact-form",id:"contact"},qe=Object(n["j"])('<div class="bubble" data-v-25b6c246></div><div class="blur" data-v-25b6c246></div><h1 data-v-25b6c246>get in touch!</h1><h6 data-v-25b6c246> We deal and handle many businesses that will interest you. Check out our list of services we offer... </h6><div class="contact-header" data-v-25b6c246><nav data-v-25b6c246><i class="fa-brands fa-whatsapp icon" data-v-25b6c246></i><p data-v-25b6c246>+237682449347</p></nav><nav data-v-25b6c246><i class="fa-solid fa-phone icon" data-v-25b6c246></i><p data-v-25b6c246>+237682449347</p></nav><nav class="nav" data-v-25b6c246><i class="fa-solid fa-envelope icon" data-v-25b6c246></i><p data-v-25b6c246>kukwaclovisngong3@gmail.com</p></nav></div>',5),Ie=Se((function(){return Object(n["i"])("h2",null,"contact us!",-1)})),Re={class:"top-form"},Ke={class:"credentials"},We={class:"input"},Fe=Se((function(){return Object(n["i"])("label",{for:"name"},"Name:",-1)})),He={class:"input-field"},Ue=Se((function(){return Object(n["i"])("i",{class:"fa-regular fa-user"},null,-1)})),Ve={class:"input"},Je=Se((function(){return Object(n["i"])("label",{for:"email"},"email:",-1)})),Xe={class:"input-field"},Ye=Se((function(){return Object(n["i"])("i",{class:"fa-solid fa-envelope icon"},null,-1)})),Qe={class:"input"},Ze=Se((function(){return Object(n["i"])("label",{for:"subject"},"subject:",-1)})),$e={class:"input-field"},et=Se((function(){return Object(n["i"])("i",{class:"fa-solid fa-file-word"},null,-1)})),tt={class:"message"},at=Se((function(){return Object(n["i"])("label",{for:"message"},"message:",-1)})),nt=Object(n["j"])('<div class="bottom-form" data-v-25b6c246><h3 data-v-25b6c246>services</h3><div class="form-services" data-v-25b6c246><div class="service" data-v-25b6c246><span data-v-25b6c246>web developement</span></div><div class="service" data-v-25b6c246><span data-v-25b6c246>graphic design</span></div><div class="service" data-v-25b6c246><span data-v-25b6c246>crypto &amp; forex</span></div></div></div><div class="btns" data-v-25b6c246><button type="reset" data-v-25b6c246><i class="fa-solid fa-ban" data-v-25b6c246></i><span data-v-25b6c246>cancel</span></button><button type="submit" data-v-25b6c246><i class="fa-regular fa-paper-plane" data-v-25b6c246></i><span data-v-25b6c246>send message</span></button></div>',2),ct={key:0,class:"response-div"},it={key:0,class:"success"},rt=Se((function(){return Object(n["i"])("i",{class:"fa-solid fa-circle-check"},null,-1)})),ot={key:1,class:"failed"},st=Se((function(){return Object(n["i"])("i",{class:"fa-solid fa-triangle-exclamation"},null,-1)}));function lt(e,t,a,c,i,r){return Object(n["w"])(),Object(n["h"])("main",null,[Pe,Object(n["i"])("div",Ne,[Object(n["i"])("div",Ge,[qe,Object(n["i"])("form",{onSubmit:t[4]||(t[4]=Object(n["O"])((function(e){return c.sendMessage()}),["prevent"]))},[Ie,Object(n["i"])("div",Re,[Object(n["i"])("div",Ke,[Object(n["i"])("div",We,[Fe,Object(n["i"])("div",He,[Ue,Object(n["N"])(Object(n["i"])("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.user.username=e}),placeholder:"Enter name...",required:""},null,512),[[n["K"],c.user.username]])])]),Object(n["i"])("div",Ve,[Je,Object(n["i"])("div",Xe,[Ye,Object(n["N"])(Object(n["i"])("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.user.email=e}),placeholder:"Enter Email..",required:""},null,512),[[n["K"],c.user.email]])])]),Object(n["i"])("div",Qe,[Ze,Object(n["i"])("div",$e,[et,Object(n["N"])(Object(n["i"])("input",{type:"text",name:"number",id:"phone","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.user.number=e}),placeholder:"Enter whatsapp contact...",required:""},null,512),[[n["K"],c.user.number]])])])]),Object(n["i"])("div",tt,[at,Object(n["N"])(Object(n["i"])("textarea",{name:"message",id:"message",cols:"30",rows:"10","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.user.message=e}),placeholder:"Your message here!",required:""},null,512),[[n["K"],c.user.message]])])]),nt],32)]),Object(n["l"])(n["b"],{name:"pop"},{default:Object(n["M"])((function(){return[c.response.success||c.response.failed?(Object(n["w"])(),Object(n["h"])("div",ct,[c.response.success?(Object(n["w"])(),Object(n["h"])("div",it,[rt,Object(n["k"])(Object(n["G"])(c.response.msg),1)])):Object(n["g"])("",!0),c.response.failed?(Object(n["w"])(),Object(n["h"])("div",ot,[st,Object(n["k"])(Object(n["G"])(c.response.msg),1)])):Object(n["g"])("",!0)])):Object(n["g"])("",!0)]})),_:1})])])}var ut=a("bc3a"),bt=a.n(ut),dt={name:"Nav",setup:function(){var e=Object(n["A"])({success:!1,failed:!1,msg:""}),t=Object(n["A"])({username:"",email:"",message:"",number:""});function a(){bt.a.post("api/admin/contact",t,{headers:{"Content-Type":"application/json"}}).then((function(a){"OK"===a.statusText&&(e.success=!0,e.msg=a.data.msg,t.username="",t.email="",t.number="",t.message="",setTimeout((function(){e.success=!1}),3e3))})).catch((function(t){e.failed=!0,e.msg=t.response.data.msg,setTimeout((function(){e.failed=!1}),3e3)}))}return{sendMessage:a,user:t,response:e}}};a("af51");const ft=s()(dt,[["render",lt],["__scopeId","data-v-25b6c246"]]);var jt=ft,Ot=(a("a4d3"),a("e01a"),a("b0c0"),a("9e6f")),pt=a.n(Ot),mt=function(e){return Object(n["z"])("data-v-326d3496"),e=e(),Object(n["x"])(),e},vt={id:"main"},ht={class:"main"},gt={key:0,class:"left-main"},wt=mt((function(){return Object(n["i"])("header",null,[Object(n["i"])("h1",null,"codingheraldapps")],-1)})),yt=[wt],kt=mt((function(){return Object(n["i"])("i",{class:"fa-solid fa-align-left"},null,-1)})),xt=[kt],Ct={class:"items"},Tt=Object(n["k"])("important memories "),Mt={class:"center-main"},_t={key:0,class:"image"},Et={class:"img"},Lt={key:0,src:pt.a,alt:""},Bt=["src"],Dt=mt((function(){return Object(n["i"])("h4",null,"profile",-1)})),zt=mt((function(){return Object(n["i"])("div",{class:"img"},[Object(n["i"])("img",{src:pt.a,alt:""})],-1)})),At=mt((function(){return Object(n["i"])("span",{class:"about"},"About",-1)})),St=mt((function(){return Object(n["i"])("label",{for:"slang"},[Object(n["i"])("i",{class:"fa-solid fa-pen"})],-1)})),Pt={class:"slang"},Nt=mt((function(){return Object(n["i"])("button",{type:"submit"},"update",-1)})),Gt={key:0,class:"memories"},qt={key:0,class:"items"},It=["onClick"],Rt={key:1,class:"readText"};function Kt(e,t,a,c,i,r){return Object(n["w"])(),Object(n["h"])("main",vt,[Object(n["i"])("div",ht,[Object(n["l"])(n["b"],{name:"fade"},{default:Object(n["M"])((function(){return[c.squeeze?Object(n["g"])("",!0):(Object(n["w"])(),Object(n["h"])("div",gt,yt))]})),_:1}),Object(n["i"])("div",{class:Object(n["r"])(["right-main",{squeeze:c.squeeze}])},[Object(n["i"])("header",null,[Object(n["i"])("nav",{class:"menu",onClick:t[0]||(t[0]=function(e){return c.squeeze=!c.squeeze})},xt),Object(n["i"])("nav",Ct,[Object(n["i"])("a",{onClick:t[1]||(t[1]=function(e){return c.showMemories=!c.showMemories})},[Tt,Object(n["i"])("span",null,Object(n["G"])(c.user.memories),1)]),Object(n["i"])("a",{onClick:t[2]||(t[2]=function(e){return c.logoutFunc()})},"logout")])])],2)]),Object(n["i"])("div",Mt,[Object(n["l"])(n["b"],{name:"fade"},{default:Object(n["M"])((function(){return[c.squeeze?Object(n["g"])("",!0):(Object(n["w"])(),Object(n["h"])("div",_t,[Object(n["i"])("div",Et,[c.user.image?Object(n["g"])("",!0):(Object(n["w"])(),Object(n["h"])("img",Lt)),c.user.image?(Object(n["w"])(),Object(n["h"])("img",{key:1,src:c.user.image,alt:""},null,8,Bt)):Object(n["g"])("",!0)])]))]})),_:1}),Object(n["l"])(n["b"],{name:"fade"},{default:Object(n["M"])((function(){return[Object(n["i"])("div",{class:Object(n["r"])(["credentials",{squeeze:c.squeeze}])},[Dt,Object(n["i"])("h1",null,Object(n["G"])(c.user.username),1),Object(n["i"])("h3",null,Object(n["G"])(c.user.email),1),Object(n["i"])("p",null,"Dairy: "+Object(n["G"])(c.user.allMemories)+" memories",1),zt,At,Object(n["i"])("p",null,[Object(n["k"])(Object(n["G"])(c.description)+" ",1),St]),Object(n["i"])("div",Pt,[Object(n["i"])("form",{onSubmit:t[4]||(t[4]=Object(n["O"])((function(e){return c.updateTitle()}),["prevent"]))},[Object(n["N"])(Object(n["i"])("input",{type:"text",name:"description",id:"slang","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.title=e}),placeholder:"edit your description or title",required:""},null,512),[[n["K"],c.title]]),Nt],32)])],2)]})),_:1})]),c.showMemories?(Object(n["w"])(),Object(n["h"])("div",Gt,[Object(n["i"])("div",{class:"blur",onClick:t[5]||(t[5]=function(e){return c.showMemories=!c.showMemories})}),c.read?Object(n["g"])("",!0):(Object(n["w"])(),Object(n["h"])("div",qt,[Object(n["i"])("i",{class:"fa-solid fa-rectangle-xmark",onClick:t[6]||(t[6]=function(e){return c.showMemories=!c.showMemories})}),Object(n["l"])(n["c"],{tag:"ul",appear:"",name:"fade"},{default:Object(n["M"])((function(){return[(Object(n["w"])(!0),Object(n["h"])(n["a"],null,Object(n["C"])(c.memoriesArr,(function(e,t){return Object(n["w"])(),Object(n["h"])("li",{key:t.date,onClick:function(t){return c.readMemory(e.name,e.date)}},Object(n["G"])(e.name),9,It)})),128))]})),_:1})])),c.read?(Object(n["w"])(),Object(n["h"])("div",Rt,[Object(n["i"])("i",{class:"fa-solid fa-rectangle-xmark",onClick:t[7]||(t[7]=function(e){c.read=!c.read,c.showMemories=!c.showMemories})}),Object(n["i"])("h3",null,Object(n["G"])(c.readMemoryDate),1),Object(n["i"])("p",null,Object(n["G"])(c.readMemoryText),1)])):Object(n["g"])("",!0)])):Object(n["g"])("",!0)])}var Wt={name:"Profile",setup:function(){var e=Object(d["c"])(),t=Object(n["A"])({username:"",email:"",image:"",memories:0,allMemories:0}),a=Object(n["B"])(!1),c=Object(n["B"])(localStorage.getItem("accessId")),i=Object(n["B"])(!1),r=Object(n["B"])([]),o=Object(n["B"])(""),s=Object(n["B"])(!1),l=Object(n["B"])(""),u=Object(n["B"])("welcome to your profile . you can update your description below"),b=Object(n["B"])(""),f=Object(n["B"])(!1);function j(e,t){i.value=!i.value,o.value=e,l.value=t}function O(){localStorage.setItem("accessToken",""),e.push("/")}function p(){bt.a.post("api/todo/user/".concat(c.value),{description:b.value},{headers:{"Content-Type":"application/json"}}).then((function(e){return u.value=b.value,b.value="",e})).catch((function(e){return e}))}function m(e){var t=new FormData;t.append("file",e.target.files[0])}return Object(n["u"])((function(){bt()("/api/todo/".concat(c.value)).then((function(e){if("OK"===e.statusText){t.username=e.data.username,t.email=e.data.email,t.allMemories=e.data.todos.length,""!==e.data.description&&(u.value=e.data.description);for(var a=0;a<e.data.todos.length;a++)e.data.todos[a].done&&r.value.push(e.data.todos[a]);t.memories=r.value.length}})).catch((function(e){return e}))})),{read:i,user:t,readMemoryText:o,readMemoryDate:l,showMemories:s,memoriesArr:r,squeeze:f,title:b,description:u,changeImg:a,user_id:c,readMemory:j,updateTitle:p,updateProfile:m,logoutFunc:O}}};a("daea");const Ft=s()(Wt,[["render",Kt],["__scopeId","data-v-326d3496"]]);var Ht=Ft,Ut=[{path:"/",name:"Home",component:Ae},{path:"/Login",name:"Login",component:function(){return a.e("Login").then(a.bind(null,"1954"))}},{path:"/contact",name:"Contact",component:jt},{path:"/overview/Todo",name:"Client",component:function(){return a.e("chunk-576bdf98").then(a.bind(null,"12d2"))},beforeEnter:function(e,t,a){bt()("api/token").then((function(e){"OK"===e.statusText?a():a("/login")})).catch((function(e){return a("/login"),e}))},children:[{path:"/overview/profile",name:"Profile",component:Ht},{path:"/overview/imageCompressor",name:"imageCompressor",component:function(){return a.e("imageCompressor").then(a.bind(null,"0640"))}},{path:"/overview/Todo",name:"Todo",component:function(){return a.e("Todo").then(a.bind(null,"a3b3"))}},{path:"/overview/Weather",name:"Weather",component:function(){return a.e("Weather").then(a.bind(null,"6a05"))}},{path:"/overview/Exchange",name:"Exchange",component:function(){return a.e("Exchange").then(a.bind(null,"2c70"))}}]},{path:"/Register",name:"Register",component:function(){return a.e("Register").then(a.bind(null,"1feb"))}},{path:"/Dashboard",name:"Dashboard",component:function(){return a.e("Dashboard").then(a.bind(null,"0c7c"))}},{path:"/ChatLogic",name:"ChatLogic",component:function(){return a.e("ChatLogic").then(a.bind(null,"9802"))}},{path:"/chatBox",name:"chatBox",component:function(){return a.e("chunk-c49b33e6").then(a.bind(null,"6fa3"))}},{path:"/forgot_password",name:"Forgot_password",component:function(){return a.e("chunk-440be6f0").then(a.bind(null,"59dd"))}}],Vt=Object(d["a"])({history:Object(d["b"])("/"),routes:Ut}),Jt=Vt;bt.a.defaults.baseURL="http://localhost:9002",bt.a.defaults.headers.common["Authorization"]="Bearer ".concat(localStorage.getItem("accessToken"));var Xt=Object(n["e"])(b);Xt.use(Jt).mount("#app")},"57d5":function(e,t,a){e.exports=a.p+"img/cross.6aa9d8b2.jpg"},5892:function(e,t,a){},"611b":function(e,t,a){"use strict";a("89fd")},"6d20":function(e,t,a){},"70b7":function(e,t,a){"use strict";a("048e")},"7e65":function(e,t,a){"use strict";a("1a97")},"7fef":function(e,t,a){},"89fd":function(e,t,a){},"9df5":function(e,t,a){"use strict";a("5892")},"9e6f":function(e,t,a){e.exports=a.p+"img/todo.2f11b244.jpg"},a1a7:function(e,t,a){},af51:function(e,t,a){"use strict";a("6d20")},b1f0:function(e,t,a){},c29d:function(e,t,a){"use strict";a("7fef")},c7c0:function(e,t,a){},daea:function(e,t,a){"use strict";a("b1f0")},e7e9:function(e,t,a){e.exports=a.p+"img/list.d709d114.svg"},f5c9:function(e,t,a){"use strict";a("c7c0")}});
//# sourceMappingURL=app.f83d5746.js.map