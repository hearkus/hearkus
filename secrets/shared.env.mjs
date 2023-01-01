export function death(message) {
  console.error(`❌ ${message}`);
  throw new Error(message);
}

export function parse(schema, env) {
  const result = schema.safeParse(env);
  if (!result.success) {
    death(`Invalid environment variables: ${result.error.message}`);
  }
  return result.data;
}

export function findEnv() {
  if (!process.env) {
    death('Environment variables were not provided.');
  }
  return process.env;
}
