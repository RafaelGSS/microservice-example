const db = require('knex')(require('../knexfile'))

module.exports = (fastify, opts, next) => {
  fastify.get('/', (request, reply) => {
    reply.send({ dialect: "User", error: false })
  })
  .get('/users', (request, reply) => {
    return db('users').then(users => reply.send(users))
  })
  .get('/:id', (request, reply) => {
    return db('users').where({ id: request.params.id }).then(users => reply.send(users))
  })
  next()
}