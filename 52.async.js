(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{"5YmV":function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf" target="_blank">en</a></p>\n<h1 id="objectgetprototypeof">Object.getPrototypeOf()</h1>\n<p>Object.getPrototypeOf() \u65b9\u6cd5\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u7684\u539f\u578b\uff08\u5373, \u5185\u90e8[[Prototype]]\u5c5e\u6027\u7684\u503c\uff09\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>get<span class="hljs-constructor">PrototypeOf(<span class="hljs-params">object</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>object</code> \u8981\u8fd4\u56de\u5176\u539f\u578b\u7684\u5bf9\u8c61\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u7ed9\u5b9a\u5bf9\u8c61\u7684\u539f\u578b\u3002\u5982\u679c\u6ca1\u6709\u7ee7\u627f\u5c5e\u6027\uff0c\u5219\u8fd4\u56de null \u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">let</span> proto = {};\n<span class="hljs-keyword">let</span> obj = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>create(proto);\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>get<span class="hljs-constructor">PrototypeOf(<span class="hljs-params">obj</span>)</span><span class="hljs-operator"> === </span>proto;\n <span class="hljs-comment">// true</span></code></pre>\n<h2 id="\u6ce8\u91ca">\u6ce8\u91ca</h2>\n<p><code>\u5728 ES5 \u4e2d\uff0c\u5982\u679c\u53c2\u6570\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\uff0c\u5c06\u629b\u51fa\u4e00\u4e2a  TypeError \u5f02\u5e38\u3002\u5728 ES6 /ES2015\u4e2d\uff0c\u53c2\u6570\u88ab\u5f3a\u5236\u8f6c\u6362\u4e3a\u4e00\u4e2a Object\u3002</code></p>\n<pre><code class="language-javascript">&gt; <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>get<span class="hljs-constructor">PrototypeOf(<span class="hljs-string">"foo"</span>)</span>;\nTypeError: <span class="hljs-string">"foo"</span> is not an object\n<span class="hljs-comment">// ES5 code</span>\n\n&gt; <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>get<span class="hljs-constructor">PrototypeOf(<span class="hljs-string">"foo"</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">String</span>.</span></span>prototype\n<span class="hljs-comment">// ES6 code</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);