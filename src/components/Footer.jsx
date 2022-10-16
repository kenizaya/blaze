import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      Copyright © {new Date().getFullYear() + ' '}
      <a href='https://github.com/kenizaya' target='_blank' rel='noreferrer'>
        kenizaya
      </a>
      <h5>All rights reserved</h5>
    </div>
  )
}

export default Footer
