(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[95],{H4RY:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is" target="_blank">en</a></p>\n<h1 id="objectis">Object.is()</h1>\n<p>Object.is() \u65b9\u6cd5\u786e\u5b9a\u4e24\u4e2a\u503c\u662f\u5426\u662f \u76f8\u540c\u7684\u503c\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">Object.<span class="hljs-keyword">is</span>(<span class="hljs-keyword">value</span><span class="hljs-number">1</span>, <span class="hljs-keyword">value</span><span class="hljs-number">2</span>);</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>value1</code> \u9700\u8981\u6bd4\u8f83\u7684\u7b2c\u4e00\u4e2a\u503c\u3002</li>\n<li><code>value2</code> \u9700\u8981\u6bd4\u8f83\u7684\u7b2c\u4e8c\u4e2a\u503c\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u4e00\u4e2a \u5e03\u5c14\u503c\u6307\u793a\u4e24\u4e2a\u53c2\u6570\u662f\u5426\u76f8\u540c\u7684\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>Object.is() \u4f1a\u5728\u4e0b\u9762\u8fd9\u4e9b\u60c5\u51b5\u4e0b\u8ba4\u4e3a\u4e24\u4e2a\u503c\u662f\u76f8\u540c\u7684\uff1a</p>\n<ul>\n<li>\u4e24\u4e2a\u503c\u90fd\u662f undefined</li>\n<li>\u4e24\u4e2a\u503c\u90fd\u662f null</li>\n<li>\u4e24\u4e2a\u503c\u90fd\u662f true \u6216\u8005\u90fd\u662f false</li>\n<li>\u4e24\u4e2a\u503c\u662f\u7531\u76f8\u540c\u4e2a\u6570\u7684\u5b57\u7b26\u6309\u7167\u76f8\u540c\u7684\u987a\u5e8f\u7ec4\u6210\u7684\u5b57\u7b26\u4e32</li>\n<li>\u4e24\u4e2a\u503c\u6307\u5411\u540c\u4e00\u4e2a\u5bf9\u8c61</li>\n<li>\u4e24\u4e2a\u503c\u90fd\u662f\u6570\u5b57\u5e76\u4e14<ul>\n<li>\u90fd\u662f\u6b63\u96f6 +0</li>\n<li>\u90fd\u662f\u8d1f\u96f6 -0</li>\n<li>\u90fd\u662f NaN</li>\n<li>\u90fd\u662f\u9664\u96f6\u548c NaN \u5916\u7684\u5176\u5b83\u540c\u4e00\u4e2a\u6570\u5b57</li>\n</ul>\n</li>\n</ul>\n<p>\u8fd9\u79cd\u76f8\u7b49\u6027\u5224\u65ad\u903b\u8f91\u548c\u4f20\u7edf\u7684 == \u8fd0\u7b97\u7b26\u6240\u7528\u7684\u4e0d\u540c\uff0c== \u8fd0\u7b97\u7b26\u4f1a\u5bf9\u5b83\u4e24\u8fb9\u7684\u64cd\u4f5c\u6570\u505a\u9690\u5f0f\u7684\u7c7b\u578b\u8f6c\u6362\uff08\u5982\u679c\u5b83\u4eec\u662f\u4e0d\u540c\u7c7b\u578b\u7684\u503c\u7684\u8bdd\uff09\uff0c\n\u7136\u540e\u624d\u8fdb\u884c\u76f8\u7b49\u6027\u6bd4\u8f83\uff0c\uff08\u6240\u4ee5\u624d\u4f1a\u6709\u7c7b\u4f3c &quot;&quot; == false \u4e3a true \u7684\u73b0\u8c61\uff09\uff0c\u4f46 Object.is \u4e0d\u4f1a\u505a\u8fd9\u79cd\u7c7b\u578b\u8f6c\u6362\u3002</p>\n<p>\u5f53\u7136\uff0c\u4e25\u683c\u76f8\u7b49\u8fd0\u7b97\u7b26 === \u4e5f\u4e0d\u4f1a\u5bf9\u64cd\u4f5c\u6570\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u4f46\u662f\u5b83\u4f1a\u628a -0 \u548c +0 \u8fd9\u4e24\u4e2a\u6570\u503c\u89c6\u4e3a\u76f8\u540c\u7684\uff0c\u8fd8\u4f1a\u628a\u4e24\u4e2a NaN \u770b\u6210\u662f\u4e0d\u76f8\u7b49\u7684\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript"><span class="hljs-built_in">Object</span>.<span class="hljs-keyword">is</span>(<span class="hljs-string">\'foo\'</span>, <span class="hljs-string">\'foo\'</span>);     <span class="hljs-comment">// true</span>\n<span class="hljs-built_in">Object</span>.<span class="hljs-keyword">is</span>(<span class="hljs-built_in">window</span>, <span class="hljs-built_in">window</span>);   <span class="hljs-comment">// true</span>\n\n<span class="hljs-built_in">Object</span>.<span class="hljs-keyword">is</span>(<span class="hljs-string">\'foo\'</span>, <span class="hljs-string">\'bar\'</span>);     <span class="hljs-comment">// false</span>\n<span class="hljs-built_in">Object</span>.<span class="hljs-keyword">is</span>([], []);           <span class="hljs-comment">// false</span>\n\n<span class="hljs-keyword">var</span> test = { a: <span class="hljs-number">1</span> };\n<span class="hljs-built_in">Object</span>.<span class="hljs-keyword">is</span>(test, test);       <span class="hljs-comment">// true</span>\n\n<span class="hljs-built_in">Object</span>.<span class="hljs-keyword">is</span>(<span class="hljs-keyword">null</span>, <span class="hljs-keyword">null</span>);       <span class="hljs-comment">// true</span>\n\n<span class="hljs-comment">// \u7279\u4f8b</span>\n<span class="hljs-built_in">Object</span>.<span class="hljs-keyword">is</span>(<span class="hljs-number">0</span>, <span class="hljs-number">-0</span>);            <span class="hljs-comment">// false</span>\n<span class="hljs-built_in">Object</span>.<span class="hljs-keyword">is</span>(<span class="hljs-number">-0</span>, <span class="hljs-number">-0</span>);           <span class="hljs-comment">// true</span>\n<span class="hljs-built_in">Object</span>.<span class="hljs-keyword">is</span>(NaN, <span class="hljs-number">0</span>/<span class="hljs-number">0</span>);         <span class="hljs-comment">// true</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n</tbody></table>\n'}}]);