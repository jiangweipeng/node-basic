// 创建服务

let http = require('http');

let fs = require('fs');

let path = require('path')

let resolveType = require('../util/comon.js')

http.createServer((req, res) => {
    let pathName = req.url;
    if (pathName === "/") {
        pathName = "/index.html";
    }
    let reqType = resolveType.getSuffixName(path.extname(pathName));
    if (pathName !== "/favicon.ico") {
        fs.readFile('../E/' + pathName, (err, data) => {
            if (err) {
                console.log('404')
            } else {
                res.writeHead(200, {
                    "Content-type": `text-${reqType};charset='utf-8'`
                });
                res.write(data);
                res.end();
            }

        })
    }
}).listen(8090);