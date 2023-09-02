// App.js
import React from 'react';
import { DataProvider } from './context/DataContext';
import Bulletin from './components/Bulletin.component';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Bulletin />
      </div>
    </DataProvider>
  );
}

export default App;
