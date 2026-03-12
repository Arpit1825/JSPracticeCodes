import React from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
    return (
        <div className='text-center bg-gray-600 text-yellow-500 text-[32px]'>
           User: {userid}
        </div>
    )
}

export default User
