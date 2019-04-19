(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[274],{STe1:function(n,s){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw" target="_blank">en</a></p>\n<h1 id="stringraw">String.raw()</h1>\n<h2 id="\u6982\u8ff0">\u6982\u8ff0</h2>\n<p>String.raw() \u662f\u4e00\u4e2a\u6a21\u677f\u5b57\u7b26\u4e32\u7684\u6807\u7b7e\u51fd\u6570\uff0c\u5b83\u7684\u4f5c\u7528\u7c7b\u4f3c\u4e8e Python \u4e2d\u7684\u5b57\u7b26\u4e32\u524d\u7f00 r \u548c C# \u4e2d\u7684\u5b57\u7b26\u4e32\u524d\u7f00 @\uff0c\u662f\u7528\u6765\u83b7\u53d6\u4e00\u4e2a\u6a21\u677f\u5b57\u7b26\u4e32\u7684\u539f\u59cb\u5b57\u9762\u91cf\u503c\u7684\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-selector-tag">String</span><span class="hljs-selector-class">.raw</span>(<span class="hljs-selector-tag">callSite</span>, ..<span class="hljs-selector-class">.substitutions</span>)</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>callSite</code> \u4e00\u4e2a\u6a21\u677f\u5b57\u7b26\u4e32\u7684\u201c\u8c03\u7528\u70b9\u5bf9\u8c61\u201d</li>\n<li><code>...substitutions</code> \u4efb\u610f\u4e2a\u53ef\u9009\u7684\u53c2\u6570\uff0c\u8868\u793a\u4efb\u610f\u4e2a\u5185\u63d2\u8868\u8fbe\u5f0f\u5bf9\u5e94\u7684\u503c</li>\n</ul>\n<h3 id="\u5f02\u5e38">\u5f02\u5e38</h3>\n<p><code>TypeError</code></p>\n<p>\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u6ca1\u6709\u4f20\u5165\u4e00\u4e2a\u683c\u5f0f\u826f\u597d\u7684\u8c03\u7528\u70b9\u5bf9\u8c61\uff0c\u5219\u4f1a\u629b\u51fa TypeError \u5f02\u5e38\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u4e0d\u8981\u88ab\u4e0a\u9762\u590d\u6742\u7684\u53c2\u6570\u8981\u6c42\u5413\u5230\uff0c\u56e0\u4e3a\u50cf\u6240\u6709\u7684\u6807\u7b7e\u51fd\u6570\u4e00\u6837\uff0c\u4f60\u901a\u5e38\u4e0d\u9700\u8981\u628a\u5b83\u770b\u6210\u4e00\u4e2a\u666e\u901a\u51fd\u6570\uff0c\u4f60\u53ea\u9700\u8981\u628a\u5b83\u653e\u5728\u6a21\u677f\u5b57\u7b26\u4e32\u524d\u9762\n\u5c31\u53ef\u4ee5\u4e86\uff0c\u800c\u4e0d\u662f\u5728\u5b83\u540e\u9762\u52a0\u4e2a\u62ec\u53f7\u548c\u4e00\u5806\u53c2\u6570\u6765\u8c03\u7528\u5b83\uff0c\u5f15\u64ce\u4f1a\u66ff\u4f60\u53bb\u8c03\u7528\u5b83\u3002</p>\n<p>String.raw() \u662f\u552f\u4e00\u4e00\u4e2a\u5185\u7f6e\u7684\u6a21\u677f\u5b57\u7b26\u4e32\u6807\u7b7e\u51fd\u6570\uff0c\u56e0\u4e3a\u5b83\u592a\u5e38\u7528\u4e86\u3002\u4e0d\u8fc7\u5b83\u5e76\u6ca1\u6709\u4ec0\u4e48\u7279\u6b8a\u80fd\u529b\uff0c\u4f60\u81ea\u5df1\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u548c\u5b83\u529f\u80fd\u4e00\u6a21\u4e00\u6837\u7684\u6807\u7b7e\u51fd\u6570\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript"><span class="hljs-built_in">String</span>.raw <span class="hljs-string">`Hi\\n!`</span>;\n<span class="hljs-comment">// "Hi\\\\n!"\uff0c\u8fd9\u91cc\u5f97\u5230\u7684\u4e0d\u662f Hi \u540e\u9762\u8ddf\u4e2a\u6362\u884c\u7b26\uff0c\u800c\u662f\u8ddf\u7740 \\ \u548c n \u4e24\u4e2a\u5b57\u7b26</span>\n\n<span class="hljs-built_in">String</span>.raw <span class="hljs-string">`Hi\\u000A!`</span>;\n<span class="hljs-comment">// "Hi\\\\u000A!"\uff0c\u540c\u4e0a\uff0c\u8fd9\u91cc\u5f97\u5230\u7684\u4f1a\u662f \\\u3001u\u30010\u30010\u30010\u3001A 6\u4e2a\u5b57\u7b26\uff0c</span>\n<span class="hljs-comment">// \u4efb\u4f55\u7c7b\u578b\u7684\u8f6c\u4e49\u5f62\u5f0f\u90fd\u4f1a\u5931\u6548\uff0c\u4fdd\u7559\u539f\u6837\u8f93\u51fa\uff0c\u4e0d\u4fe1\u4f60\u8bd5\u8bd5.length</span>\n\n<span class="hljs-keyword">let</span> name = <span class="hljs-string">"Bob"</span>;\n<span class="hljs-built_in">String</span>.raw <span class="hljs-string">`Hi\\n<span class="hljs-subst">${name}</span>!`</span>;\n<span class="hljs-comment">// "Hi\\\\nBob!"\uff0c\u5185\u63d2\u8868\u8fbe\u5f0f\u8fd8\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c</span>\n\n<span class="hljs-built_in">String</span>.raw({<span class="hljs-attr">raw</span>: <span class="hljs-string">"test"</span>}, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>);\n<span class="hljs-comment">// "t0e1s2t"\uff0c\u6211\u8ba4\u4e3a\u4f60\u901a\u5e38\u4e0d\u9700\u8981\u628a\u5b83\u5f53\u6210\u666e\u901a\u51fd\u6570\u6765\u8c03\u7528</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n</tbody></table>\n'}}]);