import { Route, Routes } from "react-router-dom"
import Home from "../HomePage/home"
import Menu from "../Menu"
import MyCart from "../MyCart"









const PostRoutes =()=>{



    return(
        <>
        <Routes>
           <Route path='/' Component={Home}/>
           <Route path='/menu' Component={Menu}/>
           <Route path='/cart' Component={MyCart}/>
        </Routes>
        
        </>
    )
}


export default PostRoutes