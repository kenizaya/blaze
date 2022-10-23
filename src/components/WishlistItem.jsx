import React from 'react'
import { FaTrash } from 'react-icons/fa'
import cn from 'classnames'
import { useWishlistContext } from '../context/wishlist_context'
import styles from '../styles/WishlistItem.module.css'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import AddToCartButton from './AddToCartButton'

const WishlistItem = ({ product }) => {
  const { id, name, image, color, price } = product
  const { removeItemFromWishlist, changeWishlistItemAmount } =
    useWishlistContext()

  const increase = () => {
    changeWishlistItemAmount(id, 'inc')
  }
  const decrease = () => {
    changeWishlistItemAmount(id, 'dec')
  }

  return (
    <article className={styles.article}>
      <div className={styles.title}>
        <img src={image} alt={name} className={styles.img} />
        <div>
          <h5 className={cn(styles.name, styles.h5)}>{name}</h5>
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
        <FaTrash />
      </button>
      <AddToCartButton product={product} />
    </article>
  )
}

export default WishlistItem
