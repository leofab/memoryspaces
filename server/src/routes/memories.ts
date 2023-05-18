import {prisma} from "../lib/prisma";
import {FastifyInstance} from "fastify";
import z from "zod";
export async function memoriesRoutes(app: FastifyInstance) {

  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return memories.map((memory)=>{
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...'),
      }
    });
  });

  app.get('/memories/:id', async (request) => {
    const paramSchema = z.object({
      id: z.string().uuid(),
    });
    const {id} = paramSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
  });
  app.post('/memories', async () => {
    const users = await prisma.user.findMany();
    return users;
  });
  app.put('/memories/:id', async () => {
    const users = await prisma.user.findMany();
    return users;
  });
  app.delete('/memories/:id', async () => {
    const users = await prisma.user.findMany();
    return users;
  });
}