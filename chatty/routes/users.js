var express = require('express');
var router = express.Router();

//Not required. This came as a boilerplate code from ExpressJS Generator
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
