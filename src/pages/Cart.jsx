import React, { useContext } from 'react'
import Product from '../components/Product'
import styles from '../styles/Products.module.css'
import GlobalContext from '../GlobalContext'

const Cart = () => {
  const { cart, handleChange, handleIncrease, handleDecrease } =
    useContext(GlobalContext)

  return (
    <>
      <div className={styles.productsContainer}>
        {cart.items.map((item) => (
          <Product
            key={item.id}
            {...item}
            onIncrease={(id) => handleIncrease(id)}
            onDecrease={(id) => handleDecrease(id)}
            onChange={(e, id) => handleChange(e, id)}
          />
        ))}
      </div>

      <div>Total ${cart.totalPrice.toFixed(2)}</div>
    </>
  )
}

export default Cart
