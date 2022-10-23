import {
  ADD_TO_WISHLIST,
  CHANGE_WISHLIST_ITEM_AMOUNT,
  CLEAR_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
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
      return { ...state, wishlist: [] }
    }
    // case CHANGE_WISHLIST_ITEM_AMOUNT: {
    //   const { id, value } = action.payload
    //   const tempWishlist = state.wishlist.map((item) => {
    //     if (item.id === id) {
    //       if (value === 'inc') {
    //         let newAmount = item.amount + 1
    //         if (newAmount > item.stock) newAmount = item.stock
    //         return { ...item, amount: newAmount }
    //       } else if (value === 'dec') {
    //         let newAmount = item.amount - 1
    //         if (newAmount < 1) newAmount = 1
    //         return { ...item, amount: newAmount }
    //       }
    //     } else {
    //       return item
    //     }
    //   })

    //   return { ...state, wishlist: tempWishlist }
    // }

    default:
      return state
  }
}

export default wishlist_reducer
