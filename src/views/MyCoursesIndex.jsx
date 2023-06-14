import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { AlarmSvg } from '../svgs/AlarmSvg'
import { CoursesIndex } from '../cmps/CoursesIndex'
import { userService } from '../services/userService'
import { MyCoursesList } from '../cmps/MyCoursesList'

export function MyCoursesIndex() {
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const [courses, setCourses] = useState(null)
  const param = useParams()
  useEffect(() => {
    loadUserCourses()
    console.log(param);
  }, [])
  const loadUserCourses = async  () => {
    const user = await userService.getUserById(loggdingUser._id)
    console.log('my user course index', user);
    setCourses(user.courses)
  } 
  
  return (
    courses?
<>
    <section className='my-courses-header-container grid'>
        <header className='my-courses-header-wrapper'>
          <h1 className='headline'>My Courses</h1>
        </header>
      </section> 
        <section className='my-courses-list grid'>
          <main className="schedule-learning-time-warpper grid">
        <AlarmSvg/>
        <h3 className='headline'>Schedule learning time</h3>
        <p className='sub-headline'>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
          </main>
          <MyCoursesList courses={courses}/>
        </section>

</>:<div>Loading...</div>
  )
}
