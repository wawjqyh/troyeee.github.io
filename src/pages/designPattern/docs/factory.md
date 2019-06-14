# 工厂模式

- 将 new 操作单独封装
- 遇到 new 时，就要考虑是否使用工厂模式

## 例子

```javascript
class Product {
  constructor(name) {
    this.name = name;
  }

  init() {
    alert('init');
  }
}

class Creator {
  create(name) {
    return new Productor(name);
  }
}

// 工厂创建实例
let creator = new Creator();
let p = creator.create('p1');

p.init();
```

## 应用场景

- jQuery $('div')
- React.createElement
- vue 异步组件

```javascript
// jQuery 场景
class JQuery {
  constructor(selector) {

  }

  append(node) {

  }
}

window.$ = function (slector) {
  return new JQuery(slector);
}

let test = $('#test');
```

```jsx
// react
let profile = (
  <div>
    <img src="avatar.png" className="profile" />
    <h3>{[user.firstName, user.lastName].join(' ')}</h3>
  </div>
)

// 上面的语法糖会转换成
let profile = React.createElement('div', null ,
  React.createElement('img', {src: 'avatar.png', className: 'profile'}),
  React.createElement('h3', null, [user.firshName, user.lastName].join(' '))
);

React.createElement = function (tag, attrs, children) {
  return new Vnode(tag, attrs, children);
}
```
