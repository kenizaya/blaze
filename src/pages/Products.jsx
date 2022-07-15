import React from 'react'
import { sweatshirts } from '../data/sweatshirts'
import styles from '../styles/Products.module.css'

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      {sweatshirts.map((item) => {
        return (
          <div key={item.id} className={styles.productCard}>
            <img src={item.src} alt={item.name} />
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Products
