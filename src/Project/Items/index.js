import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

import styles from './index.module.css'
import Appoo from './pratice';

const Appo = () => {

    const [text, setText] = useState('')
    const[api, setApi] = useState('text')
    

    const handleSearch =(e)=>{
        setText(e.target.value) 
    }

    return (
        <>

        <div className={styles.app}>
            <div className={styles.left}>
                <div className={styles.leftTop}>
                  <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"/>
                </div>
                <div className={styles.leftMiddle}>
                <h1>KFC Menu</h1>
               </div>
               <div className={styles.leftLast}>

                <ul>
                <li id={styles.one}>Peri Peri Chicken</li>
                <li id={styles.two}>Value Snackers</li>
                <li id={styles.three}>Chicken Rolls</li>
                <li id={styles.four}>Chicken Buckets</li>
                <li id={styles.five}>Biriyani Bucket</li>
                <li id={styles.six}>Box Meals</li>
                <li id={styles.seven}>Burgers</li>
                  
                </ul>
               </div>
            </div>
           
          <Appoo/>
          </div>
          </>
    );
          }

export default Appo;



