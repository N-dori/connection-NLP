import React from 'react'
import { AlarmSvg } from '../svgs/AlarmSvg'
import { ScheduleTimeForLearning } from './ScheduleTimeForLearning'

export  function CourseOverview() {
  return (
    <section className="course-overview-container">
 <ScheduleTimeForLearning/>
    <h1 className='about-this-course'>סקירת הקורס</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, obcaecati! Perspiciatis eius natus expedita vero architecto, veritatis quo est in libero quas porro enim esse! Vero sequi magnam nesciunt quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium, facilis est sint esse quos aspernatur nam voluptatum dolores laboriosam veniam! Necessitatibus saepe minima, nulla error sit facere deserunt iure.</p>
    </section>
  )
}
