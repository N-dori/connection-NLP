import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'
import { VideoSvg } from '../svgs/VideoSvg'

export function Leasson({  subEpisodes, title, min,i }) {

    const [isShown, setIsShown] = useState(false)

 
    const expand = () => {
        setIsShown(!isShown)
    }


    return (
        <>
            <section onClick={expand} className='pannel-container'>
                <section className='pannel-wrapper '>
                    <div className='title-container flex-sb'> 
                <span className='pannel-title'>section {i+1}: {title}</span>
                <span ><ExpandSvg isShown={isShown} /></span>
                    </div>
                    <span className='parts flex-ac'><VideoSvg/> lessons {subEpisodes?subEpisodes.length:''}</span>
                </section>
            </section>

            <section className={(isShown) ? 'pannel-content-wrapper flex-col ' : 'hidden'}>
                {subEpisodes.map((subEpisode,i) => {
                    const { id, title } = subEpisode
     return <article key={id} className='content-preview flex-col'>
            <div className='content-title flex-ac'>
              {id}. {title} </div> 
                        
            <div className='video-min flex-ac'><span><TvSvg /> </span><span className='flex-ac'>{min}<span className='num'>min</span> </span> </div>
          </article>
                })
                }
            </section>
        </>
    )
}
