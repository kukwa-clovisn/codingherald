(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{1954:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=n("0e01"),a=n.n(r),s=n("e7e9"),o=n.n(s),u=function(e){return Object(c["y"])("data-v-8e0df022"),e=e(),Object(c["w"])(),e},i={class:"page"},l={class:"large-screen"},b=Object(c["j"])("home"),d=u((function(){return Object(c["h"])("nav",null,[Object(c["h"])("h1",null,[Object(c["j"])("coding "),Object(c["h"])("span",null,"herald")])],-1)})),j={class:"large-screen"},O=Object(c["j"])("sign up"),f={class:"small-screen"},p=u((function(){return Object(c["h"])("h1",null,[Object(c["j"])("welcome to "),Object(c["h"])("span",{id:"welcome"},"KCN'S dairy")],-1)})),g=u((function(){return Object(c["h"])("label",{for:"name"},"name",-1)})),h=u((function(){return Object(c["h"])("label",{for:"password"},"password",-1)})),m={key:0,class:"errormsg text-danger text-center"},v=u((function(){return Object(c["h"])("button",{id:"log-in",class:"btn",type:"submit"},[Object(c["j"])(" log in "),Object(c["h"])("i",{class:"fa fa-arrow-right"})],-1)})),w=Object(c["j"])(" don't have an account? "),k=Object(c["j"])("sign up"),y=u((function(){return Object(c["h"])("span",null,[Object(c["h"])("a",{href:"/forgot_password"}," forgot password?")],-1)})),I=u((function(){return Object(c["h"])("img",{src:a.a,id:"desk",alt:"learning never ends"},null,-1)})),_=u((function(){return Object(c["h"])("img",{src:o.a,id:"pic",alt:"codingHerald"},null,-1)})),K={key:0,class:"items"},T=u((function(){return Object(c["h"])("a",{href:"/",class:"route"},"Home",-1)})),x=u((function(){return Object(c["h"])("a",{href:"/register"},"sign up",-1)})),S=[T,x];function z(e,t,n,r,a,s){var o=Object(c["C"])("router-link");return Object(c["v"])(),Object(c["g"])("div",i,[Object(c["h"])("header",null,[Object(c["h"])("nav",l,[Object(c["k"])(o,{to:"/",class:"route"},{default:Object(c["K"])((function(){return[b]})),_:1})]),d,Object(c["h"])("nav",j,[Object(c["k"])(o,{to:"/Register",class:"route"},{default:Object(c["K"])((function(){return[O]})),_:1})]),Object(c["h"])("nav",f,[Object(c["h"])("i",{class:"fa-solid fa-bars",onClick:t[0]||(t[0]=function(e){return r.toggle=!r.toggle})})])]),Object(c["h"])("form",{onSubmit:t[3]||(t[3]=Object(c["M"])((function(){return r.login&&r.login.apply(r,arguments)}),["prevent"])),class:"log-in"},[p,Object(c["h"])("div",null,[g,Object(c["L"])(Object(c["h"])("input",{type:"text",name:"name",id:"name",class:"text-capitalize","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.user.username=e}),placeholder:"Enter your Dairy name...",required:""},null,512),[[c["I"],r.user.username]])]),Object(c["h"])("div",null,[h,Object(c["L"])(Object(c["h"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.user.password=e}),placeholder:"Enter password...",required:""},null,512),[[c["I"],r.user.password]])]),Object(c["k"])(c["b"],{name:"appear"},{default:Object(c["K"])((function(){return[r.errormsg.valid?(Object(c["v"])(),Object(c["g"])("p",m,Object(c["E"])(r.errormsg.invalidMsg),1)):Object(c["f"])("",!0)]})),_:1}),v,Object(c["h"])("p",null,[w,Object(c["k"])(o,{to:"/Register"},{default:Object(c["K"])((function(){return[k]})),_:1}),y])],32),I,_,Object(c["k"])(c["b"],{name:"appear"},{default:Object(c["K"])((function(){return[r.toggle?(Object(c["v"])(),Object(c["g"])("div",K,S)):Object(c["f"])("",!0)]})),_:1})])}var C=n("6c02"),L=n("bc3a"),M=n.n(L),A={name:"Login",setup:function(){var e=Object(C["c"])(),t=Object(c["z"])({username:"",password:""}),n=Object(c["A"])(!1),r=Object(c["z"])({invalidMsg:"",valid:!1}),a=function(){M.a.post("api/signin",{username:t.username,password:t.password},{headers:{"Content-type":"application/json"}}).then((function(t){"OK"===t.statusText&&(localStorage.setItem("accessToken",t.data.accessToken),localStorage.setItem("accessId",t.data.accessId),M.a.defaults.headers.common["Authorization"]="Bearer ".concat(localStorage.getItem("accessToken"))),e.push("/overview/Todo")})).catch((function(e){return r.valid=!0,r.invalidMsg="Acess Denied",setTimeout((function(){r.valid=!1}),5e3),e}))};return{user:t,toggle:n,errormsg:r,login:a}}},E=(n("8210"),n("6b0d")),q=n.n(E);const D=q()(A,[["render",z],["__scopeId","data-v-8e0df022"]]);t["default"]=D},8210:function(e,t,n){"use strict";n("8ef0")},"8ef0":function(e,t,n){}}]);
//# sourceMappingURL=Login.311db6c7.js.map