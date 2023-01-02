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

import React, { ReactElement, useEffect } from 'react';

export type Theme = 'light' | 'dark';

type CurrentTheme = {
  current: Theme;
  switchHandler: () => void;
};

export const ThemeContext = React.createContext<CurrentTheme>({
  current: 'dark',
  switchHandler: () => {},
});

interface ThemeContextProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(props: ThemeContextProps): ReactElement {
  const [theme, setTheme] = React.useState<Theme>('dark');
  useEffect(() => makeThemeHandling());
  function makeTheme(value: Theme) {
    setTheme(value);
    localStorage.setItem('theme', value);
  }
  function makeThemeHandling() {
    const local = localStorage.getItem('theme');
    const media = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = local || (media ? 'dark' : 'light');
    if (!local) {
      makeTheme(theme as Theme);
    }
    document.documentElement.setAttribute('data-theme', theme);
  }
  function switchHandler() {
    const inverse = theme === 'dark' ? 'light' : 'dark';
    makeTheme(inverse);
  }
  return (
    <ThemeContext.Provider value={{ current: theme, switchHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
