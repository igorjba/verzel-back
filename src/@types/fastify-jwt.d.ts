import '@fastify/jwt'
import { Role } from './src/enums/Role'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      id: string;
      name: string;
      email: string;
      role: Role;
    }
  }
}
