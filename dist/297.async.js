(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[297],{"za/9":function(s,n){s.exports='<h1 id="\u6587\u4ef6\u548c\u76ee\u5f55">\u6587\u4ef6\u548c\u76ee\u5f55</h1>\n<h2 id="\u663e\u793a\u5f53\u524d\u76ee\u5f55">\u663e\u793a\u5f53\u524d\u76ee\u5f55</h2>\n<pre><code class="language-javascript">[wawjqyh<span class="hljs-variable">@qiu</span> ~]<span class="hljs-variable">$ </span>pwd\n/home/wawjqyh</code></pre>\n<h2 id="\u67e5\u770b\u76ee\u5f55\u7684\u5185\u5bb9">\u67e5\u770b\u76ee\u5f55\u7684\u5185\u5bb9</h2>\n<pre><code class="language-javascript">ls <span class="hljs-string">[\u9009\u9879]</span> <span class="hljs-string">[\u6587\u4ef6\u6216\u76ee\u5f55]</span></code></pre>\n<ul>\n<li><code>-a</code> \u663e\u793a\u6240\u6709\u6587\u4ef6\uff0c\u5305\u62ec\u9690\u85cf\u6587\u4ef6</li>\n<li><code>-l</code> \u663e\u793a\u8be6\u7ec6\u4fe1\u606f</li>\n<li><code>-d</code> \u67e5\u770b\u76ee\u5f55\u5c5e\u6027</li>\n<li><code>-h</code> \u4eba\u6027\u5316\u663e\u793a\u6587\u4ef6\u5927\u5c0f</li>\n<li><code>-i</code> \u663e\u793ainode</li>\n</ul>\n<p class="warning">`.`\u5f00\u5934\u7684\u6587\u4ef6\u4e3a\u9690\u85cf\u6587\u4ef6</p>\n\n<h2 id="\u76ee\u5f55">\u76ee\u5f55</h2>\n<p>\u521b\u5efa\u76ee\u5f55</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">mkdir</span> <span class="hljs-keyword">test</span>                      <span class="hljs-comment">//\u521b\u5efatest\u76ee\u5f55</span>\n<span class="hljs-keyword">mkdir</span> -p <span class="hljs-keyword">test</span>/test2             <span class="hljs-comment">//\u521b\u5efatest\u76ee\u5f55\uff0c\u5e76\u5728test\u76ee\u5f55\u4e0b\u521b\u5efatest2\u76ee\u5f55</span>\n\n<span class="hljs-comment">//\u5728\u76ee\u5f55/usr/meng\u4e0b\u5efa\u7acb\u5b50\u76ee\u5f55test\uff0c\u5e76\u4e14\u53ea\u6709\u6587\u4ef6\u4e3b\u6709\u8bfb\u3001\u5199\u548c\u6267\u884c\u6743\u9650\uff0c\u5176\u4ed6\u4eba\u65e0\u6743\u8bbf\u95ee</span>\n<span class="hljs-keyword">mkdir</span> -<span class="hljs-keyword">m</span> 700 /usr/meng/<span class="hljs-keyword">test</span></code></pre>\n<h2 id="\u65b0\u5efa\u6587\u4ef6">\u65b0\u5efa\u6587\u4ef6</h2>\n<pre><code class="language-javascript"><span class="hljs-attribute">touch</span></code></pre>\n<p>touch\u547d\u4ee4\u6709\u4e24\u4e2a\u529f\u80fd\uff1a\u4e00\u662f\u7528\u4e8e\u628a\u5df2\u5b58\u5728\u6587\u4ef6\u7684\u65f6\u95f4\u6807\u7b7e\u66f4\u65b0\u4e3a\u7cfb\u7edf\u5f53\u524d\u7684\u65f6\u95f4\uff08\u9ed8\u8ba4\u65b9\u5f0f\uff09\uff0c\u5b83\u4eec\u7684\u6570\u636e\u5c06\u539f\u5c01\u4e0d\u52a8\u5730\u4fdd\u7559\u4e0b\u6765\uff1b\u4e8c\u662f\u7528\u6765\u521b\u5efa\u65b0\u7684\u7a7a\u6587\u4ef6</p>\n<h2 id="\u5220\u9664">\u5220\u9664</h2>\n<h3 id="rmdir">rmdir</h3>\n<p class="warning">`rmdir` \u53ea\u80fd\u5220\u9664\u7a7a\u76ee\u5f55</p>\n\n<pre><code class="language-javascript">rmdir <span class="hljs-built_in">test</span>      //\u5220\u9664<span class="hljs-built_in">test</span>\u76ee\u5f55\uff0c\u5982\u679c<span class="hljs-built_in">test</span>\u4e0b\u6709\u76ee\u5f55\u6216\u8005\u95ee\u4ef7\u5219\u4e0d\u80fd\u5220\u9664</code></pre>\n<h3 id="rm">rm</h3>\n<p class="danger">\u6ce8\u610f\uff1a\u4f7f\u7528rm\u547d\u4ee4\u8981\u683c\u5916\u5c0f\u5fc3\u3002\u56e0\u4e3a\u4e00\u65e6\u5220\u9664\u4e86\u4e00\u4e2a\u6587\u4ef6\uff0c\u5c31\u65e0\u6cd5\u518d\u6062\u590d\u5b83</p>\n\n<p>\u9009\u9879</p>\n<ul>\n<li><code>-d</code> \u76f4\u63a5\u628a\u6b32\u5220\u9664\u7684\u76ee\u5f55\u7684\u786c\u8fde\u63a5\u6570\u636e\u5220\u9664\u62100\uff0c\u5220\u9664\u8be5\u76ee\u5f55</li>\n<li><code>-f</code> \u5f3a\u5236\u5220\u9664\u6587\u4ef6\u6216\u76ee\u5f55</li>\n<li><code>-i</code> \u5220\u9664\u5df2\u6709\u6587\u4ef6\u6216\u76ee\u5f55\u4e4b\u524d\u5148\u8be2\u95ee\u7528\u6237</li>\n<li><code>-r\u6216-R</code> \u9012\u5f52\u5904\u7406\uff0c\u5c06\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u4e0e\u5b50\u76ee\u5f55\u4e00\u5e76\u5904\u7406</li>\n<li><code>--preserve-root</code> \u4e0d\u5bf9\u6839\u76ee\u5f55\u8fdb\u884c\u9012\u5f52\u64cd\u4f5c</li>\n<li><code>-v</code> \u663e\u793a\u6307\u4ee4\u7684\u8be6\u7ec6\u6267\u884c\u8fc7\u7a0b</li>\n</ul>\n<pre><code class="language-javascript"><span class="hljs-keyword">rm</span> <span class="hljs-keyword">test</span>             <span class="hljs-comment">//rm: cannot remove \'test\': Is a directory  \u63d0\u793a\u4e0d\u80fd\u5220\u9664</span>\n<span class="hljs-keyword">rm</span> <span class="hljs-keyword">test</span> -r          <span class="hljs-comment">//\u5220\u9664\u6587\u4ef6\u5939\uff0c\u8fd9\u65f6\u5982\u679ctest\u4e0b\u6709\u5176\u4ed6\u6587\u4ef6\u4f1a\u9010\u4e00\u8be2\u95ee\u662f\u5426\u5220\u9664</span>\n<span class="hljs-keyword">rm</span> <span class="hljs-keyword">test</span> -rf         <span class="hljs-comment">//\u5f3a\u5236\u5220\u9664</span></code></pre>\n<h2 id="\u590d\u5236">\u590d\u5236</h2>\n<pre><code class="language-javascript">cp <span class="hljs-string">[\u9009\u9879]</span> <span class="hljs-string">[\u6e90\u6587\u4ef6\u6216\u76ee\u5f55]</span> <span class="hljs-string">[\u76ee\u6807\u76ee\u5f55]</span></code></pre>\n<p>\u9009\u9879</p>\n<ul>\n<li><code>-r</code> \u590d\u5236\u76ee\u5f55</li>\n<li><code>-p</code> \u4fdd\u7559\u6e90\u6587\u4ef6\u6216\u76ee\u5f55\u7684\u5c5e\u6027</li>\n<li><code>-d</code> \u82e5\u6e90\u6587\u4ef6\u662f\u94fe\u63a5\u6587\u4ef6\uff0c\u5219\u590d\u5236\u94fe\u63a5\u5c5e\u6027</li>\n<li><code>-a</code> \u76f8\u5f53\u4e8e -pdr</li>\n</ul>\n<p class="warning">\u6240\u6709\u76ee\u6807\u6587\u4ef6\u6307\u5b9a\u7684\u76ee\u5f55\u5fc5\u987b\u662f\u5df1\u7ecf\u5b58\u5728\u7684\uff0ccp\u547d\u4ee4\u4e0d\u80fd\u521b\u5efa\u76ee\u5f55</p>\n\n<pre><code class="language-javascript"><span class="hljs-string">//</span>\u5c06assign\u6587\u4ef6\u590d\u5236\u5230\u5f53\u524d\u76ee\u5f55\u4e0b\ncp <span class="hljs-string">../mary/homework/assign</span> .\n\n<span class="hljs-string">//</span>\u5c06\u6587\u4ef6file\u590d\u5236\u5230\u76ee\u5f55<span class="hljs-string">/usr/men/tmp</span>\u4e0b\uff0c\u5e76\u6539\u540d\u4e3afile1\ncp file <span class="hljs-string">/usr/men/tmp/file1</span>\n\n<span class="hljs-string">//</span>\u5c06\u76ee\u5f55<span class="hljs-string">/usr/men</span>\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u53ca\u5176\u5b50\u76ee\u5f55\u590d\u5236\u5230\u76ee\u5f55<span class="hljs-string">/usr/zh</span>\u4e2d\uff1b\ncp -r <span class="hljs-string">/usr/men</span> <span class="hljs-string">/usr/zh</span>\n\n<span class="hljs-string">//</span>\u4ea4\u4e92\u5f0f\u5730\u5c06\u76ee\u5f55<span class="hljs-string">/usr/men</span>\u4e2d\u7684\u4ee5m\u5f00\u5934\u7684\u6240\u6709<span class="hljs-string">.c</span>\u6587\u4ef6\u590d\u5236\u5230\u76ee\u5f55<span class="hljs-string">/usr/zh</span>\u4e2d\ncp -i <span class="hljs-string">/usr/men</span> m*<span class="hljs-string">.c</span> <span class="hljs-string">/usr/zh</span></code></pre>\n<h2 id="\u79fb\u52a8\u91cd\u547d\u540d">\u79fb\u52a8/\u91cd\u547d\u540d</h2>\n<p>cp [\u9009\u9879] [\u6e90\u6587\u4ef6\u6216\u76ee\u5f55] [\u76ee\u6807\u6587\u4ef6\u6216\u76ee\u5f55]</p>\n<p>\u9009\u9879\u548ccp\u7c7b\u4f3c</p>\n<pre><code class="language-javascript">mv ex3 new1         <span class="hljs-regexp">//</span>\u5c06\u6587\u4ef6ex3\u6539\u540d\u4e3anew1\nmv <span class="hljs-regexp">/usr/m</span>en<span class="hljs-regexp">/* .     /</span><span class="hljs-regexp">/\u5c06\u76ee\u5f55/u</span>sr<span class="hljs-regexp">/men\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u79fb\u5230\u5f53\u524d\u76ee\u5f55\uff08\u7528.\u8868\u793a\uff09\u4e2d</span></code></pre>\n<h2 id="\u94fe\u63a5">\u94fe\u63a5</h2>\n<pre><code class="language-javascript">ln -s <span class="hljs-string">[\u539f\u6587\u4ef6]</span> <span class="hljs-string">[\u76ee\u6807\u6587\u4ef6]</span></code></pre>\n<p>\u9009\u9879</p>\n<ul>\n<li><code>-s</code> \u521b\u5efa\u8f6f\u94fe\u63a5</li>\n</ul>\n<h4 id="\u786c\u94fe\u63a5">\u786c\u94fe\u63a5</h4>\n<ul>\n<li>\u62e5\u6709\u76f8\u540c\u7684i\u8282\u70b9\u548c\u5b58\u50a8block\u5757\uff0c\u53ef\u4ee5\u770b\u505a\u662f\u540c\u4e00\u4e2a\u6587\u4ef6</li>\n<li>\u53ef\u901a\u8fc7i\u8282\u70b9\u8bc6\u522b</li>\n<li>\u4e0d\u80fd\u8de8\u5206\u533a</li>\n<li>\u4e0d\u80fd\u9488\u5bf9\u76ee\u5f55\u4f7f\u7528</li>\n</ul>\n<h4 id="\u8f6f\u94fe\u63a5">\u8f6f\u94fe\u63a5</h4>\n<ul>\n<li>\u7c7b\u4f3cwindows\u5feb\u6377\u65b9\u5f0f</li>\n<li>\u8f6f\u94fe\u63a5\u62e5\u6709\u81ea\u5df1\u7684i\u8282\u70b9\u548cblock\u5757\uff0c\u4f46\u662f\u6570\u636e\u5757\u4e2d\u53ea\u4fdd\u5b58\u539f\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u548ci\u8282\u70b9\u53f7\uff0c\u5e76\u6ca1\u6709\u5b9e\u9645\u7684\u6587\u4ef6\u6570\u636e</li>\n<li>\u4fee\u6539\u4efb\u610f\u6587\u4ef6\uff0c\u53e6\u4e00\u4e2a\u90fd\u6539\u53d8</li>\n<li>\u5220\u9664\u539f\u6587\u4ef6\uff0c\u8f6f\u94fe\u63a5\u4e0d\u80fd\u4f7f\u7528</li>\n</ul>\n'}}]);