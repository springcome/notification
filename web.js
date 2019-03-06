// var express = require('express');
// var app = express();
// var fs = require('fs');
// var bodyParser = require('body-parser');
// var session = require('express-session');
// var secret = require('./crypto/secret.js');
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname));
// app.set('views', __dirname + '/view');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);
// app.use(session({
//   secret: secret.secret,
//   resave: false,
//   saveUninitialized: true
// }));
//
// var router = require('./router/router') (app, fs, session);
// var server = app.listen(8001, function() {
//   console.log("Express server has started on Port 3000");
// });


var http=require('http');

var server=http.createServer(function(req,res){
    res.end('test');
});

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(8001);
