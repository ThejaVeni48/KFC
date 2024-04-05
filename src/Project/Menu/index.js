import Footer from "../Footer/footer"
import Header from "../Header/header"
import styles from './menu.module.css'
import Card from 'react-bootstrap/Card';

import KFCImages from '../category.json'
import Appo from "../Items";
import OrderBtn from "../OrderBtn/order";
import { useState } from "react";







const Menu =()=>{


    return(
        <>
   <div>
    <header>
        <Header />
    </header>
    <main>
        <OrderBtn/>
        <Appo/>
    </main>
      
<footer>
    <Footer/>
</footer>
</div>
        </>
    )
}


export default Menu





{/* <main>
        <div className={styles.deliver}>
            <h4>The</h4>
        </div>
          <div className={styles.wrapper}>
             <div className={styles.left}>
                <div className={styles.leftTop}>
                   <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" width={100}/>
                </div>
                <h1>KFC MENU</h1>
                <ul>
                    <li>Peri Peri Chicken</li>
                    <li>Value Snackers</li>
                    <li>Chicken Rolls</li>
                    <li>Chicken Buckets</li>
                    <li>Biriyani Buckets</li>
                    <li>Box Meals</li>
                    <li>Burgers</li>
                </ul>
               
             </div>
             <div className={styles.right}>
             {
             KFCImages.images.map((image) => (
          <Card key={image.id} className={styles.eachCard}>
            <Card.Img variant="top" src={image.src} alt={image.alt} style={{height:"100px" ,width:"200px"}} />

          </Card>
))}
             </div>
          </div>
      </main> */}