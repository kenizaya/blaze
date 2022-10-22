import React from 'react'
import { FaTrash } from 'react-icons/fa'
import cn from 'classnames'
import { useCartContext } from '../context/cart_context'
import styles from '../styles/CartItem.module.css'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'

const CartItem = ({ id, name, image, color, amount, price }) => {
  const { removeItem, changeAmount } = useCartContext()

  const increase = () => {
    changeAmount(id, 'inc')
  }
  const decrease = () => {
    changeAmount(id, 'dec')
  }

  return (
    <article className={styles.article}>
      <div className={styles.title}>
        <img src={image} alt={name} className={styles.img} />
        <div>
          <h5 className={cn(styles.name, styles.h5)}>{name}</h5>
          <p className={styles.color}>
            Color: <span style={{ background: color }}></span>
          </p>
          <h5 className={styles['price-small']}>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className={cn(styles.price, styles.h5)}>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />

      <h5 className={cn(styles.subtotal, styles.h5)}>
        {formatPrice(price * amount)}
      </h5>
      <button
        type='button'
        className={styles['remove-btn']}
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  )
}

export default CartItem
