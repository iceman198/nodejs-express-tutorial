var express = require('express');
var app = express();

var port = 8080;

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index5.htm" );
 })

var server = app.listen(port, function () {

});