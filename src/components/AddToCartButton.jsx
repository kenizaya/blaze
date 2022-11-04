import React from 'react'
import { useCartContext } from '../context/cart_context'
import styles from '../styles/AddToCartButton.module.css'

const AddToCartButton = ({ product }) => {
  const { id, color, stock } = product
  const { addToCart } = useCartContext()

  return stock > 0 ? (
    <button
      className={styles.btn}
      type='button'
      onClick={() => addToCart(id, color, 1, product)}
    >
      Add To Cart
    </button>
  ) : (
    <button
      className={styles.btn}
      style={{ background: '#a61b1b', color: '#f7f7f7', cursor: 'auto' }}
      type='button'
    >
      Out Of Stock
    </button>
  )
}

export default AddToCartButton
