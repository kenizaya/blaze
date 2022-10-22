import { useContext, useReducer } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { ADD_TO_CART } from '../actions'
import reducer from '../reducers/cart_reducer'

const getLocalStorage = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
}

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 999,
}
const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }

  const removeItem = (id) => {}

  const changeAmount = (id, value) => {}

  const clearCart = () => {}

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, changeAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
