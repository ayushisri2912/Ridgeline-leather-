import React from 'react'
import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
import AppRoutes from './Routes/AppRoutes'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
