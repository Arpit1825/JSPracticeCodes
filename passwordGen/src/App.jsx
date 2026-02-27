import { useState,useCallback, useEffect,useRef} from "react"
import './App.css'

function App() {
  const [length,updatelen]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [character,setCharacter]=useState(false);
  const passwordRef=useRef(null);
  const [Password,setPassword]=useState("");
  const [copyText,setCopyText]=useState("copy");
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFQHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(character) str+="!@#$%^&*[]{}`~"

    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length)

      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,character])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,character,passwordGenerator])
  
const copyToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(Password)
  setCopyText("copied")

  setTimeout(()=>{
    setCopyText("copy")
  },5000)//refreshes  the button to copy again in 5sec
},[Password])




  return ( 
    <>
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md shadow-md px-6 py-6 text-orange-500 text-4xl bg-gray-700 rounded-lg">
      <h1>Password Generator</h1>
      <br />
      <div className=" flex rounded-lg overflow-hidden  mb-4 bg-gray-200 mt-4">
        <input  type="text" value={Password} 
        placeholder="password" 
        className="outline-none w-full py-1 px-3 text-black" ref={passwordRef}readOnly />
        <button className="outline-none bg-blue-700 shrink-0 text-white px-3 py-0.5 hover:bg-white hover:text-black" onClick={copyToClipboard}>
         {copyText}</button>
      </div>
      <div className="flex text-sm gap-x-4 items-center">
      <div className="flex  gap-x-1 items-center">
        <input type="range" min={6} max={100} value={length} className="cursor-pointer"
        onChange={(e)=>{
          updatelen(Number(e.target.value))
        }}/>
        <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" checked={character}  onChange={()=>{
            setCharacter((prev)=>!prev)
          }}/>
          <label> Characters</label>
        </div>
         <div className="flex items-center gap-x-1">
          <input type="checkbox" checked={numberAllowed} id="numberInput" 
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}/>
          <label>Numbers</label>
        </div>
        
      </div>
       
    </div>
    </div>
    </>
  )
}
export default App