var express = require('express');
var router = express.Router();
var locals = require('../locals/locals');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', locals);
});

module.exports = router;