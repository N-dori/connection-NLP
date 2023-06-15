import React from 'react'
import { AlarmSvg } from '../svgs/AlarmSvg'

export  function CourseOverview() {
  return (
    <section className="course-overview-container">
    <main className="schedule-learning-time-warpper grid">
        <AlarmSvg/>
        <h3 className='headline'>Schedule learning time</h3>
        <p className='sub-headline'>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
          </main>
    <h1 className='about-this-course'>About this course</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, obcaecati! Perspiciatis eius natus expedita vero architecto, veritatis quo est in libero quas porro enim esse! Vero sequi magnam nesciunt quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium, facilis est sint esse quos aspernatur nam voluptatum dolores laboriosam veniam! Necessitatibus saepe minima, nulla error sit facere deserunt iure.</p>
    </section>
  )
}
