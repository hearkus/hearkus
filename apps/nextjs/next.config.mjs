/*
 * Hearkus, a free and open-source platform for discovering and sharing
 * feedback on music.
 *
 * Copyright (c) 2022-2023 Pedro Henrique
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ['@hearkus/trpc-api'],
  typescript: { ignoreBuildErrors: !!process.env.CI },
  webpack: config => {
    config.experiments = { topLevelAwait: true, layers: true };
    return config;
  },
};

/**
 * Ensure that the given environment variables are valid before allowing
 * the compilation to continue.
 * You can skip this step by providing a `SKIP_ENV_VALIDATION=true`
 * environment variable.
 * This is useful for simple CI/CD setups where you don't want to
 * provide the environment variables.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/environment.mjs'));

export default config;
