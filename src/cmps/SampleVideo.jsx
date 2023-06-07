import React, { useEffect, useState } from 'react'
import { PlaySvg } from '../svgs/PlaySvg'
import { imgService } from '../services/imgService'

export  function SampleVideo({freeSamples,changeVideoUrl}) {
    const [isClicked, setIsClicked] = useState(null)
    
    const onVideoClick = (i) =>{
      console.log('i',i);
        setIsClicked(i)
        
        console.log('isClicked',isClicked); 
    }
 

  return (
    <>
    {freeSamples.map((video,i)=>
      <li key={video.id} onClick={()=>onVideoClick(i)} 
         className='video-container '
         style={{backgroundColor:isClicked===i?'#555555':'#111111'}}
        >
     <div onClick={()=>changeVideoUrl(video.videoUrl)}  className='wrapper-video-link  flex-ac'>
      <div className='video-img-wrapper'><img className='video-img' src={video.videoImg}/></div>
      <div className='video-desc flex-ac'><PlaySvg/><span>{video.title}</span></div>
      <span className='time-summary'>08:23</span> 
  
     </div>
      </li>
      
      )}
    
    </>
  )
}
