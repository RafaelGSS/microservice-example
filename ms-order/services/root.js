module.exports = (fastify, opts, next) => {
  fastify.get('/', (request, reply) => {
    reply.send({ dialect: "Order", error: false })
  })
  next()
}