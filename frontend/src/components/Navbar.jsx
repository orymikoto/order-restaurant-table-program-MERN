/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({auth}) {
  return (
    <div className='flex bg-neutral-800 w-full py-3 rounded-b-[7rem]'>
      
      <div className=' flex-1 flex ml-20 items-center' /* Restaurant Name */> 
        <h2 className=' cursor-default font-semibold text-2xl text-neutral-100 '>
          MIKOTO MERN
        </h2> 
      </div>

      <div className='flex mr-7 gap-x-7' /* Navigation */>
        <div className='p-2 text-lg cursor-pointer font-medium text-neutral-400 hover:text-neutral-100'>Tables</div>
        <div className='p-2 text-lg cursor-pointer font-medium text-neutral-400 hover:text-neutral-100'>Menu</div>
        <div className='p-2 text-lg cursor-pointer font-medium text-neutral-400 hover:text-neutral-100'>About</div>
      </div>
      {
        auth?
      <div className='flex mr-20' /* Login / Register / Profile Function */>
        <Link className='flex items-center justify-center' to={'/login'}>
          <div className=' cursor-pointer text-lg flex mx-2 my-auto  rounded-full w-[6rem] h-[2.1rem] justify-center text-center font-medium text-white items-center ease-in-out duration-300 hover:bg-white hover:text-teal-600 bg-teal-600 '>Login</div>
        </Link>
        <Link className='flex items-center justify-center' to={'/register'}>
          <div className=' cursor-pointer text-lg flex mx-2 my-auto  rounded-full w-[6rem] h-[2.1rem] justify-center text-center font-medium text-white items-center ease-in-out duration-300 hover:bg-white hover:text-yellow-500 bg-yellow-500 '>Register</div>
        </Link>
      </div>
      :
      <div className='flex mr-20'>
        <Link to={'/user/profile'} className='flex items-center justify-center'>
          <div className=' cursor-pointer text-lg flex mx-2 my-auto  rounded-full w-[6rem] h-[2.1rem] justify-center text-center font-medium text-white items-center ease-in-out duration-300 hover:bg-white hover:text-yellow-500 bg-yellow-500 '> Profile </div>
        </Link>
      </div>
      }

    </div>
  )
}

export default Navbar