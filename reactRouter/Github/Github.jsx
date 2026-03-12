import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Arpit1825')
    //     .then(response =>response.json()).then(data =>{
    //         console.log(data.followers);
    //         setData(data)
            
            
    //     })
    // },[])
    const data=useLoaderData()
    return (
        <div className='p-4 text-[30px] text-center text-white bg-gray-900 m-4'>Github followers :{data.followers}
        <div className='flex justify-center bg-gray-700 w-[50%] rounded-[50%] overflow-hidden '> <img  className="" src={data.avatar_url} alt="Profile img"/></div>
       </div>
       
    )
}

export default Github

export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users/Arpit1825')
//    const data=response.json()
   return response.json()
}