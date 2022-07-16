import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BsBag, BsBagFill } from 'react-icons/bs'
import styles from '../styles/Header.module.css'

const Header = ({ cart }) => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to='/' className={styles.logo}>
          Blaze
        </Link>
      </h1>
      <Navbar />
      <div className={styles.cartIcon}>
        <div className={styles.cartTotal}>
          {cart.isFilled && cart.totalItems}
        </div>
        {cart.isFilled ? <BsBagFill /> : <BsBag />}
      </div>
    </header>
  )
}

export default Header
