

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