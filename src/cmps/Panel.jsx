import React, { useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'


export  function Panel({title,lectures,min}) {
const [isShown,setIsShown]=useState()
    const expand = () => {
        setIsShown(!isShown)
    }
  return (
    <>
    <div onClick={expand}className='pannel-container flex-sb'>
    <div className='flex-ac'><span className='pannel-title'>{title}</span>
    <span ><ExpandSvg/></span></div>
     <div className='flex-ac'>{lectures} lectures • {min} min</div>
 </div>
     <section className={isShown?'pannel-content flex block':'hidden'}>
     <div className='content-preview flex-sb'><div className='flex-ac'> <TvSvg/> {lectures} name of lesson</div> <span>{min}</span>  </div>
     <div className='content-preview flex-sb'><div className='flex-ac'> <TvSvg/> {lectures} name of lesson</div> <span>{min}</span>  </div>
     <div className='content-preview flex-sb'><div className='flex-ac'> <TvSvg/> {lectures} name of lesson</div> <span>{min}</span>  </div>


     </section>
    
    </>
  )
}
