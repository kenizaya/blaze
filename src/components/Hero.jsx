import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/aboutImg.jpg'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.section}>
      <article className={styles.content}>
        <h1 className={styles.h1}>Stand Out</h1>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
          illum! Enim natus deleniti illum, porro nulla expedita unde minus
          magnam ratione, repellat placeat nesciunt corporis, fuga distinctio.
          Alias, repudiandae accusamus!
        </p>
        <Link to='/products' className={styles.heroBtn}>
          {' '}
          SHOP NOW
        </Link>
      </article>

      <article className={styles.imgContainer}>
        <img src={heroImg} alt='clothes' className={styles.mainImg} />
      </article>
    </section>
  )
}

export default Hero
