import React from 'react'
import { TvSvg } from '../svgs/TvSvg'
import { DownloadSvg } from '../svgs/DownloadSvg'
import { MobileSvg } from '../svgs/MobileSvg'
import { RocketSvg } from '../svgs/RocketSvg'

export  function ThisCourseIncludes() {
  return (
    <>
    <section className='list-whats-includes-container '>
    <h1 className='headline'>This course includes</h1>
    <section className='list-container flex'>

    <ul className='group flex-col clean'>
      <li className='flex-ac'>9.5 hours on-demand video<TvSvg/></li>
      <li className='flex-ac'> 95 downloadable resources<DownloadSvg/></li>
    </ul>    
    <ul className='group flex-col clean'>
      <li className='flex-ac'>Access on mobile and TV<MobileSvg/></li>
      <li className='flex-ac'>Certificate of completion<RocketSvg/></li>
    </ul>    

    </section>
    </section>
    </>
  )
}
