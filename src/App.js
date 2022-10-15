import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Footer, Sidebar } from './components'
import { GlobalProvider } from './context/GlobalContext'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </GlobalProvider>
  )
}

export default App
