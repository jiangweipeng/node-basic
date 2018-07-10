const HTTP = require('http');
const URL = require('url');
HTTP.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        console.log(req.url)
        let query = URL.parse(req.url, true);
        console.log(query)
    }
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    })
    res.end('url模块12312321');
    console.log('server running on 3000')
}).listen(3000)