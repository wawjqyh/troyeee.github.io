# 打包 js

使用 webpack 的方式

- webpack 命令
- webpack 配置
- 第三方脚手架

## 基本配置

```javascript
const path = require('path');

module.exports = {
  mode: 'production',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:5].js'
  }
};
```

```bash
# 执行 webpack
webpack

# 指定文件名
webpack --config webpack.conf.js
```

## 编译 ES6/7

javascript 在不断的发展，各种新的标准和提案层出不穷，但是由于浏览器的多样性，导致可能几年之内都无法广泛普及，babel 可以让你提前使用这些语言特性，他是一种用途很多的 javascript 编译器，他把最新版的 javascript 编译成当下可以执行的版本，简言之，利用 babel 就可以让我们在当前的项目中随意的使用这些新最新的 es6，甚至是未正式发布的新特性(stage 0-3)

## babel

`babel` 是一个运用广泛的工具，可以单独使用或者用在其他打包工具中，`webpack` 使用 `babel-loader`

### babel-core 和 @babel/core

<p class="warning">babel 7更改了包名，Babel 团队通过使用 “scoped” packages 的方式，来给自己的 babel package name 加上 @babel 命名空间，这样以便于区分官方 package 以及 非官方 package，所以 babel-core 会变成 @babel/core</p>

### babel 7 新特性(断崖式变更)

- 对那些已经不维护的 node 版本不予支持，包括 0.10、0.12、4、5
- Babel 团队会通过使用 “scoped” packages 的方式，来给自己的 babel package name 加上 @babel 命名空间（详情），这样以便于区分官方 package 以及 非官方 package，所以 babel-core 会变成 @babel/core
- 移除（并且停止发布）所有与 yearly 有关的 presets（preset-es2015 等）。@babel/preset-env 会取代这些 presets，这是因为 @babel/preset-env 囊括了所有 yearly presets 的功能，而且 @babel/preset-env 还具备了针对特定浏览器进行“因材施教”的能力
- 放弃 Stage presets（@babel/preset-stage-0 等），选择支持单个 proposal。相似的地方还有，会默认移除 @babel/polyfill 对 proposals 支持
- 有些 package 已经换名字：所有 TC39 proposal plugin 的名字都已经变成以 @babel/plugin-proposal 开头，替换之前的 @babel/plugin-transform。所以 @babel/plugin-transform-class-properties 变成 @babel/plugin-proposal-class-properties
- 针对一些用户会手动安装（user-facing）的 package（例如 babel-loader，@babel/cli 等），会给 @babel/core 加上 peerDependency

<a href="https://www.w3ctech.com/topic/2150" target="_blank">babel 7 新特性（原文链接）</a>
