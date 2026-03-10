import fastify = require('fastify')
import { env } from './env'
import { transactionRoutes } from './routes/transaction'
import cookie from '@fastify/cookie'
import { checkSessionIdExists } from './middlewares/check-session-id-exists'

const app = fastify()

app.register(cookie)

app.addHook('preHandler', checkSessionIdExists)

app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
