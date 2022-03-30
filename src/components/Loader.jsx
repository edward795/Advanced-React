import React from 'react'
import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <div>
        <div className={styles.loader}></div>
        <div className={styles.overlay}></div>
    </div>
  )
}
