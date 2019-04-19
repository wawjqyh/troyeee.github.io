(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[258],{tNld:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt" target="_blank">en</a></p>\n<h1 id="stringprototypecharcodeat">String.prototype.charCodeAt()</h1>\n<p>charCodeAt() \u65b9\u6cd5\u8fd4\u56de0\u523065535\u4e4b\u95f4\u7684\u6574\u6570\uff0c\u8868\u793a\u7ed9\u5b9a\u7d22\u5f15\u5904\u7684UTF-16\u4ee3\u7801\u5355\u5143 (\u5728 Unicode \u7f16\u7801\u5355\u5143\u8868\u793a\u4e00\u4e2a\u5355\u4e00\u7684 UTF-16 \u7f16\u7801\u5355\n\u5143\u7684\u60c5\u51b5\u4e0b\uff0cUTF-16 \u7f16\u7801\u5355\u5143\u5339\u914d Unicode \u7f16\u7801\u5355\u5143\u3002\u4f46\u5728\u2014\u2014\u4f8b\u5982 Unicode \u7f16\u7801\u5355\u5143 &gt; 0x10000 \u7684\u8fd9\u79cd\u2014\u2014\u4e0d\u80fd\u88ab\u4e00\u4e2a UTF-16 \u7f16\n\u7801\u5355\u5143\u5355\u72ec\u8868\u793a\u7684\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u5339\u914d Unicode \u4ee3\u7406\u5bf9\u7684\u7b2c\u4e00\u4e2a\u7f16\u7801\u5355\u5143) \u3002\u5982\u679c\u4f60\u60f3\u8981\u6574\u4e2a\u4ee3\u7801\u70b9\u7684\u503c\uff0c\u4f7f\u7528 codePointAt()\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">str.<span class="hljs-built_in">char</span><span class="hljs-constructor">CodeAt(<span class="hljs-params">index</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>index</code> \u4e00\u4e2a\u5927\u4e8e\u7b49\u4e8e 0\uff0c\u5c0f\u4e8e\u5b57\u7b26\u4e32\u957f\u5ea6\u7684\u6574\u6570\u3002\u5982\u679c\u4e0d\u662f\u4e00\u4e2a\u6570\u503c\uff0c\u5219\u9ed8\u8ba4\u4e3a 0</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u8fd4\u56de\u503c\u662f\u4e00\u8868\u793a\u7ed9\u5b9a\u7d22\u5f15\u5904\u5b57\u7b26\u7684 UTF-16 \u4ee3\u7801\u5355\u5143\u503c\u7684\u6570\u5b57\uff1b\u5982\u679c\u7d22\u5f15\u8d85\u51fa\u8303\u56f4\uff0c\u5219\u8fd4\u56de NaN\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>Unicode \u7f16\u7801\u5355\u5143\uff08code points\uff09\u7684\u8303\u56f4\u4ece 0 \u5230 1,114,111\uff080x10FFFF\uff09\u3002\u5f00\u5934\u7684 128 \u4e2a Unicode \u7f16\u7801\u5355\u5143\u548c ASCII \u5b57\u7b26\u7f16\u7801\u4e00\u6837\u3002\n\u5173\u4e8e Unicode \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u67e5\u770b JavaScript Guide\u3002</p>\n<p>\u6ce8\u610f\uff0ccharCodeAt \u603b\u662f\u8fd4\u56de\u4e00\u4e2a\u5c0f\u4e8e 65,536 \u7684\u503c\u3002\u8fd9\u662f\u56e0\u4e3a\u9ad8\u4f4d\u7f16\u7801\u5355\u5143\uff08higher code point\uff09\u4f7f\u7528\u4e00\u5bf9\uff08\u4f4e\u4f4d\u7f16\u7801\uff08lower valued\uff09\uff09\n\u4ee3\u7406\u4f2a\u5b57\u7b26\uff08&quot;surrogate&quot; pseudo-characters\uff09\u6765\u8868\u793a\uff0c\u4ece\u800c\u6784\u6210\u4e00\u4e2a\u771f\u6b63\u7684\u5b57\u7b26\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u67e5\u770b\u6216\u590d\u5236\uff08reproduce\uff0965536 \u53ca\u4ee5\u4e0a\n\u7f16\u7801\u5b57\u7b26\u7684\u5b8c\u6574\u5b57\u7b26\uff0c\u9700\u8981\u5728\u83b7\u53d6 charCodeAt(i) \u7684\u503c\u7684\u540c\u65f6\u83b7\u53d6 charCodeAt(i+1) \u7684\u503c\uff08\u5982\u540c\u67e5\u770b/reproducing \u62e5\u6709\u4e24\u4e2a\u5b57\u7b26\u7684\u5b57\n\u7b26\u4e32\u4e00\u6837\uff09\uff0c\u6216\u8005\u6539\u4e3a\u83b7\u53d6 codePointAt(i) \u7684\u503c\u3002\u53c2\u770b\u4e0b\u9762\u4f8b 2 \u548c\u4f8b 3\u3002</p>\n<p>\u5982\u679c\u6307\u5b9a\u7684 index \u5c0f\u4e8e 0 \u6216\u4e0d\u5c0f\u4e8e\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0c\u5219 charCodeAt \u8fd4\u56de NaN\u3002</p>\n<p>\u5411\u540e\u517c\u5bb9\uff1a\u5728\u5386\u53f2\u7248\u672c\u4e2d\uff08\u5982 JavaScript 1.2\uff09\uff0ccharCodeAt \u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u7ed9\u5b9a index \u5904\u5b57\u7b26\u7684 ISO-Latin-1 \u7f16\u7801\u503c\u3002ISO-Latin-1\n\u7f16\u7801\u96c6\u8303\u56f4\u4ece 0 \u5230 255\u3002\u5f00\u5934\u7684 0 \u5230 127 \u76f4\u63a5\u5339\u914d ASCII \u5b57\u7b26\u96c6\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u4f7f\u7528-charcodeat">\u4f7f\u7528 charCodeAt()</h3>\n<p>\u4e0b\u4f8b\u8fd4\u56de 65\uff0c\u5373 A \u7684 Unicode \u503c\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-string">"ABC"</span>.<span class="hljs-built_in">char</span><span class="hljs-constructor">CodeAt(0)</span> <span class="hljs-comment">// returns 65</span></code></pre>\n<h3 id="\u4f7f\u7528charcodeat\u4fee\u590d\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0\u7684\u672a\u77e5\u7684\u975e\u57fa\u672c\u591a\u8bed\u8a00\u8303\u56f4\uff08\u975ebmp\uff0cnon-basic-multilingual-plane\uff09\u5b57\u7b26">\u4f7f\u7528charCodeAt()\u4fee\u590d\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0\u7684\u672a\u77e5\u7684\u975e\u57fa\u672c\u591a\u8bed\u8a00\u8303\u56f4\uff08\u975eBMP\uff0cnon-Basic-Multilingual-Plane\uff09\u5b57\u7b26</h3>\n<p>\u8fd9\u6bb5\u4ee3\u7801\u53ef\u4ee5\u88ab\u7528\u5728 for \u5faa\u73af\u548c\u5176\u4ed6\u7c7b\u4f3c\u8bed\u53e5\u4e2d\uff0c\u5f53\u5728\u6307\u5b9a\u5f15\u7d22\u4e4b\u524d\u4e0d\u786e\u5b9a\u662f\u5426\u6709\u975eBMP\u5b57\u7b26\u5b58\u5728\u65f6\u3002</p>\n<pre><code class="language-javascript">function <span class="hljs-built_in">fixedCharCodeAt</span> (str, idx) {\n    <span class="hljs-comment">// ex. fixedCharCodeAt (\'\\uD800\\uDC00\', 0); // 65536</span>\n    <span class="hljs-comment">// ex. fixedCharCodeAt (\'\\uD800\\uDC00\', 1); // false</span>\n    idx = idx || <span class="hljs-number">0</span>;\n    var code = str.charCodeAt(idx);\n    var hi, low;\n\n    <span class="hljs-comment">// High surrogate (could change last hex to 0xDB7F to treat high</span>\n    <span class="hljs-comment">// private surrogates as single characters)</span>\n    <span class="hljs-keyword">if</span> (<span class="hljs-number">0xD800</span> &lt;= <span class="hljs-built_in">code</span> &amp;&amp; <span class="hljs-built_in">code</span> &lt;= <span class="hljs-number">0xDBFF</span>) {\n        hi = <span class="hljs-built_in">code</span>;\n        low = str.charCodeAt(idx+<span class="hljs-number">1</span>);\n        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">isNaN</span>(low)) {\n            throw \'High surrogate <span class="hljs-keyword">not</span> followed by low surrogate in <span class="hljs-built_in">fixedCharCodeAt</span>()\';\n        }\n        <span class="hljs-keyword">return</span> ((hi - <span class="hljs-number">0xD800</span>) * <span class="hljs-number">0x400</span>) + (low - <span class="hljs-number">0xDC00</span>) + <span class="hljs-number">0x10000</span>;\n    }\n    <span class="hljs-keyword">if</span> (<span class="hljs-number">0xDC00</span> &lt;= <span class="hljs-built_in">code</span> &amp;&amp; <span class="hljs-built_in">code</span> &lt;= <span class="hljs-number">0xDFFF</span>) { <span class="hljs-comment">// Low surrogate</span>\n        <span class="hljs-comment">// We return false to allow loops to skip this iteration since should have</span>\n        <span class="hljs-comment">// already handled high surrogate above in the previous iteration</span>\n        <span class="hljs-keyword">return</span> false;\n        <span class="hljs-comment">/*hi = str.charCodeAt(idx-1);\n        low = code;\n        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/</span>\n    }\n    <span class="hljs-keyword">return</span> <span class="hljs-built_in">code</span>;\n}</code></pre>\n<h3 id="\u4f7f\u7528-charcodeat\u4fee\u590d\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0\u7684\u5df2\u77e5\u7684\u975ebmp\u5b57\u7b26">\u4f7f\u7528 charCodeAt()\u4fee\u590d\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0\u7684\u5df2\u77e5\u7684\u975eBMP\u5b57\u7b26</h3>\n<pre><code class="language-javascript">function <span class="hljs-built_in">knownCharCodeAt</span> (str, idx) {\n    str += \'\';\n    var <span class="hljs-built_in">code</span>,\n        end = str.length;\n\n    var surrogatePairs = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g;\n    <span class="hljs-keyword">while</span> ((surrogatePairs.exec(str)) != <span class="hljs-built_in">null</span>) {\n        var li = surrogatePairs.lastIndex;\n        <span class="hljs-keyword">if</span> (li - <span class="hljs-number">2</span> &lt; idx) {\n            idx++;\n        }\n        <span class="hljs-keyword">else</span> {\n            <span class="hljs-keyword">break</span>;\n        }\n    }\n\n    <span class="hljs-keyword">if</span> (idx &gt;= <span class="hljs-keyword">end</span> || idx &lt; <span class="hljs-number">0</span>) {\n        <span class="hljs-keyword">return</span> NaN;\n    }\n\n    code = str.charCodeAt(idx);\n\n    var hi, low;\n    <span class="hljs-keyword">if</span> (<span class="hljs-number">0xD800</span> &lt;= <span class="hljs-built_in">code</span> &amp;&amp; <span class="hljs-built_in">code</span> &lt;= <span class="hljs-number">0xDBFF</span>) {\n        hi = <span class="hljs-built_in">code</span>;\n        low = str.charCodeAt(idx+<span class="hljs-number">1</span>);\n        <span class="hljs-comment">// Go one further, since one of the "characters" is part of a surrogate pair</span>\n        <span class="hljs-keyword">return</span> ((hi - <span class="hljs-number">0xD800</span>) * <span class="hljs-number">0x400</span>) + (low - <span class="hljs-number">0xDC00</span>) + <span class="hljs-number">0x10000</span>;\n    }\n    <span class="hljs-keyword">return</span> <span class="hljs-built_in">code</span>;\n}</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);