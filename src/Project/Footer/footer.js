
import { Icon5CircleFill } from 'react-bootstrap-icons'
import styles from './footer.module.css'
import Kfc from './Kfc.svg'
import  image1 from './image1.png'
import  image2 from './image2.png'
import  google from './google.png'
import  im from './im.png'
import  two from './one.png'


const Footer =()=>{

    return(
        <>
      <footer className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.one}>
          {/* <div className={styles.logo}> */}
             <img src={Kfc} width={40}/>                
         {/* </div> */}
          </div>
         <div className={styles.two}>
                   <div className={styles.list}>
                    <ul>
                        <li>Legal</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                        <li>Caution Notice</li>
                    </ul>
                   </div>
                   <div className={styles.list}>
                    <ul>
                        <li>KFC India</li>
                        <li>About KFC</li>
                        <li>KFC Care</li>
                        <li>Careers</li>
                        <li>Our Golden Past</li>
                        
                    </ul>
                   </div>
                   <div className={styles.list}>
                    <ul>
                        <li>KFC Food</li>
                        <li>Menu</li>
                        <li>Order Lookup</li>
                        <li>Gift Card</li>
                        <li>Nutrition & Allergen</li>
                        
                    </ul>
                   </div>

                   <div className={styles.list}>
                    <ul>
                        <li>Support</li>
                        <li>Get Help</li>
                        <li>Contact Us</li>
                        <li>KFC Feedback</li>
                        <li>Privacy Policy</li>
                        
                    </ul>
                   </div>
              </div>
         <div className={styles.three}>
          <div className={styles.location}>

         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/> 
</svg>
<span>Find a KFC</span>
          </div>
         </div>
         <div className={styles.four}>
          <div className={styles.apps}>

             <img src={two} width={140}/>
             <img src={image2} width={140}/>
         </div>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer
