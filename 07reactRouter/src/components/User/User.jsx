import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-white-600 text-black text-3xl text-center w-full flex items-center justify-center'>
      User: {userid}
    </div>
  )
}

export default User
