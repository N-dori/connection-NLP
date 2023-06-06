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

export  function CouresDetails() {
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

    const navigate = useNavigate()
    const  param = useParams()
    console.log('param',param);
    const [course, setCourse] = useState()
    const [isShown, setIsShown] = useState(false)
    
    useEffect(() => {
      loadCourse(param.id)
    }, [])
 
    const loadCourse = async (CourseId) => {
      const course = await courseService.getCourseById(CourseId) 
      setCourse(course)     
    }
 

  return (
    course?
    <>
     
<section className='coures-details-headlines-container grid'>
  {/* <DetailsModal/> */}
<section className='headlines-wapper'>
 <h1 className='course-title'>{course.title}</h1>
<h2 className='sub-title'>{course.subTitle}</h2> 
<h2 className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio, natus ipsum mollitia ea corporis accusantium omnis consequatur, eligendi ex reprehenderit </h2> 
</section>
</section>
<section className='what-to-learn-container grid'>
   <WhatYouWillLearn/>
</section>
<section className='This-course-includes grid'>
    <ThisCourseIncludes/>
</section>
<section className='course-content-container grid '>
    <CourseContent/>
</section>
<section className='requirements-desc grid '>
    <CouresRequirements/>
    <CourseDesc/>
</section>


    
    </>:
    <div>Loading...</div>
 

  )
}
