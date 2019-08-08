# 适配器模式

## 介绍

- 旧接口格式和使用者不兼容，那么就需要一个适配器转换成可用的接口
- 中间加一个适配转换接口，类似与充电的适配器

## 实例

```javascript
class Adaptee {
  specificRequest() {
    return '德国标准插头';
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }

  request() {
    let info = this.adaptee.specificRequest();
    return `${info} - 转换器 - 中国标准插头`;
  }
}

// 测试
let target = new Target();
let res = target.request();
```

## 使用场景

### 封装旧接口

```javascript
// 代码优化，有需求将 ajax 改成新的方式
ajax({
  url: 'xxx',
  type: 'post',
  data: {}
});

// 由于历史原因，代码中全部是：$.ajax({...})，改动工作量很大

// 那么可以做一层适配器，旧的代码不用改
let $ = {
  ajax: function(options) {
    return ajax(options);
  }
}
```