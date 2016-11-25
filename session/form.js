var express = require("express");
var session = require("express-session");
var hbs = require("express-handlebars");
var bodyParser = require("body-parser");
var app = express();

app.engine("hbs", hbs());
app.set("view engine", "hbs"); // 模板引擎
app.set("views", "templates"); // 模板目录

var userArr = ["changran", "maiziedu"];
app.use(session({secret: "maiziedu"}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(request, response, next) {
  var username = request.session.username;
  if (username) {
    response.send("hello " + username);
  } else {
    response.render("form");
  }
});

app.post("/",function(request, response, next) {
  console.log(request.body.username);
  console.log(request.body.password);
  
  if(userArr.indexOf(request.body.username) >= 0) {
    request.session.username = request.body.username;
  } else {
    request.session.destroy();
  }
  response.redirect("/");
});


app.listen(1234, "localhost");