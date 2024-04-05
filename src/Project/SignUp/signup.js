// import { Link, useNavigate } from 'react-router-dom'
import styles from './signup.module.css'
// import Title from '../Title/title'
import { useState } from 'react'






const SignUp =()=>{

    const[phn]=useState('')

    // const navigate = useNavigate()

    // const handleSkip =()=>{

    //     navigate('/homepage')
    // }

    // const PhnValidation =(e)=>{
    //    const PhnNo = e.target.value
    //    setPhn(PhnNo);

    // }
    return(
        <>
        <div className={styles.container}>
           <form>
               <p className={styles.signIn}>Sign In/Sign Up</p>
               {/* <Title/> */}
                 <p className={styles.para}>LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE <br/><p style={{textAlign:'center'}}>Number!</p></p>
                <input type='tel' placeholder='Phone Number'value={phn}/>
                <span></span>
                <p className={styles.link}>By "logging in to KFC", you agree to our Privacy Policy and Terms & Conditions.</p>
                <button className={styles.codeBtn}>Send me a Code</button>
                <div className={styles.or}>
                <div className={styles.break}>
                 <i></i>
                 <div className={styles.orClass}>
                    <p>Or</p>
                 </div>
                </div>
                </div>
             <button className={styles.skipBtn}>Skip, Continue as Guest</button>
               
           </form>
        </div>
        </>
    )
}

export default SignUp




