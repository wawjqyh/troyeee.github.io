# 提取公共代码

主要针对多页面应用，公共代码即为一些公共的模块，如果不提取公共代码那么每个引用的地方都会有一份相同的代码

- 减少代码冗余
- 提高加载速度

使用 webpack 内置插件 `webpack.optimize.CommonsChunkPlugin`

options:

- `name` 公共代码 chunk 的名称
- `filename` 打包以后的名称
- `minChunks` 表示需要提取的代码出现的次数，比如 2 表示出现两次以上就提取到公共代码
- `chunks` 提取代码的范围
- `children` 是否在 entry 的子模块中查找共同依赖
- `deepChildren`
- `async` 会创建一个异步的公共代码块
