import React, { useEffect, useState } from 'react'
import { imgService } from '../services/imgService'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ReviewsList } from './ReviewsList'

export function CourseReviews() {

const reviews = useSelector((storeState) => storeState.reviewModule.reviews)
const param = useParams()
const [totalReviews, setTotalReviews] = useState(null)
const [courseReviews, setCourseReviews] = useState(null)
const [page, setPage] = useState(4)

const loadCourseReviews = () => {
  const courseReviews= reviews.filter(review=>review.courseId === param.id)
  setTotalReviews(courseReviews)
  console.log('PortionOfReviwes',courseReviews.slice(0,page));
  setCourseReviews(courseReviews.slice(0,page))
  
}
const getMoreReviews = () => {
  setPage(page + 4)
}

useEffect(()=>{
  loadCourseReviews()
 console.log('reviews.length',reviews.length); 
},[page])


  return (courseReviews?
    <section className="course-reviwes-container ">
      <h1 className='headline'>ביקורות</h1>
      <section className='reviews-wrapper flex'>
      {reviews.length?
        courseReviews.map(review =>    
      (  <ReviewsList key={review._id} review={review}/>)
        ):<span>אין תגובות(עדיין)</span>
      }
      {
        totalReviews.length>page ?
        <span className='get-more-reviews' onClick={getMoreReviews}>טען תגובות נוספות</span>:""
      }

      </section>

    </section>:<div>Loading....</div>
  )
}
