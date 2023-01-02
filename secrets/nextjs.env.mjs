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

import { findEnv, parse } from './shared.env.mjs';

const NextEnvSchema = z =>
  z.object({
    // NODE_ENV: z.enum(['development', 'test', 'production']),
    API_ENDPOINT: z.string(),
    NEXT_PORT: z.string(),
  });

const env = findEnv();

export default z => parse(NextEnvSchema(z), env);
