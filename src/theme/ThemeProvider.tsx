'use client';
import { CssBaseline } from '@mui/material';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript,
} from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ReactNode } from 'react';

import theme from '@/theme/theme';

import { GlobalStyles } from './GlobalStyles';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  return (
    <AppRouterCacheProvider>
      {getInitColorSchemeScript()}
      <CssVarsProvider defaultMode="system" theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
