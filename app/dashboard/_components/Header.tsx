import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2  flex justify-between bg-black'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
            <Search/>
            <input type='text' placeholder='Search... '
            className='bg-black outline-none'></input>
        </div>
        <div className='mt-2 flex gap-5 items-center bg-primary p-1 rounded-full text-xs text-white px-2 h-7'>
            <h2>🙋🏻‍♂️ Hey Itz vahith here join with me to make exciting project</h2>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header