import React from 'react'
import { BsBag, BsBagFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import styles from '../styles/CartLoginButtons.module.css'

const CartLoginButtons = () => {
  const { closeSidebar } = useProductsContext()

  return (
    <div className={styles['cart-login-wraper']}>
      <Link to='/' className={styles.link}>
        Login
      </Link>
      <div className={styles['cart-icon']}>
        <Link to='cart' style={{ color: 'black' }} onClick={closeSidebar}>
          {0 ? (
            <>
              <BsBagFill />
              <div className={styles['cart-value']}></div>
            </>
          ) : (
            <BsBag />
          )}
        </Link>
      </div>
    </div>
  )
}

export default CartLoginButtons
