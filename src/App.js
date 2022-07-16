import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const [isCartFilled, setIsCartFilled] = useState(false)
  return (
    <>
      <Header isCartFilled={isCartFilled} />
      <Outlet context={[isCartFilled, setIsCartFilled]} />
      <Footer />
    </>
  )
}

export default App
