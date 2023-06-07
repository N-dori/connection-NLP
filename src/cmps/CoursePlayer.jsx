import React, { useEffect, useState } from 'react'
import { YouTube } from './YouTube'
import { XSvg } from '../svgs/XSvg'
import { imgService } from '../services/imgService'
import { PlaySvg } from '../svgs/PlaySvg'
import { SampleVideo } from './SampleVideo'

export  function CoursePlayer({setIsPlayerVisible,freeSamples,title,trailerVideoUrl }) {

    const [videoUrl, setVideoUrl] = useState(false)
    console.log('freeSamplesfreeSamples',freeSamples);
 
useEffect(() => {
  changeVideoUrl(trailerVideoUrl)

}, [])

    const onClose = () =>{
      document.body.style='overflow-y: auto;'
        setIsPlayerVisible(false)
      }
 
    const changeVideoUrl = (url) => {
      console.log('changeVideoUrl',url);
      setVideoUrl(url)
      }

  return (
      <section className='course-player-container'>
        <header className='course-header flex-sb '>
        <div className='title-container flex-col'>
            <p>Course Preview</p>
            <p className='title'>{title}</p>
        </div>
        <div className="close-btn " onClick={onClose} ><XSvg/></div>
        </header>
        <section className="video-player-warpper ">
        <YouTube videoUrl={videoUrl}/>
        </section>
        <section className='free-sample-video-container'>
            <p className='headline'>Free Sample Videos</p>
            <ul className='sample-videos-list' >
             
               <SampleVideo 
               changeVideoUrl={changeVideoUrl}
               freeSamples={freeSamples} />
   
            </ul>
        </section>
        
        </section>
  )
}
