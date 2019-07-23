var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// sql

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'',//password of your mysql db
  database:'ghatar'
});

connection.connect(function(err){
  (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
});

// responsing

app.get('/', function(req, res) {
  connection.query('SELECT * FROM train', (err, data) => {
    (err)?res.send(err):res.json({data});
  });
});

app.post('/reg',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  connection.query('INSERT INTO person VALUE()', (err, data) => {
  });
  connection.query('SELECT * FROM train', (err, data) => {
  });
  res.end("ok");
});

app.listen(3001);

module.exports = app;

// select * from registered
// select * from employee where( company_id =  )