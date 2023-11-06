import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './login'
import Profile from './profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
