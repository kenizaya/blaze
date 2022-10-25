import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { links } from '../utils/constants'
import { CartLoginButtons } from '../components'
import styles from '../styles/Navbar.module.css'
import cn from 'classnames'
import { useProductsContext } from '../context/products_context'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { user } = useAuth0()
  const { openSidebar } = useProductsContext()

  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-header']}>
        <Link to='/' className={styles.logo}>
          <img className={styles.logo} src={logo} alt='Logo' />
        </Link>
        <button
          type='button'
          className={styles['nav-toggle']}
          onClick={openSidebar}
        >
          <FaBars />
        </button>
      </div>
      <ul className={styles['nav-links']}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  isActive ? cn(styles.active, styles.link) : styles.link
                }
              >
                {link.text}
              </NavLink>
            </li>
          )
        })}
        {user && (
          <li>
            <NavLink
              to='/checkout'
              className={({ isActive }) =>
                isActive ? cn(styles.active, styles.link) : styles.link
              }
            >
              Checkout
            </NavLink>
          </li>
        )}
      </ul>
      <div className={styles['cart-login-wrapper']}>
        <CartLoginButtons />
      </div>
    </nav>
  )
}

export default Navbar
