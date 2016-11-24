// 引入所需模块
var http = require('http');

// 建立服务器
var app = http.createServer(function(require, response) {
  response.writeHead(200, {
    "Content-type": "text/plain"
  });
  response.end("hello world!\n");
});

// 启动的服务器
app.listen(1234, "localhost");
console.log("Server runing at localhost://localhost:1234/");