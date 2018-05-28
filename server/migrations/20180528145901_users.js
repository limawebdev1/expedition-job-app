exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.uuid('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.boolean('is_active').defaultTo(true);
      table.timestamp('created_at').defaultsTo(knex.fn.now());
      table.timestamp('updated_at').defaultsTo(knex.fn.now());
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};