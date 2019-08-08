# 单例模式

- 系统中被唯一使用
- 一个类只有一个实例

**说明**

- 单例模式需要用到 java 的特性(private)
- ES6 中没有(typescript 中有)

## typescript 写法

```javascript
class Singleton {
  private static singleton: Singleton;

  //限制产生多个对象，即外部不能 new
  private constructor () {

  }

  public static getInstance (): Singleton {
    if (Singleton.singleton === null) {
      Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}

let obj1 = new Singleton(); // 报错，外部不能new
let obj2 = Singleton.getInstance();
```

## js 写法

```javascript
class Singleton {
  login () {
    console.log('login...');
  }
}

Singleton.getInstance = (function () {
  let instance;

  return function () {
    if (!instance) {
      instance = new Singleton();
    }
    return instance;
  }
})();

let obj1 = Singleton.getInstance();
```

## 应用场景

- jQuery，jQuery 只有一个实例
- 登录注册/购物车
- vuex 和 redux 中的 store

```javascript
if (window.jQuery !== null) {
  return window.jQuery;
} else {
  // 初始化...
}
```
