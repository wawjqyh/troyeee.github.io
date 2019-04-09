(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{zb4e:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" target="_blank">en</a></p>\n<h1 id="objectprototypehasownproperty">Object.prototype.hasOwnProperty()</h1>\n<p>hasOwnProperty() \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u6307\u793a\u5bf9\u8c61\u662f\u5426\u5177\u6709\u6307\u5b9a\u7684\u5c5e\u6027\u4f5c\u4e3a\u81ea\u8eab\uff08\u4e0d\u7ee7\u627f\uff09\u5c5e\u6027\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<pre><code class="language-javascript">obj.has<span class="hljs-constructor">OwnProperty(<span class="hljs-params">prop</span>)</span></code></pre>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>prop</code> \u8981\u68c0\u6d4b\u7684\u5c5e\u6027  \u5b57\u7b26\u4e32 \u540d\u79f0\u6216\u8005 Symbol\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u7528\u6765\u5224\u65ad\u67d0\u4e2a\u5bf9\u8c61\u662f\u5426\u542b\u6709\u6307\u5b9a\u7684\u5c5e\u6027\u7684 Boolean \u3002</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<p>\u6240\u6709\u7ee7\u627f\u4e86 Object \u7684\u5bf9\u8c61\u90fd\u4f1a\u7ee7\u627f\u5230 hasOwnProperty \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u7528\u6765\u68c0\u6d4b\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u542b\u6709\u7279\u5b9a\u7684\u81ea\u8eab\u5c5e\u6027\uff1b\u548c in \u8fd0\u7b97\u7b26\n\u4e0d\u540c\uff0c\u8be5\u65b9\u6cd5\u4f1a\u5ffd\u7565\u6389\u90a3\u4e9b\u4ece\u539f\u578b\u94fe\u4e0a\u7ee7\u627f\u5230\u7684\u5c5e\u6027\u3002</p>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<h3 id="\u4f7f\u7528-hasownproperty-\u65b9\u6cd5\u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728">\u4f7f\u7528 hasOwnProperty \u65b9\u6cd5\u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728</h3>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u68c0\u6d4b\u4e86\u5bf9\u8c61 o \u662f\u5426\u542b\u6709\u81ea\u8eab\u5c5e\u6027 prop\uff1a</p>\n<pre><code class="language-javascript">o = <span class="hljs-keyword">new</span> <span class="hljs-type">Object</span>();\no.prop = <span class="hljs-string">\'exists\'</span>;\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeO</span></span>() {\n  o.<span class="hljs-keyword">new</span><span class="hljs-type">prop</span> = o.prop;\n  delete o.prop;\n}\n\no.hasOwnProperty(<span class="hljs-string">\'prop\'</span>);   <span class="hljs-comment">// \u8fd4\u56de true</span>\nchangeO();\no.hasOwnProperty(<span class="hljs-string">\'prop\'</span>);   <span class="hljs-comment">// \u8fd4\u56de false</span></code></pre>\n<h3 id="\u81ea\u8eab\u5c5e\u6027\u4e0e\u7ee7\u627f\u5c5e\u6027">\u81ea\u8eab\u5c5e\u6027\u4e0e\u7ee7\u627f\u5c5e\u6027</h3>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86 hasOwnProperty \u65b9\u6cd5\u5bf9\u5f85\u81ea\u8eab\u5c5e\u6027\u548c\u7ee7\u627f\u5c5e\u6027\u7684\u533a\u522b\uff1a</p>\n<pre><code class="language-javascript">o = <span class="hljs-keyword">new</span> <span class="hljs-constructor">Object()</span>;\no.prop = \'exists\';\no.has<span class="hljs-constructor">OwnProperty(\'<span class="hljs-params">prop</span>\')</span>;             <span class="hljs-comment">// \u8fd4\u56de true</span>\no.has<span class="hljs-constructor">OwnProperty(\'<span class="hljs-params">toString</span>\')</span>;         <span class="hljs-comment">// \u8fd4\u56de false</span>\no.has<span class="hljs-constructor">OwnProperty(\'<span class="hljs-params">hasOwnProperty</span>\')</span>;   <span class="hljs-comment">// \u8fd4\u56de false</span></code></pre>\n<h3 id="\u904d\u5386\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u8eab\u5c5e\u6027">\u904d\u5386\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u8eab\u5c5e\u6027</h3>\n<p>\u4e0b\u9762\u7684\u4f8b\u5b50\u6f14\u793a\u4e86\u5982\u4f55\u5728\u904d\u5386\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u65f6\u5ffd\u7565\u6389\u7ee7\u627f\u5c5e\u6027\uff0c\u6ce8\u610f\u8fd9\u91cc for...in  \u5faa\u73af\u53ea\u4f1a\u904d\u5386\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u6240\u4ee5\u4e0d\u5e94\u8be5\u57fa\u4e8e\n\u8fd9\u4e2a\u5faa\u73af\u4e2d\u6ca1\u6709\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u800c\u5f97\u51fa hasOwnProperty \u662f\u4e25\u683c\u9650\u5236\u4e8e\u53ef\u679a\u4e3e\u9879\u76ee\u7684\uff08\u5982\u540c Object.getOwnPropertyNames()\uff09\u3002</p>\n<pre><code class="language-javascript">var buz = {\n    fog: <span class="hljs-string">\'stack\'</span>\n};\n\n<span class="hljs-keyword">for</span> (var <span class="hljs-type">name</span> <span class="hljs-keyword">in</span> buz) {\n    <span class="hljs-keyword">if</span> (buz.hasOwnProperty(<span class="hljs-type">name</span>)) {\n        alert("this is fog (" + <span class="hljs-type">name</span> + ") for sure. Value: " + buz[<span class="hljs-type">name</span>]);\n    }\n    <span class="hljs-keyword">else</span> {\n        alert(<span class="hljs-type">name</span>); // toString <span class="hljs-keyword">or</span> something <span class="hljs-keyword">else</span>\n    }\n}</code></pre>\n<h3 id="\u4f7f\u7528-hasownproperty-\u4f5c\u4e3a\u5c5e\u6027\u540d">\u4f7f\u7528 hasOwnProperty \u4f5c\u4e3a\u5c5e\u6027\u540d</h3>\n<p>JavaScript \u5e76\u6ca1\u6709\u4fdd\u62a4 hasOwnProperty \u5c5e\u6027\u540d\uff0c\u56e0\u6b64\u67d0\u4e2a\u5bf9\u8c61\u662f\u6709\u53ef\u80fd\u5b58\u5728\u4f7f\u7528\u8fd9\u4e2a\u5c5e\u6027\u540d\u7684\u5c5e\u6027\uff0c\u4f7f\u7528\u5916\u90e8\u7684 hasOwnProperty \u83b7\n\u5f97\u6b63\u786e\u7684\u7ed3\u679c\u662f\u9700\u8981\u7684\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> foo = {\n    <span class="hljs-attr">hasOwnProperty</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n    },\n    <span class="hljs-attr">bar</span>: <span class="hljs-string">\'Here be dragons\'</span>\n};\n\nfoo.hasOwnProperty(<span class="hljs-string">\'bar\'</span>); <span class="hljs-comment">// \u59cb\u7ec8\u8fd4\u56de false</span>\n\n<span class="hljs-comment">// \u5982\u679c\u62c5\u5fc3\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u539f\u578b\u94fe\u4e0a\u771f\u6b63\u7684 hasOwnProperty \u65b9\u6cd5</span>\n({}).hasOwnProperty.call(foo, <span class="hljs-string">\'bar\'</span>); <span class="hljs-comment">// true</span>\n\n<span class="hljs-comment">// \u4e5f\u53ef\u4ee5\u4f7f\u7528 Object \u539f\u578b\u4e0a\u7684 hasOwnProperty \u5c5e\u6027</span>\n<span class="hljs-built_in">Object</span>.prototype.hasOwnProperty.call(foo, <span class="hljs-string">\'bar\'</span>); <span class="hljs-comment">// true</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 3rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);