import React, { useEffect, useState } from 'react'
import { sweatshirts } from '../data/sweatshirts'
import Product from '../components/Product'
import styles from '../styles/Products.module.css'

const Products = () => {
  const [products, setProducts] = useState(sweatshirts)

  const handleIncrease = (e, id) => {
    setProducts((prevProduct) => {
      const newProduct = prevProduct.map((product) => {
        if (product.id === id) {
          return { ...product, qty: product.qty + 1 }
        }
        return product
      })
      return newProduct
    })
  }

  const handleDecrease = (e, id) => {
    setProducts((prevProduct) => {
      const newProduct = prevProduct.map((product) => {
        if (product.id === id && product.qty > 0) {
          return { ...product, qty: product.qty - 1 }
        }
        return product
      })
      return newProduct
    })
  }
  useEffect(() => {
    console.log(products)
  }, [products])
  return (
    <div className={styles.productsContainer}>
      {products.map((item) => (
        <Product
          key={item.id}
          {...item}
          onIncrease={(e, id) => handleIncrease(e, id)}
          onDecrease={(e, id) => handleDecrease(e, id)}
        />
      ))}
    </div>
  )
}

export default Products
