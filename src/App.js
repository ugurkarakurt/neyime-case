// App.js
import React from 'react';
import { DataProvider } from './context/DataContext';
import Bulletin from './components/bulletin/Bulletin.component';
import Cart from './components/cart/Cart.component';

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <Bulletin />
        <Cart />
      </div>
    </DataProvider>
  );
}

export default App;
