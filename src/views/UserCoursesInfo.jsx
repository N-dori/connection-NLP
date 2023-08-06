import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userService } from '../services/userService'
import { UserCoursesList } from '../cmps/UserCoursesList'

export  function UserCoursesInfo() {
    const [user, setUser] = useState(null)
    const param = useParams()

    useEffect(() => {
     loadUser()
    }, [])
    
    
    const loadUser = async () => {
        console.log('user', param.id);
        const user = await userService.getUserById(param.id)
        console.log('UserCoursesInfo user', user.courses);
        setUser(user)
    }

  return (
    user?
    <section className='user-courses-container'>
        <main className='user-courses-wrapper'>
        <h1 className='user-courses-headline'>מצב הקורסים של {user.fname}</h1>
            
            <ul className='user-courses-list grid clean'>
              <li className='item item1'> שם הקורס </li>
              <li className='item item2'> תאריך רכישה </li>
              <li className='item item3'> התקדמות </li>
                  <UserCoursesList courses={user.courses}/>
            </ul>
 
        </main>
                
    </section>:''
  )
}
