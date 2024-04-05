import { createContext, useState } from "react"
import Appoo from "../Items/pratice";
import Cart from "./cart";


export const MyProvider = createContext()



const CartContext = ()=>{


    const [cart, setCart] = useState([])

    const handleClick = (item) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, item];
            console.log(updatedCart);
            return updatedCart;
        });
    };

    return(
        <>
           <MyProvider.Provider value={{cart,setCart}}>

            <Appoo/>
            <Cart/>
           </MyProvider.Provider>

         </>
    )
}


export default CartContext