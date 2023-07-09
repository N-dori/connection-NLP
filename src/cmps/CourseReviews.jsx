import React, { useEffect, useState } from 'react'
import { imgService } from '../services/imgService'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ReviewsList } from './ReviewsList'

export function CourseReviews() {

const reviews = useSelector((storeState) => storeState.reviewModule.reviews)
const param = useParams()
const [courseReviews, setCourseReviews] = useState(null)

const loadCourseReviews = () => {
  const courseReviews= reviews.filter(review=>review.courseId === param.id)
  console.log('courseReviews',courseReviews);
  console.log('reviews',reviews);
  console.log('param.id',param.id);
  setCourseReviews(courseReviews)
}
useEffect(()=>{
  loadCourseReviews()
},[])


  return (courseReviews?
    <section className="course-reviwes-container ">
      <h1 className='headline'>ביקורות</h1>
      <section className='reviews-wrapper flex'>
      {
        courseReviews.map(review =>    
      (  <ReviewsList key={review._id} review={review}/>)
        )
      }
       
      </section>

    </section>:<div>Loading....</div>
  )
}
