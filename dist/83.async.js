(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{zVkC:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh_CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank">en</a></p>\n<h1 id="boolean">Boolean</h1>\n<p>Boolean \u5bf9\u8c61\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\u7684\u5bf9\u8c61\u5305\u88c5\u5668\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-built_in">new</span> <span class="hljs-type">Boolean</span>([<span class="hljs-keyword">value</span>])\n\n// <span class="hljs-type">Boolean</span> {[[PrimitiveValue]]: <span class="hljs-keyword">false</span>}\n// <span class="hljs-type">Boolean</span> {[[PrimitiveValue]]: <span class="hljs-keyword">true</span>}\n// <span class="hljs-keyword">return</span> a <span class="hljs-type">boolean</span> <span class="hljs-keyword">object</span> which <span class="hljs-keyword">value</span> <span class="hljs-keyword">is</span> (<span class="hljs-keyword">true</span>/<span class="hljs-keyword">false</span>).\n\n// Falsy <span class="hljs-keyword">values</span> <span class="hljs-keyword">in</span> JavaScript are <span class="hljs-keyword">false</span>, <span class="hljs-keyword">null</span>, <span class="hljs-number">0</span>, "", undefined, <span class="hljs-keyword">and</span> <span class="hljs-keyword">NaN</span>.</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>value</code> \u53ef\u9009\u7684. Boolean \u5bf9\u8c61\u7684\u521d\u59cb\u503c.</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5982\u679cBoolean\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u4e0d\u662f\u4e00\u4e2a\u5e03\u5c14\u503c,\u5219\u8be5\u53c2\u6570\u4f1a\u88ab\u8f6c\u6362\u6210\u4e00\u4e2a\u5e03\u5c14\u503c.\u5982\u679c\u53c2\u6570\u662f 0, -0,  null, false, NaN, undefined, \u6216\n\u8005\u7a7a\u5b57\u7b26\u4e32 (&quot;&quot;),\u751f\u6210\u7684Boolean\u5bf9\u8c61\u7684\u503c\u4e3afalse. \u5176\u4ed6\u4efb\u4f55\u503c,\u5305\u62ec\u4efb\u4f55\u5bf9\u8c61\u6216\u8005\u5b57\u7b26\u4e32&quot;false&quot;, \u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u503c\u4e3atrue\u7684Boolean\u5bf9\u8c61.</p>\n<p>\u4e0d\u8981\u5c06\u539f\u59cb\u503ctrue false,\u548c\u503c\u4e3atrue false\u7684Boolean\u5bf9\u8c61\u76f8\u6df7\u6dc6.</p>\n<p>\u4efb\u4f55\u503c\u4e0d\u4e3a undefined\u6216\u8005 null\u7684\u5bf9\u8c61, \u5305\u62ec\u503c\u4e3afalse\u7684Boolean\u5bf9\u8c61, \u5728\u6761\u4ef6\u8bed\u53e5\u4e2d,\u5176\u503c\u90fd\u5c06\u4f5c\u4e3atrue\u6765\u5224\u65ad.\u4f8b\u5982,\u4e0b\u9762\u7684if \u8bed\u53e5\u4e2d,\nif\u5c31\u5c06\u5bf9\u8c61x\u770b\u4f5c\u662ftrue:</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> x = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">false</span>);\n<span class="hljs-keyword">if</span> (x) {\n  <span class="hljs-comment">// . . . \u8fd9\u91cc\u7684\u4ee3\u7801\u4ecd\u4f1a\u88ab\u6267\u884c</span>\n}</code></pre>\n<p>Boolean\u539f\u59cb\u503c\u4e0d\u4f1a\u6709\u8fd9\u79cd\u8868\u73b0.\u4f8b\u5982, \u4e0b\u9762\u7684\u6761\u4ef6\u7ed3\u6784\u4e2d,if\u8bed\u53e5\u7684\u5185\u90e8\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6267\u884c:</p>\n<pre><code class="language-javascript"><span class="hljs-keywords">var</span> <span class="hljs-symbol">x</span> = <span class="hljs-literal">false</span>;\n<span class="hljs-keywords">if</span> (<span class="hljs-symbol">x</span>) {\n  <span class="hljs-comment">// . . . \u8fd9\u91cc\u7684\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6267\u884c</span>\n}</code></pre>\n<p>\u4e0d\u8981\u901a\u8fc7\u65b0\u5efaBoolean\u5bf9\u8c61\u7684\u65b9\u6cd5\u6765\u5c06\u4e00\u4e2a\u975e\u5e03\u5c14\u503c\u8f6c\u5316\u6210\u5e03\u5c14\u503c. \u76f4\u63a5\u4f7f\u7528Boolean\u51fd\u6570\u624d\u662f\u6b63\u786e\u7684:</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> x = <span class="hljs-built_in">Boolean</span>(expression);     <span class="hljs-comment">// \u8fd9\u6837\u7528</span>\n<span class="hljs-keyword">var</span> x = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Boolean</span>(expression); <span class="hljs-comment">// \u800c\u4e0d\u8981\u8fd9\u6837!</span></code></pre>\n<p>\u5982\u8fc7\u4f60\u7528\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3aBoolean\u5bf9\u8c61\u7684\u521d\u59cb\u5316\u503c,\u5219\u5373\u4f7f\u8be5\u5bf9\u8c61\u662f\u4e2a\u503c\u4e3afalse\u7684Boolean\u5bf9\u8c61,\u751f\u6210\u7684Boolean\u5bf9\u8c61\u7684\u503c\u4e5f\u662ftrue.</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> myFalse = <span class="hljs-keyword">new</span> <span class="hljs-type">Boolean</span>(<span class="hljs-literal">false</span>);   <span class="hljs-comment">// \u521d\u59cb\u5316\u503c\u4e3afalse</span>\n<span class="hljs-keyword">var</span> g = <span class="hljs-keyword">new</span> <span class="hljs-type">Boolean</span>(myFalse);       <span class="hljs-comment">// \u521d\u59cb\u5316\u503c\u4e3atrue</span>\n<span class="hljs-keyword">var</span> myString = <span class="hljs-keyword">new</span> <span class="hljs-type">String</span>(<span class="hljs-string">"Hello"</span>); <span class="hljs-comment">// string \u5bf9\u8c61</span>\n<span class="hljs-keyword">var</span> s = <span class="hljs-keyword">new</span> <span class="hljs-type">Boolean</span>(myString);      <span class="hljs-comment">// \u521d\u59cb\u5316\u503c\u4e3atrue</span></code></pre>\n<p>\u4e0d\u8981\u5728\u8be5\u4f7f\u7528Boolean\u539f\u59cb\u503c\u7684\u5730\u65b9\u4f7f\u7528Boolean\u5bf9\u8c61.</p>\n<h2 id="\u5c5e\u6027">\u5c5e\u6027</h2>\n<ul>\n<li><code>Boolean.length</code> \u957f\u5ea6\u5c5e\u6027,\u503c\u4e3a1.</li>\n<li><code>Boolean.prototype</code> \u4ee3\u8868Boolean\u6784\u9020\u5668\u7684\u539f\u578b.</li>\n</ul>\n<h2 id="\u65b9\u6cd5">\u65b9\u6cd5</h2>\n<p>Boolean\u6784\u9020\u51fd\u6570\u81ea\u8eab\u6ca1\u6709\u4efb\u4f55\u65b9\u6cd5, \u4e0d\u8fc7, \u5b83\u4ece\u81ea\u5df1\u7684\u539f\u578b\u94fe\u4e0a\u7ee7\u627f\u4e86\u4e00\u4e9b\u65b9\u6cd5:</p>\n<h2 id="boolean-\u5b9e\u4f8b">Boolean \u5b9e\u4f8b</h2>\n<p>\u6240\u6709Boolean\u5b9e\u4f8b\u90fd\u7ee7\u627f\u4e8e  Boolean.prototype. \u5176\u4ed6\u6240\u6709\u7684\u6784\u9020\u51fd\u6570\u4e5f\u540c\u6837,\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u63a7\u5236\u7740\u81ea\u5df1\u7684\u5bf9\u8c61\u5b9e\u4f8b\u6240\u7ee7\u627f\u7684\u5c5e\u6027\u548c\u65b9\u6cd5.</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<h3 id="\u521b\u5efa1\u4e2aboolean\u51fd\u6570\u521d\u59cb\u5316\u503c\u4e3afalse">\u521b\u5efa1\u4e2aBoolean\u51fd\u6570,\u521d\u59cb\u5316\u503c\u4e3afalse</h3>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> bNoParam = <span class="hljs-built_in">Boolean</span>();\n<span class="hljs-keyword">var</span> bZero = <span class="hljs-built_in">Boolean</span>(<span class="hljs-number">0</span>);\n<span class="hljs-keyword">var</span> bNull = <span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">null</span>);\n<span class="hljs-keyword">var</span> bEmptyString = <span class="hljs-built_in">Boolean</span>(<span class="hljs-string">""</span>);\n<span class="hljs-keyword">var</span> bUndefined = <span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">undefined</span>);\n<span class="hljs-keyword">var</span> bfalse = <span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">false</span>);</code></pre>\n<h3 id="\u521b\u5efa1\u4e2aboolean\u51fd\u6570\u521d\u59cb\u5316\u503c\u4e3atrue">\u521b\u5efa1\u4e2aBoolean\u51fd\u6570,\u521d\u59cb\u5316\u503c\u4e3atrue</h3>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> btrue = <span class="hljs-built_in">Boolean</span>(<span class="hljs-literal">true</span>);\n<span class="hljs-keyword">var</span> btrueString = <span class="hljs-built_in">Boolean</span>(<span class="hljs-string">"true"</span>);\n<span class="hljs-keyword">var</span> bfalseString = <span class="hljs-built_in">Boolean</span>(<span class="hljs-string">"false"</span>);\n<span class="hljs-keyword">var</span> bSuLin = <span class="hljs-built_in">Boolean</span>(<span class="hljs-string">"Su Lin"</span>);</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);