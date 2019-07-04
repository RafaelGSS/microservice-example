const db = require('knex')(require('../knexfile'))
const uuid = require('uuid/v4')

module.exports = (fastify, opts, next) => {
  fastify.get('/root/', (request, reply) => {
    reply.send({ dialect: "User", error: false })
  })
    .get('/', (request, reply) => {
      return db('users').then(users => reply.send(users))
    })
    .get('/:id', (request, reply) => {
      return db('users').where({ id: request.params.id }).then(users => reply.send(users))
    })
    // On create user, post message
    .post('/', {
      schema: {
        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            email: { type: 'string' },
          },
          required: ['name', 'email']
        }
      }
    }, function (request, reply) {
      const data = {
        id: uuid(),
        name: request.body.name,
        email: request.body.email,
      }
      db('users').insert(data)
        .then(u => {
          const queue = 'users_created'

          this.amqpChannel.assertQueue(queue, {
            durable: true
          })

          this.amqpChannel.sendToQueue(queue, Buffer.from(JSON.stringify(data)))
          reply.send(' [V] Sended ' + JSON.stringify(data))
        })
        .catch(e => {
          reply.send(' [x] Error ' + e)
        })
    })
  next()
}