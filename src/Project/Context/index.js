import React, { createContext, useState } from 'react';

import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   setCart((prevCart) => [...prevCart, item]);
  // };

  return (
    <BrowserRouter>
    <CartContext.Provider value={{ cart, setCart }}>
    <App/>
    </CartContext.Provider>
    </BrowserRouter>
  );
};




