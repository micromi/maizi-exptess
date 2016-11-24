var express = require("express");
var app = express();

// app.use(express.static(__dirname + '/public'));

app.get("/", function(request, response, next) {
  console.log(1);
  // next();
  next("route");
}, function(request, response, next) {
  console.log(2);
  next("route");
});

app.get("/", function(request, response, next) {
  console.log(3);
  next();
}, function(request, response, next) {
  console.log(4);
  response.send("hello world!\n");
});

// 11234567890
app.get(/^\/mobile\/1\d{10}$/, function(request, response, next) {
  console.log(5);
  response.send("This is a mobile phone number!\n");
});
/*app.get("/list/:listname", function(request, response, next) {
  console.log(6);
  var listname = request.params.listname;
  response.send("This is " + listname);
});
app.get("/list/:listname/:id", function(request, response, next) {
  console.log(7);
  var listname = request.params.listname,
      id = request.params.id;
  response.send("This is item " + id + " of " +listname);
});
*/
app.param("listname", function(request, response, next, list_name) {
  console.log("params");
  console.log(list_name);
  // do  some checking
  request.list = ["item0", "item1", "item2"];
  next();
});

app.get("/list/:listname", function(request, response, next) {
  console.log(6);
  // var listname = request.params.listname;
  // response.send("This is " + listname);
  response.send('list:\n' + request.list.join(' - '));
});

app.get("/list/:listname/:id", function(request, response, next) {
  console.log(7);
  var listname = request.params.listname,
      id = request.params.id;
  // response.send("This is item " + id + " of " +listname);
  response.send(request.list[id]);
});


app.listen(1234, "localhost");