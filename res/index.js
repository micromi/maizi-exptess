var express = require("express");
var hbs = require("express-handlebars");
var app = express();

app.engine("hbs", hbs());
app.set("view engine", "hbs");

app.get("/test", function(request, response, next) {
  response.locals = {
    name: "maizi"
  }
  next();
}, function(request, response, next) {
  // response.set({"Content-Type": "text/html"});
  // console.log(response.locals.name);
  // response.render("render", { name: "maizi.edu"});
  response.render("render");
});
app.get("/send",  function(request, response, next) {
  // response.send(404, "Not Found!");
  response.status(200).send("<p>hello world</p>");
});
app.get("/json",  function(request, response, next) {
  // response.send(404, "Not Found!");
  response.status(200).send({
    name: "maizi",
    domin: "maizi.edu",
    username: "changran",
    password: "xxx"
  });
});
app.get("/redirect",  function(request, response, next) {
  // response.redirect("/json");
  response.redirect("https:www.google.com");
});



app.listen(1234, "localhost");