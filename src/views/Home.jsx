import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CoursesIndex } from '../cmps/CoursesIndex'
import { SwiperCarousel } from '../cmps/SwiperCarousel'
import { slides } from '../services/swiperService';
import { AppRecommendations } from '../cmps/AppRecommendations'

export  function Home() {
useEffect(() => {
window.scrollTo(0,0)
}, [])

  
const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

  return (
    <section className='home-page-container grid'>
      <section className='carousel-container'>
              {loggdingUser?
     <p className='home-greeting'>hello {loggdingUser.fullname?loggdingUser.fullname:loggdingUser.fname}</p>
     :<div>Hello Guest</div>}
     <SwiperCarousel slides={slides}/>
      </section>
       <section className='title-container'>
        <h1>A broad selection of courses</h1>
        <h3>Choose from over 210,000 online video courses with new additions published every month</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora quidem! Dignissimos, unde adipisci. Obcaecati temporibus id totam, ut dignissimos eligendi a. Distinctio adipisci, eum saepe voluptatem laboriosam nulla quis.</h4>
        </section> 
       <CoursesIndex/>
       
      <h1 className='recommendations-title'>Students tell about us</h1>
      <AppRecommendations/>
    </section>
  
    
    )
}
