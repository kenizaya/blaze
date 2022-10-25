import React from 'react'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import styles from '../styles/Product.module.css'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useWishlistContext } from '../context/wishlist_context'
import { AddToCartButton } from '../components'
import Ratings from './Ratings'

const Product = ({ product }) => {
  const { hasWishlisted, toggleWishlistItem } = useWishlistContext()
  const { id, price, image, name, ratings, reviews } = product

  return (
    <div className={styles['product-card']}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className={styles.img} />
        <h4 className={styles.name}>{name}</h4>
      </Link>

      <Ratings ratings={ratings} reviews={reviews} />

      <div className={styles['price-wrapper']}>
        <span className={styles.price}>{formatPrice(price)}</span>
        <div className={styles['wishlist-cart-wrapper']}>
          <span className={styles.wishlist}>
            {hasWishlisted(id) ? (
              <BsHeartFill onClick={() => toggleWishlistItem(id, product)} />
            ) : (
              <BsHeart onClick={() => toggleWishlistItem(id, product)} />
            )}
          </span>
          <span className={styles.btn}>
            <AddToCartButton product={product} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product
