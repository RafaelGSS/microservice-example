
exports.up = function (knex) {
  return knex.schema.createTable('orders', function (table) {
    table.integer('id').primary()
    table.integer('id_user').notNullable()
    table.text('description')
    table.boolean('approved').defaultTo(true)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
