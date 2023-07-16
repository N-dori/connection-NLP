import React, { useEffect, useState } from 'react'
import { TvSvg } from '../svgs/TvSvg'
import { Link } from 'react-router-dom'
import { ExpandSvg } from '../svgs/ExpandSvg'
import FolderSvg from '../svgs/FolderSvg'
import { Resources } from './Resources'

export function SubLeasson({ fullyWatchedSubEpisode, lastSubEpisode, files, setIsClicked, id, title, videoUrl, i, isClicked, min, onVideoClick }) {
  const [isShown, setIsShown] = useState()
  const [fullyWatched, setFullyWatched] = useState()

  useEffect(() => {
    setIsClicked(lastSubEpisode)
    isSubEpisodeFullyWatched()
  }, [fullyWatchedSubEpisode])

  const expand = () => {
    setIsShown(!isShown)

  }
  const isSubEpisodeFullyWatched = () => {
    const isItFullyWatched = fullyWatchedSubEpisode?.indexOf(i)
    if ((isItFullyWatched !== -1) && (isItFullyWatched !== undefined)) {
      console.log('isItFullyWatced', fullyWatchedSubEpisode?.indexOf(i));
      console.log('isItFullWtced', i);

      setFullyWatched(i)
    }
  }

  return (
    <article key={id}
      className='content-preview flex-col'
      style={{ backgroundColor: isClicked === i ? 'rgb(219, 219, 219)' : '#fff' }}
    >
      <div onClick={() => onVideoClick(i, videoUrl, id)}
        className='content-title flex-ac'>

        <input className='check-input' type="checkbox" checked={fullyWatched === i ? 'checked' : ''} readOnly /><span>{id}. {title}</span>  </div>

      <div className='video-min flex'><span><TvSvg />
        <span className='flex-ac'>{min}<span className='num'>דק'</span> </span></span>
        {
          files ? <section className='resources-container'>
            <button onClick={expand} className='resources-btn flex' >
              <FolderSvg />
              חומרי עזר
              <ExpandSvg isShown={isShown} />
            </button>
            {isShown ? <Resources files={files} /> : ''}
          </section> : ''
        }
      </div>

    </article>
  )
}
