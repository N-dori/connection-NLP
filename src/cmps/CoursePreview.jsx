import React from 'react'
import { Link } from 'react-router-dom'

export  function CoursePreview({course}) {
  return (
 <Link to={`/courses/${course._id}`} className='course-card flex-jc-ac'>
    <p>{course.title}</p>
<img src={course.imgCoures} alt="imgCoures" className="coures-img" />
   <p className='sub-title'>{course.subTitle}</p> 
    </Link>

  )
}
