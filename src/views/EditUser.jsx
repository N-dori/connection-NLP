import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userService } from '../services/userService'
import { BackSvg } from '../svgs/BackSvg'
import { signup, updateUser } from '../store/actions/user.actions'
import { useDispatch, useSelector } from 'react-redux'
import { AddCourseModal } from '../cmps/AddCourseModal'
import { eventBus } from '../services/event-bus.service'

export function EditUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const courses = useSelector((storeState) => storeState.couresModule.courses)
    const param = useParams()
    const [user, setUser] = useState(null)
    const [isAddCourse,setIsAddCourse] = useState(false)

    useEffect(() => {
        if (param.id) {
            loadUser()
        } else {
            setUser(userService.getEmptyUser())
        }
    }, [])

    const loadUser = async () => {
        console.log('user', param.id);
        const user = await userService.getUserById(param.id)
        console.log('user', user);
        setUser(user)
    }

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break;
        }
        setUser((prevUser) => ({ ...prevUser, [field]: value }))
    }

    const handelSubmit = (ev) => {
        ev.preventDefault()
        if(param.id){
           console.log('user before update alll',user);
        dispatch(updateUser(user,'dashbaord'))
       }else{
           dispatch(signup(user,'dashbaord'))

       }
        setTimeout(() => {
            navigate('/dashboard')

        }, 1000);
    }
const addCourse =(ev) =>{
    ev.preventDefault()
    ev.stopPropagation()
    const form = ev.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
   // formJson = selected value
    const course = courses.find(course => course.title === formJson.course) 
    const miniCourse = {
        _id:course._id,
        courseCoverImg:course.courseCoverImg,
        title:course.title,
        subTitle: course.subTitle
      }
      user.courses.push(miniCourse) 

console.log('user after adding the course',user);

setIsAddCourse(!isAddCourse)
eventBus.emit('show-msg', { txt: 'קורס הוסף בהצלחה!', type: 'success', delay:6666 })

}
    return (

        user ?
            <section className='edit-user-container '>
                <div className="headline-container flex-sb">

                    <BackSvg />
                    <h1>{param.id ? 'עדכן משתמש' : 'הוסף משתמש'}</h1>
                </div>
                <main className='edit-user-wrapper flex-jc-ac'>
                {isAddCourse?
               <AddCourseModal addCourse={addCourse} setIsAddCourse={setIsAddCourse} isAddCourse={isAddCourse}/>
                :
                    <p onClick={()=>setIsAddCourse(!isAddCourse)} className='is-add-course'>אם ברצונך להוסף קורס למשתמש לחצי כאן</p>
                }

                    <form className='edit-user-form flex-col' onSubmit={handelSubmit}>
                        <label htmlFor="fname">
                            <input value={user.fname} onChange={handleChange} className="edit-user-input" required type="text" name="fname" id="fname" placeholder={param.id ? "עדכן שם " : 'שם מלא'} />
                        </label>
                        <label htmlFor="email">
                            <input value={user.email} onChange={handleChange} className="edit-user-input" required type="email" name="email" id="email" placeholder={param.id ? " עדכן אימייל" : 'אימייל'} />
                        </label>
                        {param.id ? '' :
                            <label htmlFor="password">
                                <input value={user.password} onChange={handleChange} className="edit-user-input" required type="password" name="password" id="password" placeholder="בחר סיסמא" />
                            </label>
                        }
                 
                        <button className="edit-user-btn">{param.id ? ' עדכן משתמש' : 'שמירת משתמש חדש'}</button>

                    </form>
                

                </main>

            </section> : ''
    )
}
