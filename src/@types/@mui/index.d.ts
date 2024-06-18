import { CSSProperties } from 'react';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    appBar: {
      mobile: CSSProperties;
      desktop: CSSProperties;
    };
    sidebar: {
      collapsed: CSSProperties;
      expanded: CSSProperties;
    };
  }
}
