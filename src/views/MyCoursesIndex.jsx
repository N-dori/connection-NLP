import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { userService } from '../services/userService'
import { MyCoursesList } from '../cmps/MyCoursesList'
import RatingModal from '../cmps/RatingModal'
import { reviewService } from '../services/reviews.service'
import { saveReview } from '../store/actions/review.actions'
import { ScheduleTimeForLearning } from '../cmps/ScheduleTimeForLearning'
import { InfinitySpin } from 'react-loader-spinner'
import { socketService,SOCKET_EVENT_REVIEW_ADDED } from '../services/socket.service'
import { eventBus } from '../services/event-bus.service'

export function MyCoursesIndex() {

  const dispatch = useDispatch()
  const [courses, setCourses] = useState(null)
  const [currCourse, setCurrCourse] = useState("")
  const [loggdingUser, setLoggdingUser] = useState(null)
  const [review, setReview] = useState(reviewService.getEmptyReview())
  const [isShown, setIsSown] = useState(false)
  const [rating, setRating] = useState(0)
  const param = useParams()
  const ratingModalRef = useRef()


  useEffect(() => {
    loadUserCourses()
    console.log(param);
    socketService.on(SOCKET_EVENT_REVIEW_ADDED, (data) => {
    console.log('socket data : ---',data)
    eventBus.emit('show-msg', { txt: 'תודה! הדירוג שלך נקלט בהצלחה', type: 'success', delay:6666 })
  
  })
  }, [])

  const loadUserCourses = async () => {
    const loggdingUser = await userService.getLoggedinUser()
    const user = await userService.getUserById(loggdingUser._id)
    setLoggdingUser(user)

    console.log('my user course index', user);
    setCourses(user.courses)
  }
  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value
    setReview((preComment) => ({ ...preComment, [field]: value }))
    console.log('review', review);
  }
  const handelSubmitReview = (ev) => {
    ev.preventDefault()
    review.courseId = currCourse
    review.reviewedBy = {
      _id: loggdingUser._id,
      name: loggdingUser.fname,
      imgUrl: loggdingUser.imgUrl,
      email: loggdingUser.email
    }
    review.reviewedAt = Date.now()
    review.rate = rating
    //TODO: dipatch to store 
    dispatch(saveReview(review))
    console.log('review after all ', review);
    setReview(reviewService.getEmptyReview())
    setIsSown(false)
    window.scrollTo(0,0)
  }

  return (
    courses ?
      <>
        <section className='my-courses-header-container grid'>
          <header className='my-courses-header-wrapper'>
            <h1 className='headline'>הקורסים שלי</h1>
          </header>
        </section>
        <section className='my-courses-list grid'>
          <ScheduleTimeForLearning />

          <MyCoursesList isShown={isShown} setIsSown={setIsSown} setCurrCourse={setCurrCourse} courses={courses} />
          {isShown ? <RatingModal handelSubmitReview={handelSubmitReview}
            ref={ratingModalRef}
            review={review}
            handleChange={handleChange}
            isShown={isShown}
            setIsSown={setIsSown}
            rating={rating}
            setRating={setRating} /> : ''}
          <div className={isShown ? 'screen-filter' : 'hidden'} ></div>
       
        </section>

      </> : <section className='loder-container flex-jc-ac'>
        <div className='flex-jc-ac'>
          <InfinitySpin
            className='spinner'
            width='200'
            color="#448cfb"
          />

        </div>
      </section>
  )
}
