import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import {FaArrowLeft} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

import InformationBox from '../../components/InformationBox'
import { Link } from 'react-router-dom'
import EditInformationBox from '../../components/EditInformationBox'

function Profile() {
  const [Userinfo, setUserinfo] = useState({})
  const [Editmode, setEditmode] = useState(false)
  const [cookies] = useCookies()

  const handleChange = (e) => {
    setUserinfo((prevState) => {
      return {...prevState, ...{ [e.target.name] : e.target.value}}
    })
  }

  const onSubmited = (e) => {
    e.preventDefault()
    axios.patch( process.env.REACT_APP_SERVER_URL + '/users/login', Userinfo, { headers: {"Authorization": `Bearer ${cookies.auth_token}`}}).then((res) => {
      console.log(res)
    }).catch((err) => 
    console.log(err))
  }

  useEffect(() => {
    setUserinfo(jwt_decode(cookies.auth_token))
  }, [cookies.auth_token])
  

  return (
    <div className='flex w-[90%] rounded-xl my-7 overflow-hidden bg-white shadow-[7px_7px_21px_10px_rgba(0,0,0,0.21)] mx-auto'>
      <div className='lg:w-[21%] md:w-[27%] flex flex-col'>
        <div className='flex flex-col justify-center items-center mx-auto my-7'>
          <p className='text-2xl text-center font-unbounded text-teal-400'>MIKOTO MERN</p>
          <div className='flex gap-x-1 self-center text-neutral-600 '>
            <p className='font-unbounded text-xs'>ORYMIKOTO</p>
            <p className='font-mrdafoe text-xs'>Developer</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 gap-y-4 h-full'>
          <div className='font-medium text-white text-md lg:mx-5 md:mx-3 py-1 text-center font-poppins rounded-lg border-r-2 border-b-2 bg-teal-400'>
            <p>Profile</p>
          </div>
          <div className='font-medium text-black text-md lg:mx-5 md:mx-3 hover:border-teal-400 duration-300 py-1 text-center font-poppins border-r-2 border-b-2 rounded-lg '>
            <p>Table Order</p>
          </div>
          <div className='font-medium text-black text-md lg:mx-5 md:mx-3 hover:border-teal-400 duration-300 py-1 text-center font-poppins border-r-2 border-b-2 rounded-lg '>
            <p>Change Password</p>
          </div>
          <div className='flex flex-1 mx-auto flex-self-end items-end '>
            <div className='flex cursor-pointer items-center text-neutral-400 duration-300 ease-in-out hover:text-red-600 gap-x-2 mb-7'>
              <FiLogOut className='w-4 h-4  rotate-180' />
              <p className='font-medium font-poppins'>Log Out</p>
            </div>
          </div>
        </div>
      </div>
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
            <h3>Profile Information</h3>
          </div>
          {
            Editmode?
            <EditInformationBox submit={onSubmited} information={[{title: 'Name', name:'name', value: Userinfo.name}, {title: 'Email', name: 'email', value: Userinfo.email}, {title: 'Country', name: 'country', value: Userinfo.country}, {title: 'City', name: 'city', value: Userinfo.city}, {title: 'Phone Number', name: 'phone_number', value: Userinfo.phone_number}]} onChange={handleChange} changemode={setEditmode} />
            :
            <InformationBox information={[{title: 'Name', value: Userinfo.name}, {title: 'Email', value: Userinfo.email}, {title: 'Country', value: Userinfo.country}, {title: 'City', value: Userinfo.city}, {title: 'Phone Number', value: Userinfo.phone_number}]}  changemode={setEditmode} />
          }
        </div>
      </div>
    </div>
  )
}

export default Profile