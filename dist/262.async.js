(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[262],{eAyt:function(n,s){n.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">en</a></p>\n<h1 id="string">String</h1>\n<p>String \u5168\u5c40\u5bf9\u8c61\u662f\u4e00\u4e2a\u7528\u4e8e\u5b57\u7b26\u4e32\u6216\u4e00\u4e2a\u5b57\u7b26\u5e8f\u5217\u7684\u6784\u9020\u51fd\u6570\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<p>\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u91c7\u53d6\u4ee5\u4e0b\u5f62\u5f0f\uff1a</p>\n<pre><code class="language-javascript">\'<span class="hljs-built_in">string</span> <span class="hljs-built_in">text</span>\'\n<span class="hljs-string">"string text"</span>\n<span class="hljs-string">"\u4e2d\u6587/\u6c49\u8bed"</span>\n<span class="hljs-string">"espa\xf1ol"</span>\n<span class="hljs-string">"English "</span>\n<span class="hljs-string">"\u0939\u093f\u0928\u094d\u0926\u0940"</span>\n<span class="hljs-string">"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"</span>\n<span class="hljs-string">"portugu\xeas"</span>\n<span class="hljs-string">"\u09ac\u09be\u0982\u09b2\u09be"</span>\n<span class="hljs-string">"\u0440\u0443\u0441\u0441\u043a\u0438\u0439"</span>\n<span class="hljs-string">"\u65e5\u672c\u8a9e"</span>\n<span class="hljs-string">"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"</span>\n<span class="hljs-string">"\ud55c\uad6d\uc5b4"</span></code></pre>\n<p>\u4f60\u4e5f\u80fd\u4f7f\u7528 String \u51fd\u6570\u5c06\u5176\u4ed6\u503c\u751f\u6210\u6216\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">String</span>(thing)\n<span class="hljs-keyword">new</span> <span class="hljs-keyword">String</span>(thing)</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>thing</code> \u4efb\u4f55\u53ef\u4ee5\u88ab\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\u7684\u503c\u3002</li>\n</ul>\n<h3 id="\u6a21\u677f\u5b57\u9762\u91cf">\u6a21\u677f\u5b57\u9762\u91cf</h3>\n<p>\u4ece ECMAScript 2015 \u5f00\u59cb\uff0c\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u4e5f\u53ef\u4ee5\u79f0\u4e3a\u6a21\u677f\u5b57\u9762\u91cf\uff1a</p>\n<pre><code class="language-javascript">`hello world` `hello! world!` `hello ${who}` escape `&lt;<span class="hljs-literal">a</span>&gt;${who}&lt;/<span class="hljs-literal">a</span>&gt;`</code></pre>\n<h3 id="\u8f6c\u4e49\u5b57\u7b26">\u8f6c\u4e49\u5b57\u7b26</h3>\n<p>\u9664\u4e86\u666e\u901a\u7684\u53ef\u6253\u5370\u5b57\u7b26\u4ee5\u5916\uff0c\u4e00\u4e9b\u7279\u6b8a\u6709\u7279\u6b8a\u529f\u80fd\u7684\u5b57\u7b26\u53ef\u4ee5\u901a\u8fc7\u8f6c\u4e49\u5b57\u7b26\u7684\u5f62\u5f0f\u653e\u5165\u5b57\u7b26\u4e32\u4e2d\uff1a</p>\n<table>\n<thead>\n<tr>\n<th align="left">Code</th>\n<th align="left">Output</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">\\0</td>\n<td align="left">\u7a7a\u5b57\u7b26</td>\n</tr>\n<tr>\n<td align="left">&#39;</td>\n<td align="left">\u5355\u5f15\u53f7</td>\n</tr>\n<tr>\n<td align="left">&quot;</td>\n<td align="left">\u53cc\u5f15\u53f7</td>\n</tr>\n<tr>\n<td align="left">\\</td>\n<td align="left">\u53cd\u659c\u6760</td>\n</tr>\n<tr>\n<td align="left">\\n</td>\n<td align="left">\u6362\u884c</td>\n</tr>\n<tr>\n<td align="left">\\r</td>\n<td align="left">\u56de\u8f66</td>\n</tr>\n<tr>\n<td align="left">\\v</td>\n<td align="left">\u5782\u76f4\u5236\u8868\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\t</td>\n<td align="left">\u6c34\u5e73\u5236\u8868\u7b26</td>\n</tr>\n<tr>\n<td align="left">\\b</td>\n<td align="left">\u9000\u683c</td>\n</tr>\n<tr>\n<td align="left">\\f</td>\n<td align="left">\u6362\u9875</td>\n</tr>\n<tr>\n<td align="left">\\uXXXX</td>\n<td align="left">unicode \u7801</td>\n</tr>\n<tr>\n<td align="left">\\u{X} ... \\u{XXXXXX}</td>\n<td align="left">unicode codepoint</td>\n</tr>\n<tr>\n<td align="left">\\xXX</td>\n<td align="left">Latin-1 \u5b57\u7b26(x\u5c0f\u5199)</td>\n</tr>\n</tbody></table>\n<p class="warning">\u548c\u5176\u4ed6\u8bed\u8a00\u4e0d\u540c\uff0cjavascript \u7684\u5b57\u7b26\u4e32\u4e0d\u533a\u5206\u5355\u5f15\u53f7\u548c\u53cc\u5f15\u53f7\uff0c\u6240\u4ee5\u4e0d\u8bba\u662f\u5355\u5f15\u53f7\u8fd8\u662f\u53cc\u5f15\u53f7\u7684\u5b57\u7b26\u4e32\uff0c\u4e0a\u9762\u7684\u8f6c\u4e49\u5b57\u7b26\u90fd\u80fd\u8fd0\u884c \u3002</p>\n\n<h3 id="\u957f\u5b57\u7b26\u4e32">\u957f\u5b57\u7b26\u4e32</h3>\n<p>\u6709\u65f6\uff0c\u4f60\u7684\u4ee3\u7801\u53ef\u80fd\u542b\u6709\u5f88\u957f\u7684\u5b57\u7b26\u4e32\u3002\u4f60\u53ef\u80fd\u60f3\u5c06\u8fd9\u6837\u7684\u5b57\u7b26\u4e32\u5199\u6210\u591a\u884c\uff0c\u800c\u4e0d\u662f\u8ba9\u8fd9\u4e00\u884c\u65e0\u9650\u5ef6\u957f\u6216\u7740\u88ab\u7f16\u8f91\u5668\u6298\u53e0\u3002\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u505a\u5230\u8fd9\u4e00\u70b9\u3002</p>\n<p>\u5176\u4e00\uff0c\u53ef\u4ee5\u4f7f\u7528 + \u8fd0\u7b97\u7b26\u5c06\u591a\u4e2a\u5b57\u7b26\u4e32\u8fde\u63a5\u8d77\u6765\uff0c\u5982\u4e0b\u6240\u793a\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-attribute">let longString</span> = <span class="hljs-string">"This is a very long string which needs "</span> +\n                 <span class="hljs-string">"to wrap across multiple lines because "</span> +\n                 <span class="hljs-string">"otherwise my code is unreadable."</span>;</code></pre>\n<p>\u5176\u4e8c\uff0c\u53ef\u4ee5\u5728\u6bcf\u884c\u672b\u5c3e\u4f7f\u7528\u53cd\u659c\u6760\u5b57\u7b26\uff08\u201c\\\u201d\uff09\uff0c\u4ee5\u6307\u793a\u5b57\u7b26\u4e32\u5c06\u5728\u4e0b\u4e00\u884c\u7ee7\u7eed\u3002\u786e\u4fdd\u53cd\u659c\u6760\u540e\u9762\u6ca1\u6709\u7a7a\u683c\u6216\u4efb\u4f55\u9664\u6362\u884c\u7b26\u4e4b\u5916\u7684\u5b57\u7b26\u6216\u7f29\u8fdb; \u5426\u5219\u53cd\u659c\u6760\u5c06\u4e0d\u4f1a\u5de5\u4f5c\u3002 \u5982\u4e0b\u6240\u793a\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">let</span> longString = <span class="hljs-comment">"This is a very long string which needs \\</span>\n<span class="hljs-keyword">to</span> wrap across multiple lines because \\\notherwise my code <span class="hljs-keyword">is</span> unreadable.<span class="hljs-comment">";</span></code></pre>\n<p>\u4f7f\u7528\u8fd9\u4e24\u79cd\u65b9\u5f0f\u4f1a\u521b\u5efa\u76f8\u540c\u7684\u5b57\u7b26\u4e32\u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5b57\u7b26\u4e32\u5bf9\u4e8e\u4fdd\u5b58\u53ef\u4ee5\u4ee5\u6587\u672c\u5f62\u5f0f\u8868\u793a\u7684\u6570\u636e\u975e\u5e38\u6709\u7528\u3002 \u4e00\u4e9b\u5e38\u7528\u7684\u5b57\u7b26\u4e32\u64cd\u4f5c\u6709\uff1a\u67e5\u8be2\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c\u4f7f\u7528 + \u548c += \u8fd0\u7b97\u7b26\u6765\u6784\u5efa\u548c\u8fde\u63a5\n\u5b57\u7b26\u4e32\uff0c\u4f7f\u7528 indexOf \u65b9\u6cd5\u68c0\u67e5\u67d0\u4e00\u5b50\u5b57\u7b26\u4e32\u5728\u7236\u5b57\u7b26\u4e32\u4e2d\u7684\u4f4d\u7f6e\uff0c\u53c8\u6216\u662f\u4f7f\u7528 substring \u65b9\u6cd5\u63d0\u53d6\u4ece\u7236\u5b57\u7b26\u4e32\u4e2d\u63d0\u53d6\u5b50\u5b57\u7b26\u4e32\u3002</p>\n<h3 id="\u4ece\u5b57\u7b26\u4e32\u4e2d\u83b7\u53d6\u5355\u4e2a\u5b57\u7b26">\u4ece\u5b57\u7b26\u4e32\u4e2d\u83b7\u53d6\u5355\u4e2a\u5b57\u7b26</h3>\n<p>\u83b7\u53d6\u5b57\u7b26\u4e32\u7684\u67d0\u4e2a\u5b57\u7b26\u6709\u4e24\u79cd\u65b9\u6cd5\u3002 \u7b2c\u4e00\u79cd\u662f\u4f7f\u7528 charAt \u65b9\u6cd5\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">return</span> <span class="hljs-string">\'cat\'</span>.charAt(<span class="hljs-number">1</span>); <span class="hljs-comment">// returns "a"</span></code></pre>\n<p>\u53e6\u4e00\u79cd (\u5728ECMAScript 5\u4e2d\u6709\u6240\u4ecb\u7ecd) \u662f\u628a\u5b57\u7b26\u4e32\u5f53\u4f5c\u4e00\u4e2a\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\uff0c\u5176\u4e2d\u7684\u6bcf\u4e2a\u5b57\u7b26\u5bf9\u5e94\u4e00\u4e2a\u6570\u503c\u7d22\u5f15\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">return</span> <span class="hljs-string">\'cat\'</span>[<span class="hljs-number">1</span>]; <span class="hljs-comment">// returns "a"</span></code></pre>\n<p>\u4f7f\u7528\u62ec\u53f7\u8bbf\u95ee\u5b57\u7b26\u4e32\u4e0d\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u5220\u9664\u6216\u6dfb\u52a0\uff0c\u56e0\u4e3a\u5b57\u7b26\u4e32\u5bf9\u5e94\u672a\u77e5\u7684\u5c5e\u6027\u5e76\u4e0d\u662f\u53ef\u8bfb\u6216\u914d\u7f6e\u7684\u3002 (\u66f4\u591a\u7684\u4fe1\u606f\u8bf7\u53c2\u9605 Object.defineProperty\u3002 )</p>\n<h3 id="\u5b57\u7b26\u4e32\u6bd4\u8f83">\u5b57\u7b26\u4e32\u6bd4\u8f83</h3>\n<p>\u719f\u7ec3\u4f7f\u7528 C \u8bed\u8a00\u7684\u5f00\u53d1\u8005\u7ecf\u5e38\u4f7f\u7528 strcmp \u51fd\u6570\u6765\u6bd4\u8f83\u5b57\u7b26\u4e32\uff0c\u4f46\u5728 JavaScript \u4e2d\uff0c\u4f60\u53ea\u9700\u8981\u4f7f\u7528\u6bd4\u8f83\u64cd\u4f5c\u7b26(&gt;/&lt;/&gt;=/&lt;=)\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> a = <span class="hljs-string">"a"</span>;\n<span class="hljs-keyword">var</span> b = <span class="hljs-string">"b"</span>;\n<span class="hljs-keyword">if</span> (a &lt; b) <span class="hljs-comment">// true</span>\n  <span class="hljs-built_in">print</span>(a + <span class="hljs-string">" is less than "</span> + b);\n<span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (a &gt; b)\n  <span class="hljs-built_in">print</span>(a + <span class="hljs-string">" is greater than "</span> + b);\n<span class="hljs-keyword">else</span>\n  <span class="hljs-built_in">print</span>(a + <span class="hljs-string">" and "</span> + b + <span class="hljs-string">" are equal."</span>);</code></pre>\n<p>\u4f7f\u7528\u4ece\u5b57\u7b26\u4e32\u5b9e\u4f8b\u7ee7\u627f\u800c\u6765\u7684 localeCompare \u65b9\u6cd5\u4e5f\u80fd\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c\u3002</p>\n<h3 id="\u57fa\u672c\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u4e32\u5bf9\u8c61\u7684\u533a\u522b">\u57fa\u672c\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u4e32\u5bf9\u8c61\u7684\u533a\u522b</h3>\n<p>\u8bf7\u6ce8\u610f\u533a\u5206 JavaScript \u5b57\u7b26\u4e32\u5bf9\u8c61\u548c\u57fa\u672c\u5b57\u7b26\u4e32\u503c . ( \u5bf9\u4e8e Boolean \u548cNumbers \u4e5f\u540c\u6837\u5982\u6b64.)</p>\n<p>\u5b57\u7b26\u4e32\u5b57\u9762\u91cf (\u901a\u8fc7\u5355\u5f15\u53f7\u6216\u53cc\u5f15\u53f7\u5b9a\u4e49) \u548c \u76f4\u63a5\u8c03\u7528 String \u65b9\u6cd5(\u6ca1\u6709\u901a\u8fc7 new \u751f\u6210\u5b57\u7b26\u4e32\u5bf9\u8c61\u5b9e\u4f8b)\u7684\u5b57\u7b26\u4e32\u90fd\u662f\u57fa\u672c\u5b57\u7b26\u4e32\u3002\nJavaScript\u4f1a\u81ea\u52a8\u5c06\u57fa\u672c\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u5bf9\u8c61\uff0c\u53ea\u6709\u5c06\u57fa\u672c\u5b57\u7b26\u4e32\u53ef\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u5bf9\u8c61\u4e4b\u540e\u624d\u53ef\u4ee5\u4f7f\u7528\u5b57\u7b26\u4e32\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002\u5f53\u57fa\u672c\u5b57\n\u7b26\u4e32\u9700\u8981\u8c03\u7528\u4e00\u4e2a\u5b57\u7b26\u4e32\u5bf9\u8c61\u624d\u6709\u7684\u65b9\u6cd5\u6216\u8005\u67e5\u8be2\u503c\u7684\u65f6\u5019(\u57fa\u672c\u5b57\u7b26\u4e32\u662f\u6ca1\u6709\u8fd9\u4e9b\u65b9\u6cd5\u7684)\uff0cJavaScript \u4f1a\u81ea\u52a8\u5c06\u57fa\u672c\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a\u5b57\n\u7b26\u4e32\u5bf9\u8c61\u5e76\u4e14\u8c03\u7528\u76f8\u5e94\u7684\u65b9\u6cd5\u6216\u8005\u6267\u884c\u67e5\u8be2\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> s_prim = <span class="hljs-string">"foo"</span>;\n<span class="hljs-keyword">var</span> s_obj = <span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>(s_prim);\n\n<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> s_prim); <span class="hljs-comment">// Logs "string"</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> s_obj);  <span class="hljs-comment">// Logs "object"</span></code></pre>\n<p>\u5f53\u4f7f\u7528 eval\u65f6\uff0c\u57fa\u672c\u5b57\u7b26\u4e32\u548c\u5b57\u7b26\u4e32\u5bf9\u8c61\u4e5f\u4f1a\u4ea7\u751f\u4e0d\u540c\u7684\u7ed3\u679c\u3002eval \u4f1a\u5c06\u57fa\u672c\u5b57\u7b26\u4e32\u4f5c\u4e3a\u6e90\u4ee3\u7801\u5904\u7406; \u800c\u5b57\u7b26\u4e32\u5bf9\u8c61\u5219\u88ab\u770b\u4f5c\u5bf9\u8c61\u5904\u7406,\n\u8fd4\u56de\u5bf9\u8c61\u3002 \u4f8b\u5982\uff1a</p>\n<pre><code class="language-javascript">s1 = <span class="hljs-string">"2 + 2"</span>;               <span class="hljs-comment">// creates a string primitive</span>\ns2 = <span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>(<span class="hljs-string">"2 + 2"</span>);   <span class="hljs-comment">// creates a String object</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">eval</span>(s1));      <span class="hljs-comment">// returns the number 4</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">eval</span>(s2));      <span class="hljs-comment">// returns the string "2 + 2"</span></code></pre>\n<p>\u7531\u4e8e\u4e0a\u8ff0\u539f\u56e0, \u5f53\u4e00\u6bb5\u4ee3\u7801\u5728\u9700\u8981\u4f7f\u7528\u57fa\u672c\u5b57\u7b26\u4e32\u7684\u65f6\u5019\u5374\u4f7f\u7528\u4e86\u5b57\u7b26\u4e32\u5bf9\u8c61\u5c31\u4f1a\u5bfc\u81f4\u6267\u884c\u5931\u8d25(\u867d\u7136\u4e00\u822c\u60c5\u51b5\u4e0b\u7a0b\u5e8f\u5458\u4eec\u5e76\u4e0d\u9700\u8981\u8003\u8651\u8fd9\u6837\u7684\u95ee\u9898)\u3002</p>\n<p>\u5229\u7528 valueOf \u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5b57\u7b26\u4e32\u5bf9\u8c61\u8f6c\u6362\u4e3a\u5176\u5bf9\u5e94\u7684\u57fa\u672c\u5b57\u7b26\u4e32\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">eval</span>(s2.valueOf())); <span class="hljs-comment">// returns the number 4</span></code></pre>\n<p class="warning">\u6ce8\u610f: \u5176\u4ed6\u7684\u5c06\u5b57\u7b26\u4e32\u5bf9\u8c61\u8f6c\u6362\u6210\u57fa\u672c\u5b57\u7b26\u4e32\u7684\u65b9\u6cd5\u53ef\u4ee5\u53ca\u53c2\u8003 StringView \u2013 a C-like representation of strings based on typed arrays.</p>\n\n<h2 id="\u5c5e\u6027">\u5c5e\u6027</h2>\n<p><code>String.prototype</code></p>\n<p>\u53ef\u4ee5\u4e3a String \u5bf9\u8c61\u589e\u52a0\u65b0\u7684\u5c5e\u6027\u3002</p>\n<h2 id="\u65b9\u6cd5">\u65b9\u6cd5</h2>\n<p><code>String.fromCharCode()</code></p>\n<p>\u901a\u8fc7\u4e00\u4e32 Unicode \u521b\u5efa\u5b57\u7b26\u4e32\u3002</p>\n<p><code>String.fromCodePoint()</code></p>\n<p>\u901a\u8fc7\u4e00\u4e32 \u7801\u70b9 \u521b\u5efa\u5b57\u7b26\u4e32\u3002</p>\n<p><code>String.raw()</code></p>\n<p>\u901a\u8fc7\u6a21\u677f\u5b57\u7b26\u4e32\u7a7f\u521b\u5efa\u5b57\u7b26\u4e32\u3002</p>\n<h2 id="string-\u5b9e\u4f8b">String \u5b9e\u4f8b</h2>\n<h3 id="\u5c5e\u6027-1">\u5c5e\u6027</h3>\n<p><code>String.prototype.constructor</code></p>\n<p>\u7528\u4e8e\u521b\u9020\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61\u7684\u7279\u5b9a\u7684\u51fd\u6570\u3002</p>\n<p><code>String.prototype.length</code></p>\n<p>\u8fd4\u56de\u4e86\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002</p>\n<h3 id="\u8ddfhtml\u65e0\u5173\u7684\u65b9\u6cd5">\u8ddfHTML\u65e0\u5173\u7684\u65b9\u6cd5</h3>\n<p><code>String.prototype.charAt()</code></p>\n<p>\u8fd4\u56de\u7279\u5b9a\u4f4d\u7f6e\u7684\u5b57\u7b26\u3002</p>\n<p><code>String.prototype.charCodeAt()</code></p>\n<p>\u8fd4\u56de\u8868\u793a\u7ed9\u5b9a\u7d22\u5f15\u7684\u5b57\u7b26\u7684Unicode\u7684\u503c\u3002</p>\n<p><code>String.prototype.codePointAt()</code></p>\n<p>\u8fd4\u56de\u4f7f\u7528UTF-16\u7f16\u7801\u7684\u7ed9\u5b9a\u4f4d\u7f6e\u7684\u503c\u7684\u975e\u8d1f\u6574\u6570\u3002</p>\n<p><code>String.prototype.concat()</code></p>\n<p>\u8fde\u63a5\u4e24\u4e2a\u5b57\u7b26\u4e32\u6587\u672c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\u3002</p>\n<p><code>String.prototype.includes()</code></p>\n<p>\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u91cc\u662f\u5426\u5305\u542b\u5176\u4ed6\u5b57\u7b26\u4e32\u3002</p>\n<p><code>String.prototype.endsWith()</code></p>\n<p>\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u7ed3\u5c3e\u662f\u5426\u5305\u542b\u5176\u4ed6\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u3002</p>\n<p><code>String.prototype.indexOf()</code></p>\n<p>\u4ece\u5b57\u7b26\u4e32\u5bf9\u8c61\u4e2d\u8fd4\u56de\u9996\u4e2a\u88ab\u53d1\u73b0\u7684\u7ed9\u5b9a\u503c\u7684\u7d22\u5f15\u503c\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\u5219\u8fd4\u56de-1\u3002</p>\n<p><code>String.prototype.lastIndexOf()</code></p>\n<p>\u4ece\u5b57\u7b26\u4e32\u5bf9\u8c61\u4e2d\u8fd4\u56de\u6700\u540e\u4e00\u4e2a\u88ab\u53d1\u73b0\u7684\u7ed9\u5b9a\u503c\u7684\u7d22\u5f15\u503c\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\u5219\u8fd4\u56de-1\u3002</p>\n<p><code>String.prototype.localeCompare()</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u8868\u793a\u662f\u5426\u5f15\u7528\u5b57\u7b26\u4e32\u5728\u6392\u5e8f\u4e2d\u4f4d\u4e8e\u6bd4\u8f83\u5b57\u7b26\u4e32\u7684\u524d\u9762\uff0c\u540e\u9762\uff0c\u6216\u8005\u4e8c\u8005\u76f8\u540c\u3002</p>\n<p><code>String.prototype.match()</code></p>\n<p>\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0e\u5b57\u7b26\u4e32\u76f8\u6bd4\u8f83\u3002</p>\n<p><code>String.prototype.normalize()</code></p>\n<p>\u8fd4\u56de\u8c03\u7528\u5b57\u7b26\u4e32\u503c\u7684Unicode\u6807\u51c6\u5316\u5f62\u5f0f\u3002</p>\n<p><code>String.prototype.quote()</code></p>\n<p>Wraps the string in double quotes (&quot;&quot;&quot;).</p>\n<p><code>String.prototype.repeat()</code></p>\n<p>\u8fd4\u56de\u6307\u5b9a\u91cd\u590d\u6b21\u6570\u7684\u7531\u5143\u7d20\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u5bf9\u8c61\u3002</p>\n<p><code>String.prototype.replace()</code></p>\n<p>\u88ab\u7528\u6765\u5728\u6b63\u5219\u8868\u8fbe\u5f0f\u548c\u5b57\u7b26\u4e32\u76f4\u63a5\u6bd4\u8f83\uff0c\u7136\u540e\u7528\u65b0\u7684\u5b50\u4e32\u6765\u66ff\u6362\u88ab\u5339\u914d\u7684\u5b50\u4e32\u3002</p>\n<p><code>String.prototype.search()</code></p>\n<p>\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u548c\u6307\u5b9a\u5b57\u7b26\u4e32\u8fdb\u884c\u5339\u914d\u641c\u7d22\uff0c\u8fd4\u56de\u7b2c\u4e00\u4e2a\u51fa\u73b0\u7684\u5339\u914d\u9879\u7684\u4e0b\u6807\u3002</p>\n<p><code>String.prototype.slice()</code></p>\n<p>\u6458\u53d6\u4e00\u4e2a\u5b57\u7b26\u4e32\u533a\u57df\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\u3002</p>\n<p><code>String.prototype.split()</code></p>\n<p>\u901a\u8fc7\u5206\u79bb\u5b57\u7b26\u4e32\u6210\u5b57\u4e32\uff0c\u5c06\u5b57\u7b26\u4e32\u5bf9\u8c61\u5206\u5272\u6210\u5b57\u7b26\u4e32\u6570\u7ec4\u3002</p>\n<p><code>String.prototype.startsWith()</code></p>\n<p>\u5224\u65ad\u5b57\u7b26\u4e32\u7684\u8d77\u59cb\u4f4d\u7f6e\u662f\u5426\u5339\u914d\u5176\u4ed6\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u3002</p>\n<p><code>String.prototype.substr()</code></p>\n<p>\u901a\u8fc7\u6307\u5b9a\u5b57\u7b26\u6570\u8fd4\u56de\u5728\u6307\u5b9a\u4f4d\u7f6e\u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u3002</p>\n<p><code>String.prototype.substring()</code></p>\n<p>\u8fd4\u56de\u5728\u5b57\u7b26\u4e32\u4e2d\u6307\u5b9a\u53e6\u4e2a\u4e0b\u6807\u4e4b\u95f4\u7684\u5b57\u7b26\u3002</p>\n<p><code>String.prototype.toLocaleLowerCase()</code></p>\n<p>\u6839\u636e\u5f53\u524d\u533a\u57df\u8bbe\u7f6e\uff0c\u5c06\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u8f6c\u6362\u6210\u5c0f\u5199\u3002\u5bf9\u4e8e\u5927\u591a\u6570\u8bed\u8a00\u6765\u8bf4\uff0ctoLowerCase\u7684\u8fd4\u56de\u503c\u662f\u4e00\u81f4\u7684\u3002</p>\n<p><code>String.prototype.toLocaleUpperCase()</code></p>\n<p>\u6839\u636e\u5f53\u524d\u533a\u57df\u8bbe\u7f6e\uff0c\u5c06\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\u8f6c\u6362\u6210\u5927\u5199\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u8bed\u8a00\u6765\u8bf4\uff0ctoUpperCase\u7684\u8fd4\u56de\u503c\u662f\u4e00\u81f4\u7684\u3002</p>\n<p><code>String.prototype.toLowerCase()</code></p>\n<p>\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u5c0f\u5199\u5e76\u8fd4\u56de\u3002</p>\n<p><code>String.prototype.toSource()</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u6587\u5b57\u4ee3\u8868\u7740\u7279\u5b9a\u7684\u5bf9\u8c61\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u8fd4\u56de\u503c\u6765\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\u3002\u91cd\u5199 Object.prototype.toSource \u65b9\u6cd5\u3002</p>\n<p><code>String.prototype.toString()</code></p>\n<p>\u8fd4\u56de\u7528\u5b57\u7b26\u4e32\u8868\u793a\u7684\u7279\u5b9a\u5bf9\u8c61\u3002\u91cd\u5199 Object.prototype.toString \u65b9\u6cd5\u3002</p>\n<p><code>String.prototype.toUpperCase()</code></p>\n<p>\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u5927\u5199\u5e76\u8fd4\u56de\u3002</p>\n<p><code>String.prototype.trim()</code></p>\n<p>\u4ece\u5b57\u7b26\u4e32\u7684\u5f00\u59cb\u548c\u7ed3\u5c3e\u53bb\u9664\u7a7a\u683c\u3002\u53c2\u7167\u90e8\u5206 ECMAScript 5 \u6807\u51c6\u3002</p>\n<p><code>String.prototype.trimLeft()</code></p>\n<p>\u4ece\u5b57\u7b26\u4e32\u7684\u5de6\u4fa7\u53bb\u9664\u7a7a\u683c\u3002</p>\n<p><code>String.prototype.trimRight()</code></p>\n<p>\u4ece\u5b57\u7b26\u4e32\u7684\u53f3\u4fa7\u53bb\u9664\u7a7a\u683c\u3002</p>\n<p><code>String.prototype.valueOf()</code></p>\n<p>\u8fd4\u56de\u7279\u5b9a\u5bf9\u8c61\u7684\u539f\u59cb\u503c\u3002\u91cd\u5199 Object.prototype.valueOf \u65b9\u6cd5\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u5c06\u5176\u4ed6\u503c\u8f6c\u6362\u6210\u5b57\u7b26\u4e32">\u5c06\u5176\u4ed6\u503c\u8f6c\u6362\u6210\u5b57\u7b26\u4e32</h3>\n<p>\u4f7f\u7528 String() \u65b9\u6cd5\u5c06\u5176\u5b83\u5bf9\u8c61\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f\u4e00\u79cd\u66f4\u52a0\u5b89\u5168\u7684\u505a\u6cd5\uff0c\u867d\u7136\u8be5\u65b9\u6cd5\u5e95\u5c42\u4f7f\u7528\u7684\u4e5f\u662f toString() \u65b9\u6cd5\uff0c\u4f46\u662f\u9488\n\u5bf9 null/undefined/symbols\uff0cString() \u65b9\u6cd5\u4f1a\u6709\u7279\u6b8a\u7684\u5904\u7406\uff1a</p>\n<pre><code class="language-javascript">var outputStrings = [];\n<span class="hljs-keyword">for</span> (let <span class="hljs-built_in">i</span> = <span class="hljs-number">0</span>, n = inputValues.<span class="hljs-built_in">length</span>; <span class="hljs-built_in">i</span> &lt; n; ++<span class="hljs-built_in">i</span>) {\n  outputStrings.push(String(inputValues[<span class="hljs-built_in">i</span>]));\n}</code></pre>\n'}}]);