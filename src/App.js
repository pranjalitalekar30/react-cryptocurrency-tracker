import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Coins = lazy(() => import('./Components/Coins'));
const CoinsInfo = lazy(() => import('./Components/CoinsInfo'));

function App() {
  return (
    // render UI from all the components
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<React.Suspense fallback={<>Loading...</>}>
          <Coins />
        </React.Suspense>} exact />
        <Route path="/coins/:id" element={<React.Suspense fallback={<>Loading...</>}>
          <CoinsInfo />
        </React.Suspense>} />
      </Routes>

    </BrowserRouter >
  );
}

export default App;
