import React, { useState } from 'react'
import { XSvg } from '../svgs/XSvg'
import { Leasson } from './Leasson'

export  function MyLearningContent({getLecturesSum,episodes,setVideoUrl}) {
  const [isShown,setIsShown]=useState(false)
  const [count, setCount] = useState(1)

  return (
  
<>
<section className='my-learning-header-wapper flex-sb'>
    <h1 className='headline'>Course content</h1>
    <XSvg/>
    </section>
  
    {
      episodes.map((episode,i) =>{
        const{id,title,subEpisodes,totalHours} = episode
        return <Leasson key={id} i={i} 
        title={title} 
        subEpisodes={subEpisodes}
        min={totalHours}
        setCount={setCount}
        count={count}
        getLecturesSum={getLecturesSum}
        setVideoUrl={setVideoUrl}
        />
      })}
</>
   
  )
}
