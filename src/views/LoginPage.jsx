import React, { useState, useEffect } from 'react'
import { userService } from '../services/userService'
import { GoogleLoginBtn } from '../cmps/GoogleLoginBtn'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {  setLoggedinUser } from '../store/actions/user.actions'
import { InfinitySpin   } from  'react-loader-spinner'

export function LoginPage() {
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const [user, setUser] = useState(null)
  const [msg, setMsg] = useState(null)
  // const [userToken, setUserToken] =(browser.cookies.get) 
  const [password, setPassword] = useState('')
  const [googleUser, setGoogleUser] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    loadLoggedinUser()

  }, [loggdingUser])

  const loadLoggedinUser = async () => {
    const loggdingUser = await userService.getLoggedinUser()
    console.log('loginCmp', loggdingUser);
    setUser(loggdingUser)
 

  }

  const onLogin = async (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    if (user) {
try{
  const verifyUser = await userService.login({fname:user.fname,password})
    if (verifyUser) {
      dispatch(setLoggedinUser(verifyUser))
      navigate('/')
      console.log('verifyUser',verifyUser);
      
    }
    else {
      setMsg('הסיסמא אינה תואמת נסה שוב')
    
    }

}catch(err){
console.log('password do not match' ,err);
}
    }
  }
  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break;
      case 'checkbox':
        value = target.checked
        break;
    }
    setPassword(value)

  }

  // const imgUrl = `https://res.cloudinary.com/dii16awkb/image/upload/v1684522130/signgupSvg_hawhuc.webp`
  return (

    <section className='signup-container login-container flex-jc'>

      <form className='signup-form flex' >
        <div className='avatar-container flex-jc-ac'>
            {user?
          <div className='user-img-container flex-jc-ac'>
              <span className='user-img'>{user.fname[0].toUpperCase()}</span> 
          
          </div>: <div className='user-img-container flex-jc-ac'>
              <span className='user-img'>{loggdingUser?.fname[0].toUpperCase()}</span> 
          
          </div>
          }
            {user ? <p className='user-name'>היי  {user.fname} ברוך שובך</p> : 
            <p className='user-name'>היי  {loggdingUser?.fname} ברוך שובך</p>
            }
            </div>
        <h3 className="signin-title">התחבר והתחל ללמוד!</h3>

        <label htmlFor="password">
          <input value={password} onChange={handleChange} className="sign-in-input" required type="password" name="password" id="password" placeholder="סיסמא" />
          <p>{msg ? msg : ''}</p>
        </label>
        <button className="sign-in-btn" onClick={onLogin}>התחבר</button>
        <GoogleLoginBtn
         from={'header'}
          type={'התחבר עם גוגל'}
          googleUser={googleUser}
          setGoogleUser={setGoogleUser}
          axios={axios}
          dispatch={dispatch}
          navigate={navigate} />
        <p className='signup-link'>משתמש לא רשום ?
          <Link to="/signup"> להרשמה לאתר</Link></p>
      </form>
    </section>
  )
}
