import React, { useEffect, useState } from 'react'
import { TvSvg } from '../svgs/TvSvg'
import { Link } from 'react-router-dom'
import { ExpandSvg } from '../svgs/ExpandSvg'
import FolderSvg from '../svgs/FolderSvg'
import { Resources } from './Resources'

export  function SubLeasson({files,setIsClicked,setLastSubEpisode,id,title,videoUrl,i,isClicked ,min,onVideoClick }) {
  const [isShown,setIsShown] = useState() 
 
  const expand = () => {
    setIsShown(!isShown)
}
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
    <article key={id} 
    className='content-preview flex-col'
    style={{backgroundColor:isClicked===i?'rgb(219, 219, 219)':'#fff'}}
    >
     <div onClick={()=>onVideoClick(i,videoUrl,id)}
      className='content-title flex-ac'> {id}. {title} </div> 

     <div className='video-min flex'><span><TvSvg />
      <span className='flex-ac'>{min}<span className='num'>דק'</span> </span></span>
       {
        files? <section className='resources-container'>
              <button  onClick={expand} className='resources-btn flex' >
                <FolderSvg/>
                חומרי עזר 
                <ExpandSvg isShown={isShown}/>
              </button> 
               {isShown? <Resources files={files}/>:''}
               </section>:''
       }
     </div>

   </article>
  )
}
