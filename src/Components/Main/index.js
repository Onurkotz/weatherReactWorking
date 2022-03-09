import { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./styles.module.css"

import Card from "./card"

function Main() {
  
  useEffect( () => {
    axios("https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&lang=tr&appid=992c1f2ef9fa5dbd0f8cd57296cac07b")
    .then((res) => setCity(res.data) )
  }, [] )
  
  const [cities, setCity] = useState([])
  
  return (
    
    <div className={styles.main}> 
    <Card />
   
   <p>
     {cities.name}, {cities.weather[0].description}
   </p>

    </div>
  )
}

export default Main


/// key 992c1f2ef9fa5dbd0f8cd57296cac07b

//  https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=992c1f2ef9fa5dbd0f8cd57296cac07b