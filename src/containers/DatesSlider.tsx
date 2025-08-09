// @ts-nocheck
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { DateDesc } from '../components/DateDesc'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

type Slide = {
  date: string | number
  desc: string
}

type Props = {
  data?: Slide[]
}

export const DatesSlider = ({ data = [] }: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={80}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      {data.map((s, i) => (
        <SwiperSlide key={`${s.date} + ${i}`}>
          <DateDesc
            date={s.date}
            desc={s.desc}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
