var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.js');
var connection = mysql.createConnection(dbconfig);

connection.connect(function(error) {
  if (error){
    console.error('Database connection error : ' + error);
  } else {
    console.log('Success connection!');
  }
});

module.exports = function(app, fs) {
  app.get('/', function(request, response) {
    response.render('index', {
      title: 'Lama-API'
    });
  });

  /*****************************************
  * User
  *****************************************/
  // 계정생성 화면으로 이동
  app.get('/sign_up', function(request, response) {
    response.render('./users/sign_up');
  });

  // 이메일 중복 체크
  app.post('/sign_up/check_email', function(request, response) {
    var user_email = request.body.user_email;

    var sql = "select count(*) as cnt from users where user_email = " + mysql.escape(user_email);
    connection.query(sql, function(error, result) {
      if (error) throw error;
      if (result.cnt == 0) {
        response.json({
          success: true,
          message: ''
        });
      } else {
        response.json({
          success: false,
          message: '이미 사용중인 이메일입니다.'
        });
      }
    });
  });

  // 사용자 입력 정보 저장 (생성계정 저장)
  app.post('/sign_up', function(request, response) {
    var user_email = request.body.user_email;
    var user_pwd = request.body.user_pwd;
    var user_pwd_confirm = request.body.user_pwd_confirm;

    // 사용자 저장
    var sql = "insert into users (user_email, user_pwd) values ?";
    var values = [[user_email, user_pwd]];
    connection.query(sql, [values], function(error, result) {
      if (error) throw error;
      response.redirect('/');
    });
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
