
exports.up = function (knex) {
  return knex.schema.createTable('orders', function (table) {
    table.uuid('id').primary()
    table.uuid('id_user').notNullable()
    table.text('description')
    table.boolean('approved').defaultTo(true)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
