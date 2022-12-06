import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
const AppService = lazy(() => import('./containers/index.tsx'));

function App() {
  return (
    <BrowserRouter>
      <AppService />
    </BrowserRouter>
  );
}

export default App;
