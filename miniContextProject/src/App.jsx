import React from 'react'
import Login from './components/Login'
import UserContextProvider from './context/userContextProvider'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextProvider>
      <App />
      <h1>Chai pe paani or paani me chai aur react</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
