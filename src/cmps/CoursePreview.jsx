import React from 'react'
import { Link } from 'react-router-dom'

export  function CoursePreview({course,i}) {
  return (
 <Link to={`/course/${course._id}`} className='course-card-wrapper  no-under-line flex-jc-ac'>
    <span className='nlp-level'>{i+1}</span>   
    <p className='course-title '>{course.title}</p>
    <div className='course-image-container'>
<img src={course.courseCoverImg} alt="course-image" className="coures-img" />
    </div>
   <p className='sub-title'>{course.subTitle}</p>
   <p>{course.creactedBy}</p> 
</Link>

  )
}
