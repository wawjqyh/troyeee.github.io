(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[146],{afGj:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">en</a></p>\n<h1 id="arrayprototypesplice">Array.prototype.splice()</h1>\n<p>splice() \u65b9\u6cd5\u901a\u8fc7\u5220\u9664\u73b0\u6709\u5143\u7d20\u548c/\u6216\u6dfb\u52a0\u65b0\u5143\u7d20\u6765\u66f4\u6539\u6570\u7ec4\u7684\u5185\u5bb9\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">var</span> myFish = [<span class="hljs-string">"angel"</span>, <span class="hljs-string">"clown"</span>, <span class="hljs-string">"mandarin"</span>, <span class="hljs-string">"sturgeon"</span>];\n\nmyFish.<span class="hljs-built_in">splice</span>(<span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-string">"drum"</span>);\n// myFish <span class="hljs-built_in">is</span> [<span class="hljs-string">"angel"</span>, <span class="hljs-string">"clown"</span>, <span class="hljs-string">"drum"</span>, <span class="hljs-string">"mandarin"</span>, <span class="hljs-string">"sturgeon"</span>]\n\nmyFish.<span class="hljs-built_in">splice</span>(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>);\n// myFish <span class="hljs-built_in">is</span> [<span class="hljs-string">"angel"</span>, <span class="hljs-string">"clown"</span>, <span class="hljs-string">"mandarin"</span>, <span class="hljs-string">"sturgeon"</span>]\n\nmyFish.<span class="hljs-built_in">splice</span>(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-string">"splice"</span>, <span class="hljs-string">"parrot"</span>);\n// myFish <span class="hljs-built_in">is</span> [<span class="hljs-string">"angel"</span>, <span class="hljs-string">"clown"</span>, <span class="hljs-string">"splice"</span>, <span class="hljs-string">"parrot"</span>, <span class="hljs-string">"sturgeon"</span>]</code></pre>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-built_in">array</span>.<span class="hljs-built_in">splice</span>(start)\n<span class="hljs-built_in">array</span>.<span class="hljs-built_in">splice</span>(start, deleteCount)\n<span class="hljs-built_in">array</span>.<span class="hljs-built_in">splice</span>(start, deleteCount, item1, item2, ...)</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>start\u200b</code> \u6307\u5b9a\u4fee\u6539\u7684\u5f00\u59cb\u4f4d\u7f6e\uff08\u4ece0\u8ba1\u6570\uff09\u3002\u5982\u679c\u8d85\u51fa\u4e86\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u5219\u4ece\u6570\u7ec4\u672b\u5c3e\u5f00\u59cb\u6dfb\u52a0\u5185\u5bb9\uff1b\u5982\u679c\u662f\u8d1f\u503c\uff0c\u5219\u8868\u793a\u4ece\u6570\u7ec4\u672b\u4f4d\u5f00\n\u59cb\u7684\u7b2c\u51e0\u4f4d\uff08\u4ece1\u8ba1\u6570\uff09\u3002</li>\n<li><code>deleteCount \u53ef\u9009</code> \u6574\u6570\uff0c\u8868\u793a\u8981\u79fb\u9664\u7684\u6570\u7ec4\u5143\u7d20\u7684\u4e2a\u6570\u3002\u5982\u679c deleteCount \u662f 0\uff0c\u5219\u4e0d\u79fb\u9664\u5143\u7d20\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u81f3\u5c11\u5e94\u6dfb\u52a0\u4e00\u4e2a\u65b0\n\u5143\u7d20\u3002\u5982\u679c deleteCount \u5927\u4e8estart \u4e4b\u540e\u7684\u5143\u7d20\u7684\u603b\u6570\uff0c\u5219\u4ece start \u540e\u9762\u7684\u5143\u7d20\u90fd\u5c06\u88ab\u5220\u9664\uff08\u542b\u7b2c start \u4f4d\uff09\u3002\u5982\u679cdeleteCount\u88ab\u7701\n\u7565\uff0c\u5219\u5176\u76f8\u5f53\u4e8e(arr.length - start)\u3002</li>\n<li><code>item1, item2, ... \u53ef\u9009</code> \u8981\u6dfb\u52a0\u8fdb\u6570\u7ec4\u7684\u5143\u7d20,\u4ecestart \u4f4d\u7f6e\u5f00\u59cb\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219 splice() \u5c06\u53ea\u5220\u9664\u6570\u7ec4\u5143\u7d20\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u7531\u88ab\u5220\u9664\u7684\u5143\u7d20\u7ec4\u6210\u7684\u4e00\u4e2a\u6570\u7ec4\u3002\u5982\u679c\u53ea\u5220\u9664\u4e86\u4e00\u4e2a\u5143\u7d20\uff0c\u5219\u8fd4\u56de\u53ea\u5305\u542b\u4e00\u4e2a\u5143\u7d20\u7684\u6570\u7ec4\u3002\u5982\u679c\u6ca1\u6709\u5220\u9664\u5143\u7d20\uff0c\u5219\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5982\u679c\u6dfb\u52a0\u8fdb\u6570\u7ec4\u7684\u5143\u7d20\u4e2a\u6570\u4e0d\u7b49\u4e8e\u88ab\u5220\u9664\u7684\u5143\u7d20\u4e2a\u6570\uff0c\u6570\u7ec4\u7684\u957f\u5ea6\u4f1a\u53d1\u751f\u76f8\u5e94\u7684\u6539\u53d8\u3002</p>\n<h2 id="\u63d0\u793a\u548c\u6ce8\u91ca">\u63d0\u793a\u548c\u6ce8\u91ca</h2>\n<p>\u6ce8\u91ca\uff1a\u8bf7\u6ce8\u610f\uff0csplice() \u65b9\u6cd5\u4e0e slice() \u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u4e0d\u540c\u7684\uff0csplice() \u65b9\u6cd5\u4f1a\u76f4\u63a5\u5bf9\u6570\u7ec4\u8fdb\u884c\u4fee\u6539\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<p>\u4f7f\u7528 splice()</p>\n<p>\u5982\u4e0b\u4ee3\u7801\u6f14\u793a\u4e86 splice \u7684\u7528\u6cd5\uff1a</p>\n<pre><code class="language-javascript">var myFish = [<span class="hljs-string">"angel"</span>, <span class="hljs-string">"clown"</span>, <span class="hljs-string">"mandarin"</span>, <span class="hljs-string">"surgeon"</span>];\n\n<span class="hljs-regexp">//</span>\u4ece\u7b2c <span class="hljs-number">2</span> \u4f4d\u5f00\u59cb\u5220\u9664 <span class="hljs-number">0</span> \u4e2a\u5143\u7d20\uff0c\u63d2\u5165 <span class="hljs-string">"drum"</span>\nvar removed = myFish.splice(<span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-string">"drum"</span>);\n<span class="hljs-regexp">//</span>\u8fd0\u7b97\u540e\u7684 myFish:[<span class="hljs-string">"angel"</span>, <span class="hljs-string">"clown"</span>, <span class="hljs-string">"drum"</span>, <span class="hljs-string">"mandarin"</span>, <span class="hljs-string">"surgeon"</span>]\n<span class="hljs-regexp">//</span>\u88ab\u5220\u9664\u5143\u7d20\u6570\u7ec4\uff1a[]\uff0c\u6ca1\u6709\u5143\u7d20\u88ab\u5220\u9664\n\n<span class="hljs-regexp">//</span>\u4ece\u7b2c <span class="hljs-number">3</span> \u4f4d\u5f00\u59cb\u5220\u9664 <span class="hljs-number">1</span> \u4e2a\u5143\u7d20\nremoved = myFish.splice(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>);\n<span class="hljs-regexp">//</span>\u8fd0\u7b97\u540e\u7684myFish\uff1a[<span class="hljs-string">"angel"</span>, <span class="hljs-string">"clown"</span>, <span class="hljs-string">"drum"</span>, <span class="hljs-string">"surgeon"</span>]\n<span class="hljs-regexp">//</span>\u88ab\u5220\u9664\u5143\u7d20\u6570\u7ec4\uff1a[<span class="hljs-string">"mandarin"</span>]\n\n<span class="hljs-regexp">//</span>\u4ece\u7b2c <span class="hljs-number">2</span> \u4f4d\u5f00\u59cb\u5220\u9664 <span class="hljs-number">1</span> \u4e2a\u5143\u7d20\uff0c\u7136\u540e\u63d2\u5165 <span class="hljs-string">"trumpet"</span>\nremoved = myFish.splice(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-string">"trumpet"</span>);\n<span class="hljs-regexp">//</span>\u8fd0\u7b97\u540e\u7684myFish: [<span class="hljs-string">"angel"</span>, <span class="hljs-string">"clown"</span>, <span class="hljs-string">"trumpet"</span>, <span class="hljs-string">"surgeon"</span>]\n<span class="hljs-regexp">//</span>\u88ab\u5220\u9664\u5143\u7d20\u6570\u7ec4\uff1a[<span class="hljs-string">"drum"</span>]\n\n<span class="hljs-regexp">//</span>\u4ece\u7b2c <span class="hljs-number">0</span> \u4f4d\u5f00\u59cb\u5220\u9664 <span class="hljs-number">2</span> \u4e2a\u5143\u7d20\uff0c\u7136\u540e\u63d2\u5165 <span class="hljs-string">"parrot"</span>, <span class="hljs-string">"anemone"</span> \u548c <span class="hljs-string">"blue"</span>\nremoved = myFish.splice(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-string">"parrot"</span>, <span class="hljs-string">"anemone"</span>, <span class="hljs-string">"blue"</span>);\n<span class="hljs-regexp">//</span>\u8fd0\u7b97\u540e\u7684myFish\uff1a[<span class="hljs-string">"parrot"</span>, <span class="hljs-string">"anemone"</span>, <span class="hljs-string">"blue"</span>, <span class="hljs-string">"trumpet"</span>, <span class="hljs-string">"surgeon"</span>]\n<span class="hljs-regexp">//</span>\u88ab\u5220\u9664\u5143\u7d20\u7684\u6570\u7ec4\uff1a[<span class="hljs-string">"angel"</span>, <span class="hljs-string">"clown"</span>]\n\n<span class="hljs-regexp">//</span>\u4ece\u7b2c <span class="hljs-number">3</span> \u4f4d\u5f00\u59cb\u5220\u9664 <span class="hljs-number">2</span> \u4e2a\u5143\u7d20\nremoved = myFish.splice(<span class="hljs-number">3</span>, Number.MAX_VALUE);\n<span class="hljs-regexp">//</span>\u8fd0\u7b97\u540e\u7684myFish: [<span class="hljs-string">"parrot"</span>, <span class="hljs-string">"anemone"</span>, <span class="hljs-string">"blue"</span>]\n<span class="hljs-regexp">//</span>\u88ab\u5220\u9664\u5143\u7d20\u7684\u6570\u7ec4\uff1a[<span class="hljs-string">"trumpet"</span>, <span class="hljs-string">"surgeon"</span>]</code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 3st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);