import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import { count, eq, desc } from 'drizzle-orm'
import { schema } from "../../db/schema/index.ts"
import { db } from "../../db/connection.ts"

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async () => {
    const results = await db
      .select({
        id: schema.rooms.id,
        name: schema.rooms.name,
        createdAt: schema.rooms.createdAt,
        questionsCount: count(schema.questions.id).as('questionsCount'),
      })
      .from(schema.rooms)
      .leftJoin(schema.questions, eq(schema.questions.roomId, schema.rooms.id))
      .groupBy(
        schema.rooms.id,
        schema.rooms.name,
        schema.rooms.createdAt
      )
      .orderBy(desc(schema.rooms.createdAt))

    return results
  })
}