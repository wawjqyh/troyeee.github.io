(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[80],{"HY/h":function(t,n){t.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" target="_blank">en</a></p>\n<h1 id="dateprototypetojson">Date.prototype.toJSON()</h1>\n<p>toJSON() \u65b9\u6cd5\u8fd4\u56de Date \u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">dateObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">JSON()</span></code></pre>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>Date \u5b9e\u4f8b\u5f15\u7528\u4e00\u4e2a\u5177\u4f53\u7684\u65f6\u95f4\u70b9\u3002 \u8c03\u7528 toJSON() \u8fd4\u56de\u4e00\u4e2a JSON \u683c\u5f0f\u5b57\u7b26\u4e32(\u4f7f\u7528 toISOString())\uff0c\u8868\u793a\u8be5\u65e5\u671f\u5bf9\u8c61\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\n\u8fd9\u4e2a\u65b9\u6cd5\u5e38\u7528\u4e8e JSON\u5e8f\u5217\u5316Date\u5bf9\u8c61\u3002</p>\n<h2 id="\u6837\u4f8b">\u6837\u4f8b</h2>\n<p>toJSON() \u6837\u4f8b</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> jsonDate = (<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>()).toJSON();\n<span class="hljs-keyword">var</span> backToDate = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(jsonDate);\n\n<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Serialized date object: "</span> + jsonDate);</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);