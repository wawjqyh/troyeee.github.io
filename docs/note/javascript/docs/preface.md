# 关键词

## writable
对象属性是否可修改,flase为不可修改，默认值为true

## enumerable
可枚举性（enumerable）用来控制所描述的属性，是否将被包括在for...in循环之中。具体来说，如果一个属性的enumerable为false，下面三个操作不会取到该属性。
* for...in循环
* Object.keys方法
* JSON.stringify方法

## configurable
可配置，即能否使用delete、能否需改属性特性、或能否修改访问器属性