module.exports = {
  client: 'pg',
    connection: {
    host: 'localhost',
    database: 'orders',
    user: 'root',
    password: 'toor'
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
