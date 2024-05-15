import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />  /
      {/* outlet - header and  footer same rhte h but unke content change ho jate h */}
      {/* oulet is coming from react-router-dom, through which we can doing nesting */}
      <Footer />
    </>
  )
}

export default Layout
