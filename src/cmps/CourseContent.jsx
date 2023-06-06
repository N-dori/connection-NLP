import React, { useState } from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { Panel } from './Panel'
import { FirstPanel } from './FirstPanel'

export  function CourseContent() {
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
            <button onClick={expandAll} className='expend-all-btn flex-ac'>{isAllExpaned?'Collapse All Sections':'Expand All Sections'}</button>
        </section>
        <FirstPanel title={'intro'} isAllExpaned={isAllExpaned} lectures={3}min={27}/>
       <Panel title={'basics'} isAllExpaned={isAllExpaned} lectures={4}min={38}/>
       <Panel title={'flow'} isAllExpaned={isAllExpaned} lectures={3}min={38}/>
       <Panel title={'life not easy'} isAllExpaned={isAllExpaned} lectures={5}min={55}/>
       <Panel title={'take rigth path'} isAllExpaned={isAllExpaned} lectures={3}min={35}/>
       <Panel title={'natural aka'} isAllExpaned={isAllExpaned} lectures={2}min={25}/>
       <Panel title={'more about'} isAllExpaned={isAllExpaned} lectures={3}min={45}/>
       <Panel title={'belive it'} isAllExpaned={isAllExpaned} lectures={4}min={65}/>
       
     
    </section>
    </section>
  )
}
