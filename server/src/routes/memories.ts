import {prisma} from "../lib/prisma";
import {FastifyInstance} from "fastify";
export async function getUsers(app: FastifyInstance) {

  app.get('/', async () => {
    const users = await prisma.user.findMany();
    return users;
  });
}