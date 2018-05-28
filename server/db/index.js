const knexConfig = require('../knexfile');
const db = require('knex')(knexConfig[process.env.NODE_ENV]);

const TABLES = {
  USERS: 'users',
  ADMINS: 'admins',
  USERS_JOB_APPS: 'users_job_apps'
};

module.exports = {
  db,
  TABLES
};