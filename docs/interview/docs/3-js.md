## 原型链

### 创建对象的有几种方法

```javascript
// 字面量方法
var obj = { name: "ab" };

// Object方法
var obj = { name: "ab" };

// 构造函数
var func = function() {
    this.name = "ab";
};
var obj = new func();

// Object.create()
var P = { name: "db" };
var obj = Object.create(P);
```

### 什么是原型、构造函数、实例、原型链

prototype：所有实例对象需要共享的属性和方法，都放在这个对象中，那些不需要共享的属性和方法，就放在构造函数中。以此来模拟类

### instanceof 的原理

### new 运算符

工作原理:

-   一个对象被创建，它继承自 foo.prototype
-   构造函数 foo 被执行。执行的时候，相应的传参会被传入，同时上下文 this 会被指定为这个新势力。new foo 等同于 new foo()，只能用在不传递任何参数的情况
-   如果构造函数返回了一个对象，那么这个对象会取代整个 new 出来的结果。如果构造函数没有返回对象，那么 new 出来的结果为步骤 1 创建的对象

## 面向对象

### 类与实例

-   类的声明（函数，es6）
-   生成实例（new）

```javascript
// 函数方式
function Animal() {
    this.name = "name";
}

// class
class Animal {
    construct() {
        this.name = name;
    }
}
```

### 类与继承

-   如何实现继承
-   继承的几种方式（call、apply 不能继承 prototype）（原型链）

```javascript
function Animal() {
    this.species = "动物";
}

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// call apply
// 不能继承 prototype
function Cat(name, color) {
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}

// prototype模式
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
```

## 运行机制

-   如何理解 js 的单线程：一个时间内只能干一件事
-   什么是任务队列：同步任务队列，异步任务队列
-   什么是 event loop：事件循环
-   理解哪些语句会放入异步任务队列：setTimeout、setInterval、DOM 事件、Promise
-   理解语句放入异步任务队列的时机：异步任务并不会立马放到异步任务队列中，而是执行完会触发一个事件，这时就会放到异步队列中。同步任务队列会循环的去异步队列拿任务，就叫 event loop

```javascript
// 实例
console.log(1);

setTimeout(function({
    console.log(3);
}),0);

console.log(2);
```

## 错误监控类

### 前端错误分类

-   即时运行错误：代码错误
-   资源加载错误

### 错误的捕获方式

即时运行错误的捕获方式

-   try...catch
-   window.onerror

资源加载错误

-   object.onerror
-   performance.getEntries()
-   error 事件捕获

延伸：跨域的 js 运行错误可以捕获吗，错误提示什么，应该怎么处理

### 上报错误的基本原理

-   采用 ajax 通信方式上报
-   利用 image 对象上报（类似于快速发一个 get 请求）

## es6

-   let const
-   解构赋值
-   箭头函数
-   数组、对象扩展
-   异步：promise、generator、async
-   class
