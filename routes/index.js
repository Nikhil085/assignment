var express = require('express');
var router = express.Router();
var userModel = require('./users')

router.get('/', function(req, res){
  res.render('index');
})

router.get('/reg', function(req, res){
  res.render('reg');
})

router.get('/login', function(req, res){
  res.render('login');
})




module.exports = router;
