var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

const crypto = require('crypto');
const secret = 'h73rf0jFiap58PmH0l8LbWA6744D7kNF2qobGPb9z6E1';

router.get('/', function(req, res, next) {

  var base_url = req.protocol + '://' + req.get('host') + req.originalUrl + 'chatty?id=';
  var milliseconds = (new Date).getTime();
  var token = crypto.randomBytes(64).toString('hex');
  var otp = Math.floor(Math.random() * (99999 - 11111) + 11111);

  //Create unique hash.
  const hash = crypto.createHmac('sha256', secret)
                     .update(milliseconds + token + otp)
                     .digest('hex');


  var post = {url: hash, pin:otp};
  
  //DB Connection settings, Hard coded for exercise. Need to be externalized
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'chatty'
  });

  connection.connect();
  connection.query('INSERT INTO room SET ?', post, function(err, rows, fields) {
      if (!err)
        console.log('Success from Routes !!!!');
      else
        console.log('Some error');
  connection.end();

  });

res.json(post);

});

module.exports = router;
