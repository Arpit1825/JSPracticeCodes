import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let val=document.querySelector('#val');
function App() {
  let [counter,setCounter]=useState(5)
  let [color,setcolor]=useState("white")
  let [message,setmessage]=useState("Value Changed!")
  const addValue=() =>{
    setCounter(counter+1);//if you write any time same operation they make a batch at start only a single execution
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setcolor("white")
    setmessage("Value Changed!")
  }
  
  const removeValue=() =>{
     if(counter>0){
      setCounter(counter-1);
      setmessage("Value Changed!")
     }else{
      setCounter(counter);
      setmessage("Limit Exceeded!")
      setcolor("red");
     }
    
  }
  return (
    <>
    
      <h1>Counting System</h1>
      <h2>Counter value : {counter}</h2>
      <h3 style={{color: color}}>{message}</h3>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
