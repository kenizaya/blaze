import { useContext, useReducer } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import {
  ADD_TO_CART,
  CHANGE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_ITEM_FROM_CART,
} from '../actions'
import reducer from '../reducers/cart_reducer'

const getCart = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
}

const initialState = {
  cart: getCart(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 999,
}
const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color, amount, product },
    })
  }

  const removeItemFromCart = (id) => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: id })
  }

  const changeCartItemAmount = (id, value) => {
    dispatch({ type: CHANGE_CART_ITEM_AMOUNT, payload: { id, value } })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItemFromCart,
        changeCartItemAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
