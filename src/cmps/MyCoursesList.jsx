import React from 'react'
import { CoursePreview } from './CoursePreview'
import { MyCoursePreview } from './MyCoursePreview'

export  function MyCoursesList({isShown,setIsSown,courses,setCurrCourse}) {
  return (
    <ul className='courses-list-container flex-jc-ac clean'>
    {courses.map( course => 
     <MyCoursePreview setCurrCourse={setCurrCourse}
                      isShown={isShown}
                      setIsSown={setIsSown} 
                      key={course._id} 
                      course={course} /> )}
                   
    </ul>
  )
}
