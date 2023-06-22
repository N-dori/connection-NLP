import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { AlarmSvg } from '../svgs/AlarmSvg'
import { CoursesIndex } from '../cmps/CoursesIndex'
import { userService } from '../services/userService'
import { MyCoursesList } from '../cmps/MyCoursesList'
import { RatingModal } from '../cmps/RatingModal'
import { reviewService } from '../services/reviews.service'
import { saveReview } from '../store/actions/review.actions'

export function MyCoursesIndex() {

  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const dispatch = useDispatch()
  const [courses, setCourses] = useState(null)
  const [currCourse, setCurrCourse] = useState("")
  const [review, setReview] = useState(reviewService.getEmptyReview())
  const [isShown, setIsSown] = useState(false)
  const [rating, setRating] = useState(0)
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
  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value
    setReview((preComment) => ({ ...preComment, [field]: value }))
  console.log('review',review);
}
const handelSubmitReview =(ev) => {
       ev.preventDefault()
       review.courseId= currCourse
       review.reviewedBy = loggdingUser
       review.reviewedAt = Date.now()
       review.rate = rating
       //TODO: dipatch to store 
       dispatch(saveReview(review))
       console.log('review after all ',review );
       setReview(reviewService.getEmptyReview())
       setIsSown(false)
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
          <MyCoursesList isShown={isShown} setIsSown={setIsSown} setCurrCourse={setCurrCourse} courses={courses}/>
        { isShown? <RatingModal handelSubmitReview={handelSubmitReview}
                    review={review}
                    handleChange={handleChange}
                    isShown={isShown}
                    setIsSown={setIsSown} 
                    rating={rating} 
                    setRating={setRating}/>:''}
          <div className={isShown?'screen-filter':'hidden'} ></div>
        </section>

</>:<div>Loading...</div>
  )
}
