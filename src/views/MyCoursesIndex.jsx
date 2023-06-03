import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export  function MyCoursesIndex() {
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const courses= loggdingUser.courses
  const param = useParams()
   

  return (
    loggdingUser?
    <section  className='my-courses-list-container'>
      <h1>MyCourses</h1>
      {courses.length>0? <ul className='courses-list-container  clean'>
{courses.map( course => 
<section  className='course-preview grid'>
  <span className='grid-item1'> course</span>
  <span className='grid-item2'>name</span>
  <span className='grid-item3'>price</span>
  <span className='grid-item4'>total videos</span>
  <span className='grid-item5'>watch videos</span>

  <span className='course-name grid-item2' key={course._id}>{course.title}</span>
  <div style={{width:100+"px"}} className='img-container grid-item1'>
<img src={course.imgCoures} alt="image-coures" className="coures-img" />
  </div>
  <span className='grid-item3'>{course.price}</span>
  <span className='grid-item4'>{course.totalVideos}</span>
  <Link className='grid-item5' to={`/course-watch/${course._id}`}>watch</Link>
</section>

 )}            
</ul>:<div>no courses purchased yet..</div>}
    </section>:<div>Loaing.....</div>
 
  )
}
