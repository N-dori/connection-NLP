import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { SwiperCarousel } from '../cmps/SwiperCarousel'
import { slides } from '../services/swiperService';
import { AppRecommendations } from '../cmps/AppRecommendations'
import { Link, Outlet, useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate()
  const ref = useRef();
  useEffect(() => {
    window.scrollTo(0, 0)
    navigate('/our-courses')
  }, [])

 const scrollTo = () => window.scrollTo({
    top: ref.current.offsetTop -100, 
    behavior: "smooth"
})
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

  return (
    <section className='home-page-container '>
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

      </section>

      
      <AppRecommendations />
    </section>


  )
}
