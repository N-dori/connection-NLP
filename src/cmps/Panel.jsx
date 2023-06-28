import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'


export  function Panel({title,subEpisodes,lectures,min,isAllExpaned }) {

const [isShown,setIsShown]=useState(false)
    useEffect(() => {
      if(isAllExpaned){
        setIsShown(true)
      }
      else if(!isAllExpaned){
        setIsShown(false)

      }
    }, [isAllExpaned])
    
    const expand = () => {
        setIsShown(!isShown)
    }

  return (
    <>
    <div onClick={expand}className='pannel-container flex-sb'>
    <div className='pannel-title-container flex-ac'>
    <span ><ExpandSvg isShown={isShown}/></span>
    <span className='pannel-title'>{title}</span>
    </div>
     <div className='num-of-lectures flex-ac'>{lectures} הרצאות • {min} דק'</div>
 </div>
     <section className={(isShown )?'pannel-content flex ':'hidden'}>
      {subEpisodes.map(subEpisode=> {
     const {id,title} = subEpisode
    return  <article key={subEpisode.id} className='content-preview flex-sb'>
      <div  className='flex-ac'> <TvSvg/> {title} </div> <span dir='rtl' className='total-lesson-time'>{min} דק'</span> 
     </article>})
      }
   
     </section>
    
    </>
  )
}
