import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BsBag, BsBagFill } from 'react-icons/bs'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to='/' className={styles.logo}>
          Blaze
        </Link>
      </h1>
      <Navbar />
      <BsBag className={styles.cartIcon} />
    </header>
  )
}

export default Header
