import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { courseService } from '../services/course.service';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsModal } from '../cmps/DetailsModal';
import { WhatYouWillLearn } from '../cmps/WhatYouWillLearn';
import { ThisCourseIncludes } from '../cmps/ThisCourseIncludes';
import { CourseContent } from '../cmps/CourseContent';
import { CouresRequirements } from '../cmps/CouresRequirements';
import { CourseDesc } from '../cmps/CourseDesc';
import { CourseInstructor } from '../cmps/CourseInstructor';
import { CourseReviews } from '../cmps/CourseReviews';
import { useOnScreen } from '../customHooks/useOnScreen';
import { SideBarModal } from '../cmps/SideBarModal';
import { CoursePlayer } from '../cmps/CoursePlayer';
import { addToUserCart } from '../store/actions/cart.actions'
import { PlaySvg } from '../svgs/PlaySvg';
import { imgService } from '../services/imgService';
import MobileDetailsFooter from '../cmps/MobileDetailsFooter';

export function CouresDetails() {
  const [setRef, visible] = useOnScreen({ threshold: 0.2 })

  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const param = useParams()
  console.log('param', param);
  const [course, setCourse] = useState()
  const [isPlayerVisible, setIsPlayerVisible] = useState(false)
  const [videoUrl, setVideoUrl] = useState(false)
  const [userMsg, setUserMsg] = useState(null)
  const [formatedPrice, setFormatedPrice] = useState(null)
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    loadCourse(param.id)

  }, [])

  const addToCart = () => {
/*     if (loggdingUser) { */
      dispatch(addToUserCart(course._id))
          setTimeout(() => {
      navigate('/shopping-cart')

    }, 1500);
      /* goToShoppingCart() */

  /*   } else {
      setUserMsg(true)
      setTimeout(() => {
        setUserMsg(null)
      }, 5000);
    } */

  }

  const goToShoppingCart = () => {
    setTimeout(() => {
      navigate('/shopping-cart')

    }, 1500);
  }
  const loadCourse = async (CourseId) => {
    const course = await courseService.getCourseById(CourseId)
    setCourse(course)
    if(course){
      getFormatedPrice(course.price)
    }
  }
  const changeVideoUrl = (url) => {
    console.log('changeVideoUrl', url);
    setVideoUrl(url)
  }
  const onOpenPlayer = () => {
    document.body.style = 'overflow-y: hidden;'
    setIsPlayerVisible(true)
  }
  const  getFormatedPrice = async(price) => {
    let formatPrice = new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' })

       let priceBeforeDiscount = (+price+(+price*0.1)).toFixed(0)
       setPriceBeforeDiscount(formatPrice.format(priceBeforeDiscount)) 
       setFormatedPrice(formatPrice.format(price))

     
  }
  
  
  

  return (
    course ?
      <>
        <header className='sticky-header'>
          <p>{course.title}</p>
          <p>{course.subTitle}</p>
        </header>

        <section className='coures-details-page-container grid'>
          <section className='headlines-wapper grid' ref={setRef} >

            <div className='mobile-preview-course-container ' onClick={onOpenPlayer}>
              <div className='mobile-preview-course-img-wrapper flex-jc-ac '>
                <img className='mobile-preview-course-img' src="https://res.cloudinary.com/dii16awkb/image/upload/v1687866273/imgCoverAdvanceCourse_s6sxkv.png" alt="" />
                <PlaySvg />
              </div>
            <p className='click-for-preview'>לצפייה בתצוגה מקדימה</p>
            </div>

            <section className="course-title-container">
              <h1 className='course-title flex-clo'>{course.title}
                <span className='sub-title block'>{course.subTitle}</span>
                <span className='sub-title info block '>{course.createdBy} </span>
              </h1>
                <button className='mobile-add-to-cart-btn flex-ac' onClick={addToCart}>הוסף לעגלה</button>
            </section>
            {visible ? <DetailsModal priceBeforeDiscount={priceBeforeDiscount} formatedPrice={formatedPrice} userMsg={userMsg} price={course.price} addToCart={addToCart} setIsPlayerVisible={setIsPlayerVisible} /> : ""}
          </section>
          {visible ? '' : <SideBarModal userMsg={userMsg} priceBeforeDiscount={priceBeforeDiscount} formatedPrice={formatedPrice} addToCart={addToCart} setIsPlayerVisible={setIsPlayerVisible} />}
          <WhatYouWillLearn />

          <ThisCourseIncludes />

          <CourseContent
            episodes={course.episodes}
            intros={course.intros}
            changeVideoUrl={changeVideoUrl}
            setIsPlayerVisible={setIsPlayerVisible} />

          <CouresRequirements />

          <CourseDesc />

          <CourseInstructor />

          <CourseReviews />
          {isPlayerVisible ?

            <CoursePlayer
              freeSamples={course.freeSamples}
              title={course.title}
              changeVideoUrl={changeVideoUrl}
              videoUrl={videoUrl}
              trailerVideoUrl={course.freeSamples[0].videoUrl}
              setIsPlayerVisible={setIsPlayerVisible}
            /> : ''}

          <div className={isPlayerVisible ? 'screen-filter' : 'hidden'} ></div>
        </section>
        {visible?"":  <MobileDetailsFooter 
        addToCart={addToCart}
          subTitle={course.subTitle}
          title={course.title} 
          priceBeforeDiscount={priceBeforeDiscount}
           formatedPrice={formatedPrice}/>}
      </> :
      <div>Loading...</div>

  )
}
