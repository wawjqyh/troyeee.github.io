(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98],{WupF:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" target="_blank">en</a></p>\n<h1 id="objectprototypetostring">Object.prototype.toString()</h1>\n<p>toString() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">object.<span class="hljs-keyword">to</span><span class="hljs-constructor">String()</span></code></pre>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u4e00\u4e2a\u8868\u793a\u8be5\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a toString() \u65b9\u6cd5\uff0c\u5f53\u5bf9\u8c61\u88ab\u8868\u793a\u4e3a\u6587\u672c\u503c\u65f6\u6216\u8005\u5f53\u4ee5\u671f\u671b\u5b57\u7b26\u4e32\u7684\u65b9\u5f0f\u5f15\u7528\u5bf9\u8c61\u65f6\uff0c\u8be5\u65b9\u6cd5\u88ab\u81ea\u52a8\u8c03\u7528\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\ntoString() \u65b9\u6cd5\u88ab\u6bcf\u4e2a\u7ee7\u627f\u81eaObject\u7684\u5bf9\u8c61\u7ee7\u627f\u3002\u5982\u679c\u6b64\u65b9\u6cd5\u5728\u81ea\u5b9a\u4e49\u5bf9\u8c61\u4e2d\u672a\u88ab\u8986\u76d6\uff0ctoString() \u8fd4\u56de &quot;[object type]&quot;,\u5176\u4e2dtype\n\u662f\u5bf9\u8c61\u7c7b\u578b\u3002\u4ee5\u4e0b\u4ee3\u7801\u8bf4\u660e\u4e86\u8fd9\u4e00\u70b9\uff1a</p>\n<pre><code class="language-javascript">var o = <span class="hljs-keyword">new</span> <span class="hljs-constructor">Object()</span>;\no.<span class="hljs-keyword">to</span><span class="hljs-constructor">String()</span>;           <span class="hljs-comment">// \u8fd4\u56de\u4e86[object Object]</span></code></pre>\n<p><code>Note: \u4eceJavaScript 1.8.5\u5f00\u59cb\uff0c\u7528null\u8c03\u7528toString()\u65b9\u6cd5\u4f1a\u8fd4\u56de[object Null]\uff0c\u7c7b\u4f3c\u7684\u7528undefined\u8c03\u7528\u4f1a\u8fd4\u56de[object Undefined],\n\u5982\u5728ECMAScript\u7684\u7b2c5\u7248\u4e2d\u5b9a\u4e49\u7684\u548c\u540e\u7eed\u7684\u52d8\u8bef\u8868\u3002\u67e5\u770b\u4f7f\u7528toString\u65b9\u6cd5\u68c0\u6d4b\u5bf9\u8c61\u7c7b\u578b\u4e00\u6587\u4e86\u89e3\u8be6\u60c5.</code></p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u8986\u76d6\u9ed8\u8ba4\u7684tostring\u65b9\u6cd5">\u8986\u76d6\u9ed8\u8ba4\u7684toString\u65b9\u6cd5</h3>\n<p>\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u6765\u53d6\u4ee3\u9ed8\u8ba4\u7684 toString() \u65b9\u6cd5\u3002\u8be5 toString() \u65b9\u6cd5\u4e0d\u80fd\u4f20\u5165\u53c2\u6570\u5e76\u4e14\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u81ea\u5b9a\u4e49\u7684 toString()\n\u65b9\u6cd5\u53ef\u4ee5\u662f\u4efb\u4f55\u6211\u4eec\u9700\u8981\u7684\u503c\uff0c\u4f46\u5982\u679c\u5b83\u9644\u5e26\u6709\u5173\u5bf9\u8c61\u7684\u4fe1\u606f\uff0c\u5b83\u5c06\u53d8\u7684\u975e\u5e38\u6709\u7528\u3002</p>\n<p>\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a Dog  \u5bf9\u8c61\u6570\u636e\u7c7b\u578b\uff0c\u5e76\u4e14\u521b\u5efa\u4e86\u8be5\u5bf9\u8c61\u7684\u4e00\u4e2a\u5b9e\u4f8b\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Dog</span>(<span class="hljs-params">name,breed,color,sex</span>) </span>{\n   <span class="hljs-keyword">this</span>.name=name;\n   <span class="hljs-keyword">this</span>.breed=breed;\n   <span class="hljs-keyword">this</span>.color=<span class="hljs-built_in">color</span>;\n   <span class="hljs-keyword">this</span>.sex=sex;\n}\n\n<span class="hljs-keyword">var</span> theDog = <span class="hljs-keyword">new</span> Dog(<span class="hljs-string">"Gabby"</span>,<span class="hljs-string">"Lab"</span>,<span class="hljs-string">"chocolate"</span>,<span class="hljs-string">"female"</span>);</code></pre>\n<p>\u5982\u679c\u5f53\u524d\u7684\u5bf9\u8c61\u8c03\u7528\u4e86 toString() \u65b9\u6cd5\uff0c\u5b83\u5c06\u4f1a\u8fd4\u56de\u4ece Object \u7ee7\u627f\u4e0b\u6765\u7684 toString() \u65b9\u6cd5\u7684\u8fd4\u56de\u9ed8\u8ba4\u503c\uff1a</p>\n<pre><code class="language-javascript">theDog.<span class="hljs-keyword">to</span><span class="hljs-constructor">String()</span>; <span class="hljs-comment">// \u8fd4\u56de [object Object]</span></code></pre>\n<p>\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53eb\u505a dogToString() \u7684\u65b9\u6cd5\u6765\u8986\u76d6\u9ed8\u8ba4\u7684 toString() \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u751f\u6210\u4e00\u4e2a &quot;property = value&quot; \u5f62\u5f0f\u7684\n\u5b57\u7b26\u4e32\uff0c\u8be5\u5b57\u7b26\u4e32\u5305\u542b\u4e86\u5f53\u524d\u5bf9\u8c61\u7684 name\uff0c breed\uff0ccolor \u548c sex\u7684\u503c\u3002</p>\n<pre><code class="language-javascript">Dog.prototype.toString = function dogToString() {\n  <span class="hljs-keyword">var</span> ret = <span class="hljs-string">"Dog "</span> + <span class="hljs-keyword">this</span>.name + <span class="hljs-string">" is a "</span> + <span class="hljs-keyword">this</span>.sex + <span class="hljs-string">" "</span> + <span class="hljs-keyword">this</span>.color + <span class="hljs-string">" "</span> + <span class="hljs-keyword">this</span>.breed;\n  <span class="hljs-keyword">return</span> ret;\n}</code></pre>\n<p>\u6709\u4e86\u4e0a\u9762\u7684\u8fd9\u6bb5\u4ee3\u7801\u4e4b\u540e\uff0c\u5728\u4e0a\u4e0b\u6587\u4e2d\u4efb\u4f55\u65f6\u5019\u4f7f\u7528 theDog \uff0cJavaScript \u90fd\u4f1a\u81ea\u52a8\u8c03\u7528 dogToString() \u65b9\u6cd5\uff0c\u5e76\u4e14\u8fd4\u56de\u4e0b\u9762\u7684\u5b57\u7b26\u4e32\u5185\u5bb9\uff1a</p>\n<pre><code class="language-javascript">Dog Gabby is <span class="hljs-selector-tag">a</span> female chocolate Lab</code></pre>\n<h3 id="\u4f7f\u7528tostring\u65b9\u6cd5\u6765\u68c0\u6d4b\u5bf9\u8c61\u7c7b\u578b">\u4f7f\u7528toString()\u65b9\u6cd5\u6765\u68c0\u6d4b\u5bf9\u8c61\u7c7b\u578b</h3>\n<p>\u53ef\u4ee5\u901a\u8fc7toString() \u6765\u83b7\u53d6\u6bcf\u4e2a\u5bf9\u8c61\u7684\u7c7b\u578b\u3002\u4e3a\u4e86\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u80fd\u901a\u8fc7 Object.prototype.toString() \u6765\u68c0\u6d4b\uff0c\u9700\u8981\u4ee5 Function.prototype.call()\n\u6216\u8005 Function.prototype.apply() \u7684\u5f62\u5f0f\u6765\u8c03\u7528\uff0c\u628a\u9700\u8981\u68c0\u6d4b\u7684\u5bf9\u8c61\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\u3002</p>\n<pre><code class="language-javascript">var <span class="hljs-built_in">toString</span> = Object.prototype.<span class="hljs-built_in">toString</span>;\n\n<span class="hljs-built_in">toString</span>.<span class="hljs-built_in">call</span>(new <span class="hljs-built_in">Date</span>); <span class="hljs-comment">// [object Date]</span>\n<span class="hljs-built_in">toString</span>.<span class="hljs-built_in">call</span>(new String); <span class="hljs-comment">// [object String]</span>\n<span class="hljs-built_in">toString</span>.<span class="hljs-built_in">call</span>(Math); <span class="hljs-comment">// [object Math]</span>\n\n<span class="hljs-comment">//Since JavaScript 1.8.5</span>\n<span class="hljs-built_in">toString</span>.<span class="hljs-built_in">call</span>(undefined); <span class="hljs-comment">// [object Undefined]</span>\n<span class="hljs-built_in">toString</span>.<span class="hljs-built_in">call</span>(null); <span class="hljs-comment">// [object Null]</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);