// import { useContext, useState } from "react"
// import Footer from "../Footer/footer"
// import Header from "../Header/header"
// import { CartContext } from "../Routes"
// import styles from './mycart.module.css'
// import { useNavigate } from "react-router-dom"

import Footer from "../Footer/footer"
import Header from "../Header/header"

// const MyCart = () => {
//   let cartList = useContext(CartContext);
//   const nav = useNavigate();
//   const [counts, setCounts] = useState(cartList.cart.map(() => 1));
//   const { cart, removeItem } = useContext(CartContext);
//   const {  removeAllItems } = useContext(CartContext);

//   const increment = (id) => {
//     setCounts(prevCounts => {
//       const newCounts = [...prevCounts];
//       newCounts[id] += 1;
//       return newCounts;
//     });
//   };
  
//   const decrement = (id) => {
//     if (counts[id] > 0) {
//       setCounts(prevCounts => {
//         const newCounts = [...prevCounts];
//         newCounts[id] -= 1;
//         return newCounts;
//       });
//     }
//   };

//   const totalPrices = () => {
//     return cartList.cart.reduce((total, item, index) => {
//       return total + counts[index] * item.price;
//     }, 0);
//   };

//   const MoreItems = () => {
//     nav('/menu');
//   };

//   const checkOut = () => {
//     const totalPrice = totalPrices();
//     const gst = (totalPrice * 0.12).toFixed(2);
//     const restaurantFees = '10.00';
//     const check = parseFloat(totalPrice) + parseFloat(gst) + parseFloat(restaurantFees); 
//     console.log("totalprice" ,totalPrice);
//     console.log("gst" ,gst);
//     console.log("resta" , restaurantFees);
//     console.log("totalprice + gst + res" ,check);
//     console.log("length:" , cartList.cart.length)
    
//     nav('/checkout', { state: { totalPrice, gst, restaurantFees, check ,length: cartList.cart.length} });
//   };

//   const startOrder = ()=>{
//     nav('/menu')
//   }

//   // const handleRemoveItem = (itemId) => {
//   //   removeItem(itemId);
//   // };


  

//   return (
//     <>
//       <div>
//         <header>
//           <Header />
//         </header>
//         <main>
//           <div className={styles.container}>
//             <div className={styles.one}>
//               <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="kfc title" />
//               <h4>MyCart</h4>
//             </div>
//             <div className={styles.two}>
//               {cartList.cart.length === 0 && <div className={styles.emptyCart}>
//                <div className={styles.emptyCart}>
//                   <h1>Your cart is empty</h1>
//                   <h1>Let's start an order</h1>
//                   <button onClick={startOrder}>Start Order</button>

//                 </div>
                
                
                
//                 </div>}
//               {cartList.cart.length > 0 && (
//                 <>
//                   <div className={styles.cart}>
//                     {cartList.cart.map((item, id) => (
//                       <div key={id} className={styles.cartItem}>
//                         <div className={styles.itemImage}>
//                           <img src={item.image} alt={item.name} width={250} />
//                         </div>
//                         <div className={styles.itemDetails}>
//                           <h5>{item.name}</h5>
//                           <p>&#8377;{counts[id] * item.price}</p>
//                           <div className={styles.quantity}>
//                             <button className={styles.btn} onClick={() => decrement(id)}>
//                               -
//                             </button>
//                             <p>{counts[id]}</p>
//                             <button className={styles.btn} onClick={() => increment(id)}>
//                               +
//                             </button>
//                             <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>Remove</button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className={styles.checkoutCard}>
//                     <div className={styles.totalItems}>
//                       <p>{cartList.cart.length} Items</p>
//                     </div>
//                     <div className={styles.applyOffers}>
//                       <p>Apply Offers & Deals</p>
//                     </div>
//                     <div className={styles.subtotal}>
//                       <p>Subtotal</p>
//                       <p>&#8377;{totalPrices()}</p>
//                     </div>
//                     <div className={styles.gst}>
//                       <p> GST (12%)</p>
//                       <p>&#8377;{(totalPrices() * 0.12).toFixed(2)}</p>
//                     </div>
//                     <div className={styles.total}>
//                       <p>Total</p>
//                       <p>&#8377;{(totalPrices() * 1.12).toFixed(2)}</p>
//                     </div>
//                     <div className={styles.checkoutButton}>
//                       <button onClick={checkOut}>Check Out <span>&#8377;{(totalPrices() * 1.12).toFixed(2)}</span> </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//               {cartList.cart.length > 0 && (
//                 <div className={styles.last}>
//                   <button onClick={removeAllItems}>Remove All</button>
//                   <button onClick={MoreItems}>Add More Items</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//         <footer>
//           <Footer />
//         </footer>
//       </div>
//     </>
//   )
// }

// export default MyCart;
// import { useContext, useState } from "react"
// import Footer from "../Footer/footer"
// import Header from "../Header/header"
// import { CartContext } from "../Routes"
// import styles from './mycart.module.css'
// import { useNavigate } from "react-router-dom"

// const MyCart = ({children}) => {
//   const { cart, removeAllItems} = useContext(CartContext);
//   const nav = useNavigate();
//   const [counts, setCounts] = useState(Array(cart.length).fill(1));

//   const increment = (id) => {
//     setCounts(prevCounts => {
//       const newCounts = [...prevCounts];
//       newCounts[id] += 1;
//       return newCounts;
//     });
//   };
  
//   const decrement = (id) => {
//     if (counts[id] > 0) {
//       setCounts(prevCounts => {
//         const newCounts = [...prevCounts];
//         newCounts[id] -= 1;
//         return newCounts;
//       });
//     }
//   };

//   const totalPrices = () => {
//     return cartList.cart.reduce((total, item, index) => {
//       return total + (counts[index] * item.price);
//     }, 0).toFixed(2);
//   };
  

//   const MoreItems = () => {
//     nav('/menu');
    
//   };

//   const checkOut = () => {
//     const totalPrice = totalPrices();
//     const gst = (totalPrice * 0.12).toFixed(2);
//     const restaurantFees = '10.00';
//     const check = parseFloat(totalPrice) + parseFloat(gst) + parseFloat(restaurantFees); 
//     console.log("totalprice" ,totalPrice);
//     console.log("gst" ,gst);
//     console.log("resta" , restaurantFees);
//     console.log("totalprice + gst + res" ,check);
//     console.log("length:" , cart.length)
    
//     nav('/checkout', { state: { totalPrice, gst, restaurantFees, check ,length: cart.length} });
//   };

//   const startOrder = ()=>{
//     nav('/menu')
//   };

  

//   return (
//     <>
//       <div>
//         <header>
//           <Header />
//         </header>
//         <main>
//           <div className={styles.container}>
//             <div className={styles.one}>
//               <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="kfc title" />
//               <h4>MyCart</h4>
//             </div>
//             <div className={styles.two}>
//               {cart.length === 0 && <div className={styles.emptyCart}>
//                <div className={styles.emptyCart}>
//                   <h1>Your cart is empty</h1>
//                   <h1>Let's start an order</h1>
//                   <button onClick={startOrder}>Start Order</button>

//                 </div>
                
                
                
//                 </div>}
//               {cart.length > 0 && (
//                 <>
//                   <div className={styles.cart}>
//                     {cart.map((item, index,id) => (
//                       <div key={id} className={styles.cartItem}>
//                         <div className={styles.itemImage}>
//                           <img src={item.image} alt={item.name} width={250} />
//                         </div>
//                         <div className={styles.itemDetails}>
//                           <h5>{item.name}</h5>
//                           <p>&#8377;{counts[id] * item.price}</p>
//                           <div className={styles.quantity}>
//                             <button className={styles.btn} onClick={() => decrement(id)}>
//                               -
//                             </button>
//                             <p>{counts[id]} hiiii</p>
//                             <button className={styles.btn} onClick={() => increment(id)}>
//                               +
//                             </button>
//                             {/* <button className={styles.removeBtn}  onClick={() => removeFromCart(item.id)}>Remove</button> */}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className={styles.checkoutCard}>
//                     <div className={styles.totalItems}>
//                       <p>{cart.length} Items</p>
//                     </div>
//                     <div className={styles.applyOffers}>
//                       <p>Apply Offers & Deals</p>
//                     </div>
//                     <div className={styles.subtotal}>
//                       <p>Subtotal</p>
//                       <p>&#8377;{totalPrices()}</p>
//                     </div>
//                     <div className={styles.gst}>
//                       <p> GST (12%)</p>
//                       <p>&#8377;{(totalPrices() * 0.12).toFixed(2)}</p>
//                     </div>
//                     <div className={styles.total}>
//                       <p>Total</p>
//                       <p>&#8377;{(totalPrices() * 1.12).toFixed(2)}</p>
//                     </div>
//                     <div className={styles.checkoutButton}>
//                       <button onClick={checkOut}>Check Out <span>&#8377;{(totalPrices() * 1.12).toFixed(2)}</span> </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//               {cart.length > 0 && (
//                 <div className={styles.last}>
//                   <button onClick={removeAllItems}>Remove All</button>
//                   <button onClick={MoreItems}>Add More Items</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//         <footer>
//           <Footer />
//         </footer>
//       </div>
//     </>
//   )
// }

// export default MyCart;




import { useContext, useState } from "react"
import { CartContext } from "../Routes"
import styles from './mycart.module.css'
import { useNavigate } from "react-router-dom"


// const MyCart = ({children}) => {

//   let cartList = useContext(CartContext);
//   const { cart, removeAllItems} = useContext(CartContext);
//   const nav = useNavigate();
//   const [counts, setCounts] = useState(Array(cart.length).fill(1));

//   const increment = (id) => {
//     setCounts(prevCounts => {
//       const newCounts = [...prevCounts];
//       newCounts[id] += 1;
//       return newCounts;
//     });
//   };
  
//   const decrement = (id) => {
//     if (counts[id] > 0) {
//       setCounts(prevCounts => {
//         const newCounts = [...prevCounts];
//         newCounts[id] -= 1;
//         return newCounts;
//       });
//     }
//   };

//   const totalPrices = () => {
//     return cartList.cart.reduce((total, item, index) => {
//       return total + (counts[index] * item.price);
//     }, 0).toFixed(2);
//   };
  

//   const MoreItems = () => {
//     nav('/menu');
    
//   };

//   const checkOut = () => {
//     const totalPrice = totalPrices();
//     const gst = (totalPrice * 0.12).toFixed(2);
//     const restaurantFees = '10.00';
//     const check = parseFloat(totalPrice) + parseFloat(gst) + parseFloat(restaurantFees); 
//     console.log("totalprice" ,totalPrice);
//     console.log("gst" ,gst);
//     console.log("resta" , restaurantFees);
//     console.log("totalprice + gst + res" ,check);
//     console.log("length:" , cart.length)
    
//     nav('/checkout', { state: { totalPrice, gst, restaurantFees, check ,length: cart.length} });
//   };

//   const startOrder = ()=>{
//     nav('/menu')
//   };



//   return(
//     <>
//   <div>
//     <header>
//       <Header/>
//     </header>
//     <main>
//     <div className={styles.container}>
//           <div className={styles.one}>
//                <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="kfc title" />
//                <h4>MyCart</h4>
//              </div>
//              <div className={styles.two}>
//                {cart.length === 0 && <div className={styles.emptyCart}>
//                 <div className={styles.emptyCart}>
//                    <h1>Your cart is empty</h1>
//                    <h1>Let's start an order</h1>
//                    <button onClick={startOrder}>Start Order</button>

//                  </div>
                
                
                
//                </div>}
//                {cart.length > 0 && (
//                 <>
//                   <div className={styles.cart}>
//                     {cart.map((item, index,id) => (
//                       <div key={id} className={styles.cartItem}>
//                         <div className={styles.itemImage}>
//                           <img src={item.image} alt={item.name} width={250} />
//                         </div>
//                         <div className={styles.itemDetails}>
//                           <h5>{item.name}</h5>
//                           <p>&#8377;{counts[id] * item.price}</p>
//                           <div className={styles.quantity}>
//                             <button className={styles.btn} onClick={() => decrement(id)}>
//                               -
//                             </button>
//                             <p>{counts[id]}</p>
//                             <button className={styles.btn} onClick={() => increment(id)}>
//                               +
//                             </button>
//                             {/* <button className={styles.removeBtn}  onClick={() => removeFromCart(item.id)}>Remove</button> */}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className={styles.checkoutCard}>
//                     <div className={styles.totalItems}>
//                       <p>{cart.length} Items</p>
//                     </div>
//                     <div className={styles.applyOffers}>
//                       <p>Apply Offers & Deals</p>
//                     </div>
//                     <div className={styles.subtotal}>
//                       <p>Subtotal</p>
//                       <p>&#8377;</p>
//                     </div>
//                     <div className={styles.gst}>
//                       <p> GST (12%)</p>
//                       <p>&#8377;</p>
//                     </div>
//                     <div className={styles.total}>
//                       <p>Total</p>
//                       <p>&#8377;</p>
//                     </div>
//                     <div className={styles.checkoutButton}>
//                       <button >Check Out <span>&#8377;</span> </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//               {cart.length > 0 && (
//                 <div className={styles.last}>
//                   <button onClick={removeAllItems}>Remove All</button>
//                   <button onClick={MoreItems}>Add More Items</button>
//                 </div>
//               )}
//             </div>
//           </div>
//     </main>
//     <footer>
//       <Footer/>
//     </footer>
//   </div>
    
//     </>
//   )
// }


// export default MyCart

const MyCart = ({ children }) => {
  const { cart, removeAllItems } = useContext(CartContext);
  const nav = useNavigate();
  const [counts, setCounts] = useState(Array(cart.length).fill(1));

  const increment = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] += 1;
        return newCounts;
      });
    }
  };
  
  const decrement = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1 && counts[index] > 0) {
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] -= 1;
        return newCounts;
      });
    }
  };
  

  const totalPrices = () => {
    return cart.reduce((total, item, index) => {
      return total + counts[index] * item.price;
    }, 0).toFixed(2);
  };



  const checkOut = () => {
        const totalPrice = totalPrices();
        const gst = (totalPrice * 0.12).toFixed(2);
        const restaurantFees = '10.00';
        const check = parseFloat(totalPrice) + parseFloat(gst) + parseFloat(restaurantFees); 
        console.log("totalprice" ,totalPrice);
        console.log("gst" ,gst);
        console.log("resta" , restaurantFees);
        console.log("totalprice + gst + res" ,check);
        console.log("length:" , cart.length)
        
        nav('/checkout', { state: { totalPrice, gst, restaurantFees, check ,length: cart.length} });
      };
    
    
  const MoreItems = () => {
    nav("/menu");
  };

  const startOrder = () => {
    nav("/menu");
  };

  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <div className={styles.container}>
            <div className={styles.one}>
              <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="kfc title" />
              <h4>MyCart</h4>
            </div>
            <div className={styles.two}>
              {cart.length === 0 && (
                <div className={styles.emptyCart}>
                  <h1>Your cart is empty</h1>
                  <h1>Let's start an order</h1>
                  <button onClick={startOrder}>Start Order</button>
                </div>
              )}
              {cart.length > 0 && (
                <>
                  <div className={styles.cart}>
                    {cart.map((item, index) => (
                      <div key={index} className={styles.cartItem}>
                        <div className={styles.itemImage}>
                          <img src={item.image} alt={item.name} width={250} />
                        </div>
                        <div className={styles.itemDetails}>
                          <h5>{item.name}</h5>
                          <p>&#8377;{counts[index] * item.price}</p>
                          <div className={styles.quantity}>
                            <button className={styles.btn} onClick={() => decrement(item.id)}>
                              -
                            </button>
                            <p>{counts[index]}</p>
                            <button className={styles.btn} onClick={() => increment(item.id)}>
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.checkoutCard}>
                    <div className={styles.totalItems}>
                      <p>{cart.length} Items</p>
                    </div>
                    <div className={styles.applyOffers}>
                      <p>Apply Offers & Deals</p>
                    </div>
                    <div className={styles.total}>
                    
                      <p> Subtotal</p>
                      <p>&#8377;{totalPrices()}</p>
                   
                    </div>
                    <div className={styles.gst}>
                    
                      <p>GST(12%)</p>
                      <p>&#8377;{(totalPrices() * 0.12).toFixed(2)}</p>
                   
                    </div>
                    <div className={styles.total}>
                      {/* <button onclic>Check Out {totalPrices()}</button> */}
                    {/* </div> */}
                      <p>Total:</p><p> &#8377;{(parseFloat(totalPrices()) + parseFloat(totalPrices()) * 0.12 + 10).toFixed(2)}</p>
                    </div>
                    <div className={styles.checkoutButton}>
                      <button onClick={checkOut}>Check Out&#8377; {totalPrices()}</button>
                    </div>
                  </div>
                  <div className={styles.last}>
                    <button onClick={removeAllItems}>Remove All</button>
                    <button onClick={MoreItems}>Add More Items</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default MyCart;
