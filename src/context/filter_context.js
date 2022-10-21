import { useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from '../actions'
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from './products_context'

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sort: 'price-high',
}

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW })
  }

  const updateSort = (e) => {
    const { name, value } = e.target
    dispatch({ type: UPDATE_SORT, payload: { name, value } })
  }

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })
  }, [state.sort])

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilteredContext = () => useContext(FilterContext)
