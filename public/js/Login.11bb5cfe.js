"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[438],{1667:function(e,s,a){a.r(s),a.d(s,{default:function(){return R}});var r=a(6252),n=a(9963),t=a(3577),l=a(5726),o=a(3879);const d=e=>((0,r.dD)("data-v-2f2ad4a8"),e=e(),(0,r.Cn)(),e),i={class:"page"},c={class:"large-screen"},u=(0,r.Uk)("home"),p=d((()=>(0,r._)("nav",null,[(0,r._)("h1",null,[(0,r.Uk)("coding "),(0,r._)("span",null,"herald")])],-1))),g={class:"large-screen"},m=(0,r.Uk)("sign up"),w={class:"small-screen"},_=d((()=>(0,r._)("h1",null,[(0,r.Uk)("welcome to "),(0,r._)("span",{id:"welcome"},"KCN'S dairy")],-1))),f=d((()=>(0,r._)("label",{for:"name"},"name",-1))),v=d((()=>(0,r._)("label",{for:"password"},"password",-1))),k={key:0,class:"errormsg text-danger text-center"},h={key:0,class:"errormsg text-secondary text-center"},y=d((()=>(0,r._)("button",{id:"log-in",class:"btn",type:"submit"},[(0,r.Uk)(" log in "),(0,r._)("i",{class:"fa fa-arrow-right"})],-1))),U=(0,r.Uk)(" don't have an account? "),b=(0,r.Uk)("sign up"),q=d((()=>(0,r._)("span",null,[(0,r._)("a",{href:"/forgot_password"}," forgot password?")],-1))),T=d((()=>(0,r._)("img",{src:l,id:"desk",alt:"learning never ends"},null,-1))),x=d((()=>(0,r._)("img",{src:o,id:"pic",alt:"codingHerald"},null,-1))),D={key:0,class:"items"},M=d((()=>(0,r._)("a",{href:"/",class:"route"},"Home",-1))),S=d((()=>(0,r._)("a",{href:"/register"},"sign up",-1))),W=[M,S];function I(e,s,a,l,o,d){const M=(0,r.up)("router-link"),S=(0,r.up)("Spinner");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("header",null,[(0,r._)("nav",c,[(0,r.Wm)(M,{to:"/",class:"route"},{default:(0,r.w5)((()=>[u])),_:1})]),p,(0,r._)("nav",g,[(0,r.Wm)(M,{to:"/Register",class:"route"},{default:(0,r.w5)((()=>[m])),_:1})]),(0,r._)("nav",w,[(0,r._)("i",{class:"fa-solid fa-bars",onClick:s[0]||(s[0]=e=>l.toggle=!l.toggle)})])]),(0,r._)("form",{onSubmit:s[3]||(s[3]=(0,n.iM)(((...e)=>l.login&&l.login(...e)),["prevent"])),class:"log-in"},[_,(0,r._)("div",null,[f,(0,r.wy)((0,r._)("input",{type:"text",name:"name",id:"name",class:"text-capitalize","onUpdate:modelValue":s[1]||(s[1]=e=>l.user.username=e),placeholder:"Enter your Dairy name...",required:""},null,512),[[n.nr,l.user.username]])]),(0,r._)("div",null,[v,(0,r.wy)((0,r._)("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":s[2]||(s[2]=e=>l.user.password=e),placeholder:"Enter password...",required:""},null,512),[[n.nr,l.user.password]])]),(0,r.Wm)(n.uT,{name:"appear"},{default:(0,r.w5)((()=>[l.errormsg.valid?((0,r.wg)(),(0,r.iD)("p",k,(0,t.zw)(l.errormsg.invalidMsg),1)):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(n.uT,{name:"appear"},{default:(0,r.w5)((()=>[l.errormsg.process?((0,r.wg)(),(0,r.iD)("p",h,(0,t.zw)(l.errormsg.invalidMsg),1)):(0,r.kq)("",!0)])),_:1}),y,(0,r._)("p",null,[U,(0,r.Wm)(M,{to:"/Register"},{default:(0,r.w5)((()=>[b])),_:1}),q])],32),T,x,(0,r.Wm)(n.uT,{name:"appear"},{default:(0,r.w5)((()=>[l.toggle?((0,r.wg)(),(0,r.iD)("div",D,W)):(0,r.kq)("",!0)])),_:1}),(0,r.wy)((0,r.Wm)(S,{rate:l.loader.percent,msg:l.loader.msg},null,8,["rate","msg"]),[[n.F8,l.loader.state]])])}var C=a(2262),j=a(2119),z=a(9669),E=a.n(z),H=a(5511),A={name:"Login",components:{Spinner:H.Z},setup(){const e=(0,j.tv)();let s=(0,C.qj)({username:"",password:""}),a=(0,C.qj)({msg:"",success:!1,failed:!1}),r=(0,C.qj)({percent:0,state:!1,msg:""}),n=(0,C.iH)(!1),t=(0,C.qj)({invalidMsg:"",valid:!1,process:!1});const l=()=>{r.state=!0,E().post("api/signin",{username:s.username,password:s.password},{onUploadProgress:e=>{a.success=!0,r.msg="verifying credentials: please wait!",r.percent=(0,C.Fl)((()=>Math.round(e.loaded/e.total*100))),100===r.percent&&(a.success=!1)}}).then((s=>{"OK"===s.statusText&&(t.process=!0,t.invalidMsg="Successful. loading data....",localStorage.setItem("accessToken",s.data.accessToken),localStorage.setItem("accessId",s.data.accessId),E().defaults.headers.common.Authorization=`Bearer ${s.data.accessToken}`,e.push("/overview/Todo"),r.state=!1)})).catch((e=>(t.valid=!0,t.invalidMsg="Error:\\Invalid credentials. Acess Denied",r.state=!1,setTimeout((()=>{t.valid=!1}),3e3),e)))};return{user:s,response:a,loader:r,toggle:n,errormsg:t,login:l}}},F=a(3744);const K=(0,F.Z)(A,[["render",I],["__scopeId","data-v-2f2ad4a8"]]);var R=K}}]);
//# sourceMappingURL=Login.11bb5cfe.js.map