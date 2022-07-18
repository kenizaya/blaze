import React, { useContext } from 'react'
import CartProduct from '../components/CartProduct'
import styles from '../styles/Cart.module.css'
import GlobalContext from '../context/GlobalContext'

const Cart = () => {
  const { cart, handleChange, handleIncrease, handleDecrease } =
    useContext(GlobalContext)

  return (
    <>
      <div className={styles.cartContainer}>
        {cart.items.map((item) => (
          <div className={styles.cartProduct} key={item.id}>
            <CartProduct
              {...item}
              onIncrease={(id) => handleIncrease(id)}
              onDecrease={(id) => handleDecrease(id)}
              onChange={(e, id) => handleChange(e, id)}
            />
          </div>
        ))}
        <div className={styles.checkout}>
          <div>Total = ${cart.totalPrice.toFixed(2)}</div>
          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart
