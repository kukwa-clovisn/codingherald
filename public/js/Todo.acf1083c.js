(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Todo"],{"107c":function(t,e,n){var r=n("d039"),a=n("da84"),i=a.RegExp;t.exports=r((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("2ba4"),a=n("c65b"),i=n("e330"),c=n("d784"),o=n("44e7"),u=n("825a"),s=n("1d80"),l=n("4840"),d=n("8aa5"),f=n("50c4"),p=n("577e"),h=n("dc4a"),v=n("f36a"),b=n("14c3"),g=n("9263"),m=n("9f7f"),O=n("d039"),j=m.UNSUPPORTED_Y,x=4294967295,y=Math.min,k=[].push,w=i(/./.exec),E=i(k),R=i("".slice),T=!O((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));c("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=p(s(this)),c=void 0===n?x:n>>>0;if(0===c)return[];if(void 0===t)return[i];if(!o(t))return a(e,i,t,c);var u,l,d,f=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,m=new RegExp(t.source,h+"g");while(u=a(g,m,i)){if(l=m.lastIndex,l>b&&(E(f,R(i,b,u.index)),u.length>1&&u.index<i.length&&r(k,f,v(u,1)),d=u[0].length,b=l,f.length>=c))break;m.lastIndex===u.index&&m.lastIndex++}return b===i.length?!d&&w(m,"")||E(f,""):E(f,R(i,b)),f.length>c?v(f,0,c):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:a(e,this,t,n)}:e,[function(e,n){var r=s(this),c=void 0==e?void 0:h(e,t);return c?a(c,e,r,n):a(i,p(r),e,n)},function(t,r){var a=u(this),c=p(t),o=n(i,a,c,r,i!==e);if(o.done)return o.value;var s=l(a,RegExp),h=a.unicode,v=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(j?"g":"y"),g=new s(j?"^(?:"+a.source+")":a,v),m=void 0===r?x:r>>>0;if(0===m)return[];if(0===c.length)return null===b(g,c)?[c]:[];var O=0,k=0,w=[];while(k<c.length){g.lastIndex=j?0:k;var T,I=b(g,j?R(c,k):c);if(null===I||(T=y(f(g.lastIndex+(j?k:0)),c.length))===O)k=d(c,k,h);else{if(E(w,R(c,O,k)),w.length===m)return w;for(var C=1;C<=I.length-1;C++)if(E(w,I[C]),w.length===m)return w;k=O=T}}return E(w,R(c,O)),w}]}),!T,j)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("da84"),a=n("c65b"),i=n("825a"),c=n("1626"),o=n("c6b6"),u=n("9263"),s=r.TypeError;t.exports=function(t,e){var n=t.exec;if(c(n)){var r=a(n,t,e);return null!==r&&i(r),r}if("RegExp"===o(t))return a(u,t,e);throw s("RegExp#exec called on incompatible receiver")}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("d3b7");function r(t,e,n,r,a,i,c){try{var o=t[i](c),u=o.value}catch(s){return void n(s)}o.done?e(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var c=t.apply(e,n);function o(t){r(c,a,i,o,u,"next",t)}function u(t){r(c,a,i,o,u,"throw",t)}o(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),i=n("2d00"),c=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,n){"use strict";var r=n("23e7"),a=n("e330"),i=n("5a34"),c=n("1d80"),o=n("577e"),u=n("ab13"),s=a("".indexOf);r({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~s(o(c(this)),o(i(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),c=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==a(t))}},"498a":function(t,e,n){"use strict";var r=n("23e7"),a=n("58a8").trim,i=n("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("e330"),a=n("1d80"),i=n("577e"),c=n("5899"),o=r("".replace),u="["+c+"]",s=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),d=function(t){return function(e){var n=i(a(e));return 1&t&&(n=o(n,s,"")),2&t&&(n=o(n,l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5a34":function(t,e,n){var r=n("da84"),a=n("44e7"),i=r.TypeError;t.exports=function(t){if(a(t))throw i("The method doesn't accept regular expressions");return t}},"72f9":function(t,e,n){"use strict";n("a7f8")},8418:function(t,e,n){"use strict";var r=n("a04b"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?a.f(t,c,i(0,n)):t[c]=n}},"841c":function(t,e,n){"use strict";var r=n("c65b"),a=n("d784"),i=n("825a"),c=n("1d80"),o=n("129f"),u=n("577e"),s=n("dc4a"),l=n("14c3");a("search",(function(t,e,n){return[function(e){var n=c(this),a=void 0==e?void 0:s(e,t);return a?r(a,e,n):new RegExp(e)[t](u(n))},function(t){var r=i(this),a=u(t),c=n(e,r,a);if(c.done)return c.value;var s=r.lastIndex;o(s,0)||(r.lastIndex=0);var d=l(r,a);return o(r.lastIndex,s)||(r.lastIndex=s),null===d?-1:d.index}]}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("c65b"),a=n("e330"),i=n("577e"),c=n("ad6d"),o=n("9f7f"),u=n("5692"),s=n("7c73"),l=n("69f3").get,d=n("fce3"),f=n("107c"),p=u("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,v=h,b=a("".charAt),g=a("".indexOf),m=a("".replace),O=a("".slice),j=function(){var t=/a/,e=/b*/g;return r(h,t,"a"),r(h,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),x=o.UNSUPPORTED_Y||o.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],k=j||y||x||d||f;k&&(v=function(t){var e,n,a,o,u,d,f,k=this,w=l(k),E=i(t),R=w.raw;if(R)return R.lastIndex=k.lastIndex,e=r(v,R,E),k.lastIndex=R.lastIndex,e;var T=w.groups,I=x&&k.sticky,C=r(c,k),_=k.source,L=0,B=E;if(I&&(C=m(C,"y",""),-1===g(C,"g")&&(C+="g"),B=O(E,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==b(E,k.lastIndex-1))&&(_="(?: "+_+")",B=" "+B,L++),n=new RegExp("^(?:"+_+")",C)),y&&(n=new RegExp("^"+_+"$(?!\\s)",C)),j&&(a=k.lastIndex),o=r(h,I?n:k,B),I?o?(o.input=O(o.input,L),o[0]=O(o[0],L),o.index=k.lastIndex,k.lastIndex+=o[0].length):k.lastIndex=0:j&&o&&(k.lastIndex=k.global?o.index+o[0].length:a),y&&o&&o.length>1&&r(p,o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&T)for(o.groups=d=s(null),u=0;u<T.length;u++)f=T[u],d[f[0]]=o[f[1]];return o}),t.exports=v},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(B){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new C(r||[]);return i._invoke=E(t,n,c),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(B){return{type:"throw",arg:B}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={};function b(){}function g(){}function m(){}var O={};u(O,i,(function(){return this}));var j=Object.getPrototypeOf,x=j&&j(j(_([])));x&&x!==n&&r.call(x,i)&&(O=x);var y=m.prototype=b.prototype=Object.create(O);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(a,i,c,o){var u=l(t[a],t,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,o)}),(function(t){n("throw",t,c,o)})):e.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,o)}))}o(u.arg)}var a;function i(t,r){function i(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function E(t,e,n){var r=d;return function(a,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw i;return L()}n.method=a,n.arg=i;while(1){var c=n.delegate;if(c){var o=R(c,n);if(o){if(o===v)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?h:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}function R(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,R(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function n(){while(++a<t.length)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:L}}function L(){return{value:e,done:!0}}return g.prototype=m,u(y,"constructor",m),u(m,"constructor",g),g.displayName=u(m,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,o,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},k(w.prototype),u(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var c=new w(s(e,n,r,a),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},k(y),u(y,o,"Generator"),u(y,i,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return o.type="throw",o.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],o=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;I(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9f7f":function(t,e,n){var r=n("d039"),a=n("da84"),i=a.RegExp;e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a3b3:function(t,e,n){"use strict";n.r(e);n("ac1f"),n("1276"),n("a4d3"),n("e01a"),n("841c"),n("b0c0");var r=n("7a23"),a=n("e7e9"),i=n.n(a),c=function(t){return Object(r["z"])("data-v-4065aa91"),t=t(),Object(r["x"])(),t},o={class:"main"},u=c((function(){return Object(r["i"])("div",{class:"c3"},[Object(r["i"])("i",{class:"fa-regular fa-address-book"}),Object(r["i"])("span",null,"see all your memories")],-1)})),s={class:"content"},l={class:"todo-container"},d={id:"text-run"},f=c((function(){return Object(r["i"])("i",{class:"far fa-heart"},null,-1)})),p={key:0,class:"title"},h={class:"addItem"},v=c((function(){return Object(r["i"])("i",{class:"fa-solid fa-circle-plus"},null,-1)})),b=Object(r["k"])("add memory "),g=[v,b],m={key:0,id:"error",class:"py-3"},O={class:"todoItems"},j={class:"item"},x=["onClick"],y={class:"span"},k=["title","onClick"],w=["title"],E=["onClick"],R=c((function(){return Object(r["i"])("span",{class:"read-icon"},[Object(r["i"])("i",{class:"fa-brands fa-readme"}),Object(r["k"])("Read")],-1)})),T=[R],I={class:"icons"},C=["onClick"],_=c((function(){return Object(r["i"])("i",{class:"far fa-edit edit",title:"Edit task!"},null,-1)})),L=[_],B=["onUpdate:modelValue","onChange"],N=["onClick"],S={id:"pending"},G=Object(r["k"])(" you have "),A={id:"count"},D=Object(r["k"])(" Memories "),P={key:0,class:"errorDiv"},U=Object(r["k"])("Edit "),M=c((function(){return Object(r["i"])("span",null,"task",-1)})),K={class:"buttons"},F=c((function(){return Object(r["i"])("button",{type:"submit"},[Object(r["i"])("i",{class:"far fa-edit edit",title:"Edit task..."}),Object(r["k"])("submit ")],-1)})),V={key:0,class:"errorDiv"},Y={class:"buttons"},q=c((function(){return Object(r["i"])("button",{type:"submit"},[Object(r["i"])("i",{class:"fa-solid fa-magnifying-glass edit",title:"Search task(s)"}),Object(r["k"])("Search ")],-1)})),$=c((function(){return Object(r["i"])("img",{src:i.a,id:"pic",alt:""},null,-1)})),J={key:0,class:"read-task"},z={class:"read-content"},W=c((function(){return Object(r["i"])("br",null,null,-1)})),H=Object(r["k"])(" Task");function Q(t,e,n,a,i,c){return Object(r["w"])(),Object(r["h"])("div",o,[u,Object(r["i"])("div",s,[Object(r["i"])("div",l,[Object(r["i"])("h1",d,[Object(r["k"])(Object(r["G"])(a.profile.profileName.split(" ")[0])+"'s Dairy",1),f]),a.profile.description.length?(Object(r["w"])(),Object(r["h"])("p",p,Object(r["G"])(a.profile.description),1)):Object(r["g"])("",!0),Object(r["N"])(Object(r["i"])("textarea",{type:"text",id:"inputItem","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.userData=t}),name:"text",placeholder:"Add new memory",onKeyup:e[1]||(e[1]=function(t){return a.invalidTask=!1}),required:""},null,544),[[r["K"],a.userData]]),Object(r["i"])("div",h,[Object(r["i"])("span",null,[Object(r["i"])("i",{class:"fa-solid fa-magnifying-glass laugh",title:"Search task(s)",onClick:e[2]||(e[2]=function(t){a.search.val=!a.search.val,a.edit.val=!1})}),Object(r["i"])("i",{class:"fa-regular fa-address-book laugh",title:"All tasks",onClick:e[3]||(e[3]=function(t){return a.displayTodo()})})]),Object(r["i"])("button",{onClick:e[4]||(e[4]=function(t){return a.addTodo()})},g)]),Object(r["l"])(r["b"],{name:"fade"},{default:Object(r["M"])((function(){return[a.invalidTask?(Object(r["w"])(),Object(r["h"])("p",m," please add a valid task ❣️KCN❣️ ")):Object(r["g"])("",!0)]})),_:1}),Object(r["i"])("div",O,[Object(r["l"])(r["c"],{tag:"ul",appear:"",name:"fade"},{default:Object(r["M"])((function(){return[(Object(r["w"])(!0),Object(r["h"])(r["a"],null,Object(r["C"])(a.todoItems,(function(t,e){return Object(r["w"])(),Object(r["h"])("li",{class:Object(r["r"])({done:t.done}),key:e},[Object(r["i"])("div",j,[Object(r["i"])("p",{onClick:function(n){return a.readTask(t.name,t.date,e)}},[Object(r["i"])("span",y,Object(r["G"])(e+1),1),Object(r["k"])(" "+Object(r["G"])(t.date),1)],8,x),Object(r["i"])("p",{class:"content large-screen-only",title:t.name,onClick:function(n){return a.readTask(t.name,t.date,e)}},Object(r["G"])(t.name),9,k),Object(r["i"])("p",{class:"content small-screen-only",title:t.name},Object(r["G"])(t.name),9,w),Object(r["i"])("p",{class:"small-screen-only",onClick:function(n){return a.readTask(t.name,t.date,e)}},T,8,E)]),Object(r["i"])("div",I,[Object(r["i"])("button",{onClick:function(n){return a.editTask(e,t.name)}},L,8,C),Object(r["N"])(Object(r["i"])("input",{type:"checkbox",name:"done","onUpdate:modelValue":function(e){return t.done=e},class:"taskStatus",onChange:function(t){return a.addStatus(e)},title:"check task!"},null,40,B),[[r["I"],t.done]]),Object(r["i"])("i",{class:"fa fa-trash",id:"trash",onClick:function(t){return a.removeTask(e)}},null,8,N)])],2)})),128))]})),_:1})]),Object(r["i"])("p",S,[G,Object(r["i"])("span",A,Object(r["G"])(a.todoCount),1),D]),Object(r["i"])("button",{id:"reset",onClick:e[5]||(e[5]=function(t){return a.removeAllTodos()})},"clear all todos")])]),Object(r["l"])(r["b"],{name:"fade"},{default:Object(r["M"])((function(){return[a.edit.val?(Object(r["w"])(),Object(r["h"])("div",P,[Object(r["i"])("div",{class:"blur",onClick:e[6]||(e[6]=function(t){a.edit.val=!1,a.search.val=!1})}),Object(r["i"])("form",{onSubmit:e[10]||(e[10]=Object(r["O"])((function(t){return a.updateTask(a.edit.num,a.edit.task)}),["prevent"])),class:"edit-form",id:"edit-form"},[Object(r["i"])("h1",null,[U,M,Object(r["k"])(" "+Object(r["G"])(a.edit.num+1),1)]),Object(r["N"])(Object(r["i"])("input",{type:"hidden","onUpdate:modelValue":e[7]||(e[7]=function(t){return a.edit.num=t}),class:"task-id",required:""},null,512),[[r["K"],a.edit.num]]),Object(r["N"])(Object(r["i"])("textarea",{type:"text",name:"edit",id:"edit",cols:"10",rows:"15",placeholder:"Edit task here....","onUpdate:modelValue":e[8]||(e[8]=function(t){return a.edit.task=t}),required:""},null,512),[[r["K"],a.edit.task]]),Object(r["i"])("div",K,[F,a.edit.val?(Object(r["w"])(),Object(r["h"])("button",{key:0,title:"close task editing",onClick:e[9]||(e[9]=function(t){a.edit.val=!1,a.search.val=!1})}," ×close ")):Object(r["g"])("",!0)])],32)])):Object(r["g"])("",!0)]})),_:1}),Object(r["l"])(r["b"],{name:"fade"},{default:Object(r["M"])((function(){return[a.search.val?(Object(r["w"])(),Object(r["h"])("div",V,[Object(r["i"])("div",{class:"blur",onClick:e[11]||(e[11]=function(t){a.edit.val=!1,a.search.val=!1})}),Object(r["i"])("form",{onSubmit:e[14]||(e[14]=Object(r["O"])((function(t){return a.searchTask(a.search.task)}),["prevent"])),class:"edit-form",id:"edit-form"},[Object(r["N"])(Object(r["i"])("input",{type:"text",name:"search",id:"search",placeholder:"Search...","onUpdate:modelValue":e[12]||(e[12]=function(t){return a.search.task=t}),required:""},null,512),[[r["K"],a.search.task]]),Object(r["i"])("div",Y,[q,a.search.val?(Object(r["w"])(),Object(r["h"])("button",{key:0,title:"close task editing",onClick:e[13]||(e[13]=function(t){a.edit.val=!1,a.search.val=!1})}," × close ")):Object(r["g"])("",!0)])],32)])):Object(r["g"])("",!0)]})),_:1}),$,Object(r["l"])(r["b"],{name:"appear"},{default:Object(r["M"])((function(){return[a.read?(Object(r["w"])(),Object(r["h"])("div",J,[Object(r["i"])("div",{class:"blur",onClick:e[15]||(e[15]=function(t){return a.read=!a.read})}),Object(r["i"])("div",z,[Object(r["i"])("i",{class:"fa-solid fa-rectangle-xmark",onClick:e[16]||(e[16]=function(t){return a.read=!a.read})}),Object(r["i"])("p",null,[Object(r["k"])(Object(r["G"])(a.profile.profileName)+" ",1),W,Object(r["k"])(" "+Object(r["G"])(a.profile.description),1)]),Object(r["i"])("h3",null,[H,Object(r["i"])("span",null,Object(r["G"])(a.taskIndex+1),1),Object(r["k"])(" Was written on:"+Object(r["G"])(a.taskDate),1)]),Object(r["i"])("p",null,Object(r["G"])(a.popTask),1)])])):Object(r["g"])("",!0)]})),_:1})])}var X=n("1da1"),Z=(n("96cf"),n("498a"),n("a434"),n("caad"),n("2532"),n("6c02")),tt=n("bc3a"),et=n.n(tt),nt={name:"Todo",setup:function(){var t=Object(r["A"])({profileName:"",description:""}),e=Object(Z["c"])(),n=Object(r["B"])(!1),a=Object(r["B"])(!1),i=Object(r["B"])(""),c=Object(r["B"])({name:"",date:"",done:!1}),o=Object(r["A"])({task:"",val:!1}),u=Object(r["B"])(""),s=Object(r["B"])(0),l=Object(r["B"])(!1),d=Object(r["B"])([]),f=Object(r["B"])(!1),p=Object(r["B"])(!1),h=Object(r["B"])(""),v=Object(r["B"])(""),b=localStorage.getItem("accessId"),g=Object(r["B"])(""),m=Object(r["B"])(!1),O=Object(r["B"])(!1),j=Object(r["B"])(!1),x=Object(r["B"])(""),y=Object(r["B"])(""),k=Object(r["B"])("");Object(r["u"])((function(){g.value=null==b?"":b,w()}));var w=function(){var n=Object(X["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,et()("api/todo/"+"".concat(g.value)).then(function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.data.todos;case 2:d.value=e.sent,s.value=d.value.length,t.profileName=n.data.username,t.description=n.data.description;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return e.push("/login"),t}));case 3:n.next=9;break;case 5:return n.prev=5,n.t0=n["catch"](0),e.push("/login"),n.abrupt("return",n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),E=function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,et.a.post("api/todo/"+"".concat(n),{data:e},{headers:{"Content-Type":"application/json"}}).then((function(t){return w(),t})).catch((function(t){return t}));case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e,n){return t.apply(this,arguments)}}(),R=function(){c.value.name=i.value,c.value.date=new Date,c.value.done=!1,w(),0!==i.value.trim().length&&""!==i.value?(et()("api/todo/"+"".concat(g.value)).then(function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return d.value.push(c.value),t.next=3,E(d.value,e.data._id);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return t})),i.value="",a.value=!1):a.value=!0,s.value=d.value.length},T=function(){et()("api/todo/"+"".concat(g.value)).then(function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure you want to delete all tasks? \n this action is irreversible")){t.next=5;break}return d.value=[],t.next=4,E(d.value,e.data._id);case 4:return t.abrupt("return");case 5:return t.next=7,w();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},I=function(t){et()("api/todo/"+"".concat(g.value)).then(function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!d.value[t].done){e.next=9;break}if(!window.confirm("Do you want to delete this task?")){e.next=6;break}return e.next=4,n.data.todos;case 4:d.value=e.sent,d.value.splice(t,1);case 6:return e.next=8,E(d.value,n.data._id);case 8:return e.abrupt("return");case 9:if(!window.confirm("Do you want to delete this task? the task is not completed ")){e.next=17;break}return e.next=12,n.data.todos;case 12:return d.value=e.sent,d.value.splice(t,1),e.next=16,E(d.value,n.data._id);case 16:return e.abrupt("return");case 17:return e.next=19,E(d.value,n.data._id);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(t){return t}))},C=function(t){et()("api/todo/"+"".concat(g.value)).then(function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(d.value=n.data.todos,d.value[t].done){e.next=5;break}return window.confirm("Do you want to mark task ".concat(t+1," as completed or important?"))&&(d.value[t].done=!0,f.value=!0),e.next=5,E(d.value,n.data._id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},_=Object(r["A"])({task:"",val:!1,num:0}),L=function(t,e){_.task=e,_.val=!0,_.num=t,o.val=!1,w()},B=function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return d.value[e].name=n,f.value=!0,t.next=4,E(d.value,g.value);case 4:return _.val=!1,t.abrupt("return");case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),N=function(t){et()("api/todo/"+"".concat(g.value)).then((function(e){var n=Object(r["B"])([]);t=t.toLowerCase();for(var a=0;a<e.data.todos.length;a++)e.data.todos[a].name.includes(t)&&n.value.push(e.data.todos[a]);o.task="",d.value=n.value,o.val=!1,s.value=d.value.length})).catch((function(t){return t}))},S=function(t,e,n){j.value=!0,x.value=t,y.value=e,k.value=n};return{edit:_,taskDate:y,taskIndex:k,valid:n,isDone:f,invalid:l,username:h,password:v,invalidTask:a,userData:i,response:m,confirmation:O,status:p,todoCount:s,todoItems:d,profile:t,todo:u,search:o,read:j,popTask:x,searchTask:N,addStatus:C,updateTask:B,editTask:L,removeTask:I,removeAllTodos:T,addTodo:R,displayTodo:w,readTask:S}}},rt=(n("72f9"),n("6b0d")),at=n.n(rt);const it=at()(nt,[["render",Q],["__scopeId","data-v-4065aa91"]]);e["default"]=it},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("23cb"),c=n("5926"),o=n("07fa"),u=n("7b0b"),s=n("65f0"),l=n("8418"),d=n("1dde"),f=d("splice"),p=a.TypeError,h=Math.max,v=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,r,a,d,f,m,O=u(this),j=o(O),x=i(t,j),y=arguments.length;if(0===y?n=r=0:1===y?(n=0,r=j-x):(n=y-2,r=v(h(c(e),0),j-x)),j+n-r>b)throw p(g);for(a=s(O,r),d=0;d<r;d++)f=x+d,f in O&&l(a,d,O[f]);if(a.length=r,n<r){for(d=x;d<j-r;d++)f=d+r,m=d+n,f in O?O[m]=O[f]:delete O[m];for(d=j;d>j-r+n;d--)delete O[d-1]}else if(n>r)for(d=j-r;d>x;d--)f=d+r-1,m=d+n-1,f in O?O[m]=O[f]:delete O[m];for(d=0;d<n;d++)O[d+x]=arguments[d+2];return O.length=j-r+n,a}})},a7f8:function(t,e,n){},ab13:function(t,e,n){var r=n("b622"),a=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c8d2:function(t,e,n){var r=n("5e77").PROPER,a=n("d039"),i=n("5899"),c="​᠎";t.exports=function(t){return a((function(){return!!i[t]()||c[t]()!==c||r&&i[t].name!==t}))}},caad:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),i=n("9263"),c=n("d039"),o=n("b622"),u=n("9112"),s=o("species"),l=RegExp.prototype;t.exports=function(t,e,n,d){var f=o(t),p=!c((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=p&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!p||!h||n){var v=r(/./[f]),b=e(f,""[t],(function(t,e,n,a,c){var o=r(t),u=e.exec;return u===i||u===l.exec?p&&!c?{done:!0,value:v(e,n,a)}:{done:!0,value:o(n,e,a)}:{done:!1}}));a(String.prototype,t,b[0]),a(l,f,b[1])}d&&u(l[f],"sham",!0)}},fce3:function(t,e,n){var r=n("d039"),a=n("da84"),i=a.RegExp;t.exports=r((function(){var t=i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=Todo.acf1083c.js.map