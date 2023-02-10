import React from 'react'
import DataEdit from './DataEdit'

function EditInformationBox({information=[{title: '', name: '', value: ''}], submit, onChange, changemode }) {
  return (
    <form className='container grid grid-cols-6 pb-4' onSubmit={submit}>
      {
        information.map((item) => 
          <DataEdit className='col-span-3 my-2 ml-4 w-[85%]' onChange={onChange} title={item.title} value={item.value} name={item.name} />
        )
      }
      <button type='submit' onClick={() => {changemode(false)}} className='col-start-5 col-end-7 justify-self-end px-2 rounded-md items-center self-end mb-2 hover:bg-teal-600 cursor-pointer h-[2rem] w-[5rem] mr-[15%] bg-teal-500'>
        {/* <FaEdit className='w-6 h-6 text-white' /> */}
        <p className='text-white font-medium mx-2 text-center justify-self-center'>Submit</p>
      </button>
    </form>
  )
}

export default EditInformationBox