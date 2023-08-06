import React from 'react'
import { UserCoursesPreview } from './UserCoursesPreview'

export  function UserCoursesList({courses}) {
  return (
     courses.map(course => 
        <UserCoursesPreview course={course}/>
        )
  )
}
