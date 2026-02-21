import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 
  return (
    <>
     <h1 className='bg-red-400 rounded text-black p-4 rounded-xl'> Tailwind CSS</h1>
     <br />
     <Card name='Arpit'/>
    </>
  )
}

export default App
