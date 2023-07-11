import React from 'react'
import { Link } from 'react-router-dom'
import { SearchSvg } from '../svgs/SearchSvg'

export  function MyLearningNavigation({setUnderline,isClicked}) {
  return (
    <section className='course-menu flex'>
    <Link to="serach-content"  className={(isClicked==='Search')?'link-active no-under-line flex-ac':'menu-link-wrapper no-under-line flex-ac'} onClick={()=>setUnderline('Search')}> <span className='link ' ><SearchSvg/></span></Link>
    <Link to="course-overiew" className={(isClicked==='Overview')?'link-active no-under-line flex-ac':'menu-link-wrapper no-under-line flex-ac' }  onClick={()=>setUnderline('Overview')}> <span  className="link no-under-line" >סקירה</span></Link>
    {/* <Link  to="Q&A" className={(isClicked==='Q&A')?'link-active flex-ac no-under-line':'menu-link-wrapper flex-ac no-under-line' }  onClick={()=>setUnderline('Q&A')}> <span className='link no-under-line'>Q&A</span></Link> */}
    <Link to="announcements" className={(isClicked==='Announcements')?'link-active no-under-line flex-ac':'menu-link-wrapper flex-ac no-under-line' }  onClick={()=>setUnderline('Announcements')}> <span  className='link no-under-line'>לוח מודעות</span></Link> 
    <Link to="reviews" className={(isClicked==='Reviwes')?'link-active no-under-line flex-ac':'menu-link-wrapper no-under-line flex-ac' }  onClick={()=>setUnderline('Reviwes')}> <span className='link no-under-line' >תגובות</span></Link>
      </section>
  )
}
