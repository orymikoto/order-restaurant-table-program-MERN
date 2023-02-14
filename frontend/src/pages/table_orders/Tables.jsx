import React from 'react'
// import { ReactComponent as Mysvg } from './assets/floor-plan-with-text.svg'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import FloorPlan from './components/FloorPlan'
import TableDetail from './components/TableDetail'

function Tables() {
  return (
    <div className='flex w-full bg-neutral-100 items-center'>
      <div className='p-2 self-start rounded-2xl m-2 bg-white shadow-[7px_7px_21px_10px_rgba(0,0,0,0.21)]'>
        <FloorPlan className='w-[50rem] h-[35rem]'/>
      </div>
      <div>
        <IoMdArrowDroprightCircle className='w-[2.1rem] h-[2.1rem] text-teal-600' />
      </div>
      <TableDetail />
    </div>
  )
}

export default Tables