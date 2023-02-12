import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay} from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

function HeadOptionImageBG({header=[{bg: '', tittle:'', name: ''}], onChange, className}) {
  return (
      <Swiper onSlideChange={(e) => onChange(e.activeIndex)} className={`w-full h-[21rem] ${className}`} modules={[Navigation, Autoplay]} autoplay={{delay:21000}} navigation >
      {
        header.map((item) => 
          <SwiperSlide id={item.name} className='w-full flex items-center bg-cover bg-center' style={{backgroundImage: `url("${item.bg}")`}}>
            <div className='bg-neutral-700/70 w-full h-full flex items-center justify-center'>
              <h3 className='font-poppins font-medium text-amber-400 text-5xl'>{item.tittle}</h3>
            </div>
          </SwiperSlide>
        )
      }
      </Swiper>
  )
}

export default HeadOptionImageBG