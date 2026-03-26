import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { rooms } from './rooms.ts'

export const questions = pgTable('questions', {
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid().references(() => rooms.id, { onDelete: 'cascade' }).notNull(),
  question: text().notNull(),
  description: text(),
  createdAt: timestamp().defaultNow().notNull(),
})

export const questionsRelations = relations(questions, ({ one }) => ({
  room: one(rooms, {
    fields: [questions.roomId],
    references: [rooms.id],
  }),
}))