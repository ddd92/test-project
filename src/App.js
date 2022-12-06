import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'theme/index';
const AppService = lazy(() => import('./containers/index.tsx'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <AppService />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
