import React from 'react'
import { TvSvg } from '../svgs/TvSvg'
import { DownloadSvg } from '../svgs/DownloadSvg'
import { MobileSvg } from '../svgs/MobileSvg'
import { RocketSvg } from '../svgs/RocketSvg'
import { InfiniteSvg } from '../svgs/InfiniteSvg'

export  function ThisCourseIncludes({totalWatchTime}) {
  return (
    <>
    <section className='list-whats-includes-container '>
    <h1 className='headline'>הקורס הזה כולל</h1>
    <section className='list-container flex'>

    <ul className='group flex-col clean'>
      <li className='flex-ac'><TvSvg/> {totalWatchTime.hours  } שעות    {totalWatchTime.min} דקות של צפייה ישירה </li>
      <li className='flex-ac'><DownloadSvg/> 95 downloadable resources</li>
    </ul>    
    <ul className='group flex-col clean'>
      <li className='flex-ac'> <MobileSvg/> גישה לקורס דרך הנייד  </li>
      <li className='flex-ac'> <InfiniteSvg/>גישה חופשית לקורס ללא הגבלת זמן</li>
    </ul>    

    </section>
    </section>
    </>
  )
}
