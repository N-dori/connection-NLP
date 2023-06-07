import React, { useState } from 'react'
import { YouTube } from './YouTube'
import { XSvg } from '../svgs/XSvg'
import { imgService } from '../services/imgService'
import { PlaySvg } from '../svgs/PlaySvg'
import { SampleVideo } from './SampleVideo'

export  function CoursePlayer({setIsPlayerVisible,course }) {

    const [isDark, setIsDark] = useState(false)
    
    const onClose = () =>{
      document.body.style='overflow-y: auto;'
        setIsPlayerVisible(false)
    }
 
const changeToDark = () => {
    setIsDark(!isDark)
}

  return (
    course?
      <section className='course-player-container'>
        <header className='course-header flex-sb '>
        <div className='title-container flex-col'>
            <p>Course Preview</p>
            <p className='title'>{course.title}</p>
        </div>
        <div className="close-btn " onClick={onClose} ><XSvg/></div>
        </header>
        <section className="video-player-warpper ">
        <YouTube videoUrl={course.TrailerVideoUrl}/>
        </section>
        <section className='free-sample-video-container'>
            <p className='headline'>Free Sample Videos</p>
            <ul className='sample-videos-list' onClick={changeToDark}>
             
               <SampleVideo  isDark={isDark} course={course}/>
               <SampleVideo isDark={isDark} course={course}/>
               <SampleVideo isDark={isDark} course={course}/>
              
            
            </ul>
        </section>
        
        </section>:<div>Loading....</div>
  )
}
