import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';


export  function SwiperCarousel({slides ,recommendations }) {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides?
      slides.map((slide)=>(<SwiperSlide key={slide.id} alt={slide.title}>
        <img className='carousel-img' src={slide.image} alt={slide.title}/>
      </SwiperSlide>))
      :<div>Loading...</div>
      }
      
    </Swiper>
  )
}
