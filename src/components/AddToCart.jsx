import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import styles from '../styles/AddToCart.module.css'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()
  const { stock, id, color } = product
  const [amount, setAmount] = useState(1)

  const increase = () => {
    if (amount < stock) setAmount((prevAmount) => prevAmount + 1)
  }

  const decrease = () => {
    if (amount > 1) setAmount((prevAmount) => prevAmount - 1)
  }

  return (
    <section>
      {stock > 0 ? (
        <>
          {' '}
          <div className={styles.colors}>
            <span>Colors : </span>
            <button style={{ background: color }} className={styles.color}>
              <FaCheck color={color === 'white' ? 'black' : '#f7f7f7'} />
            </button>
          </div>
          <div className={styles['amount-btn-wrapper']}>
            <AmountButtons
              amount={amount}
              increase={increase}
              decrease={decrease}
            />
            <button
              className={styles.btn}
              onClick={() => addToCart(id, color, amount, product)}
            >
              <Link to='/cart'>Add To Cart</Link>
            </button>
          </div>
        </>
      ) : (
        <button className={styles['browse-btn']}>
          <Link to='/products'>Browse other products</Link>
        </button>
      )}
    </section>
  )
}

export default AddToCart
