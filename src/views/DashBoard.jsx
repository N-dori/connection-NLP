import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, removeUser } from '../store/actions/user.actions'
import { TrashSvg } from '../svgs/TrashSvg'
import { EditSvg } from '../svgs/EditSvg'
import { ProgressSvg } from '../svgs/ProgressSvg'
import { useNavigate } from 'react-router-dom'
import { AddSvg } from '../svgs/AddSvg'

export  function DashBoard() {
  
  const navigate = useNavigate()
  const users = useSelector((storeState) => storeState.userModule.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
console.log('useEffect users',users);
}, [users.length])


const onEdit = async (userId) => {
  console.log('userId',userId);
  navigate(`/dashboard/edit/${userId}`)
}
  const onRemove = async (userId) => {
  dispatch(removeUser(userId))
  }

  return (users?
   <section className='dashboard-container flex-col'>
            <main className='dashboard-wrapper flex-col'>
              <h1>ניהול מערכת</h1>
            
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
               <li  className='courses item4'>{user.courses.length?<span>{user.courses.length} קורסים שנרכשו </span>:<span>לא נרכשו</span>}</li>
               <li className='actions item5 flex'> 
               <span onClick={() => onRemove(user._id)} title='מחיקה'><TrashSvg/></span>
               <span onClick={() => onEdit(user._id)} title='עריכה'><EditSvg/></span>
               <span><ProgressSvg/></span>
                </li>
             </>
            )}
              </ul>
              <div className='add-svg-container flex-jc-ac' onClick={()=> {navigate('/dashboard/edit')}}><AddSvg/></div>
            </main>

   </section>:''
  )
}
