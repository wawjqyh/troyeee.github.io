(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[339],{"Yn/s":function(s,n){s.exports='<h1 id="\u6838\u5fc3\u6982\u5ff5">\u6838\u5fc3\u6982\u5ff5</h1>\n<ul>\n<li>entry</li>\n<li>output</li>\n<li>loader</li>\n<li>plugins</li>\n<li>\u6a21\u5f0f</li>\n</ul>\n<h2 id="entry">entry</h2>\n<p>\u6307\u793a <code>webpack</code> \u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u6a21\u5757\uff0c\u6765\u4f5c\u4e3a\u6784\u5efa\u5176\u5185\u90e8\u4f9d\u8d56\u56fe\u7684\u5f00\u59cb\u3002\u8fdb\u5165\u5165\u53e3\u8d77\u70b9\u540e\uff0c<code>webpack</code> \u4f1a\u627e\u51fa\u6709\u54ea\u4e9b\u6a21\u5757\u548c\u5e93\u662f\u5165\u53e3\u8d77\u70b9\uff08\u76f4\u63a5\u548c\u95f4\u63a5\uff09\u4f9d\u8d56\u7684\u6a21\u5757</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {\n  entry: <span class="hljs-string">\'./index.js\'</span>\n};</code></pre>\n<p>\u591a\u4e2a\u5165\u53e3\uff1a\u591a\u4e2a\u5165\u53e3\u7684\u60c5\u51b5\u53ef\u80fd\u4e3a\u591a\u9875\u9762\u5e94\u7528\uff0c\u6216\u8005\u4e1a\u52a1\u4ee3\u7801\u4e0e\u6846\u67b6\u4ee3\u7801\u5206\u5f00</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {\n  entry: [<span class="hljs-string">\'index.js\'</span>, <span class="hljs-string">\'vendor.js\'</span>]\n};\n\n<span class="hljs-comment">// key:value\u5f62\u5f0f\uff08\u63a8\u8350\uff09</span>\n<span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {\n  entry: {\n    index: <span class="hljs-string">\'index.js\'</span>,\n    verder: <span class="hljs-string">\'vendor.js\'</span>\n  }\n};\n\n<span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {\n  entry: {\n    index: [<span class="hljs-string">\'index.js\'</span>, <span class="hljs-string">\'app.js\'</span>],\n    verder: <span class="hljs-string">\'vendor.js\'</span>\n  }\n};</code></pre>\n<h2 id="output">output</h2>\n<p><code>output</code> \u5c5e\u6027\u544a\u8bc9 <code>webpack</code> \u5728\u54ea\u91cc\u8f93\u51fa\u5b83\u6240\u521b\u5efa\u7684 <code>bundles</code>\uff0c\u4ee5\u53ca\u5982\u4f55\u547d\u540d\u8fd9\u4e9b\u6587\u4ef6\uff0c\u9ed8\u8ba4\u503c\u4e3a <code>./dist</code></p>\n<pre><code class="language-javascript"><span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {\n  entry: <span class="hljs-string">\'./index.js\'</span>,\n  output: {\n    filename: <span class="hljs-string">\'index.min.js\'</span>\n  }\n};\n\n<span class="hljs-comment">// \u591a\u4e2a\u6587\u4ef6</span>\n<span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {\n  entry: {\n    index: <span class="hljs-string">\'index.js\'</span>,\n    verder: <span class="hljs-string">\'vendor.js\'</span>\n  },\n\n  <span class="hljs-comment">// name\u5373\u4e3aentry\u7684key\u503c</span>\n  output: {\n    filename: <span class="hljs-string">\'[name].min.[hash:5].js\'</span>\n  }\n};</code></pre>\n<h2 id="loader">loader</h2>\n<h3 id="\u7b80\u4ecb">\u7b80\u4ecb</h3>\n<p>loader \u8ba9 webpack \u80fd\u591f\u53bb\u5904\u7406\u90a3\u4e9b\u975e JavaScript \u6587\u4ef6\uff08webpack \u81ea\u8eab\u53ea\u7406\u89e3 JavaScript\uff09\u3002loader \u53ef\u4ee5\u5c06\u6240\u6709\u7c7b\u578b\u7684\u6587\u4ef6\u8f6c\u6362\u4e3a webpack \u80fd\u591f\u5904\u7406\u7684\u6709\u6548\u6a21\u5757\uff0c\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u5229\u7528 webpack \u7684\u6253\u5305\u80fd\u529b\uff0c\u5bf9\u5b83\u4eec\u8fdb\u884c\u5904\u7406</p>\n<p class="warning">loader \u80fd\u591f import \u5bfc\u5165\u4efb\u4f55\u7c7b\u578b\u7684\u6a21\u5757</p>\n\n<pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-keyword">module</span>.<span class="hljs-title">exports</span> =</span> {\n  <span class="hljs-function"><span class="hljs-keyword">module</span>: {</span>\n    rules: [\n      {\n        test: /\\.css$/,\n        <span class="hljs-keyword">use</span>: \'css-loader\'\n      }\n    ]\n  }\n};</code></pre>\n<h3 id="\u5e38\u7528-loader">\u5e38\u7528 loader</h3>\n<ul>\n<li>\u7f16\u8bd1\u76f8\u5173 <code>babel-loader</code> <code>ts-loader</code></li>\n<li>\u6837\u5f0f\u76f8\u5173 <code>style-loader</code> <code>css-loader</code> <code>less-loader</code> <code>postcss-loader</code></li>\n<li>\u6587\u4ef6\u76f8\u5173 <code>file-loader</code> <code>url-loader</code></li>\n</ul>\n<h2 id="plugins">plugins</h2>\n<ul>\n<li>\u53c2\u4e0e\u6253\u5305\u7684\u6574\u4e2a\u8fc7\u7a0b</li>\n<li>\u6253\u5305\u4f18\u5316\u548c\u538b\u7f29</li>\n<li>\u914d\u7f6e\u7f16\u8bd1\u65f6\u7684\u53d8\u91cf</li>\n<li>\u6781\u5176\u7075\u6d3b</li>\n</ul>\n<pre><code class="language-javascript"><span class="hljs-keyword">const</span> webpack = require(<span class="hljs-string">\'webpack\'</span>);\n\n<span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {\n  ...\n\n  plugins: [<span class="hljs-keyword">new</span> webpack.optimize.UglifyJsPlugin()]\n};</code></pre>\n<p><strong>\u5e38\u7528 plugins</strong></p>\n<p>\u4f18\u5316\u76f8\u5173\uff1a</p>\n<ul>\n<li><code>CommonsChunkPlugin</code> \u63d0\u53d6\u76f8\u540c\u4ee3\u7801\u6210\u4e00\u4e2a\u5355\u72ec\u7684 chunk</li>\n<li><code>UglifyJsWebpackPlugin</code> \u6df7\u6dc6\u538b\u7f29\u4ee3\u7801\uff0c\u53ef\u4ee5\u751f\u6210 js source map</li>\n</ul>\n<p>\u529f\u80fd\u76f8\u5173\uff1a</p>\n<ul>\n<li><code>ExtractTextWebpackPlugin</code> \u63d0\u53d6 css \u6210\u5355\u72ec\u7684\u6587\u4ef6</li>\n<li><code>HtmlWebpackPlugin</code> \u64cd\u4f5c html</li>\n<li><code>HotModuleReplacementPlugin</code> \u6a21\u5757\u70ed\u66f4\u65b0</li>\n<li><code>CopyWebpackPlugin</code> \u62f7\u8d1d\u6587\u4ef6</li>\n</ul>\n<h2 id="\u540d\u8bcd\u89e3\u91ca">\u540d\u8bcd\u89e3\u91ca</h2>\n<ul>\n<li><code>chunk</code> \u4ee3\u7801\u5757</li>\n<li><code>bundle</code> \u6253\u5305\u540e\u7684\u4ee3\u7801\u96c6\u5408</li>\n</ul>\n'}}]);