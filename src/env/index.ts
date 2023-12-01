import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  JWT_SECRET: z.string(),
  SUPER_TOKEN: z.string(),
  PORT: z.coerce.number().default(3333),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.coerce.number(),
  EMAIL_AUTH_USER: z.string(),
  EMAIL_AUTH_PASS: z.string(),
  URL_RECOVERY_PASSWORD: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('❌ Invalid environment variables.')
}

export const env = _env.data
