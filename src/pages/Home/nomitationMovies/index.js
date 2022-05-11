import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '~/card';
const NomitationMovie = () => {
  return (
    <div className='nomitation_movie-container'>
        <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={10}
        slidesPerView={6}
        navigation
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        >
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default NomitationMovie