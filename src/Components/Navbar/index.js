import styles from "./styles.module.css"
import {useEffect, useState} from "react";
import { Switch } from '@chakra-ui/react'
import { useFormik } from 'formik';



function Navbar() {

  const [searching, setSearching] = useState({
    city: "",
  } )
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searching);
    
  }
 
  const onChangeInput = (e) => {
    setSearching({...searching, [e.target.name]: e.target.value})
  } 
  
  return (
    
   
    <div className={styles.nav}>
    
    <span className={styles.fl}>
      <p>Şehrini Seç</p>
      <form onSubmit={onSubmit} >
        <input type="text" name="city" placeholder='Mesela "Ankara"'  value={searching.city} 
        onChange={onChangeInput} />
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
