import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import InputText from '../../../components/InputText'

function OrderingTableModal({number, chair, location, date, start, end, customer_data, onChange, back, confirm}) {
  return (
    <div className='left-0 top-0 flex items-center justify-center w-[100vw] h-[100vh] fixed bg-neutral-600/50'>
      <div className='flex flex-col w-[21rem] h-[25rem] items-center justify-between relative bg-white rounded-xl shadow-xl'>
        <h3 className='font-poppins  my-1 font-bold text-lg text-amber-500'>Ordering Table</h3>
        
        <InputText className='w-[75%]' title='Customer Name' onChange={onChange} placeholder='Your Name' name={'name'} value={customer_data.name} />
        <InputText className='w-[75%] mb-2' title='Phone Number' onChange={onChange} placeholder='Your Name' name={'number'} value={customer_data.number} />
        <div className='flex text-neutral-900 text-sm font-poppins w-[15rem]'>
          <p className='w-[8rem] font-semibold'>Table ID</p><p>{`: ${number?number:'unknown'}`}</p>
        </div>
        <div className='flex text-neutral-900 text-sm font-poppins w-[15rem]'>
          <p className='w-[8rem] font-semibold'>Chairs Amount</p><p>{`: ${chair?chair:'unknown'}`}</p>
        </div>
        <div className='flex text-neutral-900 text-sm font-poppins w-[15rem]'>
          <p className='w-[8rem] font-semibold'>Room Location</p><p>{`: ${location?location:'unknown'}`}</p>
        </div>
        <div className='flex text-neutral-900 text-sm font-poppins w-[15rem]'>
          <p className='w-[8rem] font-semibold'>Scheduled Date</p><p>{`: ${date?date:'unknown'}`}</p>
        </div>
        <div className='flex text-neutral-900 text-sm font-poppins w-[15rem]'>
          <p className='w-[8rem] font-semibold'>Scheduled Time</p><p>{`: ${start?start:'unknown'} - ${end?end:'unknown'}`}</p>
        </div>
        <div onClick={confirm} className='rounded-lg font-poppins font-semibold cursor-pointer px-2 py-1 text-amber-500 mb-3 bg-white border-2 border-amber-500 hover:text-white hover:border-white hover:bg-amber-500'>
          Order Now
        </div>
        <div className='cursor-pointer rounded-full hover:bg-amber-300 p-1 text-neutral-600 hover:text-red-600 duration-300 ease-in-out absolute right-1 top-1'>
          <AiOutlineClose onClick={() => back(false)} className='w-6 h-6' />
        </div>
      </div>
    </div>
  )
}

export default OrderingTableModal