import React, { useEffect, useState } from 'react'
import { YouTube } from '../cmps/YouTube'
import { MyLearningContent } from '../cmps/MyLearningContent'
import { Link, Outlet, useParams } from 'react-router-dom'
import { courseService } from '../services/course.service'
import ReactPlayer from 'react-player'
import { OutletMenu } from '../cmps/OutletMenu'


export  function MyLearning({videoUrl,setVideoUrl,setCurrCourseId}) {
  const  param = useParams()
  const [course, setCourse] = useState()
  const [isContentShown, setIsContentShown] = useState(true)
  
  
  useEffect(()=>{
    loadCourse(param.id)
    setCurrCourseId(param.id)
    getLecturesSum()
   
  },[])


  const getLecturesSum = () =>{
    let total = []
    let sum =0 
    if(course){
      course.episodes.forEach(episode => {
     sum+= episode.subEpisodes.length
      });
      for (let i = 1; i < sum; i++) {
        total.push(i)
       
      }
      console.log('sum sum sum',course._id);
        return total
    }
   }

  const loadCourse = async (CourseId) => {
    const course = await courseService.getCourseById(CourseId) 
    setCourse(course)  

    console.log('my learning course',course); 
  }
 
  const tuggleContent = () => {
    setIsContentShown(!isContentShown)
  }

  return (
    course?
    
    <section className='my-leanring-container '>
      <section className='my-learning-warpper grid '>
        <div className={isContentShown?'':'open-content flex-jc-ac'} onClick={tuggleContent}>
          <span className={isContentShown?'hidden':'display-content'}>הצג תוכן </span>
        </div>
  <section style={isContentShown?{}:{gridColumn:"1/-1"}} className='video-player-container'>
  <ReactPlayer 
      className="react-player"
      playing
      // width="100%"
      // height="100%"
       url={videoUrl?videoUrl:course.episodes[0].subEpisodes[0].videoUrl} controls/>
  </section>
  <section className={isContentShown?'my-learning-content-container':'hidden'}>
  <MyLearningContent 
  episodes={course.episodes}
  subEpisodes={course.subEpisodes}
  getLecturesSum={getLecturesSum}
  setVideoUrl={setVideoUrl}
  tuggleContent={tuggleContent}
  />


      </section>
  <section style={isContentShown?{ }:{gridColumn:"1/-1"}} className='course-menu-contianer'>
 <OutletMenu />
  <section className='outlets-warpper'>
<Outlet></Outlet>
  </section>
  </section>
  </section>
</section>:<div>Loding...</div>
  )
}
