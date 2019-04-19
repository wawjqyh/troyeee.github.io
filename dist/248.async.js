(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[248],{TTos:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" target="_blank">en</a></p>\n<h1 id="numberprototypetofixed">Number.prototype.toFixed()</h1>\n<p>toFixed() \u65b9\u6cd5\u4f7f\u7528\u5b9a\u70b9\u8868\u793a\u6cd5\u6765\u683c\u5f0f\u5316\u4e00\u4e2a\u6570\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">numObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">Fixed(<span class="hljs-params">digits</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>digits</code> \u5c0f\u6570\u70b9\u540e\u6570\u5b57\u7684\u4e2a\u6570\uff1b\u4ecb\u4e8e 0 \u5230 20 \uff08\u5305\u62ec\uff09\u4e4b\u95f4\uff0c\u5b9e\u73b0\u73af\u5883\u53ef\u80fd\u652f\u6301\u66f4\u5927\u8303\u56f4\u3002\u5982\u679c\u5ffd\u7565\u8be5\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u4e3a 0\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u4e00\u4e2a\u6570\u503c\u7684\u5b57\u7b26\u4e32\u8868\u73b0\u5f62\u5f0f\uff0c\u4e0d\u4f7f\u7528\u6307\u6570\u8bb0\u6570\u6cd5\uff0c\u800c\u662f\u5728\u5c0f\u6570\u70b9\u540e\u6709 digits \u4f4d\u6570\u5b57\u3002\u8be5\u6570\u503c\u5728\u5fc5\u8981\u65f6\u8fdb\u884c\u56db\u820d\u4e94\u5165\uff0c\u53e6\u5916\u5728\u5fc5\u8981\u65f6\u4f1a\u7528\n0 \u6765\u586b\u5145\u5c0f\u6570\u90e8\u5206\uff0c\u4ee5\u4fbf\u5c0f\u6570\u90e8\u5206\u6709\u6307\u5b9a\u7684\u4f4d\u6570\u3002 \u5982\u679c\u6570\u503c\u5927\u4e8e 1e+21\uff0c\u8be5\u65b9\u6cd5\u4f1a\u7b80\u5355\u8c03\u7528 Number.prototype.toString()\u5e76\u8fd4\u56de\u4e00\u4e2a\n\u6307\u6570\u8bb0\u6570\u6cd5\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002</p>\n<h3 id="\u629b\u51fa\u5f02\u5e38">\u629b\u51fa\u5f02\u5e38</h3>\n<p><code>RangeError</code></p>\n<p>\u5982\u679c digits \u53c2\u6570\u592a\u5c0f\u6216\u592a\u5927\u30020 \u5230 20\uff08\u5305\u62ec\uff09\u4e4b\u95f4\u7684\u503c\u4e0d\u4f1a\u5f15\u8d77 RangeError\u3002\u5b9e\u73b0\u73af\u5883\uff08implementations\uff09\u4e5f\u53ef\u4ee5\u652f\u6301\u66f4\u5927\u6216\u66f4\u5c0f\u7684\u503c\u3002</p>\n<p><code>TypeError</code></p>\n<p>\u5982\u679c\u8be5\u65b9\u6cd5\u5728\u4e00\u4e2a\u975eNumber\u7c7b\u578b\u7684\u5bf9\u8c61\u4e0a\u8c03\u7528\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript">var numObj = <span class="hljs-number">12345.6789</span>;\n\nnumObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">Fixed()</span>;         <span class="hljs-comment">// \u8fd4\u56de "12346"\uff1a\u8fdb\u884c\u56db\u820d\u4e94\u5165\uff0c\u4e0d\u5305\u62ec\u5c0f\u6570\u90e8\u5206</span>\nnumObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">Fixed(1)</span>;        <span class="hljs-comment">// \u8fd4\u56de "12345.7"\uff1a\u8fdb\u884c\u56db\u820d\u4e94\u5165</span>\n\nnumObj.<span class="hljs-keyword">to</span><span class="hljs-constructor">Fixed(6)</span>;        <span class="hljs-comment">// \u8fd4\u56de "12345.678900"\uff1a\u75280\u586b\u5145</span>\n\n(<span class="hljs-number">1.23e+20</span>).<span class="hljs-keyword">to</span><span class="hljs-constructor">Fixed(2)</span>;    <span class="hljs-comment">// \u8fd4\u56de "123000000000000000000.00"</span>\n\n(<span class="hljs-number">1.23e-10</span>).<span class="hljs-keyword">to</span><span class="hljs-constructor">Fixed(2)</span>;    <span class="hljs-comment">// \u8fd4\u56de "0.00"</span>\n\n<span class="hljs-number">2.34</span>.<span class="hljs-keyword">to</span><span class="hljs-constructor">Fixed(1)</span>;          <span class="hljs-comment">// \u8fd4\u56de "2.3"</span>\n\n-<span class="hljs-number">2.34</span>.<span class="hljs-keyword">to</span><span class="hljs-constructor">Fixed(1)</span>;         <span class="hljs-comment">// \u8fd4\u56de -2.3 \uff08\u7531\u4e8e\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7\uff0c\u8d1f\u6570\u4e0d\u4f1a\u8fd4\u56de\u5b57\u7b26\u4e32\uff09</span>\n\n<span class="hljs-number">(-2.34)</span>.<span class="hljs-keyword">to</span><span class="hljs-constructor">Fixed(1)</span>;       <span class="hljs-comment">// \u8fd4\u56de "-2.3" \uff08\u82e5\u7528\u62ec\u53f7\u63d0\u9ad8\u4f18\u5148\u7ea7\uff0c\u5219\u8fd4\u56de\u5b57\u7b26\u4e32\uff09</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);