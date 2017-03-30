var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router()

var index = require('./routes/index');
var users = require('./routes/users');
var rooms = require('./routes/rooms');
var chatti = require('./routes/chatti');


var app = express();

//Chatty Config - Start

var http       = require('http');
var faye       = require('faye');

var bayeux = new faye.NodeAdapter({
  mount:    '/chatty',
  timeout:  20
});

var server = http.createServer(app);
bayeux.attach(server);

//Chatty Config - End

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/rooms',rooms);
app.use('/chatti',chatti);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// ******

var port = process.env.port || 8099;
server.listen(port);
console.log('Chatty is up and listening on port : ' + port);

// ********
module.exports = app;
//module.exports = router;
