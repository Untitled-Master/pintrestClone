import React from 'react'
import Image from 'next/image'
import { HiSearch,HiBell,HiChat } from "react-icons/hi"

function Header() {
  return (
    <div className='flex gap-3 items-center p-6'>
        <Image src='/logo.png' alt='logo' width={50} height={50}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        <button className='bg-black text-white p-2 px-4 rounded-full'>Home</button>
        <button className='font-semibold p-2 px-4 rounded-full'>Create</button>
        <div className='bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full'>
            <HiSearch className='text-[25px] text-gray-500'/>
            <input type="text" placeholder='search...' className='bg-transparent outline-none'/>
        </div>
        <HiBell className='text-[25px] md:text-[60px] text-gray-500 cursor-pointer'/>
        <HiChat className='text-[25px] md:text-[60px] text-gray-500 cursor-pointer'/>  
        <Image src='/man.png' alt='user image' width={50} height={50}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
    </div>
  )
}

export default Header