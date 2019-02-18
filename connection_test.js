var mysql = require('mysql');

var con = mysql.createConnection({
  host: "118.219.232.12",
  port: 3306,
  user: "deviationmysql",
  password: "dark4862!",
  database: "deviationmysql",
  connectLimit: 10,
  connectTimeout: 2000,
  canRetry: true,
  waitForConnections: true
});

con.connect(function(err) {
  if (err) throw "Connection error : " + err;
  console.log("Connection!");

  con.query("select * from users", function(err, result, fields) {
    if (err) {
      response.status(500);
      response.json({success: false, message: result});
    } else {
      response.json({success: true, data: result});
    }
  });
});
