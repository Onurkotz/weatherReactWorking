import React from 'react'
import styles from "./styles.module.css"

function Card() {
  return (
    <div>
    <h1 className={styles.head}>ŞEHİR</h1>
    <div className={styles.card}>
        <div>
          <img className={styles.pic} src="https://picsum.photos/150/150" alt="img" />
        </div>

        <div className={styles.city}>
          <h1>
            Ankara
          </h1>
        </div>

        <div className={styles.heat}>
          <h1>
            37°
          </h1>
        </div>

        <div className={styles.des}>
          <h1>
           Parçalı Bulutlu
          </h1>
        </div>
    </div>
    
    <div className={styles.card}>
        <div>
          <img className={styles.pic} src="https://picsum.photos/150/150" alt="img" />
        </div>

        <div className={styles.city}>
          <h1>
            Ankara
          </h1>
        </div>

        <div className={styles.heat}>
          <h1>
            37°
          </h1>
        </div>

        <div className={styles.des}>
          <h1>
           Parçalı Bulutlu
          </h1>
        </div>    
    </div>
    
    <div className={styles.card}>
        <div>
          <img className={styles.pic} src="https://picsum.photos/150/150" alt="img" />
        </div>

        <div className={styles.city}>
          <h1>
            Kahramanmaraş
          </h1>
        </div>

        <div className={styles.heat}>
          <h1>
          </h1>
            37°
        </div>

        <div className={styles.des}>
          <h1>
           Güneşli
          </h1>
        </div>
    </div>

    <div className={styles.card}>
        <div>
          <img className={styles.pic} src="https://picsum.photos/150/150" alt="img" />
        </div>

        <div className={styles.city}>
          <h1>
            Afyonkarahisar
          </h1>
        </div>

        <div className={styles.heat}>
          <h1>
            5°
          </h1>
        </div>

        <div className={styles.des}>
          <h1>
           Açık
          </h1>
        </div>
    </div>

    <div className={styles.card}>
        <div>
          <img className={styles.pic} src="https://picsum.photos/150/150" alt="img" />
        </div>

        <div className={styles.city}>
          <h1>
            Ankara
          </h1>
        </div>

        <div className={styles.heat}>
          <h1>
            37°
          </h1>
        </div>

        <div className={styles.des}>
          <h1>
           Hafif Şiddetli Kısa Yağmur
          </h1>
        </div>
    </div>
    
    </div>
  )
}

export default Card