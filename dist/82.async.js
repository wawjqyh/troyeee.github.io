(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{nfNv:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" target="_blank">en</a></p>\n<h1 id="function">Function</h1>\n<p>Function \u6784\u9020\u51fd\u6570 \u521b\u5efa\u4e00\u4e2a\u65b0\u7684Function\u5bf9\u8c61\u3002 \u5728 JavaScript \u4e2d, \u6bcf\u4e2a\u51fd\u6570\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u4e2aFunction\u5bf9\u8c61\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">new</span> <span class="hljs-keyword">Function</span> <span class="hljs-title"></span>([arg1[, arg2[, ...argN]],] functionBody)</code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>arg1, arg2, ... argN</code> \u88ab\u51fd\u6570\u4f7f\u7528\u7684\u53c2\u6570\u7684\u540d\u79f0\u5fc5\u987b\u662f\u5408\u6cd5\u547d\u540d\u7684\u3002\u53c2\u6570\u540d\u79f0\u662f\u4e00\u4e2a\u6709\u6548\u7684JavaScript\u6807\u8bc6\u7b26\u7684\u5b57\u7b26\u4e32\uff0c\u6216\u8005\u4e00\u4e2a\n\u7528\u9017\u53f7\u5206\u9694\u7684\u6709\u6548\u5b57\u7b26\u4e32\u7684\u5217\u8868;\u4f8b\u5982\u201c\xd7\u201d\uff0c\u201ctheValue\u201d\uff0c\u6216\u201cA\uff0cB\u201d\u3002</li>\n<li><code>functionBody</code>  \u4e00\u4e2a\u542b\u6709\u5305\u62ec\u51fd\u6570\u5b9a\u4e49\u7684JavaScript\u8bed\u53e5\u7684\u5b57\u7b26\u4e32\u3002</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u4f7f\u7528Function\u6784\u9020\u5668\u751f\u6210\u7684Function\u5bf9\u8c61\u662f\u5728\u51fd\u6570\u521b\u5efa\u65f6\u89e3\u6790\u7684\u3002\u8fd9\u6bd4\u4f60\u4f7f\u7528\u51fd\u6570\u58f0\u660e\u6216\u8005\u51fd\u6570\u8868\u8fbe\u5f0f(function)\u5e76\u5728\u4f60\u7684\u4ee3\u7801\u4e2d\u8c03\u7528\u66f4\n\u4e3a\u4f4e\u6548\uff0c\u56e0\u4e3a\u4f7f\u7528\u540e\u8005\u521b\u5efa\u7684\u51fd\u6570\u662f\u8ddf\u5176\u4ed6\u4ee3\u7801\u4e00\u8d77\u89e3\u6790\u7684\u3002</p>\n<p>\u6240\u6709\u88ab\u4f20\u9012\u5230\u6784\u9020\u51fd\u6570\u4e2d\u7684\u53c2\u6570\uff0c\u90fd\u5c06\u88ab\u89c6\u4e3a\u5c06\u88ab\u521b\u5efa\u7684\u51fd\u6570\u7684\u53c2\u6570\uff0c\u5e76\u4e14\u662f\u76f8\u540c\u7684\u6807\u793a\u7b26\u540d\u79f0\u548c\u4f20\u9012\u987a\u5e8f\u3002</p>\n<p><code>\u6ce8\u610f: \u4f7f\u7528Function\u6784\u9020\u5668\u751f\u6210\u7684\u51fd\u6570\uff0c\u5e76\u4e0d\u4f1a\u5728\u521b\u5efa\u5b83\u4eec\u7684\u4e0a\u4e0b\u6587\u4e2d\u521b\u5efa\u95ed\u5305\uff1b\u5b83\u4eec\u4e00\u822c\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u88ab\u521b\u5efa\u3002\u5f53\u8fd0\u884c\u8fd9\u4e9b\u51fd\u6570\u7684\u65f6\u5019\uff0c\n\u5b83\u4eec\u53ea\u80fd\u8bbf\u95ee\u81ea\u5df1\u7684\u672c\u5730\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf\uff0c\u4e0d\u80fd\u8bbf\u95eeFunction\u6784\u9020\u5668\u88ab\u8c03\u7528\u751f\u6210\u7684\u4e0a\u4e0b\u6587\u7684\u4f5c\u7528\u57df\u3002\u8fd9\u548c\u4f7f\u7528\u5e26\u6709\u51fd\u6570\u8868\u8fbe\u5f0f\u4ee3\u7801\u7684 eval \u4e0d\u540c\u3002</code></p>\n<p>\u4ee5\u8c03\u7528\u51fd\u6570\u7684\u65b9\u5f0f\u8c03\u7528Function\u7684\u6784\u9020\u51fd\u6570 (\u4e0d\u662f\u7528new\u5173\u952e\u5b57) \u8ddf\u4ee5\u6784\u9020\u51fd\u6570\u6765\u8c03\u7528\u662f\u4e00\u6837\u7684.</p>\n<h2 id="\u5c5e\u6027\u548c\u65b9\u6cd5">\u5c5e\u6027\u548c\u65b9\u6cd5</h2>\n<p>\u5168\u5c40\u7684Function\u5bf9\u8c61\u6ca1\u6709\u81ea\u5df1\u7684\u5c5e\u6027\u548c\u65b9\u6cd5, \u4f46\u662f, \u56e0\u4e3a\u5b83\u672c\u8eab\u4e5f\u662f\u51fd\u6570\uff0c\u6240\u4ee5\u5b83\u4e5f\u4f1a\u901a\u8fc7\u539f\u578b\u94fe\u4eceFunction.prototype\u4e0a\u7ee7\u627f\u90e8\u5206\u5c5e\u6027\u548c\u65b9\u6cd5\u3002</p>\n<h2 id="\u539f\u578b\u5bf9\u8c61">\u539f\u578b\u5bf9\u8c61</h2>\n<h3 id="\u5c5e\u6027">\u5c5e\u6027</h3>\n<p><code>Function.length</code></p>\n<p>\u83b7\u53d6\u51fd\u6570\u7684\u63a5\u6536\u53c2\u6570\u4e2a\u6570\u3002</p>\n<p><code>Function.prototype.constructor</code></p>\n<p>\u58f0\u660e\u51fd\u6570\u7684\u539f\u578b\u6784\u9020\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf7\u53c2\u8003 Object.constructor \u3002</p>\n<p><code>Function.arguments [\u5df2\u5e9f\u5f03]</code></p>\n<p>\u4ee5\u6570\u7ec4\u5f62\u5f0f\u83b7\u53d6\u4f20\u5165\u51fd\u6570\u7684\u6240\u6709\u53c2\u6570\u3002\u6b64\u5c5e\u6027\u5df2\u88abarguments\u66ff\u4ee3\u3002</p>\n<p><code>Function.arity [\u5df2\u5220\u9664]</code></p>\n<p>\u7528\u4e8e\u6307\u5b9a\u7684\u51fd\u6570\u7684\u53c2\u6570\u7684\u4e2a\u6570\uff0c\u4f46\u5df2\u88ab\u5220\u9664\u3002\u4f7f\u7528length\u5c5e\u6027\u4ee3\u66ff\u3002</p>\n<p><code>Function.caller [\u975e\u6807\u51c6]</code></p>\n<p>\u83b7\u53d6\u8c03\u7528\u51fd\u6570\u7684\u5177\u4f53\u5bf9\u8c61\u3002</p>\n<p><code>Function.name [\u975e\u6807\u51c6]</code></p>\n<p>\u83b7\u53d6\u51fd\u6570\u7684\u540d\u79f0\u3002</p>\n<p><code>Function.displayName [\u975e\u6807\u51c6]</code></p>\n<p>\u83b7\u53d6\u51fd\u6570\u7684display name\u3002</p>\n<h3 id="\u65b9\u6cd5">\u65b9\u6cd5</h3>\n<p><code>Function.prototype.apply()</code></p>\n<p>\u5728\u4e00\u4e2a\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u4e2d\u5e94\u7528\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\uff1b\u53c2\u6570\u80fd\u591f\u4ee5\u6570\u7ec4\u5f62\u5f0f\u4f20\u5165\u3002</p>\n<p><code>Function.prototype.bind()</code></p>\n<p>bind()\u65b9\u6cd5\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u51fd\u6570,\u79f0\u4e3a\u7ed1\u5b9a\u51fd\u6570.\u5f53\u8c03\u7528\u8fd9\u4e2a\u7ed1\u5b9a\u51fd\u6570\u65f6,\u7ed1\u5b9a\u51fd\u6570\u4f1a\u4ee5\u521b\u5efa\u5b83\u65f6\u4f20\u5165 bind()\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f5c\u4e3a this,\n\u4f20\u5165 bind()\u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u4ee5\u53ca\u4ee5\u540e\u7684\u53c2\u6570\u52a0\u4e0a\u7ed1\u5b9a\u51fd\u6570\u8fd0\u884c\u65f6\u672c\u8eab\u7684\u53c2\u6570\u6309\u7167\u987a\u5e8f\u4f5c\u4e3a\u539f\u51fd\u6570\u7684\u53c2\u6570\u6765\u8c03\u7528\u539f\u51fd\u6570.</p>\n<p><code>Function.prototype.toString()</code></p>\n<p>\u83b7\u53d6\u51fd\u6570\u7684\u5b9e\u73b0\u6e90\u7801\u7684\u5b57\u7b26\u4e32\u3002\u8986\u76d6\u4e86 Object.prototype.toString \u65b9\u6cd5\u3002</p>\n<p><code>Function.prototype.call()</code></p>\n<p>\u5728\u4e00\u4e2a\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u4e2d\u5e94\u7528\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\uff1b\u53c2\u6570\u80fd\u591f\u4ee5\u5217\u8868\u5f62\u5f0f\u4f20\u5165\u3002</p>\n<p><code>Function.prototype.isGenerator() [\u975e\u6807\u51c6]</code></p>\n<p>\u82e5\u51fd\u6570\u5bf9\u8c61\u4e3agenerator\uff0c\u8fd4\u56detrue\uff0c\u53cd\u4e4b\u8fd4\u56de false\u3002</p>\n<p><code>Function.prototype.toSource() [\u975e\u6807\u51c6]</code></p>\n<p>\u83b7\u53d6\u51fd\u6570\u7684\u5b9e\u73b0\u6e90\u7801\u7684\u5b57\u7b26\u4e32\u3002 \u8986\u76d6\u4e86 Object.prototype.toSource \u65b9\u6cd5\u3002</p>\n<h2 id="\u5b9e\u4f8b">\u5b9e\u4f8b</h2>\n<p>Function \u5b9e\u4f8b\u4ece Function.prototype \u7ee7\u627f\u4e86\u4e00\u4e9b\u5c5e\u6027\u548c\u65b9\u6cd5\u3002 \u540c\u5176\u4ed6\u6784\u9020\u51fd\u6570\u4e00\u6837\uff0c \u4f60\u53ef\u4ee5\u6539\u53d8\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u4ece\u800c\u4f7f\u5f97\u6240\u6709\u7684\nFunction\u5b9e\u4f8b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u53d1\u751f\u6539\u53d8\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u4f20\u5165\u53c2\u6570\u8c03\u7528function\u6784\u9020\u51fd\u6570">\u4f20\u5165\u53c2\u6570\u8c03\u7528Function\u6784\u9020\u51fd\u6570</h3>\n<p>\u4e0b\u9762\u7684\u4ee3\u7801\u4f1a\u521b\u5efa\u4e00\u4e2a\u9700\u8981\u4e24\u4e2a\u53c2\u6570\u7684Function\u5bf9\u8c61</p>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u5728 JavaScript \u63a7\u5236\u7684\u4ee3\u7801\u4f8b\u5b50</span>\n\n<span class="hljs-comment">// \u521b\u5efa\u4e86\u4e00\u4e2a\u80fd\u8fd4\u56de\u4e24\u4e2a\u53c2\u6570\u548c\u7684\u51fd\u6570</span>\n<span class="hljs-keyword">const</span> adder = <span class="hljs-keyword">new</span> <span class="hljs-function"><span class="hljs-keyword">Function</span><span class="hljs-params">(<span class="hljs-string">"a"</span>, <span class="hljs-string">"b"</span>, <span class="hljs-string">"return a + b"</span>)</span></span>;\n\n<span class="hljs-comment">// \u8c03\u7528\u51fd\u6570</span>\nadder(<span class="hljs-number">2</span>, <span class="hljs-number">6</span>);\n<span class="hljs-comment">//  8</span></code></pre>\n<p>\u53c2\u6570&quot;a&quot;\u548c&quot;b&quot;\u662f\u53c2\u6570\u7684\u540d\u5b57\uff0c\u5728\u51fd\u6570\u4f53\u4e2d\u88ab\u4f7f\u7528\uff0c&quot;return a + b&quot;\u3002</p>\n<h3 id="\u5927\u91cf\u4fee\u6539dom\u5143\u7d20\u7684\u9012\u5f52\u5feb\u6377\u65b9\u5f0f">\u5927\u91cf\u4fee\u6539DOM\u5143\u7d20\u7684\u9012\u5f52\u5feb\u6377\u65b9\u5f0f</h3>\n<p>\u4f7f\u7528 Function \u6784\u9020\u5668\u521b\u5efa\u51fd\u6570\u662f\u4ece\u4e00\u4e2a\u51fd\u6570\u4e2d\u52a8\u6001\u5730\u521b\u5efa\u4e00\u4e9b\u4e0d\u786e\u5b9a\u6570\u91cf\u7684\u6709\u53ef\u6267\u884c\u4ee3\u7801\u7684\u5728\u5168\u5c40\u8303\u56f4\u91cc\u53ef\u7528\u7684\u65b0\u5bf9\u8c61\u7684\u65b9\u5f0f\u4e4b\u4e00\u3002\n\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5982\u679c\u4f60\u4e0d\u60f3\u4f7f\u7528\u95ed\u5305\uff0c\u90a3\u4e48\u6bcf\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u67e5\u8be2\u51fd\u6570\u90fd\u4e0d\u53ef\u907f\u514d\u5730\u8981\u8c03\u7528 Function \u6784\u9020\u5668\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-meta">&lt;!doctype html&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string">"Content-Type"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"text/html; charset=UTF-8"</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>MDN Example - a recursive shortcut to massively modify the DOM<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">var</span> domQuery = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">var</span> aDOMFunc = [\n        Element.prototype.removeAttribute,\n        Element.prototype.setAttribute,\n        CSSStyleDeclaration.prototype.removeProperty,\n        CSSStyleDeclaration.prototype.setProperty\n      ];\n\n  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setSomething</span> (<span class="hljs-params">bStyle, sProp, sVal</span>) </span>{\n    <span class="hljs-keyword">var</span>  bSet = <span class="hljs-built_in">Boolean</span>(sVal), fAction = aDOMFunc[bSet | bStyle &lt;&lt; <span class="hljs-number">1</span>],\n         aArgs = <span class="hljs-built_in">Array</span>.prototype.slice.call(<span class="hljs-built_in">arguments</span>, <span class="hljs-number">1</span>, bSet ? <span class="hljs-number">3</span> : <span class="hljs-number">2</span>),\n         aNodeList = bStyle ? <span class="hljs-keyword">this</span>.cssNodes : <span class="hljs-keyword">this</span>.nodes;\n\n    <span class="hljs-keyword">if</span> (bSet &amp;&amp; bStyle) { aArgs.push(<span class="hljs-string">""</span>); }\n    <span class="hljs-keyword">for</span> (\n      <span class="hljs-keyword">var</span> nItem = <span class="hljs-number">0</span>, nLen = <span class="hljs-keyword">this</span>.nodes.length;\n      nItem &lt; nLen;\n      fAction.apply(aNodeList[nItem++], aArgs)\n    );\n    <span class="hljs-keyword">this</span>.follow = setSomething.caller;\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>;\n  }\n\n  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setStyles</span> (<span class="hljs-params">sProp, sVal</span>) </span>{ <span class="hljs-keyword">return</span> setSomething.call(<span class="hljs-keyword">this</span>, <span class="hljs-literal">true</span>, sProp, sVal); }\n  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setAttribs</span> (<span class="hljs-params">sProp, sVal</span>) </span>{ <span class="hljs-keyword">return</span> setSomething.call(<span class="hljs-keyword">this</span>, <span class="hljs-literal">false</span>, sProp, sVal); }\n  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSelectors</span> (<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.selectors; };\n  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getNodes</span> (<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.nodes; };\n\n  <span class="hljs-keyword">return</span> (<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">sSelectors</span>) </span>{\n    <span class="hljs-keyword">var</span> oQuery = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Function</span>(<span class="hljs-string">\'return arguments.callee.follow.apply(arguments.callee, arguments);\'</span>);\n    oQuery.selectors = sSelectors;\n    oQuery.nodes = <span class="hljs-built_in">document</span>.querySelectorAll(sSelectors);\n    oQuery.cssNodes = <span class="hljs-built_in">Array</span>.prototype.map.call(oQuery.nodes, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">oInlineCSS</span>) </span>{ <span class="hljs-keyword">return</span> oInlineCSS.style; });\n    oQuery.attributes = setAttribs;\n    oQuery.inlineStyle = setStyles;\n    oQuery.follow = getNodes;\n    oQuery.toString = getSelectors;\n    oQuery.valueOf = getNodes;\n    <span class="hljs-keyword">return</span> oQuery;\n  });\n})();\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"testClass"</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Some text<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"testClass"</span>&gt;</span>dolor sit amet<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span>&gt;</span><span class="actionscript">\n  domQuery(<span class="hljs-string">\'.testClass\'</span>)\n\u200b    .attributes(<span class="hljs-string">\'lang\'</span>, <span class="hljs-string">\'en\'</span>)(<span class="hljs-string">\'title\'</span>, <span class="hljs-string">\'Risus abundat in ore stultorum\'</span>)\n    .inlineStyle(<span class="hljs-string">\'background-color\'</span>, <span class="hljs-string">\'black\'</span>)(<span class="hljs-string">\'color\'</span>, <span class="hljs-string">\'white\'</span>)(<span class="hljs-string">\'width\'</span>, <span class="hljs-string">\'100px\'</span>)(<span class="hljs-string">\'height\'</span>, <span class="hljs-string">\'50px\'</span>);\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);