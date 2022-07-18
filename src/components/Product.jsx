import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styles from '../styles/Product.module.css'

const Product = (props) => {
  const { id, price, src, qty, name, onIncrease, onDecrease, onChange } = props

  return (
    <div className={styles.productCard}>
      <img src={src} alt={name} className={styles.img} />
      <h4>{name}</h4>
      <div className={styles.priceAndIcon}>
        <span className={styles.price}>${price}</span>
        <span className={styles.chevrons}>
          <button className={styles.chevron} onClick={() => onDecrease(id)}>
            <BsChevronLeft />
          </button>
          <input
            type='number'
            value={qty}
            className={styles.inputQty}
            onChange={(e) => onChange(e, id)}
          />
          <button className={styles.chevron} onClick={() => onIncrease(id)}>
            <BsChevronRight />
          </button>
        </span>
      </div>
    </div>
  )
}

export default Product
