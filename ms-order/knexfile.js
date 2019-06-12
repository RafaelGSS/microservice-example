require('dotenv').config()

module.exports = {
  client: 'mysql',
    connection: {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'toor'
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
