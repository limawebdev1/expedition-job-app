const jwt = require('jwt-simple');

const secret = process.env.JWT_SECRET;

const authorize = token => jwt.decode(token, secret);
const createToken = user => jwt.encode(user.id, secret);

module.exports = { authorize, createToken };