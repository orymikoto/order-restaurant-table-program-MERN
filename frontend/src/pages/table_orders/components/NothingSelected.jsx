import React from 'react'

function NothingSelected() {
  return (
    <div className='rounded-2xl flex flex-col m-2 bg-white shadow-[7px_7px_21px_10px_rgba(0,0,0,0.21)]'>
        <div className='rounded-lg overflow-hidden h-[25rem] m-7 mb-2'>
          <img className='min-h-full object-cover object-center' src='/assets/restlogin.jpg' alt='table pic'/>
        </div>
        <div className='font-poppins text-neutral-900 text-center mx-4'>
          <h4 className='font-semibold font-poppins text-xl'>Mikoto MERN Table Order</h4>
          <p>Table for 2 people only, not very large but enough to put your meals and drink along with your friends maybe or maybe not cause you got no friends</p>
        </div>
        <div className='my-2 font-poppins text-base text-center text-neutral-600 mx-4'>
          <h3 className='font-poppins font-semibold text-lg text-teal-600'>OPEN/CLOSE Schedule</h3>
          <p>&#x2022; Monday - Friday: 09.00 - 22.00</p>
          <p>&#x2022; Saturday & Sunday: 12.00 - 23.00</p>
        </div>
        <div onClick={() => console.log('yeay!')} className='self-center px-3 p-2 my-4 cursor-pointer text-lg font-semibold font-poppins rounded-lg border-2 border-amber-500 hover:border-white text-amber-500 hover:text-white hover:bg-amber-500 duration-300 ease-in-out'>
          Look Menu
        </div>
      </div>
  )
}

export default NothingSelected