(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{1954:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=n("0e01"),a=n.n(c),i=n("e7e9"),o=n.n(i),s=function(e){return Object(r["z"])("data-v-2f69dd74"),e=e(),Object(r["x"])(),e},l={class:"page"},u={class:"large-screen"},d=Object(r["k"])("home"),b=s((function(){return Object(r["i"])("nav",null,[Object(r["i"])("h1",null,[Object(r["k"])("coding "),Object(r["i"])("span",null,"herald")])],-1)})),j={class:"large-screen"},O=Object(r["k"])("sign up"),p={class:"small-screen"},f=s((function(){return Object(r["i"])("h1",null,[Object(r["k"])("welcome to "),Object(r["i"])("span",{id:"welcome"},"KCN'S dairy")],-1)})),g=s((function(){return Object(r["i"])("label",{for:"name"},"name",-1)})),m=s((function(){return Object(r["i"])("label",{for:"password"},"password",-1)})),w={key:0,class:"errormsg text-danger text-center"},v=s((function(){return Object(r["i"])("button",{id:"log-in",class:"btn",type:"submit"},[Object(r["k"])(" log in "),Object(r["i"])("i",{class:"fa fa-arrow-right"})],-1)})),h=Object(r["k"])(" don't have an account? "),k=Object(r["k"])("sign up"),y=s((function(){return Object(r["i"])("span",null,[Object(r["i"])("a",{href:""}," forgot password?")],-1)})),x=s((function(){return Object(r["i"])("img",{src:a.a,id:"desk",alt:"learning never ends"},null,-1)})),L=s((function(){return Object(r["i"])("img",{src:o.a,id:"pic",alt:"codingHerald"},null,-1)})),_={key:0,class:"items"},J=s((function(){return Object(r["i"])("a",{href:"/",class:"route"},"Home",-1)})),M=s((function(){return Object(r["i"])("a",{href:"/register"},"sign up",-1)})),S=[J,M];function C(e,t,n,c,a,i){var o=Object(r["D"])("router-link");return Object(r["w"])(),Object(r["h"])("div",l,[Object(r["i"])("header",null,[Object(r["i"])("nav",u,[Object(r["l"])(o,{to:"/",class:"route"},{default:Object(r["L"])((function(){return[d]})),_:1})]),b,Object(r["i"])("nav",j,[Object(r["l"])(o,{to:"/Register",class:"route"},{default:Object(r["L"])((function(){return[O]})),_:1})]),Object(r["i"])("nav",p,[Object(r["i"])("i",{class:"fa-solid fa-bars",onClick:t[0]||(t[0]=function(e){return c.toggle=!c.toggle})})])]),Object(r["i"])("form",{onSubmit:t[3]||(t[3]=Object(r["N"])((function(){return c.login&&c.login.apply(c,arguments)}),["prevent"])),class:"log-in"},[f,Object(r["i"])("div",null,[g,Object(r["M"])(Object(r["i"])("input",{type:"text",name:"name",id:"name",class:"text-capitalize","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.user.username=e}),placeholder:"Enter your Dairy name...",required:""},null,512),[[r["J"],c.user.username]])]),Object(r["i"])("div",null,[m,Object(r["M"])(Object(r["i"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.user.password=e}),placeholder:"Enter password...",required:""},null,512),[[r["J"],c.user.password]])]),c.errormsg.valid?(Object(r["w"])(),Object(r["h"])("p",w,Object(r["F"])(c.errormsg.invalidMsg),1)):Object(r["g"])("",!0),v,Object(r["i"])("p",null,[h,Object(r["l"])(o,{to:"/Register"},{default:Object(r["L"])((function(){return[k]})),_:1}),y])],32),x,L,Object(r["l"])(r["b"],{name:"appear"},{default:Object(r["L"])((function(){return[c.toggle?(Object(r["w"])(),Object(r["h"])("div",_,S)):Object(r["g"])("",!0)]})),_:1})])}var I=n("6c02"),q=n("bc3a"),z=n.n(q),A={name:"Login",setup:function(){var e=Object(I["c"])(),t=Object(r["A"])({username:"",password:""}),n=Object(r["B"])(!1),c=Object(r["A"])({invalidMsg:"",valid:!1}),a=function(){z.a.post("api/login",{username:t.username,password:t.password},{headers:{"Content-type":"application/json"}}).then((function(t){"OK"===t.statusText&&(e.push("/overview/Todo"),localStorage.setItem("codingheraldtoken",t.data.token),localStorage.setItem("codingheraldtokenid",t.data.id))})).catch((function(e){return console.log(e)}))};return{user:t,toggle:n,errormsg:c,login:a}}},D=(n("1f47"),n("6b0d")),E=n.n(D);const H=E()(A,[["render",C],["__scopeId","data-v-2f69dd74"]]);t["default"]=H},"1f47":function(e,t,n){"use strict";n("51d9")},"51d9":function(e,t,n){}}]);
//# sourceMappingURL=Login.3c2d878c.js.map