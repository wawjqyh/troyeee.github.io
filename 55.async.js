(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{UzKD:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed" target="_blank">en</a></p>\n<h1 id="objectissealed">Object.isSealed()</h1>\n<p>Object.isSealed() \u65b9\u6cd5\u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u88ab\u5bc6\u5c01(sealed)\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Sealed(<span class="hljs-params">obj</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>obj</code> \u5c06\u8981\u68c0\u6d4b\u7684\u5bf9\u8c61</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5982\u679c\u8fd9\u4e2a\u5bf9\u8c61\u662f\u5bc6\u5c01\u7684\uff0c\u5219\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\u3002\u5bc6\u5c01\u5bf9\u8c61\u662f\u6307\u90a3\u4e9b\u4e0d\u53ef \u6269\u5c55 \u7684\uff0c\u4e14\u6240\u6709\u81ea\u8eab\u5c5e\u6027\u90fd\u4e0d\u53ef\u914d\u7f6e\u7684\uff08non-configurable\uff09\n\u4e14\u5c5e\u6027\u4e0d\u53ef\u5220\u9664\u7684\u5bf9\u8c61\uff08\u5176\u53ef\u4ee5\u662f\u53ef\u5199\u7684\uff09\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u65b0\u5efa\u7684\u5bf9\u8c61\u9ed8\u8ba4\u4e0d\u662f\u5bc6\u5c01\u7684.</span>\nvar empty = {};\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Sealed(<span class="hljs-params">empty</span>)</span>; <span class="hljs-comment">// === false</span>\n\n<span class="hljs-comment">// \u5982\u679c\u4f60\u628a\u4e00\u4e2a\u7a7a\u5bf9\u8c61\u53d8\u7684\u4e0d\u53ef\u6269\u5c55,\u5219\u5b83\u540c\u65f6\u4e5f\u4f1a\u53d8\u6210\u4e2a\u5bc6\u5c01\u5bf9\u8c61.</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">empty</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Sealed(<span class="hljs-params">empty</span>)</span>; <span class="hljs-comment">// === true</span>\n\n<span class="hljs-comment">// \u4f46\u5982\u679c\u8fd9\u4e2a\u5bf9\u8c61\u4e0d\u662f\u7a7a\u5bf9\u8c61,\u5219\u5b83\u4e0d\u4f1a\u53d8\u6210\u5bc6\u5c01\u5bf9\u8c61,\u56e0\u4e3a\u5bc6\u5c01\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u8eab\u5c5e\u6027\u5fc5\u987b\u662f\u4e0d\u53ef\u914d\u7f6e\u7684.</span>\nvar hasProp = { fee: <span class="hljs-string">"fie foe fum"</span> };\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">hasProp</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Sealed(<span class="hljs-params">hasProp</span>)</span>; <span class="hljs-comment">// === false</span>\n\n<span class="hljs-comment">// \u5982\u679c\u628a\u8fd9\u4e2a\u5c5e\u6027\u53d8\u7684\u4e0d\u53ef\u914d\u7f6e,\u5219\u8fd9\u4e2a\u5bf9\u8c61\u4e5f\u5c31\u6210\u4e86\u5bc6\u5c01\u5bf9\u8c61.</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>define<span class="hljs-constructor">Property(<span class="hljs-params">hasProp</span>, <span class="hljs-string">"fee"</span>, { <span class="hljs-params">configurable</span>: <span class="hljs-params">false</span> })</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Sealed(<span class="hljs-params">hasProp</span>)</span>; <span class="hljs-comment">// === true</span>\n\n<span class="hljs-comment">// \u6700\u7b80\u5355\u7684\u65b9\u6cd5\u6765\u751f\u6210\u4e00\u4e2a\u5bc6\u5c01\u5bf9\u8c61,\u5f53\u7136\u662f\u4f7f\u7528Object.seal.</span>\nvar sealed = {};\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>seal(sealed);\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Sealed(<span class="hljs-params">sealed</span>)</span>; <span class="hljs-comment">// === true</span>\n\n<span class="hljs-comment">// \u4e00\u4e2a\u5bc6\u5c01\u5bf9\u8c61\u540c\u65f6\u4e5f\u662f\u4e0d\u53ef\u6269\u5c55\u7684.</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(<span class="hljs-params">sealed</span>)</span>; <span class="hljs-comment">// === false</span>\n\n<span class="hljs-comment">// \u4e00\u4e2a\u5bc6\u5c01\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u51bb\u7ed3\u5bf9\u8c61,\u4f46\u4e0d\u662f\u5fc5\u987b\u7684.</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">sealed</span>)</span>; <span class="hljs-comment">// === true \uff0c\u6240\u6709\u7684\u5c5e\u6027\u90fd\u662f\u4e0d\u53ef\u5199\u7684</span>\nvar s2 = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>seal({ p: <span class="hljs-number">3</span> });\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">s2</span>)</span>; <span class="hljs-comment">// === false\uff0c \u5c5e\u6027"p"\u53ef\u5199</span>\n\nvar s3 = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>seal({ get p<span class="hljs-literal">()</span> { return <span class="hljs-number">0</span>; } });\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Frozen(<span class="hljs-params">s3</span>)</span>; <span class="hljs-comment">// === true \uff0c\u8bbf\u95ee\u5668\u5c5e\u6027\u4e0d\u8003\u8651\u53ef\u5199\u4e0d\u53ef\u5199,\u53ea\u8003\u8651\u662f\u5426\u53ef\u914d\u7f6e</span></code></pre>\n<h2 id="\u6ce8\u610f">\u6ce8\u610f</h2>\n<p>\u5728 ES5 \u4e2d\uff0c\u5982\u679c\u53c2\u6570\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\uff08\u539f\u59cb\u7c7b\u578b\uff09\uff0c\u5c06\u629b\u51fa\u4e00\u4e2a TypeError  \u5f02\u5e38\u3002\u5728 ES6 \u4e2d\uff0c non-object \u53c2\u6570\u5c06\u88ab\u89c6\u4e3a\u4e00\u4e2a\u5bc6\u5c01\n\u7684\u666e\u901a\u5bf9\u8c61\uff0c\u56e0\u6b64\u4f1a\u8fd4\u56de true\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Sealed(1)</span>;\n<span class="hljs-comment">// TypeError: 1 is not an object (ES5 code)</span>\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Sealed(1)</span>;\n<span class="hljs-comment">// true                          (ES6 code)</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);