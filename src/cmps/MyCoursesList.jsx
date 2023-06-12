import React from 'react'
import { CoursePreview } from './CoursePreview'

export  function MyCoursesList({courses}) {
  return (
    <ul className='courses-list-container flex-jc-ac clean'>
    {courses.map( course => 
     <CoursePreview key={course._id} course={course} /> )}
                   
    </ul>
  )
}
