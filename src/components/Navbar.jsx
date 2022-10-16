import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { links } from '../utils/constants'
import CartLoginButtons from './CartLoginButtons'
import styles from '../styles/Navbar.module.css'
import { useProductsContext } from '../context/products_context'

const Navbar = () => {
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
            <NavLink
              key={link.id}
              to={link.url}
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
              }
            >
              {link.text}
            </NavLink>
          )
        })}
      </ul>
      <CartLoginButtons />
    </nav>
  )
}

export default Navbar
