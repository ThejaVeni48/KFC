


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../Menu";

import Home from "../HomePage/home";
import MyCart from "../MyCart";
import { createContext, useState } from "react";
import SignUp from "../SignUp/signup";
import Checkout from "../CheckOut";
import Categories from "../Categories";


export const CartContext = createContext();

const Navigate = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert("item added");
  };

  const removeAllItems = () => {
    setCart([]);
  };


  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, handleClick, removeAllItems,setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path='/menu' element={<MyCart/>}/>   
          <Route path="/checkout" element={<Checkout />} />

          </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default Navigate;