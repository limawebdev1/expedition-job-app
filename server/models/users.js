const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const _ = require('lodash');

const authUtils = require('../utils/authUtils');
const { filterUndefinedProperties } = require('../utils/db');
const { db, TABLES } = require('../db');

const userColumns = ['id', 'email', 'first_name', 'last_name' ];

const findUsers = (query, select = userColumns) => {
  const filteredQuery = filterUndefinedProperties(query);
  if (!filteredQuery) {
    throw new Error('Must include a query');
  }
  return db(TABLES.USERS).select(select).where(filteredQuery);
};

const findUser = async (query, select = userColumns) => {
  const user = await findUsers(query, select);
  if (user.length > 1) {
    throw new Error('Query does not return unique row');
  }
  return user[0];
};

const hashPassword = password => bcrypt.hash(password, 10);

const comparePasswords = (candidatePassword, hash) => bcrypt.compare(candidatePassword, hash);

const findUserWithPassword = query => findUser(query, userColumns.concat('password'));

const createUser = async values => {
  const {  password } = values;
  const userData = Object.assign({  id: uuid() }, values);
  userData.password = await hashPassword(password);
  return await db(TABLES.USERS).insert(userData).returning(userColumns);
};

const jwtUserResponse = user => {
  return {
    token: authUtils.createToken(user),
    user: _.omit(user, 'password'),
  };
};

module.exports = {
  comparePasswords,
  createUser,
  findUser,
  findUserWithPassword,
  findUsers,
  jwtUserResponse
};