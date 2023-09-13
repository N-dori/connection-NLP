import React from 'react'
import { CoursePreview } from './CoursePreview'
import { SkeletonLoader } from './SkeletonLoader'
export  function CouresList({courses}) {

  return (
courses?
<ul className='courses-list-container flex-jc-ac clean'>
{courses.map( (course,i) => 
 <CoursePreview key={course._id} course={course} i={i}/> )}
               
</ul>:<SkeletonLoader/>
  )
}
