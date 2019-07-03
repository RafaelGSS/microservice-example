const db = require('knex')(require('../knexfile'))

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
            description: { type: 'string' },
          },
          required: ['name', 'description']
        }
      }
    }, function (request, reply) {
      const data = {
        name: request.body.name,
        description: request.body.description,
      }
      db('users').insert(data)
        .then(u => {
          const queue = 'users_created'

          this.amqpChannel.assertQueue(queue, {
            durable: false
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