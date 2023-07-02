import React, { useEffect, useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { TvSvg } from '../svgs/TvSvg'
import { VideoSvg } from '../svgs/VideoSvg'
import { SubLeasson } from './SubLeasson'

export function Leasson({ lastEpisode, currEpisode, setCurrSubEpisode, setCurrEpisode, episodeId, subEpisodes, title, min, i, setVideoUrl, shown }) {

    const [isShown, setIsShown] = useState(shown)
    const [isClicked, setIsClicked] = useState(false)
    useEffect(() => {
        setCurrEpisode(episodeId)
        if (lastEpisode === episodeId) {
            expand()
        }
    }, [])

    const onVideoClick = (idx, videoUrl, subEpisodeId) => {
        console.log('i', idx);
        setIsClicked(idx)
        setVideoUrl(videoUrl)
        setCurrEpisode(episodeId)
        setCurrSubEpisode(subEpisodeId)
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
                    const { id, title, videoUrl } = subEpisode
                    return <SubLeasson
                        id={id}
                        key={id}
                        title={title}
                        i={i}
                        videoUrl={videoUrl}
                        onVideoClick={onVideoClick}
                        min={min}
                        isClicked={isClicked}
                        setCurrSubEpisode={setCurrSubEpisode}
                        setIsClicked={setIsClicked}
                    />
                })
                }
            </section>
        </>
    )
}
