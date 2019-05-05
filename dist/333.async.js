(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[333],{jq3q:function(s,a){s.exports='<h1 id="hooks---\u94a9\u5b50">Hooks - \u94a9\u5b50</h1>\n<p>Hook\uff08\u4e5f\u79f0\u4e3a\u751f\u547d\u5468\u671f\u4e8b\u4ef6\uff09\u662f\u6267\u884c sequelize \u8c03\u7528\u4e4b\u524d\u548c\u4e4b\u540e\u8c03\u7528\u7684\u51fd\u6570\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u8981\u5728\u4fdd\u5b58\u6a21\u578b\u4e4b\u524d\u59cb\u7ec8\u8bbe\u7f6e\u503c\uff0c\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a <code>beforeUpdate</code>  hook\u3002</p>\n<p>\u83b7\u53d6\u5b8c\u6574\u5217\u8868, \u8bf7\u67e5\u770b <a href="https://github.com/sequelize/sequelize/blob/master/lib/hooks.js#L7">Hooks file</a>.</p>\n<h2 id="\u64cd\u4f5c\u6e05\u5355">\u64cd\u4f5c\u6e05\u5355</h2>\n<pre><code>(<span class="hljs-number">1</span>)\n  before<span class="hljs-constructor">BulkCreate(<span class="hljs-params">instances</span>, <span class="hljs-params">options</span>)</span>\n  before<span class="hljs-constructor">BulkDestroy(<span class="hljs-params">options</span>)</span>\n  before<span class="hljs-constructor">BulkUpdate(<span class="hljs-params">options</span>)</span>\n(<span class="hljs-number">2</span>)\n  before<span class="hljs-constructor">Validate(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n(-)\n  validate\n(<span class="hljs-number">3</span>)\n  after<span class="hljs-constructor">Validate(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n  - <span class="hljs-keyword">or</span> -\n  validation<span class="hljs-constructor">Failed(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>, <span class="hljs-params">error</span>)</span>\n(<span class="hljs-number">4</span>)\n  before<span class="hljs-constructor">Create(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n  before<span class="hljs-constructor">Destroy(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n  before<span class="hljs-constructor">Update(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n  before<span class="hljs-constructor">Save(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n  before<span class="hljs-constructor">Upsert(<span class="hljs-params">values</span>, <span class="hljs-params">options</span>)</span>\n(-)\n  create\n  destroy\n  update\n(<span class="hljs-number">5</span>)\n  after<span class="hljs-constructor">Create(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n  after<span class="hljs-constructor">Destroy(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n  after<span class="hljs-constructor">Update(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n  after<span class="hljs-constructor">Save(<span class="hljs-params">instance</span>, <span class="hljs-params">options</span>)</span>\n  after<span class="hljs-constructor">Upsert(<span class="hljs-params">created</span>, <span class="hljs-params">options</span>)</span>\n(<span class="hljs-number">6</span>)\n  after<span class="hljs-constructor">BulkCreate(<span class="hljs-params">instances</span>, <span class="hljs-params">options</span>)</span>\n  after<span class="hljs-constructor">BulkDestroy(<span class="hljs-params">options</span>)</span>\n  after<span class="hljs-constructor">BulkUpdate(<span class="hljs-params">options</span>)</span></code></pre><h2 id="\u58f0\u660e-hook">\u58f0\u660e Hook</h2>\n<p>Hook \u7684\u53c2\u6570\u901a\u8fc7\u5f15\u7528\u4f20\u9012\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u66f4\u6539\u503c\uff0c\u8fd9\u5c06\u53cd\u6620\u5728insert / update\u8bed\u53e5\u4e2d\u3002 Hook \u53ef\u80fd\u5305\u542b\u5f02\u6b65\u52a8\u4f5c - \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cHook \u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u4e00\u4e2a promise\u3002</p>\n<p>\u76ee\u524d\u6709\u4e09\u79cd\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6dfb\u52a0 hook \u7684\u65b9\u6cd5:</p>\n<pre><code class="language-js">// \u65b9\u6cd5<span class="hljs-number">1</span> \u901a\u8fc7 .define() \u65b9\u6cd5\nconst <span class="hljs-keyword">User</span> = sequelize.define(<span class="hljs-string">\'user\'</span>, {\n  username: DataTypes.STRING,\n  mood: {\n    <span class="hljs-keyword">type</span>: DataTypes.ENUM,\n    <span class="hljs-keyword">values</span>: [<span class="hljs-string">\'happy\'</span>, <span class="hljs-string">\'sad\'</span>, <span class="hljs-string">\'neutral\'</span>]\n  }\n}, {\n  hooks: {\n    beforeValidate: (<span class="hljs-keyword">user</span>, <span class="hljs-keyword">options</span>) =&gt; {\n      <span class="hljs-keyword">user</span>.mood = <span class="hljs-string">\'happy\'</span>;\n    },\n    afterValidate: (<span class="hljs-keyword">user</span>, <span class="hljs-keyword">options</span>) =&gt; {\n      <span class="hljs-keyword">user</span>.username = <span class="hljs-string">\'Toni\'</span>;\n    }\n  }\n});\n\n// \u65b9\u6cd5<span class="hljs-number">2</span> \u901a\u8fc7 . hook() \u65b9\u6cd5 (\u6216\u5176\u522b\u540d .addHook() \u65b9\u6cd5)\n<span class="hljs-keyword">User</span>.hook(<span class="hljs-string">\'beforeValidate\'</span>, (<span class="hljs-keyword">user</span>, <span class="hljs-keyword">options</span>) =&gt; {\n  <span class="hljs-keyword">user</span>.mood = <span class="hljs-string">\'happy\'</span>;\n});\n\n<span class="hljs-keyword">User</span>.addHook(<span class="hljs-string">\'afterValidate\'</span>, <span class="hljs-string">\'someCustomName\'</span>, (<span class="hljs-keyword">user</span>, <span class="hljs-keyword">options</span>) =&gt; {\n  <span class="hljs-keyword">return</span> sequelize.Promise.reject(<span class="hljs-built_in">new</span> Error("I\'m afraid I can\'t let you do that!"));\n});\n\n// \u65b9\u6cd5<span class="hljs-number">3</span> \u901a\u8fc7\u76f4\u63a5\u65b9\u6cd5\n<span class="hljs-keyword">User</span>.beforeCreate((<span class="hljs-keyword">user</span>, <span class="hljs-keyword">options</span>) =&gt; {\n  <span class="hljs-keyword">return</span> hashPassword(<span class="hljs-keyword">user</span>.<span class="hljs-keyword">password</span>).<span class="hljs-keyword">then</span>(hashedPw =&gt; {\n    <span class="hljs-keyword">user</span>.<span class="hljs-keyword">password</span> = hashedPw;\n  });\n});\n\n<span class="hljs-keyword">User</span>.afterValidate(<span class="hljs-string">\'myHookAfter\'</span>, (<span class="hljs-keyword">user</span>, <span class="hljs-keyword">options</span>) =&gt; {\n  <span class="hljs-keyword">user</span>.username = <span class="hljs-string">\'Toni\'</span>;\n});</code></pre>\n<h2 id="\u79fb\u9664-hook">\u79fb\u9664 Hook</h2>\n<p>\u53ea\u80fd\u5220\u9664\u6709\u540d\u79f0\u53c2\u6570\u7684 hook\u3002</p>\n<pre><code class="language-js">const Book = sequelize.define(\'book\', {\n  title: DataTypes.STRING\n});\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Book</span>.</span></span>add<span class="hljs-constructor">Hook(\'<span class="hljs-params">afterCreate</span>\', \'<span class="hljs-params">notifyUsers</span>\', (<span class="hljs-params">book</span>, <span class="hljs-params">options</span>)</span> =&gt; {\n  <span class="hljs-comment">// ...</span>\n});\n\n<span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">Book</span>.</span></span>remove<span class="hljs-constructor">Hook(\'<span class="hljs-params">afterCreate</span>\', \'<span class="hljs-params">notifyUsers</span>\')</span>;</code></pre>\n<p>\u4f60\u53ef\u4ee5\u6709\u5f88\u591a\u540c\u540d\u7684 hook\u3002 \u8c03\u7528 <code>.removeHook()</code> \u5c06\u4f1a\u5220\u9664\u5b83\u4eec\u3002</p>\n<h2 id="\u5168\u5c40--\u901a\u7528-hook">\u5168\u5c40 / \u901a\u7528 Hook</h2>\n<p>\u5168\u5c40 hook \u662f\u6240\u6709\u6a21\u578b\u7684 hook\u3002 \u4ed6\u4eec\u53ef\u4ee5\u5b9a\u4e49\u60a8\u60f3\u8981\u7684\u6240\u6709\u6a21\u578b\u7684\u884c\u4e3a\uff0c\u5e76\u4e14\u5bf9\u63d2\u4ef6\u7279\u522b\u6709\u7528\u3002 \u5b83\u4eec\u53ef\u4ee5\u7528\u4e24\u79cd\u65b9\u5f0f\u6765\u5b9a\u4e49\uff0c\u5b83\u4eec\u7684\u8bed\u4e49\u7565\u6709\u4e0d\u540c\uff1a</p>\n<h3 id="sequelizeoptionsdefine-\u9ed8\u8ba4-hook">Sequelize.options.define (\u9ed8\u8ba4 hook)</h3>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> sequelize = <span class="hljs-keyword">new</span> Sequelize(..., {\n    <span class="hljs-attr">define</span>: {\n        <span class="hljs-attr">hooks</span>: {\n            <span class="hljs-attr">beforeCreate</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n                <span class="hljs-comment">// \u505a\u4e9b\u4ec0\u4e48</span>\n            }\n        }\n    }\n});</code></pre>\n<p>\u8fd9\u5c06\u4e3a\u6240\u6709\u6a21\u578b\u6dfb\u52a0\u4e00\u4e2a\u9ed8\u8ba4 hook\uff0c\u5982\u679c\u6a21\u578b\u6ca1\u6709\u5b9a\u4e49\u81ea\u5df1\u7684 <code>beforeCreate</code>  hook\uff0c\u90a3\u4e48\u5b83\u5c06\u8fd0\u884c\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> User = sequelize.define(<span class="hljs-string">\'user\'</span>);\n<span class="hljs-keyword">const</span> Project = sequelize.define(<span class="hljs-string">\'project\'</span>, {}, {\n    <span class="hljs-attr">hooks</span>: {\n        <span class="hljs-attr">beforeCreate</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n            <span class="hljs-comment">//  \u505a\u4e9b\u5176\u5b83\u4ec0\u4e48</span>\n        }\n    }\n});\n\nUser.create() <span class="hljs-comment">// \u8fd0\u884c\u5168\u5c40 hook</span>\nProject.create() <span class="hljs-comment">// \u8fd0\u884c\u5176\u81ea\u8eab\u7684 hook (\u56e0\u4e3a\u5168\u5c40 hook \u88ab\u8986\u76d6)</span></code></pre>\n<h3 id="sequelizeaddhook-\u5e38\u9a7b-hook">Sequelize.addHook (\u5e38\u9a7b hook)</h3>\n<pre><code class="language-js">sequelize.addHook(<span class="hljs-string">\'beforeCreate\'</span>, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n    <span class="hljs-regexp">//</span> \u505a\u4e9b\u4ec0\u4e48\n});</code></pre>\n<p>\u8fd9\u4e2a hook \u603b\u662f\u5728\u521b\u5efa\u4e4b\u524d\u8fd0\u884c\uff0c\u65e0\u8bba\u6a21\u578b\u662f\u5426\u6307\u5b9a\u4e86\u81ea\u5df1\u7684 <code>beforeCreate</code>  hook\uff1a</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> User = sequelize.define(<span class="hljs-string">\'user\'</span>);\n<span class="hljs-keyword">const</span> Project = sequelize.define(<span class="hljs-string">\'project\'</span>, {}, {\n    <span class="hljs-attr">hooks</span>: {\n        <span class="hljs-attr">beforeCreate</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n            <span class="hljs-comment">// \u505a\u4e9b\u5176\u5b83\u4ec0\u4e48</span>\n        }\n    }\n});\n\nUser.create() <span class="hljs-comment">// \u8fd0\u884c\u5168\u5c40 hook</span>\nProject.create() <span class="hljs-comment">//\u8fd0\u884c\u5176\u81ea\u5df1\u7684 hook \u4e4b\u540e\u8fd0\u884c\u5168\u5c40 hook</span></code></pre>\n<p>\u672c\u5730 hook \u603b\u662f\u5728\u5168\u5c40 hook \u4e4b\u524d\u8fd0\u884c\u3002</p>\n<h3 id="\u5b9e\u4f8b-hook">\u5b9e\u4f8b Hook</h3>\n<p>\u5f53\u60a8\u7f16\u8f91\u5355\u4e2a\u5bf9\u8c61\u65f6\uff0c\u4ee5\u4e0b hook \u5c06\u89e6\u53d1</p>\n<pre><code><span class="hljs-keyword">beforeValidate\n</span><span class="hljs-symbol">afterValidate</span> or validationFailed\n<span class="hljs-keyword">beforeCreate </span>/ <span class="hljs-keyword">beforeUpdate </span> / <span class="hljs-keyword">beforeDestroy\n</span><span class="hljs-symbol">afterCreate</span> / afterUpdate / afterDestroy</code></pre><pre><code class="language-js"><span class="hljs-comment">// ...\u5b9a\u4e49 ...</span>\nUser.beforeCreate(<span class="hljs-function"><span class="hljs-params">user</span> =&gt;</span> {\n  <span class="hljs-keyword">if</span> (user.accessLevel &gt; <span class="hljs-number">10</span> &amp;&amp; user.username !== <span class="hljs-string">"Boss"</span>) {\n    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">"\u60a8\u4e0d\u80fd\u6388\u4e88\u8be5\u7528\u623710\u7ea7\u4ee5\u4e0a\u7684\u8bbf\u95ee\u7ea7\u522b\uff01"</span>)\n  }\n})</code></pre>\n<p>\u6b64\u793a\u4f8b\u5c06\u8fd4\u56de\u9519\u8bef:</p>\n<pre><code class="language-js">User.create({<span class="hljs-string">username:</span> <span class="hljs-string">\'Not a Boss\'</span>, <span class="hljs-string">accessLevel:</span> <span class="hljs-number">20</span>}).<span class="hljs-keyword">catch</span>(err =&gt; {\n  console.log(err); <span class="hljs-comment">// \u60a8\u4e0d\u80fd\u6388\u4e88\u8be5\u7528\u6237 10 \u7ea7\u4ee5\u4e0a\u7684\u8bbf\u95ee\u7ea7\u522b\uff01</span>\n});</code></pre>\n<p>\u4ee5\u4e0b\u793a\u4f8b\u5c06\u8fd4\u56de\u6210\u529f:</p>\n<pre><code class="language-js"><span class="hljs-keyword">User</span>.<span class="hljs-keyword">create</span>({username: <span class="hljs-string">\'Boss\'</span>, accessLevel: <span class="hljs-number">20</span>}).<span class="hljs-keyword">then</span>(<span class="hljs-keyword">user</span> =&gt; {\n  console.log(<span class="hljs-keyword">user</span>); // \u7528\u6237\u540d\u4e3a Boss \u548c accessLevel \u4e3a <span class="hljs-number">20</span> \u7684\u7528\u6237\u5bf9\u8c61\n});</code></pre>\n<h3 id="\u6a21\u578b-hook">\u6a21\u578b Hook</h3>\n<p>\u6709\u65f6\uff0c\u60a8\u5c06\u4e00\u6b21\u7f16\u8f91\u591a\u4e2a\u8bb0\u5f55\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528\u6a21\u578b\u4e0a\u7684 <code>bulkCreate, update, destroy</code> \u65b9\u6cd5\u3002 \u5f53\u60a8\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u65f6\uff0c\u5c06\u4f1a\u89e6\u53d1\u4ee5\u4e0b\u5185\u5bb9\uff1a</p>\n<pre><code><span class="hljs-function"><span class="hljs-title">beforeBulkCreate</span><span class="hljs-params">(instances, options)</span></span>\n<span class="hljs-function"><span class="hljs-title">beforeBulkUpdate</span><span class="hljs-params">(options)</span></span>\n<span class="hljs-function"><span class="hljs-title">beforeBulkDestroy</span><span class="hljs-params">(options)</span></span>\n<span class="hljs-function"><span class="hljs-title">afterBulkCreate</span><span class="hljs-params">(instances, options)</span></span>\n<span class="hljs-function"><span class="hljs-title">afterBulkUpdate</span><span class="hljs-params">(options)</span></span>\n<span class="hljs-function"><span class="hljs-title">afterBulkDestroy</span><span class="hljs-params">(options)</span></span></code></pre><p>\u5982\u679c\u8981\u4e3a\u6bcf\u4e2a\u5355\u72ec\u7684\u8bb0\u5f55\u89e6\u53d1 hook\uff0c\u8fde\u540c\u6279\u91cf hook\uff0c\u60a8\u53ef\u4ee5\u5c06 <code>personalHooks:true</code> \u4f20\u9012\u7ed9\u8c03\u7528\u3002</p>\n<pre><code class="language-js">Model.destroy({ <span class="hljs-string">where:</span> {<span class="hljs-string">accessLevel:</span> <span class="hljs-number">0</span>}, <span class="hljs-string">individualHooks:</span> <span class="hljs-literal">true</span>});\n<span class="hljs-comment">// \u5c06\u9009\u62e9\u8981\u5220\u9664\u7684\u6240\u6709\u8bb0\u5f55\uff0c\u5e76\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u5220\u9664\u4e4b\u524d + \u4e4b\u540e\u89e6\u53d1</span>\n\nModel.update({<span class="hljs-string">username:</span> <span class="hljs-string">\'Toni\'</span>}, { <span class="hljs-string">where:</span> {<span class="hljs-string">accessLevel:</span> <span class="hljs-number">0</span>}, <span class="hljs-string">individualHooks:</span> <span class="hljs-literal">true</span>});\n<span class="hljs-comment">// \u5c06\u9009\u62e9\u8981\u66f4\u65b0\u7684\u6240\u6709\u8bb0\u5f55\uff0c\u5e76\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u66f4\u65b0\u4e4b\u524d + \u4e4b\u540e\u89e6\u53d1</span></code></pre>\n<p>Hook \u65b9\u6cd5\u7684 <code>options</code> \u53c2\u6570\u5c06\u662f\u63d0\u4f9b\u7ed9\u76f8\u5e94\u65b9\u6cd5\u6216\u5176\u514b\u9686\u548c\u6269\u5c55\u7248\u672c\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">Model</span><span class="hljs-selector-class">.beforeBulkCreate</span>((records, {fields}) =&gt; {\n  <span class="hljs-comment">// records = \u7b2c\u4e00\u4e2a\u53c2\u6570\u53d1\u9001\u5230 .bulkCreate</span>\n  <span class="hljs-comment">// fields = \u7b2c\u4e8c\u4e2a\u53c2\u6570\u5b57\u6bb5\u4e4b\u4e00\u53d1\u9001\u5230 .bulkCreate</span>\n  })\n\n<span class="hljs-selector-tag">Model</span><span class="hljs-selector-class">.bulkCreate</span>([\n    {<span class="hljs-attribute">username</span>: <span class="hljs-string">\'Toni\'</span>}, <span class="hljs-comment">// \u90e8\u5206\u8bb0\u5f55\u53c2\u6570</span>\n    {<span class="hljs-attribute">username</span>: <span class="hljs-string">\'Tobi\'</span>} <span class="hljs-comment">// \u90e8\u5206\u8bb0\u5f55\u53c2\u6570</span>\n  ], {<span class="hljs-attribute">fields</span>: [<span class="hljs-string">\'username\'</span>]} <span class="hljs-comment">// \u9009\u9879\u53c2\u6570</span>\n)\n\n<span class="hljs-selector-tag">Model</span><span class="hljs-selector-class">.beforeBulkUpdate</span>(({attributes, where}) =&gt; {\n  <span class="hljs-comment">// where - \u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u514b\u9686\u7684\u5b57\u6bb5\u4e4b\u4e00\u53d1\u9001\u5230 .update</span>\n  <span class="hljs-comment">// attributes - .update \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u514b\u9686\u7684\u5b57\u6bb5\u4e4b\u4e00\u88ab\u7528\u4e8e\u6269\u5c55</span>\n})\n\n<span class="hljs-selector-tag">Model</span><span class="hljs-selector-class">.update</span>({<span class="hljs-attribute">gender</span>: <span class="hljs-string">\'Male\'</span>} <span class="hljs-comment">/*\u5c5e\u6027\u53c2\u6570*/</span>, { <span class="hljs-attribute">where</span>: {<span class="hljs-attribute">username</span>: <span class="hljs-string">\'Tom\'</span>}} <span class="hljs-comment">/*where \u53c2\u6570*/</span>)\n\n<span class="hljs-selector-tag">Model</span><span class="hljs-selector-class">.beforeBulkDestroy</span>(({where, individualHooks}) =&gt; {\n  <span class="hljs-comment">// individualHooks - \u7b2c\u4e8c\u4e2a\u53c2\u6570\u88ab\u6269\u5c55\u7684\u514b\u9686\u88ab\u8986\u76d6\u7684\u9ed8\u8ba4\u503c\u53d1\u9001\u5230 Model.destroy</span>\n  <span class="hljs-comment">// where - \u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u514b\u9686\u7684\u5b57\u6bb5\u4e4b\u4e00\u53d1\u9001\u5230 Model.destroy</span>\n})\n\n<span class="hljs-selector-tag">Model</span><span class="hljs-selector-class">.destroy</span>({ <span class="hljs-attribute">where</span>: {<span class="hljs-attribute">username</span>: <span class="hljs-string">\'Tom\'</span>}} <span class="hljs-comment">/*where \u53c2\u6570*/</span>)</code></pre>\n<p>\u5982\u679c\u7528 <code>updates.OnDuplicate</code> \u53c2\u6570\u4f7f\u7528 <code>Model.bulkCreate(...)</code> \uff0c\u90a3\u4e48 hook \u4e2d\u5bf9 <code>updatesOnDuplicate</code> \u6570\u7ec4\u4e2d\u6ca1\u6709\u7ed9\u51fa\u7684\u5b57\u6bb5\u6240\u505a\u7684\u66f4\u6539\u5c06\u4e0d\u4f1a\u88ab\u6301\u4e45\u4fdd\u7559\u5230\u6570\u636e\u5e93\u3002 \u4f46\u662f\uff0c\u5982\u679c\u8fd9\u662f\u60a8\u60f3\u8981\u7684\uff0c\u5219\u53ef\u4ee5\u66f4\u6539 hook \u4e2d\u7684 updatesOnDuplicate \u9009\u9879\u3002</p>\n<pre><code class="language-js"><span class="hljs-comment">// \u4f7f\u7528 updatesOnDuplicate \u9009\u9879\u6279\u91cf\u66f4\u65b0\u73b0\u6709\u7528\u6237</span>\nUsers.bulkCreate([\n  { <span class="hljs-attribute">id:</span><span class="hljs-string"> 1, isMember</span>: <span class="hljs-literal">true</span> },\n  { <span class="hljs-attribute">id:</span><span class="hljs-string"> 2, isMember</span>: <span class="hljs-literal">false</span> }\n], {\n  <span class="hljs-attribute">updatesOnDuplicate</span>: [<span class="hljs-string">\'isMember\'</span>]\n});\n\nUser.beforeBulkCreate((users, options) =&gt; {\n  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> user <span class="hljs-keyword">of</span> users) {\n    <span class="hljs-keyword">if</span> (user.isMember) {\n      user.memberSince = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n    }\n  }\n\n  <span class="hljs-comment">// \u6dfb\u52a0 memberSince \u5230 updatesOnDuplicate \u5426\u5219 memberSince \u671f\u5c06\u4e0d\u4f1a\u88ab\u4fdd\u5b58\u5230\u6570\u636e\u5e93</span>\n  options.updatesOnDuplicate.push(<span class="hljs-string">\'memberSince\'</span>);\n});</code></pre>\n<h2 id="\u5173\u8054">\u5173\u8054</h2>\n<p>\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0chook \u5bf9\u4e8e\u76f8\u5173\u8054\u7684\u5b9e\u4f8b\u800c\u8a00\u5c06\u662f\u4e00\u6837\u7684\uff0c\u9664\u4e86\u51e0\u4ef6\u4e8b\u60c5\u4e4b\u5916\u3002</p>\n<ol>\n<li>\u5f53\u4f7f\u7528 add/set \u51fd\u6570\u65f6\uff0c\u5c06\u8fd0\u884c beforeUpdate/afterUpdate hook\u3002</li>\n<li>\u8c03\u7528 beforeDestroy/afterDestroy hook \u7684\u552f\u4e00\u65b9\u6cd5\u662f\u4e0e <code>onDelete:&#39;cascade</code> \u548c\u53c2\u6570 <code>hooks\uff1atrue</code> \u76f8\u5173\u8054\u3002 \u4f8b\u5982\uff1a</li>\n</ol>\n<pre><code class="language-js">const Projects = sequelize.<span class="hljs-class"><span class="hljs-keyword">define</span></span>(<span class="hljs-string">\'projects\'</span>, {\n  title: DataTypes.<span class="hljs-built_in">STRING</span>\n});\n\nconst Tasks = sequelize.<span class="hljs-class"><span class="hljs-keyword">define</span></span>(<span class="hljs-string">\'tasks\'</span>, {\n  title: DataTypes.<span class="hljs-built_in">STRING</span>\n});\n\nProjects.hasMany(Tasks, { onDelete: <span class="hljs-string">\'cascade\'</span>, hooks: <span class="hljs-literal">true</span> });\nTasks.belongsTo(Projects);</code></pre>\n<p>\u8be5\u4ee3\u7801\u5c06\u5728Tasks\u8868\u4e0a\u8fd0\u884cbeforeDestroy / afterDestroy\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSequelize\u4f1a\u5c1d\u8bd5\u5c3d\u53ef\u80fd\u4f18\u5316\u60a8\u7684\u67e5\u8be2\u3002 \u5728\u5220\u9664\u65f6\u8c03\u7528\u7ea7\u8054\uff0cSequelize\u5c06\u7b80\u5355\u5730\u6267\u884c\u4e00\u4e2a</p>\n<pre><code class="language-sql"><span class="hljs-keyword">DELETE</span> <span class="hljs-keyword">FROM</span> <span class="hljs-symbol">`table`</span> <span class="hljs-keyword">WHERE</span> associatedIdentifier = associatedIdentifier.primaryKey</code></pre>\n<p>\u7136\u800c\uff0c\u6dfb\u52a0 <code>hooks: true</code> \u4f1a\u660e\u786e\u544a\u8bc9 Sequelize\uff0c\u4f18\u5316\u4e0d\u662f\u4f60\u6240\u5173\u5fc3\u7684\uff0c\u5e76\u4e14\u4f1a\u5728\u5173\u8054\u7684\u5bf9\u8c61\u4e0a\u6267\u884c\u4e00\u4e2a <code>SELECT</code>\uff0c\u5e76\u9010\u4e2a\u5220\u9664\u6bcf\u4e2a\u5b9e\u4f8b\uff0c\u4ee5\u4fbf\u80fd\u591f\u4f7f\u7528\u6b63\u786e\u7684\u53c2\u6570\u8c03\u7528 hook\u3002</p>\n<p>\u5982\u679c\u60a8\u7684\u5173\u8054\u7c7b\u578b\u4e3a <code>n:m</code>\uff0c\u5219\u5728\u4f7f\u7528 <code>remove</code> \u8c03\u7528\u65f6\uff0c\u60a8\u53ef\u80fd\u6709\u5174\u8da3\u5728\u76f4\u901a\u6a21\u578b\u4e0a\u89e6\u53d1 hook\u3002 \u5728\u5185\u90e8\uff0csequelize \u4f7f\u7528 <code>Model.destroy</code>\uff0c\u81f4\u4f7f\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u4e0a\u8c03\u7528 <code>bulkDestroy</code> \u800c\u4e0d\u662f <code>before / afterDestroy</code>  hook\u3002</p>\n<p>\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5c06 <code>{individualHooks:true}</code> \u4f20\u9012\u7ed9 <code>remove</code> \u8c03\u7528\u6765\u7b80\u5355\u5730\u89e3\u51b3\uff0c\u4ece\u800c\u5bfc\u81f4\u6bcf\u4e2a hook \u90fd\u901a\u8fc7\u5b9e\u4f8b\u5bf9\u8c61\u88ab\u5220\u9664\u3002</p>\n<h2 id="\u5173\u4e8e\u4e8b\u52a1\u7684\u6ce8\u610f\u4e8b\u9879">\u5173\u4e8e\u4e8b\u52a1\u7684\u6ce8\u610f\u4e8b\u9879</h2>\n<p>\u8bf7\u6ce8\u610f\uff0cSequelize \u4e2d\u7684\u8bb8\u591a\u6a21\u578b\u64cd\u4f5c\u5141\u8bb8\u60a8\u5728\u65b9\u6cd5\u7684 options \u53c2\u6570\u4e2d\u6307\u5b9a\u4e8b\u52a1\u3002 \u5982\u679c\u5728\u539f\u59cb\u8c03\u7528\u4e2d <em>\u6307\u5b9a</em> \u4e86\u4e00\u4e2a\u4e8b\u52a1\uff0c\u5b83\u5c06\u51fa\u73b0\u5728\u4f20\u9012\u7ed9 hook \u51fd\u6570\u7684 options \u53c2\u6570\u4e2d\u3002 \u4f8b\u5982\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\u6bb5\uff1a</p>\n<pre><code class="language-js">// \u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u5f02\u6b65 hook \u7684 promise \u98ce\u683c\uff0c\u800c\u4e0d\u662f\u56de\u8c03\u3002\n<span class="hljs-keyword">User</span>.hook(<span class="hljs-string">\'afterCreate\'</span>, (<span class="hljs-keyword">user</span>, <span class="hljs-keyword">options</span>) =&gt; {\n  // <span class="hljs-string">\'transaction\'</span> \u5c06\u5728 <span class="hljs-keyword">options</span>.<span class="hljs-keyword">transaction</span> \u4e2d\u53ef\u7528\n\n  // \u6b64\u64cd\u4f5c\u5c06\u6210\u4e3a\u4e0e\u539f\u59cb <span class="hljs-keyword">User</span>.<span class="hljs-keyword">create</span> \u8c03\u7528\u76f8\u540c\u7684\u4e8b\u52a1\u7684\u4e00\u90e8\u5206\u3002\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">User</span>.<span class="hljs-keyword">update</span>({\n    mood: <span class="hljs-string">\'sad\'</span>\n  }, {\n    <span class="hljs-keyword">where</span>: {\n      id: <span class="hljs-keyword">user</span>.id\n    },\n    <span class="hljs-keyword">transaction</span>: <span class="hljs-keyword">options</span>.<span class="hljs-keyword">transaction</span>\n  });\n});\n\n\nsequelize.<span class="hljs-keyword">transaction</span>(<span class="hljs-keyword">transaction</span> =&gt; {\n  <span class="hljs-keyword">User</span>.<span class="hljs-keyword">create</span>({\n    username: <span class="hljs-string">\'someguy\'</span>,\n    mood: <span class="hljs-string">\'happy\'</span>,\n    <span class="hljs-keyword">transaction</span>\n  });\n});</code></pre>\n<p>\u5982\u679c\u6211\u4eec\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u7684 <code>User.update</code> \u8c03\u7528\u4e2d\u672a\u5305\u542b\u4e8b\u52a1\u9009\u9879\uff0c\u5219\u4e0d\u4f1a\u53d1\u751f\u4efb\u4f55\u66f4\u6539\uff0c\u56e0\u4e3a\u5728\u5df2\u63d0\u4ea4\u6302\u8d77\u7684\u4e8b\u52a1\u4e4b\u524d\uff0c\u6211\u4eec\u65b0\u521b\u5efa\u7684\u7528\u6237\u4e0d\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u4e2d\u3002</p>\n<h3 id="\u5185\u90e8\u4e8b\u52a1">\u5185\u90e8\u4e8b\u52a1</h3>\n<p>\u8981\u8ba4\u8bc6\u5230 sequelize \u53ef\u80fd\u4f1a\u5728\u67d0\u4e9b\u64cd\u4f5c\uff08\u5982 <code>Model.findOrCreate</code>\uff09\u5185\u90e8\u4f7f\u7528\u4e8b\u52a1\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002 \u5982\u679c\u4f60\u7684 hook \u51fd\u6570\u6267\u884c\u4f9d\u8d56\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u7684\u8bfb\u53d6\u6216\u5199\u5165\u64cd\u4f5c\uff0c\u6216\u8005\u4fee\u6539\u5bf9\u8c61\u7684\u5b58\u50a8\u503c\uff0c\u5c31\u50cf\u4e0a\u4e00\u8282\u4e2d\u7684\u4f8b\u5b50\u4e00\u6837\uff0c\u4f60\u5e94\u8be5\u603b\u662f\u6307\u5b9a <code>{ transaction: options.transaction }</code>\u3002</p>\n<p>\u5982\u679c\u5728\u5904\u7406\u64cd\u4f5c\u7684\u8fc7\u7a0b\u4e2d\u5df2\u7ecf\u8c03\u7528\u4e86\u8be5 hook \uff0c\u5219\u8fd9\u5c06\u786e\u4fdd\u60a8\u7684\u4f9d\u8d56\u8bfb/\u5199\u662f\u540c\u4e00\u4e8b\u52a1\u7684\u4e00\u90e8\u5206\u3002 \u5982\u679c hook \u6ca1\u6709\u88ab\u5904\u7406\uff0c\u4f60\u53ea\u9700\u8981\u6307\u5b9a<code>{ transaction: null }</code> \u5e76\u4e14\u53ef\u4ee5\u9884\u671f\u9ed8\u8ba4\u884c\u4e3a\u3002</p>\n'}}]);