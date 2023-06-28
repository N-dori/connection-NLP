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

  useEffect(() => {
    window.scrollTo(0, 0)
    loadCourse(param.id)
  }, [])

  const addToCart = () => {
    if (loggdingUser) {
      dispatch(addToUserCart(course._id))
      goToShoppingCart()

    } else {
      setUserMsg(true)
      setTimeout(() => {
        setUserMsg(null)
      }, 5000);
    }

  }

  const goToShoppingCart = () => {
    setTimeout(() => {
      navigate('/shopping-cart')

    }, 1500);
  }
  const loadCourse = async (CourseId) => {
    const course = await courseService.getCourseById(CourseId)
    setCourse(course)
  }
  const changeVideoUrl = (url) => {
    console.log('changeVideoUrl', url);
    setVideoUrl(url)
  }
  const onOpenPlayer = () => {
    document.body.style = 'overflow-y: hidden;'
    setIsPlayerVisible(true)
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
                <button className='mobile-add-to-cart-btn flex-ac'>הוסף לעגלה</button>
            </section>
            {visible ? <DetailsModal userMsg={userMsg} price={course.price} addToCart={addToCart} setIsPlayerVisible={setIsPlayerVisible} /> : ""}
          </section>
          {visible ? '' : <SideBarModal userMsg={userMsg} price={course.price} addToCart={addToCart} setIsPlayerVisible={setIsPlayerVisible} />}
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
      </> :
      <div>Loading...</div>

  )
}
