import React, { useState } from 'react'
import Button from './Button'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styles from '../styles/Product.module.css'

const Product = (props) => {
  const { price, src, qty, name, onClick } = props

  return (
    <div className={styles.productCard}>
      <img src={src} alt={name} />
      <p>{name}</p>
      <div className={styles.priceAndIcon}>
        <span className={styles.price}>${price}</span>
        <span className={styles.chevrons}>
          <Button>
            <BsChevronLeft className={styles.chevron} />
          </Button>
          <BsChevronLeft className={styles.chevron} />
          <span>{qty}</span>
          <Button onClick={(e, id) => onClick(e, props.id)}>
            <BsChevronRight className={styles.chevron} />
          </Button>
        </span>
      </div>
    </div>
  )
}

export default Product
