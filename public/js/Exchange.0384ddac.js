(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Exchange"],{"1dde":function(e,t,c){var _=c("d039"),n=c("b622"),r=c("2d00"),u=n("species");e.exports=function(e){return r>=51||!_((function(){var t=[],c=t.constructor={};return c[u]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2c70":function(e,t,c){"use strict";c.r(t);var _=c("7a23"),n=function(e){return Object(_["y"])("data-v-21681239"),e=e(),Object(_["w"])(),e},r={class:"content"},u={class:"main d-flex justify-content-between align-items-center flex-column"},o=n((function(){return Object(_["h"])("div",{class:"header d-flex justify-content-evenly align-items-center"},[Object(_["h"])("div",{class:"d-flex justify-content-center align-items-center",title:"get to know the value of other currencies..."},[Object(_["h"])("span",null,"codingheraldapps")]),Object(_["h"])("div",{class:"d-flex justify-content-center align-items-center"},[Object(_["h"])("i",{class:"fa-solid fa-sack-dollar",id:"laugh"})])],-1)})),a=n((function(){return Object(_["h"])("hr",null,null,-1)})),s={class:"main-body"},i={class:"from d-flex justify-content-between align-items-center flex-column"},l={class:"paragraphs d-flex justify-content-between"},b=["title"],O=n((function(){return Object(_["h"])("p",{title:"choose currency from..."},"choose currency from",-1)})),j={class:"d-flex justify-content-between align-items-center"},f=["value"],d={class:"text-capitalize container-fluid"},v=Object(_["j"])(" convert "),m=n((function(){return Object(_["h"])("i",{class:"fa fa-arrow-down"},null,-1)})),E=[v,m],p={class:"to d-flex justify-content-between flex-column align-items-center"},h={class:"paragraphs d-flex justify-content-between"},y=["title"],D=n((function(){return Object(_["h"])("p",{title:"choose currency to..."},"choose currency to...",-1)})),M={class:"d-flex justify-content-between"},P={class:"response"},A=["value"];function w(e,t,c,n,v,m){return Object(_["v"])(),Object(_["g"])("main",r,[Object(_["h"])("div",u,[o,a,Object(_["h"])("div",s,[Object(_["h"])("div",i,[Object(_["h"])("div",l,[Object(_["h"])("p",{title:n.val_from},"amount in "+Object(_["E"])(n.val_from),9,b),O]),Object(_["h"])("div",j,[Object(_["L"])(Object(_["h"])("input",{type:"number",name:"amount",id:"inputFrom",min:"0","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.val=e}),class:"input",placeholder:"0.00"},null,512),[[_["I"],n.val]]),Object(_["L"])(Object(_["h"])("select",{class:"choose","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.from=e}),name:"currencies",id:"btn"},[(Object(_["v"])(!0),Object(_["g"])(_["a"],null,Object(_["B"])(n.currencyNames,(function(e){return Object(_["v"])(),Object(_["g"])("option",{key:e.currencyName,value:e.id},Object(_["E"])(e.currencyName)+" ( "+Object(_["E"])(e.id)+") ",9,f)})),128))],512),[[_["H"],n.from]])])]),Object(_["h"])("div",d,[Object(_["h"])("button",{class:"text-capitalize mx-3",id:"click",onClick:t[2]||(t[2]=function(e){return n.convertCurrency()}),title:"convert to..."},E)]),Object(_["h"])("div",p,[Object(_["h"])("div",h,[Object(_["h"])("p",{title:n.val_in},"value in "+Object(_["E"])(n.val_in),9,y),D]),Object(_["h"])("div",M,[Object(_["h"])("div",P,Object(_["E"])(n.output),1),Object(_["L"])(Object(_["h"])("select",{class:"choose","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.to=e}),name:"currencies",id:"btn2"},[(Object(_["v"])(!0),Object(_["g"])(_["a"],null,Object(_["B"])(n.currencyNames,(function(e){return Object(_["v"])(),Object(_["g"])("option",{value:e.id,key:e.currencyName},Object(_["E"])(e.currencyName)+" ("+Object(_["E"])(e.id)+") ",9,A)})),128))],512),[[_["H"],n.to]])])])])])])}var C=c("fdfc"),g=(c("d369"),c("6b0d")),U=c.n(g);const B=U()(C["a"],[["render",w],["__scopeId","data-v-21681239"]]);t["default"]=B},b64b:function(e,t,c){var _=c("23e7"),n=c("7b0b"),r=c("df75"),u=c("d039"),o=u((function(){r(1)}));_({target:"Object",stat:!0,forced:o},{keys:function(e){return r(n(e))}})},d369:function(e,t,c){"use strict";c("e12e")},d81d:function(e,t,c){"use strict";var _=c("23e7"),n=c("b727").map,r=c("1dde"),u=r("map");_({target:"Array",proto:!0,forced:!u},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e12e:function(e,t,c){},fdfc:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("d81d"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("b64b"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__),vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("7a23");__webpack_exports__["a"]={name:"Exchange",setup:function setup(){var val=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])(1),output=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])(""),resp=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])([]),currencyTwo=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])(!1),val_from=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])(""),val_in=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])(""),from=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])("USD"),to=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])("xAF"),currencyName=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])(""),currencyNames=Object(vue__WEBPACK_IMPORTED_MODULE_3__["A"])([]);Object(vue__WEBPACK_IMPORTED_MODULE_3__["t"])((function(){fetch("https://free.currconv.com/api/v7/currencies?apiKey=473bcd51be8dcd3de8f7").then((function(e){return e.json()})).then((function(e){currencyName.value=e.results,currencyNames.value=e.results})),convertCurrency()}));var convertCurrency=function convertCurrency(){fetch("https://free.currconv.com/api/v7/convert?q="+from.value+"_"+to.value+"&compact=ultra&apiKey=473bcd51be8dcd3de8f7").then((function(e){return e.json()})).then((function(res){resp.value=Object.keys(res).map((function(e){return res[e]})),val_from.value=from.value,val_in.value=to.value,output.value=eval(resp.value[0]*val.value)})).catch((function(e){return e}))};return{val:val,output:output,resp:resp,currencyTwo:currencyTwo,val_from:val_from,val_in:val_in,from:from,to:to,currencyName:currencyName,currencyNames:currencyNames,convertCurrency:convertCurrency}}}}}]);
//# sourceMappingURL=Exchange.0384ddac.js.map