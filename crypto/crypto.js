var crypto = require('crypto');

exports.encryption = function(salt, user_pwd) {
  return crypto.createHash("sha512").update(user_pwd + salt).digest("hex");
};

exports.salt = function() {
  return Math.round((new Date().valueOf() * Math.random()));
};
