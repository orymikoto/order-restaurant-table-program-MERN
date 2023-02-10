import React from 'react'

function DataShow({title, value, className}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className='font-semibold text-sm ml-2 text-amber-500'>{title}</h3>
      <div className='border-2 w-full bg-slate-400/50 rounded-xl'>
        <p className='m-1 text-justify font-normal text-lg text-neutral-100'>{value}</p>
      </div>
      {/* tes */}
    </div>
  )
}

export default DataShow