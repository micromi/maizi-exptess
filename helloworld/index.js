var express = require("express");
var app = express();

// app.use(express.static(__dirname + '/public'));

// logger
app.use(function(requset, response, next) {
  console.log("Incoming Request " + requset.method + " to " + requset.url);
  if (requset.url === "/") {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("this is home!\n");
  } else {
    next();
  }
})
app.use(function(requset, response, next) {
  if (requset.url === "/about") {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("this is maizi.edu!\n");
  }
  next();
});

// app.use(function(requset, response, next) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("hello world!\n");
// });

app.use(function(requset, response, next) {
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.end("404 not found!\n");
});

app.listen(1234, "localhost");