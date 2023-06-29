import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CouresList } from './CouresList'
import { loadCourses } from '../store/actions/course.actions'

export  function CoursesIndex() {
    const dispatch = useDispatch()
  
    const courses = useSelector((storeState) => storeState.couresModule.courses)
   
    useEffect(() => {
        dispatch(loadCourses())
        console.log('courses',courses);
    }, [])
    return (
        <section>
            {/* <h2> מה המסלול שהכי מתאים לך?</h2> */}
            <CouresList courses={courses}/>

        </section>
    
  
  )
}
