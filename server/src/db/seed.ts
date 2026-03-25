import {reset, seed} from 'drizzle-seed';
import {db, sql } from './connection.ts';
import {schema} from './schema/index.ts';
import { rooms } from './schema/rooms.ts';
import { desc, name } from 'drizzle-orm';

await seed(db, schema).refine((f) => ({
  rooms: {
    count: 20,
    columns: {
      name: f.companyName(),
      description: f.loremIpsum(),
    },
  },
}));


console.log('Database has been reset and seeded successfully.');