// 1.引入http模块
const http = require('http');

// 2.使用http模块创建服务

/*
 * request 获取url信息
 * response 浏览器返回响应信息
 *
 * */

http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write("你好,Node.js"); //结束响应
    res.write("这是我的第一个node程序");
    console.log("server running 3000")
    res.end();
}).listen(3000);