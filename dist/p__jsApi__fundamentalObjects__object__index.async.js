(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"4Fil":function(e,t,n){"use strict";n("oJtY");var a=n("q1tI"),c=n.n(a),r=n("Xp+x"),s=n("usdK");class o extends a["Component"]{constructor(){super(...arguments),this.handleClickItem=(e=>{e&&s["a"].push(e)})}render(){var e=this.props,t=e.title,n=e.desc,a=e.items,s=e.prefix;return c.a.createElement("div",{className:"catalogCard"},c.a.createElement("div",{className:`cardTitle ${Object(r["a"])()}`},t),n&&c.a.createElement("div",{className:"cardDesc"},n),c.a.createElement("ul",{className:"cardList"},a.map((e,t)=>c.a.createElement("li",{key:t},c.a.createElement("div",{className:`itemName ${e.link?"linkItem":""}`,onClick:()=>{this.handleClickItem(s+e.link)}},e.name),e.desc&&c.a.createElement("div",{className:"itemDesc"},e.desc)))))}}t["a"]=o},GpLz:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),c=n.n(a),r=n("4Fil"),s="/jsApi/fundamentalObjects/object/";class o extends a["Component"]{render(){return c.a.createElement("div",{className:"catalog"},c.a.createElement("div",{className:"title"},"Object"),c.a.createElement("div",{className:"desc"},"Object \u6784\u9020\u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u5305\u88c5\u5668"),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"col"},c.a.createElement(r["a"],{title:"\u5c5e\u6027",prefix:s,items:[{name:"Object.length",link:"length",desc:"\u503c\u4e3a1"},{name:"Object.prototype",link:"prototype",desc:"\u53ef\u4ee5\u4e3a\u6240\u6709 Object \u7c7b\u578b\u7684\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027"}]}),c.a.createElement(r["a"],{title:"\u65b9\u6cd5",prefix:s,items:[{name:"Object.assign()",link:"assign",desc:"\u901a\u8fc7\u590d\u5236\u4e00\u4e2a\u6216\u591a\u4e2a\u5bf9\u8c61\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61"},{name:"Object.create()",link:"create",desc:"\u6307\u5b9a\u539f\u578b\u5bf9\u8c61\u548c\u5c5e\u6027\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61"},{name:"Object.defineProperty()",link:"defineProperty",desc:"\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u4e00\u4e2a\u5c5e\u6027\u5e76\u6307\u5b9a\u8be5\u5c5e\u6027\u7684\u914d\u7f6e"},{name:"Object.defineProperties()",link:"defineProperties",desc:"\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u591a\u4e2a\u5c5e\u6027\u5e76\u5206\u522b\u6307\u5b9a\u5b83\u4eec\u7684\u914d\u7f6e"},{name:"Object.getOwnPropertyDescriptor()",link:"getOwnPropertyDescriptor",desc:"\u8fd4\u56de\u5bf9\u8c61\u6307\u5b9a\u7684\u5c5e\u6027\u914d\u7f6e"},{name:"Object.getOwnPropertyNames()",link:"getOwnPropertyNames",desc:"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5b83\u5305\u542b\u4e86\u6307\u5b9a\u5bf9\u8c61\u6240\u6709\u7684\u53ef\u679a\u4e3e\u6216\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u540d"},{name:"Object.getOwnPropertySymbols()",link:"getOwnPropertySymbols",desc:"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5b83\u5305\u542b\u4e86\u6307\u5b9a\u5bf9\u8c61\u81ea\u8eab\u6240\u6709\u7684\u7b26\u53f7\u5c5e\u6027"},{name:"Object.getPrototypeOf()",link:"getPrototypeOf",desc:"\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61"},{name:"Object.setPrototypeOf()",link:"setPrototypeOf",desc:"\u8bbe\u7f6e\u5bf9\u8c61\u7684\u539f\u578b"},{name:"Object.is()",link:"is",desc:"\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u4e25\u683c\u76f8\u7b49\u3002\uff08\u7c7b\u4f3c===\u8fd0\u7b97\u7b26\uff0c\u4f46+0\u4e0d\u7b49\u4e8e-0\uff0cNaN\u7b49\u4e8e\u81ea\u5df1\uff09"},{name:"Object.isExtensible()",link:"isExtensible",desc:"\u5224\u65ad\u5bf9\u8c61\u662f\u5426\u53ef\u6269\u5c55"}]})),c.a.createElement("div",{className:"col"},c.a.createElement(r["a"],{title:"\u65b9\u6cd5",prefix:s,items:[{name:"Object.freeze()",link:"freeze",desc:"\u51bb\u7ed3\u5bf9\u8c61\uff1a\u4f7f\u5bf9\u8c61\u4e0d\u53ef\u5220\u9664\u6216\u4fee\u6539\u5b83\u7684\u5c5e\u6027"},{name:"Object.isFrozen()",link:"isFrozen",desc:"\u5224\u65ad\u5bf9\u8c61\u662f\u5426\u5df2\u7ecf\u51bb\u7ed3"},{name:"Object.seal()",link:"seal",desc:"\u5bc6\u5c01\u5bf9\u8c61\u4ee5\u9632\u5220\u9664"},{name:"Object.isSealed()",link:"isSealed",desc:"\u5224\u65ad\u5bf9\u8c61\u662f\u5426\u5df2\u7ecf\u5bc6\u5c01"},{name:"Object.keys()",link:"keys",desc:"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u6307\u5b9a\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u6709\u53ef\u904d\u5386\u5c5e\u6027\u7684\u540d\u79f0"},{name:"Object.preventExtensions()",link:"preventExtensions",desc:"\u963b\u6b62\u5bf9\u8c61\u6269\u5c55"},{name:"Object.entries() [\u8349\u6848]",link:"entries",desc:"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u662f\u7ed9\u5b9a\u5bf9\u8c61\u81ea\u8eab\u7684 enumerable \u5c5e\u6027\u952e\u503c\u5bf9\uff08[key, value]\uff09"},{name:"Object.values() [\u8349\u6848]",link:"values",desc:"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u662f\u7ed9\u5b9a\u5bf9\u8c61\u81ea\u8eab\u7684 enumerable \u5c5e\u6027\u503c"}]}),c.a.createElement(r["a"],{title:"\u5b9e\u4f8b\u5c5e\u6027",prefix:s,items:[{name:"Object.prototype.constructor",link:"constructor",desc:"\u7279\u5b9a\u7684\u51fd\u6570\uff0c\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b"},{name:"Object.prototype.__proto__ [\u975e\u6807\u51c6]",desc:"\u6307\u5411\u5f53\u5bf9\u8c61\u88ab\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\uff0c\u7528\u4f5c\u539f\u578b\u7684\u5bf9\u8c61"},{name:"Object.prototype.__noSuchMethod__ [\u975e\u6807\u51c6]",desc:"\u5f53\u672a\u5b9a\u4e49\u7684\u5bf9\u8c61\u6210\u5458\u88ab\u8c03\u7528\u4f5c\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u5141\u8bb8\u5b9a\u4e49\u5e76\u6267\u884c\u7684\u51fd\u6570"},{name:"Object.prototype.__count__ [\u5df2\u5e9f\u5f03]",desc:"\u7528\u4e8e\u76f4\u63a5\u8fd4\u56de\u7528\u6237\u5b9a\u4e49\u7684\u5bf9\u8c61\u4e2d\u53ef\u6570\u7684\u5c5e\u6027\u7684\u6570\u91cf\u3002\u5df2\u88ab\u5e9f\u9664"},{name:"Object.prototype.__parent__ [\u5df2\u5e9f\u5f03]",desc:"\u7528\u4e8e\u6307\u5411\u5bf9\u8c61\u7684\u5185\u5bb9\u3002\u5df2\u88ab\u5e9f\u9664"}]})),c.a.createElement("div",{className:"col"},c.a.createElement(r["a"],{title:"\u5b9e\u4f8b\u65b9\u6cd5",prefix:s,items:[{name:"Object.prototype.hasOwnProperty()",link:"hasOwnProperty",desc:"\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u67d0\u4e2a\u5bf9\u8c61\u662f\u5426\u542b\u6709\u6307\u5b9a\u7684\u5c5e\u6027\uff0c\u800c\u4e14\u6b64\u5c5e\u6027\u975e\u539f\u578b\u94fe\u7ee7\u627f\u7684"},{name:"Object.prototype.isPrototypeOf()",link:"isPrototypeOf",desc:"\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6307\u5b9a\u7684\u5bf9\u8c61\u662f\u5426\u5728\u672c\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e2d"},{name:"Object.prototype.propertyIsEnumerable()",link:"propertyIsEnumerable",desc:"\u5224\u65ad\u6307\u5b9a\u5c5e\u6027\u662f\u5426\u53ef\u679a\u4e3e\uff0c\u5185\u90e8\u5c5e\u6027\u8bbe\u7f6e\u53c2\u89c1 ECMAScript DontEnum attribute"},{name:"Object.prototype.toLocaleString()",link:"toLocaleString",desc:"\u76f4\u63a5\u8c03\u7528 toString()\u65b9\u6cd5"},{name:"Object.prototype.toString()",link:"toString",desc:"\u8fd4\u56de\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u8868\u793a"},{name:"Object.prototype.valueOf()",link:"valueOf",desc:"\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u7684\u539f\u59cb\u503c"},{name:"Object.prototype.toSource() [\u975e\u6807\u51c6]",link:"toSource",desc:"\u8fd4\u56de\u5b57\u7b26\u4e32\u8868\u793a\u6b64\u5bf9\u8c61\u7684\u6e90\u4ee3\u7801\u5f62\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b64\u5b57\u7b26\u4e32\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u76f8\u540c\u7684\u5bf9\u8c61"},{name:"Object.prototype.unwatch() [\u975e\u6807\u51c6]",link:"unwatch",desc:"\u79fb\u9664\u5bf9\u8c61\u67d0\u4e2a\u5c5e\u6027\u7684\u76d1\u542c"},{name:"Object.prototype.watch() [\u975e\u6807\u51c6]",link:"watch",desc:"\u7ed9\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u589e\u52a0\u76d1\u542c"},{name:"Object.prototype.__defineGetter__() [\u5df2\u5e9f\u5f03]",desc:"\u5173\u8054\u4e00\u4e2a\u51fd\u6570\u5230\u4e00\u4e2a\u5c5e\u6027\u3002\u8bbf\u95ee\u8be5\u51fd\u6570\u65f6\uff0c\u6267\u884c\u8be5\u51fd\u6570\u5e76\u8fd4\u56de\u5176\u8fd4\u56de\u503c"},{name:"Object.prototype.__defineSetter__() [\u5df2\u5e9f\u5f03]",desc:"\u5173\u8054\u4e00\u4e2a\u51fd\u6570\u5230\u4e00\u4e2a\u5c5e\u6027\u3002\u8bbe\u7f6e\u8be5\u51fd\u6570\u65f6\uff0c\u6267\u884c\u8be5\u4fee\u6539\u5c5e\u6027\u7684\u51fd\u6570"},{name:"Object.prototype.__lookupGetter__() [\u5df2\u5e9f\u5f03]",desc:"\u8fd4\u56de\u4f7f\u7528 __defineGetter__ \u5b9a\u4e49\u7684\u65b9\u6cd5\u51fd\u6570"},{name:"Object.prototype.__lookupSetter__() [\u5df2\u5e9f\u5f03]",desc:"\u8fd4\u56de\u4f7f\u7528 __defineSetter__ \u5b9a\u4e49\u7684\u65b9\u6cd5\u51fd\u6570"},{name:"Object.prototype.eval() [\u5df2\u5e9f\u5f03]",desc:"\u5728\u6307\u5b9a\u5bf9\u8c61\u4e3a\u4e0a\u4e0b\u6587\u60c5\u51b5\u4e0b\u6267\u884cjavascript\u5b57\u7b26\u4e32\u4ee3\u7801\uff0c\u5df2\u7ecf\u5e9f\u5f03"}]}))))}}t["default"]=o},"Xp+x":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=["orange","cyan","blue","red","green","purple"],c=0,r=()=>{return c++,c>=a.length&&(c=0),a[c]}},oJtY:function(e,t,n){}}]);