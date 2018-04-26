var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "dark4862",
  database: "notification"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connection!");

  con.query("select * from noti", function(err, result, fields) {
    if (err) throw err;
    console.log(result[0].noti_content);
  });
});
