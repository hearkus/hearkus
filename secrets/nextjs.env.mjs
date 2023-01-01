import { findEnv, parse } from './shared.env.mjs';

const NextEnvSchema = (z) =>
  z.object({
    // NODE_ENV: z.enum(['development', 'test', 'production']),
    API_ENDPOINT: z.string(),
    NEXT_PORT: z.string(),
  });

const env = findEnv();

export default (z) => parse(NextEnvSchema(z), env);
