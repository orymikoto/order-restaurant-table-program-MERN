import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// SwiperCore.use([Navigation])

function ImageSwiperSlider({images}) {
  return (
        <Swiper autoplay={{delay:3000}} className='w-full h-[15rem]' modules={[Navigation, Autoplay, A11y]} loop={true} navigation >
          {
            images.map((i) => 
              <SwiperSlide className='text-center'>
                <img src={i} className='w-full' alt="mikotopic" />
              </SwiperSlide>
            )
          }
        </Swiper>
  )
}

export default ImageSwiperSlider