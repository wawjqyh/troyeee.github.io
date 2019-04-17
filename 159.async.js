(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[159],{"7yZ6":function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite" target="_blank">en</a></p>\n<h1 id="numberisfinite">Number.isFinite()</h1>\n<p>Number.isFinite() \u65b9\u6cd5\u7528\u6765\u68c0\u6d4b\u4f20\u5165\u7684\u53c2\u6570\u662f\u5426\u662f\u4e00\u4e2a\u6709\u7a77\u6570\uff08finite number\uff09\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">Finite(<span class="hljs-params">value</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>value</code> \u8981\u88ab\u68c0\u6d4b\u6709\u7a77\u6027\u7684\u503c</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u4e00\u4e2a \u5e03\u5c14\u503c \u8868\u793a\u7ed9\u5b9a\u7684\u503c\u662f\u5426\u662f\u4e00\u4e2a\u6709\u7a77\u6570\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u548c\u5168\u5c40\u7684 isFinite() \u51fd\u6570\u76f8\u6bd4\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u4f1a\u5f3a\u5236\u5c06\u4e00\u4e2a\u975e\u6570\u503c\u7684\u53c2\u6570\u8f6c\u6362\u6210\u6570\u503c\uff0c\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u53ea\u6709\u6570\u503c\u7c7b\u578b\u7684\u503c\uff0c\u4e14\u662f\u6709\u7a77\u7684\uff08finite\uff09\uff0c\u624d\u8fd4\u56de true\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">Finite(Infinity)</span>;  <span class="hljs-comment">// false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">Finite(NaN)</span>;       <span class="hljs-comment">// false</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">Finite(-Infinity)</span>; <span class="hljs-comment">// false</span>\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">Finite(0)</span>;         <span class="hljs-comment">// true</span>\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">Finite(2e64)</span>;      <span class="hljs-comment">// true</span>\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Number</span>.</span></span>is<span class="hljs-constructor">Finite(\'0\')</span>;       <span class="hljs-comment">// false, \u5168\u5c40\u51fd\u6570 isFinite(\'0\') \u4f1a\u8fd4\u56de true</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n</tbody></table>\n'}}]);