import React, { useState } from 'react'
import { XSvg } from '../svgs/XSvg'
import { Leasson } from './Leasson'

export  function MyLearningContent({lastEpisode,currEpisode,setCurrEpisode,setCurrSubEpisode,getLecturesSum,episodes,setVideoUrl,tuggleContent}) {
  const [isShown,setIsShown]=useState(false)
  const [count, setCount] = useState(1)

  return (
  
<>
<section className='my-learning-header-wapper flex-sb'>
    <h1 className='headline'>תוכן הקורס</h1>
    <div className="x-svg-container"onClick={tuggleContent}>
    <XSvg />

    </div>
    </section>
  
    {
      episodes.map((episode,i) =>{
        const{id,title,subEpisodes,totalHours} = episode
        return <Leasson key={id} i={i} 
        episodeId={id}
        title={title} 
        subEpisodes={subEpisodes}
        min={totalHours}
        setCount={setCount}
        count={count}
        getLecturesSum={getLecturesSum}
        setVideoUrl={setVideoUrl}
        shown={false}
        setCurrSubEpisode={setCurrSubEpisode}
        setCurrEpisode={setCurrEpisode}
        currEpisode={currEpisode}
        lastEpisode={lastEpisode}
        />
      })}
</>
   
  )
}
