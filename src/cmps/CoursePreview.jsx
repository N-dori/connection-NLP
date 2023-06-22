import React from 'react'
import { Link } from 'react-router-dom'

export  function CoursePreview({course}) {
  return (
 <Link to={`/course/${course._id}`} className='course-card-wrapper flex-jc-ac'>
    <p>{course.title}</p>
    <div className='course-image-container'>
<img src={course.courseCoverImg} alt="course-image" className="coures-img" />
    </div>
   <p className='sub-title'>{course.subTitle}</p> 
</Link>

  )
}
