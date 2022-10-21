import { useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import {
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from '../actions'
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from './products_context'

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sort: 'price-high',
  filters: {
    text: '',
    category: '',
    color: 'all',
    minPrice: 0,
    maxPrice: 0,
    price: 0,
  },
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

  const updateFilters = (e) => {
    const { name, value } = e.target
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  const clearFilters = (e) => {}

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [state.sort, state.filters])

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilteredContext = () => useContext(FilterContext)
