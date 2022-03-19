import { useState, useEffect } from "react";
import Navbar from "../Navbar/index";
import Main from "../Main/index";
import {useTheme} from "../../myContext"
import Styles from "../../style.css"

function Page() {

  const {theme} = useTheme()
  console.log(theme)
  const [cityName, setCityName] = useState({
    id: 1,
    name: "Adana",
    latitude: "37.0000",
    longitude: "35.3213",
    population: 2183167,
    region: "Akdeniz",
  });

  return (
    <div  style={{backgroundColor: `${theme}`}}>
      <Navbar addCity={setCityName} />
      <Main cityInner={cityName} />
    </div>
  );
}

export default Page;
