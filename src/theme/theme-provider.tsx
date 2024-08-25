'use client';
import { CssBaseline } from '@mui/material';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ReactNode } from 'react';

import theme from '@/theme/theme';

import { GlobalStyles } from './global-styles';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  return (
    <AppRouterCacheProvider>
      <InitColorSchemeScript />
      <CssVarsProvider defaultMode="system" theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
