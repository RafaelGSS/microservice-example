require('dotenv').config()

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

const proxy = require('redbird')({ port })

// User Ms redirect
proxy.register(host + '/user', "ms-user-api:8080/")


// Order Ms redirect
proxy.register(host + '/order', "ms-order-api:8080/")
