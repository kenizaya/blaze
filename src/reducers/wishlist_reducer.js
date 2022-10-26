import {
  ADD_TO_WISHLIST,
  CLEAR_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
  UPDATE_WISHLISTED_ITEM_IDS,
} from '../actions'

const wishlist_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      return { ...state, wishlist: [...state.wishlist, action.payload] }
    }
    case REMOVE_ITEM_FROM_WISHLIST: {
      const tempWishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      )

      return { ...state, wishlist: tempWishlist }
    }
    case CLEAR_WISHLIST: {
      return { ...state, wishlist: [], wishlistedItemIds: [] }
    }
    case UPDATE_WISHLISTED_ITEM_IDS: {
      const { id, value } = action.payload
      let tempItemIds = [...state.wishlistedItemIds]

      if (value === 'add' && !tempItemIds.includes(id)) tempItemIds.push(id)
      else if (value === 'remove') {
        tempItemIds = tempItemIds.filter((item) => item !== id)
      }

      return { ...state, wishlistedItemIds: tempItemIds }
    }

    default:
      return state
  }
}

export default wishlist_reducer
