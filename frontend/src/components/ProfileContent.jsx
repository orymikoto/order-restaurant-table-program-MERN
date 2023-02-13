import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import EditInformationBox from './EditInformationBox'
import InformationBox from './InformationBox'

function ProfileContent({handleChange, onSubmited, Userinfo, messageHandler}) {
  const [Editmode, setEditmode] = useState(false)
  
  return (
    <div className=' w-full flex flex-col border-l-[0.21rem] px-7 border-neutral-100 bg-neutral-100 '>
        <div className='flex w-full mt-4 text-neutral-900 font-semibold font-poppins text-2xl'>
          <div className='flex flex-col'>
            <h2>Profile</h2>
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
        <div className='flex flex-col items-center rounded-xl w-[13rem] border-r-2 border-b-2 bg-white my-4'>
          <div className=' mt-4 mb-2 w-[11rem] h-[11rem] overflow-hidden rounded-sm bg-cover bg-center hover:border-amber-400 duration-300 ease-in-out' style={{backgroundImage: 'url("/assets/pp.jpg")'}}>
            {/* <img src='/assets/pp.jpg' alt='profilepicture' /> */}
          </div>
          <div className='text-lg cursor-pointer mb-4 text-center py-1 rounded-sm font-semibold bg-teal-500 hover:bg-teal-600 w-[11rem] text-white'>
            <h3>Change Picture</h3> 
          </div>
        </div>
        <div className='flex flex-col mb-7 rounded-xl border-r-2 border-b-2 bg-white lg:w-[60%] md:w-[75%]'>
          <div className='m-4 text-neutral-900 font-medium font-poppins text-xl'>
            {
              Editmode?
              <h3>Edit Profile</h3>
              :
              <h3>Profile Information</h3>
            }
          </div>
          {
            Editmode?
            <EditInformationBox submit={onSubmited} messageHandler={messageHandler} information={[{title: 'Name', name:'name', value: Userinfo.name}, {title: 'Email', name: 'email', value: Userinfo.email}, {title: 'Country', name: 'country', value: Userinfo.country}, {title: 'City', name: 'city', value: Userinfo.city}, {title: 'Phone Number', name: 'phone_number', value: Userinfo.phone_number}]} onChange={handleChange} changemode={setEditmode} />
            :
            <InformationBox information={[{title: 'Name', value: Userinfo.name}, {title: 'Email', value: Userinfo.email}, {title: 'Country', value: Userinfo.country}, {title: 'City', value: Userinfo.city}, {title: 'Phone Number', value: Userinfo.phone_number}]}  changemode={setEditmode} />
          }
        </div>
      </div>
  )
}

export default ProfileContent