import React, { useEffect } from 'react'
import { TvSvg } from '../svgs/TvSvg'

export  function SubLeasson({setIsClicked,setCurrSubEpisode,id,title,videoUrl,i,isClicked ,min,onVideoClick }) {
  useEffect(() => {
    setCurrSubEpisode(id)
    setIsClicked(id)
}, [])
  return (
    <article key={id} onClick={()=>onVideoClick(i,videoUrl,id)}
    className='content-preview flex-col'
    style={{backgroundColor:isClicked===i?'rgb(219, 219, 219)':'#fff'}}
    >
     <div className='content-title flex-ac'> {id}. {title} </div> 

     <div className='video-min flex-ac'><span><TvSvg />
      </span><span className='flex-ac'>{min}<span className='num'>min</span> </span>
     </div>

   </article>
  )
}
