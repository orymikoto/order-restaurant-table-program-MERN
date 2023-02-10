import React from 'react'
import DataShow from '../../components/DataShow'

function Profile() {
  return (
    <div className='container w-[90%] mx-auto pb-7 grid grid-cols-6 my-7 rounded-xl bg-teal-600'>
      <div className='col-span-6 flex justify-center'>
        <div className='h-[9rem] my-7 w-[9rem] overflow-hidden rounded-full bg-cover border-neutral-300 border-[0.21rem] bg-center hover:border-amber-400 duration-300 ease-in-out' style={{backgroundImage: 'url("/assets/pp.jpg")'}}>
          {/* <img src='/assets/pp.jpg' alt='profilepicture' /> */}
        </div>
      </div>
      <DataShow className='col-span-3 my-2 mx-2 ml-4 w-[77%]' title='Name' value='Mikli Oktarianto' /> 
      <div className='row-span-6 col-span-3 rounded-xl w-[65%] justify-self-center bg-neutral-100'>
      </div>
      <DataShow className='col-span-3 my-2 mx-2 ml-4 w-[77%]' title='Name' value='Mikli Oktarianto' /> 
      <DataShow className='col-span-3 my-2 mx-2 ml-4 w-[77%]' title='Name' value='Mikli Oktarianto' /> 
    </div>
  )
}

export default Profile