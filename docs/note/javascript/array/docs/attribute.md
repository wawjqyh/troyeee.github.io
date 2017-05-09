# 属性

## Array.length

#### 概述
`length` 属性表示一个无符号 `32-bit` 整数，返回一个数组中的元素个数

| 属性         |       |
|:------------|:-----|
| writable     | true  |
| enumerable   | false |
| configurable | false |

#### 描述
`length` 属性的值是一个 0 到 2<sup>32</sup>-1 的整数。

你可以通过减小 length 属性的值来截短一个数组，但不能通过增大 length 属性的值来延长这个数组，也就是说，如果你将一个拥有两个元素的数组的 length 属性设置为 3，
那么这个数组仍然只包含两个元素，最后一个元素不存在。因此，length属性不能真正表示数组中定义的值的数目。





## Array.prototype

`Array.prototype`  属性表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法

#### 描述
Array实例继承自 Array.prototype。与所有构造函数一样，您可以更改构造函数的原型对象，以对所有 Array 实例进行更改。
例如，可以添加新方法和属性以扩展所有Array对象。

`鲜为人知的事实：Array.prototype 本身也是一个 Array`

```javascript
Array.isArray(Array.prototype);
// true
```

| 属性         |       |
|:------------|:-----|
| writable     | false |
| enumerable   | false |
| configurable | false |





## Array.prototype\[@@unscopables\]

Symbol属性 @@unscopable 包含了所有 ES2015 (ES6) 中新定义的且并未被更早的 ECMAScript 标准收纳的属性名。这些属性并不包含在 with 语句绑定的环境中

Array.prototype\[@@unscopables\] 属性的属性特性：

| 属性         |       |
|:------------|:-----|
| writable     | false |
| enumerable   | false |
| configurable | true  |

#### 语法
`arr[Symbol.unscopables]`

#### 描述
with 绑定中未包含的数组默认属性有：copyWithin, entries, fill, find, findIndex, includes, keys, 和 values。

#### 示例

以下的代码在ES5或更早的版本中能正常工作。然而 ECMAScript 2015 (ES6) 或之后的版本中新添加了 Array.prototype.keys() 这个方法。
这意味着在 with 语句的作用域，"keys"只能作为方法而不能作为某个变量。这正是内置的 @@unscopables 即 Array.prototype\[@@unscopables\]
symbol属性所要解决的问题：防止某些数组方法被添加到 with 语句的作用域内。

```javascript
var keys = [];

with(Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```