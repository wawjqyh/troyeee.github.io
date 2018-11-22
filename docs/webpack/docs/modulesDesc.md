# 模块化开发

- js 模块化
- css 模块化

## JS 模块化

- 命名空间
- commonJS
- AMD/CMD/UMD
- ES6 module

### 命名空间

`库名.类别名.方法名`

- 命名空间被覆盖检测不到
- 需要记住完整的路径名
- 团队协作时约定好命名空间

```javascript
var NameSpace = {};

NameSpace.type = NameSpace.type || {};
NameSpace.type.method = function() {};
```

```javascript
// YUI
YUI.add(
  'davglass',
  function(Y) {
    Y.dvaglass = function() {
      Y.log('233');
    };
  },
  '3.4.0',
  {
    requires: ['harley-davidson', 'mt-dev']
  }
);

YUI().use('davglass', function(Y) {
  Y.davglass();
});

// appllyConfig
YUI.applyConfig({
  modules: {
    davglass: {
      fullpath: './davglass.js'
    }
  }
});

YUI().use('davglass', function(Y) {
  Y.davglass();
});
```

### CommonJS

- 一个文件为一个模块
- 通过 module.exports 暴露模块接口
- 通过 require 引入模块
- 同步执行(?)

```javascript
var Route = require('./router.js');

var test = 233;

module.exports = test;
```

### AMD

- async module definition(异步模块定义)
- 使用 define 定义模块
- 使用 require 加载模块
- RequireJS 库
- 依赖前置，提前执行

```javascript
// 模块名 依赖 模块输出
define('alpha', ['require', 'exports', 'beta'], function(require, exports, beta) {
  exports.verb = function() {
    return beta.verb();

    // 或者
    return require('beta').verb();
  };
});
```

### CMD

- common module definition(通用模块定义)
- 一个文件为一个模块
- 使用 define 定义模块
- 使用 require 加载模块
- SeaJS 库
- 特点：尽可能懒执行

<p class="warning">AMD 和 CMD 区别：执行方式不一样。AMD 编译时会把依赖的模块前置。CMD require 的模块会被下载下来，但是不会被执行，知道代码逻辑执行到那个地方时才会被执行</p>

```javascript
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
  // 通过 require 引入依赖
  var $ = require('jquery');
  var Spinning = require('./spinning');

  // 通过 exports 对外体统接口
  exprots.doSomething = 233;

  // 或者通过 module.exports 提供整个接口
  module.exorts = 233;
});
```

### UMD

- universal module definition (通用解决方案)
- 三个步骤
  - 判断是否支持 AMD
  - 判断是否支持 CommonJS
  - 如果都不支持则使用全局变量

```javascript
(function(root, factory) {
  // 判断是否为 AMD
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  }

  // 判断是否为node环境，即是否为CommonJS
  else if (typeof exports === 'object') {
    module.exports = factory();
  }

  // 使用全局变量
  else {
    // root 即为 window
    root.returnExports = factory();
  }
})(this, function() {
  return {};
});
```

### ESM

- ECMAScript Module
- 一个文件为一个模块
- export / import 暴露引入模块

## webpack 支持

- AMD(RequireJS)
- ES Modules (推荐)
- CommonJS

目前主流的方式为 ES Modules 和 CommonJS，现在 webpack 原生支持 es6 的模块化语法，不需要 babel

## CSS 模块化

css 设计模式

- OOCSS
- SMACSS
- Atomic CSS
- MCSS
- AMCSS
- BEM
