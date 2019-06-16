require('dotenv').config()

module.exports = {
  client: 'pg',
    connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './database/migrations',
    tableName: 'database_migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
}
