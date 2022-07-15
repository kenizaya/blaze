import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/'>Home</Link>
      <Link to='products'>Products</Link>
      <Link to='contact'>Contact</Link>
    </nav>
  )
}

export default Navbar
