import React from 'react'

function DataShow({title, value, className}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className='font-semibold text-sm ml-2 text-amber-500'>{title}</h3>
      <div className='w-full bg-neutral-100 border-r-2 border-b-2 border-neutral-300 rounded-sm'>
        <p className='m-[0.15rem] mx-2 text-justify font-medium text-neutral-600 '>{value}</p>
      </div>
      {/* tes */}
    </div>
  )
}

export default DataShow