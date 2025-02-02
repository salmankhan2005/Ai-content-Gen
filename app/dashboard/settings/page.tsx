import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex items-center justify-center h-full bg-black mt-10 mb-5 p-10'>
        <UserProfile/>
    </div>
  )
}

export default Settings