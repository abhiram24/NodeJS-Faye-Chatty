var express = require('express');
var router = express.Router();

const crypto = require('crypto');
const base_url = 'localhost:8000/chatty/';

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chatty'
});

connection.connect();

const secret = 'h73rf0jFiap58PmH0l8LbWA6744D7kNF2qobGPb9z6E1';
var milliseconds = (new Date).getTime();
var token = crypto.randomBytes(64).toString('hex');
const hash = crypto.createHmac('sha256', secret)
                   .update(milliseconds + token)
                   .digest('hex');



var otp = Math.floor(Math.random() * (99999 - 11111) + 11111);

console.log(hash);
console.log(otp);

var post = {url: base_url + hash, pin:otp};

connection.query('INSERT INTO room SET ?', post, function(err, rows, fields) {
  if (!err)
    console.log('Success');
  else
    console.log('Some error');
});

connection.end();