(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Register"],{"1feb":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),s=function(e){return Object(r["z"])("data-v-1983a444"),e=e(),Object(r["x"])(),e},a={class:"main"},i=Object(r["j"])('<br data-v-1983a444><div class="logo-main" data-v-1983a444><div class="logo" data-v-1983a444><span data-v-1983a444>CH</span></div><p data-v-1983a444><span title="codingheraldapps" data-v-1983a444>codingheraldapps</span> <br data-v-1983a444><br data-v-1983a444> is inviting you to sign up <i class="fa fa-thumbs-up" data-v-1983a444></i></p><h2 data-v-1983a444><span class="online" data-v-1983a444>free</span><span class="members" data-v-1983a444>4 Apps</span></h2></div><br data-v-1983a444>',3),c={key:0,class:"text-center text-capitalize lead"},o=Object(r["k"])(" welcome to the era of technology "),u=s((function(){return Object(r["i"])("br",null,null,-1)})),l=Object(r["k"])(" your sign up was successful! "),p=s((function(){return Object(r["i"])("br",null,null,-1)})),b=s((function(){return Object(r["i"])("i",{class:"fa fa-arrow-left"},null,-1)})),d=Object(r["k"])(" Go to Home"),O=Object(r["k"])(" or "),f=Object(r["k"])("Todo app"),j=s((function(){return Object(r["i"])("label",{for:"username"},"username:",-1)})),m={key:0,class:"lead error"},h=s((function(){return Object(r["i"])("button",{class:"registerBtn",type:"submit"},"next",-1)})),w=Object(r["k"])("already have an account?sign in"),g={type:"button"},y=s((function(){return Object(r["i"])("i",{class:"fa fa-home"},null,-1)})),v=Object(r["k"])("home"),k=s((function(){return Object(r["i"])("label",{for:"useremail"},"user email:",-1)})),T={key:0,class:"lead error"},x=s((function(){return Object(r["i"])("button",{class:"registerBtn",type:"submit"},"next",-1)})),_={class:"d-flex justify-content-between align-items-center"},S=Object(r["k"])("already have an account?sign in"),J=s((function(){return Object(r["i"])("i",{class:"fa fa-arrow-left"},null,-1)})),L=Object(r["k"])("back "),P=[J,L],q=s((function(){return Object(r["i"])("label",{for:"userpassword"},"user password:",-1)})),C={key:0,class:"lead error"},M=s((function(){return Object(r["i"])("button",{class:"registerBtn",type:"submit"},"sign up",-1)})),U={class:"d-flex justify-content-between align-items-center"},V=Object(r["k"])("already have an account?sign in"),z=s((function(){return Object(r["i"])("i",{class:"fa fa-arrow-left"},null,-1)})),B=Object(r["k"])(" back "),F=[z,B],N=s((function(){return Object(r["i"])("footer",null," by registering you agree to codingherald's Terms of Service and Privacy Policy ",-1)}));function E(e,t,n,s,J,L){var z=this,B=Object(r["D"])("router-link");return Object(r["w"])(),Object(r["h"])("div",a,[Object(r["i"])("div",null,[i,J.confirm?(Object(r["w"])(),Object(r["h"])("h2",c,[o,u,l,p,Object(r["l"])(B,{to:"/",class:"link"},{default:Object(r["L"])((function(){return[b,d]})),_:1}),O,Object(r["l"])(B,{to:"/Todo",class:"link"},{default:Object(r["L"])((function(){return[f]})),_:1})])):Object(r["g"])("",!0),J.stepOne?(Object(r["w"])(),Object(r["h"])("form",{key:1,onSubmit:t[1]||(t[1]=Object(r["N"])((function(){return L.next&&L.next.apply(L,arguments)}),["prevent"]))},[j,Object(r["M"])(Object(r["i"])("input",{type:"text",name:"username",id:"username",placeholder:"What should we call you?",required:"",class:"text-capitalize","onUpdate:modelValue":t[0]||(t[0]=function(e){return J.username=e})},null,512),[[r["J"],J.username]]),J.error?(Object(r["w"])(),Object(r["h"])("p",m,Object(r["F"])(J.errormsg),1)):Object(r["g"])("",!0),h,Object(r["i"])("p",null,[Object(r["l"])(B,{to:"/login",class:"a"},{default:Object(r["L"])((function(){return[w]})),_:1}),Object(r["i"])("button",g,[Object(r["l"])(B,{to:"/",class:"link"},{default:Object(r["L"])((function(){return[y,v]})),_:1})])])],32)):Object(r["g"])("",!0),J.stepTwo?(Object(r["w"])(),Object(r["h"])("form",{key:2,onSubmit:t[4]||(t[4]=Object(r["N"])((function(){return L.nextStep&&L.nextStep.apply(L,arguments)}),["prevent"]))},[k,Object(r["M"])(Object(r["i"])("input",{type:"email",name:"useremail",id:"useremail",placeholder:"your Email address...",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return J.email=e})},null,512),[[r["J"],J.email]]),J.error?(Object(r["w"])(),Object(r["h"])("p",T,Object(r["F"])(J.errormsg),1)):Object(r["g"])("",!0),x,Object(r["i"])("p",_,[Object(r["l"])(B,{to:"/",class:"a"},{default:Object(r["L"])((function(){return[S]})),_:1}),Object(r["i"])("button",{type:"button",onClick:t[3]||(t[3]=function(e){z.stepOne=!0,z.stepTwo=!1,z.stepThree=!1,z.error=!1,z.confirm=!1})},P)])],32)):Object(r["g"])("",!0),J.stepThree?(Object(r["w"])(),Object(r["h"])("form",{key:3,onSubmit:t[8]||(t[8]=Object(r["N"])((function(){return L.sign&&L.sign.apply(L,arguments)}),["prevent"]))},[q,Object(r["M"])(Object(r["i"])("input",{type:"password",name:"userpassword",id:"userpassword",placeholder:"Enter a strong password...",required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return J.password=e})},null,512),[[r["J"],J.password]]),Object(r["M"])(Object(r["i"])("input",{type:"password",name:"confirmpassword",id:"confirmpassword",placeholder:"confirm your password",required:"","onUpdate:modelValue":t[6]||(t[6]=function(e){return J.confirmPassword=e})},null,512),[[r["J"],J.confirmPassword]]),J.error?(Object(r["w"])(),Object(r["h"])("p",C,Object(r["F"])(J.errormsg),1)):Object(r["g"])("",!0),M,Object(r["i"])("p",U,[Object(r["l"])(B,{to:"/",class:"a"},{default:Object(r["L"])((function(){return[V]})),_:1}),Object(r["i"])("button",{type:"button",onClick:t[7]||(t[7]=function(e){z.stepOne=!1,z.stepTwo=!0,z.stepThree=!1,z.confirm=!1,z.error=!1})},F)])],32)):Object(r["g"])("",!0),N])])}var H=n("bc3a"),R=n.n(H),A={name:"Register",data:function(){return{stepOne:!0,stepTwo:!1,stepThree:!1,confirm:!1,error:!1,errormsg:"",username:"",email:"",password:"",confirmPassword:"",names:[],emails:[]}},methods:{next:function(){""!==this.username&&this.username.length>5?(this.stepOne=!1,this.stepTwo=!0,this.stepThree=!1,this.error=!1):(this.error=!0,this.errormsg=" please fill in your username...",this.username="")},nextStep:function(){""!==this.email?(this.stepOne=!1,this.stepTwo=!1,this.stepThree=!0,this.error=!1):(this.error=!0,this.errormsg="please fill in a valid email address",this.email="")},sign:function(){var e=this;this.password.length>4&&this.password===this.confirmPassword?R.a.post("api/signup",{username:this.username,email:this.email,password:this.password},{headers:{"Content-type":"application/json"}}).then((function(t){if(console.log(t),"OK"===t.statusText)return e.$route.push("/login")})).catch((function(t){e.errormsg=t.response.data.msg,e.err=!0,e.stepOne=!0,e.stepTwo=!1,e.stepThree=!1})):(this.errormsg="invalid password",this.err=!0,this.stepOne=!1,this.stepTwo=!1,this.stepThree=!0)}}},D=(n("7234"),n("6b0d")),G=n.n(D);const I=G()(A,[["render",E],["__scopeId","data-v-1983a444"]]);t["default"]=I},7234:function(e,t,n){"use strict";n("9a8c")},"9a8c":function(e,t,n){}}]);
//# sourceMappingURL=Register.3539c4c9.js.map