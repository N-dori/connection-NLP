import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CouresList } from './CouresList'
import { loadCourses } from '../store/actions/course.actions'

const CoursesIndex = React.forwardRef((props,ref) =>  {
    
    const dispatch = useDispatch()
    
    const courses = useSelector((storeState) => storeState.couresModule.courses)
    
    useEffect(() => {
        dispatch(loadCourses())
        console.log('courses',courses);
    }, [])
    return (
        <section ref={ref} className='course-index-container'>
            <h2 className='title'>הקורסים שלנו</h2>
            <CouresList courses={courses}/>

        </section>
  
  )
})
export default CoursesIndex;
