(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{ymse:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" target="_blank">en</a></p>\n<h1 id="objectsetprototypeof">Object.setPrototypeOf()</h1>\n<p>Object.setPrototypeOf() \u65b9\u6cd5\u8bbe\u7f6e\u4e00\u4e2a\u6307\u5b9a\u7684\u5bf9\u8c61\u7684\u539f\u578b ( \u5373, \u5185\u90e8[[Prototype]]\u5c5e\u6027\uff09\u5230\u53e6\u4e00\u4e2a\u5bf9\u8c61\u6216  null\u3002</p>\n<p><code>\u8b66\u544a: \u7531\u4e8e\u73b0\u4ee3 JavaScript \u5f15\u64ce\u4f18\u5316\u5c5e\u6027\u8bbf\u95ee\u6240\u5e26\u6765\u7684\u7279\u6027\u7684\u5173\u7cfb\uff0c\u66f4\u6539\u5bf9\u8c61\u7684 [[Prototype]]\u5728\u5404\u4e2a\u6d4f\u89c8\u5668\u548c JavaScript \u5f15\u64ce\u4e0a\u90fd\n\u662f\u4e00\u4e2a\u5f88\u6162\u7684\u64cd\u4f5c\u3002\u5176\u5728\u66f4\u6539\u7ee7\u627f\u7684\u6027\u80fd\u4e0a\u7684\u5f71\u54cd\u662f\u5fae\u5999\u800c\u53c8\u5e7f\u6cdb\u7684\uff0c\u8fd9\u4e0d\u4ec5\u4ec5\u9650\u4e8e obj.__proto__ = ... \u8bed\u53e5\u4e0a\u7684\u65f6\u95f4\u82b1\u8d39\uff0c\u800c\u4e14\u53ef\n\u80fd\u4f1a\u5ef6\u4f38\u5230\u4efb\u4f55\u4ee3\u7801\uff0c\u90a3\u4e9b\u53ef\u4ee5\u8bbf\u95ee\u4efb\u4f55[[Prototype]]\u5df2\u88ab\u66f4\u6539\u7684\u5bf9\u8c61\u7684\u4ee3\u7801\u3002\u5982\u679c\u4f60\u5173\u5fc3\u6027\u80fd\uff0c\u4f60\u5e94\u8be5\u907f\u514d\u8bbe\u7f6e\u4e00\u4e2a\u5bf9\u8c61\u7684 [[Prototype]]\u3002\n\u76f8\u53cd\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528 Object.create()\u6765\u521b\u5efa\u5e26\u6709\u4f60\u60f3\u8981\u7684[[Prototype]]\u7684\u65b0\u5bf9\u8c61\u3002</code></p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript"><span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>set<span class="hljs-constructor">PrototypeOf(<span class="hljs-params">obj</span>, <span class="hljs-params">prototype</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>obj</code> \u8981\u8bbe\u7f6e\u5176\u539f\u578b\u7684\u5bf9\u8c61\u3002.</li>\n<li><code>prototype</code> \u8be5\u5bf9\u8c61\u7684\u65b0\u539f\u578b(\u4e00\u4e2a\u5bf9\u8c61 \u6216 null).</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u5982\u679c\u5bf9\u8c61\u7684[[Prototype]]\u88ab\u4fee\u6539\u6210\u4e0d\u53ef\u6269\u5c55(\u901a\u8fc7 Object.isExtensible()\u67e5\u770b)\uff0c\u5c31\u4f1a\u629b\u51fa TypeError\u5f02\u5e38\u3002\u5982\u679cprototype\u53c2\u6570\u4e0d\u662f\u4e00\n\u4e2a\u5bf9\u8c61\u6216\u8005null(\u4f8b\u5982\uff0c\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\uff0cboolean\uff0c\u6216\u8005 undefined)\uff0c\u5219\u4ec0\u4e48\u90fd\u4e0d\u505a\u3002\u5426\u5219\uff0c\u8be5\u65b9\u6cd5\u5c06obj\u7684[[Prototype]]\u4fee\u6539\u4e3a\u65b0\u7684\u503c\u3002</p>\n<p>Object.setPrototypeOf()\u662fECMAScript 6\u6700\u65b0\u8349\u6848\u4e2d\u7684\u65b9\u6cd5\uff0c\u76f8\u5bf9\u4e8e Object.prototype.__proto__ \uff0c\u5b83\u88ab\u8ba4\u4e3a\u662f\u4fee\u6539\u5bf9\u8c61\u539f\u578b\u66f4\u5408\u9002\u7684\u65b9\u6cd5</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript">var dict = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>set<span class="hljs-constructor">PrototypeOf({}, <span class="hljs-params">null</span>)</span>;</code></pre>\n<h2 id="polyfill">Polyfill</h2>\n<p>\u6211\u4eec\u5fc5\u987b\u501f\u52a9\u975e\u6807\u51c6\u7684</p>\n<p>\u4f7f\u7528\u8f83\u65e7\u7684 Object.prototype.__proto__ \u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5b9a\u4e49Object.setPrototypeOf \u5982\u679c\u5b83\u4e0d\u53ef\u7528\uff1a.</p>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u4ec5\u9002\u7528\u4e8eChrome\u548cFireFox\uff0c\u5728IE\u4e2d\u4e0d\u5de5\u4f5c\uff1a</span>\n<span class="hljs-built_in">Object</span>.setPrototypeOf = <span class="hljs-built_in">Object</span>.setPrototypeOf || <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">obj, proto</span>) </span>{\n  obj.__proto__ = proto;\n  <span class="hljs-keyword">return</span> obj;\n}</code></pre>\n<h2 id="\u9644\u52a0\u539f\u578b\u94fe">\u9644\u52a0\u539f\u578b\u94fe</h2>\n<p>\u901a\u8fc7  Object.getPrototypeOf() \u548c Object.prototype.__proto__ \u7684\u7ec4\u5408\u5141\u8bb8\u5c06\u4e00\u4e2a\u6574\u4e2a\u539f\u578b\u94fe\u9644\u52a0\u5230\u4e00\u4e2a\u65b0\u7684\u539f\u578b\u5bf9\u8c61\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-comment">/**\n*** Object.appendChain(@object, @prototype)\n*\n* Appends the first non-native prototype of a chain to a new prototype.\n* Returns @object (if it was a primitive value it will transformed into an object).\n*\n*** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")\n*** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")\n*\n* Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a\n* new Function(["@arg"(s)], "@function_body") to that chain.\n* Returns the function.\n*\n**/</span>\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>appendChain = <span class="hljs-keyword">function</span>(oChain, oProto) {\n  <span class="hljs-keyword">if</span> (arguments.length &lt; <span class="hljs-number">2</span>) {\n    throw <span class="hljs-keyword">new</span> <span class="hljs-constructor">TypeError(\'Object.<span class="hljs-params">appendChain</span> - Not <span class="hljs-params">enough</span> <span class="hljs-params">arguments</span>\')</span>;\n  }\n  <span class="hljs-keyword">if</span> (typeof oProto<span class="hljs-operator"> === </span>\'number\'<span class="hljs-operator"> || </span>typeof oProto<span class="hljs-operator"> === </span>\'boolean\') {\n    throw <span class="hljs-keyword">new</span> <span class="hljs-constructor">TypeError(\'<span class="hljs-params">second</span> <span class="hljs-params">argument</span> <span class="hljs-params">to</span> Object.<span class="hljs-params">appendChain</span> <span class="hljs-params">must</span> <span class="hljs-params">be</span> <span class="hljs-params">an</span> <span class="hljs-params">object</span> <span class="hljs-params">or</span> <span class="hljs-params">a</span> <span class="hljs-params">string</span>\')</span>;\n  }\n\n  var oNewProto = oProto,\n      oReturn,\n      o2nd,\n      oLast;\n\n  oReturn = o2nd = oLast = oChain instanceof this ? oChain : <span class="hljs-keyword">new</span> oChain.constructor(oChain);\n\n  for (var o1st = this.get<span class="hljs-constructor">PrototypeOf(<span class="hljs-params">o2nd</span>)</span>;\n    o1st !== <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Object</span>.</span></span>prototype<span class="hljs-operator"> &amp;&amp; </span>o1st !== <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Function</span>.</span></span>prototype;\n    o1st = this.get<span class="hljs-constructor">PrototypeOf(<span class="hljs-params">o2nd</span>)</span>\n  ) {\n    o2nd = o1st;\n  }\n\n  <span class="hljs-keyword">if</span> (oProto.constructor<span class="hljs-operator"> === </span>String) {\n    oNewProto = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Function</span>.</span></span>prototype;\n    oReturn = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Function</span>.</span></span>apply(null, <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Array</span>.</span></span>prototype.slice.call(arguments, <span class="hljs-number">1</span>));\n    this.set<span class="hljs-constructor">PrototypeOf(<span class="hljs-params">oReturn</span>, <span class="hljs-params">oLast</span>)</span>;\n  }\n\n  this.set<span class="hljs-constructor">PrototypeOf(<span class="hljs-params">o2nd</span>, <span class="hljs-params">oNewProto</span>)</span>;\n  return oReturn;\n}</code></pre>\n<h2 id="\u4f7f\u7528">\u4f7f\u7528</h2>\n<h3 id="\u4f8b\u5b50\u4e00\uff1a\u5411\u4e00\u4e2a\u539f\u578b\u9644\u52a0\u4e00\u4e2a\u94fe">\u4f8b\u5b50\u4e00\uff1a\u5411\u4e00\u4e2a\u539f\u578b\u9644\u52a0\u4e00\u4e2a\u94fe</h3>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Mammal</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">this</span>.isMammal = <span class="hljs-string">\'yes\'</span>;\n}\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MammalSpecies</span>(<span class="hljs-params">sMammalSpecies</span>) </span>{\n  <span class="hljs-keyword">this</span>.species = sMammalSpecies;\n}\n\nMammalSpecies.prototype = <span class="hljs-keyword">new</span> Mammal();\nMammalSpecies.prototype.constructor = MammalSpecies;\n\n<span class="hljs-keyword">var</span> oCat = <span class="hljs-keyword">new</span> MammalSpecies(<span class="hljs-string">\'Felis\'</span>);\n\n<span class="hljs-built_in">console</span>.log(oCat.isMammal);\n<span class="hljs-comment">// \'yes\'</span>\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">this</span>.breathing = <span class="hljs-string">\'yes\'</span>;\n}\n\n<span class="hljs-built_in">Object</span>.appendChain(oCat, <span class="hljs-keyword">new</span> Animal());\n\n<span class="hljs-built_in">console</span>.log(oCat.breathing);\n<span class="hljs-comment">// \'yes\'</span></code></pre>\n<h3 id="\u4f8b\u5b50\u4e8c\uff1a\u5c06\u4e00\u4e2a\u57fa\u672c\u7c7b\u578b\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u5bf9\u8c61\u7c7b\u578b\u5e76\u6dfb\u52a0\u5230\u539f\u578b\u94fe\u4e0a">\u4f8b\u5b50\u4e8c\uff1a\u5c06\u4e00\u4e2a\u57fa\u672c\u7c7b\u578b\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u5bf9\u8c61\u7c7b\u578b\u5e76\u6dfb\u52a0\u5230\u539f\u578b\u94fe\u4e0a</h3>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Symbol</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">this</span>.isSymbol = <span class="hljs-string">\'yes\'</span>;\n}\n\n<span class="hljs-keyword">var</span> nPrime = <span class="hljs-number">17</span>;\n\n<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> nPrime); <span class="hljs-comment">// \'number\'</span>\n\n<span class="hljs-keyword">var</span> oPrime = <span class="hljs-built_in">Object</span>.appendChain(nPrime, <span class="hljs-keyword">new</span> <span class="hljs-built_in">Symbol</span>());\n\n<span class="hljs-built_in">console</span>.log(oPrime); <span class="hljs-comment">// \'17\'</span>\n<span class="hljs-built_in">console</span>.log(oPrime.isSymbol); <span class="hljs-comment">// \'yes\'</span>\n<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> oPrime); <span class="hljs-comment">// \'object\'</span></code></pre>\n<h3 id="\u4f8b\u5b50\u4e09\uff1a\u7ed9\u51fd\u6570\u7c7b\u578b\u7684\u5bf9\u8c61\u6dfb\u52a0\u4e00\u4e2a\u94fe\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u65b9\u6cd5\u5230\u90a3\u4e2a\u94fe\u4e0a">\u4f8b\u5b50\u4e09\uff1a\u7ed9\u51fd\u6570\u7c7b\u578b\u7684\u5bf9\u8c61\u6dfb\u52a0\u4e00\u4e2a\u94fe\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u65b9\u6cd5\u5230\u90a3\u4e2a\u94fe\u4e0a</h3>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">sName</span>) </span>{\n  <span class="hljs-keyword">this</span>.identity = sName;\n}\n\n<span class="hljs-keyword">var</span> george = <span class="hljs-built_in">Object</span>.appendChain(<span class="hljs-keyword">new</span> Person(<span class="hljs-string">\'George\'</span>), <span class="hljs-string">\'console.log("Hello guys!!");\'</span>);\n\n<span class="hljs-built_in">console</span>.log(george.identity); <span class="hljs-comment">// \'George\'</span>\ngeorge(); <span class="hljs-comment">// \'Hello guys!!\'</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n</tbody></table>\n'}}]);