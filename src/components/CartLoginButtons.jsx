import React from 'react'
import { BsBag, BsBagFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import { useProductsContext } from '../context/products_context'
import styles from '../styles/CartLoginButtons.module.css'

const CartLoginButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { totalItems } = useCartContext()

  return (
    <div className={styles['cart-login-wraper']}>
      <Link to='/' className={styles.link}>
        Login
      </Link>
      <span className={styles['cart-icon']}>
        <Link to='/cart' style={{ color: 'black' }} onClick={closeSidebar}>
          {totalItems ? (
            <span>
              <BsBagFill />
              <span className={styles['cart-value']}>{totalItems}</span>
            </span>
          ) : (
            <BsBag />
          )}
        </Link>
      </span>
    </div>
  )
}

export default CartLoginButtons
