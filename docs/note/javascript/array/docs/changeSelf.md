# 会改变自身的方法

## Array.prototype.copyWithin() *

方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。

```javascript
["alpha", "beta", "copy", "delta"].copyWithin(1, 2, 3);
// 0:"alpha" 1:"beta" 2:"copy" 3:"delta"
// ["alpha", "copy", "copy", "delta"]
// 0:"alpha" 1:"copy" 2:"copy" 3:"delta"

// target === 1:"beta"
// start === 2:"copy",
// end === 3:"delta"

// 1:"beta" => 1:"copy"

['alpha', 'bravo', 'charlie', 'delta'].copyWithin(2, 0);

// results in ["alpha", "bravo", "alpha", "bravo"]
```

#### 语法
```javascript
arr.copyWithin(target)

arr.copyWithin(target, start)

arr.copyWithin(target, start, end)

arr.copyWithin(目标索引, [源开始索引], [结束源索引])
```

#### 参数
* `target`<br>
0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。<br>
如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。

* `start`<br>
0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。<br>
如果 start 被忽略，copyWithin 将会从0开始复制。

* `end`<br>
0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。<br>
如果 end 被忽略，copyWithin 将会复制到 arr.length。

#### 返回值
改变了的数组。

#### 描述
参数target,start和end 必须为整数。

如果start为负，则其指定的索引位置等同于length+start，length为数组的长度。end也是如此。

copyWithin方法不要求其this值必须是一个数组对象；除此之外，copyWithin是一个可变方法，它可以改变this对象本身，并且返回它，而不仅仅是它的拷贝。

copyWithin 就像 C 和 C++ 的 memcpy 函数一样，且它是用来移动 Array 或者 TypedArray 数据的一个高性能的方法。复制以及粘贴序列这两者是为一体的操作;即使复制和粘贴区域重叠，粘贴的序列也会有拷贝来的值。

copyWithin 函数是设计为通用的，其不要求其 this 值必须是一个数组对象。

The copyWithin 是一个可变方法，它不会改变 this 的 length，但是会改变 this 本身的内容，且需要时会创建新的属性。

#### 例子
```javascript
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |
| ECMAScript 2016 (ECMA-262)              | Standard |                    |
| ECMAScript Latest Draft (ECMA-262)      | Draft    |                    |





## Array.prototype.fill() *

fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。

```javascript
var numbers = [1, 2, 3]
numbers.fill(1);

// results in [1, 1, 1]
```

#### 语法
```javascript
arr.fill(value)
arr.fill(value, start)
arr.fill(value, start, end)
```

#### 参数
* `value`<br>
用来填充数组元素的值。

* `start 可选`<br>
起始索引，默认值为0。

* `end 可选`<br>
终止索引，默认值为 this.length。

#### 返回值
修改后的数组。

#### 描述
具体要填充的元素区间是 [start, end) , 一个半开半闭区间.

fill 方法接受三个参数 value, start 以及 end. start 和 end 参数是可选的, 其默认值分别为 0 和 this 对象的 length 属性值.

如果 start 是个负数, 则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值. 如果 end 是个负数, 则结束索引会被自动计算成为 length+end.

fill 方法故意被设计成通用方法, 也就是说它不需要 this 值必须是个数组对象, 类数组对象也是可以调用该方法的 .

fill 方法是个可变方法, 它会改变调用它的 this 对象本身, 然后返回它, 而并不是返回一个副本.

#### 示例
```javascript
[1, 2, 3].fill(4)            // [4, 4, 4]
[1, 2, 3].fill(4, 1)         // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)      // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)      // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)    // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)  // [1, 2, 3]
Array(3).fill(4);            // [4, 4, 4]
[].fill.call({length: 3}, 4) // {0: 4, 1: 4, 2: 4, length: 3}
```

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |





## Array.prototype.pop()

#### 概述

pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

```javascript
let a = [1, 2, 3];
a.length; // 3

a.pop(); // 3

console.log(a); // [1, 2]
a.length; // 2
```

#### 语法
`arr.pop()`

#### 返回值
从数组中删除的元素; undefined 如果数组为空。

#### 描述
pop 方法从一个数组中删除最后一个元素，并将该值返回给调用者。

pop 是故意通用的; 这个方法可以是 called 或applied  到类似数组的对象。不包含反映一系列连续的最后一个的长度属性的对象，基于零的数值属性可能不会以任何有意义的方式表现。

如果你在一个空数组上调用 pop()，它返回  undefined。

#### 示例
例子: 删除掉数组的最后一个元素

下面的代码首先创建了一个拥有四个元素的数组 myFish，然后删除掉它的最后一个元素。
```javascript
let myFish = ["angel", "clown", "mandarin", "surgeon"];

let popped = myFish.pop();

console.log(myFish);
// ["angel", "clown", "mandarin"]

console.log(popped);
// surgeon
```

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition |
| ECMAScript 5.1 (ECMA-262)               | Standard |  |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |  |
| ECMAScript 2017 Draft (ECMA-262)        | Draft    |  |