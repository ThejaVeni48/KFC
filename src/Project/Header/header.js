import Title from "../Title/title"
import kfc from './kfc.png'

import styles from './header.module.css'
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Routes";






const Header =({name})=>{
    
    let count = useContext(CartContext)

    const handleClick =()=>{
        count.handleClick()
    }


    
    const carts = useNavigate()
    
    const goToCart =()=>{


    carts('/mycart')
}


    const moveTosign = ()=>{
        carts('/signup')
    }

    return(
        <>
        <nav className={styles.navBar}>
            <div className={styles.left}>
                <ul>
                    <li><Link to ={'/'}><Title/></Link></li>
                    <li><Link to={'/menu'} style={{color:"black", textDecoration:"none"}}>Menu</Link></li>
                    <li><Link to={'/menu'} style={{color:"black", textDecoration:"none"}}>Deals</Link></li>
                </ul>
            </div>
            <div className={styles.right}>
                <ul>
                        <li><button onClick={moveTosign} style={{border:"none", backgroundColor:"transparent"}}><Icon.PersonCircle/></button></li>
                        <li><img src={kfc} width={70} onClick={goToCart}/></li>
                         <p style={{position:"absolute" , top:"15%", right:"20.3%"}}>{count.cart.length}</p>
                </ul>
            </div>
        </nav>
        
        </>
    )
}


export default Header

