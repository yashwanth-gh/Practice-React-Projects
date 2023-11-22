import React, { useState } from 'react'
import Header from './component/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/footer/Footer'
import { ProfileProvider } from './context/profileContext'

function Layout() {
  const [userID,setUserID] = useState('');

  const fetchInfo = (newID)=>{
    setUserID(newID);
  }
  return (
    <ProfileProvider value={{userID,fetchInfo}}>
    <Header/>
    <Outlet/>
    <Footer/>
    </ProfileProvider>
  )
}

export default Layout