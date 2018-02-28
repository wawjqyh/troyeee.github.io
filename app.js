var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

/**设置环境变量*/
app.set("env", "production");

/**
 * 基础中间件
 */
app.use(favicon(path.join(__dirname, 'src/images', 'favicon.ico')));

/**
 * 配置静态文件目录
 */
app.use("/index.html", express.static(path.join(__dirname, "index.html")));
app.use("/src", express.static(path.join(__dirname, 'src')));
app.use("/docs", express.static(path.join(__dirname, 'docs')));
app.use("/", function (req, res, next) {
    res.redirect("/index.html");
});

/**
 * 错误处理
 * catch 404 and forward to error handler
 */
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/**
 * 返回500错误页 app.get(‘env’)  ：当前用户环境变量中NODE_ENV值
 * development 为开发环境
 * development error handler
 * will print stacktrace
 */
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send('error');
    });
}

/**
 * production error handler
 * no stacktraces leaked to user
 */
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('error');
});

module.exports = app;
