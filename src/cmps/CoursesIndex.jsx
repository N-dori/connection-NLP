import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CouresList } from './CouresList'
import { loadCourses } from '../store/actions/course.actions'
import { courseService } from '../services/course.service'
import { utilService } from '../services/util.service'

const CoursesIndex = React.forwardRef((props,ref) =>  {
    
    const dispatch = useDispatch()
    
    const courses = useSelector((storeState) => storeState.couresModule.courses)
    const addCourse = async () => {
          
        // delete courses[0]._id
        // console.log('courses',courses[0]);
        const addedCourse= await  courseService.addCourse( )
        console.log('courses',addedCourse);

    }
    useEffect(() => {
        dispatch(loadCourses())
    }, [])
    return (
        <section ref={ref} className='course-index-container'>
            <h2 className='title'>הקורסים שלנו</h2>
            <CouresList courses={courses}/>
         {/* <button style={{width:'100px',height:'25px'}} onClick={addCourse}>addcourse</button> */}
        </section>
  
  )
})
export default CoursesIndex;
