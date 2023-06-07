import React, { useEffect, useState } from 'react'
import { PlaySvg } from '../svgs/PlaySvg'
import { imgService } from '../services/imgService'
export  function SampleVideo({course,isDark}) {
    const [isClicked, setIsClicked] = useState(false)
    
    useEffect(() => {
        return ()=>{
          setIsClicked(false)
        }
    }, [isDark])
    
    const onVideoClick = () =>{
 
        setIsClicked(true)
        console.log('isClicked',isClicked); 
    }
    const unClicked = () => {
        setIsClicked(false)
    }

  return (
  
    <li onClick={onVideoClick} 
       className='video-container'>
   <div style={{backgroundColor:isClicked?'#333333':'#111111'}} className='wrapper-video-link clicked-video flex-ac'>
    <div className='video-img-wrapper'><img className='video-img' src={imgService.getImg('giveTalk')}/></div>
    <div className='video-desc flex-ac'><PlaySvg/><span>{course.title}</span></div>
    <span className='time-summary'>08:23</span> 

   </div>
    </li>
  )
}
