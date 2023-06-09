import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { courseService } from '../services/course.service';
import { useSelector } from 'react-redux';
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

export  function CouresDetails() {
  const [setRef,visible] = useOnScreen({ threshold:0.2 })

  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

    const navigate = useNavigate()
    const  param = useParams()
    console.log('param',param);
    const [course, setCourse] = useState()
    const [isPlayerVisible, setIsPlayerVisible] = useState(false)
    const [videoUrl, setVideoUrl] = useState(false)
    const [isSidebar, setIsSidebar] = useState(false)
    
    useEffect(() => {
      window.scrollTo(0,0)
      loadCourse(param.id)
    }, [])

 const goToShoppingCart = () => {

    navigate('/shopping-cart')

 }
    const loadCourse = async (CourseId) => {
      const course = await courseService.getCourseById(CourseId) 
      setCourse(course)     
    }
    const changeVideoUrl = (url) => {
      console.log('changeVideoUrl',url);
      setVideoUrl(url)
      }
    return (
      course?
      <>
 <header className='sticky-header'>
  <p>{course.title}</p>
  <p>{course.subTitle}</p>
 </header>    

<section className='coures-details-page-container grid'>
<section className='headlines-wapper grid' >
 <h1 className='course-title flex-clo'ref={setRef}>{course.title}
<h2 className='sub-title'>{course.subTitle}</h2> 
<h2 className='sub-title info '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio, natus ipsum mollitia ea corporis accusantium omnis consequatur, eligendi ex reprehenderit </h2> 
</h1>
{visible?<DetailsModal setIsPlayerVisible={setIsPlayerVisible}  goToShoppingCart={goToShoppingCart}/>:""}  
 </section>  
{visible?'':<SideBarModal goToShoppingCart={goToShoppingCart} setIsPlayerVisible={setIsPlayerVisible}/>}  
   <WhatYouWillLearn />

    <ThisCourseIncludes/>

    <CourseContent 
    changeVideoUrl={changeVideoUrl} 
    intros={course.intros} 
    episodes={course.episodes}
    setIsPlayerVisible={setIsPlayerVisible}/>

    <CouresRequirements/>

    <CourseDesc/>

    <CourseInstructor/>

    <CourseReviews/>
  { isPlayerVisible? 

   <CoursePlayer
   freeSamples={course.freeSamples}
   title={course.title}
   changeVideoUrl={changeVideoUrl}
   videoUrl={videoUrl}
   trailerVideoUrl={course.trailerVideoUrl}
   setIsPlayerVisible={setIsPlayerVisible}
    />:''}

    <div className={isPlayerVisible?'screen-filter':'hidden'} ></div>
</section>
</> :
    <div>Loading...</div>

  )
}
