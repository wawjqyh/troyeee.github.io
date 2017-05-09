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

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 3rd Edition (ECMA-262)       | Standard | Initial definition. Implemented in JavaScript 1.2 |
| ECMAScript 5.1 (ECMA-262)               | Standard |                    |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |                    |
| ECMAScript Latest Draft (ECMA-262)      | Draft    |                    |

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

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |

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

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition.Implemented in JavaScript 1.6 |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | |

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

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition.Implemented in JavaScript 1.6 |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | |

## Array.prototype.find() *

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

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |
| ECMAScript 2017 Draft (ECMA-262)        | Draft    | |

## Array.prototype.findIndex() *

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

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |

## Array.prototype.forEach()

forEach() 方法对数组的每个元素执行一次提供的函数。

```javascript
let a = ['a', 'b', 'c'];

a.forEach(function(element) {
    console.log(element);
});

// a
// b
// c
```

#### 语法
```javascript
array.forEach(callback(currentValue, index, array){
    //do something
}, this)

array.forEach(callback[, thisArg])
```

#### 参数

* `callback` 为数组中每个元素执行的函数，该函数接收三个参数：
    * `currentValue(当前值)` 数组中正在处理的当前元素。
    * `index(索引)` 数组中正在处理的当前元素的索引。
    * `array` forEach()方法正在操作的数组。
* `thisArg 可选` 可选参数。当执行回调 函数时用作this的值(参考对象)。

#### 返回值
undefined.

#### 描述
forEach 方法按升序为数组中含有效值的每一项执行一次callback 函数，那些已删除（使用delete方法等情况）或者未初始化的项将被跳过（但不包括那些值为 undefined 的项）（例如在稀疏数组上）。

callback 函数会被依次传入三个参数：
* 数组当前项的值
* 数组当前项的索引
* 数组对象本身

如果给forEach传递了thisArg参数，当调用时，它将被传给callback 函数，作为它的this值。否则，将会传入 undefined 作为它的this值。callback函数最终可观察到this值，
这取决于 函数观察到this的常用规则。

forEach 遍历的范围在第一次调用 callback 前就会确定。调用forEach 后添加到数组中的项不会被 callback 访问到。如果已经存在的值被改变，则传递给 callback 的值是
forEach 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了(例如使用 shift()) ，之后的元素将被跳过 - 参见下面的示例。

forEach() 为每个数组元素执行callback函数；不像map() 或者reduce() ，它总是返回 undefined值，并且不可链式调用。典型用例是在一个链的最后执行副作用。

`注意： 没有办法中止或者跳出 forEach 循环，除了抛出一个异常。如果你需要这样，使用forEach()方法是错误的，你可以用一个简单的循环作为替代。
如果您正在测试一个数组里的元素是否符合某条件，且需要返回一个布尔值，那么可使用 Array.every 或 Array.some。如果可用，新方法 find() 或者findIndex() 也可被用于真值测试的提早终止。`

#### 示例

**打印出数组的内容**

下面的代码会为每一个数组元素输出一行记录：

```javascript
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

// 注意索引2被跳过了，因为在数组的这个位置没有项
[2, 5, ,9].forEach(logArrayElements);

// a[0] = 2
// a[1] = 5
// a[3] = 9

[2, 5,"" ,9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] =
// a[3] = 9

[2, 5, undefined ,9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9


let xxx;
// undefined

[2, 5, xxx ,9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9
```

**使用thisArg**

举个勉强的例子，从每个数组中的元素值中更新一个对象的属性：
```javascript
function Counter() {
    this.sum = 0;
    this.count = 0;
}

Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
    }, this);
    //console.log(this);
};

var obj = new Counter();
obj.add([1, 3, 5, 7]);

obj.count;
// 4 === (1+1+1+1)
obj.sum;
// 16 === (1+3+5+7)
```

因为thisArg参数 (this) 传给了forEach()，每次调用时，它都被传给callback函数，作为它的this值。

`注意：如果使用箭头函数表达式传入函数参数，thisArg 参数会被忽略，因为箭头函数在词法上绑定了this值。`

**对象复制函数**

下面的代码会创建一个给定对象的副本。 创建对象的副本有不同的方法，以下是只是一种方法，并解释了Array.prototype.forEach() 是如何使用ECMAScript 5
Object.* 元属性（meta property ）函数工作的。
```javascript
function copy(obj) {
  var copy = Object.create(Object.getPrototypeOf(obj));
  var propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var obj1 = { a: 1, b: 2 };
var obj2 = copy(obj1); // obj2 looks like obj1 now
```

**如果数组在迭代时被修改了，则其他元素会被跳过**

下面的例子输出"one", "two", "four"。当到达包含值"two"的项时，整个数组的第一个项被移除了，这导致所有剩下的项上移一个位置。
因为元素 "four"现在在数组更前的位置，"three"会被跳过。 forEach()不会在迭代之前创建数组的副本。
```javascript
var words = ["one", "two", "three", "four"];
words.forEach(function(word) {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});
// one
// two
// four
```

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | |

## Array.prototype.includes() *

includes() 方法用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。

```javascript
var a = [1, 2, 3];
a.includes(2); // true
a.includes(4); // false
```

#### 语法
```javascript
arr.includes(searchElement)
arr.includes(searchElement, fromIndex)
```

#### 参数

* `searchElement` 需要查找的元素值
* `fromIndex 可选` 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。

#### 返回值
一个 Boolean

#### 示例
```javascript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

**fromIndex 大于等于数组长度**

如果fromIndex 大于等于数组长度 ，则返回 false 。该数组不会被搜索。
```javascript
var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   //false
arr.includes('c', 100); // false
```

**计算出的索引小于 0**

如果 fromIndex 为负值，计算出的索引将作为开始搜索searchElement的位置。如果计算出的索引小于 0，则整个数组都会被搜索。
```javascript
// 数组长度是3
// fromIndex 是 -100
// computed index 是 3 + (-100) = -97

var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
```

**includes() 作为一个通用方法**

includes() 方法有意设计为通用方法。它不要求this值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。下面的例子展示了 在函数的arguments对象上调用的includes() 方法。
```javascript
(function() {
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');
```

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard | Initial definition |
| ECMAScript 2017 Draft (ECMA-262)        | Draft    | |

## Array.prototype.indexOf()

indexOf()方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。

```javascript
var a = [2, 9, 9];
a.indexOf(2); // 0
a.indexOf(7); // -1

if (a.indexOf(7) === -1) {
  // element doesn't exist in array
}
```

#### 语法
```javascript
arr.indexOf(searchElement)
arr.indexOf(searchElement[, fromIndex = 0])
```

#### 参数
* `searchElement` 要查找的元素
* `fromIndex` 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，
则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，
仍然从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.

#### 返回值
首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1

#### 描述
indexOf 使用strict equality (无论是 ===, 还是 triple-equals操作符都基于同样的方法)进行判断 searchElement与数组中包含的元素之间的关系。

#### 示例
**使用indexOf**

以下例子使用indexOf方法确定多个值在数组中的位置。
```javascript
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

**找出指定元素出现的所有位置**
```javascript
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

**判断一个元素是否在数组里，不在则更新数组**
```javascript
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

// New veggies collection is : potato,tomato,chillies,green-papper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
updateVegetablesCollection(veggies, 'spinach');
```

#### 规范

| Specification                           | Status   | Comment            |
|:-----------------------------------|:--------|:-----------------|
| ECMAScript 5.1 (ECMA-262)               | Standard | Initial definition.Implemented in JavaScript 1.6 |
| ECMAScript 2015 (6th Edition, ECMA-262) | Standard |  |