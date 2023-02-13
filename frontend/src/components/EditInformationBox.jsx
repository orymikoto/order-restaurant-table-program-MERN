import React from 'react'
import DataEdit from './DataEdit'

function EditInformationBox({information=[{title: '', name: '', value: ''}], submit, onChange, changemode, messageHandler }) {
  return (
    <form className='container grid grid-cols-6 pb-4' onSubmit={submit}>
      {
        information.map((item) => 
          <DataEdit className='col-span-3 my-2 ml-4 w-[85%]' disabled={item.name === 'email'?true:false} onChange={onChange} title={item.title} value={item.value} name={item.name} />
        )
      }
      <div className='flex mr-[15%] justify-self-end gap-x-2 col-start-5 col-end-7'>
        <button type='button' onClick={() => {changemode(false)}} className=' px-2 rounded-md items-center self-end mb-2 hover:bg-red-600 cursor-pointer h-[2rem] w-[5rem] bg-red-500'>
          {/* <FaEdit className='w-6 h-6 text-white' /> */}
          <p className='text-white font-medium mx-2 text-center justify-self-center'>Back</p>
        </button>
        <button onClick={() => messageHandler(true, 'Profile Updated', 'Your user profile data is successfully updated')} type='submit' className=' px-2 rounded-md items-center self-end mb-2 hover:bg-teal-600 cursor-pointer h-[2rem] w-[5rem] bg-teal-500'>
          {/* <FaEdit className='w-6 h-6 text-white' /> */}
          <p className='text-white font-medium mx-2 text-center justify-self-center'>Submit</p>
        </button>
      </div>
    </form>
  )
}

export default EditInformationBox