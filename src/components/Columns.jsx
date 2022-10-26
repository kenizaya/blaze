import React from 'react'
import styles from '../styles/Columns.module.css'

const Columns = () => {
  return (
    <div className={styles.div}>
      <div className={styles.content}>
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <span></span>
        <span></span>
      </div>
      <hr />
    </div>
  )
}

export default Columns
