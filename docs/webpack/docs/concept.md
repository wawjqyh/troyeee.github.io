# 核心概念

- entry
- output
- loader
- plugins
- 模式

## entry

指示 `webpack` 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，`webpack` 会找出有哪些模块和库是入口起点（直接和间接）依赖的

```javascript
module.exports = {
  entry: './index.js'
};
```

多个入口：多个入口的情况可能为多页面应用，或者业务代码与框架代码分开

```javascript
module.exports = {
  entry: ['index.js', 'vendor.js']
};

// key:value形式（推荐）
module.exports = {
  entry: {
    index: 'index.js',
    verder: 'vendor.js'
  }
};

module.exports = {
  entry: {
    index: ['index.js', 'app.js'],
    verder: 'vendor.js'
  }
};
```

## output

`output` 属性告诉 `webpack` 在哪里输出它所创建的 `bundles`，以及如何命名这些文件，默认值为 `./dist`

```javascript
module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.min.js'
  }
};

// 多个文件
module.exports = {
  entry: {
    index: 'index.js',
    verder: 'vendor.js'
  },

  // name即为entry的key值
  output: {
    filename: '[name].min.[hash:5].js'
  }
};
```

## loader

### 简介

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理

<p class="warning">loader 能够 import 导入任何类型的模块</p>

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      }
    ]
  }
};
```

### 常用 loader

- 编译相关 `babel-loader` `ts-loader`
- 样式相关 `style-loader` `css-loader` `less-loader` `postcss-loader`
- 文件相关 `file-loader` `url-loader`

## plugins

- 参与打包的整个过程
- 打包优化和压缩
- 配置编译时的变量
- 及其灵活

```javascript
const webpack = require('webpack');

module.exports = {
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};
```

**常用 plugins**

优化相关：

- `CommonsChunkPlugin` 提取相同代码成一个单独的 chunk
- `UglifyJsWebpackPlugin` 混淆压缩代码，可以生成 js source map

功能相关：

- `ExtractTextWebpackPlugin` 提取 css 成单独的文件
- `HtmlWebpackPlugin` 操作 html
- `HotModuleReplacementPlugin` 模块热更新
- `CopyWebpackPlugin` 拷贝文件

## 名词解释

- `chunk` 代码块
- `bundle` 打包后的代码集合
