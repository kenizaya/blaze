import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import styles from '../styles/AddToCart.module.css'

const AddToCart = ({ product }) => {
  const { stock, id, color } = product

  return (
    <section>
      <div className={styles.colors}>
        <span>Colors : </span>
        <button style={{ background: color }} className={styles.color}>
          <FaCheck color={color === 'white' ? 'black' : '#f7f7f7'} />
        </button>
      </div>
    </section>
  )
}

export default AddToCart
