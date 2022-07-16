import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalProvider } from './GlobalContext'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Outlet />
      <Footer />
    </GlobalProvider>
  )
}

export default App
