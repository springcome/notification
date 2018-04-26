module.exports = function(app, con) {
  app.get('/', function(req, res) {
    con.query("select * from noti", function(err, result, fileds) {
      res.render('index', {
        user_list: result
      });
    })
  });
}
