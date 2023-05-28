import React, { Component, useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { imgService } from '../services/imgService'
import { userService } from '../services/userService'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {  useDispatch, useSelector } from 'react-redux'
import {  signup } from '../store/actions/user.actions';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export function SignupPage() {

    const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
    const [user, setUser] = useState(userService.getEmptyUser())
    const [googleUser, setGoogleUser] = useState()
    
    const [ profile, setProfile ] = useState(null);
    const dispatch=useDispatch()
    const navigate = useNavigate()
    
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setGoogleUser(codeResponse)
            googleLogin()
        },
        onError: (error) => console.log('Login Failed:', error)
    }
    
    );
    useEffect(() => {
        googleLogin()
    }, [googleUser])

     const googleLogin= async () => {
            if (googleUser) {
             await   axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${googleUser.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log('res.data',res.data)
                       const {name,email,given_name,picture} =res.data
                      const formatedUser = {
                            fname: name,
                            userName:given_name,
                            email,
                            imgUrl:picture,
                          
                        
                      }
                      dispatch(signup(formatedUser))
                        setProfile(formatedUser);
                        console.log('formatedUser',formatedUser);
                    }).then(
                        navigate('/')

                    )
                    .catch((err) => console.log(err));
            }
        }

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
        <section className='signup-container grid'>
            <div className='signup-img-container'>
                <img className='signup-img' src={imgService.getImg('signupImg')} />
            </div>
            <form className='signup-form flex'  onSubmit={onSignup}>
            <h2 className="signin-title">Sign-in</h2>

                <label htmlFor="fname">
                    <input value={fname} onChange={handleChange} className="sign-in-input" required type="text" name="fname" id="fname" placeholder="fullname" />
                </label>
                <label htmlFor="email">
                    <input value={email} onChange={handleChange} className="sign-in-input" required type="email" name="email" id="email" placeholder="email" />
                </label>
                <label htmlFor="userName">
                    <input value={userName} onChange={handleChange} className="sign-in-input" required type="text" name="userName" id="userName" placeholder="user name" />
                </label>
                <label htmlFor="password">
                    <input value={password} onChange={handleChange} className="sign-in-input" required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button className="sign-in-btn">Sign In</button>
                </form>
                <button onClick={() => login()}>Sign in with Google 🚀 </button>

        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {loggdingUser ? (
                <div>
                    <img src={loggdingUser.imgUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {loggdingUser.fname}</p>
                    <p>Email Address: {loggdingUser.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ):'no user loggedin'}
        </div>
        </section>
    )
}
