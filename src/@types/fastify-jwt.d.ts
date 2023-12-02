import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      id: number;
      name: string;
      email: string;
      role: 'USER' | 'ADMIN';
    }
  }
}
