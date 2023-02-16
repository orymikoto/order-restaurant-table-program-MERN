import React from 'react'

function PopupMessage({title, message, handleChange}) {
  return (
    <div onClick={() => handleChange(false)} className='flex z-10 top-0 left-0 justify-center items-center fixed bg-black/50 w-[100vw] h-[100vh]'>
      <div className='w-[21rem] min-h-[7rem] rounded-xl z-20 bg-white flex flex-col'>
        <h3 className='text-center text-neutral-900 font-semibold text-xl my-2'>{title}</h3>
        <p className='text-center text-neutral-600 mx-2 flex-1'>{message}</p>
        <div onClick={() => handleChange(false)} className='mx-auto my-2 text-red-600 border-2 border-red-600 cursor-pointer hover:border-red-700 hover:text-red-700 rounded-md'>
          <p>CLOSE</p>
        </div>
      </div>
    </div>
  )
}

export default PopupMessage