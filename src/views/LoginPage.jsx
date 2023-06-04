import React, { useState, useEffect } from 'react'
import { userService } from '../services/userService'
import { Avatar } from '../svgs/Avatar'

export  function LoginPage() {
  const [user , setUser] = useState()
  const [password, setPassword] = useState('')
  
  
  useEffect(() => {
    loadLocalStorageUser()
  }, [])
  
  const loadLocalStorageUser = async () => {
    const loggdingUser = await userService.getStoredLoginUser()
    setUser(loggdingUser)

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
    setPassword(target.value )
  }

  const imgUrl = `https://res.cloudinary.com/dii16awkb/image/upload/v1684522130/signgupSvg_hawhuc.webp`
  return (
    
    <section className='signup-container login-container flex-jc'>
      
    <form className='signup-form flex' >
      <div className='avatar-container flex-jc-ac'>
        <Avatar/>
      <p>Welcome back, {user?.fname}</p>
      </div>
    <h3 className="signin-title">Log in and start learning</h3>

        <label htmlFor="password">
            <input value={password} onChange={handleChange} className="sign-in-input" required type="password" name="password" id="password" placeholder="Password" />
        </label>
        <button className="sign-in-btn">Log in</button>
        <button className="google-signup-btn" >Log in with Google 🚀 </button>
        </form>
</section>
  )
}
