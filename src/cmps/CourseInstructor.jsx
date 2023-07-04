import React from 'react'
import { Avatar } from '../svgs/Avatar'

export  function CourseInstructor({name,title,bio,img}) {
    // console.log('insturcrt', createdBy);
    return (
        <section className='course-instructor-wapper'>
        <h1 className='headline'>מוביל הקורס</h1>

        <div className='instructor-info-container flex-col'>

        <h5 className='instructor-title'> {title} <span className='tc-b'>NLP CONNECTION</span> </h5>
        <h4 className='instructor-name'> {name} </h4>
            <div className='img-contaier'>
               <img src={img} alt="" className="instructor-img" />
            </div>
        </div>
        <p className="instructor-bio">
       {bio}
        </p>
         
    </section>
  )
}
