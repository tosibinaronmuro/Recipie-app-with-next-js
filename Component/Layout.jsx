import React from 'react'
import Footer from './Footer'
import { Navigation } from './Navigation'

function Layout({children}) {
  return (
    < > 
    <Navigation/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout