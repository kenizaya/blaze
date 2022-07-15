import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Blaze</h1>
      <Navbar />
    </header>
  )
}

export default Header
