import { findEnv, parse } from './shared.env.mjs';

const BackendEnvSchema = (z) =>
  z.object({
    // NODE_ENV: z.enum(['development', 'test', 'production']),
    BACKEND_PORT: z.string(),
    DATABASE_URL: z.string(),
  });

const env = findEnv();

export default (z) => parse(BackendEnvSchema(z), env);
