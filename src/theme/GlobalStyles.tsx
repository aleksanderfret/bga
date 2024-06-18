import MuiGlobalStyles from '@mui/material/GlobalStyles';
import React from 'react';

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={() => ({
      'html,body': {
        padding: 0,
        margin: 0,
        maxWidth: '100vw',
        overflowX: 'hidden',
        minHeight: '100vh',
      },
    })}
  />
);
