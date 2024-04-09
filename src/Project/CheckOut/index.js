

// // import { useNavigate } from 'react-router-dom';
// // import Title from '../Title/title';
// // import styles from './index.module.css';
// // // import { useContext, useState } from 'react';
// // // import { CartContext } from '../Routes';



// // import { useLocation } from 'react-router-dom';
// // import StripeCheckout from "react-stripe-checkout"



// // const Checkout = () => {

// //     const menu = useNavigate();
// //   const location = useLocation();
// //   const { totalPrice, gst, restaurantFees,check,length } = location.state;


// //     const backToMenu = () => {
// //     menu('/menu');
// //   };

// //   const backToSignUp = () => {
// //     menu('/signUp');
// //   };

// //   const buyNow=()=>{
// //     alert(" Default Credentials : \n AccountNo: 4242 4242 4242 4242\nExpiry Date : Any Future date\nCVV : Any three digit Random Number");
// //       console.log("buy now button clicked")
    

// //   }

// //    const makePayment =async (token)=>{
       
// //     const body ={
// //       token,
// //       check
// //     }
// //     const headers ={
// //       "Content-Type":"application/json"
// //     }
// //     try {
// //        const response = await fetch("http://localhost:5000/payment",
// //        {
// //          method: "POST",
// //          headers,
// //          body: JSON.stringify(body)
// //        });
// //        console.log(response);
// //      } catch (err) {
// //        console.log(err);
// //      }
// //    }

// //   return (
// //     <>
// //       <div>
// //         <header>
// //         <div className={styles.left}>
// //             <button onClick={backToMenu}>Back To Menu</button>
// //            </div>
// //            <div className={styles.middle}>
// //              <Title />
// //            </div>
// //            <div className={styles.right}>
// //              <button onClick={backToSignUp}>Sign Up</button>
// //            </div>
// //         </header>
// //         <i></i>
// //         <main className={styles.main}>
// //            <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="kfc title" />
// //            <p>checkout</p>
// //          </main>
// //          <section className={styles.two}>
// //             <div className={styles.checkout}>

// //          <h1>{length} Item</h1>
// //          <div className={styles.subtotal}>
// //         <p>Subtotal</p> 
// //             <p>&#8377;      {totalPrice}</p>
            
// //          </div>
// //        <div className={styles.gst}>

// //         <p>GST </p>
// //         <p>&#8377;{gst}</p>
// //        </div>
// //        <div className={styles.restaurantFees} >
// //         <p>Restaurant Fees </p>
// //         <p>&#8377;{restaurantFees}</p>

// //        </div>
// //         {/* <button>Continue to payment &#8377;{check}</button> */}
// //         <StripeCheckout name='Pay Now' amount={check *100} currency='INR'
// //          stripeKey='pk_test_51P2q43SBq2yWYqgNN3oP3T7UqQRtQmYuq7CUXySwqVsWrScwJf0Obs9CPNtSjcC9mfzpFktZ4USDMD7CnAKq8Sin00E0Exwbxl'
// //          token={makePayment}
// //          >

// //         <button onClick={buyNow}>Buy Now {check}</button>
// //         </StripeCheckout >
// //             </div>
// //          </section>
       
// //       </div>
// //     </>
// //   );
// // };

// // export default Checkout;

  
    
// // // export default CheckOut



// import { useNavigate } from 'react-router-dom';
// import Title from '../Title/title';
// import styles from './index.module.css';
// // import { useContext, useState } from 'react';
// // import { CartContext } from '../Routes';



// import { useLocation } from 'react-router-dom';
// import StripeCheckout from "react-stripe-checkout"


// const Checkout = () => {
//     const menu = useNavigate();
//     const location = useLocation();
//     const { totalPrice, gst, restaurantFees, check, length } = location.state;


//          const backToMenu = () => {
//           menu('/menu');
//         };
      
//         const backToSignUp = () => {
//           menu('/signUp');
//         };
      
//         const buyNow=()=>{
//           alert(" Default Credentials : \n AccountNo: 4242 4242 4242 4242\nExpiry Date : Any Future date\nCVV : Any three digit Random Number");
//             console.log("buy now button clicked")
          
      
//         }

//     const makePayment = async (token) => {
//         const body = {
//             token,
//             check
//         }
//         const headers = {
//             "Content-Type": "application/json"
//         }
//         try {
//             const response = await fetch("http://localhost:5000/payment", {
//                 method: "POST",
//                 headers,
//                 body: JSON.stringify(body)
//             });
//             console.log(response);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     return (
//         <>
//              <div>
// //         <header>
// //         <div className={styles.left}>
// //             <button onClick={backToMenu}>Back To Menu</button>
// //            </div>
// //            <div className={styles.middle}>
// //              <Title />
// //            </div>
// //            <div className={styles.right}>
// //              <button onClick={backToSignUp}>Sign Up</button>
// //            </div>
// //         </header>
// //         <i></i>
// //         <main className={styles.main}>
// //            <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="kfc title" />
// //            <p>checkout</p>
// //          </main>
// //          <section className={styles.two}>
// //             <div className={styles.checkout}>

// //          <h1>{length} Item</h1>
// //          <div className={styles.subtotal}>
// //         <p>Subtotal</p> 
// //             <p>&#8377;      {totalPrice}</p>
            
// //          </div>
// //        <div className={styles.gst}>

// //         <p>GST </p>
// //         <p>&#8377;{gst}</p>
// //        </div>
// //        <div className={styles.restaurantFees} >
// //         <p>Restaurant Fees </p>
// //         <p>&#8377;{restaurantFees}</p>

// //        </div>
//          <StripeCheckout name='Pay Now' amount={check *100} currency='INR'
//        stripeKey='pk_test_51P2q43SBq2yWYqgNN3oP3T7UqQRtQmYuq7CUXySwqVsWrScwJf0Obs9CPNtSjcC9mfzpFktZ4USDMD7CnAKq8Sin00E0Exwbxl'
//       token={makePayment}
//          >

//         <button onClick={buyNow}>Buy Now {check}</button>
// //         </StripeCheckout >
// //             </div>
// //          </section>
       
// //       </div>
//         </>
//     );
// };

// export default Checkout;




import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { v4 as uuidv4 } from 'uuid';
import Title from '../Title/title';
import styles from './index.module.css';

const Checkout = () => {
  const menu = useNavigate();
  const location = useLocation();
  const { totalPrice, gst, restaurantFees, check, length } = location.state;

  const backToMenu = () => {
    menu('/menu');
  };

  const backToSignUp = () => {
    menu('/signUp');
  };

  const buyNow = () => {
    alert(" Default Credentials : \n AccountNo: 4242 4242 4242 4242\nExpiry Date : Any Future date\nCVV : Any three digit Random Number");
    console.log("buy now button clicked");
  };

  const makePayment = async (token) => {
    const body = {
      token,
      check
    };
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await fetch("http://localhost:5000/payment", {
        method: "POST",
        headers,
        body: JSON.stringify(body)
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
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
              <p>&#8377; {totalPrice}</p>
            </div>
            <div className={styles.gst}>
              <p>GST </p>
              <p>&#8377;{gst}</p>
            </div>
            <div className={styles.restaurantFees} >
              <p>Restaurant Fees </p>
              <p>&#8377;{restaurantFees}</p>
            </div>
            <StripeCheckout
              name='Pay Now'
              amount={check * 100}
              currency='INR'
              stripeKey='pk_test_51P2q43SBq2yWYqgNN3oP3T7UqQRtQmYuq7CUXySwqVsWrScwJf0Obs9CPNtSjcC9mfzpFktZ4USDMD7CnAKq8Sin00E0Exwbxl'
              token={makePayment}
            >
              <button onClick={buyNow}>Buy Now {check}</button>
            </StripeCheckout>
          </div>
        </section>
      </div>
    </>
  );
};

export default Checkout;
