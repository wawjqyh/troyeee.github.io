(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[239],{IgaP:function(n,t){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY" target="_blank">en</a></p>\n<h1 id="numberpositive_infinity">Number.POSITIVE_INFINITY</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>Number.POSITIVE_INFINITY \u5c5e\u6027\u8868\u793a\u6b63\u65e0\u7a77\u5927\u3002</p>\n<p>\u4e0d\u5fc5\u521b\u5efa\u4e00\u4e2a Number \u5b9e\u4f8b\uff0c\u53ef\u4f7f\u7528 Number.POSITIVE_INFINITY \u6765\u8bbf\u95ee\u8be5\u9759\u6001\u5c5e\u6027\u3002</p>\n<p>Number.POSITIVE_INFINITY \u5c5e\u6027\u7684\u5c5e\u6027\u7279\u6027\uff1a</p>\n<table>\n<thead>\n<tr>\n<th align="left"></th>\n<th align="left"></th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">writable</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">enumerable</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">configurable</td>\n<td align="left">false</td>\n</tr>\n</tbody></table>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>Number.POSITIVE_INFINITY \u7684\u503c\u540c\u5168\u5c40\u5bf9\u8c61 Infinity \u5c5e\u6027\u7684\u503c\u76f8\u540c\u3002</p>\n<p>\u8be5\u503c\u7684\u8868\u73b0\u540c\u6570\u5b66\u4e0a\u7684\u65e0\u7a77\u5927\u6709\u70b9\u513f\u4e0d\u540c\uff1a</p>\n<ul>\n<li>\u4efb\u4f55\u6b63\u503c\uff0c\u5305\u62ec POSITIVE_INFINITY\uff0c\u4e58\u4ee5 POSITIVE_INFINITY \u4e3a POSITIVE_INFINITY\u3002</li>\n<li>\u4efb\u4f55\u8d1f\u503c\uff0c\u5305\u62ec NEGATIVE_INFINITY\uff0c\u4e58\u4ee5 POSITIVE_INFINITY \u4e3a NEGATIVE_INFINITY\u3002</li>\n<li>0 \u4e58\u4ee5 POSITIVE_INFINITY \u4e3a NaN\u3002</li>\n<li>NaN \u4e58\u4ee5 POSITIVE_INFINITY \u4e3a NaN\u3002</li>\n<li>POSITIVE_INFINITY \u9664\u4ee5 NEGATIVE_INFINITY \u4ee5\u5916\u7684\u4efb\u4f55\u8d1f\u503c\u4e3a NEGATIVE_INFINITY\u3002</li>\n<li>POSITIVE_INFINITY \u9664\u4ee5 POSITIVE_INFINITY \u4ee5\u5916\u7684\u4efb\u4f55\u6b63\u503c\u4e3a POSITIVE_INFINITY\u3002</li>\n<li>POSITIVE_INFINITY \u9664\u4ee5 NEGATIVE_INFINITY \u6216 POSITIVE_INFINITY \u4e3a NaN\u3002</li>\n<li>\u4efb\u4f55\u6570\u9664\u4ee5 POSITIVE_INFINITY \u4e3a 0\u3002</li>\n</ul>\n<p>You might use the Number.POSITIVE_INFINITY property to indicate an error condition that returns a finite number in case\nof success. Note, however, that isFinite would be more appropriate in such a case.</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<p>\u4e0b\u4f8b\u4e2d\uff0c\u8d4b\u503c\u7ed9\u53d8\u91cf bigNumber \u4e00\u4e2a\u5927\u4e8e JavaScript \u4e2d\u6700\u5927\u503c\u7684\u503c\u3002\u5f53 if \u8bed\u53e5\u6267\u884c\u65f6\uff0c\u53d8\u91cf bigNumber \u503c\u4e3a &quot;Infinity&quot;\uff0c \u56e0\u6b64\u5728\u7ee7\u7eed\u6267\u884c\u4ee3\u7801\u524d\uff0c\u4e3a\u53d8\u91cf bigNumber \u8bbe\u7f6e\u4e00\u4e2a\u5bb9\u6613\u7ba1\u7406\u7684\u503c\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> bigNumber = <span class="hljs-built_in">Number</span>.MAX_VALUE * <span class="hljs-number">2</span>\n<span class="hljs-keyword">if</span> (bigNumber == <span class="hljs-built_in">Number</span>.POSITIVE_INFINITY) {\n    bigNumber = returnFinite();\n}</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);