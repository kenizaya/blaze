import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      Copyright © 2022{' '}
      <a href='https://github.com/kenizaya' target='_blank' rel='noreferrer'>
        kenizaya
      </a>
    </div>
  )
}

export default Footer
