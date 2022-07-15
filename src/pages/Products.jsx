import React from 'react'
import { sweatshirts } from '../data/sweatshirts'
import styles from '../styles/Products.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      {sweatshirts.map((item) => {
        return (
          <div key={item.id} className={styles.productCard}>
            <img src={item.src} alt={item.name} />
            <p>{item.name}</p>
            <div className={styles.priceAndIcon}>
              <span className={styles.price}>${item.price}</span>
              <span>
                <BsChevronLeft />
                <BsChevronRight />
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
