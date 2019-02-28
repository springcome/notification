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
  // 계정생성 및 로그인 Router
  require('./user_router.js') (app, fs, session, connection, crypto);

  app.get('/', function(request, response) {
    if (request.session.is_login) {
      response.render('index', {
        user_email: request.session.email
      });
    } else {
      response.redirect('/sign_in');
    }
  });
}
