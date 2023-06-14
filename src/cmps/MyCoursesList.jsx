import React from 'react'
import { CoursePreview } from './CoursePreview'
import { MyCoursePreview } from './MyCoursePreview'

export  function MyCoursesList({courses}) {
  return (
    <ul className='courses-list-container flex-jc-ac clean'>
    {courses.map( course => 
     <MyCoursePreview key={course._id} course={course} /> )}
                   
    </ul>
  )
}
