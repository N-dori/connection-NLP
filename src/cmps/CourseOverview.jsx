import React, { useEffect, useState } from 'react'
import { AlarmSvg } from '../svgs/AlarmSvg'
import { ScheduleTimeForLearning } from './ScheduleTimeForLearning'

export  function CourseOverview({courses,currCourseId}) {

  const [course , setCourse] = useState(null)

  useEffect(() => {
const course = courses.find(course => course._id === currCourseId )
setCourse(course)
  }, [currCourseId])
  
  return (
    course?
    <section className="course-overview-container">
 <ScheduleTimeForLearning/>
    <h1 className='about-this-course'>סקירת הקורס</h1>
    <p>{course.desc}</p>
    </section>:<div>loading</div>
  )
}
