import React from 'react'
import { ExpandSvg } from '../svgs/ExpandSvg'
import { Panel } from './Panel'

export  function CourseContent() {
  return (
    <section className='contant-wapper flex'>
        <h1 className='headline'>Course content</h1>
        <section className='course-curriculum flex-sb'>
            <div className='info flex-ac'>16 sections • 51 lectures • 9h 30m total length</div>
            <button className='expend-all-btn flex-ac'>Expand All sections</button>
        </section>
       <Panel title={'intro'} lectures={3}min={27}/>
       <Panel title={'basics'} lectures={4}min={38}/>
       <Panel title={'flow'} lectures={3}min={38}/>
       <Panel title={'life not easy'} lectures={5}min={55}/>
       <Panel title={'take rigth path'} lectures={3}min={35}/>
       <Panel title={'natural aka'} lectures={2}min={25}/>
       <Panel title={'more about'} lectures={3}min={45}/>
       <Panel title={'belive it'} lectures={4}min={65}/>
       
     
    </section>
  )
}
