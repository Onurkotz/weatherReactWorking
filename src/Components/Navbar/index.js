import styles from "./styles.module.css";
import { useEffect, useState, useContext } from "react";
import { Switch } from "@chakra-ui/react";
import { useFormik } from "formik";
import province from "../Page/cities.json";
import {useTheme} from "../../myContext"


function Navbar({ addCity }) {

  const {theme, setTheme} = useTheme()

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      latitude: "",
      longitude: "",
      population: "",
      region: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      addCity( {values} );
    },
  });

  return (
    
    <div className={styles.nav}>
      <span className={styles.fl}>
        <p>Şehrini Seç</p>
        <select component="select"  name="name" onChange={formik.handleChange}>
          {province.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        <button type="submit" onSubmit={formik.handleSubmit}>Ara</button>
      </span>

      <span className={styles.fl}>
        <p style={{ marginTop: "-3px" }}>Koyu Tema {theme}</p>
        <Switch onChange={() => setTheme(theme === "red" ? "blue" : "red")} colorScheme="red" id="email-alerts" />
      </span>
    </div>
    
  );
}

export default Navbar;
