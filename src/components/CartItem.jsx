import React from 'react'
import { FaTrash } from 'react-icons/fa'
import cn from 'classnames'
import { useCartContext } from '../context/cart_context'
import styles from '../styles/CartItem.module.css'
import { formatPrice } from '../utils/helpers'
import { AmountButtons } from '../components'
import { Link } from 'react-router-dom'

const CartItem = ({ id, name, image, color, amount, price }) => {
  const { removeItemFromCart, changeCartItemAmount } = useCartContext()

  const increase = () => {
    changeCartItemAmount(id, 'inc')
  }
  const decrease = () => {
    changeCartItemAmount(id, 'dec')
  }

  return (
    <article className={styles.article}>
      <div className={styles.title}>
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className={styles.img} />{' '}
        </Link>
        <div>
          <Link to={`/product/${id}`}>
            <h5 className={cn(styles.name, styles.h5)}>{name}</h5>
          </Link>
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
        onClick={() => removeItemFromCart(id)}
      >
        <FaTrash />
      </button>
    </article>
  )
}

export default CartItem
