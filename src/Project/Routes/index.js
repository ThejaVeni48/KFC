import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../Menu";
import Cart from "../cart/cart";
import BasicExample from "../Categories";
import Header from "../Header/header";
import Home from "../HomePage/home";
import MyCart from "../MyCart";
import { createContext, useState } from "react";
import SignUp from "../SignUp/signup";

export const CartContext = createContext();

const Navigate = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert("item added");
  };

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, handleClick }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/basic" element={<BasicExample />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default Navigate;
