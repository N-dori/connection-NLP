import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'


export  function Panel({title,subEpisodes,lectures,min,isAllExpaned ,i}) {

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
    <div className='flex-ac'><span className='pannel-title'>{title}</span>
    <span ><ExpandSvg isShown={isShown}/></span></div>
     <div className='flex-ac'>{lectures} lectures • {min} min</div>
 </div>
     <section className={(isShown )?'pannel-content flex ':'hidden'}>
      {subEpisodes.map(subEpisode=> {
     const {id,title} = subEpisode
    return  <article className='content-preview flex-sb'>
      <div className='flex-ac'> <TvSvg/> {title} </div> <span>{min} min </span> 
     </article>})
  


      }
   
     </section>
    
    </>
  )
}
