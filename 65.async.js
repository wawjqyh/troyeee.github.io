(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{nYAf:function(s,a){s.exports='<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank">\u539f\u6587\u94fe\u63a5</a>\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank">en</a></p>\n<h1 id="date">Date</h1>\n<p>\u521b\u5efa Date \u5b9e\u4f8b\u7528\u6765\u5904\u7406\u65e5\u671f\u548c\u65f6\u95f4\u3002Date \u5bf9\u8c61\u57fa\u4e8e1970\u5e741\u67081\u65e5\uff08\u4e16\u754c\u6807\u51c6\u65f6\u95f4\uff09\u8d77\u7684\u6beb\u79d2\u6570\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> today = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n<span class="hljs-keyword">var</span> today = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">1453094034000</span>); <span class="hljs-comment">// by timestamp(accurate to the millimeter)</span>\n<span class="hljs-keyword">var</span> birthday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-string">\'December 17, 1995 03:24:00\'</span>);\n<span class="hljs-keyword">var</span> birthday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-string">\'1995-12-17T03:24:00\'</span>);\n<span class="hljs-keyword">var</span> birthday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">1995</span>, <span class="hljs-number">11</span>, <span class="hljs-number">17</span>);\n<span class="hljs-keyword">var</span> birthday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">1995</span>, <span class="hljs-number">11</span>, <span class="hljs-number">17</span>, <span class="hljs-number">3</span>, <span class="hljs-number">24</span>, <span class="hljs-number">0</span>);\n\n<span class="hljs-keyword">var</span> unixTimestamp = <span class="hljs-built_in">Date</span>.now(); <span class="hljs-comment">// in milliseconds</span></code></pre>\n<h2 id="\u6784\u9020\u51fd\u6570">\u6784\u9020\u51fd\u6570</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">new</span> <span class="hljs-constructor">Date()</span>;\n<span class="hljs-keyword">new</span> <span class="hljs-constructor">Date(<span class="hljs-params">value</span>)</span>;\n<span class="hljs-keyword">new</span> <span class="hljs-constructor">Date(<span class="hljs-params">dateString</span>)</span>;\n<span class="hljs-keyword">new</span> <span class="hljs-constructor">Date(<span class="hljs-params">year</span>, <span class="hljs-params">month</span>[, <span class="hljs-params">day</span>[, <span class="hljs-params">hour</span>[, <span class="hljs-params">minutes</span>[, <span class="hljs-params">seconds</span>[, <span class="hljs-params">milliseconds</span>]]]]])</span>;</code></pre>\n<p class="warning">Note: \u9700\u8981\u6ce8\u610f\u7684\u662f\u53ea\u80fd\u901a\u8fc7\u8c03\u7528 Date \u6784\u9020\u51fd\u6570\u6765\u5b9e\u4f8b\u5316\u65e5\u671f\u5bf9\u8c61\uff1a\u4ee5\u5e38\u89c4\u51fd\u6570\u8c03\u7528\u5b83\uff08\u5373\u4e0d\u52a0 new \u64cd\u4f5c\u7b26\uff09\u5c06\n\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u3002\u53e6\u5916\uff0c\u4e0d\u50cf\u5176\u4ed6JavaScript \u7c7b\u578b\uff0cDate \u5bf9\u8c61\u6ca1\u6709\u5b57\u9762\u91cf\u683c\u5f0f\u3002</p>\n\n<h2 id="\u53c2\u6570">\u53c2\u6570</h2>\n<p class="warning">Note: \u5f53Date\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u8c03\u7528\u5e76\u4f20\u5165\u591a\u4e2a\u53c2\u6570\u65f6\uff0c\u5982\u679c\u6570\u503c\u5927\u4e8e\u5408\u7406\u8303\u56f4\u65f6\uff08\u5982\u6708\u4efd\u4e3a13\u6216\u8005\u5206\u949f\u6570\u4e3a70\uff09\uff0c\u76f8\u90bb\n\u7684\u6570\u503c\u4f1a\u88ab\u8c03\u6574\u3002\u6bd4\u5982 new Date(2013, 13, 1)\u7b49\u4e8enew Date(2014, 1, 1)\uff0c\u5b83\u4eec\u90fd\u8868\u793a\u65e5\u671f2014-02-01\uff08\u6ce8\u610f\u6708\u4efd\u662f\u4ece0\u5f00\u59cb\u7684\uff09\u3002\u5176\u4ed6\n\u6570\u503c\u4e5f\u662f\u7c7b\u4f3c\uff0cnew Date(2013, 2, 1, 0, 70)\u7b49\u4e8enew Date(2013, 2, 1, 1, 10)\uff0c\u90fd\u8868\u793a\u65f6\u95f42013-03-01T01:10:00\u3002</p>\n\n<p class="warning">Note: \u5f53Date\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u8c03\u7528\u5e76\u4f20\u5165\u591a\u4e2a\u53c2\u6570\u65f6\uff0c\u6240\u5b9a\u4e49\u53c2\u6570\u4ee3\u8868\u7684\u662f\u5f53\u5730\u65f6\u95f4\u3002\u5982\u679c\u9700\u8981\u4e16\u754c\u534f\u8c03\u65f6\uff0c\u4f7f\u7528\nnew Date({{jsxref("Date.UTC()", "Date.UTC(...)")}}) \u548c\u76f8\u540c\u53c2\u6570</p>\n\n<ul>\n<li><code>value</code> \u4ee3\u8868\u81ea1970\u5e741\u67081\u65e500:00:00 (\u4e16\u754c\u6807\u51c6\u65f6\u95f4) \u8d77\u7ecf\u8fc7\u7684\u6beb\u79d2\u6570</li>\n<li><code>dateString</code> \u8868\u793a\u65e5\u671f\u7684\u5b57\u7b26\u4e32\u503c\u3002\u8be5\u5b57\u7b26\u4e32\u5e94\u8be5\u80fd\u88ab Date.parse() \u65b9\u6cd5\u8bc6\u522b\uff08\u7b26\u5408 IETF-compliant RFC 2822 timestamps \u6216 version of ISO8601\uff09</li>\n<li><code>year</code> \u4ee3\u8868\u5e74\u4efd\u7684\u6574\u6570\u503c\u3002\u4e3a\u4e86\u907f\u514d2000\u5e74\u95ee\u9898\u6700\u597d\u6307\u5b9a4\u4f4d\u6570\u7684\u5e74\u4efd; \u4f7f\u7528 1998, \u800c\u4e0d\u8981\u7528 98.</li>\n<li><code>month</code> \u4ee3\u8868\u6708\u4efd\u7684\u6574\u6570\u503c\u4ece0\uff081\u6708\uff09\u523011\uff0812\u6708\uff09</li>\n<li><code>day</code> \u4ee3\u8868\u4e00\u4e2a\u6708\u4e2d\u7684\u7b2c\u51e0\u5929\u7684\u6574\u6570\u503c\uff0c\u4ece1\u5f00\u59cb</li>\n<li><code>hour</code> \u4ee3\u8868\u4e00\u5929\u4e2d\u7684\u5c0f\u65f6\u6570\u7684\u6574\u6570\u503c (24\u5c0f\u65f6\u5236)</li>\n<li><code>minute</code> \u5206\u949f\u6570</li>\n<li><code>second</code> \u79d2\u6570</li>\n<li><code>millisecond</code> \u8868\u793a\u65f6\u95f4\u7684\u6beb\u79d2\u90e8\u5206\u7684\u6574\u6570\u503c</li>\n</ul>\n<h2 id="\u63cf\u8ff0">\u63cf\u8ff0</h2>\n<ul>\n<li>\u5982\u679c\u6ca1\u6709\u8f93\u5165\u4efb\u4f55\u53c2\u6570\uff0c\u5219Date\u7684\u6784\u9020\u5668\u4f1a\u4f9d\u636e\u7cfb\u7edf\u8bbe\u7f6e\u7684\u5f53\u524d\u65f6\u95f4\u6765\u521b\u5efa\u4e00\u4e2aDate\u5bf9\u8c61</li>\n<li>\u5982\u679c\u63d0\u4f9b\u4e86\u81f3\u5c11\u4e24\u4e2a\u53c2\u6570\uff0c\u5176\u4f59\u7684\u53c2\u6570\u5747\u4f1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a1\uff08\u5982\u679c\u6ca1\u6709\u63d0\u4f9bday\u53c2\u6570\uff09\u6216\u80050</li>\n<li>JavaScript\u7684\u65f6\u95f4\u662f\u7531\u4e16\u754c\u6807\u51c6\u65f6\u95f4\uff08UTC\uff091970\u5e741\u67081\u65e5\u5f00\u59cb\uff0c\u7528\u6beb\u79d2\u8ba1\u65f6\uff0c\u4e00\u5929\u753186,400,000\u6beb\u79d2\u7ec4\u6210\u3002Date\u5bf9\u8c61\u7684\u8303\u56f4\u662f-100,000,000\u5929\u81f3100,000,000\u5929\uff08\u7b49\u6548\u7684\u6beb\u79d2\u503c\uff09</li>\n<li>JavaScript\u7684Date\u5bf9\u8c61\u4e3a\u8de8\u5e73\u53f0\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u884c\u4e3a\u3002\u65f6\u95f4\u5c5e\u6027\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u7cfb\u7edf\u4e2d\u8868\u793a\u76f8\u540c\u7684\u65f6\u523b\uff0c\u800c\u5982\u679c\u4f7f\u7528\u4e86\u672c\u5730\u65f6\u95f4\u5bf9\u8c61\uff0c\u5219\u53cd\u6620\u5f53\u5730\u7684\u65f6\u95f4</li>\n<li>JavaScript \u7684Date\u5bf9\u8c61\u63d0\u4f9b\u4e86\u6570\u4e2aUTC\u65f6\u95f4\u7684\u65b9\u6cd5\uff0c\u4e5f\u76f8\u5e94\u63d0\u4f9b\u4e86\u5f53\u5730\u65f6\u95f4\u7684\u65b9\u6cd5\u3002UTC\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u6240\u8bf4\u7684\u683c\u6797\u5a01\u6cbb\u65f6\u95f4\uff0c\u6307\u7684\u662ftime\u4e2d\u7684\u4e16\u754c\u65f6\u95f4\u6807\u51c6\u3002\u800c\u5f53\u5730\u65f6\u95f4\u5219\u662f\u6307\u6267\u884cJavaScript\u7684\u5ba2\u6237\u7aef\u7535\u8111\u6240\u8bbe\u7f6e\u7684\u65f6\u95f4</li>\n<li>\u4ee5\u4e00\u4e2a\u51fd\u6570\u7684\u5f62\u5f0f\u6765\u8c03\u7528JavaScript\u7684Date\u5bf9\u8c61\uff08i.e., \u4e0d\u4f7f\u7528 new \u64cd\u4f5c\u7b26\uff09\u4f1a\u8fd4\u56de\u4e00\u4e2a\u4ee3\u8868\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4\u7684\u5b57\u7b26\u4e32</li>\n</ul>\n<h2 id="\u5c5e\u6027">\u5c5e\u6027</h2>\n<p><code>Date.prototype</code></p>\n<p>\u5141\u8bb8\u4e3a Date \u5b9e\u4f8b\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027</p>\n<p><code>Date.length</code></p>\n<p>Date.length \u7684\u503c\u662f 7\u3002\u8fd9\u662f\u8be5\u6784\u9020\u51fd\u6570\u53ef\u63a5\u53d7\u7684\u53c2\u6570\u4e2a\u6570</p>\n<h2 id="\u65b9\u6cd5">\u65b9\u6cd5</h2>\n<p><code>Date.now()</code></p>\n<p>\u8fd4\u56de\u81ea 1970-1-1 00:00:00  UTC (\u4e16\u754c\u6807\u51c6\u65f6\u95f4)\u81f3\u4eca\u6240\u7ecf\u8fc7\u7684\u6beb\u79d2\u6570</p>\n<p><code>Date.parse()</code></p>\n<p>\u89e3\u6790\u4e00\u4e2a\u8868\u793a\u65e5\u671f\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u8fd4\u56de\u4ece 1970-1-1 00:00:00 \u6240\u7ecf\u8fc7\u7684\u6beb\u79d2\u6570</p>\n<p><code>Date.UTC()</code></p>\n<p>\u63a5\u53d7\u548c\u6784\u9020\u51fd\u6570\u6700\u957f\u5f62\u5f0f\u7684\u53c2\u6570\u76f8\u540c\u7684\u53c2\u6570\uff08\u4ece2\u52307\uff09\uff0c\u5e76\u8fd4\u56de\u4ece 1970-01-01 00:00:00 UTC \u5f00\u59cb\u6240\u7ecf\u8fc7\u7684\u6beb\u79d2\u6570</p>\n<h2 id="date-\u5b9e\u4f8b">Date \u5b9e\u4f8b</h2>\n<p>\u6240\u6709\u7684 Date \u5b9e\u4f8b\u90fd\u7ee7\u627f\u81ea Date.prototype\u3002\u4fee\u6539 Date \u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u4f1a\u5f71\u54cd\u5230\u6240\u6709\u7684 Date \u5b9e\u4f8b\u3002</p>\n<h3 id="getter">Getter</h3>\n<p><code>Date.prototype.getDate()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u7684\u6708\u4efd\u4e2d\u7684\u7b2c\u51e0\u5929\uff081-31\uff09</p>\n<p><code>Date.prototype.getDay()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u7684\u661f\u671f\u4e2d\u7684\u7b2c\u51e0\u5929\uff080-6\uff09</p>\n<p><code>Date.prototype.getFullYear()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u7684\u5e74\u4efd\uff08\u56db\u4f4d\u6570\u5e74\u4efd\u65f6\u8fd4\u56de\u56db\u4f4d\u6570\u5b57\uff09</p>\n<p><code>Date.prototype.getHours()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u7684\u5c0f\u65f6\uff080-23\uff09</p>\n<p><code>Date.prototype.getMilliseconds()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u7684\u5fae\u79d2\uff080-999\uff09</p>\n<p><code>Date.prototype.getMinutes()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u7684\u5206\u949f\uff080-59\uff09</p>\n<p><code>Date.prototype.getMonth()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u7684\u6708\u4efd\uff080-11\uff09</p>\n<p><code>Date.prototype.getSeconds()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u8fd4\u56de\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u7684\u79d2\u6570\uff080-59\uff09</p>\n<p><code>Date.prototype.getTime()</code></p>\n<p>\u8fd4\u56de\u4ece1970-1-1 00:00:00 UTC\uff08\u534f\u8c03\u4e16\u754c\u65f6\uff09\u5230\u8be5\u65e5\u671f\u7ecf\u8fc7\u7684\u6beb\u79d2\u6570\uff0c\u5bf9\u4e8e1970-1-1 00:00:00 UTC\u4e4b\u524d\u7684\u65f6\u95f4\u8fd4\u56de\u8d1f\u503c</p>\n<p><code>Date.prototype.getTimezoneOffset()</code></p>\n<p>\u8fd4\u56de\u5f53\u524d\u65f6\u533a\u7684\u65f6\u533a\u504f\u79fb</p>\n<p><code>Date.prototype.getUTCDate()</code>\n\u4ee5\u4e16\u754c\u65f6\u4e3a\u6807\u51c6\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u7684\u65e5\u671f\u5bf9\u8c61\u4e3a\u4e00\u4e2a\u6708\u4e2d\u7684\u7b2c\u51e0\u5929</p>\n<p><code>Date.prototype.getUTCDay()</code>\n\u4ee5\u4e16\u754c\u65f6\u4e3a\u6807\u51c6\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u7684\u65e5\u671f\u5bf9\u8c61\u4e3a\u4e00\u661f\u671f\u4e2d\u7684\u7b2c\u51e0\u5929\uff0c\u5176\u4e2d 0 \u4ee3\u8868\u661f\u671f\u5929</p>\n<p><code>Date.prototype.getUTCFullYear()</code>\n\u4ee5\u4e16\u754c\u65f6\u4e3a\u6807\u51c6\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u7684\u65e5\u671f\u5bf9\u8c61\u7684\u5e74\u4efd</p>\n<p><code>Date.prototype.getUTCHours()</code>\n\u4ee5\u4e16\u754c\u65f6\u4e3a\u6807\u51c6\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u7684\u65e5\u671f\u5bf9\u8c61\u7684\u5c0f\u65f6\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a 0 \u5230 23 \u7684\u6574\u6570</p>\n<p><code>Date.prototype.getUTCMilliseconds()</code>\n\u4ee5\u4e16\u754c\u65f6\u4e3a\u6807\u51c6\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u7684\u65e5\u671f\u5bf9\u8c61\u7684\u6beb\u79d2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a 0 \u5230 999 \u7684\u6574\u6570</p>\n<p><code>Date.prototype.getUTCMinutes()</code>\n\u4ee5\u4e16\u754c\u65f6\u4e3a\u6807\u51c6\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u7684\u65e5\u671f\u5bf9\u8c61\u7684\u5206\u949f\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a 0 \u5230 59 \u7684\u6574\u6570</p>\n<p><code>Date.prototype.getUTCMonth()</code>\n\u4ee5\u4e16\u754c\u65f6\u4e3a\u6807\u51c6\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u7684\u65e5\u671f\u5bf9\u8c61\u7684\u6708\u4efd\uff0c\u8fd4\u56de\u4e00\u4e2a 0 \u5230 11 \u7684\u6574\u6570</p>\n<p><code>Date.prototype.getUTCSeconds()</code>\n\u4ee5\u4e16\u754c\u65f6\u4e3a\u6807\u51c6\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u7684\u65e5\u671f\u5bf9\u8c61\u7684\u79d2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a 0 \u5230 59 \u7684\u6574\u6570</p>\n<p><code>Date.prototype.getYear() [\u5df2\u5e9f\u5f03]</code>\n\u8fd4\u56de\u5e74\u4efd\u540e\u4e24\u4f4d</p>\n<h3 id="setter">Setter</h3>\n<p><code>Date.prototype.setDate()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u4e3a\u6307\u5b9a\u7684\u65e5\u671f\u5bf9\u8c61\u8bbe\u7f6e\u6708\u4efd\u4e2d\u7684\u7b2c\u51e0\u5929</p>\n<p><code>Date.prototype.setFullYear()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u4e3a\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u8bbe\u7f6e\u5b8c\u6574\u5e74\u4efd\uff08\u56db\u4f4d\u6570\u5e74\u4efd\u662f\u56db\u4e2a\u6570\u5b57\uff09</p>\n<p><code>Date.prototype.setHours()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u4e3a\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u8bbe\u7f6e\u5c0f\u65f6\u6570</p>\n<p><code>Date.prototype.setMilliseconds()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u4e3a\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u8bbe\u7f6e\u6beb\u79d2\u6570</p>\n<p><code>Date.prototype.setMinutes()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u4e3a\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u8bbe\u7f6e\u5206\u949f\u6570</p>\n<p><code>Date.prototype.setMonth()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u4e3a\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u8bbe\u7f6e\u6708\u4efd</p>\n<p><code>Date.prototype.setSeconds()</code></p>\n<p>\u6839\u636e\u672c\u5730\u65f6\u95f4\u4e3a\u6307\u5b9a\u65e5\u671f\u5bf9\u8c61\u8bbe\u7f6e\u79d2\u6570</p>\n<p><code>Date.prototype.setTime()</code></p>\n<p>\u901a\u8fc7\u6307\u5b9a\u4ece 1970-1-1 00:00:00 UTC \u5f00\u59cb\u7ecf\u8fc7\u7684\u6beb\u79d2\u6570\u6765\u8bbe\u7f6e\u65e5\u671f\u5bf9\u8c61\u7684\u65f6\u95f4\uff0c\u5bf9\u4e8e\u65e9\u4e8e 1970-1-1 00:00:00 UTC\u7684\u65f6\u95f4\u53ef\u4f7f\u7528\u8d1f\u503c</p>\n<p><code>Date.prototype.setUTCDate()</code></p>\n<p>\u6839\u636e\u4e16\u754c\u65f6\u8bbe\u7f6e Date \u5bf9\u8c61\u4e2d\u6708\u4efd\u7684\u4e00\u5929 (1 ~ 31)</p>\n<p><code>Date.prototype.setUTCFullYear()</code></p>\n<p>\u6839\u636e\u4e16\u754c\u65f6\u8bbe\u7f6e Date \u5bf9\u8c61\u4e2d\u7684\u5e74\u4efd\uff08\u56db\u4f4d\u6570\u5b57\uff09</p>\n<p><code>Date.prototype.setUTCHours()</code></p>\n<p>\u6839\u636e\u4e16\u754c\u65f6\u8bbe\u7f6e Date \u5bf9\u8c61\u4e2d\u7684\u5c0f\u65f6 (0 ~ 23)</p>\n<p><code>Date.prototype.setUTCMilliseconds()</code></p>\n<p>\u6839\u636e\u4e16\u754c\u65f6\u8bbe\u7f6e Date \u5bf9\u8c61\u4e2d\u7684\u6beb\u79d2 (0 ~ 999)</p>\n<p><code>Date.prototype.setUTCMinutes()</code></p>\n<p>\u6839\u636e\u4e16\u754c\u65f6\u8bbe\u7f6e Date \u5bf9\u8c61\u4e2d\u7684\u5206\u949f (0 ~ 59)</p>\n<p><code>Date.prototype.setUTCMonth()</code></p>\n<p>\u6839\u636e\u4e16\u754c\u65f6\u8bbe\u7f6e Date \u5bf9\u8c61\u4e2d\u7684\u6708\u4efd (0 ~ 11)</p>\n<p><code>Date.prototype.setUTCSeconds()</code></p>\n<p>\u6839\u636e\u4e16\u754c\u65f6\u8bbe\u7f6e Date \u5bf9\u8c61\u4e2d\u7684\u79d2\u949f (0 ~ 59)</p>\n<p><code>Date.prototype.setYear() [\u5df2\u5e9f\u5f03]</code></p>\n<p>setYear() \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5e74\u4efd\u3002\u8bf7\u4f7f\u7528 setFullYear() \u65b9\u6cd5\u4ee3\u66ff</p>\n<h3 id="conversion-getter">Conversion getter</h3>\n<p><code>Date.prototype.toDateString()</code></p>\n<p>\u4ee5\u4eba\u7c7b\u6613\u8bfb\uff08human-readable\uff09\u7684\u5f62\u5f0f\u8fd4\u56de\u8be5\u65e5\u671f\u5bf9\u8c61\u65e5\u671f\u90e8\u5206\u7684\u5b57\u7b26\u4e32</p>\n<p><code>Date.prototype.toISOString()</code></p>\n<p>\u628a\u4e00\u4e2a\u65e5\u671f\u8f6c\u6362\u4e3a\u7b26\u5408 ISO 8601 \u6269\u5c55\u683c\u5f0f\u7684\u5b57\u7b26\u4e32</p>\n<p><code>Date.prototype.toJSON()</code></p>\n<p>\u4f7f\u7528 toISOString() \u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u65e5\u671f\u7684\u5b57\u7b26\u4e32\u3002\u4e3a\u4e86\u5728 JSON.stringify() \u65b9\u6cd5\u4e2d\u4f7f\u7528</p>\n<p><code>Date.prototype.toGMTString() [\u5df2\u5e9f\u5f03]</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u57fa\u4e8e GMT (UT) \u65f6\u533a\u7684\u5b57\u7b26\u4e32\u6765\u8868\u793a\u8be5\u65e5\u671f\u3002\u8bf7\u4f7f\u7528 toUTCString() \u65b9\u6cd5\u4ee3\u66ff</p>\n<p><code>Date.prototype.toLocaleDateString()</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u65e5\u671f\u5bf9\u8c61\u65e5\u671f\u90e8\u5206\u7684\u5b57\u7b26\u4e32\uff0c\u8be5\u5b57\u7b26\u4e32\u683c\u5f0f\u4e0e\u7cfb\u7edf\u8bbe\u7f6e\u7684\u5730\u533a\u5173\u8054\uff08locality sensitive\uff09</p>\n<p><code>Date.prototype.toLocaleFormat() [\u975e\u6807\u51c6]</code></p>\n<p>\u4f7f\u7528\u683c\u5f0f\u5b57\u7b26\u4e32\u5c06\u65e5\u671f\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32</p>\n<p><code>Date.prototype.toLocaleString()</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u65e5\u671f\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\uff0c\u8be5\u5b57\u7b26\u4e32\u4e0e\u7cfb\u7edf\u8bbe\u7f6e\u7684\u5730\u533a\u5173\u8054\uff08locality sensitive\uff09\u3002\u8986\u76d6\u4e86 Object.prototype.toLocaleString() \u65b9\u6cd5</p>\n<p><code>Date.prototype.toLocaleTimeString()</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u65e5\u671f\u5bf9\u8c61\u65f6\u95f4\u90e8\u5206\u7684\u5b57\u7b26\u4e32\uff0c\u8be5\u5b57\u7b26\u4e32\u683c\u5f0f\u4e0e\u7cfb\u7edf\u8bbe\u7f6e\u7684\u5730\u533a\u5173\u8054\uff08locality sensitive\uff09</p>\n<p><code>Date.prototype.toSource() [\u975e\u6807\u51c6]</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u4e0eDate\u7b49\u4ef7\u7684\u539f\u59cb\u5b57\u7b26\u4e32\u5bf9\u8c61\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u503c\u53bb\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u3002\u91cd\u5199\u4e86 Object.prototype.toSource() \u8fd9\u4e2a\u65b9\u6cd5</p>\n<p><code>Date.prototype.toString()</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u65e5\u671f\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u3002\u8986\u76d6\u4e86Object.prototype.toString() \u65b9\u6cd5</p>\n<p><code>Date.prototype.toTimeString()</code></p>\n<p>\u4ee5\u4eba\u7c7b\u6613\u8bfb\u683c\u5f0f\u8fd4\u56de\u65e5\u671f\u5bf9\u8c61\u65f6\u95f4\u90e8\u5206\u7684\u5b57\u7b26\u4e32</p>\n<p><code>Date.prototype.toUTCString()</code></p>\n<p>\u628a\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u8f6c\u6362\u4e3a\u4e00\u4e2a\u4ee5UTC\u65f6\u533a\u8ba1\u65f6\u7684\u5b57\u7b26\u4e32</p>\n<p><code>Date.prototype.valueOf()</code></p>\n<p>\u8fd4\u56de\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u7684\u539f\u59cb\u503c\u3002\u8986\u76d6\u4e86 Object.prototype.valueOf() \u65b9\u6cd5</p>\n<h2 id="\u4f8b\u5b50">\u4f8b\u5b50</h2>\n<h3 id="\u521b\u5efa\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u7684\u51e0\u79cd\u65b9\u6cd5">\u521b\u5efa\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u7684\u51e0\u79cd\u65b9\u6cd5</h3>\n<p>\u4e0b\u4f8b\u5c55\u793a\u4e86\u7528\u6765\u521b\u5efa\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\u7684\u591a\u79cd\u65b9\u6cd5\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> today = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n<span class="hljs-keyword">var</span> today = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">1453094034000</span>);<span class="hljs-comment">// by timestamp(accurate to the millimeter)</span>\n<span class="hljs-keyword">var</span> birthday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-string">"December 17, 1995 03:24:00"</span>);\n<span class="hljs-keyword">var</span> birthday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-string">"1995-12-17T03:24:00"</span>);\n<span class="hljs-keyword">var</span> birthday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">1995</span>,<span class="hljs-number">11</span>,<span class="hljs-number">17</span>);\n<span class="hljs-keyword">var</span> birthday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">1995</span>,<span class="hljs-number">11</span>,<span class="hljs-number">17</span>,<span class="hljs-number">3</span>,<span class="hljs-number">24</span>,<span class="hljs-number">0</span>);</code></pre>\n<h3 id="\u4e24\u4f4d\u6570\u5e74\u4efd\u8868\u793a-1900---1999-\u5e74">\u4e24\u4f4d\u6570\u5e74\u4efd\u8868\u793a 1900 - 1999 \u5e74</h3>\n<p>\u4e3a\u4e86\u80fd\u591f\u521b\u5efa\u548c\u83b7\u53d6 0 \u5230 99 \u4e4b\u95f4\u7684\u5e74\u4efd\uff0c\u5e94\u8be5\u4f7f\u7528 Date.prototype.setFullYear() \u548c Date.prototype.getFullYear() \u65b9\u6cd5\u3002</p>\n<pre><code class="language-javascript"><span class="hljs-built_in">var</span> <span class="hljs-built_in">date</span> = <span class="hljs-literal">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">98</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">// Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)</span>\n\n<span class="hljs-comment">// \u5f03\u7528\u7684\u65b9\u6cd5, 98\u5728\u8fd9\u91cc\u88ab\u6620\u5c04\u4e3a1998</span>\n<span class="hljs-built_in">date</span>.setYear(<span class="hljs-number">98</span>);           <span class="hljs-comment">// Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)</span>\n\n<span class="hljs-built_in">date</span>.setFullYear(<span class="hljs-number">98</span>);       <span class="hljs-comment">// Sat Feb 01 0098 00:00:00 GMT+0000 (BST)</span></code></pre>\n<h3 id="\u8ba1\u7b97\u7ecf\u8fc7\u7684\u65f6\u95f4">\u8ba1\u7b97\u7ecf\u8fc7\u7684\u65f6\u95f4</h3>\n<p>\u4e0b\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u8ba1\u7b97\u4e24\u4e2a\u65e5\u671f\u5bf9\u8c61\u7684\u65f6\u95f4\u5dee\uff1a</p>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u4f7f\u7528 Date \u5bf9\u8c61</span>\nvar start = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Date</span>.</span></span>now<span class="hljs-literal">()</span>;\n\n<span class="hljs-comment">// \u8fd9\u91cc\u8fdb\u884c\u8017\u65f6\u7684\u65b9\u6cd5\u8c03\u7528:</span>\n<span class="hljs-keyword">do</span><span class="hljs-constructor">SomethingForALongTime()</span>;\nvar <span class="hljs-keyword">end</span> = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Date</span>.</span></span>now<span class="hljs-literal">()</span>;\nvar elapsed = <span class="hljs-keyword">end</span> - start; <span class="hljs-comment">// \u8fd0\u884c\u65f6\u95f4\u7684\u6beb\u79d2\u503c</span></code></pre>\n<pre><code class="language-javascript"><span class="hljs-comment">// \u4f7f\u7528\u5185\u5efa\u7684\u521b\u5efa\u65b9\u6cd5</span>\nvar start = <span class="hljs-keyword">new</span> <span class="hljs-constructor">Date()</span>;\n\n<span class="hljs-comment">// \u8fd9\u91cc\u8fdb\u884c\u8017\u65f6\u7684\u65b9\u6cd5\u8c03\u7528:</span>\n<span class="hljs-keyword">do</span><span class="hljs-constructor">SomethingForALongTime()</span>;\nvar <span class="hljs-keyword">end</span> = <span class="hljs-keyword">new</span> <span class="hljs-constructor">Date()</span>;\nvar elapsed = <span class="hljs-keyword">end</span>.get<span class="hljs-constructor">Time()</span> - start.get<span class="hljs-constructor">Time()</span>; <span class="hljs-comment">// \u8fd0\u884c\u65f6\u95f4\u7684\u6beb\u79d2\u503c</span></code></pre>\n<pre><code class="language-javascript"><span class="hljs-comment">// to test a function and get back its return</span>\n<span class="hljs-keyword">function</span> printElapsedTime (fTest) {\n    var nStartTime = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Date</span>.</span></span>now<span class="hljs-literal">()</span>,\n        vReturn = f<span class="hljs-constructor">Test()</span>,\n        nEndTime = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Date</span>.</span></span>now<span class="hljs-literal">()</span>;\n    alert(<span class="hljs-string">"Elapsed time: "</span> + <span class="hljs-constructor">String(<span class="hljs-params">nEndTime</span> - <span class="hljs-params">nStartTime</span>)</span> + <span class="hljs-string">" milliseconds"</span>);\n    return vReturn;\n}\nyourFunctionReturn = print<span class="hljs-constructor">ElapsedTime(<span class="hljs-params">yourFunction</span>)</span>;</code></pre>\n<p class="warning">\u6ce8\u610f\uff1a\u5728\u652f\u6301 Web Performance API \u7684\u9ad8\u7cbe\u7ec6\u5ea6\uff08high-resolution\uff09\u65f6\u95f4\u529f\u80fd\u7684\u6d4f\u89c8\u5668\u4e2d\uff0cwindow.performance.now\n\u63d0\u4f9b\u7684\u6240\u7ecf\u8fc7\u7684\u65f6\u95f4\u6bd4 Date.now \u66f4\u53ef\u9760\u548c\u7cbe\u786e</p>\n\n<h2 id="\u89c4\u8303">\u89c4\u8303</h2>\n<table>\n<thead>\n<tr>\n<th align="left">Specification</th>\n<th align="left">Status</th>\n<th align="left">Comment</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">ECMAScript 1rd Edition (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left">Initial definition</td>\n</tr>\n<tr>\n<td align="left">ECMAScript 5.1 (ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">ECMAScript 2015 (6th Edition, ECMA-262)</td>\n<td align="left">Standard</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'}}]);