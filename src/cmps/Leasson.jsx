import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'
import { VideoSvg } from '../svgs/VideoSvg'
import { SubLeasson } from './SubLeasson'

export function Leasson({lastSubEpisode,isSearchPanel, lastEpisode, setLastSubEpisode, setLastEpisode, episodeId, subEpisodes, title, setVideoUrl,i }) {

    const [isShown, setIsShown] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    useEffect(() => {
        LastEpisode()
        if(isSearchPanel){
            expand()
          }
  
    }, [])
    const LastEpisode = () => {
        if(!setLastEpisode){
            return
        }else 
        {
            setLastEpisode(episodeId)
            console.log('lastEpisode in leasson cmp*************',lastEpisode);
            console.log('episodeId in leasson cmp**************' ,episodeId);
            console.log('lastSubEpisode in leasson cmp**************' ,lastSubEpisode);
            if (lastEpisode === episodeId) {
                expand()
            }

        }
   }
    const onVideoClick = (idx, videoUrl) => {
        console.log('i', idx);
        setIsClicked(idx)
        setVideoUrl(videoUrl)
        setLastEpisode(episodeId)
        setLastSubEpisode(idx)
        window.scrollTo(0,0)
        console.log('setIsClicked',idx);
        console.log('setIsClicked',idx);
        console.log('setIsClicked',lastSubEpisode);
    }

    const expand = () => {
        setIsShown(!isShown)
    }


    return (
        <>
            <section onClick={expand} className='pannel-container'>
                <section className='pannel-wrapper '>
                    <div className='title-container flex-sb'>
                        <span className='pannel-title flex'> {title}  </span>
                        <span ><ExpandSvg isShown={isShown} /></span>
                    </div>
                    <span className='parts flex-ac'><VideoSvg /> {subEpisodes ? subEpisodes.length : ''} הרצאות </span>
                </section>
            </section>

            <section className={(isShown) ? 'pannel-content-wrapper flex-col ' : 'hidden'}>
                {subEpisodes.map((subEpisode, i) => {
                    const { id, title, videoUrl,min,files } = subEpisode
                    return <SubLeasson
                        id={id}
                        key={id}
                        title={title}
                        i={i}
                        videoUrl={videoUrl}
                        onVideoClick={onVideoClick}
                        min={min}
                        isClicked={isClicked}
                        setLastSubEpisode={setLastSubEpisode}
                        setIsClicked={setIsClicked}
                        files={files}
                        lastSubEpisode={lastSubEpisode}
                    />
                })
                }
            </section>
        </>
    )
}
