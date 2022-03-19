import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";



import Card from "./card";

function Main({cityInner}) {
 
  console.log(cityInner)

  useEffect( () => {
    axios(`https://api.openweathermap.org/geo/1.0/direct?q=istanbul&limit=5&appid=992c1f2ef9fa5dbd0f8cd57296cac07b`)
    .then( (data) => console.log(data) )
  }, [])
  
  useEffect( () => {
    axios(`https://api.openweathermap.org/geo/1.0/direct?q=${cityInner.values.city}&limit=5&appid=992c1f2ef9fa5dbd0f8cd57296cac07b`)
    .then( (data) => console.log(data) )
  }, [cityInner])

  return (
    <div className={styles.main}>
      <h1 className={styles.head}>  </h1>

      <Card day="fgag" temp="5" desc="km" />
      <Card day="Pazazrtesi" temp="25" desc="Bulutlu" />
      <Card day="Pazazrtesi" temp="25" desc="Bulutlu" />
      <Card day="Pazazrtesi" temp="25" desc="Bulutlu" />
      <Card day="Pazazrtesi" temp="25" desc="Bulutlu" />
    </div>
  );
}

export default Main;

/// key 992c1f2ef9fa5dbd0f8cd57296cac07b

//  https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=992c1f2ef9fa5dbd0f8cd57296cac07b

//// <p>{cities.name}, </p>

/*   useEffect( () => {
    axios("https://api.openweathermap.org/geo/1.0/direct?q=istanbul&limit=5&appid=992c1f2ef9fa5dbd0f8cd57296cac07b")
    .then( (data) => console.log(data) )
  }, [])

  const [coor, setCoor] = useState([])
  
  useEffect( () => {
    axios("https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&lang=tr&appid=992c1f2ef9fa5dbd0f8cd57296cac07b")
    .then((res) => setCity(res.data) )
  }, [] )
  
  const [cities, setCity] = useState([])  */

/* useEffect( () => {
    axios("https://api.openweathermap.org/geo/1.0/direct?q=istanbul&limit=5&appid=992c1f2ef9fa5dbd0f8cd57296cac07b")
    .then( (coord) => 
      axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.data[0].lat}&lon=${coord.data[0].lon}&exclude=hourly&appid=992c1f2ef9fa5dbd0f8cd57296cac07b&lang=tr&units=metric`)
      .then( (data) => setCoor(data.data) ) )
  }, [])
  const [coor, setCoor] = useState([])

  //const coordApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${coor.lat}&lon=${coor.lon}&exclude=hourly&appid=992c1f2ef9fa5dbd0f8cd57296cac07b&lang=tr&units=metric`
  
  
  
  //const [cities, setCity] = useState([])
  */
