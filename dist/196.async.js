(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[196],{IwI2:function(p,n){p.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">en</a></p>\n<h1 id="math">Math</h1>\n<p>Math \u662f\u4e00\u4e2a\u5185\u7f6e\u5bf9\u8c61\uff0c \u5b83\u5177\u6709\u6570\u5b66\u5e38\u6570\u548c\u51fd\u6570\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\u5bf9\u8c61\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u4e0e\u5176\u5b83\u5168\u5c40\u5bf9\u8c61\u4e0d\u540c\u7684\u662f, Math \u4e0d\u662f\u4e00\u4e2a\u6784\u9020\u5668.  Math \u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u662f\u9759\u6001\u7684. \u4f60\u7528\u5230\u7684\u5e38\u6570pi\u53ef\u4ee5\u7528 Math.PI \u8868\u793a,\u7528 x \u4f5c\n\u53c2\u6570 Math.sin(x)\u8c03\u7528sin\u51fd\u6570. JavaScript\u4e2d\u7684\u5e38\u6570, \u662f\u4ee5\u5168\u7cbe\u5ea6\u7684\u5b9e\u6570\u5b9a\u4e49\u7684.</p>\n<h2 id="\u5c5e\u6027">\u5c5e\u6027</h2>\n<p><code>Math.E</code></p>\n<p>\u6b27\u62c9\u5e38\u6570\uff0c\u4e5f\u662f\u81ea\u7136\u5bf9\u6570\u7684\u5e95\u6570, \u7ea6\u7b49\u4e8e 2.718</p>\n<p><code>Math.LN2</code></p>\n<p>2\u7684\u81ea\u7136\u5bf9\u6570, \u7ea6\u7b49\u4e8e0.693</p>\n<p><code>Math.LN10</code></p>\n<p>10\u7684\u81ea\u7136\u5bf9\u6570, \u7ea6\u7b49\u4e8e 2.303</p>\n<p><code>Math.LOG2E</code></p>\n<p>\u4ee52\u4e3a\u5e95E\u7684\u5bf9\u6570, \u7ea6\u7b49\u4e8e 1.443</p>\n<p><code>Math.LOG10E</code></p>\n<p>\u4ee510\u4e3a\u5e95E\u7684\u5bf9\u6570, \u7ea6\u7b49\u4e8e 0.434</p>\n<p><code>Math.PI</code></p>\n<p>\u5706\u5468\u7387\uff0c\u4e00\u4e2a\u5706\u7684\u5468\u957f\u548c\u76f4\u5f84\u4e4b\u6bd4\uff0c\u7ea6\u7b49\u4e8e 3.14159</p>\n<p><code>Math.SQRT1_2</code></p>\n<p>1/2\u7684\u5e73\u65b9\u6839, \u7ea6\u7b49\u4e8e 0.707</p>\n<p><code>Math.SQRT2</code></p>\n<p>2\u7684\u5e73\u65b9\u6839,\u7ea6\u7b49\u4e8e 1.414</p>\n<h2 id="\u65b9\u6cd5">\u65b9\u6cd5</h2>\n<p class="warning">\u9700\u8981\u6ce8\u610f\u7684\u662f\u4e09\u89d2\u51fd\u6570\uff08sin(), cos(), tan(),asin(), acos(), atan(), atan2()\uff09\u662f\u4ee5\u5f27\u5ea6\u8fd4\u56de\u503c\u7684\u3002\u53ef\u4ee5\u901a\u8fc7\n\u9664\u6cd5\uff08Math.PI / 180\uff09\u628a\u5f27\u5ea6\u8f6c\u6362\u4e3a\u89d2\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u65b9\u6cd5\u6765\u8f6c\u6362\u3002</p>\n\n<p class="warning">\u9700\u8981\u6ce8\u610f\u7684\u662f\u5f88\u591a\u6570\u5b66\u51fd\u6570\u90fd\u6709\u4e00\u4e2a\u7cbe\u5ea6\uff0c\u5e76\u4e14\u7cbe\u5ea6\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u4e5f\u662f\u4e0d\u76f8\u540c\u7684\u3002\u8fd9\u5c31\u610f\u5473\u7740\u4e0d\u540c\u7684\u6d4f\u89c8\u5668\u4f1a\u7ed9\u51fa\n\u4e0d\u540c\u7684\u7ed3\u679c\uff0c\u751a\u81f3\u76f8\u540c\u7684 JS \u5f15\u64ce\u5728\u4e0d\u540c\u7684OS\u6216\u8005\u67b6\u6784\u4e0b\u4e5f\u4f1a\u7ed9\u51fa\u4e0d\u540c\u7684\u7ed3\u679c\u3002</p>\n\n<p><code>Math.abs(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u7edd\u5bf9\u503c</p>\n<p><code>Math.acos(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u53cd\u4f59\u5f26\u503c</p>\n<p><code>Math.acosh(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u53cd\u53cc\u66f2\u4f59\u5f26\u503c</p>\n<p><code>Math.asin(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u53cd\u6b63\u5f26\u503c</p>\n<p><code>Math.asinh(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u53cd\u53cc\u66f2\u6b63\u5f26\u503c</p>\n<p><code>Math.atan(x)</code></p>\n<p>\u4ee5\u4ecb\u4e8e -PI/2 \u4e0e PI/2 \u5f27\u5ea6\u4e4b\u95f4\u7684\u6570\u503c\u6765\u8fd4\u56de x \u7684\u53cd\u6b63\u5207\u503c</p>\n<p><code>Math.atanh(x)</code></p>\n<p>\u8fd4\u56de x \u7684\u53cd\u53cc\u66f2\u6b63\u5207\u503c</p>\n<p><code>Math.atan2(x, y)</code></p>\n<p>\u8fd4\u56de y/x \u7684\u53cd\u6b63\u5207\u503c</p>\n<p><code>Math.cbrt(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u7acb\u65b9\u6839</p>\n<p><code>Math.ceil(x)</code></p>\n<p>\u8fd4\u56dex\u5411\u4e0a\u53d6\u6574\u540e\u7684\u503c</p>\n<p><code>Math.clz32(x)</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u5728\u8f6c\u6362\u6210 32 \u65e0\u7b26\u53f7\u6574\u5f62\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\u540e, \u5f00\u5934\u7684 0 \u7684\u4e2a\u6570</p>\n<p><code>Math.cos(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u4f59\u5f26\u503c</p>\n<p><code>Math.cosh(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u53cc\u66f2\u4f59\u5f26\u503c</p>\n<p><code>Math.exp(x)</code></p>\n<p>\u8fd4\u56de Ex, \u5f53x\u4e3a\u53c2\u6570,  E \u662f\u6b27\u62c9\u5e38\u6570 (2.718...), \u81ea\u7136\u5bf9\u6570\u7684\u5e95</p>\n<p><code>Math.expm1(x)</code></p>\n<p>\u8fd4\u56de exp(x)-1 \u7684\u503c</p>\n<p><code>Math.floor(x)</code></p>\n<p>\u8fd4\u56de\u5c0f\u4e8ex\u7684\u6700\u5927\u6574\u6570</p>\n<p><code>Math.fround(x)</code></p>\n<p>\u5c06\u4efb\u610f\u7684\u6570\u5b57\u8f6c\u6362\u4e3a\u79bb\u5b83\u6700\u8fd1\u7684\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570\u5f62\u5f0f\u7684\u6570\u5b57</p>\n<p><code>Math.hypot([x[,y[,\u2026]]])</code></p>\n<p>\u8fd4\u56de\u5b83\u7684\u6240\u6709\u53c2\u6570\u7684\u5e73\u65b9\u548c\u7684\u5e73\u65b9\u6839</p>\n<p><code>Math.imul(x)</code></p>\n<p>\u8fd4\u56de\u4e24\u4e2a\u53c2\u6570\u7684\u7c7bC\u768432\u4f4d\u6574\u6570\u4e58\u6cd5\u8fd0\u7b97\u7684\u8fd0\u7b97\u7ed3\u679c</p>\n<p><code>Math.log(x)</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u6570\u7684\u81ea\u7136\u5bf9\u6570</p>\n<p><code>Math.log1p(x)</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u6570\u7684\u81ea\u7136\u5bf9\u6570</p>\n<p><code>Math.log10(x)</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u4ee5 10 \u4e3a\u5e95\u7684\u5bf9\u6570</p>\n<p><code>Math.log2(x)</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u4ee5 2 \u4e3a\u5e95\u7684\u5bf9\u6570</p>\n<p><code>Math.max([x[,y[,\u2026]]])</code></p>\n<p>\u8fd4\u56de0\u4e2a\u5230\u591a\u4e2a\u6570\u503c\u4e2d\u6700\u5927\u503c</p>\n<p><code>Math.min([x[,y[,\u2026]]])</code></p>\n<p>\u8fd4\u56de0\u4e2a\u5230\u591a\u4e2a\u6570\u503c\u4e2d\u6700\u5c0f\u503c</p>\n<p><code>Math.pow(x,y)</code></p>\n<p>\u8fd4\u56dex\u7684y\u6b21\u5e42</p>\n<p><code>Math.random()</code></p>\n<p>\u8fd4\u56de0\u52301\u4e4b\u95f4\u7684\u4f2a\u968f\u673a\u6570</p>\n<p><code>Math.round(x)</code></p>\n<p>\u8fd4\u56de\u56db\u820d\u4e94\u5165\u540e\u7684\u6574\u6570</p>\n<p><code>Math.sign(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u7b26\u53f7\u51fd\u6570, \u5224\u5b9ax\u662f\u6b63\u6570,\u8d1f\u6570\u8fd8\u662f0</p>\n<p><code>Math.sin(x)</code></p>\n<p>\u8fd4\u56de\u6b63\u5f26\u503c</p>\n<p><code>Math.sinh(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u53cc\u66f2\u6b63\u5f26\u503c</p>\n<p><code>Math.sqrt(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u5e73\u65b9\u6839</p>\n<p><code>Math.tan(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u6b63\u5207\u503c</p>\n<p><code>Math.tanh(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u53cc\u66f2\u6b63\u5207\u503c</p>\n<p><code>Math.toSource()</code></p>\n<p>\u8fd4\u56de\u5b57\u7b26\u4e32 &quot;Math&quot;</p>\n<p><code>Math.trunc(x)</code></p>\n<p>\u8fd4\u56dex\u7684\u6574\u6570\u90e8\u5206,\u53bb\u9664\u5c0f\u6570</p>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);