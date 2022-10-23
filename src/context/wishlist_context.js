import { useContext, useReducer } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import {
  ADD_TO_WISHLIST,
  CLEAR_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
  UPDATE_WISHLISTED_ITEM_IDS,
} from '../actions'
import reducer from '../reducers/wishlist_reducer'

const getWishlist = () => {
  return localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist'))
    : []
}

const getWishlisttedItemIds = () => {
  return localStorage.getItem('wishlistedItemIds')
    ? JSON.parse(localStorage.getItem('wishlistedItemIds'))
    : []
}

const initialState = {
  wishlist: getWishlist(),
  wishlistedItemIds: getWishlisttedItemIds(),
}
const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleWishlistItem = (id, product) => {
    const tempProduct = state.wishlist.find((item) => item.id === id)

    if (tempProduct) {
      dispatch({ type: REMOVE_ITEM_FROM_WISHLIST, payload: id })
      dispatch({
        type: UPDATE_WISHLISTED_ITEM_IDS,
        payload: { id, value: 'remove' },
      })
    } else {
      dispatch({
        type: ADD_TO_WISHLIST,
        payload: product,
      })
      dispatch({
        type: UPDATE_WISHLISTED_ITEM_IDS,
        payload: { id, value: 'add' },
      })
    }
  }

  const addToWishlist = (product) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    })
  }

  const removeItemFromWishlist = (id) => {
    dispatch({ type: REMOVE_ITEM_FROM_WISHLIST, payload: id })
  }

  const clearWishlist = () => {
    dispatch({ type: CLEAR_WISHLIST })
  }

  const hasWishlisted = (id) => {
    return state.wishlistedItemIds.includes(id)
  }

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
  }, [state.wishlist])

  useEffect(() => {
    localStorage.setItem(
      'wishlistedItemIds',
      JSON.stringify(state.wishlistedItemIds)
    )
  }, [state.wishlistedItemIds])

  return (
    <WishlistContext.Provider
      value={{
        ...state,
        addToWishlist,
        removeItemFromWishlist,
        clearWishlist,
        hasWishlisted,
        toggleWishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlistContext = () => useContext(WishlistContext)
