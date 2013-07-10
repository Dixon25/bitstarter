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
    var data = fs.readFileSync('./index.html');
    response.send(data.toString());
});
*/

app.get('/', function(request, response) {
var data1;
    fs.readFileSync('./index.html', function(err, data){
	if (err) throw err;
	data1 = data;
    });
response.send(data1.toString());

});




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
