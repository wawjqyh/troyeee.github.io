(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[223],{"7nr6":function(n,s){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">en</a></p>\n<h1 id="mathrandom">Math.random()</h1>\n<p>Math.random() \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u6d6e\u70b9,  \u4f2a\u968f\u673a\u6570\u5728\u8303\u56f4[0\uff0c1)\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4ece0\uff08\u5305\u62ec0\uff09\u5f80\u4e0a\uff0c\u4f46\u662f\u4e0d\u5305\u62ec1\uff08\u6392\u96641\uff09\uff0c\u7136\u540e\u60a8\u53ef\u4ee5\u7f29\u653e\u5230\n\u6240\u9700\u7684\u8303\u56f4\u3002\u5b9e\u73b0\u5c06\u521d\u59cb\u79cd\u5b50\u9009\u62e9\u5230\u968f\u673a\u6570\u751f\u6210\u7b97\u6cd5;\u5b83\u4e0d\u80fd\u88ab\u7528\u6237\u9009\u62e9\u6216\u91cd\u7f6e\u3002\u4ed6\u4e0d\u80fd\u88ab\u7528\u6237\u9009\u62e9\u6216\u91cd\u7f6e\u3002</p>\n<p class="warning">\n[0\uff0c1) === [\u5373\u4ece0\uff08\u5305\u542b0\uff09\u5230...1\u4f46\u4e0d\u5305\u62ec1\uff08\u6392\u96641\uff09\u3002\n<br>\n[0\uff0c1) === \u5de6\u95ed\u53f3\u5f00\u533a\u95f4\n</p>\n\n<p class="warning">\nMath.random() \u4e0d\u80fd\u63d0\u4f9b\u50cf\u5bc6\u7801\u4e00\u6837\u5b89\u5168\u7684\u968f\u673a\u6570\u5b57\n<br>\n\u4e0d\u80fd\u4f7f\u7528\u5b83\u4eec\u6765\u5904\u7406\u6709\u5173\u5b89\u5168\u7684\u4e8b\u60c5\u3002\u4f7f\u7528Web Crypto API \u6765\u4ee3\u66ff, \u548c\u66f4\u7cbe\u786e\u7684window.crypto.getRandomValues() \u65b9\u6cd5.\n</p>\n\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Math</span>.</span></span>random<span class="hljs-literal">()</span></code></pre>\n<h3 id="\u8fd4\u56de\u53c2\u6570">\u8fd4\u56de\u53c2\u6570</h3>\n<p>\u4e00\u4e2a\u6d6e\u70b9\u578b\u4f2a\u968f\u673a\u6570\u5b57\u57280\uff08\u5305\u62ec0\uff09\u548c1\uff08\u4e0d\u5305\u62ec\uff09\u4e4b\u95f4</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<p>Note that as numbers in JavaScript are IEEE 754 floating point numbers with round-to-nearest-even behavior, the ranges\nclaimed for the functions below (excluding the one for Math.random() itself) aren&#39;t exact. If extremely large bounds are\nchosen (253 or higher), it&#39;s possible in extremely rare cases to calculate the usually-excluded upper bound.\n\uff08\u6ce8\uff1around-to-nearest-even\u91c7\u7528\u6700\u8fd1\u820d\u5165\u7684\u53bb\u5076\u6570\u820d\u5165\u7684\u65b9\u5f0f\uff0c\u5bf9.5\u7684\u820d\u5165\u4e0a\uff0c\u91c7\u7528\u53d6\u5076\u6570\u7684\u65b9\u5f0f\uff09</p>\n<h3 id="\u5f97\u5230\u4e00\u4e2a\u5927\u4e8e\u7b49\u4e8e0\uff0c\u5c0f\u4e8e1\u4e4b\u95f4\u7684\u968f\u673a\u6570">\u5f97\u5230\u4e00\u4e2a\u5927\u4e8e\u7b49\u4e8e0\uff0c\u5c0f\u4e8e1\u4e4b\u95f4\u7684\u968f\u673a\u6570</h3>\n<pre><code class="language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title">getRandom</span>() {\n  <span class="hljs-keyword">return</span> <span class="hljs-type">Math.random()</span>;\n}</code></pre>\n<h3 id="\u5f97\u5230\u4e00\u4e2a\u4e24\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6570">\u5f97\u5230\u4e00\u4e2a\u4e24\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6570</h3>\n<p>\u8fd9\u4e2a\u4f8b\u5b50\u8fd4\u56de\u4e86\u4e00\u4e2a\u5728\u6307\u5b9a\u503c\u4e4b\u95f4\u7684\u968f\u673a\u6570\u3002\u8fd9\u4e2a\u503c\u6bd4min\u5927\uff08\u53ef\u80fd\u4e0emin\u76f8\u7b49\uff09, \u4ee5\u53ca\u6bd4max\u5c0f(\u4f46\u662f\u4e0d\u7b49\u4e8emax).</p>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span></span> getRandomArbitrary(<span class="hljs-built_in">min</span>, <span class="hljs-built_in">max</span>) {\n  <span class="hljs-keyword">return</span> Math.random() * (<span class="hljs-built_in">max</span> - <span class="hljs-built_in">min</span>) + <span class="hljs-built_in">min</span>;\n}</code></pre>\n<h3 id="\u5f97\u5230\u4e00\u4e2a\u4e24\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570">\u5f97\u5230\u4e00\u4e2a\u4e24\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570</h3>\n<p>\u8fd9\u4e2a\u4f8b\u5b50\u8fd4\u56de\u4e86\u4e00\u4e2a\u5728\u6307\u5b9a\u503c\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570\u3002\u8fd9\u4e2a\u503c\u6bd4min\u5927\uff08\u5982\u679cmin\u4e0d\u662f\u6574\u6570\uff0c\u90a3\u4e48\u4e0b\u4e00\u4e2a\u6574\u6570\u5927\u4e8emin\uff09, \u4ee5\u53ca\u6bd4max\u5c0f(\u4f46\u662f\u4e0d\u7b49\u4e8emax).</p>\n<pre><code class="language-javascript">function getRandomInt(<span class="hljs-built_in">min</span>, <span class="hljs-built_in">max</span>) {\n  <span class="hljs-built_in">min</span> = Math.<span class="hljs-built_in">ceil</span>(<span class="hljs-built_in">min</span>);\n  <span class="hljs-built_in">max</span> = Math.<span class="hljs-built_in">floor</span>(<span class="hljs-built_in">max</span>);\n  <span class="hljs-keywords">return</span> Math.<span class="hljs-built_in">floor</span>(Math.<span class="hljs-built_in">random</span>() * (<span class="hljs-built_in">max</span> - <span class="hljs-built_in">min</span>)) + <span class="hljs-built_in">min</span>; <span class="hljs-comment">//The maximum is exclusive and the minimum is inclusive</span>\n}</code></pre>\n<p class="warning">\u4e5f\u8bb8\u5f88\u5bb9\u6613\u8ba9\u4eba\u60f3\u7528\u820d\u5165\u6765\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\uff0c\u4f46\u662f\u8fd9\u6837\u505a\u4f1a\u5bfc\u81f4\u4f60\u7684\u968f\u673a\u6570\u5904\u4e8e\u4e00\u4e2a\u4e0d\u5747\u5300\u7684\u5206\u5e03\uff0c\u8fd9\u53ef\u80fd\u4e0d\u7b26\u5408\u4f60\u7684\u9700\u6c42</p>\n\n<h3 id="\u5f97\u5230\u4e00\u4e2a\u4e24\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570\uff0c\u5305\u62ec\u4e24\u4e2a\u6570\u5728\u5185">\u5f97\u5230\u4e00\u4e2a\u4e24\u6570\u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570\uff0c\u5305\u62ec\u4e24\u4e2a\u6570\u5728\u5185</h3>\n<p>\u5f53getRandomInt() \u51fd\u6570\u5728\u6700\u5c0f\u503c\u4e4b\u4e0a\uff0c\u5b83\u5c06\u6392\u9664\u6700\u5927\u503c. \u5982\u679c\u4f60\u9700\u8981\u7ed3\u679c\u5305\u542b\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\uff0c\u600e\u4e48\u529e\u5462?  getRandomIntInclusive() \u51fd\u6570\u5c06\u80fd\u5b8c\u6210.</p>\n<pre><code class="language-javascript">function getRandomIntInclusive(<span class="hljs-built_in">min</span>, <span class="hljs-built_in">max</span>) {\n  <span class="hljs-built_in">min</span> = Math.<span class="hljs-built_in">ceil</span>(<span class="hljs-built_in">min</span>);\n  <span class="hljs-built_in">max</span> = Math.<span class="hljs-built_in">floor</span>(<span class="hljs-built_in">max</span>);\n  <span class="hljs-keywords">return</span> Math.<span class="hljs-built_in">floor</span>(Math.<span class="hljs-built_in">random</span>() * (<span class="hljs-built_in">max</span> - <span class="hljs-built_in">min</span> + <span class="hljs-number">1</span>)) + <span class="hljs-built_in">min</span>; <span class="hljs-comment">//The maximum is inclusive and the minimum is inclusive</span>\n}</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);