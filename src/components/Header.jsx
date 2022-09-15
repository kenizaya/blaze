import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BsBag, BsBagFill } from 'react-icons/bs'
import styles from '../styles/Header.module.css'
import GlobalContext from '../context/GlobalContext'

const Header = () => {
  const { cart } = useContext(GlobalContext)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>
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
                <div className={styles.cartValue}>{cart.totalItems}</div>
              </>
            ) : (
              <BsBag />
            )}
          </div>
        </Link>
      </header>
    </div>
  )
}

export default Header
