import React from 'react'
import Button from '../components/Button'
import manCover from '../assets/man-cover.jpg'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.coverImage}>
        <img src={manCover} alt='sale' />
        <Button text='Shop Now' className={styles.shopBtn} />
      </div>
    </main>
  )
}

export default Home
