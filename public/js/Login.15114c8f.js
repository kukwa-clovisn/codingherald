(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{1954:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=n("0e01"),a=n.n(r),i=n("e7e9"),s=n.n(i),o=function(e){return Object(c["z"])("data-v-52ec32a3"),e=e(),Object(c["x"])(),e},u={class:"page"},l={class:"large-screen"},b=Object(c["k"])("home"),d=o((function(){return Object(c["i"])("nav",null,[Object(c["i"])("h1",null,[Object(c["k"])("coding "),Object(c["i"])("span",null,"herald")])],-1)})),O={class:"large-screen"},j=Object(c["k"])("sign up"),p={class:"small-screen"},f=o((function(){return Object(c["i"])("h1",null,[Object(c["k"])("welcome to "),Object(c["i"])("span",{id:"welcome"},"KCN'S dairy")],-1)})),g=o((function(){return Object(c["i"])("label",{for:"name"},"name",-1)})),m=o((function(){return Object(c["i"])("label",{for:"password"},"password",-1)})),v={key:0,class:"errormsg text-danger text-center"},w=o((function(){return Object(c["i"])("button",{id:"log-in",class:"btn",type:"submit"},[Object(c["k"])(" log in "),Object(c["i"])("i",{class:"fa fa-arrow-right"})],-1)})),h=Object(c["k"])(" don't have an account? "),k=Object(c["k"])("sign up"),y=o((function(){return Object(c["i"])("span",null,[Object(c["i"])("a",{href:"/forgot_password"}," forgot password?")],-1)})),M=o((function(){return Object(c["i"])("img",{src:a.a,id:"desk",alt:"learning never ends"},null,-1)})),_=o((function(){return Object(c["i"])("img",{src:s.a,id:"pic",alt:"codingHerald"},null,-1)})),x={key:0,class:"items"},T=o((function(){return Object(c["i"])("a",{href:"/",class:"route"},"Home",-1)})),I=o((function(){return Object(c["i"])("a",{href:"/register"},"sign up",-1)})),A=[T,I];function K(e,t,n,r,a,i){var s=Object(c["D"])("router-link");return Object(c["w"])(),Object(c["h"])("div",u,[Object(c["i"])("header",null,[Object(c["i"])("nav",l,[Object(c["l"])(s,{to:"/",class:"route"},{default:Object(c["M"])((function(){return[b]})),_:1})]),d,Object(c["i"])("nav",O,[Object(c["l"])(s,{to:"/Register",class:"route"},{default:Object(c["M"])((function(){return[j]})),_:1})]),Object(c["i"])("nav",p,[Object(c["i"])("i",{class:"fa-solid fa-bars",onClick:t[0]||(t[0]=function(e){return r.toggle=!r.toggle})})])]),Object(c["i"])("form",{onSubmit:t[3]||(t[3]=Object(c["O"])((function(){return r.login&&r.login.apply(r,arguments)}),["prevent"])),class:"log-in"},[f,Object(c["i"])("div",null,[g,Object(c["N"])(Object(c["i"])("input",{type:"text",name:"name",id:"name",class:"text-capitalize","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.user.username=e}),placeholder:"Enter your Dairy name...",required:""},null,512),[[c["K"],r.user.username]])]),Object(c["i"])("div",null,[m,Object(c["N"])(Object(c["i"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.user.password=e}),placeholder:"Enter password...",required:""},null,512),[[c["K"],r.user.password]])]),Object(c["l"])(c["b"],{name:"appear"},{default:Object(c["M"])((function(){return[r.errormsg.valid?(Object(c["w"])(),Object(c["h"])("p",v,Object(c["G"])(r.errormsg.invalidMsg),1)):Object(c["g"])("",!0)]})),_:1}),w,Object(c["i"])("p",null,[h,Object(c["l"])(s,{to:"/Register"},{default:Object(c["M"])((function(){return[k]})),_:1}),y])],32),M,_,Object(c["l"])(c["b"],{name:"appear"},{default:Object(c["M"])((function(){return[r.toggle?(Object(c["w"])(),Object(c["h"])("div",x,A)):Object(c["g"])("",!0)]})),_:1})])}var S=n("6c02"),z=n("bc3a"),C=n.n(z),D={name:"Login",setup:function(){var e=Object(S["c"])(),t=Object(c["A"])({username:"",password:""}),n=Object(c["B"])(!1),r=Object(c["A"])({invalidMsg:"",valid:!1}),a=function(){C.a.post("api/signin",{username:t.username,password:t.password},{headers:{"Content-type":"application/json"}}).then((function(t){"OK"===t.statusText&&(localStorage.setItem("accessToken",t.data.accessToken),localStorage.setItem("accessId",t.data.accessId),C.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.data.accessToken)),e.push("/overview/Todo")})).catch((function(e){return r.valid=!0,r.invalidMsg="Acess Denied",setTimeout((function(){r.valid=!1}),5e3),e}))};return{user:t,toggle:n,errormsg:r,login:a}}},N=(n("30e3"),n("6b0d")),q=n.n(N);const B=q()(D,[["render",K],["__scopeId","data-v-52ec32a3"]]);t["default"]=B},"30e3":function(e,t,n){"use strict";n("c773")},c773:function(e,t,n){}}]);
//# sourceMappingURL=Login.15114c8f.js.map