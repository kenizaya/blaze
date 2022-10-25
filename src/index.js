import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/cart_context'
import { FilterProvider } from './context/filter_context'
import { ProductsProvider } from './context/products_context'
import { WishlistProvider } from './context/wishlist_context'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import RouteSwitch from './RouteSwitch'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <WishlistProvider>
              <RouteSwitch />
            </WishlistProvider>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </Auth0Provider>
  </React.StrictMode>
)
