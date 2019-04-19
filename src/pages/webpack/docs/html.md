# 处理html

打包后的文件通常会改变文件名，比如加 hash 值，如何自动的将文件引入到 html 中呢

使用插件 `html-webpack-plugin`

## 基本使用

```javascript
plugins: [
  new htmlWebpackPlugin({
    filename: 'index-[hash].html', // 打包后的文件名字
    template: 'index.html', // 源文件的名字
    inject: 'head' // 是否自动引入文件，页面引用文件的位置，去掉inject则不会自动引用js文件
  })
];
```

## 使用模版添加数据

html-webpack-plugin 支持 ejs 模板，可以在页面添加数据

```javascript
plugins: [
    new htmlWebpackPlugin({
        filename: "index.html",      //打包后的文件名字
        template: "index.html",      //源文件的名字
        inject: "head",              //页面引用文件的位置
        title: "hello world"
    })
]

<title><%= htmlWebpackPlugin.options.title %></title>
```
