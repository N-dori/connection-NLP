import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
SwiperCore.use([Autoplay]);

export  function SwiperCarousel({slides ,recommendations }) {
  return (
    <Swiper
    modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      speed={1000}
      autoplay={{delay: 8500,
        disableOnInteraction: false,}}
      navigation
      pagination={{ clickable: true }}
      
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides?
      slides.map((slide)=>(<SwiperSlide key={slide.id} alt={slide.title}>
        <div className='caption-container'>

        <p className='slide-captions'>{slide.title}</p>
        </div>

        <img className='carousel-img' src={slide.image} alt={slide.title}/>
      </SwiperSlide>))
      :<div>Loading...</div>
      }
      
    </Swiper>
  )
}
