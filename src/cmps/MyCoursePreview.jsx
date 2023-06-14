import React from 'react'
import { Link } from 'react-router-dom'

export  function MyCoursePreview({course}) {
  return (
    <Link to={`/my-learning/${course._id}`} className='course-card flex-jc-ac'>
    <p>{course.title}</p>
<img src={course.courseCoverImg} alt="course-image" className="coures-img" />
   <p className='sub-title'>{course.subTitle}</p> 
</Link>
  )
}
