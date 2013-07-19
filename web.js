var express = require('express');
var fs = require('fs');
var buf = require('buffer');


var app = express.createServer(express.logger());


app.configure(function() {
	app.use(express.static(__dirname + '/statics') );
});

app.get('/', function(request, response) {
	var c = fs.readFileSync('index.html','utf8');
	response.send( c );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
