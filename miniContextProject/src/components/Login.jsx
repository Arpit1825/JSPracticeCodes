import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/userContext'
function Login() {
    const [username,setUsername]=useState('')
    const [pass,setPass]=useState('')

    const {setUser}=useContext(UserContext)

    const handleSubmit= (e) => {
        e.preventDefault()

        setUser({username,pass})
    }
    return (
        <div className='flex justify-center'>
            <h1>Login</h1>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
            {" "}
            <input type='password' value={pass} onChange={(e)=>{
                setPass(e.target.value)
            }}placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        
    )
}

export default Login
