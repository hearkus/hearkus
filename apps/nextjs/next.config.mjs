/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
};

/**
 * Ensure that the given environment variables are valid before allowing
 * the compilation to continue.
 * You can skip this step by providing a `SKIP_ENV_VALIDATION=true`
 * environment variable.
 * This is useful for simple CI/CD setups where you don't want to
 * provide the environment variables.
 */
if (!process.env.SKIP_ENV_VALIDATION) {
  const { z } = await import('zod');
  const env = await import('../../secrets/nextjs.env.mjs');
  config.env = env.default(z);
}

export default config;
