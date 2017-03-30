var express = require('express');
var mysql      = require('mysql');
var router = express.Router();


router.get('/', function(req, res, next) {

  var roomID = req.query.id;
  
  //DB Connection settings, Hard coded for exercise. Need to be externalized
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'chatty'
  });

  connection.connect(); 
  connection.query("select pin from room where url = '" + roomID + "'" , function(err, rows, fields) {
      if (!err && !!rows[0]){
        console.log(rows[0].pin);
        res.render('chatti', { id: roomID, pin : rows[0].pin});
    }
      else{
        console.log('*** Some error ***');
        res.render('rooms');
    }
  connection.end();

});

});

module.exports = router;
