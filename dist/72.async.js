(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{USqK:function(s,n){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN" target="_blank">en</a></p>\n<h1 id="isnan">isNaN()</h1>\n<p>isNaN() \u51fd\u6570\u7528\u6765\u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u4e3a NaN\u3002\u6ce8\uff1aisNaN\u51fd\u6570\u5305\u542b\u4e00\u4e9b\u975e\u5e38\u6709\u610f\u601d\u7684\u5f3a\u5236\u8f6c\u6362\u89c4\u5219\uff1b\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ECMAScript 6 \u4e2d\u5b9a\u4e49\u7684 Number.isNaN() \u6216\u8005 typeof \u6765\u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u4e3a\u975e\u6570\u503c\u3002</p>\n<h2 id="\u8bed\u6cd5">\u8bed\u6cd5</h2>\n<p><code>isNaN(testValue)</code></p>\n<h3 id="\u53c2\u6570">\u53c2\u6570</h3>\n<ul>\n<li><code>testValue</code> \u8981\u88ab\u68c0\u6d4b\u7684\u503c\u3002</li>\n</ul>\n<h3 id="\u8fd4\u56de\u503c">\u8fd4\u56de\u503c</h3>\n<p>\u5982\u679c\u503c\u4e3aNaN\u5219\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse</p>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<h3 id="isnan-\u51fd\u6570\u7684\u5fc5\u8981\u6027">isNaN \u51fd\u6570\u7684\u5fc5\u8981\u6027</h3>\n<p>\u4e0e JavaScript \u4e2d\u5176\u4ed6\u7684\u503c\u4e0d\u540c\uff0cNaN\u4e0d\u80fd\u901a\u8fc7\u76f8\u7b49\u64cd\u4f5c\u7b26\uff08== \u548c ===\uff09\u6765\u5224\u65ad \uff0c\u56e0\u4e3a NaN == NaN \u548c NaN === NaN \u90fd\u4f1a\u8fd4\u56de false\u3002 \u56e0\u6b64\uff0cisNaN \u5c31\u5f88\u6709\u5fc5\u8981\u4e86\u3002</p>\n<h3 id="nan\u503c\u7684\u4ea7\u751f">NaN\u503c\u7684\u4ea7\u751f</h3>\n<p>\u5f53\u7b97\u672f\u8fd0\u7b97\u8fd4\u56de\u4e00\u4e2a\u672a\u5b9a\u4e49\u7684\u6216\u65e0\u6cd5\u8868\u793a\u7684\u503c\u65f6\uff0cNaN\u5c31\u4ea7\u751f\u4e86\u3002\u4f46\u662f\uff0cNaN\u5e76\u4e0d\u4e00\u5b9a\u7528\u4e8e\u8868\u793a\u67d0\u4e9b\u503c\u8d85\u51fa\u8868\u793a\u8303\u56f4\u7684\u60c5\u51b5\u3002\u5c06\u67d0\u4e9b\u4e0d\u80fd\u5f3a\u5236\u8f6c\u6362\u4e3a\u6570\u503c\u7684\u975e\u6570\u503c\u8f6c\u6362\u4e3a\u6570\u503c\u7684\u65f6\u5019\uff0c\u4e5f\u4f1a\u5f97\u5230NaN\u3002</p>\n<p>\u4f8b\u5982\uff0c0 \u9664\u4ee50\u4f1a\u8fd4\u56deNaN \u2014\u2014 \u4f46\u662f\u5176\u4ed6\u6570\u9664\u4ee50\u5219\u4e0d\u4f1a\u8fd4\u56deNaN\u3002</p>\n<h3 id="\u4ee4\u4eba\u8d39\u89e3\u7684\u602a\u5f02\u884c\u4e3a">\u4ee4\u4eba\u8d39\u89e3\u7684\u602a\u5f02\u884c\u4e3a</h3>\n<p>\u4ece\u6700\u65e9\u7248\u672c\u7684isNaN\u51fd\u6570\u89c4\u8303\u5f00\u59cb\uff0c \u5176\u9488\u5bf9\u975e\u6570\u503c\u53c2\u6570\u6240\u8868\u73b0\u7684\u884c\u4e3a\u5c31\u4e00\u76f4\u4ee4\u4eba\u8d39\u89e3\u3002 \u5982\u679cisNaN\u51fd\u6570\u7684\u53c2\u6570\u4e0d\u662fNumber\u7c7b\u578b, isNaN()\u4f1a\u9996\u5148\u5c1d\n\u8bd5\u5c06\u8fd9\u4e2a\u53c2\u6570\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u7136\u540e\u624d\u4f1a\u5bf9\u8f6c\u6362\u540e\u7684\u7ed3\u679c\u662f\u5426\u662fNaN\u8fdb\u884c\u5224\u65ad\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u80fd\u88ab\u5f3a\u5236\u8f6c\u6362\u4e3a\u6709\u6548\u7684\u975eNaN\u6570\u503c\u6765\u8bf4\uff08 \u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u7a7a\n\u5b57\u7b26\u4e32\u548c\u5e03\u5c14\u503c\u4f1a\u88ab\u5f3a\u5236\u8f6c\u6362\u4e3a\u6570\u503c0\u62161\uff09\uff0c\u8fd4\u56defalse\u503c\u4e5f\u8bb8\u4f1a\u8ba9\u4eba\u611f\u89c9\u83ab\u540d\u5176\u5999\u3002\u6bd4\u5982\u8bf4\uff0c\u7a7a\u5b57\u7b26\u4e32\u5c31\u660e\u663e\u201d\u4e0d\u662f\u6570\u503c\u201c\uff08not a number\uff09\u3002\n\u8fd9\u79cd\u602a\u5f02\u884c\u4e3a\u8d77\u6e90\u4e8e\uff1a\u201c\u4e0d\u662f\u6570\u503c\u201d\uff08not a number\uff09\u5728\u57fa\u4e8eIEEE-794\u6570\u503c\u7684\u6d6e\u70b9\u8ba1\u7b97\u4f53\u5236\u4e2d\u4ee3\u8868\u4e86\u4e00\u79cd\u7279\u5b9a\u7684\u542b\u4e49\u3002isNaN\u51fd\u6570\u5176\u5b9e\u7b49\u540c\u4e8e\u56de\u7b54\n\u4e86\u8fd9\u6837\u4e00\u4e2a\u95ee\u9898\uff1a\u8fd9\u4e2a\u503c\u88ab\u5f3a\u5236\u8f6c\u6362\u6210\u6570\u503c\u65f6\u4f1a\u4e0d\u4f1a\u8fd4\u56deIEEE-754\u200b\u4e2d\u6240\u8c13\u7684\u201d\u4e0d\u662f\u6570\u503c\u201c\uff08not a number\uff09\u3002</p>\n<p>\u4e0b\u4e00\u4e2a\u7248\u672c\u7684ECMAScript (ES6)\u5305\u542bNumber.isNaN()\u51fd\u6570\u3002\u901a\u8fc7Number.isNaN(x)\u6765\u68c0\u6d4b\u53d8\u91cfx\u662f\u5426\u662f\u4e00\u4e2a\u975e\u6570\u503c\u5c06\u4f1a\u662f\u4e00\u79cd\u53ef\u9760\u7684\u505a\u6cd5\u3002\u7136\u800c\uff0c\u5728\n\u7f3a\u5c11Number.isNaN\u51fd\u6570\u7684\u60c5\u51b5\u4e0b, \u901a\u8fc7\u8868\u8fbe\u5f0f(x != x) \u6765\u68c0\u6d4b\u53d8\u91cfx\u662f\u5426\u662fNaN\u4f1a\u66f4\u52a0\u53ef\u9760\u3002</p>\n<p>\u53ef\u4ee5\u628aisNaN\u770b\u505a\uff1a</p>\n<pre><code class="language-javascript">isNaN = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(value)</span></span> {\n    <span class="hljs-keyword">Number</span>.isNaN(<span class="hljs-keyword">Number</span>(<span class="hljs-keyword">value</span>));\n}</code></pre>\n<h2 id="\u793a\u4f8b">\u793a\u4f8b</h2>\n<pre><code class="language-javascript"><span class="hljs-built_in">isNaN</span>(<span class="hljs-literal">NaN</span>);       <span class="hljs-comment">// true</span>\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-literal">undefined</span>); <span class="hljs-comment">// true</span>\n<span class="hljs-built_in">isNaN</span>({});        <span class="hljs-comment">// true</span>\n\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-literal">true</span>);      <span class="hljs-comment">// false</span>\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-literal">null</span>);      <span class="hljs-comment">// false</span>\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-number">37</span>);        <span class="hljs-comment">// false</span>\n\n<span class="hljs-comment">// strings</span>\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-string">"37"</span>);      <span class="hljs-comment">// false: \u53ef\u4ee5\u88ab\u8f6c\u6362\u6210\u6570\u503c37</span>\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-string">"37.37"</span>);   <span class="hljs-comment">// false: \u53ef\u4ee5\u88ab\u8f6c\u6362\u6210\u6570\u503c37.37</span>\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-string">""</span>);        <span class="hljs-comment">// false: \u7a7a\u5b57\u7b26\u4e32\u88ab\u8f6c\u6362\u62100</span>\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-string">" "</span>);       <span class="hljs-comment">// false: \u5305\u542b\u7a7a\u683c\u7684\u5b57\u7b26\u4e32\u88ab\u8f6c\u6362\u62100</span>\n\n<span class="hljs-comment">// dates</span>\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>());                <span class="hljs-comment">// false</span>\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().toString());     <span class="hljs-comment">// true</span>\n\n<span class="hljs-built_in">isNaN</span>(<span class="hljs-string">"blabla"</span>)   <span class="hljs-comment">// true: "blabla"\u4e0d\u80fd\u8f6c\u6362\u6210\u6570\u503c</span></code></pre>\n<h3 id="\u6709\u7528\u7684\u7279\u6b8a\u884c\u4e3a">\u6709\u7528\u7684\u7279\u6b8a\u884c\u4e3a</h3>\n<p>\u6709\u8bb8\u591a\u65b9\u5f0f\u6765\u770b\u5f85isNaN()\uff1a\u5982\u679cisNaN(x)\u8fd4\u56defalse\uff0c\u90a3\u4e48x\u5728\u4efb\u4f55\u7b97\u6570\u8868\u8fbe\u5f0f\u4e2d\u90fd\u4e0d\u4f1a\u4f7f\u8868\u8fbe\u5f0f\u7b49\u4e8eNaN\uff1b\u5982\u679c\u8fd4\u56detrue\uff0cx\u4f1a\u4f7f\u6240\u6709\u7b97\u6570\u8868\u8fbe\u5f0f\u8fd4\u56deNaN\u3002\n\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u5728JavaScript\u4e2d\uff0cisNaN(x)==true\u7b49\u4ef7\u4e8ex-0=NaN(\u5728JavaScript\u4e2d x-0 == NaN \u603b\u662f\u8fd4\u56defalse\uff0c\u6240\u4ee5\u4f60\u4e0d\u7528\u53bb\u6d4b\u8bd5\u5b83)\u3002\u5b9e\u9645\u4e0a\uff0c isNaN(x),\nisNaN(x - 0),isNaN(Number(x)), Number.isNaN(x - 0),\u548cNumber.isNaN(Number(x)) \u7684\u8fd4\u56de\u503c\u90fd\u662f\u4e00\u6837\u7684 \u5e76\u4e14\u5728JavaScript\u4e2disNaN(x)\u662f\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u4e2d\u6700\u77ed\u7684\u8868\u8fbe\u3002</p>\n<p>\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u7279\u6b8a\u884c\u4e3a\u6765\u68c0\u6d4b\u51fd\u6570\u7684\u53c2\u6570\u662f\u53ef\u8fd0\u7b97\u7684\uff08\u53ef\u4ee5\u50cfnumber\u4e00\u6837\u8fdb\u884c\u52a0\u51cf\u4e58\u9664\u7b49\u8fd0\u7b97\uff09\u3002\u5982\u679c\u4e0d\u53ef\u8fd0\u7b97\uff0c\u5219\u53ef\u8d4b\u4e88\u8fd9\u4e2a\u53c2\u6570\u4e00\u4e2a\u9ed8\n\u8ba4\u7684\u503c\u6216\u5176\u4ed6\u5408\u9002\u7684\u5185\u5bb9\u3002\u8fd9\u6837\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u9690\u5f0f\u8f6c\u6362\u53c2\u6570\u503c\u7684\u51fd\u6570\uff0c\u800c\u8fd9\u5f97\u76ca\u4e8eJavascript\u7684\u5168\u529f\u80fd\u6027\u3002</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increment</span>(<span class="hljs-params">x</span>) </span>{\n  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">isNaN</span>(x)) x = <span class="hljs-number">0</span>;\n  <span class="hljs-keyword">return</span> x + <span class="hljs-number">1</span>;\n};\n\n<span class="hljs-comment">// The same effect with Number.isNaN():</span>\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increment</span>(<span class="hljs-params">x</span>) </span>{\n  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Number</span>.isNaN(<span class="hljs-built_in">Number</span>(x))) x = <span class="hljs-number">0</span>;\n  <span class="hljs-keyword">return</span> x + <span class="hljs-number">1</span>;\n};\n\n<span class="hljs-comment">// In the following cases for the function\'s argument x,</span>\n<span class="hljs-comment">// isNaN(x) is always false, although x is indeed not a</span>\n<span class="hljs-comment">// number, but can be used as such in arithmetical</span>\n<span class="hljs-comment">// expressions</span>\nincrement(<span class="hljs-string">""</span>);            <span class="hljs-comment">// 1: "" is converted to 0</span>\nincrement(<span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>());  <span class="hljs-comment">// 1: String object representing an empty string is converted to 0</span>\nincrement([]);            <span class="hljs-comment">// 1: [] is converted to 0</span>\nincrement(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>());   <span class="hljs-comment">// 1: Array object representing an empty array is converted to 0</span>\nincrement(<span class="hljs-string">"0"</span>);           <span class="hljs-comment">// 1: "0" is converted to 0</span>\nincrement(<span class="hljs-string">"1"</span>);           <span class="hljs-comment">// 2: "1" is converted to 1</span>\nincrement(<span class="hljs-string">"0.1"</span>);         <span class="hljs-comment">// 1.1: "0.1" is converted to 0.1</span>\nincrement(<span class="hljs-string">"Infinity"</span>);    <span class="hljs-comment">// Infinity: "Infinity" is converted to Infinity</span>\nincrement(<span class="hljs-literal">null</span>);          <span class="hljs-comment">// 1: null is converted to 0</span>\nincrement(<span class="hljs-literal">false</span>);         <span class="hljs-comment">// 1: false is converted to 0</span>\nincrement(<span class="hljs-literal">true</span>);          <span class="hljs-comment">// 2: true is converted to 1</span>\nincrement(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>());    <span class="hljs-comment">// returns current date/time in milliseconds plus 1</span>\n\n<span class="hljs-comment">// In the following cases for the function\'s argument x,</span>\n<span class="hljs-comment">// isNaN(x) is always false and x is indeed a number</span>\nincrement(<span class="hljs-number">-1</span>);            <span class="hljs-comment">// 0</span>\nincrement(<span class="hljs-number">-0.1</span>);          <span class="hljs-comment">// 0.9</span>\nincrement(<span class="hljs-number">0</span>);             <span class="hljs-comment">// 1</span>\nincrement(<span class="hljs-number">1</span>);             <span class="hljs-comment">// 2</span>\nincrement(<span class="hljs-number">2</span>);             <span class="hljs-comment">// 3</span>\n<span class="hljs-comment">// ... and so on ...</span>\nincrement(<span class="hljs-literal">Infinity</span>);      <span class="hljs-comment">// Infinity</span>\n\n<span class="hljs-comment">// In the following cases for the function\'s argument x,</span>\n<span class="hljs-comment">// isNaN(x) is always true and x is really not a number,</span>\n<span class="hljs-comment">// thus the function replaces it by 0 and returns 1</span>\nincrement(<span class="hljs-built_in">String</span>);            <span class="hljs-comment">// 1</span>\nincrement(<span class="hljs-built_in">Array</span>);             <span class="hljs-comment">// 1</span>\nincrement(<span class="hljs-string">"blabla"</span>);          <span class="hljs-comment">// 1</span>\nincrement(<span class="hljs-string">"-blabla"</span>);         <span class="hljs-comment">// 1</span>\nincrement(<span class="hljs-number">0</span>/<span class="hljs-number">0</span>);               <span class="hljs-comment">// 1</span>\nincrement(<span class="hljs-string">"0/0"</span>);             <span class="hljs-comment">// 1</span>\nincrement(<span class="hljs-literal">Infinity</span>/<span class="hljs-literal">Infinity</span>); <span class="hljs-comment">// 1</span>\nincrement(<span class="hljs-literal">NaN</span>);               <span class="hljs-comment">// 1</span>\nincrement(<span class="hljs-literal">undefined</span>);         <span class="hljs-comment">// 1</span>\nincrement();                  <span class="hljs-comment">// 1</span>\n\n<span class="hljs-comment">// isNaN(x) is always the same as isNaN(Number(x)),</span>\n<span class="hljs-comment">// but the presence of x is mandatory here!</span>\n<span class="hljs-built_in">isNaN</span>(x) == <span class="hljs-built_in">isNaN</span>(<span class="hljs-built_in">Number</span>(x)) <span class="hljs-comment">// true for every value of x, including x == undefined,</span>\n                             <span class="hljs-comment">// because isNaN(undefined) == true and Number(undefined) returns NaN,</span>\n                             <span class="hljs-comment">// but ...</span>\n<span class="hljs-built_in">isNaN</span>() == <span class="hljs-built_in">isNaN</span>(<span class="hljs-built_in">Number</span>())   <span class="hljs-comment">// false, because i</span></code></pre>\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1st Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);