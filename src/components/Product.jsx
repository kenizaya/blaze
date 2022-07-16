import React, { useState } from 'react'
import Button from './Button'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styles from '../styles/Product.module.css'

const Product = (props) => {
  const { price, src, qty, name, onIncrease, onDecrease } = props

  return (
    <div className={styles.productCard}>
      <img src={src} alt={name} />
      <p>{name}</p>
      <div className={styles.priceAndIcon}>
        <span className={styles.price}>${price}</span>
        <span className={styles.chevrons}>
          <button
            className={styles.chevron}
            onClick={(e, id) => onDecrease(e, props.id)}
          >
            <BsChevronLeft />
          </button>
          <span>{qty}</span>
          <button
            className={styles.chevron}
            onClick={(e, id) => onIncrease(e, props.id)}
          >
            <BsChevronRight />
          </button>
        </span>
      </div>
    </div>
  )
}

export default Product
