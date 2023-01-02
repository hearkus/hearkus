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

import { createTRPCNext } from '@trpc/next';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { type HearkusRouter, transformer } from '@hearkus/trpc-api';

function getBaseUrl() {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const client = createTRPCNext<HearkusRouter>({
  config: () => ({
    transformer,
    links: [
      loggerLink({
        enabled: opts =>
          process.env.NODE_ENV === 'development' ||
          (opts.direction === 'down' && opts.result instanceof Error),
      }),
      httpBatchLink({
        url: `${getBaseUrl()}/api/trpc`,
      }),
    ],
    ssr: false,
  }),
});

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<HearkusRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<HearkusRouter>;
