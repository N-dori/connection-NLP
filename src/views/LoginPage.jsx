import React, { useState, useEffect } from 'react'
import { userService } from '../services/userService'
import { Avatar } from '../svgs/Avatar'
import { GoogleLoginBtn } from '../cmps/GoogleLoginBtn'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { setLoggedinUser, vrifyPassword } from '../store/actions/user.actions'

export  function LoginPage() {
  const [user , setUser] = useState([])
  const [msg, setMsg] = useState(null) 
  const [password, setPassword] = useState('')
  const [googleUser, setGoogleUser] = useState()
  const dispatch=useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    loadLocalStorageUser()
  }, [])
  
  const loadLocalStorageUser = async () => {
    const loggdingUser = await userService.getStoredLoginUser()
    console.log('loginCmp',loggdingUser);
    setUser(loggdingUser)

  }
  
  const login =  async (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
    if(user){
const verifyUser= await userService.vrifyPassword(user._id,password)
if(verifyUser){
  dispatch(setLoggedinUser(verifyUser))
  navigate('/')
}
else{
    setMsg('password do not match')
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

  const imgUrl = `https://res.cloudinary.com/dii16awkb/image/upload/v1684522130/signgupSvg_hawhuc.webp`
  return (
    
    <section className='signup-container login-container flex-jc'>
      
    <form className='signup-form flex' >
      <div className='avatar-container flex-jc-ac'>
        <Avatar/>
        {user?<p>Welcome back, {user.fname}</p>:''} 
      </div>
    <h3 className="signin-title">Log in and start learning</h3>

        <label htmlFor="password">
            <input value={password} onChange={handleChange} className="sign-in-input" required type="password" name="password" id="password" placeholder="Password" />
            <p>{msg?msg:''}</p>
        </label>
        <button className="sign-in-btn" onClick={login}>Log in</button>
        <GoogleLoginBtn
        type={'Log in with Google'}
        googleUser={googleUser}
        setGoogleUser={setGoogleUser}
        axios={axios}
        dispatch={dispatch}
        navigate={navigate}/>
        <p className='signup-link'>Don't have an account yet?
<Link to="/signup"> Sign up</Link></p>
        </form>
</section>
  )
}
