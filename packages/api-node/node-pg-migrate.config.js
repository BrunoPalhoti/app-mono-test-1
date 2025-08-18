require('dotenv').config()

module.exports = {
  databaseUrl: 'postgres://postgres:postgres@db:5432/postgres',
  migrationsDir: 'migrations',
  direction: 'up',
  count: Infinity
}
