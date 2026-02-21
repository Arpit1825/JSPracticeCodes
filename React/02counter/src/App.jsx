import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let val=document.querySelector('#val');
function App() {
  let [counter,setCounter]=useState(5)
  const addValue=() =>{
     console.log("Clicked... ",Math.random());
    val.textContent="Value Changed"
    setCounter(counter+1);
    console.log(counter);
    
  }
  
  const removeValue=() =>{
     console.log("Clicked... ",Math.random());
     if(counter>0){
      setCounter(counter-1);
     }else{
      val.textContent="Limit exceeded!"
      setCounter(counter);
     }
    console.log(counter);
    
  }
  return (
    <>
    
      <h1>Counting System</h1>
      <h2>Counter value : {counter}</h2>
      <h3 id="val">Value Changed</h3>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
