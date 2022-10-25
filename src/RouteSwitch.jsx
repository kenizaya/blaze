import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import {
  Home,
  Products,
  SingleProduct,
  Checkout,
  Contact,
  Error,
  Cart,
  About,
  PrivateRoute,
} from './pages'
import Wishlist from './pages/Wishlist'

const RouteSwitch = () => {
  return (
    <BrowserRouter basename='/blaze'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='about' element={<About />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='cart' element={<Cart />} />
          <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
