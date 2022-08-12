import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '@/styles';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>{children}</Router>
      </ThemeProvider>
    </React.Suspense>
  );
};
