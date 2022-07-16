import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const [cart, setCart] = useState({
    items: [],
    totalItems: 0,
    totalPrice: 0,
    isFilled: false,
  })
  return (
    <>
      <Header cart={cart} />
      <Outlet context={[cart, setCart]} />
      <Footer />
    </>
  )
}

export default App
