import React from 'react'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import styles from '../styles/Product.module.css'

const Product = (props) => {
  const { id, price, image, qty, name, onIncrease, onDecrease, onChange } =
    props

  return (
    <div className={styles['product-card']}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className={styles.img} />
      </Link>

      <h4 className={styles.name}>{name}</h4>
      <span className={styles.price}>{formatPrice(price)}</span>
    </div>
  )
}

export default Product
