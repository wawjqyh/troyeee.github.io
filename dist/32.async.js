(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"4r+/":function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" target="_blank">en</a></p>\n<h1 id="objectisextensible">Object.isExtensible()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>Object.isExtensible() \u65b9\u6cd5\u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u662f\u53ef\u6269\u5c55\u7684\uff08\u662f\u5426\u53ef\u4ee5\u5728\u5b83\u4e0a\u9762\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff09\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(<span class="hljs-params">obj</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>obj</code> \u9700\u8981\u68c0\u6d4b\u7684\u5bf9\u8c61</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8c61\u662f\u53ef\u6269\u5c55\u7684\uff1a\u5373\u53ef\u4ee5\u4e3a\u4ed6\u4eec\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u3002\u4ee5\u53ca\u5b83\u4eec\u7684 __proto__  \u5c5e\u6027\u53ef\u4ee5\u88ab\u66f4\u6539\u3002Object.preventExtensions\uff0c\nObject.seal \u6216 Object.freeze \u65b9\u6cd5\u90fd\u53ef\u4ee5\u6807\u8bb0\u4e00\u4e2a\u5bf9\u8c61\u4e3a\u4e0d\u53ef\u6269\u5c55\uff08non-extensible\uff09\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u65b0\u5bf9\u8c61\u9ed8\u8ba4\u662f\u53ef\u6269\u5c55\u7684.</span>\nvar empty = {};\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(<span class="hljs-params">empty</span>)</span>; <span class="hljs-comment">// === true</span>\n\n<span class="hljs-comment">// ...\u53ef\u4ee5\u53d8\u7684\u4e0d\u53ef\u6269\u5c55.</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prevent<span class="hljs-constructor">Extensions(<span class="hljs-params">empty</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(<span class="hljs-params">empty</span>)</span>; <span class="hljs-comment">// === false</span>\n\n<span class="hljs-comment">// \u5bc6\u5c01\u5bf9\u8c61\u662f\u4e0d\u53ef\u6269\u5c55\u7684.</span>\nvar sealed = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>seal({});\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(<span class="hljs-params">sealed</span>)</span>; <span class="hljs-comment">// === false</span>\n\n<span class="hljs-comment">// \u51bb\u7ed3\u5bf9\u8c61\u4e5f\u662f\u4e0d\u53ef\u6269\u5c55.</span>\nvar frozen = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>freeze({});\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(<span class="hljs-params">frozen</span>)</span>; <span class="hljs-comment">// === false</span></code></pre>\n<h2 id="\u6ce8\u610f">\u6ce8\u610f</h2>\n<p>\u5728 ES5 \u4e2d\uff0c\u5982\u679c\u53c2\u6570\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\uff0c\u5c06\u629b\u51fa\u4e00\u4e2a TypeError \u5f02\u5e38\u3002\u5728 ES6 \u4e2d\uff0c non-object \u53c2\u6570\u5c06\u88ab\u89c6\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u6269\u5c55\u7684\u666e\u901a\u5bf9\u8c61\uff0c\n\u56e0\u6b64\u4f1a\u8fd4\u56de false \u3002</p>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(1)</span>;\n<span class="hljs-comment">// TypeError: 1 is not an object (ES5 code)</span>\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>is<span class="hljs-constructor">Extensible(1)</span>;\n<span class="hljs-comment">// false                         (ES6 code)</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);