import React from 'react'
import { StripeCheckout } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import styles from '../styles/Checkout.module.css'

const Checkout = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <div className={styles.container}>
        {cart.length < 1 ? (
          <div className={styles.empty}>
            <h2>Your cart is empty</h2>
            <Link to='/products'>
              <button className={styles.btn} type='button'>
                Browse more
              </button>
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </main>
  )
}

export default Checkout
