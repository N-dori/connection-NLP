import React, { useEffect, useState } from 'react'
import { YouTube } from './YouTube'
import { XSvg } from '../svgs/XSvg'
import { imgService } from '../services/imgService'
import { PlaySvg } from '../svgs/PlaySvg'
import { SampleVideo } from './SampleVideo'

export  function CoursePlayer({setIsPlayerVisible,freeSamples,title,trailerVideoUrl,changeVideoUrl,videoUrl}) {
const [count, setCount] =useState()
    console.log('freeSamplesfreeSamples',freeSamples);

useEffect(() => {
  setCount(count+1)
  if(videoUrl){
    changeVideoUrl(videoUrl)

  }else{
    changeVideoUrl(trailerVideoUrl)
  }

}, [])
useEffect(() => {

}, [videoUrl])

    const onClose = () =>{
      document.body.style='overflow-y: auto;'
        setIsPlayerVisible(false)
      }
 


  return (
      <section className='course-player-container'>
        <header className='course-header flex-sb '>
        <div className='title-container flex-col'>
            <p>תצוגה מקדימה</p>
            <p className='title'>{title}</p>
        </div>
        <div className="close-btn " onClick={onClose} ><XSvg/></div>
        </header>
        <section className="video-player-warpper ">
        <YouTube videoUrl={videoUrl}/>
        </section>
        <section className='free-sample-video-container'>
            <p className='headline'>שיעורי ניסיון חינם</p>
            <ul className='sample-videos-list clean' >
             
               <SampleVideo 
               changeVideoUrl={changeVideoUrl}
               freeSamples={freeSamples} />
   
            </ul>
        </section>
        
        </section>
  )
}
