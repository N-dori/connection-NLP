import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export  function OutletMenu() {
    const [isClicked, setIsClick] = useState()
    const setUnderline = (type) => {
        switch (type) {
          case 'Search':
            setIsClick('Search')
            break;
            case 'Overview':
                setIsClick('Overview')
                  break;
            case 'Q&A':
                setIsClick('Q&A')
                  break;
            case 'Announcements':
                setIsClick('Announcements')
                  break;
            case 'Reviwes':
                setIsClick('Reviwes')
                  break;
              }
      }
  return (
    <section className='course-menu flex'>
<article className={(isClicked==='Search')?'link-active flex-ac':'menu-link-wrapper flex-ac'} onClick={()=>setUnderline('Search')}> <Link className='link no-under-line' to="serach-content">Search</Link></article>
     <article className={(isClicked==='Overview')?'link-active flex-ac':'menu-link-wrapper flex-ac' }  onClick={()=>setUnderline('Overview')}> <Link  className="link no-under-line" to="course-overiew">Overview</Link></article>
     <article className={(isClicked==='Q&A')?'link-active flex-ac':'menu-link-wrapper flex-ac' }  onClick={()=>setUnderline('Q&A')}> <Link className='link no-under-line' to="Q&A">Q&A</Link></article>
     <article className={(isClicked==='Announcements')?'link-active flex-ac':'menu-link-wrapper flex-ac' }  onClick={()=>setUnderline('Announcements')}> <Link  className='link no-under-line'to="announcements">Announcements</Link></article> 
     <article className={(isClicked==='Reviwes')?'link-active flex-ac':'menu-link-wrapper flex-ac' }  onClick={()=>setUnderline('Reviwes')}> <Link className='link no-under-line' to="reviews">Reviwes</Link></article>
  </section>
  )
}
