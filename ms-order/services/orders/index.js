module.exports = (fastify, opts, next) => {
    fastify.get('/', (request, reply) => {
      reply.send({ dialect: "Order2", error: false })
    })
    next()
  }