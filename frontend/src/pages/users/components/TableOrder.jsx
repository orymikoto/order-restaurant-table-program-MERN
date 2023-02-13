import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowLeft } from 'react-icons/fa'
import moment from 'moment'
import 'moment-timezone'

function TableOrder({table_ordered}) {
  const check_status = (start, end) => {
    const now = moment().tz('Asia/Jakarta').toDate()
    console.log(now);
    if(moment(now).isAfter(end)){
      console.log('Done');
      return 'Done'
    }else if (moment(now).isBefore(start)){
      console.log('Scheduled');
      return 'Scheduled'
    }else if (moment(now).isBefore(end) && moment(now).isAfter(start)){
      console.log('well');
      return 'On Going'
    }
  }

  return (
  <div className=' min-h-[90vh] w-full flex flex-col border-l-[0.21rem] px-7 border-neutral-100 bg-neutral-100 '>
    <div className='flex w-full mt-4 text-neutral-900 font-semibold font-poppins text-2xl'>
      <div className='flex flex-col'>
        <h2>Table Order</h2>
        <div className='flex gap-x-1'>
          <p className='text-sm'>Sunday,</p>
          <p className='text-sm font-light font-poppins'>12 February 2023</p>
        </div>
      </div>
      <div className='flex flex-1 w-full justify-self-end justify-end items-center'>
        <Link to={'/'}>
          <div className='group flex gap-x-2 items-center'>
            <FaArrowLeft className=' group-hover:text-red-600 gap-x-2 w-6 h-6 text-neutral-500 duration-200' />
            <p className=' group-hover:text-red-600 font-medium text-neutral-500 font-poppins text-lg duration-200'>Return</p>
          </div>
        </Link>
      </div>
    </div>
    <div className='w-full flex flex-col py-2 px-7 mt-14 rounded-xl bg-white shadow-[7px_7px_21px_-5px_rgba(0,0,0,0.21)]'>
      <table className="table-auto w-full border-collapse border-teal-600 border">
        <thead className='text-teal-600'>
          <tr>
            <th className='border border-teal-600'>Date</th>
            <th className='border border-teal-600'>Time</th>
            <th className='border border-teal-600'>Room Location</th>
            <th className='border border-teal-600'>Amount of seat</th>
            <th className='border border-teal-600'>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            table_ordered.map((e) => 
            <tr className='text-center font-medium text-neutral-600'>
              <td className='border border-teal-600 py-2'>{ `${moment(e.rent_time.start).format('dddd')}, ${moment(e.rent_time.start).format('YYYY/MM/DD')}`}</td>
              <td className='border border-teal-600 py-2'>{ `${moment(e.rent_time.start).format('HH:mm:ss')} - ${moment(e.rent_time.end).format('HH:mm:ss')}`}</td>
              <td className='border border-teal-600 py-2'>{ e.table_id.room_location }</td>
              <td className='border border-teal-600 py-2'>{ e.table_id.chairs_amount }</td>
              <td className={`border border-teal-600 py-2 ${check_status(e.rent_time.start, e.rent_time.end)==='Done'?'text-green-500':check_status(e.rent_time.start, e.rent_time.end)==='Scheduled'?'text-amber-600':'text-teal-600'}`}>{ check_status(e.rent_time.start, e.rent_time.end) }</td>
            </tr>
            )
          }
        </tbody>
      </table>
      <div className='my-7  py-2 px-3 cursor-pointer text-teal-600 font-semibold hover:bg-teal-600 hover:border-white duration-300 ease-in-out hover:text-white rounded-xl border-2 border-teal-600 self-end'>
        <p>New Table Order</p>
      </div>
    </div>
  </div>
  )
}

export default TableOrder