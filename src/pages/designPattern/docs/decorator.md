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

### ES7 装饰器

装饰类

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
}
```

```javascript
@decorator
class A {}

// 等同于
class A {}
A = decorator(A) || A;
```

传参数

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
