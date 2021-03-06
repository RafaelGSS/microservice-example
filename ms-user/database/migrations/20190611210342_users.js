
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('id').unique()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.boolean('admin').defaultTo(false)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
