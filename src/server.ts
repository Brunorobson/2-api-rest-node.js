import fastify = require('fastify')
import crypto = require('crypto')
import database = require('./database')

const app = fastify()

app.get('/hello', async () => {
  const transactions = await database
    .knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transaction 1',
      amount: 100,
    })
    .returning('*')
  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
