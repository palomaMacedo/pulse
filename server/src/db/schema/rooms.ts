import { pgTable,text, timestamp,  uuid } from "drizzle-orm/pg-core";
import { create } from "node:domain";

export const rooms = pgTable('rooms', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createdAt: timestamp().defaultNow().notNull(),
});