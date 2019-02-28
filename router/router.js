var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.js');
var connection = mysql.createConnection(dbconfig);
var crypto = require('../crypto/crypto.js');

connection.connect(function(error) {
  if (error){
    console.error('Database connection error : ' + error);
  } else {
    console.log('Success connection!');
  }
});

module.exports = function(app, fs, session) {
  var user_router = require('./user_router.js') (app, fs, session, connection, crypto);

  app.get('/', function(request, response) {
    if (request.session.is_login) {
      response.render('index', {
        user_email: request.session.email
      });
    } else {
      response.redirect('/sign_in');
    }
  });

  app.get('/lotto', function(request, response) {
    response.render('./lotto/main', {
      title: 'Lotto'
    });
  });

  app.get('/list', function(request, response) {
    var sql = 'select * from users';
    connection.query(sql, function(error, result, fileds) {
      if (error) {
        response.status(500);
        response.json({success: false, message: result});
      } else {
        response.json({success: true, data: result});
      }
    });
  });
}
