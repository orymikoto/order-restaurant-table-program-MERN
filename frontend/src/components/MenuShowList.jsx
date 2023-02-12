import React from 'react'

function MenuShowList({menu_list=[{name: '', description:'', image: '', price: 0}]}, className) {
  return (
    <div className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[4rem] container mb-7 m-auto w-[80%] ${className}`}>
      {
        menu_list.map((item) => 
          <div className='flex col-span-1 flex-col mx-auto items-start'>
            <div className='flex items-center justify-center overflow-hidden h-[15rem] mb-4 md:rounded-tl-[7rem] md:rounded-br-[7rem] '>
              <img src={item.image} alt='pictureoffood' className='min-h-full min-w-full object-cover' />
            </div>
            <div className='text-neutral-900 flex-1'>
              <h4 className='font-poppins font-medium text-2xl'>{item.name.length > 35? item.name.substring(0,35) + '...': item.name}</h4>
              <p className='text-neutral-600 text-md font-light font-poppins text-justify'>This is the description of the food</p>
            </div>
            <div className='self-end flex-initial items-end flex rounded-md font-semibold px-7 py-1 my-2 text-lg text-white  bg-amber-500'>
              <p>${item.price}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default MenuShowList