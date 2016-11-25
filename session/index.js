var express = require("express");
var session = require("express-session");
var app = express();

app.use(session({secret: "maiziedu"}));

app.get("/",function(request, response, next) {
  var id = request.session.useId;
  response.send("User ID is: " + id);
});

app.get("/:id",function(request, response, next) {
  var id = request.params.id;
  console.log('id: ' + id);
  request.session.useId = id;
  response.send("hello world!");
});

app.listen(1234, "localhost");