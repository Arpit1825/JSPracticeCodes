import { useState,useCallback } from "react"
import './App.css'

function App() {
  const [length,updatelen]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [character,setCharacter]=useState(false);
  const [Password,setPassword]=useState("");
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFQHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(character) str+="!@#$%^&*[]{}`~"

    for(let i=1;i<=array.length;i++){
      let char=Math.floor(Math.random()*str.length)

      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,character,setPassword])
  return (
    
    <>
    <div className=" flex items-center justify-center  flex-col font-bold text-green-500 text-4xl">
      <h1>Password Generator</h1>
      
    </div>
    <div className="py-10">
        <input type="checkbox" name="characters" id1="characters" value="characters">
        </input>
        <label htmlfor="characters"> characters</label>
      </div>
    </>
  )
}
export default App