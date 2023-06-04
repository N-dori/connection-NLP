import { useGoogleLogin } from '@react-oauth/google';
import React, { useEffect, useState } from 'react'
import { signup } from '../store/actions/user.actions';

export  function GoogleLoginBtn({googleUser,setGoogleUser,axios,dispatch,setProfile,navigate}) {
    
    useEffect(() => {
        googleLogin()
    }, [googleUser])

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setGoogleUser(codeResponse)
            googleLogin()
        },
        onError: (error) => console.log('Login Failed:', error)
    }
    
    );
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
  return (
<button className="google-signup-btn" onClick={() => login()}>Sign in with Google 🚀 </button>
  )
}
