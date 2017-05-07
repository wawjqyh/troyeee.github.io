# 数组

## 概览

### 会改变自身的方法

下面的这些方法会改变调用它们的对象自身的值：

`copyWithin() *`<br>
在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。

`fill() *`<br>
将数组中指定区间的所有元素的值，都替换成某个固定的值。

`pop()`<br>
删除数组的最后一个元素，并返回这个元素。

`push()`<br>
在数组的末尾增加一个或多个元素，并返回数组的新长度。

`reverse()`<br>
颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。

`shift()`<br>
删除数组的第一个元素，并返回这个元素。

`sort()`<br>
对数组元素进行排序，并返回当前数组。

`splice()`<br>
在任意的位置给数组添加或删除任意个元素。

`unshift()`<br>
在数组的开头增加一个或多个元素，并返回数组的新长度。

### 不会改变自身的方法
下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。

`concat()`<br>
返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。

`includes() *`<br>
判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。

`join()`<br>
连接所有数组元素组成一个字符串。

`slice()`<br>
抽取当前数组中的一段元素组合成一个新数组。

`toString()`<br>
返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 Object.prototype.toString() 方法。

`toLocaleString()`<br>
返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 Object.prototype.toLocaleString() 方法。

`indexOf()`<br>
返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。

`lastIndexOf()`<br>
返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。

### 遍历方法
在下面的众多遍历方法中，有很多方法都需要指定一个回调函数作为参数。在回调函数执行之前，数组的长度会被缓存在某个地方，所以，
如果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。此外，如果在回调函数中对当前数组进行了其它修改，
比如改变某个元素的值或者删掉某个元素，那么随后的遍历操作可能会受到未预期的影响。总之，不要尝试在遍历过程中对原数组进行任何修改，
虽然规范对这样的操作进行了详细的定义，但为了可读性和可维护性，请不要这样做。

`Array.prototype.forEach()`<br>
为数组中的每个元素执行一次回调函数。

`Array.prototype.entries() *`<br>
返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。

`Array.prototype.every()`<br>
如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。

`Array.prototype.some()`<br>
如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。

`Array.prototype.filter()`<br>
将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。

`Array.prototype.find() *`<br>
找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。

`Array.prototype.findIndex() *`<br>
找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。

`Array.prototype.keys() *`<br>
返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。

`Array.prototype.map()`<br>
返回一个由回调函数的返回值组成的新数组。

`Array.prototype.reduce()`<br>
从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。

`Array.prototype.reduceRight()`<br>
从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。

`Array.prototype.values() *`<br>
返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。

`Array.prototype[@@iterator]() *`<br>
和上面的 values() 方法是同一个函数。

### 通用方法
在 `JavaScript` 中，很多的数组方法被故意设计成是通用的。也就是说，那些看起来像是数组的对象（类数组对象），即拥有一个 `length` 属性，
以及对应的索引属性（也就是数字类型的属性，比如 `obj[5]`）的非数组对象也是可以调用那些数组方法的。其中一些数组方法，比如说 `join` 方法，
它们只会单纯的读取当前对象的 length 属性和索性属性的值，并不会尝试去改变这些属性的值。而另外一些数组方法，比如说 `reverse` 方法，
它们会尝试修改那些属性的值，因此，如果当前对象是个 `String` 对象，那么这些方法在执行时就会报错，因为字符串对象的 `length` 属性和索引属性都是只读的。

## Array.length

#### 概述
`length` 属性表示一个无符号 `32-bit` 整数，返回一个数组中的元素个数

| 属性         |       |
|:-----------:|:----:|
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
|:-----------:|:----:|
| writable     | false |
| enumerable   | false |
| configurable | false |

## Array.from() *

方法从一个类似数组或可迭代对象创建一个新的数组实例。

```javascript
const bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]

Array.from('foo');
// ["f", "o", "o"]
```

#### 语法
`Array.from(arrayLike[, mapFn[, thisArg]])`

#### 参数
* `arrayLike`<br>
想要转换成真实数组的类数组对象或可遍历对象。

* `mapFn 可选`<br>
可选参数，如果指定了该参数，则最后生成的数组会经过该函数的加工处理后再返回。

* `thisArg 可选`<br>
可选参数，执行 mapFn 函数时 this 的值。

#### 返回值
一个新的 `Array` 实例

#### 描述
Array.from() 允许你从下面两者来创建数组：

* 类数组对象（拥有一个 length 属性和若干索引属性的任意对象）
* 可遍历对象（你可以从它身上迭代出若干个元素的对象，比如有 Map 和 Set 等）

`Array.from()` 方法有一个可选参数 `mapFn`，让你可以在最后生成的数组上再执行一次 `map` 方法后再返回。也就是说 `Array.from(obj, mapFn, thisArg)`
就相当于 `Array.from(obj).map(mapFn, thisArg)`, 除非创建的不是可用的中间数组。 这对一些数组的子类,如  `typed arrays` 来说很重要,
因为中间数组的值在调用 `map()` 时需要是适当的类型。

from() 的 length 属性为 1 。

在 `ES2015` 中， `Class` 语法允许我们为内置类型（比如 Array）和自定义类新建子类（比如叫 SubArray）。
这些子类也会继承父类的静态方法，比如 SubArray.from()，调用该方法后会返回子类 SubArray 的一个实例，而不是 Array 的实例。

#### 示例
Array from a String
```javascript
Array.from('foo');
// ["f", "o", "o"]
```

Array from a Set
```javascript
var s = new Set(['foo', window]);
Array.from(s);
// ["foo", window]
```

Array from a Map
```javascript
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]
```

Array from an Array-like object (arguments)
```javascript
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [1, 2, 3]
```

Using arrow functions and Array.from
```javascript
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
```

## Array.isArray()

该方法适用于确定传递的值是否为Array。

```javascript
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray("foobar");   // false
Array.isArray(undefined);  // false
```

#### 语法
Array.isArray(obj)

#### 参数
* `obj`<br>
需要检测的值。

#### 返回值
如果对象是 Array，则为true; 否则为false。

#### 示例
```javascript
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

## Array.of() *

Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个包含 7 个 undefined 元素的数组。

```javascript
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
语法
Array.of(element0[, element1[, ...[, elementN]]])
```

#### 参数
* `elementN`<br>
任意个参数，将按顺序成为返回数组中的元素。

#### 返回值
新的 Array 实例。

#### 描述
此函数是ECMAScript 2015标准的一部分。

#### 示例
```javascript
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Array.prototype.concat()

concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```javascript
let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];

let arr3 = arr1.concat(arr2);

console.log(arr3);
// results in a new array
// [ "a", "b", "c", "d", "e", "f" ]

console.log(arr1);
// ["a", "b", "c"]

console.log(arr2);
// ["d", "e", "f"]
```

#### 语法
```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

#### 参数
* `valueN`<br>
需要与原数组合并的数组或非数组值。详见下文。

#### 返回值
新的 Array 实例。

#### 描述
concat 方法将创建一个新的数组，然后将调用它的对象(this 指向的对象)中的元素以及所有参数中的数组类型的参数中的元素以及非数组类型的参数本身按照顺序放入这个新数组,并返回该数组.

concat 方法并不修改调用它的对象(this 指向的对象) 和参数中的各个数组本身的值,而是将他们的每个元素拷贝一份放在组合成的新数组中.原数组中的元素有两种被拷贝的方式:
* 对象引用(非对象直接量):concat 方法会复制对象引用放到组合的新数组里,原数组和新数组中的对象引用都指向同一个实际的对象,所以,当实际的对象被修改时,两个数组也同时会被修改.
* 字符串和数字(是原始值,而不是包装原始值的 String 和 Number 对象): concat 方法会复制字符串和数字的值放到新数组里.

`注意: 连接一个或多个数组（值）将不会改变原本的数组/值。进一步说，任何对新数组的操作都不会对原有的数组造成影响（仅当该元素不是对象的引用时），反之亦然。`

#### 示例
连接两个数组

下面的代码演示两个数组合并为一个新数组:
```javascript
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// 组成新数组 ["a", "b", "c", 1, 2, 3]; 原数组 alpha 和 numeric 未被修改
var alphaNumeric = alpha.concat(numeric);
```

连接三个数组

下面的代码演示三个数组合并为一个新数组:
```javascript
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// 组成新数组[1, 2, 3, 4, 5, 6, 7, 8, 9]; 原数组 num1, num2, num3 未被修改
var nums = num1.concat(num2, num3);
```

将非数组值合并到数组里

下面的代码演示将多个数组和多个非数组值合并为一个新数组:
```javascript
var alpha = ['a', 'b', 'c'];

// 组成新数组 ["a", "b", "c", 1, 2, 3], 原alpha数组未被修改
var alphaNumeric = alpha.concat(1, [2, 3]);
```

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

## Array.prototype.entries() *

entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

```javascript
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next().value);
// [0, "a"]
console.log(iterator.next().value);
// [1, "b"]
console.log(iterator.next().value);
// [2, "c"]
```

#### 语法
```javascript
arr.entries()
```

#### 返回值
一个新的 Array 迭代器对象。

#### 示例
使用for…of 循环

```javascript
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

for (let e of iterator) {
    console.log(e);
}

// [0, "a"]
// [1, "b"]
// [2, "c"]
```

## Array.prototype.every()

every() 方法测试数组的所有元素是否都通过了指定函数的测试。

#### 语法
```javascript
arr.every(callback[, thisArg])
```

#### 参数
* `callback`<br>
用来测试每个元素的函数。

* `thisArg`<br>
执行 callback 时使用的 this 值。

#### 描述
every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，
every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。

callback 被调用时传入三个参数：元素值，元素的索引，原数组。

如果为 every 提供一个 thisArg 参数，在该参数为调用 callback 时的 this 值。如果省略该参数，则 callback 被调用时的 this 值，在非严格模式下为全局对象，在严格模式下传入 undefined。

every 不会改变原数组。

every 遍历的元素范围在第一次调用 callback 之前就已确定了。在调用 every 之后添加到数组中的元素不会被 callback 访问到。如果数组中存在的元素被更改，
则他们传入 callback 的值是 every 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

every acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. (It is vacuously true that all elements of the empty
set satisfy any given condition.)

#### 实例
例子：检测所有数组元素的大小

下例检测数组中的所有元素是否都大于 10。

```javascript
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
```

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

## Array.prototype.filter()

filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。

```javascript
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

#### 语法
```javascript
var new_array = arr.filter(callback[, thisArg])
```

#### 参数
* `callback`<br>
用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。<br>
返回true表示保留该元素（通过测试），false则不保留。

* `thisArg 可选`<br>
执行 callback 时的用于 this 的值。

#### 返回值
一个新的通过测试的元素的集合的数组

#### 描述
filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或 等价于 true 的值 的元素创建一个新数组。
callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。

callback 被调用时传入三个参数：
* 元素的值
* 元素的索引
* 被遍历的数组

如果为 filter 提供一个 thisArg 参数，则它会被作为 callback 被调用时的 this 值。否则，callback 的 this 值在非严格模式下将是全局对象，严格模式下为 undefined。
The thisvalue ultimately observable by callback is determined according to the usual rules for determining thethis seen by a function.

`filter` 不会改变原数组。

filter 遍历的元素范围在第一次调用 callback 之前就已经确定了。在调用 filter 之后被添加到数组中的元素不会被 filter 遍历到。如果已经存在的元素被改变了，则他们传入 callback 的值是 filter 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

#### 示例
例子：筛选排除掉所有的小值

下例使用 filter 创建了一个新数组，该数组的元素由原数组中值大于 10 的元素组成。
```javascript
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

## Array.prototype.find()

find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

```javascript
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].find(isBigEnough); // 130
```

另请参见  findIndex() 方法，它返回数组中找到的元素的索引，而不是其值。

如果你需要找到一个元素的位置或者一个元素是否存在于数组中，使用Array.prototype.indexOf() 或 Array.prototype.includes()。

#### 语法
```javascript
arr.find(callback[, thisArg])
```

#### 参数
* `callback`<br>
在数组每一项上执行的函数，接收 3 个参数：

    * `element` 当前遍历到的元素。
    * `index` 当前遍历到的索引。
    * `array` 数组本身。

* `thisArg 可选`<br>
指定 callback 的 this 参数。

#### 描述
find方法对数组中的每一项元素执行一次callback 函数，直至有一个callback返回true。当找到了这样一个元素后，该方法会立即返回这个元素的值，
否则返回undefined。注意callback函数只会在分配了值的数组索引上调用，而不会在已删除或未分配值的索引上调用。

调用callback函数带有3个参数：当前元素的值、当前元素的索引，以及数组本身。

如果提供了thisArg参数，那么它将作为每次callback函数执行时的上下文对象，否则上下文对象为undefined。

find方法不会改变数组。

在第一次调用callback函数时会确定元素的索引范围，因此在find方法开始执行之后添加到数组的新元素将不会被callback函数访问到。
如果数组中一个尚未被callback函数访问到的元素的值被callback函数所改变，那么当callback函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素不会被访问到。

#### 示例
用对象的属性查找数组里的对象
```javascript
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```

寻找数组中的质数

下面的例子展示了如何从一个数组中寻找质数（如果找不到质数则返回undefined）
```javascript
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

## Array.prototype.findIndex()

findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。

```javascript
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].findIndex(isBigEnough); // 3
```

另请参见  find() 方法，它返回数组中找到的元素的值，而不是其索引。

#### 语法
```javascript
arr.findIndex(callback[, thisArg])
```

#### 参数
* `callback` 针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:
    * `element` 当前元素.
    * `index` 当前元素的索引.
    * `array` 调用findIndex的数组.
* `thisArg 可选` 执行 callback 时作为 this对象 的值.

#### 描述
findIndex() 方法对数组中的每一个元素执行一次回调函数直至有一个回调函数返回真值 。如果找到了一个这样的元素， 则 findIndex 将会立刻返回这个元素的索引。
否则 findIndex 将会返回 -1。回调函数只有在数组的索引被分配值的时候才会被调用，若是索引被删除或者没有被赋值将不会被调用。

回调函数调用时有三个参数：元素的值，元素的索引，以及被遍历的数组。

如果一个 thisArg 参数被提供给 findIndex, 它将会被当作 this 使用在每次回调函数被调用的时候。如果没有被提供，将会使用undefined。

findIndex 不会修改所调用的数组。

在第一次调用callback函数时会确定元素的索引范围，因此在findIndex方法开始执行之后添加到数组的新元素将不会被callback函数访问到。
如果数组中一个尚未被callback函数访问到的元素的值被callback函数所改变，那么当callback函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素不会被访问到。

#### 示例
下面的示例演示了如何查找一个数组中首个质数元素的索引, 找不到则返回 -1.
```javascript
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) return false;
    }
    return (element > 1);
}

console.log( [4, 6, 8, 12].findIndex(isPrime) ); // -1, 没找到质数元素
console.log( [4, 6, 7, 12].findIndex(isPrime) ); // 2
```

## Array.prototype.pop()

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