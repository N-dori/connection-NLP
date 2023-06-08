import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'


export function IntroPanel({ intros, title, lectures, min, isAllExpaned }) {

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

  return (
    <>
      <div onClick={expand} className='pannel-container flex-sb'>
        <div className='flex-ac'><span className='pannel-title'>{title}</span>
          <span ><ExpandSvg isShown={isShown} /></span></div>
        <div className='flex-ac'>{intros.length} lectures • {min} min</div>
      </div>
      <section className={isShown ? 'pannel-content flex' : 'hidden'}>
        {intros.map(intro => 
        <div className='content-preview flex-sb'><div className='flex-ac'>
       <TvSvg /> {intro.title} </div> <span>{min} min </span>  </div>
          
       )}
      </section>

    </>
  )
}
