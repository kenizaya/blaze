import { useContext, useReducer } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import {
  ADD_TO_WISHLIST,
  CHANGE_WISHLIST_ITEM_AMOUNT,
  CLEAR_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
} from '../actions'
import reducer from '../reducers/wishlist_reducer'

const getWishlist = () => {
  return localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist'))
    : []
}

const initialState = {
  wishlist: getWishlist(),
}
const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToWishlist = (id, color, amount, product) => {
    console.log(id, color, amount, product)
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: { id, color, product },
    })
  }

  const removeItemFromWishlist = (id) => {
    dispatch({ type: REMOVE_ITEM_FROM_WISHLIST, payload: id })
  }

  const changeWishlistItemAmount = (id, value) => {
    dispatch({ type: CHANGE_WISHLIST_ITEM_AMOUNT, payload: { id, value } })
  }

  const clearWishlist = () => {
    dispatch({ type: CLEAR_WISHLIST })
  }

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
  }, [state.wishlist])

  return (
    <WishlistContext.Provider
      value={{
        ...state,
        addToWishlist,
        removeItemFromWishlist,
        changeWishlistItemAmount,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlistContext = () => useContext(WishlistContext)
