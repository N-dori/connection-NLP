import React, { useState } from 'react'
import { Panel } from './Panel'
import { IntroPanel } from './IntroPanel'

export  function CourseContent({episodes, intros}) {
    const [isAllExpaned,setIsAllExpand]= useState(false)
    const expandAll = () => {
        setIsAllExpand(!isAllExpaned)
    }

  return (
    <section className='course-content-container'>

    <section className='contant-wapper flex'>
        <h1 className='headline'>Course content</h1>
        <section className='course-curriculum flex-sb'>
            <div className='info flex-ac'>16 sections • 51 lectures • 9h 30m total length</div>
            <button onClick={expandAll} className='expend-all-btn flex-ac'>{isAllExpaned?'Collapse All Sections':
            'Expand All Sections'}</button>
        </section>

        <IntroPanel title={'intro'} intros={intros} isAllExpaned={isAllExpaned} lectures={3}min={27}/>
        {
          episodes.map((episode,i) =>{
            const{id,title,subEpisodes,totalHours} = episode
            return <Panel key={id} i={i} title={title} subEpisodes={subEpisodes} isAllExpaned={isAllExpaned} lectures={subEpisodes.length}min={totalHours}/>
          }
 )
        }
     
       
     
    </section>
    </section>
  )
}
