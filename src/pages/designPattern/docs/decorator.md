# 装饰器模式

## 介绍

装饰器模式为在原有的基础上增加一些功能，适配器模式为为旧的接口做兼容

- 为对象添加新的功能
- 不改变原有的结构和功能

## 实例

```javascript
class Circle {
  draw() {
    console.log('画一个圆形');
  }
}

// 装饰器
class Decorator {
  constructor(circle) {
    this.circle = circle;
  }
  draw() {
    this.circle.draw();
    // 添加新功能
    this.setRedBorder();
  }
  setRedBorder() {
    console.log('设置红色边框');
  }
}

let circle = new Circle();
circle.draw();

let dec = new Decorator(circle);
dec.draw();
```

## 使用场景

### 装饰类

```javascript
// 装饰类
@testDec
class Demo {
  // ...
}

function testDec(target) {
  target.isDec = true;
}

alert(Demo.isDec);
```

```javascript
@decorator
class A {}

// 等同于
class A {}
A = decorator(A) || A;
```

testDec 就是一个装饰器。它修改了 Demo 这个类的行为，为它加上了静态属性 isDec。testDec 函数的参数target 是 Demo 类本身

### 传参数

```javascript
// mixin示例

function mixins(...func) {
  // 传参数需要返回一个函数
  return function (target) {
    Object.assign(target.prototype, ...list);
  }
}

const Foo = {
  foo() {
    alert('foo');
  }
}

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo(); // 'foo'
```

### 装饰方法

方法装饰器有固定的格式，第一个参数是类的原型对象，第二个参数是所要装饰的属性名，第三个参数是该属性的描述对象，Object.defineProperty 中会用到。即：

```javascript
{
  value: specifiedFunction,
  enumerable: false,
  configurable: true,
  writable: true
}
```

```javascript
function readonly(target, name, descriptor){
  descriptor.writable = false;
  return descriptor;
}

class Person {
  constructor() {
    this.first = 'hello';
    this.last = 'world';
  }

  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}

let p = new Person();
p.name = function () {}; // 这里会报错，因为是只读的
```

### 装饰方法-添加log

是否遇到过这样的情景，比如使用 vue 框架的时候，使用了某个方法会在 console 打印一些日志，表示这个方法即将被弃用请使用新的方法替代。使用下面的装饰器就能很容易实现这个功能。

```javascript
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log('执行了加法');
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

const math = new Math();
math.add(2, 4);
```

