import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifyMultipart from '@fastify/multipart'
import fastify from 'fastify'
import { usersRoutes } from '../src/routes/usersRoutes'
import { env } from './env'


export const app = fastify()

app.register(fastifyMultipart)

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

