# 代理模式

## 介绍

- 使用者无权访问目标对象
- 中间加代理，通过代理做授权和控制

## 使用场景

### 事件代理

假如要给 container 下所有 a 标签绑定 click 事件，一个个去绑定就会比较麻烦。这时就可以用事件代理

```html
<div id="container">
  <a href="#">a1</a>
  <a href="#">a2</a>
  <a href="#">a3</a>
  <a href="#">a4</a>
</div>

<script>
  var container = document.getElementById('container');
  container.addEventListener('click', function (e) {
    var target = e.target;

    if(target.nodeName === 'A') {
      console.log(target.innerHtml);
    }
  });
</script>
```

### ES6 Proxy

Proxy 用于修改某些操作的默认行为。Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

使用明星和经纪人的例子来解释。外部是无法直接和明星沟通的，假如要邀请明星演出，必须要通过经纪人沟通

```javascript
let star = {
  name: '刘德华',
  age: 28,
  phone: '18711110000'
}

let agent = new Proxy(star, {
  get: (target, key) => {
    if (key === 'phone') {
      // 返回经纪人自己的电话，明星的电话是私密的
      return '18712341234'
    }

    if (key === 'price') {
      // 经纪人报价
      return 12000;
    }

    return target[key];
  },

  set: (target, key, val) => {
    if (key === 'customPrice') {
      if (val < 10000) {
        throw new Error('价格太低');
      } else {
        target[key] = val;
      }
    }
  }
})
```
