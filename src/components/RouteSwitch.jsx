import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Products from './Products'
import Contact from './Contact'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='products' element={<Products />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
