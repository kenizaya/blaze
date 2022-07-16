import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
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
    </nav>
  )
}

export default Navbar
