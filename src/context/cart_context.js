import { useContext, useReducer } from 'react'
import { createContext } from 'react'
import reducer from '../reducers/cart_reducer'

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 9.99,
}
const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
