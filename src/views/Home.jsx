import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { SwiperCarousel } from '../cmps/SwiperCarousel'
import { slides } from '../services/swiperService';
import { AppRecommendations } from '../cmps/AppRecommendations'
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { WhoAreWe } from './WhoAreWe';
import { NlpBenefits } from './NlpBenefits';
import { WhatToolsYouGet } from './WhatToolsYouGet';
import { Memorial } from '../cmps/Memorial';
import MobileMenu from '../cmps/MobileMenu';
import CoursesIndex from '../cmps/CoursesIndex';

export function Home({setIsActive,isActive,isMobileMenu,setIsMobileMenu }) {
  
 
  const navigate = useNavigate()
  const coursesRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0)
    navigate('/our-courses')
  }, [])
  
  const toggelMobileMenu = () => {
    console.log('isMobileMenu',isMobileMenu);
    setIsMobileMenu(!isMobileMenu)
}
  const scrollTo = (refType) => {
    if(refType === 'coursesRef')scrollToCourses()

  } 
  const scrollToCourses = () =>{
    setIsActive(!isActive)
    console.log('coursesRef',coursesRef);
    window.scrollTo({
    top: coursesRef.current.offsetTop + 500,
    behavior: "smooth"
  })}
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

  return (
    <section className='home-page-container '>
      <MobileMenu 
      toggelMobileMenu={toggelMobileMenu}
      scrollToCourses={scrollToCourses}
                    isMobileMenu={isMobileMenu}
                    setIsMobileMenu={setIsMobileMenu}/>
      <section className='carousel-container'>
        {loggdingUser ?
          <p className='home-greeting'>שלום: {loggdingUser.fullname ? loggdingUser.fullname : loggdingUser.fname}</p>
          : <div className='home-greeting'>שלום אורח</div>}
        {/* שילוב תמונות וציטוטים מספרים: 1-2 4-8 12 14 15 20 */}
        <SwiperCarousel slides={slides} />
      </section>
      <section className='content-container'>
        <section className='welcome-container flex-col'>
          <h2 className='headline'>  ברוכים הבאים למשפחת <span className='tc-b'>NLP</span> חיבורים שמחים שבחרתם להתחבר אלינו</h2>
          <h3 className='sub-headline tc-b' >NLP Connections</h3>
          <h3 className='life-trans-txt tc-b'>Life transformation</h3>
        </section>
        <nav className='main-nav-bar flex-jc'>
          <Link className='main-nav-bar-link' to="/memorial">לזיכרו</Link>
          <Link className='main-nav-bar-link' to="/our-courses">הקורסים שלנו</Link>
          <Link className='main-nav-bar-link' to="/who-are-we">מי אנחנו</Link>
          <Link className='main-nav-bar-link' to="/benefits">יתרונות השיטה</Link>
          <Link className='main-nav-bar-link' to="/nlp-tools">כלים מעשיים</Link>
        </nav>
        <section className='home-page-outlets-container '>
          <Outlet></Outlet>


        </section>
        <section className='mobile-home-page-outlets-container  '>
          {
          <>
          <CoursesIndex ref={coursesRef}/>
          <WhoAreWe/>
          <NlpBenefits/>
          <WhatToolsYouGet/>
          <Memorial/>
          </>
  
        }


        </section>

      </section>


      <AppRecommendations />
    </section>


  )
}
