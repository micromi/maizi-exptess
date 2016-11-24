var express = require("express");
// var jade = require("jade");
var app = express();

app.set('view engine', 'jade');
app.set('views', 'templates');
// app.get("/jade",function(request, response, next) {
//   // response.render("index.jade");
//   response.render("index");
// });
app.get("/templates",function(request, response, next) {
  response.render("index");
});

app.listen(1234, "localhost");