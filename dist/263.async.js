(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[263],{yKnY:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" target="_blank">en</a></p>\n<h1 id="stringprototypecharat">String.prototype.charAt()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>charAt() \u65b9\u6cd5\u4ece\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u8fd4\u56de\u6307\u5b9a\u7684\u5b57\u7b26\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">str.<span class="hljs-built_in">char</span><span class="hljs-constructor">At(<span class="hljs-params">index</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>index</code> \u4e00\u4e2a\u4ecb\u4e8e0 \u548c\u5b57\u7b26\u4e32\u957f\u5ea6\u51cf1\u4e4b\u95f4\u7684\u6574\u6570\uff0c (0~length-1)\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u7d22\u5f15\uff0ccharAt() \u5c06\u4f7f\u75280</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u4ece\u5de6\u5411\u53f3\u7d22\u5f15\uff0c\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u7d22\u5f15\u503c\u4e3a 0\uff0c\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\uff08\u5047\u8bbe\u8be5\u5b57\u7b26\u4f4d\u4e8e\u5b57\u7b26\u4e32 stringName \u4e2d\uff09\u7684\u7d22\u5f15\u503c\u4e3a stringName.length - 1\u3002\n\u5982\u679c\u6307\u5b9a\u7684 index \u503c\u8d85\u51fa\u4e86\u8be5\u8303\u56f4\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u8f93\u51fa\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u4f4d\u7f6e\u7684\u5b57\u7b26">\u8f93\u51fa\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u4f4d\u7f6e\u7684\u5b57\u7b26</h3>\n<p>\u4e0b\u4f8b\u8f93\u51fa\u5b57\u7b26\u4e32 &quot;Brave new world&quot; \u4e0d\u540c\u4f4d\u7f6e\u5904\u7684\u5b57\u7b26\uff1a</p>\n<pre><code class="language-javascript">var <span class="hljs-literal">any</span>String = <span class="hljs-string">"Brave new world"</span>;\n\nconsole.<span class="hljs-keyword">log</span>(<span class="hljs-string">"The character at index 0   is \'"</span> + <span class="hljs-literal">any</span>String.charAt(<span class="hljs-number">0</span>)   + <span class="hljs-string">"\'"</span>);\nconsole.<span class="hljs-keyword">log</span>(<span class="hljs-string">"The character at index 1   is \'"</span> + <span class="hljs-literal">any</span>String.charAt(<span class="hljs-number">1</span>)   + <span class="hljs-string">"\'"</span>);\nconsole.<span class="hljs-keyword">log</span>(<span class="hljs-string">"The character at index 2   is \'"</span> + <span class="hljs-literal">any</span>String.charAt(<span class="hljs-number">2</span>)   + <span class="hljs-string">"\'"</span>);\nconsole.<span class="hljs-keyword">log</span>(<span class="hljs-string">"The character at index 3   is \'"</span> + <span class="hljs-literal">any</span>String.charAt(<span class="hljs-number">3</span>)   + <span class="hljs-string">"\'"</span>);\nconsole.<span class="hljs-keyword">log</span>(<span class="hljs-string">"The character at index 4   is \'"</span> + <span class="hljs-literal">any</span>String.charAt(<span class="hljs-number">4</span>)   + <span class="hljs-string">"\'"</span>);\nconsole.<span class="hljs-keyword">log</span>(<span class="hljs-string">"The character at index 999 is \'"</span> + <span class="hljs-literal">any</span>String.charAt(<span class="hljs-number">999</span>) + <span class="hljs-string">"\'"</span>);</code></pre>\n<p>\u4e0a\u9762\u4ee3\u7801\u7684\u8f93\u51fa\u4e3a\uff1a</p>\n<pre><code class="language-javascript">The <span class="hljs-type">character</span> at <span class="hljs-keyword">index</span> <span class="hljs-number">0</span> <span class="hljs-keyword">is</span> <span class="hljs-string">\'B\'</span>\nThe <span class="hljs-type">character</span> at <span class="hljs-keyword">index</span> <span class="hljs-number">1</span> <span class="hljs-keyword">is</span> <span class="hljs-string">\'r\'</span>\nThe <span class="hljs-type">character</span> at <span class="hljs-keyword">index</span> <span class="hljs-number">2</span> <span class="hljs-keyword">is</span> <span class="hljs-string">\'a\'</span>\nThe <span class="hljs-type">character</span> at <span class="hljs-keyword">index</span> <span class="hljs-number">3</span> <span class="hljs-keyword">is</span> <span class="hljs-string">\'v\'</span>\nThe <span class="hljs-type">character</span> at <span class="hljs-keyword">index</span> <span class="hljs-number">4</span> <span class="hljs-keyword">is</span> <span class="hljs-string">\'e\'</span>\nThe <span class="hljs-type">character</span> at <span class="hljs-keyword">index</span> <span class="hljs-number">999</span> <span class="hljs-keyword">is</span> <span class="hljs-string">\'\'</span></code></pre>\n<h3 id="\u83b7\u53d6\u6240\u6709\u5b57\u7b26">\u83b7\u53d6\u6240\u6709\u5b57\u7b26</h3>\n<p>\u4ee5\u4e0b\u63d0\u4f9b\u4e86\u4e00\u79cd\u786e\u4fdd\u901a\u8fc7\u5b57\u7b26\u4e32\u5faa\u73af\u603b\u662f\u63d0\u4f9b\u6574\u4e2a\u5b57\u7b26\u7684\u65b9\u6cd5\uff0c\u5373\u4f7f\u8be5\u5b57\u7b26\u4e32\u5305\u542b\u4e0d\u5728\u57fa\u672c\u591a\u6587\u79cd\u5e73\u9762\uff08BMP\uff09\u4e2d\u7684\u5b57\u7b26\u3002</p>\n<pre><code class="language-javascript">var <span class="hljs-keyword">str</span> = <span class="hljs-string">\'A \\uD87E\\uDC04 Z\'</span>; <span class="hljs-comment">// We could also use a non-BMP character directly</span>\n<span class="hljs-keyword">for</span> (var i=<span class="hljs-number">0</span>, chr; i &lt; <span class="hljs-keyword">str</span>.length; i++) {\n  <span class="hljs-keyword">if</span> ((chr = getWholeChar(<span class="hljs-keyword">str</span>, i)) === <span class="hljs-keyword">false</span>) {\n    <span class="hljs-keyword">continue</span>;\n  } <span class="hljs-comment">// Adapt this line at the top of each loop, passing in the whole string and</span>\n    <span class="hljs-comment">// the current iteration and returning a variable to represent the</span>\n    <span class="hljs-comment">// individual character</span>\n\n  alert(chr);\n}\n\nfunction getWholeChar (<span class="hljs-keyword">str</span>, i) {\n  var code = <span class="hljs-keyword">str</span>.charCodeAt(i);\n\n  <span class="hljs-keyword">if</span> (isNaN(code)) {\n    <span class="hljs-keyword">return</span> <span class="hljs-string">\'\'</span>; <span class="hljs-comment">// Position not found</span>\n  }\n  <span class="hljs-keyword">if</span> (code &lt; <span class="hljs-number">0xD800</span> || code &gt; <span class="hljs-number">0xDFFF</span>) {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">str</span>.charAt(i);\n  }\n\n  <span class="hljs-comment">// High surrogate (could change last hex to 0xDB7F to treat high private</span>\n  <span class="hljs-comment">// surrogates as single characters)</span>\n  <span class="hljs-keyword">if</span> (<span class="hljs-number">0xD800</span> &lt;= code &amp;&amp; code &lt;= <span class="hljs-number">0xDBFF</span>) {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">str</span>.length &lt;= (i+<span class="hljs-number">1</span>))  {\n      <span class="hljs-keyword">throw</span> <span class="hljs-string">\'High surrogate without following low surrogate\'</span>;\n    }\n    var next = <span class="hljs-keyword">str</span>.charCodeAt(i+<span class="hljs-number">1</span>);\n      <span class="hljs-keyword">if</span> (<span class="hljs-number">0xDC00</span> &gt; next || next &gt; <span class="hljs-number">0xDFFF</span>) {\n        <span class="hljs-keyword">throw</span> <span class="hljs-string">\'High surrogate without following low surrogate\'</span>;\n      }\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">str</span>.charAt(i)+<span class="hljs-keyword">str</span>.charAt(i+<span class="hljs-number">1</span>);\n  }\n  <span class="hljs-comment">// Low surrogate (0xDC00 &lt;= code &amp;&amp; code &lt;= 0xDFFF)</span>\n  <span class="hljs-keyword">if</span> (i === <span class="hljs-number">0</span>) {\n    <span class="hljs-keyword">throw</span> <span class="hljs-string">\'Low surrogate without preceding high surrogate\'</span>;\n  }\n  var prev = <span class="hljs-keyword">str</span>.charCodeAt(i<span class="hljs-number">-1</span>);\n\n  <span class="hljs-comment">// (could change last hex to 0xDB7F to treat high private</span>\n  <span class="hljs-comment">// surrogates as single characters)</span>\n  <span class="hljs-keyword">if</span> (<span class="hljs-number">0xD800</span> &gt; prev || prev &gt; <span class="hljs-number">0xDBFF</span>) {\n    <span class="hljs-keyword">throw</span> <span class="hljs-string">\'Low surrogate without preceding high surrogate\'</span>;\n  }\n  <span class="hljs-comment">// We can pass over low surrogates now as the second component</span>\n  <span class="hljs-comment">// in a pair which we have already processed</span>\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">false</span>;\n}</code></pre>\n<p>\u5728\u5141\u8bb8\u89e3\u6784\u5206\u914d\u7684\u72ec\u5360JavaScript 1.7+\u73af\u5883\uff08\u5982Firefox\uff09\u4e2d\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u66f4\u7b80\u6d01\u548c\u66f4\u7075\u6d3b\u7684\u66ff\u4ee3\u65b9\u6cd5\uff0c\u5b83\u4f1a\u81ea\u52a8\u9012\u589e\u4e00\u4e2a\u9012\u589e\u53d8\u91cf\uff08\u5982\u679c\u5b57\u7b26\u4fdd\u8bc1\u5b83\u662f\u4e00\u4e2a\u66ff\u4ee3\u5bf9\uff09\u3002</p>\n<pre><code class="language-javascript">var <span class="hljs-keyword">str</span> = <span class="hljs-string">\'A\\uD87E\\uDC04Z\'</span>; <span class="hljs-comment">// We could also use a non-BMP character directly</span>\n<span class="hljs-keyword">for</span> (var i=<span class="hljs-number">0</span>, chr; i &lt; <span class="hljs-keyword">str</span>.length; i++) {\n  [chr, i] = getWholeCharAndI(<span class="hljs-keyword">str</span>, i);\n  <span class="hljs-comment">// Adapt this line at the top of each loop, passing in the whole string and</span>\n  <span class="hljs-comment">// the current iteration and returning an array with the individual character</span>\n  <span class="hljs-comment">// and \'i\' value (only changed if a surrogate pair)</span>\n\n  alert(chr);\n}\n\nfunction getWholeCharAndI (<span class="hljs-keyword">str</span>, i) {\n  var code = <span class="hljs-keyword">str</span>.charCodeAt(i);\n\n  <span class="hljs-keyword">if</span> (isNaN(code)) {\n    <span class="hljs-keyword">return</span> <span class="hljs-string">\'\'</span>; <span class="hljs-comment">// Position not found</span>\n  }\n  <span class="hljs-keyword">if</span> (code &lt; <span class="hljs-number">0xD800</span> || code &gt; <span class="hljs-number">0xDFFF</span>) {\n    <span class="hljs-keyword">return</span> [<span class="hljs-keyword">str</span>.charAt(i), i]; <span class="hljs-comment">// Normal character, keeping \'i\' the same</span>\n  }\n\n  <span class="hljs-comment">// High surrogate (could change last hex to 0xDB7F to treat high private</span>\n  <span class="hljs-comment">// surrogates as single characters)</span>\n  <span class="hljs-keyword">if</span> (<span class="hljs-number">0xD800</span> &lt;= code &amp;&amp; code &lt;= <span class="hljs-number">0xDBFF</span>) {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">str</span>.length &lt;= (i+<span class="hljs-number">1</span>))  {\n      <span class="hljs-keyword">throw</span> <span class="hljs-string">\'High surrogate without following low surrogate\'</span>;\n    }\n    var next = <span class="hljs-keyword">str</span>.charCodeAt(i+<span class="hljs-number">1</span>);\n      <span class="hljs-keyword">if</span> (<span class="hljs-number">0xDC00</span> &gt; next || next &gt; <span class="hljs-number">0xDFFF</span>) {\n        <span class="hljs-keyword">throw</span> <span class="hljs-string">\'High surrogate without following low surrogate\'</span>;\n      }\n      <span class="hljs-keyword">return</span> [<span class="hljs-keyword">str</span>.charAt(i)+<span class="hljs-keyword">str</span>.charAt(i+<span class="hljs-number">1</span>), i+<span class="hljs-number">1</span>];\n  }\n  <span class="hljs-comment">// Low surrogate (0xDC00 &lt;= code &amp;&amp; code &lt;= 0xDFFF)</span>\n  <span class="hljs-keyword">if</span> (i === <span class="hljs-number">0</span>) {\n    <span class="hljs-keyword">throw</span> <span class="hljs-string">\'Low surrogate without preceding high surrogate\'</span>;\n  }\n  var prev = <span class="hljs-keyword">str</span>.charCodeAt(i<span class="hljs-number">-1</span>);\n\n  <span class="hljs-comment">// (could change last hex to 0xDB7F to treat high private surrogates</span>\n  <span class="hljs-comment">// as single characters)</span>\n  <span class="hljs-keyword">if</span> (<span class="hljs-number">0xD800</span> &gt; prev || prev &gt; <span class="hljs-number">0xDBFF</span>) {\n    <span class="hljs-keyword">throw</span> <span class="hljs-string">\'Low surrogate without preceding high surrogate\'</span>;\n  }\n  <span class="hljs-comment">// Return the next character instead (and increment)</span>\n  <span class="hljs-keyword">return</span> [<span class="hljs-keyword">str</span>.charAt(i+<span class="hljs-number">1</span>), i+<span class="hljs-number">1</span>];\n}</code></pre>\n<h3 id="\u4fee\u590dcharat\u4ee5\u652f\u6301\u975e\u57fa\u672c\u591a\u6587\u79cd\u5e73\u9762\uff08bmp\uff09\u5b57\u7b26">\u4fee\u590dcharAt\u4ee5\u652f\u6301\u975e\u57fa\u672c\u591a\u6587\u79cd\u5e73\u9762\uff08BMP\uff09\u5b57\u7b26</h3>\n<p>\u867d\u7136\u4e0a\u9762\u7684\u4f8b\u5b50\u5bf9\u4e8e\u90a3\u4e9b\u5e0c\u671b\u652f\u6301\u975eBMP\u5b57\u7b26\u7684\u7528\u6237\u53ef\u80fd\u66f4\u6709\u7528\uff08\u56e0\u4e3a\u5b83\u4e0d\u8981\u6c42\u8c03\u7528\u8005\u77e5\u9053\u4efb\u4f55\u975eBMP\u5b57\u7b26\u53ef\u80fd\u51fa\u73b0\u5728\u54ea\u91cc\uff09\uff0c\u5728\u4eba\u4eec\u5e0c\u671b\n\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u9009\u62e9\u5b57\u7b26 \u901a\u8fc7\u7d22\u5f15\uff0c\u5c06\u5b57\u7b26\u4e32\u4e2d\u7684\u66ff\u4ee3\u5bf9\u4f5c\u4e3a\u5b83\u4eec\u8868\u793a\u7684\u5355\u4e2a\u5b57\u7b26\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fixedCharAt</span> (<span class="hljs-params">str, idx</span>) </span>{\n  <span class="hljs-keyword">var</span> ret = <span class="hljs-string">\'\'</span>;\n  str += <span class="hljs-string">\'\'</span>;\n  <span class="hljs-keyword">var</span> end = str.length;\n\n  <span class="hljs-keyword">var</span> surrogatePairs = <span class="hljs-regexp">/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g</span>;\n  <span class="hljs-keyword">while</span> ((surrogatePairs.exec(str)) != <span class="hljs-literal">null</span>) {\n    <span class="hljs-keyword">var</span> li = surrogatePairs.lastIndex;\n    <span class="hljs-keyword">if</span> (li - <span class="hljs-number">2</span> &lt; idx) {\n      idx++;\n    } <span class="hljs-keyword">else</span> {\n      <span class="hljs-keyword">break</span>;\n    }\n  }\n\n  <span class="hljs-keyword">if</span> (idx &gt;= end || idx &lt; <span class="hljs-number">0</span>) {\n    <span class="hljs-keyword">return</span> <span class="hljs-string">\'\'</span>;\n  }\n\n  ret += str.charAt(idx);\n\n  <span class="hljs-keyword">if</span> (<span class="hljs-regexp">/[\\uD800-\\uDBFF]/</span>.test(ret) &amp;&amp; <span class="hljs-regexp">/[\\uDC00-\\uDFFF]/</span>.test(str.charAt(idx+<span class="hljs-number">1</span>))) {\n    <span class="hljs-comment">// Go one further, since one of the "characters" is part of a surrogate pair</span>\n    ret += str.charAt(idx+<span class="hljs-number">1</span>);\n  }\n  <span class="hljs-keyword">return</span> ret;\n}</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);