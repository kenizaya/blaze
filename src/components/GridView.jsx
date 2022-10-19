import React from 'react'
import { Product } from '../components'
import styles from '../styles/GridView.module.css'

const GridView = ({ products }) => {
  return (
    <section className={styles['products-container']}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  )
}

export default GridView
