var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//json
//urlencoded

app.use(cookieParser());
// app.use(express.static(__dirname + '/public'));

// app.get("/", function(request, response, next) {
//   console.log(JSON.stringify(request.query));
//   console.log(request.query.id);
// });

app.post("/test", function(request, response, next) {
  // console.log(request.body);
  // console.log(request.cookies);
  console.log(request.get("content-type"));
});



app.listen(1234, "localhost");