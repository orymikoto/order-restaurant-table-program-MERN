import React, { useState } from 'react'
import { DatePicker, TimePicker } from 'antd'
import dayjs from 'dayjs'

// import { ReactComponent as Mysvg } from './assets/floor-plan-with-text.svg'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsCheck2All } from 'react-icons/bs'
import { AiOutlineFileSearch } from 'react-icons/ai'


import FloorPlan from './components/FloorPlan'
// import TableDetail from './components/TableDetail'
import moment from 'moment'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import PopupMessage from '../../components/PopupMessage'
import NothingSelected from './components/NothingSelected'
import TableDetail from './components/TableDetail'

function Tables() {
  const [Start, setStart] = useState('10:00')
  const [End, setEnd] = useState('21:00')
  const [Date, setDate] = useState(moment().add(1, 'day').format('YYYY-MM-DD'))
  const [cookies] = useCookies()
  const [Ordertable, setOrdertable] = useState([{}])
  const [Check, setCheck] = useState(false)
  const [Usetable, setUsetable] = useState([])
  const [Showmessage, setShowmessage] = useState({
    show: false,
    title: '',
    message: ''
  })
  const [Expander, setExpander] = useState(null)

  const disabledHours = (type) => {
    let hour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]
    if(type === 's'){
      return hour
    }else if(type === 'e'){
      return hour.slice(0, -2)
    }else{
      return []
    }
  }

  const onClickTables = (e) => {
    setExpander(e)
  }

  const messageHandler = (show, title, message) => {
    console.log('message handler:', show,  title, message);
    setShowmessage({
      show: show,
      title: title,
      message: message
    })
  }

  const findTableOrder = () => {
    const request = {
      start_time: `${Date}T${Start}`,
      end_time: `${Date}T${End}`
    }
    axios.post(process.env.REACT_APP_SERVER_URL + '/order-table/check-table-time', request, { headers : {"Authorization": `Bearer ${cookies.auth_token}`}}).then((res) => {
      const table = []
      res.data.data?.map((item) => { 
        return table.push(item.table_id.name)
      })
      setCheck(true)
      setUsetable(table)
      setOrdertable(res.data.data)
    }).catch((err) => {
      messageHandler(true, 'Error Occured', err.response.data.message)
    })

    console.log('start:', Start+ '\nend:', End);
  }

  return (
    <div className='flex lg:flex-row flex-col w-full bg-neutral-100 items-center'>
      <div className='p-2 flex flex-col self-start rounded-2xl m-2 bg-white shadow-[7px_7px_21px_10px_rgba(0,0,0,0.21)]'>
        <div className='flex mx-auto items-center'>
          <div className='flex flex-col m-2'>
            <p className='ml-3 text-neutral-600 font-poppins font-semibold text-xs'>Date</p>
            <DatePicker placeholder={Date} className='shadow-md' onChange={(date) => {setDate(moment(date.toDate()).format('YYYY-MM-DD')); console.log(Date);}} />
          </div>
          <div className='flex flex-col m-2'>
            <p className='ml-3 text-neutral-600 font-poppins font-semibold text-xs'>Start</p>
            <TimePicker placeholder={Start} popupClassName='font-poppins font-medium' className='shadow-md font-poppins font-medium' showNow={false} disabledHours={() => disabledHours('s')} onOk={(time) => setStart(moment(time.toDate()).format('HH:mm'))} hideDisabledOptions={true} defaultValue={dayjs(Start, 'HH:mm')} minuteStep={30} format={'HH:mm'} />
          </div>
          <div className='flex flex-col m-2'>
            <p className='ml-3 text-neutral-600 font-poppins font-semibold text-xs'>End</p>
            <TimePicker placeholder={End} popupClassName='font-poppins font-medium' className='shadow-md font-poppins font-medium' showNow={false} disabledHours={() => disabledHours('e')} onOk={(time) => setEnd(moment(time.toDate()).format('HH:mm'))} hideDisabledOptions={true} defaultValue={dayjs(End, 'HH:mm')} minuteStep={30} format={'HH:mm'} />
          </div>
          <div onClick={() => findTableOrder()} className='bg-white rounded-lg border-2 p-[0.2rem] text-teal-600 duration-300 ease-in-out px-2 mx-4 items-center border-teal-600 hover:text-white cursor-pointer hover:bg-teal-600 hover:border-white flex gap-x-2 mt-4'>
            <BiSearchAlt2  className='w-6 h-6' />
            <p className='text-sm font-medium font-poppins '>Check Seat</p>
          </div>
          <div className={'mt-4  w-7 h-7'}>
            <BsCheck2All className={`text-teal-600 w-7 h-7 ${Check? '': 'hidden'}`} />
          </div>
        </div>
        <FloorPlan onclick={onClickTables} order_data={Usetable} className=' w-[50rem] h-[35rem]'/>
        <div className='flex gap-x-7 mx-4 items-center text-neutral-600 text-sm font-medium font-poppins'>
          <div className='flex items-center gap-x-2'>
            <div className='w-7 h-3 bg-neutral-500' />
            <p>Available</p> 
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='w-7 h-3 bg-red-500' />
            <p>Booked</p> 
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='w-7 h-3 bg-teal-600' />
            <p>Selected</p> 
          </div>
          {
            Check?
            <div className='flex flex-1 justify-end text-teal-600 text-sm items-center gap-x-2'>
                <AiOutlineFileSearch className='w-7 h-7' />
                <p>Search Completed</p>
            </div>
            : null
          }
        </div>
      </div>
      <div>
        <IoMdArrowDroprightCircle onClick={() => setExpander(null)} className='cursor-pointer duration-200 ease-in-out hover:text-teal-400 w-[2.1rem] h-[2.1rem] text-teal-600' />
      </div>
      {
        Expander == null?
        <NothingSelected image='/assets/restaurant1.jpg' ac={true} tv={false} table_name='Rectangle Wood Table' room_name='main_room' chair_amount={4} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat saepe quia autem excepturi, modi explicabo numquam corporis, voluptas, quis sit. Perspiciatis, quae architecto.'} />
        :<TableDetail image={Expander.image} ac={Expander.ac} table_name={Expander.table_name} tv={Expander.tv} room_name={Expander.room_name} chair_amount={Expander.chair_amount} description={Expander.description} />
      }
      {
        Showmessage.show?
        <PopupMessage handleChange={messageHandler} message={Showmessage.message} title={Showmessage.title} />
        :null
      }
    </div>
  )
}

export default Tables