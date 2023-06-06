import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'


export  function FirstPanel({title,lectures,min,isAllExpaned}) {

const [isShown,setIsShown]=useState(false)
    useEffect(() => {
       setIsShown(!isShown)
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
     <section className={isShown||isAllExpaned?'pannel-content flex block':'hidden'}>
     <div className='content-preview flex-sb'><div className='flex-ac'> <TvSvg/> {lectures} name of lesson</div> <span>{min} min </span>  </div>
     <div className='content-preview flex-sb'><div className='flex-ac'> <TvSvg/> {lectures} name of lesson</div> <span>{min} min </span>  </div>
     <div className='content-preview flex-sb'><div className='flex-ac'> <TvSvg/> {lectures} name of lesson</div> <span>{min} min </span>  </div>
     </section>
    
    </>
  )
}
