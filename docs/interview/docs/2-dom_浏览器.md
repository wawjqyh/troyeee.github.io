# DOM 及浏览器相关

## 1 渲染机制

### 1.1 什么是 DOCTYPE 及作用

-   DTD(document type definition，文档类型定义)是一系列的语法规则，用来定义 XML 或 HTML 的文件类型。浏览器绘使用它来判断文档类型，决定使用何种协议来解析，以及切换浏览器模式
-   DOCTYPE 是用来声明文档类型和 DTD 规范的，一个主要的用途便是文件的合法性验证。如果文件代码不合法，那么浏览器解析时便会出现一些差错（DOCTYPE 就是指定浏览器用哪种规范渲染）

```html
<!DOCTYPE html>     <!--html5-->

<!--严格模式-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!--传统模式-->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

-   严格模式包含所有 html 元素和属性，但不包括展示性和弃用的元素
-   传统模式包含所有 html 元素和属性，包括展示性和弃用的元素

### 1.2 浏览器渲染过程

![](images/1_1.png)

解析 html 以构建 dom 树 -> 构建 render 树 -> 布局 render 树 -> 绘制 render 树

-   DOM Tree：浏览器将 HTML 解析成树形的数据结构。
-   CSS Rule Tree：浏览器将 CSS 解析成树形的数据结构。
-   Render Tree: DOM 和 CSSOM 合并后生成 Render Tree。
-   layout: 有了 Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的 CSS 定义以及他们的从属关系，从而去计算出每个节点在屏幕中的位置。
-   painting: 按照算出来的规则，通过显卡，把内容画到屏幕上。
-   reflow（回流）：当浏览器发现某个部分发生了点变化影响了布局，需要倒回去重新渲染，内行称这个回退的过程叫 reflow。reflow 会从 <html> 这个 root frame 开始递归往下，依次计算所有的结点几何尺寸和位置。reflow 几乎是无法避免的。现在界面上流行的一些效果，比如树状目录的折叠、展开（实质上是元素的显 示与隐藏）等，都将引起浏览器的 reflow。鼠标滑过、点击……只要这些行为引起了页面上某些元素的占位面积、定位方式、边距等属性的变化，都会引起它内部、周围甚至整个页面的重新渲 染。通常我们都无法预估浏览器到底会 reflow 哪一部分的代码，它们都彼此相互影响着。
-   repaint（重绘）：改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸没有变。

注意：

-   display:none 的节点不会被加入 Render Tree，而 visibility: hidden 则会，所以，如果某个节点最开始是不显示的，设为 display:none 是更优的。
-   display:none 会触发 reflow，而 visibility:hidden 只会触发 repaint，因为没有发现位置变化。
-   有些情况下，比如修改了元素的样式，浏览器并不会立刻 reflow 或 repaint 一次，而是会把这样的操作积攒一批，然后做一次 reflow，这又叫异步 reflow 或增量异步 reflow。但是在有些情况下，比如 resize 窗口，改变了页面默认的字体等。对于这些操作，浏览器会马上进行 reflow。

### 1.3 重排 reflow

定义：DOM 结构中的各个元素都有自己的盒子模型，这些都需要浏览器根据各种样式来计算并根据计算结果将元素放到它该出现的位置，这个过程称之为 reflow

触发 refolw:

-   增加、删除、修改 DOM 节点时，会导致 reflow 或 repaint
-   移动 DOM 的位置，或是搞个动画的时候
-   修改 css 样式的时候
-   resize 窗口的时候（移动端没有这个问题），或是滚动的时候
-   修改网页的默认字体时

### 1.4 重绘 repaint

定义：当各种盒子的位置、大小以及其他属性，例如颜色、字体大小等确定下来后，浏览器于是便把这些元素都按照各自的特性绘制一遍，于是页面的内容出现了，这个过程称之为 repaint

触发 repaint：

-   DOM 改动
-   CSS 改动

### 1.5 布局 layout

有了 Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的 CSS 定义以及他们的从属关系，从而去计算出每个节点在屏幕中的位置。

## 2 DOM 事件

-   DOM 事件的级别
-   DOM 事件模型（捕获，冒泡）
-   DOM 事件流
-   描述 DOM 事件捕获的具体流程
-   Event 对象的常见应用
-   自定义事件

### 2.1 DOM 事件级别

-   DOM0
-   DOM2
-   DOM3

```javascript
// DOM0
element.onclick = function() {};

// DOM2
element.addEventListener("click", function() {});

// DOM3
// DOM3增加了一些事件类型
element.addEventListener("keyup", function() {});
```

### 2.2 DOM 事件模型

-   捕获
-   冒泡

### 2.3 事件流

一个完整的 JS 事件流是从 window 开始，最后回到 window 的一个过程

### 2.4 描述 DOM 事件捕获的具体流程

window -> document -> html -> body -> ... ->目标

### 2.5 event 对象

-   event.preventDefault()
-   event.stopPropagation()
-   event.stopImmediatePropagation()
-   event.currentTarget
-   event.target

### 2.6 自定义事件

```javascript
var eve = new Event("test");

ev.addEventListener("test", function() {
    console.log("2333");
});

ev.dispatchEvent(eve);
```

## 3 页面性能

### 3.1 资源压缩合并减少 http 请求

### 3.2 非核心代码异步加载

异步加载方式

-   动态脚本加载
-   defer
-   async

异步加载区别

-   defer 是在 html 解析完之后才会执行，如果是多个，按照加载的顺序依次执行
-   async 是在加载完之后立即执行，如果是多个，执行顺序和加载顺序无关

### 3.3 利用浏览器缓存

缓存分类

-   强缓存：用户发送的请求，直接从客户端缓存中获取，不发送请求到服务器，不与服务器发生交互行为
-   协商缓存：用户发送的请求，发送到服务器后，由服务器判定是否从缓存中获取资源
-   如果两个协议都有，以协商缓存为准

```
// http 协议头
// 强缓存
Expires:Thu,21 Jan 2017 11:11:11 GMT                // 表示过期时间
Cache-Control:max-age=3600

// 协商缓存
Last-Modified: Thu, 23 Aug 2018 15:34:08 GMT        // 表明请求的资源上次的修改时间
If-Modified-Since: Thu, 23 Aug 2018 15:34:08 GMT    // 客户端保留的资源上次的修改时间
ETag: W/"50d-165676be1db"                           // 资源的内容标识
If-None-Match: W/"50d-165676be1db"                  // 客户端保留的资源内容标识
```

缓存原理

### 3.4 使用 CDN

### 3.5 预解析 DNS

```html
<meta http-equiv="x-dns-prefetch-control" content="on">
<link rel="dns-prefetch" href="//host_name_to_prefetch.com">
```
