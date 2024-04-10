import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../Menu";
import Cart from "../cart/cart";
import BasicExample from "../Categories";
// import Header from "../Header/header";
import Home from "../HomePage/home";
import MyCart from "../MyCart";
import { createContext, useState } from "react";
import SignUp from "../SignUp/signup";
// import CheckOut from "../CheckOut";
import Checkout from "../CheckOut";
import Payment from "../payment";

export const CartContext = createContext();

const Navigate = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert("item added");
  };
  // const removeFromCart = (itemToRemove) => {
  //   setCart((prevCart) => prevCart.filter((item) => item.id !== itemToRemove));
  //   console.log("item is deleted")
  // };
  

  const removeAllItems = () => {
    setCart([]);
  };


  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, handleClick, removeAllItems }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/basic" element={<BasicExample />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path='/menu' element={<MyCart/>}/>   
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment/>}/>
          </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default Navigate;
