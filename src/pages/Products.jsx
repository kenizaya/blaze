import React, { useEffect, useState } from 'react'
import { sweatshirts } from '../data/sweatshirts'
import Product from '../components/Product'
import styles from '../styles/Products.module.css'
import { useOutletContext } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState(sweatshirts)
  const [cart, setCart] = useOutletContext()

  const handleIncrease = (id) => {
    setProducts((prevProduct) => {
      const newProduct = prevProduct.map((product) => {
        if (product.id === id) {
          return { ...product, qty: parseInt(product.qty || 0) + 1 }
        }
        return product
      })
      return newProduct
    })
    console.log(id)
  }

  const handleDecrease = (id) => {
    setProducts((prevProduct) => {
      const newProduct = prevProduct.map((product) => {
        if (product.id === id && product.qty > 0) {
          return { ...product, qty: parseInt(product.qty || 0) - 1 }
        }
        return product
      })
      return newProduct
    })
  }

  const handleChange = (e, id) => {
    console.log(e.target.value)
    setProducts((prevProduct) => {
      const newProduct = prevProduct.map((product) => {
        if (product.id === id && product.qty >= 0) {
          return { ...product, qty: parseInt(e.target.value) || '' }
        }
        return product
      })
      return newProduct
    })
  }

  useEffect(() => {
    setCart({
      ...cart,
      items: products.filter((product) => product.qty > 0),
      totalItems: products.reduce((prev, cur) => prev + cur.qty, 0),
      totalPrice: products.reduce((prev, cur) => prev + cur.qty * cur.price, 0),
      isFilled: products.some((product) => product.qty > 0),
    })
  }, [products])

  return (
    <div className={styles.productsContainer}>
      {products.map((item) => (
        <Product
          key={item.id}
          {...item}
          onIncrease={(id) => handleIncrease(id)}
          onDecrease={(id) => handleDecrease(id)}
          onChange={(e, id) => handleChange(e, id)}
        />
      ))}
    </div>
  )
}

export default Products
