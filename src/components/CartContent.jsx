import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { useCartContext } from '../context/cart_context'
import styles from '../styles/CartContent.module.css'
import { CartColumns, CartItem, CartTotal } from '../components'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()
  console.log(cart)
  return (
    <section className={styles.section}>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className={styles['link-container']}>
        <button type='button' className={styles['link-btn']}>
          <Link to='/products'>Continue Shopping</Link>
        </button>
        <button
          type='button'
          className={cn(styles['link-btn'], styles['clear-btn'])}
          onClick={clearCart}
        >
          Remove All Items
        </button>
      </div>
      <CartTotal />
    </section>
  )
}

export default CartContent
