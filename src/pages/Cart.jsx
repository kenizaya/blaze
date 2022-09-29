import React, { useContext } from 'react'
import CartProduct from '../components/CartProduct'
import styles from '../styles/Cart.module.css'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'

const Cart = () => {
  const { cart, clearCart, handleChange, handleIncrease, handleDecrease } =
    useContext(GlobalContext)

  const navigate = useNavigate()

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
          {' '}
          {cart.totalPrice ? (
            <>
              <div>Total = ${cart.totalPrice.toFixed(2)}</div>
              <button
                className={styles.checkoutBtn}
                onClick={() => {
                  navigate('/')
                }}
              >
                Checkout
              </button>{' '}
            </>
          ) : (
            <div className={styles.emptyCart}>
              <h2 className={styles.h2}> Your cart is empty</h2>{' '}
              <button
                className={styles.continueShoppingBtn}
                onClick={() => navigate('/products')}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
