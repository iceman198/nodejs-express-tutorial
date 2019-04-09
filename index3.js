var express = require('express');
var app = express();

var port = 8080;

app.get('/', function (req, res) {
    res.send(JSON.stringify(getMyObject()));
});

var server = app.listen(port, function () {

});

function getMyObject() {
    var myObj = {
        "header": {
            "text": "My Object 1",
            "meta": "Some other data here"
        },
        "body": "I would operate more like a server here",
        "status": "SUCCESS"
    };

    return myObj;
}