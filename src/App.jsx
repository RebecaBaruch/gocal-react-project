import { useState } from 'react';
import './App.css';

import GlobalStyles from './global/GlobalStyles';
import RoutesManager from './routes';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <RoutesManager />
    </div>
  )
}

export default App;
