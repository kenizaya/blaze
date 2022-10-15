import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsBag, BsBagFill } from 'react-icons/bs'
import GlobalContext from '../context/GlobalContext'
import logo from '../assets/logo.png'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const { cart } = useContext(GlobalContext)

  return (
    <nav className={styles.navbar}>
      <Link to='/' className={styles.logo}>
        <img className={styles.logo} src={logo} alt='Logo' />
      </Link>
      <ul className={styles['nav-links']}>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to='products'
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
          }
        >
          Products
        </NavLink>
        <NavLink
          to='about'
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
          }
        >
          About
        </NavLink>
      </ul>

      <div className={styles['cart-login-wraper']}>
        <Link to='/' className={styles.link}>
          Login
        </Link>
        <div className={styles.cartIcon}>
          <Link to='cart' style={{ color: 'black' }}>
            {cart.isFilled ? (
              <>
                <BsBagFill />
                <div className={styles.cartValue}>{cart.totalItems}</div>
              </>
            ) : (
              <BsBag />
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
