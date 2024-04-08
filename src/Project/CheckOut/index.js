

import { useNavigate } from 'react-router-dom';
import Title from '../Title/title';
import styles from './index.module.css';
import { useContext, useState } from 'react';
import { CartContext } from '../Routes';



import { useLocation } from 'react-router-dom';


const Checkout = () => {

    const menu = useNavigate();
  const location = useLocation();
  const { totalPrice, gst, restaurantFees,check,length } = location.state;


    const backToMenu = () => {
    menu('/menu');
  };

  const backToSignUp = () => {
    menu('/signUp');
  };

  return (
    <>
      <div>
        <header>
        <div className={styles.left}>
            <button onClick={backToMenu}>Back To Menu</button>
           </div>
           <div className={styles.middle}>
             <Title />
           </div>
           <div className={styles.right}>
             <button onClick={backToSignUp}>Sign Up</button>
           </div>
        </header>
        <i></i>
        <main className={styles.main}>
           <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="kfc title" />
           <p>checkout</p>
         </main>
         <section className={styles.two}>
            <div className={styles.checkout}>

         <h1>{length} Item</h1>
         <div className={styles.subtotal}>
        <p>Subtotal</p> 
            <p>&#8377;      {totalPrice}</p>
            
         </div>
       <div className={styles.gst}>

        <p>GST </p>
        <p>&#8377;{gst}</p>
       </div>
       <div className={styles.restaurantFees} >
        <p>Restaurant Fees </p>
        <p>&#8377;{restaurantFees}</p>

       </div>
        <button>Continue to payment &#8377;{check}</button>
            </div>
         </section>
       
      </div>
    </>
  );
};

export default Checkout;

  
    
// export default CheckOut
