(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[128],{ydQb:function(a,n){a.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN" target="_blank">en</a></p>\n<h1 id="nan">NaN</h1>\n<p>\u5168\u5c40\u5c5e\u6027 NaN \u8868\u793a Not-A-Number \u7684\u503c\u3002</p>\n<table>\n<thead>\n<tr>\n<th align="left">\u5c5e\u6027</th>\n<th align="left"></th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">writable</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">enumerable</td>\n<td align="left">false</td>\n</tr>\n<tr>\n<td align="left">configurable</td>\n<td align="left">false</td>\n</tr>\n</tbody></table>\n<h2 id="1\u3001\u8bed\u6cd5">1\u3001\u8bed\u6cd5</h2>\n<p><code>NaN</code></p>\n<h2 id="2\u3001\u63cf\u8ff0">2\u3001\u63cf\u8ff0</h2>\n<p>NaN \u662f\u4e00\u4e2a\u5168\u5c40\u5bf9\u8c61\u7684\u5c5e\u6027\u3002</p>\n<p>NaN \u5c5e\u6027\u7684\u521d\u59cb\u503c\u5c31\u662f <code>NaN</code>\uff0c\u548c <code>Number.NaN</code> \u7684\u503c\u4e00\u6837\u3002\u5728\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e2d\uff08<code>ES5</code>\u4e2d\uff09\uff0c NaN \u5c5e\u6027\u662f\u4e00\u4e2a\u4e0d\u53ef\u914d\u7f6e\uff08<code>non-configurable</code>\uff09\uff0c\n\u4e0d\u53ef\u5199\uff08<code>non-writable</code>\uff09\u7684\u5c5e\u6027\u3002\u4f46\u5728<code>ES3</code>\u4e2d\uff0c\u8fd9\u4e2a\u5c5e\u6027\u7684\u503c\u662f\u53ef\u4ee5\u88ab\u66f4\u6539\u7684\uff0c\u4f46\u662f\u4e5f\u5e94\u8be5\u907f\u514d\u8986\u76d6\u3002</p>\n<p>\u5728\u7f16\u7801\u5f88\u5c11\u76f4\u63a5\u4f7f\u7528\u5230 NaN\u3002\u901a\u5e38\u90fd\u662f\u5728\u8ba1\u7b97\u5931\u8d25\u65f6\uff0c\u4f5c\u4e3a <code>Math</code> \u7684\u67d0\u4e2a\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u51fa\u73b0\u7684\uff08\u4f8b\u5982\uff1aMath.sqrt(-1)\uff09\u6216\u8005\u5c1d\u8bd5\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u89e3\u6790\u6210\u6570\u5b57\u4f46\u5931\u8d25\u4e86\u7684\u65f6\u5019\uff08\u4f8b\u5982\uff1aparseInt(&quot;blabla&quot;)\uff09\u3002</p>\n<h3 id="1-\u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u662fnan">(1) \u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u662fNaN</h3>\n<p>\u7b49\u53f7\u8fd0\u7b97\u7b26\uff08== \u548c ===\uff09 \u4e0d\u80fd\u88ab\u7528\u6765\u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u662f NaN\u3002\u5fc5\u987b\u4f7f\u7528 <code>Number.isNaN()</code> \u6216 <code>isNaN()</code> \u51fd\u6570\u3002\u5728\u6267\u884c\u81ea\u6bd4\u8f83\u4e4b\u4e2d\uff1aNaN\uff0c\u4e5f\u53ea\u6709NaN\uff0c\u6bd4\u8f83\u4e4b\u4e2d\u4e0d\u7b49\u4e8e\u5b83\u81ea\u5df1\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-literal">NaN</span> === <span class="hljs-literal">NaN</span>;        <span class="hljs-comment">// false</span>\n<span class="hljs-built_in">Number</span>.<span class="hljs-literal">NaN</span> === <span class="hljs-literal">NaN</span>; <span class="hljs-comment">// false</span>\nisNaN(<span class="hljs-literal">NaN</span>);         <span class="hljs-comment">// true</span>\nisNaN(<span class="hljs-built_in">Number</span>.<span class="hljs-literal">NaN</span>);  <span class="hljs-comment">// true</span>\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">valueIsNaN</span>(<span class="hljs-params">v</span>) </span>{ <span class="hljs-keyword">return</span> v !== v; }\nvalueIsNaN(<span class="hljs-number">1</span>);          <span class="hljs-comment">// false</span>\nvalueIsNaN(<span class="hljs-literal">NaN</span>);        <span class="hljs-comment">// true</span>\nvalueIsNaN(<span class="hljs-built_in">Number</span>.<span class="hljs-literal">NaN</span>); <span class="hljs-comment">// true</span></code></pre>\n<h2 id="3\u3001\u89c4\u8303">3\u3001\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition JavaScript 1.3</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);