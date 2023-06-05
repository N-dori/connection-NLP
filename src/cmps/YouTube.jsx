import React from 'react'
import ReactPlayer from 'react-player'
export  function YouTube({videoUrl}) {
  return (
    <div className='video-playerContainer'>
        <ReactPlayer 
      className="react-player"
      playing
      width="400px"
      height="200"
       url={videoUrl} controls/>
    </div>
  )
}
