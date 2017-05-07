var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

/**设置环境变量*/
app.set("env", "production");

/**
 * 基础中间件
 */
app.use(favicon(path.join(__dirname, 'docs/images', 'favicon.ico')));

/**
 * bodyParser用于解析客户端请求体中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理
 */
app.use(bodyParser.json());
//解析post请求
app.use(bodyParser.urlencoded({extended: false}));
//解析cookie
app.use(cookieParser());

/**
 * 配置静态文件目录
 */
app.use(express.static(path.join(__dirname, 'docs')));

/**
 * 在express 默认生成的代码中，变量名为logger（记录器）;在控制台中，显示req请求的信息。
 * 也就是在控制台输出logger
 */
app.use(logger('dev'));

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
