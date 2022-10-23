import React from 'react'
import { useCartContext } from '../context/cart_context'
import styles from '../styles/AddToCartButton.module.css'

const AddToCartButton = ({ product }) => {
  const { id, color } = product
  const { addToCart } = useCartContext()

  return (
    <button
      className={styles.btn}
      type='button'
      onClick={() => addToCart(id, color, 1, product)}
    >
      Add To Cart
    </button>
  )
}

export default AddToCartButton
