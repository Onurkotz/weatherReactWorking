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
    
      <h1 className={styles.head}>{cities.name}</h1>
    
      <Card day="Pazazrtesi" temp={Math.round(cities.main.temp)} desc={cities.weather[0].description} />
      <Card day="Pazazrtesi" temp="25" desc="Bulutlu" />
      <Card day="Pazazrtesi" temp="25" desc="Bulutlu" />
      <Card day="Pazazrtesi" temp="25" desc="Bulutlu" />
      <Card day="Pazazrtesi" temp="25" desc="Bulutlu" />

    
    
    </div>
  )
}

export default Main


/// key 992c1f2ef9fa5dbd0f8cd57296cac07b

//  https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=992c1f2ef9fa5dbd0f8cd57296cac07b

//// <p>{cities.name}, </p>