import React, { Component, useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { imgService } from '../services/imgService'
import { userService } from '../services/userService'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {  useDispatch, useSelector } from 'react-redux'
import {  signup } from '../store/actions/user.actions';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLoginBtn } from '../cmps/GoogleLoginBtn';

export function SignupPage() {

    const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
    const [user, setUser] = useState(userService.getEmptyUser())
    const [googleUser, setGoogleUser] = useState()
    
    const [ profile, setProfile ] = useState(null);
    const dispatch=useDispatch()
    const navigate = useNavigate()
 
    const logOut = () => {
        googleLogout();
        setProfile(null);
    }

 
    console.log('loggdingUser',loggdingUser);
   const onSignup =  (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        dispatch(signup(user))
        navigate('/')
    //  const credintials= await userService.signup(user)
     setProfile((user))
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
        setUser((prevUser) => ({ ...prevUser, [field]: value }))
    }
    if (!user) return (<div>Loading...</div>)
    const { fname, email, userName, password } = user
    const imgUrl = `https://res.cloudinary.com/dii16awkb/image/upload/v1684522130/signgupSvg_hawhuc.webp`
    
    return (
        <section className='signup-container flex-jc'>
            {/* <div className='signup-img-container'>
                <img className='signup-img' src={imgService.getImg('signupImg')} />
            </div> */}
            <form className='signup-form flex'  onSubmit={onSignup}>
            <h3 className="signin-title">Sign-up and start learning</h3>

                <label htmlFor="fname">
                    <input value={fname} onChange={handleChange} className="sign-in-input" required type="text" name="fname" id="fname" placeholder="Fullname" />
                </label>
                <label htmlFor="email">
                    <input value={email} onChange={handleChange} className="sign-in-input" required type="email" name="email" id="email" placeholder="Email" />
                </label>
                <label htmlFor="password">
                    <input value={password} onChange={handleChange} className="sign-in-input" required type="password" name="password" id="password" placeholder="Password" />
                </label>
                <button className="sign-in-btn">Sign up</button>
                <GoogleLoginBtn 
                googleUser={googleUser}
                setGoogleUser={setGoogleUser}
                axios={axios}
                dispatch={dispatch}
                setProfile={setProfile}
                navigate={navigate}
                />
                <br/>
                <p className='flex-jc-ac'>Already have an account?<Link to='/login'>Log in</Link></p>
                
                </form>

        </section>
    )
}
