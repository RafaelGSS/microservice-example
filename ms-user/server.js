require('dotenv').config()

const fastify = require('fastify')({
  logger: true
})
const AutoLoad = require('fastify-autoload')

const path = require('path')

fastify.register(require('fastify-amqp'), {
  host: 'rabbitmq'
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
