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
