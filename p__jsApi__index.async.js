(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"4Fil":function(e,a,n){"use strict";n("oJtY");var t=n("q1tI"),r=n.n(t),m=n("Xp+x"),l=n("usdK");class i extends t["Component"]{constructor(){super(...arguments),this.handleClickItem=(e=>{e&&l["a"].push(e)})}render(){var e=this.props,a=e.title,n=e.desc,t=e.items,l=e.prefix;return r.a.createElement("div",{className:"catalogCard"},r.a.createElement("div",{className:`cardTitle ${Object(m["a"])()}`},a),n&&r.a.createElement("div",{className:"cardDesc"},n),r.a.createElement("ul",{className:"cardList"},t.map((e,a)=>r.a.createElement("li",{key:a},r.a.createElement("div",{className:`itemName ${e.link?"linkItem":""}`,onClick:()=>{this.handleClickItem(l+e.link)}},e.name),e.desc&&r.a.createElement("div",{className:"itemDesc"},e.desc)))))}}a["a"]=i},"4H4j":function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),m=n("4Fil");class l extends t["Component"]{render(){return r.a.createElement("div",{className:"catalog"},r.a.createElement("div",{className:"title"},"javascript\u5185\u7f6e\u5bf9\u8c61"),r.a.createElement("div",{className:"desc"},"\u8fd9\u91cc\u7684\u201d\u5168\u5c40\u5bf9\u8c61\u201c\uff08global objects\uff09\uff08\u6216\u8005\u6807\u51c6\u5185\u7f6e\u5bf9\u8c61\uff09\u6307\u7684\u662f\u5728\u5168\u5c40\u4f5c\u7528\u57df\uff08globalscope\uff09\u4e2d\u7684\u5bf9\u8c61 \uff08\u4ec5\u5f53\u672a\u4f7f\u7528 ECMAScript 5 \u4e25\u683c\u6a21\u5f0f\u65f6\uff01\u5426\u5219\u53ea\u4f1a\u5f97\u5230undefined\uff09\u3002\u5168\u5c40\u5bf9\u8c61\u672c\u8eab\u53ef\u901a\u8fc7 this \u64cd\u4f5c\u7b26\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u83b7\u5f97\u3002\u5b9e\u9645\u4e0a\uff0c\u5168\u5c40\u4f5c\u7528\u57df\u5c31\u662f\u7531\u5168\u5c40\u5bf9\u8c61\u7684\u5404\u4e2a\u5c5e\u6027\u7ec4\u6210\u7684\uff08\u5305\u62ec\u7ee7\u627f\u6765\u7684\u5c5e\u6027\uff09\u3002\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u7684\u5176\u4ed6\u5bf9\u8c61\uff0c\u8981\u4e48\u662f\u7528\u6237\u81ea\u5df1\u521b\u5efa\u7684\uff0c\u8981\u4e48\u662f\u5bbf\u4e3b\u5e94\u7528\u63d0\u4f9b\u7684\u3002"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"col"},r.a.createElement(m["a"],{title:"\u503c\u5c5e\u6027",desc:"\u8fd9\u4e9b\u5168\u5c40\u5c5e\u6027\u8fd4\u56de\u4e00\u4e2a\u7b80\u5355\u7684\u503c\uff1b\u4ed6\u4eec\u6ca1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5",prefix:"/jsApi/valueProperty/",items:[{name:"Infinity",link:"Infinity"},{name:"NaN",link:"NaN"},{name:"undefined",link:"undefined"},{name:"null",link:"null"}]}),r.a.createElement(m["a"],{title:"\u7ed3\u6784\u5316\u6570\u636e",desc:"\u8fd9\u79cd\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u7528\u6765\u8868\u793a\u7ed3\u6784\u5316\u6570\u636e\u7f13\u5b58\u6216\u8005JSON\u6570\u636e\uff0c\u5e76\u5141\u8bb8\u4e0e\u5176\u8fdb\u884c\u4ea4\u4e92",items:[{name:"ArrayBuffer"},{name:"SharedArrayBuffer[\u8349\u6848]"},{name:"Atomics[\u8349\u6848]"},{name:"DataView"},{name:"JSON"}]})),r.a.createElement("div",{className:"col"},r.a.createElement(m["a"],{title:"\u51fd\u6570\u5c5e\u6027",desc:"\u6267\u884c\u7279\u5b9a\u529f\u80fd\u5e76\u8fd4\u56de\u7ed3\u679c\u7684\u5168\u5c40\u65b9\u6cd5",prefix:"/jsApi/functionProperty/",items:[{name:"eval()",link:"eval"},{name:"uneval()[\u975e\u6807\u51c6]",link:"uneval"},{name:"isFinite()",link:"isFinite"},{name:"isNaN()",link:"isNaN"},{name:"parseFloat()",link:"parseFloat"},{name:"parseInt()",link:"parseInt"},{name:"encodeURI()",link:"encodeURI"},{name:"decodeURI()",link:"decodeURI"},{name:"encodeURIComponent()",link:"encodeURIComponent"},{name:"decodeURIComponent()",link:"decodeURIComponent"},{name:"escape()[\u5df2\u4e22\u5f03]",link:"escape"},{name:"unescape()[\u5df2\u4e22\u5f03]",link:"unescape"}]}),r.a.createElement(m["a"],{title:"\u63a7\u5236\u62bd\u8c61\u5bf9\u8c61",desc:"\u63a7\u5236\u62bd\u8c61\u5bf9\u8c61",items:[{name:"Promise"},{name:"Generator"},{name:"GeneratorFunction"},{name:"AsyncFunction[\u8349\u6848]"}]})),r.a.createElement("div",{className:"col"},r.a.createElement(m["a"],{title:"\u57fa\u672c\u5bf9\u8c61",desc:"\u57fa\u7840\u7684\u8bed\u8a00\u5bf9\u8c61\u3001\u65b9\u6cd5\u5bf9\u8c61\u548c\u9519\u8bef\u5bf9\u8c61",prefix:"/jsApi/fundamentalObjects/",items:[{name:"Object",link:"object"},{name:"Function",link:"Function"},{name:"Boolean",link:"Boolean/Boolean"},{name:"Symbol"},{name:"Error"},{name:"EvalError"},{name:"InternalError"},{name:"RangeError"},{name:"ReferenceError"},{name:"SyntaxError"},{name:"TypeError"},{name:"URIError"}]}),r.a.createElement(m["a"],{title:"\u53cd\u5c04",desc:"\u53cd\u5c04",items:[{name:"Reflect"},{name:"Proxy"}]})),r.a.createElement("div",{className:"col"},r.a.createElement(m["a"],{title:"\u6570\u5b57\u548c\u65e5\u671f",desc:"\u7528\u4e8e\u5904\u7406\u6570\u5b57\u3001\u65e5\u671f\u548c\u6570\u5b66\u8fd0\u7b97\u7684\u5bf9\u8c61",prefix:"/jsApi/numbersAndDates/",items:[{name:"Number",link:"Number"},{name:"Math",link:"Math"},{name:"Date",link:"Date"}]}),r.a.createElement(m["a"],{title:"\u952e\u63a7\u96c6\u5408",desc:"\u6839\u636e\u952e\u6765\u4fdd\u5b58\u5bf9\u8c61\u7684\u96c6\u5408\uff0c\u904d\u5386\u65f6\u4f1a\u6839\u636e\u653e\u5165\u7684\u987a\u5e8f",items:[{name:"Map"},{name:"Set"},{name:"WeakMap"},{name:"WeakSet"}]}),r.a.createElement(m["a"],{title:"\u5176\u4ed6",desc:"\u5176\u4ed6",items:[{name:"arguments"}]})),r.a.createElement("div",{className:"col"},r.a.createElement(m["a"],{title:"\u6587\u672c\u5904\u7406",desc:"\u7528\u4e8e\u5904\u7406\u6587\u672c\u7684\u5bf9\u8c61",items:[{name:"String",link:"String"},{name:"RegExp",link:"RegExp"}]}),r.a.createElement(m["a"],{title:"\u7d22\u5f15\u96c6\u5408",desc:"\u6839\u636e\u7d22\u5f15\u6765\u6392\u5217\u7684\u96c6\u5408\uff0c\u7c7b\u4f3c\u4e8e\u6570\u7ec4\u7684\u5bf9\u8c61",items:[{name:"Array",link:"Array"},{name:"Int8Array"},{name:"Uint8Array"},{name:"Uint8ClampedArray"},{name:"Int16Array"},{name:"Uint16Array"},{name:"Int32Array"},{name:"Uint32Array"},{name:"Float32Array"},{name:"Float64Array"}]}))))}}a["default"]=l},"Xp+x":function(e,a,n){"use strict";n.d(a,"a",function(){return m});var t=["orange","cyan","blue","red","green","purple"],r=0,m=()=>{return r++,r>=t.length&&(r=0),t[r]}},oJtY:function(e,a,n){}}]);