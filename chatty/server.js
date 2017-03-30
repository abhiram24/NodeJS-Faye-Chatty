'use strict';

var http       = require('http'),
    express    = require('express'),
    bodyParser = require ('body-parser'),
    faye       = require('faye');


var bayeux = new faye.NodeAdapter({
  mount:    '/chatty',
  timeout:  20
});


var app = express();
var server = http.createServer(app);

bayeux.attach(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static(__dirname + '/public'));

//app.post('/message', function(req, res) {
//  bayeux.getClient().publish('/channel', {text: req.body.message});
//  res.send(200);
//});

var port = process.env.port || 8099;
server.listen(port);
console.log('Chatty is up and listening on port : ' + port);
