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
      {console.log(cart.total)}
      {cart.isFilled ? (
        <BsBagFill className={styles.cartIcon} />
      ) : (
        <BsBag className={styles.cartIcon} />
      )}
    </header>
  )
}

export default Header
