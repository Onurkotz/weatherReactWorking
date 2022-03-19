import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Switch } from "@chakra-ui/react";
import { useFormik } from "formik";


function Navbar({addCity}) {

  const formik = useFormik({
    initialValues: {
      city: "",
    },

    onSubmit: async (values) => {
 
      addCity({values})

    },
  });

  return (
    <div className={styles.nav}>
      <span className={styles.fl}>
        <p>Şehrini Seç</p>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="city"
            placeholder='Mesela "Ankara"'
            value={formik.values.city}
            onChange={formik.handleChange}
          />
        </form>
      </span>

      <span className={styles.fl}>
        <p style={{ marginTop: "-3px" }}>Koyu Tema</p>
        <Switch colorScheme="red" id="email-alerts" />
      </span>
    </div>
  );
}

export default Navbar;
