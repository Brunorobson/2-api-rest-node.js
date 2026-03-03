import fastify = require('fastify')
import crypto = require('crypto')
import database = require('./database')
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await database.knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
