import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'


async function main() {
  await reset(db, schema)

  await seed(db, schema)
    .refine((f) => ({
      rooms: {
        count:5,
        columns: {
          name: f.companyName(),
          description: f.loremIpsum(),
        },
        with: {
           questions: [
        {
          count: 20,
          weight: 1,
        },
      ],
        },
      },
    }))


  await sql.end()
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})