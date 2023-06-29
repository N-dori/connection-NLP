import React, { useState } from 'react'
import { Panel } from './Panel'
import { IntroPanel } from './IntroPanel'

export  function CourseContent({episodes, intros,changeVideoUrl,setIsPlayerVisible}) {
    const [isAllExpaned,setIsAllExpand]= useState(false)

    const getLecturesSum = () =>{
     let sum =0 
     episodes.forEach(episode => {
    sum+= episode.subEpisodes.length
     });
     return sum

      
    }

    const expandAll = () => {
      
        setIsAllExpand(!isAllExpaned)
    }

  return (
    <section className='course-content-container'>

    <section className='contant-wapper flex'>
        <h1 className='headline'>תוכן הקורס</h1>
        <section className='course-curriculum flex-sb'>
          {/* if possible add total time */}
            <div className='info flex-ac'>שיעורים {episodes.length} •  הרצאות {getLecturesSum()} •</div>
            <button onClick={expandAll} className='expend-all-btn flex-ac'>{isAllExpaned?'לסגירה':
            'פתח הכל'}</button>
        </section>

        <IntroPanel setIsPlayerVisible={setIsPlayerVisible} changeVideoUrl={changeVideoUrl} title={'שעורי ניסיון'} intros={intros} isAllExpaned={isAllExpaned} min={45}/>
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
