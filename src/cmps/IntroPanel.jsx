import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'


export function IntroPanel({ intros, title, min, isAllExpaned,changeVideoUrl,setIsPlayerVisible }) {

  const [isShown, setIsShown] = useState(true)
  const [count, setCount] = useState(0)


  useEffect(() => {
    setCount(count + 1)
    if (isAllExpaned) {
      setIsShown(true)
    }
    else if (!isAllExpaned) {
      if (count > 1) {
        setIsShown(false)
      }
    }
  }, [isAllExpaned])

  const expand = () => {
    setIsShown(!isShown)
  }
  const handelVideo = (videoUrl) => {
    document.body.style='overflow-y: hidden;'
    setIsPlayerVisible(true)
    changeVideoUrl(videoUrl)
  }

  return (
    <>
      <div onClick={expand} className='pannel-container flex-sb'>
        <div className='pannel-title-container flex-ac'>
          <span ><ExpandSvg isShown={isShown} /></span>
          <span className='pannel-title'>{title}</span>
          </div>
        <div className='num-of-lectures flex-ac'>{intros.length} הרצאות • {min} דק'</div>
      </div>
      <section className={isShown ? 'pannel-content flex' : 'hidden'}>
        {intros.map(intro => 
        <div key={intro.id} onClick={()=>{handelVideo(intro.videoUrl)}}  className='content-preview intro flex-sb'><div className='flex-ac'>
       <TvSvg /> {intro.title} </div> <span className='total-lesson-time'>{min} דק' </span>  </div>
          
       )}
      </section>

    </>
  )
}
