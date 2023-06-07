import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { courseService } from '../services/course.service';
import { useSelector } from 'react-redux';
import { YouTube } from '../cmps/YouTube';
import { DetailsModal } from '../cmps/DetailsModal';
import { WhatYouWillLearn } from '../cmps/WhatYouWillLearn';
import { ThisCourseIncludes } from '../cmps/ThisCourseIncludes';
import { CourseContent } from '../cmps/CourseContent';
import { CouresRequirements } from '../cmps/CouresRequirements';
import { CourseDesc } from '../cmps/CourseDesc';
import { CourseInstructor } from '../cmps/CourseInstructor';
import { CourseReviews } from '../cmps/CourseReviews';
import { useOnScreen } from '../customHooks/useOnScreen';
import { StickyModal } from '../cmps/StickyModal';
import { CoursePlayer } from '../cmps/CoursePlayer';

export  function CouresDetails() {
  const [setRef,visible] = useOnScreen({ threshold:0.2 })

  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

    const navigate = useNavigate()
    const  param = useParams()
    console.log('param',param);
    const [course, setCourse] = useState()
    const [isShown, setIsShown] = useState(false)
    const [isPlayerVisible, setIsPlayerVisible] = useState(false)
    
    useEffect(() => {
      window.scrollTo(0,0)
      loadCourse(param.id)
    }, [])
 
    const loadCourse = async (CourseId) => {
      const course = await courseService.getCourseById(CourseId) 
      setCourse(course)     
    }

    return (
      course?
      <>
 <header className='sticky-header'>
  <p>{course.title}</p>
  <p>{course.subTitle}</p>
 
 </header>    
<section className='coures-details-page-container grid'>
<section className='headlines-wapper grid' ref={setRef}>
 <h1 className='course-title'>{course.title}</h1>
<h2 className='sub-title'>{course.subTitle}</h2> 
<h2 className='sub-title info '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio, natus ipsum mollitia ea corporis accusantium omnis consequatur, eligendi ex reprehenderit </h2> 
 </section>  
{visible?<DetailsModal setIsPlayerVisible={setIsPlayerVisible} />:<StickyModal/>}  
   <WhatYouWillLearn/>

    <ThisCourseIncludes/>

    <CourseContent/>

    <CouresRequirements/>

    <CourseDesc/>

    <CourseInstructor/>

    <CourseReviews/>
  { isPlayerVisible? 
   <CoursePlayer
   freeSamples={course.freeSamples}
   title={course.title}
   trailerVideoUrl={course.trailerVideoUrl}
   setIsPlayerVisible={setIsPlayerVisible}
    />:''}
    <div className={isPlayerVisible?'screen-filter':'screen-filter-0'} ></div>
</section>
</> :
    <div>Loading...</div>

  )
}
