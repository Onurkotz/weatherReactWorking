import React from 'react'
import styles from "./styles.module.css"

function Card(props) {
  return (
    <div>
      
    
      <div className={styles.card}>
        <div>
          <img className={styles.pic} src="https://picsum.photos/150/150" alt="img" />
        </div>

        <div className={styles.city}>
          <h1>
            {props.day}
          </h1>
        </div>

        <div className={styles.heat}>
          <h1>
            {props.temp}°
          </h1>
        </div>

        <div className={styles.des}>
          <h1>
           {props.desc}
          </h1>
        </div>
     </div>
    
    
    
    </div>
  )
}

export default Card
