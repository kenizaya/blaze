import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { useWishlistContext } from '../context/wishlist_context'
import styles from '../styles/WishlistContent.module.css'
import { Columns, WishlistItem } from '../components'

const WishlistContent = () => {
  const { wishlist, clearWishlist } = useWishlistContext()
  return (
    <section className={styles.section}>
      {/* <Columns /> */}
      <h3 className={styles.title}>Wishlist</h3>
      <hr style={{ marginBottom: '50px' }} />
      {wishlist.map((item) => (
        <WishlistItem key={item.id} product={item} />
      ))}
      <hr />
      <div className={styles['link-container']}>
        <button type='button' className={styles['link-btn']}>
          <Link to='/products'>Continue Shopping</Link>
        </button>
        <div className={styles['btn-wrapper']}>
          <button
            type='button'
            className={cn(styles['link-btn'], styles['clear-btn'])}
            onClick={clearWishlist}
          >
            Remove All Items
          </button>
          <button
            type='button'
            className={cn(styles['link-btn'], styles['cart-btn'])}
            onClick={clearWishlist}
          >
            Go To Cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default WishlistContent
