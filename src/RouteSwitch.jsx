import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Error from './pages/Error'
import App from './App'
import Cart from './pages/Cart'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
