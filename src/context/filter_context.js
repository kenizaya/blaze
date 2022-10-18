import { useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import { LOAD_PRODUCTS } from '../actions'
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from './products_context'

const initialState = {
  filteredProducts: [],
  allProducts: [],
}

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilteredContext = () => useContext(FilterContext)
