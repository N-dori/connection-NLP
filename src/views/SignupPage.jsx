import React, { Component, useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { imgService } from '../services/imgService'
import { userService } from '../services/userService'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export function SignupPage() {
    const [user, setUser] = useState(userService.getEmptyUser())
    const [ profile, setProfile ] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log('res.data',res.data)
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    const onSignup = () => {
        userService.signup(user)
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
    const { fname, email, userName, passward } = user
    const imgUrl = `https://res.cloudinary.com/dii16awkb/image/upload/v1684522130/signgupSvg_hawhuc.webp`
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <section className='signup-container grid'>
            <div className='signup-img-container'>
                <img className='signup-img' src={imgService.getImg('signupImg')} />
            </div>
            <form className='signup-form flex'>
            <h2 className="signin-title">Sign-in</h2>

                <label htmlFor="fname">
                    <input value={fname} onChange={handleChange} className="sign-in-input" required type="text" name="fname" id="fname" placeholder="fullname" />
                </label>
                <label htmlFor="email">
                    <input value={email} onChange={handleChange} className="sign-in-input" required type="text" name="email" id="email" placeholder="email" />
                </label>
                <label htmlFor="userName">
                    <input value={userName} onChange={handleChange} className="sign-in-input" required type="text" name="userName" id="userName" placeholder="user name" />
                </label>
                <label htmlFor="email">
                    <input value={passward} onChange={handleChange} className="sign-in-input" required type="text" name="password" id="password" placeholder="password" />
                </label>
                <button className="sign-in-btn" onClick={onSignup}>Sign In</button>
                <button onClick={() => login()}>Sign in with Google 🚀 </button>

                {/* <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div> */}
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ):'no user loggedin'}
        </div>
            </form>
        </section>
    )
}
