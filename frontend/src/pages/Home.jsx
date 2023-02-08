// NPM Package
import React from 'react'
import Footer from '../components/Footer'

// Local Components Package
import Navbar from '../components/Navbar'

// Images

function Home() {
  return (
    <div className='bg-yellow-400'>
      <Navbar />
      <div className='flex w-full py-7 items-center pb-7 bg-yellow-400'>
        <div className="flex flex-1 flex-col ml-[7rem]">
          <p className='text-xl text-white font-semibold'>Bring your taste to the next level!</p>
          <h3 className='text-4xl font-unbounded text-teal-400'>MIKOTO RESTAURANT</h3>
          <p className='mt-7 text-2xl text-pink-700 font-mrdafoe'>Rent your table now before it's too late!</p>
          <button className='my-2 hover:bg-fuchsia-700/25 ease-in-out duration-200 hover:border-pink-600 hover:text-pink-600 rounded-lg border-[0.15rem] w-[14rem] text-pink-700 font-medium border-pink-700 text-2xl h-[3rem]'>RENT TABLE</button>
        </div>
        <div className="relative h-[700px] flex-1 items-center justify-center">
          <img className='absolute m-auto w-[700px]' src="/assets/circle.png" alt="circle" />
          <img className='absolute m-auto translate-x-[5.5rem] translate-y-[5rem] w-[500px]' src='/assets/steak.png'  alt='steakpicture'/>
        </div>
      </div>
      <div className='flex bg-yellow-400 flex-col w-full'>
        <div className='m-auto border-t-4 w-[21vw] text-center mb-10'>
          <h3 className='text-3xl mt-2 font-bold text-neutral-100'>MENU</h3>
        </div>
        <div className='flex gap-10 justify-center w-full mx-7 mb-7'>
          <div className='drop-shadow-lg hover:shadow-2xl ease-in-out duration-500 cursor-default hover:-translate-x-1 hover:-translate-y-1 w-[21rem] rounded-2xl bg-white'>
            <h4 className='text-neutral-800 text-2xl font-bold my-2 text-center'>Menu Name</h4>
            <img className='h-[13rem] m-auto my-7' src='/assets/coffee.png' alt="menu1"/>
            <div className=' text-justify m-7'>
              <p className='text-neutral-600 text-center text-lg font-semibold'>Description:</p>
              <p className='text-neutral-600 font-medium'>Very delicious menu cooked by masterclass chef. The Dishes is cooked in perfect temperature and using the best resource available in order to bring new tasted experience to the our lovely Customer</p>
            </div>
          </div>
          <div className='drop-shadow-lg hover:shadow-2xl ease-in-out duration-500 cursor-default hover:-translate-x-1 hover:-translate-y-1 w-[21rem] rounded-2xl bg-white'>
            <h4 className='text-neutral-800 text-2xl font-bold my-2 text-center'>Menu Name</h4>
            <img className='h-[13rem] m-auto my-7' src='/assets/russianbev.png' alt="menu2"/>
            <div className=' text-justify m-7'>
              <p className='text-neutral-600 text-center text-lg font-semibold'>Description:</p>
              <p className='text-neutral-600 font-medium'>Very delicious menu cooked by masterclass chef. The Dishes is cooked in perfect temperature and using the best resource available in order to bring new tasted experience to the our lovely Customer</p>
            </div>
          </div>
          <div className='drop-shadow-lg hover:shadow-2xl ease-in-out duration-500 cursor-default hover:-translate-x-1 hover:-translate-y-1 w-[21rem] rounded-2xl bg-white'>
            <h4 className='text-neutral-800 text-2xl font-bold my-2 text-center'>Menu Name</h4>
            <img className='h-[13rem] m-auto my-7' src='/assets/tea.png' alt="menu3"/>
            <div className=' text-justify m-7'>
              <p className='text-neutral-600 text-center text-lg font-semibold'>Description:</p>
              <p className='text-neutral-600 font-medium'>Very delicious menu cooked by masterclass chef. The Dishes is cooked in perfect temperature and using the best resource available in order to bring new tasted experience to the our lovely Customer</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home