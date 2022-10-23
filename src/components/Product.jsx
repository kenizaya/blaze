import React from 'react'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import styles from '../styles/Product.module.css'
import { BsHeart } from 'react-icons/bs'
import { useWishlistContext } from '../context/wishlist_context'

const Product = ({ product }) => {
  const { addToWishlist } = useWishlistContext()
  const { id, price, image, name, color, amount } = product

  return (
    <div className={styles['product-card']}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className={styles.img} />
        <h4 className={styles.name}>{name}</h4>
      </Link>

      <div className={styles['price-wrapper']}>
        <span className={styles.price}>{formatPrice(price)}</span>
        <span className={styles.wishlist}>
          <BsHeart onClick={() => addToWishlist(id, color, amount, product)} />
        </span>
      </div>
    </div>
  )
}

export default Product
