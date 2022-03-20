import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
//import { useQuery } from "react-query";

import Card from "./card";

function Main({ city }) {
  const [citem, setCitem] = useState([]);

  useEffect(() => {
    console.log("çalıştı");
    axios
      .get("https://api.collectapi.com/weather/getWeather", {
        params: {
          "data.lang": "tr",
          "data.city": "İstanbul",
        },
        headers: {
          authorization: "apikey 350nXCr84vVRp6Davo8z8T:2sPJhdyElZSWpA80zEw6Kr",
          "content-type": "application/json",
        },
      })
      .then(({ data }) => setCitem(data));
  }, []);

  return (
    <div>
      <h1 className={styles.head}> {citem.city} </h1>
      <Card
        icon={citem.result[0].icon}
        day={citem.result[0].day}
        temp={Math.round(citem.result[0].degree)}
        desc={citem.result[0].description}
      />
      <Card
        icon={citem.result[1].icon}
        day={citem.result[1].day}
        temp={Math.round(citem.result[2].degree)}
        desc={citem.result[1].description}
      />
      <Card
        icon={citem.result[2].icon}
        day={citem.result[2].day}
        temp={Math.round(citem.result[3].degree)}
        desc={citem.result[2].description}
      />
      <Card
        icon={citem.result[3].icon}
        day={citem.result[3].day}
        temp={Math.round(citem.result[4].degree)}
        desc={citem.result[3].description}
      />
      <Card
        icon={citem.result[4].icon}
        day={citem.result[4].day}
        temp={Math.round(citem.result[5].degree)}
        desc={citem.result[4].description}
      />
    </div>
  );
}

export default Main;
