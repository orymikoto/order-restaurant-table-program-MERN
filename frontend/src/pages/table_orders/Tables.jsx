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
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import OrderingTableModal from './components/OrderingTableModal'

function Tables() {
  const [Start, setStart] = useState('10:00')
  const [End, setEnd] = useState('21:00')
  const [Date, setDate] = useState(moment().add(1, 'day').format('YYYY-MM-DD'))
  const [cookies] = useCookies()
  const [select , setselect] = useState({
    active: null,
    number: null,
    chair: null,
    location: null
  })
  const [Customerdata, setCustomerdata] = useState({
    name: '',
    number: ''
  })
  const [ , setOrdertable] = useState([{}])
  const [Check, setCheck] = useState(false)
  const [Ordering, setOrdering] = useState(false)
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

  const handleChange = (e) => {
    setCustomerdata((prevState) => {
      return {...prevState, ...{ [e.target.name] : e.target.value}}
    })
  }

  const orderTablePost = () => {
    const data_order = {
      name: select.number,
      start_time: `${Date}T${Start}`,
      end_time: `${Date}T${End}`,
      customer_phone_number: Customerdata.number,
      customer_name: Customerdata.name
    }
    axios.post(process.env.REACT_APP_SERVER_URL + '/order-table/create-user', data_order, { headers : {"Authorization": `Bearer ${cookies.auth_token}`}}).then((res) => {
      console.log(res);
      setCustomerdata({
        name: '',
        number: ''
      })
      messageHandler(true, 'Order Success', res.data.message)
    }).catch((err) => {
      messageHandler(true, 'Order Failed', err.response.data.message)
      console.error(err);
    })
  }

  const call_state = (e, id, chair, location) => {
    setselect({
      active: e,
      number: id,
      chair: chair,
      location: location
    })
    console.log(select);
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
    <div className='bg-neutral-100'>
      <Navbar />
      <div className='flex justify-center my-7 mx-auto'>
        <h2 className='text-5xl text-amber-500 font-unbounded'>ORDER TABLE</h2>
      </div>
      <div className='flex lg:flex-row flex-col w-full my-7 items-center'>
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
          <FloorPlan active={select.active} call_state={call_state} onclick={onClickTables} order_data={Usetable} className=' w-[50rem] h-[35rem]'/>
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
          <IoMdArrowDroprightCircle onClick={() => {setExpander(null); setselect(null)} } className='cursor-pointer duration-200 ease-in-out hover:text-teal-400 w-[2.1rem] h-[2.1rem] text-teal-600' />
        </div>
        {
          Expander == null?
          <NothingSelected image='/assets/restaurant1.jpg' ac={true} tv={false} table_name='Rectangle Wood Table' room_name='main_room' chair_amount={4} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat saepe quia autem excepturi, modi explicabo numquam corporis, voluptas, quis sit. Perspiciatis, quae architecto.'} />
          :<TableDetail setorder={setOrdering} image={Expander.image} ac={Expander.ac} table_name={Expander.table_name} tv={Expander.tv} room_name={Expander.room_name} chair_amount={Expander.chair_amount} description={Expander.description} />
        }
        {
          Showmessage.show?
          <PopupMessage handleChange={messageHandler} message={Showmessage.message} title={Showmessage.title} />
          :null
        }
        {
          Ordering?
            <OrderingTableModal customer_data={Customerdata} confirm={orderTablePost} onChange={handleChange}  date={Date} start={Start} end={End} back={setOrdering} number={select.number} chair={select.chair} location={select.location} />
          :null
        }
      </div>
      <Footer />
    </div>
  )
}

export default Tables