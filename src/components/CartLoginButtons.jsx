import React, { useContext } from 'react'
import { BsBag, BsBagFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'
import styles from '../styles/CartLoginButtons.module.css'

const CartLoginButtons = () => {
  const { cart } = useContext(GlobalContext)

  return (
    <div className={styles['cart-login-wraper']}>
      <Link to='/' className={styles.link}>
        Login
      </Link>
      <div className={styles['cart-icon']}>
        <Link to='cart' style={{ color: 'black' }}>
          {cart.isFilled ? (
            <>
              <BsBagFill />
              <div className={styles['cart-value']}>{cart.totalItems}</div>
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
