import React from 'react'
import Header from './component/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout