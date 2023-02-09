import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// SwiperCore.use([Navigation])

function LeftSliderRightDesc() {
  return (
        <Swiper autoplay={{delay:3000}} className='w-full h-[15rem]' modules={[Navigation, Autoplay, A11y]} loop={true} navigation >
          <SwiperSlide className='text-center bg-slate-400'>
            <img src="/assets/restaurant1.jpg" className='w-full' alt="mikotopic" />
          </SwiperSlide>
          <SwiperSlide className='text-center w-full bg-slate-400'>
            <img src='/assets/restaurant2.jpg' className='w-full' alt='mikoto2pic'/>
          </SwiperSlide>
        </Swiper>
  )
}

export default LeftSliderRightDesc