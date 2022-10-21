import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from '../actions'

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
      }
    }
    case SET_GRID_VIEW: {
      return { ...state, gridView: true }
    }
    case SET_LIST_VIEW: {
      return { ...state, gridView: false }
    }
    case UPDATE_SORT: {
      return { ...state, [action.payload.name]: action.payload.value }
    }
    case SORT_PRODUCTS: {
      const { sort, filteredProducts } = state
      let tempProducts = [...filteredProducts]

      if (sort === 'price-low') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price)
      } else if (sort === 'price-high') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price)
      } else if (sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
      } else if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name))
      }

      return { ...state, filteredProducts: tempProducts }
    }
    default:
      return state
  }
}

export default filter_reducer
