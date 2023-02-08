import React from 'react'
import {FaFacebook, FaInstagramSquare, FaTwitter, FaGithub} from 'react-icons/fa' 
import {TiArrowSortedUp} from 'react-icons/ti'
// import from ''

function Footer() {
  return (
    <div className='flex w-full bg-neutral-100 pt-10 pb-2 px-10'>

      <div /* Logo, Media, and Company copyright */ className='flex flex-col w-[40%] '>
          <div className='flex mb-3'>
            <h2 className=' font-unbounded text-3xl '>MIKOTO MERN</h2>
          </div>
          <div className='flex items-center gap-x-7'>
            <FaFacebook className='w-7 h-7 '/>
            <FaTwitter className='w-7 h-7 '/>
            <FaInstagramSquare className='w-7 h-7 '/>
            <FaGithub className='w-7 h-7 '/>
          </div>
          <div className='my-2 flex flex-col h-full justify-end'>
            <div className='flex gap-x-2 text-neutral-400'>
              <h3 className='font-unbounded'>ORYMIKOTO</h3>
              <h3 className='font-mrdafoe'>Developer</h3>
            </div>
            <div className='my-2 text-[0.75rem] font-medium'>
              <p>&#169;2023 ORYMIKOTO</p>
            </div>
          </div>
      </div>

      <div /* About, Contact, Connect */ className='flex-col my-4 w-[60%] mb-[7rem]'>
        <div /* Return to top */ className="flex cursor-default group font-medium text-neutral-700 justify-end border-b border-gray-400">
          <h4 className='group-hover:text-teal-600 ease-in-out duration-200'>Return To Top</h4>
          <TiArrowSortedUp className='w-7 h-7 group-hover:text-teal-600 ease-in-out duration-200' />
        </div>
        <div /* Information */ className="flex w-[80%] justify-between">
          <div /* About */ className="flex-col text-neutral-800">
            <h3 className='my-2 mb-2 font-bold '>ABOUT</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Privacy Notice</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Your Indonesia Privacy Rights</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Interest Based Ads</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Term of Use</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Our Company</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Careers</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Advertise with Us</h3>
          </div>
          <div /* Contact */ className="flex-col text-neutral-800">
            <h3 className='my-2 mb-2 font-bold'>CONTACT</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Mikoto Web Dev</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Customer Service</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Newsroom Contacts</h3>
          </div>
          <div /* Connect */ className="flex-col text-neutral-800">
            <h3 className='my-2 mb-2 font-bold '>CONNECT</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Email Mikoto</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Instagram</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Github</h3>
            <h3 className='my-2 cursor-pointer hover:text-teal-600 font-light'>Coupons and Discounts</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer