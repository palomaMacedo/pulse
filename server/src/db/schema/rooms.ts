import { pgTable, text,timestamp, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { questions } from './questions.ts'

export const rooms = pgTable('rooms', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createdAt: timestamp().defaultNow().notNull(),
})

export const roomsRelations = relations(rooms, ({ many }) => ({
  questions: many(questions),
}))