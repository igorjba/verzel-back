import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      email: string
      name: string
      sub: string
      role: 'admin' | 'user'
    }
  }
}
