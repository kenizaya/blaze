import { useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions'
import { useContext } from 'react'
import { PRODUCTS } from '../data/PRODUCTS'

const { createContext } = require('react')

const initialState = {
  isSidebarOpen: false,
  products: PRODUCTS,
}
const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
