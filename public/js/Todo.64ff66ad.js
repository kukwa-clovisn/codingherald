(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Todo"],{"0b42":function(t,e,n){var r=n("da84"),a=n("e8b5"),o=n("68ee"),c=n("861d"),i=n("b622"),u=i("species"),s=r.Array;t.exports=function(t){var e;return a(t)&&(e=t.constructor,o(e)&&(e===s||a(e.prototype))?e=void 0:c(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?s:e}},"107c":function(t,e,n){var r=n("d039"),a=n("da84"),o=a.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("da84"),a=n("c65b"),o=n("825a"),c=n("1626"),i=n("c6b6"),u=n("9263"),s=r.TypeError;t.exports=function(t,e){var n=t.exec;if(c(n)){var r=a(n,t,e);return null!==r&&o(r),r}if("RegExp"===i(t))return a(u,t,e);throw s("RegExp#exec called on incompatible receiver")}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("d3b7");function r(t,e,n,r,a,o,c){try{var i=t[o](c),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var c=t.apply(e,n);function i(t){r(c,a,o,i,u,"next",t)}function u(t){r(c,a,o,i,u,"throw",t)}i(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),o=n("2d00"),c=a("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,n){"use strict";var r=n("23e7"),a=n("e330"),o=n("5a34"),c=n("1d80"),i=n("577e"),u=n("ab13"),s=a("".indexOf);r({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~s(i(c(this)),i(o(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),o=n("b622"),c=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==a(t))}},"498a":function(t,e,n){"use strict";var r=n("23e7"),a=n("58a8").trim,o=n("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return a(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("e330"),a=n("1d80"),o=n("577e"),c=n("5899"),i=r("".replace),u="["+c+"]",s=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(t){return function(e){var n=o(a(e));return 1&t&&(n=i(n,s,"")),2&t&&(n=i(n,l,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},"5a34":function(t,e,n){var r=n("da84"),a=n("44e7"),o=r.TypeError;t.exports=function(t){if(a(t))throw o("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"731b":function(t,e,n){},8418:function(t,e,n){"use strict";var r=n("a04b"),a=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?a.f(t,c,o(0,n)):t[c]=n}},"841c":function(t,e,n){"use strict";var r=n("c65b"),a=n("d784"),o=n("825a"),c=n("1d80"),i=n("129f"),u=n("577e"),s=n("dc4a"),l=n("14c3");a("search",(function(t,e,n){return[function(e){var n=c(this),a=void 0==e?void 0:s(e,t);return a?r(a,e,n):new RegExp(e)[t](u(n))},function(t){var r=o(this),a=u(t),c=n(e,r,a);if(c.done)return c.value;var s=r.lastIndex;i(s,0)||(r.lastIndex=0);var f=l(r,a);return i(r.lastIndex,s)||(r.lastIndex=s),null===f?-1:f.index}]}))},9263:function(t,e,n){"use strict";var r=n("c65b"),a=n("e330"),o=n("577e"),c=n("ad6d"),i=n("9f7f"),u=n("5692"),s=n("7c73"),l=n("69f3").get,f=n("fce3"),d=n("107c"),h=u("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,b=a("".charAt),m=a("".indexOf),g=a("".replace),j=a("".slice),O=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),y=i.UNSUPPORTED_Y||i.BROKEN_CARET,x=void 0!==/()??/.exec("")[1],k=O||x||y||f||d;k&&(v=function(t){var e,n,a,i,u,f,d,k=this,w=l(k),E=o(t),R=w.raw;if(R)return R.lastIndex=k.lastIndex,e=r(v,R,E),k.lastIndex=R.lastIndex,e;var T=w.groups,A=y&&k.sticky,I=r(c,k),L=k.source,_=0,C=E;if(A&&(I=g(I,"y",""),-1===m(I,"g")&&(I+="g"),C=j(E,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==b(E,k.lastIndex-1))&&(L="(?: "+L+")",C=" "+C,_++),n=new RegExp("^(?:"+L+")",I)),x&&(n=new RegExp("^"+L+"$(?!\\s)",I)),O&&(a=k.lastIndex),i=r(p,A?n:k,C),A?i?(i.input=j(i.input,_),i[0]=j(i[0],_),i.index=k.lastIndex,k.lastIndex+=i[0].length):k.lastIndex=0:O&&i&&(k.lastIndex=k.global?i.index+i[0].length:a),x&&i&&i.length>1&&r(h,i[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i&&T)for(i.groups=f=s(null),u=0;u<T.length;u++)d=T[u],f[d[0]]=i[d[1]];return i}),t.exports=v},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof b?e:b,o=Object.create(a.prototype),c=new I(r||[]);return o._invoke=E(t,n,c),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function b(){}function m(){}function g(){}var j={};u(j,o,(function(){return this}));var O=Object.getPrototypeOf,y=O&&O(O(L([])));y&&y!==n&&r.call(y,o)&&(j=y);var x=g.prototype=b.prototype=Object.create(j);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(a,o,c,i){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,i)}))}i(u.arg)}var a;function o(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function E(t,e,n){var r=f;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return _()}n.method=a,n.arg=o;while(1){var c=n.delegate;if(c){var i=R(c,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?p:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function R(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,R(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function L(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function n(){while(++a<t.length)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:_}}function _(){return{value:e,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(w.prototype),u(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new w(s(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},k(x),u(x,i,"Generator"),u(x,o,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"96d3":function(t,e,n){"use strict";n("731b")},"9f7f":function(t,e,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a3b3:function(t,e,n){"use strict";n.r(e);n("ac1f"),n("841c"),n("b0c0");var r=n("7a23"),a=n("e7e9"),o=n.n(a),c=function(t){return Object(r["y"])("data-v-642f3da8"),t=t(),Object(r["w"])(),t},i={class:"main"},u={class:"content"},s={class:"todo-container"},l={id:"text-run"},f=c((function(){return Object(r["h"])("i",{class:"far fa-heart"},null,-1)})),d={class:"addItem"},h={key:0,id:"error",class:"py-3"},p={class:"todoItems"},v={class:"item"},b=["onClick"],m=["title"],g=["onClick"],j=c((function(){return Object(r["h"])("span",{class:"read-icon"},[Object(r["h"])("i",{class:"fa-brands fa-readme"}),Object(r["j"])("Read")],-1)})),O=[j],y={class:"icons"},x=["onClick"],k=c((function(){return Object(r["h"])("i",{class:"far fa-edit edit",title:"Edit task!"},null,-1)})),w=[k],E=["onUpdate:modelValue","onChange"],R=["onClick"],T={id:"pending"},A=Object(r["j"])(" you have "),I={id:"count"},L=Object(r["j"])(" Memories "),_={key:0,class:"errorDiv"},C=c((function(){return Object(r["h"])("button",{type:"submit"},[Object(r["h"])("i",{class:"far fa-edit edit",title:"Edit task..."})],-1)})),S={key:0,class:"errorDiv"},N=c((function(){return Object(r["h"])("button",{type:"submit"},[Object(r["h"])("i",{class:"fa-solid fa-magnifying-glass edit",title:"Search task(s)"})],-1)})),D=c((function(){return Object(r["h"])("img",{src:o.a,id:"pic",alt:""},null,-1)})),P={key:0,class:"read-task"},U={class:"read-content"},G=c((function(){return Object(r["h"])("br",null,null,-1)}));function K(t,e,n,a,o,c){return Object(r["v"])(),Object(r["g"])("div",i,[Object(r["h"])("div",u,[Object(r["h"])("div",s,[Object(r["h"])("h1",l,[Object(r["j"])(Object(r["E"])(a.profile.profileName)+"'s Dairy",1),f]),Object(r["L"])(Object(r["h"])("textarea",{type:"text",id:"inputItem","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.userData=t}),name:"text",placeholder:"input new todo item",onKeyup:e[1]||(e[1]=function(t){return a.invalidTask=!1}),required:""},null,544),[[r["I"],a.userData]]),Object(r["h"])("div",d,[Object(r["h"])("span",null,[Object(r["h"])("i",{class:"fa-solid fa-magnifying-glass laugh",title:"Search task(s)",onClick:e[2]||(e[2]=function(t){a.search.val=!a.search.val,a.edit.val=!1})}),Object(r["h"])("i",{class:"fa-regular fa-address-book laugh",title:"All tasks",onClick:e[3]||(e[3]=function(t){return a.displayTodo()})})]),Object(r["h"])("button",{onClick:e[4]||(e[4]=function(t){return a.addTodo()})},"add todo item")]),Object(r["k"])(r["b"],{name:"fade"},{default:Object(r["K"])((function(){return[a.invalidTask?(Object(r["v"])(),Object(r["g"])("p",h," please add a valid task ❣️KCN❣️ ")):Object(r["f"])("",!0)]})),_:1}),Object(r["h"])("div",p,[Object(r["k"])(r["c"],{tag:"ul",appear:"",name:"fade"},{default:Object(r["K"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(a.todoItems,(function(t,e){return Object(r["v"])(),Object(r["g"])("li",{class:Object(r["q"])({done:t.done}),key:e},[Object(r["h"])("div",v,[Object(r["h"])("p",{onClick:function(e){return a.readTask(t.name,t.date)}},Object(r["E"])(t.date),9,b),Object(r["h"])("p",{class:"content",title:t.name},Object(r["E"])(t.name),9,m),Object(r["h"])("p",{onClick:function(e){return a.readTask(t.name,t.date)}},O,8,g)]),Object(r["h"])("div",y,[Object(r["h"])("button",{onClick:function(n){return a.editTask(e,t.name)}},w,8,x),Object(r["L"])(Object(r["h"])("input",{type:"checkbox",name:"done","onUpdate:modelValue":function(e){return t.done=e},class:"taskStatus",onChange:function(t){return a.addStatus(e)},title:"check task!"},null,40,E),[[r["G"],t.done]]),Object(r["h"])("i",{class:"fa fa-trash",id:"trash",onClick:function(t){return a.removeTask(e)}},null,8,R)])],2)})),128))]})),_:1})]),Object(r["h"])("p",T,[A,Object(r["h"])("span",I,Object(r["E"])(a.todoCount),1),L]),Object(r["h"])("button",{id:"reset",onClick:e[5]||(e[5]=function(t){return a.removeAllTodos()})},"clear all todos")])]),Object(r["k"])(r["b"],{name:"fade"},{default:Object(r["K"])((function(){return[a.edit.val?(Object(r["v"])(),Object(r["g"])("div",_,[Object(r["h"])("div",{class:"blur",onClick:e[6]||(e[6]=function(t){a.edit.val=!1,a.search.val=!1})}),Object(r["h"])("form",{onSubmit:e[9]||(e[9]=Object(r["M"])((function(t){return a.updateTask(a.edit.num,a.edit.task)}),["prevent"])),class:"edit-form",id:"edit-form"},[Object(r["L"])(Object(r["h"])("input",{type:"hidden","onUpdate:modelValue":e[7]||(e[7]=function(t){return a.edit.num=t}),class:"task-id",required:""},null,512),[[r["I"],a.edit.num]]),Object(r["L"])(Object(r["h"])("textarea",{type:"text",name:"edit",id:"edit",cols:"10",rows:"15",placeholder:"Edit task here....","onUpdate:modelValue":e[8]||(e[8]=function(t){return a.edit.task=t}),required:""},null,512),[[r["I"],a.edit.task]]),C],32),a.edit.val?(Object(r["v"])(),Object(r["g"])("button",{key:0,title:"close task editing",onClick:e[10]||(e[10]=function(t){a.edit.val=!1,a.search.val=!1})}," close ")):Object(r["f"])("",!0)])):Object(r["f"])("",!0)]})),_:1}),Object(r["k"])(r["b"],{name:"fade"},{default:Object(r["K"])((function(){return[a.search.val?(Object(r["v"])(),Object(r["g"])("div",S,[Object(r["h"])("div",{class:"blur",onClick:e[11]||(e[11]=function(t){a.edit.val=!1,a.search.val=!1})}),Object(r["h"])("form",{onSubmit:e[13]||(e[13]=Object(r["M"])((function(t){return a.searchTask(a.search.task)}),["prevent"])),class:"edit-form",id:"edit-form"},[Object(r["L"])(Object(r["h"])("input",{type:"text",name:"search",id:"search",placeholder:"Search...","onUpdate:modelValue":e[12]||(e[12]=function(t){return a.search.task=t}),required:""},null,512),[[r["I"],a.search.task]]),N],32),a.search.val?(Object(r["v"])(),Object(r["g"])("button",{key:0,title:"close task editing",onClick:e[14]||(e[14]=function(t){a.edit.val=!1,a.search.val=!1})}," close ")):Object(r["f"])("",!0)])):Object(r["f"])("",!0)]})),_:1}),D,Object(r["k"])(r["b"],{name:"appear"},{default:Object(r["K"])((function(){return[a.read?(Object(r["v"])(),Object(r["g"])("div",P,[Object(r["h"])("div",{class:"blur",onClick:e[15]||(e[15]=function(t){return a.read=!a.read})}),Object(r["h"])("div",U,[Object(r["h"])("i",{class:"fa-solid fa-rectangle-xmark",onClick:e[16]||(e[16]=function(t){return a.read=!a.read})}),Object(r["h"])("p",null,[Object(r["j"])(Object(r["E"])(a.profile.profileName)+" ",1),G,Object(r["j"])(" "+Object(r["E"])(a.profile.profileEmail),1)]),Object(r["h"])("h3",null,"Was written on:"+Object(r["E"])(a.taskDate),1),Object(r["h"])("p",null,Object(r["E"])(a.popTask),1)])])):Object(r["f"])("",!0)]})),_:1})])}var F=n("1da1"),M=(n("498a"),n("a434"),n("caad"),n("2532"),n("96cf"),n("bc3a")),V=n.n(M),q={name:"Todo",setup:function(){var t=Object(r["z"])({profileName:"",profileEmail:""}),e=Object(r["A"])(!1),n=Object(r["A"])(!1),a=Object(r["A"])(""),o=Object(r["A"])({name:"",date:"",done:!1}),c=Object(r["z"])({task:"",val:!1}),i=Object(r["A"])(""),u=Object(r["A"])(0),s=Object(r["A"])(!1),l=Object(r["A"])([]),f=Object(r["A"])(!1),d=Object(r["A"])(!1),h=Object(r["A"])(""),p=Object(r["A"])(""),v=localStorage.getItem("accessId"),b=Object(r["A"])(""),m=Object(r["A"])(!1),g=Object(r["A"])(!1),j=Object(r["A"])(!1),O=Object(r["A"])(""),y=Object(r["A"])("");Object(r["t"])((function(){b.value=null==v?"":v,x()}));var x=function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V()("api/todo/"+"".concat(b.value)).then(function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.data.todos;case 2:l.value=e.sent,u.value=l.value.length,t.profileName=n.data.username,t.profileEmail=n.data.email;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return t}));case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.a.post("api/todo/"+"".concat(n),{data:e},{headers:{"Content-Type":"application/json"}}).then((function(t){return x(),t})).catch((function(t){return t}));case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){o.value.name=a.value,o.value.date=new Date,o.value.done=!1,x(),0!==a.value.trim().length&&""!==a.value?(V()("api/todo/"+"".concat(b.value)).then(function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l.value.push(o.value),t.next=3,k(l.value,e.data._id);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return t})),a.value="",n.value=!1):n.value=!0,u.value=l.value.length},E=function(){V()("api/todo/"+"".concat(b.value)).then(function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure you want to delete all tasks? \n this action is irreversible")){t.next=5;break}return l.value=[],t.next=4,k(l.value,e.data._id);case 4:return t.abrupt("return");case 5:return t.next=7,x();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},R=function(t){V()("api/todo/"+"".concat(b.value)).then(function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!l.value[t].done){e.next=9;break}if(!window.confirm("Do you want to delete this task?")){e.next=6;break}return e.next=4,n.data.todos;case 4:l.value=e.sent,l.value.splice(t,1);case 6:return e.next=8,k(l.value,n.data._id);case 8:return e.abrupt("return");case 9:if(!window.confirm("Do you want to delete this task? the task is not completed ")){e.next=17;break}return e.next=12,n.data.todos;case 12:return l.value=e.sent,l.value.splice(t,1),e.next=16,k(l.value,n.data._id);case 16:return e.abrupt("return");case 17:return e.next=19,k(l.value,n.data._id);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(t){return t}))},T=function(t){V()("api/todo/"+"".concat(b.value)).then(function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(l.value=n.data.todos,l.value[t].done){e.next=5;break}return window.confirm("Do you want to mark task ".concat(t+1," as completed?"))&&(l.value[t].done=!0,f.value=!0),e.next=5,k(l.value,n.data._id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},A=Object(r["z"])({task:"",val:!1,num:0}),I=function(t,e){A.task=e,A.val=!0,A.num=t,c.val=!1,x()},L=function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l.value[e].name=n,f.value=!0,t.next=4,k(l.value,b.value);case 4:return A.val=!1,t.abrupt("return");case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_=function(t){V()("api/todo/"+"".concat(b.value)).then((function(e){var n=Object(r["A"])([]);t=t.toLowerCase();for(var a=0;a<e.data.todos.length;a++)e.data.todos[a].name.includes(t)&&n.value.push(e.data.todos[a]);c.task="",l.value=n.value,c.val=!1,u.value=l.value.length})).catch((function(t){return t}))},C=function(t,e){j.value=!0,O.value=t,y.value=e};return{edit:A,taskDate:y,valid:e,isDone:f,invalid:s,username:h,password:p,invalidTask:n,userData:a,response:m,confirmation:g,status:d,todoCount:u,todoItems:l,profile:t,todo:i,search:c,read:j,popTask:O,searchTask:_,addStatus:T,updateTask:L,editTask:I,removeTask:R,removeAllTodos:E,addTodo:w,displayTodo:x,readTask:C}}},B=(n("96d3"),n("6b0d")),Y=n.n(B);const z=Y()(q,[["render",K],["__scopeId","data-v-642f3da8"]]);e["default"]=z},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("23cb"),c=n("5926"),i=n("07fa"),u=n("7b0b"),s=n("65f0"),l=n("8418"),f=n("1dde"),d=f("splice"),h=a.TypeError,p=Math.max,v=Math.min,b=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,r,a,f,d,g,j=u(this),O=i(j),y=o(t,O),x=arguments.length;if(0===x?n=r=0:1===x?(n=0,r=O-y):(n=x-2,r=v(p(c(e),0),O-y)),O+n-r>b)throw h(m);for(a=s(j,r),f=0;f<r;f++)d=y+f,d in j&&l(a,f,j[d]);if(a.length=r,n<r){for(f=y;f<O-r;f++)d=f+r,g=f+n,d in j?j[g]=j[d]:delete j[g];for(f=O;f>O-r+n;f--)delete j[f-1]}else if(n>r)for(f=O-r;f>y;f--)d=f+r-1,g=f+n-1,d in j?j[g]=j[d]:delete j[g];for(f=0;f<n;f++)j[f+y]=arguments[f+2];return j.length=O-r+n,a}})},ab13:function(t,e,n){var r=n("b622"),a=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),a=n("5e77").EXISTS,o=n("e330"),c=n("9bf2").f,i=Function.prototype,u=o(i.toString),s=/^\s*function ([^ (]*)/,l=o(s.exec),f="name";r&&!a&&c(i,f,{configurable:!0,get:function(){try{return l(s,u(this))[1]}catch(t){return""}}})},c8d2:function(t,e,n){var r=n("5e77").PROPER,a=n("d039"),o=n("5899"),c="​᠎";t.exports=function(t){return a((function(){return!!o[t]()||c[t]()!==c||r&&o[t].name!==t}))}},caad:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),o=n("9263"),c=n("d039"),i=n("b622"),u=n("9112"),s=i("species"),l=RegExp.prototype;t.exports=function(t,e,n,f){var d=i(t),h=!c((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=h&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!h||!p||n){var v=r(/./[d]),b=e(d,""[t],(function(t,e,n,a,c){var i=r(t),u=e.exec;return u===o||u===l.exec?h&&!c?{done:!0,value:v(e,n,a)}:{done:!0,value:i(n,e,a)}:{done:!1}}));a(String.prototype,t,b[0]),a(l,d,b[1])}f&&u(l[d],"sham",!0)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fce3:function(t,e,n){var r=n("d039"),a=n("da84"),o=a.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=Todo.64ff66ad.js.map