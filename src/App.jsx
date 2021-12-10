import React from 'react';
import Home from './page/Home';
import MarvelProvider from './context/MarvelProvider';

import './App.css';

function App() {
  return (
    <MarvelProvider>
      <Home />
    </MarvelProvider>
  );
}

export default App;
