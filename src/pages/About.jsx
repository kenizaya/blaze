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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat
            earum blanditiis voluptas provident illo inventore recusandae quod
            obcaecati! Accusamus, amet beatae enim rem corrupti accusantium
            autem ipsum deserunt esse quibusdam ipsam impedit aut eligendi sequi
            ullam consequuntur consequatur similique qui labore. Excepturi
            exercitationem assumenda earum provident aspernatur iure neque.
          </p>
        </article>
      </section>
    </main>
  )
}

export default About
