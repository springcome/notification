var express = require('express');
var app = express();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "dark4862",
  database: "notification",
  connectLimit: 10,
  connectTimeout: 2000,
  canRetry: true,
  waitForConnections: true
});

var router = require('./router/router') (app, con);

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8001, function() {
  console.log("Express server has started on Port 3000");
});
