/*
1. FS.stat  检测是文件或者目录
2. FS.mkdir 创建文件目录
3. FS.writeFile 创建写入文件
4. FS.appendFile 追加文件
5. FS.readFile  读取文件
6. FS.readdir 读取文件目录
7. FS.rename  重命名
8. FS.rmdir 删除文件目录
9. FS.unlink 删除文件

*/
const FS = require('fs');

// 1. FS.stat  检测是文件或者目录
FS.stat('before.txt', (err, info) => {
    if (err) {
        console.error(err)
    } else {
        console.log(`文件：${info.isFile()}`)
        console.log(`目录：${info.isDirectory()}`)
    }
})

// 2. FS.mkdir 创建文件目录
FS.mkdir('css', err => {
    // 判断当前问价是否存在如果存在则返回
    if (err) {
        console.log(err)
        return
    }
    console.log("创建文件成功")
})