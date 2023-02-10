import React from 'react'
import { FaEdit } from 'react-icons/fa'

import DataShow from './DataShow'

function InformationBox({information=[{title: '', value: ''}] }) {
  return (
    <div className='container grid grid-cols-6 pb-4'>
      {
        information.map((item) => 
          <DataShow className='col-span-3 my-2 ml-4 w-[85%]' title={item.title} value={item.value} />
        )
      }
      <div className='flex col-start-5 col-end-7 justify-self-start px-2 rounded-md items-center self-end mb-2 hover:bg-teal-600 cursor-pointer h-[2rem] w-[85%] bg-teal-500'>
        <FaEdit className='w-6 h-6 text-white' />
        <p className='text-white font-medium mx-2 justify-self-center'>Edit</p>
      </div>
    </div>
  )
}

export default InformationBox