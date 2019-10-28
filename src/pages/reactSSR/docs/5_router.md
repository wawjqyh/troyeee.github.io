# 在 SSR 框架中使用路由

客户端和服务端使用路由的方式区别不大，客户端渲染使用的是 `BrowserRouter`，而服务端渲染使用的是 `StaticRouter`

## 实例

项目结构如下：

![](../pic/5_router_20191028231319.png)

关键代码：

```javascript
// src/router.jsx
// 路由配置文件
class RouterIndex extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/hello" component={Hello} />
      </React.Fragment>
    );
  }
}
```

```javascript
// src/main.jsx
// 客户端使用路由
const appTarget = document.getElementById('root');
ReactDOM.hydrate(
  <BrowserRouter>
    <RouterIndex />
  </BrowserRouter>,
  appTarget
);
```

```javascript
// server/router.js
// 服务端使用路由
router.get('*', (ctx, next) => {
  const content = renderToString(
    <StaticRouter location={ctx.request.url} context={{}}>
      <RouterIndex />
    </StaticRouter>
  );

  ctx.body = `
    <html>
      <head>
        <title>react srr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
});
```

注意点：

- `router.get('*')` 服务端需要匹配所有的路由
- `StaticRouter` 需要传入服务端所匹配到的地址。`BrowserRouter` 可以直接拿到当前地址，因为运行在浏览器端

> 服务端渲染只渲染第一次请求的页面，因为使用了同构，页面在浏览器运行后后面的路由跳转和页面渲染就会由客户端接管。单页面应用路由跳转会被拦截。
