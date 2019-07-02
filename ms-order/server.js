require('dotenv').config()

const fastify = require('fastify')({
  logger: true
})
const AutoLoad = require('fastify-autoload')

const path = require('path')

fastify.register(require('fastify-amqp'), {
  host: 'rabbitmq'
})

// Cron for create order
// TODO: Continue it
const queue = 'users_created'
fastify.amqpChannel.assertQueue(queue)
fastify.amqpChannel.consume(queue, function (msg) {
  if (msg !== null) {
    console.log('%s Received: %s', new Date(), msg.content.toString())
    fastify.inject({
      method: 'POST',
      url: '/',
      payload: ''
    })
    ch.ack(msg)
  }
})

fastify.register(AutoLoad, {
  dir: path.join(__dirname, 'services')
})

const port = process.env.PORT || 3000
fastify.listen(port, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
