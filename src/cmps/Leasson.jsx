import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'
import { VideoSvg } from '../svgs/VideoSvg'
import { SubLeasson } from './SubLeasson'

export function Leasson({  subEpisodes, title, min,i,setVideoUrl }) {

    const [isShown, setIsShown] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const onVideoClick = (idx,videoUrl) =>{
        console.log('i',idx);
          setIsClicked(idx)
          setVideoUrl(videoUrl)
          console.log('isClicked',isClicked); 
          console.log('videoUrl',videoUrl); 
      }
    const expand = () => {
        setIsShown(!isShown)
    }


    return (
        <>
            <section onClick={expand} className='pannel-container'>
                <section className='pannel-wrapper '>
                    <div className='title-container flex-sb'> 
                <span className='pannel-title flex'>{i?<span>שיעור:</span>:''} {title} {i?i+1:''} </span>
                <span ><ExpandSvg isShown={isShown} /></span>
                    </div>
                    <span className='parts flex-ac'><VideoSvg/> lessons {subEpisodes?subEpisodes.length:''}</span>
                </section>
            </section>

            <section  className={(isShown) ? 'pannel-content-wrapper flex-col ' : 'hidden'}>
                {subEpisodes.map((subEpisode,i) => {
                    const { id, title,videoUrl } = subEpisode
     return <SubLeasson 
            id={id}
            title={title}
            i={i}
            videoUrl={videoUrl} 
            onVideoClick={onVideoClick} 
            min={min} 
            isClicked={isClicked}
            />
                })
                }
            </section>
        </>
    )
}
