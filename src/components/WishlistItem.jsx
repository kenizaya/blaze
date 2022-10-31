import React from 'react'
import cn from 'classnames'
import { useWishlistContext } from '../context/wishlist_context'
import styles from '../styles/WishlistItem.module.css'
import { formatPrice } from '../utils/helpers'
import AddToCartButton from './AddToCartButton'
import { Link } from 'react-router-dom'

const WishlistItem = ({ product }) => {
  const { id, name, image, color, price } = product
  const { removeItemFromWishlist } = useWishlistContext()

  return (
    <article className={styles.article}>
      <div className={styles.title}>
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className={styles.img} />
        </Link>
        <div>
          <Link to={`/product/${id}`}>
            <h5 className={cn(styles.name, styles.h5)}>{name}</h5>
          </Link>

          <p className={styles.color}>
            Color: <span style={{ background: color }}></span>
          </p>
          <h5 className={styles['price-small']}>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className={cn(styles.price, styles.h5)}>{formatPrice(price)}</h5>
      <button
        type='button'
        className={styles['remove-btn']}
        onClick={() => removeItemFromWishlist(id)}
      >
        Remove Item
      </button>
      <AddToCartButton product={product} />
    </article>
  )
}

export default WishlistItem
