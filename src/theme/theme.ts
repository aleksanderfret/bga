'use client';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = extendTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  spacing: 4,
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1063b1',
        },
        secondary: {
          main: '#4a99de',
        },
        error: {
          main: '#e40037',
        },
        warning: {
          main: '#ffb000',
        },
        info: {
          main: '#00b0ff',
        },
        success: {
          main: '#00980c',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#1063b1',
        },
        secondary: {
          main: '#4a99de',
        },
        error: {
          main: '#e40037',
        },
        warning: {
          main: '#ffb000',
        },
        info: {
          main: '#00b0ff',
        },
        success: {
          main: '#00980c',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  mixins: {
    appBar: {
      mobile: {
        height: 56,
      },
      desktop: {
        height: 64,
      },
    },
    sidebar: {
      collapsed: {
        width: 56,
      },
      expanded: {
        width: 240,
      },
    },
    toolbar: {
      minHeight: 56,
      '@media (min-width: 600px)': {
        minHeight: 56,
      },
      '@media (min-width: 900px)': {
        minHeight: 64,
      },
    },
  },
});

export default theme;
