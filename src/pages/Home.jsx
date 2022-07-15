import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import manCover from '../assets/man-cover.jpg'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.coverImage}>
        <img src={manCover} alt='sale' />
        <Link to='products'>
          <Button text='Shop Now' className={styles.shopBtn} />
        </Link>
      </div>
    </main>
  )
}

export default Home
