import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function MyCoursePreview({ setCurrCourse, isShown, setIsSown, course }) {


  const openModal = () => {
    setCurrCourse(course._id)
    setIsSown(!isShown)
  }
  return (
    <section className='course-card-wrapper '>
      <Link to={`/my-learning/${course._id}`} className='course-card no-under-line grid'>
        <p className='course-title'>{course.title}</p>
        <div className='course-image-container'>
          <img src={course.courseCoverImg} alt="course-image" className="coures-img" />

        </div>
        <p className='sub-title'>{course.subTitle}</p>
      </Link>
      <button className='rate-this-course-btn' onClick={() => openModal()}>הדירוג שלך</button>
    </section>


  )
}
