import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, removeUser } from '../store/actions/user.actions'
import { TrashSvg } from '../svgs/TrashSvg'
import { EditSvg } from '../svgs/EditSvg'
import { useNavigate } from 'react-router-dom'
import { AddSvg } from '../svgs/AddSvg'
import { XSvg } from '../svgs/XSvg'

export  function DashBoard() {
  
  const navigate = useNavigate()
  const users = useSelector((storeState) => storeState.userModule.users)
  const dispatch = useDispatch()
  const [isDeletionModal,setIsDeletionModal] = useState(false)
  const [currUserId,setCurrUserId] = useState({})

  useEffect(() => {
    dispatch(getUsers())
console.log('useEffect users',users);
}, [users.length])


const onEdit = async (userId) => {
  console.log('userId',userId);
  navigate(`/dashboard/edit/${userId}`)
}
  const onRemove = async () => {
    dispatch(removeUser(currUserId))
    setIsDeletionModal(!isDeletionModal)
  }
  const onDisplayCourseInfo = (userId) => {
    navigate(`/dashboard/courses-info/${userId}`)
    
  }
  const onOpenDeletionModal = (userId) => {
    setCurrUserId(userId)
    setIsDeletionModal(!isDeletionModal)
  }
  return (users?
   <section className='dashboard-container flex-col'>
            <main className='dashboard-wrapper flex-col'>
              <h1 className='headline-dashbaord'>ניהול מערכת</h1>
            
              <ul className='contacts-contianer grid clean'>
            
                <li className='item item1'> שם המשתמש </li>
                <li className='item item2'> אימייל</li>
                <li className='item item3'> עגלת קניות</li>
                <li className='item item4'> קורסים</li>

             { users.map(user =>
             < >
             <div className='name-wrapper flex item1'>
               <li  className='item1' >{user.fname}</li>

             </div>
               <li className='email item2' >{user.email}</li>
               <li className='cart item3' > {user.cart.length} פריטים בעגלה</li>
               <li  className='courses item4' onClick={() => onDisplayCourseInfo(user._id)} >{user.courses.length?<span>{user.courses.length} קורסים שנרכשו </span>:<span>לא נרכשו</span>}</li>
               <li className='actions item5 flex'> 
               <span onClick={() => onOpenDeletionModal(user._id)}  title='מחיקה'><TrashSvg/></span>
               <span onClick={() => onEdit(user._id)} title='עריכה'><EditSvg/></span>

                </li>
             </>
            )}
              </ul>
            {  isDeletionModal ?<section  className='deletion-modal flex-col'>
            <span className='close-deletion-modal' onClick={() => setIsDeletionModal(!isDeletionModal)}><XSvg /></span>  
                 <span>האם את בטוחה שאת רוצה להסיר את המשתמש?</span>
                 <button className='remove-btn' onClick={onRemove}>מחק</button>
               </section>:''}
           <div className='add-svg-container flex-jc-ac' title='הוספת משתמש חדש' onClick={()=> {navigate('/dashboard/edit')}}><AddSvg/></div>
            </main>

   </section>:''
  )
}
