import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-bl from-red-500 via-red-700 to-black flex justify-center items-center text-white flex-col'>
    <h2 className='text-white font-bold'>
        Browse All Templates
    </h2>
    <p>😉 Inaiku enna pudhusa content Create panna poringa 😉</p>
    <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md w-[60%] my-5'>
            <Search className='text-black'/>
            <input type="text" placeholder='Search...😉'
            onChange={(event)=>onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none text-white'/>
        </div>
    </div>
</div>

  )
}

export default SearchSection