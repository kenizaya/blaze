import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import styles from '../styles/Ratings.module.css'

const Ratings = ({ ratings, reviews }) => {
  console.log(ratings, reviews)
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {ratings >= index + 1 ? (
          <BsStarFill />
        ) : ratings >= index - 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return (
    <div className={styles['ratings-wrapper']}>
      <div className={styles.ratings}>{stars}</div>
      <p className={styles.reviews}>({reviews} reviews)</p>
    </div>
  )
}

export default Ratings
