import fastify = require('fastify')
import { transactionRoutes } from './routes/transaction'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)

app.register(transactionRoutes, {
  prefix: 'transactions',
})
