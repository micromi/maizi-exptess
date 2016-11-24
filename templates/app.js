var express = require("express");
var hbs = require("express-handlebars");
var app = express();

app.engine("hbs", hbs());
app.set("view engine", "hbs"); // 模板引擎
app.set("views", "templates"); // 模板目录

app.get("/templates",function(request, response, next) {
  response.render("handlebars");
});

// 可以注册其他模板
app.get("/jade",function(request, response, next) {
  response.render("index.jade");
});



app.listen(1234, "localhost");