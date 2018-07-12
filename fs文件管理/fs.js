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
// FS.stat('before.txt', (err, info) => {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(`文件：${info.isFile()}`)
//         console.log(`目录：${info.isDirectory()}`)
//     }
// })

// 2. FS.mkdir 创建文件目录
// FS.mkdir('css', err => {
//     // 判断当前创建文件是否存在如果存在则返回
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("创建文件成功")
// })

// 3.FS.writeFile 异步地写入数据到文件，如果文件已经存在，则覆盖文件。 data 可以是字符串或 buffer。
/*
filename      (String)            文件名称
data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
options        (Object)           option数组对象，包含：
· encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
· mode         (Number)        文件读写权限，默认值 438
· flag            (String)            默认值 ‘w'
callback {Function}  回调，传递一个异常参数err。
*/
// FS.writeFile("before.txt", "学前必读", err => {
//     if (err) {
//         console.error(err)
//     }
//     console.log("文件已写入")
// })


// 4. FS.appendFile 异步地追加数据到一个文件，如果文件不存在则创建文件
/*
file <string> | <Buffer> | <URL> | <number> 文件名或文件描述符
data <string> | <Buffer>
options <Object> | <string>
·encoding <string> | <null> 默认为 'utf8'
·mode <integer> 默认为 0o666
·flag <string> 默认为 'a'
callback <Function>
err <Error>
*/
// FS.appendFile('before.txt', "我是追加数据", err => {
//     if (err) {
//         console.error(err)
//     }
//     console.log("追加文件成功")
// })


// 5. FS.readFile  异步地读取一个文件的全部内容
/*
path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
options <Object> | <string>
    *encoding <string> | <null> 默认为 null。
    *flag <string> 详见支持的文件系统flag。默认为 'r'。
callback <Function>
    *err <Error>
    *data <string> | <Buffer>
*/
// FS.readFile('before.txt', (err, data) => {
//     if (err) {
//         console.error(err)
//     }
//     console.log(data.toString())
// })


// 6. FS.readdir 读取一个目录的内容。 回调有两个参数 (err, files)，其中 files 是目录中不包括 '.' 和 '..' 的文件名的数组
/*
path <string> | <Buffer> | <URL>
options <string> | <Object>
    *encoding <string> 默认 = 'utf8'
callback <Function>
    *err <Error>
    *files <string[]> | <Buffer[]>
*/
// FS.readdir("../fs文件管理", (err, files) => {
//     if (err) {
//         console.error(err)
//     }
//     console.log(files)
// })


// 7.FS.rename  重命名(重命名文件|剪切文件)
/*
oldPath <string> | <Buffer> | <URL>
newPath <string> | <Buffer> | <URL>
callback <Function>
    *err <Error>
*/
// 重命名
// FS.rename("html/index.html", "html/changed.html", err => {
//     if (err) {
//         console.err(err)
//     }
// })

// 剪切文件
// FS.rename("html/index.html", "changed.html", err => {
//     if (err) {
//         console.err(err)
//     }
// })

// 8. FS.rmdir 删除文件目录
/*
path <string> | <Buffer> | <URL>
callback <Function>
    *err <Error>
*/
// FS.rmdir("css", err => {
//     if (err) {
//         console.error(err)
//          return false
//     }
// })

// 9.FS.unlink 删除文件
/*
path <string> | <Buffer> | <URL>
callback <Function>
    *err <Error>
*/
// FS.unlink("html/changed.html", err => {
//     if (err) {
//         console.error(err)
//         return false
//     }
//     console.log("删除文件成功")
// })



// 1.打印出 fs文件管理  下的所有文件夹
// let directorys = []
// FS.readdir('../fs文件管理', (err, files) => {
//     if (err) {
//         console.log(err)
//         return false;
//     } else {
//         console.log(files);
//         (function getDirectory(i) {
//             console.log(directorys)
//             if (i === files.length) return;
//             FS.stat(`../fs文件管理/${files[i]}`, (err, stats) => {
//                 if (err) {
//                     return false;
//                 } else if (stats.isDirectory()) {
//                     directorys.push(files[i])
//                 }
//                 getDirectory(i + 1);
//             })
//         })(0)
//     }
// })




// 文件流的形式读取文件
/*
path <string> | <Buffer> | <URL>
options <string> | <Object>
    *flags <string> 详见支持的文件系统flag。默认为 'r'。
    *encoding <string> 默认为 null。
    *fd <integer> 默认为 null。
    *mode <integer> 默认为 0o666。
    *autoClose <boolean> 默认为 true。
    *start <integer>
    *end <integer> 默认为 Infinity。
    *highWaterMark <integer> 默认为 64 * 1024。
*/
// let readStream = FS.createReadStream('input.txt');
// // 生命数据保存
// let data = "";

// // 读取数据
// readStream.on('data', chunk => {
//     data += chunk;
// });

// // 读取完成
// readStream.on('end', chunk => {
//     console.log(data);
//     console.log(chunk)
// })

// // 读取错误
// readStream.on('error', err => {
//     console.log(err)
// })





// 文件流的形式写入文件
/*
path <string> | <Buffer> | <URL>
options <string> | <Object>
    *flags <string> 详见支持的文件系统flag。默认为 'w'。
    *encoding <string> 默认为 'utf8'。
    *fd <integer> 默认为 null。
    *mode <integer> 默认为 0o666。
    *autoClose <boolean> 默认为 true。
    *start <integer>
返回: <fs.WriteStream> 详见可写流。
*/
// let writeStream = FS.createWriteStream("output.txt");

// let writeData = "我是从数据库获取的数据\n";

// // 写入数据
// writeStream.write(writeData,'utf-8');

// // 写入完成   触发写入finish函数
// writeStream.end();

// // 写入完成
// writeStream.on('finish',()=>{
//     console.log("写入完成")
// })

// // 写入失败
// writeStream.on('error',(err)=>{
//     console.log(err)
// })





// 管道流

let readStream = FS.createReadStream('input.txt');
let writeStream = FS.createWriteStream("output.txt");

// 读取数据写入写入流

readStream.pipe(writeStream);
console.log("管道流执行完毕")