# Object.prototype.toLocaleString()

## 概述

toLocaleString() 方法返回一个该对象的字符串表示。该方法主要用于被本地化相关对象覆盖。

## 语法

```javascript
obj.toLocaleString();
```

## 描述

Object's toLocaleString 返回调用 toString() 方法的结果。

该函数提供了一个通用的 toLocaleString 方法，即使不大可能被用到。见下面列表：

覆盖了 toLocaleString() 方法的对象

* Array: Array.prototype.toLocaleString()
* Number: Number.prototype.toLocaleString()
* Date: Date.prototype.toLocaleString()

## 规范

| Specification                           | Status   | Comment            |
|:----------------------------------------|:---------|:-------------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |