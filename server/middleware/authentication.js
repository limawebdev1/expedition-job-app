const authUtils = require('../utils/authUtils');
const {  AUTHENTICATION } = require('../utils/constants');
const Users = require('../models/users');

const requireAuthedJwt = (req, res, next) => {
  try {
    const token = req.headers[AUTHENTICATION];
    const decoded = authUtils.authorize(token);
    req.userId = decoded;
    return next();
  } catch (e) {
    return res.status(401).send({
      error: 'Valid JWT token required'
    });
  }
};

const getUserForAuthedJwt = async (req, res, next) => {
  return requireAuthedJwt(req, res, async () => {
    const {
      userId
    } = req;
    if (!userId) {
      return res.status(401).send({
        error: 'Valid JWT token required'
      });
    }
    const [user] = await Users.findUsers({
      id: userId
    });
    if (!user) {
      return res.status(404).send({
        error: 'User not found'
      });
    }
    req.user = user;
    return next();
  });
};

module.exports = {
  requireAuthedJwt,
  getUserForAuthedJwt,
};