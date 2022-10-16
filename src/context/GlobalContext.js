import { createContext, useState, useEffect } from 'react'
import { PRODUCTS } from '../data/PRODUCTS'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    totalItems: 0,
    totalPrice: 0,
    isFilled: false,
  })

  const [products, setProducts] = useState(PRODUCTS)

  const handleIncrease = (id) => {
    setProducts((prevProduct) => {
      const newProduct = prevProduct.map((product) => {
        if (product.id === id) {
          return { ...product, qty: parseInt(product.qty || 0) + 1 }
        }
        return product
      })
      return newProduct
    })
  }

  const handleDecrease = (id) => {
    setProducts((prevProduct) => {
      const newProduct = prevProduct.map((product) => {
        if (product.id === id && product.qty > 0) {
          return { ...product, qty: parseInt(product.qty || 0) - 1 }
        }
        return product
      })
      return newProduct
    })
  }

  const handleChange = (e, id) => {
    setProducts((prevProduct) => {
      const newProduct = prevProduct.map((product) => {
        if (product.id === id && product.qty >= 0) {
          return { ...product, qty: parseInt(e.target.value) || 0 }
        }
        return product
      })
      return newProduct
    })
  }

  const clearCart = () =>
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      isFilled: false,
    })

  useEffect(() => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        items: products.filter((product) => product.qty > 0),
        totalItems: products.reduce((prev, cur) => prev + cur.qty, 0),
        totalPrice: products.reduce(
          (prev, cur) => prev + cur.qty * cur.price,
          0
        ),
        isFilled: products.some((product) => product.qty > 0),
      }
    })
  }, [products])

  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
        clearCart,
        products,
        setProducts,
        handleIncrease,
        handleDecrease,
        handleChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
