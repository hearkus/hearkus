/*[object Object]
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
import {
  createContext,
  buildServer,
  createRouterInner,
  buildRouter,
} from '@hearkus/trpc-router';
import { createNextApiHandler } from '@trpc/server/adapters/next';

const client = await buildServer();

const router = await buildRouter(
  createRouterInner({
    apply: client.router,
    procedure: client.procedure,
  }),
);

export default createNextApiHandler({
  router,
  createContext,
});
