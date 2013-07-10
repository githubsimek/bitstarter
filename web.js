var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var display = new Buffer(10240);
display = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  //response.send('Hello World!');
  response.send(display.toString());

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
