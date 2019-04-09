(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{SEds:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" target="_blank">en</a></p>\n<h1 id="objectgetownpropertydescriptor">Object.getOwnPropertyDescriptor()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>Object.getOwnPropertyDescriptor() \u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u4e0a\u4e00\u4e2a\u81ea\u6709\u5c5e\u6027\u5bf9\u5e94\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002\uff08\u81ea\u6709\u5c5e\u6027\u6307\u7684\u662f\u76f4\u63a5\u8d4b\u4e88\u8be5\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u4e0d\u9700\n\u8981\u4ece\u539f\u578b\u94fe\u4e0a\u8fdb\u884c\u67e5\u627e\u7684\u5c5e\u6027\uff09</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>get<span class="hljs-constructor">OwnPropertyDescriptor(<span class="hljs-params">obj</span>, <span class="hljs-params">prop</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>obj</code> \u5728\u8be5\u5bf9\u8c61\u4e0a\u67e5\u770b\u5c5e\u6027</li>\n<li><code>prop</code> \u4e00\u4e2a\u5c5e\u6027\u540d\u79f0\uff0c\u8be5\u5c5e\u6027\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u5c06\u88ab\u8fd4\u56de</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u5982\u679c\u6307\u5b9a\u7684\u5c5e\u6027\u5b58\u5728\u4e8e\u5bf9\u8c61\u4e0a\uff0c\u5219\u8fd4\u56de\u5176\u5c5e\u6027\u63cf\u8ff0\u7b26\uff08property descriptor\uff09\uff0c\u5426\u5219\u8fd4\u56de undefined\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u8be5\u65b9\u6cd5\u5141\u8bb8\u5bf9\u4e00\u4e2a\u5c5e\u6027\u7684\u63cf\u8ff0\u8fdb\u884c\u68c0\u7d22\u3002\u5728 Javascript \u4e2d\uff0c \u5c5e\u6027 \u7531\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u201c\u540d\u5b57\u201d\uff08name\uff09\u548c\u4e00\u4e2a\u201c\u5c5e\u6027\u63cf\u8ff0\u7b26\u201d\n\uff08property descriptor\uff09\u5bf9\u8c61\u6784\u6210\u3002\u66f4\u591a\u5173\u4e8e\u5c5e\u6027\u63cf\u8ff0\u7b26\u7c7b\u578b\u4ee5\u53ca\u4ed6\u4eec\u5c5e\u6027\u7684\u4fe1\u606f\u53ef\u4ee5\u67e5\u770b\uff1aObject.defineProperty.</p>\n<p>\u4e00\u4e2a\u5c5e\u6027\u63cf\u8ff0\u7b26\u662f\u4e00\u4e2a\u8bb0\u5f55\uff0c\u7531\u4e0b\u9762\u5c5e\u6027\u5f53\u4e2d\u7684\u67d0\u4e9b\u7ec4\u6210\u7684\uff1a</p>\n<ul>\n<li><code>value</code> \u8be5\u5c5e\u6027\u7684\u503c(\u4ec5\u9488\u5bf9\u6570\u636e\u5c5e\u6027\u63cf\u8ff0\u7b26\u6709\u6548)</li>\n<li><code>writable</code> \u5f53\u4e14\u4ec5\u5f53\u5c5e\u6027\u7684\u503c\u53ef\u4ee5\u88ab\u6539\u53d8\u65f6\u4e3atrue\u3002(\u4ec5\u9488\u5bf9\u6570\u636e\u5c5e\u6027\u63cf\u8ff0\u6709\u6548)</li>\n<li><code>get</code> \u83b7\u53d6\u8be5\u5c5e\u6027\u7684\u8bbf\u95ee\u5668\u51fd\u6570\uff08getter\uff09\u3002\u5982\u679c\u6ca1\u6709\u8bbf\u95ee\u5668\uff0c \u8be5\u503c\u4e3aundefined\u3002(\u4ec5\u9488\u5bf9\u5305\u542b\u8bbf\u95ee\u5668\u6216\u8bbe\u7f6e\u5668\u7684\u5c5e\u6027\u63cf\u8ff0\u6709\u6548)</li>\n<li><code>set</code> \u83b7\u53d6\u8be5\u5c5e\u6027\u7684\u8bbe\u7f6e\u5668\u51fd\u6570\uff08setter\uff09\u3002 \u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u5668\uff0c \u8be5\u503c\u4e3aundefined\u3002(\u4ec5\u9488\u5bf9\u5305\u542b\u8bbf\u95ee\u5668\u6216\u8bbe\u7f6e\u5668\u7684\u5c5e\u6027\u63cf\u8ff0\u6709\u6548)</li>\n<li><code>configurable</code> \u5f53\u4e14\u4ec5\u5f53\u6307\u5b9a\u5bf9\u8c61\u7684\u5c5e\u6027\u63cf\u8ff0\u53ef\u4ee5\u88ab\u6539\u53d8\u6216\u8005\u5c5e\u6027\u53ef\u88ab\u5220\u9664\u65f6\uff0c\u4e3atrue\u3002</li>\n<li><code>enumerable</code> \u5f53\u4e14\u4ec5\u5f53\u6307\u5b9a\u5bf9\u8c61\u7684\u5c5e\u6027\u53ef\u4ee5\u88ab\u679a\u4e3e\u51fa\u65f6\uff0c\u4e3a true\u3002</li>\n</ul>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript"><span class="hljs-string">var</span> <span class="hljs-string">o,</span> <span class="hljs-string">d;</span>\n\n<span class="hljs-string">o</span> <span class="hljs-string">=</span> <span class="hljs-string">{</span> <span class="hljs-string">get</span> <span class="hljs-string">foo()</span> <span class="hljs-string">{</span> <span class="hljs-string">return</span> <span class="hljs-number">17</span><span class="hljs-string">;</span> <span class="hljs-string">}</span> <span class="hljs-string">};</span>\n<span class="hljs-string">d</span> <span class="hljs-string">=</span> <span class="hljs-string">Object.getOwnPropertyDescriptor(o,</span> <span class="hljs-string">"foo"</span><span class="hljs-string">);</span>\n<span class="hljs-string">//</span> <span class="hljs-string">d</span> <span class="hljs-string">is</span> <span class="hljs-string">{</span> <span class="hljs-attr">configurable:</span> <span class="hljs-literal">true</span><span class="hljs-string">,</span> <span class="hljs-attr">enumerable:</span> <span class="hljs-literal">true</span><span class="hljs-string">,</span> <span class="hljs-attr">get:</span> <span class="hljs-string">/*\u8bbf\u95ee\u5668\u51fd\u6570*/,</span> <span class="hljs-attr">set:</span> <span class="hljs-string">undefined</span> <span class="hljs-string">}</span>\n\n<span class="hljs-string">o</span> <span class="hljs-string">=</span> <span class="hljs-string">{</span> <span class="hljs-attr">bar:</span> <span class="hljs-number">42</span> <span class="hljs-string">};</span>\n<span class="hljs-string">d</span> <span class="hljs-string">=</span> <span class="hljs-string">Object.getOwnPropertyDescriptor(o,</span> <span class="hljs-string">"bar"</span><span class="hljs-string">);</span>\n<span class="hljs-string">//</span> <span class="hljs-string">d</span> <span class="hljs-string">is</span> <span class="hljs-string">{</span> <span class="hljs-attr">configurable:</span> <span class="hljs-literal">true</span><span class="hljs-string">,</span> <span class="hljs-attr">enumerable:</span> <span class="hljs-literal">true</span><span class="hljs-string">,</span> <span class="hljs-attr">value:</span> <span class="hljs-number">42</span><span class="hljs-string">,</span> <span class="hljs-attr">writable:</span> <span class="hljs-literal">true</span> <span class="hljs-string">}</span>\n\n<span class="hljs-string">o</span> <span class="hljs-string">=</span> <span class="hljs-string">{};</span>\n<span class="hljs-string">Object.defineProperty(o,</span> <span class="hljs-string">"baz"</span><span class="hljs-string">,</span> <span class="hljs-string">{</span> <span class="hljs-attr">value:</span> <span class="hljs-number">8675309</span><span class="hljs-string">,</span> <span class="hljs-attr">writable:</span> <span class="hljs-literal">false</span><span class="hljs-string">,</span> <span class="hljs-attr">enumerable:</span> <span class="hljs-literal">false</span> <span class="hljs-string">});</span>\n<span class="hljs-string">d</span> <span class="hljs-string">=</span> <span class="hljs-string">Object.getOwnPropertyDescriptor(o,</span> <span class="hljs-string">"baz"</span><span class="hljs-string">);</span>\n<span class="hljs-string">//</span> <span class="hljs-string">d</span> <span class="hljs-string">is</span> <span class="hljs-string">{</span> <span class="hljs-attr">value:</span> <span class="hljs-number">8675309</span><span class="hljs-string">,</span> <span class="hljs-attr">writable:</span> <span class="hljs-literal">false</span><span class="hljs-string">,</span> <span class="hljs-attr">enumerable:</span> <span class="hljs-literal">false</span><span class="hljs-string">,</span> <span class="hljs-attr">configurable:</span> <span class="hljs-literal">false</span> <span class="hljs-string">}</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);