"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[701],{2990:function(a,e,t){t.r(e),t.d(e,{default:function(){return oa}});var l=t(6252),i=t(3577),s=t(9963),o=t(3879);const n=a=>((0,l.dD)("data-v-19f812c5"),a=a(),(0,l.Cn)(),a),d={class:"main"},r=n((()=>(0,l._)("div",{class:"c3"},[(0,l._)("i",{class:"fa-regular fa-address-book"}),(0,l._)("span",null,"see all your memories")],-1))),u={class:"content"},c={class:"todo-container"},v={id:"text-run"},k=n((()=>(0,l._)("i",{class:"far fa-heart"},null,-1))),p={key:0,class:"title"},m={class:"addItem"},h=n((()=>(0,l._)("i",{class:"fa-solid fa-circle-plus"},null,-1))),_=(0,l.Uk)("add memory "),f=[h,_],w={key:0,id:"error",class:"py-3"},y={class:"todoItems"},g={class:"item"},C=["onClick"],T={class:"span"},b=["title","onClick"],D=["title"],H=["onClick"],U=n((()=>(0,l._)("span",{class:"read-icon"},[(0,l._)("i",{class:"fa-brands fa-readme"}),(0,l.Uk)("Read")],-1))),q=[U],z={class:"icons"},x=["onClick"],I=n((()=>(0,l._)("i",{class:"far fa-edit edit",title:"Edit task!"},null,-1))),S=[I],$=["onUpdate:modelValue","onChange"],W=["onClick"],V={id:"pending"},A=(0,l.Uk)(" you have "),N={id:"count"},j=(0,l.Uk)(" Memories "),E={key:0,class:"errorDiv"},K=(0,l.Uk)("Edit "),M=n((()=>(0,l._)("span",null,"task",-1))),L={class:"buttons"},R=n((()=>(0,l._)("button",{type:"submit"},[(0,l._)("i",{class:"far fa-edit edit",title:"Edit task..."}),(0,l.Uk)("submit ")],-1))),Y={key:0,class:"errorDiv"},Z={class:"buttons"},B=n((()=>(0,l._)("button",{type:"submit"},[(0,l._)("i",{class:"fa-solid fa-magnifying-glass edit",title:"Search task(s)"}),(0,l.Uk)("Search ")],-1))),F=n((()=>(0,l._)("img",{src:o,id:"pic",alt:""},null,-1))),G={key:0,class:"read-task"},J={class:"read-content"},O=n((()=>(0,l._)("br",null,null,-1))),P=(0,l.Uk)(" Task");function Q(a,e,t,o,n,h){return(0,l.wg)(),(0,l.iD)("div",d,[r,(0,l._)("div",u,[(0,l._)("div",c,[(0,l._)("h1",v,[(0,l.Uk)((0,i.zw)(o.profile.profileName.split(" ")[0])+"'s Dairy",1),k]),o.profile.description.length?((0,l.wg)(),(0,l.iD)("p",p,(0,i.zw)(o.profile.description),1)):(0,l.kq)("",!0),(0,l.wy)((0,l._)("textarea",{type:"text",id:"inputItem","onUpdate:modelValue":e[0]||(e[0]=a=>o.userData=a),name:"text",placeholder:"Add new memory",onKeyup:e[1]||(e[1]=a=>o.invalidTask=!1),required:""},null,544),[[s.nr,o.userData]]),(0,l._)("div",m,[(0,l._)("span",null,[(0,l._)("i",{class:"fa-solid fa-magnifying-glass laugh",title:"Search task(s)",onClick:e[2]||(e[2]=a=>{o.search.val=!o.search.val,o.edit.val=!1})}),(0,l._)("i",{class:"fa-regular fa-address-book laugh",title:"All tasks",onClick:e[3]||(e[3]=a=>o.displayTodo())})]),(0,l._)("button",{onClick:e[4]||(e[4]=a=>o.addTodo())},f)]),(0,l.Wm)(s.uT,{name:"fade"},{default:(0,l.w5)((()=>[o.invalidTask?((0,l.wg)(),(0,l.iD)("p",w," please add a valid task ❣️KCN❣️ ")):(0,l.kq)("",!0)])),_:1}),(0,l._)("div",y,[(0,l.Wm)(s.W3,{tag:"ul",appear:"",name:"fade"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.todoItems,((a,e)=>((0,l.wg)(),(0,l.iD)("li",{class:(0,i.C_)({done:a.done}),key:e},[(0,l._)("div",g,[(0,l._)("p",{onClick:t=>o.readTask(a.name,a.date,e)},[(0,l._)("span",T,(0,i.zw)(e+1),1),(0,l.Uk)(" "+(0,i.zw)(a.date),1)],8,C),(0,l._)("p",{class:"content large-screen-only",title:a.name,onClick:t=>o.readTask(a.name,a.date,e)},(0,i.zw)(a.name),9,b),(0,l._)("p",{class:"content small-screen-only",title:a.name},(0,i.zw)(a.name),9,D),(0,l._)("p",{class:"small-screen-only",onClick:t=>o.readTask(a.name,a.date,e)},q,8,H)]),(0,l._)("div",z,[(0,l._)("button",{onClick:t=>o.editTask(e,a.name)},S,8,x),(0,l.wy)((0,l._)("input",{type:"checkbox",name:"done","onUpdate:modelValue":e=>a.done=e,class:"taskStatus",onChange:a=>o.addStatus(e),title:"check task!"},null,40,$),[[s.e8,a.done]]),(0,l._)("i",{class:"fa fa-trash",id:"trash",onClick:a=>o.removeTask(e)},null,8,W)])],2)))),128))])),_:1})]),(0,l._)("p",V,[A,(0,l._)("span",N,(0,i.zw)(o.todoCount),1),j]),(0,l._)("button",{id:"reset",onClick:e[5]||(e[5]=a=>o.removeAllTodos())},"clear all todos")])]),(0,l.Wm)(s.uT,{name:"fade"},{default:(0,l.w5)((()=>[o.edit.val?((0,l.wg)(),(0,l.iD)("div",E,[(0,l._)("div",{class:"blur",onClick:e[6]||(e[6]=a=>{o.edit.val=!1,o.search.val=!1})}),(0,l._)("form",{onSubmit:e[10]||(e[10]=(0,s.iM)((a=>o.updateTask(o.edit.num,o.edit.task)),["prevent"])),class:"edit-form",id:"edit-form"},[(0,l._)("h1",null,[K,M,(0,l.Uk)(" "+(0,i.zw)(o.edit.num+1),1)]),(0,l.wy)((0,l._)("input",{type:"hidden","onUpdate:modelValue":e[7]||(e[7]=a=>o.edit.num=a),class:"task-id",required:""},null,512),[[s.nr,o.edit.num]]),(0,l.wy)((0,l._)("textarea",{type:"text",name:"edit",id:"edit",cols:"10",rows:"15",placeholder:"Edit task here....","onUpdate:modelValue":e[8]||(e[8]=a=>o.edit.task=a),required:""},null,512),[[s.nr,o.edit.task]]),(0,l._)("div",L,[R,o.edit.val?((0,l.wg)(),(0,l.iD)("button",{key:0,title:"close task editing",onClick:e[9]||(e[9]=a=>{o.edit.val=!1,o.search.val=!1})}," ×close ")):(0,l.kq)("",!0)])],32)])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(s.uT,{name:"fade"},{default:(0,l.w5)((()=>[o.search.val?((0,l.wg)(),(0,l.iD)("div",Y,[(0,l._)("div",{class:"blur",onClick:e[11]||(e[11]=a=>{o.edit.val=!1,o.search.val=!1})}),(0,l._)("form",{onSubmit:e[14]||(e[14]=(0,s.iM)((a=>o.searchTask(o.search.task)),["prevent"])),class:"edit-form",id:"edit-form"},[(0,l.wy)((0,l._)("input",{type:"text",name:"search",id:"search",placeholder:"Search...","onUpdate:modelValue":e[12]||(e[12]=a=>o.search.task=a),required:""},null,512),[[s.nr,o.search.task]]),(0,l._)("div",Z,[B,o.search.val?((0,l.wg)(),(0,l.iD)("button",{key:0,title:"close task editing",onClick:e[13]||(e[13]=a=>{o.edit.val=!1,o.search.val=!1})}," × close ")):(0,l.kq)("",!0)])],32)])):(0,l.kq)("",!0)])),_:1}),F,(0,l.Wm)(s.uT,{name:"appear"},{default:(0,l.w5)((()=>[o.read?((0,l.wg)(),(0,l.iD)("div",G,[(0,l._)("div",{class:"blur",onClick:e[15]||(e[15]=a=>o.read=!o.read)}),(0,l._)("div",J,[(0,l._)("i",{class:"fa-solid fa-rectangle-xmark",onClick:e[16]||(e[16]=a=>o.read=!o.read)}),(0,l._)("p",null,[(0,l.Uk)((0,i.zw)(o.profile.profileName)+" ",1),O,(0,l.Uk)(" "+(0,i.zw)(o.profile.description),1)]),(0,l._)("h3",null,[P,(0,l._)("span",null,(0,i.zw)(o.taskIndex+1),1),(0,l.Uk)(" Was written on:"+(0,i.zw)(o.taskDate),1)]),(0,l._)("p",null,(0,i.zw)(o.popTask),1)])])):(0,l.kq)("",!0)])),_:1})])}var X=t(2119),aa=t(2262),ea=t(9669),ta=t.n(ea),la={name:"Todo",setup(){let a=(0,aa.qj)({profileName:"",description:""});const e=(0,X.tv)();let t=(0,aa.iH)(!1);const i=(0,aa.iH)(!1),s=(0,aa.iH)(""),o=(0,aa.iH)({name:"",date:"",done:!1});let n=(0,aa.qj)({task:"",val:!1});const d=(0,aa.iH)(""),r=(0,aa.iH)(0),u=(0,aa.iH)(!1);let c=(0,aa.iH)([]),v=(0,aa.iH)(!1),k=(0,aa.iH)(!1),p=(0,aa.iH)(""),m=(0,aa.iH)(""),h=localStorage.getItem("accessId"),_=(0,aa.iH)(""),f=(0,aa.iH)(!1),w=(0,aa.iH)(!1),y=(0,aa.iH)(!1),g=(0,aa.iH)(""),C=(0,aa.iH)(""),T=(0,aa.iH)("");(0,l.bv)((()=>{_.value=null==h?"":h,b()}));const b=async()=>{try{await ta()(`api/todo/${_.value}`).then((async e=>{c.value=await e.data.todos,r.value=c.value.length,a.profileName=e.data.username,a.description=e.data.description})).catch((a=>(e.push("/login"),a)))}catch(t){return e.push("/login"),t}},D=async(a,e)=>{try{await ta().post(`api/todo/${e}`,{data:a},{headers:{"Content-Type":"application/json"}}).then((a=>(b(),a))).catch((a=>a))}catch(t){return t}},H=()=>{o.value.name=s.value,o.value.date=new Date,o.value.done=!1,b(),0!==s.value.trim().length&&""!==s.value?(ta()(`api/todo/${_.value}`).then((async a=>{c.value.push(o.value),await D(c.value,a.data._id)})).catch((a=>a)),s.value="",i.value=!1):i.value=!0,r.value=c.value.length},U=()=>{ta()(`api/todo/${_.value}`).then((async a=>{if(window.confirm("Are you sure you want to delete all tasks? \n this action is irreversible"))return c.value=[],void await D(c.value,a.data._id);await b()}))},q=a=>{ta()(`api/todo/${_.value}`).then((async e=>c.value[a].done?(window.confirm("Do you want to delete this task?")&&(c.value=await e.data.todos,c.value.splice(a,1)),void await D(c.value,e.data._id)):window.confirm("Do you want to delete this task? the task is not completed ")?(c.value=await e.data.todos,c.value.splice(a,1),void await D(c.value,e.data._id)):void await D(c.value,e.data._id))).then((a=>a))},z=a=>{ta()(`api/todo/${_.value}`).then((async e=>{c.value=e.data.todos,c.value[a].done||(window.confirm(`Do you want to mark task ${a+1} as completed or important?`)&&(c.value[a].done=!0,v.value=!0),await D(c.value,e.data._id))}))};let x=(0,aa.qj)({task:"",val:!1,num:0});const I=(a,e)=>{x.task=e,x.val=!0,x.num=a,n.val=!1,b()},S=async(a,e)=>{c.value[a].name=e,v.value=!0,await D(c.value,_.value),x.val=!1},$=a=>{ta()(`api/todo/${_.value}`).then((e=>{let t=(0,aa.iH)([]);a=a.toLowerCase();for(let l=0;l<e.data.todos.length;l++)e.data.todos[l].name.includes(a)&&t.value.push(e.data.todos[l]);n.task="",c.value=t.value,n.val=!1,r.value=c.value.length})).catch((a=>a))},W=(a,e,t)=>{y.value=!0,g.value=a,C.value=e,T.value=t};return{edit:x,taskDate:C,taskIndex:T,valid:t,isDone:v,invalid:u,username:p,password:m,invalidTask:i,userData:s,response:f,confirmation:w,status:k,todoCount:r,todoItems:c,profile:a,todo:d,search:n,read:y,popTask:g,searchTask:$,addStatus:z,updateTask:S,editTask:I,removeTask:q,removeAllTodos:U,addTodo:H,displayTodo:b,readTask:W}}},ia=t(3744);const sa=(0,ia.Z)(la,[["render",Q],["__scopeId","data-v-19f812c5"]]);var oa=sa}}]);
//# sourceMappingURL=Todo.777d2ffa.js.map