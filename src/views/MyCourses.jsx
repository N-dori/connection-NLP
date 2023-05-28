import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { couresService } from '../services/coures.service'
import { CoursePreview } from '../cmps/CoursePreview'

export  function MyCourses() {
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const param = useParams()
  const dispatch = useDispatch()
   
    useEffect(() => {

      console.log("loggdingUser",loggdingUser);
    }, [])


  return (
    loggdingUser?
    <section  className='my-courses-list-container'>
      <h1>MyCourses</h1>
<ul >
{loggdingUser.courses.map( course => 
 <li key={course._id} >{course.title}</li> 
 )}
</ul>     
    </section>:<div>Loaing.....</div>
 
  )
}
