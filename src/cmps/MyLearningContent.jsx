import React, { useState } from 'react'
import { XSvg } from '../svgs/XSvg'
import { Leasson } from './Leasson'

export  function MyLearningContent({lastEpisode,lastSubEpisode,setLastEpisode,currEpisode,setLastSubEpisode,getLecturesSum,episodes,setVideoUrl,tuggleContent}) {
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
        const{id,title,subEpisodes} = episode
        return <Leasson key={id}
         i={i} 
        episodeId={id}
        title={title} 
        subEpisodes={subEpisodes}
        setCount={setCount}
        count={count}
        getLecturesSum={getLecturesSum}
        setVideoUrl={setVideoUrl}

        setLastSubEpisode={setLastSubEpisode}
        setLastEpisode={setLastEpisode}
        currEpisode={currEpisode}
        lastEpisode={lastEpisode}
        lastSubEpisode={lastSubEpisode}
        />
      })}
</>
   
  )
}
