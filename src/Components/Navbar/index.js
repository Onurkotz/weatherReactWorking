import styles from "./styles.module.css"
import * as React from "react";


function Navbar() {
  return (
    <div className={styles.nav}>

    <p>Şehrini Seç</p>
    <input placeholder="Ara"/>
      
    </div>
  )
}

export default Navbar