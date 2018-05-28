exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users_job_apps', function (table) {
      table.uuid('id').primary();
      table.uuid('user_id').notNullable().references('users.id');
      table.boolean('variant_A');
      table.boolean('variant_B');
      table.integer('yrs_total');
      table.integer('yrs_hvac');
      table.integer('yrs_mechanical');
      table.integer('yrs_refrigeration');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users_job_apps')
  ]);
};