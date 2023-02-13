import React from 'react'

import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import InputText from '../../components/InputText'

function ChangePassword({handleChange, onSubmited, data, messageHandler}) {
  return (
    <div className=' min-h-[90vh] w-full flex flex-col border-l-[0.21rem] px-7 border-neutral-100 bg-neutral-100 '>
        <div className='flex w-full mt-4 text-neutral-900 font-semibold font-poppins text-2xl'>
          <div className='flex flex-col'>
            <h2>Change Password</h2>
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
        <div className='w-[25rem] py-2 px-7 mt-14 rounded-xl bg-white shadow-[7px_7px_21px_-5px_rgba(0,0,0,0.21)]'>
          <form onSubmit={() => {onSubmited();messageHandler(true, 'Password Updated', 'Password successfully updated now you have to relogin')}} className='flex flex-col'>
            <InputText className='my-2' placeholder={'password'} title='Password' name='password' type='password' isrequired={true} onChange={handleChange} value={data.password}/>
            <InputText className='my-2' placeholder={'new password'} title='New Password' name='new_password' type='password' isrequired={true} onChange={handleChange} value={data.new_password}/>
            <InputText className='my-2' placeholder={'new password'} title='Confirm New Password' name='confirm_new_password' type='password' isrequired={true} onChange={handleChange} value={data.confirm_new_password}/>
            <button type='submit' className='border-2 self-end my-2 border-teal-600 py-1 px-4 rounded-xl hover:border-white duration-300 ease-in-out text-teal-600 font-semibold bg-white hover:text-white hover:bg-teal-600'>Submit</button>
          </form>
        </div>
      </div>
  )
}

export default ChangePassword