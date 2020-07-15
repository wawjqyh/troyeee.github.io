# Tree Shaking

[中文文档](https://webpack.docschina.org/guides/tree-shaking/)

Tree Shaking 就是删除 js 中未引用的代码

## 1 使用条件

- 使用 ES2015 模块语法 (即 import 和 export)
- 确保没有编译器将代码中的 ES2015 语法转换为 CommonJS 的语法 (需求注意，@babel/preset-env 默认开启了转换)
- mode 需要设为 production，development 默认不开启

## 2 配置

```javascript
module.exports = {
  optimization: {
    usedExports: true
  }
};
```

## 3 sideEffects
