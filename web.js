var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
/*
app.get('/', function(request, response) {
  response.send('Hello World2!');
});
*/

/*
app.get('/', function(request, response) {
  fs.readFileSync('./index.html', function (err, data) {
    if (err) throw err;
    response.send(data.toString('utf-8'));
  });
});
*/

  fs.readFileSync('./index.html', function (err, data) {
    if (err) throw err;
    console.log(data);
  });




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
