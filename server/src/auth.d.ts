import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FasfifyJWT {
    user: {
      sub: string
      name: string
      avatarUrl: string
    }
  }
}