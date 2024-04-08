
import styles from './index.module.css'




const Navbar = ()=>{

    return(
        <>
        <div>
            <ul>
                <li className={styles.link}>Services</li>
                <li className={styles.link}>Contact</li>
            </ul>
        </div>
        
        </>
    )
}


export default Navbar