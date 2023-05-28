import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CouresList } from './CouresList'
import { loadCourses } from '../store/actions/coures.actions'

export  function CoursesIndex() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const courses = useSelector((storeState) => storeState.couresModule.courses)
    useEffect(() => {
        dispatch(loadCourses())
        console.log('courses',courses);
    }, [])
    return (
        <>
        <CouresList courses={courses}/>
    </>
  
  )
}
