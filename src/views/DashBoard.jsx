import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/actions/user.actions'

export  function DashBoard() {
  const users = useSelector((storeState) => storeState.userModule.users['0'])
  const dispatch = useDispatch()
const [user, setUser] = useState()
  useEffect(() => {
    if(!users){
    loadUsers()
  }
  console.log('users*****',users);
}, [users])

const loadUsers = async () => {
    dispatch(getUsers())
    // setUsers(users)
  }
  const handelChack = (user) => {
    if(user.isChecked){
      user.isChecked =  !user.isChecked
    }
    else{
      user.isChecked = true
      setUser(user)
    }


console.log('user',user);
  }
  return (users?
   <section className='dashboard-container '>
            <main className='dashboard-wrapper flex-col'>
              <h1>ניהול מערכת</h1>
              <ul className='contacts-contianer grid clean'>
            
                <li className='item item1'> שם המשתמש </li>
                <li className='item item2'> אימייל</li>
                <li className='item item3'> עגלת קניות</li>
                <li className='item item4'> קורסים</li>

             { users.map(user =>
             <>
             <div className='name-wrapper flex item1'>
             <input  className="input-check" type='checkbox' name='user' id="user" onClick={(ev)=>handelChack(user)} />
               <li  className='item1' >{user.fname}</li>

             </div>
               <li className='item2' >{user.email}</li>
               <li className='item3' > {user.cart.length} פריטים בעגלה</li>
               <li  className='item4'>{user.courses.length?<span>{user.courses.length} קורסים שנרכשו </span>:<span>לא נרכשו</span>}</li>
             </> 
            )}
              </ul>
            </main>

   </section>:''
  )
}
