import React, { useEffect } from 'react'
import { TvSvg } from '../svgs/TvSvg'

export  function SubLeasson({setIsClicked,setLastSubEpisode,id,title,videoUrl,i,isClicked ,min,onVideoClick }) {
  useEffect(() => {
    settingLastSubEpisode()
  }, [])
  const settingLastSubEpisode = () => {
    if(!setLastSubEpisode){return 
    }else {
    setLastSubEpisode(id)
    setIsClicked(id)

  }
}
  return (
    <article key={id} onClick={()=>onVideoClick(i,videoUrl,id)}
    className='content-preview flex-col'
    style={{backgroundColor:isClicked===i?'rgb(219, 219, 219)':'#fff'}}
    >
     <div className='content-title flex-ac'> {id}. {title} </div> 

     <div className='video-min flex-ac'><span><TvSvg />
      </span><span className='flex-ac'>{min}<span className='num'>דק'</span> </span>
     </div>

   </article>
  )
}
