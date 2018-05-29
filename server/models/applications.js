const uuid = require('uuid');
const { filterUndefinedProperties } = require('../utils/db');
const { db, TABLES } = require('../db');

const createApplication = async values => {
  const appData = Object.assign({ id: uuid() }, values);
  return await db(TABLES.USERS_JOB_APPS).insert(appData).returning('*');
};

const findApplication = async values => {
  return db(TABLES.USERS_JOB_APPS).select('*').where(values).first();
};

module.exports = {
  createApplication,
  findApplication
};