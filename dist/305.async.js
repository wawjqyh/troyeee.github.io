(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[305],{y3Hb:function(n,t){n.exports='<h1 id="\u8fdb\u7a0b\u7ba1\u7406">\u8fdb\u7a0b\u7ba1\u7406</h1>\n<p>\u8fdb\u7a0b\u662f\u6b63\u5728\u6267\u884c\u7684\u4e00\u4e2a\u7a0b\u5e8f\u6216\u547d\u4ee4\uff0c\u6bcf\u4e00\u4e2a\u8fdb\u7a0b\u90fd\u662f\u4e00\u4e2a\u8fd0\u884c\u7684\u5b9e\u4f53\uff0c\u90fd\u6709\u81ea\u5df1\u7684\u5730\u5740\u7a7a\u95f4\uff0c\u5e76\u5360\u7528\u4e00\u5b9a\u7684\u7cfb\u7edf\u8d44\u6e90</p>\n<h4 id="\u8fdb\u7a0b\u7ba1\u7406-1">\u8fdb\u7a0b\u7ba1\u7406</h4>\n<ul>\n<li>\u5224\u65ad\u670d\u52a1\u5668\u7684\u5065\u5eb7\u72b6\u6001</li>\n<li>\u67e5\u770b\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u8fdb\u7a0b</li>\n<li>\u6740\u6b7b\u8fdb\u7a0b</li>\n</ul>\n<h2 id="\u67e5\u770b\u6240\u6709\u8fdb\u7a0b">\u67e5\u770b\u6240\u6709\u8fdb\u7a0b</h2>\n<h3 id="ps">ps</h3>\n<pre><code class="language-javascript">ps aux          <span class="hljs-comment">// \u67e5\u770b\u7cfb\u7edf\u4e2d\u6240\u6709\u8fdb\u7a0b\uff0c\u4f7f\u7528BSD\u64cd\u4f5c\u7cfb\u7edf\u683c\u5f0f</span>\nps -<span class="hljs-keyword">le</span>          <span class="hljs-comment">// \u67e5\u770b\u7cfb\u7edf\u4e2d\u6240\u6709\u8fdb\u7a0b\uff0c\u4f7f\u7528Linux\u6807\u51c6\u547d\u4ee4\u683c\u5f0f</span></code></pre>\n<p>\u9009\u9879</p>\n<ul>\n<li><code>a</code> \u663e\u793a\u4e00\u4e2a\u7ec8\u7aef\u7684\u6240\u6709\u8fdb\u7a0b\uff0c\u51fa\u6765\u4f1a\u8bdd\u5f15\u7ebf</li>\n<li><code>u</code> \u663e\u793a\u8fdb\u7a0b\u7684\u5f52\u5c5e\u7528\u6237\u53ca\u5185\u5b58\u7684\u4f7f\u7528\u60c5\u51b5</li>\n<li><code>x</code> \u663e\u793a\u6ca1\u6709\u63a7\u5236\u7ec8\u7aef\u7684\u8fdb\u7a0b</li>\n<li><code>-l</code> \u957f\u683c\u5f0f\u663e\u793a\uff0c\u663e\u793a\u66f4\u52a0\u8be6\u7ec6\u7684\u4fe1\u606f</li>\n<li><code>-e</code> \u663e\u793a\u6240\u6709\u8fdb\u7a0b\uff0c\u548c-A\u4f5c\u7528\u4e00\u81f4</li>\n</ul>\n<p>\u547d\u4ee4\u8f93\u51fa</p>\n<ul>\n<li><code>USER</code> \u8be5\u8fdb\u7a0b\u662f\u7531\u54ea\u4e2a\u7528\u6237\u4ea7\u751f\u7684</li>\n<li><code>PID</code> \u8fdb\u7a0b\u7684ID\u53f7</li>\n<li><code>%CPU</code> \u8be5\u8fdb\u7a0b\u5360\u7528CPU\u8d44\u6e90\u7684\u767e\u5206\u6bd4</li>\n<li><code>%MEM</code> \u8be5\u8fdb\u7a0b\u5360\u7528\u7269\u7406\u5185\u5b58\u7684\u767e\u5206\u6bd4</li>\n<li><code>VSZ</code> \u8be5\u8fdb\u7a0b\u5360\u7528\u865a\u62df\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u5355\u4f4dKB</li>\n<li><code>RSS</code> \u8be5\u8fdb\u7a0b\u5360\u7528\u5b9e\u9645\u7269\u7406\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u5355\u4f4dKB</li>\n<li><code>TTY</code> \u8be5\u8fdb\u7a0b\u662f\u5728\u54ea\u4e2a\u7ec8\u7aef\u4e2d\u8fd0\u884c\u7684\u3002\u5176\u4e2dtty1-tty7\u4ee3\u8868\u672c\u5730\u63a7\u5236\u53f0\u7ec8\u7aef\uff0ctty1-tty6\u662f\u672c\u5730\u7684\u5b57\u7b26\u754c\u9762\u7ec8\u7aef\uff0ctty7\u662f\u56fe\u5f62\u7ec8\u7aef\u3002pts/0-255\u4ee3\u8868\u865a\u62df\u7ec8\u7aef</li>\n<li><code>STAT</code> \u8be5\u7a0b\u72b6\u6001<ul>\n<li><code>R</code> \u8fd0\u884c</li>\n<li><code>S</code> \u7761\u7720</li>\n<li><code>T</code> \u505c\u6b62\u72b6\u6001</li>\n<li><code>s</code> \u5305\u542b\u5b50\u8fdb\u7a0b</li>\n<li><code>+</code> \u4f4d\u4e8e\u540e\u53f0</li>\n</ul>\n</li>\n<li><code>START</code> \u8be5\u8fdb\u7a0b\u7684\u542f\u52a8\u65f6\u95f4</li>\n<li><code>TIME</code> \u8be5\u8fdb\u7a0b\u5360\u7528CPU\u7684\u8fd0\u7b97\u65f6\u95f4\uff0c\u6ce8\u610f\u4e0d\u662f\u7cfb\u7edf\u65f6\u95f4</li>\n<li><code>COMMAND</code> \u4ea7\u751f\u6b64\u8fdb\u7a0b\u7684\u547d\u4ee4\u540d</li>\n</ul>\n<h3 id="pstree">pstree</h3>\n<p>\u67e5\u770b\u8fdb\u7a0b\u6811</p>\n<pre><code>pstree <span class="hljs-string">[\u9009\u9879]</span></code></pre><p>\u9009\u9879</p>\n<ul>\n<li><code>-p</code> \u663e\u793a\u8fdb\u7a0b\u7684PID</li>\n<li><code>-u</code> \u663e\u793a\u8fdb\u7a0b\u7684\u6240\u5c5e\u7528\u6237</li>\n</ul>\n<h2 id="\u67e5\u770b\u7cfb\u7edf\u72b6\u6001">\u67e5\u770b\u7cfb\u7edf\u72b6\u6001</h2>\n<p>\u5b9e\u65f6\u67e5\u770b\u7cfb\u7edf\u72b6\u6001\uff0c3\u79d2\u5237\u65b0\u4e00\u6b21</p>\n<pre><code><span class="hljs-attribute">top</span> <span class="hljs-selector-attr">[\u9009\u9879]</span></code></pre><p>\u9009\u9879</p>\n<ul>\n<li><code>-d</code> \u79d2\u6570\uff0c\u6307\u5b9atop\u547d\u4ee4\u6bcf\u9694\u51e0\u79d2\u66f4\u65b0\u3002\u9ed8\u8ba4\u662f3\u79d2</li>\n<li><code>-b</code> \u4f7f\u7528\u6279\u5904\u7406\u6a21\u5f0f\u8f93\u51fa\u3002\u4e00\u822c\u548c &quot;-n&quot; \u9009\u9879\u5408\u7528</li>\n<li><code>-n</code> \u6b21\u6570\uff0c\u6307\u5b9atop\u547d\u4ee4\u6267\u884c\u7684\u6b21\u6570\u3002\u4e00\u822c\u548c &quot;-b&quot; \u9009\u9879\u5408\u7528</li>\n</ul>\n<p>\u5728top\u547d\u4ee4\u7684\u4ea4\u4e92\u6a21\u5f0f\u4e2d\u53ef\u4ee5\u6267\u884c\u7684\u547d\u4ee4\uff1a</p>\n<ul>\n<li><code>?\u6216h</code> \u663e\u793a\u4ea4\u4e92\u6a21\u5f0f\u7684\u5e2e\u52a9</li>\n<li><code>P</code> \u4ee5CPU\u4f7f\u7528\u7387\u6392\u5e8f\uff0c\u9ed8\u8ba4\u5c31\u662f\u6b64\u9879</li>\n<li><code>M</code> \u4ee5\u5185\u5b58\u4f7f\u7528\u7387\u6392\u5e8f</li>\n<li><code>N</code> \u4ee5PID\u6392\u5e8f</li>\n<li><code>q</code> \u9000\u51fatop</li>\n</ul>\n<p>top\u547d\u4ee4\u663e\u793a\u5185\u5bb9</p>\n<table>\n<thead>\n<tr>\n<th align="left"><div style="width:187px">\u5185\u5bb9</div></th>\n<th align="left">\u8bf4\u660e</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">12:23:46</td>\n<td align="left">\u7cfb\u7edf\u5f53\u524d\u65f6\u95f4</td>\n</tr>\n<tr>\n<td align="left">up 1 day, 13:32</td>\n<td align="left">\u7cfb\u7edf\u7684\u8fd0\u884c\u65f6\u95f4\uff0c\u672c\u673a\u5df2\u8fd0\u884c1\u592913\u5c0f\u65f632\u5206\u949f</td>\n</tr>\n<tr>\n<td align="left">2 users</td>\n<td align="left">\u5f53\u524d\u767b\u5f55\u4e86\u4e24\u4e2a\u7528\u6237</td>\n</tr>\n<tr>\n<td align="left">load average: 0.00 0.00 0.00</td>\n<td align="left">\u7cfb\u7edf\u5728\u4e4b\u524d1\u5206\u949f\u30015\u5206\u949f\u300115\u5206\u949f\u7684\u5e73\u5747\u8d1f\u8f7d\u3002\u4e00\u822c\u8ba4\u4e3a\u5c0f\u4e8e1\u65f6\uff0c\u8d1f\u8f7d\u8f83\u5c0f\u3002\u5982\u679c\u5927\u4e8e1\uff0c\u7cfb\u7edf\u5df2\u7ecf\u8d85\u51fa\u8d1f\u8377</td>\n</tr>\n<tr>\n<td align="left">Tasks: 95 total</td>\n<td align="left">\u7cfb\u7edf\u4e2d\u7684\u8fdb\u7a0b\u603b\u6570</td>\n</tr>\n<tr>\n<td align="left">1 running</td>\n<td align="left">\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u6570</td>\n</tr>\n<tr>\n<td align="left">94 sleeping</td>\n<td align="left">\u7761\u7720\u7684\u8fdb\u7a0b</td>\n</tr>\n<tr>\n<td align="left">0 stopped</td>\n<td align="left">\u6b63\u5728\u505c\u6b62\u7684\u8fdb\u7a0b</td>\n</tr>\n<tr>\n<td align="left">0 zombie</td>\n<td align="left">\u50f5\u5c38\u8fdb\u7a0b\uff0c\u5373\u5361\u6b7b\u7684\u8fdb\u7a0b</td>\n</tr>\n<tr>\n<td align="left">Cpu(s): 0.1%us</td>\n<td align="left">\u7528\u6237\u6b27\u5f0f\u5360\u7528\u7684CPU\u767e\u5206\u6bd4</td>\n</tr>\n<tr>\n<td align="left">0.1%sy</td>\n<td align="left">\u7cfb\u7edf\u6a21\u5f0f\u5360\u7528\u7684CPU\u767e\u5206\u6bd4</td>\n</tr>\n<tr>\n<td align="left">0.0%ni</td>\n<td align="left">\u6539\u53d8\u8fc7\u4f18\u5148\u7ea7\u7684\u7528\u6237\u8fdb\u7a0b\u5360\u7528\u7684CPU\u767e\u5206\u6bd4</td>\n</tr>\n<tr>\n<td align="left">99.7%id</td>\n<td align="left">\u7a7a\u95f2CPU\u7684\u767e\u5206\u6bd4</td>\n</tr>\n<tr>\n<td align="left">0.1%wa</td>\n<td align="left">\u7b49\u5f85\u8f93\u5165/\u8f93\u51fa\u7684\u8fdb\u7a0b\u7684\u5360\u7528CPU\u767e\u5206\u6bd4</td>\n</tr>\n<tr>\n<td align="left">0.0%hi</td>\n<td align="left">\u786c\u4e2d\u65ad\u8bf7\u6c42\u670d\u52a1\u5360\u7528\u7684CPU\u767e\u5206\u6bd4</td>\n</tr>\n<tr>\n<td align="left">0.1%si</td>\n<td align="left">\u8f6f\u4e2d\u65ad\u8bf7\u6c42\u670d\u52a1\u5360\u7528\u7684CPU\u767e\u5206\u6bd4</td>\n</tr>\n<tr>\n<td align="left">0.0%st</td>\n<td align="left">st(steal time)\u865a\u62df\u65f6\u95f4\u767e\u5206\u6bd4\u3002\u5c31\u662f\u5f53\u6709\u865a\u62df\u673a\u65f6\uff0c\u865a\u62dfCPU\u7b49\u5f85\u5b9e\u9645CPU\u7684\u65f6\u95f4\u767e\u5206\u6bd4</td>\n</tr>\n<tr>\n<td align="left">Mem: 625344k total</td>\n<td align="left">\u7269\u7406\u5185\u5b58\u7684\u603b\u91cf\uff0c\u5355\u4f4dKB</td>\n</tr>\n<tr>\n<td align="left">57150k used</td>\n<td align="left">\u5df2\u7ecf\u4f7f\u7528\u7684\u7269\u7406\u5185\u5b58\u6570\u91cf</td>\n</tr>\n<tr>\n<td align="left">53840k free</td>\n<td align="left">\u7a7a\u95f2\u7684\u7269\u7406\u5185\u5b58\u6570\u91cf</td>\n</tr>\n<tr>\n<td align="left">65800k buffers</td>\n<td align="left">\u4f5c\u4e3a\u7f13\u51b2\u7684\u5185\u5b58\u6570\u91cf</td>\n</tr>\n<tr>\n<td align="left">Swap: 524280k total</td>\n<td align="left">\u4ea4\u6362\u5206\u533a\uff08\u865a\u62df\u5185\u5b58\uff09\u7684\u603b\u5927\u5c0f</td>\n</tr>\n<tr>\n<td align="left">0k used</td>\n<td align="left">\u5df2\u7ecf\u4f7f\u7528\u7684\u4ea4\u4e92\u5206\u533a\u7684\u5927\u5c0f</td>\n</tr>\n<tr>\n<td align="left">524280k free</td>\n<td align="left">\u7a7a\u95f2\u4ea4\u6362\u5206\u533a\u7684\u5927\u5c0f</td>\n</tr>\n<tr>\n<td align="left">409280k cached</td>\n<td align="left">\u4f5c\u4e3a\u7f13\u5b58\u7684\u4ea4\u4e92\u5206\u533a\u7684\u5927\u5c0f</td>\n</tr>\n</tbody></table>\n<h2 id="\u6740\u6b7b\u8fdb\u7a0b">\u6740\u6b7b\u8fdb\u7a0b</h2>\n<p>\u6ce8\u610f\uff1a\u7a0b\u5e8f\u90fd\u6709\u6b63\u5e38\u5173\u95ed\u7684\u65b9\u5f0f\uff0c\u53ea\u6709\u65e0\u6cd5\u6b63\u5e38\u5173\u95ed\u65f6\u624d\u9700\u8981\u6740\u6b7b\u8fdb\u7a0b</p>\n<h3 id="\u8fdb\u7a0b\u4fe1\u53f7">\u8fdb\u7a0b\u4fe1\u53f7</h3>\n<p>\u5e38\u7528\u8fdb\u7a0b\u4fe1\u53f7</p>\n<table>\n<thead>\n<tr>\n<th align="left">\u4fe1\u53f7\u4ee3\u53f7</th>\n<th align="left">\u4fe1\u53f7\u540d\u79f0</th>\n<th align="left">\u8bf4\u660e</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">1</td>\n<td align="left">SIGHUP</td>\n<td align="left">\u8be5\u4fe1\u53f7\u8ba9\u8fdb\u7a0b\u7acb\u5373\u5173\u95ed\uff0c\u7136\u540e\u91cd\u65b0\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u540e\u91cd\u542f</td>\n</tr>\n<tr>\n<td align="left">2</td>\n<td align="left">SIGINT</td>\n<td align="left">\u7a0b\u5e8f\u7ec8\u6b62\u4fe1\u53f7\uff0c\u7528\u4e8e\u7ec8\u6b62\u524d\u53f0\u8fdb\u7a0b\u3002\u76f8\u5f53\u4e8e\u8f93\u51fa ctrl+c \u5feb\u6377\u952e</td>\n</tr>\n<tr>\n<td align="left">8</td>\n<td align="left">SIGFPE</td>\n<td align="left">\u5728\u53d1\u751f\u81f4\u547d\u7684\u7b97\u672f\u8fd0\u7b97\u9519\u8bef\u65f6\u53d1\u51fa\uff0c\u4e0d\u4ec5\u5305\u62ec\u6d6e\u70b9\u8fd0\u7b97\u9519\u8bef\uff0c\u8fd8\u5305\u62ec\u6ea2\u51fa\u53ca\u9664\u6570\u4e3a0\u7b49\u5176\u5b83\u6240\u6709\u7684\u7b97\u672f\u7684\u9519\u8bef</td>\n</tr>\n<tr>\n<td align="left">9</td>\n<td align="left">SIGKILL</td>\n<td align="left">\u7528\u6765\u7acb\u5373\u7ed3\u675f\u7a0b\u5e8f\u7684\u8fd0\u884c\uff0c\u672c\u4fe1\u53f7\u4e0d\u80fd\u88ab\u963b\u585e\u3001\u5904\u7406\u548c\u5ffd\u7565\u3002\u4e00\u822c\u7528\u4e8e\u5f3a\u5236\u7ec8\u6b62\u8fdb\u7a0b</td>\n</tr>\n<tr>\n<td align="left">14</td>\n<td align="left">SIGALRM</td>\n<td align="left">\u65f6\u949f\u5b9a\u65f6\u4fe1\u53f7\uff0c\u8ba1\u7b97\u7684\u662f\u5b9e\u9645\u7684\u65f6\u95f4\u6216\u65f6\u949f\u65f6\u95f4\uff0calarm\u51fd\u6570\u4f7f\u7528\u8be5\u4fe1\u53f7</td>\n</tr>\n<tr>\n<td align="left">15</td>\n<td align="left">SIGTERM</td>\n<td align="left">\u6b63\u5e38\u7ed3\u675f\u8fdb\u7a0b\u7684\u4fe1\u53f7\uff0ckill \u547d\u4ee4\u7684\u9ed8\u8ba4\u4fe1\u53f7</td>\n</tr>\n<tr>\n<td align="left">18</td>\n<td align="left">SIGCONT</td>\n<td align="left">\u8be5\u4fe1\u53f7\u53ef\u4ee5\u8ba9\u6682\u505c\u7684\u8fdb\u7a0b\u6062\u590d\u6267\u884c\uff0c\u672c\u4fe1\u53f7\u4e0d\u80fd\u88ab\u963b\u65ad</td>\n</tr>\n<tr>\n<td align="left">19</td>\n<td align="left">SIGSTOP</td>\n<td align="left">\u8be5\u4fe1\u53f7\u53ef\u4ee5\u6682\u505c\u524d\u53f0\u8fdb\u7a0b\uff0c\u76f8\u5f53\u4e8e\u8f93\u5165ctrl+z\u5feb\u6377\u952e\u3002\u672c\u4fe1\u53f7\u4e0d\u80fd\u88ab\u963b\u65ad</td>\n</tr>\n</tbody></table>\n<h3 id="kill">kill</h3>\n<pre><code class="language-javascript"><span class="hljs-keyword">kill</span> -<span class="hljs-keyword">l</span>         <span class="hljs-comment">// \u67e5\u770b\u53ef\u7528\u7684\u8fdb\u7a0b\u4fe1\u53f7</span></code></pre>\n<h3 id="pkill">pkill</h3>\n<p>\u6309\u7167\u8fdb\u7a0b\u540d\u7ec8\u6b62\u8fdb\u7a0b</p>\n<pre><code class="language-javascript">pkill <span class="hljs-string">[\u9009\u9879]</span> <span class="hljs-string">[\u4fe1\u53f7]</span> \u8fdb\u7a0b\u540d</code></pre>\n<p>\u9009\u9879\uff1a</p>\n<ul>\n<li><code>-t</code> \u7ec8\u7aef\u53f7\uff1a\u6309\u7167\u7ec8\u7aef\u53f7\u8e22\u51fa\u7528\u6237</li>\n</ul>\n<h3 id="killall">killall</h3>\n<p>\u6309\u7167\u8fdb\u7a0b\u540d\u7ec8\u6b62\u8fdb\u7a0b</p>\n<pre><code class="language-javascript">pkill <span class="hljs-string">[\u9009\u9879]</span> <span class="hljs-string">[\u4fe1\u53f7]</span> \u8fdb\u7a0b\u540d</code></pre>\n<p>\u9009\u9879\uff1a</p>\n<ul>\n<li><code>-i</code> \u4ea4\u4e92\u5f0f\uff0c\u8be2\u95ee\u662f\u5426\u8981\u6740\u6b7b\u67d0\u4e2a\u8fdb\u7a0b</li>\n<li><code>-I</code> \u5ffd\u7565\u8fdb\u7a0b\u540d\u7684\u5927\u5c0f\u5199</li>\n</ul>\n<h2 id="\u6309\u7ec8\u7aef\u53f7\u8e22\u51fa\u7528\u6237">\u6309\u7ec8\u7aef\u53f7\u8e22\u51fa\u7528\u6237</h2>\n<pre><code class="language-bash">w\n<span class="hljs-meta"># \u4f7f\u7528w\u547d\u4ee4\u67e5\u8be2\u672c\u673a\u5df2\u767b\u5f55\u7684\u7528\u6237</span>\n\npkill <span class="hljs-number">-9</span> -t pts/<span class="hljs-number">1</span>\n<span class="hljs-meta"># \u5f3a\u5236\u6740\u6b7b\u4ece pts/1 \u865a\u62df\u7ec8\u7aef\u767b\u5f55\u7684\u8fdb\u7a0b</span></code></pre>\n<h2 id="\u5de5\u4f5c\u7ba1\u7406">\u5de5\u4f5c\u7ba1\u7406</h2>\n<p>\u5de5\u4f5c\u7ba1\u7406\u6307\u7684\u662f\u5728\u5355\u4e2a\u767b\u5f55\u7ec8\u7aef\u4e2d\uff08\u4e5f\u5c31\u662f\u767b\u5f55\u7684shell\u754c\u9762\u4e2d\uff09\u540c\u65f6\u7ba1\u7406\u591a\u4e2a\u5de5\u4f5c\u7684\u884c\u4e3a</p>\n<h4 id="\u6ce8\u610f\u4e8b\u9879">\u6ce8\u610f\u4e8b\u9879</h4>\n<ul>\n<li>\u5f53\u524d\u7684\u767b\u5f55\u7ec8\u7aef\uff0c\u53ea\u80fd\u7ba1\u7406\u5f53\u524d\u7ec8\u7aef\u7684\u5de5\u4f5c\uff0c\u800c\u4e0d\u80fd\u7ba1\u7406\u5176\u4ed6\u767b\u5f55\u7ec8\u7aef\u7684\u5de5\u4f5c</li>\n<li>\u653e\u5165\u540e\u53f0\u7684\u547d\u4ee4\u5fc5\u987b\u53ef\u4ee5\u6301\u7eed\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\uff0c\u8fd9\u6837\u6211\u4eec\u624d\u80fd\u6355\u6349\u548c\u64cd\u4f5c\u8fd9\u4e2a\u5de5\u4f5c</li>\n<li>\u653e\u5165\u540e\u53f0\u6267\u884c\u7684\u547d\u4ee4\u4e0d\u80fd\u548c\u524d\u53f0\u7528\u6237\u6709\u4ea4\u4e92\u6216\u9700\u8981\u524d\u53f0\u8f93\u5165\uff0c\u5426\u5219\u653e\u5165\u540e\u53f0\u53ea\u80fd\u6682\u505c\uff0c\u800c\u4e0d\u80fd\u6267\u884c</li>\n</ul>\n<h3 id="\u628a\u8fdb\u7a0b\u653e\u5165\u540e\u53f0">\u628a\u8fdb\u7a0b\u653e\u5165\u540e\u53f0</h3>\n<pre><code class="language-bash">tar -zcf etx.tar.gz/etc &amp;\n<span class="hljs-meta"># \u5728\u547d\u4ee4\u672b\u5c3e\u52a0 `&amp;` \u7b26\u53f7\uff0c\u628a\u547d\u4ee4\u653e\u5165\u540e\u53f0\uff0c\u5e76\u5728\u540e\u53f0\u6267\u884c</span>\n\nctrl+z\n<span class="hljs-meta"># \u6309\u4e0bctrl+z\u5feb\u6377\u952e\uff0c\u8fdb\u7a0b\u4f1a\u653e\u5728\u540e\u53f0\u5e76\u4e14\u6682\u505c</span></code></pre>\n<h3 id="\u67e5\u770b\u540e\u53f0\u7684\u8fdb\u7a0b">\u67e5\u770b\u540e\u53f0\u7684\u8fdb\u7a0b</h3>\n<pre><code class="language-bash">jobs <span class="hljs-string">[-l]</span></code></pre>\n<p>\u9009\u9879\uff1a</p>\n<ul>\n<li><p><code>-l</code> \u663e\u793a\u5de5\u4f5c\u7684PID</p>\n<p class="warning">\u6ce8\uff1a `+` \u53f7\u4ee3\u8868\u6700\u8fd1\u4e00\u4e2a\u653e\u5165\u540e\u53f0\u7684\u5de5\u4f5c\uff0c\u4e5f\u662f\u5de5\u4f5c\u6062\u590d\u662f\uff0c\u9ed8\u8ba4\u6062\u590d\u7684\u5de5\u4f5c\u3002`-` \u53f7\u4ee3\u8868\u5012\u6570\u7b2c\u4e8c\u4e2a\u653e\u5165\u540e\u53f0\u7684\u5de5\u4f5c</p>\n\n<h3 id="\u5c06\u540e\u53f0\u6682\u505c\u7684\u5de5\u4f5c\u6062\u590d\u5230\u524d\u53f0">\u5c06\u540e\u53f0\u6682\u505c\u7684\u5de5\u4f5c\u6062\u590d\u5230\u524d\u53f0</h3>\n<pre><code class="language-bash"><span class="hljs-built_in">fg</span> %\u5de5\u4f5c\u53f7</code></pre>\n<p>\u53c2\u6570\uff1a</p>\n</li>\n<li><p><code>%\u5de5\u4f5c\u53f7</code> %\u53f7\u53ef\u4ee5\u7701\u7565\uff0c\u4f46\u662f\u6ce8\u610f\u5de5\u4f5c\u53f7\u548cPID\u7684\u533a\u522b</p>\n</li>\n</ul>\n<h3 id="\u628a\u540e\u53f0\u6682\u505c\u7684\u5de5\u4f5c\u6062\u590d\u5230\u540e\u53f0\u6267\u884c">\u628a\u540e\u53f0\u6682\u505c\u7684\u5de5\u4f5c\u6062\u590d\u5230\u540e\u53f0\u6267\u884c</h3>\n<pre><code class="language-bash"><span class="hljs-keyword">bg </span>%\u5de5\u4f5c\u53f7</code></pre>\n<p class="warning">\u6ce8\uff1a\u540e\u53f0\u6062\u590d\u6267\u884c\u7684\u547d\u4ee4\uff0c\u662f\u4e0d\u80fd\u548c\u524d\u53f0\u6709\u4ea4\u4e92\u7684\uff0c\u5426\u5219\u4e0d\u80fd\u6062\u590d\u5230\u540e\u53f0\u6267\u884c</p>'}}]);