const db = require('knex')(require('../knexfile'))

module.exports = (fastify, opts, next) => {
  fastify.get('/', (request, reply) => {
    reply.send({ dialect: "Order", error: false })
  })
  .get('/orders', (request, reply) => {
    return db('orders').then(orders => reply.send(orders))
  })
  .get('/:id/orders', (request, reply) => {
    return db('orders').where({ id: request.params.id }).then(orders => reply.send(orders))
  })
  .get('/user/:id/orders', (request, reply) => {
    return db('orders').where({ id_user: request.params.id }).then(orders => reply.send(orders))
  })
  next()
}