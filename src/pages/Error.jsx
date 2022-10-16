import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Error.module.css'

const Error = () => {
  return (
    <main className={styles['error-container']}>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page doesn't exist</h3>
        <button type='button' className={styles.btn}>
          <Link to='/'>Back Home</Link>
        </button>
      </section>
    </main>
  )
}

export default Error
