var express = require('express');
var app = express();

var port = 8080;

var myHtml = '<html><body><h1>Hellow World!</h1><p>I can return html.</p></body></html>';

app.get('/', function (req, res) {
    res.send(myHtml);
});

var server = app.listen(port, function () {

});