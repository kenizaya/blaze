import React from 'react'
import { Product } from '../components'
import styles from '../styles/GridView.module.css'

const GridView = ({ products }) => {
  return (
    <section className={styles['products-container']}>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          // onIncrease={(id) => handleIncrease(id)}
          // onDecrease={(id) => handleDecrease(id)}
          // onChange={(e, id) => handleChange(e, id)}
        />
      ))}
    </section>
  )
}

export default GridView
