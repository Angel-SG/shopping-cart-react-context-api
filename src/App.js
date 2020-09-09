import React from 'react';
import './App.css';
import Cart from './components/cart';
import ProductsList from "./components/products-list";
import 'bootstrap/dist/css/bootstrap.min.css';
import cartContext from './context/cart-context';


function App() {
  return (
    <div className="App">
    
        <Cart />
        
    
      <ProductsList />
    </div>
  );
}

export default App;
