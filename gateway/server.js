require('dotenv').config()

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

const proxy = require('redbird')({ port })

// User Ms redirect
proxy.register(host + '/user', "localhost:3000")


// Order Ms redirect
proxy.register(host + '/order', "localhost:3535")
