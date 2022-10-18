import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import styles from '../styles/AmountButtons.module.css'

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className={styles['amount-btns']}>
      <button type='button' className={styles['amount-btn']} onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className={styles.amount}>{amount}</h2>
      <button type='button' className={styles['amount-btn']} onClick={increase}>
        <FaPlus />
      </button>
    </div>
  )
}

export default AmountButtons
