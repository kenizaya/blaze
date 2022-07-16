import { createContext, useState, useEffect } from 'react'
import { allProducts } from './data/allProducts'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    totalItems: 0,
    totalPrice: 0,
    isFilled: false,
  })
  const [products, setProducts] = useState(allProducts)

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
    console.log(e.target.value)
    setProducts((prevProduct) => {
      const newProduct = prevProduct.map((product) => {
        if (product.id === id && product.qty >= 0) {
          return { ...product, qty: parseInt(e.target.value) || '' }
        }
        return product
      })
      return newProduct
    })
  }

  useEffect(() => {
    setCart({
      ...cart,
      items: products.filter((product) => product.qty > 0),
      totalItems: products.reduce((prev, cur) => prev + cur.qty, 0),
      totalPrice: products.reduce((prev, cur) => prev + cur.qty * cur.price, 0),
      isFilled: products.some((product) => product.qty > 0),
    })
  }, [products])

  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,
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
