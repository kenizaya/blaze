import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import styles from '../styles/CartTotal.module.css'
import { useAuth0 } from '@auth0/auth0-react'

const CartTotal = () => {
  const { user, loginWithRedirect } = useAuth0()
  const { totalAmount, shippingFee } = useCartContext()

  return (
    <section className={styles.section}>
      <div>
        <article className={styles.article}>
          <h5 className={styles.h5}>
            Subtotal: <span>{formatPrice(totalAmount)}</span>
          </h5>

          <p className={styles.p}>
            Shipping Fee: <span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4 className={styles.h4}>
            Order Total: <span>{formatPrice(totalAmount + shippingFee)}</span>
          </h4>
        </article>

        {user ? (
          <Link to='/checkout'>
            <button type='button' className={styles.btn}>
              Checkout
            </button>
          </Link>
        ) : (
          <button
            type='button'
            className={styles.btn}
            onClick={loginWithRedirect}
          >
            Login
          </button>
        )}
      </div>
    </section>
  )
}

export default CartTotal
