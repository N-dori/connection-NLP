import React, { useEffect, useState } from 'react'
import { YouTube } from '../cmps/YouTube'
import { MyLearningContent } from '../cmps/MyLearningContent'
import { useParams } from 'react-router-dom'
import { courseService } from '../services/course.service'
import ReactPlayer from 'react-player'


export  function MyLearning() {
  const  param = useParams()
  const [course, setCourse] = useState()
  const [total, setTotal] = useState([])
  const [videoUrl, setVideoUrl] = useState(false)
  
  useEffect(()=>{
    loadCourse(param.id)
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
      console.log('sum sum sum',total);
        return total
    }
   }
  const loadCourse = async (CourseId) => {
    const course = await courseService.getCourseById(CourseId) 
    setCourse(course)    
    console.log('my learning course',course); 
  }

  return (
    course?
    <section className='my-leanring-container '>
      <section className='my-learning-warpper grid '>
  <section className='video-player-container'>
  <ReactPlayer 
      className="react-player"
      playing
      width="100%"
      height="100%"
       url={'https://www.youtube.com/watch?v=O2YfmQFcA-k'} controls/>
  </section>
  <section className='my-learning-content-container'>
  <MyLearningContent 
  episodes={course.episodes}
  subEpisodes={course.subEpisodes}
  getLecturesSum={getLecturesSum}
 
  />


      </section>
  <section className='outlets-contianer'>
  <section className='outlets-warpper'>

  </section>
  </section>
  </section>
</section>:<div>Loding...</div>
  )
}
