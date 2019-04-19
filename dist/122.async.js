(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[122],{fQs1:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" target="_blank">en</a></p>\n<h1 id="arrayisarray">Array.isArray()</h1>\n<p>\u8be5\u65b9\u6cd5\u9002\u7528\u4e8e\u786e\u5b9a\u4f20\u9012\u7684\u503c\u662f\u5426\u4e3aArray\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array([1, 2, 3])</span>;  <span class="hljs-comment">// true</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array({<span class="hljs-params">foo</span>: 123})</span>; <span class="hljs-comment">// false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(<span class="hljs-string">"foobar"</span>)</span>;   <span class="hljs-comment">// false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(<span class="hljs-params">undefined</span>)</span>;  <span class="hljs-comment">// false</span></code></pre>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(<span class="hljs-params">obj</span>)</span></code></pre>\n<h2 id="\u53c2\u6570">\u53c2\u6570</h2>\n<ul>\n<li><code>obj</code> \u9700\u8981\u68c0\u6d4b\u7684\u503c\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u5982\u679c\u5bf9\u8c61\u662f Array\uff0c\u5219\u4e3atrue; \u5426\u5219\u4e3afalse\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u4e0b\u9762\u7684\u51fd\u6570\u8c03\u7528\u90fd\u8fd4\u56de true</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array([])</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array([1])</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(<span class="hljs-params">new</span> Array()</span>);\n<span class="hljs-comment">// \u9c9c\u4e3a\u4eba\u77e5\u7684\u4e8b\u5b9e\uff1a\u5176\u5b9e Array.prototype \u4e5f\u662f\u4e00\u4e2a\u6570\u7ec4\u3002</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(Array.<span class="hljs-params">prototype</span>)</span>;\n\n<span class="hljs-comment">// \u4e0b\u9762\u7684\u51fd\u6570\u8c03\u7528\u90fd\u8fd4\u56de false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array()</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array({})</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(<span class="hljs-params">null</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(<span class="hljs-params">undefined</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(17)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(\'Array\')</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(<span class="hljs-params">true</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array(<span class="hljs-params">false</span>)</span>;\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>is<span class="hljs-constructor">Array({ <span class="hljs-params">__proto__</span>: Array.<span class="hljs-params">prototype</span> })</span>;</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript Latest Draft (ECMA-262)</td>\n<td align="left">Draft</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);