(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{GVrp:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols" target="_blank">en</a></p>\n<h1 id="objectgetownpropertysymbols">Object.getOwnPropertySymbols()</h1>\n<p>Object.getOwnPropertySymbols() \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u8be5\u6570\u7ec4\u5305\u542b\u4e86\u6307\u5b9a\u5bf9\u8c61\u81ea\u8eab\u7684\uff08\u975e\u7ee7\u627f\u7684\uff09\u6240\u6709 symbol \u5c5e\u6027\u952e\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>get<span class="hljs-constructor">OwnPropertySymbols(<span class="hljs-params">obj</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>obj</code> \u4efb\u610f\u4e00\u4e2a\u5bf9\u8c61</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u8be5\u65b9\u6cd5\u548c Object.getOwnPropertyNames() \u7c7b\u4f3c\uff0c\u4f46\u540e\u8005\u8fd4\u56de\u7684\u7ed3\u679c\u53ea\u4f1a\u5305\u542b\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u5c5e\u6027\u952e\uff0c\u4e5f\u5c31\u662f\u4f20\u7edf\u7684\u5c5e\u6027\u540d\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> obj = {};\n<span class="hljs-keyword">var</span> a = <span class="hljs-built_in">Symbol</span>(<span class="hljs-string">"a"</span>);\n<span class="hljs-keyword">var</span> b = <span class="hljs-built_in">Symbol</span>.for(<span class="hljs-string">"b"</span>);\n\nobj[a] = <span class="hljs-string">"localSymbol"</span>;\nobj[b] = <span class="hljs-string">"globalSymbol"</span>;\n\n<span class="hljs-keyword">var</span> objectSymbols = <span class="hljs-built_in">Object</span>.getOwnPropertySymbols(obj);\n\n<span class="hljs-built_in">console</span>.log(objectSymbols.length); <span class="hljs-comment">// 2</span>\n<span class="hljs-built_in">console</span>.log(objectSymbols)         <span class="hljs-comment">// [Symbol(a), Symbol(b)]</span>\n<span class="hljs-built_in">console</span>.log(objectSymbols[<span class="hljs-number">0</span>])      <span class="hljs-comment">// Symbol(a)</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);