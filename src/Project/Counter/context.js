import { createContext, useState } from "react"
import Cart from "../cart/cart"


 const MyContext = createContext()

const CartContext = ()=>{

    const [count,setCount] = useState(0)

    const Increment = ()=>{
        setCount(count+1)
    }
 
    return(
        <>
        <MyContext.Provider value={{count,setCount}}>

            <Cart/>
        </MyContext.Provider>
        
        
        </>
    )
}



export default CartContext























































