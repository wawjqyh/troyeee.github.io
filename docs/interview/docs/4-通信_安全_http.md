## 通信类

### 什么是同源策略及限制

同源策略限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制

-   Cookie,LocalStorage 和 IndexDB 无法读取
-   DOM 无法获得
-   ajax 请求不能发送

### 前后端如何通信

-   ajax
-   WebSocket
-   CORS

### 如何创建 ajax

```javascript
var xhr = new XMLHttpRequest();

xhr.open(method, url, async, user, password);
xhr.send(data);

xhr.onload = function() {
    if(xhr.status===200||xhr.status===304){
        var res.xhr.responseText;
        // ... do something
    }
};
```

### 跨域通信的几种方式

-   JSONP
-   Hash
-   postMessage(html5)
-   WebSocket
-   CORS（新版的 ajax，可以添加请求头 origin 来支持跨域通信）

## http 协议类

### http 协议的主要特点

-   简单快速，访问某个资源只需要输 uri
-   灵活，http 头部有一个类型，通过一个 http 协议就可以完成不同类型的传输
-   无连接
-   无状态

### http 报文的组成部分

请求报文：

-   请求行
-   请求头
-   空行
-   请求体

响应报文：

-   状态行
-   响应头
-   空行
-   响应体

### http 方法

-   get 获取资源
-   post 传输资源
-   put 更新资源
-   delete 删除资源
-   head 获得报文首部

### post 和 get 的区别

-   get 在浏览器回退时是无害的，而 post 会再次请求
-   get 产生的 url 地址可以被收藏，而 post 不可以
-   get 请求会被浏览器主动缓存，而 post 不会，除非手动设置
-   get 请求只能进行 url 编码，而 post 支持多种编码方式
-   get 请求参数会被完整保留在浏览器历史记录里，而 post 中的参数不会被保留
-   get 请求在 url 中传送的参数是有长度限制的，而 post 没有限制
-   对参数的数据类型，get 只接受 ASCLL 字符，而 post 没有限制
-   get 比 post 更不安全，因为参数直接暴露在 url 上，所以不能用来传递敏感信息
-   get 参数通过 url 传递，post 放在 request body 中

### http 状态码

-   1xx：提示信息，表示请求已接收，继续处理
-   2xx：成功，表示请求已被成功接收
-   3xx：重定向，要完成请求必须进行更进一步的操作
-   4xx：客户端错误，请求有语法错误或请求无法实现
-   5xx：服务器错误，服务器未能实现合法的请求

-   什么是持久连接
-   什么是管线化

### http 和 https

HTTPS 和 HTTP 的区别主要如下：

-   https 协议需要到 ca 申请证书，一般免费证书较少，因而需要一定费用
-   http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议
-   http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443
-   http 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 http 协议安全

## 安全类

### CSRF

-   基本概念和缩写：通常称为跨站请求伪造，英文名 cross-sit request forgery
-   攻击原理：需要登录、某个接口存在漏洞
-   防御措施:
    -   Token 验证
    -   referer 验证
    -   隐藏令牌

### XSS

XSS (cross-site scripting 跨域脚本攻击)，比如：利用输入框注入脚本

防御措施：让用户输入的代码无法执行
