import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchSvg } from '../svgs/SearchSvg'

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
<Link to="serach-content" className={(isClicked==='Search')?'link-active no-under-line flex-ac':'menu-link-wrapper no-under-line flex-ac'} onClick={()=>setUnderline('Search')}> <span className='link ' ><SearchSvg/></span></Link>
<Link to="course-overiew" className={(isClicked==='Overview')?'link-active no-under-line flex-ac':'menu-link-wrapper no-under-line flex-ac' }  onClick={()=>setUnderline('Overview')}> <span  className="link no-under-line" >Overview</span></Link>
<Link  to="Q&A" className={(isClicked==='Q&A')?'link-active flex-ac no-under-line':'menu-link-wrapper flex-ac no-under-line' }  onClick={()=>setUnderline('Q&A')}> <span className='link no-under-line'>Q&A</span></Link>
<Link to="announcements" className={(isClicked==='Announcements')?'link-active no-under-line flex-ac':'menu-link-wrapper flex-ac no-under-line' }  onClick={()=>setUnderline('Announcements')}> <span  className='link no-under-line'>Announcements</span></Link> 
<Link to="reviews" className={(isClicked==='Reviwes')?'link-active no-under-line flex-ac':'menu-link-wrapper no-under-line flex-ac' }  onClick={()=>setUnderline('Reviwes')}> <span className='link no-under-line' >Reviwes</span></Link>
  </section>
  )
}
