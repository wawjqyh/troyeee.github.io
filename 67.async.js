(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{"N/rr":function(n,a){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf" target="_blank">en</a></p>\n<h1 id="objectprototypevalueof">Object.prototype.valueOf()</h1>\n<p>valueOf() \u65b9\u6cd5\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u7684\u539f\u59cb\u503c\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-selector-tag">object</span>.valueOf()</code></pre>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u8fd4\u56de\u503c\u4e3a\u8be5\u5bf9\u8c61\u7684\u539f\u59cb\u503c\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>JavaScript \u8c03\u7528 valueOf() \u65b9\u6cd5\u7528\u6765\u628a\u5bf9\u8c61\u8f6c\u6362\u6210\u539f\u59cb\u7c7b\u578b\u7684\u503c\uff08\u6570\u503c\u3001\u5b57\u7b26\u4e32\u548c\u5e03\u5c14\u503c\uff09\u3002 \u4f60\u5f88\u5c11\u9700\u8981\u81ea\u5df1\u8c03\u7528\u6b64\u51fd\u6570\uff1b\u5f53\u9047\u5230\u4e00\n\u79cd\u9700\u8981\u8f6c\u6362\u6210\u4e00\u4e2a\u539f\u59cb\u503c\u60c5\u51b5\u65f6\u5019\uff0c JavaScript \u4f1a\u81ea\u52a8\u8c03\u7528\u6b64\u51fd\u6570\u3002</p>\n<p>\u9ed8\u8ba4\u60c5\u51b5\u4e0b, valueOf() \u4f1a\u88ab\u6bcf\u4e2a\u5bf9\u8c61Object\u7ee7\u627f\u3002\u6bcf\u4e00\u4e2a\u5185\u7f6e\u5bf9\u8c61\u90fd\u4f1a\u8986\u76d6\u8fd9\u4e2a\u65b9\u6cd5\u4e3a\u4e86\u8fd4\u56de\u4e00\u4e2a\u5408\u7406\u7684\u503c\uff0c\u5982\u679c\u5bf9\u8c61\u6ca1\u6709\u539f\u59cb\u503c\uff0c\nvalueOf() \u5c31\u4f1a\u8fd4\u56de\u5bf9\u8c61\u81ea\u8eab\u3002</p>\n<p>\u4f60\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u4ee3\u7801\u4e2d\u4f7f\u7528 valueOf \u65b9\u6cd5\u7528\u6765\u628a\u5185\u7f6e\u5bf9\u8c61\u7684\u503c\u8f6c\u6362\u6210\u539f\u59cb\u503c\u3002 \u5f53\u4f60\u521b\u5efa\u4e86\u81ea\u5b9a\u4e49\u5bf9\u8c61\u65f6\uff0c\u4f60\u53ef\u4ee5\u8986\u76d6 Object.prototype.valueOf()\n\u5e76\u8c03\u7528\u6765\u53d6\u4ee3 Object \u65b9\u6cd5\u3002</p>\n<h3 id="\u8986\u76d6\u81ea\u5b9a\u4e49\u5bf9\u8c61\u7684-valueof-\u65b9\u6cd5">\u8986\u76d6\u81ea\u5b9a\u4e49\u5bf9\u8c61\u7684 valueOf \u65b9\u6cd5</h3>\n<p>\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u53d6\u4ee3 valueOf \u65b9\u6cd5\u7684\u51fd\u6570\uff0c\u4f60\u7684\u65b9\u6cd5\u5fc5\u987b\u4e0d\u80fd\u4f20\u5165\u53c2\u6570\u3002</p>\n<p>\u5047\u8bbe\u4f60\u6709\u4e2a\u5bf9\u8c61\u53eb myNumberType \u800c\u4f60\u60f3\u4e3a\u5b83\u521b\u5efa\u4e00\u4e2a valueOf \u65b9\u6cd5\u3002 \u4e0b\u9762\u7684\u4ee3\u7801\u4e3avalueOf\u65b9\u6cd5\u8d4b\u4e88\u4e86\u4e00\u4e2a\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\uff1a</p>\n<pre><code class="language-javascript">myNumberType.prototype.valueOf = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{ <span class="hljs-keyword">return</span> customPrimitiveValue; };</code></pre>\n<p>\u6709\u4e86\u8fd9\u6837\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u4e0b\u4e00\u6b21\u6bcf\u5f53 myNumberType \u8981\u88ab\u8f6c\u6362\u4e3a\u539f\u59cb\u7c7b\u578b\u503c\u65f6, JavaScript \u5728\u6b64\u4e4b\u524d\u4f1a\u81ea\u52a8\u8c03\u7528\u81ea\u5b9a\u4e49\u7684 valueOf \u65b9\u6cd5\u3002</p>\n<p>valueOf \u65b9\u6cd5\u4e00\u822c\u90fd\u4f1a\u88ab JavaScript \u81ea\u52a8\u8c03\u7528\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u50cf\u4e0b\u9762\u4ee3\u7801\u663e\u793a\u7684\u90a3\u6837\u81ea\u5df1\u53bb\u8c03\u7528:</p>\n<pre><code class="language-javascript"><span class="hljs-selector-tag">myNumber</span><span class="hljs-selector-class">.valueOf</span>()</code></pre>\n<p><code>\u6ce8\u610f: Objects \u662f\u5b57\u7b26\u4e32\u65f6\uff0c\u8f6c\u6362\u662f\u8c03\u7528 toString() \u65b9\u6cd5, \u8fd9\u4e2a\u548c String \u5bf9\u8c61\u8f6c\u6362\u4e3a\u539f\u59cb\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u6240\u7528\u7684 valueOf\u662f\u4e0d\u4e00\u6837\u7684.\n\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u81ea\u5df1\u7684\u5b57\u7b26\u4e32\u8f6c\u6362\u65b9\u6cd5, if only &quot;[object type]&quot;. \u4f46\u662f\u5f88\u591a\u5bf9\u8c61\u4e0d\u8f6c\u6362\u6210 number, boolean, \u6216 function.</code></p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u4f7f\u7528-valueof">\u4f7f\u7528 valueOf</h3>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">myNumberType</span><span class="hljs-params">(n)</span> </span>{\n    <span class="hljs-keyword">this</span>.number = n;\n}\n\nmyNumberType.prototype.valueOf = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.number;\n};\n\nmyObj = <span class="hljs-keyword">new</span> myNumberType(<span class="hljs-number">4</span>);\nmyObj + <span class="hljs-number">3</span>; <span class="hljs-comment">// 7</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);