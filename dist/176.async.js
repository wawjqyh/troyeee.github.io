(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[176],{TdMh:function(t,n){t.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth" target="_blank">en</a></p>\n<h1 id="dateprototypesetmonth">Date.prototype.setMonth()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>setMonth() \u65b9\u6cd5\u6839\u636e\u672c\u5730\u65f6\u95f4\u4e3a\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u8bbe\u7f6e\u6708\u4efd\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">dateObj.set<span class="hljs-constructor">Month(<span class="hljs-params">monthValue</span>[, <span class="hljs-params">dayValue</span>])</span>\n\n<span class="hljs-comment">//JavaScript 1.3\u7248\u672c\u4e4b\u524d</span>\ndateObj.set<span class="hljs-constructor">Month(<span class="hljs-params">monthValue</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>monthValue</code> \u4ecb\u4e8e 0 \u5230 11 \u4e4b\u95f4\u7684\u6574\u6570\uff08\u8868\u793a\u4e00\u6708\u5230\u5341\u4e8c\u6708\uff09\u3002</li>\n<li><code>dayValue</code> \u4ece 1 \u5230 31 \u4e4b\u95f4\u7684\u6574\u6570\uff0c\u8868\u793a\u6708\u4efd\u4e2d\u7684\u7b2c\u51e0\u5929\u3002</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5982\u679c\u4e0d\u6307\u5b9a dayValue \u53c2\u6570\uff0c\u5c31\u4f1a\u4f7f\u7528 getDate \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002</p>\n<p>\u5982\u679c\u6709\u4e00\u4e2a\u6307\u5b9a\u7684\u53c2\u6570\u8d85\u51fa\u4e86\u5408\u7406\u8303\u56f4\uff0csetMonth \u4f1a\u76f8\u5e94\u5730\u66f4\u65b0\u65e5\u671f\u5bf9\u8c61\u4e2d\u7684\u65e5\u671f\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u4e3a monthValue \u6307\u5b9a 15\uff0c\u5219\u5e74\u4efd\u4f1a\u52a0 1\uff0c\u6708\u4efd\u5c06\u4f1a\u4f7f\u7528 3\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<p>\u4f8b\u5b50\uff1a\u4f7f\u7528setMonth\u65b9\u6cd5</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> theBigDay = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\ntheBigDay.setMonth(<span class="hljs-number">6</span>);</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);