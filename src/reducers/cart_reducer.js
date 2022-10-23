import {
  ADD_TO_CART,
  CHANGE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_ITEM_FROM_CART,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, amount, product } = action.payload
      const tempProduct = state.cart.find((item) => item.id === id)

      if (tempProduct) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            let newAmount = cartItem.amount + amount
            if (newAmount > cartItem.stock) newAmount = cartItem.stock
            return { ...cartItem, amount: newAmount }
          } else {
            return cartItem
          }
        })
        return { ...state, cart: tempCart }
      } else {
        const newProduct = {
          id,
          color,
          amount,
          price: product.price,
          name: product.name,
          image: product.image,
          stock: product.stock,
        }
        return { ...state, cart: [...state.cart, newProduct] }
      }
    }
    case REMOVE_ITEM_FROM_CART: {
      const tempCart = state.cart.filter((item) => item.id !== action.payload)

      return { ...state, cart: tempCart }
    }
    case CLEAR_CART: {
      return { ...state, cart: [] }
    }
    case CHANGE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1
            if (newAmount > item.stock) newAmount = item.stock
            return { ...item, amount: newAmount }
          } else if (value === 'dec') {
            let newAmount = item.amount - 1
            if (newAmount < 1) newAmount = 1
            return { ...item, amount: newAmount }
          }
        } else {
          return item
        }
      })

      return { ...state, cart: tempCart }
    }
    case COUNT_CART_TOTALS: {
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem
          total.totalItems += amount
          total.totalAmount += price * amount
          return total
        },
        {
          totalAmount: 0,
          totalItems: 0,
        }
      )
      return { ...state, totalAmount, totalItems }
    }
    default:
      return state
  }
}

export default cart_reducer
