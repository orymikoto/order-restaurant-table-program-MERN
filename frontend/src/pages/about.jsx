import React from 'react'
import { useCookies } from 'react-cookie'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import { BsGlobe2 } from 'react-icons/bs'
import { FaReact, FaGithub, FaInstagram } from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { HiCode, HiMail } from 'react-icons/hi'
import ImageSwiperSlider from '../components/ImageSwiperSlider'

function About() {
  const [ cookies ] = useCookies()
  return (
    <div>
      <Navbar auth={cookies.auth_token === undefined ?true:false}/>
      
      <div className='flex flex-col items-center'>
        <div className='flex flex-col w-full items-center my-7'>
          <h2 className='text-5xl font-unbounded text-amber-500'>ABOUT MIKOTO MERN</h2>
          <div className='grid grid-cols-6 gap-x-7 gap-y-4 px-7 pb-4 my-[7rem] mt-[4.2rem] w-[60%] bg-white rounded-xl shadow-[7px_7px_21px_10px_rgba(0,0,0,0.21)]'>
            <h3 className='col-span-6 text-center font-poppins font-semibold text-xl mt-2 text-neutral-900'>What is Mikoto MERN?</h3>
            <div className='col-span-2 flex flex-col items-center font-poppins text-center text-xs text-neutral-600'>
              <BsGlobe2 className='w-10 h-10 text-amber-500' />
              <h4 className='font-semibold text-neutral-900 text-lg'>Website Project</h4>
              <p>Mikoto MERN is a website project build from scratch wether the backend or the frontend also the design</p>
            </div>
            <div className='col-span-2 flex flex-col  items-center font-poppins text-center text-xs text-neutral-600' >
              <FaReact className='w-10 h-10 text-amber-500'/>
              <h4 className='font-semibold text-neutral-900 text-lg'>React Front End</h4>
              <p>Mikoto MERN is a website that build using React js and its library such as swiperjs and antd for design</p>
            </div>
            <div className='col-span-2 flex flex-col  items-center font-poppins text-center text-xs text-neutral-600' >
              <SiExpress className='w-10 h-10 text-amber-500' />
              <h4 className='font-semibold text-neutral-900 text-lg'>Express Back End</h4>
              <p>Mikoto MERN Website API is build using express js and using many package for supporting it but mainly using express</p>
            </div>
            <div className='col-start-2 col-end-4 flex flex-col  items-center font-poppins text-center text-xs text-neutral-600' >
              <SiMongodb className='w-10 h-10 text-amber-500' />
              <h4 className='font-semibold text-neutral-900 text-lg'>MongoDB</h4>
              <p>Mikoto MERN database is not using sql but using MongoDB as it is very well suited for JS and easy to use</p>
            </div>
            <div className='col-start-4 col-end-6 flex flex-col  items-center font-poppins text-center text-xs text-neutral-600' >
              <HiCode className='w-10 h-10 text-amber-500 cursor-pointer duration-[750ms] ease-in-out hover:text-teal-600' />
              <h4 className='font-semibold text-neutral-900 text-lg'>Code by Mikoto</h4>
              <p>Mikoto MERN just as its name is being develop/created by Mikoto Himself. More about him click the code icon above</p>
            </div>
            
          </div>
        </div>
        <ImageSwiperSlider className='w-[95%] mx-auto mb-7 h-[30rem] rounded-2xl overflow-hidden' images={['/assets/about/1.jpg', '/assets/about/2.jpg', '/assets/about/3.jpg', '/assets/about/4.jpg', '/assets/about/5.jpg']} />
        <div className='lg:w-[71%] md:w-[82%] gap-y-4 grid grid-cols-6 my-4'>
          <div className='col-span-full text-neutral-900 text-center'>
            <h3 className='text-neutral-900 font-poppins font-bold text-xl'>About</h3>
            <h3 className='text-neutral-900 font-unbounded text-lg'>Orymikoto  <strong className='font-mrdafoe font-light text-neutral-600'>Developer</strong></h3>
          </div>
          <div className='col-span-2 flex items-center justify-center'>
            <FaGithub className='w-[4.2rem] h-[4.2rem] text-teal-900' />
          </div>
          <div className='col-span-4 font-poppins text-neutral-600'>
            <h3 className='font-semibold text-teal-600 text-2xl'>Work on Github</h3>
            <p className='text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus officia magni perferendis, vero atque dolorum, excepturi ipsam quos incidunt saepe quaerat. Perferendis laborum nemo, qui cumque doloribus adipisci assumenda, modi sequi odio enim ut magni suscipit nobis quo unde excepturi eaque odit officiis dolores ducimus quaerat voluptatum eius? Aliquid!</p>
          </div>
          <div className='col-span-2 flex items-center justify-center'>
            <FaInstagram className='w-[4.2rem] h-[4.2rem] text-teal-900' />
          </div>
          <div className='col-span-4 font-poppins text-neutral-600'>
            <h3 className='font-semibold text-teal-600 text-2xl'>Instagram Account</h3>
            <p className='text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium quod magni porro aliquid nisi, sapiente voluptates debitis blanditiis expedita natus, reiciendis error adipisci consectetur nesciunt dignissimos amet a dolor. Animi illo maiores similique, ea neque, qui laudantium et veniam dolore earum suscipit optio fuga non. Totam perferendis ipsum fugit!</p>
          </div>
          <div className='col-span-2 flex items-center justify-center'>
            <HiMail className='w-[4.2rem] h-[4.2rem] text-teal-900' />
          </div>
          <div className='col-span-4 font-poppins text-neutral-600'>
            <h3 className='font-semibold text-teal-600 text-2xl'>Professional Contract</h3>
            <p className='text-sm text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste facilis at minus libero beatae necessitatibus vitae aut mollitia repellendus deserunt, sequi voluptas, numquam, consectetur blanditiis odio minima? Repellendus accusamus quaerat omnis corporis minus sed, excepturi recusandae, nisi aspernatur incidunt quasi delectus. Quos quibusdam deserunt cumque cupiditate natus, repudiandae delectus iste.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About