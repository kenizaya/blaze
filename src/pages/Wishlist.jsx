import React from 'react'
import { Link } from 'react-router-dom'
import { WishlistContent } from '../components'
import { useWishlistContext } from '../context/wishlist_context'
import styles from '../styles/Cart.module.css'

const Wishlist = () => {
  const { wishlist } = useWishlistContext()

  if (wishlist.length < 1) {
    return (
      <main className={styles.main}>
        <div className={styles.empty}>
          <h2>Your wishlist is empty</h2>
          <button type='button' className={styles.btn}>
            <Link to='/products'>Browse Products</Link>
          </button>
        </div>
      </main>
    )
  }
  return (
    <main className={styles.main}>
      <WishlistContent />
    </main>
  )
}

export default Wishlist
