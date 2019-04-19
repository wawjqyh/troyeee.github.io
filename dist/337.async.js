(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[337],{sNRK:function(s,e){s.exports='<h1 id="upgrade-to-v4---\u5347\u7ea7\u5230-v4">Upgrade to V4 - \u5347\u7ea7\u5230 V4</h1>\n<p>Sequelize V4 \u662f\u4e00\u4e2a\u91cd\u8981\u7248\u672c\uff0c\u5b83\u5f15\u5165\u4e86\u65b0\u7684\u529f\u80fd\u548c\u7a81\u7834\u6027\u7684\u53d8\u5316\u3002 \u5927\u91cf\u7684 sequelize \u4ee3\u7801\u5e93\u5df2\u7528 ES2015 \u529f\u80fd\u91cd\u6784\u3002 \u4ee5\u4e0b\u6307\u5357\u5217\u51fa\u4e86\u4ece v3 \u5347\u7ea7\u5230 v4 \u7684\u4e00\u4e9b\u66f4\u6539\u3002\u67e5\u770b <a href="https://github.com/sequelize/sequelize/blob/b49f936e9aa316cf4a13bade76585acf4d5d8b04/changelog.md">\u4fee\u6539\u65e5\u5fd7</a> \u67e5\u770b\u5168\u90e8\u8be6\u7ec6\u5217\u8868\u3002</p>\n<h3 id="\u7a81\u7834\u6027\u53d8\u5316">\u7a81\u7834\u6027\u53d8\u5316</h3>\n<ul>\n<li><p>Node \u7248\u672c: \u8981\u4f7f\u7528\u65b0\u7684 ES2015 \u529f\u80fd\uff0c\u6211\u4eec\u73b0\u5728\u81f3\u5c11\u9700\u8981 Node4\u3002\u4ece\u73b0\u5728\u5f00\u59cb\uff0c\u6211\u4eec\u5c06\u652f\u6301\u6240\u6709\u5f53\u524d\u7684LTS\u7248\u672c\u7684Node\u3002</p>\n</li>\n<li><p>\u8ba1\u6570\u5668\u7f13\u5b58\u63d2\u4ef6\u4ee5\u53ca\u56e0\u6b64\u5173\u8054\u7684\u8ba1\u6570\u5668\u7f13\u5b58\u9009\u9879\u5df2\u88ab\u5220\u9664\u3002 \u4f7f\u7528 <code>afterCreate</code> \u548c <code>afterDelete</code> \u94a9\u5b50\u53ef\u4ee5\u5b9e\u73b0\u76f8\u540c\u7684\u884c\u4e3a\u3002</p>\n</li>\n<li><p>\u5220\u9664\u4e86MariaDB\u65b9\u8a00\u3002 \u8fd9\u53ea\u662f\u56f4\u7ed5 MySQL \u7684\u4e00\u4e2a\u6d45\u5c42\u5305\u88c5\uff0c\u6240\u4ee5\u4f7f\u7528 <code>dialect:&#39;mysql</code> \u800c\u4e0d\u662f\u8fdb\u4e00\u6b65\u7684\u6539\u53d8\u3002</p>\n</li>\n<li><p>\u5220\u9664\u9ed8\u8ba4\u7684 <code>REPEATABLE_READ</code> \u4e8b\u52a1\u9694\u79bb\u3002 \u9694\u79bb\u7ea7\u522b\u73b0\u5728\u9ed8\u8ba4\u4e3a\u6570\u636e\u5e93\u7684\u7ea7\u522b\u3002 \u5728\u542f\u52a8\u4e8b\u52a1\u65f6\u660e\u786e\u5730\u4f20\u9012\u6240\u9700\u7684\u9694\u79bb\u7ea7\u522b\u3002</p>\n</li>\n<li><p>\u5220\u9664\u4e86\u5bf9 <code>pool: false</code> \u7684\u652f\u6301\u3002\u8981\u4f7f\u7528\u5355\u4e2a\u8fde\u63a5\uff0c\u8bf7\u5c06 <code>pool.max</code> \u8bbe\u7f6e\u4e3a1\u3002</p>\n</li>\n<li><p>\u5220\u9664\u4e86\u5bf9\u65e7\u8fde\u63a5\u6c60\u914d\u7f6e\u5173\u952e\u5b57\u7684\u652f\u6301\u3002 </p>\n<p>\u4ee5\u524d:</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">pool</span>: {\n  <span class="hljs-attribute">maxIdleTime</span>: <span class="hljs-number">30000</span>,\n  minConnections: <span class="hljs-number">20</span>,\n  maxConnections: <span class="hljs-number">30</span>\n}</code></pre>\n<p>\u73b0\u5728:</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">pool</span>: {\n  <span class="hljs-attribute">idle</span>: <span class="hljs-number">30000</span>,\n  min: <span class="hljs-number">20</span>,\n  max: <span class="hljs-number">30</span>\n}</code></pre>\n</li>\n<li><p>\uff08MySQL\uff09\u5f53\u6570\u5b57\u592a\u5927\u65f6\uff0cBIGINT \u73b0\u5728\u88ab\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u3002</p>\n</li>\n<li><p>(MySQL) <code>DECIMAL</code> \u548c <code>NEWDECIMAL</code> \u7c7b\u578b\u73b0\u5728\u4ee5 String \u5f62\u5f0f\u8fd4\u56de\uff0c\u9664\u975e</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">dialectOptions</span>: {\n  <span class="hljs-attribute">decimalNumbers</span>: true\n}</code></pre>\n<p>\u88ab\u6307\u5b9a.</p>\n</li>\n<li><p>\u5220\u9664\u4e86\u5bf9referencesKey\u7684\u652f\u6301\uff0c\u4f7f\u7528\u4e86\u4e00\u4e2a\u5f15\u7528\u5bf9\u8c61\u3002</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">references</span>: {\n    <span class="hljs-attribute">key</span>: <span class="hljs-string">\'\'</span>,\n    model: <span class="hljs-string">\'\'</span>\n}</code></pre>\n</li>\n<li><p><code>classMethods</code> \u548c <code>instanceMethods</code> \u5df2\u88ab\u79fb\u9664\u3002</p>\n<p>\u4ee5\u524d:</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> <span class="hljs-type">Model</span> = sequelize.define(\'<span class="hljs-type">Model</span>\', {\n    ...\n}, {\n    classMethods: {\n        associate: function (model) <span class="hljs-meta">{...}</span>\n    },\n    instanceMethods: {\n        someMethod: function () { ...}\n    }\n});</code></pre>\n<p>\u73b0\u5728:</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> <span class="hljs-type">Model</span> = sequelize.define(\'<span class="hljs-type">Model</span>\', {\n    ...\n});\n\n// \u7c7b\u65b9\u6cd5\n<span class="hljs-type">Model</span>.associate = function (models) {\n    ...associate the models\n};\n\n// \u5b9e\u4f8b\u65b9\u6cd5\n<span class="hljs-type">Model</span>.prototype.someMethod = function () <span class="hljs-meta">{..}</span></code></pre>\n</li>\n<li><p><code>Model.Instance</code> \u548c <code>instance.Model</code> \u5df2\u88ab\u79fb\u9664\u3002\u8981\u4ece\u4e00\u4e2a\u5b9e\u4f8b\u8bbf\u95ee\u6a21\u578b\uff0c\u53ea\u9700\u4f7f\u7528 <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor"><code>instance.constructor</code></a>\u3002 \u793a\u4f8b\u7c7b (<code>Model.Instance</code>) \u73b0\u5728\u662f\u6a21\u578b\u672c\u8eab\u3002</p>\n</li>\n<li><p>Sequelize \u73b0\u5728\u4f7f\u7528\u4e00\u4e2a bluebird \u5e93\u7684\u72ec\u7acb\u526f\u672c.</p>\n<ul>\n<li><p>sequelize\u8fd4\u56de\u7684 promise \u73b0\u5728\u662f <code>Sequelize.Promise</code> \u800c\u4e0d\u662f bluebird \u7684\u5168\u5c40 <code>Promise</code> \u5b9e\u4f8b\u3002</p>\n</li>\n<li><p>CLS \u8865\u4e01\u4e0d\u4f1a\u5f71\u54cd bluebird \u7684\u5168\u5c40 promise\u3002\u5f53\u4e0e <code>Promise.all</code> \u548c\u5176\u4ed6 bluebird \u65b9\u6cd5\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u4e8b\u52a1\u4e0d\u4f1a\u81ea\u52a8\u4f20\u9012\u7ed9\u65b9\u6cd5\u3002\u660e\u786e\u5730\u4fee\u8865 bluebird \u5b9e\u4f8b\uff0c\u53ef\u4ee5\u8ba9 CLS \u80fd\u591f\u4f7f\u7528 bluebird \u65b9\u6cd5\u3002</p>\n<pre><code class="language-bash">$ npm install --<span class="hljs-keyword">save</span> <span class="hljs-keyword">cls</span>-bluebird</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> <span class="hljs-built_in">Promise</span> = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'bluebird\'</span>);\n<span class="hljs-keyword">const</span> Sequelize = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'sequelize\'</span>);\n<span class="hljs-keyword">const</span> cls = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'continuation-local-storage\'</span>);\n<span class="hljs-keyword">const</span> ns = cls.createNamespace(<span class="hljs-string">\'transaction-namespace\'</span>);\n<span class="hljs-keyword">const</span> clsBluebird = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'cls-bluebird\'</span>);\nclsBluebird(ns, <span class="hljs-built_in">Promise</span>);\nSequelize.useCLS(ns);</code></pre>\n</li>\n</ul>\n</li>\n<li><p><code>Sequelize.Validator</code> \u73b0\u5728\u662f <code>validator</code> \u5e93\u7684\u72ec\u7acb\u526f\u672c</p>\n</li>\n<li><p><code>DataTypes.DECIMAL</code> \u5bf9\u4e8e MySQL \u548c Postgres \u8fd4\u56de\u7684\u662f\u5b57\u7b26\u4e32.</p>\n</li>\n<li><p><code>DataTypes.DATE</code> \u73b0\u5728\u4f7f\u7528 <code>DATETIMEOFFSET</code> \u800c\u4e0d\u662f <code>DATETIME2</code> sql\u6570\u636e\u7c7b\u578b\uff0c\u4ee5\u9632MSSQL\u8bb0\u5f55\u65f6\u533a\u3002\u8981\u5c06\u73b0\u6709\u7684 <code>DATETIME2</code> \u5217\u8fc1\u79fb\u5230 <code>DATETIMEOFFSET</code> \u4e2d, \u67e5\u770b <a href="https://github.com/sequelize/sequelize/pull/7201#issuecomment-278899803">#7201</a>.</p>\n</li>\n<li><p><code>options.order</code> \u73b0\u5728\u53ea\u63a5\u53d7\u6570\u7ec4\u7c7b\u578b\u6216 Sequelize \u65b9\u6cd5\u7684\u503c\u3002 \u539f\u9650\u652f\u6301\u7684\u5b57\u7b26\u4e32\u503c\uff08\u5373<code>{order:&#39;name DESC&#39;}</code>\uff09\u5df2\u88ab\u5f03\u7528\u3002</p>\n</li>\n<li><p>\u4f7f\u7528 <code>BelongsToMany</code> \u5173\u7cfb <code>add / set / create</code> \u8bbe\u7f6e\u5668\u73b0\u5728\u901a\u8fc7\u5c06\u5b83\u4eec\u4f20\u9012\u4e3a <code>options.through</code> \u6765\u8bbe\u7f6e\u5c5e\u6027\uff08\u4ee5\u524d\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u88ab\u7528\u4f5c\u901a\u8fc7\u5c5e\u6027\uff0c\u73b0\u5728\u5b83\u88ab\u8ba4\u4e3a\u662f <code>through</code> \u4f5c\u4e3a\u5b50\u9009\u9879\u7684\u9009\u9879\uff09\u3002</p>\n<p>\u4ee5\u524d:</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">user</span><span class="hljs-selector-class">.addProject</span>(<span class="hljs-selector-tag">project</span>, { <span class="hljs-attribute">status</span>: <span class="hljs-string">\'started\'</span> })</code></pre>\n<p>\u73b0\u5728:</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">user</span><span class="hljs-selector-class">.addProject</span>(<span class="hljs-selector-tag">project</span>, { <span class="hljs-attribute">through</span>: { status: <span class="hljs-string">\'started\'</span> }})</code></pre>\n</li>\n<li><p><code>DATEONLY</code> \u73b0\u5728\u4ee5 <code>YYYY-MM-DD</code> \u683c\u5f0f\u800c\u4e0d\u662f <code>Date</code> \u7c7b\u578b\u8fd4\u56de\u5b57\u7b26\u4e32</p>\n</li>\n<li><p><code>Model.validate</code> \u5b9e\u4f8b\u65b9\u6cd5\u9ed8\u8ba4\u8fd0\u884c\u9a8c\u8bc1\u94a9\u5b50\u3002\u4ee5\u524d\u4f60\u9700\u8981\u4f20\u9012 <code>{ hooks: true }</code>. \u60a8\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012  <code>{ hooks: false }</code> \u6765\u8986\u76d6\u6b64\u884c\u4e3a\u3002</p>\n</li>\n<li><p>\u5f53\u9a8c\u8bc1\u5931\u8d25\u65f6\uff0c\u6765\u81ea <code>Model.validate</code> \u5b9e\u4f8b\u65b9\u6cd5\u7684\u7ed3\u679c\u5c06\u88ab\u62d2\u7edd\u3002 \u9a8c\u8bc1\u6210\u529f\u540e\u624d\u80fd\u5b9e\u73b0\u3002</p>\n</li>\n<li><p>\u539f\u59cb\u53c2\u6570 where, order \u548c group \u6bd4\u5982 <code>where: { $raw: &#39;..&#39;, order: [{ raw: &#39;..&#39; }], group: [{ raw: &#39;..&#39; }] }</code> \u5220\u9664\u4ee5\u9632\u6b62SQL\u6ce8\u5165\u653b\u51fb\u3002</p>\n</li>\n<li><p><code>Sequelize.Utils</code> \u4e0d\u518d\u662f\u516c\u5171API\u7684\u4e00\u90e8\u5206\uff0c\u4f7f\u7528\u5b83\u81ea\u5df1\u627f\u62c5\u98ce\u9669\u3002</p>\n</li>\n<li><p><code>Hooks</code> \u73b0\u5728\u5e94\u8fd4\u56de promise\u3002 \u4e0d\u652f\u6301\u56de\u8c03\u3002</p>\n</li>\n<li><p><code>include</code> \u603b\u662f\u4e00\u4e2a\u6570\u7ec4</p>\n<p>\u4e4b\u524d:</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">User</span><span class="hljs-selector-class">.findAll</span>({\n  <span class="hljs-attribute">include</span>: {\n    model: Comment,\n    as: <span class="hljs-string">\'comments\'</span>\n  }\n})</code></pre>\n<p>\u73b0\u5728:</p>\n<pre><code class="language-js"><span class="hljs-selector-tag">User</span><span class="hljs-selector-class">.findAll</span>({\n  <span class="hljs-attribute">include</span>: [{\n    model: Comment,\n    as: <span class="hljs-string">\'comments\'</span>\n  }]\n})</code></pre>\n</li>\n<li><p><code>where</code> \u5728 <code>include</code> \u4e2d\u4e0d\u4f1a\u4f7f\u8fd9\u4e2a <code>include</code> \u53ca\u5176\u6240\u6709\u7236\u8282\u70b9\u90fd\u88ab <code>required</code>\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684 <code>beforeFind</code> \u5168\u5c40 Hook \u6765\u4fdd\u6301\u4ee5\u524d\u7684\u884c\u4e3a\uff1a</p>\n<pre><code class="language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">whereRequiredLikeInV3</span>(<span class="hljs-params">modelDescriptor</span>) </span>{\n  <span class="hljs-keyword">if</span> (!modelDescriptor.include) {\n    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n  }\n\n  <span class="hljs-keyword">return</span> modelDescriptor.include.some(<span class="hljs-function"><span class="hljs-params">relatedModelDescriptor</span> =&gt;</span> {\n    <span class="hljs-keyword">const</span> childDescriptorRequired = whereRequiredLikeInV3(\n      relatedModelDescriptor,\n    );\n\n    <span class="hljs-keyword">if</span> (\n      (relatedModelDescriptor.where || childDescriptorRequired) &amp;&amp;\n      <span class="hljs-keyword">typeof</span> relatedModelDescriptor.required === <span class="hljs-string">\'undefined\'</span>\n    ) {\n      relatedModelDescriptor.required = <span class="hljs-literal">true</span>;\n    }\n\n    <span class="hljs-keyword">return</span> relatedModelDescriptor.required;\n  });\n}\n\n<span class="hljs-keyword">const</span> sequelize = <span class="hljs-keyword">new</span> Sequelize(..., {\n  ...,\n  <span class="hljs-attr">define</span>: {\n    <span class="hljs-attr">hooks</span>: {\n      <span class="hljs-attr">beforeFind</span>: whereRequiredLikeInV3,\n    },\n  },\n});</code></pre>\n</li>\n</ul>\n<h3 id="\u65b0\u529f\u80fd">\u65b0\u529f\u80fd</h3>\n<ul>\n<li><p><code>sequelize.sync({ alter: true })</code> \u7684\u521d\u59cb\u7248\u672c\u5df2\u6dfb\u52a0\uff0c\u5e76\u4f7f\u7528 <code>ALTER TABLE</code> \u547d\u4ee4\u6765\u540c\u6b65\u8868\u3002 <a href="http://docs.sequelizejs.com/manual/tutorial/migrations.html">\u8fc1\u79fb</a> \u4ecd\u7136\u662f\u9996\u9009\uff0c\u5e94\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002</p>\n</li>\n<li><p>\u73b0\u5728\u652f\u6301\u6dfb\u52a0\u548c\u5220\u9664\u6570\u636e\u5e93\u7ea6\u675f\u3002 \u73b0\u6709\u7684 primary\uff0cforeignKey \u548c\u5176\u4ed6\u7ea6\u675f\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u8fc1\u79fb\u6765\u6dfb\u52a0/\u5220\u9664 - <a href="http://docs.sequelizejs.com/manual/tutorial/migrations.html#addconstraint-tablename-attributes-options-">\u67e5\u770b\u66f4\u591a</a>.</p>\n</li>\n<li><p>\u5b9e\u4f8b\uff08\u6570\u636e\u5e93\u884c\uff09\u73b0\u5728\u662f\u6a21\u578b\u7684\u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u5355\u72ec\u7c7b\u7684\u5b9e\u4f8b\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u66ff\u6362<code>User.build()</code> \u7528 <code>new User()</code> \u548c <code>sequelize.define(attributes, options)</code> \u7528</p>\n<pre><code class="language-js"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">User</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Sequelize</span>.<span class="hljs-title">Model</span> </span>{}\n<span class="hljs-type">User</span>.init(attributes, options)</code></pre>\n<p>\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u7c7b\u4e2d\u5b9a\u4e49\u81ea\u5b9a\u4e49\u65b9\u6cd5\uff0c\u7c7b\u65b9\u6cd5\u548c getter / setter\u3002\n\u8fd9\u4e5f\u4f7f\u5f97\u6709\u66f4\u591a\u7684\u4f7f\u7528\u6a21\u5f0f\uff0c\u4f8b\u5982\u7528 <a href="https://www.npmjs.com/package/sequelize-decorators">\u88c5\u9970\u5668</a>.</p>\n</li>\n<li><p>\u589e\u52a0\u4e86 <code>DEBUG</code> \u652f\u6301\u3002 \u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 <code>DEBUG = sequelize * node app.js</code> \u4e3a\u6240\u6709 sequelize \u64cd\u4f5c\u542f\u7528\u65e5\u5fd7\u8bb0\u5f55\u3002 \u8981\u8fc7\u6ee4\u8bb0\u5f55\u7684\u67e5\u8be2\uff0c\u8bf7\u4f7f\u7528 <code>DEBUG=sequelize:sql:mssql sequelize:connection*</code> \u6765\u8bb0\u5f55\u751f\u6210\u7684SQL\u67e5\u8be2\uff0c\u8fde\u63a5\u4fe1\u606f\u7b49\u3002</p>\n</li>\n<li><p><code>SQLite</code> \u6dfb\u52a0\u4e86 <code>JSON</code> \u6570\u636e\u7c7b\u578b\u652f\u6301\u3002</p>\n</li>\n<li><p><code>UPSERT</code> \u73b0\u5728\u4f7f\u7528 <code>MERGE</code> \u8bed\u53e5\u652f\u6301 <code>MSSQL</code>\u3002</p>\n</li>\n<li><p>\u4e8b\u52a1\u73b0\u5728\u5b8c\u5168\u652f\u6301 <code>MSSQL</code>\u3002</p>\n</li>\n<li><p><code>MSSQL</code> \u65b9\u8a00\u73b0\u5728\u652f\u6301\u8fc7\u6ee4\u7684\u7d22\u5f15\u3002</p>\n<pre><code class="language-js">queryInterface.ad<span class="hljs-meta">dIndex(</span>\n  <span class="hljs-string">\'Person\'</span>,\n  [<span class="hljs-string">\'firstname\'</span>, <span class="hljs-string">\'lastname\'</span>],\n  {\n    <span class="hljs-meta">where</span>: {\n      lastname: {\n        $ne: <span class="hljs-meta">null</span>\n      }\n    }\n  }\n)</code></pre>\n</li>\n</ul>\n'}}]);