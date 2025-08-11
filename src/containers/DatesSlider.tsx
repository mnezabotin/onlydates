
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { DateDesc } from '../components/DateDesc'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/bundle'

import { styled } from 'styled-components'
import { media } from '../styles/theme'
import { useMediaQuery } from '../hooks/useMediaQuery'

const Layout = styled.div`
  & .swiper {
    overflow: visible;
  }
  & .swiper-pagination {
    top: 132%;
  }

  @media (min-width: ${media.tablet}) {
    & .swiper-pagination {
      display: none;
    }
    & .swiper {
      overflow: hidden;
    }
  }
`

type Slide = {
  date: string | number
  desc: string
}

type Props = {
  data?: Slide[]
}

export const DatesSlider = ({ data = [] }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${media.tablet})`)

  return (
    <Layout>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={80}
        slidesPerView={isMobile ? 1 : 3}
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
    </Layout>
  )
}
