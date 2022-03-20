import { useFormik } from "formik";
import React from "react";
import styles from "./styles.module.css";

function Navbar({ addCity }) {
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: (values) => {
      addCity(values);
    },
  });

  return (
    <div className={styles.nav}>
      <span className={styles.fl}>
        <p>Şehrini Seç</p>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="city"
            type="text"
            placeholder="Mesela 'Ankara'"
            onChange={formik.handleChange}
            value={formik.values.cityName}
          />
        </form>
      </span>
    </div>
  );
}

export default Navbar;
