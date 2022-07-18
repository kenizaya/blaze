import React from 'react'
import aboutImg from '../assets/aboutImg.jpg'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <main>
      <section className={styles.section}>
        <img src={aboutImg} alt='clothes' className={styles.img} />
        <article>
          <div className={styles.title}>
            <h2>Our Story</h2>
            <div className={styles.underline}></div>
          </div>
          <p className={styles.about}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            cupiditate atque voluptates quidem rerum quia ipsum voluptatum
            numquam reiciendis ab perspiciatis libero repellendus odio quos
            ullam possimus voluptatem optio quod at magni, aperiam perferendis
            consequuntur praesentium. Saepe doloribus error, labore recusandae
            id, quia eligendi veniam officia aliquid in sunt! Placeat est sequi
            vero nulla laboriosam modi corrupti veritatis adipisci.
          </p>
        </article>
      </section>
    </main>
  )
}

export default About
