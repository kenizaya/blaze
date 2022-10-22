import React from 'react'
import { Link } from 'react-router-dom'
import { CartContent } from '../components'
import { useCartContext } from '../context/cart_context'
import styles from '../styles/Cart.module.css'

const Cart = () => {
  const { cart } = useCartContext()

  if (cart.length < 1) {
    return (
      <main className={styles.main}>
        <div className={styles.empty}>
          <h2>Your cart is empty</h2>
          <button type='button' className={styles.btn}>
            <Link to='/products'>Browse Products</Link>
          </button>
        </div>
      </main>
    )
  }
  return (
    <main className={styles.main}>
      <CartContent />
    </main>
  )
}

export default Cart
