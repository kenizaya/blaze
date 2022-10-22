import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer, Sidebar } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
