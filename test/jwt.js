const header = {
  "typ": "JWT",
  "alg": "HS256"
};

const encodedPayload = new Buffer(JSON.stringify(header)).toString('base64').replace('=', '');
console.log('payload : ', encodedPayload);
