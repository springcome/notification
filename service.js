var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var session = require('express-session');
var secret = require('./crypto/secret.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(session({
  secret: '##@@SPRING_SIGN@@##',
  resave: false,
  saveUninitialized: true
}));

var router = require('./router/router') (app, fs, session);
var server = app.listen(3000, function() {
  console.log("Express server has started on Port 3000");
});
