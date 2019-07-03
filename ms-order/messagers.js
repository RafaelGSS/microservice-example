module.exports = (fastify, opts, next) => {
  const queue = 'users_created'

  fastify.amqpChannel.assertQueue(queue)
  fastify.amqpChannel.consume(queue, function (msg) {
    if (msg !== null) {
      console.log('%s Received: %s', new Date(), msg.content.toString())
      // fastify.inject({
      //   method: 'POST',
      //   url: '/',
      //   payload: ''
      fastify.amqpChannel.ack(msg)
    }
  })
  next()
}