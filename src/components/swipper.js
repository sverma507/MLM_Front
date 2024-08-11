import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swipper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/19.png" /></SwiperSlide>
        <SwiperSlide><img src="/images/20.png" /></SwiperSlide>
        <SwiperSlide><img src="/images/21.png" /></SwiperSlide>
      </Swiper>
    </>
  );
}
