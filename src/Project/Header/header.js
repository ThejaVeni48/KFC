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

    return(
        <>
        <nav className={styles.navBar}>
            <div className={styles.left}>
                <ul>
                    <li><Title/></li>
                    <li><Link to={'/menu'} style={{color:"black", textDecoration:"none"}}>Menu</Link></li>
                    <li><Link to={'/menu'} style={{color:"black", textDecoration:"none"}}>Deals</Link></li>
                </ul>
            </div>
            <div className={styles.right}>
                <ul>
                        <li className={styles.sign}><Link to ={'/signup'} > <Icon.PersonCircle/> <span>SignUp</span></Link></li>
                        <li><img src={kfc} width={70} onClick={goToCart}/></li>
                         <p style={{position:"absolute" , top:"10%", right:"18.3%"}}>{count.cart.length}</p>
                </ul>
            </div>
        </nav>
        
        </>
    )
}


export default Header

