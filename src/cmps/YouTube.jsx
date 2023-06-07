import React from 'react'
import ReactPlayer from 'react-player'
export  function YouTube({videoUrl}) {
  return (
    <div className='video-playerContainer'>
        <ReactPlayer 
      className="react-player"
      playing
      width="100%"
      height="100%"
       url={videoUrl} controls/>
    </div>
  )
}
