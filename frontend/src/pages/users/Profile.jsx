import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
// import {FaArrowLeft} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
// import jwt_decode from 'jwt-decode'
import axios from 'axios'

// import InformationBox from '../../components/InformationBox'
// import { Link } from 'react-router-dom'
// import EditInformationBox from '../../components/EditInformationBox'
import ProfileContent from '../../components/ProfileContent'
import ChangePassword from './ChangePassword'
import PopupMessage from '../../components/PopupMessage'

function Profile() {
  const [Userinfo, setUserinfo] = useState({})
  // const [Editmode, setEditmode] = useState(false)
  const [Menu, setMenu] = useState(0)
  const [Password, setPassword] = useState({
    password: '',
    new_password: '',
    confirm_new_password: ''
  })
  const [Showmessage, setShowmessage] = useState({
    show: false,
    title: '',
    message: ''
  })
  const [cookies] = useCookies()

  const handleChange = (e) => {
    setUserinfo((prevState) => {
      return {...prevState, ...{ [e.target.name] : e.target.value}}
    })
  }

  const handlePasswordChange = (e) => {
    setPassword((prevState) => {
      return {...prevState, ...{ [e.target.name] : e.target.value}}
    })
  }

  const onSubmited = (e) => {
    e.preventDefault()
    axios.patch( process.env.REACT_APP_SERVER_URL + '/users/update-profile', Userinfo, { headers: {"Authorization": `Bearer ${cookies.auth_token}`}}).then((res) => {
      console.log(res)
    }).catch((err) => 
    console.log(err))
  }
  
  const messageHandler = (show, title, message) => {
    console.log('message handler:', show,  title, message);
    setShowmessage({
      show: show,
      title: title,
      message: message
    })
  }

  const submitChangePassword = (e) => {
    e.preventDefault()
    axios.patch( process.env.REACT_APP_SERVER_URL + '/users/change-password', Password, { headers: {"Authorization": `Bearer ${cookies.auth_token}`}}).then((res) => {
      console.log(res)
    }).catch((err) => 
    console.log(err))
  }

  useEffect(() => {
    axios.get( process.env.REACT_APP_SERVER_URL + '/users/profile', { headers : {"Authorization": `Bearer ${cookies.auth_token}`}}).then((res) => {
      setUserinfo(res.data.data)
    })
    
  }, [cookies.auth_token])
  

  return (
    <div className='flex w-[90%] rounded-xl my-7 overflow-hidden bg-white shadow-[7px_7px_21px_10px_rgba(0,0,0,0.21)] mx-auto'>
      <div className='lg:w-[21%] md:w-[27%] flex flex-col'>
        <div className='select-none flex flex-col justify-center items-center mx-auto my-7'>
          <p className='text-2xl text-center font-unbounded text-teal-400'>MIKOTO MERN</p>
          <div className='flex gap-x-1 self-center text-neutral-600 '>
            <p className='font-unbounded text-xs'>ORYMIKOTO</p>
            <p className='font-mrdafoe text-xs'>Developer</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 gap-y-4 h-full'>
          <div onClick={() => setMenu(0)} className={`cursor-pointer font-medium text-black text-md lg:mx-5 md:mx-3 duration-300 py-1 text-center font-poppins border-r-2 border-b-2 rounded-lg ${Menu === 0?'bg-teal-400 text-white cursor-default':'hover:border-teal-400'}`}>
            <p>Profile</p>
          </div>
          <div onClick={() => setMenu(1)} className={`cursor-pointer font-medium text-black text-md lg:mx-5 md:mx-3 duration-300 py-1 text-center font-poppins border-r-2 border-b-2 rounded-lg ${Menu === 1?'bg-teal-400 text-white cursor-default':'hover:border-teal-400'}`}>
            <p>Table Order</p>
          </div>
          <div onClick={() => setMenu(2)} className={`cursor-pointer font-medium text-black text-md lg:mx-5 md:mx-3 duration-300 py-1 text-center font-poppins border-r-2 border-b-2 rounded-lg ${Menu === 2?'bg-teal-400 text-white cursor-default':'hover:border-teal-400'}`}>
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
      
      {
        Menu === 0 ? <ProfileContent messageHandler={messageHandler} handleChange={handleChange} onSubmited={onSubmited} Userinfo={Userinfo} />
        : Menu === 1 ? <p>test</p> 
        // : <p>password</p>
        : <ChangePassword messageHandler={messageHandler} onSubmited={submitChangePassword} handleChange={handlePasswordChange} data={Password} />
      }
      {
        Showmessage.show?
        <PopupMessage handleChange={messageHandler} message={Showmessage.message} title={Showmessage.title} />
        :null
      }

      
    </div>
  )
}

export default Profile