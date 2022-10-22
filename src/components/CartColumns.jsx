import React from 'react'
import styles from '../styles/CartColumns.module.css'

const CartColumns = () => {
  return (
    <div className={styles.div}>
      <div className={styles.content}>
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
      </div>
      <hr />
    </div>
  )
}

export default CartColumns
