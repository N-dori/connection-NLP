import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { userService } from '../services/userService'

export  function LoginPage() {
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
  const [user, setUser] = useState(userService.getEmptyUser())
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
    setUser((prevUser) => ({ ...prevUser, [field]: value }))
  }
  if (!user) return (<div>Loading...</div>)
  const { fname, email, userName, password } = user
  const imgUrl = `https://res.cloudinary.com/dii16awkb/image/upload/v1684522130/signgupSvg_hawhuc.webp`
  return (
    <section className='signup-container flex-jc'>
    <form className='signup-form flex' >
    <h3 className="signin-title">Sign-up and start learning</h3>

     
        <label htmlFor="password">
            <input value={password} onChange={handleChange} className="sign-in-input" required type="password" name="password" id="password" placeholder="Password" />
        </label>
        <button className="sign-in-btn">Sign up</button>
        <button className="google-signup-btn" >Sign in with Google 🚀 </button>
        </form>
</section>
  )
}
