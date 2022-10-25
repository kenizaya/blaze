import React from 'react'
import { BsBag, BsBagFill, BsHeart, BsHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import { useProductsContext } from '../context/products_context'
import { useWishlistContext } from '../context/wishlist_context'
import { useAuth0 } from '@auth0/auth0-react'
import styles from '../styles/CartLoginButtons.module.css'

const CartLoginButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { totalItems } = useCartContext()
  const { wishlist } = useWishlistContext()
  const { loginWithRedirect, user, logout } = useAuth0()

  return (
    <div className={styles['cart-login-wraper']}>
      <span className={styles['wishlist-icon']}>
        <Link to='/wishlist' style={{ color: 'black' }} onClick={closeSidebar}>
          {wishlist.length > 0 ? (
            <BsHeartFill size={'20px'} />
          ) : (
            <BsHeart size={'20px'} />
          )}
        </Link>
      </span>
      <span className={styles['cart-icon']}>
        <Link to='/cart' style={{ color: 'black' }} onClick={closeSidebar}>
          {totalItems ? (
            <span>
              <BsBagFill size={'20px'} />
              <span className={styles['cart-value']}>{totalItems}</span>
            </span>
          ) : (
            <BsBag size={'20px'} />
          )}
        </Link>
      </span>

      {user ? (
        <button
          className={styles['auth-btn']}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      ) : (
        <button className={styles['auth-btn']} onClick={loginWithRedirect}>
          Login
        </button>
      )}
    </div>
  )
}

export default CartLoginButtons
