import React from 'react'

function TableDetail({table_name, chair_amount, description, image, room_name, ac, tv, setorder}) {
  return (
    <div className='rounded-2xl flex flex-col m-2 bg-white shadow-[7px_7px_21px_10px_rgba(0,0,0,0.21)]'>
        <div className='rounded-lg overflow-hidden h-[25rem] m-7 mb-2'>
          <img className='object-cover object-center min-h-full' src={image} alt='table pic'/>
        </div>
        <div className='text-neutral-900  text-center mx-4'>
          <h4 className='font-bold font-poppins text-xl'>{table_name}</h4>
          <p>{description}</p>
        </div>
        <div className='my-2 text-sm text-center font-poppins text-neutral-600 mx-7'>
          <h3 className='font-poppins text-lg font-semibold text-teal-600'>Information</h3>
          <div className='flex'>
            <p className='w-[10rem] text-left'>&#x2022; Chairs Amount </p> <p>: {chair_amount}</p>
          </div>
          <div className="flex">
            <p className='w-[10rem] text-left'>&#x2022; Room Name </p> <p>: {room_name}</p>
          </div>
          <div className="flex">
            <p className='w-[10rem] text-left'>&#x2022; A/C </p> <p>: {`${ac}`}</p>
          </div>
          <div className="flex">
            <p className='w-[10rem] text-left'>&#x2022; Presentation tv </p> <p>: {`${tv}`}</p>
          </div>
        </div>
        <div onClick={() => setorder(true)} className='self-center px-2 p-1 my-4 cursor-pointer rounded-lg border-2 border-teal-600 hover:border-white text-teal-600 hover:text-white hover:bg-teal-600 duration-300 ease-in-out'>
          Order This Table
        </div>
      </div>
  )
}

export default TableDetail