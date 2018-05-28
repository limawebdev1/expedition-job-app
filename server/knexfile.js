module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'expedition-app-dev',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};