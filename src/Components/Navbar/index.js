import styles from "./styles.module.css"
import {useEffect, useState} from "react";
import { Switch } from '@chakra-ui/react'
import { useFormik } from 'formik';



function Navbar() {

  const [searching, setSearching] = useState("")
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searching);
    
  }
 
 const changer = event => {
   setSearching(event.target.value)
  }

console.log(searching)
  return (
    
   
    <div className={styles.nav}>
    
    <span className={styles.fl}>
      <p>Şehrini Seç</p>
      <form onSubmit={onSubmit} >
        <input type="text" name="city" placeholder='Mesela "Ankara"'  value={searching.city} 
        onChange={changer} />
      </form>
      </span>
 

    <span className={styles.fl}>
      <p style={{marginTop: "-3px"}} >Koyu Tema</p> 
      <Switch colorScheme="red" id='email-alerts' />
    </span>

    </div>
    
  )
}

export default Navbar
