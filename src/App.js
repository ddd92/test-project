import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const AppService = lazy(() => import('./containers/index.tsx'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppService />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
