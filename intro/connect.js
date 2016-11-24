var connect = require("connect");
var http = require("http");

// 建立app
var app = connect();

// 添加中间件
app.use(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("hello world!\n");
});

// 启动应用
http.createServer(app).listen(1234);