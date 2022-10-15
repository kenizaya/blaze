import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Error.module.css'

const Error = () => {
  return (
    <main className={styles.errorContainer}>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page doesn't exist</h3>
        <Link to='/'>Back Home</Link>
      </section>
    </main>
  )
}

export default Error