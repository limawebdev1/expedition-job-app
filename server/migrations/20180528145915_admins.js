exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('admins', function (table) {
      table.uuid('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable().defaultsTo('$2a$10$IunmJOpW0iUgUmC5p9egiuUwCAAksES/6ZxZbwZdMQjuq0EZSzGgq');
      table.boolean('is_active').defaultTo(true);
      table.timestamp('created_at').defaultsTo(knex.fn.now());
      table.timestamp('updated_at').defaultsTo(knex.fn.now());
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('admins')
  ]);
};