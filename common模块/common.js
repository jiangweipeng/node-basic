const HTTP = require('http');

const HTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'></meta>
        </head>
        <body>
            <h1>Node.js学习</h1>
        </body>
    </html>
`
HTTP.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    })
    res.end(HTML)
}).listen(3000)

/*
1. npm init --yes   当前文件(js)生成package.json文件
2. 自定义模块如果找不到会默认向node_modules文件夹里面找









*/