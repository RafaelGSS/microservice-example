require('dotenv').config()

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

const proxy = require('redbird')({ port })

// User Ms redirect
proxy.register(host + '/root/users', "ms-user-api:8080/root")
proxy.register(host + '/users', "ms-user-api:8080/")


// Order Ms redirect
proxy.register(host + '/root/orders', "ms-order-api:8080/root")
proxy.register(host + '/orders', "ms-order-api:8080/")
