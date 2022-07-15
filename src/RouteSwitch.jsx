import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Error from './pages/Error'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='products' element={<Products />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
