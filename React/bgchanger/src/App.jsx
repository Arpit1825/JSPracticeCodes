import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div 
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center text-2xl font-bold pt-10">
        Background Color
      </h1>

      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2 white rounded">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-5 py-3 white rounded-xln">
          <button 
            onClick={() => setColor("red")} style={{backgroundColor:"red"}}
            className="px-4 py-1 bg-red-500 text-white rounded"
          >
            Red
          </button>

          <button 
            onClick={() => setColor("blue")} style={{backgroundColor:"blue"}}
            className="px-4 py-1 bg-blue-500 text-white rounded"
          >
            Blue
          </button>

          <button 
            onClick={() => setColor("green")} style={{backgroundColor:"green"}}
            className="px-4 py-1 bg-green-500 text-white rounded"
          >
            Green
          </button>

          <button 
            onClick={() => setColor("purple")} style={{backgroundColor:"purple"}}
            className="px-4 py-1 bg-purple-500 text-white rounded"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App