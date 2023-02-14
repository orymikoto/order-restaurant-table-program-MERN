import React from 'react'

function TableDetail() {
  return (
    <div className='rounded-2xl flex flex-col m-2 bg-white shadow-[7px_7px_21px_10px_rgba(0,0,0,0.21)]'>
        <div className='rounded-lg overflow-hidden m-7'>
          <img src='/assets/restaurant1.jpg' alt='table pic'/>
        </div>
        <div className='text-neutral-900 text-center mx-4'>
          <h4 className='font-semibold text-lg'>Table Name</h4>
          <p>Table for 2 people only, not very large but enough to put your meals and drink along with your friends maybe or maybe not cause you got no friends</p>
        </div>
        <div className='my-2 text-lg text-center text-neutral-600 mx-4'>
          <h3 className='font-poppins font-semibold text-teal-600'>Table Order</h3>
          <p>&#x2022; Sunday, 12-02-2023: 19.00 - 21.00</p>
          <p>&#x2022; Tuesday, 14-02-2023: 19.00 - 21.00</p>
        </div>
        <div onClick={() => console.log('yeay!')} className='self-center px-2 p-1 my-4 cursor-pointer rounded-lg border-2 border-teal-600 hover:border-white text-teal-600 hover:text-white hover:bg-teal-600 duration-300 ease-in-out'>
          Order This Table
        </div>
      </div>
  )
}

export default TableDetail