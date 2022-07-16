import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BsBag, BsBagFill } from 'react-icons/bs'
import { MdArrowRight } from 'react-icons/md'
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
      <Link to='cart' style={{ color: 'black' }}>
        <div className={styles.cartIcon}>
          {cart.isFilled ? (
            <>
              <BsBagFill />
              <div className={styles.cartTotal}>{cart.totalItems}</div>
            </>
          ) : (
            <BsBag />
          )}
        </div>
      </Link>
    </header>
  )
}

export default Header
