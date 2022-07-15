import React from 'react'
import Navbar from './Navbar'
import { BsBag, BsBagFill } from 'react-icons/bs'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Blaze</h1>
      <Navbar />
      <BsBag className={styles.cartIcon} />
    </header>
  )
}

export default Header
