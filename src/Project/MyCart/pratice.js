




import { useContext, useState } from "react"
import Footer from "../Footer/footer"
import Header from "../Header/header"
import { CartContext } from "../Routes"
import data from '../JSON/menu.json'
import styles from './mycart.module.css'

const MyCart = () => {
  let cartList = useContext(CartContext);

  const [counts, setCounts] = useState(cartList.cart.map(() => 1));

  const increment = (id) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[id] += 1;
      return newCounts;
    });
  };
  
  const decrement = (id) => {
    if (counts[id] > 0) {
      setCounts(prevCounts => {
        const newCounts = [...prevCounts];
        newCounts[id] -= 1;
        return newCounts;
      });
    }
  };

  const totalPrices = () => {
  const totalPrice = cartList.cart.reduce((total, item, index) => {
    return total + (counts[index] * item.price);
  }, 0);
  
  return totalPrice.toFixed(2);
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
              <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" />
              <h4>MyCart</h4>
              </div>
              {/* <div className={styles.section}>
                {
                  cartList.cart.map((item, id) => (
                    <>
                    <div key={id} className={styles.one}>
                         <div className={styles.oneFirst}>
                          <img src={item.image} width={200} />
                         </div>
                         <div className={styles.oneSecond}>
                          <p>{item.name}</p>
                          <button>Remove</button>
                         </div>
                         <div className={styles.oneThree}>
                         <button onClick={()=>decrement(id)}>-</button>
                          <p>{counts[id]}</p>
                          <button onClick={()=>increment(id)}>+</button>
                          <p>{counts[id] * item.price}</p>
                         </div>
                      </div>
                       
                       
                      
                    </>
                  ))
                }
                </div>
                <div className={styles.three}>

                <button>Remove All</button>
                       <button>Add More Items</button>
                </div>
                 <div className={styles.two}>
                  <h5>Items {cartList.cart.length}</h5>
                      <h5>Total Price: {totalPrices()}</h5>
                      <button>Check Out</button>
                      </div>
              </div> */}
        
            <div className={styles.two}>
              <div className={styles.first}>
                <div styles={styles.image}>
                {
                  cartList.cart.map((item,id)=>(
                    <>
                    <h5>{item.name}</h5>
                    <img src={item.image} width={120}/>
                    <div className={styles.increment}>

                         <button onClick={()=>decrement(id)} className={styles.add}>-</button>
                          <p>{counts[id]}</p>
                          <button onClick={()=>increment(id)} className={styles.add}>+</button>
                          <p>{counts[id] * item.price}</p>
                        <button>Remove</button>
                    </div>
                    </>
                  ))
                }
              </div>
              {/* <div className={styles.items}>
                  {
                    cartList.cart.map((items,id)=>(
                      <>
                      <h5>{items.name}</h5>
                      </>
                    ))
                  }
                  <button>remove</button>
              </div>
              <div className={styles.increment}>
                {
                  cartList.cart.map((item, id)=>(
                    <>
              <button onClick={()=>decrement(id)}>-</button>
                          <p>{counts[id]}</p>
                          <button onClick={()=>increment(id)}>+</button>
                          <p>{counts[id] * item.price}</p>
                    </>
                  ))
}
              </div> */}
            </div>
            <div className={styles.second}>
            {/* <h5> {cartList.cart.length} Items</h5>
            <div className={styles.offers}>
               <h2>Apply offers & Deals</h2>
               <button>View All</button>
            </div>

                      <h5>Total Price: {totalPrices()}</h5>
                      <button>Check Out</button>
            </div>
                  </div> */}
                  <div className={styles.totalItems}>
                    <p>{cartList.cart.length} Items</p>
                  </div>
                  <div className={styles.applyOffers}>
                    <p>Apply Offers & Deals</p>
                  </div>
                  <div className={styles.total}>
                    
                      <p>Subtotal</p>
                      <p>{totalPrices()}</p>
                   
                    </div>
                    <div className={styles.gst}>
                      <p>GST</p>
                      <p>12</p>
                    </div>
                    <div className={styles.checkOut}>
                      <button onclic>Check Out {totalPrices()}</button>
                    </div>
                  </div>
        </div>   
        </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default MyCart;

