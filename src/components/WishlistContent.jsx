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
      <Columns />
      {wishlist.map((item) => (
        <WishlistItem key={item.id} {...item} />
      ))}
      <hr />
      <div className={styles['link-container']}>
        <button type='button' className={styles['link-btn']}>
          <Link to='/products'>Continue Shopping</Link>
        </button>
        <button
          type='button'
          className={cn(styles['link-btn'], styles['clear-btn'])}
          onClick={clearWishlist}
        >
          Remove All Items
        </button>
      </div>
    </section>
  )
}

export default WishlistContent
