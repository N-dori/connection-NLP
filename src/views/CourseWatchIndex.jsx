import React, { useEffect, useState } from 'react'
import { courseService } from '../services/course.service'
import { useParams } from 'react-router-dom'
import { YouTube } from '../cmps/YouTube';

export  function CourseWatchIndex() {
    const [course, setCourse] = useState()
    const [video, setVideo] = useState()
    const [episodes, setEpisodes] = useState()
    const param = useParams()

    useEffect(() => {
        loadCourse(param.id)
      }, [])
  
      const loadCourse = async (CouresId) => {
        const course = await courseService.getCourseById(CouresId) 
        setVideo(course.videoUrl)
        setEpisodes(course.episodes)
        setCourse(course)
      }


      
      const getVideo = (video) => {
       console.log('colsososos',video);
       setVideo(video)
      }
      return (
          course?
          <section className='watch-course'> 
          <section className='watch-course-header'>
            <h1>{course.title}</h1>
            <YouTube videoUrl={video}/>
          </section>
          <ul className='episodes-list'>
            <span className='episodes'>episodes : </span>
            {episodes.map(episode=>
                <li  key={episode.id} onClick={()=>getVideo(episode.video)} >{episode.title}</li>)}
          </ul>
          </section>:
    <div>Loading...</div>
  )
}
