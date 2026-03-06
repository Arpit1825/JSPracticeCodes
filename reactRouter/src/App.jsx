import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css'

function App() {
 

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
