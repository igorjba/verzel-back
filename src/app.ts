import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifyMultipart from '@fastify/multipart'
import fastify from 'fastify'
import { usersRoutes } from '../src/routes/usersRoutes'
import { env } from './env'
import { vehiclesRoutes } from './routes/vehiclesRoutes'


export const app = fastify()

app.register(fastifyMultipart, {
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
  attachFieldsToBody: true,
})

app.register(cors, {
  origin: true
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '24h',
  },
})

app.register(usersRoutes)
app.register(vehiclesRoutes)

