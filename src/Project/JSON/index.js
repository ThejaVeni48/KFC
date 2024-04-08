// import { useContext, useState } from "react";
// import Footer from "../Footer/footer";
// import Header from "../Header/header";
// import { CartContext } from "../Routes";
// import styles from './mycart.module.css';
// import { useNavigate } from "react-router-dom";

// const MyCart = () => {
//   const { cart, setCart } = useContext(CartContext);
//   const nav = useNavigate();

//   const [counts, setCounts] = useState(cart.map(() => 1));

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
//     const totalPrice = cart.reduce((total, item, index) => {
//       return total + (counts[index] * item.price);
//     }, 0);
  
//     return totalPrice.toFixed(2);
//   };

//   const MoreItems = () => {
//     nav('/menu');
//   };

//   const checkOut = () => {
//     alert("ordered");
//   };

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter((item, index) => index !== id);
//     setCart(updatedCart);
//   };

//   const removeAllFromCart = () => {
//     setCart([]);
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
//               <div className={styles.cart}>
//                 {cart.map((item, id) => (
//                   <div key={id} className={styles.cartItem}>
//                     <div className={styles.itemImage}>
//                       <img src={item.image} alt={item.name} width={250} />
//                     </div>
//                     <div className={styles.itemDetails}>
//                       <h5>{item.name}</h5>
//                       <p>&#8377;{counts[id] * item.price}</p>
//                       <div className={styles.quantity}>
//                         <button onClick={() => decrement(id)} className={styles.btn}>
//                           -
//                         </button>
//                         <p>{counts[id]}</p>
//                         <button onClick={() => increment(id)} className={styles.btn}>
//                           +
//                         </button>
//                         <button onClick={() => removeFromCart(id)} className={styles.removeBtn}>
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className={styles.checkoutCard}>
//                 <div className={styles.totalItems}>
//                   <p>{cart.length} Items</p>
//                 </div>
//                 <div className={styles.applyOffers}>
//                   <p>Apply Offers & Deals</p>
//                 </div>
//                 <div className={styles.subtotal}>
//                   <p>Subtotal</p>
//                   <p> &#8377;{totalPrices()}</p>
//                 </div>
//                 <div className={styles.gst}>
//                   <p> GST (12%)</p>
//                   <p>&#8377;{(totalPrices() * 0.12).toFixed(2)}</p>
//                 </div>
//                 <div className={styles.total}>
//                   <p>Total</p>
//                   <p>&#8377;{(totalPrices() * 1.12).toFixed(2)}</p>
//                 </div>
//                 <div className={styles.checkoutButton}>
//                   <button onClick={checkOut}>Check Out <span>&#8377;{(totalPrices() * 1.12).toFixed(2)}</span> </button>
//                 </div>
//               </div>

//             </div>
//             <div className={styles.last}>
//               <button onClick={removeAllFromCart}>Remove All</button>
//               <button onClick={MoreItems}>Add More Items</button>
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


// import { useContext, useState } from "react";
// import Footer from "../Footer/footer";
// import Header from "../Header/header";
// import { CartContext } from "../Routes";
// import styles from "./mycart.module.css";
// import { useNavigate } from "react-router-dom";

// const MyCart = () => {
//   const { cart, setCart } = useContext(CartContext);
//   const nav = useNavigate();

//   const [counts, setCounts] = useState(cart.map(() => 1));

//   const increment = (id) => {
//     setCounts((prevCounts) => {
//       const newCounts = [...prevCounts];
//       newCounts[id] += 1;
//       return newCounts;
//     });
//   };

//   const decrement = (id) => {
//     if (counts[id] > 0) {
//       setCounts((prevCounts) => {
//         const newCounts = [...prevCounts];
//         newCounts[id] -= 1;
//         return newCounts;
//       });
//     }
//   };

//   const totalPrices = () => {
//     const totalPrice = cart.reduce((total, item, index) => {
//       return total + counts[index] * item.price;
//     }, 0);

//     return totalPrice.toFixed(2);
//   };

//   const MoreItems = () => {
//     nav("/menu");
//   };

//   const checkOut = () => {
//     alert("ordered");
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item, index) => index !== id));
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
//               <img
//                 src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
//                 alt="kfc title"
//               />
//               <h4>MyCart</h4>
//             </div>
//             <div className={styles.two}>
//               <div className={styles.cart}>
//                 {cart.map((item, id) => (
//                   <div key={id} className={styles.cartItem}>
//                     <div className={styles.itemImage}>
//                       <img src={item.image} alt={item.name} width={250} />
//                     </div>
//                     <div className={styles.itemDetails}>
//                       <h5>{item.name}</h5>
//                       <p>&#8377;{counts[id] * item.price}</p>
//                       <div className={styles.quantity}>
//                         <button
//                           onClick={() => decrement(id)}
//                           className={styles.btn}
//                         >
//                           -
//                         </button>
//                         <p>{counts[id]}</p>
//                         <button
//                           onClick={() => increment(id)}
//                           className={styles.btn}
//                         >
//                           +
//                         </button>
//                         <button
//                           onClick={() => removeFromCart(id)}
//                           className={styles.removeBtn}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className={styles.checkoutCard}>
//                 <div className={styles.totalItems}>
//                   <p>{cart.length} Items</p>
//                 </div>
//                 <div className={styles.applyOffers}>
//                   <p>Apply Offers & Deals</p>
//                 </div>
//                 <div className={styles.subtotal}>
//                   <p>Subtotal</p>
//                   <p>&#8377;{totalPrices()}</p>
//                 </div>
//                 <div className={styles.gst}>
//                   <p> GST (12%)</p>
//                   <p>&#8377;{(totalPrices() * 0.12).toFixed(2)}</p>
//                 </div>
//                 <div className={styles.total}>
//                   <p>Total</p>
//                   <p>&#8377;{(totalPrices() * 1.12).toFixed(2)}</p>
//                 </div>
//                 <div className={styles.checkoutButton}>
//                   <button onClick={checkOut}>
//                     Check Out{" "}
//                     <span>&#8377;{(totalPrices() * 1.12).toFixed(2)}</span>{" "}
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.last}>
//               <button onClick={MoreItems}>Add More Items</button>
//             </div>
//           </div>
//         </main>
//         <footer>
//           <Footer />
//         </footer>
//       </div>
//     </>
//   );
// };

// export default MyCart;


