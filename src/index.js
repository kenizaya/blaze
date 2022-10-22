import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/cart_context'
import { FilterProvider } from './context/filter_context'
import { ProductsProvider } from './context/products_context'
import './index.css'
import RouteSwitch from './RouteSwitch'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <RouteSwitch />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
)
