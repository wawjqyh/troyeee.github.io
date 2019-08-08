// 装饰类
@testDec
class Demo {
  // ...
}

function testDec(target) {
  target.isDec = true;
}

alert(Demo.isDec);
