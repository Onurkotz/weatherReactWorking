import styles from "./styles.module.css"
import * as React from "react";
import { Switch } from '@chakra-ui/react'

function Navbar() {
  return (
    
   
    <div className={styles.nav}>
    
    <span className={styles.fl}>
      <p>Şehrini Seç</p>
      <input placeholder='Mesela "Ankara"' />
      </span>
 

    <span className={styles.fl}>
      <p style={{marginTop: "-3px"}} >Koyu Tema</p> 
      <Switch colorScheme="red" id='email-alerts' />
    </span>

    </div>
    
  )
}

export default Navbar