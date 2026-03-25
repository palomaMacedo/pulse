import { fastify } from 'fastify'
import {sql} from './db/connection.ts'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import cors from '@fastify/cors'
import { env } from './env.ts'
import { get } from 'node:http'
import { getRoomsRoute } from './http/routes/get-rooms.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(cors, {
  origin: 'http://localhost:5173',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.get('/health', () => {
  return 'OK'
})
app.register(getRoomsRoute)
app.listen({ port: env.PORT }).then(() => {

})