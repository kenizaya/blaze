import React from 'react'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styles from '../styles/Product.module.css'

const Product = (props) => {
  const { id, price, image, qty, name, onIncrease, onDecrease, onChange } =
    props

  return (
    <div className={styles['product-card']}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className={styles.img} />
      </Link>

      <h4>{name}</h4>
      <div className={styles['price-and-icon']}>
        <span className={styles.price}>{formatPrice(price)}</span>
      </div>
    </div>
  )
}

export default Product
