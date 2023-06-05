import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/actions/user.actions'
import { courseService } from '../services/course.service'

export  function PurchaseCourse() {
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const param = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log('loggdingUser',loggdingUser);
    const handelPayment= async () =>{
      const course = await courseService.getCourseById(param.id)
        loggdingUser.courses.push(course)
        dispatch(updateUser(loggdingUser))
        console.log('loggdingUser',loggdingUser);
        navigate('/')
    }

  return (
      <>
      <h1>payment</h1>
      <div>PurchaseCourse</div>
      <div>PurchaseCourse</div>
      <div>PurchaseCourse</div>
      <div>PurchaseCourse</div>
      <div>PurchaseCourse</div>
            <button onClick={handelPayment}>pay</button>

    </>
  )
}
