(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[124],{hNZ8:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">en</a></p>\n<h1 id="arrayprototypejoin">Array.prototype.join()</h1>\n<p>join() \u65b9\u6cd5\u5c06\u6570\u7ec4\uff08\u6216\u4e00\u4e2a\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff09\u7684\u6240\u6709\u5143\u7d20\u8fde\u63a5\u5230\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\u3002</p>\n<p><code>PS: join() \u65b9\u6cd5\uff0c\u4e0d\u4f1a\u6539\u53d8\u6570\u7ec4\uff01</code></p>\n<pre><code class="language-javascript">let a = [<span class="hljs-string">\'Wind\'</span>, <span class="hljs-string">\'Rain\'</span>, <span class="hljs-string">\'Fire\'</span>];\n\na.join();\n<span class="hljs-regexp">//</span> \u9ed8\u8ba4\u4e3a <span class="hljs-string">","</span>\n<span class="hljs-regexp">//</span> <span class="hljs-string">\'Wind,Rain,Fire\'</span>\n\na.join(<span class="hljs-string">""</span>);\n<span class="hljs-regexp">//</span> \u5206\u9694\u7b26 === \u7a7a\u5b57\u7b26\u4e32 <span class="hljs-string">""</span>\n<span class="hljs-regexp">//</span> <span class="hljs-string">"WindRainFire"</span>\n\na.join(<span class="hljs-string">"-"</span>);\n<span class="hljs-regexp">//</span> \u5206\u9694\u7b26 <span class="hljs-string">"-"</span>\n<span class="hljs-regexp">//</span> <span class="hljs-string">\'Wind-Rain-Fire\'</span>\n\nconsole.log(a);\n<span class="hljs-regexp">//</span> [<span class="hljs-string">\'Wind\'</span>, <span class="hljs-string">\'Rain\'</span>, <span class="hljs-string">\'Fire\'</span>]</code></pre>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-built_in">str</span> = arr.<span class="hljs-built_in">join</span>()\n<span class="hljs-comment">// \u9ed8\u8ba4\u4e3a ","</span>\n\n<span class="hljs-built_in">str</span> = arr.<span class="hljs-built_in">join</span>(<span class="hljs-string">""</span>)\n<span class="hljs-comment">// \u5206\u9694\u7b26 === \u7a7a\u5b57\u7b26\u4e32 ""</span>\n\n<span class="hljs-built_in">str</span> = arr.<span class="hljs-built_in">join</span>(separator)\n<span class="hljs-comment">// \u5206\u9694\u7b26</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>separator</code> \u6307\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\u6765\u5206\u9694\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u3002\u5982\u679c\u9700\u8981(separator)\uff0c\u5c06\u5206\u9694\u7b26\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u3002\u5982\u679c\u7701\u7565()\uff0c\u6570\u7ec4\u5143\u7d20\u7528\u9017\u53f7\n\u5206\u9694\u3002\u9ed8\u8ba4\u4e3a &quot;,&quot;\u3002\u5982\u679cseparator\u662f\u7a7a\u5b57\u7b26\u4e32(&quot;&quot;)\uff0c\u5219\u6240\u6709\u5143\u7d20\u4e4b\u95f4\u90fd\u6ca1\u6709\u4efb\u4f55\u5b57\u7b26\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u4e00\u4e2a\u6240\u6709\u6570\u7ec4\u5143\u7d20\u8fde\u63a5\u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c arr.length \u4e3a0\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u6240\u6709\u7684\u6570\u7ec4\u5143\u7d20\u88ab\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\uff0c\u518d\u7528\u4e00\u4e2a\u5206\u9694\u7b26\u5c06\u8fd9\u4e9b\u5b57\u7b26\u4e32\u8fde\u63a5\u8d77\u6765\u3002\u5982\u679c\u5143\u7d20\u662fundefined \u6216\u8005null\uff0c \u5219\u4f1a\u8f6c\u5316\u6210\u7a7a\u5b57\u7b26\u4e32\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<h3 id="\u4f7f\u7528\u56db\u79cd\u4e0d\u540c\u7684\u5206\u9694\u7b26\u8fde\u63a5\u6570\u7ec4\u5143\u7d20">\u4f7f\u7528\u56db\u79cd\u4e0d\u540c\u7684\u5206\u9694\u7b26\u8fde\u63a5\u6570\u7ec4\u5143\u7d20</h3>\n<p>\u4e0b\u4f8b\u9996\u5148\u521b\u5efa\u4e86\u4e00\u4e2a\u6570\u7ec4 a\uff0c\u5305\u542b\u6709\u4e09\u4e2a\u5143\u7d20\uff0c\u7136\u540e\u7528\u56db\u79cd\u4e0d\u540c\u7684\u5206\u9694\u7b26\u8fde\u63a5\u6240\u6709\u6570\u7ec4\u5143\u7d20\u3002\u9996\u5148\u662f\u9ed8\u8ba4\u7684\u5206\u9694\u7b26\u9017\u53f7\uff0c\u7136\u540e\u662f\u4e00\u4e2a\u9017\u53f7\n\u52a0\u7a7a\u683c\uff0c\u63a5\u4e0b\u6765\u662f\u4e00\u4e2a\u52a0\u53f7\u524d\u540e\u52a0\u7a7a\u683c\uff0c\u6700\u540e\u662f\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> a = [<span class="hljs-string">\'Wind\'</span>, <span class="hljs-string">\'Rain\'</span>, <span class="hljs-string">\'Fire\'</span>];\n<span class="hljs-keyword">var</span> myVar1 = a.<span class="hljs-keyword">join</span>();      <span class="hljs-comment">// myVar1\u7684\u503c\u53d8\u4e3a"Wind,Rain,Fire"</span>\n<span class="hljs-keyword">var</span> myVar2 = a.<span class="hljs-keyword">join</span>(<span class="hljs-string">\', \'</span>);  <span class="hljs-comment">// myVar2\u7684\u503c\u53d8\u4e3a"Wind, Rain, Fire"</span>\n<span class="hljs-keyword">var</span> myVar3 = a.<span class="hljs-keyword">join</span>(<span class="hljs-string">\' + \'</span>); <span class="hljs-comment">// myVar3\u7684\u503c\u53d8\u4e3a"Wind + Rain + Fire"</span>\n<span class="hljs-keyword">var</span> myVar4 = a.<span class="hljs-keyword">join</span>(<span class="hljs-string">\'\'</span>);    <span class="hljs-comment">// myVar4\u7684\u503c\u53d8\u4e3a"WindRainFire"</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);