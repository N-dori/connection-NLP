import React from 'react'
import { TvSvg } from '../svgs/TvSvg'
import { DownloadSvg } from '../svgs/DownloadSvg'
import { MobileSvg } from '../svgs/MobileSvg'
import { RocketSvg } from '../svgs/RocketSvg'

export  function ThisCourseIncludes() {
  return (
    <>
    <h1 className='this-course-includes-title'>This course includes</h1>
    <section className='list-whats-includes grid'>
    <ul className='group flex clean'>
      <li className='flex-ac'><TvSvg/>9.5 hours on-demand video</li>
      <li className='flex-ac'><DownloadSvg/> 95 downloadable resources</li>
    </ul>    
    <ul className='group flex clean'>
      <li className='flex-ac'><MobileSvg/>Access on mobile and TV</li>
      <li className='flex-ac'><RocketSvg/>Certificate of completion</li>
    </ul>    
    </section>
    </>
  )
}
