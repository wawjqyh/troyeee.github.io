# webpack

## 1 安装和命令行

**1、webpack支持3种模块化方式**

`AMD`  `CommonJS`  `ES6模块化`

**2、安装**
```
npm install webpack --save-dev
```

**3、打包**
```javascript
webpack hello.js hello_bundle.js	//需要打包的文件的名称，和打包后的文件名称
```

**4、引用css文件**

`处理css文件需要依赖loader`，需要安装css-loader 和 style-loader

css-loader用来打包css，style-leader用来把css添加到页面

`以内联样式的方式，会在js之后执行`

使用方法
```javascript
require("style-loader!css-loader!./style.css");
```

或者使用命令行：
```javascript
webpack hello.js hello_bundle.js --module-bind "css=style-loader!css-loader"
```

**5、自动打包**
```javascript
webpack hello.js hello_bundle.js --watch
```

**6、查看打包过程**

打包的时候会显示百分比
```javascript
webpack hello.js hello_bundle.js --progress
```

**7、查看所有引用的模块**
```javascript
webpack hello.js hello_bundle.js --progress --display-modules
```

## 2 webpack基本配置

### 2.1 建立项目的配置文件

**1、基本配置**
```javascript
module.exports = {
    entry: "./src/scripts/main.js",         //表示打包的入口是从哪个文件开始
    output: {                               //打后的文件的配置
        path: "./dist/js",                  //文件路径
        filename: "bundle.js",
	    publicPath: "http://www.test.com/"   //相当于线上的地址，可以动态添加
    }
};
```

**2、在node.js中使用webpack**
```javascript
webpack({},callback);   //第一个参数为配置
```

### 2.2 webpack配置的entry和output

**1、entry有3中输入方式**

1. 字符串，即单一的入口文件

2. 数组，把不相依赖的两个文件打包在一起
```javascript
entry: ["./entry1.js", "./entry2.js"]
```

3. 对象，可以用来打包成多个文件，有多个页面的时候会用到
```javascript
module.exports = {
    entry: {
        page1: ["./entry1.js", "./entry2.js"],
        page2: "./entry3"
    },
    output: {
        path: "./dist/js",
        filename: "bundle.js"
    }
};
```

**注意：**
(1) page1，page2是一个chunk，类似于打包后的一个模块<br>
(2) 这样配置只会生成一个文件，因为output只指定了一个文件。output的路径不要指定一个绝对路径

**2、filename的三个参数**
1. `[name]` 即chank name，page1，page2
2. `[hash]` 每次打包都会有一个哈希值，相当于版本号
3. `[chankhash]` chank的哈希值，只有在文件有改动的时候才会改变

**3、正确的配置**
```javascript
module.exports = {
    entry: {
        page1: ["./entry1.js", "./entry2.js"],
        page2: "./entry3"
    },
    output: {
        path: __dirname + "/dist/js",
        filename: "[name]-[chankhash].js"
    }
};
```

## 3 生成项目中的html页面文件

### 3.1 基本使用

用webpack插件自用引用打包好的文件

**1、安装**
```javascript
html-webpack-plugin
```

**2、使用**
```javascript
plugins: [
    new htmlWebpackPlugin({
        filename: "index-[hash].html",      //打包后的文件名字
        template: "index.html",             //源文件的名字
        inject: "head"                      //页面引用文件的位置
    })
]
```

去掉inject则不会自动引用js文件

**3、压缩代码**

参照文档

**4、打包多个html文件**

实例化多个html插件，可以分别配置不同的参数

### 3.2 使用模板添加数据

html-webpack-plugin支持ejs模板，可以在页面添加数据
```javascript
plugins: [
    new htmlWebpackPlugin({
        filename: "index.html",      //打包后的文件名字
        template: "index.html",      //源文件的名字
        inject: "head",              //页面引用文件的位置
        title: "web pack is good"
    })
]

<title><%= htmlWebpackPlugin.options.title %></title>
```

htmlWebpackPlugin下有两个对象

`files`：webpack打包的js文件的描述<br>
`options`：插件的配置

### 3.3 不同的页面引用不同的文件

**1、chanks参数，配置需要引入的js**

```javascript
new htmlWebpackPlugin({
    filename: "index.html",      //打包后的文件名字
    template: "index.html",      //源文件的名字
    inject: "head",              //页面引用文件的位置
    title: "web pack is good",
    chunks: ["a", "test"]       //需要引用的js模块
})
```

**2、excludeChanks**

```javascript
excludeChanks: ["a", "test"]
```

引入除了a和test之外的所有chank

## 4 处理项目中的资源文件

### 4.1 使用loader编译js

可以将es2016、es2017等语法转换成低版本的语法

**1、安装**
```javascript
npm install babel-loader babel-core --save-dev
```

**2、基本配置**
```javascript
modules: {
    loaders: [
        {
            test: /\.js$/,                  //通过正则匹配需要编译的文件
            loader: "babel",                //loader的名称
            exclude: "./node_modules/",     //过滤的目录
            include: "./src/",              //需要编译的文件的目录
            query: {
                prasets: ["latest"]         //编译js的版本es6、es7
            }
        }
    ]
}
```

详细配置见官网

**3、过滤和编译文件的目录**

建议使用绝对路径
```javascript
exclude: path.resolve(__dirname, "node_modules"),     //过滤的目录
include: path.resolve(__dirname, "src"),              //需要编译的文件的目录
```

### 4.2 编译样式
postcss-loader

对css作一些处理，比如加上各个内核的前缀
```javascript
{
    test: /\.css$/,
    loader: "style-loader!css-loader!postcss-loader",   //两种方式，可以使用Loaders
    loaders: ["style-loader", "css-loader", "postcss-loader"]
}
```

编译less

使用less-loader
```javascript
{
    test: /\.less$/,
    loader: "style!css!postcss!less"    //可以使用简写的方式，省略loader
}
```
