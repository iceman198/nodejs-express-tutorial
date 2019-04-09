var express = require('express');
var app = express();

var port = 8080;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// We can mimic directories using:
app.get('/FakeDir', function (req, res) {
    res.send('I can use the get/ to mimic a directory');
});

// Or we could use a route to accomplish the same thing
app.route('/MyRoute').get(function(req,res) {
    res.send("Now I'm in the route.");
});

var server = app.listen(port, function () {

});