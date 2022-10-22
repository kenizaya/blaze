import { ADD_TO_CART } from '../actions'

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
    default:
      return state
  }
}

export default cart_reducer
