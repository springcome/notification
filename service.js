/* ===============================================
LOAD THE DEPENDENCIES
=============================================== */
var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname));

var router = require('./router/router') (app, fs);

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
  console.log("Express server has started on Port 3000");
});
