import React from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar, Footer, Sidebar } from './components'
import { GlobalProvider } from './context/GlobalContext'

const App = () => {
  return (
    <GlobalProvider>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </GlobalProvider>
  )
}

export default App
