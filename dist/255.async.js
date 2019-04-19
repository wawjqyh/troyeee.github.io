(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[255],{Jtfa:function(t,n){t.exports='<h1 id="\u6b63\u5219\u8868\u8fbe\u5f0f">\u6b63\u5219\u8868\u8fbe\u5f0f</h1>\n<p>\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u7528\u4e8e\u5339\u914d\u5b57\u7b26\u4e32\u4e2d\u5b57\u7b26\u7ec4\u5408\u7684\u6a21\u5f0f\u3002\u5728 JavaScript\u4e2d\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u4e5f\u662f\u5bf9\u8c61\u3002\u8fd9\u4e9b\u6a21\u5f0f\u88ab\u7528\u4e8e RegExp \u7684 exec \u548c test\n\u65b9\u6cd5, \u4ee5\u53ca String \u7684 match\u3001replace\u3001search \u548c split \u65b9\u6cd5\u3002\u672c\u7ae0\u4ecb\u7ecd JavaScript\u6b63\u5219\u8868\u8fbe\u5f0f\u3002</p>\n<h2 id="\u521b\u5efa\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f">\u521b\u5efa\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f</h2>\n<p>1\u3001\u4f7f\u7528\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u5b57\u9762\u91cf\uff0c\u5176\u7531\u5305\u542b\u5728\u659c\u6760\u4e4b\u95f4\u7684\u6a21\u5f0f\u7ec4\u6210</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">const</span> regex = /ab+c/;\n\n<span class="hljs-keyword">const</span> regex = /^[a-zA-Z]+[<span class="hljs-number">0</span><span class="hljs-number">-9</span>]*\\W?_$/gi;</code></pre>\n<p>\u5728\u52a0\u8f7d\u811a\u672c\u540e\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u5b57\u9762\u503c\u63d0\u4f9b\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u7f16\u8bd1\u3002\u5f53\u6b63\u5219\u8868\u8fbe\u5f0f\u4fdd\u6301\u4e0d\u53d8\u65f6\uff0c\u4f7f\u7528\u6b64\u65b9\u6cd5\u53ef\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002</p>\n<p>\u8c03\u7528RegExp\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">let</span> regex = <span class="hljs-keyword">new</span> <span class="hljs-constructor">RegExp(<span class="hljs-string">"ab+c"</span>)</span>;\n\n<span class="hljs-keyword">let</span> regex = <span class="hljs-keyword">new</span> <span class="hljs-constructor">RegExp(<span class="hljs-operator">/</span>^[<span class="hljs-params">a</span>-<span class="hljs-params">zA</span>-Z]+[0-9]<span class="hljs-operator">*</span>\\W?<span class="hljs-params">_$</span>, <span class="hljs-string">"gi"</span>)</span>;\n\n<span class="hljs-keyword">let</span> regex = <span class="hljs-keyword">new</span> <span class="hljs-constructor">RegExp(<span class="hljs-string">"^[a-zA-Z]+[0-9]*\\W?_$"</span>, <span class="hljs-string">"gi"</span>)</span>;</code></pre>\n<p>\u4f7f\u7528\u6784\u9020\u51fd\u6570\u63d0\u4f9b\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8fd0\u884c\u65f6\u7f16\u8bd1\u3002\u4f7f\u7528\u6784\u9020\u51fd\u6570\uff0c\u5f53\u4f60\u77e5\u9053\u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5f0f\u5c06\u4f1a\u6539\u53d8\uff0c\u6216\u8005\u4f60\u4e0d\u77e5\u9053\u6a21\u5f0f\uff0c\u5e76\u4ece\u53e6\u4e00\u4e2a\u6765\u6e90\uff0c\u5982\u7528\u6237\u8f93\u5165\u3002</p>\n<h2 id="\u7279\u6b8a\u5b57\u7b26">\u7279\u6b8a\u5b57\u7b26</h2>\n<table>\n<thead>\n<tr>\n<th align="left">\u5b57\u7b26</th>\n<th align="left">\u542b\u4e49</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>^</code></td>\n<td align="left">\u5339\u914d\u8f93\u5165\u7684\u5f00\u59cb</td>\n</tr>\n<tr>\n<td align="left"><code>$</code></td>\n<td align="left">\u5339\u914d\u8f93\u5165\u7684\u7ed3\u675f</td>\n</tr>\n<tr>\n<td align="left"><code>*</code></td>\n<td align="left">\u5339\u914d\u524d\u4e00\u4e2a\u8868\u8fbe\u5f0f0\u6b21\u6216\u591a\u6b21\u3002\u7b49\u4ef7\u4e8e {0,}</td>\n</tr>\n<tr>\n<td align="left"><code>+</code></td>\n<td align="left">\u5339\u914d\u524d\u9762\u4e00\u4e2a\u8868\u8fbe\u5f0f1\u6b21\u6216\u8005\u591a\u6b21\u3002\u7b49\u4ef7\u4e8e {1,}</td>\n</tr>\n<tr>\n<td align="left"><code>?</code></td>\n<td align="left">\u5339\u914d\u524d\u9762\u4e00\u4e2a\u8868\u8fbe\u5f0f0\u6b21\u6216\u80051\u6b21\u3002\u7b49\u4ef7\u4e8e {0,1}</td>\n</tr>\n<tr>\n<td align="left"><code>.</code></td>\n<td align="left">\uff08\u5c0f\u6570\u70b9\uff09\u5339\u914d\u9664\u6362\u884c\u7b26\u4e4b\u5916\u7684\u4efb\u4f55\u5355\u4e2a\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left"><code>(x)</code></td>\n<td align="left">\u5339\u914d &#39;x&#39; \u5e76\u4e14\u8bb0\u4f4f\u5339\u914d\u9879\uff0c\u62ec\u53f7\u88ab\u79f0\u4e3a<code>\u6355\u83b7\u62ec\u53f7</code></td>\n</tr>\n<tr>\n<td align="left"><code>(?:x)</code></td>\n<td align="left">\u5339\u914d &#39;x&#39; \u4f46\u662f\u4e0d\u8bb0\u4f4f\u5339\u914d\u9879</td>\n</tr>\n<tr>\n<td align="left"><code>x(?=y)</code></td>\n<td align="left">\u5339\u914d&#39;x&#39;\u4ec5\u4ec5\u5f53&#39;x&#39;\u540e\u9762\u8ddf\u7740&#39;y&#39;.\u8fd9\u79cd\u53eb\u505a\u6b63\u5411\u80af\u5b9a\u67e5\u627e</td>\n</tr>\n<tr>\n<td align="left"><code>x(?!y)</code></td>\n<td align="left">\u5339\u914d&#39;x&#39;\u4ec5\u4ec5\u5f53&#39;x&#39;\u540e\u9762\u4e0d\u8ddf\u7740&#39;y&#39;,\u8fd9\u4e2a\u53eb\u505a\u6b63\u5411\u5426\u5b9a\u67e5\u627e</td>\n</tr>\n<tr>\n<td align="left"><code>x\u4e28y</code></td>\n<td align="left">\u5339\u914d\u2018x\u2019\u6216\u8005\u2018y\u2019</td>\n</tr>\n<tr>\n<td align="left"><code>{n}</code></td>\n<td align="left">n\u662f\u4e00\u4e2a\u6b63\u6574\u6570\uff0c\u5339\u914d\u4e86\u524d\u9762\u4e00\u4e2a\u5b57\u7b26\u521a\u597d\u53d1\u751f\u4e86n\u6b21</td>\n</tr>\n<tr>\n<td align="left"><code>{n,m}</code></td>\n<td align="left">n \u548c m \u90fd\u662f\u6b63\u6574\u6570\u3002\u5339\u914d\u524d\u9762\u7684\u5b57\u7b26\u81f3\u5c11n\u6b21\uff0c\u6700\u591am\u6b21</td>\n</tr>\n<tr>\n<td align="left"><code>[xyz]</code></td>\n<td align="left">\u5339\u914d\u65b9\u62ec\u53f7\u7684\u4e2d\u4efb\u610f\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left"><code>[^xyz]</code></td>\n<td align="left">\u5339\u914d\u4efb\u4f55\u6ca1\u6709\u5305\u542b\u5728\u65b9\u62ec\u53f7\u4e2d\u7684\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left"><code>[\\b]</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u9000\u683c(U+0008)</td>\n</tr>\n<tr>\n<td align="left"><code>\\b</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u8bcd\u7684\u8fb9\u754c</td>\n</tr>\n<tr>\n<td align="left"><code>\\B</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u975e\u5355\u8bcd\u8fb9\u754c</td>\n</tr>\n<tr>\n<td align="left"><code>\\cX</code></td>\n<td align="left">\u5f53X\u662f\u5904\u4e8eA\u5230Z\u4e4b\u95f4\u7684\u5b57\u7b26\u7684\u65f6\u5019\uff0c\u5339\u914d\u5b57\u7b26\u4e32\u4e2d\u7684\u4e00\u4e2a\u63a7\u5236\u7b26</td>\n</tr>\n<tr>\n<td align="left"><code>\\d</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u6570\u5b57</td>\n</tr>\n<tr>\n<td align="left"><code>\\D</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u975e\u6570\u5b57\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left"><code>\\f</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u6362\u9875\u7b26 (U+000C)</td>\n</tr>\n<tr>\n<td align="left"><code>\\n</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u6362\u884c\u7b26 (U+000A)</td>\n</tr>\n<tr>\n<td align="left"><code>\\r</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u56de\u8f66\u7b26 (U+000D)</td>\n</tr>\n<tr>\n<td align="left"><code>\\s</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u7a7a\u767d\u5b57\u7b26\uff0c\u5305\u62ec\u7a7a\u683c\u3001\u5236\u8868\u7b26\u3001\u6362\u9875\u7b26\u548c\u6362\u884c\u7b26</td>\n</tr>\n<tr>\n<td align="left"><code>\\S</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u975e\u7a7a\u767d\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left"><code>\\t</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u6c34\u5e73\u5236\u8868\u7b26 (U+0009)</td>\n</tr>\n<tr>\n<td align="left"><code>\\v</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u5782\u76f4\u5236\u8868\u7b26 (U+000B)</td>\n</tr>\n<tr>\n<td align="left"><code>\\w</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u5355\u5b57\u5b57\u7b26\uff08\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u8005\u4e0b\u5212\u7ebf\uff09</td>\n</tr>\n<tr>\n<td align="left"><code>\\W</code></td>\n<td align="left">\u5339\u914d\u4e00\u4e2a\u975e\u5355\u5b57\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left"><code>\\n</code></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"><code>\\0</code></td>\n<td align="left">\u5339\u914d NULL (U+0000) \u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left"><code>\\xhh</code></td>\n<td align="left">\u4e0e\u4ee3\u7801 hh \u5339\u914d\u5b57\u7b26\uff08\u4e24\u4e2a\u5341\u516d\u8fdb\u5236\u6570\u5b57\uff09</td>\n</tr>\n<tr>\n<td align="left"><code>\\uhhhh</code></td>\n<td align="left">\u4e0e\u4ee3\u7801 hhhh \u5339\u914d\u5b57\u7b26\uff08\u56db\u4e2a\u5341\u516d\u8fdb\u5236\u6570\u5b57\uff09</td>\n</tr>\n</tbody></table>\n<h4 id="">^</h4>\n<p><code>\u5339\u914d\u8f93\u5165\u7684\u5f00\u59cb\u3002\u5982\u679c\u591a\u884c\u6807\u5fd7\u88ab\u8bbe\u7f6e\u4e3atrue\uff0c\u90a3\u4e48\u4e5f\u5339\u914d\u6362\u884c\u7b26\u540e\u7d27\u8ddf\u7684\u4f4d\u7f6e</code></p>\n<p>\u4f8b\u5982\uff0c/^A/ \u5e76\u4e0d\u4f1a\u5339\u914d &quot;an A&quot; \u4e2d\u7684 &#39;A&#39;\uff0c\u4f46\u662f\u4f1a\u5339\u914d &quot;An E&quot; \u4e2d\u7684 &#39;A&#39;</p>\n<h4 id="-1">$</h4>\n<p><code>\u5339\u914d\u8f93\u5165\u7684\u7ed3\u675f\u3002\u5982\u679c\u591a\u884c\u6807\u793a\u88ab\u8bbe\u7f6e\u4e3atrue\uff0c\u90a3\u4e48\u4e5f\u5339\u914d\u6362\u884c\u7b26\u524d\u7684\u4f4d\u7f6e</code></p>\n<p>\u4f8b\u5982\uff0c/t$/ \u5e76\u4e0d\u4f1a\u5339\u914d &quot;eater&quot; \u4e2d\u7684 &#39;t&#39;\uff0c\u4f46\u662f\u4f1a\u5339\u914d &quot;eat&quot; \u4e2d\u7684 &#39;t&#39;</p>\n<h4 id="-2">*</h4>\n<p><code>\u5339\u914d\u524d\u4e00\u4e2a\u8868\u8fbe\u5f0f0\u6b21\u6216\u591a\u6b21\u3002\u7b49\u4ef7\u4e8e {0,}</code></p>\n<p>\u4f8b\u5982\uff0c/bo*/\u4f1a\u5339\u914d &quot;A ghost boooooed&quot; \u4e2d\u7684 &#39;booooo&#39; \u548c &quot;A bird warbled&quot; \u4e2d\u7684 &#39;b&#39;\uff0c\u4f46\u662f\u5728 &quot;A goat grunted&quot; \u4e2d\u5c06\u4e0d\u4f1a\u5339\u914d\u4efb\u4f55\u4e1c\u897f</p>\n<h4 id="-3">+</h4>\n<p><code>\u5339\u914d\u524d\u9762\u4e00\u4e2a\u8868\u8fbe\u5f0f1\u6b21\u6216\u8005\u591a\u6b21\u3002\u7b49\u4ef7\u4e8e {1,}</code></p>\n<p>\u4f8b\u5982\uff0c/a+/\u5339\u914d\u4e86\u5728 &quot;candy&quot; \u4e2d\u7684 &#39;a&#39;\uff0c\u548c\u5728 &quot;caaaaaaandy&quot; \u4e2d\u6240\u6709\u7684 &#39;a&#39;</p>\n<h4 id="-4">?</h4>\n<p><code>\u5339\u914d\u524d\u9762\u4e00\u4e2a\u8868\u8fbe\u5f0f0\u6b21\u6216\u80051\u6b21\u3002\u7b49\u4ef7\u4e8e {0,1}</code></p>\n<p>\u4f8b\u5982\uff0c/e?le?/ \u5339\u914d &quot;angel&quot; \u4e2d\u7684 &#39;el&#39;\uff0c\u548c &quot;angle&quot; \u4e2d\u7684 &#39;le&#39; \u4ee5\u53ca&quot;oslo&#39; \u4e2d\u7684&#39;l&#39;\u3002</p>\n<p>\u5982\u679c\u7d27\u8ddf\u5728\u4efb\u4f55\u91cf\u8bcd *\u3001 +\u3001? \u6216 {} \u7684\u540e\u9762\uff0c\u5c06<code>\u4f1a\u4f7f\u91cf\u8bcd\u53d8\u4e3a\u975e\u8d2a\u5a6a\u7684</code>\uff08\u5339\u914d\u5c3d\u91cf\u5c11\u7684\u5b57\u7b26\uff09\uff0c\u548c\u7f3a\u7701\u4f7f\u7528\u7684\u8d2a\u5a6a\u6a21\u5f0f\uff08\u5339\u914d\u5c3d\u53ef\u80fd\u591a\u7684\u5b57\u7b26\uff09\u6b63\u597d\u76f8\u53cd\u3002</p>\n<p>\u4f8b\u5982\uff0c\u5bf9 &quot;123abc&quot; \u5e94\u7528 /\\d+/ \u5c06\u4f1a\u8fd4\u56de &quot;123&quot;\uff0c\u5982\u679c\u4f7f\u7528 /\\d+?/,\u90a3\u4e48\u5c31\u53ea\u4f1a\u5339\u914d\u5230 &quot;1&quot;</p>\n<h4 id="-5">.</h4>\n<p><code>\uff08\u5c0f\u6570\u70b9\uff09\u5339\u914d\u9664\u6362\u884c\u7b26\u4e4b\u5916\u7684\u4efb\u4f55\u5355\u4e2a\u5b57\u7b26</code></p>\n<p>\u4f8b\u5982\uff0c/.n/\u5c06\u4f1a\u5339\u914d &quot;nay, an apple is on the tree&quot; \u4e2d\u7684 &#39;an&#39; \u548c &#39;on&#39;\uff0c\u4f46\u662f\u4e0d\u4f1a\u5339\u914d &#39;nay&#39;</p>\n<h4 id="x">(x)</h4>\n<p><code>\u5339\u914d &#39;x&#39; \u5e76\u4e14\u8bb0\u4f4f\u5339\u914d\u9879\uff0c\u5c31\u50cf\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u7684\u90a3\u6837\u3002\u62ec\u53f7\u88ab\u79f0\u4e3a \u6355\u83b7\u62ec\u53f7</code></p>\n<p>\u6a21\u5f0f /(foo) (bar) \\1 \\2/ \u4e2d\u7684 &#39;(foo)&#39; \u548c &#39;(bar)&#39; \u5339\u914d\u5e76\u8bb0\u4f4f\u5b57\u7b26\u4e32 &quot;foo bar foo bar&quot; \u4e2d\u524d\u4e24\u4e2a\u5355\u8bcd\u3002\u6a21\u5f0f\u4e2d\u7684 \\1 \u548c \\2 \u5339\u914d\n\u5b57\u7b26\u4e32\u7684\u540e\u4e24\u4e2a\u5355\u8bcd\u3002\u6ce8\u610f \\1\u3001\\2\u3001\\n \u662f\u7528\u5728\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5339\u914d\u73af\u8282\u3002\u5728\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u66ff\u6362\u73af\u8282\uff0c\u5219\u8981\u4f7f\u7528\u50cf $1\u3001$2\u3001$n \u8fd9\u6837\u7684\u8bed\u6cd5</p>\n<p>\u4f8b\u5982\uff0c&#39;bar foo&#39;.replace( /(...) (...)/, &#39;$2 $1&#39; )</p>\n<h4 id="x-1">(?:x)</h4>\n<p><code>\u5339\u914d &#39;x&#39; \u4f46\u662f\u4e0d\u8bb0\u4f4f\u5339\u914d\u9879</code></p>\n<p>\u8fd9\u79cd\u53eb\u4f5c\u975e\u6355\u83b7\u62ec\u53f7\uff0c\u4f7f\u5f97\u4f60\u80fd\u591f\u5b9a\u4e49\u4e3a\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u8fd0\u7b97\u7b26\u4e00\u8d77\u4f7f\u7528\u7684\u5b50\u8868\u8fbe\u5f0f\u3002\u6765\u770b\u793a\u4f8b\u8868\u8fbe\u5f0f /(?:foo){1,2}/\u3002\u5982\u679c\u8868\u8fbe\u5f0f\u662f\n/foo{1,2}/\uff0c{1,2}\u5c06\u53ea\u5bf9 \u2018foo\u2019 \u7684\u6700\u540e\u4e00\u4e2a\u5b57\u7b26 \u2019o\u2018 \u751f\u6548\u3002\u5982\u679c\u4f7f\u7528\u975e\u6355\u83b7\u62ec\u53f7\uff0c\u5219{1,2}\u4f1a\u5339\u914d\u6574\u4e2a \u2018foo\u2019 \u5355\u8bcd</p>\n<h4 id="xy">x(?=y)</h4>\n<p><code>\u5339\u914d&#39;x&#39;\u4ec5\u4ec5\u5f53&#39;x&#39;\u540e\u9762\u8ddf\u7740&#39;y&#39;.\u8fd9\u79cd\u53eb\u505a\u6b63\u5411\u80af\u5b9a\u67e5\u627e</code></p>\n<p>\u4f8b\u5982\uff0c/Jack(?=Sprat)/\u4f1a\u5339\u914d\u5230&#39;Jack&#39;\u4ec5\u4ec5\u5f53\u5b83\u540e\u9762\u8ddf\u7740&#39;Sprat&#39;\u3002/Jack(?=Sprat|Frost)/\u5339\u914d\u2018Jack\u2019\u4ec5\u4ec5\u5f53\u5b83\u540e\u9762\u8ddf\u7740&#39;Sprat&#39;\u6216\u8005\u662f\n\u2018Frost\u2019\u3002\u4f46\u662f\u2018Sprat\u2019\u548c\u2018Frost\u2019\u90fd\u4e0d\u662f\u5339\u914d\u7ed3\u679c\u7684\u4e00\u90e8\u5206</p>\n<h4 id="xy-1">x(?!y)</h4>\n<p><code>\u5339\u914d&#39;x&#39;\u4ec5\u4ec5\u5f53&#39;x&#39;\u540e\u9762\u4e0d\u8ddf\u7740&#39;y&#39;,\u8fd9\u4e2a\u53eb\u505a\u6b63\u5411\u5426\u5b9a\u67e5\u627e</code></p>\n<p>\u4f8b\u5982\uff0c/\\d+(?!.)/\u5339\u914d\u4e00\u4e2a\u6570\u5b57\u4ec5\u4ec5\u5f53\u8fd9\u4e2a\u6570\u5b57\u540e\u9762\u6ca1\u6709\u8ddf\u5c0f\u6570\u70b9\u7684\u65f6\u5019\u3002\u6b63\u5219\u8868\u8fbe\u5f0f/\\d+(?!.)/.exec(&quot;3.141&quot;)\u5339\u914d\u2018141\u2019\u4f46\u662f\u4e0d\u662f\u20183.141\u2019</p>\n<h4 id="xy-2">x|y</h4>\n<p><code>\u5339\u914d\u2018x\u2019\u6216\u8005\u2018y\u2019</code></p>\n<p>\u4f8b\u5982\uff0c/green|red/\u5339\u914d\u201cgreen apple\u201d\u4e2d\u7684\u2018green\u2019\u548c\u201cred apple\u201d\u4e2d\u7684\u2018red\u2019</p>\n<h4 id="n">{n}</h4>\n<p><code>n\u662f\u4e00\u4e2a\u6b63\u6574\u6570\uff0c\u5339\u914d\u4e86\u524d\u9762\u4e00\u4e2a\u5b57\u7b26\u521a\u597d\u53d1\u751f\u4e86n\u6b21</code></p>\n<p>\u6bd4\u5982\uff0c/a{2}/\u4e0d\u4f1a\u5339\u914d\u201ccandy\u201d\u4e2d\u7684&#39;a&#39;,\u4f46\u662f\u4f1a\u5339\u914d\u201ccaandy\u201d\u4e2d\u6240\u6709\u7684a\uff0c\u4ee5\u53ca\u201ccaaandy\u201d\u4e2d\u7684\u524d\u4e24\u4e2a&#39;a&#39;</p>\n<h4 id="nm">{n,m}</h4>\n<p><code>n \u548c m \u90fd\u662f\u6b63\u6574\u6570\u3002\u5339\u914d\u524d\u9762\u7684\u5b57\u7b26\u81f3\u5c11n\u6b21\uff0c\u6700\u591am\u6b21\u3002\u5982\u679c n \u6216\u8005 m \u7684\u503c\u662f0\uff0c \u8fd9\u4e2a\u503c\u88ab\u5ffd\u7565</code></p>\n<p>\u4f8b\u5982\uff0c/a{1, 3}/ \u5e76\u4e0d\u5339\u914d\u201ccndy\u201d\u4e2d\u5f97\u4efb\u610f\u5b57\u7b26\uff0c\u5339\u914d\u201ccandy\u201d\u4e2d\u5f97a\uff0c\u5339\u914d\u201ccaandy\u201d\u4e2d\u5f97\u524d\u4e24\u4e2aa\uff0c\u4e5f\u5339\u914d\u201ccaaaaaaandy\u201d\u4e2d\u5f97\u524d\u4e09\u4e2aa\u3002</p>\n<p>\u6ce8\u610f\uff0c\u5f53\u5339\u914d\u201dcaaaaaaandy\u201c\u65f6\uff0c\u5339\u914d\u7684\u503c\u662f\u201caaa\u201d\uff0c\u5373\u4f7f\u539f\u59cb\u7684\u5b57\u7b26\u4e32\u4e2d\u6709\u66f4\u591a\u7684a</p>\n<h4 id="xyz">[xyz]</h4>\n<p><code>\u4e00\u4e2a\u5b57\u7b26\u96c6\u5408\u3002\u5339\u914d\u65b9\u62ec\u53f7\u7684\u4e2d\u4efb\u610f\u5b57\u7b26\uff0c\u5305\u62ec\u8f6c\u4e49\u5e8f\u5217\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u7834\u6298\u53f7\uff08-\uff09\u6765\u6307\u5b9a\u4e00\u4e2a\u5b57\u7b26\u8303\u56f4\u3002\u5bf9\u4e8e\u70b9\uff08.\uff09\u548c\u661f\u53f7\uff08*\uff09\u8fd9\u6837\n\u7684\u7279\u6b8a\u7b26\u53f7\u5728\u4e00\u4e2a\u5b57\u7b26\u96c6\u4e2d\u6ca1\u6709\u7279\u6b8a\u7684\u610f\u4e49\u3002\u4ed6\u4eec\u4e0d\u5fc5\u8fdb\u884c\u8f6c\u4e49\uff0c\u4e0d\u8fc7\u8f6c\u4e49\u4e5f\u662f\u8d77\u4f5c\u7528\u7684</code></p>\n<p>\u4f8b\u5982\uff0c[abcd] \u548c[a-d]\u662f\u4e00\u6837\u7684\u3002\u4ed6\u4eec\u90fd\u5339\u914d&quot;brisket&quot;\u4e2d\u5f97\u2018b\u2019,\u4e5f\u90fd\u5339\u914d\u201ccity\u201d\u4e2d\u7684\u2018c\u2019\u3002/[a-z.]+/ \u548c/[\\w.]+/\u90fd\u5339\u914d\u201ctest.i.ng\u201d\u4e2d\u5f97\u6240\u6709\u5b57\u7b26</p>\n<h4 id="xyz-1">[^xyz]</h4>\n<p><code>\u4e00\u4e2a\u53cd\u5411\u5b57\u7b26\u96c6\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c \u5b83\u5339\u914d\u4efb\u4f55\u6ca1\u6709\u5305\u542b\u5728\u65b9\u62ec\u53f7\u4e2d\u7684\u5b57\u7b26\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u7834\u6298\u53f7\uff08-\uff09\u6765\u6307\u5b9a\u4e00\u4e2a\u5b57\u7b26\u8303\u56f4\u3002\u4efb\u4f55\u666e\u901a\u5b57\u7b26\u5728\u8fd9\u91cc\u90fd\u662f\u8d77\u4f5c\u7528\u7684</code></p>\n<p>\u4f8b\u5982\uff0c[^abc] \u548c [^a-c] \u662f\u4e00\u6837\u7684\u3002\u4ed6\u4eec\u5339\u914d&quot;brisket&quot;\u4e2d\u5f97\u2018r\u2019\uff0c\u4e5f\u5339\u914d\u201cchop\u201d\u4e2d\u7684\u2018h\u2019</p>\n<h4 id="b">[\\b]</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u9000\u683c(U+0008)\u3002\uff08\u4e0d\u8981\u548c\\b\u6df7\u6dc6\u4e86\uff09</code></p>\n<h4 id="b-1">\\b</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u8bcd\u7684\u8fb9\u754c</code></p>\n<p>\u4e00\u4e2a\u8bcd\u7684\u8fb9\u754c\u5c31\u662f\u4e00\u4e2a\u8bcd\u4e0d\u88ab\u53e6\u5916\u4e00\u4e2a\u8bcd\u8ddf\u968f\u7684\u4f4d\u7f6e\u6216\u8005\u4e0d\u662f\u53e6\u4e00\u4e2a\u8bcd\u6c47\u5b57\u7b26\u524d\u8fb9\u7684\u4f4d\u7f6e\u3002\u6ce8\u610f\uff0c\u4e00\u4e2a\u5339\u914d\u7684\u8bcd\u7684\u8fb9\u754c\u5e76\u4e0d\u5305\u542b\u5728\u5339\u914d\u7684\u5185\u5bb9\u4e2d\u3002\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u4e00\u4e2a\u5339\u914d\u7684\u8bcd\u7684\u8fb9\u754c\u7684\u5185\u5bb9\u7684\u957f\u5ea6\u662f0\u3002\uff08\u4e0d\u8981\u548c[\\b]\u6df7\u6dc6\u4e86\uff09</p>\n<p>\u4f8b\u5b50\uff1a</p>\n<p>/\\bm/\u5339\u914d\u201cmoon\u201d\u4e2d\u5f97\u2018m\u2019\uff1b</p>\n<p>/oo\\b/\u5e76\u4e0d\u5339\u914d&quot;moon&quot;\u4e2d\u5f97&#39;oo&#39;\uff0c\u56e0\u4e3a&#39;oo&#39;\u88ab\u4e00\u4e2a\u8bcd\u6c47\u5b57\u7b26&#39;n&#39;\u7d27\u8ddf\u7740\u3002</p>\n<p>/oon\\b/\u5339\u914d&quot;moon&quot;\u4e2d\u5f97&#39;oon&#39;\uff0c\u56e0\u4e3a&#39;oon&#39;\u662f\u8fd9\u4e2a\u5b57\u7b26\u4e32\u7684\u7ed3\u675f\u90e8\u5206\u3002\u8fd9\u6837\u4ed6\u6ca1\u6709\u88ab\u4e00\u4e2a\u8bcd\u6c47\u5b57\u7b26\u7d27\u8ddf\u7740\u3002</p>\n<p>/\\w\\b\\w/\u5c06\u4e0d\u80fd\u5339\u914d\u4efb\u4f55\u5b57\u7b26\u4e32\uff0c\u56e0\u4e3a\u4e00\u4e2a\u5355\u8bcd\u4e2d\u7684\u5b57\u7b26\u6c38\u8fdc\u4e5f\u4e0d\u53ef\u80fd\u88ab\u4e00\u4e2a\u975e\u8bcd\u6c47\u5b57\u7b26\u548c\u4e00\u4e2a\u8bcd\u6c47\u5b57\u7b26\u540c\u65f6\u7d27\u8ddf\u7740\u3002</p>\n<p><code>\u6ce8\u610f: JavaScript\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5f15\u64ce\u5c06\u7279\u5b9a\u7684\u5b57\u7b26\u96c6\u5b9a\u4e49\u4e3a\u201c\u5b57\u201d\u5b57\u7b26\u3002\u4e0d\u5728\u8be5\u96c6\u5408\u4e2d\u7684\u4efb\u4f55\u5b57\u7b26\u90fd\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u65ad\u8bcd\u3002\u8fd9\u7ec4\u5b57\u7b26\u76f8\u5f53\u6709\u9650\uff1a\n\u5b83\u53ea\u5305\u62ec\u5927\u5199\u548c\u5c0f\u5199\u7684\u7f57\u9a6c\u5b57\u6bcd\uff0c\u5c0f\u6570\u4f4d\u6570\u548c\u4e0b\u5212\u7ebf\u5b57\u7b26\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u91cd\u8981\u7684\u5b57\u7b26\uff0c\u4f8b\u5982\u201c\xe9\u201d\u6216\u201c\xfc\u201d\uff0c\u88ab\u89c6\u4e3a\u65ad\u8bcd</code></p>\n<h4 id="b-2">\\B</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u975e\u5355\u8bcd\u8fb9\u754c</code></p>\n<p>\u4ed6\u5339\u914d\u4e00\u4e2a\u524d\u540e\u5b57\u7b26\u90fd\u662f\u76f8\u540c\u7c7b\u578b\u7684\u4f4d\u7f6e\uff1a\u90fd\u662f\u5355\u8bcd\u6216\u8005\u90fd\u4e0d\u662f\u5355\u8bcd\u3002\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u5f00\u59cb\u548c\u7ed3\u5c3e\u90fd\u88ab\u8ba4\u4e3a\u662f\u975e\u5355\u8bcd\u3002</p>\n<p>\u4f8b\u5982\uff0c/\\B../\u5339\u914d&quot;noonday&quot;\u4e2d\u5f97&#39;oo&#39;, \u800c/y\\B./\u5339\u914d&quot;possibly yesterday&quot;\u4e2d\u5f97\u2019ye\u2018</p>\n<h4 id="cx">\\cX</h4>\n<p><code>\u5f53X\u662f\u5904\u4e8eA\u5230Z\u4e4b\u95f4\u7684\u5b57\u7b26\u7684\u65f6\u5019\uff0c\u5339\u914d\u5b57\u7b26\u4e32\u4e2d\u7684\u4e00\u4e2a\u63a7\u5236\u7b26</code></p>\n<p>\u4f8b\u5982\uff0c/\\cM/ \u5339\u914d\u5b57\u7b26\u4e32\u4e2d\u7684 control-M (U+000D)</p>\n<h4 id="d">\\d</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u6570\u5b57</code></p>\n<p>\u7b49\u4ef7\u4e8e[0-9]</p>\n<p>\u4f8b\u5982\uff0c /\\d/ \u6216\u8005 /[0-9]/ \u5339\u914d&quot;B2 is the suite number.&quot;\u4e2d\u7684&#39;2&#39;</p>\n<h4 id="d-1">\\D</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u975e\u6570\u5b57\u5b57\u7b26</code></p>\n<p>\u7b49\u4ef7\u4e8e[^0-9]\u3002</p>\n<p>\u4f8b\u5982\uff0c /\\D/ \u6216\u8005 /[^0-9]/ \u5339\u914d&quot;B2 is the suite number.&quot;\u4e2d\u7684&#39;B&#39;</p>\n<h4 id="f">\\f</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u6362\u9875\u7b26 (U+000C)</code></p>\n<h4 id="n-1">\\n</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u6362\u884c\u7b26 (U+000A)</code></p>\n<h4 id="r">\\r</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u56de\u8f66\u7b26 (U+000D)</code></p>\n<h4 id="s">\\s</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u7a7a\u767d\u5b57\u7b26\uff0c\u5305\u62ec\u7a7a\u683c\u3001\u5236\u8868\u7b26\u3001\u6362\u9875\u7b26\u548c\u6362\u884c\u7b26</code></p>\n<p>\u7b49\u4ef7\u4e8e[ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]\u3002</p>\n<p>\u4f8b\u5982, /\\s\\w*/ \u5339\u914d&quot;foo bar.&quot;\u4e2d\u7684&#39; bar&#39;</p>\n<h4 id="s-1">\\S</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u975e\u7a7a\u767d\u5b57\u7b26</code></p>\n<p>\u7b49\u4ef7\u4e8e[^ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]\u3002</p>\n<p>\u4f8b\u5982\uff0c /\\S\\w*/ \u5339\u914d&quot;foo bar.&quot;\u4e2d\u7684&#39;foo&#39;</p>\n<h4 id="t">\\t</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u6c34\u5e73\u5236\u8868\u7b26 (U+0009)</code></p>\n<h4 id="v">\\v</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u5782\u76f4\u5236\u8868\u7b26 (U+000B)</code></p>\n<h4 id="w">\\w</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u5355\u5b57\u5b57\u7b26\uff08\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u8005\u4e0b\u5212\u7ebf\uff09</code></p>\n<p>\u7b49\u4ef7\u4e8e[A-Za-z0-9_]\u3002</p>\n<p>\u4f8b\u5982, /\\w/ \u5339\u914d &quot;apple,&quot; \u4e2d\u7684 &#39;a&#39;\uff0c&quot;$5.28,&quot;\u4e2d\u7684 &#39;5&#39; \u548c &quot;3D.&quot; \u4e2d\u7684 &#39;3&#39;</p>\n<h4 id="w-1">\\W</h4>\n<p><code>\u5339\u914d\u4e00\u4e2a\u975e\u5355\u5b57\u5b57\u7b26</code></p>\n<p>\u7b49\u4ef7\u4e8e[^A-Za-z0-9_]</p>\n<p>\u4f8b\u5982, /\\W/ \u6216\u8005 /[^A-Za-z0-9_]/ \u5339\u914d &quot;50%.&quot; \u4e2d\u7684 &#39;%&#39;</p>\n<h4 id="n-2">\\n</h4>\n<p><code>\u5f53 n \u662f\u4e00\u4e2a\u6b63\u6574\u6570\uff0c\u4e00\u4e2a\u8fd4\u56de\u5f15\u7528\u5230\u6700\u540e\u4e00\u4e2a\u4e0e\u6709n\u63d2\u5165\u7684\u6b63\u503c\u8868\u8fbe\u5f0f(counting left parentheses)\u5339\u914d\u7684\u526f\u5b57\u7b26\u4e32</code></p>\n<p>\u6bd4\u5982 /apple(,)\\sorange\\1/ \u5339\u914d&quot;apple, orange, cherry, peach.&quot;\u4e2d\u7684&#39;apple, orange,&#39;</p>\n<h4 id="0">\\0</h4>\n<p><code>\u5339\u914d NULL (U+0000) \u5b57\u7b26</code></p>\n<p>\u4e0d\u8981\u5728\u8fd9\u540e\u9762\u8ddf\u5176\u5b83\u5c0f\u6570\uff0c\u56e0\u4e3a \\0<digits> \u662f\u4e00\u4e2a\u516b\u8fdb\u5236\u8f6c\u4e49\u5e8f\u5217</p>\n<h4 id="xhh">\\xhh</h4>\n<p><code>\u4e0e\u4ee3\u7801 hh \u5339\u914d\u5b57\u7b26\uff08\u4e24\u4e2a\u5341\u516d\u8fdb\u5236\u6570\u5b57\uff09</code></p>\n<h4 id="uhhhh">\\uhhhh</h4>\n<p><code>\u4e0e\u4ee3\u7801 hhhh \u5339\u914d\u5b57\u7b26\uff08\u56db\u4e2a\u5341\u516d\u8fdb\u5236\u6570\u5b57\uff09</code></p>\n<h2 id="\u7528\u6cd5">\u7528\u6cd5</h2>\n<h3 id="\u4fee\u9970\u7b26">\u4fee\u9970\u7b26</h3>\n<table>\n<thead>\n<tr>\n<th align="left">\u4fee\u9970\u7b26</th>\n<th align="left">\u63cf\u8ff0</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">i</td>\n<td align="left">\u6267\u884c\u5bf9\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u7684\u5339\u914d</td>\n</tr>\n<tr>\n<td align="left">g</td>\n<td align="left">\u6267\u884c\u5168\u5c40\u5339\u914d\uff08\u67e5\u627e\u6240\u6709\u5339\u914d\u800c\u975e\u5728\u627e\u5230\u7b2c\u4e00\u4e2a\u5339\u914d\u540e\u505c\u6b62\uff09</td>\n</tr>\n<tr>\n<td align="left">m</td>\n<td align="left">\u6267\u884c\u591a\u884c\u5339\u914d</td>\n</tr>\n</tbody></table>\n<h3 id="\u65b9\u62ec\u53f7">\u65b9\u62ec\u53f7</h3>\n<p>\u65b9\u62ec\u53f7\u7528\u4e8e\u67e5\u627e\u67d0\u4e2a\u8303\u56f4\u5185\u7684\u5b57\u7b26</p>\n<table>\n<thead>\n<tr>\n<th align="left">\u8868\u8fbe\u5f0f</th>\n<th align="left">\u63cf\u8ff0</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">[abc]</td>\n<td align="left">\u67e5\u627e\u65b9\u62ec\u53f7\u4e4b\u95f4\u7684\u4efb\u4f55\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">[^abc]</td>\n<td align="left">\u67e5\u627e\u4efb\u4f55\u4e0d\u5728\u65b9\u62ec\u53f7\u4e4b\u95f4\u7684\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">[0-9]</td>\n<td align="left">\u67e5\u627e\u4efb\u4f55\u4ece 0 \u81f3 9 \u7684\u6570\u5b57</td>\n</tr>\n<tr>\n<td align="left">[a-z]</td>\n<td align="left">\u67e5\u627e\u4efb\u4f55\u4ece\u5c0f\u5199 a \u5230\u5c0f\u5199 z \u7684\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">[A-Z]</td>\n<td align="left">\u67e5\u627e\u4efb\u4f55\u4ece\u5927\u5199 A \u5230\u5927\u5199 Z \u7684\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">[A-z]</td>\n<td align="left">\u67e5\u627e\u4efb\u4f55\u4ece\u5927\u5199 A \u5230\u5c0f\u5199 z \u7684\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">[adgk]</td>\n<td align="left">\u67e5\u627e\u7ed9\u5b9a\u96c6\u5408\u5185\u7684\u4efb\u4f55\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">[^adgk]</td>\n<td align="left">\u67e5\u627e\u7ed9\u5b9a\u96c6\u5408\u5916\u7684\u4efb\u4f55\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">(red&#124;blue&#124;green)</td>\n<td align="left">\u67e5\u627e\u4efb\u4f55\u6307\u5b9a\u7684\u9009\u9879</td>\n</tr>\n</tbody></table>\n<h3 id="\u5143\u5b57\u7b26">\u5143\u5b57\u7b26</h3>\n<p>\u5143\u5b57\u7b26\uff08Metacharacter\uff09\u662f\u62e5\u6709\u7279\u6b8a\u542b\u4e49\u7684\u5b57\u7b26\uff1a</p>\n<table>\n<thead>\n<tr>\n<th align="left">\u5143\u5b57\u7b26</th>\n<th align="left">\u63cf\u8ff0</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">.</td>\n<td align="left">\u67e5\u627e\u5355\u4e2a\u5b57\u7b26\uff0c\u9664\u4e86\u6362\u884c\u548c\u884c\u7ed3\u675f\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\w</td>\n<td align="left">\u67e5\u627e\u5355\u8bcd\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\W</td>\n<td align="left">\u67e5\u627e\u975e\u5355\u8bcd\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\d</td>\n<td align="left">\u67e5\u627e\u6570\u5b57</td>\n</tr>\n<tr>\n<td align="left">\\D</td>\n<td align="left">\u67e5\u627e\u975e\u6570\u5b57\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\s</td>\n<td align="left">\u67e5\u627e\u7a7a\u767d\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\S</td>\n<td align="left">\u67e5\u627e\u975e\u7a7a\u767d\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\b</td>\n<td align="left">\u5339\u914d\u5355\u8bcd\u8fb9\u754c</td>\n</tr>\n<tr>\n<td align="left">\\B</td>\n<td align="left">\u5339\u914d\u975e\u5355\u8bcd\u8fb9\u754c</td>\n</tr>\n<tr>\n<td align="left">\\0</td>\n<td align="left">\u67e5\u627e NUL \u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\n</td>\n<td align="left">\u67e5\u627e\u6362\u884c\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\f</td>\n<td align="left">\u67e5\u627e\u6362\u9875\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\r</td>\n<td align="left">\u67e5\u627e\u56de\u8f66\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\t</td>\n<td align="left">\u67e5\u627e\u5236\u8868\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\v</td>\n<td align="left">\u67e5\u627e\u5782\u76f4\u5236\u8868\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\xxx</td>\n<td align="left">\u67e5\u627e\u4ee5\u516b\u8fdb\u5236\u6570 xxx \u89c4\u5b9a\u7684\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\xdd</td>\n<td align="left">\u67e5\u627e\u4ee5\u5341\u516d\u8fdb\u5236\u6570 dd \u89c4\u5b9a\u7684\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\uxxxx</td>\n<td align="left">\u67e5\u627e\u4ee5\u5341\u516d\u8fdb\u5236\u6570 xxxx \u89c4\u5b9a\u7684 Unicode \u5b57\u7b26</td>\n</tr>\n</tbody></table>\n<h3 id="\u91cf\u8bcd">\u91cf\u8bcd</h3>\n<table>\n<thead>\n<tr>\n<th align="left">\u91cf\u8bcd</th>\n<th align="left">\u63cf\u8ff0</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">n+</td>\n<td align="left">\u5339\u914d\u4efb\u4f55\u5305\u542b\u81f3\u5c11\u4e00\u4e2a n \u7684\u5b57\u7b26\u4e32</td>\n</tr>\n<tr>\n<td align="left">n*</td>\n<td align="left">\u5339\u914d\u4efb\u4f55\u5305\u542b\u96f6\u4e2a\u6216\u591a\u4e2a n \u7684\u5b57\u7b26\u4e32</td>\n</tr>\n<tr>\n<td align="left">n?</td>\n<td align="left">\u5339\u914d\u4efb\u4f55\u5305\u542b\u96f6\u4e2a\u6216\u4e00\u4e2a n \u7684\u5b57\u7b26\u4e32</td>\n</tr>\n<tr>\n<td align="left">n{X}</td>\n<td align="left">\u5339\u914d\u5305\u542b X \u4e2a n \u7684\u5e8f\u5217\u7684\u5b57\u7b26\u4e32</td>\n</tr>\n<tr>\n<td align="left">n{X,Y}</td>\n<td align="left">\u5339\u914d\u5305\u542b X \u81f3 Y \u4e2a n \u7684\u5e8f\u5217\u7684\u5b57\u7b26\u4e32</td>\n</tr>\n<tr>\n<td align="left">n{X,}</td>\n<td align="left">\u5339\u914d\u5305\u542b\u81f3\u5c11 X \u4e2a n \u7684\u5e8f\u5217\u7684\u5b57\u7b26\u4e32</td>\n</tr>\n<tr>\n<td align="left">n$</td>\n<td align="left">\u5339\u914d\u4efb\u4f55\u7ed3\u5c3e\u4e3a n \u7684\u5b57\u7b26\u4e32</td>\n</tr>\n<tr>\n<td align="left">^n</td>\n<td align="left">\u5339\u914d\u4efb\u4f55\u5f00\u5934\u4e3a n \u7684\u5b57\u7b26\u4e32</td>\n</tr>\n<tr>\n<td align="left">?=n</td>\n<td align="left">\u5339\u914d\u4efb\u4f55\u5176\u540e\u7d27\u63a5\u6307\u5b9a\u5b57\u7b26\u4e32 n \u7684\u5b57\u7b26\u4e32</td>\n</tr>\n<tr>\n<td align="left">?!n</td>\n<td align="left">\u5339\u914d\u4efb\u4f55\u5176\u540e\u6ca1\u6709\u7d27\u63a5\u6307\u5b9a\u5b57\u7b26\u4e32 n \u7684\u5b57\u7b26\u4e32</td>\n</tr>\n</tbody></table>\n'}}]);