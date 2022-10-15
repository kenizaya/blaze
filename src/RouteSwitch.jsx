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
} from './pages'

const RouteSwitch = () => {
  return (
    <BrowserRouter basename='/blaze'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
