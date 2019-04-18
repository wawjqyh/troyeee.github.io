(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[269],{o3uy:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank">en</a></p>\n<h1 id="stringprototypeslice">String.prototype.slice()</h1>\n<p>slice() \u65b9\u6cd5\u63d0\u53d6\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u8fd4\u56de\u4e00\u65b0\u7684\u5b57\u7b26\u4e32\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-selector-tag">str</span><span class="hljs-selector-class">.slice</span>(<span class="hljs-selector-tag">beginSlice</span><span class="hljs-selector-attr">[, endSlice]</span>)</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>beginSlice</code> \u4ece\u8be5\u7d22\u5f15\uff08\u4ee5 0 \u4e3a\u57fa\u6570\uff09\u5904\u5f00\u59cb\u63d0\u53d6\u539f\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u3002\u5982\u679c\u503c\u4e3a\u8d1f\u6570\uff0c\u4f1a\u88ab\u5f53\u505a sourceLength + beginSlice \u770b\u5f85\uff0c\n\u8fd9\u91cc\u7684sourceLength \u662f\u5b57\u7b26\u4e32\u7684\u957f\u5ea6 (\u4f8b\u5982\uff0c \u5982\u679cbeginSlice \u662f -3 \u5219\u770b\u4f5c\u662f: sourceLength - 3)</li>\n<li><code>endSlice \u53ef\u9009</code> \u5728\u8be5\u7d22\u5f15\uff08\u4ee5 0 \u4e3a\u57fa\u6570\uff09\u5904\u7ed3\u675f\u63d0\u53d6\u5b57\u7b26\u4e32\u3002\u5982\u679c\u7701\u7565\u8be5\u53c2\u6570\uff0cslice\u4f1a\u4e00\u76f4\u63d0\u53d6\u5230\u5b57\u7b26\u4e32\u672b\u5c3e\u3002\u5982\u679c\u8be5\u53c2\u6570\u4e3a\u8d1f\u6570\uff0c\n\u5219\u88ab\u770b\u4f5c\u662f sourceLength + endSlice\uff0c\u8fd9\u91cc\u7684 sourceLength \u5c31\u662f\u5b57\u7b26\u4e32\u7684\u957f\u5ea6(\u4f8b\u5982\uff0c\u5982\u679c endSlice \u662f -3\uff0c\u5219\u662f, sourceLength - 3)\u3002</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>slice() \u4ece\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u63d0\u53d6\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u65b0\u5b57\u7b26\u4e32\u3002\u5728\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u7684\u6539\u53d8\u4e0d\u4f1a\u5f71\u54cd\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cslice \u4e0d\u4fee\u6539\u539f\u5b57\u7b26\u4e32\uff0c\n\u53ea\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4e86\u539f\u5b57\u7b26\u4e32\u4e2d\u90e8\u5206\u5b57\u7b26\u7684\u65b0\u5b57\u7b26\u4e32\u3002</p>\n<p class="warning">\u6ce8\u610f\uff1aslice() \u63d0\u53d6\u7684\u65b0\u5b57\u7b26\u4e32\u5305\u62ecbeginSlice\u4f46\u4e0d\u5305\u62ec endSlice\u3002</p>\n\n<p>\u4f8b1\uff1astr.slice(1, 4) \u63d0\u53d6\u65b0\u5b57\u7b26\u4e32\u4ece\u7b2c\u4e8c\u4e2a\u5b57\u7b26\u5230\u7b2c\u56db\u4e2a (\u5b57\u7b26\u7d22\u5f15\u503c\u4e3a 1, 2, \u548c 3)\u3002</p>\n<p>\u4f8b2\uff1astr.slice(2, -1) \u63d0\u53d6\u7b2c\u4e09\u4e2a\u5b57\u7b26\u5230\u5012\u6570\u7b2c\u4e8c\u4e2a\u5b57\u7b26\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<h3 id="\u4f7f\u7528-slice-\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32">\u4f7f\u7528 slice() \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32</h3>\n<p>\u4e0b\u9762\u4f8b\u5b50\u4f7f\u7528 slice() \u6765\u521b\u5efa\u65b0\u5b57\u7b26\u4e32:</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> str1 = <span class="hljs-string">\'The morning is upon us.\'</span>;\n<span class="hljs-keyword">var</span> str2 = str1.slice(<span class="hljs-number">4</span>, <span class="hljs-number">-2</span>);\n\n<span class="hljs-built_in">console</span>.log(str2); <span class="hljs-comment">// OUTPUT: morning is upon u</span></code></pre>\n<h3 id="\u7ed9-slice-\u4f20\u5165\u8d1f\u503c\u7d22\u5f15">\u7ed9 slice() \u4f20\u5165\u8d1f\u503c\u7d22\u5f15</h3>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u5728 slice() \u4f7f\u7528\u4e86\u8d1f\u503c\u7d22\u5f15:</p>\n<pre><code class="language-javascript">var str = <span class="hljs-string">\'The morning is upon us.\'</span>;\nstr.<span class="hljs-keyword">slice</span>(<span class="hljs-number">-3</span>);     // <span class="hljs-keyword">returns</span> <span class="hljs-string">\'us.\'</span>\nstr.<span class="hljs-keyword">slice</span>(<span class="hljs-number">-3</span>, <span class="hljs-number">-1</span>); // <span class="hljs-keyword">returns</span> <span class="hljs-string">\'us\'</span>\nstr.<span class="hljs-keyword">slice</span>(<span class="hljs-number">0</span>, <span class="hljs-number">-1</span>);  // <span class="hljs-keyword">returns</span> <span class="hljs-string">\'The morning is upon us\'</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 3rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);