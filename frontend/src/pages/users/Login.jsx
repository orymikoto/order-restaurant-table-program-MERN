import React, { useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import moment from 'moment'
import {Link} from 'react-router-dom'

import {AiFillGoogleCircle} from 'react-icons/ai'
import {FaFacebook, FaTelegram} from 'react-icons/fa'

import InputText from '../../components/InputText'
import PopupMessage from '../../components/PopupMessage'

function Login() {

  const [Showmessage, setShowmessage] = useState({
    show: false,
    title: '',
    message: ''
  })
  const [input, setInput] = useState( {
    "email": "",
    "password": ""
  })

  const cookies = new Cookies();
  const exp_time = moment().add(3, 'h').toDate()

  const messageHandler = (show, title, message) => {
    console.log('message handler:', show,  title, message);
    setShowmessage({
      show: show,
      title: title,
      message: message
    })
  }

  const handleChange = (e) => {
    setInput((prevState) => {
      return {...prevState, ...{ [e.target.name] : e.target.value}}
    })
  }

  const onSubmited = (e) => {
    e.preventDefault()
    axios.post( process.env.REACT_APP_SERVER_URL + '/users/login', input).then((res) => {
      console.log(res)
      cookies.set('auth_token', res.data.token, { path: '/', expires: exp_time})
      messageHandler(true, 'Login Success', res.data.message)
    }).catch((err) => {
      messageHandler(true, 'Login Failed', err.response.data.message)
      console.log(err)
    })
  }

  return (
    <div className='flex w-[80%] mt-[3rem] m-auto rounded-3xl overflow-hidden shadow-[7px_21px_25px_-7px_rgba(0,0,0,0.5)]'>
      <div className='flex gap-2 w-[30%] flex-col'>
        <div className='flex-col mt-7 mb-2 flex self-center'>
          <h1 className='text-3xl text-sky-900 font-unbounded'>MIKOTO MERN</h1>
          <div className='flex gap-x-1 my-2  mx-auto'>
            <p className='text-sm text-neutral-600 font-unbounded'>ORYMIKOTO</p>
            <p className='text-sm text-neutral-600 font-mrdafoe'>Developer</p>
          </div>
        </div>
        <form method='post' className='flex-col flex' onSubmit={onSubmited} >
          <InputText className='my-4 w-[90%] mx-auto' title='Email' name='email' placeholder='Username' isrequired={true} onChange={handleChange} value={input.email} />
          <InputText className='my-4 w-[90%] mx-auto' title='Password' name='password' type='password' placeholder='Password' isrequired={true} onChange={handleChange} value={input.password} /> 
          <button className='mx-auto my-4 font-semibold text-xl text-teal-600 border-2 border-teal-600 bg-neutral-100 hover:text-neutral-100 hover:shadow-md hover:-translate-x-[0.07rem] hover:bg-teal-600 hover:-translate-y-[0.07rem] ease-in-out duration-300 w-[7rem] h-[2.1rem] rounded-xl' type='submit'>Login</button>
        </form>
        <div className='border-t border-neutral-400 mx-auto mt w-[90%]'>
          <p className='text-neutral-400 text-xs font-light text-center'>other option</p>
        </div>
        <div className='flex justify-center mt-2 gap-7'>
          <AiFillGoogleCircle className='w-8 h-8 '/>
          <FaFacebook className='w-8 h-8 '/>
          <FaTelegram className='w-8 h-8 '/>
        </div>
        <div className=' flex-1 items-center justify-end my-2 mb-4 flex flex-col'>
          <h4 className='text-center text-neutral-400 text-sm font-normal'>You dont have any account?</h4>
          <Link to='/register'>
            <h4 className='text-center text-neutral-400 p-0 hover:text-teal-600 cursor-pointer duration-200 ease-in text-sm font-semibold'>Click Here</h4>
          </Link>
        </div>
      </div>
      <div style={{ backgroundImage: 'url("/assets/restlogin.jpg")'}} className='bg-cover flex w-[70%] h-[80vh]'>
      </div>
      {
        Showmessage.show?
        <PopupMessage handleChange={messageHandler} message={Showmessage.message} title={Showmessage.title} />
        :null
      }
    </div>
  )
}

export default Login