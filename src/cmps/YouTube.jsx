import React from 'react'
import ReactPlayer from 'react-player'
export  function YouTube({videoUrl}) {
  return (
    <div className='video-playerContainer'>
        <ReactPlayer url={videoUrl} controls/>
    </div>
  )
}
