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

import { inferAsyncReturnType } from '@trpc/server';

/**
 * All properties required to build a tRPC context.
 */
interface CreateContextOptions {}

/**
 * Creates an inner context object from the parameters passed in {@link opts}.
 * You may use this for testing purposes; operations which you don't need a lot
 * of validation.
 * @param opts
 */
export async function createContextInner(opts: CreateContextOptions) {
  return {
    ...opts,
  };
}

/**
 * The actual context generation feature that is used by the server. It will make
 * sure that the context is valid before returning it.
 * @param opts
 */
export async function createContext(opts: CreateContextOptions) {
  const inner = await createContextInner(opts);
  return {
    ...inner,
  };
}

/**
 * An inferred context type from the {@link createContext} function.
 */
export type HearkusContext = inferAsyncReturnType<typeof createContext>;
