(function(e){function t(t){for(var a,c,r=t[0],l=t[1],s=t[2],u=0,d=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},c={app:0},i={app:0},o=[];function r(e){return l.p+"js/"+({ChatLogic:"ChatLogic",Dashboard:"Dashboard",Exchange:"Exchange",Login:"Login",Register:"Register",Todo:"Todo",Weather:"Weather",locked:"locked"}[e]||e)+"."+{ChatLogic:"40039d5e",Dashboard:"a0c0988c",Exchange:"6d8cea16",Login:"ed4a2b4c",Register:"3539c4c9",Todo:"06b2aec1",Weather:"665a0fe8","chunk-1ea22f6e":"cfc23e1a","chunk-205a1c65":"82799516","chunk-706bf245":"d1fd85c2",locked:"ad8eb411"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={ChatLogic:1,Dashboard:1,Exchange:1,Login:1,Register:1,Todo:1,Weather:1,"chunk-1ea22f6e":1,"chunk-205a1c65":1,"chunk-706bf245":1,locked:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({ChatLogic:"ChatLogic",Dashboard:"Dashboard",Exchange:"Exchange",Login:"Login",Register:"Register",Todo:"Todo",Weather:"Weather",locked:"locked"}[e]||e)+"."+{ChatLogic:"3379158b",Dashboard:"daebe4fd",Exchange:"6c2b5269",Login:"26095335",Register:"7d9c159e",Todo:"695b4bc7",Weather:"a80cce9d","chunk-1ea22f6e":"eda55c0e","chunk-205a1c65":"f9c0fd1d","chunk-706bf245":"9d3dfcd4",locked:"4cc761b5"}[e]+".css",i=l.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var s=o[r],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){s=d[r],u=s.getAttribute("data-href");if(u===a||u===i)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],b.parentNode.removeChild(b),n(o)},b.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}i[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";var a=n("7a23"),c=function(e){return Object(a["z"])("data-v-58306695"),e=e(),Object(a["x"])(),e},i={class:"large-screens"},o={class:"logo"},r=Object(a["k"])("CH"),l=c((function(){return Object(a["i"])("span",{class:"route-to"},"services",-1)})),s=[l],u={key:0,id:"app-list"},d=c((function(){return Object(a["i"])("h1",null,"our courses and services",-1)})),b=c((function(){return Object(a["i"])("ul",null,[Object(a["i"])("li",null,[Object(a["i"])("a",{href:"https://advancedtechacademy.herokuapp.com"},[Object(a["i"])("i",{class:"fa-solid fa-graduation-cap"}),Object(a["k"])("academy")])]),Object(a["i"])("li",null,[Object(a["i"])("a",{href:"/overview/Todo"},[Object(a["i"])("i",{class:"fa-solid fa-calendar-check"}),Object(a["k"])("dairy")])]),Object(a["i"])("li",null,[Object(a["i"])("a",{href:"/overview/currency"},[Object(a["i"])("i",{class:"fa-brands fa-bitcoin"}),Object(a["k"])("cryptoswap")])]),Object(a["i"])("li",null,[Object(a["i"])("a",{href:"/https://advancedtechacademy.herokuapp.com"},[Object(a["i"])("i",{class:"fa-solid fa-music"}),Object(a["k"])("piano lessons")])])],-1)})),f=[d,b],p=Object(a["k"])("sign up"),j=Object(a["k"])("sign in"),v={class:"logo",title:"In Christ alone#TeamJesus4Life"},h=Object(a["k"])("Codingherald"),O=c((function(){return Object(a["i"])("i",{class:"fa-solid fa-bars",id:"menu-bars"},null,-1)})),m=[O],g={key:0,id:"app-list"},w=c((function(){return Object(a["i"])("h1",null,"our courses and services",-1)})),k=c((function(){return Object(a["i"])("ul",null,[Object(a["i"])("li",null,[Object(a["i"])("a",{href:"https://advancedtechacademy.herokuapp.com"},[Object(a["i"])("i",{class:"fa-solid fa-graduation-cap"}),Object(a["k"])("academy")])]),Object(a["i"])("li",null,[Object(a["i"])("a",{href:"/overview/Todo"},[Object(a["i"])("i",{class:"fa-solid fa-calendar-check"}),Object(a["k"])("dairy")])]),Object(a["i"])("li",null,[Object(a["i"])("a",{href:"/overview/currency"},[Object(a["i"])("i",{class:"fa-brands fa-bitcoin"}),Object(a["k"])("cryptoswap")])]),Object(a["i"])("li",null,[Object(a["i"])("a",{href:"/https://advancedtechacademy.herokuapp.com"},[Object(a["i"])("i",{class:"fa-solid fa-music"}),Object(a["k"])("piano lessons")])])],-1)})),x=[w,k];function y(e,t,n,c,l,d){var b=Object(a["D"])("router-link");return Object(a["w"])(),Object(a["h"])("main",null,[Object(a["i"])("header",i,[Object(a["i"])("nav",o,[Object(a["l"])(b,{to:"/",class:"logoName",title:"go to home"},{default:Object(a["L"])((function(){return[r]})),_:1})]),Object(a["i"])("nav",{onClick:t[0]||(t[0]=function(e){return c.dropDownApps()})},s),Object(a["l"])(a["b"],{name:"fade"},{default:Object(a["L"])((function(){return[c.showApps?(Object(a["w"])(),Object(a["h"])("div",u,f)):Object(a["g"])("",!0)]})),_:1}),Object(a["i"])("nav",null,[Object(a["l"])(b,{to:"/Register",class:"route-to"},{default:Object(a["L"])((function(){return[p]})),_:1}),Object(a["l"])(b,{to:"/login",class:"route-to"},{default:Object(a["L"])((function(){return[j]})),_:1})])]),Object(a["i"])("header",{class:Object(a["r"])(["small-screens",{whiteBg:c.showApps}])},[Object(a["i"])("nav",v,[Object(a["l"])(b,{to:"/",class:"logoName"},{default:Object(a["L"])((function(){return[h]})),_:1})]),Object(a["i"])("nav",{id:"bars",onClick:t[1]||(t[1]=function(e){return c.toggleMenu()})},m),Object(a["l"])(a["b"],{name:"fade"},{default:Object(a["L"])((function(){return[c.showApps?(Object(a["w"])(),Object(a["h"])("div",g,x)):Object(a["g"])("",!0)]})),_:1})],2)])}var L={name:"Header",setup:function(){var e=Object(a["B"])(!1),t=Object(a["B"])(!0),n=Object(a["B"])(!1);function c(){e.value=!e.value,n.value=!n.value}function i(){n.value=!n.value}return{showApps:n,clicked:t,toggled:e,toggleMenu:c,dropDownApps:i}}},C=(n("4c3e"),n("6b0d")),_=n.n(C);const T=_()(L,[["render",y],["__scopeId","data-v-58306695"]]);t["a"]=T},"048e":function(e,t,n){},"0e01":function(e,t,n){e.exports=n.p+"img/desk.28ee7e92.svg"},"1a97":function(e,t,n){},"1c65":function(e,t,n){},"4c3e":function(e,t,n){"use strict";n("1c65")},"4d24":function(e,t,n){"use strict";n("d469")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t){var n=Object(a["D"])("router-view");return Object(a["w"])(),Object(a["f"])(n)}n("d066c");var i=n("6b0d"),o=n.n(i);const r={},l=o()(r,[["render",c]]);var s=l,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d=n("0e01"),b=n.n(d),f=function(e){return Object(a["z"])("data-v-5fcb1c0c"),e=e(),Object(a["x"])(),e},p={class:"home d-flex justify-content-between align-items-center"},j=f((function(){return Object(a["i"])("img",{src:b.a,alt:"",id:"desk",class:"d-none d-lg-block d-md-block d-sm-none"},null,-1)})),v=f((function(){return Object(a["i"])("div",{class:"code d-none d-lg-flex d-md-flex d-sm-none align-items-center justify-content-evenly flex-column"},[Object(a["i"])("li",null,"code all-night"),Object(a["i"])("li",null,"work hard"),Object(a["i"])("li",null,"Jesus first")],-1)})),h={class:"bn d-flex justify-content-evenly align-items-center"},O={class:"start",title:"sign up to use our apps and products"},m=Object(a["k"])("get started"),g={class:"demo",title:"Get to know more about ACTA..."},w=Object(a["k"])("contact"),k=f((function(){return Object(a["i"])("br",null,null,-1)}));function x(e,t,n,c,i,o){var r=Object(a["D"])("Header"),l=Object(a["D"])("Logo"),s=Object(a["D"])("Block"),u=Object(a["D"])("router-link"),d=Object(a["D"])("Projects"),b=Object(a["D"])("Footer");return Object(a["w"])(),Object(a["h"])("main",null,[Object(a["l"])(r),Object(a["l"])(l),Object(a["i"])("div",p,[Object(a["l"])(s),j,v]),Object(a["i"])("div",h,[Object(a["i"])("button",O,[Object(a["l"])(u,{to:"/login",class:"route"},{default:Object(a["L"])((function(){return[m]})),_:1})]),Object(a["i"])("button",g,[Object(a["l"])(u,{to:"/contact",id:"demo"},{default:Object(a["L"])((function(){return[w]})),_:1})])]),k,Object(a["l"])(d),Object(a["l"])(b)])}var y={class:"wrapper d-flex justify-content-center flex-column align-items-center"},L=Object(a["j"])('<div class="media d-flex justify-content-evenly align-items-center"><div class="logo d-flex justify-content-center flex-column align-items-center"><li>k</li><li>c</li><li>n</li></div><div class="text-uppercase" title="KCN EMPIRE">media</div></div><div class="list"><li>kukwa clovis ngong</li><li>fullstack web developer</li><li>keyboardist</li><li>herald</li><li>christocentric</li></div>',2),C=[L];function _(e,t,n,c,i,o){return Object(a["w"])(),Object(a["h"])("div",y,C)}var T={name:"Logo"};n("9df5");const E=o()(T,[["render",_]]);var D=E,A={class:"d-flex flex-row justify-content-between align-items-start p-5"},B=Object(a["j"])('<div data-v-6e37baea><h3 data-v-6e37baea>ABOUT</h3><li class="text-left text-capitalize text-white" data-v-6e37baea>Contact</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Blog</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Community</li><li class="text-left text-capitalize text-white" data-v-6e37baea>CAKE Token</li></div><div data-v-6e37baea><h3 data-v-6e37baea>HELP</h3><li class="text-left text-capitalize text-white" data-v-6e37baea>Customer Support</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Troubleshooting</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Guides</li></div><div data-v-6e37baea><h3 data-v-6e37baea>DEVELOPERS</h3><li class="text-left text-capitalize text-white" data-v-6e37baea><a href="https://github.com/kukwa-clovisn" data-v-6e37baea>Github</a></li><li class="text-left text-capitalize text-white" data-v-6e37baea>Documentation</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Bug Bounty</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Audits</li><li class="text-left text-capitalize text-white" data-v-6e37baea>Careers</li></div><div class="text-white" data-v-6e37baea><i class="fa fa-user-circle" data-v-6e37baea></i><span class="mx-2" data-v-6e37baea>CodingHerald</span></div><div class="text-white" data-v-6e37baea><h2 data-v-6e37baea>online</h2><div class="d-flex justify-content-evenly align-items-center" data-v-6e37baea><i class="fab fa-twitter icon" data-v-6e37baea></i><i class="fab fa-telegram icon" data-v-6e37baea></i><i class="fab fa-whatsapp icon" data-v-6e37baea></i><i class="fab fa-instagram icon" data-v-6e37baea></i><i class="fab fa-youtube icon" data-v-6e37baea></i></div></div><hr data-v-6e37baea><div class="text-white kcn" data-v-6e37baea> ©<i style="color:brown;" data-v-6e37baea>codingherald</i><span class="text-uppercase" style="color:gold;" data-v-6e37baea>kcn</span>2021 </div>',7),S=[B];function z(e,t,n,c,i,o){return Object(a["w"])(),Object(a["h"])("footer",A,S)}var P={name:"Footer"};n("c29d");const N=o()(P,[["render",z],["__scopeId","data-v-6e37baea"]]);var R=N,M=n("0418"),H=function(e){return Object(a["z"])("data-v-00e19d72"),e=e(),Object(a["x"])(),e},W={class:"jombotron text-center d-md-none d-sm-block d-lg-block"},F=H((function(){return Object(a["i"])("li",null,"welcome to your world of creativity",-1)})),I=H((function(){return Object(a["i"])("li",null,"KCN empire",-1)})),J=H((function(){return Object(a["i"])("li",null,"in Christ alone",-1)})),U=[F,I,J];function G(e,t,n,c,i,o){return Object(a["w"])(),Object(a["h"])("div",W,U)}var q={name:"Block"};n("7e65");const K=o()(q,[["render",G],["__scopeId","data-v-00e19d72"]]);var V=K,Q=n("e7e9"),X=n.n(Q),Y=n("57d5"),Z=n.n(Y),$=function(e){return Object(a["z"])("data-v-a095deac"),e=e(),Object(a["x"])(),e},ee=$((function(){return Object(a["i"])("header",{class:"header"},[Object(a["i"])("h1",null,"being in a world of creativity"),Object(a["i"])("h3",null,"Go through our various applications")],-1)})),te={class:"projects"},ne=$((function(){return Object(a["i"])("span",{class:"fas fa-sun c1"},null,-1)})),ae=$((function(){return Object(a["i"])("i",{class:"fas fa-star c2"},null,-1)})),ce={class:"project chat"},ie={class:"content",id:"content"},oe={class:"left-div"},re=$((function(){return Object(a["i"])("h1",null,"HeraldsChat",-1)})),le=$((function(){return Object(a["i"])("span",null,"bluechat",-1)})),se={class:"explore"},ue=Object(a["k"])("explore"),de={class:"right-div"},be=$((function(){return Object(a["i"])("h3",null,[Object(a["k"])("welcome to "),Object(a["i"])("span",null,"HeraldsChat")],-1)})),fe=$((function(){return Object(a["i"])("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, autem laborum. Quo ab repellendus eligendi, ipsum asperiores beatae ad accusamus! ",-1)})),pe=$((function(){return Object(a["i"])("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, autem laborum. Quo ab repellendus eligendi, ipsum asperiores beatae ad accusamus! ",-1)})),je=$((function(){return Object(a["i"])("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, autem laborum. ",-1)})),ve={class:"explore"},he=Object(a["k"])("explore"),Oe={class:"project todo"},me=$((function(){return Object(a["i"])("h1",null,"dayGoal",-1)})),ge=$((function(){return Object(a["i"])("span",null,"Write out your todos' and follow up to achieve them",-1)})),we=$((function(){return Object(a["i"])("div",{class:"img"},[Object(a["i"])("div",{class:"img-desc"},[Object(a["i"])("h4",null,"my-Todo-app"),Object(a["i"])("p",null,[Object(a["k"])(" write down ur Goals... "),Object(a["i"])("ul",null,[Object(a["i"])("li",null,"daily target"),Object(a["i"])("li",null,"monthly target"),Object(a["i"])("li",null,"yearly target"),Object(a["i"])("li",null,"and more....")])])]),Object(a["i"])("img",{src:X.a,alt:""})],-1)})),ke={class:"explore"},xe=Object(a["k"])("explore"),ye={class:"project currency"},Le=$((function(){return Object(a["i"])("h1",null,"cryptoSwap",-1)})),Ce=$((function(){return Object(a["i"])("span",null,"Swap coins and connect to wallet.",-1)})),_e=$((function(){return Object(a["i"])("div",{class:"desc"},[Object(a["i"])("p",null,[Object(a["k"])("looking for a way to swap crypto currecies with ease? "),Object(a["i"])("br"),Object(a["k"])(),Object(a["i"])("span",null,"cryptoSwap"),Object(a["k"])(" Best crypto site....")]),Object(a["i"])("img",{src:Z.a,alt:""}),Object(a["i"])("p",null,"try our app and get current crypto news of BTC,Eth,and many other crytocurrencies you know")],-1)})),Te={class:"explore"},Ee=Object(a["k"])("explore"),De={class:"project exchange"},Ae=$((function(){return Object(a["i"])("h1",null,"currencySwap",-1)})),Be=$((function(){return Object(a["i"])("span",null,"swap currencies in seconds....",-1)})),Se=$((function(){return Object(a["i"])("p",null,"current exchange rates of currencies.",-1)})),ze=$((function(){return Object(a["i"])("img",{src:Z.a,alt:""},null,-1)})),Pe=$((function(){return Object(a["i"])("p",null,"explore to find all the currencies you want",-1)})),Ne=$((function(){return Object(a["i"])("p",null,"BTC, USD,NGN, XAF and many more currencies",-1)})),Re={class:"explore"},Me=Object(a["k"])("explore"),He=$((function(){return Object(a["i"])("span",{class:"hover"},[Object(a["k"])("currencySwap"),Object(a["i"])("p",{class:"hide"},"explore")],-1)}));function We(e,t,n,c,i,o){var r=Object(a["D"])("router-link");return Object(a["w"])(),Object(a["h"])("main",null,[ee,Object(a["i"])("div",te,[ne,ae,Object(a["i"])("div",ce,[Object(a["i"])("div",ie,[Object(a["i"])("div",oe,[re,le,Object(a["i"])("button",se,[Object(a["l"])(r,{to:"/Dashboard",class:"route"},{default:Object(a["L"])((function(){return[ue]})),_:1})])]),Object(a["i"])("div",de,[be,fe,pe,je,Object(a["i"])("button",ve,[Object(a["l"])(r,{to:"/Dashboard",class:"route"},{default:Object(a["L"])((function(){return[he]})),_:1})])])])]),Object(a["i"])("div",Oe,[me,ge,we,Object(a["i"])("button",ke,[Object(a["l"])(r,{to:"/overview/Todo",class:"route"},{default:Object(a["L"])((function(){return[xe]})),_:1})])]),Object(a["i"])("div",ye,[Le,Ce,_e,Object(a["i"])("button",Te,[Object(a["l"])(r,{to:"/overview/Currency",class:"route"},{default:Object(a["L"])((function(){return[Ee]})),_:1})])]),Object(a["i"])("div",De,[Object(a["i"])("section",null,[Ae,Be,Se,ze,Pe,Ne,Object(a["i"])("button",Re,[Object(a["l"])(r,{to:"/overview/Exchange",class:"route"},{default:Object(a["L"])((function(){return[Me]})),_:1})])]),He])])])}var Fe={name:"Projects"};n("4d24");const Ie=o()(Fe,[["render",We],["__scopeId","data-v-a095deac"]]);var Je=Ie,Ue={name:"Home",components:{Block:V,Logo:D,Footer:R,Header:M["a"],Projects:Je},data:function(){return{desk:"",next:!0,back:!1,remove:!0}},updated:function(){this.myFunction()},methods:{myFunction:function(){document.body.scrollTop>50||document.documentElement.scrollTop},change:function(){this.next=!1,this.back=!0},return_back:function(){this.next=!0,this.back=!1},close:function(){this.remove=!1},view:function(){this.remove=!0}}};n("70b7");const Ge=o()(Ue,[["render",x],["__scopeId","data-v-5fcb1c0c"]]);var qe=Ge,Ke=function(e){return Object(a["z"])("data-v-25b6c246"),e=e(),Object(a["x"])(),e},Ve=Ke((function(){return Object(a["i"])("a",{href:"/",class:"home"},"Home",-1)})),Qe={class:"form"},Xe={class:"contact-form",id:"contact"},Ye=Object(a["j"])('<div class="bubble" data-v-25b6c246></div><div class="blur" data-v-25b6c246></div><h1 data-v-25b6c246>get in touch!</h1><h6 data-v-25b6c246> We deal and handle many businesses that will interest you. Check out our list of services we offer... </h6><div class="contact-header" data-v-25b6c246><nav data-v-25b6c246><i class="fa-brands fa-whatsapp icon" data-v-25b6c246></i><p data-v-25b6c246>+237682449347</p></nav><nav data-v-25b6c246><i class="fa-solid fa-phone icon" data-v-25b6c246></i><p data-v-25b6c246>+237682449347</p></nav><nav class="nav" data-v-25b6c246><i class="fa-solid fa-envelope icon" data-v-25b6c246></i><p data-v-25b6c246>kukwaclovisngong3@gmail.com</p></nav></div>',5),Ze=Ke((function(){return Object(a["i"])("h2",null,"contact us!",-1)})),$e={class:"top-form"},et={class:"credentials"},tt={class:"input"},nt=Ke((function(){return Object(a["i"])("label",{for:"name"},"Name:",-1)})),at={class:"input-field"},ct=Ke((function(){return Object(a["i"])("i",{class:"fa-regular fa-user"},null,-1)})),it={class:"input"},ot=Ke((function(){return Object(a["i"])("label",{for:"email"},"email:",-1)})),rt={class:"input-field"},lt=Ke((function(){return Object(a["i"])("i",{class:"fa-solid fa-envelope icon"},null,-1)})),st={class:"input"},ut=Ke((function(){return Object(a["i"])("label",{for:"subject"},"subject:",-1)})),dt={class:"input-field"},bt=Ke((function(){return Object(a["i"])("i",{class:"fa-solid fa-file-word"},null,-1)})),ft={class:"message"},pt=Ke((function(){return Object(a["i"])("label",{for:"message"},"message:",-1)})),jt=Object(a["j"])('<div class="bottom-form" data-v-25b6c246><h3 data-v-25b6c246>services</h3><div class="form-services" data-v-25b6c246><div class="service" data-v-25b6c246><span data-v-25b6c246>web developement</span></div><div class="service" data-v-25b6c246><span data-v-25b6c246>graphic design</span></div><div class="service" data-v-25b6c246><span data-v-25b6c246>crypto &amp; forex</span></div></div></div><div class="btns" data-v-25b6c246><button type="reset" data-v-25b6c246><i class="fa-solid fa-ban" data-v-25b6c246></i><span data-v-25b6c246>cancel</span></button><button type="submit" data-v-25b6c246><i class="fa-regular fa-paper-plane" data-v-25b6c246></i><span data-v-25b6c246>send message</span></button></div>',2),vt={key:0,class:"response-div"},ht={key:0,class:"success"},Ot=Ke((function(){return Object(a["i"])("i",{class:"fa-solid fa-circle-check"},null,-1)})),mt={key:1,class:"failed"},gt=Ke((function(){return Object(a["i"])("i",{class:"fa-solid fa-triangle-exclamation"},null,-1)}));function wt(e,t,n,c,i,o){return Object(a["w"])(),Object(a["h"])("main",null,[Ve,Object(a["i"])("div",Qe,[Object(a["i"])("div",Xe,[Ye,Object(a["i"])("form",{onSubmit:t[4]||(t[4]=Object(a["N"])((function(e){return c.sendMessage()}),["prevent"]))},[Ze,Object(a["i"])("div",$e,[Object(a["i"])("div",et,[Object(a["i"])("div",tt,[nt,Object(a["i"])("div",at,[ct,Object(a["M"])(Object(a["i"])("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.user.username=e}),placeholder:"Enter name...",required:""},null,512),[[a["J"],c.user.username]])])]),Object(a["i"])("div",it,[ot,Object(a["i"])("div",rt,[lt,Object(a["M"])(Object(a["i"])("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.user.email=e}),placeholder:"Enter Email..",required:""},null,512),[[a["J"],c.user.email]])])]),Object(a["i"])("div",st,[ut,Object(a["i"])("div",dt,[bt,Object(a["M"])(Object(a["i"])("input",{type:"text",name:"number",id:"phone","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.user.number=e}),placeholder:"Enter whatsapp contact...",required:""},null,512),[[a["J"],c.user.number]])])])]),Object(a["i"])("div",ft,[pt,Object(a["M"])(Object(a["i"])("textarea",{name:"message",id:"message",cols:"30",rows:"10","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.user.message=e}),placeholder:"Your message here!",required:""},null,512),[[a["J"],c.user.message]])])]),jt],32)]),Object(a["l"])(a["b"],{name:"pop"},{default:Object(a["L"])((function(){return[c.response.success||c.response.failed?(Object(a["w"])(),Object(a["h"])("div",vt,[c.response.success?(Object(a["w"])(),Object(a["h"])("div",ht,[Ot,Object(a["k"])(Object(a["F"])(c.response.msg),1)])):Object(a["g"])("",!0),c.response.failed?(Object(a["w"])(),Object(a["h"])("div",mt,[gt,Object(a["k"])(Object(a["F"])(c.response.msg),1)])):Object(a["g"])("",!0)])):Object(a["g"])("",!0)]})),_:1})])])}var kt=n("bc3a"),xt=n.n(kt),yt={name:"Nav",setup:function(){var e=Object(a["A"])({success:!1,failed:!1,msg:""}),t=Object(a["A"])({username:"",email:"",message:"",number:""});function n(){xt.a.post("api/admin/contact",t,{headers:{"Content-Type":"application/json"}}).then((function(n){"OK"===n.statusText&&(e.success=!0,e.msg=n.data.msg,t.username="",t.email="",t.number="",t.message="",setTimeout((function(){e.success=!1}),3e3))})).catch((function(t){e.failed=!0,e.msg=t.response.data.msg,setTimeout((function(){e.failed=!1}),3e3)}))}return{sendMessage:n,user:t,response:e}}};n("af51");const Lt=o()(yt,[["render",wt],["__scopeId","data-v-25b6c246"]]);var Ct=Lt;function _t(e,t,n,c,i,o){return Object(a["w"])(),Object(a["h"])("div",null,"my profile here")}var Tt={name:"Profile"};const Et=o()(Tt,[["render",_t]]);var Dt=Et,At=[{path:"/",name:"Home",component:qe},{path:"/Login",name:"Login",component:function(){return n.e("Login").then(n.bind(null,"1954"))}},{path:"/contact",name:"Contact",component:Ct},{path:"/overview/Todo",name:"Client",component:function(){return n.e("chunk-205a1c65").then(n.bind(null,"12d2"))},beforeEnter:function(e,t,n){xt()("api/token").then((function(e){console.log(e),"OK"===e.statusText?n():n("/login")})).catch((function(e){return n("/login"),console.log(e)}))},children:[{path:"/overview/profile",name:"Profile",component:Dt},{path:"/overview/locked",name:"Locked",component:function(){return n.e("locked").then(n.bind(null,"5cf5"))}},{path:"/overview/Todo",name:"Todo",component:function(){return n.e("Todo").then(n.bind(null,"a3b3"))}},{path:"/overview/Weather",name:"Weather",component:function(){return n.e("Weather").then(n.bind(null,"6a05"))}},{path:"/overview/Exchange",name:"Exchange",component:function(){return n.e("Exchange").then(n.bind(null,"2c70"))}}]},{path:"/Register",name:"Register",component:function(){return n.e("Register").then(n.bind(null,"1feb"))}},{path:"/Dashboard",name:"Dashboard",component:function(){return n.e("Dashboard").then(n.bind(null,"0c7c"))}},{path:"/ChatLogic",name:"ChatLogic",component:function(){return n.e("ChatLogic").then(n.bind(null,"9802"))}},{path:"/chatBox",name:"chatBox",component:function(){return n.e("chunk-706bf245").then(n.bind(null,"6fa3"))}},{path:"/forgot_password",name:"Forgot_password",component:function(){return n.e("chunk-1ea22f6e").then(n.bind(null,"59dd"))}}],Bt=Object(u["a"])({history:Object(u["b"])("/"),routes:At}),St=Bt;xt.a.defaults.baseURL="https://advancedtechacademy.herokuapp.com/",xt.a.defaults.headers.common["Authorization"]="Bearer ".concat(localStorage.getItem("accessToken"));var zt=Object(a["e"])(s);zt.use(St).mount("#app")},"57d5":function(e,t,n){e.exports=n.p+"img/cross.6aa9d8b2.jpg"},5892:function(e,t,n){},"6d20":function(e,t,n){},"70b7":function(e,t,n){"use strict";n("048e")},"7e65":function(e,t,n){"use strict";n("1a97")},"7fef":function(e,t,n){},"9df5":function(e,t,n){"use strict";n("5892")},af51:function(e,t,n){"use strict";n("6d20")},c29d:function(e,t,n){"use strict";n("7fef")},d066c:function(e,t,n){"use strict";n("e886")},d469:function(e,t,n){},e7e9:function(e,t,n){e.exports=n.p+"img/list.d709d114.svg"},e886:function(e,t,n){}});
//# sourceMappingURL=app.620c4e43.js.map